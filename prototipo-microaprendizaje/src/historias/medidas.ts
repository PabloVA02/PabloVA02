import type { Short } from "../shorts";

/* ==========================================================================
   Medidas.

   Metros, horas, calendarios: los acuerdos invisibles sobre los que va todo
   lo demás. El riesgo del tema es la tabla de conversiones, que es lo más
   aburrido que existe.

   La regla del tema: se cuenta EL LÍO QUE HABÍA ANTES. Cada pueblo con su
   propia libra. Cada estación de tren con su propia hora. Diez días que
   desaparecieron del calendario y provocaron motines. Una medida solo se
   entiende cuando se ve el desorden que vino a arreglar.

   Y siempre se dice quién ganaba con el desorden, porque nunca se cambia
   una medida sin que alguien pierda dinero.
   ========================================================================== */

export const MEDIDAS: Short[] = [
  {
    id: "metro-meridiano",
    titulo: "El metro se midió a pie",
    gancho: "Dos astrónomos tardaron siete años en medir un trozo de meridiano, en plena Revolución francesa.",
    categoria: "Medidas",
    color: "var(--ochre)",
    encargo: "Una barra metálica larga apoyada sobre soportes en una sala de museo.",
    fotos: [
      {
        archivo: "Platinum-Iridium meter bar.jpg",
        autor: "El metro patrón de platino e iridio, con su perfil en forma de equis.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Platinum-Iridium_meter_bar.jpg",
        foco: "50% 45%",
        alt: "Una barra metálica brillante de sección en equis, apoyada en dos soportes sobre un fondo rojo.",
      },
      {
        archivo: "Star trails (starstax).jpg",
        autor: "Estelas de estrellas sobre un observatorio, en una exposición larga. Fotografía de A. Duro, ESO.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Star_trails_(starstax).jpg",
        foco: "50% 45%",
        alt: "Círculos concéntricos de luz dibujados por las estrellas en el cielo nocturno sobre un horizonte oscuro.",
      },
      {
        archivo: "Sedan, Église Saint-Charles-Borromée de Sedan -- 2017 -- 4893.jpg",
        autor: "Los campanarios de una iglesia francesa sobre los tejados. Fotografía de Dietmar Rabich, 2017.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sedan,_%C3%89glise_Saint-Charles-Borrom%C3%A9e_de_Sedan_--_2017_--_4893.jpg",
        foco: "40% 45%",
        alt: "Dos torres de piedra con remate de pizarra asomando por encima de los tejados de una ciudad.",
      },
      {
        archivo: "Post Medieval trade weight of Charles I or II (FindID 461853).jpg",
        autor: "Una pesa de comercio del siglo XVII, de las que el sistema métrico dejó fuera de uso.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Post_Medieval_trade_weight_of_Charles_I_or_II_(FindID_461853).jpg",
        foco: "42% 45%",
        alt: "Una pesa cuadrada de metal oscuro con un sello acuñado en la cara, muy gastada por el uso.",
      },
    ],
    entrada:
      "Francia, 1792. El país acaba de derribar a su rey y decide de paso acabar con otro desorden que llevaba siglos enquistado: en el reino se usan más de doscientas cincuenta mil unidades de medida distintas, porque cada comarca tiene su propia libra y su propia vara, a veces cambian de un pueblo al siguiente y casi siempre las fija el señor del lugar, que es quien sale ganando. Comprar grano en dos mercados vecinos exige saber dos sistemas. La Academia de Ciencias propone entonces algo nuevo: inventar una medida que no dependa de ningún rey ni de ninguna costumbre local.",
    paginas: [
      {
        rotulo: "La cuenta",
        texto:
          "La idea fue tomarla de la Tierra: se definió el metro como la diezmillonésima parte de la distancia entre el polo norte y el ecuador, medida por el meridiano que pasa por París. Como nadie podía recorrer eso, se encargó a dos astrónomos que midieran con precisión el tramo entre Dunkerque y Barcelona y extrapolaran el resto. El método consistía en cubrir el terreno con una cadena de triángulos imaginarios, subiendo a campanarios y a cerros para tomar ángulos con un instrumento de latón, y calculando cada lado a partir del anterior.",
        destacado: { tipo: "cifra", cifra: "250.000", unidad: "unidades distintas había en Francia" },
      },
      {
        rotulo: "Siete años",
        texto:
          "Salieron en direcciones opuestas y tardaron siete años en un viaje previsto para uno. Trabajaban con instrumentos raros en lo alto de las iglesias en pleno terror revolucionario, así que los detenían por espías cada pocas semanas; uno estuvo preso en Cataluña cuando estalló la guerra entre los dos países y tuvo que seguir midiendo con permiso militar. El del sur descubrió al final un error propio en las mediciones de Barcelona y no se atrevió a confesarlo; el fallo apareció al revisar sus cuadernos, ya muerto él, y hace que el metro original sea unas décimas de milímetro corto.",
        destacado: { tipo: "frase", frase: "Ocultó un error de medición y el metro salió un pelo corto." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Con el resultado se fabricó una barra de platino que fue el metro oficial durante casi un siglo, guardada bajo llave cerca de París y copiada para cada país. El problema es que una barra se dilata, se raya y puede robarse, así que la definición se ha cambiado tres veces desde entonces: hoy el metro es la distancia que recorre la luz en una fracción concretísima de segundo, y cualquier laboratorio del mundo puede reproducirlo sin pedirle prestada la barra a nadie. Estados Unidos, Liberia y Birmania siguen midiendo en pies y en libras.",
      },
    ],
  },

  {
    id: "diez-dias-perdidos",
    titulo: "Los diez días perdidos",
    gancho: "Se acostaron el jueves 4 de octubre y se levantaron el viernes 15. Hubo protestas por los alquileres.",
    categoria: "Medidas",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una hoja de calendario antiguo con los días impresos en dos columnas.",
    fotos: [
      {
        archivo: "Wells Cathedral Clock (28080771737).jpg",
        autor: "Esfera del reloj astronómico de la catedral de Wells, en Inglaterra, del siglo XIV.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Wells_Cathedral_Clock_(28080771737).jpg",
        foco: "50% 45%",
        alt: "Gran esfera pintada de reloj medieval con círculos concéntricos, estrellas doradas y una luna.",
      },
      {
        archivo: "Cadrans horloge astronomique Besancon.jpg",
        autor: "Esferas del reloj astronómico de la catedral de Besanzón. Fotografía de PCouton.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cadrans_horloge_astronomique_Besancon.jpg",
        foco: "50% 50%",
        alt: "Decenas de esferas pequeñas de un reloj astronómico, cada una con sus agujas y sus cifras.",
      },
      {
        archivo: "Tour du Gros-Horloge (30268931094).jpg",
        autor: "El Gros-Horloge de Ruan, con su esfera dorada sobre el arco de la calle. Fotografía de Jorge Láscar.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Tour_du_Gros-Horloge_(30268931094).jpg",
        foco: "50% 50%",
        alt: "Esfera dorada de un reloj antiguo empotrada en un arco de piedra sobre una calle estrecha.",
      },
      {
        archivo: "Gros-Horloge (30599909950).jpg",
        autor: "El arco del Gros-Horloge de Ruan iluminado de noche. Fotografía de Jorge Láscar.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Gros-Horloge_(30599909950).jpg",
        foco: "50% 50%",
        alt: "Arco renacentista con un reloj dorado iluminado, visto desde la calle de noche.",
      },
    ],
    entrada:
      "Roma, febrero de 1582. El calendario que usa Europa desde hace mil seiscientos años tiene un fallo pequeño pero acumulativo: da el año por once minutos más largo de lo que dura en realidad. Once minutos al año no los nota nadie, pero en dieciséis siglos se han convertido en diez días enteros de desfase. La primavera ha empezado a llegar antes de la fecha marcada, y con ella se ha ido descolocando la Pascua, que es lo que de verdad preocupa en Roma. El papa firma entonces una bula que arregla el problema de la manera más brusca posible.",
    paginas: [
      {
        rotulo: "Por qué importaba",
        texto:
          "El problema no era agrícola sino religioso. La fecha de la Pascua se calcula a partir del equinoccio de primavera, fijado por un concilio del año 325 en el 21 de marzo, y con el desfase acumulado el equinoccio real caía ya el 11. Si nadie lo corregía, en unos siglos la Pascua acabaría celebrándose en verano. La solución que se adoptó tuvo dos partes: saltarse diez días de golpe para recolocar el calendario donde debía estar, y cambiar la regla de los años bisiestos para que el desfase no volviera a acumularse, quitando tres de cada cuatrocientos años.",
        destacado: { tipo: "cifra", cifra: "11", unidad: "minutos al año hicieron diez días" },
      },
      {
        rotulo: "El salto",
        texto:
          "En los países que obedecieron de inmediato —España, Portugal, Italia y Polonia— el jueves 4 de octubre de 1582 fue seguido por el viernes 15. Los días 5 a 14 no existieron. Hubo quejas prácticas y razonables: quien alquilaba una casa por meses quería pagar diez días menos, quien prestaba dinero quería cobrar los intereses completos, y los tribunales tuvieron que resolver pleitos por contratos firmados a caballo del salto. Los países protestantes se negaron a aplicarlo durante siglo y medio por un motivo que no tenía nada que ver con la astronomía: el cambio venía de Roma y de un papa, y aceptarlo equivalía a reconocerle autoridad.",
        destacado: { tipo: "frase", frase: "Del jueves 4 se pasó al viernes 15. Nada en medio." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Inglaterra aguantó hasta 1752 y para entonces el desfase era de once días; hubo altercados y un cuadro famoso recoge la consigna de devolvernos nuestros once días. Rusia no cambió hasta 1918, y por eso su revolución de octubre se celebra en noviembre. Grecia fue la última de Europa, en 1923. El calendario que salió de aquel salto sigue teniendo un error, aunque mucho más pequeño: acumula un día de desfase cada tres mil años largos, de modo que el problema le tocará resolverlo a alguien muy lejano. Nadie ha vuelto a borrar días desde 1923.",
      },
    ],
  },

  {
    id: "horas-del-tren",
    titulo: "La hora la puso el tren",
    gancho: "Cada ciudad tenía su propia hora según el sol. Con vías de por medio, eso empezó a matar gente.",
    categoria: "Medidas",
    color: "var(--slate)",
    encargo: "Un reloj grande de estación con dos juegos de agujas sobre la misma esfera.",
    entrada:
      "Reino Unido, década de 1840. Hasta ese momento cada ciudad tiene su propia hora, marcada por el sol: cuando el astro está más alto, son las doce, y como el sol no llega a todas partes a la vez, hay unos veinte minutos de diferencia entre las dos puntas del país. Nunca ha importado. Con el ferrocarril empieza a importar mucho.",
    paginas: [
      {
        rotulo: "El choque",
        texto:
          "Un tren que salía a las diez de una ciudad llegaba a otra donde eran las diez menos cuarto, y los horarios impresos se volvieron un rompecabezas que nadie sabía leer. El peligro real estaba en las vías únicas, donde dos convoyes se cruzaban en un apartadero a una hora acordada: si los relojes de las dos estaciones no coincidían, los trenes se encontraban de frente. Hubo accidentes por eso. Las compañías empezaron a imponer una hora única en toda su red, la de la capital, y a repartirla por telégrafo.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "minutos de diferencia entre dos puntas del país" },
      },
      {
        rotulo: "Las dos agujas",
        texto:
          "Durante años convivieron las dos horas y muchas estaciones colgaron relojes con dos minuteros, uno para la hora local y otro para la del ferrocarril, o con una manecilla adicional pintada de otro color. Las ciudades se resistían a ceder, porque su hora era una señal de identidad y estaba ligada a las campanas de la iglesia. En Estados Unidos, con un territorio inmenso y decenas de compañías compitiendo, se llegaron a manejar más de cincuenta horas ferroviarias distintas a la vez, y un viajero que cruzara el país podía tener que ajustar el reloj media docena de veces. Las compañías se pusieron de acuerdo por su cuenta en 1883, sin esperar a ninguna ley.",
        destacado: { tipo: "frase", frase: "Muchos relojes de estación tenían dos minuteros a la vez." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El reparto mundial en veinticuatro franjas se acordó en una conferencia en Washington en 1884, con veinticinco países y una discusión larga sobre por dónde debía pasar la línea de referencia; ganó el observatorio de Greenwich porque la mayoría de las cartas náuticas ya lo usaban. Francia se abstuvo y siguió con su propia hora hasta 1911. Aquello dejó un mundo donde la hora no la marca el sol de cada sitio, sino un acuerdo, y donde uno puede cruzar una frontera y cambiar de hora sin que el cielo se entere.",
      },
    ],
  },
];
