import type { Short } from "../shorts";

/* ==========================================================================
   Los limpiaparabrisas.

   Un brazo con una goma que barre agua. Detras hay un problema de vision,
   un pleito de patentes que duro doce anos y un problema de geometria que
   nadie ha resuelto del todo. El tema se estropea si se cuenta como lista
   de inventores.

   La regla del tema: siempre se dice QUE SE HACIA ANTES (parar el coche y
   bajarse a rascar el cristal) y que limitacion tenia cada solucion. Toda
   pieza se explica en palabras llanas antes de nombrarla: un condensador
   es una pieza que se llena de electricidad y la suelta de golpe. Y se
   cuenta quien cobro por el invento y quien no.
   ========================================================================== */

export const LIMPIAPARABRISAS: Short[] = [
  {
    id: "bajarse-a-rascar-el-cristal",
    titulo: "Antes del limpiaparabrisas",
    gancho: "Antes de 1903 el conductor bajaba del coche cada pocos minutos a despejar el cristal. Una visitante de Nueva York patentó la solución.",
    categoria: "Limpiaparabrisas",
    color: "var(--plum)",
    encargo: "Una palanca de laton dentro de un coche antiguo, unida a un brazo por fuera del cristal.",
    /* El coche en la nieve, el tranvía donde se le ocurrió, el dibujo de la
       patente y el cristal de hoy. El dibujo es el que cierra el short: se ve
       que el brazo de 1903 y el de ahora son el mismo. */
    fotos: [
      {
        archivo: "Thomas Flyer participating in New York-to-Paris automobile race in front of a streetcar during the winter LCCN2017648794.jpg",
        autor:
          "Un automóvil de la carrera Nueva York-París, en 1908, sobre una carretera nevada; detrás asoma un tranvía. Fotografía de Spooner & Wells. Biblioteca del Congreso, Estados Unidos.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Thomas_Flyer_participating_in_New_York-to-Paris_automobile_race_in_front_of_a_streetcar_during_the_winter_LCCN2017648794.jpg",
        foco: "50% 45%",
        alt: "Fotografía antigua en blanco y negro: un coche abierto con cuatro hombres muy abrigados, parado en una carretera nevada junto a un río.",
      },
      {
        archivo: "Peoples Railway Company of Dayton, Ohio, car -135 - DPLA - 7aa8eaafcb0ab45d26a33fa2389b90cb (page 1).jpg",
        autor:
          "Un tranvía cerrado de la compañía de Dayton, Ohio, hacia 1900, con su conductor al lado. El cristal de delante es el que había que abrir para ver la vía. Fotografía de William J. B. Gwinn.",
        licencia: "Sin restricciones conocidas",
        fuente: "https://commons.wikimedia.org/wiki/File:Peoples_Railway_Company_of_Dayton,_Ohio,_car_-135_-_DPLA_-_7aa8eaafcb0ab45d26a33fa2389b90cb_(page_1).jpg",
        foco: "50% 42%",
        alt: "Fotografía antigua de un tranvía de madera con las ventanas cerradas, parado en la calle con dos empleados de pie delante.",
      },
      {
        archivo: "Anderson Window Cleaning Device 1903.png",
        autor:
          "El dibujo de la patente de 1903: un brazo con una tira de goma por fuera del cristal, movido con una palanca desde el asiento. Oficina de Patentes de Estados Unidos.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Anderson_Window_Cleaning_Device_1903.png",
        foco: "50% 30%",
        alt: "Lámina de patente a tinta: el marco de un parabrisas visto de frente, con un brazo que lo barre en abanico, y varios despieces del mecanismo debajo.",
      },
      {
        archivo: "Rainy Windshield Wipers.jpg",
        autor:
          "Un parabrisas bajo la lluvia con las escobillas en marcha, 2016. La goma es la misma pieza que dibujó aquella patente. Fotografía de NWSPhoenix.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Rainy_Windshield_Wipers.jpg",
        foco: "50% 55%",
        alt: "Vista desde dentro de un coche: el cristal cubierto de gotas y dos escobillas cruzándolo, con la carretera borrosa al fondo.",
      },
    ],
    entrada:
      "Nueva York, invierno de 1902. El automóvil lleva quince años vendiéndose y empieza a llevar delante un cristal, el parabrisas, que corta el viento en la cara. Ese cristal trae un problema que no tenía el coche de caballos: en cuanto nieva o llueve se ciega y no se ve la calle. Los conductores prueban de todo. Hay quien lo unta con media cebolla, porque el jugo hace que el agua resbale, y quien conduce asomado por el lateral. La única salida de verdad es parar, bajarse y limpiarlo con la mano cada pocas manzanas. En una nevada de las de aquella ciudad eso son varias paradas por calle, con las manos moradas de frío y el motor al ralentí.",
    paginas: [
      {
        rotulo: "El tranvía",
        texto:
          "La idea no se le ocurrió a nadie dentro de un coche, sino a una pasajera de tranvía. Era una mujer de Alabama, de visita en la ciudad, que viajaba de pie mirando al conductor. Con la nevada, el hombre tenía que abrir el panel de delante para ver la vía, y entraba el frío al pasaje. Cuando eso no bastaba, paraba el tranvía, salía y rascaba el cristal con la manga del abrigo. De vuelta en su casa, ella dibujó un brazo con una tira de goma en la punta, por fuera del cristal. El brazo se movía con una palanca de dentro, junto al volante, y un muelle lo devolvía a su sitio.",
        destacado: { tipo: "frase", frase: "El conductor abría el cristal de delante para ver la vía." },
      },
      {
        rotulo: "La patente",
        texto:
          "La patente se concedió en 1903 y describe exactamente el mecanismo que llevan hoy los coches. Su autora fue ofreciéndola a los fabricantes de automóviles y todos le contestaron lo mismo: no interesa. El argumento de entonces era que aquel brazo moviéndose delante de los ojos distraería al conductor. Había otra razón menos confesable, y es que se vendían muy pocos coches y ninguno lo llevaba de fábrica. La patente caducó en 1920 sin darle un céntimo, justo cuando la fabricación en cadena disparó las ventas de automóviles. Un año después el limpiaparabrisas venía puesto de serie, y ya no había derechos que pagar a nadie.",
        destacado: { tipo: "cifra", cifra: "1903", unidad: "el año de la patente" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el brazo con su goma, casi igual al del dibujo de aquella patente de hace más de cien años. Quedó también un caso que se estudia en derecho como ejemplo de invento adelantado a su mercado. Una idea buena presentada diez años antes de tiempo acaba valiendo lo mismo que una idea mala. El limpiaparabrisas pasó de capricho a obligación legal en casi todos los países del mundo. Ningún coche pasa hoy la inspección técnica con las gomas rotas o sin agua en el depósito para lavar el cristal. Del rascar con la manga solo queda el gesto, que vuelve cada invierno con el hielo de la mañana.",
      },
    ],
  },
  {
    id: "el-que-se-para-a-ratos",
    titulo: "Copiado del párpado",
    gancho: "Con llovizna, barrer sin parar chirría y estorba. Un ingeniero pensó en el párpado, que tampoco se mueve todo el rato.",
    categoria: "Limpiaparabrisas",
    color: "var(--ochre)",
    encargo: "Un parabrisas con llovizna fina y una escobilla detenida en el centro del cristal.",
    fotos: [
      {
        archivo: "Driving on a rainy day through a blurred windshield on a country road in early morning hours.jpg",
        autor: "La carretera vista a través de un parabrisas mojado, en una mañana de lluvia. Fotografía de Shixart1985.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Driving_on_a_rainy_day_through_a_blurred_windshield_on_a_country_road_in_early_morning_hours.jpg",
        foco: "50% 45%",
        alt: "Una carretera estrecha entre árboles pelados, vista borrosa a través del agua que corre por el cristal.",
      },
      {
        archivo: "Small petals and water droplets on car windshield, Ponte de Sor, Portugal (approx. GPS location) julesvernex2.jpg",
        autor: "Gotas de agua y pétalos pequeños sobre un parabrisas, en Ponte de Sor, Portugal. Fotografía de Jules Verne Times Two.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Small_petals_and_water_droplets_on_car_windshield,_Ponte_de_Sor,_Portugal_(approx._GPS_location)_julesvernex2.jpg",
        foco: "50% 50%",
        alt: "Cientos de gotas redondas sobre un cristal, con algunos pétalos blancos pegados entre ellas.",
      },
      {
        archivo: "Rainy Windshield.jpg",
        autor: "Un parabrisas cubierto de llovizna. Fotografía del Servicio Meteorológico Nacional de Phoenix.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Rainy_Windshield.jpg",
        foco: "50% 50%",
        alt: "Un cristal salpicado de gotitas finas con el paisaje desdibujado detrás.",
      },
      {
        archivo: "Raindrops on windshield in Kent, Washington.jpg",
        autor: "Gotas de lluvia sobre el parabrisas de un coche parado, en Kent, Washington. Fotografía de Roc0ast3r.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Raindrops_on_windshield_in_Kent,_Washington.jpg",
        foco: "50% 50%",
        alt: "Gotas de distintos tamaños repartidas por el cristal, con luces desenfocadas al fondo.",
      },
    ],
    entrada:
      "Estados Unidos, 1963. El limpiaparabrisas eléctrico lleva ya treinta años montado de serie en los coches, pero solo tiene dos velocidades y las dos barren sin parar nunca. Con lluvia fuerte funciona perfectamente y nadie se queja. Con llovizna, en cambio, la goma pasa una y otra vez sobre un cristal casi seco: chirría, deja rayas grasientas y cansa la vista bastante más que la propia lluvia. Un ingeniero de Detroit se hace la pregunta que nadie se había hecho: por qué no puede pararse entre una pasada y la siguiente.",
    paginas: [
      {
        rotulo: "El párpado",
        texto:
          "La idea le vino mirando su propio ojo, que había perdido visión años antes por el corcho de una botella. El párpado no barre sin parar: se cierra, espera unos segundos y vuelve a cerrarse. Copiar ese ritmo era posible con dos o tres piezas de las que ya había en cualquier taller. La principal es un condensador, una pieza que se va llenando de electricidad poco a poco y la suelta de golpe al llenarse. Cada descarga daba la orden de una pasada, y un mando en el salpicadero cambiaba lo que tardaba en llenarse. Con eso el conductor elegía una pasada cada dos segundos o una cada diez, según cayera el agua.",
        destacado: { tipo: "frase", frase: "El párpado tampoco barre sin parar: se cierra y espera." },
      },
      {
        rotulo: "El pleito",
        texto:
          "El ingeniero montó su circuito en un coche y se lo enseñó a los grandes fabricantes de automóviles. Lo examinaron con calma, le dijeron que no y lo despidieron con buenas palabras. Unos años después esos mismos fabricantes vendían coches con limpiaparabrisas intermitente de serie. Él sostuvo que le habían copiado el circuito y puso una demanda que tardó doce años en llegar a juicio. Las empresas alegaron que todas las piezas eran conocidas y que juntarlas no merecía una patente. El tribunal contestó que casi todos los inventos son eso, piezas conocidas juntadas de una manera nueva, y le dio la razón.",
        destacado: { tipo: "cifra", cifra: "12", unidad: "años tardó el pleito en llegar a juicio" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el mando con posiciones intermedias que tiene hoy cualquier coche, y él ganó decenas de millones de dólares. Quedó después el sensor de lluvia, que hace lo mismo sin que el conductor toque nada. Es una lucecita pegada al cristal por dentro que dispara un rayo contra él y mide cuánta luz vuelve rebotada. Si el cristal está seco vuelve casi toda, y si hay gotas parte de esa luz se escapa hacia fuera. Por esa diferencia el aparato calcula cuánta agua cae y decide cada cuánto barrer. Y quedó la frase del tribunal: inventar no es dar con una pieza nueva, sino ponerlas en un orden que a nadie se le había ocurrido.",
      },
    ],
  },
  {
    id: "las-esquinas-que-nadie-limpia",
    titulo: "Las esquinas sin limpiar",
    gancho: "El cristal es un rectángulo y la escobilla dibuja un abanico. La parte que queda sucia está calculada, no olvidada.",
    categoria: "Limpiaparabrisas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un parabrisas mojado con el dibujo del barrido marcado y las esquinas todavia con agua.",
    entrada:
      "Industria del automóvil, desde los años treinta del siglo XX hasta hoy. El parabrisas es un rectángulo, a veces curvado, y el limpiaparabrisas gira sobre un eje clavado en un punto fijo. Un brazo que gira sobre un punto solo puede dibujar un trozo de círculo. Encajar un trozo de círculo dentro de un rectángulo es imposible, y esa es toda la historia.",
    paginas: [
      {
        rotulo: "El abanico",
        texto:
          "El montaje más común lleva dos brazos, movidos los dos por un solo motor eléctrico bajo el capó. El motor gira siempre en el mismo sentido, y unas varillas convierten ese giro en vaivén. Es el mismo truco de la locomotora de vapor, donde el pistón va y viene y la rueda gira. Las varillas están calculadas para que los dos brazos se muevan a la vez sin llegar a tocarse nunca. Cada brazo gira sobre su eje y barre un abanico, así que las cuatro esquinas del cristal se quedan fuera. Los diseñadores aceptan esa pérdida porque lo que hay que limpiar es lo que queda delante de los ojos.",
        destacado: { tipo: "frase", frase: "Lo que se deja sin limpiar son las esquinas, no el centro." },
      },
      {
        rotulo: "Las variantes",
        texto:
          "Con parabrisas cada vez más grandes, los fabricantes probaron otras maneras de repartir el barrido. Una es cruzar los dos brazos: arrancan pegados por el mismo lado y se abren como unas tijeras. Otra es el brazo único que se alarga mientras gira, empujado por una guía, y llega así a la esquina lejana. Limpia más cristal con una escobilla sola, pero lleva más piezas dentro y se avería antes. También cambió el sitio donde el brazo se queda parado, que hoy suele estar escondido bajo el borde del capó. Así la goma no recibe el sol todo el día, que es lo que la endurece y la agrieta.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "brazos mueve un solo motor" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un trozo de cristal que no se limpia nunca y que cada conductor conoce en su propio coche. Quedó la costumbre de cambiar las gomas una vez al año, porque el caucho se endurece aunque el coche no salga. Una goma vieja no limpia menos: extiende el agua sucia y quita visión justo cuando más falta hace. Quedan también los vehículos que no llevan ninguno, como los trenes de alta velocidad. A esa marcha el aire aparta el agua del cristal por sí solo, y el limpiaparabrisas sobra. Y quedó un ejemplo de lo que hace un ingeniero cuando dos formas no encajan: elige qué parte se queda sin resolver.",
      },
    ],
  },
];
