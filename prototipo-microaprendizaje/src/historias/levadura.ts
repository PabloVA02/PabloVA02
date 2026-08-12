import type { Short } from "../shorts";

/* ==========================================================================
   La levadura.

   Un hongo microscópico que lleva nueve mil años trabajando para nosotros
   sin que nadie supiera que existía. El tema se estropea si se convierte
   en recetario o en clase de bioquímica.

   La regla del tema: la levadura es UN SER VIVO QUE COME Y EXCRETA, y esa
   frase manda en los tres shorts. Todo lo demás (el pan, la cerveza, el
   laboratorio) es consecuencia de qué residuo suyo nos interesa guardar.
   ========================================================================== */

export const LEVADURA: Short[] = [
  {
    id: "lo-que-hace-subir-el-pan",
    titulo: "Por qué sube el pan",
    gancho: "La levadura es un ser vivo. Se come el azúcar de la masa y suelta gas, y ese gas es lo que abomba el pan.",
    categoria: "Comida",
    color: "var(--ochre)",
    encargo: "Corte de una hogaza recién partida con la miga llena de agujeros irregulares.",
    /* De arriba abajo del short: la hogaza abierta por el horno, la red que
       retiene el gas, el horno y la miga. */
    fotos: [
      {
        archivo: "Home made sour dough bread.jpg",
        autor: "Panes de masa madre recién sacados del horno. Fotografía de Tomás Castelazo.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Home_made_sour_dough_bread.jpg",
        foco: "50% 50%",
        alt: "Siete panes redondos de corteza dorada y enharinada, apoyados unos en otros sobre un paño de rayas.",
      },
      {
        archivo: "Gluten strands in bread dough.jpg",
        autor:
          "Los hilos de gluten de una masa ya fermentada, estirados al separarla. Fotografía de General Views, 2015.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Gluten_strands_in_bread_dough.jpg",
        foco: "50% 50%",
        alt: "Masa de pan separada en dos, con cientos de hilos blancos y finísimos tendidos entre las dos mitades.",
      },
      {
        archivo: "Baking Bread Communal Oven, 2011.jpg",
        autor:
          "Un panadero metiendo el pan en el horno comunal de leña, en Marruecos. Fotografía de travelwayoflife, 2011.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Baking_Bread_Communal_Oven,_2011.jpg",
        foco: "58% 38%",
        alt: "Un hombre desliza con una pala una torta de pan hacia la boca encendida de un horno de leña.",
      },
      {
        archivo: "Slices of sourdough bread.jpg",
        autor:
          "Rebanadas de pan de masa madre, con la miga llena de agujeros de tamaños distintos. Fotografía de Angel Ganev, 2015.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Slices_of_sourdough_bread.jpg",
        foco: "50% 50%",
        alt: "Tres rebanadas de pan apoyadas en un plato, con la miga clara agujereada y la corteza tostada.",
      },
    ],
    entrada:
      "Egipto y Mesopotamia, desde hace unos cinco mil años. Durante casi toda la historia se hizo pan sin saber por qué subía, dejando la masa al aire hasta que se hinchaba sola. La explicación no llegó hasta el siglo XIX, cuando el microscopio mostró que aquella espuma estaba llena de organismos vivos. La levadura es un hongo microscópico que se alimenta del azúcar de la harina y suelta gas. Ese gas queda atrapado en la masa y es lo que la abomba. Dicho de otra manera: el pan sube porque tiene dentro millones de seres vivos comiendo, y el horno los mata justo cuando ya han hecho su trabajo.",
    paginas: [
      {
        rotulo: "El gas atrapado",
        texto:
          "La harina de trigo lleva almidón, que son cadenas largas de azúcar, y enzimas que las cortan en trozos pequeños. La levadura se come esos trozos y suelta dos cosas: un gas, el dióxido de carbono, y alcohol. El gas se queda atrapado dentro de la masa y forma miles de burbujas que la van inflando desde dentro. Se queda atrapado gracias al gluten, una red elástica de proteínas que se forma al amasar y retiene el gas. Sin esa red el gas se escaparía, y por eso las harinas sin gluten dan panes densos y planos. El alcohol se evapora en el horno, así que del banquete de la levadura solo queda el agujero.",
        destacado: { tipo: "frase", frase: "El gluten es la red que impide que el gas se escape." },
      },
      {
        rotulo: "El calor final",
        texto:
          "En el horno pasa todo muy deprisa y en un orden concreto que explica la forma del pan. Los primeros minutos la levadura se vuelve loca con el calor y produce más gas que nunca, y el pan da un último estirón. Hacia los cincuenta grados muere, y a partir de ahí lo que sigue empujando es el vapor de agua. Después el almidón absorbe agua y se hincha, el gluten se endurece y la miga queda fijada. La corteza se forma la última, cuando la superficie se seca y los azúcares se tuestan. Los panaderos echan vapor al horno al principio justo para retrasar ese momento y que el pan crezca más.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "grados es la temperatura a la que muere" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una industria que cultiva levadura en cubas gigantes y la vende prensada en tacos o seca en sobres. La versión seca aguanta años en un cajón porque el hongo entra en un estado de espera del que sale al mojarse. Quedó también la misma especie trabajando en la cerveza y en el vino, donde interesa justo lo contrario que en el pan. Allí se guarda el alcohol y se deja escapar el gas, mientras que en el pan se guarda el gas y se deja escapar el alcohol. Es el mismo bicho haciendo el mismo trabajo, y lo único que cambia es cuál de sus dos residuos nos interesa.",
      },
    ],
  },
  {
    id: "la-masa-madre",
    titulo: "Un bote de bichos vivos",
    gancho: "No lleva levadura de sobre: lleva la que había en el aire y en la harina. Y hay que darle de comer todos los días.",
    categoria: "Comida",
    color: "var(--clay)",
    encargo: "Bote de cristal con masa madre burbujeante y una goma marcando el nivel.",
    fotos: [
      {
        archivo: "Home made sour dough bread.jpg",
        autor: "Hogazas de pan de masa madre recién horneadas. Fotografía de Tomás Castelazo, 2020.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Home_made_sour_dough_bread.jpg",
        foco: "50% 50%",
        alt: "Siete hogazas redondas de corteza dorada y enharinada, apoyadas unas en otras sobre un paño de rayas.",
      },
      {
        archivo: "Roggensauerteig — Rye Sourdough (Macro photo).jpg",
        autor: "Masa madre de centeno vista de cerca, con las burbujas de gas de la fermentación. Fotografía de Maximilian Schönherr, 2023.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Roggensauerteig_%E2%80%94_Rye_Sourdough_(Macro_photo).jpg",
        foco: "50% 50%",
        alt: "Primer plano de una masa de centeno agujereada por cientos de burbujas de distinto tamaño.",
      },
      {
        archivo: "Sourdough starter at day 7.jpg",
        autor: "Bote de masa madre al séptimo día, en plena actividad. Fotografía de Guitarbogus, 2020.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sourdough_starter_at_day_7.jpg",
        foco: "50% 50%",
        alt: "El interior de un tarro de cristal con masa madre cubierta de burbujas finas.",
      },
      {
        archivo: "Sour dough bread 001.jpg",
        autor: "Pan de masa madre cortado, con la miga alveolada que deja la fermentación larga. Fotografía de Jeuwre, 2021.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sour_dough_bread_001.jpg",
        foco: "50% 50%",
        alt: "Una hogaza partida que enseña la miga llena de agujeros irregulares y la corteza gruesa.",
      },
    ],
    entrada:
      "Todo el mundo, desde el pan más antiguo que se conoce y hasta finales del siglo XIX. Antes de que existiera la levadura de panadería vendida en tacos, el pan subía con un trozo de masa guardada de la hornada anterior y apartado a propósito para eso. Ese trozo se mezclaba con harina y agua nueva y volvía a fermentar, de manera que la misma colonia de microbios pasaba de un pan al siguiente durante años y a veces durante generaciones. El panadero no compraba el fermento en ningún sitio: lo heredaba, lo alimentaba y lo pasaba a quien viniera detrás.",
    paginas: [
      {
        rotulo: "Dos inquilinos",
        texto:
          "Un bote de masa madre no contiene una sola especie, sino dos tipos de organismos que se necesitan. Por un lado están las levaduras salvajes, que producen el gas y hacen subir la masa igual que las de sobre. Por otro están unas bacterias que producen ácido, las mismas familias que fermentan el yogur y el chucrut. Ese ácido es el que da al pan su sabor característico y el que impide que crezca ningún microbio indeseable. También ablanda el gluten y hace que el pan aguante varios días sin secarse, cosa que el industrial no consigue. Las levaduras aguantan bien ese ambiente ácido, así que el equilibrio entre las dos se mantiene solo.",
        destacado: { tipo: "frase", frase: "Levaduras que hinchan y bacterias que dan el ácido." },
      },
      {
        rotulo: "El bote vivo",
        texto:
          "Mantener una masa madre consiste en tirar la mitad y añadir harina y agua, todos los días o casi. Si no se le da de comer, los microbios agotan el azúcar disponible y el ácido se acumula hasta envenenarlos. Guardada en la nevera aguanta semanas dormida, porque el frío frena a los dos inquilinos sin matarlos. Cada bote acaba con su propia mezcla de especies según la harina, el agua y la temperatura de la casa. Por eso dos panaderos con la misma receta sacan panes distintos, y hay obradores que presumen de tener el suyo desde hace un siglo. Existe incluso una biblioteca en Bélgica que conserva masas madre de medio mundo en frascos numerados.",
        destacado: { tipo: "cifra", cifra: "12", unidad: "horas tarda en subir un pan de masa madre" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó arrinconada durante casi un siglo, porque la levadura de sobre es más rápida, más previsible y no hay que cuidarla. Volvió con fuerza desde los años noventa, primero entre panaderos artesanos y después en la cocina de mucha gente. Quedó también un problema de etiquetas, ya que muchos panes se venden como masa madre llevando además levadura industrial para acelerar. Varios países han tenido que regular qué puede llamarse así y cuánto tiempo tiene que fermentar. Y quedó una idea rara de digerir, porque quien mantiene un bote de masa madre no está guardando un ingrediente. Está cuidando una colonia de seres vivos que llevan comiendo sin parar desde antes de que él naciera.",
      },
    ],
  },
  {
    id: "el-hongo-que-nadie-eligio",
    titulo: "Domesticada sin verla",
    gancho: "Es el primer organismo que el ser humano crió a ciegas durante miles de años, sin saber siquiera que existía.",
    categoria: "Ciencia",
    color: "var(--plum)",
    curioso: true,
    encargo: "Células de levadura vistas al microscopio, redondeadas y algunas brotando.",
    entrada:
      "Europa y Asia, desde hace unos nueve mil años y hasta 1857. Durante todo ese tiempo se hizo pan, cerveza y vino sin tener ni idea de que el responsable era un ser vivo. Se creía que la fermentación era una reacción química espontánea de la materia. Un químico francés demostró en aquella fecha que el proceso lo hacían unos organismos microscópicos, y que si se mataban, se paraba.",
    paginas: [
      {
        rotulo: "Criar a ciegas",
        texto:
          "Domesticar una especie consiste en quedarse con los individuos que dan mejor resultado y desechar los demás. Con una vaca o con un trigo eso se hace mirando, y con la levadura se hizo sin ver nada de nada. El panadero guardaba un trozo de la masa que mejor había subido y tiraba la que no funcionaba. El cervecero hacía lo mismo con el poso del fondo de la cuba, pasándolo a la siguiente. Repetido miles de veces durante miles de años, ese gesto seleccionó levaduras que fermentan más rápido y aguantan más alcohol. Los análisis genéticos de hoy muestran que las levaduras de panadería y de cervecería llevan siglos separadas de las salvajes.",
        destacado: { tipo: "frase", frase: "Se seleccionó durante milenios sin haberla visto nunca." },
      },
      {
        rotulo: "La cerveza fría",
        texto:
          "El caso más claro está en la cerveza, donde hay dos maneras de fermentar que dan bebidas distintas. La fermentación clásica ocurre en la superficie y a temperatura ambiente, y da cervezas afrutadas y turbias. La otra ocurre en el fondo y en frío, y da las cervezas rubias, limpias y suaves que hoy dominan el mercado. Esa segunda levadura apareció en las cuevas frías de Baviera hacia el siglo XV y resultó ser una especie híbrida. Es la mezcla de la levadura de siempre con otra salvaje que aguanta el frío y que vive en la Patagonia. Cómo llegó una a la otra sigue sin estar claro, aunque los barcos son el sospechoso habitual.",
        destacado: { tipo: "cifra", cifra: "1857", unidad: "el año en que se supo que estaba viva" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un organismo que se ha convertido en el más estudiado de toda la biología después de unas cuantas bacterias. Su célula se parece bastante a la nuestra, es fácil de cultivar y se reproduce en dos horas, así que sirve de modelo. Buena parte de lo que se sabe sobre cómo se divide una célula, y por tanto sobre el cáncer, salió de estudiarla. Hoy se le meten genes para que fabrique medicamentos, combustible y hasta aromas que antes salían de plantas. Y quedó la ironía de la historia, porque el ser vivo con el que más tiempo llevamos trabajando es el que más tardamos en descubrir.",
      },
    ],
  },
];
