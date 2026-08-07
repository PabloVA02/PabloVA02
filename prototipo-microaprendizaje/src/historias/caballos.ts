import type { Short } from "../shorts";

/* ==========================================================================
   Caballos.

   El riesgo del tema es la estampa noble: la crin al viento, la lealtad,
   el vínculo entre hombre y animal. Bonito y hueco.

   La regla del tema: el caballo se cuenta como TECNOLOGÍA. Durante cuatro
   mil años fue el motor más potente disponible, y todo lo que se le
   colgó encima —el estribo, la silla, la herradura, el registro
   genealógico— cambió guerras, economías y experimentos científicos.

   Y cuando el animal parece hacer algo imposible, se cuenta cómo se
   averiguó lo que estaba pasando de verdad.
   ========================================================================== */

export const CABALLOS: Short[] = [
  {
    id: "caballo-que-contaba",
    titulo: "El caballo que contaba",
    gancho: "Daba con la pata el resultado exacto de una multiplicación. Leía la cara del que preguntaba.",
    categoria: "Caballos",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un caballo oscuro en un patio empedrado con una pizarra apoyada delante.",
    fotos: [
      {
        archivo: "Hans 1910.jpg",
        autor: "El caballo del que hablaba media Europa, fotografiado por Karl Krall en 1910.",
        licencia: "Dominio público",
        pdPorEdad: 1929,
        fuente: "https://commons.wikimedia.org/wiki/File:Hans_1910.jpg",
        foco: "50% 45%",
        alt: "Un caballo oscuro y lustroso, de pie sobre un patio adoquinado, mirando a la cámara.",
      },
      {
        archivo: "Hans zeigt Zahlen an.jpg",
        autor: "El animal señalando con el hocico una de las cifras puestas en el suelo. Fotografía de Karl Krall.",
        licencia: "Dominio público",
        pdPorEdad: 1929,
        fuente: "https://commons.wikimedia.org/wiki/File:Hans_zeigt_Zahlen_an.jpg",
        foco: "55% 55%",
        alt: "El caballo baja la cabeza hacia unas tarjetas con números colocadas sobre los adoquines.",
      },
      {
        archivo: "Dark horse eye (Unsplash).jpg",
        autor: "El ojo de un caballo de cerca. Fotografía de Jez Timms, Menorca, 2016.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Dark_horse_eye_(Unsplash).jpg",
        foco: "50% 50%",
        alt: "Primer plano del ojo de un caballo oscuro, con las pestañas y los pelos del flequillo cruzándolo.",
      },
      {
        archivo: "Horse December 2014-1.jpg",
        autor: "Retrato de un caballo lusitano. Fotografía de Alvesgaspar, Portugal, 2014.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Horse_December_2014-1.jpg",
        foco: "55% 45%",
        alt: "Cabeza de un caballo tordo de perfil contra una pared encalada, con la luz del atardecer.",
      },
    ],
    entrada:
      "Berlín, 1904. Un maestro jubilado exhibe en el patio de su casa, delante de quien quiera pasarse a verlo, a un caballo al que asegura haber enseñado aritmética como se le enseña a un niño. Le plantean una suma en voz alta o escrita en una pizarra y el animal golpea el suelo con la pata delantera el número exacto de veces, ni una más. Acierta con restas, con fracciones, con la hora que marca un reloj y hasta deletreando palabras mediante un código de golpes. No cobra entrada, y los periódicos empiezan a llamarlo el caballo que sabe contar.",
    paginas: [
      {
        rotulo: "La comisión",
        texto:
          "El caso llenó los periódicos de medio mundo y el ministerio de educación nombró una comisión con trece miembros, entre ellos un director de circo, un veterinario y varios profesores, que examinó al animal durante días y concluyó que no había truco ni señales deliberadas. El dueño no cobraba entrada y parecía sinceramente convencido de lo que decía. Un psicólogo joven pidió entonces revisarlo con un método distinto: no buscar el engaño, sino ir quitándole información al caballo pieza a pieza, una cada vez, y comprobar en qué momento exacto dejaba de acertar.",
        destacado: { tipo: "frase", frase: "Trece expertos lo examinaron y no encontraron truco." },
      },
      {
        rotulo: "La prueba",
        texto:
          "Encontró dos condiciones que lo cambiaban todo. El caballo fallaba si quien preguntaba no sabía la respuesta, y fallaba también si no podía verle la cara. Es decir, no estaba calculando: estaba leyendo a la persona. Al empezar a golpear con la pata, el que preguntaba se ponía tenso sin darse cuenta, y al llegar al número correcto relajaba la postura o cambiaba mínimamente la inclinación de la cabeza, y el animal paraba. Se comprobó que le bastaban movimientos de menos de un milímetro para acertar, y con una fiabilidad enorme.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "milímetro de movimiento le bastaba" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel caballo no sabía aritmética, pero era extraordinario en algo bastante más difícil de encontrar: detectar señales humanas involuntarias. El episodio dio nombre a un efecto que se estudia desde entonces en cualquier experimento con animales o con personas, y de ahí sale la costumbre de que quien realiza una prueba no conozca la respuesta esperada, para no transmitirla sin querer. Es la razón por la que los ensayos clínicos se hacen a ciegas. Todo empezó con un maestro jubilado que estaba convencido de haberle enseñado a su caballo a sumar en un patio.",
      },
    ],
  },

  {
    id: "tres-sementales",
    titulo: "Todos vienen de tres caballos",
    gancho: "Tres sementales importados hace tres siglos están en el árbol de cada purasangre vivo.",
    categoria: "Caballos",
    color: "var(--slate)",
    encargo: "Un libro de registro antiguo abierto con columnas de nombres escritos a pluma.",
    entrada:
      "Inglaterra, entre 1690 y 1730. Los criadores ingleses importan de Oriente Próximo y del norte de África varios caballos de razas locales, más ligeros y rápidos que los europeos, para cruzarlos con sus yeguas. Tres de aquellos sementales dejarán descendencia masculina ininterrumpida hasta hoy, y de ellos sale la raza entera de carreras.",
    paginas: [
      {
        rotulo: "El libro",
        texto:
          "En 1791 se publicó el primer registro genealógico de la raza, un libro donde se anotaba el padre y la madre de cada ejemplar, y desde entonces no se ha permitido cruzar con ningún caballo de fuera: para ser purasangre hay que descender de animales inscritos en ese libro. Es un club cerrado desde hace más de doscientos años. La consecuencia es que la variedad genética de la raza resulta estrechísima, y los estudios de ADN confirman que en torno al noventa y cinco por ciento de los machos descienden de uno solo de aquellos tres.",
        destacado: { tipo: "cifra", cifra: "95 %", unidad: "vienen de un solo padre" },
      },
      {
        rotulo: "El límite",
        texto:
          "Aquella selección funcionó espectacularmente durante siglo y medio: los tiempos de carrera fueron bajando sin parar, marca tras marca. Y después se pararon en seco. Los récords de las grandes carreras apenas han mejorado desde los años setenta, mientras que en el atletismo humano siguen cayendo, y hay bastante acuerdo en que la causa es esa base genética tan estrecha, sumada a que el animal ya está muy cerca de su límite físico. Cada temporada se pagan cifras enormes por los servicios de un semental campeón, que cubre más de cien yeguas al año.",
        destacado: { tipo: "frase", frase: "Los récords llevan medio siglo sin bajar." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La raza es hoy uno de los animales domésticos más registrados del planeta: cada ejemplar tiene su ascendencia documentada durante trescientos años, algo que no ocurre con casi ninguna otra especie, ni siquiera con las personas. Esa contabilidad obsesiva ha resultado ser un regalo para la genética, que la usa para estudiar cómo se transmiten los rasgos y qué le pasa a una población cuando se cierra. Aquellos tres caballos importados hace tres siglos siguen figurando, con su nombre, en el papel de cada purasangre que corre hoy en cualquier hipódromo del mundo.",
      },
    ],
  },

  {
    id: "estribo-guerra",
    titulo: "El estribo cambió la guerra",
    gancho: "Sin él, un jinete que embiste con la lanza se cae del caballo por el propio golpe.",
    categoria: "Caballos",
    color: "var(--plum)",
    encargo: "Un estribo de hierro colgando de una silla de montar de cuero gastado.",
    entrada:
      "Asia central, siglo IV. Aparece un objeto de aspecto humilde: un aro de metal colgado de la silla de montar donde meter el pie. Los caballos llevan miles de años domesticados y se monta desde hace más de mil, pero hasta ese momento el jinete se sostiene únicamente con las piernas y con su propio equilibrio.",
    paginas: [
      {
        rotulo: "El apoyo",
        texto:
          "La diferencia es puramente mecánica. Sin estribos, toda la fuerza que un jinete puede aplicar sale de sus brazos y de su cintura, porque si empuja fuerte contra algo, el empujón lo saca a él de la silla y lo tira al suelo. Con los pies apoyados en dos puntos firmes, el jinete queda solidario con el caballo y puede transmitir a la lanza el peso y la velocidad del animal entero, media tonelada lanzada al galope. También puede levantarse sobre los estribos para disparar con arco o para golpear con la espada sin perder el equilibrio.",
        destacado: { tipo: "frase", frase: "Con estribos, el que embiste es el caballo entero." },
      },
      {
        rotulo: "La lanza",
        texto:
          "El objeto se extendió despacio hacia el oeste y llegó a Europa alrededor del siglo VIII, unos cuatrocientos años después. Con él aparece la técnica de la lanza sujeta bajo el brazo y apoyada en el costado, que convierte al jinete en un proyectil y que es la imagen clásica del caballero medieval. Un historiador estadounidense sostuvo en 1962 que aquel invento explicaba el nacimiento del feudalismo entero, porque mantener a un guerrero con caballo y armadura exigía las rentas de varias aldeas. La tesis se ha discutido mucho y hoy casi nadie la acepta completa.",
        destacado: { tipo: "cifra", cifra: "400", unidad: "años tardó en llegar a Europa" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Lo que sí está claro es que un trozo de metal de dos palmos cambió lo que un hombre a caballo podía hacer, y que a partir de ahí la caballería pesada dominó los campos de batalla europeos durante ochocientos años, hasta que el arco largo, la pica y después la pólvora la fueron desmontando poco a poco. El estribo sigue colgando exactamente igual de cualquier silla de montar, con la misma forma y en el mismo sitio, y a nadie le llama la atención: es de esos objetos que se vuelven invisibles de tan obvios.",
      },
    ],
  },
];
