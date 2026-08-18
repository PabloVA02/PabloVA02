/* Renderiza la app a 750x1624 —la medida de los vídeos— y mide las mismas
   cajas, para poder comparar cifra contra cifra en vez de a ojo. */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const DIST = "dist-artefacto/assets";
const act = readdirSync(DIST);
const leer = (e) => readFileSync(join(DIST,
  act.find(a => a.startsWith("index") && a.endsWith(e)) ?? act.find(a => a.endsWith(e))), "utf8");

const pantalla = process.argv[2] ?? "inicio";
/* Las fotografías se sacan del simulador ya construido: son las mismas que
   verá Pablo, y sin ellas la comparación con el vídeo no vale nada porque
   media pantalla son portadas. */
let FOTOS = "window.__FOTOS={};";
try {
  const mov = readFileSync("movil.html", "utf8");
  const i = mov.indexOf("window.__FOTOS = ");
  if (i > 0) FOTOS = mov.slice(i, mov.indexOf("\n", i));
} catch {}
const html = `<!doctype html><html lang=es><head><meta charset=utf-8>
<style>${leer(".css")}</style>
<style>html,body{margin:0;padding:0;height:auto!important;overflow:hidden!important}
.shell{width:375px!important;height:812px!important;min-height:0!important}
/* Aquí se viene a medir, no a probar el aviso del regalo: estorba y tapa. */
.regalo-velo,.valoracion-velo{display:none!important}</style>
</head><body><div id=root></div>
<script>window.__PANTALLA=${JSON.stringify(pantalla)};${FOTOS}</script>
<script type="module">${leer(".js")}</script></body></html>`;

const nav = await chromium.launch();
const pag = await nav.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
await pag.clock.install();
await pag.setContent(html, { waitUntil: "domcontentloaded", timeout: 120000 });
await pag.clock.runFor(6000); await pag.waitForTimeout(700);
/* El aviso del regalo salta con temporizador: se adelanta el reloj hasta que
   sale y luego se cierra a pasos cortos hasta que termina de irse. */
for (let i = 0; i < 14; i++) {
  await pag.evaluate(() => document.querySelector(".regalo-velo")?.click());
  await pag.clock.runFor(140); await pag.waitForTimeout(70);
}
console.log(await pag.evaluate(() => {
  const r = (s) => { const e = document.querySelector(s); if (!e) return null;
    const b = e.getBoundingClientRect(); const cs = getComputedStyle(e);
    return { x: Math.round(b.left*2), y: Math.round(b.top*2), w: Math.round(b.width*2),
             h: Math.round(b.height*2), px: cs.fontSize, peso: cs.fontWeight, col: cs.color }; };
  return { fondo: getComputedStyle(document.querySelector(".inicio")||document.body).backgroundColor,
    h1: r(".inicio-cabecera h1"), racha: r(".pastilla-racha"), seguir: r(".tarjeta-seguir"),
    segTit: r(".seguir-titulo"), segSub: r(".seguir-sub"), barra: r(".seguir-barra"),
    h2: r(".bloque h2"), sub: r(".bloque-sub"), manage: r(".bloque-accion"),
    ficha: r(".carrusel .ficha"), fTit: r(".ficha-titulo") };
}));
writeFileSync("/tmp/vid/app.png", await pag.screenshot());
await nav.close();
