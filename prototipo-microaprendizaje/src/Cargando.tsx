import type { ComponentType } from "react";
import { useEffect } from "react";
import type { Transition } from "framer-motion";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { LIBROS } from "./Biblioteca";
import { Docente, DocenteVB, Museo, MuseoVB } from "./undraw";
import { springPop, springSoft, springTight } from "./motion";

/* ==========================================================================
   La pantalla de carga.

   Una barra sola no da nada: avanza igual haga lo que haga la app. Aquí lo
   que se prepara es una biblioteca, así que la biblioteca SE MONTA delante de
   ti —nueve portadas cayendo en rejilla— y debajo se van cerrando las tres
   tareas, cada una con su anillo.

   Las portadas no son cuadrados de color: son las portadas DE VERDAD, las
   mismas ilustraciones de unDraw y los mismos colores que verás en la
   siguiente pantalla. Lo que se monta aquí es la biblioteca a la que vas a
   entrar, no una maqueta de ella.

   La barra sí está, pero mandando la cuenta la llevan las tareas: sube a
   tirones, uno por tarea cerrada, y entre tirón y tirón repta. Una barra que
   avanza lisa a velocidad constante es justo la que no dice nada.

   El orden de caída es diagonal (fila + columna) y no de izquierda a derecha:
   una barrida en diagonal se lee como algo que se derrama, y una fila tras
   otra se lee como una lista. Es el mismo número de piezas y el doble de
   gusto.

   Todo está calculado desde DURACION: si se cambia, se recolocan solas la
   cascada de portadas, las tres tareas y los tirones de la barra, sin volver
   a cuadrar retardos.
   ========================================================================== */

/** Lo que dura la pantalla. El paso avanza solo al terminar. */
export const DURACION = 6.4;

const COLUMNAS = 3;

type Ilustracion = ComponentType<{ banda: "fondo" | "medio" | "frente" }>;
type Portada = { color: string; Arte: Ilustracion; vb: string };

/** La portada de un libro real de la biblioteca, por su id. */
const deLibro = (id: string): Portada => {
  const libro = LIBROS.find((l) => l.id === id)!;
  return { color: libro.color, Arte: libro.Arte, vb: libro.vb };
};

/**
 * Las nueve casillas, en orden de rejilla. Siete son los libros de la
 * biblioteca y dos son de acompañamiento, para cerrar el cuadro. El orden
 * está puesto a mano para que no queden dos colores iguales pegados, ni en
 * fila ni en columna.
 */
const PORTADAS: Portada[] = [
  deLibro("alejandria"), deLibro("memoria"), deLibro("noche"),
  deLibro("sofocles"), deLibro("mapas"), deLibro("escuela"),
  deLibro("descubrir"),
  { color: "var(--clay)", Arte: Docente, vb: DocenteVB },
  { color: "var(--slate)", Arte: Museo, vb: MuseoVB },
];

const TOTAL = PORTADAS.length;

const TAREAS = ["Eligiendo tus temas", "Ordenando los capítulos", "Preparando tu primera clase"];

/** Cada tarea ocupa un tercio del tiempo, con un respiro al final. */
const INICIO = 0.55;
const COLA = 0.5;
const POR_TAREA = (DURACION - INICIO - COLA) / TAREAS.length;
const VENTANA = POR_TAREA * TAREAS.length;

/** Cuándo se cierra la tarea i: el anillo llega arriba antes de que acabe su turno. */
const cierreDe = (i: number) => INICIO + i * POR_TAREA + POR_TAREA * 0.82;

/**
 * La caída de una portada: lenta y con un poso de rebote al asentarse. Es más
 * blanda que cualquier muelle de motion.ts a propósito — aquí no entra algo
 * que hayas pedido, se está posando algo que aún no has visto.
 */
const CAIDA: Transition = { type: "spring", stiffness: 110, damping: 19, mass: 1.15 };

/**
 * El orden de caída: diagonal, pero repartido por TODA la ventana de las
 * tareas. Así las portadas y la lista cuentan lo mismo —tres portadas por
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

/**
 * Lo que marca la barra cuando se cierra la última tarea. El 6 % que falta lo
 * cierra la pantalla al irse: llegar al 100 % y quedarse ahí quieto un segundo
 * es exactamente la sensación de cuelgue que queremos evitar.
 */
const TOPE = 0.94;

/** [segundo, valor] de la barra. Sale de las tareas, no de una regla aparte. */
const PULSO: [number, number][] = [[0, 0], [INICIO, 0.04]];
TAREAS.forEach((_, i) => {
  // Repta hasta casi la marca de la tarea, y al cerrarse pega el tirón.
  PULSO.push([cierreDe(i) - POR_TAREA * 0.34, ((i + 0.66) / TAREAS.length) * TOPE]);
  PULSO.push([cierreDe(i), ((i + 1) / TAREAS.length) * TOPE]);
});
PULSO.push([DURACION - 0.28, 1], [DURACION, 1]);

const VALORES = PULSO.map(([, valor]) => valor);
const TIEMPOS = PULSO.map(([segundo]) => segundo / DURACION);

export function CargaBiblioteca({ reducido }: { reducido: boolean }) {
  return (
    <div className="carga">
      <div className="carga-rejilla">
        {PORTADAS.map((portada, i) => {
          const col = i % COLUMNAS;
          const retraso = INICIO + (TURNO.get(i)! / (TOTAL - 1)) * VENTANA * 0.88;

          return (
            <motion.div
              key={i}
              className="carga-portada"
              style={{ background: portada.color }}
              initial={{ opacity: 0, scale: 0.55, y: -26, rotate: col % 2 ? 8 : -8 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              transition={reducido ? { duration: 0.01 } : { ...CAIDA, delay: retraso }}
            >
              {/* El lomo: es lo que separa un libro de un azulejo de color */}
              <span className="carga-portada-lomo" />

              {/* La ilustración entra después de posarse la portada: la portada
                  cae en blanco y se imprime encima, que es lo que hace que
                  cada casilla tenga dos tiempos en vez de uno. */}
              <motion.svg
                className="carga-portada-arte"
                viewBox={portada.vb}
                aria-hidden
                initial={{ opacity: 0, scale: 0.84 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={
                  reducido ? { duration: 0.01 } : { ...springSoft, delay: retraso + 0.24 }
                }
              >
                <portada.Arte banda="fondo" />
                <portada.Arte banda="medio" />
                <portada.Arte banda="frente" />
              </motion.svg>
            </motion.div>
          );
        })}
      </div>

      <Barra reducido={reducido} />

      <div className="carga-tareas">
        {TAREAS.map((t, i) => (
          <Tarea
            key={t}
            texto={t}
            reducido={reducido}
            arranque={INICIO + i * POR_TAREA}
            entrada={0.2 + i * 0.14}
            duracion={POR_TAREA}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * La barra y su cifra, movidas por el MISMO valor: así el número no puede
 * discrepar de lo que se ve, que es el fallo clásico de animarlos por
 * separado.
 */
function Barra({ reducido }: { reducido: boolean }) {
  const avance = useMotionValue(0);
  const cifra = useTransform(avance, (v) => `${Math.round(v * 100)} %`);

  useEffect(() => {
    if (reducido) {
      avance.set(1);
      return;
    }
    const control = animate(avance, VALORES, {
      duration: DURACION,
      times: TIEMPOS,
      // Cada tramo frena al llegar: la barra se acerca a su marca y espera.
      ease: "easeOut",
    });
    return () => control.stop();
  }, [avance, reducido]);

  return (
    <div className="carga-barra">
      <div className="carga-barra-pista">
        <motion.div className="carga-barra-relleno" style={{ scaleX: avance }} />
      </div>
      <motion.span className="carga-barra-cifra">{cifra}</motion.span>
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
