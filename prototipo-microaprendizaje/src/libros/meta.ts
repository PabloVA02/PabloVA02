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
    id: "reproductibilidad",
    titulo: "La obra de arte en la época de su reproductibilidad técnica",
    autor: "Walter Benjamin",
    ano: 1936,
    gancho: "Un refugiado alemán sin trabajo escribió en un café de París por qué una foto de un cuadro no es el cuadro. Cuatro años después murió en la frontera española.",
    porQue: "Es el ensayo del que salió todo lo que se dice hoy sobre imágenes, copias y originales. Y casi nadie lo lee: se citan cuatro frases suyas, casi siempre al revés de lo que él quería decir.",
    minutos: 22.5,
    capitulos: [
      { titulo: "El Instituto en el exilio", minutos: 4.5 },
      { titulo: "El aura", minutos: 4.8 },
      { titulo: "La sala de montaje", minutos: 4.6 },
      { titulo: "El estadio de Núremberg", minutos: 4.2 },
      { titulo: "Portbou, 26 de septiembre de 1940", minutos: 4.3 },
    ],
  },
  {
    id: "heroe-mil-caras",
    titulo: "El héroe de las mil caras",
    autor: "Joseph Campbell",
    ano: 1949,
    gancho: "Un hombre sin doctorado, que se pasó cinco años sin trabajo leyendo nueve horas al día en una cabaña, escribió el esquema con el que se construyen hoy la mitad de las películas de Hollywood.",
    porQue: "Porque su estructura funciona sorprendentemente bien para escribir historias y es bastante mala como descripción de la mitología del mundo, y casi nadie distingue las dos cosas.",
    minutos: 22,
    capitulos: [
      { titulo: "Cinco años leyendo en una cabaña", minutos: 4.5 },
      { titulo: "El monomito", minutos: 4.2 },
      { titulo: "El rancho Skywalker, 1983", minutos: 4.5 },
      { titulo: "Los mitos que no encajan", minutos: 4.6 },
      { titulo: "La diosa y la tentadora", minutos: 4.1 },
    ],
  },
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
