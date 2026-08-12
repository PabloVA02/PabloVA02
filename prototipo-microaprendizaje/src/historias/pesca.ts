import type { Short } from "../shorts";

/* ==========================================================================
   La pesca.

   La última gran actividad de caza que sigue practicando la humanidad a
   escala industrial. El tema se estropea si se cuenta con romanticismo de
   marinero: aquí manda el pescado, que se pudre, y la red, que se lleva por
   delante lo que pilla.

   La regla del tema: se cuenta CÓMO SE CONSERVA Y CUÁNTO QUEDA. Sin
   conservación no hay comercio, y sin control no queda pescado. Cada short
   explica una técnica y su precio, con cifras de capturas cuando las haya.
   ========================================================================== */

export const PESCA: Short[] = [
  {
    id: "el-bacalao-que-cruzo-el-oceano",
    titulo: "El bacalao cruzó el mar",
    gancho: "Aguantaba años sin estropearse y pesaba poco. Era la comida que hacía posible un viaje sin escalas.",
    categoria: "Pesca",
    color: "var(--slate)",
    encargo: "Bacalaos abiertos y secos colgados de un tendedero de madera al viento.",
    fotos: [
      {
        archivo: "Loaded Drying Racks for Stockfish at Reine, Lofoten, Norway.jpg",
        autor: "Secaderos de bacalao cargados en Reine, en las islas Lofoten. Fotografía de Christoph Strässler.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Loaded_Drying_Racks_for_Stockfish_at_Reine,_Lofoten,_Norway.jpg",
        foco: "50% 50%",
        alt: "Bastidores de madera cubiertos de pescado abierto secándose al aire, con montañas nevadas al fondo.",
      },
      {
        archivo: "Bahar ic-Caghaq Saltpans.jpg",
        autor: "Salinas excavadas en la roca de la costa maltesa. Fotografía de Marika Caruana.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Bahar_ic-Caghaq_Saltpans.jpg",
        foco: "40% 60%",
        alt: "Balsas cuadradas talladas en la piedra junto al mar, con un arcoíris sobre un cielo de tormenta.",
      },
      {
        archivo: "St. Andrews Church - Flickr - rustyruth1959.jpg",
        autor: "El interior de una iglesia parroquial inglesa. Fotografía de rustyruth1959.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:St._Andrews_Church_-_Flickr_-_rustyruth1959.jpg",
        foco: "50% 50%",
        alt: "La nave de una iglesia con bancos de madera, cirios altos y un arco de piedra al fondo.",
      },
      {
        archivo: "Dried and salted cod.jpg",
        autor: "Una pila de bacalao seco tapada con listones y piedras. Fotografía de Anders Beer Wilse.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Dried_and_salted_cod.jpg",
        foco: "50% 55%",
        alt: "Cientos de bacalaos secos apilados formando un bloque, con una tapa de tablas sujeta por cantos rodados.",
      },
    ],
    entrada:
      "Atlántico norte, siglos XV y XVI. Un barco que se aleja de la costa tiene un problema antes que ningún otro, y no es el viento ni la navegación: es la comida. La carne se pudre en cuestión de días, el agua dulce se corrompe en los toneles y la verdura no aguanta nada, de modo que la autonomía real de una tripulación no la marca el casco sino lo que se pueda guardar durante meses sin que se estropee. La solución venía del norte y llevaba siglos usándose allí: un pescado partido en dos, salado y secado al viento hasta quedar duro como una tabla.",
    paginas: [
      {
        rotulo: "Sal y viento",
        texto:
          "El bacalao tiene una carne muy magra, casi sin grasa, y esa es la clave de todo: la grasa es lo que se enrancia. Abierto en dos, salado y colgado al frío, pierde en unas semanas la mayor parte de su agua y queda tan duro que suena a madera al golpearlo. Así puede aguantar años sin nevera. Para comerlo hay que ponerlo en remojo dos o tres días, cambiando el agua, y entonces recupera buena parte de su textura. Un tonel de bacalao alimentaba a una tripulación durante semanas y ocupaba una fracción de lo que ocupaba la carne salada.",
        destacado: { tipo: "frase", frase: "Casi no tiene grasa, y la grasa es lo que se enrancia." },
      },
      {
        rotulo: "Los viernes",
        texto:
          "La demanda venía de la religión. La Iglesia católica prohibía comer carne los viernes, durante la Cuaresma y en otras fechas, lo que sumaba entre ciento cincuenta y doscientos días al año en algunos sitios. El pescado no contaba como carne, así que había que abastecer a media Europa de proteína barata que se pudiera guardar. Los barcos vascos, portugueses e ingleses empezaron a faenar cada vez más lejos, hasta llegar a los bancos de Terranova. El negocio del bacalao seco financió flotas enteras antes de que hubiera colonias que abastecer, y llenó de barcos europeos unas aguas que aún no aparecían en los mapas.",
        destacado: { tipo: "cifra", cifra: "200", unidad: "días al año sin carne en el calendario" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron platos que siguen en las cartas de medio mundo, del bacalao al pilpil a las tortitas del Caribe, y todos vienen de la misma necesidad de conservar. Quedó también un detalle que explica muchos mapas: los pesqueros conocían las aguas de Terranova y sus nieblas mucho antes de que a nadie le interesara colonizar aquello, porque iban a por pescado y volvían. Y quedó la costumbre del remojo, que hoy parece un capricho de cocinero y entonces era la única forma de comerse aquella tabla salada. Tres días de agua para deshacer meses de viento.",
      },
    ],
  },
  {
    id: "la-primera-queja-por-el-arrastre",
    titulo: "Contra el arrastre en 1376",
    gancho: "Unos pescadores pidieron al rey que prohibiera una red nueva. Decían que arrasaba el fondo del mar.",
    categoria: "Pesca",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una red de pesca vieja amontonada en un muelle de piedra.",
    fotos: [
      {
        archivo:
          "The sunlit North Sea from the harbour entrance with a number of trawlers under sail on the horizon. RMG P27512.tiff",
        autor: "Barcos de pesca a vela saliendo hacia los caladeros del mar del Norte, en 1906. Royal Museums Greenwich.",
        licencia: "Public domain",
        fuente:
          "https://commons.wikimedia.org/wiki/File:The_sunlit_North_Sea_from_the_harbour_entrance_with_a_number_of_trawlers_under_sail_on_the_horizon._RMG_P27512.tiff",
        foco: "50% 55%",
        alt: "Fotografía antigua del mar brillando al sol, con veleros de pesca recortados en el horizonte.",
      },
      {
        archivo: "Boats on the mud at Wells-Next-The-Sea - geograph.org.uk - 4933475.jpg",
        autor: "Barcas varadas sobre el fango en la bajamar de Wells-next-the-Sea, Norfolk. Fotografía de Richard Humphrey.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Boats_on_the_mud_at_Wells-Next-The-Sea_-_geograph.org.uk_-_4933475.jpg",
        foco: "50% 50%",
        alt: "Pequeñas embarcaciones apoyadas en el barro de un estuario con la marea baja.",
      },
      {
        archivo: "Fishing boats moored in Wells-next-the-Sea - geograph.org.uk - 6957171.jpg",
        autor: "Barcos de pesca amarrados en el puerto de Wells-next-the-Sea. Fotografía de Richard Humphrey.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Fishing_boats_moored_in_Wells-next-the-Sea_-_geograph.org.uk_-_6957171.jpg",
        foco: "50% 50%",
        alt: "Barcos de pesca de colores amarrados en fila junto al muelle de un puerto pequeño.",
      },
      {
        archivo: "Fishing boat \"NEVER CAN TELL - A\" moored in Wells-Next-The-Sea harbour - geograph.org.uk - 6256711.jpg",
        autor: "Un pesquero amarrado en el puerto de Wells-next-the-Sea, Norfolk. Fotografía de Richard Humphrey.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Fishing_boat_%22NEVER_CAN_TELL_-_A%22_moored_in_Wells-Next-The-Sea_harbour_-_geograph.org.uk_-_6256711.jpg",
        foco: "50% 50%",
        alt: "Barco de pesca azul con la cubierta llena de aparejos, amarrado junto al muelle.",
      },
    ],
    entrada:
      "Inglaterra, 1376. Un grupo de pescadores presenta una petición formal al rey y al parlamento contra un aparejo nuevo que se ha empezado a usar en la costa. Es una red con forma de bolsa que se arrastra por el fondo del mar sujeta a un armazón de madera, y va tan pegada al lecho que lo rastrilla entero. Sus vecinos aseguran que se lleva por delante todo lo que encuentra, incluido lo que aún no ha crecido, y piden que se prohíba. La discusión que abren aquel año sigue exactamente igual de abierta seis siglos y medio después.",
    paginas: [
      {
        rotulo: "La bolsa",
        texto:
          "El aparejo funciona como una bolsa que se remolca desde un barco y se mantiene abierta por una viga de madera. La boca va rozando el fondo, y todo lo que hay allí —peces adultos, crías, algas, conchas— entra dentro sin distinción. Esa es su ventaja y su problema: pesca muchísimo, pero no elige. La petición de 1376 describe con detalle que las mallas son tan estrechas que retienen a los peces pequeños, y advierte de que si se llevan a las crías no habrá peces al año siguiente. El razonamiento es exactamente el de la pesca sostenible moderna.",
        destacado: { tipo: "frase", frase: "Pesca muchísimo, y ese es el problema: no elige." },
      },
      {
        rotulo: "Seis siglos",
        texto:
          "El rey ordenó investigar y el asunto quedó en nada, como quedaría en las decenas de quejas parecidas que se repitieron durante los siglos siguientes en Francia, en los Países Bajos y en España. El aparejo se fue perfeccionando con los siglos. Cambió la viga de madera por dos puertas metálicas que se abren solas con la presión del agua, se motorizó y acabó arrastrando redes de decenas de metros de boca. Hoy es el arte de pesca más productivo del mundo y también el más criticado, porque remueve el fondo marino y captura especies que nadie buscaba.",
        destacado: { tipo: "cifra", cifra: "1376", unidad: "el año de la primera queja escrita" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un documento que los biólogos marinos citan a menudo, porque demuestra que el problema no lo descubrió la ciencia del siglo XX: lo describieron unos pescadores medievales que veían menguar sus capturas. Quedaron también las normas que salieron de ahí con los siglos, como la malla mínima, que obliga a que los peces pequeños puedan escapar por los agujeros de la red. Es la misma solución que pedía aquel escrito, seiscientos años antes de que existiera ningún ministerio de pesca. Lo que costó fue hacerla cumplir en alta mar, donde no había quien vigilara.",
      },
    ],
  },
  {
    id: "el-bacalao-que-no-volvio",
    titulo: "El caladero se vació",
    gancho: "Se pescó allí quinientos años. En 1992 se cerró de golpe y dejó a treinta mil personas sin trabajo.",
    categoria: "Pesca",
    color: "var(--plum)",
    encargo: "Un barco pesquero varado en un puerto vacío bajo un cielo gris.",
    entrada:
      "Terranova, Canadá, 2 de julio de 1992. El gobierno canadiense anuncia el cierre total de la pesca de bacalao en unas aguas que llevaban abasteciendo a Europa desde el siglo XVI. Se calculaba que allí había pescado para siempre. En veinte años de pesca industrial, la población adulta se había reducido a cerca del uno por ciento de la que hubo.",
    paginas: [
      {
        rotulo: "Los barcos factoría",
        texto:
          "Hasta los años cincuenta se pescaba desde barcos pequeños con anzuelo y red, y el propio ritmo del trabajo ponía un límite. Después llegaron los arrastreros congeladores, barcos enormes que localizan los bancos de peces con sonar, arrastran redes gigantes las veinticuatro horas y procesan y congelan la captura a bordo, sin necesidad de volver a puerto. Un solo barco de estos podía capturar en una hora lo que un pesquero tradicional en una temporada entera. Las capturas se dispararon, y durante años eso se leyó como una buena noticia para la región.",
        destacado: { tipo: "frase", frase: "Un barco capturaba en una hora lo que otro en toda una temporada." },
      },
      {
        rotulo: "Las cuentas malas",
        texto:
          "El colapso se veía venir en los datos, pero los datos estaban mal hechos. Para estimar cuánto pescado quedaba se usaban las capturas de la propia flota, y como los barcos eran cada vez mejores encontrando los últimos bancos, las capturas se mantenían altas mientras el mar se vaciaba. Los científicos que avisaron fueron ignorados o suavizados, porque cerrar la pesca costaba miles de empleos en una región que vivía de eso. Cuando por fin se cerró, ya no había margen: fue el mayor despido de un solo día en la historia del país.",
        destacado: { tipo: "cifra", cifra: "30.000", unidad: "personas se quedaron sin trabajo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El bacalao no ha vuelto. Treinta años después, la moratoria sigue casi entera y la población se recupera muy despacio, porque el hueco que dejó lo han ocupado otras especies que se comen sus huevos y sus crías. La región perdió población, que emigró a otras provincias, y un oficio de cinco siglos se cortó en una sola generación. Quedó, eso sí, un caso de estudio que aparece en todos los manuales de gestión de recursos naturales. Cuando la única medida de lo que queda es lo que se saca, el aviso llega siempre tarde.",
      },
    ],
  },
];
