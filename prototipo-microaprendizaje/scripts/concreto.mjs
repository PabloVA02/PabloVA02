/**
 * La prueba de la cifra y el nombre, pasada a los 145 resúmenes de golpe.
 *
 *   node scripts/concreto.mjs
 *
 * POR QUÉ EXISTE
 *
 * Sale de la captura de Headway del 21 de agosto sobre las ciento doce
 * técnicas de meditación tántrica: ocho páginas sin una fecha, sin un nombre
 * propio y sin un lugar, con las técnicas flotando como si nadie las hubiera
 * escrito nunca en ningún sitio. Es el grado máximo del fallo del título
 * tapado, y es el único de todos los fallos de redacción que una máquina puede
 * detectar sin equivocarse. Está en REDACCION.md, apartado 4.
 *
 * CÓMO DECIDE QUÉ ES UN NOMBRE PROPIO
 *
 * No vale mirar si hay una palabra en mayúscula: la primera de cada frase lo
 * está. El primer intento marcó «Trabajo profundo» como libro sin nombres
 * propios cuando la primera frase del resumen empieza precisamente por
 * «Newport», y ese falso positivo es la razón de que esto sea un script y no
 * una expresión regular escrita a ojo cada vez.
 *
 * La regla que sí funciona: una palabra en mayúscula es nombre propio si NUNCA
 * aparece en minúscula en todo el fichero. «Newport» no aparece nunca en
 * minúscula; «cuando» sí, aunque a veces vaya en mayúscula por abrir frase.
 *
 * Y las cifras se buscan escritas con letra además de con dígitos, porque el
 * estilo de la casa es escribirlas con letra: «ciento ocho pretendientes», no
 * «108 pretendientes».
 */
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../src/libros/paginas.ts", import.meta.url), "utf8");

const NUMEROS =
  /\b(cero|un|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|trece|catorce|quince|diecis|veint|treinta|cuarenta|cincuenta|sesenta|setenta|ochenta|noventa|cien|ciento|doscient|trescient|cuatrocient|quinient|seiscient|setecient|ochocient|novecient|mil|mill)/i;

/* Todo lo que alguna vez va en minúscula NO es un nombre propio. */
const enMinuscula = new Set(
  [...src.matchAll(/\b([a-záéíóúñü]{3,})\b/g)].map((m) => m[1]),
);

const registro = src.slice(src.indexOf("export const PAGINAS: Record"));
const libros = [...registro.matchAll(/^\s{2}"?([a-z0-9-]+)"?:\s*([A-Z_0-9]+),/gm)];

const flojos = [];
for (const [, id, constante] of libros) {
  const i = src.indexOf(`const ${constante}: PaginaLibro[]`);
  if (i < 0) continue;
  /* Se quitan los nombres de bloque —b: "texto"— para que no cuenten. */
  const cuerpo = src.slice(i, src.indexOf("\n];", i)).replace(/b: "[a-z]+"/g, "");

  const cifras = /\d/.test(cuerpo) || NUMEROS.test(cuerpo);
  const propios = [...cuerpo.matchAll(/\b([A-ZÁÉÍÓÚÑ][a-záéíóúñü]{2,})\b/g)]
    .map((m) => m[1])
    .filter((p) => !enMinuscula.has(p.toLowerCase()));

  if (!cifras || !propios.length) {
    flojos.push(
      `  ${id}${cifras ? "" : "  ✗ ni una cifra"}${propios.length ? "" : "  ✗ ni un nombre propio"}`,
    );
  }
}

if (flojos.length) {
  console.log(`⚠  ${flojos.length} de ${libros.length} no pasan la prueba:\n`);
  console.log(flojos.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Los ${libros.length} resúmenes pasan la prueba de la cifra y el nombre.`);
}
