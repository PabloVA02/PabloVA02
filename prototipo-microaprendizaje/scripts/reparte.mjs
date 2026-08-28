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
    const tope = hoja.getBoundingClientRect().bottom - parseFloat(getComputedStyle(hoja).paddingBottom);
    const linea = parseFloat(getComputedStyle(cuerpo).lineHeight) || 24;
    return (tope - cuerpo.getBoundingClientRect().bottom) / linea;
  }, html);
}

/* --- 3. El reparto: cada pantalla, hasta el borde -------------------------

   Se avanza por átomos y se pregunta al navegador. Como cada pantalla lleva
   entre cien y doscientas palabras, preguntar una por una serían miles de
   viajes: se busca por bisección —cuánto cabe entre lo que ya sé que cabe y
   lo que sé que no— y salen unos siete por pantalla.

   Los dos remates, después de saber dónde se corta:
   · si el corte deja un subtítulo de último átomo, se retrocede hasta antes
     del subtítulo;
   · si deja un rayo o un subtítulo partido por la mitad —no puede pasar,
     porque son átomos enteros— se retrocedería igual. */

const trozos = atomos(lista);
const M = trozos.length;

async function cabeHasta(desde, hasta) {
  return (await aire(conGuiones(aHtml(trozos.slice(desde, hasta))))) >= 0;
}

const paginas = [];
let desde = 0;
while (desde < M) {
  /* Bisección: `bien` es el último final que sé que cabe, `mal` el primero
     que sé que no. */
  let bien = desde + 1;
  let mal = M + 1;
  /* Primero se dobla hacia arriba, para no empezar la bisección en 1..M
     cuando una pantalla son doscientos átomos de dos mil. */
  let salto = 32;
  while (bien + salto <= M && (await cabeHasta(desde, bien + salto))) {
    bien += salto;
    salto *= 2;
  }
  mal = Math.min(M + 1, bien + salto);
  while (mal - bien > 1) {
    const medio = Math.floor((bien + mal) / 2);
    if (await cabeHasta(desde, medio)) bien = medio;
    else mal = medio;
  }
  let hasta = bien;
  /* Un subtítulo no cierra una pantalla. */
  while (hasta > desde + 1 && trozos[hasta - 1].tipo === "rotulo") hasta--;
  paginas.push(trozos.slice(desde, hasta));
  desde = hasta;
}

/* LA HUÉRFANA DEL FINAL. Llenando hasta el borde, lo que sobra al terminar el
   texto cae entero en la última pantalla, y a veces son dos renglones: una
   pantalla con dos renglones y el resto vacío no se lee como un final, se lee
   como una avería.

   Cuando pasa, se reparte el final entre las ÚLTIMAS N pantallas por igual, y
   se prueba con dos, tres y cuatro: gana la que deja el hueco más pequeño en
   la peor de ellas. Con dos salían dos pantallas a medias; con tres o cuatro,
   el final baja despacio, que es como acaba un capítulo. */
async function aireDe(p) {
  return aire(conGuiones(aHtml(p)));
}

if (paginas.length >= 2 && (await aireDe(paginas[paginas.length - 1])) > 8) {
  const juntas = [...paginas[paginas.length - 2], ...paginas[paginas.length - 1]];
  let mejor = null;
  /* Se prueba cada corte y gana el que iguala más los dos huecos, sin que
     ninguna de las dos se salga. Se reparten DOS y no tres: con tres, el hueco
     dejaba de estar al final y aparecía en medio de la tirada, que es peor.
     Un final que baja en dos pantallas se lee como un final. */
  for (let k = 1; k < juntas.length; k++) {
    const a = await aireDe(juntas.slice(0, k));
    if (a < 0) continue;
    const b = await aireDe(juntas.slice(k));
    if (b < 0) continue;
    const dif = Math.abs(a - b);
    if (!mejor || dif < mejor.dif) mejor = { k, dif };
  }
  if (mejor) paginas.splice(-2, 2, juntas.slice(0, mejor.k), juntas.slice(mejor.k));
}

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
