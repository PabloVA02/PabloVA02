import type { Short } from "../shorts";

/* ==========================================================================
   Los jardines.

   Un jardín parece lo contrario de la política y de la economía, y ha sido
   las dos cosas: una declaración sobre cómo debe ser el mundo y, en algunos
   casos, una operación industrial encubierta.

   La regla del tema: se cuenta QUIÉN PAGA Y PARA QUÉ. Un jardín cuesta una
   fortuna en tierra, agua y jornales, así que detrás de cada uno hay una
   intención. Nada de descripciones de flores: se cuenta el dinero, el poder
   o la ciencia que hay debajo del césped.
   ========================================================================== */

export const JARDINES: Short[] = [
  {
    id: "jardin-ingles-y-frances",
    titulo: "Dos formas de jardín, dos ideas del mundo",
    gancho: "Uno recorta la naturaleza en líneas rectas. El otro la finge salvaje, y le cuesta más trabajo.",
    categoria: "Jardines",
    color: "var(--slate)",
    encargo: "Un seto recortado en línea recta junto a una pradera ondulada con árboles sueltos.",
    entrada:
      "Europa, siglos XVII y XVIII. El jardín de moda es el francés: avenidas rectas, setos recortados con escuadra, estanques geométricos y estatuas colocadas en los ejes. Todo se ve de un vistazo desde la ventana del palacio y todo obedece. Un siglo después, en Inglaterra, se impone justo lo contrario, y el cambio no es solo de gusto.",
    paginas: [
      {
        rotulo: "La escuadra",
        texto:
          "El jardín geométrico es una declaración: la naturaleza, sometida por la razón y por el propietario. Exige un ejército de jardineros recortando setos con tijeras varias veces al año, un sistema de conducción de agua para las fuentes y una superficie llana que muchas veces hubo que fabricar moviendo tierra. Sus perspectivas están calculadas para verse desde un punto concreto, normalmente la ventana del dueño, de modo que el orden del jardín solo es perfecto desde donde él mira. Costaba lo que un edificio y se enseñaba a las visitas como se enseña una biblioteca.",
        destacado: { tipo: "frase", frase: "El orden del jardín solo era perfecto desde la ventana del dueño." },
      },
      {
        rotulo: "El desorden caro",
        texto:
          "El jardín paisajista inglés propone lo contrario: praderas onduladas, grupos de árboles aparentemente casuales, lagos con la orilla irregular y ninguna línea recta a la vista. Parece campo, y ahí está la trampa. Para conseguirlo se movieron colinas enteras, se desviaron ríos, se plantaron bosques de golpe y en varios casos se derribaron aldeas enteras que estropeaban la vista, realojando a sus vecinos más lejos. Se inventó además un foso hundido que hace de valla sin verse, para que el ganado no entre y el paisaje parezca continuar hasta el horizonte.",
        destacado: { tipo: "cifra", cifra: "XVIII", unidad: "el siglo del jardín que finge ser campo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron las dos escuelas y la discusión sigue viva cada vez que se diseña un parque público. Del francés vienen los paseos con arbolado alineado y las plazas simétricas de media Europa; del inglés, casi todos los grandes parques urbanos del mundo, con sus praderas, sus grupos de árboles y sus caminos curvos, que imitan un campo que nunca existió. Y quedó la paradoja que los separa: el jardín que parece obra del hombre se conseguía con tijeras, y el que parece obra de la naturaleza se conseguía moviendo colinas.",
      },
    ],
  },

  {
    id: "el-jardin-que-robo-el-caucho",
    titulo: "Un jardín botánico se llevó el caucho de Brasil",
    gancho: "Setenta mil semillas salieron del Amazonas en 1876. De ellas nacieron las plantaciones de medio mundo.",
    categoria: "Jardines",
    color: "var(--plum)",
    encargo: "Un invernadero de cristal antiguo lleno de plantas tropicales, visto desde fuera.",
    entrada:
      "Londres, 1876. Un jardín botánico real recibe un cargamento singular: setenta mil semillas de un árbol amazónico del que sale, al sangrar su corteza, un líquido lechoso que endurece en una goma elástica. Brasil tiene el monopolio mundial de ese producto y prohíbe exportar las semillas. Un explorador británico las ha sacado igualmente, declarándolas en la aduana como material científico.",
    paginas: [
      {
        rotulo: "El invernadero",
        texto:
          "De aquellas setenta mil semillas germinaron unas dos mil seiscientas, que se criaron en los invernaderos del jardín botánico y se embarcaron después, en cajas de cristal selladas que mantenían la humedad durante meses de travesía, hacia las colonias británicas del sudeste asiático. Allí el clima era parecido y, sobre todo, faltaba una cosa: el hongo que en América ataca a esos árboles cuando crecen juntos. Sin esa plaga podían plantarse en filas apretadas, como un cultivo cualquiera, en lugar de buscarlos uno a uno por la selva. Esa diferencia lo decide todo: un recolector amazónico caminaba kilómetros entre árboles dispersos, y un trabajador de plantación sangraba cientos de troncos sin salir de una parcela.",
        destacado: { tipo: "cifra", cifra: "70.000", unidad: "semillas salieron del Amazonas" },
      },
      {
        rotulo: "El hundimiento",
        texto:
          "Las plantaciones asiáticas empezaron a producir en serio hacia 1910, justo cuando el automóvil disparaba la demanda de neumáticos. En pocos años el precio se hundió y la economía amazónica del caucho, que había levantado ciudades enteras con teatros de ópera en mitad de la selva, se derrumbó por completo. Aquellas ciudades se quedaron a medias, con edificios de mármol traído de Europa y sin nadie que pagara el mantenimiento. En Brasil, el episodio se recuerda como uno de los grandes robos de la historia y el explorador es un ladrón con nombre y apellidos.",
        destacado: { tipo: "frase", frase: "La ópera en mitad de la selva se quedó sin quien la pagara." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una idea incómoda sobre los jardines botánicos: no eran solo colecciones de plantas bonitas ni centros de investigación desinteresada, sino piezas centrales de una economía imperial, con encargo explícito de sacar cultivos rentables de un sitio y aclimatarlos en otro donde el trabajo fuera más barato. Lo mismo se hizo con la quina, con el té y con el café. Y quedó el árbol: casi todos los que abastecen hoy las plantaciones asiáticas descienden de aquellas dos mil semillas germinadas en un invernadero de Londres, lo que las convierte en una familia enorme y peligrosamente parecida entre sí. Si el hongo americano llegara alguna vez a Asia, encontraría millones de árboles idénticos plantados en filas.",
      },
    ],
  },

  {
    id: "jardines-colgantes",
    titulo: "Los jardines colgantes quizá no estaban allí",
    gancho: "Son la única de las siete maravillas de la que no se ha encontrado un solo ladrillo.",
    categoria: "Jardines",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Terrazas escalonadas de piedra con plantas colgando, contra un cielo seco.",
    entrada:
      "Mesopotamia, siglo VI antes de Cristo. La lista clásica de las siete maravillas del mundo antiguo incluye unos jardines escalonados regados en mitad de una llanura seca, atribuidos a un rey de Babilonia que los habría mandado construir para consolar a su esposa, criada entre montañas. Es la única maravilla de la lista de la que no se ha encontrado nunca ningún resto.",
    paginas: [
      {
        rotulo: "El silencio",
        texto:
          "Las excavaciones en esa ciudad llevan más de un siglo y han sacado a la luz murallas, templos, calles y miles de tablillas de arcilla con contabilidad, cartas y crónicas, incluidas las obras que aquel rey mandó hacer, que él mismo se encargó de dejar bien documentadas. En ninguna aparecen los jardines. Tampoco los menciona ningún autor de la propia región. Las descripciones que tenemos son todas griegas y romanas, escritas cientos de años después por gente que nunca estuvo allí y que copiaba de fuentes anteriores perdidas. Un historiador que visitó la zona y describió la ciudad con detalle no dice una palabra de ellos.",
        destacado: { tipo: "frase", frase: "El rey documentó sus obras, y los jardines no están." },
      },
      {
        rotulo: "La otra ciudad",
        texto:
          "Una investigadora británica propuso en 2013 una explicación que ha ganado apoyo: los jardines existieron, pero en otra ciudad y con otro rey, unos cien kilómetros al norte y un siglo antes. De esa ciudad sí hay relieves tallados que muestran terrazas plantadas con árboles y un sistema de riego, y hay restos de un acueducto de piedra de ochenta kilómetros construido para llevarles agua, con una inscripción del rey explicando la obra. La confusión entre las dos ciudades sería antigua, porque los conquistadores posteriores llamaron a veces a la segunda con el nombre de la primera.",
        destacado: { tipo: "cifra", cifra: "80", unidad: "kilómetros de acueducto para regarlos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una duda razonable y una historia mejor que la de partida, con un acueducto que puede visitarse y unos relieves que se pueden mirar. Quedó también un recordatorio útil sobre cómo funcionan las listas famosas: las siete maravillas eran una guía turística griega, escrita para viajeros que hablaban griego y que solo visitaban el mundo que conocían, y ninguna incluía nada de China, de la India o de América. De las siete, seis han dejado piedras, restos identificados o descripciones de primera mano. La séptima sigue sin aparecer donde todo el mundo la busca, y puede que lleve dos mil años esperando cien kilómetros más al norte.",
      },
    ],
  },
];
