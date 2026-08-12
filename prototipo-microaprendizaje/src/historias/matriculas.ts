import type { Short } from "../shorts";

/* ==========================================================================
   Las matrículas.

   Una placa que existe para que un vehículo no pueda pasar desapercibido,
   y que hoy se ha convertido en un objeto de lujo. El tema se estropea si
   se cuenta como historia del automóvil.

   La regla del tema: cada short parte de UNA EXIGENCIA CONCRETA (que se
   lea a cuarenta metros, que la lea una máquina de noche, que no se pueda
   fabricar otra igual) y saca de ahí todo lo demás.
   ========================================================================== */

export const MATRICULAS: Short[] = [
  {
    id: "identificar-un-coche",
    titulo: "Por qué hay matrículas",
    gancho: "El primer país que las exigió lo hizo porque los coches atropellaban y se iban sin que nadie los reconociera.",
    categoria: "Historia",
    color: "var(--clay)",
    encargo: "Placa de matrícula esmaltada de principios del siglo XX atornillada a un coche.",
    /* La Habana es el sitio del mundo donde mejor se ve una matrícula: coches
       viejos, colores planos y la placa siempre a la vista. */
    fotos: [
      {
        archivo: "La Habana Vieja (29621843287).jpg",
        autor:
          "Un coche de los años cincuenta en La Habana Vieja. Fotografía de Antonio Schubert, 2016.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:La_Habana_Vieja_(29621843287).jpg",
        foco: "50% 50%",
        alt: "Un coche antiguo de color azul desvaído, de perfil, contra una pared roja lisa.",
      },
      {
        archivo: "La Habana (43423554120).jpg",
        autor:
          "La parte de atrás de un Hillman en una calle de La Habana, con la matrícula puesta donde se lee. Fotografía de Antonio Schubert, 2017.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:La_Habana_(43423554120).jpg",
        foco: "50% 50%",
        alt: "La trasera de un coche rojo antiguo, con la placa blanca de la matrícula en el centro y la calle vacía al fondo.",
      },
      {
        archivo: "Habana Vieja (35981862770).jpg",
        autor:
          "Un coche parado en una calle de La Habana Vieja. Fotografía de Antonio Schubert, 2015.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Habana_Vieja_(35981862770).jpg",
        foco: "50% 45%",
        alt: "Un coche granate de los años cincuenta parado junto a una fachada ocre, con el brazo del conductor apoyado en la ventanilla.",
      },
      {
        archivo: "Habana (18568982609).jpg",
        autor:
          "Coches aparcados en La Habana, con la rueda de repuesto y la placa en la trasera. Fotografía de Antonio Schubert, 2015.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Habana_(18568982609).jpg",
        foco: "50% 50%",
        alt: "Detalle de la trasera de un coche rojo con la rueda de repuesto forrada en blanco y la matrícula debajo, junto a otro coche amarillo.",
      },
    ],
    entrada:
      "Francia, 1893. París tiene ya unos cuantos automóviles circulando y ninguna manera de saber de quién es cada uno. Un vehículo que atropella a alguien y sigue su camino resulta imposible de identificar, porque todos se parecen. La ciudad aprueba entonces una ordenanza que obliga a llevar una placa con un número visible, y la idea se copia en toda Europa en pocos años. La matrícula no nace para ordenar el tráfico ni para cobrar impuestos. Nace por una razón mucho más simple: para poder ponerle nombre a un coche desde la acera, sin pararlo y sin preguntarle nada a nadie.",
    paginas: [
      {
        rotulo: "Leerla de lejos",
        texto:
          "Una matrícula tiene un requisito que condiciona todo su diseño, y es que se lea desde lejos. La norma europea exige que sea legible a cuarenta metros con luz de día normal. De ahí salen el tamaño de las letras, su grosor y la distancia exacta entre ellas. También sale el contraste, porque negro sobre blanco es la combinación que mejor se lee. La tipografía está diseñada además para que no se puedan confundir caracteres parecidos entre sí. Por eso el cero lleva un corte y la ocho tiene los huecos claramente separados.",
        destacado: { tipo: "frase", frase: "Legible a cuarenta metros: de ahí sale todo el diseño." },
      },
      {
        rotulo: "Sin vocales",
        texto:
          "El sistema español actual, en vigor desde el año 2000, tiene una regla que casi nadie conoce. Las tres letras del final no llevan ninguna vocal, y tampoco la eñe, la cu ni la ele. Quitar las vocales evita que salgan palabras, incluidas las que a nadie le gustaría llevar detrás. Las otras tres se quitan porque se confunden a distancia con la cero, la o y la uno. Quedan veinte letras útiles, y con cuatro cifras delante salen unos ochenta millones de combinaciones. El sistema anterior llevaba las siglas de la provincia y se agotó en las más grandes.",
        destacado: { tipo: "cifra", cifra: "80", unidad: "millones de combinaciones da el sistema actual" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una placa que se ha vuelto un documento de identidad del vehículo con validez internacional. Quedó también la banda azul de la izquierda, que indica el país sin necesidad de pegatina. Antes de esa banda había que llevar un óvalo pegado detrás para poder cruzar una frontera. Y quedó una consecuencia que nadie previó en 1893, porque la matrícula la leen hoy las máquinas. Las cámaras de peaje, de aparcamiento y de tráfico la reconocen en menos de una décima de segundo. Aquella placa nació para que la leyera un guardia y hoy la lee un país entero.",
      },
    ],
  },
  {
    id: "leerla-con-una-camara",
    titulo: "Leer matrículas a oscuras",
    gancho: "No la ilumina con luz visible ni usa flash. La alumbra con infrarrojos y la placa se lo devuelve todo.",
    categoria: "Tecnología",
    color: "var(--slate)",
    encargo: "Imagen en blanco y negro de una cámara de tráfico con la matrícula muy brillante.",
    fotos: [
      {
        archivo: "DSCF1058 Nighttime long-exposure captures streaking headlights as cars speed through an empty urban interchange beneath glowing streetlights.jpg",
        autor: "Enlace de carreteras de noche, en exposición larga. Fotografía de PattayaPatrol, 2025.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:DSCF1058_Nighttime_long-exposure_captures_streaking_headlights_as_cars_speed_through_an_empty_urban_interchange_beneath_glowing_streetlights.jpg",
        foco: "50% 50%",
        alt: "Cruce de carreteras de noche bajo un viaducto, con las estelas blancas de los faros cruzando la imagen.",
      },
      {
        archivo: "Yellow road marker. (16098269242).jpg",
        autor: "Captafaro amarillo clavado en el asfalto, Nueva Zelanda, 2014. Fotografía de Bernard Spragg.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Yellow_road_marker._(16098269242).jpg",
        foco: "50% 50%",
        alt: "Un captafaro amarillo con su lente reflectante encajado en la calzada, visto de cerca.",
      },
      {
        archivo: "Twilight Trails, Indian River Inlet's Evening Glow - Flickr - aparlette.jpg",
        autor: "Estelas de tráfico al anochecer sobre el puente de Indian River Inlet, Delaware, 2023. Fotografía de Andrew Parlette.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Twilight_Trails,_Indian_River_Inlet's_Evening_Glow_-_Flickr_-_aparlette.jpg",
        foco: "50% 50%",
        alt: "Un puente atirantado al anochecer con dos ríos de luz roja y blanca dejados por los coches.",
      },
      {
        archivo: "Automated License Plate Reader (ALPR) Disguised as Construction Barrel on Interstate 8, Big Horn, Arizona, March 2025.jpg",
        autor: "Lector automático de matrículas camuflado dentro de un bidón de obras, interestatal 8, Arizona, 2025. Fotografía de Dugan Meyer.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Automated_License_Plate_Reader_(ALPR)_Disguised_as_Construction_Barrel_on_Interstate_8,_Big_Horn,_Arizona,_March_2025.jpg",
        foco: "50% 50%",
        alt: "Un bidón naranja de señalización al borde de una autopista del desierto, con una cámara escondida dentro.",
      },
    ],
    entrada:
      "Reino Unido, 1976, cuando se desarrolla el primer sistema automático de lectura de matrículas. El problema técnico no era reconocer las letras, que ya se sabía hacer, sino conseguir una imagen legible de noche, con lluvia, con barro en la placa y con los faros de frente deslumbrando al objetivo. La solución fue renunciar del todo a la luz visible. La cámara alumbra la matrícula con infrarrojos que nadie ve y aprovecha algo que la placa lleva de fábrica: está pintada con un material que devuelve la luz por donde ha venido.",
    paginas: [
      {
        rotulo: "Devolver la luz",
        texto:
          "Una superficie normal devuelve la luz repartida en todas las direcciones, así que llega poca al origen. Una superficie retrorreflectante devuelve casi toda la luz exactamente por donde vino. Se consigue con una capa de microesferas de vidrio o con unos prismas diminutos moldeados. Es lo mismo que llevan las señales de tráfico y los chalecos de los operarios de carretera. La cámara lleva un anillo de diodos infrarrojos alrededor del objetivo que alumbran hacia delante. La placa devuelve esa luz justo hacia la cámara, y todo lo demás queda oscuro.",
        destacado: { tipo: "frase", frase: "La placa devuelve la luz por donde vino, y solo ahí." },
      },
      {
        rotulo: "Sin ruido",
        texto:
          "El resultado de esa técnica es una imagen que parece un negativo muy raro. La matrícula sale blanca y brillantísima, y el coche entero sale casi negro. Eso simplifica muchísimo el trabajo del programa, porque solo hay una cosa iluminada en la imagen. No hace falta buscar la placa entre el paisaje, ya que es lo único que se ve. Los faros del coche tampoco molestan, porque una bombilla emite poco en esa banda de infrarrojos. Y de paso el sistema no deslumbra a nadie, porque el ojo humano no ve el infrarrojo.",
        destacado: { tipo: "cifra", cifra: "1976", unidad: "el año del primer lector automático" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una tecnología que está en peajes, en aparcamientos, en gasolineras y en cámaras de tráfico. Quedó también un debate sobre privacidad que no estaba previsto cuando se instalaron las primeras. Guardar todas las lecturas permite reconstruir por dónde ha pasado un coche durante meses. Varios países han limitado por ley cuánto tiempo se pueden conservar esos registros. Y quedó una manera muy sencilla de comprobar si una matrícula es reflectante de verdad. Basta hacerle una foto con flash de noche y mirar si sale mucho más brillante que el resto.",
      },
    ],
  },
  {
    id: "la-matricula-mas-cara",
    titulo: "Una placa carísima",
    gancho: "En varios países la placa se subasta, y una con un solo dígito ha llegado a costar más que un edificio.",
    categoria: "Dinero",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Placa de matrícula con un solo dígito expuesta en una vitrina de subasta.",
    entrada:
      "Emiratos Árabes Unidos y Hong Kong, con subastas documentadas desde 2008. En unos cuantos países la matrícula no se asigna por orden, sino que se puede elegir y se subasta. Los números bajos y las combinaciones cortas se han convertido en objetos de lujo con precio de mercado. Una placa con un solo dígito se vendió en 2023 por más de quince millones de dólares.",
    paginas: [
      {
        rotulo: "Por qué valen",
        texto:
          "El valor de esas placas viene de una escasez fabricada a propósito y perfectamente medible. Solo hay una matrícula con el número uno en cada emirato, y no se puede fabricar otra. Hay nueve placas con un solo dígito, noventa con dos y así sucesivamente hacia arriba. Cuantos menos dígitos, más caro, y el precio sube de manera brutal en cada escalón que se baja. Los ingresos de esas subastas van a fondos públicos, muchas veces destinados a causas benéficas. El Estado vende así algo que no le cuesta absolutamente nada producir ni almacenar.",
        destacado: { tipo: "frase", frase: "El Estado vende algo que no le cuesta nada fabricar." },
      },
      {
        rotulo: "En otros sitios",
        texto:
          "El mismo mercado existe en bastantes más países, aunque con cifras mucho menos llamativas. En el Reino Unido hay una agencia pública que vende combinaciones personalizadas desde hace décadas. Se pueden comprar placas que forman un nombre o una palabra, dentro de un formato permitido. Esa agencia mantiene además una lista negra de combinaciones prohibidas que se revisa cada año. Se retiran las que resultan ofensivas en inglés y también en varios otros idiomas europeos. En España no existe nada parecido, porque la asignación es correlativa y no se puede elegir.",
        destacado: { tipo: "cifra", cifra: "15", unidad: "millones de dólares por una sola cifra" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un mercado con intermediarios, con catálogos y con precios que suben todos los años. Una placa buena se compra como inversión y se guarda sin ponerla en ningún coche. Quedó también una crítica que se repite cada vez que sale una cifra en la prensa. Vender identificadores públicos al mejor postor convierte un instrumento de control en un artículo de lujo. Y quedó una ironía difícil de superar si se piensa en para qué se inventó la matrícula. Nació en 1893 para que nadie pasara desapercibido, y hoy hay quien paga millones por destacar.",
      },
    ],
  },
];
