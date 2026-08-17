import type { Short } from "../shorts";

/* ==========================================================================
   Los cajeros automáticos.

   Una máquina que da dinero a un desconocido en la calle sin que haya nadie
   mirando. El tema se estropea si se cuenta como historia de la informática:
   lo interesante es el problema de confianza.

   La regla del tema: se explica CÓMO SE COMPRUEBA QUIÉN ERES sin conexión
   con nadie, que es el problema que hubo que resolver antes de que existiera
   la red. Y se cuentan las cifras del negocio, porque un cajero es una
   sucursal que cabe en un muro y trabaja de noche.
   ========================================================================== */

export const CAJEROS: Short[] = [
  {
    id: "el-primer-cajero",
    titulo: "El vale era radiactivo",
    gancho: "No había tarjetas ni red, así que se usaban papeletas impregnadas con una sustancia que la máquina reconocía.",
    categoria: "Cajeros",
    color: "var(--slate)",
    encargo: "Un cajero automático antiguo empotrado en la fachada de un banco.",
    fotos: [
      {
        archivo: "DFC 4172 A handheld magnifying glass resting on a scattered pile of coins and medallions highlighting intricate details.jpg",
        autor: "Una lupa de mano sobre un montón de monedas y medallas en un puesto de mercado.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:DFC_4172_A_handheld_magnifying_glass_resting_on_a_scattered_pile_of_coins_and_medallions_highlighting_intricate_details.jpg",
        foco: "50% 50%",
        alt: "Una lupa de mango crema apoyada sobre cientos de monedas y medallas doradas y plateadas amontonadas.",
      },
      {
        archivo: "Geiger counter usage.jpg",
        autor: "Medición de radiación con un contador Geiger-Müller en un laboratorio estadounidense, 1963.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Geiger_counter_usage.jpg",
        foco: "50% 45%",
        alt: "Una persona pasando la sonda de un contador Geiger sobre unas muestras colocadas en una bandeja.",
      },
      {
        archivo: "Telephone modele U43-MGR Lyon-IMG 9923.jpg",
        autor: "Teléfono de baquelita modelo U43, de 1961, de la administración francesa de correos y teléfonos. Fotografía de Rama.",
        licencia: "CC BY-SA 2.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Telephone_modele_U43-MGR_Lyon-IMG_9923.jpg",
        foco: "50% 50%",
        alt: "Un teléfono negro de baquelita con disco de marcar numerado, visto sobre fondo neutro.",
      },
      {
        archivo: "University National Bank building - door to safe deposit room 02.jpg",
        autor: "La puerta acorazada de la cámara de un banco de Seattle. Fotografía de Joe Mabel.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:University_National_Bank_building_-_door_to_safe_deposit_room_02.jpg",
        foco: "50% 50%",
        alt: "Una puerta circular de acero enorme, con anillos concéntricos de pestillos y engranajes a la vista.",
      },
    ],
    entrada:
      "Londres, junio de 1967. Un banco instala en la pared exterior de una sucursal una máquina capaz de entregar dinero fuera del horario de oficina, algo que hasta ese momento no existía en ninguna parte. Sacar efectivo dependía por completo de que hubiera un empleado detrás del mostrador y de que el mostrador estuviera abierto. El problema técnico que hay que resolver es mayúsculo: la máquina tiene que reconocer al cliente ella sola, sin estar conectada a ningún ordenador central, porque esa red todavía no existe y no existirá hasta bastantes años después.",
    paginas: [
      {
        rotulo: "El vale",
        texto:
          "La solución fue prescindir de la identificación en tiempo real. El cliente compraba en la oficina unos vales de papel, cada uno canjeable por una cantidad fija, y esos vales llevaban impregnada una pequeña cantidad de una sustancia ligeramente radiactiva que la máquina podía detectar. Al introducir el vale, el aparato comprobaba esa marca, pedía un número personal de cuatro cifras y soltaba el dinero, quedándose el papel para que el banco lo descontara después de la cuenta. La cantidad de radiación era mínima y se calculó en su día como inofensiva, aunque hoy la idea produzca cierto escalofrío.",
        destacado: { tipo: "cifra", cifra: "1967", unidad: "el año del primer cajero" },
      },
      {
        rotulo: "Las cuatro cifras",
        texto:
          "De aquella máquina viene el número secreto que todavía usamos. Su inventor pensó en un código de seis cifras, que era lo que recordaba de su época en el ejército. Su mujer le dijo que cuatro era el máximo que ella podría memorizar sin apuntarlo en un papel. Se quedaron en cuatro y así se ha mantenido en casi todo el mundo, con muy pocas excepciones. Es probablemente el caso más citado de una decisión de diseño tomada en una conversación doméstica y convertida después, sin querer, en norma internacional.",
        destacado: { tipo: "frase", frase: "Cuatro cifras porque era lo que su mujer podía recordar." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una máquina que cambió la relación de la gente con el banco, porque por primera vez se podía sacar dinero un domingo. Cuando llegaron las redes de comunicación y las tarjetas con banda magnética, en los años setenta, el sistema pasó a comprobar el saldo en tiempo real y a funcionar entre entidades distintas. Hoy hay más de tres millones de cajeros en el mundo, aunque en muchos países la cifra lleva años bajando. El pago con tarjeta y con móvil ha reducido el uso de efectivo y con él la necesidad de máquinas.",
      },
    ],
  },
  {
    id: "el-cajero-por-dentro",
    titulo: "Billetes contados a mano",
    gancho: "Los separa por rozamiento, mide su grosor al pasar y descarta el que no encaja, todo en dos segundos.",
    categoria: "Cajeros",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un casete de billetes abierto dentro de la máquina, con los fajos ordenados.",
    fotos: [
      {
        archivo: "Primer cajero automatico, Museo del Ahorro.jpg",
        autor: "Cajero NCR 5070 abierto por delante, con los casetes de billetes a la vista. Museo del Ahorro, Santiago de Chile.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3APrimer%20cajero%20automatico%2C%20Museo%20del%20Ahorro.jpg",
        foco: "50% 58%",
        alt: "Cajero automático antiguo expuesto en un museo, con una mampara transparente que deja ver los cajetines de dentro.",
      },
      {
        archivo: "Automated teller machine.JPG",
        autor: "Cajero automático en una calle de Dezful, en el suroeste de Irán.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3AAutomated%20teller%20machine.JPG",
        foco: "50% 50%",
        alt: "Cajero automático empotrado en la pared de una calle, con su pantalla y su teclado.",
      },
      {
        archivo: "Bankomat with folding lid.jpg",
        autor: "Cajero sueco con la tapa abatible que se abre al meter la tarjeta.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ABankomat%20with%20folding%20lid.jpg",
        foco: "50% 50%",
        alt: "Frente de un cajero automático con una tapa metálica desplegada sobre la ranura del dinero.",
      },
      {
        archivo: "Cajero Automático frente a la Plaza de La Pintana 25-05-2025 (1).jpg",
        autor: "Cajero automático en una plaza de La Pintana, en Santiago de Chile.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ACajero%20Autom%C3%A1tico%20frente%20a%20la%20Plaza%20de%20La%20Pintana%2025-05-2025%20(1).jpg",
        foco: "50% 50%",
        alt: "Cajero automático instalado en un módulo a pie de calle, con gente pasando alrededor.",
      },
    ],
    entrada:
      "Cualquier cajero automático de los de ahora, con una mecánica interna que se estandarizó a lo largo de los años noventa y que apenas ha cambiado desde entonces. Dentro de la caja fuerte hay varios casetes cerrados con llave, cada uno cargado con billetes de un solo valor, y encima de ellos un mecanismo que tiene que hacer algo bastante más difícil de lo que parece: separar exactamente los billetes pedidos de una pila prensada, de uno en uno, sin que se peguen dos, sin romper ninguno y sin equivocarse jamás en la cuenta.",
    paginas: [
      {
        rotulo: "Separar y contar",
        texto:
          "El mecanismo empuja la pila contra un rodillo de goma que gira y arrastra el billete de arriba, mientras otro rodillo que gira al revés frena cualquier billete que venga pegado detrás. Después el billete pasa por un canal estrecho con sensores que miden su grosor, su longitud y su opacidad a la luz. Ahí se detectan los billetes dobles, los rotos y los que llevan una pegatina o un trozo de celo. Todo lo que no encaja se desvía a un cajón de rechazos, que un operario revisa después a mano cuando recarga la máquina.",
        destacado: { tipo: "frase", frase: "Un rodillo tira del billete y otro frena al que viene pegado." },
      },
      {
        rotulo: "El reparto",
        texto:
          "Hay además un problema de logística que se resuelve con matemáticas y con estadística, no con mecánica. Cuando alguien pide una cantidad, el programa decide qué combinación de billetes entrega. Procura gastar los de valor pequeño sin agotarlos antes de la siguiente recarga, que puede tardar días en llegar. Los bancos estiman con datos históricos cuánto se sacará de cada cajero según el día de la semana. Llenarlo tiene su coste, porque hay que mover un furgón blindado y porque ese dinero está parado en la máquina en lugar de producir intereses.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "segundos por fajo de billetes" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un aparato que casi nadie asocia con la mecánica de precisión, aunque tenga más de eso que de informática. Quedó también la explicación de dos cosas que irritan a todo el mundo. La primera, que un cajero no reparta billetes pequeños: casi siempre es porque ese casete está vacío o reservado para otra cosa. Y la segunda, que a veces rechace un billete al ingresarlo. No es capricho: sus sensores han medido algo fuera de rango y la máquina prefiere devolverlo antes que aceptar uno falso o contarlo mal.",
      },
    ],
  },
  {
    id: "el-desierto-de-cajeros",
    titulo: "Pueblos enteros sin cajero",
    gancho: "Cuando cierra la última oficina, el efectivo desaparece del pueblo y quien no usa el móvil se queda fuera.",
    categoria: "Cajeros",
    color: "var(--plum)",
    encargo: "Una plaza de pueblo vacía con una persiana metálica bajada y un cartel viejo.",
    entrada:
      "España y buena parte de Europa, desde la crisis financiera de 2008. Los bancos han cerrado miles de oficinas para reducir costes, y con las oficinas han ido desapareciendo también los cajeros automáticos de muchísimos municipios pequeños. En 2023, alrededor de tres mil pueblos españoles no tenían ninguna forma de sacar dinero en efectivo dentro del término municipal: ni cajero, ni oficina, ni nada. Y sus vecinos son mayoritariamente personas de edad avanzada, que son justo las que menos usan el móvil para pagar. Quedarse sin cajero en un pueblo no es solo una molestia: cambia la vida diaria.",
    paginas: [
      {
        rotulo: "Por qué cierran",
        texto:
          "La razón es aritmética y bastante fría. Un cajero cuesta mantenerlo entre varios miles de euros al año, contando el alquiler del espacio, la conexión, el mantenimiento y sobre todo el transporte de fondos en furgón blindado. En un pueblo de doscientos habitantes, el número de operaciones al mes no cubre ese gasto ni de lejos, por muy fiel que sea la clientela. Cuando además cierra la oficina que lo alimentaba, el cajero se queda sin nadie que lo recargue con la frecuencia necesaria, así que termina retirado poco después.",
        destacado: { tipo: "cifra", cifra: "3.000", unidad: "pueblos españoles sin cajero" },
      },
      {
        rotulo: "Los remiendos",
        texto:
          "Las soluciones que se han ido probando son todas parciales. Hay oficinas móviles que recorren comarcas enteras un día a la semana, acuerdos para que la oficina de correos entregue efectivo y cajeros compartidos entre varias entidades, que se reparten el coste del mantenimiento. También se ha extendido el sistema de sacar dinero en la caja de un comercio al pagar con tarjeta, que funciona razonablemente bien allí donde queda algún comercio abierto todo el año. En muchos sitios, sin embargo, el último comercio cerró antes que la oficina bancaria, así que esa vía tampoco sirve.",
        destacado: { tipo: "frase", frase: "Donde no queda comercio, tampoco queda dónde sacar." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un asunto que en varios países ha llegado a los parlamentos, con leyes que obligan a garantizar el acceso al efectivo dentro de una distancia máxima. Quedó también una discusión de fondo sobre qué significa exactamente que un servicio sea esencial y quién debe pagarlo cuando no es rentable. El efectivo sigue siendo la única forma de pago que funciona sin electricidad, sin cobertura y sin saber manejar un móvil. Y esa es justo la situación de mucha gente mayor en pueblos donde ya no queda oficina ni tienda.",
      },
    ],
  },
];
