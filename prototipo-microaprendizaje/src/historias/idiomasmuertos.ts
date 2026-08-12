import type { Short } from "../shorts";

/* ==========================================================================
   Los idiomas que se pierden.

   Una lengua desaparece cuando muere su último hablante, y eso ocurre varias
   veces al año. El tema se estropea si se cuenta con lamento: hay que
   explicar el mecanismo por el que una lengua deja de transmitirse.

   La regla del tema: se cuenta SIEMPRE POR QUÉ los padres dejan de hablarla
   a sus hijos, que es donde se decide todo. Y se dan casos concretos con
   nombre, fecha y número de hablantes, incluido algún caso de vuelta atrás.
   ========================================================================== */

export const IDIOMAS_MUERTOS: Short[] = [
  {
    id: "el-ultimo-hablante",
    titulo: "Queda un solo hablante",
    gancho: "Cuando eso pasa, ya no se puede conversar. La lengua sigue existiendo, pero no se puede usar.",
    categoria: "Lenguas perdidas",
    color: "var(--plum)",
    encargo: "Un magnetófono antiguo con una cinta grabándose sobre una mesa.",
    fotos: [
      {
        archivo: "Vintage AFCO Senior 75 Reel-To-Reel Tape Recorder, Battery And AC Power, Made In Japan (14146604475).jpg",
        autor: "Magnetófono portátil de bobinas de los años sesenta, del tipo que se llevaba al campo para grabar hablantes. Fotografía de Joe Haupt.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Vintage_AFCO_Senior_75_Reel-To-Reel_Tape_Recorder,_Battery_And_AC_Power,_Made_In_Japan_(14146604475).jpg",
        foco: "50% 50%",
        alt: "Un magnetófono de maleta con carcasa cromada y dos bobinas de cinta marrón montadas encima.",
      },
      {
        archivo: "Vintage Mayfair Reel-To-Reel Portable Tape Recorder, Model Number Unknown, Made In Japan, Circa 1960s (37790408304).jpg",
        autor: "Otro magnetófono portátil de la misma época, con la cinta enhebrada. Fotografía de Joe Haupt.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Vintage_Mayfair_Reel-To-Reel_Portable_Tape_Recorder,_Model_Number_Unknown,_Made_In_Japan,_Circa_1960s_(37790408304).jpg",
        foco: "50% 50%",
        alt: "Un aparato de grabación de sobremesa con dos carretes y una hilera de teclas rectangulares.",
      },
      {
        archivo: "EMI RM-1B microphone (1930s), Abbey Road Studios.jpg",
        autor: "Micrófono de cinta EMI de los años treinta. Fotografía de Josephenus P. Riley.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:EMI_RM-1B_microphone_(1930s),_Abbey_Road_Studios.jpg",
        foco: "50% 45%",
        alt: "Un micrófono antiguo de rejilla metálica colgado de un soporte, sobre fondo oscuro.",
      },
      {
        archivo: "Sakrisøy village and mountains Lofoten Norway.jpg",
        autor: "El pueblo de Sakrisøy, en las islas Lofoten noruegas. Fotografía de Smtunli.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sakris%C3%B8y_village_and_mountains_Lofoten_Norway.jpg",
        foco: "50% 50%",
        alt: "Un puñado de casas de madera al borde del agua, con montañas nevadas levantándose justo detrás.",
      },
    ],
    entrada:
      "En el mundo se hablan hoy unas siete mil lenguas, y la cifra baja todos los años. Desde 1950 se han perdido cientos, y los lingüistas calculan que cerca de la mitad de las que quedan podrían dejar de hablarse durante este siglo. El proceso no varía mucho de un sitio a otro y siempre acaba igual: una generación deja de enseñársela a la siguiente porque le parece que no sirve para vivir, los hablantes que quedan envejecen juntos y llega un momento en que solo hay dos personas capaces de usarla, y después una sola.",
    paginas: [
      {
        rotulo: "La conversación",
        texto:
          "Que quede un solo hablante es un final peculiar, porque una lengua no es una cosa que se tenga, sino algo que se hace entre dos. Se han documentado casos así en México, en Australia y en el Ártico. Los lingüistas que trabajan con esas personas describen siempre la misma escena: alguien capaz de nombrar cada planta y cada herramienta de su entorno, sin nadie con quien comentarlo. En algún caso ha ocurrido algo todavía más extraño: dos últimos hablantes vivos en el mismo pueblo que no se dirigían la palabra por viejas rencillas familiares.",
        destacado: { tipo: "frase", frase: "Sabe nombrar cada planta de su entorno y no tiene con quién comentarlo." },
      },
      {
        rotulo: "Por qué se deja",
        texto:
          "La causa casi nunca es una prohibición directa, aunque las ha habido y muy duras. Lo habitual es más silencioso. Los padres deciden hablar a sus hijos en la lengua mayoritaria porque creen que así les irá mejor en la escuela y en el trabajo. Y porque han visto que hablar la propia se paga con burlas o con desventaja. Cada decisión de esas es razonable por separado, tomada por unos padres concretos que quieren lo mejor. El resultado colectivo es que en dos generaciones la lengua desaparece de las casas.",
        destacado: { tipo: "cifra", cifra: "7.000", unidad: "lenguas se hablan hoy en el mundo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Lo que se pierde con cada una no es solo un vocabulario. Muchas lenguas pequeñas guardan clasificaciones muy detalladas de plantas, de vientos, de mareas o de enfermedades, acumuladas por gente que llevaba milenios en ese sitio concreto. Por eso los proyectos de documentación graban horas de conversación, de historias y de canciones antes de que sea tarde, con la esperanza de que alguien pueda recuperarlas más adelante. No es una idea ingenua: ya ha ocurrido. Es lo que ha permitido, en unos pocos casos, que una lengua vuelva a hablarse tiempo después de darse por muerta.",
      },
    ],
  },
  {
    id: "una-lengua-que-volvio",
    titulo: "La lengua que resucitó",
    gancho: "Se conservaba solo para rezar y estudiar. Hoy es el idioma materno de millones de personas.",
    categoria: "Lenguas perdidas",
    color: "var(--ochre)",
    encargo: "Un libro antiguo abierto con letras hebreas y un lápiz encima.",
    entrada:
      "Palestina otomana, 1881. El hebreo lleva casi dos mil años sin usarse para hablar. Se lee, se reza y se escribe en él, pero nadie lo tiene como lengua materna: las comunidades judías hablan las lenguas de los sitios donde viven. Ese año llega una familia que decide hacer un experimento doméstico: criar a su hijo hablándole solo en hebreo.",
    paginas: [
      {
        rotulo: "Inventar palabras",
        texto:
          "El primer problema fue práctico. Una lengua que solo se ha usado para textos religiosos y jurídicos no tiene palabras para muñeca, helado, bicicleta o toalla. El padre, que era filólogo, se dedicó a inventarlas a partir de raíces antiguas del propio idioma, y fue publicando listas y después un diccionario enorme que le llevó el resto de su vida. El niño creció bastante aislado, porque sus padres no le dejaban jugar con otros niños para que no se le mezclaran los idiomas. Durante años fue el único hablante nativo de hebreo del planeta.",
        destacado: { tipo: "frase", frase: "Durante años fue el único niño del mundo que lo tenía como lengua materna." },
      },
      {
        rotulo: "La escuela",
        texto:
          "Un experimento familiar no revive una lengua: lo que la revivió fue la escuela. En las colonias agrícolas que se fundaban entonces convivían judíos llegados de países muy distintos, sin ninguna lengua común, y el hebreo era lo único que todos habían estudiado aunque nadie lo hablara. Los maestros empezaron a dar las clases en hebreo por pura necesidad práctica, sin ninguna intención simbólica, y los niños salieron de allí hablándolo entre ellos en el recreo. Cuando esos niños se hicieron padres, la transmisión ocurrió sola en sus casas y ya no dependió del esfuerzo de nadie.",
        destacado: { tipo: "cifra", cifra: "2.000", unidad: "años llevaba sin hablarse a diario" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hoy lo hablan varios millones de personas como lengua materna, y es el único caso de una lengua sin hablantes nativos que ha vuelto a serlo del todo. Los lingüistas señalan que se dieron condiciones muy poco frecuentes. Había un texto conservado y estudiado durante siglos, una población que necesitaba una lengua común y, después, un Estado que la impuso en la administración y en la escuela. Por eso el caso se cita siempre como prueba de que revivir una lengua es posible, y a la vez como aviso de lo difícil que resulta que vuelva a darse una combinación así.",
      },
    ],
  },
  {
    id: "el-diccionario-de-la-cocina",
    titulo: "Salvar la lengua jugando",
    gancho: "Los planes que funcionan no empiezan por la gramática: empiezan por que los niños la oigan jugando.",
    categoria: "Lenguas perdidas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un aula pequeña con sillas de colores y dibujos infantiles en la pared.",
    entrada:
      "Nueva Zelanda, 1982. La lengua del pueblo maorí lleva décadas retrocediendo y la mayoría de los que la hablan bien pasan de los sesenta años. Un grupo de familias monta entonces algo muy sencillo: guarderías donde las abuelas cuidan a los niños pequeños y les hablan únicamente en maorí, todo el día, mientras juegan, comen y duermen.",
    paginas: [
      {
        rotulo: "El nido",
        texto:
          "La idea, que se llamó nido de lenguaje, parte de una observación básica. Un niño aprende una lengua si la oye usarse de verdad para cosas reales, no si la estudia una hora a la semana. En esas guarderías no se enseña la lengua, se vive en ella. Los mayores hablan con los pequeños de lo que están haciendo en ese momento, y los pequeños acaban respondiendo en la misma lengua sin darse cuenta. En pocos años el modelo se extendió por todo el país y después saltó a Hawái, donde una lengua que estaba en situación crítica ha recuperado miles de hablantes jóvenes.",
        destacado: { tipo: "frase", frase: "En esas guarderías no se enseña la lengua: se vive en ella." },
      },
      {
        rotulo: "La cadena",
        texto:
          "Lo que hace funcionar el sistema es que no se queda ahí. Después del nido hacen falta escuelas primarias en esa lengua, luego institutos y luego universidad. Y sobre todo hacen falta trabajos, trámites y comercios donde se pueda usar sin que nadie ponga mala cara. Si un chico sale del colegio hablándola pero no puede usarla en ningún otro sitio, la abandona en cuanto empieza a trabajar. Por eso los planes que han funcionado combinan la escuela con radio, televisión, canciones, señales de tráfico y administración, para que la lengua aparezca por todas partes.",
        destacado: { tipo: "cifra", cifra: "1982", unidad: "el año de los primeros nidos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un método que se aplica hoy en decenas de lenguas minoritarias, del gaélico escocés a varias lenguas amerindias. Los resultados son desiguales y nadie promete milagros: recuperar una lengua exige dinero, escuela y varias décadas de constancia. Pero aquellos nidos cambiaron por completo la idea de lo que hay que hacer para conseguirlo. Antes se pensaba que salvar una lengua consistía en escribir su gramática y su diccionario. Hoy se sabe que lo decisivo pasa en la cocina de una casa, cuando alguien decide en qué idioma le habla a un niño.",
      },
    ],
  },
];
