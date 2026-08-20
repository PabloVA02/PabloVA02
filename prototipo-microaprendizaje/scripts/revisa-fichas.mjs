/**
 * Comprueba que cada libro escrito a mano tenga su ficha entera, y que las
 * cubiertas dibujadas estén sanas.
 *
 *   node scripts/revisa-fichas.mjs
 *
 * LA FICHA son tres piezas en tres ficheros —`subtitulos.ts`, `aprenderas.ts`
 * y `puntos.ts`— y olvidar una no da ningún error: el libro se pinta igual,
 * solo que con el título en lugar del subtítulo o con los rótulos de sus
 * páginas en lugar de los cinco «Aprenderás». Se ve al abrirlo y no antes.
 *
 * LAS CUBIERTAS son cadenas de cien mil caracteres en `cubiertas.ts`, y ahí
 * un descuido tampoco avisa: una imagen que no llegue a registrarse se queda
 * en el fichero pesando y sin pintarse en ninguna parte, y una entrada que
 * apunte a una constante que no existe rompe el build mucho después. La
 * descripción `alt` es lo único de ese fichero escrito a mano —el resto lo
 * genera `mete-cubiertas.mjs`— y por eso es lo que hay que vigilar.
 *
 * Las reglas de cada campo están en REDACCION.md; esto solo mira si están.
 */
import { readFileSync, existsSync } from "node:fs";

const lee = (f) => readFileSync(`src/libros/${f}`, "utf8");
let problemas = 0;

/* -- La ficha -------------------------------------------------------------- */

const pag = lee("paginas.ts");
const registro = pag.slice(pag.indexOf("export const PAGINAS: Record"));
const ids = [...registro.matchAll(/^  "?([\w-]+)"?: [A-Z_0-9]+,$/gm)].map((m) => m[1]);
const sub = lee("subtitulos.ts");
const apr = lee("aprenderas.ts");
const pun = lee("puntos.ts");
const tiene = (src, id) => new RegExp(`^  "?${id}"?:`, "m").test(src);

let sinFicha = 0;
for (const id of ids) {
  const faltan = [
    tiene(sub, id) ? "" : "subtítulo",
    tiene(apr, id) ? "" : "de qué trata",
    tiene(pun, id) ? "" : "aprenderás",
  ].filter(Boolean);
  if (faltan.length) {
    console.log(`  ✗ ${id.padEnd(24)} falta: ${faltan.join(", ")}`);
    sinFicha++;
  }
}
console.log(
  sinFicha
    ? `\n${sinFicha} de ${ids.length} con la ficha incompleta`
    : `Los ${ids.length} escritos a mano tienen la ficha completa.`,
);
problemas += sinFicha;

/* -- Las cubiertas --------------------------------------------------------- */

if (existsSync("src/libros/cubiertas.ts")) {
  const cub = lee("cubiertas.ts");
  const imagenes = new Map(
    [...cub.matchAll(/^const ([A-Z_0-9]+) =\n  "(data:image\/webp;base64,[^"]+)";/gm)]
      .map((m) => [m[1], m[2]]),
  );
  const entradas = [
    ...cub.matchAll(
      /^ {2}"([\w-]+)": \{\n {4}local: ([A-Z_0-9]+),\n {4}autor: "[^"]*",\n {4}licencia: "[^"]*",\n {4}alt: "((?:[^"\\]|\\.)*)",\n {2}\},/gm,
    ),
  ];

  let malas = 0;
  for (const [, id, constante, alt] of entradas) {
    const uri = imagenes.get(constante);
    const fallos = [];
    if (!uri) fallos.push(`${constante} no existe`);
    else {
      /* Los primeros bytes de un WebP son «RIFF» y, cuatro más allá, «WEBP».
         Es lo único que no miente sobre lo que hay dentro de la cadena. */
      const cabecera = Buffer.from(uri.slice(uri.indexOf(",") + 1, uri.indexOf(",") + 33), "base64");
      if (cabecera.subarray(0, 4).toString() !== "RIFF" || cabecera.subarray(8, 12).toString() !== "WEBP")
        fallos.push("no es un WebP");
    }
    if (alt.length < 60) fallos.push("descripción demasiado corta");
    if (fallos.length) {
      console.log(`  ✗ ${id.padEnd(24)} ${fallos.join(", ")}`);
      malas++;
    }
  }

  const registradas = new Set(entradas.map((m) => m[2]));
  const sueltas = [...imagenes.keys()].filter((c) => !registradas.has(c));
  for (const c of sueltas) {
    console.log(`  ✗ ${c}: imagen sin registrar — pesa y no la pinta nadie`);
    malas++;
  }

  /* Una entrada mal formada no la coge la expresión de arriba, así que se
     cuentan las llaves del registro para saber si se ha quedado alguna fuera. */
  const declaradas = (cub.match(/^ {2}"[\w-]+": \{$/gm) ?? []).length;
  if (declaradas !== entradas.length) {
    console.log(
      `  ✗ ${declaradas - entradas.length} entradas con el formato roto ` +
        `(¿falta una coma detrás del «alt»?)`,
    );
    malas++;
  }

  console.log(
    malas
      ? `\n${malas} problemas en las ${declaradas} cubiertas`
      : `Las ${entradas.length} cubiertas están sanas y registradas.`,
  );
  problemas += malas;
}

process.exitCode = problemas ? 1 : 0;
