/* ==========================================================================
   VARIAS PORTADAS DE UNA VEZ, CON LA FRANJA DEL TEXTO ENCIMA

       node scripts/hoja-encuadre.mjs tema1 tema2 … > /tmp/hoja.png
       SALIDA=/tmp/hoja.png node scripts/hoja-encuadre.mjs tema1 …

   Existe porque abrir la app para cada portada cuesta una captura por short y
   no deja compararlas. Aquí se ven doce de golpe con lo que de verdad importa
   dibujado encima: el degradado que empieza sobre 0,58 y la banda del título
   y el «Seguir», de 0,70 a 0,95. Lo que caiga ahí se corta con el texto.
   ========================================================================== */
import sharp from "sharp";

const temas = process.argv.slice(2);
const SALIDA = process.env.SALIDA ?? "/tmp/hoja-encuadre.png";
if (!temas.length) { console.log("uso: node scripts/hoja-encuadre.mjs tema1 tema2 …"); process.exit(1); }

const A = 200, B = Math.round((A * 16) / 9), PIE = 26, COLS = 6;
const marca = Buffer.from(`<svg width="${A}" height="${B}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0.55" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.85"/>
  </linearGradient></defs>
  <rect x="0" y="0" width="${A}" height="${B}" fill="url(#g)"/>
  <rect x="0" y="${B * 0.70}" width="${A}" height="${B * 0.25}" fill="none" stroke="#f33" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="6" y="${B * 0.78}" font-family="DejaVu Sans" font-size="15" fill="#fff">Título</text>
  <text x="6" y="${B * 0.90}" font-family="DejaVu Sans" font-size="11" fill="#bbb">SEGUIR</text>
</svg>`);

const tejas = [];
for (const tema of temas) {
  let foto;
  try { foto = await sharp(`portadas/${tema}.avif`).resize(A, B, { fit: "cover" }).toBuffer(); }
  catch { console.error(`no está portadas/${tema}.avif`); continue; }
  const pie = await sharp({ create: { width: A, height: PIE, channels: 3, background: "#111" } })
    .composite([{ input: Buffer.from(`<svg width="${A}" height="${PIE}"><text x="4" y="18" font-family="DejaVu Sans" font-size="12" fill="#ddd">${tema.slice(0, 30)}</text></svg>`), top: 0, left: 0 }])
    .png().toBuffer();
  tejas.push(await sharp({ create: { width: A, height: B + PIE, channels: 3, background: "#111" } })
    .composite([{ input: foto, top: 0, left: 0 }, { input: marca, top: 0, left: 0 }, { input: pie, top: B, left: 0 }])
    .png().toBuffer());
}

const filas = Math.ceil(tejas.length / COLS);
const lienzo = sharp({ create: { width: A * Math.min(COLS, tejas.length), height: (B + PIE) * filas, channels: 3, background: "#111" } });
await lienzo.composite(tejas.map((t, i) => ({ input: t, left: (i % COLS) * A, top: Math.floor(i / COLS) * (B + PIE) })))
  .png().toFile(SALIDA);
console.log(`${tejas.length} portadas en ${SALIDA}`);
