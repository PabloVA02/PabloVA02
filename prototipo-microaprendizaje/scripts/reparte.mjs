/* ==========================================================================
   REPARTE EN PANTALLAS UN TEXTO DE PABLO, LLENÁNDOLAS HASTA ABAJO

       node --experimental-strip-types scripts/reparte.mjs \
            referencia/textos-de-pablo/cuanto-le-queda-al-sol.md > /tmp/corte.json

   POR QUÉ EXISTE. Los cortes los elegía yo a ojo, mirando cuántas palabras
   tenía cada párrafo, y salían pantallas medio vacías. Pablo, el 28 de
   agosto: «el texto debe bajar hasta abajo; en muchas páginas hay un montón
   de hueco, debes ajustarlo hasta abajo del todo para que quede mejor y más
   bonito».

   A ojo no se puede: lo que cabe no depende de las palabras sino de cómo
   caen los renglones, y eso solo lo sabe el navegador. Así que esto abre la
   app de verdad, mete el HTML candidato en una pantalla de verdad y pregunta
   si se sale. Va añadiendo bloques mientras quepan y cierra la pantalla en el
   último que entró. Es el mismo reparto que hace un libro de papel.

   DOS REGLAS QUE NO SON DE MEDIDA
   · Un subtítulo nunca se queda de último bloque de una pantalla: un título
     con nada debajo es un renglón colgando. Se pasa a la siguiente.
   · Y una pantalla no puede quedarse en un solo bloque si ese bloque es el
     subtítulo. Esto no llega a pasar por lo anterior, y está por si acaso.

   El texto no se toca: los cortes van SIEMPRE entre bloques de Pablo.

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
const lista = bloques(md);
const titulo = /^# (.+)$/m.exec(md)?.[1] ?? "";

/* --- 2. Qué cabe, preguntándoselo a la pantalla de verdad ----------------- */

const nav = await chromium.launch({
  executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const pag = await nav.newPage({ viewport: { width: 390, height: 844 } });
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

/* --- 3. El reparto ---------------------------------------------------------

   NO ES «METER HASTA QUE REVIENTE», que fue el primer intento y quedaba peor
   que lo que había: llenaba las primeras hasta el borde y dejaba la última con
   once renglones vacíos. Se llena por igual, que es lo que pidió Pablo.

   Son dos pasos. Primero se mide, para cada bloque, hasta dónde se puede
   llegar sin salirse: eso da todas las pantallas POSIBLES. Después, entre
   todos los repartos que usan ese mismo número de pantallas —el mínimo—, se
   elige el que reparte el hueco más parejo, penalizando el aire al cuadrado:
   con el cuadrado, un reparto de 4+4+4 gana a uno de 0+1+11, que es
   exactamente la diferencia que se ve en pantalla.

   Es el mismo criterio con el que se parten los renglones de un párrafo
   justificado, aplicado a pantallas en vez de a líneas. */

const N = lista.length;
/** Para cada bloque, hasta dónde llega una pantalla que empiece ahí. */
const cabe = [];
for (let i = 0; i < N; i++) {
  const suyas = [];
  for (let j = i + 1; j <= N; j++) {
    const sobra = await aire(conGuiones(lista.slice(i, j).map((b) => b.html).join("")));
    if (sobra < 0) break;
    /* Un subtítulo nunca cierra una pantalla: un título con nada debajo es un
       renglón colgando. */
    if (lista[j - 1].tipo === "rotulo") continue;
    suyas.push({ j, aire: sobra });
  }
  /* Si ni el primer bloque cabe —no pasa hoy, pero pasaría con un párrafo
     larguísimo— se mete igual y que el ajuste de texto lo encoja. */
  if (!suyas.length) suyas.push({ j: i + 1, aire: 0 });
  cabe.push(suyas);
}

/** Mínimo número de pantallas desde el bloque i. */
const cuantas = new Array(N + 1).fill(Infinity);
cuantas[N] = 0;
for (let i = N - 1; i >= 0; i--)
  for (const { j } of cabe[i]) cuantas[i] = Math.min(cuantas[i], 1 + cuantas[j]);

/** Con ese número fijo, el reparto de hueco más parejo. */
const coste = new Array(N + 1).fill(Infinity);
const salta = new Array(N + 1).fill(-1);
coste[N] = 0;
for (let i = N - 1; i >= 0; i--)
  for (const { j, aire: a } of cabe[i]) {
    if (1 + cuantas[j] !== cuantas[i]) continue;
    const c = a * a + coste[j];
    if (c < coste[i]) { coste[i] = c; salta[i] = j; }
  }

const paginas = [];
for (let i = 0; i < N; i = salta[i]) paginas.push(lista.slice(i, salta[i]));

const medidas = [];
for (const p of paginas) medidas.push(+(await aire(conGuiones(p.map((b) => b.html).join("")))).toFixed(1));
await nav.close();

/* --- 4. Comprobación: ni un bloque perdido ni repetido -------------------- */
const puestos = paginas.flat();
if (puestos.length !== lista.length)
  throw new Error(`${puestos.length} bloques repartidos de ${lista.length}`);
for (const [i, b] of puestos.entries())
  if (b.html !== lista[i].html) throw new Error(`el bloque ${i} se ha movido de sitio`);

const palabras = (h) => h.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
for (const [i, p] of paginas.entries())
  console.error(
    `  ${String(i + 1).padStart(2)}  ${String(palabras(p.map((b) => b.html).join(" "))).padStart(3)} pal` +
    `  aire ${String(medidas[i]).padStart(5)}  ${p.map((b) => b.tipo[0]).join("")}`,
  );
console.error(`${titulo}: ${paginas.length} pantallas`);

process.stdout.write(JSON.stringify({
  titulo,
  paginas: paginas.map((p) => ({
    /* El rótulo se sigue guardando aunque ahora vaya pintado dentro del HTML:
       le sirve de esqueleto a quien revise, y `validar.mjs` lo pide. En una
       pantalla que empieza a media sección es el de la sección que viene
       arrastrando. */
    rotulo: p[0].seccion,
    bloques: p.map((b) => b.tipo),
    html: p.map((b) => b.html).join(""),
  })),
}, null, 1));
