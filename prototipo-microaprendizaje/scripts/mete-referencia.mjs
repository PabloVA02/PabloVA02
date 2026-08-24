/**
 * Guarda en el repositorio las capturas de referencia que manda Pablo.
 *
 *   node scripts/mete-referencia.mjs <carpeta-con-capturas> <slug> ["Título"]
 *
 * POR QUÉ EXISTE
 *
 * Pablo lo pidió el 21 de agosto, después de mandar ocho tandas de capturas de
 * Headway: «cuando se te acabe la ventana de contexto debes ver todos estos
 * ejemplos para seguir haciéndolos así, que nunca se te olvide». Las capturas
 * llegan a una carpeta de subidas que vive lo que vive la sesión; lo que está
 * en el repositorio, no se pierde. `REDACCION.md` guarda las REGLAS que salen
 * de ellas, y esto guarda las PRUEBAS, que es lo que permite volver a mirar y
 * discutir una regla en vez de creérsela.
 *
 * EL PESO IMPORTA, así que no van tal cual. Una captura de iPhone son 200 kB
 * de PNG; doscientas son cuarenta megas y eso no cabe en un repositorio que
 * ya lleva las fotografías de los shorts dentro. Se reescriben a WebP de 520
 * de ancho, que es donde el texto sigue leyéndose entero en pantalla y cada
 * captura baja a unos 40 kB. Doscientas ocupan ocho megas.
 *
 * Como en `mete-cubiertas.mjs`, la conversión la hace Chromium: en este
 * contenedor no hay ni cwebp, ni sharp, ni PIL.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "node:fs";
import { join, basename, extname } from "node:path";
import { chromium } from "playwright";

const [carpeta, slug, titulo] = process.argv.slice(2);
if (!carpeta || !slug) {
  console.error('uso: node scripts/mete-referencia.mjs <carpeta> <slug> ["Título"]');
  process.exit(1);
}

const arg = (n, d) => {
  const i = process.argv.indexOf(n);
  return i > 0 ? process.argv[i + 1] : d;
};
const ANCHO = Number(arg("--ancho", 520));
const CALIDAD = Number(arg("--calidad", 0.6));

const DESTINO = new URL(`../referencia/${slug}/`, import.meta.url);
mkdirSync(DESTINO, { recursive: true });

/* En el orden en que Pablo las hizo, que es el orden de lectura del resumen.
   Los nombres traen el número al final —«…-12.png»—, así que ordenar por
   texto deja la 10 antes de la 2. */
const numero = (f) => {
  const m = f.match(/-(\d+)\.\w+$/);
  return m ? Number(m[1]) : 1;
};
const capturas = readdirSync(carpeta)
  .filter((f) => /\.(png|jpe?g)$/i.test(f) && !f.startsWith("._"))
  .sort((a, b) => numero(a) - numero(b));

if (!capturas.length) {
  console.error("No hay capturas en esa carpeta.");
  process.exit(1);
}

const navegador = await chromium.launch({ executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const pagina = await navegador.newPage();
let peso = 0;

for (const [i, f] of capturas.entries()) {
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
      return lienzo.toDataURL("image/webp", calidad);
    },
    [b64, tipo, ANCHO, CALIDAD],
  );
  const bytes = Buffer.from(datos.split(",")[1], "base64");
  const nombre = `${String(i + 1).padStart(2, "0")}.webp`;
  writeFileSync(new URL(nombre, DESTINO), bytes);
  peso += bytes.length;
}

await navegador.close();

if (titulo && !existsSync(new URL("titulo.txt", DESTINO))) {
  writeFileSync(new URL("titulo.txt", DESTINO), `${titulo}\n`);
}

console.log(
  `referencia/${slug}: ${capturas.length} capturas · ${(peso / 1024 / 1024).toFixed(1)} MB` +
    ` · ${Math.round(peso / capturas.length / 1024)} kB cada una`,
);
