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
     LA TANDA DEL 4 DE SEPTIEMBRE, SEGUNDO INTENTO.

     La primera fueron diez historias de origen —el mordisco de Apple, el
     logotipo de Nike, el cruasán vienés, las estrellas Michelin— y Pablo las
     devolvió: «son un poco ambiguas, no me gustan; me gustaría que fueran
     datos y cosas más interesantes, de todo tipo pero cosas divertidas de
     leer».

     Y tenía razón, y el fallo se ve al ponerlas en fila. Todas eran de la
     misma familia: quién inventó qué y qué quiso decir el que lo hizo. Eso
     necesita que el lector ya se hubiera hecho la pregunta —¿por qué tiene un
     mordisco?—, y si no se la había hecho, el titular no le dice nada. Encima
     la mitad eran negaciones: «no es francés», «no lo inventó Coca-Cola». Una
     negación te quita algo y no te deja nada en la mano.

     LO QUE SÍ FUNCIONA se ve en las dos que sobrevivieron de aquella tanda y
     en las que ya había: un hecho FÍSICO, que se puede ver en la cabeza, con
     un número o una imagen dentro, y que se cuenta entero en una frase. La
     medalla de oro es de plata. La caja negra es naranja. El pulpo tiene tres
     corazones. No hay que saber nada antes para que te haga levantar la vista.

     La prueba, para no volver a equivocarse: si el titular se puede repetir de
     memoria en la mesa de un bar, entra. Si hay que explicar antes de qué va,
     es un short.
     ------------------------------------------------------------------------ */
  {
    id: "krakatoa",
    titular: "El estallido del Krakatoa dio cuatro vueltas a la Tierra",
    realce: "dio cuatro vueltas a la Tierra",
    tema: "Naturaleza",
    color: "var(--dato-rojo)", // el volcán
    mas: [
      "El 27 de agosto de 1883 la isla voló por los aires, y el ruido se oyó con claridad en Rodrigues, una isla perdida del océano Índico que está a cuatro mil ochocientos kilómetros. Para hacerse una idea: de Madrid a Moscú hay tres mil cuatrocientos. Aquello se oyó mil cuatrocientos kilómetros más lejos todavía, y los que lo oyeron pensaron que eran cañonazos de un barco en apuros.",
      "La onda de presión no se paró ahí. Le dio cuatro vueltas al planeta, y los barómetros de media Europa la fueron registrando cada vez que pasaba por encima, sin que nadie entendiera al principio qué estaban midiendo. En Perth, a tres mil cien kilómetros, la gente salió a la calle a mirar. Y a sesenta y cinco kilómetros del volcán, a los marineros de los barcos que había allí les reventaron los tímpanos.",
      "Es el sonido más fuerte del que se tiene registro. Nadie ha vuelto a oír nada parecido, y con suerte nadie lo oirá.",
    ],
  },
  {
    id: "lengua-carpintero",
    titular: "La lengua del pájaro carpintero le da la vuelta al cráneo por dentro",
    realce: "le da la vuelta al cráneo por dentro",
    tema: "Animales",
    color: "var(--dato-tierra)", // la madera
    mas: [
      "No acaba en la boca, ni de lejos. Sale por el pico, vuelve a entrar por el agujero de la nariz, se parte en dos ramas, sube por encima de la cabeza, la rodea por detrás y las dos mitades se vuelven a juntar en la nuca. Es tan larga que, enrollada así, le da la vuelta entera al cráneo por dentro.",
      "Sirve para lo evidente: sacarla varios centímetros dentro de un agujero y pescar las larvas del fondo. Pero lo bueno es lo otro. Cada vez que el pico golpea la madera, los músculos que sujetan ese lazo se tensan alrededor del cráneo y lo mantienen quieto contra la columna.",
      "O sea que lo que le impide quedarse tonto de tanto martillear es, literalmente, su propia lengua haciéndole de cinturón de seguridad.",
    ],
  },
  {
    id: "huellas-koala",
    titular: "Un koala deja las mismas huellas dactilares que tú",
    realce: "las mismas huellas dactilares que tú",
    tema: "Animales",
    color: "var(--dato-gris)", // el koala
    mas: [
      "Es el único animal fuera de los primates que tiene huellas dactilares de verdad, con sus arcos, sus bucles y sus espirales. Y no se parecen un poco a las nuestras: se parecen tanto que al microscopio cuesta separar una de otra.",
      "Lo vio Maciej Henneberg, antropólogo de la Universidad de Adelaida, a mediados de los noventa, y lo publicó con un título que no se olvida: «Huellas dactilares por homoplasia: koalas y humanos». Él mismo avisó a la policía de que una huella de koala podía pasar por humana. Lo que se cuenta después —que un koala llegó a liar una investigación de verdad— no tiene ni un caso documentado detrás, así que no.",
      "Lo verdaderamente raro es cómo llegaron ahí. Nuestro linaje y el suyo se separaron hace unos ciento sesenta millones de años. Dos animales que no tienen nada que ver acabaron por su cuenta en el mismo dibujo.",
    ],
  },
  {
    id: "peste-del-baile",
    titular: "En 1518, cientos de personas de Estrasburgo bailaron durante dos meses",
    realce: "bailaron durante dos meses",
    tema: "Historia",
    color: "var(--dato-morado)", // la ciudad y su locura
    mas: [
      "Empezó el 14 de julio con una sola mujer, Frau Troffea, que salió a la calle y se puso a bailar. Sin música y sin parar. Estuvo así todo el día hasta caer agotada, y a la mañana siguiente volvió a levantarse y a empezar, con los pies hinchados y sangrando.",
      "En una semana había treinta personas más. En un mes, según las crónicas, hasta cuatrocientas. Y las autoridades tomaron la decisión más asombrosa de toda la historia: concluyeron que la cura era bailar hasta que se les pasara, así que les despejaron el mercado de los caballos, les montaron un tablado y les contrataron músicos.",
      "Duró unos dos meses y se apagó como había venido, sin que nadie haya sabido nunca por qué. Cuántos murieron no está claro: las crónicas de entonces no coinciden entre ellas, y eso hay que dejarlo dicho tal cual.",
    ],
  },
  {
    id: "neptuno-una-vuelta",
    titular: "Neptuno solo ha dado una vuelta al Sol desde que lo descubrimos",
    realce: "una vuelta al Sol",
    tema: "Espacio",
    color: "var(--dato-galaxia)", // un planeta
    mas: [
      "Tarda ciento sesenta y cinco años terrestres en completar su órbita. Lo encontramos la noche del 23 al 24 de septiembre de 1846, y terminó su primera vuelta el 11 de julio de 2011. O sea que en todo el tiempo que llevamos sabiendo que existe, allí ha pasado un año. Uno.",
      "Y se encontró de una manera que no se ha repetido con ningún otro planeta: no mirando, sino calculando. Urbain Le Verrier se dio cuenta de que Urano no iba por donde debía, y dedujo con lápiz y papel que tenía que haber algo más grande tirando de él desde más lejos. Mandó las coordenadas por carta a Berlín, y Johann Galle apuntó el telescopio esa misma noche y lo encontró a menos de un grado de donde ponía el papel.",
      "Es el único planeta que existió primero en un cuaderno.",
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
    id: "wasabi",
    titular: "El wasabi de casi cualquier restaurante es rábano teñido de verde",
    realce: "rábano teñido de verde",
    tema: "Comida",
    color: "var(--dato-verde)", // el colorante
    mas: [
      "El wasabi de verdad es el tallo de una planta que solo crece bien metida en arroyos fríos de montaña, en Japón. Se ralla en el momento, delante del cliente, porque el picor se le va en un cuarto de hora. Con esas condiciones el kilo se pone en cientos de euros.",
      "Así que lo que llega a la mesa casi siempre es otra cosa: rábano picante europeo, mostaza en polvo y colorante verde, a veces con un uno o un dos por ciento de wasabi de verdad para poder ponerlo en la etiqueta. Los cálculos que se manejan dicen que entre el 95 y el 99 % de lo que se sirve fuera de Japón no lleva wasabi. Y dentro de Japón, alrededor del 95 %.",
      "Se nota, además, sin ser un experto: lo que pica en el wasabi sube por la nariz y se va enseguida; lo que pica en el rábano se queda en la lengua.",
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
  {
    id: "forro-del-estomago",
    titular: "El estómago se cambia el forro cada tres días para no digerirse a sí mismo",
    realce: "para no digerirse a sí mismo",
    tema: "Cuerpo",
    color: "var(--dato-rojo)", // por dentro
    mas: [
      "Dentro del estómago hay ácido clorhídrico, que es el que se usa para limpiar metal. La pregunta interesante no es cómo deshace la comida, que se entiende sola: es por qué no te deshace a ti, que estás hecho de lo mismo que un filete.",
      "Son tres defensas trabajando a la vez. Una capa de moco pegada a la pared, de menos de dos décimas de milímetro. Unas células que van soltando bicarbonato dentro de ese moco, de manera que la cara que da al ácido es ácida y la que toca la carne es casi neutra. Y, por si algo se cuela igualmente, un recambio constante: la superficie entera del estómago se cae y se vuelve a hacer cada tres a cinco días.",
      "Estás estrenando estómago más o menos cada semana.",
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
