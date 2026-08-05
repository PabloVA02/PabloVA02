import type { Short } from "../shorts";

/* ==========================================================================
   Museos.

   El riesgo del tema es el respeto reverencial: el patrimonio, la
   memoria, la cultura. Nadie discute nada de eso y nadie aprende nada.

   La regla del tema: un museo se cuenta por CÓMO LLEGÓ LO QUE HAY DENTRO
   y por quién puede entrar a verlo. Un cuerno de narval vendido como
   unicornio. Una solicitud por escrito para visitar gratis. Un asalto
   militar documentado en un archivo. Las salas son el final de un
   trayecto, y ese trayecto es la historia.

   Y las discusiones abiertas se dejan abiertas, con los dos argumentos.
   ========================================================================== */

export const MUSEOS: Short[] = [
  {
    id: "gabinete-curiosidades",
    titulo: "Empezaron como cuartos de rarezas",
    gancho: "Un cuerno de narval se vendía como cuerno de unicornio y costaba una fortuna.",
    categoria: "Museos",
    color: "var(--plum)",
    encargo: "Un cuarto abarrotado de estantes con conchas, fósiles y un cocodrilo colgado del techo.",
    entrada:
      "Europa, siglo XVI. Los nobles y los comerciantes ricos empiezan a reunir en una habitación de su casa objetos raros traídos de todas partes: conchas, fósiles, minerales, animales disecados, instrumentos, monedas antiguas y cosas de procedencia dudosa. Lo llaman gabinete de curiosidades, se enseña a las visitas como quien enseña una casa nueva, y es el antepasado directo de cualquier museo actual.",
    paginas: [
      {
        rotulo: "El unicornio",
        texto:
          "No había ninguna clasificación: en el mismo estante convivían un cocodrilo colgado del techo, una piedra que supuestamente curaba el veneno y un reloj mecánico desmontado. La pieza más codiciada era el cuerno de unicornio, una vara retorcida de más de dos metros a la que se atribuía la propiedad de detectar venenos, y que en realidad es el colmillo de un narval, un cetáceo del Ártico. Los balleneros del norte conocían el truco perfectamente y guardaron el secreto durante siglos, porque el precio dependía de que nadie lo supiera.",
        destacado: { tipo: "frase", frase: "El cuerno de unicornio era el colmillo de un narval." },
      },
      {
        rotulo: "El orden",
        texto:
          "Aquellos cuartos hicieron algo importante casi sin querer: juntaron objetos que nadie había visto nunca uno al lado del otro. Al comparar conchas de sitios distintos, o fósiles con animales vivos, empezaron a aparecer preguntas que no se pueden formular con una sola pieza delante. De ahí salió la costumbre de clasificar, de etiquetar y de ordenar por criterios, que es exactamente lo que separa un museo de un almacén. Varios de aquellos gabinetes acabaron donados a universidades y ciudades, y son el primer fondo de museos que hoy visitamos.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "metros medía el falso cuerno" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El primer museo abierto al público con ese nombre nació en 1683 en una universidad inglesa a partir de una colección donada, y cobraba la entrada según el tiempo que uno quisiera pasar dentro. El modelo se extendió durante el siglo siguiente por media Europa. Los gabinetes originales se conservan en unos pocos sitios tal como estaban, con su desorden intacto, y resultan bastante más divertidos que las salas ordenadas que salieron de ellos: allí una piedra, un bicho y una máquina siguen compartiendo estante sin pedirle permiso a nadie.",
      },
    ],
  },

  {
    id: "museo-con-cita-previa",
    titulo: "Gratis, pero había que escribir",
    gancho: "Era gratis desde 1759, pero había que solicitarlo por escrito y esperar a que lo aprobaran.",
    categoria: "Museos",
    color: "var(--slate)",
    encargo: "Una galería del siglo XVIII con vitrinas altas y muy poca gente dentro.",
    entrada:
      "Londres, 1759. Abre sus puertas el primer museo nacional público del mundo, creado por ley del Parlamento a partir de la colección de un médico que la dejó al Estado a cambio de que pagara a sus herederos. La entrada es gratuita para toda persona estudiosa y curiosa, según dice el texto fundacional. Conseguirla es otra cosa bien distinta.",
    paginas: [
      {
        rotulo: "La solicitud",
        texto:
          "Había que presentar por escrito una petición con el nombre, la ocupación y el domicilio, esperar a que un comité la aprobara y volver otro día a recoger el billete. Aprobada la solicitud, se entraba en grupos de cinco personas acompañadas por un guía que recorría las salas a paso rápido, sin detenerse a explicar gran cosa y con la advertencia de no tocar nada de nada. Una visita entera duraba una hora, y en las primeras décadas se admitían unas diez personas por hora. La gratuidad era real; la accesibilidad, bastante menos.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "personas por grupo, con guía y prisa" },
      },
      {
        rotulo: "La apertura",
        texto:
          "El sistema se fue soltando a lo largo del siglo siguiente, empujado por dos cosas: la presión política a favor de la educación popular y la llegada del ferrocarril, que puso la capital al alcance de mucha gente por primera vez en su vida. Se abrió los días de fiesta, se quitó la cita previa, se pusieron etiquetas en las vitrinas y se contrataron vigilantes en lugar de guías. Las visitas pasaron de unos pocos miles al año a cientos de miles, y aparecieron las quejas de siempre sobre el ruido y sobre quién debía poder entrar.",
        destacado: { tipo: "frase", frase: "El ferrocarril hizo por los museos más que ninguna ley." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La entrada gratuita se ha mantenido más de dos siglos y medio y es hoy la norma en los grandes museos nacionales británicos, lo que se cita a menudo cuando se discute el precio de los museos en otros países. La discusión que sí sigue completamente abierta es otra: buena parte de aquellos fondos llegó durante el imperio y varios países reclaman su devolución, con negociaciones que llevan décadas. Un museo que nació para que cualquiera pudiera ver el mundo entero en una tarde discute ahora, sala por sala, de quién es lo que tiene dentro.",
      },
    ],
  },

  {
    id: "objetos-devueltos",
    titulo: "Los museos empiezan a devolver",
    gancho: "Miles de objetos saqueados en asaltos coloniales están volviendo a sus países de origen.",
    categoria: "Museos",
    color: "var(--ochre)",
    encargo: "Una placa de bronce africana en relieve dentro de una vitrina iluminada.",
    entrada:
      "Europa, 2018. Un informe encargado por el gobierno francés propone devolver a sus países de origen los objetos africanos que llegaron a los museos europeos durante la época colonial sin ningún consentimiento. Se calcula que hay unos noventa mil solo en Francia, y varios cientos de miles repartidos por el resto del continente europeo.",
    paginas: [
      {
        rotulo: "Cómo llegaron",
        texto:
          "No todos llegaron de la misma manera, y esa es la parte que complica cualquier decisión general. Hay piezas compradas legalmente, hay regalos diplomáticos, hay objetos recogidos en expediciones científicas y hay botines de guerra tomados en asaltos concretos y documentados como tales en los propios archivos militares. Un caso famoso son los millares de placas y esculturas de bronce saqueadas en 1897 durante el asalto a una ciudad de la actual Nigeria, repartidas después por subastas entre museos de media Europa y de Estados Unidos, con las actas de reparto conservadas y publicadas.",
        destacado: { tipo: "cifra", cifra: "90.000", unidad: "objetos africanos solo en Francia" },
      },
      {
        rotulo: "Las devoluciones",
        texto:
          "Desde entonces las devoluciones han empezado a ocurrir de verdad, aunque despacio y caso por caso. Alemania ha transferido la propiedad de más de mil piezas, varios museos han devuelto esculturas concretas y algunos países han tenido que cambiar sus leyes, porque en muchos sitios los fondos públicos son legalmente inalienables y hace falta una norma nueva para poder soltarlos. Los argumentos en contra se repiten: que se conservan mejor donde están, que un museo enciclopédico permite comparar culturas bajo el mismo techo y que abrir esa puerta acabaría vaciando las salas por completo.",
        destacado: { tipo: "frase", frase: "En muchos países la ley prohíbe desprenderse de un fondo público." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Junto a los objetos hay otra devolución más incómoda y bastante menos discutida: la de los restos humanos. Los museos europeos guardan decenas de miles de cráneos y esqueletos recogidos en el siglo XIX para medirlos y clasificarlos según teorías raciales que la ciencia abandonó hace un siglo largo. Varios países los han ido devolviendo para enterrarlos. Es probablemente el punto donde más gente está de acuerdo, y también donde se ve con más claridad de dónde salieron muchas de las colecciones que hoy se visitan tranquilamente un domingo por la tarde.",
      },
    ],
  },
];
