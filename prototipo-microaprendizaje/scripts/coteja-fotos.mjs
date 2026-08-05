/* ¿Dice el código la verdad sobre cada fotografía?

   Recorre todos los shorts, se lee la ficha de cada imagen en Commons y
   compara. Caza tres cosas que ya han pasado:

     · el fichero no existe o cambió de nombre;
     · el código declara una licencia y Commons declara otra;
     · el `archivo` apunta a una imagen y la ficha describe otra, porque se
       cambió una y se olvidó la otra.

   Uso:  node scripts/coteja-fotos.mjs
   Hace falta el acceso a commons.wikimedia.org (ver FOTOS.md).
*/
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
const ejecuta = promisify(execFile);

const DIR = "src/historias";
const UA = "Curva/1.0 (proyecto educativo; contacto: pabloverdalo@gmail.com)";
const limpia = (t) => String(t ?? "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const misma = (a, b) => {
  const n = (t) => t.toLowerCase().replace(/\s|-/g, "").replace("dominiopúblico", "publicdomain");
  return n(a) === n(b);
};

/* Se sacan los bloques `foto:` enteros y de ahí sus campos, en vez de casar
   una expresión larga: entre `archivo` y `licencia` puede haber comentarios,
   y con la expresión larga esos bloques se colaban sin revisar. */
function fotos(texto, fichero) {
  const salida = [];
  for (const m of texto.matchAll(/foto[s]?:\s*[[{]/g)) {
    let i = m.index + m[0].length - 1, prof = 0;
    for (let j = i; j < texto.length; j++) {
      const c = texto[j];
      if (c === "{" || c === "[") prof++;
      else if (c === "}" || c === "]") { prof--; if (!prof) { i = j; break; } }
    }
    const bloque = texto.slice(m.index, i + 1);
    for (const b of bloque.split(/\n\s{6}\{/)) {
      const crudo = /archivo:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(b)?.[1];
      if (!crudo) continue;
      /* El nombre viene tal cual está escrito en el código, o sea con las
         comillas escapadas. En Commons el fichero se llama con comillas. */
      const arch = crudo.replace(/\\(["\\])/g, "$1");
      salida.push({ fichero, archivo: arch,
        licencia: /licencia: "([^"]*)"/.exec(b)?.[1] ?? "(ninguna)",
        fuente: /fuente:\s*\n?\s*"([^"]*)"/.exec(b)?.[1] });
    }
  }
  return salida;
}

const todas = [];
for (const f of readdirSync(DIR).filter((n) => n.endsWith(".ts")))
  todas.push(...fotos(readFileSync(join(DIR, f), "utf8"), f));

console.log(`${todas.length} fotografías de Commons en el código\n`);
let mal = 0;
for (const f of todas) {
  const u = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo"
    + "&iiprop=extmetadata%7Csize&titles=" + encodeURIComponent("File:" + f.archivo);
  let p;
  try {
    const { stdout } = await ejecuta("curl", ["-sS", "--max-time", "30", "-H", `User-Agent: ${UA}`, u],
      { maxBuffer: 16 * 1024 * 1024 });
    p = Object.values(JSON.parse(stdout).query.pages)[0];
  } catch (e) { console.log(`  ? ${f.fichero}: no se pudo consultar — ${e.message}`); mal++; continue; }

  if (p.missing !== undefined) { console.log(`  ✗ ${f.fichero}: NO EXISTE en Commons — ${f.archivo}`); mal++; continue; }
  const i = p.imageinfo[0];
  const real = limpia(i.extmetadata?.LicenseShortName?.value) || "(sin licencia en la ficha)";
  const problemas = [];
  if (!misma(real, f.licencia)) problemas.push(`el código dice «${f.licencia}» y Commons dice «${real}»`);
  if (i.width < 1200) problemas.push(`solo ${i.width} de ancho, se verá blanda`);
  /* Las dos formas del mismo nombre: en la URL los espacios son guiones bajos. */
  const igual = (t) => decodeURIComponent(t).replace(/_/g, " ").toLowerCase();
  if (f.fuente && !igual(f.fuente).includes(igual(f.archivo).slice(0, 40)))
    problemas.push("la fuente apunta a un fichero distinto del que se usa");
  if (problemas.length) { console.log(`  ✗ ${f.fichero} · ${f.archivo.slice(0, 50)}\n      ${problemas.join("\n      ")}`); mal++; }
}
console.log(`\n${todas.length - mal} bien · ${mal} para mirar`);
process.exit(mal ? 1 : 0);
