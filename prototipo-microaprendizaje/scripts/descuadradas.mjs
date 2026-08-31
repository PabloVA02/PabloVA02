/* ==========================================================================
   QUÉ PORTADAS SE CORTAN CON EL TEXTO

       node scripts/descuadradas.mjs            las que conviene mirar
       node scripts/descuadradas.mjs --todas    la medida de todas

   Pablo, el 31 de agosto: «porque algunas fotos no están centradas, la de la
   cerilla está mal puesta, muy abajo, se corta con el texto; fíjate en esas
   cosas».

   POR QUÉ NO VALE MIRAR EL ARCHIVO. El primer intento comparaba el recorte
   centrado con el que elegiría el modo «más detalle», y con la cerilla no
   saltaba: esa foto es 2:3, más alta que 9:16, así que de alto NO se recorta
   nada y por ese lado el encuadre es perfecto. El fallo estaba después, en la
   pantalla: la portada se pinta a pantalla completa y de 0,70 para abajo van
   el título y el «Seguir». Si el motivo cae ahí, se corta, por muy bien
   recortado que esté el archivo.

   ASÍ QUE SE MIDE LA PORTADA YA HECHA, por franjas horizontales, contando
   cuánto detalle hay en cada una —diferencias entre píxeles vecinos, que es
   donde está el motivo y no el fondo liso—. Salen dos números:

     centro   dónde está el peso visual de la imagen, de 0 a 1.
     tapado   qué parte de ese peso cae bajo el texto, de 0,70 a 0,95.

   Una portada con el motivo arriba da centro ~0,40 y tapado ~0,10. La cerilla
   de antes daba centro 0,60 y el palo entero bajo el título.

   NO DECIDE NADA: dice cuáles hay que ver. El recorte sigue siendo por el
   centro y las excepciones se escriben a mano en assets/recortes.json.
   ========================================================================== */
import sharp from "sharp";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";

const PORTADAS = "portadas";
const A = 72, B = 128;                    /* la portada en pequeño, 9:16 */
const TEXTO_DE = 0.70, TEXTO_A = 0.95;    /* la franja del título y el «Seguir» */
const todas = process.argv.includes("--todas");
const encuadres = existsSync("assets/recortes.json")
  ? JSON.parse(readFileSync("assets/recortes.json", "utf8")) : {};

const ficheros = readdirSync(PORTADAS).filter((f) => f.endsWith(".avif"));
const medidas = [];

for (const f of ficheros) {
  const tema = basename(f, ".avif");
  let px;
  try {
    const { data } = await sharp(join(PORTADAS, f))
      .resize(A, B, { fit: "fill" }).greyscale().raw().toBuffer({ resolveWithObject: true });
    px = data;
  } catch { continue; }

  /* El detalle de cada fila: cuánto cambia respecto al vecino de al lado y al
     de arriba. Un fondo liso da cero por mucho color que tenga. */
  const fila = new Float64Array(B);
  for (let y = 1; y < B; y++) {
    let s = 0;
    for (let x = 1; x < A; x++) {
      const i = y * A + x;
      s += Math.abs(px[i] - px[i - 1]) + Math.abs(px[i] - px[i - A]);
    }
    fila[y] = s;
  }
  let total = 0;
  for (let y = 0; y < B; y++) total += fila[y];
  if (!total) continue;

  let centro = 0, tapado = 0;
  for (let y = 0; y < B; y++) {
    const p = fila[y] / total, t = y / B;
    centro += t * p;
    if (t >= TEXTO_DE && t <= TEXTO_A) tapado += p;
  }
  medidas.push({ tema, centro, tapado, aMano: !!encuadres[tema] });
}

/* Los umbrales salen de la cerilla, que es el caso que Pablo devolvió: antes
   daba centro 0,60; las que están bien rondan 0,45. Y la franja del texto es
   la cuarta parte del alto, así que llevarse más de un tercio del detalle es
   señal de que el motivo está justo ahí. */
const malas = medidas.filter((m) => m.centro > 0.56 || m.tapado > 0.33);
malas.sort((a, b) => b.centro - a.centro);

const lista = todas ? [...medidas].sort((a, b) => b.centro - a.centro) : malas;
console.log(`${medidas.length} portadas medidas · ${malas.length} con el motivo bajo el texto\n`);
console.log("centro  tapado  tema");
for (const m of lista) {
  console.log(
    `${m.centro.toFixed(2)}    ${(m.tapado * 100).toFixed(0).padStart(3)} %  ${m.tema}` +
    (m.aMano ? "  · ya tiene encuadre a mano" : ""),
  );
}
