/* ==========================================================================
   Iconografía y portada. Todo dibujado a mano en SVG: ninguna librería de
   iconos, ninguna imagen externa. Trazo de 1.8 y esquinas redondeadas para
   que peguen con las formas planas de la escena.
   ========================================================================== */

const trazo = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GlyphBack() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M11 4 L6 9 L11 14" {...trazo} />
    </svg>
  );
}

export function GlyphClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M4.5 4.5 L13.5 13.5 M13.5 4.5 L4.5 13.5" {...trazo} />
    </svg>
  );
}

export function GlyphFlag() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path d="M4.5 15 V3 M4.5 3.6 H12.6 L10.9 6.9 L12.6 10.2 H4.5" {...trazo} />
    </svg>
  );
}

export function GlyphShare() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path d="M8.5 11.4 V2.6 M5.3 5.6 L8.5 2.4 L11.7 5.6 M3.4 9.6 V13.4 A1.2 1.2 0 0 0 4.6 14.6 H12.4 A1.2 1.2 0 0 0 13.6 13.4 V9.6" {...trazo} />
    </svg>
  );
}

export function GlyphHeart({ on }: { on: boolean }) {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path
        d="M8.5 14.2 L3.6 9.3 A3.1 3.1 0 0 1 8.5 5.4 A3.1 3.1 0 0 1 13.4 9.3 Z"
        {...trazo}
        fill={on ? "currentColor" : "none"}
      />
    </svg>
  );
}

export function GlyphTick() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
      <path
        d="M2.8 5.7 L4.6 7.5 L8.2 3.6"
        fill="none"
        stroke="var(--paper)"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlyphAsk() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" aria-hidden>
      <path d="M6.6 9.5 H12.4 M10 7.1 L12.4 9.5 L10 11.9" {...trazo} stroke="var(--paper)" strokeWidth="2" />
    </svg>
  );
}

/**
 * Portada del libro: la misma idea de la lección resumida en una marca
 * geométrica — una pieza entera arriba, la caída, y lo que queda abajo.
 */
export function CoverArt() {
  return (
    <svg viewBox="0 0 156 208" width="156" height="208" aria-hidden>
      <rect width="156" height="208" fill="var(--ink)" />
      <circle cx="112" cy="46" r="44" fill="var(--plum)" opacity="0.5" />
      {/* Columnas: el pórtico */}
      {[26, 48, 70, 92, 114].map((x) => (
        <rect key={x} x={x} y="86" width="11" height="62" rx="2" fill="var(--paper)" opacity="0.85" />
      ))}
      <path d="M 16 86 L 78 54 L 140 86 Z" fill="var(--ochre)" />
      <rect x="18" y="148" width="120" height="7" rx="3" fill="var(--paper)" opacity="0.85" />
      {/* Rollo */}
      <g transform="translate(112 168)">
        <rect x="-26" y="-8" width="52" height="16" rx="8" fill="var(--clay)" />
        <circle cx="-26" cy="0" r="8" fill="var(--skin)" />
        <circle cx="26" cy="0" r="8" fill="var(--skin)" />
      </g>
      <rect x="18" y="166" width="58" height="5" rx="2.5" fill="var(--paper)" opacity="0.8" />
      <rect x="18" y="177" width="34" height="5" rx="2.5" fill="var(--paper)" opacity="0.4" />
    </svg>
  );
}

export function GlyphGuardar() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path d="M4.6 3.2 H12.4 V14.2 L8.5 11 L4.6 14.2 Z" {...trazo} />
    </svg>
  );
}

export function GlyphDescargar() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path d="M8.5 3 V11 M5.4 8 L8.5 11.2 L11.6 8 M3.6 13.6 H13.4" {...trazo} />
    </svg>
  );
}

export function GlyphAdelante() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M7 4 L12 9 L7 14" {...trazo} />
    </svg>
  );
}

export function GlyphCandado() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" aria-hidden>
      <rect x="4.2" y="8.4" width="10.6" height="7.6" rx="2" {...trazo} strokeWidth="1.9" />
      <path d="M6.6 8.4 V6.4 A2.9 2.9 0 0 1 12.4 6.4 V8.4" {...trazo} strokeWidth="1.9" />
    </svg>
  );
}
