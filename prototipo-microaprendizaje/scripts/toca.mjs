/* Qué short toca ahora.

   Se trabaja en ORDEN DE LECTURA, que no es el orden de los ficheros: la app
   intercala los temas —`intercala()` en src/shorts.ts—, así que el primer
   short que ve Pablo al abrirla es el primero de FIGURAS, el segundo el
   primero de VIRUS_INFORMATICOS, y así. Este listado reproduce ese orden y
   dice de cada uno lo que falta:

     fotos 0/4   cuántas de las cuatro pantallas tienen imagen
     título      letras del título (tope 27, regla 17)
     entrada     palabras de la entrada (100-125, regla 16)

   Uso:  node scripts/toca.mjs            los 40 primeros que no están
         node scripts/toca.mjs --todos    todos, hechos incluidos
         node scripts/toca.mjs --fichero  solo el resumen por fichero
*/
import { readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/historias";
const fuente = readFileSync("src/shorts.ts", "utf8");

/* GRUPO → fichero, de las líneas de import. */
const deGrupo = new Map();
for (const m of fuente.matchAll(/import \{ (\w+) \} from "\.\/historias\/([\w-]+)"/g))
  deGrupo.set(m[1], m[2]);

/* El orden de intercala(), que es el orden del muro. */
const lista = /export const SHORTS: Short\[\] = intercala\(([\s\S]*?)\n\);/.exec(fuente)[1];
const grupos = [...lista.matchAll(/^\s*(\w+),/gm)].map((m) => m[1]);

/* De cada fichero, sus shorts en orden, con lo que hay que saber de cada uno. */
function shorts(fichero) {
  const texto = readFileSync(join(DIR, `${fichero}.ts`), "utf8");
  /* Se corta por los `id:` de primer nivel, que abren cada short. */
  const trozos = texto.split(/\n  \{\n/).slice(1);
  return trozos.map((t) => {
    const entrada = /entrada:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(t)?.[1] ?? "";
    /* Un bloque `fotos: [` con cuatro objetos, o un `foto: {` suelto que vale
       para las cuatro pantallas, o nada. */
    const varias = /\n    fotos: \[([\s\S]*?)\n    \],/.exec(t);
    const cuantas = varias ? (varias[1].match(/\n      \{/g) ?? []).length
                   : /\n    foto: \{/.test(t) ? 1 : 0;
    return {
      id: /id: "([^"]+)"/.exec(t)?.[1] ?? "?",
      titulo: /titulo: "((?:[^"\\]|\\.)*)"/.exec(t)?.[1] ?? "",
      fotos: cuantas,
      cuatro: !!varias,
      palabras: (entrada.match(/\S+/g) ?? []).length,
      fichero,
    };
  });
}

const porFichero = new Map();
for (const g of grupos) {
  const f = deGrupo.get(g);
  if (f) porFichero.set(g, shorts(f));
}

/* Intercalado: el primero de cada grupo, luego el segundo de cada grupo… */
const orden = [];
const largo = Math.max(...[...porFichero.values()].map((v) => v.length));
for (let i = 0; i < largo; i++)
  for (const v of porFichero.values()) if (v[i]) orden.push(v[i]);

const args = process.argv.slice(2);

if (args.includes("--fichero")) {
  for (const [g, v] of porFichero) {
    const con = v.filter((s) => s.cuatro).length;
    if (con) console.log(`  ${g.padEnd(24)} ${con}/${v.length}`);
  }
  process.exit(0);
}

const hechos = orden.filter((s) => s.cuatro).length;
console.log(`\n${orden.length} shorts · ${hechos} con sus cuatro fotos · faltan ${orden.length - hechos}\n`);
console.log("  nº    fotos  título                          letras  entrada  fichero");

const pendientes = args.includes("--todos") ? orden : orden.filter((s) => !s.cuatro);
for (const [n, s] of pendientes.slice(0, args.includes("--todos") ? 1e9 : 40).entries()) {
  const sitio = orden.indexOf(s);
  const letras = s.titulo.length;
  console.log(
    `  ${String(sitio).padStart(4)}  ${s.cuatro ? "····" : `${s.fotos}/4 `}  ` +
    `${s.titulo.slice(0, 30).padEnd(30)}  ${String(letras).padStart(3)}${letras > 27 ? "!" : " "}   ` +
    `${String(s.palabras).padStart(4)}${s.palabras < 100 ? "!" : " "}    ${s.fichero}`,
  );
  if (n > 200) break;
}
