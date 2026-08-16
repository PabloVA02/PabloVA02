/* ==========================================================================
   Los guiones de partición, puestos a mano.

   El texto de los shorts va justificado, y una columna de 331 puntos —unos
   cuarenta caracteres— es estrechísima para justificar: si el navegador no
   puede partir palabras, la única manera que tiene de cuadrar la línea es
   estirar los espacios, y una línea con tres palabras largas se abre en canal
   mientras la de al lado queda apretada. Medido en la entrada de César: el
   espacio entre palabras iba de 4,45 puntos en una línea a 21,2 en otra.

   Para eso está `hyphens: auto`, y estaba puesto. El problema es que esa
   propiedad no parte nada por su cuenta: necesita el diccionario del idioma,
   y el navegador lo busca por el `lang` del documento. En la app hay
   `lang="es"` en el index, pero la página que se publica como artefacto no
   trae `<html>` propio —lo pone el visor, sin idioma— y ahí `hyphens: auto`
   se quedaba sin diccionario y sin partir una sola palabra. Tampoco parte en
   el Chromium con el que se comprueban las capturas, que va sin diccionarios.

   Así que los guiones se ponen aquí, en el texto, como guiones blandos (el
   carácter U+00AD): no se ven nunca, salvo justo cuando la palabra se parte
   al final de una línea. No dependen del idioma del documento ni de que el
   navegador traiga diccionario, y funcionan igual en el móvil de Pablo, en el
   artefacto publicado y en las capturas.

   La partición es la del español, que es de las regulares: manda la vocal, y
   entre vocales se reparten las consonantes según cuántas haya y si forman
   uno de los grupos que no se separan nunca (br, cl, tr… y los dígrafos ch,
   ll, rr).
   ========================================================================== */

const BLANDO = "­";

const FUERTES = "aeoáéó";
const DEBILES = "iuü";
/* Con tilde, una débil deja de serlo y rompe el diptongo: pa-ís, ba-úl. */
const DEBILES_TONICAS = "íú";
const VOCALES = FUERTES + DEBILES + DEBILES_TONICAS;

const esVocal = (c: string) => VOCALES.includes(c);
const esFuerte = (c: string) => FUERTES.includes(c) || DEBILES_TONICAS.includes(c);

/* Grupos que viajan juntos a la sílaba siguiente. Los dígrafos van aquí
   porque para partir se comportan igual: nunca se abren por el medio. */
const INSEPARABLES = new Set([
  "br", "bl", "cr", "cl", "dr", "fr", "fl", "gr", "gl",
  "kr", "kl", "pr", "pl", "tr", "tl", "ch", "ll", "rr",
]);

/**
 * Corta una palabra en sílabas. Trabaja en minúsculas y sin tocar el original:
 * devuelve las posiciones por las que se puede partir.
 */
function cortes(palabra: string): number[] {
  const p = palabra.toLowerCase();
  const puntos: number[] = [];
  let i = 0;

  /* Se avanza vocal a vocal: en cada hueco entre dos vocales se cuenta cuántas
     consonantes hay y se decide por dónde cae el corte. */
  while (i < p.length && !esVocal(p[i])) i++;

  while (i < p.length) {
    /* El núcleo: la vocal y las que formen diptongo con ella. */
    let fin = i + 1;
    while (fin < p.length && esVocal(p[fin])) {
      const a = p[fin - 1], b = p[fin];
      /* Dos fuertes, o una débil tónica al lado de otra vocal, es hiato: son
         dos sílabas y el corte va entre ellas. */
      const hiato =
        (esFuerte(a) && esFuerte(b)) ||
        DEBILES_TONICAS.includes(a) ||
        DEBILES_TONICAS.includes(b);
      if (hiato) break;
      fin++;
    }
    if (fin < p.length && esVocal(p[fin])) {
      /* Hiato: corte limpio entre las dos vocales. */
      puntos.push(fin);
      i = fin;
      continue;
    }

    /* Las consonantes que hay hasta la vocal siguiente. */
    let j = fin;
    while (j < p.length && !esVocal(p[j])) j++;
    if (j >= p.length) break;

    const n = j - fin;
    let corte: number;
    if (n === 0) corte = fin;
    else if (n === 1) corte = fin;
    else if (n === 2) corte = INSEPARABLES.has(p.slice(fin, fin + 2)) ? fin : fin + 1;
    else if (n === 3) corte = INSEPARABLES.has(p.slice(fin + 1, fin + 3)) ? fin + 1 : fin + 2;
    else corte = fin + 2;

    if (corte > 0 && corte < p.length) puntos.push(corte);
    i = j;
  }

  return puntos;
}

/* Cuánto se permite partir. Empezó en 6 y 3 —las cifras que llevaba el CSS—,
   y con esas la entrada de César todavía dejaba una línea con el doble de
   espacio que otra: faltaban sitios por donde cortar. Con 5 y 2, que es lo
   que usa la mayoría de los libros en español, hay bastantes más y la
   diferencia entre la línea más suelta y la más apretada se queda en poco.
   Menos de esto ya son cortes feos: un cabo de una sola letra no lo hace
   nadie. */
const MINIMO = 5;
const CABO = 2;

/** Mete los guiones blandos de una palabra suelta. */
function parte(palabra: string): string {
  if (palabra.length < MINIMO) return palabra;
  const puntos = cortes(palabra).filter((c) => c >= CABO && palabra.length - c >= CABO);
  if (!puntos.length) return palabra;
  let salida = "";
  let anterior = 0;
  for (const c of puntos) {
    salida += palabra.slice(anterior, c) + BLANDO;
    anterior = c;
  }
  return salida + palabra.slice(anterior);
}

/* El texto de los shorts lleva marcas dentro —`<em>`, `<strong>`— y entidades
   como `&nbsp;`. Ni las etiquetas ni las entidades se tocan: se parte solo lo
   que hay entre ellas, y dentro de eso, solo las tiras de letras. */
const TROZOS = /(<[^>]*>|&[a-zA-Z#0-9]+;)/g;
const PALABRAS = /[\p{L}­]+/gu;

const memoria = new Map<string, string>();

/**
 * Devuelve el mismo HTML con guiones blandos dentro de las palabras largas.
 * Es idempotente: si ya los lleva, los quita antes de volver a ponerlos.
 */
export function conGuiones(html: string): string {
  const hecho = memoria.get(html);
  if (hecho !== undefined) return hecho;

  const salida = html
    .split(TROZOS)
    .map((trozo, i) =>
      /* Los impares son las etiquetas y las entidades que ha capturado el
         grupo del `split`: se dejan exactamente como estaban. */
      i % 2 === 1 ? trozo : trozo.replace(PALABRAS, (w) => parte(w.replaceAll(BLANDO, ""))),
    )
    .join("");

  memoria.set(html, salida);
  return salida;
}
