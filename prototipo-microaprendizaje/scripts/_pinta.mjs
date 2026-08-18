/* Pinta la app a 750x1624 —la medida de los vídeos— para poder medirla con
   el mismo detector y comparar cifra contra cifra. */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";
const DIST = "dist-artefacto/assets", act = readdirSync(DIST);
const leer = (e) => readFileSync(join(DIST, act.find(a => a.startsWith("index") && a.endsWith(e)) ?? act.find(a => a.endsWith(e))), "utf8");
let FOTOS = "window.__FOTOS={};";
try { const m = readFileSync("movil.html", "utf8"); const i = m.indexOf("window.__FOTOS = ");
  if (i > 0) FOTOS = m.slice(i, m.indexOf("\n", i)); } catch {}
const pantalla = process.argv[2] ?? "inicio";
const html = `<!doctype html><html lang=es><head><meta charset=utf-8>
<style>${leer(".css")}</style><style>
html,body{margin:0;padding:0;height:auto!important;overflow:hidden!important}
.shell{width:375px!important;height:812px!important;min-height:0!important}
.regalo-velo,.valoracion-velo{display:none!important}</style></head><body><div id=root></div>
<script>window.__PANTALLA=${JSON.stringify(pantalla)};${FOTOS}</script>
<script type="module">${leer(".js")}</script></body></html>`;
const nav = await chromium.launch();
const pag = await nav.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
await pag.clock.install();
await pag.setContent(html, { waitUntil: "domcontentloaded", timeout: 120000 });
await pag.clock.runFor(6000); await pag.waitForTimeout(1200);
console.log(await pag.evaluate(() => {
  const r = (s) => { const e = document.querySelector(s); if (!e) return null;
    const b = e.getBoundingClientRect(); const c = getComputedStyle(e);
    return `${Math.round(b.width*2)}x${Math.round(b.height*2)} @${Math.round(b.top*2)} ${c.fontSize}`; };
  const alto = (s) => { const e = document.querySelector(s); return e ? Math.round(e.getBoundingClientRect().height*2) : null; };
  const fichas = [...document.querySelectorAll(".carrusel .ficha")].slice(0,4)
    .map(e => Math.round(e.getBoundingClientRect().height*2));
  const hijos = [...(document.querySelector(".carrusel .ficha")?.children ?? [])].map(c => {
    const b = c.getBoundingClientRect(); const cs = getComputedStyle(c);
    return `${c.className}: h${Math.round(b.height*2)} mt${cs.marginTop} mb${cs.marginBottom}`; });
  const chip = document.querySelector(".carrusel .chip-cat");
  const cs = chip && getComputedStyle(chip);
  return { chipBorde: cs && `${cs.border} | bg ${cs.backgroundColor} | h ${Math.round(chip.getBoundingClientRect().height*2)}`,
           hijos, carrusel: alto(".carrusel"), fichas,
           bloques: [...document.querySelectorAll(".bloque")].map(e =>
             `${e.querySelector("h2")?.textContent}: y${Math.round(e.getBoundingClientRect().top*2)} h${Math.round(e.getBoundingClientRect().height*2)}`) };
}));
writeFileSync(process.argv[3] ?? "/tmp/vid/app.png", await pag.screenshot());
await nav.close();
