import type { ReactElement } from "react";

/* ==========================================================================
   Los iconos de los géneros.

   De trazo y no macizos, como los de la referencia: en una pastilla pequeña
   sobre fondo oscuro, una silueta rellena se convierte en una mancha y deja
   de distinguirse de la de al lado. El trazo mantiene la forma legible a 22
   puntos, que es a lo que se ven.

   Todos comparten rejilla de 24, grosor 1.6 y remates redondos, y ninguno
   lleva color: heredan el del texto de su pastilla, así que la pastilla
   activa los tiñe de verde sin tocar el dibujo.

   Dos reglas que se notan a este tamaño:

   · NADA DE DETALLE INTERIOR. Un icono con tres líneas dentro se lee como un
     borrón. Cada uno tiene una silueta y como mucho un acento.
   · SILUETAS DISTINTAS ENTRE SÍ. Puestos en parrilla se leen por la forma
     antes que por el dibujo, así que no puede haber dos redondos seguidos.
   ========================================================================== */

type Props = { tamano?: number };

const marco = (tamano: number) => ({
  width: tamano,
  height: tamano,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

/** Desarrollo personal: una escalera que sube hacia una estrella. */
export function GlifoEscalera({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <path d="M3 20h4v-4h4v-4h4V8h4" />
      <path d="M19 3.2 19.9 5l1.8.3-1.3 1.3.3 1.8L19 7.6l-1.7.8.3-1.8-1.3-1.3L18.1 5z" />
    </svg>
  );
}

/** Dinero: una hucha con su ranura y una moneda entrando. */
export function GlifoHucha({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <path d="M3 13a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1a4 4 0 0 1-1.6 3.2V20h-2.6v-1.4H9.2V20H6.6v-2.8A4 4 0 0 1 5 14H3.6" />
      <path d="M10 7V5.4" />
      <circle cx="15.4" cy="12.4" r="0.9" />
    </svg>
  );
}

/** Hábitos: una diana, porque un hábito es puntería repetida. */
export function GlifoDiana({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1.1" />
    </svg>
  );
}

/** Mente: un perfil de cabeza con una espiral dentro. */
export function GlifoCabeza({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <path d="M15.8 20.5v-2.9h1.9a1.4 1.4 0 0 0 1.3-2l-1.4-3A6.4 6.4 0 1 0 6.6 16v4.5" />
      <path d="M13.4 9.6a2 2 0 1 0-2.6 2.7 2.2 2.2 0 0 1-1.2 3.4" />
    </svg>
  );
}

/** Relaciones: dos figuras, una un poco detrás de la otra. */
export function GlifoDos({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <circle cx="9.2" cy="8.2" r="3" />
      <path d="M3.6 19.4a5.6 5.6 0 0 1 11.2 0" />
      <path d="M16 6.2a3 3 0 0 1 .8 5.7" />
      <path d="M17.4 14.2a5.6 5.6 0 0 1 3 5.2" />
    </svg>
  );
}

/** Concentración: un reloj de arena. */
export function GlifoReloj({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <path d="M6.6 3.4h10.8M6.6 20.6h10.8" />
      <path d="M8 3.4v3.1c0 2 4 3.4 4 5.5s-4 3.5-4 5.5v3.1" />
      <path d="M16 3.4v3.1c0 2-4 3.4-4 5.5s4 3.5 4 5.5v3.1" />
    </svg>
  );
}

/** Liderazgo: una bandera clavada en lo alto. */
export function GlifoBandera({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <path d="M6 21V3.6" />
      <path d="M6 4.6h9.8l-1.9 3.3 1.9 3.3H6" />
      <path d="M4.2 21h6.2" />
    </svg>
  );
}

/** Sentido: una brújula con su aguja torcida. */
export function GlifoBrujula({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z" />
    </svg>
  );
}

/** Salud: una manzana con su hoja. */
export function GlifoManzana({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <path d="M12 8.2c-1-1-2.2-1.5-3.4-1.5C6.1 6.7 4.4 9 4.4 12.2c0 3.9 2.9 8.2 5.1 8.2.9 0 1.6-.5 2.5-.5s1.6.5 2.5.5c2.2 0 5.1-4.3 5.1-8.2 0-3.2-1.7-5.5-4.2-5.5-1.2 0-2.4.5-3.4 1.5z" />
      <path d="M12 8.2V5.6a2.4 2.4 0 0 1 2.4-2.4" />
    </svg>
  );
}

/** Historia: una columna clásica. */
export function GlifoColumna({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <path d="M3.6 20.4h16.8" />
      <path d="M5.4 7.6h13.2" />
      <path d="M12 2.6 4.4 6.2h15.2z" />
      <path d="M8 8.4v11M12 8.4v11M16 8.4v11" />
    </svg>
  );
}

/** Ciencia: un átomo, dos órbitas cruzadas. */
export function GlifoAtomo({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <circle cx="12" cy="12" r="1.6" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
    </svg>
  );
}

/** Filosofía: una cabeza con un interrogante donde va la idea. */
export function GlifoPensar({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <path d="M15.8 20.5v-2.9h1.9a1.4 1.4 0 0 0 1.3-2l-1.4-3A6.4 6.4 0 1 0 6.6 16v4.5" />
      <path d="M9.6 8.6a1.9 1.9 0 1 1 2.6 1.8v1.4" />
      <path d="M12.2 14.1v.1" />
    </svg>
  );
}

/** Novela: un libro abierto. */
export function GlifoLibro({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <path d="M12 6.6C10.4 5.3 8.4 4.6 6 4.6H3.4v13H6c2.4 0 4.4.7 6 2 1.6-1.3 3.6-2 6-2h2.6v-13H18c-2.4 0-4.4.7-6 2z" />
      <path d="M12 6.6v14" />
    </svg>
  );
}

/** Arte: una paleta con su hueco para el pulgar. */
export function GlifoPaleta({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <path d="M12 3.4a8.6 8.6 0 0 0 0 17.2c1.1 0 1.9-.9 1.9-1.9 0-.5-.2-.9-.5-1.3-.3-.3-.5-.8-.5-1.2 0-1 .9-1.9 1.9-1.9h2.3a3.5 3.5 0 0 0 3.5-3.5c0-4.1-3.9-7.4-8.6-7.4z" />
      <circle cx="8.4" cy="9" r="1" />
      <circle cx="13.4" cy="7.4" r="1" />
      <circle cx="7.2" cy="14" r="1" />
    </svg>
  );
}

/** Deportes: una copa. Silueta que no repite ninguna otra: es la única con
    asas y con pie, así que en la parrilla se lee antes de mirarla. */
export function GlifoCopa({ tamano = 22 }: Props) {
  return (
    <svg {...marco(tamano)}>
      <path d="M7.6 4.6h8.8v3.4a4.4 4.4 0 0 1-8.8 0z" />
      <path d="M7.6 5.6H5.4A2.6 2.6 0 0 0 8 9.8" />
      <path d="M16.4 5.6h2.2A2.6 2.6 0 0 1 16 9.8" />
      <path d="M12 12.4v4.2" />
      <path d="M10.2 16.6h3.6l1 3.4H9.2z" />
    </svg>
  );
}

export const GLIFOS_GENERO: Record<string, (p: Props) => ReactElement> = {
  escalera: GlifoEscalera,
  hucha: GlifoHucha,
  diana: GlifoDiana,
  cabeza: GlifoCabeza,
  dos: GlifoDos,
  reloj: GlifoReloj,
  bandera: GlifoBandera,
  brujula: GlifoBrujula,
  manzana: GlifoManzana,
  columna: GlifoColumna,
  atomo: GlifoAtomo,
  pensar: GlifoPensar,
  libro: GlifoLibro,
  paleta: GlifoPaleta,
  copa: GlifoCopa,
};
