/* ¿CUÁNTO AIRE QUEDA DEBAJO DEL TEXTO EN CADA PANTALLA DEL MURO?

   Es la única comprobación que importa desde que el texto lo escribe Pablo.
   Su nota de maquetación es terminante —«ni una tarjeta debe requerir scroll
   interno: si no cabe, se parte, nunca se recorta el texto»—, así que lo que
   hay que saber de cada pantalla es una cosa: si cabe, y con cuánto margen.

   QUÉ DICE CADA COLUMNA

     palabras   las del párrafo y las del rayo, si lo lleva
     ajuste     1 = la letra va a su tamaño. Menos de 1 = ha tenido que
                encoger para caber, y eso es una pantalla que hay que partir
     aire       renglones vacíos entre lo último escrito y el borde de abajo.
                Negativo = SE SALE. Más de ocho = se lee como un olvido

   Medido sin banda de imagen —las historias de `soloPortada`— caben unas 190
   palabras, o 165 si la pantalla lleva rayo.

   Antes hay que construir y servir:
     npx vite build && python3 -m http.server 4173 --directory dist &

   Uso:
     node scripts/aire.mjs          todas las historias del muro
     node scripts/aire.mjs 2        solo la tercera
*/
import { chromium } from "playwright-core";
import { sirveFotos } from "./fotos-al-vuelo.mjs";

const nav = await chromium.launch({
  executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const pag = await nav.newPage({ viewport: { width: 390, height: 844 } });
await sirveFotos(pag);
await pag.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
await pag.waitForTimeout(2500);

const pedidas = process.argv.slice(2).map(Number).filter((n) => !Number.isNaN(n));
const cuantas = await pag.evaluate(() => {
  const c = document.querySelector(".muro-pase");
  return Math.round(c.scrollHeight / c.clientHeight);
});
const cuales = pedidas.length ? pedidas : [...Array(cuantas).keys()];

let malas = 0;
for (const n of cuales) {
  await pag.evaluate((k) => {
    const c = document.querySelector(".muro-pase");
    c.scrollTo({ top: c.clientHeight * k, behavior: "instant" });
  }, n);
  await pag.waitForTimeout(1200);
  /* El título de la que se ve, no el del primer `.muro-pagina` del DOM: el
     muro solo monta tres a la vez y el primero suele ser el de otra. */
  const titulo = await pag.evaluate(() => {
    const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
      const c = e.getBoundingClientRect();
      return c.top > -50 && c.top < 50;
    });
    return vis?.querySelector("h2")?.textContent ?? "?";
  });
  console.log(`\n${n} · ${titulo}`);

  for (let p = 0; p < 24; p++) {
    if (p) {
      /* Tocar a la derecha avanza de página, igual que en `mirar.mjs`. */
      await pag.mouse.click(390 * 0.8, 844 * 0.55);
      await pag.waitForTimeout(650);
    }
    const r = await pag.evaluate(() => {
      const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
        const c = e.getBoundingClientRect();
        return c.top > -50 && c.top < 50;
      });
      const hoja = vis?.querySelector(".muro-hoja");
      if (!hoja) return null;
      const texto = vis.querySelector(".short-cuerpo");
      if (!texto) return { portada: true };
      /* Lo último escrito es el rayo si lo hay, y si no el párrafo. Medir
         siempre desde el párrafo daba el rayo por aire y salían cuatro
         renglones de hueco donde no había ninguno. */
      const idea = vis.querySelector(".short-idea");
      const ultimo = (idea ?? texto).getBoundingClientRect().bottom;
      const tope = hoja.getBoundingClientRect().bottom - parseFloat(getComputedStyle(hoja).paddingBottom);
      const linea = parseFloat(getComputedStyle(texto).lineHeight) || 24;
      const cuenta = (e) => (e ? e.innerText.split(/\s+/).filter(Boolean).length : 0);
      return {
        palabras: cuenta(texto) + cuenta(idea),
        ajuste: getComputedStyle(vis).getPropertyValue("--ajuste").trim() || "1",
        aire: +((tope - ultimo) / linea).toFixed(1),
        rayo: !!idea,
      };
    });
    if (!r) break;
    /* La primera portada es la de esta historia; la segunda ya es la de la
       siguiente —pasar de la última página lleva al muro de al lado— y ahí
       hay que parar, o cada historia se mide dos veces. */
    if (r.portada) {
      if (p === 0) { console.log("   portada"); continue; }
      break;
    }
    const mal = r.aire < 0 || r.ajuste !== "1";
    if (mal) malas++;
    console.log(
      `   ${String(p).padStart(2)}  ${String(r.palabras).padStart(3)} pal` +
      `  ajuste ${r.ajuste.padEnd(5)}  aire ${String(r.aire).padStart(5)}` +
      (r.rayo ? "  rayo" : "      ") +
      (r.aire < 0 ? "  ← SE SALE" : r.ajuste !== "1" ? "  ← encoge" : r.aire > 8 ? "  · mucho hueco" : ""),
    );
  }
}
await nav.close();
console.log(malas ? `\n${malas} pantallas que no caben` : "\nTodas caben a su tamaño.");
process.exit(malas ? 1 : 0);
