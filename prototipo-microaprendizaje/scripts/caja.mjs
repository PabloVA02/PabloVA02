/**
 * Pone la caja del rayo a una página que se quedó sin ella.
 *
 *   node scripts/caja.mjs <CONSTANTE> <nº de página> "la idea de la página"
 *
 * POR QUÉ EXISTE
 *
 * REDACCION.md, regla 3: una idea por página, y va en la caja del rayo. Al
 * auditar los 223 el 24 de agosto aparecieron tres páginas de los primeros
 * libros sin ella, de antes de que la regla estuviera apretada. Añadirla a
 * mano en un fichero de sesenta mil líneas es la manera de estropear la
 * página de al lado.
 *
 * La caja va SIEMPRE al final de la página, después del último bloque, que es
 * donde la pinta el lector. Si la página ya tiene una, no se toca: se avisa y
 * se sale, porque sustituir una caja buena por otra sin querer no lo detecta
 * después ningún validador.
 */
import { readFileSync, writeFileSync } from "node:fs";

const [constante, numero, texto] = process.argv.slice(2);
if (!constante || !numero || !texto) {
  console.error('uso: node scripts/caja.mjs <CONSTANTE> <nº pág> "la idea"');
  process.exit(1);
}

const url = new URL("../src/libros/paginas.ts", import.meta.url);
const src = readFileSync(url, "utf8");

const abre = src.indexOf(`const ${constante}: PaginaLibro[] = [`);
if (abre < 0) {
  console.error(`no existe ninguna constante llamada ${constante}`);
  process.exit(1);
}
const cierra = src.indexOf("\n];\n", abre);
const cuerpo = src.slice(abre, cierra);

/* Las páginas son los `{` a dos espacios de sangría dentro del array. */
const paginas = [...cuerpo.matchAll(/^ {2}\{$/gm)].map((m) => m.index);
const i = Number(numero) - 1;
if (!paginas[i]) {
  console.error(`${constante} no tiene página ${numero}: tiene ${paginas.length}`);
  process.exit(1);
}
const finPagina = paginas[i + 1] ?? cuerpo.length;
const trozo = cuerpo.slice(paginas[i], finPagina);

if (/b: "idea"/.test(trozo)) {
  console.error(`la página ${numero} de ${constante} YA tiene caja del rayo. No se toca.`);
  process.exit(1);
}

/* El cierre del array de bloques de esa página: `    ],` a cuatro espacios. */
const cierreBloques = trozo.lastIndexOf("\n    ],");
if (cierreBloques < 0) {
  console.error(`no encuentro dónde acaban los bloques de la página ${numero}`);
  process.exit(1);
}

const caja =
  `\n      {\n        b: "idea",\n        texto:\n          ${JSON.stringify(texto)},\n      },`;
const nuevoTrozo = trozo.slice(0, cierreBloques) + caja + trozo.slice(cierreBloques);
const nuevo = src.slice(0, abre) + cuerpo.slice(0, paginas[i]) + nuevoTrozo +
  cuerpo.slice(finPagina) + src.slice(cierres());

function cierres() {
  return cierra;
}

writeFileSync(url, nuevo);
console.log(`${constante}, página ${numero}: caja del rayo puesta.`);
