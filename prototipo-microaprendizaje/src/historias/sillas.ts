import type { Short } from "../shorts";

/* ==========================================================================
   Las sillas.

   El mueble en el que pasamos media vida y que durante siglos fue un objeto
   de poder, no de descanso. El tema se estropea si se cuenta como diseño de
   mobiliario, con nombres de arquitectos y estilos.

   La regla del tema: se cuenta QUIÉN SE SENTABA Y QUIÉN NO, y qué le hace la
   silla al cuerpo. Sentarse no es neutro: cambia la columna, la circulación
   y hasta las costumbres de una casa. Con cifras de horas y de altura.
   ========================================================================== */

export const SILLAS: Short[] = [
  {
    id: "sentarse-era-un-privilegio",
    titulo: "La silla era de mandar",
    gancho: "En una casa medieval había una silla y muchos bancos. La silla la ocupaba quien presidía, y de ahí vienen varias palabras.",
    categoria: "Sillas",
    color: "var(--ochre)",
    encargo: "Una silla de madera oscura con respaldo alto en una sala vacía.",
    entrada:
      "Europa, siglos XII a XVI. En una casa acomodada de esa época hay arcones, bancos corridos y taburetes, pero apenas una o dos sillas con respaldo y brazos. Sentarse en una de ellas no es una cuestión de comodidad, sino de rango. El sitio de cada persona en la sala está perfectamente definido por lo que tiene debajo: la silla para quien preside, el banco para los demás y el suelo para el resto. De ahí salen unas cuantas palabras que todavía usamos sin saber de dónde vienen, empezando por la que designa a quien manda en una reunión. Y de ahí sale también la costumbre, que duró siglos, de que en una casa hubiera una sola silla de verdad y todo el mundo supiera de quién era.",
    paginas: [
      {
        rotulo: "El asiento",
        texto:
          "La silla con respaldo alto y brazos era el asiento del señor de la casa, del obispo o del juez, y solía estar elevada sobre una tarima y a veces bajo un dosel de tela. Los demás se sentaban en bancos corridos, en cojines o directamente en el suelo, según la posición que ocuparan en la casa. De aquel uso vienen palabras que seguimos empleando sin pensar. Presidir es ocupar el asiento principal, una cátedra era la silla del maestro y una sede episcopal se llama así por la silla del obispo.",
        destacado: { tipo: "frase", frase: "Presidir es, literalmente, ocupar el asiento de delante." },
      },
      {
        rotulo: "Cuando se abarató",
        texto:
          "El cambio llegó con la fabricación en serie, y sobre todo con una técnica concreta: la madera curvada con vapor, patentada en el siglo XIX, que permitía dar forma a las piezas sin tallarlas. Con ella se fabricó una silla ligera, resistente y montable con unos pocos tornillos, que se enviaba desmontada en cajas y se vendía por millones a cafés de toda Europa. Por primera vez, tener varias sillas iguales dejó de ser un lujo y pasó a ser lo normal en cualquier casa modesta, con un precio equivalente a unos días de jornal.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "millones de aquella silla se vendieron" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el vocabulario del poder, que sigue lleno de asientos: el escaño de un diputado, la presidencia de una empresa, la cátedra de un profesor. Quedó también una costumbre que hoy parece de toda la vida y es bastante reciente: que cada persona de la casa tenga su propia silla, igual a las demás. Y quedó una diferencia cultural enorme que se olvida a menudo. En buena parte de Asia, sentarse en el suelo sobre esteras o cojines siguió siendo lo habitual hasta hace muy poco, con muebles pensados para esa altura.",
      },
    ],
  },
  {
    id: "la-silla-y-la-espalda",
    titulo: "La silla perfecta no existe, y da igual",
    gancho: "Ninguna postura aguanta ocho horas. Lo que hace daño no es cómo te sientas, sino cuánto rato llevas igual.",
    categoria: "Sillas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una silla de oficina con ruedas y respaldo de malla, vista de lado.",
    entrada:
      "Oficinas de todo el mundo, con estudios de ergonomía publicados desde los años cincuenta del siglo XX. La idea popular es que existe una postura correcta para sentarse y que basta con una buena silla para no tener dolores de espalda. Los datos de las últimas décadas apuntan a otra cosa bastante distinta, y bastante más incómoda de aplicar.",
    paginas: [
      {
        rotulo: "El disco",
        texto:
          "Entre las vértebras hay unos discos de cartílago que se alimentan por difusión, es decir, absorbiendo líquido cuando se descomprimen y soltándolo cuando se aprietan. Ese intercambio necesita movimiento, y una postura fija lo interrumpe, se siente uno cómodo o no. Por eso al levantarse después de dos horas quietos aparece esa rigidez tan característica que todo el mundo conoce. Los estudios de laboratorio miden además algo que sorprende: la presión sobre los discos lumbares es mayor sentado que de pie, sobre todo si el tronco se inclina hacia delante para mirar una pantalla.",
        destacado: { tipo: "frase", frase: "El disco se alimenta moviéndose, y sentado no se mueve." },
      },
      {
        rotulo: "Moverse",
        texto:
          "De ahí que la recomendación actual no sea una postura, sino un ritmo: cambiar de posición a menudo y levantarse cada media hora, aunque sea un minuto. Las sillas buenas ayudan justamente a eso, permitiendo balanceo, altura ajustable y un respaldo que acompaña el movimiento, en lugar de obligar a una única postura. Las mesas que se elevan para trabajar de pie funcionan por el mismo motivo. Los estudios que las han evaluado encuentran mejoras cuando se alternan las dos posiciones, y no cuando alguien se empeña en pasar el día entero de pie.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "minutos como máximo en la misma postura" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una industria enorme de sillas ergonómicas, con modelos que cuestan lo que un electrodoméstico grande. Ayudan de verdad, sobre todo si se ajustan bien, pero no hacen milagros. Quedó también una conclusión que aparece en casi todas las revisiones y que no se puede comprar: el mejor asiento es el que se abandona con frecuencia. Y quedó un dato para relativizar cualquier nostalgia, porque los oficios de antes tampoco eran sanos. Quien pasaba doce horas de pie en un taller acababa con otros problemas igual de serios, empezando por las piernas.",
      },
    ],
  },
  {
    id: "el-taburete-de-ordenar",
    titulo: "En muchos oficios se trabajaba de pie a propósito",
    gancho: "Los escritorios altos de los oficinistas antiguos no eran una manía: se creía que sentarse volvía perezoso.",
    categoria: "Sillas",
    color: "var(--plum)",
    encargo: "Un pupitre alto de madera con tapa inclinada y un taburete de tres patas.",
    entrada:
      "Oficinas y talleres europeos, siglos XVIII y XIX. Los escritorios de contabilidad de esa época son altos, con la tapa inclinada, y delante de ellos hay taburetes estrechos y sin respaldo. Los empleados trabajaban de pie o medio apoyados durante jornadas larguísimas, y aquello no era un descuido del mobiliario, sino una decisión deliberada de los patronos.",
    paginas: [
      {
        rotulo: "Estar despierto",
        texto:
          "El argumento que se daba entonces mezclaba a partes iguales la moral y la conveniencia del patrono. Se pensaba que un asiento cómodo invitaba a la pereza y a la charla con el de al lado. Estar de pie, en cambio, mantenía al empleado atento y visible desde cualquier punto de la sala. También había una razón material y bastante sensata. Los libros de contabilidad eran enormes y pesados, y una superficie alta e inclinada permitía manejarlos y escribir con la espalda recta, sin encorvarse sobre una mesa baja durante horas.",
        destacado: { tipo: "frase", frase: "Se creía que el asiento cómodo invitaba a la pereza." },
      },
      {
        rotulo: "El giro",
        texto:
          "Todo aquello cambió con la llegada de la máquina de escribir y de la oficina moderna, a principios del siglo XX. Escribir a máquina exige una altura fija de teclado y una posición estable de las manos. Así apareció la silla con asiento giratorio, altura regulable y respaldo bajo, pensada expresamente para pasar horas seguidas tecleando. Con ella llegó también la vigilancia por otro camino. Se impusieron las filas de mesas iguales en salas abiertas, con el supervisor sentado al fondo, que es la disposición que muchas oficinas conservan hoy.",
        destacado: { tipo: "cifra", cifra: "1904", unidad: "una de las primeras sillas giratorias de oficina" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron aquellos pupitres altos en algunos despachos de notarios y en los museos, y quedó la palabra escritorio aplicada a un mueble que ya no se parece en nada al original. Y quedó una vuelta del asunto que tiene su gracia y que se ve en cualquier oficina moderna. Las mesas elevables que hoy se venden como novedad ergonómica tienen exactamente la altura de aquellos escritorios de contable. Lo único que ha cambiado es el motivo. Entonces se hacía para que nadie se relajara demasiado, y ahora se hace para cuidar la espalda de quien trabaja.",
      },
    ],
  },
];
