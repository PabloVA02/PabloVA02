/**
 * Mete en `libros/cubiertas.ts` las cubiertas que dibuja Pablo.
 *
 *   node scripts/mete-cubiertas.mjs <carpeta> [--ancho 480] [--calidad 0.82]
 *
 * La carpeta lleva un PNG por libro, y el nombre del fichero es el `id` del
 * catálogo: `habitos-atomicos.png`, `spqr.png`. Un nombre que no esté en el
 * catálogo se rechaza en vez de colarse con una clave que no pinta nadie.
 *
 * POR QUÉ VAN INCRUSTADAS Y NO COMO FICHERO
 *
 * El simulador que se publica no tiene salida a la red: una portada que fuera
 * una ruta saldría en blanco. Así que viajan dentro del propio JavaScript, en
 * WebP y como texto, igual que las fotografías de los shorts.
 *
 * EL ANCHO: 480, y sale de una medida, no de un gusto.
 *
 * El sitio más grande donde se pinta una cubierta es la tira de «Tendencias»,
 * 172 puntos; en un móvil a dos son 344 reales y a tres, 516. La casilla de la
 * biblioteca son 148 y la ficha del libro, 152.
 *
 * Empezó en 620 —cubría el caso de tres con holgura— y con treinta y seis
 * cubiertas eso eran 2,3 MB de los 16 que admite la publicación, quitados
 * directamente de las fotografías de los shorts. Medido a varios anchos:
 *
 *     620 → 2,3 MB      480 → 1,4 MB
 *     520 → 1,9 MB      440 → 1,3 MB
 *
 * De 620 a 480 se ahorran nueve décimas y de 480 a 440, una. Así que 480: en
 * una pantalla a tres la tira de tendencias la amplía un siete por ciento, que
 * en un dibujo plano no se distingue, y a dos —que es casi todo el mundo—
 * sobra ancho.
 *
 * LA PROPORCIÓN
 *
 * 2:3 exacto, que es a lo que están medidas la casilla y la ficha. Una
 * cubierta que venga en otra proporción se avisa y NO se recorta: recortar le
 * come el título o el nombre del autor, y eso hay que verlo antes de decidir.
 *
 * No hay conversor de imágenes en este contenedor —ni cwebp, ni sharp, ni
 * PIL—, así que la reescritura la hace Chromium, que es lo que ya usa
 * `movil.mjs` para las fotografías.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, basename, extname } from "node:path";
import { chromium } from "playwright";

const arg = (nombre, porDefecto) => {
  const i = process.argv.indexOf(nombre);
  return i > 0 ? process.argv[i + 1] : porDefecto;
};

const CARPETA = process.argv[2];
if (!CARPETA || CARPETA.startsWith("--")) {
  console.error("uso: node scripts/mete-cubiertas.mjs <carpeta> [--ancho 480] [--calidad 0.82]");
  process.exit(1);
}
const ANCHO = Number(arg("--ancho", 480));
const CALIDAD = Number(arg("--calidad", 0.82));

const RAIZ = new URL("../src/libros/", import.meta.url);
const catalogo = readFileSync(new URL("catalogo.ts", RAIZ), "utf8");
const TITULOS = new Map(
  [...catalogo.matchAll(/\{ id: "([\w-]+)", titulo: "([^"]+)", autor: "([^"]+)"/g)]
    .map((m) => [m[1], { titulo: m[2], autor: m[3] }]),
);

/* -- 1. Qué hay en la carpeta -------------------------------------------- */

const entradas = [];
for (const f of readdirSync(CARPETA).sort()) {
  if (!/\.(png|jpe?g|webp)$/i.test(f)) continue;
  const id = basename(f, extname(f));
  const ficha = TITULOS.get(id);
  if (!ficha) {
    console.error(`✗ ${f}: «${id}» no está en el catálogo. Renómbralo con su id.`);
    process.exitCode = 1;
    continue;
  }
  entradas.push({ id, fichero: join(CARPETA, f), ...ficha });
}
if (!entradas.length) {
  console.error("No hay ninguna cubierta que meter.");
  process.exit(1);
}

/* -- 2. A WebP, por Chromium --------------------------------------------- */

const navegador = await chromium.launch();
const pagina = await navegador.newPage();
const hechas = [];
for (const e of entradas) {
  const b64 = readFileSync(e.fichero).toString("base64");
  const tipo = /\.png$/i.test(e.fichero) ? "png" : /\.webp$/i.test(e.fichero) ? "webp" : "jpeg";
  const r = await pagina.evaluate(
    async ([datos, tipo, ancho, calidad]) => {
      const img = new Image();
      img.src = `data:image/${tipo};base64,${datos}`;
      await img.decode();
      const lienzo = document.createElement("canvas");
      const escala = Math.min(1, ancho / img.naturalWidth);
      lienzo.width = Math.round(img.naturalWidth * escala);
      lienzo.height = Math.round(img.naturalHeight * escala);
      lienzo.getContext("2d").drawImage(img, 0, 0, lienzo.width, lienzo.height);
      return {
        uri: lienzo.toDataURL("image/webp", calidad),
        w: img.naturalWidth,
        h: img.naturalHeight,
      };
    },
    [b64, tipo, ANCHO, CALIDAD],
  );
  const razon = r.w / r.h;
  const aviso = Math.abs(razon - 2 / 3) > 0.005 ? `  ⚠ NO es 2:3 (${razon.toFixed(3)})` : "";
  console.log(
    `  ${e.id.padEnd(22)} ${r.w}×${r.h} → ${Math.round(r.uri.length / 1024)} kB${aviso}`,
  );
  hechas.push({ ...e, uri: r.uri });
}
await navegador.close();

/* -- 3. El fichero -------------------------------------------------------- */

/* El `alt` describe la cubierta para quien no la ve, y eso no lo puede
   inventar un script: se conserva el que hubiera escrito a mano y solo se pone
   uno de relleno cuando la cubierta es nueva. */
const destino = new URL("cubiertas.ts", RAIZ);
const previo = existsSync(destino) ? readFileSync(destino, "utf8") : "";
const altPrevio = new Map(
  [...previo.matchAll(/"([\w-]+)": \{\n\s*local: [A-Z_0-9]+,\n\s*autor: "[^"]*",\n\s*licencia: "[^"]*",\n\s*alt: "((?:[^"\\]|\\.)*)",/g)]
    .map((m) => [m[1], m[2]]),
);

/* El nombre de la constante sale del identificador del libro, y un
   identificador puede empezar por número —«1984»— mientras que un nombre de
   variable de JavaScript no. Sin este prefijo se emitía `const 1984 = …` y el
   build reventaba con un error de sintaxis a mil líneas de aquí. */
const CONST = (id) => {
  const nombre = id.toUpperCase().replace(/-/g, "_");
  return /^\d/.test(nombre) ? `LIBRO_${nombre}` : nombre;
};
const sinAlt = [];

const cabecera = `import type { Foto } from "../shorts";

/* ==========================================================================
   Las cubiertas que dibuja Pablo.

   Son obra suya, no de una editorial, así que aquí no hay problema de
   derechos: se pintan tal cual, sin recorte, sin tinte y sin filtro. Vienen
   en 2:3 exacto —1024 × 1536 en el original—, que es la proporción a la que
   la casilla de la biblioteca está medida, así que entran sin deformarse.

   Se guardan en WebP a ${ANCHO} puntos de ancho e incrustadas como texto. El
   ancho no es capricho: la casilla mide 148 puntos y la pantalla del móvil
   pinta a dos, o sea 296 puntos reales; ${ANCHO} da margen de sobra para la ficha
   del libro y para una pantalla a tres.

   Van en su propio fichero y no en \`portadas.ts\` porque son cadenas de cien
   mil caracteres: metidas ahí dentro, el fichero de las portadas —que se lee
   y se edita a menudo— dejaría de poderse leer.

   GENERADO por scripts/mete-cubiertas.mjs. Lo único que se escribe a mano
   aquí es el \`alt\`, y el script lo respeta al regenerar.
   ========================================================================== */

`;

const constantes = hechas
  .map((e) => `const ${CONST(e.id)} =\n  "${e.uri}";\n`)
  .join("\n");

const registro = hechas
  .map((e) => {
    let alt = altPrevio.get(e.id);
    if (!alt) {
      alt = `La cubierta de «${e.titulo}».`;
      sinAlt.push(e.id);
    }
    return (
      `  "${e.id}": {\n` +
      `    local: ${CONST(e.id)},\n` +
      `    autor: ${JSON.stringify(`${e.titulo}, de ${e.autor}.`)},\n` +
      `    licencia: "Obra propia",\n` +
      `    alt: ${JSON.stringify(alt)},\n` +
      `  },`
    );
  })
  .join("\n");

writeFileSync(
  destino,
  `${cabecera}${constantes}\nexport const CUBIERTAS_PROPIAS: Record<string, Foto> = {\n${registro}\n};\n`,
);

const peso = hechas.reduce((s, e) => s + e.uri.length, 0);
console.log(`\n${hechas.length} cubiertas · ${(peso / 1024 / 1024).toFixed(1)} MB de texto`);
if (sinAlt.length) {
  console.log(`\n⚠  sin descripción escrita a mano, hay que ponérsela:`);
  for (const id of sinAlt) console.log(`   ${id}`);
}
