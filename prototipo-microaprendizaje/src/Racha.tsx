import { useEffect, useState } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";
import { spring, springPop, springSoft } from "./motion";

/* ==========================================================================
   Cierre de capítulo: tiempo, racha y reto diario.

   Tres pantallas encadenadas, como en las referencias. El fuego no es un
   emoji ni una imagen: es SVG dibujado y animado por capas — llama exterior,
   interior y núcleo — cada una con su propio ritmo, para que ondule de verdad
   en lugar de parpadear.
   ========================================================================== */

/* -------------------------------------------------------------------------
   La llama
   ------------------------------------------------------------------------- */

export function Llama({ tamano = 108, reducido }: { tamano?: number; reducido: boolean }) {
  const ondear = (d: number, retardo: number, amplitud: number) =>
    reducido
      ? {}
      : {
          animate: {
            scaleY: [1, 1 + amplitud, 1 - amplitud * 0.6, 1],
            scaleX: [1, 1 - amplitud * 0.5, 1 + amplitud * 0.4, 1],
            y: [0, -amplitud * 6, 0, 0],
          },
          transition: { duration: d, delay: retardo, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <svg width={tamano} height={tamano * 1.18} viewBox="0 0 100 118" aria-hidden>
      {/* Halo: late más despacio que la llama */}
      <motion.ellipse
        cx="50"
        cy="72"
        rx="42"
        ry="44"
        fill="var(--clay)"
        opacity="0.16"
        animate={reducido ? {} : { scale: [1, 1.09, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={reducido ? {} : { duration: 2.9, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "50px", originY: "72px" }}
      />

      {/* Llama exterior */}
      <motion.g {...ondear(2.3, 0, 0.055)} style={{ originX: "50px", originY: "112px" }}>
        <path
          d="M50 6 C 64 30, 86 44, 86 70 C 86 94, 70 112, 50 112 C 30 112, 14 94, 14 70 C 14 48, 30 40, 36 22 C 40 38, 46 44, 50 6 Z"
          fill="var(--clay)"
          stroke="var(--ink)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </motion.g>

      {/* Llama interior: otro ritmo, para que no vayan a la vez */}
      <motion.g {...ondear(1.7, 0.35, 0.08)} style={{ originX: "50px", originY: "112px" }}>
        <path
          d="M50 34 C 60 52, 72 60, 72 78 C 72 96, 62 108, 50 108 C 38 108, 28 96, 28 78 C 28 62, 40 54, 50 34 Z"
          fill="var(--ochre)"
        />
      </motion.g>

      {/* Núcleo */}
      <motion.g {...ondear(1.25, 0.7, 0.1)} style={{ originX: "50px", originY: "110px" }}>
        <path
          d="M50 62 C 56 74, 62 78, 62 88 C 62 99, 56 106, 50 106 C 44 106, 38 99, 38 88 C 38 78, 44 74, 50 62 Z"
          fill="#f6dd8a"
        />
      </motion.g>

      {/* Chispas que suben y se apagan */}
      {[
        { x: 26, d: 0, dur: 2.6 },
        { x: 74, d: 0.9, dur: 3.1 },
        { x: 62, d: 1.7, dur: 2.2 },
      ].map((c) => (
        <motion.circle
          key={c.x}
          cx={c.x}
          cy="60"
          r="2.6"
          fill="var(--ochre)"
          animate={reducido ? { opacity: 0 } : { y: [-2, -34], opacity: [0, 0.9, 0], scale: [0.5, 1, 0.4] }}
          transition={
            reducido ? {} : { duration: c.dur, delay: c.d, repeat: Infinity, ease: "easeOut" }
          }
        />
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------------
   Pantalla de racha
   ------------------------------------------------------------------------- */

const DIAS = ["L", "M", "X", "J", "V", "S", "D"];

export function Racha({ dias, onContinuar }: { dias: number; onContinuar: () => void }) {
  const reducido = useReducedMotion();
  const hoy = Math.min(dias - 1, DIAS.length - 1);

  return (
    <motion.div
      className="cierre"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="racha-dias">
        {DIAS.map((d, i) => {
          const cumplido = i <= hoy;
          const esHoy = i === hoy;
          return (
            <motion.div
              key={d}
              className="racha-dia"
              data-hoy={esHoy}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 + i * 0.05 }}
            >
              <span className="racha-letra">{d}</span>
              <div className="racha-marca">
              {esHoy ? (
                <motion.div
                  className="racha-marco"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ ...springPop, delay: 0.42 }}
                >
                  <Llama tamano={38} reducido={!!reducido} />
                </motion.div>
              ) : (
                <div className="racha-punto" data-cumplido={cumplido} />
              )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.5 }}
      >
        ¡Racha de {dias} {dias === 1 ? "día" : "días"}!
      </motion.h2>
      <motion.p
        className="cierre-sub"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.58 }}
      >
        Completa un capítulo cada día para mantenerla.
      </motion.p>

      <div className="cierre-cta">
        <motion.button
          className="primary-btn"
          onClick={onContinuar}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.68 }}
        >
          Continuar
        </motion.button>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------
   Reto diario
   ------------------------------------------------------------------------- */

export function RetoDiario({
  minutos,
  objetivo,
  onContinuar,
}: {
  minutos: number;
  objetivo: number;
  onContinuar: () => void;
}) {
  const [mostrado, setMostrado] = useState(0);
  const proporcion = Math.min(minutos / objetivo, 1);

  useEffect(() => {
    const control = animate(0, minutos, {
      duration: 0.9,
      delay: 0.35,
      ease: "easeOut",
      onUpdate: (v) => setMostrado(v),
    });
    return () => control.stop();
  }, [minutos]);

  const fecha = new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long" });

  return (
    <motion.div
      className="cierre"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <motion.p
        className="cierre-fecha"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.08 }}
      >
        {fecha}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.16 }}
      >
        Reto diario
      </motion.h2>
      <motion.p
        className="cierre-sub"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.24 }}
      >
        Este es el reto de hoy. Aprieta un poco e intenta completarlo.
      </motion.p>

      <motion.div
        className="reto-caja"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springSoft, delay: 0.32 }}
      >
        <p className="reto-titulo">APRENDE DURANTE {objetivo} MINUTOS</p>
        <div className="reto-barra">
          <motion.div
            className="reto-relleno"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: proporcion }}
            transition={{ ...springSoft, delay: 0.5 }}
          />
        </div>
        <p className="reto-cifra">
          {mostrado.toFixed(1).replace(".", ",")} / {objetivo} MIN
        </p>
      </motion.div>

      <div className="cierre-cta">
        <motion.button
          className="primary-btn"
          onClick={onContinuar}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.7 }}
        >
          Continuar
        </motion.button>
      </div>
    </motion.div>
  );
}
