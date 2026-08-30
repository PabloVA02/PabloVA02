/* ==========================================================================
   DÓNDE VA A CAER EL RECORTE, ANTES DE HACERLO

       node scripts/encuadre.mjs originales/la-cebada-no-tiene-azucar.jpg sale.png

   Pinta la fotografía con una rejilla en décimas y encima, en rojo, la ventana
   9:16 que se va a quedar. Sirve para dos cosas y las dos salieron el 30 de
   agosto, cuando Pablo dijo «la cerveza sale cortada y la de la calavera no
   está bien centrada»:

     · ver de un vistazo QUÉ se pierde, que es lo que él nota y el número no
       cuenta —«2690 de 7172 de ancho» no dice que se corte el asa—;
     · y leer en la rejilla el `x` y el `y` que hay que escribir en
       `assets/recortes.json` cuando el centro no acierta.

   La ventana que dibuja es la centrada, o sea la que sale por defecto. Si el
   tema ya tiene encuadre a mano, esto NO lo tiene en cuenta: enseña el punto
   de partida.
   ========================================================================== */
import sharp from "sharp";
const [ruta, salida] = process.argv.slice(2);
const m = await sharp(ruta).metadata();
const A = 560, B = Math.round(A * m.height / m.width);
const base = await sharp(ruta).resize(A).toBuffer();
let g = `<svg width="${A}" height="${B}">`;
for (let i = 1; i < 10; i++) {
  g += `<line x1="${A*i/10}" y1="0" x2="${A*i/10}" y2="${B}" stroke="#0f0" stroke-width="1" opacity="0.45"/>`;
  g += `<line x1="0" y1="${B*i/10}" x2="${A}" y2="${B*i/10}" stroke="#0f0" stroke-width="1" opacity="0.45"/>`;
  g += `<text x="${A*i/10+2}" y="12" font-size="11" fill="#0f0">.${i}</text>`;
  g += `<text x="2" y="${B*i/10-2}" font-size="11" fill="#0f0">.${i}</text>`;
}
/* La ventana 9:16 centrada, que es lo que va a salir. */
const cap = Math.min(m.width, Math.round(m.height * 9 / 16));
const w = cap / m.width * A, h = Math.min(B, w * 16 / 9);
g += `<rect x="${(A-w)/2}" y="${(B-h)/2}" width="${w}" height="${h}" fill="none" stroke="#f00" stroke-width="3"/>`;
g += "</svg>";
await sharp(base).composite([{ input: Buffer.from(g), top: 0, left: 0 }]).png().toFile(salida);
console.log(`${m.width}x${m.height} · la ventana centrada es ${cap}x${Math.round(cap*16/9)}`);
