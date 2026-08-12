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
    titulo: "Lo dibujó en la arena",
    gancho: "Un estudiante estiró con los dedos los puntos y rayas del alfabeto morse en una playa, y salieron barras.",
    categoria: "Códigos de barras",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un código de barras impreso en un envase, muy de cerca y algo desenfocado.",
    fotos: [
      {
        archivo: "EAN-13 barcode on a gummy candy package.jpg",
        autor: "Un código de barras EAN-13 impreso en el envase de unas gominolas, visto muy de cerca.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:EAN-13_barcode_on_a_gummy_candy_package.jpg",
        foco: "50% 40%",
        alt: "Barras negras de distintos grosores sobre fondo blanco, con una hilera de cifras debajo.",
      },
      {
        archivo: "Ripples (15108827028).jpg",
        autor: "La arena de una playa vista a ras de suelo. Fotografía de oatsy40.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ripples_(15108827028).jpg",
        foco: "50% 45%",
        alt: "Ondulaciones de arena mojada en primer plano, con el mar y un cielo blanco al fondo.",
      },
      {
        archivo: "Optical fiber in protective coating that transports a Laser beam - Laser Physics Lab - NTNU-NT.jpg",
        autor: "Una fibra óptica transportando un haz láser, en un laboratorio de física. NTNU.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Optical_fiber_in_protective_coating_that_transports_a_Laser_beam_-_Laser_Physics_Lab_-_NTNU-NT.jpg",
        foco: "50% 45%",
        alt: "Un hilo fino que brilla con luz intensa recorriéndolo por dentro, sobre un fondo oscuro.",
      },
      {
        archivo: "SPAR kolonial mat varehandel hyller (Supermarket interior GROCERY store aisle shelves) Frokostblandinger gryn müsli Axa frukt energi 4-korn blåbær (cereals muesli) etc Tjøme NORWAY 2023-08-31 IMG 1095.jpg",
        autor: "Estanterías de un supermercado noruego: cada envase lleva su código impreso.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:SPAR_kolonial_mat_varehandel_hyller_(Supermarket_interior_GROCERY_store_aisle_shelves)_Frokostblandinger_gryn_m%C3%BCsli_Axa_frukt_energi_4-korn_bl%C3%A5b%C3%A6r_(cereals_muesli)_etc_Tj%C3%B8me_NORWAY_2023-08-31_IMG_1095.jpg",
        foco: "50% 45%",
        alt: "Baldas de supermercado llenas de cajas de cereales alineadas y colocadas de frente.",
      },
    ],
    entrada:
      "Florida, Estados Unidos, 1949. Un directivo de una cadena de supermercados va a una universidad a pedir ayuda con un problema que le parece irresoluble: las colas de sus cajas son insoportables porque cada producto hay que teclearlo a mano, artículo por artículo, y el inventario se lleva a lápiz en libretas que nunca cuadran. Casi nadie le hace caso, pero dos estudiantes recogen el encargo. Uno de ellos, sentado en la playa unos meses después, encuentra la idea que faltaba sin más herramienta que los cuatro dedos de una mano.",
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
    titulo: "El código no dice el precio",
    gancho: "Solo lleva un número que identifica el producto. El precio está en el ordenador de la tienda, y por eso cambia.",
    categoria: "Códigos de barras",
    color: "var(--ochre)",
    encargo: "Una caja de supermercado con el lector rojo encendido sobre el mostrador.",
    fotos: [
      {
        archivo: "US Navy 020813-N-3235P-532 A Navy family unloads their shopping cart while purchasing groceries at the Navy Commissary located just outside Naval Air Station Oceana.jpg",
        autor: "Una caja de supermercado con el lector y la pantalla que canta el producto y su precio, en 2002. Armada de Estados Unidos.",
        licencia: "Public domain",
        fuente:
          "https://commons.wikimedia.org/wiki/File:US_Navy_020813-N-3235P-532_A_Navy_family_unloads_their_shopping_cart_while_purchasing_groceries_at_the_Navy_Commissary_located_just_outside_Naval_Air_Station_Oceana.jpg",
        foco: "55% 45%",
        alt: "Cajero pasando la compra por el lector de una caja de supermercado, con la pantalla encendida al lado.",
      },
      {
        archivo: "SPAR kolonial mat varehandel hyller (Supermarket interior GROCERY store aisle shelves) Frokostblandinger gryn müsli Axa frukt energi 4-korn blåbær (cereals muesli) etc Tjøme NORWAY 2023-08-31 IMG 1095.jpg",
        autor: "Estantes de un supermercado noruego, con las etiquetas de precio en el canto de la balda.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:SPAR_kolonial_mat_varehandel_hyller_(Supermarket_interior_GROCERY_store_aisle_shelves)_Frokostblandinger_gryn_m%C3%BCsli_Axa_frukt_energi_4-korn_bl%C3%A5b%C3%A6r_(cereals_muesli)_etc_Tj%C3%B8me_NORWAY_2023-08-31_IMG_1095.jpg",
        foco: "50% 50%",
        alt: "Baldas de supermercado llenas de paquetes, con etiquetas de precio pequeñas en el borde de cada estante.",
      },
      {
        archivo: "Mackerel in tomato sauce, etc., product aisle-shop shelves in Meny Supermarket, Bergen Storsenter Shopping Mall, Bergen, Norway, 2017-10-23.jpg",
        autor: "Otro pasillo de supermercado, con el producto ordenado por códigos que no se ven.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Mackerel_in_tomato_sauce,_etc.,_product_aisle-shop_shelves_in_Meny_Supermarket,_Bergen_Storsenter_Shopping_Mall,_Bergen,_Norway,_2017-10-23.jpg",
        foco: "50% 50%",
        alt: "Estanterías de conservas alineadas en un supermercado, vistas de frente.",
      },
      {
        archivo: "Dishbrushes (Jordan oppvaskbørster), Coop Extra supermarket, shop shelves, Bergen, Norway 2017-10-25.jpg",
        autor: "Cepillos colgados en el expositor de una tienda, cada uno con su etiqueta.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Dishbrushes_(Jordan_oppvaskb%C3%B8rster),_Coop_Extra_supermarket,_shop_shelves,_Bergen,_Norway_2017-10-25.jpg",
        foco: "50% 50%",
        alt: "Cepillos de fregar colgados en fila de un expositor metálico de supermercado.",
      },
    ],
    entrada:
      "Cualquier supermercado del mundo desde que el sistema se generalizó, a finales de los años setenta. Casi todo el mundo da por hecho que esas rayas negras contienen el precio del producto, y no es así en absoluto. Lo único que llevan es un número de trece cifras que identifica al fabricante y al artículo concreto, y nada más: ni precio, ni fecha, ni peso. El precio vive en la base de datos de cada tienda, asociado a ese número, y por eso el mismo código cuesta una cosa aquí y otra a diez calles.",
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
    titulo: "Las rayas cambiaron el estante",
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
