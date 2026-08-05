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
    entrada:
      "Casi todos los idiomas de Europa son primos. El español, el ruso, el griego, el alemán y el hindi descienden de una misma lengua reconstruida que se hablaba hace unos seis mil años; el húngaro, el finés y el estonio forman otra familia aparte. Y luego está el euskera, que se habla en el norte de España y el suroeste de Francia y no encaja en ninguna.",
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
    titulo: "En La Gomera se habla silbando",
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
