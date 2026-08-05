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
    titulo: "La caja que abarató el mundo",
    gancho: "Antes, descargar un barco costaba una semana y la mitad del precio del viaje. La caja lo dejó en horas.",
    categoria: "Barcos",
    color: "var(--slate)",
    encargo: "Una pila de contenedores de colores en un muelle, vistos desde abajo.",
    entrada:
      "Puerto de Nueva Jersey, 26 de abril de 1956. Un antiguo camionero convertido en empresario ha comprado un petrolero viejo, le ha soldado una cubierta plana encima y ha subido cincuenta y ocho cajas metálicas idénticas, con la mercancía dentro. Nadie en el sector cree que aquello tenga futuro. Es la operación que va a cambiar el precio de casi todo.",
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
    entrada:
      "Océanos del mundo, siglo XVII. En las travesías largas, los marineros empiezan a las pocas semanas con las encías hinchadas, se les caen los dientes, se les vuelven a abrir heridas cerradas años antes y acaban muriendo. Se calcula que el escorbuto mató a unos dos millones de marineros, más que los naufragios, los combates y las tormentas juntos.",
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
    titulo: "Una zanja quitó siete mil kilómetros",
    gancho: "Antes había que rodear África entera. Lo intentaron los faraones, los persas y Napoleón.",
    categoria: "Barcos",
    color: "var(--ochre)",
    encargo: "Un carguero enorme cruzando entre dos orillas de arena, sin agua visible alrededor.",
    entrada:
      "Egipto, noviembre de 1869. Se abre una zanja de ciento sesenta kilómetros entre el Mediterráneo y el mar Rojo, después de diez años de obra y de más de un millón y medio de trabajadores empleados por turnos. Hasta ese día, un barco que fuera de Europa a la India tenía que rodear África entera por el sur: unos siete mil kilómetros más.",
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
