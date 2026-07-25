/**
 * Estado del catálogo de libros.
 *
 *   npx tsx scripts/estado.mjs
 *
 * Dice tres cosas y solo tres, porque son las que se olvidan entre sesión y
 * sesión: cuántos libros hay escritos, cuáles se quedan cortos frente al
 * estándar de ~5 minutos por capítulo, y si el catálogo miente.
 */

import { RESUMENES, comprobar } from "../src/libros/indice.ts";
import { CATALOGO, progreso } from "../src/libros/catalogo.ts";
import { minutos, minutosParte } from "../src/libros/tipos.ts";

/** Objetivo por capítulo. Por debajo de 3 minutos está a medio escribir. */
const OBJETIVO = 5;
const MINIMO = 3;

const libros = Object.entries(RESUMENES);
const cortos = [];
const largos = [];

for (const [id, r] of libros) {
  const porParte = r.partes.map(minutosParte);
  const media = porParte.reduce((a, b) => a + b, 0) / porParte.length;
  const fila = { id, titulo: r.titulo, partes: r.partes.length, total: minutos(r), porParte };
  (media >= MINIMO ? largos : cortos).push(fila);
}

const marca = (m) => (m < MINIMO ? `${m}!` : m);
const linea = (f) =>
  `  ${f.titulo.slice(0, 34).padEnd(34)} ${String(f.partes).padStart(2)} cap  ${String(f.total).padStart(5)} min  [${f.porParte.map(marca).join(" ")}]`;

console.log(`\n${libros.length} resúmenes escritos de ${CATALOGO.length} fichas en el catálogo\n`);

console.log(`A escala (objetivo ~${OBJETIVO} min por capítulo) — ${largos.length}:`);
for (const f of largos.sort((a, b) => b.total - a.total)) console.log(linea(f));

console.log(`\nPendientes de ampliar — ${cortos.length}:`);
for (const f of cortos.sort((a, b) => a.total - b.total)) console.log(linea(f));

const { porCategoria } = progreso();
console.log("\nPor categoría:");
for (const [cat, { escritos, total }] of Object.entries(porCategoria).sort((a, b) => b[1].escritos - a[1].escritos)) {
  console.log(`  ${cat.padEnd(14)} ${String(escritos).padStart(2)} / ${total}`);
}

const { marcadosSinFichero, ficheroSinMarcar } = comprobar();
if (marcadosSinFichero.length || ficheroSinMarcar.length) {
  console.log("\n⚠  El catálogo miente:");
  if (marcadosSinFichero.length) console.log("   marcados «escrito» sin fichero:", marcadosSinFichero.join(", "));
  if (ficheroSinMarcar.length) console.log("   con fichero y sin marcar:", ficheroSinMarcar.join(", "));
  process.exitCode = 1;
} else {
  console.log("\nCatálogo e índice coinciden.");
}
