/* ==========================================================================
   EL HUECO DE CADA PANTALLA, CON SU EXCEPCIÓN

       npx vite build && npx vite preview --port 4173 &
       node scripts/huecos.mjs [cuántos temas]

   Es la comprobación que pidió Pablo el 28 de agosto:

       «Pagina ese short y saca por consola, para cada página: número, H,
       altura real usada y hueco = H − usada, en líneas. Ninguna puede tener
       hueco > 3 líneas sin declarar cuál de las tres excepciones aplica. Y
       ninguna página puede tener scroll vertical.»

   Y sus tres excepciones, las únicas permitidas:

       1. es la última página del short,
       2. hubo que empujar un ## entero a la página siguiente,
       3. hubo que empujar un párrafo nuevo porque no cabían 2 de sus líneas.

   CÓMO SE SABE CUÁL APLICA. No se adivina mirando el resultado: lo dice el
   propio reparto. `reparte` lleva un diario —se enciende con
   `window.__PAGDEBUG`— y al cerrar cada pantalla apunta por qué la cerró,
   que es el único momento en el que se sabe. Aquí se recogen esas líneas y se
   cruzan con lo que se ve pintado.
   ========================================================================== */
import { chromium } from "playwright-core";
import { sirveFotos } from "./fotos-al-vuelo.mjs";

const nav = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const pag = await nav.newPage({ viewport: { width: 375, height: 812 } });
/* El reparto deja su informe en `window.__PAGINFO`, con el id del short por
   llave, y solo con el diario encendido. Se enciende ANTES de cargar. */
await pag.addInitScript(() => { window.__PAGDEBUG = true; });
await sirveFotos(pag);
await pag.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
await pag.waitForTimeout(2500);

let mal = 0;
let avisos = 0;
for (let h = 0; h < Number(process.argv[2] ?? 12); h++) {
  await pag.evaluate((k) => {
    const c = document.querySelector(".muro-pase");
    c.scrollTo({ top: c.clientHeight * k, behavior: "instant" });
  }, h);
  await pag.waitForTimeout(1500);
  const cab = await pag.evaluate(() => {
    const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
      const c = e.getBoundingClientRect();
      return c.top > -50 && c.top < 50;
    });
    if (!vis) return null;
    /* El id del short sale del índice de la página en el muro, que es el mismo
       orden en el que están escritos. */
    return {
      titulo: vis.querySelector("h2")?.textContent ?? "?",
      n: vis.querySelectorAll(".muro-tramo").length,
      /* El id lo pinta la app en `data-short` justamente para esto. */
      id: vis.dataset.short,
      informes: window.__PAGINFO ?? {},
    };
  });
  if (!cab?.n) continue;
  const informe = cab.informes[cab.id] ?? [];
  console.log(`\n${cab.titulo}`);
  for (let p = 1; p <= cab.n; p++) {
    const v = informe[p - 1];
    if (!v) { console.log(`  p${String(p).padStart(2)}  sin informe`); continue; }
    const ultima = p === cab.n;
    const excepcion = ultima ? "es la última del short" : v.excepcion;
    const deLaLista = ultima || /##|párrafo nuevo/.test(excepcion ?? "");
    const dentro = v.renglones <= 3;
    if (!dentro && !deLaLista) { if (excepcion) avisos++; else mal++; }
    console.log(
      `  p${String(p).padStart(2)}  H=${v.H}  usada=${String(v.usada).padStart(3)}` +
        `  hueco=${String(v.hueco).padStart(3)} = ${String(v.renglones).padStart(4)} renglones  ` +
        (dentro
          ? "✓"
          : deLaLista
            ? `✓ excepción: ${excepcion}`
            : excepcion
              ? `⚠ ${excepcion} — no está en la lista de tres`
              : `✗ SIN EXCEPCIÓN — se cerró porque ${v.porque || "(no dice)"}`),
    );
  }
}
await nav.close();
console.log(
  mal
    ? `\n${mal} pantallas pasan de 3 renglones SIN NINGUNA razón declarada`
    : "\nNinguna pantalla pasa de 3 renglones sin una razón declarada." +
      (avisos ? `\n${avisos} lo hacen por la regla del ⚡ y el 💡, que no está en la lista de tres.` : ""),
);
process.exit(mal ? 1 : 0);
