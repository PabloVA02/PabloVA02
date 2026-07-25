import { motion } from "framer-motion";
import { springPop, springSoft, springTight } from "./motion";

/* ==========================================================================
   La pantalla de carga.

   Una barra sola no da nada: avanza igual haga lo que haga la app. Aquí lo
   que se prepara es una biblioteca, así que la biblioteca SE MONTA delante de
   ti —doce portadas cayendo en rejilla— y debajo se van cerrando las tres
   tareas, cada una con su anillo.

   El orden de caída es diagonal (fila + columna) y no de izquierda a derecha:
   una barrida en diagonal se lee como algo que se derrama, y una fila tras
   otra se lee como una lista. Es el mismo número de piezas y el doble de
   gusto.

   Todo está calculado desde DURACION: si se cambia, se recolocan solas la
   cascada de portadas y las tres tareas, sin volver a cuadrar retardos.
   ========================================================================== */

/** Lo que dura la pantalla. El paso avanza solo al terminar. */
export const DURACION = 3.3;

const COLUMNAS = 4;
const FILAS = 3;
const TOTAL = COLUMNAS * FILAS;

/** Paleta de portadas: se recorre en bucle para que no haya dos iguales juntas. */
const TINTAS = ["var(--clay)", "var(--ochre)", "var(--sage)", "var(--plum)", "var(--slate)"];

const TAREAS = ["Eligiendo tus temas", "Ordenando los capítulos", "Preparando tu primera clase"];

/** Cada tarea ocupa un tercio del tiempo, con un respiro al final. */
const INICIO = 0.42;
const POR_TAREA = (DURACION - INICIO - 0.5) / TAREAS.length;
const VENTANA = POR_TAREA * TAREAS.length;

/**
 * El orden de caída: diagonal, pero repartido por TODA la ventana de las
 * tareas. Así las portadas y la lista cuentan lo mismo —cuatro portadas por
 * tarea— en vez de correr cada una por su lado. Antes la rejilla se llenaba
 * en menos de un segundo y el resto de la pantalla era espera.
 */
const ORDEN = Array.from({ length: TOTAL }, (_, i) => i).sort((a, b) => {
  const da = Math.floor(a / COLUMNAS) + (a % COLUMNAS);
  const db = Math.floor(b / COLUMNAS) + (b % COLUMNAS);
  return da - db || a - b;
});

/** Dónde cae cada casilla dentro de la ventana. */
const TURNO = new Map(ORDEN.map((casilla, puesto) => [casilla, puesto]));

export function CargaBiblioteca({ reducido }: { reducido: boolean }) {
  return (
    <div className="carga">
      <div className="carga-rejilla">
        {Array.from({ length: TOTAL }, (_, i) => {
          const col = i % COLUMNAS;
          const retraso = INICIO + (TURNO.get(i)! / (TOTAL - 1)) * VENTANA * 0.9;

          return (
            <motion.div
              key={i}
              className="carga-portada"
              style={{ background: TINTAS[i % TINTAS.length] }}
              initial={{ opacity: 0, scale: 0.4, y: -18, rotate: col % 2 ? 7 : -7 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              transition={reducido ? { duration: 0.01 } : { ...springPop, delay: retraso }}
            >
              {/* Un detalle dentro para que se lea «portada» y no «cuadrado» */}
              <motion.span
                className="carga-portada-marca"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={
                  reducido ? { duration: 0.01 } : { ...springPop, delay: retraso + 0.08 }
                }
              />
              <span className="carga-portada-linea" />
            </motion.div>
          );
        })}
      </div>

      <div className="carga-tareas">
        {TAREAS.map((t, i) => (
          <Tarea
            key={t}
            texto={t}
            reducido={reducido}
            arranque={INICIO + i * POR_TAREA}
            entrada={0.16 + i * 0.07}
            duracion={POR_TAREA}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Una tarea: el anillo se rellena, y al cerrarse el disco se llena de golpe y
 * se dibuja la marca. El salto de «casi lleno» a «hecho» es lo que da el
 * golpe de satisfacción; un anillo que solo se completa se queda soso.
 */
function Tarea({
  texto,
  arranque,
  duracion,
  entrada,
  reducido,
}: {
  texto: string;
  arranque: number;
  duracion: number;
  /** Cuándo aparece la fila. Todas están desde el principio, apagadas. */
  entrada: number;
  reducido: boolean;
}) {
  const cierre = arranque + duracion * 0.82;

  return (
    <motion.div
      className="carga-tarea"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={reducido ? { duration: 0.01 } : { ...springSoft, delay: entrada }}
    >
      <span className="carga-anillo">
        <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden>
          <circle cx="16" cy="16" r="13" fill="none" stroke="var(--paper-edge)" strokeWidth="3.4" />

          {/* El disco de fondo entra cuando la tarea se cierra */}
          <motion.circle
            cx="16" cy="16" r="14.5" fill="var(--sage)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={reducido ? { duration: 0.01 } : { ...springPop, delay: cierre }}
            style={{ originX: "16px", originY: "16px" }}
          />

          {/* El anillo que se rellena. Empieza arriba, no a la derecha */}
          <motion.circle
            cx="16" cy="16" r="13" fill="none"
            stroke="var(--sage)" strokeWidth="3.4" strokeLinecap="round"
            transform="rotate(-90 16 16)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={
              reducido
                ? { duration: 0.01 }
                : { duration: duracion * 0.8, ease: "easeInOut", delay: arranque }
            }
          />

          <motion.path
            d="M 10 16.4 L 14.2 20.6 L 22 12.4"
            fill="none" stroke="var(--paper)" strokeWidth="3.2"
            strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={
              reducido ? { duration: 0.01 } : { ...springTight, delay: cierre + 0.06 }
            }
          />
        </svg>
      </span>
      <motion.span
        className="carga-tarea-texto"
        initial={{ opacity: 0.45 }}
        animate={{ opacity: 1 }}
        transition={reducido ? { duration: 0.01 } : { ...springSoft, delay: cierre }}
      >
        {texto}
      </motion.span>
    </motion.div>
  );
}
