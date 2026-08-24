/* ==========================================================================
   El simulador de móvil: la app entera dentro de un teléfono, en un solo
   fichero y SIN NECESITAR LA RED.

   Es la diferencia con `demo.mjs` y con `artefacto.mjs`. Los dos empaquetan la
   app, pero dejan las fotografías donde están: se piden a Commons cuando el
   navegador pinta la pantalla. Eso funciona en un navegador normal y NO
   funciona donde se publica esto, que tiene la salida a la red cerrada: la
   app se ve entera y las bandas de imagen salen vacías.

   Aquí las fotos viajan dentro. El script se baja de Commons una copia
   estrecha de cada una —la banda no llega a cuatrocientos puntos de ancho, así
   que no hace falta más— y las deja en una tabla que la página instala antes
   de arrancar la app. `urlFoto()` mira esa tabla primero.

   Tampoco hay iframe, que es la otra cosa que un visor cerrado puede negar.
   La app va en el documento y el tamaño del teléfono se le impone por CSS:
   son cuatro reglas, porque toda la app vive dentro de `.shell`.

   El tope para publicar la página son 16 MB y la app compilada ya se come
   diez, porque los resúmenes de los libros van todos dentro. Así que las
   fotos pasan por Chromium, que las reescribe en WebP: es la mitad de peso
   que el JPEG de Commons a la misma vista, y es lo que hace que quepan.

       node scripts/movil.mjs [--ancho 400] [--calidad 0.74]

   Deja `movil.html` en la raíz. Se publica tal cual.
   ========================================================================== */

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { chromium } from "playwright";

const ejecuta = promisify(execFile);
const RAIZ = new URL("..", import.meta.url).pathname;
const HISTORIAS = join(RAIZ, "src", "historias");
/* Las fotos ya bajadas de Commons. Vivían en `/tmp`, y en un contenedor de
   los de web eso se vacía en cada arranque: rehacer el simulador costaba media
   hora de descargas, y a ratos Commons contestaba con un 429. Aquí al lado
   duran lo que dure la copia de trabajo. La carpeta está en el `.gitignore` y
   son unos doscientos megas de originales. */
const CACHE = process.env.CURVA_CACHE ?? join(RAIZ, "fotos-cache");
const UA = "Curva/1.0 (proyecto educativo; contacto: pabloverdalo@gmail.com)";

const arg = (nombre, porDefecto) => {
  const i = process.argv.indexOf(nombre);
  return i > 0 ? process.argv[i + 1] : porDefecto;
};
/* Ancho de la copia que viaja dentro. La banda de imagen ocupa el ancho del
   teléfono, 375 puntos, así que 400 llega. Subirlo se nota poco en pantalla y
   mucho en el peso, y el peso es lo que decide si la página se puede publicar:
   a 440 las ciento cuarenta y dos fotos de ahora ya dejaban un mega de margen
   sobre el tope de 16. */
const ANCHO = Number(arg("--ancho", 400));
const CALIDAD = Number(arg("--calidad", 0.74));

/* Las cubiertas que dibuja Pablo viven en `cubiertas.ts` a la calidad que
   necesita la APP, que no tiene ningún tope de tamaño. Este fichero sí lo
   tiene —16 MB para publicarlo—, así que aquí se encogen, y solo aquí.
   Así el producto conserva la calidad y el simulador cabe. */
const CUB_ANCHO = Number(arg("--cubiertas-ancho", 480));
const CUB_CALIDAD = Number(arg("--cubiertas-calidad", 0.82));
/* De dónde sale la app compilada. Por defecto `dist-uno`, que lleva los libros
   dentro; `dist-artefacto` los deja como trozos aparte y libera siete megas
   para fotografías. Se coge el trozo de entrada, no el primero por orden. */
const DIST_DIR = arg("--dist", "dist-uno");
/* La lista, en el orden del muro, de las fotografías que hay que meter. Sin
   ella entran todas, que es lo que se hacía cuando cabían. Con dos mil ya no
   caben, así que se llenan los megas disponibles empezando por el principio
   del muro y el resto de historias salen con su cartel. */
const LISTA = arg("--lista", null);
/* Cuántos megas de fotografía como mucho. El tope de publicación son 16 y la
   app ocupa lo que ocupe, así que esto es lo que sobra menos un margen. */
const TOPE = Number(arg("--tope", 0)) * 1024 * 1024;
const DIST = join(RAIZ, DIST_DIR, "assets");
/* A Commons se le pide más grande de lo que se guarda: reducir a partir de una
   imagen holgada sale más limpio que pedirle a Commons la miniatura justa. */
const ORIGEN = 800;

const kb = (n) => `${Math.round(n / 1024)} kB`;
const mb = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`;

/* -- 1. Qué fotos hay que llevarse ---------------------------------------- */

const nombres = new Set();

/* Las portadas de los libros van SIEMPRE, vaya o no una lista de shorts. Son
   menos de doscientas y son lo primero que se ve al entrar en la biblioteca:
   si no viajan dentro, esa pantalla sale en blanco, porque aquí no hay red.
   Se meten las primeras para que el recorte por peso no se las lleve. */
const PORTADAS = join(RAIZ, "src", "libros", "portadas.ts");
const CUBIERTAS = join(RAIZ, "src", "libros", "cubiertas.ts");
if (existsSync(PORTADAS)) {
  const texto = readFileSync(PORTADAS, "utf8");
  /* Un libro con cubierta dibujada no usa su fotografía de Commons: en
     `portadas.ts` la entrada sigue estando, pero `CUBIERTAS_PROPIAS` la pisa
     al construir `PORTADAS_LIBRO`. Traérsela sería empotrar una imagen que no
     va a pintar nadie, y aquí cada kilobyte se descuenta del tope de 16 MB. */
  const dibujadas = existsSync(CUBIERTAS)
    ? new Set([...readFileSync(CUBIERTAS, "utf8").matchAll(/^  "([\w-]+)": \{$/gm)].map((m) => m[1]))
    : new Set();
  let pisadas = 0;
  for (const bloque of texto.split(/\n  (?=("?[\w-]+"?): \{)/)) {
    const id = bloque.match(/^"?([\w-]+)"?: \{/)?.[1];
    if (id && dibujadas.has(id)) { pisadas++; continue; }
    for (const m of bloque.matchAll(/archivo:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g))
      nombres.add(m[1].replace(/\\"/g, '"'));
  }
  console.log(
    `  ${nombres.size} de ellas son portadas de libros` +
      (pisadas ? ` · ${pisadas} las pisa una cubierta dibujada` : ""),
  );
}

if (LISTA) {
  for (const n of JSON.parse(readFileSync(LISTA, "utf8"))) nombres.add(n);
} else {
  for (const f of readdirSync(HISTORIAS).filter((x) => x.endsWith(".ts"))) {
    const texto = readFileSync(join(HISTORIAS, f), "utf8");
    for (const m of texto.matchAll(/archivo:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g))
      nombres.add(m[1].replace(/\\"/g, '"'));
  }
}
console.log(`${nombres.size} fotografías de Commons que empotrar`);

/* -- 2. Traérselas, estrechas y una sola vez ------------------------------ */

/* `Special:FilePath?width=` devuelve la miniatura ya hecha por Commons, y de
   un TIFF o de un SVG devuelve un PNG. El tipo se lee de los primeros bytes,
   que es lo único que no miente. */
const tipo = (b) =>
  b[0] === 0xff && b[1] === 0xd8 ? "image/jpeg"
  : b[0] === 0x89 && b[1] === 0x50 ? "image/png"
  : b[0] === 0x47 && b[1] === 0x49 ? "image/gif"
  : b.slice(8, 12).toString() === "WEBP" ? "image/webp"
  : null;

if (!existsSync(CACHE)) mkdirSync(CACHE, { recursive: true });

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

/* Commons corta cuando se le piden muchas de golpe, y no con un error: con una
   página de dos kilobytes que no es una imagen. De ahí los reintentos, y de ahí
   que se vaya de tres en tres y no de seis en seis. Con el caché, la segunda
   pasada no le pide nada.

   Las esperas son de minutos y no de segundos porque el corte de Commons es un
   429 que dura minutos: con 4 y 8 segundos se agotaban los tres intentos sin
   que hubiera cedido y en una tirada de novecientas imágenes se quedaban
   doscientas fuera. */
const ESPERAS = [0, 5000, 15000, 30000, 60000, 90000, 120000];

async function trae(nombre) {
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${
    encodeURIComponent(nombre.replace(/ /g, "_"))}?width=${ORIGEN}`;
  const fichero = join(CACHE, createHash("sha1").update(url).digest("hex"));
  if (existsSync(fichero)) return readFileSync(fichero);
  let ultimo;
  for (let intento = 0; intento < ESPERAS.length; intento++) {
    await espera(ESPERAS[intento]);
    try {
      const { stdout } = await ejecuta(
        "curl", ["-sS", "-L", "--max-time", "90", "-H", `User-Agent: ${UA}`, url],
        { maxBuffer: 64 * 1024 * 1024, encoding: "buffer" },
      );
      if (!tipo(stdout)) throw new Error(`no es una imagen (${stdout.length} bytes)`);
      writeFileSync(fichero, stdout);
      return stdout;
    } catch (e) { ultimo = e; }
  }
  throw ultimo;
}

const crudas = new Map();
const fallidas = [];
let bruto = 0;

const pendientes = [...nombres];
await Promise.all(Array.from({ length: 3 }, async () => {
  for (let n = pendientes.shift(); n !== undefined; n = pendientes.shift()) {
    try {
      const datos = await trae(n);
      bruto += datos.length;
      crudas.set(n, `data:${tipo(datos)};base64,${datos.toString("base64")}`);
    } catch (e) {
      fallidas.push(n);
      console.log(`  no vino: ${n.slice(0, 70)} — ${e.message.slice(0, 60)}`);
    }
  }
}));

console.log(`  ${crudas.size} traídas de Commons · ${mb(bruto)} en bruto`);
if (fallidas.length) console.log(`  ${fallidas.length} sin traer, saldrán con su cartel`);

/* -- 2 bis. Estrecharlas, que si no no caben ------------------------------ */

/* No hay ImageMagick en este entorno, pero sí Chromium, y un <canvas> sabe
   escribir WebP. Se hace de diez en diez para no tener ciento diez imágenes
   descodificadas en memoria a la vez. */
const navegador = await chromium.launch({ executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const hoja = await navegador.newPage();
const tabla = new Map();
let peso = 0;

/* En el orden en que se pidieron, que es el del muro: si hay que cortar por
   peso, lo que se queda fuera son las historias del final y no unas cuantas
   sueltas repartidas por todo el muro. */
const cola = [...nombres].filter((n) => crudas.has(n));
let cortado = 0;
for (let i = 0; i < cola.length; i += 10) {
  if (TOPE && peso > TOPE) { cortado = cola.length - i; break; }
  const grupo = cola.slice(i, i + 10).map((n) => [n, crudas.get(n)]);
  const hechas = await hoja.evaluate(async ([grupo, ancho, calidad]) => {
    const lienzo = document.createElement("canvas");
    const pincel = lienzo.getContext("2d");
    const salida = [];
    for (const [nombre, fuente] of grupo) {
      const img = new Image();
      img.src = fuente;
      try { await img.decode(); } catch { salida.push([nombre, null]); continue; }
      const escala = Math.min(1, ancho / img.naturalWidth);
      lienzo.width = Math.round(img.naturalWidth * escala);
      lienzo.height = Math.round(img.naturalHeight * escala);
      pincel.drawImage(img, 0, 0, lienzo.width, lienzo.height);
      salida.push([nombre, lienzo.toDataURL("image/webp", calidad)]);
    }
    return salida;
  }, [grupo, ANCHO, CALIDAD]);
  for (const [nombre, datos] of hechas) {
    if (!datos) { fallidas.push(nombre); continue; }
    tabla.set(nombre, datos);
    peso += datos.length;
  }
  process.stdout.write(`\r  reescritas ${tabla.size}/${cola.length}`);
}
await navegador.close();
console.log(`\n  ${tabla.size} en WebP de ${ANCHO} de ancho · ${mb(peso)} ya en texto`);
if (cortado) console.log(`  ${cortado} se quedaron fuera por el tope de ${mb(TOPE)}`);

/* -- 3. La app compilada -------------------------------------------------- */

const activos = readdirSync(DIST);
const leer = (ext) => {
  /* Con los libros en trozos aparte hay muchos `.js` en la carpeta y el que
     hace falta es el de entrada, que es el que Vite llama `index`. */
  const f = activos.find((a) => a.startsWith("index") && a.endsWith(ext))
    ?? activos.find((a) => a.endsWith(ext));
  if (!f) throw new Error(`No hay ningún ${ext} en ${DIST_DIR}/assets. ¿Has compilado?`);
  return readFileSync(join(DIST, f), "utf8").trim();
};
const css = leer(".css");
let js = leer(".js");

/* Las cubiertas viajan dentro del propio JavaScript, como texto, y son la
   partida más gorda del paquete. Se reescriben aquí a un ancho menor: en la
   app se pintan a 172 puntos como mucho, así que 480 sobra, y lo que se
   ahorra se lo quedan las fotografías de los shorts.

   Se localizan por el `data:` y no por el nombre de la constante, porque
   Vite se los cambia al minimizar. En el paquete compilado no hay ninguna
   otra imagen WebP: las de los shorts las mete este mismo script después. */
const cubiertas = [...js.matchAll(/data:image\/webp;base64,[A-Za-z0-9+/=]+/g)].map((m) => m[0]);
if (cubiertas.length) {
  const antes = cubiertas.reduce((s, c) => s + c.length, 0);
  const nav2 = await chromium.launch({ executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
  const hoja2 = await nav2.newPage();
  const cambios = new Map();
  for (let i = 0; i < cubiertas.length; i += 10) {
    const grupo = cubiertas.slice(i, i + 10);
    const hechas = await hoja2.evaluate(async ([grupo, ancho, calidad]) => {
      const lienzo = document.createElement("canvas");
      const pincel = lienzo.getContext("2d");
      const salida = [];
      for (const fuente of grupo) {
        const img = new Image();
        img.src = fuente;
        try { await img.decode(); } catch { salida.push(null); continue; }
        const escala = Math.min(1, ancho / img.naturalWidth);
        lienzo.width = Math.round(img.naturalWidth * escala);
        lienzo.height = Math.round(img.naturalHeight * escala);
        pincel.drawImage(img, 0, 0, lienzo.width, lienzo.height);
        salida.push(lienzo.toDataURL("image/webp", calidad));
      }
      return salida;
    }, [grupo, CUB_ANCHO, CUB_CALIDAD]);
    /* Solo se cambia si de verdad encoge: una cubierta antigua que ya
       estuviera por debajo de este ancho no se vuelve a comprimir. */
    hechas.forEach((nueva, k) => {
      if (nueva && nueva.length < grupo[k].length) cambios.set(grupo[k], nueva);
    });
    process.stdout.write(`\r  cubiertas reescritas ${cambios.size}/${cubiertas.length}`);
  }
  await nav2.close();
  for (const [vieja, nueva] of cambios) js = js.split(vieja).join(nueva);
  const despues = cubiertas.reduce((s, c) => s + (cambios.get(c) ?? c).length, 0);
  console.log(
    `\n  ${cubiertas.length} cubiertas a ${CUB_ANCHO} de ancho · ` +
      `${mb(antes)} → ${mb(despues)}`,
  );
}

/* -- 4. El teléfono ------------------------------------------------------- */

/* Cuántos shorts hay y cuántos llevan ya sus cuatro fotos: es lo primero que
   se pregunta al abrir esto, y así no hay que ir a buscarlo a ESTADO.md. */
let shorts = 0, conFotos = 0;
for (const f of readdirSync(HISTORIAS).filter((x) => x.endsWith(".ts"))) {
  const texto = readFileSync(join(HISTORIAS, f), "utf8");
  for (const t of texto.split(/\n  \{\n/).slice(1)) {
    shorts++;
    const bloque = /\n    fotos: \[([\s\S]*?)\n    \],/.exec(t);
    if (bloque && (bloque[1].match(/\n      \{/g) ?? []).length === 4) conFotos++;
  }
}
const cuenta =
  `${shorts} historias escritas · ${conFotos} con sus cuatro fotografías. ` +
  `Las demás salen con su cartel, que es el diseño previsto mientras no hay imagen.`;

/* El marco es el de `demo.html`: 375 × 812, la medida para la que está hecha
   la app. Lo que cambia es que dentro no hay un iframe sino la app misma, así
   que después de la hoja de la app van las cuatro reglas que le imponen el
   tamaño del teléfono en lugar del de la ventana. */
const pagina = `<title>Curva · la app entera, en un móvil</title>

<style>
${css}

/* ---- el simulador manda sobre la hoja de la app ---- */
html, body {
  height: auto !important;
  overflow: visible !important;
  background: var(--marco-fondo) !important;
  color: var(--marco-tinta) !important;
}
#root { height: 100% !important; }
/* Toda la app vive dentro de .shell, así que fijarle el tamaño del teléfono
   es fijárselo a todo. Sin esto se estiraría a lo ancho de la ventana. */
.shell {
  width: 375px !important;
  height: 812px !important;
  min-height: 0 !important;
}

:root {
  --marco-fondo: #e6dfd2;
  --marco-fondo-2: #efe9de;
  --marco-tinta: #2e2822;
  --marco-suave: #6b6154;
  --marco-acento: #b3623f;
  --bisel: #221d18;
  --cromo: #cfc6b6;
  --sombra: 0 34px 72px rgba(60, 46, 30, 0.28);
}
@media (prefers-color-scheme: dark) {
  :root {
    --marco-fondo: #16130f; --marco-fondo-2: #1e1a15; --marco-tinta: #ece5da;
    --marco-suave: #a2988a; --marco-acento: #d98a63; --bisel: #050403;
    --cromo: #2a251f; --sombra: 0 34px 72px rgba(0, 0, 0, 0.66);
  }
}
:root[data-theme="light"] {
  --marco-fondo: #e6dfd2; --marco-fondo-2: #efe9de; --marco-tinta: #2e2822;
  --marco-suave: #6b6154; --marco-acento: #b3623f; --bisel: #221d18;
  --cromo: #cfc6b6; --sombra: 0 34px 72px rgba(60, 46, 30, 0.28);
}
:root[data-theme="dark"] {
  --marco-fondo: #16130f; --marco-fondo-2: #1e1a15; --marco-tinta: #ece5da;
  --marco-suave: #a2988a; --marco-acento: #d98a63; --bisel: #050403;
  --cromo: #2a251f; --sombra: 0 34px 72px rgba(0, 0, 0, 0.66);
}

body.simulador {
  min-height: 100vh;
  background: radial-gradient(115% 85% at 62% 0%, var(--marco-fondo-2) 0%, var(--marco-fondo) 64%) !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 26px 20px 34px;
  font-family: "Avenir Next", Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.sim-rotulo { text-align: center; display: flex; flex-direction: column; gap: 6px; max-width: 58ch; }
.sim-rotulo .sim-ceja {
  font-size: 10.5px; font-weight: 700; letter-spacing: 0.17em;
  text-transform: uppercase; color: var(--marco-acento);
}
.sim-rotulo h1 {
  margin: 0; font-size: 24px; font-weight: 640;
  letter-spacing: -0.028em; text-wrap: balance;
}
.sim-rotulo p {
  margin: 0; font-size: 13.5px; line-height: 1.55;
  color: var(--marco-suave); text-wrap: pretty;
}

.sim-area { display: flex; justify-content: center; width: 100%; }
.sim-escalador { transform-origin: top center; }

.sim-telefono {
  position: relative;
  width: 407px; height: 844px;
  background: var(--bisel);
  border-radius: 56px;
  padding: 16px;
  box-shadow: var(--sombra), inset 0 0 0 1.5px rgba(255, 255, 255, 0.1);
}
.sim-telefono::before, .sim-telefono::after {
  content: ""; position: absolute; left: -2.5px; width: 2.5px;
  border-radius: 2px 0 0 2px; background: var(--cromo);
}
.sim-telefono::before { top: 152px; height: 30px; }
.sim-telefono::after { top: 200px; height: 54px; }
.sim-encendido {
  position: absolute; right: -2.5px; top: 182px;
  width: 2.5px; height: 84px; border-radius: 0 2px 2px 0; background: var(--cromo);
}

/* TODAS LAS CLASES DE ESTA PÁGINA LLEVAN «sim-», Y NO ES UN CAPRICHO.

   El armazón del teléfono y la app viven en el MISMO documento, y este
   bloque de estilo va después del de la app: cualquier nombre que coincida
   gana y le pisa el suyo. Pasó con «pantalla», que aquí era el cristal del
   teléfono —crema y con las esquinas redondas— y en la app resultó ser una
   pantalla: quedó con el fondo del cristal, texto blanco sobre crema,
   ilegible. En el navegador se veía bien y solo en el simulador estaba roto,
   que es la peor manera de tener un fallo.

   Un prefijo lo hace imposible. Si algún día se añade una clase aquí, va con
   «sim-» aunque parezca que nadie más la va a usar. */

.sim-cristal {
  position: relative;
  width: 375px; height: 812px;
  border-radius: 42px;
  overflow: hidden;
  background: #f2ece1;
}
.sim-isla {
  position: absolute; top: 9px; left: 50%; transform: translateX(-50%);
  width: 104px; height: 26px; border-radius: 999px;
  background: #050403; z-index: 3; pointer-events: none;
}
.sim-barrita {
  position: absolute; bottom: 7px; left: 50%; transform: translateX(-50%);
  width: 134px; height: 5px; border-radius: 999px;
  background: rgba(0, 0, 0, 0.26); z-index: 3; pointer-events: none;
}

.sim-pie {
  font-size: 12px; color: var(--marco-suave); text-align: center;
  max-width: 58ch; line-height: 1.5; margin: 0;
}
</style>

<div class="sim-rotulo">
  <div class="sim-ceja">Curva · prototipo</div>
  <h1>La app entera, en un móvil</h1>
  <p>Se sube para cambiar de historia y se desliza a la derecha para avanzar
     dentro de ella. Las fotografías van dentro de esta página, así que se ven
     sin salir a la red.</p>
</div>

<div class="sim-area">
  <div class="sim-escalador" id="sim-escalador">
    <div class="sim-telefono">
      <div class="sim-encendido"></div>
      <div class="sim-cristal">
        <div class="sim-isla"></div>
        <div id="root"></div>
        <div class="sim-barrita"></div>
      </div>
    </div>
  </div>
</div>

<p class="sim-pie" id="sim-pie">${cuenta}</p>

<script>
document.body.classList.add("simulador");

/* El html de esta página lo pone el visor y va sin idioma. Los guiones de
   partición ya vienen puestos en el texto, así que esto no es imprescindible,
   pero sin idioma el navegador tampoco sabe leerlo en voz alta. */
document.documentElement.lang = "es";

/* Abre en la biblioteca y no en el muro, aunque el muro sea lo que más se
   revisa. El motivo es de navegación, no de gusto: la barra de pestañas solo
   sale en «inicio» y en «perfil» —dentro de un short estorbaría, y ahí está
   bien quitada—, así que abriendo en el muro no se podía salir de él y esta
   página se quedaba en un mirador de shorts. Desde la biblioteca se llega al
   muro con una pestaña, y del muro se vuelve como en la app. */
window.__PANTALLA = "inicio";

/* Las fotografías, empotradas. urlFoto() mira aquí antes de ir a Commons. */
window.__FOTOS = ${JSON.stringify(Object.fromEntries(tabla))};

/* El teléfono mide 844 de alto y casi ninguna ventana los tiene libres, así
   que se mide lo que queda y se escala. Medir, y no reservar una cifra fija,
   porque el rótulo cambia de alto según el ancho de la ventana. */
(function () {
  var escalador = document.getElementById("sim-escalador");
  var area = escalador.parentElement;
  var rotulo = document.querySelector(".sim-rotulo");
  var pie = document.getElementById("sim-pie");
  function encajar() {
    var ocupado = rotulo.offsetHeight + pie.offsetHeight + 96;
    var alto = Math.max(320, window.innerHeight - ocupado);
    var ancho = area.clientWidth || 407;
    var escala = Math.min(1, alto / 844, ancho / 407);
    escalador.style.transform = "scale(" + escala + ")";
    area.style.height = 844 * escala + "px";
  }
  window.addEventListener("resize", encajar);
  encajar();
  setTimeout(encajar, 60);
})();
</script>

<script type="module">
${js}
</script>`;

const salida = join(RAIZ, "movil.html");
writeFileSync(salida, pagina);
console.log(
  `movil.html listo · ${mb(pagina.length)} ` +
  `(js ${mb(js.length)} · css ${kb(css.length)} · fotos ${mb(peso)})`,
);
if (pagina.length > 15.5 * 1024 * 1024)
  console.log("  ¡ojo! el tope para publicarlo son 16 MB. Baja el --ancho.");
