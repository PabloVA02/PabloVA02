import type { Short } from "../shorts";

/* ==========================================================================
   Los monasterios.

   Durante siglos fueron a la vez granja, fábrica, hotel, hospital, archivo y
   universidad. El tema se estropea si se cuenta como historia de la piedad:
   lo interesante es que eran empresas.

   La regla del tema: se cuenta el MONASTERIO COMO ORGANIZACIÓN. Qué producía,
   cómo repartía el día, de qué vivía y qué inventó por necesidad. La fe está
   ahí, pero lo que hay que explicar es por qué una comunidad que rezaba ocho
   veces al día acabó fabricando relojes, quesos y libros en serie.
   ========================================================================== */

export const MONASTERIOS: Short[] = [
  {
    id: "las-ocho-horas-del-dia",
    titulo: "Los monjes y el reloj",
    gancho: "Ocho servicios diarios, uno de ellos de madrugada. Alguien tenía que despertarse antes que todos y no fallar.",
    categoria: "Monasterios",
    color: "var(--slate)",
    encargo: "Una campana de bronce colgada en una espadaña de piedra al amanecer.",
    /* La campana que manda, lo que se usaba para saber cuándo tocarla, la
       máquina que vino a sustituir al monje que no dormía, y la torre del
       ayuntamiento adonde acabó llegando todo esto. */
    fotos: [
      {
        archivo: "El nido de la espadaña - Ermita del pueblo (Sotopalacio - Burgos) (18246823181).jpg",
        autor:
          "La espadaña de una ermita de Burgos, con sus dos campanas y un nido encima. Fotografía de jacilluch, 2013.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:El_nido_de_la_espada%C3%B1a_-_Ermita_del_pueblo_(Sotopalacio_-_Burgos)_(18246823181).jpg",
        foco: "50% 55%",
        alt: "El remate de piedra de una iglesia pequeña, con dos campanas colgadas en sus arcos y un nido de cigüeña en lo alto.",
      },
      {
        archivo: "Espoo candle clock.JPG",
        autor:
          "Un reloj de vela: la cera baja a un ritmo conocido y las rayas marcadas al lado dicen la hora. Museo del Reloj de Espoo, Finlandia. Fotografía de Catlemur, 2015.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Espoo_candle_clock.JPG",
        foco: "55% 45%",
        alt: "Una vela larga encendida en un candelero de latón, dentro de una vitrina, con números romanos marcados a lo largo de la cera.",
      },
      {
        archivo: "Interieur toren, uurwerk, detail - Winkel - 20324195 - RCE.jpg",
        autor:
          "El mecanismo de un reloj de torre: ruedas dentadas movidas por pesas, que a la hora sueltan un martillo sobre la campana. Iglesia de Winkel, Países Bajos. Fotografía de Gerard Dukker, 1999.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Interieur_toren,_uurwerk,_detail_-_Winkel_-_20324195_-_RCE.jpg",
        foco: "50% 50%",
        alt: "Fotografía en blanco y negro del engranaje de hierro de un reloj de torre, con ruedas dentadas grandes y ejes cuadrados.",
      },
      {
        archivo: "Sydney Town Hall clock tower. (21090328131).jpg",
        autor:
          "El reloj del ayuntamiento de Sídney, instalado en 1884, entre los rascacielos que llegaron después. Fotografía de Bernard Spragg, 2015.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sydney_Town_Hall_clock_tower._(21090328131).jpg",
        foco: "60% 45%",
        alt: "Una torre de reloj de piedra del siglo XIX encajonada entre fachadas de cristal de oficinas.",
      },
    ],
    entrada:
      "Europa, siglo VI. Una regla monástica escrita en Italia organiza el día de una comunidad religiosa en ocho momentos de oración repartidos entre el amanecer y la noche, incluido uno en plena madrugada. Fuera de los monasterios nadie necesita saber la hora con esa precisión: se trabaja mientras hay luz y se para cuando se acaba. La regla se copia y se adopta en cientos de casas por todo el continente, y con ella se cuela un problema técnico nuevo. Hay que saber la hora de noche, sin sol, todos los días y sin fallar. De esa obligación, y no de la ciencia ni del comercio, sale el primer aparato de Europa que mide el tiempo solo, sin que nadie tenga que estar mirándolo.",
    paginas: [
      {
        rotulo: "El que vela",
        texto:
          "La solución inicial fue humana. Un monje se encargaba de no dormir, o de dormir a ratos, y de avisar al resto tocando una campanilla. Para orientarse usaba cualquier cosa que midiera el paso del tiempo. Una vela marcada con rayas, que se consumía a un ritmo conocido. Un reloj de agua, que goteaba de un recipiente a otro. O la posición de ciertas estrellas vistas por una ventana. La regla lo dice sin rodeos: si el hermano encargado se equivoca y la comunidad se levanta tarde, la culpa es suya y debe reconocerlo en público.",
        destacado: { tipo: "frase", frase: "Si la comunidad se levantaba tarde, la culpa era suya." },
      },
      {
        rotulo: "La máquina",
        texto:
          "De ahí sale, en línea recta, el reloj mecánico. Lo que se buscaba no era una esfera con agujas, sino un despertador: un mecanismo de pesas que soltara un martillo sobre una campana a una hora determinada, de modo que nadie tuviera que velar. Los primeros aparatos, del siglo XIII, ni siquiera tenían cara visible; sonaban, que era lo único que hacía falta. La palabra que los nombra en varios idiomas europeos viene precisamente de campana, y no de esfera ni de aguja. La esfera con números llegó después, cuando aquellos aparatos salieron del claustro y hubo que enseñar la hora a gente que pasaba por la plaza.",
        destacado: { tipo: "cifra", cifra: "8", unidad: "servicios diarios marcaba la regla" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la costumbre de partir el día en tramos iguales anunciados por una campana. Del claustro pasó a la torre de la iglesia. De ahí, al reloj del ayuntamiento y a la sirena de la fábrica. Quedaron los nombres de aquellas horas en el idioma, incluida la siesta, que era la sexta. Y quedó una ironía que a los propios monjes les habría hecho gracia. La disciplina horaria se inventó para no faltar a la oración. Es la misma que rige hoy los turnos, los fichajes y los horarios de tren.",
      },
    ],
  },
  {
    id: "cerveza-y-queso-de-abadia",
    titulo: "Fábricas de alimentos",
    gancho: "Cerveza para beber durante el ayuno, quesos que aguantan meses y licores de hierbas: todo salió de una necesidad práctica.",
    categoria: "Monasterios",
    color: "var(--ochre)",
    encargo: "Una bodega abovedada de piedra con barricas alineadas y poca luz.",
    fotos: [
      {
        archivo: "Wertheim - Kloster Bronnbach - Kreuzgang - Ansicht von NW.jpg",
        autor: "El claustro del monasterio cisterciense de Bronnbach, en Alemania. Fotografía de Roman Eisele.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Wertheim_-_Kloster_Bronnbach_-_Kreuzgang_-_Ansicht_von_NW.jpg",
        foco: "50% 50%",
        alt: "Una galería abovedada de arcos de piedra rojiza, con el sol dibujando rectángulos de luz en el suelo.",
      },
      {
        archivo: "Taylor’s Port Wine Cellar, Vila Nova de Gaia, Oporto (48730636822).jpg",
        autor: "Barricas apiladas en una bodega de vino de Oporto, en Vila Nova de Gaia. Fotografía de Ray in Manila.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Taylor%E2%80%99s_Port_Wine_Cellar,_Vila_Nova_de_Gaia,_Oporto_(48730636822).jpg",
        foco: "50% 32%",
        alt: "Dos paredes de barricas de roble apiladas hasta el techo, formando un pasillo que se pierde en la oscuridad.",
      },
      {
        archivo: "Klosterruine, S, 2024 Dömös.jpg",
        autor: "Las ruinas del monasterio de Dömös, en Hungría. Fotografía de Globetrotter19.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Klosterruine,_S,_2024_D%C3%B6m%C3%B6s.jpg",
        foco: "50% 50%",
        alt: "Cimientos y muros bajos de piedra de una iglesia derruida, con las bases de los pilares alineadas.",
      },
      {
        archivo: "Paisley Abbey (St. Mirin, St. St. Milburga, St. Mary, St. James) (19073762563).jpg",
        autor: "La abadía de Paisley, en Escocia. Fotografía de Hugh Llewelyn.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Paisley_Abbey_(St._Mirin,_St._St._Milburga,_St._Mary,_St._James)_(19073762563).jpg",
        foco: "50% 45%",
        alt: "Una iglesia abacial de piedra oscura con ventanales altos y contrafuertes, vista desde el jardín.",
      },
    ],
    entrada:
      "Europa, siglos IX a XVIII. Una comunidad de cien personas encerrada en un recinto tiene que comer todos los días del año, guardar comida suficiente para pasar el invierno entero, atender a los viajeros que llamen a la puerta y mantener en pie un edificio enorme, y no puede permitirse depender de que el mercado más cercano tenga género esa semana. Esa necesidad, repetida durante siglos y en cientos de casas a la vez, convirtió a los monasterios en unidades de producción muy serias, con contabilidad, división del trabajo, especialización por regiones y unos cuantos productos que se siguen vendiendo hoy con el mismo nombre y a veces con la misma receta.",
    paginas: [
      {
        rotulo: "Beber seguro",
        texto:
          "La cerveza monástica nace de un problema sanitario. El agua de pozo o de río era una fuente frecuente de enfermedad, y hervirla para hacer cerveza la volvía segura sin que nadie supiera por qué. Además alimenta: durante los ayunos, en los que no se podía comer sólido, una cerveza espesa y nutritiva permitía aguantar semanas. Los monjes afinaron el oficio hasta convertirlo en técnica, y a ellos se debe el uso sistemático del lúpulo, que da amargor y, sobre todo, conserva la bebida durante meses. Se elaboraban además tres calidades: la fuerte para las fiestas, la corriente para la comunidad y una muy floja para los peregrinos y los criados.",
        destacado: { tipo: "frase", frase: "Hervir el agua para hacer cerveza la volvía potable." },
      },
      {
        rotulo: "Guardar el año",
        texto:
          "El queso responde a lo mismo. La leche se estropea en horas y el queso curado dura años. Así que un monasterio con vacas u ovejas convertía el sobrante de primavera en comida de invierno. Y, de paso, en mercancía para vender. Varias abadías desarrollaron quesos de corteza lavada, licores de hierbas destilados como remedio medicinal y vinos de gran calidad, y algunos de esos productos conservan hoy el nombre y la receta. La regla monástica exigía trabajar con las manos unas horas al día, y ese mandato, repetido durante siglos en cientos de casas, acabó produciendo una industria alimentaria completa.",
        destacado: { tipo: "cifra", cifra: "100", unidad: "personas había que alimentar a diario" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron marcas. Un puñado de cervecerías monásticas siguen produciendo bajo control de la comunidad. La condición es estricta: el negocio no puede buscar beneficio más allá de mantener la casa y ayudar a obras sociales. Sus botellas se venden en medio mundo. Quedaron denominaciones de queso, licores de hierbas cuya receta guarda una comunidad y viñedos que llevan mil años en producción. Y quedó una idea que explica el edificio entero. Aquellos claustros no eran solo lugares de retiro: eran las empresas mejor organizadas de su tiempo. Tenían inventario, reparto de tareas y libros de cuentas que hoy estudian los historiadores de la economía.",
      },
    ],
  },
  {
    id: "el-taller-de-copiar",
    titulo: "Un libro, un año entero",
    gancho: "Tres monjes escribiendo, uno preparando pieles y otro moliendo colores. Un solo ejemplar.",
    categoria: "Monasterios",
    color: "var(--plum)",
    encargo: "Un atril inclinado con un libro grande abierto y un tintero al lado.",
    fotos: [
      {
        archivo: "2019-08-20 Hereford Cathedral Library 01.jpg",
        autor: "Biblioteca encadenada de la catedral de Hereford, Inglaterra.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3A2019-08-20%20Hereford%20Cathedral%20Library%2001.jpg",
        foco: "45% 50%",
        alt: "Estantería de madera con libros antiguos sujetos por cadenas de hierro a una barra.",
      },
      {
        archivo: "2019-08-20 Hereford Cathedral Library 04.jpg",
        autor: "Estantes de la biblioteca encadenada de Hereford.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3A2019-08-20%20Hereford%20Cathedral%20Library%2004.jpg",
        foco: "50% 50%",
        alt: "Filas de volúmenes de cuero gastado con las cadenas colgando por delante.",
      },
      {
        archivo: "Initial P- Saint Paul; Initial P- A Bishop Giving a Letter to a Messenger - Google Art Project.jpg",
        autor: "Inicial iluminada de un manuscrito, hacia 1280.",
        licencia: "Public domain",
        pdPorEdad: 1350,
        fuente: "https://commons.wikimedia.org/wiki/File%3AInitial%20P-%20Saint%20Paul%3B%20Initial%20P-%20A%20Bishop%20Giving%20a%20Letter%20to%20a%20Messenger%20-%20Google%20Art%20Project.jpg",
        foco: "50% 35%",
        alt: "Letra capital pintada en oro y azul con dos figuras dentro, sobre pergamino escrito.",
      },
      {
        archivo: "2017-10-04 Chained Library, Hereford.jpg",
        autor: "Sala de la biblioteca encadenada de Hereford, 2017.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3A2017-10-04%20Chained%20Library%2C%20Hereford.jpg",
        foco: "50% 50%",
        alt: "Interior de madera oscura con estanterías de libros encadenados y un pupitre corrido.",
      },
    ],
    entrada:
      "Europa, siglos VIII a XIV. Antes de la imprenta, un libro no es un producto sino un objeto artesanal carísimo, comparable a una casa pequeña. Hace falta pergamino, que se obtiene raspando y estirando pieles de animal durante semanas, además de tinta cocida a mano y de colores molidos a partir de piedras traídas de muy lejos. Y hace falta, sobre todo, alguien que lo copie letra a letra durante meses seguidos, sin equivocarse demasiado. Los monasterios eran el único sitio de Europa donde se podía reunir todo eso a la vez, y por eso el libro nació allí.",
    paginas: [
      {
        rotulo: "Las pieles",
        texto:
          "La cuenta material asusta. Un libro grande podía llevarse las pieles de doscientos animales, porque de cada oveja salen dos hojas dobles útiles después de raspar, estirar y cortar. Ese material había que producirlo en la propia granja del monasterio. La tinta negra se cocía con agallas de roble y sulfato de hierro. El azul más caro venía de una piedra traída de Asia y costaba más que el oro a igualdad de peso. Por eso se reservaba para el manto de las figuras importantes. Cada página era una inversión que había que decidir de antemano, y por eso los libros se encargaban, no se compraban hechos.",
        destacado: { tipo: "cifra", cifra: "200", unidad: "animales podía costar un solo libro" },
      },
      {
        rotulo: "La sala",
        texto:
          "El taller de copia era una sala fría, con ventanas grandes y sin fuego, porque una chispa podía acabar con todo. Se trabajaba solo con luz natural, de pie o sentado ante atriles inclinados, y en silencio: los copistas se comunicaban con señas para no distraerse. En los márgenes de los manuscritos aparecen sus quejas, escritas en letra pequeña. Son de lo más humano que ha llegado de la Edad Media. Que si hace frío. Que si la tinta es mala. Que si duele la espalda y cuándo se acaba esto.",
        destacado: { tipo: "frase", frase: "En los márgenes se quejaban del frío y de la mala tinta." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó todo lo que sabemos de la Antigüedad. Casi ningún texto griego o latino se conserva en su original. Lo que ha llegado hasta nosotros son copias de copias hechas en aquellas salas. Y muchas obras sobreviven en un único manuscrito, porque alguien decidió copiarlas una vez. Quedaron también los hábitos de lectura: el espacio entre palabras, los signos de puntuación, los índices y los números de página se inventaron ahí para poder consultar sin leerlo todo. Cuando llegó la imprenta, el libro ya tenía forma de libro: lo único que cambió fue cuántas copias podían hacerse y a qué precio.",
      },
    ],
  },
];
