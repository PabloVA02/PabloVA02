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
    titulo: "El Imperio romano se vendió en una subasta",
    gancho: "La guardia mató al emperador, salió a la muralla y ofreció el trono al mejor postor. Duró sesenta y seis días.",
    categoria: "Subastas",
    color: "var(--clay)",
    encargo: "Una muralla de piedra vista desde abajo, con la luz dura del mediodía.",
    entrada:
      "Roma, marzo del año 193. La guardia imperial, un cuerpo de élite de miles de hombres acuartelado en la ciudad, acaba de asesinar al emperador porque no les ha pagado lo prometido. En lugar de proclamar a otro, sus oficiales hacen algo sin precedentes: anuncian desde la muralla del campamento que el imperio se entrega a quien ofrezca más dinero a la tropa.",
    paginas: [
      {
        rotulo: "La puja",
        texto:
          "Se presentaron dos candidatos, y las crónicas describen la escena con incredulidad: uno pujaba desde fuera de la muralla y otro desde dentro, y los soldados iban y venían llevando las ofertas de uno a otro como si fuera la venta de un caballo. Se pujaba en sestercios por soldado, es decir, en la cantidad que cobraría cada hombre de la guardia. Ganó un senador riquísimo que ofreció el equivalente a varios años de salario por cabeza, una fortuna descomunal multiplicada por miles de hombres. Lo proclamaron allí mismo y lo escoltaron al senado esa misma tarde.",
        destacado: { tipo: "frase", frase: "Los soldados llevaban las ofertas de un postor a otro." },
      },
      {
        rotulo: "El problema",
        texto:
          "El comprador descubrió enseguida lo que su dinero no compraba. La ciudad lo despreció desde el primer día, el senado lo aceptó por miedo y, sobre todo, los ejércitos de las provincias —que eran muchísimos más hombres que la guardia— no reconocieron una compraventa en la que no habían participado. Tres generales se proclamaron emperadores en sus respectivas fronteras y uno de ellos marchó sobre la capital. El comprador ni siquiera pudo pagar del todo lo prometido, porque buena parte de su fortuna estaba en tierras y no en monedas.",
        destacado: { tipo: "cifra", cifra: "66", unidad: "días duró el emperador comprador" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Fue depuesto y ejecutado a los sesenta y seis días, y el general que entró en la ciudad disolvió la guardia entera, expulsó a sus hombres y prohibió que se acercaran a menos de cien millas de la capital. Quedó el episodio como el ejemplo clásico de una subasta mal diseñada: se vendió algo que el vendedor no controlaba y que el comprador no podía hacer cumplir. Y quedó una lección que los manuales repiten con otros ejemplos: en cualquier subasta, lo primero que hay que preguntar es qué se está vendiendo exactamente.",
      },
    ],
  },
  {
    id: "la-vela-que-se-apaga",
    titulo: "Se pujaba hasta que se apagaba una vela",
    gancho: "Nadie sabía cuándo iba a terminar, y esa incertidumbre era justo lo que hacía funcionar el sistema.",
    categoria: "Subastas",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una vela pequeña casi consumida, con la llama a punto de morir, sobre una mesa.",
    entrada:
      "Europa, siglos XVI a XIX. En las subastas de barcos, cargamentos y arrendamientos se usa un método que hoy parece de teatro: se enciende un cabo de vela con un alfiler clavado a poca distancia de la punta, y las pujas se aceptan hasta que la llama llega al alfiler y este cae sobre la bandeja. Quien haya pujado el último se lleva el lote.",
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
          "El resultado es que los compradores pujaban pronto y de verdad, en lugar de esperar. Los diarios de la época describen salas llenas mirando fijamente una vela de unos pocos centímetros mientras las ofertas se aceleran al ver la llama bajar, y algún caso de pujas frenéticas en los últimos instantes seguidas de un silencio total. El método se usó para vender de todo: capturas de barcos apresados, arrendamientos de tierras, contratas de obras públicas y hasta bienes de la corona. En algunos puertos ingleses se subastaron así los cargamentos durante más de dos siglos, siempre con el mismo cabo de vela y el mismo alfiler.",
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
    titulo: "Ganar una subasta puede significar haber pagado de más",
    gancho: "Si todos calculan a ojo lo que vale algo incierto, el que gana suele ser el que más se equivocó.",
    categoria: "Subastas",
    color: "var(--slate)",
    encargo: "Un martillo de subastas apoyado sobre una mesa vacía y pulida.",
    entrada:
      "Golfo de México, 1971. Tres ingenieros de una petrolera publican un artículo sobre algo que llevaban años observando en las subastas de derechos de perforación: las empresas que ganaban las pujas obtenían después, de forma sistemática, beneficios menores de los previstos. No era mala suerte ni mala gestión, y la explicación resultó ser puramente estadística. Le pusieron un nombre que ha hecho fortuna: la maldición del ganador.",
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
          "La solución que propone la teoría es contraria a la intuición: hay que pujar por debajo de la propia estimación, y tanto más por debajo cuantos más rivales haya. Es decir, se corrige a propósito el propio optimismo antes de abrir la boca. El asunto dejó de ser una curiosidad de la industria petrolera cuando los Estados empezaron a subastar licencias de telefonía móvil por miles de millones: varias empresas europeas pagaron a comienzos de siglo cantidades que después no pudieron rentabilizar, y algunas tardaron más de una década en recuperarse del golpe.",
        destacado: { tipo: "cifra", cifra: "1971", unidad: "el año en que se describió el efecto" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un concepto que se enseña en cualquier curso de economía y que se aplica a las ofertas de compra de empresas, a los derechos de televisión del fútbol y a los fichajes. Y quedó el reconocimiento académico: en 2020, dos economistas recibieron el premio Nobel por su trabajo sobre teoría de subastas y por diseñar formatos que reducen este problema, entre ellos el que se usa hoy para repartir el espacio radioeléctrico. La conclusión práctica es incómoda y sencilla: si has ganado una puja muy reñida, conviene revisar los números.",
      },
    ],
  },
];
