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
];
