import type { Short } from "../shorts";

/* ==========================================================================
   Ascensores.

   Una caja colgada de un cable en la que entramos varias veces al día sin
   pensarlo. El riesgo del tema es la ficha de mecanismos: poleas,
   contrapesos, velocidades.

   La regla del tema: el ascensor va de CONFIANZA, no de ingeniería. El
   aparato existía desde hacía siglos y nadie se subía; lo que hubo que
   inventar fue la manera de creerse que no se cae. De ahí sale todo lo
   demás: el freno, la música, los espejos, los botones que no hacen nada.

   Y cada short acaba en un gesto que el lector repite sin darse cuenta.
   ========================================================================== */

export const ASCENSORES: Short[] = [
  {
    id: "freno-otis",
    titulo: "El ascensor que no se cae",
    gancho: "Se subió a la plataforma en una feria, mandó cortar el cable de un hachazo y no se movió.",
    categoria: "Ascensores",
    color: "var(--clay)",
    encargo: "Una plataforma de madera abierta colgada entre dos guías, vista desde abajo.",
    fotos: [
      {
        archivo: "Elisha OTIS 1854.jpg",
        autor: "La demostración de Elisha Otis en el Crystal Palace de Nueva York, en 1854, según una ilustración posterior.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Elisha_OTIS_1854.jpg",
        foco: "50% 40%",
        alt: "Un hombre de levita, sombrero en mano, sobre una plataforma colgada en alto mientras un ayudante corta la cuerda.",
      },
      {
        archivo: "The top of Lisbon Santa Justa Lift (26463851550).jpg",
        autor: "La parte alta del elevador de Santa Justa, en Lisboa, inaugurado en 1902. Fotografía de Pedro Ribeiro Simões.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:The_top_of_Lisbon_Santa_Justa_Lift_(26463851550).jpg",
        foco: "50% 45%",
        alt: "Una torre de hierro calado con pasarelas y barandillas ornamentadas, recortada contra un cielo azul limpio.",
      },
      {
        archivo: "Manhattan skyline from Upper New York Bay, 20231001 1043 0903.jpg",
        autor: "El sur de Manhattan visto desde la bahía. Fotografía de Jakub Hałun.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Manhattan_skyline_from_Upper_New_York_Bay,_20231001_1043_0903.jpg",
        foco: "50% 50%",
        alt: "Una hilera de rascacielos de cristal apretados junto al agua, con las torres más altas al fondo.",
      },
      {
        archivo: "2016 366 334 Still Life With Elevator Parts (30519760263).jpg",
        autor: "Piezas desmontadas del motor de un ascensor, apiladas en un taller. Fotografía de Edna Winti.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2016_366_334_Still_Life_With_Elevator_Parts_(30519760263).jpg",
        foco: "50% 50%",
        alt: "Un rotor de cobre y varias carcasas metálicas verdes y grises apoyadas sobre una tabla contra un muro.",
      },
    ],
    entrada:
      "Nueva York, 1854. Los montacargas existen desde hace siglos y funcionan con lo más sencillo del mundo, una cuerda y una polea, pero nadie se sube a ellos por voluntad propia: si la cuerda se rompe, la plataforma cae a plomo hasta el fondo. Se usan para sacos, para carbón y para ladrillos, y de vez en cuando para obreros que no tienen otro remedio. Un mecánico que trabaja en una fábrica de camas y que ha resuelto ese problema por su cuenta monta un aparato en la feria mundial de la ciudad y anuncia que va a demostrarlo delante de todo el que quiera mirar.",
    paginas: [
      {
        rotulo: "El hachazo",
        texto:
          "Había construido una plataforma abierta que subía entre dos guías de madera dentadas, con un par de muelles de ballesta a los lados como los de un carro. Se colocó encima con unas cajas, hizo que lo izaran hasta bien alto delante de una multitud y ordenó a un ayudante que cortara la cuerda de un hachazo. La plataforma cayó unos centímetros y se detuvo en seco: al desaparecer la tensión del cable, los muelles se abrían y clavaban unos dientes de hierro en las guías. Se quitó el sombrero y dijo que todo iba bien, señores, todo iba bien.",
        destacado: { tipo: "frase", frase: "Cayó unos centímetros y se paró. Todo va bien, señores." },
      },
      {
        rotulo: "El piso de arriba",
        texto:
          "Aquel invento no fue el ascensor, que ya existía: fue la confianza. Cinco años después se instaló el primero para pasajeros en una tienda de la ciudad, movido por vapor, y subía tan despacio que mucha gente seguía prefiriendo la escalera. La consecuencia importante llegó en la forma de los edificios. Hasta entonces, el piso más caro de una casa era el primero y el más barato el último, porque había que subir andando; con ascensor se invirtió la escala y el ático pasó a ser lo mejor. Sin freno de seguridad no habría rascacielos, porque nadie sube veinte plantas a pie.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "años hasta el primer ascensor de pasajeros" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Todos los ascensores actuales llevan un mecanismo descendiente de aquel: unas mordazas que agarran las guías si la cabina baja más deprisa de lo permitido, además de varios cables independientes, un amortiguador en el fondo del hueco y frenos en el propio motor. Es uno de los medios de transporte más seguros que existen, con muchos menos accidentes por viaje que una escalera mecánica. Y la escena de la feria se sigue repitiendo en los anuncios del sector, porque en siglo y medio nadie ha encontrado mejor manera de explicarlo que cortar la cuerda delante de la gente.",
      },
    ],
  },

  {
    id: "musica-de-ascensor",
    titulo: "La música contra el miedo",
    gancho: "Al quitar a los ascensoristas, mucha gente no se atrevía a entrar sola. Se probó con música.",
    categoria: "Ascensores",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un altavoz redondo empotrado en el techo de una cabina forrada de madera.",
    fotos: [
      {
        archivo: "Paternoster im Neuen Rathaus Leipzig.jpg",
        autor: "Cabinas de un ascensor paternoster en el ayuntamiento nuevo de Leipzig. Fotografía de August Geyler.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Paternoster_im_Neuen_Rathaus_Leipzig.jpg",
        foco: "25% 55%",
        alt: "Interior de madera de una cabina de ascensor abierta, sin puertas, con el hueco a la vista.",
      },
      {
        archivo: "Paternosterlift Oslo.jpg",
        autor: "Ascensor paternoster en funcionamiento en un edificio de Oslo.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Paternosterlift_Oslo.jpg",
        foco: "50% 50%",
        alt: "Cabinas de madera de un ascensor continuo subiendo por su hueco, una detrás de otra.",
      },
      {
        archivo: "Páternoster v budově Městského soudu v Praze, budova ve Slezské ulici 1.jpg",
        autor: "Paternoster del edificio del tribunal municipal de Praga.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:P%C3%A1ternoster_v_budov%C4%9B_M%C4%9Bstsk%C3%A9ho_soudu_v_Praze,_budova_ve_Slezsk%C3%A9_ulici_1.jpg",
        foco: "50% 50%",
        alt: "Hueco de ascensor antiguo con cabinas abiertas de madera y barandillas metálicas.",
      },
      {
        archivo: "Páternoster v budově Městského soudu v Praze, budova ve Slezské ulici – označení kabiny č. 7.jpg",
        autor: "Detalle de una de las cabinas del paternoster del tribunal municipal de Praga.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:P%C3%A1ternoster_v_budov%C4%9B_M%C4%9Bstsk%C3%A9ho_soudu_v_Praze,_budova_ve_Slezsk%C3%A9_ulici_%E2%80%93_ozna%C4%8Den%C3%AD_kabiny_%C4%8D._7.jpg",
        foco: "50% 50%",
        alt: "Cabina de madera de un ascensor continuo vista de cerca, con su suelo y su pasamanos.",
      },
    ],
    entrada:
      "Estados Unidos, 1922. Los ascensores llevan ya décadas funcionando y son fiables, pero muchos usuarios siguen sin fiarse del todo: subirse a una caja colgada de un cable, cerrar la puerta y quedarse a solas dentro incomoda a mucha gente, sobre todo desde que los edificios empiezan a quitar al ascensorista que iba dentro y hacía compañía. Un general retirado, apasionado de la electricidad, funda por esas fechas una empresa para mandar música por cable a comercios y edificios, y encuentra ahí, sin haberlo buscado y casi por accidente, su primer mercado grande y el que le dará nombre para siempre.",
    paginas: [
      {
        rotulo: "El hilo musical",
        texto:
          "La idea consistía en enviar música por los cables eléctricos, sin radio ni discos en el local, y cobrar una cuota mensual por el servicio. Los edificios altos que estaban quitando a los ascensoristas y pasando a los botones automáticos fueron clientes naturales: el hilo musical llenaba el silencio y daba una señal tranquilizadora de que el aparato funcionaba y había alguien al otro lado. La música se elegía con cuidado, sin voces ni sorpresas, con arreglos suaves de canciones conocidas, precisamente para que no llamara la atención de quien estuviera pensando en otra cosa.",
        destacado: { tipo: "frase", frase: "Sin voces ni sorpresas: música que no debía notarse." },
      },
      {
        rotulo: "Bloques de quince",
        texto:
          "En las fábricas y las oficinas la empresa fue más lejos y diseñó un sistema por bloques de quince minutos, con el ritmo cambiando a lo largo de la jornada: más animado a media mañana y a media tarde, cuando la atención decae, y más plano en las horas buenas. Lo llamaron progresión de estímulo y lo vendieron como una forma de sostener el rendimiento. Llegó a sonar en la Casa Blanca y en las primeras cápsulas espaciales tripuladas, donde se emitía para los astronautas. En su mejor momento la escuchaban decenas de millones de personas al día sin haberla elegido.",
        destacado: { tipo: "cifra", cifra: "15", unidad: "minutos por bloque, con el ritmo calculado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El nombre de aquella empresa acabó convertido en insulto: llamar música de ascensor a una canción significa que es sosa y está hecha para no molestar. En los años ochenta el gusto cambió, los locales prefirieron poner música de verdad y el negocio se hundió; la compañía quebró dos veces y hoy vende otra cosa. Lo curioso es que la idea original ha vuelto por otro camino, porque las listas de reproducción para concentrarse, para dormir o para estudiar son exactamente lo mismo, música fabricada para no escucharse, solo que ahora la elegimos nosotros.",
      },
    ],
  },

  {
    id: "botones-placebo",
    titulo: "Botones que no hacen nada",
    gancho: "El de cerrar la puerta del ascensor casi nunca funciona. Y aun así lo pulsamos dos veces.",
    categoria: "Ascensores",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un panel de botones de ascensor gastado, con uno de ellos iluminado.",
    entrada:
      "Estados Unidos, 1990. Una ley de accesibilidad obliga a que las puertas de los ascensores permanezcan abiertas el tiempo suficiente para que entre una persona con movilidad reducida. A partir de ese momento, el botón de cerrar puertas de los ascensores nuevos deja de tener efecto salvo para bomberos y técnicos con una llave especial.",
    paginas: [
      {
        rotulo: "El botón muerto",
        texto:
          "El botón sigue ahí, se ilumina al pulsarlo y no adelanta ni un segundo el cierre. No es exactamente un engaño: funciona de verdad con la llave de emergencia o de mantenimiento, y quitarlo del panel costaría más que dejarlo puesto. Se calcula que en muchas ciudades la mayoría de los ascensores en servicio lo tienen desactivado, y casi nadie se ha dado cuenta, entre otras cosas porque la puerta acaba cerrándose siempre y el cerebro se apunta el mérito. Es el ejemplo más conocido de lo que los ingenieros llaman un control placebo.",
        destacado: { tipo: "frase", frase: "Se ilumina, y no adelanta el cierre ni un segundo." },
      },
      {
        rotulo: "Los otros",
        texto:
          "No es el único. Muchos botones de paso de peatones de las grandes ciudades no hacen nada en hora punta, porque el semáforo va con un ciclo fijo para no romper la coordinación de toda la avenida, y en algunas capitales están desconectados casi todos. Los termostatos de bastantes oficinas tampoco regulan nada y solo mueven una aguja. Los estudios de psicología encuentran siempre lo mismo: la gente espera con más paciencia y se enfada bastante menos cuando cree que ha hecho algo, aunque ese algo no tenga ninguna consecuencia sobre el aparato.",
        destacado: { tipo: "cifra", cifra: "0", unidad: "efecto real, y la espera se hace corta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La sensación de control resulta tan útil que hoy se diseña a propósito: las barras de progreso que avanzan a saltos aunque no midan nada, el sonido de disparo de la cámara de un móvil que no tiene obturador, el clic de un mando a distancia. Los ayuntamientos suelen preferir no aclarar qué botones funcionan, porque quitarlos genera quejas y dejarlos no genera ninguna. Así que ese botón seguirá donde está, iluminándose obedientemente, y nosotros seguiremos pulsándolo dos o tres veces seguidas mientras la puerta se cierra a su ritmo de siempre, sin enterarse de nada.",
      },
    ],
  },
];
