import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactElement } from "react";
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
import { SHORTS, urlFoto, type Foto, type Pagina, type Short } from "./shorts";
import { conGuiones } from "./silabas";
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

/** Cuántas historias se montan a cada lado de la que se está leyendo. */
const VECINAS = 2;

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
  /**
   * La foto tal cual, sin nada encima ni debajo: es como la pinta la maqueta
   * de lectura. Apaga el relleno desenfocado de las panorámicas, el zoom de
   * reposo y el tinte, y deja solo la imagen recortada a la caja. Lo demás de
   * la app la sigue enseñando con sus efectos.
   */
  plana = false,
}: {
  /** Si no hay foto asignada todavía, se dibuja el respaldo y ya está. */
  foto?: Foto;
  /** Qué se dibuja si la foto no llega. Es del tema, no genérico. */
  Respaldo: (p: { reducido: boolean }) => ReactElement;
  reducido: boolean;
  deriva?: boolean;
  desplaza?: MotionValue<number>;
  plana?: boolean;
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
        {estado === "lista" && foto?.panoramica && !plana && (
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
            className={foto.panoramica && !plana ? "foto-panoramica" : "foto-img"}
            src={urlFoto(foto)}
            alt={foto.alt}
            style={
              foto.panoramica && !plana
                ? { ["--alto" as string]: foto.panoramica.alto }
                : { objectPosition: foto.foco ?? "50% 50%" }
            }
            initial={{ opacity: 0, scale: plana ? 1 : 1.08 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
            animate={
              plana
                ? { opacity: 1, scale: 1 }
                : reducido || !deriva
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
              plana
                ? { opacity: { duration: 0.5 } }
                : reducido || !deriva
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
        {estado === "lista" && foto?.esfera && deriva && !reducido && !plana && (
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
      {estado === "lista" && !plana && (
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
/* --------------------------------------------------------------------------
   El color de una historia lo decide SU TEMA, no la historia suelta. Todos
   los shorts de Cocina son del mismo color y todos los de Figuras de otro, de
   manera que el color dice de qué se está hablando antes de leer una palabra.

   Se reparte por el nombre de la categoría, no a mano: así un tema nuevo
   recibe el suyo el día que se escribe y nadie tiene que acordarse de nada.
   -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
   EL COLOR DE UNA HISTORIA LO DECLARA LA HISTORIA.

   Aquí había una tabla que repartía cinco acentos por CATEGORÍA: todos los
   shorts de Cocina de un color, todos los de Figuras de otro. Tenía sentido
   con doscientos treinta y seis temas: el color decía de qué se hablaba antes
   de leer una palabra.

   Con el muro de curiosidades ese reparto se vuelve del revés. Casi todo lo
   que Pablo quiere contar —cuánto le queda al sol, por qué llueve, cómo
   funciona un móvil— cae en Ciencia, así que la tabla pintaría el muro entero
   de azul pizarra y el color dejaría de distinguir nada.

   Y hacía algo peor: la capitular del Sol salía azul acero sobre una
   fotografía de la corona en oro. El acento se ve SIEMPRE contra la imagen, y
   quien elige la imagen es quien escribe la historia. Así que el color va en
   el short, que es donde ya estaba escrito —`color: "var(--ochre)"`— y donde
   llevaba desde el principio sin que nadie lo mirara.
   -------------------------------------------------------------------------- */

/**
 * Qué fotografía le toca a cada pantalla. `fotos` manda y `foto` es el
 * respaldo, de manera que las historias que solo tienen una imagen siguen
 * funcionando exactamente igual que antes.
 */
function fotoDe(short: Short, paso: number) {
  /* Y si esa pantalla no tiene la suya, la de la portada. El tipo ya lo
     prometía —«una historia con una sola imagen sigue funcionando: se queda
     la misma las cuatro pantallas»— pero solo se cumplía cuando la única
     imagen estaba escrita en `foto`. Escrita en `fotos: [una]`, que es como
     se escriben todas, las tres pantallas de dentro se quedaban con el cartel
     generado: un círculo plano detrás de una fotografía de la corona solar.
     Repetir la buena es peor que tener cuatro, y mucho mejor que eso. */
  return short.fotos?.[paso] ?? short.foto ?? short.fotos?.[0];
}

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
          cabe ni informa: la cuenta sí. Con el muro vacío no se pinta: «1/0»
          se lee como una avería, no como que aún no hay nada. */}
      {SHORTS.length > 0 && (
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
      )}

      {/* Cada historia tiene su ranura, y la ranura no se desmonta nunca: es
          lo que hace que el desplazamiento tenga siempre la altura de las 757
          y que el observador que dice cuál está delante se monte una sola vez.

          Dentro de la ranura solo hay historia si está cerca. Antes se
          montaban las 757 a la vez —757 fotografías precargándose, 757 juegos
          de animaciones y 757 filtros de ruido—, y el desplazamiento iba a
          tirones. Con dos por cada lado hay una pantalla entera de margen
          para que la foto de la siguiente llegue antes de que se vea. */}
      {/* EL MURO VACÍO. Desde el 27 de agosto por la noche puede estarlo: Pablo
          escribe los textos y las historias se montan cuando llegan. Un muro
          sin nada dentro sería una pantalla negra, y una pantalla negra se lee
          como una aplicación rota, no como un cajón que espera. */}
      {SHORTS.length === 0 && (
        <motion.p
          className="muro-vacio"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.2 }}
        >
          Aquí van las curiosidades.
          <br />
          Todavía no hay ninguna escrita.
        </motion.p>
      )}

      <div className="muro-pase" ref={scroll}>
        {SHORTS.map((s, i) => (
          <div key={s.id} className="muro-ranura" data-indice={i}>
            {Math.abs(i - activo) <= VECINAS && (
              <PaginaShort
                short={s}
                indice={i}
                activo={i === activo}
                reducido={!!reducido}
                onLeido={onLeido}
                onSiguiente={() => irASiguiente(i)}
              />
            )}
          </div>
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

  // Un solo valor de gesto para toda la historia: el texto va pegado al dedo.
  // La foto ya no se mueve en contra —el parallax le cambiaba el encuadre a
  // media pasada, y la maqueta la tiene quieta—, así que del gesto solo cuelga
  // la hoja.
  const x = useMotionValue(0);
  const xHoja = useTransform(x, (v) => v * 0.92);

  /* Mide el texto ya pintado y lo encoge si se sale. Ver `useAjusteDeTexto`. */
  const ajusta = useAjusteDeTexto();

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
  /* La última es la que lleva los dos botones y el aviso de que la siguiente
     historia va abajo. Una portada SIN TEXTO todavía es a la vez la primera y
     la última —solo hay una pantalla—, y con esa cuenta se le pintaban encima
     «Guardar», «Compartir» y «Siguiente short», que es justo lo que Pablo
     pidió quitar de la portada: la imagen y el título, nada más. Así que sin
     páginas no hay última: hay cartel. */
  const ultima = paso === total - 1 && short.paginas.length > 0;

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
        /* Tocar también vale para volver: la mitad derecha avanza y la
           izquierda retrocede, que es como funciona cualquier lector de
           historias. Desde la portada no hay nada a lo que volver, así que
           ahí las dos mitades avanzan. El tercio izquierdo es más estrecho
           que el derecho a propósito: se avanza mil veces por cada vez que se
           vuelve, y el dedo cae solo en el lado de avanzar. */
        onClick={(e) => {
          if (arrastro.current) return;
          const caja = e.currentTarget.getBoundingClientRect();
          const atras = e.clientX - caja.left < caja.width * 0.3;
          avanzar(atras && paso > 0 ? -1 : 1);
        }}
      >
        {/* La foto va tal cual, como en la maqueta: ni zoom de reposo, ni
            relleno desenfocado, ni tinte, ni la banda escalada al pasar de
            página. Todo eso recortaba el cuadro por su cuenta, y Pablo pidió
            que la foto se vea como la pasa. Aquí es lo que es: recortada al
            alto de la banda y centrada donde diga su foco. */}
        <div className="muro-foto" data-portada={portada}>
          <Fotografia
            foto={fotoDe(short, paso)}
            Respaldo={respaldoDe(short)}
            reducido={reducido}
            plana
          />
          {/* El pie de la imagen, en las cuatro pantallas. No es una firma:
              dice qué es lo que se está viendo, de qué año y de dónde salió.

              VA DENTRO DE LA IMAGEN Y NO DEBAJO, y no es un capricho de
              maqueta. Debajo, en su propio renglón, el pie era lo SEGUNDO que
              se leía de la pantalla: cuatro líneas de gris entre la fotografía
              y el titular, o sea entre lo que engancha y lo que promete. Un
              crédito no se lee, se consulta. Encima de la imagen, apoyado en
              el degradado con el que la banda se disuelve en la página, sigue
              estando entero —la licencia CC BY-SA obliga y aquí se cumple— y
              deja de interrumpir. */}
          <p className="muro-credito">{fotoDe(short, paso)?.autor ?? short.encargo}</p>
        </div>

        <motion.div className="muro-hoja" data-forma={portada ? "portada" : "pagina"} style={{ x: xHoja }}>
          <AnimatePresence mode="wait" custom={sentido}>
            <motion.div
              key={paso}
              ref={ajusta}
              className="muro-hoja-cuerpo"
              custom={sentido}
              // Se avanza tirando hacia la derecha, así que la pantalla que se
              // va sale por la derecha y la que llega entra por la izquierda:
              // el papel sigue al dedo en lugar de contradecirlo.
              /* El texto entra subiendo un poco y con el dedo: sigue el
                 sentido del gesto en horizontal y sube en vertical, que es lo
                 que hace que el cambio se sienta como pasar una hoja y no
                 como cambiar de diapositiva. */
              initial={{ opacity: 0, x: sentido * -22, y: 14 }}
              animate={{ opacity: 1, x: 0, y: 0, transition: { ...spring, delay: 0.05 } }}
              exit={{ opacity: 0, x: sentido * 20, y: -10, transition: { duration: 0.16 } }}
            >
              {portada ? (
                <Portada short={short} />
              ) : (
                <CuerpoPagina pagina={short.paginas[paso - 1]} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* El pie, exactamente como en la maqueta aprobada: en la portada
              solo "Seguir"; en las dos de en medio, nada; y en la ultima los
              dos botones y el aviso de que la siguiente historia va abajo. */}
          {/* «Seguir» solo si hay algo detrás. Una portada sin texto todavía
              —las que esperan lo que escriba Pablo— tenía la flecha animada
              prometiendo una pantalla siguiente que no existe, y el dedo se
              iba a por ella y no pasaba nada. */}
          {portada && short.paginas.length > 0 && (
            <span className="muro-tirar">
              Seguir
              <motion.span
                className="muro-flecha"
                animate={reducido ? {} : { x: [0, 7, 0] }}
                transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                →
              </motion.span>
            </span>
          )}

          {ultima && (
            <>
              <div className="muro-acciones">
                <motion.button
                  className="muro-accion"
                  data-on={guardado}
                  whileTap={{ scale: 0.94 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGuardado((v) => !v);
                  }}
                  animate={guardado ? { scale: [1, 1.06, 1] } : {}}
                  transition={springPop}
                  aria-pressed={guardado}
                >
                  <GlyphHeart on={guardado} />
                  Guardar
                </motion.button>
                <motion.button
                  className="muro-accion"
                  whileTap={{ scale: 0.94 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <GlyphShare />
                  Compartir
                </motion.button>
              </div>
              <span className="muro-siguiente">
                Siguiente short
                <motion.span
                  className="muro-flecha"
                  animate={reducido ? {} : { y: [0, 6, 0] }}
                  transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  ↓
                </motion.span>
              </span>
            </>
          )}
        </motion.div>
      </motion.div>

      {/* Los tramos van fuera de la capa que se arrastra: son de la historia,
          no de la pantalla, y moverlos con el dedo los volvería ilegibles.

          Hay un tramo por página, no uno por pantalla: en la portada aún no
          se ha leído nada y la barra está entera vacía, que es como está en
          la maqueta. */}
      {/* Y sin páginas no hay barra: quedaba una franja vacía flotando. */}
      {short.paginas.length > 0 && (
        <div className="muro-tramos" aria-hidden>
          {short.paginas.map((_, i) => (
            <span key={i} className="muro-tramo">
              <motion.span
                className="muro-tramo-relleno"
                initial={false}
                animate={{ scaleX: i < paso ? 1 : 0 }}
                transition={springTight}
              />
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

/* --------------------------------------------------------------------------
   La portada de una historia: de qué va y por qué te importa
   -------------------------------------------------------------------------- */

/**
 * El título en una sola línea, siempre.
 *
 * Pablo lo pidió así y no admite excepción: «todos los títulos deben ocupar
 * una línea, nunca más de una». Contarle las palabras al título no lo
 * garantiza, porque lo que decide si cabe no es cuántas palabras tiene sino
 * cuánto miden pintadas, y eso cambia con el móvil: la misma frase entra en
 * una pantalla de 430 y se parte en una de 320, y entra con la letra de un
 * iPhone y se parte con la de un Android. Medidos los 757 títulos, solo 31
 * caben en una línea en todas partes.
 *
 * Así que se mide de verdad, ya pintado, y si se sale se encoge lo justo para
 * entrar. El suelo está en el 78 %: por debajo de ahí el título empezaría a
 * parecer otra cosa, y antes que eso vale más acortarlo a mano —que es el
 * trabajo que queda pendiente en el molde—. Con un título corto no se toca
 * nada y sale a su tamaño.
 */
function useUnaLinea(texto: string) {
  const ref = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    const e = ref.current;
    if (!e) return;
    const ajusta = () => {
      e.style.setProperty("--encoge", "1");
      const cabe = e.clientWidth;
      const mide = e.scrollWidth;
      /* El suelo baja del 0,78 al 0,42 porque el titular ya no parte de 4,4cqw
         sino de 11: en la portada-cartel el título se pinta lo más grande que
         quepa en una línea, así que un título corto sale enorme y uno largo
         aterriza más o menos donde estaba antes. Con el suelo viejo, un título
         de treinta letras se salía del marco. */
      if (mide > cabe && cabe > 0)
        e.style.setProperty("--encoge", String(Math.max(0.42, cabe / mide)));
    };
    ajusta();
    const ro = new ResizeObserver(ajusta);
    ro.observe(e);
    return () => ro.disconnect();
  }, [texto]);
  return ref;
}

/**
 * QUE EL TEXTO NO SE SALGA NUNCA DE SU CAJA.
 *
 * El 27 de agosto, con el muro reducido a una historia, se vio a la primera:
 * la entrada del Sol rebosaba la hoja y las dos últimas líneas se pintaban
 * ENCIMA del «Seguir». No era un fallo de esa historia. La hoja tiene el alto
 * que tiene —lo que sobra de la pantalla después de la banda de imagen— y el
 * texto se escribe a mano en un fichero, así que antes o después alguna
 * entrada iba a pasarse. Con setecientas historias pasó y nadie lo vio, que
 * es lo que hace peligroso a este fallo: no rompe nada, solo deja una
 * pantalla ilegible cada tantas.
 *
 * Se mide con el texto YA PINTADO y se encoge lo justo, igual que el titular
 * en `useUnaLinea`, porque lo que decide si cabe no es cuántas palabras hay
 * sino cuánto miden en ESTE móvil: la misma entrada entra en un iPhone de 932
 * de alto y se sale en un SE de 667.
 *
 * El suelo está en el 86 %. Por debajo se notaría que una historia se lee más
 * pequeña que la de al lado, y eso es peor que el hueco: la regla de Pablo es
 * que la portada y las tres páginas midan lo mismo entre ellas. Si una
 * historia toca el suelo, lo que hay que arreglar es el texto —`scripts/
 * cabe.mjs` lo dice antes de publicar—, no la maqueta.
 */
const SUELO_TEXTO = 0.86;

/** ¿Se sale el contenido de su caja? Medido SOBRE LA MAQUETA, no sobre
 *  `scrollHeight`, y la diferencia costó una noche entera.
 *
 *  `scrollHeight` cuenta también el desplazamiento de las transformaciones, y
 *  los párrafos entran en pantalla con la animación de siempre: catorce
 *  puntos más abajo de su sitio, subiendo. Medir durante esa animación —y la
 *  medición corre justo entonces, en el primer fotograma— da siempre catorce
 *  puntos «de más» que ninguna letra puede encoger, así que el texto se iba
 *  al suelo del 86 % en pantallas donde cabía sobrado. Con la banda fija el
 *  fallo quedaba disimulado —el hueco muerto bajo el texto absorbía los
 *  catorce puntos casi siempre—, y los ajustes fantasma de 0,96 y 0,98 que
 *  salían a veces eran exactamente esto.
 *
 *  `offsetTop` y `offsetHeight` son de la maqueta: ignoran las
 *  transformaciones. Se mide dónde ACABARÁN los párrafos, no dónde están
 *  ahora mismo de paso. */
function desborda(e: HTMLElement): boolean {
  let fondo = 0;
  for (const hijo of Array.from(e.children) as HTMLElement[])
    fondo = Math.max(fondo, hijo.offsetTop + hijo.offsetHeight);
  return fondo - e.offsetTop > e.clientHeight + 1;
}

function useAjusteDeTexto() {
  const nodo = useRef<HTMLDivElement | null>(null);
  const vigia = useRef<ResizeObserver | null>(null);
  const midiendo = useRef(false);

  const mide = useCallback(() => {
    const e = nodo.current;
    if (!e || midiendo.current) return;
    midiendo.current = true;
    e.style.setProperty("--ajuste", "1");
    /* Se baja de dos en dos centésimas y no se calcula de una vez con una
       regla de tres: el alto del texto no es proporcional al cuerpo de letra
       —cambia el número de líneas, que es un salto— y una regla de tres se
       pasa de largo o se queda corta. Son ocho vueltas como mucho. */
    for (let f = 1; f > SUELO_TEXTO && desborda(e); ) {
      f -= 0.02;
      e.style.setProperty("--ajuste", f.toFixed(2));
    }
    midiendo.current = false;
  }, []);

  /* Ref de función y no de objeto: la hoja se desmonta y se vuelve a montar en
     cada página —`key={paso}` dentro de AnimatePresence—, y con `mode="wait"`
     la nueva no existe todavía cuando cambia `paso`. La función avisa justo
     cuando el nodo entra en el árbol, que es cuando se puede medir.

     PERO NO SE MIDE AHÍ MISMO, y eso costó una tarde. La ref se llama durante
     el commit de React, con el nodo ya colgado del árbol pero sin que el
     navegador haya rehecho el reparto de la columna: la caja todavía no tiene
     su alto definitivo, así que `clientHeight` sale corto, el bucle cree que
     el texto rebosa y lo encoge hasta el suelo del 86 %. Se veía clarísimo en
     la pantalla ya hecha: texto reducido y ciento sesenta puntos de sitio de
     sobra debajo.

     Se mide en el fotograma siguiente, con el reparto hecho, y otra vez
     cuando terminan de cargar las letras: una serifa del sistema puede
     resolverse a mitad de la primera pintada y cambia el número de líneas. */
  return useCallback(
    (e: HTMLDivElement | null) => {
      vigia.current?.disconnect();
      nodo.current = e;
      if (!e) return;
      requestAnimationFrame(mide);
      document.fonts?.ready.then(mide);
      vigia.current = new ResizeObserver(mide);
      vigia.current.observe(e);
      /* Y SE OBSERVA TAMBIÉN LA FOTOGRAFÍA, no solo el texto. Con la banda
         elástica esto dejó de ser opcional, y costó una tarde verlo: en el
         primer medio segundo el texto mide una línea MÁS que un momento
         después —los guiones de `hyphens: auto` llegan cuando el navegador
         carga su diccionario, y recuperan esa línea—. La medición corre en
         ese medio segundo, ve que no cabe ni encogiendo y deja la letra en
         el suelo. Cuando la línea sobrante desaparece ya nadie vuelve a
         mirar: la caja del texto no ha cambiado de tamaño exterior, así que
         el observador no salta. La que sí cambia es la fotografía, que
         absorbe el hueco que el texto suelta. Observándola a ella, el
         reajuste llega solo y la letra vuelve a su tamaño. */
      const foto = e.closest(".muro-pagina")?.querySelector(".muro-foto");
      if (foto) vigia.current.observe(foto);
    },
    [mide],
  );
}

function Portada({ short }: { short: Short }) {
  const titulo = useUnaLinea(short.titulo);
  /* LA PORTADA ES UN CARTEL: la fotografía a pantalla completa y el título
     encima. Nada más.
     
     Pablo, el 27 por la noche: «pon la imagen y el título solo, de momento, y
     las demás páginas con el texto […] que quede súper bonito y precioso».
     
     Antes llevaba además el gancho y el párrafo de entrada, y los tres juntos
     obligaban a subir el velo hasta media pantalla para que se leyeran: o sea
     que la fotografía se veía por la mitad justo en la única pantalla cuyo
     trabajo es que la mires. Ahora el velo solo tiene que sostener dos líneas
     y arranca abajo del todo, así que la imagen se ve entera.
     
     El `gancho` y la `entrada` siguen escritos en cada historia —hacen falta
     para las listas y para el buscador— y aquí no se pintan. El texto de la
     historia va en las páginas, que es donde se lee. */
  return (
    <>
      <motion.p
        className="port-tema"
        custom={0.6}
        variants={enterVariants}
        initial="hidden"
        animate="shown"
      >
        {short.categoria}
      </motion.p>
      <motion.h2 ref={titulo} custom={1} variants={enterVariants} initial="hidden" animate="shown">
        {short.titulo}
      </motion.h2>
    </>
  );
}

/* --------------------------------------------------------------------------
   El cuerpo de una página: el bloque de texto y nada más. Antes llevaba
   además el golpe de abajo —la cifra o la frase—, y sin él la pieza se queda
   en una sola cosa. Que las tres páginas de las setecientas historias
   compartan esqueleto es lo que permite leer diez seguidas sin cansarse: el
   ojo aprende dónde está cada cosa una vez y ya no vuelve a buscarla.
   -------------------------------------------------------------------------- */

function CuerpoPagina({ pagina }: { pagina: Pagina }) {
  /* SIN RÓTULO. Lo quitó Pablo el 27 de agosto por la noche, y con un motivo
     que no era de gusto: «estamos siempre limitados al texto que poner».
     Tenía razón dos veces. Ocupaba un renglón y su margen —unos cuarenta
     puntos de los que tiene la pantalla— y, peor, obligaba a que cada página
     fuera una cosa titulable, o sea a trocear la explicación en apartados
     cuando lo que él quiere es que se lea de corrido.

     Lo que hacía el rótulo lo hace ahora la primera frase, que es donde
     debería haber estado siempre: cada página abre nombrando de qué va —regla
     11 del molde— y de paso enlaza con la anterior. El campo `rotulo` se
     sigue escribiendo porque le sirve de esqueleto al que redacta, pero el
     lector no lo ve. */
  return (
    <div className="short-pagina">
      <motion.p
        className="short-cuerpo"
        custom={2}
        variants={enterVariants}
        initial="hidden"
        animate="shown"
        dangerouslySetInnerHTML={{ __html: conGuiones(pagina.texto) }}
      />
    </div>
  );
}

