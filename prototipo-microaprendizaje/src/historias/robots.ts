import type { Short } from "../shorts";

/* ==========================================================================
   Los robots.

   Máquinas que hacen solas un trabajo, y una palabra que nació en el teatro
   antes que en la industria. El tema se estropea si se cuenta con ciencia
   ficción: aquí interesa lo que hacen de verdad y por qué fallan.

   La regla del tema: se explica QUÉ LES CUESTA A ELLOS y qué nos cuesta a
   nosotros, porque la lista es justo la contraria de lo que la gente supone.
   Y siempre se dice cuánto pesa, cuánto cuesta y qué pasa cuando se
   equivoca, para bajar el asunto al suelo de la fábrica.
   ========================================================================== */

export const ROBOTS: Short[] = [
  {
    id: "la-palabra-robot",
    titulo: "Robot nació en un teatro",
    gancho: "La escribió un dramaturgo checo en 1920, y viene de una palabra que significa trabajo forzado.",
    categoria: "Robots",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un escenario de teatro antiguo vacío con un foco encendido.",
    fotos: [
      {
        archivo: "Narodni Divadlo, National Theater, Prague - 8779.jpg",
        autor: "Los palcos del Teatro Nacional de Praga. Fotografía de Jorge Royan.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Narodni_Divadlo,_National_Theater,_Prague_-_8779.jpg",
        foco: "50% 45%",
        alt: "Palcos vacíos de un teatro con butacas de terciopelo granate, columnas blancas y molduras doradas.",
      },
      {
        archivo: "Glasabstapeln durch Roboter.jpg",
        autor: "Un robot apilando planchas de vidrio a la salida de la cinta transportadora. Fotografía del grupo Grenzebach.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Glasabstapeln_durch_Roboter.jpg",
        foco: "50% 45%",
        alt: "Un brazo mecánico con ventosas levantando una plancha grande de vidrio en una nave industrial.",
      },
      {
        archivo: "Narodni Divadlo, Estates Theater, Prague - 8638.jpg",
        autor: "Las butacas del Teatro de los Estados de Praga, vistas desde arriba. Fotografía de Jorge Royan.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Narodni_Divadlo,_Estates_Theater,_Prague_-_8638.jpg",
        foco: "50% 50%",
        alt: "Cientos de butacas idénticas vistas desde lo alto, formando una retícula que llena toda la imagen.",
      },
      {
        archivo: "Bras robotisés.jpg",
        autor: "Brazos robóticos industriales en vitrinas iluminadas. Fotografía de Gzen92.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Bras_robotis%C3%A9s.jpg",
        foco: "50% 45%",
        alt: "Tres brazos mecánicos blancos articulados dentro de cajas de cristal con luz azul.",
      },
    ],
    entrada:
      "Praga, 1920. Un dramaturgo checo estrena una obra sobre una fábrica situada en una isla que produce trabajadores artificiales de carne sintética, fabricados en serie para hacer las tareas que los humanos no quieren hacer. La obra funciona: se traduce a treinta idiomas en pocos años y se representa desde Nueva York hasta Tokio. Y con ella viaja una palabra nueva, que no existía antes en ninguna lengua del mundo y que hoy usa todo el planeta sin tener ni idea de dónde salió, quién la inventó ni lo que significaba en realidad en su idioma original.",
    paginas: [
      {
        rotulo: "El nombre",
        texto:
          "El autor quería llamarlos con una palabra derivada del latín, pero su hermano, que era pintor, le sugirió otra sacada del checo antiguo. La raíz elegida significa trabajo forzado o servidumbre, el tipo de tarea que hacía un siervo obligado, y de ahí salió el término. Es importante para entender la obra, porque aquellos seres no son máquinas de metal ni tienen tornillos: son organismos artificiales, más parecidos a lo que hoy llamaríamos clones. La imagen del robot metálico llegó después, con el cine y con las portadas de revistas.",
        destacado: { tipo: "frase", frase: "La raíz de la palabra significa trabajo forzado." },
      },
      {
        rotulo: "El argumento",
        texto:
          "La historia que cuenta la obra tampoco es la que la gente supone, ni siquiera entre quienes citan el título. Los robots fabricados se rebelan y acaban con la humanidad, pero el conflicto de fondo no es tecnológico, sino laboral y político. Van apareciendo el paro masivo, los intentos de usarlos como soldados y la discusión sobre si tienen alma o no. El autor repitió siempre que no le interesaban las máquinas, sino lo que ocurre cuando una sociedad convierte a las personas en herramientas y luego se sorprende del resultado.",
        destacado: { tipo: "cifra", cifra: "1920", unidad: "el año del estreno de la obra" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la palabra, que se coló en todos los idiomas del mundo en apenas una década y que hoy nombra desde un brazo industrial hasta un aspirador redondo que da vueltas por el salón. Quedaron también las tres leyes de la robótica, escritas veinte años más tarde por un escritor de ciencia ficción, que no son ninguna norma técnica real sino un recurso literario para construir historias. Y quedó una ironía. La obra que dio nombre a los robots trataba precisamente de lo contrario de lo que hacen hoy, porque aquellos seres eran biológicos, no máquinas de acero con cables dentro.",
      },
    ],
  },
  {
    id: "lo-facil-y-lo-dificil",
    titulo: "Al robot le cuesta lo fácil",
    gancho: "Jugar bien al ajedrez resultó fácil de programar. Recoger un calcetín del suelo sigue siendo dificilísimo.",
    categoria: "Robots",
    color: "var(--ochre)",
    encargo: "Una pinza robótica intentando agarrar un objeto blando sobre una mesa.",
    fotos: [
      {
        archivo: "Robotic Arm Polishing Guitars at Martin Guitar Factory.jpg",
        autor: "Un brazo robótico sujeta una caja de guitarra contra la pulidora en la fábrica de Martin. Fotografía de Henrysz.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Robotic_Arm_Polishing_Guitars_at_Martin_Guitar_Factory.jpg",
        foco: "45% 50%",
        alt: "Brazo robótico amarillo sosteniendo una guitarra contra un disco de pulir que gira a gran velocidad.",
      },
      {
        archivo: "TOPIO 3 3.JPG",
        autor: "TOPIO, un robot humanoide diseñado para jugar al pimpón, en una feria de Tokio en 2009.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:TOPIO_3_3.JPG",
        foco: "50% 45%",
        alt: "Robot humanoide de aspecto articulado sujetando una pala de pimpón junto a una mesa.",
      },
      {
        archivo: "TOPIO 3.jpg",
        autor: "El mismo robot humanoide, de cuerpo entero, en la feria IREX de Tokio.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:TOPIO_3.jpg",
        foco: "50% 45%",
        alt: "Robot humanoide de pie con los brazos extendidos, con las articulaciones y los cables a la vista.",
      },
      {
        archivo: "Robots in Robot Dream Exhibition Hong Kong.JPG",
        autor: "Robots expuestos en una muestra en Hong Kong.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Robots_in_Robot_Dream_Exhibition_Hong_Kong.JPG",
        foco: "50% 50%",
        alt: "Varios robots de distintos tamaños colocados juntos en una sala de exposición.",
      },
    ],
    entrada:
      "Investigación en inteligencia artificial, con una observación formulada en los años ochenta del siglo XX y que se sigue cumpliendo punto por punto hoy. Varios investigadores llegaron a la vez, cada uno por su lado, a una conclusión llamativa y bastante humillante para el oficio. Las tareas que a las personas nos parecen difíciles y nos dan prestigio, como el cálculo con números grandes, la lógica formal o el ajedrez, resultan relativamente fáciles de programar en una máquina y se resolvieron pronto. En cambio, las que hace cualquier niño de dos años sin el menor esfuerzo y sin que nadie se lo aplauda son justamente las que más se resisten, y algunas siguen sin resolverse.",
    paginas: [
      {
        rotulo: "El calcetín",
        texto:
          "Agarrar un calcetín del suelo exige resolver a la vez una cantidad enorme de problemas. Hay que reconocerlo entre otras cosas parecidas y calcular dónde está en tres dimensiones a partir de imágenes planas. Después toca decidir por dónde cogerlo, prever cómo se deformará al levantarlo y ajustar la fuerza para no romperlo ni dejarlo caer. Un objeto blando cambia de forma cuando lo tocas, así que el plan hay que rehacerlo mientras se ejecuta. Nuestro cerebro hace todo eso sin que nos demos cuenta, y por eso creemos que es sencillo.",
        destacado: { tipo: "frase", frase: "Un objeto blando cambia de forma justo cuando lo tocas." },
      },
      {
        rotulo: "La explicación",
        texto:
          "La razón que suele darse es evolutiva y tiene sentido. Llevamos millones de años perfeccionando la vista, el equilibrio y la manipulación de objetos, así que esas habilidades están tan afinadas y son tan automáticas que ni las notamos. En cambio, jugar al ajedrez o multiplicar números grandes son cosas que la especie hace desde hace unos pocos miles de años, con un esfuerzo consciente enorme. Lo que a nosotros nos parece un logro intelectual resulta ser, en términos de computación, bastante más simple que caminar por una habitación desordenada.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "años tiene un niño que ya supera al robot" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una explicación bastante buena de por qué las fábricas están llenas de robots y las casas siguen sin tenerlos. Un brazo industrial trabaja en un entorno preparado para él, con piezas idénticas que llegan siempre en la misma posición y a la misma altura, mientras que una casa es un desorden distinto cada día. Quedó también la razón de que los avances recientes vengan del aprendizaje automático y no de programar reglas. Para agarrar objetos variados funciona mucho mejor entrenar con millones de intentos que escribir instrucciones para cada caso posible.",
      },
    ],
  },
  {
    id: "el-brazo-de-la-fabrica",
    titulo: "Dos toneladas de robot",
    gancho: "Trabajaba en una fundición sacando piezas al rojo vivo, un puesto en el que la gente se quemaba.",
    categoria: "Robots",
    color: "var(--slate)",
    encargo: "Un brazo robótico naranja en una línea de montaje de coches.",
    entrada:
      "Nueva Jersey, 1961. En la fábrica de una empresa de automóviles empieza a trabajar el primer robot industrial de la historia, un brazo hidráulico de dos toneladas controlado por un tambor magnético. Su tarea consiste en sacar piezas de metal fundido de una máquina de inyección y apilarlas ordenadamente, un trabajo caliente, repetitivo y bastante peligroso para una persona.",
    paginas: [
      {
        rotulo: "Las tres D",
        texto:
          "Aquel primer puesto marcó el criterio que se sigue usando para decidir qué se automatiza, resumido en tres palabras inglesas que empiezan por la misma letra: sucio, aburrido y peligroso. Un robot no se cansa, no se distrae, no protesta y no le importan ni el calor ni el polvo, así que gana con claridad en cualquier tarea repetitiva de precisión moderada. En cambio pierde en cuanto hay que improvisar, decidir con información incompleta o manipular algo que no siempre viene en la misma posición. Ese reparto de tareas entre personas y máquinas sigue vigente sesenta años después, con muy pocos cambios.",
        destacado: { tipo: "frase", frase: "Sucio, aburrido y peligroso: eso es lo que se automatiza." },
      },
      {
        rotulo: "La jaula",
        texto:
          "Durante décadas, los robots industriales trabajaron encerrados en jaulas con la puerta enclavada, porque son ciegos y muy fuertes. Siguen su trayectoria programada sin saber si hay alguien delante, y un brazo de esos mata sin enterarse. La novedad de los últimos años son los llamados robots colaborativos, más lentos y equipados con sensores de fuerza que detectan cualquier contacto y detienen el brazo en milisegundos. Eso permite tenerlos trabajando al lado de una persona sin jaula de por medio, aunque a costa de moverse bastante más despacio y de levantar mucho menos peso.",
        destacado: { tipo: "cifra", cifra: "1961", unidad: "el año del primer robot industrial" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un mundo con más de tres millones de robots industriales instalados, la mayoría en la industria del automóvil y de la electrónica, y muy concentrados en unos pocos países. Quedó también un debate sobre el empleo que dura desde entonces, con datos menos claros de lo que dicen los dos bandos. Hay sectores donde la automatización destruyó puestos y otros donde simplemente los cambió de sitio y de nombre. Y quedó el criterio original de 1961, que no ha cambiado en seis décadas: se automatiza primero lo que quema, lo que ensucia y lo que aburre.",
      },
    ],
  },
];
