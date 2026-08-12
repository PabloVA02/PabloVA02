import type { Short } from "../shorts";

/* ==========================================================================
   Barcos.

   Mar cuenta el océano; Barcos cuenta lo que flota encima y lo que mueve.
   Casi todo lo que hay en una casa ha viajado en uno, y eso no lo piensa
   nadie mientras abre una caja.

   La regla del tema: se cuenta el PROBLEMA LOGÍSTICO, que suena aburrido y
   nunca lo es. Cómo se descargaba un barco antes de las cajas. Por qué se
   morían los marineros en travesías largas. Cuánto se ahorra abriendo una
   zanja entre dos mares. Detrás de cada uno hay un cambio que se nota en el
   precio de lo que compra cualquiera.

   Nada de tipos de casco ni de aparejos. Un problema, una solución y lo que
   se llevó por delante.
   ========================================================================== */

export const BARCOS: Short[] = [
  {
    id: "contenedor",
    titulo: "El contenedor lo cambió",
    gancho: "Antes, descargar un barco costaba una semana y la mitad del precio del viaje. La caja lo dejó en horas.",
    categoria: "Barcos",
    color: "var(--slate)",
    encargo: "Una pila de contenedores de colores en un muelle, vistos desde abajo.",
    /* De arriba abajo del short: el barco de hoy, el muelle de antes, la caja
       repetida hasta el infinito y el campo entero de cajas. */
    fotos: [
      {
        archivo: "MAERSK HANOI Container Ship (Port Koper SIKOP, 2023).jpg",
        autor:
          "El portacontenedores Maersk Hanoi, 353 metros de eslora, atracado en el puerto de Koper. Fotografía de Petar Milošević, 2024.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:MAERSK_HANOI_Container_Ship_(Port_Koper_SIKOP,_2023).jpg",
        foco: "50% 55%",
        alt: "Un buque de casco azul turquesa cargado hasta arriba de contenedores de colores, amarrado bajo las grúas del puerto y con el mar abierto detrás.",
      },
      {
        archivo: "Container Ship MSC Tianping in Fremantle Harbour, November 2024 01.jpg",
        autor: "Un portacontenedores atracado bajo las grúas del puerto de Fremantle, en Australia. Fotografía de Calistemon.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Container_Ship_MSC_Tianping_in_Fremantle_Harbour,_November_2024_01.jpg",
        foco: "50% 50%",
        alt: "Un buque portacontenedores amarrado, con las grúas de pórtico del muelle inclinadas sobre la cubierta.",
      },
      {
        archivo: "Containerhafen Niehl.jpg",
        autor:
          "Contenedores apilados en el puerto de Niehl, Colonia. Fotografía de glasseyes view, 2014.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Containerhafen_Niehl.jpg",
        foco: "50% 45%",
        alt: "Una pared de contenedores de chapa ondulada apilados unos sobre otros, con una grúa verde delante.",
      },
      {
        archivo: "Barbados Port Inc Container Park Bridgetown 0254.jpg",
        autor:
          "La campa de contenedores del puerto de Bridgetown, Barbados. Fotografía de Paul Harrison, 2018.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Barbados_Port_Inc_Container_Park_Bridgetown_0254.jpg",
        foco: "50% 50%",
        alt: "Vista desde arriba de hileras y filas de contenedores rojos, azules y naranjas ordenados en una explanada.",
      },
    ],
    entrada:
      "Puerto de Nueva Jersey, 26 de abril de 1956. Un antiguo camionero convertido en empresario ha comprado un petrolero viejo, le ha soldado una cubierta plana encima y ha subido cincuenta y ocho cajas metálicas idénticas, con la mercancía dentro. Nadie en el sector cree que aquello tenga futuro. Descargar un barco cuesta entonces una semana de trabajo de cuadrillas enteras, y ese trabajo se lleva más de la mitad de lo que cuesta el viaje. Aquellas cajas idénticas van a dejarlo en unas horas. Con eso van a cambiar el precio de casi todo lo que se compra, y de paso van a vaciar los muelles de las ciudades y a llevárselos a las afueras.",
    paginas: [
      {
        rotulo: "Antes de la caja",
        texto:
          "Hasta entonces, la carga se llevaba suelta: sacos, barriles, fardos y cajones de tamaños distintos que había que ir bajando a mano de un camión, apilando en el muelle y metiendo después en la bodega encajándolos como un rompecabezas. Descargar un barco mediano podía llevar una semana entera con cientos de estibadores trabajando, y en ese tiempo el barco no ganaba nada. La manipulación en puerto se comía entre el treinta y el cincuenta por ciento del coste de un transporte, y por el camino desaparecía una parte de la mercancía.",
        destacado: { tipo: "cifra", cifra: "50 %", unidad: "del coste se iba en cargar y descargar" },
      },
      {
        rotulo: "La medida",
        texto:
          "Lo decisivo no fue la caja, que ya se había probado antes, sino que todas midieran lo mismo. Costó una década de peleas acordar una medida internacional —doce metros de largo, dos y medio de ancho— y unas esquinas con piezas de anclaje idénticas, de modo que la misma caja encajara en un barco, en un tren y en un camión de cualquier país sin abrirla ni una vez desde la fábrica hasta la tienda. Los sindicatos de estibadores se opusieron durante años, porque el sistema eliminaba nueve de cada diez puestos del muelle.",
        destacado: { tipo: "frase", frase: "Lo decisivo no fue la caja. Fue que todas midieran igual." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hoy circulan por el mundo unos sesenta millones de contenedores y los barcos más grandes llevan veinticuatro mil cada uno, tripulados por poco más de veinte personas. Transportar una camisa de Asia a Europa cuesta unos pocos céntimos, tan poco que ha dejado de importar dónde se fabrica algo. Ese abaratamiento es la razón de fondo de que la industria se trasladara al otro lado del planeta. Y todo salió de la impaciencia de un camionero que en 1937 se pasó un día entero esperando turno en un muelle de Nueva Jersey, con el motor parado, mirando cómo bajaban fardos de uno en uno.",
      },
    ],
  },

  {
    id: "escorbuto-limones",
    titulo: "El escorbuto mataba más",
    gancho: "Se supo cómo curarlo en 1747 y se tardó cuarenta y ocho años en aplicarlo.",
    categoria: "Barcos",
    color: "var(--forest)",
    encargo: "Unos limones y una jarra sobre la mesa de madera de un camarote antiguo.",
    fotos: [
      {
        archivo: "Jacob van Hulsdonck - Still life of lemons and pomegranate.jpg",
        autor: "«Bodegón de limones y granada», óleo de Jacob van Hulsdonck, entre 1620 y 1630.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Jacob_van_Hulsdonck_-_Still_life_of_lemons_and_pomegranate.jpg",
        foco: "50% 55%",
        alt: "Un limón entero, medio limón y trozos de granada sobre una tabla de madera, con el fondo en penumbra.",
      },
      {
        archivo: "Samuel Scott - A first-rate shortening sail.jpg",
        autor: "«Navío de primera clase acortando vela», óleo de Samuel Scott, hacia 1736.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Samuel_Scott_-_A_first-rate_shortening_sail.jpg",
        foco: "50% 45%",
        alt: "Pintura de un gran navío de línea con la marinería trepando por la jarcia para recoger las velas.",
      },
      {
        archivo: "Lemon Fruit in a Basket.jpg",
        autor: "Limones recién recogidos en un cesto. Fotografía de Iwai-Dialax, 2025.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lemon_Fruit_in_a_Basket.jpg",
        foco: "50% 50%",
        alt: "Un cesto lleno de limones amarillos con alguna hoja verde entre ellos.",
      },
      {
        archivo: "I. E. C. Rasmussen - Seascape with warship in high seas.jpg",
        autor: "«Marina con buque de guerra en mar gruesa», óleo de Carl Rasmussen, siglo XIX.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:I._E._C._Rasmussen_-_Seascape_with_warship_in_high_seas.jpg",
        foco: "50% 50%",
        alt: "Pintura de un velero escorado entre olas grandes bajo un cielo cargado.",
      },
    ],
    entrada:
      "Océanos del mundo, siglo XVII. En las travesías largas, los marineros empiezan a las pocas semanas con las encías hinchadas y sangrantes, se les caen los dientes, se les vuelven a abrir heridas que llevaban años cerradas y acaban muriendo sin que nadie sepa de qué. La enfermedad tenía además una lógica desesperante, porque desaparecía sola en cuanto el barco tocaba tierra y comía fresco, lo que alimentó todo tipo de teorías equivocadas sobre el aire de mar y la humedad. Se calcula que el escorbuto mató a unos dos millones de marineros, más que los naufragios, los combates y las tormentas juntos.",
    paginas: [
      {
        rotulo: "La prueba",
        texto:
          "En 1747, un médico naval escocés hizo a bordo lo que hoy se considera uno de los primeros ensayos clínicos de la historia. Cogió a doce enfermos en el mismo estado, los repartió en seis parejas y le dio a cada una un remedio distinto de los que se manejaban entonces: sidra, vinagre, agua de mar, una pasta de especias, un ácido y dos naranjas con un limón al día. Los de la fruta estaban en pie en menos de una semana; uno volvió al servicio y el otro se quedó cuidando a los demás.",
        destacado: { tipo: "cifra", cifra: "12", unidad: "enfermos repartidos en seis parejas" },
      },
      {
        rotulo: "Cuarenta y ocho años",
        texto:
          "Publicó los resultados en un libro de quinientas páginas donde la conclusión quedaba enterrada entre otras teorías suyas, y ni él mismo la defendió con claridad; creía que la causa era la humedad a bordo. La marina británica no ordenó repartir zumo de limón hasta 1795, cuarenta y ocho años después, y cuando lo hizo el efecto fue inmediato: los ingresos por escorbuto en el hospital naval de Portsmouth pasaron de mil quinientos al año a menos de veinte. La sustancia que lo cura, la vitamina C, no se aisló hasta 1932.",
        destacado: { tipo: "frase", frase: "La cura estaba publicada. Tardaron medio siglo en usarla." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Después vino un retroceso curioso. Al cambiar el limón mediterráneo por la lima de las colonias del Caribe, que tenía la mitad de vitamina, y al hervir el zumo para conservarlo en tubos de cobre, la protección se perdió sin que nadie entendiera por qué; hubo expediciones polares del siglo XX que volvieron a sufrir escorbuto llevando el remedio a bordo. El apodo que los estadounidenses ponían a los marineros británicos, «los del zumo de lima», viene precisamente de aquel cambio de fruta, y se sigue usando hoy en inglés para referirse a cualquier británico sin que casi nadie sepa de dónde sale.",
      },
    ],
  },

  {
    id: "canal-suez",
    titulo: "Siete mil kilómetros menos",
    gancho: "Antes había que rodear África entera. Lo intentaron los faraones, los persas y Napoleón.",
    categoria: "Barcos",
    color: "var(--ochre)",
    encargo: "Un carguero enorme cruzando entre dos orillas de arena, sin agua visible alrededor.",
    fotos: [
      {
        archivo: "A Ship in the Suez Canal.tif",
        autor: "Barco cruzando el canal de Suez, 1955.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AA%20Ship%20in%20the%20Suez%20Canal.tif",
        foco: "45% 45%",
        alt: "Buque de pasaje navegando por el canal de Suez entre orillas de arena.",
      },
      {
        archivo: "Egypt. Suez Canal. Ship passing thro(ough) Canal LOC matpc.22381.jpg",
        autor: "Barco pasando por el canal de Suez, entre 1934 y 1939.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3AEgypt.%20Suez%20Canal.%20Ship%20passing%20thro(ough)%20Canal%20LOC%20matpc.22381.jpg",
        foco: "50% 50%",
        alt: "Fotografía antigua de un barco atravesando el canal entre dunas.",
      },
      {
        archivo: "Suez Canal, Port Said - ISS.jpg",
        autor: "Port Said y la entrada del canal desde la Estación Espacial, 2006.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ASuez%20Canal%2C%20Port%20Said%20-%20ISS.jpg",
        foco: "50% 50%",
        alt: "Vista desde el espacio de la línea recta del canal cruzando el desierto.",
      },
      {
        archivo: "Container Ship 'Ever Given' stuck in the Suez Canal, Egypt - March 24th, 2021 cropped.jpg",
        autor: "El portacontenedores Ever Given atravesado en el canal, 2021.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AContainer%20Ship%20'Ever%20Given'%20stuck%20in%20the%20Suez%20Canal%2C%20Egypt%20-%20March%2024th%2C%202021%20cropped.jpg",
        foco: "50% 50%",
        alt: "Imagen de satélite de un carguero cruzado de orilla a orilla en el canal.",
      },
    ],
    entrada:
      "Egipto, noviembre de 1869. Se abre por fin una zanja de ciento sesenta kilómetros entre el Mediterráneo y el mar Rojo, después de diez años largos de obra y de más de un millón y medio de trabajadores empleados por turnos en condiciones durísimas. Hasta ese día, un barco que quisiera ir de Europa a la India no tenía otra salida que rodear África entera por el sur, doblando el cabo de Buena Esperanza: unos siete mil kilómetros más de viaje y varias semanas añadidas a cada trayecto, de ida y de vuelta.",
    paginas: [
      {
        rotulo: "Los intentos",
        texto:
          "La idea era antiquísima y había fracasado varias veces. Un faraón excavó un canal hacia el año 600 antes de Cristo y lo abandonó cuando un oráculo advirtió de que solo beneficiaría a los extranjeros; un rey persa lo terminó un siglo después y funcionó de forma intermitente durante mil años hasta cegarse de arena. Napoleón mandó estudiarlo en 1798 y sus ingenieros calcularon mal: concluyeron que el mar Rojo estaba diez metros más alto que el Mediterráneo y que abrir el paso inundaría el delta del Nilo. El error no se corrigió hasta 1847.",
        destacado: { tipo: "frase", frase: "Los ingenieros de Napoleón calcularon que inundaría Egipto." },
      },
      {
        rotulo: "La obra",
        texto:
          "La excavación empezó a pico y pala con campesinos egipcios reclutados por la fuerza mediante un sistema de trabajo obligatorio; se calcula que murieron miles por el calor, el agotamiento y un brote de cólera. Cuando la presión internacional obligó a suprimir ese reclutamiento, la obra estuvo a punto de pararse y hubo que traer excavadoras de vapor y dragas desde Europa, que acabaron moviendo tres cuartas partes de la tierra. Al final se retiraron unos setenta y cinco millones de metros cúbicos de arena y de roca, suficientes para levantar una pirámide como la de Guiza cada treinta días durante los diez años que duró la obra.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "años de obra y más de un millón de trabajadores" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hoy pasan por allí unos veinte mil barcos al año, en torno al doce por ciento del comercio mundial, y no tiene esclusas: los dos mares están al mismo nivel, como se comprobó cuando por fin alguien midió bien. En 2021 un portacontenedores encalló de través y lo bloqueó durante seis días, dejando cuatrocientos barcos parados a la espera y frenando el comercio global lo bastante para notarse en los precios. Hicieron falta seis días de dragas, remolcadores y una marea alta para desencallarlo. Fue el mejor recordatorio posible de lo que costaba antes rodear un continente entero.",
      },
    ],
  },
];
