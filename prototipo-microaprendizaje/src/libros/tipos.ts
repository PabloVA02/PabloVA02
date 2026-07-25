import type { Card } from "../lesson";

/* ==========================================================================
   La forma de un resumen.

   Un resumen NO es el libro encogido: es un puñado de ideas que se sostienen
   solas, contadas en el orden en que se entienden y no en el orden en que el
   autor las escribió. Lo que se busca es que alguien que nunca vaya a leer el
   original salga sabiendo lo que el libro dice de verdad — y que a quien sí
   lo lea le sirva de mapa.

   REGLAS DE LA CASA

   1. Empieza por la escena, no por la tesis. Marco Aurelio escribiendo de
      noche en una tienda de campaña engancha; «el estoicismo sostiene que…»
      no. La tesis va después, cuando ya hay dónde colgarla.

   2. Una idea por tarjeta. Si en una tarjeta hay dos, ninguna se recuerda.

   3. Las tarjetas `clave` son el esqueleto: cinco o seis por libro, y son lo
      que quedará en la cabeza dentro de un mes.

   4. La ilustración solo donde ayuda. Un libro con imagen en todas las
      páginas cansa igual que uno sin ninguna, y ya no significan nada.

   5. Nada de «el autor nos invita a reflexionar». Se dice lo que dice, con
      sus palabras si hacen falta, y se dice también dónde falla.

   DURACIÓN
   Entre 800 y 1.200 palabras: cuatro a seis minutos a velocidad normal de
   lectura en español. `palabras()` lo mide de verdad sobre el texto.
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

/**
 * Palabras reales del resumen, quitando las etiquetas HTML. Sirve para
 * comprobar que ninguno se queda corto ni se pasa: los dos extremos rompen
 * la promesa de «cuatro a seis minutos».
 */
export function palabras(r: Resumen): number {
  return tarjetasDe(r)
    .map((c) => ("texto" in c ? c.texto : "frase" in c ? c.frase : ""))
    .join(" ")
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

/** Minutos de lectura a 200 palabras por minuto, que es lo normal en español. */
export function minutos(r: Resumen): number {
  return Math.round((palabras(r) / 200) * 10) / 10;
}
