import type { Short } from "../shorts";

/* ==========================================================================
   Las pilas y las baterías.

   Nadie sabe qué hay dentro y todo el mundo tiene veinte en casa. El tema
   se estropea si repite la rana de Galvani, que ya está en electricidad.ts.

   La regla del tema: la idea madre es que UNA PILA NO GUARDA
   ELECTRICIDAD, sino una reacción química pendiente, y eso se explica
   antes de nada. Todo lo demás (el frío, el incendio, el reciclaje) sale
   de ahí.
   ========================================================================== */

export const PILAS: Short[] = [
  {
    id: "por-que-se-gasta-una-pila",
    titulo: "La pila no guarda corriente",
    gancho: "No guarda electricidad dentro. Guarda dos materiales que quieren reaccionar, y se acaba cuando uno se consume.",
    categoria: "Ciencia",
    color: "var(--ochre)",
    encargo: "Pila alcalina cortada por la mitad a lo largo, con las capas interiores a la vista.",
    fotos: [
      {
        archivo: "Volta battery-MHS 373-IMG 3840-black.jpg",
        autor: "Una pila de Volta: discos de dos metales distintos apilados con paño húmedo entre ellos. Museo de Historia de la Ciencia de Ginebra. Fotografía de Rama.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Volta_battery-MHS_373-IMG_3840-black.jpg",
        foco: "50% 50%",
        alt: "Una columna de discos metálicos apilados entre cuatro varillas, sobre un pie torneado y fondo negro.",
      },
      {
        archivo: "Filament bulb.jpg",
        autor: "El filamento encendido de una bombilla incandescente. Fotografía de Subasis Mahat.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Filament_bulb.jpg",
        foco: "50% 45%",
        alt: "Un hilo enrollado brillando anaranjado dentro del vidrio de una bombilla, sobre fondo oscuro.",
      },
      {
        archivo: "Ice Crystals on Window Pane.jpg",
        autor: "Cristales de hielo creciendo sobre el vidrio de una ventana. Fotografía de Jojoo64.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ice_Crystals_on_Window_Pane.jpg",
        foco: "50% 45%",
        alt: "Agujas de escarcha ramificadas extendiéndose sobre un cristal, iluminadas a contraluz.",
      },
      {
        archivo: "Vintage Roberts Portable Transistor Radio, Model R500, Multi-Band - MW-LW-SW, 7 Transistors, Made In Great Britain, Circa 1963 (13223505614).jpg",
        autor: "Una radio de transistores portátil de hacia 1963, de las que funcionan con pilas. Fotografía de Joe Haupt.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Vintage_Roberts_Portable_Transistor_Radio,_Model_R500,_Multi-Band_-_MW-LW-SW,_7_Transistors,_Made_In_Great_Britain,_Circa_1963_(13223505614).jpg",
        foco: "50% 62%",
        alt: "Una radio antigua forrada de piel verde con asa, rejilla dorada de altavoz y dos ruedas de mando.",
      },
    ],
    entrada:
      "Todo el mundo, con la pila alcalina moderna en el mercado desde 1959. Casi cualquiera que se pare a pensarlo imagina una pila como un depósito lleno de electricidad que se va vaciando poco a poco, como un botellín de agua. No hay absolutamente nada de eso dentro. Lo que hay son dos materiales distintos, separados por una pasta que no deja que se toquen, y una reacción química que se muere de ganas de ocurrir pero que solo puede hacerlo si los electrones dan un rodeo larguísimo por fuera. Ese rodeo, obligado, es la corriente.",
    paginas: [
      {
        rotulo: "El rodeo",
        texto:
          "Dentro de una pila alcalina hay zinc en polvo por un lado y óxido de manganeso por el otro. El zinc tiende a soltar electrones y el óxido tiende a cogerlos, así que la reacción quiere ocurrir. Entre los dos hay una pasta que deja pasar átomos cargados y no deja pasar electrones. Los electrones se ven obligados a salir por el polo negativo y dar la vuelta por el circuito. Ese rodeo forzado es la corriente que enciende la bombilla o mueve el motor del juguete. La pila se acaba cuando el zinc se ha consumido, y entonces no queda reacción que empujar.",
        destacado: { tipo: "frase", frase: "No guarda electricidad: guarda una reacción pendiente." },
      },
      {
        rotulo: "Frío y tiempo",
        texto:
          "Ese mecanismo explica los comportamientos raros de las pilas que todo el mundo ha sufrido alguna vez. Con frío la reacción química va más lenta, así que la pila da menos corriente y parece agotada. Al volver a temperatura normal recupera buena parte, porque no se ha gastado nada de verdad. Una pila descansando también revive un poco, ya que los productos de la reacción se reparten mejor. De ahí viene el truco de sacar las pilas del mando y volver a meterlas al rato. Guardadas años acaban perdiendo carga igualmente, porque la reacción avanza muy despacio por su cuenta.",
        destacado: { tipo: "cifra", cifra: "1959", unidad: "el año de la pila alcalina de hoy" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un objeto que se fabrica por decenas de miles de millones de unidades al año en todo el planeta. Quedó también la fuga, ese polvo blanco y áspero que aparece dentro de un mando olvidado durante años. El zinc al gastarse produce gas, la presión revienta la carcasa y se escapa una sustancia corrosiva. Por eso conviene sacar las pilas de cualquier aparato que no se vaya a usar durante meses. Y quedó una regla que casi nadie cumple, porque mezclar una pila nueva con una vieja estropea las dos.",
      },
    ],
  },
  {
    id: "la-bateria-de-litio",
    titulo: "Arde por dentro",
    gancho: "Cuando falla, la reacción se calienta a sí misma y ya no hay manera de pararla desde fuera.",
    categoria: "Tecnología",
    color: "var(--slate)",
    encargo: "Batería de móvil hinchada, con la carcasa abombada y separada del marco.",
    entrada:
      "Japón, 1991. Sale al mercado la primera batería recargable de iones de litio, un invento que estaba parado desde hacía quince años por un problema de seguridad. El litio es el metal más ligero que existe y guarda muchísima energía por gramo, y por eso es ideal para una batería. También es el motivo de que una batería estropeada pueda arder sin que nadie la apague.",
    paginas: [
      {
        rotulo: "Ida y vuelta",
        texto:
          "Una batería recargable se diferencia de una pila en que su reacción se puede deshacer. Dentro hay dos capas y un líquido entre ellas, y los átomos de litio viajan de una a otra. Al descargarse van hacia un lado, y al cargarse la corriente los empuja de vuelta al sitio original. El litio no se convierte en metal en ningún momento, y eso fue lo que costó quince años resolver. Las primeras baterías sí formaban litio metálico, que crecía en agujas y acababa perforando la separación. La solución fue guardar el litio dentro de capas de grafito, como fichas metidas en una baraja.",
        destacado: { tipo: "frase", frase: "El litio se guarda entre capas, como fichas en una baraja." },
      },
      {
        rotulo: "La fuga térmica",
        texto:
          "El peligro aparece cuando esa separación se rompe por un golpe, por un defecto o por un exceso de carga. Los dos lados se tocan, se produce un cortocircuito y todo ese punto se calienta muy deprisa. El calor descompone el líquido interior, que suelta gases inflamables y calienta todavía más. Ese círculo se llama fuga térmica, y una vez arrancado no se puede detener desde fuera. La batería fabrica su propio oxígeno al descomponerse, así que ahogarla con un extintor no sirve. Lo único que funciona es enfriarla con muchísima agua durante horas hasta que se agota sola.",
        destacado: { tipo: "cifra", cifra: "1991", unidad: "el año de la primera batería de litio" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la tecnología que ha hecho posible el móvil, el portátil, el patinete y el coche eléctrico. Sin ella, un teléfono con esta pantalla pesaría varios kilos y duraría media hora escasa. Quedaron también las normas que prohíben facturar baterías sueltas en la bodega de cualquier avión de pasajeros. El motivo es que en la cabina alguien puede ver el humo y actuar, y en la bodega nadie. Y quedó el consejo de los bomberos para una batería hinchada, que consiste en no pincharla nunca y sacarla al exterior cuanto antes.",
      },
    ],
  },
  {
    id: "las-pilas-en-la-basura",
    titulo: "El mito caducado, el problema no",
    gancho: "La cifra que se repite está caducada y el problema sigue siendo real. Lo que falla no es el mito: es la recogida.",
    categoria: "Ciencia",
    color: "var(--plum)",
    curioso: true,
    encargo: "Contenedor de recogida de pilas usadas, lleno hasta arriba de modelos distintos.",
    entrada:
      "Europa, con la directiva sobre pilas en vigor desde 2006. Todo el mundo ha oído que una pila de botón contamina miles de litros de agua, y esa cifra concreta viene de un cálculo antiguo y discutible. El problema de fondo sigue siendo cierto, porque una pila lleva metales que no desaparecen. Y lo que de verdad falla no es la conciencia, sino la recogida.",
    paginas: [
      {
        rotulo: "La cifra",
        texto:
          "Aquel cálculo se hizo con pilas de botón de mercurio, que eran las que se vendían hace décadas. El mercurio es tóxico en cantidades diminutas y se acumula en los peces y en quien se los come. Repartir el mercurio de una pila hasta el límite legal del agua potable daba efectivamente miles de litros. El cálculo supone que todo el metal se disuelve, cosa que en un vertedero moderno no pasa así. Además el mercurio está prohibido en las pilas europeas desde hace años, de modo que la cifra caducó. Lo que sigue habiendo es zinc, manganeso, níquel y litio, que tampoco conviene repartir por el suelo.",
        destacado: { tipo: "frase", frase: "La cifra famosa se calculó con pilas que ya no existen." },
      },
      {
        rotulo: "Lo que importa",
        texto:
          "El argumento fuerte para reciclar una pila no es el veneno, sino que dentro hay materiales caros. Sacar zinc de una pila usada cuesta bastante menos energía que sacarlo de una mina. Con el litio y el cobalto de las baterías la diferencia es todavía mayor y más importante. El otro motivo es el incendio, porque una batería aplastada en un camión de basura arde. Las plantas de residuos europeas registran cientos de fuegos al año por baterías tiradas donde no toca. Un cigarrillo electrónico o unos auriculares llevan batería dentro y casi nadie los trata como tal.",
        destacado: { tipo: "cifra", cifra: "2006", unidad: "el año de la norma europea de pilas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un sistema de recogida que existe en todas partes y que recoge menos de la mitad de lo vendido. El resto acaba en un cajón de casa, que es donde está la mayor mina urbana del mundo. Quedó también una costumbre que se pierde, porque casi todos los aparatos llevan hoy la batería pegada dentro. Ya no se cambian pilas: se cambia el aparato entero, y eso multiplica todo lo que se tira. La normativa europea ha empezado a exigir baterías sustituibles otra vez, cuarenta años después de haberlas quitado.",
      },
    ],
  },
];
