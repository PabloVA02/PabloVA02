/* ==========================================================================
   REPARTE EN PANTALLAS UN TEXTO DE PABLO, LLENÁNDOLAS HASTA EL BORDE

       node --experimental-strip-types scripts/reparte.mjs \
            referencia/textos-de-pablo/cuanto-le-queda-al-sol.md > /tmp/corte.json

   POR QUÉ EXISTE. Los cortes los elegía yo a ojo y salían pantallas medio
   vacías. Pablo, el 28 de agosto: «el texto no está ajustado abajo; me da
   igual que el texto se corte, pero debe estar ajustado abajo, y que quede
   todo ajustado abajo, todas las páginas».

   A ojo no se puede: lo que cabe no depende de las palabras sino de cómo caen
   los renglones, y eso solo lo sabe el navegador. Así que esto abre la app de
   verdad, mete el HTML candidato en una pantalla de verdad y pregunta si se
   sale.

   Y CORTA POR PALABRAS, NO POR PÁRRAFOS, que es lo que cambió el 28 por la
   tarde. Repartiendo por bloques enteros, la última pantalla de cada sección
   se quedaba con lo que sobrara: de siete renglones de hueco para arriba.
   Ahora un párrafo puede terminar a media pantalla y seguir en la siguiente,
   igual que en un libro de papel, y entonces TODAS llegan al borde. El texto
   no se pierde ni se recorta: continúa.

   Lo que no se parte nunca es un subtítulo ni una caja del rayo —son piezas
   de una sola cosa— y un subtítulo tampoco se queda de último bloque de una
   pantalla, que sería un título con nada debajo.

   Antes hay que construir y servir:
     npx vite build && python3 -m http.server 4173 --directory dist &
   ========================================================================== */
import { readFileSync } from "node:fs";
import { chromium } from "playwright-core";
import { conGuiones } from "../src/silabas.ts";

const RUTA = process.argv[2];
if (!RUTA) {
  console.error("uso: node --experimental-strip-types scripts/reparte.mjs fichero.md");
  process.exit(1);
}

/* --- 1. El texto de Pablo, en bloques ------------------------------------ */

const marcas = (t) =>
  t
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, "<em>$1</em>");

/** De su `.md` a la lista de bloques, en su orden y sin tocar una palabra. */
function bloques(md) {
  const fuera = [];
  let vinetas = [];
  let seccion = "";
  const cierraLista = () => {
    if (!vinetas.length) return;
    fuera.push({ tipo: "lista", html: `<ul>${vinetas.map((v) => `<li>${v}</li>`).join("")}</ul>`, seccion });
    vinetas = [];
  };
  for (const [i, tramo] of md.split(/\n## /).entries()) {
    const lineas = tramo.split("\n").map((l) => l.trim());
    if (i === 0) continue;
    cierraLista();
    seccion = lineas[0];
    fuera.push({ tipo: "rotulo", html: `<h3>${marcas(lineas[0])}</h3>`, seccion: lineas[0] });
    for (const l of lineas.slice(1)) {
      if (!l) continue;
      if (l.startsWith("•")) { vinetas.push(marcas(l.slice(1).trim())); continue; }
      cierraLista();
      if (l.startsWith("> ⚡")) {
        fuera.push({ tipo: "rayo", html: `<blockquote class="rayo"><p>${marcas(l.slice(3).trim())}</p></blockquote>`, seccion: lineas[0] });
        continue;
      }
      fuera.push({ tipo: "parrafo", html: `<p>${marcas(l)}</p>`, seccion: lineas[0] });
    }
  }
  cierraLista();
  return fuera;
}

const md = readFileSync(RUTA, "utf8");

/* --- 1 bis. Los bloques, en ÁTOMOS ---------------------------------------

   Un átomo es lo más pequeño que se puede dejar en una pantalla sin que el
   corte quede mal:

     · de un párrafo, cada FRASE
     · de una lista, cada punto
     · un subtítulo o un rayo, enteros

   POR FRASES Y NO POR PALABRAS, que es lo que corrigió Pablo el 28 de agosto:
   «cortar no me refiero en ese sentido; que lo ajustes en el sentido de por
   ejemplo "Mercurio será el primero en desaparecer." y lo que viene después lo
   pasas a la siguiente página; tiene que estar ajustado abajo, pero no cortes
   las palabras: aproxímalo, y cuando haya un punto o algo pues pasas a la
   siguiente página con el resto del texto».

   Por palabras la pantalla quedaba al ras, pero cortando a mitad de frase, y
   una frase partida entre dos pantallas obliga a recordar cómo empezaba. Por
   frases se pierde algún renglón —lo que ocupe la frase que no cabe— y a
   cambio cada pantalla acaba donde acaba una idea.

   Cada átomo sabe volver a montarse en HTML junto con los suyos, y ese es
   todo el truco: la pantalla es una tirada de átomos y el HTML se arma al
   final, cerrando y reabriendo el `<p>` o el `<ul>` en los cortes. */

/** Un párrafo, en frases. Corta después de punto, interrogación, exclamación
 *  o puntos suspensivos, admitiendo lo que suele ir pegado detrás —comillas,
 *  paréntesis, una etiqueta que se cierra— y solo si viene un espacio: así
 *  «1.291 bostezos» y «0,4 grados» no se parten por el punto del millar. */
function frases(texto) {
  return texto.split(/(?<=[.!?…][»"')\]]?(?:<\/(?:strong|em)>)?)\s+/).filter(Boolean);
}

function atomos(lista) {
  const fuera = [];
  for (const [i, b] of lista.entries()) {
    if (b.tipo === "parrafo") {
      const dentro = b.html.replace(/^<p>|<\/p>$/g, "");
      for (const frase of frases(dentro))
        fuera.push({ de: i, tipo: "parrafo", pieza: frase, seccion: b.seccion });
    } else if (b.tipo === "lista") {
      for (const punto of b.html.replace(/^<ul>|<\/ul>$/g, "").split("</li>").filter(Boolean))
        fuera.push({ de: i, tipo: "lista", pieza: punto + "</li>", seccion: b.seccion });
    } else {
      fuera.push({ de: i, tipo: b.tipo, pieza: b.html, seccion: b.seccion });
    }
  }
  return fuera;
}

/** De vuelta a HTML: los átomos seguidos del mismo bloque se juntan. */
function aHtml(trozo) {
  let salida = "";
  let abierto = null;
  let acumulado = [];
  const cierra = () => {
    if (!abierto) return;
    salida += abierto === "parrafo"
      ? `<p>${acumulado.join(" ")}</p>`
      : `<ul>${acumulado.join("")}</ul>`;
    abierto = null;
    acumulado = [];
  };
  let ultimoDe = null;
  for (const a of trozo) {
    if (a.tipo === "parrafo" || a.tipo === "lista") {
      if (abierto && (abierto !== a.tipo || ultimoDe !== a.de)) cierra();
      abierto = a.tipo;
      ultimoDe = a.de;
      acumulado.push(a.pieza);
    } else {
      cierra();
      salida += a.pieza;
      ultimoDe = a.de;
    }
  }
  cierra();
  return salida;
}

const lista = bloques(md);
const titulo = /^# (.+)$/m.exec(md)?.[1] ?? "";

/* --- 2. Qué cabe, preguntándoselo a la pantalla de verdad ----------------- */

const nav = await chromium.launch({
  executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
/* SE MIDE EN EL MÓVIL MÁS PEQUEÑO, no en el más cómodo. 375x812 es el de las
   capturas que manda Pablo; el mirador se ve a 390 y la app llega a 430. Si el
   reparto se calcula en el grande, en el pequeño el texto se sale y el ajuste
   automático lo encoge, que es justo lo que él no quiere —la letra tiene que
   medir lo mismo que en el libro—. Calculado en el pequeño, en los otros dos
   sobra un renglón escaso y no se nota. */
const pag = await nav.newPage({ viewport: { width: 375, height: 812 } });
await pag.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
await pag.waitForTimeout(2200);
/* A una pantalla de texto: la portada no tiene `.short-cuerpo` donde medir. */
await pag.mouse.click(390 * 0.8, 844 * 0.55);
await pag.waitForTimeout(1200);

/** Cuántos renglones sobran —o faltan, en negativo— con este contenido. */
async function aire(html) {
  return pag.evaluate((h) => {
    const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
      const c = e.getBoundingClientRect();
      return c.top > -50 && c.top < 50;
    });
    const hoja = vis.querySelector(".muro-hoja");
    const cuerpo = vis.querySelector(".short-cuerpo");
    /* El ajuste automático encoge la letra cuando el texto se pasa, y aquí
       falsearía la medida: se mide siempre a tamaño natural. */
    vis.style.setProperty("--ajuste", "1");
    cuerpo.innerHTML = h;
    /* Y SIN LA JUSTIFICACIÓN VERTICAL. La pantalla reparte lo que sobra entre
       los párrafos —`justify-content: space-between`—, así que el último
       bloque cae SIEMPRE en el margen de abajo y preguntarle dónde acaba
       devolvería cero siempre. Lo que hay que medir es el alto natural del
       texto, apilado desde arriba, que es lo que decide cuánto cabe. Se apaga
       mientras se mide y se vuelve a poner. */
    const antes = cuerpo.style.justifyContent;
    cuerpo.style.justifyContent = "flex-start";
    const ultimo = cuerpo.lastElementChild;
    const fondo = ultimo ? ultimo.getBoundingClientRect().bottom : cuerpo.getBoundingClientRect().top;
    cuerpo.style.justifyContent = antes;
    const tope = hoja.getBoundingClientRect().bottom - parseFloat(getComputedStyle(hoja).paddingBottom);
    const linea = parseFloat(getComputedStyle(cuerpo).lineHeight) || 24;
    return (tope - fondo) / linea;
  }, html);
}

/* --- 3. El reparto -------------------------------------------------------

   Dos pasos, y el segundo es el que importa desde que la pantalla justifica
   en vertical.

   PRIMERO, QUÉ CABE. Para cada frase se mide hasta dónde se puede llegar sin
   salirse. Como una pantalla lleva entre seis y doce frases, preguntar una a
   una serían miles de viajes al navegador: se dobla hacia arriba y luego se
   busca por bisección, y salen unos siete por pantalla.

   DESPUÉS, CÓMO SE REPARTE. Llenar cada pantalla hasta el tope —lo primero
   que se probó— deja las primeras al ras y la última con lo que sobre, y eso
   ahora se nota el doble: el hueco no se queda abajo, se reparte entre los
   párrafos, así que una pantalla a la que le sobren siete renglones abre un
   blanco visible en medio. Lo que hace falta es que a NINGUNA le sobre mucho.

   Así que, entre todos los repartos que usan el mínimo de pantallas, se elige
   el que reparte el sobrante más parejo, penalizando el hueco al cuadrado:
   con el cuadrado, 3+3+3 gana a 0+1+8. Es el mismo criterio con el que se
   parten los renglones de un párrafo, aplicado a pantallas. */

const trozos = atomos(lista);
const M = trozos.length;

async function cabeHasta(desde, hasta) {
  return (await aire(conGuiones(aHtml(trozos.slice(desde, hasta))))) >= 0;
}

/** Para cada frase, todos los finales de pantalla posibles, con su hueco. */
const cabe = [];
for (let i = 0; i < M; i++) {
  /* Hasta dónde llega, por bisección. */
  let bien = i + 1;
  let salto = 16;
  while (bien + salto <= M && (await cabeHasta(i, bien + salto))) {
    bien += salto;
    salto *= 2;
  }
  let mal = Math.min(M + 1, bien + salto);
  while (mal - bien > 1) {
    const medio = Math.floor((bien + mal) / 2);
    if (await cabeHasta(i, medio)) bien = medio;
    else mal = medio;
  }
  const suyas = [];
  for (let j = i + 1; j <= bien; j++) {
    /* Un subtítulo no cierra una pantalla: un título con nada debajo es un
       renglón colgando. */
    if (trozos[j - 1].tipo === "rotulo") continue;
    suyas.push({ j, aire: await aire(conGuiones(aHtml(trozos.slice(i, j)))) });
  }
  if (!suyas.length) suyas.push({ j: i + 1, aire: 0 });
  cabe.push(suyas);
}

/** Mínimo número de pantallas desde la frase i. */
const cuantas = new Array(M + 1).fill(Infinity);
cuantas[M] = 0;
for (let i = M - 1; i >= 0; i--)
  for (const { j } of cabe[i]) cuantas[i] = Math.min(cuantas[i], 1 + cuantas[j]);

/** Con ese número fijo, el reparto de hueco más parejo. */
const coste = new Array(M + 1).fill(Infinity);
const salta = new Array(M + 1).fill(-1);
coste[M] = 0;
for (let i = M - 1; i >= 0; i--)
  for (const { j, aire: a } of cabe[i]) {
    if (1 + cuantas[j] !== cuantas[i]) continue;
    const c = a * a + coste[j];
    if (c < coste[i]) { coste[i] = c; salta[i] = j; }
  }

const paginas = [];
for (let i = 0; i < M; i = salta[i]) paginas.push(trozos.slice(i, salta[i]));

const medidas = [];
for (const p of paginas) medidas.push(+(await aire(conGuiones(aHtml(p)))).toFixed(1));
await nav.close();

/* --- 4. Comprobación: ni una palabra perdida, repetida ni movida ---------- */
const puestos = paginas.flat();
if (puestos.length !== M) throw new Error(`${puestos.length} átomos repartidos de ${M}`);
for (const [i, a] of puestos.entries())
  if (a.pieza !== trozos[i].pieza) throw new Error(`el átomo ${i} se ha movido de sitio`);

const palabras = (h) => h.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
for (const [i, p] of paginas.entries())
  console.error(
    `  ${String(i + 1).padStart(2)}  ${String(palabras(aHtml(p))).padStart(3)} pal` +
    `  aire ${String(medidas[i]).padStart(5)}`,
  );
console.error(`${titulo}: ${paginas.length} pantallas`);

process.stdout.write(JSON.stringify({
  titulo,
  paginas: paginas.map((p) => ({
    /* El rótulo se sigue guardando aunque vaya pintado dentro del HTML: le
       sirve de esqueleto a quien revise, y `validar.mjs` lo pide. En una
       pantalla que empieza a media sección es el de la sección que viene
       arrastrando. */
    rotulo: p[0].seccion,
    html: aHtml(p),
  })),
}, null, 1));
