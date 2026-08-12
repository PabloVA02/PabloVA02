import type { Short } from "../shorts";

/* ==========================================================================
   Los relojes de sol.

   Parecen un adorno de jardín y son un instrumento astronómico que hay que
   fabricar a medida para el sitio donde va a estar. El tema se estropea si se
   convierte en una explicación de geometría: hay que contarlo con la sombra.

   La regla del tema: cada short parte de algo que el lector puede comprobar
   mirando una sombra —que se alarga, que gira, que no marca lo mismo en
   verano— y termina en una consecuencia práctica. Y siempre se dice que el
   sol no miente pero tampoco coincide con el reloj de pulsera.
   ========================================================================== */

export const RELOJES_DE_SOL: Short[] = [
  {
    id: "horas-desiguales",
    titulo: "Horas desiguales",
    gancho: "El día de luz se partía en doce, así que una hora de verano duraba setenta y cinco minutos y una de invierno, cuarenta y cinco.",
    categoria: "Relojes de sol",
    color: "var(--ochre)",
    curioso: true,
    encargo: "La sombra de una varilla sobre una piedra tallada con líneas radiales.",
    fotos: [
      {
        archivo: "Cadran solaire Louvre Ma 5074 n1.jpg",
        autor: "Reloj de sol romano de mármol, con el cuenco tallado de líneas rectas y curvas. Museo del Louvre, París. Fotografía de Coyau.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cadran_solaire_Louvre_Ma_5074_n1.jpg",
        foco: "50% 48%",
        alt: "Un cuenco de mármol claro con dos asas talladas, grabado por dentro con líneas rectas que salen del centro y arcos que las cruzan.",
      },
      {
        archivo: "Meridiana con quadrante concavo, II sec. d.C. -FG.jpg",
        autor: "Reloj de sol cóncavo del siglo II, hallado en Ostia, junto a la Puerta Romana. Museos Vaticanos. Fotografía de Fabrizio Garrisi.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Meridiana_con_quadrante_concavo,_II_sec._d.C._-FG.jpg",
        foco: "50% 50%",
        alt: "Un bloque de mármol vaciado en forma de media esfera, con las líneas de las horas grabadas en el hueco.",
      },
      {
        archivo: "Meridiana con le teste di elio, atena e dioniso, da atene, I sec dc ca. 03.JPG",
        autor: "Reloj de sol ateniense del siglo I, decorado con las cabezas de Helios, Atenea y Dioniso. Antikensammlung, Berlín. Fotografía de Sailko.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Meridiana_con_le_teste_di_elio,_atena_e_dioniso,_da_atene,_I_sec_dc_ca._03.JPG",
        foco: "50% 50%",
        alt: "Una pieza de mármol tallada con tres rostros en relieve bajo un cuadrante hundido lleno de líneas grabadas.",
      },
      {
        archivo: "20191218 Nadivalaya Yantra, Jantar Mantar, Jaipur, 0926 9023.jpg",
        autor: "El Nadivalaya Yantra del observatorio Jantar Mantar de Jaipur, construido en el siglo XVIII. Fotografía de Jakub Hałun.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:20191218_Nadivalaya_Yantra,_Jantar_Mantar,_Jaipur,_0926_9023.jpg",
        foco: "50% 50%",
        alt: "Un gran disco de piedra inclinado, con las horas marcadas alrededor y una varilla saliendo del centro.",
      },
    ],
    entrada:
      "Mediterráneo, siglos IV antes de Cristo a XIV después. Durante casi dos mil años, la forma normal de contar el tiempo no fue en absoluto la nuestra. Se tomaba el rato que hay entre que sale el sol y se pone, se dividía en doce partes iguales y a cada parte se le llamaba hora. Como el día de luz dura mucho más en junio que en diciembre, esas horas se estiraban y se encogían con las estaciones sin que nadie lo considerase un problema. Nadie tenía por qué notarlo, porque no existía ningún aparato capaz de medir nada más corto.",
    paginas: [
      {
        rotulo: "La hora elástica",
        texto:
          "En una ciudad del sur de Europa, una hora de un día de junio duraba unos setenta y cinco minutos de los nuestros y una de diciembre, unos cuarenta y cinco. La sexta hora caía siempre en mitad de la jornada, la primera al amanecer y la duodécima al anochecer, así que el sistema tenía una ventaja enorme para una sociedad sin luz artificial: las horas se ajustaban solas a la jornada de trabajo. Nadie necesitaba saber cuántos minutos duraba una hora, porque no había nada que medir en minutos y no existía ningún aparato capaz de hacerlo.",
        destacado: { tipo: "cifra", cifra: "75", unidad: "minutos duraba una hora de verano" },
      },
      {
        rotulo: "Las líneas curvas",
        texto:
          "Esto explica una rareza de los relojes de sol antiguos que hoy desconcierta: además de las líneas rectas que salen del centro, muchos llevan grabadas unas curvas cruzadas que parecen decoración. No lo son. Cada curva corresponde a una época del año, y la punta de la sombra la recorre a lo largo del día, de modo que el reloj marca la hora correcta en cada estación pese a que las horas cambien de duración. Tallar aquellas piedras exigía saber geometría y conocer la latitud del sitio, y era trabajo de matemáticos, no de canteros.",
        destacado: { tipo: "frase", frase: "Las curvas del reloj no son adorno: son las estaciones." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La hora fija de sesenta minutos se impuso con los relojes mecánicos de las torres, a partir del siglo XIV, sencillamente porque una máquina de pesas y engranajes no sabe alargar y encoger sus horas según la época del año. La ciudad tuvo que adaptarse al aparato, y no al revés. Quedaron los nombres del rezo monástico —prima, tercia, sexta, nona—, que eran aquellas horas elásticas y que siguen sonando en algunas iglesias, y quedó una palabra que usamos sin pensar: siesta viene de la sexta hora, la del centro del día, la del calor.",
      },
    ],
  },

  {
    id: "el-canon-de-mediodia",
    titulo: "El cañón del mediodía",
    gancho: "Una lupa concentraba el sol sobre la pólvora justo a mediodía. El estruendo ponía en hora a la ciudad entera.",
    categoria: "Relojes de sol",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un cañoncito de latón sobre un pedestal de piedra con una lupa montada encima.",
    fotos: [
      {
        archivo: "Noon cannon-OA 10762-IMG 4322.JPG",
        autor: "Cañón de mediodía de latón sobre base de mármol, con su lente montada en el arco.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File%3ANoon%20cannon-OA%2010762-IMG%204322.JPG",
        foco: "50% 52%",
        alt: "Aparato de latón sobre una peana negra, con un arco graduado, una lupa y un cañoncito apuntando de lado.",
      },
      {
        archivo: "Noon cannon-IMG 2162-black.jpg",
        autor: "Otro cañón solar, fotografiado sobre fondo negro para que se vea el mecanismo entero.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File%3ANoon%20cannon-IMG%202162-black.jpg",
        foco: "50% 50%",
        alt: "Instrumento de latón con lente y cañón diminuto recortado sobre un fondo completamente negro.",
      },
      {
        archivo: "Sintra, Palácio Nacional da Pena, relógio de sol.jpg",
        autor: "El reloj de sol con cañón del Palacio da Pena, en Sintra, todavía en su terraza.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ASintra%2C%20Pal%C3%A1cio%20Nacional%20da%20Pena%2C%20rel%C3%B3gio%20de%20sol.jpg",
        foco: "50% 50%",
        alt: "Reloj de sol de piedra al aire libre con un cañoncito encima, sobre la muralla de un palacio.",
      },
      {
        archivo: "Sundial cannon clock 1.JPG",
        autor: "Cañón solar conservado en un museo, con la lupa sobre el brazo giratorio.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ASundial%20cannon%20clock%201.JPG",
        foco: "50% 50%",
        alt: "Reloj de sol de metal con esfera grabada, brazo con lente y un cañón pequeño montado en el centro.",
      },
    ],
    entrada:
      "París, 1786. En los jardines de un palacio se instala un artefacto que en pocos años se convierte en costumbre de la ciudad: un cañón en miniatura montado sobre una base de mármol, con una lente de aumento orientada al sur y colocada con tanto cuidado que, en el instante exacto del mediodía solar y solo en ese instante, el punto de luz cae sobre el oído del cañón y prende la pólvora. Suena el disparo y la gente que lo oye saca su reloj y lo pone en hora. Es un reloj de sol que, en vez de mirarse, se oye.",
    paginas: [
      {
        rotulo: "El punto de luz",
        texto:
          "El mecanismo no tiene ninguna pieza móvil que no sea la lupa. Cuando el sol cruza el punto más alto de su recorrido, sus rayos pasan por la lente y se concentran en un punto minúsculo del tamaño de una cabeza de alfiler, con calor suficiente para prender la pólvora del cebo. Suena el disparo y toda la gente que está a un kilómetro a la redonda saca su reloj y lo ajusta. El encargado tenía que cargar el cañón cada mañana y, sobre todo, girar la lente unos grados cada pocos días, porque el sol cambia de altura con las estaciones.",
        destacado: { tipo: "frase", frase: "Sin sol no había disparo, y la ciudad se quedaba sin hora." },
      },
      {
        rotulo: "La ciudad en hora",
        texto:
          "El invento se copió en jardines y plazas de media Europa durante el siglo XIX, y en algunas ciudades el disparo del mediodía se convirtió en una institución con la que la gente organizaba el día. Tenía un defecto evidente y otro escondido. El evidente: los días nublados no sonaba nada. El escondido es más interesante: el mediodía solar no coincide con las doce del reloj salvo en cuatro días al año, porque la Tierra no gira alrededor del sol a velocidad constante y su eje está inclinado, así que el sol se adelanta o se atrasa hasta dieciséis minutos según la época.",
        destacado: { tipo: "cifra", cifra: "16", unidad: "minutos se adelanta o atrasa el sol" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel cañón de jardín siguió disparando de forma intermitente hasta 1911, cuando la hora oficial pasó a distribuirse por telégrafo y después por radio desde un observatorio, y ya no hizo falta mirar al cielo para saber qué hora era. Alguno se ha restaurado y vuelve a sonar los miércoles para los turistas. Quedó una idea que cuesta recuperar hoy: durante siglos, poner en hora un reloj significó esperar a que ocurriera algo en el cielo o escuchar una señal pública, y la hora era un bien común que alguien tenía que fabricar cada día.",
      },
    ],
  },

  {
    id: "reloj-que-solo-sirve-aqui",
    titulo: "Solo sirve donde se hizo",
    gancho: "Si lo compras de recuerdo y lo pones en el jardín de tu casa, casi seguro que marca mal.",
    categoria: "Relojes de sol",
    color: "var(--slate)",
    encargo: "Un reloj de sol de bronce con la varilla inclinada, sobre un pedestal en un jardín.",
    entrada:
      "Cualquier jardín, hoy. Los relojes de sol que se venden como adorno repiten un diseño que apenas ha cambiado desde el siglo III antes de Cristo: una varilla inclinada, llamada gnomon, y una esfera con las horas alrededor. Parece que baste con orientarlo al norte para que funcione en cualquier sitio. No es así: está calculado para una latitud concreta, y fuera de ella se equivoca más cuanto más lejos.",
    paginas: [
      {
        rotulo: "La varilla apunta arriba",
        texto:
          "La clave está en la inclinación de la varilla, que no es decorativa. Para que la sombra gire de forma regular, el gnomon tiene que ser paralelo al eje de rotación de la Tierra, es decir, apuntar al polo. Y eso significa que el ángulo con el que se levanta sobre la esfera debe ser exactamente igual a la latitud del lugar: unos cuarenta grados en el centro de España, cincuenta y uno en Londres, veinte en el trópico. Un reloj fabricado para un sitio y colocado en otro reparte mal las horas y falla más cuanto más lejos esté del que le corresponde.",
        destacado: { tipo: "cifra", cifra: "40", unidad: "grados de inclinación para el centro de España" },
      },
      {
        rotulo: "El huso horario",
        texto:
          "Aunque esté bien construido y bien orientado, un reloj de sol sigue sin coincidir con el de la muñeca por dos motivos más. El primero es el huso horario: dentro de un mismo país todos los relojes marcan lo mismo, pero el sol llega antes a la costa este que a la oeste, y esa diferencia puede pasar de media hora. El segundo es el adelanto del horario de verano, que suma otra hora entera de golpe. Sumando todo, un reloj de sol perfecto puede diferir en más de hora y media del móvil, sin estar equivocado.",
        destacado: { tipo: "frase", frase: "Puede diferir hora y media del móvil sin estar mal." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedan miles de relojes de sol en fachadas de iglesias, claustros y plazas, muchos con una inscripción sobre lo que dura la vida, y quedan también los que están mal desde el día que se pusieron, comprados en otro sitio o colocados en la pared que quedaba bien. Distinguirlos es fácil y es un buen juego: se mide el ángulo de la varilla y se compara con la latitud del pueblo. Si coincide, alguien hizo el trabajo. Si no, es un adorno con números, y la sombra que proyecta no significa absolutamente nada.",
      },
    ],
  },
];
