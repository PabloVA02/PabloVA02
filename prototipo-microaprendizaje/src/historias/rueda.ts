import type { Short } from "../shorts";

/* ==========================================================================
   La rueda.

   El objeto que se usa como sinónimo de invento genial, y sobre el que
   casi todo lo que se repite es falso. El riesgo del tema es la frase
   hecha: reinventar la rueda, la rueda cambió el mundo.

   La regla del tema: la rueda solo funciona SI HAY TODO LO DEMÁS. Un eje
   bien hecho, madera dura, un animal que tire, un camino firme y alguien
   que mantenga ese camino. Cuando falta una de esas piezas, la rueda no
   sirve, y hay culturas enteras que la conocieron y la dejaron en los
   juguetes por eso.

   Y siempre se dice qué había antes y qué costaba hacerlo sin ella.
   ========================================================================== */

export const RUEDA: Short[] = [
  {
    id: "rueda-tardia",
    titulo: "La rueda no era para viajar",
    gancho: "Se usó antes para hacer vasijas que para mover nada. Y en América, solo en juguetes.",
    categoria: "Rueda",
    color: "var(--slate)",
    encargo: "Un torno de alfarero de piedra girando con barro encima.",
    fotos: [
      {
        archivo: "02025 0230 Early medieval potter at work.jpg",
        autor: "Un alfarero trabajando sobre un torno de disco, en una recreación de oficios antiguos.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:02025_0230_Early_medieval_potter_at_work.jpg",
        foco: "58% 62%",
        alt: "Un hombre inclinado sobre un gran disco de madera que gira, modelando con las dos manos un cuenco de barro.",
      },
      {
        archivo: "Old wooden wheels (53620865911).jpg",
        autor: "Ruedas de carro de madera apoyadas en un pajar. Fotografía de Winniepix, 2024.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Old_wooden_wheels_(53620865911).jpg",
        foco: "55% 50%",
        alt: "Dos ruedas de radios de madera gastada apoyadas contra unas tablas, con los bujes de hierro en el centro.",
      },
      {
        archivo: "Wheel VeracruzCulture.jpg",
        autor: "Figura de cerámica con ruedas de la cultura de Veracruz, en México.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Wheel_VeracruzCulture.jpg",
        foco: "48% 55%",
        alt: "Un animal de barro con la boca abierta montado sobre cuatro ruedecitas de cerámica que giran de verdad.",
      },
      {
        archivo: "Calle Inca Roca - Cusco - Peru - dry stone wall.jpg",
        autor: "Muro incaico de la calle Hatun Rumiyoc, en Cuzco. Fotografía de AgainErick, 2009.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Calle_Inca_Roca_-_Cusco_-_Peru_-_dry_stone_wall.jpg",
        foco: "42% 50%",
        alt: "Un muro de piedras enormes encajadas sin mortero, cada una con su forma, junto a una calle empedrada.",
      },
    ],
    entrada:
      "Mesopotamia, hacia el año 3500 antes de Cristo. Aparecen las primeras ruedas de las que hay constancia, y no son ruedas de carro: son tornos de alfarero, discos pesados que giran en horizontal sobre un pivote para modelar vasijas con las dos manos. Pasarán unos siglos antes de que a alguien se le ocurra ponerlas de canto y engancharlas a un animal. Y para entonces la humanidad lleva ya varios milenios cultivando cereales, tejiendo, fundiendo metales, escribiendo en tablillas de barro y levantando ciudades amuralladas con miles de habitantes dentro. La rueda no está al principio de nada: llega tarde.",
    paginas: [
      {
        rotulo: "El eje",
        texto:
          "La rueda sola no sirve de nada; lo difícil es el eje. Hace falta que el disco gire libre y sin bambolearse sobre una pieza fija que soporte todo el peso, con una holgura pequeña y constante, y eso exige herramientas de carpintería finas y madera dura de la que no abunda en cualquier sitio. Además necesita un terreno adecuado: en arena, en barro, en montaña o en selva, un carro es bastante peor que un animal de carga. Por eso hay culturas que la conocieron y la usaron poco, no por torpeza sino porque allí no compensaba.",
        destacado: { tipo: "frase", frase: "Lo difícil no es la rueda, es el eje que la sostiene." },
      },
      {
        rotulo: "Los juguetes",
        texto:
          "El caso más llamativo está en América. En yacimientos de México se han encontrado figuras de cerámica con forma de animal montadas sobre cuatro ruedecitas que giran de verdad, hechas siglos antes de la llegada de los europeos. Es decir, conocían perfectamente el principio y lo aplicaban. No lo llevaron al transporte porque no tenían ningún animal grande al que enganchar un carro: no había caballos, ni bueyes, ni burros, y la llama no aguanta arrastrando peso. Sin bestia de tiro, un carro cargado es un mueble que alguien tiene que empujar.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "ruedecitas en juguetes de cerámica" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquellas civilizaciones movieron piedras de decenas de toneladas y construyeron calzadas larguísimas sin usar una sola rueda, con troncos, cuerdas y muchísima gente organizada. Y en el resto del mundo tampoco se impuso sola: cuando el imperio romano se deshizo y las calzadas dejaron de mantenerse, buena parte del transporte volvió a los animales de carga durante siglos, porque sin firme un carro cargado se atasca. La rueda no es un invento que se adopta y ya está: necesita eje, madera dura, animal, camino y alguien que cuide el camino.",
      },
    ],
  },

  {
    id: "maleta-con-ruedas",
    titulo: "La maleta con ruedas tardó un siglo",
    gancho: "Había aviones, ordenadores y hombres en la Luna, y el equipaje se seguía cargando a pulso.",
    categoria: "Rueda",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una maleta rígida de los años setenta con cuatro ruedecitas y una correa.",
    entrada:
      "Estados Unidos, 1970. Un ejecutivo del sector del equipaje vuelve de un viaje cargando dos maletas pesadas por un aeropuerto y ve pasar a un operario empujando una máquina montada sobre una plataforma con ruedas. Se le ocurre la idea evidente y patenta ese mismo año una maleta con cuatro ruedecitas y una correa para tirar de ella.",
    paginas: [
      {
        rotulo: "El rechazo",
        texto:
          "Las tiendas no querían el producto. El argumento que le dieron una y otra vez fue que ningún hombre iba a comprar una maleta con ruedas, porque llevar el equipaje a pulso formaba parte de lo que se esperaba de él, y que para lo demás ya estaban los mozos de estación. Además, aquella primera maleta tiraba de una correa blanda y se tumbaba de lado con facilidad al girar, lo que tampoco ayudaba. Se vendió modestamente durante años y la patente caducó sin que nadie considerara que el asunto estuviera resuelto.",
        destacado: { tipo: "frase", frase: "Le dijeron que un hombre no compraría una maleta con ruedas." },
      },
      {
        rotulo: "El asa",
        texto:
          "El invento que funcionó llegó en 1987 y salió de un piloto de aerolínea harto de arrastrar su equipaje por las terminales. Cambió dos cosas: puso solo dos ruedas y en el canto, de modo que la maleta va inclinada y no vuelca al girar, y le montó un asa telescópica rígida que se saca y se guarda dentro del propio armazón. Con eso la maleta se guía como un carrito. Empezó vendiéndoselas a sus compañeros de tripulación en los hoteles, y los pasajeros que las veían por los pasillos preguntaban dónde se compraban.",
        destacado: { tipo: "cifra", cifra: "1987", unidad: "el año del asa telescópica" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Que la idea tardara tanto se ha convertido en el ejemplo favorito de los economistas cuando explican que la innovación no depende solo de la técnica: aquí no faltaba ningún material ni ningún conocimiento, faltaba que cambiaran las costumbres, que los aeropuertos se hicieran enormes y que desaparecieran los mozos. Las maletas de cuatro ruedas que giran en todas direcciones llegaron en 2004. Hoy no se fabrica prácticamente ninguna maleta de viaje sin ellas, y cargar el equipaje a pulso por una terminal de aeropuerto parece una escena de otra época.",
      },
    ],
  },

  {
    id: "rueda-hidraulica",
    titulo: "La primera máquina que sustituyó al músculo",
    gancho: "Una rueda metida en el río hacía el trabajo de cuarenta personas moliendo grano.",
    categoria: "Rueda",
    color: "var(--ochre)",
    encargo: "Una rueda de madera con paletas girando en la corriente de un canal de piedra.",
    entrada:
      "Mundo mediterráneo, siglo I antes de Cristo. Moler el grano de un día para una familia cuesta varias horas de trabajo con dos piedras, y en las ciudades grandes lo hacen esclavos o animales dando vueltas sin parar. Aparece entonces un montaje sencillo: una rueda con paletas metida en la corriente de un río, conectada a la piedra de moler.",
    paginas: [
      {
        rotulo: "El engranaje",
        texto:
          "El problema técnico no era la rueda sino el cambio de dirección: la rueda gira en vertical y la muela tiene que girar en horizontal. La solución fue un par de engranajes de madera montados en ángulo recto, uno de los mecanismos más importantes que se han inventado nunca, porque permite llevar el movimiento a donde haga falta y cambiarle de paso la velocidad. Con eso, un molino de tamaño medio molía en un día lo que costaba varias jornadas a un grupo entero de personas, y además trabajaba de noche y sin comer.",
        destacado: { tipo: "frase", frase: "La rueda gira en vertical y la muela en horizontal." },
      },
      {
        rotulo: "Las fábricas",
        texto:
          "Los romanos levantaron conjuntos impresionantes: en el sur de la actual Francia se conservan los restos de una instalación con dieciséis ruedas escalonadas en una ladera, alimentadas por un acueducto, capaces de moler harina para varios miles de personas al día. Después de ellos la idea no se perdió, sino que se extendió por toda Europa durante la Edad Media, y no solo para grano: se aplicó a batanes de tejidos, martillos de forja, sierras, fuelles de fundición y bombas de mina. Un registro inglés de 1086 contaba más de seis mil molinos.",
        destacado: { tipo: "cifra", cifra: "6.000", unidad: "molinos contados en Inglaterra en 1086" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquellas ruedas fueron durante casi dos mil años la única fuente de energía del mundo que no salía de un músculo o de una hoguera, y de ellas viene buena parte de la maquinaria posterior: los engranajes, los ejes de transmisión, las levas que convierten el giro en golpe. Las primeras fábricas textiles se instalaron junto a los ríos por este motivo y no por otro. Y la idea sigue viva de la manera más literal posible: una central hidroeléctrica es exactamente lo mismo, una rueda a la que el agua empuja.",
      },
    ],
  },
];
