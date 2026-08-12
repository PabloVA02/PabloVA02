import type { Short } from "../shorts";

/* ==========================================================================
   La caza.

   La forma en que se alimentó nuestra especie durante casi toda su historia
   y que hoy es una actividad regulada y discutida. El tema se estropea si se
   convierte en debate moral: aquí se cuentan mecanismos y consecuencias.

   La regla del tema: se explica siempre LA TÉCNICA y a quién beneficiaba la
   norma, porque las leyes de caza han servido casi siempre para decidir
   quién puede comer carne. Con fechas, con penas y con datos de población
   animal, sin sermones en ninguna dirección.
   ========================================================================== */

export const CAZA: Short[] = [
  {
    id: "cazar-corriendo-detras",
    titulo: "Cazar corriendo detrás",
    gancho: "No corremos rápido, pero sudamos y no paramos. Un animal grande se sobrecalienta antes que nosotros.",
    categoria: "Caza",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una llanura seca con hierba alta y huellas marcadas en el polvo.",
    /* Los que cazan así, el animal parado a la sombra —que es justo lo que la
       técnica aprovecha—, la huella que hay que leer y la carrera larga en la
       que todavía se nota de qué estamos hechos. */
    fotos: [
      {
        archivo: "Bushmen of Kalahari.jpg",
        autor:
          "Cazadores san en el Kalahari, 2016. Es el pueblo del que los antropólogos documentaron esta forma de cazar. Fotografía de Amhogas.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Bushmen_of_Kalahari.jpg",
        foco: "50% 50%",
        alt: "Cuatro personas sentadas en el suelo seco de la sabana, con arcos y flechas al lado, hablando entre ellas.",
      },
      {
        archivo: "Kudu enjoying shade.jpg",
        autor:
          "Un kudú parado a la sombra. Un antílope corre el doble de rápido que un hombre, pero tiene que detenerse a soltar el calor y nosotros no. Fotografía de Sikolethu, 2019.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Kudu_enjoying_shade.jpg",
        foco: "55% 50%",
        alt: "Un antílope grande de rayas blancas y cuernos en espiral, quieto bajo un árbol seco de la sabana.",
      },
      {
        archivo: "Sand dune with animal track.JPG",
        autor:
          "El rastro de un animal cruzando una duna. Cuando la presa desaparece de la vista, esto es lo único que queda. Fotografía de Brocken Inaglory, 2007.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sand_dune_with_animal_track.JPG",
        foco: "50% 55%",
        alt: "La cresta de una duna naranja partiendo la imagen en luz y sombra, con una línea de huellas pequeñas bajando por la ladera.",
      },
      {
        archivo: "Maigua Ojeda 250km Atacama Crossing.jpg",
        autor:
          "Una corredora en la travesía de 250 kilómetros del desierto de Atacama, 2025. En carreras muy largas y con calor es donde el cuerpo humano compite de verdad. Fotografía de Carmen Vallejo López.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Maigua_Ojeda_250km_Atacama_Crossing.jpg",
        foco: "50% 55%",
        alt: "Una corredora con mochila y gorra avanza sola por un terreno de arena y roca, con una ladera desnuda al fondo.",
      },
    ],
    entrada:
      "Sur de África, con una técnica documentada por antropólogos desde el siglo XIX y estudiada a fondo en 2004. Un grupo de cazadores elige un antílope, lo levanta y lo sigue al trote durante horas bajo el sol del mediodía. No intentan alcanzarlo, porque es imposible: un antílope corre el doble de rápido que un hombre. Lo que hacen es impedirle descansar hasta que el animal se derrumba por calor. La persecución dura entre dos y cinco horas, y termina con el cazador acercándose andando a un antílope que ya no puede levantarse. Ningún otro animal grande caza así, y la razón está en el cuerpo humano.",
    paginas: [
      {
        rotulo: "El sudor",
        texto:
          "La ventaja humana es la refrigeración. Casi todos los mamíferos grandes se enfrían jadeando, y un animal que galopa no puede jadear a la vez, así que acumula calor con cada carrera y necesita parar a la sombra para soltarlo. Nosotros, en cambio, tenemos millones de glándulas de sudor repartidas por una piel casi sin pelo, de modo que nos enfriamos mientras seguimos moviéndonos. A eso se suman unas piernas con tendones elásticos que devuelven energía en cada zancada y un cuerpo erguido, que al mediodía recibe el sol solo en la cabeza y los hombros.",
        destacado: { tipo: "frase", frase: "El animal tiene que parar para enfriarse; nosotros no." },
      },
      {
        rotulo: "Seguir el rastro",
        texto:
          "La otra mitad de la técnica es intelectual, y según los que la practican resulta bastante más difícil que la parte de correr. Cuando el antílope desaparece entre la maleza hay que averiguar por dónde ha ido. Los cazadores leen huellas, ramas rotas y excrementos, pero sobre todo predicen adónde iría un animal asustado en ese terreno concreto. Los antropólogos que los han acompañado describen ese rastreo como un ejercicio continuo de hipótesis y comprobación, bastante parecido al método científico, solo que hecho a paso ligero y con cuarenta grados.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "horas persiguiendo sin parar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una hipótesis que explica bastante bien nuestro cuerpo, aunque sigue discutiéndose cuánto peso tuvo esta técnica frente a las trampas y las armas arrojadizas. Quedó también una consecuencia deportiva curiosa. En carreras muy largas y con calor, los mejores corredores humanos se acercan mucho a los caballos. En Gales se celebra cada año una prueba donde compiten unos contra otros, y alguna vez ha ganado una persona. Y quedó una idea incómoda para cualquiera que se mida en el gimnasio: lo nuestro nunca fue la velocidad, sino aguantar horas sin parar.",
      },
    ],
  },
  {
    id: "el-bosque-del-rey",
    titulo: "Un ciervo costaba los ojos",
    gancho: "Los bosques reales estaban reservados al rey, y las penas por matar un ciervo llegaron a la mutilación.",
    categoria: "Caza",
    color: "var(--slate)",
    encargo: "Un bosque cerrado de robles con una linde de piedras bajas.",
    fotos: [
      {
        archivo: "Ancient oak trees in Sherwood Forest - geograph.org.uk - 6356602.jpg",
        autor: "Robles centenarios en el bosque de Sherwood, Nottinghamshire, 2019. Fotografía de Phil Champion.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ancient_oak_trees_in_Sherwood_Forest_-_geograph.org.uk_-_6356602.jpg",
        foco: "50% 45%",
        alt: "Un camino de tierra entre dos robles enormes y retorcidos, con el bosque cerrado y verde alrededor.",
      },
      {
        archivo: "Cervus elaphus Luc Viatour 3.jpg",
        autor: "Ciervo común (Cervus elaphus) en el bosque de Freyr, cerca de Han-sur-Lesse, Bélgica. Fotografía de Luc Viatour, 2011.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cervus_elaphus_Luc_Viatour_3.jpg",
        foco: "50% 45%",
        alt: "Un ciervo macho con la cornamenta completa, de pie entre la hierba alta al borde de un bosque.",
      },
      {
        archivo: "An ancient oak tree in Sherwood Forest - geograph.org.uk - 6356877.jpg",
        autor: "Roble viejo apuntalado en el bosque de Sherwood, 2019. Fotografía de Phil Champion.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:An_ancient_oak_tree_in_Sherwood_Forest_-_geograph.org.uk_-_6356877.jpg",
        foco: "50% 55%",
        alt: "Un roble muy viejo de tronco hueco y ramas abiertas, rodeado de helechos.",
      },
      {
        archivo: "Major Oak (9504).jpg",
        autor: "El Major Oak de Sherwood, apuntalado con puntales de hierro y madera, 2014. Fotografía de Nilfanion.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Major_Oak_(9504).jpg",
        foco: "50% 45%",
        alt: "Un roble gigantesco con las ramas más largas sostenidas por postes, en medio de un claro del bosque.",
      },
    ],
    entrada:
      "Inglaterra, después de la conquista normanda de 1066. El nuevo rey declara enormes extensiones de bosque como reserva de caza propia, sometidas a una ley aparte que no es la ley común del reino. En esos territorios viven desde hace generaciones campesinos que sacan de allí la leña del invierno, los pastos del ganado y algún animal para la olla, y de un día para otro todo eso queda prohibido bajo penas que no se parecen a ninguna otra del país. La disputa por aquellos bosques duró siglo y medio y acabó cambiando el derecho inglés.",
    paginas: [
      {
        rotulo: "La ley del bosque",
        texto:
          "Aquella normativa protegía dos cosas: los animales de caza mayor y el bosque que los alimenta. Estaba prohibido matar un ciervo, pero también talar, roturar un campo o dejar suelto un perro grande sin mutilarle una pata para que no pudiera perseguir. Las penas fueron extremas durante décadas, con casos de ceguera y mutilación por matar un venado, y se juzgaban en tribunales especiales con sus propios funcionarios. En algún momento del siglo XII, cerca de un tercio del país estuvo sometido a ese régimen especial, con sus guardas y sus jueces propios.",
        destacado: { tipo: "cifra", cifra: "33", unidad: "por ciento del país, bosque real" },
      },
      {
        rotulo: "La reacción",
        texto:
          "La presión contra aquello fue constante y acabó en los documentos fundacionales del derecho inglés. Junto a la famosa carta de libertades de 1215 se aprobó, pocos años después, otra carta dedicada solo al bosque. Devolvió a la gente común los derechos de pasto y de leña, y abolió las penas de muerte y de mutilación por cazar. Es un texto mucho menos conocido y estuvo en vigor durante siete siglos, hasta bien entrado el siglo XX, lo que lo convierte en una de las leyes más longevas del país.",
        destacado: { tipo: "frase", frase: "Hubo una segunda carta, dedicada solo al bosque." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el furtivismo como conflicto social permanente, contado en baladas populares donde el héroe roba caza al rey para dársela a los pobres. Y quedó la idea de fondo: que la fauna pertenece a alguien. Hoy casi todos los países consideran la fauna silvestre un bien público gestionado por la administración, con licencias, cupos y vedas, en lugar de la propiedad privada de un noble. Quedaron también los propios bosques, que siguen ahí justamente porque durante siglos estuvieron protegidos para que un rey pudiera cazar en ellos dos semanas al año.",
      },
    ],
  },
  {
    id: "la-caza-que-paga-el-campo",
    titulo: "Sin caza sobran jabalíes",
    gancho: "Al desaparecer el lobo y el oso, la única cosa que regula ciertas poblaciones es la escopeta o el coche.",
    categoria: "Caza",
    color: "var(--plum)",
    encargo: "Una señal de tráfico de peligro por animales sueltos en una carretera de montaña.",
    entrada:
      "Europa occidental, con el problema creciendo desde los años ochenta del siglo XX. Los grandes depredadores fueron exterminados en casi todo el continente entre los siglos XVIII y XX, y el campo se ha vaciado de gente. En ese hueco, algunas especies adaptables se han multiplicado sin freno natural, y el jabalí es el caso más visible de todos.",
    paginas: [
      {
        rotulo: "Por qué crecen",
        texto:
          "El jabalí reúne todas las condiciones para explotar demográficamente. Come absolutamente de todo, se reproduce muy joven y tiene camadas grandes. Además, los inviernos suaves y los cultivos de maíz le dan comida abundante durante todo el año, incluso en la peor estación. Además ha perdido el miedo a las ciudades, donde encuentra contenedores llenos y ningún peligro. En varios países europeos las poblaciones se han multiplicado por diez en tres décadas. Las estimaciones se hacen a partir de las capturas, porque contar jabalíes directamente resulta imposible en un bosque cerrado.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "veces más jabalíes en tres décadas" },
      },
      {
        rotulo: "La factura",
        texto:
          "Las consecuencias se pagan en dinero y en accidentes. Los daños a cultivos se cuentan por decenas de millones de euros al año en varios países, y los choques con vehículos suman decenas de miles, con víctimas humanas incluidas. A eso se añade el riesgo sanitario, porque una población densa facilita la transmisión de enfermedades como la peste porcina africana, que puede arruinar la ganadería de un país entero. Por eso muchas administraciones organizan batidas de control y contratan a cazadores locales, incluso en zonas donde la caza deportiva está mal vista.",
        destacado: { tipo: "frase", frase: "Los choques con vehículos se cuentan por decenas de miles al año." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una situación incómoda para todos los bandos. Quienes rechazan la caza señalan que el problema lo creó la desaparición de los depredadores y que la solución de fondo es recuperarlos, algo que avanza despacio y con mucha oposición ganadera. Quienes cazan responden que, mientras eso llega, alguien tiene que hacer el trabajo de campo y que lo hacen gratis. Y en medio queda el dato que nadie discute. Donde no hay lobo ni cazador, la población crece hasta que la frenan las enfermedades o el hambre, que son formas bastante peores de regular una especie.",
      },
    ],
  },
];
