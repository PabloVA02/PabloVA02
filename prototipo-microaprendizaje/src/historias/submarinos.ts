import type { Short } from "../shorts";

/* ==========================================================================
   Submarinos.

   El riesgo del tema es la película bélica: torpedos, sonar, tensión. Ya
   está contado mil veces y no informa.

   La regla del tema: un submarino se cuenta por EL AIRE Y LA PRESIÓN, que
   son los dos problemas de verdad. Cuánto tiempo puede respirar la gente
   de dentro y cuánto aguanta el casco antes de ceder. Todo lo demás
   —la forma, el motor, el lastre— sale de intentar resolver esas dos
   cosas a la vez.

   Y siempre se dice quién iba dentro y qué le pasó.
   ========================================================================== */

export const SUBMARINOS: Short[] = [
  {
    id: "ictineo",
    titulo: "El submarino de 1859",
    gancho: "Hizo sesenta inmersiones, inventó un motor que fabricaba su propio aire y murió arruinado.",
    categoria: "Submarinos",
    color: "var(--slate)",
    encargo: "Un casco de madera con forma de pez y ojos de buey de cristal, en un puerto.",
    /* De arriba abajo del short: el primer Ictíneo entero, sus ojos de buey,
       y el segundo, que es el del motor químico. */
    fotos: [
      {
        archivo: "J23 527 U-Boot Ictíneo.jpg",
        autor: "Réplica del Ictíneo I de Narcís Monturiol, botado en 1859, ante el Museu Marítim de Barcelona. Fotografía de Falk2, 2015.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:J23_527_U-Boot_Ict%C3%ADneo.jpg",
        foco: "50% 50%",
        alt: "Un casco de madera clara con forma de pez, apoyado en soportes, con ojos de buey redondos repartidos por el costado.",
      },
      {
        archivo: "Museu Maritim (23846721075).jpg",
        autor: "El Ictíneo I visto de frente: dos cascos, uno interior esférico para la presión y otro exterior con la forma. Museu Marítim de Barcelona. Fotografía de z0rc, 2015.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Museu_Maritim_(23846721075).jpg",
        foco: "50% 50%",
        alt: "La proa redondeada de un submarino de duelas de madera, con los ojos de buey de cristal y las juntas remachadas a la vista.",
      },
      {
        archivo: "2009-365-291 We All Live in a Wooden Submarine (4027741542).jpg",
        autor: "Réplica del Ictíneo II, el segundo modelo, el del motor que fabricaba su propio aire. Puerto de Barcelona. Fotografía de cogdogblog, 2009.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2009-365-291_We_All_Live_in_a_Wooden_Submarine_(4027741542).jpg",
        foco: "50% 55%",
        alt: "La proa de un submarino de madera vista desde abajo, alzada sobre unos soportes contra el cielo.",
      },
      {
        archivo: "A historic submarine in Barcelona port (5078945393).jpg",
        autor: "El Ictíneo II entero, siete metros de casco de madera de olivo. Puerto de Barcelona. Fotografía de Alexey Klyukin, 2010.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:A_historic_submarine_in_Barcelona_port_(5078945393).jpg",
        foco: "50% 50%",
        alt: "Un submarino de madera oscura y barnizada, con forma de huso, expuesto sobre el césped junto al mar.",
      },
    ],
    entrada:
      "Barcelona, 1859. Un impresor y activista político que ha visto morir a unos pescadores de coral bajando a pulmón decide construir un aparato para trabajar bajo el agua sin tener que salir a respirar. Bota un casco de madera de olivo con forma de pez, forrado de cobre y de siete metros de largo. Lo llama el pez de madera. Con él va a hacer sesenta inmersiones y va a resolver, cuarenta años antes que nadie, el problema que hundía a todos los demás submarinos de su siglo. También va a morir sin un duro, con la nave desguazada por sus acreedores.",
    paginas: [
      {
        rotulo: "El pez",
        texto:
          "El primer aparato se movía a manivela con la fuerza de cuatro hombres y llevaba dos cascos, uno interior para resistir la presión y otro exterior con la forma hidrodinámica, una solución que hoy usan todos los submarinos del mundo. Hizo unas sesenta inmersiones en el puerto sin un solo accidente, algunas con público en el muelle y con música, y demostró que la idea funcionaba de verdad. El problema era el aire: con la tripulación dentro y las velas encendidas para poder ver, el oxígeno se acababa en un par de horas.",
        destacado: { tipo: "cifra", cifra: "60", unidad: "inmersiones sin un solo accidente" },
      },
      {
        rotulo: "El motor químico",
        texto:
          "Para el segundo modelo resolvió el problema con una idea que se adelantaba décadas a su época: una reacción química entre clorato de potasio, zinc y dióxido de manganeso que produce calor para mover una máquina de vapor y que, a la vez, libera oxígeno respirable. Es decir, un motor que funciona sin aire exterior y que además fabrica el aire de la tripulación, exactamente el principio que hoy usan los submarinos no nucleares. Funcionó en pruebas en 1867. Para entonces se había gastado su dinero y el de una suscripción popular.",
        destacado: { tipo: "frase", frase: "Un motor que funciona sin aire y encima lo fabrica." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No consiguió que la marina se interesara y sus acreedores acabaron desguazando el submarino para vender el metal; las piezas se subastaron y el casco terminó como chatarra en un astillero. Murió en 1885, arruinado. Hoy hay dos réplicas del segundo aparato en Barcelona, una a tamaño real junto al puerto, y su nombre está en calles y en institutos, aunque fuera de España sea poco conocido. Aquel hombre que empezó mirando a unos pescadores de coral quedarse sin aire acabó construyendo el primer submarino de la historia que no dependía de que alguien saliera a la superficie a respirar.",
      },
    ],
  },

  {
    id: "primer-hundimiento",
    titulo: "Hundió un barco y no volvió",
    gancho: "Se había hundido ya dos veces en pruebas con toda su tripulación dentro. La tercera fue definitiva.",
    categoria: "Submarinos",
    color: "var(--clay)",
    encargo: "Un casco cilíndrico de hierro remachado, estrecho y alargado, sobre unos caballetes.",
    fotos: [
      {
        archivo: "Hunley 001.jpg",
        autor: "Arqueólogos trabajando dentro del casco recuperado del Hunley, Charleston, 2005.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Hunley_001.jpg",
        foco: "50% 50%",
        alt: "Dos personas inclinadas sobre el interior abierto de un casco de hierro remachado y cubierto de concreciones marinas.",
      },
      {
        archivo: "H. L. Hunley in sodium hydroxide bath.jpg",
        autor: "El casco del Hunley en su baño de conservación, Charleston, 2017. Fotografía de Pi3.124.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:H._L._Hunley_in_sodium_hydroxide_bath.jpg",
        foco: "50% 55%",
        alt: "El casco alargado y oxidado de un submarino antiguo, sumergido en un tanque de líquido verdoso.",
      },
      {
        archivo: "Ivan Aivazovsky Segelschiff auf hoher See bei Mondschein 1840er.jpg",
        autor: "«Velero en alta mar a la luz de la luna», óleo de Iván Aivazovski, década de 1840.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Ivan_Aivazovsky_Segelschiff_auf_hoher_See_bei_Mondschein_1840er.jpg",
        foco: "50% 50%",
        alt: "Pintura de un velero de noche sobre un mar oscuro, con la luna abriendo un camino de luz en el agua.",
      },
      {
        archivo: "H. L. Hunley in sodium hydroxide bath (3).jpg",
        autor: "Otra vista del casco del Hunley en el laboratorio de conservación, 2017. Fotografía de Pi3.124.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:H._L._Hunley_in_sodium_hydroxide_bath_(3).jpg",
        foco: "50% 55%",
        alt: "Vista lateral del submarino recuperado, suspendido con eslingas dentro de su tanque de tratamiento.",
      },
    ],
    entrada:
      "Charleston, en el sur de Estados Unidos, febrero de 1864. En plena guerra civil americana, un submarino de hierro de doce metros, movido a manivela por ocho hombres sentados en fila, sale de noche a atacar un barco de guerra que bloquea el puerto. Dentro no hay más aire que el que entra por dos tubos cortos, y una vela encendida sirve de aviso: mientras arda, se puede respirar. Consigue hundir el barco con una carga explosiva montada en la punta de un palo. Después hace la señal de vuelta y desaparece con toda su tripulación dentro.",
    paginas: [
      {
        rotulo: "Las dos veces",
        texto:
          "El aparato ya tenía historia antes de aquella noche. Medía doce metros, era poco más ancho que un hombre y se movía girando un cigüeñal entre ocho tripulantes sentados en fila, mientras un noveno lo gobernaba. Se había hundido dos veces durante las pruebas, matando a trece hombres en total, incluido el ingeniero que lo había financiado y diseñado, que iba a bordo en la segunda. Las dos veces lo reflotaron, sacaron los cuerpos y volvieron a tripularlo con voluntarios, porque el bloqueo asfixiaba a la ciudad y no había otra idea encima de la mesa.",
        destacado: { tipo: "cifra", cifra: "13", unidad: "muertos antes de la misión real" },
      },
      {
        rotulo: "La noche",
        texto:
          "La noche del ataque salió a fuerza de manivela, se acercó al buque enemigo y clavó en su casco un torpedo montado en la punta de un palo de cinco metros, que se detonó al retroceder. El barco se hundió en cuestión de minutos. El submarino llegó a hacer la señal luminosa convenida hacia la costa para avisar de que volvía a puerto, y a partir de ahí no se supo nada más de él. Los ocho hombres aparecieron ciento treinta y seis años después, sentados cada uno en su puesto, sin señales de haber intentado salir.",
        destacado: { tipo: "frase", frase: "Estaban cada uno en su puesto, sin haber intentado salir." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se localizó en 1995 y se levantó del fondo en el año 2000. La investigación posterior apunta a que la onda de choque de su propia carga, a solo cinco metros de distancia, les provocó una lesión pulmonar mortal casi instantánea, lo que explica que ninguno moviera un dedo. La carrera del submarino de guerra tardó medio siglo más en despegar, hasta que llegaron el motor y el torpedo autopropulsado. Aquel aparato hundió un barco de guerra por primera vez en la historia y se llevó por delante a veintiuna personas en tres intentos.",
      },
    ],
  },

  {
    id: "fondo-del-oceano",
    titulo: "Bajaron once kilómetros y creyeron ver un pez",
    gancho: "En 1960, dos hombres tocaron el punto más profundo del mar. Nadie volvió en cincuenta y dos años.",
    categoria: "Submarinos",
    color: "var(--plum)",
    encargo: "Una esfera de acero con una ventanilla diminuta colgando de un flotador enorme.",
    entrada:
      "Pacífico occidental, enero de 1960. Dos hombres se meten en una cabina de acero de dos metros colgada de un flotador lleno de gasolina y empiezan a bajar hacia el fondo de la fosa más profunda del planeta. Tardan casi cinco horas en llegar a once kilómetros de profundidad. Es el punto más hondo que existe en la Tierra.",
    paginas: [
      {
        rotulo: "El globo invertido",
        texto:
          "El aparato era una idea sencilla y brillante: un globo al revés. Como no existe material que aguante esa presión en un casco grande, la cabina habitable se hizo pequeña y esférica, con paredes de trece centímetros de acero, y se colgó de un tanque enorme lleno de gasolina, que flota y no se comprime con la presión. Para bajar se soltaba agua y para subir se soltaba lastre de perdigones de hierro sujetos con electroimanes, de modo que un corte de corriente devolvía el aparato a la superficie automáticamente.",
        destacado: { tipo: "frase", frase: "Los perdigones se soltaban solos si fallaba la corriente." },
      },
      {
        rotulo: "El fondo",
        texto:
          "A unos nueve mil metros oyeron un estallido seco: una ventana exterior de metacrilato se había agrietado, y decidieron seguir bajando de todas formas. Al llegar al fondo, la presión era de más de mil atmósferas, el equivalente a poner un coche encima de cada centímetro cuadrado del casco. Levantaron una nube de sedimento que les tapó la vista casi todo el rato. Uno de los dos afirmó haber visto un pez plano nadando, algo que se discutió durante décadas porque nadie esperaba vertebrados a esa profundidad y no había fotografía.",
        destacado: { tipo: "cifra", cifra: "1.000", unidad: "atmósferas de presión en el fondo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Estuvieron veinte minutos abajo y subieron. Nadie volvió a ese punto hasta 2012, cincuenta y dos años más tarde, y desde 2019 se ha bajado varias veces con sumergibles modernos que sí graban vídeo: han encontrado animales, sedimentos y también una bolsa de plástico y envoltorios de caramelo en el fondo. Del pez de 1960 se sigue dudando, porque a esa presión un pez con vejiga natatoria no debería poder existir, y hoy se cree que lo que vieron fue en realidad un pepino de mar removido por la nube de sedimento. La discusión lleva sesenta años abierta.",
      },
    ],
  },
];
