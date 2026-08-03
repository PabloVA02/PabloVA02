import type { Short } from "../shorts";
import cesarFoto from "../fotos/cesar-camuccini.jpg";

/* ==========================================================================
   Figuras.

   El tema que más engancha y el más fácil de estropear. Engancha porque el
   nombre ya está en la cabeza del lector —Julio César, Cleopatra, Napoleón—
   y no hay que gastar una línea explicando de quién hablamos. Se estropea
   cuando la historia se convierte en una biografía resumida: nació, conquistó,
   murió. Eso ya lo sabe todo el mundo y no lo lee nadie.

   La regla de este tema: NO se cuenta la vida, se cuenta UNA cosa que no
   sabías de alguien que crees conocer. El título dice el nombre —para eso
   sirve el nombre— y detrás va la promesa concreta:

       Julio César: 23 puñaladas y solo una mortal
       Cleopatra: más cerca de la Luna que de las pirámides

   Y las tres páginas van, como en el resto de la sección, de lo que pasaba
   antes al giro y de ahí a lo que quedó. Cerrar por lo que quedó es lo que
   convierte una anécdota en una historia: por qué te sigue tocando hoy.

   Cuando el dato tiene discusión —la estatura de Napoleón, el áspid de
   Cleopatra, el linaje de Gengis Kan—, la discusión se cuenta. Es más
   interesante que la versión limpia y evita que la app se dedique a repetir
   leyendas con buena tipografía.
   ========================================================================== */

export const FIGURAS: Short[] = [
  {
    id: "cesar",
    titulo: "Julio César: 23 puñaladas y solo una mortal",
    gancho: "Lo apuñalaron sesenta hombres a la vez. El médico encontró que solo un golpe lo mató.",
    categoria: "Figuras",
    color: "var(--clay)",
    /* Estaba el busto de los Museos Vaticanos, y el busto ilustra a César; lo
       que promete el título son las veintitrés puñaladas. El cuadro de
       Camuccini enseña el asesinato en marcha —el nudo de togas y los puñales
       en alto— y eso se lee de un vistazo, que es todo el tiempo que tiene una
       portada en un pase. */
    foto: {
      /* Empotrada, no traída de Commons. Es lo mismo que se hizo con Venus y
         por el mismo motivo: la portada de un short es lo primero que se ve, y
         no puede depender de que una petición a otro dominio llegue a tiempo
         —ni de que llegue—. */
      local: cesarFoto,
      autor: "Vincenzo Camuccini · Museo di Capodimonte",
      licencia: "Dominio público",
      /* El original es de 1920×1088, casi el doble de ancho que de alto, y el
         marco del muro es de móvil. El recorte se queda con el 72 % central:
         fuera el muro vacío de la derecha y el figurante del borde, dentro la
         estatua de Pompeyo, el racimo de puñales y César cayendo de ocre, que
         es lo que promete el título. Quedan 1200×944. */
      /* El cuadro entra entero y se apoya arriba; el pie del velo lo va
         apagando justo donde arranca el texto. */
      panoramica: { alto: "9%" },
      alt: "El asesinato de Julio César pintado por Camuccini: los conspiradores, en toga blanca, alzan los puñales sobre César, que cae vestido de ocre.",
    },
    encargo: "El asesinato de César con los puñales en alto, encuadrado a plomo sobre la escena.",
    entrada:
      "Roma, año 44 antes de Cristo. Julio César es el hombre más poderoso del mundo conocido: ha conquistado la Galia, la actual Francia, ha ganado una guerra civil contra sus propios compatriotas y gobierna de hecho todo el Mediterráneo. Aquella mañana de marzo entra a una reunión del Senado sin guardaespaldas. Dentro le esperan unos sesenta hombres con un puñal escondido bajo la ropa.",
    paginas: [
      {
        rotulo: "El casi rey",
        texto:
          "Para entender por qué querían matarlo hay que saber una cosa de Roma: llevaba casi quinientos años sin rey, y estaba orgullosísima de ello. El poder se repartía entre varios cargos que duraban un año, precisamente para que nadie mandase demasiado tiempo. César rompió esa regla. Se hizo nombrar dictador de por vida, puso su propia cara en las monedas —un honor reservado hasta entonces a los dioses y a los muertos— y presidía el Senado sentado en una silla dorada. Nunca llegó a coronarse rey. Pero para muchos senadores, la diferencia había dejado de existir.",
        destacado: { tipo: "cifra", cifra: "500", unidad: "años llevaba Roma sin un rey" },
      },
      {
        rotulo: "La emboscada",
        texto:
          "Decidieron matarlo dentro del Senado, delante de todos, para que aquello pareciera una ejecución y no un asesinato. Un senador se le acercó con una petición y le agarró la toga: esa era la señal. César trató de defenderse con lo único que llevaba encima, un punzón de escribir. Entre los hombres que lo rodeaban con el puñal en la mano estaba Bruto, al que él había perdonado en la guerra civil y protegido durante años. Al reconocerlo, cuentan las fuentes antiguas, dejó de resistirse y se cubrió la cara con la toga.",
        destacado: {
          tipo: "frase",
          frase: "Lo único que llevaba encima para defenderse era un punzón de escribir.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El cuerpo se quedó tirado en el suelo casi tres horas, hasta que tres esclavos se lo llevaron a casa en una camilla. Un médico lo examinó y contó veintitrés puñaladas. Solo una, escribió, había sido mortal: la segunda, la del pecho. Las otras veintidós sobraban. Los asesinos salieron a la calle gritando que Roma volvía a ser libre, y no los siguió nadie. Diecisiete años más tarde, el sobrino nieto de César gobernaba como primer emperador. Habían matado a un hombre para no tener un rey, y lo que consiguieron fue un imperio.",
      },
    ],
  },

  {
    id: "cleopatra",
    titulo: "Cleopatra: más cerca de la Luna que de las pirámides",
    gancho: "Cuando ella nació, la Gran Pirámide ya era más antigua que ella para nosotros.",
    categoria: "Figuras",
    color: "var(--plum)",
    foto: {
      archivo: "Kleopatra-VII.-Altes-Museum-Berlin1.jpg",
      autor: "Altes Museum, Berlín",
      licencia: "Dominio público",
      foco: "50% 34%",
      alt: "Busto de mármol de Cleopatra VII conservado en el Altes Museum de Berlín.",
    },
    encargo: "Un busto o un relieve de Cleopatra, mejor de perfil, muy iluminado por un lado.",
    entrada:
      "Cleopatra VII no era egipcia: era griega, macedonia, la última de una dinastía que llevaba trescientos años gobernando Egipto sin molestarse en aprender la lengua del país. Ella fue la primera de los Ptolomeos que sí la aprendió, y no por cariño: la usó como se usa una herramienta de trabajo, junto a otras ocho lenguas.",
    paginas: [
      {
        rotulo: "La cuenta que no cuadra",
        texto:
          "La Gran Pirámide se terminó hacia el 2560 a. C. Cleopatra murió en el 30 a. C. Entre las dos hay <strong>2.530 años</strong>. Entre Cleopatra y el primer hombre en la Luna hay 1.999. Es decir: está más cerca de Neil Armstrong que de la pirámide que tenía al lado de casa. Cuando ella subió al trono, Keops llevaba levantado más tiempo del que nos separa hoy de ella, y Gizeh ya era una parada de turistas: hay grafitis en griego rascados en las piedras por visitantes de su época. Los faraones que aparecen en los libros de texto eran, para ella, arqueología.",
        destacado: { tipo: "cifra", cifra: "2.530", unidad: "años entre la pirámide y ella" },
      },
      {
        rotulo: "El saco de ropa",
        texto:
          "La alfombra enrollada es de Hollywood. Plutarco dice un saco de ropa de cama: Apolodoro el siciliano la metió dentro, se lo cargó al hombro y la coló en el palacio de Alejandría, delante de César. Cleopatra tenía veintiún años y su hermano acababa de echarla del trono; nueve meses después nació un niño al que llamó Cesarión. Y sobre lo otro, Plutarco es explícito y sorprendente: dice que su belleza no era de las que dejan sin habla, que lo irresistible era el trato, la conversación y una voz que manejaba como un instrumento.",
        destacado: {
          tipo: "frase",
          frase: "«Su hermosura no era incomparable». Lo irresistible era hablar con ella.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Tras la derrota de Accio, en el 31 a. C., Octavio entró en Egipto y ella se mató antes de acabar exhibida en un desfile en Roma. Lo del áspid es dudoso desde el principio: Plutarco ya escribe que nadie sabe cómo entró el veneno, que se habló de una serpiente escondida en una cesta de higos y que en el cuerpo no se encontraron marcas claras. Con su muerte, Egipto pasó a ser una provincia romana más. No terminó un reinado: terminaron tres mil años de faraones, y la última fue una mujer que hablaba griego en casa.",
      },
    ],
  },

  {
    id: "alejandro",
    titulo: "Alejandro Magno: 32 años y ni una derrota",
    gancho: "Murió más joven de lo que se retira hoy un futbolista, y su cadáver fue lo primero que se robaron.",
    categoria: "Figuras",
    color: "var(--ochre)",
    foto: {
      archivo: "BattleofIssus333BC-mosaic-detail1.jpg",
      autor: "Mosaico de Alejandro, Pompeya",
      licencia: "Dominio público",
      foco: "50% 40%",
      alt: "Detalle del mosaico de Pompeya en el que Alejandro carga en la batalla de Issos.",
    },
    encargo: "El detalle de la cara de Alejandro en el mosaico de Issos, con el ojo muy abierto.",
    entrada:
      "En trece años, un macedonio de veinte convirtió un reino de montaña en el mayor imperio conocido hasta entonces: de Grecia al Indo. Fundó unas setenta ciudades y a casi todas les puso su nombre. A los treinta y dos estaba muerto en Babilonia, sin heredero claro, y sus generales se repartieron el mundo antes de enterrarlo.",
    paginas: [
      {
        rotulo: "El nudo",
        texto:
          "En Gordio, Frigia, había un carro atado con un nudo imposible de deshacer y un oráculo: quien lo desatara reinaría en Asia. Llevaba generaciones venciendo a todo el que lo intentaba. Alejandro lo miró un rato y lo partió de un tajo con la espada —otra versión, la de su ingeniero Aristóbulo, dice que sacó la clavija del yugo y el nudo se soltó solo—. Lo importante no es cómo lo hizo, sino lo que hizo después: asegurarse de que la historia se contara en todas partes. No resolvió el acertijo. Cambió las reglas del acertijo y convirtió el gesto en propaganda.",
        destacado: { tipo: "cifra", cifra: "0", unidad: "batallas perdidas en 13 años" },
      },
      {
        rotulo: "El cadáver secuestrado",
        texto:
          "Murió en Babilonia en junio del 323 a. C. tras diez días de fiebre. Preguntado por quién heredaba, dejó dicho —o eso se contó— que el más fuerte. El cortejo fúnebre salió hacia Macedonia con un carro de oro tirado por sesenta y cuatro mulas, y a mitad de camino Ptolomeo lo interceptó y se lo llevó a Egipto: en aquel mundo, tener el cuerpo era tener el derecho a heredarlo. Estuvo expuesto en Alejandría durante siglos. Lo visitó Julio César. Lo visitó Augusto, que según Suetonio le rompió un trozo de nariz al inclinarse a besarlo. Después, la tumba se perdió y no ha vuelto a aparecer.",
        destacado: {
          tipo: "frase",
          frase: "Se robaron el cadáver porque el cadáver era el título de propiedad.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El imperio duró menos que él: a los pocos años de morir estaba partido en tres, y sus generales se mataron entre ellos durante cuarenta. Lo que no se deshizo fue lo otro. El griego se convirtió en la lengua franca desde Egipto hasta la frontera de la India y aguantó mil años; en Afganistán y Pakistán aparecieron budas esculpidos con pliegues de túnica griega; Alejandría acabó teniendo la mayor biblioteca del mundo antiguo. Y el Nuevo Testamento se escribió en griego corriente, el de los mercados, porque era el idioma en el que se entendía medio mundo. Ese es su verdadero imperio, y ese sí duró.",
      },
    ],
  },

  {
    id: "gengis",
    titulo: "Gengis Kan: uno de cada 200 hombres desciende de él",
    gancho: "Un estudio de ADN encontró su firma en dieciséis millones de hombres vivos.",
    categoria: "Figuras",
    color: "var(--slate)",
    foto: {
      archivo: "YuanEmperorAlbumGenghisPortrait.jpg",
      autor: "Álbum imperial Yuan, Museo del Palacio Nacional",
      licencia: "Dominio público",
      foco: "50% 30%",
      alt: "Retrato clásico de Gengis Kan del álbum de emperadores de la dinastía Yuan.",
    },
    encargo: "El retrato Yuan de Gengis Kan, o una estepa mongola vacía con un caballo.",
    entrada:
      "Temujin nació en una tienda de fieltro, se quedó huérfano de niño y pasó una temporada prisionero de un clan rival, con un cepo de madera al cuello. Murió siendo dueño del imperio continuo más grande que ha existido. Pero su huella más rara no está en los mapas: está en el cromosoma Y de millones de hombres que hoy no saben nada de él.",
    paginas: [
      {
        rotulo: "El linaje",
        texto:
          "En 2003, un equipo internacional analizó el cromosoma Y de más de dos mil hombres de Asia y encontró algo que no encaja con la biología normal: una misma firma genética en torno al <strong>8 %</strong> de los varones de la antigua zona del imperio mongol, unos dieciséis millones de personas. Una línea familiar no se extiende así sola; hace falta poder. El rastro apunta a la Mongolia del siglo XII y a una familia con acceso ilimitado a mujeres durante generaciones. No hay confirmación directa —no se ha encontrado la tumba, así que no hay ADN con el que comparar—, pero la coincidencia de fecha y mapa es difícil de explicar de otra manera.",
        destacado: { tipo: "cifra", cifra: "16", unidad: "millones de hombres" },
      },
      {
        rotulo: "La tumba que no aparece",
        texto:
          "Murió en 1227 y quiso desaparecer. Lo enterraron en secreto en algún punto del norte de Mongolia, probablemente cerca del monte Burkhan Khaldun, y las crónicas cuentan que mataron a los que llevaban el féretro, y después a los que los habían matado; que hicieron pasar mil caballos por encima para borrar la tierra, y que hasta desviaron un río. Ochocientos años después sigue sin aparecer. Se ha buscado con satélites y con miles de voluntarios peinando imágenes por internet, y en Mongolia hay además una objeción de fondo: mucha gente considera que buscarla es profanarla.",
        destacado: {
          tipo: "frase",
          frase: "Ocho siglos buscando la tumba de quien hizo todo lo posible por no tener una.",
        },
      },
      {
        rotulo: "Lo que montó",
        texto:
          "Debajo de la matanza —ciudades enteras borradas, cifras de muertos que se cuentan por millones— había un Estado que funcionaba mejor que los de al lado. Los mongoles no tenían escritura y él mandó adaptarles el alfabeto uigur. Ascendió a generales por mérito y no por cuna, algo insólito en el siglo XIII. Eximió de impuestos a los religiosos de cualquier credo. Y montó el <em>yam</em>, un correo de postas con relevos de caballos cada 40 kilómetros que permitía cruzar el imperio en semanas: la razón de que un veneciano como Marco Polo pudiera plantarse en China y volver para contarlo.",
        destacado: { tipo: "cifra", cifra: "40", unidad: "km entre postas del correo" },
      },
    ],
  },

  {
    id: "napoleon",
    titulo: "Napoleón: el chiste del bajito es un error de unidades",
    gancho: "Medía por encima de la media de su época. La leyenda nace de dos pies distintos.",
    categoria: "Figuras",
    color: "var(--sage)",
    foto: {
      archivo:
        "Jacques-Louis David - The Emperor Napoleon in His Study at the Tuileries - Google Art Project.jpg",
      autor: "Jacques-Louis David",
      licencia: "Dominio público",
      foco: "50% 26%",
      alt: "Retrato de Napoleón en su despacho de las Tullerías, pintado por Jacques-Louis David.",
    },
    encargo: "El retrato de David en el despacho, o el sombrero bicornio solo, sobre fondo liso.",
    entrada:
      "En el acta de su autopsia consta «cinco pies y dos pulgadas». Leído con pulgadas inglesas sale un hombre de 1,57 y de ahí viene el chiste que lleva dos siglos rodando. Pero la medida estaba tomada en pies franceses, que eran más largos que los ingleses. Convertida bien, da entre 1,68 y 1,70: por encima de la media francesa de su tiempo.",
    paginas: [
      {
        rotulo: "De dónde sale el bajito",
        texto:
          "El pie de rey francés medía 32,5 centímetros; el inglés, 30,5. Dos centímetros de diferencia por pie bastan para inventar un complejo nacional. A eso se le sumaron tres cosas: sus soldados le llamaban <em>le petit caporal</em>, que era un apodo cariñoso y no una descripción; iba siempre rodeado por los granaderos de la Guardia, elegidos por ser altísimos; y en Londres el caricaturista James Gillray se pasó años dibujándolo como un enano rabioso con un sombrero enorme, «Little Boney». La caricatura ganó por goleada al dato, y sigue ganando.",
        destacado: { tipo: "cifra", cifra: "1,68 m", unidad: "sobre la media de su época" },
      },
      {
        rotulo: "Lo que sí midió",
        texto:
          "Mientras tanto hacía algo que sí ha durado: el Código Civil de 1804. Dos mil doscientos ochenta y un artículos redactados en cuatro años, con él presidiendo en persona más de la mitad de las sesiones y discutiendo artículo por artículo. Fijó la igualdad ante la ley, la propiedad privada, el matrimonio civil y el final de los privilegios feudales; y de paso dejó a las mujeres legalmente sometidas al marido, un retroceso que costó siglo y medio deshacer. Es la base del derecho civil de medio mundo, de Bélgica a Japón, pasando por Luisiana. Él lo sabía: dijo que sus cuarenta batallas se olvidarían y el código no.",
        destacado: {
          tipo: "frase",
          frase: "«Waterloo borrará el recuerdo de mis victorias. Mi Código Civil vivirá.»",
        },
      },
      {
        rotulo: "La isla",
        texto:
          "Lo desterraron a Santa Elena, un peñasco en mitad del Atlántico a unos 1.900 kilómetros de la costa africana más próxima, elegido justamente porque escapar de allí no era cuestión de audacia sino de geografía. Aguantó seis años y murió a los 51. La autopsia dijo cáncer de estómago, el mismo que se llevó a su padre. La teoría del envenenamiento con arsénico salió de unos análisis de su pelo, pero se explica mejor por el papel pintado verde de su habitación —el pigmento de la época llevaba arsénico y soltaba vapores con la humedad— y por los tónicos que se tomaban entonces. En 1840 Francia se lo llevó de vuelta a París.",
        destacado: { tipo: "cifra", cifra: "1.900", unidad: "km hasta la costa más cercana" },
      },
    ],
  },

  {
    id: "juana",
    titulo: "Juana de Arco: 19 años y un juicio que se conserva entero",
    gancho: "Sabemos lo que dijo palabra por palabra porque sus jueces lo apuntaron todo para hundirla.",
    categoria: "Figuras",
    color: "var(--plum)",
    foto: {
      archivo: "Joan of Arc miniature graded.jpg",
      autor: "Miniatura del siglo XV, Archivos Nacionales de Francia",
      licencia: "Dominio público",
      foco: "50% 30%",
      alt: "Miniatura del siglo XV que representa a Juana de Arco con armadura y estandarte.",
    },
    encargo: "La miniatura medieval de Juana con el estandarte, o una armadura vacía de la época.",
    entrada:
      "Una campesina de diecisiete años, que no sabía leer ni escribir, se planta ante el heredero al trono de Francia y le dice que va a levantar el sitio de Orleans. Le dejan intentarlo porque la guerra ya está perdida y no hay nada que perder. Lo levanta en nueve días. Dos años después arde en Ruan, y lo que la salva del olvido es el acta de su propio juicio.",
    paginas: [
      {
        rotulo: "Nueve días",
        texto:
          "Orleans llevaba siete meses sitiada cuando ella llegó, el 29 de abril de 1429. El 8 de mayo los ingleses levantaban el cerco. No mandaba el ejército —no tenía instrucción militar y los capitanes de verdad estaban allí—, pero hizo dos cosas que ellos no podían hacer: convenció a una tropa derrotada de que iba a ganar y forzó los ataques que los mandos preferían aplazar. En uno de ellos recibió un flechazo en el hombro, se retiró a que se lo curaran y volvió a la línea esa misma tarde, con el estandarte, que era lo único que llevaba en la mano.",
        destacado: { tipo: "cifra", cifra: "9", unidad: "días para romper 7 meses de asedio" },
      },
      {
        rotulo: "El juicio",
        texto:
          "En 1431 la juzga en Ruan un tribunal eclesiástico presidido por un obispo francés al servicio de los ingleses. Setenta cargos reducidos a doce, sin abogado, una chica de diecinueve años analfabeta frente a decenas de doctores en teología, y notarios apuntándolo todo. Le tendieron una trampa clásica: «¿Estás en gracia de Dios?». Si decía que sí, era presunción, herejía; si decía que no, se condenaba con su propia boca. Contestó que si no lo estaba, que Dios la pusiera en ella, y que si lo estaba, que Dios la mantuviera. Un asesor declaró después que los que la interrogaban se quedaron sin saber qué decir.",
        destacado: {
          tipo: "frase",
          frase: "«Si no lo estoy, que Dios me ponga en ella.»",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La condenaron por vestir ropa de hombre y la quemaron el 30 de mayo de 1431 en la plaza del Mercado Viejo. Quemaron el cuerpo tres veces y echaron las cenizas al Sena para que no quedaran reliquias. En 1456, un proceso de nulidad revisó el caso y la absolvió; en 1920 la Iglesia la hizo santa. Y el expediente que la mató —cientos de páginas de interrogatorio, con sus respuestas anotadas por escribanos que estaban en contra de ella— es hoy la fuente principal de su vida y uno de los testimonios más detallados que existen de una persona corriente del siglo XV.",
      },
    ],
  },
];
