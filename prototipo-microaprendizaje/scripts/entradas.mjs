/* Cambia la `entrada` de varios shorts de una vez.

   Las entradas cortas dejan un hueco blanco al final de la portada: el diseño
   cuenta con unas cien palabras y con sesenta se queda a medias. Corregirlas a
   mano, una por una, era abrir y cerrar el mismo fichero veinte veces; esto
   coge un JSON de `id` → texto nuevo y las sustituye donde estén.

   Uso:
     node scripts/entradas.mjs cambios.json

   El JSON es { "id-del-short": "texto nuevo de la entrada", … }. Comprueba
   que el id existe, que la entrada estaba donde se esperaba y que el texto
   nuevo mide lo que tiene que medir; si algo no cuadra, no toca el fichero. */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/historias";
const palabras = (t) => t.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;

/* `ver` enseña la entrada actual y el principio de cada página, que es lo que
   hace falta para alargar la entrada sin repetir lo que viene después. */
if (process.argv[2] === "ver") {
  for (const f of readdirSync(DIR).filter((f) => f.endsWith(".ts"))) {
    const s = readFileSync(join(DIR, f), "utf8");
    for (const id of process.argv.slice(3)) {
      const i = s.indexOf(`\n    id: "${id}",`);
      if (i < 0) continue;
      let j = s.indexOf('\n    id: "', i + 10);
      if (j < 0) j = s.length;
      const b = s.slice(i, j);
      const ent = /entrada:\n\s+"((?:[^"\\]|\\.)*)"/.exec(b)?.[1] ?? "";
      console.log(`\n===== ${id} · ${palabras(ent)} palabras`);
      console.log("E: " + ent);
      for (const [k, m] of [...b.matchAll(/texto:\n\s+"((?:[^"\\]|\\.)*)"/g)].entries())
        console.log(`P${k + 1}: ${m[1].slice(0, 190)}`);
    }
  }
  process.exit(0);
}

const cambios = JSON.parse(readFileSync(process.argv[2], "utf8"));

/* Dónde vive cada short. */
const donde = new Map();
for (const f of readdirSync(DIR).filter((f) => f.endsWith(".ts"))) {
  const s = readFileSync(join(DIR, f), "utf8");
  for (const m of s.matchAll(/\n    id: "([a-z0-9-]+)",/g)) donde.set(m[1], f);
}

const porFichero = new Map();
for (const id of Object.keys(cambios)) {
  const f = donde.get(id);
  if (!f) { console.log(`  ✗ ${id}: no existe`); process.exit(1); }
  (porFichero.get(f) ?? porFichero.set(f, []).get(f)).push(id);
}

let tocados = 0;
for (const [f, ids] of porFichero) {
  const ruta = join(DIR, f);
  let s = readFileSync(ruta, "utf8");
  for (const id of ids) {
    const i = s.indexOf(`\n    id: "${id}",`);
    let j = s.indexOf('\n    id: "', i + 10);
    if (j < 0) j = s.length;
    const bloque = s.slice(i, j);
    const m = /\n    entrada:\n      "((?:[^"\\]|\\.)*)",\n/.exec(bloque);
    if (!m) { console.log(`  ✗ ${id}: no encuentro la entrada`); process.exit(1); }
    const nuevo = cambios[id];
    const n = palabras(nuevo);
    if (n < 92 || n > 125) { console.log(`  ✗ ${id}: la entrada nueva mide ${n} palabras (92-125)`); process.exit(1); }
    if (/["\\]/.test(nuevo.replace(/\\"/g, "").replace(/«|»/g, ""))) {
      console.log(`  ✗ ${id}: comillas rectas o barras en el texto`); process.exit(1);
    }
    s = s.slice(0, i) + bloque.replace(m[0], `\n    entrada:\n      "${nuevo}",\n`) + s.slice(j);
    console.log(`  ✓ ${id}: ${palabras(m[1])} → ${n} palabras`);
    tocados++;
  }
  writeFileSync(ruta, s);
}
console.log(`${tocados} entradas cambiadas`);
