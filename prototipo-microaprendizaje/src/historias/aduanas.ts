import type { Short } from "../shorts";

/* ==========================================================================
   Las aduanas.

   La frontera como oficina: quién entra, qué paga y qué se queda fuera. El
   tema aburre si se cuenta con aranceles y porcentajes.

   La regla del tema: cada short cuenta UN CONTRABANDO CONCRETO y cómo se
   intentó parar, porque la aduana solo se entiende mirando lo que quiere
   colarse. Con fechas, con precios comparados y sin moralina sobre el
   contrabandista, que casi siempre era un vecino más.
   ========================================================================== */

export const ADUANAS: Short[] = [
  {
    id: "la-linea-de-la-sal",
    titulo: "Aduanas dentro de Francia",
    gancho: "Separaba las regiones donde la sal era barata de aquellas donde costaba veinte veces más. Y estaba vigilada.",
    categoria: "Aduanas",
    color: "var(--ochre)",
    encargo: "Un sendero entre campos con una hilera de mojones de piedra.",
    fotos: [
      {
        archivo: "Sissable10.JPG",
        autor: "Las salinas de Guérande, en la Bretaña francesa, con la salicornia enrojecida y un montón de sal cubierto al fondo. Fotografía de Jibi44.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sissable10.JPG",
        foco: "50% 55%",
        alt: "Balsas de agua poco profunda separadas por caballones, con matas rojas y verdes creciendo entre ellas.",
      },
      {
        archivo: "Eugène-Jacques Feyen-Les Paludières.jpg",
        autor: "Las salineras, óleo de Eugène-Jacques Feyen hacia 1872. Museo de las Salinas de Batz-sur-Mer.",
        licencia: "Dominio público",
        pdPorEdad: 1908,
        fuente: "https://commons.wikimedia.org/wiki/File:Eug%C3%A8ne-Jacques_Feyen-Les_Paludi%C3%A8res.jpg",
        foco: "50% 40%",
        alt: "Un cuadro con varias mujeres cargando cestos de sal por los caminos estrechos de una salina.",
      },
      {
        archivo: "Boundary post and boundary stone - geograph.org.uk - 7751016.jpg",
        autor: "Un poste y un mojón marcando un límite en pleno campo. Fotografía de Christine Johnstone.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Boundary_post_and_boundary_stone_-_geograph.org.uk_-_7751016.jpg",
        foco: "50% 50%",
        alt: "Una piedra baja y un poste clavados en la hierba, sin ninguna valla alrededor, señalando una raya invisible.",
      },
      {
        archivo: "Piles of Salt Salar de Uyuni Bolivia Luca Galuzzi 2006 a.jpg",
        autor: "Conos de sal amontonada para secarse en el salar de Uyuni, en Bolivia. Fotografía de Luca Galuzzi.",
        licencia: "CC BY-SA 2.5",
        fuente: "https://commons.wikimedia.org/wiki/File:Piles_of_Salt_Salar_de_Uyuni_Bolivia_Luca_Galuzzi_2006_a.jpg",
        foco: "50% 55%",
        alt: "Decenas de montoncitos cónicos de sal blanca alineados sobre una llanura blanca y lisa.",
      },
    ],
    entrada:
      "Francia, siglos XV a XVIII. La corona cobra un impuesto sobre la sal que varía muchísimo de una región a otra, no por capricho sino porque cada territorio negoció su propio régimen al incorporarse al reino y nadie se atrevió después a igualarlos. El resultado es una frontera fiscal trazada dentro del propio país, con sus puestos de control, sus patrullas y sus mojones, y con una diferencia de precio que en algunos tramos llega a ser de veinte veces entre un lado del camino y el otro. Con esa diferencia, el contrabando deja de ser un delito raro para convertirse en un oficio.",
    paginas: [
      {
        rotulo: "El negocio",
        texto:
          "Con esa diferencia, el contrabando dejaba de ser un delito ocasional para convertirse en una industria local. Miles de personas cruzaban la línea con sacos, algunas de forma habitual y organizada, y hasta se usaban perros entrenados que hacían el trayecto solos cargados con bolsas. La corona respondió con un cuerpo de guardias dedicado a vigilar aquella frontera interior. Tenían derecho a registrar casas y a controlar cuánta sal compraba cada familia, porque además era obligatorio comprar una cantidad mínima al año. Quien compraba menos de la cuenta ya resultaba sospechoso.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "veces más cara al otro lado de la línea" },
      },
      {
        rotulo: "El castigo",
        texto:
          "Las penas eran durísimas y llenaron las cárceles y las galeras. Se conservan estadísticas de miles de condenas al año por este motivo, muchas de ellas a mujeres y a menores, que eran quienes cruzaban con cantidades pequeñas. El impuesto acabó siendo uno de los agravios más repetidos en los cuadernos de quejas que se recogieron por todo el país en 1789, justo antes de la Revolución francesa. Aparecía en pueblos que no tenían nada más en común. La asamblea revolucionaria lo suprimió al año siguiente, y con él desapareció la línea.",
        destacado: { tipo: "frase", frase: "Se condenaba a galeras por pasar sal de una comarca a otra." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una lección de manual que se repite hoy con el tabaco, el alcohol y el combustible. Cuando dos territorios vecinos gravan lo mismo de forma muy distinta, el contrabando aparece por pura aritmética, sin que haga falta ninguna organización criminal. Quedaron también los caminos de contrabandistas, que hoy se recorren señalizados como rutas de senderismo, y unos cuantos apellidos de la zona que vienen de aquel oficio. Y quedó el propio impuesto en el idioma, porque en varias lenguas la palabra para el salario recuerda que la sal fue durante siglos un bien caro y controlado.",
      },
    ],
  },
  {
    id: "el-arancel-de-la-lana",
    titulo: "La lana costaba una mano",
    gancho: "Inglaterra vivía de exportar tejido, no materia prima. Sacar lana sin permiso llegó a castigarse con mutilación.",
    categoria: "Aduanas",
    color: "var(--slate)",
    encargo: "Un fardo de lana atado con cuerda en el muelle de un puerto.",
    entrada:
      "Inglaterra, siglos XIV a XVIII. El país produce una lana excelente y durante mucho tiempo la vende cruda a los tejedores del continente, que se quedan con el beneficio de transformarla. La corona decide invertir esa situación con leyes muy duras: cobra impuestos altísimos a la lana que sale y prohíbe directamente exportar oveja viva o lana sin trabajar.",
    paginas: [
      {
        rotulo: "Fabricar dentro",
        texto:
          "La idea que había detrás se llamaría después mercantilismo, y consistía en algo bastante simple: exportar productos acabados, que dejan mucho margen, e impedir que el trabajo se haga fuera. Para conseguirlo se combinaban varias medidas. Se cobraban impuestos a la salida de materia prima y se atraía a tejedores extranjeros con ventajas fiscales. Se llegó incluso a obligar por ley a enterrar a los muertos con mortaja de lana inglesa, para asegurar la demanda dentro del país. Las penas por sacar lana incluyeron multas enormes y, en algunas leyes, cortar la mano.",
        destacado: { tipo: "frase", frase: "Se obligó por ley a enterrar a los muertos con mortaja de lana." },
      },
      {
        rotulo: "El contrabando",
        texto:
          "Como pasa siempre, la prohibición creó su propio mercado. Bandas organizadas sacaban fardos de noche por las costas del sur y del este, con barcos que hacían la travesía en pocas horas, y llegó a hablarse de miles de sacas anuales. El gobierno creó patrullas costeras y ofreció recompensas a los delatores, con éxito desigual. En muchos pueblos de la costa el contrabando era la principal fuente de ingresos, así que los guardacostas no se enfrentaban a una banda, sino a la comunidad entera. Hubo tiroteos y muertos por ambos lados.",
        destacado: { tipo: "cifra", cifra: "400", unidad: "años duraron las restricciones" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una industria textil enorme dentro del país, que fue el punto de partida de la Revolución industrial, y quedó también la discusión sobre si aquello funcionó por las leyes o a pesar de ellas. Los economistas llevan dos siglos sin ponerse de acuerdo en esa pregunta, y cada bando tiene sus datos. Quedó además una imagen que puede verse todavía hoy. El asiento del presidente de la cámara alta británica es un cojín relleno de lana, colocado allí en el siglo XIV para recordar de dónde salía la riqueza del reino.",
      },
    ],
  },
  {
    id: "el-canal-verde",
    titulo: "El pasillo verde",
    gancho: "Nadie revisa a todo el mundo, porque sería imposible. El sistema funciona con muestreo y con perfiles.",
    categoria: "Aduanas",
    color: "var(--plum)",
    curioso: true,
    encargo: "Dos pasillos de aduana con carteles verde y rojo al fondo de una terminal.",
    entrada:
      "Aeropuertos de todo el mundo, desde los años sesenta. Al salir de la zona de equipajes hay dos pasillos, uno verde para quien no lleva nada que declarar y otro rojo para quien sí. La inmensa mayoría pasa por el verde sin que nadie le diga nada, y esa aparente falta de control es en realidad un sistema muy pensado.",
    paginas: [
      {
        rotulo: "Por qué no revisan",
        texto:
          "Revisar a todos los pasajeros de un vuelo grande llevaría horas y haría inviable el tráfico aéreo, así que las aduanas trabajan por muestreo. Se elige a un porcentaje al azar, lo que impide predecir quién será revisado, y se suman criterios de riesgo: ruta del vuelo, comportamiento, equipaje que no cuadra con el viaje declarado o antecedentes. A eso se añaden los escáneres de equipaje, los perros adiestrados y el intercambio de información entre países, que a veces avisa de un pasajero antes de que aterrice. La combinación de azar y criterio es lo que hace que no compense arriesgarse.",
        destacado: { tipo: "frase", frase: "Nadie sabe a quién van a parar, y ese es el mecanismo." },
      },
      {
        rotulo: "El pasillo rojo",
        texto:
          "Elegir uno u otro pasillo no es un trámite de cortesía: tiene consecuencias legales importantes. Cruzar el verde equivale a declarar formalmente que no se lleva nada prohibido ni sujeto a impuestos. Si después aparece algo, ya no cuenta como olvido: es una infracción, con multa y a veces con delito. Por eso las cantidades límite están publicadas y conviene mirarlas antes de viajar. Llevar dinero en efectivo por encima de cierta cifra sin declararlo puede terminar con el dinero intervenido, aunque su origen sea perfectamente legal y se pueda demostrar después.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "pasillos, y elegir uno es declarar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un modelo que se ha extendido a casi todo el control administrativo moderno, desde las inspecciones de hacienda hasta las de sanidad o las de tráfico. Comprobarlo todo es imposible. Comprobar al azar y con criterio resulta barato y sorprendentemente eficaz, siempre que las sanciones sean serias y se apliquen de verdad cuando toca. Y quedó una diferencia que nota cualquier viajero. Dentro de zonas de libre circulación como la Unión Europea, los pasillos han desaparecido de los vuelos interiores, sencillamente porque ya no hay ninguna frontera fiscal que cruzar.",
      },
    ],
  },
];
