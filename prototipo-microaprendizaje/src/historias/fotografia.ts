import type { Short } from "../shorts";

/* ==========================================================================
   Fotografía.

   Hacer que la luz se quede quieta. El riesgo del tema son los aparatos:
   diafragmas, objetivos y marcas, que no le importan a quien no hace fotos.

   La regla del tema: se cuenta LO QUE LA FOTO CAMBIÓ EN QUIEN LA VIO. Una
   imagen que obliga a un país a mirarse. Un planeta visto entero por primera
   vez. Un fraude infantil que engañó a media Inglaterra durante sesenta
   años. La fotografía interesa por lo que provoca, no por cómo se toma.

   Y siempre se dice el tiempo de exposición cuando viene al caso, porque es
   el dato que hace entender de golpe por qué en las fotos antiguas nadie
   sonríe ni hay una sola persona por la calle.
   ========================================================================== */

export const FOTOGRAFIA: Short[] = [
  {
    id: "primera-foto",
    titulo: "La foto tardó ocho horas",
    gancho: "El sol cruzó el cielo mientras se tomaba, así que en la imagen los dos lados están iluminados.",
    categoria: "Fotografía",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una placa metálica gastada con una vista borrosa de tejados y un patio.",
    fotos: [
      {
        archivo: "Niépce Heliograph 1827 Le Gras.jpg",
        autor: "La heliografía sobre placa de peltre tomada por Nicéphore Niépce en Le Gras: la imagen fotográfica más antigua que se conserva.",
        licencia: "Dominio público",
        pdPorEdad: 1833,
        fuente: "https://commons.wikimedia.org/wiki/File:Ni%C3%A9pce_Heliograph_1827_Le_Gras.jpg",
        foco: "50% 45%",
        alt: "Una placa de metal gris y rayada donde apenas se distinguen unos tejados y un patio entre la bruma.",
      },
      {
        archivo: "Daguerreotype camera, replica of Voigtlander's first metal camera from 1841, TM32508 - Tekniska museet - Stockholm, Sweden - DSC01429.JPG",
        autor: "Réplica de una cámara de daguerrotipo metálica de 1841. Museo Técnico de Estocolmo. Fotografía de Daderot.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Daguerreotype_camera,_replica_of_Voigtlander%27s_first_metal_camera_from_1841,_TM32508_-_Tekniska_museet_-_Stockholm,_Sweden_-_DSC01429.JPG",
        foco: "50% 45%",
        alt: "Una cámara antigua con cuerpo cónico de latón montada sobre un pie de tres patas.",
      },
      {
        archivo: "Boulevard du Temple by Daguerre.jpg",
        autor: "El bulevar del Temple de París, daguerrotipo de Louis Daguerre, 1838. Abajo a la izquierda, un limpiabotas y su cliente: los únicos que se estuvieron quietos.",
        licencia: "Dominio público",
        pdPorEdad: 1851,
        fuente: "https://commons.wikimedia.org/wiki/File:Boulevard_du_Temple_by_Daguerre.jpg",
        foco: "50% 55%",
        alt: "Una calle ancha con edificios y árboles, completamente vacía de gente y de carruajes.",
      },
      {
        archivo: "-Girl with Portrait of George Washington- MET DT324289.jpg",
        autor: "Retrato al daguerrotipo de una niña, por Southworth y Hawes, hacia 1850. Metropolitan Museum of Art.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:-Girl_with_Portrait_of_George_Washington-_MET_DT324289.jpg",
        foco: "50% 40%",
        alt: "Daguerrotipo de una niña muy quieta, con el rostro serio, sentada junto a un retrato enmarcado.",
      },
    ],
    entrada:
      "Borgoña, Francia, 1826. Un inventor de sesenta años que lleva una década intentando fijar imágenes coloca en la ventana de su cuarto una caja con una lente y, dentro, una placa de peltre cubierta con una sustancia derivada del betún de Judea que tiene una propiedad rara: se endurece donde le da la luz. Enfoca hacia el patio de su casa, abre el objetivo y se va a hacer otras cosas, porque no hay nada que vigilar. No es un experimento de una tarde. Cuando vuelva a mirar habrá pasado tanto tiempo que el sol habrá cruzado el cielo entero.",
    paginas: [
      {
        rotulo: "Ocho horas",
        texto:
          "El betún tardaba tanto en endurecerse que hicieron falta al menos ocho horas de exposición, y hay quien calcula que fueron varios días seguidos. Cuando terminó, lavó la placa con aceite de lavanda: la parte que había recibido luz quedó dura y se mantuvo, y la que no se disolvió, dejando el metal a la vista. El resultado es una imagen de tejados, un palomar y un peral, borrosa y con un detalle revelador: los edificios de los dos lados del patio aparecen iluminados a la vez, porque el sol pasó de un lado al otro durante la toma.",
        destacado: { tipo: "frase", frase: "Los dos lados del patio están al sol. El sol cruzó durante la foto." },
      },
      {
        rotulo: "Los retratos",
        texto:
          "Aquella lentitud marcó las primeras décadas del oficio. Con las mejoras posteriores se bajó a unos veinte o treinta segundos, todavía demasiado para estarse quieto sin ayuda, así que los estudios usaban soportes de hierro que sujetaban la nuca por detrás; de ahí vienen esas poses tiesas y esas caras serias, porque una sonrisa no aguanta medio minuto sin temblar. Y en las fotos de calles de la época no aparece casi nadie: quien pasara caminando no dejaba rastro. Solo salen los que se pararon, como un limpiabotas y su cliente.",
        destacado: { tipo: "cifra", cifra: "8 h", unidad: "de exposición para una sola imagen" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La placa original estuvo perdida más de medio siglo. Se expuso en Londres en 1898, se traspapeló en un baúl de una familia inglesa y no reapareció hasta 1952, cuando un historiador la localizó tras años de rastreo. Hoy se conserva en Texas, dentro de una vitrina llena de gas inerte para que no siga degradándose, y hay que mirarla en ángulo y con luz rasante para distinguir algo. Es una imagen que casi no se ve y que fue la primera vez que una máquina guardó lo que había delante.",
      },
    ],
  },

  {
    id: "canica-azul",
    titulo: "La Tierra entera, una vez",
    gancho: "Hizo falta que la nave estuviera entre el Sol y el planeta. Solo ha ocurrido en un vuelo tripulado.",
    categoria: "Fotografía",
    color: "var(--slate)",
    encargo: "El planeta completo sobre negro absoluto, con la Antártida iluminada abajo.",
    fotos: [
      {
        archivo: "The Blue Marble, AS17-148-22727.jpg",
        autor: "«La canica azul», fotografiada desde el Apolo 17 el 7 de diciembre de 1972. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:The_Blue_Marble,_AS17-148-22727.jpg",
        foco: "50% 50%",
        alt: "La Tierra completa sobre el negro del espacio, con África, Arabia y la Antártida iluminadas.",
      },
      {
        archivo: "Earthrise from Apollo 11 (48329893437).jpg",
        autor: "La Tierra asomando sobre el horizonte lunar, fotografiada desde el Apolo 11 en 1969. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Earthrise_from_Apollo_11_(48329893437).jpg",
        foco: "50% 50%",
        alt: "La Tierra pequeña y azul suspendida sobre la superficie gris de la Luna.",
      },
      {
        archivo: "Apollo 10 earthrise.jpg",
        autor: "Salida de la Tierra vista desde el Apolo 10, en mayo de 1969. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Apollo_10_earthrise.jpg",
        foco: "50% 50%",
        alt: "El planeta azul recortado sobre el negro, con el borde de la Luna abajo.",
      },
      {
        archivo: "Earth, Moon and Lunar Module, AS11-44-6643.jpg",
        autor: "La Tierra, la Luna y el módulo lunar en la misma imagen, Apolo 11. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Earth,_Moon_and_Lunar_Module,_AS11-44-6643.jpg",
        foco: "50% 50%",
        alt: "El módulo lunar en primer plano con la Luna debajo y la Tierra al fondo, sobre el negro del espacio.",
      },
    ],
    entrada:
      "A bordo de la última misión tripulada a la Luna, en diciembre de 1972. A unos cuarenta y cinco mil kilómetros de casa, uno de los tres astronautas coge una cámara Hasselblad y dispara hacia atrás, casi sin pensarlo, entre dos tareas del plan de vuelo. En la imagen sale el planeta completo, redondo y encendido de lado a lado, sin un solo trozo en sombra, con África en el centro y la Antártida entera iluminada abajo. Nadie la encargó ni la había planeado nadie, y es la fotografía que más veces se ha reproducido en toda la historia.",
    paginas: [
      {
        rotulo: "La casualidad",
        texto:
          "Para que salga el disco entero sin una franja oscura hace falta que la nave esté justo entre el Sol y la Tierra, con el planeta completamente iluminado de frente, y eso solo se dio en esa trayectoria y a esa hora concreta. Las misiones anteriores despegaron con otra geometría y todas sus fotos muestran una Tierra a medias, como una luna en cuarto creciente. Además coincidió que era la temporada en que el hemisferio sur está inclinado hacia el Sol, así que aparece África entera despejada y el casquete de la Antártida iluminado.",
        destacado: { tipo: "cifra", cifra: "45.000", unidad: "kilómetros de distancia al disparar" },
      },
      {
        rotulo: "Quién disparó",
        texto:
          "La agencia nunca ha atribuido oficialmente la foto a ninguno de los tres tripulantes, porque los tres usaron la misma cámara aquel día y no hay manera de saber quién apretó ese disparador concreto; los tres han dicho en distintas entrevistas que fueron ellos. La imagen llegó además al revés: la nave estaba girada y en el negativo original la Antártida sale arriba. Se publicó dándole la vuelta, porque un planeta boca abajo no lo reconocía nadie y el efecto era desconcertante, aunque en el espacio ninguna de las dos posiciones es más correcta que la otra: arriba y abajo son un acuerdo nuestro.",
        destacado: { tipo: "frase", frase: "El negativo original sale al revés: la Antártida arriba." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se publicó en un momento en que el movimiento ecologista estaba empezando y se convirtió en su emblema: un planeta entero, sin fronteras dibujadas y rodeado de negro, resultó ser el mejor argumento posible para hablar de límites. Desde entonces no ha vuelto a haber ninguna otra igual tomada por una persona, porque nadie ha vuelto a alejarse tanto; todas las que circulan hoy son montajes de satélites que cosen decenas de pasadas. Aquella se hizo con una cámara de mano, un carrete de setenta milímetros y sin visor, disparando por encima del hombro hacia una ventanilla, sin saber si iba a salir.",
      },
    ],
  },

  {
    id: "hadas-recortadas",
    titulo: "Dos niñas y unas hadas",
    gancho: "Fotografiaron hadas de cartón sujetas con alfileres. Un escritor famosísimo las defendió hasta morir.",
    categoria: "Fotografía",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un arroyo entre helechos altos con luz verdosa filtrándose entre las hojas.",
    entrada:
      "Inglaterra, verano de 1917. Dos primas de dieciséis y nueve años juegan junto a un arroyo detrás de la casa y vuelven mojadas y con los zapatos perdidos una vez más. Para justificarse delante de los adultos dicen que bajaban a ver a las hadas del arroyo, y como es evidente que nadie las cree, piden prestada la cámara del padre de una de ellas para demostrarlo. Vuelven en media hora con una placa impresionada. Cuando la revelan, en la fotografía hay hadas. Y aquello no se quedó en casa. Acabaron convenciendo al hombre que había inventado a Sherlock Holmes.",
    paginas: [
      {
        rotulo: "El recorte",
        texto:
          "La mayor era buena dibujando y trabajaba en un estudio fotográfico, así que sabía perfectamente lo que hacía. Copió unas figuras de un libro de cuentos que había en casa, las coloreó, las pegó sobre cartón y las clavó en el suelo con alfileres de sombrero, colocándolas cerca del objetivo para que salieran grandes. Su padre reveló la placa, vio las figuras y las dio por un juego de niñas; su madre, en cambio, se las enseñó dos años después en una conferencia sobre asuntos espirituales, y ahí se les fue de las manos.",
        destacado: { tipo: "frase", frase: "Las clavaron en el suelo con alfileres de sombrero." },
      },
      {
        rotulo: "El escritor",
        texto:
          "Las fotos llegaron a manos del creador de un detective muy famoso, que había perdido a su hijo en la guerra y llevaba años defendiendo públicamente la existencia del más allá. Las estudió, consultó a un experto de la casa fabricante de las placas —que dijo que no veía trucaje evidente, aunque no descartó nada— y publicó un artículo en una revista de gran tirada sosteniendo que eran auténticas. El escándalo fue enorme y se discutió en los periódicos durante meses. Muchos lectores se lo creyeron sin reservas, otros se burlaron del escritor sin piedad, y a las niñas les pidieron más fotos. Las hicieron: tres más, con el mismo método.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "fotos hicieron en total" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aguantaron sesenta y cuatro años sin confesar. En 1981, ya ancianas, admitieron que las cuatro primeras eran recortes de cartón, y explicaron que al principio les daba vergüenza desmentir a un señor tan importante y que después ya era demasiado tarde. La pequeña sostuvo hasta su muerte que la quinta foto sí era auténtica. La cámara con la que se tomaron y una de las figuras de cartón se conservan hoy en un museo del norte de Inglaterra, junto al libro de cuentos del que copiaron los dibujos, abierto por la página exacta. Las cinco placas se vendieron en subasta en 2019 por veinte mil libras.",
      },
    ],
  },
];
