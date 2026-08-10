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
    titulo: "La pólvora era un elixir",
    gancho: "Unos alquimistas mezclaban ingredientes para vivir eternamente y les ardió el laboratorio.",
    categoria: "Pólvora",
    color: "var(--clay)",
    encargo: "Un cuenco de cerámica con polvo negro y unos rollos de papel escritos al lado.",
    fotos: [
      {
        archivo: "Fireworks, Changsha, Hunan, China, 30 June 2021B.jpg",
        autor: "Fuegos artificiales en Changsha, en la provincia china de Hunan. Fotografía de Huangdan2060.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Fireworks,_Changsha,_Hunan,_China,_30_June_2021B.jpg",
        foco: "50% 45%",
        alt: "Un ramo de fuegos artificiales dorados y rojos abriéndose en un cielo negro.",
      },
      {
        archivo: "IFC Countdown Spectacular 2009.jpg",
        autor: "Fuegos artificiales sobre los rascacielos de Hong Kong. Fotografía de ncburton.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:IFC_Countdown_Spectacular_2009.jpg",
        foco: "50% 45%",
        alt: "Surtidores de fuegos artificiales saliendo de las azoteas de varios rascacielos frente al mar.",
      },
      {
        archivo: "Karaman Museum 2072.jpg",
        autor: "Cañón de bronce del siglo XV, con el tubo reventado por un costado. Museo de Karaman, Turquía. Fotografía de Dosseman.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Karaman_Museum_2072.jpg",
        foco: "50% 45%",
        alt: "Un cañón corto de bronce con anillos de refuerzo, apoyado en dos cuñas de madera sobre una vitrina.",
      },
      {
        archivo: "Post-medieval stone shot (FindID 974247).jpg",
        autor: "Balas de piedra talladas para cañón, de los primeros tiempos de la artillería.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Post-medieval_stone_shot_(FindID_974247).jpg",
        foco: "50% 50%",
        alt: "Varias bolas de piedra gris talladas a mano, alineadas sobre fondo neutro.",
      },
    ],
    entrada:
      "China, siglo IX. Los alquimistas de la corte llevan siglos buscando un elixir que alargue la vida, mezclando minerales y sustancias con la esperanza de dar con la fórmula definitiva. Un texto de la época advierte por escrito a los colegas de una combinación concreta que no deben probar. La razón que da es muy práctica: a varios les ha quemado la barba, las manos y la casa entera. Ese aviso, escrito para que nadie repitiera el experimento, es la primera receta de pólvora que se conserva. La sustancia que iba a cambiar la guerra durante mil años apareció así: como un accidente que alguien se molestó en documentar para que no volviera a ocurrir.",
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
    titulo: "Mil años de fuego naranja",
    gancho: "El color viene de sales metálicas, y hasta 1830 solo se sabían hacer chispas amarillentas.",
    categoria: "Pólvora",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una explosión de fuegos artificiales azul intenso sobre un cielo negro.",
    fotos: [
      {
        archivo: "A Firework Bouquet (Unsplash).jpg",
        autor: "Ramillete de fuegos artificiales sobre cielo negro. Fotografía de Vernon Raineil Cenzon, 2017.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:A_Firework_Bouquet_(Unsplash).jpg",
        foco: "50% 45%",
        alt: "Muchas palmeras de fuegos artificiales azules, naranjas, verdes y blancas abriéndose a la vez sobre el cielo negro.",
      },
      {
        archivo: "2019 한강불꽃축제-1.jpg",
        autor: "Festival de fuegos artificiales del río Han, Seúl, 2019. Fotografía de Kwon Jung-sik.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2019_%ED%95%9C%EA%B0%95%EB%B6%88%EA%BD%83%EC%B6%95%EC%A0%9C-1.jpg",
        foco: "50% 45%",
        alt: "Fuegos artificiales rosas y dorados sobre un río, con la ciudad iluminada al fondo.",
      },
      {
        archivo: "Andrew Ruiz 2017-05-28 (Unsplash).jpg",
        autor: "Explosión de artificio vista de cerca. Fotografía de Andrew Ruiz, 2017.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Andrew_Ruiz_2017-05-28_(Unsplash).jpg",
        foco: "50% 45%",
        alt: "Una bola de fuego artificial abriéndose en filamentos de luz sobre fondo oscuro.",
      },
      {
        archivo: "Año nuevo la paz 2024.jpg",
        autor: "Fuegos de fin de año sobre La Paz, 2023. Fotografía de Jail Ibáñez.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:A%C3%B1o_nuevo_la_paz_2024.jpg",
        foco: "50% 45%",
        alt: "Estallidos de fuegos artificiales sobre los tejados de una ciudad en la noche de fin de año.",
      },
    ],
    entrada:
      "Italia, 1830. Los fuegos artificiales llevan casi mil años existiendo, desde que los inventaron en China, y en todo ese tiempo han sido casi siempre del mismo color: el naranja amarillento de la pólvora ardiendo con limaduras de hierro dentro. Un espectáculo entero se veía en una sola gama, y a nadie se le ocurría que pudiera ser de otra manera. Ese año unos pirotécnicos italianos empiezan a añadir sales metálicas a la mezcla y descubren algo que la química acababa de empezar a explicar: cada metal produce una llama de un color distinto y siempre el mismo.",
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
    titulo: "Leyó su propia esquela",
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
