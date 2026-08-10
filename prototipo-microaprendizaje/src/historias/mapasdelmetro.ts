import type { Short } from "../shorts";

/* ==========================================================================
   Los mapas del metro.

   Un plano que miente a propósito sobre las distancias y que precisamente
   por eso se entiende. El tema se estropea si se cuenta como diseño gráfico
   con nombres de tipografías.

   La regla del tema: se explica QUÉ INFORMACIÓN SE TIRA A LA BASURA y por
   qué eso ayuda, porque ahí está toda la idea. Y se cuenta el efecto sobre
   la gente, que llega a decidir dónde vive según lo que ve en un plano
   deformado. Con fechas y con consecuencias medidas.
   ========================================================================== */

export const MAPAS_DEL_METRO: Short[] = [
  {
    id: "el-plano-que-miente",
    titulo: "El plano del metro miente",
    gancho: "Lo dibujó un delineante en paro que decidió que la geografía sobraba, y le funcionó tan bien que lo copió el mundo entero.",
    categoria: "Mapas del metro",
    color: "var(--slate)",
    encargo: "Un plano esquemático de metro con líneas de colores rectas y diagonales.",
    fotos: [
      {
        archivo: "Mosaic Underground roundel, Maida Vale.jpg",
        autor: "El emblema del metro de Londres hecho en mosaico en la estación de Maida Vale, inaugurada en 1915.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Mosaic_Underground_roundel,_Maida_Vale.jpg",
        foco: "50% 45%",
        alt: "Un círculo rojo de teselas atravesado por una banda azul con la palabra Underground, sobre azulejos claros y verdes.",
      },
      {
        archivo: "Belsize Park Station. Platform Tile Design.jpg",
        autor: "El friso de azulejos del andén de Belsize Park: cada estación de la línea tenía su propio dibujo. Fotografía de Andrew Riley.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Belsize_Park_Station._Platform_Tile_Design.jpg",
        foco: "50% 50%",
        alt: "Una cenefa de azulejos con figuras geométricas repetidas en verde, crema y marrón a lo largo de la pared del andén.",
      },
      {
        archivo: "Russell Square Underground Station - To the trains tiles 2024-07-23.jpg",
        autor: "Un cartel de azulejos indicando el camino a los trenes en la estación de Russell Square. Fotografía de amandabhslater.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Russell_Square_Underground_Station_-_To_the_trains_tiles_2024-07-23.jpg",
        foco: "50% 50%",
        alt: "Un rótulo hecho con azulejos verdes y crema que dice «To the trains» sobre una pared alicatada.",
      },
      {
        archivo: "Underground sign outside Temple Station London - geograph.org.uk - 2799647.jpg",
        autor: "El emblema del metro en la calle, a la puerta de la estación de Temple, en Londres. Fotografía de Paul Farmer.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Underground_sign_outside_Temple_Station_London_-_geograph.org.uk_-_2799647.jpg",
        foco: "50% 40%",
        alt: "Un cartel circular rojo y azul del metro montado en un poste, con árboles y edificios detrás.",
      },
    ],
    entrada:
      "Londres, 1931. La red de metro ha crecido tanto hacia las afueras que su plano oficial se ha vuelto ilegible y la compañía lo sabe. Está dibujado sobre la geografía real de la ciudad, calle por calle y a escala, así que el centro es un amasijo de estaciones apelotonadas y las líneas exteriores se pierden por los bordes del papel. Un delineante de la propia compañía, que está en paro temporal y dibuja circuitos eléctricos, propone en sus horas libres una solución radical: tirar a la basura la geografía entera y quedarse solo con el orden de las paradas.",
    paginas: [
      {
        rotulo: "Tirar la geografía",
        texto:
          "Su idea era tratar la red como un circuito eléctrico y no como un mapa. Dibujó todas las líneas con rectas horizontales, verticales y diagonales de cuarenta y cinco grados. Separó las estaciones a distancias parecidas aunque en la realidad no lo estuvieran, y ensanchó el centro mientras encogía las afueras. La geografía desapareció casi por completo, y con ella el río, que se dejó dibujado como única referencia reconocible. La compañía lo rechazó de entrada por demasiado revolucionario y tardó dos años en atreverse a imprimirlo, y solo lo hizo como prueba.",
        destacado: { tipo: "frase", frase: "Trató la red como un circuito eléctrico, no como un mapa." },
      },
      {
        rotulo: "Por qué funciona",
        texto:
          "El truco es que un viajero de metro no necesita saber dónde está, sino qué línea coger, dónde cambiar y cuántas paradas faltan. Toda la información geográfica sobra para esa tarea y encima estorba, porque satura el dibujo con datos que no se van a usar. Al eliminarla, el plano se vuelve legible de un vistazo desde el otro extremo del andén. Se imprimieron setecientos mil ejemplares de prueba en 1933 y el público los pidió una y otra vez en las taquillas, así que la compañía acabó rindiéndose y lo adoptó.",
        destacado: { tipo: "cifra", cifra: "700.000", unidad: "ejemplares se imprimieron de prueba" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el modelo que usan casi todas las redes de metro del mundo, con sus líneas de colores y sus ángulos de cuarenta y cinco grados. Quedó también un efecto secundario que se ha estudiado con datos reales. La gente decide sus trayectos según el plano y no según la ciudad, así que mucha gente coge el metro entre dos estaciones que están a cinco minutos andando. Y quedó su autor, que cobró apenas unas guineas por aquel trabajo y tiene hoy una placa conmemorativa en la estación donde vivía.",
      },
    ],
  },
  {
    id: "la-distancia-deformada",
    titulo: "Un plano decide dónde vives",
    gancho: "Si un barrio aparece cerca en el mapa del metro, se percibe como bien comunicado aunque el tren tarde media hora.",
    categoria: "Mapas del metro",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un dedo señalando una estación en un plano de metro pegado a la pared.",
    entrada:
      "Ciudades con metro de todo el mundo, con estudios sobre percepción de distancias publicados desde los años noventa del siglo XX. Un plano esquemático no solo simplifica. Al comprimir el centro y estirar las afueras, crea en la cabeza de quien lo mira una idea equivocada de qué está cerca de qué, y esa idea acaba teniendo consecuencias muy concretas.",
    paginas: [
      {
        rotulo: "Lo que se cree",
        texto:
          "Los experimentos que miden este efecto son sencillos de montar y dan siempre el mismo resultado en cualquier ciudad. Si se pide a viajeros habituales que estimen la distancia real entre dos estaciones, sus respuestas se parecen mucho más al dibujo que a la geografía verdadera. Y eso ocurre incluso con gente que lleva años viviendo en la ciudad. En un estudio famoso se comprobó que muchos usuarios elegían un trayecto con transbordo, más largo en tiempo, solo porque en el plano parecía más directo que caminar dos calles hasta otra línea distinta.",
        destacado: { tipo: "frase", frase: "La gente estima las distancias por el dibujo, no por la ciudad." },
      },
      {
        rotulo: "El precio del suelo",
        texto:
          "El efecto llega hasta el mercado inmobiliario, y ahí se puede medir en dinero contante. Los estudios sobre precios de vivienda encuentran que estar cerca de una estación sube el valor de un piso, cosa esperable. Pero encuentran además que la sensación de centralidad que da el plano influye por sí misma. Un barrio que aparece dibujado dentro del anillo central se anuncia y se percibe como céntrico, aunque el trayecto real sea largo y con transbordo. Varias ciudades han rediseñado su plano precisamente por eso, con presiones de por medio.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "por ciento pueden variar las estimaciones" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una discusión permanente entre los partidarios del esquema puro, que prima la claridad, y los que piden planos más fieles a la geografía real de la ciudad. Algunas redes publican hoy las dos versiones, una esquemática para viajar y otra geográfica para entender la ciudad. Varias han añadido además círculos que indican qué estaciones están a diez minutos andando unas de otras. Y quedó una recomendación práctica para cualquiera que visite una ciudad nueva: antes de bajar al metro, conviene mirar un mapa de verdad y comprobar si vale la pena andar.",
      },
    ],
  },
  {
    id: "los-colores-y-los-daltonicos",
    titulo: "Las líneas que no se distinguen",
    gancho: "Uno de cada doce hombres no distingue bien el rojo del verde, y muchas redes usan las dos líneas juntas.",
    categoria: "Mapas del metro",
    color: "var(--plum)",
    encargo: "Dos líneas de plano de metro, una roja y otra verde, cruzándose.",
    entrada:
      "Redes de metro de todo el mundo, con normas de accesibilidad que se han ido endureciendo desde los años noventa del siglo XX. Alrededor de uno de cada doce hombres y una de cada doscientas mujeres tiene alguna alteración de la visión del color, casi siempre para distinguir rojos y verdes. Los planos de metro llevan décadas usando esos dos colores en líneas contiguas.",
    paginas: [
      {
        rotulo: "El problema",
        texto:
          "La dificultad no es solo separar dos colores parecidos, sino que en un plano hay más pistas que se pierden a la vez. Las líneas se cruzan, se solapan y comparten estaciones, y en muchos diseños el único dato que las distingue es el color, sin ningún grosor ni trazo distinto. Añadir el nombre de cada línea ayuda bastante, pero no siempre aparece impreso a lo largo del recorrido, sino solo en los extremos. El resultado es que una persona con daltonismo puede seguir una línea equivocada durante varias paradas sin darse cuenta.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "de cada 12 hombres tiene esa dificultad" },
      },
      {
        rotulo: "Las soluciones",
        texto:
          "Las correcciones que funcionan son sencillas y baratas si se piensan desde el principio. Se puede dar a cada línea un trazo propio, con puntos, rayas o doble filo, y no depender solo del color. Se pueden elegir además paletas de color comprobadas con simuladores, que muestran en pantalla cómo ve exactamente ese plano alguien con cada tipo de alteración. Y se puede etiquetar cada línea con un número o una letra repetidos a lo largo de todo el recorrido, que es exactamente lo que hacen las redes mejor diseñadas del mundo.",
        destacado: { tipo: "frase", frase: "Si el color es el único dato, el plano falla a mucha gente." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una regla general del diseño de información que se aplica mucho más allá del metro: nunca usar el color como única forma de distinguir algo importante. Vale para los gráficos de un informe, para los semáforos de una máquina y para los avisos de una aplicación. Quedó también el mismo criterio en el propio andén, donde las líneas se identifican además con números y letras. Y quedó una comprobación facilísima para cualquiera que diseñe algo con colores: mirarlo impreso en blanco y negro y ver si todavía se entiende.",
      },
    ],
  },
];
