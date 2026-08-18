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
    titulo: "La guerra de la corriente",
    gancho: "Una defendía una corriente y la otra la contraria. La campaña incluyó electrocutar a un elefante.",
    categoria: "Electricidad",
    color: "var(--clay)",
    encargo: "Postes de madera con decenas de cables cruzados sobre una calle de 1890.",
    fotos: [
      {
        archivo: "Nikola Tesla, with his equipment EDIT.jpg",
        autor:
          "Tesla sentado en su laboratorio de Colorado Springs mientras su bobina descarga, 1899. Fotografía de Dickenson V. Alley.",
        licencia: "Dominio público",
        pdPorEdad: 1929,
        fuente: "https://commons.wikimedia.org/wiki/File:Nikola_Tesla,_with_his_equipment_EDIT.jpg",
        foco: "50% 45%",
        alt: "Un hombre leyendo sentado en una nave de madera mientras chispas enormes cruzan el aire por encima de él.",
      },
      {
        archivo: "Vintage edison light bulb.jpg",
        autor: "Una bombilla de filamento a la vista, como las que había que alimentar.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Vintage_edison_light_bulb.jpg",
        foco: "50% 45%",
        alt: "Una bombilla de cristal transparente con el filamento encendido en naranja dentro.",
      },
      {
        archivo: "Niagara Falls, mill district on American shore, ca. 1900.jpg",
        autor: "Las fábricas al pie del Niágara hacia 1900, donde se decidió la pelea. Detroit Publishing Co.",
        licencia: "Dominio público",
        pdPorEdad: 1924,
        fuente: "https://commons.wikimedia.org/wiki/File:Niagara_Falls,_mill_district_on_American_shore,_ca._1900.jpg",
        foco: "50% 50%",
        alt: "Una hilera de fábricas de ladrillo con chimeneas junto al río, en una fotografía antigua.",
      },
      {
        archivo: "FvfCoralnaBatoSRc0731 03.JPG",
        autor: "Torres de alta tensión: la corriente alterna ganó porque se puede subir de voltaje y llevar lejos.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:FvfCoralnaBatoSRc0731_03.JPG",
        foco: "50% 45%",
        alt: "Torres metálicas de alta tensión con sus cables cruzando el cielo.",
      },
    ],
    entrada:
      "Estados Unidos, finales de la década de 1880. La luz eléctrica acaba de llegar a las ciudades y hay dos maneras incompatibles de repartirla. Una empresa apuesta por la corriente continua y otra por la alterna, que viaja mucho más lejos sin perderse por el camino. Solo puede ganar una, porque ninguna ciudad va a instalarse dos redes enteras. Lo que sigue no es un debate técnico entre ingenieros: es una campaña de propaganda que incluye electrocutar animales en público para demostrar que la corriente del rival mata. Terminó con un elefante electrocutado delante de mil quinientas personas y con una cámara grabándolo.",
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
    titulo: "La pila salió de unas ranas",
    gancho: "Un anatomista creyó haber encontrado la electricidad de los seres vivos. Su rival demostró que era el metal.",
    categoria: "Electricidad",
    color: "var(--sage)",
    curioso: true,
    encargo: "Una mesa de laboratorio del XVIII con instrumentos de cobre y un tarro de cristal.",
    fotos: [
      {
        archivo: "Volta battery-MHS 373-IMG 3840-black.jpg",
        autor: "Pila de Volta original conservada en el Musée d'histoire des sciences de Ginebra. Fotografía de Rama, 2018.",
        licencia: "CC BY-SA 3.0 fr",
        foco: "50% 50%",
        fuente: "https://commons.wikimedia.org/wiki/File:Volta_battery-MHS_373-IMG_3840-black.jpg",
        alt: "Una columna de discos metálicos apilados entre tres varillas, con base y remate de madera dorada, sobre fondo negro.",
      },
      {
        archivo: "Green frog (Rana esculenta complex) Danube delta 2.jpg",
        autor: "Rana verde (complejo Pelophylax esculentus) en el delta del Danubio. Fotografía de Charles J. Sharp, 2022.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Green_frog_(Rana_esculenta_complex)_Danube_delta_2.jpg",
        foco: "50% 50%",
        alt: "Una rana verde con la piel moteada, quieta sobre la vegetación de una orilla.",
      },
      {
        archivo: "Volta battery-MHS 373-IMG 3842.JPG",
        autor: "Detalle de la misma pila: discos de cobre y de cinc separados por cartones empapados en salmuera. Fotografía de Rama, 2018.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Volta_battery-MHS_373-IMG_3842.JPG",
        foco: "50% 50%",
        alt: "Primer plano del apilamiento de discos metálicos con las capas de cartón asomando entre ellos.",
      },
      {
        archivo: "Volta battery-MHS 373-IMG 3840-white.jpg",
        autor: "La pila de Volta recortada sobre fondo claro. Fotografía de Rama, Musée d'histoire des sciences de Ginebra.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Volta_battery-MHS_373-IMG_3840-white.jpg",
        foco: "50% 50%",
        alt: "La torre de discos de la pila vista entera, con su armazón de tres columnas.",
      },
    ],
    entrada:
      "Bolonia, Italia, 1780. Un profesor de anatomía está diseccionando ranas encima de su mesa cuando roza con un bisturí el nervio de una pata ya separada del cuerpo, y la pata da una patada limpia. El animal lleva horas muerto y no queda en él nada que pueda moverse por su cuenta. El profesor repite el experimento durante años, con toda clase de variantes, y llega a una conclusión enorme y equivocada a medias: que ha encontrado una electricidad propia de los seres vivos, distinta de la de las máquinas. Media Europa se lo cree.",
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
    titulo: "El pararrayos y la cometa",
    gancho: "Dos personas repitieron el experimento y una murió. Iglesias enteras se negaron a instalarlo.",
    categoria: "Electricidad",
    color: "var(--slate)",
    encargo: "Un cielo de tormenta muy oscuro con una varilla metálica recortada contra las nubes.",
    fotos: [
      {
        archivo: "Benjamin Franklin by Joseph Duplessis 1778.jpg",
        autor: "Óleo de Joseph-Siffred Duplessis con Benjamin Franklin, hacia 1785.",
        licencia: "Public domain",
        pdPorEdad: 1802,
        fuente: "https://commons.wikimedia.org/wiki/File%3ABenjamin%20Franklin%20by%20Joseph%20Duplessis%201778.jpg",
        foco: "50% 35%",
        alt: "Retrato de Benjamin Franklin mayor, con levita gris y el pelo largo y cano.",
      },
      {
        archivo: "Ansfelden Berg Kirche Zehetner S.jpg",
        autor: "Cable de pararrayos bajando por el muro de una iglesia en Ansfelden, Austria.",
        licencia: "CC BY-SA 3.0 at",
        fuente: "https://commons.wikimedia.org/wiki/File%3AAnsfelden%20Berg%20Kirche%20Zehetner%20S.jpg",
        foco: "35% 38%",
        alt: "Muro de iglesia con esgrafiados y un cable de pararrayos bajando en vertical.",
      },
      {
        archivo: "Joseph Siffrein Duplessis - Benjamin Franklin - Google Art Project.jpg",
        autor: "Otra versión del retrato de Franklin por Duplessis, hacia 1785.",
        licencia: "Public domain",
        pdPorEdad: 1802,
        fuente: "https://commons.wikimedia.org/wiki/File%3AJoseph%20Siffrein%20Duplessis%20-%20Benjamin%20Franklin%20-%20Google%20Art%20Project.jpg",
        foco: "50% 35%",
        alt: "Franklin de medio cuerpo sobre fondo oscuro, mirando de frente.",
      },
      {
        archivo: "Portrait of Benjamin Franklin MET DP862840.jpg",
        autor: "Grabado de Benjamin Franklin a partir del retrato de Duplessis. Museo Metropolitano de Arte.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File%3APortrait%20of%20Benjamin%20Franklin%20MET%20DP862840.jpg",
        foco: "50% 35%",
        alt: "Grabado antiguo con el retrato de Franklin en blanco y negro.",
      },
    ],
    entrada:
      "Filadelfia, junio de 1752. Un impresor y político estadounidense de cuarenta y seis años sospecha, contra lo que cree todo el mundo a su alrededor, que el rayo no es un castigo divino ni un fenómeno de otra naturaleza, sino exactamente la misma electricidad que él produce en su gabinete frotando un tubo de cristal con un paño. Para comprobarlo se le ocurre una idea que hoy pondría los pelos de punta a cualquiera: acercarse a una nube de tormenta con lo que tiene a mano, es decir, una cometa de seda, un cable y una llave.",
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
