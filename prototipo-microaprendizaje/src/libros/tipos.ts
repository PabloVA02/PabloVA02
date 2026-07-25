import type { Card } from "../lesson";

/* ==========================================================================
   La forma de un resumen.

   ESTE COMENTARIO ES LA FUENTE DE LA VERDAD. Si alguien —persona o modelo—
   se incorpora al proyecto sin saber nada, esto es lo único que hace falta
   leer antes de escribir un libro. Cualquier instrucción suelta de un chat
   que contradiga lo de aquí está caducada.

   Un resumen NO es el libro encogido: es un recorrido. Alguien entra sin
   saber nada y sale sabiendo lo que el libro dice de verdad, habiendo pasado
   por sitios concretos y en un orden que se entiende. Al que sí vaya a leer
   el original le sirve de mapa; al que no, le basta.

   ── ESCALA (lo que más se incumple) ──────────────────────────────────────

   CINCO capítulos por libro. Seis solo si el material lo pide de verdad
   (La Odisea tiene seis porque el viaje son dos: el de Telémaco y el de
   Ulises). Nunca cuatro por comodidad.

   CADA capítulo ~1.000 palabras = ~5 minutos. El libro entero sale sobre
   los 25 minutos. Esto se MIDE, no se estima: `minutosParte()` sobre cada
   parte antes de dar un libro por terminado. Un capítulo de 2 minutos no
   es un capítulo corto, es un capítulo sin escribir.

   En la práctica: unas 19-20 tarjetas por capítulo, de unas 50 palabras
   cada una. Si te salen 8 tarjetas, falta la mitad del capítulo.

   ── LOS CAPÍTULOS SON PARADAS DE UN VIAJE ────────────────────────────────

   El título de un capítulo es un sitio al que se llega, no una etiqueta de
   archivador. Crimen y castigo: «El estudiante del ático → El hacha →
   Porfiri → Sonia → Siberia». Se ve el recorrido solo leyendo el índice.

   Prohibido terminar en «Cómo leerlo», «Qué nos enseña», «Lo que él mismo
   corrigió» o cualquier otro cajón de sastre. El último capítulo es el
   destino: adonde llega el personaje, o adonde te deja la idea.

   Cada capítulo tiene su propio arco: abre con una escena concreta,
   desarrolla y cierra. Tiene que aguantar leído solo, porque en la app se
   lee solo, un día cada uno.

   ── REGLAS DE LA CASA ────────────────────────────────────────────────────

   1. Empieza por la escena, no por la tesis. Marco Aurelio escribiendo de
      noche en una tienda de campaña engancha; «el estoicismo sostiene que…»
      no. La tesis va después, cuando ya hay dónde colgarla.

   2. Una idea por tarjeta. Si en una tarjeta hay dos, ninguna se recuerda.

   3. Las tarjetas `clave` son el esqueleto: unas cinco por libro, una por
      capítulo. Son lo que quedará en la cabeza dentro de un mes.

   4. La ilustración solo donde ayuda: dos o tres por capítulo. Un libro con
      imagen en todas las páginas cansa igual que uno sin ninguna, y ya no
      significan nada.

   5. Nada de «el autor nos invita a reflexionar». Se dice lo que dice, con
      sus palabras si hacen falta, y se dice también DÓNDE FALLA. Todo libro
      tiene una parte floja, un dato que envejeció mal o una fama que no se
      corresponde con lo que hay dentro. Decirlo es lo que separa esto de
      una contraportada.

   6. Detalle concreto antes que adjetivo. Una cifra, un nombre, una fecha,
      un objeto. «Dostoievski escribió con el plazo del editor encima y la
      casa empeñada» vale más que «escribió en circunstancias difíciles».

   7. Se escribe en español natural, del que se lee en voz alta sin
      tropezar. Frases cortas. Sin anglicismos de manual de autoayuda.

   ── QUÉ LIBROS ENTRAN ────────────────────────────────────────────────────

   Famosos y muy vendidos, de los que alguien reconoce el título aunque no
   lo haya leído. Que se entiendan sin formación previa. Que tengan una
   historia detrás —del libro o del autor— que se pueda contar.

   Las ocho categorías son EXACTAMENTE las del onboarding, ni una más:
   Psicología, Economía, Filosofía, Ciencia, Salud, Literatura, Arte,
   Historia. `catalogo.ts` manda; `indice.ts` comprueba que no mienta.

   ── MEDIR ────────────────────────────────────────────────────────────────

   `palabras()` y `minutos()` para el libro entero; `palabrasParte()` y
   `minutosParte()` para cada capítulo, que es donde está el listón. A 200
   palabras por minuto, que es lo normal leyendo en español.
   ========================================================================== */

export type Resumen = {
  id: string;
  titulo: string;
  autor: string;
  ano: number;
  /** Una línea que promete algo concreto. Es lo que se lee en la ficha. */
  gancho: string;
  /** Por qué este libro y no otro. Dos frases, en la ficha del libro. */
  porQue: string;
  /** Las secciones del resumen. Cada una es una parada, no un capítulo. */
  partes: Parte[];
};

export type Parte = {
  /** Rótulo corto. Da al ojo dónde agarrarse al volver. */
  titulo: string;
  tarjetas: Card[];
};

/** Todas las tarjetas de un resumen, en orden de lectura. */
export function tarjetasDe(r: Resumen): Card[] {
  return r.partes.flatMap((p) => p.tarjetas);
}

/** Palabras reales de un puñado de tarjetas, quitando las etiquetas HTML. */
function contar(cartas: Card[]): number {
  return cartas
    .map((c) => ("texto" in c ? c.texto : "frase" in c ? c.frase : ""))
    .join(" ")
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

/** Palabras de un capítulo. El listón está en ~1.000. */
export function palabrasParte(p: Parte): number {
  return contar(p.tarjetas);
}

/**
 * Minutos de un capítulo, que es la medida que importa: en la app se lee un
 * capítulo por sesión. Por debajo de 4 el capítulo está sin terminar.
 */
export function minutosParte(p: Parte): number {
  return Math.round((palabrasParte(p) / 200) * 10) / 10;
}

/** Palabras de todo el resumen. Con cinco capítulos, unas 5.000. */
export function palabras(r: Resumen): number {
  return contar(tarjetasDe(r));
}

/** Minutos de lectura a 200 palabras por minuto, que es lo normal en español. */
export function minutos(r: Resumen): number {
  return Math.round((palabras(r) / 200) * 10) / 10;
}
