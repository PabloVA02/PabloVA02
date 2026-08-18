import type { Short } from "../shorts";

/* ==========================================================================
   Videojuegos.

   La industria del entretenimiento más grande del mundo y la que peor prensa
   tiene entre quienes no la tocan. El riesgo del tema es el catálogo de
   consolas y de ventas, que solo entienden los que ya juegan.

   La regla del tema: se cuenta la HISTORIA DE ALREDEDOR, no la partida. Un
   funcionario soviético que no cobra derechos por el juego más vendido del
   mundo. Un camión enterrando cartuchos en el desierto. Un aparato de
   laboratorio conectado a un osciloscopio para entretener a las visitas.
   Casi siempre hay un asunto de dinero, de política o de vergüenza detrás.

   Nada de jerga: si aparece un término del oficio, se traduce y se sigue.
   ========================================================================== */

export const VIDEOJUEGOS: Short[] = [
  {
    id: "tetris-moscu",
    titulo: "Tetris no era suyo",
    gancho: "Lo programó en un instituto estatal soviético, así que el juego era del Estado y no suyo.",
    categoria: "Videojuegos",
    color: "var(--plum)",
    encargo: "Piezas geométricas de colores cayendo sobre un fondo oscuro cuadriculado.",
    fotos: [
      {
        archivo: "1986 year. 5¼-inch floppy disks.jpg",
        autor: "Disquetes de cinco pulgadas y cuarto, de 1986. Fotografía de Dmitry Makeev.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:1986_year._5%C2%BC-inch_floppy_disks.jpg",
        foco: "50% 50%",
        alt: "Dos disquetes negros cuadrados vistos por las dos caras, uno con la etiqueta impresa y el otro liso.",
      },
      {
        archivo: "Moscow Hammond Slides 63.jpg",
        autor: "La plaza Roja de Moscú nevada, en 1964. Fotografía de Thomas T. Hammond.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Moscow_Hammond_Slides_63.jpg",
        foco: "50% 40%",
        alt: "Una plaza cubierta de nieve ante la muralla del Kremlin, con una cola larguísima de gente al fondo.",
      },
      {
        archivo: "Nintendo-Game-Boy-Advance-Rose-Colored-Gaming-Original-Game-Boy.jpg",
        autor: "Una consola portátil de Nintendo, del tipo por cuyos derechos se peleó medio sector. Fotografía de Evan-Amos.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Nintendo-Game-Boy-Advance-Rose-Colored-Gaming-Original-Game-Boy.jpg",
        foco: "50% 45%",
        alt: "Una consola portátil de color hueso con pantalla cuadrada, cruceta y dos botones rojos, sobre fondo blanco.",
      },
      {
        archivo: "Handheld game consoles at The Village Barber.jpg",
        autor: "Consolas portátiles amontonadas en el estante de una barbería. Fotografía de Tessa Bury.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Handheld_game_consoles_at_The_Village_Barber.jpg",
        foco: "50% 45%",
        alt: "Media docena de consolas portátiles de colores apoyadas unas sobre otras en una balda de madera.",
      },
    ],
    entrada:
      "Moscú, junio de 1984. Un informático de veintinueve años que trabaja en un instituto de la Academia de Ciencias soviética programa en sus ratos libres un juego de piezas que caen y hay que encajar unas con otras. Lo hace en un ordenador que ni siquiera tiene gráficos: las piezas se dibujan con caracteres de texto, corchetes y barras. No hay tienda donde venderlo ni empresa a la que enseñárselo, así que hace lo único que se puede hacer allí en 1984: lo copia en un disquete y se lo pasa a un compañero de pasillo.",
    paginas: [
      {
        rotulo: "La copia",
        texto:
          "En un país sin mercado de software, la única forma de distribución era esa: alguien copiaba el disquete y se lo daba a otro. En unas semanas estaba en todos los institutos de Moscú y la gente dejaba de trabajar para jugar; se cuenta que en algún centro llegaron a borrarlo de los ordenadores por eso. De ahí saltó a Hungría, y de Hungría a un editor británico que lo vio en una feria y empezó a negociar los derechos con quien no los tenía, porque en la Unión Soviética un empleado no era dueño de lo que producía.",
        destacado: { tipo: "frase", frase: "En la Unión Soviética un empleado no era dueño de lo que hacía." },
      },
      {
        rotulo: "El lío de derechos",
        texto:
          "Lo que siguió fue un enredo de contratos firmados con intermediarios que se atribuían permisos que nadie les había dado, y que acabó en tribunales de varios países. El organismo estatal soviético que gestionaba el asunto acabó cediendo los derechos de las consolas portátiles a una empresa japonesa, que incluyó el juego con su máquina de bolsillo y vendió treinta y cinco millones de unidades. El programador siguió cobrando su sueldo de funcionario, que daba para poco, y sin ver un rublo de todo aquello durante una década larga; en una entrevista contó que su recompensa fue un ordenador personal que le regaló el instituto.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "años sin cobrar un céntimo por él" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En 1996, ya desaparecida la Unión Soviética, los derechos volvieron a él y montó una empresa para gestionarlos; hoy vive de eso. El juego se ha vendido en más de doscientas plataformas distintas y sigue siendo de los más jugados del mundo cuarenta años después, sin haber cambiado ni una regla. Y tiene además un fenómeno con nombre propio: quien juega mucho seguido acaba viendo piezas encajando al cerrar los ojos, un efecto que los psicólogos han estudiado en serio, que lleva el nombre del juego y que se usa hoy en terapias para reducir los recuerdos intrusivos después de un trauma.",
      },
    ],
  },

  {
    id: "primer-videojuego",
    titulo: "El videojuego de la feria",
    gancho: "Un físico conectó un osciloscopio a un ordenador analógico para que los visitantes no se aburrieran.",
    categoria: "Videojuegos",
    color: "var(--sage)",
    curioso: true,
    encargo: "Una pantalla redonda de osciloscopio verde con una línea luminosa curva.",
    fotos: [
      {
        archivo: "Old oscilloscope with round screen without visible knobs or switches.jpg",
        autor: "Osciloscopio antiguo de pantalla redonda, con la traza verde dibujada por el haz sobre la rejilla.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AOld%20oscilloscope%20with%20round%20screen%20without%20visible%20knobs%20or%20switches.jpg",
        foco: "55% 45%",
        alt: "Aparato gris con una pantalla circular oscura en la que brilla en verde una línea ondulada.",
      },
      {
        archivo: "Donner model 3400 Analog Computer.jpg",
        autor: "Ordenador analógico Donner 3400, de los que resolvían ecuaciones con resistencias y condensadores.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADonner%20model%203400%20Analog%20Computer.jpg",
        foco: "50% 45%",
        alt: "Armario de laboratorio lleno de clavijas, cables y mandos redondos ordenados en filas.",
      },
      {
        archivo: "Wilson Cloud Chamber at AEC's Brookhaven National Laboratory.jpg",
        autor: "Cámara de niebla de Wilson en el Laboratorio Nacional de Brookhaven, el mismo sitio donde se montó aquel tenis.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3AWilson%20Cloud%20Chamber%20at%20AEC%27s%20Brookhaven%20National%20Laboratory.jpg",
        foco: "50% 50%",
        alt: "Gran aparato de laboratorio con bobinas y ventanas circulares, atendido por técnicos en una nave.",
      },
      {
        archivo: "MAGFest2025-Arcade-HighAngle.jpg",
        autor: "Sala de máquinas recreativas vista desde arriba, con las pantallas encendidas en la penumbra.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMAGFest2025-Arcade-HighAngle.jpg",
        foco: "50% 50%",
        alt: "Vista elevada de una sala oscura con filas de máquinas recreativas iluminadas y gente jugando de pie.",
      },
    ],
    entrada:
      "Nueva York, octubre de 1958. Un laboratorio nacional estadounidense abre sus puertas al público un par de días al año, y la visita es un aburrimiento de paneles con fotografías y aparatos acordonados que no se pueden tocar. Un físico de cuarenta y tres años, encargado del taller de instrumentación, decide que ese año habrá algo con lo que la gente pueda jugar de verdad. Lo monta en tres semanas con material prestado del propio laboratorio, sin pedir permiso a nadie y sin pensar ni por un momento que estaba haciendo el primero de una industria entera.",
    paginas: [
      {
        rotulo: "El montaje",
        texto:
          "Cogió un ordenador analógico que se usaba para calcular trayectorias de proyectiles, capaz de resolver ecuaciones con resistencias y condensadores, y le conectó la pantalla redonda de un osciloscopio, del tamaño de un plato de postre. Programó una pista de tenis vista de lado: una línea para el suelo, otra corta para la red y un punto que rebotaba con la física del mundo real, incluida la resistencia del aire. Dos mandos de aluminio con una rueda para elegir el ángulo y un botón para golpear completaban el aparato, que ocupaba media mesa y hacía un ruido considerable.",
        destacado: { tipo: "frase", frase: "La pelota rebotaba con física de verdad, resistencia del aire incluida." },
      },
      {
        rotulo: "La cola",
        texto:
          "Aquel día se formó una cola que daba la vuelta al edificio y que no se movía de allí, y al año siguiente lo repitió con una pantalla más grande y la posibilidad de jugar con la gravedad de la Luna o de Júpiter. Después lo desmontó y devolvió las piezas al almacén, porque las necesitaban para trabajar. Nunca lo patentó ni se le ocurrió que pudiera tener valor comercial: era un entretenimiento de feria montado con material prestado, y además todo lo que se producía en aquel laboratorio pertenecía al gobierno de su país.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "semanas tardó en montarlo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Su invento salió a la luz mucho después, en los años setenta, y por un motivo curioso: se usó como prueba en un juicio de patentes entre empresas del sector, porque demostraba que la idea existía antes que ninguna de ellas. Él declaró que no le importaba y que había sido un juguete de dos tardes. La máquina no se conserva, solo unas fotografías y sus notas; en el laboratorio hay hoy una réplica montada a partir de sus notas, con la misma pantalla redonda y los mismos mandos de aluminio, que los visitantes pueden usar.",
      },
    ],
  },

  {
    id: "cartuchos-desierto",
    titulo: "Cartuchos enterrados",
    gancho: "Durante treinta años se tomó por leyenda urbana. En 2014 excavaron y estaban allí.",
    categoria: "Videojuegos",
    color: "var(--ochre)",
    encargo: "Una excavadora sobre tierra seca y agrietada, con montones de arena removida.",
    entrada:
      "Nuevo México, Estados Unidos, septiembre de 1983. Durante varias noches seguidas, catorce camiones descargan en un vertedero municipal miles de cajas precintadas de una empresa de videojuegos, se aplastan con una excavadora delante de unos cuantos curiosos y se cubren con una capa de hormigón para que nadie las saque. Un periódico local lo cuenta al día siguiente y la empresa lo niega a medias, sin explicar qué había dentro. La industria del videojuego acaba de hundirse en Estados Unidos y aquello es el entierro. Durante treinta años, casi nadie se creyó que aquello hubiera pasado de verdad.",
    paginas: [
      {
        rotulo: "El derrumbe",
        texto:
          "El sector había crecido tan deprisa que cualquiera podía fabricar cartuchos para la consola dominante sin permiso ni control de calidad, y las tiendas se llenaron de juegos malos. Dos apuestas grandes acabaron de romper la confianza: la adaptación de una película muy taquillera, programada por una sola persona en cinco semanas para llegar a la campaña de Navidad, y una conversión de un juego de máquina recreativa que se fabricó en cantidades disparatadas. Se produjeron más copias de la segunda que consolas había en el mundo entero, contando las que ya estaban en las casas.",
        destacado: { tipo: "frase", frase: "Se fabricaron más copias del juego que consolas existían." },
      },
      {
        rotulo: "El vertedero",
        texto:
          "Las devoluciones llenaron los almacenes y la empresa decidió deshacerse del inventario de la manera más barata posible. Con los años, la historia se convirtió en un cuento que casi nadie creía: se decía que allí abajo había millones de copias de aquel juego de la película, aunque la cifra crecía en cada versión. En abril de 2014, un equipo de documentalistas consiguió los permisos del ayuntamiento y excavó delante de doscientos curiosos y de varias cámaras, con la duda de si allí habría algo. A un metro y medio de profundidad empezaron a salir cartuchos, aplastados pero con la etiqueta perfectamente legible.",
        destacado: { tipo: "cifra", cifra: "1983", unidad: "el año del entierro, confirmado en 2014" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se recuperaron unos mil trescientos, de más de cuarenta títulos distintos y no solo del famoso; el resto se dejó bajo tierra. Varios museos se quedaron con ejemplares y el resto se subastó, alcanzando precios altísimos por ser lo que eran. El sector estadounidense tardó dos años en levantarse y lo hizo gracias a una empresa japonesa que impuso una regla nueva: ningún juego sale a la venta sin su aprobación. Esa regla, que nació directamente de aquel vertedero, sigue siendo la norma en la industria cuarenta años después, y es la razón de que hoy exista un sello de aprobación en la caja de cualquier juego.",
      },
    ],
  },
];
