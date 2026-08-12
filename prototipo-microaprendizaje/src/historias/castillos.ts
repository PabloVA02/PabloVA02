import type { Short } from "../shorts";

/* ==========================================================================
   Castillos.

   El riesgo del tema es la visita guiada: cada rincón con su explicación
   militar ingeniosa, la mitad inventadas en el siglo XIX cuando se puso
   de moda restaurarlos con más imaginación que documentos.

   La regla del tema: un castillo se cuenta como VIVIENDA Y COMO OBRA. Cien
   personas viviendo ahí durante años, con su agua, su basura y sus
   letrinas, y unos canteros que resuelven problemas de construcción. La
   guerra aparece pocas semanas cada muchos años.

   Y cuando una explicación popular no se sostiene, se dice por qué.
   ========================================================================== */

export const CASTILLOS: Short[] = [
  {
    id: "escaleras-de-caracol",
    titulo: "La escalera gira a derecha",
    gancho: "Se dice que era para favorecer al defensor diestro. La explicación es más floja de lo que parece.",
    categoria: "Castillos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una escalera de caracol de piedra vista desde abajo, con el eje central gastado.",
    fotos: [
      {
        archivo: "SpiralStairs CaernarfonCastle.jpg",
        autor: "Escalera de caracol del castillo de Caernarfon, en Gales. Fotografía de Martinvl, 2016.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:SpiralStairs_CaernarfonCastle.jpg",
        foco: "48% 58%",
        alt: "Peldaños de piedra cubiertos de musgo girando alrededor de un eje central, con una cuerda a modo de pasamanos.",
      },
      {
        archivo: "Albion Soeborg Medieval Sword 13 (8499204550).jpg",
        autor: "Empuñadura y cruz de una espada medieval, en una reproducción moderna. Fotografía de Søren Niedziella.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Albion_Soeborg_Medieval_Sword_13_(8499204550).jpg",
        foco: "50% 50%",
        alt: "El puño de cuero y la cruz de acero de una espada, apoyada en diagonal sobre un fondo blanco.",
      },
      {
        archivo: "Chinon (Indre-et-Loire) (22415606670).jpg",
        autor: "Una torre del castillo de Chinon, en el valle del Loira. Fotografía de Daniel Jolivet, 2015.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Chinon_(Indre-et-Loire)_(22415606670).jpg",
        foco: "38% 50%",
        alt: "Una torre redonda de sillería dorada con una saetera estrecha, junto al foso y la muralla.",
      },
      {
        archivo: "Krak des Chevaliers, NW Syria - 3.jpg",
        autor: "El Krak de los Caballeros, en el noroeste de Siria. Fotografía de James Gordon, 2008.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Krak_des_Chevaliers,_NW_Syria_-_3.jpg",
        foco: "50% 42%",
        alt: "Un castillo enorme de torres redondas sobre una loma pelada, con el talud inclinado cayendo hacia el valle.",
      },
    ],
    entrada:
      "Europa, siglos XII a XV. Las torres de los castillos se suben por escaleras de caracol estrechas, con los peldaños empotrados en un eje central de piedra, y casi siempre con giro a la derecha para el que sube. La explicación que se repite en todas las visitas guiadas del continente es la misma: el giro se eligió para favorecer al defensor, que baja y tiene sitio de sobra para mover el brazo derecho, mientras que el atacante que sube se encuentra la columna pegada al brazo de la espada. Suena convincente, se cuenta con mucha seguridad y conviene mirarla despacio.",
    paginas: [
      {
        rotulo: "El argumento",
        texto:
          "El razonamiento es este: en una escalera que gira a la derecha subiendo, el eje central de piedra queda a la derecha del que sube, así que un atacante diestro tiene la columna pegada al brazo de la espada, mientras que el defensor que baja tiene el hueco abierto a su derecha. Hay documentos tardíos que lo mencionan y castillos donde encaja bien. El problema es que también hay bastantes torres con giro a la izquierda, en las mismas zonas y en las mismas fechas, sin ninguna diferencia militar que las distinga de las otras.",
        destacado: { tipo: "frase", frase: "También hay torres con el giro al revés, en las mismas fechas." },
      },
      {
        rotulo: "Las otras razones",
        texto:
          "Los historiadores de la construcción apuntan a motivos más prosaicos. El sentido del giro depende de por dónde entra la escalera en la torre y de cómo encaja con las plantas y con la puerta de acceso, y esas dos cosas mandan sobre cualquier consideración táctica. Además, la mayoría de los canteros trabajaba con plantillas heredadas y repetía lo que sabía hacer sin darle vueltas. Y hay un detalle práctico decisivo: una escalera de caracol es incomodísima para pelear en cualquier sentido, y en un asedio lo que importaba era el muro exterior.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "sentidos de giro, los dos existen" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El caso es un buen ejemplo de algo que pasa mucho con los castillos: cada rincón tiene una explicación militar ingeniosa contada por un guía, y buena parte de esas explicaciones se inventaron en el siglo XIX, cuando el castillo medieval se convirtió en un asunto romántico y se restauraron a docenas con más imaginación que documentación. Lo que sí está probado de aquellas escaleras es lo evidente: son estrechas porque ocupan poco, se apoyan en un eje central de piedra y permiten subir mucha altura en muy poco espacio.",
      },
    ],
  },

  {
    id: "letrinas-y-foso",
    titulo: "El foso casi siempre seco",
    gancho: "Y la letrina desaguaba por fuera del muro, justo en la zona que nadie quería escalar.",
    categoria: "Castillos",
    color: "var(--slate)",
    encargo: "Un cubículo de piedra saliente colgado en lo alto de una muralla exterior.",
    fotos: [
      {
        archivo: "Caerphilly Castle, The moat - geograph.org.uk - 6893360.jpg",
        autor: "El foso inundado de Caerphilly, en Gales, uno de los pocos que sí llevaba agua. Fotografía de Michael Garlick.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Caerphilly_Castle,_The_moat_-_geograph.org.uk_-_6893360.jpg",
        foco: "50% 45%",
        alt: "Muralla de piedra larga y baja junto a una lámina de agua, bajo un cielo cargado de nubes.",
      },
      {
        archivo: "Trenčín Castle 45.jpg",
        autor: "Murallas y torres del castillo de Trenčín, en Eslovaquia. Fotografía de Scotch Mist.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Tren%C4%8D%C3%ADn_Castle_45.jpg",
        foco: "50% 50%",
        alt: "Muros de piedra de un castillo medieval sobre la roca, con torres y ventanas estrechas.",
      },
      {
        archivo: "East dry moat of Nagoya Castle.jpg",
        autor: "Foso seco en el lado este del castillo de Nagoya, en Japón.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:East_dry_moat_of_Nagoya_Castle.jpg",
        foco: "50% 50%",
        alt: "Zanja ancha y profunda sin agua, cubierta de hierba, al pie de un muro de piedra.",
      },
      {
        archivo: "Carcassonne walls tower.jpg",
        autor: "Murallas y torres de la ciudad fortificada de Carcasona, en Francia.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Carcassonne_walls_tower.jpg",
        foco: "50% 50%",
        alt: "Doble muralla medieval con torres redondas de tejado cónico y el foso seco entre ellas.",
      },
    ],
    entrada:
      "Europa, siglo XIII. Un castillo es antes que nada un edificio donde vive gente durante años seguidos, no solo un decorado de asedio con banderas al viento. Eso obliga a resolver cosas muy poco épicas: dónde duermen cien personas, de dónde sale el agua limpia, dónde va la basura y qué se hace, día tras día, con los excrementos de toda la guarnición. Las dos respuestas que dio la Edad Media a esa última pregunta explican dos de las partes del castillo que todo el mundo cree conocer y casi nadie entiende bien.",
    paginas: [
      {
        rotulo: "La letrina",
        texto:
          "La solución era un cubículo saliente colgado del muro exterior, con un asiento de piedra o de madera y un conducto que caía directamente a la base de la muralla o al foso. Se colocaba en el lado menos visible, se aprovechaba el hueco entre dos contrafuertes y solía haber varias repartidas por las torres. La habitación se llamaba con un nombre que significa guardarropa, porque la ropa buena se colgaba justamente allí: se creía que el olor a amoniaco espantaba a las polillas, y por lo visto funcionaba bastante bien.",
        destacado: { tipo: "frase", frase: "La ropa buena se guardaba allí, contra las polillas." },
      },
      {
        rotulo: "El foso",
        texto:
          "El foso, mientras tanto, no era casi nunca un canal de agua con peces dentro. Lo habitual era una zanja seca, ancha y profunda, con las paredes muy inclinadas, cuya función principal no era ahogar a nadie sino impedir que se acercaran las torres de asalto y, sobre todo, que se pudieran excavar túneles por debajo del muro. Un foso con agua exige un río cerca, filtra a los cimientos y se convierte en un problema sanitario serio, sobre todo con las letrinas desaguando justo encima. Los pocos que sí llevaban agua estaban casi siempre en terreno llano y junto a un cauce.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "conducto salía fuera del muro" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Todo esto se ve mejor en las ruinas que en los castillos restaurados, porque en el siglo XIX se rehicieron muchos con criterios estéticos y se quitaron precisamente las partes menos elegantes. Quedan cientos de conductos de letrina abiertos en muros de media Europa, que los arqueólogos aprecian muchísimo: debajo, en la base del muro, se acumularon durante siglos huesos, semillas, restos de parásitos y objetos caídos del bolsillo, y de ese montón sale más información sobre qué comía y cómo vivía la gente del castillo que de cualquier crónica escrita de la época.",
      },
    ],
  },

  {
    id: "guerra-de-minas",
    titulo: "Los asedios, por debajo",
    gancho: "Se cavaba un túnel bajo la muralla, se apuntalaba con madera engrasada y se le prendía fuego.",
    categoria: "Castillos",
    color: "var(--clay)",
    encargo: "Una galería estrecha de tierra apuntalada con maderos, iluminada por una antorcha.",
    entrada:
      "Europa y Oriente Próximo, siglos XII a XVI. Un castillo bien abastecido puede resistir meses de asedio, y asaltar un muro por fuera cuesta muchísimas bajas. Así que la manera más eficaz de tumbarlo no era subir sino excavar: llegar por debajo de la muralla con un túnel y conseguir que se derrumbara sola por su propio peso.",
    paginas: [
      {
        rotulo: "El apuntalado",
        texto:
          "El procedimiento estaba muy afinado. Los zapadores excavaban una galería desde fuera del alcance de las flechas hasta situarse debajo de una torre o de un tramo de muro, ensanchaban allí una cámara y la sostenían con puntales de madera gruesos, untados de grasa de cerdo. Después llenaban la cámara de leña y de paja, prendían fuego y salían corriendo por donde habían venido. Al arder los puntales, el techo cedía y la torre se venía abajo sin que nadie tuviera que escalar nada. En un asedio inglés de 1215 hicieron falta cuarenta cerdos.",
        destacado: { tipo: "cifra", cifra: "40", unidad: "cerdos para engrasar los puntales" },
      },
      {
        rotulo: "Los cuencos",
        texto:
          "Los defensores tenían su respuesta. Colocaban cuencos con agua repartidos por el suelo del patio y a lo largo del muro, y vigilaban las ondas de la superficie: la vibración de un pico trabajando bajo tierra las agita de una forma reconocible, y por dónde se agitan más se deduce la dirección del túnel. Entonces excavaban una contramina para salir al encuentro del enemigo, y lo que ocurría al abrirse los dos túneles era un combate a oscuras, en un espacio donde no cabe una espada larga, con puñales y con mucho humo.",
        destacado: { tipo: "frase", frase: "Vigilaban las ondas de unos cuencos de agua en el suelo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Cuando llegó la artillería de pólvora aquello dejó de compensar frente a un muro alto, pero la técnica no desapareció en absoluto: se cambió la leña por explosivos y se siguió usando en las guerras modernas. En la Primera Guerra Mundial se excavaron túneles bajo las trincheras enemigas durante meses, y en 1917 se hicieron estallar diecinueve minas a la vez bajo una cresta belga; la explosión se oyó en Londres y dejó cráteres que todavía hoy son lagunas. La idea es la misma que en 1215: el suelo del enemigo también es una puerta.",
      },
    ],
  },
];
