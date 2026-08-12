import type { Short } from "../shorts";

/* ==========================================================================
   La tinta.

   Una mancha de color que en realidad es un encargo técnico muy exigente.
   El tema se estropea si se cuenta como historia de la escritura, que ya
   está en escritura.ts, o como química.

   La regla del tema: cada short empieza por EL ENCARGO QUE TENÍA QUE
   CUMPLIR esa tinta (durar siglos, secar al instante, no poder copiarse) y
   solo después explica de qué está hecha. El defecto siempre viene del
   encargo mismo.
   ========================================================================== */

export const TINTA: Short[] = [
  {
    id: "la-tinta-que-se-come-el-papel",
    titulo: "La tinta que come el papel",
    gancho: "Durante mil cuatrocientos años se escribió en Europa con una tinta ácida. Hoy los archiveros pelean contra los agujeros que va dejando.",
    categoria: "Historia",
    color: "var(--clay)",
    encargo: "Página de manuscrito antiguo con el papel oscurecido y perforado alrededor de las letras.",
    /* Lo escrito, de dónde salía la tinta, lo que la tinta hace ahora y quién
       corre contra ello. Las dos últimas son la misma cosa vista de cerca y de
       lejos: el agujero en una hoja y el archivo entero comido. */
    fotos: [
      {
        archivo: "Page from the 'Garden of knowledge (Viridarium)', a medieval encyclopaedia (CBL W 080, f.13r).jpg",
        autor:
          "Página de una enciclopedia manuscrita entre 1386 y 1425, escrita con esta misma tinta. Biblioteca Chester Beatty, Dublín.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Page_from_the_%27Garden_of_knowledge_(Viridarium)%27,_a_medieval_encyclopaedia_(CBL_W_080,_f.13r).jpg",
        foco: "50% 45%",
        alt: "Una página de pergamino cubierta de letra gótica apretada en tinta marrón, con letras capitulares rojas y un animalillo dibujado al margen.",
      },
      {
        archivo: "Gall from Oak Gall Wasp (Cynips quercusfolii).jpg",
        autor:
          "La agalla que forma un roble alrededor del huevo de una avispa. Machacada y puesta a remojo, suelta lo que hace negra a la tinta. Fotografía de wackybadger, 2013.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Gall_from_Oak_Gall_Wasp_(Cynips_quercusfolii).jpg",
        foco: "55% 45%",
        alt: "Una bola verde y lisa del tamaño de una canica, pegada al envés de una hoja de roble.",
      },
      {
        archivo: "Tintenfraß.jpg",
        autor:
          "Un expediente con el papel comido justo por donde pasaba la escritura. Archivo Regional de Hesse, Alemania, 2010.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Tintenfra%C3%9F.jpg",
        foco: "50% 45%",
        alt: "Dos manos con guantes blancos sostienen un legajo abierto: una mancha oscura ha carcomido el papel hasta abrir un agujero alargado.",
      },
      {
        archivo: "Staatsarchiv Zürich.JPG",
        autor:
          "Un libro de archivo deshecho por el mismo motivo: las hojas se han roto por donde había letra. Archivo del Cantón de Zúrich. Fotografía de Juerg Hug, 2011.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Staatsarchiv_Z%C3%BCrich.JPG",
        foco: "50% 50%",
        alt: "Un libro manuscrito abierto cuyas páginas centrales están rotas en tiras y astillas de papel.",
      },
    ],
    entrada:
      "Europa, del siglo V al XIX. Durante mil cuatrocientos años, casi todo lo que se escribió en el continente se escribió con la misma tinta, hecha con unas bolas que crecen en las hojas del roble. Era negra, barata y no se borraba, que era exactamente lo que hacía falta cuando un documento tenía que aguantar generaciones. Con ella están escritos los evangelios copiados a mano, las cuentas de los reinos y las partituras de Bach. Su defecto tardó siglos en aparecer y hoy no tiene marcha atrás. Esa tinta se está comiendo los documentos desde dentro, letra por letra, y en los archivos hay hojas donde el texto ha caído literalmente al suelo.",
    paginas: [
      {
        rotulo: "Bolas de roble",
        texto:
          "Cuando una avispa pone un huevo en una hoja de roble, el árbol reacciona formando alrededor una bola dura. Esa bola, que se llama agalla, está cargada de unas sustancias amargas con las que la planta se defiende. Machacadas y puestas a remojo sueltan esas sustancias al agua, y ahí se les añade sulfato de hierro. La mezcla es transparente al principio y se vuelve negra en contacto con el aire, ya sobre el papel. Eso la hacía insuperable, porque el color se forma dentro de la fibra en vez de quedarse encima. Raspar la superficie no la quita, y por eso los notarios y los monasterios no usaron ninguna otra.",
        destacado: { tipo: "frase", frase: "Sale transparente y se vuelve negra sobre el papel." },
      },
      {
        rotulo: "El agujero",
        texto:
          "El problema está en el hierro que sobra, porque las recetas antiguas iban a ojo y casi todas se pasaban. Ese hierro suelto reacciona con la humedad del aire y produce ácido sulfúrico en cantidades diminutas. El ácido va rompiendo las fibras de celulosa del papel justo debajo de cada trazo, durante siglos y sin ruido. Primero el papel se pone marrón alrededor de la letra, después se vuelve quebradizo y al final se cae. En los casos peores la hoja queda perforada exactamente con la forma del texto, como un sello recortado. Está pasando ahora mismo en archivos de media Europa, y lo llaman corrosión por tinta ferrogálica.",
        destacado: { tipo: "cifra", cifra: "1.400", unidad: "años se escribió con la misma receta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una carrera contra el reloj en la que trabajan químicos y restauradores de todo el continente. El tratamiento actual consiste en bañar el documento en una solución que neutraliza el ácido y atrapa el hierro sobrante. No devuelve lo perdido, así que la otra mitad del trabajo es digitalizar antes de que la hoja se rompa. Quedó también una ironía difícil de mejorar, porque la tinta se eligió precisamente por ser la más duradera de todas. Y lo era: aguanta el agua, la luz y el raspado, y lo único que no aguanta es el papel donde está escrita.",
      },
    ],
  },
  {
    id: "la-tinta-del-boligrafo",
    titulo: "La bola pide tinta espesa",
    gancho: "La pluma escribe con tinta líquida que corre sola por el plumín. Una bola que gira necesita algo mucho más espeso.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Punta de bolígrafo ampliada muchísimo, con la bola metálica en su casquillo.",
    fotos: [
      {
        archivo: "Ballpoint Macro.jpg",
        autor: "La punta de un bolígrafo ampliada, con la bola de acero encajada en el casquillo de latón. Fotografía de Prosthetic Head.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ballpoint_Macro.jpg",
        foco: "50% 45%",
        alt: "Macro de una punta de bolígrafo: un cono dorado con una bolita metálica manchada de tinta en el extremo.",
      },
      {
        archivo: "Inkwell, portable (AM 72195-5).jpg",
        autor: "Tintero portátil del siglo XIX. Auckland War Memorial Museum.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Inkwell,_portable_(AM_72195-5).jpg",
        foco: "50% 50%",
        alt: "Un frasco pequeño de tinta con tapa de rosca metálica, sobre fondo claro.",
      },
      {
        archivo: "Portable Inkwell Initialled \"D.M.W. (48708729353).jpg",
        autor: "Otro tintero de viaje, con las iniciales de su dueño grabadas. Auckland Museum.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Portable_Inkwell_Initialled_%22D.M.W._(48708729353).jpg",
        foco: "50% 45%",
        alt: "Un tintero de bolsillo cilíndrico con la tapa abierta y unas letras marcadas en el metal.",
      },
      {
        archivo: "Sign here (Unsplash).jpg",
        autor: "Un bolígrafo apoyado sobre unos papeles pendientes de firma.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sign_here_(Unsplash).jpg",
        foco: "50% 50%",
        alt: "Un bolígrafo colocado encima de unas hojas sobre una mesa, con luz suave.",
      },
    ],
    entrada:
      "Hungría y Argentina, entre 1938 y 1943. Un periodista se harta de que la pluma le manche los dedos, le rompa el papel y le obligue a llevar secante encima, y se fija en la tinta que usan las imprentas del periódico, que seca prácticamente en cuanto toca el papel. El problema es que esa tinta es espesa como una pasta y no baja por ningún plumín por mucho que se ensanche la ranura. La solución no estuvo en la tinta sino en cambiar la punta entera: una bolita de acero que gira y va untando.",
    paginas: [
      {
        rotulo: "La bola",
        texto:
          "La punta de un bolígrafo es una esfera de menos de un milímetro alojada en un casquillo de latón. Encaja con una holgura de milésimas de milímetro, lo justo para girar libre y no dejar escapar la tinta. Al arrastrarla sobre el papel, la bola rueda y va sacando del depósito una capa finísima que deja pegada. Fabricar millones de esferas idénticas era el verdadero obstáculo, y por eso el invento tardó décadas en funcionar bien. Hoy se hacen de carburo de tungsteno, más duro que el acero y sin desgaste apreciable. Un solo país fabrica la mayoría de las bolas del mundo, y cuestan menos de un céntimo cada una.",
        destacado: { tipo: "frase", frase: "La bola encaja con holgura de milésimas de milímetro." },
      },
      {
        rotulo: "Tinta espesa",
        texto:
          "La tinta de un bolígrafo no se parece en nada a la de una pluma, y ese es el motor del invento. Es una pasta grasa hecha con colorante disuelto en aceite, y su textura recuerda más a la miel que al agua. Ese espesor evita que gotee y hace posible que el depósito sea un simple tubito sin válvula ninguna. También impone su límite conocido, porque hace falta apretar y el trazo se corta si se escribe muy deprisa. Boca arriba deja de escribir, ya que la tinta baja por gravedad y no por capilaridad. Resolver eso costó un depósito presurizado con nitrógeno, que es el que se llevaron los astronautas.",
        destacado: { tipo: "cifra", cifra: "1943", unidad: "el año de la patente que funcionó" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el objeto manufacturado más vendido de la historia, con miles de millones fabricados cada año. Quedó también un cambio en la escritura a mano, porque la pluma pide inclinación y presión variable y el bolígrafo no. La letra se volvió más uniforme y más rápida, y varias escuelas dejaron de enseñar caligrafía por ese motivo. Quedó un problema para los archivos contrario al de la tinta antigua, porque muchas tintas de bolígrafo se van con la luz. Los notarios siguen exigiendo tinta indeleble por eso, y una firma en bolígrafo azul barato puede desaparecer en veinte años.",
      },
    ],
  },
  {
    id: "la-tinta-de-los-billetes",
    titulo: "Tinta que cambia de color",
    gancho: "No es un truco del papel. Son escamas metálicas que devuelven un color distinto según el ángulo desde el que se miran.",
    categoria: "Tecnología",
    color: "var(--plum)",
    curioso: true,
    encargo: "Billete inclinado en dos posiciones, con la cifra en verde y en azul.",
    entrada:
      "Bancos centrales de todo el mundo, con la tecnología en circulación desde 1987. Un billete moderno lleva más de una docena de defensas contra la falsificación, y una de las más visibles no está en el papel, sino en la tinta. Basta inclinar el billete para que un número cambie de verde a azul. Detrás de ese efecto hay capas de metal más finas que un pelo.",
    paginas: [
      {
        rotulo: "Capas finísimas",
        texto:
          "El color de un objeto normal depende de qué luz absorbe su superficie y cuál devuelve. Hay otra manera de producir color, que es la que usan las plumas del pavo real y las pompas de jabón. Cuando la luz rebota en dos superficies muy juntas, las dos ondas reflejadas se suman o se anulan según el grosor. Unos colores se refuerzan y otros desaparecen, así que el ojo ve un color que no está en ningún pigmento. La tinta del billete lleva escamas microscópicas formadas por varias capas metálicas superpuestas con ese grosor exacto. Al inclinar el billete cambia el camino de la luz dentro de la escama, y con él cambia el color.",
        destacado: { tipo: "frase", frase: "El color no está en el pigmento: está en el grosor." },
      },
      {
        rotulo: "Por qué funciona",
        texto:
          "Esa defensa se eligió porque es imposible de copiar con los aparatos que tiene un falsificador. Una fotocopiadora o una impresora captan el billete desde un solo ángulo y solo pueden reproducir ese. La copia sale con el número de un color fijo, y basta inclinarla para que el fallo salte a la vista. Fabricar la tinta requiere además equipos de vacío que depositan metal capa a capa, y esos equipos están controlados. Los pocos fabricantes que existen venden solo a bancos centrales y llevan un registro de cada kilo. Es una defensa que no necesita ninguna máquina para comprobarse, y ese detalle es el que la hace útil en un mostrador.",
        destacado: { tipo: "cifra", cifra: "1987", unidad: "el año de la primera tinta que cambia" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una carrera permanente entre bancos centrales y falsificadores en la que cada serie de billetes añade defensas. Quedaron también otros usos para la misma tinta, en pasaportes, en etiquetas de medicamentos y en piezas de recambio caras. Y quedó una idea que recorre este tema entero, porque las tres tintas contadas resuelven problemas distintos y hacen lo mismo. Una tenía que durar siglos, otra tenía que secar al instante y la tercera tiene que ser imposible de imitar. Ninguna de las tres es solo color: cada una es un encargo técnico disfrazado de mancha negra o azul.",
      },
    ],
  },
];
