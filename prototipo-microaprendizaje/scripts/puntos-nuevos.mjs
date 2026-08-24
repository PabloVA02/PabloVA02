/**
 * Reescribe en bloque los «Aprenderás» de muchos libros a la vez.
 *
 *   node scripts/puntos-nuevos.mjs <tanda.json>
 *
 *   { "sapiens": ["...", "...", "...", "...", "..."],
 *     "1984":    ["...", "...", "...", "...", "..."] }
 *
 * POR QUÉ EXISTE
 *
 * `ficha-libro.mjs` escribe la ficha entera de UN libro, y para corregir los
 * cinco puntos de doscientos veintitrés harían falta doscientas veintitrés
 * llamadas con el subtítulo y el «de qué trata» repetidos al lado, que es la
 * mejor manera de estropear por descuido dos campos que estaban bien.
 *
 * Esto toca `puntos.ts` y nada más. Comprueba lo mismo que
 * `revisa-puntos.mjs` antes de escribir, y si algo falla no escribe nada:
 * una tanda entra completa o no entra, para no dejar el fichero a medias.
 *
 * Un id que no esté ya en `puntos.ts` se rechaza. Esto CORRIGE lo que hay; un
 * libro nuevo se da de alta con `ficha-libro.mjs`, que además obliga a
 * escribirle el subtítulo y el «de qué trata».
 */
import { readFileSync, writeFileSync } from "node:fs";

const TOPE = 14;
const ruta = process.argv[2];
if (!ruta) {
  console.error("uso: node scripts/puntos-nuevos.mjs <tanda.json>");
  process.exit(1);
}

const tanda = JSON.parse(readFileSync(ruta, "utf8"));
const url = new URL("../src/libros/puntos.ts", import.meta.url);
let src = readFileSync(url, "utf8");

const avisos = [];
for (const [id, puntos] of Object.entries(tanda)) {
  if (!Array.isArray(puntos) || puntos.length !== 5)
    avisos.push(`${id}: hay ${puntos?.length} puntos y tienen que ser 5`);
  for (const p of puntos ?? []) {
    const n = p.trim().split(/\s+/).length;
    if (n > TOPE) avisos.push(`${id}: «${p}» tiene ${n} palabras, y el tope son ${TOPE}`);
    if (/^[A-ZÁÉÍÓÚÑ]/.test(p)) avisos.push(`${id}: «${p}» empieza en mayúscula`);
    if (/\b(1[0-9]{3}|20[0-2][0-9])\b/.test(p)) avisos.push(`${id}: «${p}» lleva un año`);
  }
}
if (avisos.length) {
  console.error("no se ha escrito nada:\n  " + avisos.join("\n  "));
  process.exit(1);
}

/* La clave se escribe con comillas o sin ellas según cómo estuviera, para no
   ensuciar el diff de un fichero de doscientas entradas. */
const hechos = [];
const perdidos = [];
for (const [id, puntos] of Object.entries(tanda)) {
  const patron = new RegExp(`^( {2}"?${id}"?: \\[)[\\s\\S]*?^( {2}\\],)$`, "m");
  if (!patron.test(src)) {
    perdidos.push(id);
    continue;
  }
  const cuerpo = puntos.map((p) => `    ${JSON.stringify(p)},`).join("\n");
  src = src.replace(patron, (_m, abre, cierra) => `${abre}\n${cuerpo}\n${cierra}`);
  hechos.push(id);
}

if (perdidos.length) {
  console.error(
    `no se ha escrito nada: estos ids no están en puntos.ts:\n  ${perdidos.join("\n  ")}`,
  );
  process.exit(1);
}

writeFileSync(url, src);
console.log(`${hechos.length} libros con los «Aprenderás» reescritos`);
