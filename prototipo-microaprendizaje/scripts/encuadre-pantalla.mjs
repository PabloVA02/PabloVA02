/* ==========================================================================
   CÓMO QUEDA LA PORTADA DENTRO DE LA PANTALLA, que es lo único que Pablo ve

       node scripts/encuadre-pantalla.mjs "cerilla" "tornado" …
       node scripts/encuadre-pantalla.mjs --salida /tmp/x.png --todas

   POR QUÉ NO BASTA CON `encuadre.mjs`. Ese dibuja la ventana 9:16 sobre la
   fotografía y sirve para elegir el recorte del archivo. Pero en la pantalla
   la portada NO se ve entera: vive en una franja de arriba que mide el 40 %
   del alto, o sea que de una imagen 9:16 solo se asoma una tira central. Una
   foto perfectamente recortada puede tener el motivo justo debajo de esa
   tira y entonces se ve cortada por el texto.

   Pablo, el 31 de agosto: «la de la cerilla está mal puesta, muy abajo, se
   corta con el texto». El archivo estaba bien; lo que fallaba era dónde caía
   la llama dentro de la franja.

   Esto abre el muro de verdad, busca el short por un trozo de su título y
   captura su portada. Al lado escribe qué parte de la imagen se está viendo.
   ========================================================================== */
import { chromium } from "playwright-core";
import { writeFileSync } from "node:fs";

const args = process.argv.slice(2);
let salida = "/tmp/encuadre-pantalla.png";
const i = args.indexOf("--salida");
if (i >= 0) { salida = args[i + 1]; args.splice(i, 2); }
const busquedas = args.filter((a) => !a.startsWith("--"));
if (!busquedas.length) { console.log('uso: node scripts/encuadre-pantalla.mjs "cerilla" …'); process.exit(1); }

const ANCHO = 390, ALTO = 844;
const navegador = await chromium.launch({
  executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const pagina = await navegador.newPage({ viewport: { width: ANCHO, height: ALTO } });
await pagina.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
await pagina.waitForTimeout(2000);

/* Cuántas historias hay en el muro, para saber hasta dónde desplazar. */
const cuantas = await pagina.evaluate(() => {
  const c = document.querySelector(".muro-pase");
  return Math.round(c.scrollHeight / c.clientHeight);
});

const encontrados = [];
for (let n = 0; n < cuantas && encontrados.length < busquedas.length; n++) {
  await pagina.evaluate((n) => {
    const c = document.querySelector(".muro-pase");
    c.scrollTo({ top: c.clientHeight * n, behavior: "instant" });
  }, n);
  await pagina.waitForTimeout(320);
  /* El título SE LEE DE LA PANTALLA VISIBLE, no del primer h2 del documento:
     el muro tiene todas las historias montadas a la vez y `querySelector` a
     secas devuelve la primera, así que la captura salía de un short y el
     nombre de otro. */
  const titulo = await pagina.evaluate(() => {
    const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
      const c = e.getBoundingClientRect(); return c.top > -50 && c.top < 50;
    });
    return vis?.querySelector("h2")?.textContent ?? "";
  });
  const cual = busquedas.find((b) => titulo.toLowerCase().includes(b.toLowerCase()));
  if (!cual) continue;

  await pagina.waitForFunction(() => {
    const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
      const c = e.getBoundingClientRect(); return c.top > -50 && c.top < 50;
    });
    const f = [...(vis?.querySelectorAll(".muro-foto img") ?? [])];
    return f.length > 0 && f.every((x) => x.complete && x.naturalWidth);
  }, null, { timeout: 20000 }).catch(() => {});
  await pagina.waitForTimeout(400);

  /* QUÉ TIRA DE LA IMAGEN SE ESTÁ VIENDO. La franja recorta con object-fit,
     así que hay que comparar la caja pintada con el tamaño natural. */
  const medida = await pagina.evaluate(() => {
    const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
      const c = e.getBoundingClientRect(); return c.top > -50 && c.top < 50;
    });
    const img = vis?.querySelector(".muro-foto img");
    const banda = vis?.querySelector(".muro-foto");
    if (!img || !banda) return null;
    const b = banda.getBoundingClientRect();
    /* Con object-fit:cover la escala la manda el lado que se queda corto. */
    const escala = Math.max(b.width / img.naturalWidth, b.height / img.naturalHeight);
    const altoPintado = img.naturalHeight * escala;
    const pos = getComputedStyle(img).objectPosition;
    /* El porcentaje vertical de object-position dice qué punto de la imagen
       se alinea con el mismo punto de la caja. */
    const pv = parseFloat(pos.split(" ")[1] ?? "50") / 100;
    const desde = (altoPintado - b.height) * pv;
    return {
      banda: `${Math.round(b.width)}×${Math.round(b.height)} (${Math.round(b.height / window.innerHeight * 100)} % del alto)`,
      objectPosition: pos,
      tira: `de ${(desde / altoPintado).toFixed(2)} a ${((desde + b.height) / altoPintado).toFixed(2)} de la imagen`,
    };
  });

  const png = await pagina.screenshot();
  encontrados.push({ n, titulo, medida, png });
  console.log(`nº${n}  ${titulo}`);
  if (medida) {
    console.log(`   franja ${medida.banda} · object-position ${medida.objectPosition}`);
    console.log(`   se ve ${medida.tira}`);
  }
}

for (const e of encontrados) writeFileSync(
  encontrados.length === 1 ? salida : salida.replace(/\.png$/, `-${e.n}.png`), e.png,
);
console.log(`\n${encontrados.length} capturas en ${salida}`);
await navegador.close();
