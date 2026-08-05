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
    titulo: "Antes había que bajarse a rascar",
    gancho: "Antes de 1903 el conductor bajaba del coche cada pocos minutos a despejar el cristal. Una visitante de Nueva York patentó la solución.",
    categoria: "Limpiaparabrisas",
    color: "var(--plum)",
    encargo: "Una palanca de laton dentro de un coche antiguo, unida a un brazo por fuera del cristal.",
    entrada:
      "Nueva York, invierno de 1902. El automóvil lleva quince años vendiéndose y empieza a llevar delante un cristal, el parabrisas, que corta el viento en la cara. Ese cristal trae un problema que no tenía el coche de caballos: en cuanto nieva o llueve se ciega y no se ve la calle. La única salida es parar, bajarse y limpiarlo con la mano cada pocas manzanas.",
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
    titulo: "El limpiaparabrisas copia al párpado",
    gancho: "Con llovizna, barrer sin parar chirría y estorba. Un ingeniero pensó en el párpado, que tampoco se mueve todo el rato.",
    categoria: "Limpiaparabrisas",
    color: "var(--ochre)",
    encargo: "Un parabrisas con llovizna fina y una escobilla detenida en el centro del cristal.",
    entrada:
      "Estados Unidos, 1963. El limpiaparabrisas eléctrico lleva treinta años puesto de serie, pero solo tiene dos velocidades y las dos van sin parar nunca. Con lluvia fuerte va bien. Con llovizna, la goma pasa sobre un cristal casi seco: chirría, deja rayas y cansa la vista más que la lluvia misma. Un ingeniero de Detroit se pregunta por qué no puede pararse entre una pasada y la siguiente.",
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
    titulo: "Las esquinas que nadie limpia",
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
