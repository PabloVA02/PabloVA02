/* ==========================================================================
   Las portadas tipográficas.

   Los libros de autoayuda y de dinero no se venden con una fotografía bonita:
   se venden con el título gritado. Vas a una mesa de novedades y «PIENSA Y
   HAZTE RICO» ocupa la cubierta entera en una tipografía gorda sobre un color
   plano. Esa es la convención del género, y cuando a uno de estos libros se le
   pone encima un paisaje de Commons con el título en pequeño deja de parecer
   un libro y pasa a parecer una foto de archivo con una etiqueta.

   Las cubiertas de verdad no se pueden usar —son obra con derechos del
   diseñador y de la editorial—, pero la CONVENCIÓN no es de nadie: color
   plano, título enorme, autor pequeño abajo. Así que se dibujan aquí, y el
   resultado se lee como lo que es, un libro, sin copiar el de nadie.

   Solo entran los títulos que funcionan gritados. Un ensayo de historia con
   una buena pintura encima está mejor con la pintura, y esos siguen en
   `portadas.ts`.
   ========================================================================== */

export type PortadaTipo = {
  /** El fondo, plano. */
  fondo: string;
  /** La tinta del título. */
  tinta: string;
  /** Una palabra del título que va destacada, si hay una que manda. */
  destaca?: string;
  /** Un acento fino: la barra que cruza la cubierta. */
  acento?: string;
};

/* Los colores no son los de la app: son los de una mesa de novedades. Rojo,
   negro, mostaza, verde botella. Tienen que pegarse un grito entre ellos
   cuando salen los ocho juntos en la parrilla. */
export const PORTADAS_TIPO: Record<string, PortadaTipo> = {
  /* --- Dinero ----------------------------------------------------------- */
  "piensa-hazte-rico": { fondo: "#1b1b1b", tinta: "#f4e7c3", destaca: "RICO", acento: "#d4a02a" },
  "mente-millonaria": { fondo: "#0f5132", tinta: "#f6f1e4", destaca: "MILLONARIA", acento: "#e0b43a" },
  "padre-rico": { fondo: "#8a1c1c", tinta: "#fdf3e0", destaca: "RICO", acento: "#f0c14b" },
  "hombre-rico-babilonia": { fondo: "#123a5c", tinta: "#f7efdd", destaca: "RICO", acento: "#d9a441" },
  "millonario-al-lado": { fondo: "#2b2118", tinta: "#f3e9d6", destaca: "MILLONARIO", acento: "#c2903c" },
  "inversor-inteligente": { fondo: "#14304a", tinta: "#eef4f8", destaca: "INTELIGENTE", acento: "#8fb6d4" },
  "psicologia-dinero": { fondo: "#1f4038", tinta: "#f2efe3", destaca: "DINERO", acento: "#cfa14a" },
  "semana-4-horas": { fondo: "#c0392b", tinta: "#fff6e8", destaca: "4 HORAS", acento: "#ffd166" },

  /* --- Hacerse mejor ---------------------------------------------------- */
  "habitos-atomicos": { fondo: "#f2f0e6", tinta: "#1c1c1c", destaca: "ATÓMICOS", acento: "#e2582c" },
  "amigos-influir": { fondo: "#0d3b66", tinta: "#f8f4e6", destaca: "AMIGOS", acento: "#f0a202" },
  "siete-habitos": { fondo: "#37404a", tinta: "#f4f2ea", destaca: "EFECTIVA", acento: "#e6a532" },
  "sutil-arte": { fondo: "#e8531f", tinta: "#fffaf2", destaca: "IMPORTE", acento: "#1c1c1c" },
  "monje-ferrari": { fondo: "#6b1f2e", tinta: "#f8ece0", destaca: "FERRARI", acento: "#e0b34a" },
  "poder-ahora": { fondo: "#1d2b3a", tinta: "#f0ede2", destaca: "AHORA", acento: "#c9a227" },
  mindset: { fondo: "#7a1f4b", tinta: "#fbf1f4", destaca: "MINDSET", acento: "#f2c14e" },
  "deep-work": { fondo: "#14171c", tinta: "#eceef0", destaca: "CÉNTRATE", acento: "#4ea3c9" },
  "cosas-buenas": { fondo: "#d98324", tinta: "#2a1a06", destaca: "BUENAS", acento: "#2a1a06" },
  "sentirse-bien": { fondo: "#2e6b5e", tinta: "#f3f0e3", destaca: "BIEN", acento: "#f0c14b" },
  "inteligencia-emocional": { fondo: "#3b2f63", tinta: "#f2eefb", destaca: "EMOCIONAL", acento: "#e3b23c" },
  "cuatro-acuerdos": { fondo: "#8c4a1e", tinta: "#fbf0e2", destaca: "ACUERDOS", acento: "#e8c07d" },
  ikigai: { fondo: "#b3261e", tinta: "#fff3e6", destaca: "IKIGAI", acento: "#f5d6a0" },
  "busca-sentido": { fondo: "#22242a", tinta: "#eeeae0", destaca: "SENTIDO", acento: "#b8964f" },
  "poder-habitos": { fondo: "#1e4d5c", tinta: "#eff6f7", destaca: "HÁBITOS", acento: "#e8a33d" },
  influencia: { fondo: "#5b1a1a", tinta: "#f8eee2", destaca: "INFLUENCIA", acento: "#e2b04a" },
  flow: { fondo: "#0f4c5c", tinta: "#f1f6f7", destaca: "FLUIR", acento: "#f0a202" },
};
