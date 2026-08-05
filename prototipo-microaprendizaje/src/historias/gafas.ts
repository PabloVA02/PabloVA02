import type { Short } from "../shorts";

/* ==========================================================================
   Gafas.

   Objeto que lleva media humanidad en la cara y del que casi nadie sabe
   nada. El riesgo del tema es la óptica: dioptrías, índices de refracción,
   curvaturas. Se entiende mientras se lee y se olvida al instante.

   La regla del tema: unas gafas se cuentan por QUIÉN SE BENEFICIA. Un
   artesano medieval que no explica su método porque de eso come. Un
   fabricante de ojos de cristal que prueba una cáscara sobre un ojo vivo.
   Un grupo industrial que fabrica la montura, la marca y la óptica donde
   se compra. Detrás de una lente siempre hay un negocio.

   Y el defecto de la vista se explica en lenguaje de calle, sin números.
   ========================================================================== */

export const GAFAS: Short[] = [
  {
    id: "gafas-sin-inventor",
    titulo: "Nadie firmó las gafas",
    gancho: "Un fraile contó en un sermón que existían desde hacía veinte años y que su autor callaba.",
    categoria: "Gafas",
    color: "var(--ochre)",
    encargo: "Unas gafas medievales de dos aros unidos por un remache, sobre un libro abierto.",
    entrada:
      "Italia, 1306. Un fraile predica un sermón en una iglesia de Florencia y menciona de pasada un invento reciente: unos cristales para ver de cerca que, según cuenta, se hicieron por primera vez hace unos veinte años. Añade que ha hablado con el hombre que los ideó y que este se niega a explicar cómo se fabrican.",
    paginas: [
      {
        rotulo: "El secreto",
        texto:
          "Ese sermón es la primera mención fiable que existe, y deja claro por qué no hay ningún nombre: quien fabricaba lentes se guardaba el procedimiento porque de eso vivía. Las primeras gafas eran dos lentes de aumento montadas en aros de madera o de hueso, unidas por un remache, que se sostenían apretando la nariz o se sujetaban con la mano. Solo servían para la vista cansada, ese defecto que aparece con la edad y que impide leer de cerca; para la miopía hubo que esperar dos siglos más, hasta que se supieron tallar lentes cóncavas.",
        destacado: { tipo: "frase", frase: "El que las hacía no explicaba cómo, porque vivía de ello." },
      },
      {
        rotulo: "Quién las usaba",
        texto:
          "El invento llegó justo cuando hacía falta. Europa acababa de llenarse de universidades y de talleres de copistas, y de pronto un monje o un notario podía seguir trabajando quince o veinte años más de lo que su vista le habría permitido. Las gafas se hicieron tan corrientes entre la gente de estudio que empezaron a aparecer en los cuadros como un símbolo: si un pintor quería indicar que un personaje era sabio, le ponía unas colgando de la mano. En Venecia se organizó pronto un gremio con normas sobre la calidad del vidrio.",
        destacado: { tipo: "cifra", cifra: "1306", unidad: "la primera mención escrita conocida" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las patillas que se apoyan en las orejas tardaron cuatrocientos años en aparecer: hasta el siglo XVIII las gafas se sujetaban con cintas atadas alrededor de la cabeza, con pesos colgando por detrás o simplemente pinzando la nariz, que es de donde vienen los quevedos. La montura moderna es, en el fondo, la solución más obvia y la que más tardó en ocurrírsele a alguien. Y el nombre de aquel inventor que no quiso contar su método se perdió para siempre: hay varios candidatos italianos y ninguna prueba que sostenga a ninguno.",
      },
    ],
  },

  {
    id: "primeras-lentillas",
    titulo: "Las lentillas eran de vidrio",
    gancho: "Cubrían el ojo entero, se apoyaban en la parte blanca y aguantabas dos horas con suerte.",
    categoria: "Gafas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una cáscara de vidrio fino y curvo sobre un paño oscuro, muy iluminada.",
    entrada:
      "Alemania, 1888. Un fabricante de ojos de cristal para prótesis colabora con un médico en una idea bastante rara: colocar directamente sobre el ojo una cáscara de vidrio finísimo que corrija la vista. La prueban primero con conejos, después con el propio fabricante y por último con un pequeño grupo de voluntarios pacientes.",
    paginas: [
      {
        rotulo: "La cáscara",
        texto:
          "Aquellas lentes no se parecían en nada a las de hoy. Medían casi dos centímetros de diámetro y cubrían el ojo entero, apoyándose en la parte blanca en lugar de flotar sobre el iris, y se rellenaban con una solución azucarada antes de colocarlas para que no rozaran. Se soplaban a mano una por una. La córnea necesita tomar el oxígeno directamente del aire, y aquel vidrio se lo cortaba por completo, así que el ojo se enturbiaba y empezaba a doler: dos o tres horas seguidas era todo lo que aguantaba una persona con mucha voluntad.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "centímetros de vidrio sobre el ojo" },
      },
      {
        rotulo: "El plástico",
        texto:
          "El salto llegó en los años treinta con el metacrilato, un plástico transparente y ligero que se podía moldear, aunque seguía sin dejar pasar el oxígeno. La lente pequeña, la que se apoya solo sobre la córnea, se inventó casi por accidente en 1948, cuando a un fabricante se le rompió el borde de una pieza y decidió pulir lo que quedaba y probárselo: descubrió que se sujetaba sola por la película de lágrima y que resultaba mucho más cómoda. Las lentes blandas, de un material que absorbe agua y deja respirar al ojo, llegaron en 1971.",
        destacado: { tipo: "frase", frase: "Se le rompió el borde, pulió el resto y se lo probó." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hoy las llevan más de ciento cincuenta millones de personas y la mayoría son desechables, un invento de los años ochenta que resolvió de golpe el problema de la limpieza y buena parte de las infecciones. La idea de fondo, sin embargo, sigue siendo exactamente la de aquel fabricante de ojos de cristal: poner el vidrio encima del ojo en vez de delante de la cara. Y el defecto que más tiempo le ha sobrevivido, la falta de oxígeno, es la razón por la que ningún oculista recomienda dormir con ellas puestas.",
      },
    ],
  },

  {
    id: "gafas-caras",
    titulo: "Cuestan tanto por una sola empresa",
    gancho: "El mismo grupo fabrica las monturas, tiene las marcas, las ópticas y hasta un seguro de la vista.",
    categoria: "Gafas",
    color: "var(--plum)",
    encargo: "Un expositor de ópticas con decenas de monturas colgadas en fila.",
    entrada:
      "Italia, 1961. Un huérfano que empezó a trabajar a los catorce años en una fábrica de moldes monta un taller de piezas para monturas de gafas en un pueblo del norte del país. Sesenta años después, aquel negocio se ha convertido en el grupo que fabrica una parte enorme de las gafas que se venden en el mundo.",
    paginas: [
      {
        rotulo: "La cadena entera",
        texto:
          "La estrategia consistió en quedarse con todos los eslabones, uno detrás de otro. Primero fabricó monturas completas en lugar de piezas sueltas; después compró la maquinaria y las fábricas de lentes; luego firmó licencias con casi todas las grandes marcas de moda, que no fabrican gafas sino que ceden el nombre a cambio de un porcentaje; más tarde compró marcas propias de mucho prestigio y, por último, cadenas de ópticas en varios continentes y hasta una aseguradora de revisiones de la vista. La misma empresa fija así el precio en varios puntos a la vez.",
        destacado: { tipo: "frase", frase: "Fabrica la montura, la marca, la óptica y el seguro." },
      },
      {
        rotulo: "El margen",
        texto:
          "Los reportajes y los pleitos que se han ocupado del asunto coinciden en el orden de magnitud: una montura que sale de fábrica por unas decenas de euros puede acabar en el escaparate por varios cientos, y el nombre grabado en la patilla apenas influye en cómo está hecha, porque muchas salen de las mismas líneas de montaje. En 2018 la empresa se fusionó además con el mayor fabricante de lentes del mundo, un grupo francés con el que ya compartía clientes, y las autoridades de competencia europeas y estadounidenses aprobaron la operación con condiciones bastante suaves.",
        destacado: { tipo: "cifra", cifra: "2018", unidad: "la fusión con el mayor fabricante de lentes" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En los últimos años han aparecido marcas que venden por internet saltándose la cadena y ofreciendo monturas por una fracción del precio, y eso ha empezado a mover el mercado, aunque el grupo sigue siendo gigantesco. Lo interesante del caso es que casi nadie sabe que existe: uno cree estar eligiendo entre veinte marcas distintas cuando en realidad está eligiendo un logotipo. Aquel taller de piezas de un pueblo del norte de Italia acabó decidiendo lo que cuesta ver bien en medio planeta, sin que su nombre aparezca en ninguna patilla.",
      },
    ],
  },
];
