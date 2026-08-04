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
    titulo: "Cortó la cuerda con él dentro",
    gancho: "Se subió a la plataforma en una feria, mandó cortar el cable de un hachazo y no se movió.",
    categoria: "Ascensores",
    color: "var(--clay)",
    encargo: "Una plataforma de madera abierta colgada entre dos guías, vista desde abajo.",
    entrada:
      "Nueva York, 1854. Los montacargas existen desde hace siglos y funcionan con una cuerda y una polea, pero nadie se sube a ellos por voluntad propia: si la cuerda se rompe, la plataforma cae a plomo. Un mecánico que trabaja en una fábrica de camas monta un aparato en una feria y anuncia una demostración pública.",
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
    titulo: "La música de ascensor calmaba el miedo",
    gancho: "Al quitar a los ascensoristas, mucha gente no se atrevía a entrar sola. Se probó con música.",
    categoria: "Ascensores",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un altavoz redondo empotrado en el techo de una cabina forrada de madera.",
    entrada:
      "Estados Unidos, 1922. Los ascensores llevan décadas funcionando, pero muchos usuarios siguen sin fiarse: subirse a una caja colgada de un cable y quedarse a solas dentro incomoda. Un general retirado, apasionado de la electricidad, funda una empresa para mandar música por cable a comercios y edificios, y encuentra ahí su primer mercado.",
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
    titulo: "Hay botones que no están conectados a nada",
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
