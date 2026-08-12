import type { Short } from "../shorts";

/* ==========================================================================
   Las bicicletas.

   La máquina más eficiente que existe para mover a una persona, y una de las
   que más cambió la vida de la gente corriente. El tema se estropea si se
   cuenta con carreras y campeones.

   La regla del tema: se cuenta el TRANSPORTE, no el deporte. Cuánto costaba,
   quién podía comprarla, adónde permitió ir y a quién molestó eso. Y siempre
   se explica el detalle mecánico que hizo posible cada salto, porque una
   bicicleta es un manual de física a la vista.
   ========================================================================== */

export const BICICLETAS: Short[] = [
  {
    id: "la-bicicleta-sin-pedales",
    titulo: "La bicicleta sin pedales",
    gancho: "Se avanzaba dando zancadas en el suelo, sentado. Y se inventó por culpa de un volcán al otro lado del mundo.",
    categoria: "Bicicletas",
    color: "var(--ochre)",
    encargo: "Una máquina de madera con dos ruedas y sin pedales, apoyada en una pared.",
    fotos: [
      {
        archivo: "Draisine or Laufmaschine, c. 1820 - Kurpfälzisches Museum der Stadt Heidelberg - Heidelberg, Germany - DSC01526.jpg",
        autor: "Una draisiana de hacia 1820, el antepasado de la bicicleta. Museo del Palatinado, Heidelberg. Fotografía de Daderot.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Draisine_or_Laufmaschine,_c._1820_-_Kurpf%C3%A4lzisches_Museum_der_Stadt_Heidelberg_-_Heidelberg,_Germany_-_DSC01526.jpg",
        foco: "50% 55%",
        alt: "Un armazón de madera amarilla con dos ruedas de radios, un sillín acolchado y ningún pedal.",
      },
      {
        archivo: "Mount Tambora Volcano, Sumbawa Island, Indonesia.jpg",
        autor: "El cráter del Tambora, en la isla de Sumbawa, fotografiado desde la Estación Espacial. NASA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Mount_Tambora_Volcano,_Sumbawa_Island,_Indonesia.jpg",
        foco: "50% 45%",
        alt: "Un cráter enorme y circular abierto en la cima de una montaña verde, visto desde muy arriba.",
      },
      {
        archivo: "00 8333 Hochrad.jpg",
        autor: "Un biciclo de rueda alta, de los que aparecieron a partir de 1870. Fotografía de W. Bulach.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:00_8333_Hochrad.jpg",
        foco: "50% 45%",
        alt: "Una bicicleta antigua con una rueda delantera enorme y una trasera diminuta.",
      },
      {
        archivo: "Bike on rainy street (Unsplash).jpg",
        autor: "Una bicicleta aparcada en una calle mojada. Fotografía de Ornella Binni.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Bike_on_rainy_street_(Unsplash).jpg",
        foco: "50% 45%",
        alt: "Una bicicleta apoyada en un poste sobre el adoquinado brillante de una calle con lluvia.",
      },
    ],
    entrada:
      "Alemania, 1817. Un funcionario forestal presenta un aparato de madera con dos ruedas puestas en línea, un sillín y un manillar, pero sin pedales, sin cadena y sin frenos: se avanza empujando el suelo con los pies, sentado, como quien da zancadas largas. Suena a juguete, y de hecho es lo que muchos pensaron al verlo. Pero lo construye después de dos años pésimos para la agricultura europea, con las cosechas perdidas y la avena a un precio imposible, en los que mucha gente había tenido que sacrificar sus caballos porque no podía darles de comer.",
    paginas: [
      {
        rotulo: "El año sin verano",
        texto:
          "Aquellas malas cosechas tenían una causa lejana. En 1815 había estallado un volcán en Indonesia y su ceniza enfrió el planeta durante meses, lo que arruinó las cosechas del hemisferio norte en 1816. Sin avena barata, mantener un caballo se volvió carísimo, y de ahí salió la idea de buscar un sustituto que no comiera. El aparato pesaba unos veinte kilos y lo tenía todo de madera, incluidos los radios de las ruedas. En terreno llano y con firme decente permitía ir bastante más rápido que andando, y sobre todo sin cansarse igual.",
        destacado: { tipo: "frase", frase: "Se buscaba un sustituto del caballo que no comiera avena." },
      },
      {
        rotulo: "Los pedales",
        texto:
          "El invento tuvo un éxito breve y acabó prohibido en varias ciudades europeas, porque la gente lo usaba por las aceras y atropellaba a los viandantes que iban a lo suyo. Los pedales llegaron hacia 1860, cuando un taller francés tuvo la idea de montarlos directamente sobre el eje de la rueda delantera. Eso traía una consecuencia curiosa. Como la rueda daba una vuelta entera por cada pedalada, la única forma de ir más rápido era agrandarla. Así aparecieron aquellas bicicletas de rueda delantera gigantesca que hoy salen en los dibujos antiguos.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "kilos pesaba la primera de madera" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquellas bicicletas altas eran peligrosísimas, porque el ciclista iba encaramado sobre la rueda y cualquier bache lo lanzaba de cabeza. La solución llegó en 1885 con la cadena, que permite pedalear en una rueda pequeña y multiplicar las vueltas con dos piñones de distinto tamaño. Con eso se pudo bajar el sillín, igualar las ruedas y poner neumáticos. Aquella forma es exactamente la de cualquier bicicleta actual. Quedó fijada en apenas cinco años, después de setenta de pruebas, y desde entonces solo han cambiado los materiales y los cambios de marchas.",
      },
    ],
  },
  {
    id: "la-bicicleta-y-las-mujeres",
    titulo: "La bicicleta cambió la ropa",
    gancho: "Permitió salir del pueblo sin permiso ni acompañante, y por eso hubo médicos que la declararon peligrosa.",
    categoria: "Bicicletas",
    color: "var(--plum)",
    encargo: "Una bicicleta antigua de señora apoyada en una verja, con la falda del cuadro bajo.",
    fotos: [
      {
        archivo: "Women Repairing Bicycle, c. 1895.jpg",
        autor: "Cuatro mujeres arreglando una bicicleta, hacia 1895. Universidad Estatal de Montana.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Women_Repairing_Bicycle,_c._1895.jpg",
        foco: "50% 50%",
        alt: "Fotografía sepia de cuatro mujeres con faldas largas arreglando el piñón de una bicicleta.",
      },
      {
        archivo: "Ride a Stearns and be content, bicycle advertising poster, 1896.jpg",
        autor: "Cartel publicitario de bicicletas Stearns, dibujado por Edward Penfield en 1896.",
        licencia: "Public domain",
        pdPorEdad: 1925,
        fuente:
          "https://commons.wikimedia.org/wiki/File:Ride_a_Stearns_and_be_content,_bicycle_advertising_poster,_1896.jpg",
        foco: "50% 45%",
        alt: "Cartel modernista de colores planos con una mujer montada en bicicleta.",
      },
      {
        archivo: "Woman's Red Wool Bicycling Jacket.jpg",
        autor: "Chaqueta de lana roja para montar en bicicleta, hacia 1890.",
        licencia: "Attribution",
        fuente: "https://commons.wikimedia.org/wiki/File:Woman%27s_Red_Wool_Bicycling_Jacket.jpg",
        foco: "50% 45%",
        alt: "Chaqueta de lana roja de manga abullonada, expuesta sobre un maniquí sin cabeza.",
      },
      {
        archivo: "L. A. W., bicycle race, safety, the finish (NYPL b11707602-G90F395 373ZF).tiff",
        autor: "Llegada de una carrera de bicicletas de seguridad, hacia 1890. Biblioteca Pública de Nueva York.",
        licencia: "Public domain",
        fuente:
          "https://commons.wikimedia.org/wiki/File:L._A._W.,_bicycle_race,_safety,_the_finish_(NYPL_b11707602-G90F395_373ZF).tiff",
        foco: "50% 50%",
        alt: "Fotografía antigua de varios ciclistas cruzando la meta ante un público apretado.",
      },
    ],
    entrada:
      "Europa y Estados Unidos, década de 1890. La bicicleta con cadena y neumáticos de aire se ha abaratado de golpe y se vende por millones. Cuesta unas semanas de sueldo, se aprende en una tarde y, a diferencia de un caballo, no hay que darle de comer ni cuadra donde meterla. Para mucha gente es el primer medio de transporte propio que tiene en su vida, y para las mujeres de clase media supone además otra cosa, mucho más gorda: poder salir del pueblo sola, sin permiso y sin acompañante, y volver el mismo día.",
    paginas: [
      {
        rotulo: "La ropa",
        texto:
          "El primer obstáculo no fue moral, sino material. Las faldas largas y los corsés rígidos hacían imposible pedalear con seguridad, porque la tela se enganchaba en la cadena y en los radios. De ahí salieron dos cambios que parecen menores y no lo eran. Uno fueron los pantalones bombachos para montar, que escandalizaron a media sociedad. El otro, los cuadros con la barra baja, pensados para poder subir llevando falda. Los fabricantes añadieron además protectores de cadena y guardabarros, y todo eso sigue fabricándose hoy exactamente por el mismo motivo que entonces.",
        destacado: { tipo: "frase", frase: "La tela se enganchaba en la cadena, así que cambió la ropa." },
      },
      {
        rotulo: "Las advertencias",
        texto:
          "Aparecieron entonces objeciones médicas que hoy resultan cómicas y que en su momento se publicaron en revistas serias. Se advirtió de que pedalear provocaba en las mujeres una supuesta cara de ciclista, con la mandíbula tensa y los ojos saltones, y de que el sillín podía excitarlas o hacerlas estériles. Ninguna de esas afirmaciones tenía la menor base, y ninguna se sostuvo cuando alguien se molestó en comprobarla. Lo que sí había detrás era otra cosa: una mujer con bicicleta podía ir a otro pueblo, visitar a quien quisiera y volver antes de la cena sin dar explicaciones.",
        destacado: { tipo: "cifra", cifra: "1890", unidad: "la década de la bicicleta barata" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Una dirigente del movimiento por el voto femenino escribió en 1896 que la bicicleta había hecho más por la emancipación de las mujeres que cualquier otra cosa en el mundo. Es una frase discutible y muy citada, pero apunta a algo real: la autonomía para moverse cambia lo que una persona puede hacer con su día. Quedaron también los cuadros de barra baja, que siguen fabricándose por comodidad y no por decoro. Y quedó la costumbre de aprender a montar de niño, que es de las pocas habilidades que casi nadie olvida.",
      },
    ],
  },
  {
    id: "la-maquina-mas-eficiente",
    titulo: "Nada gasta menos que ella",
    gancho: "En energía por kilómetro, una bicicleta gana a cualquier animal y a cualquier máquina. Incluso a caminar.",
    categoria: "Bicicletas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un plato y una cadena de bicicleta vistos muy de cerca, con la luz de lado.",
    entrada:
      "En 1973, una revista científica publicó una comparación que se ha hecho famosa: cuánta energía gasta cada especie para recorrer un kilómetro, teniendo en cuenta su peso. El cóndor salía muy bien parado y el ser humano andando quedaba a media tabla. Pero al añadir a una persona montada en bicicleta, el resultado se salía del gráfico.",
    paginas: [
      {
        rotulo: "Por qué gana",
        texto:
          "La razón es que la bicicleta elimina casi todo el desperdicio de andar. Al caminar, el cuerpo sube y baja el centro de gravedad a cada paso y frena con cada apoyo, y esa energía se pierde. En una bicicleta, el peso descansa en el sillín y el movimiento de las piernas se convierte casi entero en avance, con muy poco rozamiento en los rodamientos y en los neumáticos. Se aprovecha en torno al noventa por ciento de la energía que se mete en los pedales, una cifra que ninguna máquina de transporte con motor consigue acercarse a igualar.",
        destacado: { tipo: "cifra", cifra: "90", unidad: "por ciento de la energía se convierte en avance" },
      },
      {
        rotulo: "El aire",
        texto:
          "El límite aparece con la velocidad, porque el aire estorba cada vez más. La resistencia crece con el cuadrado de la velocidad, así que ir al doble de rápido no cuesta el doble de esfuerzo, sino cuatro veces más. A partir de unos treinta kilómetros por hora, la mayor parte del trabajo del ciclista se va en apartar aire y no en mover la máquina. Por eso los ciclistas se colocan en fila para ir a rueda, y por eso los récords de velocidad se hacen con carenados que envuelven al corredor.",
        destacado: { tipo: "frase", frase: "Al doble de velocidad, el aire no estorba el doble: estorba cuatro veces más." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un dato que se usa mucho en las discusiones sobre transporte urbano. Una bicicleta ocupa una fracción del espacio de un coche y no contamina donde se usa. Y en trayectos de menos de cinco kilómetros suele llegar antes que el coche en una ciudad con tráfico. Y quedó una comparación que sigue impresionando a quien la oye por primera vez. Con la energía de un plato de comida corriente, una persona en bicicleta recorre varios kilómetros. Un coche, con esa misma energía en forma de gasolina, apenas se mueve unos cientos de metros.",
      },
    ],
  },
];
