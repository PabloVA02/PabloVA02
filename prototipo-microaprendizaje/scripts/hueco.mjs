/* ¿Cuánto aire queda debajo del texto en las primeras portadas?

   La entrada tiene que llegar abajo dejando entre una y tres líneas. Si deja
   más, se ve el agujero; si deja menos, tapa el «Seguir».

   Hace falta la app servida en el 4173:
     npx vite build && python3 -m http.server 4173 --directory dist &
   Uso:  node scripts/hueco.mjs
*/
import { chromium } from "playwright-core";
const b = await chromium.launch({ executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const p = await b.newPage({ viewport: { width: 390, height: 823 } });
await p.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
await p.waitForTimeout(3000);
console.log("short".padEnd(4), "palabras".padEnd(9), "hueco bajo el texto");
for (let i = 0; i < 60; i++) {
  if (i) {
    await p.evaluate(() => { const c = document.querySelector(".muro-pase"); c.scrollBy({ top: c.clientHeight, behavior: "instant" }); });
    await p.waitForTimeout(1400);
  }
  const r = await p.evaluate(() => {
    const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
      const c = e.getBoundingClientRect(); return c.top > -50 && c.top < 50;
    });
    if (!vis) return null;
    const ent = vis.querySelector(".muro-entrada");
    const seg = vis.querySelector(".muro-tirar");
    const h2 = vis.querySelector(".muro-hoja h2");
    if (!ent || !seg) return null;
    return {
      titulo: h2?.textContent?.slice(0, 30) ?? "",
      palabras: ent.textContent.trim().split(/\s+/).length,
      hueco: +(seg.getBoundingClientRect().top - ent.getBoundingClientRect().bottom).toFixed(0),
      alturaLinea: +getComputedStyle(ent).lineHeight.replace("px", ""),
    };
  });
  if (r) console.log(String(i).padEnd(4), String(r.palabras).padEnd(9),
    `${r.hueco}px ≈ ${(r.hueco / r.alturaLinea).toFixed(1)} líneas`.padEnd(24), r.titulo);
}
await b.close();
