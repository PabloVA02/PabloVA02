import type { Short } from "../shorts";

/* ==========================================================================
   Los zapatos.

   Lo que separa al pie del suelo, y una de las pocas prendas que sigue
   fabricándose casi como hace un siglo. El tema se hunde si se cuenta como
   moda: aquí manda el pie.

   La regla del tema: cada short parte de algo que el lector nota en su propio
   pie —que un zapato nuevo aprieta, que un número no coincide con otro, que
   una suela resbala— y explica de dónde viene. Y siempre se dice cuánto duran
   y qué cuesta arreglarlos, porque ahí está lo que ha cambiado de verdad.
   ========================================================================== */

export const ZAPATOS: Short[] = [
  {
    id: "izquierdo-y-derecho-iguales",
    titulo: "Los zapatos eran iguales",
    gancho: "Se hacían los dos iguales, rectos, y era el pie el que tenía que amoldarse a base de usarlos.",
    categoria: "Zapatos",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un par de zapatos antiguos de cuero idénticos entre sí, puestos uno junto a otro.",
    fotos: [
      {
        archivo: "Byzantine - Pair of Shoes - Walters 73140, 73141.jpg",
        autor: "Par de zapatos bizantinos de cuero repujado y dorado. Walters Art Museum, Baltimore.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Byzantine_-_Pair_of_Shoes_-_Walters_73140,_73141.jpg",
        foco: "50% 50%",
        alt: "Dos zapatos de cuero oscuro con la punta afilada y adornos dorados, iguales entre sí, sobre fondo blanco.",
      },
      {
        archivo: "Cobbler repairing shoes in old workshop (Bazaar in Bitola, Macedonia, 2025).jpg",
        autor: "Un zapatero remendón en su taller del bazar de Bitola, en Macedonia del Norte. Fotografía de Petar Milošević.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cobbler_repairing_shoes_in_old_workshop_(Bazaar_in_Bitola,_Macedonia,_2025).jpg",
        foco: "50% 50%",
        alt: "Un taller pequeño lleno de hormas, cuchillas y zapatos a medio arreglar, con la luz entrando por delante.",
      },
      {
        archivo: "Boots (AM 762134-1).jpg",
        autor: "Par de botas militares de la Primera Guerra Mundial. Auckland War Memorial Museum.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Boots_(AM_762134-1).jpg",
        foco: "50% 50%",
        alt: "Dos botas altas de cuero pardo con cordones y suela claveteada, colocadas juntas.",
      },
      {
        archivo: "Shoes in a spanish shoe store.jpg",
        autor: "El escaparate de una zapatería española. Fotografía de Tomás Castelazo.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Shoes_in_a_spanish_shoe_store.jpg",
        foco: "50% 50%",
        alt: "Hileras de zapatos de distintos colores colocados en estantes tras un cristal.",
      },
    ],
    entrada:
      "Europa y América, hasta bien entrado el siglo XIX. El calzado corriente se fabrica sobre una horma recta, es decir, simétrica, de modo que los dos zapatos de un par salen idénticos y cualquiera de ellos vale para cualquier pie. No es un descuido ni una chapuza: está pensado así y todo el mundo lo da por normal. Se recomendaba incluso cambiarlos de lado cada mañana para que se gastaran por igual y duraran más. El ajuste al pie se conseguía después, con el uso y con el tiempo, a base de ampollas y de callos.",
    paginas: [
      {
        rotulo: "La horma",
        texto:
          "El motivo era económico. Una horma es el molde de madera sobre el que se monta el zapato. Hacer hormas simétricas significaba la mitad de moldes y la mitad de patrones. Y un almacén mucho más simple, porque cualquier zapato valía para cualquier pie. Con cueros rígidos y costuras a mano, además, la diferencia se notaba menos de lo que parece. El cuero cede y acaba tomando la forma del pie en unas semanas. Otra cosa es lo que dolían esas semanas. Los zapatos de lujo sí se hacían a medida, con horma propia del cliente, y esa era buena parte de lo que se pagaba.",
        destacado: { tipo: "frase", frase: "El zapato no se adaptaba al pie: el pie se adaptaba al zapato." },
      },
      {
        rotulo: "El ejército",
        texto:
          "El cambio llegó por una vía práctica: los ejércitos. Un soldado con los pies destrozados no camina, y las campañas del siglo XIX dejaron claro que aquello era un problema militar de primer orden. A partir de los años sesenta de ese siglo se generalizaron las hormas diferenciadas para cada pie, primero en calzado militar y de trabajo y después en el resto. Ayudó que la máquina de coser suelas, patentada en 1858, permitiera fabricar en serie modelos distintos sin disparar el coste: hasta entonces cada par se cosía a mano, y multiplicar los moldes multiplicaba las horas.",
        destacado: { tipo: "cifra", cifra: "1858", unidad: "el año de la máquina de coser suelas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una asimetría que hoy damos por evidente y que tiene siglo y medio, no más. Quedó también la horma como objeto: cada modelo de zapato se sigue construyendo sobre una. Y de ahí viene algo que desconcierta a todo el mundo. Si un número te vale en una marca y no en otra, la culpa no es de la talla, es de la horma. Y quedó el consejo antiguo de ir alternando los zapatos. Antes se daba para que se gastaran por igual. Hoy se repite por otra razón: para que el cuero se seque del todo entre una puesta y la siguiente.",
      },
    ],
  },
  {
    id: "el-numero-del-pie",
    titulo: "El pie medido en cebada",
    gancho: "Tres granos puestos en fila hacen una pulgada, y cada tercio de pulgada es un número. De ahí sale el 42.",
    categoria: "Zapatos",
    color: "var(--slate)",
    encargo: "Una regla de zapatero de madera con números grabados y un pie de metal.",
    fotos: [
      {
        archivo: "CH.ZG.Zug Museum-Burg-Zug shoemaker's-workbench-around-1930.jpg",
        autor: "Banco de trabajo de un zapatero suizo hacia 1930, con las herramientas colocadas. Museo Burg de Zug.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ACH.ZG.Zug%20Museum-Burg-Zug%20shoemaker's-workbench-around-1930.jpg",
        foco: "50% 28%",
        alt: "Mesa de zapatero con alicates, martillos, leznas y limas ordenados en fila sobre el tablero.",
      },
      {
        archivo: "Nottuln, Gladbeck, Gerstefeld -- 2024 -- 4344.jpg",
        autor: "Campo de cebada a primera hora, en Renania del Norte-Westfalia.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ANottuln%2C%20Gladbeck%2C%20Gerstefeld%20--%202024%20--%204344.jpg",
        foco: "50% 50%",
        alt: "Campo de cebada con las espigas doradas y las barbas encendidas por la luz baja del sol.",
      },
      {
        archivo: "Cobblers tripartite last early 20th century Sweden.jpg",
        autor: "Horma de zapatero de tres piezas, de la primera mitad del siglo XX, en Suecia.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ACobblers%20tripartite%20last%20early%2020th%20century%20Sweden.jpg",
        foco: "50% 50%",
        alt: "Horma metálica con tres pies de distintos tamaños montados sobre un mismo eje.",
      },
      {
        archivo: "CH.ZG.Zug Museum-Burg-Zug shoemaker's-machines-around-1930.jpg",
        autor: "Máquinas del mismo taller de zapatería, tal y como estaban hacia 1930.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ACH.ZG.Zug%20Museum-Burg-Zug%20shoemaker's-machines-around-1930.jpg",
        foco: "50% 45%",
        alt: "Rincón de taller con máquinas de coser y pulir de hierro, correas y estantes con hormas.",
      },
    ],
    entrada:
      "Inglaterra, siglo XIV. Un rey fija por decreto que tres granos de cebada secos puestos en fila equivalen a una pulgada. Los zapateros adoptan esa unidad para medir hormas y establecen que cada número de calzado se diferencia del siguiente en un grano, es decir, un tercio de pulgada: unos ocho milímetros y medio. Ese sistema, nacido de tres granos de cebada puestos en fila sobre una mesa, sigue perfectamente vivo hoy en los países anglosajones, y explica por qué un número de allí no coincide nunca del todo con uno de aquí.",
    paginas: [
      {
        rotulo: "Tres sistemas",
        texto:
          "Hoy conviven tres escalas incompatibles y por eso nadie sabe qué número calza de verdad. La británica empieza a contar desde el zapato más pequeño que se podía fabricar. La americana usa el mismo paso de grano, pero arranca en otro punto. Y la europea, llamada punto francés, mide la horma en unidades de dos tercios de centímetro. La horma es siempre más larga que el pie, porque los dedos necesitan holgura. Por eso el número europeo no coincide con lo que mide tu pie ni con nada que puedas medirte en casa.",
        destacado: { tipo: "cifra", cifra: "8,5", unidad: "milímetros de diferencia entre dos números" },
      },
      {
        rotulo: "Medir el pie",
        texto:
          "El aparato metálico con reglas deslizantes que había en todas las zapaterías se patentó en 1927 y mide tres cosas a la vez: el largo del pie, el ancho y la posición del arco. Se recomienda medir a última hora del día, porque el pie se hincha con las horas y puede crecer casi un número entero. Y de pie, con el peso repartido sobre los dos, porque así se alarga. Uno de cada tres adultos tiene además un pie medio número mayor que el otro, y la regla es comprar por el grande.",
        destacado: { tipo: "frase", frase: "El pie crece a lo largo del día: hay que medirlo por la tarde." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un lío de tallas que las tiendas online intentan resolver con tablas de equivalencia que no siempre cuadran, porque cada fabricante usa su horma. Quedó el grano de cebada convertido en unidad de calzado, seis siglos después de un decreto que buscaba otra cosa. Y quedó un dato que explica muchas molestias. Los estudios sobre calzado encuentran que muchísima gente lleva zapatos que no son de su medida, casi siempre pequeños. El motivo es sencillo: compran el número que creen tener desde hace años. El pie de un adulto, mientras tanto, sigue cambiando de forma.",
      },
    ],
  },
  {
    id: "el-zapatero-remendon",
    titulo: "Los zapatos se arreglaban",
    gancho: "La suela cosida se cambiaba entera, y un buen par duraba veinte años pasando varias veces por el taller.",
    categoria: "Zapatos",
    color: "var(--ochre)",
    encargo: "Un banco de zapatero con herramientas, clavos y una suela a medio coser.",
    entrada:
      "Europa, hasta mediados del siglo XX. En cualquier calle de cualquier barrio hay un taller de zapatero, y ese taller no vende zapatos: los arregla. Un par de calidad se compraba una vez en la vida, se llevaba a resolar cada vez que la suela se gastaba y volvía a la calle como nuevo, y así varias veces. La razón de que aquello funcionara no es que la gente de entonces fuera más apañada ni más ahorradora, sino cómo estaba montado el zapato por dentro. Cuando cambió la manera de pegar la suela, el oficio se quedó sin trabajo.",
    paginas: [
      {
        rotulo: "La costura",
        texto:
          "En el montaje tradicional, la suela no va pegada al zapato: va cosida a una tira de cuero que rodea el borde y que a su vez está cosida al corte, la parte de arriba. Ese sistema permite cortar los hilos de la costura exterior, retirar la suela gastada y coser una nueva sin tocar el resto del zapato, cuantas veces haga falta. Es más caro de fabricar y exige más piezas y más oficio, pero convierte la suela en un consumible sustituible, igual que las ruedas de un coche. El zapatero corta, retira, ajusta la nueva y vuelve a coser en un rato.",
        destacado: { tipo: "frase", frase: "La suela va cosida por fuera, y por eso se puede cambiar." },
      },
      {
        rotulo: "El pegamento",
        texto:
          "A partir de los años cincuenta se impuso pegar la suela con adhesivos, un método muchísimo más rápido y barato: ni costuras, ni tira intermedia, ni oficio. El zapato resultante es ligero y cómodo, pero cuando la suela se gasta o se despega no hay costura que abrir y el arreglo es una chapuza que dura poco. La mayoría del calzado que se vende hoy está montado así, y por eso se hundió el negocio del zapatero. No es que la gente prefiera tirar. Es que el objeto ya no se deja arreglar.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "años podía durar un par cosido" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedan pocos talleres, casi siempre de gente mayor, y una división clara del mercado: el calzado cosido sigue existiendo, cuesta varias veces más y se vende con el argumento de que se resuela. Quedó también un debate que se repite con las lavadoras, los móviles y los coches. Si un objeto se fabrica de forma que no pueda repararse, el ahorro del comprador dura lo que dure el objeto. Y quedó un olor —cuero, cola y betún— que todavía puede encontrarse al pasar por delante de alguno de esos talleres, cada vez en menos calles.",
      },
    ],
  },
];
