/* ==========================================================================
   CUÁNDO ENTRÓ CADA SERIE, sacado del historial

       node scripts/orden-incorporacion.mjs > assets/orden-shorts.json

   Pablo, el 1 de septiembre: «ponme los shorts en orden de incorporación».

   Ese dato NO está en los ficheros: sus cabeceras llevan `orden`, pero es el
   orden DENTRO de una serie —qué página va primero—, no cuándo llegó la serie.
   Y el nombre de la carpeta tampoco dice nada: el catálogo salía por orden
   alfabético, que es justo por lo que «Cómo funciona el cine», de la última
   tanda, aparecía entre los primeros.

   Lo que sí lo sabe es el repositorio: la fecha del PRIMER commit que tocó
   cada fichero es el día que ese short entró en el proyecto. Se pregunta una
   vez y se deja escrito, porque preguntárselo a git en cada compilación son
   seiscientas invocaciones y varios minutos.

   Se guarda la fecha además del número de orden: un número solo no se puede
   comprobar, y con la fecha delante se ve de un vistazo si una tanda entera
   se ha colado en el sitio que no era.
   ========================================================================== */
import { execFileSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const TEXTOS = "referencia/textos-de-pablo/shorts";
const AQUI = new URL("..", import.meta.url).pathname;

const series = readdirSync(join(AQUI, TEXTOS))
  .filter((d) => statSync(join(AQUI, TEXTOS, d)).isDirectory())
  .sort();

const filas = [];
for (const serie of series) {
  const dir = join(TEXTOS, serie);
  /* `--diff-filter=A` es lo que hace que esto sea «cuándo entró» y no «cuándo
     se tocó por última vez»: solo los commits que AÑADEN un fichero. El
     último de la lista, con --reverse el primero, es el más antiguo. */
  let fecha = "";
  try {
    const salida = execFileSync(
      "git",
      ["log", "--reverse", "--diff-filter=A", "--format=%cI", "--", dir],
      { cwd: AQUI, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
    ).trim();
    fecha = salida.split("\n")[0] ?? "";
  } catch {
    fecha = "";
  }
  filas.push({ serie, fecha });
}

/* Sin fecha —una serie recién puesta y todavía sin commit— va al final, que es
   donde de verdad le toca: es lo último que ha entrado. */
const SIN = "9999";
filas.sort((a, b) => (a.fecha || SIN).localeCompare(b.fecha || SIN) || a.serie.localeCompare(b.serie, "es"));

const orden = {};
filas.forEach((f, i) => { orden[f.serie] = { n: i + 1, entro: f.fecha ? f.fecha.slice(0, 10) : null }; });

console.log(JSON.stringify({
  _: "Cuándo entró cada serie, del primer commit que añadió sus ficheros. Lo escribe scripts/orden-incorporacion.mjs y lo lee scripts/catalogo.mjs. Si llega una tanda nueva hay que volver a generarlo.",
  generado: new Date().toISOString().slice(0, 10),
  orden,
}, null, 1));
