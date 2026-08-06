import { useEffect, useRef, useState, type ReactElement } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type PanInfo,
} from "framer-motion";
import { CARDS, MINUTOS_OBJETIVO, TOTAL_XP, type Card } from "./lesson";
import { cargarResumen, resumenCargado } from "./libros/indice";
import type { Resumen } from "./libros/tipos";
import { minutos as minutosDe } from "./libros/tipos";
import { Scene } from "./Scene";
import { Racha, RetoDiario } from "./Racha";
import { DetalleLibro, Inicio, LIBROS, type Libro } from "./Biblioteca";
import { Camino } from "./Camino";
import { EntradaCapitulo } from "./Capitulo";
import { Onboarding } from "./Onboarding";
import { MuroShorts } from "./Shorts";
import { Pago } from "./Pago";
import { Checkout } from "./Checkout";
import { Perfil } from "./Perfil";
import { Ajustes } from "./Ajustes";
import { usePreferencias } from "./preferencias";
import { AntiScroll } from "./AntiScroll";
import { AvisoRegalo, Oferta } from "./Regalo";
import { AvisoValoracion } from "./Valoracion";
import { DEPTH, enterVariants, spring, springPop, springSoft, springTight } from "./motion";
import {
  GlyphAsk, GlyphBack, GlyphClose, GlyphFlag, GlyphHeart,
  GlyphLibros, GlyphPerfil, GlyphRayo, GlyphShare,
} from "./glyphs";

type Pantalla =
  | "intro" | "pago" | "inicio" | "detalle" | "camino" | "leccion" | "fin" | "racha" | "reto"
  | "shorts" | "perfil" | "ajustes" | "oferta" | "alta"
  | "anti";
/** Las pantallas raíz: las únicas que enseñan la barra de abajo. */
/* La barra de pestañas no sale mientras se lee un short. En la maqueta que
   aprobó Pablo la pantalla es la página entera, y una barra flotando encima
   se comía las dos últimas líneas del texto y el "Seguir". Se vuelve a ver en
   cuanto se sale del muro. */
const CON_BARRA: Pantalla[] = ["inicio", "perfil"];

/** Racha de ejemplo del prototipo. */
const RACHA = 3;

/* Atajo para mirar una pantalla suelta sin pasar por el onboarding entero:
   ?p=shorts abre directamente el muro. Sirve para revisar el diseño en el
   navegador y para las capturas, y no molesta a nadie: sin el parámetro la
   app arranca donde siempre. */
function pantallaInicial(): Pantalla {
  if (typeof window === "undefined") return "intro";
  /* En un visor que no da URL propia —el simulador de móvil que se publica
     como artefacto— no hay parámetro que poner, así que la página deja dicho
     por dónde quiere que se abra antes de arrancar la app. */
  const p = (globalThis as Record<string, any>).__PANTALLA
    ?? new URLSearchParams(window.location.search).get("p");
  const validas = ["intro", "shorts", "inicio", "perfil", "ajustes"];
  return validas.includes(p ?? "") ? (p as Pantalla) : "intro";
}

export default function App() {
  const [pantalla, setPantalla] = useState<Pantalla>(pantallaInicial);
  /* Las preferencias viven aquí arriba y no en la pantalla de ajustes: sus
     efectos —el tema y la escala de texto— tienen que seguir aplicados
     mientras se lee, que es cuando importan. */
  const preferencias = usePreferencias();
  const [libro, setLibro] = useState<Libro>(LIBROS[0]);
  /** A dónde vuelve el cierre. Un short no devuelve al camino de un libro. */
  const [vuelta, setVuelta] = useState<Pantalla>("camino");
  /** Objetivo de lectura de lo que se acaba de terminar, para comparar. */
  const [objetivo, setObjetivo] = useState(MINUTOS_OBJETIVO);
  /** El nombre se pide en la introducción y se usa en el perfil y el saludo. */
  const [nombre, setNombre] = useState("Hola");
  /** Los temas que marcó en la introducción. Ordenan la estantería. */
  const [intereses, setIntereses] = useState<string[]>([]);
  /** Tarjetas leídas. Sube al terminar un capítulo o un short. */
  const [leidas, setLeidas] = useState(0);
  /** Minutos de lectura de hoy, su meta y el total acumulado de siempre.
      Los dos arrancan con historial de ejemplo, como la racha: un perfil a
      cero no enseña ni el arco lleno a medias ni el contador subiendo, que es
      justo lo que hay que ver. Al leer suben de verdad. */
  const [minutosHoy, setMinutosHoy] = useState(6.5);
  const [meta, setMeta] = useState(15);
  const [minutosTotales, setMinutosTotales] = useState(1847);
  /** El aviso del regalo: se enseña una vez, al llegar al inicio. */
  const [avisoRegalo, setAvisoRegalo] = useState(false);
  const [regaloVisto, setRegaloVisto] = useState(false);
  /** El «¿te está gustando?»: una vez, y solo cuando ya has leído algo. */
  const [valoracion, setValoracion] = useState(false);
  const [valoracionVista, setValoracionVista] = useState(false);
  /** Capítulos completados del libro abierto. */
  const [completados, setCompletados] = useState(0);
  /** Qué parte del libro se está leyendo. */
  const [parte, setParte] = useState(0);
  /** Minutos que ha tardado el lector en el capítulo, medidos de verdad. */
  const [minutos, setMinutos] = useState(0);
  const arranque = useRef(0);
  const reducido = useReducedMotion();

  /* Las tarjetas que toca leer. Si el libro abierto tiene resumen escrito se
     sacan de él; si no —el capítulo de Alejandría, que es el único con
     gráficos de datos— se usan las de siempre. Así conviven los dos sin que
     la lección tenga que saber de dónde viene cada cosa. */
  /* El texto ya no está en memoria desde el arranque: se pide al abrir el
     libro y llega en cuanto llega. Se pide en la ficha, y no al pulsar
     «empezar», para que el viaje de ida por el mapa del camino sirva de
     margen y la espera no se note nunca. */
  const [resumen, setResumen] = useState<Resumen | undefined>(() => resumenCargado(libro.id));
  const cartas = resumen ? resumen.partes[parte]?.tarjetas ?? CARDS : CARDS;
  const objetivoLibro = resumen ? Math.max(1, Math.round(minutosDe(resumen) / resumen.partes.length)) : MINUTOS_OBJETIVO;

  // Al cambiar de libro se vacía lo anterior y se pide lo nuevo. El `vivo`
  // evita que una descarga lenta de un libro que ya se ha cerrado pise el
  // texto del que se está leyendo ahora.
  useEffect(() => {
    let vivo = true;
    setResumen(resumenCargado(libro.id));
    void cargarResumen(libro.id).then((r) => {
      if (vivo) setResumen(r);
    });
    return () => {
      vivo = false;
    };
  }, [libro.id]);

  // El regalo aparece cuando ya has visto el inicio un momento. Soltarlo a
  // bocajarro nada más entrar se lee como un anuncio; dejar respirar la
  // pantalla primero hace que se lea como algo que la app te ofrece.
  useEffect(() => {
    if (pantalla !== "inicio" || regaloVisto) return;
    const id = window.setTimeout(() => {
      setAvisoRegalo(true);
      setRegaloVisto(true);
    }, 1600);
    return () => window.clearTimeout(id);
  }, [pantalla, regaloVisto]);

  // La valoración no se pide al entrar, sino cuando vuelves al inicio después
  // de haber leído. Preguntar «¿te gusta?» a quien no ha usado nada todavía es
  // pedirle que se invente una respuesta, y encima molesta.
  useEffect(() => {
    if (pantalla !== "inicio" || valoracionVista || leidas < 6 || avisoRegalo) return;
    const id = window.setTimeout(() => {
      setValoracion(true);
      setValoracionVista(true);
    }, 1400);
    return () => window.clearTimeout(id);
  }, [pantalla, valoracionVista, leidas, avisoRegalo]);

  return (
    <div className="stage">
      <div className="shell">
        {/* La barra de la hora no sale mientras se lee: en la maqueta la
            pantalla es la pagina entera, de borde a borde. */}
        {pantalla !== "shorts" && <StatusBar />}
        <AnimatePresence mode="wait">
          {pantalla === "intro" && (
            <Onboarding
              key="intro"
              onTerminar={(alta) => {
                setNombre(alta.nombre);
                setIntereses(alta.intereses);
                /* Lo que se ha contestado en la introducción se guarda en las
                   preferencias, que es lo único que sobrevive a un recargado.
                   Ahí lo lee la pantalla de ajustes y ahí lo leería el envío a
                   analítica de una app de verdad. */
                preferencias.set("nombre", alta.nombre);
                preferencias.set("edad", alta.edad);
                preferencias.set("genero", alta.genero);
                preferencias.set("origen", alta.origen);
                setPantalla("pago");
              }}
            />
          )}
          {pantalla === "pago" && <Pago key="pago" onEntrar={() => setPantalla("alta")} />}
          {pantalla === "alta" && (
            <Checkout
              key="alta"
              reducido={!!reducido}
              onVolver={() => setPantalla("pago")}
              onListo={() => setPantalla("inicio")}
            />
          )}
          {pantalla === "inicio" && (
            <Inicio
              key="inicio"
              racha={RACHA}
              intereses={intereses}
              onAbrir={(l) => {
                setLibro(l);
                setPantalla("detalle");
              }}
              onPerfil={() => setPantalla("perfil")}
            />
          )}
          {pantalla === "perfil" && (
            <Perfil
              key="perfil"
              nombre={nombre}
              racha={RACHA}
              leidas={leidas}
              minutosHoy={minutosHoy}
              meta={meta}
              minutosTotales={minutosTotales}
              onMeta={setMeta}
              favoritas={0}
              guardadas={0}
              onCerrar={() => setPantalla("inicio")}
              onAjustes={() => setPantalla("ajustes")}
              onAntiScroll={() => setPantalla("anti")}
            />
          )}
          {pantalla === "anti" && (
            <AntiScroll
              key="anti"
              objetivo={MINUTOS_OBJETIVO}
              reducido={!!reducido}
              onCerrar={() => setPantalla("perfil")}
            />
          )}
          {pantalla === "ajustes" && (
            <Ajustes
              key="ajustes"
              nombre={nombre}
              racha={RACHA}
              prefs={preferencias}
              /* El nombre y el objetivo viven aquí arriba: los ajustes los
                 editan y el perfil y la pantalla de inicio los reflejan sin
                 tener que recargar. */
              onNombre={setNombre}
              onObjetivo={setObjetivo}
              onVolver={() => setPantalla("perfil")}
            />
          )}
          {pantalla === "oferta" && (
            <Oferta key="oferta" reducido={!!reducido} onCerrar={() => setPantalla("inicio")} />
          )}
          {pantalla === "shorts" && (
            // Terminar un short no saca de la sección: deja en la siguiente
            // historia. Lo único que sube al estado de la app es la cuenta de
            // tarjetas leídas, que es lo que ve el perfil.
            <MuroShorts
              key="shorts"
              onLeido={(s, m) => {
                setLeidas((n) => n + s.paginas.length + 1);
                setMinutosHoy((n) => n + m);
                setMinutosTotales((n) => n + m);
              }}
            />
          )}
          {pantalla === "detalle" && (
            <DetalleLibro
              key="detalle"
              libro={libro}
              onCerrar={() => setPantalla("inicio")}
              onAbrir={(l) => setLibro(l)}
              onEmpezar={() => {
                setCompletados(0);
                setPantalla("camino");
              }}
            />
          )}
          {pantalla === "camino" && (
            <Camino
              key="camino"
              libro={libro}
              completados={completados}
              onVolver={() => setPantalla("detalle")}
              onEmpezar={async (i) => {
                /* Casi siempre está ya en memoria y esto no espera nada. Si el
                   lector ha ido muy rápido o la red va mal, se aguarda aquí:
                   entrar en la lección con las tarjetas de otro libro sería
                   peor que un instante de espera en el mapa. */
                const r = await cargarResumen(libro.id);
                setResumen(r);
                arranque.current = Date.now();
                setParte(i);
                setPantalla("leccion");
              }}
            />
          )}
          {pantalla === "leccion" && (
            <Leccion
              key="leccion"
              cartas={cartas}
              /* El telón de entrada necesita saber en qué parada estás; si el
                 libro abierto no tiene resumen —el capítulo de Alejandría— no
                 hay título que anunciar y no se pone telón. */
              capitulo={
                resumen?.partes[parte]
                  ? { numero: parte + 1, total: resumen.partes.length, titulo: resumen.partes[parte].titulo }
                  : undefined
              }
              onSalir={() => setPantalla("camino")}
              onFin={() => {
                const gastado = (Date.now() - arranque.current) / 60000;
                setMinutos(gastado);
                setMinutosHoy((n) => n + gastado);
                setMinutosTotales((n) => n + gastado);
                // Solo cuenta como capítulo nuevo si iba por orden: releer el
                // primero no debería empujar la barra de progreso.
                setCompletados((c) => (parte === c ? c + 1 : c));
                setLeidas((n) => n + cartas.length);
                setObjetivo(objetivoLibro);
                setVuelta("camino");
                setPantalla("fin");
              }}
            />
          )}
          {pantalla === "fin" && (
            <Fin key="fin" minutos={minutos} onCerrar={() => setPantalla("racha")} />
          )}
          {pantalla === "racha" && (
            <Racha key="racha" dias={1} onContinuar={() => setPantalla("reto")} />
          )}
          {pantalla === "reto" && (
            <RetoDiario
              key="reto"
              minutos={minutos}
              objetivo={objetivo}
              onContinuar={() => setPantalla(vuelta)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {avisoRegalo && pantalla === "inicio" && (
            <AvisoRegalo
              key="aviso-regalo"
              reducido={!!reducido}
              onCerrar={() => setAvisoRegalo(false)}
              onAbrir={() => {
                setAvisoRegalo(false);
                setPantalla("oferta");
              }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {valoracion && pantalla === "inicio" && (
            <AvisoValoracion
              key="valoracion"
              reducido={!!reducido}
              onResponder={() => setValoracion(false)}
            />
          )}
        </AnimatePresence>

        <BarraPestanas
          visible={CON_BARRA.includes(pantalla)}
          activa={pantalla === "shorts" ? "shorts" : pantalla === "perfil" ? "perfil" : "libros"}
          onIr={(t) => setPantalla(t === "libros" ? "inicio" : t)}
        />
      </div>
    </div>
  );
}

/* ==========================================================================
   La barra de pestañas
   ========================================================================== */

type Tab = "libros" | "shorts" | "perfil";

/**
 * Solo aparece en las dos pantallas raíz: dentro de un libro, de un capítulo o
 * de un short estorbaría, porque esas pantallas ya tienen su propia salida.
 * La pastilla del fondo se desliza entre pestañas con `layoutId`, así que el
 * movimiento lo interpola Framer Motion y no hay que calcular posiciones.
 */
function BarraPestanas({
  visible,
  activa,
  onIr,
}: {
  visible: boolean;
  activa: Tab;
  onIr: (t: Tab) => void;
}) {
  const tabs: { id: Tab; nombre: string; Icono: (p: { tamano?: number }) => ReactElement }[] = [
    { id: "libros", nombre: "Libros", Icono: GlyphLibros },
    { id: "shorts", nombre: "Shorts", Icono: GlyphRayo },
    { id: "perfil", nombre: "Perfil", Icono: GlyphPerfil },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="pestanas"
          initial={{ y: 72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 72, opacity: 0 }}
          transition={springSoft}
        >
          {tabs.map(({ id, nombre, Icono }) => (
            <button
              key={id}
              className="pestana"
              data-activa={activa === id}
              onClick={() => onIr(id)}
              aria-current={activa === id ? "page" : undefined}
            >
              {activa === id && (
                <motion.span className="pestana-pastilla" layoutId="pastilla" transition={spring} />
              )}
              <motion.span
                className="pestana-icono"
                animate={activa === id ? { scale: [1, 1.22, 1], y: [0, -3, 0] } : { scale: 1, y: 0 }}
                transition={springPop}
              >
                <Icono tamano={21} />
              </motion.span>
              <span className="pestana-nombre">{nombre}</span>
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

function StatusBar() {
  const [hora, setHora] = useState(() => reloj());
  useEffect(() => {
    const id = window.setInterval(() => setHora(reloj()), 20000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="status-bar">
      <span>{hora}</span>
      <span className="glyphs">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden>
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.6" y="5" width="3" height="6" rx="1" />
          <rect x="9.2" y="2.6" width="3" height="8.4" rx="1" />
          <rect x="13.8" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="22" height="11" viewBox="0 0 22 11" aria-hidden>
          <rect x="0.6" y="0.6" width="17" height="9.8" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <rect x="2.2" y="2.2" width="12" height="6.6" rx="1.8" fill="currentColor" />
          <path d="M19.4 4v3a2 2 0 0 0 0-3Z" fill="currentColor" opacity="0.5" />
        </svg>
      </span>
    </div>
  );
}

function reloj() {
  return new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

/* ==========================================================================
   Portada del libro — el paso previo a la lección
   ========================================================================== */

/* ==========================================================================
   La lección
   ========================================================================== */

const UMBRAL_PX = 62;
const UMBRAL_VEL = 480;

function Leccion({
  cartas,
  capitulo,
  onSalir,
  onFin,
}: {
  cartas: Card[];
  capitulo?: { numero: number; total: number; titulo: string };
  onSalir: () => void;
  onFin: () => void;
}) {
  const [indice, setIndice] = useState(0);
  /* El telón se levanta solo, pero mientras está puesto la tarjeta de debajo
     espera: entrar leyendo y a la vez leyendo el título del capítulo es pedir
     dos cosas a la vez. */
  const [telon, setTelon] = useState(!!capitulo);
  const [sentido, setSentido] = useState(1);
  const [guardada, setGuardada] = useState(false);
  const reducido = useReducedMotion();

  // Un único valor de gesto alimenta todas las capas. Cada una lo multiplica por
  // su profundidad, y de ahí sale el parallax: el fondo apenas se mueve, los
  // detalles van pegados al dedo.
  const x = useMotionValue(0);
  const capas = {
    fondo: useTransform(x, (v) => v * DEPTH.fondo),
    medio: useTransform(x, (v) => v * DEPTH.medio),
    frente: useTransform(x, (v) => v * DEPTH.frente),
    detalle: useTransform(x, (v) => v * DEPTH.detalle),
  };

  const carta = cartas[indice];
  const ultima = indice === cartas.length - 1;
  const bloqueado = useRef(false);

  function avanzar(paso: number) {
    const destino = indice + paso;
    /* Con el telón puesto no se avanza. El telón tapa la tarjeta, así que un
       teclazo aquí pasaría páginas a ciegas. */
    if (telon) return;
    if (bloqueado.current) return;
    if (destino < 0) return rebotar(-1);
    if (destino >= cartas.length) return onFin();

    bloqueado.current = true;
    setSentido(paso);
    setIndice(destino);
    // El gesto se devuelve a cero con muelle: las capas se recolocan a
    // velocidades distintas y el parallax sigue vivo durante la transición.
    animate(x, 0, { ...springSoft, onComplete: () => (bloqueado.current = false) });
  }

  function rebotar(direccion: number) {
    animate(x, direccion * 26, {
      ...spring,
      onComplete: () => animate(x, 0, springSoft),
    });
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
    }
    window.addEventListener("keydown", teclas);
    return () => window.removeEventListener("keydown", teclas);
  });

  return (
    <motion.div
      className="lesson"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1, transition: spring }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
    >
      <AnimatePresence>
        {telon && capitulo && (
          <EntradaCapitulo
            key="telon"
            numero={capitulo.numero}
            total={capitulo.total}
            titulo={capitulo.titulo}
            reducido={!!reducido}
            onFin={() => setTelon(false)}
          />
        )}
      </AnimatePresence>

      <div className="lesson-head">
        <button className="icon-btn" onClick={onSalir} aria-label="Cerrar capítulo">
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
        <div className="track">
          {/* Avanza con muelle, nunca a saltos */}
          <motion.div
            className="track-fill"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: telon ? 0 : (indice + 1) / cartas.length }}
            transition={springTight}
          />
        </div>
      </div>

      <motion.div
        className="card-area"
        drag="x"
        style={{ x }}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.42}
        dragMomentum={false}
        onDragEnd={alSoltar}
      >
        {/* El texto sí se renueva en cada tarjeta */}
        {/* La forma de la tarjeta manda sobre la maquetación */}
        <AnimatePresence mode="wait" custom={sentido}>
          <motion.div
            key={indice}
            className="card"
            data-forma={carta.forma}
            custom={sentido}
            initial={{ opacity: 0, x: sentido * 34 }}
            animate={
              telon
                ? { opacity: 0, x: 0 }
                : { opacity: 1, x: 0, transition: { ...spring, delay: 0.05 } }
            }
            exit={{ opacity: 0, x: sentido * -28, transition: { duration: 0.16 } }}
          >
            {carta.forma === "clave" ? (
              /* La tarjeta clave es la frase que hay que recordar del
                 capítulo, y hasta ahora se leía igual que las demás. Ahora
                 tiene placa propia y entra palabra a palabra: el ojo la
                 recorre en el orden en que se dice, que es exactamente lo que
                 no hace con un párrafo que aparece entero de golpe. */
              <div className="bloque-clave">
                <motion.span className="key-label" custom={0} variants={enterVariants} initial="hidden" animate="shown">
                  {carta.rotulo}
                </motion.span>
                <p className="key-statement">
                  {reducido
                    ? carta.frase
                    : carta.frase.split(" ").map((palabra, i) => (
                        <motion.span
                          key={`${indice}-${i}`}
                          className="key-palabra"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ ...spring, delay: 0.18 + i * 0.026 }}
                        >
                          {palabra}{" "}
                        </motion.span>
                      ))}
                </p>
                {/* La marca de la esquina se dibuja al final, cuando la frase
                    ya está puesta: cierra la placa en vez de anunciarla. */}
                <motion.span
                  className="key-marca"
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ...springPop, delay: reducido ? 0 : 0.34 }}
                />
              </div>
            ) : (
              <>
                <motion.p
                  className="card-body"
                  custom={1}
                  variants={enterVariants}
                  initial="hidden"
                  animate="shown"
                  dangerouslySetInnerHTML={{ __html: carta.texto }}
                />
                {carta.forma !== "texto" && (
                  <div className="scene-slot">
                    <Scene carta={carta} capas={capas} reducido={!!reducido} />
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {indice === 0 && (
          <motion.p
            className="hint-swipe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.9 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            Desliza para avanzar
          </motion.p>
        )}
      </AnimatePresence>

      <div className="actions">
        <div className="action-group">
          <motion.button className="action" whileTap={{ scale: 0.86 }} aria-label="Reportar">
            <GlyphFlag />
          </motion.button>
          <motion.button className="action" whileTap={{ scale: 0.86 }} aria-label="Compartir">
            <GlyphShare />
          </motion.button>
          <motion.button
            className="action"
            data-on={guardada}
            onClick={() => setGuardada((v) => !v)}
            whileTap={{ scale: 0.86 }}
            animate={guardada ? { scale: [1, 1.28, 1] } : {}}
            transition={springPop}
            aria-label="Guardar tarjeta"
            aria-pressed={guardada}
          >
            <GlyphHeart on={guardada} />
          </motion.button>
        </div>

        <motion.button
          className="ask"
          whileTap={{ scale: 0.92 }}
          transition={springPop}
          onClick={() => avanzar(1)}
          aria-label={ultima ? "Terminar lección" : "Siguiente tarjeta"}
        >
          <GlyphAsk />
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   Cierre
   ========================================================================== */

function Fin({ minutos, onCerrar }: { minutos: number; onCerrar: () => void }) {
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const control = animate(0, TOTAL_XP, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setXp(Math.round(v)),
    });
    return () => control.stop();
  }, []);

  // Se mide contra el objetivo del capítulo, no contra una cifra inventada.
  const aTiempo = minutos >= MINUTOS_OBJETIVO * 0.6;
  const texto = minutos < 1
    ? `${Math.round(minutos * 60)} s`
    : `${minutos.toFixed(1).replace(".", ",")} min`;

  return (
    <motion.div
      className="done"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <motion.svg
        width="128"
        height="128"
        viewBox="0 0 132 132"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { ...springPop, delay: 0.1 } }}
      >
        <circle cx="66" cy="66" r="60" fill="var(--sage-veil)" />
        <circle cx="66" cy="66" r="46" fill="var(--sage)" />
        <motion.path
          d="M 48 67 L 61 80 L 86 53"
          fill="none"
          stroke="var(--paper)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, transition: { ...springTight, delay: 0.34 } }}
        />
      </motion.svg>

      <motion.h2 custom={2} variants={enterVariants} initial="hidden" animate="shown">
        Capítulo<br />completado
      </motion.h2>

      <div className="done-cifras">
        <motion.div custom={3} variants={enterVariants} initial="hidden" animate="shown">
          <p className="done-label">Experiencia</p>
          <p className="done-xp">{xp}</p>
        </motion.div>
        <motion.div custom={4} variants={enterVariants} initial="hidden" animate="shown">
          <p className="done-label">Tiempo de lectura</p>
          <p className="done-xp" data-flojo={!aTiempo}>{texto}</p>
        </motion.div>
      </div>

      <motion.p
        className="done-nota"
        custom={5}
        variants={enterVariants}
        initial="hidden"
        animate="shown"
      >
        {aTiempo
          ? `Dentro de los ${MINUTOS_OBJETIVO} minutos previstos para este capítulo.`
          : `Has ido rápido: este capítulo está pensado para unos ${MINUTOS_OBJETIVO} minutos.`}
      </motion.p>

      <div className="done-cta">
        <motion.button
          className="primary-btn"
          onClick={onCerrar}
          whileTap={{ scale: 0.97 }}
          custom={6}
          variants={enterVariants}
          initial="hidden"
          animate="shown"
        >
          Continuar
        </motion.button>
      </div>
    </motion.div>
  );
}
