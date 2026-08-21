/**
 * Cuenta las palabras de cada resumen escrito a mano en `libros/paginas.ts` y
 * marca el que se sale de la horquilla de `REDACCION.md`.
 *
 * Hay tres tamaños —Breve de 8 páginas, Amplio de 12, Extenso de 16— y cada uno
 * tiene su horquilla. El tamaño se deduce de cuántas páginas tiene el libro, y
 * las palabras dicen si lo cumple. Ver `REDACCION.md`, apartado 2 ter.
 *
 * La cifra que enseña la ficha es la de OÍRLO: palabras entre 140. Nunca se
 * escribe a mano.
 *
 *   node scripts/medir-paginas.mjs            todos
 *   node scripts/medir-paginas.mjs SAPIENS    uno
 *   DETALLE=1 node scripts/medir-paginas.mjs  página por página
 */
import { readFileSync } from "node:fs";

/* Los tres tamaños de `REDACCION.md`. Lo que NO cambia es la página: 260-320
   palabras, una idea. Lo que cambia es cuántas tiene el libro, y eso lo decide
   cuántos argumentos independientes sostiene.

   Por eso aquí no se juzga contra una sola horquilla: se mira el número de
   páginas, se deduce el tamaño y se comprueba contra el suyo. Un libro de
   3.400 palabras está corto si tiene ocho páginas —son de 425, con dos ideas
   dentro— y está perfecto si tiene doce. */
const TAMANOS = [
  { nombre: "Breve", paginas: 8, suelo: 2000, techo: 2700 },
  { nombre: "Amplio", paginas: 12, suelo: 3000, techo: 3900 },
  { nombre: "Extenso", paginas: 16, suelo: 4000, techo: 5000 },
];
/* La página es la unidad y su medida no depende del tamaño del libro. */
const PAGINA_MIN = 220;
const PAGINA_MAX = 350;
const OIR = 140;

const src = readFileSync(new URL("../src/libros/paginas.ts", import.meta.url), "utf8");

const pedidos = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const nombres = pedidos.length
  ? pedidos
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

  /* El tamaño se deduce del número de páginas, que es lo que el autor decidió
     al escribirlo; las palabras solo dicen si lo ha cumplido. */
  const tam = TAMANOS.reduce((a, b) =>
    Math.abs(b.paginas - paginas.length) < Math.abs(a.paginas - paginas.length) ? b : a,
  );
  const corto = total < tam.suelo;
  const largo = total > tam.techo;

  /* Y la página, que es la unidad: una sola gorda basta para que el libro
     tenga dos ideas en una pantalla aunque el total cuadre. */
  const gordas = paginas.filter((p) => palabrasDe(p) > PAGINA_MAX).length;
  const flacas = paginas.filter((p) => palabrasDe(p) < PAGINA_MIN).length;

  const problemas = [
    corto && `corto, le faltan ${tam.suelo - total}`,
    largo && `largo, le sobran ${total - tam.techo}`,
    paginas.length !== tam.paginas && `${paginas.length} páginas, y un ${tam.nombre} son ${tam.paginas}`,
    gordas && `${gordas} ${gordas === 1 ? "página pasa" : "páginas pasan"} de ${PAGINA_MAX} palabras`,
    flacas && `${flacas} ${flacas === 1 ? "página no llega" : "páginas no llegan"} a ${PAGINA_MIN}`,
  ].filter(Boolean);
  if (problemas.length) fuera++;
  const aviso = problemas.length ? `  ⚠ ${problemas.join(" · ")}` : "  ✓";
  /* Con `--detalle` se enseña página por página. Es lo que hace falta cuando
     el aviso dice que una no llega a 220: sin esto hay que ir contando a mano
     para saber cuál, y eso se hace una vez por libro. */
  if (process.argv.includes("--detalle")) {
    console.log(
      `  ${paginas.map((p, i) => `${i + 1}:${palabrasDe(p)}`).join("  ")}`,
    );
  }
  console.log(
    `${nombre.padEnd(20)} ${tam.nombre.padEnd(7)} ${String(paginas.length).padStart(2)} pág · ` +
      `${String(total).padStart(4)} pal · ${(total / OIR).toFixed(1).padStart(4)} min de audio${aviso}`,
  );
  if (process.env.DETALLE) {
    for (const [k, pagina] of paginas.entries()) {
      const rotulo = pagina.bloques?.find((b) => b.b === "rotulo")?.texto ?? "—";
      console.log(`     ${String(k + 1).padStart(2)}. ${rotulo.slice(0, 56).padEnd(58)} ${palabrasDe(pagina)} pal`);
    }
  }
}

/* Y la proporción de la biblioteca, que es la otra regla de REDACCION.md: los
   largos son la excepción, y si dejan de serlo es que se está alargando por
   gusto y no por argumento. */
const porTamano = {};
for (const nombre of nombres) {
  const paginas = arrayDe(nombre);
  if (!paginas) continue;
  const t = TAMANOS.reduce((a, b) =>
    Math.abs(b.paginas - paginas.length) < Math.abs(a.paginas - paginas.length) ? b : a,
  );
  porTamano[t.nombre] = (porTamano[t.nombre] ?? 0) + 1;
}
if (nombres.length > 3) {
  console.log(
    `\n${nombres.length} resúmenes · ` +
      TAMANOS.map((t) => `${porTamano[t.nombre] ?? 0} ${t.nombre}`).join(" · "),
  );
  const largos = (porTamano.Amplio ?? 0) + (porTamano.Extenso ?? 0);
  if (largos > nombres.length * 0.3)
    console.log(`⚠  ${largos} de ${nombres.length} son largos. La biblioteca es de micro-aprendizaje.`);
}

if (fuera) console.log(`\n⚠  ${fuera} de ${nombres.length} con algo que revisar.`);
