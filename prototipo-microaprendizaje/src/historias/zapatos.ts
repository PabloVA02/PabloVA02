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
    titulo: "Los zapatos no distinguían izquierdo de derecho",
    gancho: "Se hacían los dos iguales, rectos, y era el pie el que tenía que amoldarse a base de usarlos.",
    categoria: "Zapatos",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un par de zapatos antiguos de cuero idénticos entre sí, puestos uno junto a otro.",
    entrada:
      "Europa y América, hasta bien entrado el siglo XIX. El calzado corriente se fabrica sobre una horma recta, es decir, simétrica, de modo que los dos zapatos de un par son idénticos y valen para cualquier pie. Se recomendaba cambiarlos de lado cada día para que se gastaran por igual, y el ajuste al pie se conseguía con el uso, a base de ampollas.",
    paginas: [
      {
        rotulo: "La horma",
        texto:
          "El motivo era económico. Una horma es el molde de madera sobre el que se monta el zapato, y hacer hormas simétricas significaba la mitad de moldes, la mitad de patrones y un almacén mucho más simple, porque cualquier zapato servía para cualquier pie. Con cueros rígidos y costuras a mano, además, la diferencia se notaba menos de lo que parece: el cuero cede y termina tomando la forma del pie al cabo de unas semanas, aunque esas semanas fueran una tortura para el que estrenaba. Los zapatos de lujo sí se hacían a medida, con horma propia del cliente, y esa era buena parte de lo que se pagaba.",
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
          "Quedó una asimetría que hoy damos por evidente y que tiene siglo y medio, no más. Quedó también la horma como objeto: cada modelo de zapato se sigue construyendo sobre una, y las diferencias entre marcas que hacen que un número te valga en una y no en otra son diferencias de horma, no de talla. Y quedó el consejo antiguo de alternar los zapatos, que se daba para que se gastaran igual y hoy se repite por otra razón: para que el cuero se seque del todo entre puesta y puesta.",
      },
    ],
  },
  {
    id: "el-numero-del-pie",
    titulo: "El número del pie se midió en cebada",
    gancho: "Tres granos puestos en fila hacen una pulgada, y cada tercio de pulgada es un número. De ahí sale el 42.",
    categoria: "Zapatos",
    color: "var(--slate)",
    encargo: "Una regla de zapatero de madera con números grabados y un pie de metal.",
    entrada:
      "Inglaterra, siglo XIV. Un rey fija por decreto que tres granos de cebada secos puestos en fila equivalen a una pulgada. Los zapateros adoptan esa unidad para medir hormas y establecen que cada número de calzado se diferencia del siguiente en un grano, es decir, un tercio de pulgada: unos ocho milímetros y medio. Ese sistema sigue vivo en los países anglosajones.",
    paginas: [
      {
        rotulo: "Tres sistemas",
        texto:
          "Hoy conviven tres escalas incompatibles y por eso nadie sabe qué número calza de verdad. La británica empieza a contar desde el zapato más pequeño fabricable, la americana usa el mismo paso de grano pero arranca en otro punto, y la europea, llamada punto francés, mide la longitud de la horma en unidades de dos tercios de centímetro. Como la horma es más larga que el pie —hace falta holgura para los dedos—, el número europeo no coincide con la longitud del pie ni con ninguna medida que el usuario pueda tomarse en casa.",
        destacado: { tipo: "cifra", cifra: "8,5", unidad: "milímetros de diferencia entre dos números" },
      },
      {
        rotulo: "Medir el pie",
        texto:
          "El aparato metálico con reglas deslizantes que había en todas las zapaterías se patentó en 1927 y mide tres cosas a la vez: el largo del pie, el ancho y la posición del arco. Se recomienda medir a última hora del día, porque el pie se hincha con las horas y puede crecer casi un número entero, y con el peso repartido sobre los dos pies, porque de pie se alarga. Uno de cada tres adultos tiene además un pie medio número mayor que el otro, y la regla es comprar por el grande.",
        destacado: { tipo: "frase", frase: "El pie crece a lo largo del día: hay que medirlo por la tarde." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un lío de tallas que las tiendas online intentan resolver con tablas de equivalencia que no siempre cuadran, porque cada fabricante usa su horma. Quedó el grano de cebada convertido en unidad de calzado, seis siglos después de un decreto que buscaba otra cosa. Y quedó un dato que explica muchas molestias: los estudios sobre calzado encuentran que una proporción altísima de la gente lleva zapatos que no son de su medida, casi siempre pequeños, porque compró el número que cree tener desde hace años y no el que le vale ahora, cuando el pie de un adulto sigue cambiando de forma con la edad.",
      },
    ],
  },
  {
    id: "el-zapatero-remendon",
    titulo: "Antes los zapatos se arreglaban tres o cuatro veces",
    gancho: "La suela cosida se cambiaba entera, y un buen par duraba veinte años pasando varias veces por el taller.",
    categoria: "Zapatos",
    color: "var(--ochre)",
    encargo: "Un banco de zapatero con herramientas, clavos y una suela a medio coser.",
    entrada:
      "Europa, hasta mediados del siglo XX. En cualquier calle hay un taller de zapatero, y no vende zapatos: los arregla. Un par de calidad se compraba una vez, se llevaba a resolar cuando la suela se gastaba y volvía a la calle como nuevo. La razón no es que la gente fuera más apañada, sino cómo estaba montado el zapato.",
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
          "A partir de los años cincuenta se impuso pegar la suela con adhesivos, un método muchísimo más rápido y barato: ni costuras, ni tira intermedia, ni oficio. El zapato resultante es ligero y cómodo, pero cuando la suela se gasta o se despega no hay costura que abrir y el arreglo es una chapuza que dura poco. La mayoría del calzado que se vende hoy está montado así, y por eso el negocio del zapatero se hundió: no es que la gente prefiera tirar, es que el objeto ya no se deja arreglar.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "años podía durar un par cosido" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedan pocos talleres, casi siempre de gente mayor, y una división clara del mercado: el calzado cosido sigue existiendo, cuesta varias veces más y se vende con el argumento de que se resuela. Quedó también un debate que se repite con las lavadoras, los móviles y los coches: si un objeto se fabrica de manera que no pueda repararse, el ahorro del comprador dura lo que dura el objeto. Y quedó un olor —cuero, cola y betún— que todavía puede encontrarse al pasar por delante de alguno de esos talleres, cada vez en menos calles.",
      },
    ],
  },
];
