/**
 * Escribe la ficha de un libro: el subtítulo, el «de qué trata» y los cinco
 * «Aprenderás». Viven en tres ficheros distintos y a mano se olvida uno, que
 * es justo lo que no avisa nadie: un libro sin ficha se pinta igual, solo que
 * con el texto de otro sitio.
 *
 *   node scripts/ficha-libro.mjs <ficha.json>
 *
 *   { "id": "siete-habitos",
 *     "subtitulo": "La revolución ética en la vida cotidiana y en la empresa",
 *     "deQueTrata": "Dos frases, cuarenta palabras.",
 *     "puntos": ["cinco", "de una línea", "en minúscula", "...", "..."] }
 *
 * Las reglas de cada campo están en REDACCION.md y en la cabecera de cada
 * fichero. Esto solo comprueba las que se pueden contar.
 */
import { readFileSync, writeFileSync } from "node:fs";

const ficha = JSON.parse(readFileSync(process.argv[2], "utf8"));
const cita = (s) => JSON.stringify(s);
const clave = /^[A-Za-z_$][\w$]*$/.test(ficha.id) ? ficha.id : cita(ficha.id);

const avisos = [];
const palabras = ficha.deQueTrata.trim().split(/\s+/).length;
if (palabras > 45) avisos.push(`«de qué trata» tiene ${palabras} palabras, y la regla son 40`);
if (ficha.puntos.length !== 5) avisos.push(`hay ${ficha.puntos.length} «Aprenderás» y tienen que ser 5`);
for (const p of ficha.puntos) {
  const n = p.trim().split(/\s+/).length;
  if (n > 11) avisos.push(`«${p}» tiene ${n} palabras, y la regla es una línea`);
  if (/^[A-ZÁÉÍÓÚÑ]/.test(p)) avisos.push(`«${p}» empieza en mayúscula, y van en minúscula`);
}

/** Mete una entrada en un `Record`, o sustituye la que hubiera. */
function pon(fichero, marca, entrada, patronViejo) {
  const url = new URL(`../src/libros/${fichero}`, import.meta.url);
  let src = readFileSync(url, "utf8");
  const viejo = src.match(patronViejo);
  if (viejo) {
    src = src.replace(patronViejo, entrada);
    console.log(`${fichero}: ${ficha.id} reescrito`);
  } else {
    const i = src.indexOf(marca);
    if (i < 0) throw new Error(`no encuentro ${marca} en ${fichero}`);
    const fin = src.indexOf("\n", i) + 1;
    src = src.slice(0, fin) + entrada + src.slice(fin);
    console.log(`${fichero}: ${ficha.id} añadido`);
  }
  writeFileSync(url, src);
}

const esc = clave.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");

/* Un libro sin subtítulo en su edición —el Quijote, 1984, Orgullo y prejuicio—
   no se queda callado: se apunta en `SIN_SUBTITULO`. Así la ficha no pinta la
   línea y el validador sabe que es una decisión y no un olvido. Ver REDACCION,
   apartado 5. Para eso basta con no poner `subtitulo` en el JSON. */
if (ficha.subtitulo) {
  pon(
    "subtitulos.ts",
    "export const SUBTITULOS: Record<string, string> = {",
    `  ${clave}: ${cita(ficha.subtitulo)},\n`,
    new RegExp(`^ {2}${esc}: "(?:[^"\\\\]|\\\\.)*",\\n`, "m"),
  );
} else {
  const url = new URL("../src/libros/subtitulos.ts", import.meta.url);
  let src = readFileSync(url, "utf8");
  const lista = src.match(/export const SIN_SUBTITULO: string\[\] = \[([^\]]*)\]/s);
  if (!lista) throw new Error("no encuentro SIN_SUBTITULO en subtitulos.ts");
  if (lista[1].includes(`"${ficha.id}"`)) {
    console.log(`subtitulos.ts: ${ficha.id} ya estaba declarado sin subtítulo`);
  } else {
    const ids = [...lista[1].matchAll(/"([\w-]+)"/g)].map((m) => m[1]).concat(ficha.id);
    src = src.replace(
      lista[0],
      `export const SIN_SUBTITULO: string[] = [${ids.map((i) => `"${i}"`).join(", ")}]`,
    );
    writeFileSync(url, src);
    console.log(`subtitulos.ts: ${ficha.id} declarado sin subtítulo`);
  }
}

pon(
  "aprenderas.ts",
  "export const APRENDERAS: Record<string, string> = {",
  `  ${clave}:\n    ${cita(ficha.deQueTrata)},\n\n`,
  new RegExp(`^ {2}${esc}:\\n {4}"(?:[^"\\\\]|\\\\.)*",\\n\\n?`, "m"),
);

pon(
  "puntos.ts",
  "export const PUNTOS: Record<string, string[]> = {",
  `  ${clave}: [\n${ficha.puntos.map((p) => `    ${cita(p)},`).join("\n")}\n  ],\n\n`,
  new RegExp(`^ {2}${esc}: \\[\\n(?: {4}"(?:[^"\\\\]|\\\\.)*",\\n)+ {2}\\],\\n\\n?`, "m"),
);

if (avisos.length) {
  console.log("\n⚠  revisa:");
  for (const a of avisos) console.log(`   ${a}`);
}
