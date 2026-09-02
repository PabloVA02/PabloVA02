/* ==========================================================================
   LAS CUBIERTAS, DE TEXTO A FICHEROS

       node scripts/saca-cubiertas.mjs

   Pablo, el 2 de septiembre: «con las fotos y eso que estoy poniendo, ¿la
   página pesará mucho? porque ya llevamos unas cuantas y tengo la intención de
   seguir poniendo».

   La respuesta medida fue que sí, pero no por sus fotos. Una primera visita a
   la web se bajaba 28 MB, y de esos 27,8 eran JavaScript: ni una sola
   fotografía, porque las de los shorts son ficheros aparte y el navegador solo
   pide las que va a enseñar. Lo que pesaba eran las 338 cubiertas que dibuja
   Pablo, guardadas COMO TEXTO en base64 dentro de `src/libros/cubiertas.ts`:
   19,4 MB metidos en el código, que se bajan enteros la primera vez aunque no
   se mire ni una.

   Guardadas como texto no se pueden aplazar, ni cachear por separado, ni
   pedirse solo las que se ven. Y encima base64 abulta un tercio más que el
   binario. Sacándolas a ficheros, la compilación de la web las emite sueltas y
   el navegador se baja la de cada libro cuando su ficha aparece en pantalla.

   EL SIMULADOR NO SE ENTERA, y esa es la clave de que se pueda hacer:
   `vite.artefacto.config.mjs` lleva `assetsInlineLimit: MAX_SAFE_INTEGER`, o
   sea que en esa compilación vuelven a incrustarse como `data:image/webp` y el
   regex de `scripts/movil.mjs` las sigue encontrando para reescribirlas más
   pequeñas. La web lleva el límite en 0 y las emite sueltas. Mismo código,
   dos compilaciones, cada una con lo que le conviene.
   ========================================================================== */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const FUENTE = "src/libros/cubiertas.ts";
const DESTINO = "cubiertas/servir";

const previo = readFileSync(FUENTE, "utf8");
mkdirSync(DESTINO, { recursive: true });

const entradas = [...previo.matchAll(/^const ([A-Z_0-9]+) =\n  "data:image\/webp;base64,([A-Za-z0-9+/=]+)";$/gm)];
if (!entradas.length) {
  console.error("No hay ninguna cubierta en base64: o ya están sacadas, o el formato ha cambiado.");
  process.exit(1);
}

const archivo = (nombre) => nombre.toLowerCase().replace(/_/g, "-") + ".webp";

let bytes = 0;
const imports = [];
for (const [, nombre, b64] of entradas) {
  const datos = Buffer.from(b64, "base64");
  bytes += datos.length;
  writeFileSync(join(DESTINO, archivo(nombre)), datos);
  imports.push(`import ${nombre} from "../../${DESTINO}/${archivo(nombre)}";`);
}

/* El cuerpo que se conserva: todo lo que va DESPUÉS de la última constante,
   que es la tabla con sus `alt` escritos a mano. */
const ultima = entradas[entradas.length - 1];
const resto = previo.slice(ultima.index + ultima[0].length);

const cabecera = `import type { Foto } from "../shorts";

/* ==========================================================================
   Las cubiertas que dibuja Pablo.

   Son obra suya, no de una editorial, así que aquí no hay problema de
   derechos: se pintan tal cual, sin recorte, sin tinte y sin filtro. Vienen
   en 2:3 exacto —1024 × 1536 en el original—, que es la proporción a la que
   la casilla de la biblioteca está medida, así que entran sin deformarse.

   Se guardan en WebP a 520 puntos de ancho. El ancho no es capricho: la
   casilla mide 148 puntos y la pantalla del móvil pinta a dos, o sea 296
   puntos reales; 520 da margen de sobra para la ficha del libro y para una
   pantalla a tres.

   VAN COMO FICHEROS, NO COMO TEXTO, y desde el 2 de septiembre. Estaban
   incrustadas en base64 aquí mismo: veinte megas de código que el navegador
   se bajaba enteros en la primera visita aunque no se mirase ni una cubierta.
   Medido: 28 MB la primera carga, 27,8 de ellos JavaScript. Como ficheros, la
   web las emite sueltas y cada una se baja cuando su ficha se ve.

   El simulador no se entera: su compilación las vuelve a incrustar, porque
   lleva \`assetsInlineLimit\` sin tope. Lo explica \`scripts/saca-cubiertas.mjs\`.

   GENERADO por scripts/mete-cubiertas.mjs. Lo único que se escribe a mano
   aquí es el \`alt\`, y el script lo respeta al regenerar.
   ========================================================================== */

${imports.join("\n")}
`;

writeFileSync(FUENTE, cabecera + resto);
console.log(`${entradas.length} cubiertas sacadas a ${DESTINO}/ · ${(bytes / 1024 / 1024).toFixed(1)} MB en binario`);
console.log(`${FUENTE}: ${(previo.length / 1024 / 1024).toFixed(1)} MB -> ${((cabecera.length + resto.length) / 1024).toFixed(0)} kB`);
