import type { Short } from "../shorts";

/* ==========================================================================
   Tabaco.

   El riesgo del tema es el folleto sanitario, que nadie lee, y el riesgo
   contrario es la nostalgia del cigarrillo en el cine.

   La regla del tema: el tabaco se cuenta a través de DOCUMENTOS. Un
   tratado médico del XVIII que lo receta para todo. Un memorándum interno
   que explica la estrategia por escrito. Un filtro con agujeros colocados
   justo donde los mide la máquina. Aquí no hace falta opinar: basta con
   citar lo que está escrito y con qué fecha.

   Y no se moraliza: se cuenta quién sabía qué y desde cuándo.
   ========================================================================== */

export const TABACO: Short[] = [
  {
    id: "tabaco-medicina",
    titulo: "El tabaco se recetaba",
    gancho: "Para el asma, el dolor de muelas y hasta para reanimar ahogados soplándoles humo por dentro.",
    categoria: "Tabaco",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un fuelle de madera con un tubo largo dentro de una caja abierta.",
    fotos: [
      {
        archivo: "Resuscitation set, Europe, 1801-1850 Wellcome L0057782.jpg",
        autor: "Equipo europeo de reanimación de la primera mitad del siglo XIX, con su fuelle, sus cánulas y su caja forrada. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Resuscitation_set,_Europe,_1801-1850_Wellcome_L0057782.jpg",
        foco: "50% 50%",
        alt: "Una caja de caoba forrada de paño verde con un fuelle de madera tachonado de latón, tubos y boquillas de marfil.",
      },
      {
        archivo: "Resuscitation bellows, Wellcome Collections objects Wellcome L0070206.jpg",
        autor: "Fuelle de reanimación con su tubo flexible. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Resuscitation_bellows,_Wellcome_Collections_objects_Wellcome_L0070206.jpg",
        foco: "50% 50%",
        alt: "Un fuelle de madera con remaches de latón y una manguera trenzada saliendo de la boquilla.",
      },
      {
        archivo: "Starr-130913-1162-Nicotiana tabacum-flowers-NW Lake-Laysan (24597087323).jpg",
        autor: "Flores de Nicotiana tabacum, la planta del tabaco. Fotografía de Forest y Kim Starr.",
        licencia: "CC BY 3.0 us",
        fuente: "https://commons.wikimedia.org/wiki/File:Starr-130913-1162-Nicotiana_tabacum-flowers-NW_Lake-Laysan_(24597087323).jpg",
        foco: "50% 50%",
        alt: "Racimos de flores tubulares de color rosa pálido abriéndose en la punta de un tallo verde.",
      },
      {
        archivo: "Nicotiana tabacum sl24.jpg",
        autor: "Hojas anchas de la planta del tabaco. Fotografía de Stefan Lefnaer.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Nicotiana_tabacum_sl24.jpg",
        foco: "50% 50%",
        alt: "Hojas grandes, ovaladas y algo pegajosas de un verde claro, con el nervio central muy marcado.",
      },
    ],
    entrada:
      "Europa, siglos XVI a XVIII. El tabaco llega de América y entra en las boticas mucho antes que en las tabernas: se receta en polvo, en humo, en infusión y en emplastos, y se le atribuyen efectos contra el dolor de cabeza, el asma, las muelas, las heridas infectadas, los cólicos y hasta la peste. No es una superstición popular, sino medicina oficial de su tiempo: los médicos discuten sus virtudes en tratados serios, con citas y con casos, y las farmacias lo despachan como cualquier otro remedio del catálogo.",
    paginas: [
      {
        rotulo: "Las lavativas",
        texto:
          "El uso más llamativo fue la reanimación de ahogados. Durante buena parte del siglo XVIII, la manera recomendada de socorrer a alguien sacado del río era insuflarle humo de tabaco en el recto con un fuelle y un tubo, con la idea de que el calor y el estímulo devolverían al cuerpo el vigor perdido. Se instalaron cajas con el equipo en los muelles de varias ciudades, igual que hoy hay desfibriladores, y las sociedades de socorro pagaban una recompensa a quien lo intentara. En inglés quedó una expresión coloquial que viene exactamente de ahí.",
        destacado: { tipo: "frase", frase: "Había cajas con el equipo en los muelles, como hoy los desfibriladores." },
      },
      {
        rotulo: "El desmentido",
        texto:
          "A comienzos del siglo XIX, un médico inglés hizo experimentos con animales y demostró que la nicotina, lejos de estimular el corazón, lo paraliza. La práctica se abandonó en pocos años, aunque el resto de los usos medicinales siguió vigente bastante tiempo: todavía en el siglo XX se anunciaban cigarrillos contra el asma, se recomendaba fumar para hacer la digestión y en algunos hospitales se repartía tabaco a los pacientes. La primera relación clara con el cáncer de pulmón no se estableció hasta un estudio publicado en 1950 con miles de casos.",
        destacado: { tipo: "cifra", cifra: "1950", unidad: "el primer estudio serio sobre el cáncer" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Cuesta imaginar hoy que una sustancia se recetara para todo, pero encaja bien con la medicina de aquellos siglos, que se movía por analogías: si algo caliente y aromático despierta al que lo toma, debería servir también para reanimar a quien está inconsciente. Aquellos fuelles se conservan en varios museos de medicina, con su tubo y su caja de madera, y son de las piezas que más desconcierto provocan a los visitantes. Del episodio queda una lección aplicable a cualquier época: un remedio muy usado no es lo mismo que un remedio comprobado.",
      },
    ],
  },

  {
    id: "duda-como-producto",
    titulo: "La industria del tabaco vendía duda",
    gancho: "Un memorándum interno lo dejó escrito: la duda es nuestro producto frente a los datos.",
    categoria: "Tabaco",
    color: "var(--slate)",
    encargo: "Un archivador metálico abierto lleno de carpetas de papel amarillento.",
    entrada:
      "Estados Unidos, 1969. Un abogado de una tabacalera escribe un memorándum interno con una frase que décadas más tarde se hará famosa en los tribunales: la duda es nuestro producto, porque es la mejor manera de competir con los hechos que ya existen en la cabeza del público. El documento saldrá a la luz en 1998.",
    paginas: [
      {
        rotulo: "La estrategia",
        texto:
          "La estrategia no consistía en negar la relación entre fumar y el cáncer, que era indefendible, sino en sostener que la ciencia todavía no era concluyente y que hacía falta seguir investigando unos años más. Para eso se financiaron centros de investigación propios, se pagaron estudios sobre otras causas posibles y se colocaron expertos en programas de televisión pidiendo prudencia. El objetivo declarado en los documentos era mantener viva la controversia en la opinión pública el mayor tiempo posible, no ganar el debate científico, que se daba por perdido desde el primer día en los propios informes internos.",
        destacado: { tipo: "frase", frase: "No pretendían ganar el debate, sino alargarlo." },
      },
      {
        rotulo: "Los papeles",
        texto:
          "Aquello se supo porque un empleado de una tabacalera sacó documentos internos, y sobre todo porque en 1998 un acuerdo judicial entre varios estados y la industria obligó a hacer públicas millones de páginas de archivo: informes, actas de reuniones y memorandos. Hoy están todos en una base de datos universitaria abierta a cualquiera que quiera leerlos. Muestran que las propias empresas conocían la relación con el cáncer desde los años cincuenta y que estudiaban internamente cómo ajustar la nicotina mientras negaban en público, ante el Congreso y con la mano alzada, que aquello creara dependencia alguna.",
        destacado: { tipo: "cifra", cifra: "1998", unidad: "el acuerdo que abrió los archivos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El manual se ha reutilizado después en otros asuntos, y los historiadores que estudiaron aquellos papeles documentaron cómo algunos de los mismos expertos y las mismas agencias de comunicación trabajaron luego en campañas sobre otras materias, con la misma técnica de pedir siempre más estudios antes de decidir nada. Por eso el caso se enseña en periodismo y en salud pública: no como una historia de tabaco, sino como el ejemplo mejor documentado de cómo se fabrica una controversia. Y todo cabe en aquella frase escrita en 1969 sin pensar que la leeríamos.",
      },
    ],
  },

  {
    id: "filtro-que-no-filtra",
    titulo: "El filtro del cigarrillo no protege",
    gancho: "Se puso en los años cincuenta para tranquilizar al fumador, y hasta falsea la medición oficial.",
    categoria: "Tabaco",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una colilla con el filtro visto de frente, con sus agujeros diminutos alrededor.",
    entrada:
      "Estados Unidos, década de 1950. Empiezan a publicarse los primeros estudios que relacionan el tabaco con el cáncer de pulmón y las ventas se resienten. La respuesta de la industria no es cambiar el producto sino añadirle una pieza: un filtro de fibra en la boquilla, anunciado como una barrera protectora. En pocos años lo lleva casi todo el mercado.",
    paginas: [
      {
        rotulo: "La ventilación",
        texto:
          "El filtro retiene una parte del alquitrán, pero el fumador compensa sin darse cuenta: da caladas más profundas y más seguidas hasta obtener la nicotina que su cuerpo le pide, con lo que la exposición acaba siendo parecida. Además, muchos filtros llevan unos agujeros diminutos alrededor, casi invisibles, que dejan entrar aire y diluyen el humo. Esos agujeros están colocados justo donde la máquina de laboratorio sujeta el cigarrillo para medirlo, y el fumador los tapa con los labios y con los dedos sin enterarse, así que la medida oficial sale mucho más baja.",
        destacado: { tipo: "frase", frase: "Los dedos tapan los agujeros que abaratan la medición." },
      },
      {
        rotulo: "Los ligeros",
        texto:
          "De ahí salieron los cigarrillos anunciados como suaves o ligeros, que en la máquina daban cifras bajísimas y en una persona de carne y hueso no cambiaban gran cosa. Varios organismos sanitarios concluyeron que aquella publicidad había apartado a mucha gente de dejar de fumar, porque cambiaban de marca en lugar de abandonar del todo. La mayoría de los países prohibió esas palabras en los paquetes a partir de 2001, y algunos han empezado a estudiar la prohibición directa de los agujeros de ventilación. La forma de medir el alquitrán también se ha revisado desde entonces.",
        destacado: { tipo: "cifra", cifra: "2001", unidad: "el año que se prohibió decir ligero" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Queda además un problema que nadie previó en su momento: las colillas son el residuo más recogido en las playas y en las calles del mundo entero, por delante de cualquier envase de plástico. El filtro está hecho de acetato de celulosa, un material que tarda años en degradarse y que suelta microplásticos y sustancias tóxicas al agua. Varios países estudian prohibirlo, con el argumento de que no protege la salud de nadie y sí ensucia bastante. Sería retirar una pieza que se añadió, hace setenta años, para vender tranquilidad.",
      },
    ],
  },
];
