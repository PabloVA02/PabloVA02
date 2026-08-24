/**
 * Recupera del historial de git la mejor versión que exista de cada cubierta.
 *
 *   node scripts/rescata-cubiertas.mjs [--escribe]
 *
 * POR QUÉ EXISTE
 *
 * Los dibujos de Pablo son la única pieza del proyecto que no se puede
 * rehacer, y hasta el 21 de agosto solo vivían dentro de `cubiertas.ts`, a la
 * medida que necesitaba la pantalla. Los PNG originales llegaban a una carpeta
 * de subidas que dura lo que dura la sesión.
 *
 * Pero `cubiertas.ts` está en git desde el primer día, y el ancho al que se
 * guardaban ha cambiado: empezó en 620, bajó a 480 el 20 de agosto y subió a
 * 520 el 24. Así que en el historial hay versiones MEJORES que las que están
 * hoy en el fichero, y nadie las estaba mirando.
 *
 * Esto recorre todos los commits que tocaron `cubiertas.ts`, saca de cada uno
 * el dato de cada cubierta y se queda con el más pesado, que a igual formato
 * es el de más resolución. Después compara con lo que hay archivado en
 * `cubiertas-originales/` y avisa de lo que se puede mejorar.
 *
 * Sin `--escribe` solo informa. Con `--escribe` guarda en
 * `cubiertas-originales/` lo que sea mejor que lo archivado, y deja
 * `cubiertas.ts` intacto: quien lo regenera es `mete-cubiertas.mjs`.
 */
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

/* El repositorio es la carpeta de arriba: `git log -- <ruta>` quiere la ruta
   contada desde ahí, no desde el proyecto. */
const PROYECTO = new URL("..", import.meta.url).pathname;
const RAIZ = execSync("git rev-parse --show-toplevel", { cwd: PROYECTO, encoding: "utf8" }).trim();
const RELATIVO = PROYECTO.replace(RAIZ + "/", "") + "src/libros/cubiertas.ts";
const ARCHIVO = join(PROYECTO, "cubiertas-originales");
const escribe = process.argv.includes("--escribe");

const git = (orden) =>
  execSync(orden, { cwd: RAIZ, encoding: "utf8", maxBuffer: 512 * 1024 * 1024 });

const commits = git(`git log --format=%H -- ${RELATIVO}`).trim().split("\n").filter(Boolean);
console.log(`${commits.length} commits han tocado cubiertas.ts\n`);

/* La mejor versión de cada cubierta, medida en peso del `data:`. A igual
   formato —siempre WebP— más peso es más resolución o menos compresión, y
   las dos cosas son mejores que la contraria. */
const mejor = new Map();

for (const commit of commits) {
  let src;
  try {
    src = git(`git show ${commit}:${RELATIVO}`);
  } catch {
    continue;
  }
  /* Las constantes y el registro van por separado: el registro dice qué
     constante usa cada id, y la constante lleva el dato. */
  const datos = new Map(
    [...src.matchAll(/^const ([A-Z_0-9]+) =\s*\n?\s*"(data:image\/[a-z]+;base64,[^"]+)";/gm)].map(
      (m) => [m[1], m[2]],
    ),
  );
  for (const m of src.matchAll(/^  "([\w-]+)": \{\n\s*local: ([A-Z_0-9]+),/gm)) {
    const [, id, constante] = m;
    const uri = datos.get(constante);
    if (!uri) continue;
    const previo = mejor.get(id);
    if (!previo || uri.length > previo.uri.length) mejor.set(id, { uri, commit });
  }
}

console.log(`${mejor.size} cubiertas distintas encontradas en el historial\n`);

if (!existsSync(ARCHIVO)) mkdirSync(ARCHIVO);

const mejoradas = [];
const nuevas = [];
const iguales = [];

for (const [id, { uri, commit }] of [...mejor].sort()) {
  const destino = join(ARCHIVO, `${id}.webp`);
  const binario = Buffer.from(uri.slice(uri.indexOf(",") + 1), "base64");
  const archivado = existsSync(destino) ? statSync(destino).size : 0;
  if (!archivado) nuevas.push([id, binario.length, commit.slice(0, 7)]);
  else if (binario.length > archivado * 1.05) mejoradas.push([id, archivado, binario.length]);
  else {
    iguales.push(id);
    continue;
  }
  if (escribe) writeFileSync(destino, binario);
}

const kb = (n) => `${Math.round(n / 1024)} kB`;

if (nuevas.length) {
  console.log(`RESCATADAS del historial y sin archivar — ${nuevas.length}:`);
  for (const [id, peso, commit] of nuevas) console.log(`   ${id.padEnd(26)} ${kb(peso).padStart(7)}  (${commit})`);
}
if (mejoradas.length) {
  console.log(`\nMEJORES que lo archivado — ${mejoradas.length}:`);
  for (const [id, antes, ahora] of mejoradas)
    console.log(`   ${id.padEnd(26)} ${kb(antes)} → ${kb(ahora)}`);
}
console.log(`\n${iguales.length} ya estaban archivadas igual o mejor.`);

if (!escribe) console.log("\nNo se ha escrito nada. Con --escribe se guardan en cubiertas-originales/.");
else console.log(`\nGuardadas ${nuevas.length + mejoradas.length} en cubiertas-originales/.`);
