import type { Short } from "../shorts";

/* ==========================================================================
   El circo.

   Un espectáculo que casi todo el mundo asocia a la infancia y que en
   realidad nació de la caballería militar y funciona por razones de física.
   El riesgo del tema es la nostalgia de payasos y serrín.

   La regla del tema: se cuenta POR QUÉ TIENE ESA FORMA. La pista es redonda
   y mide lo que mide por una razón mecánica, el número de pistas cambió por
   una razón comercial y el cañón del hombre bala funciona con lo contrario
   de lo que parece. Nada de emoción de infancia: mecanismos.
   ========================================================================== */

export const CIRCO: Short[] = [
  {
    id: "pista-de-trece-metros",
    titulo: "La pista es redonda",
    gancho: "Trece metros de diámetro, en cualquier país y desde 1768. Lo decide la fuerza que empuja al caballo.",
    categoria: "Circo",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una pista circular de serrín vista desde arriba, con la valla baja de madera roja.",
    /* El número, el truco que lo hace posible, el cartel de los que lo
       copiaron y la pista pintada un siglo después, con la misma medida. */
    fotos: [
      {
        archivo: "Theatrical and circus life; (1893) (14765938152).jpg",
        autor:
          "Grabado de un libro sobre la vida del circo, 1893: los números a caballo, que fueron el circo entero durante un siglo.",
        licencia: "Sin restricciones conocidas",
        fuente: "https://commons.wikimedia.org/wiki/File:Theatrical_and_circus_life;_(1893)_(14765938152).jpg",
        foco: "50% 50%",
        alt: "Grabado antiguo con un caballo al galope y varios acróbatas saltando y haciendo el pino sobre otros caballos alrededor.",
      },
      {
        archivo: "Adolphe Franconi standing on the back of a horse, facing right, legs spread, with right foot on the rump of the horse, right hand extended to the left, holding a hat in his left hand, during LCCN2017650407.jpg",
        autor:
          "Dibujo de Martha Sarah Rolls, entre 1820 y 1827: un jinete de circo de pie sobre el lomo de un caballo al galope. Biblioteca del Congreso, Estados Unidos.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Adolphe_Franconi_standing_on_the_back_of_a_horse,_facing_right,_legs_spread,_with_right_foot_on_the_rump_of_the_horse,_right_hand_extended_to_the_left,_holding_a_hat_in_his_left_hand,_during_LCCN2017650407.jpg",
        foco: "50% 50%",
        alt: "Dibujo a lápiz de un hombre erguido sobre el lomo de un caballo lanzado al galope, con un sombrero en la mano.",
      },
      {
        archivo: "Astley's Royal Amphitheatre (London, England), May 24, 1852 - DPLA - c731c6f54e3ca533a15d878cd0ef5f91.jpg",
        autor:
          "Cartel del anfiteatro de Astley, en Londres, del 24 de mayo de 1852. Es la casa donde nació el circo, ochenta y cuatro años después de la primera función. Universidad Estatal de Illinois.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Astley's_Royal_Amphitheatre_(London,_England),_May_24,_1852_-_DPLA_-_c731c6f54e3ca533a15d878cd0ef5f91.jpg",
        foco: "50% 25%",
        alt: "Cartel impreso a dos columnas, con el nombre del anfiteatro en letras enormes y la lista de números de la función debajo.",
      },
      {
        archivo: "Center Ring, Gifford Beal, 1922 - Phillips Collection - DSC04889.JPG",
        autor:
          "«La pista central», óleo de Gifford Beal, 1922. Ciento cincuenta años después de Londres, y en otro continente, la pista sigue midiendo lo mismo. Phillips Collection, Washington.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Center_Ring,_Gifford_Beal,_1922_-_Phillips_Collection_-_DSC04889.JPG",
        foco: "50% 45%",
        alt: "Cuadro de trazo suelto: la pista redonda de un circo con caballos y figuras claras, rodeada por el público en penumbra.",
      },
    ],
    entrada:
      "Londres, 1768. Un antiguo sargento de caballería que se gana la vida enseñando equitación monta un espectáculo en un terreno cercado junto al río: galopa en círculo de pie sobre la silla. Cobra entrada. Aquello, que parece una acrobacia de feria, es en realidad el nacimiento del circo moderno. Y lo más raro es lo que se ha quedado hasta hoy. No los caballos, ni el número, ni la carpa: lo que ha llegado idéntico hasta las pistas de ahora es la medida exacta del círculo que aquel hombre dibujó en el suelo. Trece metros de diámetro, en Londres, en Moscú y en Buenos Aires, desde hace más de dos siglos. Y no la eligió por gusto.",
    paginas: [
      {
        rotulo: "La fuerza del giro",
        texto:
          "Mantenerse de pie sobre un caballo al galope en línea recta es dificilísimo. En círculo, en cambio, aparece una ayuda: al girar, el jinete tiende a salir despedido hacia fuera, y esa tendencia lo aprieta contra el lomo del animal, que además va inclinado hacia el centro. La fuerza depende de la velocidad y del radio, así que hay un tamaño en el que todo encaja: si el círculo es muy grande, la ayuda desaparece; si es muy pequeño, el caballo no puede galopar cómodo. El punto justo está en unos trece metros de diámetro, y ahí se quedó.",
        destacado: { tipo: "cifra", cifra: "13", unidad: "metros de diámetro tiene la pista" },
      },
      {
        rotulo: "La medida heredada",
        texto:
          "Aquel hombre no publicó ninguna fórmula: lo encontró probando, ajustando la cuerda con la que marcaba el círculo en la hierba hasta que sus alumnos dejaban de caerse. Cuando otros copiaron el espectáculo copiaron también la medida, y cuando el circo saltó a Francia, a Rusia y a América lo hizo con la pista ya fijada. Hoy los edificios estables de circo del mundo entero, construidos en países distintos y en siglos distintos, tienen todos una pista casi idéntica, con una valla baja alrededor y el suelo de serrín o de arena para amortiguar las caídas.",
        destacado: { tipo: "frase", frase: "Nadie calculó la medida: la encontró probando con una cuerda." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una consecuencia práctica que sigue mandando: como la pista es igual en todas partes, un número de caballos ensayado en un país funciona sin cambios en cualquier otro, y las compañías se contratan entre sí sabiendo que no habrá sorpresas. Quedó también la palabra, porque circo significa círculo. Y quedó el orden del espectáculo: aquel sargento intercalaba entre sus galopadas a un payaso y a unos acróbatas para que el público descansara y los caballos también, y esa alternancia de números cortos y contrastados es exactamente la estructura que se sigue usando dos siglos y medio después.",
      },
    ],
  },

  {
    id: "circo-de-tres-pistas",
    titulo: "Tres pistas y ninguna se veía",
    gancho: "Ocurrían tres cosas a la vez y nadie podía seguirlas todas. Ese era exactamente el negocio.",
    categoria: "Circo",
    color: "var(--slate)",
    encargo: "Una carpa enorme por dentro, con tres pistas iluminadas y las gradas llenas.",
    entrada:
      "Estados Unidos, década de 1880. Los circos ambulantes han crecido tanto que las carpas albergan a diez mil espectadores, y aparece un problema físico: desde la última fila no se ve a un acróbata pequeño ni se oye a un payaso. La solución de los empresarios no fue reducir el aforo, sino multiplicar el escenario: tres pistas funcionando a la vez.",
    paginas: [
      {
        rotulo: "Todo a la vez",
        texto:
          "En una carpa de tres pistas siempre había algo delante de cada espectador, así que nadie se quedaba mirando un punto lejano. El precio era evidente y a los artistas les dolía: nadie veía el número entero de nadie, y un truco difícil que había costado años de ensayo pasaba desapercibido porque a diez metros un elefante estaba haciendo otra cosa. Los circos europeos, con pista única y edificios más pequeños, siguieron defendiendo lo contrario. La rivalidad entre las dos escuelas dura hasta hoy y separa el circo de espectáculo del circo de artista.",
        destacado: { tipo: "frase", frase: "Nadie veía el número entero, y ese era el modelo." },
      },
      {
        rotulo: "El tren de noche",
        texto:
          "Aquello solo funcionaba con una máquina logística descomunal. El circo grande viajaba en su propio tren de más de sesenta vagones, llegaba de madrugada a una ciudad, descargaba con rampas y caballos de tiro, levantaba una carpa de cuatro mil metros cuadrados en unas horas, daba dos funciones y volvía a cargarlo todo esa misma noche. Los movimientos estaban cronometrados y escritos, cada hombre tenía un puesto asignado en el montaje y las lonas se plegaban siempre en el mismo orden. Varias escuelas de ingeniería industrial estudiaron aquellos métodos para aplicarlos a las fábricas, y algunos manuales de organización del trabajo los citan todavía.",
        destacado: { tipo: "cifra", cifra: "60", unidad: "vagones de tren movían un circo grande" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una expresión inglesa que se usa a diario sin saber de dónde viene: llamar a una situación caótica un circo de tres pistas, es decir, demasiadas cosas ocurriendo a la vez para poder atender a ninguna. El modelo se hundió a partir de los años cincuenta por la televisión, por el coste del tren y por el cambio de sensibilidad hacia los animales, y el último gran circo americano de este tipo cerró en 2017. Los circos actuales han vuelto a la pista única de trece metros, con un solo número cada vez y todo el público mirando al mismo sitio.",
      },
    ],
  },

  {
    id: "hombre-bala",
    titulo: "El cañón no dispara pólvora",
    gancho: "El estruendo y el humo son teatro. Lo que lo lanza es un muelle o aire comprimido.",
    categoria: "Circo",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un cañón de circo pintado de rojo apuntando hacia arriba, con una red al fondo.",
    entrada:
      "Londres, 1877. En un espectáculo se presenta un número nuevo: una acróbata de catorce años se mete en la boca de un cañón, suena una detonación, sale humo y ella sale despedida por el aire hasta caer en unos brazos al otro lado de la sala. El público entiende que la ha disparado la pólvora. La pólvora, en realidad, no toca a la chica en ningún momento.",
    paginas: [
      {
        rotulo: "El muelle escondido",
        texto:
          "Dentro del tubo hay una plataforma montada sobre un muelle enorme comprimido con un torno, o en las versiones modernas sobre un pistón que empuja aire comprimido. El artista se coloca de pie sobre esa plataforma, con las piernas flexionadas y los brazos pegados al cuerpo. Al soltar el seguro, la plataforma sube por el tubo y lo lanza. La carga de pólvora está aparte, en un compartimento separado, y solo sirve para producir el ruido y el humo en el momento exacto: es un efecto de teatro sincronizado con el disparo real, que es silencioso.",
        destacado: { tipo: "frase", frase: "La pólvora solo hace el ruido. El empujón es un muelle." },
      },
      {
        rotulo: "Los primeros metros",
        texto:
          "La parte peligrosa no es el vuelo, que sigue una curva perfectamente calculable, sino la aceleración dentro del tubo: el cuerpo pasa de cero a más de setenta kilómetros por hora en una fracción de segundo, sometido a una fuerza de varias veces su propio peso, y muchos artistas pierden brevemente la visión periférica al salir. Por eso lo esencial es la postura y la salida limpia. La caída se hace en una red o en un colchón grande, y el punto de llegada se ensaya antes lanzando un maniquí del mismo peso hasta que cae en el sitio exacto.",
        destacado: { tipo: "cifra", cifra: "70", unidad: "kilómetros por hora alcanza al salir" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un número que sigue haciéndose en circos y en ferias, con marcas de más de cuarenta metros de distancia, y una estadística incómoda: es de los más letales del oficio, y la mayoría de los accidentes graves no ocurren en el aire, sino por fallar la red. Y quedó una lección de espectáculo que vale para casi todo lo demás: el humo y el estruendo, que son lo único que el público asocia con el peligro, son precisamente la parte inofensiva del asunto. Lo que de verdad puede matar es un muelle silencioso y una red mal colocada.",
      },
    ],
  },
];
