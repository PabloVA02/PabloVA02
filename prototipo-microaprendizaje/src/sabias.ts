/* ==========================================================================
   ¿SABÍAS QUE…? — la sección de datos curiosos

   Pablo, el 2 de septiembre: «una frase corta que guste leerla, en grande, con
   letras grandes y vistosas, y si quieres profundizar un poco más existirá una
   pestaña donde se abrirá más texto. Con vocabulario para todos los públicos y
   sobre todo que divierta el leerlo».

   LA DIFERENCIA CON UN SHORT, que es lo que decide si algo entra aquí o allí:
   un short explica un mecanismo y necesita varias pantallas; esto se agota en
   una frase. Si algo pide dos párrafos para entenderse, no es un «¿sabías
   que…?», es un short.

   Y AUN ASÍ NO ES TRIVIA. La regla de la casa —«un dato vale si reordena algo
   que el lector creía, no si solo es curioso»— sigue mandando aquí: cada
   entrada tiene que dejarte pensando «pues yo creía otra cosa». Por eso hay
   tantos desmentidos: los vikingos, Napoleón, la muralla. Un dato que solo
   sirva para rellenar es peor que uno menos, porque enseña a saltarse la
   sección.

   TODOS ESTÁN COMPROBADOS. Los que no se pudieron verificar bien se cayeron,
   no se suavizaron con un «se dice que»: el color naranja de la zanahoria y la
   historia de la casa de Orange se quedaron fuera por eso.

   EL TITULAR es lo que se pinta en grande, así que va corto y con la sorpresa
   al final. `realce` es el trozo que se tiñe de color dentro de él, y tiene
   que aparecer TAL CUAL dentro del titular o no se pinta.
   ========================================================================== */

/* La ilustración va IMPORTADA y no en `public/`, y no es un capricho de
   organización: así la resuelve el empaquetador, y eso es lo que hace que la
   misma línea valga para los dos destinos. En la compilación del artefacto
   —`assetsInlineLimit` sin tope— se convierte en la imagen entera metida en el
   HTML, que es la única forma de que se vea dentro del simulador de Pablo, con
   su política de seguridad cerrada. En la de la web sale un fichero con su
   huella, que se cachea. Un fichero en `public/` no haría ni lo uno ni lo
   otro. */
import sagradaFamilia from "./ilustraciones/sagrada-familia.avif";

export type Dato = {
  id: string;
  /** La frase grande. Corta, y lo que sorprende al final. */
  titular: string;
  /** El trozo del titular que se tiñe. Literal, o no se encuentra. */
  realce?: string;
  /** Dos palabras que sitúan, para que se vea de qué va antes de leer. */
  tema: string;
  /** El acento, de la paleta de la app. */
  color: string;
  /** El porqué. Tres o cuatro frases, en palabras de la calle. */
  mas: string[];
  /**
   * UNA ILUSTRACIÓN, cuando la hay. Opcional a propósito.
   *
   * Un dato bueno se sostiene con la frase sola, y una imagen de archivo al
   * lado lo empequeñece. Por eso la sección nació sin fotos. Pero una
   * ilustración HECHA para ese dato es otra cosa: no compite con la frase, la
   * pone en un sitio.
   *
   * La primera es la de la Sagrada Familia, que trajo Pablo el 2 de
   * septiembre. Se pinta a sangre por arriba y se desvanece hacia el fondo,
   * sin marco: su papel es del mismo crema que la sección, así que las dos
   * cosas se funden en vez de pegarse.
   */
  imagen?: string;
};

export const DATOS: Dato[] = [
  {
    id: "sagrada-familia",
    titular: "La Sagrada Familia se construyó 137 años sin permiso de obra",
    realce: "137 años sin permiso de obra",
    tema: "Arquitectura",
    color: "var(--clay)",
    mas: [
      "Las obras empezaron el 19 de marzo de 1882. El permiso se pidió tres años después al ayuntamiento de Sant Martí de Provençals, que entonces era un pueblo aparte, y allí se quedó: nadie lo resolvió, el pueblo se anexionó a Barcelona en 1897 y el papel se perdió por el camino.",
      "Nadie se dio cuenta en más de un siglo. Cuando el ayuntamiento abrió expediente, la junta que construye el templo acordó pagar treinta y seis millones de euros por los servicios y las obras de alrededor, y la licencia se firmó por fin en junio de 2019. Ciento treinta y siete años levantando el monumento más visitado de la ciudad sin el papel que le piden a cualquiera para cambiar unas ventanas.",
    ],
    imagen: sagradaFamilia,
  },
  {
    id: "ferrari-rojo",
    titular: "Los Ferrari son rojos porque a Italia le tocó ese color",
    realce: "le tocó ese color",
    tema: "Motor",
    color: "var(--clay)",
    mas: [
      "Antes de que existieran los patrocinadores, en las carreras internacionales no elegía el color cada escudería: lo tenía asignado su país. Italia, rojo. Francia, azul. Reino Unido, verde. Alemania, blanco, y después el plata de dejar el aluminio a la vista.",
      "Así que Enzo Ferrari no escogió el rojo. Se lo encontró puesto. Lo que sí hizo fue quedárselo cuando la norma dejó de existir, y hoy es lo primero que dice cualquiera si le preguntas de qué color es un Ferrari.",
    ],
  },
  {
    id: "caballo-ferrari",
    titular: "El caballo de Ferrari lo llevaba pintado un piloto de guerra",
    realce: "un piloto de guerra",
    tema: "Motor",
    color: "var(--ochre)",
    mas: [
      "Francesco Baracca fue el aviador italiano más famoso de la Primera Guerra Mundial, y llevaba un caballo negro encabritado pintado en el fuselaje. Lo derribaron en 1918, con treinta y un aviones enemigos a sus espaldas.",
      "Años después, la madre de Baracca conoció a un joven Enzo Ferrari y le dijo que pusiera el caballo de su hijo en sus coches, que le daría suerte. Él lo hizo y le añadió un fondo amarillo, que es el color de Módena, su ciudad.",
    ],
  },
  {
    id: "india",
    titular: "El país con más gente del mundo ya no es China",
    realce: "ya no es China",
    tema: "El mundo",
    color: "var(--sage)",
    mas: [
      "India la adelantó en 2023 y hoy anda por los mil cuatrocientos cincuenta millones de personas. China llevaba en cabeza desde que hay cuentas fiables.",
      "Y la distancia va a seguir creciendo un tiempo, porque en China nacen cada vez menos niños mientras que en India la población todavía es joven. Uno de cada seis habitantes del planeta es indio.",
    ],
  },
  {
    id: "cleopatra",
    titular: "Cleopatra vivió más cerca de la llegada a la Luna que de las pirámides",
    realce: "más cerca de la llegada a la Luna",
    tema: "Historia",
    color: "var(--ochre)",
    mas: [
      "La Gran Pirámide se terminó hacia el año 2560 antes de Cristo. Cleopatra murió en el 30 antes de Cristo. Entre las dos hay dos mil quinientos años.",
      "Del día que murió Cleopatra al día que Armstrong pisó la Luna hay dos mil. O sea que ella estaba quinientos años más cerca del cohete que de la pirámide, y la pirámide ya era una antigualla cuando ella nació.",
    ],
  },
  {
    id: "tiburones",
    titular: "Los tiburones son más antiguos que los árboles",
    realce: "más antiguos que los árboles",
    tema: "Naturaleza",
    color: "var(--slate)",
    mas: [
      "Los primeros tiburones andaban por el mar hace unos cuatrocientos veinte millones de años. Los primeros árboles con tronco de verdad aparecieron hace unos trescientos ochenta y cinco.",
      "Treinta y cinco millones de años de diferencia. Cuando el primer árbol echó raíces, los tiburones llevaban ya una eternidad haciendo lo mismo que hacen hoy.",
    ],
  },
  {
    id: "venus",
    titular: "En Venus un día dura más que un año",
    realce: "más que un año",
    tema: "Espacio",
    color: "var(--plum)",
    mas: [
      "Venus tarda doscientos cuarenta y tres días terrestres en dar una vuelta sobre sí mismo, y solo doscientos veinticinco en dar la vuelta al Sol.",
      "O sea que allí te da tiempo a cumplir años antes de ver amanecer. Y por si fuera poco gira al revés que los demás planetas, así que el Sol sale por el oeste.",
    ],
  },
  {
    id: "eiffel",
    titular: "La torre Eiffel es más alta en verano",
    realce: "más alta en verano",
    tema: "Ingeniería",
    color: "var(--clay)",
    mas: [
      "Está hecha de hierro, y el hierro se estira con el calor. Entre un día de invierno y uno de verano la torre gana unos quince centímetros.",
      "También se inclina un poco: la cara que da el sol se calienta antes que la de la sombra, así que la punta se aparta unos centímetros del lado soleado. Vuelve sola al ponerse el sol.",
    ],
  },
  {
    id: "platano-baya",
    titular: "El plátano es una baya y la fresa no",
    realce: "y la fresa no",
    tema: "Naturaleza",
    color: "var(--sage)",
    mas: [
      "Para un botánico, una baya es un fruto carnoso que sale de una sola flor y lleva las semillas dentro. El plátano cumple. El tomate y el aguacate también.",
      "La fresa no. Lo rojo que te comes es la base de la flor, hinchada; los frutos de verdad son esos puntitos amarillos de fuera, y cada uno lleva su semilla. Te comes doscientos frutos por fresa.",
    ],
  },
  {
    id: "pulpo",
    titular: "Un pulpo tiene tres corazones y la sangre azul",
    realce: "tres corazones",
    tema: "Naturaleza",
    color: "var(--slate)",
    mas: [
      "Dos corazones empujan la sangre hacia las branquias y el tercero la reparte por el resto del cuerpo. Y es azul porque para transportar el oxígeno usa cobre en vez de hierro, que es lo que a nosotros nos pone la sangre roja.",
      "Lo mejor es lo que pasa cuando nada: el corazón grande se le para. Por eso un pulpo prefiere andar por el fondo a nadar, porque nadar le agota de una manera que a nosotros nos costaría explicar.",
    ],
  },
  {
    id: "arboles-estrellas",
    titular: "Hay más árboles en la Tierra que estrellas en nuestra galaxia",
    realce: "que estrellas en nuestra galaxia",
    tema: "Naturaleza",
    color: "var(--sage)",
    mas: [
      "El recuento más serio que se ha hecho da unos tres billones de árboles en el planeta. La Vía Láctea tiene entre cien mil y cuatrocientos mil millones de estrellas.",
      "O sea que por cada estrella de nuestra galaxia hay como diez árboles aquí abajo. Aun así hemos talado casi la mitad de los que había cuando empezó la agricultura.",
    ],
  },
  {
    id: "saturno",
    titular: "Saturno flotaría en una bañera lo bastante grande",
    realce: "flotaría",
    tema: "Espacio",
    color: "var(--plum)",
    mas: [
      "Es el único planeta del sistema solar que pesa menos que el agua: unos setenta gramos por cada cien de agua. Es casi todo hidrógeno y helio, y muy poco apretado.",
      "La bañera tendría que medir ciento veinte mil kilómetros de ancho, así que el chiste no se puede comprobar. Pero el número es real.",
    ],
  },
  {
    id: "rayo",
    titular: "Un rayo está cinco veces más caliente que la superficie del Sol",
    realce: "cinco veces más caliente",
    tema: "Espacio",
    color: "var(--ochre)",
    mas: [
      "El aire por el que pasa un rayo llega a unos treinta mil grados. La superficie del Sol está a cinco mil quinientos.",
      "Lo que pasa es que dura unas millonésimas de segundo y es finísimo, así que no calienta nada a su alrededor. El trueno es justamente eso: el aire estallando de golpe al calentarse tan deprisa.",
    ],
  },
  {
    id: "muralla",
    titular: "La muralla china no se ve desde el espacio",
    realce: "no se ve",
    tema: "Historia",
    color: "var(--clay)",
    mas: [
      "Es larguísima, sí, pero estrecha: unos pocos metros de ancho, y del color de la tierra que tiene al lado. Verla desde la órbita sería como distinguir un pelo humano a dos kilómetros.",
      "Lo han desmentido los propios astronautas, chinos incluidos. La frase circula desde antes de que nadie hubiera subido, que es lo que la hace curiosa: se dio por buena durante décadas sin que nadie pudiera comprobarla.",
    ],
  },
  {
    id: "vikingos",
    titular: "Los vikingos nunca llevaron cascos con cuernos",
    realce: "nunca",
    tema: "Historia",
    color: "var(--slate)",
    mas: [
      "No ha aparecido ni uno solo en ninguna excavación, y se han excavado muchas. Con cuernos, un casco es peor casco: le da al enemigo dos asas para tirarte la cabeza hacia atrás.",
      "La imagen viene del vestuario que un diseñador alemán hizo en 1876 para una ópera de Wagner. Siglo y medio después, sale en todos los dibujos animados.",
    ],
  },
  {
    id: "napoleon",
    titular: "Napoleón no era bajo, era normal",
    realce: "era normal",
    tema: "Historia",
    color: "var(--ochre)",
    mas: [
      "Medía un metro sesenta y ocho, que era justo la media de un francés de su época. La leyenda viene de un lío de medidas: en Francia se apuntó su altura en pulgadas francesas, que eran más largas que las inglesas, y al traducirlo salió un hombre mucho más bajo.",
      "Ayudó que los granaderos de su guardia fueran elegidos por altos, así que en los retratos siempre sale rodeado de gigantes.",
    ],
  },
  {
    id: "guerra-corta",
    titular: "La guerra más corta de la historia duró treinta y ocho minutos",
    realce: "treinta y ocho minutos",
    tema: "Historia",
    color: "var(--clay)",
    mas: [
      "Zanzíbar contra el Reino Unido, el 27 de agosto de 1896. Había muerto el sultán y subió al trono uno que a los británicos no les convenía. Le dieron un ultimátum de unas horas.",
      "A las nueve y dos minutos de la mañana empezó el bombardeo. A las nueve y cuarenta se había acabado todo. El sultán se escapó por una puerta trasera y acabó en el exilio.",
    ],
  },
  {
    id: "nintendo",
    titular: "Nintendo empezó haciendo barajas en 1889",
    realce: "en 1889",
    tema: "Historia",
    color: "var(--plum)",
    mas: [
      "Cartas hanafuda pintadas a mano, en Kioto, casi un siglo antes de que existiera un videojuego. La empresa es más vieja que el cine.",
      "Antes de dar con las consolas probó de todo: una cadena de hoteles por horas, una compañía de taxis y hasta arroz instantáneo. Todo salió mal. Lo siguiente que probaron fueron los juguetes.",
    ],
  },
  {
    id: "flamenco",
    titular: "Un flamenco nace gris",
    realce: "nace gris",
    tema: "Naturaleza",
    color: "var(--clay)",
    mas: [
      "El rosa no lo trae puesto: se lo come. Los crustáceos y las algas de los que vive llevan unos pigmentos que se le van depositando en las plumas, y tarda un par de años en teñirse del todo.",
      "En un zoo, si no le dan esa comida, el flamenco se vuelve blanco. Y cuando una madre está criando pierde color, porque le pasa parte del pigmento a la cría.",
    ],
  },
  {
    id: "miel",
    titular: "La miel es el único alimento que no se estropea nunca",
    realce: "no se estropea nunca",
    tema: "Naturaleza",
    color: "var(--ochre)",
    mas: [
      "Casi no tiene agua y es ácida, así que una bacteria que caiga dentro no puede ni beber ni multiplicarse. Además las abejas le añaden una sustancia que remata a lo que quede vivo.",
      "En tumbas egipcias se han encontrado tarros de miel de hace tres mil años que seguían siendo miel. Lo único que le pasa con el tiempo es que se vuelve dura y opaca, y eso se arregla con un baño de agua caliente.",
    ],
  },
  {
    id: "groenlandia",
    titular: "Groenlandia es catorce veces más pequeña que África",
    realce: "catorce veces",
    tema: "El mundo",
    color: "var(--slate)",
    mas: [
      "En el mapa de toda la vida parecen del mismo tamaño. Ese mapa se dibujó en 1569 para navegar, y para conseguir que un rumbo recto saliera como una línea recta hay que estirar lo que está lejos del ecuador.",
      "Cuanto más al norte o al sur, más se infla. Groenlandia sale enorme, África sale pequeña, y Europa parece mucho más grande de lo que es.",
    ],
  },
  {
    id: "oxford",
    titular: "En Oxford ya se daban clases antes de que existiera el imperio azteca",
    realce: "antes de que existiera el imperio azteca",
    tema: "Historia",
    color: "var(--sage)",
    mas: [
      "Hay constancia de enseñanza en Oxford desde 1096. Tenochtitlan, la capital azteca, se fundó en 1325.",
      "Doscientos treinta años de diferencia. Cuando los mexicas llegaron a la laguna donde iban a levantar su ciudad, en Oxford ya llevaban generaciones discutiendo de teología.",
    ],
  },
  {
    id: "uombat",
    titular: "El uómbat hace la caca cuadrada",
    realce: "cuadrada",
    tema: "Naturaleza",
    color: "var(--sage)",
    mas: [
      "Es el único animal conocido que lo hace, y se tardó en entender por qué. La última parte de su intestino no es igual de elástica en todo el contorno: hay zonas que ceden y zonas que no, y al apretar van formando esquinas.",
      "Le sirve para algo. El uómbat marca su territorio dejando montoncitos encima de piedras y troncos, y una caca cuadrada tiene una ventaja evidente sobre una redonda: no se cae rodando.",
    ],
  },
];
