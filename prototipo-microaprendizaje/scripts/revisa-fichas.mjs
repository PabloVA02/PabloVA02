/**
 * Comprueba que cada libro escrito a mano tenga su ficha entera.
 *
 *   node scripts/revisa-fichas.mjs
 *
 * Son tres piezas en tres ficheros —`subtitulos.ts`, `aprenderas.ts` y
 * `puntos.ts`— y olvidar una no da ningún error: el libro se pinta igual, solo
 * que con el título en lugar del subtítulo o con los rótulos de sus páginas en
 * lugar de los cinco «Aprenderás». Se ve al abrirlo y no antes.
 *
 * Las reglas de cada campo están en REDACCION.md; esto solo mira si están.
 */
import { readFileSync } from "node:fs";
const lee = (f) => readFileSync(`src/libros/${f}`, "utf8");
const pag = lee("paginas.ts");
const reg = pag.slice(pag.indexOf("export const PAGINAS: Record"));
const ids = [...reg.matchAll(/^  "?([\w-]+)"?: [A-Z_0-9]+,$/gm)].map((m) => m[1]);
const sub = lee("subtitulos.ts"), apr = lee("aprenderas.ts"), pun = lee("puntos.ts");
const tiene = (src, id) => new RegExp(`^  "?${id}"?:`, "m").test(src);
let mal = 0;
for (const id of ids) {
  const f = [tiene(sub, id) ? "" : "subtítulo", tiene(apr, id) ? "" : "de qué trata", tiene(pun, id) ? "" : "aprenderás"].filter(Boolean);
  if (f.length) { console.log(`${id.padEnd(24)} FALTA: ${f.join(", ")}`); mal++; }
}
console.log(mal ? `\n${mal} de ${ids.length} con la ficha incompleta` : `Los ${ids.length} tienen la ficha completa.`);
