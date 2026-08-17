import type { Short } from "../shorts";

/* ==========================================================================
   El algodón.

   La fibra que vestía al mundo y que está detrás de la primera industria
   moderna. El tema se estropea si se cuenta como historia de la moda: el
   algodón es una historia de máquinas, de trabajo forzado y de agua.

   La regla del tema: se cuenta siempre QUIÉN HACE EL TRABAJO PESADO. Cada
   avance técnico en el algodón desplazó el esfuerzo a otro sitio —de la
   hilandera a la máquina, de la máquina al campo, del campo al río— y ese
   desplazamiento es la historia. Nada de tejidos bonitos sin decir el precio.
   ========================================================================== */

export const ALGODON: Short[] = [
  {
    id: "la-maquina-que-empeoro-todo",
    titulo: "La máquina trajo esclavos",
    gancho: "Separaba la fibra de la semilla cincuenta veces más rápido. El resultado fue mucha más gente esclavizada, no menos.",
    categoria: "Algodón",
    color: "var(--slate)",
    encargo: "Un cajón de madera con rodillo de púas metálicas y fibra de algodón alrededor.",
    fotos: [
      {
        archivo: "Cotton harvester at sunset with dark orange sky in Batesville, Texas cotton field.jpg",
        autor: "Una cosechadora de algodón al atardecer en un campo de Batesville, Texas.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Cotton_harvester_at_sunset_with_dark_orange_sky_in_Batesville,_Texas_cotton_field.jpg",
        foco: "50% 42%",
        alt: "La silueta negra de una cosechadora recortada contra un sol enorme y un cielo rojo, sobre un campo de algodón.",
      },
      {
        archivo: "Cotton gin EWM 2007.jpg",
        autor: "Una desmotadora de algodón conservada en el museo Eli Whitney, con el cilindro de ganchos, el cepillo y la fibra ya separada. Fotografía de Tom Murphy VII.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Cotton_gin_EWM_2007.jpg",
        foco: "50% 50%",
        alt: "El interior de un cajón de madera con un cilindro dentado, un cepillo giratorio, un volante de hierro y copos de algodón por el fondo.",
      },
      {
        archivo: "Cotton plant, Ware County, GA, US.jpg",
        autor: "Una mata de algodón con las cápsulas abiertas, en el condado de Ware, Georgia. Fotografía de Jud McCranie.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cotton_plant,_Ware_County,_GA,_US.jpg",
        foco: "50% 50%",
        alt: "Una planta de algodón con hojas verdes y varias cápsulas secas reventadas dejando salir la fibra blanca.",
      },
      {
        archivo: "Coosa Valley, Alabama. Warehousing cotton (Talladega) - NARA - 522571.jpg",
        autor: "Almacén de balas de algodón en Talladega, Alabama, en mayo de 1941. Fotografía de Irving Rusinow.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Coosa_Valley,_Alabama._Warehousing_cotton_(Talladega)_-_NARA_-_522571.jpg",
        foco: "50% 50%",
        alt: "Pilas de balas de algodón envueltas en arpillera dentro de una nave de madera en penumbra.",
      },
    ],
    entrada:
      "Estados Unidos, 1793. El algodón que crece bien en el sur del país tiene unas semillas verdes fuertemente pegadas a la fibra, y separarlas a mano es de una lentitud desesperante: una persona sentada un día entero limpia menos de medio kilo. Ese cuello de botella mantiene el cultivo a una escala pequeña, casi doméstica, porque no compensa plantar más de lo que se puede limpiar después. Un joven mecánico que está de paso por una plantación construye en pocas semanas un aparato de manivela que lo cambia todo, y lo cambia en la dirección contraria a la que cualquiera habría supuesto.",
    paginas: [
      {
        rotulo: "El peine",
        texto:
          "El aparato es de una simplicidad casi ofensiva. Dentro de un cajón gira un cilindro erizado de ganchos de alambre, que atraviesan una rejilla y arrastran la fibra hacia un lado. Las semillas, demasiado gordas para pasar entre los barrotes, se quedan al otro. Un cepillo giratorio recoge la fibra del alambre para que no se atasque. Con manivela, una persona limpiaba entonces unos veinticinco kilos al día, cincuenta veces más que a mano; con tracción animal o de agua, mucho más. Copiarlo era tan fácil que la patente resultó imposible de defender y su inventor apenas ganó dinero.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "veces más rápido que a mano" },
      },
      {
        rotulo: "El efecto contrario",
        texto:
          "Lo esperable era que una máquina que ahorra trabajo redujera la necesidad de mano de obra. Pasó justo lo contrario. Al desaparecer el atasco de la limpieza, se volvió rentable plantar algodón en todas partes. Y lo que hacía falta entonces a manos llenas era sembrar, cuidar y sobre todo recoger, tareas que ninguna máquina sabía hacer. La superficie cultivada se disparó, el sur se llenó de plantaciones y el número de personas esclavizadas en aquellos estados pasó de unas setecientas mil en 1790 a casi cuatro millones en 1860.",
        destacado: { tipo: "frase", frase: "El cuello de botella se movió al campo, y allí no había máquinas." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un ejemplo que se estudia hoy en economía y en historia de la tecnología. Una máquina que ahorra trabajo en un punto de la cadena puede disparar la demanda de trabajo en el siguiente, y el resultado final depende de qué parte se automatiza. Aquel aparato hizo del algodón la primera exportación del país y alimentó las fábricas textiles del otro lado del Atlántico. Y quedó la parte incómoda de la historia: el invento que se enseñaba como ejemplo de ingenio americano fue también el que ató la esclavitud a la economía durante otras dos generaciones.",
      },
    ],
  },
  {
    id: "la-muselina-que-se-perdio",
    titulo: "La tela que parecía niebla",
    gancho: "Se hilaba de madrugada, junto al río y con la humedad justa, porque el hilo se rompía con el aire seco.",
    categoria: "Algodón",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una tela blanquísima y translúcida colgando, con la luz pasando a través.",
    fotos: [
      {
        archivo: "Moslin 1.jpg",
        autor: "Un sari de muselina entero pasado por un anillo de dedo, en un taller de Bengala Occidental.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMoslin%201.jpg",
        foco: "50% 50%",
        alt: "Tela blanquísima y finísima recogida y atravesada por un anillo pequeño, sobre fondo azul oscuro.",
      },
      {
        archivo: "Moslin 5.jpg",
        autor: "Rueca especial con la que se hila el hilo finísimo de la muselina.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMoslin%205.jpg",
        foco: "50% 50%",
        alt: "Rueca de madera pequeña con una rueda de radios finos y un huso, apoyada en el suelo.",
      },
      {
        archivo: "Quarry Bank Mill Styal.jpg",
        autor: "La fábrica textil de Quarry Bank, en Cheshire, una de las que hilaron algodón a máquina desde 1784.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AQuarry%20Bank%20Mill%20Styal.jpg",
        foco: "50% 50%",
        alt: "Fábrica de ladrillo de varias plantas junto a un río, con hileras de ventanas iguales.",
      },
      {
        archivo: "Moslin 8.jpg",
        autor: "Sari de muselina a medio tejer en el telar, con los dibujos entrando hilo a hilo.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMoslin%208.jpg",
        foco: "50% 50%",
        alt: "Tela translúcida sobre un telar, con motivos rosas y grises y los hilos de la urdimbre tensados detrás.",
      },
    ],
    entrada:
      "Bengala, siglos XVII y XVIII. En la llanura de un gran río se teje el tejido más fino que se ha hecho nunca con algodón. Es una muselina tan ligera que una pieza de varios metros cabe en una caja de cerillas y pasa entera por un anillo de dedo, y tan translúcida que en las cortes europeas se llegó a discutir si era decente ponérsela. Se exportaba a precios altísimos y era el producto más caro que salía de la región. En el siglo XIX desapareció por completo, con la variedad de algodón, con los telares y con quien sabía hacerla.",
    paginas: [
      {
        rotulo: "El hilo",
        texto:
          "Todo dependía de una variedad de algodón que solo crecía bien en las orillas de aquel río, con una fibra especialmente fina y corta. Hilarla exigía una habilidad extraordinaria y unas condiciones muy concretas. Se trabajaba de madrugada, o directamente sobre el agua, en barcas: con el aire seco del día el hilo se quebraba, y solo con mucha humedad aguantaba. Las mejores hilanderas eran mujeres jóvenes con la vista muy fina, y se decía que a partir de cierta edad ya no se podía hilar la calidad más alta.",
        destacado: { tipo: "frase", frase: "Se hilaba sobre el agua, porque con aire seco el hilo se rompía." },
      },
      {
        rotulo: "El desmontaje",
        texto:
          "El comercio británico primero compró aquella tela y luego compitió con ella. Con las hiladoras mecánicas de las fábricas del norte de Inglaterra se produjo muselina barata en cantidades industriales, y con aranceles altos se le cerró el mercado europeo a la de Bengala. La compañía que administraba la región presionó además a los tejedores con contratos e impuestos. En unas décadas el oficio se hundió: los telares se abandonaron, la variedad de algodón dejó de cultivarse y el conocimiento, que se transmitía de madre a hija sin escribirse, se perdió.",
        destacado: { tipo: "cifra", cifra: "XIX", unidad: "el siglo en que desapareció" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron piezas en museos, tan finas que cuesta creer que se hicieran a mano. Y quedó un intento de recuperación. Desde 2014, un equipo de botánicos y tejedores busca la planta original a partir de muestras de herbario y de análisis genético. Han encontrado parientes silvestres a orillas del mismo río y han vuelto a tejer piezas con un hilo parecido, aunque todavía no igual. El proyecto ha necesitado años de trabajo para recomponer algo que se hacía de madrugada, junto al agua, y que nadie se molestó en escribir.",
      },
    ],
  },
  {
    id: "la-camiseta-y-el-agua",
    titulo: "Dos mil litros de agua",
    gancho: "No es lo que gastas lavándola: es lo que bebió la planta antes de convertirse en tela.",
    categoria: "Algodón",
    color: "var(--plum)",
    encargo: "Un campo de algodón con las cápsulas blancas abiertas bajo un sol duro.",
    entrada:
      "El algodón se cultiva desde hace más de cinco mil años y hoy ocupa cerca del dos por ciento de toda la tierra de labranza del planeta, que no es mucho. Del agua de riego, en cambio, se lleva una parte muchísimo mayor, y ahí está lo raro del asunto. La razón está en la planta y no en la fábrica: es un arbusto de zonas cálidas que necesita agua constante durante meses seguidos, y casi todo el algodón del mundo se cultiva precisamente en sitios donde no llueve lo suficiente. Toda esa agua hay que sacarla de algún sitio, y ese sitio se nota.",
    paginas: [
      {
        rotulo: "La cuenta",
        texto:
          "Las estimaciones más citadas calculan entre dos mil y dos mil setecientos litros de agua por cada camiseta de algodón de talla media, contando todo el proceso. La mayor parte, más del noventa por ciento, se va en el campo: lo que bebe la planta y lo que se evapora del riego. El resto se reparte entre el desmotado, el hilado, el teñido y los acabados, que también consumen mucha agua y la devuelven sucia. Lavarla durante toda su vida útil suma bastante menos que producirla, y eso descoloca a casi todo el mundo, porque lo único que vemos es el agua de la lavadora.",
        destacado: { tipo: "cifra", cifra: "2.000", unidad: "litros por camiseta, sobre todo en el campo" },
      },
      {
        rotulo: "El riego",
        texto:
          "El problema no es el consumo en sí, sino de dónde sale. Buena parte del algodón mundial se riega desviando ríos o bombeando acuíferos en regiones secas, y por eso este cultivo aparece detrás de varios de los casos de agotamiento hídrico más graves del planeta. El riego por inundación, todavía habitual, pierde en evaporación una fracción enorme del agua antes de que llegue a la raíz. El riego por goteo reduce mucho ese desperdicio, pero cuesta dinero por adelantado y no está al alcance de los pequeños agricultores, que son la mayoría de los productores del mundo.",
        destacado: { tipo: "frase", frase: "El problema no es cuánta agua, sino de dónde se saca." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una forma de mirar los objetos que se llama huella hídrica y que vale para cualquier cosa. Consiste en sumar toda el agua que ha hecho falta a lo largo de la cadena, y no solo la que sale del grifo al usarlos. Con ese criterio, la ropa que compramos pesa mucho más de lo que parece. Y quedó una consecuencia práctica que no tiene nada de moralista: alargar la vida de una prenda de algodón es, con diferencia, la decisión que más agua ahorra, muy por encima de cómo se lave.",
      },
    ],
  },
];
