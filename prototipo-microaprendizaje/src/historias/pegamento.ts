import type { Short } from "../shorts";

/* ==========================================================================
   El pegamento.

   Un producto que todo el mundo usa mal porque nadie explica nunca cómo
   funciona. El tema se estropea si repite la nota adhesiva, que ya está
   en inventos.ts.

   La regla del tema: todo se explica con LAS DOS FUERZAS, la adhesión que
   agarra a la superficie y la cohesión que mantiene unido el propio
   pegamento. Cada fallo se atribuye a una de las dos, y siempre se dice
   qué hacer en la práctica.
   ========================================================================== */

export const PEGAMENTO: Short[] = [
  {
    id: "por-que-pega-el-pegamento",
    titulo: "Pegar dos cosas y pegarse",
    gancho: "Agarrarse a las dos superficies y agarrarse a sí mismo. Si falla una de las dos, la unión se abre.",
    categoria: "Ciencia",
    color: "var(--ochre)",
    encargo: "Dos tablas de madera separándose con el cordón de cola blanca a medio secar.",
    fotos: [
      {
        archivo: "Amber (resinite) 2.jpg",
        autor: "Un nódulo de ámbar, resina de árbol endurecida: el pegamento más antiguo que existe. Fotografía de James St. John.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Amber_(resinite)_2.jpg",
        foco: "50% 45%",
        alt: "Un bloque de ámbar rojizo y brillante con los pliegues de la resina marcados en la superficie.",
      },
      {
        archivo: "Weathered wood grain texture macro closeup detail.jpg",
        autor: "La veta de una madera envejecida vista de muy cerca: una superficie lisa a simple vista. Fotografía de MacrofyStudio.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Weathered_wood_grain_texture_macro_closeup_detail.jpg",
        foco: "50% 55%",
        alt: "Macro de un canto de madera deshilachado en crestas y grietas, iluminado con luz cálida.",
      },
      {
        archivo: "Fossiliferous amber (Dominican Republic) 1.jpg",
        autor: "Ámbar de la República Dominicana con un insecto atrapado dentro. Fotografía de James St. John.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Fossiliferous_amber_(Dominican_Republic)_1.jpg",
        foco: "50% 50%",
        alt: "Una pieza pulida de ámbar dorado con un insecto oscuro suspendido en el centro.",
      },
      {
        archivo: "2023 Kleje.jpg",
        autor: "Cuatro tubos de pegamento de distinto tipo. Fotografía de Jacek Halicki.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2023_Kleje.jpg",
        foco: "50% 50%",
        alt: "Cuatro tubos pequeños de adhesivo colocados sobre un fondo blanco liso.",
      },
    ],
    entrada:
      "Todas las culturas, con la primera cola de brea documentada hace unos doscientos mil años. Pegar dos cosas parece el más simple de los problemas y un asunto de fuerza bruta, y en realidad es un asunto de dos fuerzas distintas que hay que equilibrar entre sí. Una es la adhesión, que es lo que agarra el pegamento a la superficie que toca. La otra es la cohesión, que es lo que mantiene al pegamento unido consigo mismo. Un adhesivo que se agarre muy bien pero se rompa por dentro no sirve, y uno durísimo que no moje la superficie tampoco.",
    paginas: [
      {
        rotulo: "Dos fuerzas",
        texto:
          "La adhesión funciona porque las moléculas del pegamento se meten en los poros y las rayas del material. Una superficie que parece lisa está llena de irregularidades microscópicas donde el líquido se agarra. Por eso lijar antes de pegar funciona, ya que multiplica el número de sitios donde agarrarse. Y por eso hay que limpiar la grasa, porque una capa de aceite impide todo contacto. La cohesión es otra cosa, y consiste en que el pegamento seco no se rompa por dentro. Cuando una unión falla, mirar dónde ha quedado el pegamento dice cuál de las dos fuerzas cedió.",
        destacado: { tipo: "frase", frase: "Lijar funciona: multiplica los sitios donde agarrarse." },
      },
      {
        rotulo: "Secar o curar",
        texto:
          "Los pegamentos se dividen en dos familias según cómo pasan de líquido a sólido. Los primeros llevan el pegamento disuelto en agua o en disolvente, y endurecen cuando ese líquido se va. La cola blanca de carpintero y el pegamento de barra funcionan así, y necesitan que algo respire. Por eso pegar dos cristales con cola blanca no funciona nunca, porque el agua no tiene por dónde salir. Los segundos no secan, sino que reaccionan químicamente y se convierten en un material nuevo y sólido. Ahí entran las resinas de dos componentes y el pegamento instantáneo, que no pierden nada al endurecer.",
        destacado: { tipo: "cifra", cifra: "200000", unidad: "años tiene la cola de brea más antigua" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una regla práctica que resuelve casi cualquier duda delante de un estante de ferretería cualquiera. Si los dos materiales son porosos, como la madera o el cartón, sirve un pegamento que seque. Si alguno es impermeable, como el metal, el cristal o el plástico, hace falta uno que reaccione. Quedó también un dato que sorprende a cualquiera que trabaje la madera por primera vez en su vida. Una unión encolada bien hecha es más fuerte que la propia madera, de modo que al forzarla se rompe por otro sitio. La junta deja de ser el punto débil.",
      },
    ],
  },
  {
    id: "el-pegamento-instantaneo",
    titulo: "Necesita agua para agarrar",
    gancho: "Por eso pega los dedos al instante y cuesta que agarre en una madera muy seca. Reacciona con la humedad.",
    categoria: "Ciencia",
    color: "var(--slate)",
    encargo: "Gota de pegamento instantáneo en la punta de un tubo, muy de cerca.",
    entrada:
      "Estados Unidos, 1942. Un equipo que busca un plástico transparente para las miras de los fusiles de la Segunda Guerra Mundial da con una sustancia inservible para su encargo. Se pega a todo lo que toca y no hay manera de limpiarla de los aparatos del laboratorio. La descartan, y nueve años después alguien se acuerda de ella y entiende para qué sirve.",
    paginas: [
      {
        rotulo: "Con agua",
        texto:
          "El pegamento instantáneo llega al tubo como un líquido de moléculas sueltas y muy inquietas. En cuanto encuentran una molécula de agua, esas moléculas empiezan a encadenarse unas con otras. La cadena crece a toda velocidad y en segundos hay un plástico duro donde había líquido. El agua que hace falta no es mucha, porque basta la humedad que hay siempre en el aire. Cualquier superficie tiene encima una capa de agua invisible de unas pocas moléculas de grosor. La piel tiene bastante más, y por eso los dedos se pegan más rápido que cualquier otra cosa.",
        destacado: { tipo: "frase", frase: "Basta la humedad que ya hay sobre cualquier superficie." },
      },
      {
        rotulo: "Sus límites",
        texto:
          "Ese mecanismo explica también por qué falla en los casos en que la gente espera que funcione. En una madera muy seca o en un día de invierno con calefacción cuesta que agarre. El plástico que se forma es duro y quebradizo, así que aguanta muy bien la tracción y muy mal el golpe. Una pieza pegada así se despega de un martillazo aunque resista un tirón considerable. Tampoco aguanta el calor ni el agua a largo plazo, porque la cadena se va deshaciendo. Y necesita una junta finísima, ya que una capa gruesa se queda blanda por dentro y no cura.",
        destacado: { tipo: "cifra", cifra: "1942", unidad: "el año del descubrimiento accidental" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un producto que se vende hoy en cualquier sitio y que empezó siendo un fracaso de laboratorio. Quedó también un uso médico que se descubrió en la guerra de Vietnam y que hoy es corriente. Los sanitarios pulverizaban una versión del producto sobre las heridas para frenar la hemorragia hasta llegar a un hospital. Hoy existen pegamentos quirúrgicos aprobados que cierran cortes pequeños sin puntos y sin dejar apenas cicatriz. Y quedó el remedio para los dedos pegados, que consiste en aceite y en paciencia, nunca en tirar. El aceite se cuela entre la piel y el plástico.",
      },
    ],
  },
  {
    id: "pegar-un-avion",
    titulo: "Los aviones van pegados",
    gancho: "Un remache exige un agujero, y un agujero es por donde empieza una grieta. El pegamento no perfora nada.",
    categoria: "Tecnología",
    color: "var(--plum)",
    curioso: true,
    encargo: "Fila de remaches en el fuselaje de un avión antiguo, con la chapa a contraluz.",
    entrada:
      "Reino Unido, 1943. En plena Segunda Guerra Mundial, un fabricante de aviones necesita construir un bombardero rápido con poco metal y busca la manera de unir madera y aluminio sin tornillos. Aparece entonces una resina que pega chapa a chapa y resiste la vibración de un motor. Ese pegamento cambió la manera de construir estructuras que tienen que aguantar millones de ciclos.",
    paginas: [
      {
        rotulo: "El agujero",
        texto:
          "Un remache es un clavo grueso que se mete por un agujero y se aplasta por el otro lado. Funciona muy bien y tiene un defecto que solo aparece después de muchos años de vuelo. Cada agujero interrumpe el material y concentra en su borde toda la tensión que pasa por ahí. Con el avión presurizándose y despresurizándose en cada vuelo, esa tensión va y viene miles de veces. Al cabo de muchos ciclos aparece una grieta minúscula en el borde del agujero y va creciendo. Ese fenómeno se llama fatiga y ha provocado accidentes muy graves en la historia de la aviación.",
        destacado: { tipo: "frase", frase: "Cada agujero concentra la tensión en su propio borde." },
      },
      {
        rotulo: "Repartir la carga",
        texto:
          "Una unión pegada no perfora nada y reparte el esfuerzo por toda la superficie de contacto. Sin puntos de concentración no hay sitio preferente donde empiece la grieta, así que la fatiga tarda mucho más. Además el pegamento amortigua la vibración, cosa que un remache metálico transmite entera. El inconveniente es que una junta pegada no se puede inspeccionar mirándola, porque se ve igual bien que mal. Un remache flojo se detecta a simple vista, y un pegado mal hecho hay que buscarlo con ultrasonidos. Por eso la limpieza de las chapas antes de pegar se controla con una minuciosidad extrema.",
        destacado: { tipo: "cifra", cifra: "1943", unidad: "el año de la primera resina estructural" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una técnica que hoy es la norma en la aviación, en los trenes rápidos y en los coches. Un coche moderno lleva decenas de metros de cordón de pegamento estructural en su carrocería. Eso permite unir aluminio con acero, cosa que soldando resulta muy difícil por la diferencia de temperaturas. Quedó también una limitación que se acepta, porque una pieza pegada es muchísimo más difícil de reparar. Y quedó una imagen que ayuda a entenderlo, porque el ala de un avión moderno se parece más a un mueble encolado que a una armadura remachada.",
      },
    ],
  },
];
