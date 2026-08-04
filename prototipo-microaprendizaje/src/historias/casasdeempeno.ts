import type { Short } from "../shorts";

/* ==========================================================================
   Las casas de empeño.

   La operación de crédito más antigua que existe, y la única que no
   pregunta nada al cliente. El tema se estropea si se cuenta con
   condescendencia hacia quien empeña.

   La regla del tema: la clave es que LA GARANTÍA ES EL OBJETO Y NO LA
   PERSONA, y de ahí sale todo lo demás. Los libros de empeño se tratan
   como lo que son: la mejor fuente que existe sobre la vida material de
   la gente corriente.
   ========================================================================== */

export const CASAS_DE_EMPENO: Short[] = [
  {
    id: "las-tres-bolas",
    titulo: "Las tres bolas doradas señalan una casa de empeños",
    gancho: "El símbolo lleva ochocientos años colgado y viene del escudo de una familia de banqueros italianos.",
    categoria: "Dinero",
    color: "var(--ochre)",
    encargo: "Fachada con el letrero de tres bolas doradas colgado sobre la puerta.",
    entrada:
      "Italia y después toda Europa, desde el siglo XIII. Las casas de empeño llevan colgadas tres bolas doradas encima de la puerta en medio mundo, y casi nadie sabe por qué. La explicación más aceptada las hace venir del escudo de una familia de banqueros de Florencia que se dedicaba justamente a eso. Aquel escudo llevaba unas esferas doradas sobre fondo dorado.",
    paginas: [
      {
        rotulo: "Prestar con prenda",
        texto:
          "Una casa de empeño hace la operación de crédito más antigua que existe y también la más simple. El cliente deja un objeto de valor y se lleva dinero, con un plazo para recuperarlo. Si vuelve y paga lo prestado más los intereses, se lleva su objeto de vuelta. Si no vuelve, la casa vende el objeto y ahí se acaba la deuda sin más consecuencias. Eso último es la diferencia clave con un préstamo normal, porque no hay embargo ni juicio. El prestamista no necesita saber nada del cliente, ya que su garantía la tiene en la mano.",
        destacado: { tipo: "frase", frase: "La garantía no es la persona: es el objeto sobre la mesa." },
      },
      {
        rotulo: "Sin usura",
        texto:
          "En el siglo XV aparece en Italia una versión pública de esa misma operación. Se llamaban montes de piedad y los promovían religiosos preocupados por los intereses que cobraban los prestamistas. Prestaban sobre prenda igual, con intereses muy bajos o incluso sin ninguno al principio. El capital salía de donaciones, y la idea era competir con el prestamista privado y hundir su precio. El modelo se extendió por España y por medio continente durante los siglos siguientes. De varios de aquellos montes salieron después algunas de las cajas de ahorros más grandes.",
        destacado: { tipo: "cifra", cifra: "1462", unidad: "el año del primer monte de piedad" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron las casas de empeño funcionando en todas las ciudades, con más clientes en cada crisis. Su negocio sube exactamente cuando baja el crédito bancario, y las estadísticas lo muestran clarísimo. Quedó también un servicio para gente sin nómina ni aval, que no tiene otra puerta a la que llamar. El precio de esa puerta es alto, porque los intereses anuales suelen ser de dos cifras largas. Y quedaron las tres bolas colgadas en fachadas de medio mundo, incluida alguna que ya no presta nada. El símbolo ha sobrevivido a la tienda que lo colgó.",
      },
    ],
  },
  {
    id: "que-se-empena",
    titulo: "Lo que se empeña dice cómo va la economía",
    gancho: "En los buenos tiempos entran relojes y consolas. En los malos entran alianzas y herramientas de trabajo.",
    categoria: "Dinero",
    color: "var(--slate)",
    curioso: true,
    encargo: "Libro de registro de empeños manuscrito con columnas de objetos y fechas.",
    entrada:
      "Todas las ciudades, con registros de empeño conservados desde el siglo XVIII. Los libros de las casas de empeño son una fuente histórica de primer orden, porque anotan cada objeto con su fecha. Leídos en conjunto cuentan cómo iba la vida de la gente corriente mejor que casi ningún otro documento. Lo que entra por la puerta cambia según el momento y según la desesperación.",
    paginas: [
      {
        rotulo: "El lunes",
        texto:
          "En los registros del siglo XIX aparece un ritmo semanal que se repite sin excepción. Los lunes entraban montañas de ropa buena y los sábados se recuperaba casi toda. Una familia empeñaba el traje del domingo el lunes por la mañana para comer esa semana. El sábado, con la paga en la mano, lo recuperaba para poder ponérselo el domingo. Ese ciclo se repetía semana tras semana durante años, con su interés pagado cada vez. El traje no era un lujo, sino la garantía con la que se financiaba la comida.",
        destacado: { tipo: "frase", frase: "El traje del domingo financiaba la comida del martes." },
      },
      {
        rotulo: "El termómetro",
        texto:
          "Ese mismo indicador se sigue usando hoy para leer la situación económica de un barrio. Cuando entran relojes, cámaras y consolas, la gente está apurada y todavía tiene margen. Cuando empiezan a entrar alianzas de boda y herramientas de trabajo, la cosa es distinta. Nadie empeña la herramienta con la que se gana la vida salvo como último recurso. El porcentaje de objetos que no se recuperan es el otro dato que miran los economistas. En tiempos normales se recupera la gran mayoría, y en una crisis esa proporción se hunde.",
        destacado: { tipo: "cifra", cifra: "80", unidad: "% de los objetos se recupera en tiempos normales" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron unos archivos que los historiadores han empezado a explotar en los últimos años. De esos libros salen datos sobre precios, sobre salarios y sobre lo que tenía una casa pobre. Son de las pocas fuentes que describen los objetos de gente que no dejó ningún inventario. Quedó también una obligación legal que existe en casi todos los países y protege al cliente. Si el objeto se vende por más de lo prestado, la diferencia hay que devolvérsela. Comprobar que eso se cumple es la parte que más cuesta vigilar en todo el sector.",
      },
    ],
  },
  {
    id: "empenar-un-cuadro",
    titulo: "También se empeñan cuadros y aviones privados",
    gancho: "El préstamo con prenda no es solo para apuros. Hay casas que prestan millones sobre una obra de arte.",
    categoria: "Dinero",
    color: "var(--plum)",
    curioso: true,
    encargo: "Cámara acorazada con cuadros embalados y relojes en vitrinas numeradas.",
    entrada:
      "Londres y Nueva York, con el sector especializado creciendo desde 2008. La casa de empeño de barrio tiene una hermana mayor que trabaja con obras de arte, coches de colección y relojes carísimos. Los importes van de cien mil a varios millones y los clientes no suelen ser gente arruinada. Casi siempre son empresarios que necesitan dinero muy rápido y sin dar explicaciones.",
    paginas: [
      {
        rotulo: "Rápido y discreto",
        texto:
          "Un banco tarda semanas en conceder un préstamo grande y pide justificar para qué es. Estas casas prestan en dos o tres días sin preguntar nada sobre el destino del dinero. Tampoco miran el historial de crédito, porque su garantía está guardada en una cámara acorazada. Un empresario que necesita cerrar una operación el viernes encuentra ahí una solución que el banco no da. El precio de esa rapidez es un interés muy alto, muchas veces del orden de un tres por ciento mensual. A cambio, el cliente no vende su cuadro y lo recupera cuando el dinero vuelve.",
        destacado: { tipo: "frase", frase: "No miran el historial: la garantía está en la caja fuerte." },
      },
      {
        rotulo: "Tasar bien",
        texto:
          "El riesgo del negocio no está en el cliente, sino en equivocarse tasando el objeto. Estas casas prestan alrededor de la mitad de lo que creen que vale la pieza. Ese margen cubre el riesgo de que el mercado baje y de que la venta tarde. Con un reloj o un coche la tasación es fácil, porque hay precios públicos de referencia. Con una obra de arte es mucho más difícil, y ahí entra además el problema de la autenticidad. Un cuadro falso no vale nada, así que la casa investiga el origen antes de aceptar.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "% del valor es lo que se presta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un sector que creció mucho después de la crisis financiera de 2008. Cuando los bancos endurecieron el crédito, mucha gente con patrimonio se quedó sin liquidez. Tener un cuadro de un millón no sirve de nada si hay que pagar nóminas el martes. Quedó también una discusión sobre si esto es banca en la sombra sin la misma supervisión. Y quedó la misma operación de siempre, exactamente igual que en el siglo XIII. Alguien deja un objeto encima de un mostrador y se lleva dinero, y lo único que cambia son los ceros.",
      },
    ],
  },
];
