import type { Short } from "../shorts";

/* ==========================================================================
   Deporte.

   El peligro del tema es la épica. Las gestas deportivas ya vienen contadas
   de fábrica con música de fondo, y repetir esa versión no aporta nada.

   La regla del tema: se cuenta el REGLAMENTO, no la hazaña. De dónde salió
   una distancia, por qué una técnica era imposible hasta que cambió el
   material, qué se prohibió después de que alguien lo aprovechara. Las reglas
   de un deporte son un fósil: cada una se puso un día concreto porque alguien
   hizo algo que molestó, y ese día es la historia.

   Si hay una versión romántica muy repetida y la documentación dice otra
   cosa, la comparación entre las dos es lo que se cuenta.
   ========================================================================== */

export const DEPORTE: Short[] = [
  {
    id: "maraton-42195",
    titulo: "El maratón mide lo que medía un jardín inglés",
    gancho: "Los 195 metros de más salieron de dónde había que poner la meta en 1908.",
    categoria: "Deporte",
    color: "var(--sage)",
    encargo: "Una línea de meta pintada en una pista de atletismo, vista rasante.",
    entrada:
      "Un maratón mide 42 kilómetros y 195 metros. Es una distancia tan poco redonda que parece calculada por alguien con muy mala idea, y en cierto modo lo fue: no viene de la Grecia clásica ni de ningún cálculo, sino de una organización británica ajustando el recorrido a la comodidad de la familia real.",
    paginas: [
      {
        rotulo: "Antes de 1908",
        texto:
          "En los primeros Juegos modernos, la distancia era aproximada y cambiaba en cada edición: unos 40 kilómetros en Atenas 1896, unos 40 en París, unos 40 en San Luis. La idea venía de la leyenda del soldado que corrió de Maratón a Atenas para anunciar la victoria, y esa leyenda ni siquiera está en Heródoto, que cuenta otra carrera distinta y mucho más larga. Es decir: la distancia clásica no existía como número, existía como idea. Lo que pasó en Londres fue que a un número aproximado le cayó encima una decisión práctica y se quedó fijo para siempre.",
        destacado: { tipo: "cifra", cifra: "42,195", unidad: "kilómetros, desde una decisión de 1908" },
      },
      {
        rotulo: "Windsor",
        texto:
          "En los Juegos de Londres de 1908, la salida se puso en los terrenos del castillo de Windsor y la meta en el estadio de White City, delante del palco real. La versión más repetida añade que la salida se retrasó hasta bajo las ventanas de los niños de la casa real para que pudieran verla; ese detalle se cuenta mucho y se documenta poco. Lo que sí está claro es el resultado: <strong>26 millas y 385 yardas</strong>, que son 42.195 metros. En 1921, la federación internacional adoptó esa cifra exacta como distancia oficial, y ahí sigue.",
        destacado: {
          tipo: "frase",
          frase: "La distancia no la fijó la historia: la fijó dónde estaba el palco.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella carrera dejó además la imagen más famosa del atletismo temprano. El italiano Dorando Pietri entró primero en el estadio, desorientado, se cayó varias veces y unos jueces lo ayudaron a cruzar la meta; lo descalificaron por eso. La reina Alejandra le entregó una copa especial al día siguiente y el corredor se hizo más célebre que el ganador. Del episodio salió también la sospecha, nunca aclarada del todo, de qué le habían dado durante el recorrido: en aquellos años era normal que los equipos suministraran estricnina y brandy a sus corredores, y estaba perfectamente permitido.",
      },
    ],
  },

  {
    id: "fosbury-espalda",
    titulo: "Saltar de espaldas era ridículo hasta que ganó",
    gancho: "En 1968 nadie lo hacía. Diez años después no lo hacía nadie de otra forma.",
    categoria: "Deporte",
    color: "var(--slate)",
    encargo: "Un listón de salto de altura contra el cielo, sin atleta en el encuadre.",
    entrada:
      "En los Juegos de México de 1968, un estadounidense de veintiún años llamado Dick Fosbury se acercó al listón, giró en el último momento y lo cruzó de espaldas, cayendo de nuca. La grada se rió. Ganó el oro con 2,24 metros y récord olímpico, y de paso dejó obsoleto todo lo que se enseñaba en el salto de altura.",
    paginas: [
      {
        rotulo: "La colchoneta",
        texto:
          "Lo que hizo posible el invento no fue la biomecánica, fue la espuma. Hasta los años sesenta se caía en arena, virutas o serrín, y aterrizar de espalda desde dos metros era una forma razonable de romperse algo, así que todas las técnicas obligaban a caer de pie o de lado. Cuando los institutos empezaron a instalar colchonetas gruesas de gomaespuma, la penalización desapareció y quedó espacio para probar cosas raras. Fosbury las probó en el instituto, hacia 1963, no porque tuviera una teoría, sino porque con la técnica ortodoxa no pasaba del listón y con aquella sí.",
        destacado: {
          tipo: "frase",
          frase: "El salto no lo inventó un atleta. Lo permitió un material.",
        },
      },
      {
        rotulo: "Por qué funciona",
        texto:
          "La ventaja es geométrica y no es evidente. Al arquear la espalda sobre el listón, el centro de masas del cuerpo pasa por DEBAJO de la barra mientras las partes del cuerpo la van sobrepasando por turnos: primero la cabeza, luego el tronco, luego las piernas. Nunca hay que elevar el centro de gravedad hasta la altura del listón, que es lo que sí exigían las técnicas anteriores. En México, veintiocho de los cuarenta saltadores todavía usaban el rodillo ventral. En los Juegos de <strong>1980</strong>, trece de los dieciséis finalistas saltaban ya de espaldas.",
        destacado: { tipo: "cifra", cifra: "2,24", unidad: "metros: oro y récord olímpico" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Fosbury no volvió a ganar nada importante y se hizo ingeniero civil. Su nombre, en cambio, se convirtió en sustantivo común: <em>fosbury flop</em> se dice hoy en todos los idiomas, y ningún saltador de élite salta de otra forma desde hace más de cuarenta años. En economía y en gestión se cita a menudo como ejemplo de innovación que llega desde el aficionado marginal y no desde el experto, aunque suele olvidarse la parte incómoda: sin las colchonetas de espuma, Fosbury habría sido un chico raro con una lesión cervical.",
      },
    ],
  },

  {
    id: "pelota-golf-hoyuelos",
    titulo: "Una pelota de golf abollada vuela el doble",
    gancho: "Los jugadores del XIX guardaban las viejas: rayadas llegaban más lejos.",
    categoria: "Deporte",
    color: "var(--clay)",
    curioso: true,
    encargo: "Primer plano de una pelota de golf sobre hierba corta, hoyuelos nítidos.",
    entrada:
      "Una pelota lisa parece la forma más aerodinámica posible, y para casi todo lo que vuela lo es. Con una pelota de golf ocurre lo contrario: si se fabrica lisa, llega aproximadamente a la mitad de distancia que una con hoyuelos. Los golfistas del siglo XIX lo descubrieron sin entender nada, simplemente jugando con pelotas viejas.",
    paginas: [
      {
        rotulo: "El descubrimiento",
        texto:
          "A mediados del siglo XIX se jugaba con la <em>gutty</em>, una bola de gutapercha, un látex duro que se moldeaba a mano y salía lisa. Con el uso se llenaba de marcas de palo, y los jugadores fueron notando algo que no tenía sentido: las estropeadas volaban más y más rectas que las nuevas. Los fabricantes empezaron entonces a martillear las pelotas a propósito con patrones regulares. En 1905, el ingeniero inglés William Taylor patentó el diseño de hoyuelos ordenados, y a partir de ahí se dejó de hacer al azar y se convirtió en cálculo.",
        destacado: { tipo: "cifra", cifra: "2x", unidad: "más lejos que una pelota lisa" },
      },
      {
        rotulo: "La explicación",
        texto:
          "El aire que rodea una pelota lisa a gran velocidad se despega de la superficie muy pronto, dejando detrás una estela ancha y turbulenta que frena muchísimo. Los hoyuelos ensucian a propósito esa capa de aire pegada a la bola, la vuelven turbulenta antes de tiempo y consiguen que se mantenga adherida más rato; la estela sale más estrecha y la resistencia cae. Además, los hoyuelos multiplican el efecto del giro: una pelota golpeada con efecto de retroceso genera sustentación de verdad, como un ala, y por eso la trayectoria sube al final en vez de caer.",
        destacado: {
          tipo: "frase",
          frase: "Se ensucia el aire a propósito para que no se despegue.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Una pelota reglamentaria lleva hoy entre trescientos y quinientos hoyuelos, y su forma, profundidad y disposición son secreto industrial de cada fabricante; hay patentes con cientos de páginas sobre cómo distribuirlos. El mismo principio explica cosas que no tienen nada que ver con el golf: los hoyuelos en la carcasa de algunos cascos de ciclismo, las costuras que hacen que una pelota de fútbol se comporte de forma rara en el aire, y la mala fama del balón de un Mundial concreto, el Jabulani de 2010, que era demasiado liso y hacía trayectorias imprevisibles.",
      },
    ],
  },
  {
    id: "maraton-1904",
    titulo: "El maratón de 1904 lo ganó alguien que fue en coche",
    gancho: "Catorce de treinta y dos llegaron a meta. Al segundo le habían dado veneno para ratas.",
    categoria: "Deporte",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una carretera polvorienta de principios del siglo XX con un coche antiguo levantando polvo.",
    entrada:
      "San Luis, Estados Unidos, agosto de 1904. Se corre el maratón de los terceros Juegos Olímpicos de la historia, a las tres de la tarde, con treinta y dos grados y por caminos de tierra. Los organizadores han decidido que solo habrá un punto de agua en cuarenta kilómetros, porque quieren estudiar los efectos de la deshidratación en el cuerpo humano.",
    paginas: [
      {
        rotulo: "La carrera",
        texto:
          "Los coches de los jueces iban por delante levantando nubes de polvo que los corredores tenían que tragarse. Uno de los favoritos empezó a vomitar sangre por el polvo y tuvo que retirarse; otro se salió del camino perseguido por dos perros y acabó a más de un kilómetro. Dos participantes cubanos, que habían viajado sin dinero, corrieron con pantalones largos cortados a tijera en la línea de salida, y uno de ellos se paró a comer manzanas de un huerto, se puso malo y echó una siesta bajo un árbol. Aun así terminó cuarto.",
        destacado: { tipo: "cifra", cifra: "14", unidad: "de 32 corredores llegaron a meta" },
      },
      {
        rotulo: "El coche",
        texto:
          "El primero en cruzar la meta lo hizo fresco y sonriente, y se le fotografió con la corona. Al rato se supo que a los catorce kilómetros se había subido a un coche por un calambre, había recorrido dieciséis kilómetros sentado y se había bajado cerca del final para entrar corriendo. Él sostuvo siempre que había sido una broma. Le retiraron el premio. El que quedó primero de verdad llegó tan mal que sus entrenadores tuvieron que sostenerlo, y confesaron después lo que le habían dado por el camino.",
        destacado: { tipo: "frase", frase: "Hizo dieciséis kilómetros sentado en un coche." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Le habían suministrado sulfato de estricnina —veneno para ratas, que en dosis mínimas estimula el músculo— mezclado con clara de huevo y regado con brandy, dos veces durante la carrera. Estuvo a punto de morir aquella noche y no volvió a competir. Nada de aquello era ilegal entonces, porque no existía ninguna norma antidopaje. La prueba se ganó en tres horas y veintiocho minutos, el peor tiempo olímpico de la historia, y estuvo a punto de suprimirse del programa para siempre.",
      },
    ],
  },

  {
    id: "juegos-1936",
    titulo: "En 1936 un rival alemán le enseñó a saltar",
    gancho: "Los Juegos eran el escaparate del nazismo. El favorito local ayudó al hombre que iba a ganarle.",
    categoria: "Deporte",
    color: "var(--forest)",
    encargo: "Un foso de salto de longitud con la arena rastrillada y una pista de ceniza al lado.",
    entrada:
      "Berlín, agosto de 1936. Alemania organiza unos Juegos Olímpicos pensados como demostración de la superioridad de una raza sobre las demás: banderas por toda la ciudad, un estadio nuevo para cien mil personas y una película encargada para la posteridad. Entre los atletas invitados hay un estadounidense negro, hijo de aparceros y nieto de esclavos, que corre y salta como nadie.",
    paginas: [
      {
        rotulo: "El salto nulo",
        texto:
          "En la clasificación de salto de longitud hizo dos nulos seguidos y le quedaba uno para quedarse fuera; había hecho un intento de calentamiento que los jueces contaron como válido, y estaba desconcertado. Entonces se le acercó el favorito local, rubio y alto, que era el rival directo por el oro, y le sugirió que marcara con una toalla un punto varios centímetros antes de la tabla y saltara desde ahí, sacrificando distancia a cambio de asegurar el intento. Le hizo caso, se clasificó de sobra y al día siguiente ganó la final.",
        destacado: { tipo: "frase", frase: "El rival por el oro le dijo dónde poner la marca." },
      },
      {
        rotulo: "La foto",
        texto:
          "El alemán, que quedó segundo, fue el primero en felicitarlo y dieron juntos la vuelta al estadio del brazo, delante de las tribunas llenas de banderas y de la grada oficial. La imagen se publicó en medio mundo. Al alemán le costó cara: le avisaron de que no volviera a hacer nada parecido, no le dejaron competir fuera del país y acabó movilizado, muriendo en el frente italiano en 1943, con veintiséis años. El estadounidense ganó cuatro medallas de oro en aquellos Juegos.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "medallas de oro en unos Juegos hostiles" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Al volver a su país no le esperaba ningún recibimiento oficial: tuvo que entrar por la puerta de servicio del hotel donde se celebraba su propio homenaje, porque los negros no usaban el ascensor principal, y ningún presidente lo invitó a la Casa Blanca hasta veinte años después. Para ganarse la vida acabó corriendo carreras de exhibición contra caballos. Los dos atletas se escribieron cartas el resto de sus vidas, y él repitió siempre que el gesto de aquella tarde valía más que sus cuatro medallas juntas.",
      },
    ],
  },

  {
    id: "mano-de-dios",
    titulo: "Dos goles en cuatro minutos, uno con la mano",
    gancho: "El primero fue trampa y lo vio todo el estadio menos el árbitro. El segundo es el mejor de la historia.",
    categoria: "Deporte",
    color: "var(--slate)",
    encargo: "Un balón de fútbol de los ochenta sobre césped seco, con la sombra alargada.",
    entrada:
      "Ciudad de México, 22 de junio de 1986. Se juega un cuartos de final del Mundial entre Argentina e Inglaterra, cuatro años después de que los dos países se hubieran hecho la guerra por unas islas del Atlántico sur. Hay ciento catorce mil personas en el estadio y treinta grados a mediodía. En el minuto cincuenta y uno pasa lo primero.",
    paginas: [
      {
        rotulo: "El puño",
        texto:
          "Un balón queda colgado en el área y el delantero argentino, que mide metro sesenta y cinco, salta contra un portero que le saca veinte centímetros y que llega con el puño por delante. La pelota entra. Lo que no se ve desde el campo, pero sí en las fotos publicadas al día siguiente, es que la tocó con la mano izquierda, pegada a la cabeza para disimular. Los jugadores ingleses protestaron rodeando al árbitro; el árbitro, que estaba lejos y tapado, dio el gol por bueno y no consultó a nadie.",
        destacado: { tipo: "frase", frase: "Lo vio el estadio entero. No lo vio el único que decidía." },
      },
      {
        rotulo: "Los sesenta metros",
        texto:
          "Cuatro minutos después recogió el balón en su propio campo, se giró sobre sí mismo entre dos rivales y arrancó. Recorrió sesenta metros en diez segundos y medio, dejando atrás a cinco jugadores sin que ninguno llegara a tocarle, y terminó regateando también al portero para meterla casi sin ángulo. El relator uruguayo que narraba el partido se quedó sin palabras y acabó gritando cosas que no venían a cuento. Una encuesta de la federación internacional lo eligió, catorce años después, el mejor gol de la historia de los Mundiales.",
        destacado: { tipo: "cifra", cifra: "10,5", unidad: "segundos duró la jugada del segundo gol" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Al terminar, preguntado por el primero, dijo que lo había marcado un poco con la cabeza y otro poco con la mano de Dios, y la frase se quedó. Años más tarde admitió sin rodeos que había sido con la mano y que lo hizo a propósito. Argentina ganó el partido, ganó el Mundial y aquellos dos goles quedaron pegados el uno al otro: en cuatro minutos, el mismo hombre hizo la mayor trampa y la mayor jugada que se recuerdan en un campo de fútbol.",
      },
    ],
  },
];
