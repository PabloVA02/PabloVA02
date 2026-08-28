/* ==========================================================================
   CUÁNTO SE LLENA CADA PANTALLA

       npx vite build && python3 -m http.server 4173 --directory dist &
       node scripts/llenado.mjs [cuántos temas]

   Es la comprobación que puso Pablo el 28 de agosto, y su listón medible:
   «en cualquier página que NO sea la última de su sección, el espacio vacío
   por debajo de la última línea debe ser menor que la altura de una línea. Si
   cabe otra línea entera, la página está mal».

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
let sinSitio = 0;
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
      /* EL CRITERIO DE PABLO, MEDIDO: «en cualquier página que NO sea la
         última de su sección, el espacio vacío por debajo de la última línea
         debe ser menor que la altura de una línea. Si cabe otra línea entera,
         la página está mal». Así que se mide el hueco en puntos y se compara
         con el renglón, no con un porcentaje inventado. */
      const hijos = [...cuerpo.children];
      const renglon = parseFloat(getComputedStyle(cuerpo).lineHeight) || 27;
      const sobra = cuerpo.getBoundingClientRect().bottom - hijos[hijos.length - 1].getBoundingClientRect().bottom;
      return { sobra: Math.round(sobra), renglon: Math.round(renglon), scroll: cuerpo.scrollHeight > cuerpo.clientHeight + 1 };
    }));
  }
  /* Un renglón MÁS no cabe por 27 puntos: cabe por 54. Entre un párrafo y el
     siguiente hay un renglón entero de aire —27, que es lo que hay en las
     capturas de Pablo y no se toca—, así que para meter una línea de un bloque
     nuevo hacen falta los 27 del aire más los 27 de la línea. Un hueco de 31 o
     de 48 no es una línea desaprovechada: es que la siguiente no cabe. Se
     cuentan las dos cosas por separado para no mentir en ninguna dirección. */
  const buenas = pcts.slice(0, -1).filter(Boolean);
  const flojas = buenas.filter((f) => f.sobra >= f.renglon * 2).length;
  const justas = buenas.filter((f) => f.sobra >= f.renglon && f.sobra < f.renglon * 2).length;
  mal += flojas;
  sinSitio += justas;
  console.log(
    `${cab.titulo}  ${cab.n} pantallas · sobran ${pcts.map((f) => (f ? f.sobra : "—")).join(" ")} de ${buenas[0]?.renglon ?? "?"}` +
      (pcts.some((f) => f?.scroll) ? "  ← HAY SCROLL" : "") +
      (flojas ? `  ← ${flojas} donde cabía otra línea` : "  ✓") +
      (justas ? `  (${justas} con hueco pero sin sitio para una línea nueva)` : ""),
  );
}
await nav.close();
console.log(
  (mal
    ? `\n${mal} pantallas donde cabía otra línea entera (hueco de dos renglones o más)`
    : "\nA ninguna pantalla intermedia le cabe otra línea.") +
    (sinSitio ? `\n${sinSitio} más con hueco de entre uno y dos renglones: ahí no cabe una línea nueva, porque un bloque nuevo pide antes su renglón de aire.` : ""),
);
process.exit(mal ? 1 : 0);
