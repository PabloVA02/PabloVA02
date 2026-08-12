import type { Short } from "../shorts";

/* ==========================================================================
   Los archivos.

   Guardar papeles para siempre, que suena a lo más aburrido del mundo y es
   la base de que se pueda saber algo del pasado y de que alguien pueda
   reclamar un derecho. El tema muere si se cuenta con vocabulario de
   archivística: fondos, series, signaturas.

   La regla del tema: se cuenta QUIÉN GUARDA Y PARA QUÉ, y qué pasa cuando
   algo se pierde. Siempre con un caso concreto y con la cifra de cuánto
   papel hay, en kilómetros de estantería, que es como se mide de verdad.
   ========================================================================== */

export const ARCHIVOS: Short[] = [
  {
    id: "el-archivo-de-un-imperio",
    titulo: "Ocho kilómetros",
    gancho: "Cuarenta y tres mil legajos con la contabilidad, los pleitos y las cartas de América durante tres siglos.",
    categoria: "Archivos",
    color: "var(--ochre)",
    encargo: "Una sala abovedada con estanterías de madera llenas de legajos atados.",
    fotos: [
      {
        archivo: "Galería meridional, planta alta del Archivo de Indias (Sevilla).jpg",
        autor: "La galería alta del Archivo General de Indias, con los legajos en estanterías de caoba. Fotografía de Emilio J. Rodríguez Posada.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Galer%C3%ADa_meridional,_planta_alta_del_Archivo_de_Indias_(Sevilla).jpg",
        foco: "50% 50%",
        alt: "Una galería larga con bóveda de medio cañón y las dos paredes cubiertas de estanterías con cajas iguales.",
      },
      {
        archivo: "Archivo de Indias 002.jpg",
        autor: "La antigua lonja de comerciantes de Sevilla, el edificio que guarda los ocho kilómetros de legajos. Fotografía de Anual.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Archivo_de_Indias_002.jpg",
        foco: "50% 45%",
        alt: "Un edificio cuadrado de piedra y ladrillo visto desde arriba, con balaustrada en el tejado y palmeras alrededor.",
      },
      {
        archivo: "El Puente de Barcas, Sevilla (Vista de la ciudad de Sevilla).jpg",
        autor: "El puente de barcas de Sevilla, detalle de una vista de la ciudad pintada en el siglo XVI.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:El_Puente_de_Barcas,_Sevilla_(Vista_de_la_ciudad_de_Sevilla).jpg",
        foco: "50% 55%",
        alt: "Pintura antigua de un río con veleros amarrados y un puente flotante por el que cruzan carros y jinetes.",
      },
      {
        archivo: "Escalera del Archivo General de Indias.jpg",
        autor: "La escalera de mármol del Archivo General de Indias, reformada entre 1784 y 1790. Fotografía de Jl FilpoC.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Escalera_del_Archivo_General_de_Indias.jpg",
        foco: "50% 45%",
        alt: "Un hueco de escalera de piedra clara con arcos, balaustrada y zócalo de mármol rojo y negro.",
      },
    ],
    entrada:
      "Sevilla, 1785. La corona española decide reunir en un solo edificio los papeles de la administración de América, que llevaban dos siglos repartidos entre Simancas, Cádiz y la propia Sevilla y que hacía falta pedir por carta y esperar meses. Se elige para ello la antigua lonja de comerciantes, un edificio grande, cuadrado y sólido que había quedado medio vacío, y se empiezan a subir por su escalera de mármol carros enteros de documentos traídos desde archivos de media península. Nadie sabe todavía cuánto papel hay. Cuando se termine de contar, la respuesta se medirá en kilómetros de estantería.",
    paginas: [
      {
        rotulo: "Qué hay dentro",
        texto:
          "Lo que se guarda allí no son crónicas ni relatos, sino el papeleo cotidiano de gobernar un territorio inmenso durante trescientos años. Hay licencias de embarque con la descripción física de cada pasajero, cuentas de minas, pleitos entre vecinos, informes de obispos, mapas, planos de ciudades y cartas de funcionarios quejándose de su sueldo. Todo eso suma unos cuarenta y tres mil legajos, que puestos en fila ocupan alrededor de ocho kilómetros de estantería y contienen unos ochenta millones de páginas. Ningún historiador puede leerlo entero, ni de lejos, y por eso se estudia por temas y por rutas concretas.",
        destacado: { tipo: "cifra", cifra: "8", unidad: "kilómetros de estantería ocupan los papeles" },
      },
      {
        rotulo: "Para qué sirve",
        texto:
          "Un archivo así responde preguntas que nadie se planteaba al escribir aquellos papeles. Con las listas de pasajeros se ha reconstruido quién emigró, de dónde y con qué oficio. Con las cuentas de los barcos se estudian los precios, las cosechas y hasta el clima de siglos enteros. Y en los pleitos aparecen las voces de gente corriente, incluidos indígenas y esclavos que declararon ante un juez. De otro modo no habrían dejado ningún rastro escrito de su paso por el mundo, porque no sabían escribir y nadie escribió sobre ellos.",
        destacado: { tipo: "frase", frase: "Los pleitos guardan las voces de quien nunca escribió un libro." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó uno de los archivos más consultados del mundo y una lección sobre el valor de lo aburrido, porque nadie guardaba aquello pensando en los historiadores. Se guardaba para poder demostrar quién debía qué a quién, y para que un funcionario de Madrid pudiera comprobar las cuentas de otro que estaba a dos meses de navegación. Quedó también un problema práctico enorme. La digitalización avanza desde hace décadas y todavía queda muchísimo por escanear. Buena parte de la investigación sigue haciéndose como siempre: alguien pide un legajo, lo trae un ordenanza y hay que desatar el cordel.",
      },
    ],
  },
  {
    id: "el-papel-que-se-quema",
    titulo: "Los archivos arden antes",
    gancho: "Cuando cae una ciudad, lo primero que desaparece suele ser el papel: por fuego, por saqueo o a propósito.",
    categoria: "Archivos",
    color: "var(--slate)",
    encargo: "Cajas de documentos apiladas y chamuscadas en una sala vacía.",
    fotos: [
      {
        archivo: "Archivo de Indias 002.jpg",
        autor: "El Archivo General de Indias de Sevilla, construido en el siglo XVI como lonja de mercaderes.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Archivo_de_Indias_002.jpg",
        foco: "50% 50%",
        alt: "Edificio renacentista de piedra y ladrillo visto desde arriba, con palmeras y la ciudad al fondo.",
      },
      {
        archivo: "Sevilla - Archivo General de Indias K01.jpg",
        autor: "Fachada del Archivo General de Indias, en Sevilla.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sevilla_-_Archivo_General_de_Indias_K01.jpg",
        foco: "50% 50%",
        alt: "Fachada sobria de sillería con ventanas alineadas y balaustrada en lo alto.",
      },
      {
        archivo: "Sevilla - Archivo General de Indias K02.jpg",
        autor: "Escalera y galerías interiores del Archivo General de Indias.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sevilla_-_Archivo_General_de_Indias_K02.jpg",
        foco: "50% 50%",
        alt: "Escalera de mármol y arcos de piedra en el interior de un edificio histórico.",
      },
      {
        archivo: "Sevilla - Archivo General de Indias K03.jpg",
        autor: "Salas del Archivo General de Indias, con las estanterías de caoba llenas de legajos.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sevilla_-_Archivo_General_de_Indias_K03.jpg",
        foco: "50% 50%",
        alt: "Galería larga con estanterías de madera oscura repletas de cajas y legajos ordenados.",
      },
    ],
    entrada:
      "Europa, siglo XX. Dos guerras mundiales y unos cuantos regímenes destruyeron archivos enteros, unos por bombardeo y otros de forma perfectamente deliberada. Los papeles arden bien, ocupan mucho sitio, pesan una barbaridad y son dificilísimos de evacuar deprisa, de modo que suelen estar entre las primeras pérdidas de cualquier conflicto, muy por delante de los edificios que los guardan. Un archivo no se puede meter en un camión en una tarde. Y muchas veces no se pierde por accidente ni por descuido, sino porque a alguien con mando le conviene mucho que deje de existir antes de que llegue quien viene detrás a leerlo.",
    paginas: [
      {
        rotulo: "Quemar pruebas",
        texto:
          "La destrucción deliberada de documentos es tan vieja como los documentos. Los regímenes que caen suelen dedicar sus últimos días a quemar expedientes, y hay imágenes de patios llenos de ceniza en muchas capitales. En algunos casos la cantidad era tal que las máquinas trituradoras se averiaban y hubo que romper los papeles a mano, lo que dejó millones de fragmentos guardados en sacos. Reconstruir aquellos fragmentos ha ocupado después a equipos enteros durante décadas, primero a mano y ahora con programas que comparan los bordes rotos y proponen encajes.",
        destacado: { tipo: "frase", frase: "Rompieron tanto papel que las máquinas se averiaron." },
      },
      {
        rotulo: "Copias lejos",
        texto:
          "De ahí sale la regla básica de conservación, que es la misma que se aplica a los datos de un ordenador: lo que existe en un solo sitio está perdido a medias. Los archivos importantes se microfilmaron durante décadas y se guardaron copias en edificios distintos, a veces en minas de sal o en búnkeres, porque la temperatura y la humedad allí son estables. Hoy se digitaliza y se replica en servidores de varios países, aunque eso trae su propio problema con los formatos y los soportes que se quedan obsoletos en pocos años.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "copias en sitios distintos es la regla" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron huecos permanentes en la historia de muchos países, con periodos enteros que solo se conocen por fuentes indirectas. Y quedó una idea que va más allá del papel viejo. Un archivo no sirve solo para estudiar el pasado: sirve para que alguien pueda demostrar que trabajó treinta años, que aquella casa era de su abuelo o que un Estado hizo lo que hizo. Por eso destruir archivos ha sido siempre, además de una pérdida cultural, una forma bastante eficaz de garantizarse la impunidad y de dejar sin pruebas a quien reclame.",
      },
    ],
  },
  {
    id: "cuanto-dura-un-archivo-digital",
    titulo: "El pergamino dura más",
    gancho: "No por la calidad del soporte, sino porque en veinte años nadie tiene el programa que sabía abrirlo.",
    categoria: "Archivos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un disquete antiguo y una carpeta de cartón sobre una mesa gris.",
    entrada:
      "Bibliotecas y archivos nacionales, desde los años noventa. Un documento en papel de buena calidad puede leerse quinientos años después sin ningún aparato. Un fichero digital necesita, para abrirse, un soporte que funcione, un ordenador capaz de leerlo, un sistema operativo compatible y un programa que entienda el formato. Basta con que falle uno solo de los cuatro para que la información quede inaccesible, aunque los datos sigan intactos.",
    paginas: [
      {
        rotulo: "Las cuatro capas",
        texto:
          "El soporte es lo primero que falla, porque un disco magnético pierde datos con los años y un disco grabado en casa puede degradarse en poco más de una década. Después está el aparato que lo lee, y hoy ya casi nadie tiene a mano uno capaz de leer un disquete de los antiguos. Luego viene el formato, que a menudo pertenece a una empresa concreta y deja de mantenerse. Y por último está la contraseña o el sistema de protección contra copia, capaz de dejar un fichero perfectamente conservado y perfectamente ilegible para siempre.",
        destacado: { tipo: "frase", frase: "Un fichero intacto y protegido puede ser ilegible para siempre." },
      },
      {
        rotulo: "Cómo se pelea",
        texto:
          "Los archivos digitales serios trabajan con tres estrategias combinadas. La primera es guardarlo todo en formatos abiertos y documentados, que cualquiera pueda implementar aunque desaparezca la empresa que los creó. La segunda es la migración: cada cierto tiempo se convierten los ficheros al formato vigente, comprobando que no se pierde nada. Y la tercera es la emulación, que consiste en programas que imitan ordenadores antiguos para poder ejecutar el software original tal como era. Con eso se recuperan cosas tan concretas como videojuegos o bases de datos de los años ochenta.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "cosas tienen que funcionar para leer un fichero" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un aviso que se repite en todos los congresos del ramo y que vale también para cualquier persona con fotos en un disco duro. La información digital no se conserva sola. Exige copias, revisiones periódicas y cambios de formato, es decir, trabajo continuo de alguien durante años. El papel, en cambio, se conserva solo mientras nadie lo moje ni lo queme. Por eso muchos archivos siguen imprimiendo en papel permanente los documentos que deben durar siglos, aunque hayan nacido dentro de un ordenador y nunca hayan pasado por una imprenta.",
      },
    ],
  },
];
