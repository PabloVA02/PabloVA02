import type { Short } from "../shorts";

/* ==========================================================================
   Bibliotecas.

   El riesgo del tema es la solemnidad: el saber, la memoria de la
   humanidad, el olor del papel. Frases que suenan bien y no dicen nada.

   La regla del tema: una biblioteca se cuenta por LO QUE CUESTA MANTENERLA.
   Copistas que hay que pagar cada década, cadenas de hierro remachadas en
   las tapas, baúles metálicos comprados de dos en dos para no levantar
   sospechas. Los libros no se conservan solos: alguien está pagando,
   copiando o escondiendo, y cuando ese alguien se cansa, desaparecen.

   Y si hay una leyenda muy repetida —el incendio de Alejandría—, se
   desmonta sin quitarle importancia a lo que sí se perdió.
   ========================================================================== */

export const BIBLIOTECAS: Short[] = [
  {
    id: "alejandria-declive",
    titulo: "Alejandría no ardió",
    gancho: "No hubo una noche ni un incendio único. Se apagó despacio, por recortes y por descuido.",
    categoria: "Bibliotecas",
    color: "var(--ochre)",
    encargo: "Rollos de papiro amontonados en estantes de madera en penumbra.",
    fotos: [
      {
        archivo: "Ephesus Celsus Library Façade.jpg",
        autor: "La fachada de la biblioteca de Celso, en Éfeso, siglo II: de la biblioteca solo queda esto. Fotografía de Benh Lieu Song.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ephesus_Celsus_Library_Fa%C3%A7ade.jpg",
        foco: "50% 32%",
        alt: "Una fachada de mármol de dos pisos con columnas, frontones partidos y estatuas en las hornacinas.",
      },
      {
        archivo: "Papyrus in Greek regarding tax issues (3rd ca. BC.) (3210586934).jpg",
        autor: "Papiro griego del siglo III antes de Cristo, de la misma época que la biblioteca. Fotografía de Tilemahos Efthimiadis.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Papyrus_in_Greek_regarding_tax_issues_(3rd_ca._BC.)_(3210586934).jpg",
        foco: "50% 50%",
        alt: "Una tira de papiro color miel, rota por los bordes, con ocho renglones de letras griegas en tinta negra.",
      },
      {
        archivo: "Ephesus Library of Celsus Detail inside facade in 2011 3640.jpg",
        autor: "La cornisa labrada de la biblioteca de Celso, agrietada por dentro. Fotografía de Dosseman.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ephesus_Library_of_Celsus_Detail_inside_facade_in_2011_3640.jpg",
        foco: "50% 50%",
        alt: "Un friso de mármol con un águila tallada entre hojas, atravesado por grietas y con piezas partidas.",
      },
      {
        archivo: "Ephesus Library of Celsus Detail of facade in 2011 3634.jpg",
        autor: "El frontón partido de la fachada, visto desde abajo. Fotografía de Dosseman.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ephesus_Library_of_Celsus_Detail_of_facade_in_2011_3634.jpg",
        foco: "50% 45%",
        alt: "Un frontón curvo de piedra labrada con un rostro en el centro, recortado contra un cielo azul.",
      },
    ],
    entrada:
      "Egipto, siglo III antes de Cristo. Los reyes de Alejandría fundan una institución con una ambición que hoy suena desmesurada y entonces lo era todavía más: reunir una copia de todos los libros que existen en el mundo. Para conseguirlo no se limitan a comprar. Mandan requisar los rollos que llevan los barcos que atracan en el puerto, los hacen copiar deprisa y devuelven la copia al dueño, quedándose ellos el original. Con ese método y unos cuantos más llegan a juntar varios cientos de miles de textos, y con ellos la mayor concentración de saber escrito del Mediterráneo.",
    paginas: [
      {
        rotulo: "La copia forzosa",
        texto:
          "El sistema era agresivo y funcionaba. Además de la requisa portuaria se pagaban fortunas por manuscritos originales y se enviaban compradores a las ferias del Mediterráneo con orden de no volver con las manos vacías. Un rey llegó a pedir prestados a Atenas los textos oficiales de sus tres grandes autores de teatro, dejó como fianza un depósito enorme, los hizo copiar y devolvió las copias, quedándose los originales y perdiendo el dinero a propósito. Dentro trabajaban bibliotecarios que ordenaban, comparaban versiones y corregían: allí nació buena parte de la manera de editar textos que se usa hoy.",
        destacado: { tipo: "frase", frase: "Devolvió las copias y se quedó los originales a propósito." },
      },
      {
        rotulo: "Las mordidas",
        texto:
          "La leyenda del incendio único viene sobre todo de un episodio real: en el año 48 antes de Cristo, durante una batalla en el puerto, un fuego prendido en los barcos alcanzó unos almacenes cercanos y quemó una cantidad de rollos que las fuentes no aclaran. Hubo después más golpes, y ninguno definitivo: guerras civiles, saqueos, un emperador que expulsó de la ciudad a los sabios griegos y, sobre todo, siglos de presupuestos que dejaron de llegar. Sin dinero no hay copistas, y un rollo de papiro que no se copia cada pocas décadas se pudre solo con la humedad.",
        destacado: { tipo: "cifra", cifra: "48", unidad: "a. C., el incendio del puerto" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Cuando en el siglo VII se cuenta que un general árabe ordenó quemarla, hacía siglos que allí no quedaba prácticamente nada; esa versión aparece por primera vez seiscientos años después de los hechos y los historiadores no se la creen. El final verdadero es menos épico y bastante más incómodo: las bibliotecas no mueren en una noche, mueren cuando alguien decide que este año no toca renovar el presupuesto. De aquellos cientos de miles de rollos no se conserva ni uno solo. Lo que sabemos de ellos son citas dentro de otros libros que sí se copiaron a tiempo.",
      },
    ],
  },

  {
    id: "libros-encadenados",
    titulo: "Los libros iban encadenados",
    gancho: "Una cadena de hierro por volumen, remachada a la tapa. Un libro costaba lo que una casa pequeña.",
    categoria: "Bibliotecas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Libros antiguos en un pupitre de madera con cadenas de hierro sujetas a una barra.",
    entrada:
      "Europa, siglo XV. Un libro se escribe a mano sobre piel de animal y tarda meses en copiarse. La biblioteca entera de una catedral puede tener doscientos volúmenes y estar entre las mejores del continente. Para que no desaparezcan, los ejemplares se sujetan a los muebles con cadenas de hierro que llegan a medir un metro.",
    paginas: [
      {
        rotulo: "El precio",
        texto:
          "El material ya era caro por sí solo: un ejemplar grande podía llevarse la piel de un rebaño entero, curtida, raspada y cortada en pliegos del mismo tamaño. Encima estaban los meses de trabajo de un copista y, si el libro llevaba dibujos, los pigmentos, algunos traídos de Asia y más caros que la plata. El resultado costaba lo que una casa pequeña o una viña. Por eso los libros aparecían en los testamentos uno a uno y con su descripción, igual que las joyas, y por eso se prestaban con contrato y con fianza, si es que llegaban a prestarse.",
        destacado: { tipo: "frase", frase: "Un libro aparecía en los testamentos con nombre propio." },
      },
      {
        rotulo: "La cadena",
        texto:
          "La cadena se remachaba en el canto de la tapa y no en el lomo, así que los libros se colocaban al revés de como los ponemos hoy, con el corte de las hojas hacia fuera; de ahí viene que en las bibliotecas antiguas los títulos estén escritos en el corte y no en el lomo. El hierro llegaba justo hasta el pupitre más cercano: se podía leer allí de pie, no llevárselo. Algunas bibliotecas añadían además una maldición escrita en la primera página, prometiendo enfermedades y condenación eterna a quien robara el ejemplar, por si el hierro no bastaba.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "metro de cadena por volumen" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La imprenta acabó con la costumbre en dos o tres generaciones: cuando un libro pasó a costar lo que un par de zapatos, encadenarlo dejó de tener sentido, y las cadenas se fueron quitando y vendiendo como chatarra a lo largo de los siglos XVII y XVIII. Quedan unas pocas bibliotecas encadenadas completas en Inglaterra y en Italia, con sus barras, sus argollas y sus pupitres originales, que hoy se visitan como museos. Y queda el gesto: la primera vez que se decidió que un texto valía lo suficiente como para atarlo a un mueble con hierro.",
      },
    ],
  },

  {
    id: "manuscritos-tombuctu",
    titulo: "Los manuscritos salieron en baúles",
    gancho: "Una ciudad ocupada, bibliotecas de siglos y un plan clandestino con burros, camionetas y barcas.",
    categoria: "Bibliotecas",
    color: "var(--plum)",
    encargo: "Baúles metálicos apilados con paquetes envueltos en tela dentro.",
    entrada:
      "Malí, en el oeste de África, 2012. Un grupo armado toma la ciudad de Tombuctú, que fue durante siglos un centro de estudio con decenas de bibliotecas privadas. Se conservan allí cientos de miles de manuscritos sobre astronomía, medicina, derecho y poesía. Los ocupantes empiezan a destruir monumentos, y los libros son el siguiente objetivo evidente.",
    paginas: [
      {
        rotulo: "Los baúles",
        texto:
          "Un bibliotecario de la ciudad que llevaba años catalogando aquellos fondos decidió no esperar a ver qué pasaba. Organizó a decenas de familias para que compraran baúles metálicos en el mercado, con discreción y sin adquirir demasiados en la misma tienda, y para que fueran empaquetando los manuscritos por las noches en las casas donde estaban guardados. Los envolvían en tela, los metían en los baúles y los escondían en habitaciones tapiadas y bajo los suelos. En pocas semanas trasladaron así la mayor parte de las colecciones sin que nadie de fuera se enterara.",
        destacado: { tipo: "frase", frase: "Compraban los baúles de pocos en pocos para no llamar la atención." },
      },
      {
        rotulo: "El viaje",
        texto:
          "Después vino sacarlos de la ciudad, que era lo difícil. Los baúles salieron a lomos de burro, en carretillas, escondidos bajo verduras en camionetas y, en el tramo final, en barcas por el río, viajando de noche y pasando controles donde había que pagar a quien tocara en cada uno. El trayecto hasta la capital eran unos mil kilómetros. Se movieron alrededor de trescientos cincuenta mil manuscritos a lo largo de varios meses, con dinero recogido por internet, y solo se perdió una parte pequeña, la que quedó en la biblioteca pública que ardió.",
        destacado: { tipo: "cifra", cifra: "350.000", unidad: "manuscritos sacados de la ciudad" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Los manuscritos están hoy en la capital, en almacenes con control de humedad, y ese es justamente su nuevo problema: el clima de allí es húmedo y aquellos papeles llevaban siglos conservándose en un sitio seco, así que se digitalizan a marchas forzadas para no depender del original. La ciudad de la que salieron todavía no está en condiciones de recuperarlos. El bibliotecario que organizó la operación cuenta que la parte más difícil no fueron los controles ni el río, sino convencer a las familias de que soltaran unos papeles que llevaban trescientos años en sus casas.",
      },
    ],
  },
];
