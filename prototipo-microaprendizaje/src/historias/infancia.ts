import type { Short } from "../shorts";

/* ==========================================================================
   La infancia.

   La idea de que los niños son distintos de los adultos y necesitan un
   mundo propio es mucho más reciente de lo que parece. El tema se estropea
   si se cuenta con nostalgia o con moralina.

   La regla del tema: se cuenta con DOCUMENTOS Y CIFRAS —cuadros, leyes,
   horarios de fábrica, catálogos de juguetes—, porque de lo contrario todo
   suena a opinión. Y se evita el juicio fácil sobre el pasado: la gente de
   entonces no era cruel, vivía en otra economía.
   ========================================================================== */

export const INFANCIA: Short[] = [
  {
    id: "ninos-pintados-como-adultos",
    titulo: "Niños pintados como adultos",
    gancho: "Cara de señor, ropa de señor y postura de señor. Y eso ha dado lugar a una teoría discutida.",
    categoria: "Infancia",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un retrato antiguo de un niño vestido con ropa de adulto y gesto serio.",
    fotos: [
      {
        archivo: "Diego Rodriguez de Silva y Velázquez - Infanta Margarita Teresa in a Blue Dress - Google Art Project.jpg",
        autor: "La infanta Margarita Teresa a los ocho años, óleo de Diego Velázquez, 1659. Kunsthistorisches Museum, Viena.",
        licencia: "Dominio público",
        pdPorEdad: 1660,
        fuente: "https://commons.wikimedia.org/wiki/File:Diego_Rodriguez_de_Silva_y_Vel%C3%A1zquez_-_Infanta_Margarita_Teresa_in_a_Blue_Dress_-_Google_Art_Project.jpg",
        foco: "50% 28%",
        alt: "Una niña de pelo claro con un enorme vestido azul y plata de corte adulto, muy seria, con una mano apoyada en un mueble.",
      },
      {
        archivo: "Diederik van Hemert (1729-53), heer van Babiloniënbroek op zesjarige leeftijd, SK-A-3868.jpg",
        autor: "Diederik van Hemert, señor de Babiloniënbroek, retratado a los seis años. Óleo de Harmen Serin, 1735. Rijksmuseum.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Diederik_van_Hemert_(1729-53),_heer_van_Babiloni%C3%ABnbroek_op_zesjarige_leeftijd,_SK-A-3868.jpg",
        foco: "50% 25%",
        alt: "Un niño pequeño pintado de cuerpo entero con casaca, chaleco y postura de caballero adulto.",
      },
      {
        archivo: "Pieter Bruegel the Elder - Children’s Games - Google Art Project.jpg",
        autor: "Juegos de niños, óleo de Pieter Brueghel el Viejo, 1560: más de ochenta juegos distintos en una sola plaza.",
        licencia: "Dominio público",
        pdPorEdad: 1569,
        fuente: "https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder_-_Children%E2%80%99s_Games_-_Google_Art_Project.jpg",
        foco: "50% 50%",
        alt: "Una plaza pintada llena de decenas de niños jugando a la vez, con aros, peonzas, zancos y muñecas.",
      },
      {
        archivo: "02023 Resurrection egg, Cedynia, 11th-13th centuries.jpg",
        autor: "Sonajero de cerámica esmaltada hallado en Cedynia, Polonia, de entre los siglos XI y XIII.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:02023_Resurrection_egg,_Cedynia,_11th-13th_centuries.jpg",
        foco: "50% 50%",
        alt: "Un huevo de barro vidriado en verde y amarillo con dibujos en espiral, sobre fondo oscuro.",
      },
    ],
    entrada:
      "Europa, siglos XIV a XVII. Cualquiera que pasee por la sala de pintura antigua de un museo lo nota enseguida y le resulta incómodo sin saber muy bien por qué: en los cuadros de esa época los niños tienen cara de adulto en miniatura, van vestidos igual que sus padres, con las mismas telas y los mismos encajes, y posan con la misma seriedad. En 1960, un historiador francés partió de esa observación para sostener una tesis que levantó una polémica todavía viva sesenta años después.",
    paginas: [
      {
        rotulo: "La tesis",
        texto:
          "Su idea era que en la Edad Media no existía la infancia tal como la entendemos, sino solo una etapa breve de dependencia física. En cuanto el niño podía valerse por sí mismo, hacia los siete años, entraba en el mundo de los adultos: trabajaba con ellos, comía en la misma mesa y se divertía en las mismas fiestas. Según esta teoría, la infancia como etapa aparte —con ropa propia, juegos propios y necesidad de protección— se habría inventado entre los siglos XVII y XIX. Primero en las familias acomodadas y después en el resto.",
        destacado: { tipo: "frase", frase: "A los siete años, un niño entraba en el mundo de los adultos." },
      },
      {
        rotulo: "Las objeciones",
        texto:
          "Otros historiadores le respondieron con documentos en la mano y la tesis se fue matizando mucho. Hay cartas medievales de padres desesperados por un hijo enfermo, leyes que castigan con más dureza los delitos contra menores y tratados médicos dedicados a las enfermedades infantiles. También hay juguetes en las excavaciones y tumbas infantiles cuidadas. Lo del estilo de los cuadros tiene además una explicación técnica: la pintura de la época no buscaba el parecido físico, sino mostrar la posición social del retratado. A un heredero se le pintaba como heredero, con la ropa y el gesto del cargo que iba a ocupar, tuviera cinco años o cuarenta.",
        destacado: { tipo: "cifra", cifra: "1960", unidad: "el año en que se publicó la tesis" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hoy casi nadie sostiene que no existiera el cariño por los hijos, y casi todos aceptan la parte que sí se sostiene: que la manera de organizar la infancia ha cambiado muchísimo. Lo que se inventó en los últimos siglos no fue el afecto, sino las instituciones. La escuela obligatoria, la ropa infantil, la literatura para niños, el pediatra o la prohibición de trabajar antes de cierta edad son cosas recientes. Aquellos retratos siguen incomodando por lo mismo. Miramos a un niño de hace cuatro siglos y no vemos a un niño, sino a alguien a quien ya se le exigía un papel.",
      },
    ],
  },
  {
    id: "la-primera-ley-de-fabricas",
    titulo: "La ley que nadie cumplió",
    gancho: "Prohibía emplear a menores de nueve años, pero no puso a nadie a comprobarlo. No sirvió de nada.",
    categoria: "Infancia",
    color: "var(--slate)",
    encargo: "Una nave textil antigua con máquinas alineadas y muy poca luz.",
    entrada:
      "Inglaterra, 1802. El país lleva décadas de industrialización y en las fábricas textiles trabajan miles de niños, algunos de cinco o seis años, en jornadas de doce y catorce horas. El parlamento aprueba una ley para limitarlo: es la primera de la historia. Su fallo se ve enseguida, y explica por qué hubo que aprobar otra, y otra, durante todo el siglo.",
    paginas: [
      {
        rotulo: "Sin inspectores",
        texto:
          "Aquella ley encargaba vigilar su cumplimiento a los jueces de paz locales, que eran vecinos notables sin dedicación ni medios. Muchos de ellos, además, eran los propios dueños de las fábricas o amigos suyos. El resultado fue que casi no se aplicó. Una norma que prohíbe algo pero no crea a nadie que lo compruebe cambia el papel y no la fábrica, y eso se vio en muy pocos años. Las condiciones siguieron prácticamente igual. Las comisiones parlamentarias que investigaron el asunto años después recogieron testimonios durísimos de niños, de capataces y de médicos de fábrica.",
        destacado: { tipo: "frase", frase: "Prohibía, pero no ponía a nadie a comprobarlo." },
      },
      {
        rotulo: "La ley que sí",
        texto:
          "El cambio llegó en 1833 con una ley que hizo tres cosas nuevas. Prohibió emplear a menores de nueve años en las fábricas textiles, limitó la jornada de los de nueve a trece a ocho horas diarias y obligó a darles dos horas de escuela. Pero lo importante fue lo cuarto: creó un cuerpo de inspectores pagados por el Estado, con poder para entrar en cualquier fábrica sin avisar y para multar. Eran solo cuatro para todo el país, un número ridículo, y aun así las cosas empezaron a moverse.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "inspectores para todo el país" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el modelo de inspección, que se copió en toda Europa y sigue siendo la base de cualquier norma laboral. La idea es doble: quien vigila tiene que ser independiente de quien es vigilado, y tiene que poder entrar sin avisar. Quedó también la prueba de la edad, que obligó a generalizar los registros de nacimiento, porque hasta entonces muchos niños no podían demostrar cuántos años tenían. Y quedó la lección que aquellos treinta años dejaron por escrito, y que sirve para cualquier ley de cualquier época: una prohibición sin nadie que la compruebe no pasa de declaración de intenciones.",
      },
    ],
  },
  {
    id: "el-juguete-como-negocio",
    titulo: "El juguete industrial es de anteayer",
    gancho: "Durante siglos los juguetes se hacían en casa con lo que había. Fabricarlos en serie es cosa del siglo XIX.",
    categoria: "Infancia",
    color: "var(--ochre)",
    encargo: "Un caballito de madera pintado, algo desconchado, sobre un suelo de tablas.",
    entrada:
      "Europa y Estados Unidos, siglo XIX. Hasta entonces, los juguetes de la mayoría de los niños son los que fabrica alguien de la familia: muñecas de trapo, peonzas de madera, aros de barril. Solo las casas ricas compran juguetes de artesano. Con la industria, con las ciudades y con las familias que empiezan a tener algo de dinero sobrante, aparece un mercado nuevo.",
    paginas: [
      {
        rotulo: "Fabricar barato",
        texto:
          "Lo que abarató el juguete fueron los materiales y las máquinas. La hojalata estampada permitió sacar coches y figuras en serie a partir de una chapa fina. La fundición a presión dio soldaditos idénticos por miles. Y más tarde el plástico moldeado hizo que un juguete costara céntimos. Aparecieron comarcas enteras especializadas, como el valle alemán de los juguetes de madera o las fábricas de hojalata de Núremberg, que exportaban a medio mundo. El juguete dejó de ser un objeto único hecho por alguien conocido y pasó a ser un producto de catálogo.",
        destacado: { tipo: "frase", frase: "Dejó de hacerlo alguien de la familia y pasó a ser catálogo." },
      },
      {
        rotulo: "La Navidad",
        texto:
          "El negocio necesitaba además una fecha, y la encontró. A lo largo del siglo XIX, la Navidad se convirtió en la fiesta infantil por excelencia en el mundo anglosajón, con árbol, regalos y una figura que los trae. Los grandes almacenes montaron secciones enteras de juguetes y catálogos ilustrados que se repartían en otoño. En pocas décadas se asentó una costumbre que hoy parece de toda la vida: los juguetes se regalan sobre todo una vez al año. Buena parte de las cuentas de una fábrica de juguetes se juega en diciembre.",
        destacado: { tipo: "cifra", cifra: "XIX", unidad: "el siglo en que nació el juguete de fábrica" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una industria que factura decenas de miles de millones al año y que sigue concentrando sus ventas en unas pocas semanas. Quedó también un debate que empezó entonces y sigue abierto. Un juguete muy definido, que solo puede usarse de una manera, ¿da menos juego que un palo o una caja de cartón? Los estudios sobre juego libre apuntan a que los materiales abiertos dan más margen. Y quedó una ironía: los juguetes más vendidos de la historia son piezas sueltas que no son nada hasta que alguien las monta.",
      },
    ],
  },
];
