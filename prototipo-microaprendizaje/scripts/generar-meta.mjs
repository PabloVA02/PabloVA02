/**
 * Genera src/libros/meta.ts a partir de los resúmenes.
 *
 *   npx tsx scripts/generar-meta.mjs
 *
 * La estantería necesita saber de cada libro cuatro cosas —título, autor,
 * gancho y cuánto dura cada capítulo— y ninguna de ellas se puede calcular
 * sin contar las palabras de todas sus tarjetas. Si eso se hiciera al
 * arrancar, habría que descargar los doscientos resúmenes para pintar una
 * rejilla de portadas, que es exactamente lo que hacía antes.
 *
 * Así que se calcula UNA VEZ aquí, en el escritorio, y se deja escrito. El
 * fichero resultante ronda las setenta kilobytes frente a los seis megas del
 * texto completo, y es lo único que la app carga de entrada.
 *
 * Hay que volver a ejecutarlo cada vez que se escribe o se amplía un libro.
 * Si se olvida, `npx tsx scripts/estado.mjs` avisa: compara los minutos
 * guardados con los medidos y canta la diferencia.
 */

import { writeFileSync } from "node:fs";
import { cargarTodos } from "../src/libros/indice.ts";
import { CATALOGO } from "../src/libros/catalogo.ts";
import { minutos, minutosParte } from "../src/libros/tipos.ts";

const RESUMENES = await cargarTodos();

/* Se recorre el catálogo y no los resúmenes: el orden de la estantería es el
   del registro —agrupado por categoría— y no el orden arbitrario en que se
   fueron escribiendo los ficheros. */
const fichas = CATALOGO.flatMap((ficha) => {
  const r = RESUMENES[ficha.id];
  if (!r) return [];
  return [
    {
      id: r.id,
      titulo: r.titulo,
      autor: r.autor,
      ano: r.ano,
      gancho: r.gancho,
      porQue: r.porQue,
      minutos: minutos(r),
      capitulos: r.partes.map((p) => ({ titulo: p.titulo, minutos: minutosParte(p) })),
    },
  ];
});

const cuerpo = fichas
  .map(
    (f) => `  {
    id: ${JSON.stringify(f.id)},
    titulo: ${JSON.stringify(f.titulo)},
    autor: ${JSON.stringify(f.autor)},
    ano: ${f.ano},
    gancho: ${JSON.stringify(f.gancho)},
    porQue: ${JSON.stringify(f.porQue)},
    minutos: ${f.minutos},
    capitulos: [
${f.capitulos.map((c) => `      { titulo: ${JSON.stringify(c.titulo)}, minutos: ${c.minutos} },`).join("\n")}
    ],
  },`,
  )
  .join("\n");

const salida = `/* ==========================================================================
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
${cuerpo}
];

/** Índice por identificador, que es como lo pide la pantalla. */
export const META_POR_ID: Record<string, FichaMeta> = Object.fromEntries(
  META.map((f) => [f.id, f]),
);
`;

writeFileSync(new URL("../src/libros/meta.ts", import.meta.url), salida);
console.log(`meta.ts generado con ${fichas.length} fichas (${(salida.length / 1024).toFixed(1)} kB).`);
