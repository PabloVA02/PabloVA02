/* ==========================================================================
   LA COPIA QUE SE SIRVE: la misma portada, al tamaño que cabe en la pantalla

       node scripts/portadas-servir.mjs            todas
       node scripts/portadas-servir.mjs cebra miel  solo esas

   POR QUÉ EXISTE. Las portadas se guardan a 2160 × 3840 porque Pablo lo pidió
   así —«la máxima que permitan los mejores móviles del mundo y los que
   vendrán»— y esa decisión sigue en pie: `portadas/` es el archivo, y de ahí
   sale cualquier tamaño que haga falta el día de mañana.

   Pero servir el archivo NO es lo mismo que guardarlo, y confundirlo se pagó
   caro. Pablo, con la app ya en su iPhone y con datos móviles: «tarda un
   montón en cargar las imágenes y va un poco lageado y pillado». Normal:
   estaba bajándose un AVIF de un mega por portada y decodificando ocho
   millones de píxeles en un teléfono, para enseñarlos en una pantalla que
   tiene 1170 de ancho. Nueve veces más píxeles de los que caben.

   Así que aquí se escribe la copia de servir, a 1290 de ancho: el ancho del
   iPhone más grande que existe hoy, o sea que en cualquier teléfono actual se
   ve exactamente igual de nítida. Pesa la cuarta parte y se decodifica en un
   suspiro.

   EL DÍA QUE HAYA UN MÓVIL DE 2160 DE ANCHO no hay que reprocesar nada: se
   sube este número y se vuelve a pasar, porque el original de 2160 sigue
   guardado. Esa es toda la gracia de tener las dos cosas separadas.
   ========================================================================== */
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const AQUI = fileURLToPath(new URL("..", import.meta.url));
const MAESTRAS = join(AQUI, "portadas");
const SALIDA = join(MAESTRAS, "servir");

/* El ancho del iPhone 16 Pro Max, que es el más ancho que se vende. Por encima
   de esto no se gana nada visible en ningún teléfono de hoy. */
const ANCHO = 1290;
const AVIF = 80;

const filtros = process.argv.slice(2).filter((a) => !a.startsWith("--"));
mkdirSync(SALIDA, { recursive: true });

const fuentes = readdirSync(MAESTRAS)
  .filter((f) => f.endsWith(".avif"))
  .filter((f) => !filtros.length || filtros.some((q) => f.includes(q)));

let antes = 0, despues = 0;
for (const f of fuentes) {
  const tema = basename(f, ".avif");
  const origen = join(MAESTRAS, f);
  const destino = join(SALIDA, f);
  const m = await sharp(origen).metadata();
  /* Nunca se agranda: si una portada salió a 1200 porque su original no daba
     más, la copia de servir es esa misma y no una estirada. */
  const ancho = Math.min(ANCHO, m.width);
  await sharp(origen)
    .resize(ancho, Math.round((ancho * 16) / 9))
    .avif({ quality: AVIF, effort: 4 })
    .toFile(destino);
  antes += statSync(origen).size;
  despues += statSync(destino).size;
  console.log(`${tema.padEnd(46)} ${m.width} → ${ancho} · ${Math.round(statSync(origen).size / 1024)} → ${Math.round(statSync(destino).size / 1024)} kB`);
}
console.log(
  `\n${fuentes.length} copias de servir · ${(antes / 1048576).toFixed(1)} MB → ` +
    `${(despues / 1048576).toFixed(1)} MB · ${Math.round(despues / fuentes.length / 1024)} kB de media`,
);
