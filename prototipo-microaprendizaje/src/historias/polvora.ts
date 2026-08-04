import type { Short } from "../shorts";

/* ==========================================================================
   Pólvora y explosivos.

   El riesgo del tema es el catálogo bélico: calibres, batallas, alcances.
   Aburre y además deja fuera lo interesante.

   La regla del tema: los explosivos se cuentan por LO QUE SE BUSCABA Y NO
   ERA ESO. Un elixir de inmortalidad que sale ardiendo. Un líquido
   ingobernable que se vuelve manejable al mezclarlo con tierra. Una
   necrológica publicada por error. En este tema la intención y el
   resultado casi nunca coinciden, y ahí está la historia.

   Y la química se explica en lenguaje de calle, sin fórmulas.
   ========================================================================== */

export const POLVORA: Short[] = [
  {
    id: "polvora-inmortalidad",
    titulo: "La pólvora se inventó buscando la inmortalidad",
    gancho: "Unos alquimistas mezclaban ingredientes para vivir eternamente y les ardió el laboratorio.",
    categoria: "Pólvora",
    color: "var(--clay)",
    encargo: "Un cuenco de cerámica con polvo negro y unos rollos de papel escritos al lado.",
    entrada:
      "China, siglo IX. Los alquimistas de la corte llevan siglos buscando un elixir que alargue la vida, mezclando minerales y sustancias con la esperanza de dar con la fórmula definitiva. Un texto de la época advierte por escrito a los colegas de una combinación concreta que no deben probar, porque a varios les ha quemado la barba y la casa entera.",
    paginas: [
      {
        rotulo: "El aviso",
        texto:
          "La mezcla peligrosa eran tres cosas fáciles de conseguir: salitre, azufre y carbón. El salitre aporta el oxígeno necesario para que la combustión se mantenga sin aire de fuera, así que la reacción no necesita respirar y por eso arde a una velocidad que ninguna hoguera alcanza. El texto conservado dice literalmente que algunos se han quemado las manos y la cara y han incendiado el edificio donde trabajaban. Es probablemente el único invento militar de la historia cuyo primer documento escrito es una advertencia para que nadie lo repita.",
        destacado: { tipo: "frase", frase: "El primer texto que la describe avisa de que no se haga." },
      },
      {
        rotulo: "Del fuego al cañón",
        texto:
          "Los primeros usos no fueron cañones sino fuegos artificiales, señales luminosas y unas lanzas de fuego que escupían llamas y trozos de cerámica por un tubo de bambú atado a una pica. El paso a los proyectiles tardó siglos: había que aprender a fabricar tubos capaces de aguantar la presión sin reventar, primero de bronce y después de hierro colado. Cuando llegó a Europa, en el siglo XIII, cambió la guerra en dos siglos, porque una muralla pensada para resistir un asedio de meses dejaba de servir en unas horas.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "ingredientes: salitre, azufre y carbón" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El elixir no apareció nunca, y varios emperadores chinos murieron precisamente por beberse preparados alquímicos cargados de mercurio y de arsénico que debían hacerlos eternos. Lo que sí quedó fue la mezcla que nadie buscaba, y de ella salieron los cañones, las minas, la voladura de roca para abrir túneles y carreteras y toda la industria de explosivos posterior. Sigue siendo la única sustancia que ha cambiado a la vez la guerra, la ingeniería civil y las fiestas de los pueblos, que es una combinación bastante difícil de igualar por ningún otro invento.",
      },
    ],
  },

  {
    id: "fuegos-de-color",
    titulo: "Los fuegos artificiales fueron naranjas mil años",
    gancho: "El color viene de sales metálicas, y hasta 1830 solo se sabían hacer chispas amarillentas.",
    categoria: "Pólvora",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una explosión de fuegos artificiales azul intenso sobre un cielo negro.",
    entrada:
      "Italia, 1830. Los fuegos artificiales llevan casi mil años existiendo y son casi todos del mismo color: el naranja amarillento de la pólvora ardiendo con limaduras de metal dentro. Ese año, unos pirotécnicos italianos empiezan a añadir sales metálicas a las mezclas y descubren que cada metal produce una llama de un color distinto.",
    paginas: [
      {
        rotulo: "Cada metal",
        texto:
          "El principio es el mismo que hay detrás del análisis químico moderno: al calentarse, los átomos de cada elemento sueltan luz de unos colores muy concretos, siempre los mismos. El estroncio da rojo, el bario verde, el cobre azul, el sodio un amarillo intenso y el calcio naranja. El magnesio y el aluminio dan el blanco cegador de las bengalas. Combinar dos metales no mezcla los colores como la pintura, sino que produce las dos luces a la vez, así que el morado se consigue poniendo juntos estroncio y cobre en la misma bola.",
        destacado: { tipo: "frase", frase: "Cada metal da siempre exactamente el mismo color." },
      },
      {
        rotulo: "El azul",
        texto:
          "El azul es el problema del oficio y lo sigue siendo hoy. El compuesto de cobre que lo produce se descompone si la temperatura sube demasiado, y en la explosión de un cohete el margen es estrechísimo: un poco frío y sale un gris apagado, un poco caliente y se vuelve blanco. Los pirotécnicos llevan casi dos siglos afinando la mezcla y todavía se considera la prueba definitiva para juzgar a un buen artificiero. Cuando alguien ve un azul intenso y saturado en el cielo, está viendo el resultado de un ajuste finísimo.",
        destacado: { tipo: "cifra", cifra: "1830", unidad: "los primeros colores de verdad" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La forma de la explosión también se diseña: dentro de la bola, las estrellas de composición se colocan a mano en capas concéntricas o en anillos, y su disposición decide si el resultado será una esfera perfecta, un sauce que cae o un corazón visible desde un solo lado. Es una de las pocas artesanías donde el producto se destruye a sí mismo en dos segundos y no queda ninguna prueba salvo una fotografía. Mil años de pólvora naranja se convirtieron en una paleta de colores completa en apenas dos generaciones de artesanos.",
      },
    ],
  },

  {
    id: "esquela-equivocada",
    titulo: "Leyó su propia esquela y cambió el testamento",
    gancho: "Un periódico lo dio por muerto por error y lo llamó mercader de la muerte.",
    categoria: "Pólvora",
    color: "var(--slate)",
    encargo: "Una página de periódico antiguo doblada sobre una mesa de desayuno.",
    entrada:
      "Francia, 1888. Un periódico publica por equivocación la necrológica de un industrial sueco, confundiéndolo con su hermano, que sí acababa de fallecer. El texto es demoledor: lo llama el mercader de la muerte y le atribuye haberse enriquecido inventando maneras de matar a más gente y más deprisa que nunca. Él lee su propia esquela durante el desayuno.",
    paginas: [
      {
        rotulo: "La dinamita",
        texto:
          "El hombre había inventado veinte años antes la manera de manejar la nitroglicerina, un líquido que explota con cualquier golpe y que había matado ya a decenas de personas, incluido un hermano suyo en una explosión en la fábrica familiar. Su solución fue mezclarla con una tierra porosa que la absorbe y la vuelve estable, de modo que se puede transportar, cortar y colocar sin peligro, y solo detona con un detonador. Aquello permitió abrir túneles, canales y minas a una velocidad imposible hasta entonces, y lo hizo inmensamente rico.",
        destacado: { tipo: "frase", frase: "La absorbió en tierra porosa y dejó de explotar sola." },
      },
      {
        rotulo: "El testamento",
        texto:
          "Nunca contó en público qué le hizo sentir aquella necrológica, y algunos historiadores dudan de que la anécdota sea la causa directa de lo que vino después. Lo comprobable es que ocho años más tarde, en 1895, firmó en un club de París un testamento de una sola página en el que dejaba casi toda su fortuna, más del noventa por ciento, para crear unos premios anuales destinados a quienes hicieran el mayor beneficio a la humanidad. La familia lo impugnó y las instituciones designadas ni siquiera sabían que se les había encargado nada.",
        destacado: { tipo: "cifra", cifra: "94 %", unidad: "de su fortuna dejó para los premios" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El testamento tardó cinco años en ejecutarse y los primeros premios se entregaron en 1901. Hoy, el nombre de aquel industrial es sinónimo del mayor reconocimiento que existe en varias disciplinas, y prácticamente nadie lo asocia con explosivos, que era todo lo que significaba mientras vivía. La dinamita se sigue usando en minería, aunque muy sustituida por mezclas más baratas y seguras. Un periodista que confundió a dos hermanos le regaló al mundo, sin quererlo y sin enterarse jamás, la ocasión de que alguien leyera por adelantado cómo iban a recordarlo y decidiera cambiarlo a tiempo.",
      },
    ],
  },
];
