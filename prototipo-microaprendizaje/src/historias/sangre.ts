import type { Short } from "../shorts";

/* ==========================================================================
   Sangre.

   El riesgo del tema es el efectismo: litros, quirófanos, urgencias. Y el
   riesgo contrario es la clase de biología con hematíes y plaquetas.

   La regla del tema: la sangre se cuenta como LOGÍSTICA. Quién la dona,
   cómo se transporta, cuánto aguanta, quién la paga y quién decide si es
   compatible. Todo lo que ha cambiado en dos siglos tiene que ver con
   organizar el suministro, no con la medicina de la mesa de operaciones.

   Y siempre se dice qué pasaba antes de saberlo, que es lo que asusta.
   ========================================================================== */

export const SANGRE: Short[] = [
  {
    id: "grupos-sanguineos",
    titulo: "La transfusión era lotería",
    gancho: "Unas salvaban al enfermo y otras lo mataban en minutos, y nadie sabía distinguir cuál sería.",
    categoria: "Sangre",
    color: "var(--clay)",
    encargo: "Placas de vidrio con gotas de sangre y unas pipetas al lado.",
    fotos: [
      {
        archivo: "Red Blood Cells.jpg",
        autor: "Glóbulos rojos humanos vistos al microscopio. Fotografía de Vijayanrajapuram.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Red_Blood_Cells.jpg",
        foco: "50% 50%",
        alt: "Un círculo claro visto por el microscopio, lleno de discos rosados apiñados sobre fondo negro.",
      },
      {
        archivo: "Frog`s red blood cells under a microscope.jpg",
        autor: "Glóbulos rojos de rana, que a diferencia de los humanos conservan su núcleo. Fotografía de Yana Balakhonova.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Frog%60s_red_blood_cells_under_a_microscope.jpg",
        foco: "50% 50%",
        alt: "Células ovaladas de color claro con un punto oscuro en el centro, repartidas por el campo del microscopio.",
      },
      {
        archivo: "Blood transfusion Wellcome L0024143.jpg",
        autor: "Material de transfusión de sangre del ejército británico, entre 1939 y 1945. Wellcome Collection.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Blood_transfusion_Wellcome_L0024143.jpg",
        foco: "50% 50%",
        alt: "Frascos, tubos de goma y soportes de un equipo de transfusión de campaña, en una fotografía antigua.",
      },
      {
        archivo: "Centro de Transfusión de la Comunidad de Madrid.jpg",
        autor: "El Centro de Transfusión de la Comunidad de Madrid. Fotografía de Tiia Monto.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Centro_de_Transfusi%C3%B3n_de_la_Comunidad_de_Madrid.jpg",
        foco: "50% 50%",
        alt: "Un edificio moderno y alargado de ladrillo y cristal, con el aparcamiento delante.",
      },
    ],
    entrada:
      "Viena, 1901. Un médico de treinta y tres años se pone a mezclar en placas de vidrio la sangre de sus compañeros de laboratorio, la de su ayudante y la suya propia, combinándolas de todas las maneras posibles y anotando qué pasa en cada caso. El resultado no es sutil ni hace falta microscopio para verlo: en algunas mezclas los glóbulos rojos se apelotonan formando grumos visibles a simple vista, y en otras no ocurre absolutamente nada. Tiene delante el motivo por el que las transfusiones mataban a la mitad de la gente.",
    paginas: [
      {
        rotulo: "Los grupos",
        texto:
          "De aquellas mezclas salió la clasificación que seguimos usando: unos grupos son compatibles y otros no, según unas moléculas que están en la superficie del glóbulo rojo y que el sistema inmunitario de otra persona puede reconocer como ajenas y atacar. Cuando eso pasa, los glóbulos se destruyen dentro de los vasos, los riñones se bloquean y el paciente puede morir en unas horas. Con tres grupos identificados primero y un cuarto poco después, de pronto se podía saber por adelantado si una transfusión iba a funcionar o iba a matar.",
        destacado: { tipo: "frase", frase: "Los glóbulos se apelotonaban en la placa a simple vista." },
      },
      {
        rotulo: "Antes de saberlo",
        texto:
          "Lo anterior había sido un desastre. En el siglo XVII se probaron transfusiones de sangre de cordero y de ternera a personas, con la idea de que el carácter manso del animal pasaría al enfermo; hubo muertos, un juicio sonado y la práctica quedó prohibida durante siglo y medio en varios países. En el siglo XIX se volvió a la sangre humana, y los resultados eran erráticos por razones que nadie entendía: el mismo procedimiento salvaba a un paciente y mataba al siguiente. Se llegó a desaconsejar por completo en los manuales de cirugía.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "grupos, y todo encajó de golpe" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El descubrimiento tardó en aplicarse, y el premio Nobel le llegó a su autor treinta años después, en 1930, cuando la práctica ya estaba extendida por todas partes. Hoy la compatibilidad se comprueba de forma rutinaria antes de cualquier transfusión, y además se hace una prueba cruzada mezclando las dos sangres concretas, porque existen muchos más grupos menores que pueden dar problemas. Aquella tarde de placas de vidrio en un laboratorio de Viena convirtió un procedimiento que era poco más que una apuesta en uno de los tratamientos más seguros y más habituales de la medicina moderna.",
      },
    ],
  },

  {
    id: "primer-banco-de-sangre",
    titulo: "Sangre en la guerra",
    gancho: "En Barcelona, en 1936: se recogía, se clasificaba, se guardaba en frío y salía al frente en camión.",
    categoria: "Sangre",
    color: "var(--slate)",
    encargo: "Frascos de vidrio etiquetados en una estantería de una cámara fría.",
    fotos: [
      {
        archivo: "Donating platelets at Swedish blood donation center April 2025.jpg",
        autor: "Donación en un centro de transfusión sueco, con los tubos de muestra en la bandeja.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADonating%20platelets%20at%20Swedish%20blood%20donation%20center%20April%202025.jpg",
        foco: "50% 58%",
        alt: "Brazo extendido con la aguja puesta y el tubo lleno de sangre subiendo hacia la máquina.",
      },
      {
        archivo: "Dr Norman Bethune Statue.jpg",
        autor: "Estatua de Norman Bethune, el cirujano que montó un servicio móvil de transfusión en la Guerra Civil española.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADr%20Norman%20Bethune%20Statue.jpg",
        foco: "48% 42%",
        alt: "Estatua de bronce de un médico sentado con bata y estetoscopio, en un parque nevado.",
      },
      {
        archivo: "2024-02-20 Blood donation in Stadthalle Tauberbischofsheim 30.jpg",
        autor: "Jornada de donación de sangre en el pabellón municipal de Tauberbischofsheim, en Alemania.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3A2024-02-20%20Blood%20donation%20in%20Stadthalle%20Tauberbischofsheim%2030.jpg",
        foco: "50% 50%",
        alt: "Camillas alineadas en una sala grande con donantes tumbados y personal sanitario alrededor.",
      },
      {
        archivo: "PACOM Armed Services Blood Bank Center opens new facility 150318-M-TA471-137.jpg",
        autor: "Un técnico retira la aguja a un donante en un banco de sangre militar en Okinawa, 2015.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3APACOM%20Armed%20Services%20Blood%20Bank%20Center%20opens%20new%20facility%20150318-M-TA471-137.jpg",
        foco: "50% 50%",
        alt: "Sanitario con guantes atendiendo a un donante tumbado en una sala de extracción.",
      },
    ],
    entrada:
      "Barcelona, agosto de 1936. Un médico de poco más de treinta años propone al gobierno catalán algo que no existe en ninguna parte del mundo: un servicio que recoja sangre de donantes civiles en la ciudad, la analice, la conserve y la lleve hasta los hospitales de campaña del frente, a cientos de kilómetros. Se lo aprueban en unos pocos días.",
    paginas: [
      {
        rotulo: "El procedimiento",
        texto:
          "Hasta entonces la transfusión se hacía de brazo a brazo, con el donante tumbado al lado del herido, lo cual resulta imposible en una guerra con frentes que se mueven. El sistema que montó consistía en extraer la sangre, mezclarla con citrato para que no coagulara, filtrarla, agruparla por tipos en frascos de vidrio esterilizados y conservarla en cámaras frías a unos dos grados. Los frascos viajaban en camionetas con neveras improvisadas y aguantaban hasta dieciocho días, lo que permitía tener existencias en vez de depender de un donante disponible.",
        destacado: { tipo: "cifra", cifra: "18", unidad: "días aguantaba un frasco refrigerado" },
      },
      {
        rotulo: "Los donantes",
        texto:
          "El otro problema era conseguir la sangre, y ahí la campaña fue masiva: carteles por toda la ciudad, llamamientos por radio y colas en los puntos de recogida, con un carné de donante y una cartilla de racionamiento algo mejor como compensación. Se llegaron a registrar decenas de miles de donantes y se enviaron miles de litros al frente. Un médico canadiense que trabajaba en el otro extremo del país montó un servicio parecido de transfusión móvil casi al mismo tiempo, y los dos sistemas se estudiaron con enorme interés desde fuera.",
        destacado: { tipo: "frase", frase: "Carné de donante y una cartilla de racionamiento algo mejor." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Al acabar la guerra, aquel médico se exilió a Inglaterra, donde el sistema se copió de inmediato para preparar los bombardeos que se veían venir; el país entero tenía bancos de sangre organizados antes de que empezara la siguiente guerra, y de ahí salió el modelo que después se extendió por el mundo. Él no volvió a España y trabajó como investigador el resto de su vida. El servicio de donación al que cualquiera puede acercarse hoy un martes por la tarde funciona, en lo esencial, igual que aquellas camionetas.",
      },
    ],
  },

  {
    id: "sangre-de-cangrejo",
    titulo: "Sangre azul de cangrejo",
    gancho: "Detecta contaminación bacteriana en cantidades minúsculas y no se ha encontrado nada mejor.",
    categoria: "Sangre",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un cangrejo cacerola con caparazón en forma de casco sobre arena mojada.",
    entrada:
      "Costa este de Estados Unidos, 1956. Un investigador descubre que la sangre de una especie de cangrejo marino con forma de casco, un animal que lleva en el mar cuatrocientos cincuenta millones de años, coagula de forma inmediata al entrar en contacto con ciertas bacterias. Aquella reacción se convertirá en la prueba de seguridad más usada de la industria farmacéutica.",
    paginas: [
      {
        rotulo: "El coágulo",
        texto:
          "Estos animales no tienen glóbulos blancos como nosotros: se defienden con unas células que, al detectar restos de la pared de ciertas bacterias, forman un gel espeso alrededor del intruso y lo inmovilizan en el sitio. La reacción es tan sensible que detecta cantidades del orden de una parte por billón, lo que la convierte en un detector ideal. Su sangre además es azul, porque transporta el oxígeno con cobre en lugar de hierro. Desde los años setenta esa prueba es obligatoria para vacunas, sueros, prótesis y todo lo que entra en el cuerpo.",
        destacado: { tipo: "frase", frase: "Su sangre es azul porque lleva cobre en lugar de hierro." },
      },
      {
        rotulo: "La extracción",
        texto:
          "Cada año se capturan cientos de miles de ejemplares, se les extrae alrededor de un tercio de la sangre pinchándolos junto al corazón y se devuelven vivos al mar. Una parte muere en el proceso y las estimaciones varían mucho, entre el cinco y el treinta por ciento, y las hembras que sobreviven parecen desovar menos durante un tiempo. El litro de ese reactivo se ha llegado a pagar por encima de los diez mil euros, lo que convierte a un animal de playa en una de las fuentes biológicas más caras del planeta.",
        destacado: { tipo: "cifra", cifra: "10.000", unidad: "euros el litro de reactivo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Existe desde hace años una alternativa sintética que hace lo mismo sin tocar a ningún animal, obtenida a partir del gen que fabrica esa proteína, y va ganando terreno despacio porque cambiar un procedimiento ya aprobado por las autoridades sanitarias lleva su tiempo y su papeleo. Europa la admite ya en igualdad de condiciones. Mientras tanto, las poblaciones de aquel cangrejo han bajado y con ellas las de varias aves migratorias que se alimentan de sus huevos. Casi todas las vacunas que nos hemos puesto pasaron antes por una gota de sangre azul.",
      },
    ],
  },
];
