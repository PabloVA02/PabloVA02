import type { Short } from "../shorts";

/* ==========================================================================
   Los códigos de barras.

   Unas rayas negras que casi nadie mira y que reorganizaron el comercio
   mundial entero. El tema se estropea si se cuenta como curiosidad
   informática: lo interesante es el acuerdo entre empresas rivales.

   La regla del tema: se explica CÓMO SE LEE la información y qué problema de
   organización resolvió, con la fecha del acuerdo y con cifras de tiempo
   ahorrado. Y siempre se recuerda que el código no lleva el precio dentro,
   porque casi todo el mundo cree lo contrario.
   ========================================================================== */

export const CODIGOS_DE_BARRAS: Short[] = [
  {
    id: "las-rayas-en-la-arena",
    titulo: "El código de barras se dibujó en la arena",
    gancho: "Un estudiante estiró con los dedos los puntos y rayas del alfabeto morse en una playa, y salieron barras.",
    categoria: "Códigos de barras",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un código de barras impreso en un envase, muy de cerca y algo desenfocado.",
    entrada:
      "Florida, Estados Unidos, 1949. Un directivo de una cadena de supermercados pide ayuda a una universidad porque las colas de sus cajas son insoportables: cada producto hay que teclearlo a mano y el inventario se lleva en papel. Dos estudiantes recogen el encargo, y uno de ellos, sentado en la playa, encuentra la idea que faltaba.",
    paginas: [
      {
        rotulo: "Del morse",
        texto:
          "El estudiante conocía el alfabeto morse, que representa cada letra con una combinación de puntos y rayas. Se le ocurrió que si esos puntos y rayas se estiraban hacia abajo, se convertirían en líneas finas y gruesas que una máquina podría leer con una célula fotoeléctrica, midiendo cuánta luz devuelve cada zona. Dibujó cuatro líneas en la arena con los dedos y las alargó hacia sí. La primera patente, de 1952, describía un código circular en forma de diana, pensado para poder leerlo desde cualquier ángulo. Aquella forma redonda se abandonó después porque la tinta se corría al imprimirla.",
        destacado: { tipo: "frase", frase: "Estiró hacia abajo los puntos y rayas del morse." },
      },
      {
        rotulo: "Veinte años parado",
        texto:
          "El invento se quedó en un cajón durante más de dos décadas, y no fue por falta de interés comercial, sino porque faltaban dos cosas imprescindibles. La primera era una fuente de luz capaz de leer las rayas deprisa y con precisión, algo que solo llegó con los láseres baratos de los años sesenta. La segunda era mucho más difícil de conseguir. Hacía falta que todos los fabricantes y todas las cadenas de supermercados usaran el mismo sistema, y ninguna empresa quería adoptar un formato que fuera propiedad de un competidor directo.",
        destacado: { tipo: "cifra", cifra: "1952", unidad: "el año de la primera patente" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El acuerdo llegó en 1973, cuando un comité de la industria alimentaria americana eligió un formato común y lo dejó libre de patentes para que cualquiera pudiera usarlo. El primer producto escaneado en una caja real fue un paquete de chicles, en junio de 1974, y ese paquete está hoy en un museo. Quedó una lección que se repite en cada tecnología de red, del enchufe al teléfono móvil. Lo difícil casi nunca es el invento, sino conseguir que los rivales se pongan de acuerdo en usar exactamente el mismo.",
      },
    ],
  },
  {
    id: "el-precio-no-esta-dentro",
    titulo: "El código de barras no lleva el precio",
    gancho: "Solo lleva un número que identifica el producto. El precio está en el ordenador de la tienda, y por eso cambia.",
    categoria: "Códigos de barras",
    color: "var(--ochre)",
    encargo: "Una caja de supermercado con el lector rojo encendido sobre el mostrador.",
    entrada:
      "Cualquier supermercado desde que el sistema se generalizó a finales de los años setenta. Casi todo el mundo cree que las rayas contienen el precio, y no es así. Lo que llevan es un número de trece cifras que identifica al fabricante y al producto concreto, y nada más que eso. El precio vive en la base de datos de cada tienda, asociado a ese número.",
    paginas: [
      {
        rotulo: "Qué dicen",
        texto:
          "El número está repartido en bloques con significado. Los primeros dígitos identifican al organismo que asignó el código, que suele corresponder a un país. Los siguientes señalan al fabricante y el resto al producto concreto, con su tamaño y su sabor incluidos. La última cifra es un dígito de control: se calcula con una fórmula a partir de las anteriores, y sirve para que el lector detecte si ha leído mal. Si el cálculo no cuadra, la caja avisa y hay que volver a pasar el artículo por el lector.",
        destacado: { tipo: "cifra", cifra: "13", unidad: "cifras tiene el código europeo" },
      },
      {
        rotulo: "Quién manda",
        texto:
          "Que el precio esté en el ordenador de la tienda tiene consecuencias que se notan a diario. La cadena puede cambiar precios en todas sus tiendas a la vez sin tocar un solo envase. También puede montar ofertas que duran unas horas y saber en tiempo real qué se vende en cada caja del país. También explica el conflicto clásico del cartel de la estantería que anuncia un precio y de la caja que cobra otro. Son dos sistemas separados, y alguien tiene que sincronizarlos a mano cada vez que cambia una oferta.",
        destacado: { tipo: "frase", frase: "El cartel y la caja son dos sistemas distintos." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una infraestructura silenciosa que sostiene el comercio moderno, con una organización internacional dedicada a repartir los números para que ninguna empresa del mundo repita el de otra. Quedó también su sucesor, ese cuadrado de puntos que se lee con la cámara del móvil y que guarda mucha más información, incluida una dirección de internet entera. Y quedó una anécdota que muchos recuerdan. Durante años circuló el bulo de que el código escondía el número seiscientos sesenta y seis, cuando lo que se veía era simplemente el dibujo de las barras de separación.",
      },
    ],
  },
  {
    id: "lo-que-cambio-en-la-tienda",
    titulo: "Las rayas cambiaron lo que hay en el estante",
    gancho: "Al saber al minuto qué se vende, las tiendas dejaron de comprar a ojo y los productos lentos desaparecieron.",
    categoria: "Códigos de barras",
    color: "var(--plum)",
    encargo: "Un pasillo largo de supermercado con estanterías llenas y luz uniforme.",
    entrada:
      "Comercio de todo el mundo, desde finales de los años setenta hasta hoy. Antes del código de barras, un encargado sabía lo que vendía haciendo recuento a mano cada cierto tiempo y fiándose de su experiencia. Con el escáner, cada venta queda registrada en el segundo en que ocurre, y esa información lo cambió casi todo, empezando por lo que se ve en las estanterías.",
    paginas: [
      {
        rotulo: "Comprar con datos",
        texto:
          "Con las ventas medidas al minuto se puede calcular cuánto ocupa cada producto, cuánto rota y cuánto beneficio deja por metro de estante. Los productos que se venden despacio pierden su sitio, aunque tengan clientes fieles, y los que rotan mucho lo ganan. También aparecieron los pedidos automáticos: el sistema encarga al proveedor en cuanto el nivel baja de cierto punto, sin que nadie tenga que mirar el almacén. Eso permitió reducir muchísimo la mercancía guardada en el almacén y, con ella, el dinero inmovilizado en cajas que nadie ha comprado todavía.",
        destacado: { tipo: "frase", frase: "El producto que rota poco pierde su sitio en el estante." },
      },
      {
        rotulo: "Los efectos",
        texto:
          "Las consecuencias fueron desiguales y siguen discutiéndose. Las cadenas grandes ganaron una ventaja enorme sobre las tiendas pequeñas, sencillamente porque el sistema solo sale rentable a partir de cierto volumen de ventas. Los fabricantes empezaron a pagar por colocarse en las estanterías buenas, a la altura de los ojos, porque a partir de entonces se sabía exactamente cuánto valía cada posición. Y la variedad se redujo en unas categorías y aumentó en otras, porque la misma información que mata a un producto lento permite descubrir un nicho pequeño pero rentable.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "segundo tarda hoy en registrarse una venta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un comercio que funciona con inventarios ajustadísimos. Eso se notó en cuanto se rompió la cadena de suministro durante la pandemia y aparecieron estanterías vacías de un día para otro. Quedó también la tarjeta de fidelidad, que existe sobre todo para asociar cada compra a una persona concreta y no solo a un producto anónimo. Y quedó la caja de autoservicio, que solo es posible porque el trabajo difícil, que es identificar el artículo y su precio, lo hacen unas rayas impresas en el envase y no una persona.",
      },
    ],
  },
];
