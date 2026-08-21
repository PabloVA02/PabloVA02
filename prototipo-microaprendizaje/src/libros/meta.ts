/* ==========================================================================
   GENERADO por scripts/generar-meta.mjs — no editar a mano.

   Lo mínimo que hace falta para pintar la biblioteca sin descargar el texto
   de los libros: título, autor, año, las dos frases de la ficha y los minutos
   de cada capítulo, que son los que se ven parada por parada en el mapa del
   camino. El texto entero se pide aparte, al abrir un libro.

   Para regenerarlo:  npx tsx scripts/generar-meta.mjs
   ========================================================================== */

export type CapituloMeta = { titulo: string; minutos: number };

export type FichaMeta = {
  id: string;
  titulo: string;
  autor: string;
  ano: number;
  gancho: string;
  porQue: string;
  minutos: number;
  capitulos: CapituloMeta[];
};

export const META: FichaMeta[] = [
  {
    id: "el-elemento",
    titulo: "El elemento",
    autor: "Ken Robinson",
    ano: 2009,
    gancho: "La charla más vista de la historia de TED se apoya en una estadística que la NASA nunca hizo. Y el argumento, curiosamente, aguanta igual sin ella.",
    porQue: "Porque es el libro que convenció a media docena de generaciones de que el colegio les había escondido algo. Vale la pena separar lo que Robinson demostró de lo que solo contó bien, porque las dos cosas están mezcladas y la segunda es la que más se repite.",
    minutos: 25,
    capitulos: [
      { titulo: "Una niña que no paraba quieta", minutos: 5 },
      { titulo: "Diecinueve minutos en Monterrey", minutos: 5 },
      { titulo: "El test que la NASA nunca hizo", minutos: 5.1 },
      { titulo: "La escuela que dicen que es una fábrica", minutos: 4.9 },
      { titulo: "Lo que aguanta cuando le quitas las cifras", minutos: 5 },
    ],
  },
];

/** Índice por identificador, que es como lo pide la pantalla. */
export const META_POR_ID: Record<string, FichaMeta> = Object.fromEntries(
  META.map((f) => [f.id, f]),
);
