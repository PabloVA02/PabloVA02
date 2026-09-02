import type { Categoria } from "./libros/catalogo";

/* ==========================================================================
   LAS COLECCIONES

   Qué son: un puñado de libros con un título que promete algo, no una
   categoría con otro nombre. «Economía» es un cajón; «El dinero, sin humo» es
   una postura, y esa postura es lo único que aquí no puede copiarse.

   POR QUÉ SON FIJAS Y NO «CREADAS PARA TI»

   Blinkist las llama «elegidas para tus intereses» y Headway «creadas para
   ti», y las dos mienten el primer día: un usuario que acaba de instalar la
   app no tiene intereses todavía, y le sale una colección de criptomonedas.
   Eso se nota, y lo que cuesta es justo lo que Curva no se puede permitir
   perder, que es que se le crea —somos los que decimos dónde falla cada
   libro—.

   Personalizar de verdad necesita un historial que no existe. Lo que sí
   existe son los temas que marcó en la introducción, y eso da para ORDENAR,
   que es media personalización y es toda la que es verdad. Así que la
   estantería es siempre la misma y lo que cambia es por dónde empieza:
   `ordenar()` pone delante las que tocan sus temas.

   Y por eso el titular dice «Colecciones» y el subtítulo «Empezando por lo
   que elegiste» en vez de «hechas para ti». Cuando haya historial de lectura
   de verdad —meses, no días— se podrá prometer más.

   CÓMO SE ELIGEN LOS LIBROS DE DENTRO

   Cinco a siete. Con cuatro no parece una colección y con diez nadie llega al
   final. Todos tienen que estar ESCRITOS: una colección que lleva a un
   resumen autogenerado es peor que no tenerla.

   Y el criterio del título manda sobre el del cajón. «Los que envejecieron
   mal» mete un libro de dinero, uno de pareja y uno de dieta en la misma
   caja, y está bien: lo que los junta es lo que tienen en común de verdad, no
   la estantería de la librería.
   ========================================================================== */

/* ¿SE ENSEÑAN LAS COLECCIONES?
 *
 * Pablo, el 2 de septiembre: «quita las colecciones de libros de momento».
 *
 * «De momento», así que no se borra nada: las once colecciones, su orden
 * por intereses, la tira y la pantalla de `Colecciones.tsx` se quedan enteras
 * y probadas. Lo único que cambia es que no se enseñan. Volver a encenderlas es poner esto
 * en `true` y no hay más sitios que tocar: de aquí lo leen la tira del inicio,
 * el «Aparece en» de la ficha de un libro y la pantalla de la colección.
 *
 * Se hace con un interruptor y no comentando el código por dos razones. Una,
 * que comentado se pudre: al mes siguiente ya no compila y nadie se entera
 * hasta que hace falta. Y dos, que así el compilador sigue comprobando que
 * todo eso encaja. */
export const COLECCIONES_A_LA_VISTA = false;

export type Coleccion = {
  id: string;
  /** La promesa, en tres o cuatro palabras. Va grande dentro del azulejo. */
  titulo: string;
  /** La línea de debajo. Dice qué te llevas, no de qué va. */
  promesa: string;
  /** El fondo del azulejo. Oscuros y saturados: encima va texto blanco. */
  tono: string;
  /** Para ordenarlas por lo que le interesa. Puede tocar varias. */
  temas: Categoria[];
  /** El párrafo de la pantalla de dentro: por qué están juntos estos. */
  razon: string;
  /** Ids del catálogo. Todos escritos, comprobado en el arranque. */
  libros: string[];
};

export const COLECCIONES: Coleccion[] = [
  {
    id: "empieza",
    titulo: "Empieza por aquí",
    promesa: "Seis que se entienden sin haber leído nada antes",
    tono: "#2f6f5e",
    temas: ["Historia", "Psicología", "Economía", "Ciencia", "Salud"],
    razon:
      "Ninguno de estos seis da nada por sabido. Son los que se pueden leer el primer día, sin haber leído los anteriores de su campo, y los que dejan al terminarlos con más ganas que dudas.",
    libros: [
      "sapiens",
      "pensar-rapido",
      "psicologia-dinero",
      "por-que-dormimos",
      "factfulness",
      "principito",
    ],
  },
  {
    id: "envejecieron",
    titulo: "Los que envejecieron mal",
    promesa: "Fueron un fenómeno. Hoy se leen de otra manera",
    tono: "#8a3a2c",
    temas: ["Psicología", "Economía", "Salud"],
    razon:
      "Estos seis vendieron millones y siguen citándose en conversaciones de sobremesa, pero lo que decían no ha aguantado igual de bien: unos porque la ciencia les pasó por encima, otros porque su idea central nunca tuvo debajo lo que prometía. Están aquí porque conviene saber qué decían, y sobre todo dónde fallan.",
    libros: [
      "secreto-byrne",
      "marte-venus",
      "piensa-hazte-rico",
      "intro-psicoanalisis",
      "tus-zonas-erroneas",
      "poder-metabolismo",
    ],
  },
  {
    id: "cabeza",
    titulo: "Cómo funciona tu cabeza",
    promesa: "Lo que decide por ti antes de que te enteres",
    tono: "#4a3f7a",
    temas: ["Psicología", "Ciencia"],
    razon:
      "Seis maneras de mirar lo mismo: que la mayor parte de lo que haces se decide sin consultarte. Van del atajo mental al circuito de dopamina, y juntos explican bastante mejor que por separado por qué cuesta tanto cambiar de opinión.",
    libros: [
      "pensar-rapido",
      "incognito",
      "error-descartes",
      "dopamina-lieberman",
      "mente-justos",
      "piensalo-otra-vez",
    ],
  },
  {
    id: "dinero",
    titulo: "El dinero, sin humo",
    promesa: "Los que no te prometen hacerte rico",
    tono: "#8a6b18",
    temas: ["Economía"],
    razon:
      "La estantería de finanzas personales está llena de promesas. Estos seis no hacen ninguna: explican cómo se comporta la gente con su dinero, por qué casi nadie le gana al mercado y qué diferencia hay entre parecer rico y serlo. Son los aburridos, y son los que aguantan.",
    libros: [
      "psicologia-dinero",
      "bogle-sentido-comun",
      "paseo-aleatorio",
      "millonario-al-lado",
      "bolsa-o-vida",
      "inversor-inteligente",
    ],
  },
  {
    id: "distopias",
    titulo: "Distopías que ya pasaron",
    promesa: "Novelas que se quedaron cortas, y la historia que lo probó",
    tono: "#33383f",
    temas: ["Literatura", "Historia"],
    razon:
      "Cuatro novelas que imaginaron lo peor y dos libros de historia que cuentan lo que pasó de verdad. Leerlos seguidos cambia las novelas: lo que parecía exageración de autor resulta ser una versión suave.",
    libros: [
      "1984",
      "mundo-feliz",
      "fahrenheit",
      "rebelion-granja",
      "origenes-totalitarismo",
      "sobre-tirania",
    ],
  },
  {
    id: "cuerpo",
    titulo: "Dormir, respirar, durar",
    promesa: "Lo que de verdad mueve la aguja en tu salud",
    tono: "#1f6b6b",
    temas: ["Salud"],
    razon:
      "Nada de dietas milagro. Seis libros sobre las tres cosas que más cambian cómo te encuentras y que además son gratis: cómo duermes, cómo respiras y qué haces con el tiempo que estás despierto.",
    libros: [
      "por-que-dormimos",
      "respira",
      "outlive",
      "zonas-azules",
      "libro-del-sueno",
      "mente-en-forma",
    ],
  },
  {
    id: "una-tarde",
    titulo: "Se lee en una tarde",
    promesa: "Cortos de verdad, y de los que se quedan",
    tono: "#7a3f63",
    temas: ["Literatura", "Filosofía"],
    razon:
      "Seis libros que caben en una tarde y llevan décadas —o siglos— sin caerse de las listas. Que sean cortos no es una casualidad: ninguno de ellos necesita más páginas para decir lo que dice.",
    libros: [
      "principito",
      "viejo-mar",
      "metamorfosis",
      "brevedad-vida",
      "extranjero",
      "meditaciones",
    ],
  },
  {
    id: "historia-fea",
    titulo: "Cuando se puso fea",
    promesa: "El siglo XX contado por quien lo pasó",
    tono: "#5a3320",
    temas: ["Historia"],
    razon:
      "Tres testimonios de dentro y tres libros que ordenan lo que pasó. Puestos juntos hacen algo que ninguno hace solo: el testimonio pone la cara y el ensayo pone el mecanismo, y sin las dos cosas no se entiende cómo ocurrió.",
    libros: [
      "si-esto-hombre",
      "diario-ana-frank",
      "homo-sovieticus",
      "gulag",
      "eichmann-jerusalen",
      "postguerra",
    ],
  },
  {
    id: "arte",
    titulo: "Arte para quien no sabe",
    promesa: "Entrar sin haber pisado un museo",
    tono: "#a04a2b",
    temas: ["Arte"],
    razon:
      "Cinco libros que no exigen saber nada de antemano y que cambian lo que ves al mirar un cuadro, una foto o un anuncio. Dos son historia, dos son manera de mirar y uno es un manual para ponerse a hacer.",
    libros: [
      "historia-arte",
      "modos-ver",
      "sobre-fotografia",
      "roba-artista",
      "acto-creativo",
    ],
  },
  {
    id: "ganar",
    titulo: "Ganar sin trucos",
    promesa: "Qué hay debajo del talento, contado por los que ganaron",
    tono: "#25506e",
    temas: ["Deportes", "Psicología"],
    razon:
      "Tres autobiografías y tres libros que estudian lo mismo desde fuera. Los seis desmontan la misma idea: que lo que separa al bueno del mejor es el don. Lo que sale una y otra vez es bastante menos romántico.",
    libros: [
      "open-agassi",
      "mamba-mentality",
      "hablo-correr",
      "numero-uno",
      "gen-deportivo",
      "legado-all-blacks",
    ],
  },
  {
    id: "contradicen",
    titulo: "Se contradicen entre sí",
    promesa: "Cinco que dicen lo contrario. Decide tú",
    tono: "#6b3a7a",
    temas: ["Economía", "Filosofía", "Psicología"],
    razon:
      "Aquí no hay una conclusión al final. Son cinco libros que se llevan la contraria en lo importante —cómo se hace dinero, si el esfuerzo basta, para qué sirve pensar en positivo— y están juntos a propósito. Leídos seguidos enseñan más que cualquiera de ellos por su cuenta.",
    libros: [
      "padre-rico",
      "psicologia-dinero",
      "secreto-byrne",
      "cisne-negro",
      "sutil-arte",
    ],
  },
];

/**
 * Las mismas colecciones de siempre, empezando por las que tocan sus temas.
 *
 * No inventa nada ni esconde nada: las once están siempre, y lo único que
 * cambia es el orden. Puntúa cada una por cuántos de sus temas están entre los
 * que marcó en la introducción, y ordena de más a menos; el desempate es el
 * orden de este fichero, que es el que se escribió a mano.
 *
 * «Empieza por aquí» se queda la primera mientras no haya elegido nada: sin
 * temas no hay nada que ordenar, y esa es justo la colección para ese caso.
 */
export function ordenar(intereses: readonly string[]): Coleccion[] {
  if (!intereses.length) return COLECCIONES;
  const peso = new Map(intereses.map((t, i) => [t, intereses.length - i]));
  return [...COLECCIONES]
    .map((c, i) => ({
      c,
      i,
      punto: c.temas.reduce((t, tema) => t + (peso.get(tema) ?? 0), 0),
    }))
    .sort((a, b) => b.punto - a.punto || a.i - b.i)
    .map((x) => x.c);
}
