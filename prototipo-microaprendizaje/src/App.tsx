import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type PanInfo,
} from "framer-motion";
import { CARDS, MINUTOS_OBJETIVO, TOTAL_XP } from "./lesson";
import { Scene } from "./Scene";
import { Racha, RetoDiario } from "./Racha";
import { DetalleLibro, Inicio, LIBROS, type Libro } from "./Biblioteca";
import { Camino } from "./Camino";
import { Onboarding } from "./Onboarding";
import { DEPTH, enterVariants, spring, springPop, springSoft, springTight } from "./motion";
import { GlyphAsk, GlyphBack, GlyphClose, GlyphFlag, GlyphHeart, GlyphShare } from "./glyphs";

type Pantalla = "intro" | "inicio" | "detalle" | "camino" | "leccion" | "fin" | "racha" | "reto";

export default function App() {
  const [pantalla, setPantalla] = useState<Pantalla>("intro");
  const [libro, setLibro] = useState<Libro>(LIBROS[0]);
  /** Capítulos completados del libro abierto. */
  const [completados, setCompletados] = useState(0);
  /** Minutos que ha tardado el lector en el capítulo, medidos de verdad. */
  const [minutos, setMinutos] = useState(0);
  const arranque = useRef(0);

  return (
    <div className="stage">
      <div className="shell">
        <StatusBar />
        <AnimatePresence mode="wait">
          {pantalla === "intro" && (
            <Onboarding key="intro" onTerminar={() => setPantalla("inicio")} />
          )}
          {pantalla === "inicio" && (
            <Inicio
              key="inicio"
              racha={1}
              onAbrir={(l) => {
                setLibro(l);
                setPantalla("detalle");
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
              onEmpezar={() => {
                arranque.current = Date.now();
                setPantalla("leccion");
              }}
            />
          )}
          {pantalla === "leccion" && (
            <Leccion
              key="leccion"
              onSalir={() => setPantalla("camino")}
              onFin={() => {
                setMinutos((Date.now() - arranque.current) / 60000);
                setCompletados((c) => c + 1);
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
              objetivo={MINUTOS_OBJETIVO}
              onContinuar={() => setPantalla("camino")}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
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

function Leccion({ onSalir, onFin }: { onSalir: () => void; onFin: () => void }) {
  const [indice, setIndice] = useState(0);
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

  const carta = CARDS[indice];
  const ultima = indice === CARDS.length - 1;
  const bloqueado = useRef(false);

  function avanzar(paso: number) {
    const destino = indice + paso;
    if (bloqueado.current) return;
    if (destino < 0) return rebotar(-1);
    if (destino >= CARDS.length) return onFin();

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
            animate={{ scaleX: (indice + 1) / CARDS.length }}
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
            animate={{ opacity: 1, x: 0, transition: { ...spring, delay: 0.05 } }}
            exit={{ opacity: 0, x: sentido * -28, transition: { duration: 0.16 } }}
          >
            {carta.forma === "clave" ? (
              <div className="bloque-clave">
                <motion.span className="key-label" custom={0} variants={enterVariants} initial="hidden" animate="shown">
                  {carta.rotulo}
                </motion.span>
                <motion.p className="key-statement" custom={1} variants={enterVariants} initial="hidden" animate="shown">
                  {carta.frase}
                </motion.p>
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
