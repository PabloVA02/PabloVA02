import type { Short } from "../shorts";

/* ==========================================================================
   Muerte.

   Lo que se hace con los muertos, que cambia muchísimo de una época a otra y
   dice más de los vivos que de ellos. El riesgo del tema es obvio: el morbo
   y el tono lúgubre. Ni uno ni otro.

   La regla del tema: se cuenta la COSTUMBRE PRÁCTICA y de dónde salió. Un
   timbre dentro de un ataúd. Un cementerio entero mudado de ciudad. Una
   fotografía de familia con alguien que ya no está vivo. Se trata con el
   mismo respeto y la misma calma con que se trataría cualquier otro asunto,
   y sin recrearse en nada.

   Nunca se usan casos recientes ni personas identificables.
   ========================================================================== */

export const MUERTE: Short[] = [
  {
    id: "ataud-con-timbre",
    titulo: "Se patentaron ataúdes con campana por fuera",
    gancho: "El miedo a despertarse enterrado era tan real que hubo decenas de inventos para avisar desde dentro.",
    categoria: "Muerte",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un campanario pequeño de hierro sobre hierba, con una cuerda que baja al suelo.",
    entrada:
      "Europa y Estados Unidos, siglo XIX. La medicina todavía no distingue bien la muerte de un desmayo profundo, un coma o una catalepsia, y circulan historias de ataúdes abiertos con arañazos por dentro. El miedo tiene nombre propio y llega a ser una obsesión social. Entre 1868 y 1930 se registran en la oficina de patentes estadounidense más de treinta inventos para salir de una tumba.",
    paginas: [
      {
        rotulo: "El invento",
        texto:
          "El diseño más repetido consistía en un tubo que subía desde el ataúd hasta la superficie, con una campana en lo alto y una cuerda que bajaba hasta las manos del difunto; si se movía, sonaba. Otros modelos añadían una escalera, una bandera que se levantaba sola, un ventilador para renovar el aire o una lámpara. Los había con muelles bajo el pecho, para que el movimiento del tórax al respirar activara el mecanismo. Ninguno tenía en cuenta que un cuerpo se hincha y se mueve al descomponerse, así que habrían sonado solos.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "patentes registradas para salir de la tumba" },
      },
      {
        rotulo: "Las casas de espera",
        texto:
          "En Alemania se llegó más lejos y se construyeron edificios enteros, llamados casas de los muertos, donde los cuerpos se dejaban reposar unos días antes de enterrarlos. Eran salas grandes y ventiladas, con los cadáveres tumbados en camas y con un anillo atado a un dedo que estaba conectado a un timbre en la habitación del vigilante. Funcionaron en varias ciudades durante décadas. En todo ese tiempo, y con miles de cuerpos pasando por aquellas salas, no se registró ni un solo caso de alguien que despertara: los timbres sonaban de vez en cuando, siempre por el movimiento de la descomposición, y los vigilantes acabaron acostumbrándose.",
        destacado: { tipo: "frase", frase: "En décadas de funcionamiento no despertó nadie. Ni una vez." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El miedo se apagó cuando la medicina aprendió a confirmar la muerte con criterios fiables, primero con el estetoscopio y después con el electrocardiograma. No se conoce ningún caso documentado en que una de aquellas campanas salvara a nadie, aunque las historias circularon muchísimo, casi siempre contadas por un primo de un conocido. De aquella época quedan un par de expresiones que se siguen usando sin saber de dónde vienen: salvarse por la campana, y velar a alguien. Los velatorios nacieron literalmente de eso, de pasar la noche vigilando al difunto por si se movía, y solo después se convirtieron en una costumbre de acompañamiento.",
      },
    ],
  },

  {
    id: "momias-pintura",
    titulo: "Con momias egipcias se fabricaba pintura marrón",
    gancho: "Se molían para hacer un color muy apreciado por los pintores. Dejó de venderse en 1964 por falta de existencias.",
    categoria: "Muerte",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un tubo de pintura al óleo antiguo, aplastado, con la etiqueta descolorida.",
    entrada:
      "Europa, siglo XVIII. Miles de momias egipcias llegan a los puertos europeos como mercancía corriente. Se venden en las boticas molidas como medicina —se creía que curaban desde las hemorragias hasta la epilepsia— y en las tiendas de pintores, donde el polvo mezclado con aceite da un marrón cálido y transparente muy apreciado para las sombras.",
    paginas: [
      {
        rotulo: "El color",
        texto:
          "Se llamaba pardo de momia y tenía fama de ser insustituible para las veladuras, esas capas finísimas de color que se ponen encima de una pintura ya seca para dar profundidad. La receta consistía en moler el cuerpo, con las resinas y el betún del embalsamamiento incluidos, y mezclarlo con aceite de linaza. Hay obras conocidas del siglo XIX en las que se ha detectado. El problema práctico era que el pigmento no era estable: agrietaba la capa de pintura y se oscurecía con los años, arruinando el cuadro despacio.",
        destacado: { tipo: "frase", frase: "Se molía el cuerpo entero, con las resinas del embalsamamiento." },
      },
      {
        rotulo: "El enterramiento",
        texto:
          "Cuando la costumbre empezó a conocerse, varios pintores reaccionaron con espanto. Un pintor inglés del siglo XIX contó que enterró solemnemente su tubo en el jardín en cuanto se enteró de lo que llevaba dentro, y organizó una pequeña ceremonia. El comercio siguió de todas formas durante décadas, alimentado por el saqueo sistemático de tumbas y por falsificaciones bastante burdas hechas con cuerpos recientes secados al horno, que se vendían al mismo precio. Una casa de pinturas londinense declaró en 1964 que dejaba de fabricarlo por un motivo prosaico: se les había acabado la última momia que tenían en el almacén.",
        destacado: { tipo: "cifra", cifra: "1964", unidad: "el año en que se agotó la existencia" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hoy el nombre sigue existiendo en las cajas de acuarelas y de óleos, pero designa una mezcla de pigmentos minerales que imita el tono original y no lleva absolutamente nada de lo anterior. Los museos han identificado el pigmento auténtico en unas pocas obras mediante análisis químico, y en algún caso ha servido para fechar un cuadro. Es probablemente el único material artístico de la historia que dejó de fabricarse porque se agotó la materia prima y no porque nadie llegara a prohibirlo. Aquella casa londinense lo anunció además con naturalidad, en una nota comercial, como quien avisa de que se ha terminado un tono.",
      },
    ],
  },

  {
    id: "cementerio-mudado",
    titulo: "París vació sus cementerios de noche y en carros",
    gancho: "Un muro reventó por el peso de los muertos. Trasladaron seis millones a unas canteras bajo la ciudad.",
    categoria: "Muerte",
    color: "var(--forest)",
    encargo: "Una galería subterránea de piedra caliza con las paredes ordenadas en hileras.",
    entrada:
      "París, 1780. El cementerio principal de la ciudad lleva casi mil años recibiendo entierros en el mismo terreno, un solar del centro donde se calcula que hay dos millones de cuerpos apilados en capas. El suelo se ha ido levantando varios metros por encima de las calles vecinas y los sótanos de alrededor llevan años oliendo mal. Aquel invierno, el muro de una casa colindante revienta y el sótano se llena.",
    paginas: [
      {
        rotulo: "El traslado",
        texto:
          "La decisión fue cerrar todos los cementerios del centro y llevarse el contenido a unas canteras de piedra caliza abandonadas que había bajo la ciudad, las mismas de las que se sacaron los sillares de las catedrales. El traslado se hizo de noche para no alarmar a nadie, con carros cubiertos con paños negros y curas acompañando el cortejo, y duró dos años solo para el primer cementerio. Se siguió durante décadas con los demás cementerios del centro, y también con los huesos que aparecían al abrir calles nuevas. Se calcula que abajo acabaron los restos de unos seis millones de personas, más del doble de las que viven hoy dentro de la ciudad.",
        destacado: { tipo: "cifra", cifra: "6", unidad: "millones de personas trasladadas bajo tierra" },
      },
      {
        rotulo: "La ordenación",
        texto:
          "Al principio los huesos se arrojaban por un pozo y se amontonaban sin orden. A partir de 1810, el ingeniero encargado decidió organizarlos: los apiló formando muros de fémures y cráneos alineados, con dibujos geométricos, y colocó placas indicando de qué cementerio venía cada tramo y en qué año había llegado. La intención era convertir aquello en un lugar visitable y solemne, no en un almacén. Se abrió al público por primera vez en 1809, con visitas guiadas a la luz de velas y por invitación, y llegó a ser una parada de moda entre los viajeros extranjeros. En la entrada mandó grabar un aviso advirtiendo de que allí empieza el imperio de la muerte.",
        destacado: { tipo: "frase", frase: "Los ordenó formando muros de fémures con dibujos geométricos." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Bajo París hay hoy unos trescientos kilómetros de galerías, de los que se visitan poco más de un kilómetro y medio; el resto está cerrado, cartografiado a medias y recorrido por gente que entra por alcantarillas. En 2004 la policía encontró en una de esas salas un cine clandestino completo, con pantalla, proyector, bar y electricidad pinchada. Cuando volvieron tres días más tarde acompañados de técnicos, los cables y todo el equipo habían desaparecido sin dejar rastro, y en el suelo solo quedaba una nota escrita a mano pidiendo que no intentaran buscarlos. Nunca se supo quién lo había montado.",
      },
    ],
  },
];
