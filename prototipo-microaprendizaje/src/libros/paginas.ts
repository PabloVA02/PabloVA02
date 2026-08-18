/* ==========================================================================
   El resumen por páginas.

   Es el formato de la referencia que pasó Pablo: en vez de tarjetas sueltas,
   ocho páginas de prosa seguida por las que se avanza con «N de 8». Cada
   página se lee de un tirón y tiene su propio asunto.

   Los bloques son cinco y se combinan libremente:

     rotulo   el título de la página, en negrita y sin numerar
     texto    un párrafo corriente
     lista    puntos con la entradilla en negrita: «• Ejercicio: las
              actividades físicas potencian el rendimiento…»
     idea     la caja del rayo, con la frase que resume la página
     cita     una frase del autor, con su nombre debajo
     prueba   el bloque morado del final: qué hacer mañana

   La caja del rayo y la cita salen del original; el bloque de prueba es lo
   único que habla en imperativo, y por eso va al final y una sola vez.

   LO QUE NO LLEVA: nada de subrayar ni de guardar fragmentos. Pablo lo dijo
   expresamente. Los botones de compartir y destacar de la referencia cuelgan
   de esa función, así que tampoco están.
   ========================================================================== */

export type Bloque =
  | { b: "rotulo"; texto: string }
  | { b: "texto"; texto: string }
  | { b: "lista"; puntos: { fuerte: string; texto: string }[] }
  | { b: "idea"; texto: string }
  | { b: "cita"; frase: string; autor: string }
  | { b: "prueba"; puntos: string[] };

export type PaginaLibro = { bloques: Bloque[] };

/* --------------------------------------------------------------------------
   De resumen a páginas.

   Los doscientos libros están escritos en tarjetas —cinco partes de unas
   veinte cada una— y el lector va por páginas. Escribir a mano las ocho de
   cada uno son doscientas piezas de trabajo; convertirlas es una función, y
   además no deja libros a medias: TODOS entran en el lector desde el primer
   día, que era el fallo de la primera versión.

   La conversión respeta lo que ya hay y no inventa nada:

     el título de la parte  → el rótulo de la página
     las tarjetas de texto  → párrafos seguidos
     las tarjetas `clave`   → la caja del rayo, que es exactamente su papel:
                              la frase que resume la parada

   Una parte de veinte tarjetas es demasiado para una página, así que cada
   parte se corta en dos. El rótulo va solo en la primera mitad: repetirlo en
   las dos hace que parezca que te has quedado atascado en el mismo sitio.
   -------------------------------------------------------------------------- */

type TarjetaMinima = { forma: string; texto?: string; frase?: string };
type ParteMinima = { titulo: string; tarjetas: readonly TarjetaMinima[] };

export function paginasDeResumen(partes: readonly ParteMinima[]): PaginaLibro[] {
  const paginas: PaginaLibro[] = [];

  for (const parte of partes) {
    /* Solo texto y clave: las tarjetas de arte y de gráfico son ilustraciones
       de la lectura por tarjetas y aquí no pintan nada. */
    const utiles = parte.tarjetas.filter((t) => t.forma === "texto" || t.forma === "clave");
    if (!utiles.length) continue;

    const mitad = Math.ceil(utiles.length / 2);
    for (const [n, trozo] of [utiles.slice(0, mitad), utiles.slice(mitad)].entries()) {
      if (!trozo.length) continue;
      const bloques: Bloque[] = [];
      if (n === 0) bloques.push({ b: "rotulo", texto: parte.titulo });
      for (const t of trozo) {
        if (t.forma === "clave" && t.frase) bloques.push({ b: "idea", texto: t.frase });
        else if (t.texto) bloques.push({ b: "texto", texto: t.texto });
      }
      paginas.push({ bloques });
    }
  }

  return paginas;
}

/* --------------------------------------------------------------------------
   Hábitos atómicos, en ocho páginas.

   El registro es el de la referencia y conviene no perderlo de vista: se
   explica, no se arenga. Frases llanas y declarativas, nada de «te invito a
   reflexionar», el autor nombrado como quien cita una fuente y no como un
   gurú, y una idea por página resumida en la caja del rayo. Las listas llevan
   la entradilla en negrita porque son lo que la gente vuelve a mirar.

   Ocho páginas de unas 230 palabras: unos veinte minutos de lectura en total,
   que es lo que dura el formato.
   -------------------------------------------------------------------------- */

const HABITOS_ATOMICOS: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Por qué los cambios pequeños no parecen funcionar" },
      {
        b: "texto",
        texto:
          "James Clear pasó dos años recuperándose de una fractura de cráneo que se llevó por delante su temporada de béisbol. No volvió a jugar como antes gracias a un plan ambicioso, sino ordenando cosas mínimas: la hora de acostarse, el orden de la habitación, un hábito de estudio al día. Años después escribió el libro que explica por qué aquello funcionó.",
      },
      {
        b: "texto",
        texto:
          "La tesis es incómoda para quien busca resultados rápidos: los hábitos pequeños no dan casi nada a corto plazo y lo dan casi todo a largo. Mejorar un uno por ciento al día no se nota el martes. Sostenido un año, multiplica por treinta y siete. Ese desajuste entre el esfuerzo de hoy y el resultado de dentro de un año es la razón por la que la mayoría abandona justo antes de que empiece a verse.",
      },
      {
        b: "idea",
        texto:
          "Los resultados llegan con retraso respecto a los hábitos, y ese retraso es lo que hace que los abandonemos antes de tiempo.",
      },
      {
        b: "texto",
        texto:
          "De ahí sale el resto del libro: si el problema es que el resultado tarda, la solución no es apretar más, sino diseñar el hábito para que no dependa de la fuerza de voluntad. Clear lo organiza en cuatro leyes, una por cada paso del bucle que forma cualquier costumbre.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Señal", texto: "lo que dispara el hábito. Hazla obvia." },
          { fuerte: "Deseo", texto: "la motivación que lo empuja. Hazlo atractivo." },
          { fuerte: "Respuesta", texto: "la conducta en sí. Hazla sencilla." },
          { fuerte: "Recompensa", texto: "lo que cierra el ciclo. Hazla satisfactoria." },
        ],
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "El sistema importa más que la meta" },
      {
        b: "texto",
        texto:
          "Todo el mundo quiere el mismo resultado. Los dos equipos que salen a la final quieren ganarla, y solo uno gana; la diferencia no está en la meta, que comparten, sino en lo que hacen cada día para llegar a ella. Clear llama a eso el sistema, y sostiene que es lo único sobre lo que se puede actuar.",
      },
      {
        b: "texto",
        texto:
          "Fijarse solo en la meta tiene además tres efectos molestos. Reduce la satisfacción a un único momento, el de conseguirla, y deja el resto del camino en el limbo. Convierte el éxito en algo temporal, porque una habitación ordenada vuelve a desordenarse si no cambia el sistema que la desordenaba. Y produce un efecto yoyó: se alcanza el objetivo y desaparece la razón para seguir.",
      },
      {
        b: "cita",
        frase: "No te elevas al nivel de tus metas. Caes al nivel de tus sistemas.",
        autor: "James Clear",
      },
      {
        b: "texto",
        texto:
          "La consecuencia práctica es dejar de medirse por el resultado y empezar a medirse por la frecuencia. No «perder ocho kilos», sino «entrenar tres días por semana». No «leer treinta libros», sino «leer veinte minutos antes de dormir». El resultado sigue importando, pero deja de ser la palanca.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Los hábitos que duran cambian quién crees que eres" },
      {
        b: "texto",
        texto:
          "Hay tres capas en cualquier cambio. La de fuera son los resultados: lo que consigues. La de en medio son los procesos: lo que haces. Y la de dentro es la identidad: lo que crees sobre ti mismo. Casi todo el mundo empieza por fuera, y por eso casi todo el mundo vuelve al punto de partida.",
      },
      {
        b: "texto",
        texto:
          "El ejemplo que usa Clear es el de dos personas a las que ofrecen un cigarro. La primera dice «no, gracias, estoy intentando dejarlo»; la segunda dice «no, gracias, no fumo». La primera sigue siendo fumadora y está resistiendo. La segunda ya no lo es. Es la misma conducta con dos identidades detrás, y solo una de las dos aguanta la décima vez que se lo ofrecen.",
      },
      {
        b: "idea",
        texto:
          "Cada vez que cumples un hábito estás votando por la persona que quieres ser. Ninguna votación decide la elección, pero el recuento sí.",
      },
      {
        b: "texto",
        texto:
          "Esto también funciona al revés y ahí está lo interesante: no hace falta creerse escritor para empezar a escribir. Basta escribir dos frases hoy para tener una prueba, pequeña, de que uno escribe. La identidad no precede al hábito, se construye con él, y por eso el tamaño inicial importa menos de lo que parece.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Primera ley: que salte a la vista" },
      {
        b: "texto",
        texto:
          "Buena parte de lo que hacemos al cabo del día no lo decidimos: lo dispara algo del entorno. Se come lo que está encima de la mesa, se mira el móvil que está a la vista y se coge la bici si está en el portal y no en el trastero. Cambiar el entorno funciona mejor que cambiar la fuerza de voluntad porque el entorno no se cansa.",
      },
      {
        b: "texto",
        texto:
          "Clear propone dos herramientas concretas. La primera es la intención de implementación: en vez de «voy a hacer más ejercicio», escribir «los lunes, miércoles y viernes, al salir del trabajo, iré al gimnasio de la esquina». En los estudios que cita, quienes concretan el cuándo y el dónde cumplen entre dos y tres veces más que quienes solo declaran la intención.",
      },
      {
        b: "texto",
        texto:
          "La segunda es el apilamiento: colgar el hábito nuevo de uno que ya existe. «Después de servirme el café de la mañana, escribiré la lista del día.» El hábito viejo hace de señal y ahorra el trabajo de acordarse, que es donde se cae casi siempre.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Concreta", texto: "cuándo y dónde, no solo qué." },
          { fuerte: "Apila", texto: "el hábito nuevo detrás de uno que ya cumples." },
          { fuerte: "Rediseña", texto: "el sitio para que la señal esté a la vista." },
        ],
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Segunda ley: que apetezca" },
      {
        b: "texto",
        texto:
          "Lo que mueve a repetir un hábito no es el placer de haberlo hecho, sino la expectativa de hacerlo. El cerebro libera dopamina antes de la recompensa, mientras la anticipa, y es esa anticipación la que empuja a levantarse del sofá. Un hábito que no anticipa nada agradable no se sostiene, por muy razonable que sea.",
      },
      {
        b: "texto",
        texto:
          "De ahí el emparejamiento de tentaciones: unir lo que hay que hacer con lo que apetece. Ver la serie solo mientras se está en la bicicleta estática. Escuchar el pódcast favorito solo mientras se plancha. La actividad que apetece paga por adelantado a la que cuesta.",
      },
      {
        b: "idea",
        texto:
          "Un hábito se repite por lo que promete, no por lo que da. Cambia la promesa y cambiarás la conducta.",
      },
      {
        b: "texto",
        texto:
          "El factor más potente, sin embargo, no es individual. Copiamos los hábitos de tres grupos: los cercanos, la mayoría y los poderosos. Clear es tajante en esto y conviene tomárselo en serio: rodearse de gente para la que la conducta que quieres ya es lo normal hace más que cualquier truco de motivación.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Tercera ley: que cueste poco empezar" },
      {
        b: "texto",
        texto:
          "El hábito no se forma contando días, sino repeticiones. Lo que importa no es cuánto tiempo llevas, sino cuántas veces lo has hecho, y por eso la prioridad es que empezar sea barato. Clear insiste en que se subestima el poder de la fricción: cada paso de más entre tú y la conducta reduce la probabilidad de que ocurra.",
      },
      {
        b: "texto",
        texto:
          "De ahí la regla de los dos minutos: cualquier hábito nuevo debe poder empezarse en menos de dos minutos. «Leer treinta páginas» se convierte en «leer una página». «Salir a correr» se convierte en «ponerme las zapatillas». Suena a trampa y no lo es: lo difícil de un hábito casi nunca es hacerlo, es empezarlo.",
      },
      {
        b: "cita",
        frase: "Un hábito debe establecerse antes de poder mejorarse.",
        autor: "James Clear",
      },
      {
        b: "texto",
        texto:
          "La otra cara es útil para lo que se quiere quitar: si la fricción hace que un hábito no ocurra, basta con añadirla. Sacar la aplicación de la pantalla de inicio, dejar el mando en otra habitación, no tener en casa lo que no se quiere comer. No se trata de resistir mejor, sino de necesitar resistir menos veces.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Cuarta ley: que se note que lo has hecho" },
      {
        b: "texto",
        texto:
          "Lo que se recompensa se repite. El problema es que casi todos los hábitos que merecen la pena tienen la recompensa lejos: el gimnasio pasa factura hoy y paga dentro de meses. Los hábitos malos hacen justo lo contrario, y por eso ganan casi siempre.",
      },
      {
        b: "texto",
        texto:
          "La solución que propone Clear es fabricar una recompensa inmediata que apunte en la misma dirección que la lejana. Un ejemplo suyo: cada vez que se saltaba una compra por capricho, transfería el dinero a una cuenta llamada «viaje a Europa». Ahorrar dejaba de ser una privación y se convertía en un avance visible.",
      },
      {
        b: "texto",
        texto:
          "El seguimiento cumple la misma función. Tachar la casilla del día es en sí mismo una recompensa, y además convierte el progreso en algo que se ve. La regla que acompaña es igual de importante: nunca fallar dos veces seguidas. Un día perdido es un accidente; dos son el principio de otro hábito.",
      },
      {
        b: "idea",
        texto:
          "No se trata de no fallar nunca. Se trata de que un fallo no se convierta en dos.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Dónde falla el libro, y qué hacer mañana" },
      {
        b: "texto",
        texto:
          "Conviene decirlo: el libro es más flojo de lo que parece en su base científica. Varios de los estudios que cita vienen de la psicología social de los años dos mil, un campo que después ha tenido serios problemas para replicar sus resultados, y el famoso «uno por ciento diario» es una metáfora aritmética, no un hallazgo. Tomado como ley natural, decepciona.",
      },
      {
        b: "texto",
        texto:
          "Tomado como manual de diseño, en cambio, aguanta bien. Su mejor aportación no es la neurociencia sino un cambio de foco: dejar de tratar la constancia como un rasgo del carácter y empezar a tratarla como un problema de entorno. Eso sí se puede modificar un martes por la tarde.",
      },
      {
        b: "texto",
        texto:
          "También pesa poco lo que no depende de uno. Quien encadena dos turnos y cuida de alguien no falla al hábito por mal diseño, y el libro apenas se asoma a esa diferencia. Vale para ordenar lo que está en tu mano, no para explicar por qué a unos les cabe más en las manos que a otros.",
      },
      {
        b: "prueba",
        puntos: [
          "Elige un solo hábito y redúcelo hasta que empezarlo cueste menos de dos minutos.",
          "Escríbelo con cuándo y dónde: «después de X, haré Y en Z».",
          "Quita de en medio una sola fricción del hábito que quieres dejar. Una basta.",
          "Marca los días en un calendario a la vista y no falles dos seguidos.",
        ],
      },
    ],
  },
];

/** Los resúmenes por páginas, por identificador de libro. */
export const PAGINAS: Record<string, PaginaLibro[]> = {
  "habitos-atomicos": HABITOS_ATOMICOS,
};
