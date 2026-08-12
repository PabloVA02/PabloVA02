import type { Short } from "../shorts";

/* ==========================================================================
   Catástrofes.

   El tema más fácil de contar mal. Una catástrofe se cuenta sola en cifras
   —muertos, toneladas, grados— y las cifras solas aburren a la tercera. Aquí
   cada historia entra por una persona, un objeto o un minuto concreto, y la
   cifra llega después, cuando ya hay dónde colocarla.

   Las tres páginas van siempre en el mismo orden: lo que pasaba antes, el
   giro, y lo que quedó. Cerrar por lo que quedó es lo que separa una
   catástrofe de una anécdota.
   ========================================================================== */

export const CATASTROFES: Short[] = [
  {
    id: "chernobil",
    titulo: "Las 36 horas de Chernóbil",
    gancho: "El reactor ya ardía y nadie había avisado a la ciudad de al lado.",
    categoria: "Catástrofes",
    color: "var(--sage)",
    foto: {
      archivo: "IAEA 02790015 (5613115146) (cropped).jpg",
      /* El banco de imágenes del organismo es aquí el licenciante, no un
         intermediario: es quien publicó la foto con esa licencia, así que
         nombrarlo cumple la atribución. */
      autor:
        "El reactor 4 de Chernóbil destruido, fotografiado desde el aire en 1986. Banco de imágenes del Organismo Internacional de Energía Atómica.",
      licencia: "CC BY-SA 2.0",
      fuente: "https://commons.wikimedia.org/wiki/File:IAEA_02790015_(5613115146)_(cropped).jpg",
      foco: "50% 55%",
      alt: "El reactor 4 de Chernóbil destruido, fotografiado desde un helicóptero.",
    },
    encargo: "El reactor 4 reventado, visto desde el aire, con el tejado abierto.",
    fotos: [
      {
        /* La noria de Prípiat nunca llegó a abrirse: la feria estaba prevista
           para el 1 de mayo y la ciudad se evacuó el 27 de abril. */
        archivo: "Ferris wheel in Pripyat (02710145).jpg",
        autor:
          "La noria de Prípiat, en el parque que iba a inaugurarse cinco días después del accidente. Banco de imágenes del Organismo Internacional de Energía Atómica.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ferris_wheel_in_Pripyat_(02710145).jpg",
        foco: "50% 45%",
        alt: "Una noria amarilla oxidada contra un cielo azul, con el bosque creciendo alrededor del asfalto.",
      },
      {
        archivo: "IAEA 02790015 (5613115146) (cropped).jpg",
        autor:
          "El reactor 4 destruido, fotografiado desde el aire en 1986. Banco de imágenes del Organismo Internacional de Energía Atómica.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:IAEA_02790015_(5613115146)_(cropped).jpg",
        foco: "50% 55%",
        alt: "El edificio del reactor reventado y abierto por arriba, visto desde un helicóptero.",
      },
      {
        archivo: "Во тьму Into darkness (36689677804).jpg",
        autor:
          "Un pasillo de escuela en Prípiat, con los cuadernos por el suelo desde el día de la evacuación. Fotografía de spoilt.exile.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:%D0%92%D0%BE_%D1%82%D1%8C%D0%BC%D1%83_Into_darkness_(36689677804).jpg",
        foco: "50% 50%",
        alt: "Un pasillo con las paredes descascarilladas, la luz entrando por los ventanales y papeles cubriendo el suelo.",
      },
      {
        archivo: "Pripyat Basketball Court.jpg",
        autor:
          "El gimnasio de una escuela de Prípiat, cuarenta años después. Fotografía de Ingmar Runge.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Pripyat_Basketball_Court.jpg",
        foco: "50% 45%",
        alt: "Un gimnasio abandonado con la canasta todavía colgada y el suelo de madera levantado.",
      },
    ],
    entrada:
      "La 1:23 de la madrugada del 26 de abril de 1986. Una prueba de seguridad deja al reactor 4 de Chernóbil en una potencia que ya nadie puede bajar, y en cuatro segundos se multiplica por cien. Ahí termina la parte que le tocaba a la física. Todo lo que viene después lo deciden personas con nombre y apellidos: cuándo se avisa, a quién se avisa y qué se le cuenta. La ciudad de al lado, con cincuenta mil habitantes y a tres kilómetros del reactor, siguió con su vida normal durante treinta y seis horas. Los niños fueron al colegio, hubo bodas y la gente salió a ver el resplandor desde el puente del ferrocarril, porque era bonito. Nadie les había dicho nada.",
    paginas: [
      {
        rotulo: "La tapa",
        texto:
          "Lo que hizo la física en esos cuatro segundos fue levantar la tapa del reactor y dejarla caer de canto, con el núcleo abierto al cielo. Esa tapa eran mil doscientas toneladas de acero y hormigón que los operarios habían bautizado con nombre de mujer. Encima no había nada. Aquel diseño soviético prescindía del edificio de contención, la cúpula de hormigón que en Occidente se levanta precisamente para el día en que todo falle. El grafito se puso a arder y ardió diez días seguidos, y el viento fue repartiendo el yodo y el cesio por media Europa. Los bomberos subieron al tejado con el uniforme puesto.",
        destacado: { tipo: "cifra", cifra: "1.200", unidad: "toneladas de tapa" },
      },
      {
        rotulo: "El sábado siguiente",
        texto:
          "Lo que decidieron las personas fue callarse. A tres kilómetros dormían las cuarenta y nueve mil personas de la ciudad de al lado, levantada para los trabajadores de la central, con una edad media de veintiséis años. El sábado amaneció soleado y no se suspendió nada. Hubo bodas. Los niños jugaron en la calle y algunos subieron al puente del ferrocarril a mirar el resplandor, que era bonito. El parque de atracciones abría el 1 de mayo. La orden de evacuar tardó 36 horas, y cuando llegaron los mil doscientos autobuses se anunció por megafonía que cogieran la documentación y comida para tres días.",
        destacado: { tipo: "frase", frase: "Se les dijo que era para tres días." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Ninguno volvió. Aquella noche murieron dos personas y en los meses siguientes otras veintiocho, casi todas bomberos y operarios que estuvieron a pie de reactor sin saber qué apagaban. El total a largo plazo se sigue discutiendo, y la discusión forma parte de la historia: consiste en decidir cuántos cánceres de una población enorme se le cargan a una sola noche. Lo demás no se discute. Cuarenta años después la zona sigue cerrada, la noria del parque no llegó a girar con nadie dentro, y por aquellas calles pasean alces y caballos salvajes. Prosperan justo donde nosotros ya no podemos estar.",
      },
    ],
  },

  {
    id: "titanic",
    titulo: "Titanic: 37 segundos",
    gancho: "Lo vieron a tiempo. Ese fue exactamente el problema.",
    categoria: "Catástrofes",
    color: "var(--slate)",
    encargo: "El Titanic entero, atracado o zarpando, con las cuatro chimeneas.",
    fotos: [
      {
        archivo: "RMS Titanic 3.jpg",
        autor: "El Titanic saliendo de Southampton, 10 de abril de 1912. Fotografía de Francis Godolphin Osbourne Stuart.",
        licencia: "Dominio público",
        pdPorEdad: 1923,
        fuente: "https://commons.wikimedia.org/wiki/File:RMS_Titanic_3.jpg",
        foco: "50% 50%",
        alt: "El Titanic visto de costado con sus cuatro chimeneas, saliendo del puerto entre remolcadores.",
      },
      {
        archivo: "Iceberg A22A, South Atlantic Ocean.jpg",
        autor: "Iceberg fotografiado desde la Estación Espacial Internacional, 2007. NASA, Johnson Space Center.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Iceberg_A22A,_South_Atlantic_Ocean.jpg",
        foco: "50% 50%",
        alt: "Un iceberg enorme y blanco visto desde el aire sobre el mar oscuro, con el hielo sumergido asomando alrededor.",
      },
      {
        archivo: "Carpathia - Titanic lifeboats.jpg",
        autor: "Botes salvavidas del Titanic recogidos junto al Carpathia, 18 de abril de 1912.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Carpathia_-_Titanic_lifeboats.jpg",
        foco: "50% 50%",
        alt: "Varios botes de madera vacíos amarrados al costado de un buque, fotografiados desde cubierta.",
      },
      {
        archivo: "Carpathia Deck.jpg",
        autor: "Cubierta del Carpathia con los supervivientes recogidos del Titanic, abril de 1912.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Carpathia_Deck.jpg",
        foco: "50% 50%",
        alt: "Gente abrigada agrupada en la cubierta de un barco después del rescate.",
      },
    ],
    entrada:
      "Atlántico Norte, a las 23:39 del 14 de abril de 1912. El vigía Frederick Fleet ve una masa negra delante, toca la campana tres veces y descuelga el teléfono del puente. Desde ese aviso hasta el impacto pasan unos treinta y siete segundos, que es tiempo de sobra para reaccionar y muy poco para acertar. En ese rato el oficial de guardia da la orden que cualquiera habría dado en su lugar: todo a babor y máquinas atrás. Y ahí, en esa orden perfectamente razonable y aprendida en cualquier escuela náutica, empieza lo peor de la noche.",
    paginas: [
      {
        rotulo: "El roce",
        texto:
          "Un barco no gira como un coche: gira sobre su popa y tarda. Al virar, el Titanic no chocó de frente contra el iceberg, sino que lo rozó por el costado de estribor durante unos siete segundos. Fue casi una caricia, tan suave que en el salón de primera clase se siguió jugando a las cartas y alguien salió a la cubierta a recoger trozos de hielo para el whisky. Pero bajo la línea de flotación el hielo fue abriendo el costado a lo largo de unos noventa metros: no un boquete, sino una costura de aberturas y remaches saltados repartida por seis compartimentos.",
        destacado: { tipo: "cifra", cifra: "6", unidad: "compartimentos abiertos" },
      },
      {
        rotulo: "Cuatro sí, cinco no",
        texto:
          "El Titanic estaba dividido en dieciséis compartimentos estancos y podía flotar con cuatro inundados. Con cinco, no. Los mamparos no llegaban hasta arriba: subían solo hasta unas cubiertas, así que el agua iba llenando un compartimento y desbordaba al siguiente como el agua en una cubitera inclinada. El diseñador, Thomas Andrews, hizo el cálculo en unos minutos y le dio al capitán una respuesta que no admitía discusión: entre una y dos horas. El barco tenía botes para 1.178 personas y a bordo viajaban unas 2.220. Y muchos botes salieron a medias.",
        destacado: {
          tipo: "frase",
          frase: "Si hubiera chocado de frente, probablemente habría flotado.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El primer bote se largó con 28 personas dentro y sitio para 65: nadie se creía todavía que el barco insumergible se estuviera hundiendo. A las 2:20 el Titanic se partió y desapareció. Murieron unas 1.500 personas, la mayoría no ahogadas sino congeladas en un agua a menos de dos grados. De aquella noche salió casi todo lo que hoy damos por evidente en el mar. Botes para todos los pasajeros, simulacros obligatorios y guardia de radio las veinticuatro horas. Y una patrulla internacional del hielo que sigue vigilando el Atlántico Norte cada temporada. La lección costó mil quinientas vidas y se aprendió entera.",
      },
    ],
  },

  {
    id: "pompeya",
    titulo: "Los huecos de Pompeya",
    gancho: "Los cuerpos se deshicieron. El agujero que dejaron, no.",
    categoria: "Catástrofes",
    color: "var(--clay)",
    foto: {
      archivo: "Cast victim eruptions Pompeii.jpg",
      autor:
        "Vaciado en yeso de una víctima de la erupción del año 79, hecho rellenando con escayola el hueco que dejó el cuerpo en la ceniza. Fotografía de Jebulon.",
      licencia: "CC0",
      fuente: "https://commons.wikimedia.org/wiki/File:Cast_victim_eruptions_Pompeii.jpg",
      foco: "50% 45%",
      alt: "Vaciado en yeso de una víctima de Pompeya, con la cabeza apoyada en el brazo.",
    },
    encargo: "Un vaciado en yeso de una víctima de Pompeya, en su vitrina.",
    entrada:
      "Año 79 después de Cristo, en la bahía de Nápoles. El Vesubio lleva medio día lanzando piedra pómez sobre Pompeya, así que mucha gente ya se ha ido y la que queda se refugia en casa. De madrugada llega lo que de verdad mata, una avalancha de gas y ceniza a varios cientos de grados que baja a más de cien kilómetros por hora.",
    paginas: [
      {
        rotulo: "Ceniza que fragua",
        texto:
          "La nube mata en segundos y sigue de largo, pero detrás va dejando ceniza fina, que cae, se compacta y se endurece alrededor de todo lo que encuentra: muebles, puertas, panes en el horno, personas. Con los siglos, los cuerpos se descomponen dentro de esa envoltura y el hueso queda suelto en un agujero con la forma exacta que tenía el cuerpo el día que se detuvo. La ciudad entera se convierte así en un molde. Nadie se dio cuenta durante los primeros cien años de excavación: los operarios atravesaban esas cavidades sin entender qué eran y las rompían.",
      },
      {
        rotulo: "El yeso",
        texto:
          "En 1863 un arqueólogo se fijó en que los huecos aparecían siempre donde había huesos. De ahí sacó la idea que lo cambió todo: hacer un agujero pequeño, meter yeso líquido, esperar a que fragüe y picar después la ceniza de alrededor. Lo que sale no es una escultura ni una reconstrucción: es el volumen del aire que dejó una persona real. Con los pliegues de la ropa, la postura exacta, la boca abierta o el brazo tapándose la cara. Hoy se hacen con resina transparente y se ven los huesos dentro, y con escáner se les ha mirado hasta la dentadura.",
        destacado: { tipo: "cifra", cifra: "1863", unidad: "el año del primer vaciado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Los vaciados corrigieron una idea muy repetida: que aquella gente murió huyendo, corriendo, aterrorizada. Muchas posturas no son de huida sino de calor extremo, la contracción que deja un choque térmico brutal en cuestión de segundos. Y hay algo más incómodo. Los moldes conservan a un perro atado que se ahogó girando sobre su correa, a familias enteras juntas en una habitación, a un hombre sentado que parece esperar. Pompeya no es sobre todo un yacimiento de arte romano: es el único sitio donde una catástrofe conserva el gesto de la gente en el instante exacto en que la alcanzó.",
      },
    ],
  },

  {
    id: "halifax",
    titulo: "La explosión de Halifax",
    gancho: "Un barco cargado de explosivos ardió veinte minutos delante de una ciudad que salió a mirarlo.",
    categoria: "Catástrofes",
    color: "var(--ochre)",
    encargo: "La nube de la explosión de Halifax de 1917, o la ciudad arrasada después.",
    entrada:
      "Puerto de Halifax, en Canadá, el 6 de diciembre de 1917. Europa lleva tres años en la Primera Guerra Mundial y por aquí salen los convoyes que la abastecen. Un carguero francés cargado hasta arriba de explosivos para el frente choca de refilón con un barco noruego en un canal estrecho. Del roce salta una chispa, y el barco más peligroso del Atlántico empieza a arder despacio, a la vista de todos.",
    paginas: [
      {
        rotulo: "Todos a la ventana",
        texto:
          "La tripulación del carguero sabe perfectamente lo que lleva debajo: rema hacia la orilla contraria y sale corriendo hacia el bosque gritando avisos en francés que nadie entiende. El barco, sin nadie a bordo, deriva hacia el muelle 6 y sigue ardiendo. Echa una columna de humo negro y llamas de colores, un espectáculo raro y precioso. La ciudad entera se asoma a mirarlo: la gente se acerca al puerto, los niños salen de casa y en las fábricas se abren las ventanas para ver mejor. Nadie en tierra sabe lo que hay dentro de aquel barco. Aquello duró unos veinte minutos.",
        destacado: { tipo: "frase", frase: "La ciudad entera se asomó a la ventana a mirar." },
      },
      {
        rotulo: "9:04:35",
        texto:
          "A las 9:04 de la mañana detonan unas 2.900 toneladas de explosivos. Es la mayor explosión provocada por el hombre hasta la bomba de Hiroshima. La onda arrasa un radio de kilómetro y medio y levanta en la bahía una ola que se lleva un poblado indígena entero. El ancla del barco, de media tonelada, cayó a tres kilómetros y allí sigue. Murieron cerca de dos mil personas y unas nueve mil resultaron heridas. Cientos perdieron un ojo o los dos por los cristales de las ventanas a las que se habían asomado: fue tal la cantidad de ojos destrozados que aquel desastre impulsó la oftalmología canadiense.",
        destacado: { tipo: "cifra", cifra: "2.900", unidad: "toneladas de explosivo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hubo un hombre que sí entendió lo que iba a pasar. El telegrafista del ferrocarril estaba evacuando cuando se acordó de que un tren de pasajeros venía de camino. Volvió a su puesto y mandó un último mensaje: «Un barco de munición arde y se dirige al muelle 6. Adiós, chicos». Murió allí, y el tren frenó a tiempo. Esa noche empezó a nevar una tormenta que enterró las ruinas. Boston mandó trenes con médicos y material antes incluso de que se lo pidieran. Halifax se lo devuelve desde entonces del modo más discreto posible: cada año manda a Boston el abeto que se planta por Navidad en el centro de la ciudad.",
      },
    ],
  },

  {
    id: "vajont",
    titulo: "La presa aguantó",
    gancho: "La obra resistió perfectamente. El monte de al lado, no.",
    categoria: "Catástrofes",
    color: "var(--slate)",
    encargo: "La presa del Vajont hoy, intacta, con la cicatriz del monte Toc detrás.",
    entrada:
      "Valle del Vajont, en los Alpes italianos, el 9 de octubre de 1963. Allí acaba de levantarse la presa de bóveda más alta del mundo, doscientos sesenta metros de hormigón. Esa noche, a las diez y media, se desprende un trozo entero de la montaña vecina y cae dentro del embalse. La presa aguanta el golpe sin romperse y sigue hoy en pie, y aun así murieron unas dos mil personas.",
    paginas: [
      {
        rotulo: "El monte que avisaba",
        texto:
          "El monte de enfrente llevaba años avisando. Los geólogos habían detectado una falla enorme y una masa inestable en la ladera; el terreno se movía centímetros cada semana, aparecían grietas nuevas, los animales se marchaban. La empresa lo sabía y probó a bajar y subir el nivel del embalse para «domesticar» el deslizamiento, con la idea de que resbalara despacio y por partes. A los vecinos de los pueblos de arriba, que veían las grietas desde sus casas y protestaban, se les respondió con denuncias por difundir noticias alarmistas. Una periodista local lo publicó todo antes de que pasara y acabó en el juzgado por ello.",
        destacado: { tipo: "frase", frase: "Lo denunciaron por escrito. La llevaron a juicio." },
      },
      {
        rotulo: "Cuarenta y cinco segundos",
        texto:
          "No bajó por partes. Bajaron 270 millones de metros cúbicos de montaña de una vez, a unos 100 km/h, y el embalse entero salió despedido hacia arriba. Una ola de más de 200 metros por encima de la presa saltó la coronación y cayó por el otro lado del valle. En unos minutos borró un pueblo entero y varios más pequeños: casas, iglesia, plaza, cementerio. No quedó nada que identificar. La presa, mientras tanto, apenas sufrió daños. Sigue ahí, íntegra, sujetando un valle lleno de piedra, y es lo más perturbador del lugar: la obra hizo su trabajo.",
        destacado: { tipo: "cifra", cifra: "270", unidad: "millones de m³ de montaña" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En el juicio quedó claro que no fue un imprevisto de la naturaleza: los informes existían, las mediciones existían, y la decisión de seguir llenando el embalse se tomó con ellos encima de la mesa. Las condenas fueron pocas y cortas. Hoy el Vajont se estudia en las facultades de ingeniería de medio mundo, pero no como un problema de cálculo. Se estudia como el caso de manual de otra cosa. Una obra impecable puede matar a dos mil personas si nadie se hace la pregunta de qué hay alrededor. La UNESCO lo cita como ejemplo de catástrofe evitable por fallo humano.",
      },
    ],
  },

  {
    id: "tenerife",
    titulo: "Dos aviones en Tenerife",
    gancho: "El peor accidente de la aviación empezó con una bomba en otro aeropuerto.",
    categoria: "Catástrofes",
    color: "var(--clay)",
    encargo: "Un Boeing 747 de los años setenta en pista, con niebla.",
    entrada:
      "Aeropuerto de Tenerife, en las islas Canarias, el 27 de marzo de 1977. Es un aeropuerto pequeño de montaña que aquella tarde está lleno de aviones enormes que no deberían estar ahí, porque un artefacto explosivo en la isla vecina ha obligado a desviar todo el tráfico. Dos aviones de pasajeros de los más grandes que existen esperan aparcados a que reabra el otro aeropuerto. Entonces baja la niebla.",
    paginas: [
      {
        rotulo: "Prisa y niebla",
        texto:
          "El comandante del avión holandés era el piloto estrella de la compañía, el de los anuncios, el que formaba a los demás. Y tenía un problema con las horas máximas de servicio, que la ley limita para que nadie vuele cansado. Si no despegaba pronto, su tripulación se quedaba en tierra y la aerolínea tendría que alojar a más de doscientos pasajeros en una isla saturada. Con la niebla encima, los dos aviones recibieron instrucción de rodar por la propia pista, en fila, y salir por una calle lateral. La torre no veía la pista y los aviones no se veían entre sí, así que todo dependía de la radio.",
      },
      {
        rotulo: "«We are at take-off»",
        texto:
          "El avión estadounidense seguía dentro de la pista buscando su salida lateral entre la niebla. El holandés, alineado al fondo, soltó los frenos sin haber recibido autorización de despegue. Su copiloto comunicó por radio una frase que no existe en el lenguaje reglamentario. Dijo que estaban en despegue, y la torre lo entendió como que estaban en posición, esperando. En ese instante el mensaje de la torre y el del otro avión se pisaron en la misma frecuencia, y en la cabina solo se oyó un pitido. El comandante tiró del morro al ver la silueta delante, pero no le dio tiempo. Murieron quinientas ochenta y tres personas.",
        destacado: { tipo: "cifra", cifra: "583", unidad: "muertos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó grabada en la caja negra la voz del ingeniero de vuelo preguntando si el otro avión había despejado ya. El comandante le respondió con un sí seco y el ingeniero no insistió. Ese detalle, un subordinado que ve el problema y no se atreve a plantarse, fue el hallazgo más importante de la investigación. De ahí salió un método de trabajo en cabina que hoy es obligatorio en todo el mundo. Cualquier miembro de la tripulación puede y debe cuestionar al comandante, con protocolo y palabras concretas. También se prohibió la palabra despegue en cualquier frase que no sea la autorización.",
      },
    ],
  },

  {
    id: "krakatoa",
    titulo: "El sonido del Krakatoa",
    gancho: "Se oyó a 4.800 kilómetros. A esa distancia ya no es un sonido: es un rumor que nadie explica.",
    categoria: "Catástrofes",
    color: "var(--plum)",
    encargo: "Litografía de la erupción del Krakatoa de 1883.",
    entrada:
      "Estrecho entre dos grandes islas de Indonesia, el 27 de agosto de 1883. La isla volcánica de Krakatoa lleva meses inquieta y esa mañana se rompe del todo. Son cuatro explosiones enormes, y la última revienta el volcán y hunde buena parte de la isla bajo el mar. Aquello produce además el fenómeno acústico mejor documentado de la historia.",
    paginas: [
      {
        rotulo: "Cuatro mil ochocientos kilómetros",
        texto:
          "En una isla del océano Índico, a unos cuatro mil ochocientos kilómetros, el jefe de policía oyó lo que describió como el rugido lejano de cañones pesados. Mandó buscar un barco en apuros que no existía. En Australia, a más de 3.000 kilómetros, la gente creyó que había disparos. A 50 kilómetros del volcán, en un barco británico, el capitán escribió que a más de la mitad de su tripulación le habían reventado los tímpanos. Dejó anotada además la frase que se cita siempre: creía que se acababa el mundo. Es el sonido más lejano que se ha registrado nunca de un solo suceso.",
        destacado: { tipo: "cifra", cifra: "4.800", unidad: "km de distancia" },
      },
      {
        rotulo: "La onda",
        texto:
          "Lo que salió del Krakatoa no fue solo ruido audible. La onda de presión dio la vuelta al planeta y los barómetros de todo el mundo la registraron pasando por encima, una y otra vez, durante cinco días: siete vueltas completas. Pero lo que mató no fue la explosión, sino el agua. Los tsunamis que provocó el derrumbe alcanzaron los treinta metros y arrasaron las costas de las dos islas grandes. Murieron más de treinta y seis mil personas. Un barco de vapor apareció tres kilómetros tierra adentro, encajado en un valle.",
        destacado: { tipo: "frase", frase: "La onda dio siete vueltas al planeta." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un planeta más frío, porque el volcán metió tanta ceniza y azufre en la alta atmósfera que la temperatura media bajó medio grado. Quedaron unos atardeceres de colores imposibles, y en Nueva York llamaron varias veces a los bomberos creyendo que ardía la ciudad. Hay quien sostiene que el cielo naranja del cuadro noruego más famoso del mundo, pintado poco después, es el cielo del Krakatoa. Su autor escribió que vio el cielo volverse rojo sangre y que se quedó temblando. Y quedó, donde estaba la isla, un cono nuevo que empezó a asomar en 1927. Lo llamaron el hijo de Krakatoa, y sigue creciendo.",
      },
    ],
  },

  {
    id: "melaza",
    titulo: "La ola de melaza de Boston",
    gancho: "Un muro de sirope de ocho metros bajando por la calle a 50 km/h. Suena a broma. Mató a 21 personas.",
    categoria: "Catástrofes",
    color: "var(--ochre)",
    encargo: "El depósito reventado del North End de Boston tras la riada de melaza de 1919.",
    entrada:
      "Barrio del North End, en Boston, el 15 de enero de 1919. Hace un día raro de invierno, casi cálido. En el muelle hay un depósito de acero de quince metros de alto con nueve millones de litros de melaza dentro. Con esa melaza se fabricaba ron y también alcohol industrial para explosivos. A mediodía, el depósito se abre con un ruido de ametralladora: son los remaches saltando.",
    paginas: [
      {
        rotulo: "Nadie lo probó nunca",
        texto:
          "El depósito se había construido cuatro años antes con prisa y sin apenas supervisión. El encargado de la obra no era ingeniero y no sabía leer un plano. Nunca se hizo la prueba elemental de llenarlo de agua para ver si aguantaba: se llenó directamente de melaza. Desde el primer día goteaba tanto que los vecinos iban con cubos a recoger lo que caía. La empresa resolvió el problema del modo más literal posible: pintó el depósito de marrón para que las fugas no se vieran. Los crujidos eran tan habituales que la gente ya no les hacía caso.",
        destacado: { tipo: "frase", frase: "Lo pintaron de marrón para que no se vieran las fugas." },
      },
      {
        rotulo: "La ola",
        texto:
          "Lo que salió no fue un charco. Fue una ola de unos ocho metros de alto que bajó por la calle a cincuenta kilómetros por hora. Llevaba fuerza suficiente para arrancar de sus cimientos una estación elevada del tren y arrastrar un vagón. La melaza fría es densísima: la gente atrapada no podía nadar ni sacar los brazos, y los caballos se quedaban pegados al suelo. Murieron 21 personas y unas 150 resultaron heridas. Los equipos de rescate tardaron días en encontrar a algunas víctimas porque estaban cubiertas de una masa marrón que se confundía con los escombros.",
        destacado: { tipo: "cifra", cifra: "21", unidad: "muertos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La empresa sostuvo que había sido un atentado anarquista. El pleito duró seis años y fue uno de los primeros grandes juicios colectivos de Estados Unidos. Se llamó a más de tres mil testigos, y por primera vez unos peritos independientes explicaron a un tribunal cómo se calculan las tensiones de una pieza de acero. Perdieron. De aquella sentencia salió la obligación, que hoy parece obvia, de que los planos de una obra los firme un ingeniero titulado y los apruebe el ayuntamiento. Los vecinos del North End juraron durante décadas que en verano, con el calor, el barrio seguía oliendo a melaza.",
      },
    ],
  },
];
