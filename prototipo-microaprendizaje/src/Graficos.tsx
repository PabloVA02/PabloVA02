import type { ReactElement } from "react";
import { motion, type MotionValue } from "framer-motion";
import type { Grafico } from "./lesson";
import { spring, springSoft, springTight } from "./motion";

/* ==========================================================================
   Gráficos con datos.

   Aparecen solo cuando el texto trae una cifra, y cuando aparecen ocupan la
   página entera: un gráfico pequeño metido debajo de todo es decoración, no
   información.

   Tres reglas que sigue cualquier gráfico honesto y que aquí se respetan:

     · La forma la elige el dato. Comparar magnitudes -> barras. Proporción
       sobre un total -> retícula de unidades. Evolución temporal -> línea.
     · El eje empieza en cero. Si no, comparar alturas miente.
     · Se anima la MAGNITUD, no la opacidad: la barra crece desde su base, la
       línea se dibuja, las unidades se encienden. Eso es lo que se lee.

   Lienzo común: 340 × 300.
   ========================================================================== */

/* -------------------------------------------------------------------------
   Cronología: evolución temporal -> línea
   ------------------------------------------------------------------------- */

const CURVA =
  "M 30 214 C 74 202, 108 76, 156 62 C 206 48, 240 92, 276 140 C 296 168, 310 196, 318 214";

const HITOS = [
  { x: 30, y: 214, titulo: "≈300 a.C.", pie: "FUNDACIÓN", lado: 1 },
  { x: 92, y: 132, titulo: "Los barcos", pie: "MÉTODO DE REQUISA", lado: 1 },
  { x: 156, y: 62, titulo: "400.000", pie: "ROLLOS · APOGEO", lado: -1, fuerte: true },
  { x: 258, y: 122, titulo: "48 a.C.", pie: "INCENDIO DEL PUERTO", lado: -1 },
  { x: 318, y: 214, titulo: "s. VII", pie: "YA NO QUEDA NADA", lado: 1 },
];

function Cronologia() {
  return (
    <g>
      <text x="24" y="292" fill="var(--ink-soft)" fontSize="9.5" fontWeight="650" letterSpacing="0.09em">
        VOLUMEN DE LA COLECCIÓN, SIGLO A SIGLO
      </text>

      <path
        d="M 24 240 L 322 240"
        stroke="var(--paper-edge)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      <motion.path
        d={`${CURVA} L 318 240 L 30 240 Z`}
        fill="var(--ochre-veil)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ ...springSoft, delay: 0.25 }}
      />

      <motion.path
        d={CURVA}
        fill="none"
        stroke="var(--clay)"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ ...springTight, delay: 0.1 }}
      />

      {HITOS.map((h, i) => {
        const ancho = 108;
        const cajaX = Math.min(Math.max(h.x - ancho / 2, 4), 336 - ancho);
        const cajaY = h.lado === -1 ? h.y - 54 : h.y + 18;
        return (
          <motion.g
            key={h.titulo}
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.55 + i * 0.11 }}
            style={{ originX: `${h.x}px`, originY: `${h.y}px` }}
          >
            <path
              d={`M ${h.x} ${h.y} L ${h.x} ${h.y + h.lado * 15}`}
              stroke={h.fuerte ? "var(--clay)" : "var(--paper-edge)"}
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
            <circle
              cx={h.x}
              cy={h.y}
              r={h.fuerte ? 7 : 5.5}
              fill={h.fuerte ? "var(--clay)" : "var(--paper)"}
              stroke="var(--clay)"
              strokeWidth="2.6"
            />
            <rect
              x={cajaX}
              y={cajaY}
              width={ancho}
              height="36"
              rx="10"
              fill={h.fuerte ? "var(--ink)" : "var(--paper-deep)"}
            />
            <text
              x={cajaX + ancho / 2}
              y={cajaY + 16}
              textAnchor="middle"
              fill={h.fuerte ? "var(--ochre)" : "var(--ink)"}
              fontSize="12.5"
              fontWeight="750"
              letterSpacing="-0.01em"
            >
              {h.titulo}
            </text>
            <text
              x={cajaX + ancho / 2}
              y={cajaY + 28}
              textAnchor="middle"
              fill={h.fuerte ? "var(--paper)" : "var(--ink-soft)"}
              fontSize="7.5"
              fontWeight="650"
              letterSpacing="0.07em"
              opacity={h.fuerte ? 0.82 : 1}
            >
              {h.pie}
            </text>
          </motion.g>
        );
      })}
    </g>
  );
}

/* -------------------------------------------------------------------------
   Colección: comparar magnitudes -> barras
   ------------------------------------------------------------------------- */

const COLECCIONES = [
  { etiqueta: "Alejandría", valor: 400000, destacada: true },
  { etiqueta: "Pérgamo", valor: 200000, destacada: false },
  { etiqueta: "Roma imperial", valor: 20000, destacada: false },
];

const BASE_Y = 246;
const ALTO_MAX = 172;

function Coleccion() {
  return (
    <g>
      <text x="24" y="26" fill="var(--ink-soft)" fontSize="9.5" fontWeight="650" letterSpacing="0.09em">
        ROLLOS REUNIDOS · ESTIMACIÓN ACEPTADA
      </text>

      {/* Eje en cero: sin esto, comparar alturas miente */}
      <path
        d={`M 24 ${BASE_Y} L 322 ${BASE_Y}`}
        stroke="var(--paper-edge)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {COLECCIONES.map((c, i) => {
        const alto = (c.valor / 400000) * ALTO_MAX;
        const x = 68 + i * 102;
        return (
          <g key={c.etiqueta}>
            <motion.g
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ ...springSoft, delay: 0.12 + i * 0.12 }}
              style={{ originX: `${x}px`, originY: `${BASE_Y}px` }}
            >
              <rect
                x={x - 31}
                y={BASE_Y - alto}
                width="62"
                height={alto}
                rx="13"
                fill={c.destacada ? "var(--clay)" : "var(--paper-edge)"}
              />
              {/* Luz en el canto: volumen sin degradado */}
              <rect
                x={x - 31}
                y={BASE_Y - alto}
                width="19"
                height={alto}
                rx="13"
                fill="#ffffff"
                opacity={c.destacada ? 0.18 : 0.55}
              />
            </motion.g>

            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.34 + i * 0.12 }}
            >
              <text
                x={x}
                y={BASE_Y - alto - 13}
                textAnchor="middle"
                fill="var(--ink)"
                fontSize={c.destacada ? "17" : "14"}
                fontWeight="750"
                letterSpacing="-0.02em"
              >
                {c.valor.toLocaleString("es-ES")}
              </text>
              <text
                x={x}
                y={BASE_Y + 20}
                textAnchor="middle"
                fill={c.destacada ? "var(--ink)" : "var(--ink-soft)"}
                fontSize="9.5"
                fontWeight="650"
                letterSpacing="0.05em"
              >
                {c.etiqueta.toUpperCase()}
              </text>
            </motion.g>
          </g>
        );
      })}
    </g>
  );
}

/* -------------------------------------------------------------------------
   Sófocles: proporción sobre un total -> retícula de unidades
   ------------------------------------------------------------------------- */

const COLUMNAS = 12;
const FILAS = 10;
const CONSERVADAS = 7;
const PASO = 25;

function Sofocles() {
  return (
    <g>
      <text x="24" y="26" fill="var(--ink-soft)" fontSize="9.5" fontWeight="650" letterSpacing="0.09em">
        CADA CUADRADO, UNA OBRA DE SÓFOCLES
      </text>

      {Array.from({ length: COLUMNAS * FILAS }, (_, i) => {
        const conservada = i < CONSERVADAS;
        return (
          <motion.rect
            key={i}
            x={26 + (i % COLUMNAS) * PASO}
            y={46 + Math.floor(i / COLUMNAS) * PASO}
            width="18"
            height="18"
            rx="4.5"
            fill={conservada ? "var(--clay)" : "var(--paper-edge)"}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              ...spring,
              // Las 7 que sobreviven se encienden una a una y despacio; las
              // 113 perdidas entran de golpe, como un bloque de fondo.
              delay: conservada ? 0.55 + i * 0.11 : 0.06 + (i / (COLUMNAS * FILAS)) * 0.32,
            }}
          />
        );
      })}

      <motion.g
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 1.35 }}
      >
        <rect x="26" y="256" width="132" height="34" rx="12" fill="var(--ink)" />
        <text x="42" y="278" fill="var(--ochre)" fontSize="17" fontWeight="750">
          7
        </text>
        <text x="60" y="278" fill="var(--paper)" fontSize="10" fontWeight="650" letterSpacing="0.04em">
          SOBREVIVEN
        </text>
        <text x="172" y="278" fill="var(--ink-soft)" fontSize="12" fontWeight="650">
          113 se perdieron
        </text>
      </motion.g>
    </g>
  );
}

/* -------------------------------------------------------------------------
   Supervivencia: una cadena que solo aguanta si no falla ningún eslabón
   ------------------------------------------------------------------------- */

const ESLABONES = [
  { x: 52, etiqueta: "s. III a.C." },
  { x: 120, etiqueta: "s. IV" },
  { x: 188, etiqueta: "s. IX" },
  { x: 256, etiqueta: "s. XV" },
  { x: 306, etiqueta: "hoy" },
];

function Supervivencia() {
  return (
    <g>
      <text x="24" y="26" fill="var(--ink-soft)" fontSize="9.5" fontWeight="650" letterSpacing="0.09em">
        CADA COPIA A MANO, UN ESLABÓN
      </text>

      <motion.path
        d={`M ${ESLABONES[0].x} 150 L ${ESLABONES[ESLABONES.length - 1].x} 150`}
        stroke="var(--clay)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="7 8"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ ...springTight, delay: 0.14 }}
      />

      {ESLABONES.map((e, i) => (
        <motion.g
          key={e.etiqueta}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...spring, delay: 0.34 + i * 0.13 }}
          style={{ originX: `${e.x}px`, originY: "150px" }}
        >
          <circle cx={e.x} cy="150" r="18" fill="var(--paper)" stroke="var(--clay)" strokeWidth="3.5" />
          <circle cx={e.x} cy="150" r="7" fill="var(--clay)" />
          <text
            x={e.x}
            y="192"
            textAnchor="middle"
            fill="var(--ink-soft)"
            fontSize="10"
            fontWeight="650"
            letterSpacing="0.04em"
          >
            {e.etiqueta.toUpperCase()}
          </text>
        </motion.g>
      ))}

      <motion.g
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 1.1 }}
      >
        <rect x="24" y="238" width="292" height="38" rx="13" fill="var(--ink)" />
        <text x="170" y="262" textAnchor="middle" fill="var(--paper)" fontSize="11.5" fontWeight="650">
          Falla un eslabón y se pierde para siempre.
        </text>
      </motion.g>
    </g>
  );
}

/* ------------------------------------------------------------------------- */

const CUADRO: Record<Grafico, () => ReactElement> = {
  cronologia: Cronologia,
  coleccion: Coleccion,
  sofocles: Sofocles,
  supervivencia: Supervivencia,
};

export function GraficoDatos({ tipo, x }: { tipo: Grafico; x: MotionValue<number> }) {
  const Dibujo = CUADRO[tipo];
  return (
    <motion.svg
      viewBox="0 0 340 300"
      role="img"
      aria-label="Gráfico con los datos del texto"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springSoft}
    >
      <motion.g style={{ x }}>
        <Dibujo />
      </motion.g>
    </motion.svg>
  );
}
