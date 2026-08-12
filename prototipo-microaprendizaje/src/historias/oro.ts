import type { Short } from "../shorts";

/* ==========================================================================
   El oro.

   El metal del que más se ha escrito y del que peor se cuenta, porque casi
   siempre se cuenta como símbolo: la riqueza, la codicia, el brillo. Aquí se
   cuenta como material. El oro tiene tres propiedades raras —no se oxida, es
   blandísimo y es densísimo— y de esas tres propiedades sale toda su
   historia, incluidas las historias más extrañas.

   La regla del tema: cada short parte de una propiedad física y llega a una
   decisión humana. Y siempre se da una cantidad comparable con algo que se
   pueda imaginar: un cubo, una piscina, una hora de fábrica. Los millones de
   onzas no significan nada para nadie.
   ========================================================================== */

export const ORO: Short[] = [
  {
    id: "medallas-disueltas",
    titulo: "Disolvieron dos Nobel",
    gancho: "Pasaron la guerra en un frasco naranja, en una estantería, a la vista de todo el mundo.",
    categoria: "Oro",
    color: "var(--plum)",
    encargo: "Un frasco de laboratorio con un líquido anaranjado en una estantería de madera.",
    fotos: [
      {
        archivo: "Nobel prize medal for medicine, Sweden, 1945, to Sir Alexander Fleming (1881-1955) who discovered Penicillin. On display at the National Museum of Scotland.jpg",
        autor: "Una medalla Nobel de oro macizo, la concedida a Alexander Fleming en 1945. Museo Nacional de Escocia.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Nobel_prize_medal_for_medicine,_Sweden,_1945,_to_Sir_Alexander_Fleming_(1881-1955)_who_discovered_Penicillin._On_display_at_the_National_Museum_of_Scotland.jpg",
        foco: "50% 45%",
        alt: "Una medalla de oro con el perfil de Alfred Nobel en relieve, sostenida por un soporte metálico.",
      },
      {
        archivo: "Iron Age coins, Hoard of Catuvellauni Staters (FindID 550072).jpg",
        autor: "Monedas de oro de la Edad del Hierro, enterradas dos mil años y sin una mancha. Birmingham Museums Trust.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Iron_Age_coins,_Hoard_of_Catuvellauni_Staters_(FindID_550072).jpg",
        foco: "50% 50%",
        alt: "Un montón de monedas de oro con relieves gastados, amontonadas sobre un fondo blanco.",
      },
      {
        archivo: "Chemistry Laboratory (acf62eb944754c95935e60828c18452a).jpg",
        autor: "Un laboratorio de química de principios del siglo XX, con los frascos alineados al fondo.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Chemistry_Laboratory_(acf62eb944754c95935e60828c18452a).jpg",
        foco: "50% 45%",
        alt: "Una nave larga con mesas de trabajo, barriles y estanterías cargadas de frascos, en blanco y negro.",
      },
      {
        archivo: "Gold ingot and bar of Banque de France.jpg",
        autor: "Dos lingotes de oro fundido. Fotografía de Ibex73.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Gold_ingot_and_bar_of_Banque_de_France.jpg",
        foco: "50% 45%",
        alt: "Un lingote grande y otro pequeño de oro, brillando sobre una tela gris oscura.",
      },
    ],
    entrada:
      "Copenhague, 9 de abril de 1940. Las tropas alemanas entran en Dinamarca al amanecer y en cuestión de horas el país está ocupado. En un instituto de física de la ciudad hay dos medallas Nobel de oro macizo que no son de ningún danés: se las habían mandado allí para ponerlas a salvo dos científicos alemanes que las habían sacado de su país en secreto, algo castigado en Alemania con penas gravísimas. Llevan el nombre grabado, así que si aparecen en un registro delatan a sus dueños y probablemente los condenan. Un químico del instituto decide esconderlas de la única forma que se le ocurre.",
    paginas: [
      {
        rotulo: "El único líquido",
        texto:
          "El oro no se oxida ni reacciona con casi nada, y esa es justamente la razón de que se use para medallas y anillos: dura. Tampoco lo disuelven los ácidos corrientes por separado. Existe, sin embargo, una mezcla de dos de ellos que sí lo consigue, y que los antiguos alquimistas bautizaron como agua regia, el agua de los reyes, porque atacaba al rey de los metales. Aquella mañana el químico preparó la mezcla en un frasco y fue metiendo las medallas dentro. El oro tardó horas en desaparecer, porque una medalla es una pieza compacta y el ataque avanza despacio desde la superficie.",
        destacado: { tipo: "frase", frase: "Los alquimistas la llamaron agua regia: disuelve al rey de los metales." },
      },
      {
        rotulo: "En la estantería",
        texto:
          "El líquido resultante era de un naranja oscuro y turbio, exactamente igual que decenas de frascos que había en aquel laboratorio. El químico lo colocó en un estante alto, entre los demás, sin etiqueta llamativa y sin esconderlo en ningún sitio raro, que es lo que habría delatado el asunto. Los soldados registraron el edificio a fondo durante la ocupación, buscaron en cajones, armarios y cajas fuertes, y pasaron por delante de aquel frasco sin mirarlo dos veces. Allí siguió cinco años. Cuando el químico volvió al instituto en 1945, después de haber huido del país, el frasco continuaba en el mismo estante.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "años pasó el oro disuelto en el estante" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El proceso se puede deshacer, y eso es lo que hizo. Añadiendo la sustancia adecuada, el oro disuelto vuelve a formar un polvo pardo que se posa en el fondo del frasco y que se puede filtrar, secar y fundir. Aquel polvo se envió a la fundación que entrega los premios, se acuñaron de nuevo las dos medallas con el mismo metal y se devolvieron a sus dueños en 1952. Ninguna de las dos había perdido un solo gramo por el camino, porque un elemento químico no se destruye al disolverse: cambia de forma. Y el químico que tuvo la idea ganó su propio premio en 1943, mientras el frasco seguía en el estante.",
      },
    ],
  },

  {
    id: "oro-del-mar",
    titulo: "Buscar oro en el mar",
    gancho: "El plan era pagar la indemnización de una guerra entera filtrando el océano. El mar tenía mil veces menos de lo calculado.",
    categoria: "Oro",
    color: "var(--slate)",
    encargo: "La cubierta de un barco de carga antiguo con depósitos metálicos y mar abierto al fondo.",
    fotos: [
      {
        archivo: "Gold nugget (Australia) 4 (16848647509).jpg",
        autor: "Pepita de oro natural procedente de Australia. Fotografía de James St. John.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Gold_nugget_(Australia)_4_(16848647509).jpg",
        foco: "50% 50%",
        alt: "Pepita de oro grande y rugosa, con la superficie brillante llena de huecos y pliegues.",
      },
      {
        archivo: "2019--09-14 01 Short-sea shipping EEMS DELFIA - IMO 8411633.jpg",
        autor: "Buque de carga de cabotaje, del tipo que se usaba para llevar laboratorios improvisados a bordo. Fotografía de Gordon Leggett.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:2019--09-14_01_Short-sea_shipping_EEMS_DELFIA_-_IMO_8411633.jpg",
        foco: "50% 50%",
        alt: "Barco de carga alargado navegando con la proa levantada y la bodega cerrada.",
      },
      {
        archivo: "Gold fluvial pebbles (placer gold) (Washington State, USA) 4 (16846562679).jpg",
        autor: "Granos de oro de aluvión recogidos en un río del estado de Washington. Fotografía de James St. John.",
        licencia: "CC BY 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Gold_fluvial_pebbles_(placer_gold)_(Washington_State,_USA)_4_(16846562679).jpg",
        foco: "50% 50%",
        alt: "Puñado de pepitas y láminas diminutas de oro sobre un fondo oscuro.",
      },
      {
        archivo: "Gold nugget (Australia) 1 (16847082298).jpg",
        autor: "Otra pepita de oro australiana, vista de cerca. Fotografía de James St. John.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Gold_nugget_(Australia)_1_(16847082298).jpg",
        foco: "50% 50%",
        alt: "Pepita de oro alargada y retorcida, con el brillo metálico marcado por la luz.",
      },
    ],
    entrada:
      "Alemania, 1920. El país acaba de perder una guerra mundial y debe una indemnización tan enorme que nadie sabe de dónde va a salir el dinero. Un químico famoso, premiado por haber encontrado la forma de fabricar abono a partir del aire, propone al gobierno una salida insólita: el agua del mar contiene oro disuelto, y hay muchísima agua de mar. Bastaría con filtrarla. Le montan una expedición en secreto, con el laboratorio entero metido en la bodega de un carguero y todo el material etiquetado como equipo oceanográfico para que nadie preguntara.",
    paginas: [
      {
        rotulo: "El laboratorio flotante",
        texto:
          "El dato de partida venía de un análisis publicado años antes que daba unos seis miligramos de oro por cada tonelada de agua. Con esa cifra las cuentas salían: bastaba con procesar cantidades industriales de agua para reunir toneladas de metal. El equipo montó un laboratorio completo en la bodega de un barco de carga, con bombas, filtros y depósitos, y se pasó dos años cruzando el Atlántico en varios viajes, tomando muestras a distintas profundidades y a distintas latitudes, en secreto y con el material etiquetado como equipo oceanográfico para no levantar sospechas.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "años cruzando el océano tomando muestras" },
      },
      {
        rotulo: "El error de mil",
        texto:
          "Los resultados fueron demoledores y llegaron pronto. El análisis original estaba equivocado por un factor de mil: en el agua del mar hay del orden de cuatro milésimas de miligramo de oro por tonelada, una cantidad tan pequeña que solo detectarla exige un cuidado extremo, porque cualquier resto de polvo o cualquier pieza metálica del propio equipo contamina la muestra y da de más. Para reunir un solo gramo de oro habría que tratar cientos de miles de toneladas de agua. El coste de bombearla y filtrarla superaba muchísimas veces el valor del metal obtenido, y no había ingenio que arreglara eso.",
        destacado: { tipo: "frase", frase: "El análisis de partida estaba equivocado por un factor de mil." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El proyecto se abandonó en 1926 sin haber pagado ni una parte de la deuda, y su director, que había esperado saldarla él solo, lo vivió como el fracaso de su vida. Quedó, en cambio, una serie de mediciones oceanográficas excelentes que todavía se citan, porque para descartar el oro hubo que aprender a medir concentraciones diminutas en el agua, y eso sirvió para todo lo demás. Y quedó un cálculo que se repite cada pocos años cuando alguien vuelve a anunciar el mismo negocio: en los océanos hay unos veinte millones de toneladas de oro, repartidas en mil trescientos millones de kilómetros cúbicos de agua. Está ahí y no sirve.",
      },
    ],
  },

  {
    id: "todo-el-oro-en-un-cubo",
    titulo: "Todo el oro en un cubo",
    gancho: "Un cubo de veintidós metros de lado contiene cada moneda, cada anillo y cada lingote jamás extraídos.",
    categoria: "Oro",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un cubo dorado macizo junto a un edificio de tres plantas, a la misma escala.",
    entrada:
      "El cálculo se rehace cada año y en 2024 daba una cifra redonda: en toda la historia de la humanidad se han extraído algo más de doscientas mil toneladas de oro. Suena a muchísimo, pero el oro es el metal más denso con el que trata la gente corriente, y la densidad juega en contra de la intuición. Todo ese metal junto ocupa menos de lo que cualquiera supone.",
    paginas: [
      {
        rotulo: "La cuenta del cubo",
        texto:
          "Un litro de oro pesa diecinueve kilos y trescientos gramos, casi tres veces lo que pesa un litro de hierro. Dividiendo las doscientas mil toneladas entre esa densidad salen unos once mil metros cúbicos, que es el volumen de un cubo macizo de poco más de veintidós metros de lado: cabría holgadamente dentro de una iglesia mediana y no llegaría a la altura de un edificio de ocho plantas. Puesto de otra manera, todo el oro extraído desde la prehistoria llenaría cuatro piscinas olímpicas y media. Ahí dentro está cada moneda romana, cada anillo, cada diente y cada lingote.",
        destacado: { tipo: "cifra", cifra: "22", unidad: "metros de lado tendría el cubo" },
      },
      {
        rotulo: "Casi nada se pierde",
        texto:
          "Que la cuenta funcione depende de una propiedad rarísima: el oro no se oxida, no se pudre y no se consume al usarlo, así que prácticamente todo el que se ha sacado de la tierra sigue existiendo en alguna parte. Se calcula que solo se ha perdido de forma irrecuperable unas pocas centésimas del total, en naufragios, en tumbas sin encontrar y en usos que lo dispersan en cantidades minúsculas. Lo demás se ha fundido y refundido una y otra vez, de modo que los átomos de una alianza comprada este año pueden venir de una moneda antigua, de un adorno funerario o de un cáliz.",
        destacado: { tipo: "frase", frase: "Casi todo el oro que se ha sacado sigue existiendo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La comparación que mejor coloca la cifra es esta: el mundo fabrica en una sola hora más acero del que se ha extraído de oro en toda la historia. Doscientas mil toneladas es lo que sale de los altos hornos del planeta entre las nueve y las diez de la mañana de un día cualquiera. Todo lo que el oro ha significado —imperios, expediciones, guerras y siglos de trabajo en las minas— cabe en un cubo que se puede rodear caminando en menos de un minuto. Y sigue siendo escaso de verdad: la producción anual añade a ese cubo poco más de veinte centímetros de altura.",
      },
    ],
  },
];
