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
   * EL BOCETO: el dibujo a línea que acompaña al dato.
   *
   * Pablo, 4 de septiembre: «una especie de boceto sin colores ni nada, solo
   * con líneas, de dibujos de lo que estamos hablando; por ejemplo un boceto
   * muy simple de delfines por la página».
   *
   * El nombre sale de `bocetos.tsx`. Hay menos dibujos que datos y es a
   * propósito: dos datos de tiburón comparten tiburón, y el que no tenga uno
   * propio se queda con el más cercano de su familia. Un dibujo aproximado que
   * acompaña vale más que un hueco.
   */
  boceto?: string;

  /**
   * LA ESCENA, solo cuando la del dibujo no vale.
   *
   * Cada dibujo trae su escena de color —el mar sus olas azules, el campo su
   * línea de suelo—, y con eso basta casi siempre. La excepción es cuando el
   * mismo dibujo cuenta dos cosas distintas: el atardecer de Marte se dibuja
   * con el mismo sol poniente que el nuestro, y ahí el naranja miente, porque
   * el dato es que allí el atardecer es AZUL. En esos casos manda el dato.
   *
   * Los nombres están en `bocetos.tsx`.
   */
  escena?: string;

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

     Y DOS COSAS MÁS QUE DIJO PABLO EL 4 DE SEPTIEMBRE, viendo los cien:

     · «Pon número en vez de letras, anda, para los números.» Las cifras van en
       CIFRA, en el titular y en el texto de dentro: 300 huesos, 30.000 dientes,
       800.000 años, las 10:10. Esto va contra lo que dice la skill `estilo-app`
       —que los números que se leen de corrido van en letra— y manda esto, que
       es más nuevo y es de él. En un titular que se lee de un vistazo, un
       número escrito con letras hay que leerlo dos veces.

       Lo que sigue en letra, porque no son cifras: «millones de años» cuando
       quiere decir muchísimos y no una cantidad, «las dos» cuando es un
       pronombre —«ninguna de las dos»—, y «por ciento».

     · «EL TITULAR CUENTA EL DATO ENTERO.» Es lo último y lo más importante, y
       llegó con una tanda de capturas de una app de curiosidades: «te paso un
       ejemplo de cómo me gustan, cosas que se entiendan, es lo que quiero».

       Lo que hay en esas capturas no son titulares: son el hecho completo, en
       una frase o dos, sin nada escondido. «El mechero se inventó antes que la
       cerilla.» «Una cucaracha puede vivir varias semanas con la cabeza
       cortada.» «Las abejas de una fábrica de chocolate en Francia empezaron a
       comerse los dulces y a hacer miel azul y verde.» Se lee y ya está: no
       hay que pulsar nada para entenderlo.

       Lo que yo estaba haciendo era lo contrario —un gancho de seis palabras y
       la explicación detrás del botón—, y por eso se quedaban a medias. «El
       velcro se copió de una planta» deja al lector con la pregunta puesta. Lo
       que se pide es: «El velcro se copió de las bolitas que se le pegaron en
       el pantalón a un ingeniero suizo volviendo de cazar».

       Así que la frase de la tarjeta puede ser larga —hay titulares de 127
       caracteres— y lleva la respuesta dentro, normalmente detrás de dos
       puntos o de un «porque». Los cien se reescribieron enteros con esa
       forma, y `tramo()` pasó de tres tamaños de letra a cinco para que las
       largas quepan.

       Lo de detrás del botón deja de ser la explicación y pasa a ser lo que
       siempre debió: la historia, los nombres y la ráfaga.

     · «El título se tiene que entender a la perfección nada más leerlo.»
       Devolvió tres: «hay un planeta donde llueve cristal, y de lado» —el «y de
       lado» no pinta nada ahí—, «hay un árbol vivo que ya estaba ahí hace casi
       diez mil años» —enrevesado; ahora dice «hay un árbol que tiene 9.500
       años»— y aprobó «las abejas reconocen caras humanas» como el modelo.

       O sea: sujeto, verbo, sorpresa. Sin subordinadas, sin aclaraciones
       metidas con comas y sin nada detrás de la sorpresa. Se revisaron los
       cien y se reescribieron cuarenta y uno.
     ------------------------------------------------------------------------ */
  {
    id: "nutrias-de-la-mano",
    titular: "Las nutrias duermen cogidas de la mano",
    realce: "cogidas de la mano",
    boceto: "otter",
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
    boceto: "horse",
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
    titular: "Las cebras son negras con rayas blancas",
    realce: "negras con rayas blancas",
    boceto: "zebra",
    tema: "Animales",
    color: "var(--dato-gris)", // el blanco y negro
    mas: [
      "Si le afeitas una cebra, la piel que hay debajo es negra entera. El negro es el color de la casa. Lo raro son las bandas blancas: son las zonas donde el pelo no recibe la orden de pintarse y sale sin color.",
      "Y no hay 2 cebras iguales. Cada una lleva su propio dibujo, tan distinto como una huella dactilar, y las crías reconocen a su madre por el patrón igual que nosotros reconocemos una cara.",
      "Así que la pregunta buena no es por qué tienen rayas blancas. Es por qué se les despinta el negro justo ahí.",
    ],
  },
  {
    id: "delfines-nombres",
    titular: "Los delfines se ponen nombre",
    realce: "se ponen nombre",
    boceto: "dolphin",
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
    boceto: "person-standing",
    tema: "Cuerpo",
    color: "var(--dato-rojo)", // por dentro
    mas: [
      "Entre uno y 2 centímetros. Entre las vértebras de la espalda hay unos discos blandos que hacen de amortiguador, y todo el día de pie el peso del cuerpo los va aplastando un poco. Por la noche, tumbado, no aguantan nada y se vuelven a hinchar.",
      "Por eso quien mide a la gente en serio apunta también la hora. Y en el espacio, sin ningún peso encima, esos discos se estiran del todo: los astronautas vuelven de una misión larga hasta 5 centímetros más altos, y lo pierden a los pocos días de volver a pisar el suelo.",
      "Tu récord de altura lo bates todos los días al levantarte de la cama.",
    ],
  },
  {
    id: "cosquillas",
    titular: "Nadie puede hacerse cosquillas a sí mismo",
    realce: "a sí mismo",
    boceto: "hand-with-fingers-splayed",
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
    boceto: "package",
    tema: "Objetos",
    color: "var(--dato-gris)", // el plástico
    mas: [
      "En 1957, 2 ingenieros de Nueva Jersey querían fabricar un papel de pared con relieve, muy moderno para la época. Pegaron 2 cortinas de ducha de plástico con una máquina de calor y les salió una lámina llena de burbujas de aire atrapadas. Como papel pintado no lo quiso absolutamente nadie.",
      "Lo intentaron después como aislante para invernaderos y tampoco. Así que se sentaron a buscarle usos y llegaron a apuntar más de 400. El que funcionó apareció en 1960: IBM empezó a mandar ordenadores por correo y necesitaba envolverlos en algo que aguantara los golpes.",
      "70 años después sigue siendo lo único que la gente rompe a propósito por gusto.",
    ],
  },
  {
    id: "pulpo-por-el-pico",
    titular: "Un pulpo cabe por donde le quepa el pico",
    realce: "por donde le quepa el pico",
    boceto: "octopus",
    tema: "Animales",
    color: "var(--dato-mar)", // el mar
    mas: [
      "No tiene ni un solo hueso. Lo único duro de todo su cuerpo es el pico, que se parece al de un loro y le sirve para partir conchas. La cabeza, los ojos, el cuerpo entero: todo lo demás es blando y se puede aplastar tanto como haga falta.",
      "Así que si el pico pasa, pasa el pulpo. Uno de 2 kilos tiene el pico del tamaño de una moneda, y por un agujero de ese tamaño se cuela entero. En los acuarios es un problema conocido y hay que taparlo todo, hasta los desagües.",
      "Lo demás lo va apretando y estirando hasta que cabe.",
    ],
  },
  {
    id: "antartida-desierto",
    titular: "La Antártida es el desierto más grande del mundo",
    realce: "el desierto más grande del mundo",
    boceto: "snowflake",
    tema: "El mundo",
    color: "var(--dato-gris)", // el hielo
    mas: [
      "Un desierto no es un sitio con arena y calor: es un sitio donde casi no llueve. En el interior de la Antártida caen unos 50 milímetros de agua al año, menos que en el Sáhara. Y ocupa 14 millones de kilómetros cuadrados, así que no solo es desierto: es el más grande que hay.",
      "Hay zonas donde no cae nada desde hace 2 millones de años. Se llaman los valles secos, no tienen ni hielo, y son lo más parecido a Marte que existe en la Tierra: la NASA ha ido allí a probar sus robots antes de mandarlos.",
      "Todo ese hielo está ahí porque nunca se derrite, no porque nieve mucho.",
    ],
  },
  {
    id: "pinguinos-piedra",
    titular: "Los pingüinos ligan regalando piedras",
    realce: "regalando piedras",
    boceto: "penguin",
    tema: "Animales",
    color: "var(--dato-tierra)", // la piedra
    mas: [
      "Los pingüinos papúa hacen el nido con piedras, y las buenas —lisas y del tamaño justo— no sobran. Así que el macho busca la mejor que encuentra, se acerca a la hembra que le gusta y se la deja a los pies. Si ella la coge y la pone en el nido, ya hay pareja.",
      "Y se las roban sin ningún disimulo. Es normal ver a uno llevándose una piedra del nido del vecino mientras el vecino mira para otro lado, y la bronca de picotazos que se monta cuando lo pillan.",
      "La colonia entera funciona como un mercado de piedras.",
    ],
  },
  /* --- TANDA 2 --------------------------------------------------------- */
  {
    id: "mariposas-patas",
    titular: "Las mariposas saborean con las patas",
    realce: "con las patas",
    boceto: "butterfly",
    tema: "Animales",
    color: "var(--dato-naranja)", // las alas
    mas: [
      "Tienen los sensores del gusto repartidos por las patas delanteras, así que para saber si una flor sirve no hace falta que prueben nada: les basta con posarse encima. En cuanto tocan, ya lo saben.",
      "A las hembras les importa todavía más que a las suyas propias. Antes de poner un huevo van dando saltitos por las hojas, tanteando con las patas, hasta encontrar la planta exacta que la oruga podrá comerse cuando nazca. Se equivocan poquísimo.",
      "La trompa, que es lo que parece la boca, solo sirve para sorber. Decidir se decide con los pies.",
    ],
  },
  {
    id: "cucaracha-sin-cabeza",
    titular: "Una cucaracha vive una semana sin cabeza",
    realce: "sin cabeza",
    boceto: "cockroach",
    tema: "Animales",
    color: "var(--dato-tierra)", // el bicho
    mas: [
      "No se desangra, porque su sangre va casi sin presión y el cuello se le cierra solo. No se ahoga, porque no respira por la boca: tiene agujeritos repartidos por todo el cuerpo que llevan el aire directamente a donde hace falta. Y sigue andando, porque el cerebro no manda en las patas: cada tramo del cuerpo tiene su propio nudo de nervios y se apaña.",
      "Así que un cuerpo decapitado se levanta, camina, se esconde de la luz y reacciona si lo tocas. Lo que no puede hacer es beber.",
      "Se muere de sed, a los pocos días. De nada más.",
    ],
  },
  {
    id: "huesos-al-nacer",
    titular: "Naces con 300 huesos y acabas con 206",
    realce: "acabas con 206",
    boceto: "bone",
    tema: "Cuerpo",
    color: "var(--dato-gris)", // el hueso
    mas: [
      "No se pierden: se pegan. Un bebé viene con muchas piezas separadas y bastante blandas, porque un esqueleto de una sola pieza no pasaría por donde tiene que pasar al nacer. Con los años esas piezas se van soldando entre ellas hasta quedarse en 206.",
      "El cráneo es el ejemplo claro: son varias placas sueltas con huecos blandos entre ellas —la famosa mollera— que dejan que la cabeza se amolde al salir y que luego siga creciendo. No terminan de cerrarse hasta los 2 años.",
      "Y hay una que no acaba de fraguar hasta los 25: la parte de delante del cráneo, justo detrás de la frente.",
    ],
  },
  {
    id: "nariz-invisible",
    titular: "Tu cerebro te borra la nariz de lo que ves",
    realce: "te borra la nariz",
    boceto: "nose",
    tema: "Cuerpo",
    color: "var(--dato-morado)", // el cerebro
    mas: [
      "La tienes ahí abajo, en el centro de todo lo que miras, tapando un trozo. Está en el campo de visión de los dos ojos las 24 horas del día. Pero el cerebro decidió hace mucho que eso no es información: no cambia nunca, no avisa de nada, y lo tacha.",
      "Es lo mismo que hace con el ruido de la nevera o con la sensación de la ropa en la piel. Lo que no varía deja de existir para la cabeza, porque avisar de ello sería gastar atención en algo que no sirve.",
      "Basta con que alguien la nombre para que vuelva a aparecer. Ya la estás viendo.",
    ],
  },
  {
    id: "soldadura-espacio",
    titular: "En el espacio los metales se pegan solos",
    realce: "se pegan solos",
    boceto: "nut-and-bolt",
    tema: "Espacio",
    color: "var(--dato-galaxia)", // el vacío
    mas: [
      "Aquí abajo 2 trozos de metal no se pegan porque están cubiertos de una capa finísima de óxido y de suciedad que el aire les va poniendo. Esa capa hace de separador. En el vacío no hay aire que la forme, así que si las piezas están de verdad limpias y se aprietan una contra otra, los átomos de un lado no distinguen los del otro y se unen como si nunca hubieran sido 2.",
      "No es tan fácil como suena, y conviene decirlo: hacen falta superficies muy limpias y algo de presión. Pero pasa lo suficiente como para que sea un quebradero de cabeza de la ingeniería espacial desde los años cuarenta: hay antenas, bisagras y engranajes que se han quedado agarrados ahí arriba y no ha habido manera de moverlos.",
      "Lo llaman soldadura en frío, y en el espacio se diseña para evitarla, no para usarla.",
    ],
  },
  {
    id: "velcro-cardo",
    titular: "El velcro se copió de un cardo",
    realce: "de un cardo",
    boceto: "herb",
    tema: "Objetos",
    color: "var(--dato-verde)", // la planta
    mas: [
      "En 1941 un ingeniero suizo, George de Mestral, volvió de cazar con el perro y con los pantalones llenos de esas bolitas secas que se enganchan al pasar entre matorrales. En vez de quitárselas y ya está, metió una debajo del microscopio.",
      "Lo que vio fueron cientos de ganchitos diminutos, cada uno con la punta doblada, agarrados a los rizos de la tela. Ni pegamento ni nada: ganchos y lazos. Tardó 8 años en fabricar lo mismo en nailon.",
      "El nombre lo hizo juntando 2 palabras francesas: velours, terciopelo, y crochet, gancho. Velcro.",
    ],
  },
  {
    id: "pina-come-boca",
    titular: "La piña te come la boca mientras te la comes",
    realce: "te come la boca",
    boceto: "pineapple",
    tema: "Comida",
    color: "var(--dato-oro)", // la piña
    mas: [
      "Ese escozor en la lengua y en el paladar no es acidez. La piña lleva una sustancia que deshace proteínas, y tu boca está hecha de proteínas. Literalmente te está digiriendo un poquito mientras la masticas.",
      "Se defiende sola, además: la planta lo usa para que los animales no se coman la fruta antes de tiempo. Tú ganas la pelea porque tienes saliva nueva y células que se reponen en horas; ella pierde porque se acaba.",
      "Y hay truco para librarse: al calentarla, esa sustancia se estropea. Por eso la piña asada o de lata no pica nada.",
    ],
  },
  {
    id: "lapices-sin-plomo",
    titular: "Los lápices nunca han llevado plomo",
    realce: "nunca han llevado plomo",
    boceto: "pencil",
    tema: "Objetos",
    color: "var(--dato-gris)", // el grafito
    mas: [
      "Llevan grafito, que es carbono puro en láminas que se deslizan unas sobre otras: por eso deja marca en el papel al arrastrarlo. De plomo no tiene ni un átomo, y nunca lo ha tenido.",
      "La culpa es de una confusión de hace siglos. Cuando en el XVI apareció en Inglaterra un filón enorme de grafito, la gente lo tomó por una variedad de plomo —era gris, pesado y manchaba— y lo llamaron plomo negro. El nombre se quedó pegado en medio mundo.",
      "Un lápiz que se te clave no envenena a nadie. Como mucho deja un punto gris debajo de la piel para toda la vida.",
    ],
  },
  {
    id: "sahara-amazonas",
    titular: "El polvo del Sáhara abona el Amazonas",
    realce: "abona el Amazonas",
    boceto: "desert",
    tema: "El mundo",
    color: "var(--dato-tierra)", // la arena
    mas: [
      "Cada año el viento levanta millones de toneladas de polvo del Sáhara, las cruza el Atlántico entero y las deja caer sobre Sudamérica. Un satélite de la NASA lo midió: unos 27 millones de toneladas llegan a la cuenca del Amazonas.",
      "Y no es polvo cualquiera. Lleva fósforo, que es justo lo que a la selva se le agota: allí llueve tanto que el suelo se lava constantemente y los nutrientes se van con el agua. Las 22.000 toneladas de fósforo que trae el polvo compensan casi exactamente lo que la lluvia se lleva.",
      "Y casi todo sale del mismo sitio: una hondonada seca en el Chad, el fondo de un lago que desapareció, donde el viento levanta lo que dejaron millones de años de criaturas de agua dulce.",
    ],
  },
  {
    id: "joroba-camello",
    titular: "En la joroba del camello no hay agua, hay grasa",
    realce: "no hay agua, hay grasa",
    boceto: "two-hump-camel",
    tema: "Animales",
    color: "var(--dato-oro)", // el desierto
    mas: [
      "Hay grasa. Es una despensa, no una cantimplora: el animal tira de ella cuando no encuentra comida, y por eso la joroba se le desinfla y se le queda colgando cuando lleva mucho tiempo sin comer.",
      "Ponerla ahí arriba en vez de repartirla por el cuerpo tiene su lógica en el desierto: con la grasa concentrada en un solo bulto, el resto del cuerpo puede soltar calor sin una manta de aislante por debajo.",
      "El agua la guarda en la sangre, y ahí sí es un fenómeno: puede beber más de 100 litros en 10 minutos.",
    ],
  },
  /* --- TANDA 3 --------------------------------------------------------- */
  {
    id: "gatos-sin-dulce",
    titular: "Los gatos no notan el sabor dulce",
    realce: "no notan el sabor dulce",
    boceto: "cat",
    tema: "Animales",
    color: "var(--dato-tierra)", // el gato
    mas: [
      "Les falta la pieza que lo detecta. En su ADN, el trozo encargado de fabricar el sensor del dulce está roto: existe, pero no funciona, y lleva así millones de años. Un gato metido en un bote de azúcar no notaría absolutamente nada.",
      "Tiene todo el sentido, además. Un animal que solo come carne no necesita reconocer el dulce, porque el dulce en la naturaleza avisa de fruta madura, y eso a un gato no le sirve de nada. Lo que sí tienen finísimo es el sensor de la carne.",
      "Cuando un gato se vuelve loco con un helado, no es por el azúcar. Es por la grasa.",
    ],
  },
  {
    id: "caracol-tres-anos",
    titular: "Un caracol puede dormir 3 años seguidos",
    realce: "3 años seguidos",
    boceto: "snail",
    tema: "Animales",
    color: "var(--dato-verde)", // la hoja
    mas: [
      "Cuando el tiempo se pone imposible —demasiado frío o demasiado seco— se mete en la concha, sella la boca con una tapa de baba que se le endurece como una costra, y se apaga. El corazón le va lentísimo y deja de gastar casi nada.",
      "Lo normal es que pase así unos meses. Pero si la sequía no acaba, puede aguantar tapiado hasta 3 años esperando a que llueva.",
      "Y en cuanto cae agua encima de la concha, se despierta, rompe la tapa y sale como si no hubiera pasado nada.",
    ],
  },
  {
    id: "cuello-jirafa",
    titular: "La jirafa tiene los mismos huesos de cuello que tú",
    realce: "los mismos huesos de cuello que tú",
    boceto: "giraffe",
    tema: "Animales",
    color: "var(--dato-oro)", // la sabana
    mas: [
      "7. Tú tienes 7 vértebras en el cuello y una jirafa también. La diferencia no es el número, es el tamaño: cada una de las suyas mide hasta 30 centímetros.",
      "Y no es cosa de las jirafas: casi todos los mamíferos llevan 7, del ratón a la ballena, tengan el cuello que tengan. Es de las cosas más fijas que hay en el diseño de un mamífero.",
      "Las excepciones se cuentan con los dedos de una mano, y una es el perezoso, que tiene alguna de más para poder girar la cabeza sin moverse del sitio.",
    ],
  },
  {
    id: "llorar-en-el-espacio",
    titular: "En el espacio no se puede llorar",
    realce: "no se puede llorar",
    boceto: "astronaut",
    tema: "Espacio",
    color: "var(--dato-galaxia)", // el espacio
    mas: [
      "Las lágrimas se fabrican igual, pero no caen. Sin peso que tire de ellas se quedan pegadas al ojo, y en vez de resbalar por la cara van formando una bola de agua que crece ahí mismo, encima de la córnea.",
      "Escuece, además. Los astronautas cuentan que la bola les tapa la vista y que hay que quitársela con la mano o con una toalla, porque sola no se va a ninguna parte.",
      "Se puede estar triste en órbita perfectamente. Lo que no se puede es que se te note en la mejilla.",
    ],
  },
  {
    id: "lluvia-de-cristal",
    titular: "Hay un planeta donde llueve cristal",
    realce: "llueve cristal",
    boceto: "ringed-planet",
    tema: "Espacio",
    color: "var(--dato-mar)", // el azul del planeta
    mas: [
      "Se llama HD 189733b y está a 63 años luz. Visto de lejos es de un azul precioso, casi como la Tierra, y ese azul no es agua: son partículas de silicato flotando en el aire, o sea cristal derretido en gotas microscópicas.",
      "Ahí arriba hay más de 1.000 grados, así que ese cristal se condensa como se condensa aquí el vapor de agua, y cae. Solo que no cae hacia abajo: hay vientos de 7.000 kilómetros por hora, así que va de lado. Una sola gota, a esa velocidad, llega con la energía de un proyectil.",
      "Es de los planetas mejor estudiados que hay fuera del sistema solar, y desde lejos parece el nuestro.",
    ],
  },
  {
    id: "esmalte-no-vuelve",
    titular: "El esmalte de los dientes no se regenera",
    realce: "no se regenera",
    boceto: "tooth",
    tema: "Cuerpo",
    color: "var(--dato-gris)", // el diente
    mas: [
      "Es el material más duro que fabricas —más que el hueso—, y lo fabricas una sola vez, antes de que el diente salga. Las células que lo hacen desaparecen en cuanto terminan el trabajo. A partir de ahí, lo que se pierde no vuelve.",
      "Un hueso roto se suelda. Un corte en la piel se cierra. Un trozo de hígado vuelve a crecer. Un trozo de esmalte, no. El cuerpo no tiene forma de reponerlo.",
      "Por eso un empaste es un parche: se rellena el agujero con otra cosa, porque el material original ya no se puede fabricar.",
    ],
  },
  {
    id: "chocolate-blanco",
    titular: "El chocolate blanco no lleva cacao",
    realce: "no lleva cacao",
    boceto: "chocolate-bar",
    tema: "Comida",
    color: "var(--dato-oro)", // la manteca
    mas: [
      "Lleva manteca de cacao, que es la grasa que se saca del grano, y esa grasa es blanca y no sabe a nada. Lo marrón y lo amargo del chocolate está en la otra mitad del grano, la pasta, y esa no se le pone.",
      "O sea que es azúcar, leche en polvo y la grasa. Por eso sabe a dulce y a leche y no a chocolate: porque de chocolate, en el sentido que le da todo el mundo, no lleva.",
      "En Estados Unidos estuvo hasta el año 2002 sin poder llamarse chocolate legalmente.",
    ],
  },
  {
    id: "cocodrilo-lengua",
    titular: "Un cocodrilo no puede sacar la lengua",
    realce: "no puede sacar la lengua",
    boceto: "crocodile",
    tema: "Animales",
    color: "var(--dato-verde)", // el río
    mas: [
      "La tiene pegada al suelo de la boca por una membrana que le recorre casi todo el largo. No es que no quiera: no tiene por dónde levantarla. Puede abrir las mandíbulas de par en par y la lengua se queda ahí abajo, quieta.",
      "Le viene bien, porque caza dentro del agua. Con la lengua sellando el fondo de la garganta puede tener la boca abierta bajo el agua sin tragar ni gota.",
      "Los caimanes sí la mueven un poco. Los cocodrilos, nada.",
    ],
  },
  {
    id: "ketchup-medicina",
    titular: "El kétchup se vendía como medicina",
    realce: "como medicina",
    boceto: "tomato",
    escena: "cuerpo",
    tema: "Comida",
    color: "var(--dato-rojo)", // el tomate
    mas: [
      "En 1834 un médico de Ohio, John Cook Bennett, empezó a decir que el tomate curaba la diarrea, la ictericia y la indigestión, y que además protegía del cólera. Vendía su propia salsa como remedio y la anunciaba en los periódicos.",
      "Luego dio el paso siguiente: se juntó con un vendedor de pastillas, hirvieron la salsa hasta dejarla en pasta, la hicieron bolitas y las pusieron en las boticas como «extracto de tomate en píldoras». Se hizo una moda enorme y salieron imitadores por todas partes.",
      "Se acabó a la mala. Pillaron a varias empresas vendiendo laxantes con la etiqueta de pastillas de tomate, y hacia 1850 nadie volvió a fiarse.",
    ],
  },
  {
    id: "agujero-ventanilla",
    titular: "Las ventanillas de los aviones tienen un agujero a propósito",
    realce: "un agujero a propósito",
    boceto: "airplane",
    tema: "Objetos",
    color: "var(--dato-mar)", // el cielo
    mas: [
      "Ese puntito que hay abajo del todo del cristal no es un defecto ni una grieta. Está puesto ahí de fábrica, y sin él la ventanilla sería más peligrosa.",
      "Cada ventanilla son 3 capas. Arriba, la cabina va con presión; fuera, a 10.000 metros, casi no hay. La capa de fuera es la que tiene que aguantar toda esa diferencia, y el agujerito de la capa de en medio es lo que se encarga de que así sea: deja pasar el aire para que la presión empuje contra el cristal exterior y no contra el interior.",
      "Y de paso sirve para otra cosa que se agradece: por ahí se escapa la humedad, y por eso el cristal no se empaña.",
    ],
  },
  /* --- TANDA 4 --------------------------------------------------------- */
  {
    id: "estrellas-y-arena",
    titular: "Hay más estrellas que granos de arena en las playas",
    realce: "más estrellas que granos de arena",
    boceto: "glowing-star",
    tema: "Espacio",
    color: "var(--dato-galaxia)", // el cielo
    mas: [
      "La cuenta de la arena la han hecho: sumando todas las playas del mundo salen unos 7 trillones de granos. Un 7 con 18 ceros detrás.",
      "Y las estrellas del universo que podemos ver salen a unos 100.000 millones de galaxias con unos 100.000 millones de estrellas cada una. Un 1 con 22 o 24 ceros. Aunque se coja el cálculo más tacaño de estrellas y el más generoso de arena, ganan las estrellas por 1.000 veces.",
      "Lo dijo Carl Sagan en televisión hace 50 años y desde entonces se ha comprobado varias veces. Sigue siendo verdad, y por goleada.",
    ],
  },
  {
    id: "ojo-avestruz",
    titular: "El ojo de un avestruz es más grande que su cerebro",
    realce: "más grande que su cerebro",
    boceto: "bird",
    tema: "Animales",
    color: "var(--dato-tierra)", // la llanura seca
    mas: [
      "Cada ojo mide unos 5 centímetros, el más grande de cualquier animal terrestre: más o menos una pelota de billar. El cerebro le cabe en una nuez.",
      "Y no es una rareza sin sentido. Vive en llanuras abiertas donde lo único que le salva es ver al león antes de que el león la vea a ella, así que la evolución le pagó ojos en vez de sesera.",
      "Le funciona. Con esos ojos distingue movimiento a varios kilómetros, y corriendo llega a los 70 por hora.",
    ],
  },
  {
    id: "elefantes-no-saltan",
    titular: "Los elefantes no pueden saltar",
    realce: "no pueden saltar",
    boceto: "elephant",
    tema: "Animales",
    color: "var(--dato-gris)", // el elefante
    mas: [
      "Para saltar hacen falta 2 cosas: pesar poco para lo fuerte que eres, y tener las patas con muelle. Un elefante no tiene ninguna de las dos. Sus huesos van casi rectos, uno encima de otro, como columnas, porque así aguantan las 6 toneladas sin partirse. Una columna no rebota.",
      "Encima le faltan los tendones elásticos que tienen en las patas los animales que saltan, esos que se estiran y devuelven la energía como una goma.",
      "Nunca tiene las 4 patas en el aire, ni corriendo. Y aun así alcanza los 25 por hora.",
    ],
  },
  {
    id: "platano-radiactivo",
    titular: "Un plátano es un poco radiactivo",
    realce: "un poco radiactivo",
    boceto: "banana",
    tema: "Comida",
    color: "var(--dato-oro)", // el plátano
    mas: [
      "Por el potasio. Todo el potasio del mundo lleva una pizca de una versión inestable que se desintegra sola, y el plátano está lleno de potasio. Así que sí: el plátano emite radiación, igual que las patatas, las alubias o tú mismo.",
      "Los que trabajan con radiación lo usan de chiste serio: la «dosis plátano», que es lo que te llevas por comerte uno, y sirve para explicarle a la gente que una cifra de radiación sola no dice nada si no se compara con algo.",
      "Para igualar una radiografía de pecho harían falta unos 1.000 plátanos. De una sola sentada.",
    ],
  },
  {
    id: "bandera-nepal",
    titular: "La bandera de Nepal no es rectangular",
    realce: "no es rectangular",
    boceto: "triangular-flag",
    tema: "El mundo",
    color: "var(--dato-rojo)", // la bandera
    mas: [
      "Son 2 triángulos, uno encima de otro, con el borde derecho en zigzag. Vienen de 2 banderines que se usaban por separado y que en el siglo pasado se juntaron en uno solo.",
      "Y la constitución del país no la describe con palabras: la describe con geometría. Hay un anexo con 24 instrucciones de dibujo —traza una línea, marca un punto aquí, une con aquel— para que cualquiera pueda construirla exacta con regla y compás.",
      "Los 2 dibujos de dentro son la Luna y el Sol, y están ahí para decir que el país durará lo que duren los 2.",
    ],
  },
  {
    id: "gambas-corazon",
    titular: "Las gambas tienen el corazón en la cabeza",
    realce: "en la cabeza",
    boceto: "shrimp",
    tema: "Animales",
    color: "var(--dato-mar)", // el mar
    mas: [
      "Lo que llamamos cabeza en una gamba es en realidad cabeza y tórax pegados en una sola pieza, y ahí dentro lleva casi todo: el corazón, el estómago y buena parte de lo demás. La cola, que es lo que nos comemos, es músculo casi entero.",
      "Y el corazón no bombea por tuberías cerradas como el tuyo. Suelta la sangre al aire, dentro del cuerpo, y esta va bañando los órganos y volviendo por su cuenta.",
      "Cuando le quitas la cabeza a una gamba, le estás quitando el corazón, el estómago y el hígado a la vez.",
    ],
  },
  {
    id: "nariz-de-perro",
    titular: "La nariz de un perro es como una huella dactilar",
    realce: "como una huella dactilar",
    boceto: "dog",
    tema: "Animales",
    color: "var(--dato-tierra)", // el perro
    mas: [
      "El morro no es liso: está lleno de arrugas, surcos y bultitos que forman un dibujo. Y ese dibujo no se repite en ningún otro perro, ni siquiera entre hermanos de la misma camada.",
      "Se le queda para toda la vida, igual que las huellas de tus dedos. En algunos países hay registros de perros que se hacen con la huella del morro entintado, como una ficha policial, y hay aplicaciones que la reconocen con la cámara del móvil.",
      "Es más fiable que el chip, porque no se puede perder ni sacar.",
    ],
  },
  {
    id: "abejas-caras",
    titular: "Las abejas reconocen caras humanas",
    realce: "reconocen caras humanas",
    boceto: "honeybee",
    tema: "Animales",
    color: "var(--dato-oro)", // la miel
    mas: [
      "Se comprobó con fotos y con agua con azúcar: se les enseñaba una cara concreta y, si acertaban al ir hacia ella, cobraban premio. Aprendieron. Y días después seguían distinguiéndola de otras caras parecidas.",
      "Lo raro es cómo lo hacen. Su cerebro tiene menos de 1 millón de neuronas —el tuyo tiene 86.000 millones— y aun así juntan los ojos, la nariz y la boca en un conjunto y lo recuerdan como una sola cosa. Es parecido a lo que haces tú.",
      "No es que sepan quién eres. Es que saben que esa combinación de rasgos ya la habían visto antes.",
    ],
  },
  {
    id: "cien-rayos-por-segundo",
    titular: "Cada segundo caen 100 rayos en el mundo",
    realce: "100 rayos",
    boceto: "cloud-with-lightning",
    tema: "Naturaleza",
    color: "var(--dato-naranja)", // el rayo
    mas: [
      "En cualquier instante hay unas 2.000 tormentas activas repartidas por el planeta, casi todas en el trópico, y entre todas sueltan alrededor de 100 relámpagos cada segundo. De esos, unos 44 tocan el suelo.",
      "Son 8 millones de rayos al día. Se cuentan de verdad: hay una red de antenas repartida por el mundo que detecta el chasquido de radio que suelta cada descarga y triangula dónde ha caído.",
      "El sitio donde más caen del planeta es un lago de Venezuela, el Maracaibo, donde hay tormenta casi 300 noches al año.",
    ],
  },
  {
    id: "panda-catorce-horas",
    titular: "Un panda come 14 horas al día",
    realce: "14 horas al día",
    boceto: "panda",
    tema: "Animales",
    color: "var(--dato-verde)", // el bambú
    mas: [
      "Y no le queda otra. Por dentro tiene el aparato digestivo de un carnívoro —corto, hecho para carne— y se ha empeñado en comer bambú, que alimenta poquísimo. Aprovecha alrededor de la sexta parte de lo que traga.",
      "Así que la cuenta le sale a base de cantidad: entre 12 y 38 kilos de bambú al día, masticando sin parar. Y lo que entra, sale: hace de vientre unas 40 veces cada día.",
      "El resto del tiempo lo pasa durmiendo, porque tampoco le da la energía para mucho más.",
    ],
  },
  /* --- TANDA 5 --------------------------------------------------------- */
  {
    id: "relojes-diez-y-diez",
    titular: "En los anuncios los relojes marcan las 10:10",
    realce: "las 10:10",
    boceto: "alarm-clock",
    tema: "Objetos",
    color: "var(--dato-gris)", // la esfera
    mas: [
      "Míralo la próxima vez que veas un reloj en una foto de catálogo, en un escaparate o en un anuncio. Casi siempre son las 10:10, o los 10:09 justos.",
      "Es porque con las manecillas ahí las dos hacen una uve, y esa uve deja despejado el centro de la esfera, que es justo donde la marca pone su nombre. Además no tapan nada de lo que hay abajo —la fecha, el segundero pequeño— y quedan simétricas, que a la vista le sienta bien.",
      "Se hace desde hace décadas y en toda la industria a la vez. Los relojes digitales de los anuncios suelen poner las 10:10 también, y ahí ya no hay manecillas que colocar: es puro respeto a la costumbre.",
    ],
  },
  {
    id: "conchas-en-el-everest",
    titular: "En la cima del Everest hay conchas de mar",
    realce: "conchas de mar",
    boceto: "mount-fuji",
    escena: "mar",
    tema: "El mundo",
    color: "var(--dato-mar)", // el mar que hubo
    mas: [
      "La roca de arriba del todo es caliza, y la caliza se hace en el fondo del mar con los restos de bichos con concha. Dentro hay fósiles de animales marinos de hace unos 450 millones de años.",
      "Estuvieron en el fondo de un océano que se llamaba Tetis. Luego la India, que era una isla enorme a la deriva, chocó contra Asia y ese fondo marino no tuvo por dónde escapar: se arrugó hacia arriba como una alfombra empujada contra la pared.",
      "Sigue subiendo, además. Unos milímetros cada año, porque la India todavía empuja.",
    ],
  },
  {
    id: "renos-ojos-azules",
    titular: "A los renos se les ponen los ojos azules en invierno",
    realce: "los ojos azules",
    boceto: "deer",
    tema: "Animales",
    color: "var(--dato-galaxia)", // el invierno
    mas: [
      "En verano tienen detrás de la retina una capa que refleja la luz en dorado, como los gatos. En invierno esa misma capa se les pone azul intenso. Es el único mamífero al que se le conoce este cambio, y va y viene con las estaciones.",
      "Lo que hace el azul es aprovechar mejor la poquísima luz que hay en un invierno ártico, donde el sol no sale durante semanas. Ven mucho peor de nítido, pero ven en una oscuridad donde nosotros no veríamos nada.",
      "Y ven en ultravioleta, que en la nieve es una ventaja enorme: el pelo del lobo y el liquen que comen absorben esa luz y se les dibujan en negro sobre un campo blanco.",
    ],
  },
  {
    id: "pupilas-de-cabra",
    titular: "Las cabras tienen las pupilas rectangulares",
    realce: "rectangulares",
    boceto: "goat",
    tema: "Animales",
    color: "var(--dato-tierra)", // el monte
    mas: [
      "Una raya horizontal, como una ranura de buzón. Y no es solo de las cabras: la tienen casi todos los animales que pastan y a los que se comen otros —ovejas, caballos, ciervos—, mientras que los que cazan al acecho, como el gato, la tienen vertical.",
      "Con esa ranura ven casi 340 grados alrededor sin mover la cabeza. Estando agachadas comiendo, tienen medio horizonte controlado.",
      "Y lo mejor: cuando bajan la cabeza para pastar, los ojos les giran dentro de la cuenca para que la ranura siga estando horizontal. Las 2 a la vez, cada una para su lado.",
    ],
  },
  {
    id: "hipopotamo-sudor-rojo",
    titular: "Los hipopótamos sudan rojo",
    realce: "sudan rojo",
    boceto: "hippopotamus",
    tema: "Animales",
    color: "var(--dato-rojo)", // el líquido
    mas: [
      "Sale transparente y a los pocos minutos se vuelve rojo anaranjado, así que durante siglos se creyó que sudaban sangre. No es sangre ni es sudor: es una sustancia que fabrican en la piel y que hace 2 trabajos a la vez.",
      "El primero es de crema solar. Filtra el ultravioleta, y un animal que se pasa el día metido en un río ecuatorial con la piel desnuda lo necesita. El segundo es de desinfectante: mata bacterias, y a un hipopótamo se le hacen heridas constantemente peleando con otros.",
      "Con el tiempo pasa de rojo a marrón. Un hipopótamo al sol acaba con la piel del color del barro seco, y no es barro.",
    ],
  },
  {
    id: "medusas-sin-nada",
    titular: "Las medusas no tienen cerebro ni corazón",
    realce: "cerebro ni corazón",
    boceto: "jellyfish",
    tema: "Animales",
    color: "var(--dato-mar)", // el mar
    mas: [
      "Tampoco huesos ni pulmones. Son agua en un 95 por ciento y una capa de gelatina que las mantiene con forma. Si sacas una a la arena, en unas horas no queda casi nada: se evapora.",
      "Funcionan sin nada de eso porque son finísimas. El oxígeno les entra por la piel a todas las células directamente, así que no hace falta un corazón que lo reparta. Y en vez de cerebro tienen una red de nervios repartida por todo el cuerpo que decide sin jefe.",
      "Llevan así más de 500 millones de años, mucho antes que los dinosaurios y que los árboles.",
    ],
  },
  {
    id: "aduana-de-la-luna",
    titular: "Los del Apolo 11 pasaron por la aduana al volver",
    realce: "pasaron por la aduana",
    boceto: "rocket",
    tema: "Espacio",
    color: "var(--dato-galaxia)", // la Luna
    mas: [
      "El 24 de julio de 1969, al llegar a Honolulu, Armstrong, Aldrin y Collins rellenaron y firmaron un impreso de aduanas de los Estados Unidos como cualquier viajero. El papel existe y se conserva.",
      "En la casilla de procedencia pone «Luna». En la de mercancía, «muestras de roca y polvo lunar». Y en la pregunta de si traen a bordo algo que pueda propagar una enfermedad, la respuesta escrita es: «Por determinar».",
      "Es el primer papeleo de una importación traída de otro mundo, y lo firmó también el jefe de aduanas de Hawái.",
    ],
  },
  {
    id: "pisa-se-torcio-antes",
    titular: "La torre de Pisa se torció antes de acabarla",
    realce: "antes de acabarla",
    boceto: "tokyo-tower",
    escena: "historia",
    tema: "El mundo",
    color: "var(--dato-tierra)", // el suelo blando
    mas: [
      "Se empezó en 1173 y ya con el tercer piso puesto se estaba hundiendo por un lado: debajo hay arcilla blanda y no aguantaba el peso repartido. Las obras se pararon casi un siglo por una guerra, y ese parón la salvó, porque le dio tiempo al suelo a asentarse.",
      "Cuando volvieron a construir, ya sabían que estaba torcida. Así que hicieron los pisos de arriba ligeramente curvados hacia el otro lado, intentando enderezarla sobre la marcha. Por eso la torre no está inclinada recta: está un poco doblada, como un plátano.",
      "Tardaron casi 200 años en acabarla, y nunca estuvo derecha ni un día.",
    ],
  },
  {
    id: "japon-mascotas",
    titular: "En Japón hay más mascotas que niños",
    realce: "más mascotas que niños",
    boceto: "house-with-garden",
    escena: "campo",
    tema: "El mundo",
    color: "var(--dato-oro)", // el país
    mas: [
      "Las cuentas del país dan alrededor de 15 o 16 millones de perros y gatos en las casas, y algo menos de 15 millones de niños menores de 15 años. La diferencia lleva creciendo desde hace más de una década.",
      "No es una anécdota simpática: es la foto de un país que lleva medio siglo teniendo menos hijos. Cada año nacen menos japoneses que el anterior, y el número de casas donde vive una persona sola con un animal sube en paralelo.",
      "Hay ropa, hoteles, guarderías y hasta seguros médicos para mascotas. Y carritos de bebé que se venden para llevar al perro.",
    ],
  },
  {
    id: "esparragos-y-el-pis",
    titular: "Los espárragos cambian el olor del pis",
    realce: "cambian el olor del pis",
    boceto: "leafy-green",
    tema: "Cuerpo",
    color: "var(--dato-verde)", // el espárrago
    mas: [
      "El espárrago lleva un compuesto de azufre que el cuerpo parte en trozos pequeños y volátiles, y esos trozos salen en el pis a los 15 o 20 minutos de comértelo. Rapidísimo.",
      "Aquí viene lo bueno: hay gente que no lo huele. Ni un poco. Depende de una letra concreta del ADN, en la zona de los genes del olfato, y buena parte de la población la tiene cambiada. Para esa gente el pis huele exactamente igual que siempre.",
      "Durante años se discutió si unos lo producían y otros no. Resultó ser lo otro: lo produce casi todo el mundo, y lo que cambia es quién puede olerlo.",
    ],
  },
  /* --- TANDA 6 --------------------------------------------------------- */
  {
    id: "atardecer-azul-en-marte",
    titular: "En Marte los atardeceres son azules",
    realce: "son azules",
    boceto: "sunset",
    escena: "cielo",
    tema: "Espacio",
    color: "var(--dato-mar)", // el azul del cielo marciano
    mas: [
      "Justo al revés que aquí. Nuestro cielo es azul de día y se pone rojo al ponerse el sol; el de Marte es rojizo de día y se pone azul alrededor del sol cuando anochece.",
      "El motivo es el polvo. El aire de Marte está lleno de partículas finísimas de polvo del tamaño justo para dejar pasar el azul en línea recta y desviar el resto de los colores. Así que la luz que llega directa desde el sol poniente llega azulada, y el resto del cielo se queda de color óxido.",
      "Los robots que hay allí lo han fotografiado varias veces. Es una de las cosas más raras de ver de todo el sistema solar.",
    ],
  },
  {
    id: "hongo-mas-grande",
    titular: "El ser vivo más grande del mundo es un hongo",
    realce: "es un hongo",
    boceto: "mushroom",
    tema: "Naturaleza",
    color: "var(--dato-verde)", // el bosque
    mas: [
      "Está en un bosque de Oregón y ocupa casi 10 kilómetros cuadrados. No se ve: casi todo es una red de hilos blancos que va por debajo de la tierra y por dentro de las raíces de los árboles, extendiéndose despacio en todas direcciones. En la superficie solo asoman setas de vez en cuando.",
      "Se comprobó que era un solo individuo y no muchos porque todas las muestras que sacaron, kilómetros aparte, tenían el mismo ADN. Es un único organismo, con una sola vida.",
      "Le calculan entre 2.000 y 8.000 años. Lleva ahí desde antes de que existiera la escritura, y no ha hecho más que crecer.",
    ],
  },
  {
    id: "tortugas-respiran-por-detras",
    titular: "Hay tortugas que respiran por el culo",
    realce: "por el culo",
    boceto: "turtle",
    tema: "Animales",
    color: "var(--dato-tierra)", // el río
    mas: [
      "Suena a broma y está estudiado con nombre y apellidos. La tortuga del río Fitzroy, en Australia, tiene dentro de esa abertura 2 bolsas llenas de pliegues finísimos y regados de vasos sanguíneos. Mete agua a bombeo, el oxígeno pasa a la sangre por esos pliegues, y saca el agua otra vez.",
      "Da hasta 60 bombeos por minuto y saca de ahí hasta el 70 por ciento del oxígeno que necesita. Puede pasarse 21 días seguidos sin subir a la superficie.",
      "Y no es un caso único. Muchas tortugas de agua fría lo usan en invierno para pasar meses debajo de un estanque helado, cuando subir a por aire es imposible.",
    ],
  },
  {
    id: "rayo-hace-cristal",
    titular: "Un rayo convierte la arena en cristal",
    realce: "en cristal",
    boceto: "high-voltage",
    tema: "Naturaleza",
    color: "var(--dato-naranja)", // el rayo
    mas: [
      "Un rayo lleva tanta energía que en el punto donde entra la temperatura sube por encima de los 1.800 grados en una fracción de segundo. La arena se funde de golpe y, al enfriarse igual de rápido, se queda hecha cristal.",
      "Lo que sale es un tubo hueco y retorcido que va siguiendo el camino que hizo la corriente al meterse en el suelo. Puede tener un dedo de grosor y bajar varios metros. Por fuera es rugoso y arenoso; por dentro, liso y brillante.",
      "Se llaman fulguritas y son literalmente la forma del rayo, congelada. Hay quien las busca en los desiertos después de las tormentas.",
    ],
  },
  {
    id: "huellas-en-la-luna",
    titular: "Las huellas de la Luna durarán millones de años",
    realce: "millones de años",
    boceto: "footprints",
    tema: "Espacio",
    color: "var(--dato-galaxia)", // la Luna
    mas: [
      "Allí no hay aire, así que no hay viento que las barra. No hay agua, así que no hay lluvia que las deshaga. Y no hay plantas ni bichos que las pisen. Nada de lo que borra una huella aquí abajo existe allí.",
      "El polvo lunar ayuda además: no es arena redondeada, son trozos afilados de roca machacada por millones de impactos, y encajan unos con otros como piezas rotas. Una pisada ahí se queda con el dibujo de la suela marcado.",
      "Lo único que las irá borrando es el goteo lentísimo de micrometeoritos. Se calcula que en 1 millón de años seguirán reconociéndose.",
    ],
  },
  {
    id: "dientes-de-tiburon",
    titular: "Un tiburón gasta 30.000 dientes en su vida",
    realce: "30.000 dientes",
    boceto: "shark",
    tema: "Animales",
    color: "var(--dato-mar)", // el mar
    mas: [
      "No los tiene clavados en el hueso como tú: los lleva sujetos a la encía, en filas, y detrás de la fila que usa hay varias más esperando, tumbadas hacia atrás. Cuando se le cae uno, el de detrás rota hacia delante y ocupa el hueco en cuestión de días.",
      "Es una cinta transportadora. Algunas especies cambian de diente cada semana, y a lo largo de una vida larga la cuenta se va a decenas de miles.",
      "Por eso los dientes de tiburón fosilizados se encuentran a montones y sus esqueletos casi nunca: el resto del animal es cartílago, que no aguanta, y el diente es lo único duro que tiene.",
    ],
  },
  {
    id: "un-millon-de-tierras",
    titular: "Dentro del Sol caben 1,3 millones de Tierras",
    realce: "1,3 millones de Tierras",
    boceto: "sun",
    tema: "Espacio",
    color: "var(--dato-naranja)", // el Sol
    mas: [
      "1.300.000, para ser exactos, si se pudieran ir metiendo sin dejar huecos. Y el Sol no es una estrella grande: entre las que se ven en el cielo hay muchas que lo dejan en nada.",
      "Otra manera de verlo, con lo que hay en la mesa. Si el Sol fuera una pelota de baloncesto, la Tierra sería la cabeza de un alfiler puesta a 30 metros.",
      "Y pese a todo eso, el Sol es lo pequeño de la historia: pesa el 99,8 por ciento de todo el sistema solar. Los 8 planetas, las lunas, los asteroides y los cometas juntos son las migas que sobraron.",
    ],
  },
  {
    id: "aire-antiguo-en-el-hielo",
    titular: "En el hielo antártico hay aire de hace 800.000 años",
    realce: "aire de hace 800.000 años",
    boceto: "snowflake",
    tema: "Naturaleza",
    color: "var(--dato-gris)", // el hielo
    mas: [
      "Cada nevada atrapa burbujas de aire, y encima cae la del año siguiente, y la del siguiente. Al fondo, el hielo es una pila de inviernos apretados con el aire de cada uno guardado dentro, intacto.",
      "Se sacan cilindros de hielo de más de 3 kilómetros de profundidad, se cuentan las capas como los anillos de un árbol y se abren las burbujas en un laboratorio. Lo que se respira ahí dentro es literalmente el aire que había en el planeta aquel año.",
      "Gracias a eso sabemos cuánto dióxido de carbono había hace 800.000 años, sin tener que estimarlo. Está medido.",
    ],
  },
  {
    id: "ojo-de-calamar",
    titular: "El ojo del calamar gigante mide 30 centímetros",
    realce: "30 centímetros",
    boceto: "squid",
    tema: "Animales",
    color: "var(--dato-mar)", // el fondo del mar
    mas: [
      "Casi 30 centímetros de diámetro: el ojo más grande de cualquier animal que haya existido, hoy o antes. Un ojo humano mide 2 centímetros y medio.",
      "Vive a cientos de metros de profundidad, donde no llega ni un rayo de sol, así que uno pensaría que no le sirve de nada. Sirve, y para una cosa concreta: detectar el resplandor que sueltan los bichos pequeños cuando un cachalote pasa nadando entre ellos.",
      "O sea que ese ojo no está para ver. Está para ver venir al único animal que se lo come.",
    ],
  },
  {
    id: "corazon-cien-mil",
    titular: "Tu corazón late 100.000 veces al día",
    realce: "100.000 veces al día",
    boceto: "anatomical-heart",
    tema: "Cuerpo",
    color: "var(--dato-rojo)", // el corazón
    mas: [
      "Unos 70 por minuto, 4.200 por hora, 100.000 al día. Al año son casi 40 millones, y en una vida de 80 años pasan de 3.000 millones de latidos sin pararse ni una sola vez.",
      "Y no es un músculo cualquiera. Los demás se cansan; este no puede permitírselo, así que sus células están llenas de las fábricas de energía diminutas que tienen todas las células, pero en una cantidad que no tiene ningún otro tejido del cuerpo.",
      "Empezó a latir cuando eras un embrión de 3 semanas, antes de que hubiera un cerebro que se lo mandara.",
    ],
  },
  /* --- TANDA 7, la que cierra los cien ---------------------------------- */
  {
    id: "andromeda-choque",
    titular: "Nuestra galaxia va a chocar con la de al lado",
    realce: "va a chocar",
    boceto: "milky-way",
    tema: "Espacio",
    color: "var(--dato-galaxia)", // el cielo
    mas: [
      "Andrómeda viene hacia nosotros a unos 400.000 kilómetros por hora, y no es una suposición: se mide viendo cómo se corre el color de su luz. Llegará dentro de unos 4.000 millones de años.",
      "Y no será un choque como uno se imagina. Dentro de una galaxia las estrellas están tan separadas que casi ninguna dará contra otra: es como cruzar 2 enjambres de mosquitos. Lo que sí pasará es que la gravedad lo revolverá todo y las dos acabarán fundidas en una galaxia nueva, más redonda.",
      "Para entonces el Sol llevará mucho tiempo apagándose. Pero el cielo de esas noches, con la otra galaxia ocupando media bóveda, habría sido algo que ver.",
    ],
  },
  {
    id: "arbol-de-diez-mil-anos",
    titular: "Hay un árbol vivo de 9.500 años",
    realce: "de 9.500 años",
    boceto: "deciduous-tree",
    tema: "Naturaleza",
    color: "var(--dato-verde)", // el árbol
    mas: [
      "Está en una montaña de Suecia, es un abeto y visto de lejos no impresiona: un arbolillo flaco de unos 5 metros. El tronco que se ve es joven, de unos siglos. Lo viejo son las raíces, y se han datado en unos 9.500 años.",
      "El truco es que cuando el tronco se muere, de la misma raíz brota otro. Ha repetido esa operación cientos de veces mientras a su alrededor se acababa la última glaciación, se inventaba la agricultura y se levantaban y caían todos los imperios.",
      "Le llaman Old Tjikko, por el perro del que lo encontró.",
    ],
  },
  {
    id: "vida-en-una-cucharada",
    titular: "En una cucharada de tierra hay más vida que gente en el mundo",
    realce: "más vida que gente en el mundo",
    boceto: "spoon",
    escena: "campo",
    tema: "Naturaleza",
    color: "var(--dato-tierra)", // la tierra
    mas: [
      "En un gramo de tierra de jardín se cuentan miles de millones de bacterias, más cientos de metros de hilos de hongo enrollados, más miles de bichos microscópicos. Somos 8.000 millones de personas: eso cabe en una cucharada de tierra, y sobra.",
      "Y no está ahí de adorno. Esa multitud es la que deshace las hojas caídas, la que suelta los minerales que las raíces necesitan y la que fabrica el suelo. Sin ella, la tierra sería polvo estéril.",
      "La mayoría de esas especies no tienen nombre todavía. Se han descrito muy pocas, porque casi ninguna se deja cultivar en un laboratorio.",
    ],
  },
  {
    id: "una-abeja-una-gota",
    titular: "Una abeja hace unas gotas de miel en toda su vida",
    realce: "unas gotas de miel",
    boceto: "honey-pot",
    tema: "Comida",
    color: "var(--dato-oro)", // la miel
    mas: [
      "La doceava parte de una cucharadita, para ser exactos. Eso es todo lo que produce una obrera desde que empieza a salir a volar hasta que se muere, unas 6 semanas después en plena temporada.",
      "Para juntar un solo bote de medio kilo hacen falta unas 2.000 abejas trabajando toda su vida, y entre todas suman más de 3 vueltas al mundo en kilómetros volados.",
      "Cuando abres un bote de miel, tienes delante la vida entera de un par de miles de animales.",
    ],
  },
  {
    id: "flamenco-cabeza-al-reves",
    titular: "Los flamencos comen con la cabeza del revés",
    realce: "del revés",
    boceto: "flamingo",
    tema: "Animales",
    color: "var(--dato-rojo)", // el flamenco
    mas: [
      "Meten la cabeza en el agua y la giran hasta ponerla boca abajo, con la parte de arriba del pico rozando el fondo. Comen así todo el rato, en una postura que en cualquier otro animal sería un accidente.",
      "Es la única manera de que les funcione el pico. Lo tienen lleno de láminas finísimas, como las barbas de una ballena, y usan la lengua de bomba: meten agua con barro, la empujan fuera por las láminas y se quedan con lo que no pasa. Para que ese filtro trabaje bien tiene que ir del derecho, y su pico va del derecho cuando la cabeza va del revés.",
      "De ahí sale también su color: de los bichos rosados que se quedan en el filtro.",
    ],
  },
  {
    id: "dieciseis-amaneceres",
    titular: "En la Estación Espacial amanece 16 veces al día",
    realce: "16 veces al día",
    boceto: "sunrise",
    tema: "Espacio",
    color: "var(--dato-naranja)", // el amanecer
    mas: [
      "Da una vuelta entera a la Tierra cada 90 minutos, a 28.000 kilómetros por hora. En cada vuelta pasa del lado iluminado al lado de sombra y vuelve, así que en 24 horas ve 16 amaneceres y 16 puestas de sol.",
      "Eso rompe el sueño de cualquiera, y es un problema serio: la tripulación duerme con horario de Londres, en cabinas del tamaño de una cabina telefónica, atados con correas para no salir flotando, y con antifaz.",
      "El amanecer, eso sí, dura unos segundos. Se pasa del negro absoluto a una raya azul y naranja en el borde del planeta, y de ahí a pleno día.",
    ],
  },
  {
    id: "lengua-oso-hormiguero",
    titular: "La lengua del oso hormiguero mide 60 centímetros",
    realce: "60 centímetros",
    boceto: "ant",
    tema: "Animales",
    color: "var(--dato-tierra)", // el hormiguero
    mas: [
      "Es más larga que su propia cabeza, y no la sujeta la mandíbula: le sale de una pieza pegada al esternón, en mitad del pecho. Va y viene 150 veces por minuto, más de 2 veces por segundo.",
      "No tiene un solo diente. Rompe el hormiguero con las uñas, mete la lengua, la saca pegajosa de hormigas y termina. Se marcha antes de que las hormigas soldado se organicen: un minuto por hormiguero, y a otro.",
      "Así se come 30.000 hormigas al día, de 200 hormigueros distintos, sin acabar con ninguno.",
    ],
  },
  {
    id: "pepitas-de-manzana",
    titular: "Las pepitas de la manzana llevan cianuro",
    realce: "llevan cianuro",
    boceto: "red-apple",
    tema: "Comida",
    color: "var(--dato-verde)", // la manzana
    mas: [
      "Llevan un compuesto que, al masticarlo, se rompe y suelta cianuro de verdad. También lo tienen los huesos de la cereza, del melocotón y de la almendra amarga. Es la manera que tiene la planta de proteger la semilla: quien la muerda, que lo pase mal.",
      "Ahora la parte tranquilizadora. Enteras no pasa nada: la cáscara de la pepita aguanta el viaje por el estómago sin abrirse. Y aunque las masticaras, harían falta cientos de pepitas de golpe, muy bien trituradas, para llegar a una dosis peligrosa.",
      "O sea que una manzana comida con pepitas y todo no le ha hecho daño a nadie. Pero el cianuro está.",
    ],
  },
  {
    id: "primer-movil",
    titular: "El primer móvil pesaba 790 gramos",
    realce: "790 gramos",
    boceto: "mobile-phone",
    tema: "Objetos",
    color: "var(--dato-gris)", // el aparato
    mas: [
      "Salió en 1983, se llamaba DynaTAC 8000X y era un ladrillo de 30 centímetros con una antena de goma encima. 790 gramos. 4.000 dólares de entonces, que hoy serían más de 12.000.",
      "Y con eso hablabas media hora. La batería tardaba 10 horas en cargarse para dar 30 minutos de conversación, así que la gente que se lo podía permitir llevaba una segunda batería en el maletín.",
      "No hacía nada más. Ni mensajes, ni agenda, ni pantalla más allá de un renglón rojo con el número. Llamar, y ya.",
    ],
  },
  {
    id: "luna-maletas",
    titular: "Llegamos a la Luna antes que las maletas con ruedas",
    realce: "antes que las maletas con ruedas",
    boceto: "luggage",
    escena: "noche",
    tema: "Tecnología",
    color: "var(--dato-galaxia)", // la Luna
    mas: [
      "El Apolo 11 alunizó en julio de 1969. La maleta con ruedas la pidió como patente Bernard Sadow en 1970 y se la dieron en 1972. La idea se le ocurrió arrastrando 2 maletas por una aduana mientras veía a un operario mover una máquina enorme, sin esfuerzo, encima de una plataforma con rueditas.",
      "Y costó venderla. Los grandes almacenes le decían que un hombre no iba a ir tirando de una maleta pudiendo llevarla en brazos, que quedaba mal. Salió a la venta en Macy's en 1970. La que usas tú —vertical, 2 ruedas y asa que sale y entra— es todavía más tardía: la inventó un piloto de línea aérea en los años 80.",
      "Entre pisar la Luna y arrastrar una maleta por un aeropuerto pasó casi un año.",
    ],
  },
  {
    id: "sol-ocho-minutos",
    titular: "El Sol que ves salió hace 8 minutos",
    realce: "hace 8 minutos",
    boceto: "sun",
    tema: "Espacio",
    color: "var(--dato-naranja)", // el Sol
    mas: [
      "La luz va a 300.000 kilómetros por segundo, que es rapidísimo pero no es instantáneo. Del Sol hasta aquí hay 150 millones de kilómetros, y el viaje le lleva 8 minutos y 20 segundos. O sea que el Sol que ves por la ventana es el de hace 8 minutos.",
      "Con lo demás es mucho peor. La luz de la estrella más cercana tarda algo más de 4 años en llegar, y la de otras que se ven a simple vista lleva viajando desde antes de que se construyera ninguna catedral. El cielo de noche son un montón de fechas distintas a la vez.",
      "Y durante esos 8 minutos todo seguiría igual. La luz, el calor, las sombras en el suelo. Y ya no habría Sol.",
    ],
  },
  /* Lo que se salva de las tandas anteriores: las que se entienden sin pensar.
     El Krakatoa —con el titular reescrito, porque «dio cuatro vueltas a la
     Tierra» obligaba a preguntarse qué es lo que daba vueltas—, la baraja, las
     dos islas, la medusa, la Luna y las maletas, y los ocho minutos del Sol.
     Todo lo demás de aquellas tandas está en el historial de git. */
  {
    id: "krakatoa",
    titular: "El Krakatoa se oyó a 4.800 kilómetros",
    realce: "a 4.800 kilómetros",
    boceto: "volcano",
    tema: "Naturaleza",
    color: "var(--dato-rojo)", // el volcán
    mas: [
      "El 27 de agosto de 1883 la isla voló por los aires, y el ruido se oyó con claridad en Rodrigues, una isla perdida del océano Índico que está a 4.800 kilómetros. Para hacerse una idea: de Madrid a Moscú hay 3.400. Aquello se oyó 1.400 kilómetros más lejos todavía, y los que lo oyeron pensaron que eran cañonazos de un barco en apuros.",
      "La onda de presión no se paró ahí. Le dio 4 vueltas al planeta, y los barómetros de media Europa la fueron registrando cada vez que pasaba por encima, sin que nadie entendiera al principio qué estaban midiendo. En Perth, a 3.100 kilómetros, la gente salió a la calle a mirar. Y a 65 kilómetros del volcán, a los marineros de los barcos que había allí les reventaron los tímpanos.",
      "Es el sonido más fuerte del que se tiene registro. Nadie ha vuelto a oír nada parecido, y con suerte nadie lo oirá.",
    ],
  },
  {
    id: "diomede",
    titular: "Rusia y Estados Unidos están a 4 kilómetros",
    realce: "a 4 kilómetros",
    boceto: "desert-island",
    tema: "El mundo",
    color: "var(--dato-mar)", // el estrecho helado
    mas: [
      "En mitad del estrecho de Bering hay 2 islas, una enfrente de otra, separadas por 3 kilómetros y 800 metros de agua. La grande es rusa. La pequeña es estadounidense y tiene un pueblo con escuela. En los inviernos más fríos el mar se hiela entre las 2.",
      "Y por ese canal pasa la línea internacional de cambio de fecha, así que a la rusa la llaman la isla de Mañana y a la americana la isla de Ayer. La diferencia entre las dos no es de 24 horas, que sería lo lógico, sino de veintiuna: los husos horarios no están repartidos a partes iguales y ahí se nota.",
      "Desde la playa de una se ve el día siguiente.",
    ],
  },
  {
    id: "barajar-cartas",
    titular: "Hay más barajas posibles que átomos en la Tierra",
    realce: "que átomos en la Tierra",
    boceto: "flower-playing-cards",
    tema: "Números",
    color: "var(--dato-rojo)", // los corazones de la baraja
    mas: [
      "52 cartas se pueden ordenar de un número que se escribe con un 8 y 67 ceros detrás. Los átomos que hay en el planeta entero, contando el mar, el aire y el hierro del centro, son un 1 con unos 50 ceros. No es que haya un poco más de barajas: hay 100.000 billones de veces más.",
      "Otra manera de verlo. Si alguien se hubiera puesto a barajar un mazo distinto cada segundo desde el principio del universo, y llevara ahí desde entonces, hoy no habría llegado ni a la milmillonésima parte de todas las combinaciones posibles.",
      "Así que cada vez que barajas bien una baraja, estás poniendo esas cartas en un orden que casi con toda seguridad no ha existido nunca y no va a volver a existir.",
    ],
  },
  {
    id: "medusa-inmortal",
    titular: "Hay una medusa que vuelve a ser cría",
    realce: "vuelve a ser cría",
    boceto: "jellyfish",
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
    boceto: "sports-medal",
    tema: "Deporte",
    color: "var(--dato-gris)", // la plata que hay debajo
    mas: [
      "El reglamento del Comité Olímpico lo dice con todas las letras: la medalla de primer puesto tiene que ser de plata de ley —al menos un 92,5 %— y llevar por fuera un mínimo de 6 gramos de oro. 6 gramos es menos de lo que pesa una moneda de un euro.",
      "Las últimas macizas se repartieron en Estocolmo en 1912, y llevaban unos 24 gramos de oro cada una. Después llegó la guerra, el metal se puso imposible y los Juegos empezaron a crecer: fundir cientos de medallas de oro puro cada 4 años dejó de tener sentido.",
      "Así que cada vez que un campeón se muerde la medalla para la foto, lo que está mordiendo es plata con 6 gramos de barniz caro.",
    ],
  },
  {
    id: "caja-negra-naranja",
    titular: "La caja negra de un avión es naranja",
    realce: "es naranja",
    boceto: "airplane",
    escena: "fuego",
    tema: "Tecnología",
    color: "var(--dato-naranja)", // el color que es
    mas: [
      "Se pinta de un naranja fuerte, y por el motivo más razonable del mundo: hay que encontrarla entre toneladas de chatarra retorcida, a veces en el fondo del mar. Lo negro nunca fue el color. El nombre se le quedó pegado por otro lado y ya no hubo manera de quitárselo.",
      "La inventó un químico australiano, David Warren, después de investigar un accidente en 1954 y darse cuenta de que nadie sabía qué habían dicho los pilotos en los últimos minutos. En Australia no le hicieron caso durante años. La suya tiene además una coincidencia que él se pasó la vida desmintiendo: en 1934, cuando tenía 9 años, su padre murió en el Miss Hobart, un avión que desapareció sobre el estrecho de Bass y del que nunca se supo qué pasó.",
      "Warren decía que el accidente no tuvo nada que ver, y que lo que le empujó fue el último regalo que le hizo su padre antes de subirse a aquel avión: una radio de galena, con la que el niño se aficionó a la electrónica escuchándola por la noche debajo de las mantas del internado.",
    ],
  },
  {
    id: "sagrada-familia",
    titular: "La Sagrada Familia estuvo 137 años sin permiso de obra",
    realce: "137 años sin permiso de obra",
    boceto: "church",
    tema: "Arquitectura",
    color: "var(--dato-tierra)", // la piedra y la obra
    mas: [
      "Las obras empezaron el 19 de marzo de 1882. El permiso se pidió 3 años después al ayuntamiento de Sant Martí de Provençals, que entonces era un pueblo aparte, y allí se quedó: nadie lo resolvió, el pueblo se anexionó a Barcelona en 1897 y el papel se perdió por el camino.",
      "Nadie se dio cuenta en más de un siglo. Cuando el ayuntamiento abrió expediente, la junta que construye el templo acordó pagar 36 millones de euros por los servicios y las obras de alrededor, y la licencia se firmó por fin en junio de 2019. 137 años levantando el monumento más visitado de la ciudad sin el papel que le piden a cualquiera para cambiar unas ventanas.",
    ],
  },
  {
    id: "ferrari-rojo",
    titular: "Los Ferrari son rojos porque a Italia le tocó ese color",
    realce: "le tocó ese color",
    boceto: "racing-car",
    tema: "Motor",
    color: "var(--dato-rojo)", // el color del que habla la frase
    mas: [
      "Antes de que existieran los patrocinadores, en las carreras internacionales no elegía el color cada escudería: lo tenía asignado su país. Italia, rojo. Francia, azul. Reino Unido, verde. Alemania, blanco, y después el plata de dejar el aluminio a la vista.",
      "Así que Enzo Ferrari no escogió el rojo. Se lo encontró puesto. Lo que sí hizo fue quedárselo cuando la norma dejó de existir, y hoy es lo primero que dice cualquiera si le preguntas de qué color es un Ferrari.",
    ],
  },
  {
    id: "caballo-ferrari",
    titular: "El escudo de Ferrari viene de un avión de guerra",
    realce: "de un avión de guerra",
    boceto: "horse",
    escena: "motor",
    tema: "Motor",
    color: "var(--dato-oro)", // el amarillo de Módena del escudo
    mas: [
      "Francesco Baracca fue el aviador italiano más famoso de la Primera Guerra Mundial, y llevaba un caballo negro encabritado pintado en el fuselaje. Lo derribaron en 1918, con 31 aviones enemigos a sus espaldas.",
      "Años después, la madre de Baracca conoció a un joven Enzo Ferrari y le dijo que pusiera el caballo de su hijo en sus coches, que le daría suerte. Él lo hizo y le añadió un fondo amarillo, que es el color de Módena, su ciudad.",
    ],
  },
  {
    id: "india",
    titular: "El país con más gente ya no es China, es la India",
    realce: "es la India",
    boceto: "world-map",
    tema: "El mundo",
    color: "var(--dato-naranja)", // el azafrán de su bandera
    mas: [
      "India la adelantó en 2023 y hoy anda por los 1.450 millones de personas. China llevaba en cabeza desde que hay cuentas fiables.",
      "Y la distancia va a seguir creciendo un tiempo, porque en China nacen cada vez menos niños mientras que en India la población todavía es joven. Uno de cada 6 habitantes del planeta es indio.",
    ],
  },
  {
    id: "cleopatra",
    titular: "Cleopatra vivió más cerca de la Luna que de las pirámides",
    realce: "más cerca de la Luna que de las pirámides",
    boceto: "crescent-moon",
    tema: "Historia",
    color: "var(--dato-galaxia)", // la Luna, que es lo que se tiñe
    mas: [
      "La Gran Pirámide se terminó hacia el año 2560 antes de Cristo. Cleopatra murió en el 30 antes de Cristo. Entre las 2 hay 2.500 años.",
      "Del día que murió Cleopatra al día que Armstrong pisó la Luna hay 2.000. O sea que ella estaba 500 años más cerca del cohete que de la pirámide, y la pirámide ya era una antigualla cuando ella nació.",
    ],
  },
  {
    id: "tiburones",
    titular: "Los tiburones son más antiguos que los árboles",
    realce: "más antiguos que los árboles",
    boceto: "shark",
    tema: "Naturaleza",
    color: "var(--dato-verde)", // los árboles, que es lo que se tiñe
    mas: [
      "Los primeros tiburones andaban por el mar hace unos 420 millones de años. Los primeros árboles con tronco de verdad aparecieron hace unos 385.",
      "35 millones de años de diferencia. Cuando el primer árbol echó raíces, los tiburones llevaban ya una eternidad haciendo lo mismo que hacen hoy.",
    ],
  },
  {
    id: "venus",
    titular: "En Venus un día dura más que un año",
    realce: "más que un año",
    boceto: "ringed-planet",
    tema: "Espacio",
    color: "var(--dato-galaxia)", // un planeta
    mas: [
      "Venus tarda 243 días terrestres en dar una vuelta sobre sí mismo, y solo 225 en dar la vuelta al Sol.",
      "O sea que allí te da tiempo a cumplir años antes de ver amanecer. Y por si fuera poco gira al revés que los demás planetas, así que el Sol sale por el oeste.",
    ],
  },
  {
    id: "eiffel",
    titular: "La torre Eiffel es más alta en verano",
    realce: "más alta en verano",
    boceto: "tokyo-tower",
    escena: "fuego",
    tema: "Ingeniería",
    color: "var(--dato-naranja)", // el calor del verano, que es lo que la estira
    mas: [
      "Está hecha de hierro, y el hierro se estira con el calor. Entre un día de invierno y uno de verano la torre gana unos 15 centímetros.",
      "También se inclina un poco: la cara que da el sol se calienta antes que la de la sombra, así que la punta se aparta unos centímetros del lado soleado. Vuelve sola al ponerse el sol.",
    ],
  },
  {
    id: "platano-baya",
    titular: "El plátano es una baya y la fresa no",
    realce: "y la fresa no",
    boceto: "strawberry",
    tema: "Naturaleza",
    color: "var(--dato-rojo)", // la fresa, que es lo que se tiñe
    mas: [
      "Para un botánico, una baya es un fruto carnoso que sale de una sola flor y lleva las semillas dentro. El plátano cumple. El tomate y el aguacate también.",
      "La fresa no. Lo rojo que te comes es la base de la flor, hinchada; los frutos de verdad son esos puntitos amarillos de fuera, y cada uno lleva su semilla. Te comes 200 frutos por fresa.",
    ],
  },
  {
    id: "pulpo",
    titular: "Un pulpo tiene 3 corazones y la sangre azul",
    realce: "3 corazones y la sangre azul",
    boceto: "octopus",
    tema: "Naturaleza",
    color: "var(--dato-mar)", // la sangre azul
    mas: [
      "2 corazones empujan la sangre hacia las branquias y el tercero la reparte por el resto del cuerpo. Y es azul porque para transportar el oxígeno usa cobre en vez de hierro, que es lo que a nosotros nos pone la sangre roja.",
      "Lo mejor es lo que pasa cuando nada: el corazón grande se le para. Por eso un pulpo prefiere andar por el fondo a nadar, porque nadar le agota de una manera que a nosotros nos costaría explicar.",
    ],
  },
  {
    id: "arboles-estrellas",
    titular: "Hay más árboles que estrellas en nuestra galaxia",
    realce: "más árboles que estrellas",
    boceto: "deciduous-tree",
    escena: "noche",
    tema: "Naturaleza",
    color: "var(--dato-galaxia)", // las estrellas de la galaxia, que es lo que se tiñe
    mas: [
      "El recuento más serio que se ha hecho da unos 3 billones de árboles en el planeta. La Vía Láctea tiene entre 100.000 y 400.000 millones de estrellas.",
      "O sea que por cada estrella de nuestra galaxia hay como 10 árboles aquí abajo. Aun así hemos talado casi la mitad de los que había cuando empezó la agricultura.",
    ],
  },
  {
    id: "saturno",
    titular: "Saturno flotaría en el agua",
    realce: "flotaría en el agua",
    boceto: "ringed-planet",
    tema: "Espacio",
    color: "var(--dato-mar)", // la bañera: lo que se tiñe es «flotaría»
    mas: [
      "Es el único planeta del sistema solar que pesa menos que el agua: unos 70 gramos por cada 100 de agua. Es casi todo hidrógeno y helio, y muy poco apretado.",
      "La bañera tendría que medir 120.000 kilómetros de ancho, así que el chiste no se puede comprobar. Pero el número es real.",
    ],
  },
  {
    id: "rayo",
    titular: "Un rayo está 5 veces más caliente que el Sol",
    realce: "5 veces más caliente que el Sol",
    boceto: "high-voltage",
    escena: "fuego",
    tema: "Espacio",
    color: "var(--dato-naranja)", // el calor, cinco veces el del Sol
    mas: [
      "El aire por el que pasa un rayo llega a unos 30.000 grados. La superficie del Sol está a 5.500.",
      "Lo que pasa es que dura unas millonésimas de segundo y es finísimo, así que no calienta nada a su alrededor. El trueno es justamente eso: el aire estallando de golpe al calentarse tan deprisa.",
    ],
  },
  {
    id: "muralla",
    titular: "La muralla china no se ve desde el espacio",
    realce: "no se ve desde el espacio",
    boceto: "brick",
    tema: "Historia",
    color: "var(--dato-galaxia)", // el espacio desde donde no se ve
    mas: [
      "Es larguísima, sí, pero estrecha: unos pocos metros de ancho, y del color de la tierra que tiene al lado. Verla desde la órbita sería como distinguir un pelo humano a 2 kilómetros.",
      "Lo han desmentido los propios astronautas, chinos incluidos. La frase circula desde antes de que nadie hubiera subido, que es lo que la hace curiosa: se dio por buena durante décadas sin que nadie pudiera comprobarla.",
    ],
  },
  {
    id: "vikingos",
    titular: "Los vikingos nunca llevaron cascos con cuernos",
    realce: "nunca llevaron cascos con cuernos",
    boceto: "crossed-swords",
    tema: "Historia",
    color: "var(--dato-mar)", // el mar del norte
    mas: [
      "No ha aparecido ni uno solo en ninguna excavación, y se han excavado muchas. Con cuernos, un casco es peor casco: le da al enemigo 2 asas para tirarte la cabeza hacia atrás.",
      "La imagen viene del vestuario que un diseñador alemán hizo en 1876 para una ópera de Wagner. Siglo y medio después, sale en todos los dibujos animados.",
    ],
  },
  {
    id: "napoleon",
    titular: "Napoleón no era bajo, medía 1,68",
    realce: "medía 1,68",
    boceto: "top-hat",
    tema: "Historia",
    color: "var(--dato-morado)", // la púrpura imperial
    mas: [
      "Medía un metro 68, que era justo la media de un francés de su época. La leyenda viene de un lío de medidas: en Francia se apuntó su altura en pulgadas francesas, que eran más largas que las inglesas, y al traducirlo salió un hombre mucho más bajo.",
      "Ayudó que los granaderos de su guardia fueran elegidos por altos, así que en los retratos siempre sale rodeado de gigantes.",
    ],
  },
  {
    id: "guerra-corta",
    titular: "La guerra más corta de la historia duró 38 minutos",
    realce: "38 minutos",
    boceto: "hourglass-done",
    tema: "Historia",
    color: "var(--dato-naranja)", // el fuego de los cañones
    mas: [
      "Zanzíbar contra el Reino Unido, el 27 de agosto de 1896. Había muerto el sultán y subió al trono uno que a los británicos no les convenía. Le dieron un ultimátum de unas horas.",
      "A las 9 y 2 minutos de la mañana empezó el bombardeo. A las nueve y cuarenta se había acabado todo. El sultán se escapó por una puerta trasera y acabó en el exilio.",
    ],
  },
  {
    id: "nintendo",
    titular: "Nintendo empezó haciendo barajas en 1889",
    realce: "haciendo barajas",
    boceto: "flower-playing-cards",
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
    boceto: "flamingo",
    tema: "Naturaleza",
    color: "var(--dato-gris)", // gris, literal: es la palabra teñida
    mas: [
      "El rosa no lo trae puesto: se lo come. Los crustáceos y las algas de los que vive llevan unos pigmentos que se le van depositando en las plumas, y tarda un par de años en teñirse del todo.",
      "En un zoo, si no le dan esa comida, el flamenco se vuelve blanco. Y cuando una madre está criando pierde color, porque le pasa parte del pigmento a la cría.",
    ],
  },
  {
    id: "miel",
    titular: "La miel no se estropea nunca",
    realce: "no se estropea nunca",
    boceto: "honey-pot",
    tema: "Naturaleza",
    color: "var(--dato-oro)", // la miel
    mas: [
      "Casi no tiene agua y es ácida, así que una bacteria que caiga dentro no puede ni beber ni multiplicarse. Además las abejas le añaden una sustancia que remata a lo que quede vivo.",
      "En tumbas egipcias se han encontrado tarros de miel de hace 3.000 años que seguían siendo miel. Lo único que le pasa con el tiempo es que se vuelve dura y opaca, y eso se arregla con un baño de agua caliente.",
    ],
  },
  {
    id: "groenlandia",
    titular: "Groenlandia es 14 veces más pequeña que África",
    realce: "14 veces más pequeña",
    boceto: "globe-showing-europe-africa",
    tema: "El mundo",
    color: "var(--dato-mar)", // el hielo
    mas: [
      "En el mapa de toda la vida parecen del mismo tamaño. Ese mapa se dibujó en 1569 para navegar, y para conseguir que un rumbo recto saliera como una línea recta hay que estirar lo que está lejos del ecuador.",
      "Cuanto más al norte o al sur, más se infla. Groenlandia sale enorme, África sale pequeña, y Europa parece mucho más grande de lo que es.",
    ],
  },
  {
    id: "oxford",
    titular: "Oxford es más antigua que el imperio azteca",
    realce: "más antigua que el imperio azteca",
    boceto: "classical-building",
    tema: "Historia",
    color: "var(--dato-galaxia)", // el azul Oxford se llama así por algo
    mas: [
      "Hay constancia de enseñanza en Oxford desde 1096. Tenochtitlan, la capital azteca, se fundó en 1325.",
      "230 años de diferencia. Cuando los mexicas llegaron a la laguna donde iban a levantar su ciudad, en Oxford ya llevaban generaciones discutiendo de teología.",
    ],
  },
  {
    id: "uombat",
    titular: "El uómbat hace la caca cuadrada",
    realce: "la caca cuadrada",
    boceto: "beaver",
    tema: "Naturaleza",
    color: "var(--dato-tierra)", // marrón, que es lo que es
    mas: [
      "Es el único animal conocido que lo hace, y se tardó en entender por qué. La última parte de su intestino no es igual de elástica en todo el contorno: hay zonas que ceden y zonas que no, y al apretar van formando esquinas.",
      "Le sirve para algo. El uómbat marca su territorio dejando montoncitos encima de piedras y troncos, y una caca cuadrada tiene una ventaja evidente sobre una redonda: no se cae rodando.",
    ],
  },
];
