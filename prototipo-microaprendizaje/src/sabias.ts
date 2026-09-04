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
     LA TANDA DEL 4 DE SEPTIEMBRE — diez ejemplos de la sección abierta a todo.
     Van los primeros a propósito: son los que Pablo pidió ver para decir si le
     gusta cómo quedan. Cada uno lleva su fuente comprobada en el comentario.
     ------------------------------------------------------------------------ */
  {
    id: "apple-mordisco",
    titular: "Apple le dio un mordisco a su manzana para que no pareciera una cereza",
    realce: "para que no pareciera una cereza",
    tema: "Marcas",
    color: "var(--dato-rojo)", // una manzana
    mas: [
      "Lo dibujó Rob Janoff en 1977. Se compró una bolsa de manzanas, las tuvo una semana encima de la mesa y las fue simplificando hasta dejar una silueta. El problema apareció al hacerla pequeña: una manzana entera y redonda, del tamaño de una uña, deja de ser una manzana y pasa a ser una cereza, un tomate o cualquier otra fruta redonda. La solución fue la que se le hace a una manzana en la vida real. Le dio un bocado, y con el bocado se entendía la escala.",
      "Todo lo demás que has oído se lo han preguntado a él y lo ha ido negando una leyenda tras otra. Que si el pecado original. Que si es un homenaje a Alan Turing, al que encontraron muerto en 1954 con una manzana mordida al lado. Janoff dice que esa última le encanta y que no es verdad. Y el juego de palabras que todo el mundo da por intencionado —«bite», mordisco, y «byte», la unidad de información— tampoco lo era: se lo señaló su director creativo cuando el logotipo ya estaba hecho.",
      "O sea que el símbolo más reconocible de la informática es una manzana con un mordisco puesto ahí por un motivo de fontanería: que se distinguiera de una cereza a un centímetro de distancia.",
    ],
  },
  {
    id: "nike-treinta-y-cinco",
    titular: "El logotipo de Nike costó treinta y cinco dólares",
    realce: "treinta y cinco dólares",
    tema: "Marcas",
    color: "var(--dato-oro)", // el dinero
    mas: [
      "En 1971 lo dibujó Carolyn Davidson, estudiante de diseño en Portland. Conocía a Phil Knight porque él daba clases de contabilidad en su facultad y ella se había ofrecido a hacerle rótulos por horas. Le pasó una factura de diecisiete horas y media a dos dólares la hora: treinta y cinco dólares. Knight no se enamoró de él —eligió ese porque tenía que elegir alguno y llegaba tarde a la fábrica— y así se quedó.",
      "Lo interesante es la segunda parte, que casi nadie cuenta. Doce años después, con la empresa ya enorme, la llamaron a una comida, le montaron una fiesta y le dieron un anillo de oro y diamantes con la forma del logotipo. Y un sobre con acciones.",
      "Ese paquete de acciones vale hoy más de un millón de dólares. La factura sigue siendo de treinta y cinco.",
    ],
  },
  {
    id: "cleopatra-egipcio",
    titular: "Cleopatra fue la primera de su familia en trescientos años que aprendió egipcio",
    realce: "la primera de su familia en trescientos años",
    tema: "Historia",
    color: "var(--dato-morado)", // la púrpura de quien reina
    mas: [
      "Los Ptolomeos no eran egipcios. Eran macedonios: descendientes de un general de Alejandro Magno que se quedó con Egipto al repartirse el imperio, y que llevaban gobernando el país desde el año 305 antes de Cristo. Nueve generaciones de reyes y reinas en un palacio donde se hablaba griego, se escribía en griego y se juzgaba en griego. El idioma del país que gobernaban era, para ellos, el idioma del servicio.",
      "Plutarco cuenta que ella fue la primera de todos que se molestó en aprenderlo. Y que no paró ahí: hablaba con etíopes, hebreos, árabes, sirios, medos y partos sin necesidad de intérprete, cosa que en una corte de embajadas es menos una elegancia que un arma.",
      "Así que lo de que Cleopatra era egipcia es falso dos veces. No lo era de sangre, y hasta ella tampoco lo había sido de lengua ninguna de las nueve generaciones anteriores.",
    ],
  },
  {
    id: "ok-falta-de-ortografia",
    titular: "«OK» empezó siendo una falta de ortografía a propósito",
    realce: "una falta de ortografía a propósito",
    tema: "Lengua",
    color: "var(--dato-gris)", // la tinta del periódico
    mas: [
      "El 23 de marzo de 1839, en el Boston Morning Post, un redactor llamado Charles Gordon Greene escribió «o.k.» en un artículo de burla contra un periódico rival. Estaba imitando una moda que corría entonces entre los jóvenes cultos de Boston: escribir mal una expresión a posta y después abreviarla. «All correct», todo correcto, se convertía primero en «oll korrect» y luego en dos letras.",
      "Debería haberse muerto como el resto de aquellas bromas, y estuvo a punto. La salvó una campaña electoral: al año siguiente, los partidarios de Martin Van Buren, al que llamaban «Old Kinderhook» por el pueblo donde había nacido, se dieron cuenta de que las iniciales les servían y salieron a la calle con carteles de «Vote for OK».",
      "Y de dónde venía exactamente no se supo hasta los años sesenta, cuando un lingüista de Columbia, Allen Walker Read, se dedicó a tumbar una por una todas las demás explicaciones —que si el choctaw, que si el francés, que si un panadero— hasta dar con aquel periódico. La palabra que más se dice en el planeta salió de un chiste tipográfico de una redacción aburrida.",
    ],
  },
  {
    id: "cruasan-vienes",
    titular: "El cruasán no es francés",
    realce: "no es francés",
    tema: "Comida",
    color: "var(--dato-oro)", // la masa dorada
    mas: [
      "En 1839 un austríaco, August Zang, abrió en el número 92 de la calle Richelieu de París una panadería vienesa. Vendía lo de su tierra, y sobre todo un bollo con forma de media luna que allí se llamaba kipferl y que en Viena llevaba siglos haciéndose. En diez años París estaba llena de imitaciones.",
      "Lo que sí es francés es lo que le hicieron después. El kipferl se amasaba como un bollo normal; los panaderos parisinos lo pasaron a hojaldre, que es doblar una plancha de mantequilla dentro de la masa una y otra vez hasta dejar cientos de capas. Esa es la técnica que hace que un cruasán se deshaga. La primera receta francesa de cruasán con hojaldre es de 1915, la publicó Sylvain Claudius Goy.",
      "Y la historia bonita —que lo trajo María Antonieta desde Viena al casarse— no tiene ni un solo papel que la sostenga. Aunque el idioma sí guardó la pista: en cualquier panadería de Francia el cruasán sigue estando en el estante de la viennoiserie. La cosa de Viena.",
    ],
  },
  {
    id: "michelin-neumaticos",
    titular: "Las estrellas Michelin las inventó una fábrica de neumáticos para vender más",
    realce: "para vender más",
    tema: "Comida",
    color: "var(--dato-rojo)", // la guía roja
    mas: [
      "En 1900, André y Édouard Michelin fabricaban ruedas en un país donde casi nadie tenía coche, así que su problema no era vender neumáticos: era que la gente condujera. Repartieron gratis treinta y cinco mil ejemplares de una guía con mapas, listas de mecánicos, dónde repostar, cómo cambiar una rueda y —al final— dónde dormir y dónde comer. Cuanto más lejos fuera uno a cenar, antes se le gastaban las ruedas.",
      "Dejó de ser gratis por una escena concreta. André Michelin entró en una tienda de neumáticos y vio sus guías apiladas debajo de un banco de trabajo, haciendo de calzo para que no cojeara. A partir de 1922 costó siete francos, con la idea de que uno solo respeta lo que paga.",
      "Ciento veinticinco años después, un cocinero puede llorar en televisión por una estrella que reparte una empresa de ruedas. Y la guía sigue siendo roja.",
    ],
  },
  {
    id: "eiffel-antena",
    titular: "La torre Eiffel se libró del desguace porque servía de antena",
    realce: "porque servía de antena",
    tema: "Arquitectura",
    color: "var(--dato-tierra)", // el hierro pintado
    mas: [
      "Se levantó para la Exposición de 1889 y el permiso del suelo era de veinte años. En 1910 la torre pasaba a ser del ayuntamiento de París, y el ayuntamiento no tenía ninguna obligación de dejarla en pie: había nacido como una atracción de feria y buena parte de los artistas de la ciudad llevaban dos décadas firmando cartas para que la quitaran.",
      "Lo que la salvó no fue que gustara. Fue que era, con diferencia, lo más alto que había en Francia donde colgar un cable. En 1898 Eugène Ducretet ya había cruzado en morse los cuatro kilómetros que separan la torre del Panteón, y en 1904 el ejército le instaló arriba una estación de radio permanente. Para el año del desguace, aquel hierro se había vuelto material militar.",
      "La concesión se le renovó a Eiffel setenta años más a partir del 1 de enero de 1910. El monumento más fotografiado del mundo sigue en pie porque a alguien le hacía falta un palo alto.",
    ],
  },
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
    id: "papa-noel-rojo",
    titular: "El rojo de Papá Noel no lo inventó Coca-Cola",
    realce: "no lo inventó Coca-Cola",
    tema: "Marcas",
    color: "var(--dato-rojo)", // el traje
    mas: [
      "Lo que hizo Coca-Cola en 1931, con los anuncios que pintó Haddon Sundblom, fue fijar la cara: quitarle el aire de duende que tenía hasta entonces y convertirlo en un señor grande, de mejillas coloradas, que parece tu abuelo. Eso sí es suyo, y es la razón de que hoy nos lo imaginemos así.",
      "El traje ya estaba puesto desde hacía cincuenta años. Thomas Nast lo dibujó de rojo con ribete blanco en la revista Harper's Weekly en 1881. La revista Puck lo sacó de rojo en varias portadas a principios de siglo. Y una marca de agua mineral, White Rock, usó un Papá Noel de rojo en sus anuncios en 1915 y en 1923, años antes de que Coca-Cola empezara.",
      "La empresa no le puso el traje: le puso la cara, y después lo repartió por el mundo entero. Que tampoco es poco.",
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
