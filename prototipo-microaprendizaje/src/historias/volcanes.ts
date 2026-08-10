import type { Short } from "../shorts";

/* ==========================================================================
   Volcanes.

   El riesgo del tema es el documental de sobremesa: columnas de humo,
   cifras de muertos y adjetivos. Impresiona diez segundos y no queda nada.

   La regla del tema: un volcán solo interesa por lo que le hace a la gente
   que vive alrededor y, sobre todo, POR LO QUE PASA DESPUÉS Y LEJOS. Una
   cosecha perdida a diez mil kilómetros. Un verano que no llega. Un
   campesino que intenta tapar una grieta con ramas. La montaña es el
   principio de la historia, nunca el final.

   Y no se cuenta la erupción como espectáculo: se cuenta como una cadena
   de consecuencias que va del suelo al aire y del aire a la mesa.
   ========================================================================== */

export const VOLCANES: Short[] = [
  {
    id: "tambora-ano-sin-verano",
    titulo: "El año que no hubo verano",
    gancho: "Reventó en Indonesia en 1815. Al año siguiente nevó en junio al otro lado del planeta.",
    categoria: "Volcanes",
    color: "var(--slate)",
    encargo: "Un cielo cargado de ceniza sobre un campo de trigo verde y helado.",
    fotos: [
      {
        archivo: "Mount Tambora Volcano, Sumbawa Island, Indonesia.jpg",
        autor: "El cráter del Tambora, en la isla de Sumbawa, visto desde la Estación Espacial. Mide seis kilómetros de boca. NASA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Mount_Tambora_Volcano,_Sumbawa_Island,_Indonesia.jpg",
        foco: "50% 45%",
        alt: "Un cráter enorme y redondo visto desde arriba, con las paredes en sombra y el fondo llano.",
      },
      {
        archivo: "Raikoke Volcano Erupts (48132762546).jpg",
        autor: "Una columna de ceniza saliendo del volcán Raikoke, fotografiada desde la Estación Espacial en 2019. NASA.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Raikoke_Volcano_Erupts_(48132762546).jpg",
        foco: "50% 40%",
        alt: "Una columna de ceniza gris subiendo desde una isla y aplastándose al llegar arriba, vista desde el espacio.",
      },
      {
        archivo: "Conservation Help Continues After Winter Storm Atlas (11948327154).jpg",
        autor: "Nieve sobre el pasto fuera de temporada. Departamento de Agricultura de Estados Unidos.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Conservation_Help_Continues_After_Winter_Storm_Atlas_(11948327154).jpg",
        foco: "50% 50%",
        alt: "Un campo abierto cubierto de nieve con la hierba asomando.",
      },
      {
        archivo: "Ash Plume over Australia (MODIS 2022-01-19).jpg",
        autor: "La ceniza de una erupción extendiéndose por la atmósfera durante días, vista por el satélite Aqua. NASA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Ash_Plume_over_Australia_(MODIS_2022-01-19).jpg",
        foco: "50% 50%",
        alt: "Una mancha de ceniza extendida sobre el mar y las nubes, vista desde un satélite.",
      },
    ],
    entrada:
      "Isla de Sumbawa, en la actual Indonesia, abril de 1815. Un volcán que llevaba siglos tranquilo revienta con la mayor explosión de la que hay registro escrito. Se oye a dos mil kilómetros de distancia, mata a decenas de miles de personas en pocos días y lanza a la atmósfera tanta ceniza que el cielo se oscurece durante semanas. Pero lo que sube más alto no es la ceniza, que cae en unos días, sino un gas que se queda flotando a doce kilómetros de altura. Ese gas va a dar la vuelta al mundo y a arruinar la cosecha del año siguiente en tres continentes. En junio nevó al otro lado del Atlántico y el precio del trigo se triplicó, y nadie relacionó entonces las dos cosas.",
    paginas: [
      {
        rotulo: "La explosión",
        texto:
          "La montaña se llamaba Tambora y había estado dormida tanto tiempo que en sus laderas había pueblos, cultivos y un pequeño reino con su propio idioma. Medía más de cuatro mil metros; después de aquello medía mil quinientos menos, porque se voló a sí misma la cumbre. Cayó tanta ceniza sobre las islas vecinas que hundió los tejados, y una ola provocada por el derrumbe barrió las costas cercanas. En la isla no quedó nada en pie: aquel reino desapareció entero, con su lengua incluida, y hoy se conoce solo por una lista de palabras que un marino había anotado años antes por curiosidad.",
        destacado: { tipo: "cifra", cifra: "1.500", unidad: "metros de montaña desaparecieron" },
      },
      {
        rotulo: "El año sin verano",
        texto:
          "La ceniza más fina subió a la parte alta de la atmósfera y dio la vuelta al planeta, filtrando la luz del sol durante meses. El verano siguiente, el de 1816, no llegó. En junio nevó en el noreste de Estados Unidos, en agosto se helaron las cosechas y en Europa llovió sin parar de mayo a septiembre. Se perdieron a la vez el trigo, el maíz y la patata, el pan se puso por las nubes y hubo motines de hambre en Francia, en Suiza y en las islas británicas. Fue la última gran hambruna del continente europeo, y nadie relacionó entonces aquel frío con una montaña del otro lado del mundo.",
        destacado: { tipo: "frase", frase: "En junio nevó, y en agosto se helaron las cosechas." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel verano sin sol dejó un rastro extraño. Un grupo de ingleses que veraneaba junto a un lago suizo se pasó las tardes encerrado por la lluvia y, para entretenerse, se retaron a escribir historias de miedo: de allí salió Frankenstein. En Alemania, la falta de avena para alimentar a los caballos empujó a un inventor a construir un artilugio de dos ruedas con el que moverse sin animal, el abuelo de la bicicleta. Y la relación entre los volcanes y el clima tardó un siglo en entenderse. Hoy el año 1816 se estudia como el ensayo que hizo la naturaleza de lo que pasaría si el cielo se cubriera de golpe.",
      },
    ],
  },

  {
    id: "paricutin",
    titulo: "Un volcán en el maizal",
    gancho: "Vio salir humo de una grieta mientras araba. En un año la montaña pasaba de trescientos metros.",
    categoria: "Volcanes",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una torre de iglesia asomando sola sobre un campo de roca negra.",
    fotos: [
      {
        archivo: "San Juan Parangaricutiro, iglesia 03.jpg",
        autor: "La torre de la iglesia de San Juan Parangaricutiro asomando sobre la colada del Parícutin, Michoacán. Fotografía de LBM1948, 2013.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:San_Juan_Parangaricutiro,_iglesia_03.jpg",
        foco: "50% 50%",
        alt: "Un campanario de piedra emergiendo de un mar de roca volcánica negra en el que ya crecen arbustos.",
      },
      {
        archivo: "Parícutin 1.jpg",
        autor: "El cono del volcán Parícutin, nacido en un maizal en 1943. Fotografía de LBM1948, 2013.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Par%C3%ADcutin_1.jpg",
        foco: "50% 50%",
        alt: "Un cono volcánico oscuro y pelado levantándose sobre el campo, con el cráter recortado arriba.",
      },
      {
        archivo: "Parícutin 3.jpg",
        autor: "Colada de lava solidificada del Parícutin, con la vegetación ganando terreno. Fotografía de LBM1948, 2013.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Par%C3%ADcutin_3.jpg",
        foco: "50% 50%",
        alt: "Un campo de bloques de lava negra y rota que se extiende hasta el pie del volcán.",
      },
      {
        archivo: "San Juan Parangaricutiro, vistas 5.jpg",
        autor: "Las ruinas de San Juan Parangaricutiro entre la roca, hoy visitadas a diario. Fotografía de LBM1948, 2013.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:San_Juan_Parangaricutiro,_vistas_5.jpg",
        foco: "50% 50%",
        alt: "Restos del muro y el altar de la iglesia sepultada, rodeados de lava endurecida.",
      },
    ],
    entrada:
      "Michoacán, en el centro de México, febrero de 1943. Un campesino está arando su maizal cuando el suelo se abre delante de él con un ruido sordo y empieza a salir humo con olor a azufre por la grieta. Aquella misma tarde la grieta escupe piedras ardiendo, y a la mañana siguiente hay un montículo donde antes había siembra. Es el único volcán del mundo cuyo nacimiento vio y contó alguien desde el primer minuto, y por eso los geólogos llegaron a tiempo de medirlo todo desde cero, cosa que no había pasado nunca.",
    paginas: [
      {
        rotulo: "La grieta",
        texto:
          "El hombre intentó taparla con tierra y ramas, porque pensó que era cosa de un rato y le estaba estropeando la siembra. A la mañana siguiente tenía en mitad del campo un montículo de dos metros que escupía ceniza. A la semana medía cincuenta metros; al mes, ciento cincuenta. El estruendo se oía a treinta kilómetros y de noche el resplandor se veía desde la ciudad más cercana. Los geólogos llegaron enseguida desde varios países, plantaron sus tiendas alrededor y se encontraron con algo que nunca habían tenido delante: un volcán entero naciendo, con fecha y hora exactas de comienzo, y a una distancia desde la que se podía medir sin peligro.",
        destacado: { tipo: "frase", frase: "Intentó tapar la grieta con tierra y ramas." },
      },
      {
        rotulo: "Nueve años",
        texto:
          "Estuvo en erupción nueve años seguidos, de 1943 a 1952, casi sin descanso. La lava avanzaba despacio, a paso de persona, y por eso no mató prácticamente a nadie: hubo tiempo de sacar a la gente, a los animales y hasta las puertas y las vigas de las casas. Sepultó dos pueblos enteros bajo varios metros de piedra. De uno de ellos solo quedaron fuera la torre y parte de la fachada de la iglesia, que asoman todavía sobre un mar de roca negra como si el edificio se hubiera hundido en el suelo. Cuando se apagó, la montaña medía cuatrocientos veinticuatro metros y llevaba allí menos de una década.",
        destacado: { tipo: "cifra", cifra: "424", unidad: "metros de montaña en nueve años" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No ha vuelto a despertar, y hoy se sube caminando en un par de horas con guías del pueblo que colocan la torre de la iglesia en todas las fotografías. Al campesino que araba aquella mañana le compraron el terreno y se pasó los años siguientes cobrando la entrada a los curiosos que venían a ver su volcán. Para la geología aquello fue un regalo irrepetible: se pudo medir por primera vez cómo crece una montaña desde cero, cuánto material expulsa y a qué ritmo se enfría, datos que hasta entonces solo se deducían. Sigue siendo el volcán mejor documentado de la historia, y empezó como una grieta en un maizal.",
      },
    ],
  },

  {
    id: "laki",
    titulo: "Una grieta en Islandia envenenó media Europa",
    gancho: "Ocho meses soltando gas. Se murió el ganado, después la gente, y la niebla llegó hasta Italia.",
    categoria: "Volcanes",
    color: "var(--plum)",
    encargo: "Una llanura de musgo verde partida por una fisura larga y oscura.",
    entrada:
      "Islandia, junio de 1783. Se abre en el sur de la isla una grieta de veintisiete kilómetros y empieza a manar lava por más de un centenar de bocas a la vez. No es una explosión, es un desagüe: brota sin parar durante ocho meses y suelta a la atmósfera una cantidad descomunal de gases venenosos.",
    paginas: [
      {
        rotulo: "La niebla seca",
        texto:
          "Lo que mató no fue la lava, sino el aire. La erupción soltó millones de toneladas de compuestos de azufre y de flúor que formaron una neblina azulada con olor a huevo podrido, y ese flúor se depositó sobre la hierba de los pastos. El ganado que comía allí se hinchaba y se le caían los dientes. Murieron la mitad de las vacas y tres de cada cuatro ovejas y caballos del país. Sin animales no había leche, ni lana, ni carne, y detrás llegó el hambre: en dos años murió una de cada cinco personas de Islandia, la peor catástrofe de su historia.",
        destacado: { tipo: "cifra", cifra: "1 de cada 5", unidad: "islandeses murió en dos años" },
      },
      {
        rotulo: "El verano raro",
        texto:
          "Aquella neblina cruzó el mar y llegó a Noruega, a las islas británicas, a Francia y hasta a Italia, y la gente la llamó la niebla seca porque no se deshacía con el viento ni con la lluvia. El sol se veía rojo al mediodía y se podía mirar de frente sin daño. El verano fue asfixiante y el invierno siguiente, uno de los más fríos que se recuerdan en el continente. Un naturalista inglés anotó en su diario que el aire olía a azufre y que los segadores enfermaban del pecho; los estudios modernos calculan decenas de miles de muertes solo en Inglaterra por problemas respiratorios aquel año.",
        destacado: { tipo: "frase", frase: "El sol se veía rojo al mediodía y se podía mirar de frente." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las malas cosechas de aquellos años encarecieron el pan en Francia, y hay historiadores que las cuentan entre los ingredientes del malestar que estalló seis años más tarde en la Revolución; no fueron la causa, pero empujaron. En Islandia la situación llegó a ser tan desesperada que en Copenhague se discutió en serio evacuar la isla entera y llevarse a los supervivientes a Dinamarca. No se hizo. La grieta sigue donde estaba, cubierta hoy de un musgo verde y blando, y se puede recorrer andando: un tajo de veintisiete kilómetros que se abrió en el suelo y cambió el clima de un continente sin que nadie entendiera por qué.",
      },
    ],
  },
];
