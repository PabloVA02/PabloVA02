/* ==========================================================================
   El vídeo del anuncio: la app corriendo dentro de un iPhone 17 Pro.

   No se graba en tiempo real. Se congela el reloj del navegador, se avanza a
   mano de fotograma en fotograma y se hace una captura de cada uno. Sale más
   lento de producir y tiene dos ventajas que en un anuncio lo son todo: el
   movimiento es perfectamente regular aunque la máquina esté ocupada, y la
   curva de cada deslizamiento la decide este fichero y no el navegador.

   Funciona porque la app no anima con CSS: no hay un solo `@keyframes`, todo
   el movimiento lo lleva framer-motion sobre requestAnimationFrame, y eso el
   reloj falso sí lo gobierna. El desplazamiento del muro se mueve poniendo
   `scrollTop` a mano, que además permite darle la curva de un dedo de verdad
   —salida rápida y frenada larga— en vez de la del navegador.

   Sale en tres tomas porque la app no deja ir del muro a la biblioteca: la
   barra de pestañas no está dentro de un short, y es lo correcto. Como el
   marco del teléfono no se mueve entre tomas, el corte se lee como la app
   cambiando de pantalla y no como un corte de vídeo.

       node scripts/anuncio.mjs [--fps 30] [--salida anuncio.mp4]

   Deja el mp4 en la raíz, 1080 × 1920, H.264, listo para montar.
   ========================================================================== */

import { execFile, spawn } from "node:child_process";
import { promisify } from "node:util";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { chromium } from "playwright";

const ejecuta = promisify(execFile);
const RAIZ = new URL("..", import.meta.url).pathname;
const HISTORIAS = join(RAIZ, "src", "historias");
/* El mismo caché que `movil.mjs`, a propósito: casi todas las fotografías que
   hace falta aquí ya están bajadas de la última vez que se armó el simulador. */
const CACHE = "/tmp/curva-movil-fotos";
const UA = "Curva/1.0 (proyecto educativo; contacto: pabloverdalo@gmail.com)";
const FFMPEG = "/tmp/ff/node_modules/ffmpeg-static/ffmpeg";

const arg = (n, d) => { const i = process.argv.indexOf(n); return i > 0 ? process.argv[i + 1] : d; };
const FPS = Number(arg("--fps", 30));
const SALIDA = arg("--salida", join(RAIZ, "anuncio.mp4"));
const DIST = join(RAIZ, "dist-artefacto", "assets");

/* El lienzo. 540 × 960 de CSS a doble densidad son 1080 × 1920 clavados, que
   es la medida de un vertical de anuncio. Se mide así, y no escalando la app,
   porque la app se pinta a su tamaño de verdad —375 de ancho— y el texto se
   rasteriza al doble: nítido sin pasar por ningún reescalado. */
const ANCHO = 540, ALTO = 960, DENSIDAD = 2;

/* -- Las historias que salen ---------------------------------------------- */

/* Elegidas por gancho y porque las cuatro fotografías están puestas y
   comprobadas. El orden es el del vídeo: se abre con el asesinato de César,
   que es la que mejor entra por los ojos. */
const ELEGIDAS = [
  "cesar",
  "gioconda-robo",
  "hiroshima",
  "luna-combustible",
  "turco-ajedrez",
  "el-primer-gusano",
];

/* -- Qué fotografías hay que empotrar ------------------------------------- */

const nombres = new Set();

const portadas = readFileSync(join(RAIZ, "src", "libros", "portadas.ts"), "utf8");
for (const m of portadas.matchAll(/archivo:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g))
  nombres.add(m[1].replace(/\\"/g, '"'));
const cuantasPortadas = nombres.size;

/* De cada historia elegida, sus cuatro. Y de las vecinas del muro también,
   porque el muro monta dos por cada lado y se ven de refilón al deslizar. */
const bloques = new Map();
for (const f of readdirSync(HISTORIAS).filter((x) => x.endsWith(".ts"))) {
  const texto = readFileSync(join(HISTORIAS, f), "utf8");
  for (const t of texto.split(/\n  \{\n/).slice(1)) {
    const id = /^\s*id: "([^"]+)"/m.exec(t)?.[1];
    if (id) bloques.set(id, t);
  }
}
for (const id of ELEGIDAS) {
  const t = bloques.get(id);
  if (!t) { console.log(`  ojo: no existe la historia «${id}»`); continue; }
  const fotos = /\n    fotos: \[([\s\S]*?)\n    \],/.exec(t);
  if (!fotos) { console.log(`  ojo: «${id}» no tiene fotos`); continue; }
  for (const m of fotos[1].matchAll(/archivo:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g))
    nombres.add(m[1].replace(/\\"/g, '"'));
}
console.log(`${nombres.size} fotografías (${cuantasPortadas} portadas + las de ${ELEGIDAS.length} historias)`);

/* -- Traerlas ------------------------------------------------------------- */

/* Aquí no hay tope de peso —esto no se publica, se graba—, así que se piden
   al doble de ancho que en el simulador: el vídeo sale a 1080 y la banda de
   imagen ocupa el ancho del teléfono, que en el vídeo son 750 puntos reales. */
const ORIGEN = 900;
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
const ESPERAS = [0, 5000, 15000, 30000, 60000, 90000];

const tipo = (b) =>
  b[0] === 0xff && b[1] === 0xd8 ? "image/jpeg"
  : b[0] === 0x89 && b[1] === 0x50 ? "image/png"
  : b[0] === 0x47 && b[1] === 0x49 ? "image/gif"
  : b.slice(8, 12).toString() === "WEBP" ? "image/webp"
  : null;

if (!existsSync(CACHE)) mkdirSync(CACHE, { recursive: true });

async function trae(nombre) {
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${
    encodeURIComponent(nombre.replace(/ /g, "_"))}?width=${ORIGEN}`;
  const fichero = join(CACHE, createHash("sha1").update(url).digest("hex"));
  if (existsSync(fichero)) return readFileSync(fichero);
  /* El simulador guarda a 800 y esto pide 900: si ya está la de 800, sirve.
     Bajar otra vez lo mismo con veinte puntos más es regalarle a Commons una
     tanda de peticiones para no ganar nada. */
  const otra = join(CACHE, createHash("sha1").update(
    `https://commons.wikimedia.org/wiki/Special:FilePath/${
      encodeURIComponent(nombre.replace(/ /g, "_"))}?width=800`).digest("hex"));
  if (existsSync(otra)) return readFileSync(otra);
  let ultimo;
  for (let i = 0; i < ESPERAS.length; i++) {
    await espera(ESPERAS[i]);
    try {
      const { stdout } = await ejecuta("curl",
        ["-sS", "-L", "--max-time", "90", "-H", `User-Agent: ${UA}`, url],
        { maxBuffer: 64 * 1024 * 1024, encoding: "buffer" });
      if (!tipo(stdout)) throw new Error(`no es imagen (${stdout.length} b)`);
      writeFileSync(fichero, stdout);
      return stdout;
    } catch (e) { ultimo = e; }
  }
  throw ultimo;
}

const tabla = new Map();
const pendientes = [...nombres];
let faltan = 0;
await Promise.all(Array.from({ length: 3 }, async () => {
  for (let n = pendientes.shift(); n !== undefined; n = pendientes.shift()) {
    try {
      const d = await trae(n);
      tabla.set(n, `data:${tipo(d)};base64,${d.toString("base64")}`);
    } catch { faltan++; }
  }
}));
console.log(`  ${tabla.size} empotradas${faltan ? ` · ${faltan} sin traer` : ""}`);

/* -- La app compilada ----------------------------------------------------- */

const activos = readdirSync(DIST);
const leer = (ext) => {
  const f = activos.find((a) => a.startsWith("index") && a.endsWith(ext))
    ?? activos.find((a) => a.endsWith(ext));
  if (!f) throw new Error(`no hay ningún ${ext} en dist-artefacto/assets. ¿Has compilado?`);
  return readFileSync(join(DIST, f), "utf8").trim();
};
const cssApp = leer(".css");
const jsApp = leer(".js");

/* -- El teléfono ---------------------------------------------------------- */

/* Medidas en puntos de la app. La pantalla son los 375 × 812 para los que
   está hecha; el iPhone 17 Pro tiene 402 × 874, que es la misma proporción
   con cuatro milésimas de diferencia, así que el marco se dibuja con las
   proporciones del 17 Pro alrededor de la pantalla tal cual. Nada se escala,
   y por eso el texto sale nítido. */
const BISEL = 11;
const CUERPO_W = 375 + BISEL * 2;
const CUERPO_H = 812 + BISEL * 2;

const marco = `
:root { color-scheme: dark; }
html, body {
  height: auto !important; overflow: hidden !important;
  margin: 0; padding: 0; background: #0b0a09 !important;
}
#root { height: 100% !important; }
/* Toda la app vive dentro de .shell: fijarle el teléfono es fijárselo a todo. */
.shell { width: 375px !important; height: 812px !important; min-height: 0 !important; }

/* La regla de arriba pone el alto en auto para que la hoja de la app no
   estire el documento. El lienzo tiene que ganárselo con su propio
   !important, o el teléfono se va a la esquina de arriba. */
body.anuncio {
  width: ${ANCHO}px !important; height: ${ALTO}px !important; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  /* Un fondo oscuro y cálido: el teléfono se recorta sobre él y la app, que
     es de papel claro, es lo único que brilla en el cuadro. */
  background:
    radial-gradient(78% 52% at 50% 42%, #3a2c20 0%, #1c1712 46%, #0b0a09 100%);
}
/* El halo de detrás. Da profundidad sin meter una sola imagen. */
.halo {
  position: absolute; width: ${CUERPO_W + 240}px; height: ${CUERPO_H + 200}px;
  background: radial-gradient(50% 42% at 50% 50%, rgba(217, 138, 99, 0.22) 0%, transparent 70%);
  filter: blur(18px); pointer-events: none;
}
.escena { position: relative; perspective: 2200px; }

.telefono {
  position: relative;
  width: ${CUERPO_W}px; height: ${CUERPO_H}px;
  border-radius: 60px;
  padding: ${BISEL}px;
  /* El titanio: un degradado en diagonal con los cantos claros, que es como
     se comporta el metal cepillado cuando le da una luz lateral. */
  background:
    linear-gradient(148deg, #d8d4cd 0%, #a9a49c 9%, #6f6a63 22%, #514c46 38%,
                    #45403a 52%, #6a655e 68%, #a29d95 84%, #cbc7c0 93%, #7a756e 100%);
  box-shadow:
    0 2px 1px rgba(255,255,255,0.42) inset,
    0 -2px 1px rgba(255,255,255,0.16) inset,
    0 44px 90px rgba(0,0,0,0.62),
    0 12px 30px rgba(0,0,0,0.45);
}
/* El filo interior del bisel, donde el metal se encuentra con el cristal. */
.telefono::after {
  content: ""; position: absolute; inset: ${BISEL - 2}px; border-radius: 51px;
  box-shadow: 0 0 0 2px rgba(8,7,6,0.92), 0 0 0 3px rgba(255,255,255,0.06);
  pointer-events: none; z-index: 4;
}
.pantalla {
  position: relative; width: 375px; height: 812px;
  border-radius: 49px; overflow: hidden; background: #000;
  z-index: 2;
}
/* La isla dinámica, encima de la app. */
.isla {
  position: absolute; top: 11px; left: 50%; transform: translateX(-50%);
  width: 118px; height: 34px; border-radius: 18px; background: #000;
  z-index: 6; pointer-events: none;
  box-shadow: 0 0 0 0.5px rgba(255,255,255,0.05);
}
.isla::after {
  content: ""; position: absolute; right: 9px; top: 50%; transform: translateY(-50%);
  width: 11px; height: 11px; border-radius: 50%;
  background: radial-gradient(circle at 34% 30%, #2a3340 0%, #0d1015 62%);
  box-shadow: 0 0 0 0.5px rgba(120,150,190,0.25);
}
/* El brillo del cristal: una banda diagonal muy floja. Sin esto el teléfono
   parece un recorte; con más, tapa la app. */
.brillo {
  position: absolute; inset: 0; z-index: 5; pointer-events: none;
  background: linear-gradient(122deg,
    rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.045) 15%,
    transparent 34%, transparent 100%);
}
/* Botones. Acción y volumen a la izquierda; encendido y el de cámara a la
   derecha, que es como los lleva el 17 Pro. */
.boton { position: absolute; background: linear-gradient(180deg, #6d6963, #3b3833); border-radius: 3px; }
.b-accion { left: -3px; top: 118px; width: 3px; height: 30px; border-radius: 3px 0 0 3px; }
.b-vol-a  { left: -3px; top: 186px; width: 3px; height: 58px; border-radius: 3px 0 0 3px; }
.b-vol-b  { left: -3px; top: 256px; width: 3px; height: 58px; border-radius: 3px 0 0 3px; }
.b-power  { right: -3px; top: 214px; width: 3px; height: 92px; border-radius: 0 3px 3px 0; }
.b-camara { right: -3px; top: 340px; width: 3px; height: 40px; border-radius: 0 3px 3px 0;
            background: linear-gradient(180deg, #8f8a83, #55514b); }
`;

function pagina({ pantalla, orden }) {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8">
<title>Curva · anuncio</title>
<style>${cssApp}</style>
<style>${marco}</style>
</head><body class="anuncio">
<div class="halo"></div>
<div class="escena">
  <div class="telefono">
    <div class="boton b-accion"></div><div class="boton b-vol-a"></div>
    <div class="boton b-vol-b"></div><div class="boton b-power"></div>
    <div class="boton b-camara"></div>
    <div class="pantalla">
      <div id="root"></div>
      <div class="isla"></div>
      <div class="brillo"></div>
    </div>
  </div>
</div>
<script>
window.__PANTALLA = ${JSON.stringify(pantalla)};
window.__ORDEN = ${JSON.stringify(orden ?? null)};
window.__FOTOS = ${JSON.stringify(Object.fromEntries(tabla))};
</script>
<script type="module">${jsApp}</script>
</body></html>`;
}

/* -- Curvas --------------------------------------------------------------- */

/* La de un dedo de verdad: arranca rápido y frena largo. Una `ease-in-out`
   pura arranca despacio y parece que la mueve un motor, no una mano. */
const dedo = (p) => 1 - Math.pow(1 - p, 4);
const suave = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

/* -- Tomas ---------------------------------------------------------------- */

/* Cada toma es una carga de la página con su pantalla de arranque y su lista
   de tramos. Un tramo dura lo que dura y en cada fotograma recibe cuánto lleva
   recorrido, de 0 a 1. */
const TOMAS = [
  {
    nombre: "shorts",
    pantalla: "shorts",
    orden: ELEGIDAS,
    /* La cámara no se está quieta: entra despacio toda la toma. No se la ve
       moverse y se nota al final. El plano fijo es lo que hace que un anuncio
       parezca una captura de pantalla. */
    camara: { de: 1.0, a: 1.07 },
    /* Se deja respirar cada historia y se pasa a la siguiente de un flick. */
    tramos: (() => {
      const t = [{ dur: 1.9, hacer: null }];
      for (let i = 0; i < ELEGIDAS.length - 1; i++) {
        t.push({ dur: 0.52, hacer: { tipo: "pasar", de: i, a: i + 1 } });
        t.push({ dur: i === ELEGIDAS.length - 2 ? 2.1 : 1.65, hacer: null });
      }
      return t;
    })(),
  },
  {
    nombre: "libros",
    pantalla: "inicio",
    camara: { de: 1.02, a: 1.1 },
    tramos: [
      { dur: 1.6, hacer: null },
      { dur: 1.9, hacer: { tipo: "bajar", px: 560 } },
      { dur: 1.0, hacer: null },
      /* A Psicología, que es donde están los de autoayuda: los títulos
         gritados son los que venden esta sección del anuncio. */
      { dur: 0.04, hacer: { tipo: "pulsar", sel: ".filtro", texto: "Psicología", tras: 120 } },
      { dur: 2.4, hacer: null },
      { dur: 2.1, hacer: { tipo: "bajar", px: 600 } },
      { dur: 1.2, hacer: null },
      { dur: 0.04, hacer: { tipo: "pulsar", sel: ".filtro", texto: "Economía" } },
      { dur: 2.4, hacer: null },
      { dur: 1.9, hacer: { tipo: "bajar", px: 560 } },
      { dur: 1.4, hacer: null },
    ],
  },
  {
    nombre: "anti",
    pantalla: "perfil",
    /* El final es solo esto y en grande: se entra ya cerca y se sigue
       acercando mientras caen los candados. A 1,5 la pantalla llena el cuadro
       de lado a lado y el marco se sale por arriba y por abajo, que es lo que
       se pide: la pantalla, no el telefono. */
    camara: { de: 1.32, a: 1.52 },
    tramos: [
      { dur: 0.04, hacer: { tipo: "pulsar", sel: ".perfil-anti", tras: 950 } },
      { dur: 2.8, hacer: null },
      { dur: 0.04, hacer: { tipo: "pulsar", sel: ".anti-interruptor" } },
      { dur: 5.2, hacer: null },
    ],
  },
];

/* -- Grabar --------------------------------------------------------------- */

const ff = spawn(FFMPEG, [
  "-y", "-loglevel", "error", "-nostats",
  "-f", "image2pipe", "-c:v", "mjpeg", "-r", String(FPS), "-i", "-",
  "-c:v", "libx264", "-preset", "slow", "-crf", "17",
  "-pix_fmt", "yuv420p", "-movflags", "+faststart",
  "-r", String(FPS),
  SALIDA,
], { stdio: ["pipe", "inherit", "inherit"] });

const escribe = (buf) => new Promise((r) => (ff.stdin.write(buf) ? r() : ff.stdin.once("drain", r)));

const navegador = await chromium.launch({ args: ["--force-color-profile=srgb", "--font-render-hinting=none"] });
let total = 0;

/* Para afinar una toma sin volver a rodar las tres. */
const SOLO = arg("--toma", null);

/* Y para mirar el marco sin rodar nada: una captura de la primera pose de
   cada toma. Afinar el teléfono a base de vídeos de trece segundos es tirar
   el rato. */
const FOTO = process.argv.includes("--foto");
const SCROLL = Number(arg("--scroll", 0));
if (FOTO) {
  for (const toma of TOMAS.filter((t) => !SOLO || t.nombre === SOLO)) {
    const pag = await navegador.newPage({
      viewport: { width: ANCHO, height: ALTO },
      deviceScaleFactor: DENSIDAD, colorScheme: "light",
    });
    await pag.clock.install();
    await pag.setContent(pagina({ pantalla: toma.pantalla, orden: toma.orden }), { waitUntil: "domcontentloaded", timeout: 180000 });
    await pag.clock.runFor(4000);
    await pag.waitForTimeout(700);
    /* Igual que al rodar: el aviso del regalo salta con temporizador y aquí
       taparía justo lo que se viene a mirar. */
    await pag.evaluate(() => document.querySelector(".regalo-velo")?.click());
    await pag.clock.runFor(500);
    await pag.waitForTimeout(250);
    if (SCROLL) await pag.evaluate((y) => {
      const e = document.querySelector(".inicio-scroll, .muro-pase, .perfil-scroll");
      if (e) e.scrollTop = y;
    }, SCROLL);
    /* Vuelve a saltar cuando le toca su temporizador, así que se cierra otra
       vez justo antes de disparar. */
    await pag.evaluate(() => document.querySelector(".regalo-velo")?.click());
    await pag.clock.runFor(400);
    await pag.waitForTimeout(250);
    await pag.screenshot({ path: `/tmp/marco-${toma.nombre}.png` });
    console.log(`  /tmp/marco-${toma.nombre}.png`);
    await pag.close();
  }
  await navegador.close();
  ff.stdin.end();
  process.exit(0);
}

for (const toma of TOMAS.filter((t) => !SOLO || t.nombre === SOLO)) {
  const pag = await navegador.newPage({
    viewport: { width: ANCHO, height: ALTO },
    deviceScaleFactor: DENSIDAD,
    colorScheme: "light",
    reducedMotion: "no-preference",
  });
  await pag.clock.install();
  await pag.setContent(pagina({ pantalla: toma.pantalla, orden: toma.orden }), { waitUntil: "domcontentloaded", timeout: 180000 });
  /* Que la app monte, pinte y termine su animación de entrada antes de rodar.
     Se adelanta de sobra —cuatro segundos— porque el aviso del regalo no sale
     al entrar sino con un temporizador, y hay que dejarle salir aquí para
     poder cerrarlo aquí. Con el reloj congelado esto no cuesta tiempo real. */
  await pag.clock.runFor(4000);
  await pag.waitForTimeout(700);

  /* Al llegar a la biblioteca salta el aviso del regalo y tapa la pantalla
     entera. En la app está bien —se enseña una vez y se cierra—, pero en el
     anuncio se come justo la parte de los libros. Se cierra por el velo, que
     es lo que hace un dedo en cualquier sitio fuera de la tarjeta. */
  for (const velo of [".regalo-velo", ".valoracion-velo"]) {
    const habia = await pag.evaluate((s) => {
      const e = document.querySelector(s);
      if (!e) return false;
      e.click();
      return true;
    }, velo);
    if (habia) {
      await pag.clock.runFor(500);
      await pag.waitForTimeout(200);
      console.log(`  cerrado ${velo}`);
    }
  }

  /* Dónde está el desplazamiento de esta pantalla. */
  const scroller = await pag.evaluate(() => {
    for (const s of [".muro-pase", ".biblio-scroll", ".perfil-scroll", ".pantalla-scroll"]) {
      const e = document.querySelector(s);
      if (e && e.scrollHeight > e.clientHeight + 4) return s;
    }
    /* Si no está entre los conocidos, se busca el que de verdad desplaza. */
    const todos = [...document.querySelectorAll("div, main, section")];
    const c = todos.find((e) => e.scrollHeight > e.clientHeight + 40
      && getComputedStyle(e).overflowY.match(/auto|scroll/));
    return c ? (c.className ? "." + String(c.className).split(" ")[0] : null) : null;
  });
  console.log(`  toma «${toma.nombre}» · desplaza ${scroller ?? "nada"}`);

  const alto = await pag.evaluate((s) => {
    const e = s && document.querySelector(s);
    return e ? e.clientHeight : 812;
  }, scroller);

  /* Cuántos fotogramas dura la toma entera: la cámara se interpola contra eso
     y no contra cada tramo, o daría un tirón en cada corte. */
  const totalToma = toma.tramos.reduce((n, t) => n + Math.max(1, Math.round(t.dur * FPS)), 0);
  let hechos = 0;

  let base = 0;
  for (const tramo of toma.tramos) {
    const cuadros = Math.max(1, Math.round(tramo.dur * FPS));
    const desde = base;
    let hasta = base;
    if (tramo.hacer?.tipo === "pasar") hasta = tramo.hacer.a * alto;
    if (tramo.hacer?.tipo === "bajar") hasta = base + tramo.hacer.px;
    /* Bajar una cifra fija se pasa de largo en cuanto la pantalla cambia de
       alto: en el perfil se colaba por debajo del contenido y salían dos
       segundos de papel en blanco. Con «hasta» se mide dónde está la pieza
       que se quiere enseñar y se para ahí, sin salirse del recorrido. */
    if (tramo.hacer?.tipo === "hasta") {
      hasta = await pag.evaluate(([s, sel, margen]) => {
        const caja = document.querySelector(s);
        const e = document.querySelector(sel);
        if (!caja || !e) return null;
        const y = caja.scrollTop + e.getBoundingClientRect().top - caja.getBoundingClientRect().top;
        return Math.max(0, Math.min(caja.scrollHeight - caja.clientHeight, y - margen));
      }, [scroller, tramo.hacer.sel, tramo.hacer.margen ?? 240]);
      if (hasta === null) { console.log(`  ojo: no encontré «${tramo.hacer.sel}»`); hasta = base; }
    }

    if (tramo.hacer?.tipo === "pulsar") {
      const dio = await pag.evaluate(([sel, texto]) => {
        /* Con texto se busca la pastilla que lo pone —los filtros de la
           biblioteca no tienen clase propia por categoría—; sin él, el
           primero que case con el selector. */
        const e = texto
          ? [...document.querySelectorAll(sel)].find((x) => x.textContent.trim() === texto)
          : document.querySelector(sel);
        if (!e) return false;
        e.scrollIntoView({ block: "center" });
        e.click();
        return true;
      }, [tramo.hacer.sel, tramo.hacer.texto ?? null]);
      if (!dio) console.log(`  ojo: no encontré «${tramo.hacer.sel}»`);
      /* La pantalla que entra tarda en aparecer: monta sobre el papel y su
         contenido se funde desde cero. Grabarlo son casi treinta fotogramas
         de folio en blanco en mitad del anuncio. Se le adelanta el reloj sin
         capturar nada, y el corte queda en la app entrando ya de lleno. */
      if (tramo.hacer.tras) {
        await pag.clock.runFor(tramo.hacer.tras);
        await pag.waitForTimeout(160);
      }
      /* Después de pulsar, el contenido es otro y el desplazamiento que
         traíamos apuntaba al anterior: se vuelve arriba de verdad, no solo en
         la cuenta, o la parrilla nueva sale por la mitad. */
      await pag.evaluate((s) => {
        const e = s && document.querySelector(s);
        if (e) e.scrollTop = 0;
      }, scroller);
      hasta = 0;
    }

    for (let f = 0; f < cuadros; f++) {
      const p = cuadros === 1 ? 1 : (f + 1) / cuadros;
      /* El aviso del regalo tiene su propio temporizador y vuelve a saltar
         cuando le toca, ya empezada la toma. Cerrarlo solo al principio no
         basta: se mira en cada fotograma, que va en la misma llamada que el
         desplazamiento y no cuesta nada. */
      let y = null;
      if (tramo.hacer?.tipo === "pasar" || tramo.hacer?.tipo === "bajar"
          || tramo.hacer?.tipo === "hasta") {
        const curva = tramo.hacer.tipo === "pasar" ? dedo(p) : suave(p);
        y = desde + (hasta - desde) * curva;
      }
      const cam = toma.camara ?? { de: 1, a: 1 };
      const escala = cam.de + (cam.a - cam.de) * suave(totalToma <= 1 ? 1 : hechos / (totalToma - 1));

      await pag.evaluate(([s, y, esc]) => {
        if (y !== null) { const e = s && document.querySelector(s); if (e) e.scrollTop = y; }
        const velo = document.querySelector(".regalo-velo");
        if (velo) velo.click();
        const escena = document.querySelector(".escena");
        if (escena) escena.style.transform = "scale(" + esc + ")";
      }, [scroller, y, escala]);
      await pag.clock.runFor(Math.round(1000 / FPS));
      await escribe(await pag.screenshot({ type: "jpeg", quality: 96 }));
      total++; hechos++;
    }
    base = hasta;
  }
  await pag.close();
  console.log(`  toma «${toma.nombre}» lista · ${total} fotogramas acumulados`);
}

await navegador.close();
ff.stdin.end();
await new Promise((r) => ff.on("close", r));
console.log(`\n${SALIDA} · ${total} fotogramas · ${(total / FPS).toFixed(1)} s a ${FPS} fps`);
