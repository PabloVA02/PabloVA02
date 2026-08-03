import type { Short } from "../shorts";

/* ==========================================================================
   Electricidad.

   Lo que hay dentro del enchufe y que nadie ve. El riesgo del tema es el
   manual de física: voltios, amperios y una explicación de qué es un
   electrón que no le interesa a nadie a las once de la noche.

   La regla del tema: se cuenta LA PELEA. La electricidad llegó a las casas
   a través de guerras comerciales, apuestas personales y experimentos que
   hoy serían delito. Una rana muerta que se mueve. Un hombre volando una
   cometa en una tormenta. Dos empresas matando animales en público para
   demostrar que la corriente del otro es peligrosa.

   Nada de unidades ni de fórmulas. Si hace falta explicar la diferencia
   entre dos corrientes, se hace con una manguera y se sigue.
   ========================================================================== */

export const ELECTRICIDAD: Short[] = [
  {
    id: "guerra-corrientes",
    titulo: "Dos empresas se pelearon matando animales en público",
    gancho: "Una defendía una corriente y la otra la contraria. La campaña incluyó electrocutar a un elefante.",
    categoria: "Electricidad",
    color: "var(--clay)",
    encargo: "Postes de madera con decenas de cables cruzados sobre una calle de 1890.",
    entrada:
      "Estados Unidos, finales de la década de 1880. La luz eléctrica acaba de llegar a las ciudades y hay dos maneras incompatibles de repartirla. Una empresa apuesta por la corriente continua y otra por la alterna, que viaja mucho más lejos sin perderse por el camino. Solo puede ganar una, porque ninguna casa va a instalarse dos redes.",
    paginas: [
      {
        rotulo: "Las dos corrientes",
        texto:
          "La diferencia es fácil de ver con una manguera: la continua empuja el agua siempre en el mismo sentido, y la alterna la hace ir y venir muchas veces por segundo. Eso, que suena a detalle, tiene una consecuencia enorme: la alterna se puede subir de tensión para viajar kilómetros por un cable fino y bajarla otra vez al llegar, mientras que la continua se apagaba a menos de dos kilómetros de la central. Con el sistema continuo habría hecho falta una central eléctrica cada pocas manzanas de casas, con su caldera y su chimenea humeando en mitad del barrio.",
        destacado: { tipo: "frase", frase: "La corriente continua se apagaba a dos kilómetros de la central." },
      },
      {
        rotulo: "La campaña",
        texto:
          "Perdiendo la discusión técnica, el bando de la continua se pasó al miedo. Organizó demostraciones públicas en las que se electrocutaba con corriente alterna a perros, terneros y caballos comprados para eso, delante de periodistas invitados, y financió en la sombra el desarrollo de la silla eléctrica con el sistema del rival para que la gente lo asociara con la pena de muerte. En 1903 se llegó a filmar la electrocución de una elefanta de circo que había matado a tres personas, y la película se proyectó en las salas de medio país como espectáculo de feria.",
        destacado: { tipo: "cifra", cifra: "1903", unidad: "el año de la electrocución filmada" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No sirvió de nada. La alterna ganó el contrato para iluminar la Exposición Universal de Chicago en 1893 y después el de la central que aprovechó las cataratas del Niágara, y a partir de ahí se impuso en todo el mundo; es la que sale hoy de cualquier enchufe. La continua ha vuelto por la puerta de atrás, porque es lo que usan las baterías, los ordenadores y los paneles solares: por eso casi todos los aparatos de casa llevan un cargador, que es una caja que convierte una en otra.",
      },
    ],
  },

  {
    id: "rana-voltio",
    titulo: "La pila salió de una discusión sobre ranas",
    gancho: "Un anatomista creyó haber encontrado la electricidad de los seres vivos. Su rival demostró que era el metal.",
    categoria: "Electricidad",
    color: "var(--forest)",
    curioso: true,
    encargo: "Una mesa de laboratorio del XVIII con instrumentos de cobre y un tarro de cristal.",
    entrada:
      "Bolonia, Italia, 1780. Un profesor de anatomía está diseccionando ranas en su mesa cuando roza con un bisturí el nervio de una pata ya separada del cuerpo y la pata da una patada. El animal lleva horas muerto. Repite el experimento durante años y concluye que ha encontrado algo enorme: una electricidad propia de los seres vivos.",
    paginas: [
      {
        rotulo: "La electricidad animal",
        texto:
          "Publicó sus resultados en 1791 y Europa entera se puso a colgar ranas de ganchos de latón en balcones para ver si contraían las patas durante las tormentas. Su explicación era que el músculo almacenaba un fluido eléctrico propio, distinto del de las máquinas, y que el metal solo servía para liberarlo. La idea encajaba con el ambiente de la época y llegó a inspirar novelas: una escritora inglesa de dieciocho años estaba escuchando conversaciones sobre esos experimentos el verano en que empezó a escribir la historia de un cadáver reanimado.",
        destacado: { tipo: "frase", frase: "Colgaban ranas de ganchos en los balcones para ver si se movían." },
      },
      {
        rotulo: "El otro profesor",
        texto:
          "Un físico de Pavía, a doscientos kilómetros, no se lo creyó. Se fijó en un detalle que los demás pasaban por alto: la pata solo saltaba cuando el circuito incluía dos metales distintos, normalmente cobre y hierro, tocándose. Su conclusión fue la contraria: la electricidad no salía de la rana, la producían los dos metales con un líquido en medio, y la pata era simplemente un detector muy sensible. Para demostrarlo, en 1800 apiló discos de cobre y de cinc separados por cartones mojados en salmuera y sacó corriente sin ningún animal.",
        destacado: { tipo: "cifra", cifra: "1800", unidad: "el año de la primera pila" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella torre de discos fue la primera pila de la historia y la primera fuente de electricidad continua y estable que existió; hasta entonces solo se sabía producir chispas. La unidad con que se mide la tensión lleva el apellido del físico. Lo curioso es que los dos tenían parte de razón: los nervios y los músculos sí funcionan con impulsos eléctricos, cosa que se confirmó un siglo después, así que el anatomista no estaba equivocado del todo. Simplemente, no era eso lo que hacía saltar sus ranas: aquellas patadas venían de fuera, del cobre y del hierro que tenía sobre la mesa.",
      },
    ],
  },

  {
    id: "pararrayos-cometa",
    titulo: "El pararrayos se probó con una cometa",
    gancho: "Dos personas repitieron el experimento y una murió. Iglesias enteras se negaron a instalarlo.",
    categoria: "Electricidad",
    color: "var(--slate)",
    encargo: "Un cielo de tormenta muy oscuro con una varilla metálica recortada contra las nubes.",
    entrada:
      "Filadelfia, junio de 1752. Un impresor y político estadounidense de cuarenta y seis años sospecha que el rayo no es un castigo divino ni un fenómeno aparte, sino la misma electricidad que él produce frotando cristal en su gabinete. Para comprobarlo se le ocurre acercarse a una nube de tormenta con lo que tiene a mano: una cometa de seda, un cable y una llave.",
    paginas: [
      {
        rotulo: "La cometa",
        texto:
          "El montaje era más astuto de lo que suena. La cuerda de cáñamo, al mojarse con la lluvia, conducía la electricidad hacia abajo; en el extremo ató una llave metálica y, atada a la llave, una cinta de seda seca que él sujetaba resguardado bajo un cobertizo, porque la seda seca no conduce. Cuando pasó una nube cargada, los hilos sueltos de la cuerda se erizaron y al acercar el nudillo a la llave saltó una chispa. Nunca le cayó un rayo encima: si le llega a caer, no lo cuenta.",
        destacado: { tipo: "frase", frase: "Si le llega a caer el rayo encima, no lo cuenta." },
      },
      {
        rotulo: "Los muertos",
        texto:
          "El experimento se publicó y varios curiosos lo repitieron sin entender los detalles que lo hacían relativamente seguro. Un profesor de San Petersburgo murió fulminado en 1753 mientras trabajaba con una varilla conectada a tierra sin aislamiento, delante de su ayudante, que quedó aturdido durante horas. A partir de ahí quedó claro que aquello no era un pasatiempo. El propio inventor había deducido la aplicación práctica antes incluso de volar la cometa: una varilla metálica afilada en lo alto de un edificio, conectada al suelo con un cable grueso, que le ofreciera al rayo un camino más fácil que la piedra. Se negó a patentarla.",
        destacado: { tipo: "cifra", cifra: "1753", unidad: "el año del primer muerto al repetirlo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La resistencia fue religiosa. Muchos consideraban que el rayo era un instrumento de la providencia y que desviarlo era una insolencia, así que las iglesias, que solían ser el edificio más alto del pueblo, fueron de las últimas en instalarlos; en Alemania se documentaron cientos de campanarios incendiados en el siglo XVIII mientras la discusión seguía. La costumbre de tocar las campanas para ahuyentar la tormenta mató además, solo en Alemania y en treinta años, a más de un centenar de campaneros: la cuerda mojada que colgaba del badajo era exactamente el camino que el rayo estaba buscando.",
      },
    ],
  },
];
