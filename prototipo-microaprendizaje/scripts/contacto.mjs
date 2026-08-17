/* La hoja de contacto: varias candidatas de Commons en una sola imagen.

   FOTOS.md manda mirar cada fotografía antes de meterla, porque el buscador
   acierta con el nombre y falla con el contenido. Mirarlas de una en una sale
   carísimo cuando hay que elegir entre ocho, así que esto las baja, las pone
   en una rejilla con su número y su nombre encima, y saca UNA captura. Se
   mira esa y se eligen las que sirven.

   Y enseña además la franja: la banda de imagen es el 28 % del alto de la
   pantalla, o sea que de una foto apaisada se ve un tercio. Debajo de cada
   candidata va recortada como se vería en la app, para no llevarse la
   sorpresa después.

   Uso:
     node scripts/contacto.mjs salida.png "File:Una.jpg" "File:Otra.jpg" …
     node scripts/contacto.mjs salida.png --foco 50%,20% "File:Una.jpg"
     node scripts/contacto.mjs salida.png --grande "File:Una.jpg"   una por fila
*/
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { chromium } from "playwright-core";

const ejecuta = promisify(execFile);
const UA = "Curva/1.0 (proyecto educativo; contacto: pabloverdalo@gmail.com)";
const CACHE = "/tmp/curva-contacto";

/* Se baja con curl y no con fetch: todo el tráfico sale por un proxy que el
   fetch de Node no mira, y desde el navegador Commons no se alcanza. */
/* Commons corta cuando se le piden muchas seguidas y en vez de un error manda
   una página de texto. Antes eso tumbaba media hoja de contacto y había que
   repetir la llamada entera; ahora se espera y se reintenta, igual que en
   foto.mjs. */
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

async function baja(nombre) {
  const limpio = nombre.replace(/^File:/, "");
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(limpio)}?width=760`;
  const fichero = join(CACHE, createHash("sha1").update(url).digest("hex") + ".jpg");
  if (existsSync(fichero)) return readFileSync(fichero);
  /* Los cortes de Commons duran minutos, no segundos: con esperas de dos en
     dos segundos se agotaban los seis intentos sin que hubiera cedido. */
  const ESPERAS = [0, 5000, 15000, 30000, 60000, 90000, 120000];
  for (let intento = 0; intento < ESPERAS.length; intento++) {
    await espera(ESPERAS[intento]);
    const { stdout } = await ejecuta("curl", ["-sS", "-L", "--max-time", "60", "-H", `User-Agent: ${UA}`, url],
      { maxBuffer: 64 * 1024 * 1024, encoding: "buffer" });
    if (stdout.slice(0, 15).toString("latin1").includes("<")) continue;
    writeFileSync(fichero, stdout);
    return stdout;
  }
  throw new Error(`no es una imagen: ${limpio}`);
}

const args = process.argv.slice(2);
const salida = args.shift();
let foco = "50% 50%";
/* Para cuando hay que comprobar un detalle pequeño —si esa ventana está
   cegada de verdad, si eso que asoma es lo que parece—: una por fila y al
   doble de alto. En la rejilla de dos no se ve. */
let grande = false;
for (let i = 0; i < args.length; i++) if (args[i] === "--grande") { grande = true; args.splice(i, 1); break; }
if (args[0] === "--foco") { args.shift(); foco = args.shift().replace(",", " "); }
if (!salida || !args.length) {
  console.log('uso: node scripts/contacto.mjs salida.png "File:Una.jpg" …');
  process.exit(1);
}

if (!existsSync(CACHE)) mkdirSync(CACHE, { recursive: true });

const fichas = [];
for (const [i, nombre] of args.entries()) {
  try {
    const datos = await baja(nombre);
    fichas.push({ n: i + 1, nombre: nombre.replace(/^File:/, ""),
                  src: `data:image/jpeg;base64,${datos.toString("base64")}` });
  } catch (e) {
    console.log(`  ${i + 1}. ${nombre.slice(0, 60)} — ${e.message.slice(0, 60)}`);
  }
}
if (!fichas.length) { console.log("ninguna se pudo bajar"); process.exit(1); }

/* Dos por fila: más pequeñas no se distingue lo que sale en ellas, que es
   justo lo que se viene a comprobar. */
const html = `<!doctype html><meta charset="utf-8"><style>
  body { margin: 0; background: #22201d; font: 13px system-ui, sans-serif; color: #f2ece1; }
  .rejilla { display: grid; grid-template-columns: repeat(${grande ? 1 : 2}, 1fr); gap: 14px; padding: 14px; }
  figure { margin: 0; background: #2e2b27; border-radius: 6px; overflow: hidden; }
  figcaption { padding: 6px 9px; line-height: 1.35; }
  .n { display: inline-block; background: #f2ece1; color: #22201d; font-weight: 700;
       border-radius: 3px; padding: 0 6px; margin-right: 6px; }
  .entera { width: 100%; height: ${grande ? 640 : 300}px; object-fit: contain; background: #14120f; display: block; }
  .franja { width: 100%; height: 92px; object-fit: cover; object-position: ${foco}; display: block;
            border-top: 2px solid #22201d; }
  .pie { padding: 3px 9px 7px; opacity: .55; font-size: 11px; }
</style><div class=rejilla>
${fichas.map((f) => `<figure>
  <img class=entera src="${f.src}">
  <img class=franja src="${f.src}">
  <div class=pie>↑ así se vería en la banda de la app (foco ${foco})</div>
  <figcaption><span class=n>${f.n}</span>${f.nombre.replace(/[<>&]/g, "")}</figcaption>
</figure>`).join("\n")}
</div>`;

const navegador = await chromium.launch();
const pagina = await navegador.newPage({ viewport: { width: grande ? 1000 : 1100, height: 800 } });
await pagina.setContent(html, { waitUntil: "load" });
await pagina.screenshot({ path: salida, fullPage: true });
await navegador.close();
console.log(`hoja de contacto en ${salida} — ${fichas.length} candidatas. MÍRALA antes de elegir.`);
