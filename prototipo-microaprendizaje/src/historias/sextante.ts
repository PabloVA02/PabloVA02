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
    titulo: "El sextante mide un ángulo, nada más",
    gancho: "No calcula nada ni sabe nada. Mide con muchísima precisión la altura de un astro sobre el horizonte, y el resto lo pone quien lo sostiene.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Sextante de latón sujetado a la altura del ojo, con el horizonte marino de fondo.",
    entrada:
      "Alta mar, con el instrumento en su forma definitiva desde 1731. Un barco necesita saber dónde está y no tiene ninguna referencia alrededor, así que mira hacia arriba. El sextante es un aparato de mano que hace una sola cosa: medir con mucha precisión el ángulo que hay entre un astro y la línea del horizonte. De ese ángulo, con unas tablas, sale la posición.",
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
    titulo: "La estrella polar da la latitud sin cuentas",
    gancho: "Su altura sobre el horizonte es directamente la latitud del que la mira. Noventa grados en el polo, cero en el ecuador.",
    categoria: "Objetos",
    color: "var(--plum)",
    encargo: "Cielo nocturno de exposición larga con las estrellas trazando círculos alrededor de una fija.",
    entrada:
      "Hemisferio norte, desde hace más de dos mil años. Todas las estrellas del cielo giran a lo largo de la noche, y hay una que apenas se mueve porque cae casi justo encima del eje de la Tierra. Esa quietud la convirtió en el instrumento de navegación más barato de la historia, porque su altura sobre el horizonte es directamente la latitud del que la mira.",
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
