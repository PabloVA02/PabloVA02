import type { Short } from "../shorts";

/* ==========================================================================
   Los maniquies.

   Pieza de comercio, no de moda. Existen porque la ropa se empezo a
   fabricar antes de saber quien la iba a llevar, y porque el cristal grande
   convirtio la tienda en un escenario. El tema se estropea si se cuenta
   como historia de estilo.

   La regla del tema: la razon economica delante (ropa por tallas,
   escaparate de una pieza) y siempre el MATERIAL, que es lo que manda:
   mimbre porque pesa poco, cera porque se modela, escayola porque aguanta
   el calor. Nada de palabras de oficio sin traducir. Y se distingue el
   maniqui que vende del que sirve para otra cosa, que no tienen las mismas
   medidas ni de lejos.
   ========================================================================== */

export const MANIQUIES: Short[] = [
  {
    id: "el-cuerpo-de-mimbre",
    titulo: "Los maniquíes eran cestas",
    gancho: "Mientras la ropa se hacía a medida no hacía falta enseñarla puesta. En cuanto se fabricó por tallas, sí.",
    categoria: "Maniquíes",
    color: "var(--clay)",
    encargo: "Un maniqui de mimbre trenzado sin cabeza, sobre un pie de madera.",
    fotos: [
      {
        archivo: "Mannequin oxford st window (Unsplash).jpg",
        autor: "Un maniquí en un escaparate de Oxford Street, Londres. Fotografía de Clem Onojeghuo.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Mannequin_oxford_st_window_(Unsplash).jpg",
        foco: "50% 40%",
        alt: "El rostro de un maniquí de peluca oscura tras un cristal, con la mano levantada junto a la cara.",
      },
      {
        archivo: "Fourmi en osier.JPG",
        autor: "Una figura trenzada en mimbre, en el pueblo cestero de Villaines-les-Rochers, Francia. Fotografía de Als33120.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Fourmi_en_osier.JPG",
        foco: "50% 50%",
        alt: "Una hormiga gigante tejida con varas de mimbre, colgada sobre una pared de ladrillo y piedra.",
      },
      {
        archivo: "Galerie Lafayette Haussmann Dome.jpg",
        autor: "La cúpula de vidrio de los almacenes Galeries Lafayette, en París. Fotografía de Benh Lieu Song.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Galerie_Lafayette_Haussmann_Dome.jpg",
        foco: "50% 45%",
        alt: "Una cúpula enorme de vidrio de colores sobre balcones dorados vistos desde abajo.",
      },
      {
        archivo: "Show window, mannequin, Fortuna department store, Fontana department store Fortepan 76444.jpg",
        autor: "Escaparate de unos grandes almacenes con maniquíes de caballero, 1990. Fortepan.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Show_window,_mannequin,_Fortuna_department_store,_Fontana_department_store_Fortepan_76444.jpg",
        foco: "50% 40%",
        alt: "Maniquíes de traje y sombrero sentados en un escaparate, en blanco y negro, con trajes colgados detrás.",
      },
    ],
    entrada:
      "Francia e Inglaterra, mediados del siglo XIX. La máquina de coser y los primeros patrones por tallas permiten hacer ropa antes de saber quién se la va a poner, que es un cambio mucho más grande de lo que parece. Hasta entonces el cliente elegía la tela, un sastre le tomaba medidas y la prenda no existía hasta que él la encargaba, así que a nadie se le ocurría enseñar un vestido puesto: no había nada que enseñar. De pronto hay prendas ya hechas colgando en una tienda y hay que convencer a un desconocido de que esa, en concreto, le va a quedar bien.",
    paginas: [
      {
        rotulo: "El mimbre",
        texto:
          "Los primeros maniquíes de tienda no eran figuras humanas ni lo pretendían. Eran bustos de mimbre trenzado, es decir, cestas con forma de torso, montadas sobre un pie de madera. No tenían cabeza, ni brazos, ni cara: solo servían para que un vestido colgara con su forma. El mimbre se eligió porque pesa poco, se teje en cualquier forma y aguanta una tela pesada encima. Un torso de yeso o de madera maciza habría sido imposible de mover para un dependiente solo. Y el peso importaba, porque la ropa de señora llevaba entonces armazones de metal y varias capas de tejido.",
        destacado: { tipo: "frase", frase: "Eran cestas de mimbre con forma de torso, sin cabeza." },
      },
      {
        rotulo: "La cera",
        texto:
          "Lo que cambió el maniquí fue el escaparate, y en concreto la posibilidad de hacer cristales grandes. Hacia 1870 las fábricas de vidrio empezaron a servir planchas de varios metros, sin barrotes que las partieran. Con eso la tienda se convirtió en un escenario visible entero desde la acera de enfrente. Para llenarlo hacían falta figuras de cuerpo entero, y los comerciantes fueron a buscarlas a los museos de cera. Eran los únicos talleres que sabían modelar una cara, unas manos y un torso con aspecto de persona. La cera tenía un defecto que acabó con ella: con el sol o con el calor de las lámparas se ablandaba y las caras se torcían.",
        destacado: { tipo: "cifra", cifra: "1870", unidad: "hacia entonces llegó el cristal grande" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el cambio de material: la cera se sustituyó por escayola, y la escayola por plástico. Los dos aguantan el calor del escaparate sin deformarse, que era lo único que se les pedía. Quedó el oficio de vestir escaparates, con equipo propio y calendario de cambios en las tiendas grandes. Quedaron los bustos de mimbre en los talleres de costura, donde se sigue montando el patrón encima de ellos. Son los mismos del siglo XIX y aún se venden, porque nadie ha encontrado nada mejor. Y quedó la razón de que existan, que se olvida al mirarlos: no enseñan una prenda, sino a alguien dentro de ella.",
      },
    ],
  },
  {
    id: "la-talla-del-escaparate",
    titulo: "El maniquí no tiene talla",
    gancho: "Un maniquí de escaparate no reproduce un cuerpo: reproduce un perchero que sostiene la ropa sin arrugas.",
    categoria: "Maniquíes",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un maniqui blanco liso de tienda, sin rasgos en la cara, con una camisa puesta.",
    fotos: [
      {
        archivo: "Dress form IMGP0821.jpg",
        autor: "Maniquí de sastre de la primera mitad del siglo XX, forrado de lino y rematado con un pomo de madera.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADress%20form%20IMGP0821.jpg",
        foco: "50% 58%",
        alt: "Busto de maniquí de costura forrado en tela cruda, sin brazos ni cabeza, con un remate de madera torneada arriba.",
      },
      {
        archivo: "Life-sized and smaller scale Dress forms.jpg",
        autor: "Maniquíes de costura a tamaño real y a escala reducida, de los que se usan para probar patrones.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ALife-sized%20and%20smaller%20scale%20Dress%20forms.jpg",
        foco: "50% 50%",
        alt: "Varios bustos de maniquí de distintos tamaños puestos en fila sobre sus pies metálicos.",
      },
      {
        archivo: "Dress forms of type made by members of Extension classes in clothing under the - (3855498503).jpg",
        autor: "Maniquíes hechos a mano en unas clases de costura de hacia 1914. Biblioteca de la Universidad de Cornell.",
        licencia: "No restrictions",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADress%20forms%20of%20type%20made%20by%20members%20of%20Extension%20classes%20in%20clothing%20under%20the%20-%20(3855498503).jpg",
        foco: "50% 50%",
        alt: "Fila de maniquíes de tela caseros, cada uno con una silueta distinta, apoyados contra una pared.",
      },
      {
        archivo: "Bond Street Winter Fashion 2016 (30907796334).jpg",
        autor: "Escaparate de moda en Bond Street, Londres, en diciembre de 2016.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ABond%20Street%20Winter%20Fashion%202016%20(30907796334).jpg",
        foco: "50% 50%",
        alt: "Escaparate iluminado con maniquíes vestidos y decoración de invierno detrás del cristal.",
      },
    ],
    entrada:
      "Comercio de ropa, desde los años veinte del siglo XX. Cuando el maniquí de escayola sustituye al antiguo de cera, el fabricante tiene que decidir qué medidas exactas le da a cada modelo, y esa decisión, que va a acabar afectando a cómo se ve la gente, no la toma un sastre ni un médico ni nadie que estudie cuerpos. La toma quien vende, y la toma con un criterio comercial muy concreto y perfectamente razonable desde su lado del mostrador: que la prenda caiga recta, sin bolsas ni arrugas, mirada desde cualquier punto de la calle y a cualquier hora.",
    paginas: [
      {
        rotulo: "El perchero",
        texto:
          "Un maniquí de escaparate está hecho como un perchero con forma de persona, no como el retrato de nadie. Los hombros se hacen rectos y algo anchos, porque una chaqueta colgada de hombros caídos hace pliegues feos. La espalda se deja plana para que la tela quede tirante y se vea bien el corte de la prenda. Las caderas se hacen estrechas, porque un pantalón que roza por dentro marca arrugas horizontales enseguida. Y muchos no llevan cabeza ni rasgos en la cara, para que el cliente no se compare con ninguna. El resultado es que la ropa se ve mejor ahí puesta que puesta sobre cualquier persona.",
        destacado: { tipo: "frase", frase: "Los hombros van rectos porque los caídos hacen pliegues." },
      },
      {
        rotulo: "Las medidas",
        texto:
          "Durante décadas, las medidas del maniquí de mujer se apartaron mucho de las de la gente. Eso no es una impresión, porque varios países han medido a miles de personas para fijar sus tallas oficiales. Comparando esos estudios con los catálogos de maniquíes, la diferencia era de varias tallas. A partir de ahí se discutió si un escaparate lleno de cuerpos así influye en cómo se ve la gente a sí misma. Algunas cadenas empezaron a fabricar maniquíes con más medidas y a mezclarlos en el mismo escaparate. Otras siguieron igual, con el argumento de que aquello es una herramienta de venta y no un espejo.",
        destacado: { tipo: "frase", frase: "El maniquí de tienda iba varias tallas por debajo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un objeto que cuenta más del comercio que de la moda y que casi nadie mira con atención. Quedaron los maniquíes sin cara, hoy mayoría en las tiendas de ropa de cualquier calle. Y quedó otra familia de maniquíes que no tiene nada que ver con vender, aunque se llame igual. Son los de los ensayos de choque de coches y los de las facultades de medicina. Esos sí están hechos con medidas reales, y algunos llevan sensores dentro que miden dónde golpea el cinturón. La diferencia lo resume todo: el del escaparate imita un cuerpo para vender ropa; el otro, para salvar a quien la lleve.",
      },
    ],
  },
  {
    id: "las-figuras-que-se-mueven",
    titulo: "El escaparate de Navidad",
    gancho: "Figuras con motor, discos y varillas que repiten el mismo gesto durante seis semanas seguidas sin pararse.",
    categoria: "Maniquíes",
    color: "var(--ochre)",
    encargo: "Una figura mecanica de escaparate vista por detras, con varillas y un motor pequeno.",
    entrada:
      "Grandes ciudades de Europa y de Estados Unidos, desde comienzos del siglo XX. Las tiendas hacen cuentas y comprueban una cosa que las condiciona entera: buena parte de las ventas de todo el año se concentran en las seis semanas anteriores a la Navidad. Con esa aritmética encima, compiten por lo único que pueden competir en la calle, que es detener durante unos segundos al que pasa por delante del cristal. Y lo que detiene a la gente, se descubre pronto, no es más ropa colgada: son figuras que se mueven. Y desde entonces se preparan con casi un año de antelación.",
    paginas: [
      {
        rotulo: "Los discos",
        texto:
          "El mecanismo que mueve esas figuras es viejo y apenas ha cambiado en cien años. Un motor pequeño gira despacio y arrastra un eje con varios discos montados, uno detrás de otro. Los discos no son redondos: tienen el borde lleno de bultos y de entrantes, y se llaman levas. Contra el borde de cada disco roza una varilla, que sube cuando pasa un bulto y baja cuando pasa un hueco. Esa varilla es la que mueve un brazo, una cabeza o un párpado de la figura, siempre el mismo recorrido. Cambiando el borde de los discos se cambia el gesto, sin tocar el motor ni la figura.",
        destacado: { tipo: "frase", frase: "El borde con bultos del disco decide todo el movimiento." },
      },
      {
        rotulo: "Las seis semanas",
        texto:
          "La dificultad de estos escaparates no está en el movimiento, sino en el tiempo que tienen que aguantarlo. Una figura funciona entre diez y catorce horas al día durante seis semanas, y nadie puede pararla para engrasarla. Eso son varios millones de repeticiones, así que una pieza mal calculada se parte antes de Nochebuena. Los talleres que las fabrican tienen cada figura meses en marcha dentro de una nave, probándola sin descanso. Lo que más vigilan es el ruido, porque un chirrido que se oye a través del cristal estropea el efecto entero. Por eso muchas piezas son de nailon en vez de metal: rozan más callado y no necesitan grasa.",
        destacado: { tipo: "cifra", cifra: "6", unidad: "semanas seguidas moviéndose sin parar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una costumbre que varias ciudades mantienen aunque hoy vendan casi todo por internet. Los escaparates se empiezan a preparar con casi un año de antelación y se guardan de una Navidad a otra. Quedaron talleres que viven solo de esto y que reparan figuras de hace cincuenta años. Quedó la cola en la acera, que es la prueba de que el truco sigue funcionando igual que el primer día. Y quedó la cuenta que hay detrás de tanto trabajo, que es una cuenta de segundos. Un escaparate quieto se mira dos segundos, y uno que se mueve retiene lo bastante para que alguien entre.",
      },
    ],
  },
];
