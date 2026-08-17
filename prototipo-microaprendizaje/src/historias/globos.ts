import type { Short } from "../shorts";

/* ==========================================================================
   Globos.

   Una bolsa de tela llena de aire caliente o de gas parece un juguete, y por
   eso el tema se cuenta mal: se convierte en anécdota de feria. Aquí se
   cuenta al revés. El globo fue durante siglo y medio la única forma que
   tuvo el ser humano de salir del suelo, y todo lo que se hizo con él —correo,
   espionaje, bombas— se hizo porque no había otra cosa.

   La regla del tema: siempre se dice QUÉ SE JUGABAN los que subían o los que
   lo mandaban, porque un globo no se dirige: se suelta. Y siempre se explica
   de qué está hecho, porque la tela, el papel y el barniz son la historia.
   ========================================================================== */

export const GLOBOS: Short[] = [
  {
    id: "primeros-pasajeros-del-aire",
    titulo: "Primero voló una oveja",
    gancho: "Una oveja, un pato y un gallo subieron en cesta delante del rey. Nadie sabía si se podía respirar allí arriba.",
    categoria: "Globos",
    color: "var(--clay)",
    curioso: true,
    foto: {
      archivo: "Grafika przedstawiająca lot balonu Montgolfiera ze zwierzętami z 19 września 1783 roku.jpg",
      /* La estampa es de 1783 y sí es de dominio público, pero lo que se ve
         aquí es la digitalización que hizo el museo, y esa la publicó con su
         propia licencia. Manda la licencia del fichero que se usa. */
      autor:
        "Grabado del vuelo del globo de los hermanos Montgolfier del 19 de septiembre de 1783, con la oveja, el pato y el gallo. Museo Nacional de Cracovia.",
      licencia: "CC BY-SA 4.0",
      fuente:
        "https://commons.wikimedia.org/wiki/File:Grafika_przedstawiaj%C4%85ca_lot_balonu_Montgolfiera_ze_zwierz%C4%99tami_z_19_wrze%C5%9Bnia_1783_roku.jpg",
      foco: "50% 40%",
      alt: "Grabado del globo de 1783 elevándose con la cesta de los tres animales.",
    },
    encargo: "Una cesta de mimbre colgada de un globo de tela pintada, vista desde abajo contra el cielo.",
    fotos: [
      {
        archivo: "Grafika przedstawiająca lot balonu Montgolfiera ze zwierzętami z 19 września 1783 roku.jpg",
        autor:
          "Grabado del vuelo del globo de los hermanos Montgolfier del 19 de septiembre de 1783, con la oveja, el pato y el gallo. Museo Nacional de Cracovia.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Grafika_przedstawiaj%C4%85ca_lot_balonu_Montgolfiera_ze_zwierz%C4%99tami_z_19_wrze%C5%9Bnia_1783_roku.jpg",
        foco: "50% 40%",
        alt: "Grabado del globo de 1783 elevándose con la cesta de los tres animales.",
      },
      {
        archivo: "Flocking Back to the Hills of Cronan Ranch (28238246698).jpg",
        autor: "Un rebaño de ovejas subiendo por la ladera. Fotografía del Bureau of Land Management.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Flocking_Back_to_the_Hills_of_Cronan_Ranch_(28238246698).jpg",
        foco: "50% 55%",
        alt: "Muchas ovejas blancas apretadas subiendo una cuesta de hierba seca.",
      },
      {
        archivo: "Grande Montgolfière de Versailles enlevant un mouton, un coq et un canard.png",
        autor: "El globo de Versalles despegando ante la multitud, grabado publicado por Jules Turgan.",
        licencia: "Dominio público",
        pdPorEdad: 1887,
        fuente: "https://commons.wikimedia.org/wiki/File:Grande_Montgolfi%C3%A8re_de_Versailles_enlevant_un_mouton,_un_coq_et_un_canard.png",
        foco: "50% 38%",
        alt: "Grabado de un globo enorme decorado elevándose sobre un patio de palacio abarrotado de gente.",
      },
      {
        archivo: "Nevsehir Balloons.jpg",
        autor: "Globos aerostáticos al amanecer sobre Capadocia. Fotografía de Deved3218.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Nevsehir_Balloons.jpg",
        foco: "50% 45%",
        alt: "Decenas de globos de colores flotando a distintas alturas sobre un valle de roca clara.",
      },
    ],
    entrada:
      "Francia, 19 de septiembre de 1783. En el patio del palacio real, delante del rey, de la corte entera y de una multitud que los cronistas calculan en más de cien mil personas, dos hermanos fabricantes de papel han montado un globo de tela forrada con papel que se hincha con el humo de una hoguera de paja y lana mojada. Es azul, está pintado con adornos dorados y mide diecisiete metros de alto. Debajo, colgada de la boca, hay una cesta de mimbre con tres pasajeros dentro: una oveja, un pato y un gallo.",
    paginas: [
      {
        rotulo: "Por qué animales",
        texto:
          "La duda era seria y hoy cuesta imaginarla: nadie sabía si el aire de las alturas era respirable, ni si el cuerpo humano aguantaba estar suspendido sin apoyo. Así que se montó un experimento con controles, aunque entonces no se llamara así. La oveja iba porque su fisiología se parece bastante a la nuestra y podía hacer de sustituta del hombre. El pato iba porque vuela alto de forma natural y serviría para saber si algo iba mal con el aparato y no con la altura. Y el gallo iba porque es un ave que apenas se despega del suelo, de modo que cualquier daño en él apuntaría al aire y no al vuelo.",
        destacado: { tipo: "frase", frase: "La oveja subió porque su cuerpo se parecía al nuestro." },
      },
      {
        rotulo: "Ocho minutos",
        texto:
          "El globo se elevó unos quinientos metros, recorrió tres kilómetros empujado por el viento y bajó ocho minutos después en un bosque cercano, donde la cesta quedó enganchada entre las ramas. Los que llegaron corriendo encontraron a los tres animales vivos. El gallo tenía un ala dañada, y durante unos días eso alarmó a los médicos hasta que varios testigos declararon haberlo visto recibir una coz de la oveja antes de despegar. Dos meses más tarde, con la duda resuelta, dos hombres subieron en un globo parecido y volaron sobre los tejados de la capital durante veinticinco minutos.",
        destacado: { tipo: "cifra", cifra: "8", unidad: "minutos duró el primer vuelo con pasajeros" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La oveja terminó sus días en la casa de fieras del rey, con una pensión vitalicia de heno que hoy suena a chiste y entonces era un honor de corte. El vuelo abrió una década de fiebre por los globos en toda Europa: se hicieron ascensiones en todas las capitales, se cruzó el canal que separa Francia de Inglaterra dos años después y murió el primer aeronauta en 1785. Y quedó una idea que tardaría siglo y medio en cumplirse del todo: que para salir del suelo no hacía falta imitar a los pájaros, sino hacerse más ligero que el aire que nos rodea.",
      },
    ],
  },

  {
    id: "correo-en-globo",
    titulo: "El correo salió en globo",
    gancho: "Sesenta y seis globos salieron de la ciudad cercada. Las respuestas volvieron en palomas, fotografiadas en miniatura.",
    categoria: "Globos",
    color: "var(--slate)",
    encargo: "Un globo de tela clara elevándose entre tejados grises al amanecer.",
    fotos: [
      {
        archivo: "Hot air balloon IMGP0344a.jpg",
        autor: "Globo aerostático en vuelo. Fotografía de Alexey V. Kurochkin.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Hot_air_balloon_IMGP0344a.jpg",
        foco: "50% 45%",
        alt: "Globo aerostático de tela a cuadros rojos y negros flotando sobre un cielo azul limpio.",
      },
      {
        archivo: "Münster, Montgolfiade (an den Aaseewiesen) -- 2019 -- 9764.jpg",
        autor: "Varios globos en el aire durante una concentración en Münster. Fotografía de Dietmar Rabich.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:M%C3%BCnster,_Montgolfiade_(an_den_Aaseewiesen)_--_2019_--_9764.jpg",
        foco: "50% 45%",
        alt: "Cinco globos aerostáticos repartidos por un cielo con nubes altas.",
      },
      {
        archivo: "Colorful hot air balloon in flight (Unsplash).jpg",
        autor: "Globo aerostático visto desde abajo en pleno vuelo. Fotografía de Aaron Burden.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Colorful_hot_air_balloon_in_flight_(Unsplash).jpg",
        foco: "50% 50%",
        alt: "Globo de colores fotografiado desde debajo, con la boca abierta y la cesta colgando.",
      },
      {
        archivo: "Hot-air balloon in Tambov - 03.jpg",
        autor: "Globo aerostático elevándose al atardecer. Fotografía de Alexander Novikov.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Hot-air_balloon_in_Tambov_-_03.jpg",
        foco: "50% 50%",
        alt: "Globo hinchado despegando con la luz baja de la tarde detrás.",
      },
    ],
    entrada:
      "París, septiembre de 1870. El ejército prusiano cierra el cerco alrededor de la ciudad y corta las carreteras, el ferrocarril y hasta el cable del telégrafo que iba tendido por el lecho del río. Dos millones de personas quedan de un día para otro incomunicadas con el resto del país: no entra ni sale una carta, ni una orden, ni una noticia. Queda una sola vía abierta, la de arriba, y el gobierno decide usarla en serio y a lo grande, montando fábricas de globos en las estaciones de tren que se habían quedado vacías.",
    paginas: [
      {
        rotulo: "Fábricas en las estaciones",
        texto:
          "Las estaciones de tren, vacías porque ya no entraba ni salía ningún convoy, se convirtieron en talleres. Costureras contratadas por decenas cosían tiras de percal barnizado con aceite de linaza sobre el suelo de los andenes, y marineros sin barco trenzaban las redes y los cabos, que es un trabajo que conocían bien. Un globo salía cada pocos días, casi siempre de noche y a favor del viento del este, con un piloto improvisado, un saco de arena por lastre y hasta cien kilos de sacas de correo. En cuatro meses volaron sesenta y seis, con dos millones y medio de cartas.",
        destacado: { tipo: "cifra", cifra: "66", unidad: "globos salieron de la ciudad cercada" },
      },
      {
        rotulo: "La respuesta en paloma",
        texto:
          "El problema era la vuelta: un globo no se dirige, así que no podía volver. La solución fue mandar palomas mensajeras en los globos que salían y devolverlas cargadas de correo. Como una paloma apenas puede llevar un gramo, se inventó un sistema asombroso: las cartas de respuesta se escribían muy juntas en grandes hojas, se fotografiaban reduciéndolas hasta el tamaño de un sello y la película finísima se enrollaba en un canuto atado a una pluma de la cola. Ya en la ciudad, se proyectaban con una linterna sobre una pared y varios copistas las transcribían a mano.",
        destacado: { tipo: "frase", frase: "Una paloma llevaba miles de cartas fotografiadas en una película." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No todos llegaron. Cinco globos cayeron en manos enemigas, dos se perdieron en el mar y uno acabó, empujado por una tormenta, en un bosque nevado de Noruega a más de mil kilómetros de donde había despegado. Aun así el correo funcionó, y la ciudad cercada mantuvo el contacto con el país hasta la rendición de enero de 1871. Aquellos vuelos se estudian hoy como el primer servicio postal aéreo de la historia y sus cartas, con el sello de salida, son piezas de museo. Todo salió por la única puerta que no se puede cerrar con un ejército: el aire de encima de la ciudad.",
      },
    ],
  },

  {
    id: "globos-bomba",
    titulo: "Bombas de papel",
    gancho: "Nueve mil globos de papel de morera cruzaron el Pacífico solos, empujados por una corriente de aire que nadie más conocía.",
    categoria: "Globos",
    color: "var(--plum)",
    encargo: "Un globo pálido de papel sobre un cielo vacío de invierno, muy pequeño en el encuadre.",
    entrada:
      "Japón, noviembre de 1944. El país ya no tiene aviones capaces de llegar hasta la costa americana ni portaaviones desde los que lanzarlos, y la guerra se le está poniendo muy cuesta arriba. Pero sus meteorólogos llevan años midiendo algo que en el resto del mundo casi nadie ha estudiado todavía: a diez kilómetros de altura sopla en invierno un río de aire hacia el este a más de doscientos kilómetros por hora. Alguien propone entonces una idea que suena a locura: meter bombas dentro de ese río. Fue el primer arma intercontinental de la historia, y era de papel.",
    paginas: [
      {
        rotulo: "Papel y algas",
        texto:
          "El aparato era de una sencillez desconcertante. La esfera, de diez metros de diámetro, se hacía con hojas de papel de morera pegadas en varias capas con una pasta hecha de algas, un trabajo minucioso que acabaron haciendo miles de escolares en gimnasios y salas de teatro. Debajo colgaba un anillo con la carga explosiva, sacos de arena y un mecanismo de altímetro: si el globo bajaba demasiado, soltaba arena y volvía a subir; si subía de más, dejaba escapar gas. Con eso se mantenía dentro de la corriente los tres días que tardaba en cruzar el océano.",
        destacado: { tipo: "cifra", cifra: "10.000", unidad: "kilómetros recorría cada globo, solo" },
      },
      {
        rotulo: "El silencio",
        texto:
          "Llegaron unos mil, repartidos por medio continente, y provocaron incendios menores y mucho desconcierto. La respuesta del gobierno americano fue insólita y muy eficaz: pidió a los periódicos y a las emisoras que no dijeran ni una palabra. Sin noticias, los responsables japoneses no tenían forma de saber si sus globos habían llegado a alguna parte, y la campaña les pareció un fracaso costosísimo. La cancelaron en abril de 1945. El precio del silencio, sin embargo, fue que la población tampoco sabía que existía el peligro ni qué aspecto tenía aquello si aparecía en el campo.",
        destacado: { tipo: "frase", frase: "Nadie publicó nada, y por eso creyeron que no llegaba ninguno." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En mayo de 1945, una mujer embarazada y cinco niños de una excursión parroquial encontraron uno caído en un bosque del oeste del país, tiraron de él y murieron los seis: fueron las únicas víctimas de acción enemiga en el territorio continental americano durante toda la guerra. Después de aquello se levantó la censura y se avisó a la población. Todavía hoy aparece algún resto en zonas remotas, y se pide que no se toque. Aquella corriente de aire que solo conocían unos meteorólogos se llama hoy corriente en chorro, la usan a diario los aviones de línea para ahorrar combustible y aparece en cualquier parte del tiempo.",
      },
    ],
  },
];
