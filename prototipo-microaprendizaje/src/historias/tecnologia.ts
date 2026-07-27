import type { Short } from "../shorts";

/* ==========================================================================
   Tecnología.

   El tema con más mitos por metro cuadrado, porque el sector se cuenta a sí
   mismo en forma de leyenda: el garaje, el genio, la anécdota redonda. Casi
   ninguna resiste ir a las fuentes.

   La regla del tema: se busca el documento. El cuaderno con la polilla pegada
   está en un museo y se puede leer lo que pone; el argumento de que QWERTY se
   diseñó para frenar al mecanógrafo no tiene detrás ningún papel de la época.
   Cuando existe el documento, se cita; cuando no, se dice que no existe.

   Y se prefiere lo invisible: el cable en el fondo del mar antes que el
   aparato de la mano. Lo que sostiene el mundo digital casi nunca sale en la
   foto, y contarlo es lo que hace que alguien mire el móvil de otra manera.
   ========================================================================== */

export const TECNOLOGIA: Short[] = [
  {
    id: "qwerty-mito",
    titulo: "QWERTY no se diseñó para que escribas despacio",
    gancho: "La historia del teclado que te frena a propósito no tiene ni un documento detrás.",
    categoria: "Tecnología",
    color: "var(--slate)",
    encargo: "Las teclas de una máquina de escribir antigua, muy de cerca, metal desgastado.",
    entrada:
      "Todo el mundo ha oído la explicación: las primeras máquinas de escribir se atascaban si ibas rápido, así que se repartieron las letras para obligarte a ir despacio. Es una historia perfecta —el diseño malo a propósito— y por eso se repite tanto. El problema es que cuando se buscan pruebas de que alguien lo hiciera con esa intención, no aparecen.",
    paginas: [
      {
        rotulo: "El origen real",
        texto:
          "La distribución la fue ajustando Christopher Latham Sholes entre 1868 y 1873, y sus primeros prototipos llevaban las letras casi en orden alfabético. Los cambios fueron sucesivos y respondieron a varias presiones a la vez. Los investigadores japoneses Koichi y Motoko Yasuoka rastrearon en 2011 el proceso y señalaron un factor poco conocido: los primeros clientes serios fueron telegrafistas que transcribían morse en directo, y pidieron mover letras para transcribir más deprisa las secuencias que más aparecían. Es decir, parte del teclado está optimizado para la velocidad de un oficio que ya no existe.",
        destacado: {
          tipo: "frase",
          frase: "El teclado no lo diseñó un ingeniero: lo desgastaron sus clientes.",
        },
      },
      {
        rotulo: "El retador",
        texto:
          "En 1936, August Dvorak patentó una distribución alternativa que colocaba las vocales y las consonantes más frecuentes en la fila central. Sobre el papel es mejor, y durante décadas se citó un estudio de la Marina estadounidense que demostraba mejoras enormes de productividad. En <strong>1990</strong>, los economistas Stan Liebowitz y Stephen Margolis fueron a mirar aquel estudio y encontraron dos cosas incómodas: lo había supervisado el propio Dvorak y no tenía grupo de control decente. Los experimentos posteriores encuentran ventajas pequeñas, del orden de un puñado de puntos porcentuales, que no compensan reaprender a teclear.",
        destacado: { tipo: "cifra", cifra: "1873", unidad: "el año en que QWERTY se congeló" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "El caso se usa en economía como ejemplo de dependencia del camino: una decisión tomada por motivos que ya no existen queda congelada porque el coste de cambiarla lo pagan millones de personas a la vez. Lo curioso es que la máquina de escribir desapareció, el telégrafo desapareció, las palancas que se atascaban desaparecieron, y la distribución sobrevivió a las tres. Está en el móvil, en la pantalla táctil de un cajero y en los teclados virtuales de realidad aumentada, donde no hay ninguna pieza que se pueda atascar y sin embargo la Q sigue arriba a la izquierda.",
      },
    ],
  },

  {
    id: "primer-bug",
    titulo: "El primer «bicho» de la informática era una polilla",
    gancho: "Está pegado con cinta en un cuaderno de 1947, y la nota lo delata todo.",
    categoria: "Tecnología",
    color: "var(--sage)",
    encargo: "Una página de cuaderno técnico de los años cuarenta con una polilla pegada.",
    entrada:
      "El 9 de septiembre de 1947, el equipo del ordenador Mark II de Harvard buscaba por qué la máquina daba resultados erróneos. Al abrir el relé número setenta del panel F encontraron una polilla aplastada entre los contactos. La sacaron, la pegaron con cinta adhesiva en el cuaderno de incidencias y escribieron una frase al lado que ha resultado ser más interesante que el bicho.",
    paginas: [
      {
        rotulo: "La nota",
        texto:
          "Lo que anotaron fue: «Primer caso real de un bicho encontrado». La palabra clave es <em>real</em>. Si la nota tuviera gracia solo por el insecto, no habría hecho falta subrayar que aquel era el primero de verdad; la broma funciona precisamente porque el término ya llevaba décadas usándose para fallos que no tenían nada de biológico. Thomas Edison lo empleaba en su correspondencia en 1878 para describir los defectos que aparecían al poner en marcha un invento, y en la ingeniería eléctrica del cambio de siglo era vocabulario corriente. El equipo de Harvard no bautizó nada: se encontró con un chiste servido.",
        destacado: {
          tipo: "frase",
          frase: "«Primer caso REAL de un bicho.» La palabra ya existía, y por eso tiene gracia.",
        },
      },
      {
        rotulo: "Quién estaba",
        texto:
          "La anécdota se asocia siempre a Grace Hopper, que trabajaba en aquel laboratorio y la contó durante años en charlas y entrevistas con enorme gracia. Ella misma no reclamó haber encontrado la polilla; el cuaderno no dice quién la sacó del relé. Hopper hizo por la informática cosas bastante más grandes que esa historia: dirigió el desarrollo del primer compilador y estuvo detrás del lenguaje COBOL, la idea de que se pudiera programar con palabras en inglés en vez de con números. El cuaderno, con la polilla todavía pegada, se conserva en el Museo Nacional de Historia Americana del Smithsonian.",
        destacado: { tipo: "cifra", cifra: "1878", unidad: "Edison ya escribía «bug» por avería" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El término se ha quedado tan pegado al oficio que ha generado su propia familia: depurar, cazar, reproducir, informe de fallo. Y ha traído consigo un problema de fondo que se discute cada vez que ocurre algo grave: llamar «bicho» a un error da la impresión de que llegó volando de fuera, cuando lo normal es que lo haya escrito alguien. Varios ingenieros llevan años proponiendo hablar de defectos en vez de bichos, precisamente por eso. La palabra, mientras tanto, sigue ganando por goleada, con polilla de 1947 y todo.",
      },
    ],
  },

  {
    id: "cables-submarinos",
    titulo: "Internet viaja por el fondo del mar, no por satélite",
    gancho: "Casi todo lo que cruza un océano lo hace por un cable del grosor de una manguera.",
    categoria: "Tecnología",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una sección de cable submarino cortada, con las capas de acero y la fibra dentro.",
    entrada:
      "La imagen mental de internet es una nube, y algo que viaja por el aire de antena en antena. La realidad es mucho más antigua y mucho menos etérea: en torno al 99 % del tráfico de datos intercontinental pasa por cables tendidos en el fondo del océano, y el trazado de esas rutas se parece muchísimo al de los cables telegráficos del siglo XIX.",
    paginas: [
      {
        rotulo: "La red de verdad",
        texto:
          "Hay más de quinientos cables submarinos activos y suman más de un millón cuatrocientos mil kilómetros, suficiente para dar treinta y cinco vueltas a la Tierra. Los tiende una flota de barcos especializados que va soltando el cable desde la bodega mientras navega, y en aguas poco profundas un arado lo entierra bajo el lecho marino. En pleno océano, el cable puede ser tan fino como una manguera de jardín: allí no hay anclas ni redes de arrastre, así que no necesita blindaje. La fibra óptica que lleva dentro es más delgada que un pelo.",
        destacado: { tipo: "cifra", cifra: "99 %", unidad: "del tráfico entre continentes va por cable" },
      },
      {
        rotulo: "Por qué no satélite",
        texto:
          "La razón es la física, no el precio. Un satélite geoestacionario está a unos treinta y seis mil kilómetros, así que la señal recorre setenta y dos mil ida y vuelta y llega con un retardo de más de medio segundo, insufrible para una llamada o para una operación financiera. El cable, además, mueve muchísimos más datos: un solo cable moderno transporta más capacidad que todas las constelaciones de satélites juntas. Los satélites siguen siendo insustituibles donde no llega el cable —barcos, aviones, zonas remotas—, pero como carretera principal del planeta perdieron hace décadas.",
        destacado: {
          tipo: "frase",
          frase: "La nube está enterrada bajo el fondo del mar.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Se rompen constantemente: hay entre cien y doscientas averías al año, y la enorme mayoría las causan anclas de barcos y redes de arrastre en aguas someras, no tiburones, pese a que los vídeos de tiburones mordiendo un cable circulen desde hace años. Repararlos consiste en enviar un barco, izar el cable con un garfio desde el fondo, cortar el tramo dañado y empalmar uno nuevo; puede tardar semanas. Y toda esa red descansa sobre un puñado de puntos de entrada a tierra: unas casetas discretas junto a la playa donde el cable sale del agua, sin ningún cartel que lo anuncie.",
      },
    ],
  },
];
