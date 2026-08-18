import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";
const DIST = process.env.DIST ?? "dist-uno/assets", act = readdirSync(DIST);
const leer = (e) => readFileSync(join(DIST, act.find(a => a.startsWith("index") && a.endsWith(e)) ?? act.find(a => a.endsWith(e))), "utf8");
let FOTOS = "window.__FOTOS={};";
try { const m = readFileSync("movil.html", "utf8"); const i = m.indexOf("window.__FOTOS = ");
  if (i > 0) FOTOS = m.slice(i, m.indexOf("\n", i)); } catch {}
const html = `<!doctype html><html lang=es><head><meta charset=utf-8>
<style>${leer(".css")}</style><style>
html,body{margin:0;padding:0;height:auto!important;overflow:hidden!important}
.shell{width:375px!important;height:812px!important;min-height:0!important}
.regalo-velo,.valoracion-velo{display:none!important}</style></head><body><div id=root></div>
<script>window.__PANTALLA=${JSON.stringify(process.argv[2] ?? "inicio")};${FOTOS}</script>
<script type="module">${leer(".js")}</script></body></html>`;
const nav = await chromium.launch();
const pag = await nav.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
await pag.clock.install();
await pag.setContent(html, { waitUntil: "domcontentloaded", timeout: 120000 });
async function avanza(ms, pasos = 8) {
  for (let k = 0; k < pasos; k++) { await pag.clock.runFor(Math.round(ms / pasos)); await pag.waitForTimeout(90); }
}
await avanza(6000);
const saltos = Number(process.env.PAG ?? 0);
for (let k = 0; k < saltos; k++) {
  await pag.locator(".lee-flecha-der").click({ timeout: 8000 }).catch(() => {});
  await avanza(700, 4);
}
if (process.env.ABAJO) await pag.evaluate(() => {
  const e = document.querySelector(".lee-scroll, .inicio-scroll, .detalle-scroll");
  if (e) e.scrollTop = e.scrollHeight;
});
await pag.waitForTimeout(300);
console.log(await pag.evaluate(() => ({
  lector: !!document.querySelector(".lector"),
  cuenta: document.querySelector(".lee-cuenta")?.textContent,
  rotulo: document.querySelector(".lee-rotulo")?.textContent })));
writeFileSync(process.argv[3] ?? "/tmp/v3/app.png", await pag.screenshot());
await nav.close();
