/* ==========================================================================
   BEST SELLERS: los que ha comprado más gente, y no los que más nos gustan.

   Pablo, el 4 de septiembre: «en vez de recomendados quiero que solo ponga
   Para ti, y debajo otra fila de best sellers».

   ES UNA FILA DISTINTA DE «PARA TI», Y ESA ES LA GRACIA. «Para ti» ordena el
   catálogo por lo que él eligió en la introducción, así que cambia de una
   cuenta a otra. Ésta no cambia nunca: son los que ha comprado medio mundo,
   los elijas o no. Dos maneras de llegar a un libro que no se pisan, y por eso
   una debajo de la otra tiene sentido.

   QUÉ ENTRA, Y ES UNA AFIRMACIÓN SOBRE EL MUNDO REAL. Aquí no vale poner los
   que nos parezcan buenos: decir «best seller» de un libro es decir que ha
   vendido muchísimo, y eso o es cierto o es mentira. Los doce de abajo son
   títulos de los que se informan DECENAS DE MILLONES de ejemplares vendidos,
   una cifra que arrastran desde hace años y que sale en las fichas de sus
   propias editoriales.

   El orden es el de la cifra que se cita habitualmente, de más a menos. Y esa
   cifra es una estimación, no una auditoría: las ventas de un libro con
   ochenta años y cien ediciones no las tiene contadas nadie con exactitud. Por
   eso el número NO SE ENSEÑA en la pantalla y solo queda escrito aquí, que es
   donde se puede matizar. Lo que se le dice al lector —que son de los más
   vendidos— sí se sostiene entero.

   Y falta el que sería el primero de todos: la Biblia. No está porque no está
   en el catálogo, y porque una fila de superventas que la abra con ella se
   convierte en otra cosa.

   PARA AÑADIR UNO: que tenga cifra pública de ventas y que esté en el
   catálogo. Si solo cumple lo segundo, va a «Para ti», no aquí.
   ========================================================================== */

/** Un superventas: el libro y los ejemplares que se le atribuyen, en millones. */
export type Superventas = { id: string; millones: number };

export const SUPERVENTAS: Superventas[] = [
  { id: "principito", millones: 140 },        // El principito, Saint-Exupéry
  { id: "alquimista", millones: 65 },         // El alquimista, Coelho
  { id: "siete-habitos", millones: 40 },      // Los 7 hábitos, Covey
  { id: "padre-rico", millones: 32 },         // Padre rico, padre pobre, Kiyosaki
  { id: "amigos-influir", millones: 30 },     // Cómo ganar amigos, Carnegie
  { id: "sapiens", millones: 25 },            // Sapiens, Harari
  { id: "piensa-hazte-rico", millones: 20 },  // Piensa y hazte rico, Hill
  { id: "habitos-atomicos", millones: 20 },   // Hábitos atómicos, Clear
  { id: "busca-sentido", millones: 16 },      // El hombre en busca de sentido, Frankl
  { id: "cuatro-acuerdos", millones: 15 },    // Los cuatro acuerdos, Ruiz
  { id: "sutil-arte", millones: 15 },         // El sutil arte…, Manson
  { id: "poder-ahora", millones: 10 },        // El poder del ahora, Tolle
];
