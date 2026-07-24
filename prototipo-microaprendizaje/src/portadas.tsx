import { motion } from "framer-motion";

/* ==========================================================================
   Portadas de los shorts.

   Cada short abre con una fotografía real de Wikimedia, pedida por red. Pero
   hay dos sitios donde esa foto no puede llegar: sin conexión, y dentro de un
   visor con la política de seguridad cerrada, que bloquea cualquier host
   externo. Antes ahí salía una ilustración genérica de la biblioteca —una
   persona leyendo— y no decía nada del tema.

   Estas son las portadas de repuesto: una por historia, hecha para ESA
   historia. No pretenden pasar por fotografías; son carteles. Formas grandes,
   pocas piezas, la paleta del proyecto y una sola cosa moviéndose en cada
   una, que es lo que las separa de un icono grande.
   ========================================================================== */

type P = { reducido: boolean };

const VB = "0 0 320 320";

/** Bucle de reposo: amplitudes cortas y duraciones que no coinciden. */
const vaiven = (r: boolean, y: number, dur: number, retraso = 0) =>
  r ? {} : {
    animate: { y: [0, -y, 0] },
    transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const, delay: retraso },
  };

/* --- Chernóbil: el bloque del reactor y la columna que no se apaga --- */
export function PortadaChernobil({ reducido }: P) {
  return (
    <svg viewBox={VB} aria-hidden>
      <circle cx="160" cy="150" r="112" fill="var(--sage)" opacity="0.13" />
      {/* La columna sube y se ensancha: es lo único vivo del cartel */}
      <motion.g
        animate={reducido ? {} : { y: [0, -9, 0], opacity: [0.55, 0.78, 0.55] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M132 148 C124 104 140 66 152 34 C168 68 186 104 178 148 Z" fill="var(--sage)" opacity="0.5" />
        <path d="M143 148 C138 112 149 84 156 60 C166 86 176 114 170 148 Z" fill="var(--ochre)" opacity="0.62" />
      </motion.g>
      <rect x="66" y="148" width="188" height="86" rx="6" fill="var(--slate)" />
      <rect x="66" y="148" width="188" height="14" rx="4" fill="var(--paper)" opacity="0.2" />
      <rect x="126" y="120" width="62" height="30" rx="4" fill="var(--slate-deep, var(--slate))" />
      {/* La chimenea a rayas, que es lo que hace reconocible la central */}
      <rect x="206" y="72" width="13" height="78" rx="3" fill="var(--paper)" opacity="0.82" />
      {[80, 96, 112, 128].map((y) => (
        <rect key={y} x="206" y={y} width="13" height="7" rx="2" fill="var(--clay)" />
      ))}
      <rect x="40" y="232" width="240" height="10" rx="5" fill="var(--paper)" opacity="0.24" />
    </svg>
  );
}

/* --- Hiroshima: la nube, en abstracto --- */
export function PortadaHiroshima({ reducido }: P) {
  return (
    <svg viewBox={VB} aria-hidden>
      <circle cx="160" cy="152" r="116" fill="var(--clay)" opacity="0.12" />
      <motion.g
        animate={reducido ? {} : { scale: [1, 1.035, 1] }}
        transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "160px", originY: "230px" }}
      >
        <ellipse cx="160" cy="86" rx="78" ry="46" fill="var(--clay)" opacity="0.5" />
        <ellipse cx="160" cy="80" rx="56" ry="32" fill="var(--ochre)" opacity="0.6" />
        <path d="M136 118 C130 160 130 196 140 232 H180 C190 196 190 160 184 118 Z" fill="var(--clay)" opacity="0.46" />
        <path d="M147 122 C143 162 143 198 150 232 H170 C177 198 177 162 173 122 Z" fill="var(--ochre)" opacity="0.5" />
      </motion.g>
      <rect x="40" y="232" width="240" height="10" rx="5" fill="var(--paper)" opacity="0.26" />
      {/* La ciudad, diminuta, para dar la escala */}
      {[62, 82, 100, 214, 236, 254].map((x, i) => (
        <rect key={x} x={x} y={232 - (i % 3) * 6 - 12} width="13" height={(i % 3) * 6 + 12} rx="2" fill="var(--paper)" opacity="0.34" />
      ))}
    </svg>
  );
}

/* --- Pompeya: el cono y la columna en forma de pino --- */
export function PortadaPompeya({ reducido }: P) {
  return (
    <svg viewBox={VB} aria-hidden>
      <circle cx="160" cy="150" r="112" fill="var(--ochre)" opacity="0.14" />
      <motion.g {...vaiven(reducido, 7, 6.8)}>
        <ellipse cx="160" cy="52" rx="70" ry="30" fill="var(--ochre)" opacity="0.42" />
        <ellipse cx="160" cy="48" rx="46" ry="20" fill="var(--clay)" opacity="0.5" />
        <path d="M150 74 L146 138 H174 L170 74 Z" fill="var(--ochre)" opacity="0.5" />
      </motion.g>
      <path d="M52 236 L134 118 H186 L268 236 Z" fill="var(--clay)" opacity="0.75" />
      <path d="M134 118 H186 L206 148 H114 Z" fill="var(--ink)" opacity="0.3" />
      {/* Las columnas del foro al pie del volcán */}
      {[70, 90, 110].map((x) => (
        <rect key={x} x={x} y="196" width="10" height="40" rx="2" fill="var(--paper)" opacity="0.6" />
      ))}
      <rect x="62" y="188" width="60" height="8" rx="3" fill="var(--paper)" opacity="0.7" />
      <rect x="40" y="236" width="240" height="10" rx="5" fill="var(--paper)" opacity="0.26" />
    </svg>
  );
}

/* --- Titanic: el casco escorado y la mole de hielo --- */
export function PortadaTitanic({ reducido }: P) {
  return (
    <svg viewBox={VB} aria-hidden>
      <circle cx="160" cy="150" r="112" fill="var(--slate)" opacity="0.16" />
      {/* El iceberg: la parte de arriba es lo de menos */}
      <path d="M214 108 L254 168 H174 Z" fill="var(--paper)" opacity="0.82" />
      <path d="M214 108 L234 168 H174 Z" fill="var(--paper)" opacity="0.5" />
      <motion.g {...vaiven(reducido, 4, 5.1)} style={{ originX: "120px", originY: "180px" }}>
        <g transform="rotate(-9 120 180)">
          <path d="M46 176 H196 L176 208 H62 Z" fill="var(--ink)" opacity="0.86" />
          <rect x="70" y="152" width="104" height="24" rx="4" fill="var(--paper)" opacity="0.86" />
          {[86, 110, 134, 158].map((x) => (
            <rect key={x} x={x} y="124" width="13" height="30" rx="3" fill="var(--clay)" />
          ))}
        </g>
      </motion.g>
      {/* Dos rayas de agua a ritmos distintos: el mar no va a compás */}
      <motion.path
        d="M28 214 q26 -8 52 0 t52 0 t52 0 t52 0 t52 0"
        fill="none" stroke="var(--slate)" strokeWidth="7" strokeLinecap="round" opacity="0.75"
        animate={reducido ? {} : { x: [0, -26, 0] }}
        transition={{ duration: 7.1, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M28 232 q26 -8 52 0 t52 0 t52 0 t52 0 t52 0"
        fill="none" stroke="var(--slate)" strokeWidth="7" strokeLinecap="round" opacity="0.45"
        animate={reducido ? {} : { x: [0, 22, 0] }}
        transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* --- Bomba del Zar: la bola de fuego y el avión huyendo --- */
export function PortadaZar({ reducido }: P) {
  return (
    <svg viewBox={VB} aria-hidden>
      <motion.circle
        cx="160" cy="146" r="104" fill="var(--clay)" opacity="0.16"
        animate={reducido ? {} : { r: [104, 112, 104], opacity: [0.16, 0.09, 0.16] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeOut" }}
      />
      <circle cx="160" cy="146" r="76" fill="var(--clay)" opacity="0.4" />
      <motion.circle
        cx="160" cy="146" r="52" fill="var(--ochre)"
        animate={reducido ? {} : { scale: [1, 1.06, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "160px", originY: "146px" }}
      />
      <circle cx="160" cy="146" r="28" fill="var(--paper)" opacity="0.9" />
      {/* El avión: la escala de la cosa está en lo pequeño que es */}
      <motion.g
        animate={reducido ? {} : { x: [0, -16, 0], y: [0, 5, 0] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M262 74 L286 68 L280 80 Z" fill="var(--paper)" opacity="0.85" />
        <rect x="248" y="72" width="22" height="4" rx="2" fill="var(--paper)" opacity="0.85" />
      </motion.g>
      <rect x="40" y="242" width="240" height="10" rx="5" fill="var(--paper)" opacity="0.24" />
    </svg>
  );
}

/* --- Guerra del Emú: el pájaro, la valla y el trigo --- */
export function PortadaEmus({ reducido }: P) {
  return (
    <svg viewBox={VB} aria-hidden>
      <circle cx="160" cy="150" r="112" fill="var(--ochre)" opacity="0.15" />
      {/* La valla, que es lo que acabó funcionando */}
      {[52, 84, 116, 216, 248, 280].map((x) => (
        <rect key={x} x={x} y="150" width="7" height="86" rx="3" fill="var(--paper)" opacity="0.3" />
      ))}
      <rect x="44" y="172" width="244" height="5" rx="2.5" fill="var(--paper)" opacity="0.3" />
      <rect x="44" y="200" width="244" height="5" rx="2.5" fill="var(--paper)" opacity="0.3" />

      <motion.g {...vaiven(reducido, 6, 2.9)}>
        {/* Cuerpo, cuello y cabeza: tres piezas y ya se lee «emú» */}
        <ellipse cx="150" cy="196" rx="52" ry="40" fill="var(--clay)" />
        <path d="M176 168 C186 132 190 108 186 88" stroke="var(--clay)" strokeWidth="15" strokeLinecap="round" fill="none" />
        <circle cx="187" cy="80" r="14" fill="var(--clay)" />
        <path d="M198 78 L214 82 L198 86 Z" fill="var(--ochre)" />
        <circle cx="192" cy="76" r="3.2" fill="var(--paper)" />
        <path d="M132 232 V252 M162 232 V252" stroke="var(--clay)" strokeWidth="7" strokeLinecap="round" />
      </motion.g>
      <rect x="40" y="250" width="240" height="10" rx="5" fill="var(--paper)" opacity="0.24" />
    </svg>
  );
}

/* --- La epidemia de baile: un corro que no para --- */
export function PortadaBaile({ reducido }: P) {
  const gente = [0, 1, 2, 3, 4, 5];
  return (
    <svg viewBox={VB} aria-hidden>
      <circle cx="160" cy="156" r="112" fill="var(--plum)" opacity="0.16" />
      <motion.g
        animate={reducido ? {} : { rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        style={{ originX: "160px", originY: "156px" }}
      >
        {gente.map((i) => {
          const a = (i / gente.length) * Math.PI * 2;
          const x = 160 + Math.cos(a) * 78;
          const y = 156 + Math.sin(a) * 78;
          const color = i % 2 ? "var(--plum)" : "var(--clay)";
          return (
            <motion.g
              key={i}
              animate={reducido ? {} : { y: [0, -9, 0] }}
              transition={{ duration: 1.05 + i * 0.11, repeat: Infinity, ease: "easeInOut" }}
            >
              <circle cx={x} cy={y - 20} r="11" fill={color} />
              <path d={`M${x} ${y - 8} v24`} stroke={color} strokeWidth="9" strokeLinecap="round" />
              <path d={`M${x - 14} ${y + 30} L${x} ${y + 14} L${x + 14} ${y + 30}`} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <path d={`M${x - 15} ${y - 2} L${x + 15} ${y - 6}`} stroke={color} strokeWidth="7.5" strokeLinecap="round" />
            </motion.g>
          );
        })}
      </motion.g>
      <circle cx="160" cy="156" r="17" fill="var(--ochre)" opacity="0.65" />
    </svg>
  );
}

/* --- La Tierra parada: el eje y los arcos de giro --- */
export function PortadaGirar({ reducido }: P) {
  return (
    <svg viewBox={VB} aria-hidden>
      <circle cx="160" cy="152" r="112" fill="var(--slate)" opacity="0.15" />
      <motion.g
        animate={reducido ? {} : { rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
        style={{ originX: "160px", originY: "152px" }}
      >
        <circle cx="160" cy="152" r="76" fill="var(--slate)" />
        <path d="M110 118 c22 -10 40 4 56 -4 c14 -7 30 2 42 -6" stroke="var(--sage)" strokeWidth="15" strokeLinecap="round" fill="none" opacity="0.85" />
        <path d="M100 160 c26 8 42 -8 62 0 c16 7 28 -4 46 2" stroke="var(--sage)" strokeWidth="17" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M118 196 c20 -8 38 6 54 -2" stroke="var(--sage)" strokeWidth="13" strokeLinecap="round" fill="none" opacity="0.55" />
      </motion.g>
      {/* El eje inclinado, quieto: lo que se pararía */}
      <path d="M124 246 L196 58" stroke="var(--ochre)" strokeWidth="4" strokeLinecap="round" opacity="0.8" strokeDasharray="10 9" />
      <motion.path
        d="M236 96 a86 86 0 0 1 0 112"
        fill="none" stroke="var(--ochre)" strokeWidth="5" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={reducido ? { pathLength: 1 } : { pathLength: [0, 1, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* --- Agujero negro: el anillo y la sombra --- */
export function PortadaAgujero({ reducido }: P) {
  return (
    <svg viewBox={VB} aria-hidden>
      <defs>
        <radialGradient id="pa-halo">
          <stop offset="52%" stopColor="var(--ochre)" stopOpacity="0" />
          <stop offset="76%" stopColor="var(--ochre)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--clay)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <motion.circle
        cx="160" cy="152" r="112" fill="url(#pa-halo)"
        animate={reducido ? {} : { scale: [1, 1.045, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "160px", originY: "152px" }}
      />
      {/* El disco visto de canto, curvado por encima: la forma de M87* */}
      <motion.g
        animate={reducido ? {} : { rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        style={{ originX: "160px", originY: "152px" }}
      >
        <ellipse cx="160" cy="152" rx="104" ry="30" fill="none" stroke="var(--ochre)" strokeWidth="11" opacity="0.34" />
      </motion.g>
      <circle cx="160" cy="152" r="62" fill="none" stroke="var(--ochre)" strokeWidth="15" opacity="0.9" />
      <circle cx="160" cy="152" r="55" fill="var(--carbon)" />
      <circle cx="160" cy="152" r="55" fill="var(--night)" opacity="0.55" />
    </svg>
  );
}

/* --- Sin nosotros: la noria comida por el bosque --- */
export function PortadaSinNosotros({ reducido }: P) {
  const radios = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <svg viewBox={VB} aria-hidden>
      <circle cx="160" cy="144" r="112" fill="var(--sage)" opacity="0.14" />
      <motion.g
        animate={reducido ? {} : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ originX: "160px", originY: "132px" }}
      >
        <circle cx="160" cy="132" r="76" fill="none" stroke="var(--ochre)" strokeWidth="7" opacity="0.85" />
        <circle cx="160" cy="132" r="54" fill="none" stroke="var(--ochre)" strokeWidth="4" opacity="0.5" />
        {radios.map((i) => {
          const a = (i / radios.length) * Math.PI * 2;
          return (
            <g key={i}>
              <path
                d={`M160 132 L${160 + Math.cos(a) * 76} ${132 + Math.sin(a) * 76}`}
                stroke="var(--ochre)" strokeWidth="4" opacity="0.55"
              />
              <circle cx={160 + Math.cos(a) * 76} cy={132 + Math.sin(a) * 76} r="9" fill="var(--clay)" opacity="0.9" />
            </g>
          );
        })}
      </motion.g>
      <circle cx="160" cy="132" r="12" fill="var(--paper)" opacity="0.8" />
      <path d="M148 138 L134 250 H186 L172 138 Z" fill="var(--slate)" opacity="0.75" />
      {/* La vegetación que se lo come, meciéndose */}
      <motion.g
        animate={reducido ? {} : { rotate: [-2.2, 2.2, -2.2] }}
        transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "160px", originY: "252px" }}
      >
        {[46, 82, 118, 200, 238, 274].map((x, i) => (
          <path
            key={x}
            d={`M${x} 252 C${x - 16} ${222 - i * 5} ${x + 14} ${208 - i * 4} ${x + 2} ${176 - i * 6}`}
            fill="none" stroke="var(--sage)" strokeWidth={11 - i * 0.6} strokeLinecap="round" opacity="0.8"
          />
        ))}
      </motion.g>
      <rect x="30" y="248" width="260" height="12" rx="6" fill="var(--sage)" opacity="0.55" />
    </svg>
  );
}

export const PORTADAS: Record<string, (p: P) => React.ReactElement> = {
  chernobil: PortadaChernobil,
  yamaguchi: PortadaHiroshima,
  pompeya: PortadaPompeya,
  titanic: PortadaTitanic,
  zar: PortadaZar,
  emus: PortadaEmus,
  baile: PortadaBaile,
  girar: PortadaGirar,
  agujero: PortadaAgujero,
  "sin-nosotros": PortadaSinNosotros,
};
