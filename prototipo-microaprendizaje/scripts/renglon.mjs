/* ==========================================================================
   CUÁNTOS CARACTERES ENTRAN EN UN RENGLÓN

       npx vite build && npx vite preview --port 4173 &
       node scripts/renglon.mjs [ancho de pantalla]

   Es el criterio que puso Pablo el 28 de agosto para la tipografía del lector
   de temas, y manda sobre cualquier número en puntos:

       «Una línea completa de texto debe contener entre 35 y 40 caracteres.
       Compruébalo contando caracteres en una línea real renderizada, no
       fiándote del valor en puntos. Si salen más de 45, la letra se ha
       quedado pequeña: súbela. Si salen menos de 30, bájala.»

   Así que se cuentan en renglones pintados de verdad. `Range.getClientRects()`
   devuelve un rectángulo por renglón, así que se recorre el párrafo palabra a
   palabra mirando en qué rectángulo cae cada una: eso da el reparto real de
   caracteres por renglón, con la letra de verdad y el ancho de verdad.

   NO CUENTAN LOS RENGLONES INCOMPLETOS: el último de cada párrafo acaba donde
   acaba la frase, así que promediarlo con los demás bajaría la cuenta sin que
   la letra tenga nada que ver. Se descarta.

   Sale con código 1 si la media se sale de 35-40.
   ========================================================================== */
import { chromium } from "playwright-core";
import { sirveFotos } from "./fotos-al-vuelo.mjs";

const ANCHO = Number(process.argv[2] ?? 375);
const nav = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const pag = await nav.newPage({ viewport: { width: ANCHO, height: 812 } });
await sirveFotos(pag);
await pag.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
await pag.waitForTimeout(2500);

/* Se miden varias pantallas de varios temas, no una: un párrafo con palabras
   cortas da renglones más llenos que uno lleno de esdrújulas, y con una sola
   muestra la media dice lo que diga ese párrafo. */
const mide = () => pag.evaluate(() => {
  const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
    const c = e.getBoundingClientRect();
    return c.top > -50 && c.top < 50;
  });
  const cuerpo = vis?.querySelector(".muro-hoja:not(.muro-medidor) .short-cuerpo");
  if (!cuerpo) return null;
  const cs = getComputedStyle(cuerpo);

  /* Los caracteres de cada renglón de un párrafo: se camina por sus nodos de
     texto y se pregunta, letra a letra, en qué rectángulo cae. */
  const renglonesDe = (el) => {
    const r = document.createRange();
    const filas = new Map();
    const paseo = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = paseo.nextNode())) {
      const t = n.textContent ?? "";
      for (let k = 0; k < t.length; k++) {
        /* El guion blando NO se cuenta. `silabas.ts` mete un U+00AD en cada
           sílaba y la hoja lleva `hyphens: none`, así que no se ve ni parte
           nada: está en la cadena y no en la pantalla. Contándolo salían 39
           caracteres donde en el renglón hay 34, y la letra parecía bien
           calibrada estándolo por los pelos. */
        if (t[k] === "\u00AD") continue;
        r.setStart(n, k);
        r.setEnd(n, k + 1);
        const caja = r.getBoundingClientRect();
        if (!caja.height) continue;
        const y = Math.round(caja.top);
        filas.set(y, (filas.get(y) ?? "") + t[k]);
      }
    }
    return [...filas.entries()].sort((a, b) => a[0] - b[0]).map(([, s]) => s);
  };

  const largos = [];
  const muestra = [];
  for (const p of cuerpo.querySelectorAll("p")) {
    const filas = renglonesDe(p);
    /* Fuera el último de cada párrafo: acaba donde acaba la frase. */
    for (const f of filas.slice(0, -1)) {
      largos.push(f.length);
      if (muestra.length < 6) muestra.push(f);
    }
  }
  const h3 = cuerpo.querySelector("h3");
  return {
    cuerpo: cs.fontSize,
    renglon: cs.lineHeight,
    familia: cs.fontFamily.split(",")[0],
    cifras: cs.fontVariantNumeric,
    rotulo: h3 ? getComputedStyle(h3).fontSize : "—",
    ancho: Math.round(cuerpo.getBoundingClientRect().width),
    largos,
    muestra,
  };
});

const TEMAS = Number(process.argv[3] ?? 5);
const todos = [];
let cabecera = null;
const muestra = [];
for (let h = 0; h < TEMAS; h++) {
  await pag.evaluate((k) => {
    const c = document.querySelector(".muro-pase");
    c.scrollTo({ top: c.clientHeight * k, behavior: "instant" });
  }, h);
  await pag.waitForTimeout(1200);
  /* La primera pantalla de cada tema es la portada, que no lleva texto. */
  for (let p = 0; p < 3; p++) {
    await pag.mouse.click(ANCHO - 75, 446);
    await pag.waitForTimeout(600);
    const d = await mide();
    if (!d?.largos.length) continue;
    cabecera ??= d;
    todos.push(...d.largos);
    if (muestra.length < 6) muestra.push(...d.muestra.slice(0, 2));
  }
}
await nav.close();

if (!cabecera || !todos.length) {
  console.log("no se ha encontrado texto que medir");
  process.exit(1);
}
const media = todos.reduce((a, b) => a + b, 0) / todos.length;
const min = Math.min(...todos);
const max = Math.max(...todos);
console.log(`pantalla de ${ANCHO} · caja de ${cabecera.ancho} puntos`);
console.log(`${cabecera.familia} · cuerpo ${cabecera.cuerpo} · renglón ${cabecera.renglon} · subtítulo ${cabecera.rotulo} · cifras ${cabecera.cifras}`);
for (const m of muestra.slice(0, 6)) console.log(`  ${String(m.length).padStart(2)} │ ${m}`);
console.log(`${todos.length} renglones completos de ${TEMAS} temas · media ${media.toFixed(1)} · de ${min} a ${max}`);
const bien = media >= 35 && media <= 40;
console.log(bien ? "✓ dentro de 35-40" : media > 40 ? "✗ demasiados: la letra se ha quedado pequeña" : "✗ demasiado pocos: la letra se ha pasado de grande");
process.exit(bien ? 0 : 1);
