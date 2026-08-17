import type { Short } from "../shorts";

/* ==========================================================================
   El termo y el frío sin energía.

   Objetos que mantienen la temperatura sin enchufe ni motor. El tema se
   estropea si se cuenta como historia de electrodomésticos.

   La regla del tema: primero SE EXPLICA CÓMO VIAJA EL CALOR (conducción,
   convección, radiación, evaporación) y solo después se cuenta el objeto
   que bloquea ese camino. El frío nunca se mueve: lo que se mueve es el
   calor, y eso se dice con todas las letras.
   ========================================================================== */

export const TERMO: Short[] = [
  {
    id: "el-vacio-que-aisla",
    titulo: "El termo aísla con nada",
    gancho: "Entre las dos paredes de un termo no hay aire ni espuma. No hay nada, y eso es exactamente lo que aísla.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Frasco de vidrio de doble pared plateado por dentro, en corte.",
    fotos: [
      {
        archivo: "Dewargefäß Deutsches Museum.jpg",
        autor: "Un vaso Dewar de vidrio plateado por dentro. Deutsches Museum. Fotografía de LepoRello.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Dewargef%C3%A4%C3%9F_Deutsches_Museum.jpg",
        foco: "50% 40%",
        alt: "Un cilindro de vidrio con la pared interior plateada como un espejo, sobre un soporte transparente.",
      },
      {
        archivo: "Sun - SDO - 2014-06-10 304.jpg",
        autor: "El Sol en ultravioleta, visto por el observatorio SDO. NASA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Sun_-_SDO_-_2014-06-10_304.jpg",
        foco: "50% 50%",
        alt: "El disco del Sol en tonos rojos y anaranjados sobre fondo negro, con una erupción en el borde izquierdo.",
      },
      {
        archivo: "Ri 2014 - Thermos flask - James Dewar (27).jpg",
        autor: "Uno de los frascos de doble pared originales de James Dewar, en la Royal Institution de Londres. Fotografía de Vera de Kok.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ri_2014_-_Thermos_flask_-_James_Dewar_(27).jpg",
        foco: "50% 40%",
        alt: "Un frasco de vidrio grueso con un segundo recipiente dentro, en una vitrina, con un retrato al fondo.",
      },
      {
        archivo: "Liquid helium dewars.jpg",
        autor: "Depósitos de helio líquido montados sobre ruedas en un laboratorio. Fotografía de Adville.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Liquid_helium_dewars.jpg",
        foco: "50% 62%",
        alt: "Dos cilindros grandes de acero inoxidable con ruedas, en el suelo de una nave industrial.",
      },
    ],
    entrada:
      "Escocia, 1892. Un físico que trabaja con gases licuados tiene un problema muy concreto: necesita un recipiente capaz de mantener líquidos a doscientos grados bajo cero durante horas, y ningún material aislante conocido aguanta eso ni de lejos. El corcho, la lana, el serrín y las plumas retienen calor porque atrapan aire quieto entre sus fibras, pero el aire acaba conduciendo. Su solución fue dejar de buscar un material mejor y quitar el material del todo: construyó un frasco de vidrio de doble pared y sacó todo el aire del hueco entre ellas, dejando el vacío más completo que podía conseguir.",
    paginas: [
      {
        rotulo: "Tres maneras",
        texto:
          "El calor se transmite de tres maneras distintas y un termo tiene que bloquear las tres. La primera es la conducción, que necesita materia tocando materia para pasar el calor de átomo en átomo. La segunda es la convección, que consiste en que el aire caliente sube y se lleva el calor consigo. El vacío elimina las dos de golpe, porque sin materia no hay nada que conducir ni que circular. La tercera es la radiación, que viaja como la luz y atraviesa el vacío sin ningún problema. Contra esa hace falta otra cosa, y por eso el interior de un termo va plateado como un espejo.",
        destacado: { tipo: "frase", frase: "Sin materia no hay nada que conducir ni que circular." },
      },
      {
        rotulo: "El espejo",
        texto:
          "Cualquier objeto caliente emite radiación, y cuanto más caliente está más emite. Un café a ochenta grados está radiando calor hacia fuera todo el rato sin que se vea nada. Una superficie brillante devuelve esa radiación hacia dentro en lugar de absorberla y dejarla escapar. Por eso el frasco lleva una capa finísima de plata o de aluminio por las dos caras del hueco. El único camino que le queda al calor es el cuello del termo y el tapón. Ahí las dos paredes se tocan por fuerza, y por eso un termo bueno tiene la boca estrecha.",
        destacado: { tipo: "cifra", cifra: "1892", unidad: "el año del frasco de doble pared" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un objeto que su inventor no llegó a patentar nunca, porque lo consideraba un instrumento de laboratorio. Fueron dos sopladores de vidrio alemanes quienes lo metieron en una carcasa metálica y lo vendieron. El físico los demandó y perdió el pleito, porque él nunca había registrado la patente. Quedó también el principio funcionando en sitios donde nadie lo asocia con un termo de café. Los transportes de vacunas, los tanques de gas licuado y el aislamiento de algunos satélites usan exactamente lo mismo. El vacío sigue siendo el mejor aislante que existe.",
      },
    ],
  },
  {
    id: "frio-o-caliente",
    titulo: "El termo no enfría nada",
    gancho: "Solo frena el paso del calor, y le da igual la dirección. Por eso sirve para el café y para el hielo.",
    categoria: "Ciencia",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Termo de acero abierto con vapor saliendo, sobre una mesa de cocina.",
    fotos: [
      {
        archivo: "Thermos flask, Model 3750, designed by Raymond Loewy, American Thermos Bottle Corporation, 1937, chrome-plated brass, aluminum, bakelite - Museum für Angewandte Kunst Köln - Cologne, Germany - DSC09512.jpg",
        autor: "Termo modelo 3750 diseñado por Raymond Loewy en 1937, en latón cromado y baquelita. Museo de Artes Aplicadas de Colonia.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AThermos%20flask%2C%20Model%203750%2C%20designed%20by%20Raymond%20Loewy%2C%20American%20Thermos%20Bottle%20Corporation%2C%201937%2C%20chrome-plated%20brass%2C%20aluminum%2C%20bakelite%20-%20Museum%20f%C3%BCr%20Angewandte%20Kunst%20K%C3%B6ln%20-%20Cologne%2C%20Germany%20-%20DSC09512.jpg",
        foco: "50% 45%",
        alt: "Jarra termo esférica de metal cromado brillante, con asa curva y tapón oscuro, dentro de una vitrina.",
      },
      {
        archivo: "Coffee steaming in a mug.jpg",
        autor: "Taza de café humeante: ese vapor es calor escapándose hacia la habitación.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ACoffee%20steaming%20in%20a%20mug.jpg",
        foco: "50% 50%",
        alt: "Taza llena de café oscuro con una columna de vapor subiendo, iluminada a contraluz.",
      },
      {
        archivo: "Ice cubes from the mold.jpg",
        autor: "Cubitos recién sacados de la cubitera, todavía escarchados.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AIce%20cubes%20from%20the%20mold.jpg",
        foco: "50% 50%",
        alt: "Montón de cubitos de hielo transparentes con la superficie blanca de escarcha.",
      },
      {
        archivo: "Ice Crystals on Window Pane.jpg",
        autor: "Cristales de hielo formados en un cristal de ventana, donde el calor de dentro se encuentra con el frío de fuera.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AIce%20Crystals%20on%20Window%20Pane.jpg",
        foco: "50% 50%",
        alt: "Dibujos de escarcha en forma de plumas y agujas extendidos sobre el vidrio de una ventana.",
      },
    ],
    entrada:
      "Cualquier cocina, con la pregunta repetida desde que existen los termos en 1904. Mucha gente se pregunta cómo puede un mismo recipiente mantener el café caliente y el refresco frío, como si el aparato tuviera que enterarse de lo que le echan y decidir en consecuencia. No decide nada, porque no hay nada que decidir. Un termo no produce calor ni lo quita: lo único que hace es poner una barrera muy buena para que el calor pase despacísimo, y esa barrera, que no sabe nada de lo que hay dentro, funciona igual de bien en los dos sentidos.",
    paginas: [
      {
        rotulo: "Solo baja",
        texto:
          "El frío no existe como cosa que se pueda mover de un sitio a otro. Lo que existe es el calor, y el calor siempre viaja del cuerpo más caliente al más frío. Enfriar algo consiste en sacarle calor, no en meterle frío, aunque al hablar se diga al revés. Con café caliente dentro, el calor quiere salir hacia la habitación y el termo se lo impide. Con hielo dentro, el calor de la habitación quiere entrar y el termo también se lo impide. Es la misma barrera haciendo el mismo trabajo, y lo único que cambia es hacia dónde empuja el calor.",
        destacado: { tipo: "frase", frase: "El frío no se mete: es el calor el que se saca." },
      },
      {
        rotulo: "Los trucos",
        texto:
          "De ese mecanismo salen un par de trucos caseros que sí tienen fundamento físico. El primero es llenar el termo con agua muy caliente unos minutos antes y vaciarlo justo al usarlo. Así las paredes de dentro ya están calientes y no le roban calor a la primera taza. El segundo es llenarlo del todo, porque un hueco de aire dentro es calor circulando de arriba abajo. Un termo medio lleno pierde temperatura bastante más deprisa que el mismo termo lleno hasta arriba. Y abrirlo cuesta caro, ya que cada apertura cambia todo el aire de dentro y arranca la cuenta de nuevo.",
        destacado: { tipo: "cifra", cifra: "1904", unidad: "el año en que se vendió el primer termo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un objeto que sigue siendo exactamente el mismo por dentro después de más de un siglo. Lo único que cambió de verdad fue el material, porque el vidrio pasó a ser acero inoxidable. El vidrio aísla mejor y se rompe al primer golpe, y el acero aguanta y conduce un poco más. Quedó también una señal clara de que un termo está estropeado, y es notarlo caliente por fuera. Si la pared exterior se calienta, el vacío se ha perdido y el aparato ya no aísla nada. Un termo con vacío perdido no tiene arreglo.",
      },
    ],
  },
  {
    id: "el-botijo",
    titulo: "El botijo suda y enfría",
    gancho: "El barro deja pasar un poco de agua, que se evapora por fuera. Esa evaporación se lleva el calor de dentro.",
    categoria: "España",
    color: "var(--clay)",
    encargo: "Botijo de barro sudado a la sombra, con las gotas visibles en la superficie.",
    entrada:
      "España y todo el Mediterráneo, con el objeto documentado desde hace más de dos mil años. Un botijo es una vasija de barro poroso que consigue bajar la temperatura del agua varios grados por debajo de la del aire que lo rodea, sin enchufe, sin hielo y sin ninguna clase de energía. Puesto así parece un truco de magia y es física elemental de libro. El barro sin vidriar deja salir por sus poros una parte pequeñísima del agua, y esa agua se evapora en la superficie. Y esa evaporación se lleva consigo una cantidad de calor que sorprende.",
    paginas: [
      {
        rotulo: "Evaporar cuesta",
        texto:
          "Para que una gota de agua líquida se convierta en vapor hace falta una cantidad de energía sorprendente. Es muchísima más de la que cuesta calentar esa misma gota desde cero grados hasta cien. Esa energía tiene que salir de algún sitio, y sale del propio líquido que queda alrededor. Cada gota que se evapora en la pared del botijo se lleva calor del agua de dentro. Es exactamente lo mismo que hace el sudor sobre la piel cuando corre el aire. El agua puede quedarse hasta ocho grados por debajo de la temperatura ambiente en un día seco.",
        destacado: { tipo: "frase", frase: "Evaporar una gota cuesta más que hervirla desde cero." },
      },
      {
        rotulo: "Dónde funciona",
        texto:
          "El botijo tiene una condición que decide si funciona o no, y es la humedad del aire. Si el aire ya está cargado de vapor, el agua de la pared no se evapora y no enfría nada. Por eso en la costa húmeda apenas sirve y en la meseta seca funciona de maravilla. También ayuda que corra el aire, porque el aire en movimiento se lleva el vapor y deja sitio para más. Ponerlo a la sombra y en una corriente es la manera correcta, y meterlo en la nevera es absurdo. El mismo principio enfría edificios enteros en climas secos con paneles humedecidos y un ventilador.",
        destacado: { tipo: "cifra", cifra: "8", unidad: "grados por debajo del ambiente llega a bajar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un objeto que se sigue fabricando y que fue durante siglos el único frío disponible en el campo. Quedó también un experimento de física que se repite en muchas escuelas con un termómetro y un botijo. Y quedó la misma idea aplicada a lo grande en los sistemas industriales de refrigeración por evaporación. Se usan en naves industriales, en invernaderos y en las torres de refrigeración de las centrales eléctricas. Esas torres enormes de hormigón que sueltan una columna de vapor blanco están haciendo lo que hace un botijo. La escala cambia; el mecanismo no.",
      },
    ],
  },
];
