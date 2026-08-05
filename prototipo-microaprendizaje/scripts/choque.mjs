/* ¿Tapa el texto al «Seguir» en algún tamaño de móvil?

   Lo comprueba en varias pantallas a la vez. Los móviles bajos —un iPhone SE
   mide 667 de alto— son los que se rompen primero, así que medir solo en uno
   normal no vale.

   Hace falta la app servida en el 4173. Uso: node scripts/choque.mjs
*/
import { chromium } from "playwright-core";
const b = await chromium.launch({ executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
for (const [nombre, w, h] of [["SE", 375, 667], ["normal", 390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
  await p.waitForTimeout(2800);
  const malos = [];
  const huecos = [];
  for (let i = 0; i < 24; i++) {
    if (i) { await p.evaluate(() => { const c = document.querySelector(".muro-pase"); c.scrollBy({ top: c.clientHeight, behavior: "instant" }); }); await p.waitForTimeout(950); }
    const d = await p.evaluate(() => {
      const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => { const c = e.getBoundingClientRect(); return c.top > -50 && c.top < 50; });
      const ent = vis?.querySelector(".muro-entrada"), seg = vis?.querySelector(".muro-tirar"), h2 = vis?.querySelector(".muro-hoja h2");
      if (!ent || !seg) return null;
      const cuerpo = vis.querySelector(".muro-hoja-cuerpo");
      return { t: h2?.textContent ?? "", hueco: Math.round(seg.getBoundingClientRect().top - ent.getBoundingClientRect().bottom),
               rebosa: cuerpo ? cuerpo.scrollHeight - cuerpo.clientHeight : 0 };
    });
    if (!d) continue;
    huecos.push(d.hueco);
    if (d.hueco < 12 || d.rebosa > 1) malos.push(`${i}:${d.t} (hueco ${d.hueco}${d.rebosa > 1 ? ", rebosa " + d.rebosa : ""})`);
  }
  console.log(`${nombre} (${w}x${h}): hueco ${Math.min(...huecos)}–${Math.max(...huecos)}px` + (malos.length ? `\n   TAPAN EL SEGUIR: ${malos.join(" | ")}` : "  · ninguno tapa el Seguir"));
  await p.close();
}
await b.close();
