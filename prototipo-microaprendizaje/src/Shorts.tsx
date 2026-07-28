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
import { GlyphHeart, GlyphRayo, GlyphShare } from "./glyphs";
import { enterVariants, spring, springPop, springSoft, springTight } from "./motion";

/* ==========================================================================
   Shorts.

   UNA SOLA PANTALLA. No hay un muro por un lado y un lector por otro: la
   historia se lee en el mismo sitio donde la encuentras. Nada se «abre».

   Todas las pantallas son la misma pieza —fotografía arriba, texto abajo— y
   solo hay dos gestos:

       arriba          cambias de historia
       a la derecha    sigues avanzando en la que estás
       a la izquierda  vuelves una pantalla (desde la portada, avanza también)

   Cuatro pantallas por historia: portada y tres páginas. Al pasar la última
   te deja directamente en la siguiente historia, así que se puede leer media
   sección sin levantar el dedo. La fotografía NO se desmonta al avanzar: es
   una capa fija de la historia y las páginas pasan por delante. Si entrara y
   saliera con cada página, cada deslizamiento sería un parpadeo y la foto se
   volvería a pedir por red.

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
        {/* Relleno para las panorámicas. La misma imagen, recortada a lo bruto,
            desenfocada hasta que no se lee nada y oscurecida: solo aporta
            color de fondo, y ese color sale del propio cuadro, así que la
            banda nítida de arriba no flota sobre un rectángulo ajeno. Se pinta
            antes que la foto para quedar por debajo. */}
        {estado === "lista" && foto?.panoramica && (
          <motion.img
            key="panorama"
            className="foto-panorama"
            src={urlFoto(foto)}
            alt=""
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          />
        )}

        {estado === "lista" && foto && (
          <motion.img
            key="foto"
            className={foto.panoramica ? "foto-panoramica" : "foto-img"}
            src={urlFoto(foto)}
            alt={foto.alt}
            style={
              foto.panoramica
                ? { ["--alto" as string]: foto.panoramica.alto }
                : { objectPosition: foto.foco ?? "50% 50%" }
            }
            initial={{ opacity: 0, scale: 1.08 }}
            animate={
              reducido || !deriva
                ? { opacity: 1, scale: 1.02 }
                : foto.panoramica
                  ? /* La panorámica ya toca los dos costados del marco: el
                       zoom de reposo de la foto normal le comería los bordes
                       laterales, que es lo único que aquí no sobra. Sube un
                       6 % en lugar de un 16 %. */
                    { opacity: 1, scale: [1, 1.06] }
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

        {/* La deriva de nubes. Es la misma fotografía, desenfocada y en luz
            suave, cruzando el disco a paso de tortuga; la máscara la apaga
            antes del borde, así que nunca asoma el canto de la copia y no hay
            costura que disimular. Va con la misma escala que la foto de abajo
            para no despegarse de ella durante el zoom de reposo. */}
        {estado === "lista" && foto?.esfera && deriva && !reducido && (
          <motion.img
            key="atmosfera"
            className="foto-atmosfera"
            src={urlFoto(foto)}
            alt=""
            aria-hidden
            style={{
              objectPosition: foto.foco ?? "50% 50%",
              ["--mascara" as string]: `radial-gradient(ellipse ${foto.esfera.rx} ${foto.esfera.ry} at ${foto.esfera.cx} ${foto.esfera.cy}, #000 0%, rgba(0,0,0,0.85) 52%, transparent 100%)`,
            }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: [1.08, 1.16], x: ["-9%", "9%"] }}
            transition={{
              opacity: { duration: 1.4, delay: 0.5 },
              scale: { duration: 24, ease: "linear", repeat: Infinity, repeatType: "reverse" },
              /* Ida y vuelta en dieciocho segundos. La primera versión hacía
                 este recorrido en treinta y ocho y con un tercio del ancho, o
                 sea veinte píxeles en más de medio minuto: sobre el papel era
                 elegante y en la mano no se veía. Una animación de ambiente
                 tiene que notarse mirándola diez segundos o no existe. */
              x: { duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
            }}
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

      {/* Revelado común: tinte del acento y grano. Solo sobre fotografía —el
          cartel generado ya sale con el color de la historia y teñirlo otra
          vez lo ensucia— y solo en la historia que se está mirando, porque el
          muro mantiene montadas las vecinas y tres filtros de ruido a pantalla
          completa se notan en el desplazamiento. */}
      {estado === "lista" && (
        <>
          <div className={foto?.panoramica ? "foto-tinte es-suave" : "foto-tinte"} />
          {deriva && (
            <svg className="foto-grano" aria-hidden>
              <filter id="grano-muro">
                <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="3" />
              </filter>
              <rect width="100%" height="100%" filter="url(#grano-muro)" />
            </svg>
          )}
        </>
      )}

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
   El pase
   -------------------------------------------------------------------------- */

/**
 * La sección entera: una pila vertical de historias a pantalla completa.
 *
 * El anclaje vertical lo hace el navegador con `scroll-snap`, que va a 60 fps
 * porque no pasa por JavaScript. Lo único que se observa desde React es CUÁL
 * está delante, y eso sirve para animar su texto, para no tener diez derivas
 * Ken Burns corriendo a la vez y para saber a quién le hablan las flechas del
 * teclado.
 */
export function MuroShorts({ onLeido }: { onLeido: (s: Short, minutos: number) => void }) {
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

  /**
   * Terminar una historia no devuelve a ninguna parte: deja en la siguiente.
   * Devuelve `false` si ya era la última, para que la historia rebote en vez
   * de quedarse quieta sin explicar por qué.
   */
  function irASiguiente(desde: number) {
    const caja = scroll.current;
    const destino = caja?.children[desde + 1] as HTMLElement | undefined;
    if (!destino) return false;
    destino.scrollIntoView({ behavior: reducido ? "auto" : "smooth", block: "start" });
    return true;
  }

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

      {/* Por cuál del montón vas. Con cien historias, un punto por historia ni
          cabe ni informa: la cuenta sí. */}
      <motion.div
        className="muro-cuenta"
        aria-hidden
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springPop, delay: 0.16 }}
      >
        <span className="muro-cuenta-cifra">
          {activo + 1}
          <span className="muro-cuenta-total">/{SHORTS.length}</span>
        </span>
      </motion.div>

      <div className="muro-pase" ref={scroll}>
        {SHORTS.map((s, i) => (
          <PaginaShort
            key={s.id}
            short={s}
            indice={i}
            activo={i === activo}
            reducido={!!reducido}
            onLeido={onLeido}
            onSiguiente={() => irASiguiente(i)}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   Una historia
   -------------------------------------------------------------------------- */

function PaginaShort({
  short,
  indice,
  activo,
  reducido,
  onLeido,
  onSiguiente,
}: {
  short: Short;
  indice: number;
  activo: boolean;
  reducido: boolean;
  onLeido: (s: Short, minutos: number) => void;
  /** Lleva a la historia de abajo. `false` si esta era la última. */
  onSiguiente: () => boolean;
}) {
  /** 0 es la portada; 1, 2 y 3 son las páginas. */
  const [paso, setPaso] = useState(0);
  const [sentido, setSentido] = useState(1);
  const [guardado, setGuardado] = useState(false);
  const arranque = useRef(Date.now());
  const contada = useRef(false);
  const bloqueado = useRef(false);
  /** Si el último gesto fue un arrastre, el `click` que viene detrás sobra. */
  const arrastro = useRef(false);

  const total = short.paginas.length + 1;

  // Un solo valor de gesto para toda la historia. El texto va pegado al dedo y
  // la foto se mueve en contra: 1 − 0,55 = 0,45 de recorrido neto frente al
  // 0,92 del texto. El parallax sale de la resta, no de una segunda animación.
  const x = useMotionValue(0);
  const xFoto = useTransform(x, (v) => -v * 0.55);
  const xHoja = useTransform(x, (v) => v * 0.92);

  // El cronómetro arranca cuando la historia se pone delante, no cuando se
  // monta: se montan todas a la vez al entrar en la sección.
  useEffect(() => {
    if (activo) arranque.current = Date.now();
  }, [activo]);

  function avanzar(delta: number) {
    if (bloqueado.current) return;
    const destino = paso + delta;
    if (destino < 0) return rebotar(-1);
    if (destino >= total) return terminar();

    bloqueado.current = true;
    setSentido(delta);
    setPaso(destino);
    animate(x, 0, { ...springSoft, onComplete: () => (bloqueado.current = false) });
  }

  function terminar() {
    if (!contada.current) {
      contada.current = true;
      onLeido(short, (Date.now() - arranque.current) / 60000);
    }
    if (!onSiguiente()) return rebotar(1);
    // Ya no se ve: se rebobina para que, si alguien vuelve a subir, la
    // historia esté otra vez por la portada y no por el final.
    window.setTimeout(() => setPaso(0), 420);
  }

  function rebotar(direccion: number) {
    animate(x, direccion * 26, { ...spring, onComplete: () => animate(x, 0, springSoft) });
  }

  function alSoltar(_: unknown, info: PanInfo) {
    const { offset, velocity } = info;

    // Un toque con la mano poco firme mueve tres o cuatro píxeles y eso ya
    // cuenta como arrastre para Framer. Se trata como lo que era: un toque.
    if (Math.abs(offset.x) < 8 && Math.abs(offset.y) < 8) return avanzar(1);

    const derecha = offset.x > UMBRAL_PX || velocity.x > UMBRAL_VEL;
    const izquierda = offset.x < -UMBRAL_PX || velocity.x < -UMBRAL_VEL;

    // A la derecha se avanza. A la izquierda se vuelve, salvo en la portada,
    // donde no hay nada detrás: allí cualquier lado tira hacia delante, que es
    // lo que espera quien todavía no sabe cómo va esto.
    if (derecha) return avanzar(1);
    if (izquierda) return avanzar(paso === 0 ? 1 : -1);
    animate(x, 0, springSoft);
  }

  // Las flechas solo le hablan a la historia que está delante.
  useEffect(() => {
    if (!activo) return;
    function teclas(e: KeyboardEvent) {
      // Con el foco en el corazón, el espacio es del corazón, no de la página.
      if (document.activeElement?.closest("button")) return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        avanzar(1);
      }
      if (e.key === "ArrowLeft") avanzar(-1);
    }
    window.addEventListener("keydown", teclas);
    return () => window.removeEventListener("keydown", teclas);
  });

  const portada = paso === 0;
  const ultima = paso === total - 1;

  return (
    <section
      className="muro-pagina"
      data-indice={indice}
      style={{ ["--acento" as string]: short.color }}
    >
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
        onDragStart={() => (arrastro.current = true)}
        onDragEnd={(e, info) => {
          alSoltar(e, info);
          // El navegador dispara un `click` al soltar el ratón aunque haya
          // habido arrastre, y llega ANTES que este manejador: sin la marca,
          // deslizar a la izquierda avanzaba en vez de volver, porque el
          // click ya había pasado página. Se limpia detrás del click.
          window.setTimeout(() => (arrastro.current = false), 0);
        }}
        onClick={() => {
          if (arrastro.current) return;
          avanzar(1);
        }}
      >
        {/* La foto es de la historia, no de la pantalla: se queda montada las
            cuatro y solo se aparta un poco cuando el texto crece. */}
        <motion.div
          className="muro-foto"
          initial={false}
          animate={{ scale: portada ? 1 : 1.06, y: portada ? 0 : -16 }}
          transition={springSoft}
        >
          <Fotografia
            foto={short.foto}
            Respaldo={respaldoDe(short)}
            reducido={reducido}
            deriva={activo}
            desplaza={xFoto}
          />
        </motion.div>
        <div className="muro-velo" data-hondo={!portada} />

        <motion.div className="muro-hoja" data-forma={portada ? "portada" : "pagina"} style={{ x: xHoja }}>
          <AnimatePresence mode="wait" custom={sentido}>
            <motion.div
              key={paso}
              className="muro-hoja-cuerpo"
              custom={sentido}
              // Se avanza tirando hacia la derecha, así que la pantalla que se
              // va sale por la derecha y la que llega entra por la izquierda:
              // el papel sigue al dedo en lugar de contradecirlo.
              initial={{ opacity: 0, x: sentido * -30 }}
              animate={{ opacity: 1, x: 0, transition: { ...spring, delay: 0.04 } }}
              exit={{ opacity: 0, x: sentido * 26, transition: { duration: 0.15 } }}
            >
              {portada ? (
                <Portada short={short} />
              ) : (
                <CuerpoPagina pagina={short.paginas[paso - 1]} numero={paso} reducido={reducido} />
              )}
            </motion.div>
          </AnimatePresence>

          <div className="muro-pie">
            {(portada || ultima) && (
              <span className="muro-tirar">
                <motion.span
                  className="muro-flecha"
                  animate={reducido ? {} : { x: [0, 7, 0] }}
                  transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  →
                </motion.span>
                {portada ? "Desliza para seguir" : "Siguiente historia"}
              </span>
            )}

            <div className="muro-acciones">
              <motion.button
                className="muro-accion"
                whileTap={{ scale: 0.86 }}
                onClick={(e) => e.stopPropagation()}
                aria-label="Compartir"
              >
                <GlyphShare />
              </motion.button>
              <motion.button
                className="muro-accion"
                data-on={guardado}
                onClick={(e) => {
                  e.stopPropagation();
                  setGuardado((v) => !v);
                }}
                whileTap={{ scale: 0.86 }}
                animate={guardado ? { scale: [1, 1.28, 1] } : {}}
                transition={springPop}
                aria-label="Guardar historia"
                aria-pressed={guardado}
              >
                <GlyphHeart on={guardado} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Los tramos van fuera de la capa que se arrastra: son de la historia,
          no de la pantalla, y moverlos con el dedo los volvería ilegibles. */}
      <div className="muro-tramos" aria-hidden>
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className="muro-tramo">
            <motion.span
              className="muro-tramo-relleno"
              initial={false}
              animate={{ scaleX: i <= paso ? 1 : 0 }}
              transition={springTight}
            />
          </span>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   La portada de una historia: de qué va y por qué te importa
   -------------------------------------------------------------------------- */

function Portada({ short }: { short: Short }) {
  return (
    <>
      <motion.span
        className="muro-etiqueta"
        custom={0}
        variants={enterVariants}
        initial="hidden"
        animate="shown"
      >
        {short.curioso && <span className="muro-insignia">Dato curioso</span>}
        {short.categoria} · {MINUTOS} min
      </motion.span>
      <motion.h2 custom={1} variants={enterVariants} initial="hidden" animate="shown">
        {short.titulo}
      </motion.h2>
      <motion.p
        className="muro-gancho"
        custom={2}
        variants={enterVariants}
        initial="hidden"
        animate="shown"
      >
        {short.gancho}
      </motion.p>
      <motion.p
        className="muro-entrada"
        custom={3}
        variants={enterVariants}
        initial="hidden"
        animate="shown"
        dangerouslySetInnerHTML={{ __html: short.entrada }}
      />
      <motion.p
        className="muro-credito"
        custom={4}
        variants={enterVariants}
        initial="hidden"
        animate="shown"
      >
        {short.foto ? `${short.foto.autor} · ${short.foto.licencia}` : short.encargo}
      </motion.p>
    </>
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
  /** 1, 2 o 3. Se pinta grande y translúcido junto al rótulo. */
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
