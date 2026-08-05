import type { Short } from "../shorts";

/* ==========================================================================
   Las postales.

   Correo barato y descubierto. Ese es el asunto: una tarjeta que cuesta la
   mitad porque no lleva sobre, y que por eso puede leer cualquiera. El tema
   se estropea si se cuenta como nostalgia de vacaciones.

   La regla del tema: siempre el precio comparado con el de una carta, y
   siempre el numero de repartos diarios, que es lo que explica por que la
   gente escribia frases de dos lineas. Cuando aparece una tecnica de
   imprenta, se dice EN PALABRAS LLANAS en que consiste (una piedra plana,
   un color por piedra) antes de nombrarla, nunca despues.
   ========================================================================== */

export const POSTALES: Short[] = [
  {
    id: "la-carta-sin-sobre",
    titulo: "La postal nació sin sobre",
    gancho: "Un funcionario austriaco propuso en 1869 una tarjeta sin sobre y a mitad de precio. La objeción fue que el cartero podría leerla.",
    categoria: "Postales",
    color: "var(--ochre)",
    encargo: "Una tarjeta de cartulina amarillenta con el sello impreso en la esquina y sin sobre.",
    entrada:
      "Imperio austrohúngaro, 1869. Mandar una carta es caro porque el correo cobra según lo que pesa el envío, y el sobre y las hojas dobladas dentro suman bastante. Un profesor de economía propone entonces algo elemental: una cartulina rígida, del tamaño de la palma de la mano, que viaje desnuda y sin sobre. Se escribe por una cara, la dirección va en la otra y cuesta la mitad.",
    paginas: [
      {
        rotulo: "La objeción",
        texto:
          "La idea tenía en contra un argumento serio, que hoy suena muy moderno. Una tarjeta sin sobre puede leerla cualquiera que la tenga en la mano. La lee el empleado que la clasifica, la lee el cartero y la lee quien la recoja en el portal. Los partidarios contestaron que nadie está obligado a contar intimidades en ella: se escribe lo que uno diría en voz alta delante de un vecino. El correo austriaco aceptó y puso la tarjeta a la venta en octubre de 1869, a mitad del precio de una carta. En tres meses se vendieron casi tres millones, y en dos años media Europa había copiado el invento.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "millones vendidos en los tres primeros meses" },
      },
      {
        rotulo: "El reparto",
        texto:
          "La tarjeta se volvió tan barata que la gente empezó a usarla como hoy se usa un mensaje de móvil. Para eso hacía falta algo que ninguna ciudad tiene ya: el cartero pasaba varias veces al día. En las capitales grandes había cinco o seis repartos diarios, y en alguna llegaron a ser doce. Eso permitía escribir por la mañana para quedar por la tarde y tener la respuesta antes de cenar. Por eso las postales de aquellos años están llenas de frases sueltas, sin saludo ni despedida. Lo que acabó con esa costumbre fue el teléfono, cuando llegó a las casas corrientes.",
        destacado: { tipo: "frase", frase: "En algunas ciudades el cartero pasaba doce veces al día." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el formato exacto: lo escrito a un lado, la dirección al otro, que es el de cualquier postal de hoy. Quedó la norma de poner en ella solo lo que no importa que lea un desconocido, sin que nadie la enseñe. Quedaron millones de tarjetas en cajas de anticuario, que los historiadores usan para saber cómo hablaba la gente. Son de las pocas cosas escritas por personas que no escribieron nada más en toda su vida. Y quedó algo que se ha repetido con cada invento de comunicación posterior. Cuando hablar a distancia se abarata mucho, no se dicen las mismas cosas más veces: se dicen cosas que antes no merecían una carta.",
      },
    ],
  },
  {
    id: "la-raya-del-reverso",
    titulo: "La raya de la postal",
    gancho: "Al principio la foto ocupaba toda una cara y el mensaje se escribía en los márgenes. La raya del medio lo arregló.",
    categoria: "Postales",
    color: "var(--slate)",
    curioso: true,
    encargo: "El reverso de una postal antigua con una raya vertical impresa en el centro.",
    entrada:
      "Europa, hacia 1900. La postal lleva treinta años circulando como correo barato, y las imprentas ya saben pasar una fotografía a la cartulina. Y con ella aparece un problema de sitio que no tiene salida. Una cara la ocupa entera la dirección, porque el correo lo exige, y la otra se la come la fotografía. Al que escribe no le queda ni un hueco para el mensaje.",
    paginas: [
      {
        rotulo: "Los márgenes",
        texto:
          "Durante unos años la gente escribió donde pudo, y las postales de entonces lo enseñan a la primera ojeada. Hay mensajes escritos en el cielo de la fotografía, alrededor del marco, en diagonal sobre una montaña. Las imprentas empezaron a dejar un borde blanco a propósito, quitándole tamaño a la imagen para que cupiera la letra. No contentaba a nadie: quien escribía no tenía sitio y quien la recibía veía la foto emborronada. La norma que lo provocaba todo era sencilla y la ponía la oficina de correos de cada país. La cara de la dirección tenía que ir limpia, para que el empleado viera de un vistazo adónde iba la tarjeta.",
        destacado: { tipo: "frase", frase: "Se escribía en el cielo de la foto, en diagonal." },
      },
      {
        rotulo: "La raya",
        texto:
          "La solución la autorizó el correo británico en 1902 y es una simple raya vertical impresa en el reverso. A la derecha de la raya va la dirección; a la izquierda, todo el mensaje que quepa. El empleado sigue teniendo su mitad limpia y quien escribe gana un espacio que antes no existía. La fotografía se quedó sola en la otra cara y pudo ocuparla entera, sin bordes ni recortes. En cinco años lo adoptaron los demás países, porque el correo entre países obliga a que todos hagan lo mismo. Desde entonces no hay una sola postal en el mundo impresa de otra manera.",
        destacado: { tipo: "cifra", cifra: "1902", unidad: "el año del reverso partido" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la raya, impresa todavía en cualquier postal que se compre hoy en un quiosco. Quedó el reparto que impuso: la mitad para lo que se dice y la mitad para adónde va. Los años anteriores a la Primera Guerra Mundial fueron el momento de más postales de la historia. Circulaban miles de millones al año con vistas de ciudades, de puentes y de estaciones recién construidas. Era la manera de enseñarle a alguien un sitio, en una época sin revistas ilustradas baratas ni cine. Y quedó una lección de diseño: el sitio para escribir hay que decidirlo antes, porque después no se puede añadir.",
      },
    ],
  },
  {
    id: "aquellos-colores-pintados",
    titulo: "Postales pintadas a mano",
    gancho: "La fotografía en color no existía todavía. El cielo azul y los tejados rojos los ponía a mano un taller con pinceles.",
    categoria: "Postales",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una mesa de taller con una postal en blanco y negro y pinceles finos de colores.",
    entrada:
      "Suiza, finales del siglo XIX. Los primeros trenes de montaña y los grandes hoteles han traído un turismo que quiere llevarse una imagen del sitio, y la postal con vista responde a esa demanda. Pero la fotografía en color todavía no existe en las tiendas y no llegará hasta bien entrado el siglo XX. Así que aquellas vistas de colores que circulan por Europa no son fotografías en color.",
    paginas: [
      {
        rotulo: "El taller",
        texto:
          "Se partía de una fotografía normal, en blanco y negro, tomada con una cámara de placa de cristal. Esa foto se pasaba a varias piedras planas de caliza, que es como se imprimía entonces en color. Cada piedra daba un solo color, así que hacía falta una para el azul, otra para el verde y así. Un operario raspaba a mano sobre cada piedra las zonas que debían llevar ese color, guiándose por notas del fotógrafo. Una vista corriente necesitaba entre seis y quince piedras, y todas tenían que encajar sin desviarse un milímetro. Un fallo de encaje sacaba el azul del cielo por encima de la montaña y estropeaba la tirada entera.",
        destacado: { tipo: "cifra", cifra: "15", unidad: "piedras de imprimir para una sola vista" },
      },
      {
        rotulo: "Los colores",
        texto:
          "El color de aquellas postales no es el que tenía el sitio, sino el que alguien decidió que debía tener. Los cielos salen de un azul parejo aunque el día estuviera nublado, porque un cielo gris no vende. La hierba sale de un verde igual en todas partes y el agua, de un turquesa que ningún lago tiene. Los talleres trabajaban además con juegos de color fijos, y así dos pueblos distintos acababan con el mismo tejado. Los historiadores que usan estas postales para saber cómo era una ciudad tienen que contar con eso. La forma de los edificios es fiel, porque viene de una foto; el color se lo puso un taller.",
        destacado: { tipo: "frase", frase: "El cielo salía azul aunque el día estuviera nublado." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron cientos de miles de vistas de todo el mundo, impresas entre finales del siglo XIX y la Primera Guerra Mundial. Varias bibliotecas las han escaneado, y hoy son una de las mejores colecciones de imágenes de ciudades de aquella época. Quedó la costumbre que fundaron, que es comprarse el recuerdo de un sitio en forma de imagen. El teléfono con cámara la ha heredado entera, con la diferencia de que ahora la foto la hace uno mismo. Y quedó el aviso que dejan aquellos talleres de piedra. Una imagen no es más verdadera por tener color: alguien eligió ese color, antes con un pincel y hoy con un ajuste automático.",
      },
    ],
  },
];
