import type { Short } from "../shorts";

/* ==========================================================================
   Televisión.

   El riesgo del tema es la crítica cultural: la caja tonta, los programas
   basura, la sobremesa. Opinión gratis que no informa de nada.

   La regla del tema: la televisión se cuenta como APARATO. Un chico que
   dibuja un esquema en la pizarra. Un disco de cartón agujereado que gira
   delante de una cámara. Cuatro varillas de aluminio dentro de un mando.
   Todo lo que después llamamos cultura televisiva salió de decisiones de
   ingeniería que se pueden explicar en tres frases.

   Y siempre se dice qué se veía exactamente: cuántas líneas, qué tamaño.
   ========================================================================== */

export const TELEVISION: Short[] = [
  {
    id: "chico-de-la-pizarra",
    titulo: "Un chico de catorce años",
    gancho: "Se le ocurrió arando un campo en surcos paralelos y lo explicó en la pizarra de su instituto.",
    categoria: "Televisión",
    color: "var(--slate)",
    encargo: "Un campo arado con surcos paralelos que se pierden en el horizonte.",
    fotos: [
      {
        archivo: "Early British television sets at the Early Television Museum June 2022 1.jpg",
        autor: "Dos televisores británicos de los años treinta, uno con espejo abatible sobre el tubo. Early Television Museum, Ohio. Fotografía de DogsRNice.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Early_British_television_sets_at_the_Early_Television_Museum_June_2022_1.jpg",
        foco: "50% 50%",
        alt: "Dos muebles de madera veteada con pantallas pequeñas y redondeadas y filas de mandos negros.",
      },
      {
        archivo: "17ЛО2И.jpg",
        autor: "Un tubo de rayos catódicos abierto, con el cañón de electrones en el cuello. Fotografía de Mister rf.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:17%D0%9B%D0%9E2%D0%98.jpg",
        foco: "50% 50%",
        alt: "Una ampolla de vidrio con forma de embudo, terminada en un cuello estrecho lleno de piezas metálicas.",
      },
      {
        archivo: "Prototype RCA color television at the Early Television Museum June 2022.jpg",
        autor: "Un prototipo de televisor en color de RCA. Early Television Museum, Ohio. Fotografía de DogsRNice.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Prototype_RCA_color_television_at_the_Early_Television_Museum_June_2022.jpg",
        foco: "50% 50%",
        alt: "Un aparato de televisión experimental con la carcasa abierta y los circuitos a la vista.",
      },
      {
        archivo: "Multiple early portable television sets at the Early Television Museum June 2022.jpg",
        autor: "Varios televisores portátiles de los primeros años. Early Television Museum, Ohio. Fotografía de DogsRNice.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Multiple_early_portable_television_sets_at_the_Early_Television_Museum_June_2022.jpg",
        foco: "50% 50%",
        alt: "Una estantería con varios televisores pequeños de distintos colores y formas, todos con pantalla curva.",
      },
    ],
    entrada:
      "Idaho, en el oeste de Estados Unidos, 1921. Un chico de catorce años que está arando el campo de su familia con un caballo se queda mirando los surcos paralelos que va dejando detrás, uno al lado del otro y todos iguales. Aquella imagen tan tonta le sugiere una idea que nadie había tenido: barrer una imagen entera línea por línea, muy deprisa, con un haz de electrones. Ese mismo invierno la dibuja en la pizarra de su clase de química, delante del profesor.",
    paginas: [
      {
        rotulo: "Las líneas",
        texto:
          "Su profesor guardó el recuerdo de aquel esquema y años más tarde declaró sobre él en un juicio. La idea era la clave del asunto: hasta entonces los intentos de transmitir imágenes usaban discos giratorios con agujeros, es decir, piezas mecánicas en movimiento, y eso limita la velocidad y la definición. Su propuesta era hacerlo sin nada que girase, desviando un haz de electrones con campos magnéticos para que recorriera la pantalla en líneas horizontales, muy deprisa, encendiendo cada punto según la intensidad de la señal recibida en ese instante. Sin piezas móviles no hay límite mecánico de velocidad.",
        destacado: { tipo: "frase", frase: "Los surcos del arado le dieron la idea de barrer la imagen." },
      },
      {
        rotulo: "El pleito",
        texto:
          "Consiguió financiación, montó un laboratorio y en 1927 transmitió su primera imagen, una simple línea recta. Una gran compañía de radio quiso comprarle la patente por cien mil dólares, él se negó a venderla y la empresa siguió adelante con un sistema propio, alegando que su ingeniero había tenido la idea antes que nadie. El pleito duró años y se resolvió a su favor, en buena medida gracias al testimonio del profesor de química, que reprodujo de memoria en el juicio el dibujo de la pizarra. La empresa tuvo que pagarle una licencia.",
        destacado: { tipo: "cifra", cifra: "14", unidad: "años tenía cuando lo dibujó" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Ganó el pleito y perdió el negocio: las patentes caducaron poco después, la guerra paró la fabricación de televisores durante años y, cuando el mercado despegó de verdad, ya no cobraba nada por ellas. Acabó dedicado a otras investigaciones y con problemas de salud. En 1969 vio por televisión la llegada del hombre a la Luna, retransmitida con el sistema que él había ideado, y le dijo a su mujer que aquello hacía que todo hubiera merecido la pena. El chico de los surcos había inventado cómo mandar imágenes por el aire.",
      },
    ],
  },

  {
    id: "television-de-disco",
    titulo: "Una televisión con disco",
    gancho: "Un disco de cartón agujereado en espiral, treinta líneas de imagen y un muñeco de ventrílocuo.",
    categoria: "Televisión",
    color: "var(--ochre)",
    encargo: "Un disco de cartón con agujeros en espiral montado sobre un motor.",
    entrada:
      "Londres, 1925. Un inventor escocés sin apenas dinero monta en una buhardilla un aparato con una caja de galletas, agujas de zurcir, lentes de bicicleta y un disco de cartón perforado. El 2 de octubre consigue transmitir la primera imagen de televisión reconocible de la historia: la cara de un muñeco de ventrílocuo, y después la de un chico del edificio.",
    paginas: [
      {
        rotulo: "El disco",
        texto:
          "El principio venía de una patente alemana de 1884 y es fácil de imaginar. Un disco con una espiral de agujeros gira delante de la escena: cada agujero, al pasar, deja ver una franja horizontal distinta, de modo que en una vuelta completa se ha recorrido la imagen entera. Una célula fotoeléctrica mide la luz de cada punto y la convierte en corriente. En el receptor, otro disco girando sincronizado y una lámpara que cambia de brillo reconstruyen la imagen. Todo mecánico, ruidoso, y con una definición de treinta líneas.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "líneas tenía aquella imagen" },
      },
      {
        rotulo: "El final",
        texto:
          "El sistema funcionó de verdad y tuvo unos años de gloria: emisiones regulares desde 1929, aparatos a la venta y hasta una transmisión a través del Atlántico. También sirvió para la primera demostración de televisión en color, en 1928, con discos de filtros de colores. Pero treinta líneas dan una imagen del tamaño de un sello en la que apenas se distingue una cara, y el disco no podía girar mucho más rápido sin desintegrarse. En 1936 se enfrentaron los dos sistemas en pruebas públicas y el electrónico ganó por goleada.",
        destacado: { tipo: "frase", frase: "Treinta líneas: una cara del tamaño de un sello." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Su inventor no se quedó parado y siguió trabajando en televisión en color y en pantallas grandes hasta su muerte en 1946. Se conservan grabaciones de aquellas emisiones mecánicas hechas en discos de cera, que se han recuperado con ordenador y permiten ver hoy caras borrosas moviéndose en treinta líneas, casi un siglo después. Fue un callejón sin salida técnico y a la vez la demostración de que la cosa era posible, que es exactamente lo que hace falta para que alguien con dinero decida invertirlo en hacer bien lo que otro ha hecho a medias.",
      },
    ],
  },

  {
    id: "mando-a-distancia",
    titulo: "El primer mando saltaba con las llaves",
    gancho: "Funcionaba con ultrasonidos, y cualquier tintineo metálico cambiaba de canal sin tocar nada.",
    categoria: "Televisión",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un mando de televisión de los años sesenta, macizo y con cuatro botones grandes.",
    entrada:
      "Estados Unidos, 1956. Los televisores llevan unos años en las casas y a los espectadores les molestan los anuncios, pero levantarse a cambiar de canal resulta incómodo. Una marca lanza un mando sin cable que funciona con sonidos que el oído humano no percibe: cada botón golpea una varilla metálica dentro del aparato y produce un tono distinto.",
    paginas: [
      {
        rotulo: "Las varillas",
        texto:
          "El mando no llevaba pilas ni electrónica: era puramente mecánico, con cuatro varillas de aluminio de longitudes distintas y unos martillitos que las golpeaban al pulsar, igual que un diapasón. Cada varilla sonaba a una frecuencia por encima de los veinte mil hercios, inaudible para una persona adulta, y el televisor llevaba un micrófono y unos filtros que reconocían cada tono y ejecutaban la orden: encender, apagar, subir el volumen o cambiar de canal. El aparato hacía un clic seco al pulsarlo, y de ahí viene el nombre popular que se le quedó en inglés.",
        destacado: { tipo: "frase", frase: "Cuatro varillas de aluminio y unos martillitos, sin pilas." },
      },
      {
        rotulo: "Los falsos avisos",
        texto:
          "El problema apareció enseguida dentro de las casas. Un manojo de llaves al caer al suelo, una cucharilla contra una taza, un juguete metálico o unas monedas producían armónicos en esas frecuencias y el televisor cambiaba de canal él solo. Los perros y algunos niños sí oían los tonos y se ponían nerviosos cuando alguien pulsaba. Aun así el sistema se vendió durante veinte años, porque no había nada mejor, hasta que en los años ochenta se impuso el infrarrojo, que manda un código de pulsos de luz invisible y no lo activa el ruido de una cocina.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "años vendiéndose con ese defecto" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel invento hizo algo que su fabricante no había previsto: al volver el cambio de canal instantáneo y sin esfuerzo, cambió la manera de ver la televisión y obligó a las cadenas a pelear por la atención segundo a segundo, porque de pronto el espectador se iba al primer anuncio. Los publicistas de la época lo detestaban abiertamente. Hoy cada casa tiene tres o cuatro mandos perdidos entre los cojines, y el gesto de apuntar a la pantalla y apretar es de los pocos que no ha cambiado desde 1956.",
      },
    ],
  },
];
