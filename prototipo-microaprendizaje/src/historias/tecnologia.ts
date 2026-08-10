import type { Short } from "../shorts";

/* ==========================================================================
   Tecnología.

   El tema con más mitos por metro cuadrado, porque el sector se cuenta a sí
   mismo en forma de leyenda: el garaje, el genio, la anécdota redonda. Casi
   ninguna resiste ir a las fuentes.

   La regla del tema: se busca el documento. El cuaderno con la polilla pegada
   está en un museo y se puede leer lo que pone; el argumento de que QWERTY se
   diseñó para frenar al mecanógrafo no tiene detrás ningún papel de la época.
   Cuando existe el documento, se cita; cuando no, se dice que no existe.

   Y se prefiere lo invisible: el cable en el fondo del mar antes que el
   aparato de la mano. Lo que sostiene el mundo digital casi nunca sale en la
   foto, y contarlo es lo que hace que alguien mire el móvil de otra manera.
   ========================================================================== */

export const TECNOLOGIA: Short[] = [
  {
    id: "qwerty-mito",
    titulo: "QWERTY no frena los dedos",
    gancho: "La historia del teclado que te frena a propósito no tiene ni un documento detrás.",
    categoria: "Tecnología",
    color: "var(--slate)",
    encargo: "Las teclas de una máquina de escribir antigua, muy de cerca, metal desgastado.",
    fotos: [
      {
        archivo: "Sholes and Glidden Schreibmaschine 06.jpg",
        autor: "El frente lacado y decorado a mano de una Sholes and Glidden, la primera máquina de escribir comercial. Fotografía de Eremeev.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sholes_and_Glidden_Schreibmaschine_06.jpg",
        foco: "50% 55%",
        alt: "Una carcasa negra brillante pintada con flores doradas y un retrato de una muchacha leyendo.",
      },
      {
        archivo: "Sholes and Glidden Schreibmaschine 04.jpg",
        autor: "La misma máquina vista de frente, con su teclado de cuatro filas. Fotografía de Eremeev.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sholes_and_Glidden_Schreibmaschine_04.jpg",
        foco: "50% 50%",
        alt: "Una máquina de escribir antigua con teclas redondas de porcelana blanca dispuestas en cuatro hileras.",
      },
      {
        archivo: "Keyboard with German Dvorak layout 2010.jpg",
        autor: "Un teclado con la distribución Dvorak, la alternativa que nunca se impuso. Fotografía de Karl432.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Keyboard_with_German_Dvorak_layout_2010.jpg",
        foco: "50% 50%",
        alt: "Un teclado de ordenador con las letras colocadas en un orden distinto del habitual.",
      },
      {
        archivo: "Remington No. 1 typewriter, made by Remington & Songs, Ilion, NY, 1873-1878, the first Sholes & Glidden model typewriter made by Remington - Wisconsin Historical Museum - DSC02806.JPG",
        autor: "Una Remington número 1, fabricada entre 1873 y 1878. Wisconsin Historical Museum. Fotografía de Daderot.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Remington_No._1_typewriter,_made_by_Remington_%26_Songs,_Ilion,_NY,_1873-1878,_the_first_Sholes_%26_Glidden_model_typewriter_made_by_Remington_-_Wisconsin_Historical_Museum_-_DSC02806.JPG",
        foco: "50% 45%",
        alt: "Una máquina de escribir de hierro negro montada sobre un pedestal con pedal, como una máquina de coser.",
      },
    ],
    entrada:
      "Todo el mundo ha oído alguna vez la explicación, y suele contarse con cara de estar revelando un secreto: las primeras máquinas de escribir se atascaban si ibas demasiado rápido, así que repartieron las letras a propósito para obligarte a teclear despacio. Es una historia perfecta, porque tiene villano, tiene ironía y explica de golpe una rareza que todos tenemos delante. El problema aparece en cuanto se buscan pruebas de que alguien lo hiciera con esa intención: no hay ni un documento de la época que lo diga.",
    paginas: [
      {
        rotulo: "El origen real",
        texto:
          "La distribución la fue ajustando Christopher Latham Sholes entre 1868 y 1873, y sus primeros prototipos llevaban las letras casi en orden alfabético. Los cambios fueron sucesivos y respondieron a varias presiones a la vez. Los investigadores japoneses Koichi y Motoko Yasuoka rastrearon en 2011 el proceso y señalaron un factor poco conocido: los primeros clientes serios fueron telegrafistas que transcribían morse en directo, y pidieron mover letras para transcribir más deprisa las secuencias que más aparecían. Es decir, parte del teclado está optimizado para la velocidad de un oficio que ya no existe.",
        destacado: {
          tipo: "frase",
          frase: "El teclado no lo diseñó un ingeniero: lo desgastaron sus clientes.",
        },
      },
      {
        rotulo: "El retador",
        texto:
          "En 1936, August Dvorak patentó una distribución alternativa que colocaba las vocales y las consonantes más frecuentes en la fila central. Sobre el papel es mejor, y durante décadas se citó un estudio de la Marina estadounidense que demostraba mejoras enormes de productividad. En <strong>1990</strong>, los economistas Stan Liebowitz y Stephen Margolis fueron a mirar aquel estudio y encontraron dos cosas incómodas: lo había supervisado el propio Dvorak y no tenía grupo de control decente. Los experimentos posteriores encuentran ventajas pequeñas, del orden de un puñado de puntos porcentuales, que no compensan reaprender a teclear.",
        destacado: { tipo: "cifra", cifra: "1873", unidad: "el año en que QWERTY se congeló" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "El caso se usa en economía como ejemplo de dependencia del camino: una decisión tomada por motivos que ya no existen queda congelada porque el coste de cambiarla lo pagan millones de personas a la vez. Lo curioso es que la máquina de escribir desapareció, el telégrafo desapareció, las palancas que se atascaban desaparecieron, y la distribución sobrevivió a las tres. Está en el móvil, en la pantalla táctil de un cajero y en los teclados virtuales de realidad aumentada, donde no hay ninguna pieza que se pueda atascar y sin embargo la Q sigue arriba a la izquierda.",
      },
    ],
  },

  {
    id: "primer-bug",
    titulo: "El primer «bicho» de la informática era una polilla",
    gancho: "Está pegado con cinta en un cuaderno de 1947, y la nota lo delata todo.",
    categoria: "Tecnología",
    color: "var(--sage)",
    encargo: "Una página de cuaderno técnico de los años cuarenta con una polilla pegada.",
    entrada:
      "El 9 de septiembre de 1947, el equipo del ordenador Mark II de Harvard buscaba por qué la máquina daba resultados erróneos. Al abrir el relé número setenta del panel F encontraron una polilla aplastada entre los contactos. La sacaron, la pegaron con cinta adhesiva en el cuaderno de incidencias y escribieron una frase al lado que ha resultado ser más interesante que el bicho.",
    paginas: [
      {
        rotulo: "La nota",
        texto:
          "Lo que anotaron fue: «Primer caso real de un bicho encontrado». La palabra clave es <em>real</em>. Si la nota tuviera gracia solo por el insecto, no habría hecho falta subrayar que aquel era el primero de verdad; la broma funciona precisamente porque el término ya llevaba décadas usándose para fallos que no tenían nada de biológico. Thomas Edison lo empleaba en su correspondencia en 1878 para describir los defectos que aparecían al poner en marcha un invento, y en la ingeniería eléctrica del cambio de siglo era vocabulario corriente. El equipo de Harvard no bautizó nada: se encontró con un chiste servido.",
        destacado: {
          tipo: "frase",
          frase: "«Primer caso REAL de un bicho.» La palabra ya existía, y por eso tiene gracia.",
        },
      },
      {
        rotulo: "Quién estaba",
        texto:
          "La anécdota se asocia siempre a Grace Hopper, que trabajaba en aquel laboratorio y la contó durante años en charlas y entrevistas con enorme gracia. Ella misma no reclamó haber encontrado la polilla; el cuaderno no dice quién la sacó del relé. Hopper hizo por la informática cosas bastante más grandes que esa historia: dirigió el desarrollo del primer compilador y estuvo detrás del lenguaje COBOL, la idea de que se pudiera programar con palabras en inglés en vez de con números. El cuaderno, con la polilla todavía pegada, se conserva en el Museo Nacional de Historia Americana del Smithsonian.",
        destacado: { tipo: "cifra", cifra: "1878", unidad: "Edison ya escribía «bug» por avería" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El término se ha quedado tan pegado al oficio que ha generado su propia familia: depurar, cazar, reproducir, informe de fallo. Y ha traído consigo un problema de fondo que se discute cada vez que ocurre algo grave: llamar «bicho» a un error da la impresión de que llegó volando de fuera, cuando lo normal es que lo haya escrito alguien. Varios ingenieros llevan años proponiendo hablar de defectos en vez de bichos, precisamente por eso. La palabra, mientras tanto, sigue ganando por goleada, con polilla de 1947 y todo.",
      },
    ],
  },

  {
    id: "cables-submarinos",
    titulo: "Internet viaja por el fondo del mar, no por satélite",
    gancho: "Casi todo lo que cruza un océano lo hace por un cable del grosor de una manguera.",
    categoria: "Tecnología",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una sección de cable submarino cortada, con las capas de acero y la fibra dentro.",
    entrada:
      "La imagen mental de internet es una nube, y algo que viaja por el aire de antena en antena. La realidad es mucho más antigua y mucho menos etérea: en torno al 99 % del tráfico de datos intercontinental pasa por cables tendidos en el fondo del océano, y el trazado de esas rutas se parece muchísimo al de los cables telegráficos del siglo XIX.",
    paginas: [
      {
        rotulo: "La red de verdad",
        texto:
          "Hay más de quinientos cables submarinos activos y suman más de un millón cuatrocientos mil kilómetros, suficiente para dar treinta y cinco vueltas a la Tierra. Los tiende una flota de barcos especializados que va soltando el cable desde la bodega mientras navega, y en aguas poco profundas un arado lo entierra bajo el lecho marino. En pleno océano, el cable puede ser tan fino como una manguera de jardín: allí no hay anclas ni redes de arrastre, así que no necesita blindaje. La fibra óptica que lleva dentro es más delgada que un pelo.",
        destacado: { tipo: "cifra", cifra: "99 %", unidad: "del tráfico entre continentes va por cable" },
      },
      {
        rotulo: "Por qué no satélite",
        texto:
          "La razón es la física, no el precio. Un satélite geoestacionario está a unos treinta y seis mil kilómetros, así que la señal recorre setenta y dos mil ida y vuelta y llega con un retardo de más de medio segundo, insufrible para una llamada o para una operación financiera. El cable, además, mueve muchísimos más datos: un solo cable moderno transporta más capacidad que todas las constelaciones de satélites juntas. Los satélites siguen siendo insustituibles donde no llega el cable —barcos, aviones, zonas remotas—, pero como carretera principal del planeta perdieron hace décadas.",
        destacado: {
          tipo: "frase",
          frase: "La nube está enterrada bajo el fondo del mar.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Se rompen constantemente: hay entre cien y doscientas averías al año, y la enorme mayoría las causan anclas de barcos y redes de arrastre en aguas someras, no tiburones, pese a que los vídeos de tiburones mordiendo un cable circulen desde hace años. Repararlos consiste en enviar un barco, izar el cable con un garfio desde el fondo, cortar el tramo dañado y empalmar uno nuevo; puede tardar semanas. Y toda esa red descansa sobre un puñado de puntos de entrada a tierra: unas casetas discretas junto a la playa donde el cable sale del agua, sin ningún cartel que lo anuncie.",
      },
    ],
  },

  {
    id: "iphone-2007",
    titulo: "El iPhone que enseñaron en 2007 no funcionaba",
    gancho: "Se colgaba cada pocos minutos. Ensayaron una secuencia exacta de acciones que aguantase noventa minutos.",
    categoria: "Tecnología",
    color: "var(--slate)",
    encargo: "Un escenario oscuro con una pantalla gigante y una silueta sola delante.",
    entrada:
      "San Francisco, enero de 2007. El fundador de una empresa de ordenadores sale al escenario a presentar un teléfono sin teclas, algo que entonces no existía: todos los móviles del mundo tenían botones. Va a manejarlo en directo, delante de miles de personas, durante noventa minutos. Y el aparato que lleva en la mano está a medio terminar.",
    paginas: [
      {
        rotulo: "El camino dorado",
        texto:
          "Los ingenieros llevaban meses buscando una secuencia de acciones que el teléfono aguantara sin colgarse, y la llamaban entre ellos el camino dorado. Si mandabas un correo y luego navegabas, funcionaba; si lo hacías al revés, se bloqueaba. Podía reproducir un trozo de canción o un trozo de vídeo, pero no una canción entera y después un vídeo. Aprendió el orden exacto de memoria y lo ensayó cinco días seguidos, encerrado en el auditorio vacío con los ingenieros mirando desde la penumbra, y aun así el aparato se le murió decenas de veces: se reiniciaba solo, perdía la conexión o se quedaba con la pantalla congelada a media frase.",
        destacado: { tipo: "frase", frase: "Correo y luego navegar, funcionaba. Al revés, se bloqueaba." },
      },
      {
        rotulo: "Los apaños",
        texto:
          "La demostración iba llena de trucos. Como la memoria se agotaba, había varios teléfonos escondidos bajo la mesa y un ayudante los cambiaba entre secciones sin que se notara. La cobertura del edificio era mala, así que instalaron una antena portátil solo para el acto y programaron la pantalla para que enseñara siempre cinco rayas de señal, pasara lo que pasara. Había también dos ordenadores idénticos preparados por si fallaba el que movía la pantalla gigante, y la llamada que hizo en directo la contestó un compañero al que habían avisado de descolgar al primer tono y no improvisar ni una palabra. Nada de lo que se vio aquella mañana estaba dejado al azar.",
        destacado: { tipo: "frase", frase: "La pantalla enseñaba cinco rayas de cobertura siempre, hubiera o no." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Salió bien. No se colgó ni una sola vez en los noventa minutos, y los ingenieros, que lo veían desde la quinta fila con una botella de whisky escondida, se la bebieron entera al terminar. El teléfono no llegó a las tiendas hasta seis meses después y todavía faltaba mucho por arreglar. Aquel día se enseñó algo que aún no existía del todo. Quince años después ha cambiado la forma del objeto que más miramos —un rectángulo de cristal, sin un solo botón para escribir— y ha barrido del mercado a todos los teléfonos con teclas, incluidos los de las marcas que aquella mañana se rieron.",
      },
    ],
  },

  {
    id: "ajedrez-maquina",
    titulo: "La máquina ganó al ajedrez por un error",
    gancho: "La jugada que hundió al campeón del mundo fue un movimiento elegido al azar por avería.",
    categoria: "Tecnología",
    color: "var(--plum)",
    encargo: "Un tablero de ajedrez a media partida, con una mano humana en el borde.",
    entrada:
      "Nueva York, mayo de 1997. El mejor jugador de ajedrez de la historia, un ruso de treinta y cuatro años, se sienta a jugar contra un ordenador del tamaño de dos armarios. Ya se enfrentaron el año anterior y ganó él con holgura. Esta vez pierde el duelo, y se pasa los siguientes veinte años convencido de que le hicieron trampa.",
    paginas: [
      {
        rotulo: "La jugada rara",
        texto:
          "Todo se torció en la segunda partida. La máquina hizo un movimiento que no encajaba con su manera de jugar: en lugar de comerse una pieza que tenía a tiro, algo que un ordenador hace casi siempre porque cuenta material, renunció a ella y colocó un peón en una posición sutil, de esas que se aprenden con años de intuición. El ruso se quedó mirando el tablero un rato largo, se levantó, dio una vuelta por la sala y volvió a sentarse. Concluyó que detrás de aquello había una persona ayudando, se vino abajo y acabó abandonando una partida que, como se comprobó después analizándola con calma, podía haber empatado sin dificultad.",
        destacado: { tipo: "frase", frase: "Renunció a comer una pieza. Ningún ordenador hacía eso." },
      },
      {
        rotulo: "Qué había pasado",
        texto:
          "La explicación tardó quince años en aparecer y la dio uno de los programadores. Aquella jugada no fue genialidad: fue un fallo. El ordenador se había quedado sin tiempo para terminar el cálculo, y cuando eso ocurría el programa tenía instrucciones de elegir un movimiento al azar entre los posibles. Salió aquel. Es decir: la jugada que convenció al mejor jugador del mundo de que enfrente tenía una inteligencia superior fue, literalmente, un número sacado a suertes. Ni siquiera era buena. Simplemente resultó ser tan impropia de una máquina que el hombre que la sufrió no encontró otra explicación que la trampa.",
        destacado: { tipo: "cifra", cifra: "15", unidad: "años se tardó en explicar la jugada" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Perdió el duelo por tres y medio a dos y medio, pidió la revancha y la empresa se negó: desmontó la máquina y la retiró para siempre, lo cual alimentó la sospecha durante años. Hoy un programa gratuito corriendo en un móvil juega bastante mejor que aquel armario. Y el propio ruso acabó admitiendo, ya mayor, que no hubo trampa; que perdió porque se puso nervioso. Y aquí está lo que se queda de todo esto: la primera vez que una máquina nos ganó en algo que considerábamos exclusivamente nuestro, no ganó por ser más lista. Ganó porque se estropeó a tiempo y porque, al otro lado del tablero, había un ser humano capaz de asustarse.",
      },
    ],
  },

  {
    id: "primer-mensaje-red",
    titulo: "El primer mensaje de internet fue «LO»",
    gancho: "Iban a escribir «login». El sistema se cayó a la tercera letra y así se quedó.",
    categoria: "Tecnología",
    color: "var(--forest)",
    curioso: true,
    encargo: "Un armario de ordenador de los sesenta, lleno de cintas y luces, en penumbra.",
    entrada:
      "California, 29 de octubre de 1969. Dos ordenadores del tamaño de una nevera, separados por seiscientos kilómetros, van a intentar hablarse por primera vez a través de una línea de teléfono. Un estudiante de veintiún años se sienta delante de uno; un compañero espera junto al otro, con el auricular en la oreja para ir cantando lo que aparece.",
    paginas: [
      {
        rotulo: "Las dos letras",
        texto:
          "El plan era escribir <em>login</em>, que en inglés significa «entrar», para iniciar sesión en la máquina de enfrente. El estudiante tecleó la ele y preguntó por teléfono si se veía. Se veía. Tecleó la o y preguntó otra vez. También. Tecleó la ge y el sistema del otro lado se cayó entero. Así que el primer mensaje que viajó por la red que acabaría siendo internet fue <strong>LO</strong>: dos letras, y por avería. Tardaron una hora en encontrar el fallo, repararlo y escribir la palabra entera, esta vez sin incidencias. Para entonces ya había anochecido y en el laboratorio no quedaba casi nadie.",
        destacado: { tipo: "frase", frase: "Dos letras y una avería. Ese fue el mensaje." },
      },
      {
        rotulo: "Para qué era",
        texto:
          "Aquello formaba parte de un encargo del ejército de Estados Unidos, y la leyenda dice que se hizo para resistir un ataque nuclear. Los propios ingenieros lo han negado siempre: lo que querían era compartir unos ordenadores carísimos entre varias universidades, porque cada uno costaba lo que un edificio y se pasaba parado la mitad del tiempo. La red creció despacio y sin que nadie le viera el negocio. Al acabar aquel año había cuatro máquinas conectadas en todo el mundo, las cuatro en universidades de California y de Utah; diez años más tarde eran poco más de doscientas, y aún faltaban dos décadas para que existiera la primera página web.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "ordenadores conectados a fin de 1969" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El estudiante que tecleó aquello no anotó la hora ni guardó ningún recuerdo especial: escribió en el cuaderno de incidencias del laboratorio una línea seca, que había hablado con la otra máquina, y se fue a cenar. Décadas más tarde contaba que nadie se dio cuenta de que aquello era histórico porque nadie estaba haciendo historia: estaban arreglando un cacharro que se caía. Hoy pasan por esa red más de cinco mil millones de personas, y todo empezó con una palabra de cinco letras que no se pudo terminar de escribir.",
      },
    ],
  },
];
