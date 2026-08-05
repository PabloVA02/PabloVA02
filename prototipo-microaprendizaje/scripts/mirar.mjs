/* Las cuatro pantallas de un short, una al lado de otra, en una sola imagen.

   Es la única manera de comprobar de verdad las dos cosas que se piden a la
   vez: que la imagen de cada pantalla sea la que toca y esté bien encuadrada,
   y que el texto llegue al margen de abajo sin tapar el «Seguir». Mirarlas de
   una en una cuesta cuatro capturas por short y no deja compararlas.

   Antes hay que construir y servir:
     npx vite build && python3 -m http.server 4173 --directory dist &

   Uso:
     node scripts/mirar.mjs 1              el short nº 1 del muro
     node scripts/mirar.mjs 1 2 4          varios de una vez
     node scripts/mirar.mjs --salida x.png 1
*/
import { chromium } from "playwright-core";
import { sirveFotos } from "./fotos-al-vuelo.mjs";

const args = process.argv.slice(2);
let salida = "/tmp/mirar.png";
const i = args.indexOf("--salida");
if (i >= 0) { salida = args[i + 1]; args.splice(i, 2); }
const cuales = args.map(Number).filter((n) => !Number.isNaN(n));
if (!cuales.length) { console.log("uso: node scripts/mirar.mjs 1 [2 3 …]"); process.exit(1); }

const ANCHO = 390, ALTO = 844;
const navegador = await chromium.launch({
  executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const pagina = await navegador.newPage({ viewport: { width: ANCHO, height: ALTO } });
const cuenta = await sirveFotos(pagina);
await pagina.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
await pagina.waitForTimeout(2500);

const tomas = [];
for (const n of cuales) {
  /* Al muro se llega desplazando: cada historia ocupa una pantalla entera. */
  await pagina.evaluate((n) => {
    const c = document.querySelector(".muro-pase");
    c.scrollTo({ top: c.clientHeight * n, behavior: "instant" });
  }, n);
  await pagina.waitForTimeout(1600);

  const titulo = await pagina.evaluate(() => document.querySelector(".muro-pagina h2")?.textContent ?? "");
  for (let p = 0; p < 4; p++) {
    if (p) {
      /* Tocar a la derecha avanza de página; el tercio izquierdo vuelve. */
      await pagina.mouse.click(ANCHO * 0.8, ALTO * 0.55);
      await pagina.waitForTimeout(900);
    }
    /* Sin esto la captura sale con la banda gris: la foto la trae curl desde
       Commons y tarda más que la animación de pasar de página. */
    await pagina.waitForFunction(() => {
      const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
        const c = e.getBoundingClientRect(); return c.top > -50 && c.top < 50;
      });
      const fotos = [...(vis?.querySelectorAll(".muro-foto img") ?? [])];
      /* Se pide que haya al menos una: cuando todavía no existe el elemento,
         un `every` sobre la lista vacía dice que sí y la captura sale gris. */
      return fotos.length > 0 && fotos.every((i) => i.complete && i.naturalWidth);
    }, null, { timeout: 30000 }).catch(() => console.log(`  nº${n}, pantalla ${p}: la foto no llegó a cargar`));
    /* La medida que importa del texto: cuánto aire queda debajo. En la portada
       es hasta el «Seguir»; en las páginas, hasta el borde de la tarjeta. */
    const hueco = await pagina.evaluate(() => {
      const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
        const c = e.getBoundingClientRect(); return c.top > -50 && c.top < 50;
      });
      /* En la portada lo que no se puede tapar es el «Seguir»; en las páginas
         de dentro, lo que se mide es el margen de abajo de la tarjeta. */
      const cuerpo = vis?.querySelector(".muro-hoja-cuerpo");
      const hoja = vis?.querySelector(".muro-hoja");
      const seguir = vis?.querySelector(".muro-tirar");
      if (!cuerpo || !hoja) return null;
      /* Lo último que se pinta, que en una página con dato es el dato y no el
         párrafo: si se mide desde el párrafo, la chapa del dato cuenta como
         aire y salen seis líneas donde no hay ninguna. */
      const texto = [...cuerpo.querySelectorAll("*")]
        .filter((e) => e.getBoundingClientRect().height > 4)
        .reduce((a, b) => (b.getBoundingClientRect().bottom > a.getBoundingClientRect().bottom ? b : a));
      const linea = parseFloat(getComputedStyle(cuerpo).lineHeight) || 27;
      const suelo = seguir
        ? seguir.getBoundingClientRect().top
        : hoja.getBoundingClientRect().bottom - parseFloat(getComputedStyle(hoja).paddingBottom);
      return +((suelo - texto.getBoundingClientRect().bottom) / linea).toFixed(1);
    });
    tomas.push({ n, p, titulo, hueco,
      png: (await pagina.screenshot()).toString("base64") });
  }
}

const c = cuenta();
console.log(`fotos de Commons servidas: ${c.servidas}${c.fallidas ? ` · FALLARON ${c.fallidas}` : ""}`);

/* Todas juntas en una sola imagen, rotuladas, para poder compararlas de un
   vistazo sin abrir cuatro ficheros. */
const hoja = await navegador.newPage({ viewport: { width: 1660, height: 1000 } });
await hoja.setContent(`<!doctype html><meta charset=utf-8><style>
  body { margin:0; background:#22201d; color:#f2ece1; font:12px system-ui,sans-serif; }
  .fila { display:flex; gap:10px; padding:10px; }
  figure { margin:0; }
  img { display:block; width:390px; border-radius:4px; }
  figcaption { padding:4px 2px; opacity:.75; }
</style>
${cuales.map((n) => `<div class=fila>${tomas.filter((t) => t.n === n).map((t) => `<figure>
  <img src="data:image/png;base64,${t.png}">
  <figcaption>nº${t.n} · ${t.p === 0 ? "portada" : "página " + t.p} · ${t.hueco ?? "?"} líneas de aire abajo</figcaption>
</figure>`).join("")}</div>`).join("")}`, { waitUntil: "load" });
await hoja.screenshot({ path: salida, fullPage: true });
await navegador.close();
console.log("en", salida);
