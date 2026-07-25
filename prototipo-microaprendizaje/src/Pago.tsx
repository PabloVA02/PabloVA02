import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { spring, springPop, springSoft, springTight } from "./motion";
import { GlyphClose } from "./glyphs";

/* ==========================================================================
   El muro de pago.

   Sale al terminar la introducción, y su único trabajo es quitar el miedo a
   una fecha. Por eso el centro de la pantalla no es el precio: son los siete
   días de prueba, contados desde HOY y con sus fechas reales, más el aviso
   que llega antes de que se cobre nada.

   Todo se calcula desde `new Date()`: la tira de la semana, los días de los
   hitos y el día del cobro. No hay una sola fecha escrita a mano, así que la
   pantalla siempre cuadra con el día en que se abre.

   La animación cuenta lo mismo que el texto. El raíl SUBE con muelle —se pasa
   de largo y vuelve, como un muelle de verdad— y cada hito aparece cuando el
   raíl llega a su altura. El orden de la animación es el orden cronológico.
   ========================================================================== */

/** Días de prueba. Cambiar esto recoloca toda la pantalla sola. */
const DIAS_PRUEBA = 7;
/** Cuántos días antes del cobro llega el aviso. */
const AVISO_ANTES = 2;

/** Ritmo entre hitos. */
const PASO = 0.15;

/**
 * El muelle del raíl. Es más blando y con menos amortiguación que los del
 * resto del proyecto a propósito: aquí el rebote tiene que verse, porque es
 * lo que convierte una barra que crece en una barra que SALTA.
 */
const muelleRail = { type: "spring" as const, stiffness: 108, damping: 13, mass: 1.15 };

function enDias(offset: number) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d;
}

const comoFecha = (d: Date) =>
  d.toLocaleDateString("es-ES", { day: "numeric", month: "short" }).replace(".", "");

const inicialDia = (d: Date) =>
  d.toLocaleDateString("es-ES", { weekday: "short" }).slice(0, 2).replace(/^./, (c) => c.toUpperCase());

type Hito = {
  icono: "candado" | "campana" | "corona";
  dia: string;
  titulo: string;
  texto: string;
};

export function Pago({ onEntrar }: { onEntrar: () => void }) {
  const reducido = useReducedMotion();
  const [aviso, setAviso] = useState(true);

  const diaAviso = DIAS_PRUEBA - AVISO_ANTES;

  // La semana entera, desde hoy. El índice es el día de prueba menos uno.
  const semana = Array.from({ length: DIAS_PRUEBA }, (_, i) => {
    const fecha = enDias(i);
    return {
      fecha,
      inicial: inicialDia(fecha),
      numero: fecha.getDate(),
      hoy: i === 0,
      avisa: i === diaAviso - 1,
      cobra: i === DIAS_PRUEBA - 1,
    };
  });

  const hitos: Hito[] = [
    {
      icono: "candado",
      dia: "Hoy",
      titulo: `Empieza tu semana gratis`,
      texto: "Acceso completo desde este momento",
    },
    {
      icono: "campana",
      dia: `Día ${diaAviso}`,
      titulo: `Te avisamos · ${comoFecha(enDias(diaAviso - 1))}`,
      texto: `Dos días antes de que termine, para que decidas sin prisa`,
    },
    {
      icono: "corona",
      dia: `Día ${DIAS_PRUEBA}`,
      titulo: `Termina la prueba · ${comoFecha(enDias(DIAS_PRUEBA - 1))}`,
      texto: "Se cobran 23,99 € salvo que canceles antes",
    },
  ];

  const finCola = 0.34 + hitos.length * PASO;

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
          transition={{ ...springPop, delay: 0.55 }}
        >
          <GlyphClose />
        </motion.button>
      </div>

      <div className="pago-scroll">
        <motion.h1
          className="pago-titulo"
          initial={{ opacity: 0, y: 18, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: 0.06 }}
        >
          Cómo funciona<br />tu prueba
        </motion.h1>
        <motion.p
          className="pago-entradilla"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.14 }}
        >
          Siete días completos. Hoy no se te cobra nada.
        </motion.p>

        {/* La semana, con sus fechas de verdad. Las celdas caen escalonadas */}
        <div className="pago-semana" role="list" aria-label="Los siete días de prueba">
          {semana.map((d, i) => (
            <motion.div
              key={d.numero}
              role="listitem"
              className="pago-dia"
              data-hoy={d.hoy}
              data-avisa={d.avisa}
              data-cobra={d.cobra}
              initial={{ opacity: 0, y: 14, scale: 0.82 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.2 + i * 0.045 }}
            >
              <span className="pago-dia-inicial">{d.inicial}</span>
              <span className="pago-dia-numero">{d.numero}</span>
              {d.avisa && <span className="pago-dia-marca" aria-label="Día del aviso" />}
              {d.cobra && <span className="pago-dia-marca" aria-label="Día del cobro" />}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pago-tarjeta"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springSoft, delay: 0.28 }}
        >
          <div className="pago-linea">
            {/* La caja recorta el rebote: el muelle se pasa de largo y, sin
                esto, el raíl asomaría por debajo de la tarjeta */}
            <span className="pago-rail-caja" aria-hidden>
              <motion.span
                className="pago-rail"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={reducido ? { duration: 0.01 } : { ...muelleRail, delay: 0.34 }}
              />
            </span>

            {hitos.map((h, k) => (
              <motion.div
                key={h.dia}
                className="pago-hito"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={reducido ? { duration: 0.01 } : { ...spring, delay: 0.42 + k * PASO }}
              >
                <motion.span
                  className="pago-icono"
                  initial={{ scale: 0.3 }}
                  animate={{ scale: 1 }}
                  transition={
                    reducido ? { duration: 0.01 } : { ...springPop, delay: 0.42 + k * PASO }
                  }
                >
                  <IconoHito tipo={h.icono} reducido={!!reducido} retraso={0.42 + k * PASO} />
                </motion.span>
                <div className="pago-hito-texto">
                  <span className="pago-hito-dia">{h.dia}</span>
                  <p className="pago-hito-titulo">{h.titulo}</p>
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
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: finCola }}
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
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: finCola + 0.08 }}
        >
          Empezar la semana gratis
        </motion.button>

        <motion.p
          className="pago-precio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: finCola + 0.16 }}
        >
          Después, 1,99 €/mes facturados como <strong>23,99 €/año</strong>
        </motion.p>

        <motion.div
          className="pago-enlaces"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: finCola + 0.22 }}
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

  if (tipo === "candado") {
    return (
      <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden>
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
      <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden>
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
    <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden>
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
