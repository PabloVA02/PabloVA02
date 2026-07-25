/* ==========================================================================
   Empaqueta la app en un solo HTML sin cabeceras, listo para publicarla como
   página. A diferencia de `demo.mjs`, aquí NO va el marco de móvil: la página
   es la app, así que en un teléfono ocupa la pantalla entera y en un
   ordenador se queda centrada en su ancho de móvil, que es como está hecha.

       npm run build && node scripts/artefacto.mjs
   ========================================================================== */

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RAIZ = new URL("..", import.meta.url).pathname;
const DIST = join(RAIZ, "dist", "assets");

const activos = readdirSync(DIST);
const leer = (ext) => {
  const f = activos.find((a) => a.endsWith(ext));
  if (!f) throw new Error(`No hay ningún ${ext} en dist/assets. ¿Has compilado?`);
  return readFileSync(join(DIST, f), "utf8").trim();
};

const salida = `<title>Curva · prototipo</title>
<style>
${leer(".css")}
/* La página es la app: sin marco, sin márgenes y sin barra de desplazamiento */
html, body { margin: 0; height: 100%; overflow: hidden; background: #e7ddcc; }
#root { height: 100%; }
</style>
<div id="root"></div>
<script type="module">
${leer(".js")}
</script>`;

writeFileSync(join(RAIZ, "artefacto.html"), salida);
console.log(`artefacto.html listo · ${(salida.length / 1024).toFixed(0)} kB`);
