import type { Short } from "../shorts";

/* ==========================================================================
   La aguja.

   Una punta con un agujero que ha cambiado el mapa del mundo, la medicina
   y la música. El tema se estropea si se convierte en historia de la
   costura.

   La regla del tema: cada short trata la aguja como UNA HERRAMIENTA DE
   PRECISIÓN y explica qué hace exactamente su punta antes de contar para
   qué se usó. Las tres son la misma idea aplicada a la piel, al cuerpo y
   a un surco de plástico.
   ========================================================================== */

export const AGUJA: Short[] = [
  {
    id: "la-aguja-con-ojo",
    titulo: "La aguja que pobló el frío",
    gancho: "Sin ropa cosida a medida no se puede vivir a treinta bajo cero. La aguja es la herramienta que abrió el norte.",
    categoria: "Prehistoria",
    color: "var(--clay)",
    encargo: "Aguja de hueso paleolítica con su ojo perforado, junto a una regla de escala.",
    fotos: [
      {
        archivo: "Aiguille os 246.1 Global.jpg",
        autor: "Aguja de hueso del Magdaleniense, hallada en la cueva de Gourdan, Francia. Mide 59 milímetros. Fotografía de Didier Descouens.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Aiguille_os_246.1_Global.jpg",
        foco: "50% 50%",
        alt: "Una aguja de hueso pulida vista por sus cuatro caras sobre fondo negro, con el ojo perforado en el extremo grueso.",
      },
      {
        archivo: "Kapataq BM Am2001 15 1.jpg",
        autor: "Chaqueta de invierno con capucha, de piel de zorro, hecha en Qaanaaq, en el norte de Groenlandia. British Museum.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Kapataq_BM_Am2001_15_1.jpg",
        foco: "50% 40%",
        alt: "Una chaqueta de piel blanca y parda con capucha, cosida a medida, expuesta sobre un maniquí.",
      },
      {
        archivo: "Sewing needle eye with thread.jpg",
        autor: "El ojo de una aguja moderna con el hilo pasado, visto de muy cerca. Fotografía de Dmeranda.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sewing_needle_eye_with_thread.jpg",
        foco: "50% 50%",
        alt: "Macro del extremo de una aguja de acero con un hilo blanco pasado por el agujero alargado.",
      },
      {
        archivo: "Spruce trees in the snow (52828594353).jpg",
        autor: "Abetos en la tundra nevada del refugio de Selawik, Alaska. Fotografía de Lisa Hupp para el USFWS.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Spruce_trees_in_the_snow_(52828594353).jpg",
        foco: "50% 50%",
        alt: "Abetos oscuros y dispersos sobre una llanura completamente nevada, bajo un cielo pálido.",
      },
    ],
    entrada:
      "Siberia y Europa, desde hace unos cuarenta mil años. Las agujas de hueso con un agujero perforado en un extremo empiezan a aparecer en los yacimientos justo cuando el ser humano se mete en las zonas más frías del planeta, y eso no es una casualidad ni una coincidencia bonita. Una piel echada por encima de los hombros abriga bastante poco, porque el aire entra y sale por todos lados. Una prenda cosida, cerrada y ajustada al cuerpo cambia por completo la temperatura que un ser humano puede soportar, y con ella el mapa de dónde puede vivir.",
    paginas: [
      {
        rotulo: "El aire quieto",
        texto:
          "La ropa no calienta por sí misma, porque no produce ni un poco de calor. Lo que hace es atrapar una capa de aire quieto entre la piel y el exterior. El aire quieto es un aislante buenísimo, y el aire en movimiento se lleva el calor enseguida. Una piel suelta sobre los hombros deja entrar aire por todos los lados y no atrapa nada. Una prenda cosida cierra las aberturas y mantiene esa capa quieta pegada al cuerpo. Por eso las prendas de los pueblos árticos se cosen con la costura por dentro y muy apretada.",
        destacado: { tipo: "frase", frase: "La ropa no calienta: atrapa una capa de aire quieto." },
      },
      {
        rotulo: "Hacer el ojo",
        texto:
          "Fabricar una aguja de hueso es más difícil de lo que parece y era un trabajo de especialista. Primero hay que sacar una astilla larga y recta de un hueso largo y pulirla contra una piedra. Lo complicado es el ojo, porque perforar un agujero de un milímetro sin romper la pieza cuesta horas. Se hacía girando una punta de pedernal muy fina, atacando por las dos caras hasta que se juntaban. Una aguja rota se reaprovechaba, y en los yacimientos aparecen muchas más rotas que enteras. El hilo era tendón de animal, que se seca duro y se ablanda al mascarlo un rato.",
        destacado: { tipo: "cifra", cifra: "40000", unidad: "años tienen las agujas con ojo más antiguas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una herramienta que no ha cambiado de forma en cuarenta mil años, cosa muy poco frecuente. Una aguja de acero de hoy y una de hueso del Paleolítico se distinguen por el material y por nada más. Quedó también una pista arqueológica de primer orden, porque encontrar agujas en un yacimiento indica ropa ajustada. La ropa no se conserva casi nunca, y la aguja de hueso sí aguanta enterrada milenios. Y quedó una de las pocas herramientas que hicieron posible un cambio de mapa, porque sin ella medio planeta habría seguido vacío.",
      },
    ],
  },
  {
    id: "la-aguja-hipodermica",
    titulo: "El número de la aguja engaña",
    gancho: "Cuanto más alto es el número, más fina es la aguja. La numeración viene de cómo se fabricaba el tubo.",
    categoria: "Medicina",
    color: "var(--slate)",
    encargo: "Varias agujas hipodérmicas de distintos calibres alineadas con sus capuchones de color.",
    entrada:
      "Escocia y Francia, 1853. Dos médicos desarrollan por separado el mismo aparato: una jeringa con una aguja hueca capaz de meter un líquido bajo la piel sin abrir la carne. Hasta entonces, un medicamento solo entraba por la boca o por una herida. La aguja hueca cambió la medicina y trajo consigo una numeración que sigue confundiendo a todo el mundo.",
    paginas: [
      {
        rotulo: "Estirar el tubo",
        texto:
          "Una aguja hipodérmica se fabrica a partir de un tubo de acero que se va estirando. Cada pasada por una hilera lo deja más largo y más estrecho, igual que un alambre. El número de la aguja cuenta cuántas pasadas ha recibido, así que más pasadas significan más número. Y más pasadas significan también menos diámetro, de modo que la escala funciona al revés de lo intuitivo. Una aguja del dieciocho es gruesa y se usa para sacar sangre o poner un gotero. Una del treinta es finísima y es la que llevan las plumas de insulina.",
        destacado: { tipo: "frase", frase: "Más pasadas por la hilera: más número y menos grosor." },
      },
      {
        rotulo: "El corte",
        texto:
          "La punta de una aguja no es un cono, sino un corte en bisel muy estudiado. Ese bisel tiene tres caras afiladas y separa las fibras de la piel en lugar de romperlas. Por eso duele menos y por eso el agujero se cierra solo en cuanto se saca la aguja. El ángulo del bisel cambia según el uso, porque uno más largo entra mejor y se dobla antes. Las agujas son de un solo uso también por eso, ya que la punta se mella en el primer pinchazo. Vista al microscopio, una aguja usada parece un anzuelo con la punta doblada.",
        destacado: { tipo: "cifra", cifra: "1853", unidad: "el año de la jeringa con aguja hueca" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una escala numerada al revés que confunde a cualquiera que se la encuentre por primera vez. Quedó también el problema de los pinchazos accidentales, que sigue siendo un riesgo laboral importante en sanidad. De ahí vienen las agujas con capuchón automático y los contenedores rígidos amarillos que hay en las consultas. Quedó una investigación constante para hacerlas más finas, porque el miedo a la aguja hace que mucha gente no se vacune. Ya existen parches con cientos de agujitas microscópicas que no llegan a tocar ningún nervio de la piel.",
      },
    ],
  },
  {
    id: "la-aguja-del-tocadiscos",
    titulo: "La aguja del disco",
    gancho: "El surco no es una línea: es un valle con dos paredes que se mueven. La aguja las sigue y tiembla.",
    categoria: "Música",
    color: "var(--plum)",
    curioso: true,
    encargo: "Punta de diamante de un tocadiscos apoyada en el surco, ampliada muchísimo.",
    entrada:
      "Estados Unidos, 1948. Sale al mercado el disco de vinilo de larga duración, que guarda la música en un surco en espiral de casi medio kilómetro de largo. La aguja que lo recorre es una punta de diamante que apoya con una fuerza minúscula. Lo que hace parece imposible: convertir la forma de una ranura en un sonido.",
    paginas: [
      {
        rotulo: "Dos paredes",
        texto:
          "Un surco de vinilo tiene forma de uve, con dos paredes inclinadas a cuarenta y cinco grados. Cada pared lleva grabado un canal del sonido, uno para el altavoz izquierdo y otro para el derecho. La onda no está dibujada en el fondo, sino ondulando las paredes hacia dentro y hacia fuera. La aguja va encajada entre las dos y sigue esas ondulaciones moviéndose en dos direcciones a la vez. Ese movimiento se transmite por un brazo minúsculo a una bobina metida en un imán. La bobina moviéndose genera una corriente eléctrica que reproduce la forma exacta del surco.",
        destacado: { tipo: "frase", frase: "Cada pared del surco lleva un canal del sonido." },
      },
      {
        rotulo: "El peso justo",
        texto:
          "La fuerza con la que la aguja apoya es uno de los ajustes más delicados de un tocadiscos. Suele estar entre uno y dos gramos, que es el peso de un par de clips. Con menos peso, la aguja salta en los pasajes fuertes y raya el disco al caer. Con más peso, aplasta el vinilo y va desgastando el surco un poco en cada escucha. Repartido en la punta diminuta de la aguja, ese par de gramos son presiones enormes. El vinilo se calienta y se deforma un instante bajo la aguja, y luego recupera la forma.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "gramos apoya la aguja sobre el disco" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un sistema completamente mecánico que compite todavía con la música digital en ventas. Quedó también la explicación de por qué un disco muy escuchado suena peor con los años. El desgaste redondea las ondulaciones más finas, que son justo las que llevan los agudos. Quedó una regla que los aficionados repiten, porque una aguja gastada destroza discos a toda velocidad. Y quedó una comparación que ayuda a hacerse una idea de la escala del asunto. Si el surco fuera del ancho de una carretera, la aguja sería un coche siguiendo cada bache a mil por hora.",
      },
    ],
  },
];
