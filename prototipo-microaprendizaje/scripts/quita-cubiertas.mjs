/**
 * Quita cubiertas de `cubiertas.ts`, para volver a hacerlas.
 *
 *   node scripts/quita-cubiertas.mjs <fichero-con-ids>
 *
 * NO SE EJECUTA POR INICIATIVA PROPIA. NUNCA.
 *
 * El 25 de agosto lo usé para retirar 81 cubiertas de Pablo creyendo que
 * llevaban solo título y autor. Estaban las 81 ilustradas —el ferrocarril de
 * Ana Karenina, el perfil de Sócrates, los abanicos de Bernarda Alba— y eran
 * buenas. Las devolví el mismo día. El error no fue del script: fue mirar 216
 * dibujos por encima y decidir solo que a algunos les faltaba una frase.
 *
 * De ahí la regla: una cubierta se retira cuando Pablo dice ESA, por su id.
 * Los dibujos son lo único de este proyecto que no se puede rehacer, y ante la
 * duda se dejan puestos y se le pregunta.
 *
 * Y antes de tocar nada, MIRARLAS: una hoja de contacto con las candidatas y
 * su id debajo, y leerla de verdad. Una lista de ids no enseña un dibujo.
 *
 * Quitarlas a mano de un fichero con cientos de constantes en base64 es la
 * manera de romper la de al lado, así que esto lo hace por su cuenta: borra
 * la constante, borra la entrada del registro y mueve el original archivado
 * a `cubiertas-originales/reemplazadas/`.
 *
 * NO BORRA NINGÚN DIBUJO. El original se mueve, no se destruye, y además está
 * en el historial de git desde el día en que se archivó. Los dibujos de Pablo
 * son lo único de este proyecto que no se puede rehacer.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync } from "node:fs";
import { join } from "node:path";

const lista = process.argv[2];
if (!lista) {
  console.error("uso: node scripts/quita-cubiertas.mjs <fichero-con-ids>");
  process.exit(1);
}
const ids = readFileSync(lista, "utf8").split(/\s+/).filter(Boolean);

const url = new URL("../src/libros/cubiertas.ts", import.meta.url);
let src = readFileSync(url, "utf8");
const ARCHIVO = new URL("../cubiertas-originales/", import.meta.url).pathname;
const APARTE = join(ARCHIVO, "reemplazadas");
if (!existsSync(APARTE)) mkdirSync(APARTE);

let quitadas = 0;
const noEstaban = [];
for (const id of ids) {
  /* La entrada del registro dice qué constante usa este id. */
  const entrada = new RegExp(`^  "${id}": \\{\\n(?:.*\\n)*?  \\},\\n`, "m");
  const m = src.match(entrada);
  if (!m) { noEstaban.push(id); continue; }
  const constante = m[0].match(/local: ([A-Z_0-9]+),/)?.[1];
  src = src.replace(entrada, "");
  if (constante) {
    /* La constante y su dato en base64, que ocupa una línea larguísima. */
    const decl = new RegExp(`^const ${constante} =\\s*\\n?\\s*"data:image\\/[a-z]+;base64,[^"]+";\\n`, "m");
    if (decl.test(src)) src = src.replace(decl, "");
    else console.error(`   ojo: no encuentro la constante ${constante} de ${id}`);
  }
  const origen = join(ARCHIVO, `${id}.webp`);
  if (existsSync(origen)) renameSync(origen, join(APARTE, `${id}.webp`));
  quitadas++;
}

writeFileSync(url, src);
console.log(`${quitadas} cubiertas quitadas · originales movidos a cubiertas-originales/reemplazadas/`);
if (noEstaban.length) console.log(`no estaban: ${noEstaban.join(", ")}`);
