import type { Short } from "../shorts";

/* ==========================================================================
   Palabras.

   Etimologías. El tema más adictivo del muro y el más fácil de llenar de
   mentiras, porque la etimología popular es un género literario en sí mismo:
   alguien inventa una explicación bonita, suena redonda y se transmite sola.
   Cuanto mejor es la historia, más sospechosa.

   La regla del tema: se distingue siempre entre lo documentado y lo que se
   cuenta. Si hay un texto fechado, se dice cuál y de cuándo. Si lo único que
   hay es una historia repetida, se dice que es eso. Y si el origen de verdad
   es más aburrido que la leyenda, se cuenta el aburrido y se explica por qué
   ganó el otro: esa pelea suele ser lo interesante.

   Las palabras se eligen por lo que se usan hoy. La etimología de una palabra
   que nadie dice no le importa a nadie.
   ========================================================================== */

export const PALABRAS: Short[] = [
  {
    id: "salario-sal",
    titulo: "Nadie cobró en sal",
    gancho: "A los legionarios les pagaban en monedas. Lo de la sal es más resbaladizo.",
    categoria: "Palabras",
    color: "var(--ochre)",
    encargo: "Sal marina gruesa amontonada, luz lateral, granos bien definidos.",
    fotos: [
      {
        archivo: "Bolivian rose salt.jpg",
        autor: "Cristales de sal gruesa, de hasta cinco milímetros. Fotografía de Ivar Leidus.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Bolivian_rose_salt.jpg",
        foco: "50% 50%",
        alt: "Un montón de cristales de sal traslúcidos, blancos y rosados, iluminados de lado sobre fondo negro.",
      },
      {
        archivo: "Roman coin, Denarius of Augustus (FindID 804163).jpg",
        autor: "Un denario romano de plata de época de Augusto, por las dos caras. Portable Antiquities Scheme.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Roman_coin,_Denarius_of_Augustus_(FindID_804163).jpg",
        foco: "50% 32%",
        alt: "Las dos caras de una moneda de plata gastada, con un perfil masculino en una y dos figuras en la otra.",
      },
      {
        archivo: "Salt pans at Żonqor Point 06.jpg",
        autor: "Salinas excavadas en la roca en Żonqor Point, Malta. Fotografía de Kritzolina.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Salt_pans_at_%C5%BBonqor_Point_06.jpg",
        foco: "50% 45%",
        alt: "Balsas poco profundas talladas en la piedra caliza junto al mar, con agua quieta dentro.",
      },
      {
        archivo: "Salt Pans of Tuticorin 1.jpg",
        autor: "Salinas de Tuticorin, en el sur de la India, con los montones de sal recogida. Fotografía de Rangan Datta.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Salt_Pans_of_Tuticorin_1.jpg",
        foco: "50% 50%",
        alt: "Una llanura de balsas de evaporación con montones blancos de sal recortados contra un cielo gris.",
      },
    ],
    entrada:
      "La explicación se cuenta en todas partes, en los libros de curiosidades y en las clases de latín: los soldados romanos cobraban en sal, la sal era carísima, de ahí sale «salario» y de ahí que en inglés se diga que alguien «vale su sal». Es corta, es memorable y encaja perfectamente con la palabra latina, que efectivamente es <em>salarium</em> y viene de <em>sal</em>. El problema aparece cuando uno va a buscar ese pago en sal a las fuentes romanas, que están bastante bien conservadas en lo que a sueldos militares se refiere. El pago no aparece por ninguna parte.",
    paginas: [
      {
        rotulo: "Lo que sí hay",
        texto:
          "La conexión con la sal es real en la palabra: <em>salarium</em> deriva de <em>sal</em> sin discusión. El único autor antiguo que explica el porqué es Plinio el Viejo, en el siglo I, y lo despacha en una línea de la <em>Historia natural</em>: dice que en Roma la sal tuvo mucha importancia y que de ahí viene el nombre de los salarios. No describe ningún reparto de sacos, ni consta en ningún sitio una paga militar en especie de ese tipo. Los legionarios cobraban en monedas, y su sueldo está documentado con cifras: Julio César lo subió a 225 denarios al año, y de esa paga les descontaban comida, ropa y equipo.",
        destacado: {
          tipo: "frase",
          frase: "Una frase de Plinio sosteniendo veinte siglos de anécdota.",
        },
      },
      {
        rotulo: "Las otras versiones",
        texto:
          "Los filólogos manejan varias posibilidades y ninguna es concluyente. Puede que <em>salarium</em> fuese una asignación en dinero destinada a comprar sal, como un complemento con nombre propio. Puede que tuviese que ver con la <em>Via Salaria</em>, la calzada por la que la sal subía desde el Adriático hasta Roma, y que el término naciera de un servicio ligado a esa ruta. O puede sencillamente que la sal fuese una manera de decir «lo básico», como cuando hoy se habla de ganarse el pan. Lo honesto es reconocer que la palabra apunta a la sal y que el mecanismo exacto se perdió.",
        destacado: { tipo: "cifra", cifra: "225", unidad: "denarios al año cobraba un legionario" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Que la sal fue estratégica es indiscutible: era el único modo de conservar carne y pescado antes del frío artificial, y por eso lleva siglos siendo objeto de impuestos, monopolios y motines; la <em>gabelle</em> francesa se cobró durante quinientos años y fue una de las quejas que llegaron a la Revolución. Y del mismo tronco salen palabras que no dan tanta pereza: «ensalada» era la verdura salada, y «salsa» es literalmente lo salado. Es decir, la etimología dudosa es la famosa, y las seguras están en la mesa todos los días sin que nadie las mire.",
      },
    ],
  },

  {
    id: "ok-broma",
    titulo: "Una broma mal escrita",
    gancho: "La palabra más usada del planeta empezó siendo un chiste de periodistas de Boston.",
    categoria: "Palabras",
    color: "var(--slate)",
    encargo: "Una página de periódico del siglo XIX en primer plano, tipografía de plomo.",
    fotos: [
      {
        archivo: "Musée de l'imprimerie de Nantes - 020 - Linotype, Intertype.jpg",
        autor: "Máquina de componer Intertype conservada en el Museo de la Imprenta de Nantes.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMus%C3%A9e%20de%20l%27imprimerie%20de%20Nantes%20-%20020%20-%20Linotype%2C%20Intertype.jpg",
        foco: "42% 58%",
        alt: "Máquina de imprenta de hierro negro con un gran depósito inclinado lleno de canales metálicos paralelos.",
      },
      {
        archivo: "Musée de l'imprimerie de Nantes - 022 - Linotype, assembleur de la linotype.jpg",
        autor: "El ensamblador de una linotipia: la parte donde las matrices caen en fila para formar la línea.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMus%C3%A9e%20de%20l%27imprimerie%20de%20Nantes%20-%20022%20-%20Linotype%2C%20assembleur%20de%20la%20linotype.jpg",
        foco: "50% 50%",
        alt: "Detalle mecánico de una máquina de componer, con piezas de latón y acero encajadas unas contra otras.",
      },
      {
        archivo: "Martin Van Buren by George PA Healy, 1858.jpg",
        autor: "Retrato de Martin Van Buren pintado por George P. A. Healy en 1858, casi veinte años después del OK Club.",
        licencia: "Public domain",
        pdPorEdad: 1894,
        fuente: "https://commons.wikimedia.org/wiki/File%3AMartin%20Van%20Buren%20by%20George%20PA%20Healy%2C%201858.jpg",
        foco: "50% 35%",
        alt: "Retrato al óleo de un hombre mayor de pelo blanco y patillas, con levita oscura, sentado y mirando de frente.",
      },
      {
        archivo: "Buzz Aldrin by Neil Armstrong.jpg",
        autor: "Buzz Aldrin fotografiado por Neil Armstrong en el mar de la Tranquilidad, julio de 1969. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ABuzz%20Aldrin%20by%20Neil%20Armstrong.jpg",
        foco: "50% 40%",
        alt: "Astronauta con traje blanco de pie en la Luna, con el reflejo del compañero y del módulo en el visor dorado.",
      },
    ],
    entrada:
      "Se dice en casi todos los idiomas del mundo y muchos hablantes no sabrían decir de qué son iniciales, ni siquiera si lo son. Hay decenas de teorías sobre su origen y casi todas suenan mejor que la verdadera: que si el griego, que si una lengua indígena de Norteamérica, que si un tal Obadiah Kelly que firmaba los albaranes, que si unas galletas escocesas. La respuesta buena está documentada con fecha exacta, día y periódico incluidos, y resulta ser más tonta que todas las teorías juntas. Es un chiste de imprenta que se le fue de las manos a sus autores.",
    paginas: [
      {
        rotulo: "La moda del error",
        texto:
          "Boston, finales de los años treinta del siglo XIX. Entre los periodistas de la ciudad se puso de moda un juego: abreviar frases con las iniciales de una versión deliberadamente mal escrita. <em>No go</em> pasaba a <em>KG</em>, «know go». <em>All right</em> se convertía en <em>OW</em>, «oll wright». Era humor de imprenta, chistes internos de gente que trabajaba con letras. El <em>Boston Morning Post</em> del <strong>23 de marzo de 1839</strong> publicó una de esas abreviaturas: <em>o.k.</em>, por «oll korrect». El filólogo Allen Walker Read rastreó el origen en los años sesenta y dio con esa aparición, que sigue siendo la primera conocida.",
        destacado: { tipo: "cifra", cifra: "1839", unidad: "la primera vez impreso, en Boston" },
      },
      {
        rotulo: "La campaña",
        texto:
          "El chiste debería haber muerto en un año, como mueren todos. Lo salvó una campaña electoral. En 1840, los partidarios de Martin Van Buren, que se presentaba a la reelección, fundaron el <em>OK Club</em>: Van Buren era de Kinderhook, en Nueva York, y le llamaban Old Kinderhook. Las dos letras estaban en carteles, pegatinas y consignas por todo el país. Van Buren perdió las elecciones, pero las siglas se quedaron pegadas al idioma. Después llegó el telégrafo y las remató de suerte: dos caracteres inconfundibles para acusar recibo eran justo lo que necesitaba un operador que cobraba por pulsación.",
        destacado: {
          tipo: "frase",
          frase: "Perdió las elecciones y ganó el diccionario.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "En 1969, Buzz Aldrin dijo «OK» al posarse en la Luna, lo que probablemente convierte a un chiste tipográfico de Boston en una de las primeras palabras humanas pronunciadas allí. Hoy funciona como adjetivo, adverbio, interjección, verbo y sustantivo, y se ha colado en idiomas que no comparten alfabeto con el inglés. Sobre todo funciona como una casilla neutra: sirve para aceptar sin entusiasmo, para decir que algo cumple sin entusiasmar, y ese matiz muchas lenguas no lo tenían y ahora lo tienen prestado. Nada mal para dos letras que empezaron significando «todo correcto» escrito a propósito con dos faltas.",
      },
    ],
  },

  {
    id: "cuarentena-cuarenta",
    titulo: "Fueron treinta días",
    gancho: "Ragusa lo inventó en 1377 y le pusieron treinta. Venecia subió a cuarenta.",
    categoria: "Palabras",
    color: "var(--clay)",
    encargo: "La muralla marítima de Dubrovnik desde el agua, al atardecer.",
    entrada:
      "La palabra lleva el número dentro y eso lo sabe todo el mundo sin necesidad de que se lo expliquen: cuarenta días. Lo que casi nadie sabe es que la medida no se inventó con ese número, sino con otro más pequeño, en otra ciudad y unos años antes, y que el cambio a cuarenta tuvo probablemente bastante más de teología que de medicina. Fue, en cualquier caso y se cuente como se cuente, la primera política de salud pública documentada de la historia. Y funcionó bastante bien. De aquella norma de puerto salen los controles sanitarios de hoy.",
    paginas: [
      {
        rotulo: "Ragusa, 1377",
        texto:
          "La peste negra había arrasado Europa treinta años antes. En 1377, el Consejo Mayor de Ragusa —la actual Dubrovnik, entonces una república marinera independiente— aprobó una norma: todo el que llegara de zona apestada debía pasar <strong>treinta días</strong> aislado en una isla o en un paraje señalado antes de entrar en la ciudad. Se llamó <em>trentino</em>. Nadie entendía qué era la peste ni cómo se contagiaba; la teoría vigente hablaba de aire corrompido. Pero alguien había observado lo bastante para deducir que el peligro llegaba con la gente y con las mercancías, y que el tiempo lo desactivaba.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "días duraba el aislamiento original" },
      },
      {
        rotulo: "El salto a cuarenta",
        texto:
          "Venecia y otros puertos adoptaron la idea y alargaron el plazo a cuarenta días: <em>quaranta giorni</em>, de donde sale la palabra. Por qué cuarenta es discutido. La explicación más citada apunta al peso simbólico del número en la tradición cristiana —cuarenta días de diluvio, cuarenta de desierto, cuarenta de Cuaresma— y también se ha señalado la medicina hipocrática, que usaba el cuarenta como frontera entre enfermedad aguda y crónica. Lo llamativo es que el plazo funcionaba: la peste bubónica tiene un periodo de incubación de pocos días, así que cuarenta iban sobradísimos, aunque nadie supiera por qué.",
        destacado: {
          tipo: "frase",
          frase: "El número era teología. El resultado fue epidemiología.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Venecia levantó lazaretos, hospitales de aislamiento en islas de la laguna, y el sistema se copió en todo el Mediterráneo con sus registros, sus certificados de sanidad y sus multas. De ahí viene también, por cierto, la fama de las banderas amarillas en los barcos. El vocabulario aguantó seis siglos y medio sin cambiar de nombre, aunque el plazo cambiara mil veces: hoy una cuarentena puede durar cinco días, diez o dos semanas, y sigue llamándose cuarentena. Es de las pocas palabras que llevan escrito por dentro un dato que ya no es cierto y a nadie le molesta.",
      },
    ],
  },
];
