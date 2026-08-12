import type { Short } from "../shorts";

/* ==========================================================================
   Correos.

   Mandar algo a alguien que está lejos, que durante milenios fue carísimo y
   lento y en dos siglos se volvió gratis e instantáneo. El riesgo del tema
   es la filatelia: dentados, tiradas y catálogos, que aburren a cualquiera
   que no coleccione.

   La regla del tema: se cuenta QUIÉN PAGABA. Antes del sello pagaba quien
   recibía, y eso lo cambia todo. Un servicio que funciona a caballo durante
   dieciocho meses y se hunde en cuanto llega un cable. Una carta que tarda
   cien años en llegar. El correo es logística, y la logística es dinero.

   Y siempre se compara el precio con un jornal, porque decir «un chelín» no
   significa nada hoy.
   ========================================================================== */

export const CORREOS: Short[] = [
  {
    id: "penny-black",
    titulo: "Pagaba quien la recibía",
    gancho: "Y podía negarse a pagarla. Media Inglaterra mandaba mensajes en el sobre para no tener que abrirlo.",
    categoria: "Correos",
    color: "var(--slate)",
    encargo: "Un sello negro pequeño pegado en la esquina de un sobre amarillento.",
    fotos: [
      {
        archivo: "\"Penny Black\" postage stamps MET DP328201.jpg",
        autor: "Bloque de cuatro Penny Black sin usar, emitidos el 6 de mayo de 1840. Grabado del retrato de William Wyon. Metropolitan Museum, Nueva York.",
        licencia: "Dominio público",
        pdPorEdad: 1851,
        fuente: "https://commons.wikimedia.org/wiki/File:%22Penny_Black%22_postage_stamps_MET_DP328201.jpg",
        foco: "50% 50%",
        alt: "El primer sello del mundo: el perfil de la reina Victoria sobre fondo negro.",
      },
      {
        archivo: "Stamp GB-Penny Black first day cover.jpg",
        autor: "Carta doblada con un Penny Black matasellado el 6 de mayo de 1840, el primer día en que el sello tuvo validez.",
        licencia: "Dominio público",
        pdPorEdad: 1851,
        fuente: "https://commons.wikimedia.org/wiki/File:Stamp_GB-Penny_Black_first_day_cover.jpg",
        foco: "50% 50%",
        alt: "Un pliego de papel amarillento doblado y escrito a mano, con un sello negro pequeño arriba y una cruz roja encima.",
      },
      {
        archivo: "Stamp GB Penny Black plate reconstruction.jpg",
        autor: "Reconstrucción de una plancha entera de Penny Black: doscientas cuarenta posiciones, cada una con sus letras de control.",
        licencia: "Dominio público",
        pdPorEdad: 1851,
        fuente: "https://commons.wikimedia.org/wiki/File:Stamp_GB_Penny_Black_plate_reconstruction.jpg",
        foco: "50% 45%",
        alt: "Una cuadrícula de sellos negros iguales, casi todos con un aspa roja de matasellos encima.",
      },
      {
        archivo: "Victorian Penfold in snow.jpg",
        autor: "Un buzón victoriano del modelo Penfold, cubierto de nieve. Fotografía de kitmasterbloke.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Victorian_Penfold_in_snow.jpg",
        foco: "50% 45%",
        alt: "Un buzón cilíndrico de hierro rojo con remate hexagonal, con una capa de nieve encima.",
      },
    ],
    entrada:
      "Reino Unido, década de 1830. El correo funciona justo al revés de como lo conocemos hoy: la carta se entrega sin pagar nada por adelantado y es quien la recibe el que abona el porte, calculado según la distancia recorrida y el número de hojas que lleve dentro. El precio de una carta larga venida desde Escocia puede equivaler al jornal de un día entero de un obrero, de manera que muchísima gente, al ver quién la manda y de dónde viene, sencillamente se niega a aceptarla y el cartero se la lleva de vuelta.",
    paginas: [
      {
        rotulo: "El truco del sobre",
        texto:
          "Como el destinatario podía mirar el sobre antes de decidir si pagaba, se extendió una picaresca sencilla: acordar de antemano un código de marcas en el exterior. Una cruz en una esquina significaba que todo iba bien, un subrayado en el nombre que hacía falta dinero, y así. El destinatario leía el mensaje en el sobre, decía que no aceptaba la carta y no pagaba nada. Un reformador social contó haber visto a una mujer rechazar una carta de su hijo después de examinarla, y decidió que aquel sistema estaba roto.",
        destacado: { tipo: "frase", frase: "Miraban el sobre, entendían el mensaje y no pagaban." },
      },
      {
        rotulo: "El sello",
        texto:
          "Su propuesta, publicada en 1837, era darle la vuelta a todo: precio único para cualquier distancia dentro del país, muy barato, y pago por adelantado mediante un trozo de papel engomado que se pega en el sobre. El argumento fue económico y no sentimental: calculó que la mayor parte del coste no era el transporte, sino la contabilidad de cobrar carta por carta en cada puerta. En mayo de 1840 se puso a la venta el primer sello de la historia, negro, con el perfil de la reina y sin el nombre del país impreso.",
        destacado: { tipo: "cifra", cifra: "1840", unidad: "el año del primer sello del mundo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El volumen de cartas se duplicó en un año y se multiplicó por cinco en una década, y el resto de los países copiaron el sistema en menos de veinte años. Aquel primer sello no llevaba el nombre del país porque no hacía falta distinguirlo de ningún otro, y por eso el Reino Unido sigue siendo hoy el único país del mundo cuyos sellos no dicen de dónde son: basta con el perfil del monarca. Es una excepción reconocida por acuerdo internacional. De aquella primera tirada se imprimieron sesenta y ocho millones de sellos y sobreviven bastantes, así que tener uno no es ninguna fortuna: lo caro es el sobre entero con su matasellos.",
      },
    ],
  },

  {
    id: "pony-express",
    titulo: "Dieciocho meses a caballo",
    gancho: "Ochenta jinetes cruzaban tres mil kilómetros en diez días. Un cable telegráfico los dejó sin trabajo.",
    categoria: "Correos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un jinete pequeño al galope sobre una llanura seca y vacía al atardecer.",
    fotos: [
      {
        archivo: "Albert Bierstadt - A Storm in the Rocky Mountains, Mt. Rosalie - Google Art Project.jpg",
        autor: "Óleo de Albert Bierstadt, 1866: tormenta sobre las Montañas Rocosas, el terreno que había que cruzar. Brooklyn Museum.",
        licencia: "Public domain",
        pdPorEdad: 1902,
        fuente: "https://commons.wikimedia.org/wiki/File%3AAlbert%20Bierstadt%20-%20A%20Storm%20in%20the%20Rocky%20Mountains%2C%20Mt.%20Rosalie%20-%20Google%20Art%20Project.jpg",
        foco: "50% 50%",
        alt: "Valle enorme de montaña con una tormenta descargando al fondo y un rayo de sol iluminando el lago.",
      },
      {
        archivo: "Pony Express, The Changing of Mounts at a Relay Station, erected at This is the Place Park in Salt Lake Lake City, UT.jpg",
        autor: "Monumento de Avard Fairbanks en Salt Lake City: el cambio de montura en una estación de relevo.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3APony%20Express%2C%20The%20Changing%20of%20Mounts%20at%20a%20Relay%20Station%2C%20erected%20at%20This%20is%20the%20Place%20Park%20in%20Salt%20Lake%20Lake%20City%2C%20UT.jpg",
        foco: "50% 45%",
        alt: "Escultura de bronce de un jinete pasando la valija a otro caballo mientras un hombre lo sujeta.",
      },
      {
        archivo: "Albert Bierstadt - The Rocky Mountains, Lander's Peak.jpg",
        autor: "Óleo de Albert Bierstadt, 1863: el pico Lander, en las Rocosas, con un campamento al pie.",
        licencia: "Public domain",
        pdPorEdad: 1902,
        fuente: "https://commons.wikimedia.org/wiki/File%3AAlbert%20Bierstadt%20-%20The%20Rocky%20Mountains%2C%20Lander%27s%20Peak.jpg",
        foco: "50% 50%",
        alt: "Gran paisaje de montaña con una cascada, un lago y un campamento de tiendas en la pradera del fondo.",
      },
      {
        archivo: "Rural electricity - Flickr - kevin dooley.jpg",
        autor: "Postes y cables cruzando el campo: la línea que dejó sin trabajo a los jinetes.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ARural%20electricity%20-%20Flickr%20-%20kevin%20dooley.jpg",
        foco: "50% 50%",
        alt: "Hilera de postes de madera con cables tendidos, recortados contra el cielo de una llanura.",
      },
    ],
    entrada:
      "Estados Unidos, abril de 1860. Una carta de la costa este a California tarda entre tres y cuatro semanas, tanto si va por barco rodeando el continente como si va por diligencia atravesándolo. Una empresa privada monta entonces un servicio de relevos a caballo para hacerlo en diez días, y lo monta a lo grande: casi doscientas estaciones repartidas cada quince kilómetros a lo largo de tres mil kilómetros, quinientos caballos comprados y ochenta jinetes cabalgando de día y de noche, con lluvia, con nieve y con lo que haga falta. Funciona exactamente como estaba previsto, y aun así dura dieciocho meses.",
    paginas: [
      {
        rotulo: "El relevo",
        texto:
          "El sistema funcionaba como una carrera de postas. Cada jinete recorría unos cien kilómetros cambiando de caballo cada quince, en paradas de dos minutos donde solo se pasaba la valija de una montura a otra. Se buscaban chicos jóvenes y ligeros, muchos de menos de veinte años, y se les pesaba: no podían pasar de cincuenta y cinco kilos, porque cada kilo de más frenaba al animal. La valija era de cuero, con cuatro bolsillos cerrados con candado, y se echaba por encima de la silla para poder pasarla de un caballo a otro en segundos, sin desatar nada.",
        destacado: { tipo: "cifra", cifra: "55", unidad: "kilos como máximo pesaba un jinete" },
      },
      {
        rotulo: "El precio",
        texto:
          "Mandar media onza de papel costaba cinco dólares de la época, el equivalente a varios días de sueldo de un obrero, así que se usaba solo para contratos, órdenes bancarias y prensa impresa en papel finísimo. El servicio funcionó con una fiabilidad notable: de las miles de valijas que cruzaron el continente solo se perdió una. La empresa, en cambio, perdió una fortuna: mantener doscientas estaciones con hombres, forraje y quinientos caballos costaba mucho más de lo que entraba por las cartas, y sus dueños contaban con que el gobierno les diera el contrato oficial del correo. No se lo dieron nunca.",
        destacado: { tipo: "frase", frase: "De todas las valijas que cruzaron el continente solo se perdió una." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El 24 de octubre de 1861 se unieron los dos extremos del cable telegráfico transcontinental, y dos días después la empresa anunció el cierre. Había funcionado dieciocho meses. Un mensaje que costaba diez días pasó a tardar segundos, y las estaciones se abandonaron o se convirtieron en ranchos. Aquel servicio brevísimo se convirtió, sin embargo, en uno de los símbolos del oeste americano, con más películas dedicadas que meses de existencia, y su recorrido está señalizado hoy como ruta histórica. Duró lo que tardó en tenderse un cable a su lado: la última valija llegó a California cuando el telégrafo ya funcionaba.",
      },
    ],
  },

  {
    id: "cartas-que-llegan-tarde",
    titulo: "Cartas de hace un siglo",
    gancho: "Un baúl de correo del siglo XVII se abrió en 2015. Sus dueños llevaban trescientos años muertos.",
    categoria: "Correos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un baúl de cuero abierto lleno de cartas dobladas y atadas con cordel.",
    entrada:
      "La Haya, Países Bajos, 1926. Un museo postal recibe la donación de un baúl de cuero que perteneció a un matrimonio de administradores de correos del siglo XVII. Dentro hay dos mil seiscientas cartas de toda Europa que nunca se entregaron, porque el destinatario no apareció o se negó a pagar. Seiscientas de ellas siguen cerradas y lacradas.",
    paginas: [
      {
        rotulo: "El plegado",
        texto:
          "Antes de que existieran los sobres, una carta era su propio sobre: se doblaba sobre sí misma en una secuencia complicada de pliegues, se hacían cortes y se pasaba una tira del propio papel por dentro a modo de cierre, y después se lacraba. Cada persona tenía su plegado, y algunos estaban pensados para que fuera imposible abrirlos sin dejar rastro. Los conservadores llamaron a esa técnica cerradura de papel, y descubrieron que era mucho más elaborada de lo que nadie suponía, con decenas de variantes documentadas. Las más cerradas las usaban espías, amantes y comerciantes, gente que necesitaba saber si alguien había mirado por el camino.",
        destacado: { tipo: "cifra", cifra: "600", unidad: "cartas seguían cerradas y lacradas" },
      },
      {
        rotulo: "Sin abrirlas",
        texto:
          "Durante noventa años nadie se atrevió a abrirlas, porque hacerlo destruía justamente la información sobre el plegado. En 2021, un equipo internacional usó un escáner de rayos X diseñado para analizar el esmalte dental y consiguió leer una carta entera sin tocarla: el aparato detecta la tinta metálica y un programa desdobla virtualmente el papel, capa por capa, hasta reconstruir la hoja plana con el texto encima. La primera que leyeron era de 1697, estaba escrita en francés y pedía a un pariente el certificado de defunción de un tío para poder cobrar una herencia. Aquel hombre llevaba tres siglos esperando una respuesta que ya no iba a llegar.",
        destacado: { tipo: "frase", frase: "Se leyó sin abrirla, con un escáner hecho para dientes." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquellas cartas son un retrato de la Europa corriente del siglo XVII que ningún archivo oficial conserva: hablan de deudas, de embarazos, de un músico que pide dinero y de familias repartidas entre puertos. La técnica se está aplicando ahora a otros archivos con documentos sellados. Y hay un detalle que explica el baúl entero: los administradores no lo guardaron por sentimentalismo ni por curiosidad. Cada carta sin entregar era dinero pendiente de cobrar, apuntado en su contabilidad como una deuda viva, y las conservaron con la esperanza de que alguien apareciera algún día a pagarlas. Nadie apareció nunca.",
      },
    ],
  },
];
