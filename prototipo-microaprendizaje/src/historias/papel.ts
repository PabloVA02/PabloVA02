import type { Short } from "../shorts";

/* ==========================================================================
   El papel.

   El material que sostiene casi toda la historia escrita y que casi nadie se
   ha parado a pensar de qué está hecho. El tema se estropea si se cuenta como
   historia de la escritura: aquí manda la fibra.

   La regla del tema: se cuenta DE QUÉ MATERIA PRIMA sale cada papel y qué
   problema trajo esa elección. Trapo, madera, paja o caña cambian el precio,
   la duración y hasta quién puede leer. Con fechas y con cifras de coste.
   ========================================================================== */

export const PAPEL: Short[] = [
  {
    id: "el-papel-era-ropa-vieja",
    titulo: "Papel hecho de ropa vieja",
    gancho: "Trapos de lino y de algodón, machacados hasta deshacerlos. Había recogedores de trapo por las calles.",
    categoria: "Papel",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una tina con pulpa de papel gris y un molde de rejilla apoyado encima.",
    fotos: [
      {
        archivo: "2021 PapiermuehleInnen.jpg",
        autor: "El almacén de trapos de un molino papelero, con la ropa clasificada en cestos. Fotografía de Stefan Oemisch.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2021_PapiermuehleInnen.jpg",
        foco: "35% 50%",
        alt: "Cestos de mimbre llenos de trapos blancos y ropa doblada en un arcón de madera, sobre un suelo de tablas.",
      },
      {
        archivo: "Green paper pulp made from beaten rag fibers.jpg",
        autor: "Pulpa de papel obtenida machacando fibras de trapo. Fotografía de Michelle Cornelison.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Green_paper_pulp_made_from_beaten_rag_fibers.jpg",
        foco: "55% 45%",
        alt: "Una mano sacando de la tina un puñado de pasta verdosa y empapada, deshecha en fibras finísimas.",
      },
      {
        archivo: "Arbeiders achter mengvaten in een papierfabriek, Bestanddeelnr 190-0425.jpg",
        autor: "Operarios junto a las tinas de mezcla de una fábrica de papel. Fotografía de Willem van de Poll.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Arbeiders_achter_mengvaten_in_een_papierfabriek,_Bestanddeelnr_190-0425.jpg",
        foco: "45% 45%",
        alt: "Grandes tinas redondas llenas de pasta blanca en una nave, con dos operarios trabajando entre ellas.",
      },
      {
        archivo: "The rotary press of newspaper Hufvudstadsbladet 1927 (Numeroimaton; JOKAHBL3A A01-19).tif",
        autor: "La rotativa del diario Hufvudstadsbladet en 1927. Museovirasto, Finlandia.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:The_rotary_press_of_newspaper_Hufvudstadsbladet_1927_(Numeroimaton;_JOKAHBL3A_A01-19).tif",
        foco: "45% 45%",
        alt: "Una máquina de imprimir enorme de dos pisos, llena de rodillos y engranajes, en blanco y negro.",
      },
    ],
    entrada:
      "Europa, siglos XIII a XIX. El papel llega desde China a través del mundo islámico y, una vez aquí, se fabrica durante seiscientos años con una sola materia prima, que no es la que todo el mundo imagina: trapos viejos de lino y de cáñamo, es decir, ropa usada. La madera no se toca, porque nadie sabe todavía cómo separar sus fibras sin destrozarlas, y no se sabrá hasta bien entrado el siglo XIX. Así que una industria entera, la que sostiene los libros, los contratos y la correspondencia de medio continente, depende por completo de la ropa que la gente tira.",
    paginas: [
      {
        rotulo: "Del trapo",
        texto:
          "El proceso empezaba pudriendo los trapos en agua durante semanas para que las fibras se soltaran. Después se machacaban con mazos movidos por un molino de agua hasta convertirlos en una pasta blanquecina. El operario metía en la tina un molde rectangular con una rejilla de alambre muy fina, lo sacaba con una capa de pasta encima y escurría el agua. Esa lámina se prensaba entre fieltros para sacarle el resto del agua y se colgaba a secar como la colada. Una hoja de papel era, literalmente, una camisa deshecha y vuelta a montar.",
        destacado: { tipo: "frase", frase: "Una hoja era una camisa deshecha y vuelta a montar." },
      },
      {
        rotulo: "La escasez",
        texto:
          "Como la materia prima era ropa usada, el papel dependía de que hubiera trapos, y nunca había suficientes. Existía un oficio entero dedicado a recogerlos por las calles y por las casas. Llegó a haber leyes que prohibían exportarlos, e incluso que prohibían enterrar a los muertos con ropa de lino, para que las prendas volvieran al circuito. Cuando la imprenta multiplicó la demanda, el precio del trapo se disparó. Varios países ofrecieron premios en metálico a quien encontrara una materia prima alternativa, y durante décadas nadie dio con ella.",
        destacado: { tipo: "cifra", cifra: "600", unidad: "años se hizo el papel con trapo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La solución llegó a mediados del siglo XIX con la pasta de madera, que abarató el papel hasta hacerlo casi gratis y permitió los periódicos de gran tirada. Trajo consigo un problema que aún colea. La madera lleva una sustancia que amarillea y vuelve quebradizo el papel en pocas décadas, mientras que los libros de trapo de hace cuatro siglos siguen flexibles y blancos. Por eso los archivos usan hoy papeles especiales sin esa sustancia, y por eso los periódicos antiguos se deshacen al tocarlos. El material más barato de la historia resultó ser también el que menos dura.",
      },
    ],
  },
  {
    id: "el-papel-que-se-deshace",
    titulo: "Los libros se deshacen",
    gancho: "Millones de volúmenes se vuelven quebradizos y se rompen al pasar la página. La culpa es de un ácido.",
    categoria: "Papel",
    color: "var(--slate)",
    encargo: "Un libro antiguo abierto con los bordes de las hojas rotos y amarillentos.",
    fotos: [
      {
        archivo: "Pages of an old book fluttering in the breeze near a sunlit window during the afternoon.jpg",
        autor: "Las páginas de un libro viejo moviéndose con el aire junto a una ventana. Fotografía de Shixart1985.",
        licencia: "CC BY 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Pages_of_an_old_book_fluttering_in_the_breeze_near_a_sunlit_window_during_the_afternoon.jpg",
        foco: "50% 50%",
        alt: "Libro abierto con las hojas levantadas por el viento, iluminado por la luz de una ventana.",
      },
      {
        archivo: "Old books - old textures.jpg",
        autor: "Libros antiguos con los lomos gastados. Fotografía de Tom Woodward.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Old_books_-_old_textures.jpg",
        foco: "50% 50%",
        alt: "Montón de libros viejos apilados, con las tapas de tela descolorida y los cantos amarillentos.",
      },
      {
        archivo: "Long Room Interior, Trinity College Dublin, Ireland - Diliff.jpg",
        autor: "La Long Room de la biblioteca del Trinity College de Dublín. Fotografía de David Iliff.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Long_Room_Interior,_Trinity_College_Dublin,_Ireland_-_Diliff.jpg",
        foco: "50% 55%",
        alt: "Larga galería de biblioteca con bóveda de madera, estanterías altas repletas de libros y bustos de mármol.",
      },
      {
        archivo: "Condado de Dublín - Long Room-Trinity College - 20170826095451.jpg",
        autor: "Estanterías de la biblioteca del Trinity College de Dublín, con los volúmenes ordenados por tamaño.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Condado_de_Dubl%C3%ADn_-_Long_Room-Trinity_College_-_20170826095451.jpg",
        foco: "50% 50%",
        alt: "Estantes de madera oscura llenos de libros antiguos encuadernados en piel, vistos de cerca.",
      },
    ],
    entrada:
      "Bibliotecas de todo el mundo, desde los años setenta. Los bibliotecarios detectan un problema que crece solo y que no para: los libros publicados aproximadamente entre 1850 y 1990 se están volviendo frágiles. Amarillean, se quiebran por los bordes y acaban rompiéndose al pasar una hoja, mientras que los del siglo XVI, tres siglos más viejos, siguen perfectamente flexibles. La causa no es la edad, ni la humedad, ni la luz: es cómo se fabricó cada papel, y el daño venía de fábrica desde el primer día.",
    paginas: [
      {
        rotulo: "El ácido",
        texto:
          "Cuando se pasó del trapo a la madera hubo que resolver un detalle técnico: que la tinta no se corriera. La solución habitual fue tratar el papel con una mezcla que contenía alumbre y ácido, barata y eficaz. El problema es que ese ácido se queda dentro de la hoja y sigue actuando durante décadas, rompiendo poco a poco las cadenas de celulosa que dan resistencia a la fibra. El papel pierde flexibilidad, se oscurece y termina partiéndose. La madera aporta además una sustancia llamada lignina, que amarillea con la luz y acelera el proceso.",
        destacado: { tipo: "frase", frase: "El ácido se queda dentro de la hoja y sigue trabajando durante décadas." },
      },
      {
        rotulo: "Salvarlos",
        texto:
          "Las bibliotecas grandes montaron programas de desacidificación en masa. Los libros se meten en cámaras donde se les aplica un compuesto que neutraliza el ácido y deja una reserva alcalina para el futuro, lo que multiplica varias veces su esperanza de vida. Es un tratamiento caro, así que se prioriza lo que no existe en otro sitio. Para el resto se opta por digitalizar, aunque eso conserva el texto y no el objeto. Desde los años noventa, la mayoría de los libros se imprimen ya en papel permanente sin ácido.",
        destacado: { tipo: "cifra", cifra: "140", unidad: "años de libros afectados" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una paradoja incómoda para cualquier archivo. Los documentos más antiguos suelen estar mejor conservados que los recientes, sencillamente porque se hicieron con trapo y con tintas estables. Un pergamino medieval puede durar mil años, y un periódico impreso en 1970 difícilmente llegará a cien en un estado que permita pasar sus páginas. Quedó también una advertencia que se repite con los soportes digitales. Allí el problema no es la química, sino el formato: un disco que nadie pueda leer dentro de treinta años conservará la información tan bien como una hoja hecha polvo.",
      },
    ],
  },
  {
    id: "el-tamano-de-un-folio",
    titulo: "Por qué el folio mide eso",
    gancho: "Si lo doblas por la mitad sale exactamente la mitad, con la misma forma. Eso no ocurre por casualidad.",
    categoria: "Papel",
    color: "var(--plum)",
    curioso: true,
    encargo: "Varias hojas de papel de tamaños decrecientes apiladas y giradas.",
    entrada:
      "Alemania, 1922. Se aprueba una norma que fija los tamaños de papel, y de ahí sale el formato que hoy usa casi todo el mundo salvo Estados Unidos. La idea es de 1786. Un científico alemán se dio cuenta de que hay una proporción con una propiedad muy útil: al doblar la hoja por la mitad, el rectángulo que sale conserva la misma forma.",
    paginas: [
      {
        rotulo: "La proporción",
        texto:
          "Para que eso ocurra, el lado largo tiene que ser exactamente la raíz de dos veces el corto, es decir, 1,414 veces mayor. Con cualquier otra proporción, al doblar la hoja se obtiene un rectángulo más achatado o más alargado que el original. El sistema parte además de una hoja de un metro cuadrado de superficie, que es la que se llama A0. Doblándola por la mitad sale la A1, doblando otra vez la A2, y así hasta la A4 que usamos a diario, que es dieciséis veces más pequeña que la primera.",
        destacado: { tipo: "cifra", cifra: "1,414", unidad: "veces el lado corto mide el largo" },
      },
      {
        rotulo: "Para qué sirve",
        texto:
          "Esa propiedad ahorra mucho dinero y muchos quebraderos de cabeza. Reducir un documento a la mitad de tamaño es siempre la misma operación en cualquier fotocopiadora, sin bordes que sobren ni que falten. Los sobres, las carpetas y las estanterías encajan por familias. Y el peso del papel se mide en gramos por metro cuadrado, así que como una hoja A0 es justo un metro cuadrado, calcular cuánto pesa una carta es una división sencilla. Estados Unidos usa otro sistema, heredado de tamaños de molde antiguos, que no tiene esa propiedad.",
        destacado: { tipo: "frase", frase: "Doblar por la mitad da siempre la misma forma, y eso lo simplifica todo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una norma internacional que siguen casi todos los países. Y una anécdota que la explica sola: cuando alguien envía un documento desde América a Europa, el texto sale descolocado en los márgenes, porque las hojas no tienen la misma proporción. Quedó también un ejemplo de manual sobre lo que consigue una buena norma técnica. Nadie piensa en ella y nadie la nota, y precisamente por eso funciona. El papel encaja con las impresoras, con los archivadores y con los sobres sin que nadie tenga que comprobar nada antes de comprarlos.",
      },
    ],
  },
];
