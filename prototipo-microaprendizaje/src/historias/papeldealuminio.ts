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
    titulo: "La cara brillante da igual",
    gancho: "Una brilla y la otra es mate, y no sirven para cosas diferentes. La diferencia viene de cómo se fabrica.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Rollo de papel de aluminio a medio desplegar, con la cara brillante y la mate visibles.",
    fotos: [
      {
        archivo: "Aluminum foil 1.jpg",
        autor: "Una hoja de papel de aluminio doméstico, arrugada y extendida.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Aluminum_foil_1.jpg",
        foco: "50% 50%",
        alt: "Una lámina de aluminio llena de arrugas y pliegues que devuelven la luz en franjas claras y oscuras.",
      },
      {
        archivo: "A sample of aluminium foil on a piece of paper.jpg",
        autor: "Tres bolas de papel de aluminio estrujado, con la cara pulida y la mate mezcladas en cada pliegue.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:A_sample_of_aluminium_foil_on_a_piece_of_paper.jpg",
        foco: "33% 50%",
        alt: "Tres pelotas de aluminio arrugado, muy brillantes, sobre una superficie clara y lisa.",
      },
      {
        archivo: "140531 Forellen auf dem Grill.jpg",
        autor: "Cuatro truchas envueltas en papel de aluminio sobre la parrilla. Fotografía de Ansgar Koreng.",
        licencia: "CC BY-SA 3.0 de",
        fuente: "https://commons.wikimedia.org/wiki/File:140531_Forellen_auf_dem_Grill.jpg",
        foco: "50% 50%",
        alt: "Cuatro paquetes alargados de papel de aluminio puestos en fila sobre las barras de una barbacoa encendida.",
      },
      {
        archivo: "Van Gogh - Stillleben mit Makrelen, Zitronen und Tomaten.jpeg",
        autor: "Bodegón con caballas, limones y tomates, óleo de Vincent van Gogh, 1886.",
        licencia: "Dominio público",
        pdPorEdad: 1890,
        fuente: "https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Stillleben_mit_Makrelen,_Zitronen_und_Tomaten.jpeg",
        foco: "50% 50%",
        alt: "Un bodegón pintado con dos caballas plateadas, limones amarillos y tomates rojos sobre un mantel claro.",
      },
    ],
    entrada:
      "Estados Unidos, 1947. La fábrica que produce papel de aluminio para uso doméstico introduce una mejora en el laminado, y esa mejora sigue explicando hoy algo que la gente se pregunta cada vez que abre un rollo en la cocina. Para dejar el metal tan fino no basta con apretarlo más: hay que pasar dos hojas juntas por el rodillo a la vez, porque una sola se rompería. Las dos caras que tocan el rodillo pulido salen como un espejo, y las dos que se tocan entre sí salen mate. La diferencia de brillo no es una decisión de nadie, sino una consecuencia.",
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
    titulo: "El problema es la punta",
    gancho: "No es que el metal esté prohibido, porque el horno entero es metálico. El problema son los bordes y las puntas.",
    categoria: "Ciencia",
    color: "var(--clay)",
    encargo: "Interior de microondas con la rejilla de la puerta bien visible en primer plano.",
    fotos: [
      {
        archivo: "Lichtenberg figures in gases generated by a sliding spark discharge.jpg",
        autor: "Descarga eléctrica deslizándose por la pared de un recipiente de vidrio, fotografiada en un laboratorio.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ALichtenberg%20figures%20in%20gases%20generated%20by%20a%20sliding%20spark%20discharge.jpg",
        foco: "50% 50%",
        alt: "Ramificaciones eléctricas rosas y violetas corriendo por dentro de una copa de cristal entre dos bolas metálicas.",
      },
      {
        archivo: "Aluminum foil.jpg",
        autor: "Papel de aluminio arrugado: cada arruga es un borde donde la carga se puede concentrar.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AAluminum%20foil.jpg",
        foco: "50% 50%",
        alt: "Lámina de aluminio brillante llena de pliegues y picos, con reflejos duros de luz.",
      },
      {
        archivo: "Husqvarna Cupol microwave oven.jpg",
        autor: "Microondas Cupol, diseñado por Husqvarna en 1960, de los primeros pensados para una cocina de casa.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AHusqvarna%20Cupol%20microwave%20oven.jpg",
        foco: "50% 50%",
        alt: "Horno microondas antiguo de cuerpo redondeado y puerta con ventana, sobre una encimera.",
      },
      {
        archivo: "Nikola Tesla, with his equipment EDIT.jpg",
        autor: "Nikola Tesla en su laboratorio de Colorado Springs, diciembre de 1899, con su generador soltando chispas. La foto es un montaje de doble exposición hecho por el propio fotógrafo.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ANikola%20Tesla%2C%20with%20his%20equipment%20EDIT.jpg",
        foco: "50% 50%",
        alt: "Hombre sentado leyendo en una nave mientras una máquina enorme lanza rayos eléctricos ramificados a su alrededor.",
      },
    ],
    entrada:
      "Cocinas de todo el mundo, con el microondas doméstico extendido desde los años setenta del siglo XX. La advertencia de no meter metal dentro está en todos los manuales y se repite en todas las casas, y a la vez el interior del horno es una caja metálica y la puerta lleva pegada una rejilla de metal a la que nadie hace caso. La contradicción es solo aparente y se deshace en cuanto se mira de cerca lo que pasa ahí dentro: lo que provoca las chispas no es el metal, sino la forma que tenga ese metal.",
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
    titulo: "Reciclar sí compensa",
    gancho: "Fundir una lata usada cuesta una fracción de lo que cuesta sacar el metal de la roca. Es el reciclaje que gana claro.",
    categoria: "Ciencia",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Bala prensada de latas de aluminio aplastadas en una planta de reciclaje.",
    entrada:
      "Todo el mundo, con la industria del reciclado de aluminio consolidada desde los años setenta del siglo XX. Con muchos materiales el reciclaje sale a cuenta a duras penas, y hay que hacer números finos para defenderlo. Con el aluminio la cuenta es tan clara que no admite discusión de ningún tipo. Fabricar aluminio nuevo a partir del mineral consume una cantidad enorme de electricidad, tanta que las fábricas se ponen al lado de las centrales. Fundir una lata usada consume alrededor de una vigésima parte de esa energía. Es la diferencia entre separar el metal del oxígeno y limitarse a derretirlo.",
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
