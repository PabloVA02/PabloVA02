/* ==========================================================================
   ¿ACABA CADA PÁGINA EN PUNTO?

       npx vite build && npx vite preview --port 4173 &
       node scripts/puntofinal.mjs [cuántos temas]

   Pablo, el 28 de agosto: «el texto realmente intenta siempre que cada página
   acabe con un punto; puedes alargar más el margen o puedes acortarlo, pero es
   importante que se intente que acabe con el punto que mejor convenga».

   «Se intente» es la palabra: no siempre se puede. Un párrafo de doce
   renglones sin un solo punto dentro no tiene dónde cortarse, y estirar más de
   un renglón se comería el indicador de página. Así que esto no es un examen
   de aprobado o suspenso: cuenta cuántas acaban en punto y enseña las que no,
   con lo que acaban, para poder mirarlas.

   También comprueba lo que sí es innegociable: que el renglón que se estira no
   llegue a chocar con el indicador ni con los botones de la última.
   ========================================================================== */
import { chromium } from "playwright-core";
import { sirveFotos } from "./fotos-al-vuelo.mjs";

const nav = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const pag = await nav.newPage({ viewport: { width: 375, height: 812 } });
await sirveFotos(pag);
await pag.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
await pag.waitForTimeout(2500);

let enPunto = 0, total = 0, choques = 0;
for (let h = 0; h < Number(process.argv[2] ?? 11); h++) {
  await pag.evaluate((k) => {
    const c = document.querySelector(".muro-pase");
    c.scrollTo({ top: c.clientHeight * k, behavior: "instant" });
  }, h);
  await pag.waitForTimeout(1400);
  const cab = await pag.evaluate(() => {
    const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
      const c = e.getBoundingClientRect();
      return c.top > -50 && c.top < 50;
    });
    return { titulo: vis?.querySelector("h2")?.textContent ?? "?", n: vis?.querySelectorAll(".muro-tramo").length ?? 0 };
  });
  if (!cab.n) continue;
  const sueltas = [];
  for (let p = 1; p <= cab.n; p++) {
    await pag.mouse.click(300, 446);
    await pag.waitForTimeout(500);
    const v = await pag.evaluate(() => {
      const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
        const c = e.getBoundingClientRect();
        return c.top > -50 && c.top < 50;
      });
      const hoja = vis.querySelector(".muro-hoja:not(.muro-medidor)");
      const c = hoja.querySelector(".short-cuerpo");
      const ult = [...c.children].pop();
      if (!ult) return null;
      const abajo = hoja.querySelector(".muro-indice") ?? hoja.querySelector(".muro-pie-final");
      return {
        acaba: (ult.textContent ?? "").trim().replace(/­/g, "").slice(-30),
        /* El fondo del texto contra lo que haya debajo: indicador o botones. */
        holgura: abajo
          ? Math.round(abajo.getBoundingClientRect().top - ult.getBoundingClientRect().bottom)
          : 999,
      };
    });
    if (!v) continue;
    total++;
    if (/[.!?…»”]$/.test(v.acaba)) enPunto++;
    else sueltas.push(`p${p} acaba en «…${v.acaba}»`);
    if (v.holgura < 0) { choques++; sueltas.push(`p${p} PISA lo de abajo por ${-v.holgura} puntos`); }
  }
  console.log(`${cab.titulo.slice(0, 46).padEnd(47)} ${cab.n} pantallas` + (sueltas.length ? `\n   ${sueltas.join("\n   ")}` : "  ✓ todas en punto"));
}
await nav.close();
console.log(`\n${enPunto} de ${total} pantallas acaban en punto (${Math.round((enPunto / total) * 100)} %)`);
console.log(choques ? `✗ ${choques} pisan el indicador o los botones` : "✓ ninguna pisa el indicador ni los botones");
process.exit(choques ? 1 : 0);
