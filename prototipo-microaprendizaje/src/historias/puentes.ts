import type { Short } from "../shorts";

/* ==========================================================================
   Puentes.

   El riesgo del tema es la ficha técnica: vanos, toneladas de acero y
   récords de longitud. Eso no lo recuerda nadie diez minutos después.

   La regla del tema: un puente se cuenta por QUIÉN LO PAGA CON EL CUERPO.
   Los obreros que salen doblados de un cajón sumergido. El ingeniero que
   queda inválido y dirige la obra con prismáticos desde una ventana. Los
   peatones que se agarran a la barandilla. La ingeniería aquí es siempre
   una historia de gente que descubre algo tarde.

   Y en los fallos no se busca al culpable: se busca lo que nadie sabía
   todavía, porque casi siempre el error estaba en el manual, no en la obra.
   ========================================================================== */

export const PUENTES: Short[] = [
  {
    id: "brooklyn-roebling",
    titulo: "El puente lo dirigió ella",
    gancho: "El ingeniero jefe quedó inválido a media obra. Ella aprendió el oficio y mandó once años.",
    categoria: "Puentes",
    color: "var(--slate)",
    encargo: "Los cables de un puente colgante antiguo vistos desde abajo, contra el cielo.",
    fotos: [
      {
        archivo: "Brooklyn Bridge at sunset from Brooklyn Bridge Park, New York City.jpg",
        autor: "El puente de Brooklyn al atardecer, desde el parque de la orilla. Fotografía de SebastianBlumeArt.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Brooklyn_Bridge_at_sunset_from_Brooklyn_Bridge_Park,_New_York_City.jpg",
        foco: "50% 45%",
        alt: "El puente de Brooklyn con su torre de piedra y sus tirantes, bajo un cielo de nubes encendidas.",
      },
      {
        archivo:
          "Detail view of underside of deck showing connection between diagonal cable and superstructure. Jet Lowe, photographer, 1982. - Brooklyn Bridge, Spanning East River between Park HAER NY,31-NEYO,90-55.tif",
        autor: "El amarre de los tirantes al tablero del puente. Fotografía de Jet Lowe, 1982.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Detail_view_of_underside_of_deck_showing_connection_between_diagonal_cable_and_superstructure._Jet_Lowe,_photographer,_1982._-_Brooklyn_Bridge,_Spanning_East_River_between_Park_HAER_NY,31-NEYO,90-55.tif",
        foco: "50% 50%",
        alt: "El entramado de acero bajo el tablero del puente, con los cables anclados uno a uno.",
      },
      {
        archivo: "Caisson for the Construction of a Pier(GN04899).jpg",
        autor: "Un cajón de cimentación como los que se hundieron bajo el río para levantar las torres.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Caisson_for_the_Construction_of_a_Pier(GN04899).jpg",
        foco: "50% 50%",
        alt: "Un cajón enorme de obra a medio hundir en el agua, con la estructura de trabajo encima.",
      },
      {
        archivo: "Currier and Ives Brooklyn Bridge2.jpg",
        autor: "El puente recién terminado en una litografía de Currier and Ives, 1883.",
        licencia: "Dominio público",
        pdPorEdad: 1888,
        fuente: "https://commons.wikimedia.org/wiki/File:Currier_and_Ives_Brooklyn_Bridge2.jpg",
        foco: "50% 45%",
        alt: "Litografía en color del puente de Brooklyn con veleros cruzando por debajo.",
      },
    ],
    entrada:
      "Nueva York, 1869. Se empieza a construir el puente colgante más largo del mundo para unir Manhattan con la ciudad vecina de Brooklyn, que entonces era todavía un municipio independiente y rival. Para sostenerlo hay que hundir en el fondo del East River dos torres de piedra de más de ochenta metros, cimentadas en el lecho del río, y nadie ha hecho antes nada parecido a esa escala. El ingeniero que lo diseñó muere de tétanos, tras un accidente en el muelle, antes incluso de que se ponga la primera piedra.",
    paginas: [
      {
        rotulo: "Los cajones",
        texto:
          "El hijo tomó el relevo. Para cimentar las torres se usaron unos cajones enormes de madera, hundidos boca abajo en el lecho del río y llenos de aire a presión para que no entrara el agua; dentro, los obreros excavaban el fondo a pico y pala en un ambiente asfixiante, con velas que apenas ardían. Al subir demasiado deprisa a la superficie, muchos salían doblados de dolor, con las articulaciones agarrotadas y sangrando por la nariz. Nadie sabía por qué. Hoy se llama enfermedad de los buzos y se debe al nitrógeno que se disuelve en la sangre y forma burbujas al descomprimir.",
        destacado: { tipo: "frase", frase: "Dentro del cajón las velas apenas ardían." },
      },
      {
        rotulo: "Ella",
        texto:
          "El hijo cayó enfermo de lo mismo en 1872 y quedó tan tocado que apenas podía moverse, ni hablar mucho rato, ni soportar la luz del día. Se instaló en una casa desde la que se veía la obra y la vigilaba con unos prismáticos. Su mujer, que no tenía ninguna formación técnica, se puso a estudiar: cálculo de tensiones, comportamiento de los cables de acero, resistencia de materiales. Durante once años fue ella quien iba cada día al tajo, transmitía las órdenes, discutía con los contratistas y respondía a los ingenieros, hasta el punto de que muchos daban por hecho que el proyecto era suyo.",
        destacado: { tipo: "cifra", cifra: "11", unidad: "años dirigiendo la obra en su lugar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se inauguró en mayo de 1883 y ella fue la primera en cruzarlo en carruaje, con un gallo en el regazo como símbolo de victoria. Seis días después alguien gritó en el paso peatonal que el puente se caía; hubo una estampida y murieron doce personas. Para demostrar que aguantaba, un empresario de circo lo cruzó al año siguiente con veintiún elefantes en fila. Sigue en pie y por él pasan cada día más de cien mil vehículos, casi siglo y medio después. En una placa de bronce, junto al nombre de los dos ingenieros, está el de la mujer que hizo el trabajo.",
      },
    ],
  },

  {
    id: "tacoma-narrows",
    titulo: "El puente se retorció",
    gancho: "Cuatro meses después de inaugurarlo se ondulaba con viento flojo. Un profesor lo filmó cayendo.",
    categoria: "Puentes",
    color: "var(--clay)",
    encargo: "Una calzada de puente vacía, torcida, vista en escorzo en blanco y negro.",
    fotos: [
      {
        archivo: "Mount Rainier at the Tacoma Narrows Bridge (18402622459).jpg",
        autor: "El puente actual del estrecho de Tacoma, con el monte Rainier al fondo, 2015. Fotografía de Jonathan Miske.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Mount_Rainier_at_the_Tacoma_Narrows_Bridge_(18402622459).jpg",
        foco: "50% 45%",
        alt: "Un puente colgante verde con sus dos torres, y detrás la mole nevada de un volcán sobre la ciudad.",
      },
      {
        archivo: "Galloping Gertie fragment 01.jpg",
        autor: "Fragmento conservado del puente de 1940, apodado «Galloping Gertie». Fotografía de Joe Mabel, 2012.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Galloping_Gertie_fragment_01.jpg",
        foco: "50% 50%",
        alt: "Un trozo de viga de acero remachada del puente original, expuesto como pieza suelta.",
      },
      {
        archivo: "The Union Bridge, Scotland to England. The road deck. Cables and chains.jpg",
        autor: "Calzada del Union Bridge, entre Escocia e Inglaterra, colgada de sus cables y cadenas. Fotografía de Rosser1954, 2020.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:The_Union_Bridge,_Scotland_to_England._The_road_deck._Cables_and_chains.jpg",
        foco: "50% 50%",
        alt: "El tablero estrecho de un puente colgante visto desde un extremo, con las péndolas sujetándolo a los cables.",
      },
      {
        archivo: "Union Bridge, Scotland to England. Car on the road deck.jpg",
        autor: "Un coche cruzando el mismo puente colgante. Fotografía de Rosser1954, 2020.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Union_Bridge,_Scotland_to_England._Car_on_the_road_deck.jpg",
        foco: "50% 50%",
        alt: "Un coche pequeño avanzando por la calzada de un puente colgante estrecho.",
      },
    ],
    entrada:
      "Estado de Washington, en el noroeste de Estados Unidos, julio de 1940. Se inaugura un puente colgante muy largo y muy estrecho sobre un brazo de mar, el tercero más largo del mundo en ese momento. Desde el primer día se mueve: con viento suave la calzada sube y baja en ondas largas, tanto que desde un coche se pierde de vista el de delante. La gente de la zona le pone un mote y hay conductores que van a cruzarlo los fines de semana por gusto, como quien se sube a una atracción de feria.",
    paginas: [
      {
        rotulo: "El galope",
        texto:
          "Los ingenieros de la época venían de una carrera por hacer puentes cada vez más finos y elegantes, con menos acero y por tanto más baratos. Este tenía una calzada de solo dos metros y medio de canto para más de ochocientos metros entre torres, y en lugar de la celosía abierta que se usaba antes se le pusieron unas vigas macizas a los lados que funcionaban como una vela. Los obreros ya se mareaban durante la construcción. Se probaron cables de anclaje y amortiguadores hidráulicos, y ninguno de los remedios sirvió: el puente seguía ondulando en cuanto soplaba algo de aire.",
        destacado: { tipo: "frase", frase: "Los obreros ya se mareaban durante la construcción." },
      },
      {
        rotulo: "La caída",
        texto:
          "La mañana del 7 de noviembre de 1940 el viento soplaba a unos sesenta y cinco kilómetros por hora, nada excepcional en aquella zona. El movimiento cambió de golpe: en vez de subir y bajar en ondas, la calzada empezó a retorcerse sobre sí misma, un lado arriba y el otro abajo, con giros de casi cuarenta y cinco grados. Un profesor de la universidad cercana estaba allí con una cámara de cine y lo filmó todo. Un periodista que había dejado el coche en mitad del puente intentó rescatar a su perro y tuvo que salir a gatas. El tramo central se desprendió y cayó al agua.",
        destacado: { tipo: "cifra", cifra: "45", unidad: "grados llegó a girar la calzada" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No murió nadie salvo el perro. Aquella película en blanco y negro se convirtió en el material didáctico más visto de la ingeniería y se sigue proyectando en clase en todo el mundo. La explicación tardó años en afinarse y no es la resonancia sencilla que se cuenta a veces, sino un efecto en el que el propio movimiento del tablero genera las fuerzas que lo amplifican. Desde entonces cualquier puente largo se ensaya antes con maquetas en un túnel de viento. El que se construyó después en el mismo sitio es más ancho, más rígido y tiene la calzada agujereada para que el aire pase a través.",
      },
    ],
  },

  {
    id: "puente-tambaleante",
    titulo: "Cerrado a los dos días",
    gancho: "Ochenta mil personas lo estrenaron a la vez y se bamboleó tanto que se agarraban a la barandilla.",
    categoria: "Puentes",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una pasarela peatonal metálica muy fina sobre un río gris, vista desde la orilla.",
    entrada:
      "Londres, 10 de junio del año 2000. Se abre al público una pasarela peatonal nueva sobre el Támesis, muy plana y muy delgada, pensada como una cinta de acero tendida entre las dos orillas. El primer día la cruzan unas ochenta mil personas. Y el puente empieza a moverse de lado, tanto que muchos se paran a media travesía.",
    paginas: [
      {
        rotulo: "El bamboleo",
        texto:
          "El balanceo era lateral, no vertical, y llegó a siete centímetros a cada lado. La gente reaccionaba como se reacciona en la cubierta de un barco: separando las piernas y ajustando el paso al vaivén. Ahí estaba el problema. Al acompasarse sin darse cuenta, todos empujaban en la misma dirección a la vez y aumentaban el movimiento, que a su vez obligaba a acompasarse todavía más. Los cálculos de diseño habían tenido en cuenta el viento y el peso, pero no la fuerza de costado que hacen unos miles de personas al andar. Se cerró el segundo día, con la promesa de reabrirlo enseguida.",
        destacado: { tipo: "frase", frase: "Cada paso acompasado empujaba el puente un poco más." },
      },
      {
        rotulo: "Los ensayos",
        texto:
          "Reabrirlo costó casi dos años y varios millones de libras. Antes de tocar nada hubo que entender el fenómeno, que apenas estaba estudiado, y para eso se organizaron ensayos con voluntarios: grupos de hasta dos mil personas caminando por la pasarela mientras unos sensores medían cuánto se movía y a partir de cuántos peatones aparecía el efecto. Encontraron un umbral bastante claro, en torno a ciento cincuenta personas en el tramo más largo. La solución fueron noventa y un amortiguadores repartidos bajo el tablero, parecidos a los de un coche pero del tamaño de un tronco, que se comen la energía del vaivén.",
        destacado: { tipo: "cifra", cifra: "91", unidad: "amortiguadores instalados debajo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Volvió a abrir en febrero de 2002 y desde entonces no se ha movido, aunque el apodo que le pusieron en aquellos dos días, el puente tambaleante, no se lo ha quitado nadie. El episodio dejó un capítulo nuevo en los manuales: hoy se calcula el empuje lateral de los peatones en cualquier pasarela larga, un cálculo que antes no se hacía porque nadie sabía que hiciera falta. Se revisaron después puentes antiguos de medio mundo y se encontró el mismo efecto en pequeño. Lo raro no fue que se moviera: lo raro es que hasta el año 2000 nadie hubiera mirado.",
      },
    ],
  },
];
