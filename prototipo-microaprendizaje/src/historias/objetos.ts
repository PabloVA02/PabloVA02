import type { Short } from "../shorts";

/* ==========================================================================
   Objetos.

   Cosas que hay en cualquier casa. Es el tema con el gancho más barato del
   muro y hay que gastarlo bien: basta nombrar el objeto para que el lector ya
   esté dentro, porque lo tiene a metro y medio.

   La regla del tema: el objeto de hoy es la versión que ganó, y ganar
   significa que hubo pelea. Se cuenta contra qué compitió, cuántos años tardó
   en imponerse y qué detalle suyo, que parece obvio, costó décadas de
   ensayos. Un objeto cotidiano es un problema resuelto tantas veces que ya no
   se nota que era un problema.

   Si el nombre miente —los lápices no llevan plomo—, la mentira es la
   historia, y se cuenta de dónde salió el nombre equivocado.
   ========================================================================== */

export const OBJETOS: Short[] = [
  {
    id: "codigo-barras",
    titulo: "Dibujado en la arena",
    gancho: "Un estudiante trazó puntos y rayas de morse en la playa y los estiró hacia abajo.",
    categoria: "Objetos",
    color: "var(--ochre)",
    encargo: "Un código de barras impreso muy ampliado, en blanco y negro, casi abstracto.",
    fotos: [
      {
        archivo: "Morse key-CNAM 14674-2-IMG 5195-black.jpg",
        autor: "Manipulador de telégrafo morse conservado en el Musée des arts et métiers de París. Fotografía de Rama.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Morse_key-CNAM_14674-2-IMG_5195-black.jpg",
        foco: "50% 55%",
        alt: "Una palanca de latón con pomo negro montada sobre una peana de caoba, iluminada sobre fondo negro.",
      },
      {
        archivo: "退潮后的潮间带长出河川般的潮沟.jpg",
        autor: "Surcos dejados por el agua en la arena de una playa de Xiamen al bajar la marea.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:%E9%80%80%E6%BD%AE%E5%90%8E%E7%9A%84%E6%BD%AE%E9%97%B4%E5%B8%A6%E9%95%BF%E5%87%BA%E6%B2%B3%E5%B7%9D%E8%88%AC%E7%9A%84%E6%BD%AE%E6%B2%9F.jpg",
        foco: "50% 50%",
        alt: "Decenas de canalillos finos y paralelos abiertos en la arena mojada, con agua corriendo por dentro.",
      },
      {
        archivo: "Laser DSC09088.JPG",
        autor: "Demostración de un láser de helio-neón en el laboratorio Kastler-Brossel de París. Fotografía de David Monniaux.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Laser_DSC09088.JPG",
        foco: "50% 50%",
        alt: "Un tubo de descarga encendido en naranja sobre un banco óptico, con un punto rojo marcado en una pantalla.",
      },
      {
        archivo: "Super Associated East Harlem 1968 2nd Av 101 St jeh.jpg",
        autor: "Pasillo de verduras de un supermercado de East Harlem, Nueva York. Fotografía de Jim Henderson.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Super_Associated_East_Harlem_1968_2nd_Av_101_St_jeh.jpg",
        foco: "50% 50%",
        alt: "Un pasillo de supermercado con cajas de fruta y verdura apiladas a los dos lados bajo luz de fluorescente.",
      },
    ],
    entrada:
      "Miami Beach, finales de los años cuarenta. Norman Joseph Woodland, un estudiante de posgrado, está sentado en la arena de la playa dándole vueltas a un encargo que le han hecho y que parece imposible: encontrar la manera de que una máquina lea automáticamente el precio de un producto al pasar por la caja de un supermercado. Se sabía el código morse de memoria desde los boy scouts. Casi sin pensarlo metió los cuatro dedos en la arena mojada y trazó una serie de puntos y rayas delante de él.",
    paginas: [
      {
        rotulo: "El gesto",
        texto:
          "Al mirar los surcos se le ocurrió estirarlos: tirar de los puntos y las rayas hacia abajo hasta convertirlos en líneas finas y gruesas. Eso era un código morse que una máquina podía leer con luz en vez de con oído. Woodland y su compañero Bernard Silver presentaron la patente en 1949 y se la concedieron en <strong>1952</strong>. Su primer prototipo no eran barras rectas sino círculos concéntricos, como una diana, para poder leerlo desde cualquier ángulo. Funcionaba con una bombilla de proyector de cine de quinientos vatios y un tubo fotomultiplicador, y calentaba tanto que llegó a chamuscar el papel.",
        destacado: { tipo: "cifra", cifra: "1952", unidad: "la patente; el primer escaneo, en 1974" },
      },
      {
        rotulo: "Los veinte años",
        texto:
          "El invento se quedó guardado dos décadas porque le faltaban dos cosas que aún no existían: un lector barato —hizo falta el láser— y, sobre todo, un acuerdo. De nada sirve un código si cada cadena de supermercados usa el suyo, así que la parte difícil no fue técnica sino diplomática: convencer a fabricantes y distribuidores de que adoptaran el mismo formato. El comité que lo consiguió eligió en 1973 el diseño de IBM, con las barras rectas, y el sistema arrancó de verdad. Silver había muerto en 1963, a los treinta y ocho años, sin ver nada de aquello.",
        destacado: {
          tipo: "frase",
          frase: "Lo difícil no fue inventarlo. Fue que todos usaran el mismo.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El primer producto escaneado en una tienda real fue un paquete de diez chicles Wrigley's Juicy Fruit, el 26 de junio de 1974, en un supermercado de Troy, Ohio. Se eligió un paquete pequeño a propósito, para demostrar que el código cabía hasta en un envase minúsculo. Aquel paquete de chicles se conserva en el Smithsonian. Woodland recibió la Medalla Nacional de Tecnología en 1992, cuarenta años después de la patente, y solía recordar que su invento más famoso empezó con los dedos metidos en la arena de una playa.",
      },
    ],
  },

  {
    id: "cremallera-tardanza",
    titulo: "Cuarenta años sin gustarle a nadie",
    gancho: "Se presentó en una Exposición Universal y no vendió casi nada durante décadas.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Una cremallera metálica abierta a medias, muy de cerca, dientes nítidos.",
    entrada:
      "En la Exposición Universal de Chicago de 1893, un ingeniero llamado Whitcomb Judson presentó un cierre para botas al que llamó <em>clasp locker</em>. Los visitantes lo miraron con curiosidad y no lo compró casi nadie. El aparato se atascaba, se abría solo en el peor momento y era carísimo. Tenía casi todo lo que hace falta para fracasar, y fracasó durante veinte años.",
    paginas: [
      {
        rotulo: "El arreglo",
        texto:
          "El problema era el diseño: los dientes eran ganchos y ojales que se enganchaban de lado, y bastaba un tirón torcido para que saltaran. Un ingeniero sueco emigrado, Gideon Sundback, se pasó años rehaciéndolo desde cero. Su solución, patentada en 1917, cambió los ganchos por dientes con una cavidad en la cara de abajo y una protuberancia en la de arriba, de modo que cada diente encaja en el hueco del de enfrente al pasar la corredera. Ese es el mecanismo exacto que se sigue usando hoy, sin cambios de fondo, en miles de millones de unidades al año.",
        destacado: {
          tipo: "frase",
          frase: "Sundback no mejoró la cremallera: la volvió a inventar entera.",
        },
      },
      {
        rotulo: "El nombre",
        texto:
          "Seguía sin venderse en ropa. Los primeros clientes fueron el ejército estadounidense, para uniformes y bolsas de la Primera Guerra Mundial, y una empresa de calzado. En <strong>1923</strong>, la marca de neumáticos B.F. Goodrich la puso en unas botas de agua y le buscó un nombre comercial que sonara al ruido que hacía: <em>zipper</em>. El nombre triunfó mucho antes que el objeto. La moda tardó todavía otra década: hasta los años treinta, la industria textil desconfiaba de un cierre metálico, y solo entró de verdad cuando los diseñadores de París empezaron a exhibirlo en vez de esconderlo.",
        destacado: { tipo: "cifra", cifra: "1893 → 1930", unidad: "de la feria a la ropa de calle" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La resistencia inicial en la ropa de caballero tuvo además un componente moral: se discutió públicamente que un cierre tan rápido facilitaba la indecencia, y algunos manuales de conducta lo desaconsejaron por ese motivo. Hoy casi todas las cremalleras del mundo salen de un puñado de fabricantes, y la letra pequeña está a la vista de cualquiera: en la corredera de la mayoría de los pantalones hay tres letras grabadas, YKK, las iniciales de la empresa japonesa que las hace. Es probablemente la marca más vista y menos leída del planeta.",
      },
    ],
  },

  {
    id: "lapices-sin-plomo",
    titulo: "Los lápices nunca han llevado plomo",
    gancho: "Es grafito, y el nombre equivocado viene de una confusión del siglo XVI.",
    categoria: "Objetos",
    color: "var(--sage)",
    curioso: true,
    encargo: "La punta de un lápiz recién afilado, muy ampliada, virutas alrededor.",
    entrada:
      "Se dice «la mina de plomo» del lápiz y en varios idiomas la palabra para la mina es directamente plomo. Nunca ha habido plomo dentro. Lo que hay es grafito, una forma del carbono, y el malentendido viene de un yacimiento inglés del siglo XVI y de unos mineros que llamaron a aquella piedra negra lo primero que se les ocurrió.",
    paginas: [
      {
        rotulo: "Borrowdale",
        texto:
          "Hacia 1564, una tormenta derribó árboles en Borrowdale, en el norte de Inglaterra, y dejó al descubierto una masa de material negro, blando y brillante que manchaba las manos y marcaba el papel. Era grafito casi puro, y sigue siendo el único yacimiento de grafito sólido de esa pureza encontrado nunca. Los mineros lo llamaron <em>plumbago</em>, «lo parecido al plomo», porque a la vista y al tacto se le daba un aire. De ahí sale el nombre equivocado, que se ha quedado en medio mundo aunque la química no tenga nada que ver.",
        destacado: {
          tipo: "frase",
          frase: "Se llamó «como el plomo» y cuatro siglos después seguimos diciéndolo.",
        },
      },
      {
        rotulo: "La receta",
        texto:
          "Aquel grafito era tan valioso que la corona inglesa controló la mina con guardia armada y la inundaba a propósito entre extracciones para evitar el robo. Cuando las guerras napoleónicas cortaron el suministro a Francia, un ingeniero llamado Nicolas-Jacques Conté resolvió el problema en <strong>1795</strong> con la idea que aún se usa: moler grafito, mezclarlo con arcilla, prensarlo y cocerlo. La proporción de arcilla decide la dureza, y por eso un lápiz lleva escrito HB, 2B o 4H. Antes de eso, la dureza dependía de qué trozo de piedra te hubiera tocado.",
        destacado: { tipo: "cifra", cifra: "1795", unidad: "la mezcla de grafito y arcilla" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "La forma hexagonal, que parece un capricho, resuelve dos cosas a la vez: no rueda si se deja en una mesa inclinada y aprovecha mejor la madera al cortar los listones, porque encajan sin desperdicio. Un lápiz normal traza en torno a cincuenta kilómetros de línea antes de gastarse. Y el grafito, la misma sustancia con la que se hacen los deberes, resultó ser una de las estrellas de la física del siglo XXI: separando una sola capa de átomos de un trozo de grafito con cinta adhesiva se obtiene grafeno, y ese experimento ganó el Nobel en 2010.",
      },
    ],
  },
];
