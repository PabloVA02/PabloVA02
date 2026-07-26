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

export const CARTAS_JOVEN_POETA: Resumen = {
  id: "cartas-joven-poeta",
  titulo: "Cartas a un joven poeta",
  autor: "Rainer Maria Rilke",
  ano: 1929,
  gancho: "Un cadete de diecinueve años pregunta si sus poemas son buenos. Rilke le contesta diez veces en cinco años y no comenta ni un solo verso.",
  porQue:
    "Es el libro más citado del mundo sobre vocación, y casi todo lo que se cita de él está cortado justo donde dejaba de ser cómodo.",
  partes: [
    {
      titulo: "El cadete que escribió primero",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Otoño de 1902. Un cadete de diecinueve años está sentado bajo los castaños del parque de la Academia Militar Teresiana de Wiener Neustadt, a cincuenta kilómetros de Viena, leyendo un libro que no toca. Se llama Franz Xaver Kappus. Debería estar estudiando reglamento.",
        },
        {
          forma: "texto",
          texto:
            "Se le acerca el capellán de la academia, el profesor Horaček, y le pregunta qué lee. Kappus le enseña la cubierta: poemas de un tal Rainer Maria Rilke. El cura se queda mirando ese nombre durante un rato largo antes de decir nada.",
        },
        {
          forma: "texto",
          texto:
            "Le cuenta que a ese chico lo tuvo él de alumno quince años antes, en la escuela militar de Sankt Pölten. Que era pálido, callado y muy dotado. Que su padre quería hacerlo oficial a toda costa. Que se marchó enfermo a los quince y no volvió nunca.",
        },
        {
          forma: "clave",
          rotulo: "Por qué le escribe",
          frase: "Rilke había llevado el mismo uniforme, en la misma clase de sitio, y había conseguido salir. Kappus no escribe a un poeta famoso: escribe a alguien que se escapó.",
        },
        {
          forma: "texto",
          texto:
            "Kappus iba para oficial porque su familia lo había decidido, y escribía versos a escondidas entre guardias. Esa tarde hizo lo que hace todo el mundo a esa edad: copió sus mejores poemas, escribió una carta y la mandó a París sin esperar respuesta.",
        },
        {
          forma: "texto",
          texto:
            "En la carta preguntaba lo único que le importaba: si sus poemas valían algo. Y colaba una segunda pregunta, más difícil de formular: si debía ser poeta o debía ser oficial, porque las dos cosas a la vez no parecían caber en una sola vida.",
        },
        {
          forma: "texto",
          texto:
            "La respuesta llegó de París el 17 de febrero de 1903. La firmaba un hombre de veintisiete años que no tenía dinero, ni casa propia, ni todavía la obra por la que hoy se le conoce. Rilke aún no había escrito casi nada de lo que se cita de él.",
        },
        {
          forma: "arte",
          texto:
            "Eso importa para leer el libro sin ingenuidad. No es un maestro consagrado bajando a aconsejar a un principiante. Son dos jóvenes, uno de diecinueve y otro de veintisiete, y el mayor está casi tan perdido como el otro; solo que ha decidido no disimularlo.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Rilke empieza pidiendo perdón por tardar. Dice que ha estado enfermo y de viaje, y que las cartas así no se contestan deprisa. En la primera línea ya ha dejado puesta la única regla del libro entero: aquí no se va con prisa a ninguna parte.",
        },
        {
          forma: "texto",
          texto:
            "Y entonces hace lo que nadie espera. No habla de los poemas. Los ha leído, dice que se los devuelve adjuntos, y despacha el juicio en dos frases corteses: no son todavía nada propio, se le nota buscándose, algo se anuncia tímidamente en los últimos.",
        },
        {
          forma: "texto",
          texto:
            "Eso es todo lo que dirá sobre los versos de Kappus en diez cartas y cinco años. Ni una corrección, ni un consejo técnico, ni una lectura línea a línea. El texto más citado del mundo sobre escribir no comenta jamás un texto concreto.",
        },
        {
          forma: "texto",
          texto:
            "Lo dice sin rodeos: usted pregunta si sus versos son buenos. Me lo pregunta a mí; antes se lo ha preguntado a otros. Los manda a las revistas. Los compara con otros poemas y se inquieta cuando alguna redacción se los devuelve.",
        },
        {
          forma: "texto",
          texto:
            "Y a continuación desmonta la pregunta entera con seis palabras: nadie puede aconsejarle ni ayudarle, nadie. Solo hay un camino, y consiste en entrar dentro de usted mismo. Ahí se acaba el asunto de la calidad de los poemas y empieza el libro de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Conviene saber desde dónde escribe. París, invierno, una habitación alquilada. Había llegado el año anterior para redactar un ensayo sobre Rodin y estaba pasando hambre y miedo en una ciudad que le parecía una máquina enorme de triturar gente.",
        },
        {
          forma: "texto",
          texto:
            "Escribiría después que en aquellos meses París le enseñó el miedo, los hospitales y las caras de la calle. Todo eso acabó en la novela que empezó allí, «Los cuadernos de Malte Laurids Brigge». Las cartas a Kappus salen del mismo cuarto y de la misma temporada mala.",
        },
        {
          forma: "texto",
          texto:
            "Así que cuando le dice al cadete que la soledad es el estado natural del que trabaja, no está recomendando algo cómodo desde un sillón. Está describiendo lo que tiene delante, lo que le da pánico y lo que ha decidido no esquivar.",
        },
        {
          forma: "arte",
          texto:
            "Hay una imagen que aparece pronto y que ordena las diez cartas: la obra crece como un árbol, no como un edificio. No se levanta por partes dentro de un plazo. Se hace por dentro, sin que se vea nada, y a la savia no se le puede meter prisa.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Kappus contesta. Y otra vez. Y así diez cartas entre 1903 y 1908, escritas desde París, desde Viareggio, desde Worpswede, desde Roma y desde dos casas de campo en Suecia. Rilke no para quieto en cinco años y no deja una sola sin contestar.",
        },
        {
          forma: "texto",
          texto:
            "Lo más raro del libro es que las cartas de Kappus no se conservan. Solo tenemos un lado de la conversación, y aun así se sigue perfectamente lo que preguntaba: por los poemas, por la carrera militar, por el sexo, por la duda, por una tristeza que no sabía explicar.",
        },
        {
          forma: "texto",
          texto:
            "Se adivina a un chaval de diecinueve años en un cuartel preguntándole a un desconocido si su vida va a servir para algo. Y a un hombre de veintisiete contestándole con muchísimo cuidado, porque se acuerda demasiado bien de ese uniforme.",
        },
      ],
    },

    {
      titulo: "Nadie puede aconsejarle",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La primera carta contiene la instrucción más famosa del libro y también la peor entendida. Rilke le pide a Kappus que se meta dentro de sí mismo y examine el fondo del que le brota la vida, porque en ese manantial está la respuesta a si debe escribir.",
        },
        {
          forma: "texto",
          texto:
            "Y le da la prueba concreta, que es lo que ha hecho durar la página un siglo: pregúntese en la hora más callada de su noche si tiene usted que escribir. Excave en busca de una respuesta profunda. Y si es que sí, construya su vida entera según esa necesidad.",
        },
        {
          forma: "clave",
          rotulo: "El cambio de pregunta",
          frase: "La pregunta no es «¿soy bueno?». Es «¿tengo que hacerlo?». Rilke sustituye el criterio de calidad por el de necesidad, y por eso el libro sirve para cualquier oficio.",
        },
        {
          forma: "texto",
          texto:
            "Lo importante es la mitad que casi nunca se cita. Rilke añade que si de ese examen sale que no tiene que escribir, entonces que lo deje sin dramatizar. La prueba sirve exactamente igual para decir que sí y para decir que no.",
        },
        {
          forma: "texto",
          texto:
            "Eso lo separa de la autoayuda. Un libro de autoayuda le habría dicho persigue tu sueño. Rilke le está diciendo averigüe si es su sueño de verdad, contando con la posibilidad real de que la respuesta sea que no y con que eso estaría bien.",
        },
        {
          forma: "texto",
          texto:
            "Después viene el aviso sobre los demás. Le pide que deje de mandar versos a las revistas y de compararse. Que no mire lo que hacen los otros ni lo que dicen de él, porque el juicio de fuera llega siempre antes de tiempo y le va a estropear el oído.",
        },
        {
          forma: "texto",
          texto:
            "Y le prohíbe algo que hoy sonaría a herejía: leer crítica literaria. Dice que son o comentarios de partido, endurecidos y sin sentido, o juegos de palabras hábiles. Que las obras de arte son de una soledad infinita y que con la crítica no se llega hasta ellas.",
        },
        {
          forma: "arte",
          texto:
            "Su alternativa es una frase que se queda pegada: solo el amor puede captarlas, sostenerlas y ser justo con ellas. No dice comprenderlas. Dice ser justo con ellas, que es una idea rarísima y bastante más exigente que la de entenderlas.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Luego le quita el tema. Kappus, como todos los que empiezan, escribía de amor. Rilke le contesta que evite los motivos demasiado corrientes, y que el amor es el más difícil de todos porque hay detrás tradiciones enormes y algunas brillantes ya resueltas.",
        },
        {
          forma: "texto",
          texto:
            "Y le indica dónde mirar en su lugar: si su vida diaria le parece pobre, no la culpe a ella; cúlpese usted, dígase que no es bastante poeta para invocar sus riquezas, porque para el que crea no hay pobreza ni lugar pobre e indiferente.",
        },
        {
          forma: "texto",
          texto:
            "En el mismo párrafo le entrega el material que tiene delante y no ve: aunque estuviera usted en una cárcel cuyas paredes no dejaran llegar a sus sentidos ninguno de los ruidos del mundo, ¿no le quedaría siempre su infancia entera?",
        },
        {
          forma: "texto",
          texto:
            "La infancia como mina. Es un consejo técnico disfrazado de consuelo, y funciona: casi todo lo que un principiante cree que no da para escribir —su casa, su pueblo, su aburrimiento, su cuartel— es exactamente lo único que tiene de propio.",
        },
        {
          forma: "texto",
          texto:
            "Kappus debió de contestar algo sobre su encierro, porque en la segunda carta, desde Viareggio, Rilke vuelve al asunto y lo endurece. Le habla de la ironía, que era el vicio del chico y sigue siendo el vicio de todos los jóvenes listos.",
        },
        {
          forma: "texto",
          texto:
            "Le dice que no se deje dominar por ella, sobre todo en los momentos sin creación. En los creativos, que intente usarla como un medio más de agarrar la vida. Usada limpiamente, es limpia. Y da la regla de aviso: si le resulta demasiado familiar, sospeche.",
        },
        {
          forma: "texto",
          texto:
            "El remedio que propone es de una sensatez brutal: busque la profundidad de las cosas, porque ahí abajo la ironía no baja nunca. Si por el camino descubre que es un recurso grande, úsela sin miedo; si no lo es, se le caerá sola de las manos.",
        },
        {
          forma: "texto",
          texto:
            "Y le manda leer solo dos libros: la Biblia y a Jens Peter Jacobsen, un novelista danés casi desconocido hoy. No le recomienda a los grandes ni a los de moda. Le recomienda al autor que a él le cambió la cabeza, y sin pretender que le valga a todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "También le habla del dinero, que es la parte que nunca se cita. Kappus tenía que elegir entre el ejército y algo incierto, y esperaba que el poeta le dijera que se lanzara. Rilke no le dice en ningún momento que abandone el uniforme.",
        },
        {
          forma: "texto",
          texto:
            "Le dice que una profesión cualquiera, aunque sea dura y hostil, no le impedirá vivir lo suyo, porque todas lo son; y que quizá un oficio duro le convenga más a un solitario que uno artístico, que tiene la trampa de parecer que ya es arte por sí mismo.",
        },
        {
          forma: "arte",
          texto:
            "Ese consejo desaparece de todas las ediciones de frases bonitas, y es de lo más honesto que hay aquí: no dejes tu trabajo. Lo escribe un hombre que en ese momento vivía de la generosidad de aristócratas y sabía perfectamente lo que costaba lo contrario.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Al final de esa carta hay una línea que ordena las ocho siguientes. Le pide que no se busque a sí mismo en ellas, que no las conteste con prisa y que no le agradezca nada. Y le pide una sola cosa a cambio, que es la palabra que más repite el libro: paciencia.",
        },
      ],
    },

    {
      titulo: "Vivir las preguntas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La cuarta carta está escrita el 16 de julio de 1903 desde Worpswede, una colonia de pintores en un páramo cerca de Bremen. Rilke había vivido allí, allí conoció a la escultora Clara Westhoff, con la que se casó, y había vuelto solo. Es la carta central del libro.",
        },
        {
          forma: "texto",
          texto:
            "Kappus le había escrito angustiado. Se deduce por la respuesta: dudas sobre su vocación, sobre su cuerpo y sobre por qué estaba triste sin motivo. Rilke, en lugar de resolverle nada, le explica con todo detalle por qué no piensa resolverle nada.",
        },
        {
          forma: "texto",
          texto:
            "Y llega el pasaje más citado del siglo, casi siempre cortado por la mitad. Le pide que tenga paciencia con todo lo que está sin resolver en su corazón, y que intente amar las preguntas mismas, como si fueran habitaciones cerradas con llave.",
        },
        {
          forma: "texto",
          texto:
            "Sigue: como libros escritos en un idioma extranjero. Que no busque ahora las respuestas, porque no se las podrían dar, ya que no sería capaz de vivirlas. Y de eso se trata en el fondo, dice: de vivirlo todo, incluida la parte que no se entiende.",
        },
        {
          forma: "clave",
          rotulo: "La frase entera",
          frase: "«Viva ahora las preguntas. Quizá entonces, poco a poco, sin darse cuenta, viva usted algún día lejano la respuesta.» La respuesta no se piensa: se llega a ella viviendo.",
        },
        {
          forma: "texto",
          texto:
            "Hoy se usa como consuelo, y es lo contrario de un consuelo. Rilke no le está diciendo tranquilo, ya llegará. Le está diciendo que no va a llegar por pensarlo, que le van a hacer falta años de vida y que quizá se le pase la juventud entera dentro de la pregunta.",
        },
        {
          forma: "texto",
          texto:
            "En la misma carta hay una idea que sostiene a la anterior y que casi nadie recuerda: que no hay que angustiarse por los estados de tristeza, porque los momentos tristes son precisamente aquellos en los que algo nuevo ha entrado en nosotros.",
        },
        {
          forma: "texto",
          texto:
            "Lo desarrolla con una imagen doméstica y exacta. Cuando estamos tristes, algo desconocido ha entrado en la casa; nuestros sentidos se callan, todo retrocede unos pasos, y en medio del silencio está eso nuevo que todavía no ha dicho su nombre.",
        },
        {
          forma: "arte",
          texto:
            "Y de ahí saca lo que le interesa: cuanto más callados, pacientes y abiertos estemos en la tristeza, más hondo entra lo nuevo y más nuestro se hace. Es una teoría del duelo escrita a los veintisiete años por un hombre que aún no había perdido casi nada.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "En esa carta está también la parte incómoda, la que las ediciones de regalo adelgazan: Rilke le habla de sexo a un cadete de veinte años, en 1903, con una franqueza que en aquel momento no era en absoluto habitual.",
        },
        {
          forma: "texto",
          texto:
            "Le dice que el placer físico es una experiencia sensorial como mirar o como el sabor de una fruta buena, una experiencia grande y sin límites que se nos ha dado; y que el problema nunca es tenerla, sino el uso torpe que se le da.",
        },
        {
          forma: "texto",
          texto:
            "Y le señala dónde está el error de casi todos: la mayoría abusa y malgasta esa experiencia, y la usa como excitación en los puntos cansados de su vida, en vez de como una concentración hacia arriba. Lo dice sin moralina y sin una sola advertencia religiosa.",
        },
        {
          forma: "texto",
          texto:
            "Después le hace un pronóstico raro: que quizá los sexos estén más emparentados de lo que se cree, y que la gran renovación del mundo consistirá en que el hombre y la mujer, liberados de los papeles falsos, se busquen como seres humanos y no como contrarios.",
        },
        {
          forma: "texto",
          texto:
            "Escrito en 1903, eso no era un lugar común. Rilke estaba casado con una escultora que trabajaba, había vivido con Lou Andreas-Salomé, catorce años mayor y más inteligente que casi todos los hombres que trató, y no estaba hablando de oídas.",
        },
        {
          forma: "texto",
          texto:
            "También le manda un aviso sobre la prisa: los jóvenes se equivocan al amar deprisa, porque se lanzan el uno sobre el otro cuando todavía no se sostienen solos, y de esa mezcla no sale una unión sino un desorden compartido y un cansancio doble.",
        },
        {
          forma: "texto",
          texto:
            "La quinta carta la escribe desde Roma, el 29 de octubre. Confiesa que la ciudad le agobió al llegar: museos, mármoles, la sensación de vivir dentro de un pasado inmenso que no es suyo. Tardó semanas en encontrar un sitio donde ponerse a trabajar.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle sirve para leer todo lo demás: el hombre que recomienda paciencia está contando a la vez que él no la tiene, que se muda cada pocos meses y que las ciudades le desordenan el trabajo. Estas cartas no están escritas desde arriba.",
        },
        {
          forma: "texto",
          texto:
            "En la sexta, ya en diciembre y ya con un cuarto donde puede trabajar, le habla de la Navidad y de por qué las fiestas son duras para los que están solos. Le pide que no espere consuelo de las personas y que lo busque donde de verdad lo tiene, que es en su trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Y suelta la frase que resume el libro entero: lo necesario es solo esto, la soledad, la gran soledad interior. Ir hacia dentro y no encontrarse con nadie durante horas. Eso es lo que hay que conseguir, y no se consigue de golpe.",
        },
        {
          forma: "arte",
          texto:
            "Es una idea difícil de vender hoy, y por eso conviene decirla entera. Rilke no está recomendando aislarse por gusto ni desaparecer del mundo. Está diciendo que hay un trabajo que solo se hace cuando no hay nadie mirando, y que aprender a estar así es un oficio.",
          arte: "noche",
        },
      ],
    },

    {
      titulo: "Dos soledades",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La séptima carta es de Roma, 14 de mayo de 1904, y es la más larga del libro. Empieza pidiendo disculpas por el silencio de meses y acaba siendo el mejor texto sobre el amor que escribió Rilke, que escribió muchos y casi todos buenos.",
        },
        {
          forma: "texto",
          texto:
            "Kappus se había enamorado. La carta responde a eso, y lo primero que hace es quitarle la prisa. Amar es difícil, repite. Para un ser humano, amar a otro es quizá la tarea más difícil que se le ha encomendado, el trabajo para el que todos los demás son preparación.",
        },
        {
          forma: "clave",
          rotulo: "El orden",
          frase: "«El amor es una ocasión sublime para que el individuo madure, para que llegue a ser algo por sí mismo, para que se convierta en un mundo.» Primero se es alguien. Después se ama.",
        },
        {
          forma: "texto",
          texto:
            "Por eso los jóvenes se equivocan casi siempre, dice: se entregan porque no soportan estar solos, se mezclan y a eso lo llaman amor. Se prestan el uno al otro sus soledades como quien se presta un abrigo, y luego se extrañan de seguir teniendo frío.",
        },
        {
          forma: "arte",
          texto:
            "Y llega la definición que se sigue leyendo en bodas ciento veinte años después: el amor consiste en esto, en que dos soledades se protejan, se limiten y se saluden. Las tres cosas, y en ese orden exacto. Protegerse, ponerse límite, saludarse.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "La palabra que casi nadie oye ahí es la segunda. Limitarse. Rilke está diciendo que en el amor bueno cada uno le pone frontera al otro, y que esa frontera no es un fallo del amor: es la prueba de que hay dos personas y no una masa.",
        },
        {
          forma: "texto",
          texto:
            "En la misma carta habla de las mujeres con una idea que en 1904 no era corriente. Dice que la mujer está pasando por un cambio enorme, que dejará de definirse por contraste con el hombre, y que entonces el amor tendrá que reinventarse entero.",
        },
        {
          forma: "texto",
          texto:
            "Y añade que ese cambio será duro para los hombres, porque estarán sorprendidos y derrotados, acostumbrados como están a que el papel del otro venga escrito de antemano. Lo escribe un hombre que en ese momento no vivía ni con su mujer ni con su hija.",
        },
        {
          forma: "texto",
          texto:
            "Ahí está la contradicción central del libro y no hay que taparla. Rilke se casó con Clara Westhoff en 1901, tuvieron una hija, Ruth, y menos de un año después él estaba solo en París escribiendo sobre la soledad necesaria del que crea.",
        },
        {
          forma: "texto",
          texto:
            "No la abandonó del todo: siguieron escribiéndose y viéndose, y él sostenía que el buen matrimonio era el que guardaba la soledad de cada uno. Pero quien pagó ese arreglo fue sobre todo ella, que dejó de esculpir durante años. Conviene saberlo al leer lo de las dos soledades.",
        },
        {
          forma: "texto",
          texto:
            "La octava carta la escribe en agosto, ya desde Suecia, en una casa de campo llamada Borgeby gård. Kappus le ha escrito hundido, sin decir exactamente por qué. Rilke le contesta con la imagen más útil de todo el libro.",
        },
        {
          forma: "texto",
          texto:
            "Le dice que no se asuste si delante de él se levanta una tristeza más grande que ninguna de las vistas hasta ahora; que recuerde que la vida no lo ha olvidado, que lo tiene en la mano y que no lo dejará caer.",
        },
        {
          forma: "texto",
          texto:
            "Y luego la vuelta de tuerca: quizá todos los dragones de nuestra vida sean princesas que solo esperan vernos una vez hermosos y valientes. Quizá todo lo espantoso sea, en su fondo más profundo, algo indefenso que está pidiendo que lo ayudemos.",
        },
        {
          forma: "texto",
          texto:
            "La frase circula por ahí como decoración de taza, y en su sitio es un método concreto: cuando algo le dé miedo, mírelo el tiempo suficiente para averiguar si le está atacando o le está pidiendo algo. Casi nunca es lo primero.",
        },
        {
          forma: "texto",
          texto:
            "En la novena, de noviembre y también sueca, aparece un consejo casi práctico sobre la duda, que Kappus debía de tener a diario en el cuartel. Rilke no le dice que la eche de casa. Le dice que la eduque y le dé un empleo.",
        },
        {
          forma: "texto",
          texto:
            "Que su duda puede llegar a ser una buena cualidad si la disciplina. Que cada vez que quiera estropearle algo, le exija pruebas, le pregunte por qué eso es feo, le pida razones. Y que el día que se quede sin argumentos, se le habrá convertido en su mejor colaboradora.",
        },
        {
          forma: "arte",
          texto:
            "Es exactamente lo que hoy llamaríamos convertir la crítica interna en instrumento en vez de en juez. Rilke lo formula en 1904 con una imagen doméstica: dele a la duda un trabajo concreto y dejará de rondar por la casa sin hacer nada y molestando.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Entre medias hay un consejo que muchos lectores agradecen más que ningún otro: no se compare. Le pide que no mida su vida por la de los demás ni por los plazos que le ponen, porque las cosas no son ni tan comprensibles ni tan expresables como se nos quiere hacer creer.",
        },
        {
          forma: "texto",
          texto:
            "La última carta es de diciembre de 1908, cuatro años después de la anterior. Rilke ya ha publicado los «Nuevos poemas» y ya no es un desconocido. Es breve, cálida y no contiene un solo consejo nuevo.",
        },
        {
          forma: "texto",
          texto:
            "Le dice que se alegra de que su vida tenga ahora una profesión firme y clara, y que precisamente las vidas que parecen más duras por fuera son las que mejor protegen por dentro lo solitario. Y ahí, sin ninguna ceremonia, se acaba la correspondencia.",
        },
      ],
    },

    {
      titulo: "El libro que hizo el otro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La historia tendría que acabar ahí, y lo interesante es lo que pasó después. Kappus siguió en el ejército. Fue oficial en la Primera Guerra Mundial. Luego trabajó de periodista y escribió novelas de aventuras y guiones de cine. Poeta no llegó a ser.",
        },
        {
          forma: "texto",
          texto:
            "Rilke, en cambio, sí llegó a ser lo que había descrito. Escribió las «Elegías de Duino» y los «Sonetos a Orfeo» en unas pocas semanas de febrero de 1922, después de diez años atascado, en un torreón suizo llamado Muzot que le habían prestado.",
        },
        {
          forma: "texto",
          texto:
            "Diez años de bloqueo. Eso también hay que decirlo al leer las cartas: el hombre que escribía sobre la savia y la paciencia estuvo una década sin poder terminar su obra, y la terminó de golpe, en unos días, en una casa que no era suya.",
        },
        {
          forma: "texto",
          texto:
            "Murió el 29 de diciembre de 1926 en un sanatorio de Val-Mont, en Suiza. Tenía cincuenta y un años. La causa fue una leucemia que le habían diagnosticado muy tarde y de la que apenas habló con nadie.",
        },
        {
          forma: "arte",
          texto:
            "La leyenda dice que lo mató la espina de una rosa. Se pinchó, es cierto, cortando rosas para una visita, y la herida no cerró. Pero lo que lo mató fue la leucemia; la infección solo fue el último episodio de una enfermedad que ya lo tenía cogido.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Tres años después de su muerte, en 1929, Kappus reunió las diez cartas que había guardado durante veintiséis años y las publicó con un prólogo suyo. Las tituló «Cartas a un joven poeta». No han dejado de editarse desde entonces en ningún idioma.",
        },
        {
          forma: "clave",
          rotulo: "La obra de Kappus",
          frase: "El joven poeta no llegó a poeta. Su única obra maestra es un libro que no escribió: guardó, escogió y publicó las cartas de otro. Y es, con diferencia, lo mejor que hizo.",
        },
        {
          forma: "texto",
          texto:
            "En el prólogo dice algo que da la medida del hombre. Explica que sus propias cartas no importan y que publica solo las de Rilke porque, donde un grande y único habla, los pequeños debemos callar. Y se borra del libro a propósito.",
        },
        {
          forma: "texto",
          texto:
            "Por eso solo tenemos un lado. Nunca sabremos qué preguntó exactamente, ni cómo eran los poemas que mandó, ni qué sintió al leer que no eran todavía nada propio. Ese silencio es la mitad de la fuerza del libro.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está el hallazgo de forma. Un manual de escritura envejece en veinte años. Diez cartas a un desconocido no envejecen, porque el que lee ocupa sin esfuerzo el hueco del destinatario. Es el mismo mecanismo que mantiene vivas las «Meditaciones» de Marco Aurelio.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla, que en este libro conviene decirlo alto. El consejo de Rilke da por supuesto un tipo de vida que casi nadie puede pagarse: horas de silencio, viajes largos, temporadas en casas prestadas y ninguna obligación urgente por la mañana.",
        },
        {
          forma: "texto",
          texto:
            "Él vivió casi siempre de mecenas. La princesa Marie von Thurn und Taxis le prestó el castillo de Duino; otros le prestaron Muzot y las casas de Suecia. No tuvo un empleo estable en su vida adulta. La soledad que recomienda tuvo un precio, y lo pagaron otros.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una incoherencia mayor. Predica una atención absoluta a lo difícil y al mismo tiempo se fue de su matrimonio y dejó a su hija criándose con la familia de su mujer. Se puede admirar el texto sin confundirlo con una biografía ejemplar.",
        },
        {
          forma: "texto",
          texto:
            "También hay una parte que hoy chirría. Su idea de que el artista debe apartarse del mundo, no leer crítica y no meterse en discusiones públicas le ha servido de coartada a mucha gente para no leer nunca nada que la contradiga.",
        },
        {
          forma: "texto",
          texto:
            "Y una cosa práctica: no hay una sola indicación técnica en todo el libro. Nada sobre métrica, sobre corrección, sobre cómo se rehace un poema malo. Quien busque aprender a escribir tiene que ir a otro sitio; aquí solo le van a explicar por qué escribiría.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad: no es un libro sobre cómo escribir, aunque se venda en esa estantería. Rilke se negó desde la primera línea a hacer de maestro. La palabra que más repite en cinco años no es poesía: es paciencia.",
        },
        {
          forma: "texto",
          texto:
            "Segundo error corriente: internet está lleno de citas atribuidas a este libro que Rilke no escribió, o que están cortadas justo donde dejaban de ser cómodas. La más maltratada es la de vivir las preguntas, que casi siempre pierde su segunda mitad.",
        },
        {
          forma: "arte",
          texto:
            "Y el tercero: mucha gente lo lee como un libro suave. No lo es. Le dice a un chico de diecinueve años que nadie puede ayudarle, que la soledad no se cura, que el amor es la tarea más difícil que existe y que a lo mejor no debería escribir nunca.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda, después de descontar todo eso, es una cosa rara y muy resistente: un hombre joven contestando en serio a otro más joven, sin venderle nada, durante cinco años, sobre un asunto que no tenía ninguna obligación de atender.",
        },
        {
          forma: "texto",
          texto:
            "Y esa es la parte que sirve de verdad. Kappus escribió a un desconocido preguntando si valía. La respuesta fue que esa pregunta no se contesta desde fuera. Cambió de pregunta, no llegó a poeta, y por el camino le sacó a otro las diez cartas que hoy leemos.",
        },
      ],
    },
  ],
};

export const HISTORIA_ARTE: Resumen = {
  id: "historia-arte",
  titulo: "La historia del arte",
  autor: "E. H. Gombrich",
  ano: 1950,
  gancho: "Empieza diciendo que el Arte no existe. Ocho millones de ejemplares después, sigue siendo la mejor primera frase de un libro de arte.",
  porQue:
    "Es el libro de arte más vendido de la historia y no es un catálogo: es una sola idea sostenida durante veintisiete capítulos.",
  partes: [
    {
      titulo: "No existe el Arte",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Londres, 1949. Un historiador vienés de cuarenta años recibe el encargo de escribir un libro de arte para adolescentes. El editor, Béla Horovitz, de Phaidon, le pide algo que un chaval de trece años pueda leer entero. Él acepta y lo escribe en unos meses.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaba Ernst Gombrich, había nacido en Viena en 1909 y había salido de Austria en 1936 con un contrato en el Instituto Warburg de Londres. Se fue a tiempo. Su familia era judía y en Viena, tres años después, ya no había sitio para ellos.",
        },
        {
          forma: "texto",
          texto:
            "Durante la guerra no trabajó en historia del arte: trabajó para la BBC escuchando la radio alemana, seis años sentado con unos auriculares transcribiendo emisiones enemigas. Era un trabajo de oficina, aburridísimo y crucial, en un sótano lleno de exiliados que hablaban alemán.",
        },
        {
          forma: "clave",
          rotulo: "El día que lo oyó",
          frase: "En abril de 1945 Gombrich estaba de guardia cuando la radio alemana interrumpió la programación y puso el adagio de la Séptima de Bruckner. Supo antes que nadie lo que venía después: Hitler había muerto.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el hombre que cuatro años después se sienta a explicar el arte occidental desde las cuevas hasta el presente. No es un profesor de sillón: es alguien que ha visto desaparecer su ciudad y que ha aprendido a escuchar con muchísima atención lo que dice la gente.",
        },
        {
          forma: "texto",
          texto:
            "El libro empieza con la frase que todo el mundo cita y casi nadie termina: no existe realmente el Arte. Tan solo hay artistas. Es la primera línea, va en la introducción y no es una provocación de escaparate: es literalmente la tesis del libro entero.",
        },
        {
          forma: "texto",
          texto:
            "Lo explica en seguida. El Arte con mayúscula, dice, es un fantasma que se ha convertido en un espantajo: sirve para que la gente se sienta ignorante delante de un cuadro y deje de mirarlo. Quitando la mayúscula queda lo que hay de verdad: hombres y mujeres resolviendo problemas concretos.",
        },
        {
          forma: "arte",
          texto:
            "Y da el ejemplo doméstico que lo aterriza: no hay nada malo en que a alguien le guste un cuadro porque le recuerda a algo suyo. El error empieza cuando esa preferencia se convierte en prejuicio y le impide mirar lo demás. Su enemigo no es el ignorante: es el que ya ha decidido.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El libro tiene veintisiete capítulos y va en línea recta desde las pinturas de las cuevas hasta mediados del siglo XX. Está escrito sin una sola nota al pie y sin una sola palabra técnica que no se explique en el sitio donde aparece por primera vez.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich puso una regla que ningún manual cumple: no hablar de ninguna obra que no estuviera reproducida en la página. Si no cabía la imagen, no entraba el texto. Prefirió dejar fuera a artistas importantes antes que soltar nombres que el lector no pudiera comprobar con los ojos.",
        },
        {
          forma: "texto",
          texto:
            "Eso cambia la lectura por completo. Un manual normal enumera. Este señala: mire esta mano, mire este pliegue, fíjese en que el pie está visto de frente. El lector no está aprendiendo una lista, está aprendiendo a mirar, que es un músculo distinto.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una segunda regla, la que le da su motor: cada obra se explica como respuesta a un problema que dejó abierto la anterior. No hay genios que caen del cielo. Hay talleres, encargos y una conversación de tres mil años en la que cada uno contesta al de antes.",
        },
        {
          forma: "clave",
          rotulo: "El método",
          frase: "La historia del arte no es un desfile de genios: es una cadena de problemas. Cada generación hereda una dificultad sin resolver y se pasa la vida buscándole la vuelta.",
        },
        {
          forma: "texto",
          texto:
            "Esa idea suena abstracta hasta que se ve funcionando. Un escultor griego no despierta un día con más talento que un egipcio. Hereda una manera de hacer piernas que no acaba de convencer a nadie y prueba otra. La siguiente generación hereda su solución y le encuentra el fallo.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich desarrollaría eso diez años después en un libro más difícil, «Arte e ilusión», con una fórmula que se ha quedado: esquema y corrección. El artista no dibuja lo que ve. Parte de un esquema aprendido y lo va corrigiendo contra lo que ve. Nadie empieza de cero.",
        },
        {
          forma: "arte",
          texto:
            "El ejemplo que usa es de manual: los grabados antiguos de rinocerontes copian todos al de Durero, incluidas las escamas que el animal no tiene. Durante siglos, los que dibujaban un rinoceronte estaban dibujando el rinoceronte de Durero corregido un poco.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Con esa herramienta el libro deja de ser una lista de estilos. Gótico, Renacimiento, Barroco dejan de ser etiquetas de examen y pasan a ser lo que fueron: soluciones distintas a la pregunta de cómo se pone el mundo en una superficie plana sin que parezca mentira.",
        },
        {
          forma: "texto",
          texto:
            "El tono es la otra mitad del éxito. Gombrich escribe como quien acompaña a alguien por un museo hablando bajito. Nunca dice esta obra es sublime. Dice fíjese en lo difícil que era esto y en lo bien que lo resolvió, y el lector siente que lo está viendo por su cuenta.",
        },
        {
          forma: "texto",
          texto:
            "Y no esconde sus gustos. Cuando algo no le convence lo dice, y cuando una época le interesa poco se le nota. Un manual neutro no existe, y él prefiere que se le vea la mano a fingir una objetividad que no tiene.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 1950, se tituló en inglés «La historia del arte» con artículo determinado, y a Gombrich siempre le pareció un título demasiado grande. Decía que se lo puso el editor. Él lo habría llamado, como mucho, una historia del arte contada a un chico listo.",
        },
      ],
    },

    {
      titulo: "Lo que se sabe y lo que se ve",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El primer gran hallazgo del libro está en Egipto, y Gombrich lo explica con una pregunta que descoloca: ¿por qué las figuras egipcias están tan raras? Cabeza de perfil, ojo de frente, hombros de frente, piernas de perfil. Todas iguales durante tres mil años.",
        },
        {
          forma: "texto",
          texto:
            "La respuesta fácil es que no sabían dibujar. La de Gombrich es la contraria: sabían perfectamente, y estaban haciendo otra cosa. No pintaban lo que veían. Pintaban lo que sabían, y de cada parte del cuerpo elegían la vista que más información daba.",
        },
        {
          forma: "texto",
          texto:
            "Un ojo se reconoce mejor de frente. Unos hombros, de frente. Una nariz y unos pies, de perfil. El resultado es un cuerpo imposible y clarísimo: una especie de ficha técnica de un ser humano, montada con las mejores vistas de cada pieza.",
        },
        {
          forma: "clave",
          rotulo: "La regla egipcia",
          frase: "El arte egipcio no busca parecerse a lo que se ve desde un sitio. Busca ser completo. Nada puede quedar tapado, porque lo tapado, para el más allá, no existe.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está lo que lo explica todo: aquellas figuras no eran cuadros para mirar. Estaban en tumbas cerradas que nadie iba a visitar. Servían para acompañar al muerto, y un muerto con medio pie pintado tendría medio pie. La utilidad manda sobre la apariencia.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich añade el dato que remata el argumento: hubo una excepción. Bajo el faraón Akenatón, hacia 1350 antes de Cristo, el estilo se soltó de golpe. Aparecen posturas relajadas, cuerpos raros, el rey besando a su hija. Duró lo que duró él y luego se volvió a la norma.",
        },
        {
          forma: "arte",
          texto:
            "Eso demuestra que no era incapacidad. Era una decisión colectiva sostenida durante milenios, que un solo hombre pudo cambiar y que se restauró en cuanto murió. La historia del arte, dice Gombrich, está llena de estas cosas y casi ninguna es cuestión de talento.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Con esa base montada, el libro llega al momento que él considera el más importante de todos, y lo cuenta con una precisión de detective. Ocurre en Grecia, hacia el año 500 antes de Cristo, y se puede ver en un solo objeto.",
        },
        {
          forma: "texto",
          texto:
            "Un pintor de vasijas está dibujando a un guerrero de perfil, como se ha hecho siempre. Y en vez de poner el pie hacia un lado, lo pinta de frente: dos dedos y un óvalo. Un pie escorzado. Es un dibujo torpe y es la primera vez que alguien pinta lo que ve en vez de lo que sabe.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich se detiene ahí más que en cualquier catedral. Ese pie mal dibujado es, para él, la puerta por la que entra el arte occidental entero: la decisión de renunciar a la información completa a cambio de un punto de vista concreto, el de alguien que está mirando desde un sitio.",
        },
        {
          forma: "clave",
          rotulo: "El escorzo",
          frase: "Pintar un pie de frente significa aceptar que se pierde información a cambio de verdad. Ese cambio de trato es el que separa a Egipto de Grecia y a Grecia de casi todo lo demás.",
        },
        {
          forma: "texto",
          texto:
            "A partir de ahí los griegos se lanzan. En un siglo pasan de figuras rígidas y sonrientes a cuerpos que apoyan el peso en una pierna y descansan la otra. Ese gesto mínimo, el contraposto, hace que una piedra parezca que respira, y se inventó por prueba y error en un par de generaciones.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich pone dos estatuas juntas para que se vea, y funciona: un kurós arcaico y un joven clásico. La misma postura, cincuenta años de diferencia, y el segundo parece que va a echar a andar. No hay nada místico en el medio; hay talleres corrigiendo a otros talleres.",
        },
        {
          forma: "texto",
          texto:
            "Después llega Roma, que él trata sin desprecio y sin entusiasmo: copiaron muchísimo, inventaron el retrato realista y construyeron edificios que aún están de pie. El Panteón, dice, es una idea que ningún griego había tenido: no una fachada, sino un espacio por dentro.",
        },
        {
          forma: "texto",
          texto:
            "Y entonces viene el capítulo que más sorprende a los lectores, porque va hacia atrás. Con el cristianismo, el arte occidental deja de buscar el parecido y vuelve a lo egipcio: figuras planas, frontales, sin sombra, sin profundidad. Durante mil años.",
        },
        {
          forma: "texto",
          texto:
            "La explicación de Gombrich es la misma de siempre, aplicada al revés: cambia el trabajo, cambia la solución. Un mosaico bizantino no está para que parezca una persona. Está para que un analfabeto entienda quién es y qué hizo, en una iglesia oscura, desde treinta metros.",
        },
        {
          forma: "arte",
          texto:
            "Eso desactiva de un plumazo la idea de decadencia, que es lo que enseñaban los manuales anteriores. La Edad Media no perdió la técnica: dejó de necesitarla y desarrolló otra. Cuando el encargo cambió, la habilidad volvió en dos generaciones.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El libro dedica capítulos largos y muy buenos a las catedrales, y ahí Gombrich hace algo poco frecuente: explica la arquitectura como ingeniería. El arco apuntado y el arbotante no son estilo. Son la solución a un problema de peso, y la altura de las naves es su consecuencia.",
        },
        {
          forma: "texto",
          texto:
            "Y hace notar quién las hizo: gremios, canteros, talleres familiares, cientos de personas cuyos nombres no se conservan. El anonimato medieval no es un misterio romántico. Es que aquello se parecía más a una obra pública que a un acto de expresión personal.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale, en el capítulo siguiente, el hombre que rompe la cadena. Un pintor florentino que hacia 1300 empieza a poner sombras en las caras y a colocar a la gente en un espacio con suelo. Se llamaba Giotto, y con él empieza la parte que todo el mundo cree conocer.",
        },
      ],
    },

    {
      titulo: "El problema que deja el anterior",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Giotto pinta en Padua, hacia 1305, una capilla entera. En una escena, dos figuras se abrazan y se miran; en otra, un personaje está de espaldas al espectador, tapando parte de la acción. Eso último no se había hecho en mil años y es una revolución silenciosa.",
        },
        {
          forma: "texto",
          texto:
            "Poner a alguien de espaldas significa aceptar que el cuadro es una ventana y no un cartel. Si es una ventana, hay cosas que no se ven porque hay alguien delante. Gombrich vuelve a su idea: Giotto no es más listo, es que ha cambiado el trato con el que mira.",
        },
        {
          forma: "texto",
          texto:
            "El problema que deja abierto es evidente en cuanto se enuncia: si esto es una ventana, ¿cómo se dibuja la profundidad para que sea exacta y no aproximada? Ese problema tarda cien años en resolverse y lo resuelve un arquitecto, no un pintor.",
        },
        {
          forma: "clave",
          rotulo: "1420, Florencia",
          frase: "Brunelleschi demuestra la perspectiva con un experimento: una tabla pintada del baptisterio, un agujero, un espejo. Quien mira por el agujero no distingue el cuadro del edificio real.",
        },
        {
          forma: "texto",
          texto:
            "Es el momento en que el arte occidental se vuelve, durante quinientos años, un asunto de geometría. Un punto de fuga, unas líneas que convergen y una regla que cualquiera puede aprender. Gombrich subraya que fue un descubrimiento técnico, con fecha, autor y demostración pública.",
        },
        {
          forma: "texto",
          texto:
            "El primero que lo usa en serio en pintura es Masaccio, en una capilla de Florencia, y el efecto sobre sus contemporáneos fue de asombro físico: la pared parecía que se hundía. Murió a los veintiséis años y dejó a toda una generación con la herramienta en la mano.",
        },
        {
          forma: "texto",
          texto:
            "Al mismo tiempo, al norte, otros están resolviendo un problema distinto sin enterarse de la perspectiva. En Flandes, Jan van Eyck perfecciona la pintura al óleo y consigue algo que ningún italiano tenía: el brillo de un collar, el pelo de un perro, la luz en un espejo convexo.",
        },
        {
          forma: "arte",
          texto:
            "Gombrich pone los dos caminos uno al lado del otro y no los jerarquiza. Italia resuelve el espacio con matemáticas; Flandes resuelve la superficie con paciencia y con una técnica nueva. Son dos respuestas a preguntas distintas, y durante un siglo ninguna de las dos sabe de la otra.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El siglo XVI es donde el lector espera fuegos artificiales y Gombrich baja el tono a propósito. A Leonardo, Miguel Ángel y Rafael los trata como a artesanos con problemas técnicos muy concretos, no como a semidioses, y el efecto es que se entienden mejor.",
        },
        {
          forma: "texto",
          texto:
            "De Leonardo destaca una cosa por encima de todo: el sfumato. Y lo explica con una utilidad rara. Dejar los contornos difuminados no es un truco de belleza; es dejarle al ojo del que mira una parte del trabajo. Por eso la Gioconda parece cambiar de expresión: la termina el espectador.",
        },
        {
          forma: "texto",
          texto:
            "De Miguel Ángel cuenta la Capilla Sixtina como lo que fue: un encargo que no quería, cuatro años de andamio, un hombre que se consideraba escultor pintando de espaldas y quejándose por carta del cuello. La grandeza sale de ahí, no de la inspiración.",
        },
        {
          forma: "texto",
          texto:
            "Y llega el problema siguiente, que es el más divertido del libro: cuando ya está todo resuelto, ¿qué hace la generación de después? La respuesta fue romperlo a propósito. Cuellos largos, colores imposibles, composiciones descentradas. Se llamó manierismo y fue el primer arte que juega contra la regla.",
        },
        {
          forma: "texto",
          texto:
            "El Barroco lo cuenta como teatro, con Caravaggio de protagonista. Un foco duro, un fondo negro, unos pies sucios en primer plano. Sus clientes se escandalizaban de que los santos parecieran gente del barrio, y de eso exactamente iba el asunto.",
        },
        {
          forma: "clave",
          rotulo: "Velázquez",
          frase: "Gombrich, que era vienés, dedica a «Las meninas» una de sus mejores páginas: un cuadro sobre el acto de pintar, con el pintor dentro, el rey fuera y el espectador ocupando el sitio del rey.",
        },
        {
          forma: "texto",
          texto:
            "Y hace notar el detalle técnico que lo hace moderno: de cerca son manchas. Las mangas, los reflejos, el pelo de la infanta son toques sueltos que no describen nada. Solo a tres metros se convierten en tela y en luz. Doscientos años antes de los impresionistas.",
        },
        {
          forma: "texto",
          texto:
            "El libro sigue con Rembrandt, y ahí Gombrich hace algo que no hace con nadie más: lo sigue envejeciendo. Pone sus autorretratos en orden, del joven presumido con sombrero al viejo hinchado y arruinado, y deja que la secuencia hable sola.",
        },
        {
          forma: "arte",
          texto:
            "Rembrandt se declaró en bancarrota en 1656 y le subastaron la casa y la colección. Pintó los mejores cuadros de su vida después de eso, cuando ya casi nadie le encargaba nada. Gombrich lo cuenta sin épica y el efecto es demoledor.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "El siglo XVIII lo despacha con cierta frialdad —le interesan más los ingleses que los franceses— y entra en el XIX con un cambio que le parece más importante que cualquier estilo: los artistas dejan de trabajar por encargo y empiezan a pintar sin saber quién lo comprará.",
        },
        {
          forma: "texto",
          texto:
            "Eso lo cambia todo, y es el hilo del capítulo siguiente. Cuando desaparece el cliente que dice qué quiere, aparece por primera vez la figura del artista incomprendido, y también la del cuadro que nadie ha pedido y que puede no gustar a nadie.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich no lo celebra ni lo lamenta. Lo trata como lo que es en su método: un problema nuevo. Durante cinco mil años el arte había tenido un encargo detrás. A partir de 1850, muchas veces no. Todo lo que viene después es la respuesta a esa situación.",
        },
      ],
    },

    {
      titulo: "Quién pagaba",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "París, 1863. El jurado del Salón oficial rechaza más de dos mil cuadros. Hay tanto escándalo que Napoleón III ordena montar una exposición aparte con los rechazados. La llaman el Salón de los Rechazados y va muchísima gente, sobre todo a reírse.",
        },
        {
          forma: "texto",
          texto:
            "El cuadro del que más se ríen es «El almuerzo sobre la hierba», de Manet: una mujer desnuda comiendo en el campo con dos señores vestidos de calle. La gente no se escandaliza por el desnudo, que estaba en todos los museos, sino porque los hombres van vestidos de 1863.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich saca de ahí una lección que vale para todo el arte moderno: lo que ofende casi nunca es el tema, es el contexto. Una Venus desnuda era aceptable; una vecina desnuda al lado de dos hombres con chaqueta convertía al espectador en testigo de algo, y eso no se perdonaba.",
        },
        {
          forma: "clave",
          rotulo: "El cambio de siglo",
          frase: "Hasta 1800 casi todo el arte se hacía por encargo: se sabía quién pagaba, para qué sitio y con qué tamaño. Después de 1850, muchos cuadros se pintan sin comprador y sin destino.",
        },
        {
          forma: "texto",
          texto:
            "El libro se toma en serio esa parte económica, que la mayoría de manuales se salta. Explica los gremios medievales, el sistema de aprendizaje, los contratos donde se fijaba cuántos gramos de oro y de azul de lapislázuli llevaba un retablo, porque el azul costaba más que el pintor.",
        },
        {
          forma: "texto",
          texto:
            "Y explica cómo esa relación fue cambiando de manos: primero la Iglesia, luego los príncipes, luego los banqueros, luego los ayuntamientos holandeses, luego los burgueses que compraban paisajes para el salón, y por fin el marchante, que compra para revender.",
        },
        {
          forma: "arte",
          texto:
            "Ese recorrido explica más que cualquier lista de estilos. Los cuadros holandeses del XVII son pequeños porque se colgaban en casas pequeñas. Los retablos son enormes porque estaban a veinte metros. El formato lo decide el sitio, y el sitio lo decide quién paga.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Con los impresionistas, Gombrich vuelve a su método: no los presenta como rebeldes, sino como gente resolviendo un problema técnico. Si se quiere pintar al aire libre y deprisa, no se puede trabajar por capas durante meses. Hay que poner el color directo y aceptar la mancha.",
        },
        {
          forma: "texto",
          texto:
            "Y añade dos cosas materiales que casi nadie cuenta y que lo hicieron posible: el tubo de pintura metálico, que permitía sacar el óleo de casa, y el ferrocarril, que llevaba a un pintor de París al campo y de vuelta en el mismo día.",
        },
        {
          forma: "texto",
          texto:
            "El público tardó veinte años en aceptarlos y él no lo cuenta con condescendencia. Explica por qué chocaba: un ojo educado en los contornos nítidos veía aquello sencillamente inacabado, como hoy nos parecería inacabado un edificio sin fachada.",
        },
        {
          forma: "texto",
          texto:
            "Después vienen los que él llama los tres solitarios, y es de lo mejor del libro: Cézanne, Van Gogh y Gauguin, tres hombres que no se llevaban bien y que abrieron los tres caminos por donde iría todo el siglo XX.",
        },
        {
          forma: "texto",
          texto:
            "Cézanne quería el orden: reconstruir con manchas de color la solidez que los impresionistas habían disuelto. Se pasó años delante de la misma montaña. De ahí sale el cubismo, es decir, Picasso y Braque descomponiendo un objeto en planos.",
        },
        {
          forma: "texto",
          texto:
            "Van Gogh quería la expresión: que la pincelada llevara dentro la emoción del que pinta. De ahí sale el expresionismo alemán. Gauguin quería la simplicidad y se fue a buscarla lejos. De ahí sale buena parte de la obsesión moderna con lo primitivo, con todo lo que eso trae.",
        },
        {
          forma: "clave",
          rotulo: "Tres puertas",
          frase: "Estructura, expresión y simplificación. Gombrich reduce el arte del siglo XX a tres problemas heredados de tres hombres que murieron sin venderlo casi nada.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí se nota el límite del propio libro, que él nunca ocultó. Los capítulos sobre arte del siglo XX son los más cortos, los más prudentes y los menos entusiastas. Gombrich escribía en 1950 sobre gente que seguía viva y trabajando, y se le nota incómodo.",
        },
        {
          forma: "texto",
          texto:
            "En ediciones posteriores fue añadiendo material —llegó a haber dieciséis ediciones y él siguió revisándolas hasta los noventa años— pero la desproporción sigue ahí: cinco mil años en veinticinco capítulos y el siglo más agitado en dos.",
        },
        {
          forma: "arte",
          texto:
            "Su defensa era honesta: decía que no se puede escribir historia de lo que aún está pasando, porque falta lo único que la hace posible, que es saber qué vino después. Un historiador que juzga el presente, decía, está haciendo crítica, no historia.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "También rechazó siempre la idea de progreso. Que Rafael venga después de Giotto no significa que sea mejor, igual que un rascacielos no es mejor que una catedral. Cada uno resolvió lo que tenía delante. Esa negativa es lo que salva al libro de ser una escalera hacia el presente.",
        },
        {
          forma: "texto",
          texto:
            "El resultado es raro: un libro escrito para adolescentes en 1950, que no presume, que no adorna y que sigue siendo el mejor sitio por donde empezar. Nadie ha escrito nada que lo sustituya, y no por falta de intentos.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí ha aparecido son libros que le contestan. Y ahí está la conversación más interesante que ha tenido este libro en setenta años, que es la que va de todo lo que se quedó fuera de sus páginas.",
        },
      ],
    },

    {
      titulo: "Ocho millones de ejemplares",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El dato primero: «La historia del arte» ha vendido más de ocho millones de ejemplares y se ha traducido a más de treinta idiomas. Es, con diferencia, el libro de arte más vendido que existe, y sigue siendo el manual con el que empieza medio mundo.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich vivió lo suficiente para verlo. Murió en Londres en 2001, con noventa y dos años, después de haber revisado personalmente dieciséis ediciones y de haber contestado, según sus editores, prácticamente todas las cartas que le mandaban los lectores.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla, que falla en algo grande y hay que decirlo sin rodeos. En la primera edición no aparecía ni una sola mujer artista. Ni una, en quinientas páginas y cinco mil años. En ediciones posteriores entró alguna mención, pero la estructura del libro no cambió.",
        },
        {
          forma: "clave",
          rotulo: "El agujero",
          frase: "Artemisia Gentileschi, Sofonisba Anguissola, Judith Leyster, Berthe Morisot, Käthe Kollwitz. Ninguna estaba. No es un descuido pequeño: es media historia.",
        },
        {
          forma: "texto",
          texto:
            "Su defensa, cuando se lo preguntaron en los años noventa, fue que él no escribía sobre artistas por su biografía sino por su lugar en la cadena de problemas, y que si alguna quedaba fuera era por su criterio de importancia, no por su sexo. La respuesta convenció a poca gente.",
        },
        {
          forma: "texto",
          texto:
            "Porque el criterio de importancia no es neutro: se hereda de quién pudo entrar en un taller, quién pudo estudiar del natural —a las mujeres se les prohibió dibujar modelos desnudos hasta el siglo XIX— y de quién decidió después qué se colgaba en los museos.",
        },
        {
          forma: "texto",
          texto:
            "En 2022 Katy Hessel publicó «Historia del arte sin hombres» precisamente como respuesta a este libro. No lo niega: lo completa. Es una conversación de setenta años entre dos volúmenes, y las dos partes se leen mejor la una con la otra.",
        },
        {
          forma: "texto",
          texto:
            "El segundo agujero es geográfico. El arte chino, el japonés, el persa, el africano y el precolombino ocupan un capítulo temprano y luego desaparecen. A partir del Renacimiento, el libro es exclusivamente europeo y no vuelve a mirar fuera salvo de pasada.",
        },
        {
          forma: "arte",
          texto:
            "Su explicación también era coherente y también es insuficiente: dijo que solo podía contar la tradición en la que se había formado, y que un capítulo turístico sobre China sería peor que ninguno. Es un argumento decente que deja el título, «La historia del arte», bastante grande.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "El tercer defecto es el que él mismo admitía: la cadena de problemas funciona de maravilla hasta 1900 y bastante peor después. Cuando el problema deja de ser cómo representar el mundo, el método pierde agarre, y se nota en la prudencia de los últimos capítulos.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un cuarto, más sutil. Al contarlo todo como una conversación de soluciones, el libro deja fuera casi por completo el dinero, el poder y la política. Los papas, los banqueros y los imperios aparecen como clientes, no como parte del contenido de las obras.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, lo que casi todo el mundo cree y no es verdad. No es una enciclopedia. La gente lo compra para consultarlo y no funciona así: no hay nada que buscar por orden alfabético. Es un solo argumento continuo, y leído a saltos se pierde justo lo que lo hace valioso.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: la frase de que el Arte no existe se cita como una boutade elegante para empezar conferencias. No lo es. Es una instrucción de uso: quítese la mayúscula, deje de sentirse examinado y mire el cuadro que tiene delante como quien mira un problema resuelto.",
        },
        {
          forma: "texto",
          texto:
            "Y el tercero, el más extendido: mucha gente cree que es un libro difícil porque es gordo y porque va de arte. Está escrito para lectores de trece años, con vocabulario corriente y sin una sola cita erudita. La dificultad está en la materia, nunca en la prosa.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda, después de descontar los agujeros, sigue siendo enorme. Es el libro que ha enseñado a mirar a más gente que ningún otro, y lo ha hecho con un procedimiento que se puede aplicar a cualquier cosa: preguntarse siempre qué problema estaba resolviendo el que hizo esto.",
        },
        {
          forma: "arte",
          texto:
            "Esa pregunta funciona igual delante de un mosaico bizantino, de una silla, de una portada de disco o de una aplicación de móvil. Gombrich no enseñó arte: enseñó que detrás de cada forma hay alguien con una dificultad concreta y unos medios limitados.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Él lo resumió mejor que nadie en el prólogo de una de las últimas ediciones, cuando ya tenía noventa años. Escribió que el libro pretendía una cosa modesta: ordenar un poco el terreno para que el lector pudiera después perderse en él por su cuenta.",
        },
        {
          forma: "texto",
          texto:
            "Y avisaba de que ningún libro sustituye al museo. Decía que las reproducciones son notas al pie de las obras, no las obras, y que un cuadro se ve una sola vez de verdad: la primera, cuando se está delante y todavía no se sabe qué se está mirando.",
        },
        {
          forma: "texto",
          texto:
            "El detalle final es de las cosas más raras que le han pasado a un libro. Gombrich escribió para adolescentes un texto que acabó siendo obligatorio en universidades de medio mundo. Nunca cambió el tono para ponerse a la altura de ese público nuevo.",
        },
        {
          forma: "texto",
          texto:
            "Y probablemente esa sea la razón de las ocho millones de copias. Es el único manual importante de su campo que no da por supuesto que el lector ya sabe algo, y que en ningún momento de sus quinientas páginas le hace sentir tonto por no saberlo.",
        },
      ],
    },
  ],
};

export const ARTE_SIN_HOMBRES: Resumen = {
  id: "arte-sin-hombres",
  titulo: "Historia del arte sin hombres",
  autor: "Katy Hessel",
  ano: 2022,
  gancho: "En una feria de arte de Londres con miles de obras no había ni una sola de una mujer. La que se dio cuenta tenía veintiún años y decidió escribir el otro libro.",
  porQue:
    "Es la respuesta directa al manual de Gombrich, y no va de opinar: va de enseñar los mecanismos concretos por los que media historia del arte desapareció.",
  partes: [
    {
      titulo: "Una feria sin una sola mujer",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Londres, 2015. Una estudiante de historia del arte de veintiún años recorre una feria comercial con cientos de galerías y miles de obras. A media tarde cae en la cuenta de algo que lleva rato rondándole: no ha visto ni una sola pieza firmada por una mujer.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaba Katy Hessel. No era una activista ni una veterana del sector: estaba terminando la carrera. Esa misma semana abrió una cuenta de Instagram donde publicaba cada día una artista, con su nombre, su fecha y una obra. La llamó las grandes artistas mujeres.",
        },
        {
          forma: "texto",
          texto:
            "El nombre era una respuesta a un artículo célebre de 1971, en el que la historiadora Linda Nochlin se preguntaba por qué no ha habido grandes mujeres artistas. Nochlin no contestaba con nombres: contestaba desmontando la pregunta y señalando las instituciones que la hacían posible.",
        },
        {
          forma: "clave",
          rotulo: "La respuesta de Nochlin",
          frase: "No faltó talento. Faltó acceso: a los talleres, a las academias, a los encargos y, sobre todo, a la clase de dibujo del natural. Sin eso no se podía pintar una figura, y sin figura no había arte mayor.",
        },
        {
          forma: "texto",
          texto:
            "Hessel se pasó siete años acumulando material y en 2022 publicó el libro. Va del Renacimiento a hoy, unos quinientos años, con quinientas páginas y sin una sola obra de hombre. El título es deliberadamente provocador y ella lo explica en el prólogo con toda claridad.",
        },
        {
          forma: "texto",
          texto:
            "No propone borrar a nadie. Propone hacer el experimento contrario al que se ha hecho durante siglos: escribir el relato completo dejando fuera a los hombres, para que se vea que hay relato. La ausencia, dice, no era de artistas: era de páginas.",
        },
        {
          forma: "arte",
          texto:
            "Y el objetivo declarado es concreto: que dentro de veinte años este libro no haga falta, porque los manuales generales las incluyan. Hessel escribe una corrección, no un canon alternativo, y avisa desde la primera página de que aspira a quedarse obsoleta.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "El libro que tiene en el punto de mira, aunque lo trata con respeto, es el de Gombrich. «La historia del arte», el manual más vendido de todos los tiempos, no incluía en su primera edición ni una sola mujer artista. Ni una, en quinientas páginas y cinco mil años.",
        },
        {
          forma: "texto",
          texto:
            "Hessel no lo presenta como una maldad personal de Gombrich. Lo presenta como el resultado final de una cadena, y esa cadena es lo que se dedica a documentar: cómo se llega a que un historiador honesto escriba un manual completo sin encontrarse a nadie por el camino.",
        },
        {
          forma: "texto",
          texto:
            "Los eslabones son concretos y se pueden nombrar uno a uno. El primero: los gremios medievales y los talleres. Se entraba de aprendiz a los diez o doce años, viviendo en casa del maestro. A una niña de familia respetable eso no se le permitía.",
        },
        {
          forma: "texto",
          texto:
            "Por eso casi todas las pintoras anteriores al siglo XIX son hijas de pintores. Es la única puerta que quedaba: aprender en el taller del padre, donde nadie tenía que autorizar nada. Ese detalle biográfico se repite tanto que deja de ser una casualidad.",
        },
        {
          forma: "texto",
          texto:
            "El segundo eslabón es la clase de dibujo del natural. En la jerarquía académica, la pintura de historia —escenas religiosas, mitológicas, batallas— era el género más alto, y requería dominar el cuerpo humano desnudo. Se aprendía dibujando modelos vivos en la academia.",
        },
        {
          forma: "clave",
          rotulo: "La puerta cerrada",
          frase: "A las mujeres se les prohibió el dibujo del natural durante siglos por decoro. Sin eso quedaban confinadas a los géneros menores: retrato, bodegón, flores. Y luego se les reprochaba pintar solo flores.",
        },
        {
          forma: "texto",
          texto:
            "La Royal Academy de Londres no admitió mujeres en las clases del natural hasta 1893, y aun entonces con el modelo parcialmente cubierto. En París, la École des Beaux-Arts no admitió mujeres hasta 1897. Son fechas, no impresiones.",
        },
        {
          forma: "texto",
          texto:
            "El tercer eslabón es la atribución. Cuando una obra buena aparecía sin firma clara, el mercado tendía a atribuirla a un hombre conocido, porque valía más. Y en algunos casos documentados alguien directamente borró una firma y pintó otra encima.",
        },
        {
          forma: "arte",
          texto:
            "El cuarto es el más lento y el más eficaz: el museo. Lo que no se compra no se expone; lo que no se expone no entra en los manuales; lo que no está en los manuales no se estudia; y lo que no se estudia no se compra. El círculo se cierra sin que nadie tenga que decidir nada.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Hessel aporta la cifra que mide el resultado. Un estudio publicado en 2019 sobre las colecciones de dieciocho grandes museos estadounidenses encontró que el ochenta y siete por ciento de las obras eran de artistas hombres y el ochenta y cinco por ciento, de artistas blancos.",
        },
        {
          forma: "texto",
          texto:
            "Con ese marco montado, el libro se pone a contar. Y lo hace en orden cronológico normal, como un manual cualquiera, empezando por una ciudad italiana del siglo XVI donde una familia noble tomó una decisión rara: educar a sus cinco hijas como si fueran a ser algo.",
        },
        {
          forma: "texto",
          texto:
            "La mayor de aquellas hermanas acabó siendo pintora de corte de Felipe II en Madrid, y vivió noventa y tres años. Se llamaba Sofonisba Anguissola y es, cronológicamente, la primera protagonista de esta historia.",
        },
        {
          forma: "texto",
          texto:
            "Pero la escena con la que arranca de verdad el capítulo siguiente no es un taller ni un palacio. Es una sala de un tribunal de Roma, en 1612, donde a una pintora de diecinueve años le están apretando los dedos con cuerdas mientras declara.",
        },
      ],
    },

    {
      titulo: "El juicio de Artemisia",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Roma, 1612. Artemisia Gentileschi tiene diecinueve años y declara ante un tribunal. Ha denunciado que Agostino Tassi, el pintor al que su padre había contratado para enseñarle perspectiva, la violó en la casa familiar el año anterior. El juicio dura siete meses.",
        },
        {
          forma: "texto",
          texto:
            "Durante su testimonio le aplican la sibila: unas cuerdas que se van apretando alrededor de los dedos. No es un castigo. Es el procedimiento habitual para comprobar si un testigo dice la verdad, bajo la lógica de que el dolor impide mentir. Se lo aplican a ella, no al acusado.",
        },
        {
          forma: "texto",
          texto:
            "Las actas del juicio se conservan y se pueden leer. Ella repite mientras le aprietan los dedos que es verdad, es verdad, es verdad. Era pintora: la tortura se le aplicaba precisamente en la herramienta de su oficio, y todos los presentes lo sabían.",
        },
        {
          forma: "clave",
          rotulo: "El final del juicio",
          frase: "Tassi fue condenado y la pena no se llegó a ejecutar. Siguió trabajando en Roma con encargos importantes. Artemisia se casó a los pocos días y se marchó a Florencia.",
        },
        {
          forma: "texto",
          texto:
            "Hessel avisa aquí de una trampa de lectura, y es de las cosas más útiles del libro. Durante décadas la obra de Gentileschi se ha explicado exclusivamente como venganza biográfica: sus Judith degollando a Holofernes serían la violación pintada. Esa lectura la reduce a su trauma.",
        },
        {
          forma: "texto",
          texto:
            "Porque lo que hay en esos cuadros, mirados como se mira a cualquier pintor, es una solución técnica de primer nivel. La composición es de una violencia física real: las dos mujeres empujan con el peso del cuerpo, se remangan, sujetan. No posan.",
        },
        {
          forma: "arte",
          texto:
            "Hessel compara su Judith con la de Caravaggio, que ella conocía. En la de él, Judith aparta la cara y corta con el brazo estirado, como quien no quiere mancharse. En la de Artemisia hay dos mujeres haciendo un trabajo pesado, con la sangre saltando en arcos hacia la sábana.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Su carrera fue notable con criterios de la época: en 1616 se convirtió en la primera mujer admitida en la Academia del Dibujo de Florencia. Trabajó para los Médici, viajó a Venecia, a Nápoles y a Londres, y firmó cartas negociando precios como cualquier maestro.",
        },
        {
          forma: "texto",
          texto:
            "Antes que ella está Sofonisba Anguissola, nacida en Cremona hacia 1532, que llegó a ser dama de compañía y pintora de la corte de Felipe II en Madrid. Miguel Ángel, ya anciano, le mandó dibujos para que los corrigiera y le comentó el trabajo por carta.",
        },
        {
          forma: "texto",
          texto:
            "Anguissola vivió noventa y tres años. En 1624, cuando ya estaba casi ciega, el joven Van Dyck fue a visitarla a Palermo y le hizo un retrato. Anotó en su cuaderno que aquella anciana le había dado más consejos útiles sobre pintura que cualquier maestro que hubiera conocido.",
        },
        {
          forma: "texto",
          texto:
            "Y está Lavinia Fontana, de Bolonia, que Hessel destaca por una razón económica: fue probablemente la primera mujer que mantuvo a su familia con su taller de pintura. Tuvo once hijos y su marido, también pintor, dejó de pintar para gestionarle los encargos.",
        },
        {
          forma: "texto",
          texto:
            "El caso que mejor demuestra el mecanismo de la desaparición está en Holanda. Judith Leyster fue una pintora de Haarlem del siglo XVII, admitida en el gremio de San Lucas en 1633, con taller propio y aprendices a su cargo.",
        },
        {
          forma: "clave",
          rotulo: "La firma tapada",
          frase: "En 1893 el Louvre compró un cuadro como obra de Frans Hals. Al restaurarlo apareció debajo el monograma de Judith Leyster. Sus obras llevaban siglos vendiéndose como de él.",
        },
        {
          forma: "texto",
          texto:
            "El descubrimiento acabó en un pleito y en un escándalo en el mercado del arte. Y obligó a reatribuir varias obras. Hessel señala lo que eso implica: no es que Leyster fuera desconocida, es que su nombre valía menos, así que alguien lo sustituyó por otro que valía más.",
        },
        {
          forma: "texto",
          texto:
            "En el siglo XVIII aparece Élisabeth Vigée Le Brun, retratista de María Antonieta, que pintó más de seiscientos retratos y huyó de Francia la noche del 6 de octubre de 1789 disfrazada, con su hija de nueve años y en una diligencia pública.",
        },
        {
          forma: "texto",
          texto:
            "Pasó doce años en el exilio trabajando en Nápoles, Viena, San Petersburgo y Berlín, y se hizo rica por su cuenta. Sus memorias, escritas de mayor, son una de las mejores fuentes que hay sobre cómo funcionaba el mercado del retrato en la Europa del XVIII.",
        },
        {
          forma: "arte",
          texto:
            "Hessel destaca de ella un cuadro concreto: un autorretrato de 1787 con su hija en brazos, en el que aparece sonriendo con los dientes visibles. En el Salón de París aquello escandalizó. Ninguna dama retratada enseñaba los dientes, y la crítica se lo afeó por escrito.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Y también está Rachel Ruysch, la pintora de flores holandesa, que fue durante su vida más cotizada que Rembrandt en el mercado de su ciudad. Vivió ochenta y siete años, tuvo diez hijos y siguió firmando cuadros a los ochenta y tres.",
        },
        {
          forma: "texto",
          texto:
            "El bodegón de flores era un género menor en la jerarquía académica y ella lo aceptó, porque era el que tenía disponible. Hessel señala el bucle completo: se les cierra el acceso a la pintura de historia, se las empuja a las flores, y luego se las considera menores por pintar flores.",
        },
        {
          forma: "texto",
          texto:
            "Esa jerarquía tenía sede oficial, y en Londres se fundó en 1768 con treinta y seis miembros fundadores. Dos de ellos eran mujeres. Y el cuadro que se pintó para celebrar aquella fundación es la mejor imagen que existe de todo lo que cuenta este libro.",
        },
      ],
    },

    {
      titulo: "Las dos que solo están en el cuadro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Londres, 1771. El pintor Johan Zoffany recibe el encargo de retratar a los miembros fundadores de la Royal Academy reunidos. Los pinta en una sala de dibujo del natural, con dos modelos masculinos desnudos posando y los académicos alrededor, discutiendo.",
        },
        {
          forma: "texto",
          texto:
            "Entre los treinta y seis fundadores hay dos mujeres: Angelica Kauffman, pintora suiza de gran éxito internacional, y Mary Moser, pintora de flores. Las dos son miembros de pleno derecho, con firma en el acta fundacional y con voto.",
        },
        {
          forma: "texto",
          texto:
            "Y las dos aparecen en el cuadro de Zoffany. Pero no de cuerpo entero entre sus colegas: aparecen como dos retratos colgados en la pared del fondo, dos cabezas enmarcadas mirando la escena desde arriba, junto a los bustos de yeso.",
        },
        {
          forma: "clave",
          rotulo: "El motivo",
          frase: "No podían estar en una sala con un modelo desnudo. Su presencia física era incompatible con el decoro, así que el pintor las incluyó de la única forma posible: como cuadros dentro del cuadro.",
        },
        {
          forma: "texto",
          texto:
            "Hessel usa esa pintura como imagen central del libro y se entiende por qué. No hace falta ningún argumento: está todo ahí. Dos miembros fundadoras convertidas en decoración de pared en el retrato oficial de la institución que ellas fundaron.",
        },
        {
          forma: "texto",
          texto:
            "Y la consecuencia práctica duró más de un siglo. Después de Kauffman y Moser, la Royal Academy no volvió a elegir a una mujer como miembro de pleno derecho hasta 1936. Ciento sesenta y ocho años sin ninguna, después de haber empezado con dos.",
        },
        {
          forma: "texto",
          texto:
            "Kauffman, mientras tanto, tuvo una carrera enorme: pintó a media aristocracia europea, se hizo rica, se instaló en Roma y su casa era una parada obligatoria para los viajeros del Grand Tour. Goethe la visitó y escribió que tenía un talento increíble para su sexo, que era el elogio de la época.",
        },
        {
          forma: "arte",
          texto:
            "Ese tipo de elogio aparece una y otra vez en el libro y es un dato en sí mismo. Durante siglos la mejor crítica que podía recibir una pintora era la de que pintaba como un hombre. El halago contenía dentro toda la clasificación que hacía falta desmontar.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "El siglo XIX trae el impresionismo, y ahí hay dos nombres que sí sobrevivieron al filtro: Berthe Morisot y Mary Cassatt. Morisot participó en siete de las ocho exposiciones impresionistas, más que Monet, y era considerada por el grupo una de sus figuras centrales.",
        },
        {
          forma: "texto",
          texto:
            "Su limitación era de acceso, no de talento. No podía sentarse sola en un café de Montmartre a pintar, ni pasear por los bulevares sin compañía. Así que pintó lo que tenía a mano: interiores, jardines, mujeres vistiéndose, niñas. Sus temas son el mapa de sus permisos.",
        },
        {
          forma: "texto",
          texto:
            "Cassatt, americana en París, hizo algo parecido y además una cosa decisiva para el arte de su país: aconsejó a coleccionistas americanos ricos qué comprar. Buena parte de los impresionistas que hoy cuelgan en los museos de Nueva York están ahí porque ella lo recomendó.",
        },
        {
          forma: "texto",
          texto:
            "Hessel se detiene además en un detalle económico de Cassatt que suele pasarse por alto: nunca se casó y vivió de su trabajo y de su renta familiar. La mayoría de las pintoras del XIX que llegaron a algo o no se casaron, o se casaron con un pintor. No era una casualidad de carácter.",
        },
        {
          forma: "texto",
          texto:
            "Y está el caso de Marie Bracquemond, considerada por Gauguin una de las tres grandes impresionistas junto con Morisot y Cassatt. Su marido, también pintor y con menos talento, se opuso durante años a su trabajo. Dejó de pintar en 1890 y no volvió a coger un pincel.",
        },
        {
          forma: "texto",
          texto:
            "Ese tipo de final aparece en el libro con una frecuencia que acaba siendo el argumento. No hay un veto legal ni una prohibición escrita: hay una acumulación de fricciones domésticas, de puertas entornadas y de comentarios, hasta que alguien deja de pintar y nadie tiene que responder de ello.",
        },
        {
          forma: "texto",
          texto:
            "En escultura la exclusión era todavía más dura, porque implicaba taller, materiales caros y trabajo físico. Camille Claudel trabajó veinte años, estuvo con Rodin, y en 1913, a los cuarenta y ocho, su familia la internó en un psiquiátrico. Pasó allí los treinta años que le quedaban.",
        },
        {
          forma: "texto",
          texto:
            "Los informes médicos que se conservan indican que no requería internamiento permanente y que los médicos sugirieron varias veces darle el alta. La familia se negó. Su hermano, el escritor Paul Claudel, la visitó una docena de veces en tres décadas. Murió en 1943 en el asilo.",
        },
        {
          forma: "arte",
          texto:
            "Hessel evita convertir esas biografías en martirologio, y hace bien: lo que le interesa es la obra. De Claudel destaca «La edad madura», un grupo en bronce con tres figuras donde una mujer arrodillada tiende los brazos hacia un hombre al que otra se lleva. Es autobiográfico y es magistral.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El cambio de siglo trae por fin las escuelas de arte privadas que sí admitían mujeres —la Académie Julian en París entre ellas— y de golpe aparecen decenas de pintoras formadas. La barrera de acceso cae en una generación, y el efecto en la cantidad de obra es inmediato.",
        },
        {
          forma: "texto",
          texto:
            "Ese dato es el que remata el capítulo: en cuanto se abren las academias, las mujeres artistas se multiplican. No hubo que esperar a ningún cambio de talento ni de vocación. Lo único que había cambiado era quién podía entrar por la puerta.",
        },
      ],
    },

    {
      titulo: "La abstracción llegó antes",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Y entonces llega el capítulo que más ha cambiado los manuales en los últimos diez años, y va de una sueca de la que casi nadie había oído hablar hasta 2018. Se llamaba Hilma af Klint y pintaba en Estocolmo a principios del siglo XX.",
        },
        {
          forma: "clave",
          rotulo: "1906",
          frase: "Af Klint pintó cuadros completamente abstractos —formas, espirales, colores sin referente— empezando en 1906. Kandinsky, a quien los manuales dan como primer abstracto, llegó ahí hacia 1911.",
        },
        {
          forma: "texto",
          texto:
            "Trabajaba en secreto y por motivos espirituales: pertenecía a un grupo teosófico y sostenía que las obras le venían dictadas. Llegó a pintar más de mil doscientas piezas, algunas de tres metros, y casi ninguna se expuso mientras vivió.",
        },
        {
          forma: "texto",
          texto:
            "En su testamento dejó escrito que su obra no se mostrara hasta veinte años después de su muerte, convencida de que nadie iba a entenderla antes. Murió en 1944. La primera exposición importante llegó, en realidad, más de cuarenta años después.",
        },
        {
          forma: "arte",
          texto:
            "En 2018 el Guggenheim de Nueva York le dedicó una retrospectiva. Fue la exposición más visitada de la historia del museo, con más de seiscientos mil visitantes. Una pintora que llevaba setenta años en un almacén batió el récord del edificio.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El siglo XX está lleno de casos parecidos, y Hessel los va poniendo en fila. Lee Krasner, pintora excelente y formada, cuya obra quedó tapada por la de su marido, Jackson Pollock, y que además dedicó años a gestionar el legado de él después de su muerte.",
        },
        {
          forma: "texto",
          texto:
            "Louise Bourgeois, que trabajó cincuenta años sin apenas reconocimiento y tuvo su primera gran retrospectiva en el MoMA en 1982, cuando tenía setenta y un años. Fue la primera mujer a la que el museo dedicaba una retrospectiva completa. Vivió hasta los noventa y ocho y siguió trabajando.",
        },
        {
          forma: "texto",
          texto:
            "Y Yayoi Kusama, que estuvo en el Nueva York de los sesenta haciendo instalaciones y performances antes que muchos de los que se llevaron el crédito, volvió a Japón, ingresó voluntariamente en una institución psiquiátrica en 1977 y siguió pintando desde allí durante cuarenta años.",
        },
        {
          forma: "texto",
          texto:
            "De Bourgeois, Hessel destaca «Maman», la araña de acero de nueve metros con un saco de huevos de mármol bajo el abdomen. La escultora explicó que era un retrato de su madre, que restauraba tapices: tejedora, protectora y con la capacidad de morder. No es un monstruo, es un elogio.",
        },
        {
          forma: "arte",
          texto:
            "Y hay un detalle biográfico que ilumina toda su obra: su padre tuvo durante años una amante que vivía en la casa familiar como institutriz de los niños, con el conocimiento de todos. Bourgeois pasó setenta años haciendo obra sobre esa casa. La primera vez que la mostró tenía cuarenta y ocho.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Del expresionismo abstracto americano, además de Krasner, rescata a Joan Mitchell y a Helen Frankenthaler. Frankenthaler inventó en 1952 una técnica —verter pintura muy diluida sobre lienzo sin imprimar, para que empapara la tela— que dos pintores hombres adoptaron y con la que ellos hicieron carrera.",
        },
        {
          forma: "texto",
          texto:
            "Ese patrón, el de la innovación técnica atribuida al que la populariza y no a la que la inventa, se repite lo suficiente como para tener nombre propio en la bibliografía. Hessel lo documenta con fechas de exposición y no con insinuaciones, que es lo que hace útil el capítulo.",
        },
        {
          forma: "texto",
          texto:
            "En México está Frida Kahlo, y aquí Hessel hace algo valiente: pelea contra su propia popularidad. Kahlo se ha convertido en una cara en camisetas y bolsas, y esa iconografía ha tapado lo que hay en los cuadros, que es de una brutalidad médica muy poco decorativa.",
        },
        {
          forma: "texto",
          texto:
            "Recuerda los hechos concretos: un accidente de autobús a los dieciocho años, una barra de metal que le atravesó la pelvis, treinta y dos operaciones a lo largo de su vida, meses enteros en cama con un espejo en el dosel. Pintó autorretratos porque era lo único que tenía delante.",
        },
        {
          forma: "texto",
          texto:
            "Y señala el dato de mercado: en 1938 vendió cuatro cuadros; en vida hizo una sola exposición individual en México, en 1953, a la que asistió en camilla porque no podía levantarse. En 2021 un autorretrato suyo se vendió en subasta por casi treinta y cinco millones de dólares.",
        },
        {
          forma: "texto",
          texto:
            "En Estados Unidos, Georgia O\u0027Keeffe tuvo el problema contrario: demasiada interpretación. Sus flores enormes se leyeron desde el principio como genitales femeninos, lectura que impulsó su marido y galerista, Alfred Stieglitz, porque vendía. Ella lo negó toda su vida y siguió pintando huesos y desiertos.",
        },
        {
          forma: "arte",
          texto:
            "O\u0027Keeffe vivió noventa y ocho años, se marchó a Nuevo México, se quedó casi ciega y siguió trabajando con ayudantes. Es de los pocos casos del libro en que una artista consigue en vida el reconocimiento completo, y aun así se pasó sesenta años discutiendo lo que sus cuadros significaban.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Hessel incluye también a las que trabajaron fuera del circuito de las galerías. Las colchas de Gee\u0027s Bend, hechas durante generaciones por mujeres negras de una comunidad aislada de Alabama, se expusieron en museos a partir de 2002 y se leyeron entonces como abstracción geométrica de primer nivel.",
        },
        {
          forma: "texto",
          texto:
            "Eso plantea la pregunta de fondo del libro sin necesidad de formularla: cuánto de lo que llamamos arte depende de la obra y cuánto de que alguien con autoridad decida llamarlo así. Aquellas colchas eran exactamente las mismas antes y después de entrar en el museo.",
        },
        {
          forma: "texto",
          texto:
            "Hoy Kusama es una de las artistas vivas más vistas del planeta y sus salas de espejos llenan museos enteros. Ese recorrido —de invisible a taquillera— es el que un grupo de artistas enmascaradas empezó a exigir en Nueva York a mediados de los ochenta, con carteles y con datos.",
        },
      ],
    },

    {
      titulo: "¿Hay que estar desnuda?",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Nueva York, 1989. Aparecen pegados por la ciudad y en un autobús unos carteles amarillos con una odalisca de Ingres, desnuda y tumbada, con una cabeza de gorila. El texto pregunta si las mujeres tienen que estar desnudas para entrar en el Metropolitan.",
        },
        {
          forma: "texto",
          texto:
            "Debajo va el dato, que es lo que lo convierte en un golpe: menos del cinco por ciento de los artistas de las secciones de arte moderno del museo eran mujeres, pero el ochenta y cinco por ciento de los desnudos eran femeninos. Habían ido a contarlos sala por sala.",
        },
        {
          forma: "texto",
          texto:
            "Las firmaba un colectivo llamado Guerrilla Girls, formado en 1985, que se presentaba en público con máscaras de gorila y usando nombres de artistas muertas —Frida Kahlo, Käthe Kollwitz— para no ser identificadas y para que la discusión no fuera sobre sus personas.",
        },
        {
          forma: "clave",
          rotulo: "El método",
          frase: "No discutían de estética. Iban al museo, contaban las obras, contaban los desnudos y publicaban la resta. La estadística resultó ser el argumento más difícil de contestar.",
        },
        {
          forma: "texto",
          texto:
            "El origen del grupo fue una exposición del MoMA de 1984 que pretendía ser un panorama del arte contemporáneo internacional. De los ciento sesenta y cinco artistas seleccionados, trece eran mujeres. El comisario declaró que cualquier artista que no estuviera en la muestra debería replantearse su carrera.",
        },
        {
          forma: "texto",
          texto:
            "Treinta años después volvieron a contar en el Metropolitan y el porcentaje de artistas mujeres en aquellas salas había bajado, aunque el de desnudos femeninos también. Ese resultado —mejora aparente, retroceso real— es el que Hessel usa para cerrar el argumento del libro.",
        },
        {
          forma: "arte",
          texto:
            "Porque los datos actuales siguen siendo tozudos. En las grandes colecciones estadounidenses estudiadas en 2019, el ochenta y siete por ciento de las obras eran de hombres. En el mercado, la brecha de precios entre firmas equivalentes se sigue midiendo en múltiplos, no en porcentajes.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El último tercio del libro recorre el arte contemporáneo con esa lente: Faith Ringgold y sus colchas narrativas, Ana Mendieta, Barbara Kruger, Cindy Sherman, Kara Walker, Tracey Emin. Y también artistas de fuera del circuito occidental, aunque esa es la parte más floja.",
        },
        {
          forma: "texto",
          texto:
            "Porque ahora toca decir dónde falla, y falla en cosas identificables. La primera es de formato: al cubrir quinientos años y a más de trescientas artistas, cada una recibe dos o tres páginas. Es un catálogo espléndido y un argumento fino.",
        },
        {
          forma: "texto",
          texto:
            "El propio Gombrich, al que este libro contesta, tenía una tesis que le daba motor: cada obra como respuesta a un problema. Aquí el hilo es la exclusión, que explica muy bien por qué no estaban y bastante peor qué hicieron una vez dentro.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es geográfica, y es la misma que ella le reprocha al canon. El libro es abrumadoramente europeo y norteamericano. África, Asia y América Latina aparecen sobre todo a partir del siglo XX y casi siempre a través de artistas ya validadas por museos de Londres y Nueva York.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es de método, y es la crítica más seria que se le ha hecho: el libro combate un canon construyendo otro, y usa para hacerlo los mismos criterios de validación —el museo, la retrospectiva, la subasta— que denuncia. Sustituir la lista no cambia quién decide las listas.",
        },
        {
          forma: "arte",
          texto:
            "Hessel lo sabe y lo dice en el prólogo, que es lo que la salva. Escribe que este es un libro de transición y que ojalá quede anticuado pronto. Aspira a ser un andamio, no un edificio. Aun así, la contradicción está ahí y no se resuelve dentro de las páginas.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Y una cuarta, menor pero real: el tono es divulgativo y a ratos demasiado entusiasta. Casi todas las artistas son extraordinarias, revolucionarias y adelantadas a su tiempo. Con trescientas seguidas, el superlativo se gasta y cuesta distinguir a las de primera fila.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por el título: no propone quitar a los hombres de la historia del arte. Es un experimento de lectura, no un programa. La propia autora escribe sobre artistas hombres en su trabajo habitual.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido, el más extendido: que sencillamente no hubo mujeres artistas antes del siglo XX. El libro demuestra lo contrario con nombres, fechas, actas de gremio, contratos y precios de mercado. Hubo muchas, algunas famosísimas en vida, y luego desaparecieron de los libros.",
        },
        {
          forma: "texto",
          texto:
            "Y el tercero: que aquello se arregló solo con el tiempo. La Royal Academy tardó ciento sesenta y ocho años en volver a elegir a una mujer. El MoMA tardó hasta 1982 en dedicarle una retrospectiva a una artista viva. Nada de eso ocurrió por inercia: ocurrió cuando alguien empujó.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda es un libro que funciona mejor como herramienta que como relato: se abre por cualquier página, se encuentra una artista de la que no se sabía nada, y se comprueba en el museo más cercano cuántas obras suyas hay colgadas. Casi siempre la respuesta es ninguna.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un detalle final que resume la historia entera. Cuando el Prado quiso montar en 2016 la primera exposición monográfica de dos pintoras —Clara Peeters y Sofonisba Anguissola—, tuvo que pedir prestadas obras: llevaban doscientos años en sus almacenes o en colecciones ajenas, sin colgar.",
        },
      ],
    },
  ],
};

export const ACTO_CREATIVO: Resumen = {
  id: "acto-creativo",
  titulo: "El acto creativo",
  autor: "Rick Rubin",
  ano: 2023,
  gancho: "El productor musical más influyente de los últimos cuarenta años no toca ningún instrumento, no sabe leer música y no maneja una mesa de mezclas.",
  porQue:
    "Porque su método —quitar en vez de añadir— resucitó a Johnny Cash a los sesenta y un años, y porque el libro donde lo explica es más discutible de lo que parece.",
  partes: [
    {
      titulo: "La habitación 712",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Nueva York, 1984. En una residencia de estudiantes de la Universidad de Nueva York, un chaval de Long Island con veintiún años y el pelo largo monta un sello discográfico en su habitación. El logotipo lo dibuja él. La dirección postal del sello es su cuarto.",
        },
        {
          forma: "texto",
          texto:
            "Se llama Rick Rubin y el sello se llama Def Jam. En los tres años siguientes publicará el primer disco de LL Cool J, el de los Beastie Boys y el que junta a Run-DMC con Aerosmith. El hip hop pasa de la radio comunitaria a las listas de éxitos.",
        },
        {
          forma: "texto",
          texto:
            "El dato que sostiene todo lo demás: Rubin no toca ningún instrumento, no sabe leer una partitura y no sabe manejar una mesa de mezclas. Ha producido varios de los discos más vendidos de la historia sin ninguna de las tres competencias que se le suponen a un productor.",
        },
        {
          forma: "clave",
          rotulo: "Qué hace entonces",
          frase: "Escuchar y decir qué sobra. Su trabajo se parece más al de un editor de libros o un director de cine que al de un técnico: no fabrica el sonido, decide qué se queda.",
        },
        {
          forma: "texto",
          texto:
            "Su carrera es, además, una lista de saltos que no deberían caber en una sola persona. Después del hip hop produjo el disco más extremo del thrash metal, «Reign in Blood» de Slayer, veintiocho minutos y diez canciones, grabado con la misma lógica de quitar todo lo que sobre.",
        },
        {
          forma: "texto",
          texto:
            "Luego los Red Hot Chili Peppers, a los que sacó de su casa y encerró en una mansión de Hollywood para grabar; Adele, Kanye West, System of a Down, Metallica, los Dixie Chicks. Y entre medias el trabajo por el que se le recordará más allá de la música pop.",
        },
        {
          forma: "arte",
          texto:
            "Ese currículum es el argumento implícito del libro: si el mismo hombre puede sacar lo mejor de un grupo de thrash metal, de una cantante de soul y de un icono del country, lo que hace no puede ser técnico. Tiene que ser otra cosa, y el libro es su intento de explicarla.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "«El acto creativo» salió en 2023, después de treinta y cinco años de carrera y de un podcast donde entrevista a músicos y a científicos. Vendió millones de ejemplares y se convirtió en el libro de cabecera de mucha gente que no tiene nada que ver con la música.",
        },
        {
          forma: "texto",
          texto:
            "Y lo primero que sorprende al abrirlo es lo que no hay. No hay anécdotas de estudio. No hay nombres. No cuenta cómo grabó ningún disco. En quinientas páginas apenas se menciona a un puñado de artistas, y casi nunca por su trabajo con ellos.",
        },
        {
          forma: "texto",
          texto:
            "Está organizado en setenta y ocho capítulos cortos, algunos de dos páginas, que él llama áreas de pensamiento. Se pueden leer en cualquier orden. No hay ejercicios, no hay bibliografía y no hay una sola cifra en todo el libro.",
        },
        {
          forma: "clave",
          rotulo: "La decisión de forma",
          frase: "Podría haber escrito unas memorias de la industria musical que se habrían vendido igual. Escribió deliberadamente lo contrario: un libro sin él dentro.",
        },
        {
          forma: "texto",
          texto:
            "Su justificación aparece en la introducción: dice que no escribe para músicos, sino para cualquiera que haga algo, y que los ejemplos concretos de su oficio harían pensar al lector que aquello va de discos. La ausencia de anécdotas es una decisión, no una carencia.",
        },
        {
          forma: "texto",
          texto:
            "También define desde el principio a quién se dirige, y es la frase más citada del libro: todos somos creadores. No se refiere a que todo el mundo pueda ser artista, sino a algo más básico: que elegir qué mirar, qué escuchar y qué ignorar ya es un acto creativo.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la primera idea sólida: la materia prima no es el talento, es la atención. Un creador no es alguien que produce más, es alguien que percibe más, y percibir más es un músculo que se entrena reduciendo el ruido y aumentando el tiempo de mirar.",
        },
        {
          forma: "arte",
          texto:
            "Rubin cuenta que en las sesiones se pasa mucho rato tumbado en un sofá con los ojos cerrados, escuchando. Los músicos que han trabajado con él lo han descrito con perplejidad y también con respeto: no hace nada durante horas y luego dice una frase que reordena el disco.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "La otra idea que introduce pronto y que estructura el libro es la más discutible: sostiene que las ideas no se fabrican, se reciben. Que existe algo a lo que llama la Fuente, del que las ideas emanan, y que el trabajo del artista es sintonizar y no obstruir.",
        },
        {
          forma: "texto",
          texto:
            "Es una idea muy antigua vestida de nuevo. Los griegos la llamaban musa y los romanos genius, entendido no como un rasgo de la persona sino como un espíritu que la visitaba. Rubin la recupera sin citar a nadie, y ahí empieza el problema del libro y también su atractivo.",
        },
        {
          forma: "texto",
          texto:
            "Porque tiene una utilidad práctica innegable: si la idea no es tuya, el fracaso tampoco te define. Baja la presión del ego, que según él es el principal obstáculo. Y tiene un coste: es una afirmación que no se puede comprobar ni discutir.",
        },
        {
          forma: "texto",
          texto:
            "Antes de entrar en el método conviene ver cómo funciona aplicado, porque hay un caso documentado que lo demuestra mejor que cualquier capítulo del libro. Ocurrió en 1993, en el salón de la casa de Rubin, con un hombre de sesenta y un años al que nadie quería contratar.",
        },
        {
          forma: "texto",
          texto:
            "Ese hombre llevaba diez años sin un disco de éxito, había sido despedido por su discográfica de toda la vida y actuaba en cenas-espectáculo de Branson, Misuri. Se llamaba Johnny Cash y estaba a punto de tener la mejor década de su carrera.",
        },
      ],
    },

    {
      titulo: "El sillón de Johnny Cash",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Los Ángeles, 1993. Johnny Cash tiene sesenta y un años. Columbia Records, su casa desde los años sesenta, lo ha despedido. Su siguiente sello tampoco funcionó. Toca en teatros para turistas y su público ha envejecido con él. Nadie en la industria lo considera un artista activo.",
        },
        {
          forma: "texto",
          texto:
            "Rubin le propone grabar. Cash le pregunta qué se supone que va a hacer con él, y Rubin le contesta que sentarlo con una guitarra en su salón y grabar las canciones que él quiera cantar. Sin banda, sin arreglos, sin coros, sin nada.",
        },
        {
          forma: "clave",
          rotulo: "El método, en una frase",
          frase: "Quitar todo lo que no sea la voz y la canción. Cash llevaba treinta años enterrado bajo producciones cada vez más pobladas. Rubin le quitó la orquesta y dejó a un hombre y una guitarra.",
        },
        {
          forma: "texto",
          texto:
            "Grabaron durante meses, decenas y decenas de canciones. Country antiguo, himnos, cosas que Cash cantaba de niño, y también temas de gente que su público no habría reconocido: Leonard Cohen, Tom Waits, Nick Lowe, Glenn Danzig. El primer disco salió en 1994 y se llamó «American Recordings».",
        },
        {
          forma: "texto",
          texto:
            "La portada es Cash de negro, con dos perros, en un campo. El disco ganó un Grammy y le devolvió un público que no había nacido cuando él era famoso. Grabaron seis discos en total, los dos últimos publicados después de su muerte en 2003.",
        },
        {
          forma: "arte",
          texto:
            "El punto culminante llegó en 2002, con una versión de «Hurt», de Nine Inch Nails, una canción sobre la adicción escrita por un hombre de veintiséis años. Cantada por un anciano enfermo, con la voz agrietada, la letra dice otra cosa completamente distinta sin cambiar una palabra.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Trent Reznor, su autor, contó que al principio le pareció una idea rara y que al ver el vídeo se quedó sin habla. Dijo que aquella canción había dejado de ser suya. Es probablemente el mejor elogio que ha recibido nunca una versión.",
        },
        {
          forma: "texto",
          texto:
            "Ese caso enseña lo que el libro no explica bien: el trabajo de Rubin no fue creativo en el sentido de añadir, sino de decidir. Elegir qué canciones, elegir qué versión de las diez grabadas se quedaba y elegir qué se quitaba. Eso es todo, y era casi todo lo que hacía falta.",
        },
        {
          forma: "texto",
          texto:
            "El libro sí desarrolla el principio general, y lo llama de varias maneras. La idea es que casi todo lo que se hace está de más, y que la mejor pregunta que se le puede hacer a una obra terminada es qué pasa si le quito esto.",
        },
        {
          forma: "texto",
          texto:
            "Rubin propone probarlo literalmente: quitar un elemento y escuchar. Si la pieza sigue funcionando, sobraba. Y sostiene que la mayoría de las obras que no funcionan no fallan por falta de material, sino por exceso: por no haberse atrevido a tirar lo que costó hacer.",
        },
        {
          forma: "clave",
          rotulo: "El coste hundido",
          frase: "Lo más difícil de quitar no es lo malo: es lo bueno que no encaja. Y cuanto más tiempo costó hacerlo, más difícil resulta tirarlo, aunque esté estorbando.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale otro consejo suyo que sí es operativo: separar la fase de generar de la fase de juzgar. Mientras se hace, no se evalúa. Mientras se evalúa, no se hace. Mezclarlas es la forma más rápida de bloquearse, porque el crítico interno mata lo que aún no está formado.",
        },
        {
          forma: "texto",
          texto:
            "Rubin divide el proceso en cuatro fases y esa es la parte más estructurada del libro. La semilla, la experimentación, el oficio y la terminación. Cada una pide una actitud distinta y el error habitual es aplicar la actitud de una fase en otra.",
        },
        {
          forma: "texto",
          texto:
            "En la semilla se recoge sin filtrar. Todo vale, nada se descarta, no importa la calidad. Rubin insiste en que en esa fase juzgar es contraproducente, porque las semillas malas a veces contienen la buena y no se sabe cuál es hasta que crece.",
        },
        {
          forma: "texto",
          texto:
            "En la experimentación se prueba: se llevan las semillas a distintos terrenos, se combinan, se estropean a propósito. Aquí recomienda hacer versiones deliberadamente malas o extremas, porque el extremo enseña dónde están los bordes de lo que se está haciendo.",
        },
        {
          forma: "arte",
          texto:
            "En el oficio se ejecuta, y es la fase que él confiesa que menos le interesa y peor se le da. Y en la terminación hay que decidir que ya está, que según él es el momento más difícil y donde más obra buena se arruina por seguir tocándola.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Sobre terminar da un consejo práctico y bastante sensato: ponerse una fecha límite aunque sea artificial. Dice que la obra nunca está lista y que se acaba cuando alguien decide que se acaba, y que ese alguien tiene que ser el autor y no el cansancio.",
        },
        {
          forma: "texto",
          texto:
            "Y una regla de trabajo que ha adoptado mucha gente: probar dos veces con una limitación absurda. Hacerlo en veinte minutos. Hacerlo con tres elementos. Hacerlo sin la parte de la que estás más orgulloso. Las restricciones inventadas producen soluciones que la libertad no produce.",
        },
        {
          forma: "texto",
          texto:
            "Todo eso es aprovechable. Lo que ocupa la mitad restante del libro es otra cosa, y es donde el lector se divide en dos: unos encuentran el marco que les faltaba y otros encuentran una sucesión de frases bonitas sin nada debajo.",
        },
        {
          forma: "texto",
          texto:
            "Porque el corazón conceptual del libro es la idea de que el artista no inventa: recibe. Y una vez aceptada esa premisa, todo lo demás se sigue de ella con una coherencia notable, empezando por qué demonios se supone que hay que hacer para recibir algo.",
        },
      ],
    },

    {
      titulo: "La antena",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La tesis, dicha con sus palabras: las ideas no salen de dentro del artista. Existen fuera, en circulación, y el artista es un receptor. Su trabajo no consiste en generar sino en estar disponible para captar, y en no estropear lo que capta al pasarlo al mundo.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que suele darse para defender esto es la simultaneidad de los descubrimientos: el cálculo lo inventaron Newton y Leibniz por separado, la evolución la formularon Darwin y Wallace a la vez, el teléfono se patentó el mismo día en dos despachos distintos.",
        },
        {
          forma: "clave",
          rotulo: "La utilidad práctica",
          frase: "Si la idea no es tuya, el mérito no te infla y el fracaso no te hunde. Rubin sostiene que el ego es el mayor obstáculo del trabajo creativo, y esto es su antídoto.",
        },
        {
          forma: "texto",
          texto:
            "El problema evidente es que la afirmación no se puede comprobar. No hay forma de distinguir una idea recibida de una idea generada por un cerebro que ha acumulado material durante años y lo recombina mientras uno se ducha. La explicación material funciona igual de bien.",
        },
        {
          forma: "texto",
          texto:
            "Rubin no discute eso porque no le interesa. Su libro no es descriptivo: es prescriptivo. No pretende explicar cómo funciona la mente, pretende dar un marco mental que produzca mejor trabajo. Y como marco, tiene efectos observables que él ha visto durante décadas.",
        },
        {
          forma: "arte",
          texto:
            "El principal es sobre el bloqueo. Un artista que cree que las ideas salen de él vive con miedo a agotarse. Uno que cree que pasan por él vive con la tarea mucho más manejable de estar atento. La segunda historia produce menos parálisis, sea o no verdad.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "De la tesis salen las prácticas. La primera es la atención deliberada: mirar cosas sin propósito, sin buscar material. Rubin recomienda pasear, mirar el mar, observar a la gente, y expresamente no ir a buscar ideas, porque ir a buscarlas es la manera más fiable de no encontrarlas.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la reducción del ruido. Menos noticias, menos redes, menos consumo pasivo, más silencio. Su argumento no es moral sino de capacidad: la atención es limitada y la gasta lo que se mete en ella, así que elegir la dieta informativa es elegir la materia prima.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es el cuaderno. Anotar todo, sin filtrar, sin ordenar y sin releer inmediatamente. La idea es no confiar en la memoria y no juzgar en el momento de capturar, porque el juicio en ese momento descarta cosas que solo se entienden meses después.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta es la mente de principiante, un concepto tomado del zen. Consiste en acercarse a algo que ya se conoce como si fuera la primera vez. Es lo que, según él, le permite trabajar con géneros que no domina: no sabe cómo se hace, así que pregunta lo obvio.",
        },
        {
          forma: "clave",
          rotulo: "La ventaja de no saber",
          frase: "Rubin sostiene que no saber tocar es una ventaja, porque le impide oír una canción como un músico. La oye como el que la va a escuchar, que es el único oído que le importa.",
        },
        {
          forma: "texto",
          texto:
            "Ese punto es más sólido de lo que parece y tiene respaldo en la práctica de otros oficios. Un editor que no escribe novelas ve la novela como el lector. Un director que no actúa ve la interpretación desde la butaca. El experto pierde acceso a la mirada del que llega de nuevo.",
        },
        {
          forma: "texto",
          texto:
            "Rubin añade una consecuencia incómoda: la técnica, dice, tiende a llevar al artista hacia lo que sabe hacer bien. Un guitarrista virtuoso escribe canciones que le permiten lucirse, y esas suelen ser peores que las que escribiría si solo supiera tres acordes.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí una recomendación que sí se puede aplicar mañana: trabajar deliberadamente con menos herramientas de las que se dominan. Grabar con un solo micrófono. Escribir sin adjetivos. Dibujar con un solo color. La limitación obliga a resolver por el lado de la idea.",
        },
        {
          forma: "texto",
          texto:
            "Hay otro capítulo que la gente subraya siempre y que va sobre la comparación. Rubin sostiene que compararse con otros artistas es una forma de mirar hacia fuera en un trabajo que solo se puede hacer mirando hacia dentro, y que las modas son ruido con apariencia de información.",
        },
        {
          forma: "arte",
          texto:
            "Su argumento es cronológico y es bueno: cuando algo está de moda, ya es tarde. Lo que se percibe como tendencia se decidió dos años antes en el trabajo de alguien que no estaba mirando tendencias. Perseguir el momento garantiza llegar al momento siguiente con retraso.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Hay también un capítulo sobre la colaboración que contradice bastante la imagen del genio receptor. Rubin describe su papel en el estudio como el de alguien que crea las condiciones: la sala, el orden de las canciones, quién habla, cuándo se para. Casi un trabajo de anfitrión.",
        },
        {
          forma: "texto",
          texto:
            "Y cuenta que su intervención más frecuente es una pregunta: ¿te gusta? Repetida, sin juicio, hasta que el artista contesta que no. Sostiene que la mayoría de la gente sabe perfectamente qué parte de su trabajo no funciona y que solo necesita permiso para decirlo en voz alta.",
        },
        {
          forma: "texto",
          texto:
            "Ese es probablemente el consejo más útil de todo el libro y ocupa media página. Y es también un buen ejemplo del problema del volumen: para llegar a él hay que atravesar cuarenta capítulos sobre la naturaleza del universo y la energía de las cosas.",
        },
        {
          forma: "texto",
          texto:
            "Porque falta todavía la afirmación que más se ha discutido, la que aparece cerca del final y que en boca del cofundador de uno de los sellos discográficos más rentables de la historia resulta, cuando menos, llamativa.",
        },
      ],
    },

    {
      titulo: "El primer borrador malo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Uno de los capítulos más útiles se llama, en la práctica, hazlo mal primero. Rubin sostiene que el primer intento no tiene que ser bueno: tiene que existir. Su función no es ser la obra, sino darle al autor algo concreto que criticar en lugar de una página en blanco.",
        },
        {
          forma: "texto",
          texto:
            "El argumento psicológico es fino: es infinitamente más fácil mejorar algo malo que crear algo bueno. Frente a la nada, la mente no tiene dónde agarrarse. Frente a un borrador horrible, la mente sabe exactamente qué está mal, y saber qué está mal es la mitad del trabajo.",
        },
        {
          forma: "clave",
          rotulo: "El cambio de tarea",
          frase: "La página en blanco pide inventar. El borrador malo pide corregir. Corregir es una habilidad mucho más accesible, y casi todo el mundo la tiene aunque crea que no.",
        },
        {
          forma: "texto",
          texto:
            "De ahí se derivan varias reglas de trabajo. La primera: fijar un volumen mínimo diario y cumplirlo con independencia de la calidad. La cantidad, sostiene, produce calidad por acumulación, y esperar la inspiración es una manera elegante de no trabajar.",
        },
        {
          forma: "texto",
          texto:
            "La segunda: empezar por lo más pequeño posible. Si un disco parece imposible, una canción. Si una canción es demasiado, una frase. Rubin insiste en que el tamaño de la tarea que uno se plantea determina si se empieza, y que casi todo el mundo se plantea tareas demasiado grandes.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es sobre los plazos y contradice lo que muchos esperarían de él. Defiende las fechas límite, incluso las inventadas, porque la obra nunca se acaba sola. Dice que ha visto morir discos por exceso de tiempo mucho más a menudo que por falta de él.",
        },
        {
          forma: "arte",
          texto:
            "Su descripción del exceso de retoque es exacta: llega un punto en que cada cambio ya no mejora, solo cambia, y el autor está moviendo piezas para no tener que enfrentarse a que ya está. Terminar da miedo porque terminar significa exponerse a que juzguen.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Hay un capítulo sobre los hábitos que es más matizado de lo habitual en este tipo de libros. Rubin defiende la rutina como forma de reducir decisiones, y a la vez avisa de que una rutina demasiado rígida acaba produciendo siempre el mismo trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Su propuesta es rotar deliberadamente: cambiar de sitio, de hora, de herramienta cada cierto tiempo, no por capricho sino porque el entorno determina lo que se le ocurre a uno. Escribir en otro cuarto produce otras frases, y eso es comprobable en una tarde.",
        },
        {
          forma: "texto",
          texto:
            "Otro capítulo trata la relación entre estado de ánimo y trabajo, y ahí es tajante en contra del tópico romántico. Sostiene que no hace falta sufrir para crear, que el mito del artista atormentado ha hecho mucho daño y que el trabajo sostenido requiere estabilidad, no crisis.",
        },
        {
          forma: "clave",
          rotulo: "Contra el artista atormentado",
          frase: "Rubin ha trabajado con adicciones, depresiones y catástrofes personales de primera fila. Su conclusión es que la gente creó a pesar de eso, nunca gracias a eso.",
        },
        {
          forma: "texto",
          texto:
            "También hay una idea sobre el gusto que merece la pena. Dice que el gusto de una persona casi siempre va por delante de su habilidad, y que ese desfase es la causa principal del abandono: uno reconoce que lo que hace no está a la altura de lo que admira, y lo deja.",
        },
        {
          forma: "texto",
          texto:
            "Su respuesta a eso es que el desfase no es un problema, es el motor. Si el gusto no fuera superior a la habilidad, no habría hacia dónde mejorar. Lo único que hay que aceptar es que el hueco tarda años en cerrarse y que durante ese tiempo el trabajo será decepcionante.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el fracaso, su reencuadre es de los más limpios: un experimento no puede fallar. Si sale mal, la información que devuelve es tan válida como si sale bien. Solo hay fracaso si se esperaba un resultado concreto, y esperar un resultado concreto es lo que estropea la fase de prueba.",
        },
        {
          forma: "texto",
          texto:
            "Y una advertencia contra el consejo, incluido el suyo: dice que todo lo que hay en el libro son observaciones sobre lo que a él le ha funcionado, que no son reglas, y que si alguna contradice la experiencia del lector, la que vale es la del lector.",
        },
        {
          forma: "arte",
          texto:
            "Esa cláusula aparece varias veces y es honesta y también cómoda: un libro que se declara inaplicable a quien no le encaje es un libro que no se puede refutar. Es la misma estructura que la idea de la Fuente, y es la característica más discutible de todo el conjunto.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Con todo, hay una parte del método que sí es concreta y que él practica desde hace cuarenta años: escuchar la obra terminada como si fuera de otro. Dejarla reposar semanas, ponerla sin avisarse, y observar la primera reacción antes de que entre el conocimiento de cómo se hizo.",
        },
        {
          forma: "texto",
          texto:
            "Y otra: enseñársela a alguien y no mirar la obra, sino a la persona. Rubin dice que lo que la gente comenta después es mucho menos informativo que lo que hace su cara en el minuto tres. La opinión se filtra por educación; la atención no se puede fingir.",
        },
        {
          forma: "texto",
          texto:
            "Ese es un consejo de productor puro y probablemente venga de haber visto a cientos de personas escuchar maquetas en un sofá. Es también uno de los pocos momentos del libro en que se nota debajo la experiencia acumulada de un oficio concreto.",
        },
        {
          forma: "texto",
          texto:
            "Queda la afirmación final, la que da la vuelta a todo lo anterior y la que más ruido ha hecho. Está en un capítulo breve, hacia el final, y contradice de frente el negocio en el que Rick Rubin ha trabajado toda su vida.",
        },
      ],
    },

    {
      titulo: "El público va el último",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La frase es esta: el público va el último. Rubin sostiene que la obra no se hace para nadie, que consultar al oyente antes de terminar es la forma más segura de estropearla, y que la única persona a la que hay que satisfacer es a uno mismo.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento no es de pureza sino práctico. Dice que nadie sabe lo que el público quiere, ni siquiera el público, porque lo que la gente pide es siempre una variación de lo que ya conoce, y lo que acaba entusiasmándola es casi siempre algo que no habría sabido pedir.",
        },
        {
          forma: "clave",
          rotulo: "El argumento",
          frase: "Si intentas adivinar lo que gustará, produces una versión diluida de lo que ya existía. Si haces exactamente lo que te gusta a ti, al menos hay una persona en el mundo a la que le encanta.",
        },
        {
          forma: "texto",
          texto:
            "Y da un dato de su propia experiencia que sostiene la idea: los discos suyos que se convirtieron en éxitos enormes fueron, casi siempre, los que la industria consideró inviables antes de salir. Un disco de rap con guitarras. Un disco de Johnny Cash con una guitarra y nada más.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, la objeción evidente, que hay que poner sobre la mesa. Esto lo escribe el hombre que cofundó Def Jam, que dirigió Columbia Records y que ha producido algunos de los discos más vendidos de la historia. Nadie ha entendido mejor el mercado que él.",
        },
        {
          forma: "arte",
          texto:
            "El libro no explica esa tensión en ningún momento. Un lector sin carrera hecha puede seguir el consejo de ignorar al público y quedarse sin público. Rubin puede permitirse ignorarlo porque lleva cuarenta años acertando con él, y esa asimetría no aparece en ninguna página.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Esa es la primera de las cosas que fallan, y hay más. La segunda es que el libro no enseña a hacer nada. No hay ejercicios, no hay ejemplos trabajados, no hay ni un solo caso desarrollado. Es un libro sobre cómo colocarse mentalmente, no sobre cómo trabajar.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es el tono. Muchos capítulos son sucesiones de afirmaciones breves y solemnes sin argumentación. La crítica más repetida que ha recibido es que se parece a un calendario de frases inspiradoras, y en algunos tramos es difícil defenderlo de esa acusación.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta es la repetición. Setenta y ocho capítulos para unas ocho o diez ideas. La idea de la atención aparece cinco veces con distinta ropa; la de quitar, otras tantas. Un lector que subraye descubrirá que ha subrayado la misma frase en tres sitios distintos.",
        },
        {
          forma: "texto",
          texto:
            "Y la quinta, la de fondo: la Fuente. Colocar el origen de las ideas fuera del artista es una decisión metafísica presentada como observación. Rubin no la argumenta ni la contrasta con nada, y el lector que no la compre tiene que releer medio libro traduciendo.",
        },
        {
          forma: "clave",
          rotulo: "La traducción posible",
          frase: "Donde él dice «sintonizar con la Fuente», se puede leer «acumular material durante años y darle a la cabeza tiempo y silencio para recombinarlo». Casi todos los consejos siguen funcionando.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por lo más común: no son unas memorias. Quien lo compre buscando la historia de Def Jam, de los Beastie Boys o de las sesiones con Cash no va a encontrar prácticamente nada de eso.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: que sea un libro de música. No lo es en ningún sentido. No hay términos técnicos, no hay estudio, no hay instrumentos. Está escrito para que lo lea un fotógrafo, un cocinero o alguien que monta una empresa, y esa era la intención declarada.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: mucha gente asume que Rubin es productor en el sentido técnico. No lo es. No manipula el sonido. Lo que hace es escuchar, elegir y quitar, y ese trabajo tiene más que ver con la dirección y la edición que con la ingeniería.",
        },
        {
          forma: "arte",
          texto:
            "Los músicos que han trabajado con él lo describen con la misma imagen una y otra vez: un hombre descalzo, tumbado, con los ojos cerrados, que a veces no dice nada en toda la tarde. Anthony Kiedis contó que al principio pensó que se había dormido.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Y el cuarto malentendido: que el libro proponga esperar la inspiración. Propone exactamente lo contrario. Volumen diario, plazos, primer borrador malo, terminar aunque no esté perfecto. Debajo del lenguaje místico hay una ética de trabajo bastante dura.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda, si se descuenta la repetición y la metafísica, cabe en una página: presta atención a lo que te interesa de verdad, acumula sin juzgar, haz mucho y mal antes de hacer poco y bien, quita todo lo que no sostenga la pieza, y decide tú cuándo está terminada.",
        },
        {
          forma: "texto",
          texto:
            "No es original y él tampoco lo pretende. Lo que aporta es la autoridad de alguien que lo ha aplicado durante cuarenta años en géneros incompatibles entre sí, y la prueba concreta de un hombre de sesenta y un años sentado en un salón con una guitarra prestada.",
        },
        {
          forma: "texto",
          texto:
            "Porque esa es, al final, la mejor defensa del libro. Cash llevaba una década enterrado bajo arreglos, coros y decisiones comerciales tomadas por otros. Alguien le quitó todo eso y grabó lo que quedaba. Y lo que quedaba resultó ser la mejor música de su vida.",
        },
      ],
    },
  ],
};

export const CAMINO_ARTISTA: Resumen = {
  id: "camino-artista",
  titulo: "El camino del artista",
  autor: "Julia Cameron",
  ano: 1992,
  gancho: "Dejó de beber a los treinta años convencida de que el alcohol era lo que la hacía escribir. Descubrió que era al revés y montó un curso de doce semanas.",
  porQue:
    "Es el libro que ha desbloqueado a más gente creativa que ningún otro, y su herramienta principal cabe en tres folios y un bolígrafo.",
  partes: [
    {
      titulo: "El día que dejó de beber",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Nuevo México, 1978. Una periodista de treinta años acaba de dejar el alcohol. Ha escrito para Rolling Stone y para el Washington Post, ha estado casada con un director de cine y tiene una hija pequeña. Y está aterrorizada por una razón muy concreta.",
        },
        {
          forma: "texto",
          texto:
            "Está convencida de que el alcohol era la fuente de su talento. Que escribía porque bebía. Que sin la botella no va a salir nada. Se llamaba Julia Cameron y llevaba años oyendo el mito del escritor que bebe, aplicado a sí misma.",
        },
        {
          forma: "clave",
          rotulo: "Lo que descubrió",
          frase: "Sobria escribía más y mejor. El alcohol no había alimentado nada: había ido tapando el miedo a escribir mal, y de paso le había robado años de trabajo.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale todo el libro. Cameron empezó a dar clases para gente bloqueada creativamente, primero en su casa y después en talleres en Nueva York y en Los Ángeles. El material circuló durante años fotocopiado antes de que ninguna editorial lo quisiera.",
        },
        {
          forma: "texto",
          texto:
            "Se publicó en 1992 y lleva vendidos más de cinco millones de ejemplares. Lo han usado guionistas de Hollywood, novelistas premiados, músicos y una enorme cantidad de gente que no se dedica al arte y que simplemente había dejado de hacer algo que le importaba.",
        },
        {
          forma: "texto",
          texto:
            "La tesis de partida es la que más incomoda y la más útil: la creatividad no es un don que unos tienen y otros no. Es una capacidad ordinaria que casi todo el mundo tuvo de niño y que se pierde por una acumulación de comentarios, miedos y decisiones prácticas.",
        },
        {
          forma: "arte",
          texto:
            "Cameron no habla de aprender a crear, habla de desbloquear. Su diagnóstico es que casi nadie está vacío: está tapado. Y su curso no es un curso de técnica sino un procedimiento para quitar lo que hay encima, que suele ser vergüenza y miedo a ser mediocre.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "El libro está organizado como un curso de doce semanas, con un capítulo por semana, unas tareas al final de cada uno y una lista de comprobación. La estructura es deliberada y su origen es explícito: los doce pasos de Alcohólicos Anónimos.",
        },
        {
          forma: "texto",
          texto:
            "Cameron nunca lo ha ocultado. Ella salió de la adicción con ese programa y trasladó el molde: doce etapas, una entrega diaria, un poder superior, una comunidad y la idea de que la voluntad sola no basta. Quien reconozca la estructura entenderá la mitad del libro.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí viene también el aspecto que más lectores expulsa. El libro habla de Dios, del Gran Creador y de una energía que fluye a través de uno. Cameron avisa en el prólogo de que si esas palabras molestan, se sustituyan por cualquier otra, pero no las quita.",
        },
        {
          forma: "clave",
          rotulo: "El aviso",
          frase: "Quien no soporte el vocabulario espiritual va a tener que traducir cada dos páginas. La alternativa es leerlo como una descripción del inconsciente y de la costumbre, y funciona casi igual.",
        },
        {
          forma: "texto",
          texto:
            "El diagnóstico central se llama el Censor. Es la voz interna que evalúa mientras se está produciendo, que compara lo que está saliendo con lo que debería salir, y que consigue que la mayoría de la gente abandone antes de terminar el primer intento.",
        },
        {
          forma: "texto",
          texto:
            "Cameron sostiene, y esto sí lo respalda la práctica de cualquier oficio creativo, que generar y juzgar son dos operaciones incompatibles. Hacerlas a la vez produce parálisis, y casi todo el bloqueo creativo consiste exactamente en eso: intentar hacerlas a la vez.",
        },
        {
          forma: "texto",
          texto:
            "Su remedio no es silenciar al Censor, porque no se puede. Es distraerlo. Todo el curso consiste en herramientas para que ese vigilante mire hacia otro lado el tiempo suficiente para que algo salga a la superficie sin ser evaluado en el trayecto.",
        },
        {
          forma: "arte",
          texto:
            "Y hay una idea que atraviesa el libro entero y que explica por qué ha funcionado con tanta gente: el bloqueo casi nunca es falta de ideas. Es miedo. Miedo a hacerlo mal, a que se rían, a descubrir que uno no vale, y a lo que pasaría si de verdad valiera.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Esa última parte es la más fina. Cameron insiste en que mucha gente teme el éxito tanto como el fracaso, porque el éxito obliga a seguir, a exponerse y a cambiar la vida entera. No hacer nada protege de las dos cosas y permite conservar intacta la fantasía.",
        },
        {
          forma: "texto",
          texto:
            "Contra todo eso propone dos herramientas y solo dos. Todo el resto del libro son variaciones, tareas y advertencias, pero el método cabe en dos prácticas que hay que hacer sin fallar durante doce semanas.",
        },
        {
          forma: "texto",
          texto:
            "La primera es diaria, cuesta unos treinta minutos y se hace nada más levantarse. La segunda es semanal, dura una o dos horas y hay que hacerla completamente solo, sin ninguna compañía, cosa que resulta ser mucho más difícil de lo que suena.",
        },
        {
          forma: "texto",
          texto:
            "La primera se ha convertido en la contribución más conocida de este libro, hasta el punto de que mucha gente la practica sin haber leído una página y sin saber de dónde salió.",
        },
        {
          forma: "texto",
          texto:
            "Consiste en escribir tres folios a mano, cada mañana, sin parar, sin corregir y sin releer. Y Cameron es tajante en una cosa que casi todo el mundo entiende mal: eso no es escribir. No es un diario, no es literatura y no tiene que ser bueno.",
        },
      ],
    },

    {
      titulo: "Tres páginas a mano",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Las reglas son estrictas y son pocas. Tres páginas, siempre tres. A mano, nunca en ordenador. Nada más levantarse, antes de mirar el móvil, antes del café si es posible. Sin parar a pensar y sin corregir. Y sin releerlas durante ocho semanas.",
        },
        {
          forma: "texto",
          texto:
            "Se escribe lo que haya. Que no se te ocurre nada. Que tienes sueño. La lista de la compra. Que tu jefe es idiota. Que no sabes por qué estás haciendo esto. Cameron insiste en que el contenido da exactamente igual: lo que importa es que la mano no pare.",
        },
        {
          forma: "clave",
          rotulo: "Para qué sirve",
          frase: "No es para producir material. Es para vaciar el ruido de la superficie —las preocupaciones, las listas, los reproches— y llegar al fondo, que es donde está lo que sirve.",
        },
        {
          forma: "texto",
          texto:
            "La imagen que usa es la de un desagüe atascado. Las primeras dos páginas suelen ser basura mental: lo que hay que hacer hoy, lo que pasó ayer, lo que duele. Y hacia la tercera, cuando ya no queda queja disponible, empieza a aparecer otra cosa.",
        },
        {
          forma: "texto",
          texto:
            "El detalle de escribir a mano no es nostalgia. Cameron sostiene que la mano es más lenta que la cabeza y que esa lentitud impide el modo de edición: no se puede volver atrás, no se puede borrar, no se puede reordenar. El teclado permite todo eso y por eso no vale.",
        },
        {
          forma: "texto",
          texto:
            "Y el detalle de la mañana tampoco es capricho. La idea es escribir antes de que la vigilancia se ponga en marcha, con la mente todavía a medio despertar, cuando el Censor aún no ha llegado a su puesto y no revisa nada de lo que sale.",
        },
        {
          forma: "arte",
          texto:
            "Lo de no releerlas en ocho semanas es la regla que más gente incumple y probablemente la más importante. Si uno sabe que va a releerse, escribe para ese lector futuro. En cuanto hay lector, hay actuación, y en cuanto hay actuación se acabó el volcado.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Cameron llega a recomendar meterlas en un sobre, en una caja o en un cajón que no se abra. Algunas ediciones sugieren directamente tirarlas. Lo que se busca no es un archivo: es el efecto de haberlas escrito, que ocurre durante y no después.",
        },
        {
          forma: "texto",
          texto:
            "¿Qué respaldo tiene esto? Ninguno directo: nadie ha hecho un ensayo clínico sobre las páginas matutinas. Lo que sí existe es una literatura amplia sobre escritura expresiva, iniciada por el psicólogo James Pennebaker en los años ochenta, que apunta en una dirección parecida.",
        },
        {
          forma: "texto",
          texto:
            "Aquellos estudios encontraron que escribir sobre experiencias difíciles durante quince o veinte minutos, varios días seguidos, se asociaba a mejoras medibles en indicadores de salud y de estado de ánimo. No es lo mismo que las páginas matutinas, pero es su pariente más cercano.",
        },
        {
          forma: "clave",
          rotulo: "El efecto secundario",
          frase: "Mucha gente cuenta que a las tres semanas empieza a tomar decisiones que llevaba años posponiendo. Cameron lo atribuye a la claridad; el mecanismo probablemente sea más simple: enunciar algo cada día lo vuelve imposible de seguir ignorando.",
        },
        {
          forma: "texto",
          texto:
            "También avisa de lo que va a pasar y conviene saberlo. Las páginas producen resistencia. Habrá días de escribir tres folios de quejas sobre tener que escribir tres folios. Cameron dice que esos días son tan válidos como los demás y que a menudo son los que más mueven.",
        },
        {
          forma: "texto",
          texto:
            "Y avisa de una trampa: querer que sean buenas. En cuanto alguien empieza a escribir bonito en las páginas matutinas, ha dejado de hacer el ejercicio. Deben ser malas, torpes, repetitivas y aburridas. Su calidad es exactamente irrelevante.",
        },
        {
          forma: "texto",
          texto:
            "La segunda herramienta se llama la cita con el artista y es la que casi todo el mundo se salta. Consiste en dedicar entre una y dos horas a la semana, en solitario absoluto, a hacer algo que llame la atención de la parte curiosa y juguetona de uno mismo.",
        },
        {
          forma: "texto",
          texto:
            "Los ejemplos que da son deliberadamente triviales: ir a una tienda de telas y tocar los tejidos, entrar en un acuario, pasear por un mercado, mirar escaparates de ferretería, ir a un museo pequeño. No hace falta que sea artístico y no debe ser productivo.",
        },
        {
          forma: "arte",
          texto:
            "La regla dura es la soledad. Sin pareja, sin amigos, sin hijos. Cameron insiste porque en cuanto hay otra persona la experiencia se convierte en una conversación, y lo que se busca es precisamente el rato sin conversación, que casi nadie tiene ya.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Su justificación es de economía sencilla y es lo más convincente del libro: si las páginas matutinas son el desagüe, la cita con el artista es el grifo. Se escribe con lo que se ha metido dentro, y quien no mete nada acaba escribiendo sobre lo que ya escribió.",
        },
        {
          forma: "texto",
          texto:
            "Lo llama llenar el pozo. Y sostiene que la sequedad creativa que la gente interpreta como falta de talento es casi siempre falta de material fresco: semanas o meses consumiendo lo mismo, viendo lo mismo y hablando con las mismas personas.",
        },
        {
          forma: "texto",
          texto:
            "Cameron señala además que las citas con el artista producen una resistencia mucho mayor que las páginas. La gente escribe los tres folios y luego no encuentra la hora semanal. Y su interpretación de por qué pasa eso es la parte más incisiva del libro.",
        },
        {
          forma: "texto",
          texto:
            "Porque escribir tres páginas puede justificarse como trabajo. Pasear solo dos horas mirando telas no se puede justificar de ninguna manera, y ahí es donde aparece la creencia de fondo: que uno no merece tiempo que no produzca nada.",
        },
      ],
    },

    {
      titulo: "La cita con el artista",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El capítulo sobre la culpa es de los mejores. Cameron sostiene que mucha gente bloqueada no tiene un problema de tiempo sino de permiso: podría sacar las horas, y no se autoriza a gastarlas en algo que no rinde, que no cobra y que a nadie le importa.",
        },
        {
          forma: "texto",
          texto:
            "Y hace notar una asimetría curiosa: esa misma persona sí se autoriza a pasar dos horas viendo una serie. La diferencia es que ver una serie no expone a nada, y sentarse a escribir sí. La culpa por el tiempo suele ser miedo disfrazado de responsabilidad.",
        },
        {
          forma: "clave",
          rotulo: "Los artistas en la sombra",
          frase: "Gente que ha organizado su vida entera alrededor del arte sin hacer arte. El agente que quería escribir. El crítico que quería pintar. El profesor que quería componer.",
        },
        {
          forma: "texto",
          texto:
            "Es un concepto muy fino y probablemente el más reconocible del libro. Cameron sostiene que es una posición estable y cómoda: se está cerca de lo que se ama, se participa, se entiende, y no se corre nunca el riesgo de que juzguen algo propio.",
        },
        {
          forma: "texto",
          texto:
            "Y añade el rasgo que los delata: suelen ser durísimos juzgando el trabajo ajeno. Cuanto más severo es alguien con la obra de otros, más probable es que esté midiéndola contra la que él no se ha atrevido a hacer nunca.",
        },
        {
          forma: "texto",
          texto:
            "El origen, según ella, casi siempre está en un episodio concreto y antiguo. Un profesor que se rió de un dibujo. Un padre que dijo que de eso no se come. Un comentario en clase a los once años. Cameron dedica varias tareas a rastrear esos episodios por escrito.",
        },
        {
          forma: "arte",
          texto:
            "Es la parte más terapéutica del libro y la que más se le ha discutido. Cameron no es psicóloga y sin embargo propone ejercicios de recuperación de heridas de infancia con bastante desenvoltura. A quien tenga algo serio ahí, esto no le va a bastar y puede removerle.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Otro concepto suyo que ha hecho fortuna es el de los locos, en el original crazymakers: personas que absorben la energía y el tiempo de los demás con crisis continuas, urgencias inventadas y demandas de atención permanente.",
        },
        {
          forma: "texto",
          texto:
            "Los describe con precisión: rompen los planes de los demás, esperan disponibilidad total, crean dramas y luego los abandonan, y suelen ser personas encantadoras. Cameron sostiene que un bloqueado los busca inconscientemente, porque dan una excusa perfecta para no trabajar.",
        },
        {
          forma: "texto",
          texto:
            "Ahí está una de las críticas más serias al libro. Ese capítulo se ha leído muchas veces como una autorización para etiquetar a familiares y amigos difíciles y apartarlos. Cameron no lo dice exactamente, pero el marco lo permite con mucha facilidad.",
        },
        {
          forma: "clave",
          rotulo: "La objeción",
          frase: "Es cómodo explicar por qué uno no crea señalando a la gente que tiene alrededor. Cameron da un vocabulario para hacerlo, y ese vocabulario se puede usar para exactamente lo contrario de lo que ella pretendía.",
        },
        {
          forma: "texto",
          texto:
            "El libro habla también del dinero, y ahí es más práctico de lo que se espera. Rechaza el mito del artista que debe pasar hambre y sostiene que la pobreza no purifica nada. Recomienda tener ingresos estables y no depender del arte para pagar el alquiler.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento es que la necesidad económica es el peor asesor artístico posible: obliga a producir para vender, a aceptar encargos que no interesan y a terminar antes de tiempo. Un trabajo aburrido puede proteger la obra mejor que un mecenas.",
        },
        {
          forma: "texto",
          texto:
            "Hay un capítulo sobre la comparación y los celos que aporta una idea aprovechable. Cameron propone tratar la envidia como información: si la carrera de alguien te da rabia, esa rabia está señalando con precisión lo que tú quieres y no te estás permitiendo.",
        },
        {
          forma: "texto",
          texto:
            "Y propone un ejercicio concreto: hacer una lista de a quién se envidia, de qué exactamente, y qué paso pequeño se podría dar esta semana en esa dirección. Convertir un sentimiento incómodo en una lista de tareas es lo más útil que hay en todo el libro.",
        },
        {
          forma: "arte",
          texto:
            "También insiste en un principio de tamaño: empezar siempre por lo mínimo. No escribir una novela, escribir una página. No aprender piano, tocar quince minutos. Cameron sostiene que el tamaño de la meta declarada es el mejor predictor de que no se empiece nunca.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Otra idea suya que ha calado: la creatividad no requiere permiso ni credenciales. No hace falta ser artista para hacer algo. La palabra artista, dice, es un sustantivo que nos ha impedido usar el verbo, y la gente espera a merecer el título para empezar a practicar.",
        },
        {
          forma: "texto",
          texto:
            "Y el mito que más ataca es el del rayo: la idea de que hay que esperar a estar inspirado. Su posición es la de cualquier profesional del oficio: la inspiración aparece trabajando, y quien la espera antes de empezar se pasa la vida esperando.",
        },
        {
          forma: "texto",
          texto:
            "Sobre eso monta una regla que repite mucho: es más fácil actuar hacia una nueva forma de pensar que pensar hacia una nueva forma de actuar. Primero se hace, después se entiende, y no al revés. Es lo mismo que sostiene cualquier terapia conductual.",
        },
        {
          forma: "texto",
          texto:
            "Todo eso se organiza en doce semanas con nombres que suenan a manual de autoayuda, y ahí está la parte del libro que más discusión ha generado, empezando por si esa estructura tiene alguna razón de ser más allá de imitar un programa de desintoxicación.",
        },
      ],
    },

    {
      titulo: "Los artistas en la sombra",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Cada una de las doce semanas tiene un tema —recuperar la sensación de seguridad, de identidad, de poder, de integridad, de posibilidad, de abundancia— y termina con entre cinco y diez tareas y una lista de comprobación con tres preguntas fijas.",
        },
        {
          forma: "texto",
          texto:
            "Las preguntas son siempre las mismas y son buenas: cuántos días has hecho las páginas, has hecho la cita con el artista, y ha ocurrido esta semana algo que consideres significativo para tu recuperación. Es un sistema de seguimiento minúsculo y funciona.",
        },
        {
          forma: "clave",
          rotulo: "El origen de la estructura",
          frase: "Doce semanas por los doce pasos. Una entrega diaria, un poder superior, una comunidad, un inventario personal. Cameron no lo esconde: adaptó el programa que la sacó del alcohol.",
        },
        {
          forma: "texto",
          texto:
            "Ese origen explica sus virtudes y sus defectos a la vez. La virtud: es un método probado para cambiar una conducta sostenida, con práctica diaria, hitos y rendición de cuentas. El defecto: importa un marco espiritual que muchos lectores no comparten.",
        },
        {
          forma: "texto",
          texto:
            "Las tareas son de calidad muy desigual. Algunas son excelentes: listar veinte cosas que te gusta hacer y mirar cuándo las hiciste por última vez, o escribir tu propia biografía por décadas y marcar en qué momento dejaste de hacer algo que te importaba.",
        },
        {
          forma: "texto",
          texto:
            "Otras son claramente prescindibles: escribir cartas al niño que fuiste, redactar afirmaciones positivas, imaginar vidas alternativas. Cameron reconoce que no todas funcionan para todo el mundo y recomienda hacer al menos la mitad de cada semana.",
        },
        {
          forma: "arte",
          texto:
            "Y hay una tarea que casi todos los lectores mencionan como la más dura: la privación de lectura. Durante una semana, no leer absolutamente nada. Ni libros, ni prensa, ni pantallas. La idea es que el ruido de entrada tapa la señal propia.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Escrita en 1992 esa tarea era exigente. Hoy, con el móvil, es prácticamente imposible de cumplir, y precisamente por eso es más reveladora: la mayoría descubre a las tres horas cuánto tiempo dedicaba a consumir palabras ajenas sin haberlo decidido.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla, que falla en cosas concretas. La primera y más citada: el vocabulario espiritual. Dios, el Gran Creador, la energía que fluye, la sincronicidad. Cameron avisa y ofrece sustituir las palabras, pero el marco entero está construido sobre ellas.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es de contenido: no hay nada sobre técnica. Ni una línea sobre cómo escribir mejor, componer mejor o dibujar mejor. Es un libro sobre empezar y sostener, no sobre mejorar. Quien ya trabaja con regularidad no va a encontrar aquí gran cosa.",
        },
        {
          forma: "clave",
          rotulo: "El público real",
          frase: "Funciona con quien está parado. Con quien ya produce, sirve de poco. Y el propio libro no lo aclara, así que mucha gente lo lee esperando lo que no ofrece.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es la ausencia de evidencia. Las páginas matutinas no se han estudiado. Lo que hay es investigación adyacente sobre escritura expresiva, y no es lo mismo. Cameron presenta sus herramientas con una seguridad que los datos disponibles no respaldan.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta es el tono. Hay tramos de sensiblería considerable, mayúsculas emotivas y citas inspiradoras al margen de cada página. A un lector alérgico a ese registro le va a costar llegar al capítulo cuatro, y lo que hay debajo merece la pena.",
        },
        {
          forma: "texto",
          texto:
            "Y la quinta, ya mencionada: el capítulo de los locos puede leerse como permiso para culpar al entorno. Es la parte del libro con mayor potencial de hacer daño, y también la que más lectores citan como reveladora, lo cual dice algo sobre lo cómodo del diagnóstico.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una crítica de fondo que se le ha hecho desde la psicología: el libro trata como bloqueo creativo cosas que a veces son depresión, ansiedad o duelo. Tres folios a mano no son un tratamiento, y presentarlos como solución universal tiene un coste.",
        },
        {
          forma: "arte",
          texto:
            "Cameron sí avisa, en un par de párrafos, de que quien esté pasando algo grave debería buscar ayuda profesional. Es una advertencia breve dentro de un libro largo que promete recuperación, y esa desproporción es un defecto real de diseño.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por lo más común: las páginas matutinas no son un diario. No se releen, no se ordenan, no se escriben para nadie y no tienen que tener sentido. Convertirlas en diario es dejar de hacer el ejercicio.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: no es un libro solo para artistas. La mayoría de sus lectores no se dedica al arte. Funciona igual con alguien que quiere volver a tocar la guitarra, montar un negocio o retomar unos estudios. La palabra artista del título ha ahuyentado a mucha gente.",
        },
        {
          forma: "texto",
          texto:
            "Y tercero: la herramienta que la gente considera secundaria es la que Cameron considera decisiva. Las páginas se hacen porque son un deber reconocible. La cita con el artista se salta porque parece un capricho, y es la que llena el pozo del que se saca todo lo demás.",
        },
        {
          forma: "texto",
          texto:
            "Queda por decir qué pasa después de las doce semanas, y ahí el libro tiene una respuesta que es a la vez su mejor frase y su mayor acto de fe.",
        },
      ],
    },

    {
      titulo: "Salta y aparecerá la red",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La frase es esta: salta y la red aparecerá. Cameron la repite varias veces y la usa como cierre del curso. Es la idea de que la certeza no llega antes de moverse, y de que esperar a tenerla es la forma más eficaz de no moverse nunca.",
        },
        {
          forma: "texto",
          texto:
            "Como consejo vital es discutible y ella lo sabe. Como descripción de cómo funciona empezar algo es bastante exacta: casi nadie tiene claro que su proyecto va a salir bien antes de empezarlo, y la claridad aparece a mitad de camino o no aparece.",
        },
        {
          forma: "clave",
          rotulo: "La versión honesta",
          frase: "No es que el universo te sostenga si saltas. Es que el noventa por ciento de la información que necesitas para decidir solo existe después de haber empezado, y desde el borde no se puede obtener.",
        },
        {
          forma: "texto",
          texto:
            "Cameron habla mucho de sincronicidad: de que en cuanto uno empieza a moverse, aparecen oportunidades, personas y coincidencias que antes no estaban. Lo atribuye a una fuerza espiritual. Hay una explicación más terrenal y probablemente igual de válida.",
        },
        {
          forma: "texto",
          texto:
            "Quien empieza un proyecto habla de él, y hablar de él activa contactos. Además cambia lo que percibe: las oportunidades relacionadas con lo que uno está haciendo dejan de pasar desapercibidas. No aparece más mundo; se activa un filtro distinto.",
        },
        {
          forma: "texto",
          texto:
            "El libro termina insistiendo en que las dos herramientas se mantienen de por vida. Cameron lleva más de cuarenta años haciendo las páginas matutinas todos los días. Ha publicado más de cuarenta libros, entre novela, poesía, ensayo, teatro y guion.",
        },
        {
          forma: "arte",
          texto:
            "Ese dato es su mejor argumento y no aparece nunca en el libro. La mujer que en 1978 creía que sin alcohol no volvería a escribir una línea ha publicado, sobria, cuarenta títulos en cuarenta y cinco años. La prueba de concepto es su propia bibliografía.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Conviene también decir qué no fue. Su matrimonio con Martin Scorsese duró poco más de un año y la relación con Hollywood le dejó bastante amargura, que asoma en varios capítulos cuando habla de industrias que consumen artistas y los escupen.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un dato que ayuda a leer el libro con la distancia adecuada: durante años, el propio libro le impidió ser tomada en serio como escritora. Se convirtió en la señora de las páginas matutinas, y sus novelas y su poesía quedaron enterradas bajo el fenómeno.",
        },
        {
          forma: "texto",
          texto:
            "El éxito llegó además muy despacio. Ninguna editorial grande lo quiso; se publicó con una tirada modesta y creció durante años por recomendación boca a boca, sobre todo entre guionistas de Los Ángeles. Tardó casi una década en ser un éxito de ventas.",
        },
        {
          forma: "clave",
          rotulo: "La recomendación práctica",
          frase: "Si el vocabulario espiritual estorba, hacer solo las dos herramientas durante tres meses y saltarse el resto del libro. Ahí está el noventa por ciento del valor.",
        },
        {
          forma: "texto",
          texto:
            "Y para quien las quiera probar sin comprar nada: tres folios a mano al levantarse, cada día, sin releer, más una hora a la semana en solitario haciendo algo inútil y curioso. Eso es el método completo. Todo lo demás son doce semanas de andamiaje.",
        },
        {
          forma: "texto",
          texto:
            "Cameron ha escrito varias continuaciones —sobre el dinero, sobre escribir, sobre envejecer, sobre caminar— y ninguna ha aportado nada nuevo de peso. Es un caso claro de libro único: dio con dos herramientas buenas y lleva treinta años reformulándolas.",
        },
        {
          forma: "texto",
          texto:
            "Su influencia práctica, en cambio, es enorme y bastante invisible. Buena parte de los consejos que circulan hoy sobre escritura diaria, sobre no editar mientras se escribe y sobre proteger tiempo para pasear vienen, directa o indirectamente, de este libro.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una idea suya que ha resistido especialmente bien el paso de treinta años: que la creatividad es un asunto de cantidad antes que de calidad, y que la única variable que un principiante controla de verdad es cuántas veces se sienta a hacerlo.",
        },
        {
          forma: "arte",
          texto:
            "Eso coincide con lo que dicen casi todos los oficios. El que hace muchas piezas malas acaba haciendo alguna buena; el que espera a hacer una buena no hace ninguna. Cameron llegó a esa conclusión desde el otro lado, saliendo de una adicción, y da igual: es la misma.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El balance justo es este: es un libro con un vocabulario que echará atrás a mucha gente, con capítulos flojos y con una promesa terapéutica que excede lo que puede cumplir, y con dos herramientas que funcionan y que han desatascado a millones de personas.",
        },
        {
          forma: "texto",
          texto:
            "Cameron insiste en que no hay que creerse nada de lo que dice y que lo único que pide son doce semanas de práctica. Es una posición honrada: propone un experimento con un coste bajo y un plazo definido, y deja el juicio para después de haberlo hecho.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una frase suya, mucho menos famosa que la de la red, que es la que mejor resume el libro entero: no se trata de que llegues a ser un artista, se trata de que dejes de impedírtelo.",
        },
        {
          forma: "texto",
          texto:
            "Esa es, en el fondo, la única promesa que hace y la única que puede cumplir. No enseña a hacer nada. Quita cosas de en medio. Y para una cantidad enorme de gente que llevaba años sin empezar, resultó que era exactamente lo que hacía falta.",
        },
      ],
    },
  ],
};

export const DIARIOS_FRIDA: Resumen = {
  id: "diarios-frida",
  titulo: "El diario de Frida Kahlo",
  autor: "Frida Kahlo",
  ano: 1995,
  gancho: "Ciento setenta páginas que nunca quiso que se publicaran. Se editaron en facsímil cuarenta y un años después de su muerte, con las manchas incluidas.",
  porQue:
    "Porque es el documento más íntimo del arte del siglo XX, y porque leerlo obliga a preguntarse qué derecho tiene nadie a leer el cuaderno privado de una muerta.",
  partes: [
    {
      titulo: "El pasamanos",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Ciudad de México, 17 de septiembre de 1925, a media tarde. Un autobús de madera recién estrenado circula por la calzada de Tlalpan. Dentro va una chica de dieciocho años que vuelve de clase con su novio. Se llama Frida Kahlo y estudia para entrar en Medicina.",
        },
        {
          forma: "texto",
          texto:
            "Un tranvía embiste el autobús por el costado. El vehículo se dobla y se rompe. Un pasamanos de hierro entra por el costado izquierdo de Frida y sale por su pelvis. En el mismo golpe se revienta un paquete de polvo de oro que llevaba otro pasajero.",
        },
        {
          forma: "clave",
          rotulo: "La imagen que ella contó siempre",
          frase: "Quedó desnuda, empalada por una barra de hierro y cubierta de polvo de oro. Alguien gritó que había que sacarle la barra. Se la sacaron ahí mismo, en la calle, y ella dijo que ese fue el peor dolor.",
        },
        {
          forma: "texto",
          texto:
            "El parte médico es una enumeración: columna vertebral fracturada en tres puntos, clavícula rota, dos costillas, pelvis rota en tres sitios, pierna derecha con once fracturas, pie derecho aplastado, hombro dislocado. Estuvo un mes en el hospital y meses más en cama.",
        },
        {
          forma: "texto",
          texto:
            "Ya venía con daños. A los seis años había tenido poliomielitis, que le dejó la pierna derecha más delgada y más corta. En el colegio la llamaban Frida la coja. Ella se ponía varios calcetines y un zapato con alza, y jugaba al fútbol para demostrar que podía.",
        },
        {
          forma: "texto",
          texto:
            "Tras el accidente vinieron más de treinta operaciones a lo largo de su vida. Corsés de yeso, de cuero y de acero que tenía que llevar meses seguidos. Períodos enteros inmovilizada boca arriba. El dolor no se le fue nunca del todo en los veintinueve años que le quedaban.",
        },
        {
          forma: "arte",
          texto:
            "Y ahí ocurre lo que convierte una desgracia en una obra: su madre mandó construir un caballete especial que se podía usar tumbada, y colocó un espejo en el dosel de la cama. Frida empezó a pintar en 1926, en la cama, y el único modelo disponible era ella misma.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Esa es la explicación práctica de por qué alrededor de un tercio de su obra son autorretratos, y ella lo dijo así: se pintaba a sí misma porque estaba mucho tiempo sola y porque era el tema que mejor conocía. No hay ninguna teoría detrás, hay un espejo en un techo.",
        },
        {
          forma: "texto",
          texto:
            "Pintó en toda su vida unas ciento cuarenta y tres obras. Es una cantidad pequeña para una pintora de su fama, y la razón también es física: hubo temporadas largas en las que no podía sostener un pincel, y otras en las que estaba en un hospital.",
        },
        {
          forma: "texto",
          texto:
            "El diario del que trata este libro es muy posterior. Lo llevó los últimos diez años de su vida, entre 1944 y 1954, y son unas ciento setenta páginas de un cuaderno con tapas rojas, escritas y pintadas con tinta, acuarela, lápices de colores y lo que hubiera a mano.",
        },
        {
          forma: "clave",
          rotulo: "Qué clase de objeto es",
          frase: "No es un libro. Es un cuaderno privado publicado en facsímil en 1995, cuarenta y un años después de su muerte, con las manchas, los tachones, las páginas ilegibles y los dibujos hechos encima del texto.",
        },
        {
          forma: "texto",
          texto:
            "No está ordenado por fechas. Muy pocas entradas llevan una. No hay narración, no hay relato de los días y no hay explicación de nada. Hay listas de palabras, cartas de amor que nunca envió, manchas de tinta convertidas en figuras, consignas políticas y frases sueltas.",
        },
        {
          forma: "texto",
          texto:
            "Una parte considerable procede de un juego surrealista: dejar caer una gota de tinta, doblar la hoja y ver qué aparece. Frida hacía eso y luego dibujaba encima lo que había visto: caras, animales, pies, ojos. Después escribía alrededor de la figura.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí conviene aclarar algo que ella repitió toda su vida y que casi nadie respeta. Los surrealistas franceses la reclamaron como una de los suyos. André Breton escribió sobre ella y organizó su exposición en París en 1939. Frida los detestaba.",
        },
        {
          forma: "arte",
          texto:
            "Su frase sobre el asunto es de las más citadas y de las peor entendidas: dijo que nunca pintó sueños, que pintó su propia realidad. No era una boutade. Cuando pintaba un aborto o una columna rota, estaba pintando lo que le había pasado la semana anterior.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "De los surrealistas parisinos dejó escrito, en una carta desde París, que eran unos intelectuales podridos, que se pasaban el día en los cafés discutiendo y que no le interesaban en absoluto. Volvió a México en cuanto pudo.",
        },
        {
          forma: "texto",
          texto:
            "El diario recoge también otra cosa que la iconografía de camiseta suele borrar: era comunista militante. Se afilió al Partido Comunista Mexicano en los años veinte, y en las páginas del cuaderno hay retratos de dirigentes, consignas y declaraciones políticas explícitas.",
        },
        {
          forma: "texto",
          texto:
            "Una de las últimas entradas del cuaderno es una declaración de fe política y de agradecimiento por haber podido dedicar su obra al partido. La mujer que hoy aparece en bolsos y en tazas escribió eso en su cuaderno privado semanas antes de morir.",
        },
        {
          forma: "texto",
          texto:
            "Pero el asunto que ocupa más páginas del diario no es la política, ni la enfermedad, ni la pintura. Es un hombre veinte años mayor que ella, con el que se casó dos veces, del que se divorció una y con el que mantuvo la relación más documentada del arte mexicano.",
        },
        {
          forma: "texto",
          texto:
            "Su madre dijo de aquella boda que era el matrimonio de un elefante y una paloma.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaba Diego Rivera y era, en aquel momento, el pintor más famoso de México.",
        },
      ],
    },

    {
      titulo: "El espejo del dosel",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Se casaron el 21 de agosto de 1929. Ella tenía veintidós años y él cuarenta y dos. Él pesaba más de cien kilos y medía casi metro noventa; ella medía metro sesenta y estaba delgadísima. La diferencia física era tan llamativa que se convirtió en un chiste familiar.",
        },
        {
          forma: "texto",
          texto:
            "Rivera era ya una figura internacional: muralista, comunista, con encargos del Estado mexicano y después de industriales estadounidenses. Frida era, para casi todo el mundo, la mujer de Rivera. Esa asimetría duró prácticamente toda su vida.",
        },
        {
          forma: "clave",
          rotulo: "La proporción de fama",
          frase: "En vida de Frida, la prensa la trataba como la esposa pintora de un gran muralista. Su primera exposición individual en México llegó en 1953, un año antes de morir.",
        },
        {
          forma: "texto",
          texto:
            "El matrimonio fue una catástrofe sostenida con periodos de felicidad enorme. Los dos tuvieron amantes. Él, muchos y en público. Ella, hombres y mujeres, entre ellos el fotógrafo Nickolas Muray y, según casi todos los biógrafos, León Trotski durante su exilio en México.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la destrozó fue una traición concreta: Rivera tuvo una relación con Cristina, la hermana pequeña de Frida, que vivía cerca y con la que estaba muy unida. Se enteró en 1934 y fue el golpe emocional que más aparece, transformado, en su pintura posterior.",
        },
        {
          forma: "texto",
          texto:
            "Se divorciaron en 1939 y se volvieron a casar en diciembre de 1940, en San Francisco, con condiciones nuevas: cuentas separadas, sin relaciones sexuales entre ellos y con Frida pagando sus propios gastos. El acuerdo lo propuso ella.",
        },
        {
          forma: "arte",
          texto:
            "El diario está lleno de textos dirigidos a él y son de una intensidad difícil de sostener. Le llama su niño, su universo, su Diego. Escribe que él es todo lo que existe y que ella nunca ha estado sola. Y en la página siguiente hay una figura rota y una mancha de tinta.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Hay una entrada en la que enumera lo que él es para ella y va subiendo: mi niño, mi novio, mi amante, mi madre, yo misma, el universo. La progresión termina donde termina siempre en ese cuaderno: en la desaparición de la frontera entre los dos.",
        },
        {
          forma: "texto",
          texto:
            "Y también hay reproche. Escribe sobre el dolor de esperar, sobre la humillación y sobre las horas perdidas. No lo idealiza en todas las páginas: lo idealiza en unas y lo destroza en otras, a menudo separadas por dos hojas y sin ninguna fecha entre medias.",
        },
        {
          forma: "texto",
          texto:
            "La otra herida que atraviesa el cuaderno son los embarazos que no llegaron a término. Tuvo al menos un aborto espontáneo grave, en Detroit en 1932, del que salió una de sus pinturas más brutales, y varias interrupciones más por consejo médico.",
        },
        {
          forma: "clave",
          rotulo: "Lo que pintó con eso",
          frase: "En un país católico de 1932, una mujer pintó su propio aborto: ella desnuda sobre una cama de hospital, sangrando, con un feto y una pelvis flotando atados por venas rojas. No existía nada parecido.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el rasgo que hace de Kahlo algo más que una biografía triste. Pintó cosas que no se pintaban: el aborto, el cuerpo médico, los corsés, la columna partida, la cirugía, el dolor crónico. Convirtió en materia pictórica un territorio que estaba prohibido y no nombrado.",
        },
        {
          forma: "texto",
          texto:
            "Y lo hizo con un lenguaje visual que viene del arte popular mexicano y no de la vanguardia europea. Sus cuadros tienen el tamaño, el formato y la estructura de los exvotos: esas pequeñas láminas votivas que se cuelgan en las iglesias para agradecer un milagro.",
        },
        {
          forma: "texto",
          texto:
            "Un exvoto muestra la desgracia —el accidente, la enfermedad— con una cinta escrita abajo explicando qué pasó y dando las gracias. Frida coleccionaba exvotos, tenía cientos en su casa, y copió esa estructura exacta en varias de sus obras más conocidas.",
        },
        {
          forma: "arte",
          texto:
            "Esa filiación cambia la lectura del cuadro. No es una alucinación surrealista: es una lámina votiva sin santo. Se muestra la desgracia con la misma frontalidad, con la misma inscripción explicativa, y falta únicamente la figura celestial que agradecer.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El diario funciona igual. Muchas páginas son casi un exvoto: una figura sufriente, una anotación al lado y ninguna interpretación. No hay elaboración literaria, no hay metáfora buscada. Hay una constatación y el objeto pintado al lado.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una sección del cuaderno dedicada al color que es fascinante y que casi nadie cita. Frida hace una lista de colores y anota al lado lo que significan para ella, y las asociaciones no se parecen a ninguna teoría cromática conocida.",
        },
        {
          forma: "texto",
          texto:
            "El verde lo describe como luz tibia y buena. El amarillo como locura, enfermedad y miedo, y añade que también es el sol y la alegría. El azul cobalto como electricidad y pureza, amor. El verde hoja como hojas, tristeza, ciencia, y que Alemania entera es de ese color.",
        },
        {
          forma: "texto",
          texto:
            "Esa lista es lo más cerca que estuvo de escribir una poética, y ocupa una página. No hay más teoría en todo el cuaderno. Cuando alguien le preguntaba por su método, contestaba que pintaba lo que le pasaba y ya está.",
        },
        {
          forma: "texto",
          texto:
            "El último tramo del diario cambia de tono, y el cambio tiene una fecha exacta. En agosto de 1953, después de años de infecciones y de gangrena, los médicos le amputaron la pierna derecha por debajo de la rodilla.",
        },
        {
          forma: "texto",
          texto:
            "Y lo que escribió en el cuaderno pocas semanas después es la frase más conocida de todo el volumen.",
        },
      ],
    },

    {
      titulo: "Diego",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La frase, escrita junto a un dibujo de dos pies sobre una columna, dice: pies, para qué los quiero, si tengo alas para volar. Está fechada en 1953, poco después de la amputación, y se ha reproducido en carteles, camisetas y tatuajes por todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí es donde el cuaderno se vuelve más incómodo, porque esa frase se lee siempre como una declaración de fortaleza y en el cuaderno está rodeada de páginas que dicen lo contrario. La misma mano escribe unas hojas más allá que ya no aguanta más.",
        },
        {
          forma: "clave",
          rotulo: "El problema de citar un diario",
          frase: "En un cuaderno privado no hay tesis. Hay estados de ánimo de distintos días sin orden. Sacar una frase y convertirla en lema es exactamente lo que un diario no permite hacer honestamente.",
        },
        {
          forma: "texto",
          texto:
            "Después de la amputación pasó meses hundida. Los testimonios de quienes la visitaban describen dolores muy fuertes, dosis crecientes de morfina, periodos de confusión y varios intentos de quitarse la vida según algunas fuentes, aunque ese punto está discutido.",
        },
        {
          forma: "texto",
          texto:
            "El cuaderno de esos meses tiene la letra cada vez más grande y más temblorosa. Las líneas se salen del renglón. Hay palabras repetidas y frases que se interrumpen. Es un documento clínico además de literario, y verlo en facsímil resulta bastante duro.",
        },
        {
          forma: "texto",
          texto:
            "Aun así siguió pintando. Sus últimos cuadros son naturalezas muertas con frutas partidas, sandías abiertas, banderas pequeñas y palabras escritas dentro de la propia pintura. Es una obra tardía distinta, más simple, hecha con menos fuerza física disponible.",
        },
        {
          forma: "arte",
          texto:
            "Su último cuadro conocido es una sandía abierta sobre la que escribió, con el pincel, las palabras viva la vida. Tenía la pierna amputada, estaba en cama y le quedaban días. Esa combinación resume el problema entero de interpretar a Frida Kahlo.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Porque se puede leer como afirmación heroica o como despedida, y las dos lecturas son defendibles. La cultura popular ha elegido masivamente la primera. El cuaderno permite las dos, y probablemente ella pensaba las dos cosas en semanas distintas.",
        },
        {
          forma: "texto",
          texto:
            "En abril de 1953 ocurrió el otro episodio de su último año, y es una de las mejores escenas de la historia del arte del siglo XX. La galería de Lola Álvarez Bravo, en Ciudad de México, organizó su primera exposición individual en su propio país.",
        },
        {
          forma: "texto",
          texto:
            "Los médicos le prohibieron ir. Estaba demasiado enferma para levantarse. La noche de la inauguración, la sala estaba llena de gente cuando se oyó una sirena en la calle: había llegado una ambulancia.",
        },
        {
          forma: "clave",
          rotulo: "La cama en la galería",
          frase: "Habían llevado su cama con dosel a la sala esa misma tarde. La sacaron de la ambulancia en camilla, la acostaron en su cama en medio de la exposición, y recibió a los invitados desde ahí.",
        },
        {
          forma: "texto",
          texto:
            "Los testimonios cuentan que estuvo horas, hablando, brindando y cantando corridos con los que se acercaban a la cama. Fue la única exposición individual que vio en México. Murió quince meses después.",
        },
        {
          forma: "texto",
          texto:
            "La fecha oficial es el 13 de julio de 1954, siete días después de cumplir cuarenta y siete años. El certificado dice embolia pulmonar. No se practicó autopsia. La sospecha de una sobredosis, intencionada o no, ha circulado desde entonces sin confirmarse jamás.",
        },
        {
          forma: "texto",
          texto:
            "La última entrada del diario está unas páginas antes. Es un dibujo de una figura oscura con alas, un ángel negro, y debajo unas palabras escritas con letra grande e insegura.",
        },
        {
          forma: "arte",
          texto:
            "Dicen: espero alegre la salida, y espero no volver jamás. Es lo último que escribió en el cuaderno. Está en la última página utilizada, y el resto del volumen quedó en blanco.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Once días antes de morir había salido a la calle en silla de ruedas, con fiebre, a una manifestación contra la intervención estadounidense en Guatemala. Hay fotografías. Es lo último que hizo en público y encaja mal con casi todos los usos posteriores de su imagen.",
        },
        {
          forma: "texto",
          texto:
            "Diego Rivera escribió después que el día de la muerte de Frida fue el más trágico de su vida, y que se dio cuenta demasiado tarde de que la parte más maravillosa de su vida había sido el amor por ella. Murió tres años más tarde.",
        },
        {
          forma: "texto",
          texto:
            "Su casa de Coyoacán, la Casa Azul, se convirtió en museo en 1958. Rivera dejó instrucciones de que un baño con parte de sus pertenencias permaneciera cerrado durante quince años después de su propia muerte. Se abrió en 2004, cincuenta años después.",
        },
        {
          forma: "texto",
          texto:
            "Dentro había trescientas prendas de ropa, corsés ortopédicos pintados a mano, prótesis, medicamentos, cartas y fotografías. Ese hallazgo, medio siglo tarde, alimentó otra oleada de exposiciones y de libros sobre ella.",
        },
        {
          forma: "texto",
          texto:
            "El diario se había publicado nueve años antes, en 1995, en edición facsímil con transcripción y un ensayo de Carlos Fuentes. Y su publicación plantea una pregunta que el propio libro no resuelve y que conviene hacerse antes de abrirlo.",
        },
        {
          forma: "texto",
          texto:
            "Antes de esa pregunta conviene apuntar un dato de la Casa Azul que ayuda a entender el cuaderno. Frida vivió casi toda su vida en la casa donde nació, en Coyoacán, y murió en la misma habitación. El diario se escribió, en su mayor parte, en esa cama y en ese cuarto.",
        },
        {
          forma: "texto",
          texto:
            "La casa estaba llena de objetos que aparecen dibujados en sus páginas: exvotos colgados en las paredes, calaveras de azúcar, muñecas, esqueletos de cartón, retratos de Marx y de Lenin, monos y perros que criaba en el patio. El cuaderno es un inventario de esa habitación.",
        },
        {
          forma: "texto",
          texto:
            "¿Quién autorizó esto?",
        },
      ],
    },

    {
      titulo: "Pies para qué los quiero",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Frida Kahlo no dejó ninguna instrucción sobre este cuaderno. No lo escribió para publicar, no lo revisó, no lo ordenó y no lo mencionó en ningún testamento conocido. Es un objeto privado que salió a la luz cuarenta y un años después de su muerte.",
        },
        {
          forma: "texto",
          texto:
            "Esa es la objeción de fondo y no tiene una respuesta cómoda. Publicarlo aportó material valiosísimo para entender su obra, y también convirtió en producto editorial las páginas donde una mujer con dolores atroces escribía cosas que no quería que leyera nadie.",
        },
        {
          forma: "clave",
          rotulo: "La comparación",
          frase: "Con Kafka al menos hubo una instrucción explícita —quemarlo todo— que Max Brod desobedeció. Aquí no hay ni siquiera eso: hay un cuaderno que apareció y una industria que lo esperaba.",
        },
        {
          forma: "texto",
          texto:
            "El segundo problema del libro es de formato. No es una lectura: es un facsímil. Hay páginas ilegibles, textos escritos encima de dibujos, tinta corrida y frases que se cortan. La transcripción ayuda y no arregla que el objeto no está pensado para leerse seguido.",
        },
        {
          forma: "texto",
          texto:
            "El tercero es interpretativo y es el que más daño hace. El diario se usa constantemente para psicoanalizar sus cuadros: se busca en el cuaderno la explicación de cada símbolo, como si la pintura fuera un jeroglífico que la libreta descifra.",
        },
        {
          forma: "texto",
          texto:
            "Esa lectura es exactamente la que Kahlo rechazó toda su vida. Insistió en que pintaba realidades y no símbolos, y en que un venado atravesado por flechas no era una alegoría del alma: era ella con nueve intervenciones quirúrgicas y con un dolor que no se iba.",
        },
        {
          forma: "arte",
          texto:
            "Hay una diferencia de fondo entre las dos lecturas. Tratarla como enigma la convierte en un caso clínico interesante. Tratarla como pintora obliga a mirar la composición, el color, el formato de exvoto y la decisión técnica de pintar en pequeño y con detalle.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Y el cuarto problema es el más grande de todos y no es del libro sino de lo que ha ocurrido alrededor: la conversión de Frida Kahlo en mercancía global. Su cara está en bolsos, fundas de móvil, tazas, calcetines, envases de cosmética y muñecas.",
        },
        {
          forma: "texto",
          texto:
            "Esa operación ha requerido borrar casi todo lo que ella era. La comunista militante que fue a manifestarse en silla de ruedas once días antes de morir aparece hoy como icono estético de empoderamiento individual, vendido por empresas que ella habría atacado.",
        },
        {
          forma: "texto",
          texto:
            "El proceso se puede fechar. Su reputación empezó a crecer en los años setenta con el feminismo y con el movimiento chicano, y explotó tras la biografía que Hayden Herrera publicó en 1983. Antes de eso era una figura secundaria incluso en México.",
        },
        {
          forma: "clave",
          rotulo: "El dato de mercado",
          frase: "En vida vendió muy pocos cuadros. Décadas después, sus obras alcanzaron cifras de decenas de millones de dólares. Ninguna de esas cifras la vio ella, que se pasó la vida dependiendo del dinero de su marido.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por lo más repetido: no era surrealista. Lo negó explícitamente, despreció a los surrealistas franceses por escrito y sostuvo siempre que pintaba hechos y no sueños. La etiqueta se la pusieron ellos.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: no fue famosa en vida. Fue conocida en círculos artísticos, expuso en Nueva York y en París y tuvo cierta prensa, sobre todo por excéntrica. Su única exposición individual en México fue quince meses antes de morir.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: no nació en 1910. Nació el 6 de julio de 1907 y ella misma cambió la fecha para hacerla coincidir con el estallido de la Revolución mexicana. Es un dato menor y dice mucho: se construyó a sí misma como personaje desde muy joven.",
        },
        {
          forma: "arte",
          texto:
            "Y cuarto, el más difícil de aceptar: el cuaderno no explica sus cuadros. Es material paralelo, escrito en los últimos diez años de su vida, cuando la mayor parte de su obra ya estaba pintada. Usarlo como clave de lectura de los años treinta es un anacronismo.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí aporta, y es mucho, es una cosa que ninguna biografía puede dar: la textura de una mano. Ver cómo la letra crece y se descompone en los últimos meses, cómo las manchas se convierten en figuras, cómo una frase de amor se corta a la mitad.",
        },
        {
          forma: "texto",
          texto:
            "Es un documento sobre el trabajo del dolor y sobre lo que hace alguien con un cuaderno y unos lápices cuando lleva meses sin poder levantarse. Y en ese sentido concreto no tiene equivalente en la historia del arte moderno.",
        },
        {
          forma: "texto",
          texto:
            "También corrige una imagen: Frida Kahlo no era una mártir silenciosa. El cuaderno está lleno de humor, de palabrotas, de juegos de palabras, de dibujos absurdos y de listas sin sentido. Se reía mucho, y eso desaparece por completo en la iconografía posterior.",
        },
        {
          forma: "texto",
          texto:
            "Los testimonios coinciden: hablaba mal, contaba chistes verdes, bebía tequila y era divertidísima. La imagen solemne de mujer sufriente con flores en el pelo es una construcción de otros, y este cuaderno es una de las pocas cosas que la desmiente desde dentro.",
        },
        {
          forma: "texto",
          texto:
            "Queda una última cuestión que el libro plantea sin querer y que es la más interesante de todas: qué habría dicho ella de que lo estemos leyendo.",
        },
        {
          forma: "texto",
          texto:
            "No hay forma de saberlo, y esa incertidumbre es parte del objeto que uno tiene en las manos.",
        },
      ],
    },

    {
      titulo: "La cama en la galería",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Hay un argumento a favor de la publicación y merece ser oído. Kahlo se pintó a sí misma cincuenta y cinco veces. Se expuso desnuda, sangrando, abierta en canal y con el cuerpo roto, y colgó esos cuadros en galerías de Nueva York y de París.",
        },
        {
          forma: "texto",
          texto:
            "Es difícil sostener que una mujer que pintó su propio aborto para que lo viera todo el mundo tuviera una idea convencional de la intimidad. Su obra entera consiste en enseñar lo que no se enseña, y el cuaderno es una versión más de esa operación.",
        },
        {
          forma: "clave",
          rotulo: "El contraargumento",
          frase: "Pintar algo para exponerlo es una decisión. Escribirlo en un cuaderno privado es exactamente lo contrario. La diferencia entre las dos cosas es precisamente el consentimiento.",
        },
        {
          forma: "texto",
          texto:
            "El libro no resuelve esa tensión y probablemente no se puede resolver. Lo que sí se puede es leerlo sabiendo lo que es: un objeto obtenido sin permiso, valiosísimo, publicado por herederos e instituciones cuarenta y un años después.",
        },
        {
          forma: "texto",
          texto:
            "La edición de 1995 incluye un ensayo introductorio de Carlos Fuentes, la transcripción completa y la traducción cuando hace falta, más un aparato de notas. Es una edición cuidada, y también es un libro caro y grande, más para mirar que para leer.",
        },
        {
          forma: "texto",
          texto:
            "Su lectura recomendable es en compañía de otra cosa. Solo, resulta fragmentario e impenetrable. Junto a una biografía o a un catálogo de su obra, se convierte en el complemento que faltaba: la voz sin editar de la persona que pintó aquellos cuadros.",
        },
        {
          forma: "arte",
          texto:
            "Y funciona sobre todo por contraste. Los cuadros son composiciones cerradas, pensadas, con simetrías y con una técnica minuciosa. El cuaderno es lo contrario: caótico, sin corregir, con la mano temblando. Ver las dos cosas juntas enseña dónde estaba el trabajo.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Porque eso es lo que la mitología borra. Frida Kahlo no pintaba a chorro desde el sufrimiento: pintaba despacio, con pinceles finos, corrigiendo, sobre superficies pequeñas, usando una técnica aprendida y una tradición concreta, la del retablo popular mexicano.",
        },
        {
          forma: "texto",
          texto:
            "El dolor le dio los temas. La técnica se la trabajó. Y esa distinción es la que se pierde cuando se convierte en un icono del sentimiento puro, porque entonces deja de ser una pintora y pasa a ser un caso.",
        },
        {
          forma: "texto",
          texto:
            "Su obra completa, ciento cuarenta y tres cuadros, se puede recorrer en un día. Es un catálogo pequeño y notablemente coherente: una mujer mirándose en un espejo colocado sobre una cama durante casi treinta años, y anotando lo que veía.",
        },
        {
          forma: "clave",
          rotulo: "La aportación real",
          frase: "Incorporó al arte occidental el cuerpo enfermo visto desde dentro. Antes de ella, el dolor físico en pintura era el de los mártires y el de las batallas. El de un quirófano y una cama de hospital no estaba.",
        },
        {
          forma: "texto",
          texto:
            "Ese es su lugar histórico, más allá de la biografía y de la iconografía comercial. Y es un lugar que se puede defender sin recurrir a su vida: los cuadros lo sostienen solos, colgados en una pared y sin ninguna explicación al lado.",
        },
        {
          forma: "texto",
          texto:
            "El cuaderno añade una capa a eso y también añade un riesgo, que es el de leer los cuadros como síntomas. La mejor manera de usarlo es al revés: mirar primero la pintura como pintura, y abrir el cuaderno después, sabiendo que es material en bruto.",
        },
        {
          forma: "texto",
          texto:
            "Hay una entrada del diario que resume mejor que ninguna otra lo que hay dentro. Escribió que le habían amputado la pierna hacía seis meses, que le habían dado siglos de tortura, y que en algunos momentos casi perdió la razón.",
        },
        {
          forma: "arte",
          texto:
            "Y a continuación, en la misma entrada, escribió que seguía teniendo ganas de suicidarse y que solo la pintura la detenía. Esa frase está en el cuaderno, junto a otras que dicen que espera alegre la salida, y las dos son igual de verdad.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Un diario no tiene tesis. Tiene días. Y la mayor virtud de esta edición es que no ordena nada: reproduce las páginas como estaban, en desorden, con las contradicciones intactas y sin ningún intento de construir una narrativa coherente.",
        },
        {
          forma: "texto",
          texto:
            "Eso es lo contrario de lo que hace la industria que vende su cara. La camiseta necesita una frase; el cuaderno tiene ciento setenta páginas que se desmienten unas a otras. La segunda cosa es la persona; la primera es el producto.",
        },
        {
          forma: "texto",
          texto:
            "Si hay algo que este libro consigue, es hacer imposible la versión simplificada. Quien lo abra esperando encontrar la fuente de las frases motivacionales se va a encontrar con una mujer con morfina escribiendo torcido a las tres de la mañana.",
        },
        {
          forma: "texto",
          texto:
            "Y con una lista de colores, y con un dibujo hecho encima de una mancha de tinta, y con una carta de amor a un hombre que le fue infiel con su hermana, y con una consigna política, y con un pie dibujado sobre una columna.",
        },
        {
          forma: "texto",
          texto:
            "Todo eso en el mismo cuaderno, sin fechas y sin orden, exactamente como pasan las cosas.",
        },
        {
          forma: "texto",
          texto:
            "Y al final, en la última página escrita, un ángel negro y siete palabras sobre la salida.",
        },
      ],
    },
  ],
};
