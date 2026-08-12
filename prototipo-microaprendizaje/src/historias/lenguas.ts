import type { Short } from "../shorts";

/* ==========================================================================
   Lenguas.

   No confundir con Palabras: allí se cuenta el origen de una palabra suelta,
   aquí lo que le pasa a un idioma entero. Nacer, morir, resucitar, quedarse
   sin parientes, transformarse en silbidos.

   La regla del tema: se cuenta lo que se puede documentar —una inscripción,
   un censo, una ley— y se dice claramente dónde acaba lo demostrado. La
   lingüística histórica está llena de parentescos propuestos que no se han
   podido probar, y decir «no se sabe» es aquí una respuesta completa, no una
   evasiva.

   Y siempre hay hablantes. Un idioma no es un objeto de museo: cada historia
   tiene que acabar en gente concreta que lo usa hoy o que dejó de usarlo.
   ========================================================================== */

export const LENGUAS: Short[] = [
  {
    id: "euskera-aislado",
    titulo: "El euskera no se parece",
    gancho: "Ni al español, ni al francés, ni a nada conocido en el planeta.",
    categoria: "Lenguas",
    color: "var(--sage)",
    curioso: true,
    encargo: "Una estela funeraria de piedra con inscripción antigua, musgo en las juntas.",
    fotos: [
      {
        archivo: "Arraba - Flickr - Mr. Theklan.jpg",
        autor: "Los pastos de Arraba, en el macizo del Gorbea, entre Álava y Vizcaya. Fotografía de Mr. Theklan.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Arraba_-_Flickr_-_Mr._Theklan.jpg",
        foco: "50% 62%",
        alt: "Una ladera de hierba muy verde con ovejas pastando y un farallón de roca gris al fondo, bajo cielo azul.",
      },
      {
        archivo: "Estelas (7603923198).jpg",
        autor: "Estelas funerarias discoidales, un tipo de monumento característico del país. Fotografía de jacilluch.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Estelas_(7603923198).jpg",
        foco: "50% 45%",
        alt: "Varias lápidas de piedra rematadas en disco, alineadas sobre la hierba.",
      },
      {
        archivo: "Estela (7603924798).jpg",
        autor: "Una de esas estelas de cerca, con el disco labrado y la piedra comida por los líquenes. Fotografía de jacilluch.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Estela_(7603924798).jpg",
        foco: "50% 45%",
        alt: "Un disco de piedra tallado con motivos geométricos sobre un pie rectangular, manchado de musgo.",
      },
      {
        archivo: "Iztueta Garakoa.jpg",
        autor: "El caserío Iztueta Garakoa, en Lazkao, Guipúzcoa. Fotografía de Txapisotegi.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Iztueta_Garakoa.jpg",
        foco: "50% 50%",
        alt: "Un caserío blanco de tejado a dos aguas y vigas de madera vista, rodeado de prados y arbolado.",
      },
    ],
    entrada:
      "Casi todos los idiomas de Europa son primos entre sí, aunque no lo parezcan al oírlos. El español, el ruso, el griego, el alemán y hasta el hindi descienden de una misma lengua reconstruida que se hablaba hace unos seis mil años en algún punto de las estepas; el húngaro, el finés y el estonio forman otra familia aparte, con su propio antepasado común. Y luego está el euskera, que se habla en el norte de España y en el suroeste de Francia, y que no encaja en ninguna de las dos ni en ninguna otra del mundo.",
    paginas: [
      {
        rotulo: "Sin parientes",
        texto:
          "A un idioma sin parentesco demostrado se le llama lengua aislada, y el euskera es el único caso en Europa occidental. No es que se le hayan buscado parientes con desgana: se han propuesto durante dos siglos conexiones con las lenguas del Cáucaso, con el bereber, con el íbero e incluso con familias mucho más lejanas, y ninguna ha resistido el método comparativo, que exige correspondencias sistemáticas de sonidos y no simples parecidos sueltos. Con el íbero comparte algunos rasgos, pero hoy se explican mejor por contacto entre vecinos que por una raíz común.",
        destacado: {
          tipo: "frase",
          frase: "No es que no se haya buscado. Es que no aparece.",
        },
      },
      {
        rotulo: "El rastro",
        texto:
          "Lo más antiguo que se conserva de su familia son unos nombres de persona y de divinidad que aparecen en inscripciones romanas del suroeste de la Galia, en una lengua que se llama aquitano: ahí figuran raíces como <em>nescato</em> y <em>cison</em>, reconocibles en el euskera actual <em>neskato</em>, muchacha, y <em>gizon</em>, hombre. El primer libro impreso íntegramente en euskera es de <strong>1545</strong>, y su primera línea es una advertencia del propio autor, el sacerdote Bernat Etxepare, sobre lo poco que se había impreso en aquella lengua hasta entonces y lo mucho que quedaba por hacer.",
        destacado: { tipo: "cifra", cifra: "1545", unidad: "el primer libro impreso en euskera" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Que sobreviviera no es un misterio geográfico: no basta con las montañas, porque las montañas no han salvado a otras lenguas. Lo que se maneja es una combinación de aislamiento relativo, comunidades pequeñas y muy cohesionadas y una romanización menos profunda que en el resto de la península. Hoy lo hablan en torno a setecientas mil personas y, a diferencia de casi todas las lenguas minoritarias de Europa, tiene más hablantes jóvenes que hace cuarenta años, gracias a la escolarización. Es la única puerta que queda abierta a cómo sonaba Europa antes de los indoeuropeos.",
      },
    ],
  },

  {
    id: "hebreo-revivido",
    titulo: "El idioma que resucitó",
    gancho: "Un hombre crió a su hijo hablándole solo en una lengua que nadie usaba en casa.",
    categoria: "Lenguas",
    color: "var(--clay)",
    encargo: "Un diccionario antiguo abierto por una página con caracteres hebreos.",
    fotos: [
      {
        archivo: "Dizengoff St looking north 1930s.jpg",
        autor: "La calle Dizengoff de Tel Aviv en los años treinta, con los rótulos ya en hebreo.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADizengoff%20St%20looking%20north%201930s.jpg",
        foco: "50% 50%",
        alt: "Avenida ancha de una ciudad nueva con edificios blancos de balcones redondeados, un coche y algunos viandantes.",
      },
      {
        archivo: "Bauhaus building at Dizingoff str.jpg",
        autor: "Uno de aquellos edificios de la calle Dizengoff, todavía en pie.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ABauhaus%20building%20at%20Dizingoff%20str.jpg",
        foco: "50% 50%",
        alt: "Edificio blanco de líneas curvas y balcones corridos, con árboles delante.",
      },
      {
        archivo: "Beit-Ha’Ir-Museum-Tel-Aviv.jpg",
        autor: "La plaza Bialik de Tel Aviv, con el antiguo ayuntamiento convertido en museo.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ABeit-Ha%E2%80%99Ir-Museum-Tel-Aviv.jpg",
        foco: "50% 50%",
        alt: "Plaza pequeña rodeada de edificios de los años treinta, con una fuente y palmeras.",
      },
      {
        archivo: "20230227 142451 February 2023 in Tel Aviv.jpg",
        autor: "Calle de Tel Aviv en 2023, con la lengua ya en boca de todo el mundo.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File%3A20230227%20142451%20February%202023%20in%20Tel%20Aviv.jpg",
        foco: "50% 50%",
        alt: "Calle animada de ciudad con gente andando, terrazas y edificios de varias alturas.",
      },
    ],
    entrada:
      "El hebreo dejó de usarse como lengua de conversación diaria hace unos mil ochocientos años. No desapareció —siguió leyéndose, rezándose y escribiéndose sin interrupción durante todo ese tiempo—, pero nadie lo aprendía de su madre ni discutía en él el precio de la verdura. Que hoy lo hablen millones de personas como lengua materna es obra, en buena parte, de un hombre muy testarudo.",
    paginas: [
      {
        rotulo: "El experimento",
        texto:
          "Eliezer Ben-Yehuda llegó a Jerusalén en 1881 con una idea que a casi todos les pareció excéntrica y a algunos, ofensiva: usar la lengua sagrada para la vida corriente. Empezó por su propia casa. Decidió que a su hijo Itamar solo se le hablaría en hebreo, y llevó la norma a un extremo que hoy costaría defender: mantuvo al niño apartado de otros niños para que no se le contaminara el oído. Itamar pasa por ser el primer hablante nativo de hebreo en unos <strong>1.800</strong> años, y de crío estuvo bastante solo.",
        destacado: { tipo: "cifra", cifra: "1.800", unidad: "años sin un hablante nativo" },
      },
      {
        rotulo: "Las palabras que faltaban",
        texto:
          "El problema práctico era enorme: la lengua tenía todo el vocabulario para hablar de sacrificios y de profecías y ninguno para hablar de un tren, un helado o un periódico. Ben-Yehuda se pasó la vida fabricando palabras a partir de raíces antiguas y publicó un diccionario en varios volúmenes que quedó inacabado a su muerte. Muchos de sus inventos cuajaron y otros no: la calle acabó imponiendo alternativas y palabras tomadas de otros idiomas. Ese es el detalle que se olvida al contarlo: una lengua no la resucita un lexicógrafo, la resucitan los hablantes usándola mal.",
        destacado: {
          tipo: "frase",
          frase: "Inventó miles de palabras. La calle eligió cuáles se quedaban.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El caso es único: ninguna otra lengua ha pasado de no tener hablantes nativos a tener millones. Y los lingüistas insisten en una matización importante, porque explica por qué fue posible: el hebreo nunca estuvo muerto del todo. Se leía, se escribía, se usaba como lengua franca entre comunidades judías de países distintos y tenía una literatura viva. Lo que se recuperó no fue una lengua desde cero, sino el último eslabón que faltaba, el de casa. Los intentos parecidos que se han hecho después con idiomas realmente extinguidos, sin literatura viva ni uso escrito continuado, han dado resultados mucho más modestos.",
      },
    ],
  },

  {
    id: "silbo-gomero",
    titulo: "Se habla silbando",
    gancho: "Cruza tres kilómetros de barranco, y desde 1999 se enseña en el colegio.",
    categoria: "Lenguas",
    color: "var(--slate)",
    encargo: "Un barranco profundo de La Gomera con laderas escarpadas y bruma al fondo.",
    entrada:
      "La Gomera es una isla pequeña y muy vertical: barrancos hondos que obligan a caminar durante horas para llegar a un sitio que se ve desde enfrente. En ese terreno, gritar no sirve y andar cuesta media mañana. La solución que se usó allí durante siglos fue convertir el idioma en silbidos capaces de cruzar el aire de un lado al otro del barranco.",
    paginas: [
      {
        rotulo: "Cómo funciona",
        texto:
          "El silbo no es un código con significados fijos, tipo morse: es el español entero, silbado. El hablante reduce las vocales a dos o tres tonos y las consonantes a un puñado de cortes e inflexiones, y quien escucha reconstruye la frase por contexto, igual que se entiende a alguien que habla con la boca llena. Alcanza sin esfuerzo dos o tres kilómetros y en condiciones buenas bastante más, muy por encima de lo que llega un grito. Se silba con uno o dos dedos metidos en la boca y la otra mano en la mejilla, haciendo pantalla.",
        destacado: { tipo: "cifra", cifra: "3 km", unidad: "de alcance de un silbido" },
      },
      {
        rotulo: "El rescate",
        texto:
          "En los años setenta y ochenta estuvo a punto de perderse. Llegaron las carreteras, el teléfono y después el móvil, la gente joven emigró y silbar pasó a verse como cosa de pastores. Quedaban unos pocos silbadores mayores. En <strong>1999</strong>, el Gobierno de Canarias tomó una decisión poco habitual con una tradición oral: meterla en el horario escolar como asignatura obligatoria en primaria y en los primeros cursos de secundaria. Desde entonces han pasado por las clases miles de escolares, y en 2009 la Unesco lo declaró patrimonio cultural inmaterial.",
        destacado: {
          tipo: "frase",
          frase: "No lo salvó un museo: lo salvó meterlo en el horario de clase.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hay lenguas silbadas en otros sitios con la misma geografía imposible —en un pueblo de las montañas del norte de Turquía, en zonas de México, en el Himalaya—, y todas nacieron por separado resolviendo el mismo problema. Lo que se ha visto además con escáneres cerebrales es que quienes lo dominan procesan el silbo en las áreas del lenguaje y no en las de la música: para su cerebro no están oyendo melodías, están oyendo hablar. Es un idioma completo, con su gramática entera, transmitido por un canal que no es la voz y que llega donde la voz no llega.",
      },
    ],
  },
];
