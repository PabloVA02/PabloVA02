import type { Short } from "../shorts";

/* ==========================================================================
   Perfume.

   El riesgo del tema es el lenguaje de la propia industria: notas de
   salida, corazón y fondo, acordes, evocaciones. Palabras que no explican
   nada y suenan a folleto.

   La regla del tema: un perfume se cuenta por LO QUE HAY DENTRO DEL
   FRASCO Y LO QUE CUESTA. Una secreción de ballena recogida en la playa.
   Un error de dosificación en un laboratorio. Un vacío legal que permite
   copiar cualquier fórmula. Lo interesante del perfume es siempre lo poco
   glamuroso: el bicho, el descuido, el margen comercial.

   Y el precio se compara con algo, porque decir «caro» no dice nada.
   ========================================================================== */

export const PERFUME: Short[] = [
  {
    id: "perfume-numero-cinco",
    titulo: "Pidió que no oliera a flor",
    gancho: "Un ayudante se pasó con la dosis de un ingrediente nuevo, y se quedó esa muestra.",
    categoria: "Perfume",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un frasco de perfume rectangular y sencillo sobre un fondo blanco liso.",
    fotos: [
      {
        archivo: "Chanel - Flickr - Kevin Rheese.jpg",
        autor: "El frasco rectangular de tapón octogonal, iluminado de cerca. Fotografía de Kevin Rheese, 2015.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Chanel_-_Flickr_-_Kevin_Rheese.jpg",
        foco: "50% 55%",
        alt: "Un frasco de perfume de vidrio grueso con tapón cuadrado, recortado contra una luz rosa y naranja.",
      },
      {
        archivo: "Perfume Organ.jpg",
        autor: "El órgano de un perfumista: cada frasco, una materia prima. Fotografía de Mx. Granger, 2024.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Perfume_Organ.jpg",
        foco: "50% 50%",
        alt: "Estanterías de madera en gradas con cientos de frascos etiquetados, llenos de líquidos ámbar y marrón.",
      },
      {
        archivo: "Leather covered perfume case, Netherlands, 1671-1700 Wellcome L0058618.jpg",
        autor: "Estuche de perfume forrado de piel con frascos de plata, Países Bajos, finales del siglo XVII. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Leather_covered_perfume_case,_Netherlands,_1671-1700_Wellcome_L0058618.jpg",
        foco: "50% 55%",
        alt: "Un cofre de piel abierto con forro rosa y cuatro frascos de vidrio con tapones de plata encajados dentro.",
      },
      {
        archivo: "Lavender field at the foot of the Alps, Provence, France (51695209778).jpg",
        autor: "Campo de lavanda al pie de los Alpes, en Provenza. Fotografía de dronepicr, 2021.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lavender_field_at_the_foot_of_the_Alps,_Provence,_France_(51695209778).jpg",
        foco: "50% 62%",
        alt: "Hileras moradas de lavanda que se pierden en el horizonte, con montañas al fondo y nubes altas.",
      },
    ],
    entrada:
      "Sur de Francia, 1920. Una modista parisina que acaba de cambiar la manera de vestir de media Europa quiere ahora un perfume, y lo quiere distinto de todo lo que hay en las tiendas. Los de la época imitan siempre una flor concreta y se llaman como ella: rosa, jazmín, violeta, lirio del valle. A ella le parecen todos iguales y todos empalagosos. Lo que pide es algo que no huela a ninguna flor identificable, que no se pueda nombrar señalando un jardín, sino que huela sencillamente a mujer limpia. Le encarga la mezcla a un perfumista ruso instalado en Grasse.",
    paginas: [
      {
        rotulo: "Las muestras",
        texto:
          "El perfumista preparó varias muestras numeradas y usó en ellas una familia de compuestos sintéticos recién llegada a la industria, los aldehídos, que huelen a algo difícil de nombrar: a piel limpia, a ropa recién planchada, a chispa. Se dosifican en cantidades diminutas, porque en exceso resultan insoportables. Según la versión que se repite en el oficio, un ayudante confundió la concentración y echó en uno de los frascos muchísimo más de lo previsto. La modista olió las muestras una detrás de otra, se paró en aquella, la número cinco, y dijo que era exactamente lo que buscaba.",
        destacado: { tipo: "frase", frase: "Olió las muestras una a una y se paró en la quinta." },
      },
      {
        rotulo: "El frasco",
        texto:
          "Todo lo demás se hizo al revés de como se hacía entonces. El frasco no era una filigrana de cristal tallado sino un rectángulo de farmacia, con una etiqueta blanca y letras negras, y se contó que el tapón imitaba el contorno de una plaza de París. El nombre tampoco era romántico: un número. Y la modista lo regaló primero a sus clientas en el probador, sin ponerlo a la venta, para que fueran ellas quienes lo pidieran. La estrategia funcionó tan bien que el perfume acabó dando más dinero que toda la ropa que salía del taller.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "el número de la muestra elegida" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Sigue siendo el perfume más vendido de la historia, con una botella despachada cada pocos segundos en algún punto del planeta. La casa mantiene campos propios de jazmín y de rosa en el sur de Francia para asegurarse la materia prima, y la fórmula exacta no se ha publicado nunca. De aquella idea de no oler a ninguna flor concreta salió media perfumería moderna: hoy casi todo lo que se vende lleva aldehídos, y lo que se busca no es reproducir un olor de la naturaleza sino inventar uno que no existía. Todo empezó, si la historia es cierta, con un descuido.",
      },
    ],
  },

  {
    id: "ambar-gris",
    titulo: "Piedras de playa que valen fortunas",
    gancho: "Una masa cerosa que huele a establo y que después de años en el mar huele a otra cosa.",
    categoria: "Perfume",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una masa gris y rugosa del tamaño de un melón sobre arena mojada.",
    entrada:
      "Costas de medio mundo, siglo XVI. De vez en cuando aparece varada en la arena una masa cerosa y grisácea, del tamaño de un melón o de un balón, que huele a establo. Quien la encuentra puede estar delante de varios cientos de miles de euros sin saberlo. Durante siglos nadie supo qué era ni de dónde salía.",
    paginas: [
      {
        rotulo: "Qué es",
        texto:
          "Es una secreción del intestino del cachalote. Estos animales comen calamares y no consiguen digerir los picos córneos, que son duros como uñas y les irritan las tripas, así que los van envolviendo en una sustancia grasa que se acumula durante meses. La masa acaba saliendo del animal, flota y se pasa años dando vueltas por el mar, expuesta al sol y al agua salada. En ese tiempo cambia por completo: pierde el olor a excremento y desarrolla otro dulzón y persistente, difícil de describir, que recuerda al tabaco, a la madera húmeda y a la piel.",
        destacado: { tipo: "frase", frase: "Envuelven en grasa los picos de calamar y los expulsan." },
      },
      {
        rotulo: "Por qué se paga",
        texto:
          "Se usa en perfumería desde la Edad Media, y no por su olor sino por lo que hace con los demás: fija los aromas volátiles y consigue que un perfume dure horas sobre la piel en vez de minutos. También se le atribuyeron poderes medicinales, se echaba en el vino y se llevaba encima durante las epidemias como amuleto. Hoy la mayoría de las casas usa un sustituto sintético mucho más barato y estable, aunque algunas grandes marcas siguen comprándolo natural para sus productos caros. El kilo se ha llegado a pagar por encima de los veinte mil euros.",
        destacado: { tipo: "cifra", cifra: "20.000", unidad: "euros el kilo, en el mejor caso" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Como el cachalote es una especie protegida, el comercio está prohibido en varios países, entre ellos Estados Unidos, mientras que en Europa se permite si el material se ha encontrado en la playa, porque el animal no muere al expulsarlo. Cada pocos años aparece en la prensa la noticia del pescador que encuentra un pedrusco maloliente y se hace rico, y también la del que carga con una piedra normal hasta el laboratorio y vuelve con las manos vacías. La prueba casera consiste en clavarle una aguja caliente: si es auténtico, se funde y suelta un hilo de humo oscuro.",
      },
    ],
  },

  {
    id: "olor-sin-patente",
    titulo: "Un olor no se puede registrar",
    gancho: "Copiar un perfume caro es legal mientras no copies el nombre ni el frasco. Y se hace en serie.",
    categoria: "Perfume",
    color: "var(--plum)",
    encargo: "Una fila de frascos idénticos sin etiqueta, numerados a mano.",
    entrada:
      "Europa, 2005. Un tribunal europeo resuelve un pleito entre una gran casa de perfumes y una empresa que vende imitaciones baratas con listas de equivalencias. La sentencia deja claro algo que sorprende a mucha gente: la fórmula de un perfume no está protegida ni como obra ni como patente en la mayor parte de los casos.",
    paginas: [
      {
        rotulo: "El vacío legal",
        texto:
          "Patentar una fórmula obligaría a publicarla, que es justo lo que ninguna casa quiere, y además exige demostrar que el resultado es novedoso e inventivo, algo difícil de sostener con una mezcla de ingredientes conocidos. Registrarla como obra artística tampoco funciona: los tribunales suelen responder que un olor no se puede describir con precisión suficiente y que no queda claro dónde empieza y dónde acaba la obra. Lo que sí está protegido es todo lo demás: el nombre, el frasco, la caja, el logotipo y los anuncios. Es decir, exactamente la parte que no huele.",
        destacado: { tipo: "frase", frase: "Está protegido el frasco, no lo que hay dentro." },
      },
      {
        rotulo: "La copia legal",
        texto:
          "Existen aparatos capaces de descomponer un perfume y decir qué contiene, aunque no en qué orden ni con qué proceso se mezcló, así que un buen perfumista puede acercarse mucho al original en unas semanas de trabajo. De ahí sale toda una industria de equivalencias, con tiendas que venden frascos numerados y una lista donde se indica a qué perfume caro se parece cada uno. Las grandes casas pleitean sobre todo contra esas listas, alegando que se aprovechan de su publicidad, y ganan o pierden según el país. Contra el líquido en sí, casi nunca.",
        destacado: { tipo: "cifra", cifra: "0", unidad: "protección legal sobre la mezcla" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La consecuencia es que la perfumería se defiende con secreto y con marca, no con leyes: fórmulas conocidas por muy poca gente, proveedores en exclusiva y una inversión gigantesca en publicidad para que lo que se compre sea el nombre. Se calcula que en un perfume de lujo el contenido del frasco cuesta una fracción muy pequeña del precio final, bastante por debajo del envase y de los anuncios. Así que el negocio funciona al revés de lo que parece: lo protegido es la etiqueta, y lo que de verdad huele lo puede copiar cualquiera con un buen laboratorio.",
      },
    ],
  },
];
