import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

/* ==========================================================================
   EL TONO DE CADA CUBIERTA

   Escribe `src/libros/tonos.ts`, un color por cubierta, sacado del dibujo de
   verdad y no de la categoría del libro.

   POR QUÉ HACE FALTA. El botón de «Escuchar» del libro de hoy se pintaba con
   `libro.color`, que es el color de su CATEGORÍA: todos los de Historia en
   barro, todos los de Ciencia en pizarra. Y detrás de ese botón está la
   cubierta ampliada y desenfocada, que es del color que sea. Con «Sobre la
   tiranía», que es azul marino, salía un botón salmón sobre un halo azul.
   Pablo: «antes iba cambiando según el libro y estaba súper bonito; ahora
   sería pues azul».

   CÓMO SE ELIGE EL TONO. No vale la media de los píxeles: la media de
   cualquier imagen con dos colores fuertes es un gris. Lo que se hace es
   agrupar los píxeles por TONO —el ángulo del color, ignorando lo claro y lo
   oscuro— en treinta y seis cajones de diez grados, descartando los píxeles
   sin color (blancos, negros y grises), y quedarse con el cajón más poblado.
   Eso devuelve el color del que está hecha la cubierta aunque ocupe poco.

   Y DESPUÉS SE NORMALIZA, que es la parte que hace que esto funcione. El tono
   se conserva tal cual y la saturación también, apretada entre 0,38 y 0,85;
   lo que se fija no es la luminosidad de HSL sino la LUMINANCIA, que es otra
   cosa y es la que decide si se lee.

   La diferencia importa mucho aquí. Un amarillo y un azul con la misma L de
   HSL no brillan igual: el amarillo deslumbra y el azul se oscurece, porque el
   ojo es mucho más sensible al verde que al azul. Fijando la L, la mitad de
   los botones salían del mismo tono arenoso y el resto quedaba flojo de
   contraste. Fijando la luminancia, cada tono cae donde le toca —los amarillos
   bajan, los azules suben— y el texto casi negro mantiene su contraste, en
   torno a ocho a uno, venga la cubierta de donde venga.

   Se ejecuta cuando entra una tanda de cubiertas nuevas, después de
   `mete-cubiertas.mjs`. Necesita sharp: npm install --no-save sharp
   ========================================================================== */

const DIR = "cubiertas-originales";
/* La luminancia relativa a la que se lleva cada tono. A 0,42 el contraste con
   el texto del botón —#17151c, casi negro— sale en torno a ocho a uno, muy por
   encima del 4,5 que se pide para texto normal. */
const LUZ = 0.42;
const S_MIN = 0.38;
const S_MAX = 0.85;

function aHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [h, s, l];
}

function aRgb(h, s, l) {
  const f = (n) => {
    const k = (n + h * 12) % 12;
    const a = s * Math.min(l, 1 - l);
    return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  };
  return [f(0), f(8), f(4)];
}

const aHex = (h, s, l) =>
  `#${aRgb(h, s, l).map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("")}`;

/** Luminancia relativa, la de la fórmula estándar de contraste. */
function luz(h, s, l) {
  const lineal = (v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  const [r, g, b] = aRgb(h, s, l).map(lineal);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** La L de HSL que deja ese tono en la luminancia pedida. Va por bisección
 *  porque la relación entre las dos no tiene fórmula inversa sencilla. */
function lParaLuz(h, s, objetivo) {
  let bajo = 0.05, alto = 0.98;
  for (let i = 0; i < 40; i++) {
    const medio = (bajo + alto) / 2;
    if (luz(h, s, medio) < objetivo) bajo = medio; else alto = medio;
  }
  return (bajo + alto) / 2;
}

const ficheros = readdirSync(DIR).filter((f) => f.endsWith(".webp")).sort();
const tonos = {};

for (const f of ficheros) {
  const id = f.replace(/\.webp$/, "");
  const { data, info } = await sharp(readFileSync(`${DIR}/${f}`))
    .resize(64, 96, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  /* 36 cajones de 10 grados. Cada píxel con color suficiente vota en el suyo,
     y el voto pesa por su saturación: un rojo puro cuenta más que un rosa
     pálido, que es lo que hace que gane el color con el que está dibujada la
     cubierta y no el del papel de fondo. */
  const cajones = new Array(36).fill(0);
  const sumaH = new Array(36).fill(0);
  const sumaS = new Array(36).fill(0);
  for (let i = 0; i < data.length; i += info.channels) {
    const [h, s, l] = aHsl(data[i], data[i + 1], data[i + 2]);
    if (s < 0.18 || l < 0.12 || l > 0.92) continue;
    const c = Math.min(35, Math.floor(h * 36));
    cajones[c] += s;
    sumaH[c] += h * s;
    sumaS[c] += s * s;
  }
  const mejor = cajones.indexOf(Math.max(...cajones));
  /* Una cubierta en blanco y negro no tiene ningún píxel con color: ahí no se
     inventa nada y el consumidor se queda con el color de la categoría. */
  if (cajones[mejor] === 0) continue;
  const h = sumaH[mejor] / cajones[mejor];
  const s = Math.min(S_MAX, Math.max(S_MIN, sumaS[mejor] / cajones[mejor]));
  tonos[id] = aHex(h, s, lParaLuz(h, s, LUZ));
}

const cabecera = `/* GENERADO por scripts/tonos-cubiertas.mjs. No se edita a mano.

   Un color por cubierta, sacado del dibujo y no de la categoría del libro. Lo
   usa el botón de «Escuchar» del libro de hoy, que tiene detrás esa misma
   cubierta ampliada y desenfocada: con el color de la categoría, un libro de
   Historia con portada azul sacaba un botón salmón sobre un halo azul.

   El tono y la saturación son los de la cubierta; lo que se fija es la
   LUMINANCIA, no la luminosidad de HSL, para que el texto casi negro del botón
   mantenga su contraste venga la cubierta de un azul marino o de un amarillo.
   El porqué de esa diferencia está en el script, y es lo que hace que los
   colores se distingan entre sí en vez de acabar todos en el mismo arenoso.

   Los libros que no salen aquí —cubierta en blanco y negro, o sin cubierta
   dibujada— se quedan con el color de su categoría. */

`;

const cuerpo = Object.keys(tonos).sort()
  .map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(tonos[k])},`)
  .join("\n");

writeFileSync("src/libros/tonos.ts",
  `${cabecera}export const TONO_CUBIERTA: Record<string, string> = {\n${cuerpo}\n};\n`);

console.log(`${Object.keys(tonos).length} tonos de ${ficheros.length} cubiertas → src/libros/tonos.ts`);
