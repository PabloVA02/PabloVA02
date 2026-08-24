/**
 * Comprueba las reglas de FORMA de `REDACCION.md` en los 223 resúmenes.
 *
 *   node scripts/revisa-estructura.mjs
 *
 * POR QUÉ EXISTE
 *
 * Había cuatro comprobadores y ninguno miraba la estructura del resumen:
 * `medir-paginas` cuenta palabras, `concreto` busca una cifra y un nombre,
 * `revisa-fichas` mira la ficha y `revisa-puntos` los «Aprenderás». Al
 * preguntar Pablo el 24 de agosto si los 223 estaban escritos con el estilo de
 * Headway, hubo que montar esto para contestarle con datos, y salieron tres
 * páginas de *Hábitos atómicos* sin caja del rayo, de los primeros que se
 * escribieron.
 *
 * QUÉ MIRA, y son las reglas que se pueden contar:
 *
 *   · la última página se llama «Conclusión»          (apartado 2)
 *   · no queda ningún bloque «Prueba esto»            (apartado 2)
 *   · toda página tiene su caja del rayo              (regla 3)
 *   · el titular no es una etiqueta de dos palabras   (apartado 3)
 *   · la conclusión dice dónde falla el libro         (regla 5)
 *
 * LO QUE NO PUEDE MIRAR es si el titular AFIRMA algo discutible, si la prosa
 * suena a folleto o si la caja dice una obviedad. Eso se lee. Esto solo
 * garantiza que la forma está puesta.
 *
 * Sobre la regla 5: se busca por vocabulario, y el vocabulario falla en los
 * dos sentidos. Los avisos son para MIRAR la conclusión, no para reescribirla
 * a ciegas: «hay una objeción seria», «qué conviene saber» o «lo que no es,
 * conviene decirlo» cumplen la regla y no llevan ninguna de estas palabras.
 */
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../src/libros/paginas.ts", import.meta.url), "utf8");

/* El fichero es TypeScript y son datos puros: se recorta cada constante y se
   evalúa, igual que hace `medir-paginas.mjs`. */
function arrayDe(nombre) {
  const i = src.indexOf(`const ${nombre}: PaginaLibro[] = [`);
  if (i < 0) return null;
  /* Ojo: el primer `[` después del nombre es el de `PaginaLibro[]`, no el del
     array. El que abre de verdad es el del `= [`. */
  const desde = src.indexOf("= [", i) + 2;
  let hondo = 0;
  for (let j = desde; j < src.length; j++) {
    if (src[j] === "[") hondo++;
    else if (src[j] === "]" && --hondo === 0)
      return new Function(`return ${src.slice(desde, j + 1)}`)();
  }
  return null;
}

const nombres = [...src.matchAll(/^const ([A-Z_0-9]+): PaginaLibro\[\] = \[/gm)].map((m) => m[1]);

/* La conclusión tiene que decir dónde falla. Se busca por vocabulario y por
   eso hay tantas variantes: cada libro lo dice a su manera. */
const FALLA =
  /(falla|flojea|se le reprocha|punto débil|no se sostiene|envejec|se equivoc|no demuestra|elude|calla|omite|deja fuera|punto ciego|objeción|conviene saber|conviene decir|lo que no es|hay que leerlo|no discute|se le ha discutido|exagera|se queda cort|no examina|no menciona)/i;

const fallos = { conclusion: [], prueba: [], caja: [], etiqueta: [], falla: [] };
const ilegibles = [];

for (const nombre of nombres) {
  const pags = arrayDe(nombre);
  /* Un corchete dentro de una cadena descoloca el recuento; si sale vacío se
     avisa en vez de reventar, que es peor que no comprobarlo. */
  if (!pags?.length) {
    ilegibles.push(nombre);
    continue;
  }

  const ultima = pags.at(-1);
  const rotuloFinal = ultima.bloques.find((b) => b.b === "rotulo")?.texto ?? "";
  if (!/^conclusi/i.test(rotuloFinal)) fallos.conclusion.push(`${nombre} («${rotuloFinal}»)`);

  const cierre = ultima.bloques
    .filter((b) => b.b === "texto")
    .map((b) => b.texto)
    .join(" ");
  if (!FALLA.test(cierre)) fallos.falla.push(nombre);

  pags.forEach((p, i) => {
    if (p.bloques.some((b) => b.b === "prueba")) fallos.prueba.push(`${nombre}:${i + 1}`);
    if (!p.bloques.some((b) => b.b === "idea")) fallos.caja.push(`${nombre}:${i + 1}`);
    const r = p.bloques.find((b) => b.b === "rotulo")?.texto ?? "";
    /* Ojo con el umbral. El apartado 3 bis admite títulos cortos de imagen en
       los libros narrativos, y los buenos son de dos palabras: «Llamadme
       Ismael», «El giro», «Las jaulas». No son etiquetas: son imágenes, y la
       afirmación va en la primera frase de la página. Así que solo se marca el
       de UNA palabra, y como aviso para mirarlo, no como fallo. */
    if (r && r.split(/\s+/).length < 2 && !/^conclusi/i.test(r))
      fallos.etiqueta.push(`${nombre}:${i + 1} («${r}»)`);
  });
}

const di = (rotulo, lista, grave = true) => {
  const marca = lista.length === 0 ? "✓" : grave ? "✗" : "⚠";
  console.log(`${marca} ${rotulo.padEnd(48)} ${lista.length === 0 ? "ninguno" : lista.length}`);
  for (const x of lista.slice(0, 12)) console.log(`     ${x}`);
  if (lista.length > 12) console.log(`     …y ${lista.length - 12} más`);
};

console.log(`${nombres.length} resúmenes\n`);
di("última página que no se llama «Conclusión»", fallos.conclusion);
di("bloques «Prueba esto» que quedaran", fallos.prueba);
di("páginas sin su caja del rayo", fallos.caja);
di("titulares de una sola palabra", fallos.etiqueta, false);
di("conclusiones donde no se ve dónde falla", fallos.falla, false);
if (ilegibles.length) di("no se han podido leer", ilegibles);
console.log(
  "\nEl último aviso es para MIRAR la conclusión, no para reescribirla: se busca\n" +
    "por vocabulario y hay maneras de cumplir la regla que no llevan estas palabras.",
);
