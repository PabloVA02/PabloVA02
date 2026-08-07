import type { Short } from "../shorts";

/* ==========================================================================
   Túneles.

   El riesgo del tema es la ficha de obra pública: longitudes, plazos,
   presupuestos. Cifras que se olvidan al pasar de pantalla.

   La regla del tema: un túnel se cuenta por LO QUE HAY QUE SUJETAR
   MIENTRAS SE EXCAVA. Arena empapada que se derrumba, un río encima, dos
   kilómetros de montaña presionando, roca a cuarenta y cinco grados. Todo
   lo demás —el escudo, la tuneladora, el hormigón— existe para resolver
   eso mismo.

   Y siempre se dice qué pasaba cuando fallaba, con nombres y con fechas.
   ========================================================================== */

export const TUNELES: Short[] = [
  {
    id: "tunel-bajo-el-rio",
    titulo: "Un molusco hizo el túnel",
    gancho: "Un gusano que perfora la madera de los barcos y va revistiendo el agujero por detrás.",
    categoria: "Túneles",
    color: "var(--slate)",
    encargo: "Un armazón de hierro con casillas dentro de una galería de ladrillo.",
    fotos: [
      {
        archivo: "Meyers Universum Band 06 35.jpg",
        autor: "El túnel del Támesis abierto al público, grabado de Meyer's Universum, 1839.",
        licencia: "Dominio público",
        pdPorEdad: 1839,
        fuente: "https://commons.wikimedia.org/wiki/File:Meyers_Universum_Band_06_35.jpg",
        foco: "50% 45%",
        alt: "Grabado de la galería doble del túnel, con arcos de ladrillo, farolas de gas y paseantes con sombrero de copa.",
      },
      {
        archivo: "Original brickwork.jpg",
        autor: "El ladrillo original del túnel, montado detrás del escudo hace ciento noventa años. Fotografía de Lars Plougmann, 2010.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Original_brickwork.jpg",
        foco: "50% 35%",
        alt: "Arcos de ladrillo ennegrecido bajo tierra, con un paso abierto entre las dos galerías.",
      },
      {
        archivo: "Old Limehouse RMG PW0712.tiff",
        autor: "El Támesis a la altura de Limehouse, aguafuerte de William Lionel Wyllie, hacia 1920.",
        licencia: "Dominio público",
        pdPorEdad: 1931,
        fuente: "https://commons.wikimedia.org/wiki/File:Old_Limehouse_RMG_PW0712.tiff",
        foco: "50% 55%",
        alt: "Aguafuerte del río con gabarras, mástiles y remolcadores amarrados junto a los muelles.",
      },
      {
        archivo: "Thames Tunnel walk.jpg",
        autor: "El mismo túnel hoy, con la vía de tren dentro. Fotografía de Lars Plougmann, 2010.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Thames_Tunnel_walk.jpg",
        foco: "50% 45%",
        alt: "La bóveda del túnel iluminada por farolas, con dos raíles perdiéndose en el fondo.",
      },
    ],
    entrada:
      "Londres, 1825. Empieza a excavarse un túnel bajo el río Támesis para unir las dos orillas a la altura de los muelles, donde el tráfico de barcos hace imposible levantar un puente. Nadie lo ha conseguido nunca por debajo de un río navegable: hubo dos intentos anteriores y los dos se inundaron y se abandonaron a medias. El terreno tampoco ayuda, porque no es roca sino arena y grava empapada que se derrumba en cuanto se abre un hueco, y encima pasa por arriba un río entero con sus mareas. La obra tardará dieciocho años en terminarse.",
    paginas: [
      {
        rotulo: "El gusano",
        texto:
          "La solución se le ocurrió a un ingeniero francés observando en un astillero a un molusco alargado que perfora la madera sumergida de los barcos. El animal avanza con dos valvas duras que raspan la madera por delante, mientras segrega por detrás una sustancia calcárea que va revistiendo el túnel según lo hace. Copió el principio: construyó un armazón de hierro del tamaño de la sección completa, dividido en treinta y seis casillas, cada una con un obrero excavando por delante mientras otros montaban ladrillo detrás. El escudo aguantaba la tierra mientras tanto.",
        destacado: { tipo: "frase", frase: "Excavar por delante y revestir por detrás, como el molusco." },
      },
      {
        rotulo: "Las inundaciones",
        texto:
          "Aun así el río entró cinco veces. En una de ellas murieron seis hombres y el hijo del ingeniero, que dirigía la obra, estuvo a punto de ahogarse y se pasó meses convaleciente. Los obreros trabajaban con el agua goteando encima y con gases del alcantarillado que provocaban fiebres y ceguera temporal; hubo periodos en que la obra se paró años enteros por falta de dinero, con el túnel tapiado y olvidado. Para recaudar fondos se llegó a abrir al público la parte terminada y a organizar banquetes dentro, bajo el río, con música y todo.",
        destacado: { tipo: "cifra", cifra: "18", unidad: "años tardó en abrirse el túnel" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se inauguró en 1843 y lo visitaron dos millones de personas en el primer año, aunque como paso de carruajes fracasó, porque nunca se construyeron las rampas de acceso y quedó reducido a un paseo peatonal con feria dentro. Décadas después se reconvirtió en túnel de ferrocarril y hoy sigue en servicio, con trenes pasando por él a diario ciento ochenta años más tarde. El escudo de excavación, en cambio, fue el invento decisivo: todas las tuneladoras modernas, incluidas las máquinas gigantes de hoy, funcionan con la misma idea del molusco.",
      },
    ],
  },

  {
    id: "tunel-parado-por-miedo",
    titulo: "Pararon un túnel por miedo a una invasión",
    gancho: "En 1882 ya se habían excavado dos kilómetros desde cada orilla. Lo detuvo una campaña de opinión.",
    categoria: "Túneles",
    color: "var(--clay)",
    encargo: "Una galería antigua abandonada con raíles oxidados y agua en el suelo.",
    entrada:
      "Canal de la Mancha, 1880. Dos compañías, una francesa y otra británica, empiezan a excavar por su cuenta un túnel bajo el mar para unir los dos países en tren. Usan máquinas perforadoras de aire comprimido y avanzan bien: en dos años llevan más de dos kilómetros excavados desde cada orilla, con la roca en buenas condiciones.",
    paginas: [
      {
        rotulo: "El pánico",
        texto:
          "La obra se detuvo por una campaña de opinión, no por ningún problema técnico. Militares retirados, periodistas y escritores empezaron a publicar artículos advirtiendo de que un túnel sería una puerta abierta para una invasión: se llegó a imaginar por escrito un comando disfrazado tomando la boca del túnel por sorpresa una noche cualquiera. Se recogieron miles de firmas, incluidas las de escritores y obispos, y una comisión parlamentaria concluyó en 1883 que el riesgo era inaceptable. Las obras se cerraron y las galerías quedaron abandonadas con la maquinaria dentro.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "kilómetros excavados desde cada orilla" },
      },
      {
        rotulo: "Un siglo después",
        texto:
          "La idea volvió una y otra vez durante el siglo siguiente, con proyectos aprobados y cancelados en los años veinte, en los cuarenta y en los setenta, este último ya con obras empezadas y detenidas por un cambio de gobierno y un problema de financiación. El túnel definitivo se excavó entre 1988 y 1994, con once tuneladoras trabajando desde las dos orillas a la vez y una precisión tal que al encontrarse en el centro el desvío fue de unos pocos centímetros. Tiene cincuenta kilómetros, treinta y ocho de ellos bajo el mar.",
        destacado: { tipo: "frase", frase: "Al encontrarse en el centro, el error fue de centímetros." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las galerías de 1882 siguen ahí, conservadas y accesibles desde una de las bocas, y se llegó a estudiar aprovecharlas para el trazado moderno. El miedo de entonces no era del todo absurdo para su época, y prueba de ello es que el túnel actual incluye sistemas para bloquear o inundar el paso en caso de necesidad, previstos desde el diseño. Hoy pasan por él millones de personas al año y trenes de mercancías cada pocos minutos, y el debate público ya no es militar sino de precios de billete y de averías.",
      },
    ],
  },

  {
    id: "tunel-mas-largo",
    titulo: "El túnel más largo tardó diecisiete años",
    gancho: "Cincuenta y siete kilómetros de roca bajo los Alpes, con la piedra a cuarenta y cinco grados.",
    categoria: "Túneles",
    color: "var(--ochre)",
    encargo: "Una tuneladora enorme con la cabeza de corte llena de discos metálicos.",
    entrada:
      "Suiza, 1999. Empieza la excavación del túnel ferroviario más largo del mundo, un paso de cincuenta y siete kilómetros bajo los Alpes para que los trenes de mercancías crucen la cordillera en llano en lugar de subir por rampas. La montaña tiene encima hasta dos kilómetros y medio de roca. La obra durará diecisiete años.",
    paginas: [
      {
        rotulo: "El calor",
        texto:
          "El problema principal a esa profundidad es la temperatura. La roca de encima actúa como una manta gigantesca y en el punto más hondo del trazado la piedra estaba a cuarenta y cinco grados, así que hubo que montar plantas de refrigeración enormes para bajar el aire hasta un nivel en el que se pudiera trabajar. Además, la presión de la montaña deforma la galería recién abierta, y hay tramos donde hubo que revestir con anillos de hormigón que dejan holgura para que la roca ceda sin partirlos. Se sacaron veintiocho millones de toneladas.",
        destacado: { tipo: "cifra", cifra: "45", unidad: "grados tenía la roca en el fondo" },
      },
      {
        rotulo: "La escombrera",
        texto:
          "Sacar toda esa piedra fue un problema logístico del mismo tamaño que la excavación. La mayor parte se trituró y se reutilizó: una parte se convirtió en el árido del propio hormigón del túnel y otra se llevó por cintas transportadoras hasta lagos y valles cercanos para formar islas y terrenos nuevos, diseñados con criterios ecológicos. En el interior se abrieron dos galerías paralelas conectadas cada trescientos metros, para que en caso de accidente los pasajeros puedan pasar al otro tubo, que es hoy el estándar en cualquier túnel largo.",
        destacado: { tipo: "frase", frase: "La piedra sacada se convirtió en islas y en hormigón." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se inauguró en 2016 y ha cambiado la logística de media Europa: un tren de mercancías cruza los Alpes sin subir pendientes, lo que permite composiciones más largas y pesadas y quita camiones de las carreteras de montaña, que era el objetivo político declarado desde el principio y el motivo de que lo aprobara un referéndum. El viaje entre las dos bocas dura unos veinte minutos. Y dentro no se ve nada: diecisiete años de obra, veintiocho millones de toneladas de roca y una ventanilla negra durante todo el trayecto.",
      },
    ],
  },
];
