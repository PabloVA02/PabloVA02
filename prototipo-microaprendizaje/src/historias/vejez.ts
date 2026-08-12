import type { Short } from "../shorts";

/* ==========================================================================
   La vejez.

   Un asunto que todo el mundo cree entender y sobre el que casi todos los
   datos populares están mal leídos. El tema se estropea si se convierte en
   consejos de salud o en elogio de la sabiduría de los mayores.

   La regla del tema: cada short desmonta UNA CIFRA MAL ENTENDIDA. La media
   de esperanza de vida, la edad de jubilación, los centenarios de las zonas
   longevas. Se explica siempre de dónde sale el número y por qué no dice lo
   que la gente cree que dice, con un ejemplo que se pueda comprobar.
   ========================================================================== */

export const VEJEZ: Short[] = [
  {
    id: "la-media-engana",
    titulo: "Morir a los 30 en Roma",
    gancho: "La media era de treinta años porque morían muchísimos niños. Quien llegaba a los veinte solía pasar de los cincuenta.",
    categoria: "Vejez",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una lápida romana desgastada con una inscripción todavía legible.",
    fotos: [
      {
        archivo: "Funerary relief of Publius Gessius and family (Boston MFA 37.100) 01.jpg",
        autor:
          "Relieve funerario de una familia romana, del siglo I antes de Cristo. Museo de Bellas Artes de Boston. Fotografía de Mark Landon.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Funerary_relief_of_Publius_Gessius_and_family_(Boston_MFA_37.100)_01.jpg",
        foco: "50% 40%",
        alt: "Tres retratos de piedra asomados a huecos rectangulares, con sus nombres grabados debajo.",
      },
      {
        archivo: "Child sarcophagus Louvre Ma329 n01.jpg",
        autor: "Sarcófago de un niño romano. Museo del Louvre. Fotografía de Marie-Lan Nguyen.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Child_sarcophagus_Louvre_Ma329_n01.jpg",
        foco: "50% 50%",
        alt: "Un sarcófago pequeño de mármol tallado con figuras en relieve por todo el frente.",
      },
      {
        archivo: "Fayum egyptian funerary portrait 1627 NAMAthens.jpg",
        autor:
          "Retrato de El Fayum, pintado sobre la tabla que cubría la cara de una momia en el Egipto romano. Fotografía de Jebulon.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Fayum_egyptian_funerary_portrait_1627_NAMAthens.jpg",
        foco: "50% 30%",
        alt: "El retrato pintado de una persona joven de ojos grandes y oscuros, sobre una tabla de madera.",
      },
      {
        archivo: "Tombstone of Flavia Augustina YORYM 1998 18.jpg",
        autor: "Lápida de Flavia Augustina, con su marido y sus dos hijos, hallada en York.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Tombstone_of_Flavia_Augustina_YORYM_1998_18.jpg",
        foco: "50% 40%",
        alt: "Una lápida romana con cuatro figuras talladas de pie y una inscripción larga debajo.",
      },
    ],
    entrada:
      "¿Es verdad que en la Antigüedad la gente se moría a los treinta años? La frase se repite constantemente y sale de un dato real: la esperanza de vida al nacer en el Imperio romano rondaba los veinticinco o treinta años. El problema no es el número, que es correcto, sino lo que significa una media cuando una parte enorme de la muestra se muere antes de los cinco años. Una media no describe a nadie en concreto: describe un reparto. Y cuando el reparto tiene un montón de ceros a un lado, el promedio deja de parecerse a la vida de nadie. En Roma había gente mayor por todas partes, y el Senado estaba lleno de señores de sesenta años dando órdenes.",
    paginas: [
      {
        rotulo: "La media",
        texto:
          "Imagine una aldea de diez personas en la que cinco mueren antes de cumplir cinco años y cinco viven hasta los sesenta. La media de edad al morir sale en poco más de treinta, y sin embargo en esa aldea no hay ni una sola persona que muera a los treinta. Eso es exactamente lo que pasaba: en Roma, entre un cuarto y un tercio de los recién nacidos no llegaba al primer año, y hasta la mitad no alcanzaba los diez. Esas muertes tempranas arrastran la media hacia abajo con una fuerza enorme.",
        destacado: { tipo: "frase", frase: "En esa aldea nadie muere a los treinta, y la media es treinta." },
      },
      {
        rotulo: "Pasado el filtro",
        texto:
          "Los estudios sobre poblaciones antiguas, hechos con inscripciones funerarias, registros y restos óseos, apuntan todos en la misma dirección: quien superaba la infancia tenía por delante una vida razonablemente larga. Un romano que llegaba a los veinte años podía esperar vivir hasta cerca de los cincuenta y cinco, y llegar a los setenta no era una rareza asombrosa. Las fuentes están llenas de senadores, obispos y artesanos ancianos, y varias leyes de la época fijan edades para dejar cargos o para librarse de obligaciones militares que solo tienen sentido en una sociedad con viejos. También hay quejas escritas sobre lo pesados que se ponen los suegros longevos.",
        destacado: { tipo: "cifra", cifra: "55", unidad: "años esperaba vivir quien llegaba a los veinte" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una idea falsa muy extendida y una verdad más interesante debajo. Lo que ha cambiado de forma espectacular en dos siglos no es cuánto vive un anciano, que ha mejorado pero no tanto, sino cuánta gente llega a serlo: la mortalidad infantil ha caído del treinta por ciento a menos del uno en los países ricos. Cuando alguien dice que antes la gente moría a los treinta, lo que en realidad está describiendo, sin saberlo, son cementerios llenos de tumbas pequeñas. El avance no fue alargar la vejez, sino conseguir que casi todo el mundo llegue a ella, y por eso hoy hay tantos ancianos donde antes no los había.",
      },
    ],
  },
  {
    id: "jubilarse-a-los-sesenta-y-cinco",
    titulo: "Jubilarse a los setenta",
    gancho: "Empezó en setenta años, cuando poca gente los alcanzaba, y bajó a sesenta y cinco casi treinta años después.",
    categoria: "Vejez",
    color: "var(--ochre)",
    encargo: "Un reloj de pared antiguo en una oficina con las persianas medio bajadas.",
    fotos: [
      {
        archivo: "Franz von Lenbach - Bildnis Otto Eduard Leopold von Bismarck (Indianapolis).jpg",
        autor: "Retrato de Otto von Bismarck, óleo de Franz von Lenbach. Indianapolis Museum of Art.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Franz_von_Lenbach_-_Bildnis_Otto_Eduard_Leopold_von_Bismarck_(Indianapolis).jpg",
        foco: "50% 35%",
        alt: "Retrato al óleo de un hombre mayor de bigote blanco y abrigo oscuro sobre un fondo ocre.",
      },
      {
        archivo: "Franz von Lenbach - Bildnis Otto von Bismarck (1870).jpg",
        autor: "Bismarck retratado por Lenbach hacia 1870, casi veinte años antes de la ley del seguro de vejez.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Franz_von_Lenbach_-_Bildnis_Otto_von_Bismarck_(1870).jpg",
        foco: "50% 35%",
        alt: "Retrato del canciller de medio cuerpo, con uniforme oscuro y la mirada de frente.",
      },
      {
        archivo: "Historic Berlin Reichstag Building( Ank Kumar, Infosys) 01.jpg",
        autor: "El edificio del Reichstag en Berlín, donde se aprobó aquella ley. Fotografía de Ank Kumar, 2015.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Historic_Berlin_Reichstag_Building(_Ank_Kumar,_Infosys)_01.jpg",
        foco: "50% 50%",
        alt: "La fachada de piedra del Reichstag con su pórtico de columnas y la cúpula de cristal encima.",
      },
      {
        archivo: "Dülmen, Börnste, Waldweg -- 2024 -- 6257.jpg",
        autor: "Camino de bosque en otoño, Dülmen (Alemania), 2024. Fotografía de Dietmar Rabich.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_B%C3%B6rnste,_Waldweg_--_2024_--_6257.jpg",
        foco: "50% 50%",
        alt: "Un camino de tierra entre árboles con las hojas doradas del otoño.",
      },
    ],
    entrada:
      "¿De dónde sale la idea de dejar de trabajar a una edad fija? De una ley alemana de 1889, pensada como maniobra política antes que como conquista social: el canciller quiere quitarle banderas al movimiento obrero, que crece deprisa y organiza huelgas, y crea un seguro de vejez pagado a medias entre empresas, trabajadores y Estado. La edad elegida son setenta años, en un país donde la esperanza de vida al nacer no llega a cuarenta y donde casi nadie que empiece a cotizar va a llegar a cobrarlo. La cifra no salió de la medicina: salió de la caja.",
    paginas: [
      {
        rotulo: "El cálculo",
        texto:
          "La cifra no era generosa ni cruel, era una cuenta. Con setenta años como umbral, el sistema pagaba a poca gente y durante poco tiempo, así que resultaba barato y sostenible con cotizaciones pequeñas. El propio canciller lo explicó en el parlamento con franqueza: quien no puede trabajar por edad tiene derecho a que el Estado lo mantenga, y ese derecho, dijo, era también la mejor forma de que los obreros dejaran de escuchar a quienes prometían cambiarlo todo. La pensión se cobraba, además, solo si se había cotizado treinta años.",
        destacado: { tipo: "frase", frase: "Se eligió una edad a la que llegaba muy poca gente." },
      },
      {
        rotulo: "Bajar a 65",
        texto:
          "En 1916, en plena guerra y con el país necesitado de calmar el descontento, Alemania bajó el umbral a sesenta y cinco años. Otros países copiaron el sistema y copiaron también la cifra, casi siempre sin rehacer las cuentas: sesenta y cinco se convirtió en el número por defecto de medio mundo durante un siglo. Mientras tanto la esperanza de vida no dejó de subir, de modo que lo que empezó siendo un seguro para una minoría que sobrevivía pasó a ser una etapa larga y normal de la vida de casi todos.",
        destacado: { tipo: "cifra", cifra: "1916", unidad: "el año en que bajó de 70 a 65" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una cifra heredada que hoy se discute en todas partes, porque la relación entre años cotizados y años cobrando se ha dado la vuelta por completo: en 1889 un trabajador alemán que llegara a los setenta cobraba de media unos pocos años; hoy, en los países ricos, la jubilación dura veinte o más. Casi todos los países han empezado a subirla otra vez, muy despacio y con enorme resistencia política. La cifra que se defiende como conquista histórica salió, en su origen, de un cálculo hecho para que costara poco.",
      },
    ],
  },
  {
    id: "las-zonas-longevas",
    titulo: "Centenarios sin papeles",
    gancho: "Un investigador comprobó algo incómodo: donde más ancianos de récord hay es donde peor se anotaban los nacimientos.",
    categoria: "Vejez",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un libro de registro civil antiguo abierto, con caligrafía a plumilla.",
    entrada:
      "Desde el año 2000 circulan por el mundo las llamadas zonas azules, un puñado de regiones donde vive una proporción asombrosa de personas de más de cien años y a las que se atribuyen dietas y costumbres milagrosas. En 2024, un investigador de una universidad británica publicó un trabajo que propone otra explicación, mucho menos apetecible y bastante bien documentada.",
    paginas: [
      {
        rotulo: "Los papeles",
        texto:
          "Su punto de partida es que un centenario es, ante todo, un dato de papel: para certificar que alguien tiene ciento cinco años hace falta un documento de nacimiento de hace ciento cinco años. Al cruzar los mapas de longevidad extrema con los de calidad de los registros civiles, encontró que los máximos coincidían con las zonas donde peor se anotaban los nacimientos y donde más tarde llegó el registro obligatorio. En varias regiones célebres, la proporción de supuestos supercentenarios cayó en picado el año en que se implantaron los documentos de identidad.",
        destacado: { tipo: "frase", frase: "Un centenario es, antes que nada, un dato escrito en un papel." },
      },
      {
        rotulo: "Los motivos",
        texto:
          "Los errores no son todos inocentes ni todos fraudulentos. Hay confusión entre padres e hijos con el mismo nombre, hay registros quemados y rehechos de memoria, hay gente que se quitó años para librarse del ejército y se los volvió a poner después, y hay pensiones que se siguieron cobrando tras la muerte del titular. El propio autor señala que su trabajo no niega que existan personas muy longevas ni que ciertas dietas ayuden, sino que pone en duda que esas concentraciones extraordinarias sean reales. En los países con registros impecables desde el siglo XIX, los supercentenarios aparecen repartidos y en proporciones mucho más modestas.",
        destacado: { tipo: "cifra", cifra: "2024", unidad: "el año del trabajo que las cuestiona" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una discusión abierta y sana: el trabajo ha recibido críticas serias, y algunas de aquellas regiones tienen estudios de validación caso por caso que sus defensores consideran suficientes. Pero quedó también una regla general que sirve para cualquier titular sobre longevidad, sobre récords o sobre estadísticas históricas: antes de explicar un dato asombroso conviene preguntarse cómo se ha medido. Muchas veces el fenómeno extraordinario está en el archivo y no en la gente que salió a hacerse la foto, y para verlo no hace falta viajar a ninguna isla: basta con pedir la partida de nacimiento.",
      },
    ],
  },
];
