import type { Short } from "../shorts";

/* ==========================================================================
   Hielo.

   Un tema entero sobre agua congelada parece poca cosa y es justo al revés:
   el hielo se comportó durante siglos de una manera que la física no sabía
   explicar, y encima fue una mercancía global antes de que existiera el frío
   artificial.

   La regla del tema: se cuenta lo que el hielo GUARDA y lo que el hielo HACE.
   Guarda aire de hace ochocientos mil años; hace que un patín deslice por un
   motivo que se explicaba mal en todos los libros de texto. Nada de paisajes
   polares y adjetivos: objetos, mediciones y una pregunta sin respuesta hasta
   una fecha concreta.

   Y se cuenta el negocio. Antes de la nevera, alguien se hizo rico serrando
   estanques helados y mandándolos en barco al trópico.
   ========================================================================== */

export const HIELO: Short[] = [
  {
    id: "comercio-hielo",
    titulo: "Hielo de Boston en la India",
    gancho: "Lo serraban de un estanque helado y llegaba a Calcuta cuatro meses después.",
    categoria: "Hielo",
    color: "var(--slate)",
    encargo: "Bloques de hielo cortados sobre un lago helado, con sierras y ganchos apoyados.",
    entrada:
      "En 1806, un joven de Boston llamado Frederic Tudor cargó un barco con bloques de hielo cortados del estanque helado de la finca familiar y lo mandó a la isla caribeña de Martinica. Todo el mundo lo tomó por loco, y el primer viaje fue en efecto un desastre económico. Tardó casi treinta años en convertir aquella idea absurda en un negocio global.",
    paginas: [
      {
        rotulo: "El serrín",
        texto:
          "El problema no era congelar nada —eso lo hacía el invierno gratis— sino que el hielo llegara. Tudor fue resolviendo pérdidas una a una: construyó almacenes de doble pared, descubrió que el serrín de aserradero, un residuo que no valía nada, era un aislante excelente, y aprendió que un bloque grande se derrite proporcionalmente menos que muchos pequeños. En 1825, un socio suyo inventó un arado de cuchillas tirado por caballos que rayaba el estanque en cuadrícula y permitía sacar bloques idénticos, de modo que se apilaban sin dejar huecos por los que entrara el aire caliente.",
        destacado: {
          tipo: "frase",
          frase: "El invierno era gratis. Lo caro era que llegara entero.",
        },
      },
      {
        rotulo: "Calcuta",
        texto:
          "En <strong>1833</strong> hizo la travesía que parecía imposible: unas ciento ochenta toneladas de hielo rumbo a Calcuta, doblando el cabo de Buena Esperanza, cuatro meses de viaje cruzando dos veces el ecuador. Llegaron alrededor de cien toneladas, y aquello bastó para abrir un comercio que duró décadas y que los residentes británicos recibieron como un milagro; le levantaron un almacén propio en el puerto. Tudor, que había estado en la cárcel por deudas, murió millonario. En su momento de mayor apogeo, el negocio del hielo natural movía cientos de miles de toneladas al año.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "meses de barco hasta la India" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El negocio creó la costumbre antes que la máquina: cuando llegaron los sistemas de refrigeración artificial, a finales del XIX, ya había ciudades enteras acostumbradas a beber frío, a guardar comida en una fresquera y a tomar helado, y existía toda una red de repartidores. Esa red se reconvirtió sin dificultad. Quedó también la palabra: en inglés, la nevera doméstica se siguió llamando <em>icebox</em> mucho después de que dentro ya no hubiera hielo, y en varios idiomas el aparato conserva todavía hoy, en su nombre corriente, el recuerdo del bloque de hielo que dejó de llevar dentro hace un siglo.",
      },
    ],
  },

  {
    id: "nucleos-hielo",
    titulo: "Aire de hace ochocientos mil años",
    gancho: "Burbujas atrapadas que se pueden abrir y medir: la atmósfera de entonces, entera.",
    categoria: "Hielo",
    color: "var(--sage)",
    curioso: true,
    encargo: "Un cilindro de hielo extraído de un sondeo, translúcido, sobre bandeja metálica.",
    entrada:
      "Cuando nieva sobre la Antártida, entre los copos queda aire atrapado. La nieve siguiente aprieta a la anterior, y capa sobre capa, milenio sobre milenio, ese aire acaba encerrado en burbujas dentro del hielo profundo. Perforar y sacar un cilindro de ese hielo es traer a la superficie muestras de atmósfera antigua, sin reconstrucciones ni modelos: el aire de verdad.",
    paginas: [
      {
        rotulo: "El sondeo",
        texto:
          "Un proyecto europeo perforó en Domo C, en la meseta antártica, hasta más de tres mil doscientos metros de profundidad, y el hielo del fondo tiene unos <strong>800.000</strong> años. Las capas se cuentan casi como los anillos de un árbol, porque la nieve de verano y la de invierno tienen texturas distintas; más abajo, donde el peso las aplasta, se recurre a marcadores químicos y a modelos de flujo. Cada tramo se corta, se cataloga y se guarda a temperaturas polares: hay almacenes con kilómetros lineales de hielo esperando análisis.",
        destacado: { tipo: "cifra", cifra: "800.000", unidad: "años en un solo sondeo" },
      },
      {
        rotulo: "Lo que se lee",
        texto:
          "Se abren las burbujas al vacío y se mide qué había en aquel aire. También se analiza el propio hielo: la proporción de isótopos del oxígeno indica la temperatura a la que se formó la nieve, y las cenizas y el ácido sulfúrico de una capa concreta señalan erupciones volcánicas que se pueden emparejar con las conocidas por otras fuentes. De esos datos salen las curvas de temperatura y de dióxido de carbono que sostienen buena parte de lo que sabemos sobre las glaciaciones, con sus ciclos de decenas de miles de años.",
        destacado: {
          tipo: "frase",
          frase: "No es un modelo del aire antiguo. Es el aire antiguo.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Hay proyectos en marcha buscando hielo aún más viejo, de más de un millón de años, para entender por qué hace cerca de un millón el ritmo de las glaciaciones cambió de golpe. El material, mientras tanto, se degrada: cada campaña de perforación es carísima, el hielo hay que mantenerlo congelado para siempre y hay archivos que han perdido tramos por averías eléctricas. Se ha creado una especie de biblioteca del hielo en los Alpes, con muestras de glaciares que probablemente hayan desaparecido antes de que a nadie le dé tiempo a estudiarlas.",
      },
    ],
  },

  {
    id: "hielo-resbala",
    titulo: "Por qué resbala se explicaba mal",
    gancho: "La versión del peso que lo derrite no cuadra con los números. Faraday acertó antes.",
    categoria: "Hielo",
    color: "var(--plum)",
    encargo: "La cuchilla de un patín sobre hielo rayado, primer plano rasante.",
    entrada:
      "Casi todos los libros de texto del siglo XX contaban lo mismo: el hielo resbala porque el peso del patinador aumenta la presión bajo la cuchilla, y la presión hace que el hielo se derrita y forme una película de agua. Es una explicación elegante, usa un fenómeno físico real y lleva décadas repitiéndose. El problema aparece en cuanto se hacen las cuentas.",
    paginas: [
      {
        rotulo: "Los números",
        texto:
          "La presión sí baja el punto de fusión del hielo, pero muy poco: aun concentrando todo el peso de una persona en el filo estrechísimo de un patín, el descenso es de una fracción de grado. Con eso no se explica que se pueda patinar a veinte bajo cero, ni que resbale igual un zapato de suela ancha, que apenas aplica presión, ni que resbale una moneda apoyada encima. Si la presión fuera la causa, a temperaturas polares el hielo tendría que comportarse como el asfalto, y no lo hace.",
        destacado: {
          tipo: "frase",
          frase: "Si fuera el peso, a veinte bajo cero no se podría patinar. Se puede.",
        },
      },
      {
        rotulo: "Faraday",
        texto:
          "La respuesta la había apuntado Michael Faraday hacia <strong>1859</strong>, mucho antes de que existiera la explicación de la presión, y se le hizo poco caso. Faraday observó que dos trozos de hielo puestos en contacto se sueldan solos, y dedujo que la superficie del hielo no es hielo del todo: hay encima una capa desordenada, con las moléculas más sueltas, que se comporta como un líquido. Las técnicas modernas de superficie le han dado la razón: esa capa cuasilíquida existe muy por debajo de cero grados y se va engrosando conforme sube la temperatura.",
        destacado: { tipo: "cifra", cifra: "1859", unidad: "Faraday describió la capa resbaladiza" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hoy se acepta que deslizar sobre hielo combina esa capa ya presente con el calor que genera el propio rozamiento al moverse, que la engorda todavía más. La presión aporta algo, pero es el factor menos importante de los tres. Queda una consecuencia práctica que se comprueba sola: el hielo muy frío resbala menos, porque la capa es más fina, y por eso las pistas de patinaje se mantienen a temperaturas concretas según el uso. Para hockey se busca hielo más duro y frío; para patinaje artístico, algo más templado y blando.",
      },
    ],
  },
];
