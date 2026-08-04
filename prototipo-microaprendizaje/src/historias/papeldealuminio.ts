import type { Short } from "../shorts";

/* ==========================================================================
   El papel de aluminio.

   Una lámina de metal más fina que un pelo, rodeada de creencias
   domésticas. El tema se estropea si se convierte en consejos de cocina.

   La regla del tema: cada short desmonta una creencia con FÍSICA
   CONCRETA (el rodillo, las puntas, la energía de fundición) y siempre
   dice qué parte de la creencia sí era verdad. Nada de tono de superioridad.
   ========================================================================== */

export const PAPEL_DE_ALUMINIO: Short[] = [
  {
    id: "la-cara-brillante",
    titulo: "El papel de aluminio tiene dos caras distintas",
    gancho: "Una brilla y la otra es mate, y no sirven para cosas diferentes. La diferencia viene de cómo se fabrica.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Rollo de papel de aluminio a medio desplegar, con la cara brillante y la mate visibles.",
    entrada:
      "Estados Unidos, 1947. La fábrica que produce papel de aluminio para uso doméstico introduce una mejora en el laminado que sigue explicando algo que la gente se pregunta desde entonces. Para hacerlo tan fino hay que pasar dos hojas juntas por el rodillo a la vez. Las caras que tocan el rodillo salen pulidas y las que se tocan entre sí salen mate.",
    paginas: [
      {
        rotulo: "Dos hojas",
        texto:
          "Laminar consiste en pasar el metal entre dos rodillos que giran y lo van aplastando. Cada pasada lo deja más fino, y a partir de cierto grosor la hoja se rompe sola. La solución industrial fue doblar el proceso, pasando dos hojas superpuestas para que se sostengan entre sí. Al final del recorrido se separan, y cada una ha tocado el rodillo por un lado nada más. El rodillo está pulido como un espejo, así que esa cara sale brillante y la otra no. El papel acaba midiendo unas dos centésimas de milímetro, más fino que un pelo humano.",
        destacado: { tipo: "frase", frase: "Se laminan dos hojas juntas para que no se rompan." },
      },
      {
        rotulo: "Da igual",
        texto:
          "La creencia más extendida es que la cara brillante refleja el calor y hay que usarla mirando a la comida. Los propios fabricantes lo desmienten, porque la diferencia de reflexión entre las dos caras es despreciable. En un horno el calor llega sobre todo por conducción y por convección, no por reflejo. La única excepción real es el papel con recubrimiento antiadherente, que sí tiene un lado marcado. En ese caso viene indicado en la caja, y hacerlo al revés significa que la comida se pega. Para todo lo demás, la cara que quede arriba es exactamente indiferente.",
        destacado: { tipo: "cifra", cifra: "1947", unidad: "el año del laminado doble en casa" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una duda doméstica que se repite en todas las cocinas del mundo y que tiene una respuesta aburrida. Quedó también un uso que sí depende de la cara, aunque no del brillo, sino del contacto. El aluminio reacciona con los alimentos muy ácidos o muy salados y se pica, dejando pequeños agujeros. Por eso no conviene envolver tomate, limón o vinagre durante días, y sí conviene para casi todo lo demás. Y quedó una explicación que sirve para muchas creencias domésticas, porque casi siempre nacen de observar bien y explicar mal.",
      },
    ],
  },
  {
    id: "el-aluminio-en-el-microondas",
    titulo: "El aluminio en el microondas suelta chispas",
    gancho: "No es que el metal esté prohibido, porque el horno entero es metálico. El problema son los bordes y las puntas.",
    categoria: "Ciencia",
    color: "var(--clay)",
    encargo: "Interior de microondas con la rejilla de la puerta bien visible en primer plano.",
    entrada:
      "Cocinas de todo el mundo, con el microondas doméstico extendido desde los años setenta del siglo XX. La advertencia de no meter metal está en todos los manuales, y a la vez el interior del horno es una caja metálica y la puerta lleva una rejilla de metal. La contradicción es solo aparente. Lo que provoca las chispas no es el metal, sino su forma.",
    paginas: [
      {
        rotulo: "Las puntas",
        texto:
          "Un microondas llena su interior de ondas de radio que hacen vibrar las moléculas de agua. Esas ondas también empujan los electrones de cualquier metal que haya dentro, de un lado a otro. En una superficie lisa y gruesa esa corriente se reparte y no pasa nada digno de mención. En una punta o en un borde arrugado, la carga se concentra en muy poco sitio. Cuando la concentración es suficiente, el aire de al lado se ioniza y salta una chispa. Por eso un papel arrugado chispea y una bandeja lisa de aluminio no suele dar problemas.",
        destacado: { tipo: "frase", frase: "La carga se concentra en la punta y salta al aire." },
      },
      {
        rotulo: "La rejilla",
        texto:
          "La rejilla de agujeros de la puerta es la mejor prueba de que el metal no es el enemigo. Esa rejilla existe justamente para que las microondas no salgan, y funciona por el tamaño de los agujeros. Una onda solo atraviesa un agujero si este es más grande que su propia longitud. Las microondas del horno miden unos doce centímetros, así que unos agujeros de milímetros las bloquean. La luz visible tiene una longitud muchísimo menor, y por eso pasa sin problema y se ve dentro. La misma rejilla que deja mirar impide que la radiación salga a la cocina.",
        destacado: { tipo: "cifra", cifra: "12", unidad: "centímetros mide la onda del microondas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una advertencia sensata que casi nadie sabe explicar bien y que conviene seguir de todas formas. Una chispa dentro de un microondas puede prender el papel de cocina o quemar la pintura del interior. Si esa pintura se estropea, el metal de debajo se oxida y el horno deja de ser estanco. Quedó también la explicación de por qué las bandejas de comida preparada sí llevan a veces una lámina de aluminio. Están diseñadas con bordes redondeados y una altura calculada, y el fabricante ha comprobado que no chispean nunca.",
      },
    ],
  },
  {
    id: "reciclar-aluminio-si-compensa",
    titulo: "Reciclar aluminio ahorra el noventa por ciento",
    gancho: "Fundir una lata usada cuesta una fracción de lo que cuesta sacar el metal de la roca. Es el reciclaje que gana claro.",
    categoria: "Ciencia",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Bala prensada de latas de aluminio aplastadas en una planta de reciclaje.",
    entrada:
      "Todo el mundo, con la industria del reciclado de aluminio consolidada desde los años setenta del siglo XX. Con muchos materiales el reciclaje sale a cuenta a duras penas, y con el aluminio la cuenta no admite discusión. Fabricar aluminio nuevo a partir de mineral consume una cantidad enorme de electricidad. Fundir una lata usada consume alrededor de una vigésima parte de esa energía.",
    paginas: [
      {
        rotulo: "De la roca",
        texto:
          "El aluminio es el metal más abundante de la corteza terrestre y no aparece nunca puro. Está siempre unido al oxígeno con una fuerza enorme, y separarlos es lo que cuesta el dinero. El único método que funciona consiste en fundir el mineral y hacer pasar por él una corriente brutal. Una fábrica de aluminio consume tanta electricidad como una ciudad pequeña, y funciona sin parar nunca. Por eso esas fábricas se construyen donde hay energía barata, junto a presas o a centrales grandes. Se dice a veces que el aluminio es electricidad solidificada, y la frase no exagera mucho.",
        destacado: { tipo: "frase", frase: "El aluminio es, en la práctica, electricidad solidificada." },
      },
      {
        rotulo: "Fundir de nuevo",
        texto:
          "Reciclarlo consiste simplemente en fundirlo, porque el metal ya está separado del oxígeno. El aluminio funde a menos de setecientos grados, que es poco comparado con el hierro. Además no se degrada al reciclarse, así que una lata puede volver a ser lata indefinidamente. Eso lo distingue del papel y de casi todos los plásticos, que pierden calidad en cada vuelta. Una lata depositada en el contenedor puede estar de nuevo en la estantería en menos de dos meses. Por eso las plantas de residuos lo separan con un imán giratorio que lo empuja en vez de atraerlo.",
        destacado: { tipo: "cifra", cifra: "95", unidad: "% de energía se ahorra al reciclarlo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el material más reciclado del mundo en proporción, con tasas que superan el setenta por ciento en Europa. Quedó también un dato que sorprende, porque buena parte del aluminio fabricado desde 1886 sigue en circulación. El metal de una ventana de los años sesenta puede estar hoy dentro de una lata o de un motor. Y quedó una excepción incómoda para la regla, porque el papel de aluminio doméstico se recicla mucho peor. Va sucio de comida y es tan fino que se quema en el horno de fundición antes de fundirse.",
      },
    ],
  },
];
