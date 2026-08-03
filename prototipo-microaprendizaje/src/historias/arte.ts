import type { Short } from "../shorts";

/* ==========================================================================
   Arte.

   Aquí no se interpreta nada. Explicar qué quiso decir un cuadro es el camino
   más corto para que alguien suba el dedo y pase a otra cosa.

   La regla del tema: se cuenta el MATERIAL y el MERCADO. Cuánto costaba un
   pigmento y quién lo pagaba, qué se robó y qué pasó después, qué color tenía
   una escultura antes de que alguien la frotara. El arte visto como oficio y
   como negocio da historias con cifras, con fechas y con culpables, que es lo
   que se puede contar en cuatro pantallas.

   Y se desmonta el gusto heredado. Casi todo lo que damos por evidente en un
   museo —el mármol blanco, la obra maestra indiscutible— es una decisión de
   alguien en un siglo concreto, y esa decisión se puede fechar.
   ========================================================================== */

export const ARTE: Short[] = [
  {
    id: "gioconda-robo",
    titulo: "La Gioconda se hizo famosa al ser robada",
    gancho: "En 1911 era un cuadro más. Salió del Louvre bajo una bata de trabajo.",
    categoria: "Arte",
    color: "var(--plum)",
    encargo: "Una pared de museo vacía con los cuatro ganchos de un cuadro descolgado.",
    entrada:
      "La fama no es una propiedad de los objetos. Es algo que decide una multitud y que después olvida haber decidido, y por eso merece la pena mirar cómo se fabrica una. El lunes 21 de agosto de 1911, con el Louvre cerrado, Vincenzo Peruggia descolgó un retrato pequeño, le quitó el marco en una escalera de servicio, se lo metió bajo la bata y salió por la puerta.",
    paginas: [
      {
        rotulo: "Antes",
        texto:
          "Aquel retrato no era, en 1911, el objeto más famoso del planeta; ni siquiera el más famoso de su sala. Tenía prestigio entre críticos y pintores, y Leonardo era Leonardo, pero en las guías del Louvre de la época aparece sin ningún trato especial, y a su lado colgaban obras que se tenían por superiores. La prueba está en lo que ocurrió al descolgarlo: nadie lo echó en falta hasta el día siguiente, y aun entonces se supuso que estaría en el taller de fotografía. Tardaron más de veinticuatro horas en dar la alarma en serio.",
        destacado: {
          tipo: "frase",
          frase: "Tardaron un día entero en darse cuenta de que faltaba.",
        },
      },
      {
        rotulo: "El vacío",
        texto:
          "Cuando por fin la dieron, empezó el primer fenómeno mediático moderno construido alrededor de una obra de arte. Los periódicos de medio mundo llevaron la imagen a portada durante semanas, y en el Louvre se formaron colas para ver el hueco de la pared: cuatro ganchos y nada más. Miles de personas guardando cola para mirar donde no había nada; ahí está, entera, la operación por la que un cuadro se convierte en un icono. La policía interrogó a Guillaume Apollinaire, que pasó varios días detenido, y a un Picasso de treinta años.",
        destacado: { tipo: "cifra", cifra: "2 años", unidad: "en paradero desconocido" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El icono reapareció en Florencia en <strong>1913</strong>, cuando Peruggia intentó vendérselo a un anticuario. Alegó patriotismo: quería devolverle a Italia una obra que Napoleón había saqueado. Era falso, porque Leonardo se llevó él mismo el cuadro a Francia y allí lo vendió; aun así cumplió siete meses escasos de cárcel y en Italia hubo quien lo trató de héroe. La pintura volvió al Louvre en 1914 convertida en otra cosa: ya no era una pintura, era una celebridad, y las celebridades se visitan, no se miran. Hoy pasa ante ella más gente que ante ninguna otra obra del mundo.",
      },
    ],
  },

  {
    id: "marmol-pintado",
    titulo: "Las estatuas griegas eran de colores chillones",
    gancho: "El blanco puro que admiramos es pintura perdida y un ideal del siglo XVIII.",
    categoria: "Arte",
    color: "var(--clay)",
    encargo: "Un torso de mármol antiguo iluminado de lado, superficie con marcas de desgaste.",
    entrada:
      "La imagen que todo el mundo tiene de la Antigüedad clásica es de mármol blanco: templos blancos, dioses blancos, una sobriedad limpia. Es exactamente al revés. Aquellas esculturas y aquellos edificios estaban pintados con colores intensos —rojos, azules, ocres, dorados—, y lo que ha llegado a nosotros es lo que quedó cuando la pintura se cayó.",
    paginas: [
      {
        rotulo: "Las pruebas",
        texto:
          "No es una hipótesis: es un rastro medible. Desde los años ochenta, el arqueólogo Vinzenz Brinkmann viene analizando esculturas con luz rasante, ultravioleta y análisis químico, y encuentra los restos de pigmento allí donde la piedra se ha protegido del roce, en los pliegues y en las cavidades. Con esos datos ha reconstruido versiones a todo color que resultan chocantes a la vista moderna. Además, las fuentes escritas antiguas hablan del asunto sin ninguna solemnidad: los griegos mencionaban a los pintores de estatuas como un oficio más, tan necesario como el escultor.",
        destacado: {
          tipo: "frase",
          frase: "La pintura no es una teoría: está en los pliegues, medida.",
        },
      },
      {
        rotulo: "El ideal blanco",
        texto:
          "Que el blanco se convirtiera en la marca de lo clásico tiene autor y fecha. El historiador Johann Joachim Winckelmann, hacia <strong>1764</strong>, defendió que la ausencia de color era precisamente la señal de la superioridad griega, la belleza depurada de todo adorno. Su influencia fue enorme y moldeó el gusto europeo durante siglo y medio; el neoclasicismo entero se construyó sobre esa idea. Y no solo se creyó: en varios museos del XIX y del XX se limpiaron piezas frotando la superficie, con lo que restos de policromía que habían aguantado dos mil años desaparecieron en una tarde.",
        destacado: { tipo: "cifra", cifra: "1764", unidad: "el año en que se inventó el mármol blanco" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las reconstrucciones en color de Brinkmann llevan veinte años exponiéndose y siguen provocando rechazo: mucha gente las encuentra hortera, de parque temático. Parte de esa reacción es real —hay decisiones discutibles sobre tonos exactos, y los propios investigadores lo reconocen— y parte es simplemente que estamos educados en un error. El caso sirve además para algo más ancho: lo que un museo enseña no es el pasado, es lo que ha sobrevivido, filtrado además por lo que a cada época le pareció digno de conservar, de restaurar y de limpiar a fondo.",
      },
    ],
  },

  {
    id: "azul-ultramar",
    titulo: "Hubo un azul que costaba más que el oro",
    gancho: "Venía de una sola montaña de Afganistán y salía en los contratos por escrito.",
    categoria: "Arte",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un trozo de lapislázuli en bruto junto a pigmento azul molido en un mortero.",
    entrada:
      "En un contrato de encargo del Renacimiento, el precio no lo ponía solo el pintor: lo ponía la paleta. Y había un color que se negociaba aparte, con su cláusula propia, porque valía más por peso que el oro. Se llamaba ultramar, se obtenía de una piedra semipreciosa y durante siglos vino de un único sitio del mundo.",
    paginas: [
      {
        rotulo: "La montaña",
        texto:
          "El lapislázuli de calidad salía de las minas de Sar-e-Sang, en el valle de Badajshán, en el actual Afganistán, y prácticamente de ningún otro lugar accesible. De ahí viene el nombre: <em>ultramarinus</em>, «de más allá del mar», que es como llegaba a Europa después de un viaje de miles de kilómetros. La piedra por sí sola no basta: molida da un gris azulado sucio, y para sacarle el azul intenso hay que amasarla con cera, resina y aceite y lavarla repetidamente en lejía, un proceso lento que descarta la mayor parte del material.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "yacimiento surtía a toda Europa" },
      },
      {
        rotulo: "La cláusula",
        texto:
          "Por eso los contratos lo detallaban. Se especificaba la calidad del ultramar, cuántas onzas se emplearían y quién las pagaba, igual que se hacía con el pan de oro. Ese coste explica algo que suele leerse como teología: el manto de la Virgen es azul en tantísimas obras porque el azul era el pigmento más caro y usarlo era una manera de demostrar el gasto del comitente. Vermeer lo empleó con una generosidad temeraria, y su viuda declaró deudas considerables tras su muerte; no fue la única causa, pero la pintura no ayudaba.",
        destacado: {
          tipo: "frase",
          frase: "El manto azul de la Virgen es, ante todo, una factura.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "El monopolio se acabó de golpe. En 1824, una sociedad francesa ofreció un premio en metálico a quien lograra fabricar ultramar artificialmente, y dos años después el químico Jean-Baptiste Guimet lo consiguió. El azul que costaba una fortuna pasó a valer céntimos, y de pronto estuvo al alcance de cualquier pintor, lo cual es una de las razones —no la única— de que la pintura del siglo XIX se llene de cielos y de sombras azules. Los restauradores, en cambio, distinguen el natural del sintético a simple vista bajo el microscopio: el antiguo tiene motas.",
      },
    ],
  },
];
