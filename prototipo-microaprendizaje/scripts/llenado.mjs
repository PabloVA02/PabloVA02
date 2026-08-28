/* ==========================================================================
   CUÁNTO SE LLENA CADA PANTALLA

       npx vite build && python3 -m http.server 4173 --directory dist &
       node scripts/llenado.mjs [cuántos temas]

   Es la comprobación que puso Pablo el 28 de agosto: «una página bien paginada debe quedar
   prácticamente llena; si al terminar ves páginas con más de un 20 % de hueco
   sobrante y todavía quedaban bloques por colocar, la lógica sigue mal».

   La última pantalla de cada tema no cuenta, y es su propio criterio: ahí ya
   no quedan bloques por colocar, el texto se ha acabado.

   Sale con código 1 si alguna se queda corta, así que vale para una tubería.

   Y SI HACE FALTA VER POR QUÉ, el reparto lleva su propio diario: se enciende
   con `window.__PAGDEBUG = true` en la consola y dice, pantalla por pantalla,
   cuánto se ha llenado y qué bloque fue el que no cupo. Ver `reparte` en
   `src/Shorts.tsx`.
   ========================================================================== */
import { chromium } from "playwright-core";
import { sirveFotos } from "./fotos-al-vuelo.mjs";
const nav = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const pag = await nav.newPage({ viewport: { width: 375, height: 812 } });
pag.on("console", (m) => { if (m.type() === "warning") console.log("AVISO:", m.text().slice(0, 200)); });
await sirveFotos(pag);
await pag.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
await pag.waitForTimeout(2500);
let mal = 0;
for (let h = 0; h < Number(process.argv[2] ?? 10); h++) {
  await pag.evaluate((k) => { const c = document.querySelector(".muro-pase"); c.scrollTo({ top: c.clientHeight * k, behavior: "instant" }); }, h);
  await pag.waitForTimeout(1500);
  const cab = await pag.evaluate(() => {
    const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => { const c = e.getBoundingClientRect(); return c.top > -50 && c.top < 50; });
    return { titulo: vis?.querySelector("h2")?.textContent ?? "?", n: vis?.querySelectorAll(".muro-tramo").length ?? 0 };
  });
  const pcts = [];
  for (let p = 1; p <= cab.n; p++) {
    await pag.mouse.click(300, 446);
    await pag.waitForTimeout(420);
    pcts.push(await pag.evaluate(() => {
      const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => { const c = e.getBoundingClientRect(); return c.top > -50 && c.top < 50; });
      const hoja = vis?.querySelector(".muro-hoja:not(.muro-medidor)");
      const cuerpo = hoja?.querySelector(".short-cuerpo");
      if (!cuerpo || !cuerpo.children.length) return null;
      const s = getComputedStyle(hoja);
      const alto = hoja.getBoundingClientRect().height - parseFloat(s.paddingTop) - parseFloat(s.paddingBottom);
      const hijos = [...cuerpo.children];
      const usado = hijos[hijos.length - 1].getBoundingClientRect().bottom - cuerpo.getBoundingClientRect().top;
      return { pct: Math.round((usado / alto) * 100), scroll: cuerpo.scrollHeight > cuerpo.clientHeight + 1 };
    }));
  }
  const buenas = pcts.slice(0, -1).filter(Boolean);
  const flojas = buenas.filter((f) => f.pct < 80).length;
  mal += flojas;
  console.log(
    `${cab.titulo}  ${cab.n} pantallas · ${pcts.map((f) => (f ? f.pct + "%" : "—")).join(" ")}` +
      (pcts.some((f) => f?.scroll) ? "  ← HAY SCROLL" : "") +
      (flojas ? `  ← ${flojas} por debajo del 80 %` : "  ✓"),
  );
}
await nav.close();
console.log(mal ? `\n${mal} pantallas por debajo del 80 % con bloques todavía por colocar` : "\nNinguna pantalla por debajo del 80 % salvo la última de cada tema.");
process.exit(mal ? 1 : 0);
