import type { Short } from "../shorts";

/* ==========================================================================
   Las llaves.

   Un trozo de metal dentado que abre una puerta y cierra otra, y del que casi
   nadie ha pensado nunca cómo funciona por dentro. El tema se estropea si se
   convierte en un catálogo de mecanismos, así que aquí manda otra cosa.

   La regla del tema: cada short cuenta una CONFIANZA. Una cerradura no es un
   problema de metal, es una promesa: esto no se puede abrir. Y las promesas
   se rompen, se demuestran en público o se convierten en ceremonia. Siempre
   se explica el mecanismo con las manos, describiendo qué sube y qué gira.
   ========================================================================== */

export const LLAVES: Short[] = [
  {
    id: "cerradura-del-escaparate",
    titulo: "Una cerradura estuvo sin abrirse sesenta y siete años",
    gancho: "Colgaba en un escaparate con un premio al lado. Nadie la abrió hasta que llegó un cerrajero con paciencia.",
    categoria: "Llaves",
    color: "var(--slate)",
    encargo: "Una cerradura de latón antigua colgada en un escaparate con un cartel escrito a mano.",
    entrada:
      "Londres, 1790. Un fabricante de cerraduras coloca una en el escaparate de su tienda con un cartel que promete doscientas guineas —varios años de sueldo de un artesano— a quien consiga abrirla con cualquier herramienta que no sea su llave. No es una bravata de comerciante: la cerradura es realmente distinta de todo lo que existe y él lo sabe.",
    paginas: [
      {
        rotulo: "Los cilindros que bajan",
        texto:
          "Las cerraduras corrientes de la época funcionaban con una palanca que había que levantar a la altura exacta, y un ladrón con habilidad podía tantearlas de una en una. Aquella era otra cosa: la llave era un tubo hueco con muescas en el borde, y al meterla empujaba hacia dentro un puñado de cilindros metálicos, cada uno hasta una profundidad distinta. Solo cuando todos quedaban a la altura correcta a la vez podía girar la pieza que abre. Tantear uno estropeaba la posición de los demás, así que había que acertar con todos al mismo tiempo o no había forma.",
        destacado: { tipo: "frase", frase: "Tantear un cilindro estropeaba la posición de los otros." },
      },
      {
        rotulo: "Dieciséis días",
        texto:
          "La cerradura pasó ahí sesenta y un años, viendo desfilar a curiosos y a cerrajeros. En 1851, durante la gran exposición universal, un cerrajero americano que ya había abierto en público otras cerraduras famosas aceptó el reto delante de un jurado. Se encerró con ella y trabajó cincuenta y una horas repartidas en dieciséis días, con herramientas que él mismo fue fabricando a medida sobre la marcha. Al final la abrió y cobró el premio. La empresa pagó sin rechistar y alegó, con razón, que un ladrón no dispone de dieciséis días a solas con una puerta.",
        destacado: { tipo: "cifra", cifra: "51", unidad: "horas repartidas en dieciséis días" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la cerradura, que sigue expuesta y que la empresa fabrica todavía dos siglos después con el mismo principio de cilindros. Y quedó, sobre todo, una idea que hoy es el fundamento de la seguridad informática: una cerradura no es inviolable, es cara de violar, y lo único que se puede prometer es cuánto tiempo y cuánto dinero le costará a quien lo intente. Aquel desafío del escaparate se considera el primer concurso público de seguridad de la historia, el bisabuelo de los premios que las empresas pagan hoy a quien encuentra un fallo en sus programas.",
      },
    ],
  },

  {
    id: "cerradura-de-madera",
    titulo: "Tu cerradura se inventó hace tres mil años",
    gancho: "Era de madera, pesaba lo suyo y funcionaba exactamente igual que la de acero de hoy.",
    categoria: "Llaves",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una cerradura grande de madera oscura con pasadores verticales, sobre una puerta de tablas.",
    entrada:
      "Mesopotamia, hace unos tres mil años. En las ruinas de un palacio del norte aparecieron restos y representaciones de un mecanismo que los arqueólogos tardaron en reconocer porque no esperaban encontrarlo tan pronto: una cerradura de pasadores, hecha enteramente de madera, con una llave del tamaño de un antebrazo que se llevaba al hombro.",
    paginas: [
      {
        rotulo: "Los palitos que caen",
        texto:
          "El mecanismo cabe en un dibujo. Una barra de madera corre por dentro de la puerta para trancarla. Encima hay unos agujeros verticales por los que caen unos pasadores, unos palitos que se meten en huecos de la barra y le impiden moverse: la gravedad los baja sola y así queda cerrada. La llave es una tabla con dientes colocados a las mismas distancias que los agujeros; se introduce por un hueco horizontal, se levanta, cada diente empuja su pasador hacia arriba justo lo suficiente para liberar la barra, y entonces la barra se desliza y la puerta se abre.",
        destacado: { tipo: "frase", frase: "Los pasadores caen solos: cierra la gravedad." },
      },
      {
        rotulo: "Lo mismo, en metal",
        texto:
          "Ese es, palabra por palabra, el funcionamiento de la cerradura que hay ahora mismo en la puerta de casa. Un cilindro moderno tiene cinco o seis pasadores partidos en dos trozos, empujados hacia abajo por muelles en lugar de por su propio peso; los dientes de la llave los levantan hasta que todas las juntas coinciden exactamente en la línea del cilindro, y solo entonces el cilindro gira. Lo que cambió en 1861, cuando se patentó la versión moderna, no fue la idea, sino el tamaño: pasadores finos de metal y muelles permitieron meter todo aquello en una pieza que cabe en el bolsillo.",
        destacado: { tipo: "cifra", cifra: "1861", unidad: "el año del cilindro moderno de bolsillo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un mecanismo de tres mil años que nadie ha conseguido mejorar de raíz, solo miniaturizar. Cerraduras de madera de este tipo se siguieron usando en el norte de África y en zonas rurales de Oriente hasta hace muy poco, y todavía se encuentran en puertas de casas antiguas. Y quedó también su punto débil, que es el mismo desde el principio: si la llave es una tabla con dientes a distancias medibles, cualquiera que consiga verla un momento puede copiarla. Por eso hoy se recomienda no fotografiar las llaves ni dejarlas encima de la mesa de un bar.",
      },
    ],
  },

  {
    id: "llaves-de-la-ciudad",
    titulo: "Las llaves de la ciudad abrían la muralla",
    gancho: "Antes de ser un regalo protocolario eran las llaves reales de las puertas, y entregarlas significaba rendirse.",
    categoria: "Llaves",
    color: "var(--clay)",
    encargo: "Una llave enorme de hierro forjado sobre un cojín de terciopelo rojo.",
    entrada:
      "Europa, siglos XII a XVI. Las ciudades están rodeadas de murallas y sus puertas se cierran al ponerse el sol con cerrojos y llaves de hierro que pesan varios kilos. Quien guarda esas llaves manda de verdad: controla quién entra, quién sale, qué mercancía pasa y a qué hora. Por eso su entrega es el gesto más cargado de significado de la vida política de una ciudad.",
    paginas: [
      {
        rotulo: "Rendirse o recibir",
        texto:
          "El gesto tenía dos sentidos opuestos y los dos eran literales. Cuando una ciudad sitiada se rendía, sus regidores salían y entregaban las llaves al vencedor: no era una metáfora, era la transferencia física del control de las puertas, y quien las recibía podía abrirlas y meter dentro a su ejército. Cuando la ciudad quería honrar a un rey o a un aliado, hacía el mismo gesto en sentido contrario, ofreciéndole voluntariamente el paso libre. Las crónicas describen la escena con detalle y las llaves aparecen en escudos y en cuadros como símbolo de autoridad sobre un lugar.",
        destacado: { tipo: "frase", frase: "No era un símbolo: quien tenía las llaves abría la puerta." },
      },
      {
        rotulo: "Cuando cayeron las murallas",
        texto:
          "Las murallas dejaron de tener sentido militar con la artillería y se fueron derribando entre los siglos XVIII y XIX para dejar sitio a bulevares y estaciones de tren. Las puertas desaparecieron, pero la ceremonia se quedó, vaciada de contenido y convertida en honor protocolario: se entrega una llave grande, muchas veces fabricada expresamente y sin cerradura que le corresponda, a visitantes ilustres, a deportistas que han ganado algo y a artistas. Algunas ciudades han tenido que retirarla después, cuando el homenajeado ha resultado no merecerla, y eso también sale en los periódicos.",
        destacado: { tipo: "cifra", cifra: "XIX", unidad: "el siglo en que cayeron casi todas las murallas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Queda una ceremonia diaria que todavía se hace de verdad: en una fortaleza londinense, cada noche desde hace más de setecientos años, un guardia recorre el recinto cerrando las puertas con las llaves auténticas, y el ritual solo se ha interrumpido una vez, unos minutos, por un bombardeo en 1941. Fuera de ahí, la llave de la ciudad es un objeto de escaparate que no abre nada. Pero conserva el sentido original: se le da a quien se le confiaría la puerta, y por eso quitarla ofende tanto. Sigue siendo, en el fondo, una cuestión de quién puede entrar.",
      },
    ],
  },
];
