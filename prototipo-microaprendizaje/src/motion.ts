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

/* ==========================================================================
   CÓMO ENTRA Y SALE UNA PANTALLA ENTERA

   Pablo, el 2 de septiembre: «cuando cambias de página se ve un efecto raro y
   va 0 fluido; necesito que la transición sea mucho más fluida y más bonita».

   Lo raro tenía nombre: la opacidad iba con MUELLE. Un muelle se pasa de largo
   y vuelve —para eso está—, pero la opacidad no puede pasar de 1: se queda
   pegada arriba mientras el muelle sigue oscilando, y lo que se ve es un
   aparecer irregular, con una detención a media entrada. Los muelles son para
   lo que se mueve; para lo que se enciende, una curva.

   La curva es una salida rápida y sin rebote —empieza deprisa y frena—, que es
   la que usan iOS y Material para lo mismo. La entrada dura 200 ms y la salida
   120: la salida siempre más corta, porque con `mode="wait"` hay que verla
   entera antes de que empiece la otra y nadie quiere esperar a que algo se
   vaya.

   Y SOLO SE ANIMAN OPACIDAD Y DESPLAZAMIENTO. Las dos las resuelve la tarjeta
   gráfica sin volver a calcular la maqueta; cualquier otra cosa —un alto, un
   margen— obliga al navegador a rehacer el reparto en cada fotograma, y ahí es
   donde se pierden los sesenta por segundo.

   Los seis puntos de subida son a propósito tan pocos: lo justo para que la
   pantalla tenga dirección y no parezca un corte. Más recorrido en una pantalla
   entera se lee como un salto, no como una transición.
   ========================================================================== */

/** La curva de salida estándar: arranca deprisa y frena. */
export const suave = [0.22, 1, 0.36, 1] as const;

/* LA QUE SE VA, SE VA DE GOLPE. Y no es pereza: con `mode="wait"` la pantalla
   nueva no empieza a existir hasta que la vieja ha terminado de irse, así que
   cada milisegundo de salida es un milisegundo con NADA en pantalla. Los 120
   que tenía eran 120 de ver el fondo de la carcasa desvanecerse hacia el vacío,
   que es la mitad del «se ve fatal» —la otra mitad era que ese fondo estaba en
   beige y ya está arreglado—.
   
   Yéndose en un fotograma, lo que se ve es la pantalla nueva apareciendo sobre
   el fondo de la app, que es del mismo color que ella. Ni parpadeo ni hueco.
   
   Y la que entra sube seis puntos mientras aparece: lo justo para que tenga
   dirección y no parezca un corte de vídeo. Doscientos milisegundos, que es lo
   que tarda una transición de pantalla en iOS y en Material. */
export const pantalla = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: suave } as Transition,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.01 } as Transition,
  },
} as const;

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
