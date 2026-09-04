/* ==========================================================================
   LA TARJETA DE «¿SABÍAS QUE…?», EN VARIOS ACABADOS, PARA DECIDIR

       node scripts/tarjeta-sabias.mjs      -> scratchpad/marco.png

   Antes hay que construir y servir:
       npx vite build && python3 -m http.server 4173 --directory dist &

   Pablo, el 4 de septiembre, después de quitar los dibujos: «hazlo
   estéticamente más bonito si puedes, pero está más o menos bien así; no sé si
   poner un cuadrado o así que rodee la frase, como antes».

   Pinta la pantalla de verdad y le va cambiando el acabado a la tarjeta. Medio
   tono de diferencia sobre el papel crema no se decide en una paleta: hay que
   verlo con la frase dentro y los tres botones debajo.

   Los candidatos van en CASOS. Lo que está puesto en la app vive en
   `.sab-carta`, en `styles.css`.
   ========================================================================== */
import { chromium } from "playwright-core";
import sharp from "sharp";
const S = "/tmp/claude-0/-home-user-PabloVA02/73d17f4d-3a55-5bf2-b66d-69e35076349c/scratchpad";

const CASOS = [
  { id: "C1", rot: "C1 · Filo 0.16, radio 30, sin relleno", css: `
      .sab-carta{box-shadow:inset 0 0 0 1px rgba(36,31,26,0.16)!important;padding:34px 24px 26px!important}` },
  { id: "C2", rot: "C2 · Filo 0.13, radio 26", css: `
      .sab-carta{box-shadow:inset 0 0 0 1px rgba(36,31,26,0.13)!important;border-radius:26px!important;
        padding:34px 24px 26px!important}` },
  { id: "C3", rot: "C3 · Filo 0.13 y un relleno mínimo", css: `
      .sab-carta{box-shadow:inset 0 0 0 1px rgba(36,31,26,0.12)!important;border-radius:26px!important;
        background:rgba(255,255,255,0.42)!important;padding:34px 24px 26px!important}` },
  { id: "C4", rot: "C4 · Relleno mínimo, sin filo, sombra suave", css: `
      .sab-carta{border-radius:26px!important;background:rgba(255,255,255,0.55)!important;
        box-shadow:0 10px 30px rgba(36,31,26,0.06)!important;padding:34px 24px 26px!important}` },
];


const nav = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const p = await nav.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
const err = []; p.on("pageerror", (e) => err.push(String(e).slice(0, 160)));
await p.goto("http://localhost:4173/?p=sabias", { waitUntil: "networkidle" });
await p.waitForTimeout(2200);

const tomas = [];
for (const c of CASOS) {
  await p.evaluate((css) => {
    let e = document.getElementById("prueba-marco");
    if (!e) { e = document.createElement("style"); e.id = "prueba-marco"; document.head.append(e); }
    e.textContent = css;
  }, c.css);
  await p.evaluate(() => { const q = document.querySelector(".sab-pase"); q.scrollTop = 0; });
  await p.waitForTimeout(420);
  tomas.push({ c, buf: await p.screenshot() });
}

const W = 750, H = 1624, PIE = 62;
await sharp({ create: { width: W * tomas.length, height: H + PIE, channels: 3, background: "#0c0c0c" } })
  .composite([
    ...tomas.map((t, i) => ({ input: t.buf, left: i * W, top: PIE })),
    ...tomas.map((t, i) => ({
      input: Buffer.from(`<svg width="${W}" height="${PIE}" xmlns="http://www.w3.org/2000/svg">
        <text x="22" y="42" font-family="Helvetica,Arial" font-size="28" font-weight="700" fill="#f2ece1">${t.c.rot}</text></svg>`),
      left: i * W, top: 0,
    })),
  ]).png().toFile(`${S}/marco.png`);
console.log("hecho · bocetos en pantalla:", await p.locator(".boceto").count(), "· errores:", err.length ? err : "ninguno");
await nav.close();
