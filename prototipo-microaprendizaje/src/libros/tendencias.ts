/* ==========================================================================
   Tendencias: los libros que prometen algo.

   Pablo lo pidió así: «los libros más prometedores en cuanto al mensaje que
   mandan —cómo arreglar tu mente, desarrollo personal, dinero, cómo hacer
   amigos—, todo eso que promete cambios radicales».

   Así que esto NO es una lista de los más leídos ni de los mejores. Es la
   lista de los que se pueden resumir en una frase que a alguien le apetezca
   cumplir. Y esa frase se escribe aquí, porque no está en ningún otro sitio:

     el SUBTÍTULO es el de la cubierta —«Cambios pequeños, resultados
       extraordinarios»— y habla del libro;
     el «DE QUÉ TRATA» son dos frases y cuenta de qué va;
     la PROMESA es lo que te llevas TÚ, en segunda persona y en una línea.

   LAS REGLAS DE LA PROMESA

   1. UNA LÍNEA. Ocho palabras y va apretado; doce y se parte en el móvil.

   2. EN SEGUNDA PERSONA y con un verbo delante: «cambia», «entiende»,
      «recupera». No es una descripción, es lo que vas a poder hacer.

   3. NADA DE «DESCUBRE EL SECRETO DE». Es lo que hace que estas listas
      parezcan un anuncio de madrugada. La promesa tiene que ser algo que el
      libro cumpla de verdad, porque debajo está el resumen entero y se nota.

   4. CONCRETA. «Multiplica por 37 en un año» dice más que «mejora cada día»,
      y además es el dato del libro.

   EL ORDEN es el de la parrilla, y manda: los primeros son los que se ven sin
   desplazar. Delante van los escritos a mano, que son los que aguantan que
   alguien entre a leerlos.
   ========================================================================== */

export type Tendencia = { id: string; promesa: string };

export const TENDENCIAS: Tendencia[] = [
  { id: "habitos-atomicos", promesa: "Un 1 % al día multiplica por 37 al año" },
  { id: "psicologia-dinero", promesa: "Entiende por qué haces con el dinero lo que haces" },
  { id: "amigos-influir", promesa: "Cae bien sin fingir y deja de discutir para ganar" },
  { id: "poder-ahora", promesa: "Baja el volumen de la voz que no calla" },
  { id: "padre-rico", promesa: "Distingue lo que te da dinero de lo que cuesta" },
  { id: "siete-habitos", promesa: "Pon tu vida en orden, y en el orden correcto" },
  { id: "poder-habitos", promesa: "Descubre por qué haces lo que no querías hacer" },
  { id: "pensar-rapido", promesa: "Pilla a tu cabeza en los errores que repite siempre" },
  { id: "sutil-arte", promesa: "Elige por qué preocuparte y suelta todo lo demás" },
  { id: "inteligencia-emocional", promesa: "Trabaja la inteligencia que no mide ningún examen" },
  { id: "trabajo-profundo", promesa: "Recupera la concentración que has ido perdiendo" },
  { id: "mente-millonaria", promesa: "Revisa lo que aprendiste de niño sobre el dinero" },
  { id: "cuatro-acuerdos", promesa: "Cuatro reglas para dejar de hacerte daño solo" },
  { id: "ikigai", promesa: "Encuentra el motivo por el que te levantas" },
  { id: "monje-ferrari", promesa: "Cambia la vida cara por la vida que quieres" },
  { id: "piensa-hazte-rico", promesa: "Convierte lo que quieres en una cifra y una fecha" },
  { id: "club-5-manana", promesa: "Gánate una hora que no le debes a nadie" },
  { id: "mindset", promesa: "Cambia lo que crees que eres capaz de aprender" },
  { id: "busca-sentido", promesa: "Ten un para qué y soportarás casi cualquier cómo" },
  { id: "flow", promesa: "Haz que se te pase el tiempo sin enterarte" },
];

export const PROMESAS: Record<string, string> = Object.fromEntries(
  TENDENCIAS.map((t) => [t.id, t.promesa]),
);
