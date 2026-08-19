/* ==========================================================================
   Las fotografías del muro, en el orden en que se ven.

   `movil.mjs` sabe empotrar fotos, pero no en qué orden mirarlas: lee los
   ficheros de `src/historias` por orden alfabético, que no es el orden en que
   nadie las va a encontrar. Da igual mientras quepan todas; en cuanto hay que
   cortar por peso, importa mucho, porque lo que se corta tiene que ser el
   final del muro y no un puñado de historias sueltas repartidas por todo él.

   El orden del muro no es el de los ficheros: `shorts.ts` intercala los temas
   —la primera de cada tema, luego la segunda de cada tema— para que no salgan
   dos catástrofes seguidas. Aquí se rehace esa intercalación leyendo los
   `import` y la lista de `intercala()`, y se escriben los nombres de fichero
   de Commons en ese mismo orden, sin repetir.

       node scripts/orden-fotos.mjs [cuantas] > /tmp/orden-fotos.json
   ========================================================================== */

import { readFileSync } from "node:fs";
import { join } from "node:path";

const RAIZ = new URL("..", import.meta.url).pathname;
const HISTORIAS = join(RAIZ, "src", "historias");
const CUANTAS = Number(process.argv[2] ?? Infinity);

const shorts = readFileSync(join(RAIZ, "src", "shorts.ts"), "utf8");

/* La constante de cada tema y el fichero de donde sale. */
const fichero = new Map(
  [...shorts.matchAll(/import\s*\{\s*([A-Z0-9_]+)\s*\}\s*from\s*"\.\/historias\/([a-z0-9]+)"/g)]
    .map((m) => [m[1], m[2]]),
);

/* El orden de los temas es el de los argumentos de `intercala()`.

   Se busca desde `const MURO` y no desde `export const SHORTS`, que es lo que
   ponía: `SHORTS` se declara DESPUÉS del intercalado —envuelve a `MURO` para
   quitar los repetidos— así que buscar `intercala(` a partir de ahí no
   encontraba nada y la lista salía vacía. Con la lista vacía, `movil.mjs`
   empotra las fotos por orden alfabético de fichero, que es justo lo que este
   script existe para evitar. */
const listado = shorts.slice(shorts.indexOf("intercala(", shorts.indexOf("const MURO")));
const temas = listado.slice(0, listado.indexOf(");"))
  .split("\n").map((l) => l.trim().replace(/^intercala\(/, "").replace(/,$/, ""))
  .filter((l) => fichero.has(l));

/* Las historias de cada tema, en el orden en que están escritas. */
const porTema = temas.map((t) => {
  const texto = readFileSync(join(HISTORIAS, `${fichero.get(t)}.ts`), "utf8");
  const cortes = [...texto.matchAll(/\n {2}\{\n {4}id: "/g)].map((m) => m.index);
  return cortes.map((a, i) => texto.slice(a, cortes[i + 1] ?? texto.length));
});

/* Y la intercalación: la primera de cada tema, la segunda de cada tema… */
const muro = [];
const largo = Math.max(...porTema.map((g) => g.length));
for (let i = 0; i < largo; i++) for (const g of porTema) if (g[i]) muro.push(g[i]);

const vistos = new Set();
for (const historia of muro) {
  for (const m of historia.matchAll(/archivo:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)) {
    vistos.add(m[1].replace(/\\"/g, '"'));
    if (vistos.size >= CUANTAS) break;
  }
  if (vistos.size >= CUANTAS) break;
}

process.stderr.write(`${muro.length} historias en el muro · ${vistos.size} fotografías\n`);
process.stdout.write(JSON.stringify([...vistos]));
