import type { Short } from "../shorts";

/* ==========================================================================
   Juegos.

   Un juego es un sistema de reglas que millones de personas aceptan
   voluntariamente, así que su historia es siempre la de alguien que diseñó
   ese sistema para algo y de alguien que después se quedó con él.

   La regla del tema: se persigue la AUTORÍA y el dinero. Quién lo inventó de
   verdad, qué quería demostrar, quién lo vendió como suyo, cuánto cobró cada
   parte. En este tema hay más gente robada que en ningún otro, y esas
   historias están documentadas en patentes y en sentencias.

   Y se admite lo que no se sabe. En juegos antiguos, el origen suele ser una
   nebulosa de versiones nacionales enfrentadas, y decirlo es más honesto que
   elegir la más bonita.
   ========================================================================== */

export const JUEGOS: Short[] = [
  {
    id: "monopoly-denuncia",
    titulo: "Nació contra monopolios",
    gancho: "Lo diseñó una mujer en 1904 para enseñar por qué acaparar suelo arruina a todos.",
    categoria: "Juegos",
    color: "var(--ochre)",
    encargo: "Un tablero de juego de mesa antiguo con casillas de propiedades, muy gastado.",
    fotos: [
      {
        archivo: "Landlords Game 1906 image courtesy of T Forsyth owner of the registered trademark 20151119.jpg",
        autor: "El tablero de The Landlord's Game de 1906, con la patente de Lizzie J. Magie impresa en el centro. Imagen cedida por Thomas Forsyth.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Landlords_Game_1906_image_courtesy_of_T_Forsyth_owner_of_the_registered_trademark_20151119.jpg",
        foco: "50% 50%",
        alt: "Un tablero cuadrado de colores vivos con casillas de calles alrededor, una casilla de asilo de pobres y otra de cárcel en las esquinas.",
      },
      {
        archivo: "Wuerfel - Flickr - wilhei55.jpg",
        autor: "Un par de dados. Fotografía de Willi Heidelbach.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Wuerfel_-_Flickr_-_wilhei55.jpg",
        foco: "50% 50%",
        alt: "Dos dados de esquinas redondeadas y puntos negros sobre una superficie clara.",
      },
      {
        archivo: "Atlantic City Convention Hall, On Boardwalk, West of Mississippi Avenue, Atlantic City (Atlantic County, New Jersey).jpg",
        autor: "El paseo marítimo de Atlantic City, cuyas calles dieron nombre a las casillas del juego. Fotografía de Jack Boucher, 1992.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Atlantic_City_Convention_Hall,_On_Boardwalk,_West_of_Mississippi_Avenue,_Atlantic_City_(Atlantic_County,_New_Jersey).jpg",
        foco: "50% 50%",
        alt: "Un edificio enorme de ladrillo y piedra junto al paseo de tablas de una ciudad costera.",
      },
      {
        archivo: "Atlantic City Convention Hall, On Boardwalk, West of Mississippi Avenue, Atlantic City, Atlantic County, NJ HABS NJ,1-ATCI,18-11.tif",
        autor: "Otra vista del mismo edificio en el paseo de Atlantic City. Historic American Buildings Survey.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Atlantic_City_Convention_Hall,_On_Boardwalk,_West_of_Mississippi_Avenue,_Atlantic_City,_Atlantic_County,_NJ_HABS_NJ,1-ATCI,18-11.tif",
        foco: "50% 50%",
        alt: "Fachada larga de un pabellón de congresos vista en diagonal, en blanco y negro.",
      },
    ],
    entrada:
      "La versión oficial que la caja del juego contó durante décadas es redonda y perfecta: Charles Darrow, un parado de la Gran Depresión, inventa un juego en la mesa de su cocina, se lo compra Parker Brothers en 1935 y se hace millonario de la noche a la mañana. La primera parte de esa historia es sencillamente falsa, y la empresa lo supo desde el principio. El juego llevaba treinta años circulando de mano en mano por el noreste del país, tenía una patente anterior registrada en regla, y esa patente la había firmado una mujer.",
    paginas: [
      {
        rotulo: "El original",
        texto:
          "Elizabeth Magie patentó en <strong>1904</strong> algo llamado <em>The Landlord's Game</em>. Era una herramienta didáctica al servicio de las ideas del economista Henry George, que sostenía que el suelo no debía poder acapararse en manos privadas. Y traía un detalle que lo explica todo: dos reglamentos alternativos. Con uno se jugaba a acumular propiedades hasta arruinar al resto; con el otro, la riqueza generada se repartía y ganaban todos. La idea era que la gente jugara a los dos seguidos y notara en el cuerpo la diferencia entre un sistema y el otro.",
        destacado: {
          tipo: "frase",
          frase: "Traía dos reglamentos. Solo se hizo famoso el que arruina a los demás.",
        },
      },
      {
        rotulo: "Los quinientos dólares",
        texto:
          "El juego se copió a mano durante treinta años en universidades y comunidades del noreste de Estados Unidos, y cada grupo le puso los nombres de las calles de su ciudad; la versión con las de Atlantic City venía de unos jugadores cuáqueros. De ahí lo tomó Darrow, que lo dibujó y se lo vendió a Parker Brothers como propio. La editorial, al descubrir la patente anterior, compró la de Magie por <strong>500 dólares</strong> sin derechos de autor. Ella dio entrevistas en 1936 explicando el asunto, y a nadie le interesó demasiado.",
        destacado: { tipo: "cifra", cifra: "500 $", unidad: "cobró la inventora, sin regalías" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La historia salió a la luz por un pleito. En los años setenta, un profesor de economía sacó al mercado un juego llamado Anti-Monopoly, lo demandaron por la marca, y para defenderse se dedicó a demostrar en el juzgado que el Monopoly no lo había inventado quien decía la caja. El litigio duró una década y sacó a Magie del olvido. Hoy el juego más vendido de la historia sobre acumular propiedades es, en su origen, una crítica a acumular propiedades, con las instrucciones para demostrarlo perdidas por el camino.",
      },
    ],
  },

  {
    id: "turco-ajedrez",
    titulo: "El autómata tramposo",
    gancho: "Ganó a media Europa durante 84 años. Dentro iba una persona.",
    categoria: "Juegos",
    color: "var(--plum)",
    encargo: "Un autómata mecánico del siglo XVIII con figura humana sentada ante un tablero.",
    fotos: [
      {
        archivo: "The Turk.jpg",
        autor: "Reconstrucción del Turco, el autómata ajedrecista de Kempelen, en el Heinz Nixdorf MuseumsForum de Paderborn.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AThe%20Turk.jpg",
        foco: "45% 55%",
        alt: "Figura de tamaño natural con turbante y casaca roja sentada ante un tablero de ajedrez, con la mano sobre una pieza.",
      },
      {
        archivo: "Racknitz - The Turk 1.jpg",
        autor: "Lámina de Joseph Racknitz, 1789, con su reconstrucción de cómo cabía una persona dentro del mueble.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ARacknitz%20-%20The%20Turk%201.jpg",
        foco: "50% 50%",
        alt: "Grabado antiguo del autómata con el mueble abierto y una figura humana agazapada dentro.",
      },
      {
        archivo: "Racknitz - The Turk 4.jpg",
        autor: "Otra de las láminas de Racknitz, con el mecanismo del interior desmontado.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ARacknitz%20-%20The%20Turk%204.jpg",
        foco: "50% 50%",
        alt: "Grabado con los engranajes y las puertas del mueble del autómata dibujados por separado.",
      },
      {
        archivo: "Chess game Staunton No. 6.jpg",
        autor: "Juego de ajedrez de madera con el patrón Staunton, el que se usa hoy en los torneos.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AChess%20game%20Staunton%20No.%206.jpg",
        foco: "50% 50%",
        alt: "Piezas de ajedrez de madera clara y oscura colocadas sobre el tablero al empezar la partida.",
      },
    ],
    entrada:
      "En 1770, el ingeniero húngaro Wolfgang von Kempelen presentó en la corte de Viena una máquina que jugaba al ajedrez: un mueble con engranajes a la vista y, sentada tras él, una figura de tamaño natural vestida a la turca que movía las piezas con el brazo. Antes de cada partida se abrían una por una las puertas del mueble y se enseñaba el mecanismo al público, para que viera que allí dentro solo había ruedas dentadas. Y luego la máquina jugaba, y ganaba casi siempre, contra cualquiera que se sentara enfrente.",
    paginas: [
      {
        rotulo: "La exhibición",
        texto:
          "El truco no estaba en engañar sobre lo que había dentro, sino en cómo se enseñaba. El mueble tenía varios compartimentos y se abrían por turnos, nunca todos a la vez; dentro había un asiento deslizante sobre raíles, de modo que el jugador escondido se movía de un lado a otro según qué puerta tocara. Manejaba las piezas con un pantógrafo y seguía la partida gracias a unos imanes colocados bajo el tablero. Por el asiento pasaron varios ajedrecistas fuertes de la época, contratados en secreto y con la obligación de no contarlo.",
        destacado: { tipo: "cifra", cifra: "84", unidad: "años de gira antes de arder" },
      },
      {
        rotulo: "Los rivales",
        texto:
          "El Turco recorrió Europa y América durante décadas y jugó contra gente de primera fila: hay constancia de partidas con Benjamin Franklin en París y con Napoleón en Viena, que según las crónicas intentó hacer trampas para ver qué pasaba y se llevó una reacción airada del autómata. En 1836, un joven Edgar Allan Poe publicó un ensayo razonando por qué tenía que haber un ser humano dentro; acertó en la conclusión y falló en varios detalles del mecanismo, porque supuso al jugador de pie y no sentado. El aparato terminó ardiendo en un incendio en Filadelfia, en 1854.",
        destacado: {
          tipo: "frase",
          frase: "Poe dedujo que había alguien dentro. Se equivocó en cómo.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se le suele llamar el primer fraude tecnológico moderno, y sirve de nombre para un fenómeno actual: hoy se habla de <em>turco mecánico</em> para referirse a servicios que se presentan como automáticos y que por detrás resuelven personas mal pagadas, algo que ha aparecido en más de una empresa de inteligencia artificial cuando se ha mirado dentro. La ironía la cerró la historia por su cuenta: en 1997, doscientos veintisiete años después de la presentación de Kempelen en Viena, una máquina de verdad, sin nadie escondido dentro, ganó un duelo al campeón del mundo de ajedrez.",
      },
    ],
  },

  {
    id: "tetris-sovietico",
    titulo: "El Tetris que no dio dinero",
    gancho: "Lo programó en un ordenador del Estado, así que el juego era del Estado.",
    categoria: "Juegos",
    color: "var(--slate)",
    encargo: "Una pantalla de fósforo verde con piezas geométricas cayendo, fotografiada de cerca.",
    entrada:
      "Junio de 1984, Moscú. Alexéi Pázhitnov trabaja en el centro de cómputo de la Academia de Ciencias de la URSS y programa, fuera de sus tareas y por gusto, un juego con piezas de cuatro cuadrados que caen desde arriba y hay que ir encajando abajo. Se lo pasa a los compañeros en disquete para que le digan qué les parece, sin más intención que esa. En cuestión de meses el juego está instalado en los ordenadores de media administración soviética y no trabaja nadie. Y él no tiene ningún derecho sobre lo que ha hecho.",
    paginas: [
      {
        rotulo: "De quién es",
        texto:
          "El problema legal era de raíz. En la Unión Soviética, lo que un empleado creaba con medios del Estado pertenecía al Estado, así que el juego no era de Pázhitnov en ningún sentido. Cuando empezaron a llegar ofertas de fuera, la negociación la llevó una agencia oficial llamada Elorg, y las licencias que se firmaron —para ordenador, para máquina recreativa, para consola doméstica, para portátil— estaban redactadas de forma tan confusa —sobre todo en qué contaba como ordenador y qué como consola— que provocaron años de pleitos entre varias compañías japonesas, británicas y estadounidenses.",
        destacado: {
          tipo: "frase",
          frase: "No es que le robaran el juego. Es que legalmente nunca fue suyo.",
        },
      },
      {
        rotulo: "La consola",
        texto:
          "La jugada decisiva la hizo Nintendo: incluyó el Tetris en la caja de su consola portátil en 1989, y aquello convirtió a las dos cosas en un fenómeno mundial. Se vendieron decenas de millones de unidades del aparato con el juego dentro, y sigue siendo uno de los videojuegos más vendidos de la historia. Pázhitnov cobró exactamente cero por todo aquel periodo. Emigró a Estados Unidos en 1991, y solo cuando los derechos revirtieron a su nombre, en <strong>1996</strong>, pudo fundar con un socio la empresa que los gestiona y empezar a ingresar dinero.",
        destacado: { tipo: "cifra", cifra: "1996", unidad: "el año en que empezó a cobrar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El juego ha dado además material a la psicología. Se ha estudiado el llamado efecto Tetris, la tendencia a seguir viendo piezas encajando al cerrar los ojos después de jugar mucho rato, que aparece incluso en personas con amnesia grave incapaces de recordar haber jugado. Y hay ensayos que exploran usarlo poco después de un suceso traumático, con la idea de que ocupar la memoria visual en las horas siguientes dificultaría que la escena se fije. Son resultados preliminares y con muestras pequeñas, no una terapia establecida, y conviene decirlo así.",
      },
    ],
  },

  {
    id: "cubo-rubik-veinte",
    titulo: "Veinte movimientos bastan",
    gancho: "Hay 43 trillones de posiciones y ninguna necesita más. Se demostró en 2010.",
    categoria: "Juegos",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un cubo de Rubik desordenado sobre una superficie lisa, iluminación dura.",
    entrada:
      "Un cubo de Rubik tiene 43.252.003.274.489.856.000 posiciones distintas, que se leen cuarenta y tres trillones. Para hacerse una idea: si alguien hubiera empezado a colocar una posición por segundo el día del Big Bang y no hubiera parado ni un instante desde entonces, todavía le faltaría muchísimo por terminar. Y sin embargo, desde 2010 se sabe con certeza matemática demostrada, no por costumbre ni por experiencia, que desde cualquiera de esas posiciones se llega al cubo resuelto en veinte movimientos o menos. A esa cifra la llaman, medio en broma, el número de Dios, y costó treinta años acorralarla entre todos.",
    paginas: [
      {
        rotulo: "El número de Dios",
        texto:
          "A esa cota se la llama, medio en broma, el número de Dios: los movimientos que necesitaría alguien que viera siempre el camino óptimo. Acotarla por abajo fue fácil, porque se conocían posiciones concretas que exigen veinte. Lo difícil era demostrar que ninguna necesita veintiuno, y para eso hay que revisar todas, cosa imposible por fuerza bruta. La solución fue agrupar las posiciones en conjuntos que se pueden tratar a la vez aprovechando las simetrías del cubo, hasta reducir el problema a algo más de dos mil millones de casos.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "movimientos bastan siempre" },
      },
      {
        rotulo: "El cálculo",
        texto:
          "El equipo que lo cerró en <strong>2010</strong> —Tomas Rokicki, Herbert Kociemba, Morley Davidson y John Dethridge— necesitó el equivalente a unos treinta y cinco años de trabajo de un procesador, que Google les cedió repartidos entre muchas máquinas durante unas semanas. El resultado no es un método para resolverlo: es una garantía de que la solución corta existe siempre. Encontrarla es otro problema, y de hecho los algoritmos que usan los competidores humanos gastan bastantes más movimientos, cincuenta o sesenta, a cambio de caber en la cabeza y ejecutarse sin pensar.",
        destacado: {
          tipo: "frase",
          frase: "Saber que el atajo existe no es lo mismo que encontrarlo.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Ernő Rubik, arquitecto húngaro, lo construyó en 1974 como material didáctico para explicar la geometría del espacio a sus alumnos, y tardó un mes en resolverlo él mismo la primera vez, sin saber si tenía solución. Hoy los mejores competidores bajan de los cuatro segundos, y un robot construido para ello lo ha hecho en centésimas. La distancia entre aquel mes que tardó el inventor y esas centésimas de hoy es probablemente la mejor medida que existe de lo deprisa que aprende una comunidad entera cuando comparte sus métodos en abierto.",
      },
    ],
  },
];
