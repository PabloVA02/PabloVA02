/**
 * Alarga una página de un borrador sin tocar el resto.
 *
 *   node scripts/apendice.mjs <borrador.json> <nº de página> "texto que se añade"
 *
 * Existe porque escribir a ojo páginas de 260-320 palabras falla siempre por
 * abajo, y el arreglo —añadir un párrafo al último bloque de texto— se hacía
 * cada vez con un `node -e` de diez líneas. Añade al ÚLTIMO bloque de texto,
 * nunca por índice de bloque: un append por índice ya destrozó una vez la
 * conclusión de El señor de las moscas, machacando su caja del rayo.
 */
import { readFileSync, writeFileSync } from "node:fs";

const [ruta, numero, texto] = process.argv.slice(2);
if (!ruta || !numero || !texto) {
  console.error('uso: node scripts/apendice.mjs <borrador.json> <nº pág> "texto"');
  process.exit(1);
}

const libro = JSON.parse(readFileSync(ruta, "utf8"));
const pagina = libro.paginas[Number(numero) - 1];
if (!pagina) {
  console.error(`la página ${numero} no existe: el libro tiene ${libro.paginas.length}`);
  process.exit(1);
}

const textos = pagina.bloques.filter((b) => b.b === "texto");
if (!textos.length) {
  console.error(`la página ${numero} no tiene ningún bloque de texto`);
  process.exit(1);
}

textos.at(-1).texto += " " + texto.trim();
writeFileSync(ruta, JSON.stringify(libro, null, 2));
console.log(`página ${numero}: ${texto.trim().split(/\s+/).length} palabras añadidas`);
