import { useEffect, useRef, useState, type ReactElement } from "react";
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
import { MINUTOS, SHORTS, urlFoto, type Foto, type Pagina, type Short } from "./shorts";
import { PORTADAS } from "./portadas";
import { Cartel } from "./Cartel";
import { GlyphBack, GlyphClose, GlyphHeart, GlyphRayo, GlyphShare } from "./glyphs";
import { enterVariants, spring, springPop, springSoft, springTight } from "./motion";

/* ==========================================================================
   Shorts.

   Dos pantallas. El MURO, que es una pila vertical de portadas a sangre, y el
   LECTOR, que es un mazo horizontal: se desliza a la derecha para profundizar.

   El lector tiene cuatro pantallas SIEMPRE: portada y tres páginas. Como la
   forma no cambia de una historia a otra, la barra de tramos de arriba dice
   la verdad desde el primer momento y se pueden encadenar historias sin tener
   que recalibrar cuánto queda cada vez.

   Sobre las fotografías: son de Wikimedia Commons y se piden por red. Aquí
   eso importa más de lo normal, porque una foto que no carga deja un agujero
   negro en mitad del diseño. Por eso <Fotografia> nunca enseña un hueco:
   mientras carga hay un degradado del color del short, y si falla —o si esa
   historia todavía no tiene foto asignada— se queda su cartel, dibujado a
   partir de su id. El diseño no depende de la red, la aprovecha.
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
  Respaldo,
  reducido,
  /** Deriva lenta tipo Ken Burns. Se apaga en las fotos pequeñas. */
  deriva = true,
  /** Parallax. Se aplica DENTRO de la caja recortada, nunca fuera. */
  desplaza,
}: {
  /** Si no hay foto asignada todavía, se dibuja el respaldo y ya está. */
  foto?: Foto;
  /** Qué se dibuja si la foto no llega. Es del tema, no genérico. */
  Respaldo: (p: { reducido: boolean }) => ReactElement;
  reducido: boolean;
  deriva?: boolean;
  desplaza?: MotionValue<number>;
}) {
  // Sin foto asignada no se espera a nada: el cartel es el estado final, no un
  // sustituto provisional que haya que anunciar con un barrido de carga.
  const [estado, setEstado] = useState<EstadoFoto>(foto ? "cargando" : "fallida");

  // La imagen se precarga fuera del árbol para poder decidir qué pintar antes
  // de que el navegador enseñe el icono de imagen rota.
  //
  // El plazo no es una precaución de manual: una petición bloqueada no dispara
  // `onerror`, se queda colgada. Sin plazo, una red lenta o un cortafuegos
  // dejan el barrido de carga girando para siempre, que es peor que enseñar
  // directamente la ilustración.
  useEffect(() => {
    if (!foto) return setEstado("fallida");

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
        {estado === "lista" && foto && (
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
            <Respaldo reducido={reducido} />
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

/**
 * Qué se dibuja cuando no hay fotografía. Las diez historias antiguas tienen
 * su cartel hecho a mano, dibujado para ESA historia, y esos ganan siempre.
 * El resto usa el cartel generado a partir del id.
 */
function respaldoDe(short: Short) {
  const propio = PORTADAS[short.id];
  if (propio) return propio;
  return ({ reducido }: { reducido: boolean }) => (
    <Cartel id={short.id} color={short.color} reducido={reducido} />
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

      {/* Por cuál vas. Con cien historias un punto por historia no cabe —y de
          hecho tampoco informa—, así que va la cuenta y un carril continuo. */}
      <div className="muro-cuenta" aria-hidden>
        <span className="muro-cuenta-cifra">
          {activo + 1}
          <span className="muro-cuenta-total">/{SHORTS.length}</span>
        </span>
        <span className="muro-carril">
          <motion.span
            className="muro-carril-relleno"
            initial={false}
            animate={{ scaleY: (activo + 1) / SHORTS.length }}
            transition={springTight}
          />
        </span>
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
  // El arrastre lo lleva la PÁGINA ENTERA, así que la foto viaja con ella. Para
  // que siga habiendo profundidad, la foto se mueve en contra: 1 − 0,7 = 0,3 de
  // recorrido neto frente al 1 del texto. El parallax sale de la resta.
  const xFoto = useTransform(x, (v) => -v * 0.7);

  function alSoltar(_: unknown, info: PanInfo) {
    if (info.offset.x < -UMBRAL_PX || info.velocity.x < -UMBRAL_VEL) return onAbrir();
    if (info.offset.x > UMBRAL_PX || info.velocity.x > UMBRAL_VEL) return onAbrir();
    animate(x, 0, springSoft);
  }

  return (
    <section className="muro-pagina" data-indice={indice} style={{ ["--acento" as string]: short.color }}>
      {/* El gesto vive en la página entera: se desliza desde cualquier punto,
          no hay que ir a buscar el texto de abajo. `touch-action: pan-y` deja
          pasar el desplazamiento vertical, que lo gobierna el navegador. */}
      <motion.div
        className="muro-gesto"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.34}
        dragMomentum={false}
        onDragEnd={alSoltar}
        onClick={onAbrir}
      >
        <div className="muro-foto">
          <Fotografia
            foto={short.foto}
            Respaldo={respaldoDe(short)}
            reducido={reducido}
            deriva={activo}
            desplaza={xFoto}
          />
        </div>
        <div className="muro-velo" />

        <div className="muro-texto">
        {/* Se anima solo la que está delante: entrar en pantalla es el disparo */}
        <motion.span
          className="muro-etiqueta"
          initial={false}
          animate={activo ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ ...springSoft, delay: activo ? 0.06 : 0 }}
        >
          {short.categoria} · {MINUTOS} min
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
        </div>
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

  // La portada cuenta como página: es la primera. Cuatro, siempre.
  const total = short.paginas.length + 1;

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
  const pagina = portada ? null : short.paginas[indice - 1];

  return (
    <motion.div
      className="short"
      style={{ ["--acento" as string]: short.color }}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1, transition: spring }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
    >
      {/* El fondo de lectura vive fuera del mazo de páginas: si entrara y
          saliera con cada tarjeta, cada deslizamiento sería un parpadeo de
          color. Se queda quieto y las páginas pasan por encima. */}
      <FondoLectura pagina={indice} reducido={!!reducido} />

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
            data-forma={portada ? "portada" : "pagina"}
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
                    Respaldo={respaldoDe(short)}
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
                    {short.categoria} · {MINUTOS} min
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
                    {short.foto
                      ? `${short.foto.autor} · ${short.foto.licencia}`
                      : short.encargo}
                  </motion.p>

                  {/* El aviso va en el flujo, no flotando: con una entrada de
                      sesenta palabras, un rótulo absoluto se comía el texto. */}
                  <motion.span
                    className="short-tirar"
                    custom={4}
                    variants={enterVariants}
                    initial="hidden"
                    animate="shown"
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
              </>
            ) : (
              <CuerpoPagina pagina={pagina!} numero={indice} reducido={!!reducido} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

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
   El cuerpo de una página. Siempre la misma pieza: rótulo, bloque de texto y,
   como mucho, un golpe. Que las tres páginas de las cien historias compartan
   esqueleto es lo que permite leer diez seguidas sin cansarse: el ojo aprende
   dónde está cada cosa una vez y ya no vuelve a buscarla.
   -------------------------------------------------------------------------- */

function CuerpoPagina({
  pagina,
  numero,
  reducido,
}: {
  pagina: Pagina;
  /** 1, 2 o 3. Se pinta enorme y translúcido detrás del rótulo. */
  numero: number;
  reducido: boolean;
}) {
  return (
    <div className="short-pagina">
      <div className="short-rotulo-fila">
        <motion.span
          className="short-indice"
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springSoft, delay: 0.04 }}
          aria-hidden
        >
          {numero}
        </motion.span>
        <motion.span
          className="short-rotulo"
          custom={1}
          variants={enterVariants}
          initial="hidden"
          animate="shown"
        >
          {pagina.rotulo}
        </motion.span>
      </div>

      <motion.p
        className="short-cuerpo"
        custom={2}
        variants={enterVariants}
        initial="hidden"
        animate="shown"
        dangerouslySetInnerHTML={{ __html: pagina.texto }}
      />

      {pagina.destacado && <Destacado dato={pagina.destacado} reducido={reducido} />}
    </div>
  );
}

/**
 * El golpe de la página. Va siempre debajo del bloque y ocupa el mismo sitio
 * sea cifra o frase, para que al pasar página no se mueva nada de sitio.
 */
function Destacado({
  dato,
  reducido,
}: {
  dato: NonNullable<Pagina["destacado"]>;
  reducido: boolean;
}) {
  if (dato.tipo === "cifra") {
    return (
      <div className="short-destacado" data-tipo="cifra">
        <Contador valor={dato.cifra} reducido={reducido} />
        <motion.span
          className="short-unidad"
          custom={4}
          variants={enterVariants}
          initial="hidden"
          animate="shown"
        >
          {dato.unidad}
        </motion.span>
      </div>
    );
  }

  return (
    <motion.div
      className="short-destacado"
      data-tipo="frase"
      custom={4}
      variants={enterVariants}
      initial="hidden"
      animate="shown"
    >
      <span className="short-comilla" aria-hidden>
        <GlyphRayo tamano={14} />
      </span>
      <p>{dato.frase}</p>
    </motion.div>
  );
}

/**
 * El fondo de lectura. Tres capas: el color de la historia en un halo que se
 * mueve muy despacio, un grano fino encima y una viñeta que cierra los
 * bordes. Sin el grano, el degradado se bandea en pantallas de 8 bits; sin la
 * viñeta, el texto claro se despega del fondo por las esquinas.
 *
 * El halo cambia de sitio con cada página. Es el único indicio de que has
 * avanzado que no es un número: el fondo no es el mismo que hace un momento.
 */
function FondoLectura({ pagina, reducido }: { pagina: number; reducido: boolean }) {
  const sitios = [
    { x: "18%", y: "24%" },
    { x: "78%", y: "32%" },
    { x: "26%", y: "72%" },
    { x: "72%", y: "78%" },
  ];
  const sitio = sitios[pagina % sitios.length];

  return (
    <div className="short-fondo" aria-hidden>
      <motion.span
        className="short-halo"
        initial={false}
        animate={{ left: sitio.x, top: sitio.y }}
        transition={{ duration: reducido ? 0 : 1.4, ease: "easeInOut" }}
      />
      <motion.span
        className="short-halo short-halo-2"
        initial={false}
        animate={{ left: sitio.y, top: sitio.x }}
        transition={{ duration: reducido ? 0 : 2.1, ease: "easeInOut" }}
      />
      <span className="short-grano" />
      <span className="short-vineta" />
    </div>
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
