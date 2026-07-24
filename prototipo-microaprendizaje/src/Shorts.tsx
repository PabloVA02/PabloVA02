import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
  type PanInfo,
} from "framer-motion";
import { SHORTS, urlFoto, type Foto, type Short } from "./shorts";
import { Ilustracion } from "./Scene";
import { GlyphBack, GlyphClose, GlyphHeart, GlyphRayo, GlyphShare } from "./glyphs";
import { enterVariants, spring, springPop, springSoft, springTight } from "./motion";

/* ==========================================================================
   Shorts.

   Dos pantallas. El MURO, que es una pila vertical de portadas a sangre, y el
   LECTOR, que es un mazo horizontal: se desliza a la derecha para profundizar.

   Sobre las fotografías: son de Wikimedia Commons y se piden por red. Aquí
   eso importa más de lo normal, porque una foto que no carga deja un agujero
   negro en mitad del diseño. Por eso <Fotografia> nunca enseña un hueco:
   mientras carga hay un degradado del color del short, y si falla del todo se
   queda una de nuestras ilustraciones. El diseño no depende de la red, la
   aprovecha.
   ========================================================================== */

const UMBRAL_PX = 62;
const UMBRAL_VEL = 480;

/** Lo que se espera a una fotografía antes de rendirse y dibujar la nuestra. */
const ESPERA_MAX = 6000;

/* --------------------------------------------------------------------------
   La fotografía
   -------------------------------------------------------------------------- */

type EstadoFoto = "cargando" | "lista" | "fallida";

function Fotografia({
  foto,
  arte,
  reducido,
  /** Deriva lenta tipo Ken Burns. Se apaga en las fotos pequeñas. */
  deriva = true,
  /** Parallax. Se aplica DENTRO de la caja recortada, nunca fuera. */
  desplaza,
}: {
  foto: Foto;
  arte: Short["arte"];
  reducido: boolean;
  deriva?: boolean;
  desplaza?: MotionValue<number>;
}) {
  const [estado, setEstado] = useState<EstadoFoto>("cargando");

  // La imagen se precarga fuera del árbol para poder decidir qué pintar antes
  // de que el navegador enseñe el icono de imagen rota.
  //
  // El plazo no es una precaución de manual: una petición bloqueada no dispara
  // `onerror`, se queda colgada. Sin plazo, una red lenta o un cortafuegos
  // dejan el barrido de carga girando para siempre, que es peor que enseñar
  // directamente la ilustración.
  useEffect(() => {
    let vivo = true;
    setEstado("cargando");

    const img = new Image();
    img.onload = () => vivo && setEstado("lista");
    img.onerror = () => vivo && setEstado("fallida");
    img.src = urlFoto(foto);

    const plazo = window.setTimeout(() => {
      if (vivo && !img.complete) setEstado("fallida");
    }, ESPERA_MAX);

    return () => {
      vivo = false;
      window.clearTimeout(plazo);
    };
  }, [foto]);

  return (
    <div className="foto-caja">
      {/* Fondo de color: nunca se ve blanco, ni siquiera un instante */}
      <div className="foto-fondo" />

      <motion.div className="foto-desplaza" style={desplaza ? { x: desplaza } : undefined}>
      <AnimatePresence>
        {estado === "lista" && (
          <motion.img
            key="foto"
            className="foto-img"
            src={urlFoto(foto)}
            alt={foto.alt}
            style={{ objectPosition: foto.foco ?? "50% 50%" }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={
              reducido || !deriva
                ? { opacity: 1, scale: 1.02 }
                : { opacity: 1, scale: [1.08, 1.16] }
            }
            transition={
              reducido || !deriva
                ? springSoft
                : {
                    opacity: { duration: 0.7 },
                    scale: { duration: 24, ease: "linear", repeat: Infinity, repeatType: "reverse" },
                  }
            }
          />
        )}

        {estado === "fallida" && (
          <motion.div
            key="respaldo"
            className="foto-respaldo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={springSoft}
          >
            <Ilustracion arte={arte} reducido={reducido} />
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>

      {/* Barrido mientras carga: sugiere que viene algo, no que esté roto */}
      {estado === "cargando" && !reducido && (
        <motion.div
          className="foto-barrido"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

/* --------------------------------------------------------------------------
   El muro
   -------------------------------------------------------------------------- */

/**
 * El muro no es una lista de fichas: es un pase a pantalla completa. Nada más
 * entrar ya hay una historia ocupando todo, con la fotografía en grande y el
 * texto abajo. Se sube para cambiar de historia y se arrastra a la derecha
 * para meterse en la que estés viendo.
 *
 * El anclaje vertical lo hace el navegador con `scroll-snap`, que va a 60 fps
 * porque no pasa por JavaScript. Lo único que se observa desde React es CUÁL
 * está delante, y eso solo sirve para animar su texto y para no tener diez
 * derivas Ken Burns corriendo a la vez.
 */
export function MuroShorts({ onAbrir }: { onAbrir: (s: Short) => void }) {
  const reducido = useReducedMotion();
  const [activo, setActivo] = useState(0);
  const scroll = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const caja = scroll.current;
    if (!caja) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.indice);
            if (!Number.isNaN(i)) setActivo(i);
          }
        }
      },
      { root: caja, threshold: 0.6 },
    );

    for (const hijo of Array.from(caja.children)) observador.observe(hijo);
    return () => observador.disconnect();
  }, []);

  return (
    <motion.div
      className="muro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
    >
      {/* La marca flota sobre la foto: la sección se reconoce sin robar sitio */}
      <motion.header
        className="muro-marca"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springPop, delay: 0.1 }}
      >
        <span className="muro-rayo">
          <GlyphRayo tamano={15} />
        </span>
        Shorts
      </motion.header>

      {/* Cuántas historias hay y por cuál vas */}
      <div className="muro-cuenta" aria-hidden>
        {SHORTS.map((s, i) => (
          <span key={s.id} className="muro-punto" data-activo={i === activo} />
        ))}
      </div>

      <div className="muro-pase" ref={scroll}>
        {SHORTS.map((s, i) => (
          <PaginaShort
            key={s.id}
            short={s}
            indice={i}
            activo={i === activo}
            reducido={!!reducido}
            onAbrir={() => onAbrir(s)}
          />
        ))}
      </div>
    </motion.div>
  );
}

function PaginaShort({
  short,
  indice,
  activo,
  reducido,
  onAbrir,
}: {
  short: Short;
  indice: number;
  activo: boolean;
  reducido: boolean;
  onAbrir: () => void;
}) {
  const x = useMotionValue(0);
  // El texto va pegado al dedo y la foto se queda atrás: al arrastrar hacia la
  // historia se nota profundidad, no un cambio de pantalla plano.
  const xFoto = useTransform(x, (v) => v * 0.3);

  function alSoltar(_: unknown, info: PanInfo) {
    if (info.offset.x < -UMBRAL_PX || info.velocity.x < -UMBRAL_VEL) return onAbrir();
    if (info.offset.x > UMBRAL_PX || info.velocity.x > UMBRAL_VEL) return onAbrir();
    animate(x, 0, springSoft);
  }

  return (
    <section className="muro-pagina" data-indice={indice} style={{ ["--acento" as string]: short.color }}>
      <div className="muro-foto">
        <Fotografia
          foto={short.foto}
          arte={short.arte}
          reducido={reducido}
          deriva={activo}
          desplaza={xFoto}
        />
      </div>
      <div className="muro-velo" />

      <motion.div
        className="muro-texto"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.34}
        dragMomentum={false}
        onDragEnd={alSoltar}
        onClick={onAbrir}
      >
        {/* Se anima solo la que está delante: entrar en pantalla es el disparo */}
        <motion.span
          className="muro-etiqueta"
          initial={false}
          animate={activo ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ ...springSoft, delay: activo ? 0.06 : 0 }}
        >
          {short.categoria} · {short.minutos} min
        </motion.span>
        <motion.h2
          initial={false}
          animate={activo ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ ...springSoft, delay: activo ? 0.13 : 0 }}
        >
          {short.titulo}
        </motion.h2>
        <motion.p
          initial={false}
          animate={activo ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ ...springSoft, delay: activo ? 0.2 : 0 }}
        >
          {short.gancho}
        </motion.p>

        <motion.span
          className="muro-tirar"
          initial={false}
          animate={activo ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ ...springSoft, delay: activo ? 0.27 : 0 }}
        >
          <motion.span
            className="muro-flecha"
            animate={reducido ? {} : { x: [0, 7, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            →
          </motion.span>
          Desliza para profundizar
        </motion.span>
      </motion.div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   El lector
   -------------------------------------------------------------------------- */

export function LectorShort({
  short,
  onSalir,
  onFin,
}: {
  short: Short;
  onSalir: () => void;
  onFin: (minutos: number) => void;
}) {
  const [indice, setIndice] = useState(0);
  const [sentido, setSentido] = useState(1);
  const [guardado, setGuardado] = useState(false);
  const reducido = useReducedMotion();
  const arranque = useRef(Date.now());
  const bloqueado = useRef(false);

  // Un solo valor de gesto, como en la lección: el texto va pegado al dedo y
  // el fondo se queda atrás.
  const x = useMotionValue(0);
  const xFondo = useTransform(x, (v) => v * 0.22);
  const xTexto = useTransform(x, (v) => v * 0.85);

  // La portada cuenta como tarjeta: es la primera.
  const total = short.tarjetas.length + 1;

  function avanzar(paso: number) {
    if (bloqueado.current) return;
    const destino = indice + paso;
    if (destino < 0) return rebotar(1);
    if (destino >= total) return onFin((Date.now() - arranque.current) / 60000);

    bloqueado.current = true;
    setSentido(paso);
    setIndice(destino);
    animate(x, 0, { ...springSoft, onComplete: () => (bloqueado.current = false) });
  }

  function rebotar(direccion: number) {
    animate(x, direccion * 26, { ...spring, onComplete: () => animate(x, 0, springSoft) });
  }

  function alSoltar(_: unknown, info: PanInfo) {
    const { offset, velocity } = info;
    if (offset.x < -UMBRAL_PX || velocity.x < -UMBRAL_VEL) return avanzar(1);
    if (offset.x > UMBRAL_PX || velocity.x > UMBRAL_VEL) return avanzar(-1);
    animate(x, 0, springSoft);
  }

  useEffect(() => {
    function teclas(e: KeyboardEvent) {
      if (e.key === "ArrowRight") avanzar(1);
      if (e.key === "ArrowLeft") avanzar(-1);
      if (e.key === "Escape") onSalir();
    }
    window.addEventListener("keydown", teclas);
    return () => window.removeEventListener("keydown", teclas);
  });

  const portada = indice === 0;
  const tarjeta = portada ? null : short.tarjetas[indice - 1];

  return (
    <motion.div
      className="short"
      style={{ ["--acento" as string]: short.color }}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1, transition: spring }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
    >
      <div className="short-head">
        <button className="icon-btn" onClick={onSalir} aria-label="Cerrar historia">
          <GlyphClose />
        </button>
        <motion.button
          className="icon-btn"
          onClick={() => avanzar(-1)}
          disabled={indice === 0}
          whileTap={{ scale: 0.9 }}
          aria-label="Tarjeta anterior"
        >
          <GlyphBack />
        </motion.button>
        {/* Un tramo por tarjeta, como en las historias: se ve cuánto falta */}
        <div className="short-tramos">
          {Array.from({ length: total }, (_, i) => (
            <span key={i} className="short-tramo">
              <motion.span
                className="short-tramo-relleno"
                initial={false}
                animate={{ scaleX: i <= indice ? 1 : 0 }}
                transition={springTight}
              />
            </span>
          ))}
        </div>
      </div>

      <motion.div
        className="short-area"
        drag="x"
        style={{ x }}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.42}
        dragMomentum={false}
        onDragEnd={alSoltar}
      >
        <AnimatePresence mode="wait" custom={sentido}>
          <motion.div
            key={indice}
            className="short-carta"
            data-forma={portada ? "portada" : tarjeta!.forma}
            custom={sentido}
            initial={{ opacity: 0, x: sentido * 34 }}
            animate={{ opacity: 1, x: 0, transition: { ...spring, delay: 0.05 } }}
            exit={{ opacity: 0, x: sentido * -28, transition: { duration: 0.16 } }}
          >
            {portada ? (
              <>
                {/* La foto manda: ocupa la mitad de arriba, a sangre */}
                <div className="short-portada-foto">
                  <Fotografia
                    foto={short.foto}
                    arte={short.arte}
                    reducido={!!reducido}
                    desplaza={xFondo}
                  />
                  <div className="short-degradado" />
                </div>

                <motion.div className="short-portada-texto" style={{ x: xTexto }}>
                  <motion.span
                    className="short-etiqueta"
                    custom={0}
                    variants={enterVariants}
                    initial="hidden"
                    animate="shown"
                  >
                    {short.categoria} · {short.minutos} min
                  </motion.span>
                  <motion.h1
                    custom={1}
                    variants={enterVariants}
                    initial="hidden"
                    animate="shown"
                  >
                    {short.titulo}
                  </motion.h1>
                  <motion.p
                    className="short-entrada"
                    custom={2}
                    variants={enterVariants}
                    initial="hidden"
                    animate="shown"
                    dangerouslySetInnerHTML={{ __html: short.entrada }}
                  />
                  <motion.p
                    className="short-credito"
                    custom={3}
                    variants={enterVariants}
                    initial="hidden"
                    animate="shown"
                  >
                    {short.foto.autor} · {short.foto.licencia}
                  </motion.p>
                </motion.div>
              </>
            ) : (
              <CuerpoTarjeta tarjeta={tarjeta!} arte={short.arte} reducido={!!reducido} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {indice === 0 && (
          <motion.p
            className="hint-swipe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            Desliza para profundizar
          </motion.p>
        )}
      </AnimatePresence>

      <div className="actions">
        <div className="action-group">
          <motion.button className="action" whileTap={{ scale: 0.86 }} aria-label="Compartir">
            <GlyphShare />
          </motion.button>
          <motion.button
            className="action"
            data-on={guardado}
            onClick={() => setGuardado((v) => !v)}
            whileTap={{ scale: 0.86 }}
            animate={guardado ? { scale: [1, 1.28, 1] } : {}}
            transition={springPop}
            aria-label="Guardar historia"
            aria-pressed={guardado}
          >
            <GlyphHeart on={guardado} />
          </motion.button>
        </div>

        <motion.button
          className="short-siguiente"
          whileTap={{ scale: 0.95 }}
          transition={springPop}
          onClick={() => avanzar(1)}
        >
          {indice === total - 1 ? "Terminar" : "Seguir"}
        </motion.button>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   El cuerpo de cada tarjeta. La forma manda sobre la maquetación, igual que
   en los capítulos.
   -------------------------------------------------------------------------- */

function CuerpoTarjeta({
  tarjeta,
  arte,
  reducido,
}: {
  tarjeta: NonNullable<Short["tarjetas"][number]>;
  arte: Short["arte"];
  reducido: boolean;
}) {
  if (tarjeta.forma === "golpe") {
    return (
      <div className="short-golpe">
        <motion.span
          className="short-comilla"
          initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ ...springPop, delay: 0.1 }}
        >
          <GlyphRayo />
        </motion.span>
        <motion.p custom={1} variants={enterVariants} initial="hidden" animate="shown">
          {tarjeta.frase}
        </motion.p>
      </div>
    );
  }

  if (tarjeta.forma === "cifra") {
    return (
      <div className="short-cifra">
        <Contador valor={tarjeta.cifra} reducido={reducido} />
        <motion.span
          className="short-unidad"
          custom={2}
          variants={enterVariants}
          initial="hidden"
          animate="shown"
        >
          {tarjeta.unidad}
        </motion.span>
        <motion.p
          custom={3}
          variants={enterVariants}
          initial="hidden"
          animate="shown"
          dangerouslySetInnerHTML={{ __html: tarjeta.texto }}
        />
      </div>
    );
  }

  if (tarjeta.forma === "foto") {
    return (
      <>
        <motion.div
          className="short-foto-media"
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={springSoft}
        >
          <Fotografia foto={tarjeta.foto} arte={arte} reducido={reducido} />
        </motion.div>
        <motion.p
          className="short-cuerpo"
          custom={2}
          variants={enterVariants}
          initial="hidden"
          animate="shown"
          dangerouslySetInnerHTML={{ __html: tarjeta.texto }}
        />
        <motion.p
          className="short-credito"
          custom={3}
          variants={enterVariants}
          initial="hidden"
          animate="shown"
        >
          {tarjeta.foto.autor} · {tarjeta.foto.licencia}
        </motion.p>
      </>
    );
  }

  if (tarjeta.forma === "arte") {
    return (
      <>
        <motion.p
          className="short-cuerpo"
          custom={1}
          variants={enterVariants}
          initial="hidden"
          animate="shown"
          dangerouslySetInnerHTML={{ __html: tarjeta.texto }}
        />
        <div className="short-arte">
          <Ilustracion arte={tarjeta.arte} reducido={reducido} retraso={0.1} />
        </div>
      </>
    );
  }

  return (
    <motion.p
      className="short-cuerpo"
      data-solo
      custom={1}
      variants={enterVariants}
      initial="hidden"
      animate="shown"
      dangerouslySetInnerHTML={{ __html: tarjeta.texto }}
    />
  );
}

/**
 * La cifra sube desde cero cuando es un número, porque ver crecer un número
 * es parte del dato. Cuando no lo es —«8:15», «⅓»— entra con muelle y ya.
 */
function Contador({ valor, reducido }: { valor: string; reducido: boolean }) {
  const numero = Number(valor.replace(/\./g, "").replace(",", "."));
  const contable = !reducido && Number.isFinite(numero) && numero > 0;
  const [texto, setTexto] = useState(contable ? "0" : valor);

  useEffect(() => {
    if (!contable) {
      setTexto(valor);
      return;
    }
    const decimales = valor.includes(",") ? 1 : 0;
    const control = animate(0, numero, {
      duration: 1,
      delay: 0.15,
      ease: "easeOut",
      onUpdate: (v) =>
        setTexto(
          v.toLocaleString("es-ES", {
            minimumFractionDigits: decimales,
            maximumFractionDigits: decimales,
            useGrouping: true,
          }),
        ),
    });
    return () => control.stop();
  }, [valor, numero, contable]);

  return (
    <motion.span
      className="short-numero"
      initial={{ opacity: 0, y: 16, scale: 0.86 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ...springPop, delay: 0.08 }}
    >
      {texto}
    </motion.span>
  );
}
