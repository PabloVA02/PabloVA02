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

   Tres reglas, y las tres salen de mirar la referencia:

   OCHO PÁGINAS SIEMPRE. La cuenta de abajo dice «3 de 8» en todos los
   resúmenes, sean del largo que sean, y esa constancia es parte del formato:
   quien entra sabe cuánto le queda antes de empezar. Cortar cada parte por la
   mitad daba diez páginas en unos libros y catorce en otros. Ahora las ocho
   se reparten entre las partes a peso de palabras, con una como mínimo para
   cada una, por el método del resto mayor: la parte más larga se lleva más
   páginas, pero ninguna se queda sin la suya.

   RÓTULO EN TODAS. En la referencia no hay ni una página sin título. La
   primera de cada parte lleva el de la parte; las de continuación se quedan
   con el rótulo de su tarjeta clave, que para eso lo trae. Antes iban a pelo
   y la mitad del libro empezaba con un párrafo colgando.

   LA CLAVE ES LA CAJA DEL RAYO. Es exactamente su papel en el original —la
   frase que resume la parada— y exactamente el de la caja en la referencia.
   No hay que inventar nada: ya está escrita.

   Lo que NO hace esta función es escribir. No se saca de aquí ni una cita ni
   un bloque de «Prueba esto» que no estuviera ya en el resumen: un libro de
   historia no tiene deberes que mandar, y ponérselos sería añadir voz propia
   donde no la hay.
   -------------------------------------------------------------------------- */

type TarjetaMinima = { forma: string; texto?: string; frase?: string; rotulo?: string };
type ParteMinima = { titulo: string; tarjetas: readonly TarjetaMinima[] };

/** Las que dicen algo. El arte y los gráficos son de la lectura por tarjetas. */
const util = (t: TarjetaMinima) => t.forma === "texto" || t.forma === "clave";

const pesa = (t: TarjetaMinima) =>
  ((t.forma === "clave" ? t.frase : t.texto) ?? "").split(/\s+/).filter(Boolean).length;

/**
 * Reparte `total` páginas entre trozos de distinto peso, con una como mínimo
 * para cada uno. Método del resto mayor: se da a cada uno su parte entera y
 * las que sobran van a los que peor salieron parados en el redondeo. Es el
 * mismo reparto que se usa para los escaños, y por la misma razón: sin él, un
 * capítulo corto se queda a cero y desaparece del libro.
 */
function reparte(pesos: number[], total: number): number[] {
  const n = pesos.length;
  if (n >= total) return pesos.map(() => 1);
  const suma = pesos.reduce((a, b) => a + b, 0) || n;
  const libres = total - n;
  const exacto = pesos.map((p) => (p / suma) * libres);
  const dado = exacto.map(Math.floor);
  const orden = exacto
    .map((e, i) => ({ i, resto: e - Math.floor(e) }))
    .sort((a, b) => b.resto - a.resto);
  let sobran = libres - dado.reduce((a, b) => a + b, 0);
  for (const { i } of orden) {
    if (sobran <= 0) break;
    dado[i]++;
    sobran--;
  }
  return dado.map((d) => d + 1);
}

/** Corta una lista en `k` montones de peso parecido, sin desordenarla. */
function corta(cartas: TarjetaMinima[], k: number): TarjetaMinima[][] {
  if (k <= 1) return [cartas];
  const total = cartas.reduce((a, c) => a + pesa(c), 0);
  const montones: TarjetaMinima[][] = [];
  let actual: TarjetaMinima[] = [];
  let llevo = 0;
  for (const [i, c] of cartas.entries()) {
    /* Cuánto le queda por repartir y en cuántos montones: si lo que llevo ya
       pasa de su parte y aún quedan cartas para llenar los montones que
       faltan, se cierra este y se abre el siguiente. */
    const faltan = k - montones.length;
    const cupo = (total - montones.flat().reduce((a, x) => a + pesa(x), 0)) / faltan;
    if (actual.length && llevo >= cupo && cartas.length - i >= faltan - 1) {
      montones.push(actual);
      actual = [];
      llevo = 0;
    }
    actual.push(c);
    llevo += pesa(c);
  }
  if (actual.length) montones.push(actual);
  /* Si el reparto se quedó corto —pasa con partes de pocas tarjetas—, se
     completan montones vacíos partiendo el más gordo por la mitad. */
  while (montones.length < k) {
    const gordo = montones.reduce((a, b) => (b.length > a.length ? b : a));
    if (gordo.length < 2) break;
    const i = montones.indexOf(gordo);
    montones.splice(i, 1, gordo.slice(0, Math.ceil(gordo.length / 2)), gordo.slice(Math.ceil(gordo.length / 2)));
  }
  return montones;
}

/* Cuánto dura un resumen escrito a mano, EN AUDIO, contando sus palabras.

   Dos decisiones aquí, y las dos se discutieron con Pablo.

   POR QUÉ HACE FALTA: `libro.minutos` viene del texto VIEJO —el de las
   tarjetas, el doble de largo— y en un libro reescrito miente por el doble. La
   ficha de Sapiens decía veinticinco minutos cuando el texto que hay son doce
   de lectura.

   POR QUÉ EL DE AUDIO Y NO EL DE LECTURA: Headway anuncia el de leer —«quince
   minutos para leer o escuchar»— y luego su propio audio dura de quince a
   veinte, o sea que el número se les queda corto justo en el modo que más
   crece. Aquí se enseña el mayor de los dos: quien lee termina antes de lo
   prometido, que es la dirección correcta de la sorpresa.

   A 140 palabras por minuto, que es lo que da esta voz a velocidad 0,92.
   Leyendo con los ojos son 200, o sea un tercio menos de tiempo. */
export function minutosDePaginas(paginas: readonly PaginaLibro[]): number {
  let palabras = 0;
  for (const pagina of paginas) {
    for (const b of pagina.bloques) {
      const texto =
        b.b === "lista"
          ? b.puntos.map((x) => `${x.fuerte} ${x.texto}`).join(" ")
          : b.b === "cita"
            ? `${b.frase} ${b.autor}`
            : b.b === "prueba"
              ? b.puntos.join(" ")
              : b.texto;
      palabras += texto.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    }
  }
  return Math.max(1, Math.round(palabras / 140));
}

/** Las páginas que tiene todo resumen, con cuenta o sin ella. */
export const PAGINAS_POR_RESUMEN = 8;

export function paginasDeResumen(partes: readonly ParteMinima[]): PaginaLibro[] {
  const vivas = partes
    .map((p) => ({ titulo: p.titulo, cartas: p.tarjetas.filter(util) }))
    .filter((p) => p.cartas.length);
  if (!vivas.length) return [];

  const cuotas = reparte(
    vivas.map((p) => p.cartas.reduce((a, c) => a + pesa(c), 0)),
    PAGINAS_POR_RESUMEN,
  );

  const paginas: PaginaLibro[] = [];
  for (const [n, parte] of vivas.entries()) {
    for (const [k, monton] of corta(parte.cartas, cuotas[n]).entries()) {
      const bloques: Bloque[] = [];
      /* La primera página de una parte lleva el título de la parte; las de
         continuación, el rótulo de su primera clave. Repetir el de la parte
         en las dos hace que parezca que te has quedado atascado. */
      const clave = monton.find((c) => c.forma === "clave" && c.rotulo);
      const rotulo = k === 0 ? parte.titulo : (clave?.rotulo ?? parte.titulo);
      bloques.push({ b: "rotulo", texto: rotulo });
      for (const c of monton) {
        if (c.forma === "clave" && c.frase) bloques.push({ b: "idea", texto: c.frase });
        else if (c.texto) bloques.push({ b: "texto", texto: c.texto });
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
        b: "idea",
        texto:
          "Sirve para lo que promete: ordenar lo que está en tu mano. Lo que no está, no lo arregla ningún hábito de dos minutos.",
      },
    ],
  },
];

/** Los resúmenes por páginas, por identificador de libro. */
/* --------------------------------------------------------------------------
   Sapiens, en ocho páginas.

   Es el libro que Pablo puso de ejemplo cuando devolvió los resúmenes
   automáticos: «está muy mal redactado». Tenía razón y el diagnóstico era
   fácil de ver — la primera página contaba que a Harari le endosaron una
   asignatura de primero y cómo se tradujo el libro al inglés. Eso es la
   historia DEL LIBRO. Quien abre un resumen de Sapiens quiere la historia de
   la especie.

   Así que aquí se cuenta el libro y no su ficha bibliográfica: cada página
   abre con la afirmación que sostiene, la explica con lo concreto que trae
   el original —las cifras, los ejemplos, los nombres— y deja una frase en la
   caja del rayo. La última dice también dónde falla, que es lo que separa
   esto de una contraportada.
   -------------------------------------------------------------------------- */

const SAPIENS: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Durante casi toda nuestra historia no fuimos la única humanidad" },
      {
        b: "texto",
        texto:
          "Hace cien mil años, en la Tierra vivían al menos seis especies humanas a la vez. Los neandertales ocupaban Europa, el Homo erectus llevaba casi dos millones de años en Asia y en la isla de Flores había una especie enana de un metro de altura. Sapiens era una más, y ni siquiera la más dotada: el cerebro de un neandertal era algo mayor que el nuestro y su cuerpo aguantaba mejor el frío.",
      },
      {
        b: "texto",
        texto:
          "Nada en aquel sapiens anunciaba lo que venía. Vivía en grupos pequeños en un rincón de África, cazaba lo que podía y competía por la carroña con hienas y buitres. Harari insiste en este punto porque cambia la pregunta: no se trata de explicar por qué el ser humano domina el planeta, sino por qué lo domina UNA de las seis especies humanas que había.",
      },
      {
        b: "idea",
        texto:
          "Hoy nos parece natural ser la única especie humana. Es una anomalía reciente: durante dos millones de años lo normal fue lo contrario.",
      },
      {
        b: "texto",
        texto:
          "Hace setenta mil años ese sapiens sale de África, y a partir de ahí las otras humanidades desaparecen una tras otra. Los neandertales se extinguen hace unos treinta mil años; los enanos de Flores, hace unos cincuenta mil. El orden de las desapariciones sigue de cerca al de nuestras llegadas, y también el de la fauna grande: Australia pierde el noventa por ciento de sus animales de más de cincuenta kilos poco después de que aparezcamos allí.",
      },
      {
        b: "texto",
        texto:
          "Queda un rastro de aquella convivencia. El análisis del genoma neandertal demostró que hubo mezcla: un europeo o un asiático de hoy lleva entre un uno y un cuatro por ciento de ADN neandertal. No los sustituimos del todo. Lo que hay que explicar sigue en pie: qué le pasó a sapiens hace setenta mil años para que empezara a ganar en todas partes.",
      },
      {
        b: "texto",
        texto:
          "Ese es el recorrido de este resumen. Primero, la respuesta de Harari a esa pregunta y lo que se le puede hacer a un planeta con ella. Después, las tres revoluciones que organizan el libro —la del lenguaje, la de la agricultura y la de la ciencia—, lo que costó cada una, y una última página que dice también dónde le discuten los especialistas.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Ganamos porque somos capaces de creernos cosas que no existen" },
      {
        b: "texto",
        texto:
          "La respuesta de Harari es un cambio en el lenguaje al que llama revolución cognitiva. Muchos animales se comunican y algunos avisan del peligro con precisión. Lo que ningún otro hace es hablar de lo que no está delante y, sobre todo, de lo que no existe: dioses, naciones, dinero, empresas. Esa es la novedad, y de ahí sale todo lo demás.",
      },
      {
        b: "texto",
        texto:
          "Sirve porque resuelve un problema de tamaño. Un grupo que se sostiene solo con relaciones personales —quién es de fiar, quién me debe un favor— se rompe alrededor de los ciento cincuenta miembros; por encima de ahí nadie conoce a todos. Los chimpancés siguen atrapados en ese techo. Una ficción compartida lo salta de golpe: dos desconocidos que creen en el mismo dios, en la misma bandera o en el mismo billete cooperan sin haberse visto nunca.",
      },
      {
        b: "idea",
        texto:
          "Dominamos el planeta porque somos capaces de creernos lo mismo entre muchísimos desconocidos, y ninguna otra especie puede hacer eso.",
      },
      {
        b: "texto",
        texto:
          "Harari lo llama realidad imaginada, y no quiere decir mentira. Peugeot es su ejemplo favorito: la empresa no es su fábrica, ni sus coches, ni su plantilla, que pueden cambiar enteros sin que Peugeot deje de existir. Es una historia que un abogado escribió siguiendo un ritual legal y que todos aceptamos. Existe de verdad en el sentido que importa: mueve dinero, contrata gente y puede ser demandada.",
      },
      {
        b: "texto",
        texto:
          "Y tiene una ventaja que la evolución no puede igualar. Cambiar el comportamiento de una especie exige cambiar sus genes y eso lleva miles de generaciones. Cambiar una historia se hace en una tarde: cuando la ficción deja de servir, se cuenta otra. Es la razón de que sapiens pasara de cazar en la sabana a organizar imperios sin ninguna mutación de por medio.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "La agricultura fue el mayor fraude de la historia" },
      {
        b: "texto",
        texto:
          "Hace unos doce mil años unos cuantos grupos empezaron a plantar trigo, y en dos milenios casi todo el mundo vivía de eso. La versión de siempre dice que fue un avance: menos hambre, más tiempo libre, el principio de la civilización. Los huesos dicen otra cosa. El campesino trabajaba más horas que el cazador recolector, comía peor —una dieta de dos o tres plantas en vez de decenas—, enfermaba más y era más bajo.",
      },
      {
        b: "texto",
        texto:
          "El cuerpo tampoco estaba preparado. Un esqueleto hecho para trepar y correr detrás de un animal pasó a acarrear cubos, moler grano y agacharse a arrancar hierbajos, y de ahí salen las hernias, las artritis y las espaldas rotas que aparecen en los cementerios de los primeros pueblos agrícolas. Vivir pegado a los animales domésticos y a otros cientos de personas trajo además las epidemias.",
      },
      {
        b: "idea",
        texto:
          "No fuimos nosotros quienes domesticamos el trigo. Fue el trigo el que nos domesticó a nosotros.",
      },
      {
        b: "texto",
        texto:
          "Entonces, ¿por qué se impuso? Porque la evolución no cuenta bienestar, cuenta copias. Una hectárea de trigo alimenta a mucha más gente que una hectárea de bosque, aunque los alimente peor. La población creció, y una vez que hay diez veces más bocas ya no se puede volver atrás: la vida del campesino era peor que la del cazador, pero la del cazador ya no daba para todos.",
      },
      {
        b: "texto",
        texto:
          "Harari llama a esto la trampa del lujo, y es la parte del libro que más se reconoce hoy. Una comodidad se adopta porque facilita la vida, se convierte en costumbre, la costumbre crea una obligación nueva y ya no se puede prescindir de ella. Lo dice del trigo y del arado, y sirve igual para el correo electrónico.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Ningún orden social grande se sostiene sin una ficción compartida" },
      {
        b: "texto",
        texto:
          "Con millones de personas viviendo juntas hizo falta algo que las mantuviera en su sitio, y no bastaba el instinto: no hay nada en nuestra biología que diga cómo debe organizarse una ciudad de cien mil habitantes. Lo que hubo fue relatos, y Harari los llama órdenes imaginados. Funcionan mientras casi todo el mundo se los cree, y por eso todos los grandes órdenes dedican tanto esfuerzo a repetirse.",
      },
      {
        b: "texto",
        texto:
          "Para enseñar que son historias pone dos textos uno al lado del otro. El Código de Hammurabi, de hace casi cuatro mil años, declara que los dioses han ordenado la sociedad en superiores, plebeyos y esclavos, y pone precio distinto a la vida de cada uno. La Declaración de Independencia de Estados Unidos declara que todos los hombres son creados iguales. Los dos afirman describir una verdad eterna. Los dos son, dice Harari, ficciones útiles.",
      },
      {
        b: "idea",
        texto:
          "No existe la igualdad en la naturaleza ni existen los derechos en la biología. Existen porque muchísima gente se cuenta que existen, y eso basta para que funcionen.",
      },
      {
        b: "texto",
        texto:
          "De ahí salen las jerarquías, y todas se justifican igual: presentándose como naturales. La casta india, la esclavitud, la separación entre blancos y negros en América, la posición de las mujeres en casi todas las sociedades conocidas. Harari repasa las explicaciones biológicas del reparto entre hombres y mujeres —la fuerza, la agresividad, el cuidado de las crías— y muestra que ninguna sostiene el resultado: hay trabajos duros ocupados por mujeres y puestos de poder que no requieren fuerza ninguna.",
      },
      {
        b: "texto",
        texto:
          "La conclusión práctica es incómoda. Un orden imaginado no se sostiene solo con la fuerza: se sostiene porque está dentro de la cabeza de la gente, incluidos los que salen perdiendo. Cambiarlo exige que un número enorme de personas cambien de historia a la vez, y eso solo ocurre unas pocas veces por siglo.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Tres fuerzas juntaron a la humanidad: el dinero, los imperios y las religiones" },
      {
        b: "texto",
        texto:
          "Durante milenios el mundo estuvo dividido en miles de culturas que apenas se rozaban. Hoy casi todos participamos de un mismo sistema. Harari atribuye esa unificación a tres inventos que cruzan fronteras y que no necesitan que nadie se caiga bien: el dinero, el imperio y la religión universal.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "El dinero", texto: "convierte cualquier cosa en cualquier otra y funciona entre enemigos." },
          { fuerte: "El imperio", texto: "mete pueblos distintos en una sola ley, una lengua y una moneda." },
          { fuerte: "La religión", texto: "da una verdad válida para todos y no solo para los de casa." },
        ],
      },
      {
        b: "texto",
        texto:
          "El dinero es el más eficaz de los tres, y también el más raro. No se come, no abriga y casi nunca se toca: hoy más del noventa por ciento del que existe son cifras en servidores. Lo que le da valor es una confianza circular — acepto este papel porque estoy seguro de que mañana lo aceptará otro—, y esa confianza aguanta donde no aguanta ninguna otra. Dos personas que se odian y no comparten dios ni idioma pueden comerciar.",
      },
      {
        b: "idea",
        texto:
          "El dinero es la única historia que se han creído todos los pueblos del mundo a la vez.",
      },
      {
        b: "texto",
        texto:
          "Con los imperios Harari es igual de incómodo que con la agricultura. No los defiende, pero avisa de que casi todo lo que hoy llamamos cultura propia —el idioma, la comida, las leyes, la religión— llegó por conquista de alguien. Y la lista de sus crímenes, dice, no cancela el hecho de que las culturas puras que reclaman los nacionalismos casi nunca existieron.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "La ciencia moderna arranca cuando Europa admite que no sabe" },
      {
        b: "texto",
        texto:
          "Hacia 1500 pasa algo que Harari considera tan grande como la agricultura. Las tradiciones anteriores daban por hecho que todo lo importante ya se sabía y que estaba escrito en algún libro sagrado; lo que quedaba era interpretarlo. La ciencia empieza con la operación contraria: reconocer que hay preguntas cuya respuesta nadie tiene. En los mapas europeos aparecen entonces espacios en blanco, y esos huecos son la señal.",
      },
      {
        b: "texto",
        texto:
          "Esa humildad se convirtió en una máquina cuando se enganchó a otras dos. El imperio pagaba expediciones porque el conocimiento traía territorio, y el capital las financiaba porque el territorio traía beneficio. James Cook zarpa para observar el tránsito de Venus con astrónomos a bordo y vuelve con la costa este de Australia reclamada para la Corona: en el mismo viaje, ciencia e imperio.",
      },
      {
        b: "idea",
        texto:
          "Ciencia, imperio y capital crecieron juntos, y ninguno de los tres habría llegado tan lejos sin los otros dos.",
      },
      {
        b: "texto",
        texto:
          "El capitalismo aporta la pieza que faltaba: la idea de que el futuro será mayor que el presente. Con crédito se puede gastar hoy un dinero que todavía no existe, a cambio de que el negocio crezca y lo devuelva. Antes de 1500 apenas había crédito porque nadie esperaba crecimiento; el pastel era el que era. Cuando se empieza a creer en el crecimiento, el crédito se dispara y con él las fábricas, los barcos y los laboratorios.",
      },
      {
        b: "texto",
        texto:
          "El resultado es una aceleración sin comparación en la historia. En cinco siglos pasamos de no saber qué había al otro lado del océano a poner un pie en la Luna, y de una economía que crecía casi nada a multiplicarse por cientos. Ese es el sapiens que Harari deja al final: no el más fuerte, sino el que aprendió a admitir su ignorancia y a financiarla.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Somos mucho más poderosos y no está claro que seamos más felices" },
      {
        b: "texto",
        texto:
          "Aquí Harari hace la pregunta que la historia suele esquivar: todo ese poder, ¿nos ha hecho vivir mejor? Los números de bienestar declarado apenas se mueven cuando un país se enriquece por encima de cierto punto, y eso encaja mal con el relato del progreso. Su explicación tiene dos partes y ninguna es un consuelo.",
      },
      {
        b: "texto",
        texto:
          "La primera son las expectativas. La felicidad no depende de lo que se tiene, sino de la distancia entre lo que se tiene y lo que se esperaba tener; por eso una mejora se disfruta unos meses y luego pasa a ser el suelo desde el que se mide la siguiente. La segunda es bioquímica: el organismo devuelve el ánimo a su punto de partida pase lo que pase, de modo que ni la lotería ni la desgracia mueven la aguja tanto tiempo como se cree.",
      },
      {
        b: "idea",
        texto:
          "El progreso ha multiplicado nuestro poder sin tocar lo que sentimos, porque lo que sentimos se mide contra lo que esperábamos.",
      },
      {
        b: "texto",
        texto:
          "Y hay una cuenta que casi nunca entra en el balance. Las especies que domesticamos son las que más han triunfado en número de individuos y las que peor viven: decenas de miles de millones de animales criados en naves, separados de sus crías, con instintos que no pueden ejercer. Harari lo llama el mayor crimen de la historia, y encaja con su tesis: la evolución cuenta copias, no bienestar.",
      },
      {
        b: "texto",
        texto:
          "El libro termina mirando hacia delante y con inquietud. Después de setenta mil años sometiendo el mundo, sapiens está empezando a modificar la vida misma: biotecnología, prótesis, ordenadores. La frase final del libro es que somos dioses insatisfechos que no saben lo que quieren, y es también el punto de partida de su siguiente libro.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "Sapiens cuenta setenta mil años con una sola idea de fondo: nuestra especie manda en el planeta porque puede inventarse historias y creérselas entre millones de desconocidos. Con esa llave abre el resto — el dinero, las naciones, los derechos, las empresas y las religiones son variantes del mismo mecanismo—, y también explica por qué el progreso puede aumentar el poder de la especie y empeorar la vida del individuo, como pasó con la agricultura.",
      },
      {
        b: "texto",
        texto:
          "Conviene saber también dónde flojea, porque es un libro discutido por especialistas. La revolución cognitiva de hace setenta mil años se presenta como un salto único y limpio, y la mayoría de los arqueólogos ve un proceso más largo y desordenado. Las páginas sobre la felicidad de los cazadores recolectores son especulación razonada, no datos: no hay manera de medir el ánimo de alguien que murió hace veinte mil años. Y la síntesis, por definición, se come los matices.",
      },
      {
        b: "idea",
        texto:
          "Léelo como lo que es: una tesis fuerte y bien contada sobre por qué somos como somos, no un manual de historia.",
      },
      {
        b: "texto",
        texto:
          "Queda una manera de comprobar si su tesis aguanta, y no hace falta salir de casa: coge un billete y pregúntate qué lo sostiene. No es el papel ni el metal. Es que mañana lo va a aceptar otro, y que los dos os creéis lo mismo sin haberos visto nunca.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   Homo Deus, en ocho páginas.

   El segundo escrito con el molde de `REDACCION.md`, y el primero que estrena
   las dos reglas que salieron de las capturas del 20 de agosto: la página uno
   es una ENTRADA que cuenta de dónde parte el libro y anuncia el recorrido, y
   el resumen termina en CONCLUSIÓN y nada más —sin la lista de deberes que
   pone la referencia, que Pablo quitó expresamente—.

   Es la continuación de Sapiens y conviene que se lea como tal: aquel
   explicaba cómo llegamos hasta aquí y este pregunta hacia dónde vamos.
   -------------------------------------------------------------------------- */

const HOMO_DEUS: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Los tres enemigos de siempre han dejado de matarnos" },
      {
        b: "texto",
        texto:
          "Durante milenios, cualquier conversación sobre el futuro giraba en torno a tres amenazas: el hambre, la peste y la guerra. Eran fuerzas incontrolables, se explicaban por la voluntad de los dioses y ninguna generación había vivido sin ellas. En el siglo XXI, por primera vez, las tres han pasado de ser destinos a ser problemas de gestión.",
      },
      {
        b: "texto",
        texto:
          "Harari lo sostiene con la estadística de la muerte. Hoy fallece muchísima más gente por comer de más que por no tener qué comer; las epidemias que arrasaban continentes se combaten con vacunas y protocolos; y la violencia humana mata a bastante menos gente que los accidentes de tráfico. La cifra que más incomoda es esta: se quitan la vida más personas de las que mueren en todas las guerras y todos los crímenes del mundo juntos.",
      },
      {
        b: "idea",
        texto:
          "El azúcar se ha vuelto más peligroso que la pólvora. Ese cambio de escala es el punto de partida del libro.",
      },
      {
        b: "texto",
        texto:
          "Y ahí aparece la pregunta que ocupa el resto: si una especie resuelve lo que llevaba cien mil años intentando resolver, ¿a qué dedica el esfuerzo después? En este resumen se recorre la respuesta de Harari —la nueva agenda de la humanidad—, la religión que sostiene nuestra época, los descubrimientos que la están dejando sin suelo, y hacia qué está empezando a mirar el poder. La última página dice también dónde el libro se pasa de frenada.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "La nueva agenda: no morirse, sentirse bien y ser dioses" },
      {
        b: "texto",
        texto:
          "Resueltos el hambre, la peste y la guerra, Harari sostiene que la ambición se desplaza a tres objetivos, y que no los ha decidido nadie: son la continuación lógica de lo que ya hacemos. Se llaman inmortalidad, felicidad y divinidad, y en cuanto se miran de cerca resultan mucho menos épicos de lo que suenan.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "No morirse", texto: "no es vivir para siempre, sino no tener fecha. Un accidente seguiría matándote." },
          { fuerte: "Sentirse bien", texto: "convertir el ánimo en un problema de bioquímica que se pueda ajustar." },
          { fuerte: "Ser dioses", texto: "rediseñar el cuerpo y la mente, en vez de conformarse con los que tocaron." },
        ],
      },
      {
        b: "texto",
        texto:
          "Lo llamativo es que ya se está invirtiendo dinero serio en las tres. Google creó en 2013 una empresa —Calico— cuyo objetivo declarado es tratar el envejecimiento como una enfermedad; los laboratorios llevan décadas vendiendo estados de ánimo, y la ingeniería genética permite hoy elegir características que hace veinte años eran lotería.",
      },
      {
        b: "idea",
        texto:
          "La medicina del siglo XX curaba enfermos. La del XXI quiere mejorar a los sanos, y esa es una frontera distinta.",
      },
      {
        b: "texto",
        texto:
          "Harari avisa de que no es una profecía sino una extrapolación: nada garantiza que se consiga. Lo que sí afirma es que el intento ya está en marcha y que sus consecuencias se reparten muy mal, porque una mejora que se compra la compran unos pocos.",
      },
      {
        b: "texto",
        texto:
          "Conviene mirar de cerca lo que ya se ha conseguido, porque se malinterpreta. La esperanza de vida se ha disparado en un siglo, pero no porque los viejos vivan mucho más: porque han dejado de morirse los niños. Frenar la muerte a los setenta es un problema distinto y bastante más difícil que evitarla a los dos años, y de momento nadie lo ha resuelto.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "La felicidad tiene un techo bioquímico, no económico" },
      {
        b: "texto",
        texto:
          "El segundo objetivo choca con un problema que ya conocía Epicuro: el organismo devuelve el ánimo a su punto de partida pase lo que pase. Un ascenso, una casa nueva o un premio suben la aguja unas semanas y luego el listón se recoloca, de manera que la siguiente mejora tiene que ser mayor para producir el mismo efecto.",
      },
      {
        b: "texto",
        texto:
          "De ahí saca Harari una conclusión incómoda: si el bienestar depende de sensaciones y las sensaciones dependen de la bioquímica, el camino corto no es cambiar el mundo, es cambiar la bioquímica. Y eso ya se hace a gran escala, con antidepresivos y estimulantes recetados a millones de personas que no están enfermas, sino que rinden por debajo de lo que se les pide.",
      },
      {
        b: "idea",
        texto:
          "Si la felicidad se puede recetar, deja de ser un premio por cómo vives y pasa a ser un producto que se compra.",
      },
      {
        b: "texto",
        texto:
          "El libro pone enfrente la salida budista, que le parece la única alternativa seria: dejar de perseguir sensaciones agradables en vez de perseguirlas mejor. No la defiende ni la vende; la usa para enseñar que la búsqueda moderna de la felicidad da por hecho algo que no es evidente, y es que sentirse bien sea el objetivo correcto.",
      },
      {
        b: "texto",
        texto:
          "El dato que mejor sostiene esto viene de un estudio clásico con dos grupos extremos: gente que había ganado la lotería y gente que se había quedado parapléjica en un accidente. Al cabo de un año, el ánimo declarado de unos y otros se había acercado mucho más de lo que cualquiera esperaría a sus puntos de partida. La circunstancia cambia menos de lo que suponemos; el termostato tira siempre hacia el mismo sitio.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "El humanismo es la religión de los últimos trescientos años" },
      {
        b: "texto",
        texto:
          "Cuando la autoridad dejó de estar en los dioses, hubo que ponerla en algún sitio, y la modernidad la puso en la experiencia humana. Harari llama humanismo a ese acuerdo, y su prueba es que lo repetimos sin darnos cuenta: escucha a tu corazón, el cliente siempre tiene razón, el votante decide, la belleza está en el ojo de quien mira.",
      },
      {
        b: "texto",
        texto:
          "Las tres grandes ideologías del siglo XX fueron variantes de lo mismo, no alternativas. El humanismo liberal dice que cada persona decide por sí misma; el socialista, que la decisión correcta es la del colectivo; y el evolutivo, que la humanidad tiene que seguir mejorando aunque se lleve por delante a quien se quede atrás. Ganó el primero, y por eso hoy suena a sentido común.",
      },
      {
        b: "idea",
        texto:
          "Ningún experimento ha demostrado nunca que los sentimientos de una persona sean una guía fiable. Es un artículo de fe, y funciona como tal.",
      },
      {
        b: "texto",
        texto:
          "Esta pieza es la que sostiene el edificio entero: el mercado se organiza alrededor de tus preferencias, la democracia alrededor de tu voto y la educación alrededor de tu criterio. Si la idea de que ahí dentro hay alguien decidiendo se cayera, se caerían con ella las tres cosas. Y eso es exactamente lo que está poniendo en duda la ciencia.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "La ciencia está desmontando la idea de que dentro hay alguien" },
      {
        b: "texto",
        texto:
          "El humanismo supone un yo indivisible, libre y coherente. Las últimas décadas de neurociencia describen otra cosa: procesos que compiten, decisiones que se toman antes de que uno las note, y una parte del cerebro dedicada a inventar la explicación después.",
      },
      {
        b: "texto",
        texto:
          "La demostración más famosa viene de los pacientes con los dos hemisferios desconectados por cirugía. Si se le da una orden al hemisferio derecho, la persona la obedece; y cuando se le pregunta por qué lo ha hecho, el hemisferio izquierdo —que no se ha enterado— responde con una razón perfectamente convincente y completamente falsa. No miente: se lo cree.",
      },
      {
        b: "idea",
        texto:
          "El cerebro tiene un narrador que llega tarde a todo y firma como propio lo que ya estaba decidido.",
      },
      {
        b: "texto",
        texto:
          "A eso Harari suma una distinción que cambia bastantes cosas: no es lo mismo el yo que vive los minutos que el yo que los cuenta después. En los experimentos, el segundo recuerda sobre todo el peor momento y el final, y con esa media falsa decide qué repetir. Unas vacaciones penosas con una última tarde buena se recuerdan como buenas, y se repiten.",
      },
      {
        b: "texto",
        texto:
          "Se ha medido con una crueldad elegante. A unos voluntarios se les hizo meter la mano en agua helada durante un minuto; y después, otra vez, durante minuto y medio, con el último medio minuto a una temperatura algo menos fría. La segunda versión duele más rato y sin embargo casi todos, al preguntarles cuál repetirían, eligieron esa. El que decide no es el que sufrió: es el que se acuerda.",
      },
      {
        b: "texto",
        texto:
          "La consecuencia política es directa. Si no hay un individuo indivisible, sino un manojo de procesos y un narrador que improvisa, la frase «nadie te conoce mejor que tú mismo» deja de ser una verdad evidente y pasa a ser una hipótesis. Una hipótesis que se puede comprobar.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Los algoritmos van a conocerte mejor de lo que te conoces" },
      {
        b: "texto",
        texto:
          "Un estudio de Cambridge midió esa hipótesis con lo más tonto que hay: los «me gusta» de una red social. Con diez, el modelo describía la personalidad de alguien mejor que un compañero de trabajo. Con setenta, mejor que un amigo. Con trescientos, mejor que su pareja. Ninguna intuición humana compite con eso, porque la intuición no puede contar.",
      },
      {
        b: "texto",
        texto:
          "Harari sostiene que ahí está el desplazamiento de autoridad de nuestra época: del sentimiento al dato. Ya elegimos ruta porque lo dice el teléfono, y ya hay quien decide una operación quirúrgica porque lo dice un porcentaje de riesgo genético. Cada vez que eso pasa, la decisión sigue siendo tuya en teoría y del sistema en la práctica.",
      },
      {
        b: "idea",
        texto:
          "El día en que un algoritmo acierte más que tu corazón, «escucha a tu corazón» dejará de ser un consejo y pasará a ser una superstición.",
      },
      {
        b: "texto",
        texto:
          "A la fe en los datos el libro la llama dataísmo, y la describe como una religión en formación: el universo entendido como flujos de información, y el valor de cualquier cosa —una persona incluida— medido por lo que aporta al procesamiento. No hace falta que nadie se convierta; basta con que siga siendo cómodo.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "La inteligencia se está separando de la conciencia" },
      {
        b: "texto",
        texto:
          "Aquí está, para Harari, la distinción más importante del siglo. Inteligencia es resolver problemas; conciencia es sentir. Los seres vivos hemos hecho siempre las dos cosas a la vez, y por eso las confundimos. Las máquinas han empezado a hacer la primera muy bien sin nada de la segunda, y el mercado solo paga por la primera.",
      },
      {
        b: "texto",
        texto:
          "De ahí sale el problema que el libro deja planteado. No es que las máquinas nos esclavicen: es que dejen de necesitarnos. Una clase de gente sana, formada y económicamente irrelevante, no explotada sino sobrante, es un fenómeno que la historia no ha tenido que gestionar nunca, y ninguna ideología del siglo XX está pensada para él.",
      },
      {
        b: "idea",
        texto:
          "El siglo XX luchó contra la explotación. El XXI puede tener que lidiar con algo peor de resolver: la irrelevancia.",
      },
      {
        b: "texto",
        texto:
          "Y hay un segundo efecto, más lento y más grave. Mientras las mejoras se compren, la desigualdad puede dejar de ser económica para volverse biológica: no gente con más dinero, sino gente con más capacidades. Las diferencias de renta se corrigen con leyes; las diferencias de cuerpo, no.",
      },
      {
        b: "texto",
        texto:
          "La lista de lo que ya ha caído es más larga de lo que parece: el ajedrez, el go, el reconocimiento de imágenes médicas, la traducción, la transcripción. Ninguna de esas máquinas siente nada mientras lo hace, y a ningún hospital ni a ninguna empresa le importa. Ese es el punto: el mercado paga por resolver problemas, no por que alguien viva la experiencia de resolverlos.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "Homo Deus se lee como la segunda mitad de Sapiens. Aquel explicaba cómo una especie corriente acabó mandando en el planeta; este pregunta qué va a hacer con ese poder, y responde que perseguir tres cosas —no morirse, sentirse bien y rediseñarse— mientras la autoridad se muda silenciosamente de los sentimientos a los datos.",
      },
      {
        b: "texto",
        texto:
          "Su mejor aportación no es un pronóstico, sino un par de distinciones que aclaran el debate: inteligencia no es conciencia, y ser explotado no es lo mismo que ser irrelevante. Con esas dos en la mano, muchas discusiones de hoy sobre tecnología se vuelven más fáciles de seguir.",
      },
      {
        b: "texto",
        texto:
          "Conviene leerlo sabiendo dónde flojea. Es un libro de extrapolaciones: coge tendencias reales y las estira hasta el final, y las tendencias rara vez llegan enteras. Harari lo dice él mismo —avisa de que describe posibilidades y no predicciones—, pero el tono es tan rotundo que se lee como si fueran seguras. Los críticos le señalan además que da por hecha una eficacia de la tecnología que aún no existe, y que deja poco espacio a lo que la política y la gente pueden decidir por el camino.",
      },
      {
        b: "idea",
        texto:
          "Léelo como lo que es: un mapa de preguntas incómodas y bien hechas, no un pronóstico de lo que va a pasar.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   Armas, gérmenes y acero, en ocho páginas.

   El libro tiene una ventaja rara para este formato: arranca con una pregunta
   concreta que le hizo un desconocido al autor en una playa, y las cuatrocientas
   páginas siguientes son la respuesta. La entrada cuenta esa escena, y las seis
   páginas de en medio son los seis eslabones del argumento, en orden.
   -------------------------------------------------------------------------- */

const ARMAS_GERMENES: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Todo el libro nace de una pregunta que le hicieron en una playa" },
      {
        b: "texto",
        texto:
          "En 1972, Jared Diamond estudiaba pájaros en Nueva Guinea. Paseando por la playa con un político local llamado Yali, este le hizo una pregunta directa: ¿por qué los blancos llegaron aquí con tanta carga —hachas de acero, medicinas, paraguas, refrescos— y nosotros tenemos tan poca cosa nuestra? Diamond tardó veinticinco años en contestar y lo hizo con este libro.",
      },
      {
        b: "texto",
        texto:
          "La pregunta es incómoda porque durante siglos se contestó mal. La respuesta cómoda decía que unos pueblos eran más listos, más trabajadores o estaban mejor dotados, y todavía se oye. Diamond escribe precisamente para desmontarla, y su tesis cabe en una frase: las diferencias entre pueblos no están en la gente, están en el sitio donde les tocó vivir.",
      },
      {
        b: "idea",
        texto:
          "La historia la escribieron las plantas, los animales y la forma de los continentes. Los hombres jugaron con las cartas que les tocaron.",
      },
      {
        b: "texto",
        texto:
          "Ese es el recorrido de este resumen. Primero, por qué la respuesta biológica no se sostiene. Después, los cuatro eslabones que Diamond encadena —qué se puede domesticar, hacia dónde viajan los cultivos, qué enfermedades salen de vivir con animales y qué permite un excedente de comida—, la tarde en la que todo eso se juntó en Perú, y una última página con lo que sus colegas le discuten, que no es poco.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Casi nada de lo que hay en el campo se puede domesticar" },
      {
        b: "texto",
        texto:
          "El primer eslabón es agrícola y suena menor hasta que se miran las cifras. De las decenas de miles de especies de plantas con semilla, apenas un puñado servía para vivir de ellas; y de los ciento cuarenta y ocho mamíferos grandes y herbívoros que hay en el mundo, solo catorce se han domesticado en toda la historia de la humanidad.",
      },
      {
        b: "texto",
        texto:
          "Los que no valen fallan siempre por algo concreto: la cebra muerde y no se deja acorralar, el hipopótamo mata, el guepardo no se reproduce en cautividad, el alce se asusta. Diamond lo llama el principio de Anna Karénina, tomándolo de la primera frase de la novela: para que un animal sirva tienen que salir bien todas las condiciones a la vez, y basta con que falle una para que no sirva.",
      },
      {
        b: "idea",
        texto:
          "No es que unos pueblos no domesticaran animales. Es que en su continente no había ninguno domesticable.",
      },
      {
        b: "texto",
        texto:
          "El reparto fue brutalmente desigual. Oriente Próximo tenía trigo, cebada, guisantes, ovejas, cabras, cerdos y vacas en el mismo sitio; América tenía maíz —que tardó milenios en dejar de ser una espiga diminuta— y como animal de carga la llama, que ni tira de un arado ni se monta. Nueva Guinea no tenía casi nada.",
      },
      {
        b: "texto",
        texto:
          "Con las plantas pasa lo mismo y hay un ejemplo que lo enseña entero. El almendro silvestre es venenoso: sus semillas llevan cianuro. De vez en cuando nace un árbol con una mutación que lo desactiva, y a alguien le bastó con encontrarlo y plantar sus semillas. La encina, en cambio, tiene la amargura repartida entre muchos genes y por eso la bellota nunca se domesticó, pese a que se lleva comiendo desde siempre. Un accidente genético decidió cuál de los dos alimenta hoy a media humanidad.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Eurasia es horizontal, y eso decidió media historia" },
      {
        b: "texto",
        texto:
          "El segundo eslabón es el que más sorprende, porque es pura geometría. Eurasia se extiende de este a oeste: China, la India, Oriente Próximo y España están más o menos a la misma latitud. América y África, en cambio, son continentes verticales, largos de norte a sur.",
      },
      {
        b: "texto",
        texto:
          "La diferencia importa porque a la misma latitud coinciden las estaciones, las horas de luz y las lluvias. Una semilla que funciona en Irak funciona en Grecia y en Francia sin cambiarle nada, y lo mismo pasa con los animales, con los arados y con la manera de organizar el año. Un invento agrícola se copiaba de vecino en vecino a lo largo de miles de kilómetros.",
      },
      {
        b: "idea",
        texto:
          "En Eurasia, un cultivo podía viajar seis mil kilómetros sin cambiar de clima. En América tenía que cruzar el trópico, y casi nada lo cruzaba.",
      },
      {
        b: "texto",
        texto:
          "Por eso el maíz mexicano tardó siglos en llegar hasta lo que hoy es Estados Unidos, y la rueda, que en Mesoamérica se conocía —hay juguetes con ruedas—, no se usó nunca para transportar: no había animal que tirase de un carro, y el terreno cambiaba demasiado. Cada zona tuvo que inventarlo casi todo por su cuenta.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Los gérmenes fueron el arma más eficaz, y no la fabricó nadie" },
      {
        b: "texto",
        texto:
          "El tercer eslabón sale del segundo. Vivir pegado a vacas, cerdos y gallinas durante milenios tiene una consecuencia sanitaria: casi todas las grandes enfermedades infecciosas humanas empezaron siendo enfermedades de animales domésticos que dieron el salto. La viruela, el sarampión, la gripe y la tuberculosis vienen de ahí.",
      },
      {
        b: "texto",
        texto:
          "Cada epidemia mataba a mucha gente y dejaba viva a la que resistía, y esa resistencia se heredaba. Al cabo de cien generaciones, los pueblos de Eurasia cargaban con un arsenal biológico que ya no les mataba a ellos. Los pueblos de América, que apenas tenían animales domésticos, no habían pasado por ese filtro.",
      },
      {
        b: "idea",
        texto:
          "La conquista de América la hicieron los microbios. Los soldados llegaron después, a ocupar lo que ya estaba vacío.",
      },
      {
        b: "texto",
        texto:
          "Las estimaciones más citadas hablan de que hasta el noventa y cinco por ciento de la población americana murió en los ciento cincuenta años siguientes al contacto, y la mayoría sin haber visto nunca a un europeo: las enfermedades corrían más deprisa que las expediciones. Diamond insiste en que esto no fue un plan de nadie, y que es justo lo que lo hace tan difícil de asimilar.",
      },
      {
        b: "texto",
        texto:
          "La prueba de que el argumento no es racista está en que funciona igual de bien al revés. En África, la malaria y la fiebre amarilla mantuvieron a los europeos pegados a la costa durante casi cuatro siglos: podían ganar cualquier batalla y no podían quedarse. Solo entraron tierra adentro cuando tuvieron quinina. Allí los gérmenes locales jugaron a favor de los locales.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "El excedente de comida es lo que fabrica reyes, escribas y soldados" },
      {
        b: "texto",
        texto:
          "El cuarto eslabón explica por qué de la agricultura salió todo lo demás. Un grupo de cazadores recolectores dedica casi todas sus manos a conseguir comida. Una sociedad agrícola produce de más, y ese sobrante permite mantener a gente que no cultiva: alfareros, herreros, sacerdotes, funcionarios, soldados profesionales.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "La escritura", texto: "nace para llevar la cuenta de graneros e impuestos, no para hacer literatura." },
          { fuerte: "El Estado", texto: "aparece cuando hay algo acumulado que administrar y que defender." },
          { fuerte: "El ejército", texto: "puede existir porque a esos hombres los alimenta el trabajo de otros." },
          { fuerte: "La tecnología", texto: "avanza cuando alguien puede pasarse la vida trasteando con metales." },
        ],
      },
      {
        b: "texto",
        texto:
          "De ahí sale la ventaja acumulada. Quien empezó a cultivar antes tuvo antes ciudades, antes escritura y antes metalurgia, y cada paso hacía más probable el siguiente. Diamond lo llama una reacción en cadena, y sostiene que el orden de salida en esa carrera lo decidió el mapa, no el mérito.",
      },
      {
        b: "texto",
        texto:
          "La escritura enseña bien lo raro que es todo esto. En toda la historia se inventó de cero dos o tres veces —en Mesopotamia hacia el 3000 antes de Cristo y en Mesoamérica mucho después—, y las demás escrituras del mundo son copias o adaptaciones de aquellas. Las primeras tablillas sumerias no cuentan mitos ni hazañas: son recibos de cebada y listas de trabajadores. La literatura llegó mil años más tarde.",
      },
      {
        b: "idea",
        texto:
          "Ninguna de las ventajas europeas fue un invento europeo. Todas fueron el resultado de haber empezado antes.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Cajamarca: ciento sesenta y ocho hombres contra ochenta mil" },
      {
        b: "texto",
        texto:
          "Toda la tesis del libro se puede ver comprimida en una tarde. El 16 de noviembre de 1532, en la plaza de Cajamarca, Francisco Pizarro capturó al emperador inca Atahualpa. Pizarro tenía ciento sesenta y ocho hombres, muy lejos de sus barcos y sin refuerzos posibles. Atahualpa estaba rodeado por un ejército de decenas de miles y en el centro de su propio imperio.",
      },
      {
        b: "texto",
        texto:
          "Ganó Pizarro, y no por valentía. Ganó porque llevaba caballos, que los incas no habían visto nunca; espadas y armaduras de acero contra armas de bronce y madera; y porque el imperio que atacaba llevaba años partido por una guerra civil y por una epidemia de viruela que había matado al emperador anterior sin que ningún español pisara la zona.",
      },
      {
        b: "idea",
        texto:
          "Cajamarca no fue un choque entre dos hombres. Fue el choque entre dos continentes, con trece mil años de ventaja acumulada en uno de los lados.",
      },
      {
        b: "texto",
        texto:
          "Hay un detalle que Diamond subraya y que sostiene el argumento: Pizarro sabía quién era Atahualpa porque lo había leído. La escritura le había traído las crónicas de Cortés en México, y con ellas una táctica probada. Atahualpa no tenía forma de saber nada de él.",
      },
      {
        b: "texto",
        texto:
          "De lo que pasó aquella tarde quedaron varios relatos escritos por hombres que estaban en la plaza, y por eso se puede reconstruir hora a hora; del lado inca no quedó ninguno, porque no había con qué escribirlo. La asimetría se nota hasta en cómo conocemos el episodio. Después vino el rescate: Atahualpa llenó de oro una habitación entera para comprar su libertad, se lo cobraron y lo ejecutaron igual.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Europa adelantó a China por estar peor comunicada" },
      {
        b: "texto",
        texto:
          "Queda una pregunta que la geografía tiene que responder también: si Eurasia iba en cabeza, ¿por qué salieron los barcos de Europa y no de China, que en el siglo XV era más rica, más poblada y técnicamente superior? China tenía imprenta, pólvora, brújula y flotas enormes siglos antes.",
      },
      {
        b: "texto",
        texto:
          "La respuesta de Diamond es su argumento más discutido. China es geográficamente compacta —dos grandes ríos, una costa lisa, pocas barreras internas— y eso favoreció un imperio único desde muy pronto. Europa está troceada por penínsulas, islas y cordilleras, y nunca consiguió unirse. Cuando un emperador chino decidió que las grandes expediciones marítimas se acababan, se acabaron en todo el país. Cuando un rey europeo le dijo que no a Colón, Colón fue a llamar a la puerta de al lado.",
      },
      {
        b: "idea",
        texto:
          "Estar dividido salió caro en guerras y barato en innovación: una idea rechazada siempre tenía otro sitio adonde ir.",
      },
      {
        b: "texto",
        texto:
          "Diamond lo llama fragmentación óptima: ni tan unido que una sola decisión lo pare todo, ni tan roto que nada llegue a cuajar. Es la parte del libro donde su método se estira más, y él mismo la presenta con menos seguridad que las anteriores.",
      },
      {
        b: "texto",
        texto:
          "El contraste tiene fecha. Entre 1405 y 1433, China envió siete expediciones al Índico con flotas de cientos de barcos, algunos varias veces mayores que los de Colón. Un cambio de política en la corte las canceló, se dejaron pudrir los astilleros y se prohibió construir barcos de altura; una decisión, y se acabó para todos. Colón, mientras tanto, pasó años pidiendo dinero de puerta en puerta y se lo negaron en Portugal y varias veces en Castilla antes de que le dijeran que sí.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "Armas, gérmenes y acero responde a la pregunta de Yali sin recurrir ni una vez a la inteligencia o al carácter de los pueblos. La cadena es esta: qué plantas y animales había en cada sitio, hacia dónde podían viajar, qué enfermedades trajo vivir con ellos y qué permitió el excedente que produjeron. Todo lo demás —imperios, barcos, acero, escritura— viene detrás.",
      },
      {
        b: "texto",
        texto:
          "Su mérito es haber convertido una pregunta que se contestaba con prejuicios en una que se contesta con datos, y haberlo hecho de manera que se entiende sin ser historiador. Por eso lleva desde 1997 recomendándose de unos a otros.",
      },
      {
        b: "texto",
        texto:
          "Y conviene saber por dónde lo atacan, porque los ataques son serios. Se le reprocha determinismo geográfico: si el mapa lo explica casi todo, la política, las instituciones y las decisiones de la gente quedan como adorno, y hay economistas e historiadores que sostienen justo lo contrario, que lo decisivo son las instituciones que cada sociedad construye. Se le reprocha también que la explicación funciona muy bien hasta 1500 y bastante peor para lo que vino después, y que algunos de sus datos —el porcentaje de muertos por epidemias, el papel de África— están más discutidos de lo que el libro deja ver.",
      },
      {
        b: "idea",
        texto:
          "Léelo como lo que es: la mejor respuesta disponible a por qué el mundo empezó tan desigual, no la respuesta completa a por qué sigue siéndolo.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   Diario de Ana Frank, en ocho páginas.

   El primer libro de esta biblioteca que no es un ensayo con tesis, y hay que
   escribirlo con cuidado para que no se convierta en un folleto. Dos decisiones:

   NO SE CITA EL DIARIO. Es un texto con derechos y aquí se cuenta lo que hay
   dentro, no se reproduce. Ninguna página lleva una frase suya entrecomillada.

   LOS TITULARES SIGUEN AFIRMANDO. Un diario no tiene tesis, pero sí tiene
   hechos discutibles y poco sabidos —que Ana lo estaba reescribiendo para
   publicarlo, que el libro que se leyó durante décadas estaba recortado por su
   padre—, y esos son los que sostienen las páginas.
   -------------------------------------------------------------------------- */

const ANA_FRANK: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "El libro más leído sobre el Holocausto lo escribió una niña que no sabía nada de él" },
      {
        b: "texto",
        texto:
          "El 12 de junio de 1942, Ana Frank cumplió trece años y le regalaron un cuaderno de tapas de cuadros rojos y blancos. Menos de un mes después, el 6 de julio, su familia desapareció de su casa de Ámsterdam y se metió en unas habitaciones vacías detrás de la oficina donde trabajaba su padre. Estuvieron allí dos años y un mes.",
      },
      {
        b: "texto",
        texto:
          "Lo que se escribió en ese escondite no es una crónica de la guerra ni del exterminio: Ana no vio ni un campo de concentración mientras escribía, y sabía de la persecución lo que se podía saber por la radio y por los rumores. Es el cuaderno de una adolescente encerrada con siete personas más, con todo lo que eso trae: peleas por la comida, un primer enamoramiento, rabia con su madre y unas ganas enormes de ser escritora.",
      },
      {
        b: "idea",
        texto:
          "Precisamente por eso funciona: no cuenta seis millones de muertos, cuenta a una persona a la que ibas conociendo.",
      },
      {
        b: "texto",
        texto:
          "Este resumen recorre quiénes estaban allí y cómo se vivía; el descubrimiento que cambia la manera de leerlo —que Ana estaba reescribiendo su propio diario para publicarlo—; qué pasó el día de la detención y después; cómo llegó el libro a las librerías y qué le quitaron por el camino; y qué se le ha criticado a la manera en que el mundo lo ha usado.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Ocho personas, cincuenta metros cuadrados y ocho horas diarias de silencio" },
      {
        b: "texto",
        texto:
          "El escondite estaba en el número 263 de la calle Prinsengracht, en la parte trasera del edificio donde Otto Frank tenía su empresa, y se entraba por una puerta tapada con una estantería. Allí vivieron los cuatro Frank —Otto, Edith, Margot y Ana—, el matrimonio Van Pels con su hijo Peter, y un dentista, Fritz Pfeffer, que llegó meses después.",
      },
      {
        b: "texto",
        texto:
          "La regla que lo gobernaba todo era el silencio. Debajo trabajaba gente que no sabía nada, así que durante la jornada laboral no se podía andar, ni tirar de la cadena, ni toser fuerte, ni abrir un grifo. Se cocinaba y se hablaba por la tarde. Las ventanas estaban tapadas de día y de noche, y en dos años Ana no salió a la calle ni una vez.",
      },
      {
        b: "idea",
        texto:
          "Cuatro empleados de la oficina sabían que estaban allí y les llevaron comida durante dos años. Delatarlos era lo seguro; ayudarlos, pena de muerte.",
      },
      {
        b: "texto",
        texto:
          "Esos cuatro fueron Miep Gies, Bep Voskuijl, Johannes Kleiman y Victor Kugler, y sin ellos no habría ni escondite ni diario. Consiguieron cartillas de racionamiento en el mercado negro, subieron libros y periódicos, y aguantaron el miedo de que un vecino sumara dos y dos. El día que faltó comida, faltó para los ocho.",
      },
      {
        b: "texto",
        texto:
          "La vida de dentro tenía sus rutinas y sus obsesiones. En la pared había un mapa con chinchetas para seguir el avance de los aliados, y las noticias de la radio inglesa se comentaban como quien mira un partido. Se comía lo que había: temporadas enteras de alubias, coles que olían a todo el piso, patatas malas. Hubo sarna, hubo ratas y hubo un par de robos en la oficina de abajo que les hicieron pasar noches enteras sin respirar.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Ana no estaba escribiendo un diario íntimo: lo estaba reescribiendo para publicarlo" },
      {
        b: "texto",
        texto:
          "El 28 de marzo de 1944, la radio del gobierno holandés en el exilio lanzó un llamamiento desde Londres: que la gente guardara sus diarios y sus cartas, porque después de la guerra harían falta para contar lo que había pasado. Ana lo oyó en el escondite.",
      },
      {
        b: "texto",
        texto:
          "A partir de esa noche empezó a copiar su propio diario en hojas sueltas, corrigiéndolo: cambiaba los nombres de las personas, quitaba lo que le parecía flojo, ordenaba capítulos y afinaba frases. Incluso tenía título pensado para el libro. Cuando la detuvieron, llevaba unos meses en esa tarea y la había dejado a medias.",
      },
      {
        b: "idea",
        texto:
          "Existen dos diarios: el que escribió sin pensar en nadie y el que estaba puliendo para que lo leyera todo el mundo. El libro que conocemos es una mezcla de los dos.",
      },
      {
        b: "texto",
        texto:
          "Saber esto cambia cómo se lee. Explica por qué hay páginas tan trabajadas —arranques de escena, diálogos, ironías— en el cuaderno de una chica de quince años: muchas de esas están reescritas por una autora que ya se veía publicando. Y explica también por qué las ediciones modernas señalan qué versión es cada texto.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Es un libro de adolescencia tanto como de guerra" },
      {
        b: "texto",
        texto:
          "Quien lo abre esperando el horror se encuentra otra cosa. La mayor parte del diario habla de la convivencia forzada: el dentista que no soporta compartir escritorio con ella, la señora Van Pels y su marido discutiendo por dinero, el reparto de la mantequilla, quién usa cada mesa y a qué hora.",
      },
      {
        b: "texto",
        texto:
          "El conflicto que más ocupa es con su madre, al que Ana dedica páginas duras y que ella misma va corrigiendo con el tiempo: hay un momento, ya en 1944, en que relee lo que escribió meses antes y se avergüenza. Ese ajuste de cuentas consigo misma es lo que hace que el libro se sostenga como literatura y no solo como documento.",
      },
      {
        b: "idea",
        texto:
          "Lo insoportable del escondite no fue el miedo, que se hace rutina, sino no poder estar sola ni un minuto.",
      },
      {
        b: "texto",
        texto:
          "Y está Peter, el chico de la otra familia, con el que empieza algo entre el enamoramiento y la necesidad de que alguien la escuche. Ana lo cuenta con una lucidez incómoda: analiza lo que siente mientras lo siente, y llega a dudar de si lo quiere a él o quiere no estar sola. Tenía quince años.",
      },
      {
        b: "texto",
        texto:
          "Escribir era lo suyo y lo tenía decidido. Le puso nombre a su cuaderno y le escribía como a una amiga, en cartas; además del diario redactó cuentos y escenas sueltas, y hablaba con naturalidad de dedicarse a esto después de la guerra. No era la fantasía de una niña aburrida: es lo que explica que el texto tenga estructura, personajes y remates, cosa que un diario normal no tiene.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "La detención duró unos minutos y sigue sin saberse quién los delató" },
      {
        b: "texto",
        texto:
          "La mañana del 4 de agosto de 1944, un coche paró delante del edificio. Un oficial alemán y varios policías holandeses subieron directos a la estantería que tapaba la puerta: sabían lo que buscaban. Los ocho fueron detenidos, y con ellos dos de los ayudantes.",
      },
      {
        b: "texto",
        texto:
          "Quién dio el aviso no se ha demostrado nunca. Ha habido dos investigaciones policiales y varias privadas, y todas han terminado en sospechosos posibles y ninguna prueba. Hay incluso quien defiende que no hubo delación, sino una inspección por trabajo ilegal que acabó encontrándolos por casualidad.",
      },
      {
        b: "idea",
        texto:
          "El diario se salvó porque los policías vaciaron el maletín donde estaba para llevarse el dinero y las joyas, y dejaron los papeles tirados por el suelo.",
      },
      {
        b: "texto",
        texto:
          "Miep Gies los recogió aquella misma tarde y los guardó sin leerlos. Los ocho fueron llevados al campo de tránsito de Westerbork y de allí, en el último convoy que salió de Holanda, a Auschwitz. Ana y su hermana Margot acabaron en Bergen-Belsen, y murieron allí de tifus a principios de 1945, semanas antes de que los británicos liberaran el campo.",
      },
      {
        b: "texto",
        texto:
          "El calendario de esos siete meses es el que hay que tener delante para entender el final. Del escondite a Westerbork en agosto; el 3 de septiembre de 1944, en el último transporte que salió de allí hacia Auschwitz; la separación de hombres y mujeres al bajar del tren; su madre muerta en Auschwitz en enero; y las dos hermanas trasladadas a Bergen-Belsen semanas antes, a un campo sin comida y con tifus. Murieron con pocos días de diferencia.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "El libro existe porque su padre volvió solo y decidió publicarlo" },
      {
        b: "texto",
        texto:
          "De los ocho volvió uno: Otto Frank, liberado en Auschwitz por el ejército soviético. Tardó meses en saber que sus hijas habían muerto, y hasta entonces las buscó. Cuando lo confirmó, Miep Gies le entregó los papeles que llevaba un año guardando en un cajón sin abrir.",
      },
      {
        b: "texto",
        texto:
          "Otto los leyó y decidió hacer lo que su hija quería: publicarlos. Se editaron en holandés en 1947, con una tirada modesta, y no fue un éxito inmediato; llegó después, con las traducciones al inglés y al alemán y con una obra de teatro que dio la vuelta al mundo.",
      },
      {
        b: "idea",
        texto:
          "El diario que leyó el mundo durante cuarenta años estaba recortado por un padre que acababa de perder a su familia.",
      },
      {
        b: "texto",
        texto:
          "Otto quitó pasajes: los más duros sobre su mujer, los que hablaban del cuerpo y del despertar sexual de Ana, y algún comentario sobre los demás escondidos. No fue censura política, fue pudor y respeto por los vivos. En 1986 se publicó una edición crítica con todas las versiones, y en los años noventa una edición ampliada que devolvió casi todo lo cortado. La Ana Frank que se lee hoy es bastante más incómoda y bastante más interesante que la de la primera edición.",
      },
      {
        b: "texto",
        texto:
          "Esa edición crítica nació además de una necesidad desagradable. Como había gente sosteniendo que el diario era falso, el instituto holandés de documentación de guerra sometió los cuadernos a un peritaje completo: caligrafía comparada, tinta, papel, pegamento, todo. El informe, de más de setecientas páginas, confirmó que lo había escrito ella. Se publicó en 1986 y desde entonces el libro viene con su propia prueba pericial dentro.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Convertirla en símbolo de esperanza es la manera más suave de no entenderla" },
      {
        b: "texto",
        texto:
          "Del diario se ha extraído durante décadas una sola frase, la que dice que sigue creyendo en la bondad de la gente, y se ha convertido en el resumen del libro. Está escrita tres semanas antes de la detención, y en el mismo pasaje Ana explica que le cuesta sostener esa idea y que el mundo se le está volviendo un desierto.",
      },
      {
        b: "texto",
        texto:
          "Varios escritores han señalado el problema, y con dureza: un libro sobre una niña asesinada por el Estado alemán acabó vendiéndose como un canto al optimismo, y las adaptaciones teatrales y cinematográficas de los años cincuenta rebajaron lo judío y lo político hasta dejar una historia universal de adolescencia. Es más fácil de digerir y dice bastante menos.",
      },
      {
        b: "idea",
        texto:
          "El diario no termina bien. Termina el 1 de agosto de 1944, y lo que pasó después no lo escribió nadie porque no volvió nadie a escribirlo.",
      },
      {
        b: "texto",
        texto:
          "Leerlo entero, sin los recortes y sin la frase de postal, deja otra cosa: una chica con un talento evidente que se estaba preparando para una vida que no llegó, y un final que el propio libro no puede contar. Esa parte hay que ponerla el lector.",
      },
      {
        b: "texto",
        texto:
          "El tamaño de lo que vino después ayuda a medir el problema. El diario se ha traducido a unas setenta lenguas y ha vendido decenas de millones de ejemplares; el edificio de Prinsengracht, que estuvo a punto de ser derribado, es hoy un museo por el que pasa más de un millón de personas al año, y la escalera detrás de la estantería sigue donde estaba. Nada de eso lo pidió ella: lo decidió un padre que volvió solo.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El Diario de Ana Frank es dos cosas a la vez. Es el testimonio de dos años de encierro escrito desde dentro, sin saber cómo acaba, que es exactamente lo que ningún libro de historia puede dar. Y es el cuaderno de una escritora en formación que a los quince años ya corregía sus propias páginas pensando en un lector.",
      },
      {
        b: "texto",
        texto:
          "Lo que no es, conviene decirlo: no es un libro sobre el Holocausto. Ana murió sin escribir una línea sobre los campos, y quien busque eso tiene que ir a Primo Levi o a Elie Wiesel. Este cuenta lo de antes, que es el miedo largo y la vida cotidiana metida en cincuenta metros cuadrados.",
      },
      {
        b: "texto",
        texto:
          "Y hay que leerlo sabiendo cómo llegó hasta nosotros: pasado por la mano de su padre, ampliado décadas después, y envuelto durante años en una lectura consoladora que el texto no sostiene. Con esas tres cosas presentes, el libro gana. Sin ellas, se queda en una frase bonita en una pared.",
      },
      {
        b: "idea",
        texto:
          "Su fuerza no es contar lo peor que pasó, sino que llevas doscientas páginas conociendo a alguien cuando lo peor pasa.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   El club de las 5 de la mañana, en ocho páginas.

   El primero de desarrollo personal escrito con el molde nuevo, y el género
   trae un peligro propio: el original es una fábula de cuatrocientas páginas
   con un multimillonario, un emprendedor y una artista, y la mitad del libro
   es la novela y no el método. Aquí va el método, con sus números, y la
   conclusión dice lo que el libro no demuestra.
   -------------------------------------------------------------------------- */

const CLUB_5_MANANA: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "La hora en que te levantas decide el resto del día" },
      {
        b: "texto",
        texto:
          "Robin Sharma lleva más de veinte años trabajando con directivos y deportistas, y sostiene que casi todos los que rinden mucho comparten un detalle poco glamuroso: se levantan antes que nadie. No porque necesiten dormir menos, sino porque han descubierto que la primera hora es la única del día que no le pertenece a nadie más.",
      },
      {
        b: "texto",
        texto:
          "El argumento es sencillo de comprobar. A las cinco de la mañana no hay correos, ni reuniones, ni notificaciones, ni nadie que te pida algo. A las nueve ya has cedido el control de tu atención a otros, y lo que queda del día es reaccionar. La diferencia entre las dos cosas, sostenida durante años, es enorme.",
      },
      {
        b: "idea",
        texto:
          "Nadie te va a regalar tiempo para lo tuyo. Solo hay un rato del día que puedes tomar sin pedir permiso, y está antes de que empiece el mundo.",
      },
      {
        b: "texto",
        texto:
          "Este resumen recorre el método completo: cómo se reparte esa hora en tres bloques de veinte minutos, qué hay que hacer la noche anterior para que sea sostenible, por qué el descanso es parte del rendimiento y no su contrario, cuánto tarda de verdad en instalarse un hábito, y las dos reglas de concentración que el libro propone para el resto de la jornada. La última página dice qué parte de todo esto está demostrada y qué parte no.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "La hora se parte en tres bloques de veinte minutos" },
      {
        b: "texto",
        texto:
          "El corazón del libro es una fórmula que se puede escribir en una servilleta. La primera hora del día, de cinco a seis, se divide en tres partes iguales, y cada una tiene un trabajo distinto.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Veinte de moverse", texto: "ejercicio hasta sudar. Es lo que apaga el cortisol de la noche y despeja la cabeza." },
          { fuerte: "Veinte de pensar", texto: "escribir, planear el día, repasar objetivos. En silencio y sin pantalla." },
          { fuerte: "Veinte de aprender", texto: "leer, estudiar, escuchar algo que enseñe. Es la parte que compone con los años." },
        ],
      },
      {
        b: "texto",
        texto:
          "El orden importa más de lo que parece. Empezar por el ejercicio no es capricho: mientras el cuerpo se activa, la mente pasa de dormida a disponible, y los otros cuarenta minutos rinden el doble. Hacerlo al revés —abrir el ordenador y luego intentar salir a correr— es lo que casi nunca funciona.",
      },
      {
        b: "texto",
        texto:
          "Cada bloque admite muchas formas y conviene concretarlo antes de acostarse, porque a las cinco de la mañana nadie improvisa bien. Moverse puede ser saltar a la comba en el salón; pensar puede ser escribir tres líneas sobre qué haría hoy que de verdad importe; aprender puede ser diez páginas de un libro difícil. Lo que no vale es que ninguno de los tres dependa de una pantalla encendida.",
      },
      {
        b: "idea",
        texto:
          "Veinte minutos son poco para cualquier cosa. Veinte minutos todos los días durante un año son ciento veinte horas.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Madrugar no se decide por la mañana, se decide la noche anterior" },
      {
        b: "texto",
        texto:
          "El error que hunde a casi todo el que lo intenta es tratar las cinco de la mañana como un acto de voluntad. No lo es: es una consecuencia. Levantarse a esa hora sin haberse acostado a tiempo es quitarse horas de sueño, y eso no se sostiene ni dos semanas.",
      },
      {
        b: "texto",
        texto:
          "Sharma dedica buena parte del libro a la noche, y sus recomendaciones son las que cualquier especialista del sueño suscribiría: cenar pronto, apagar las pantallas un buen rato antes, dejar el teléfono fuera del dormitorio y tener una rutina fija de cierre. La idea es que el cuerpo aprenda a qué hora se acaba el día.",
      },
      {
        b: "idea",
        texto:
          "Si te levantas a las cinco y te acuestas a la una, no estás siguiendo el método: te estás quitando sueño, que es lo contrario de lo que el libro propone.",
      },
      {
        b: "texto",
        texto:
          "También avisa de que los primeros días son malos, y conviene tomárselo en serio para no confundir el bache normal con el fracaso. La sensación de agotamiento de la primera semana no significa que uno no esté hecho para esto; significa que el reloj interno tarda en moverse.",
      },
      {
        b: "texto",
        texto:
          "El ajuste tampoco tiene por qué ser de golpe. Adelantar el despertador quince minutos por semana mueve el reloj sin castigo, y llegar a las cinco en un mes largo funciona mucho mejor que ponerlo un lunes y aguantar tres días a base de café. Lo que decide no es a qué hora suena el primer día, sino cuántas semanas seguidas suena a la misma hora.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "El rendimiento alto se alterna con el descanso, no se sostiene" },
      {
        b: "texto",
        texto:
          "Una de las mejores partes del libro es también la menos citada. Sharma insiste en que la excelencia funciona por ciclos: periodos de esfuerzo grande seguidos de periodos de recuperación deliberada. No es una concesión ni una recompensa; es la mitad del método.",
      },
      {
        b: "texto",
        texto:
          "La comparación que usa es la del deportista de élite, que entrena duro precisamente porque descansa en serio, y que si entrenara igual de duro todos los días sin parar acabaría lesionado en un mes. Con el trabajo intelectual pasa lo mismo, solo que la lesión no se ve: se llama agotamiento y se confunde con falta de ganas.",
      },
      {
        b: "idea",
        texto:
          "El descanso no es lo que haces cuando ya no puedes más. Es lo que hace posible volver a poder.",
      },
      {
        b: "texto",
        texto:
          "De ahí salen sus consejos más prácticos: parar de verdad los fines de semana, meter periodos sin pantallas, dormir lo que hay que dormir y no confundir estar ocupado con estar produciendo. Es el contrapeso que hace que la disciplina de las cinco de la mañana no acabe siendo una manera elegante de quemarse.",
      },
      {
        b: "texto",
        texto:
          "El libro insiste además en una forma concreta de recuperación que casi nadie programa: el rato sin estímulo. Un paseo largo sin auriculares, una tarde en el campo, una hora sin nada que consultar. No es tiempo perdido, sostiene, sino lo único que devuelve la capacidad de tener ideas propias, que es exactamente lo que el trabajo interesante requiere.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Un hábito tarda unos dos meses en instalarse, y el primero es el peor" },
      {
        b: "texto",
        texto:
          "Contra la idea popular de que hacen falta veintiún días, Sharma trabaja con una cifra bastante mayor: alrededor de sesenta y seis, que es la que arroja la investigación más citada sobre formación de hábitos. Y los divide en tres tramos que explican por qué se abandona siempre en el mismo sitio.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Destrucción", texto: "las tres primeras semanas. Cuesta, molesta y todo tu día se resiste." },
          { fuerte: "Instalación", texto: "las tres siguientes. Deja de doler pero todavía hay que decidirlo cada día." },
          { fuerte: "Integración", texto: "las últimas. Ya no se decide: se hace, como lavarse los dientes." },
        ],
      },
      {
        b: "idea",
        texto:
          "Casi todo el mundo abandona en la fase en la que el esfuerzo es máximo y el resultado todavía cero. Saber que esa fase existe y cuánto dura es media batalla.",
      },
      {
        b: "texto",
        texto:
          "El consejo práctico que saca de ahí es no cambiar dos cosas a la vez. Una costumbre nueva ya consume toda la fuerza disponible; dos garantizan que no cuaje ninguna. Se instala una, se espera a que deje de costar, y entonces se añade la siguiente.",
      },
      {
        b: "texto",
        texto:
          "Y avisa de algo que a casi todo el mundo le pasa alrededor de la tercera semana: el día que se falla. Fallar una vez no rompe nada; lo que rompe es el razonamiento que viene detrás, el de que ya está estropeado y da igual seguir. La regla que propone es simple y sirve para cualquier costumbre: se puede fallar un día, nunca dos seguidos.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Noventa días, noventa minutos, un solo proyecto" },
      {
        b: "texto",
        texto:
          "Para el resto de la jornada el libro propone dos reglas que se recuerdan solas. La primera es la que llama noventa, noventa, uno: durante noventa días, dedicar los primeros noventa minutos de trabajo a un único proyecto, el que de verdad cambia algo, antes de tocar el correo o cualquier otra cosa.",
      },
      {
        b: "texto",
        texto:
          "La segunda es de ritmo: sesenta minutos de concentración seguidos de diez de descanso real —levantarse, moverse, no cambiar una pantalla por otra—. La lógica es la misma que la de los ciclos: la atención se agota como un músculo y se recupera parando, no forzando.",
      },
      {
        b: "idea",
        texto:
          "Empezar el día contestando correos es dejar que la lista de otro sustituya a la tuya. A las once ya has trabajado tres horas y no has avanzado en nada tuyo.",
      },
      {
        b: "texto",
        texto:
          "Las dos reglas apuntan al mismo sitio: proteger la primera parte del día, que es cuando la cabeza rinde, y gastarla en lo importante en vez de en lo urgente. El resto del método —los madrugones incluidos— existe para que esas horas lleguen limpias.",
      },
      {
        b: "texto",
        texto:
          "Y hay una parte del método que suele quedarse fuera de los resúmenes y que explica por qué el sistema no va solo de horarios. Sharma sostiene que hay cuatro terrenos que hay que trabajar a la vez y que se sostienen unos a otros: la cabeza, con lo que uno se cuenta; las emociones, que son las que sabotean cuando están sin atender; el cuerpo, que decide cuánta energía hay disponible; y el sentido, la razón por la que uno se levanta. Descuidar uno hunde a los otros tres, y por eso los tres bloques de la mañana tocan uno cada uno.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "El método no va de horarios: va de recuperar el control de tu atención" },
      {
        b: "texto",
        texto:
          "Leído entero, el libro no defiende una hora concreta del reloj, aunque le dé nombre al título. Defiende una idea más general y bastante más difícil de discutir: que la calidad de una vida se parece mucho a la calidad de aquello a lo que se le presta atención, y que hoy la atención la reclaman veinte aparatos y treinta aplicaciones diseñadas para quedársela.",
      },
      {
        b: "texto",
        texto:
          "Por eso insiste tanto en las condiciones y no solo en la fuerza de voluntad: el teléfono fuera del dormitorio, el correo cerrado durante los primeros noventa minutos, las notificaciones apagadas. Quien depende de resistirse cien veces al día pierde; quien quita la tentación de en medio no tiene que resistirse.",
      },
      {
        b: "idea",
        texto:
          "La disciplina no es aguantar la tentación. Es organizar el día para no tener que aguantarla.",
      },
      {
        b: "texto",
        texto:
          "Y hay un efecto secundario que el libro subraya y que se nota antes que ningún otro: la sensación de haber hecho algo tuyo antes de que empiece la jornada. Aunque el resto del día se tuerza, eso ya no te lo quita nadie, y esa sensación es lo que hace que el hábito se sostenga cuando la motivación se acaba.",
      },
      {
        b: "texto",
        texto:
          "Sharma lo resume con una comparación que se le queda a cualquiera: la atención es la moneda con la que se paga una vida, y casi todos la regalamos a quien primero la pide. Lo que propone no es levantarse temprano por levantarse temprano, sino decidir a conciencia en qué se gasta la primera hora, porque esa decisión tomada mil veces es, literalmente, en qué se ha ido la vida.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El club de las 5 de la mañana propone algo simple: apropiarse de la primera hora del día, repartirla en tres bloques de veinte minutos —moverse, pensar, aprender—, protegerla acostándose pronto y alternar el esfuerzo con descanso de verdad. Todo lo demás son variaciones de eso.",
      },
      {
        b: "texto",
        texto:
          "Su mérito es que el método cabe en una tarjeta y se puede empezar mañana. Sus mejores páginas, curiosamente, no son las del madrugón: son las que defienden que el descanso es parte del rendimiento y que los hábitos tardan dos meses, que es justo lo que evita abandonarlos en la tercera semana.",
      },
      {
        b: "texto",
        texto:
          "Y conviene saber lo que no sostiene. No hay ninguna investigación que demuestre que las cinco sea mejor hora que las seis o que las siete: lo que la cronobiología sí ha establecido es que existen tipos de reloj distintos, y que a una persona nocturna obligarse a madrugar puede costarle rendimiento en vez de ganarlo. Además, el consejo da por hecho que uno manda en su horario, cosa que no vale para quien hace turnos o cuida de alguien por la noche. Y el formato de fábula estira cuatrocientas páginas lo que se explica en veinte.",
      },
      {
        b: "idea",
        texto:
          "Quédate con la fórmula y con la idea de fondo —protege tu primera hora, sea a la que sea— y déjate la mitología del amanecer.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   El trabajo profundo, en ocho páginas.

   Cal Newport es profesor de informática y escribe contra la corriente de su
   propio gremio: sostiene que la capacidad de concentrarse sin interrupciones
   es hoy una rareza económica. El resumen se ordena como el libro —primero
   por qué importa, después cómo se consigue—, y la conclusión dice a quién le
   sirve el consejo y a quién no, que es su punto flaco.
   -------------------------------------------------------------------------- */

const TRABAJO_PROFUNDO: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Concentrarse se ha vuelto raro justo cuando se ha vuelto valioso" },
      {
        b: "texto",
        texto:
          "Newport separa el trabajo en dos clases. El profundo es el que exige toda la cabeza durante un rato largo y produce algo difícil de copiar: escribir, programar, diseñar, entender un asunto complicado. El superficial es el resto —correos, reuniones, mensajes, trámites—, que hay que hacer pero que casi cualquiera puede hacer.",
      },
      {
        b: "texto",
        texto:
          "Su tesis es que la economía actual premia exactamente dos habilidades: aprender cosas difíciles deprisa y producir a un nivel alto. Las dos dependen de lo mismo, de concentrarse; y la vida laboral moderna, con su chat siempre abierto y su bandeja infinita, está montada de manera que concentrarse sea casi imposible. La consecuencia es una paradoja que se ve en cualquier oficina: nunca se ha trabajado tantas horas seguidas ni se ha terminado tan poca cosa difícil.",
      },
      {
        b: "idea",
        texto:
          "Cuanto más difícil se vuelve concentrarse, más vale quien todavía puede. La rareza es la que pone el precio.",
      },
      {
        b: "texto",
        texto:
          "Este resumen recorre por qué la atención no vuelve entera después de una interrupción, las cuatro maneras de meter concentración en una vida normal, por qué hace falta un ritual y no fuerza de voluntad, qué papel juega aburrirse, cómo elegir las herramientas digitales y cómo recortar lo superficial. La última página dice para quién funciona todo esto y para quién no.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Cambiar de tarea deja residuo: la atención no vuelve del todo" },
      {
        b: "texto",
        texto:
          "El concepto más útil del libro viene de la investigación sobre atención y se llama residuo atencional. Cuando dejas una tarea a medias para mirar otra cosa, una parte de tu cabeza se queda enganchada a la anterior, y ese resto sigue ocupando sitio aunque tú creas que ya has cambiado de asunto.",
      },
      {
        b: "texto",
        texto:
          "El efecto se ha medido en laboratorio: quien interrumpe una tarea para atender otra rinde peor en la segunda que quien la empieza limpio, y el bajón dura un rato largo. Por eso mirar el correo cada diez minutos no cuesta los treinta segundos que parece: cuesta la calidad de todo lo que se hace entre un vistazo y el siguiente.",
      },
      {
        b: "texto",
        texto:
          "Newport lo lleva a un cálculo que incomoda. Alguien que dedica ocho horas a algo difícil pero mira el móvil cada cuarto de hora no ha trabajado ocho horas: ha trabajado treinta y dos ratos de quince minutos, todos empezando de cero y ninguno llegando a la parte donde el problema se resuelve. La cuenta de horas sale igual y el resultado no se parece.",
      },
      {
        b: "idea",
        texto:
          "Una jornada partida en veinte trozos no son veinte ratos de trabajo. Son veinte arranques y ninguna profundidad.",
      },
      {
        b: "texto",
        texto:
          "De ahí sale una conclusión incómoda para el trabajo moderno: estar disponible todo el rato y hacer algo difícil son cosas incompatibles. No es una cuestión de organizarse mejor dentro del mismo esquema; hay que cambiar el esquema.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Hay cuatro maneras de meter concentración en una vida normal" },
      {
        b: "texto",
        texto:
          "Newport no propone una sola receta, y eso es lo que hace que el libro sirva a gente con vidas distintas. Describe cuatro estrategias, de la más radical a la más adaptable, y pide elegir una a conciencia en vez de improvisar cada semana.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Monástica", texto: "eliminar casi todo lo superficial. Solo vale si tu valor no depende de estar disponible." },
          { fuerte: "Bimodal", texto: "temporadas largas de aislamiento —días o semanas— alternadas con temporadas normales." },
          { fuerte: "Rítmica", texto: "un bloque fijo cada día, a la misma hora, hasta que deja de negociarse. La más práctica." },
          { fuerte: "Periodística", texto: "aprovechar cualquier hueco que aparezca. Es la más difícil y pide años de práctica." },
        ],
      },
      {
        b: "texto",
        texto:
          "Para casi todo el mundo la respuesta es la rítmica, y por una razón de fondo: convierte la concentración en una costumbre horaria y no en una decisión. Lo que se decide cada día compite con el resto del día, y pierde.",
      },
      {
        b: "texto",
        texto:
          "Elegir bien depende de una sola pregunta: cuánto puede uno desaparecer sin que su trabajo se resienta. Un investigador o un novelista pueden irse una semana; alguien que atiende clientes no puede irse una tarde. La estrategia rítmica funciona en los dos casos porque no pide desaparecer, pide una hora fija; y una hora fija se puede negociar con un jefe, con una pareja y con uno mismo.",
      },
      {
        b: "idea",
        texto:
          "El que espera a tener un rato tranquilo no lo tiene nunca. El rato tranquilo se pone en el calendario como una reunión con uno mismo.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "La fuerza de voluntad se agota, y por eso hace falta un ritual" },
      {
        b: "texto",
        texto:
          "Newport da por sentado algo que casi todos los libros de productividad ignoran: la capacidad de resistirse a las distracciones es limitada y se gasta a lo largo del día. Confiar en ella es garantizar que a las cinco de la tarde no quede nada.",
      },
      {
        b: "texto",
        texto:
          "La alternativa es un ritual fijo que quite decisiones de en medio. Dónde se trabaja, cuánto tiempo exactamente, qué reglas rigen —sin internet, sin teléfono, con una métrica de avance— y con qué se alimenta uno mientras: café, agua, un paseo antes. Cuando eso está decidido de antemano, empezar deja de costar.",
      },
      {
        b: "idea",
        texto:
          "No hay que decidir concentrarse. Hay que llegar a la hora y al sitio donde concentrarse es lo único que se puede hacer.",
      },
      {
        b: "texto",
        texto:
          "El libro añade una idea llamativa: los gestos grandes. Cambiar de sitio a propósito —irse a otra ciudad, pagar un hotel, encerrarse en una biblioteca lejos de casa— eleva la importancia psicológica de la tarea y funciona mejor de lo que su sencillez sugiere. Es caro y por eso se reserva para lo que de verdad importa.",
      },
      {
        b: "texto",
        texto:
          "Del ritual, la parte que más se descuida es cómo se mide el avance. Newport recomienda decidir de antemano qué cuenta como progreso en esa sesión —páginas, líneas, problemas resueltos— y anotarlo a la vista, porque sin una medida la sensación de haber trabajado depende del ánimo, y el ánimo miente en las dos direcciones.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Aburrirse es entrenamiento, y el móvil lo impide" },
      {
        b: "texto",
        texto:
          "Aquí está el consejo más contraintuitivo. Lo habitual es concentrarse a ratos y descansar mirando el teléfono. Newport sostiene que hay que hacerlo al revés: programar los ratos de distracción y que todo lo demás —incluida la cola del supermercado, el ascensor y los diez minutos muertos— sea sin pantalla.",
      },
      {
        b: "texto",
        texto:
          "El motivo es que la cabeza se entrena en lo que hace a menudo. Si cada vez que aparece un hueco de aburrimiento se rellena con estímulo, se está practicando la impaciencia; y luego, a la hora de aguantar tres horas con un problema difícil, esa impaciencia está ahí. La tolerancia al aburrimiento es la condición previa de la concentración.",
      },
      {
        b: "idea",
        texto:
          "No hace falta descansar de la concentración. Hace falta descansar de la distracción.",
      },
      {
        b: "texto",
        texto:
          "De la misma familia es lo que llama meditación productiva: dedicar un tiempo físicamente ocupado —caminar, correr, conducir— a darle vueltas a un solo problema profesional, devolviendo la cabeza al asunto cada vez que se va. Es incómodo al principio y es la manera más barata de entrenar la atención.",
      },
      {
        b: "texto",
        texto:
          "La versión práctica de todo esto es programar internet en vez de programar el trabajo. Se decide de antemano en qué franjas se puede estar conectado y fuera de ellas no se entra, ni siquiera treinta segundos, ni siquiera si uno se atasca. Lo interesante del método es que no reduce el tiempo total conectado; lo que hace es que dejar de estarlo no dependa de la voluntad de cada minuto.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Elige las herramientas como un artesano, no como un coleccionista" },
      {
        b: "texto",
        texto:
          "Ante cualquier aplicación nueva, la pregunta habitual es si tiene alguna ventaja. Con ese criterio se instala todo, porque casi todo tiene alguna. Newport propone el criterio del artesano: quedarse solo con las herramientas cuyo beneficio para los dos o tres objetivos importantes de tu vida supere claramente a su coste en atención.",
      },
      {
        b: "texto",
        texto:
          "Y propone una prueba concreta: dejar treinta días las herramientas opcionales, sin anunciarlo. Al cabo del mes se vuelve a incorporar solo aquello que se ha echado de menos de verdad y que aporta algo a esos objetivos. La mayoría de las cosas no pasan el examen, y lo que se temía —quedarse fuera de todo— casi nunca ocurre.",
      },
      {
        b: "idea",
        texto:
          "Que algo tenga un beneficio no basta. La pregunta es si ese beneficio compensa lo que te cuesta en atención, que es tu materia prima.",
      },
      {
        b: "texto",
        texto:
          "El último capítulo va contra lo superficial en el propio trabajo: planificar el día entero por bloques, poner una hora fija de cierre y trabajar hacia atrás desde ella, contar cuántas horas profundas exige cada proyecto y volverse un poco más difícil de localizar. No es misantropía: es que el tiempo que se protege hay que quitárselo a algo.",
      },
      {
        b: "texto",
        texto:
          "Para decidir qué se queda propone una prueba más: escribir los dos o tres objetivos importantes de tu vida profesional y personal, y debajo, para cada herramienta, las actividades concretas que le aporta a cada objetivo. Casi todas las aplicaciones aportan cosas pequeñas a objetivos que uno no había elegido, y esa lista lo enseña en un folio.",
      },
      {
        b: "texto",
        texto:
          "El criterio de fondo es el mismo que usa cualquier oficio con herramientas caras: un carpintero no compra una sierra porque tenga alguna ventaja, la compra si mejora su trabajo más de lo que cuesta. Con las aplicaciones se ha perdido esa manera de pensar porque parecen gratis, y no lo son: se pagan con lo único que no se puede reponer.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Lo superficial no se elimina: se acota" },
      {
        b: "texto",
        texto:
          "Conviene decirlo porque el libro se malinterpreta a menudo: Newport no propone dejar de contestar correos ni saltarse las reuniones. Propone tratar lo superficial como lo que es, una parte inevitable del trabajo, y ponerle un presupuesto de horas en vez de dejar que se lo coma todo.",
      },
      {
        b: "texto",
        texto:
          "Su método favorito es la jornada de horario fijo: decidir a qué hora se termina y organizar el trabajo para que quepa. Suena ingenuo y produce el efecto contrario al esperado, porque cuando el día tiene un límite duro, las reuniones se acortan, los compromisos se filtran y lo superficial se comprime. La escasez obliga a elegir.",
      },
      {
        b: "idea",
        texto:
          "Si el día no tiene final, todo cabe, y lo que primero se cuela es lo urgente de otros.",
      },
      {
        b: "texto",
        texto:
          "También sugiere una manera práctica de reducir el correo: contestar de forma que la conversación termine en un mensaje —proponiendo hora y sitio en vez de preguntar cuándo quedamos—, y aceptar que no todos los mensajes merecen respuesta. Ambas cosas incomodan al principio y ahorran horas al mes.",
      },
      {
        b: "texto",
        texto:
          "El principio que hay detrás es que el coste de un mensaje no lo paga quien lo escribe, sino quien lo recibe, y que por eso el correo crece sin freno: mandar es gratis y contestar no. Poner un poco de fricción del lado de quien pide —tardar en responder, responder corto, no responder a lo que no la necesita— es lo único que devuelve el equilibrio.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El trabajo profundo defiende una tesis y da un método. La tesis: en un mundo donde nadie se concentra, quien se concentra vale más, y esa capacidad se puede entrenar. El método: elegir una estrategia de horarios, montar un ritual que quite decisiones, entrenar la tolerancia al aburrimiento, elegir las herramientas por lo que cuestan y ponerle un presupuesto a lo superficial.",
      },
      {
        b: "texto",
        texto:
          "Lo mejor del libro es que nombra bien un problema que casi todo el mundo tiene y no sabe describir. El residuo atencional y la idea de descansar de la distracción en vez de descansar de la concentración explican, por sí solos, por qué tanta gente termina la jornada agotada y con la sensación de no haber hecho nada.",
      },
      {
        b: "texto",
        texto:
          "Y hay que leerlo sabiendo a quién le habla. Casi todos sus consejos dan por supuesto que uno controla su propio calendario: un profesor con plaza puede desaparecer tres días, y quien atiende a clientes, hace turnos o tiene a alguien a su cargo, no. El propio autor reconoce que su vida se lo pone fácil. Además, la parte contra las redes sociales ha envejecido en un género entero, y algunos de sus ejemplos de grandes creadores son anécdotas elegidas a favor, no pruebas.",
      },
      {
        b: "idea",
        texto:
          "Quédate con lo que puedas aplicar en tu situación real: un bloque fijo al día, el teléfono lejos y una hora de cierre. Con eso solo, ya cambia el resultado.",
      },
    ],
  },
];

export const PAGINAS: Record<string, PaginaLibro[]> = {
  "habitos-atomicos": HABITOS_ATOMICOS,
  sapiens: SAPIENS,
  "homo-deus": HOMO_DEUS,
  "armas-germenes": ARMAS_GERMENES,
  "diario-ana-frank": ANA_FRANK,
  "club-5-manana": CLUB_5_MANANA,
  "trabajo-profundo": TRABAJO_PROFUNDO,
};
