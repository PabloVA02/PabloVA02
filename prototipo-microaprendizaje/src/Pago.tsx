import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { spring, springPop, springSoft, springTight } from "./motion";
import { GlyphClose } from "./glyphs";

/* ==========================================================================
   El muro de pago.

   Sale al terminar la introducción, y su único trabajo es quitar el miedo a
   una fecha. Por eso el centro de la pantalla no es el precio: es una línea
   de tiempo que dice exactamente qué va a pasar y cuándo, incluido el aviso
   antes de que se cobre nada.

   La animación va en ese mismo sentido. El raíl CRECE hacia abajo y cada
   hito aparece cuando el raíl llega a su altura, así que la pantalla se lee
   sola en orden cronológico: no es decoración, es el orden de lectura.
   ========================================================================== */

/** Cuánto tarda el raíl en recorrer un hito. Marca el ritmo de todo. */
const PASO = 0.16;

function fecha(dias: number) {
  const d = new Date();
  d.setDate(d.getDate() + dias);
  return d.toLocaleDateString("es-ES", { day: "numeric", month: "short" }).replace(".", "");
}

type Hito = {
  icono: "check" | "candado" | "campana" | "corona";
  titulo: string;
  texto: string;
  hecho?: boolean;
};

export function Pago({ onEntrar }: { onEntrar: () => void }) {
  const reducido = useReducedMotion();
  const [aviso, setAviso] = useState(true);

  const hitos: Hito[] = [
    { icono: "check", titulo: "Instalar la app", texto: "Configurarla para tus objetivos", hecho: true },
    { icono: "candado", titulo: "Hoy · Empieza la prueba", texto: "Acceso completo, sin límites" },
    { icono: "campana", titulo: `${fecha(2)} · Recordatorio`, texto: "Te avisamos de que se acaba" },
    { icono: "corona", titulo: `${fecha(3)} · Eres miembro`, texto: "Si no cancelas antes, empieza la cuota" },
  ];

  // El raíl tarda lo mismo que el último hito en aparecer: llega y se para
  // justo donde está la corona, no antes ni después.
  const duracionRail = 0.3 + hitos.length * PASO;

  return (
    <motion.div
      className="pago"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0, transition: spring }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
    >
      <div className="pago-head">
        <motion.button
          className="icon-btn"
          onClick={onEntrar}
          aria-label="Cerrar"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springPop, delay: 0.5 }}
        >
          <GlyphClose />
        </motion.button>
      </div>

      <div className="pago-scroll">
        <motion.h1
          className="pago-titulo"
          initial={{ opacity: 0, y: 20, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: 0.08 }}
        >
          Cómo funciona tu prueba
        </motion.h1>
        <motion.p
          className="pago-pie-titulo"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.16 }}
        >
          Hoy no se te cobrará nada
        </motion.p>

        <motion.div
          className="pago-tarjeta"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springSoft, delay: 0.22 }}
        >
          <div className="pago-linea">
            {/* El raíl crece de arriba abajo y arrastra la lectura con él */}
            <motion.span
              className="pago-rail"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={
                reducido
                  ? { duration: 0.01 }
                  : { duration: duracionRail, ease: [0.22, 0.61, 0.36, 1], delay: 0.3 }
              }
            />

            {hitos.map((h, k) => (
              <motion.div
                key={h.titulo}
                className="pago-hito"
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={
                  reducido ? { duration: 0.01 } : { ...spring, delay: 0.34 + k * PASO }
                }
              >
                <motion.span
                  className="pago-icono"
                  data-hecho={h.hecho}
                  initial={{ scale: 0.4 }}
                  animate={{ scale: 1 }}
                  transition={
                    reducido ? { duration: 0.01 } : { ...springPop, delay: 0.34 + k * PASO }
                  }
                >
                  <IconoHito tipo={h.icono} reducido={!!reducido} retraso={0.34 + k * PASO} />
                </motion.span>
                <div className="pago-hito-texto">
                  <p className="pago-hito-titulo" data-hecho={h.hecho}>
                    {h.titulo}
                  </p>
                  <p className="pago-hito-pie">{h.texto}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.button
          className="pago-aviso"
          onClick={() => setAviso((v) => !v)}
          role="switch"
          aria-checked={aviso}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.3 + hitos.length * PASO }}
        >
          <span>Avísame antes de que acabe</span>
          {/* El pomo lo mueve el layout, no un `left` calculado a mano */}
          <span className="interruptor" data-on={aviso}>
            <motion.span className="interruptor-pomo" layout transition={springTight} />
          </span>
        </motion.button>
      </div>

      <div className="pago-pie">
        <motion.button
          className="primary-btn pago-cta"
          onClick={onEntrar}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 22, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: 0.42 + hitos.length * PASO }}
        >
          Pruébalo por 0,00 €
        </motion.button>

        <motion.p
          className="pago-precio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: 0.5 + hitos.length * PASO }}
        >
          1,99 €/mes, facturado anualmente como <strong>23,99 €/año</strong>
        </motion.p>

        <motion.div
          className="pago-enlaces"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: 0.56 + hitos.length * PASO }}
        >
          <button onClick={onEntrar}>Restaurar</button>
          <button onClick={onEntrar}>Términos</button>
          <button onClick={onEntrar}>Otros planes</button>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   Los iconos de la línea de tiempo. Dibujados aquí y no en `glyphs` porque
   solo tienen sentido dentro de esta pantalla: el candado se ABRE, la campana
   suena y la corona se asienta. Son animaciones, no pictogramas.
   -------------------------------------------------------------------------- */

function IconoHito({
  tipo,
  reducido,
  retraso,
}: {
  tipo: Hito["icono"];
  reducido: boolean;
  retraso: number;
}) {
  const trazo = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (tipo === "check") {
    return (
      <svg width="17" height="17" viewBox="0 0 18 18" aria-hidden>
        <circle cx="9" cy="9" r="7.1" {...trazo} />
        <motion.path
          d="M5.8 9.2 L8 11.4 L12.2 6.9"
          {...trazo}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={reducido ? { duration: 0.01 } : { ...springTight, delay: retraso + 0.12 }}
        />
      </svg>
    );
  }

  if (tipo === "candado") {
    return (
      <svg width="17" height="17" viewBox="0 0 18 18" aria-hidden>
        <rect x="4" y="8.2" width="10" height="7" rx="2" {...trazo} />
        {/* El arco se levanta: la prueba abre el acceso */}
        <motion.path
          d="M6.3 8.2 V6.3 A2.7 2.7 0 0 1 11.7 6.3 V8.2"
          {...trazo}
          initial={{ y: 2.4, opacity: 0.4 }}
          animate={{ y: 0, opacity: 1 }}
          transition={reducido ? { duration: 0.01 } : { ...springPop, delay: retraso + 0.14 }}
        />
      </svg>
    );
  }

  if (tipo === "campana") {
    return (
      <svg width="17" height="17" viewBox="0 0 18 18" aria-hidden>
        <motion.g
          style={{ originX: "9px", originY: "4px" }}
          animate={reducido ? {} : { rotate: [0, -13, 10, -6, 0] }}
          transition={{ duration: 0.9, delay: retraso + 0.2, ease: "easeOut" }}
        >
          <path d="M9 3.4 A4.3 4.3 0 0 1 13.3 7.7 V11 L14.5 12.6 H3.5 L4.7 11 V7.7 A4.3 4.3 0 0 1 9 3.4 Z" {...trazo} />
          <path d="M7.5 12.6 A1.6 1.6 0 0 0 10.5 12.6" {...trazo} />
        </motion.g>
      </svg>
    );
  }

  return (
    <svg width="17" height="17" viewBox="0 0 18 18" aria-hidden>
      <motion.path
        d="M3.6 12.4 L2.7 5.6 L6.2 8.1 L9 4.2 L11.8 8.1 L15.3 5.6 L14.4 12.4 Z"
        {...trazo}
        initial={{ y: -3, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={reducido ? { duration: 0.01 } : { ...springPop, delay: retraso + 0.14 }}
      />
    </svg>
  );
}
