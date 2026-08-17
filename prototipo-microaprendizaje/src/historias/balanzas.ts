import type { Short } from "../shorts";

/* ==========================================================================
   Las balanzas.

   Pesar es una de las cosas más antiguas que se hacen, y casi nadie sabe
   que hay tres maneras distintas de hacerlo. El tema se estropea si se
   cuenta como historia de las medidas.

   La regla del tema: cada short explica QUÉ MIDE DE VERDAD el aparato
   (masa comparada, palanca, deformación) antes de contar para qué sirvió,
   porque de esa diferencia sale todo lo demás, incluido el fraude.
   ========================================================================== */

export const BALANZAS: Short[] = [
  {
    id: "los-dos-platillos",
    titulo: "La balanza no mide peso",
    gancho: "Compara. Y por eso da lo mismo en la Luna que en la Tierra, cosa que ninguna báscula moderna consigue.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Balanza de dos platillos de latón en equilibrio, con pesas pequeñas en uno de ellos.",
    fotos: [
      {
        archivo: "Balance, letter (51360856670).jpg",
        autor: "Una balanza de cartas de latón sobre base de madera, con su juego de pesas. Auckland Museum.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Balance,_letter_(51360856670).jpg",
        foco: "50% 45%",
        alt: "Una balanza de dos platillos de latón sobre una base oscura, con seis pesas cilíndricas alineadas delante.",
      },
      {
        archivo: "Earthrise over Compton crater -LRO full res.jpg",
        autor: "La Tierra saliendo por el horizonte de la Luna, vista por la sonda LRO. NASA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Earthrise_over_Compton_crater_-LRO_full_res.jpg",
        foco: "50% 30%",
        alt: "La Tierra azul y blanca asomando sobre la superficie gris y llena de cráteres de la Luna.",
      },
      {
        archivo: "Set of 17th century nested brass weights. Wellcome L0057063.jpg",
        autor: "Juego de pesas encajables de latón, Europa, siglo XVII. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Set_of_17th_century_nested_brass_weights._Wellcome_L0057063.jpg",
        foco: "50% 45%",
        alt: "Vasos de latón de tamaños decrecientes que encajan unos dentro de otros, abiertos sobre fondo negro.",
      },
      {
        archivo: "BD Weighing of the Heart.jpg",
        autor: "El pesaje del corazón, del Libro de los Muertos de Ani, hacia 1300 a. C. British Museum.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:BD_Weighing_of_the_Heart.jpg",
        foco: "50% 45%",
        alt: "Pintura egipcia sobre papiro con una balanza grande en el centro y figuras de dioses a los lados.",
      },
    ],
    entrada:
      "Egipto y Mesopotamia, desde hace unos cinco mil años. La balanza de dos platillos colgados de una barra es uno de los instrumentos más antiguos que existen y, mirado de cerca, también uno de los más listos que se han inventado nunca. No dice cuánto pesa una cosa. Dice si pesa lo mismo que otra, que es una pregunta distinta y mucho más fácil de contestar bien. Esa diferencia, que suena a matiz de pedante, es exactamente lo que la vuelve exacta en cualquier sitio del universo, y lo que ninguna báscula moderna puede prometer.",
    paginas: [
      {
        rotulo: "Comparar, no medir",
        texto:
          "Una báscula de baño mide la fuerza con la que la Tierra tira de uno y la traduce a kilos. Si esa báscula se lleva a la Luna, marca la sexta parte, porque allí la gravedad es más floja. La balanza de platillos no tiene ese problema, ya que la gravedad tira igual de los dos lados. Si la barra se queda horizontal, las dos cargas tienen la misma masa, y eso vale en la Luna y en Marte. Solo hace falta un juego de pesas de referencia y una barra que gire con poco rozamiento. Con brazos largos y un buen apoyo, una balanza de laboratorio nota una diferencia de un décimo de miligramo.",
        destacado: { tipo: "frase", frase: "La gravedad tira igual de los dos platillos: se anula." },
      },
      {
        rotulo: "El fiel",
        texto:
          "La aguja que marca el equilibrio se llama fiel, y la palabra no es casual: la balanza era una promesa. Todo mercado antiguo tenía un funcionario encargado de comprobar las pesas de los vendedores contra un patrón oficial. El fraude clásico consistía en alargar un brazo más que el otro, cosa invisible a ojo y decisiva en la cuenta. Se detecta con un truco simple: se pesa, se cambian las cargas de platillo y se mira otra vez. Si la balanza es honrada da lo mismo, y si tiene un brazo largo se desequilibra al revés. Las penas por manipular pesas fueron durísimas en casi todas las épocas, desde multas enormes hasta la marca a fuego.",
        destacado: { tipo: "cifra", cifra: "5.000", unidad: "años lleva funcionando el mismo instrumento" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó como símbolo de la justicia en tribunales de medio mundo, y el motivo es exactamente el que se acaba de contar. Una balanza no opina ni interpreta: solo compara dos cosas y enseña cuál de las dos pesa más. Quedó también en los laboratorios de precisión, donde para las medidas más finas se sigue usando el mismo principio de comparación de siempre. Y quedó su límite, porque comparar es lento y necesita pesas, de modo que para la vida diaria se impuso el aparato que da un número al instante y sin pesas.",
      },
    ],
  },
  {
    id: "la-romana",
    titulo: "Una pesa lo pesa todo",
    gancho: "La romana usa una pesa pequeña que se desliza por un brazo largo. La palanca hace todo el trabajo.",
    categoria: "Objetos",
    color: "var(--ochre)",
    encargo: "Romana de hierro colgada con un gancho, con la pesa corrida por el brazo graduado.",
    fotos: [
      {
        archivo: "Roman, Incomplete steelyard and suspension weight (FindID 565530-430299).jpg",
        autor: "Romana de bronce romana, del siglo I o II, con su contrapeso de piedra. Birmingham Museums Trust.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Roman,_Incomplete_steelyard_and_suspension_weight_(FindID_565530-430299).jpg",
        foco: "45% 45%",
        alt: "Balanza romana de bronce verdoso con ganchos y un contrapeso de piedra colgando del brazo.",
      },
      {
        archivo: "Roman, Incomplete steelyard and suspension weight (FindID 565530).jpg",
        autor: "El brazo graduado de la misma romana romana, con las muescas talladas.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Roman,_Incomplete_steelyard_and_suspension_weight_(FindID_565530).jpg",
        foco: "50% 50%",
        alt: "Barra de bronce antigua con muescas regulares talladas a lo largo, sobre fondo claro.",
      },
      {
        archivo: "Roman, Incomplete steelyard and suspension weight (FindID 565530-430297).jpg",
        autor: "Detalle de los ganchos y las anillas de la romana romana conservada en Birmingham.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Roman,_Incomplete_steelyard_and_suspension_weight_(FindID_565530-430297).jpg",
        foco: "50% 50%",
        alt: "Ganchos y eslabones de bronce con pátina verde de una balanza antigua.",
      },
      {
        archivo: "DZ6 1813 A vendor smiles as she weighs and prepares ripe yellow mangoes at a bustling indoor market stall with stacks of packaged goods and fellow sellers visible in the background.jpg",
        autor: "Una vendedora pesa mangos en el puesto de un mercado cubierto.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:DZ6_1813_A_vendor_smiles_as_she_weighs_and_prepares_ripe_yellow_mangoes_at_a_bustling_indoor_market_stall_with_stacks_of_packaged_goods_and_fellow_sellers_visible_in_the_background.jpg",
        foco: "50% 50%",
        alt: "Vendedora de mercado colocando fruta amarilla sobre el plato de una balanza.",
      },
    ],
    entrada:
      "Imperio romano, siglo I. La balanza de dos platillos tiene un problema práctico muy serio en cuanto se sale del joyero: para pesar cien kilos hacen falta cien kilos de pesas, y alguien que las cargue y las guarde. En un mercado, en un puerto o en una era eso es inviable. Los romanos difundieron entonces un instrumento que resuelve el asunto entero con una sola pesa pequeña y un brazo con marcas talladas. Se llama romana por ellos, y dos mil años después sigue colgada en almacenes y en cocinas de pueblo.",
    paginas: [
      {
        rotulo: "La palanca",
        texto:
          "Una palanca es una barra que gira sobre un punto de apoyo, y su regla es la misma desde que se descubrió. Lo que cuenta no es solo el peso, sino el peso multiplicado por la distancia hasta el punto de apoyo. Un kilo colgado a un metro equilibra diez kilos colgados a diez centímetros, y ahí está todo el truco. La romana cuelga la carga muy cerca del gancho de apoyo, en el lado corto de la barra. Por el lado largo se desliza una pesa pequeña hasta que la barra queda horizontal. El número grabado en ese punto del brazo es el peso, y una pesa de dos kilos llega a medir cincuenta.",
        destacado: { tipo: "frase", frase: "Un kilo a un metro equilibra diez kilos a diez centímetros." },
      },
      {
        rotulo: "En el mercado",
        texto:
          "La romana se impuso en el comercio porque es ligera, se lleva colgada del cinturón y no necesita mesa. Un tendero podía pesar un saco entero levantándolo con un brazo mientras corría la pesa con el otro. Muchas llevan dos ganchos de apoyo distintos, de modo que colgándola de uno u otro cambia la escala. Se le da la vuelta a la barra y aparece la segunda numeración grabada en la otra cara. Su punto débil es que las marcas del brazo hay que grabarlas bien, y una romana falsa engaña sin que se note. Por eso los inspectores de pesos y medidas las sellaban con un punzón y las revisaban cada cierto tiempo.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "kilos mide una romana con pesa de dos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el nombre, porque en español la palabra romana significa exactamente esa balanza y no otra cosa. Quedaron muchas colgadas todavía en almacenes, en lonjas y en casas de campo, funcionando sin ninguna pila. Quedó también el principio en sitios donde no se le espera, como las básculas de pesar camiones y las de hospital antiguas. Aquellas básculas de consulta con una barra y unos cursores que se deslizaban eran romanas con otro nombre. Y quedó la elegancia de un invento que resuelve un problema de fuerza con geometría, sin gastar ni un gramo de más.",
      },
    ],
  },
  {
    id: "la-bascula-digital",
    titulo: "La báscula y el doblez",
    gancho: "Dentro no hay muelles ni pesas. Hay una pieza de metal que se dobla un poco y unos hilos que notan cuánto.",
    categoria: "Tecnología",
    color: "var(--plum)",
    curioso: true,
    encargo: "Interior abierto de una báscula de baño con el bloque de aluminio y los cables a la vista.",
    entrada:
      "Estados Unidos, 1938. Un ingeniero descubre por casualidad que si se pega un hilo metálico muy fino a una pieza que se deforma, la resistencia eléctrica de ese hilo cambia de una forma pequeña pero perfectamente medible. Parece un hallazgo de laboratorio, de los que se quedan en una revista y no salen de ahí. Ese hilo pegado es hoy el corazón de casi todas las básculas que existen, desde la del cuarto de baño hasta la que pesa un camión entero con su carga en una báscula de carretera. Y no pesa exactamente lo que uno cree que pesa.",
    paginas: [
      {
        rotulo: "El hilo",
        texto:
          "Cuando un hilo de metal se estira, se vuelve más largo y delgado, y la electricidad lo atraviesa peor. Ese empeoramiento se llama resistencia y se puede medir con mucha exactitud aunque el estiramiento sea diminuto. La pieza que hay dentro de una báscula es un bloque de aluminio con una forma pensada para doblarse siempre igual. Al subirse alguien encima, ese bloque cede unas centésimas de milímetro, tan poco que a ojo no pasa nada. Los hilos pegados a su superficie se estiran con él, cambia su resistencia y un circuito la convierte en kilos. Se ponen cuatro hilos para que el calor y la posición del pie no falseen la medida.",
        destacado: { tipo: "frase", frase: "El bloque cede centésimas de milímetro y eso ya se mide." },
      },
      {
        rotulo: "El precio",
        texto:
          "El invento tiene una consecuencia que nadie suele pensar: la báscula digital mide fuerza, no masa. Como la gravedad no es exactamente igual en todo el planeta, la misma báscula marca distinto en el ecuador que cerca del polo. La diferencia llega al medio por ciento, que en una persona son unos cuantos cientos de gramos. Por eso las básculas de comercio se calibran en el sitio donde van a trabajar y llevan un precinto oficial. Moverlas de ciudad obliga a repetir el ajuste, cosa que sorprende a cualquiera que abra una tienda nueva. La balanza de platillos, con sus cinco mil años, no necesitaba nada de esto.",
        destacado: { tipo: "cifra", cifra: "1938", unidad: "el año del hilo que mide deformaciones" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un sensor que se usa en muchísimos sitios donde no se está pesando nada, porque mide deformaciones. Va pegado a las alas de los aviones, a los puentes, a las grúas y a las prensas industriales. En un puente grande hay cientos de esos hilos avisando de cuánto se dobla la estructura con cada camión que pasa. Quedó también la báscula de baño barata, que es el mismo aparato de precisión vendido por veinte euros. Y quedó el contraste con el que empezó este tema, porque la balanza más antigua compara y la más moderna calcula, y solo una de las dos serviría en la Luna.",
      },
    ],
  },
];
