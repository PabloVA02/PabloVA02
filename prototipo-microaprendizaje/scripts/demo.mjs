/* ==========================================================================
   Regenera el payload de demo.html a partir de la compilación de Vite.

   demo.html es la app entera en un solo fichero: el marco de móvil vive en el
   fichero y la app va dentro, como HTML de una pieza, dentro de un
   <script type="text/plain"> que el arranque convierte en blob y mete en un
   iframe. Así el prototipo se abre con doble clic, sin servidor ni red.

   Este script SOLO toca el payload. El marco, los estilos del marco y el
   arranque se quedan como estén: se localiza el bloque por sus marcas y se
   sustituye lo de dentro.

       npm run build && node scripts/demo.mjs

   El `</script` del bundle se guarda como __PROTO_SCRIPT_CLOSE__ porque si no
   cerraría de golpe el <script> contenedor; el arranque lo deshace al leerlo.
   ========================================================================== */

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RAIZ = new URL("..", import.meta.url).pathname;
const DIST = join(RAIZ, "dist", "assets");
const DEMO = join(RAIZ, "demo.html");

const ABRE = '<script type="text/plain" id="app-payload">';
const MARCA_CIERRE = "__PROTO_SCRIPT_CLOSE__";

const activos = readdirSync(DIST);
const nombre = (ext) => {
  const f = activos.find((a) => a.endsWith(ext));
  if (!f) throw new Error(`No hay ningún ${ext} en dist/assets. ¿Has compilado?`);
  return join(DIST, f);
};

const css = readFileSync(nombre(".css"), "utf8").trim();
const js = readFileSync(nombre(".js"), "utf8").trim();

const payload = `<!doctype html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Curva</title>
<style>
html, body { margin: 0; height: 100%; }
${css}
</style>
</head>
<body>
<div id="root"></div>
<script type="module">
${js.split("</script").join(MARCA_CIERRE)}
${MARCA_CIERRE}>
</body>
</html>
`;

const demo = readFileSync(DEMO, "utf8");
const inicio = demo.indexOf(ABRE);
if (inicio < 0) throw new Error("No encuentro el bloque del payload en demo.html");
const fin = demo.indexOf("</script>", inicio);

const salida = demo.slice(0, inicio + ABRE.length) + payload + demo.slice(fin);
writeFileSync(DEMO, salida);

const kb = (n) => `${Math.round(n / 1024)} kB`;
console.log(`demo.html regenerado · css ${kb(css.length)} · js ${kb(js.length)}`);
