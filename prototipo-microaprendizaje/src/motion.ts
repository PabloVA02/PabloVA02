import type { Transition } from "framer-motion";

/* ==========================================================================
   Presets de movimiento. Todo es muelle: no hay un solo easing lineal en la
   app salvo los bucles de reposo, que necesitan una curva simétrica para
   poder ir y volver sin tirón.
   ========================================================================== */

/** Muelle base para lo que se lee: firme, con un punto de rebote. */
export const spring: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 34,
  mass: 0.9,
};

/** Más blando y con más recorrido: capas de fondo y desplazamientos largos. */
export const springSoft: Transition = {
  type: "spring",
  stiffness: 170,
  damping: 26,
  mass: 1.1,
};

/** Casi sin rebote: la barra de progreso no debe pasarse nunca de largo. */
export const springTight: Transition = {
  type: "spring",
  stiffness: 210,
  damping: 38,
  mass: 0.7,
};

/** Para elementos que entran con peso: rebote perceptible pero corto. */
export const springPop: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 24,
  mass: 0.8,
};

/**
 * Profundidad. Cada capa del SVG se desplaza a un múltiplo distinto del gesto:
 * el fondo apenas se entera, los detalles van pegados al dedo. Es lo que
 * convierte el deslizamiento en parallax en lugar de en un bloque que se mueve.
 */
export const DEPTH = {
  fondo: 0.14,
  medio: 0.38,
  frente: 0.72,
  detalle: 1.05,
} as const;

export type Layer = keyof typeof DEPTH;

/** Retardo escalonado de entrada: ilustración, luego título, luego cuerpo. */
export const STAGGER = 0.07;

export const enterVariants = {
  hidden: { opacity: 0, y: 14 },
  shown: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...spring, delay: i * STAGGER },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.18 } },
};

/**
 * Bucle de reposo. La amplitud se queda entre 2 y 6 px y cada elemento recibe
 * su propia duración y desfase, así que el conjunto nunca cae en fase.
 */
export function idle(amplitude: number, duration: number, delay = 0) {
  return {
    animate: { y: [0, -amplitude, 0, amplitude * 0.65, 0] },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
      times: [0, 0.28, 0.5, 0.78, 1],
    },
  };
}

/** Variante rotatoria para lo que debe derivar en lugar de flotar. */
export function drift(degrees: number, duration: number, delay = 0) {
  return {
    animate: { rotate: [0, degrees, 0, -degrees, 0] },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };
}
