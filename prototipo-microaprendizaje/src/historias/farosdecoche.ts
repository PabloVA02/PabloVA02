import type { Short } from "../shorts";

/* ==========================================================================
   Los faros de coche.

   Un aparato que tiene que alumbrar mucho sin cegar a nadie, que es una
   contradicción. El tema se estropea si se cuenta como historia del
   automóvil, que ya está en motor.ts.

   La regla del tema: todo sale del MISMO CONFLICTO, ver más contra
   deslumbrar menos, y ese conflicto se plantea antes de cada solución.
   Siempre se explica dónde acaba el haz, no solo dónde empieza.
   ========================================================================== */

export const FAROS_DE_COCHE: Short[] = [
  {
    id: "deslumbrar-al-de-enfrente",
    titulo: "Por qué el faro no ciega",
    gancho: "Un faro que ilumina bien la carretera ciega al que viene de frente. Toda la historia es ese equilibrio.",
    categoria: "Tecnología",
    color: "var(--slate)",
    encargo: "Haz de un faro de cruce proyectado en una pared, con el corte horizontal marcado.",
    /* El faro por fuera, la bombilla por dentro, el haz puesto en la carretera
       y el diodo del final. La bombilla es la que hace el short: en ella se ve
       la cazoleta metálica que tapa la mitad de arriba de la luz. */
    fotos: [
      {
        archivo: "Light fantastic (854006082).jpg",
        autor:
          "El faro de un coche visto de cerca: cada luz sale por una lente redonda, y la pantalla que le corta la mitad de arriba al haz va justo detrás. Fotografía de Andrew Fogg, 2007.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Light_fantastic_(854006082).jpg",
        foco: "50% 50%",
        alt: "Primer plano del faro de un coche, con dos lentes redondas grandes rodeadas de aros luminosos de color dorado.",
      },
      {
        archivo: "Halogenlamph4mayak.JPG",
        autor:
          "Una bombilla H4, la de dos filamentos: uno alumbra lejos y el otro, tapado por debajo por una cazoleta metálica, alumbra corto y bajo. Fotografía de Racer009, 2014.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Halogenlamph4mayak.JPG",
        foco: "50% 20%",
        alt: "Una bombilla de coche de cristal transparente vista muy de cerca, con dos filamentos en espiral dentro y una pequeña copa metálica bajo uno de ellos.",
      },
      {
        archivo: "Dülmen, Kirchspiel, Börnste, BMW Mini -- 2019 -- 7207-13.jpg",
        autor:
          "Un coche con las luces de cruce encendidas en una carretera de Renania del Norte-Westfalia, donde se circula por la derecha y el haz alumbra más lejos por ese lado. Fotografía de Dietmar Rabich, 2019.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Kirchspiel,_B%C3%B6rnste,_BMW_Mini_--_2019_--_7207-13.jpg",
        foco: "45% 60%",
        alt: "Un coche pequeño con los faros encendidos en una carretera estrecha entre árboles, al anochecer, con troncos apilados a un lado.",
      },
      {
        archivo: "Audi TT 8S Matrix-LED-Scheinwerfer Abblendlicht LED-Tagfahrlicht.jpg",
        autor:
          "Un faro de diodos encendido en la luz de cruce, de 2014. La luz sale de puntos muy pequeños y muy blancos, y eso es lo que hace que moleste más aunque cumpla la norma. Fotografía de Mario von Berg.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Audi_TT_8S_Matrix-LED-Scheinwerfer_Abblendlicht_LED-Tagfahrlicht.jpg",
        foco: "50% 50%",
        alt: "Un faro moderno encendido sobre fondo negro, con una tira fina de luces blancas y un bloque de diodos brillando en el centro.",
      },
    ],
    entrada:
      "Estados Unidos, 1924. Los coches llevan ya faros eléctricos potentes y cada noche se producen accidentes porque los conductores se ciegan unos a otros. El problema no tiene una salida evidente: la misma luz que hace falta para ver la carretera es la que deslumbra al que viene de frente. Se prueba con cristales de colores y con rejillas delante, y todo eso quita tanta luz que no se ve nada. La solución que se impone es un faro con dos filamentos dentro de la misma bombilla. Uno alumbra lejos y el otro alumbra más abajo y más cerca, y un interruptor de pie decide cuál de los dos se enciende. Ese pedal sobrevivió en los coches durante medio siglo, hasta bien entrados los años setenta.",
    paginas: [
      {
        rotulo: "El corte",
        texto:
          "Una luz de cruce no es simplemente una luz más floja, aunque lo parezca desde dentro del coche. Lo que la define es un borde horizontal muy marcado por encima del cual no sale nada. Ese borde se consigue con una pantalla metálica dentro del faro que corta la mitad superior del haz. Si se apunta un faro de cruce a una pared se ve perfectamente esa línea recta de sombra. La línea no es del todo horizontal, porque sube un poco en el lado de la cuneta. Así se alumbra el arcén y las señales sin que la luz llegue a los ojos de nadie.",
        destacado: { tipo: "frase", frase: "Un faro de cruce se define por dónde deja de alumbrar." },
      },
      {
        rotulo: "Cambiar de país",
        texto:
          "Ese escalón asimétrico explica un problema que aparece al cruzar en coche a un país que conduce al revés. Un coche continental alumbra hacia la derecha, que en el Reino Unido es justo el carril contrario. El faro apunta entonces a la cara del que viene de frente en vez de al arcén. La solución clásica son unas pegatinas negras que tapan la parte del haz que sobra. Los coches modernos traen un tornillo o una opción en el menú para girar esa pantalla interior. Llevar los faros mal reglados es motivo de multa en casi toda Europa, aunque casi nadie lo sabe.",
        destacado: { tipo: "cifra", cifra: "1924", unidad: "el año de la bombilla con dos filamentos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una norma que fija con precisión cuánta luz puede haber en cada punto delante del coche. Los faros se homologan midiendo el haz sobre una pantalla a veinticinco metros en un túnel oscuro. Quedó también el problema al revés, porque un faro mal ajustado alumbra el suelo justo delante. Eso obliga a la pupila a cerrarse y hace ver todavía menos a lo lejos. Y quedó una queja moderna que llena los buzones de las autoridades de tráfico. Los faros de diodos deslumbran más aunque cumplan la norma, porque su luz es blanca y muy puntual.",
      },
    ],
  },
  {
    id: "el-faro-que-gira",
    titulo: "Faros que seguían la curva",
    gancho: "Un faro fijo alumbra recto en una curva, es decir, a la cuneta. La idea de girarlos es de 1928.",
    categoria: "Tecnología",
    color: "var(--clay)",
    encargo: "Coche de los años veinte con tres faros delanteros, el central algo girado.",
    fotos: [
      {
        archivo: "Macro of the vintage car headlight in Cancale (Unsplash).jpg",
        autor: "El faro redondo de un coche antiguo, con su aro cromado. Fotografía de Erwan Hesry.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Macro_of_the_vintage_car_headlight_in_Cancale_(Unsplash).jpg",
        foco: "50% 50%",
        alt: "Primer plano de un faro circular con el cristal estriado, engastado en una carrocería color crema.",
      },
      {
        archivo: "Car headlight beams through the rain 01.jpg",
        autor: "Los haces de unos faros abriéndose paso bajo la lluvia. Fotografía de Bright Kwame Ayisi.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Car_headlight_beams_through_the_rain_01.jpg",
        foco: "50% 50%",
        alt: "Dos conos de luz blanca atravesando la lluvia en la oscuridad, con el asfalto brillando debajo.",
      },
      {
        archivo: "Cunningham Special, Bj. 1924, Scheinwerfer.JPG",
        autor: "Los faros de un Cunningham Special de 1924. Fotografía de Lothar Spurzem.",
        licencia: "CC BY-SA 2.0 de",
        fuente: "https://commons.wikimedia.org/wiki/File:Cunningham_Special,_Bj._1924,_Scheinwerfer.JPG",
        foco: "50% 50%",
        alt: "Dos faros grandes de latón montados sobre una barra delante del radiador de un coche antiguo.",
      },
      {
        archivo: "Car headlight beams through the rain 2.jpg",
        autor: "Otro coche con las luces encendidas en una noche de lluvia. Fotografía de Bright Kwame Ayisi.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Car_headlight_beams_through_the_rain_2.jpg",
        foco: "50% 50%",
        alt: "Los faros encendidos de un coche visto de frente, con las gotas de lluvia cruzando el haz.",
      },
    ],
    entrada:
      "Francia y Estados Unidos, 1928. Un fabricante saca al mercado un coche cuyo faro central gira con el volante, de modo que la luz sigue la curva en vez de apuntar siempre recta hacia delante. La idea resuelve un problema que cualquiera que haya conducido de noche por carretera de montaña ha sufrido sin ponerle nombre: en una curva cerrada, el coche apunta a un sitio y la carretera se va hacia el otro, así que los faros alumbran la cuneta y el resto queda a oscuras.",
    paginas: [
      {
        rotulo: "Alumbrar la curva",
        texto:
          "En una curva cerrada, el coche apunta hacia un sitio y va a llegar a otro distinto. El faro alumbra la cuneta exterior mientras el trozo de asfalto que importa se queda a oscuras. Aquel invento conectaba el faro central con la dirección mediante una barra y unas palancas. Al girar el volante, el faro giraba con él y el haz seguía el trazado de la carretera. Funcionaba y desapareció, porque el mecanismo se desajustaba y las normas de la época no lo contemplaban. Un faro que se mueve era, sobre el papel, un faro fuera de reglaje.",
        destacado: { tipo: "frase", frase: "El coche apunta a un sitio y va a llegar a otro." },
      },
      {
        rotulo: "La vuelta",
        texto:
          "La idea volvió setenta años después con motores eléctricos pequeños en vez de barras. El sistema mide el ángulo del volante y la velocidad, y gira el faro unos grados a cada lado. La velocidad importa porque a poca velocidad interesa alumbrar ancho y a mucha interesa alumbrar lejos. Los faros de diodos han llevado la idea mucho más allá sin mover ninguna pieza. Un faro moderno lleva decenas de diodos independientes que se encienden y se apagan por separado. Con una cámara detectando los coches de delante, el faro apaga solo los diodos que les darían.",
        destacado: { tipo: "cifra", cifra: "1928", unidad: "el año del primer faro que giraba" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una tecnología que permite llevar la luz larga puesta permanentemente sin molestar a nadie. El faro va recortando un agujero de sombra alrededor de cada coche que detecta la cámara. Ese agujero se mueve con el otro vehículo, y el resto de la carretera sigue iluminada. Quedó también una diferencia legal curiosa, porque esa tecnología estuvo prohibida años en Estados Unidos. Su norma exigía un faro de cruce y otro de carretera, y no contemplaba nada intermedio. Hizo falta cambiar la ley para permitir un faro que decide por sí mismo dónde alumbra.",
      },
    ],
  },
  {
    id: "por-que-el-faro-es-amarillo",
    titulo: "Faros amarillos en Francia",
    gancho: "Durante casi sesenta años, un coche francés se distinguía a un kilómetro. El motivo oficial cambió varias veces.",
    categoria: "Historia",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Coche antiguo francés de noche con los dos faros amarillos encendidos.",
    entrada:
      "Francia, 1936. Un decreto obliga a que todos los coches matriculados en el país lleven los faros de color amarillo, cosa que no pasa en ningún otro sitio de Europa. La norma duró hasta 1993 y generó una imagen inconfundible en las carreteras del continente. Las razones que se dieron fueron varias y no todas resistieron el paso del tiempo.",
    paginas: [
      {
        rotulo: "Menos azul",
        texto:
          "El argumento técnico partía de una observación cierta sobre cómo se comporta la luz azul. La luz de longitud de onda corta se dispersa más al chocar con gotas de agua o con polvo. Por eso el cielo es azul y por eso una niebla devuelve la luz blanca hacia el conductor. Quitando el azul con un filtro amarillo, se dispersa menos y el conductor ve mejor con niebla. El argumento se sostiene y tiene una pega, porque el filtro también quita una parte de la luz. Un faro amarillo alumbra alrededor de un veinte por ciento menos que el mismo faro sin filtro.",
        destacado: { tipo: "frase", frase: "El filtro quita el azul y también quita luz." },
      },
      {
        rotulo: "El otro motivo",
        texto:
          "Los historiadores señalan un segundo motivo que casi nunca aparecía en los textos oficiales. Un faro amarillo identifica a un coche francés a mucha distancia y de noche. En los años treinta, con la tensión creciendo en Europa, poder distinguir vehículos propios tenía valor militar. La norma se mantuvo mucho después de que ese motivo dejara de tener sentido. Se acabó por armonización europea, porque un mercado único de coches no admite un color por país. Los estudios de la época tampoco encontraron diferencias claras de accidentes entre un color y otro.",
        destacado: { tipo: "cifra", cifra: "1993", unidad: "el año en que se permitió el faro blanco" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el amarillo obligatorio en las carreras de resistencia durante muchos años más. Servía para distinguir a los coches lentos de los rápidos en una pista compartida de noche. Quedó también la luz antiniebla, que sigue siendo amarilla en muchos modelos por el mismo motivo físico. Va montada muy abajo y apuntando casi al suelo, que es donde la niebla es menos densa. Y quedó una moda que vuelve cada pocos años entre aficionados a los coches clásicos. Ponerle un filtro amarillo a un coche moderno es ilegal en casi toda Europa.",
      },
    ],
  },
];
