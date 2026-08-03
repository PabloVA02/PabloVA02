import type { Short } from "../shorts";

/* ==========================================================================
   Creencias.

   Religión, mitos y tradiciones. El tema más delicado del catálogo y el que
   más se agradece bien hecho, porque casi todo el mundo cree saber lo que
   pone en la Biblia y casi nadie lo ha comprobado.

   La regla del tema: se cuenta QUÉ DICE EL TEXTO y qué le hemos añadido
   después, sin decirle a nadie qué tiene que creer. La manzana del Génesis,
   los tres Reyes Magos, el buey y la mula: son añadidos de siglos posteriores
   y contarlo no ofende a nadie, porque no discute la fe, discute el atrezo.

   Nada de tono de listillo. El interés está en el dato, no en pillar a nadie.
   ========================================================================== */

export const CREENCIAS: Short[] = [
  {
    id: "manzana-genesis",
    titulo: "En la Biblia no pone que fuera una manzana",
    gancho: "El texto dice «fruto», sin más. La manzana llegó mil años después, y por un juego de palabras en latín.",
    categoria: "Creencias",
    color: "var(--forest)",
    curioso: true,
    encargo: "Un árbol frondoso con una fruta indefinida, pintado al óleo, luz de tarde.",
    entrada:
      "La escena la conoce todo el mundo aunque no haya abierto una Biblia: un jardín, una serpiente, una mujer y una manzana. Está en el primer libro del Antiguo Testamento, el Génesis, escrito en hebreo hace unos dos mil quinientos años. Y si uno va al texto original y busca la manzana, no la encuentra. No aparece ninguna fruta con nombre.",
    paginas: [
      {
        rotulo: "Qué pone",
        texto:
          "El hebreo emplea una palabra genérica, <em>peri</em>, que significa simplemente «fruto». El texto no dice de qué árbol se trata ni qué forma tiene aquello: dice que estaba en el centro del jardín y que estaba prohibido. Los comentaristas judíos antiguos, que discutían cada palabra, propusieron el higo —porque justo después la pareja se tapa con hojas de higuera y sería lógico que fuera el árbol que tenían al lado—, la uva o el trigo. La manzana no aparece entre las candidatas de ninguno de ellos, y no por descuido: en aquella zona del Mediterráneo oriental, el manzano ni siquiera era un árbol corriente.",
        destacado: { tipo: "frase", frase: "Se tapan con hojas de higuera. La fruta más lógica sería el higo." },
      },
      {
        rotulo: "El juego de palabras",
        texto:
          "La manzana entra con la traducción al latín, la que hizo San Jerónimo hacia el año <strong>400</strong> y que se leyó en toda Europa durante mil años. En latín, «mal» se dice <em>malum</em>, y «manzana» se dice <em>malum</em> también: la misma palabra escrita igual, distinta solo en la duración de una vocal al pronunciarla. Ese parecido resultó irresistible. Los copistas y los pintores empezaron a dibujar manzanas en el árbol del bien y del mal, y a partir del Renacimiento ya no hubo otra cosa: la manzana ganó porque hacía un chiste bueno.",
        destacado: { tipo: "cifra", cifra: "400", unidad: "el año de la traducción al latín" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El bulto que a veces se ve en el cuello de los hombres se llama «nuez» en español y «manzana de Adán» en inglés, francés y alemán, por la leyenda de que se le quedó un trozo atravesado. La marca de ordenadores con una manzana mordida juega con lo mismo. Y la palabra latina sobrevive donde menos se espera: el tomate llegó de América sin nombre europeo y en italiano se llamó <em>pomodoro</em>, manzana de oro. Casi tres mil años después, seguimos contando la historia con una fruta que el texto nunca nombró.",
      },
    ],
  },

  {
    id: "reyes-magos",
    titulo: "Los Reyes Magos ni eran reyes ni eran tres",
    gancho: "El Evangelio no dice cuántos son, ni sus nombres, ni que fueran reyes. Se fue completando en quince siglos.",
    categoria: "Creencias",
    color: "var(--plum)",
    curioso: true,
    encargo: "Tres figuras a caballo recortadas contra un cielo estrellado, estilo mosaico antiguo.",
    entrada:
      "Todos los 6 de enero, media España se levanta con regalos que han traído tres reyes venidos de Oriente, con nombre y con camello. La historia está en un solo pasaje del Nuevo Testamento, doce versículos del Evangelio de Mateo, escrito en griego a finales del siglo I. En esos doce versículos no aparece ninguno de esos tres datos: ni el número, ni los nombres, ni la corona.",
    paginas: [
      {
        rotulo: "Qué dice el texto",
        texto:
          "El original habla de unos <em>magoi</em>, palabra griega que designaba a los sacerdotes astrónomos de Persia, la actual Irán: gente que estudiaba las estrellas, no que gobernara nada. Vienen «de Oriente», siguen un astro, preguntan por el rey de los judíos y entregan tres regalos: oro, incienso y mirra. Ahí está el origen del número. Nadie dice que sean tres personas; se dice que traen tres cosas, y con el tiempo se dio por supuesto que traía una cada uno. En las pinturas de las catacumbas romanas aparecen a veces dos, a veces cuatro y en un caso hasta ocho, cada pintor con su cuenta.",
        destacado: { tipo: "frase", frase: "El texto dice tres regalos. No dice tres personas." },
      },
      {
        rotulo: "Cómo se completaron",
        texto:
          "El resto se fue añadiendo despacio. Un teólogo del siglo III propuso que fueran tres, por los tres regalos, y la idea cuajó. Lo de reyes llega después, al enlazarlo con unos versos del Antiguo Testamento que anuncian reyes trayendo oro e incienso. Los nombres —Melchor, Gaspar y Baltasar— aparecen por primera vez en un mosaico italiano del siglo VI. Y que uno de ellos sea negro es más tardío todavía: se generaliza en el siglo XV, cuando se decide que representen los tres continentes conocidos, Europa, Asia y África.",
        destacado: { tipo: "cifra", cifra: "600", unidad: "años tardaron en tener nombre" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En España la cabalgata como tal es reciente: la primera con desfile organizado se hizo en Alcoy en 1866, y de ahí se extendió al resto del país. Que los regalos los traigan ellos y no Papá Noel resistió hasta bien entrado el siglo XX y hoy conviven a duras penas. El buey y la mula del belén tampoco están en ningún evangelio: salen de un texto apartado del canon, escrito en el siglo VIII. Casi todo lo que ponemos en el portal se escribió siglos después que el portal.",
      },
    ],
  },

  {
    id: "navidad-25",
    titulo: "La Navidad no cae el día que nació nadie",
    gancho: "Ningún evangelio dice cuándo nació Jesús. La fecha se fijó trescientos años después, y por buenos motivos.",
    categoria: "Creencias",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un cielo de invierno con el sol muy bajo entre columnas de piedra.",
    entrada:
      "En los cuatro evangelios, escritos en el siglo I, hay genealogías, milagros y discursos enteros, pero no hay una sola fecha de nacimiento. Los primeros cristianos tampoco celebraban cumpleaños: los tenían por costumbre pagana, y lo que conmemoraban era la muerte. Durante casi trescientos años nadie celebró la Navidad, sencillamente porque a nadie se le había ocurrido.",
    paginas: [
      {
        rotulo: "Las pistas del texto",
        texto:
          "Lo poco que el texto sugiere apunta a otra estación. El Evangelio de Lucas cuenta que aquella noche había pastores pasando la noche al raso, cuidando los rebaños en el campo. En Judea, en pleno invierno, las noches bajan de cero y el ganado se recoge; los pastores duermen fuera en primavera y en otoño. Por eso varios cálculos antiguos situaban el nacimiento en marzo, en abril o en septiembre, y hubo iglesias orientales que lo celebraron el 6 de enero durante siglos, como todavía hacen algunas hoy en Rusia y en Etiopía.",
        destacado: { tipo: "frase", frase: "Los pastores duermen fuera en primavera. En diciembre, en Judea, hiela." },
      },
      {
        rotulo: "Por qué el 25",
        texto:
          "La primera mención del 25 de diciembre es de un documento romano del año <strong>354</strong>, y hay dos explicaciones que no se excluyen. Una: en esa fecha caía el solsticio de invierno según el calendario de entonces, el día en que el sol deja de menguar y empieza a crecer, y Roma celebraba una fiesta al Sol invicto; poner ahí el nacimiento de quien se llamaba «luz del mundo» era buena teología y buena política. Otra: se creía que los profetas morían el mismo día en que habían sido concebidos, y si murió un 25 de marzo, nueve meses después cae justo ahí.",
        destacado: { tipo: "cifra", cifra: "354", unidad: "el año del primer documento con la fecha" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Casi todo lo demás vino de fuera y es reciente. El árbol es una costumbre alemana que Europa copió en el siglo XIX. Papá Noel se parece a un obispo del siglo IV que repartía dote a chicas pobres, pero su imagen actual —gordo, rojo, sonriente— se fija en la publicidad norteamericana de los años treinta. Hasta el año que ponemos en el calendario está mal calculado: el monje que lo fijó en el siglo VI se equivocó en unos cuatro años, así que Jesús nació, técnicamente, cuatro años antes de Cristo.",
      },
    ],
  },
];
