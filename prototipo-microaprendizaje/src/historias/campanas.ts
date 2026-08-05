import type { Short } from "../shorts";

/* ==========================================================================
   Las campanas.

   El objeto más antiguo en uso de muchos pueblos y el primer sistema de
   comunicación colectiva que existió. El tema se estropea si se cuenta
   como patrimonio religioso.

   La regla del tema: la campana se trata como UNA MÁQUINA DE SONIDO con
   su física y su oficio, y siempre se dice para qué servía en la vida
   práctica de la gente. Nada de nostalgia de pueblo.
   ========================================================================== */

export const CAMPANAS: Short[] = [
  {
    id: "la-campana-que-marcaba-el-dia",
    titulo: "La campana mandaba",
    gancho: "Antes del reloj de bolsillo, el sonido de la campana era la única manera de saber la hora todos a la vez.",
    categoria: "Historia",
    color: "var(--clay)",
    encargo: "Campana de bronce colgada en un campanario de piedra, vista desde abajo.",
    entrada:
      "Europa, siglos IX a XIX. Antes de que existieran los relojes personales, nadie sabía qué hora era salvo mirando el sol. La campana de la iglesia resolvía ese problema para todo el mundo a la vez, porque el sonido llega igual al que está en el campo y al que está en casa. Un pueblo entero trabajaba, comía y se acostaba al ritmo de un badajo, y quien no lo oía quedaba literalmente fuera de la vida del pueblo. Hasta el término que marca los límites de una parroquia se definía por eso: pertenecía a ella todo aquel que alcanzara a oír su campana. Un mapa hecho con sonido, y sin una sola línea dibujada.",
    paginas: [
      {
        rotulo: "Golpes y toques",
        texto:
          "Las campanas no daban solo la hora, porque cada situación tenía su toque propio y reconocible. Había un toque para el fuego, otro para el peligro y otro distinto para llamar al concejo. El toque de difuntos indicaba además si el muerto era hombre, mujer o niño, con un número de golpes fijo. Quien vivía allí distinguía todo eso sin pensarlo, igual que hoy se distingue el timbre del teléfono. El campanero era un cargo municipal con sueldo, y en muchos sitios el oficio pasaba de padres a hijos. Tocar bien exigía fuerza, oído y saberse de memoria decenas de secuencias distintas.",
        destacado: { tipo: "frase", frase: "Cada situación tenía su toque, y el pueblo lo entendía." },
      },
      {
        rotulo: "Fundirla bien",
        texto:
          "Fundir una campana era una de las operaciones más difíciles que hacía un artesano medieval. El metal es una mezcla de cobre y estaño en una proporción muy concreta que decide el sonido. Con poco estaño la campana suena sorda, y con demasiado se vuelve frágil y se raja. El tono depende del grosor de la pared y del diámetro, así que la nota se decide al diseñarla. Si sale desafinada se puede corregir quitando metal por dentro con un torno, y nunca añadiendo. Por eso las campanas antiguas se fundían en un hoyo junto a la propia iglesia, para no moverlas.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "por ciento de estaño" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron miles de campanas colgadas que siguen siendo los objetos más antiguos en uso de muchos pueblos. Hay algunas que llevan sonando desde el siglo XIII sin más mantenimiento que engrasar el eje. Quedó también un oficio que casi desapareció con los motores y que se está recuperando. Varias comunidades de toque manual están reconocidas como patrimonio inmaterial por la Unesco. Y quedó el motivo por el que en muchos sitios ya no suenan tanto como antes. Los ayuntamientos reciben quejas por ruido, y varias sentencias han obligado a callarlas de noche.",
      },
    ],
  },
  {
    id: "cinco-notas-a-la-vez",
    titulo: "Una campana suena a cinco notas",
    gancho: "El golpe hace vibrar el bronce de cinco maneras distintas al mismo tiempo. Por eso cuesta tanto afinarla.",
    categoria: "Música",
    color: "var(--slate)",
    encargo: "Interior de una campana visto desde abajo, con el badajo colgando en el centro.",
    entrada:
      "Países Bajos, siglo XVII. Dos hermanos fundidores descubren cómo afinar una campana de manera que todas sus notas encajen entre sí, cosa que nadie había conseguido antes. El problema es que una campana no da una nota, sino cinco al mismo tiempo. Cada zona del bronce vibra a su ritmo, y si esas notas no casan el resultado suena a lata.",
    paginas: [
      {
        rotulo: "Cinco notas",
        texto:
          "Cuando el badajo golpea, el bronce se deforma y vuelve, y esa vibración se transmite al aire. La campana no vibra entera de una sola manera, sino que se dobla en varios patrones a la vez. Cada patrón produce una nota distinta, y las cinco principales tienen nombre propio entre los campaneros. La más grave es un zumbido largo que sale del borde y es la que queda al final. Encima hay otras cuatro más agudas que aparecen de golpe y se apagan mucho antes. El oído junta todo eso y decide una nota, aunque físicamente esa nota no exista sola.",
        destacado: { tipo: "frase", frase: "El oído decide una nota que físicamente no existe." },
      },
      {
        rotulo: "Quitar metal",
        texto:
          "Afinar una campana consiste en corregir cada una de esas notas por separado. Cada nota depende sobre todo de una zona concreta de la pared, y adelgazar esa zona la baja. Se mete la campana en un torno vertical y se va quitando metal por dentro, milímetro a milímetro. El proceso no tiene marcha atrás, porque el metal que se quita no se puede devolver. Hasta el siglo XX se hacía a oído, comparando con un diapasón y con mucha experiencia. Hoy se mide con un analizador de frecuencias, y el gesto del torno sigue siendo el mismo.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "notas en un solo golpe" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el carillón, que es un conjunto de campanas afinadas entre sí para tocar melodías. Los mejores tienen más de cincuenta campanas y se tocan desde un teclado de palancas de madera. El intérprete golpea las palancas con el puño cerrado, porque hace falta bastante fuerza. Quedó también una campana famosa que nunca sonó bien, porque se rajó a los pocos días de colgarla. Una grieta cambia cómo vibra el bronce y estropea todas las notas a la vez, sin arreglo posible. Refundirla es la única salida, y con ella se pierde el sonido que tenía.",
      },
    ],
  },
  {
    id: "la-campana-y-el-rayo",
    titulo: "Tocar contra la tormenta mataba",
    gancho: "Se creía que el sonido rompía las nubes. El campanario es lo más alto del pueblo y el campanero, el primero en caer.",
    categoria: "Creencias",
    color: "var(--plum)",
    curioso: true,
    encargo: "Rayo cayendo sobre la torre de una iglesia en una tormenta nocturna.",
    entrada:
      "Europa, siglos XV a XVIII. Existía la costumbre extendida de tocar las campanas cuando se acercaba una tormenta, porque se creía que el ruido rompía las nubes y alejaba el granizo. Muchas campanas llevaban grabada una inscripción latina que decía justamente eso. El problema es que un campanario es la estructura más alta del pueblo y el campanero está agarrado a una cuerda mojada.",
    paginas: [
      {
        rotulo: "Lo más alto",
        texto:
          "Un rayo busca el camino más corto entre la nube y el suelo, y por eso cae en lo que sobresale. En un pueblo antiguo, la torre de la iglesia era casi siempre lo más alto con diferencia. Dentro había una masa grande de metal colgada, que conduce la electricidad de maravilla. Y de esa masa bajaba una cuerda hasta las manos de una persona plantada en el suelo. La cuerda mojada por la lluvia conduce bastante bien, así que el circuito quedaba cerrado. Tocar a tormenta era, en la práctica, ponerse a hacer de pararrayos con las manos.",
        destacado: { tipo: "frase", frase: "La cuerda mojada cerraba el circuito hasta las manos." },
      },
      {
        rotulo: "El recuento",
        texto:
          "A finales del siglo XVIII, un estudio alemán recopiló los casos de un periodo de treinta y tres años. Contó casi cuatrocientos campanarios alcanzados por un rayo y más de un centenar de campaneros muertos. Aquellos datos llegaron justo cuando acababa de inventarse el pararrayos y la discusión estaba abierta. Varias autoridades prohibieron la costumbre por decreto, y en muchos sitios la prohibición se ignoró durante décadas. La resistencia venía de que la práctica llevaba siglos y estaba respaldada por la costumbre religiosa. Lo que acabó con ella no fue el argumento, sino instalar pararrayos en las propias torres.",
        destacado: { tipo: "cifra", cifra: "400", unidad: "campanarios alcanzados en 33 años" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron las inscripciones grabadas en el bronce de muchas campanas antiguas que siguen colgadas. Dicen en latín que ahuyentan el rayo y llaman a los vivos, y hoy se leen como curiosidad. Quedó el pararrayos instalado en casi todos los campanarios de Europa, muchas veces bien a la vista. Y quedó un ejemplo que se cita mucho al hablar de creencias y de datos. La costumbre parecía funcionar porque la tormenta siempre acaba pasando, se toque o no se toque. Hizo falta contar los muertos para que alguien se planteara si el remedio era peor.",
      },
    ],
  },
];
