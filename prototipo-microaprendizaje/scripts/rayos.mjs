/* Comprobación de la orden de Pablo: ningún rayo puede quedar partido. Un rayo
   partido se reconoce porque la mitad de abajo lleva `data-sigue`, que es lo
   que esconde el icono. Si aparece uno solo, la regla está rota. */
import { chromium } from "playwright-core";
import { sirveFotos } from "./fotos-al-vuelo.mjs";
const nav = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const pag = await nav.newPage({ viewport: { width: 375, height: 812 } });
await sirveFotos(pag);
await pag.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
await pag.waitForTimeout(2500);
let partidos = 0, rayos = 0, temas = 0;
for (let h = 0; h < Number(process.argv[2] ?? 15); h++) {
  await pag.evaluate((k) => { const c = document.querySelector(".muro-pase"); c.scrollTo({ top: c.clientHeight * k, behavior: "instant" }); }, h);
  await pag.waitForTimeout(1200);
  const n = await pag.evaluate(() => {
    const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => { const c = e.getBoundingClientRect(); return c.top > -50 && c.top < 50; });
    return vis?.querySelectorAll(".muro-tramo").length ?? 0;
  });
  if (!n) continue;
  temas++;
  for (let p = 1; p <= n; p++) {
    await pag.mouse.click(300, 446);
    await pag.waitForTimeout(380);
    const r = await pag.evaluate(() => {
      const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => { const c = e.getBoundingClientRect(); return c.top > -50 && c.top < 50; });
      const hoja = vis?.querySelector(".muro-hoja:not(.muro-medidor)");
      return {
        rayos: hoja?.querySelectorAll("blockquote.rayo").length ?? 0,
        partidos: hoja?.querySelectorAll('blockquote.rayo[data-sigue="true"]').length ?? 0,
      };
    });
    rayos += r.rayos; partidos += r.partidos;
  }
}
await nav.close();
console.log(`${temas} temas · ${rayos} rayos pintados · ${partidos} partidos`);
console.log(partidos ? "✗ HAY RAYOS CORTADOS" : "✓ ningún rayo cortado");
process.exit(partidos ? 1 : 0);
