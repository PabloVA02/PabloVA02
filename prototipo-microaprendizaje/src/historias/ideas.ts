import type { Short } from "../shorts";

/* ==========================================================================
   Ideas.

   Los temas que pidió Pablo, con los títulos que él quiere: tajantes y
   dichos como los diría cualquiera. «Por qué llueve», y no «Por qué llueve
   de verdad»; «¿Es el universo infinito?», y no «Dónde acaba el universo».
   La pregunta directa gana a la frase ingeniosa, porque el lector ya sabe si
   le interesa antes de terminar de leerla.

   Aquí va UNA sola fotografía, la de la portada, y las páginas interiores
   salen con su cartel. Es una prueba a propósito: ver cuánto aguanta un short
   sin imágenes dentro. Por eso la de portada tiene que ser la mejor que se
   encuentre —las cuatro de aquí pasan de tres mil píxeles de ancho— y por eso
   se han mirado todas antes de ponerlas. La primera candidata para las
   anguilas eléctricas era una montaña rusa llamada «Electric Eel».
   ========================================================================== */

export const IDEAS: Short[] = [
  {
    id: "al-sol-le-queda-media-vida",
    titulo: "¿Cuánto le queda al sol?",
    gancho:
      "No se apagará como una bombilla: se hinchará hasta tragarse la órbita de la Tierra, y eso empieza mucho antes.",
    categoria: "Ciencia",
    color: "var(--ochre)",
    encargo: "El disco solar en ultravioleta, con las fulguraciones brillando en los bordes.",
    fotos: [
      {
        archivo:
          "Strong Solar Flare Erupts from Sun, May 27, 2024 and Another May 29th (SVS14597 - SDO May 29 2024 1434UT 131-171).jpg",
        autor:
          "El Sol fotografiado en ultravioleta por el observatorio solar SDO durante una fulguración, mayo de 2024. NASA.",
        licencia: "Public domain",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Strong_Solar_Flare_Erupts_from_Sun,_May_27,_2024_and_Another_May_29th_(SVS14597_-_SDO_May_29_2024_1434UT_131-171).jpg",
        foco: "50% 50%",
        alt: "El disco del Sol en tonos naranjas y dorados, con lazos de plasma saliendo del borde y varias zonas encendidas en la superficie.",
      },
    ],
    entrada:
      "En 1938 el físico Hans Bethe explicó por fin de qué vive el Sol, y con esa cuenta se pudo calcular su edad y lo que le queda. Lleva ardiendo cuatro mil seiscientos millones de años y le quedan otros cinco mil. Puesto en una vida humana, tiene cuarenta y tantos años: ni joven ni acabándose. Pero eso no significa que se apague de golpe al final y que hasta entonces aquí no pase nada. Lo que va a hacer el Sol es engordar poco a poco, y ese engorde ya ha empezado. La Tierra tiene los días contados mucho antes, y sabemos con bastante precisión cuántos.",
    paginas: [
      {
        rotulo: "Qué está quemando",
        texto:
          "En el centro del Sol hay tanta presión que los núcleos de hidrógeno se fusionan de cuatro en cuatro y se convierten en helio. Cada fusión suelta energía, y esa energía tarda cien mil años en salir a la superficie a base de rebotar. Lo importante es lo que va quedando: el helio es más pesado y se acumula en el núcleo, que se va comprimiendo y calentando. Por eso el Sol no brilla siempre igual. Hoy alumbra alrededor de un treinta por ciento más que cuando se formó, y seguirá subiendo aproximadamente un uno por ciento cada cien millones de años.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "% más brillante que al nacer" },
      },
      {
        rotulo: "Cuándo nos toca",
        texto:
          "Ese uno por ciento parece poco y no lo es. Dentro de unos mil millones de años el Sol calentará lo bastante como para que los océanos empiecen a evaporarse en serio. Y el vapor de agua es a su vez un gas de efecto invernadero potentísimo, así que acelerará el proceso él solo. La Tierra seguirá aquí, girando, pero seca. O sea que el planeta deja de ser habitable no dentro de cinco mil millones de años, sino dentro de mil. Dicho de otra manera: la vida en la Tierra ha gastado ya cerca del ochenta por ciento del tiempo que tenía.",
        destacado: { tipo: "frase", frase: "La Tierra se queda sin agua mil millones de años antes del final." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Cuando al núcleo se le acabe el hidrógeno, el Sol hará algo que parece contradictorio: el centro se contraerá y las capas de fuera se hincharán muchísimo. Se convertirá en una gigante roja, más fría en la superficie y enorme, y se comerá a Mercurio y a Venus. Con la Tierra el cálculo está justo, porque para entonces el Sol habrá perdido masa y nuestra órbita se habrá ensanchado; puede que se salve por poco y puede que no. Después expulsará sus capas exteriores y quedará el núcleo desnudo, una enana blanca del tamaño de la Tierra que se irá enfriando durante billones de años.",
      },
    ],
  },

  {
    id: "que-sostiene-a-un-avion",
    titulo: "Por qué vuelan los aviones",
    gancho:
      "La explicación del ala que se aprende en el colegio está mal, y lo que de verdad lo sostiene es más simple.",
    categoria: "Ciencia",
    color: "var(--slate)",
    encargo: "El ala de un avión de línea vista desde la ventanilla, sobre un mar de nubes.",
    fotos: [
      {
        archivo: "Airliner wing and clouds over South Pacific.jpg",
        autor:
          "El ala de un avión de línea sobre el Pacífico sur, vista desde la ventanilla. Fotografía de Daniel Case.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Airliner_wing_and_clouds_over_South_Pacific.jpg",
        foco: "50% 55%",
        alt: "El ala blanca de un avión sobresaliendo sobre un campo de nubes de tormenta iluminadas por el sol.",
      },
    ],
    entrada:
      "Desde los años treinta se enseña en los colegios la misma explicación. El ala es más curva por arriba; el aire de arriba recorre más camino y va más rápido; y al ir más rápido tiene menos presión, así que el ala sube. Suena redondo y tiene un problema serio: nadie ha emparejado esas dos corrientes. No hay razón alguna para que lleguen al final del ala a la vez. Medido, el de arriba llega mucho antes. Y sin embargo el avión vuela, y vuela también boca abajo, cosa que esa explicación no admite. La buena es más simple y más vieja.",
    paginas: [
      {
        rotulo: "Lo que hace",
        texto:
          "Un ala vuela porque desvía aire hacia abajo. Eso es todo, y es una ley que tiene trescientos años: si empujas una masa de aire hacia abajo, el aire te empuja a ti hacia arriba con la misma fuerza. El ala va ligeramente inclinada respecto al aire que le llega y su forma curva hace que el flujo se pegue a ella y salga por detrás apuntando hacia el suelo. Un avión de línea en crucero está tirando hacia abajo del orden de una tonelada de aire por segundo. La curvatura de arriba ayuda mucho a que el aire se pegue y no se desprenda, pero no es la causa del asunto.",
        destacado: { tipo: "frase", frase: "El ala no chupa hacia arriba: tira del aire hacia abajo." },
      },
      {
        rotulo: "Por qué se cae",
        texto:
          "Si eso es así, la clave está en cuánto se puede inclinar el ala. Al aumentar la inclinación se desvía más aire y hay más sustentación, hasta un punto en el que el flujo deja de seguir la curva y se despega en remolinos. Ahí el ala pierde de golpe casi toda la fuerza y el avión entra en pérdida. Ocurre siempre en el mismo ángulo, alrededor de quince grados, y no depende de la velocidad: se puede entrar en pérdida rapidísimo. Por eso los aviones llevan un avisador que vibra en el mando antes de llegar, y por eso los pilotos entrenan la reacción, que es contraintuitiva: bajar el morro.",
        destacado: { tipo: "cifra", cifra: "15", unidad: "grados y el ala deja de sostener" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La prueba de que la explicación buena es la buena la dan los aviones acrobáticos, que vuelan boca arriba y boca abajo con la misma facilidad. Con el ala invertida, la parte curva queda debajo, y sin embargo el avión sigue subiendo: basta con inclinar el morro para que el ala vuelva a desviar aire hacia el suelo. Muchos aviones acrobáticos llevan directamente alas simétricas, sin curvatura ninguna, y sostienen igual. Un ala plana también vuela; lo hace peor, gasta más y entra en pérdida antes, pero vuela. Lo que no vuela nunca es un ala que no esté inclinada respecto al aire.",
      },
    ],
  },

  {
    id: "donde-acaba-el-universo",
    titulo: "¿Es el universo infinito?",
    gancho:
      "Que veamos hasta un límite no significa que ahí se acabe. Es exactamente lo mismo que pasa con el horizonte del mar.",
    categoria: "Ciencia",
    color: "var(--plum)",
    encargo: "Un campo profundo lleno de galaxias, de las que hace el telescopio espacial James Webb.",
    fotos: [
      {
        archivo: "Webb's First Deep Field.jpg",
        autor:
          "El primer campo profundo del telescopio espacial James Webb, 2022. Cada mancha alargada es una galaxia entera. NASA, ESA, CSA y STScI.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Webb%27s_First_Deep_Field.jpg",
        foco: "50% 50%",
        alt: "Un cielo negro cubierto de cientos de galaxias blancas, doradas y rojizas, algunas estiradas en arcos por la gravedad.",
      },
    ],
    entrada:
      "Desde que en 1929 se descubrió que el universo se expande, la pregunta se repite: ¿acaba en algún sitio? Casi siempre se contesta con otra cosa, que el universo observable mide noventa y tres mil millones de años luz. Es verdad y no responde. Ese número es hasta dónde nos ha dado tiempo a ver, porque la luz tiene una velocidad y el universo una edad. Es un límite nuestro, no suyo, igual que el horizonte del mar no es el borde del océano sino el borde de tu vista. Lo que hay pasado ese horizonte no lo sabemos, y puede que no lo sepamos nunca.",
    paginas: [
      {
        rotulo: "Lo que se mide",
        texto:
          "Lo que sí se puede medir es la forma del espacio. Se hace mirando la luz más antigua que existe, la que quedó del universo recién nacido, que llega llena de manchas. Sabemos qué tamaño tenían aquellas manchas y podemos compararlo con el que aparentan hoy. Si el espacio estuviera curvado, la geometría las deformaría de una manera concreta y medible, igual que un mapa deforma Groenlandia. Las medidas dicen que está plano hasta donde alcanza la precisión, con un margen menor del uno por ciento. Y un universo plano y sin bordes, si es plano del todo, es infinito.",
        destacado: { tipo: "frase", frase: "El espacio está plano hasta donde llega el instrumento." },
      },
      {
        rotulo: "Por qué no cierra",
        texto:
          "El problema es ese «hasta donde alcanza la precisión». Una esfera enorme también parece plana si solo puedes mirar un trozo pequeño, que es justo lo que le pasa a cualquiera de pie en un campo. Nadie deduce la curvatura de la Tierra mirando una era. Con los datos actuales, si el universo fuera cerrado y finito tendría que ser al menos unas cuantas veces mayor que la parte que vemos, y podría ser muchísimo mayor que eso. O sea que las dos respuestas siguen encima de la mesa: infinito, o finito y descomunal. Y ninguna medida en marcha promete separarlas.",
        destacado: { tipo: "frase", frase: "Caben las dos: infinito, o finito y descomunal." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Y hay una trampa añadida. El universo no solo se expande: se expande cada vez más deprisa. Eso significa que las galaxias más lejanas se están alejando de nosotros a un ritmo que crece, y llegará un momento en que su luz no pueda alcanzarnos nunca. O sea que nuestro horizonte no se va a ensanchar con el tiempo, como sería lógico si solo fuera cuestión de esperar: se va a encoger. Dentro de cien mil millones de años, un astrónomo en esta galaxia vería un cielo casi vacío y no tendría manera de deducir que hubo un Big Bang. La respuesta a esta pregunta no está en camino de mejorar.",
      },
    ],
  },

  {
    id: "por-que-llueve-de-verdad",
    titulo: "Por qué llueve",
    gancho:
      "El vapor no basta para formar una gota. Casi toda la lluvia necesita una mota de polvo, de sal o de bacteria.",
    categoria: "Ciencia",
    color: "var(--sage)",
    encargo: "Una cortina de lluvia cayendo de una nube oscura sobre un río, a contraluz.",
    fotos: [
      {
        archivo:
          "Landscape with stormy clouds and a pirogue on the Mekong at golden hour in Si Phan Don.jpg",
        autor:
          "Una cortina de lluvia sobre el Mekong, en Si Phan Don, Laos. Fotografía de Basile Morin.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Landscape_with_stormy_clouds_and_a_pirogue_on_the_Mekong_at_golden_hour_in_Si_Phan_Don.jpg",
        foco: "50% 45%",
        alt: "Un río ancho bajo nubes negras, con una cortina de lluvia cayendo al fondo y la orilla verde iluminada por el sol.",
      },
    ],
    entrada:
      "La versión corta es que el agua se evapora, sube, se enfría y cae. Le falta el paso más raro, que no se entendió hasta principios del siglo XX. El vapor de agua, por mucho que se enfríe, no forma gotas él solo: necesita algo sólido donde agarrarse, y diminuto. Sin esas motas, el aire puede cargarse de vapor muy por encima de lo que le corresponde y aun así no llover. Las nubes que ves están construidas sobre polvo del desierto, sal del mar, humo de incendios, polen y hasta bacterias, una partícula por cada gota. Sin suciedad en el aire no habría lluvia.",
    paginas: [
      {
        rotulo: "El grano de arena",
        texto:
          "A esas partículas se les llama núcleos de condensación. El vapor se pega a ellas y forma una gotita de nube, tan pequeña que hacen falta un millón para juntar una gota de lluvia. Esas gotitas no caen: son tan ligeras que las sostiene el propio movimiento del aire, y por eso una nube flota. Para que llueva tienen que juntarse, y ahí hay dos caminos. En los trópicos chocan unas con otras y se van fusionando. En las latitudes medias pasa otra cosa más rara, y es que casi toda nuestra lluvia empieza siendo hielo.",
        destacado: { tipo: "cifra", cifra: "1.000.000", unidad: "gotitas por cada gota de lluvia" },
      },
      {
        rotulo: "Nieve que no llega",
        texto:
          "Arriba, en una nube alta, conviven cristalitos de hielo y gotas de agua líquida a temperatura bajo cero. El agua puede seguir siendo líquida hasta casi cuarenta grados negativos si no encuentra dónde congelarse. Es una convivencia inestable: el hielo roba el vapor a las gotas, así que los cristales crecen mientras las gotas se encogen y acaban desapareciendo. Cuando el cristal pesa lo suficiente, cae. Y si al bajar atraviesa aire templado, se derrite por el camino y llega al suelo hecho lluvia. Buena parte de la lluvia que te moja en primavera era nieve diez minutos antes, a tres kilómetros de altura.",
        destacado: { tipo: "frase", frase: "Casi toda la lluvia empieza siendo nieve." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Falta lo que decide dónde cae. El aire solo suelta su agua si sube, porque al subir se expande, y al expandirse se enfría. Y sube por tres motivos. Porque el suelo lo calienta y flota. Porque se topa con una montaña y no le queda otra. O porque una masa de aire frío se le mete por debajo y lo levanta. De ahí que llueva tantísimo en la cara de una sierra que mira al mar, y casi nada justo detrás, donde el aire ya baja seco y caliente. Media geografía de un país —dónde hay bosque, dónde hay secano y dónde empieza el desierto— sale de esa cuenta y de ninguna otra.",
      },
    ],
  },
];
