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
    titulo: "El robo hizo la Gioconda",
    gancho: "En 1911 era un cuadro más. Salió del Louvre bajo una bata de trabajo.",
    categoria: "Arte",
    color: "var(--plum)",
    encargo: "Una pared de museo vacía con los cuatro ganchos de un cuadro descolgado.",
    fotos: [
      {
        archivo: "Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg",
        autor: "El retrato de Leonardo da Vinci, pintado entre 1503 y 1506. Museo del Louvre.",
        licencia: "Dominio público",
        pdPorEdad: 1519,
        fuente: "https://commons.wikimedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg",
        foco: "50% 30%",
        alt: "El retrato de una mujer sentada con las manos cruzadas, con un paisaje de rocas y agua detrás.",
      },
      {
        archivo: "Alexandre Brun - View of the Salon Carré at the Louvre.jpg",
        autor: "El Salón Cuadrado del Louvre, óleo de Alexandre Brun, hacia 1880.",
        licencia: "Dominio público",
        pdPorEdad: 1911,
        fuente: "https://commons.wikimedia.org/wiki/File:Alexandre_Brun_-_View_of_the_Salon_Carr%C3%A9_at_the_Louvre.jpg",
        foco: "50% 45%",
        alt: "Una sala de museo con las paredes cubiertas de cuadros del suelo al techo y dos visitantes diminutos.",
      },
      {
        archivo: "Grande Galerie Louvre by Thomas Allom.jpg",
        autor: "La Gran Galería del Louvre con los copistas trabajando, grabado de Thomas Allom, hacia 1844.",
        licencia: "Dominio público",
        pdPorEdad: 1872,
        fuente: "https://commons.wikimedia.org/wiki/File:Grande_Galerie_Louvre_by_Thomas_Allom.jpg",
        foco: "50% 45%",
        alt: "Grabado de una galería abovedada larguísima, con caballetes y pintores copiando los cuadros de las paredes.",
      },
      {
        archivo: "Crowd looking at the Mona Lisa at the Louvre.jpg",
        autor: "La cola diaria delante del cuadro. Fotografía de Victor Grigas, 2014.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Crowd_looking_at_the_Mona_Lisa_at_the_Louvre.jpg",
        foco: "62% 45%",
        alt: "Una multitud apretada levantando móviles y cámaras hacia un cuadro pequeño colgado en una pared beige.",
      },
    ],
    entrada:
      "La fama no está dentro de los objetos. Es algo que decide una multitud y que después olvida haber decidido, y de tarde en tarde se puede ver cómo se fabrica una desde cero. El lunes 21 de agosto de 1911, con el Louvre cerrado al público por ser día de limpieza, un albañil italiano llamado Vincenzo Peruggia que había trabajado en el propio museo descolgó de la pared un retrato pequeño, se metió en una escalera de servicio, le quitó allí mismo el marco y el cristal, escondió la tabla bajo la bata blanca de trabajo y salió tranquilamente por la puerta. Nadie lo paró.",
    paginas: [
      {
        rotulo: "Antes",
        texto:
          "Aquel retrato no era, en 1911, el objeto más famoso del planeta. Ni siquiera el más famoso de su sala. Tenía prestigio entre críticos y pintores, y Leonardo era Leonardo, pero en las guías del Louvre de la época aparece sin trato especial, y a su lado colgaban obras que se tenían por mejores. La prueba está en lo que ocurrió al descolgarlo: nadie lo echó en falta hasta el día siguiente, y aun entonces se supuso que estaría en el taller de fotografía. Tardaron más de veinticuatro horas en dar la alarma.",
        destacado: {
          tipo: "frase",
          frase: "Tardaron un día entero en darse cuenta de que faltaba.",
        },
      },
      {
        rotulo: "El vacío",
        texto:
          "Cuando por fin la dieron, empezó el primer circo mediático montado alrededor de un cuadro. Los periódicos de medio mundo lo llevaron a portada durante semanas, y en el Louvre se formaron colas para ver el sitio donde había estado: cuatro ganchos y una pared. Miles de personas guardando turno para mirar donde no había nada. Ahí está entera la operación por la que una pintura se convierte en un icono. La policía llegó a interrogar a Guillaume Apollinaire, que pasó varios días detenido, y a un Picasso de treinta años.",
        destacado: { tipo: "cifra", cifra: "2 años", unidad: "en paradero desconocido" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El icono reapareció en Florencia en <strong>1913</strong>, cuando Peruggia trató de vendérselo a un anticuario. Alegó patriotismo: devolverle a Italia una obra que Napoleón había saqueado. Era mentira, porque Leonardo se llevó el cuadro a Francia él mismo y allí lo vendió; aun así cumplió siete meses escasos de cárcel y en su país hubo quien lo llamó héroe. La pintura volvió al Louvre en 1914 convertida en otra cosa. Ya no era una pintura: era una celebridad, y a las celebridades se las visita, no se las mira. Hoy pasa ante ella más gente que ante ninguna otra.",
      },
    ],
  },

  {
    id: "marmol-pintado",
    titulo: "Las estatuas iban pintadas",
    gancho: "El blanco puro que admiramos es pintura perdida y un ideal del siglo XVIII.",
    categoria: "Arte",
    color: "var(--clay)",
    encargo: "Un torso de mármol antiguo iluminado de lado, superficie con marcas de desgaste.",
    fotos: [
      {
        archivo: "Marble torso of a youth MET DP107604.jpg",
        autor: "Torso de mármol de un joven, copia romana de un original griego. Metropolitan Museum of Art, Nueva York.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Marble_torso_of_a_youth_MET_DP107604.jpg",
        foco: "50% 45%",
        alt: "Torso de mármol antiguo sin brazos ni cabeza, con la superficie gastada, sobre fondo oscuro.",
      },
      {
        archivo: "Tomb slab of Nihebsedpepy.jpg",
        autor: "Estela funeraria egipcia de Nihebsedpepy, hacia 2100 a. C., con la policromía original conservada.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Tomb_slab_of_Nihebsedpepy.jpg",
        foco: "50% 45%",
        alt: "Losa de piedra egipcia grabada y pintada, con figuras y jeroglíficos en rojo, azul y ocre.",
      },
      {
        archivo: "Antonio canova, beatrice.jpg",
        autor: "«Beatriz», mármol de Antonio Canova, ejemplo del blanco liso que el neoclasicismo tomó por antiguo. Fotografía de Sailko.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Antonio_canova,_beatrice.jpg",
        foco: "50% 35%",
        alt: "Busto de mármol blanco de una mujer de perfil, con el pelo recogido y la superficie pulida.",
      },
      {
        archivo: "Torso from archaic temple of Apollo, Parian marble, 510-500 BC, AM Delphi, 201376.jpg",
        autor: "Torso arcaico en mármol de Paros del templo de Apolo, hacia 510 a. C. Museo Arqueológico de Delfos.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Torso_from_archaic_temple_of_Apollo,_Parian_marble,_510-500_BC,_AM_Delphi,_201376.jpg",
        foco: "50% 50%",
        alt: "Torso de mármol muy erosionado expuesto en una sala de museo, con la piedra veteada a la vista.",
      },
    ],
    entrada:
      "La imagen que todo el mundo tiene de la Antigüedad clásica es de mármol blanco: templos blancos, dioses blancos, una sobriedad limpia y algo severa. Es exactamente al revés. Aquellas esculturas y aquellos edificios estaban pintados con colores intensos —rojos, azules, ocres, dorados—, con los ojos y los labios marcados y hasta con adornos de metal encajados en la piedra. Lo que ha llegado hasta nosotros no es la obra: es lo que quedó de ella cuando la pintura se cayó, y esa ruina descolorida es la que acabamos convirtiendo en ideal de belleza.",
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
    titulo: "El azul más caro que oro",
    gancho: "Venía de una sola montaña de Afganistán y salía en los contratos por escrito.",
    categoria: "Arte",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un trozo de lapislázuli en bruto junto a pigmento azul molido en un mortero.",
    entrada:
      "En un contrato de encargo del Renacimiento, el precio no lo ponía solo el pintor: lo ponía la paleta. Los ocres y los verdes salían de tierras que había en cualquier parte, pero había un color que se negociaba aparte, con su cláusula propia, porque valía más por peso que el oro. Es un azul hondo que no se apaga con los años, y en los cuadros de la época está casi siempre en el mismo sitio: el manto de la Virgen. Se llamaba ultramar, se obtenía de una piedra semipreciosa y durante siglos vino de un único sitio del mundo.",
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
  {
    id: "van-gogh-ventas",
    titulo: "Van Gogh vendió un cuadro",
    gancho: "Pintó novecientos en diez años. Su hermano le pagó los pinceles hasta el final.",
    categoria: "Arte",
    color: "var(--ochre)",
    encargo: "Un campo de trigo amarillo bajo un cielo azul cargado, pintado a brochazos gruesos.",
    entrada:
      "Holanda, 1880. Un hombre de veintisiete años acaba de fracasar como marchante de arte, como maestro y como predicador entre mineros, y decide que va a ser pintor. No sabe dibujar: se pone a copiar manuales para principiantes a una edad en la que los pintores de su tiempo llevaban ya diez años trabajando. Le quedan diez años de vida y en ellos va a hacer unas novecientas pinturas y mil cien dibujos, casi todo en los últimos cuatro. Hoy sus cuadros están entre los más caros que se han vendido nunca.",
    paginas: [
      {
        rotulo: "El hermano",
        texto:
          "Lo sostuvo su hermano pequeño, que trabajaba vendiendo cuadros de otros y le mandaba dinero todos los meses durante una década: pinceles, lienzos, tabaco y el alquiler. Se escribieron más de seiscientas cartas, que se conservan y que son el mejor retrato que existe de un pintor por dentro, porque en ellas explica qué está intentando hacer con cada color. Vivía con lo justo y a veces gastaba en pintura el dinero de la comida; en una carta reconoce haber pasado cuatro días alimentándose solo de café y pan seco.",
        destacado: { tipo: "cifra", cifra: "600", unidad: "cartas se escribieron los dos hermanos" },
      },
      {
        rotulo: "La única venta",
        texto:
          "En vida vendió un cuadro documentado, un paisaje con viñas, por cuatrocientos francos, unos meses antes de morir, y lo compró la hermana de un pintor amigo suyo. Un crítico le dedicó un artículo elogioso en enero de 1890 y en vez de alegrarle le angustió: escribió a su hermano diciendo que temía no estar a la altura de lo que allí se afirmaba y le pidió que le rogara al crítico que no volviera a escribir sobre él. Murió en julio de aquel mismo año de un disparo en el pecho, con treinta y siete años, en un pueblo a las afueras de París donde había pintado setenta cuadros en setenta días.",
        destacado: { tipo: "frase", frase: "Setenta cuadros en setenta días, y después el disparo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Su hermano murió seis meses más tarde, y fue la viuda de este, que apenas lo había tratado, quien se puso a colocar aquellos cuadros amontonados: organizó exposiciones, publicó las cartas y tardó veinte años en conseguir que se le tomara en serio. Hoy sus obras están entre las más caras que se venden en una subasta y hay un museo entero dedicado a él en Ámsterdam, con dos millones de visitantes al año. De los novecientos cuadros que pintó, la inmensa mayoría los vio por primera vez gente que ya no tenía manera de decírselo. El primero que se cotizó en millones se vendió noventa y siete años después de su muerte.",
      },
    ],
  },

  {
    id: "sixtina-tumbado",
    titulo: "La Sixtina no fue tumbado",
    gancho: "Cuatro años de pie con el cuello doblado hacia atrás. Escribió un poema quejándose.",
    categoria: "Arte",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una bóveda pintada vista desde abajo, con andamios de madera en un lateral.",
    entrada:
      "Roma, 1508. El Papa Julio II, un hombre acostumbrado a que no le discutan nada, encarga a un escultor florentino de treinta y tres años que pinte el techo de una capilla del Vaticano: quinientos metros cuadrados de bóveda a veinte metros del suelo. El escultor protesta y lo deja por escrito. Dice que él es escultor y no pintor, que apenas ha trabajado al fresco y que el encargo es una trampa que le han puesto sus enemigos. Acepta porque no puede negarse. Tardará cuatro años y pintará más de trescientas figuras.",
    paginas: [
      {
        rotulo: "El andamio",
        texto:
          "La leyenda de que pintó tumbado boca arriba viene de una película, y es falsa. Diseñó él mismo un andamio de madera apoyado en la propia pared, mediante soportes metidos en agujeros que aún se ven, y trabajaba de pie sobre la plataforma, con la cabeza echada hacia atrás y el brazo levantado por encima de la cara durante horas. La pintura le goteaba encima. En un poema burlón que le mandó a un amigo cuenta que se le había hinchado el bocio, que la barba apuntaba al cielo y que ya no veía bien de cerca.",
        destacado: { tipo: "frase", frase: "«La barba apunta al cielo», escribió en un poema quejándose." },
      },
      {
        rotulo: "Contra reloj",
        texto:
          "La técnica del fresco no perdona: se pinta sobre yeso húmedo y hay que terminar el trozo antes de que seque, porque después ya no se puede retocar sin que se note. Eso obliga a planificar cada jornada y a no equivocarse. Se calcula el trabajo en unas quinientas cincuenta jornadas de pintura repartidas a lo largo de cuatro años, y en la bóveda se distinguen todavía a simple vista las costuras entre una jornada y la siguiente, como las junturas de un mosaico. Al principio contrató a media docena de ayudantes traídos de Florencia y acabó despidiéndolos a casi todos, convencido de que le estropeaban más de lo que le adelantaban.",
        destacado: { tipo: "cifra", cifra: "550", unidad: "jornadas de yeso fresco, sin retoque posible" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Volvió veinticinco años después, ya con sesenta, para pintar la pared del fondo, y aquello le costó una polémica que duró siglos: un cardenal se quejó de tantos desnudos y, tras su muerte, se contrató a un pintor para taparlos con paños; el hombre se ganó el apodo del calzonero. Una limpieza hecha en los años ochenta quitó siglos de humo de vela y de cola aplicada por restauradores anteriores, y devolvió unos colores tan chillones que varios expertos acusaron públicamente al equipo de haberse pasado y de haber arrancado los últimos retoques del pintor. Hoy entran allí veinte mil personas al día, en fila y sin poder pararse.",
      },
    ],
  },

  {
    id: "el-grito-robos",
    titulo: "El Grito, robado dos veces",
    gancho: "La primera vez dejaron una nota: «Gracias por la pésima seguridad». Tardaron tres meses en recuperarlo.",
    categoria: "Arte",
    color: "var(--clay)",
    encargo: "Un cielo naranja ondulado sobre un puente de madera, en tonos de tiza.",
    entrada:
      "Oslo, 12 de febrero de 1994. Es el día en que empiezan los Juegos Olímpicos de invierno en Noruega y la ciudad entera está pendiente de la ceremonia, con la policía volcada en el acto y las televisiones del mundo apuntando a otro sitio. A las seis y media de la mañana, dos hombres apoyan una escalera en la fachada de la galería nacional, rompen una ventana y se llevan uno de los cuadros más reconocibles del mundo. Antes de marcharse dejan apoyada en la pared una nota dando las gracias por la mala seguridad. Todo el asalto les lleva cincuenta segundos.",
    paginas: [
      {
        rotulo: "La nota",
        texto:
          "Una cámara de seguridad grabó el asalto entero, y un guardia llegó a verlo en el monitor mientras ocurría, pero dio por hecho que era una falsa alarma de las que saltaban a diario y no avisó a nadie hasta pasado un buen rato. Los ladrones dejaron en el hueco de la pared una nota manuscrita que decía «gracias por la pésima seguridad», y poco después pidieron un rescate de un millón de dólares. La policía noruega recuperó el cuadro tres meses más tarde con una operación encubierta montada junto a la policía británica, en la que un agente se hizo pasar por comprador extranjero.",
        destacado: { tipo: "frase", frase: "«Gracias por la pésima seguridad», decía la nota que dejaron." },
      },
      {
        rotulo: "La segunda vez",
        texto:
          "Diez años después, en agosto de 2004, dos encapuchados entraron a plena luz del día en otro museo de la misma ciudad, con el público dentro, amenazaron a los vigilantes con una pistola y arrancaron de la pared otra versión del mismo cuadro y una segunda pintura del mismo autor. Salieron corriendo y los metieron en un coche. Esta vez tardaron dos años en aparecer, y cuando lo hicieron los dos lienzos estaban dañados: uno tenía un roto en una esquina y el otro una mancha de humedad, en la parte baja, que no se ha podido eliminar del todo y que sigue viéndose si uno se acerca.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "robos del mismo cuadro en diez años" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Existen cuatro versiones de la escena hechas por el mismo pintor entre 1893 y 1910, dos pintadas y dos al pastel, y por eso pudieron robarlo dos veces sin que desapareciera. La figura del centro no está gritando, según explicó él mismo en su diario: está tapándose los oídos porque ha oído un grito que atraviesa la naturaleza. Y en una de las versiones hay una frase escrita a lápiz en una esquina, tan pequeña que no se descubrió hasta hace poco, en la que alguien afirma que aquello solo pudo pintarlo un loco. El análisis de la letra concluyó en 2021 que la escribió el propio pintor.",
      },
    ],
  },
];
