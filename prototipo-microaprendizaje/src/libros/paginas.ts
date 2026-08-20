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

   Reescrito el 20 de agosto con el molde de `REDACCION.md`: página uno de
   ENTRADA que anuncia el recorrido, seis de argumento y una CONCLUSIÓN que
   dice también dónde flojea el libro. La medida y el resto de las reglas
   están en ese archivo; aquí no se repiten para que no queden desfasadas.
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
      {
        b: "texto",
        texto:
          "Ese es el recorrido de este resumen: por qué conviene mirar el sistema y no la meta, por qué los hábitos que duran son los que cambian quién crees que eres, y después las cuatro leyes una por una con lo que hay que hacer en cada una. La última página dice dónde flojea el libro, que también tiene su parte.",
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
      {
        b: "texto",
        texto:
          "Clear usa una imagen para explicar por qué se abandona justo antes de tiempo. Un cubito de hielo a diez grados bajo cero al que se le calienta la habitación: a los nueve bajo cero no pasa nada, a los cinco tampoco, a los dos tampoco. Todo el esfuerzo parece perdido hasta que se llega a cero y entonces, de golpe, se derrite. Lo anterior no era inútil, era lo que hacía falta para llegar ahí.",
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
      {
        b: "texto",
        texto:
          "La diferencia se nota en cómo se dice que no. Ante un cigarrillo, «no gracias, estoy intentando dejarlo» es la respuesta de alguien que sigue siendo fumador y está haciendo un esfuerzo; «no gracias, yo no fumo» es la de alguien que ya no lo es. La segunda no gasta fuerza de voluntad, porque no hay nada que resistir.",
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
      {
        b: "texto",
        texto:
          "Apilar hábitos tiene una fórmula que cabe en una frase: después de tal cosa que ya hago, haré tal otra. El anclaje es una costumbre que ya está instalada —el café de la mañana, cerrar el portátil, lavarse los dientes— y no una hora del reloj, porque la hora se puede ignorar y la costumbre no. Y el entorno hace la mitad del trabajo: la fruta a la vista y las galletas en el armario de arriba deciden más que cualquier propósito.",
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
      {
        b: "texto",
        texto:
          "La táctica más útil de esta ley es emparejar lo que hay que hacer con lo que apetece: la serie solo mientras se pedalea, el pódcast favorito solo de camino al gimnasio. Y funciona en las dos direcciones, porque el entorno social también cuenta: uno acaba adoptando las costumbres de la gente con la que pasa el rato, así que la manera más barata de que algo apetezca es rodearse de gente para la que ya es normal.",
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
      {
        b: "texto",
        texto:
          "De ahí sale la regla de los dos minutos: cualquier hábito nuevo se recorta hasta que empezarlo cueste menos de dos minutos. Leer treinta páginas se convierte en leer una; ir al gimnasio, en ponerse las zapatillas y salir por la puerta. Suena a trampa y no lo es, porque lo difícil de un hábito nunca es hacerlo: es empezarlo, y una vez empezado casi siempre se sigue.",
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
      {
        b: "texto",
        texto:
          "Por eso funciona tan bien marcar los días en un calendario a la vista: la marca es una recompensa inmediata para un beneficio que tardará meses, y además da pena romper una cadena larga. Con una regla al lado, que es la que salva el método: se puede fallar un día, nunca dos seguidos. Un fallo es un accidente; dos son el principio de otra costumbre.",
      },
    ],
  },

  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
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
      {
        b: "texto",
        texto:
          "Y hay un límite que el libro casi no toca: da por hecho que el problema es de diseño. Quien encadena dos turnos y cuida de alguien no falla al hábito por haberlo diseñado mal, y de eso el libro no habla. Sirve para ordenar lo que está en tu mano, que no es poco, pero no explica por qué a unos les cabe más en las manos que a otros.",
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

/* --------------------------------------------------------------------------
   Los 7 hábitos de la gente altamente efectiva, en ocho páginas.

   Escrito con el molde de `REDACCION.md`. El libro es práctico, así que va
   en segunda persona —regla 7— y los titulares afirman en vez de etiquetar:
   «Los tres primeros hábitos no tratan de los demás» y no «La victoria
   privada».

   El reto de este resumen era no convertirse en la lista de los siete, que
   es lo que hace todo el mundo y es exactamente lo que Covey quería evitar.
   Así que se cuenta el argumento: por qué la efectividad es un orden y no
   una colección de trucos.
   -------------------------------------------------------------------------- */

const SIETE_HABITOS: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "La mitad de los consejos de éxito del último siglo son maquillaje" },
      {
        b: "texto",
        texto:
          "Stephen Covey se puso a leer todo lo que se había publicado en Estados Unidos sobre el éxito desde 1776. Doscientos años de manuales. Y encontró una frontera clarísima: hasta más o menos la Primera Guerra Mundial, aquellos libros hablaban de integridad, humildad, justicia, paciencia y trabajo. Después empezaron a hablar de técnicas para caer bien, de actitud mental positiva y de cómo dar la mano.",
      },
      {
        b: "texto",
        texto:
          "A lo primero lo llamó la ética del carácter y a lo segundo la ética de la personalidad. La diferencia no es de estilo. Una técnica sirve para que el otro haga hoy lo que tú quieres; el carácter es lo que decide si al cabo de un año sigue queriendo tratar contigo. Covey lo resume con una imagen que le sirve para todo el libro: puedes hacer trampas en un examen, pero no en una granja. La cosecha va a su ritmo y no negocia.",
      },
      {
        b: "idea",
        texto:
          "Con las personas, lo rápido es lento y lo lento es rápido. Las técnicas se agotan; el carácter compone interés.",
      },
      {
        b: "texto",
        texto:
          "De ahí salen los siete hábitos, que no son siete consejos sueltos sino una secuencia con un orden que no se puede alterar. Los tres primeros te sacan de depender de los demás. El cuarto, el quinto y el sexto solo funcionan una vez has hecho los tres primeros. Y el séptimo mantiene los otros seis.",
      },
      {
        b: "texto",
        texto:
          "El recorrido de este resumen es ese: primero por qué hay que empezar por uno mismo, después los tres hábitos privados, después los tres que solo existen entre dos personas, y por último el que sostiene todo. La conclusión dice también dónde flojea el libro, que tiene una parte que ha envejecido peor que el resto.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Entre lo que te pasa y lo que haces hay un hueco, y ahí vives" },
      {
        b: "texto",
        texto:
          "El primer hábito se llama ser proactivo y casi nadie lo entiende bien. No significa tener iniciativa ni levantarse temprano. Significa reconocer que entre el estímulo y la respuesta hay un espacio, y que ese espacio es tuyo. Un perro no lo tiene. Tú sí.",
      },
      {
        b: "texto",
        texto:
          "Covey lo distingue con una prueba de oído. Escúchate un día entero. Si te oyes decir «no puedo», «tengo que», «si mi jefe no fuera así», «es que yo soy de este carácter», estás hablando el idioma de quien reacciona. El otro idioma dice «prefiero», «elijo», «voy a probar otra cosa». No es optimismo: es dónde pones la causa de lo que te pasa.",
      },
      {
        b: "texto",
        texto:
          "Para verlo dibuja dos círculos. En el de fuera cabe todo lo que te preocupa: la economía, el cambio climático, el humor de tu jefe, lo que opine tu cuñado. En el de dentro, solo lo que de verdad puedes tocar. La gente reactiva se pasa el día en el círculo grande, quejándose de lo que no depende de ella, y mientras tanto el círculo pequeño se le encoge. La proactiva trabaja el pequeño, y el pequeño crece.",
      },
      {
        b: "idea",
        texto:
          "No te hace daño lo que te pasa, sino la respuesta que eliges. Y la respuesta siempre la eliges tú.",
      },
      {
        b: "texto",
        texto:
          "El ejemplo que Covey usa es Viktor Frankl en un campo de exterminio, decidiendo cómo iba a soportar lo que le hacían cuando ya no le quedaba nada más que decidir. Es un ejemplo extremo a propósito: si aquel espacio existía allí, existe en una reunión del martes.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Todo se crea dos veces, y la primera vez es gratis" },
      {
        b: "texto",
        texto:
          "El segundo hábito es empezar con el fin en la cabeza, y arranca con un ejercicio incómodo: imagínate dentro de tres años en tu propio funeral. Hablan cuatro personas —alguien de tu familia, un amigo, alguien del trabajo, alguien de tu barrio o de tu parroquia—. ¿Qué te gustaría que dijeran de ti? No qué has conseguido. Qué has sido.",
      },
      {
        b: "texto",
        texto:
          "Covey lo plantea así porque su tesis es que todo se crea dos veces: primero en la cabeza y después en el mundo. Una casa se construye dos veces, y la primera es el plano. El problema es que mucha gente vive la segunda creación sin haber hecho la primera, y entonces el plano se lo escribe otro: la familia, la empresa, la costumbre. Se llega a lo alto de la escalera y resulta que estaba apoyada en la pared equivocada.",
      },
      {
        b: "texto",
        texto:
          "La herramienta que propone es escribir un enunciado personal de misión: qué quieres ser, qué quieres hacer y sobre qué valores. No es un lema. Es un texto que se corrige durante meses y que sirve para decidir cuando aparece algo que no estaba previsto.",
      },
      {
        b: "texto",
        texto:
          "Y hay un motivo por el que insiste tanto en escribirlo. Todo el mundo tiene un centro del que cuelgan sus decisiones, aunque no lo haya elegido:",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "El trabajo", texto: "y entonces un mal trimestre te desmonta entero." },
          { fuerte: "El dinero", texto: "y cualquier gasto imprevisto se convierte en una crisis." },
          { fuerte: "La pareja", texto: "y su estado de ánimo pasa a ser el tuyo." },
          { fuerte: "Los principios", texto: "que no cambian de humor, no se despiden y no se van." },
        ],
      },
      {
        b: "idea",
        texto:
          "Si no escribes tú el plano de tu vida, alguien lo va a escribir por ti, y ni siquiera se dará cuenta de que lo hace.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo urgente te roba el tiempo de lo importante y encima te deja satisfecho",
      },
      {
        b: "texto",
        texto:
          "El tercer hábito es poner primero lo primero, y es donde el plan se convierte en agenda. Covey reparte todo lo que haces en una cuadrícula de dos ejes: urgente o no, importante o no. Salen cuatro casillas y la interesante es la segunda.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Urgente e importante", texto: "crisis, plazos que vencen hoy. Hay que atenderlo, pero si vives aquí te quemas." },
          { fuerte: "Importante y no urgente", texto: "prevenir, planificar, formarte, cuidar una relación. Aquí está casi todo lo que cambia una vida." },
          { fuerte: "Urgente y no importante", texto: "el teléfono, las interrupciones, reuniones ajenas. Parece trabajo y no lo es." },
          { fuerte: "Ni lo uno ni lo otro", texto: "el rato que pasa sin que te enteres. No descansa ni produce." },
        ],
      },
      {
        b: "texto",
        texto:
          "El detalle que hace útil la cuadrícula es que el segundo cuadrante nunca grita. Nadie te llama para recordarte que hoy tocaba hacer ejercicio o hablar con tu hijo. Y como no grita, se lo come el tercero, que suena igual que el primero: el teléfono no distingue entre una urgencia tuya y una urgencia de otro.",
      },
      {
        b: "texto",
        texto:
          "Por eso Covey propone planificar por semanas y no por días. En un día solo caben las urgencias; en una semana caben los papeles que de verdad tienes —padre, jefe, hija, amiga— y dos o tres cosas importantes por cada uno. Y por eso insiste en aprender a decir que no: cada sí a algo del tercer cuadrante es un no a algo del segundo, aunque no lo parezca.",
      },
      {
        b: "idea",
        texto:
          "La cuestión no es ordenar lo que hay en la agenda, sino tener claro qué merece entrar en ella.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Con las personas no hay atajo: hay una cuenta corriente y se llena despacio",
      },
      {
        b: "texto",
        texto:
          "Aquí cambia el libro. Los tres primeros hábitos son contigo. Los tres siguientes son con otros, y Covey avisa de que no se puede saltar el orden: quien no se sostiene solo no negocia, depende. Antes de explicarlos mete la imagen que más se le ha citado, la cuenta bancaria emocional.",
      },
      {
        b: "texto",
        texto:
          "Con cada persona tienes una cuenta abierta. Ingresas cuando cumples lo que prometiste, cuando escuchas de verdad, cuando pides perdón sin peros, cuando eres el mismo delante y detrás. Retiras cuando llegas tarde, cuando prometes de más, cuando la corriges delante de otros. Y la cuenta importa porque decide cómo se leen tus palabras: la misma frase, con saldo, se entiende como una broma, y sin saldo, como un ataque.",
      },
      {
        b: "idea",
        texto:
          "Con la gente que te importa, la confianza no se explica: se ingresa. Y los ingresos son pequeños y muchos.",
      },
      {
        b: "texto",
        texto:
          "Sobre esa base va el cuarto hábito, pensar en ganar-ganar. Covey señala que casi todos vamos por la vida con un marcador de suma cero, heredado del colegio y del deporte: si tú ganas, yo pierdo. Pero en una relación que va a durar, el trato que le arrancas al otro a la fuerza lo vas a pagar dos veces.",
      },
      {
        b: "texto",
        texto:
          "Y añade la parte que casi nadie recuerda del hábito. Si no se llega a un acuerdo que convenga de verdad a los dos, la salida no es ceder: es no hay trato. Se dice con buenas maneras, se deja la relación en pie y cada uno sigue su camino. Un mal acuerdo aceptado por no discutir sale mucho más caro que no cerrarlo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Casi nadie escucha para entender: escuchamos para contestar" },
      {
        b: "texto",
        texto:
          "El quinto hábito es el que Covey considera la llave de todos los demás y se enuncia así: procura primero comprender, y después ser comprendido. Su observación es que dedicamos años a aprender a leer, a escribir y a hablar, y ni una hora a aprender a escuchar.",
      },
      {
        b: "texto",
        texto:
          "Lo que hacemos mientras el otro habla es prepararnos. Vamos filtrando lo que dice por nuestra propia biografía y le contestamos con uno de los cuatro reflejos de siempre: evaluamos, preguntamos desde nuestro marco, aconsejamos o interpretamos. Los cuatro tienen la misma pinta de conversación y ninguno es escuchar.",
      },
      {
        b: "texto",
        texto:
          "La analogía que usa es de consulta. Imagínate un oculista que te oye decir que ves mal, se quita sus gafas y te las da: a mí me van de maravilla, llevo diez años con ellas. Sería absurdo, y sin embargo es lo que hacemos cada vez que respondemos a un problema ajeno contando lo que a nosotros nos funcionó. Recetar antes de diagnosticar.",
      },
      {
        b: "idea",
        texto:
          "La necesidad más grande de una persona, después de comer y respirar, es que alguien la entienda de verdad.",
      },
      {
        b: "texto",
        texto:
          "Escuchar con empatía significa devolverle al otro lo que ha dicho y lo que siente hasta que confirme que sí, que es eso. Cuesta tiempo al principio y lo devuelve entero después, porque evita trabajar durante semanas sobre el problema equivocado. Y solo entonces toca la segunda mitad del hábito, exponer lo tuyo: a alguien que ya se siente entendido se le puede decir cualquier cosa.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Dos personas que piensan igual, en una de las dos sobra" },
      {
        b: "texto",
        texto:
          "El sexto hábito es la sinergia, y es el resultado de los cinco anteriores más que un hábito aparte. La idea es sencilla de enunciar y rara de ver: cuando dos personas que se tienen confianza se ponen a resolver algo sin renunciar a lo suyo, aparece una tercera solución que ninguna de las dos llevaba.",
      },
      {
        b: "texto",
        texto:
          "El requisito es valorar la diferencia, y ahí Covey es exigente. No basta con tolerarla —tolerar es aguantar—. Se trata de alegrarse de que el otro vea lo que tú no ves. Su frase para esto es que si dos personas tienen la misma opinión, una de las dos es innecesaria.",
      },
      {
        b: "texto",
        texto:
          "Cuenta el caso de una discusión por las vacaciones: él quería el lago y la pesca, ella la casa de su madre, a quinientos kilómetros. El acuerdo de siempre habría sido partir el verano en dos y dejar a los dos a medias. Lo que salió al hablarlo fue otra cosa que ninguno había considerado, un sitio nuevo cerca de la familia y con agua. No es un cuento con moraleja: es que la tercera vía no aparece si se entra a repartir.",
      },
      {
        b: "idea",
        texto:
          "La transacción reparte el pastel. La sinergia hace otro pastel, y por eso no se parece a ceder.",
      },
      {
        b: "texto",
        texto:
          "También avisa de lo contrario. Cuando falta confianza, la misma diferencia produce lo peor: cada uno defiende su posición, se negocia a la baja y el resultado es peor que cualquiera de las dos propuestas iniciales. La sinergia no se puede convocar en una reunión; se apoya en el saldo de la cuenta.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El séptimo hábito es afilar la sierra, y viene del leñador que lleva cinco horas serrando un árbol y no para a afilar porque va muy retrasado. Covey lo reparte en cuatro cuidados —el cuerpo, la cabeza, las relaciones y lo que uno considere su parte espiritual— y sostiene que sostener los otros seis depende de dedicarles tiempo, que además es tiempo del segundo cuadrante y por tanto nunca urgente.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta el libro es el orden. Casi todo lo que se publica sobre productividad, negociación o comunicación son piezas sueltas, y aquí están encadenadas: no se negocia bien si dependes, no se escucha bien si no sabes qué quieres, no se planifica bien si no has decidido para qué. Esa secuencia es lo que ha hecho que aguante cuarenta años, y lo que explica que la gente lo recuerde por los dos círculos y por la cuadrícula mucho después de olvidar los nombres de los hábitos.",
      },
      {
        b: "idea",
        texto:
          "Los siete no son siete consejos: son un orden. Y el orden es lo que no se puede saltar.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla. Primero, en el tono: Covey escribe desde una moral concreta —familia tradicional, empresa americana de los ochenta, su propia fe mormona sin nombrarla— y hay páginas de ejemplos domésticos que hoy suenan a otra época. Segundo, y más de fondo: llama principios a sus valores y los presenta como leyes naturales, del mismo rango que la gravedad, sin ningún respaldo más allá de que a él le parecen evidentes. Es la maniobra que le permite no discutir nada.",
      },
      {
        b: "texto",
        texto:
          "Y hay una crítica más práctica. El libro fue escrito para quien tiene margen: quien puede decir que no, elegir en qué trabaja y planificar su semana. Quien encadena turnos partidos encontrará los dos primeros hábitos útiles y el tercero un poco insultante. Conviene leerlo sabiendo eso, porque el propio Covey nunca lo dice.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   El poder de los hábitos, en ocho páginas.

   El riesgo aquí era que se pareciese a Hábitos atómicos, que ya está
   escrito. No son el mismo libro: Clear enseña a montar un hábito y Duhigg
   cuenta por qué existen y qué hacen las empresas y los gobiernos con ellos.
   Así que este resume el periodismo —Eugene, la pasta de dientes, O'Neill,
   Target— y deja el manual para el otro.

   Molde de `REDACCION.md`: entrada con recorrido anunciado, seis argumentos
   y conclusión con la parte floja, que en este libro es gorda y conocida.
   -------------------------------------------------------------------------- */

const PODER_HABITOS: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Un hombre sin memoria seguía sabiendo volver a su casa" },
      {
        b: "texto",
        texto:
          "En 1993, una infección vírica destruyó la parte del cerebro de Eugene Pauly que fabrica recuerdos nuevos. No podía retener nada más de veinte segundos. No sabía dónde estaba la cocina si se lo preguntabas. Y sin embargo, cada mañana salía a dar un paseo por el barrio y volvía solo. Si le pedías que dibujara el recorrido en un papel, no era capaz.",
      },
      {
        b: "texto",
        texto:
          "Eugene demostró algo que ya se sospechaba: los hábitos no viven donde viven los recuerdos. Se guardan mucho más adentro, en los ganglios basales, una estructura del tamaño de una pelota de golf que compartimos con animales bastante menos listos que nosotros. Por eso funcionan cuando todo lo demás ha dejado de funcionar.",
      },
      {
        b: "idea",
        texto:
          "Los hábitos no son memoria ni voluntad: son una estructura aparte que sigue trabajando cuando las otras dos se apagan.",
      },
      {
        b: "texto",
        texto:
          "Charles Duhigg es periodista del New York Times, y de ahí sale la forma del libro. En lugar de un manual, reúne casos: un laboratorio del MIT con ratas en un laberinto, un vendedor que hizo que Estados Unidos entero se lavara los dientes, un directivo que multiplicó por cinco una empresa hablando solo de accidentes laborales, y unos grandes almacenes que sabían quién estaba embarazada antes que su familia.",
      },
      {
        b: "texto",
        texto:
          "El recorrido de este resumen es ese: primero cómo funciona un hábito por dentro, después por qué no se puede borrar pero sí cambiar, después el hábito que arrastra a todos los demás, y por último qué pasa cuando esto lo maneja una empresa. La conclusión dice dónde falla, que en este libro es una cifra concreta.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Un hábito son tres piezas, y el cerebro se apaga en la del medio" },
      {
        b: "texto",
        texto:
          "En el MIT metieron ratas en un laberinto en forma de T con chocolate al final, y les midieron la actividad cerebral mientras aprendían. Los primeros días el cerebro trabajaba a tope todo el recorrido: cada esquina era una decisión. Después de unos cientos de intentos, la actividad se hundió en el medio y solo quedaron dos picos: uno al oír el clic de la puerta y otro al llegar al chocolate.",
      },
      {
        b: "texto",
        texto:
          "Eso es lo que Duhigg llama el bucle del hábito, y explica por qué te encuentras en la cocina sin recordar haberte levantado:",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "La señal", texto: "algo que dispara el piloto automático: una hora, un sitio, un estado de ánimo, otra persona." },
          { fuerte: "La rutina", texto: "lo que haces. Es la parte visible y la que menos importa." },
          { fuerte: "La recompensa", texto: "lo que hace que el cerebro decida guardar el bucle para la próxima." },
        ],
      },
      {
        b: "texto",
        texto:
          "La ventaja de este ahorro es enorme: el cerebro consume mucha energía y no puede deliberar cada gesto. El precio es que no distingue entre un buen bucle y uno malo. Guarda los dos con el mismo cuidado.",
      },
      {
        b: "idea",
        texto:
          "Tu cerebro no sabe si un hábito te conviene. Solo sabe que le ahorra trabajo, y con eso le basta.",
      },
      {
        b: "texto",
        texto:
          "Hay un detalle más, medido también con las ratas. Con el tiempo, el pico de actividad se adelanta: ya no aparece con el chocolate, sino con el clic. El cerebro empieza a anticipar la recompensa antes de tenerla, y esa anticipación es lo que se siente como ganas. No deseas el cigarro: deseas lo que el cigarro anuncia.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Un hábito no se borra, se le cambia la pieza del medio" },
      {
        b: "texto",
        texto:
          "De ahí sale la regla de oro del libro, y es la razón por la que dejarlo a secas casi nunca funciona. La señal sigue estando ahí —las seis de la tarde, la reunión que sale mal, el amigo que fuma— y la recompensa se sigue queriendo. Lo único que se puede sustituir es la rutina del medio.",
      },
      {
        b: "texto",
        texto:
          "Duhigg lo cuenta con su propio caso, y es de lo más honesto del libro. Cada tarde se levantaba, iba a la cafetería y se comía una galleta enorme. Había engordado cuatro kilos. Se pasó semanas haciendo experimentos consigo mismo: probó a salir a dar una vuelta, a comerse una manzana, a tomar café. Descubrió que la recompensa que buscaba no era el azúcar, sino la charla de diez minutos con los compañeros. La galleta era la excusa.",
      },
      {
        b: "texto",
        texto:
          "Así que cambió la rutina: a las tres y media se levantaba igual, iba a la mesa de alguien y hablaba diez minutos. Misma señal, misma recompensa, sin galleta. Y explica el método para averiguarlo, que consiste en probar recompensas distintas y anotar tres palabras al terminar para saber si el impulso se ha ido.",
      },
      {
        b: "idea",
        texto:
          "Nadie deja un hábito por prohibírselo. Se deja poniendo otra cosa en el mismo hueco.",
      },
      {
        b: "texto",
        texto:
          "Alcohólicos Anónimos lleva ochenta años haciendo esto sin decirlo así: las reuniones sustituyen al bar a la misma hora, con la misma compañía y con el mismo alivio. Pero Duhigg añade una condición que los propios estudios encontraron: en los momentos de mucho estrés, la sustitución se cae si no hay creencia de que las cosas pueden mejorar. Y la creencia, curiosamente, la fabrica el grupo.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Hay hábitos que arrastran a todos los demás, y casi nunca son los obvios",
      },
      {
        b: "texto",
        texto:
          "En 1987, Alcoa nombró director a Paul O'Neill. En su primera reunión con los inversores, en lugar de hablar de márgenes, dijo que iba a convertir la empresa en la más segura de Estados Unidos: cero accidentes laborales. Un inversor salió corriendo a llamar a sus clientes para que vendieran. Fue el peor consejo de su carrera: en trece años el valor de Alcoa se multiplicó por cinco.",
      },
      {
        b: "texto",
        texto:
          "O'Neill no eligió la seguridad por bondad. Eligió lo único que nadie —ni sindicatos ni directivos— podía discutir, y montó alrededor un sistema: cada accidente había que comunicarlo en veinticuatro horas con un plan para que no se repitiera. Para cumplirlo, los encargados tuvieron que hablar con los operarios, los operarios tuvieron que decir lo que veían mal, y hubo que instalar canales de comunicación que no existían. Por esos mismos canales empezaron a subir las ideas de producción.",
      },
      {
        b: "idea",
        texto:
          "Un hábito clave no mejora una cosa: obliga a montar la estructura por la que después pasa todo lo demás.",
      },
      {
        b: "texto",
        texto:
          "Duhigg llama a esto hábitos angulares y da más ejemplos con la misma forma. Quien empieza a hacer ejercicio acaba comiendo mejor, fumando menos y siendo más paciente en el trabajo, sin habérselo propuesto. Las familias que cenan juntas producen hijos con mejores notas y más control de sus impulsos, y la cena no enseña matemáticas.",
      },
      {
        b: "texto",
        texto:
          "Lo que tienen en común es que crean lo que él llama pequeñas victorias: un logro pequeño y visible que cambia la idea que uno tiene de sí mismo, y desde esa idea nueva se hacen cosas que antes ni se intentaban.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "La fuerza de voluntad es un músculo, y se puede entrenar en un vaso de agua",
      },
      {
        b: "texto",
        texto:
          "El caso más citado del libro es Starbucks, y empieza con un problema. La empresa contrataba a miles de chavales de veinte años y los ponía a atender a gente que grita cuando el café tarda. La técnica se enseña en unos días; aguantar la bronca sin contestar, no.",
      },
      {
        b: "texto",
        texto:
          "Lo que hicieron fue tratar el autocontrol como una habilidad y no como un rasgo. En vez de pedir paciencia, escribieron guiones para los momentos concretos en que se pierde: qué haces exactamente cuando un cliente se pone a gritar, qué frase dices primero, qué haces si la máquina se atasca en hora punta. Los empleados los ensayaban en voz alta hasta que la reacción salía sola.",
      },
      {
        b: "texto",
        texto:
          "Detrás hay un experimento clásico. A dos grupos de estudiantes se les puso delante un plato de galletas recién hechas y otro de rábanos; a unos les dejaron comer galletas y a otros solo rábanos. Después les pusieron un rompecabezas imposible. Los de las galletas insistieron una media de diecinueve minutos; los de los rábanos, ocho. Habían gastado el autocontrol en no comerse una galleta y ya no les quedaba para otra cosa.",
      },
      {
        b: "idea",
        texto:
          "La voluntad se agota como un músculo, pero también como un músculo se entrena, y lo entrenado ya no la gasta.",
      },
      {
        b: "texto",
        texto:
          "De ahí la conclusión práctica: quien decide de antemano qué va a hacer en el momento difícil no necesita voluntad cuando llega. Es lo que hacen las rehabilitaciones de cadera que reducen a la mitad las recaídas pidiéndole al paciente que escriba en un papel qué hará exactamente cuando el dolor le entren ganas de parar.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Lo nuevo se vende disfrazado de lo de siempre" },
      {
        b: "texto",
        texto:
          "A principios del siglo XX, en Estados Unidos casi nadie se lavaba los dientes. Un publicista llamado Claude Hopkins tenía que vender una pasta, Pepsodent, y encontró una señal que todo el mundo podía notar con la lengua: esa película pegajosa que cubre los dientes. Sus anuncios decían pásate la lengua y notarás la placa. En diez años, más de la mitad del país se lavaba los dientes a diario.",
      },
      {
        b: "texto",
        texto:
          "El detalle importa: la película que Hopkins denunciaba se quita igual comiendo una manzana, y Pepsodent no hacía nada especial contra ella. Lo que sí tenía —como lo tienen hoy casi todas— era ácido cítrico y aceite de menta, que producen ese cosquilleo fresco al terminar. Eso era la recompensa. Cuando los fabricantes lo probaron a quitar, la gente decía que la pasta no limpiaba, aunque limpiara exactamente igual.",
      },
      {
        b: "idea",
        texto:
          "Un producto se convierte en hábito cuando deja una señal que se puede notar y una recompensa que se echa de menos.",
      },
      {
        b: "texto",
        texto:
          "La otra cara de la moneda es Febreze, que salió al mercado como un quitaolores y fracasó: quien vive con nueve gatos ya no huele a gato, así que no había señal. Lo relanzaron como el remate del gesto de limpiar, con perfume añadido, y funcionó. El producto era casi el mismo; el hueco en el bucle, otro.",
      },
      {
        b: "texto",
        texto:
          "De ahí sale la regla que Duhigg extrae para los gustos nuevos, y que las radios llevan décadas usando: lo desconocido se acepta cuando viene envuelto en algo familiar. Una canción rara colocada entre dos éxitos conocidos deja de sonar rara. Es lo mismo que hacer que la verdura entre en una casa poniéndola al lado de lo que ya se come.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Unos grandes almacenes supieron que estaba embarazada antes que su padre",
      },
      {
        b: "texto",
        texto:
          "Target contrató a un estadístico, Andrew Pole, con un encargo concreto: detectar embarazos. La razón es que las costumbres de compra de una persona son de una estabilidad aburrida, y solo se rompen en los momentos grandes de la vida. Un bebé es el mayor de todos: durante unos meses una familia recoloca dónde compra absolutamente todo.",
      },
      {
        b: "texto",
        texto:
          "Pole encontró una veintena de productos que, combinados, daban una puntuación de embarazo y hasta una fecha aproximada de parto. Loción sin perfume a partir del tercer mes. Suplementos de calcio, magnesio y zinc. Bolsas de algodón grandes. Con eso, Target podía mandar cupones de cuna a quien todavía no se lo había contado a nadie.",
      },
      {
        b: "texto",
        texto:
          "El problema apareció enseguida: un padre de Minneapolis entró furioso en una tienda a preguntar por qué le mandaban a su hija adolescente cupones de ropa premamá. Días después llamó a disculparse. La solución de Target no fue dejar de hacerlo, sino disimularlo: los cupones de pañales se colocaron entre anuncios de cortacéspedes y copas de vino, para que pareciera casualidad. Y funcionó mejor.",
      },
      {
        b: "idea",
        texto:
          "Los hábitos se pueden leer desde fuera, y quien los lee sabe cosas de ti que tú no has contado a nadie.",
      },
      {
        b: "texto",
        texto:
          "Duhigg cierra el libro con la pregunta legal que sale de todo esto: si un hábito es automático, ¿respondes de él? Cuenta dos casos reales, un hombre que mató a su mujer durmiendo y una mujer que se arruinó jugando, y el tribunal absolvió al primero y condenó a la segunda. Su argumento es que la diferencia está en saberlo: en cuanto conoces el bucle, la responsabilidad vuelve a ser tuya.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro sostiene una sola idea desde el principio hasta el final: casi nada de lo que haces en un día lo has decidido hoy. Cerca de la mitad de los actos diarios son bucles guardados, y el bucle tiene siempre las mismas tres piezas. Como no se pueden borrar, la única maniobra posible es sustituir la del medio dejando intactas las otras dos.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta frente a los manuales de hábitos es la escala. Duhigg no se queda en el individuo: enseña el mismo mecanismo funcionando dentro de una fábrica de aluminio, de una cadena de cafeterías, de una campaña publicitaria y de un sistema de datos comerciales. Después de leerlo se reconocen los tres pasos en sitios donde no se buscaban, y esa es la parte que dura.",
      },
      {
        b: "idea",
        texto:
          "Casi la mitad de lo que haces hoy no lo has decidido hoy. Y lo que no se decide, alguien lo diseña.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla. La cifra más repetida del libro —que los hábitos son el cuarenta por ciento de lo que hacemos— viene de un estudio con estudiantes de una sola universidad que apuntaban lo que hacían cada hora, y la horquilla real que dio era del quince al cincuenta por ciento según la persona. Que se cite como un dato fijo dice bastante sobre cómo se leen estos libros.",
      },
      {
        b: "texto",
        texto:
          "Y hay un problema de método. Duhigg es periodista, así que arma cada capítulo con una historia potente, y las historias potentes se eligen porque terminaron bien. No aparecen las empresas que probaron lo mismo y se hundieron, ni la gente que cambió la rutina del medio y volvió a la galleta. La psicología que lo sostiene es sólida; la certeza con que se cuenta, bastante mayor que la que da esa psicología.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   La psicología del dinero, en ocho páginas.

   Libro práctico, así que segunda persona —regla 7—. El material del propio
   Housel es una mina de datos concretos: Ronald Read y sus ocho millones,
   Grace Groner, los 2.129 días de Buffett, el 99 % de su fortuna después de
   los cincuenta. La regla 2 pide justo eso, así que aquí se aprovecha.

   Lo que había que evitar era convertirlo en consejos de inversión. El libro
   no los da: dice que el dinero es un problema de comportamiento y no de
   matemáticas, y ese es el argumento que se sigue de principio a fin.
   -------------------------------------------------------------------------- */

const PSICOLOGIA_DINERO: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Un conserje dejó ocho millones de dólares y un directivo se arruinó" },
      {
        b: "texto",
        texto:
          "Ronald Read reparaba coches en una gasolinera de Vermont y después barrió los suelos de unos grandes almacenes. Cuando murió, en 2014, dejó ocho millones de dólares. Había ido comprando acciones de empresas conocidas y no las tocó en cincuenta años. Ese mismo año, Richard Fuscone —Harvard, alto cargo en Merrill Lynch, retirado a los cuarenta para dedicarse a la filantropía— perdió su casa de más de mil metros cuadrados en una ejecución hipotecaria.",
      },
      {
        b: "texto",
        texto:
          "Morgan Housel empieza así porque en ninguna otra profesión pasa esto. Nadie sin estudios opera un corazón mejor que un cirujano ni construye un puente mejor que un ingeniero. Con el dinero ocurre a todas horas, y no es casualidad: significa que lo que se mide no es lo que importa.",
      },
      {
        b: "idea",
        texto:
          "El dinero no se le da bien a quien más sabe, sino a quien mejor se comporta. Y comportarse no se enseña en clase.",
      },
      {
        b: "texto",
        texto:
          "Su tesis es que las finanzas se enseñan como una ciencia —fórmulas, hojas de cálculo, tipos de interés— cuando en realidad se parecen mucho más a la psicología. Una decisión financiera casi nunca sale de una tabla: sale del miedo, del orgullo, de lo que hizo tu familia y de lo que viste que pasaba cuando tenías veinte años.",
      },
      {
        b: "texto",
        texto:
          "El recorrido de este resumen es ese: primero por qué cada uno juega a un juego distinto, después el papel de la suerte, después la única fuerza que hace ricos de verdad, y qué hay que hacer para no interrumpirla. La conclusión dice también dónde flojea el libro.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Nadie está loco: cada uno decide con las cuentas de su propia vida" },
      {
        b: "texto",
        texto:
          "Housel plantea un dato incómodo para quien reparte consejos. Una persona nacida en 1970 vio cómo la bolsa estadounidense se multiplicaba casi por diez entre sus trece y sus treinta años. Otra nacida en 1950 vio exactamente lo mismo, ajustado a la inflación: nada. La misma bolsa, el mismo país, dos experiencias opuestas.",
      },
      {
        b: "texto",
        texto:
          "Lo mismo con la inflación: quien tenía veinte años en los setenta la vivió comiéndose los sueldos, y quien los tuvo en los noventa no la ha visto nunca. Los estudios sobre lotería enseñan la otra punta: los que menos ganan compran muchos más boletos, cosa que parece un disparate hasta que se entiende qué están comprando. Están comprando el sueño de una vida que quienes dan consejos ya tienen.",
      },
      {
        b: "idea",
        texto:
          "Todo el mundo decide de forma razonable con la información que le dio su vida. Lo raro sería lo contrario.",
      },
      {
        b: "texto",
        texto:
          "De ahí una advertencia que atraviesa el libro: cuidado con imitar a alguien que juega a otro juego. En una burbuja, el inversor a largo plazo mira al especulador que gana dinero comprando caro y concluye que se está equivocando él. Y no: el otro va a vender el jueves, así que para su juego el precio de hoy da igual.",
      },
      {
        b: "texto",
        texto:
          "La consecuencia práctica es que antes de hacer caso a nadie hay que saber a qué plazo juega. Un titular, un vídeo o un cuñado no vienen con esa etiqueta puesta.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "La suerte y el riesgo son la misma cosa vista desde dos lados" },
      {
        b: "texto",
        texto:
          "En 1968 solo unos trescientos institutos de Estados Unidos tenían ordenador. Bill Gates iba a uno de ellos. Housel calcula la probabilidad en aproximadamente uno entre un millón, y la usa para lo contrario de lo que parece: para hablar del tercer amigo del grupo.",
      },
      {
        b: "texto",
        texto:
          "Aquel instituto tenía tres chavales obsesionados con la programación. Dos eran Bill Gates y Paul Allen. El tercero se llamaba Kent Evans, era igual de bueno, y murió en un accidente de montaña antes de terminar el instituto. Misma suerte de entrada, resultados incomparables. El riesgo, dice Housel, es la suerte con el signo cambiado, y no hay manera de tener una sin la otra.",
      },
      {
        b: "idea",
        texto:
          "Nada sale tan bien ni tan mal como parece. Detrás de casi todo resultado hay una parte que no dependía de nadie.",
      },
      {
        b: "texto",
        texto:
          "Lo que se saca de ahí es una manera de mirar. Cuando alguien triunfa, no copies su jugada: busca las pautas generales que se repiten en muchos que triunfaron, porque ahí es donde queda menos azar. Y cuando alguien fracasa, no des por hecho que fue un idiota, porque el día que te toque a ti querrás la misma clemencia.",
      },
      {
        b: "texto",
        texto:
          "Housel lo aplica a sí mismo con un ejemplo que no queda bien en un libro de finanzas: cuenta que trabajó de aparcacoches en un hotel de Los Ángeles y que un cliente habitual, uno de aquellos ejecutivos que pagaban en billetes de cien, acabó arruinado. No lo cuenta como moraleja. Lo cuenta para decir que él estaba ahí y no lo vio venir.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Lo difícil no es ganar dinero: es saber cuándo tienes bastante" },
      {
        b: "texto",
        texto:
          "Rajat Gupta creció en un suburbio de Calcuta y llegó a dirigir McKinsey. Bernie Madoff tenía un negocio de intermediación legal y rentable antes del fraude. Los dos lo perdieron todo por querer más de lo que ya no necesitaban. Gupta, que valía cien millones, quiso ser multimillonario y pasó información privilegiada; acabó en la cárcel.",
      },
      {
        b: "texto",
        texto:
          "Housel usa una escena que le contó el escritor Kurt Vonnegut. En la fiesta de un multimillonario, Joseph Heller le comentó a Vonnegut que él tenía algo que aquel hombre nunca tendría: bastante. La palabra es el centro de este capítulo, y no es una llamada a la austeridad. Es una advertencia sobre la aritmética.",
      },
      {
        b: "idea",
        texto:
          "Arriesgar lo que tienes y necesitas para conseguir lo que no tienes y no necesitas no tiene ningún sentido.",
      },
      {
        b: "texto",
        texto:
          "Y hay una razón por la que cuesta tanto ponerle un tope: la comparación no tiene techo. Un jugador de béisbol con nueve millones al año compara con uno de treinta y seis, ese compara con un gestor de fondos, y el gestor con Buffett. Cada escalón produce el mismo malestar que el anterior.",
      },
      {
        b: "texto",
        texto:
          "Así que hace falta decidir de antemano cuánto es suficiente y qué cosas no se ponen encima de la mesa por ningún dinero: la reputación, la libertad, la familia, la tranquilidad de dormir. Housel señala que quien no lo decide antes lo va a decidir en caliente, y en caliente se decide mal.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Buffett no es rico por invertir bien, sino por llevar ochenta años haciéndolo",
      },
      {
        b: "texto",
        texto:
          "Warren Buffett tiene una fortuna de decenas de miles de millones, y aquí está el dato que Housel considera el más importante del libro: más del noventa y nueve por ciento de esa fortuna llegó después de cumplir los cincuenta años. Empezó a invertir a los diez.",
      },
      {
        b: "texto",
        texto:
          "La cuenta que lo aclara es esta. Si Buffett hubiera empezado a los treinta y se hubiera retirado a los sesenta, con la misma rentabilidad anual, tendría alrededor de doce millones. Casi todo lo demás no viene de acertar más: viene de setenta y cinco años seguidos sin interrumpir. Su habilidad es invertir; su secreto es el tiempo.",
      },
      {
        b: "texto",
        texto:
          "Housel lo compara con los glaciares. Las eras glaciales no las provocaron inviernos terribles, sino veranos suaves de más: se quedaba un poco de nieve sin derretir, y ese poco, acumulado durante miles de años, esculpió los continentes. Ningún fenómeno espectacular; una cantidad ridícula que nunca se interrumpió.",
      },
      {
        b: "idea",
        texto:
          "El interés compuesto no premia lo bueno, premia lo largo. Y por eso casi nadie lo aprovecha.",
      },
      {
        b: "texto",
        texto:
          "De ahí sale la única regla de inversión que da: buenos resultados sostenidos durante muchísimo tiempo baten a resultados espectaculares que se cortan. Y explica por qué es tan difícil: el rendimiento medio anual no se parece nada al de ningún año concreto, así que el que quiere resultados dentro de treinta años tiene que aguantar tres décadas de resultados que no lo parecen.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Casi todo el dinero de una vida se gana en un puñado de días" },
      {
        b: "texto",
        texto:
          "En 2018 Amazon subió un treinta y cinco por ciento en un año, y aquella subida explicó por sí sola más de seis puntos del índice de las quinientas mayores empresas americanas. Amazon lo consiguió con dos productos, los libros y su nube de servidores. Todo lo demás —el teléfono que fracasó, la agenda de viajes, el restaurante— fue ruido.",
      },
      {
        b: "texto",
        texto:
          "Housel sostiene que esto es la norma y no la excepción. Un fondo de capital riesgo saca casi todo su beneficio de una empresa de cada cien. Walt Disney rodó más de cuatrocientos cortos que perdían dinero antes de Blancanieves, que en seis meses ganó ocho millones de dólares y cambió la empresa entera. Y en el mercado americano de los últimos cien años, quien se hubiera perdido los mejores días habría perdido la mayor parte de la rentabilidad.",
      },
      {
        b: "idea",
        texto:
          "Puedes equivocarte la mitad de las veces y aun así ganar, si las veces que aciertas no las cortas pronto.",
      },
      {
        b: "texto",
        texto:
          "El problema es que esos días buenos no se sabe cuáles son hasta después, y llegan casi siempre pegados a los peores. Por eso salir para volver a entrar cuando escampe suele costar mucho más que aguantar.",
      },
      {
        b: "texto",
        texto:
          "Y aquí está la vuelta que le da al concepto de fracaso: si el resultado depende de unos pocos aciertos enormes, entonces perder pequeño y a menudo no es un fallo del sistema, es cómo funciona el sistema. Lo que hay que evitar no es equivocarse, es equivocarse tan fuerte que te obligue a abandonar la partida.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "La riqueza es lo que no ves, y por eso nadie la copia" },
      {
        b: "texto",
        texto:
          "Housel distingue dos cosas que solemos confundir. Ser rico es tener ingresos altos: un coche de setenta mil euros lo demuestra. Tener riqueza es lo contrario, es el dinero que no se ha gastado, y por definición no se ve. El del coche caro puede tener menos riqueza que el vecino del utilitario, y no hay manera de saberlo desde la acera.",
      },
      {
        b: "texto",
        texto:
          "Cuenta la paradoja del hombre en el coche deportivo: cuando ves pasar uno, nunca piensas qué envidia le tengo al conductor, piensas qué bien me vería yo ahí. Nadie admira al dueño; todos se imaginan a sí mismos. Quien compra el coche para que lo admiren está pagando por algo que no ocurre.",
      },
      {
        b: "idea",
        texto:
          "La riqueza son las compras que no hiciste. Como no se ven, tampoco se aprenden mirando a nadie.",
      },
      {
        b: "texto",
        texto:
          "De ahí sale su definición de para qué sirve el dinero, que es la frase con la que más se le cita: la mayor rentabilidad que paga es poder decidir qué haces, cuándo, dónde y con quién. Los estudios sobre bienestar que menciona apuntan a lo mismo, y es también lo que dicen las enfermeras de cuidados paliativos: nadie se arrepiente al final de no haber ganado más.",
      },
      {
        b: "texto",
        texto:
          "Por eso defiende una tasa de ahorro alta sin objetivo concreto y un margen de seguridad generoso. Ahorrar sin plan tiene mala prensa y es lo que compra lo importante: tiempo, opciones y la posibilidad de esperar a que pase lo malo sin vender lo bueno.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro sostiene que el dinero es un asunto de conducta y no de conocimiento, y de ahí no se mueve. Cada uno decide con la vida que le tocó, la suerte pesa más de lo que se admite, casi todo el resultado se juega en unos pocos días, y lo único que hace ricos a los normales es no interrumpir el interés compuesto. Lo que hay que gestionar, entonces, no es la cartera: es a uno mismo.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta es la mezcla de tono y prueba. Housel no da consejos de inversión y sin embargo deja cifras que se recuerdan: los ocho millones del conserje, el uno entre un millón de Bill Gates, el noventa y nueve por ciento de la fortuna de Buffett después de los cincuenta. Son diecinueve capítulos cortos e independientes, escritos para que se puedan contar en una cena, y esa forma es medio libro.",
      },
      {
        b: "idea",
        texto:
          "Puedes saberlo todo de finanzas y arruinarte, y no saber nada y morir rico. La diferencia es el comportamiento.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla. El libro está escrito desde el mercado americano y desde una época concreta: cien años en los que la bolsa de Estados Unidos subió como no lo ha hecho ninguna otra. Aguantar y no vender ha sido la estrategia ganadora ahí; a un japonés que comprara en 1989 le habría costado más de treinta años volver a ver su dinero. Housel menciona el sesgo, pero sigue razonando sobre esas series.",
      },
      {
        b: "texto",
        texto:
          "Y hay un límite del que se habla poco. Casi todo el consejo —ahorra sin objetivo, guarda margen, deja pasar treinta años— supone un ingreso estable y un excedente. Quien llega justo a fin de mes no tiene un problema de psicología del dinero, tiene un problema de cantidad de dinero, y ese el libro no lo trata.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   Padre rico, padre pobre, en ocho páginas.

   El libro más vendido de finanzas personales de la historia y también el
   más discutido, así que la conclusión tiene trabajo: hay que contar lo que
   enseña y decir a la vez que el padre rico probablemente no existió y que
   los consejos concretos son malos. Regla 5, y aquí es imprescindible.

   Segunda persona —regla 7—, porque el libro es práctico y porque Kiyosaki
   escribe así.
   -------------------------------------------------------------------------- */

const PADRE_RICO: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Dos hombres con el mismo sueldo y consejos opuestos sobre el dinero" },
      {
        b: "texto",
        texto:
          "Robert Kiyosaki cuenta que creció con dos padres. El biológico era doctorado, jefe de educación del estado de Hawái, y murió con las facturas sin pagar. El otro era el padre de su mejor amigo, que dejó los estudios a los trece años y acabó siendo uno de los hombres más ricos del archipiélago. Los dos trabajaban mucho y los dos ganaban bien.",
      },
      {
        b: "texto",
        texto:
          "Las frases que decían eran simétricas y por eso el libro las usa todo el rato. Uno decía no puedo permitírmelo; el otro, cómo puedo permitírmelo. Uno decía estudia mucho para encontrar una buena empresa; el otro, estudia mucho para poder comprar una buena empresa. Uno decía que la casa era su mayor inversión; el otro, que la casa era un gasto.",
      },
      {
        b: "idea",
        texto:
          "«No puedo permitírmelo» cierra la conversación. «¿Cómo podría permitírmelo?» obliga al cerebro a trabajar.",
      },
      {
        b: "texto",
        texto:
          "La tesis del libro es que la escuela enseña a leer, a escribir y a calcular, y no enseña nada sobre el dinero, así que la mayoría sale a la vida con la única estrategia que ha visto en casa: estudiar, encontrar un empleo estable y ahorrar. Kiyosaki sostiene que esa estrategia funcionaba para una generación que ya no está.",
      },
      {
        b: "texto",
        texto:
          "El recorrido de este resumen es ese: qué separa un activo de un pasivo, por qué un sueldo alto no hace rico a nadie, qué hace la gente rica con el dinero antes de gastárselo, y por qué el miedo es el motor de casi todas las decisiones financieras. La conclusión dice también dónde falla, que en este libro es mucho.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Un activo mete dinero en tu bolsillo; un pasivo lo saca" },
      {
        b: "texto",
        texto:
          "Kiyosaki dice que si solo se pudiera aprender una cosa de todo el libro, sería esta distinción, y la define de la manera más basta posible a propósito. Un activo es cualquier cosa que te ingresa dinero cada mes aunque no trabajes. Un pasivo es cualquier cosa que te lo saca. No hay más.",
      },
      {
        b: "texto",
        texto:
          "Con esa regla, muchas cosas cambian de columna. La casa en la que vives, con su hipoteca, su comunidad, su IBI y su caldera, es un pasivo mientras no te ingrese nada. El coche, evidentemente. Y aquí está el motivo por el que el libro escandalizó tanto: llamar pasivo a la vivienda propia iba contra lo que decía todo el mundo en 1997.",
      },
      {
        b: "texto",
        texto:
          "En la columna de activos, según él, entran unas pocas cosas concretas:",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Negocios", texto: "que funcionan sin que tú tengas que estar presente." },
          { fuerte: "Acciones y bonos", texto: "y participaciones en fondos." },
          { fuerte: "Inmuebles alquilados", texto: "que rentan más de lo que cuestan." },
          { fuerte: "Derechos", texto: "de propiedad intelectual, patentes o licencias." },
        ],
      },
      {
        b: "idea",
        texto:
          "La gente rica compra activos. La clase media compra pasivos creyendo que son activos.",
      },
      {
        b: "texto",
        texto:
          "La consecuencia práctica que saca es sencilla de decir y difícil de hacer: dedica cada mes una parte de lo que entra a comprar cosas de la primera columna, antes de gastar en las de la segunda.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "La carrera de la rata no se gana corriendo más deprisa" },
      {
        b: "texto",
        texto:
          "El patrón que describe es reconocible. Alguien empieza a trabajar y gana lo justo. Le suben el sueldo y se compra un coche mejor. Le suben otra vez y cambia de piso, con una hipoteca más grande. Los ingresos han subido, los gastos han subido lo mismo, y el margen sigue siendo cero. Kiyosaki lo llama la carrera de la rata.",
      },
      {
        b: "texto",
        texto:
          "El motor de esa rueda es lo que él llama el miedo y el deseo trabajando en pareja. El miedo a no llegar a fin de mes te hace aceptar el trabajo; el deseo de vivir como quien gana lo que tú ganas te hace gastar lo que entra. Cuando aparece más dinero, el ciclo no se rompe: se agranda.",
      },
      {
        b: "idea",
        texto:
          "Un aumento de sueldo no te saca de la rueda: hace la rueda más grande y te deja igual de dentro.",
      },
      {
        b: "texto",
        texto:
          "De ahí su insistencia en distinguir entre trabajar por dinero y hacer que el dinero trabaje. Y de ahí también su idea de la independencia financiera, que define de una forma medible: eres libre el día en que los ingresos de tus activos cubren tus gastos mensuales. No hace falta ser rico, hace falta que se crucen dos líneas.",
      },
      {
        b: "texto",
        texto:
          "Añade un detalle sobre los impuestos y las sociedades que conviene coger con pinzas, porque depende del país: sostiene que el asalariado paga impuestos primero y gasta después, mientras que quien tiene una sociedad puede gastar en cosas del negocio antes de tributar. En España la cosa no funciona así de fácil, pero la observación de fondo —que quien conoce las reglas juega mejor— se sostiene.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Págate a ti primero, aunque te falte para pagar a los demás" },
      {
        b: "texto",
        texto:
          "El consejo con el que más se le identifica es este, y lo cuenta de la manera más provocadora que puede. Cuando llega dinero, lo primero que se aparta es la parte que va a comprar activos. Después se pagan las facturas. No al revés.",
      },
      {
        b: "texto",
        texto:
          "Y sostiene, sabiendo que suena mal, que si al llegar a las facturas no queda bastante, la presión es buena: obliga a buscar la manera de generar el dinero que falta en vez de rebajar la aportación. Su argumento es que quien primero paga a todos y ahorra lo que sobra no ahorra nunca, porque nunca sobra.",
      },
      {
        b: "idea",
        texto:
          "Lo que no se aparta primero no se aparta. Y lo que se aparta primero enseña a buscarse la vida para lo demás.",
      },
      {
        b: "texto",
        texto:
          "Junto a eso pone lo que llama las cuatro inteligencias que hay que trabajar, y que en el fondo son las cuatro asignaturas que la escuela no da: contabilidad —saber leer números—, inversión, entender los mercados y conocer la ley. Su argumento es que nadie te va a proteger de un mal negocio si tú no eres capaz de leer sus cuentas.",
      },
      {
        b: "texto",
        texto:
          "Insiste también en algo que suena raro en un libro de dinero: recomienda trabajar para aprender y no para cobrar, sobre todo de joven. Él mismo cuenta que se metió a vender fotocopiadoras para perder el miedo a que le dijeran que no, no porque le gustara vender.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Los que no invierten no es que no sepan: es que tienen miedo" },
      {
        b: "texto",
        texto:
          "Kiyosaki dedica una parte del libro a lo que llama los cinco obstáculos, y su tesis es que el problema casi nunca es de información. Está todo publicado. El problema es que el dinero mueve emociones y las emociones deciden antes.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "El miedo a perder", texto: "que hace vender en el peor momento, justo cuando todo baja." },
          { fuerte: "El cinismo", texto: "las dudas prestadas, casi siempre de alguien que tampoco lo ha hecho." },
          { fuerte: "La pereza", texto: "que casi nunca parece pereza: se disfraza de estar muy ocupado." },
          { fuerte: "Los malos hábitos", texto: "y el principal es pagarse a uno mismo el último." },
          { fuerte: "La arrogancia", texto: "creer que lo que no sabes no importa, que es lo que más caro sale." },
        ],
      },
      {
        b: "texto",
        texto:
          "Sobre el primero da un matiz que sí resiste: perder dinero forma parte de invertir, y la diferencia entre quien acaba ganando y quien no es cuánto tarda en recuperarse del golpe. Cuenta que las pérdidas de sus primeros años fueron su formación, y que le salieron más baratas que un máster.",
      },
      {
        b: "idea",
        texto:
          "Nadie se hace rico sin perder dinero alguna vez. La cuestión es si el golpe te enseña o te retira.",
      },
      {
        b: "texto",
        texto:
          "Sobre el cinismo hace una observación que se ha vuelto más cierta con los años: la mayoría de las razones para no hacer algo con el dinero las hemos oído de gente que no ha hecho nada con el suyo. Merece la pena mirar de dónde viene cada consejo, incluidos los de este libro.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "El trabajo enseña una cosa y hay que ir a aprender las otras cuatro" },
      {
        b: "texto",
        texto:
          "La otra idea que sostiene el libro es que el sistema educativo produce especialistas —gente que sabe muchísimo de una cosa— y que para manejar dinero hace falta lo contrario: saber un poco de bastantes. Su lista es corta y concreta: contar, vender, entender de mercados y entender de leyes.",
      },
      {
        b: "texto",
        texto:
          "La que más subraya es vender, y no por gusto. Sostiene que la diferencia entre un buen profesional que gana poco y otro que gana mucho casi nunca está en el oficio, sino en si sabe explicar lo que hace y llegar a quien lo necesita. Su ejemplo es el de la escritora a la que le dicen que escribe muy bien y no vende: le falta una segunda habilidad, no una primera.",
      },
      {
        b: "idea",
        texto:
          "El mundo no paga por lo bueno que eres, paga por lo bien que consigues que se sepa.",
      },
      {
        b: "texto",
        texto:
          "De ahí su consejo de elegir los trabajos de los veinte y los treinta por lo que enseñan y no por lo que pagan, y de cambiar cuando se acaba el aprendizaje. Y de ahí también su preferencia por empezar con algo pequeño y propio en paralelo al empleo, para equivocarse cuando equivocarse todavía es barato.",
      },
      {
        b: "texto",
        texto:
          "Es la parte del libro que mejor ha envejecido, quizá porque no depende de ningún régimen fiscal ni de ningún mercado inmobiliario: aprender a explicarse y saber leer unas cuentas sirve en cualquier país y en cualquier década.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Kiyosaki no enseña a invertir: enseña a mirar el dinero de otra manera",
      },
      {
        b: "texto",
        texto:
          "Conviene decir qué no hay en el libro, porque mucha gente lo abre esperándolo. No hay una sola estrategia detallada, ni un cálculo, ni una comparación entre productos, ni una tabla. Los pocos casos concretos que cuenta —comprar pisos embargados, revenderlos en cuestión de días— son ejemplos de otra época y de otro país.",
      },
      {
        b: "texto",
        texto:
          "Lo que hay es un cambio de encuadre, repetido de cien maneras: mira de dónde viene tu dinero y adónde va, distingue lo que te ingresa de lo que te cuesta, deja de medir tu situación por el sueldo y empieza a medirla por cuánto tiempo aguantarías sin él.",
      },
      {
        b: "idea",
        texto:
          "La pregunta no es cuánto ganas, es cuántos meses podrías vivir mañana si dejaras de ganarlo.",
      },
      {
        b: "texto",
        texto:
          "Ese es también el motivo por el que el libro sigue vendiendo casi treinta años después mientras casi todos los manuales de finanzas de 1997 han desaparecido. No envejece porque no dice nada que pueda quedarse anticuado. Lo que da es vocabulario: activo, pasivo, carrera de la rata, pagarse primero. Y el vocabulario cambia lo que se ve.",
      },
      {
        b: "texto",
        texto:
          "Quien busque qué hacer con sus ahorros el mes que viene, este no es su libro y le vendrá mejor cualquier manual de fondos indexados. Quien nunca se haya parado a pensar por qué sube el gasto cada vez que sube el sueldo, aquí encontrará esa conversación.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro dice una cosa y la repite: la escuela no enseña nada sobre dinero, y lo poco que sabemos lo copiamos de nuestros padres. Frente a eso propone un vocabulario mínimo —activo y pasivo— y una regla de conducta —apartar primero lo que compra activos— y sostiene que quien entiende esas dos cosas juega a otro juego, gane lo que gane.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta es haber puesto la educación financiera en la conversación de gente que nunca habría abierto un libro de economía. Cuarenta millones de ejemplares es una cifra que ningún manual serio ha rozado, y buena parte de lo que hoy se da por sabido —que la casa propia no es una inversión, que el sueldo alto no protege de nada— entró por aquí.",
      },
      {
        b: "idea",
        texto:
          "Un sueldo alto y un patrimonio son cosas distintas. Confundirlos es lo que mantiene a mucha gente corriendo en la rueda.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla, y es una lista larga. El padre rico probablemente no existió: nadie ha conseguido identificarlo, el propio Kiyosaki ha dado versiones distintas sobre si era real o un recurso narrativo, y periodistas que investigaron su biografía encontraron que el patrimonio anterior al libro no cuadraba con lo que cuenta. El libro se presenta como memoria y se lee mejor como parábola.",
      },
      {
        b: "texto",
        texto:
          "Y los consejos concretos son malos o peligrosos: recomienda deuda agresiva, desprecia los fondos indexados —que es lo que mejor le ha ido a la gente normal en estos treinta años—, ridiculiza el ahorro y minimiza el riesgo del inmobiliario apalancado, tres años antes de una crisis que arruinó a quien le hizo caso. La empresa que organizaba sus seminarios acabó en quiebra tras una demanda. Se lee por el encuadre; para las decisiones, hay que buscar en otro sitio.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   Cómo ganar amigos e influir sobre las personas, en ocho páginas.

   De 1936, y el problema del resumen es que todo el mundo cree que ya sabe
   lo que dice: sonría, recuerde nombres. Así que se cuenta lo que hay
   debajo, que es una tesis bastante dura sobre la crítica y sobre por qué
   no funciona nunca.

   Segunda persona —regla 7—. Y en la conclusión, la parte incómoda: el
   libro se puede usar para manipular y Carnegie lo sabía.
   -------------------------------------------------------------------------- */

const AMIGOS_INFLUIR: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "El peor criminal de Nueva York se consideraba un buen hombre" },
      {
        b: "texto",
        texto:
          "En 1931, la policía de Nueva York acorraló a Francis Crowley en un piso de la Quinta Avenida. Había matado a un agente que le pidió el carné. Mientras ciento cincuenta policías disparaban contra las ventanas, él escribía una carta. Decía: bajo mi ropa hay un corazón cansado, pero bueno, un corazón que no le haría daño a nadie.",
      },
      {
        b: "texto",
        texto:
          "Dale Carnegie recogió también lo que dijo Al Capone —he pasado los mejores años de mi vida dando placer a la gente, y todo lo que recibo son insultos— y lo que decía el director de Sing Sing: que casi ninguno de sus presos se consideraba culpable de nada. Todos tenían su explicación.",
      },
      {
        b: "idea",
        texto:
          "Si los peores asesinos del país se creen buena gente, ¿qué probabilidad hay de que tu crítica convenza a alguien normal?",
      },
      {
        b: "texto",
        texto:
          "De ahí sale el libro entero, y conviene decirlo porque la fama lo ha convertido en un manual de sonrisas. Su tesis es que la crítica no corrige: pone al otro a defenderse. Que la gente no se mueve por razones sino por lo que quiere y por cómo se siente. Y que casi todo trato humano falla por lo mismo: hablamos de lo que nos interesa a nosotros.",
      },
      {
        b: "texto",
        texto:
          "Carnegie lo escribió después de quince años dando clases nocturnas a comerciantes y vendedores en Nueva York, probando cada consejo en un aula. El recorrido de este resumen es ese: primero por qué la crítica no funciona, después qué mueve de verdad a la gente, después cómo se cambia de opinión a alguien sin humillarlo. La conclusión dice también dónde falla, que tiene un punto muy discutible.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Criticar a alguien solo consigue que se defienda mejor" },
      {
        b: "texto",
        texto:
          "La primera regla del libro es no criticar, no condenar y no quejarse, y Carnegie la sostiene con un argumento práctico: la crítica no cambia la conducta, cambia la relación. El otro no revisa lo que ha hecho, busca la razón por la que tenía derecho a hacerlo. Y la encuentra, porque todos la encontramos.",
      },
      {
        b: "texto",
        texto:
          "Usa un ejemplo de Lincoln. De joven publicaba cartas anónimas burlándose de sus rivales, hasta que uno lo descubrió y lo retó a duelo; se libró por poco y no volvió a hacerlo en su vida. Después, siendo presidente, escribió una carta durísima al general Meade por dejar escapar al ejército de Lee tras Gettysburg, cuando la guerra podía haber terminado. La carta se encontró entre sus papeles al morir. Nunca la envió.",
      },
      {
        b: "idea",
        texto:
          "Cualquier tonto puede criticar, condenar y quejarse. Y casi todos los tontos lo hacen.",
      },
      {
        b: "texto",
        texto:
          "La segunda regla es la contraria: aprecio honrado y sincero. Carnegie distingue con cuidado entre aprecio y adulación, y la distinción es sencilla: uno sale del corazón y el otro de la boca, uno es desinteresado y el otro es egoísta. La adulación se nota, y cuando se nota estropea más de lo que arregla.",
      },
      {
        b: "texto",
        texto:
          "Detrás está lo que él considera el hambre más profunda de las personas, y cita a William James: el deseo de ser apreciado. Es lo único que casi nunca damos gratis y lo único que casi nadie tiene bastante.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "A nadie le importa lo que tú quieres, y eso incluye a tus clientes" },
      {
        b: "texto",
        texto:
          "La tercera regla del libro es la que Carnegie considera el resumen de todo: despertar en el otro un deseo vehemente. Su ejemplo favorito es de pesca. A él le gustan las fresas con nata, pero cuando va a pescar no pone fresas en el anzuelo: pone un gusano, porque es lo que le gusta al pez.",
      },
      {
        b: "texto",
        texto:
          "Y lo aplica a la vida diaria de forma bastante brutal. Si quieres que tu hijo deje de fumar, no le sermonees sobre el cáncer: dile que así no va a poder correr en el equipo. Si quieres que un cliente te compre, no le cuentes tus años de experiencia: cuéntale qué problema suyo se acaba mañana.",
      },
      {
        b: "idea",
        texto:
          "Solo hay una manera de conseguir que alguien haga algo: que quiera hacerlo. Y quiere lo suyo, no lo tuyo.",
      },
      {
        b: "texto",
        texto:
          "Cuenta el caso de Andrew Carnegie con sus sobrinos, que estaban en la universidad y no escribían nunca a su madre. Apostó a que conseguía respuesta a vuelta de correo sin pedirla. Les escribió una carta cariñosa y añadió al final, de pasada, que les mandaba cinco dólares a cada uno. Después no metió el dinero en el sobre. Llegaron dos cartas dándole las gracias por su amable carta y diciendo que se le había olvidado algo.",
      },
      {
        b: "texto",
        texto:
          "La lección que extrae no es la travesura, sino el método: antes de pedir nada, dedicar un rato a mirar el asunto desde el punto de vista del otro. Carnegie sostiene que quien sepa hacer eso tiene el futuro asegurado, y que casi nadie se molesta.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Interesarse por el otro consigue en dos meses lo que dos años de intentar interesarle",
      },
      {
        b: "texto",
        texto:
          "La segunda parte del libro son seis maneras de gustar a la gente, y Carnegie las abre con una frase que ha resistido bien: se hacen más amigos en dos meses interesándose de verdad por los demás que en dos años intentando que los demás se interesen por uno.",
      },
      {
        b: "texto",
        texto:
          "Su modelo es un perro. Un perro se pone contento de verte sin haber leído nada de psicología y sin querer venderte nada, y por eso lleva miles de años ganándose la vida sin trabajar. La observación de fondo es que el interés no se finge: o hay curiosidad por el otro o no la hay.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Interésate de verdad", texto: "por lo que le pasa a la otra persona, no por lo que puede darte." },
          { fuerte: "Sonríe", texto: "porque una cara que se alegra de verte dice más que cualquier presentación." },
          { fuerte: "Usa su nombre", texto: "que para cada uno es la palabra más agradable del idioma." },
          { fuerte: "Escucha y pregunta", texto: "y anímale a hablar de sí mismo, que es su tema favorito." },
          { fuerte: "Habla de lo suyo", texto: "de lo que le interesa a él, no de lo que dominas tú." },
          { fuerte: "Hazle sentir importante", texto: "y hazlo en serio, que es lo difícil." },
        ],
      },
      {
        b: "idea",
        texto:
          "El nombre de una persona es, para ella, el sonido más dulce e importante que existe en cualquier idioma.",
      },
      {
        b: "texto",
        texto:
          "Sobre escuchar cuenta una cena en la que se pasó horas oyendo a un botánico y se marchó con fama de conversador extraordinario, habiendo dicho casi nada. Es su prueba de que un buen conversador no es el que habla bien: es el que pregunta y no interrumpe.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "La única manera de ganar una discusión es no tenerla" },
      {
        b: "texto",
        texto:
          "La tercera parte trata de cómo cambiar de opinión a alguien, y empieza demoliendo el método habitual. Carnegie sostiene que en una discusión no se puede ganar: si pierdes, pierdes; y si ganas, también pierdes, porque has dejado al otro humillado y con sus convicciones intactas. Le has hecho sentir inferior, y nadie cambia de idea desde ahí.",
      },
      {
        b: "texto",
        texto:
          "De ahí salen dos reglas incómodas. La primera: nunca digas a alguien que está equivocado. Ni con esas palabras ni con un gesto ni con un tono. Decir voy a demostrarte que te equivocas es empezar diciendo soy más listo que tú, y a partir de ese momento ya no se discute del tema sino del orgullo.",
      },
      {
        b: "texto",
        texto:
          "La segunda es la contraria y es la que casi nadie usa: si te equivocas, admítelo rápido y con energía, antes de que te lo digan. Carnegie cuenta que paseaba a su perro sin correa por un parque donde estaba prohibido, y que cuando el guardia lo pilló por segunda vez se adelantó y se acusó a sí mismo sin excusas. El guardia acabó defendiéndolo y diciéndole que lo dejara correr al otro lado de la colina.",
      },
      {
        b: "idea",
        texto:
          "Diciendo de ti mismo lo peor que el otro pensaba decirte, le quitas el argumento y casi siempre acaba defendiéndote.",
      },
      {
        b: "texto",
        texto:
          "El resto del método va en la misma dirección: empezar de manera amistosa, conseguir que el otro diga sí desde el principio en cosas pequeñas, dejar que hable él la mayor parte del tiempo y —la más difícil— dejar que la idea le parezca suya. Sobre esto último es tajante: nadie defiende una idea con tantas ganas como la que cree que ha tenido él.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Se corrige mejor por el «y» que por el «pero»" },
      {
        b: "texto",
        texto:
          "La última parte del libro es la más útil para quien manda sobre alguien, y son nueve maneras de corregir sin ofender. La primera es empezar con elogio sincero, y enseguida avisa de la trampa en la que cae todo el mundo: el pero.",
      },
      {
        b: "texto",
        texto:
          "Estamos muy orgullosos de tus notas de este trimestre, pero si te hubieras esforzado en matemáticas… El elogio se convierte en el preámbulo de la bronca, y a partir de la segunda vez ya nadie se cree la primera mitad. Su corrección es cambiar una palabra: estamos orgullosos de tus notas, y si sigues así el trimestre que viene las de matemáticas van a estar a la altura de las demás.",
      },
      {
        b: "idea",
        texto:
          "Cambia «pero» por «y», y un reproche disfrazado se convierte en un empujón.",
      },
      {
        b: "texto",
        texto:
          "Las demás siguen la misma lógica de no dejar al otro sin salida. Menciona tus propios errores antes de señalar los de él. Pregunta en vez de dar órdenes, que la gente acepta mucho mejor una decisión en la que ha participado. Deja que el otro salve las apariencias, sobre todo cuando tienes razón. Y elogia el más pequeño progreso, no solo el resultado final.",
      },
      {
        b: "texto",
        texto:
          "La que mejor resume la parte es dar al otro una buena reputación que mantener. Carnegie cuenta el caso de una mujer que contrató a una empleada y le dijo desde el primer día que la casa quedaba en manos de alguien ordenado y cuidadoso. Y observa que la gente hace esfuerzos considerables por no desmentir la idea que otro se ha hecho de ella.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Casi todo el libro se resume en dejar de hablar de uno mismo" },
      {
        b: "texto",
        texto:
          "Si se apilan las treinta reglas, debajo hay una sola instrucción repetida: quítate del centro. No critiques, porque criticar es poner tu criterio por delante. Interésate, escucha, pregunta, usa su nombre, habla de lo suyo, deja que la idea parezca suya, deja que salve la cara. Todo consiste en devolverle el foco al otro.",
      },
      {
        b: "texto",
        texto:
          "Carnegie sostiene que esto no es amabilidad sino aritmética. La persona con la que hablas está pensando en sus asuntos, igual que tú en los tuyos; según sus propias cuentas de aula, la mayoría de la gente piensa en sí misma la mayor parte del día. Quien entra en una conversación con eso en la cabeza tiene una ventaja enorme, y no hace falta ningún talento especial.",
      },
      {
        b: "idea",
        texto:
          "No hay ningún truco: la ventaja es acordarse de que el otro también está en el centro de su propia vida.",
      },
      {
        b: "texto",
        texto:
          "También avisa de que estas cosas no funcionan como fórmulas. Repite varias veces que si se aplican como técnicas, sin interés real, se notan enseguida y salen peor que no hacer nada. Su instrucción para leer el libro es que no basta con leerlo: hay que releer cada capítulo y probarlo con alguien concreto durante una semana.",
      },
      {
        b: "texto",
        texto:
          "Ese es también el motivo de su forma: cada regla viene con tres o cuatro casos reales de sus alumnos, gente con nombre y apellido que vendía maquinaria o alquilaba pisos. No es un libro de ideas, es un cuaderno de campo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro sostiene que la crítica es inútil porque nadie se cree culpable, que la gente actúa por lo que quiere y por cómo se siente, y que casi todo trato humano mejora en cuanto uno deja de hablar de sí mismo. Sus treinta reglas son variaciones de eso, probadas una por una en clases nocturnas antes de escribirse.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta es haber inventado el género. Antes de 1936 no existían los libros que enseñan a tratar con la gente, y noventa años después las tres cosas que más se citan de cualquier manual de ventas, de liderazgo o de negociación siguen estando aquí. Que buena parte suene a obvia es la prueba de hasta qué punto ganó: era nuevo, y ahora es el aire.",
      },
      {
        b: "idea",
        texto:
          "Se hacen más amigos en dos meses interesándose por los demás que en dos años intentando que se interesen por uno.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla, y hay dos cosas. La primera es la que el propio Carnegie no resuelve: todo el método sirve igual para acercarse a alguien de buena fe que para llevárselo al huerto, y la única diferencia que ofrece es la sinceridad, que no se puede comprobar desde fuera. Un manual que insiste en que hay que ser sincero es un manual que sabe que se puede usar sin serlo.",
      },
      {
        b: "texto",
        texto:
          "La segunda es de época. Carnegie escribe para un mundo de vendedores, jefes y clientes en el que evitar el conflicto siempre es mejor, y hay situaciones en las que no lo es: cuando hace falta decir que algo está mal hecho, cuando la discrepancia es el asunto, cuando el otro está abusando. El libro no tiene página para eso, y quien lo lea como sistema completo acabará confundiendo estar de acuerdo con llevarse bien.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   Piense y hágase rico, en ocho páginas.

   De 1937, en plena Depresión, y es el abuelo de todo el género. El
   problema del resumen es que la mitad del libro es misticismo —la mente
   infinita, la transmutación sexual, el consejo invisible de nueve hombres
   imaginarios— y la otra mitad son cosas que hoy se enseñan en cualquier
   curso de objetivos.

   Se cuenta entero, sin blanquearlo, y la conclusión dice lo que hay que
   decir: que la investigación de las quinientas entrevistas nunca ha
   aparecido y que el sesgo de supervivencia lo atraviesa de arriba abajo.
   -------------------------------------------------------------------------- */

const PIENSA_HAZTE_RICO: PaginaLibro[] = [
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Un buscador de oro vendió su mina y el que la compró encontró la veta a un metro",
      },
      {
        b: "texto",
        texto:
          "R. U. Darby y su tío cavaron durante meses en Colorado hasta encontrar oro. Reunieron dinero, compraron maquinaria y sacaron un primer cargamento. Después la veta desapareció. Cavaron un poco más, se rindieron y vendieron los equipos a un chatarrero por unos cientos de dólares. El chatarrero llamó a un ingeniero de minas, que le dijo que allí había una falla y que la veta seguiría a un metro del punto donde habían parado. Estaba.",
      },
      {
        b: "texto",
        texto:
          "Napoleon Hill abre así porque la historia le sirve para su tesis: casi nadie fracasa por falta de capacidad, fracasa por parar. Y Darby, que después se hizo rico vendiendo seguros, decía que su fortuna venía de haberse acordado toda la vida de aquel metro.",
      },
      {
        b: "idea",
        texto:
          "El fracaso tiene la costumbre de aparecer justo antes del resultado. Por eso funciona tan bien: llega cuando ya estás cansado.",
      },
      {
        b: "texto",
        texto:
          "Hill cuenta que Andrew Carnegie le encargó en 1908 estudiar a los hombres más ricos de Estados Unidos para averiguar qué tenían en común, y que dedicó veinte años a entrevistarlos. De ahí salieron trece principios, publicados en 1937, cuando el país llevaba ocho años de Depresión y hacía falta que alguien dijera que se podía salir.",
      },
      {
        b: "texto",
        texto:
          "El recorrido de este resumen es ese: por qué el punto de partida es un deseo con cifra y fecha, qué hace la fe con una idea repetida, por qué el conocimiento especializado importa menos de lo que parece, y qué es un cerebro colectivo. La conclusión dice también dónde falla, que en este libro hace falta contarlo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Querer ser rico no sirve de nada: hay que decir cuánto y cuándo" },
      {
        b: "texto",
        texto:
          "El primer principio es el deseo, y Hill lo separa de lo que él llama un simple anhelo. Todo el mundo desea tener más dinero. Lo que casi nadie hace es escribir la cantidad exacta, la fecha exacta y lo que va a entregar a cambio, porque eso obliga a comprometerse con algo comprobable.",
      },
      {
        b: "texto",
        texto:
          "Su procedimiento tiene seis pasos y es el antepasado de todos los métodos de objetivos que vinieron después:",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "La cifra", texto: "exacta. Nada de «bastante» ni de «mucho más»." },
          { fuerte: "El precio", texto: "qué vas a dar a cambio, porque no hay nada gratis." },
          { fuerte: "La fecha", texto: "el día en que lo quieres tener." },
          { fuerte: "El plan", texto: "y se empieza a ejecutar hoy, esté listo o no." },
          { fuerte: "Por escrito", texto: "las cuatro cosas anteriores, en una frase." },
          { fuerte: "Dos veces al día", texto: "leerlo en voz alta al levantarse y al acostarse." },
        ],
      },
      {
        b: "idea",
        texto:
          "Un deseo sin cifra y sin fecha no es un objetivo: es una manera educada de no decidir nada.",
      },
      {
        b: "texto",
        texto:
          "El ejemplo que usa es Edwin Barnes, que quería ser socio de Edison —no empleado, socio— y llegó a su laboratorio sin dinero, en un tren de mercancías, con ropa que parecía la de un vagabundo. Edison le dio el peor trabajo. Barnes estuvo años barriendo hasta que apareció una máquina que ningún vendedor quería y él la pidió. Acabó siendo socio.",
      },
      {
        b: "texto",
        texto:
          "Y añade la maniobra que más le gusta contar: quemar las naves. Cita a Hernán Cortés quemando sus barcos al desembarcar, y sostiene que un plan con salida de emergencia es un plan que se va a usar por la salida de emergencia.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Una idea repetida acaba pareciendo verdad, y eso se puede usar a favor",
      },
      {
        b: "texto",
        texto:
          "El segundo principio es la fe, y Hill lo explica de una manera bastante mecánica: la fe no es un don, es un estado mental que se produce repitiéndose algo hasta que el subconsciente deja de discutirlo. A eso lo llama autosugestión, y es el tercer principio.",
      },
      {
        b: "texto",
        texto:
          "Su argumento se apoya en lo evidente: si repetirse mentiras negativas funciona —y funciona, dice, porque medio país está convencido de que no vale para nada—, el mismo mecanismo debe funcionar al revés. Por eso insiste en leer el objetivo en voz alta y sintiéndolo, no leyéndolo: las palabras sin emoción, sostiene, no llegan a ninguna parte.",
      },
      {
        b: "idea",
        texto:
          "Los pensamientos que se mezclan con una emoción fuerte se quedan. Los demás pasan de largo.",
      },
      {
        b: "texto",
        texto:
          "Cuenta el caso de un niño nacido sin orejas al que los médicos dieron por sordo de por vida. Su padre se negó a aceptarlo y se pasó años repitiéndole que oiría, sin permitir jamás que se comportara como un sordo. El chico acabó oyendo por conducción ósea y trabajando en una empresa de audífonos. Hill lo cuenta como prueba de su tesis, aunque lo que demuestra sea más bien lo que hace un padre que no rebaja las expectativas.",
      },
      {
        b: "texto",
        texto:
          "Aquí está también el punto donde el libro se separa de cualquier psicología: Hill sostiene que el pensamiento repetido atrae los medios materiales para cumplirse. No dice que te ponga a trabajar más: dice que atrae. Es la semilla de todo lo que setenta años después se vendería como la ley de la atracción.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "El conocimiento no da poder: darlo por sabido cuesta dinero" },
      {
        b: "texto",
        texto:
          "El cuarto principio va contra un tópico. Hill sostiene que el conocimiento en sí no es poder, que solo lo es cuando se organiza para conseguir algo concreto. Y que da lo mismo si está en tu cabeza o en la de alguien a quien puedes llamar.",
      },
      {
        b: "texto",
        texto:
          "Su ejemplo es un juicio real. Un periódico llamó ignorante a Henry Ford y este los demandó. En el juzgado, el abogado contrario le hizo preguntas de cultura general para demostrar que no sabía nada. Ford aguantó un rato y luego dijo que tenía una fila de botones en su mesa y que apretando cualquiera aparecía alguien capaz de contestar a lo que le preguntaran, así que no veía por qué debía llenarse la cabeza de datos generales.",
      },
      {
        b: "idea",
        texto:
          "No hace falta saberlo, hace falta saber a quién preguntárselo. Lo primero es memoria; lo segundo, organización.",
      },
      {
        b: "texto",
        texto:
          "De ahí sale también su crítica a los estudios: dice que la escuela enseña conocimientos generales y no enseña a organizarlos ni a usarlos, y que por eso hay tanta gente con muchos títulos y poco dinero. Su recomendación es formarse en algo especializado y hacerlo toda la vida, no en un tramo de ella.",
      },
      {
        b: "texto",
        texto:
          "El quinto principio, la imaginación, lo divide en dos: la que combina lo que ya existe de otra manera —que es la que usa casi todo el mundo— y la que él llama creativa, que es donde vuelve el misticismo. Lo interesante es el ejemplo: un farmacéutico compró una receta y un bol viejo por quinientos dólares a un cura que necesitaba el dinero. La fórmula era la de la Coca-Cola.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Ninguna cabeza vale lo que dos cabezas puestas de acuerdo" },
      {
        b: "texto",
        texto:
          "El principio que mejor ha aguantado es el que Hill llama la mente maestra: un grupo de dos o más personas que trabajan en armonía hacia un objetivo común. Su observación es que Carnegie no sabía nada de fabricar acero, y que su fortuna venía de haber reunido a unos cincuenta hombres que sí sabían y de haberlos mantenido remando juntos durante décadas.",
      },
      {
        b: "texto",
        texto:
          "Le atribuye dos efectos. Uno económico, evidente: el grupo aporta conocimiento y contactos que tú no tienes. Y otro que llama psíquico, y que en lenguaje normal es lo que cualquiera ha notado en una buena reunión: que las ideas de uno encienden las de otro y sale algo que ninguno traía.",
      },
      {
        b: "idea",
        texto:
          "Rodéate de gente que sepa lo que tú no sabes, y ponte de acuerdo con ella. Eso es casi todo el método.",
      },
      {
        b: "texto",
        texto:
          "También avisa de lo contrario, y es de las páginas más prácticas del libro: la gente con la que pasas el rato te contagia su manera de pensar, y si esa manera es la de quien no espera nada, no hay objetivo escrito que sobreviva. Recomienda revisar las compañías con la misma frialdad con la que se revisan las cuentas.",
      },
      {
        b: "texto",
        texto:
          "El sexto principio, la decisión, va en la misma línea y es medible: Hill dice que de las quinientas personas que estudió, todas tomaban decisiones rápido y las cambiaban despacio, y que quienes fracasaban hacían justo lo contrario. Y añade una advertencia doméstica: no cuentes tus planes a quien no forme parte de ellos.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "La derrota temporal no es fracaso, y casi nadie sabe distinguirlas" },
      {
        b: "texto",
        texto:
          "La séptima idea es la persistencia, y es donde el libro vuelve al buscador de oro del principio. Hill sostiene que la mayoría abandona al primer contratiempo porque confunde una derrota temporal con el fracaso, y que la diferencia entre las dos cosas solo se ve mirando hacia atrás.",
      },
      {
        b: "texto",
        texto:
          "Da una lista de síntomas de falta de persistencia que sigue siendo incómoda de leer: no saber exactamente lo que se quiere, posponer, buscar atajos, conformarse, echar la culpa a las circunstancias, y la costumbre de buscar excusas en lugar de planes. Sostiene que se corrigen con las mismas cuatro cosas: un objetivo concreto, un deseo fuerte, un plan escrito y un grupo que empuje.",
      },
      {
        b: "idea",
        texto:
          "Antes del éxito casi siempre hay una derrota, y llega justo cuando ya no queda ganas de aguantarla.",
      },
      {
        b: "texto",
        texto:
          "En este tramo Hill mete también sus ideas más raras, y conviene decirlo. Habla de la transmutación de la energía sexual, sosteniendo que quienes triunfan canalizan ese impulso hacia el trabajo, y que por eso casi ninguno destaca antes de los cuarenta. Y describe un consejo invisible de nueve personajes históricos con los que dice reunirse cada noche en su imaginación, aunque después aclara que empezó como un ejercicio y acabó pareciéndole real.",
      },
      {
        b: "texto",
        texto:
          "Cierra con el miedo. Enumera seis —a la pobreza, a la crítica, a la enfermedad, a perder el amor, a la vejez y a la muerte— y sostiene que son estados mentales aprendidos, no hechos, y que el más caro de todos es el miedo a la crítica, porque es el que impide intentar cualquier cosa nueva delante de otros.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Casi todo el género de la autoayuda sale de este libro" },
      {
        b: "texto",
        texto:
          "Merece la pena mirar el libro por lo que produjo. El objetivo escrito con cifra y fecha, la lectura diaria en voz alta, el grupo de apoyo, la idea de que la mentalidad va antes que la técnica, la insistencia en la persistencia: todo eso estaba aquí en 1937 y desde entonces se ha reescrito mil veces, casi siempre sin citar la fuente.",
      },
      {
        b: "texto",
        texto:
          "También es el origen de la parte peor. La afirmación de que el pensamiento atrae los medios materiales, la mente infinita y el subconsciente como transmisor son de este libro, y son las que setenta años después se convertirían en un negocio enorme de vídeos y seminarios. Hill puso las dos cosas en el mismo tomo y sin separarlas.",
      },
      {
        b: "idea",
        texto:
          "Todo lo que se vende hoy como mentalidad de éxito ya estaba en un libro de la Depresión, y también lo que se vende como magia.",
      },
      {
        b: "texto",
        texto:
          "Contexto importa: se publicó cuando una cuarta parte del país estaba en paro. Vendió veinte millones de ejemplares en vida de su autor porque decía que la salida dependía de uno mismo, en un momento en que dependía de bastantes cosas más.",
      },
      {
        b: "texto",
        texto:
          "Lo que se puede aprovechar hoy son cuatro cosas, y ninguna necesita creer en nada: escribir lo que quieres con número y fecha, decidir rápido y cambiar despacio, rodearte de gente que sepa lo que no sabes y no confundir una mala racha con el final. El resto se puede leer como documento de época.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro sostiene que la riqueza empieza en una idea y que lo que separa a quien la consigue de quien no es un método: un deseo convertido en cifra y fecha, repetido hasta que deja de discutirse, apoyado en un grupo y sostenido más allá del punto en el que la mayoría abandona. Trece principios, y los cuatro primeros hacen casi todo el trabajo.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta es haber inventado un género entero. Cualquier libro de objetivos, de mentalidad o de productividad publicado después está discutiendo con este, lo sepa o no. Y algunas de sus observaciones —decidir rápido, no contar los planes a quien no forma parte de ellos, cuidar las compañías— siguen siendo buenas noventa años después.",
      },
      {
        b: "idea",
        texto:
          "Lo que la mente puede concebir y creer, sostiene Hill, lo puede conseguir. Es la frase que fundó la autoayuda entera.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla, y es serio. La investigación no existe: Hill dijo haber entrevistado a quinientos hombres ricos por encargo de Carnegie, y nunca han aparecido ni las notas, ni las entrevistas, ni un solo documento que pruebe que llegó a conocerlo. Historiadores que revisaron su biografía encontraron negocios fracasados, una escuela de publicidad cerrada y varias causas por fraude.",
      },
      {
        b: "texto",
        texto:
          "Y hay un problema de método que atraviesa el libro entero. Estudiar solo a los que triunfaron y sacar de ahí las causas del triunfo no dice nada, porque no se ha mirado a los miles que hicieron exactamente lo mismo y se arruinaron. Si a eso se le añade que la mitad de los principios son místicos, queda un libro que hay que leer sabiendo qué se coge y qué se deja.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   Los secretos de la mente millonaria, en ocho páginas.

   El argumento del libro cabe en una frase —tienes un termostato de dinero
   heredado y todo vuelve a él— y el resto son diecisiete comparaciones
   entre lo que piensa el rico y lo que piensa el pobre. Ordenarlas por
   temas evita que el resumen sea una lista de diecisiete puntos, que es
   exactamente lo que Pablo devolvió.

   Segunda persona, y en la conclusión la parte fea, que aquí es grande: la
   culpabilización del pobre y los seminarios de tres días.
   -------------------------------------------------------------------------- */

const MENTE_MILLONARIA: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Los que ganan la lotería vuelven a su nivel de siempre en unos años" },
      {
        b: "texto",
        texto:
          "T. Harv Eker abre con un fenómeno documentado: una parte grande de quienes ganan grandes premios de lotería acaban, al cabo de unos años, con un patrimonio parecido al que tenían antes. Y con el fenómeno simétrico, que es el que le interesa: hay gente que se arruina del todo y vuelve a estar donde estaba en un tiempo llamativamente corto.",
      },
      {
        b: "texto",
        texto:
          "Su explicación es una imagen que sostiene el libro entero. Cada uno lleva dentro un termostato de dinero puesto a una temperatura concreta. Si te suben por encima, harás algo —gastar de más, un negocio malo, un préstamo a quien no te lo devuelve— para volver a tu número. Si te bajan, te buscarás la vida hasta volver. La cuenta corriente sigue al termostato, no al revés.",
      },
      {
        b: "idea",
        texto:
          "Tus ingresos crecen hasta donde crezcas tú. Por eso el dinero que llega de golpe casi nunca se queda.",
      },
      {
        b: "texto",
        texto:
          "Eker cuenta que a los treinta estaba arruinado, con préstamos de su padre y una docena de negocios fallidos, y que montó una tienda de material deportivo que vendió dos años y medio después por varios millones. Su conclusión —que lo que cambió fue la manera de pensar y no la técnica— es la tesis del libro, con todo lo que eso tiene de discutible.",
      },
      {
        b: "texto",
        texto:
          "El recorrido de este resumen es ese: de dónde sale el termostato, cómo se cambia, y las diferencias concretas que él encuentra entre la manera de pensar de quien tiene dinero y de quien no. La conclusión dice también dónde falla, que aquí es importante decirlo.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Tu manera de pensar sobre el dinero la escribieron otros antes de que supieras contar",
      },
      {
        b: "texto",
        texto:
          "Eker sostiene que el termostato se instaló en la infancia, por tres vías, y que ninguna se eligió. La primera es lo que oíste: el dinero no crece en los árboles, los ricos son unos ladrones, el dinero no da la felicidad, hay que trabajar duro para ganarlo. Frases dichas de pasada, repetidas durante años, que se quedan funcionando como reglas.",
      },
      {
        b: "texto",
        texto:
          "La segunda es lo que viste. Si en tu casa el dinero era motivo de discusión, aprendiste que el dinero trae broncas. Si tu padre trabajaba doce horas y no había nunca, aprendiste que ganar cuesta la vida. Nadie te lo dijo: lo dedujiste tú, con seis años, mirando.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Lo que oíste", texto: "las frases que se decían en tu casa sobre la gente con dinero." },
          { fuerte: "Lo que viste", texto: "cómo se comportaban de verdad tus padres con lo que entraba." },
          { fuerte: "Lo que te pasó", texto: "un episodio concreto que dejó una regla escrita en piedra." },
        ],
      },
      {
        b: "idea",
        texto:
          "No estás pensando sobre el dinero: estás reproduciendo lo que oíste sobre él antes de saber leer.",
      },
      {
        b: "texto",
        texto:
          "El paso que propone es sencillo de enunciar: escribe las frases que recuerdas de tu casa, pregúntate qué te han hecho hacer, y decide si te las quieres quedar. Su punto no es que sean falsas, sino que nunca las examinaste.",
      },
      {
        b: "texto",
        texto:
          "Y añade una distinción que es de lo más útil del libro: entre ser víctima y ser responsable. La víctima explica —la crisis, el jefe, la familia—, y sus explicaciones pueden ser todas ciertas y no servir de nada. El responsable pregunta qué puede hacer con eso. Eker lo lleva demasiado lejos, como se verá al final, pero la distinción funciona.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "El que juega a no perder ya ha decidido cuánto va a ganar" },
      {
        b: "texto",
        texto:
          "La primera diferencia que señala es de objetivo. Hay quien juega al dinero para ganar y quien juega para no perder, y la segunda postura suena prudente pero fija el resultado de antemano: el que solo quiere llegar a fin de mes llega a fin de mes, y ni un euro más.",
      },
      {
        b: "texto",
        texto:
          "De ahí sale una de sus insistencias más repetidas: escribir una cifra. No un deseo de estar bien, sino un número. Eker sostiene que el cerebro no puede trabajar en una dirección que no se le ha dado, y que la mayoría nunca ha puesto por escrito cuánto quiere ganar ni cuánto quiere tener.",
      },
      {
        b: "idea",
        texto:
          "Apunta a la Luna y, si fallas, caerás entre las estrellas. Apunta al techo y darás en el techo.",
      },
      {
        b: "texto",
        texto:
          "La segunda diferencia es qué se mira. Dice que quien no tiene dinero se fija en los obstáculos y quien lo tiene se fija en las oportunidades, y añade el matiz que salva la idea de ser un tópico: no es que los ricos no vean los problemas, es que dan por hecho que aparecerán y calculan si merece la pena a pesar de ellos. La pregunta no es si saldrá bien, es qué pasa si no sale.",
      },
      {
        b: "texto",
        texto:
          "Y la tercera, la más incómoda: la relación con la gente que ya tiene dinero. Sostiene que quien los desprecia por sistema no va a permitirse llegar a ser uno de ellos, porque nadie se convierte en aquello que critica. Es la parte del argumento que peor envejece cuando se aplica sin matices, y también la que explica por qué el libro se lee tan bien: da permiso.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Te pagan por resultados, no por horas, y eso cambia dónde trabajas" },
      {
        b: "texto",
        texto:
          "Otra de sus comparaciones va sobre cómo se cobra. Eker sostiene que el ingreso fijo por hora tiene un techo que se puede calcular con una multiplicación, y que quien quiere pasar de ahí tiene que cobrar de alguna forma ligada al resultado: comisión, participación, negocio propio, derechos.",
      },
      {
        b: "texto",
        texto:
          "El argumento no es contra el empleo. Es que un sueldo compra seguridad y la paga con techo, y conviene saber que se está haciendo ese cambio en vez de descubrirlo a los cincuenta. Su recomendación concreta es no dejar el trabajo, sino empezar algo pequeño en paralelo donde cobrar por lo que se consigue.",
      },
      {
        b: "idea",
        texto:
          "Si cobras por horas, tu límite lo pone el calendario. Y el calendario no negocia.",
      },
      {
        b: "texto",
        texto:
          "Junto a eso pone la idea de pensar en grande, que explica con una cuenta: quien resuelve el problema de diez personas gana lo que gana; quien resuelve el mismo problema para diez mil, gana mil veces más por el mismo trabajo de diseñar la solución. Su pregunta es a cuánta gente sirve lo que haces, y la respuesta suele ser corregible.",
      },
      {
        b: "texto",
        texto:
          "También insiste en algo que suena raro en un libro de dinero: dice que la gente que gana mucho se promociona sin vergüenza, y que quien considera que venderse está feo se queda con el mejor producto y sin clientes. Lo enmarca así: si crees de verdad en lo que haces, no contarlo es un problema para el que lo necesita.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "El dinero se administra con frascos antes de administrarse con cifras",
      },
      {
        b: "texto",
        texto:
          "La parte más práctica del libro es un sistema de reparto que Eker enseña con seis cuentas o seis frascos. Cada vez que entra dinero, se reparte en porcentajes fijos y cada parte tiene un uso que no se toca. Su cifra de referencia es esta:",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Necesidades, 55 %", texto: "todo lo de vivir: casa, comida, recibos, transporte." },
          { fuerte: "Libertad financiera, 10 %", texto: "solo se invierte, nunca se gasta. De aquí no se saca." },
          { fuerte: "Ahorro a largo, 10 %", texto: "para compras grandes y para los imprevistos." },
          { fuerte: "Formación, 10 %", texto: "cursos, libros, aprender algo que suba tus ingresos." },
          { fuerte: "Diversión, 10 %", texto: "y hay que gastarlo entero cada mes, obligatoriamente." },
          { fuerte: "Dar, 5 %", texto: "a quien lo necesite, sea quien sea." },
        ],
      },
      {
        b: "texto",
        texto:
          "Lo interesante no son los porcentajes, que cada uno ajustará, sino dos detalles. El primero es que la cuenta de la libertad financiera es de una sola dirección: entra dinero y no sale, nunca, para nada. El segundo es que la de diversión es obligatoria gastarla, y ahí está su razonamiento: un sistema que solo aprieta se abandona a las tres semanas, así que la parte de disfrutar es lo que hace que el resto dure.",
      },
      {
        b: "idea",
        texto:
          "El hábito de administrar no depende de cuánto entra. Quien no reparte cien euros tampoco va a repartir cien mil.",
      },
      {
        b: "texto",
        texto:
          "Y ahí está su respuesta a la objeción evidente. Cuando alguien dice que no tiene bastante para repartir, Eker contesta que empiece con lo que sea —un euro por frasco si hace falta— porque lo que se está instalando es la costumbre, no la cantidad.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Lo que no se mide crece solo si es un problema" },
      {
        b: "texto",
        texto:
          "Otra idea que sostiene es la de mirar los números aunque duelan. Su observación es que quien va mal de dinero deja de abrir los extractos, y que eso convierte una situación mala en una situación mala y desconocida, que es peor. Su regla es sencilla: lo que no se controla, no se puede mejorar.",
      },
      {
        b: "texto",
        texto:
          "Recomienda mirar cuatro cosas cada mes y anotarlas: lo que entra, lo que sale, lo que se tiene y lo que se debe. No como contabilidad, sino como el peso en una báscula: para tener una serie y ver hacia dónde va.",
      },
      {
        b: "idea",
        texto:
          "El dinero no se escapa por lo que gastas: se escapa por lo que no miras.",
      },
      {
        b: "texto",
        texto:
          "Junto a eso pone la idea del trabajo sobre uno mismo, que es donde más se le nota el oficio de formador. Sostiene que lo que sabes te ha traído hasta donde estás y que, por definición, no basta para llegar más lejos, así que hay que seguir aprendiendo aunque las cosas vayan bien. Es un argumento sencillo y difícil de rebatir.",
      },
      {
        b: "texto",
        texto:
          "Y termina con lo que llama la ley de los ingresos y el crecimiento personal: los ingresos crecen hasta donde crezcas tú. Es la misma imagen del termostato del principio, cerrando el círculo, y explica por qué todo el libro habla de la cabeza y casi nunca de productos financieros.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "El libro funciona como permiso, y esa es la mitad de su éxito" },
      {
        b: "texto",
        texto:
          "Conviene entender por qué se vende tanto un libro que no explica ni un solo producto financiero. Lo que hace bien es quitar de en medio una traba que mucha gente lleva sin haberla examinado: la idea de que querer dinero es un poco sucio, de que quien lo tiene ha hecho algo raro, de que aspirar a más es de codiciosos.",
      },
      {
        b: "texto",
        texto:
          "Eker desmonta eso con una insistencia casi pesada, y lo hace en un tono de charla que se lee en dos tardes. Sus diecisiete comparaciones funcionan como espejo: casi cualquiera se reconoce en tres o cuatro de ellas y esa es la parte que se recuerda.",
      },
      {
        b: "idea",
        texto:
          "Buena parte de lo que este libro hace no es enseñar nada: es quitar el freno de mano a quien no sabía que lo llevaba puesto.",
      },
      {
        b: "texto",
        texto:
          "Su otra virtud es el sistema de frascos, que es concreto, se puede empezar el mismo día y no depende de ninguna creencia. Quien no se crea nada de lo demás puede coger eso y le habrá servido de algo.",
      },
      {
        b: "texto",
        texto:
          "El precio de ese tono es que no hay ni una cifra, ni un estudio, ni una fuente en todo el libro. Todo lo que afirma se sostiene en anécdotas de sus alumnos y en su propia biografía, contada por él. Es un libro de arengas, y hay que leerlo sabiéndolo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro dice que cada uno lleva un termostato de dinero puesto en la infancia, que la cuenta corriente lo obedece, y que por eso el dinero que llega de golpe se va. Para cambiarlo propone examinar las frases heredadas, ponerse una cifra por escrito, cobrar por resultados en lugar de por horas y repartir cada ingreso en seis usos fijos desde el primer euro.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta son dos cosas concretas. El sistema de los frascos, que funciona con cualquier sueldo y se empieza hoy. Y el permiso, que para mucha gente es la traba de verdad: hasta que uno no deja de pensar que querer dinero está mal, ninguna técnica le va a servir.",
      },
      {
        b: "idea",
        texto:
          "Si tu subconsciente no está puesto en el éxito, todo lo que aprendas va a acabar devolviéndote al mismo sitio.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla, y es lo primero que hay que decir. La tesis de que la situación económica de cada uno es un reflejo de su mentalidad convierte cualquier pobreza en culpa del pobre, y eso no se sostiene: el país donde naces, la salud, los cuidados que te tocan y una crisis explican bastante más de la renta de una persona que sus creencias sobre el dinero. Eker no menciona ninguna de esas cosas en todo el libro.",
      },
      {
        b: "texto",
        texto:
          "Y hay que decir lo otro: el libro es la puerta de entrada a un seminario de tres días y a una escalera de cursos mucho más caros, y su tono está construido para eso. No hay una sola fuente, un solo dato verificable ni un solo caso comprobable, y la biografía del autor —los negocios anteriores, la venta de la tienda— solo la cuenta él. Se le pueden coger los frascos y el permiso; para lo demás, cualquier manual de finanzas personales dice más y promete menos.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   Inteligencia emocional, en ocho páginas.

   Libro de divulgación científica, no manual: aquí NO va la segunda persona
   —regla 7—, salvo en las dos páginas prácticas. El material bueno son los
   datos: la amígdala que decide veinte milisegundos antes, los niños de las
   nubes de azúcar, el meta-análisis de las escuelas.

   La conclusión tiene que contar dos cosas que se saben desde 1995: que el
   «80 % del éxito» nunca lo dijo Goleman pero tampoco lo desmintió a
   tiempo, y que el experimento de las nubes no replicó bien.
   -------------------------------------------------------------------------- */

const INTELIGENCIA_EMOCIONAL: PaginaLibro[] = [
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Un hombre inteligentísimo tardaba media hora en elegir la fecha de una cita",
      },
      {
        b: "texto",
        texto:
          "A un paciente llamado Elliot le extirparon un tumor cerebral junto a los lóbulos frontales. Salió con el cociente intelectual intacto, la memoria perfecta y el lenguaje impecable. Lo que perdió fue la conexión entre el pensamiento y la emoción, y con ella la vida entera: dejó el trabajo, se arruinó con negocios absurdos y se divorció dos veces. Cuando su neurólogo le proponía dos fechas para la siguiente consulta, se pasaba media hora enumerando razones a favor y en contra de cada una.",
      },
      {
        b: "texto",
        texto:
          "El caso, descrito por Antonio Damasio, es el que mejor resume la tesis de Daniel Goleman: sin emoción no hay decisión. La razón por sí sola compara opciones eternamente; lo que corta la lista y elige es una señal emocional, y quien la pierde no se vuelve más racional, se queda paralizado.",
      },
      {
        b: "idea",
        texto:
          "La emoción no estorba a la razón: es lo que le permite terminar una frase y decidir algo.",
      },
      {
        b: "texto",
        texto:
          "Goleman, periodista científico del New York Times con formación en psicología, publicó el libro en 1995 recogiendo investigación que llevaba una década acumulándose en laboratorios distintos. Su argumento es que medimos la inteligencia con una sola vara —la que predice las notas— y que esa vara explica una parte pequeña de cómo le va a la gente en la vida.",
      },
      {
        b: "texto",
        texto:
          "El recorrido de este resumen es ese: primero qué pasa en el cerebro cuando alguien pierde los nervios, después las cinco capacidades que componen esto, después qué se ha medido en niños y en empresas. La conclusión dice también dónde falla, que en este libro hay dos cosas grandes que decir.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Una parte del cerebro decide veinte milisegundos antes que tú" },
      {
        b: "texto",
        texto:
          "La explicación fisiológica del libro se apoya en el trabajo de Joseph LeDoux, y es lo que le da su fuerza. Casi toda la información que entra por los sentidos va al tálamo y de ahí a la corteza, que la analiza y decide qué hacer. Pero LeDoux encontró un segundo cable, más corto y más rápido, que va directo del tálamo a la amígdala.",
      },
      {
        b: "texto",
        texto:
          "Ese atajo llega unos milisegundos antes que la señal completa, con una imagen borrosa y sin analizar. Es lo que hace que uno salte hacia atrás al ver una forma alargada en el suelo antes de saber si es una manguera. La amígdala prefiere equivocarse cien veces por exceso que una vez por defecto, porque el que se equivocaba por defecto no dejaba descendencia.",
      },
      {
        b: "idea",
        texto:
          "La parte del cerebro que se asusta recibe la información antes que la parte que la entiende. Por eso reaccionas antes de saber a qué.",
      },
      {
        b: "texto",
        texto:
          "A la versión desbocada de esto Goleman lo llama secuestro emocional: la amígdala toma el mando, la corteza prefrontal se queda sin voz y aparecen esas reacciones de las que uno se arrepiente veinte minutos después. No es una manera de hablar; se puede ver en la señal eléctrica.",
      },
      {
        b: "texto",
        texto:
          "Lo importante es que el proceso tiene una ventana. La corteza tarda un poco más pero llega, y puede modular lo que la amígdala ha empezado. De ahí sale la única técnica que el libro repite: cuando notes que ha empezado, gana tiempo. Salir de la habitación, respirar despacio, aplazar la respuesta. No es cortesía, es dejar que llegue la otra señal.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "La inteligencia emocional son cinco cosas distintas y solo la primera es obligatoria",
      },
      {
        b: "texto",
        texto:
          "Goleman organiza lo que llama inteligencia emocional en cinco capacidades, apoyándose en el trabajo previo de Peter Salovey y John Mayer. Están en orden: cada una necesita la anterior.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Conocerse", texto: "reconocer una emoción mientras está pasando, no dos horas después." },
          { fuerte: "Manejarse", texto: "poder calmarse, aguantar un disgusto y no quedarse enganchado." },
          { fuerte: "Motivarse", texto: "aplazar la recompensa y seguir con algo cuando ya no apetece." },
          { fuerte: "Reconocer al otro", texto: "la empatía, que empieza por leer una cara y un tono." },
          { fuerte: "Manejar relaciones", texto: "que es en buena medida manejar las emociones de los demás." },
        ],
      },
      {
        b: "texto",
        texto:
          "La primera es la que sostiene todo lo demás, y Goleman insiste en que es más rara de lo que parece. Reconocer la emoción mientras ocurre —esto que noto es miedo, y va dirigido a esto— no es lo mismo que quedarse dentro de ella. Cita estudios en los que basta con ponerle nombre a lo que se siente para que baje su intensidad.",
      },
      {
        b: "idea",
        texto:
          "Ponerle nombre a lo que sientes, mientras lo sientes, baja su volumen. Es lo más barato que hay.",
      },
      {
        b: "texto",
        texto:
          "Sobre la empatía aporta un dato que se cita mucho: la parte de un mensaje emocional que viaja por las palabras es pequeña, y casi todo va en el tono, la cara y el gesto. Y otro más incómodo: la capacidad de leer emociones ajenas se puede medir, se distribuye de forma muy desigual y correlaciona con lo bien que le va a alguien socialmente, no con su cociente intelectual.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Unos niños de cuatro años se quedaron solos con una nube de azúcar" },
      {
        b: "texto",
        texto:
          "En los años sesenta, Walter Mischel puso a niños de cuatro años delante de una golosina en una guardería de Stanford y les dijo que iba a salir un momento. Si aguantaban sin comérsela hasta que volviera, tendrían dos. Un tercio aguantó los quince minutos. Los demás no.",
      },
      {
        b: "texto",
        texto:
          "Lo que hizo famoso el experimento fue el seguimiento. Cuando aquellos niños llegaron a la adolescencia, los que habían aguantado eran descritos por sus padres y profesores como más capaces de concentrarse, de afrontar la frustración y de mantener amistades, y su nota en las pruebas de acceso a la universidad era considerablemente más alta que la de los que se la comieron enseguida.",
      },
      {
        b: "idea",
        texto:
          "A los cuatro años, aguantar quince minutos sin comerse una golosina predecía más cosas que cualquier prueba de inteligencia.",
      },
      {
        b: "texto",
        texto:
          "Y lo interesante es cómo aguantaban los que aguantaban. No apretando los dientes: se tapaban los ojos, cantaban, jugaban con las manos, se daban la vuelta. Es decir, no ejercían fuerza de voluntad, sino que se organizaban la atención para no tener que ejercerla. Eso ya no es un rasgo, es una técnica.",
      },
      {
        b: "texto",
        texto:
          "Goleman apoya en este estudio la parte del libro que se ocupa de la escuela, y en un montón de investigación sobre programas de aprendizaje social y emocional: cursos que enseñan a los niños a nombrar lo que sienten, a resolver una disputa hablando y a esperar el turno. Los resultados que cita —menos peleas, menos expulsiones y algo más de rendimiento— se han confirmado después en revisiones amplias, y es la parte del libro que mejor ha aguantado.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "El enfado sostenido hace por el corazón lo que hace el tabaco" },
      {
        b: "texto",
        texto:
          "Una parte considerable del libro se ocupa de la relación entre emociones y salud, y aquí Goleman reúne investigación bastante sólida. La hostilidad crónica —no el enfado puntual, sino la desconfianza y la irritabilidad permanentes— aparece en varios estudios de seguimiento como factor de riesgo cardiovascular con un peso comparable al de otros factores clásicos.",
      },
      {
        b: "texto",
        texto:
          "Lo mismo con la ansiedad sostenida y con la depresión, que empeoran el pronóstico de enfermos con problemas cardíacos y retrasan la recuperación después de una cirugía. Y con el estrés prolongado, que deprime la respuesta inmunitaria de manera medible.",
      },
      {
        b: "idea",
        texto:
          "Las emociones no están en la cabeza: se les puede tomar la tensión y contar en un análisis de sangre.",
      },
      {
        b: "texto",
        texto:
          "Goleman saca de aquí un argumento sobre la medicina que en 1995 sonaba raro: si el estado emocional influye en cómo evoluciona un enfermo, atenderlo no es amabilidad, es parte del tratamiento. Cita programas en los que enseñar a manejar la ansiedad a pacientes operados acortaba días de hospital.",
      },
      {
        b: "texto",
        texto:
          "También le sirve para la otra mitad de la ecuación: el apoyo social. Vivir solo y sin nadie a quien contarle las cosas aparece en varios estudios como riesgo de salud por sí mismo. No es un asunto de compañía agradable; es que las relaciones aparecen en las tablas de mortalidad.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "En una pareja, lo que rompe no es discutir sino cuatro maneras de hacerlo",
      },
      {
        b: "texto",
        texto:
          "Para la parte de las relaciones, Goleman se apoya en el trabajo de John Gottman, que grabó a cientos de matrimonios discutiendo en un laboratorio y midió pulso, gestos y palabras. Gottman encontró que no importa cuánto discute una pareja, sino cómo, y aisló cuatro comportamientos que predicen la ruptura con una fiabilidad alta.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "La crítica global", texto: "no «has olvidado la compra» sino «eres un desastre»." },
          { fuerte: "El desprecio", texto: "el sarcasmo, el insulto, poner los ojos en blanco. El peor de los cuatro." },
          { fuerte: "La defensa", texto: "contestar a cada reproche con otro, sin admitir ni una parte." },
          { fuerte: "El muro", texto: "dejar de responder y desconectar, que es lo que hacen más ellos." },
        ],
      },
      {
        b: "texto",
        texto:
          "Debajo hay fisiología. Cuando el pulso pasa de unas cien pulsaciones, la persona está inundada: ya no oye lo que le dicen, solo se defiende. Gottman demostró que a partir de ahí la conversación no puede ir bien, haga lo que haga el otro, y que la única salida es parar veinte minutos y volver.",
      },
      {
        b: "idea",
        texto:
          "Cuando el pulso se dispara, deja de haber conversación. Lo único útil es parar y volver dentro de un rato.",
      },
      {
        b: "texto",
        texto:
          "En el trabajo aplica lo mismo a las críticas. Sostiene que la crítica global —eres poco fiable— no deja nada que corregir y produce el mismo bloqueo, mientras que la crítica concreta sobre un hecho y con una salida —esto de aquí falló, y así se arregla— se puede aceptar sin humillarse. Es la misma distinción, de un contexto a otro.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Esto no viene de fábrica: se aprende, y hay edades mejores" },
      {
        b: "texto",
        texto:
          "La tesis con más consecuencias del libro es que estas capacidades se pueden enseñar. El cociente intelectual es bastante estable, y estas no: la parte del cerebro que se ocupa de ellas —los circuitos prefrontales que regulan la amígdala— sigue madurando hasta bien entrada la adolescencia, lo que abre una ventana larga.",
      },
      {
        b: "texto",
        texto:
          "De ahí sale su propuesta de alfabetización emocional en la escuela, y su descripción de qué hacen esos programas: enseñar vocabulario para lo que se siente, practicar cómo se resuelve una disputa sin pegarse, ensayar el turno de palabra, aprender a leer la cara del otro. Todo bastante poco espectacular.",
      },
      {
        b: "idea",
        texto:
          "Lo que decide buena parte de una vida no se enseña en ninguna asignatura, y sin embargo se puede enseñar.",
      },
      {
        b: "texto",
        texto:
          "Para adultos su receta es más modesta y se reduce a tres movimientos: darse cuenta de la emoción mientras ocurre, ganar tiempo cuando aparece el secuestro, y practicar deliberadamente la escucha en vez de la respuesta. No promete transformaciones; habla de años.",
      },
      {
        b: "texto",
        texto:
          "Y cierra con el argumento social. Goleman escribía en un país que veía subir la violencia juvenil y la depresión adolescente, y sostiene que esos indicadores no se corrigen con más contenidos escolares. Es la parte más de época del libro y también la que le dio la repercusión que tuvo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro sostiene que hay una segunda clase de inteligencia, hecha de cinco capacidades, que no aparece en ninguna prueba escolar y que explica una parte importante de cómo le va a la gente. Se apoya en fisiología —el atajo del tálamo a la amígdala—, en estudios de seguimiento y en investigación sobre parejas, salud y escuela, y su conclusión es que todo eso se aprende.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta es haber juntado en un solo tomo investigación que estaba dispersa en revistas de neurociencia, de psicología del desarrollo y de medicina conductual, y haberla contado de modo que la leyera gente que no iba a abrir ninguna de esas revistas. Treinta años después, que las escuelas hablen de gestión emocional y que las empresas midan competencias blandas viene en línea recta de aquí.",
      },
      {
        b: "idea",
        texto:
          "Las notas dicen cómo te fue en el colegio. Lo que decide bastante de lo demás no se examina en ninguna parte.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla. La cifra que todo el mundo repite —que la inteligencia emocional explica el ochenta por ciento del éxito— no está en el libro, salió de la campaña de prensa y de la portada de la revista Time, y Goleman tardó años en desmentirla con claridad. Lo que dicen los estudios es que predice algo por encima del cociente intelectual y de la personalidad, y ese algo es real pero mucho más pequeño.",
      },
      {
        b: "texto",
        texto:
          "Y hay dos problemas más. El experimento de las nubes de azúcar, que es el corazón del capítulo sobre niños, se repitió en 2018 con una muestra diez veces mayor y variada: el efecto se redujo mucho al tener en cuenta el nivel socioeconómico de la familia, lo que sugiere que buena parte de lo que medía era el entorno del niño y no su carácter. Además, Goleman mete bajo una sola etiqueta cosas muy distintas —empatía, optimismo, autocontrol, sociabilidad— y esa amplitud es lo que le permite explicarlo todo y lo que hace difícil medirlo.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   Pensar rápido, pensar despacio, en ocho páginas.

   El libro más denso de los que hay escritos aquí: cuarenta años de
   investigación y unos treinta sesgos con nombre. Meterlos todos habría
   dado una lista, así que se eligen los que se pueden demostrar con un
   experimento contable en tres frases —Linda, el bate y la pelota, los
   jueces israelíes, las colonoscopias— y los demás se dejan fuera.

   Divulgación científica, así que NO va en segunda persona salvo cuando el
   lector es el sujeto del experimento. La conclusión tiene que decir lo de
   la crisis de replicación, que afecta a un capítulo entero y que el propio
   Kahneman reconoció por escrito.
   -------------------------------------------------------------------------- */

const PENSAR_RAPIDO: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Un bate y una pelota cuestan 1,10 euros: casi todo el mundo falla" },
      {
        b: "texto",
        texto:
          "Un bate y una pelota cuestan un euro con diez en total. El bate cuesta un euro más que la pelota. ¿Cuánto cuesta la pelota? A casi todo el mundo se le aparece diez céntimos, y es falso: si la pelota costara diez, el bate costaría un euro con diez y el total sería un euro con veinte. La respuesta es cinco céntimos.",
      },
      {
        b: "texto",
        texto:
          "Lo interesante no es fallar, es cómo se falla. La respuesta equivocada llega sola, sin esfuerzo, con una sensación de evidencia. Comprobarla exige pararse. Y más de la mitad de los estudiantes de Harvard, del MIT y de Princeton a los que se les planteó dieron los diez céntimos: no es un problema de inteligencia, es un problema de que casi nadie se para.",
      },
      {
        b: "idea",
        texto:
          "La respuesta que aparece sola es rápida, cómoda y frecuentemente falsa. Comprobarla cuesta un esfuerzo que casi nadie hace.",
      },
      {
        b: "texto",
        texto:
          "Daniel Kahneman ganó el Nobel de Economía en 2002 sin haber dado una sola clase de economía: es psicólogo, y el premio se lo dieron por el trabajo que hizo con Amos Tversky demostrando que la gente no decide como los modelos económicos suponían. Tversky había muerto seis años antes y el Nobel no se concede a título póstumo.",
      },
      {
        b: "texto",
        texto:
          "El recorrido de este resumen es ese: primero los dos sistemas con los que pensamos, después los atajos que usa el rápido y en qué se equivoca, después por qué perder duele el doble que ganar, y por último por qué recordamos las cosas de una manera que no se parece a como las vivimos. La conclusión dice también dónde falla.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Tienes dos maneras de pensar y una de ellas es muy vaga" },
      {
        b: "texto",
        texto:
          "Kahneman propone hablar de dos sistemas, y avisa de que son un modo de hablar y no dos sitios del cerebro. El sistema 1 funciona solo, deprisa, sin esfuerzo y sin que uno pueda apagarlo. El sistema 2 es la atención deliberada, hace las cosas difíciles y es lento y perezoso.",
      },
      {
        b: "texto",
        texto:
          "La diferencia se nota con dos ejemplos. Ver la cara de alguien enfadado y saber que está enfadado: sistema 1, instantáneo, imposible de evitar. Multiplicar diecisiete por veinticuatro: sistema 2, y mientras lo haces se te dilatan las pupilas, te sube el pulso y, si vas andando, aflojas el paso.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Sistema 1", texto: "automático, rápido, emocional. Está siempre encendido y propone respuestas." },
          { fuerte: "Sistema 2", texto: "lento, deliberado, costoso. Debería revisar, y casi siempre firma sin leer." },
        ],
      },
      {
        b: "texto",
        texto:
          "El reparto de papeles es lo que causa los problemas. El 1 propone impresiones e intuiciones; el 2 las adopta, normalmente sin comprobarlas. Kahneman lo describe con una imagen dura: el sistema 2 se cree el protagonista y en realidad es un secundario que da el visto bueno.",
      },
      {
        b: "idea",
        texto:
          "El sistema 2 se cree el que decide. Casi siempre se limita a aprobar lo que el 1 ya ha decidido.",
      },
      {
        b: "texto",
        texto:
          "Y hay una demostración célebre de lo estrecha que es la atención: en un vídeo donde unos jugadores se pasan una pelota, mientras el espectador cuenta los pases, la mitad de la gente no ve pasar a alguien disfrazado de gorila por el centro de la escena. No es que no mirasen: es que el sistema 2 estaba ocupado en otra cosa.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Linda no puede ser más probable siendo dos cosas que siendo una" },
      {
        b: "texto",
        texto:
          "El experimento más citado de Kahneman y Tversky es este. Se describe a Linda: treinta y un años, soltera, franca, muy brillante, licenciada en filosofía, preocupada de estudiante por la discriminación y la justicia social, participante en manifestaciones antinucleares. ¿Qué es más probable: que Linda sea cajera de banco, o que sea cajera de banco y feminista?",
      },
      {
        b: "texto",
        texto:
          "Cerca del noventa por ciento elige la segunda, incluidos estudiantes de doctorado con formación en estadística. Y es imposible: dos condiciones a la vez nunca pueden ser más probables que una sola de ellas, porque las cajeras feministas son un subconjunto de las cajeras. La descripción encaja mejor con la historia, y el sistema 1 confunde encajar con ser probable.",
      },
      {
        b: "idea",
        texto:
          "Una historia coherente parece más probable que una menos detallada, aunque las matemáticas digan lo contrario.",
      },
      {
        b: "texto",
        texto:
          "A eso lo llaman heurística de representatividad, y explica bastante más que un acertijo. Es la razón por la que un plan detallado parece más realista que uno vago, por la que un diagnóstico que encaja con el tópico se impone al que dicen los números, y por la que una previsión con muchos pasos concretos convence más que una prudente.",
      },
      {
        b: "texto",
        texto:
          "El error de fondo es olvidar la frecuencia de base. Si en un campus hay setenta ingenieros y treinta juristas, y te describen a alguien ordenado y aficionado a los puzles, la descripción te arrastra al ingeniero y te hace olvidar que la proporción ya te lo decía. Kahneman demostró que basta con dar una descripción totalmente neutra para que la gente deje de usar los porcentajes.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Un número dicho al azar cambia lo que estás dispuesto a pagar" },
      {
        b: "texto",
        texto:
          "En uno de sus experimentos hicieron girar una ruleta trucada que solo se paraba en el 10 o en el 65, delante de estudiantes. Después les preguntaban qué porcentaje de países africanos hay en la ONU. Los que habían visto el 10 daban una media del veinticinco por ciento; los que habían visto el 65, del cuarenta y cinco. La ruleta no tenía nada que ver con nada y les movió la respuesta veinte puntos.",
      },
      {
        b: "texto",
        texto:
          "El anclaje funciona igual fuera del laboratorio. En una tienda, poner un cartel de máximo doce por cliente hace que la gente se lleve más unidades que sin cartel. En una negociación, la primera cifra que se dice condiciona todo lo que viene después, aunque las dos partes sepan perfectamente que es una postura de salida.",
      },
      {
        b: "idea",
        texto:
          "Cualquier número que tengas en la cabeza al empezar a estimar te va a arrastrar, aunque sepas que no significa nada.",
      },
      {
        b: "texto",
        texto:
          "Junto al anclaje va la disponibilidad, que es juzgar la frecuencia de algo por lo fácil que resulta recordar un caso. Por eso la gente sobreestima las muertes por accidente de avión, por atentado o por tiburón —salen en las noticias— e infravalora las que produce la diabetes o un ictus. La probabilidad que sentimos es la de los titulares.",
      },
      {
        b: "texto",
        texto:
          "Y Kahneman añade una vuelta de tuerca: cuando se le pide a alguien que enumere doce situaciones en las que fue asertivo, acaba considerándose menos asertivo que quien enumeró solo seis. Doce cuesta trabajo, y esa dificultad se interpreta como prueba de que no hay tantas. No cuenta el contenido: cuenta lo que costó recordarlo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Perder cien euros duele el doble de lo que alegra ganarlos" },
      {
        b: "texto",
        texto:
          "La teoría por la que le dieron el Nobel se llama teoría prospectiva, y corrige un supuesto que la economía daba por bueno: que la gente decide mirando el resultado final. No lo hace. Decide mirando el cambio respecto a donde está, y da mucho más peso a lo que pierde que a lo que gana.",
      },
      {
        b: "texto",
        texto:
          "La proporción está medida y ronda el doble. Casi nadie acepta una apuesta a cara o cruz en la que puede ganar ciento cincuenta euros o perder cien, aunque las cuentas digan que conviene. Para que la mayoría entre, la ganancia tiene que doblar a la pérdida.",
      },
      {
        b: "idea",
        texto:
          "No somos avaros: somos aversos a perder. Y eso explica más decisiones que cualquier cálculo.",
      },
      {
        b: "texto",
        texto:
          "De ahí salen consecuencias por todas partes. El efecto dotación: en cuanto tienes una cosa, pides más por venderla de lo que habrías pagado por comprarla, y el experimento clásico se hizo con tazas de café. La resistencia a cualquier reforma que quite algo pequeño a mucha gente para dar mucho a unos pocos. Y el modo en que se presenta una operación: decir que sobrevive el noventa por ciento y decir que muere el diez por ciento son el mismo dato, y los médicos deciden distinto según cuál lean.",
      },
      {
        b: "texto",
        texto:
          "Kahneman añade un detalle que completa el cuadro: las probabilidades pequeñas se sobrevaloran. Eso explica que la misma persona compre lotería y seguro de hogar el mismo día, que parece contradictorio y no lo es: en los dos casos está pagando de más por un suceso improbable.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Los jueces conceden más libertades condicionales después de comer" },
      {
        b: "texto",
        texto:
          "Un estudio con jueces israelíes que revisaban peticiones de libertad condicional encontró que la proporción de decisiones favorables era alta al empezar la sesión, caía casi a cero según pasaban las horas y volvía a subir después de cada pausa para comer. El expediente no cambiaba; cambiaba la hora.",
      },
      {
        b: "texto",
        texto:
          "Kahneman lo usa para una de sus tesis más incómodas: la intuición experta no es fiable en cualquier terreno. Y da la condición que la separa de la superstición: hace falta un entorno con regularidades estables y una retroalimentación rápida y clara. Un bombero o un ajedrecista la tienen; un analista que predice la bolsa a un año, no.",
      },
      {
        b: "idea",
        texto:
          "La intuición sirve donde el mundo repite y avisa pronto de los errores. Donde no, es confianza sin información.",
      },
      {
        b: "texto",
        texto:
          "De ahí su defensa de las fórmulas sencillas. Cita casos en los que un algoritmo con cuatro variables predice mejor que un experto —el éxito de una cosecha de vino, la evolución de un paciente, el rendimiento de un candidato— y explica por qué: la fórmula no tiene mal día ni se deja impresionar por un detalle vistoso, y el experto sí.",
      },
      {
        b: "texto",
        texto:
          "Su propia experiencia militar le sirve de ejemplo. Diseñando entrevistas de selección para el ejército israelí, descubrió que puntuar seis rasgos concretos por separado, con preguntas fijas, y sumar después, predecía bastante mejor que la impresión global del entrevistador. Y que los entrevistadores odiaban hacerlo así.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Una colonoscopia más larga se recuerda como menos dolorosa" },
      {
        b: "texto",
        texto:
          "La última parte del libro separa dos cosas que solemos tratar como una: el yo que experimenta, que vive el momento, y el yo que recuerda, que después cuenta la historia y toma las decisiones. Y demuestra que no coinciden.",
      },
      {
        b: "texto",
        texto:
          "En un estudio se pidió a pacientes de colonoscopia —cuando aún se hacían sin sedación— que puntuaran su dolor cada sesenta segundos. Después se les preguntaba cuánto habían sufrido en total. La duración de la prueba no influía casi nada en el recuerdo: lo que decidía era el momento peor y el final. Un paciente con una prueba más larga, pero cuyos últimos minutos fueron menos dolorosos, la recordaba como mejor que otro con una prueba corta que acabó en lo peor.",
      },
      {
        b: "idea",
        texto:
          "De una experiencia se recuerda el pico y el final. La duración casi no cuenta, y por eso elegimos como elegimos.",
      },
      {
        b: "texto",
        texto:
          "Kahneman lo llama la negligencia de la duración, y de ahí saca una de las preguntas más raras del libro: si supieras que al terminar unas vacaciones te van a borrar todas las fotos y todos los recuerdos, ¿elegirías las mismas vacaciones? Casi nadie dice que sí, lo que revela que no organizamos la vida para vivirla sino para poder recordarla.",
      },
      {
        b: "texto",
        texto:
          "Y lo aplica a la felicidad, distinguiendo dos cosas que las encuestas mezclan: cómo se siente uno durante el día y cuánto le satisface su vida cuando se lo preguntan. Son medidas distintas, responden a factores distintos, y confundirlas es la razón por la que los estudios sobre dinero y felicidad se contradicen tanto.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro sostiene que pensamos con dos aparatos, que el rápido decide casi siempre y usa atajos que fallan de maneras predecibles, y que el lento revisa mucho menos de lo que cree. Sobre eso monta un catálogo de errores con nombre —anclaje, disponibilidad, representatividad, aversión a la pérdida— y una conclusión práctica que no es la que se espera.",
      },
      {
        b: "texto",
        texto:
          "Porque Kahneman es tajante en algo: conocer los sesgos casi no protege de ellos. Después de cuarenta años estudiándolos, dice que sigue cayendo en los mismos. Lo que sí puede cambiar es el vocabulario de una organización, que permite que alguien diga en voz alta que ese plan está anclado o que esa historia solo parece verosímil, y que se establezcan procedimientos —listas fijas, puntuaciones separadas, una fórmula— que decidan por uno cuando la intuición no es de fiar.",
      },
      {
        b: "idea",
        texto:
          "No vas a dejar de equivocarte por saber cómo te equivocas. Pero vas a poder ponerle nombre al error de otro, y eso ya sirve.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta es la base entera de la economía del comportamiento, que después ha llegado a las políticas públicas, al diseño de productos y a la medicina. Y una manera de mirar las propias certezas con desconfianza que no se olvida.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla. El capítulo sobre priming —los estudios en los que leer palabras relacionadas con la vejez hace andar más despacio— no ha resistido los intentos de replicación, y el propio Kahneman escribió en 2017 una nota pública reconociendo que había confiado demasiado en estudios con muestras pequeñas y que ese capítulo no se sostenía. El de los jueces israelíes también ha sido discutido, porque el orden de los casos no era aleatorio. El armazón principal —los dos sistemas, la teoría prospectiva— sigue en pie; algunos de los ejemplos más llamativos, no. Y hay una crítica de fondo que Gerd Gigerenzer lleva décadas haciendo: llamar error a un atajo que funciona bien en el mundo real, y solo falla en problemas de laboratorio, es una manera tramposa de contar los aciertos.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   Ikigai, en ocho páginas.

   Escrito por dos españoles, cosa que casi nadie sabe y que conviene decir
   porque explica el libro: es un reportaje de viaje con estructura de
   manual. El material bueno es Ogimi —las entrevistas, los moais, el hara
   hachi bu— y lo flojo es el diagrama de los cuatro círculos, que ni
   siquiera es japonés.

   La conclusión tiene que decir eso último y lo de las zonas azules, que
   se ha discutido bastante desde 2016.
   -------------------------------------------------------------------------- */

const IKIGAI: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "En un pueblo de Okinawa no existe la palabra jubilación" },
      {
        b: "texto",
        texto:
          "Ogimi tiene unos tres mil habitantes en el norte de Okinawa y una de las mayores proporciones de centenarios del mundo. Héctor García y Francesc Miralles fueron allí a entrevistar a los más viejos del pueblo, y lo primero que descubrieron es que en japonés no hay una palabra que signifique retirarse en el sentido de dejar de hacer cosas. La gente sigue con su huerto, sus reuniones y su trabajo a los noventa y ocho años.",
      },
      {
        b: "texto",
        texto:
          "La palabra que sí existe es ikigai, que se puede traducir como la razón por la que te levantas por la mañana. No es una vocación grandiosa: los ancianos de Ogimi la nombraban como cuidar el huerto, ver a los amigos del grupo, hacer artesanía, atender a los bisnietos. Cosas pequeñas y diarias.",
      },
      {
        b: "idea",
        texto:
          "En Ogimi nadie se retira, porque tener algo que hacer mañana forma parte de estar vivo.",
      },
      {
        b: "texto",
        texto:
          "El libro se publicó en 2016 y ha vendido millones de ejemplares en decenas de idiomas, aunque casi nadie sepa que lo escribieron dos españoles: uno vive en Tokio desde hace años y el otro es escritor y periodista. Lo que hicieron fue mezclar un reportaje de campo con lo que se sabía entonces sobre longevidad.",
      },
      {
        b: "texto",
        texto:
          "El recorrido de este resumen es ese: qué es ikigai y qué no es, qué come y cómo vive esa gente, qué hacen con el tiempo y con la compañía, y qué dice la investigación sobre tener un propósito. La conclusión dice también dónde falla, que aquí hay dos cosas que aclarar.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "El ikigai no se busca en un diagrama: se encuentra en lo que ya haces",
      },
      {
        b: "texto",
        texto:
          "El dibujo de los cuatro círculos que todo el mundo ha visto —lo que amas, lo que se te da bien, lo que el mundo necesita, por lo que te pagan— aparece pronto en el libro y ha acabado siendo lo más conocido de él. Conviene saber desde el principio que ese diagrama no es japonés: lo dibujó un consultor español, Andrés Zuzunaga, para hablar de propósito profesional, y alguien le puso encima la palabra ikigai años después.",
      },
      {
        b: "texto",
        texto:
          "Lo que los autores encuentran en Okinawa es bastante distinto y más modesto. Nadie de los que entrevistan describe su ikigai como la intersección de nada. Lo describen como una actividad concreta que da estructura al día y a la que se le tiene cariño, casi siempre sin remuneración y casi siempre relacionada con alguien más.",
      },
      {
        b: "idea",
        texto:
          "No es una vocación que se descubre: es lo que te hace levantarte, y suele estar ya en lo que haces cada día.",
      },
      {
        b: "texto",
        texto:
          "De ahí sale una recomendación práctica que no exige cambiar de vida: mirar qué actividades hacen que se te pase el tiempo sin enterarte, en qué momentos del día tienes ganas de algo, y proteger eso en la agenda en vez de esperar a tener tiempo libre.",
      },
      {
        b: "texto",
        texto:
          "Los autores conectan esto con la terapia de Viktor Frankl, que sostenía que quien tiene un para qué soporta casi cualquier cómo, y con el concepto de flujo de Mihály Csíkszentmihályi: ese estado en que la dificultad de lo que haces está justo por encima de tu nivel y desaparece la conciencia del tiempo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "En Okinawa se deja de comer cuando se está al ochenta por ciento" },
      {
        b: "texto",
        texto:
          "La costumbre alimentaria que más se cita del libro es el hara hachi bu, una fórmula que en Okinawa se dice antes de comer y que significa comer hasta estar lleno al ochenta por ciento. En la práctica se traduce en levantarse de la mesa con algo de hambre todavía.",
      },
      {
        b: "texto",
        texto:
          "Tiene sentido fisiológico: la señal de saciedad tarda unos veinte minutos en llegar, así que quien come hasta notarse lleno ha comido de más sin saberlo. El resultado medido en la zona es un consumo diario bastante inferior al de otros países desarrollados.",
      },
      { b: "texto", texto: "El resto de la dieta que describen es sencillo y poco exótico:" },
      {
        b: "lista",
        puntos: [
          { fuerte: "Variedad", texto: "muchos alimentos distintos en cantidades pequeñas, no un plato grande." },
          { fuerte: "Verdura y soja", texto: "boniato morado, tofu, algas y miso todos los días." },
          { fuerte: "Poca carne", texto: "pescado varias veces por semana, carne roja de manera ocasional." },
          { fuerte: "Té y agua", texto: "sobre todo té verde y té de jazmín, a lo largo del día." },
          { fuerte: "Azúcar", texto: "una fracción del que se consume en el resto del mundo rico." },
        ],
      },
      {
        b: "idea",
        texto:
          "No es una dieta de privación: es dejar de comer un poco antes de lo que pide el cuerpo.",
      },
      {
        b: "texto",
        texto:
          "Los autores lo enmarcan en lo que se sabe sobre restricción calórica moderada, que en varias especies alarga la vida y en humanos mejora marcadores metabólicos. Es una de las partes del libro con más respaldo, y también una en la que conviene no confundir una costumbre cultural con una receta.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Nadie envejece bien solo: en Okinawa te asignan un grupo al nacer" },
      {
        b: "texto",
        texto:
          "El moai es una institución de Okinawa que a los autores les llama la atención más que la comida. Es un grupo de vecinos que se forma en la infancia y que dura toda la vida: se reúnen periódicamente, ponen una cuota común y esa caja sirve para lo que haga falta —una boda, una enfermedad, un mal año de alguien—.",
      },
      {
        b: "texto",
        texto:
          "Lo que ofrece no es solo dinero. Es la certeza de que hay un grupo de personas que van a estar ahí dentro de cuarenta años, y que si un día no apareces, alguien va a preguntar. Los ancianos que entrevistan mencionan el moai constantemente cuando se les pregunta qué hace que su vida merezca la pena.",
      },
      {
        b: "idea",
        texto:
          "La soledad hace por la salud lo que hace el tabaco, y ese es el factor que más veces aparece en los estudios de longevidad.",
      },
      {
        b: "texto",
        texto:
          "Junto a eso, el movimiento constante. En Ogimi casi nadie hace deporte en el sentido de ir a un gimnasio, y casi todo el mundo se mueve todo el rato: el huerto, andar al mercado, sentarse y levantarse del suelo veinte veces al día, cuidar de alguien. Los autores describen prácticas suaves —el taichí, el yoga, un ejercicio matinal en grupo que se hace con la radio— que tienen en común ser diarias y ligeras.",
      },
      {
        b: "texto",
        texto:
          "Y el sueño y el descanso, que tratan con menos detalle del que merecen: siestas cortas, horarios estables y una relación con la prisa notablemente distinta a la occidental.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "El estrés que mata no es el del trabajo, es el que no se apaga nunca",
      },
      {
        b: "texto",
        texto:
          "Uno de los capítulos se ocupa del estrés, y hace una distinción que sostiene bien: el organismo está preparado para picos de tensión y no lo está para una tensión de fondo permanente. Lo primero es útil y hasta necesario; lo segundo desgasta el sistema inmunitario, sube la inflamación y acelera el envejecimiento celular.",
      },
      {
        b: "texto",
        texto:
          "Los autores hablan de la telomerasa y de los telómeros —los extremos de los cromosomas, que se acortan con los años y más deprisa bajo estrés crónico— y de cómo ese acortamiento se ha usado como medida de envejecimiento biológico. Es la parte más científica del libro y la que menos desarrollan.",
      },
      {
        b: "idea",
        texto:
          "El cuerpo aguanta bien las urgencias. Lo que no aguanta es no volver nunca a la calma.",
      },
      {
        b: "texto",
        texto:
          "Sus recomendaciones contra eso son las esperables y no por eso peores: dormir suficiente, moverse a diario, tener con quién hablar, y una práctica de atención que puede ser meditación o puede ser cualquier actividad que exija concentración sostenida sin urgencia. Mencionan la ceremonia del té y la caligrafía como ejemplos culturales del mismo mecanismo.",
      },
      {
        b: "texto",
        texto:
          "También dedican espacio a lo que llaman resiliencia y al wabi-sabi, la estética japonesa que encuentra belleza en lo imperfecto y lo que envejece, y al ichi-go ichi-e, la idea de que cada encuentro ocurre una sola vez. Son conceptos bonitos, contados con brevedad, y funcionan mejor como marco que como técnica.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Tener un propósito aparece en los estudios de mortalidad" },
      {
        b: "texto",
        texto:
          "La afirmación central del libro —que tener un motivo para levantarse alarga la vida— no es solo folclore de Okinawa, y esa es la parte que conviene retener. Hay estudios de seguimiento con miles de participantes en los que puntuar alto en propósito vital se asocia a menor mortalidad en los años siguientes, controlando por edad, salud y hábitos.",
      },
      {
        b: "texto",
        texto:
          "En Japón se estudió específicamente la palabra: un seguimiento de varios años a decenas de miles de adultos encontró que quienes decían tener ikigai morían menos durante el periodo del estudio, sobre todo por causas cardiovasculares. Los autores citan esa línea de trabajo, aunque sin mucho detalle.",
      },
      {
        b: "idea",
        texto:
          "Que la vida tenga un para qué no es una idea bonita: aparece en las tablas, con años de diferencia.",
      },
      {
        b: "texto",
        texto:
          "Lo que no está claro es la dirección. Quien está sano, tiene amigos y no le falta dinero encuentra más fácilmente un motivo para levantarse que quien está enfermo y solo, así que parte de la asociación puede ir al revés de como se cuenta. Es la objeción habitual a estos estudios y el libro no la menciona.",
      },
      {
        b: "texto",
        texto:
          "Aun así, la parte accionable resiste: mantener actividad, compañía y algo que hacer mañana no depende de creer nada, y es lo que hacen los ancianos que entrevistan. La lista de reglas con que se cierra el libro —no jubilarse, ir despacio, rodearse de buenos amigos, sonreír, volver a la naturaleza, dar las gracias y seguir el propio ikigai— es exactamente eso.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "El libro vale más como reportaje que como manual" },
      {
        b: "texto",
        texto:
          "Conviene decir qué clase de libro es, porque se compra creyendo que es otro. No es un método: no hay ejercicios, ni programa, ni pasos. Es un reportaje de viaje con capítulos temáticos, y lo mejor que tiene son las páginas en las que aparecen personas concretas de Ogimi contando cómo pasan el día.",
      },
      {
        b: "texto",
        texto:
          "La parte que se ha hecho más famosa es también la más floja. El diagrama de los cuatro círculos ocupa unas pocas páginas y no vuelve a usarse, y sin embargo es lo que ha circulado por todas partes, convertido en un ejercicio para encontrar la profesión ideal que el libro nunca propuso.",
      },
      {
        b: "idea",
        texto:
          "La palabra que se ha vendido como una fórmula para elegir carrera significa, en su idioma, algo bastante más pequeño y más diario.",
      },
      {
        b: "texto",
        texto:
          "Y hay una lectura que los autores no hacen y que asoma entre líneas: buena parte de lo que hace que Ogimi funcione no son decisiones individuales, sino una estructura —el moai asignado, la huerta comunitaria, una cultura que no aparta al viejo— que no se puede montar leyendo un libro.",
      },
      {
        b: "texto",
        texto:
          "Lo que sí se puede aprovechar, y no es poco: comer un poco menos de lo que pide el cuerpo, moverse todos los días sin llamarlo deporte, cuidar tres o cuatro relaciones como si fueran una inversión, y tener algo que hacer mañana que no sea trabajar.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro sostiene que la longevidad de Okinawa no viene de una cosa sino de un conjunto: comida ligera y variada, movimiento constante y suave, un grupo de pertenencia que dura toda la vida, poca prisa y —sobre todo— la ausencia de la idea de retirarse. La palabra ikigai nombra lo último: tener un motivo diario para levantarse.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta son las entrevistas. Que un anciano de noventa y ocho años explique que su ikigai es su huerto y las reuniones de su moai vale más que cualquier esquema, y los momentos en que el libro se limita a escuchar son los que lo han hecho durar. La asociación entre propósito y mortalidad, además, está documentada en estudios grandes.",
      },
      {
        b: "idea",
        texto:
          "En japonés no hay palabra para jubilarse en el sentido de dejar de hacer cosas. Puede que ahí esté media explicación.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla. El diagrama de los cuatro círculos, que es lo más famoso del libro, no viene de Japón: lo dibujó un consultor español para hablar de propósito profesional y se le acopló la palabra después. En japonés, ikigai no tiene nada que ver con encontrar un trabajo que reúna cuatro condiciones, y ese malentendido es hoy la definición que circula por el mundo.",
      },
      {
        b: "texto",
        texto:
          "Y la base demográfica se ha discutido mucho desde 2016. Investigaciones posteriores sobre las llamadas zonas azules apuntan a que una parte de los supercentenarios registrados se explica por partidas de nacimiento antiguas, mal archivadas o mantenidas para cobrar pensiones, y Okinawa aparece en esas revisiones. Lo que se recomienda —comer menos, moverse, no estar solo— sigue siendo bueno; la cifra de centenarios que lo justifica es menos firme de lo que el libro da por hecho.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   Los cuatro acuerdos, en ocho páginas.

   El libro es cortísimo —cuatro reglas— así que el resumen tiene que dar
   contexto o se queda en una lista de cuatro puntos. Se cuenta primero de
   dónde vienen: la idea de que uno vive dentro de un acuerdo heredado, que
   es lo que sostiene los cuatro.

   Es un libro de espiritualidad tolteca escrito por un cirujano mexicano, y
   la conclusión tiene que decir dos cosas: que la etnografía es muy
   discutible y que el cuarto acuerdo se puede leer como una coartada.

   Segunda persona, porque es un libro práctico.
   -------------------------------------------------------------------------- */

const CUATRO_ACUERDOS: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Nadie te preguntó si estabas de acuerdo con las reglas que sigues" },
      {
        b: "texto",
        texto:
          "Miguel Ruiz era cirujano en México hasta que un accidente de coche le hizo dejar la medicina y volver a lo que su familia enseñaba desde generaciones. En 1997 publicó un libro de ciento cuarenta páginas que ha vendido más de diez millones de ejemplares, y que empieza con una idea que no es suya sino de cualquier antropología: aprendiste a vivir sin haber elegido nada.",
      },
      {
        b: "texto",
        texto:
          "De pequeño te enseñaron el idioma, lo que está bien y lo que está mal, qué es bonito, qué es una vida lograda y qué es un fracaso. No hubo un momento en el que te preguntaran si estabas conforme. Fuiste aceptando cada regla, y al aceptarlas se convirtieron en las tuyas. A eso Ruiz lo llama la domesticación.",
      },
      {
        b: "idea",
        texto:
          "Firmaste miles de acuerdos sobre cómo hay que vivir antes de tener edad para leer ninguno.",
      },
      {
        b: "texto",
        texto:
          "Lo que le interesa no es que existan reglas, sino cuál es el precio de las que uno se cree. Sostiene que la mayoría lleva dentro un juez que la castiga por cada regla incumplida y una víctima que acepta el castigo, y que ese circuito funciona todo el día sin que nadie lo haya encendido.",
      },
      {
        b: "texto",
        texto:
          "Su propuesta es sustituir esa maraña por cuatro acuerdos elegidos a conciencia. El recorrido de este resumen es ese: los cuatro, uno por uno, con lo que cada uno cambia de verdad; después qué hace falta para sostenerlos y por qué el libro insiste tanto en no rendirse. La conclusión dice también dónde falla, que aquí hay una parte incómoda.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Lo que dices no describe el mundo: lo construye" },
      {
        b: "texto",
        texto:
          "El primer acuerdo es sé impecable con tus palabras, y no significa no mentir. Ruiz parte de que la palabra es lo único con lo que se crea cualquier cosa —una relación, una reputación, la idea que un niño tiene de sí mismo— y de que casi todo el daño que la gente se hace se hace hablando.",
      },
      {
        b: "texto",
        texto:
          "Su ejemplo es una madre que llega a casa cansada y le dice a su hija, que canta, que se calle porque tiene una voz horrible. La frase dura tres segundos. La niña deja de cantar durante veinte años, convencida de que molesta a los demás. Ruiz llama a eso magia negra, con un vocabulario que se puede aceptar o no; el mecanismo que describe es reconocible sin ninguna magia.",
      },
      {
        b: "idea",
        texto:
          "Una frase dicha en tres segundos puede quedarse funcionando dentro de otra persona durante veinte años.",
      },
      {
        b: "texto",
        texto:
          "Y añade la parte que casi nadie aplica: lo mismo vale para lo que uno se dice a sí mismo. Quien se llama inútil cada vez que se equivoca está haciendo con su propia cabeza lo que aquella madre hizo con su hija, con la diferencia de que lo repite a diario.",
      },
      {
        b: "texto",
        texto:
          "También mete aquí el chismorreo, que compara con un virus: contar de alguien una versión que lo empeora se propaga sin coste y modifica cómo lo tratan diez personas que no estaban delante. Su instrucción práctica es sencilla: no hablar en contra de nadie, empezando por uno mismo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Lo que otro dice de ti habla de él, no de ti" },
      {
        b: "texto",
        texto:
          "El segundo acuerdo —no te tomes nada personalmente— es el que Ruiz considera más liberador, y su argumento es que cada persona vive dentro de su propia película. Cuando alguien te insulta, está expresando lo que le pasa a él con sus reglas, su día y sus heridas. El que estuvieras tú delante es casi accidental.",
      },
      {
        b: "texto",
        texto:
          "Lo dice también para lo agradable, que es lo que casi nadie recuerda del acuerdo: los elogios tampoco son sobre ti. Si aceptas que la opinión buena del otro te define, has aceptado que la mala también, y entonces vives al ritmo del humor ajeno.",
      },
      {
        b: "idea",
        texto:
          "Nada de lo que los demás hacen es por ti. Lo hacen por ellos, y tú estabas ahí.",
      },
      {
        b: "texto",
        texto:
          "Ruiz sostiene que tomárselo personalmente viene de una idea exagerada de la propia importancia: creer que el mundo gira alrededor de uno. Y que el remedio no es la indiferencia sino saber lo que uno es y lo que no, para que no haga falta que un tercero lo confirme cada mañana.",
      },
      {
        b: "texto",
        texto:
          "La aplicación práctica es notable en el trabajo y en las discusiones de pareja. Una crítica que no se toma como un ataque se puede examinar: puede tener razón, puede no tenerla, y en ninguno de los dos casos hace falta defenderse. Es más difícil de lo que parece, y el libro no finge lo contrario.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Casi todas las peleas empiezan por algo que nadie llegó a decir" },
      {
        b: "texto",
        texto:
          "El tercer acuerdo es no hagas suposiciones, y es el más fácil de comprobar en la propia vida. Suponemos que el otro sabe lo que queremos, que entiende lo que dijimos, que su silencio significa lo que tememos. Y después nos enfadamos por lo que hemos supuesto, no por lo que ha pasado.",
      },
      {
        b: "texto",
        texto:
          "El caso que usa es doméstico y exacto: alguien que espera que su pareja adivine qué le apetece hacer el fin de semana, se calla, y acaba dolido porque el otro no lo adivinó. Nadie mintió, nadie falló; simplemente no se dijo nada y se dio por dicho.",
      },
      {
        b: "idea",
        texto:
          "La mayoría de los dramas no vienen de lo que pasó, sino de la historia que te contaste sobre lo que pasó.",
      },
      {
        b: "texto",
        texto:
          "Ruiz sostiene que la mente rellena huecos automáticamente porque la incertidumbre le resulta insoportable, y que lo hace inventando algo que suele ser peor que la realidad. El remedio que ofrece es de una simpleza casi decepcionante: preguntar. Preguntar hasta estar seguro, y decir lo que uno quiere en vez de esperar que se note.",
      },
      {
        b: "texto",
        texto:
          "Y añade que lo mismo vale hacia dentro: suponemos que sabemos por qué hacemos lo que hacemos, y a menudo tampoco lo hemos preguntado. Es la parte del libro que más se acerca a algo parecido a la psicología, aunque el vocabulario sea otro.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Tu mejor esfuerzo no es el mismo todos los días, y eso es el acuerdo",
      },
      {
        b: "texto",
        texto:
          "El cuarto acuerdo es haz siempre lo máximo que puedas, y lo importante está en la letra pequeña. Ruiz insiste en que lo máximo cambia: no es lo mismo lo que puedes dar recién levantado que enfermo, ni un día bueno que uno malo. El acuerdo no es exigirse un rendimiento fijo, es no reservarse.",
      },
      {
        b: "texto",
        texto:
          "Su función dentro del libro es de cierre: los otros tres solo funcionan si este los sostiene, porque nadie es impecable con sus palabras el cien por cien del tiempo ni deja de suponer cosas de un día para otro. Lo que se puede hacer es intentarlo hoy con lo que hoy se tenga.",
      },
      {
        b: "idea",
        texto:
          "Hacer lo máximo que puedas evita las dos trampas: el que se pasa se quema, y el que se guarda se arrepiente.",
      },
      {
        b: "texto",
        texto:
          "Y lo que hace, sobre todo, es quitar de en medio el juez del principio. Si has dado lo que tenías, no hay nada que juzgar aunque el resultado sea malo. Ruiz sostiene que el arrepentimiento y la culpa se alimentan casi siempre de la duda sobre si uno podría haberlo hecho mejor, y que ese acuerdo la cierra.",
      },
      {
        b: "texto",
        texto:
          "También conecta el acuerdo con la acción, que es lo que separa este libro de un manual de pensamiento positivo: dice que las ideas no sirven de nada si no se practican, y que la única manera de que un acuerdo nuevo sustituya a uno viejo es repetirlo hasta que sea el que sale solo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Cambiar un acuerdo cuesta lo mismo que cambiar cualquier costumbre" },
      {
        b: "texto",
        texto:
          "La última parte del libro se ocupa de cómo se sostiene todo esto, y Ruiz es realista en un punto: los acuerdos viejos llevan décadas practicándose y no se caen porque uno lea un libro. Lo que propone es una guerra larga, en la que se recuperan de uno en uno los espacios que ocupaba el juez.",
      },
      {
        b: "texto",
        texto:
          "Su método tiene tres piezas. La primera es darse cuenta: no se puede cambiar lo que no se ve, y buena parte del trabajo consiste simplemente en pillarse. La segunda es el perdón, que plantea como un asunto de interés propio: guardar rencor es dejar que quien te hizo daño te lo siga haciendo gratis. La tercera es la repetición, sin la cual las dos primeras se quedan en un buen rato.",
      },
      {
        b: "idea",
        texto:
          "Perdonar no es hacerle un favor al otro: es dejar de pagar tú la factura de algo que ya pasó.",
      },
      {
        b: "texto",
        texto:
          "Ruiz plantea también dos ideas más que se han citado mucho: la de vivir como si hoy fuera el último día, que usa para quitar importancia a las discusiones pequeñas, y la del ángel de la muerte como maestro, que es la misma idea vestida de su tradición.",
      },
      {
        b: "texto",
        texto:
          "Y termina con una advertencia útil: los cuatro acuerdos no van a hacer que la vida sea fácil ni que la gente deje de comportarse mal. Van a cambiar de dónde salen tus reacciones, que es lo único que estaba en tu mano desde el principio.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Es un libro de reglas, y por eso funciona" },
      {
        b: "texto",
        texto:
          "Conviene entender por qué un libro tan corto y tan poco argumentado ha vendido lo que ha vendido. Su fuerza está en la forma: cuatro frases que se pueden recordar sin apuntarlas y aplicar el mismo día, en una conversación concreta, sin ningún material y sin ningún experto.",
      },
      {
        b: "texto",
        texto:
          "Y en que los cuatro se refuerzan. El primero ordena lo que dices, el segundo lo que oyes, el tercero lo que te callas y el cuarto lo que te exiges. Puestos juntos cubren casi todo lo que pasa en un día entre personas, que es más de lo que hace la mayoría de los libros de trescientas páginas.",
      },
      {
        b: "idea",
        texto:
          "Cuatro frases que caben en la memoria valen más que trescientas páginas que no se recuerdan al día siguiente.",
      },
      {
        b: "texto",
        texto:
          "El precio de esa forma es que no hay argumentación de ninguna clase. Ruiz afirma; no demuestra, no cita, no discute objeciones. Quien necesite razones para aceptar una regla no las va a encontrar aquí, y quien las acepte lo hará porque le suenan verdaderas, que es exactamente cómo funcionan los libros de sabiduría.",
      },
      {
        b: "texto",
        texto:
          "Lo que sí se puede probar es si funcionan. Los cuatro son comprobables en una semana con la propia vida, y esa es la única verificación que el libro ofrece y también la única que pide.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro sostiene que vivimos dentro de reglas que aceptamos sin elegirlas y que nos castigamos a diario por incumplirlas. Frente a eso propone cuatro acuerdos elegidos: cuidar lo que dices, no tomarte lo ajeno como propio, preguntar en lugar de suponer y dar cada día lo que ese día tengas. Cuatro frases, ciento cuarenta páginas.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta es concentración. El segundo y el tercero, sobre todo, resuelven una cantidad desproporcionada de conflictos cotidianos, y el cuarto es una defensa inteligente contra el perfeccionismo que suele acompañar a este tipo de propósitos. Que se puedan recordar sin esfuerzo es medio libro.",
      },
      {
        b: "idea",
        texto:
          "No puedes elegir lo que te pasa ni lo que te dicen. Puedes elegir los acuerdos desde los que respondes.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla. La presentación como sabiduría tolteca es muy discutible: los toltecas fueron un pueblo mesoamericano anterior a los aztecas del que se conserva poquísimo, y no hay constancia histórica de una tradición transmitida hasta hoy con este contenido. Historiadores y antropólogos que han revisado el asunto lo describen como una construcción moderna con vocabulario prehispánico. Las reglas pueden ser útiles igualmente; el linaje que se les atribuye no se sostiene.",
      },
      {
        b: "texto",
        texto:
          "Y hay un problema con el segundo acuerdo llevado al extremo. Que nada de lo que hacen los demás sea por ti es liberador cuando se trata de un desconocido que grita en el tráfico, y es una coartada cuando alguien te está tratando mal de forma sostenida: hay comportamientos que sí van dirigidos a ti y que exigen una respuesta, no una reinterpretación. El libro no distingue entre las dos situaciones, y esa distinción es justo lo que hace falta para usarlo bien.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   El sutil arte de que casi todo te importe una mierda, en ocho páginas.

   El libro tiene un tono muy marcado —tacos, provocación, blog— y el
   resumen NO lo imita: la regla 6 pide español llano y la 4 prohíbe la
   arenga. Se cuenta el argumento, que es bastante más serio que la portada:
   es estoicismo con lenguaje de internet.

   Segunda persona, porque es un libro práctico. Y en la conclusión, lo que
   hay que decir: que la anécdota de Bukowski está muy limada y que el
   primer capítulo se contradice con los últimos.
   -------------------------------------------------------------------------- */

const SUTIL_ARTE: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Querer ser más positivo te recuerda todo el rato que no lo eres" },
      {
        b: "texto",
        texto:
          "Mark Manson abre con una idea que va contra todo lo que se publica en su género: el afán de tener una experiencia positiva es en sí mismo una experiencia negativa. Cuanto más te empeñas en sentirte bien, más presente tienes que ahora mismo no lo estás.",
      },
      {
        b: "texto",
        texto:
          "Lo llama la ley de la evitación inversa y la explica con ejemplos incómodos. Cuanto más quieres ser rico, más pobre te sientes gane lo que ganes. Cuanto más te obsesiona ser deseable, más feo te ves. Cuanto más te esfuerzas en dormirte, más despierto estás. El propio esfuerzo confirma la carencia.",
      },
      {
        b: "idea",
        texto:
          "Aceptar una experiencia negativa es una experiencia positiva. Querer evitarla la convierte en dos problemas.",
      },
      {
        b: "texto",
        texto:
          "De ahí sale el título, que se malinterpreta constantemente. Que algo te importe una mierda no significa ser indiferente a todo: significa que solo puedes dedicar tu preocupación a unas pocas cosas, así que más vale elegirlas. La gente que parece no inmutarse por nada no es que no le importe nada, es que le importan tres cosas y ninguna de ellas es lo que opinen de su ropa.",
      },
      {
        b: "texto",
        texto:
          "Manson escribía un blog de mucho tráfico y este fue su segundo libro, publicado en 2016. El recorrido de este resumen es ese: por qué elegir qué te importa, por qué el sufrimiento no se elimina sino que se elige, por qué tus valores deciden más que tus metas, y qué pasa cuando aceptas que casi todo es culpa tuya sin ser culpa tuya. La conclusión dice también dónde falla.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "No eliges si vas a sufrir: eliges por qué" },
      {
        b: "texto",
        texto:
          "La segunda idea del libro es la que le da su base. Todo el mundo quiere pasarlo bien, y por eso querer pasarlo bien no distingue a nadie. La pregunta útil es otra: qué dolor estás dispuesto a aguantar, porque cualquier cosa que merezca la pena viene con uno incluido.",
      },
      {
        b: "texto",
        texto:
          "Su ejemplo es de músico frustrado. Él quería ser una estrella del rock, se lo imaginaba a todas horas, y nunca llegó a nada. Lo que descubrió más tarde es que quería el resultado y no quería el proceso: los ensayos aburridos, las furgonetas, tocar en bares vacíos, la logística. Quien acaba llegando es el que aguanta bien esa parte, no el que sueña mejor con el escenario.",
      },
      {
        b: "idea",
        texto:
          "La pregunta no es qué quieres disfrutar, es qué dolor estás dispuesto a aguantar. Esa respuesta sí decide tu vida.",
      },
      {
        b: "texto",
        texto:
          "De ahí saca su crítica a la fijación con las metas. Poner un objetivo es fácil y no distingue a nadie: todo el mundo quiere estar en forma, tener un negocio propio y escribir un libro. Lo que decide es si te gusta lo bastante el trabajo diario como para hacerlo durante años sin que nadie aplauda.",
      },
      {
        b: "texto",
        texto:
          "Y añade un matiz sobre la felicidad que resiste bien: no es un estado al que se llega, es lo que aparece mientras se resuelven problemas que a uno le gusta resolver. Una vida sin problemas no sería feliz; sería vacía. Lo que se puede elegir es la clase de problemas.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Creerse especial es una manera cara de no mejorar en nada" },
      {
        b: "texto",
        texto:
          "Manson dedica un capítulo entero a desmontar la autoestima entendida como sentirse extraordinario, y su argumento es práctico: quien está convencido de ser excepcional no puede reconocer que hace algo mal, y quien no reconoce que hace algo mal no aprende.",
      },
      {
        b: "texto",
        texto:
          "Cuenta el caso de Jimmy, un conocido suyo que se pasaba la vida montando negocios que nunca arrancaban y explicando por qué esta vez sí. Cada fracaso lo interpretaba como una prueba de que el mundo no estaba a su altura. Manson lo usa para señalar lo evidente: sentirse bien consigo mismo y ser bueno en algo no son la misma cosa, y a veces van en direcciones contrarias.",
      },
      {
        b: "idea",
        texto:
          "Ser normal es la condición estadística de casi todo el mundo, y aceptarlo es lo que permite empezar a mejorar de verdad.",
      },
      {
        b: "texto",
        texto:
          "Su alternativa es medir la autoestima por otra cosa: no por lo bueno que uno se cree, sino por lo bien que soporta mirarse los defectos sin desmoronarse. Es una definición menos halagadora y bastante más útil, y coincide con lo que la psicología ha encontrado sobre la autocompasión frente a la autoestima inflada.",
      },
      {
        b: "texto",
        texto:
          "También pone el dedo en un fenómeno de época: las redes muestran los mejores momentos de miles de personas y eso convierte lo excepcional en la referencia diaria. Manson sostiene que aceptar una vida corriente no es resignación, es dejar de medirse con una vara falsa.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "No eres culpable de lo que te pasó, y sigue siendo tu responsabilidad",
      },
      {
        b: "texto",
        texto:
          "La distinción más útil del libro es entre culpa y responsabilidad. La culpa mira al pasado y decide quién lo hizo. La responsabilidad mira al presente y decide quién se ocupa. Y Manson sostiene que casi siempre se confunden, con el resultado de que quien no tuvo la culpa se queda esperando a que venga alguien a arreglarlo.",
      },
      {
        b: "texto",
        texto:
          "Su imagen es un bebé abandonado en la puerta de tu casa. No es culpa tuya, no lo pediste y no lo mereces. Y a partir del momento en que está ahí, es tu problema: puedes ignorarlo, puedes llamar a alguien o puedes ocuparte, pero las tres son decisiones tuyas y las tres tienen consecuencias tuyas.",
      },
      {
        b: "idea",
        texto:
          "No elegimos casi nada de lo que nos pasa, y elegimos siempre lo que hacemos con ello. La segunda parte es la única que sirve.",
      },
      {
        b: "texto",
        texto:
          "Lo aplica también a las emociones, y ahí es donde más incomoda: sostiene que nadie te hace sentir nada, que la interpretación es tuya, y que decir me has hecho sentir mal es una manera de entregarle a otro el mando de tu día. Lo dice con matices insuficientes, y sobre eso hay algo que decir en la conclusión.",
      },
      {
        b: "texto",
        texto:
          "La contrapartida buena es que ampliar la responsabilidad amplía el margen. Cuanto más se asume, más cosas se pueden cambiar, aunque ninguna de ellas la hayas causado tú.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Casi seguro que te equivocas, y esa es la buena noticia" },
      {
        b: "texto",
        texto:
          "Manson dedica un capítulo a la certeza, y sostiene que es el enemigo del crecimiento: quien está seguro de algo ya no puede aprender nada sobre ese algo. Su propuesta es lo contrario de la confianza que vende el género: dar por hecho que en muchas cosas estás equivocado y no saber en cuáles.",
      },
      {
        b: "texto",
        texto:
          "Lo argumenta con la propia biografía de cualquiera. Lo que creías con veinte años sobre el amor, el dinero o tus amigos te parece hoy ingenuo; no hay ninguna razón para pensar que lo que crees ahora vaya a resistir mejor los próximos veinte. La única postura coherente es la de quien espera cambiar de opinión.",
      },
      {
        b: "idea",
        texto:
          "El crecimiento no es pasar del error al acierto: es pasar de un error a otro que estorba menos.",
      },
      {
        b: "texto",
        texto:
          "De ahí saca tres preguntas concretas que propone hacerse cuando uno está muy seguro: qué pasaría si me equivoco, qué significaría eso, y sería mejor o peor que la situación actual. Sostiene que la mayoría de la gente ni siquiera se atreve a formularlas, y que ahí está el bloqueo.",
      },
      {
        b: "texto",
        texto:
          "Junto a eso pone su versión de la ley de Parkinson aplicada a los problemas: si te quitan los problemas grandes, los pequeños te parecerán enormes. Es lo que explica que la gente con la vida resuelta se enfade por una fila en el supermercado, y por qué medir la propia desgracia no funciona.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "El fracaso no es lo contrario del éxito, es el camino" },
      {
        b: "texto",
        texto:
          "Manson cuenta el caso de Pablo Picasso ya anciano, dibujando una servilleta para una desconocida en un café y pidiéndole después una cantidad de dinero considerable. Cuando ella protestó porque solo había tardado unos segundos, él contestó que había tardado sesenta años. La historia se cuenta de varias formas y probablemente es apócrifa, pero funciona para lo que quiere decir.",
      },
      {
        b: "texto",
        texto:
          "Su tesis es que la mejora en cualquier cosa consiste en fallar repetidamente y ajustar, y que el miedo a fallar no viene del fallo en sí sino de lo que uno cree que el fallo dice de él. Quien mide su valor por sus resultados no puede permitirse un mal resultado, así que no lo intenta.",
      },
      {
        b: "idea",
        texto:
          "Si tu valor depende de acertar, no vas a intentar nada en lo que puedas fallar. Y eso es casi todo lo que merece la pena.",
      },
      {
        b: "texto",
        texto:
          "Su receta contra la parálisis es lo que llama el principio de haz algo: no esperar a tener motivación para actuar, porque el orden real es al revés. Hacer cualquier cosa pequeña produce una reacción, la reacción produce ganas, y las ganas producen más acción. La motivación es consecuencia y no requisito.",
      },
      {
        b: "texto",
        texto:
          "Y cierra con la parte de los límites, que es la más adulta del libro: la responsabilidad de cada uno acaba en sus propias emociones y decisiones. Quien se hace cargo de las emociones ajenas y quien deja que otros se hagan cargo de las suyas están en la misma relación, cada uno en un lado.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Tenerlo todo por delante te vuelve incapaz de comprometerte con nada",
      },
      {
        b: "texto",
        texto:
          "El capítulo más contracorriente es el que defiende decir que no. Manson sostiene que la cultura de las opciones infinitas —más viajes, más gente, más posibilidades— produce una vida ancha y de dos centímetros de profundidad, y que el rechazo es lo que permite que algo tenga fondo.",
      },
      {
        b: "texto",
        texto:
          "Cuenta que él mismo viajó por más de cincuenta países y que la experiencia que más le cambió fue quedarse quieto en uno. Su argumento es que cualquier cosa profunda —un oficio, una amistad de veinte años, una relación— exige renunciar a todo lo que se podría haber hecho con ese tiempo, y que quien no renuncia a nada no construye nada.",
      },
      {
        b: "idea",
        texto:
          "Comprometerse es empobrecerse en opciones para enriquecerse en profundidad. No hay otra manera de que algo dure.",
      },
      {
        b: "texto",
        texto:
          "De ahí su defensa del conflicto honesto en las relaciones: sostiene que una relación sana no es la que no discute, sino la que puede decirse las cosas sin que se caiga todo, y da un criterio práctico para distinguirlas, que es si cada uno puede decir que no sin que el otro lo castigue.",
      },
      {
        b: "texto",
        texto:
          "El libro termina con un capítulo sobre la muerte que resume su lectura de Ernest Becker: casi todo lo que hacemos para dejar huella es un intento de no desaparecer, y aceptar que uno va a desaparecer es lo que permite dejar de hacer cosas por esa razón.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro sostiene que la energía que uno puede dedicar a preocuparse es limitada y que el problema no es preocuparse poco, sino repartirla mal. A partir de ahí propone elegir el sufrimiento en vez de evitarlo, medir por valores y no por metas, separar la culpa de la responsabilidad, esperar estar equivocado y comprometerse con pocas cosas a fondo.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta es haber metido ideas estoicas y existencialistas en un lenguaje que lee mucha gente que nunca abriría a Epicteto. La distinción entre culpa y responsabilidad, la pregunta por qué dolor se aguanta y la idea de que la felicidad viene de resolver problemas que te gustan son sólidas y se recuerdan.",
      },
      {
        b: "idea",
        texto:
          "Solo puedes preocuparte por unas pocas cosas. La libertad no está en no preocuparse, está en elegir cuáles.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla. La anécdota de Charles Bukowski con la que abre —el borracho fracasado que triunfó sin cambiar— está muy limada: Bukowski trabajó de cartero durante años, escribió sin parar desde joven y su epitafio famoso convive con una obra muy trabajada. La historia se cuenta para reforzar la tesis, y las historias que se eligen así siempre encajan.",
      },
      {
        b: "texto",
        texto:
          "Y hay una tensión que el libro no resuelve. Empieza diciendo que la industria de la autoayuda vende humo y termina siendo un libro de autoayuda con sus consejos y su lista de valores buenos y malos. Además, la idea de que nadie te hace sentir nada, dicha sin matices, funciona mal con quien está en una relación abusiva o en duelo: hay situaciones en las que lo que corresponde no es reinterpretar, sino salir. El tono provocador, que es lo que lo vendió, es también lo que le impide hacer esas distinciones.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   El monje que vendió su Ferrari, en ocho páginas.

   Es una fábula, no un ensayo: un abogado que se derrumba en un juicio,
   desaparece y vuelve del Himalaya con siete enseñanzas envueltas en una
   alegoría de jardín. El resumen tiene que contar la fábula lo justo y
   sacar el contenido, o se queda en un cuento.

   Sharma ya está en la app con El club de las 5 de la mañana, así que aquí
   se evita repetir la rutina matinal: se cuenta lo que este libro tiene y
   el otro no —el dominio de la mente, el kaizen, el tiempo, el servicio—.

   Segunda persona, libro práctico.
   -------------------------------------------------------------------------- */

const MONJE_FERRARI: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "Un abogado se desplomó en mitad de un juicio y vendió su mansión" },
      {
        b: "texto",
        texto:
          "Julian Mantle era uno de los abogados más caros de Estados Unidos: casos famosos, mansión, avión privado y un Ferrari rojo aparcado a la puerta. A los cincuenta y tres años se desplomó en medio de una vista con un infarto. Tres días después, en el hospital, decidió que no volvía. Vendió todo lo que tenía, incluido el coche, y desapareció.",
      },
      {
        b: "texto",
        texto:
          "Robin Sharma cuenta que reapareció años más tarde en casa de su antiguo ayudante, con veinte años menos encima y sin ninguna prisa, y que se pasó una noche entera contándole lo que había aprendido con unos monjes en las montañas de la India. El libro es esa conversación.",
      },
      {
        b: "idea",
        texto:
          "Nadie cambia de vida por convencimiento. Casi todos cambian después de un aviso, y el aviso no siempre da una segunda oportunidad.",
      },
      {
        b: "texto",
        texto:
          "Conviene decir desde el principio que es una fábula. Los monjes de Sivana, el sabio Yogui Raman y la parábola del jardín son un recurso literario, no un reportaje. Lo que hay debajo son siete enseñanzas que Sharma envuelve en una alegoría para que se recuerden, y una alegoría deliberadamente exagerada: un jardín, un faro, un luchador de sumo, un cable de color rosa, un cronómetro de oro, rosas y un camino de diamantes.",
      },
      {
        b: "texto",
        texto:
          "El recorrido de este resumen es ese: qué hay dentro de cada símbolo, empezando por la mente y siguiendo por el propósito, la mejora diaria, la disciplina, el tiempo y el servicio a los demás. La conclusión dice también dónde falla, que en un libro así hay bastante que decir.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Tu mente es un jardín, y ahora mismo casi nadie lo está cuidando" },
      {
        b: "texto",
        texto:
          "El primer símbolo es el jardín, y representa la mente. La idea es que un jardín produce lo que se planta en él y que nadie deja crecer malas hierbas a propósito: simplemente no mira. Sharma sostiene que la mayoría de la gente deja entrar en su cabeza cualquier pensamiento que pase, y que después se extraña del resultado.",
      },
      {
        b: "texto",
        texto:
          "Su afirmación más citada es que la calidad de tu vida la decide la calidad de tus pensamientos, y que no hay tal cosa como una realidad objetiva que se te imponga: lo que hay es un suceso y la interpretación que le pones, y esa segunda parte es tuya.",
      },
      {
        b: "idea",
        texto:
          "La preocupación consume la energía que necesitas para hacer algo con aquello por lo que te preocupas.",
      },
      {
        b: "texto",
        texto:
          "De ahí salen dos prácticas concretas. La primera es lo que llama el corazón de la rosa: sentarse con una flor delante y mirarla, devolviendo la atención a los pétalos cada vez que se escapa, empezando por cinco minutos. Es meditación de concentración con otro nombre, y funciona por lo mismo: lo que se entrena es el gesto de volver.",
      },
      {
        b: "texto",
        texto:
          "La segunda es el pensamiento opuesto: cuando aparece un pensamiento que no te sirve, no discutir con él —eso lo agranda— sino colocar deliberadamente el contrario en su sitio. Sharma sostiene que la mente no puede sostener dos a la vez y que el que se instala es el que se repite.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Sin un destino, cualquier camino sirve y ninguno satisface" },
      {
        b: "texto",
        texto:
          "El segundo símbolo es el faro, y representa el propósito. La tesis es la de siempre en este género y aquí viene con una vuelta útil: Sharma sostiene que la felicidad no llega por perseguirla, sino como efecto secundario de avanzar hacia algo que a uno le importa.",
      },
      {
        b: "texto",
        texto:
          "Su método tiene una parte que se puede aplicar el mismo día y que llama el poder del dharma: identificar para qué se te da bien lo que se te da bien y ponerlo al servicio de algo. Y una segunda parte, la del faro propiamente dicha, que es escribirlo: pasar de una idea vaga a metas concretas con plazo, porque una intención que no se apunta se olvida.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Escríbelo", texto: "en un cuaderno, con detalle y en presente." },
          { fuerte: "Ponle plazo", texto: "una meta sin fecha es una intención con buenas maneras." },
          { fuerte: "Divídelo", texto: "en pasos que se puedan hacer esta semana." },
          { fuerte: "Cuéntalo poco", texto: "y solo a quien pueda ayudarte de verdad." },
        ],
      },
      {
        b: "idea",
        texto:
          "Nadie llega a un sitio al que no ha decidido ir. La mayoría de la gente no está perdida, es que nunca eligió destino.",
      },
      {
        b: "texto",
        texto:
          "Sharma insiste en algo que suele saltarse este tipo de libros: el propósito no tiene por qué ser profesional ni grande. Puede ser criar bien a alguien, hacer bien un oficio o cuidar de una comunidad. Lo que importa es que exista y que uno lo tenga presente cuando decide en qué gasta la semana.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "El kaizen es hacer un poco más de lo que apetece, todos los días" },
      {
        b: "texto",
        texto:
          "El tercer símbolo es un luchador de sumo, y representa el kaizen: la mejora continua y pequeña. La idea, que Sharma toma de la tradición japonesa de gestión, es que el progreso grande es la suma de mejoras diminutas mantenidas, y que buscar el salto espectacular es la manera más fiable de no avanzar.",
      },
      {
        b: "texto",
        texto:
          "Lo que le añade es la parte incómoda: sostiene que la manera de crecer es hacer deliberadamente lo que da pereza o miedo, en dosis pequeñas. Levantarse cuando no apetece, decir lo que cuesta decir, empezar la tarea que se lleva aplazando. No como castigo, sino porque cada vez que uno hace algo que le costaba, lo que le costaba se encoge.",
      },
      {
        b: "idea",
        texto:
          "Haz cada día algo que no te apetezca hacer. Es lo único que ensancha lo que eres capaz de hacer.",
      },
      {
        b: "texto",
        texto:
          "De ahí saca una lista de prácticas que llama las diez ceremonias, y que son bastante domésticas: madrugar, moverse, leer, escribir un diario, pasar tiempo en silencio, oír música, comer con moderación, estar en la naturaleza, cuidar las relaciones y hacer algo por otro. Ninguna es original y esa es más o menos la idea.",
      },
      {
        b: "texto",
        texto:
          "El cuarto símbolo, el cable rosa que rodea al luchador, es la disciplina, y Sharma la define como el puente entre lo que uno se propone y lo que uno hace. Su observación práctica es que la fuerza de voluntad se entrena como cualquier otra cosa y que la manera de entrenarla es cumplir promesas pequeñas hechas a uno mismo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "El tiempo no se gestiona: se protege de la gente que te lo pide" },
      {
        b: "texto",
        texto:
          "El quinto símbolo es un cronómetro de oro, y es la parte más práctica del libro. Sharma parte de una obviedad que casi nadie trata como tal: el tiempo es el único recurso que no se puede reponer, y sin embargo es el único que la gente regala sin pensarlo.",
      },
      {
        b: "texto",
        texto:
          "Sus dos herramientas son conocidas y funcionan. La primera es la regla del ochenta por veinte aplicada al día: casi todo el resultado sale de una fracción pequeña de lo que se hace, así que conviene identificar cuál es esa fracción y protegerla. La segunda es planificar la semana entera un día fijo, con las cosas importantes puestas antes que las urgentes.",
      },
      {
        b: "idea",
        texto:
          "Estar ocupado no es lo mismo que ser productivo. La gente ocupada suele estar haciendo lo que le pidieron otros.",
      },
      {
        b: "texto",
        texto:
          "Y añade la parte que más cuesta: aprender a decir que no. Sostiene que quien no dice que no a nada acaba con una agenda hecha por terceros, y que la culpa que se siente al negarse dura mucho menos que el resentimiento de haber dicho que sí.",
      },
      {
        b: "texto",
        texto:
          "Junto a eso mete una idea sobre la muerte que usa como palanca: recordar que el tiempo se acaba no es morboso, es lo único que hace elegir. Es el mismo recurso que aparece en la conclusión del libro, y funciona porque quita importancia a casi todo lo que ocupa un día normal.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Lo que se hace por otros es lo que mejor se acuerda uno al final" },
      {
        b: "texto",
        texto:
          "El sexto símbolo son rosas, y representan el servicio a los demás. Sharma sostiene, con una fórmula que se le ha citado mucho, que la calidad de una vida se acaba midiendo por lo que se ha dado y no por lo que se ha acumulado, y que quien mejora la vida de otro mejora la suya por el mismo precio.",
      },
      {
        b: "texto",
        texto:
          "Su versión práctica es deliberadamente pequeña: hacer cada día algo por alguien sin que se note demasiado y sin esperar nada, aunque sea una llamada. No propone grandes obras, propone una costumbre, y ahí es coherente con el kaizen del capítulo anterior.",
      },
      {
        b: "idea",
        texto:
          "Cada día en el que no haces algo por alguien es un día que no ha servido para gran cosa.",
      },
      {
        b: "texto",
        texto:
          "El séptimo y último símbolo es un camino de diamantes, y representa vivir el presente. Aquí Sharma dice lo mismo que dicen todos los libros de este tipo y lo dice mejor de lo habitual: que la infancia de los hijos, las conversaciones y los años buenos pasan mientras uno espera a que empiece lo importante.",
      },
      {
        b: "texto",
        texto:
          "Su instrucción es tratar el viaje como el destino y no al revés, y darse cuenta de que no habrá un momento en el que todo esté resuelto. Es la lección que cierra la fábula y también la que justifica el título: el Ferrari no era el problema, el problema era la vida que hubo que llevar para pagarlo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "La fábula es el método, no el adorno" },
      {
        b: "texto",
        texto:
          "Merece la pena mirar por qué Sharma eligió contar esto como un cuento en vez de como un manual. Su apuesta es que una lista de siete principios se olvida en dos días y que una imagen —un luchador de sumo con un cable rosa en un jardín con un faro— se queda pegada. Es un recurso viejísimo, el de los palacios de la memoria, y funciona.",
      },
      {
        b: "texto",
        texto:
          "El precio es que la alegoría es tan recargada que roza el ridículo, y el propio libro lo reconoce con humor. Quien busque un tratado se va a impacientar en las primeras páginas; quien acepte el juego se lleva siete ideas que puede recitar semanas después.",
      },
      {
        b: "idea",
        texto:
          "Una lista de siete puntos se olvida el jueves. Una imagen absurda, no. Esa es toda la técnica del libro.",
      },
      {
        b: "texto",
        texto:
          "Su otra virtud es el punto de partida, que es lo que le da el título y lo que hace que la gente lo abra: la sospecha, bastante extendida, de estar pagando una vida cara con una vida entera. Julian Mantle no es un personaje exótico; es lo que le pasa a mucha gente que trabaja bien.",
      },
      {
        b: "texto",
        texto:
          "Y hay que decir lo que no es: no hay una sola cifra, un solo estudio ni una sola fuente en todo el libro. Es un cuento con moraleja, y hay que leerlo como tal.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro sostiene que la vida se ordena desde dentro hacia fuera: primero la cabeza, después un destino elegido, después la mejora diaria y la disciplina para sostenerla, después la defensa del tiempo, y al final el servicio a los demás y la atención a lo que está pasando ahora. Siete enseñanzas envueltas en una alegoría para que no se olviden.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta es la pregunta de la primera página, que es la de verdad: cuánto de tu vida estás cambiando por cosas que no querías tanto. Y unas cuantas prácticas concretas que no dependen de creer nada —el ejercicio de volver la atención, el pensamiento opuesto, el ochenta por veinte, decir que no— y que se pueden empezar hoy.",
      },
      {
        b: "idea",
        texto:
          "El Ferrari nunca fue el problema. El problema era la vida que hacía falta llevar para pagarlo.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla. Nada de lo que afirma se apoya en nada: no hay fuentes, ni datos, ni la más mínima cautela, y varias afirmaciones —que la mente cura el cuerpo, que se puede vivir mucho más si se piensa bien— se presentan con una seguridad que no tiene ningún respaldo. Los monjes de Sivana no existen y el libro no lo aclara hasta muy tarde.",
      },
      {
        b: "texto",
        texto:
          "Y hay un problema de fondo, el mismo de casi todo el género: la vida de Julian Mantle se arregla desapareciendo un par de años a la India, cosa que exige haber ganado antes una fortuna. El libro presenta como universal una salida que solo estaba disponible para el protagonista, y no dedica una línea a quien tiene los mismos síntomas y una hipoteca. Se le pueden coger las prácticas; la fábula, mejor leerla sabiendo quién puede permitirse su final.",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   El poder del ahora, en ocho páginas.

   El libro más difícil de resumir de los que hay aquí: no tiene
   argumentación, está escrito en preguntas y respuestas y su tesis es que
   el pensamiento es el problema, lo que le permite descartar cualquier
   objeción como cosa de la mente.

   Se cuenta lo que dice, en llano y sin adoptar su vocabulario —nada de
   «el cuerpo del dolor» sin explicarlo primero—, y la conclusión dice lo
   que hay que decir: que es irrefutable por construcción, que su
   biografía es solo suya, y que hay estados en los que este libro es
   peligroso.
   -------------------------------------------------------------------------- */

const PODER_AHORA: PaginaLibro[] = [
  {
    bloques: [
      { b: "rotulo", texto: "«No aguanto más conmigo mismo»: la frase que hizo el libro" },
      {
        b: "texto",
        texto:
          "Eckhart Tolle cuenta que a los veintinueve años, después de años de depresión y ansiedad, se despertó una noche con un pensamiento que se repetía: no aguanto más conmigo mismo. Y que de pronto se dio cuenta de lo raro que era: si no aguanto conmigo mismo, ¿cuántos hay aquí? Uno que no aguanta y otro que es insoportable.",
      },
      {
        b: "texto",
        texto:
          "Dice que a partir de ese momento algo se desmontó y pasó dos años sentado en bancos de parques, sin trabajo y sin nada que le faltase. El libro, publicado en 1997, es el intento de explicar aquello, escrito en forma de preguntas y respuestas porque salió de las conversaciones que mantenía con la gente que le preguntaba.",
      },
      {
        b: "idea",
        texto:
          "Si puedes decir que no aguantas contigo mismo, es que hay dos: el que sufre y el que se da cuenta.",
      },
      {
        b: "texto",
        texto:
          "Su tesis cabe en una frase: casi todo el sufrimiento humano no viene de lo que pasa, sino de lo que la mente hace con el pasado y con el futuro, y ninguna de las dos cosas existe salvo como pensamiento presente.",
      },
      {
        b: "texto",
        texto:
          "El recorrido de este resumen es ese: primero por qué no eres tu pensamiento, después qué es eso que Tolle llama el cuerpo del dolor, después qué significa exactamente vivir el presente cuando hay que pagar facturas, y qué hacer con lo que duele de verdad. La conclusión dice también dónde falla, que aquí hace falta decirlo con cuidado.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "La voz que llevas dentro no eres tú: es un ruido que no sabes apagar",
      },
      {
        b: "texto",
        texto:
          "La observación con la que arranca el libro es fácil de comprobar: hay una voz en tu cabeza que habla todo el rato. Comenta, juzga, ensaya conversaciones que no van a ocurrir, repite discusiones que ya ocurrieron. No la has encendido tú y no la puedes apagar.",
      },
      {
        b: "texto",
        texto:
          "Tolle sostiene que el gran malentendido humano es confundirse con esa voz. Si tú fueras el pensamiento, no podrías oírlo; el hecho de que lo oigas demuestra que hay algo más, y a ese algo lo llama presencia o conciencia. Su ejercicio central es exactamente ese: escuchar el pensamiento como quien oye una radio en otra habitación, sin discutir con ella.",
      },
      {
        b: "idea",
        texto:
          "El que puede observar el pensamiento no es el pensamiento. Ahí está toda la maniobra del libro.",
      },
      {
        b: "texto",
        texto:
          "Al yo hecho de esa voz lo llama ego, y no en el sentido de vanidad. Lo define como la identidad que uno se ha construido con recuerdos, opiniones, papeles y agravios, y que necesita seguir hablando para sostenerse: si el pensamiento se detiene, esa identidad se queda sin material.",
      },
      {
        b: "texto",
        texto:
          "De ahí una observación que resiste bien fuera de su vocabulario: buena parte de lo que la gente defiende con uñas y dientes en una discusión no es la verdad de lo que dice, es la identidad que ha construido alrededor de decirlo. Por eso cambiar de opinión se siente como perder algo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "El dolor viejo se alimenta buscando dolor nuevo" },
      {
        b: "texto",
        texto:
          "A la acumulación de dolor no resuelto —lo que quedó de cada humillación, cada pérdida y cada miedo— Tolle lo llama el cuerpo del dolor, y lo describe como algo casi con vida propia: se despierta cada cierto tiempo, necesita alimentarse y se alimenta de más dolor.",
      },
      {
        b: "texto",
        texto:
          "El mecanismo que describe es reconocible para cualquiera que haya tenido una pelea absurda. Uno se levanta con un malestar sin causa clara y a lo largo del día encuentra motivo: una respuesta seca, un recuerdo, una discusión que no hacía falta. Al terminar la bronca hay una sensación extraña de alivio, casi de satisfacción, y Tolle sostiene que es porque algo dentro ha comido.",
      },
      {
        b: "idea",
        texto:
          "Si una discusión te deja con una satisfacción rara, no discutías por lo que decías discutir.",
      },
      {
        b: "texto",
        texto:
          "Su instrucción para eso es la misma que para todo lo demás y es la parte que sí se puede probar: no combatirlo, no analizarlo, no justificarlo. Solo reconocer, en el momento en que empieza, que ha empezado. Sostiene que la atención consciente le quita el alimento, porque el mecanismo necesita que uno esté completamente identificado con él.",
      },
      {
        b: "texto",
        texto:
          "También distingue entre el dolor y el sufrimiento, que es una distinción vieja y útil: el dolor es lo que ocurre, el sufrimiento es lo que la mente construye alrededor durante los años siguientes. Lo primero es inevitable; lo segundo es donde se pasa la mayor parte del tiempo.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "El presente no es un momento más: es el único que hay" },
      {
        b: "texto",
        texto:
          "La afirmación central del libro es que el pasado y el futuro no existen. No como frase bonita: Tolle señala que el pasado solo existe ahora, como recuerdo, y que el futuro solo existe ahora, como anticipación. Lo único que ocurre alguna vez es este momento.",
      },
      {
        b: "texto",
        texto:
          "Y de ahí saca su diagnóstico de la ansiedad: es imposible estar ansioso por el presente, porque el presente ya está ocurriendo y uno lo está resolviendo. La ansiedad siempre es sobre un momento que no ha llegado, y la depresión suele ser sobre uno que ya pasó. Las dos necesitan tiempo psicológico para existir.",
      },
      {
        b: "idea",
        texto:
          "Nadie ha sufrido nunca por el momento presente. Se sufre por uno que ya pasó o por otro que quizá no llegue.",
      },
      {
        b: "texto",
        texto:
          "La objeción evidente —que hay que planificar, pagar recibos y coger aviones— la contesta distinguiendo el tiempo del reloj del tiempo psicológico. El primero es una herramienta y hay que usarlo. El segundo es vivir mentalmente en otro sitio mientras el cuerpo hace algo aquí, y es lo que él considera la enfermedad.",
      },
      {
        b: "texto",
        texto:
          "Su ejercicio para volver es físico y sencillo: llevar la atención al cuerpo. Notar las manos, la respiración, la sensación de estar sentado. Tolle sostiene que la mente no puede irse a otro momento mientras la atención está de verdad en una sensación, y que por eso la puerta del presente está siempre en el cuerpo y no en el pensamiento.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Ante cualquier situación hay tres salidas, y quejarse no es una" },
      {
        b: "texto",
        texto:
          "La parte más práctica del libro es esta, y funciona sin necesidad de aceptar nada de su metafísica. Ante una situación que no te gusta hay exactamente tres opciones: quitarte de en medio, cambiarla o aceptarla por completo. Cualquier otra cosa —quejarse, resistirse, aguantar con resentimiento— es sufrimiento añadido que no modifica la situación.",
      },
      {
        b: "texto",
        texto:
          "Tolle es tajante con lo que llama aceptación, porque se malinterpreta enseguida. No significa resignarse ni aprobar lo que pasa. Significa dejar de discutir con lo que ya es el caso, que es la única forma de tener toda la energía disponible para actuar. Sostiene que la acción que sale de la aceptación es más eficaz que la que sale de la rabia, porque la segunda gasta la mitad en el enfado.",
      },
      {
        b: "lista",
        puntos: [
          { fuerte: "Vete", texto: "si puedes salir de ahí, sal y deja de darle vueltas." },
          { fuerte: "Cámbialo", texto: "si está en tu mano, hazlo y hazlo ya." },
          { fuerte: "Acéptalo", texto: "del todo, sin resentimiento, si no puedes ninguna de las dos." },
        ],
      },
      {
        b: "idea",
        texto:
          "Resistirse a lo que ya ha pasado no lo cambia: solo gasta la fuerza que hacía falta para lo siguiente.",
      },
      {
        b: "texto",
        texto:
          "Y añade una prueba práctica que se puede hacer hoy: si algo lleva semanas dándote vueltas y no has hecho nada, no estás pensando, estás rumiando. La diferencia es si el pensamiento produce una decisión o solo se repite.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "Nadie puede completarte, y esperar que lo haga es lo que rompe las relaciones",
      },
      {
        b: "texto",
        texto:
          "Tolle dedica un capítulo a las relaciones y ahí es donde más concreto se pone. Su tesis es que la mayoría de las parejas empiezan como un intento de que otro rellene un hueco, y que ese encargo es imposible de cumplir: por eso el enamoramiento se convierte tan a menudo en su contrario cuando el otro deja de rellenarlo.",
      },
      {
        b: "texto",
        texto:
          "Describe el mecanismo con precisión: dos personas con su dolor acumulado se encuentran, durante un tiempo el otro tapa el vacío, y en cuanto deja de taparlo aparece el reproche. Y sostiene que los dos cuerpos del dolor acaban alimentándose mutuamente, lo que explica esas parejas que discuten siempre por lo mismo durante veinte años.",
      },
      {
        b: "idea",
        texto:
          "Si esperas que otro te complete, le has dado un trabajo que nadie puede hacer y por el que le vas a culpar.",
      },
      {
        b: "texto",
        texto:
          "Lo que propone no es dejar de tener pareja, sino cambiar el encargo: dejar de pedirle al otro que resuelva algo que no es suyo, y usar la relación como el sitio donde uno ve con más claridad sus propios automatismos, porque no hay ningún otro sitio donde salten tan rápido.",
      },
      {
        b: "texto",
        texto:
          "También habla de la aceptación de los demás en los mismos términos que la de las situaciones: intentar que alguien sea distinto de como es tiene el mismo efecto que discutir con la lluvia. Es la parte del libro más fácil de usar mal, y sobre eso hay algo que decir al final.",
      },
    ],
  },
  {
    bloques: [
      {
        b: "rotulo",
        texto:
          "La rendición no es rendirse: es dejar de pelear con lo que ya ocurrió",
      },
      {
        b: "texto",
        texto:
          "El último concepto del libro es el que Tolle llama rendición, y es el que peor suena en español. No significa abandonar ni conformarse: significa dejar de oponerse internamente a lo que ya está siendo el caso, que es distinto de dejar de actuar.",
      },
      {
        b: "texto",
        texto:
          "Su ejemplo es el de alguien atrapado en el barro de noche y bajo la lluvia. Rendirse no es quedarse ahí: es dejar de decir esto no debería estar pasándome, porque esa frase no saca a nadie del barro y consume la energía que hace falta para salir. Después de decir de acuerdo, esto está pasando, uno empuja.",
      },
      {
        b: "idea",
        texto:
          "Aceptar lo que ya es no te quita la fuerza para cambiarlo: es lo único que te la devuelve entera.",
      },
      {
        b: "texto",
        texto:
          "Aplicado al sufrimiento grave —una enfermedad, una pérdida— Tolle propone algo que suena imposible y que él sostiene que es lo único que funciona: no huir del dolor hacia el pensamiento, sino entrar del todo en la sensación, sin historia y sin explicación. Dice que el sufrimiento se alimenta del relato y que sin relato queda dolor, que se puede soportar.",
      },
      {
        b: "texto",
        texto:
          "Y cierra el libro con la idea de que no hace falta ninguna práctica larga ni ninguna creencia: solo darse cuenta, muchas veces al día, de que uno se ha ido, y volver. La vuelta es la práctica entera.",
      },
    ],
  },
  {
    bloques: [
      { b: "rotulo", texto: "Conclusión" },
      {
        b: "texto",
        texto:
          "El libro sostiene que no eres la voz que oyes en tu cabeza, que casi todo el sufrimiento es tiempo psicológico —rumiar el pasado, temer el futuro—, y que la salida no es pensar mejor sino darse cuenta de que se está pensando. Su método cabe en dos gestos: observar el pensamiento sin discutirlo y volver la atención al cuerpo.",
      },
      {
        b: "texto",
        texto:
          "Lo que aporta son tres cosas que funcionan sin comprar nada de lo demás: la distinción entre dolor y sufrimiento, las tres salidas ante cualquier situación —irse, cambiarla o aceptarla— y la observación de que la ansiedad siempre trata de un momento que no está ocurriendo. Que se hayan vendido decenas de millones de ejemplares dice que mucha gente reconoció ahí su propia cabeza.",
      },
      {
        b: "idea",
        texto:
          "No puedes dejar de pensar por orden. Puedes darte cuenta de que estabas pensando, y eso ya te ha sacado.",
      },
      {
        b: "texto",
        texto:
          "Dónde falla, y hay que decirlo con precisión. El libro es irrefutable por construcción: como sostiene que el pensamiento es el problema, cualquier objeción razonada se puede descartar como cosa de la mente. Eso lo blinda y también lo saca de cualquier conversación seria; no hay manera de estar en desacuerdo con él dentro de sus propios términos.",
      },
      {
        b: "texto",
        texto:
          "Y hay un riesgo real. La aceptación mal entendida es una herramienta magnífica para no cambiar nada: quien está en una situación injusta, en una relación que le hace daño o en una depresión clínica puede leer aquí que su problema es resistirse mentalmente, y eso es falso y puede ser peligroso. Tolle no distingue entre el sufrimiento que produce la rumiación y el que produce una causa externa que hay que quitar, y esa distinción es justo lo que hace falta. La depresión y la ansiedad clínicas se tratan, y este libro no es un tratamiento.",
      },
    ],
  },
];

export const PAGINAS: Record<string, PaginaLibro[]> = {
  "poder-ahora": PODER_AHORA,
  "monje-ferrari": MONJE_FERRARI,
  "sutil-arte": SUTIL_ARTE,
  "cuatro-acuerdos": CUATRO_ACUERDOS,
  ikigai: IKIGAI,
  "pensar-rapido": PENSAR_RAPIDO,
  "inteligencia-emocional": INTELIGENCIA_EMOCIONAL,
  "mente-millonaria": MENTE_MILLONARIA,
  "piensa-hazte-rico": PIENSA_HAZTE_RICO,
  "amigos-influir": AMIGOS_INFLUIR,
  "padre-rico": PADRE_RICO,
  "psicologia-dinero": PSICOLOGIA_DINERO,
  "poder-habitos": PODER_HABITOS,
  "siete-habitos": SIETE_HABITOS,
  "habitos-atomicos": HABITOS_ATOMICOS,
  sapiens: SAPIENS,
  "homo-deus": HOMO_DEUS,
  "armas-germenes": ARMAS_GERMENES,
  "diario-ana-frank": ANA_FRANK,
  "club-5-manana": CLUB_5_MANANA,
  "trabajo-profundo": TRABAJO_PROFUNDO,
};
