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
    titulo: "La máquina que multiplicó esclavos",
    gancho: "Separaba la fibra de la semilla cincuenta veces más rápido. El resultado fue mucha más gente esclavizada, no menos.",
    categoria: "Algodón",
    color: "var(--slate)",
    encargo: "Un cajón de madera con rodillo de púas metálicas y fibra de algodón alrededor.",
    entrada:
      "Estados Unidos, 1793. El algodón que crece bien en el sur del país tiene semillas verdes pegadas a la fibra, y separarlas a mano es lentísimo: una persona limpia menos de medio kilo al día. Eso limita el cultivo a una escala pequeña. Un joven mecánico de paso por una plantación construye en pocas semanas un aparato que lo cambia todo.",
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
    entrada:
      "Bengala, siglos XVII y XVIII. En la llanura de un gran río se teje el tejido más fino del mundo. Es una muselina de algodón tan ligera que una pieza de varios metros cabe en una caja de cerillas y pasa entera por un anillo. Se exporta a las cortes europeas a precios altísimos, y en el siglo XIX desaparece por completo.",
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
    titulo: "Una camiseta y dos mil litros",
    gancho: "No es lo que gastas lavándola: es lo que bebió la planta antes de convertirse en tela.",
    categoria: "Algodón",
    color: "var(--plum)",
    encargo: "Un campo de algodón con las cápsulas blancas abiertas bajo un sol duro.",
    entrada:
      "El algodón se cultiva desde hace más de cinco mil años y hoy ocupa cerca del dos por ciento de la tierra de labranza. Del agua de riego, en cambio, se lleva una parte mucho mayor. La razón está en la planta: es un arbusto de zonas cálidas que necesita agua constante durante meses, y casi todo el algodón del mundo se cultiva en sitios donde no llueve lo suficiente.",
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
