import type { Short } from "../shorts";

/* ==========================================================================
   Música.

   Tema difícil por una razón obvia: la música se escucha y aquí solo hay
   texto. Contar cómo suena algo es perder el tiempo.

   La regla del tema: no se escribe sobre el sonido, se escribe sobre la
   DECISIÓN que hay detrás. Por qué existe esa obra, quién cobró y quién no,
   qué convención se estaba rompiendo, qué se descubrió al analizarla con una
   herramienta que su autor no tenía. Todo eso se cuenta con palabras y se
   entiende igual con auriculares que sin ellos.

   Y se persigue el dinero. La historia de la música grabada es en buena parte
   una historia de quién firmó qué papel, y ahí suele estar el giro que nadie
   espera al abrir una historia sobre una canción.
   ========================================================================== */

export const MUSICA: Short[] = [
  {
    id: "cage-433",
    titulo: "Cuatro minutos sin una nota",
    gancho: "El pianista abrió la tapa, no tocó nada y medio público se marchó furioso.",
    categoria: "Música",
    color: "var(--plum)",
    encargo: "Un piano de cola con la tapa del teclado abierta y el taburete vacío.",
    fotos: [
      {
        archivo: "Abandoned grand piano - Abandoned Ballroom (6).jpg",
        autor: "Un piano de cola abandonado en un salón de baile en ruinas. Fotografía de Jan Bommes.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Abandoned_grand_piano_-_Abandoned_Ballroom_(6).jpg",
        foco: "50% 50%",
        alt: "Un piano de cola descascarillado en mitad de una sala vacía, con las cortinas movidas por el aire y polvo en el suelo.",
      },
      {
        archivo: "D e w - Flickr - jonhyblaze.jpg",
        autor: "Rocío sobre la hierba a primera hora. Fotografía de afk.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:D_e_w_-_Flickr_-_jonhyblaze.jpg",
        foco: "50% 50%",
        alt: "Hierba cubierta de gotas de rocío en penumbra, con la luz entrando de lado entre la niebla.",
      },
      {
        archivo: "Orpheum Theatre, Adams Street and 2nd Avenue, Phoenix, AZ - 54442983944.jpg",
        autor: "El patio de butacas de un teatro, vacío. Fotografía de W. Lemay.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Orpheum_Theatre,_Adams_Street_and_2nd_Avenue,_Phoenix,_AZ_-_54442983944.jpg",
        foco: "50% 50%",
        alt: "Filas de butacas rojas vacías bajo los palcos dorados de un teatro antiguo.",
      },
      {
        archivo: "Auditório Radamés Gnattali.jpg",
        autor: "Un auditorio de conciertos con el escenario preparado. Fotografía de Casa do Choro.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Audit%C3%B3rio_Radam%C3%A9s_Gnattali.jpg",
        foco: "50% 50%",
        alt: "Una sala de conciertos con las butacas vacías y el escenario iluminado al fondo.",
      },
    ],
    entrada:
      "Woodstock, estado de Nueva York, 29 de agosto de 1952. En una sala pequeña con el público sentado y expectante, el pianista David Tudor se acerca al instrumento, se sienta, deja un cronómetro encima del piano y cierra la tapa del teclado. Al cabo de un rato la vuelve a abrir para marcar el final de un movimiento y la cierra otra vez. Y otra. Cuatro minutos y treinta y tres segundos después de empezar, se levanta y saluda. En todo ese tiempo no ha pulsado una sola tecla, y buena parte de la sala está entre desconcertada y enfadada.",
    paginas: [
      {
        rotulo: "Lo que sí suena",
        texto:
          "El malentendido de siempre es llamarla «la obra silenciosa». John Cage sostenía justo lo contrario: que el silencio no existe. Venía de meterse en una cámara anecoica de Harvard, la habitación más insonorizada que pudo encontrar, y de salir de allí habiendo oído dos sonidos: uno agudo, su sistema nervioso, y otro grave, su sangre circulando. Si ni siquiera dentro de aquello había silencio, la conclusión era que en una sala de conciertos siempre está sonando algo. La partitura no pide silencio: pide que no se toque el instrumento. Lo que suena aquella noche es la lluvia en el tejado y la gente removiéndose.",
        destacado: {
          tipo: "frase",
          frase: "No compuso silencio. Compuso el permiso para escuchar lo demás.",
        },
      },
      {
        rotulo: "El pleito",
        texto:
          "La broma tuvo consecuencias legales medio siglo después. En 2002, el músico británico Mike Batt incluyó en un disco una pista de un minuto en blanco y la acreditó, entre risas, como «Batt/Cage». La editorial que gestiona los derechos de Cage reclamó, alegando que aquel silencio era una cita de <strong>4'33\"</strong>. Batt respondió que su silencio era mejor porque decía en un minuto lo que Cage tardaba cuatro y medio. El asunto se resolvió fuera de los tribunales con un pago a la fundación del compositor, y con una pregunta que nadie llegó a contestar: si el silencio no existe, ¿de quién es?",
        destacado: { tipo: "cifra", cifra: "4'33\"", unidad: "en tres movimientos, cronometrados" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La pieza sigue programándose en salas y hasta se ha grabado en disco, lo que produce el objeto más raro del catálogo musical: un archivo de audio en el que suena una sala de conciertos vacía llena de gente. Cage no la consideraba una provocación sino su obra más importante, y decía que la escuchaba constantemente. Fuera de la música, el gesto se ha copiado en artes plásticas, en teatro y hasta en campañas: cada vez que alguien entrega un lienzo en blanco o una página muda, está usando la idea que aquella noche hizo que media sala se levantara indignada.",
      },
    ],
  },

  {
    id: "amen-break",
    titulo: "Seis segundos de batería",
    gancho: "El batería murió sin techo. Nunca cobró un céntimo por el fragmento.",
    categoria: "Música",
    color: "var(--clay)",
    encargo: "Un vinilo de siete pulgadas girando en un plato, aguja apoyada.",
    fotos: [
      {
        archivo: "Groove and needle in close embrace from beginning to end.jpg",
        autor: "Dos agujas apoyadas sobre el surco de un disco. Fotografía de Franz van Duns.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Groove_and_needle_in_close_embrace_from_beginning_to_end.jpg",
        foco: "50% 50%",
        alt: "Fotografía en blanco y negro de dos cápsulas de tocadiscos con sus agujas rozando un vinilo.",
      },
      {
        archivo: "33rpm Record Grooves.JPG",
        autor: "Los surcos de un disco de vinilo de 33 revoluciones, vistos muy de cerca.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:33rpm_Record_Grooves.JPG",
        foco: "50% 50%",
        alt: "Surcos concéntricos de un disco de vinilo reflejando la luz en franjas.",
      },
      {
        archivo:
          "Technics SL-1200MK5 Direct Drive Turntable System with Ortofon cartridge (2017-01-21 22.33.27 piqsels.com en).jpg",
        autor: "Un plato Technics SL-1200 con la cápsula apoyada en el disco.",
        licencia: "CC0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Technics_SL-1200MK5_Direct_Drive_Turntable_System_with_Ortofon_cartridge_(2017-01-21_22.33.27_piqsels.com_en).jpg",
        foco: "50% 50%",
        alt: "Tocadiscos de brazo plateado con un vinilo puesto y la aguja bajada sobre el surco.",
      },
      {
        archivo: "LP Record Groove Close-Up (5248017534).jpg",
        autor: "Detalle del surco de un elepé bajo la luz.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:LP_Record_Groove_Close-Up_(5248017534).jpg",
        foco: "50% 50%",
        alt: "Primerísimo plano del surco de un disco, con las ondulaciones grabadas visibles.",
      },
    ],
    entrada:
      "En 1969, un grupo de soul de Washington llamado The Winstons grabó una cara B de relleno titulada <em>Amen, Brother</em>, de esas que se meten para completar el single y que no escucha casi nadie. En mitad del tema, el batería Gregory Coleman se queda solo durante cuatro compases: seis segundos de redoble improvisado, sin ningún otro instrumento encima. Nadie le dio la menor importancia entonces, ni siquiera el grupo. Ese fragmento es hoy, probablemente, el trozo de música más reutilizado de la historia.",
    paginas: [
      {
        rotulo: "El préstamo",
        texto:
          "A mediados de los ochenta, los primeros discos de recopilación de fragmentos para productores incluyeron aquel redoble. Un sampler permitía cortarlo, acelerarlo y recolocar los golpes, y resultó que el patrón aguantaba cualquier manipulación sin perder el swing. Sobre él se construyeron géneros enteros: el <em>breakbeat</em>, el <em>jungle</em>, el <em>drum and bass</em>. Está en discos de N.W.A, de Oasis, de David Bowie, en sintonías de televisión y en anuncios. Las estimaciones más citadas hablan de decenas de miles de canciones, y hay bases de datos que superan con holgura esa cifra.",
        destacado: { tipo: "cifra", cifra: "6", unidad: "segundos de batería, sin pausa" },
      },
      {
        rotulo: "La cuenta",
        texto:
          "De todo eso, los Winstons no vieron nada. En los años ochenta no existía jurisprudencia clara sobre el uso de fragmentos, la ley se aclaró cuando el uso ya era masivo, y nadie pidió permiso ni pagó. Richard Spencer, líder del grupo y titular de los derechos, se enteró de que su cara B era famosa cuando ya llevaba dos décadas siéndolo. Gregory Coleman, el batería, murió en 2006 sin hogar y sin saber que estaba en la mitad de los discos de baile del planeta. En 2015, una recaudación popular en el Reino Unido reunió unas veinticuatro mil libras para Spencer.",
        destacado: {
          tipo: "frase",
          frase: "La música más copiada del mundo no generó una sola factura.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El caso se ha convertido en el argumento estándar de las dos posturas enfrentadas sobre el uso de fragmentos. Para unos demuestra que sin permiso previo se puede construir cultura nueva a una velocidad imposible de otra manera. Para otros demuestra exactamente lo que le pasó a Coleman. Las dos lecturas usan los mismos hechos y las dos son razonables, que es lo que hace que la discusión no se cierre. Y el redoble sigue ahí: cualquiera puede reconocerlo si presta atención en una pista de baile, en un anuncio de coches o en la sintonía de un informativo.",
      },
    ],
  },

  {
    id: "diapason-440",
    titulo: "La afinación no es una ley",
    gancho: "La afinación no es una ley física: es un acuerdo, y se firmó en 1955.",
    categoria: "Música",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un diapasón metálico apoyado sobre una partitura antigua.",
    entrada:
      "Antes de un concierto, el oboe toca un la y toda la orquesta se afina a él. Ese la vibra hoy a 440 hercios en casi todo el mundo. Pero no hay nada en la física que obligue a ese número: es una convención, se acordó en el siglo XX y durante los trescientos años anteriores cada ciudad afinaba a su aire.",
    paginas: [
      {
        rotulo: "La deriva",
        texto:
          "Los diapasones antiguos que se conservan cuentan una historia clara: la afinación fue subiendo. Un diapasón atribuido a Händel ronda los 422 hercios, y en la Europa del barroco se han documentado usos desde poco más de 390 hasta cerca de 470 según la ciudad y según si el instrumento era de iglesia o de cámara. La tendencia al alza tiene una explicación práctica: afinado más agudo, un conjunto suena más brillante y más potente, y en una época sin amplificación eso era una ventaja competitiva. Cada orquesta subía un poco para no sonar apagada frente a la de al lado.",
        destacado: { tipo: "cifra", cifra: "440", unidad: "hercios, fijados por norma en 1955" },
      },
      {
        rotulo: "Los intentos",
        texto:
          "Subir tenía un coste: las cuerdas de tripa se rompían y las voces sufrían. Francia intentó frenarlo en 1859 con el <em>diapason normal</em>, fijado por ley en 435 hercios. Verdi hizo campaña por bajar a 432, y en 1884 el gobierno italiano recomendó esa cifra por escrito. Ninguna de las dos se impuso del todo. El acuerdo internacional que sí funcionó llegó en <strong>1955</strong>, cuando la Organización Internacional de Normalización adoptó 440 como referencia; hoy algunas orquestas europeas afinan un poco más arriba, en 442 o 443, por el mismo motivo brillante de siempre.",
        destacado: {
          tipo: "frase",
          frase: "El la se ha ido subiendo por la misma razón que sube el volumen.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "De aquella pelea entre 432 y 440 ha salido en internet toda una mitología sobre frecuencias curativas y armonías del universo, que no tiene ningún respaldo: la diferencia entre las dos es de menos de un tercio de semitono y la mayoría de la gente no la distingue en una escucha ciega. Lo que sí cambia de verdad es cómo suena la música antigua. Cuando un conjunto interpreta a Bach con instrumentos de época, suele bajar a 415 hercios, casi un semitono por debajo del la moderno. No es un capricho de puristas: es lo que aguantan las cuerdas de tripa sin partirse.",
      },
    ],
  },
  {
    id: "beethoven-sordo",
    titulo: "Dirigió lo que no podía oír",
    gancho: "Se quedó sordo con treinta años y siguió componiendo veinticinco más. Hubo que girarlo para que viera los aplausos.",
    categoria: "Música",
    color: "var(--plum)",
    encargo: "Un piano de cola antiguo con la tapa levantada, en una habitación con poca luz.",
    entrada:
      "Viena, 1802. Un compositor alemán de treinta y un años, ya famoso en media Europa, escribe una carta a sus hermanos confesando algo que lleva seis años ocultando: se está quedando sordo. En la carta dice que ha pensado en quitarse la vida y que lo único que lo detiene es la música que todavía no ha escrito. No llegó a enviarla nunca.",
    paginas: [
      {
        rotulo: "El silencio",
        texto:
          "La sordera avanzó despacio y por partes. Primero fueron pitidos y dificultad para seguir una conversación en una sala con ruido; después dejó de oír los agudos y tuvo que abandonar los conciertos como pianista, que era de lo que vivía. Probaba a serrar las patas del piano para tocarlo sentado en el suelo y notar la vibración por la madera, y sujetaba una varilla entre los dientes apoyada en la caja para que el sonido le llegara por el hueso del cráneo. Sus cuadernos de conversación, donde las visitas le escribían, se conservan a cientos.",
        destacado: { tipo: "frase", frase: "Mordía una varilla apoyada en el piano para oír por el hueso." },
      },
      {
        rotulo: "El estreno",
        texto:
          "En mayo de 1824, ya completamente sordo, estrenó en Viena la sinfonía que había tardado seis años en terminar, con un coro cantando al final, algo que nadie había metido antes en una sinfonía. Se colocó en el escenario marcando los tiempos, aunque la orquesta tenía orden de seguir al director de verdad, que estaba al lado. Al acabar continuó moviendo los brazos unos compases de más. Una de las cantantes solistas se acercó y lo giró por el hombro para que viera al público de pie, con los pañuelos en alto.",
        destacado: { tipo: "cifra", cifra: "6", unidad: "años tardó en escribir esa sinfonía" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Murió tres años después, y a su entierro fueron entre diez y treinta mil personas en una ciudad de trescientos mil habitantes; se cerraron las escuelas ese día. El coro final de aquella sinfonía es hoy el himno oficial de la Unión Europea, sin letra para no favorecer a ningún idioma, y su partitura original está inscrita en un registro de la Unesco. La escribió alguien que no llegó a escucharla ni una sola vez, ni siquiera la noche del estreno.",
      },
    ],
  },

  {
    id: "vinilo-microsurco",
    titulo: "Tres minutos porque no cabía más",
    gancho: "La duración de una canción pop la fijó un trozo de laca girando a setenta y ocho vueltas.",
    categoria: "Música",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un disco negro girando en un plato, con la aguja apoyada y el brillo del surco.",
    entrada:
      "Estados Unidos, principios del siglo XX. La música grabada se vende en discos de laca de veinticinco centímetros que giran a setenta y ocho vueltas por minuto y que solo aguantan unos tres minutos por cara. No es una decisión artística: es lo que cabe en el surco a esa velocidad. Y esa limitación técnica acabó decidiendo cómo suena hoy una canción.",
    paginas: [
      {
        rotulo: "Tres minutos",
        texto:
          "Un músico que quisiera grabar tenía que meter su pieza en ese hueco, así que las canciones se acortaron, se recortaron los solos y se fijó una estructura que sigue viva: estrofa, estribillo, estrofa, estribillo, puente y final. Las radios, que compraban aquellos discos, adoptaron la misma medida para calcular su programación, y los compositores empezaron a escribir directamente pensando en ella. Lo que había nacido como un límite físico de la laca se convirtió en la forma normal de una canción popular, y ahí sigue.",
        destacado: { tipo: "cifra", cifra: "3 min", unidad: "cabían por cara en un disco de laca" },
      },
      {
        rotulo: "El surco fino",
        texto:
          "En 1948 apareció el disco de vinilo con surco más estrecho y velocidad más lenta, treinta y tres vueltas por minuto, que permitía más de veinte minutos por cara. Aquello hizo posible el álbum tal y como lo entendemos: una obra pensada como un conjunto y no como una colección de canciones sueltas. La competencia sacó otro formato de cuarenta y cinco vueltas y siete pulgadas, pensado para una sola canción, y durante años convivieron los dos, obligando a las casas a comprar tocadiscos con tres velocidades.",
        destacado: { tipo: "frase", frase: "El surco más fino inventó el álbum tal y como lo conocemos." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El vinilo casi desapareció en los noventa con el disco compacto y ha vuelto: desde 2020 vende más que el compacto en varios países, sobre todo entre gente que no vivió su primera época. Y la medida de tres minutos aguanta pese a que ya no exista ninguna razón técnica para respetarla, porque las plataformas de escucha pagan por reproducción a partir de treinta segundos y premian las canciones cortas. Un límite de la laca de hace un siglo sigue decidiendo cuánto dura lo que suena en el coche.",
      },
    ],
  },

  {
    id: "woodstock",
    titulo: "Woodstock salió gratis sin querer",
    gancho: "Vendieron ciento ochenta y seis mil entradas y aparecieron cuatrocientas mil personas.",
    categoria: "Música",
    color: "var(--forest)",
    encargo: "Un campo embarrado lleno de gente y de tiendas de campaña vistas desde una loma.",
    entrada:
      "Estado de Nueva York, agosto de 1969. Cuatro socios de veintitantos años organizan un festival de tres días en una granja alquilada y esperan unas cincuenta mil personas. Han vendido entradas por correo, tienen contratados a treinta y dos grupos y les faltan dos días para empezar. Todavía no han montado ni las vallas ni las taquillas, y tienen que elegir entre una cosa y otra.",
    paginas: [
      {
        rotulo: "La decisión",
        texto:
          "Eligieron el escenario, porque sin escenario no había festival. Cuando llegó el jueves, decenas de miles de personas ya estaban acampadas dentro del recinto sin haber pasado por ninguna parte, y no había manera humana de sacarlas. Uno de los organizadores subió al escenario y anunció que a partir de ese momento aquello era gratis. La carretera de acceso se colapsó durante treinta kilómetros y mucha gente abandonó el coche y siguió andando; los grupos tuvieron que llegar en helicóptero porque no había otra forma de entrar.",
        destacado: { tipo: "cifra", cifra: "400.000", unidad: "personas para 186.000 entradas" },
      },
      {
        rotulo: "El barro",
        texto:
          "Llovió el segundo día y el campo, que era un prado de vacas, se convirtió en un barrizal en el que la gente se deslizaba de pie. Se acabó la comida el primer día y los vecinos de los pueblos de alrededor empezaron a hacer bocadillos y a bajarlos en camionetas; un convento cercano preparó varios cientos. Hubo dos muertes, una por sobredosis y otra por un tractor que atropelló a un chico que dormía dentro de un saco entre la hierba alta, y nacieron dos niños en el propio recinto. El ejército tuvo que mandar helicópteros con material médico, mantas y comida. Aquellos tres días acabaron durando cuatro.",
        destacado: { tipo: "frase", frase: "Se acabó la comida el primer día. La trajeron los vecinos." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El último grupo tocó un lunes a las nueve de la mañana ante unas treinta mil personas que quedaban, con el guitarrista destrozando el himno de Estados Unidos con la distorsión mientras el resto recogía. Los organizadores perdieron más de un millón de dólares de la época y tardaron una década en pagar las deudas, que al final acabó cubriendo el dinero de la película documental. El granjero que había alquilado el terreno, y al que sus vecinos dejaron de saludar durante años, dijo siempre que lo volvería a hacer. El campo sigue siendo un prado, con una piedra en medio y un museo al lado.",
      },
    ],
  },
];
