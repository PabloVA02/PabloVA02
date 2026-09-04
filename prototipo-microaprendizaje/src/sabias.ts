/* ==========================================================================
   ¿SABÍAS QUE…? — la sección de datos curiosos

   Pablo, el 2 de septiembre: «una frase corta que guste leerla, en grande, con
   letras grandes y vistosas, y si quieres profundizar un poco más existirá una
   pestaña donde se abrirá más texto. Con vocabulario para todos los públicos y
   sobre todo que divierta el leerlo».

   Y EL 4 DE SEPTIEMBRE LA ABRIÓ A TODO: «en curiosidades tienes que poner no
   solo curiosidades, sino cosas de todo tipo que la gente no sepa y le guste
   leer, que sea adictivo de leer. Por ejemplo, por qué el Ferrari es rojo lo
   explicas; quién fue Cleopatra; Apple es una manzana rota por tal… o sea,
   todo lo que se te ocurra, de todos los ámbitos».

   Así que aquí entra cualquier cosa: marcas, personajes, lengua, deporte,
   dinero, comida, arquitectura. Lo que decide no es el ámbito, es la forma.

   LA DIFERENCIA CON UN SHORT, que es lo que decide si algo entra aquí o allí:
   un short explica un mecanismo y necesita varias pantallas; esto **cabe en
   una frase que se entiende sola**, y lo demás es propina. Si algo NECESITA
   dos párrafos para entenderse, es un short. Que se puedan escribir dos
   párrafos alrededor no lo convierte en uno: eso es lo que hay detrás del
   botón, y es donde la sección engancha.

   Y AUN ASÍ NO ES TRIVIA. La regla de la casa —«un dato vale si reordena algo
   que el lector creía, no si solo es curioso»— sigue mandando aquí: cada
   entrada tiene que dejarte pensando «pues yo creía otra cosa». Por eso hay
   tantos desmentidos: los vikingos, Napoleón, la muralla. Un dato que solo
   sirva para rellenar es peor que uno menos, porque enseña a saltarse la
   sección.

   LAS TRES FORMAS QUE HAY, que es lo que evita que treinta entradas seguidas
   suenen a plantilla. No son categorías del menú: no se enseñan al lector.

     · EL DESMENTIDO — creías A y es B. «La caja negra es naranja.» «El rojo de
       Papá Noel no lo inventó Coca-Cola.» Es la más fuerte y la que más se
       repite, y por eso no puede ser la única.
     · EL ORIGEN — de dónde salió algo que usas o dices todos los días sin
       preguntártelo. «OK» empezó siendo una falta de ortografía a propósito;
       el cruasán es vienés; las estrellas Michelin las inventó una fábrica de
       neumáticos.
     · LA PERSONA — un solo hecho que recoloca a alguien que creías conocer.
       No una biografía en miniatura: Cleopatra fue la primera de su familia en
       trescientos años que aprendió el idioma del país que gobernaba.

   Y LO QUE HACE QUE ENGANCHE ESTÁ DETRÁS DEL BOTÓN, no en el titular. El
   titular es la puerta; el texto de dentro es lo que hace que se pulse el
   siguiente. La forma es la misma que la de los shorts buenos —está en la
   skill `estilo-app`, apartado 1—: **se despacha el porqué en tres o cuatro
   frases y después viene la ráfaga**, tres o cuatro cosas pequeñas con nombre
   propio, seguidas y sin desarrollar ninguna. El anillo de diamantes que Nike
   le regaló doce años después a la estudiante del logotipo. Las guías Michelin
   haciendo de calzo bajo un banco de trabajo. La radio de galena que un niño
   de nueve años escuchaba debajo de las mantas.

   Y se acaba en una imagen, nunca en una moraleja.

   TODOS ESTÁN COMPROBADOS. Los que no se pudieron verificar bien se cayeron,
   no se suavizaron con un «se dice que»: el color naranja de la zanahoria y la
   historia de la casa de Orange se quedaron fuera por eso.

   EL TITULAR es lo que se pinta en grande, así que va corto y con la sorpresa
   al final. `realce` es el trozo que se tiñe de color dentro de él, y tiene
   que aparecer TAL CUAL dentro del titular o no se pinta.
   ========================================================================== */

/* LA ILUSTRACIÓN DE LA SAGRADA FAMILIA ESTÁ FUERA, y no borrada. Pablo, el 3
   de septiembre: «quita el dibujo de la sagrada familia de momento». O sea que
   vuelve cuando lo diga.

   No hay que rehacer nada para que vuelva. El dibujo sigue en
   `src/ilustraciones/sagrada-familia.avif`, el original en `originales/`, su
   fila en `assets/portadas.csv`, la maqueta en el CSS —`.sab-lienzo`— y la
   pastilla de la marca en `Sabias.tsx`. Se enciende con dos líneas:

       import sagradaFamilia from "./ilustraciones/sagrada-familia.avif";
       …y `imagen: sagradaFamilia,` en el dato de la Sagrada Familia.

   El import va aquí y no en `public/` a propósito: así lo resuelve el
   empaquetador, y por eso la misma línea vale para los dos destinos. En la
   compilación del artefacto se empotra entero en el HTML —única forma de que
   se vea dentro del simulador, con su política de seguridad cerrada— y en la
   de la web sale un fichero con su huella. Un fichero en `public/` no haría ni
   lo uno ni lo otro. */

export type Dato = {
  id: string;
  /** La frase grande. Corta, y lo que sorprende al final. */
  titular: string;
  /** El trozo del titular que se tiñe. Literal, o no se encuentra. */
  realce?: string;
  /** Dos palabras que sitúan, para que se vea de qué va antes de leer. */
  tema: string;
  /**
   * EL COLOR DICE ALGO. Norma de Pablo del 3 de septiembre: «cuando colorees
   * unas palabras deben tener cierto sentido; por ejemplo, la frase donde
   * hablas de Ferrari deberá ser roja, o la frase donde hablas del espacio,
   * pues azul galaxia».
   *
   * Así que esto NO se rota para que no se repitan dos seguidos, que es lo que
   * hacía antes. Se elige por lo que dicen LAS PALABRAS QUE SE TIÑEN, que no
   * siempre es el tema del dato: en «hay más árboles en la Tierra que estrellas
   * en nuestra galaxia» lo teñido es la galaxia, así que va en azul aunque el
   * dato hable de árboles.
   *
   * Los nueve colores y cuándo va cada uno están en `styles.css`, en el bloque
   * «LOS COLORES QUE SIGNIFICAN ALGO». Son más oscuros que los acentos de
   * categoría porque este color también se usa a once puntos y de fondo de la
   * pastilla de «Saber más», con letra blanca encima.
   */
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
  /* ------------------------------------------------------------------------
     CUARTO INTENTO, Y AQUÍ SE PARA. Tres devoluciones seguidas de Pablo:

       1ª  «son un poco ambiguas» — eran historias de origen: quién inventó qué.
       2ª  «son datos raros» — eran rarezas de bichos y de órganos.
       3ª  «está fatal, muchas cosas ni se entienden; pon cosas más fáciles de
            entender, o sea curiosidades y sabías que, cosas que al leerlas te
            quedes impresionado».

     LA TERCERA ES LA QUE LO EXPLICA TODO. Mi tanda anterior estaba llena de
     choques de tiempo —el Tyrannosaurus y el Estegosaurio, las pirámides y los
     mamuts, la guillotina y La guerra de las galaxias—, y esos no se entienden
     de golpe: hay que saber cuándo fue cada cosa y hacer una resta mental. Son
     datos para el que ya sabe. El lector del metro los mira, no le llega nada,
     y pasa.

     Y LO QUE FUNCIONA ESTABA AQUÍ DESDE EL PRIMER DÍA. Los que Pablo nunca ha
     tocado son los que ya había: el pulpo tiene tres corazones, el flamenco
     nace gris, el uómbat hace la caca cuadrada, la miel no caduca. Todos
     tienen la misma forma, y es la más simple que existe:

         UN SUJETO QUE TODO EL MUNDO CONOCE + UNA COSA RARÍSIMA QUE HACE

     Nada que saber antes. Nada que calcular. Se ve en la cabeza al leerlo.
     Cinco o seis palabras. Y la reacción no es «ah, claro», es «¿QUÉ?».

     Lo que se cae por el camino, y hay que aceptarlo: el dato elegante. El
     choque de fechas es precioso para quien ya conoce las dos fechas, y esta
     sección no se escribe para ese.

     La prueba, la definitiva: se lee el titular en voz alta a alguien que no
     sepa nada del tema. Si tiene que preguntar algo antes de reaccionar, fuera.
     ------------------------------------------------------------------------ */
  {
    id: "nutrias-de-la-mano",
    titular: "Las nutrias duermen cogidas de la mano",
    realce: "cogidas de la mano",
    tema: "Animales",
    color: "var(--dato-mar)", // el agua
    mas: [
      "Duermen en el agua, boca arriba, y el mar las va moviendo. Para no despertarse cada una en una punta, se dan la mano y se quedan enganchadas toda la noche. Las madres lo hacen con las crías, y a veces se juntan grupos enteros y acaban formando una balsa de nutrias flotando pegadas.",
      "Cuando duermen solas usan otro truco igual de bueno: se enrollan una tira de alga alrededor del cuerpo y se quedan amarradas a ella, como quien se ata a un muelle para no irse con la corriente.",
      "Y lo hacen dormidas, sin enterarse.",
    ],
  },
  {
    id: "caballos-no-vomitan",
    titular: "Los caballos no pueden vomitar",
    realce: "no pueden vomitar",
    tema: "Animales",
    color: "var(--dato-tierra)", // el establo
    mas: [
      "No es que aguanten mucho ni que les dé apuro: es que no pueden. La puerta que tienen entre el tubo de la garganta y el estómago funciona en un solo sentido. Deja pasar la comida hacia abajo, y cuando el estómago empuja hacia arriba se cierra todavía más fuerte. Desde dentro no hay manera de abrirla.",
      "Además el tubo entra al estómago en un ángulo muy cerrado, así que cuanto más lleno está, más se aprieta ese cierre. Y los movimientos del propio tubo van solo en una dirección: hacia abajo.",
      "Por eso un cólico en un caballo es tan serio. Lo que le ha sentado mal no tiene por dónde salir.",
    ],
  },
  {
    id: "cebras-negras",
    titular: "Las cebras son negras con rayas blancas, no al revés",
    realce: "negras con rayas blancas",
    tema: "Animales",
    color: "var(--dato-gris)", // el blanco y negro
    mas: [
      "Si le afeitas una cebra, la piel que hay debajo es negra entera. El negro es el color de la casa. Lo raro son las bandas blancas: son las zonas donde el pelo no recibe la orden de pintarse y sale sin color.",
      "Y no hay dos cebras iguales. Cada una lleva su propio dibujo, tan distinto como una huella dactilar, y las crías reconocen a su madre por el patrón igual que nosotros reconocemos una cara.",
      "Así que la pregunta buena no es por qué tienen rayas blancas. Es por qué se les despinta el negro justo ahí.",
    ],
  },
  {
    id: "delfines-nombres",
    titular: "Los delfines se llaman unos a otros por su nombre",
    realce: "por su nombre",
    tema: "Animales",
    color: "var(--dato-mar)", // el mar
    mas: [
      "Cada delfín se inventa de pequeño un silbido propio y lo usa el resto de su vida para decir quién es. La mitad de lo que silba un delfín es eso: su nombre, repetido.",
      "Y se llaman entre ellos. Unos biólogos escoceses grabaron el silbido de un delfín concreto y se lo pusieron por un altavoz a un grupo: contestó ese y ninguno más. Los otros ni se giraron. Además copian el silbido de sus amigos y de su familia para llamarlos desde lejos, que es exactamente lo que hacemos nosotros gritando un nombre.",
      "Es el único caso conocido de un animal que se pone nombres.",
    ],
  },
  {
    id: "mas-alto-por-la-manana",
    titular: "Eres más alto por la mañana que por la noche",
    realce: "más alto por la mañana",
    tema: "Cuerpo",
    color: "var(--dato-rojo)", // por dentro
    mas: [
      "Entre uno y dos centímetros. Entre las vértebras de la espalda hay unos discos blandos que hacen de amortiguador, y todo el día de pie el peso del cuerpo los va aplastando un poco. Por la noche, tumbado, no aguantan nada y se vuelven a hinchar.",
      "Por eso quien mide a la gente en serio apunta también la hora. Y en el espacio, sin ningún peso encima, esos discos se estiran del todo: los astronautas vuelven de una misión larga hasta cinco centímetros más altos, y lo pierden a los pocos días de volver a pisar el suelo.",
      "Tu récord de altura lo bates todos los días al levantarte de la cama.",
    ],
  },
  {
    id: "cosquillas",
    titular: "Nadie puede hacerse cosquillas a sí mismo",
    realce: "a sí mismo",
    tema: "Cuerpo",
    color: "var(--dato-morado)", // el cerebro
    mas: [
      "Lo puede intentar cualquiera y no sale. El motivo es que el cerebro va siempre un paso por delante de tu propia mano: antes de que la muevas, ya ha calculado dónde va a tocar y qué vas a notar. Y lo que estaba previsto no hace cosquillas.",
      "De ese cálculo se encarga una parte de atrás del cerebro que se pasa el día adivinando las consecuencias de tus movimientos, precisamente para que no te sobresalten. Toda la gracia de las cosquillas está en la sorpresa, y contigo mismo no hay sorpresa posible.",
      "En un experimento montaron una máquina que retrasaba unas décimas de segundo el movimiento del propio dedo. Con ese retraso, y solo con él, las cosquillas volvían a funcionar.",
    ],
  },
  {
    id: "plastico-de-burbujas",
    titular: "El plástico de burbujas se inventó para decorar paredes",
    realce: "para decorar paredes",
    tema: "Objetos",
    color: "var(--dato-gris)", // el plástico
    mas: [
      "En 1957, dos ingenieros de Nueva Jersey querían fabricar un papel de pared con relieve, muy moderno para la época. Pegaron dos cortinas de ducha de plástico con una máquina de calor y les salió una lámina llena de burbujas de aire atrapadas. Como papel pintado no lo quiso absolutamente nadie.",
      "Lo intentaron después como aislante para invernaderos y tampoco. Así que se sentaron a buscarle usos y llegaron a apuntar más de cuatrocientos. El que funcionó apareció en 1960: IBM empezó a mandar ordenadores por correo y necesitaba envolverlos en algo que aguantara los golpes.",
      "Setenta años después sigue siendo lo único que la gente rompe a propósito por gusto.",
    ],
  },
  {
    id: "pulpo-por-el-pico",
    titular: "Un pulpo cabe por cualquier agujero por el que le quepa el pico",
    realce: "por el que le quepa el pico",
    tema: "Animales",
    color: "var(--dato-mar)", // el mar
    mas: [
      "No tiene ni un solo hueso. Lo único duro de todo su cuerpo es el pico, que se parece al de un loro y le sirve para partir conchas. La cabeza, los ojos, el cuerpo entero: todo lo demás es blando y se puede aplastar tanto como haga falta.",
      "Así que si el pico pasa, pasa el pulpo. Uno de dos kilos tiene el pico del tamaño de una moneda, y por un agujero de ese tamaño se cuela entero. En los acuarios es un problema conocido y hay que taparlo todo, hasta los desagües.",
      "Lo demás lo va apretando y estirando hasta que cabe.",
    ],
  },
  {
    id: "antartida-desierto",
    titular: "La Antártida es el desierto más grande del mundo",
    realce: "el desierto más grande del mundo",
    tema: "El mundo",
    color: "var(--dato-gris)", // el hielo
    mas: [
      "Un desierto no es un sitio con arena y calor: es un sitio donde casi no llueve. En el interior de la Antártida caen unos cincuenta milímetros de agua al año, menos que en el Sáhara. Y ocupa catorce millones de kilómetros cuadrados, así que no solo es desierto: es el más grande que hay.",
      "Hay zonas donde no cae nada desde hace dos millones de años. Se llaman los valles secos, no tienen ni hielo, y son lo más parecido a Marte que existe en la Tierra: la NASA ha ido allí a probar sus robots antes de mandarlos.",
      "Todo ese hielo está ahí porque nunca se derrite, no porque nieve mucho.",
    ],
  },
  {
    id: "pinguinos-piedra",
    titular: "Los pingüinos le regalan una piedra a su pareja",
    realce: "una piedra",
    tema: "Animales",
    color: "var(--dato-tierra)", // la piedra
    mas: [
      "Los pingüinos papúa hacen el nido con piedras, y las buenas —lisas y del tamaño justo— no sobran. Así que el macho busca la mejor que encuentra, se acerca a la hembra que le gusta y se la deja a los pies. Si ella la coge y la pone en el nido, ya hay pareja.",
      "Y se las roban sin ningún disimulo. Es normal ver a uno llevándose una piedra del nido del vecino mientras el vecino mira para otro lado, y la bronca de picotazos que se monta cuando lo pillan.",
      "La colonia entera funciona como un mercado de piedras.",
    ],
  },
  {
    id: "luna-maletas",
    titular: "Llegamos a la Luna antes de ponerle ruedas a las maletas",
    realce: "antes de ponerle ruedas a las maletas",
    tema: "Tecnología",
    color: "var(--dato-galaxia)", // la Luna
    mas: [
      "El Apolo 11 alunizó en julio de 1969. La maleta con ruedas la pidió como patente Bernard Sadow en 1970 y se la dieron en 1972. La idea se le ocurrió arrastrando dos maletas por una aduana mientras veía a un operario mover una máquina enorme, sin esfuerzo, encima de una plataforma con rueditas.",
      "Y costó venderla. Los grandes almacenes le decían que un hombre no iba a ir tirando de una maleta pudiendo llevarla en brazos, que quedaba mal. Salió a la venta en Macy's en 1970. La que usas tú —vertical, dos ruedas y asa que sale y entra— es todavía más tardía: la inventó un piloto de línea aérea en los años ochenta.",
      "Entre pisar la Luna y arrastrar una maleta por un aeropuerto pasó casi un año.",
    ],
  },
  {
    id: "sol-ocho-minutos",
    titular: "Si el Sol se apagara ahora, no lo sabríamos hasta dentro de ocho minutos",
    realce: "hasta dentro de ocho minutos",
    tema: "Espacio",
    color: "var(--dato-naranja)", // el Sol
    mas: [
      "La luz va a trescientos mil kilómetros por segundo, que es rapidísimo pero no es instantáneo. Del Sol hasta aquí hay ciento cincuenta millones de kilómetros, y el viaje le lleva ocho minutos y veinte segundos. O sea que el Sol que ves por la ventana es el de hace ocho minutos.",
      "Con lo demás es mucho peor. La luz de la estrella más cercana tarda algo más de cuatro años en llegar, y la de otras que se ven a simple vista lleva viajando desde antes de que se construyera ninguna catedral. El cielo de noche son un montón de fechas distintas a la vez.",
      "Y durante esos ocho minutos todo seguiría igual. La luz, el calor, las sombras en el suelo. Y ya no habría Sol.",
    ],
  },
  /* Lo que se salva de las tandas anteriores: las que se entienden sin pensar.
     El Krakatoa —con el titular reescrito, porque «dio cuatro vueltas a la
     Tierra» obligaba a preguntarse qué es lo que daba vueltas—, la baraja, las
     dos islas, la medusa, la Luna y las maletas, y los ocho minutos del Sol.
     Todo lo demás de aquellas tandas está en el historial de git. */
  {
    id: "krakatoa",
    titular: "Un volcán estalló en 1883 y se oyó a cinco mil kilómetros",
    realce: "se oyó a cinco mil kilómetros",
    tema: "Naturaleza",
    color: "var(--dato-rojo)", // el volcán
    mas: [
      "El 27 de agosto de 1883 la isla voló por los aires, y el ruido se oyó con claridad en Rodrigues, una isla perdida del océano Índico que está a cuatro mil ochocientos kilómetros. Para hacerse una idea: de Madrid a Moscú hay tres mil cuatrocientos. Aquello se oyó mil cuatrocientos kilómetros más lejos todavía, y los que lo oyeron pensaron que eran cañonazos de un barco en apuros.",
      "La onda de presión no se paró ahí. Le dio cuatro vueltas al planeta, y los barómetros de media Europa la fueron registrando cada vez que pasaba por encima, sin que nadie entendiera al principio qué estaban midiendo. En Perth, a tres mil cien kilómetros, la gente salió a la calle a mirar. Y a sesenta y cinco kilómetros del volcán, a los marineros de los barcos que había allí les reventaron los tímpanos.",
      "Es el sonido más fuerte del que se tiene registro. Nadie ha vuelto a oír nada parecido, y con suerte nadie lo oirá.",
    ],
  },
  {
    id: "barajar-cartas",
    titular: "Hay más maneras de barajar unas cartas que átomos en la Tierra",
    realce: "que átomos en la Tierra",
    tema: "Números",
    color: "var(--dato-rojo)", // los corazones de la baraja
    mas: [
      "Cincuenta y dos cartas se pueden ordenar de un número que se escribe con un 8 y sesenta y siete ceros detrás. Los átomos que hay en el planeta entero, contando el mar, el aire y el hierro del centro, son un 1 con unos cincuenta ceros. No es que haya un poco más de barajas: hay cien mil billones de veces más.",
      "Otra manera de verlo. Si alguien se hubiera puesto a barajar un mazo distinto cada segundo desde el principio del universo, y llevara ahí desde entonces, hoy no habría llegado ni a la milmillonésima parte de todas las combinaciones posibles.",
      "Así que cada vez que barajas bien una baraja, estás poniendo esas cartas en un orden que casi con toda seguridad no ha existido nunca y no va a volver a existir.",
    ],
  },
  {
    id: "diomede",
    titular: "Rusia y Estados Unidos están a cuatro kilómetros",
    realce: "a cuatro kilómetros",
    tema: "El mundo",
    color: "var(--dato-mar)", // el estrecho helado
    mas: [
      "En mitad del estrecho de Bering hay dos islas, una enfrente de otra, separadas por tres kilómetros y ochocientos metros de agua. La grande es rusa. La pequeña es estadounidense y tiene un pueblo con escuela. En los inviernos más fríos el mar se hiela entre las dos.",
      "Y por ese canal pasa la línea internacional de cambio de fecha, así que a la rusa la llaman la isla de Mañana y a la americana la isla de Ayer. La diferencia entre las dos no es de veinticuatro horas, que sería lo lógico, sino de veintiuna: los husos horarios no están repartidos a partes iguales y ahí se nota.",
      "Desde la playa de una se ve el día siguiente.",
    ],
  },
  {
    id: "medusa-inmortal",
    titular: "Hay una medusa que vuelve a ser cría cuando le conviene",
    realce: "vuelve a ser cría",
    tema: "Animales",
    color: "var(--dato-mar)", // el mar
    mas: [
      "Se llama Turritopsis dohrnii, mide menos que una uña y hace algo que no hace ningún otro animal conocido. Cuando está herida, cuando pasa hambre o simplemente cuando se hace vieja, se deja caer al fondo, se deshace en un montoncito y vuelve a montarse desde el principio, en la forma de cría que tuvo al nacer.",
      "Lo que ocurre dentro es todavía más raro: sus células adultas no se mueren y se sustituyen, se convierten en otras distintas. Una que era músculo puede pasar a ser nervio. Y no es un truco de una sola vez: en laboratorio se ha visto rejuvenecer a todas las que se sometieron a la prueba, una y otra vez.",
      "En el mar se las comen, claro, como a todo. Pero de viejas no se mueren.",
    ],
  },
  /* Las dos que se salvan de la primera tanda: son de esta familia y no de la
     otra —un hecho físico, con su número, que se cuenta en una frase—, así que
     se quedan hasta que Pablo diga. */
  {
    id: "medalla-de-plata",
    titular: "Una medalla de oro olímpica es de plata",
    realce: "es de plata",
    tema: "Deporte",
    color: "var(--dato-gris)", // la plata que hay debajo
    mas: [
      "El reglamento del Comité Olímpico lo dice con todas las letras: la medalla de primer puesto tiene que ser de plata de ley —al menos un 92,5 %— y llevar por fuera un mínimo de seis gramos de oro. Seis gramos es menos de lo que pesa una moneda de un euro.",
      "Las últimas macizas se repartieron en Estocolmo en 1912, y llevaban unos veinticuatro gramos de oro cada una. Después llegó la guerra, el metal se puso imposible y los Juegos empezaron a crecer: fundir cientos de medallas de oro puro cada cuatro años dejó de tener sentido.",
      "Así que cada vez que un campeón se muerde la medalla para la foto, lo que está mordiendo es plata con seis gramos de barniz caro.",
    ],
  },
  {
    id: "caja-negra-naranja",
    titular: "La caja negra de un avión es naranja",
    realce: "es naranja",
    tema: "Tecnología",
    color: "var(--dato-naranja)", // el color que es
    mas: [
      "Se pinta de un naranja fuerte, y por el motivo más razonable del mundo: hay que encontrarla entre toneladas de chatarra retorcida, a veces en el fondo del mar. Lo negro nunca fue el color. El nombre se le quedó pegado por otro lado y ya no hubo manera de quitárselo.",
      "La inventó un químico australiano, David Warren, después de investigar un accidente en 1954 y darse cuenta de que nadie sabía qué habían dicho los pilotos en los últimos minutos. En Australia no le hicieron caso durante años. La suya tiene además una coincidencia que él se pasó la vida desmintiendo: en 1934, cuando tenía nueve años, su padre murió en el Miss Hobart, un avión que desapareció sobre el estrecho de Bass y del que nunca se supo qué pasó.",
      "Warren decía que el accidente no tuvo nada que ver, y que lo que le empujó fue el último regalo que le hizo su padre antes de subirse a aquel avión: una radio de galena, con la que el niño se aficionó a la electrónica escuchándola por la noche debajo de las mantas del internado.",
    ],
  },
  {
    id: "sagrada-familia",
    titular: "La Sagrada Familia se construyó 137 años sin permiso de obra",
    realce: "137 años sin permiso de obra",
    tema: "Arquitectura",
    color: "var(--dato-tierra)", // la piedra y la obra
    mas: [
      "Las obras empezaron el 19 de marzo de 1882. El permiso se pidió tres años después al ayuntamiento de Sant Martí de Provençals, que entonces era un pueblo aparte, y allí se quedó: nadie lo resolvió, el pueblo se anexionó a Barcelona en 1897 y el papel se perdió por el camino.",
      "Nadie se dio cuenta en más de un siglo. Cuando el ayuntamiento abrió expediente, la junta que construye el templo acordó pagar treinta y seis millones de euros por los servicios y las obras de alrededor, y la licencia se firmó por fin en junio de 2019. Ciento treinta y siete años levantando el monumento más visitado de la ciudad sin el papel que le piden a cualquiera para cambiar unas ventanas.",
    ],
  },
  {
    id: "ferrari-rojo",
    titular: "Los Ferrari son rojos porque a Italia le tocó ese color",
    realce: "le tocó ese color",
    tema: "Motor",
    color: "var(--dato-rojo)", // el color del que habla la frase
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
    color: "var(--dato-oro)", // el amarillo de Módena del escudo
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
    color: "var(--dato-naranja)", // el azafrán de su bandera
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
    color: "var(--dato-galaxia)", // la Luna, que es lo que se tiñe
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
    color: "var(--dato-verde)", // los árboles, que es lo que se tiñe
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
    color: "var(--dato-galaxia)", // un planeta
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
    color: "var(--dato-naranja)", // el calor del verano, que es lo que la estira
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
    color: "var(--dato-rojo)", // la fresa, que es lo que se tiñe
    mas: [
      "Para un botánico, una baya es un fruto carnoso que sale de una sola flor y lleva las semillas dentro. El plátano cumple. El tomate y el aguacate también.",
      "La fresa no. Lo rojo que te comes es la base de la flor, hinchada; los frutos de verdad son esos puntitos amarillos de fuera, y cada uno lleva su semilla. Te comes doscientos frutos por fresa.",
    ],
  },
  {
    id: "pulpo",
    titular: "Un pulpo tiene tres corazones y la sangre azul",
    realce: "la sangre azul",
    tema: "Naturaleza",
    color: "var(--dato-mar)", // la sangre azul
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
    color: "var(--dato-galaxia)", // las estrellas de la galaxia, que es lo que se tiñe
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
    color: "var(--dato-mar)", // la bañera: lo que se tiñe es «flotaría»
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
    color: "var(--dato-naranja)", // el calor, cinco veces el del Sol
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
    color: "var(--dato-galaxia)", // el espacio desde donde no se ve
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
    color: "var(--dato-mar)", // el mar del norte
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
    color: "var(--dato-morado)", // la púrpura imperial
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
    color: "var(--dato-naranja)", // el fuego de los cañones
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
    color: "var(--dato-rojo)", // el rojo de Nintendo, que es de siempre
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
    color: "var(--dato-gris)", // gris, literal: es la palabra teñida
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
    color: "var(--dato-oro)", // la miel
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
    color: "var(--dato-mar)", // el hielo
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
    color: "var(--dato-galaxia)", // el azul Oxford se llama así por algo
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
    color: "var(--dato-tierra)", // marrón, que es lo que es
    mas: [
      "Es el único animal conocido que lo hace, y se tardó en entender por qué. La última parte de su intestino no es igual de elástica en todo el contorno: hay zonas que ceden y zonas que no, y al apretar van formando esquinas.",
      "Le sirve para algo. El uómbat marca su territorio dejando montoncitos encima de piedras y troncos, y una caca cuadrada tiene una ventaja evidente sobre una redonda: no se cae rodando.",
    ],
  },
];
