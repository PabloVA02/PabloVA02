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
    titulo: "La matrícula existe para poder poner multas",
    gancho: "El primer país que las exigió lo hizo porque los coches atropellaban y se iban sin que nadie los reconociera.",
    categoria: "Historia",
    color: "var(--clay)",
    encargo: "Placa de matrícula esmaltada de principios del siglo XX atornillada a un coche.",
    entrada:
      "Francia, 1893. París tiene ya unos cuantos automóviles circulando y ninguna manera de saber de quién es cada uno. Un vehículo que atropella a alguien y sigue su camino resulta imposible de identificar, porque todos se parecen. La ciudad aprueba entonces una ordenanza que obliga a llevar una placa con un número visible, y la idea se copia en toda Europa en pocos años.",
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
    titulo: "Una cámara lee matrículas en la oscuridad",
    gancho: "No la ilumina con luz visible ni usa flash. La alumbra con infrarrojos y la placa se lo devuelve todo.",
    categoria: "Tecnología",
    color: "var(--slate)",
    encargo: "Imagen en blanco y negro de una cámara de tráfico con la matrícula muy brillante.",
    entrada:
      "Reino Unido, 1976, cuando se desarrolla el primer sistema automático de lectura de matrículas. El problema técnico no era reconocer las letras, sino conseguir una imagen legible de noche, con lluvia y con faros de frente. La solución fue no usar luz visible en ningún momento. La cámara ilumina la matrícula con infrarrojos y aprovecha que la placa es retrorreflectante.",
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
    titulo: "Una matrícula se ha vendido por millones",
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
