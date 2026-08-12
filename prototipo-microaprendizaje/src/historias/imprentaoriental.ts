import type { Short } from "../shorts";

/* ==========================================================================
   La imprenta oriental.

   La imprenta europea de 1450 ya se contó en escritura.ts. Estos tres van de
   lo que pasó cuatro siglos antes en Asia, y sobre todo de por qué allí no
   produjo el mismo terremoto.

   La regla del tema: la respuesta está siempre en el NÚMERO DE SIGNOS. Con
   veintitantas letras, los tipos móviles son un negocio redondo; con miles
   de caracteres, componer una página cuesta más que tallarla entera. No se
   trata de quién fue más listo, sino de aritmética de taller.
   ========================================================================== */

export const IMPRENTA_ORIENTAL: Short[] = [
  {
    id: "tipos-de-barro",
    titulo: "Tipos móviles de barro",
    gancho: "Un artesano chino talló cada carácter en barro y lo coció, hacia el año 1040.",
    categoria: "Imprenta oriental",
    color: "var(--plum)",
    encargo: "Piezas pequeñas de barro cocido con caracteres grabados, ordenadas en una bandeja.",
    fotos: [
      {
        archivo: "Beijing printing museum.wooden movable types.jpg",
        autor: "Tipos móviles chinos colocados en su bandeja, en el Museo de la Imprenta de Pekín. Fotografía de Popolon.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Beijing_printing_museum.wooden_movable_types.jpg",
        foco: "50% 45%",
        alt: "Decenas de piezas cúbicas con caracteres grabados en la cara superior, dentro de una bandeja sobre terciopelo rojo.",
      },
      {
        archivo: "Beijing printing museum.bronze movable types.jpg",
        autor: "Tipos móviles de bronce del mismo museo. Fotografía de Popolon.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Beijing_printing_museum.bronze_movable_types.jpg",
        foco: "50% 45%",
        alt: "Piezas metálicas cuadradas con caracteres en relieve, alineadas unas junto a otras.",
      },
      {
        archivo: "Yueshan Daozong - Calligraphy in Semi-Cursive Style (xing-caoshu) - 2003.353 - Cleveland Museum of Art.tif",
        autor: "Caligrafía en estilo semicursivo del monje Yueshan Daozong, siglo XVII. Cleveland Museum of Art.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Yueshan_Daozong_-_Calligraphy_in_Semi-Cursive_Style_(xing-caoshu)_-_2003.353_-_Cleveland_Museum_of_Art.tif",
        foco: "50% 50%",
        alt: "Grandes caracteres chinos trazados a pincel con tinta negra sobre papel envejecido.",
      },
      {
        archivo: "A page from an album of hand-colored woodblock prints depicting ancient sages - Vanderbilt Fine Arts Gallery - 1995.017c.tif",
        autor: "Página de un álbum de xilografías coloreadas a mano con sabios antiguos. Vanderbilt Fine Arts Gallery.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:A_page_from_an_album_of_hand-colored_woodblock_prints_depicting_ancient_sages_-_Vanderbilt_Fine_Arts_Gallery_-_1995.017c.tif",
        foco: "50% 45%",
        alt: "Estampa antigua coloreada a mano con figuras de túnica larga sobre un fondo claro.",
      },
    ],
    entrada:
      "China, hacia el año 1040. Un artesano tiene una idea que, por suerte para nosotros, un funcionario y científico de la época se molesta en describir por escrito con todo lujo de detalles: en lugar de tallar una página entera en un bloque de madera, que es como se venía haciendo desde hacía siglos, tallar cada carácter por separado en una pastilla de barro, cocerla hasta que endurezca y componer con esas piezas cualquier texto que haga falta. Es exactamente el principio que Europa descubrirá cuatro siglos más tarde, y en China no llegó a imponerse. El motivo tiene que ver con el propio idioma.",
    paginas: [
      {
        rotulo: "La bandeja",
        texto:
          "El procedimiento que describe aquel funcionario es minucioso. Los tipos de barro cocido se colocan sobre una plancha de hierro cubierta con una pasta de resina, cera y ceniza de papel; se calienta la plancha por debajo para que la pasta se reblandezca y se aprietan todos los caracteres con una tabla plana para que queden exactamente a la misma altura. Al enfriarse, la pasta endurece y sujeta la composición como un bloque sólido. Se imprime, se vuelve a calentar y los tipos se sueltan solos, limpios y listos para el texto siguiente.",
        destacado: { tipo: "frase", frase: "Se calentaba la plancha y los tipos se soltaban solos." },
      },
      {
        rotulo: "El problema",
        texto:
          "El sistema funcionaba, y aun así no desplazó a la técnica anterior. La razón es el número de signos. Para imprimir en chino hacen falta varios miles de caracteres distintos, y de los más frecuentes hay que tener veinte o treinta copias de cada uno, así que un taller necesitaba decenas de miles de piezas guardadas en armarios giratorios, y un operario experto tardaba muchísimo en localizar cada una. Tallar la página entera en un bloque de madera, en cambio, lo hacía un tallista en un día y servía para reimprimir esa página durante años.",
        destacado: { tipo: "cifra", cifra: "1040", unidad: "el año de los primeros tipos móviles" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una técnica que se siguió usando de forma minoritaria durante siglos, con tipos de madera, de bronce y de estaño, y quedó sobre todo la impresión con bloques tallados, que en Asia fue la normal y produjo cantidades enormes de libros mucho antes que en Europa. La lección es útil contra la idea de que la mejor tecnología se impone sola: el sistema de tipos sueltos era más flexible y perdió durante ochocientos años, sencillamente porque en una escritura de miles de signos no salía a cuenta. La misma idea, con veintitantas letras, sí lo cambió todo.",
      },
    ],
  },
  {
    id: "el-libro-coreano",
    titulo: "Corea imprimió antes",
    gancho: "Se imprimió en un templo coreano en 1377, setenta y ocho años antes que la Biblia de Gutenberg.",
    categoria: "Imprenta oriental",
    color: "var(--slate)",
    encargo: "Un libro antiguo abierto con caracteres impresos en columnas verticales.",
    fotos: [
      {
        archivo: "Haeinsa Temple 04.jpg",
        autor: "Pabellón del templo de Haeinsa, en Corea del Sur, donde se guarda la mayor colección de tacos de imprenta budistas. Fotografía de Bernard Gagnon.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Haeinsa_Temple_04.jpg",
        foco: "50% 45%",
        alt: "Pabellón coreano de madera con tejado curvo y aleros pintados, con macetas de crisantemos delante.",
      },
      {
        archivo: "Early Metal Blocks, Cheongju Early Printing Museum.jpg",
        autor: "Tipos metálicos antiguos en el Museo de la Imprenta Antigua de Cheongju, Corea del Sur.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Early_Metal_Blocks,_Cheongju_Early_Printing_Museum.jpg",
        foco: "50% 50%",
        alt: "Piezas metálicas pequeñas con caracteres grabados, colocadas en filas dentro de una vitrina.",
      },
      {
        archivo: "Haeinsa Temple 03.jpg",
        autor: "Patio y edificios del templo de Haeinsa. Fotografía de Bernard Gagnon.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Haeinsa_Temple_03.jpg",
        foco: "50% 50%",
        alt: "Conjunto de pabellones de madera de un templo coreano entre montañas boscosas.",
      },
      {
        archivo: "Haeinsa Temple 12.jpg",
        autor: "Otro rincón del recinto del templo de Haeinsa. Fotografía de Bernard Gagnon.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Haeinsa_Temple_12.jpg",
        foco: "50% 50%",
        alt: "Muros de piedra y edificios de madera de un monasterio coreano, con escaleras y árboles.",
      },
    ],
    entrada:
      "Corea, 1377. En el templo de una ciudad del centro del país se imprime una antología budista en dos volúmenes usando tipos de metal fundidos uno a uno, en un taller que llevaba décadas perfeccionando el sistema. Es la obra impresa con tipos metálicos más antigua que se conserva en el mundo entero, setenta y ocho años anterior a la Biblia europea de 1455 con la que se suele empezar, en todos los libros de texto, la historia de la imprenta. Y sin embargo no cambió nada. Esa es la parte interesante del asunto.",
    paginas: [
      {
        rotulo: "Fundir en arena",
        texto:
          "La técnica coreana se conoce bien porque está descrita y porque se han conservado tipos. Se tallaba cada carácter en madera de haya, se hincaba en una caja con arena de playa muy fina y humedecida para dejar la huella, se retiraba la madera y se vertía en el hueco una aleación de bronce fundido. Cada tipo salía así idéntico al modelo. El Estado creó en 1403 una fundición oficial de tipos, que llegó a producir cientos de miles de piezas y que imprimió obras de agricultura, medicina y astronomía por orden real.",
        destacado: { tipo: "frase", frase: "El molde de cada letra se hacía en arena de playa." },
      },
      {
        rotulo: "En un armario",
        texto:
          "Del libro de 1377 se conserva solo el segundo volumen, y está en la biblioteca nacional de Francia. Llegó allí porque lo compró a finales del siglo XIX un diplomático francés destinado en el país, aficionado a los libros antiguos, y acabó en una colección que se donó al Estado. Pasó décadas catalogado sin que nadie reparara en su importancia, hasta que en 1972 una bibliotecaria coreana que trabajaba allí lo identificó y lo presentó en una exposición internacional. Corea reclama su devolución desde entonces, y Francia no la ha concedido.",
        destacado: { tipo: "cifra", cifra: "1377", unidad: "el año de impresión" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un reconocimiento oficial: el libro figura desde 2001 en el registro de la memoria del mundo de la organización cultural de Naciones Unidas, y su nombre da título a un premio internacional sobre conservación documental. Y quedó una precisión que conviene hacer sin exagerar en ninguna dirección: en Asia se imprimió antes y con tipos de metal, pero fue el sistema europeo el que provocó la avalancha de libros, porque combinaba tipos móviles, una prensa de tornillo, una tinta grasa y un alfabeto de veintitantos signos. Sin lo último, lo demás rinde mucho menos.",
      },
    ],
  },
  {
    id: "un-alfabeto-de-encargo",
    titulo: "Un rey diseñó un alfabeto",
    gancho: "Coreano, 1443: veintiocho letras diseñadas desde cero, con la forma de la boca al pronunciarlas.",
    categoria: "Imprenta oriental",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Caracteres coreanos sencillos trazados con pincel sobre papel claro.",
    entrada:
      "Corea, 1443. El país escribe con caracteres chinos, que exigen años de estudio y que solo domina una minoría de funcionarios y nobles. El rey encarga a un grupo de eruditos de palacio una solución radical: crear desde cero un sistema de escritura propio, sencillo, que cualquiera pueda aprender en unos días. Se publica tres años después con un prólogo que explica exactamente para qué se ha hecho.",
    paginas: [
      {
        rotulo: "La forma",
        texto:
          "El resultado es uno de los pocos alfabetos de la historia de los que se conoce el autor, la fecha y el motivo. Tiene veintiocho letras, y su diseño no es arbitrario: los signos de las consonantes reproducen la forma que adoptan la lengua, los dientes o los labios al pronunciar ese sonido, de modo que la letra es un pequeño dibujo del aparato que la produce. Las vocales se construyen con tres trazos básicos combinados. Las letras se agrupan además en bloques cuadrados, una por sílaba, para que la página se parezca a lo que ya se leía.",
        destacado: { tipo: "frase", frase: "Cada consonante dibuja la posición de la boca al decirla." },
      },
      {
        rotulo: "La resistencia",
        texto:
          "El prólogo real dice sin rodeos que la gente corriente no puede expresar lo que necesita porque la escritura le queda lejos, y que eso le duele al rey. Los funcionarios letrados se opusieron con fuerza, y no por razones estéticas: su posición social dependía de años de estudio de una escritura difícil, y un sistema que se aprende en una semana la volvía inútil como barrera. Un alto cargo escribió que adoptarlo equivalía a renunciar a la civilización. Durante siglos se lo llamó despectivamente escritura de mujeres y escritura vulgar, y estuvo prohibido durante una temporada.",
        destacado: { tipo: "cifra", cifra: "28", unidad: "letras tenía el alfabeto original" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el alfabeto, que se impuso definitivamente en el siglo XX y que hoy usan las dos Coreas, con veinticuatro letras tras perderse cuatro por el camino. Corea del Sur celebra cada octubre una fiesta nacional dedicada a él, algo que no hace ningún otro país con su escritura. Y quedó un caso rarísimo en la historia de la cultura: casi todos los sistemas de escritura del mundo son el resultado de siglos de deriva sin autor, y este se diseñó a propósito, en una fecha concreta, para que la gente que no podía estudiar pudiera escribir.",
      },
    ],
  },
];
