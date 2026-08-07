import type { Short } from "../shorts";

/* ==========================================================================
   Las carreteras.

   Lo que hay debajo de las ruedas y que nadie mira. El tema se estropea si se
   cuenta con kilómetros y presupuestos: hay que contarlo desde el firme, que
   es el problema técnico de verdad.

   La regla del tema: todo empieza por el AGUA. Una carretera no se estropea
   por el peso, se estropea porque el agua se mete debajo y reblandece el
   suelo. Cada short explica una solución a eso, con su coste y su fecha.
   ========================================================================== */

export const CARRETERAS: Short[] = [
  {
    id: "el-firme-que-drena",
    titulo: "La carretera es un drenaje",
    gancho: "El enemigo no es el peso de los carros, es la lluvia. Un ingeniero escocés lo entendió antes que nadie.",
    categoria: "Carreteras",
    color: "var(--slate)",
    encargo: "Un tramo de camino de piedra machacada con una cuneta a un lado.",
    fotos: [
      {
        archivo: "Appian Way.jpg",
        autor: "La Vía Apia a las afueras de Roma, empedrada hace más de dos mil años. Fotografía de Livioandronico2013.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Appian_Way.jpg",
        foco: "50% 55%",
        alt: "Una calzada romana de losas grandes y desgastadas, entre pinos, perdiéndose en línea recta.",
      },
      {
        archivo: "L06 933 Via Appia antica, Originalstraßenbelag.jpg",
        autor: "El firme original de la Vía Apia visto de cerca. Fotografía de Falk2.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:L06_933_Via_Appia_antica,_Originalstra%C3%9Fenbelag.jpg",
        foco: "50% 55%",
        alt: "Losas de piedra encajadas unas contra otras, con las juntas marcadas por el uso.",
      },
      {
        archivo: "Harjanne Oy black Scania dumper with trailer.jpg",
        autor: "Un camión de áridos: la carretera moderna sigue siendo, sobre todo, piedra machacada.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Harjanne_Oy_black_Scania_dumper_with_trailer.jpg",
        foco: "50% 50%",
        alt: "Un camión volquete negro con remolque cargado de grava.",
      },
      {
        archivo: "Wet road surface (Unsplash).jpg",
        autor: "Asfalto mojado. El agua que se ve encima es justo la que no debe quedarse dentro.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Wet_road_surface_(Unsplash).jpg",
        foco: "50% 55%",
        alt: "La superficie de una carretera mojada, con los reflejos alargados de las luces.",
      },
    ],
    entrada:
      "Escocia, 1816. Los caminos europeos son tan malos que un viaje de cien kilómetros puede llevar tres días, y en invierno muchos quedan intransitables. Un ingeniero de caminos que lleva años reparándolos publica entonces un método distinto y mucho más barato que el romano. Toda su idea cabe en una frase: mantener seco el suelo que hay debajo. Lo que rompe un camino no es el peso de los carros, como todo el mundo creía, sino el agua que se queda dentro y lo convierte en barro. Un firme seco aguanta cargas enormes; el mismo firme empapado se deshace con la mitad. De ahí salen tres cosas que tiene cualquier carretera y que casi nadie mira.",
    paginas: [
      {
        rotulo: "Piedra pequeña",
        texto:
          "Hasta entonces se creía que una buena carretera necesitaba una base de piedras grandes, como las calzadas romanas, y eso costaba una fortuna. Aquel ingeniero demostró lo contrario. Lo importante no es la base, sino el terreno natural, que aguanta perfectamente el peso si está seco. Así que propuso echar encima una capa de piedra machacada en trozos pequeños, todos de un tamaño parecido, que se traban entre sí al pasarles ruedas por encima y forman una superficie compacta. Y sobre todo, dar a la carretera una ligera curvatura para que el agua escurra hacia las cunetas.",
        destacado: { tipo: "frase", frase: "El suelo aguanta el peso perfectamente, siempre que esté seco." },
      },
      {
        rotulo: "El polvo",
        texto:
          "El método se extendió por Europa y América en pocas décadas porque era barato y rápido, pero tenía un problema evidente en cuanto llegaron los coches. Las ruedas de hierro de los carros apisonaban la piedra, mientras que los neumáticos de goma, girando deprisa, chupaban el polvo del firme y lo levantaban. Las carreteras se deshacían y los pueblos vivían entre nubes de tierra. La solución llegó hacia 1900 y consistió en rociar la superficie con alquitrán para pegar el polvo. De ahí viene el nombre del asfalto moderno en varios idiomas, que junta el apellido del ingeniero con la palabra alquitrán.",
        destacado: { tipo: "cifra", cifra: "1816", unidad: "el año del firme drenante" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la estructura básica de cualquier carretera actual, que es la misma idea con mejores materiales. Debajo hay capas de árido de distinto tamaño y encima una superficie ligada con betún, y todo el conjunto está pensado para que el agua no se quede quieta en ninguna parte. Quedaron las cunetas, que la gente ve como un adorno del paisaje y son la pieza que evita que la carretera se hunda. Y quedó la comprobación de siempre: los tramos que se rompen antes son casi siempre aquellos donde el drenaje ha dejado de funcionar.",
      },
    ],
  },
  {
    id: "conducir-por-la-derecha",
    titulo: "Conducir por la izquierda",
    gancho: "Tiene que ver con la espada, con los carros de varios caballos y con quién ganó cada guerra.",
    categoria: "Carreteras",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una carretera secundaria con la línea central pintada, vista de frente.",
    entrada:
      "Europa, siglos XVIII y XIX. Antes de que existieran normas de tráfico, cada país circulaba como se había circulado siempre, y las costumbres venían de muy atrás. Hoy un tercio de la población mundial conduce por la izquierda y el resto por la derecha. La división no es casual: puede seguirse en el mapa como se sigue una historia política.",
    paginas: [
      {
        rotulo: "La espada",
        texto:
          "La explicación más antigua tiene que ver con ir armado. Como la mayoría de la gente es diestra, un jinete llevaba la espada en el costado izquierdo y la desenvainaba cruzando el brazo. Por eso le convenía cruzarse con un desconocido teniéndolo a su derecha, con el arma libre. Eso empuja a circular por la izquierda, y así se hizo durante siglos en buena parte de Europa. Se conservan calzadas romanas con marcas de rodadas que apuntan a lo mismo, aunque en aquella época no hubiera ninguna norma escrita ni nadie a quien reclamar si alguien iba por donde no debía.",
        destacado: { tipo: "frase", frase: "El arma iba a la izquierda, así que convenía cruzarse por ese lado." },
      },
      {
        rotulo: "Los carreteros",
        texto:
          "Lo que dio la vuelta a la costumbre fueron los carros grandes de mercancías. En Francia y en América se tiraba de ellos con varias parejas de caballos y sin pescante: el conductor iba montado en el caballo trasero izquierdo, para tener el látigo en la mano derecha. Desde ahí se ve mejor el borde del carro si se circula por la derecha, así que esos países se pasaron a ese lado. Después llegaron la Revolución francesa y las conquistas napoleónicas, que impusieron la derecha en media Europa, y cada imperio exportó su costumbre a sus colonias.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "de cada tres, por la izquierda" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un mapa que se explica solo mirando quién dominó cada zona, con excepciones curiosas. España circuló por la izquierda en muchas ciudades hasta 1924. Suecia cambió de lado de golpe una mañana de 1967, con un plan que había durado cuatro años, y las cifras de accidentes bajaron los primeros meses porque todo el mundo conducía muerto de miedo. Cambiar hoy sale carísimo, porque hay que rehacer señales, salidas de autopista, semáforos y toda la flota de autobuses, que llevan las puertas en un lado concreto. Así que cada país se queda donde está.",
      },
    ],
  },
  {
    id: "el-peaje-y-la-barrera",
    titulo: "Las carreteras se pagaban con barreras",
    gancho: "Compañías privadas arreglaban un tramo y cobraban por pasar. Hubo revueltas para quemar las barreras.",
    categoria: "Carreteras",
    color: "var(--plum)",
    encargo: "Una barrera de madera pintada cruzando un camino, junto a una casilla de piedra.",
    entrada:
      "Inglaterra, siglos XVIII y XIX. El mantenimiento de los caminos es responsabilidad de cada parroquia, que obliga a sus vecinos a trabajar unos días al año en ellos sin cobrar. El sistema funciona mal, porque nadie quiere arreglar un camino por el que solo pasan forasteros. Así que el parlamento autoriza otra fórmula: que compañías privadas se hagan cargo y cobren peaje.",
    paginas: [
      {
        rotulo: "El trato",
        texto:
          "El acuerdo era claro y estaba en cada ley particular. Una compañía se comprometía a reparar y mantener un tramo concreto, y a cambio podía instalar barreras y cobrar una tarifa fijada por ley a cada viajero, según llevara carro, caballo o ganado. La barrera se giraba para dejar pasar cuando se pagaba, y por eso al sistema se le llamó de la barrera giratoria. Llegó a haber más de mil compañías en el país y decenas de miles de kilómetros gestionados así, con casillas de cobro cada pocas millas.",
        destacado: { tipo: "cifra", cifra: "1.000", unidad: "compañías cobrando peaje" },
      },
      {
        rotulo: "Las revueltas",
        texto:
          "El sistema mejoró mucho los caminos y a la vez indignó a quien vivía al lado de una barrera. En zonas rurales de Gales, un campesino podía pagar tres o cuatro veces en el mismo día. Bastaba con llevar cal a sus campos y el ganado al mercado del pueblo de al lado. Entre 1839 y 1843 hubo una revuelta que quemó decenas de barreras. Los hombres iban de noche y disfrazados con ropa de mujer. El gobierno acabó nombrando una comisión que les dio la razón en lo esencial y reordenó las tarifas.",
        destacado: { tipo: "frase", frase: "Quemaban las barreras de noche, disfrazados con ropa de mujer." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El ferrocarril hundió el negocio en pocas décadas y las compañías se disolvieron, dejando las carreteras en manos públicas otra vez. Quedaron las casillas de cobro, muchas convertidas hoy en viviendas y reconocibles por su forma achaflanada, pensada para vigilar el camino en las dos direcciones desde la misma ventana. Y quedó el debate intacto, que reaparece cada vez que se discute un peaje. La pregunta es la misma que en 1839: si paga quien usa la vía, o si la pagamos todos con impuestos aunque no la pisemos nunca.",
      },
    ],
  },
];
