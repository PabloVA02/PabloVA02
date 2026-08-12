import type { Short } from "../shorts";

/* ==========================================================================
   Semáforos y carreteras.

   Todo lo que hay pintado o clavado en una carretera parece que estuvo
   ahí desde siempre. El riesgo del tema es el reglamento: artículos,
   normativas y categorías de señales.

   La regla del tema: cada marca de la carretera es una DECISIÓN QUE
   ALGUIEN TOMÓ MIRANDO ALGO. Un camión que gotea leche. Un maquinista que
   confunde una luz rota con vía libre. Un ingeniero que quiere que una
   señal se entienda por su silueta cuando está nevada. Nada de esto es
   obvio hasta que alguien lo prueba y funciona.

   Y el short acaba siempre en algo que el lector ve todos los días.
   ========================================================================== */

export const SEMAFOROS: Short[] = [
  {
    id: "primer-semaforo",
    titulo: "El semáforo explotó",
    gancho: "Funcionaba con gas y lo movía un policía a mano. Le estalló en la cara.",
    categoria: "Semáforos",
    color: "var(--clay)",
    encargo: "Un poste de hierro con dos brazos y faroles de gas en un cruce con niebla.",
    fotos: [
      {
        archivo: "Semaphore signals at Droitwich Spa (16729278074).jpg",
        autor: "Señales de brazo de ferrocarril, el aparato del que salió el semáforo. Fotografía de Jeremy Segrott.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Semaphore_signals_at_Droitwich_Spa_(16729278074).jpg",
        foco: "50% 26%",
        alt: "Dos brazos de señal pintados de rojo y blanco sobre un poste de hierro, con las lámparas rojas encendidas.",
      },
      {
        archivo: "\"Farting lane\" gaslight London. (39839843585).jpg",
        autor: "Una farola de gas todavía encendida en una calle de Londres. Fotografía de Loco Steve.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:%22Farting_lane%22_gaslight_London._(39839843585).jpg",
        foco: "50% 28%",
        alt: "Un farol de hierro fundido con la llama de gas encendida dentro del vidrio, en una calle mojada al anochecer.",
      },
      {
        archivo: "Traffic signal at FL20 and FL71.jpg",
        autor: "Un semáforo eléctrico de tres luces colgado sobre un cruce.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Traffic_signal_at_FL20_and_FL71.jpg",
        foco: "50% 40%",
        alt: "Un semáforo de tres focos suspendido de un cable, recortado contra un cielo despejado.",
      },
      {
        archivo: "South Gate of Taipei City at night (51601392336).jpg",
        autor: "Un cruce iluminado de noche en Taipéi. Fotografía de 大頭家族.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:South_Gate_of_Taipei_City_at_night_(51601392336).jpg",
        foco: "50% 50%",
        alt: "Una avenida de noche con los faros de los coches en estelas y los semáforos encendidos sobre la calzada.",
      },
    ],
    entrada:
      "Londres, diciembre de 1868. Frente al Parlamento hay un cruce por el que pasan a la vez carruajes de caballos, carros de reparto, jinetes y peatones intentando llegar al otro lado, y donde mueren atropelladas varias personas cada año sin que nadie sepa muy bien qué hacer. No existe ninguna norma sobre quién pasa primero ni ningún aparato que lo indique. Un ingeniero de ferrocarriles propone entonces trasladar a la calle algo que en las vías lleva décadas funcionando sin problemas: una señal de brazos articulados, con luces de colores para la noche, manejada a mano por un empleado.",
    paginas: [
      {
        rotulo: "El poste de gas",
        texto:
          "El aparato medía unos siete metros, tenía dos brazos que subían y bajaban para ordenar detenerse o avanzar, y de noche encendía dos lámparas de gas con cristales de color, uno rojo y otro verde. No había nada automático: un policía se colocaba en la base y accionaba una palanca según lo que veía venir por cada calle. Funcionó bastante bien durante unas semanas y redujo los atropellos en aquel cruce. Un mes después, una fuga en la tubería que alimentaba las lámparas provocó una explosión que hirió de gravedad en la cara al agente de servicio.",
        destacado: { tipo: "frase", frase: "Un policía accionaba la palanca mirando el tráfico." },
      },
      {
        rotulo: "Cuarenta años",
        texto:
          "El aparato se retiró y la idea se quedó parada casi cuarenta años. Volvió en Estados Unidos ya con electricidad, primero con dos luces y después con la tercera, la ámbar, que se añadió en los años veinte para avisar del cambio, porque los conductores frenaban en seco o se lanzaban a cruzar en el último momento. La disposición acabó normalizándose con el rojo arriba, y no por casualidad: así una persona que no distingue los colores puede guiarse por la posición de la luz encendida, que es lo único fiable para ella.",
        destacado: { tipo: "cifra", cifra: "40", unidad: "años sin volver a intentarlo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Los colores no se eligieron pensando en la calle, sino que se heredaron del ferrocarril, que llevaba décadas usando el rojo para detenerse porque es el que más lejos se distingue con niebla. El verde tuvo que sustituir al blanco después de un accidente en el que se rompió el cristal rojo de una señal, la lámpara quedó blanca y un maquinista lo entendió como vía libre. Aquel cruce de Londres tiene hoy un semáforo corriente, con su columna, sus tres luces y su cuenta atrás, y nadie recuerda que allí empezó todo con una explosión.",
      },
    ],
  },

  {
    id: "linea-blanca",
    titulo: "La línea la pintó un camión",
    gancho: "Un responsable de carreteras vio un camión de leche que goteaba y dejaba un rastro blanco.",
    categoria: "Semáforos",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una carretera de montaña con la línea central recién pintada, vista a ras de suelo.",
    fotos: [
      {
        archivo: "Eix Transversal C-25 04.jpg",
        autor: "La C-25 atravesando las sierras del interior de Cataluña. Fotografía de Jordi Capdevila Solà.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Eix_Transversal_C-25_04.jpg",
        foco: "50% 60%",
        alt: "Carretera de dos carriles con las líneas blancas pintadas, cruzando un valle de montes verdes.",
      },
      {
        archivo: "Eix Transversal C-25 05.jpg",
        autor: "Otro tramo de la misma carretera catalana entre montañas.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Eix_Transversal_C-25_05.jpg",
        foco: "50% 60%",
        alt: "Vista panorámica de una carretera que se pierde entre colinas boscosas.",
      },
      {
        archivo: "Einhausung Lövenich - A1-1645.jpg",
        autor: "Entrada al tramo cubierto de la autopista A1 al oeste de Colonia. Fotografía de Raimond Spekking.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Einhausung_L%C3%B6venich_-_A1-1645.jpg",
        foco: "50% 55%",
        alt: "Autopista de varios carriles con las marcas viales blancas entrando en un tramo con techo de cristal.",
      },
      {
        archivo: "C-58 a Torreblanca - P1080339.jpg",
        autor: "La carretera C-58 a su paso por Torreblanca. Fotografía de Pere López Brosa.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:C-58_a_Torreblanca_-_P1080339.jpg",
        foco: "50% 55%",
        alt: "Calzada con líneas continuas y discontinuas pintadas, vista desde un lateral.",
      },
    ],
    entrada:
      "Estados Unidos, 1911. Las carreteras no tienen todavía ninguna marca pintada encima: son una franja de asfalto o de tierra por la que cada uno circula por donde puede y por donde le parece, y los choques frontales en las curvas ciegas son frecuentes y muy graves. Un responsable de carreteras de un condado va conduciendo detrás de un camión cisterna que pierde leche por una junta mal cerrada, y se pasa kilómetros enteros mirando el rastro blanco que va dejando el camión justo por el centro de la calzada, y viendo lo fácil que es seguirlo.",
    paginas: [
      {
        rotulo: "El reguero",
        texto:
          "El camión iba dejando un reguero blanco justo en el centro del asfalto, y aquel hombre se dio cuenta de que llevaba un buen rato conduciendo pendiente de la línea, manteniéndose a un lado sin pensarlo siquiera. Al llegar a la oficina propuso pintar una raya blanca continua en el centro de una carretera del condado. La primera se pintó ese mismo año, en un tramo con curvas y con mucha niebla. La idea no gustó a todo el mundo: hubo quien dijo que animaría a la gente a ir más deprisa y a apurar las curvas confiando en la pintura.",
        destacado: { tipo: "frase", frase: "Llevaba un rato conduciendo pendiente de aquel rastro." },
      },
      {
        rotulo: "Las reglas",
        texto:
          "Tardó décadas en generalizarse, y cada estado y cada país pintaba lo que le parecía: blanco, amarillo, continuo, a trazos, en el centro o en los bordes. Las normas se fueron fijando a medida que se comprobaba qué funcionaba: la discontinua para poder adelantar, la continua para prohibirlo, las dos juntas para permitirlo solo en un sentido y las líneas de borde, que resultaron reducir los accidentes nocturnos más todavía que la del centro. En los años setenta se añadió la pintura con microesferas de vidrio, que devuelve la luz de los faros al conductor.",
        destacado: { tipo: "cifra", cifra: "1911", unidad: "la primera línea central pintada" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Es una de las medidas de seguridad más baratas que existen y de las que más vidas ha salvado por euro gastado, muy por delante de casi cualquier obra de trazado. Un tramo repintado reduce los accidentes de forma medible durante los meses siguientes, y por eso las carreteras se remarcan siguiendo un calendario fijo. Aquel funcionario no patentó nada ni ganó dinero con la idea, y hay una placa con su nombre en la carretera donde se pintó la primera raya. El gesto que se la dio, seguir una línea blanca sin pensarlo, lo repetimos todos al conducir.",
      },
    ],
  },

  {
    id: "senal-octogonal",
    titulo: "El stop es un octógono",
    gancho: "Se reconoce por la silueta aunque esté nevada, borrada o vista por detrás.",
    categoria: "Semáforos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una señal de stop vista desde atrás, recortada contra un cielo blanco.",
    entrada:
      "Estados Unidos, 1923. Una comisión de ingenieros de carreteras se reúne para poner orden en las señales de tráfico, que hasta entonces fabrica cada estado y cada ayuntamiento a su gusto. Deciden algo que parece un capricho y no lo es: que la forma de la señal indique por sí sola lo peligroso que es aquello que anuncia.",
    paginas: [
      {
        rotulo: "Más lados",
        texto:
          "La regla que fijaron era fácil de recordar: cuantos más lados tenga la señal, mayor es el peligro. El círculo, que en el límite tiene infinitos, se reservó para lo más grave, un paso a nivel de tren; el octógono, con ocho, para la obligación de detenerse; el rombo para las advertencias, y el cuadrado y el rectángulo para la información corriente. La idea de fondo era que un conductor pudiera reaccionar sin necesidad de leer nada, algo importante en un país donde bastantes conductores no leían inglés con soltura.",
        destacado: { tipo: "cifra", cifra: "8", unidad: "lados para la señal de detenerse" },
      },
      {
        rotulo: "La silueta",
        texto:
          "El octógono resultó tener ventajas que no estaban previstas del todo. Se distingue del resto incluso cuando la nieve o el barro tapan la cara pintada, porque la silueta se sigue recortando contra el cielo. Y también se reconoce desde atrás, lo que permite a un conductor saber que quien viene por la calle transversal está obligado a parar. El color tardó más en decidirse: al principio la señal era amarilla, porque los rojos de la época se descoloraban con el sol, y no pasó a ser roja hasta 1954, cuando aparecieron pinturas resistentes.",
        destacado: { tipo: "frase", frase: "Se reconoce por detrás y con la cara tapada de nieve." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La forma se ha exportado a casi todo el planeta, incluidos países que no usan el alfabeto latino y que mantienen el octógono rojo con la palabra en su propio idioma, o directamente en inglés, porque la silueta ya se entiende sola. Es uno de los pocos objetos de diseño que funciona igual en cualquier cultura, junto al enchufe y al pictograma del baño. Y todo salió de aquella reunión de 1923, de una idea que hoy parece obvia: que la forma de un cartel tiene que decir algo antes de que a nadie le dé tiempo a leerlo.",
      },
    ],
  },
];
