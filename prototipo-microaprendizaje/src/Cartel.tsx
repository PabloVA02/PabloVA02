import { motion } from "framer-motion";

/* ==========================================================================
   El cartel: la portada que se dibuja sola.

   Cien historias necesitan cien portadas, y las fotografías reales van
   llegando de una en una. Un hueco gris mientras tanto hundiría la sección
   entera, así que cada historia tiene SIEMPRE una portada: si no hay foto, se
   dibuja un cartel a partir de su id.

   No es un relleno aleatorio. Del id sale un número, y de ese número salen la
   composición, el encuadre y los desfases del movimiento. Es decir: el cartel
   de «chernobil» es siempre el mismo cartel, en este navegador y en el
   siguiente, hoy y dentro de un año. Y dos historias distintas no coinciden.

   Ocho composiciones, todas construidas con las mismas piezas —un disco, unas
   bandas, una diagonal— y pintadas con el color de acento de la historia
   sobre fondo oscuro. Es lo que hace que cien carteles distintos sigan
   pareciendo de la misma app.
   ========================================================================== */

/** Número estable a partir del id. FNV-1a: corto, sin dependencias, basta. */
function semilla(texto: string) {
  let h = 0x811c9dc5;
  for (let i = 0; i < texto.length; i++) {
    h ^= texto.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Generador determinista: misma semilla, misma secuencia. */
function azar(estado: number) {
  let s = estado || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    s >>>= 0;
    return s / 0xffffffff;
  };
}

const VB = "0 0 320 420";

/** Las ocho composiciones. El índice sale de la semilla. */
const COMPOSICIONES = 8;

type Props = {
  /** Id de la historia: es lo que fija la composición. */
  id: string;
  /** Color de acento de la historia. */
  color: string;
  reducido: boolean;
};

export function Cartel({ id, color, reducido }: Props) {
  const s = semilla(id);
  const r = azar(s);
  const forma = s % COMPOSICIONES;

  // Tres profundidades: el fondo casi no se mueve, el frente respira.
  const respira = (amplitud: number, duracion: number, retraso: number) =>
    reducido
      ? {}
      : {
          animate: { y: [0, -amplitud, 0], opacity: [0.9, 1, 0.9] },
          transition: {
            duration: duracion,
            delay: retraso,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  return (
    <div className="cartel" style={{ ["--tinte" as string]: color }}>
      <svg viewBox={VB} preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id={`c-fondo-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.34" />
            <stop offset="62%" stopColor={color} stopOpacity="0.1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.03" />
          </linearGradient>
          <radialGradient id={`c-halo-${id}`} cx="50%" cy="42%" r="62%">
            <stop offset="0%" stopColor={color} stopOpacity="0.5" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base: nunca se ve un hueco, ni un instante */}
        <rect x="0" y="0" width="320" height="420" fill="var(--carbon)" />
        <rect x="0" y="0" width="320" height="420" fill={`url(#c-fondo-${id})`} />
        <ellipse cx="160" cy="180" rx="190" ry="180" fill={`url(#c-halo-${id})`} />

        <Composicion forma={forma} color={color} r={r} respira={respira} />

        {/* Viñeta: cierra los bordes para que el título de encima se lea */}
        <rect x="0" y="240" width="320" height="180" fill="var(--carbon)" opacity="0.42" />
      </svg>

      {/* Grano: rompe el degradado, que si no se bandea en pantallas malas */}
      <span className="cartel-grano" />
    </div>
  );
}

type Respira = (a: number, d: number, r: number) => Record<string, unknown>;

function Composicion({
  forma,
  color,
  r,
  respira,
}: {
  forma: number;
  color: string;
  r: () => number;
  respira: Respira;
}) {
  const claro = "var(--paper)";

  // 0 · HORIZONTE — un disco bajo sobre capas de terreno
  if (forma === 0) {
    const alto = 250 + r() * 40;
    return (
      <>
        <motion.circle cx={130 + r() * 60} cy={alto - 74} r={54} fill={color} opacity="0.8" {...respira(7, 12, 0)} />
        <path d={`M0 ${alto} Q 80 ${alto - 34} 160 ${alto} T 320 ${alto - 12} V420 H0 Z`} fill={color} opacity="0.5" />
        <path d={`M0 ${alto + 34} Q 110 ${alto + 4} 200 ${alto + 30} T 320 ${alto + 20} V420 H0 Z`} fill="var(--carbon)" opacity="0.62" />
      </>
    );
  }

  // 1 · ONDA — anillos que salen de un punto
  if (forma === 1) {
    const cx = 100 + r() * 120;
    const cy = 140 + r() * 60;
    return (
      <>
        {[38, 74, 112, 152, 196].map((radio, i) => (
          <motion.circle
            key={radio}
            cx={cx}
            cy={cy}
            r={radio}
            fill="none"
            stroke={color}
            strokeWidth={3.4 - i * 0.4}
            opacity={0.62 - i * 0.1}
            {...respira(3 + i, 9 + i * 1.7, i * 0.5)}
          />
        ))}
        <circle cx={cx} cy={cy} r="15" fill={color} />
      </>
    );
  }

  // 2 · COLUMNA — algo que sube y se ensancha
  if (forma === 2) {
    const x = 120 + r() * 80;
    return (
      <>
        <motion.g {...respira(9, 14, 0)}>
          <path d={`M${x - 44} 300 C ${x - 60} 190 ${x - 26} 110 ${x - 6} 44 C ${x + 30} 116 ${x + 62} 196 ${x + 42} 300 Z`} fill={color} opacity="0.42" />
          <path d={`M${x - 22} 300 C ${x - 32} 206 ${x - 10} 140 ${x} 92 C ${x + 16} 146 ${x + 34} 210 ${x + 22} 300 Z`} fill={color} opacity="0.66" />
        </motion.g>
        <rect x="0" y="298" width="320" height="122" fill="var(--carbon)" opacity="0.55" />
        <rect x="24" y="292" width="272" height="7" rx="3.5" fill={claro} opacity="0.2" />
      </>
    );
  }

  // 3 · REJILLA — muchas piezas iguales y unas pocas encendidas
  if (forma === 3) {
    const celdas = Array.from({ length: 40 }, (_, i) => i);
    return (
      <g>
        {celdas.map((i) => {
          const col = i % 8;
          const fila = Math.floor(i / 8);
          const on = r() > 0.72;
          return (
            <motion.rect
              key={i}
              x={16 + col * 36}
              y={64 + fila * 44}
              width="26"
              height="32"
              rx="3"
              fill={on ? color : claro}
              opacity={on ? 0.82 : 0.13}
              {...(on ? respira(3, 7 + (i % 5), (i % 7) * 0.4) : {})}
            />
          );
        })}
      </g>
    );
  }

  // 4 · GRIETA — el lienzo partido en diagonal
  if (forma === 4) {
    const corte = 120 + r() * 60;
    return (
      <>
        <path d={`M0 0 H320 V${corte} L0 ${corte + 96} Z`} fill={color} opacity="0.46" />
        <motion.path
          d={`M0 ${corte + 108} L320 ${corte + 14} V${corte + 30} L0 ${corte + 128} Z`}
          fill={claro}
          opacity="0.16"
          {...respira(5, 11, 0.4)}
        />
        <circle cx={64 + r() * 190} cy={corte + 190} r="34" fill={color} opacity="0.62" />
      </>
    );
  }

  // 5 · ESTRATOS — capas horizontales, como un corte de terreno
  if (forma === 5) {
    let y = 92;
    const capas = Array.from({ length: 7 }, () => {
      const alto = 16 + r() * 30;
      const banda = { y, alto, op: 0.14 + r() * 0.55 };
      y += alto + 4;
      return banda;
    });
    return (
      <g>
        {capas.map((c, i) => (
          <motion.rect
            key={i}
            x="0"
            y={c.y}
            width="320"
            height={c.alto}
            fill={color}
            opacity={c.op}
            {...respira(2 + (i % 3), 10 + i, i * 0.35)}
          />
        ))}
      </g>
    );
  }

  // 6 · ÓRBITA — un núcleo y elipses alrededor
  if (forma === 6) {
    const giro = [18, -24, 62];
    return (
      <>
        {giro.map((g, i) => (
          <motion.ellipse
            key={g}
            cx="160"
            cy="176"
            rx={62 + i * 42}
            ry={26 + i * 16}
            fill="none"
            stroke={color}
            strokeWidth="2.6"
            opacity={0.6 - i * 0.13}
            transform={`rotate(${g} 160 176)`}
            {...(i === 2 ? {} : respira(4, 12 + i * 3, i * 0.6))}
          />
        ))}
        <circle cx="160" cy="176" r="30" fill={color} opacity="0.9" />
        <circle cx="160" cy="176" r="30" fill={claro} opacity="0.12" />
      </>
    );
  }

  // 7 · ARCOS — bandas concéntricas apoyadas en la base
  const base = 320;
  return (
    <g>
      {[150, 118, 86, 54].map((radio, i) => (
        <motion.path
          key={radio}
          d={`M${160 - radio} ${base} A ${radio} ${radio} 0 0 1 ${160 + radio} ${base} Z`}
          fill={color}
          opacity={0.2 + i * 0.16}
          {...respira(3 + i * 2, 9 + i * 2, i * 0.5)}
        />
      ))}
      <rect x="0" y={base} width="320" height="100" fill="var(--carbon)" opacity="0.5" />
    </g>
  );
}
