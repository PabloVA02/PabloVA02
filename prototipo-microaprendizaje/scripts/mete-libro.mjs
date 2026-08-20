/**
 * Mete un resumen escrito a mano en `libros/paginas.ts`.
 *
 * Escribir las ocho páginas directamente en el TypeScript sale caro en
 * comillas y en sangrías, y un error de escapado no se ve hasta que rompe el
 * build. Así que el texto se escribe en JSON —donde solo hay que preocuparse
 * del contenido— y esto lo convierte al formato del fichero, con su cabecera,
 * su declaración y su línea en el registro `PAGINAS`.
 *
 *   node scripts/mete-libro.mjs borradores/siete-habitos.json
 *
 * El JSON:
 *   { "const": "SIETE_HABITOS", "id": "siete-habitos",
 *     "cabecera": "Los 7 hábitos, en ocho páginas.\n\n...",
 *     "paginas": [ { "bloques": [ { "b": "rotulo", "texto": "..." } ] } ] }
 *
 * Si la constante ya existe, la sustituye: reescribir un libro es volver a
 * ejecutar esto y ya está.
 */
import { readFileSync, writeFileSync } from "node:fs";

const ruta = process.argv[2];
if (!ruta) {
  console.error("uso: node scripts/mete-libro.mjs <borrador.json>");
  process.exit(1);
}

const libro = JSON.parse(readFileSync(ruta, "utf8"));
const destino = new URL("../src/libros/paginas.ts", import.meta.url);
let src = readFileSync(destino, "utf8");

/* Las cadenas van con comillas dobles y saltos escapados, que es lo que deja
   Prettier en este fichero. */
const cita = (s) => JSON.stringify(s);

function bloque(b, sangria) {
  const s = " ".repeat(sangria);
  if (b.b === "lista") {
    const puntos = b.puntos
      .map((p) => `${s}    { fuerte: ${cita(p.fuerte)}, texto: ${cita(p.texto)} },`)
      .join("\n");
    return `${s}{\n${s}  b: "lista",\n${s}  puntos: [\n${puntos}\n${s}  ],\n${s}},`;
  }
  if (b.b === "cita") {
    return `${s}{ b: "cita", frase: ${cita(b.frase)}, autor: ${cita(b.autor)} },`;
  }
  /* Un rótulo corto cabe en una línea; el resto van partidos como los deja
     Prettier cuando el texto pasa de los cien caracteres. */
  const linea = `${s}{ b: ${cita(b.b)}, texto: ${cita(b.texto)} },`;
  if (linea.length <= 100) return linea;
  return `${s}{\n${s}  b: ${cita(b.b)},\n${s}  texto:\n${s}    ${cita(b.texto)},\n${s}},`;
}

const cuerpo = libro.paginas
  .map((p) => `  {\n    bloques: [\n${p.bloques.map((b) => bloque(b, 6)).join("\n")}\n    ],\n  },`)
  .join("\n");

const cabecera = libro.cabecera
  ? `/* --------------------------------------------------------------------------\n` +
    libro.cabecera
      .split("\n")
      .map((l) => (l.trim() ? `   ${l}` : ""))
      .join("\n") +
    `\n   -------------------------------------------------------------------------- */\n\n`
  : "";

const declaracion = `${cabecera}const ${libro.const}: PaginaLibro[] = [\n${cuerpo}\n];\n`;

/* ¿Ya estaba? Se recorta lo viejo —cabecera incluida— y se pone lo nuevo en
   su sitio, para que el orden del fichero no baile en cada reescritura. */
const marca = `const ${libro.const}: PaginaLibro[] = [`;
const donde = src.indexOf(marca);
if (donde >= 0) {
  const ini = src.lastIndexOf("/* ---", donde);
  const desde = ini >= 0 && src.slice(ini, donde).trim().endsWith("*/") ? ini : donde;
  let hondo = 0;
  let fin = -1;
  for (let k = src.indexOf("[", donde + marca.length - 1); k < src.length; k++) {
    if (src[k] === "[") hondo++;
    else if (src[k] === "]" && --hondo === 0) {
      fin = src.indexOf("\n", k) + 1;
      break;
    }
  }
  src = src.slice(0, desde) + declaracion + src.slice(fin);
  console.log(`${libro.const}: reescrito`);
} else {
  const registro = src.indexOf("export const PAGINAS: Record");
  if (registro < 0) throw new Error("no encuentro el registro PAGINAS");
  src = src.slice(0, registro) + declaracion + "\n" + src.slice(registro);
  console.log(`${libro.const}: añadido`);
}

/* La línea del registro. La clave lleva comillas solo si las necesita, que es
   lo que hace Prettier. */
const clave = /^[A-Za-z_$][\w$]*$/.test(libro.id) ? libro.id : cita(libro.id);
if (!new RegExp(`^\\s*${clave.replace(/[."\\-]/g, "\\$&")}: ${libro.const},$`, "m").test(src)) {
  src = src.replace(
    /(export const PAGINAS: Record<string, PaginaLibro\[\]> = \{\n)/,
    `$1  ${clave}: ${libro.const},\n`,
  );
  console.log(`   registrado como "${libro.id}"`);
}

writeFileSync(destino, src);
