/**
 * La estantería entera en una página, para mirar las cubiertas juntas.
 *
 *   node scripts/hoja-cubiertas.mjs [--salida hoja.html]
 *
 * PARA QUÉ. Pablo dibuja las cubiertas por tandas, y una tanda se juzga bien
 * de una en una y mal en conjunto: lo que hay que ver es si las cuarenta y
 * seis tienen sintonía —misma familia de color, mismo peso de tipografía,
 * misma manera de ilustrar— y eso solo se ve poniéndolas todas al lado.
 *
 * Y no se puede ver dentro de la app: en un teléfono de 375 puntos caben dos
 * por fila, así que para comparar la primera con la cuadragésima hay que
 * desplazar diez pantallas y ya no se recuerda la primera.
 *
 * LAS SUYAS VAN PRIMERO Y GRANDES, que es lo que pidió. Después el resto del
 * catálogo, más pequeño, para ver cómo queda la estantería completa mientras
 * se van sustituyendo.
 *
 * LAS TRES CLASES DE CUBIERTA que pinta la app se reproducen aquí:
 *
 *   dibujada     la de Pablo, incrustada en `cubiertas.ts`. Se usa tal cual.
 *   tipográfica  color plano y título gritado, definida en `tipograficas.ts`.
 *                Se rehace en HTML, que para juzgarla de lejos vale.
 *   fotografía   un cuadro de Commons. Se trae del caché y se reescribe
 *                estrecha, con su encuadre.
 *
 * La página se publica como artefacto, así que todo viaja dentro: el visor no
 * deja salir a la red.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { chromium } from "playwright";

const ejecuta = promisify(execFile);
const RAIZ = new URL("..", import.meta.url).pathname;
const CACHE = process.env.CURVA_CACHE ?? join(RAIZ, "fotos-cache");
const UA = "Curva/1.0 (proyecto educativo; contacto: pabloverdalo@gmail.com)";
const ORIGEN = 800;

const arg = (n, d) => {
  const i = process.argv.indexOf(n);
  return i > 0 ? process.argv[i + 1] : d;
};
const SALIDA = arg("--salida", join(RAIZ, "hoja-cubiertas.html"));
/* La medida sale de para qué es la página. Juzgar si cuarenta y seis
   cubiertas tienen sintonía exige verlas MUCHAS A LA VEZ: si caben tres por
   fila, para comparar la primera con la última hay que desplazar y ya no se
   recuerda la primera. A 210 entran cinco o seis en un portátil y las
   cuarenta y seis en dos pantallas, que es lo que hace falta.

   El resto va más pequeño porque ahí no se compara, se ojea. */
const ANCHO_PROPIA = 210;
const ANCHO_RESTO = 140;

const lee = (f) => readFileSync(join(RAIZ, "src", "libros", f), "utf8");

/* -- 1. El catálogo y qué le toca a cada libro ---------------------------- */

const CATALOGO = [...lee("catalogo.ts").matchAll(
  /\{ id: "([\w-]+)", titulo: "([^"]+)", autor: "([^"]+)", ano: (-?\d+), categoria: "([^"]+)"/g,
)].map((m) => ({ id: m[1], titulo: m[2], autor: m[3], ano: Number(m[4]), categoria: m[5] }));

const cub = lee("cubiertas.ts");
const IMAGENES = new Map(
  [...cub.matchAll(/^const ([A-Z_0-9]+) =\n  "(data:image\/webp;base64,[^"]+)";/gm)].map((m) => [m[1], m[2]]),
);
const DIBUJADAS = new Map(
  [...cub.matchAll(/^ {2}"([\w-]+)": \{\n {4}local: ([A-Z_0-9]+),/gm)].map((m) => [m[1], IMAGENES.get(m[2])]),
);

const TIPO = new Map(
  [...lee("tipograficas.ts").matchAll(
    /^ {2}"?([\w-]+)"?: \{ fondo: "(#\w+)", tinta: "(#\w+)"(?:, destaca: "([^"]*)")?(?:, acento: "(#\w+)")? \},$/gm,
  )].map((m) => [m[1], { fondo: m[2], tinta: m[3], destaca: m[4], acento: m[5] }]),
);

/* De `portadas.ts` solo hace falta el nombre del archivo y el encuadre. */
const FOTOS = new Map();
{
  const src = lee("portadas.ts");
  for (const bloque of src.split(/\n  (?="?[\w-]+"?: \{)/)) {
    const id = bloque.match(/^"?([\w-]+)"?: \{/)?.[1];
    const archivo = bloque.match(/archivo:\s*\n?\s*"((?:[^"\\]|\\.)*)"/)?.[1];
    if (id && archivo) FOTOS.set(id, { archivo: archivo.replace(/\\"/g, '"'), foco: bloque.match(/foco: "([^"]+)"/)?.[1] ?? "50% 50%" });
  }
}

/* -- 2. Las fotografías, del caché y estrechas ---------------------------- */

if (!existsSync(CACHE)) mkdirSync(CACHE, { recursive: true });
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

async function trae(nombre) {
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(nombre.replace(/ /g, "_"))}?width=${ORIGEN}`;
  const fichero = join(CACHE, createHash("sha1").update(url).digest("hex"));
  if (existsSync(fichero)) return readFileSync(fichero);
  for (const pausa of [0, 5000, 15000, 45000]) {
    await espera(pausa);
    try {
      const { stdout } = await ejecuta("curl", ["-sS", "-L", "--max-time", "90", "-H", `User-Agent: ${UA}`, url], { maxBuffer: 64 * 1024 * 1024, encoding: "buffer" });
      if (stdout.length > 1000) { writeFileSync(fichero, stdout); return stdout; }
    } catch {}
  }
  return null;
}

const necesarias = CATALOGO.filter((f) => !DIBUJADAS.has(f.id) && !TIPO.has(f.id) && FOTOS.has(f.id));
console.log(`${DIBUJADAS.size} dibujadas · ${TIPO.size} tipográficas · ${necesarias.length} fotografías que traer`);

const navegador = await chromium.launch();
const pagina = await navegador.newPage();
const empotradas = new Map();
let hechas = 0;
for (const f of necesarias) {
  const bruto = await trae(FOTOS.get(f.id).archivo);
  if (!bruto) continue;
  const uri = await pagina.evaluate(
    async ([datos, ancho]) => {
      const img = new Image();
      img.src = "data:image/*;base64," + datos;
      try { await img.decode(); } catch { return null; }
      const lienzo = document.createElement("canvas");
      const escala = Math.min(1, ancho / img.naturalWidth);
      lienzo.width = Math.round(img.naturalWidth * escala);
      lienzo.height = Math.round(img.naturalHeight * escala);
      lienzo.getContext("2d").drawImage(img, 0, 0, lienzo.width, lienzo.height);
      return lienzo.toDataURL("image/webp", 0.6);
    },
    [bruto.toString("base64"), ANCHO_RESTO * 1.6],
  );
  if (uri) { empotradas.set(f.id, uri); hechas++; }
  if (hechas % 20 === 0) process.stdout.write(`\r  ${hechas}/${necesarias.length}`);
}
await navegador.close();
console.log(`\r  ${hechas} fotografías empotradas`);

/* -- 3. La página --------------------------------------------------------- */

const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const ano = (n) => (n < 0 ? `${-n} a.C.` : String(n));

/* La tipográfica se rehace con HTML. No es idéntica a la que dibuja
   `PortadaLibro`, y no hace falta: aquí se juzga el color y el peso desde
   lejos, no el interletraje. */
function tipografica(f) {
  const t = TIPO.get(f.id);
  const palabras = f.titulo.toUpperCase().split(/\s+/);
  const cuerpo = f.titulo.length > 34 ? 15 : f.titulo.length > 20 ? 19 : 25;
  return `<div class="tapa tipo" style="--f:${t.fondo};--t:${t.tinta};--a:${t.acento ?? t.tinta}">
    <span class="tipo-titulo" style="font-size:${cuerpo}px">${palabras
      .map((p) => (t.destaca && t.destaca.split(/\s+/).includes(p) ? `<em>${esc(p)}</em>` : esc(p)))
      .join(" ")}</span>
    <span class="tipo-autor">${esc(f.autor)}</span>
  </div>`;
}

function tapa(f) {
  if (DIBUJADAS.has(f.id)) return `<img class="tapa" src="${DIBUJADAS.get(f.id)}" alt="${esc(f.titulo)}" loading="lazy">`;
  if (TIPO.has(f.id)) return tipografica(f);
  const uri = empotradas.get(f.id);
  if (!uri) return `<div class="tapa vacia"><span>${esc(f.titulo)}</span></div>`;
  return `<img class="tapa" src="${uri}" alt="${esc(f.titulo)}" style="object-position:${FOTOS.get(f.id).foco}" loading="lazy">`;
}

const ficha = (f) => `<figure class="libro">
  ${tapa(f)}
  <figcaption><span class="t">${esc(f.titulo)}</span><span class="a">${esc(f.autor)} · ${ano(f.ano)}</span></figcaption>
</figure>`;

const suyas = CATALOGO.filter((f) => DIBUJADAS.has(f.id));
const resto = CATALOGO.filter((f) => !DIBUJADAS.has(f.id));
const porCategoria = [...new Set(resto.map((f) => f.categoria))].map((c) => ({ c, libros: resto.filter((f) => f.categoria === c) }));

const html = `<title>La estantería de Curva</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap">
<style>
:root {
  color-scheme: dark;
  --fondo: #14161a;
  --panel: #1c1f24;
  --tinta: #eef1f4;
  --tinta-media: #9aa3ad;
  --tinta-suave: #6d7681;
  --linea: #272b31;
  --verde: #6ddc89;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--fondo);
  color: var(--tinta);
  font-family: Archivo, ui-sans-serif, system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
.envoltorio { max-width: 1400px; margin: 0 auto; padding: clamp(24px,5vw,56px) clamp(14px,3vw,32px) 90px; display: flex; flex-direction: column; gap: clamp(30px,4vw,48px); }
header { display: flex; flex-direction: column; gap: 10px; }
.marca { margin: 0; font-size: 12px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--verde); }
h1 { margin: 0; font-size: clamp(30px,5vw,46px); font-weight: 700; letter-spacing: -.025em; line-height: 1.05; text-wrap: balance; }
.entradilla { margin: 0; max-width: 66ch; color: var(--tinta-media); font-size: 16.5px; }

section { display: flex; flex-direction: column; gap: 16px; }
.cab { display: flex; align-items: baseline; gap: 14px; flex-wrap: wrap; border-bottom: 1px solid var(--linea); padding-bottom: 12px; }
.cab h2 { margin: 0; font-size: clamp(20px,3vw,27px); font-weight: 700; letter-spacing: -.02em; }
.cab .n { font-size: 14px; color: var(--tinta-suave); font-variant-numeric: tabular-nums; }
.cab .sub { margin: 0; flex-basis: 100%; color: var(--tinta-media); font-size: 15px; max-width: 62ch; }

.rejilla { display: grid; gap: 22px 16px; grid-template-columns: repeat(auto-fill, minmax(${ANCHO_PROPIA}px, 1fr)); }
.rejilla.pequena { gap: 17px 12px; grid-template-columns: repeat(auto-fill, minmax(${ANCHO_RESTO}px, 1fr)); }

.libro { margin: 0; display: flex; flex-direction: column; gap: 9px; min-width: 0; }
.tapa { width: 100%; aspect-ratio: 2 / 3; border-radius: 7px; display: block; object-fit: cover; background: var(--panel); }
figcaption { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
figcaption .t { font-size: 13px; font-weight: 600; line-height: 1.25; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
figcaption .a { font-size: 11.5px; color: var(--tinta-suave); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* La tipográfica rehecha: color plano, título gritado, autor abajo. */
.tipo { background: var(--f); color: var(--t); display: flex; flex-direction: column; justify-content: space-between; padding: 13px 12px; text-align: left; }
.tipo-titulo { font-weight: 700; line-height: 1.06; letter-spacing: -.02em; text-transform: uppercase; }
.tipo-titulo em { font-style: normal; color: var(--a); }
.tipo-autor { font-size: 10px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; opacity: .82; }
.vacia { display: grid; place-items: center; padding: 14px; border: 1px dashed var(--linea); }
.vacia span { font-size: 12px; color: var(--tinta-suave); text-align: center; }
</style>

<div class="envoltorio">
  <header>
    <p class="marca">Curva · estantería</p>
    <h1>Las cubiertas, todas juntas</h1>
    <p class="entradilla">Las ${suyas.length} que has dibujado van primero y grandes, para ver si tienen sintonía
      entre ellas. Debajo, el resto del catálogo por categorías: color plano donde hay portada
      tipográfica y un cuadro prestado donde todavía no hay nada.</p>
  </header>

  <section>
    <div class="cab">
      <h2>Las tuyas</h2><span class="n">${suyas.length} de ${CATALOGO.length}</span>
      <p class="sub">Mismo formato, misma familia de color y la misma manera de ilustrar. Aquí se ve
        de un vistazo cuál se sale del conjunto.</p>
    </div>
    <div class="rejilla">
${suyas.map(ficha).join("\n")}
    </div>
  </section>

${porCategoria.map(({ c, libros }) => `  <section>
    <div class="cab"><h2>${c}</h2><span class="n">${libros.length} sin dibujar</span></div>
    <div class="rejilla pequena">
${libros.map(ficha).join("\n")}
    </div>
  </section>`).join("\n")}
</div>
`;

writeFileSync(SALIDA, html);
console.log(`\n${SALIDA} · ${(html.length / 1024 / 1024).toFixed(1)} MB · ${CATALOGO.length} libros`);
