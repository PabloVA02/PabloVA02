import type { Short } from "../shorts";

/* ==========================================================================
   La máquina de escribir.

   Un cacharro de hierro con teclas del que ya nadie se acuerda y que estuvo
   cien años en el centro de todas las oficinas del mundo. El riesgo del tema
   es la nostalgia: el ruido de las teclas, el olor de la cinta, la carta de
   amor mecanografiada. Nada de eso.

   La regla del tema: se cuenta lo que la máquina LE HIZO AL TRABAJO. Quién
   entró en la oficina gracias a ella, qué se dejó de hacer a mano, qué se
   escondió y qué se pudo rastrear. Y siempre hay una pieza física —el
   rodillo, el tipo desgastado, el pedal— que explica el resto.
   ========================================================================== */

export const MAQUINA_ESCRIBIR: Short[] = [
  {
    id: "escribir-sin-ver",
    titulo: "Escribir a ciegas",
    gancho: "Los tipos golpeaban por debajo del rodillo. Para leer la línea había que levantar el carro con la mano.",
    categoria: "Máquina de escribir",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un carro de máquina de escribir levantado, con el papel a medio escribir asomando.",
    fotos: [
      {
        archivo: "Keyslugs on Vintage Typewriter.jpg",
        autor: "Las barras portatipos de una máquina de escribir antigua, con la letra grabada en la punta. Fotografía de Mathieu Landretti.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Keyslugs_on_Vintage_Typewriter.jpg",
        foco: "50% 50%",
        alt: "Macro de varias varillas doradas terminadas en un bloque de metal con una letra en relieve.",
      },
      {
        archivo: "Typewriter-12 hg.jpg",
        autor: "El interior de una máquina de escribir mecánica. Fotografía de Hannes Grobe.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Typewriter-12_hg.jpg",
        foco: "50% 50%",
        alt: "Un enredo de palancas y varillas metálicas vistas desde arriba dentro del cuerpo de la máquina.",
      },
      {
        archivo: "Olympia Simplex.jpg",
        autor: "Una Olympia Simplex, ya de golpe frontal: la línea recién escrita queda a la vista.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Olympia_Simplex.jpg",
        foco: "50% 50%",
        alt: "Una máquina de escribir negra vista de frente, con el rodillo y el papel bien visibles por encima de las teclas.",
      },
      {
        archivo: "Chinese typewriter 03.jpg",
        autor: "Una máquina de escribir china de los años ochenta, con su bandeja de miles de caracteres. Fotografía de MatejK42.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Chinese_typewriter_03.jpg",
        foco: "50% 50%",
        alt: "Una bandeja plana con centenares de tipos de plomo colocados en cuadrícula y un brazo que los recoge.",
      },
    ],
    entrada:
      "Estados Unidos, 1874. Sale a la venta la primera máquina de escribir fabricada en serie, un armatoste de hierro negro decorado con flores pintadas a mano, con pedal para devolver el carro como si fuera una máquina de coser, y con un defecto que hoy parece sencillamente inconcebible: quien escribe no ve lo que está escribiendo. Las letras van apareciendo en la cara oculta del papel, debajo del rodillo, y para comprobar una línea hay que interrumpirse, soltar el trabajo y levantar el carro con las dos manos. Esa incomodidad, que hoy parece un fallo de diseño de primero de carrera, se mantuvo durante veinte años y tuvo su motivo.",
    paginas: [
      {
        rotulo: "El golpe de abajo",
        texto:
          "El motivo era mecánico. Las barras con las letras estaban dispuestas en una cesta bajo el rodillo y subían a golpearlo desde abajo, que era la forma más sencilla de que volvieran solas a su sitio por su propio peso. El resultado es que la línea recién escrita quedaba tapada por el propio rodillo, y para comprobarla había que parar, agarrar el carro con las dos manos y levantarlo. Los manuales de la época recomendaban hacerlo cada pocas líneas. La primera máquina la fabricó una empresa de armas y máquinas de coser, y de ahí venían el pedal y las flores pintadas del chasis.",
        destacado: { tipo: "frase", frase: "Para leer lo escrito había que levantar el carro con las manos." },
      },
      {
        rotulo: "La escritura visible",
        texto:
          "Durante veinte años los fabricantes discutieron si aquello importaba, y muchos sostenían que no: un buen mecanógrafo, decían, no debe mirar el papel, igual que un pianista no mira las teclas. La cosa cambió en 1893, cuando apareció la primera máquina de éxito con los tipos colocados delante, golpeando la cara visible del papel. Se la llamó de escritura visible y en menos de una década arrasó con todas las demás. El argumento comercial no fue la comodidad, sino el error: en una carta comercial, una errata que no se ve hasta el final obliga a repetir la hoja entera.",
        destacado: { tipo: "cifra", cifra: "1893", unidad: "el año de la primera escritura visible" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una lección que se repite con cada tecnología nueva y que conviene tener a mano: durante veinte años, quienes fabricaban aquellas máquinas defendieron que no ver lo que escribes era un detalle sin importancia, y solo cambiaron de opinión cuando un competidor demostró lo contrario vendiendo más. También quedó la costumbre, que sigue viva en cualquier teclado moderno, de mirar la pantalla y no los dedos. Y quedan las máquinas: las de escritura ciega son hoy piezas de coleccionista precisamente por lo mismo que las hundió, porque hay que levantar el carro para leer lo que uno acaba de teclear.",
      },
    ],
  },

  {
    id: "la-maquina-y-la-oficina",
    titulo: "La máquina abrió oficinas",
    gancho: "En inglés, la misma palabra designaba al aparato y a la persona que lo manejaba.",
    categoria: "Máquina de escribir",
    color: "var(--slate)",
    encargo: "Una sala larga con filas de mesas iguales y máquinas de escribir negras alineadas.",
    fotos: [
      {
        archivo: "Underwood Typewriter Assembly 1962.jpg",
        autor: "Cadena de montaje de máquinas de escribir en la fábrica de Underwood en Hartford, Connecticut, 1962.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3AUnderwood%20Typewriter%20Assembly%201962.jpg",
        foco: "45% 50%",
        alt: "Fila de mujeres trabajando una detrás de otra en el montaje de máquinas de escribir sobre un banco largo.",
      },
      {
        archivo: "UNDERWOOD TYPEWRITER CO. LCCN2016861738.jpg",
        autor: "Local de la Underwood Typewriter Co., fotografiado hacia 1905.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3AUNDERWOOD%20TYPEWRITER%20CO.%20LCCN2016861738.jpg",
        foco: "50% 50%",
        alt: "Interior de una tienda de máquinas de escribir de principios del siglo XX, con los aparatos expuestos en mesas.",
      },
      {
        archivo: "SWEN. STENOGRAPHER TO THE PRESIDENT LOC hec.06843.tif",
        autor: "Taquígrafo de la presidencia estadounidense fotografiado entre 1911 y 1917.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ASWEN.%20STENOGRAPHER%20TO%20THE%20PRESIDENT%20LOC%20hec.06843.tif",
        foco: "50% 45%",
        alt: "Retrato de un oficinista sentado a su mesa con una máquina de escribir delante.",
      },
      {
        archivo: "Máquina de escribir Underwood Standard.jpg",
        autor: "Máquina de escribir Underwood Standard, el modelo que se llevó las oficinas del mundo.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AM%C3%A1quina%20de%20escribir%20Underwood%20Standard.jpg",
        foco: "50% 50%",
        alt: "Máquina de escribir negra de varillas vista de frente, con el carro y las teclas redondas.",
      },
    ],
    entrada:
      "Estados Unidos y Reino Unido, entre 1880 y 1900. Hasta entonces la oficina es un sitio de hombres, y no por casualidad: el copista, que pasa a mano los documentos con letra cuidada, es un oficio masculino con aprendizaje largo, escalafón propio y aspiraciones de ascenso dentro de la casa. En veinte años eso se da la vuelta por completo y la oficina se llena de mujeres, con otro sueldo y sin ese escalafón. La palanca de todo ese cambio no fue una ley ni una campaña: fue una máquina de hierro con teclas.",
    paginas: [
      {
        rotulo: "Las demostradoras",
        texto:
          "El fabricante tenía un problema de ventas: nadie sabía para qué servía aquel trasto ni si merecía la pena su precio, equivalente a varios meses de sueldo. La solución fue enseñarlo funcionando, y para las demostraciones en ferias y en escaparates se contrató a mujeres jóvenes, que trabajaban por bastante menos dinero. El efecto fue inesperado. Los clientes que compraban la máquina querían también a alguien que supiera usarla, y quienes sabían usarla eran ellas. Se abrieron academias de mecanografía por todas partes, con cursos de pocos meses, y en las oficinas apareció un oficio nuevo que no tenía dueño previo.",
        destacado: { tipo: "frase", frase: "El fabricante contrató mujeres para demostrar la máquina, y se quedaron." },
      },
      {
        rotulo: "El vuelco",
        texto:
          "Las cifras del cambio son brutales. En 1870, menos de una de cada veinte personas que trabajaban en oficinas en aquel país era mujer; en 1930 eran cerca de la mitad. La palabra inglesa para la máquina, además, se usó durante años para nombrar también a la persona que la manejaba, de modo que en los anuncios de empleo se pedía una máquina de escribir y se estaba pidiendo una mecanógrafa. Fue una puerta de entrada real al trabajo asalariado y a la ciudad, y al mismo tiempo un techo: el sueldo era la mitad del de un copista y el puesto no llevaba a ninguna parte.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "por ciento de los oficinistas, mujeres en 1930" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron dos cosas contradictorias, y las dos siguen a la vista. Una es que millones de mujeres cobraron su primer sueldo propio gracias a un oficio que existía porque nadie lo había reclamado antes, y que eso cambió las casas, las ciudades y las leyes mucho más deprisa que cualquier discurso. La otra es que el trabajo se encasilló como femenino y se pagó peor por eso mismo durante un siglo entero. El oficio desapareció con el ordenador personal, cuando escribir a máquina dejó de ser una profesión y pasó a ser algo que se supone que sabe hacer cualquiera, jefes incluidos.",
      },
    ],
  },

  {
    id: "maquinas-por-seguridad",
    titulo: "Hierro que no se piratea",
    gancho: "Un aparato de hierro no se puede piratear desde el otro lado del mundo. Pero deja su propia huella.",
    categoria: "Máquina de escribir",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una máquina de escribir eléctrica moderna sobre una mesa de despacho vacía.",
    entrada:
      "Rusia y Alemania, 2013. Ese verano se publica que los servicios de espionaje de varios países interceptan comunicaciones digitales a una escala que nadie sospechaba. La reacción de algunas oficinas oficiales no fue comprar más ordenadores, sino menos: un servicio del Estado ruso encargó máquinas de escribir eléctricas para redactar sus documentos más reservados.",
    paginas: [
      {
        rotulo: "Lo que no conecta",
        texto:
          "El razonamiento es difícil de rebatir. Un documento escrito en un ordenador conectado puede copiarse, reenviarse y filtrarse sin dejar rastro y sin que nadie entre en el edificio. Un documento escrito a máquina existe en un número exacto de copias, todas físicas, todas contables, y sacarlo de un despacho obliga a alguien a cruzar una puerta con papeles encima. Ese mismo año, un comité del parlamento alemán que investigaba el espionaje debatió en serio hacer lo mismo, y en varias embajadas se recuperaron aparatos que llevaban veinte años en un almacén.",
        destacado: { tipo: "frase", frase: "Una máquina de escribir no está conectada a nada." },
      },
      {
        rotulo: "La huella del tipo",
        texto:
          "La seguridad, sin embargo, no es completa, y eso también se sabe desde hace mucho. Cada máquina desgasta sus tipos de forma distinta: una letra ligeramente torcida, una que golpea más flojo, un punto que sale desplazado medio milímetro. Con una lupa y un documento de referencia, un perito puede decir si dos textos salieron del mismo aparato, y durante toda la Guerra Fría hubo servicios que archivaban muestras de escritura de las máquinas que exportaban. Por eso el encargo ruso especificaba que cada aparato quedara asignado a un documento concreto: no era solo para esconder, también era para poder rastrear una filtración.",
        destacado: { tipo: "cifra", cifra: "2013", unidad: "el año en que volvieron a comprarse" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La última fábrica de máquinas de escribir manuales del mundo cerró en la India en 2011, y desde entonces lo que existe es un mercado de aparatos reparados por talleres pequeños que llevan años sin competencia. Siguen comprándolos oficinas oficiales, notarías de países con papeleo antiguo, algunos escritores y quien necesita rellenar impresos preimpresos, que es una tarea que un ordenador hace regular. La conclusión de aquel verano de 2013 se ha quedado como una regla no escrita de la seguridad: lo que no se puede robar desde lejos hay que ir a buscarlo en persona, y eso todavía disuade a mucha gente.",
      },
    ],
  },
];
