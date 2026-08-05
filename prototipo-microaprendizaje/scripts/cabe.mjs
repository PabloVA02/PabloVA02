/* ¿Cabe este título en una línea?

   Lo pinta con la tipografía exacta del título de la app y devuelve su ancho.
   El tope son 363 puntos: por debajo de ahí entra en una línea en cualquier
   móvil, porque la app encoge el título hasta el 78 % antes de rendirse.

   Uso:  node scripts/cabe.mjs "Por qué agarra un ancla" "El sifón del desagüe"
*/
import { chromium } from "playwright-core";
const b = await chromium.launch({ executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const p = await b.newPage({ viewport: { width: 390, height: 823 } });
await p.setContent(`<style>body{margin:0}span{font-family:"Avenir Next",Avenir,"Segoe UI Variable Display","Segoe UI",system-ui,-apple-system,"Helvetica Neue",sans-serif;font-size:17.16px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;white-space:pre}</style><span id=m></span>`);
const w = (t) => p.evaluate((t)=>{const e=document.getElementById("m");e.textContent=t;return +e.getBoundingClientRect().width.toFixed(0);}, t);
for (const t of process.argv.slice(2)) {
  const a = await w(t);
  console.log(`${String(a).padStart(4)}  ${a <= 283 ? "sin encoger   " : a <= 363 ? "encoge un poco" : "SE PARTE      "}  ${t}`);
}
await b.close();
