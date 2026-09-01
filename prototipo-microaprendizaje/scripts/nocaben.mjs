/* ==========================================================================
   QUÉ BLOQUES NO CABEN EN NINGUNA PANTALLA, EN TODO EL MURO

       node scripts/nocaben.mjs            los 225 shorts
       node scripts/nocaben.mjs 40         solo los 40 primeros

   La regla 8 del paginado dice que un bloque que no cabe ni él solo, y que
   tampoco se puede partir, se avisa por consola con el nombre del tema «para
   que Pablo lo arregle en el texto». Ese aviso existe desde el principio y
   nadie lo estaba leyendo: los cuatro revisores miran las primeras once
   historias, y un tomo nuevo entra por el medio del abecedario.

   Hizo falta el 1 de septiembre, cuando Pablo mandó dieciséis series
   reescritas: la versión vieja venía troceada en párrafos de una o dos frases
   y la nueva los devuelve a prosa seguida. Párrafos más largos es justo lo que
   puede dejar un bloque sin sitio, así que después de un cambio así hay que
   recorrer el muro ENTERO, no una muestra.
   ========================================================================== */
import { chromium } from "playwright-core";

const cuantos = Number(process.argv[2] ?? 0);
const ANCHO = 390, ALTO = 844;
const navegador = await chromium.launch({
  executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const pagina = await navegador.newPage({ viewport: { width: ANCHO, height: ALTO } });

const avisos = [];
pagina.on("console", (m) => {
  const t = m.text();
  if (t.includes("[Curva]") && t.includes("no cabe")) avisos.push(t);
});

await pagina.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
await pagina.waitForTimeout(1500);

const total = await pagina.evaluate(() => {
  const c = document.querySelector(".muro-pase");
  return Math.round(c.scrollHeight / c.clientHeight);
});
const hasta = cuantos > 0 ? Math.min(cuantos, total) : total;
console.log(`${total} historias en el muro; se miran ${hasta}\n`);

for (let n = 0; n < hasta; n++) {
  await pagina.evaluate((n) => {
    const c = document.querySelector(".muro-pase");
    c.scrollTo({ top: c.clientHeight * n, behavior: "instant" });
  }, n);
  /* Sin esperar, el reparto de esa historia no ha corrido todavía y el aviso
     no se emite: lo que se estaría midiendo es el silencio. */
  await pagina.waitForTimeout(260);
  if ((n + 1) % 25 === 0) process.stdout.write(`  ${n + 1}/${hasta}\n`);
}

const unicos = [...new Set(avisos)];
console.log(`\n${unicos.length} bloques sin sitio`);
for (const a of unicos) console.log("\n" + a);
if (!unicos.length) console.log("✓ todos los bloques caben");
await navegador.close();
process.exitCode = unicos.length ? 1 : 0;
