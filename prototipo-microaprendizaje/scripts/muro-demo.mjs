/* ==========================================================================
   Elige QUÉ HISTORIAS van delante en el mirador de shorts, y qué fotografías
   hay que empotrar para que salgan ilustradas.

       node scripts/muro-demo.mjs [cuantas] > /tmp/muro-demo.json

   POR QUÉ EXISTE, Y QUÉ AVERÍA ARREGLA

   `orden-fotos.mjs` reconstruye el orden del muro leyendo los `import` y la
   lista de `intercala()` de `shorts.ts`, y luego `movil.mjs` empotra las
   primeras fotografías que caben. La idea es que lo que se corta por peso sea
   el FINAL del muro y no un puñado de historias sueltas.

   Y no cuadra. El 27 de agosto, montando el mirador, el muro se abrió en
   «¿Cuánto le queda al sol?» y las fotos empotradas eran las del denario de
   César: la reconstrucción da un orden distinto del que arma la app. Con
   veinticuatro fotos en el simulador de siempre casi no se nota; en un
   mirador que es SOLO el muro, se nota en la primera pantalla, que es
   exactamente la que Pablo quería mirar.

   LA SOLUCIÓN NO ES AFINAR LA RECONSTRUCCIÓN, es no depender de ella. En
   `shorts.ts` ya existe `__ORDEN`, un gancho que deja a la página decir qué
   historias van delante —se hizo para grabar el anuncio—. Así que aquí se
   eligen las historias PRIMERO, se sacan sus fotografías, y la página dice las
   dos cosas: qué historias van delante y qué fotos lleva dentro. Las dos
   listas salen de la misma pasada, así que no pueden desincronizarse.

   Se eligen las que tienen sus CUATRO fotografías. Una historia a medias, con
   dos fotos y dos carteles, no sirve para juzgar cómo queda una foto en el
   muro, que es para lo único que existe este mirador.
   ========================================================================== */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const RAIZ = new URL("..", import.meta.url).pathname;
const HISTORIAS = join(RAIZ, "src", "historias");
const CUANTAS = Number(process.argv[2] ?? 24);

/* De cada fichero salen sus historias con su id y sus fotos, en el orden en
   que están escritas. No hace falta más: lo que decide el orden del muro es
   `intercala()`, y aquí se lo pasamos por encima con `__ORDEN`. */
function historiasDe(fichero) {
  const src = readFileSync(join(HISTORIAS, fichero), "utf8");
  const fuera = [];
  /* Cada historia empieza por su `id:` y desde ahí hasta el siguiente `id:`
     están sus páginas con sus `archivo:`. */
  const trozos = src.split(/\n\s{4}id:\s*"/).slice(1);
  for (const t of trozos) {
    const id = t.slice(0, t.indexOf('"'));
    const fotos = [...t.matchAll(/archivo:\s*"((?:[^"\\]|\\.)*)"/g)].map((m) =>
      m[1].replace(/\\"/g, '"'),
    );
    if (id) fuera.push({ id, fotos });
  }
  return fuera;
}

const ficheros = readdirSync(HISTORIAS).filter((f) => f.endsWith(".ts") && f !== "MOLDE.md");
const porFichero = ficheros.map(historiasDe);

/* Intercalado: la primera de cada tema, luego la segunda de cada tema. Es lo
   mismo que hace `intercala()` y aquí solo sirve para que la muestra tenga
   variedad —una de ciencia, una de historia, una de bichos— en vez de
   veinticuatro seguidas del mismo fichero. */
const muro = [];
for (let i = 0; ; i++) {
  let alguna = false;
  for (const lista of porFichero) {
    if (lista[i]) {
      muro.push(lista[i]);
      alguna = true;
    }
  }
  if (!alguna) break;
}

const completas = muro.filter((h) => h.fotos.length >= 4).slice(0, CUANTAS);
const fotos = [];
for (const h of completas) {
  for (const f of h.fotos) if (!fotos.includes(f)) fotos.push(f);
}

process.stdout.write(
  JSON.stringify({ shorts: completas.map((h) => h.id), fotos }, null, 1),
);
process.stderr.write(
  `${completas.length} historias con sus cuatro fotos · ${fotos.length} fotografías\n`,
);
