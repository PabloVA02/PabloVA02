/* ==========================================================================
   LOS COLORES DE LA ETIQUETA «GRATIS HOY», UNO DEBAJO DE OTRO

       node scripts/verdes-gratis.mjs

   Antes hay que construir y servir:
       npx vite build && python3 -m http.server 4173 --directory dist &

   Pablo, el 4 de septiembre: «lo de gratis hoy de los libros, ponme un verde
   mejor, que pegue con el fondo y sea bonito; ponme varios colores y así
   decido». Esto pinta la tira de verdad —con sus cubiertas y su fondo— una vez
   por candidato y las apila en una sola imagen con su nombre y su código.

   Elegir un color en una paleta no vale: un verde que en un cuadradito parece
   perfecto se apaga al lado de una cubierta azul marino. Hay que verlo puesto.

   Para probar otro, se añade su línea a VERDES y se vuelve a lanzar. El que
   está puesto en la app vive en `.gratis-etiqueta`, en `styles.css`.
   ========================================================================== */
import { chromium } from "playwright-core";
import sharp from "sharp";
const S = "/tmp/claude-0/-home-user-PabloVA02/73d17f4d-3a55-5bf2-b66d-69e35076349c/scratchpad";

const VERDES = [
  { id: "AHORA", nombre: "El azul de ahora", fondo: "#2f6ec4", tinta: "#ffffff" },
  { id: "A", nombre: "Menta, el verde que ya usa la app", fondo: "#4fd18b", tinta: "#0d2a1a" },
  { id: "B", nombre: "Esmeralda",                         fondo: "#22a45d", tinta: "#ffffff" },
  { id: "C", nombre: "Bosque",                            fondo: "#1c6b45", tinta: "#ffffff" },
  { id: "D", nombre: "Lima",                              fondo: "#a9dd5f", tinta: "#16290a" },
  { id: "E", nombre: "Salvia oscura",                     fondo: "#41694f", tinta: "#f2ece1" },
  { id: "F", nombre: "Verde azulado",                     fondo: "#0f8a7d", tinta: "#ffffff" },
];

const nav = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const p = await nav.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
await p.goto("http://localhost:4173/?p=inicio", { waitUntil: "networkidle" });
await p.waitForTimeout(2400);
if (!(await p.$(".gratis-ficha"))) {
  await p.evaluate(() => { try { localStorage.clear(); } catch {} });
  await p.reload({ waitUntil: "networkidle" });
  await p.waitForTimeout(2600);
}
/* Fuera el cartel del regalo, que sale solo a los pocos segundos de entrar y
   tapa media pantalla. Se espera a que aparezca y se cierra por el botón. */
const quita = async () => {
  await p.addStyleTag({ content: ".regalo-velo,.regalo-aviso,.oferta,.valoracion{display:none!important}" });
};
await p.waitForTimeout(2500);
await quita();
await p.waitForTimeout(600);

const tomas = [];
for (const v of VERDES) {
  await p.evaluate(({ fondo, tinta, id }) => {
    let e = document.getElementById("prueba-verde");
    if (!e) { e = document.createElement("style"); e.id = "prueba-verde"; document.head.append(e); }
    e.textContent = id === "AHORA" ? "" : `.gratis-etiqueta{background:${fondo}!important;color:${tinta}!important}`;
  }, v);
  const tira = await p.$(".gratis-tira");
  await tira.scrollIntoViewIfNeeded();
  await p.waitForTimeout(320);
  const bruto = await tira.screenshot();
  /* Solo la parte de arriba: la etiqueta y el arranque de las cubiertas. Es
     donde se decide el color, y así caben los siete a la vez en una imagen. */
  const m = await sharp(bruto).metadata();
  tomas.push({ v, buf: await sharp(bruto).extract({ left: 0, top: 0, width: m.width, height: Math.min(232, m.height) }).toBuffer(), w: m.width });
}

const W = tomas[0].w, H = 232, PIE = 58;
const alto = tomas.length * (H + PIE) + 10;
const piezas = [];
tomas.forEach((t, i) => {
  const y = i * (H + PIE);
  piezas.push({
    input: Buffer.from(`<svg width="${W}" height="${PIE}" xmlns="http://www.w3.org/2000/svg">
      <text x="22" y="40" font-family="Helvetica,Arial" font-size="28" font-weight="700" fill="#f2ece1">${t.v.id === "AHORA" ? "" : t.v.id + " · "}${t.v.nombre} — ${t.v.fondo}</text>
    </svg>`), left: 0, top: y,
  });
  piezas.push({ input: t.buf, left: 0, top: y + PIE });
});
await sharp({ create: { width: W, height: alto, channels: 3, background: "#151515" } })
  .composite(piezas).png().toFile(`${S}/verdes.png`);
console.log("hecho ·", W, "x", alto);
await nav.close();
