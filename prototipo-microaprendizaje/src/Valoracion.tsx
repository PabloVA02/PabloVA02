import { motion } from "framer-motion";
import { spring, springPop, springSoft } from "./motion";

/* ==========================================================================
   «¿Te está gustando?»

   OJO: esta tarjeta YA NO SE MONTA. El 21 de agosto Pablo mandó la captura de
   Headway pidiendo la reseña con estrellas y pidió «algo así», así que el
   aviso pasó a ser `Resena.tsx`, que hace lo mismo y además pregunta. Lo que
   sobrevive de aquí, y por eso el fichero no se borra, es EL COHETE: se
   exporta y lo pinta la tarjeta nueva.

   El aviso que pide valoración. Aparece de vez en cuando —no al entrar, sino
   cuando ya has leído algo— y por eso puede permitirse ser bonito: no está
   interrumpiendo, está celebrando.

   El cohete NO es una ilustración con una animación encima. Está construido
   por capas que se mueven a ritmos distintos y cada una tiene su motivo:

     · la llama parpadea a 0,28 s, más rápido que nada en la app, porque el
       fuego es lo único que puede ir nervioso sin parecer un error;
     · el humo son bocanadas que nacen, crecen y se deshacen, escalonadas, no
       una nube quieta con opacidad animada;
     · las estrellas caen HACIA ABAJO. Es lo que dice que el que sube es él:
       sin ese contramovimiento, un cohete flotando es un cohete parado;
     · el casco flota y se inclina en periodos primos entre sí, así que la
       postura nunca se repite dos veces igual.

   Con `prefers-reduced-motion` se apaga todo el bucle y queda el dibujo, que
   es un dibujo completo por sí solo.
   ========================================================================== */

/* --------------------------------------------------------------------------
   El cohete
   -------------------------------------------------------------------------- */

/** Las ascuas que suelta la tobera. El humo gris se probó y se descartó:
 *  sobre una tarjeta oscura, el beige a media opacidad no es humo, son bolas
 *  grises. Lo que sí funciona en oscuro es el fuego, así que la estela es luz
 *  y lo que cae son chispas. */
const ASCUAS = [
  { x: -12, r: 3.4, t: 1.5, d: 0 },
  { x: 9, r: 2.6, t: 1.8, d: 0.4 },
  { x: -4, r: 2.2, t: 1.3, d: 0.85 },
  { x: 15, r: 3, t: 1.65, d: 1.2 },
  { x: -18, r: 2.4, t: 1.9, d: 1.55 },
];

/** Estrellas del fondo: parpadean a destiempo unas de otras. */
const ESTRELLAS = [
  { x: 34, y: 40, r: 2.6, t: 2.4 },
  { x: 168, y: 62, r: 3.2, t: 3.1 },
  { x: 22, y: 118, r: 2.2, t: 2.8 },
  { x: 178, y: 132, r: 2.6, t: 3.6 },
  { x: 52, y: 22, r: 2, t: 2.1 },
  { x: 152, y: 26, r: 2.4, t: 3.3 },
];

/** Las rayas que caen: la velocidad se cuenta con lo que se queda atrás. */
const RAYAS = [
  { x: 44, y: -10, alto: 22, t: 1.1, d: 0 },
  { x: 158, y: -30, alto: 30, t: 1.35, d: 0.4 },
  { x: 30, y: 30, alto: 18, t: 1.2, d: 0.75 },
  { x: 172, y: 20, alto: 24, t: 1.5, d: 0.2 },
];

export function Cohete({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 200 252" className="cohete" aria-hidden>
      <defs>
        <radialGradient id="v-estela">
          <stop offset="0%" stopColor="var(--ochre)" stopOpacity="0.5" />
          <stop offset="55%" stopColor="var(--clay)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--clay)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Fondo: estrellas quietas que respiran */}
      {ESTRELLAS.map((e, i) => (
        <motion.circle
          key={i}
          cx={e.x}
          cy={e.y}
          r={e.r}
          fill="var(--ochre)"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            reducido
              ? { opacity: 0.5, scale: 1 }
              : { opacity: [0.25, 0.9, 0.25], scale: [0.8, 1.15, 0.8] }
          }
          transition={
            reducido
              ? { duration: 0.3 }
              : { duration: e.t, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }
          }
          style={{ originX: `${e.x}px`, originY: `${e.y}px` }}
        />
      ))}

      {/* Las rayas de velocidad caen mientras él sube */}
      {!reducido &&
        RAYAS.map((r, i) => (
          <motion.rect
            key={i}
            x={r.x}
            width="2"
            height={r.alto}
            rx="1"
            fill="var(--paper-edge)"
            initial={{ y: r.y, opacity: 0 }}
            animate={{ y: r.y + 160, opacity: [0, 0.5, 0] }}
            transition={{ duration: r.t, repeat: Infinity, ease: "linear", delay: r.d }}
          />
        ))}

      {/* La estela: una mancha de luz que late bajo la tobera */}
      <motion.ellipse
        cx="100"
        cy="204"
        rx="52"
        ry="42"
        fill="url(#v-estela)"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={reducido ? { scale: 1, opacity: 0.9 } : { scale: [1, 1.14, 1], opacity: [0.75, 1, 0.75] }}
        transition={
          reducido ? { duration: 0.3 } : { duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
        }
        style={{ originX: "100px", originY: "196px" }}
      />

      {/* Y las ascuas que caen de ella */}
      {!reducido &&
        ASCUAS.map((a, i) => (
          <motion.circle
            key={i}
            cx={100 + a.x}
            r={a.r}
            fill={i % 2 ? "var(--clay)" : "var(--ochre)"}
            initial={{ cy: 198, opacity: 0 }}
            animate={{ cy: 246, opacity: [0, 0.95, 0] }}
            transition={{ duration: a.t, repeat: Infinity, ease: "easeIn", delay: a.d }}
          />
        ))}

      {/* El cohete entero: sube al entrar y luego se queda flotando */}
      <motion.g
        initial={reducido ? { opacity: 0 } : { y: 130, opacity: 0, scale: 0.7 }}
        animate={reducido ? { opacity: 1 } : { y: 0, opacity: 1, scale: 1 }}
        transition={
          reducido
            ? { duration: 0.3 }
            : { type: "spring", stiffness: 120, damping: 14, mass: 1.1, delay: 0.1 }
        }
        style={{ originX: "100px", originY: "180px" }}
      >
        <motion.g
          animate={reducido ? {} : { y: [0, -9, 0], rotate: [-2.2, 2.2, -2.2] }}
          transition={{
            y: { duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
            rotate: { duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
          }}
          style={{ originX: "100px", originY: "110px" }}
        >
          {/* La llama, debajo de todo el casco */}
          <motion.g
            style={{ originX: "100px", originY: "156px" }}
            animate={reducido ? {} : { scaleY: [1, 1.38, 0.86, 1.22, 1], scaleX: [1, 0.92, 1.08, 0.95, 1] }}
            transition={{ duration: 0.28, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M100 212 C84 194, 79 176, 84 158 L116 158 C121 176, 116 194, 100 212 Z" fill="var(--clay)" />
            <path d="M100 198 C90 186, 87 172, 90 159 L110 159 C113 172, 110 186, 100 198 Z" fill="var(--ochre)" />
            <path d="M100 182 C95 175, 94 167, 95 160 L105 160 C106 167, 105 175, 100 182 Z" fill="var(--paper)" opacity="0.9" />
          </motion.g>

          {/* Aletas */}
          <path d="M70 118 C56 132, 52 148, 54 162 L74 152 L74 120 Z" fill="var(--clay)" />
          <path d="M130 118 C144 132, 148 148, 146 162 L126 152 L126 120 Z" fill="var(--clay-deep, #9e5637)" />

          {/* Casco */}
          <path
            d="M100 18 C120 44, 132 76, 132 110 C132 140, 118 160, 100 160 C82 160, 68 140, 68 110 C68 76, 80 44, 100 18 Z"
            fill="var(--sage)"
          />
          {/* Brillo: la misma silueta recortada por la izquierda */}
          <path
            d="M100 18 C88 40, 80 74, 80 110 C80 136, 88 154, 100 160 C90 160, 68 140, 68 110 C68 76, 80 44, 100 18 Z"
            fill="var(--paper)"
            opacity="0.22"
          />
          {/* Punta */}
          <path d="M100 18 C110 31, 117 45, 121 58 L79 58 C83 45, 90 31, 100 18 Z" fill="var(--clay)" />

          {/* Ventana */}
          <circle cx="100" cy="92" r="20" fill="var(--slate-deep, #42545e)" />
          <circle cx="100" cy="92" r="15" fill="var(--ochre)" />
          <motion.circle
            cx="94"
            cy="86"
            r="5"
            fill="var(--paper)"
            opacity="0.75"
            animate={reducido ? {} : { opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Costura de abajo */}
          <path d="M74 138 L126 138" stroke="var(--sage-oscuro, #55624a)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </motion.g>
      </motion.g>
    </svg>
  );
}

/* --------------------------------------------------------------------------
   El aviso
   -------------------------------------------------------------------------- */

export function AvisoValoracion({
  nombre = "Curva",
  reducido,
  onResponder,
}: {
  /** Cómo se llama la app en la pregunta. */
  nombre?: string;
  reducido: boolean;
  onResponder: (gusta: boolean) => void;
}) {
  return (
    <motion.div
      className="regalo-velo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      onClick={() => onResponder(false)}
    >
      <motion.div
        className="regalo-aviso valoracion"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.18 } }}
        transition={{ ...springPop, delay: 0.05 }}
      >
        <Cohete reducido={reducido} />

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.34 }}
        >
          ¿Te está gustando {nombre}?
        </motion.h2>

        <motion.div
          className="valoracion-botones"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springPop, delay: 0.44 }}
        >
          <motion.button
            className="valoracion-no"
            onClick={() => onResponder(false)}
            whileTap={{ scale: 0.96 }}
            transition={spring}
          >
            No
          </motion.button>
          <motion.button
            className="valoracion-si"
            onClick={() => onResponder(true)}
            whileTap={{ scale: 0.96 }}
            transition={spring}
          >
            Sí
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
