import pw from "/opt/node22/lib/node_modules/playwright/index.js"; const { chromium } = pw;
import { readFile, writeFile } from "node:fs/promises";

/* Mide la caja real del dibujo dentro de cada SVG de unDraw. Sus viewBox
   traen mucho aire alrededor, y por eso las ilustraciones salían pequeñas y
   pegadas a una esquina. Con la caja ajustada llenan su hueco. */

const BASE = "node_modules/undraw-svg/svgs";
const nombres = JSON.parse(await readFile("elegidas.json", "utf8"));
const browser = await chromium.launch();
const page = await browser.newPage();
const cajas = {};

for (const f of nombres) {
  const svg = await readFile(`${BASE}/${f}.svg`, "utf8");
  await page.setContent(`<body style="margin:0">${svg}</body>`);
  const caja = await page.evaluate(() => {
    const s = document.querySelector("svg");
    s.setAttribute("width", "1000");
    const b = s.getBBox();
    return { x: b.x, y: b.y, w: b.width, h: b.height };
  });
  // Un 3% de margen para que el trazo no toque el borde.
  const m = Math.max(caja.w, caja.h) * 0.03;
  cajas[f] = `${(caja.x - m).toFixed(1)} ${(caja.y - m).toFixed(1)} ${(caja.w + m * 2).toFixed(1)} ${(caja.h + m * 2).toFixed(1)}`;
}

await writeFile("cajas.json", JSON.stringify(cajas, null, 1));
console.log("medidas", Object.keys(cajas).length, "ilustraciones");
console.log("ejemplo bookshelves:", cajas["bookshelves"]);
await browser.close();
