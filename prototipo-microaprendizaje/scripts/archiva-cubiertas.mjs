/**
 * Guarda los ORIGINALES de las cubiertas que dibuja Pablo.
 *
 *   node scripts/archiva-cubiertas.mjs <carpeta-con-los-png> [--ancho 1024] [--calidad 0.88]
 *
 * POR QUÉ EXISTE
 *
 * Pablo lo pidió el 21 de agosto: «guarda la aplicación entera para que no se
 * pierda, es importante». Al auditar qué estaba guardado de verdad apareció
 * este agujero: sus dibujos vivían SOLO dentro de `libros/cubiertas.ts`, en
 * WebP de 480 de ancho, que es la medida que necesita la app y nada más. Los
 * PNG originales de 1024×1536 llegan en un zip a una carpeta de subidas que
 * dura lo que dura la sesión, y después desaparecen.
 *
 * Todo lo demás del proyecto se puede rehacer: el texto lo puedo volver a
 * escribir, las fotos se vuelven a pedir a Commons, la app se recompila. Los
 * dibujos de Pablo, no. Son la única pieza irreemplazable, y estaban
 * guardados en la peor calidad de todas.
 *
 * QUÉ GUARDA Y POR QUÉ NO EL PNG TAL CUAL
 *
 * WebP al ancho original —1024— y calidad alta. Un PNG de estos pesa entre
 * uno y dos megas y medio; en WebP a la misma resolución baja a unos ciento
 * cincuenta kilos, así que ciento veinte cubiertas ocupan dieciocho megas en
 * vez de doscientos cuarenta. Se conserva la resolución entera, que es lo que
 * permite volver a generar la cubierta a cualquier tamaño el día que haga
 * falta —una versión web, una impresión, otra maqueta—.
 *
 * NO se toca `cubiertas.ts`: esto es un archivo aparte, no la fuente de la
 * app. Para meter cubiertas nuevas en la app sigue siendo `mete-cubiertas.mjs`.
 *
 * Como en los otros scripts de imagen, la conversión la hace Chromium: en este
 * contenedor no hay ni cwebp, ni sharp, ni PIL.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "node:fs";
import { join, basename, extname } from "node:path";
import { chromium } from "playwright";

const carpeta = process.argv[2];
if (!carpeta) {
  console.error("uso: node scripts/archiva-cubiertas.mjs <carpeta> [--ancho 1024] [--calidad 0.88]");
  process.exit(1);
}
const arg = (n, d) => {
  const i = process.argv.indexOf(n);
  return i > 0 ? process.argv[i + 1] : d;
};
const ANCHO = Number(arg("--ancho", 1024));
const CALIDAD = Number(arg("--calidad", 0.88));

const DESTINO = new URL("../cubiertas-originales/", import.meta.url);
if (!existsSync(DESTINO)) mkdirSync(DESTINO, { recursive: true });

/* El nombre del fichero es el `id` del catálogo, igual que en
   `mete-cubiertas.mjs`. Uno que no esté en el catálogo se avisa y se guarda
   igualmente: aquí lo que importa es no perder el dibujo. */
const catalogo = readFileSync(new URL("../src/libros/catalogo.ts", import.meta.url), "utf8");

const originales = readdirSync(carpeta)
  .filter((f) => /\.(png|jpe?g)$/i.test(f))
  .sort();

if (!originales.length) {
  console.error(`✗ no hay imágenes en ${carpeta}`);
  process.exit(1);
}

const navegador = await chromium.launch();
const pagina = await navegador.newPage();
let peso = 0;
let nuevos = 0;

for (const f of originales) {
  const id = basename(f, extname(f));
  const destino = new URL(`${id}.webp`, DESTINO);
  if (existsSync(destino)) {
    console.log(`  ${id.padEnd(26)} ya estaba`);
    continue;
  }
  if (!catalogo.includes(`id: "${id}"`)) console.log(`  ⚠ ${id} no está en el catálogo, lo guardo igual`);

  const b64 = readFileSync(join(carpeta, f)).toString("base64");
  const tipo = /\.png$/i.test(f) ? "png" : "jpeg";
  const datos = await pagina.evaluate(
    async ([b64, tipo, ancho, calidad]) => {
      const img = new Image();
      img.src = `data:image/${tipo};base64,${b64}`;
      await img.decode();
      const lienzo = document.createElement("canvas");
      const escala = Math.min(1, ancho / img.naturalWidth);
      lienzo.width = Math.round(img.naturalWidth * escala);
      lienzo.height = Math.round(img.naturalHeight * escala);
      lienzo.getContext("2d").drawImage(img, 0, 0, lienzo.width, lienzo.height);
      return [lienzo.toDataURL("image/webp", calidad), img.naturalWidth, img.naturalHeight];
    },
    [b64, tipo, ANCHO, CALIDAD],
  );
  const [uri, ancho0, alto0] = datos;
  const bytes = Buffer.from(uri.split(",")[1], "base64");
  writeFileSync(destino, bytes);
  peso += bytes.length;
  nuevos++;
  console.log(`  ${id.padEnd(26)} ${ancho0}×${alto0} → ${Math.round(bytes.length / 1024)} kB`);
}

await navegador.close();

const total = readdirSync(DESTINO).filter((f) => f.endsWith(".webp")).length;
console.log(
  `\n${total} originales archivados · ${nuevos} nuevos en esta pasada · ` +
    `${(peso / 1024 / 1024).toFixed(1)} MB añadidos`,
);
