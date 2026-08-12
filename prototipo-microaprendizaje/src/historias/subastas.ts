import type { Short } from "../shorts";

/* ==========================================================================
   Las subastas.

   Vender al que más ofrece parece la cosa más simple del mundo y es un
   mecanismo delicadísimo: cambia el resultado según cómo se puje, quién vea
   las ofertas y cuándo se cierre.

   La regla del tema: cada short enseña UNA REGLA DEL JUEGO y lo que provoca.
   Nada de anécdotas de precios récord por sí solas: si se cuenta una cifra,
   es para explicar por qué ese diseño de subasta produjo esa cifra. Y siempre
   aparece alguien que se pasa de listo, porque es lo que enseña.
   ========================================================================== */

export const SUBASTAS: Short[] = [
  {
    id: "el-imperio-subastado",
    titulo: "Subastaron el Imperio",
    gancho: "La guardia mató al emperador, salió a la muralla y ofreció el trono al mejor postor. Duró sesenta y seis días.",
    categoria: "Subastas",
    color: "var(--clay)",
    encargo: "Una muralla de piedra vista desde abajo, con la luz dura del mediodía.",
    fotos: [
      {
        archivo: "Relief of Soldiers of the Praetorian Guard 01 (51220287737).jpg",
        autor:
          "Relieve de soldados de la guardia pretoriana, siglo II. Museo del Louvre. Fotografía de Jamie Heath.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Relief_of_Soldiers_of_the_Praetorian_Guard_01_(51220287737).jpg",
        foco: "50% 40%",
        alt: "Relieve de mármol con cinco soldados romanos de perfil, con cascos de penacho y escudos ovalados.",
      },
      {
        archivo: "Coin Hoard (FindID 514220).jpg",
        autor:
          "Un tesorillo de monedas romanas de plata y bronce, tal como se encontró. Museo Británico.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Coin_Hoard_(FindID_514220).jpg",
        foco: "50% 50%",
        alt: "Quince monedas romanas ordenadas en filas sobre fondo blanco, la mayoría de bronce con la pátina verde.",
      },
      {
        archivo: "Relief of Soldiers of the Praetorian Guard 04 (51220287572).jpg",
        autor:
          "Detalle del mismo relieve: las caras de los pretorianos, una a una. Fotografía de Jamie Heath.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Relief_of_Soldiers_of_the_Praetorian_Guard_04_(51220287572).jpg",
        foco: "50% 40%",
        alt: "Primer plano del relieve: cuatro rostros de soldados romanos bajo cascos con penacho labrado.",
      },
      {
        archivo: "Ruins on Palatine Hill, Rome, Italy.jpg",
        autor:
          "Las ruinas del palacio imperial en el monte Palatino, en Roma. Fotografía de Christoph Strässler.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ruins_on_Palatine_Hill,_Rome,_Italy.jpg",
        foco: "50% 45%",
        alt: "Restos de muros de ladrillo entre pinos, con la hierba creciendo sobre los cimientos.",
      },
    ],
    entrada:
      "Roma, marzo del año 193. La guardia imperial, un cuerpo de élite de miles de hombres acuartelado en la ciudad, acaba de asesinar al emperador porque no les ha pagado lo prometido. En lugar de proclamar a otro, sus oficiales hacen algo sin precedentes: anuncian desde la muralla del campamento que el imperio se entrega a quien ofrezca más dinero a la tropa. No es una metáfora ni una exageración de los cronistas: hubo dos pujadores, se gritaron cifras desde abajo y desde arriba, y el cargo se adjudicó al que subió la última cantidad. El ganador entró en Roma esa misma tarde como emperador y duró sesenta y seis días.",
    paginas: [
      {
        rotulo: "La puja",
        texto:
          "Se presentaron dos candidatos y las crónicas describen la escena con incredulidad. Uno pujaba desde fuera de la muralla y el otro desde dentro. Los soldados iban y venían llevando las ofertas de uno a otro, como en la venta de un caballo. Se pujaba en sestercios por soldado, es decir, en la cantidad que cobraría cada hombre de la guardia. Ganó un senador riquísimo que ofreció el equivalente a varios años de salario por cabeza, una fortuna descomunal multiplicada por miles de hombres. Lo proclamaron allí mismo y lo escoltaron al senado esa misma tarde.",
        destacado: { tipo: "frase", frase: "Los soldados llevaban las ofertas de un postor a otro." },
      },
      {
        rotulo: "El problema",
        texto:
          "El comprador descubrió enseguida lo que su dinero no compraba. La ciudad lo despreció desde el primer día y el senado lo aceptó por miedo. Pero el problema grande estaba lejos: los ejércitos de las provincias eran muchísimos más hombres que la guardia, y no reconocieron una venta en la que no habían participado. Tres generales se proclamaron emperadores en sus respectivas fronteras y uno de ellos marchó sobre la capital. El comprador ni siquiera pudo pagar del todo lo prometido, porque buena parte de su fortuna estaba en tierras y no en monedas.",
        destacado: { tipo: "cifra", cifra: "66", unidad: "días duró el emperador comprador" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Fue depuesto y ejecutado a los sesenta y seis días. El general que entró en la ciudad disolvió la guardia entera, expulsó a sus hombres y les prohibió acercarse a menos de cien millas de la capital. Quedó el episodio como el ejemplo clásico de una subasta mal diseñada: se vendió algo que el vendedor no controlaba y que el comprador no podía hacer cumplir. Y quedó una lección que los manuales repiten con otros ejemplos: en cualquier subasta, lo primero que hay que preguntar es qué se está vendiendo exactamente.",
      },
    ],
  },
  {
    id: "la-vela-que-se-apaga",
    titulo: "El alfiler cerraba la puja",
    gancho: "Nadie sabía cuándo iba a terminar, y esa incertidumbre era justo lo que hacía funcionar el sistema.",
    categoria: "Subastas",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una vela pequeña casi consumida, con la llama a punto de morir, sobre una mesa.",
    fotos: [
      {
        archivo: "Georges de La Tour 035.jpg",
        autor: "«Los jugadores de dados», óleo de Georges de La Tour, 1650-1651.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Georges_de_La_Tour_035.jpg",
        foco: "50% 45%",
        alt: "Cinco figuras alrededor de una mesa iluminadas por una luz cálida escondida, todas mirando lo que hay sobre el tablero.",
      },
      {
        archivo: "Candlelight Master Young Boy Singing.jpg",
        autor: "«Joven cantando», del llamado Maestro de la Vela, hacia 1650.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Candlelight_Master_Young_Boy_Singing.jpg",
        foco: "50% 40%",
        alt: "Un muchacho iluminado por la llama de una vela que sostiene en la mano, con el fondo en negro.",
      },
      {
        archivo: "Georges de La Tour L'Argent verse Musée des beaux-arts de Lviv.jpg",
        autor: "«El pago del dinero», óleo de Georges de La Tour, entre 1630 y 1635. Museo de Bellas Artes de Leópolis.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Georges_de_La_Tour_L'Argent_verse_Mus%C3%A9e_des_beaux-arts_de_Lviv.jpg",
        foco: "50% 45%",
        alt: "Varias personas alrededor de una mesa con monedas, alumbradas por una única vela.",
      },
      {
        archivo: "Maître à la Chandelle - Le Jeune Chanteur (1650).jpg",
        autor: "«El joven cantor», del Maestro de la Vela, 1650.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Ma%C3%AEtre_%C3%A0_la_Chandelle_-_Le_Jeune_Chanteur_(1650).jpg",
        foco: "50% 40%",
        alt: "Retrato a la luz de una vela, con la llama tapada en parte por la mano y la cara recortada en la penumbra.",
      },
    ],
    entrada:
      "Europa, siglos XVI a XIX. En las subastas de barcos y de cargamentos se usa un método que hoy parece de teatro y que en realidad es un mecanismo muy fino. Se enciende un cabo de vela con un alfiler clavado cerca de la punta, y las pujas se aceptan hasta que la llama llega al alfiler y este cae sobre la bandeja de metal. Quien haya pujado el último se lleva el lote. Nadie en la sala sabe exactamente cuándo va a caer ese alfiler, y esa ignorancia compartida es justo lo que hace que el sistema funcione.",
    paginas: [
      {
        rotulo: "El alfiler",
        texto:
          "El detalle del alfiler no es decoración. Una vela normal se apaga en un momento impreciso y discutible, mientras que el alfiler cae con un tintineo audible en toda la sala y marca un final indiscutible. Su gracia es que nadie sabe con exactitud cuándo va a ocurrir: se puede calcular a ojo, pero no controlarlo. Eso impide la táctica que arruina cualquier subasta con hora fija, que consiste en callarse y pujar en el último segundo, porque aquí no hay último segundo conocido. Quien espera demasiado se queda sin pujar.",
        destacado: { tipo: "frase", frase: "El alfiler caía con un tintineo, y ahí se acababa." },
      },
      {
        rotulo: "Pujar a ciegas",
        texto:
          "El resultado es que los compradores pujaban pronto y de verdad, en lugar de esperar. Los diarios de la época describen salas enteras mirando fijamente un cabo de vela de pocos centímetros. Las ofertas se aceleran según baja la llama. Y cuentan algún caso de pujas frenéticas seguidas de un silencio total. El método se usó para vender de todo: capturas de barcos apresados, arrendamientos de tierras, contratas de obras públicas y hasta bienes de la corona. En algunos puertos ingleses se subastaron así los cargamentos durante más de dos siglos, siempre con el mismo cabo de vela y el mismo alfiler.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "alfiler decidía el final" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El método desapareció con los relojes fiables y las subastas de martillo, pero la idea ha vuelto por la puerta de atrás. Las subastas por internet sufren exactamente el problema que la vela evitaba: la gente puja en los últimos segundos, y eso baja los precios y frustra a los vendedores. Por eso muchas plataformas usan hoy un cierre flexible, que alarga la subasta unos minutos cada vez que entra una puja al final. Es un alfiler electrónico que nadie puede calcular de antemano, y resuelve exactamente el mismo problema que resolvía el de cera cuatro siglos antes.",
      },
    ],
  },
  {
    id: "la-maldicion-del-ganador",
    titulo: "Ganar y salir perdiendo",
    gancho: "Si todos calculan a ojo lo que vale algo incierto, el que gana suele ser el que más se equivocó.",
    categoria: "Subastas",
    color: "var(--slate)",
    encargo: "Un martillo de subastas apoyado sobre una mesa vacía y pulida.",
    fotos: [
      {
        archivo: "Oil Rig Graveyard Near Inverness.jpg",
        autor: "Plataformas petrolíferas fondeadas en el fiordo de Cromarty, Escocia, 2018.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AOil%20Rig%20Graveyard%20Near%20Inverness.jpg",
        foco: "50% 60%",
        alt: "Siluetas de varias plataformas petrolíferas recortadas a contraluz sobre el agua.",
      },
      {
        archivo: "Oil Rig - panoramio (3).jpg",
        autor: "Plataforma petrolífera en alta mar, 2014.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AOil%20Rig%20-%20panoramio%20(3).jpg",
        foco: "50% 50%",
        alt: "Plataforma de perforación en mitad del mar con la torre levantada.",
      },
      {
        archivo: "MV ART CARLSON - OFFSHORE - panoramio.jpg",
        autor: "Buque de apoyo junto a una plataforma en alta mar, 2012.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMV%20ART%20CARLSON%20-%20OFFSHORE%20-%20panoramio.jpg",
        foco: "50% 50%",
        alt: "Barco de servicio navegando cerca de una instalación petrolífera marina.",
      },
      {
        archivo: "Minke Field 2007.jpg",
        autor: "Instalación petrolífera del campo Minke, mar del Norte, 2007.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMinke%20Field%202007.jpg",
        foco: "50% 50%",
        alt: "Plataforma marina con sus grúas y su torre bajo un cielo gris del mar del Norte.",
      },
    ],
    entrada:
      "Golfo de México, 1971. Tres ingenieros de una compañía petrolera publican un artículo corto sobre algo que llevaban años viendo repetirse delante de sus narices en las subastas de derechos de perforación. Las empresas que ganaban la puja, las que se llevaban el lote, sacaban después, una y otra vez y sin excepción clara, bastante menos beneficio del previsto. No era mala suerte ni mala gestión ni malos geólogos, y la explicación resultó ser puramente estadística. Le pusieron entonces un nombre que ha hecho fortuna desde aquel día en medio mundo: la maldición del ganador.",
    paginas: [
      {
        rotulo: "El promedio",
        texto:
          "Cuando varias empresas pujan por un terreno cuyo petróleo real nadie conoce, cada una hace su propia estimación. Esas estimaciones se reparten alrededor del valor verdadero: unas se quedan cortas y otras se pasan. La subasta la gana, por definición, la que más ofrece, es decir, la que más se ha pasado en su cálculo. El ganador no es el mejor postor: es el más optimista, y por eso paga de más incluso siendo competente. Cuantos más participantes hay, mayor es la exageración del ganador, porque más probable es que alguien haya calculado disparatadamente alto.",
        destacado: { tipo: "frase", frase: "Gana el que más se equivocó al calcular, no el que mejor supo." },
      },
      {
        rotulo: "Pujar menos",
        texto:
          "La solución que propone la teoría es contraria a la intuición: hay que pujar por debajo de la propia estimación, y tanto más por debajo cuantos más rivales haya. Es decir, se corrige a propósito el propio optimismo antes de abrir la boca. El asunto dejó de ser una curiosidad del petróleo cuando los Estados empezaron a subastar licencias de telefonía móvil. Se pagaban miles de millones. Varias empresas europeas ofrecieron a comienzos de siglo cantidades que después no pudieron rentabilizar, y algunas tardaron más de una década en recuperarse.",
        destacado: { tipo: "cifra", cifra: "1971", unidad: "el año en que se describió el efecto" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un concepto que se enseña en cualquier curso de economía y que se aplica a las ofertas de compra de empresas, a los derechos de televisión del fútbol y a los fichajes. Y quedó el reconocimiento académico. En 2020, dos economistas recibieron el premio Nobel por su trabajo sobre subastas. Habían diseñado formatos que reducen este problema, entre ellos el que se usa hoy para repartir las frecuencias de radio y de móvil. La conclusión práctica es incómoda y sencilla: si has ganado una puja muy reñida, conviene revisar los números.",
      },
    ],
  },
];
