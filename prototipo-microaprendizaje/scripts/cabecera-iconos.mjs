/* ==========================================================================
   LOS CANDIDATOS DE LA PASTILLA DE LA CABECERA, UNO DEBAJO DE OTRO

       node scripts/cabecera-iconos.mjs      -> scratchpad/pastilla.png

   Antes hay que construir y servir:
       npx vite build && python3 -m http.server 4173 --directory dist &

   Pablo, el 4 de septiembre: «el dado no me gusta cómo queda, ¿qué podríamos
   poner para que quedase mejor? Prueba cosas. Y el perfil cámbialo, el
   símbolo, pon otra cosa más minimalista y bonita; haz esa parte más bonita».

   Pinta la pastilla de verdad —con su fondo, su alto y su filete— y le va
   metiendo cada candidato dentro. Un icono elegido mirándolo en una hoja
   aparte no vale: lo que decide es cómo queda al lado del otro y dentro de esa
   pastilla, a veintitrés puntos.

   Los candidatos van escritos aquí arriba, en IZQ, DER y PASTILLAS. Para
   probar otro se añade su línea. Lo que está puesto en la app vive en
   `GlyphAzar` (`src/Dado.tsx`) y `GlyphAvatar` (`src/glyphs.tsx`).
   ========================================================================== */
import { chromium } from "playwright-core";
import sharp from "sharp";
const S = "/tmp/claude-0/-home-user-PabloVA02/73d17f4d-3a55-5bf2-b66d-69e35076349c/scratchpad";

const svg = (d) => `<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>${d}</svg>`;
const T = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';

const IZQ = {
  "3D (el de ahora)": null,
  "Dado a línea": svg(`<g ${T}><rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.6"/></g>
    <g fill="currentColor"><circle cx="9" cy="9" r="1.3"/><circle cx="15" cy="9" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="9" cy="15" r="1.3"/><circle cx="15" cy="15" r="1.3"/></g>`),
  "Barajar": svg(`<g ${T}><path d="M3 7.4h3.1c1.7 0 2.7 1 3.7 2.3l3.3 4.6c1 1.3 2 2.3 3.7 2.3H21"/>
    <path d="M3 16.6h3.1c1.7 0 2.7-1 3.7-2.3l.9-1.3"/><path d="M13.9 9.6l.9-1.2c1-1.3 2-2.3 3.7-2.3H21"/>
    <path d="M18.6 3.7L21 6.1l-2.4 2.4"/><path d="M18.6 13.9L21 16.3l-2.4 2.4"/></g>`),
  "Chispa": svg(`<g ${T}><path d="M11 3.6l1.7 4.4 4.4 1.7-4.4 1.7-1.7 4.4-1.7-4.4-4.4-1.7 4.4-1.7z"/>
    <path d="M17.6 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/></g>`),
  "Brújula": svg(`<g ${T}><circle cx="12" cy="12" r="8.6"/><path d="M15.6 8.4l-2 5.2-5.2 2 2-5.2z"/></g>`),
};

const DER = {
  "Aro (el de ahora)": svg(`<g ${T}><circle cx="12" cy="12" r="9.1"/><circle cx="12" cy="9.8" r="3.1"/><path d="M6.1 19.4c1.1-2.6 3.3-4 5.9-4s4.8 1.4 5.9 4"/></g>`),
  "Persona sola": svg(`<g ${T}><circle cx="12" cy="8.3" r="3.7"/><path d="M4.9 20.2c.9-4 3.7-6.2 7.1-6.2s6.2 2.2 7.1 6.2"/></g>`),
  "Hombros": svg(`<g ${T}><circle cx="12" cy="8.4" r="3.4"/><path d="M5.4 19.8a6.9 6.9 0 0 1 13.2 0"/></g>`),
};

const PASTILLAS = {
  "Como está": "",
  "Sin borde duro": ".cabecera-pastilla{background:rgba(255,255,255,0.08)!important;border-color:rgba(255,255,255,0.14)!important} .cabecera-filete{background:rgba(255,255,255,0.16)!important;height:16px!important}",
  "Sin filete": ".cabecera-pastilla{background:rgba(255,255,255,0.08)!important;border-color:rgba(255,255,255,0.14)!important} .cabecera-filete{display:none!important} .pastilla-dado{padding:0 8px 0 12px!important} .pastilla-perfil{padding:0 12px 0 8px!important}",
};

const nav = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const p = await nav.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 3 });
await p.goto("http://localhost:4173/?p=inicio", { waitUntil: "networkidle" });
await p.waitForTimeout(2600);
await p.addStyleTag({ content: ".regalo-velo,.regalo-aviso,.oferta,.valoracion{display:none!important} .dado-3d{animation:none!important}" });

async function pinta(izq, der, pastilla) {
  await p.evaluate(({ izq, der, pastilla }) => {
    let e = document.getElementById("prueba-pastilla");
    if (!e) { e = document.createElement("style"); e.id = "prueba-pastilla"; document.head.append(e); }
    e.textContent = pastilla;
    const d = document.querySelector(".pastilla-dado");
    const f = document.querySelector(".pastilla-perfil");
    if (izq) { d.innerHTML = izq; d.style.color = "#fff"; }
    if (der) f.innerHTML = der;
  }, { izq, der, pastilla });
  await p.waitForTimeout(260);
  return await (await p.$(".cabecera-pastilla")).screenshot();
}

/* Fila 1: los cinco de la izquierda, con el perfil de ahora y la pastilla de ahora. */
const filas = [];
for (const [n, d] of Object.entries(IZQ)) filas.push({ rot: `IZQUIERDA · ${n}`, buf: await pinta(d, null, "") });
await p.reload({ waitUntil: "networkidle" }); await p.waitForTimeout(2600);
await p.addStyleTag({ content: ".regalo-velo,.regalo-aviso,.oferta,.valoracion{display:none!important}" });
for (const [n, d] of Object.entries(DER)) filas.push({ rot: `PERFIL · ${n}`, buf: await pinta(null, d, "") });
for (const [n, c] of Object.entries(PASTILLAS)) filas.push({ rot: `PASTILLA · ${n}`, buf: await pinta(IZQ["Dado a línea"], DER["Hombros"], c) });

const anchos = await Promise.all(filas.map(async (f) => (await sharp(f.buf).metadata()).width));
const altos = await Promise.all(filas.map(async (f) => (await sharp(f.buf).metadata()).height));
const W = Math.max(...anchos) + 560, FILA = Math.max(...altos) + 34;
await sharp({ create: { width: W, height: FILA * filas.length + 20, channels: 3, background: "#151515" } })
  .composite(filas.flatMap((f, i) => {
    const y = 10 + i * FILA;
    return [
      { input: Buffer.from(`<svg width="540" height="${FILA}" xmlns="http://www.w3.org/2000/svg"><text x="16" y="${FILA / 2 + 10}" font-family="Helvetica,Arial" font-size="26" font-weight="700" fill="#f2ece1">${f.rot}</text></svg>`), left: 0, top: y },
      { input: f.buf, left: 560, top: y + 17 },
    ];
  }))
  .png().toFile(`${S}/pastilla.png`);
console.log("hecho ·", filas.length, "variantes");
await nav.close();
