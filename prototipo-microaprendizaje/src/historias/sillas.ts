import type { Short } from "../shorts";

/* ==========================================================================
   Las sillas.

   El mueble en el que pasamos media vida y que durante siglos fue un objeto
   de poder, no de descanso. El tema se estropea si se cuenta como diseño de
   mobiliario, con nombres de arquitectos y estilos.

   La regla del tema: se cuenta QUIÉN SE SENTABA Y QUIÉN NO, y qué le hace la
   silla al cuerpo. Sentarse no es neutro: cambia la columna, la circulación
   y hasta las costumbres de una casa. Con cifras de horas y de altura.
   ========================================================================== */

export const SILLAS: Short[] = [
  {
    id: "sentarse-era-un-privilegio",
    titulo: "La silla era de mandar",
    gancho: "En una casa medieval había una silla y muchos bancos. La silla la ocupaba quien presidía, y de ahí vienen varias palabras.",
    categoria: "Sillas",
    color: "var(--ochre)",
    encargo: "Una silla de madera oscura con respaldo alto en una sala vacía.",
    /* De arriba abajo del short: el asiento como cargo, la silla del que
       manda, la que lo tiró todo abajo y el resultado. */
    fotos: [
      {
        archivo: "Cluny - Mero - Trône de Dagobert.jpg",
        autor:
          "El llamado trono de Dagoberto, en bronce dorado. Museo de Cluny, París. Fotografía de Cangadoba.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cluny_-_Mero_-_Tr%C3%B4ne_de_Dagobert.jpg",
        foco: "50% 40%",
        alt: "Un sillón plegable de bronce dorado con las patas talladas en forma de leones y respaldo calado.",
      },
      {
        archivo: "Silla episcopal del coro de la Catedral de Coria (Cáceres).jpg",
        autor:
          "Silla episcopal del coro de la catedral de Coria, más alta que las de al lado y bajo dosel. Fotografía de José Luis Filpo Cabana.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Silla_episcopal_del_coro_de_la_Catedral_de_Coria_(C%C3%A1ceres).jpg",
        foco: "50% 45%",
        alt: "Silla de coro tallada en madera oscura, con respaldo altísimo rematado en un dosel.",
      },
      {
        archivo:
          "Chair No. 14, Thonet, design 1859, manufactured c. 1920, bentwood beech, walnut stain, woven cane seat - Germanisches Nationalmuseum - Nuremberg, Germany - DSC03037.jpg",
        autor:
          "La silla número 14 de Thonet, diseñada en 1859: seis piezas de haya curvada al vapor, dos tuercas y diez tornillos. Fotografía de Daderot.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Chair_No._14,_Thonet,_design_1859,_manufactured_c._1920,_bentwood_beech,_walnut_stain,_woven_cane_seat_-_Germanisches_Nationalmuseum_-_Nuremberg,_Germany_-_DSC03037.jpg",
        foco: "50% 45%",
        alt: "Una silla de madera curvada con asiento de rejilla, la clásica de los cafés vieneses.",
      },
      {
        archivo: "Thonet MAK Vienna 2020 05.jpg",
        autor:
          "Sala del Museo de Artes Aplicadas de Viena dedicada a la silla de serie. Fotografía de Gryffindor.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Thonet_MAK_Vienna_2020_05.jpg",
        foco: "50% 55%",
        alt: "Una sala de museo con decenas de sillas distintas repartidas por el suelo y sobre tarimas.",
      },
    ],
    entrada:
      "Europa, siglos XII a XVI. En una casa acomodada de esa época hay arcones, bancos corridos y taburetes, pero apenas una o dos sillas con respaldo y brazos. Sentarse en una de ellas no es una cuestión de comodidad, sino de rango. El sitio de cada persona en la sala está perfectamente definido por lo que tiene debajo: la silla para quien preside, el banco para los demás y el suelo para el resto. De ahí salen unas cuantas palabras que todavía usamos sin saber de dónde vienen, empezando por la que designa a quien manda en una reunión. Y de ahí sale también la costumbre, que duró siglos, de que en una casa hubiera una sola silla de verdad y todo el mundo supiera de quién era.",
    paginas: [
      {
        rotulo: "El asiento",
        texto:
          "La silla con respaldo alto y brazos era el asiento del señor de la casa, del obispo o del juez, y solía estar elevada sobre una tarima y a veces bajo un dosel de tela. Los demás se sentaban en bancos corridos, en cojines o directamente en el suelo, según la posición que ocuparan en la casa. De aquel uso vienen palabras que seguimos empleando sin pensar. Presidir es ocupar el asiento principal, una cátedra era la silla del maestro y una sede episcopal se llama así por la silla del obispo.",
        destacado: { tipo: "frase", frase: "Presidir es, literalmente, ocupar el asiento de delante." },
      },
      {
        rotulo: "Cuando se abarató",
        texto:
          "El cambio llegó con la fabricación en serie, y sobre todo con una técnica concreta: la madera curvada con vapor, patentada en el siglo XIX, que permitía dar forma a las piezas sin tallarlas. Con ella se fabricó una silla ligera, resistente y montable con unos pocos tornillos, que se enviaba desmontada en cajas y se vendía por millones a cafés de toda Europa. Por primera vez, tener varias sillas iguales dejó de ser un lujo y pasó a ser lo normal en cualquier casa modesta, con un precio equivalente a unos días de jornal.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "millones de aquella silla se vendieron" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el vocabulario del poder, que sigue lleno de asientos: el escaño de un diputado, la presidencia de una empresa, la cátedra de un profesor. Quedó también una costumbre que hoy parece de toda la vida y es bastante reciente: que cada persona de la casa tenga su propia silla, igual a las demás. Y quedó una diferencia cultural enorme que se olvida a menudo. En buena parte de Asia, sentarse en el suelo sobre esteras o cojines siguió siendo lo habitual hasta hace muy poco, con muebles pensados para esa altura.",
      },
    ],
  },
  {
    id: "la-silla-y-la-espalda",
    titulo: "La silla perfecta no existe",
    gancho: "Ninguna postura aguanta ocho horas. Lo que hace daño no es cómo te sientas, sino cuánto rato llevas igual.",
    categoria: "Sillas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una silla de oficina con ruedas y respaldo de malla, vista de lado.",
    fotos: [
      {
        archivo: "Chair No. 14, Thonet, design 1859, manufactured c. 1920, bentwood beech, walnut stain, woven cane seat - Germanisches Nationalmuseum - Nuremberg, Germany - DSC03037.jpg",
        autor: "Silla número 14 de Thonet, diseñada en 1859 y fabricada hacia 1920. Germanisches Nationalmuseum, Núremberg. Fotografía de Daderot.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Chair_No._14,_Thonet,_design_1859,_manufactured_c._1920,_bentwood_beech,_walnut_stain,_woven_cane_seat_-_Germanisches_Nationalmuseum_-_Nuremberg,_Germany_-_DSC03037.jpg",
        foco: "50% 38%",
        alt: "Una silla de madera curvada con asiento de rejilla de rota, expuesta sobre una tarima turquesa.",
      },
      {
        archivo: "Office workers, Paris - UNESCO - PHOTO0000002920 0000.tiff",
        autor: "Trabajo de oficina en los archivos de la Unesco, París, 1987. Fotografía de Dominique Roger.",
        licencia: "CC BY-SA 3.0 igo",
        fuente: "https://commons.wikimedia.org/wiki/File:Office_workers,_Paris_-_UNESCO_-_PHOTO0000002920_0000.tiff",
        foco: "50% 50%",
        alt: "Tres personas trabajando en una sala de archivo, dos sentadas leyendo y una de pie junto a un aparato.",
      },
      {
        archivo: "London Millennium Bridge Tate Modern Museum Saint Paul's Cathedral Tamise River Night Explore Image Picture Long pose (16484823825).jpg",
        autor: "Peatones cruzando el Millennium Bridge de Londres, en exposición larga, 2015. Fotografía de Benjamin Gillet.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:London_Millennium_Bridge_Tate_Modern_Museum_Saint_Paul's_Cathedral_Tamise_River_Night_Explore_Image_Picture_Long_pose_(16484823825).jpg",
        foco: "50% 50%",
        alt: "Una pasarela iluminada de noche con las figuras de los peatones convertidas en estelas borrosas por el movimiento.",
      },
      {
        archivo: "Furnitures in the sunlight (Unsplash).jpg",
        autor: "Muebles vacíos al sol junto a una ventana. Fotografía de Harry Tang, 2014.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Furnitures_in_the_sunlight_(Unsplash).jpg",
        foco: "50% 50%",
        alt: "Una silla y una mesa vacías recortadas por la luz del sol que entra por una ventana.",
      },
    ],
    entrada:
      "Oficinas de todo el mundo, con estudios de ergonomía publicados desde los años cincuenta del siglo XX. La idea popular es que existe una postura correcta para sentarse, con la espalda recta y los pies planos, y que basta con comprar una buena silla para librarse de los dolores de espalda. Los datos de las últimas décadas apuntan a otra cosa bastante distinta y bastante más incómoda de aplicar, porque no señalan a ninguna postura en concreto. Lo que aparece una y otra vez en las revisiones es el tiempo: cuánto rato se lleva sin cambiar de posición.",
    paginas: [
      {
        rotulo: "El disco",
        texto:
          "Entre las vértebras hay unos discos de cartílago que se alimentan por difusión, es decir, absorbiendo líquido cuando se descomprimen y soltándolo cuando se aprietan. Ese intercambio necesita movimiento, y una postura fija lo interrumpe, se siente uno cómodo o no. Por eso al levantarse después de dos horas quietos aparece esa rigidez tan característica que todo el mundo conoce. Los estudios de laboratorio miden además algo que sorprende: la presión sobre los discos lumbares es mayor sentado que de pie, sobre todo si el tronco se inclina hacia delante para mirar una pantalla.",
        destacado: { tipo: "frase", frase: "El disco se alimenta moviéndose, y sentado no se mueve." },
      },
      {
        rotulo: "Moverse",
        texto:
          "De ahí que la recomendación actual no sea una postura, sino un ritmo: cambiar de posición a menudo y levantarse cada media hora, aunque sea un minuto. Las sillas buenas ayudan justamente a eso, permitiendo balanceo, altura ajustable y un respaldo que acompaña el movimiento, en lugar de obligar a una única postura. Las mesas que se elevan para trabajar de pie funcionan por el mismo motivo. Los estudios que las han evaluado encuentran mejoras cuando se alternan las dos posiciones, y no cuando alguien se empeña en pasar el día entero de pie.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "minutos como máximo en la misma postura" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una industria enorme de sillas ergonómicas, con modelos que cuestan lo que un electrodoméstico grande. Ayudan de verdad, sobre todo si se ajustan bien, pero no hacen milagros. Quedó también una conclusión que aparece en casi todas las revisiones y que no se puede comprar: el mejor asiento es el que se abandona con frecuencia. Y quedó un dato para relativizar cualquier nostalgia, porque los oficios de antes tampoco eran sanos. Quien pasaba doce horas de pie en un taller acababa con otros problemas igual de serios, empezando por las piernas.",
      },
    ],
  },
  {
    id: "el-taburete-de-ordenar",
    titulo: "Trabajar de pie",
    gancho: "Los escritorios altos de los oficinistas antiguos no eran una manía: se creía que sentarse volvía perezoso.",
    categoria: "Sillas",
    color: "var(--plum)",
    encargo: "Un pupitre alto de madera con tapa inclinada y un taburete de tres patas.",
    fotos: [
      {
        archivo: "Skansen w Maurzycach, Łowicki Park Etnograficzny w Maurzycach, 2025, SOULinPIX, KsP 207.jpg",
        autor: "Escuela reconstruida en el museo etnográfico de Maurzyce, Polonia, 2025.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ASkansen%20w%20Maurzycach%2C%20%C5%81owicki%20Park%20Etnograficzny%20w%20Maurzycach%2C%202025%2C%20SOULinPIX%2C%20KsP%20207.jpg",
        foco: "50% 55%",
        alt: "Aula antigua con pupitres de tapa inclinada y bancos corridos bajo un techo de vigas.",
      },
      {
        archivo: "Chinese Rosewood and Inlay Desk Chair Displayed at the 1904 World's Fair - DPLA - 713985f10aa9df1993795ebe86e7cba9 (page 34).jpg",
        autor: "Silla giratoria de palisandro con incrustaciones, expuesta en la Feria Mundial de 1904.",
        licencia: "No restrictions",
        fuente: "https://commons.wikimedia.org/wiki/File%3AChinese%20Rosewood%20and%20Inlay%20Desk%20Chair%20Displayed%20at%20the%201904%20World's%20Fair%20-%20DPLA%20-%20713985f10aa9df1993795ebe86e7cba9%20(page%2034).jpg",
        foco: "50% 55%",
        alt: "Silla de despacho de madera roja con nácar incrustado, montada sobre un pie giratorio.",
      },
      {
        archivo: "Chinese Rosewood and Inlay Desk Chair Displayed at the 1904 World's Fair - DPLA - 713985f10aa9df1993795ebe86e7cba9 (page 2).jpg",
        autor: "Otra vista de la misma silla giratoria de 1904.",
        licencia: "No restrictions",
        fuente: "https://commons.wikimedia.org/wiki/File%3AChinese%20Rosewood%20and%20Inlay%20Desk%20Chair%20Displayed%20at%20the%201904%20World's%20Fair%20-%20DPLA%20-%20713985f10aa9df1993795ebe86e7cba9%20(page%202).jpg",
        foco: "50% 50%",
        alt: "Detalle del pie de cuatro brazos sobre el que gira el asiento de la silla.",
      },
      {
        archivo: "Desk (AM 1976.47).jpg",
        autor: "Escritorio coreano de la dinastía Joseon, finales del siglo XVII.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADesk%20(AM%201976.47).jpg",
        foco: "50% 50%",
        alt: "Mesa baja de escribir, de madera oscura y patas cortas.",
      },
    ],
    entrada:
      "Oficinas, escuelas y talleres europeos de los siglos XVIII y XIX. Los escritorios de contabilidad de aquella época son altos, con la tapa inclinada como un atril, y delante de ellos no hay sillones sino taburetes estrechos, duros y sin respaldo ninguno. Los empleados trabajaban así de pie, o medio apoyados en el borde del taburete, durante jornadas larguísimas de doce y catorce horas. Y aquello no era un descuido del mobiliario ni una cuestión de ahorro, sino una decisión perfectamente deliberada de los patronos de la época, con toda una teoría del carácter detrás de ella.",
    paginas: [
      {
        rotulo: "Estar despierto",
        texto:
          "El argumento que se daba entonces mezclaba a partes iguales la moral y la conveniencia del patrono. Se pensaba que un asiento cómodo invitaba a la pereza y a la charla con el de al lado. Estar de pie, en cambio, mantenía al empleado atento y visible desde cualquier punto de la sala. También había una razón material y bastante sensata. Los libros de contabilidad eran enormes y pesados, y una superficie alta e inclinada permitía manejarlos y escribir con la espalda recta, sin encorvarse sobre una mesa baja durante horas.",
        destacado: { tipo: "frase", frase: "Se creía que el asiento cómodo invitaba a la pereza." },
      },
      {
        rotulo: "El giro",
        texto:
          "Todo aquello cambió con la llegada de la máquina de escribir y de la oficina moderna, a principios del siglo XX. Escribir a máquina exige una altura fija de teclado y una posición estable de las manos. Así apareció la silla con asiento giratorio, altura regulable y respaldo bajo, pensada expresamente para pasar horas seguidas tecleando. Con ella llegó también la vigilancia por otro camino. Se impusieron las filas de mesas iguales en salas abiertas, con el supervisor sentado al fondo, que es la disposición que muchas oficinas conservan hoy.",
        destacado: { tipo: "cifra", cifra: "1904", unidad: "una de las primeras sillas giratorias de oficina" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron aquellos pupitres altos en algunos despachos de notarios y en los museos, y quedó la palabra escritorio aplicada a un mueble que ya no se parece en nada al original. Y quedó una vuelta del asunto que tiene su gracia y que se ve en cualquier oficina moderna. Las mesas elevables que hoy se venden como novedad ergonómica tienen exactamente la altura de aquellos escritorios de contable. Lo único que ha cambiado es el motivo. Entonces se hacía para que nadie se relajara demasiado, y ahora se hace para cuidar la espalda de quien trabaja.",
      },
    ],
  },
];
