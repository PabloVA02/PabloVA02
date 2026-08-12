import type { Short } from "../shorts";

/* ==========================================================================
   Los bosques.

   Se cuentan casi siempre en clave de pérdida, y la historia real es más
   interesante y menos lineal: Europa se quedó casi sin árboles hace siglos y
   hoy tiene más que en 1900.

   La regla del tema: un bosque se cuenta como RECURSO ESTRATÉGICO, porque
   eso es lo que fue durante milenios: barcos, vigas, carbón, leña. Siempre se
   dice para qué servía la madera y cuánto tardaba en crecer, porque esa
   diferencia entre años de espera y minutos de tala explica casi todo.
   ========================================================================== */

export const BOSQUES: Short[] = [
  {
    id: "robles-para-barcos",
    titulo: "Robles para barcos",
    gancho: "Un navío se llevaba dos mil árboles, y ninguno servía hasta cien años después de plantarlo.",
    categoria: "Bosques",
    color: "var(--ochre)",
    encargo: "Un roble grande y solitario con las ramas muy abiertas en un claro.",
    fotos: [
      {
        archivo: "Ancient oak trees in Sherwood Forest - geograph.org.uk - 6356602.jpg",
        autor: "Robles centenarios en el bosque de Sherwood, en Inglaterra. Fotografía de Phil Champion.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ancient_oak_trees_in_Sherwood_Forest_-_geograph.org.uk_-_6356602.jpg",
        foco: "50% 50%",
        alt: "Un roble enorme de tronco retorcido junto a un camino de tierra, con una rama gruesa saliendo casi horizontal.",
      },
      {
        archivo: "Big Belly Oak, Savernake Forest - geograph.org.uk - 6395730.jpg",
        autor: "El Big Belly Oak, en el bosque de Savernake, con más de mil años. Fotografía de Noisar.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Big_Belly_Oak,_Savernake_Forest_-_geograph.org.uk_-_6395730.jpg",
        foco: "50% 45%",
        alt: "Un roble de tronco abombado y hueco, con una banda metálica ciñéndolo para que no se abra.",
      },
      {
        archivo: "An ancient oak tree in Sherwood Forest - geograph.org.uk - 6356877.jpg",
        autor: "Otro roble viejo de Sherwood, con las ramas bajas muy abiertas. Fotografía de Phil Champion.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:An_ancient_oak_tree_in_Sherwood_Forest_-_geograph.org.uk_-_6356877.jpg",
        foco: "50% 45%",
        alt: "Un roble antiguo con la copa ancha y varias ramas gruesas que se curvan hacia el suelo.",
      },
      {
        archivo: "Quercus alba fallen-leaves acorns.jpg",
        autor: "Bellotas y hojas caídas de roble blanco. Fotografía de Dcrjsr.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Quercus_alba_fallen-leaves_acorns.jpg",
        foco: "50% 50%",
        alt: "Bellotas marrones repartidas sobre un lecho de hojas secas de roble.",
      },
    ],
    entrada:
      "Europa, siglos XVI a XIX. Un barco de guerra de línea es la máquina más compleja y más cara de su tiempo, un arma que cuesta lo que una ciudad pequeña, y está hecha casi enteramente de madera. Cada navío se lleva unos dos mil robles adultos, es decir, alrededor de veinte hectáreas de bosque talado para uno solo. El problema no es cortarlos, que se hace en unas semanas, sino de dónde salen: un roble tarda entre ochenta y ciento veinte años en alcanzar el tamaño que hace falta.",
    paginas: [
      {
        rotulo: "Piezas curvas",
        texto:
          "No valía cualquier tronco. El casco necesita piezas rectas para la quilla y el forro, pero también muchas piezas curvas para las costillas y los refuerzos. Y esas no se pueden cortar de cualquier tronco: una pieza serrada a contraveta se parte. Había que buscar ramas y troncos que ya tuvieran esa curva. Los inspectores de marina recorrían los bosques marcando árboles concretos con un hacha, y en algunos países estaba prohibido talar los marcados bajo penas severas. Un roble torcido en el sitio justo valía más que diez rectos, y los astilleros mandaban plantillas de madera con la forma exacta que necesitaban para que los buscadores no se equivocaran.",
        destacado: { tipo: "cifra", cifra: "2.000", unidad: "robles por barco de guerra" },
      },
      {
        rotulo: "Plantar a ciegas",
        texto:
          "Esa aritmética obligó a los Estados a hacer algo insólito: planificar a un siglo vista. Varios países crearon administraciones forestales cuya misión era plantar y proteger robledales destinados a barcos que construirían sus nietos, con inventarios, mapas y turnos de tala. En Francia, una ordenanza de 1669 reguló los bosques del reino con ese fin y sentó las bases de la selvicultura moderna, la ciencia de cultivar un bosque. De ahí viene también la idea de sostenibilidad: no cortar más de lo que crece, formulada por escrito en 1713 por un administrador de minas alemán.",
        destacado: { tipo: "frase", frase: "Plantaban árboles para barcos que construirían sus nietos." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron bosques enteros que hoy son parques naturales y que existen porque alguien los plantó pensando en la guerra. Y quedó una ironía cronológica: cuando aquellos robles alcanzaron por fin el tamaño de corta, a mediados del siglo XIX, los barcos ya se hacían de hierro y nadie los necesitaba. Algunos siguen en pie. En Inglaterra hubo un caso célebre. Un almirante donó al Estado un bosque entero para asegurar la madera de la flota, y aquellos árboles, ya inútiles para barcos, se ofrecieron dos siglos después para rehacer el techo de una catedral quemada.",
      },
    ],
  },
  {
    id: "europa-tiene-mas-bosque",
    titulo: "Más bosque que antes",
    gancho: "El continente estuvo casi pelado en 1900. Desde entonces la superficie arbolada no ha dejado de crecer.",
    categoria: "Bosques",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una ladera de monte cubierta de árboles jóvenes de repoblación.",
    entrada:
      "Europa, hacia 1900. Después de siglos de talas para leña, carbón vegetal, pasto y campos de cultivo, el continente ha llegado a su mínimo histórico de superficie arbolada. En algunos países quedaba con árboles menos de una décima parte del territorio, y montes enteros eran laderas peladas. Desde entonces, la tendencia se ha invertido por completo.",
    paginas: [
      {
        rotulo: "Por qué crece",
        texto:
          "El giro no lo produjo una campaña ecologista, sino tres cambios económicos. El carbón mineral y después el gas sustituyeron a la leña como combustible, con lo que dejó de talarse para calentarse y cocinar. La agricultura se concentró en las tierras buenas y abandonó las laderas y los campos pobres, que se cubrieron solos de matorral y luego de árboles. Y la ganadería extensiva se redujo, de modo que dejó de haber rebaños comiéndose los brotes. A eso se sumaron políticas de repoblación con dinero público, muchas veces con pinos de crecimiento rápido plantados en hileras, que hoy se critican por su monotonía pero que frenaron la erosión de laderas enteras.",
        destacado: { tipo: "frase", frase: "No lo repobló una campaña: lo repobló el abandono del campo." },
      },
      {
        rotulo: "Los números",
        texto:
          "Hoy alrededor del cuarenta por ciento de la superficie de la Unión Europea está arbolada, y esa superficie ha crecido de forma continuada durante décadas. España es uno de los casos más marcados. Ha pasado de unos siete millones de hectáreas arboladas a comienzos del siglo XX a más de dieciocho millones hoy, casi la mitad del país contando todo el monte. En metros cuadrados de árbol por habitante, el continente está mejor que en cualquier momento desde la Edad Media. Y casi todo ese avance ha ocurrido sin que nadie lo notara, ladera a ladera.",
        destacado: { tipo: "cifra", cifra: "40", unidad: "por ciento de Europa, arbolado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un dato optimista con letra pequeña. Más bosque no significa mejor bosque. Buena parte de lo recuperado son masas jóvenes y muy densas, a menudo de una sola especie, con poca variedad de plantas y de bichos. Y acumulan tanto material seco que arden mucho mejor que los montes antiguos, que el pastoreo y la recogida de leña mantenían aclarados. Los grandes incendios de las últimas décadas tienen ahí una de sus causas. El continente pasó de quedarse sin árboles a tener que aprender a gestionarlos, que es un problema mucho mejor que el anterior pero sigue siendo un problema.",
      },
    ],
  },
  {
    id: "el-bosque-que-no-se-toco",
    titulo: "Un trozo del original",
    gancho: "Sobrevivió porque durante siglos fue coto de caza de reyes y nadie más pudo entrar.",
    categoria: "Bosques",
    color: "var(--plum)",
    encargo: "Un bosque denso de árboles muy viejos con troncos caídos cubiertos de musgo.",
    entrada:
      "Frontera entre Polonia y Bielorrusia, siglos XV a XX. Casi toda la llanura europea estuvo cubierta hace milenios por un bosque continuo que la agricultura fue comiéndose. De aquella masa original sobrevive un fragmento grande, y sobrevive por una razón poco romántica: fue durante siglos reserva de caza de reyes y zares, cerrada a la gente corriente bajo penas muy duras.",
    paginas: [
      {
        rotulo: "Coto real",
        texto:
          "La protección empezó en el siglo XV, cuando un rey lo declaró coto propio, y siguió con los zares rusos, que mantuvieron guardas, prohibieron talar y castigaron la caza furtiva con dureza. Lo que para los vecinos fue una injusticia durante generaciones resultó ser, sin que nadie lo pretendiera, la conservación más eficaz de su tiempo. Mientras el resto del continente se convertía en campos de cultivo, allí los árboles viejos siguieron cayéndose y pudriéndose donde caían, que es exactamente lo que un bosque necesita para hacerse viejo. Nadie retiraba la madera muerta porque nadie podía entrar a por ella.",
        destacado: { tipo: "frase", frase: "Lo salvó el privilegio de caza, no ninguna ley de protección." },
      },
      {
        rotulo: "La madera muerta",
        texto:
          "Esa madera caída es la clave de todo. En un bosque explotado se retira, y con ella desaparecen miles de especies que dependen de ella: hongos, escarabajos, pájaros que anidan en troncos huecos. Aquí hay árboles de cuarenta metros, robles de varios siglos y una cantidad de madera muerta por hectárea que multiplica varias veces la de un bosque gestionado. Es también el sitio donde el bisonte europeo, extinguido en libertad en 1927, volvió a vivir suelto a partir de los pocos ejemplares que quedaban en zoológicos. Hoy pastan allí varios centenares.",
        destacado: { tipo: "cifra", cifra: "1927", unidad: "se extinguió el bisonte libre" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un bosque partido por una frontera y por una valla, con la parte más antigua protegida como patrimonio mundial. Y quedó una discusión que no se cierra: si hay que dejarlo del todo a su aire o intervenir cuando una plaga de escarabajo ataca a los abetos, como pasó en la última década. Los partidarios de no tocar nada recuerdan lo que enseña su propia historia: aquel bosque llegó hasta aquí precisamente porque, durante quinientos años, nadie estuvo autorizado a entrar a arreglarlo. Los que defienden intervenir responden que el clima y las plagas de ahora tampoco son los de entonces.",
      },
    ],
  },
];
