import type { Card } from "../lesson";

/* ==========================================================================
   CÓMO SE ESCRIBE UN RESUMEN.

   EL DOCUMENTO QUE MANDA ES `REDACCION.md`, en la raíz del proyecto: ahí está
   la anatomía de cada página con ejemplos, lo que va en la ficha y la lista de
   comprobación, y ahí es donde se añade lo que enseñen las capturas nuevas de
   Headway. Lo de aquí abajo es el mismo criterio, resumido para quien esté
   leyendo el tipo.

   Las normas anteriores están BORRADAS, por orden de Pablo y con razón. Decían
   que un resumen se escribe en cinco capítulos de mil palabras, que cada uno
   abre con una escena y no con la tesis, y que el título de un capítulo es un
   sitio al que se llega. Con eso salió lo que salió: la primera página de
   Sapiens contaba que a Harari le endosaron una asignatura de primero y cómo
   se tradujo el libro al inglés. Bien escrito y sobre el libro equivocado —el
   libro DE PAPEL en vez del libro—. Quien abre un resumen de Sapiens quiere la
   historia de la especie, no la de su edición.

   LA REFERENCIA ES HEADWAY, y está mirada captura a captura. Un resumen suyo
   son siete u ocho pantallas y cada una funciona igual:

     un titular que es una AFIRMACIÓN entera, no una etiqueta
       «La ineficacia de los directores generales es la causa del fracaso de
       muchas start-ups», no «Los directores generales»
     dos a cuatro párrafos que la explican y la demuestran
     una caja del rayo con la idea de la pantalla en una frase
     a veces una lista con la entradilla en negrita
     y la última pantalla se llama «Conclusión»

   LAS SIETE REGLAS

   1. SE CUENTA EL LIBRO, NO SU HISTORIA. Nada de cómo se escribió, cómo se
      vendió ni quién es el autor, salvo que sea parte del argumento. Si al
      terminar una página el lector no sabe nada nuevo del MUNDO, esa página
      sobra.

   2. EL TITULAR AFIRMA. Tiene que poder discutirse. «La agricultura fue el
      mayor fraude de la historia» se discute; «La revolución agrícola» no.

   3. LO CONCRETO ANTES QUE EL ADJETIVO, y esto se hereda de las normas
      viejas porque era lo único que funcionaba. Una cifra, un nombre, una
      fecha, un objeto: seis especies humanas, un uno por ciento de ADN
      neandertal, el techo de los ciento cincuenta.

   4. UNA IDEA POR PÁGINA, y va en la caja del rayo escrita para recordarse:
      «No fuimos nosotros quienes domesticamos el trigo».

   5. SE DICE DÓNDE FALLA. Todo libro tiene una parte floja, un dato que
      envejeció mal o una fama que no se corresponde con lo que hay dentro.
      Va en la conclusión y es lo que separa esto de una contraportada.

   6. ESPAÑOL LLANO, del que se lee en voz alta sin tropezar. Se explica, no
      se arenga ni se vende. Sin anglicismos de manual de autoayuda y sin «el
      autor nos invita a reflexionar».

   7. PÁGINAS DE UNAS 260 PALABRAS, y CUÁNTAS depende del libro: ocho en un
      Breve, doce en un Amplio, dieciséis en un Extenso. Lo que no cambia
      nunca es la medida de la página: 260-320 palabras es lo que ocupa UNA
      idea explicada y demostrada. Alargar un libro es añadir argumentos, no
      engordar los párrafos. Apartado 2 ter de REDACCION.md.

   DÓNDE SE ESCRIBE. En `libros/paginas.ts`, en el `PAGINAS` de su id. El
   modelo está ahí: `SAPIENS`, que es el que aprobó Pablo, y `HABITOS_ATOMICOS`.

   Y LA FICHA SE ESCRIBE TAMBIÉN, que son tres cosas más y se ven antes que el
   resumen: el subtítulo real de la cubierta en `subtitulos.ts`, de qué va en
   dos frases en `aprenderas.ts`, y los cinco «Aprenderás» en `puntos.ts`, que
   son lo que uno se lleva y no el índice.

   ── EL FORMATO VIEJO, Y POR QUÉ SIGUE AHÍ ────────────────────────────────

   Los doscientos libros están escritos en tarjetas, y de esas tarjetas
   `paginasDeResumen()` fabrica ocho páginas automáticas. Es un respaldo: hace
   que todos se puedan leer desde el primer día, y se nota que es automático.
   No se escriben libros nuevos así. Los que ya están se van reescribiendo a
   mano, y el orden lo marca Pablo.

   ── QUÉ LIBROS ENTRAN ────────────────────────────────────────────────────

   Famosos y muy vendidos, de los que alguien reconoce el título aunque no lo
   haya leído. Que se entiendan sin formación previa.

   Las nueve categorías son EXACTAMENTE las del onboarding, ni una más:
   Psicología, Economía, Filosofía, Ciencia, Salud, Literatura, Arte,
   Historia y Deportes. `catalogo.ts` manda; `indice.ts` comprueba que no
   mienta.

   ── MEDIR ────────────────────────────────────────────────────────────────

   `palabras()` y `minutos()` para el libro entero. A 200 palabras por minuto,
   que es lo normal leyendo en español.
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
