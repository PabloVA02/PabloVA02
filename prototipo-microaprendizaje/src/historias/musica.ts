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
    titulo: "La obra de cuatro minutos sin una sola nota",
    gancho: "El pianista abrió la tapa, no tocó nada y medio público se marchó furioso.",
    categoria: "Música",
    color: "var(--plum)",
    encargo: "Un piano de cola con la tapa del teclado abierta y el taburete vacío.",
    entrada:
      "Woodstock, estado de Nueva York, 29 de agosto de 1952. El pianista David Tudor se sienta, pone un cronómetro sobre el piano y cierra la tapa del teclado. La vuelve a abrir para marcar el final de un movimiento, la cierra otra vez. Cuatro minutos y treinta y tres segundos después se levanta. No ha pulsado una tecla.",
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
    titulo: "Seis segundos de batería en un millón de canciones",
    gancho: "El batería murió sin techo. Nunca cobró un céntimo por el fragmento.",
    categoria: "Música",
    color: "var(--clay)",
    encargo: "Un vinilo de siete pulgadas girando en un plato, aguja apoyada.",
    entrada:
      "En 1969, un grupo de soul de Washington llamado The Winstons grabó una cara B de relleno titulada <em>Amen, Brother</em>. En mitad del tema, el batería Gregory Coleman se queda solo cuatro compases: seis segundos de redoble improvisado. Nadie le dio importancia entonces. Ese fragmento es hoy, probablemente, el trozo de música más reutilizado de la historia.",
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
    titulo: "El la de la orquesta ha ido subiendo con los siglos",
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
];
