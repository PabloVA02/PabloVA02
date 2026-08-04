import type { Short } from "../shorts";

/* ==========================================================================
   Los almacenes.

   La parte del comercio que nadie ve y que decide el precio de todo. El
   tema se estropea si se convierte en elogio o en denuncia de una empresa
   concreta.

   La regla del tema: cada short da UNA CIFRA QUE MANDA (la medida del
   palé, los pasos de un operario, el coste del último kilómetro) y explica
   qué se organiza alrededor de ella. La logística se cuenta como
   geometría y aritmética, no como tecnología.
   ========================================================================== */

export const ALMACENES: Short[] = [
  {
    id: "el-pale",
    titulo: "El palé decidió el tamaño de medio mundo",
    gancho: "Una plataforma de madera que nadie mira fija el ancho de un camión, de un contenedor y de una estantería.",
    categoria: "Empresas",
    color: "var(--clay)",
    encargo: "Palés de madera apilados en una nave, con las marcas quemadas en los tacos.",
    entrada:
      "Estados Unidos, años cuarenta del siglo XX, durante la Segunda Guerra Mundial. El ejército necesita cargar y descargar barcos a toda velocidad y adopta una plataforma de madera que se mueve con carretilla elevadora. Un estibador tardaba tres días en descargar un barco a mano, y con palés tarda unas horas. Aquella plataforma acabó fijando medidas en toda la cadena de transporte.",
    paginas: [
      {
        rotulo: "La medida",
        texto:
          "El palé europeo mide ochenta por ciento veinte centímetros, y esa cifra no se eligió al azar. Está pensada para que quepan exactamente dos filas a lo ancho de un vagón de tren. A partir de ahí, todo lo demás se ha ido ajustando a esa medida en vez de al revés. El ancho interior de un camión, el de un contenedor y el de una estantería salen de ahí. Y las cajas de cartón se diseñan para llenar un palé sin dejar huecos ni sobresalir. Por eso las botellas de una marca vienen en cajas de doce y no de once ni de trece.",
        destacado: { tipo: "frase", frase: "La caja se diseña para el palé, no el palé para la caja." },
      },
      {
        rotulo: "Ir y volver",
        texto:
          "Un palé cuesta poco y moverlo vacío cuesta casi lo mismo que moverlo lleno. Ese problema se resolvió con un sistema de intercambio que funciona como un depósito de envases. Quien recibe mercancía sobre palés entrega el mismo número de palés vacíos en el momento. Así ninguno viaja de vuelta y todos los que circulan están siempre debajo de algo. Para que eso funcione, los palés tienen que ser idénticos y estar certificados por un organismo. Llevan marcas a fuego en los tacos que dicen quién los hizo y con qué madera tratada.",
        destacado: { tipo: "cifra", cifra: "120", unidad: "centímetros de largo tiene el palé europeo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una unidad invisible que organiza el comercio mundial sin que casi nadie la nombre. Hay cientos de millones circulando por el mundo y se fabrican decenas de millones nuevos cada año. Quedó también un problema sanitario que obligó a cambiar el tratamiento de la madera. Los palés viajan entre países y pueden llevar insectos y hongos dentro de la madera. Desde 2002 una norma internacional obliga a tratarlos con calor o con gas antes de cruzar una frontera. Esas siglas quemadas en el taco que nadie lee certifican justamente ese tratamiento.",
      },
    ],
  },
  {
    id: "el-almacen-desordenado",
    titulo: "Los almacenes modernos guardan las cosas sin orden",
    gancho: "Un libro al lado de una sartén y un juguete encima. Colocarlo todo por categorías sería mucho más lento.",
    categoria: "Empresas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Estantería de almacén con productos completamente dispares en la misma balda.",
    entrada:
      "Almacenes de comercio electrónico, con el sistema documentado desde 1997. Cualquiera imagina un almacén con los productos ordenados por tipo, como una tienda gigante. Los grandes almacenes de reparto funcionan justo al revés, guardando cada cosa en el primer hueco libre que aparezca. El resultado parece un caos y es la manera más rápida de encontrar algo cuando hay que buscarlo.",
    paginas: [
      {
        rotulo: "El hueco libre",
        texto:
          "Guardar por categorías tiene un problema muy evidente en cuanto el almacén empieza a llenarse. Si llegan cien libros y la zona de libros está llena, hay que reorganizar media nave. Colocando cada cosa en el primer hueco libre, el almacén se llena de manera uniforme. El operario escanea el producto, escanea la balda de la estantería y el ordenador anota dónde está. A partir de ese momento la posición existe en el sistema y no hace falta recordarla. Nadie tiene que saber dónde está nada, porque la máquina lo sabe y va guiando.",
        destacado: { tipo: "frase", frase: "Nadie sabe dónde está nada, y la máquina sí." },
      },
      {
        rotulo: "Menos pasos",
        texto:
          "La ventaja de verdad aparece al recoger un pedido, que es lo que más cuesta en un almacén. Un pedido normal lleva cosas de familias distintas, como un cable, un champú y un libro. En un almacén ordenado por categorías, el operario cruzaría la nave entera tres veces. Con las cosas repartidas al azar, casi siempre hay un ejemplar de cada una bastante cerca. El sistema calcula la ruta más corta que pasa por los tres y la muestra en una pantalla. Los productos que más se venden se colocan a propósito en varios sitios distintos de la nave.",
        destacado: { tipo: "cifra", cifra: "1997", unidad: "el año del almacén sin categorías" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un modelo que se ha copiado en casi todo el comercio electrónico del mundo. Quedó también una condición que lo hace posible y que conviene no perder de vista. Todo depende del ordenador, así que un fallo del sistema deja la nave completamente inútil. Sin la base de datos, nadie sería capaz de encontrar un producto concreto entre millones. Y quedó una idea que aparece en muchos sitios cuando hay una máquina llevando la cuenta. El orden deja de hacer falta en el mundo físico porque existe entero en el registro.",
      },
    ],
  },
  {
    id: "el-ultimo-kilometro",
    titulo: "El último kilómetro cuesta media entrega",
    gancho: "Traer un paquete de China a España es barato. Subirlo a un cuarto piso sin ascensor es lo caro.",
    categoria: "Empresas",
    color: "var(--ochre)",
    encargo: "Repartidor con un carro de paquetes en una calle estrecha de casco antiguo.",
    entrada:
      "Ciudades de todo el mundo, con el problema estudiado en serio desde el año 2000. Mover un contenedor desde Asia hasta un puerto europeo cuesta unos céntimos por cada objeto que lleva dentro. Llevar ese mismo objeto desde el almacén de las afueras hasta una puerta concreta cuesta varios euros. Ese último tramo se lleva alrededor de la mitad del coste total del envío.",
    paginas: [
      {
        rotulo: "El cuello",
        texto:
          "Todo lo anterior al último tramo se hace en grande y con mucha carga junta. Un barco lleva veinte mil contenedores y un camión lleva treinta palés por el mismo conductor. En el último kilómetro se rompe esa economía, porque cada paquete va a una dirección distinta. El repartidor aparca, baja, busca el portal, llama, sube y a veces no hay nadie. Ese ciclo dura varios minutos y se repite ciento cincuenta veces en una jornada. Una entrega fallida duplica el coste, porque hay que volver otro día a hacer lo mismo.",
        destacado: { tipo: "frase", frase: "Cada paquete del último tramo va a una puerta distinta." },
      },
      {
        rotulo: "Cómo se ataja",
        texto:
          "Las soluciones que funcionan van todas en la misma dirección, que es juntar entregas otra vez. El punto de recogida es la más eficaz, porque cien paquetes van a una sola dirección. El coste por paquete baja muchísimo, y el cliente pone de su parte yendo a buscarlo. La taquilla automática hace lo mismo y además funciona sin nadie atendiendo a ninguna hora. El almacén urbano pequeño acorta la distancia, aunque el metro cuadrado en ciudad es carísimo. Y la franja horaria elegida por el cliente reduce las entregas fallidas, que es lo que más pesa.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "% del coste está en el último kilómetro" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una presión enorme sobre las ciudades, porque el reparto ocupa la calle todo el día. Muchos ayuntamientos han creado plazas de carga y descarga con reserva por aplicación. Quedó también una vuelta a algo antiguo, porque la bicicleta de carga ha reaparecido en los centros. En un casco histórico estrecho reparte más rápido que una furgoneta y aparca en cualquier sitio. Y quedó una cuenta que explica por qué el envío gratis nunca es gratis del todo. Alguien paga ese último kilómetro, y casi siempre va repartido en el precio del producto.",
      },
    ],
  },
];
