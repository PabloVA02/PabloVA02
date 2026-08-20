/**
 * Retira el resumen viejo de un libro ya reescrito a mano.
 *
 *   node scripts/retira-viejo.mjs siete-habitos poder-habitos ...
 *
 * Borra su constante del fichero de categoría —con la cabecera de comentario
 * que la precede— y su línea de `CARGADORES` en `indice.ts`. Después hay que
 * regenerar `meta.ts`, que es lo que pinta la estantería.
 *
 * Se niega a retirar un libro que no tenga páginas escritas: quedaría en el
 * catálogo sin texto de ninguna clase y desaparecería de la biblioteca sin
 * que nadie se enterase hasta abrirla.
 */
import { readFileSync, writeFileSync, unlinkSync } from "node:fs";

const ids = process.argv.slice(2);
if (!ids.length) {
  console.error("uso: node scripts/retira-viejo.mjs <id> [<id>...]");
  process.exit(1);
}

const raiz = new URL("../src/libros/", import.meta.url);
const paginas = readFileSync(new URL("paginas.ts", raiz), "utf8");
const indiceUrl = new URL("indice.ts", raiz);
let indice = readFileSync(indiceUrl, "utf8");

for (const id of ids) {
  const clave = /^[A-Za-z_$][\w$]*$/.test(id) ? id : JSON.stringify(id);
  if (!new RegExp(`^\\s*${clave.replace(/[."\\-]/g, "\\$&")}: [A-Z_0-9]+,$`, "m").test(paginas)) {
    console.error(`${id}: NO tiene páginas escritas — no se retira nada.`);
    process.exitCode = 1;
    continue;
  }

  const linea = new RegExp(
    `^ *${clave.replace(/[."\\-]/g, "\\$&")}: \\(\\) => import\\("\\./([\\w-]+)"\\)\\.then\\(\\(m\\) => m\\.([A-Z_0-9]+)\\),\\n`,
    "m",
  );
  const m = indice.match(linea);
  if (!m) {
    console.log(`${id}: ya estaba retirado del índice.`);
    continue;
  }
  const [, fichero, constante] = m;
  indice = indice.replace(linea, "");

  /* ¿El fichero era suyo y de nadie más? Entonces se borra entero. */
  const suyo = new RegExp(`import\\("\\./${fichero}"\\)`).test(indice);
  const url = new URL(`${fichero}.ts`, raiz);
  if (!suyo) {
    unlinkSync(url);
    console.log(`${id}: borrado ${fichero}.ts entero y su línea del índice.`);
    continue;
  }

  let src = readFileSync(url, "utf8");
  const marca = new RegExp(`^export const ${constante}(?::[^=]*)? = \\{`, "m");
  const donde = src.search(marca);
  if (donde < 0) {
    console.log(`${id}: fuera del índice, pero ${constante} no está en ${fichero}.ts.`);
    continue;
  }
  /* Se cuenta llaves para saber dónde acaba, y se lleva por delante el
     comentario que la presenta si lo tiene. */
  let hondo = 0;
  let fin = src.length;
  for (let k = src.indexOf("{", donde); k < src.length; k++) {
    if (src[k] === "{") hondo++;
    else if (src[k] === "}" && --hondo === 0) {
      fin = src.indexOf("\n", src.indexOf(";", k)) + 1;
      break;
    }
  }
  let desde = donde;
  const anterior = src.lastIndexOf("/*", donde);
  if (anterior >= 0 && src.slice(anterior, donde).trim().endsWith("*/")) desde = anterior;
  while (desde > 0 && src[desde - 1] === "\n" && src[desde - 2] === "\n") desde--;
  src = src.slice(0, desde) + src.slice(fin);
  writeFileSync(url, src);
  console.log(`${id}: ${constante} borrado de ${fichero}.ts y del índice.`);
}

writeFileSync(indiceUrl, indice);
console.log("\nAhora: npx tsx scripts/generar-meta.mjs && npx tsx scripts/estado.mjs");
