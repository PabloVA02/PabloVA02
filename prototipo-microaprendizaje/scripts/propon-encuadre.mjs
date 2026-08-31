/* Propone x/y/zoom para que el motivo suba hasta DESTINO del alto de la
   ventana. Mide dónde está el peso visual del original y despeja el centro
   que hace falta. No decide nada: escribe la propuesta para mirarla. */
import sharp from "sharp";
import { readdirSync } from "node:fs";
const ANCHO = 9, ALTO = 16, DESTINO = 0.42;
const pares = process.argv.slice(2).map((a) => a.split(":"));

for (const [tema, zStr] of pares) {
  const z = Number(zStr);
  const f = readdirSync("originales").find((n) => n.startsWith(tema + "."));
  const ruta = `originales/${f}`;
  const m = await sharp(ruta).metadata();
  const A = 64, B = Math.max(2, Math.round((A * m.height) / m.width));
  const { data } = await sharp(ruta).resize(A, B, { fit: "fill" }).greyscale().raw().toBuffer({ resolveWithObject: true });

  const fila = new Float64Array(B), col = new Float64Array(A);
  for (let y = 1; y < B; y++) for (let x = 1; x < A; x++) {
    const i = y * A + x;
    const e = Math.abs(data[i] - data[i - 1]) + Math.abs(data[i] - data[i - A]);
    fila[y] += e; col[x] += e;
  }
  const suma = (v) => v.reduce((a, b) => a + b, 0);
  const centro = (v, n) => { let t = suma(v), s = 0; for (let i = 0; i < n; i++) s += (i / n) * v[i]; return s / t; };
  const cy = centro(fila, B), cx = centro(col, A);

  const cap = Math.min(m.width, Math.round((m.height * ANCHO) / ALTO));
  const w = Math.floor(cap / z);
  const h = Math.min(m.height, Math.round((w * ALTO) / ANCHO));
  /* Para que el motivo (en cy) caiga en DESTINO de la ventana, el centro de
     la ventana va en cy·H + h·(0,5 − DESTINO). */
  const centroPx = cy * m.height + h * (0.5 - DESTINO);
  const y = Math.min(Math.max(centroPx / m.height, h / 2 / m.height), 1 - h / 2 / m.height);
  /* Dónde cae de verdad después de recortar contra los bordes. */
  const top = Math.min(Math.max(Math.round(m.height * y - h / 2), 0), m.height - h);
  const real = (cy * m.height - top) / h;
  console.log(
    `"${tema}": { "x": ${cx.toFixed(2)}, "y": ${y.toFixed(3)}, "zoom": ${z} },`.padEnd(72) +
    `  → ${w}px · el motivo queda en ${real.toFixed(2)} (estaba en ${cy.toFixed(2)})`,
  );
}
