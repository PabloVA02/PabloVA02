/* Encuentra las cajas del vídeo por color. La paleta de la referencia es
   plana —#49444f las tarjetas, #827a89 las pastillas claras—, así que buscar
   los píxeles de un color y quedarse con su envolvente da la caja exacta,
   sin tener que estimar nada mirando la imagen. */
import { readFileSync } from "node:fs";

const [raw, W] = [process.argv[2], Number(process.argv[3] ?? 750)];
const b = readFileSync(raw);
const H = b.length / 3 / W;

const cerca = (i, [r, g, bl], tol) =>
  Math.abs(b[i] - r) <= tol && Math.abs(b[i + 1] - g) <= tol && Math.abs(b[i + 2] - bl) <= tol;

/** Envolvente de todos los píxeles de un color dentro de una franja. */
function zona(col, tol, y0, y1, x0 = 0, x1 = W) {
  let t = 1e9, d = -1, l = 1e9, r = -1, n = 0;
  for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
    if (cerca((y * W + x) * 3, col, tol)) { n++; if (y < t) t = y; if (y > d) d = y; if (x < l) l = x; if (x > r) r = x; }
  }
  return n ? { x: l, y: t, w: r - l + 1, h: d - t + 1, n } : null;
}

/** Filas en las que hay texto claro, para sacar líneas y sus alturas. */
function lineas(x0, x1, y0, y1, u = 150) {
  const hay = (y) => { for (let x = x0; x < x1; x++) { const i = (y * W + x) * 3; if (b[i] > u && b[i + 1] > u && b[i + 2] > u) return true; } return false; };
  const out = []; let dentro = false, ini = 0;
  for (let y = y0; y < y1; y++) { const c = hay(y); if (c && !dentro) { dentro = true; ini = y; } else if (!c && dentro) { dentro = false; if (y - ini > 5) out.push({ y: ini, h: y - ini }); } }
  return out;
}

const orden = process.argv[4] ?? "lib";
const P = { tarjeta: [0x49, 0x44, 0x4f], clara: [0x82, 0x7a, 0x89], verde: [0x68, 0xe0, 0x6f] };
if (orden === "lib") {
  console.log("tarjeta seguir ", JSON.stringify(zona(P.tarjeta, 10, 200, 480)));
  console.log("pastilla racha ", JSON.stringify(zona(P.tarjeta, 10, 100, 200)));
  console.log("boton Manage   ", JSON.stringify(zona(P.clara, 12, 480, 580, 480, W)));
  console.log("barra pista    ", JSON.stringify(zona(P.clara, 12, 370, 420)));
  console.log("barra verde    ", JSON.stringify(zona(P.verde, 40, 370, 420)));
  console.log("lineas texto izq:", JSON.stringify(lineas(33, 520, 100, 620)));
} else {
  console.log("hoja           ", JSON.stringify(zona(P.tarjeta, 10, 100, 1600)));
  console.log("lineas centro  :", JSON.stringify(lineas(90, 660, 140, 800)));
}
