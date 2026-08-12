import type { Short } from "../shorts";

/* ==========================================================================
   Escritura.

   Cómo se guarda y se transmite lo que alguien piensa: el alfabeto, la
   imprenta, los códigos, el papel. El riesgo del tema es que suena a
   asignatura, así que aquí nunca se cuenta la evolución de nada.

   La regla del tema: se cuenta EL PROBLEMA PRÁCTICO que alguien tenía
   delante. Un impresor endeudado que no llega al plazo. Un ejército que
   necesita leer órdenes de noche sin encender una luz. Un soldado que copia
   una piedra en una zanja. La escritura se inventó siempre para resolver
   algo concreto, casi nunca para lo que acabó sirviendo.

   Nada de listas de alfabetos ni de fechas de imprentas. Un objeto, una
   persona y un apuro.
   ========================================================================== */

export const ESCRITURA: Short[] = [
  {
    id: "gutenberg-arruinado",
    titulo: "Gutenberg acabó arruinado",
    gancho: "Se pasó veinte años endeudado montando el invento. Su socio se lo quedó todo con una demanda.",
    categoria: "Escritura",
    color: "var(--slate)",
    encargo: "Tipos de plomo desordenados en una caja de madera, vistos muy de cerca.",
    fotos: [
      {
        archivo: "Caratteri mobili del Museo della stampa Lodovico Pavoni.jpg",
        autor: "Tipos móviles de plomo en su caja. Museo de la Imprenta Lodovico Pavoni.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Caratteri_mobili_del_Museo_della_stampa_Lodovico_Pavoni.jpg",
        foco: "45% 50%",
        alt: "Cientos de letras de plomo agrupadas por tipo dentro de una caja de madera abierta, vistas desde arriba.",
      },
      {
        archivo: "Musée de l'imprimerie de Nantes - 075 - Presse à bras en bois, commandé par Gutenberg.jpg",
        autor: "Una prensa de brazo de madera como las del primer taller. Museo de la Imprenta de Nantes.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_l%27imprimerie_de_Nantes_-_075_-_Presse_%C3%A0_bras_en_bois,_command%C3%A9e_par_Gutenberg.jpg",
        foco: "50% 42%",
        alt: "Un armazón de madera con husillo y palanca, con pliegos impresos apilados en la platina.",
      },
      {
        archivo: "William Tombleson Guttenberg's Monument at Mayence 1832.jpg",
        autor: "El monumento a Gutenberg en Maguncia, grabado de William Tombleson, 1832.",
        licencia: "Dominio público",
        pdPorEdad: 1840,
        fuente: "https://commons.wikimedia.org/wiki/File:William_Tombleson_Guttenberg%27s_Monument_at_Mayence_1832.jpg",
        foco: "50% 42%",
        alt: "Grabado de una estatua sobre pedestal en una placita, rodeada de verja y con la iglesia detrás.",
      },
      {
        archivo: "Bibliothèque monastère Strahov.jpg",
        autor: "La sala filosófica de la biblioteca del monasterio de Strahov, en Praga. Fotografía de Yelkrokoyade.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Biblioth%C3%A8que_monast%C3%A8re_Strahov.jpg",
        foco: "50% 45%",
        alt: "Una sala altísima de estanterías doradas llenas de libros hasta el techo, con un fresco pintado arriba.",
      },
    ],
    entrada:
      "Maguncia, Alemania, 1450. Un orfebre de unos cincuenta años lleva más de una década trabajando en secreto, y con bastante discreción respecto a sus vecinos, en una idea que suena sencilla y no lo es: fabricar letras sueltas de metal, alinearlas en un molde para componer una página entera, entintarlas y prensarlas sobre papel, y poder después deshacer la composición y usar las mismas letras para la página siguiente. Ha gastado en ello todo lo que tenía y necesita mucho más para probarlo a gran escala, así que pide un préstamo enorme a un comerciante de la ciudad.",
    paginas: [
      {
        rotulo: "El invento",
        texto:
          "Lo difícil no era la prensa, que ya existía para el vino y el aceite, ni el papel, que llegaba de Italia. Lo difícil era la letra: hacían falta miles de piezas metálicas idénticas, de altura exactamente igual para que todas recibieran la misma presión, y de una aleación que fundiera a baja temperatura, no encogiera al enfriarse y aguantara miles de golpes. Dio con una mezcla de plomo, estaño y antimonio, y diseñó un molde ajustable que permitía fundir cualquier letra con la misma herramienta. Ese molde, y no la prensa, es el invento.",
        destacado: { tipo: "frase", frase: "El invento no fue la prensa, que ya existía. Fue el molde." },
      },
      {
        rotulo: "El pleito",
        texto:
          "Con el préstamo imprimió unas ciento ochenta biblias de dos volúmenes, mil doscientas ochenta y dos páginas cada una, en un taller con seis prensas y unos veinte trabajadores. Tardó tres años. Justo cuando la tirada estaba a punto de terminarse, en 1455, el prestamista lo demandó reclamando el dinero y los intereses, ganó el pleito y se quedó con el taller, con los tipos y con la mitad de las biblias impresas. Se puso a venderlas él mismo, con su nombre, mientras el inventor se quedaba sin nada y sin poder seguir.",
        destacado: { tipo: "cifra", cifra: "1.282", unidad: "páginas tenía cada biblia" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Murió en 1468 sin fortuna, con una pensión que le concedió un arzobispo por lástima y que consistía en grano, vino y un traje al año. En medio siglo había imprentas en más de doscientas cincuenta ciudades europeas y se habían impreso unos veinte millones de libros, más que todo lo copiado a mano en los mil años anteriores. De aquellas biblias se conservan cuarenta y nueve ejemplares, veintiuno completos, y hace décadas que no sale ninguno a la venta. En su tumba no hay lápida: se perdió cuando el cementerio se convirtió en calle.",
      },
    ],
  },

  {
    id: "piedra-rosetta",
    titulo: "La piedra de Rosetta",
    gancho: "Los jeroglíficos llevaban mil cuatrocientos años sin poder leerse. La clave apareció en una zanja.",
    categoria: "Escritura",
    color: "var(--ochre)",
    encargo: "Una losa de piedra oscura cubierta de tres bandas de escritura distinta.",
    fotos: [
      {
        archivo: "PHILAE TEMPLE COLUMNS.jpg",
        autor: "Capiteles del templo de File, en Asuán, Egipto. Fotografía de Hesham Farouk Ragab.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:PHILAE_TEMPLE_COLUMNS.jpg",
        foco: "50% 50%",
        alt: "Capiteles egipcios tallados con formas de palmera, vistos desde abajo contra un cielo azul intenso.",
      },
      {
        archivo: "Rosetta Stone - British Museum (2931856207).jpg",
        autor: "La piedra de Rosetta en el Museo Británico de Londres. Fotografía de Cristian Bortes.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Rosetta_Stone_-_British_Museum_(2931856207).jpg",
        foco: "50% 50%",
        alt: "Losa de piedra oscura rota por arriba, cubierta de tres franjas de escritura tallada.",
      },
      {
        archivo: "PHILAE TEMPLE.jpg",
        autor: "El templo de File, de donde salió el obelisco que ayudó a leer los primeros nombres. Fotografía de Hesham Farouk Ragab.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:PHILAE_TEMPLE.jpg",
        foco: "50% 50%",
        alt: "Templo egipcio de piedra dorada junto al agua, con pilonos y columnas al sol.",
      },
      {
        archivo: "PHILAE TEMPLE WALS.jpg",
        autor: "Relieves y jeroglíficos tallados en los muros del templo de File.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:PHILAE_TEMPLE_WALS.jpg",
        foco: "50% 50%",
        alt: "Muro de piedra cubierto de figuras y jeroglíficos tallados en relieve.",
      },
    ],
    entrada:
      "Egipto, julio de 1799. Unos soldados franceses que reparan las defensas de un fuerte cerca del delta del Nilo desentierran una losa de granito oscuro de poco más de un metro, rota por arriba, con tres bandas de escritura distinta talladas una debajo de otra. Un oficial que va con ellos se da cuenta de que aquello puede ser importante y ordena que no se toque. Nadie sabe todavía que acaban de encontrar la llave de una lengua que llevaba mil cuatrocientos años sin que nadie pudiera leerla.",
    paginas: [
      {
        rotulo: "Los tres textos",
        texto:
          "La losa llevaba el mismo texto escrito tres veces: en jeroglíficos, la escritura sagrada de los templos; en una versión cursiva de esa misma lengua que se usaba a diario; y en griego antiguo, que en 1799 leía cualquier estudiante con formación. Era un decreto de unos sacerdotes del año 196 antes de Cristo confirmando el culto a un rey adolescente, un documento administrativo sin ningún interés en sí mismo. Su valor estaba en la repetición: por primera vez se tenía delante un texto egipcio con su traducción al lado.",
        destacado: { tipo: "frase", frase: "El texto no dice nada interesante. Lo valioso es que está tres veces." },
      },
      {
        rotulo: "Veintitrés años",
        texto:
          "Aun así costó veintitrés años descifrarlo, porque toda Europa arrastraba un error de fondo: se creía que los jeroglíficos eran símbolos que representaban ideas enteras, no sonidos. Un joven francés que dominaba el copto —la lengua de los cristianos de Egipto, heredera directa del egipcio antiguo— demostró en 1822 que se mezclaban las dos cosas: algunos signos son ideas y otros suenan como letras. Encontró la pista en los nombres de reyes extranjeros —Ptolomeo, Cleopatra—, que por fuerza tenían que escribirse sonido a sonido, porque no significaban nada en egipcio y no había manera de dibujarlos con símbolos de ideas. Comparando los dos nombres dedujo el valor de una docena de signos.",
        destacado: { tipo: "cifra", cifra: "23", unidad: "años se tardó en descifrarla" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Con esa clave se abrieron de golpe tres mil años de textos que llevaban desde el siglo IV siendo dibujos mudos: contratos, cartas privadas, recetas médicas, quejas de obreros por el sueldo. La piedra nunca volvió a Egipto. Los británicos ganaron la guerra dos años después de encontrarla y se la llevaron a Londres por un tratado; hoy está en un museo de Londres con dos inscripciones pintadas en los cantos, en letras blancas, que recuerdan quién la capturó y quién la donó. El gobierno egipcio lleva décadas reclamándola sin éxito, y es la pieza más visitada de todo el edificio.",
      },
    ],
  },

  {
    id: "braille-militar",
    titulo: "El braille salió del ejército",
    gancho: "Un capitán quería que sus soldados leyeran órdenes sin encender una luz. Era demasiado complicado.",
    categoria: "Escritura",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una página en relieve con puntos, iluminada de lado para que se marquen las sombras.",
    entrada:
      "París, 1821. Un capitán de artillería retirado visita una escuela para ciegos con un sistema que ha inventado para el ejército: doce puntos en relieve que permiten leer un mensaje con el dedo, sin luz, en una trinchera de noche. El ejército lo ha rechazado por complicado. Entre los alumnos que lo prueban hay un chico de doce años.",
    paginas: [
      {
        rotulo: "Doce puntos",
        texto:
          "El sistema militar tenía un fallo de bulto: la celda de doce puntos era más grande que la yema de un dedo, así que había que recorrerla moviendo la mano y no se reconocía de un golpe. Además codificaba sonidos, no letras, de modo que no permitía escribir ortografía ni números ni música. El chico se pasó tres años trabajando en la idea por las noches, con un punzón, y la redujo a la mitad: seis puntos en dos columnas de tres, sesenta y tres combinaciones posibles, y una celda que cabe entera bajo una yema quieta.",
        destacado: { tipo: "cifra", cifra: "6", unidad: "puntos, y la celda cabe en una yema" },
      },
      {
        rotulo: "El rechazo",
        texto:
          "Lo publicó en 1829, con veinte años, y su propia escuela se negó a adoptarlo. El director consideraba que los ciegos debían leer letras normales en relieve para no separarse de los videntes, y llegó a prohibir el sistema y a quemar los libros que lo usaban. Los alumnos siguieron aprendiéndolo a escondidas, por la noche, pasándose las tablillas entre ellos. Él dio clase en esa misma escuela el resto de su vida, enfermo de tuberculosis desde muy joven y tocando el órgano en iglesias de París para completar el sueldo, y murió en 1852, a los cuarenta y tres años, sin ver su método aceptado en ninguna parte del mundo.",
        destacado: { tipo: "frase", frase: "El director prohibió el sistema y mandó quemar los libros." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Su escuela lo adoptó dos años después de enterrarlo, y de ahí pasó a toda Europa y luego al mundo entero, adaptado a cada idioma. Cien años más tarde, en 1952, sus restos se trasladaron al panteón nacional francés, aunque las manos se quedaron enterradas en su pueblo a petición de los vecinos. El sistema se lee hoy en todos los alfabetos, en partituras musicales y en fórmulas matemáticas, y está en los botones de cualquier ascensor y en las cajas de los medicamentos. Sigue siendo, en lo esencial, la reducción que hizo un adolescente de un código que el ejército había descartado por engorroso.",
      },
    ],
  },
];
