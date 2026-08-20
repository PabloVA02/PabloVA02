/**
 * Cuenta las palabras de cada resumen escrito a mano en `libros/paginas.ts` y
 * marca el que se sale de la horquilla de `REDACCION.md`.
 *
 * La horquilla es 2.000-2.700 palabras, y la cifra que enseña la ficha es la
 * de OÍRLO: palabras entre 140. Nunca se escribe a mano.
 *
 *   node scripts/medir-paginas.mjs            todos
 *   node scripts/medir-paginas.mjs SAPIENS    uno
 *   DETALLE=1 node scripts/medir-paginas.mjs  página por página
 */
import { readFileSync } from "node:fs";

const SUELO = 2000;
const TECHO = 2700;
const OIR = 140;

const src = readFileSync(new URL("../src/libros/paginas.ts", import.meta.url), "utf8");

const nombres = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [...src.matchAll(/^const ([A-Z_0-9]+): PaginaLibro\[\] = \[/gm)].map((m) => m[1]);

const cuenta = (t) => t.trim().split(/\s+/).filter(Boolean).length;

function palabrasDe(pagina) {
  let n = 0;
  for (const b of pagina.bloques ?? []) {
    if (b.b === "lista") for (const p of b.puntos ?? []) n += cuenta(`${p.fuerte ?? ""} ${p.texto ?? ""}`);
    else if (b.b === "prueba") n += cuenta((b.puntos ?? []).join(" "));
    else if (b.b === "cita") n += cuenta(b.frase ?? "");
    else if (b.texto) n += cuenta(b.texto);
  }
  return n;
}

/* El fichero es TypeScript, así que no se puede importar desde Node a secas.
   Se recorta el literal del array contando corchetes y se evalúa: son datos
   puros, sin una sola llamada. */
function arrayDe(nombre) {
  const i = src.indexOf(`const ${nombre}: PaginaLibro[] = [`);
  if (i < 0) return null;
  const ini = src.indexOf("= [", i) + 2;
  let hondo = 0;
  for (let k = ini; k < src.length; k++) {
    if (src[k] === "[") hondo++;
    else if (src[k] === "]" && --hondo === 0) return eval(src.slice(ini, k + 1));
  }
  return null;
}

let fuera = 0;
for (const nombre of nombres) {
  const paginas = arrayDe(nombre);
  if (!paginas) {
    console.log(`${nombre}: no está en paginas.ts`);
    fuera++;
    continue;
  }
  const total = paginas.reduce((s, p) => s + palabrasDe(p), 0);
  const corto = total < SUELO;
  const largo = total > TECHO;
  if (corto || largo) fuera++;
  const aviso = corto
    ? `  ⚠ corto, le faltan ${SUELO - total}`
    : largo
      ? `  ⚠ largo, le sobran ${total - TECHO}`
      : "  ✓";
  console.log(
    `${nombre.padEnd(20)} ${String(paginas.length).padStart(2)} pág · ` +
      `${String(total).padStart(4)} pal · ${(total / OIR).toFixed(1)} min de audio${aviso}`,
  );
  if (process.env.DETALLE) {
    for (const [k, pagina] of paginas.entries()) {
      const rotulo = pagina.bloques?.find((b) => b.b === "rotulo")?.texto ?? "—";
      console.log(`     ${String(k + 1).padStart(2)}. ${rotulo.slice(0, 56).padEnd(58)} ${palabrasDe(pagina)} pal`);
    }
  }
}

if (fuera) console.log(`\n⚠  ${fuera} de ${nombres.length} fuera de la horquilla (${SUELO}-${TECHO}).`);
