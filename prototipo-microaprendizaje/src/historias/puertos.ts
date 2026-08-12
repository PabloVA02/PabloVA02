import type { Short } from "../shorts";

/* ==========================================================================
   Los puertos.

   El sitio donde el mar se encuentra con la tierra y donde se decide el
   precio de casi todo. El tema se estropea si se cuenta con toneladas
   movidas: hay que contarlo desde el muelle y desde la marea.

   La regla del tema: se explica el PROBLEMA FÍSICO de cada puerto —la
   marea, el calado, el oleaje, el fango— y qué se construyó para resolverlo.
   Y siempre se dice qué ciudad ganó o perdió con ello, porque un puerto es
   una decisión económica antes que una obra.
   ========================================================================== */

export const PUERTOS: Short[] = [
  {
    id: "el-problema-de-la-marea",
    titulo: "Puertos con marea de 6 m",
    gancho: "En los puertos del norte de Europa el agua sube y baja varios metros, así que hubo que inventar dársenas con puerta.",
    categoria: "Puertos",
    color: "var(--slate)",
    encargo: "Un muelle de piedra con un barco apoyado en el fango durante la marea baja.",
    /* De arriba abajo del short: el puerto en seco, la dársena cerrada, los
       kilómetros de muelle que salieron de ahí y el problema de hoy. */
    fotos: [
      {
        archivo: "Georges Pierre Seurat - Port-en-Bessin, The Outer Harbor (Low Tide) - 4-1934 - Saint Louis Art Museum.jpg",
        autor: "Port-en-Bessin, el antepuerto con marea baja. Óleo de Georges Seurat, 1888. Saint Louis Art Museum.",
        licencia: "Dominio público",
        pdPorEdad: 1891,
        foco: "50% 60%",
        alt: "Pintura puntillista de un puerto vacío de agua, con el fondo del canal al descubierto entre dos muelles y el pueblo al fondo.",
      },
      {
        archivo: "Albert Dock - geograph.org.uk - 6220207.jpg",
        autor: "El Albert Dock de Liverpool, una dársena cerrada donde el nivel del agua no depende de la marea. Fotografía de Chris Heaton, 2019.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Albert_Dock_-_geograph.org.uk_-_6220207.jpg",
        foco: "50% 45%",
        alt: "Una lámina de agua quieta rodeada por cuatro lados de almacenes de ladrillo rojo con columnas en la planta baja.",
      },
      {
        archivo: "Albert Dock & Pumphouse from Strand Street.jpg",
        autor: "Los muelles de Liverpool desde Strand Street, con la casa de bombas que movía las compuertas. Fotografía de Rodhullandemu, 2018.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Albert_Dock_%26_Pumphouse_from_Strand_Street.jpg",
        foco: "50% 55%",
        alt: "Vista de una dársena con barcos amarrados, una chimenea de ladrillo en el centro y almacenes alineados al fondo.",
      },
      {
        archivo: "Hapag-Lloyd Container Ship Tokyo Express in Colon Panama 2016 6070.jpg",
        autor: "Un portacontenedores en la terminal de Colón, a la entrada del canal de Panamá. Fotografía de Paul Harrison, 2015.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Hapag-Lloyd_Container_Ship_Tokyo_Express_in_Colon_Panama_2016_6070.jpg",
        foco: "50% 60%",
        alt: "Un buque de carga negro bajo una hilera de grúas azules, con el agua en primer término y montes al fondo.",
      },
    ],
    entrada:
      "Liverpool, 1715. En muchos puertos del norte de Europa la diferencia entre marea alta y baja supera los seis metros. Cada doce horas el agua se retira y deja los barcos apoyados sobre el fondo. Un barco cargado que se sienta en el fango sufre esfuerzos que puede no aguantar. Y descargarlo se convierte en un trabajo imposible de planificar, porque la altura del muelle respecto a la cubierta cambia cada hora. Con seis metros de diferencia, media jornada el barco está arriba del muelle y la otra media, abajo del todo. La solución que se inventa en Liverpool consiste en encerrar el agua para que deje de subir y bajar.",
    paginas: [
      {
        rotulo: "La dársena",
        texto:
          "La solución fue construir un recinto cerrado con una compuerta, que se llenaba con la marea alta y se cerraba después para mantener el nivel constante durante todo el día. Dentro de esa dársena los barcos flotan siempre a la misma altura, así que se pueden descargar a cualquier hora con grúas fijas y sin depender del reloj de las mareas. La primera dársena comercial de este tipo se abrió en 1715 y cambió el ritmo de trabajo del puerto entero. A partir de entonces se cargaba y se descargaba de forma continua, sin esperar a nada.",
        destacado: { tipo: "cifra", cifra: "6", unidad: "metros de diferencia entre mareas" },
      },
      {
        rotulo: "La ventaja",
        texto:
          "Ese detalle técnico decidió qué ciudades crecieron. Un puerto con dársenas podía garantizar a un armador que su barco entraría y saldría en fechas previsibles, lo que reducía el tiempo de amarre y, con él, el coste del viaje. Los puertos que siguieron dependiendo de la marea perdieron tráfico frente a los que invirtieron en compuertas, esclusas y muelles de piedra. En un siglo, aquella ciudad pasó de ser un puerto secundario a mover una parte enorme del comercio atlántico británico, con kilómetros de muelles construidos uno detrás de otro.",
        destacado: { tipo: "frase", frase: "El armador quiere fechas fijas, y la marea no las da." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron dársenas por toda la costa europea, muchas convertidas hoy en barrios de viviendas y museos cuando el tráfico se mudó a terminales de contenedores más afuera. Quedó también el problema, que sigue existiendo con otra escala: los barcos actuales necesitan mucha profundidad, así que los puertos compiten dragando sus canales de acceso para poder recibirlos. La diferencia es que ahora no manda la marea, sino cuántos metros de calado puede permitirse mantener cada ciudad, dragando su canal año tras año. Sigue siendo, como en 1715, una cuestión de dinero y de previsión.",
      },
    ],
  },
  {
    id: "el-dique-que-rompe-las-olas",
    titulo: "El dique desordena la ola",
    gancho: "Los bloques de hormigón con forma extraña que se ven en los puertos están calculados para que el agua se enrede entre ellos.",
    categoria: "Puertos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una escollera con grandes bloques de hormigón de cuatro brazos apilados.",
    fotos: [
      {
        archivo: "Tetrapoden als Wellenbrecher - Monaco - wundervoll.media.jpg",
        autor: "Tetrápodos protegiendo el dique del puerto de Mónaco, 2018. Fotografía de Wundervollmedia.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Tetrapoden_als_Wellenbrecher_-_Monaco_-_wundervoll.media.jpg",
        foco: "50% 50%",
        alt: "Un dique visto desde arriba, con bloques de hormigón amontonados en la cara del mar y el agua rompiendo en espuma contra ellos.",
      },
      {
        archivo: "ടെട്രാപോഡ് 06.jpg",
        autor: "Tetrápodos de hormigón encajados unos en otros, Kerala (India), 2025. Fotografía de Anish Nellickal.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:%E0%B4%9F%E0%B5%86%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B4%BE%E0%B4%AA%E0%B5%8B%E0%B4%A1%E0%B5%8D_06.jpg",
        foco: "50% 50%",
        alt: "Primer plano de varios bloques de hormigón de cuatro brazos trabados entre sí, dejando huecos oscuros.",
      },
      {
        archivo: "Port of Varna, December, 2018-1.jpg",
        autor: "Dique y dársena del puerto de Varna, Bulgaria, diciembre de 2018. Fotografía de Alexey Komarov.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Port_of_Varna,_December,_2018-1.jpg",
        foco: "50% 50%",
        alt: "Vista del dique de abrigo de un puerto, con el agua picada por fuera y en calma por dentro.",
      },
      {
        archivo: "DolosseGreenPoint.jpg",
        autor: "Dolos, otra familia de bloques de abrigo, en Green Point, Ciudad del Cabo, 2018. Fotografía de The Interior.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:DolosseGreenPoint.jpg",
        foco: "50% 50%",
        alt: "Bloques de hormigón con forma de hueso retorcido apilados a lo largo de una orilla rocosa.",
      },
    ],
    entrada:
      "Puertos de todo el mundo, con un diseño que se patentó en Francia en 1950. Un dique de abrigo tiene que proteger la dársena del oleaje, y la forma más antigua de hacerlo era amontonar piedra hasta formar un muro macizo delante del puerto. El problema es que un muro vertical devuelve la ola entera con toda su fuerza, y esa ola reflejada excava el fondo justo al pie del muro hasta descalzarlo. Así se perdieron diques enteros durante siglos, y por eso se buscó otra manera de plantar cara al mar que no consistiera en pararlo.",
    paginas: [
      {
        rotulo: "Enredar el agua",
        texto:
          "La idea moderna es no oponerse frontalmente al agua, sino obligarla a perder energía por el camino. Para eso se colocan bloques de hormigón con brazos cruzados, que encajan entre sí dejando huecos. La ola entra en ese laberinto, rebota, choca consigo misma y sale con mucha menos fuerza. Además, al engancharse unos con otros, los bloques forman un manto trabado que resiste el arrastre del temporal y no se desmonta pieza a pieza. Cada pieza puede pesar decenas de toneladas y se colocan con grúas siguiendo un plano, porque la posición de cada una importa.",
        destacado: { tipo: "frase", frase: "La ola entra en un laberinto de huecos y sale sin fuerza." },
      },
      {
        rotulo: "El cálculo",
        texto:
          "Diseñar un dique consiste en calcular la ola más grande que puede aparecer en ese sitio y dimensionar los bloques para que no se muevan con ella. Ese cálculo se hace con estadísticas de temporales de varias décadas. Después se comprueba en canales de laboratorio, donde se construyen maquetas del puerto y se generan olas a escala para ver qué bloques se mueven. Aun así, los temporales excepcionales desordenan mantos enteros. Muchos puertos tienen que recolocar bloques cada pocos años, después de una borrasca especialmente dura, y algunos han tenido que rehacer el dique entero.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "toneladas puede pesar un solo bloque" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron esas piezas de hormigón que todo el mundo ha visto y que casi nadie sabe por qué tienen esa forma tan rara. Existen varias familias distintas, con nombres registrados y patentes propias, y cada fabricante promete que la suya encaja mejor, gasta menos hormigón o aguanta olas más altas. Quedó también una lección que vale para cualquier obra frente al mar. Resistir de frente sale carísimo y suele acabar fallando, mientras que dejar pasar el agua por un camino que la agote resulta más barato y aguanta mucho mejor.",
      },
    ],
  },
  {
    id: "la-ciudad-que-perdio-el-puerto",
    titulo: "Ciudades sin mar",
    gancho: "Un río que arrastra sedimentos puede cegar un puerto en un siglo y dejarlo tierra adentro.",
    categoria: "Puertos",
    color: "var(--plum)",
    encargo: "Unas ruinas antiguas de piedra rodeadas de campos, lejos de la costa.",
    entrada:
      "Costa de Anatolia, siglos I a VI. Una de las ciudades más ricas del Mediterráneo vive de su puerto, con barcos que llegan hasta el pie de sus almacenes. Un río desemboca justo al lado y arrastra tierra y arena desde el interior. Esa carga se deposita donde el agua pierde velocidad, que es precisamente la bocana del puerto.",
    paginas: [
      {
        rotulo: "El sedimento",
        texto:
          "El proceso es lento y no da avisos claros. Cada crecida deja un poco más de fango, el calado disminuye unos centímetros y los barcos grandes empiezan a tener problemas para entrar. La ciudad reaccionó como han reaccionado todos los puertos de la historia: dragando. Se conservan referencias antiguas a obras para limpiar la bocana y a canales excavados para desviar el río, y algunas de aquellas obras funcionaron durante varias décadas antes de volver a cegarse. Pero el río seguía trayendo material cada año, y el dragado había que repetirlo una y otra vez con dinero público.",
        destacado: { tipo: "frase", frase: "Cada crecida dejaba fango, y el dragado había que repetirlo." },
      },
      {
        rotulo: "Tierra adentro",
        texto:
          "Con los siglos, la costa avanzó varios kilómetros sobre el mar y la ciudad quedó rodeada de campos. Sin puerto no había comercio, y sin comercio no había motivo para seguir allí. La población se fue trasladando poco a poco y el lugar acabó abandonado del todo, con sus templos y su teatro intactos. Hoy sus ruinas están a unos cinco kilómetros de la costa y son de las mejor conservadas del mundo antiguo. Quien las visita puede caminar por lo que fue el muelle sin ver el mar por ninguna parte.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "kilómetros separan hoy las ruinas del mar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un ejemplo que se repite en muchas costas del mundo, con puertos medievales convertidos en pueblos de interior y con estuarios enteros que hubo que abandonar. Y quedó el trabajo interminable. Todos los puertos de estuario del mundo dragan cada año, moviendo millones de metros cúbicos de fango que además hay que llevar a alguna parte, casi siempre mar adentro. Es una factura permanente que no aparece en ningún folleto turístico y que decide, muchas veces, si un puerto seguirá existiendo dentro de cincuenta años o será otro pueblo de interior.",
      },
    ],
  },
];
