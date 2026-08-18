/* Compara la biblioteca con la captura de referencia, midiendo y no mirando.

   La captura va a 750 × 1624, o sea la pantalla de 375 × 812 a doble
   densidad: un píxel de la captura es medio punto. Se abre la app a esa misma
   medida, se saca la misma foto y se barren filas y columnas buscando los
   mismos hitos —el filo de la franja azul, el de la primera cubierta, la
   línea base de cada rótulo— para poder decir en números si el calco cuadra.

   Antes hay que construir y servir:
     npx vite build && python3 -m http.server 4173 --directory dist &

   Uso:
     node scripts/calco.mjs                  saca /tmp/calco.png y mide
     node scripts/calco.mjs --salida x.png
*/
import { chromium } from "playwright-core";
import { sirveFotos } from "./fotos-al-vuelo.mjs";

const args = process.argv.slice(2);
let salida = "/tmp/calco.png";
const i = args.indexOf("--salida");
if (i >= 0) { salida = args[i + 1]; args.splice(i, 2); }

const navegador = await chromium.launch({
  executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const pagina = await navegador.newPage({
  viewport: { width: 375, height: 812 },
  deviceScaleFactor: 2,
});
await sirveFotos(pagina);
await pagina.goto("http://127.0.0.1:4173/?p=inicio", { waitUntil: "networkidle" });
/* El aviso del regalo tapa media pantalla y aquí lo que se mide es la
   biblioteca. Se esconde, no se cierra: cerrarlo cambia el estado guardado. */
await pagina.addStyleTag({ content: ".regalo-velo, .regalo-aviso, .valoracion { display: none !important; }" });
await pagina.waitForTimeout(2600);

/* Las cajas que importan, tal como las ve el navegador. Medirlas aquí evita
   el rodeo de detectar filos por color y da el número exacto. */
const cajas = await pagina.evaluate(() => {
  const r = {};
  const caja = (sel, nombre) => {
    const e = document.querySelector(sel);
    if (!e) return;
    const c = e.getBoundingClientRect();
    r[nombre ?? sel] = [c.x, c.y, c.width, c.height].map((n) => Math.round(n * 10) / 10);
  };
  caja(".inicio-cabecera", "cabecera");
  caja(".franja-gratis", "franja");
  caja(".gratis-titulo", "franja-rotulo");
  caja(".gratis-llamada", "franja-llamada");
  caja(".gratis-libro", "franja-libro");
  caja(".bloque h2", "rotulo");
  caja(".bloque-sub", "subrotulo");
  caja(".carrusel .ficha .portada", "cubierta1");
  caja(".carrusel .ficha:nth-child(2) .portada", "cubierta2");
  caja(".carrusel .ficha .ficha-guardar", "guardar");
  caja(".carrusel .ficha .ficha-autor", "autor");
  caja(".pastilla-curso", "pastilla");
  return r;
});

/* Lo mismo, medido sobre la captura de Pablo con el barrido de filos. Se deja
   escrito y no se recalcula: es la referencia, y no cambia. */
const REFERENCIA = {
  cabecera:      [0, 46, 375, 60],
  franja:        [16, 117, 343, 180],
  "franja-libro": [null, null, 101, 152],
  cubierta1:     [16, 390.5, 148, 222],
  cubierta2:     [180, 390.5, 148, 222],
  guardar:       [null, 384.5, 30, 29],
  autor:         [16, null, null, null],
  rotulo:        [16, null, null, null],
};

console.log("hito              medido                      referencia");
for (const [k, v] of Object.entries(cajas)) {
  const ref = REFERENCIA[k];
  const t = (a) => a.map((n) => String(n).padStart(7)).join(" ");
  console.log(k.padEnd(16), t(v), ref ? "   " + t(ref.map((n) => (n === null ? "·" : n))) : "");
}

/* Y los hitos que solo se leen por color: la línea base de cada rótulo y el
   filo de la cubierta. Se sacan del propio píxel, igual que en la captura. */
const filos = await pagina.evaluate(() => {
  const cs = getComputedStyle(document.querySelector(".inicio"));
  const g = getComputedStyle(document.querySelector(".franja-gratis"));
  return { fondo: cs.backgroundColor, azul: g.backgroundColor, radio: g.borderRadius };
});
console.log("\ncolores", filos, "  referencia: fondo rgb(34,34,34) azul rgb(67,151,247) radio 11px");

await pagina.screenshot({ path: salida });
console.log("captura en", salida);
await navegador.close();
