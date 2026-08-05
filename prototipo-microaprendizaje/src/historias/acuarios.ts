import type { Short } from "../shorts";

/* ==========================================================================
   Los acuarios.

   Un recipiente cerrado donde hay que mantener vivo un equilibrio
   químico. El tema se estropea si se convierte en manual de acuariofilia
   o en denuncia de los zoos, que ya está en zoos.ts.

   La regla del tema: la idea madre es que UN ACUARIO NO ES AGUA CON
   PECES, sino un ciclo de bacterias que hay que montar antes. Cada short
   parte de ese equilibrio, sea en un salón, en un edificio o en un
   arrecife.
   ========================================================================== */

export const ACUARIOS: Short[] = [
  {
    id: "el-primer-acuario",
    titulo: "La planta que salvó al pez",
    gancho: "Antes había peceras y el agua se pudría en días. La clave fue meter plantas junto a los peces.",
    categoria: "Ciencia",
    color: "var(--slate)",
    encargo: "Acuario victoriano de cristal y hierro con plantas acuáticas y unos pocos peces.",
    entrada:
      "Londres, 1850. Un naturalista publica que un recipiente cerrado con agua puede mantener peces vivos de manera indefinida si lleva también plantas y algo de luz. Hasta entonces cualquier pecera acababa igual, con el agua turbia y los peces muertos en pocos días. La idea nueva era que las plantas y los animales podían mantenerse mutuamente dentro del mismo cristal.",
    paginas: [
      {
        rotulo: "El ciclo",
        texto:
          "Un pez suelta amoniaco por las branquias, y el amoniaco es tóxico para él en cantidades mínimas. En un río eso no importa, porque el agua se renueva sin parar y lo diluye todo. En un recipiente cerrado se acumula, y a las pocas horas el pez se está envenenando. La solución no son las plantas directamente, sino unas bacterias que viven en la grava y en el filtro. Un grupo convierte el amoniaco en nitrito, que sigue siendo tóxico, y otro convierte el nitrito en nitrato. El nitrato ya es poco dañino y es justo lo que las plantas se comen como abono.",
        destacado: { tipo: "frase", frase: "El pez se envenena con lo que él mismo suelta." },
      },
      {
        rotulo: "Montarlo bien",
        texto:
          "Ese ciclo tarda semanas en establecerse, porque las bacterias tienen que multiplicarse primero. Meter peces el primer día en un acuario recién montado es la causa más común de que mueran. El fallo tiene nombre entre los aficionados y se llama el síndrome del acuario nuevo. La manera correcta es dejar el acuario funcionando vacío durante un mes, echando un poco de amoniaco. Así las bacterias tienen comida y colonizan el filtro antes de que llegue ningún animal. Cambiar el filtro entero de golpe destruye esa colonia y devuelve el acuario al día uno.",
        destacado: { tipo: "cifra", cifra: "1850", unidad: "el año del primer acuario equilibrado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una afición enorme y una industria detrás que mueve miles de millones al año. Quedó también una idea que salió del acuario y se aplicó a sitios mucho más grandes. Las depuradoras de agua residual funcionan con exactamente las mismas bacterias y el mismo ciclo. Lo único que cambia es el tamaño del tanque y la cantidad de amoniaco que entra. Y quedó una regla que repiten todas las tiendas y que casi ningún principiante cumple. En un acuario, la prisa es siempre lo que mata, porque las bacterias no se pueden acelerar.",
      },
    ],
  },
  {
    id: "el-cristal-que-no-es-cristal",
    titulo: "El cristal que no es cristal",
    gancho: "Un panel de treinta metros no puede ser de vidrio: se rajaría de golpe. Es acrílico fundido en varias piezas.",
    categoria: "Tecnología",
    color: "var(--clay)",
    encargo: "Panel curvo de acrílico de un acuario gigante con visitantes diminutos delante.",
    entrada:
      "Japón y Estados Unidos, con los grandes acuarios públicos construidos desde 1980. Un tanque de varios millones de litros ejerce sobre su pared una presión enorme, porque el agua pesa una tonelada por metro cúbico. La ventana de un acuario así puede medir treinta metros de ancho y varios de alto. Ningún vidrio aguanta eso a un grosor razonable, y por eso se usa un plástico.",
    paginas: [
      {
        rotulo: "Vidrio o acrílico",
        texto:
          "El vidrio es duro y transparente, y tiene un defecto grave para esta aplicación. Es frágil, así que una grieta pequeña se propaga por toda la pieza en un instante. El acrílico es un plástico que se deforma un poco antes de romperse y frena las grietas. Además pesa la mitad que el vidrio y deja pasar más luz cuando es muy grueso. Un panel de vidrio de sesenta centímetros se ve verdoso, y uno de acrílico sigue siendo transparente. Su desventaja es que se raya con facilidad, y por eso se pule cada cierto tiempo bajo el agua.",
        destacado: { tipo: "frase", frase: "El vidrio se raja de golpe; el acrílico se deforma antes." },
      },
      {
        rotulo: "Pegar los paneles",
        texto:
          "Un panel de treinta metros no se fabrica de una pieza, porque ningún molde tiene ese tamaño. Se hace uniendo varias planchas más pequeñas mediante un proceso que las funde entre sí. Las piezas se prensan con calor durante días hasta que las moléculas de las dos se mezclan. La unión bien hecha es tan fuerte como el material y queda completamente invisible. El panel terminado puede pesar cien toneladas y llega a la obra en un transporte especial. Colocarlo exige grúas enormes y una tolerancia de milímetros en el hueco que lo recibe.",
        destacado: { tipo: "cifra", cifra: "60", unidad: "centímetros de grosor tiene el panel" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un tipo de edificio que atrae a millones de visitantes en muchas ciudades costeras. Quedó también un efecto óptico que sorprende a todo el mundo la primera vez. El agua y el acrílico aumentan el tamaño aparente de los animales alrededor de un tercio. Un tiburón que parece de cuatro metros mide en realidad bastante menos de tres. Y quedó una discusión que acompaña a todos estos sitios desde el día que existen. Los grandes acuarios financian investigación marina y a la vez mantienen animales enormes en un espacio limitado.",
      },
    ],
  },
  {
    id: "el-pez-payaso",
    titulo: "Una película vació los arrecifes",
    gancho: "La historia iba justamente de un pez capturado que quería volver al mar. El efecto en las tiendas fue el contrario.",
    categoria: "Plantas",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Pez payaso entre los tentáculos de una anémona en un arrecife de coral.",
    entrada:
      "Todo el mundo, a partir del estreno de una película de animación en 2003. La historia contaba la huida de un pez payaso capturado para un acuario, y el mensaje era claro. El resultado en las tiendas de acuariofilia fue exactamente el opuesto, porque las ventas de esa especie se multiplicaron en pocos meses. Los biólogos marinos llevan estudiando ese efecto desde entonces.",
    paginas: [
      {
        rotulo: "De dónde salen",
        texto:
          "El problema no fue la demanda en sí, sino de dónde salían aquellos peces. La mayoría de los peces de arrecife que se venden se capturan en el mar y no se crían. Criarlos en cautividad es difícil porque sus larvas son minúsculas y comen cosas muy concretas. Capturarlos es barato, y en algunos sitios se hacía echando cianuro al agua para aturdirlos. Ese método mata el coral de alrededor y buena parte de los peces mueren después. Varias zonas del sudeste asiático perdieron poblaciones enteras en los años siguientes al estreno.",
        destacado: { tipo: "frase", frase: "Casi ningún pez de arrecife se cría: se captura." },
      },
      {
        rotulo: "El pez",
        texto:
          "El pez payaso tiene además una biología muy peculiar que la película pasó completamente por alto. Viven en grupos dentro de una anémona, con una hembra grande dominante y un macho reproductor. Los demás son machos jóvenes que esperan su turno sin reproducirse en ningún momento. Si la hembra muere, el macho reproductor cambia de sexo y ocupa su sitio sin más. El siguiente macho de la fila asciende entonces a reproductor, y el grupo sigue funcionando. Aplicado al argumento de la película, el padre se habría convertido en hembra desde el principio.",
        destacado: { tipo: "cifra", cifra: "2003", unidad: "el año del estreno que disparó las ventas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un fenómeno con nombre entre los conservacionistas, que lo llaman el efecto de la película. Se ha repetido con otras especies, desde lechuzas hasta perros de razas concretas. Un producto cultural que enseña un animal genera demanda del animal, aunque cuente lo contrario. Quedó también una buena noticia, porque el pez payaso sí se consiguió criar en cautividad después. Hoy la mayoría de los que se venden en Europa nacen en instalaciones y no en el mar. Con otras especies de arrecife no se ha conseguido todavía, y esas siguen saliendo del agua.",
      },
    ],
  },
];
