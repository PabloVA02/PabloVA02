import type { Short } from "../shorts";

/* ==========================================================================
   Mapas.

   Un mapa es la única mentira que todo el mundo acepta sin discutir, porque
   la Tierra es curva y el papel no, y no hay manera de aplanar una esfera sin
   romper algo. Toda proyección elige qué estropear.

   La regla del tema: la historia empieza por lo que el mapa hace bien —para
   eso se diseñó— y solo después cuenta el precio. Mercator no es un error:
   es la única proyección donde una línea recta es un rumbo constante, y por
   eso los barcos la querían. Que Groenlandia salga enorme es la factura.

   Va bien con lo que no está: islas fantasma, meridianos que alguien votó,
   fronteras trazadas por gente que nunca pisó el sitio. El mapa como
   documento de quién mandaba cuando se dibujó.
   ========================================================================== */

export const MAPAS: Short[] = [
  {
    id: "groenlandia-mercator",
    titulo: "Groenlandia es pequeña",
    gancho: "En el mapa parecen iguales. África es catorce veces más grande.",
    categoria: "Mapas",
    color: "var(--sage)",
    curioso: true,
    encargo: "Un planisferio Mercator antiguo, papel amarillento, sin rótulos legibles.",
    fotos: [
      {
        archivo: "Mercator 1569 world map composite.jpg",
        autor: "El mapamundi que Gerardus Mercator publicó en Duisburgo en 1569, con sus dieciocho hojas montadas.",
        licencia: "Dominio público",
        pdPorEdad: 1594,
        fuente: "https://commons.wikimedia.org/wiki/File:Mercator_1569_world_map_composite.jpg",
        foco: "50% 45%",
        alt: "Un mapamundi grabado del siglo XVI, con las costas dibujadas a mano, rosas de los vientos y barcos entre los océanos.",
      },
      {
        archivo: "Sextant-MnM 11 NA 59-IMG 5971.JPG",
        autor: "Un sextante de latón, el instrumento para el que servían aquellos mapas. Fotografía de Rama, Museo Nacional de la Marina.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Sextant-MnM_11_NA_59-IMG_5971.JPG",
        foco: "50% 55%",
        alt: "Un sextante de latón con su arco graduado y sus espejos, iluminado sobre un fondo negro.",
      },
      {
        archivo: "Africa from low orbiting satellite Suomi NPP.jpg",
        autor: "África vista desde el satélite Suomi NPP, sin proyección de por medio. NASA y NOAA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Africa_from_low_orbiting_satellite_Suomi_NPP.jpg",
        foco: "50% 45%",
        alt: "La Tierra fotografiada desde el espacio, con África entera ocupando el centro del globo azul.",
      },
      {
        archivo: "South coast of Greenland 03.jpg",
        autor: "La costa sur de Groenlandia desde el aire. Fotografía de Hans Bernhard.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:South_coast_of_Greenland_03.jpg",
        foco: "50% 42%",
        alt: "Fiordos oscuros abriéndose entre montañas peladas, con el casquete de hielo asomando por detrás.",
      },
    ],
    entrada:
      "En el mapa que cuelga en casi todas las aulas del mundo, Groenlandia ocupa aproximadamente lo mismo que el continente africano entero, y a nadie le extraña porque es la imagen del planeta con la que hemos crecido. En la realidad, África mide unos treinta millones de kilómetros cuadrados y Groenlandia poco más de dos: cabe catorce veces. La diferencia no es un fallo de imprenta ni un descuido de nadie, sino el precio exacto que se pagó, a conciencia y por escrito, a cambio de un mapa que servía para cruzar un océano sin perderse.",
    paginas: [
      {
        rotulo: "El trato",
        texto:
          "Gerardus Mercator publicó su proyección en 1569 con un objetivo muy concreto: que un rumbo de brújula constante se dibujara como una línea recta. Para conseguirlo hay que estirar el mapa hacia los polos, y hay que estirarlo en las dos direcciones a la vez para que las formas locales no se deformen. El resultado es que cada país conserva su silueta reconocible y pierde por completo su tamaño relativo. El estiramiento crece según te alejas del ecuador y se vuelve infinito en los polos, razón por la cual en un Mercator la Antártida no cabe y se recorta.",
        destacado: { tipo: "cifra", cifra: "14x", unidad: "más grande es África que Groenlandia" },
      },
      {
        rotulo: "Quién sale ganando",
        texto:
          "Las consecuencias no se reparten igual. Los países ecuatoriales —casi toda África, Indonesia, Brasil, la India— salen pequeños; los del norte de Europa y Norteamérica salen inflados. Alaska parece del tamaño de Brasil y cabe cinco veces dentro. Ese sesgo se ha discutido mucho desde los años setenta, cuando el historiador Arno Peters lo denunció y promovió una proyección alternativa que respeta las áreas a costa de deformar las formas hasta lo desagradable. La discusión sigue abierta y no tiene solución limpia, porque no existe ningún mapa plano que conserve a la vez áreas, formas y distancias.",
        destacado: {
          tipo: "frase",
          frase: "No hay mapa honesto. Solo hay mapas que confiesan qué mienten.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "La ironía es que Mercator ganó la partida por un motivo que no tiene nada que ver con la geografía: los mapas web. Google Maps y casi todos los servicios de cartografía en línea usan una variante llamada Mercator esférico, porque conserva los ángulos y eso permite hacer zoom sin que las calles se tuerzan. Es decir: la proyección de un cartógrafo flamenco del siglo XVI, pensada para barcos de vela, es la que todo el planeta lleva en el bolsillo. Al ampliar sobre una ciudad las distorsiones desaparecen. El problema solo existe cuando se mira el mundo entero de una vez.",
      },
    ],
  },

  {
    id: "isla-sandy",
    titulo: "La isla que nunca existió",
    gancho: "Un barco australiano fue a verla en 2012 y encontró 1.400 metros de agua.",
    categoria: "Mapas",
    color: "var(--slate)",
    encargo: "Mar abierto sin costa a la vista, oleaje bajo, cielo cubierto.",
    fotos: [
      {
        archivo: "São Jorge (Madeira, Portugal), Ilhéu da Rocha das Vinhas -- 2025 -- 1436.jpg",
        autor: "Un islote solitario frente a la costa de São Jorge, en Madeira. Fotografía de Dietmar Rabich.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:S%C3%A3o_Jorge_(Madeira,_Portugal),_Ilh%C3%A9u_da_Rocha_das_Vinhas_--_2025_--_1436.jpg",
        foco: "50% 50%",
        alt: "Peñasco solitario cubierto de hierba en medio del mar azul, bajo un cielo con nubes blancas.",
      },
      {
        archivo: "Een schip in volle zee bij vliegende storm, bekend als ‘De windstoot’ Rijksmuseum SK-A-1848.jpeg",
        autor: "«La ráfaga», óleo de Willem van de Velde el Joven, hacia 1680. Rijksmuseum, Ámsterdam.",
        licencia: "Public domain",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Een_schip_in_volle_zee_bij_vliegende_storm,_bekend_als_%E2%80%98De_windstoot%E2%80%99_Rijksmuseum_SK-A-1848.jpeg",
        pdPorEdad: 1707,
        foco: "50% 60%",
        alt: "Pintura de un velero escorado por el viento entre olas grandes, bajo un cielo de tormenta.",
      },
      {
        archivo: "Deep-sea research vessel Pourquoi Pas? (Ifremer 00655-76753).jpg",
        autor: "El buque oceanográfico Pourquoi Pas?, dedicado a levantar mapas del fondo del mar. Ifremer.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Deep-sea_research_vessel_Pourquoi_Pas%3F_(Ifremer_00655-76753).jpg",
        foco: "50% 50%",
        alt: "Buque de investigación blanco y azul navegando en mar abierto, con grúas y antenas en cubierta.",
      },
      {
        archivo: "São Martinho (Madeira, Portugal), Miradouro do Lido -- 2025 -- 1951.jpg",
        autor: "El Atlántico visto desde el mirador do Lido, en Madeira. Fotografía de Dietmar Rabich.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:S%C3%A3o_Martinho_(Madeira,_Portugal),_Miradouro_do_Lido_--_2025_--_1951.jpg",
        foco: "50% 50%",
        alt: "Extensión de mar abierto sin costa a la vista, con el horizonte recto y el cielo despejado.",
      },
    ],
    entrada:
      "En noviembre de 2012, el buque oceanográfico australiano <em>Southern Surveyor</em> pasaba por el mar del Coral cuando la tripulación notó algo incómodo: sus cartas náuticas señalaban una isla grande justo delante, del tamaño de Manhattan, y el sonar decía que allí no había fondo hasta mil cuatrocientos metros. Pusieron rumbo hacia ella y navegaron tranquilamente por encima, sin ver nada más que agua. La isla llevaba dibujada en los mapas del mundo desde 1876, y seguía apareciendo aquel mismo año, tal cual, en los mapas digitales que usa hoy todo el planeta desde el móvil.",
    paginas: [
      {
        rotulo: "El origen",
        texto:
          "La primera anotación conocida la hizo un ballenero británico llamado <em>Velocity</em>, que en 1876 informó de arena y rompientes en aquel punto, entre Australia y Nueva Caledonia. El dato entró en el aviso a navegantes del Almirantazgo y de ahí saltó a las cartas. En cartografía, un error copiado es un error inmortal: nadie vuelve a comprobar lo que ya está impreso, y cada edición nueva se dibuja a partir de la anterior. Sandy Island sobrevivió a la llegada del avión, del satélite y de la cartografía digital, y acabó apareciendo como una mancha negra en Google Earth.",
        destacado: { tipo: "cifra", cifra: "1876", unidad: "el año en que se anotó por primera vez" },
      },
      {
        rotulo: "La comprobación",
        texto:
          "Los franceses, que administran Nueva Caledonia, la habían quitado de sus cartas hacía décadas: sus levantamientos no la encontraban. Pero las bases de datos internacionales seguían arrastrándola, y una isla que existe en un fichero existe en todos los mapas que beben de ese fichero. Lo que hizo el <em>Southern Surveyor</em> fue lo único que zanja estas cosas: ir, mirar y medir. Publicaron el resultado y las bases se corrigieron en semanas. Hay un nombre para esto en el oficio, <em>isla fantasma</em>, y no es raro: en el Pacífico y en el Ártico se han borrado decenas.",
        destacado: {
          tipo: "frase",
          frase: "Un error impreso no se corrige solo. Hay que ir hasta allí.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se especula con que el <em>Velocity</em> viera en realidad una balsa de piedra pómez, esas islas flotantes de roca volcánica ligera que sueltan las erupciones submarinas y que pueden llegar a medir kilómetros y durar meses. Vista desde la cubierta, una balsa así es indistinguible de tierra firme. Si es eso, la tripulación no se inventó nada: vio una isla, apuntó una isla, y la isla se marchó navegando. El caso se ha convertido en el ejemplo de manual de cómo un dato mal comprobado puede vivir siglo y medio dentro de la infraestructura que todos damos por buena.",
      },
    ],
  },

  {
    id: "meridiano-cero",
    titulo: "El meridiano cero se votó",
    gancho: "Ganó Greenwich por 22 votos a 1. París tardó 27 años en rendirse.",
    categoria: "Mapas",
    color: "var(--ochre)",
    encargo: "La línea del meridiano marcada en el suelo del observatorio de Greenwich.",
    entrada:
      "El ecuador no lo eligió nadie: está donde la Tierra gira más rápido y no hay discusión posible. El meridiano cero, en cambio, podía estar en cualquier sitio, porque en un planeta que gira no hay ningún punto especial de este a oeste. Así que hubo que decidirlo, y decidirlo significa una sala, unos delegados y una votación.",
    paginas: [
      {
        rotulo: "La votación",
        texto:
          "En octubre de 1884, veinticinco países se reunieron en Washington en la Conferencia Internacional del Meridiano. Cada nación marítima había usado el suyo: París, Cádiz, Nápoles, Filadelfia, la isla del Hierro. La propuesta de adoptar Greenwich salió adelante por <strong>22 votos a favor y uno en contra</strong> —Santo Domingo—, con dos abstenciones: Francia y Brasil. El argumento no fue el prestigio, fue la aritmética: en torno a dos tercios del tonelaje mercante del mundo navegaba ya con cartas británicas referidas a Greenwich, y rehacerlas todas costaba una fortuna que nadie quería pagar.",
        destacado: { tipo: "cifra", cifra: "22-1", unidad: "votos, con Francia absteniéndose" },
      },
      {
        rotulo: "El desaire",
        texto:
          "Francia no lo aceptó de inmediato. Siguió usando el meridiano de París en su cartografía y en su hora oficial durante casi tres décadas, y cuando por fin cedió, en 1911, lo hizo por la puerta de atrás: la ley no menciona Greenwich. Define la hora legal francesa como la hora media de París retrasada nueve minutos y veintiún segundos, que es exactamente la hora de Greenwich dicha sin pronunciar la palabra. Es probablemente la manera más elegante que existe de perder una discusión sin admitirlo por escrito, y aguantó así en el boletín oficial durante décadas.",
        destacado: {
          tipo: "frase",
          frase: "Aceptaron la hora de Greenwich sin escribir «Greenwich».",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hoy hay una rareza que descoloca a quien va de visita: si se planta uno sobre la línea de latón del observatorio con el móvil en la mano, el GPS no marca cero. Marca unos cien metros de diferencia. No es que el aparato falle ni que la línea esté mal trazada; es que el meridiano de referencia moderno se define respecto al centro de masas de la Tierra, medido por satélite, mientras que el de 1884 se fijó con un telescopio y una plomada, y la plomada se desvía un poco por el relieve del terreno. Dos ceros a cien metros el uno del otro.",
      },
    ],
  },
];
