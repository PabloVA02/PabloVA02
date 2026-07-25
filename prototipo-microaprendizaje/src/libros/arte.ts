import type { Resumen } from "./tipos";

/* ==========================================================================
   Arte.

   La categoría que más se resiste al formato: hablar de imágenes sin
   enseñarlas. La salida es contar el proceso y la vida de quien las hizo,
   que es lo que engancha de todas formas — nadie recuerda un cuadro por su
   composición, lo recuerda por lo que le pasaba al que lo pintó.
   ========================================================================== */

export const ROBA_ARTISTA: Resumen = {
  id: "roba-artista",
  titulo: "Roba como un artista",
  autor: "Austin Kleon",
  ano: 2012,
  gancho: "Empezó como una charla en una universidad pequeña ante unos pocos estudiantes. Alguien la colgó en internet y se leyó millones de veces.",
  porQue:
    "Desmonta en diez reglas cortas el mito que más gente paraliza: que hay que tener una idea original antes de empezar.",
  partes: [
    {
      titulo: "Nada es original",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 2011 Austin Kleon, un escritor sin apenas público, dio una charla a un grupo de estudiantes en una universidad pequeña de Nueva York. Preparó una lista de las diez cosas que le habría gustado que le contaran a los veinte años. La colgó en su blog por si a alguien le servía. Se propagó sola, la leyeron millones de personas y acabó convertida en un libro que se ha traducido a más de veinte idiomas.",
        },
        {
          forma: "clave",
          rotulo: "La regla número uno",
          frase: "Roba como un artista. Nada es completamente original, y saberlo te libera para empezar.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento no es una excusa para copiar, y conviene entenderlo bien. Toda obra nueva se construye sobre otras: lo que llamamos originalidad es una combinación de influencias que nadie había juntado antes. El artista honesto conoce sus fuentes y las cita; el que roba de verdad es el que las esconde para parecer un genio salido de la nada.",
        },
        {
          forma: "arte",
          texto:
            "De ahí su consejo más práctico: en vez de preguntarte «¿qué tengo yo que decir?», estudia a quien admiras. Y no a uno solo, porque entonces eres un imitador; a diez o quince a la vez, para que sus influencias se mezclen y salga algo que no se parece del todo a ninguno. «Coleccionar bien es la mitad del trabajo.»",
          arte: "estanteria",
        },
      ],
    },

    {
      titulo: "Empieza antes de saber quién eres",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su segunda regla ataca la parálisis más común: esperar a tener claro qué clase de artista eres antes de ponerte. Kleon dice que es al revés — descubres quién eres <em>haciendo</em>, no pensando. Y añade que fingir hasta conseguirlo no es una impostura: todo el mundo empieza haciendo algo que aún no sabe hacer.",
        },
        {
          forma: "clave",
          rotulo: "El atajo",
          frase: "Haz la cosa que te habría gustado encontrar hecha. Si no existe el libro que quieres leer, escríbelo tú.",
        },
        {
          forma: "texto",
          texto:
            "Insiste también en usar las manos. Su mesa está dividida en dos: la digital, con el ordenador, y la analógica, con papel, tijeras y rotuladores. La analógica es donde se generan las ideas, porque el ordenador —dice— es magnífico para editar y pésimo para empezar. En cuanto abres un documento en blanco entra el crítico, y el crítico mata todo lo que aún no está terminado.",
        },
        {
          forma: "texto",
          texto:
            "Y defiende los proyectos secundarios y las aficiones sin ambición: precisamente ahí, donde no hay nada en juego, es donde aparece lo bueno. Muchos artistas descubrieron su obra principal jugando con lo que hacían al margen.",
        },
      ],
    },

    {
      titulo: "Aburrido por fuera",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "La regla que más choca es «sé aburrido; es la única manera de trabajar». Kleon desmonta el mito del artista caótico con una cita de Flaubert que resume el libro entero: sé ordenado y regular en tu vida para poder ser violento y original en tu obra.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Lo lleva a lo doméstico y sin romanticismo: cuídate el sueño, haz algo de deporte, ten un trabajo que pague las facturas y no te queme la cabeza, guarda un calendario donde tachar los días que has trabajado. La cadena de días tachados acaba siendo la única motivación fiable, porque no depende de que ese día te apetezca.",
        },
        {
          forma: "clave",
          rotulo: "La otra mitad",
          frase: "Haz buen trabajo y compártelo. No hay tercera parte del secreto.",
        },
        {
          forma: "texto",
          texto:
            "Sobre compartir tiene una idea útil y poco intuitiva: no enseñes solo lo terminado, enseña también el proceso. Los bocetos, los descartes, lo que estás leyendo. La gente no se engancha a las obras acabadas de un desconocido; se engancha a ver cómo alguien las hace.",
        },
      ],
    },

    {
      titulo: "La creatividad es restar",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su última idea es la más liberadora para cualquiera que se bloquee ante infinitas posibilidades: elige tus límites a propósito. Escribe solo con un color, o en un cuaderno diminuto, o dedícale veinte minutos y ni uno más. La restricción no empobrece el resultado, lo obliga a existir.",
        },
        {
          forma: "arte",
          texto:
            "Pone el ejemplo de músicos que se pusieron reglas absurdas —grabar en tres días, con dos micrófonos, sin ordenador— y sacaron sus mejores discos. Frente a la página en blanco, no falta talento: sobra libertad.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir lo obvio del libro: son ochenta páginas de aforismos con dibujos, y quien busque profundidad se quedará con hambre. Kleon no demuestra nada, y su idea de «robar» se ha malinterpretado bastante — hay quien la ha leído como permiso para copiar sin más.",
        },
        {
          forma: "texto",
          texto:
            "Y una regla más que suele pasarse por alto y que es de las mejores: la geografía ya no manda. Kleon escribe que durante siglos había que mudarse a París o a Nueva York para estar donde pasaban las cosas, y que eso se acabó — hoy puedes formar parte de una conversación desde cualquier sitio. Pero lo remata con una advertencia: el mundo se ha convertido en un pueblo pequeño donde todos se conocen, así que trata bien a la gente, responde a quien te escribe y no hables mal de nadie por escrito. Ser generoso no es una estrategia de marketing; es que las oportunidades llegan casi siempre de alguien que te recordó con simpatía.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "No esperes a tener una idea original. Junta las que ya te gustan y empieza hoy: lo tuyo aparece por el camino.",
        },
      ],
    },
  ],
};

export const GUERRA_ARTE: Resumen = {
  id: "guerra-arte",
  titulo: "La guerra del arte",
  autor: "Steven Pressfield",
  ano: 2002,
  gancho: "Le pone nombre a la fuerza que te impide sentarte a hacer lo que llevas años diciendo que vas a hacer.",
  porQue:
    "Es el libro que más escritores, músicos y deportistas regalan. Su idea central explica la procrastinación mejor que cualquier manual de productividad.",
  partes: [
    {
      titulo: "Diecisiete años sin vender nada",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Steven Pressfield pasó casi dos décadas intentando ser escritor sin conseguirlo. Trabajó de camionero, de recolector de fruta, de guionista sin encargos; vivió en una furgoneta. Su primera novela vendida llegó cuando ya rondaba los cincuenta. Este libro es lo que aprendió de esos años, y no va de escribir: va de por qué no escribía.",
        },
        {
          forma: "clave",
          rotulo: "El enemigo",
          frase: "La Resistencia: una fuerza que se opone a cualquier acto que te haga mejor de lo que eres.",
        },
        {
          forma: "texto",
          texto:
            "Lo llama así, con mayúscula, y lo trata como una ley física. La Resistencia no aparece cuando vas a ver la tele; aparece exactamente cuando vas a hacer lo que importa. Escribir, entrenar, montar el negocio, tener la conversación difícil. Nunca se opone a lo cómodo.",
        },
        {
          forma: "arte",
          texto:
            "Y de ahí saca la observación más útil del libro: la Resistencia funciona como una brújula. Cuanto más miedo te da algo, más señal es de que tienes que hacerlo, porque solo se resiste lo que te haría crecer. El proyecto que llevas años posponiendo es, casi siempre, el que más te importa.",
          arte: "explorar",
        },
      ],
    },

    {
      titulo: "Sus disfraces",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La primera parte del libro es un catálogo de cómo se disfraza. El más común es la procrastinación, y Pressfield señala su truco: nunca dice «no lo hagas», dice «hazlo mañana». Y eso suena tan razonable que cuela toda la vida.",
        },
        {
          forma: "texto",
          texto:
            "Pero hay más caras, y algunas incómodas. Formarse eternamente sin producir nada. Criticar el trabajo ajeno con un ojo finísimo. Convertirse en el personaje sufriente de tu propia película. Buscar problemas de pareja justo cuando había que trabajar. Cuidar de todo el mundo para no tener tiempo de cuidar lo tuyo.",
        },
        {
          forma: "clave",
          rotulo: "El disfraz favorito",
          frase: "El perfeccionismo. Suena a exigencia y es miedo con buena reputación.",
        },
        {
          forma: "texto",
          texto:
            "Señala otra pista inconfundible: la Resistencia aprieta más cuanto más cerca estás del final. El último capítulo, la última semana, el paso que ya solo consiste en entregar. Justo ahí aparecen las dudas, las ganas de rehacerlo todo desde cero y la urgencia repentina de ocuparse de otra cosa. Terminar es lo que más se resiste, porque terminar expone.",
        },
        {
          forma: "texto",
          texto:
            "Su diagnóstico más duro va al «artista bloqueado» que se refugia en el sufrimiento: la infelicidad puede volverse cómoda, porque mientras te lamentas nadie te pide resultados. Pressfield lo dice sin piedad, y probablemente porque estuvo ahí años.",
        },
      ],
    },

    {
      titulo: "Hacerse profesional",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "La segunda parte es la solución, y no es motivación: es cambiar de categoría. El aficionado escribe cuando le apetece; el profesional se presenta todos los días, apetezca o no. No es cuestión de talento ni de haber vendido nada — es una decisión que puedes tomar esta tarde.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Su retrato del profesional es concreto. Aparece cada día a la misma hora. Se queda toda la jornada. Aguanta a largo plazo. Acepta que le paguen. No se identifica tanto con su trabajo como para hundirse cuando falla. Domina la técnica. Y sobre todo: no espera a la inspiración, porque sabe que la inspiración llega cuando ya estás sentado, no antes.",
        },
        {
          forma: "clave",
          rotulo: "La frase que resume el libro",
          frase: "El aficionado espera a estar inspirado. El profesional sabe que la inspiración viene después de empezar.",
        },
        {
          forma: "texto",
          texto:
            "Y una anécdota que remata la idea. El día que terminó su primera novela, después de años, llamó a su mentor y le dijo que lo había conseguido. El otro le felicitó y añadió una sola frase: «empieza la siguiente mañana». Terminar no es la meta; volver a sentarse sí.",
        },
      ],
    },

    {
      titulo: "La parte discutible",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La tercera parte del libro es donde mucha gente se baja. Pressfield sostiene que existen musas literales, ángeles y fuerzas superiores que acuden cuando demuestras compromiso, y describe un pequeño ritual de invocación antes de escribir. Lo dice en serio, no como metáfora.",
        },
        {
          forma: "texto",
          texto:
            "Se puede leer como superstición y saltárselo sin perder nada. Pero conviene rescatar el fondo, que sí aguanta: dejar de esperar a sentirte capaz y actuar como si ya lo fueras. El compromiso no llega después de la confianza; la confianza llega después del compromiso.",
        },
        {
          forma: "arte",
          texto:
            "Hay otra crítica justa: su tono es de sargento y su ideal —presentarse todos los días sin excusas— no distingue entre pereza y agotamiento real. Aplicado a alguien que atraviesa una depresión o cuida de otros, ese discurso hace daño en vez de ayudar.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Hay una distinción suya que vale por medio libro: la diferencia entre el que hace y el que habla de hacer. Pressfield señala que la Resistencia adora las conversaciones sobre proyectos — la novela que vas a escribir, el negocio que vas a montar— porque hablar de ello da casi la misma satisfacción que hacerlo y no cuesta nada. Su consejo es incómodo y práctico: no cuentes lo que estás haciendo hasta que esté hecho. Cada vez que lo narras gastas parte del combustible que necesitabas para terminarlo, y la aprobación que recibes al contarlo sustituye a la que ibas a buscar acabándolo.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Aquello que más te cuesta empezar es exactamente lo que tienes que empezar. La resistencia señala el camino.",
        },
      ],
    },
  ],
};

export const MODOS_VER: Resumen = {
  id: "modos-ver",
  titulo: "Modos de ver",
  autor: "John Berger",
  ano: 1972,
  gancho: "Cuatro programas de televisión de treinta minutos que cambiaron para siempre la forma en que Occidente mira las imágenes.",
  porQue:
    "Después de leerlo no puedes volver a ver un anuncio igual. Es el libro que más ha influido en cómo entendemos la publicidad.",
  partes: [
    {
      titulo: "Ver es anterior a las palabras",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1972 la BBC emitió cuatro programas de media hora presentados por John Berger, un crítico de arte con camisa estampada que hablaba mirando a cámara. Iban contra todo lo que se decía entonces sobre arte: nada de reverencia, nada de genios. El libro que salió de ahí lleva medio siglo en las listas de lectura de las escuelas de arte del mundo.",
        },
        {
          forma: "clave",
          rotulo: "La primera frase",
          frase: "Ver es anterior a las palabras. El niño mira y reconoce antes de poder hablar.",
        },
        {
          forma: "arte",
          texto:
            "Su primer golpe va contra la idea de obra maestra intocable. Un cuadro pintado para una capilla concreta significaba algo cuando lo veías allí, en penumbra, después de un viaje. El mismo cuadro reproducido en una postal, en un libro o de fondo en la pantalla de una cocina, ya no significa lo mismo. La reproducción no acerca la obra: la convierte en otra cosa.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Y señala la consecuencia incómoda: como ya se puede reproducir cualquier cosa, lo único que hace especial al original es que es <em>el original</em> — es decir, su precio. El aura del museo, dice Berger, es en buena parte el eco del valor de mercado.",
        },
      ],
    },

    {
      titulo: "Los hombres actúan, las mujeres aparecen",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El capítulo más citado del libro analiza el desnudo en la pintura europea. Berger observa que casi todos los desnudos femeninos están pintados por hombres, para hombres, y que la mujer del cuadro casi siempre mira hacia fuera: no está absorta en su mundo, está pendiente de quien la observa.",
        },
        {
          forma: "clave",
          rotulo: "La frase que se ha repetido mil veces",
          frase: "Los hombres miran a las mujeres. Las mujeres se miran a sí mismas siendo miradas.",
        },
        {
          forma: "texto",
          texto:
            "De ahí saca su idea más influyente: a las mujeres se les enseña desde niñas a vigilarse por dentro, a llevar encima un observador permanente que juzga cómo se las ve. Conviven una vigilante y una vigilada en la misma persona. Escrito en 1972, es la base de buena parte de lo que hoy se discute sobre imagen corporal y redes.",
        },
        {
          forma: "texto",
          texto:
            "Berger distingue además entre estar desnudo y ser un desnudo. Lo primero es simplemente no llevar ropa; lo segundo es estar convertido en objeto de exhibición para otro. La diferencia no está en el cuerpo sino en para quién está puesto.",
        },
      ],
    },

    {
      titulo: "Pintar lo que se posee",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "Su tercera tesis es sobre la pintura al óleo entre 1500 y 1900, y es demoledora. Buena parte de esos cuadros, dice, no celebran la belleza: celebran la propiedad. Los objetos, los tejidos, la vajilla, las tierras del fondo — todo eso pertenecía al que pagaba el cuadro, y la pintura al óleo existía precisamente porque sabía representar mejor que ninguna otra técnica la textura de lo que se puede comprar.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo favorito es un retrato de matrimonio terrateniente sentado tranquilamente ante un campo de trigo. La lectura amable dice que aman la naturaleza. Berger señala lo otro: el campo es suyo, y en aquella época robar una patata de ahí se castigaba con la deportación.",
        },
        {
          forma: "clave",
          rotulo: "La conclusión",
          frase: "No estás viendo un paisaje. Estás viendo un inventario.",
        },
        {
          forma: "texto",
          texto:
            "Berger salva de esa crítica a unos pocos pintores, y explica por qué: son los que pintaron lo que no se podía vender. Un autorretrato de vejez, una pareja de zapatos gastados, una criada vertiendo leche. Ahí, dice, la pintura deja de ser un catálogo y empieza a mirar de verdad.",
        },
      ],
    },

    {
      titulo: "La publicidad como heredera",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Y llega el remate, que es lo que hace que el libro siga vivo. La publicidad, sostiene Berger, es la continuación directa de aquella pintura, con una inversión decisiva: el óleo enseñaba lo que su dueño <em>ya tenía</em>; el anuncio enseña lo que <em>podrías</em> tener. Uno confirmaba una vida; el otro la promete.",
        },
        {
          forma: "arte",
          texto:
            "Por eso, dice, la publicidad no vende objetos: vende una versión mejorada de ti mismo vista desde fuera, con los ojos de los demás. Te propone envidiar a la persona en la que te convertirías si compraras eso. Y como esa persona no llega nunca, el mecanismo se puede repetir indefinidamente.",
          arte: "explorar",
        },
        {
          forma: "clave",
          rotulo: "La definición",
          frase: "La publicidad no habla de productos. Habla de relaciones sociales, y promete felicidad juzgada por otros.",
        },
        {
          forma: "texto",
          texto:
            "Berger dedica además un capítulo entero a un formato que hoy llamaríamos otra cosa: los anuncios que usan obras de arte para vender. Un cuadro célebre detrás de un perfume, una escultura clásica en un anuncio de coches. Su lectura es que la publicidad necesita ese préstamo porque le hace falta autoridad cultural — quiere que la elegancia de siglos se transfiera al producto sin haberla ganado. Y añade una observación que corta: en un anuncio, el pasado se usa siempre para vender futuro. Nunca para entender el presente.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir sus límites: Berger escribe desde un marxismo explícito y a veces fuerza la interpretación —no todo cuadro de un campo es una escritura de propiedad—, y varios historiadores del arte le han discutido casos concretos. Pero su lectura de la publicidad ha envejecido asombrosamente bien: cámbiese «anuncio de revista» por «feed» y el texto de 1972 describe 2026 sin tocar una coma.",
        },
      ],
    },
  ],
};

export const CARTAS_THEO: Resumen = {
  id: "van-gogh-cartas",
  titulo: "Cartas a Theo",
  autor: "Vincent van Gogh",
  ano: 1914,
  gancho: "Pintó durante diez años, hizo más de dos mil obras y no vendió casi nada. Su hermano le pagó cada tubo de pintura.",
  porQue:
    "Las seiscientas cartas desmontan el mito del loco que pintaba por instinto. Era un lector voraz que razonaba cada color.",
  partes: [
    {
      titulo: "El hermano que pagaba",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Theo van Gogh era marchante de arte en París y tenía un sueldo decente. Durante toda su vida adulta mandó dinero a su hermano mayor Vincent, mes tras mes, para que pudiera pintar. Le pagaba el alquiler, la comida, los lienzos y los tubos de óleo. A cambio recibía cartas: más de seiscientas cincuenta a lo largo de dieciocho años.",
        },
        {
          forma: "arte",
          texto:
            "Vincent empezó a pintar tarde, cerca de los veintisiete años, después de fracasar como marchante, como maestro y como predicador entre mineros. En apenas una década produjo unas dos mil obras, de las cuales unas ochocientas sesenta son óleos. Casi todo lo que conocemos de él lo hizo en sus últimos cuatro años.",
          arte: "escritor",
        },
        {
          forma: "clave",
          rotulo: "La cuenta",
          frase: "Diez años pintando. Más de dos mil obras. Prácticamente ninguna vendida en vida.",
        },
        {
          forma: "texto",
          texto:
            "Las cartas dejan ver algo que el mito tapa: la culpa. Vincent sabía perfectamente que vivía del dinero de su hermano y se lo escribe una y otra vez, prometiendo que algún día podrá devolvérselo. Esa deuda pesa en el libro más que ninguna crisis artística.",
        },
      ],
    },

    {
      titulo: "El lector que nadie cuenta",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La imagen popular es la de un hombre poseído que embadurnaba el lienzo a manotazos. Las cartas dicen lo contrario. Van Gogh leía a Dickens, a Zola, a Shakespeare, en varios idiomas — hablaba neerlandés, francés e inglés—, y discutía teoría del color como un ingeniero.",
        },
        {
          forma: "texto",
          texto:
            "Explica a Theo por qué pone un naranja al lado de un azul, qué le pasa a un amarillo cuando lo rodea de violeta, cómo consigue que un campo vibre sin usar más pintura. Nada de eso es instinto: es alguien estudiando la ley física de los complementarios y aplicándola a mano.",
        },
        {
          forma: "clave",
          rotulo: "Lo que revela",
          frase: "No pintaba a ciegas. Sabía exactamente qué estaba haciendo y por qué. Escribirlo era parte del método.",
        },
        {
          forma: "arte",
          texto:
            "Hay una frase suya que resume su forma de trabajar y que conviene tener a mano cuando algo no sale: dice que busca, que se esfuerza, que está metido en ello con todo el corazón. No habla de talento en ningún momento; habla de estar dentro.",
          arte: "aprendizaje",
        },
      ],
    },

    {
      titulo: "Arlés",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1888 se mudó al sur de Francia buscando luz y soñando con fundar allí una comunidad de pintores. Alquiló una casa amarilla y convenció a Paul Gauguin para que fuera. Convivieron nueve semanas. Discutían constantemente sobre pintura y sobre todo lo demás.",
        },
        {
          forma: "texto",
          texto:
            "La víspera de Navidad, tras una pelea, Vincent se cortó parte de la oreja izquierda. Gauguin se marchó y no volvieron a verse. A partir de ahí se sucedieron los ingresos hospitalarios, y él mismo pidió internarse en un asilo cercano. Allí, encerrado y con una ventana como único paisaje, pintó algunas de sus obras más conocidas.",
        },
        {
          forma: "clave",
          rotulo: "El matiz que cambia la historia",
          frase: "No pintaba por estar enfermo. Pintaba a pesar de estarlo, en los intervalos en que la enfermedad le daba tregua.",
        },
        {
          forma: "texto",
          texto:
            "Es una corrección importante, porque el relato del genio atormentado ha hecho daño real: sugiere que el sufrimiento produce arte. Las cartas muestran lo contrario. Los brotes le impedían trabajar y él los vivía como interrupciones. Lo que producía arte eran las temporadas buenas.",
        },
      ],
    },

    {
      titulo: "Johanna",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En julio de 1890 Vincent murió a los treinta y siete años por una herida de bala. Seis meses después murió Theo, con treinta y tres, destrozado por la pérdida y por su propia enfermedad. Están enterrados uno junto al otro en Auvers-sur-Oise, con dos lápidas iguales cubiertas de hiedra.",
        },
        {
          forma: "arte",
          texto:
            "Y aquí aparece la persona sin la cual nadie sabría hoy quién fue Van Gogh: Johanna, la viuda de Theo. Se quedó con veintiocho años, un bebé, cientos de cuadros que nadie quería y un baúl lleno de cartas. Podría haberlo vendido todo por nada. En vez de eso dedicó el resto de su vida a colocar las obras en exposiciones, a negarse a malvenderlas y a traducir y publicar la correspondencia en 1914.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Las cartas dejan también su idea del trabajo, que es lo más aprovechable para cualquiera. Escribe que si oyes una voz dentro diciendo que no sabes pintar, entonces pinta como sea, y esa voz se callará. Cuenta que hacía decenas de estudios de una misma mano o de un mismo par de zapatos hasta que salían, y que no creía en la inspiración sino en presentarse cada mañana delante del lienzo. Ese Van Gogh —terco, metódico, corrigiendo— no aparece en ninguna película sobre él, y es el que se lee en las seiscientas cincuenta cartas.",
        },
        {
          forma: "clave",
          rotulo: "Lo que casi nadie sabe",
          frase: "La fama de Van Gogh no fue póstuma por casualidad. La construyó su cuñada, a pulso, durante casi treinta años.",
        },
        {
          forma: "texto",
          texto:
            "Como libro tiene una pega evidente: son cientos de cartas y no se leen de corrido. Hay páginas de listas de gastos y de encargos de pintura. Pero abrirlo por cualquier sitio y leer veinte minutos es una de las experiencias más directas que existen — se parece menos a leer a un artista muerto que a leer los mensajes de alguien que te está contando cómo le va.",
        },
      ],
    },
  ],
};

export const LEONARDO: Resumen = {
  id: "leonardo",
  titulo: "Leonardo da Vinci",
  autor: "Walter Isaacson",
  ano: 2017,
  gancho: "Entre sus notas hay una tarea pendiente: «describir la lengua del pájaro carpintero». Nadie se lo había encargado.",
  porQue:
    "Reconstruye al personaje a partir de siete mil doscientas páginas de sus cuadernos. Y su conclusión es que el genio era, sobre todo, curiosidad entrenada.",
  partes: [
    {
      titulo: "Las listas de tareas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Se conservan unas siete mil doscientas páginas de los cuadernos de Leonardo, y se calcula que son apenas una cuarta parte de lo que llegó a escribir. Isaacson construye el libro entero a partir de ellas, y lo mejor no son los grandes planos de máquinas: son las listas de cosas por hacer.",
        },
        {
          forma: "arte",
          texto:
            "«Preguntar al maestro de aritmética cómo se cuadra un triángulo.» «Averiguar por qué el cielo es azul.» «Describir la lengua del pájaro carpintero.» «Observar cómo camina la gente y qué hace con los pies.» Nadie le pagaba por nada de eso. Lo apuntaba porque no podía evitar preguntárselo.",
          arte: "explorar",
        },
        {
          forma: "clave",
          rotulo: "La tesis del libro",
          frase: "El genio de Leonardo no fue un don sobrenatural. Fue curiosidad obsesiva, sostenida durante toda una vida.",
        },
        {
          forma: "texto",
          texto:
            "Isaacson subraya la diferencia con Newton o Einstein, cuyo talento parece inalcanzable. Lo de Leonardo, dice, es distinto: mirar mejor, preguntar más y no dar nada por sabido son cosas que se pueden practicar. Puede que la conclusión sea optimista de más, pero apunta a algo real.",
        },
      ],
    },

    {
      titulo: "Hombre sin letras",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Nació fuera del matrimonio en un pueblo de la Toscana, y eso —que en su época era un estigma— resultó decisivo: al ser ilegítimo no podía heredar el oficio de notario de su padre. Se libró de una vida de escribano y entró de aprendiz en un taller de pintura.",
        },
        {
          forma: "texto",
          texto:
            "No fue a la universidad, no aprendió latín hasta muy mayor y se firmaba a sí mismo «hombre sin letras». Lo decía con resentimiento, pero también con una punta de orgullo: se llamaba discípulo de la experiencia. Mientras los eruditos discutían lo que había escrito Aristóteles, él iba y lo miraba.",
        },
        {
          forma: "clave",
          rotulo: "El método",
          frase: "No leyó lo que se sabía. Fue a comprobarlo. La observación directa, por encima de cualquier autoridad.",
        },
        {
          forma: "texto",
          texto:
            "Sus cuadernos están escritos de derecha a izquierda y con las letras invertidas, legibles solo ante un espejo. Se ha querido ver ahí un código secreto, y la explicación más aceptada es mucho más sencilla: era zurdo, y escribiendo así no arrastraba la mano sobre la tinta fresca.",
        },
        {
          forma: "texto",
          texto:
            "Isaacson enumera lo que era en su época y hoy suena moderno: hijo ilegítimo, homosexual, vegetariano, zurdo, distraído y heterodoxo en religión. Casi todo eso lo apartaba del camino normal. Y precisamente por estar fuera pudo mirar sin las anteojeras de nadie.",
        },
      ],
    },

    {
      titulo: "La sonrisa y el corazón",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "Diseccionó unos treinta cadáveres, a mano, sin refrigeración y con el olor que eso supone. No lo hacía para la ciencia: quería saber qué músculo mueve exactamente un labio cuando alguien sonríe. Dibujó los nervios faciales capa por capa hasta entenderlo.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Ahí está el secreto de la <em>Gioconda</em>. La sonrisa cambia según dónde mires porque Leonardo sabía que la visión central y la periférica captan detalles distintos, y pintó la boca de forma que solo funcione del todo cuando no la miras directamente. No es magia: es anatomía más óptica.",
        },
        {
          forma: "clave",
          rotulo: "El hallazgo que tardó siglos en confirmarse",
          frase: "Dibujó cómo se cierra la válvula aórtica con remolinos de sangre. No se pudo verificar hasta la resonancia magnética.",
        },
        {
          forma: "texto",
          texto:
            "Y un detalle que dice mucho de él: no publicó nada. Todo esto quedó en cuadernos privados, escritos al revés con su letra en espejo, que nadie ordenó ni difundió. Buena parte de sus descubrimientos hubo que volver a hacerlos siglos después porque estaban ahí, escritos, y nadie los leyó.",
        },
      ],
    },

    {
      titulo: "El que no terminaba",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La parte que más consuela del libro es su historial de proyectos abandonados. El caballo gigante para los Sforza nunca llegó a fundirse. La batalla de Anghiari se deterioró por experimentar con una técnica que no funcionó. Aceptó encargos que no entregó, cobró adelantos que tuvo que devolver y dejó cuadros a medias durante años.",
        },
        {
          forma: "arte",
          texto:
            "La <em>Gioconda</em> es el caso extremo: la empezó hacia 1503 y siguió retocándola hasta su muerte, dieciséis años después. Nunca se la dio al cliente. Se la llevó consigo a Francia y la tenía en su habitación. Para él no estaba terminada.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Isaacson lo interpreta con generosidad: dejar algo sin acabar era la manera de no cerrarlo mientras siguiera aprendiendo. Es una lectura bonita, aunque hay que decir que también arruinó a varios clientes y que sus contemporáneos lo consideraban poco fiable.",
        },
        {
          forma: "texto",
          texto:
            "Isaacson insiste en una habilidad concreta que Leonardo entrenó como un músico entrena escalas: mirar despacio. Anotaba que el agua al caer forma espirales, que las libélulas mueven las alas delanteras y traseras en sentidos opuestos, que la lengua de un pájaro carpintero es tan larga que se enrolla alrededor del cráneo. Nada de eso se ve mirando: se ve observando lo mismo muchas veces. Y de ahí sale su consejo práctico para cualquiera, que no requiere ser un genio — dedicarle a una cosa cotidiana más atención de la que merece a primera vista, porque casi todo se vuelve interesante cuando lo miras el tiempo suficiente.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Apunta las preguntas raras que se te ocurran. Esa costumbre, sostenida, es casi todo el método.",
        },
      ],
    },
  ],
};
