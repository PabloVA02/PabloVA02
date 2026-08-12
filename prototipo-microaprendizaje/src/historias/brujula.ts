import type { Short } from "../shorts";

/* ==========================================================================
   Brújula y magnetismo.

   El riesgo del tema es la explicación de física: líneas de campo, dipolos
   y momentos magnéticos. Se entiende al leerlo y se olvida al pasar.

   La regla del tema: el magnetismo se cuenta por LO QUE OBLIGA A CAMBIAR.
   Un adivino que decide dónde va una tumba. Un aeropuerto que tiene que
   repintar el número de la pista. Un geólogo que descubre que el fondo
   del mar está rayado y con eso demuestra que los continentes se mueven.
   El campo magnético es invisible: solo se ve en lo que mueve.

   Y siempre se aclara qué apunta a dónde, porque casi nadie lo sabe.
   ========================================================================== */

export const BRUJULA: Short[] = [
  {
    id: "brujula-adivinacion",
    titulo: "Brújula de adivinos",
    gancho: "Antes de servir para navegar pasó mil años orientando casas y tumbas.",
    categoria: "Brújula",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una cuchara de piedra oscura sobre una placa cuadrada de bronce con signos grabados.",
    fotos: [
      {
        archivo: "Lodestone (Magnet Cove Complex, mid-Cretaceous, 96-102 Ma; Magnet Cove, Arkansas, USA) 2.jpg",
        autor: "Un trozo de magnetita imantada, la piedra con la que se tallaban las cucharas. Fotografía de James St. John.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lodestone_(Magnet_Cove_Complex,_mid-Cretaceous,_96-102_Ma;_Magnet_Cove,_Arkansas,_USA)_2.jpg",
        foco: "50% 45%",
        alt: "Un pedrusco de superficie metálica y quebrada, con brillos plateados y manchas de óxido anaranjado.",
      },
      {
        archivo: "Magnetite (GeoDIL number - 1390).jpg",
        autor: "Otra muestra de magnetita, el mineral de hierro que atrae al hierro. Fotografía de Darla Sondrol.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Magnetite_(GeoDIL_number_-_1390).jpg",
        foco: "50% 45%",
        alt: "Un mineral negro de caras angulosas y brillo metálico apoyado sobre un fondo claro.",
      },
      {
        archivo: "Binnacle from SMS Emden.jpg",
        autor: "La bitácora de un barco, con la brújula montada dentro. Fotografía de SuperJew.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Binnacle_from_SMS_Emden.jpg",
        foco: "50% 45%",
        alt: "Un pedestal de latón con una cúpula de cristal encima, con la rosa de los vientos visible dentro.",
      },
      {
        archivo: "Sunset Sailing on the Tall Ship Inland Seas (48312103756).jpg",
        autor: "Un velero navegando al atardecer. Fotografía de Erik Drost.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sunset_Sailing_on_the_Tall_Ship_Inland_Seas_(48312103756).jpg",
        foco: "50% 50%",
        alt: "Las velas y la jarcia de un barco recortadas contra un cielo naranja sobre el agua.",
      },
    ],
    entrada:
      "China, siglo II antes de Cristo. Los adivinos de la corte usan un instrumento que consiste en una placa cuadrada de bronce cubierta de inscripciones y, encima, una cuchara tallada en piedra imantada que gira sobre su panza hasta detenerse siempre apuntando en la misma dirección. Nadie lo entiende como un aparato de orientación, porque a nadie se le ha ocurrido todavía que haga falta uno: sirve para decidir dónde se coloca una casa, dónde se cava una tumba o en qué día conviene empezar un viaje. Tardará más de mil años en subirse a un barco.",
    paginas: [
      {
        rotulo: "La cuchara",
        texto:
          "La piedra se llamaba magnetita, un mineral de hierro que atrae al hierro y que, tallado y libre para girar, se orienta solo. Los adivinos la tallaban en forma de cuchara con el mango largo, la colocaban sobre una placa pulida y la hacían girar; al pararse, el mango señalaba el sur, que en aquella cultura era la dirección de referencia y no el norte. Con eso y con las inscripciones de la placa se determinaba la orientación adecuada de un edificio según las reglas de armonía entre el terreno, el viento y el agua.",
        destacado: { tipo: "frase", frase: "El mango de la cuchara señalaba el sur, no el norte." },
      },
      {
        rotulo: "Al barco",
        texto:
          "Pasaron más de mil años hasta que a alguien se le ocurrió sacarla al mar. Los primeros textos que describen una aguja imantada usada para navegar son chinos del siglo XI, y en Europa aparecen a finales del XII. El montaje mejoró deprisa: primero la aguja flotando sobre una paja en un cuenco de agua, después clavada sobre un pivote y por último dentro de una caja con la rosa de los vientos dibujada debajo. De pronto se podía mantener el rumbo con el cielo cubierto, que era justo lo que impedía alejarse de la costa.",
        destacado: { tipo: "cifra", cifra: "1.000", unidad: "años del adivino al marino" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Sin ese instrumento no habría habido viajes oceánicos, porque las estrellas y el sol se tapan precisamente cuando más falta hacen. Los adivinos, mientras tanto, siguieron usando su placa, y las reglas de orientación que aplicaban se siguen consultando hoy en buena parte de Asia para decidir dónde va la puerta de una casa. Es de los pocos inventos que ha tenido dos vidas completamente separadas durante mil años, sin que una supiera de la otra: la misma piedra que servía para decidir dónde enterrar a un abuelo acabó llevando barcos al otro lado del mundo.",
      },
    ],
  },

  {
    id: "polo-magnetico-corre",
    titulo: "El norte magnético corre",
    gancho: "Ha corrido tanto que hubo que actualizar el modelo mundial fuera de plazo y repintar pistas.",
    categoria: "Brújula",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una brújula de mano sobre un mapa topográfico plegado.",
    fotos: [
      {
        archivo: "039 Northern lights over Mývatn (Iceland) Photo by Giles Laurent.jpg",
        autor: "Auroras boreales sobre el lago Mývatn, en Islandia. Fotografía de Giles Laurent.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:039_Northern_lights_over_M%C3%BDvatn_(Iceland)_Photo_by_Giles_Laurent.jpg",
        foco: "50% 40%",
        alt: "Cortinas verdes de aurora boreal sobre un lago helado y montañas oscuras, bajo un cielo estrellado.",
      },
      {
        archivo: "Brunton.JPG",
        autor: "Brújula de geólogo con espejo y limbo graduado, abierta sobre la mano.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Brunton.JPG",
        foco: "50% 50%",
        alt: "Brújula metálica de campo abierta, con la aguja imantada y la escala de grados a la vista.",
      },
      {
        archivo: "Aurora Australis Over the Tasman Sea from SouthWest National Park.jpg",
        autor: "Aurora austral sobre el mar de Tasmania. Fotografía de Jamen Percy.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Aurora_Australis_Over_the_Tasman_Sea_from_SouthWest_National_Park.jpg",
        foco: "50% 45%",
        alt: "Resplandor verde y rosado de una aurora austral sobre el mar, con estrellas encima.",
      },
      {
        archivo: "Aurora borealis above Storfjorden and the Lyngen Alps in moonlight, 2012 March.jpg",
        autor: "Aurora boreal sobre el Storfjorden y los Alpes de Lyngen, en Noruega. Fotografía de Simo Räsänen.",
        licencia: "CC BY-SA 3.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Aurora_borealis_above_Storfjorden_and_the_Lyngen_Alps_in_moonlight,_2012_March.jpg",
        foco: "50% 50%",
        alt: "Franja verde de aurora extendida sobre un fiordo nevado iluminado por la luna.",
      },
    ],
    entrada:
      "Ártico, 2019. Los organismos que mantienen el modelo magnético mundial, ese que usan por dentro los móviles, los barcos y los aviones para corregir lo que marca la brújula, publican una actualización de urgencia, fuera del calendario habitual de cada cinco años. No es un capricho burocrático ni una precaución de laboratorio: el polo norte magnético lleva décadas moviéndose y ha empezado a hacerlo bastante más deprisa de lo previsto, las cartas náuticas se estaban quedando cortas antes de tiempo y en algunos aeropuertos hubo que repintar el número de las pistas, porque ese número no es un nombre, sino un rumbo.",
    paginas: [
      {
        rotulo: "Dos nortes",
        texto:
          "Una brújula no apunta al polo geográfico, el punto por el que pasa el eje de rotación, sino al polo magnético, que está en otro sitio y además se mueve. La diferencia entre los dos se llama declinación y cambia según dónde esté uno: en algunos lugares son un par de grados y en otros, decenas. Por eso todos los mapas náuticos y aeronáuticos llevan impresa la corrección local y un año de referencia, y por eso existe un modelo mundial que se revisa cada cinco años con datos de satélites y de observatorios.",
        destacado: { tipo: "frase", frase: "La brújula no apunta al eje de la Tierra, sino a otro sitio." },
      },
      {
        rotulo: "La carrera",
        texto:
          "Durante el siglo XX el polo norte magnético se desplazaba unos quince kilómetros al año por el norte de Canadá, un ritmo lento y previsible. A partir de los años noventa aceleró hasta cincuenta o sesenta kilómetros anuales y enfiló hacia Siberia, cruzando el meridiano cero en 2017. Se cree que el causante es un chorro de hierro líquido en el núcleo externo del planeta, a tres mil kilómetros bajo los pies, que ha ido tirando del campo. Varios aeropuertos han tenido que renumerar pistas, porque el número pintado indica su orientación magnética.",
        destacado: { tipo: "cifra", cifra: "55", unidad: "kilómetros al año, antes 15" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El campo magnético terrestre no es un imán fijo sino el resultado del movimiento del metal fundido del núcleo, así que cambia continuamente y además se está debilitando alrededor de un cinco por ciento por siglo. Nada de esto es una emergencia, porque los sistemas modernos se apoyan en satélites y no dependen de la aguja. Conviene saberlo, eso sí, si uno sale al monte con brújula y un mapa antiguo: la corrección impresa en el margen puede llevar décadas caducada y el error acumulado ya se nota al caminar.",
      },
    ],
  },

  {
    id: "inversion-polos",
    titulo: "Los polos ya se cambiaron",
    gancho: "El fondo del océano está rayado como un código de barras, y esas rayas lo contaron todo.",
    categoria: "Brújula",
    color: "var(--plum)",
    encargo: "Una franja de fondo marino en relieve con bandas paralelas de color alterno.",
    entrada:
      "Océanos del mundo, 1963. Dos geólogos publican un artículo corto que explica unas franjas magnéticas descubiertas en el fondo del mar a ambos lados de las cordilleras submarinas. El patrón es simétrico y se repite una y otra vez. Su explicación resuelve de golpe la mayor discusión abierta de la geología del siglo.",
    paginas: [
      {
        rotulo: "Las rayas",
        texto:
          "Al medir el magnetismo del fondo oceánico con instrumentos remolcados por barcos aparecía un dibujo desconcertante: bandas paralelas a las cordilleras submarinas, unas con el magnetismo en un sentido y otras en el contrario, alternándose sin parar. Y el patrón de una orilla era la imagen especular exacta del de la otra. La explicación fue esta: la roca fundida sale por la cordillera, se enfría y al solidificarse conserva la orientación del campo magnético de ese momento, como una fotografía. Después se aparta hacia los lados y deja sitio a roca nueva.",
        destacado: { tipo: "frase", frase: "La roca al enfriarse guarda el campo magnético del momento." },
      },
      {
        rotulo: "Dos pruebas",
        texto:
          "Aquellas bandas demostraban dos cosas a la vez. La primera, que el fondo del océano se fabrica continuamente en las cordilleras y se va apartando, lo que confirmaba que los continentes se mueven, una idea que llevaba cincuenta años siendo rechazada por la mayoría de los geólogos. La segunda, que el campo magnético de la Tierra se invierte: el norte y el sur intercambian su sitio cada cierto tiempo, de forma irregular, con intervalos que van de decenas de miles a millones de años. La última vez ocurrió hace unos setecientos ochenta mil años.",
        destacado: { tipo: "cifra", cifra: "780.000", unidad: "años desde la última inversión" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquellas bandas sirven hoy de calendario: como se conocen las fechas de las inversiones, basta con contar franjas para saber la edad de cualquier trozo de fondo oceánico, y así se ha comprobado que ninguno supera los doscientos millones de años, mientras que hay rocas continentales de cuatro mil. Se sabe además que una inversión no es instantánea: el campo se debilita y se desordena durante siglos antes de recolocarse. No hay manera de predecir cuándo tocará la siguiente, aunque el campo lleve un tiempo debilitándose, y las brújulas de entonces apuntarán tranquilamente al otro lado.",
      },
    ],
  },
];
