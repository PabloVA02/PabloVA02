/* ==========================================================================
   LA MISMA FOTO, YA RECORTADA AL MARCO DE LA PORTADA

       node scripts/recorte.mjs salida.png "File:Una.jpg" "File:Otra.jpg" …
       node scripts/recorte.mjs salida.png --foco 50%,20% "File:Una.jpg"

   `contacto.mjs` enseña la candidata entera y debajo la franja de la banda de
   imagen, que es el 28 % del alto. Pero la PORTADA no es una franja: es la
   pantalla entera, 375x812, o sea una vertical muy estrecha (0,46 de
   proporción). Una foto apaisada de 3:2 pierde ahí el 70 % de su ancho, y eso
   no se ve en la hoja de contacto normal: se ve después, cuando ya está
   metida y sale cortada y fea.

   Pablo, el 27 por la noche: «la portada debe ser bonita, de buena calidad y
   que se ajuste bien a los límites de imagen que tenemos, para que no salga
   muy cortada y quede fea».

   Así que esto enseña SOLO lo que va a caber, ya recortado, al lado de la
   original en pequeño para saber cuánto se ha perdido. Se juzga el recorte
   directamente y no la foto que uno imagina.

   El `--foco` es el mismo `object-position` que luego lleva la ficha, y se
   puede dar uno por candidata separándolos por comas de la lista.
   ========================================================================== */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import sharp from "sharp";

const ejecuta = promisify(execFile);
const UA = "Curva/1.0 (proyecto educativo; contacto: pabloverdalo@gmail.com)";
const CACHE = "/tmp/curva-contacto";
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

/* Con curl y no con fetch: el tráfico sale por un proxy que el fetch de Node
   no mira. Igual que en foto.mjs y contacto.mjs. */
async function baja(nombre) {
  const limpio = nombre.replace(/^File:/, "");
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(limpio)}?width=1100`;
  if (!existsSync(CACHE)) mkdirSync(CACHE, { recursive: true });
  const destino = join(CACHE, createHash("sha1").update(url).digest("hex") + ".img");
  if (existsSync(destino)) return readFileSync(destino);
  for (let intento = 0; intento < 5; intento++) {
    if (intento) await espera(1500 * 2 ** (intento - 1));
    const { stdout } = await ejecuta(
      "curl", ["-sS", "-L", "--max-time", "60", "-H", `User-Agent: ${UA}`, url],
      { maxBuffer: 64 * 1024 * 1024, encoding: "buffer" },
    );
    if (stdout.length > 4096) { writeFileSync(destino, stdout); return stdout; }
  }
  throw new Error(`no se ha podido bajar ${nombre}`);
}

/* El marco real de la portada, a escala: 375x812 son 0,4618. */
const ANCHO = 250, ALTO = 541;
const MINI = 250, HUECO = 26, PIE = 74;

function posicion(foco) {
  if (!foco) return "centre";
  const [x, y] = foco.split(/[, ]+/).map((v) => parseFloat(v));
  /* sharp no entiende porcentajes, pero sí las nueve posiciones de la rosa. */
  const fila = y < 34 ? "top" : y > 66 ? "bottom" : "";
  const col = x < 34 ? "left" : x > 66 ? "right" : "";
  return [fila, col].filter(Boolean).join(" ") || "centre";
}

const escapa = (t) => t.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

function rotulo(texto, ancho) {
  const svg = `<svg width="${ancho}" height="${PIE}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#12100e"/>
    <text x="${ancho / 2}" y="26" font-family="DejaVu Sans, sans-serif" font-size="15"
      fill="#f4efe6" text-anchor="middle">${escapa(texto.slice(0, 34))}</text>
    <text x="${ancho / 2}" y="50" font-family="DejaVu Sans, sans-serif" font-size="12"
      fill="#9b9187" text-anchor="middle">${escapa(texto.slice(34, 72))}</text>
  </svg>`;
  return Buffer.from(svg);
}

const args = process.argv.slice(2);
const salida = args.shift();
let foco = null;
const nombres = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--foco") { foco = args[++i]; continue; }
  nombres.push(args[i]);
}
if (!salida || !nombres.length) {
  console.error('Uso: node scripts/recorte.mjs salida.png [--foco 50%,20%] "File:Una.jpg" …');
  process.exit(1);
}
const focos = (foco ?? "").split(",").map((f) => f.trim()).filter(Boolean);

const columnas = [];
for (const [i, nombre] of nombres.entries()) {
  const bruto = await baja(nombre);
  const f = focos.length > 1 ? focos[i] : focos[0];
  const recorte = await sharp(bruto)
    .resize(ANCHO, ALTO, { fit: "cover", position: posicion(f) })
    .toBuffer();
  const { width, height } = await sharp(bruto).metadata();
  const mini = await sharp(bruto).resize(MINI, null, { fit: "inside" }).toBuffer();
  const altoMini = (await sharp(mini).metadata()).height;

  const col = await sharp({
    create: { width: ANCHO, height: ALTO + HUECO + altoMini + PIE, channels: 3, background: "#12100e" },
  })
    .composite([
      { input: recorte, top: 0, left: 0 },
      { input: mini, top: ALTO + HUECO, left: Math.round((ANCHO - MINI) / 2) },
      {
        input: rotulo(`${i + 1} · ${nombre.replace(/^File:/, "")}  (${width}x${height})`, ANCHO),
        top: ALTO + HUECO + altoMini, left: 0,
      },
    ])
    .png()
    .toBuffer();
  columnas.push(col);
}

const altos = await Promise.all(columnas.map(async (c) => (await sharp(c).metadata()).height));
const alto = Math.max(...altos);
const ancho = columnas.length * ANCHO + (columnas.length + 1) * HUECO;
await sharp({ create: { width: ancho, height: alto + 2 * HUECO, channels: 3, background: "#12100e" } })
  .composite(columnas.map((input, i) => ({ input, top: HUECO, left: HUECO + i * (ANCHO + HUECO) })))
  .png()
  .toFile(salida);
console.log(`✓ ${salida} — ${columnas.length} candidatas recortadas al marco de la portada (${ANCHO}x${ALTO})`);
