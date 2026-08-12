import type { Short } from "../shorts";

/* ==========================================================================
   El sextante y la posición en el mar.

   Cómo se sabe dónde está uno cuando alrededor solo hay agua. El tema se
   estropea si se convierte en trigonometría.

   La regla del tema: cada short cuenta UN SOLO MÉTODO, siempre por el
   mismo camino: qué se mira, qué se mide, qué sale de esa medida y qué
   error acumula. Y termina en por qué ese método sigue vivo o murió.
   ========================================================================== */

export const SEXTANTE: Short[] = [
  {
    id: "medir-el-angulo-del-sol",
    titulo: "El sextante no calcula nada",
    gancho: "No calcula nada ni sabe nada. Mide con muchísima precisión la altura de un astro sobre el horizonte, y el resto lo pone quien lo sostiene.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Sextante de latón sujetado a la altura del ojo, con el horizonte marino de fondo.",
    fotos: [
      {
        archivo: "Sextant-MnM 11 NA 59-IMG 5971.JPG",
        autor: "Sextante de latón del siglo XIX conservado en el Musée national de la Marine, en París. Fotografía de Rama.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Sextant-MnM_11_NA_59-IMG_5971.JPG",
        foco: "50% 50%",
        alt: "Un sextante de latón sobre fondo negro, con el arco graduado, el brazo móvil y los dos espejos iluminados de lado.",
      },
      {
        archivo: "Sextant-MnM 11 NA 20-IMG 5964-black.jpg",
        autor: "Otro sextante del mismo museo, con los dos espejos y el juego de filtros de colores abatibles. Fotografía de Rama.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Sextant-MnM_11_NA_20-IMG_5964-black.jpg",
        foco: "50% 50%",
        alt: "Un sextante visto de frente sobre fondo negro, con varios cristales tintados levantados delante del espejo.",
      },
      {
        archivo: "Chronometer-MnM 13 NA 1-IMG 6378.JPG",
        autor: "Cronómetro de marina en su caja de madera: el reloj que guardaba la hora del puerto de salida. Musée national de la Marine. Fotografía de Rama.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Chronometer-MnM_13_NA_1-IMG_6378.JPG",
        foco: "50% 45%",
        alt: "Un reloj de esfera blanca montado sobre aros de latón dentro de una caja de madera abierta.",
      },
      {
        archivo: "Dramatic Atlantic Ocean sunrise under a cloudy sky near Sagres, Faro, Algarve, Portugal, February 2025 (54452275690).jpg",
        autor: "Amanecer sobre el Atlántico frente a Sagres, en el Algarve portugués. Fotografía de Sergei Gussev.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Dramatic_Atlantic_Ocean_sunrise_under_a_cloudy_sky_near_Sagres,_Faro,_Algarve,_Portugal,_February_2025_(54452275690).jpg",
        foco: "50% 50%",
        alt: "Una franja de luz naranja entre nubes oscuras y el mar azul, con la línea del horizonte marcada de lado a lado.",
      },
    ],
    entrada:
      "Alta mar, con el instrumento en su forma definitiva desde 1731. Un barco en mitad del océano necesita saber dónde está y no tiene ni una sola referencia alrededor, porque el agua es igual en todas direcciones y no hay nada que señalar en un mapa. Así que mira hacia arriba, que es lo único que cambia. El sextante es un aparato de mano que hace una sola cosa y la hace muy bien: medir con enorme precisión el ángulo que hay entre un astro y la línea del horizonte. De ese ángulo, con unas tablas y un reloj, sale la posición.",
    paginas: [
      {
        rotulo: "Dos espejos",
        texto:
          "El problema de medir un ángulo desde un barco es que el barco no para quieto ni un segundo. La solución del sextante consiste en no comparar el astro con el instrumento, sino el astro con el horizonte. Un espejo pequeño y móvil recoge la luz del sol y la manda a otro espejo medio plateado y medio transparente. Por la mitad transparente se ve el horizonte, y por la plateada el sol reflejado, las dos imágenes superpuestas. Basta girar un brazo hasta que el sol parece posarse justo sobre la línea del mar. Como las dos imágenes se mueven juntas con el balanceo, el vaivén del barco deja de importar.",
        destacado: { tipo: "frase", frase: "El sol y el horizonte se mueven juntos: el balanceo no importa." },
      },
      {
        rotulo: "Del ángulo al mapa",
        texto:
          "Con el ángulo medido empieza el trabajo de verdad: aritmética y tablas. A mediodía, cuando el sol está más alto, su altura sobre el horizonte depende solo de la latitud y de la fecha. Restando ese ángulo a noventa grados y corrigiendo con una tabla del almanaque, sale la latitud con error de pocos kilómetros. La latitud es la fácil, porque el norte y el sur se leen en el cielo desde la Antigüedad. Para la longitud, el este y el oeste, hace falta un reloj exacto que siga marcando la hora del puerto de salida. Comparando esa hora con el mediodía local se sabe cuánto se ha viajado al este o al oeste.",
        destacado: { tipo: "cifra", cifra: "1731", unidad: "el año del sextante moderno" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un instrumento que sigue siendo obligatorio a bordo de muchos barcos mercantes, guardado en su caja de madera junto al puente. El motivo no es nostalgia, porque el sextante no necesita electricidad, ni satélites, ni señal, y funciona igual con el barco a oscuras. Las academias navales volvieron a enseñarlo hace unos años, después de haberlo quitado, cuando quedó claro que una señal de satélite se puede perder o falsear. Y quedó la elegancia de un aparato que no calcula nada y no sabe nada: solo mide un ángulo con mucho cuidado, y el resto lo pone quien lo sostiene.",
      },
    ],
  },
  {
    id: "la-estrella-que-no-se-mueve",
    titulo: "La polar da la latitud",
    gancho: "Su altura sobre el horizonte es directamente la latitud del que la mira. Noventa grados en el polo, cero en el ecuador.",
    categoria: "Objetos",
    color: "var(--plum)",
    encargo: "Cielo nocturno de exposición larga con las estrellas trazando círculos alrededor de una fija.",
    fotos: [
      {
        archivo: "Star trails (starstax).jpg",
        autor: "Exposición larga del cielo nocturno: las estrellas dibujan círculos alrededor del punto por donde pasa el eje de la Tierra.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AStar%20trails%20(starstax).jpg",
        foco: "50% 32%",
        alt: "Cielo nocturno con cientos de trazos luminosos formando círculos concéntricos sobre un paisaje de piedra.",
      },
      {
        archivo: "Night sky at Paranal (img 2524-cc).jpg",
        autor: "Trazos de estrellas sobre el observatorio de Paranal, en el desierto de Atacama.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ANight%20sky%20at%20Paranal%20(img%202524-cc).jpg",
        foco: "50% 45%",
        alt: "Estelas de estrellas sobre una montaña con cúpulas de telescopio y un haz de láser naranja apuntando al cielo.",
      },
      {
        archivo: "Cross-staff-MnM 11 NA 5-IMG 5989-black.jpg",
        autor: "Ballestilla europea del Museo Nacional de la Marina de París: una vara graduada con una cruz que se desliza.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File%3ACross-staff-MnM%2011%20NA%205-IMG%205989-black.jpg",
        foco: "50% 50%",
        alt: "Vara de madera con marcas talladas y una pieza transversal, fotografiada sobre fondo negro.",
      },
      {
        archivo: "Shooting Star over La Silla.jpg",
        autor: "Cielo del hemisferio sur sobre el observatorio de La Silla, en Chile, con una estrella fugaz cruzándolo.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AShooting%20Star%20over%20La%20Silla.jpg",
        foco: "50% 45%",
        alt: "Noche estrellada sobre unas cúpulas de telescopio, con un trazo brillante que baja hacia el horizonte.",
      },
    ],
    entrada:
      "Hemisferio norte, desde hace más de dos mil años. Todas las estrellas del cielo giran a lo largo de la noche, y quien mire un rato lo bastante largo las ve desfilar. Hay una, sin embargo, que apenas se mueve, porque cae casi justo encima del eje de la Tierra y se limita a dar una vuelta diminuta sobre sí misma. Esa quietud la convirtió en el instrumento de navegación más barato de la historia: su altura sobre el horizonte es, sin ninguna cuenta de por medio, la latitud del que la está mirando.",
    paginas: [
      {
        rotulo: "Por qué funciona",
        texto:
          "La Tierra gira sobre un eje imaginario que atraviesa los polos, y ese eje apunta a un punto fijo del cielo. La estrella polar está muy cerca de ese punto, así que da una vuelta diminuta cada noche y parece clavada. Desde el polo norte se ve justo encima de la cabeza, a noventa grados sobre el horizonte. Desde el ecuador se ve pegada al horizonte, a cero grados. En cualquier punto intermedio, el ángulo al que aparece coincide con la latitud, sin ninguna cuenta. Por eso un marinero medieval podía saber a qué altura del mundo estaba con solo levantar la vista.",
        destacado: { tipo: "cifra", cifra: "0", unidad: "grados marca la polar en el ecuador" },
      },
      {
        rotulo: "El palo con nudos",
        texto:
          "Para medir esa altura sin aparatos caros, los navegantes árabes usaban una tablilla de madera atada a un cordel con nudos. Se sujetaba el cordel con los dientes y se estiraba el brazo hasta que la tablilla tapaba el hueco entre el horizonte y la estrella. Cada nudo correspondía a un puerto conocido, de manera que el aparato no daba grados, sino destinos. Con eso se cruzaba el océano Índico siglos antes de que existiera nada parecido en Europa. El sistema europeo equivalente fue una vara graduada con una cruz deslizante, que obligaba a mirar el sol de frente. Muchos pilotos veteranos acabaron con la vista dañada de medir el mediodía sin protección.",
        destacado: { tipo: "frase", frase: "El cordel se sujetaba con los dientes y se estiraba el brazo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la polar como referencia de emergencia para cualquiera que se pierda de noche en el hemisferio norte. Quedó también su fecha de caducidad, porque el eje de la Tierra se bambolea muy despacio y en unos milenios señalará a otra estrella. Hace cinco mil años el papel lo hacía una estrella distinta, y las pirámides se orientaron con aquella. Y quedó una asimetría curiosa del planeta, porque el hemisferio sur no tiene ninguna estrella brillante en su eje y allí hubo que apañarse con una constelación en forma de cruz.",
      },
    ],
  },
  {
    id: "cuando-el-gps-miente",
    titulo: "La señal del GPS es débil y falsificable",
    gancho: "El receptor solo escucha y no comprueba nada. Basta emitir cerca algo parecido y más fuerte para que le haga caso.",
    categoria: "Objetos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Pantalla de navegación de un barco con la posición marcada en mitad de tierra firme.",
    entrada:
      "Órbita terrestre y todo el planeta, con el sistema abierto a uso civil desde el año 2000. Un receptor de GPS no habla con nadie: solo escucha. Escucha unas señales de radio que emiten treinta y pico satélites a veinte mil kilómetros de altura y calcula su posición según lo que tarda cada una en llegar. Esa señal llega tan débil como la luz de una bombilla vista desde muy lejos.",
    paginas: [
      {
        rotulo: "Cuatro relojes",
        texto:
          "Cada satélite lleva a bordo un reloj atómico y emite continuamente la hora exacta junto con su propia posición. El receptor compara esa hora con la suya y, como la señal viaja a la velocidad de la luz, calcula la distancia al satélite. Con un satélite el receptor sabe que está en algún punto de una esfera, y con tres esferas cruzadas queda un punto. Hace falta un cuarto porque el reloj del móvil es malísimo comparado con uno atómico, y esa medida corrige su error. Todo depende de medir milmillonésimas de segundo, porque un error de un microsegundo son trescientos metros. Por eso los satélites llevan corrección por la teoría de la relatividad.",
        destacado: { tipo: "cifra", cifra: "300", unidad: "metros de error por un microsegundo" },
      },
      {
        rotulo: "Engañar al receptor",
        texto:
          "Como el receptor solo escucha y no comprueba nada, basta emitir cerca una señal parecida y más fuerte. Eso se llama suplantación y se ha usado para desviar barcos, para hacer aterrizar drones donde no debían y para engañar a repartidores. Existe además una versión más burda que consiste en emitir ruido en la misma frecuencia hasta tapar la señal auténtica. Un aparato de esos cabe en un mechero, aunque usarlo sea delito en casi todas partes. En varias zonas del mundo hay interferencia constante y los pilotos vuelan con el sistema apagado. Los aviones y los barcos grandes llevan por eso equipos que no dependen de ninguna señal exterior.",
        destacado: { tipo: "frase", frase: "El receptor solo escucha: no puede comprobar quién le habla." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una dependencia enorme y poco visible, porque el GPS no solo sitúa coches: da la hora a las redes eléctricas, a los cajeros y a las bolsas. Un fallo de sincronización durante unas horas en 2016 provocó averías en equipos de medio mundo sin que casi nadie se enterase del motivo. Quedaron por eso sistemas de respaldo basados en emisoras de radio en tierra y en relojes atómicos propios. Y quedó el sextante en su caja, que es lo más raro de toda la historia: el aparato más antiguo del puente sigue ahí porque es el único que nadie puede apagar desde fuera.",
      },
    ],
  },
];
