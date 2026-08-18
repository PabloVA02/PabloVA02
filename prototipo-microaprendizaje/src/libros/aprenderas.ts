/* ==========================================================================
   «Qué vas a aprender»: de qué va cada libro.

   La ficha tenía «Por qué merece la pena» y debajo el campo `porQue`, que es
   un argumento de venta —«Es el mejor libro que existe sobre…», «Porque
   convierte una obra de albañilería en un thriller»—. Sirve para decidir si
   entras, y no sirve para lo que Pablo pidió: saber DE QUÉ VA antes de
   empezar.

   Así que esto es texto nuevo, uno por libro. Las reglas:

     · Se cuenta el recorrido, no se vende. Nada de «imprescindible»,
       «fascinante» ni «una obra maestra».
     · Sale del índice del propio libro, que está escrito como un viaje con
       paradas. De ahí se saca lo que se trata y en qué orden, sin inventar.
     · Dos frases. La primera dice de qué va; la segunda, por dónde pasa.
     · Se nombran las cosas concretas —una fecha, un nombre, una cifra—,
       porque es lo que hace que apetezca leer sin tener que decir que apetece.

   Un libro sin entrada aquí cae en su `porQue`, que es peor pero no deja el
   hueco en blanco. `scripts/validar.mjs` no comprueba esto; lo que hay se ve
   de un vistazo con `node scripts/faltan-aprenderas.mjs`.
   ========================================================================== */

export const APRENDERAS: Record<string, string> = {
  sapiens:
    "Cómo un primate corriente de la sabana africana acabó mandando en el planeta, contado en tres saltos: el lenguaje que nos permitió creernos cosas que no existen —dioses, naciones, dinero— y organizarnos de a miles; la agricultura, que Harari llama el mayor fraude de la historia porque trabajamos más y comimos peor; y la ciencia, que empieza admitiendo que no sabemos. Termina donde casi nadie mira: setenta mil años de éxito y ninguna prueba de que seamos más felices que los cazadores.",

  "homo-deus":
    "Qué se le pide a la humanidad cuando ya ha resuelto lo que la mataba. El hambre, la peste y la guerra dejaron de ser fuerzas de la naturaleza para volverse problemas de gestión, y Harari sostiene que la agenda que viene es otra: vencer a la muerte, fabricar felicidad y ganar capacidades que antes se atribuían a los dioses. Por el camino explica por qué el humanismo se está quedando sin argumentos frente a los algoritmos que te conocen mejor que tú.",

  "diario-ana-frank":
    "Dos años de una adolescente encerrada con otras siete personas en cincuenta metros cuadrados de Ámsterdam, escritos en un cuaderno de cuadros rojos que le regalaron al cumplir trece. Se ve cómo la niña que empieza contando peleas con su madre se convierte en escritora consciente —reescribió el diario entero al oír por la radio de Londres que buscarían testimonios de la guerra—, qué páginas le quitó su padre antes de publicarlo y por qué la frase que todo el mundo cita se lee al revés de como la escribió.",
};
