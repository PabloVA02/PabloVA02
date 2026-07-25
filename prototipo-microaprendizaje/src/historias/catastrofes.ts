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
    titulo: "Chernóbil: 36 horas de silencio",
    gancho: "El reactor ya ardía y nadie había avisado a la ciudad de al lado.",
    categoria: "Catástrofes",
    color: "var(--sage)",
    foto: {
      archivo: "IAEA 02790015 (5613115146).jpg",
      autor: "IAEA Imagebank",
      licencia: "CC BY-SA 2.0",
      foco: "50% 45%",
      alt: "El reactor 4 de Chernóbil destruido, fotografiado desde un helicóptero.",
    },
    encargo: "El reactor 4 reventado, visto desde el aire, con el tejado abierto.",
    entrada:
      "26 de abril de 1986, la 1:23 de la madrugada. Una prueba de seguridad —una prueba de <em>seguridad</em>— deja al reactor 4 de Chernóbil funcionando a una potencia que ya no se puede controlar. En cuatro segundos la potencia se multiplica por cien. A tres kilómetros duerme una ciudad de 49.000 personas que no se va a enterar hasta pasado mañana.",
    paginas: [
      {
        rotulo: "La tapa",
        texto:
          "La explosión levanta la tapa del reactor: una pieza de acero y hormigón de <strong>1.200 toneladas</strong> que los operarios llamaban «Elena». Cae de canto y deja el núcleo abierto al cielo. No hay edificio de contención, porque este diseño soviético, el RBMK, no lo llevaba: en los reactores occidentales hay una cúpula encima precisamente para esto. El grafito del núcleo empieza a arder y no se apagará en diez días. La columna sube kilómetros y va soltando yodo y cesio, que el viento reparte por media Europa. Los bomberos que suben al tejado no llevan más protección que su uniforme; a algunos les brillan las manos.",
        destacado: { tipo: "cifra", cifra: "1.200", unidad: "toneladas de tapa" },
      },
      {
        rotulo: "El sábado siguiente",
        texto:
          "Prípiat era una ciudad nueva, construida para los trabajadores de la central: edad media, 26 años. El sábado amaneció soleado y no se suspendió nada. Hubo bodas. Los niños jugaron en la calle y unos cuantos se acercaron al puente del ferrocarril a mirar el resplandor bonito que salía de la central. El parque de atracciones iba a inaugurarse el 1 de mayo. La orden de evacuar tardó <strong>36 horas</strong> en llegar. Cuando aparecieron los 1.200 autobuses, se anunció por megafonía que cogieran documentación y comida para tres días y que volverían pronto. No volvió ninguno.",
        destacado: { tipo: "frase", frase: "Se les dijo que era para tres días." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella noche murieron dos personas. En los meses siguientes, otras veintiocho, casi todas bomberos y operarios que estuvieron a pie de reactor sin saber lo que estaban apagando. La cifra total a largo plazo se sigue discutiendo, y esa discusión es parte de la historia: depende de a cuántos cánceres de una población enorme se les atribuye una causa. Lo que no se discute es el resto. La zona de exclusión sigue cerrada cuarenta años después, la noria de Prípiat nunca llegó a dar una vuelta con gente, y los alces y los caballos de Przewalski se pasean hoy por unas calles donde el peligro es invisible y sigue ahí.",
      },
    ],
  },

  {
    id: "titanic",
    titulo: "Treinta y siete segundos",
    gancho: "Lo vieron a tiempo. Ese fue exactamente el problema.",
    categoria: "Catástrofes",
    color: "var(--slate)",
    foto: {
      archivo: "RMS Titanic 3.jpg",
      autor: "Francis Godolphin Osbourne Stuart",
      licencia: "Dominio público",
      foco: "50% 50%",
      alt: "El Titanic atracado en Southampton antes de zarpar.",
    },
    encargo: "El Titanic entero, atracado o zarpando, con las cuatro chimeneas.",
    entrada:
      "23:39 del 14 de abril de 1912. El vigía Frederick Fleet ve una masa negra delante y toca la campana tres veces. Desde ese aviso hasta el impacto pasan unos treinta y siete segundos. En ese tiempo el oficial de guardia da la orden que cualquiera habría dado: todo a babor y máquinas atrás. Y ahí, en esa orden razonable, empieza lo peor de la noche.",
    paginas: [
      {
        rotulo: "El golpe que no fue",
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
        rotulo: "Lo que cambió",
        texto:
          "El primer bote se largó con 28 personas dentro y sitio para 65: nadie se creía todavía que el barco insumergible se estuviera hundiendo. A las 2:20 el Titanic se partió y desapareció. Murieron unas 1.500 personas, la mayoría no ahogadas sino congeladas en un agua a menos de dos grados. De aquella noche salió casi todo lo que hoy damos por evidente en el mar: botes para todos los pasajeros, simulacros obligatorios, guardia de radio las 24 horas y una patrulla internacional del hielo que sigue vigilando el Atlántico Norte cada temporada. La lección costó mil quinientas vidas y se aprendió entera.",
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
      archivo: "Plastercasts of victims of the eruption of Mount Vesuvius, Pompeii.jpg",
      autor: "Wikimedia Commons",
      licencia: "CC BY-SA 3.0",
      foco: "50% 50%",
      alt: "Vaciados en yeso de víctimas de la erupción, expuestos en Pompeya.",
    },
    encargo: "Un vaciado en yeso de una víctima de Pompeya, en su vitrina.",
    entrada:
      "Año 79. El Vesubio lleva medio día lanzando piedra pómez sobre Pompeya. Mucha gente ya se ha ido; la que queda se refugia en casa esperando que aquello pase. De madrugada llega lo que de verdad mata: una avalancha de gas y ceniza a varios cientos de grados que baja por la ladera a más de cien kilómetros por hora y entra en la ciudad.",
    paginas: [
      {
        rotulo: "Ceniza que fragua",
        texto:
          "La nube mata en segundos y sigue de largo, pero detrás va dejando ceniza fina, que cae, se compacta y se endurece alrededor de todo lo que encuentra: muebles, puertas, panes en el horno, personas. Con los siglos, los cuerpos se descomponen dentro de esa envoltura y el hueso queda suelto en un agujero con la forma exacta que tenía el cuerpo el día que se detuvo. La ciudad entera se convierte así en un molde. Nadie se dio cuenta durante los primeros cien años de excavación: los operarios atravesaban esas cavidades sin entender qué eran y las rompían.",
      },
      {
        rotulo: "La idea de Fiorelli",
        texto:
          "En 1863, el arqueólogo Giuseppe Fiorelli se fija en que los huecos aparecen siempre donde hay huesos y da con la idea que lo cambia todo: hacer un agujero pequeño, meter yeso líquido, esperar a que fragüe y picar la ceniza alrededor. Lo que sale no es una escultura ni una reconstrucción: es el volumen del aire que dejó una persona real. Con los pliegues de la ropa. Con la postura exacta. Con la boca abierta o el brazo tapándose la cara. Hoy se hacen con resina transparente y se ven los huesos dentro, y con escáner se les ha mirado hasta la dentadura.",
        destacado: { tipo: "cifra", cifra: "1863", unidad: "el año del primer vaciado" },
      },
      {
        rotulo: "Lo que enseñan",
        texto:
          "Los vaciados corrigieron una idea muy repetida: que aquella gente murió huyendo, corriendo, aterrorizada. Muchas posturas no son de huida sino de calor extremo, la contracción que deja un choque térmico brutal en cuestión de segundos. Y hay algo más incómodo. Los moldes conservan a un perro atado que se ahogó girando sobre su correa, a familias enteras juntas en una habitación, a un hombre sentado que parece esperar. Pompeya no es sobre todo un yacimiento de arte romano: es el único sitio donde una catástrofe conserva el gesto de la gente en el instante exacto en que la alcanzó.",
        destacado: { tipo: "frase", frase: "No es una estatua: es el hueco que dejó alguien." },
      },
    ],
  },

  {
    id: "halifax",
    titulo: "La mayor explosión antes de la bomba",
    gancho: "Un barco cargado de explosivos ardió veinte minutos delante de una ciudad que salió a mirarlo.",
    categoria: "Catástrofes",
    color: "var(--ochre)",
    encargo: "La nube de la explosión de Halifax de 1917, o la ciudad arrasada después.",
    entrada:
      "6 de diciembre de 1917, puerto de Halifax, Canadá. Dos barcos se cruzan mal en un canal estrecho. El <em>Mont-Blanc</em>, francés, va cargado hasta arriba de TNT, ácido pícrico y benceno rumbo a la guerra en Europa. El <em>Imo</em>, noruego, le da un golpe de refilón en la proa. Del roce salta una chispa. Y el barco más peligroso del Atlántico empieza a arder despacio, a la vista de todos.",
    paginas: [
      {
        rotulo: "Todos a la ventana",
        texto:
          "La tripulación del <em>Mont-Blanc</em> sabe perfectamente lo que lleva debajo: rema hacia la orilla contraria y sale corriendo hacia el bosque gritando avisos en francés que nadie entiende. El barco, sin nadie a bordo, deriva hacia el muelle 6 y sigue ardiendo con una columna de humo negro y llamas de colores, un espectáculo raro y precioso. Halifax se asoma a mirarlo. La gente se acerca al puerto. Los niños salen de casa. En las escuelas y en las fábricas se abren las ventanas para ver mejor el barco en llamas. Aquello duró unos veinte minutos.",
        destacado: { tipo: "frase", frase: "La ciudad entera se asomó a la ventana a mirar." },
      },
      {
        rotulo: "9:04:35",
        texto:
          "A las 9:04 de la mañana detonan unas 2.900 toneladas de explosivos. Es la mayor explosión provocada por el hombre hasta Hiroshima: la onda arrasa un radio de kilómetro y medio, levanta un tsunami en la bahía que arrastra un asentamiento mi'kmaq entero y lanza el ancla del barco, de media tonelada, a más de tres kilómetros, donde todavía está. Murieron cerca de <strong>2.000 personas</strong> y unas 9.000 resultaron heridas. Cientos perdieron un ojo o los dos por los cristales de las ventanas a las que se habían asomado: fue tal la cantidad de ojos destrozados que aquel desastre impulsó la oftalmología canadiense.",
        destacado: { tipo: "cifra", cifra: "2.900", unidad: "toneladas de explosivo" },
      },
      {
        rotulo: "El árbol de Boston",
        texto:
          "Hubo un hombre que sí entendió lo que iba a pasar. Vince Coleman, telegrafista del ferrocarril, estaba evacuando cuando se acordó de que un tren de pasajeros venía de camino. Volvió a su puesto y mandó un último mensaje: «Un barco de munición arde y se dirige al muelle 6. Adiós, chicos». Murió allí; el tren frenó a tiempo. Esa noche empezó a nevar una tormenta que enterró las ruinas. Boston mandó trenes con médicos y material antes incluso de que se lo pidieran, y Halifax se lo devuelve desde entonces del modo más discreto posible: cada año envía a Boston el abeto que se planta en el centro de la ciudad por Navidad.",
      },
    ],
  },

  {
    id: "vajont",
    titulo: "La presa aguantó. Ese no era el problema",
    gancho: "La obra resistió perfectamente. El monte de al lado, no.",
    categoria: "Catástrofes",
    color: "var(--slate)",
    encargo: "La presa del Vajont hoy, intacta, con la cicatriz del monte Toc detrás.",
    entrada:
      "9 de octubre de 1963, valle del Vajont, Alpes italianos. Allí está la presa de bóveda más alta del mundo: 262 metros de hormigón, una obra de ingeniería que se cita con orgullo. Esa noche, a las 22:39, se desprende un trozo de la montaña vecina y cae dentro del embalse. La presa aguanta el golpe sin romperse. Sigue en pie hoy. Y aun así murieron unas 2.000 personas.",
    paginas: [
      {
        rotulo: "El monte que avisaba",
        texto:
          "El monte Toc llevaba años avisando. Los geólogos habían detectado una falla enorme y una masa inestable en la ladera; el terreno se movía centímetros cada semana, aparecían grietas nuevas, los animales se marchaban. La empresa lo sabía y probó a bajar y subir el nivel del embalse para «domesticar» el deslizamiento, con la idea de que resbalara despacio y por partes. A los vecinos de Erto y Casso, que veían las grietas desde sus casas y protestaban, se les respondió con denuncias por difundir noticias alarmistas. Una periodista, Tina Merlin, lo publicó todo antes de que pasara y acabó en el juzgado por ello.",
        destacado: { tipo: "frase", frase: "Lo denunciaron por escrito. La llevaron a juicio." },
      },
      {
        rotulo: "Cuarenta y cinco segundos",
        texto:
          "No bajó por partes. Bajaron 270 millones de metros cúbicos de montaña de una vez, a unos 100 km/h, y el embalse entero salió despedido hacia arriba. Una ola de más de 200 metros por encima de la presa saltó la coronación y cayó por el otro lado del valle. En unos minutos borró Longarone y varios pueblos más: casas, iglesia, plaza, cementerio. No quedó nada que identificar. La presa, mientras tanto, apenas sufrió daños. Sigue ahí, íntegra, sujetando un valle lleno de piedra, y es lo más perturbador del lugar: la obra hizo su trabajo.",
        destacado: { tipo: "cifra", cifra: "270", unidad: "millones de m³ de montaña" },
      },
      {
        rotulo: "El fallo no fue técnico",
        texto:
          "En el juicio quedó claro que no fue un imprevisto de la naturaleza: los informes existían, las mediciones existían, y la decisión de seguir llenando el embalse se tomó con ellos encima de la mesa. Las condenas fueron pocas y cortas. Hoy el Vajont se estudia en las facultades de ingeniería de medio mundo, pero no como un problema de cálculo estructural, sino como el caso de manual de otra cosa: una obra impecable puede matar a dos mil personas si la pregunta que no se hace es qué hay alrededor. La UNESCO lo cita como ejemplo de catástrofe evitable por fallo humano.",
      },
    ],
  },

  {
    id: "tenerife",
    titulo: "Dos aviones, una pista y una palabra",
    gancho: "El peor accidente de la aviación empezó con una bomba en otro aeropuerto.",
    categoria: "Catástrofes",
    color: "var(--clay)",
    encargo: "Un Boeing 747 de los años setenta en pista, con niebla.",
    entrada:
      "27 de marzo de 1977, aeropuerto de Los Rodeos, Tenerife. Un aeropuerto pequeño de montaña que aquella tarde está lleno de aviones enormes que no deberían estar ahí: un artefacto en Gran Canaria ha obligado a desviar todo el tráfico. Dos Boeing 747, uno de KLM y otro de Pan Am, esperan aparcados a que reabra el otro aeropuerto. Entonces baja la niebla.",
    paginas: [
      {
        rotulo: "Prisa y niebla",
        texto:
          "El comandante de KLM, Jacob van Zanten, era el piloto estrella de la compañía, el de los anuncios, el que formaba a los demás. Y tenía un problema: las horas máximas de servicio. Si no despegaba pronto, la tripulación se quedaba en tierra por normativa y la aerolínea tendría que alojar a 248 pasajeros en una isla saturada. Con la niebla encima, los dos aviones recibieron instrucción de rodar por la propia pista, en fila, y salir por una calle lateral. La torre no veía la pista. Los aviones no se veían entre sí. Todo dependía de la radio.",
      },
      {
        rotulo: "«We are at take-off»",
        texto:
          "El Pan Am seguía dentro de la pista buscando su salida. El KLM, alineado al fondo, soltó los frenos sin autorización de despegue. El copiloto comunicó una frase que no existe en fraseología estándar: «We are now at take-off». La torre entendió que estaban <em>en posición</em>, esperando; querían decir que estaban <em>despegando</em>. Y en ese instante, el mensaje de la torre y el del Pan Am se pisaron en la misma frecuencia y en la cabina del KLM solo se oyó un pitido. Van Zanten tiró del morro al ver la silueta delante. No le dio tiempo. Murieron <strong>583 personas</strong>.",
        destacado: { tipo: "cifra", cifra: "583", unidad: "muertos" },
      },
      {
        rotulo: "Lo que cambió en las cabinas",
        texto:
          "En la grabadora se oye al ingeniero de vuelo del KLM preguntar si el Pan Am ya ha despejado la pista. El comandante le responde con un «sí» seco y el ingeniero no insiste. Ese detalle —un subordinado que ve el problema y no se atreve a plantarse— resultó ser el hallazgo más importante de la investigación. De ahí salió el <em>Crew Resource Management</em>, que hoy es obligatorio: cualquier miembro de la tripulación puede y debe cuestionar al comandante, con protocolo y con palabras concretas. También se prohibió la palabra «take-off» en cualquier frase que no sea la autorización. Volar es hoy segurísimo en parte por esta tarde.",
        destacado: { tipo: "frase", frase: "El fallo no fue de radar. Fue de jerarquía." },
      },
    ],
  },

  {
    id: "krakatoa",
    titulo: "El sonido más fuerte del que hay registro",
    gancho: "Se oyó a 4.800 kilómetros. A esa distancia ya no es un sonido: es un rumor que nadie explica.",
    categoria: "Catástrofes",
    color: "var(--plum)",
    encargo: "Litografía de la erupción del Krakatoa de 1883.",
    entrada:
      "27 de agosto de 1883, estrecho de la Sonda, entre Java y Sumatra. La isla volcánica de Krakatoa lleva meses inquieta. Esa mañana se rompe: cuatro explosiones enormes, la última de las cuales revienta el volcán y hunde buena parte de la isla bajo el mar. Y produce el fenómeno acústico mejor documentado de la historia.",
    paginas: [
      {
        rotulo: "Cuatro mil ochocientos kilómetros",
        texto:
          "En la isla Rodrigues, en el océano Índico, a unos 4.800 kilómetros, el jefe de policía anotó en su informe que se oía «el rugido lejano de cañones pesados» y mandó buscar un barco en apuros. En Australia, a más de 3.000 kilómetros, la gente creyó que había disparos. A 50 kilómetros del volcán, en un barco británico, el capitán escribió que a más de la mitad de su tripulación le habían reventado los tímpanos y dejó anotada la frase que se cita siempre: creía que se acababa el mundo. Es el sonido más lejano que se ha registrado nunca de un solo suceso.",
        destacado: { tipo: "cifra", cifra: "4.800", unidad: "km de distancia" },
      },
      {
        rotulo: "La onda que dio vueltas",
        texto:
          "Lo que salió del Krakatoa no fue solo ruido audible. La onda de presión dio la vuelta al planeta y los barómetros de todo el mundo la registraron pasando por encima, una y otra vez, durante cinco días: siete vueltas completas. Pero lo que mató no fue la explosión, sino el agua. Los tsunamis que provocó el derrumbe de la isla alcanzaron los 30 metros y arrasaron las costas de Java y Sumatra: más de <strong>36.000 muertos</strong>. Un barco de vapor, el <em>Berouw</em>, apareció tres kilómetros tierra adentro, encajado en un valle.",
        destacado: { tipo: "frase", frase: "La onda dio siete vueltas al planeta." },
      },
      {
        rotulo: "Los cielos rojos",
        texto:
          "Krakatoa metió tanta ceniza y azufre en la alta atmósfera que el planeta se enfrió más de medio grado durante años y los atardeceres de todo el mundo se volvieron de colores imposibles. En Nueva York llamaron a los bomberos varias veces creyendo que ardía la ciudad. Hay quien sostiene que el cielo naranja de <em>El grito</em> de Munch, pintado poco después, es el cielo del Krakatoa; Munch escribió que vio el cielo volverse «rojo sangre» y se quedó temblando. Donde estaba la isla, en 1927 empezó a asomar un cono nuevo. Se llama Anak Krakatau: «hijo de Krakatoa». Y sigue creciendo.",
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
      "15 de enero de 1919, barrio del North End de Boston. Hace un día raro de invierno, casi cálido. En el muelle hay un depósito de acero de 15 metros de alto lleno con nueve millones de litros de melaza, la materia prima con la que se fabricaba ron y también alcohol industrial para explosivos. A mediodía, el depósito se abre con un ruido de ametralladora: son los remaches saltando.",
    paginas: [
      {
        rotulo: "Nadie lo probó nunca",
        texto:
          "El depósito se había construido cuatro años antes con prisa y sin apenas supervisión. El encargado de la obra no era ingeniero y no sabía leer un plano. Nunca se hizo la prueba elemental de llenarlo de agua para ver si aguantaba: se llenó directamente de melaza. Desde el primer día goteaba tanto que los vecinos del barrio iban con cubos a recoger lo que caía, y la empresa resolvió el problema del modo más literal posible: pintó el depósito de marrón para que las fugas no se vieran. Los crujidos eran tan habituales que la gente ya no les hacía caso.",
        destacado: { tipo: "frase", frase: "Lo pintaron de marrón para que no se vieran las fugas." },
      },
      {
        rotulo: "La ola",
        texto:
          "Lo que salió no fue un charco. Fue una ola de unos ocho metros de alto que bajó por la calle a unos <strong>50 km/h</strong>, con la fuerza suficiente para arrancar de sus cimientos una estación elevada del tren y arrastrar un vagón. La melaza fría es densísima: la gente atrapada no podía nadar ni sacar los brazos, y los caballos se quedaban pegados al suelo. Murieron 21 personas y unas 150 resultaron heridas. Los equipos de rescate tardaron días en encontrar a algunas víctimas porque estaban cubiertas de una masa marrón que se confundía con los escombros.",
        destacado: { tipo: "cifra", cifra: "21", unidad: "muertos" },
      },
      {
        rotulo: "El juicio que cambió la ley",
        texto:
          "La empresa sostuvo que había sido un atentado anarquista. El pleito duró seis años y fue uno de los primeros grandes juicios colectivos de Estados Unidos: se llamaron a más de 3.000 testigos y por primera vez unos peritos independientes explicaron a un tribunal el cálculo de tensiones de un acero. Perdieron. De aquella sentencia salió la obligación, que hoy parece obvia, de que los planos de una obra los firme un ingeniero titulado y los apruebe el ayuntamiento. Los vecinos del North End juraron durante décadas que en verano, con el calor, el barrio seguía oliendo a melaza.",
      },
    ],
  },
];
