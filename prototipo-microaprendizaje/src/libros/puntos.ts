/* ==========================================================================
   «Aprenderás»: lo que uno se lleva de cada libro.

   Es la tarjeta de los vistos de la ficha, calcada de Headway. Allí cada
   punto es UNA COSA QUE SABRÁS HACER O ENTENDER cuando termines, escrita en
   una línea y empezando por el verbo o por el qué:

       cómo detectar y promover a los mejores trabajadores
       formas de lograr el ajuste producto-mercado
       qué se necesita para mejorar el compromiso del equipo

   No son los capítulos, ni el índice, ni frases sueltas del libro. Son la
   promesa, y por eso van escritos a mano.

   LAS REGLAS

   1. UNA LÍNEA. Diez palabras como mucho. Si pide dos renglones en un móvil,
      sobra la mitad.

   1 bis. EN MINÚSCULA, como en la referencia: «por qué el cerebro humano
      vence a la inteligencia artificial», no «Por qué...». Detrás del visto no
      empieza una frase, se continúa la del rótulo: aprenderás… esto.

   2. QUE SE ENTIENDA SIN HABER LEÍDO EL LIBRO. «La habitación 101» no dice
      nada a quien no ha leído 1984; «por qué la tortura busca creencia y no
      información» sí.

   3. CONCRETO. Una idea que se pueda contar en una cena, no una categoría.
      Nada de «las claves del éxito» ni «los fundamentos de la felicidad».

   4. CINCO POR LIBRO. Es lo que cabe en la tarjeta sin desplazar la pantalla.

   5. SIN VENDER. Ni «descubre», ni «el secreto de», ni «imprescindible».

   Un libro sin entrada aquí cae en los títulos de sus capítulos, que son
   cortos y concretos pero hablan del recorrido y no de lo que te llevas. Se
   nota la diferencia, y por eso esta lista se va llenando.
   ========================================================================== */

export const PUNTOS: Record<string, string[]> = {
  "auschwitz-rees": [
    "cómo cambió de función el campo cuatro veces en cuatro años",
    "de dónde salió el gas que se usó para matar",
    "por qué se buscaron las cámaras de gas, que no fue por eficiencia",
    "qué gobiernos entregaron a sus propios ciudadanos y cuál cobró",
    "qué dijeron los antiguos miembros de las SS al ser entrevistados",
  ],

  tatuador: [
    "qué era un prisionero con función y qué compraba con ese puesto",
    "por qué Auschwitz fue el único campo que tatuaba números",
    "cómo funcionaba el mercado negro dentro del campo",
    "qué errores documentó el Museo de Auschwitz en 2018",
    "por qué esos errores no son un asunto de pedantería",
  ],

  postguerra: [
    "sobre qué traslado forzoso de población se levantó la paz",
    "qué hizo de verdad el Plan Marshall, que no fue reconstruir",
    "por qué el crecimiento de los años cincuenta era irrepetible",
    "por qué el acontecimiento político de 1968 fue Praga y no París",
    "cuándo empezó Europa a recordar a sus judíos asesinados",
  ],

  "canones-agosto": [
    "por qué el plan alemán obligaba a invadir un país neutral",
    "qué costó la doctrina francesa de atacar siempre",
    "qué pasó el día en que el káiser quiso parar el despliegue",
    "cómo dos barcos metieron al imperio otomano en la guerra",
    "por qué Kennedy repartió este libro en 1962",
  ],

  "ensayos-montaigne": [
    "qué significaba la palabra «ensayo» cuando la inventó",
    "por qué corregía añadiendo y no borraba nunca",
    "qué le dijeron los tres brasileños que conoció en Ruán en 1562",
    "por qué saber de memoria no es saber",
    "cómo cambió de opinión sobre la muerte en veinte años",
  ],

  "existencialismo-humanismo": [
    "qué significa que la existencia preceda a la esencia",
    "por qué elegir por uno mismo sería elegir por todos",
    "en qué sentido estamos condenados a ser libres",
    "el caso del estudiante que ninguna doctrina resolvía",
    "por qué su propio autor se arrepintió de haberlo publicado",
  ],

  "mas-alla-bien-mal": [
    "por qué toda filosofía sería una confesión involuntaria",
    "qué le objeta al «pienso, luego existo» de Descartes",
    "qué significa exactamente voluntad de poder",
    "en qué se diferencian la moral de señores y la de esclavos",
    "qué hizo su hermana con sus manuscritos",
  ],

  "contrato-social": [
    "por qué la fuerza no crea ninguna obligación",
    "el problema exacto que el contrato tiene que resolver",
    "qué es la voluntad general y por qué no es la de la mayoría",
    "por qué sostiene que la soberanía no se puede delegar",
    "las dos frases suyas por las que se le acusa desde 1952",
  ],

  "etica-nicomaco": [
    "por qué la felicidad de la que habla no se puede tener un martes",
    "por qué nadie se vuelve justo entendiendo la justicia",
    "qué dice de verdad la doctrina del término medio",
    "cómo se puede saber lo correcto y hacer lo contrario",
    "por qué dedica una quinta parte del libro a la amistad",
  ],

  "etica-amador": [
    "por qué la libertad no consiste en poder hacerlo todo",
    "las tres cosas que confundimos con razones para actuar",
    "qué diferencia hay entre querer algo y que te apetezca",
    "por qué se es humano solo porque otros te tratan como tal",
    "dónde acaba la ética y empieza la política",
  ],

  "cuentos-poe": [
    "la regla de 1842 con la que fundó el cuento moderno",
    "cómo funciona un narrador al que no se puede creer",
    "las cuatro piezas del género policiaco, ya montadas en 1841",
    "por qué un escondite a la vista derrota a una búsqueda minuciosa",
    "quién fabricó el retrato del Poe borracho y loco",
  ],

  mujercitas: [
    "cómo el primer capítulo instala toda la moral del libro",
    "qué vende Jo March y por cuánto",
    "de qué libro de 1678 sale la estructura de la primera parte",
    "por qué Alcott se negó a casar a Jo con Laurie",
    "por qué Amy ha dejado de ser la hermana antipática",
  ],

  "renglones-torcidos": [
    "por qué su historia no se puede confirmar ni desmentir",
    "cómo dos psiquiatras llegan a conclusiones opuestas del mismo expediente",
    "quiénes son los internos y qué tienen intacto",
    "qué pasa cuando negar la acusación cuenta como prueba",
    "qué cambió en la psiquiatría justo después de este libro",
  ],

  "elegancia-erizo": [
    "por qué un disfraz así aguanta veintisiete años",
    "qué está diagnosticando Paloma cuando decide morirse",
    "cómo una cita de Tolstói derriba todo el montaje",
    "de dónde sale el erizo del título y quién lo escribe",
    "por qué su final es lo más discutido del libro",
  ],

  "el-tunel": [
    "por qué contar el final en la primera línea cambia el libro",
    "el detalle de un cuadro del que nace todo",
    "por qué los celos funcionan como un método y no como una emoción",
    "qué significa que el marido de María sea ciego",
    "de dónde sale la imagen de los túneles paralelos",
  ],

  "intro-psicoanalisis": [
    "por qué un lapsus tendría dos intenciones dentro",
    "las cuatro operaciones con las que se fabrica un sueño",
    "en qué sentido un síntoma es un acuerdo entre dos fuerzas",
    "qué es la transferencia y por qué la llamó obstáculo e instrumento",
    "qué corrigió el propio Freud de este libro en 1926 y 1933",
  ],

  "cosas-buenas": [
    "qué hace el cortisol y qué no puedes hacer con él",
    "por qué dar vueltas a lo mismo predice una depresión",
    "qué hay de cierto en que el cerebro no distinga lo imaginado",
    "por qué las cuatro hormonas de la felicidad no explican nada",
    "qué predijo la salud a los ochenta en el estudio de Harvard",
  ],

  "maneras-de-amar": [
    "de dónde salieron los tres estilos de apego y cuándo",
    "la lista exacta de lo que hace alguien ansioso al sentirse lejos",
    "las maniobras con las que un evitativo mantiene la distancia",
    "por qué esas dos personas se emparejan tanto entre sí",
    "por qué apoyarte bien en alguien te vuelve más autónomo",
  ],

  "cerebro-del-nino": [
    "el modelo del cerebro que se hace con una mano",
    "distinguir un berrinche calculado de uno desbordado",
    "por qué conectar antes de corregir no es ceder",
    "qué le pasa a la amígdala cuando pones nombre a una emoción",
    "detectar el neuromito sobre el que está montado el libro",
  ],

  "poder-metabolismo": [
    "la regla del plato de dos tercios y un tercio",
    "qué le pasa a la grelina cuando duermes cuatro horas",
    "qué es el metabolismo y cómo se mide de verdad",
    "por qué el capítulo del hongo no describe ningún diagnóstico",
    "confirmar una sospecha de tiroides con un análisis corriente",
  ],

  "vivir-plenitud": [
    "en qué consiste exactamente el programa de ocho semanas",
    "qué demuestra el ejercicio de comerse una pasa",
    "separar un dolor de la historia que te cuentas sobre él",
    "por qué aceptar no es lo mismo que resignarse",
    "qué encontraron los ensayos, incluidos los efectos adversos",
  ],

  "milagro-metabolico": [
    "qué hace exactamente la insulina y por qué bloquea la grasa",
    "por qué contar calorías es cierto y no sirve",
    "qué se sabe del ayuno intermitente cuando se mide",
    "con qué se consiguió revertir la diabetes tipo 2 en el ensayo DiRECT",
    "separar la lista de la compra, que es buena, del mecanismo",
  ],

  invencible: [
    "separar lo que depende de ti de lo que no, y su límite",
    "la frase que se cuela entre lo que pasa y lo que sientes",
    "escribir por qué fracasó algo que aún no ha empezado",
    "la fórmula de una línea que triplicó el cumplimiento",
    "por qué la fuerza de voluntad no es un depósito que se vacía",
  ],

  "repensar-pobreza": [
    "por qué la discusión sobre si la ayuda funciona no tiene respuesta",
    "qué compra una familia pobre cuando le sobra dinero",
    "por qué nadie paga céntimos por lo que salva vidas",
    "qué midieron cuando por fin midieron el microcrédito",
    "las tres causas por las que fracasan los programas",
  ],

  "doctrina-shock": [
    "por qué el plan económico chileno estaba escrito antes del golpe",
    "quién nacionalizó la banca de Chile en 1983",
    "cómo se repartió la economía rusa después de octubre de 1993",
    "qué firmó Sudáfrica en la mesa que no salía en las noticias",
    "distinguir los diez casos documentados de la tesis que los une",
  ],

  "dinero-domina-juego": [
    "por qué el porcentaje que apartas manda sobre el fondo que eliges",
    "si quien te aconseja cobra de ti o de lo que te vende",
    "la cartera de cuatro climas que Ray Dalio publicó aquí",
    "calcular la cifra exacta que te hace falta para vivir",
    "leer con lupa el capítulo de las rentas vitalicias",
  ],

  superpronosticadores: [
    "cómo se puntúa una predicción desde 1950",
    "por qué el experto más famoso suele acertar menos",
    "partir una pregunta imposible en cuatro difíciles",
    "empezar por la frecuencia general y no por el caso",
    "qué acertaron y qué fallaron desde que salió el libro",
  ],

  "paseo-aleatorio": [
    "qué significa exactamente que la bolsa sea un paseo aleatorio",
    "el concurso de belleza de Keynes y por qué explica las burbujas",
    "por qué el análisis técnico no sobrevive a un examen",
    "qué aciertan las previsiones de beneficios de los analistas",
    "distinguir un precio correcto de un precio imbatible",
  ],

  "millonario-al-lado": [
    "la fórmula que dice si acumulas o gastas, con tu edad y tu sueldo",
    "por qué médicos y abogados salen mal parados",
    "en qué oficios estaban de verdad los millonarios",
    "qué le pasa a un hijo adulto al que sus padres ayudan",
    "detectar el fallo de método que arrastra todo el libro",
  ],

  "bogle-sentido-comun": [
    "por qué los gestores en conjunto no pueden ganar al mercado",
    "cuánto se lleva de verdad una comisión del dos por ciento",
    "qué es el sesgo de supervivencia en una tabla de fondos",
    "el hueco entre lo que rinde un fondo y lo que ganas tú",
    "cómo acabó la apuesta de un millón de dólares de Buffett",
  ],

  einstein: [
    "por qué es falso que suspendiera matemáticas",
    "qué pregunta abrió la relatividad, y no era de física",
    "cómo salieron los cuatro artículos de 1905",
    "la discusión con Bohr que perdió en 2022",
    "distinguir su papel real en la bomba atómica del inventado",
  ],

  "musica-primos": [
    "por qué los primos son los átomos de la aritmética",
    "qué dice exactamente la hipótesis de Riemann",
    "por qué diez billones de comprobaciones no demuestran nada",
    "la coincidencia con los niveles de energía de un núcleo",
    "cómo un asunto inútil acabó protegiendo las tarjetas de crédito",
  ],

  "universo-mano": [
    "por qué mirar el cielo es mirar hacia atrás en el tiempo",
    "qué se sabe del noventa y cinco por ciento que no se ve",
    "qué separa exactamente el horizonte de un agujero negro",
    "el experimento de las dos rendijas y lo que sigue sin explicarse",
    "distinguir lo medido de lo deducido y de lo imaginado",
  ],

  "universo-cascara": [
    "por qué la gravedad no es una fuerza sino una forma",
    "qué significa que el universo no tenga bordes en tiempo imaginario",
    "cómo se evapora un agujero negro y qué se lleva",
    "la conjetura con la que Hawking blindó el pasado",
    "distinguir en el libro lo medido de lo conjeturado",
  ],

  "ultimos-dinosaurios": [
    "por qué el cielo se volvió una fuente de calor",
    "qué tenía la roca de debajo del impacto",
    "por qué el registro se llena de esporas de helecho",
    "qué salvó a las aves que se salvaron",
    "por qué los mamíferos no estaban esperando su turno",
  ],

  "pulgar-panda": [
    "por qué lo imperfecto es la mejor prueba de la evolución",
    "qué dice el registro fósil sobre el ritmo del cambio",
    "por qué las plumas no aparecieron para volar",
    "qué cambia cuando un animal crece de tamaño",
    "cómo se coló el prejuicio en mediciones de buena fe",
  ],

  "cuchara-menguante": [
    "por qué la tabla tiene esa forma tan rara",
    "cómo se cuela el cadmio en el sitio del zinc",
    "qué reacción alimenta al mundo y municionó una guerra",
    "por qué hubo una guerra fría por poner nombres",
    "por qué la electrónica se hace de arena",
  ],

  "vida-dali": [
    "por qué el libro empieza con un recuerdo imposible",
    "qué rocas hay dentro de sus cuadros",
    "qué cuenta y qué calla sobre Lorca",
    "en qué consiste el método paranoico-crítico",
    "qué cambió cuando llegó Gala",
  ],

  "diarios-frida": [
    "qué le hizo al cuerpo el accidente de 1925",
    "qué significaba cada color en su lista privada",
    "cómo aparece Diego Rivera en esas páginas",
    "qué imágenes vuelven una y otra vez",
    "qué dice de verdad la frase de los pies y las alas",
  ],

  "magia-crear": [
    "qué hacer con el miedo en lugar de esperar a que se vaya",
    "por qué no conviene dejar el trabajo",
    "de dónde sale el mito del artista atormentado",
    "por qué la curiosidad sirve mejor que la pasión",
    "qué sostiene el libro sobre las ideas, y si se sostiene",
  ],

  "pajaro-a-pajaro": [
    "por qué el primer borrador tiene que ser malo",
    "qué es el marco de una pulgada",
    "cómo se le baja el volumen al crítico interior",
    "por qué la trama sale de los personajes",
    "qué cambia de verdad al publicar",
  ],

  "camino-artista": [
    "en qué consisten las páginas matinales",
    "por qué a mano y por qué no se releen",
    "qué es una cita con el artista",
    "cómo se reconoce a un artista en la sombra",
    "por qué la cantidad va antes que la calidad",
  ],

  "dieta-cojea": [
    "de dónde salió lo del desayuno obligatorio",
    "por qué un zumo no equivale a la fruta",
    "qué significa de verdad la palabra light",
    "cuáles son los suplementos que sí hacen falta",
    "por qué el entorno decide más que tu voluntad",
  ],

  anticancer: [
    "por qué casi todo el mundo tiene células con mutaciones",
    "qué relación hay entre inflamación crónica y cáncer",
    "qué está demostrado de su lista de alimentos y qué no",
    "cuál de sus cuatro palancas resultó tener más pruebas",
    "qué se ha medido sobre el estrés y el cáncer",
  ],

  "milagro-manana": [
    "por qué lo que no tiene plazo se aplaza siempre",
    "los seis hábitos y en qué orden van",
    "cómo levantarse sin depender de la fuerza de voluntad",
    "las tres fases del reto de treinta días",
    "la cifra que el libro no menciona nunca",
  ],

  "codigo-obesidad": [
    "qué se midió en el experimento de hambre de Minnesota",
    "qué le pasó al metabolismo de unos concursantes seis años después",
    "por qué la fructosa va casi solo al hígado",
    "de dónde salió el consejo de comer cinco veces al día",
    "qué han encontrado los ensayos sobre el ayuno",
  ],

  "nacidos-correr": [
    "quiénes son los rarámuris y cómo corren",
    "qué pasó en Leadville en 1993",
    "por qué el cuerpo humano aguanta más que casi ningún animal",
    "qué se le reprocha a la zapatilla amortiguada",
    "qué predice de verdad una lesión al correr",
  ],

  "marte-venus": [
    "por qué la ayuda no pedida se recibe como una crítica",
    "qué es la cueva y por qué perseguir a alguien la alarga",
    "cómo se piden las cosas para que se hagan",
    "por qué la constancia puntúa más que los gestos grandes",
    "qué dice la evidencia sobre las diferencias entre sexos",
  ],

  "sentirse-bien": [
    "por qué el pensamiento va delante del sentimiento",
    "las diez maneras en que la cabeza deforma la realidad",
    "cómo se rebate un pensamiento en tres columnas",
    "por qué medir tu valor es el problema",
    "qué hay debajo de la pereza casi siempre",
  ],

  "open-agassi": [
    "qué cuentas le echaba su padre en el jardín",
    "qué escondía el peinado con el que se hizo famoso",
    "cómo cayó al puesto 141 del mundo",
    "qué le confesó a la asociación de tenistas y qué le pasó",
    "en qué gastó el dinero al retirarse",
  ],

  "messi-ronaldo": [
    "cómo se firmaron los dos fichajes y lo poco que costaron",
    "por qué casi ningún club habría conservado a Messi",
    "qué cambió Ronaldo de su cuerpo y de su juego",
    "qué ganaba la industria con que la discusión no acabara",
    "cómo salieron los dos de sus clubes",
  ],

  "sexta-extincion": [
    "quién inventó la idea de extinción y cuándo",
    "por qué se rechazó durante siglo y medio la catástrofe",
    "qué le pasa al mar cuando absorbe dióxido de carbono",
    "por qué un trozo de selva sigue perdiendo especies",
    "qué es la nueva Pangea y por qué es lo grave",
  ],

  "error-descartes": [
    "qué le pasó de verdad a Phineas Gage",
    "por qué el cálculo puro no basta para decidir",
    "qué mide el juego de las cuatro barajas",
    "qué es un marcador somático",
    "en qué se distinguen emoción y sentimiento",
  ],

  "lenguajes-amor": [
    "cuánto dura de media el enamoramiento y qué viene después",
    "por qué esforzarse más a veces empeora las cosas",
    "los cinco idiomas y qué duele en cada uno",
    "las tres preguntas para averiguar el tuyo",
    "qué dice la evidencia de todo esto",
  ],

  "lean-startup": [
    "por qué cumplir el plan puede ser la peor señal",
    "qué es de verdad un producto mínimo viable",
    "por qué los totales acumulados no sirven para decidir",
    "cuándo toca cambiar de hipótesis y cuándo insistir",
    "los tres únicos motores de crecimiento que existen",
  ],

  "cero-a-uno": [
    "por qué la competencia perfecta deja beneficio cero",
    "cómo mienten los monopolios sobre su mercado",
    "por qué se empieza en un mercado diminuto",
    "la zona muerta donde mueren los buenos productos",
    "las siete preguntas que decide un negocio",
  ],

  "riqueza-naciones": [
    "por qué la especialización tiene un techo",
    "cuántas veces aparece de verdad la mano invisible",
    "qué pensaba Smith de los empresarios",
    "las tres obligaciones que asigna al Estado",
    "las cuatro reglas de un impuesto bien puesto",
  ],

  "emperador-males": [
    "por qué no se operó el cáncer durante trece siglos",
    "de qué gas de guerra salió la quimioterapia",
    "qué se demostró en 1981 sobre la mastectomía radical",
    "cómo se curó la leucemia infantil y a qué precio",
    "por qué el enemigo son genes propios y no invasores",
  ],

  "henrietta-lacks": [
    "por qué esas células no se mueren y las demás sí",
    "qué se probó con esas células antes de 1973",
    "cómo se enteraron sus hijos, veintidós años después",
    "de quién es el tejido que sale de tu cuerpo",
    "por qué arruinaron miles de experimentos en todo el mundo",
  ],

  feynman: [
    "qué le enseñó su padre sobre el nombre de las cosas",
    "a qué se dedicaba mientras se construía la bomba atómica",
    "qué descubrió dando clase de física en Brasil",
    "qué pasó cuando evaluó libros de texto escolares",
    "de dónde salió el trabajo que le dio el Nobel",
  ],

  leonardo: [
    "por qué sus cuatro desventajas de partida fueron una ventaja",
    "qué se apuntaba en aquellas listas de cosas por averiguar",
    "qué averiguó abriendo treinta cadáveres de noche",
    "por qué la Última Cena empezó a caerse en vida suya",
    "cómo está construida la sonrisa que aparece y desaparece",
  ],

  "sobre-fotografia": [
    "por qué hacer una foto de algo es apropiárselo",
    "por qué el vocabulario del oficio es el de un arma",
    "para qué sirve realmente una cámara en un viaje",
    "qué puede hacer una imagen y qué no puede hacer",
    "qué parte de este libro retiró su propia autora",
  ],

  "roba-artista": [
    "por qué buscar la originalidad es la mejor manera de no empezar",
    "cómo se distingue el buen robo del malo",
    "qué hacer cuando todavía no sabes quién eres",
    "para qué sirve enseñar el trabajo antes de terminarlo",
    "por qué defiende llevar una vida aburrida y ordenada",
  ],

  "por-que-fracasan": [
    "por qué no valen la geografía, la cultura ni la ignorancia",
    "qué distingue unas instituciones inclusivas de unas extractivas",
    "por qué se puede crecer con las malas y solo hasta cierto punto",
    "cómo la misma peste negra bifurcó a las dos mitades de Europa",
    "por qué Botsuana es la excepción del continente",
  ],

  "deja-de-ser-tu": [
    "de dónde viene la historia personal que lo sostiene todo",
    "qué parte de su argumento está bien demostrada",
    "qué se sabe del ensayo mental y para qué sirve",
    "qué dice de verdad la física cuántica sobre esto",
    "qué le hace a un enfermo la idea de que depende de él",
  ],

  "cerebro-de-pan": [
    "qué cuatro afirmaciones encadenadas sostiene exactamente",
    "a quién daña de verdad el gluten y en qué proporción",
    "qué se sabe de la relación entre azúcar en sangre y cerebro",
    "para qué sirve realmente una dieta cetogénica",
    "qué apareció al revisar sus referencias una por una",
  ],

  "come-comida-real": [
    "en qué tres categorías divide todo lo comestible",
    "qué experimento demostró que el procesamiento importa solo",
    "por qué se come más cantidad de lo mismo cuando viene procesado",
    "qué parte del envase hay que leer y cuál no",
    "qué le reprochan a este discurso otros dietistas",
  ],

  "dilema-omnivoro": [
    "por qué casi todo lo que se come es la misma planta",
    "qué decisión política de los setenta explica todo esto",
    "qué le pasa a un rumiante que come grano",
    "qué garantiza y qué no una etiqueta ecológica",
    "cómo funciona una granja que cierra sus propios ciclos",
  ],

  "zonas-azules": [
    "cómo se mueve la gente que no pisa un gimnasio",
    "qué significa comer hasta el ochenta por ciento",
    "qué alimento está en el centro de las cinco dietas",
    "qué estructuras sociales tienen esos sitios y aquí no",
    "qué apareció al revisar los registros civiles de esas zonas",
  ],

  outlive: [
    "qué cuatro enfermedades causan casi todas las muertes",
    "cómo fijarse objetivos físicos para los últimos años",
    "qué marcador de sangre importa y no suele medirse",
    "qué cuatro componentes tiene un buen programa de ejercicio",
    "qué se sabe realmente de nutrición y qué no",
  ],

  "segundo-sexo": [
    "por qué lo masculino funciona como norma y lo femenino como excepción",
    "en qué se distingue esta situación de cualquier otra opresión",
    "por qué la biología no determina ningún destino",
    "qué significa exactamente que no se nace mujer",
    "qué tiene de particular el trabajo de la casa",
  ],

  "discurso-metodo": [
    "por qué lo escribió en la lengua vulgar y no en latín",
    "cuáles son sus cuatro reglas y de dónde las sacó",
    "qué hacer mientras uno pone en duda sus convicciones",
    "adónde lleva dudar de absolutamente todo",
    "qué objeción le hizo por carta la princesa Isabel",
  ],

  "apologia-socrates": [
    "qué acusación pesaba realmente sobre él",
    "qué hizo cuando un oráculo lo declaró el más sabio",
    "cómo desmontó a su acusador en pleno juicio",
    "qué pena propuso cuando le dejaron elegirla",
    "por qué pudo salvarse y decidió no hacerlo",
  ],

  tao: [
    "por qué lo útil de una rueda es el agujero del centro",
    "qué enseña el libro con el ejemplo del agua",
    "por qué proclamar una virtud es señal de haberla perdido",
    "qué recomienda a quien tiene que gobernar",
    "por qué dos traducciones suyas parecen dos libros distintos",
  ],

  enquiridion: [
    "cómo se separa lo que depende de ti de lo que no",
    "por qué no te altera lo que pasa sino lo que piensas de ello",
    "qué cambia decir «lo he devuelto» en vez de «lo he perdido»",
    "qué explica la parábola del barco y la orilla",
    "cuál es su criterio para saber si uno está progresando",
  ],

  "brevedad-vida": [
    "por qué sostiene que la vida no es corta",
    "qué hacemos con el tiempo que no haríamos con el dinero",
    "a quiénes llama ocupados, que no son los que más trabajan",
    "qué le pasa a quien vive esperando el momento adecuado",
    "cuál de los tres tiempos es el único que ya es tuyo",
  ],

  "gen-historia": [
    "por qué nadie leyó a Mendel durante treinta y cinco años",
    "dónde empezó realmente la eugenesia y quién copió a quién",
    "por qué un gen no es un plano sino un interruptor",
    "qué pasó en 1975 cuando los científicos se pararon solos",
    "cuántos genes tiene un ser humano y con quién los comparte",
  ],

  "orden-del-tiempo": [
    "qué pasa con dos relojes a distinta altura",
    "por qué no existe un ahora compartido con nada lejano",
    "por qué las ecuaciones no distinguen pasado y futuro",
    "de dónde sale entonces la dirección del tiempo",
    "por qué puedes recordar ayer y no mañana",
  ],

  "revoluciones-cientificas": [
    "en qué consiste realmente el trabajo científico habitual",
    "qué se hace con los resultados que no encajan",
    "por qué una teoría nueva sustituye en vez de completar",
    "qué papel tienen los libros de texto en todo esto",
    "cómo se impone finalmente una teoría sobre otra",
  ],

  "astrofisica-prisa": [
    "qué quedó decidido en los tres primeros minutos",
    "por qué existe materia en lugar de nada",
    "cómo se sabe de qué está hecha una estrella lejana",
    "qué proporción del universo sigue sin identificar",
    "dónde se fabricaron los átomos de tu cuerpo",
  ],

  "doble-helice": [
    "cómo se puede resolver algo así sin medir nada",
    "por qué su primer modelo fue un ridículo público",
    "de dónde salió la fotografía que lo decidió todo",
    "qué error de química les tenía atascados semanas",
    "qué retrato hizo el libro de Rosalind Franklin",
  ],

  "siete-lecciones-fisica": [
    "por qué el espacio no es un escenario donde ocurren las cosas",
    "qué tres rarezas trae la mecánica cuántica",
    "cómo ha cambiado seis veces nuestra imagen del universo",
    "por qué a los físicos no les gusta su teoría más exacta",
    "por qué el pasado se distingue del futuro",
  ],

  "vida-arboles": [
    "cómo se avisan los árboles cuando algo los está mordiendo",
    "qué hay debajo del suelo que conecta un bosque entero",
    "por qué crecer despacio y a la sombra alarga la vida",
    "cómo sincronizan su reproducción para ganar a los animales",
    "qué le han discutido los científicos a este libro",
  ],

  "mundo-demonios": [
    "qué demuestra la parábola del dragón invisible del garaje",
    "qué herramientas usa alguien para detectar un camelo",
    "por qué la caza de brujas no fue ignorancia popular",
    "por qué no creía en las abducciones y sí en la vida extraterrestre",
    "qué previó en 1995 sobre lo que iba a venir",
  ],

  nudge: [
    "en qué se distingue un empujón de una prohibición",
    "por qué la opción marcada por defecto decide casi todo",
    "qué programa consiguió triplicar el ahorro de unos trabajadores",
    "qué tuvieron que corregir de su ejemplo más famoso",
    "qué es el fango y para qué lo usan las empresas",
  ],

  "arte-de-amar": [
    "por qué casi todo el mundo trabaja sobre el problema equivocado",
    "qué diferencia hay entre el amor maduro y el inmaduro",
    "de qué cuatro elementos está hecho, y ninguno es una emoción",
    "por qué quererse a uno mismo es la condición previa",
    "qué escribió en 1956 sobre el mercado de las relaciones",
  ],

  educada: [
    "qué había en aquella casa en lugar de escuela",
    "qué pasaba cuando alguien se hacía daño de verdad",
    "cómo se duda de la propia memoria cuando nadie te cree",
    "qué preguntó en su primera clase de universidad",
    "qué le costó exactamente todo lo que consiguió",
  ],

  "historia-espana": [
    "por qué considera la romanización lo mejor que ocurrió aquí",
    "qué pasó realmente en el año 711",
    "por qué la Reconquista no fue una cruzada de ocho siglos",
    "cómo se explica un siglo de oro con el Estado en quiebra",
    "cuál es la tesis del libro y por qué no se sostiene",
  ],

  "pilares-tierra": [
    "por qué una sociedad hambrienta dedicaba un siglo a un edificio",
    "qué fue la guerra civil inglesa en la que transcurre",
    "cómo se pasó del arco de medio punto al arco apuntado",
    "de dónde salía el dinero para pagar la obra",
    "por qué se derrumbaban tantas catedrales",
  ],

  "homenaje-cataluna": [
    "cómo era de verdad un frente en el invierno de 1936",
    "qué ocurrió en Barcelona en mayo de 1937",
    "qué le pasó una mañana en la trinchera de Huesca",
    "qué descubrió al leer la prensa sobre lo que había visto",
    "por qué este libro es el origen directo de 1984",
  ],

  "capital-siglo-xxi": [
    "por qué las encuestas de hogares no ven a los ricos",
    "qué pasa cuando el capital renta más de lo que crece la economía",
    "qué produjo realmente la igualdad de 1945 a 1980",
    "cuánto pesa hoy la herencia frente a un buen sueldo",
    "qué le han discutido otros economistas con razón",
  ],

  "origenes-totalitarismo": [
    "en qué se distingue el antisemitismo moderno del odio religioso",
    "por qué la riqueza sin función se odia más que el poder",
    "dónde se ensayó gobernar por decreto y sin ley",
    "qué demostraron los apátridas sobre los derechos del hombre",
    "por qué el terror crece cuando ya no queda oposición",
  ],

  "guerra-y-paz": [
    "por qué empezó el libro por el final y fue retrocediendo",
    "qué ve el príncipe Andréi tumbado en Austerlitz",
    "cómo cuenta una batalla desde dentro y sin panorámica",
    "por qué sostiene que ningún general dirige nada",
    "qué encuentra su protagonista en una columna de presos",
  ],

  "guerra-arte": [
    "qué nombre le pone al obstáculo y por qué eso importa",
    "por qué el rechazo que sientes funciona como brújula",
    "qué disfraces adopta y ninguno parece pereza",
    "cuál es la diferencia exacta entre aficionado y profesional",
    "qué parte del libro conviene leer con cuidado",
  ],

  "acto-creativo": [
    "qué cambia entenderse como un recipiente y no como una fuente",
    "cuáles son las cuatro fases y por qué no se mezclan",
    "por qué el único público que puedes conocer eres tú",
    "qué diferencia hay entre la técnica y el punto de vista",
    "de qué avisa la duda cuando aparece",
  ],

  "cartas-joven-poeta": [
    "qué prueba propone para saber si uno debe dedicarse a esto",
    "qué hacer cuando la propia vida parece mal material",
    "qué significa vivir las preguntas en lugar de responderlas",
    "por qué la tristeza no es un daño sino un cambio",
    "en qué consiste el amor entre dos soledades",
  ],

  "mientras-escribo": [
    "qué pasó con las tres páginas que tiró a la papelera",
    "qué le puso su familia delante una tarde en el salón",
    "por qué define escribir como una forma de telepatía",
    "qué reglas concretas da sobre adverbios y diálogos",
    "por qué se niega a planificar una novela",
  ],

  "modos-ver": [
    "por qué no existe una manera inocente de mirar",
    "qué le hizo la fotografía al significado de los cuadros",
    "en qué se diferencia estar desnuda de ser un desnudo",
    "qué relación hay entre el óleo europeo y la propiedad",
    "por qué la publicidad necesita que te falte algo",
  ],

  "aliento-aire": [
    "por qué eligió operar cerebros y no otra cosa",
    "cómo es una residencia de más de cien horas semanales",
    "qué cambia cuando el médico pasa a ser el paciente",
    "por qué su oncóloga se negó a darle cifras",
    "qué decidió hacer con el tiempo que le quedaba",
  ],

  "ser-mortal": [
    "qué le pasa realmente a un cuerpo que envejece",
    "quién inventó la alternativa a la residencia y por qué se degradó",
    "qué ocurrió al meter animales en un geriátrico",
    "qué demostró el ensayo de cuidados paliativos de 2010",
    "cuáles son las cuatro preguntas que cambian la decisión",
  ],

  "digestion-cuestion": [
    "por qué la postura cambia la mecánica de todo el asunto",
    "cómo negocian entre sí tus dos esfínteres",
    "en qué dirección va la conversación con el cerebro",
    "qué hacen los antibióticos con tu flora intestinal",
    "qué tratamiento de este campo funciona de verdad",
  ],

  antifragil: [
    "qué distingue lo frágil, lo robusto y lo antifrágil",
    "por qué una dosis pequeña de daño fortalece",
    "cómo se fabrica una catástrofe queriendo evitarla",
    "qué regla propone para decidir cuándo intervenir",
    "en qué consiste repartir el riesgo como una haltera",
  ],

  factfulness: [
    "por qué la división entre países ricos y pobres ya no sirve",
    "en qué consisten los cuatro niveles de ingreso",
    "cómo pueden ser ciertas a la vez «mal» y «mejorando»",
    "por qué casi ninguna tendencia real es una línea recta",
    "qué error le costó vidas por decidir con prisa",
  ],

  respira: [
    "por qué ningún cráneo antiguo tiene los dientes torcidos",
    "qué hace la nariz que la boca no puede hacer",
    "por qué respirar más aire lleva menos oxígeno a tus tejidos",
    "cuál es el ritmo de respiración que calma y por qué",
    "qué partes del libro no tienen evidencia detrás",
  ],

  "inversor-inteligente": [
    "qué separa invertir de especular según su definición",
    "quién es Míster Mercado y cómo hay que tratarlo",
    "en qué consiste exactamente el margen de seguridad",
    "qué reglas da para quien no quiere dedicarle tiempo",
    "qué pasó con la mejor operación de su carrera",
  ],

  "hombre-rico-babilonia": [
    "por qué la primera regla está antes que ninguna otra",
    "por qué los gastos necesarios crecen hasta igualar lo que ganas",
    "qué diferencia hay entre ahorrar y ser rico",
    "cómo reparte el libro los ingresos para salir de deudas",
    "cuál de sus leyes ha hecho perder más dinero a más gente",
  ],

  "casa-espiritus": [
    "qué son los cuadernos de anotar la vida",
    "por qué el patriarca cuenta su propia versión",
    "cómo vuelve un hijo engendrado en una violación",
    "por qué el país de la novela no se nombra nunca",
    "qué decide la última mujer de la familia",
  ],

  rayuela: [
    "cómo funcionan sus dos órdenes de lectura",
    "qué ocurre en el capítulo que nadie olvida",
    "para qué sirve un idioma inventado desde cero",
    "quién es el viejo que critica la novela desde dentro",
    "por qué el segundo final no termina nunca",
  ],

  "bernarda-alba": [
    "qué ordena Bernarda en su primera intervención",
    "por qué no aparece ningún hombre en los tres actos",
    "qué papel tiene la herencia en todo el conflicto",
    "quién vigila realmente a quién dentro de la casa",
    "por qué la obra termina con la palabra que termina",
  ],

  ficciones: [
    "por qué reseñar un libro inventado en vez de escribirlo",
    "qué demuestra un texto idéntico a otro escrito siglos después",
    "cómo sería una biblioteca con todos los libros posibles",
    "dónde aparecen los universos paralelos por primera vez",
    "por qué recordarlo todo impide pensar",
  ],

  "sobre-tirania": [
    "qué es la obediencia anticipada y por qué decide tanto",
    "qué porcentaje de votos sacaron realmente los nazis",
    "qué papel tuvieron los profesionales con título",
    "cómo se estropea un idioma antes que una ley",
    "qué hizo un incendio en Berlín en veinticuatro horas",
  ],

  mandela: [
    "en qué consistía el apartheid como cuerpo de leyes",
    "por qué en 1961 dejó de defender la no violencia",
    "qué declaró en el juicio que pudo condenarlo a muerte",
    "cómo eran dieciocho años en Robben Island",
    "por qué se puso a estudiar el idioma de sus carceleros",
  ],

  "eichmann-jerusalen": [
    "qué significa exactamente «banalidad del mal»",
    "qué observó Arendt en la manera de hablar del acusado",
    "qué contestó Eichmann cuando le preguntaron por Kant",
    "por qué unas páginas le costaron casi todas sus amistades",
    "qué apareció medio siglo después en unas cintas argentinas",
  ],

  malala: [
    "cómo una emisora de radio pirata cambió un valle entero",
    "qué era el diario que escribió para la BBC a los once años",
    "qué pasó cuando el ejército entró en el Swat",
    "qué cuenta el libro de los meses posteriores al disparo",
    "por qué está prohibido en miles de colegios de Pakistán",
  ],

  "chico-pijama": [
    "por qué todo depende de que el narrador no entienda nada",
    "qué hay de cierto en la casa junto al campo",
    "qué escena del libro olvida casi todo el mundo",
    "qué encontró un estudio con ocho mil alumnos",
    "por qué el museo de Auschwitz pide que no se use solo",
  ],

  "historia-arte": [
    "para qué servían de verdad las pinturas de las cuevas",
    "por qué los egipcios dibujaban así durante tres mil años",
    "cuándo y dónde se inventó exactamente la perspectiva",
    "qué le hizo la fotografía al oficio de pintar",
    "de qué tres insatisfacciones sale todo el arte del siglo XX",
  ],

  "madame-bovary": [
    "de dónde le viene a Emma exactamente su desgracia",
    "qué le hace a una vida entera una sola noche de baile",
    "cómo se escribe una seducción sin escribirla",
    "qué hay dentro del coche que llevó a Flaubert a los tribunales",
    "quién la arruina en realidad y quién acaba ganando",
  ],

  "ana-karenina": [
    "por qué son dos novelas dentro de un mismo libro",
    "qué perdía una mujer rusa al dejar a su marido",
    "por qué el marido engañado no es el villano",
    "qué anuncia la escena de las carreras de caballos",
    "por qué el libro sigue ochenta páginas tras el suicidio",
  ],

  sisifo: [
    "dónde está exactamente lo absurdo, según su definición",
    "a qué llama Camus el suicidio filosófico",
    "qué tres consecuencias saca del absurdo",
    "por qué castigaron a Sísifo en realidad",
    "qué momento del mito le interesa y por qué",
  ],

  extranjero: [
    "qué decide el tiempo verbal en el que está escrita",
    "por qué su protagonista no es un hombre frío",
    "qué detalle del disparo impide leerlo como un accidente",
    "por qué el juicio trata del entierro y no del crimen",
    "a quién no le pone nombre la novela en doscientas páginas",
  ],

  "casi-todo": [
    "quién pesó la Tierra y con qué aparato",
    "cómo la edad del planeta acabó quitando el plomo de la gasolina",
    "por qué el volcán de Yellowstone tardó un siglo en aparecer",
    "cómo se demostró lo del asteroide de los dinosaurios",
    "cuántos fósiles humanos hay en total en el mundo",
  ],

  "mundo-sofia": [
    "con qué imagen define el libro lo que es un filósofo",
    "quién acertó lo de los átomos sin tener con qué mirar",
    "qué demuestra exactamente la alegoría de la caverna",
    "por qué Kant dio la razón a los dos bandos a la vez",
    "qué descubren los personajes a mitad de la novela",
  ],

  "cuerpo-cuenta": [
    "por qué revivir no es lo mismo que recordar",
    "qué zona del cerebro se apaga al revivir un trauma",
    "qué descubrió por accidente una clínica de obesidad",
    "por qué contar lo ocurrido a veces deja peor al paciente",
    "por qué el diagnóstico no sirve para un niño maltratado",
  ],

  freakonomics: [
    "por qué una multa puede empeorar lo que castiga",
    "cómo se detecta a un tramposo sin llegar a verlo",
    "cuánto gana de verdad un vendedor de droga de calle",
    "qué explica la caída del crimen en los años noventa",
    "qué influye realmente en las notas de un niño",
  ],

  "los-miserables": [
    "por qué su conversión no ocurre en la escena de los candelabros",
    "cómo se llega paso a paso de un despido a la calle",
    "por qué Javert no está escrito como un villano",
    "qué revuelta es en realidad la de la barricada",
    "qué hacen cien páginas sobre alcantarillas dentro de una novela",
  ],

  "origen-especies": [
    "por qué el libro empieza hablando de palomas domésticas",
    "qué cálculo de elefantes demuestra la lucha por la existencia",
    "por qué la selección natural no elige a nadie",
    "qué contestó Darwin a la objeción del ojo",
    "qué le faltaba a la teoría el día que se publicó",
  ],

  zaratustra: [
    "por qué «Dios ha muerto» es un diagnóstico, no un ataque",
    "las tres transformaciones por las que pasa quien crea algo propio",
    "qué es el último hombre y por qué gusta tanto",
    "por qué el eterno retorno es una prueba, no una teoría",
    "cómo su hermana convirtió su obra en lo contrario",
  ],

  "si-esto-hombre": [
    "qué se le quita a una persona en las primeras horas",
    "qué significa que allí no haya ningún porqué",
    "cómo funcionaba el mercado interno del campo",
    "por qué dice que los que volvieron no eran los mejores",
    "qué pasó en los diez días antes de la liberación",
  ],

  "guardian-centeno": [
    "qué le pasó a su hermano, y por qué no lo dice",
    "qué le pregunta dos veces a un taxista de madrugada",
    "qué consejo le da el único adulto que lo escucha",
    "de dónde sale el título, que es un verso mal oído",
    "qué decide no hacer en el tiovivo del final",
  ],

  "pedro-paramo": [
    "en qué momento se descubre lo que pasa en Comala",
    "cómo está montado un libro de sesenta y ocho trozos",
    "cómo se hizo Pedro Páramo dueño de todo un valle",
    "qué es lo único que no pudo comprar",
    "qué hizo para que el pueblo se muriera de hambre",
  ],

  "nombre-rosa": [
    "por qué el investigador se apellida Baskerville",
    "por qué nadie puede entrar en la biblioteca",
    "qué libro es el que envenena a quien lo lee",
    "por qué el asesino cree que la risa es peligrosa",
    "por qué el título no significa nada",
  ],

  "viejo-mar": [
    "qué es la teoría del iceberg y qué se calla aquí",
    "por qué el chico y él se inventan una cena",
    "cómo se le acaban las armas contra los tiburones",
    "qué queda del pez al llegar a puerto",
    "qué dijo Hemingway de todos los simbolismos",
  ],

  montecristo: [
    "quiénes lo denunciaron y qué ganaba cada uno",
    "qué le enseña el preso de la celda de al lado",
    "por qué no mata a ninguno de los tres",
    "cómo arruina a cada uno con su propio vicio",
    "en qué momento la venganza se le va de las manos",
  ],

  "moby-dick": [
    "qué barco hundió una ballena de verdad en 1820",
    "qué jura la tripulación alrededor del doblón",
    "por qué el libro se para a explicar anatomía",
    "por qué el color blanco es lo que más asusta",
    "cómo muere Ahab, que no es como se cuenta",
  ],

  dracula: [
    "cómo se descubre que en el castillo no hay espejos",
    "qué le pasó al barco que llegó a puerto sin nadie",
    "cuáles son las reglas del enemigo y para qué sirven",
    "cuánta tecnología de 1897 hay dentro del libro",
    "de dónde salió el nombre, que no es de Vlad",
  ],

  "dorian-gray": [
    "qué le dice el hombre que le cambia la vida",
    "por qué la primera arruga aparece por una frase",
    "qué hace el libro con los dieciocho años que no cuenta",
    "qué le pasa al pintor cuando ve el cuadro",
    "por qué el prólogo famoso se escribió después",
  ],

  frankenstein: [
    "por qué el pecado no fue crearlo sino abandonarlo",
    "cómo aprende a leer espiando por una rendija",
    "qué pide a cambio de desaparecer para siempre",
    "por qué la venganza cae en la noche de bodas",
    "qué le cuenta al capitán sobre el cadáver",
  ],

  "senor-moscas": [
    "contra qué libro está escrito este libro",
    "por qué se apaga la hoguera justo cuando pasa un barco",
    "qué es de verdad la bestia de la montaña",
    "qué le pasa al único que descubre la verdad",
    "cómo acabó el mismo naufragio en la vida real",
  ],

  "gran-gatsby": [
    "por qué el hombre que da las fiestas no bebe",
    "qué separa el dinero viejo del recién hecho",
    "qué oyó Gatsby de verdad en la voz de Daisy",
    "qué son los ojos que vigilan el descampado",
    "quién fue al funeral",
  ],

  metamorfosis: [
    "por qué nadie pregunta cómo ha pasado",
    "qué descubre sobre el dinero que había en casa",
    "cómo se va vaciando su habitación",
    "qué frase dice su hermana al final",
    "qué bicho es en realidad, y por qué Kafka prohibió dibujarlo",
  ],

  "crimen-castigo": [
    "qué decía su artículo sobre los hombres extraordinarios",
    "por qué la teoría se rompe en el minuto dos",
    "en qué consiste el castigo, que no es la cárcel",
    "cómo trabaja un juez que no acusa a nadie",
    "por qué se lo cuenta a Sonia antes que a nadie",
  ],

  fahrenheit: [
    "por qué nadie tuvo que prohibir los libros",
    "qué son las paredes que le hablan a su mujer",
    "por qué quitaron los porches de las casas",
    "las tres cosas que hacen falta para pensar",
    "por qué el jefe de bomberos ha leído más que nadie",
  ],

  "mundo-feliz": [
    "cómo se fabrican noventa y seis personas de un óvulo",
    "por qué se enseña a los niños a odiar las flores",
    "para qué sirve de verdad el soma",
    "por qué está prohibido querer a alguien en concreto",
    "qué pidió el Salvaje cuando pudo pedir cualquier cosa",
  ],

  "republica-platon": [
    "qué desafío plantea el anillo de Giges",
    "por qué construye una ciudad para hablar de una persona",
    "cuáles son las tres partes del alma",
    "qué dice de verdad la alegoría de la caverna",
    "en qué orden se pudre un régimen",
  ],

  odisea: [
    "por qué el poema empieza por su hijo",
    "dónde están los monstruos en el mapa de verdad",
    "el segundo chiste del cíclope, que solo se oye en griego",
    "qué le ofrece Calipso y por qué lo rechaza",
    "cómo lo reconoce Penélope al final",
  ],

  "cerebro-buda": [
    "por qué lo malo se te queda y lo bueno resbala",
    "cuál es el dardo que te lanzas tú",
    "cómo sujetar una experiencia buena veinte segundos",
    "qué palanca física apaga la alarma del cuerpo",
    "qué parte de la neurociencia del libro ya no se sostiene",
  ],

  "gen-egoista": [
    "por qué el cuerpo es solo el vehículo del gen",
    "por qué morirías por dos hermanos y no por uno",
    "en qué condiciones compensa ayudar a un desconocido",
    "por qué la naturaleza produce equilibrios y no óptimos",
    "qué quería decir de verdad la palabra meme",
  ],

  "rebelion-granja": [
    "cómo se toma el poder mientras otros discuten",
    "para qué sirve un enemigo que ya no está",
    "cómo se reescriben las reglas sin que nadie lo note",
    "qué le pasa al que más trabaja de todos",
    "por qué el final es una cena entre socios",
  ],

  "semana-4-horas": [
    "cómo escribir tus miedos para dejar de aplazar una decisión",
    "por qué una tarea se hincha hasta llenar el plazo",
    "cómo comprobar si algo se vende antes de fabricarlo",
    "cómo negociar trabajar fuera de la oficina",
    "qué partes del libro ya no funcionan",
  ],

  "steve-jobs": [
    "qué era el campo de distorsión de la realidad",
    "por qué lo echaron de su propia empresa en 1985",
    "cómo salvó Apple cancelando casi todos sus productos",
    "qué entendía él por simplicidad",
    "por qué tardó nueve meses en operarse",
  ],

  hobbit: [
    "por qué la aventura empieza con un contrato",
    "cómo se le habla a un dragón para salir vivo",
    "quién mata a Smaug, que no es ninguno de los protagonistas",
    "por qué el final es un reparto de oro",
    "por qué Tolkien reescribió el capítulo del anillo en 1951",
  ],

  "sombra-viento": [
    "qué es el Cementerio de los Libros Olvidados",
    "por qué la vida de Daniel repite la de Carax",
    "cómo cuenta la posguerra sin nombrar la política",
    "qué le pasó a Fermín antes de aparecer en el libro",
    "cómo está montada una novela que no se puede soltar",
  ],

  alquimista: [
    "qué es exactamente la Leyenda Personal del libro",
    "por qué el mercader de cristales no va a La Meca",
    "por qué el miedo pesa más que la dificultad",
    "dónde estaba el tesoro y por qué hubo que viajar",
    "qué esconde la promesa del universo conspirando",
  ],

  "orgullo-prejuicio": [
    "por qué las cinco hermanas se quedarían sin casa",
    "cuánto dinero al año hace falta para ser un buen partido",
    "por qué Charlotte se casa con un hombre que no soporta",
    "qué le hace cambiar de opinión sobre Darcy",
    "quién paga en realidad el final feliz",
  ],

  "matar-ruisenor": [
    "por qué el jurado condena con todas las pruebas en contra",
    "por qué la chica que acusa también es una víctima",
    "qué significa exactamente el título",
    "por qué el final consiste en tapar un homicidio",
    "qué cambió cuando en 2015 apareció otro Atticus",
  ],

  quijote: [
    "por qué los molinos ocupan solo dos páginas",
    "quién es el historiador árabe que finge haber escrito el libro",
    "qué pasa cuando todos los personajes han leído tu historia",
    "por qué Sancho resulta ser un buen gobernante",
    "cómo respondió Cervantes al Quijote falso de 1614",
  ],

  "mundo-ayer": [
    "por qué antes de 1914 se viajaba sin pasaporte",
    "qué escondía debajo la moral de la Viena elegante",
    "cómo se le enseña a odiar a un país entero",
    "qué le enseña una inflación a toda una generación",
    "por qué casi nadie se marchó a tiempo",
  ],

  "breve-historia-tiempo": [
    "por qué un universo en expansión tuvo que tener un principio",
    "por qué un gemelo que viaja envejece menos que el otro",
    "por qué los agujeros negros se evaporan poco a poco",
    "qué prohíbe de verdad el principio de incertidumbre",
    "por qué el desorden marca hacia dónde va el tiempo",
  ],

  principe: [
    "por qué describe cómo se gobierna y no cómo debería",
    "por qué es más seguro ser temido que amado",
    "por qué el daño va de golpe y el favor a plazos",
    "qué tienen que ver la zorra y el león",
    "qué pide el último capítulo, que casi nadie lee",
  ],

  "arte-guerra": [
    "los cinco factores que se calculan antes de empezar",
    "por qué asediar una ciudad es siempre el peor recurso",
    "las reglas concretas del engaño, una por una",
    "por qué pagar espías sale más barato que la guerra",
    "cuándo un general debe desobedecer a su rey",
  ],

  "cien-anos": [
    "por qué se repiten los nombres de los Buendía",
    "en qué consiste de verdad el realismo mágico",
    "qué le pasa a Macondo cuando llega algo de fuera",
    "qué matanza real hay detrás de la de las bananeras",
    "qué dicen los pergaminos que se descifran al final",
  ],

  "infinito-junco": [
    "de qué planta dependía toda la memoria escrita",
    "por qué Alejandría no ardió en una noche",
    "por qué coser las hojas cambió el mundo",
    "quién copió a mano lo que hoy leemos",
    "por qué el libro no ha cambiado en dos mil años",
  ],

  "cisne-negro": [
    "por qué mil días de datos no dicen nada del siguiente",
    "en qué se diferencian Mediocristán y Extremistán",
    "por qué el pasado siempre parece haber sido previsible",
    "dónde funcionan los expertos y dónde no",
    "cómo colocarse para que lo imprevisto no te arruine",
  ],

  spqr: [
    "por qué su mito fundacional es un crimen entre hermanos",
    "por qué la historia antigua de Roma se escribió siglos después",
    "qué hizo Roma con los vencidos que no hizo Atenas",
    "por qué la república tardó un siglo en caerse",
    "por qué desconfiar de las historias de emperadores locos",
  ],

  "por-que-dormimos": [
    "los dos sistemas que deciden cuándo te entra sueño",
    "por qué la cafeína no da energía, solo tapa el cansancio",
    "qué hace el sueño profundo y qué hace el REM",
    "por qué diez noches a seis horas te dejan igual",
    "por qué el alcohol seda pero no hace dormir",
  ],

  influencia: [
    "por qué un favor pequeño que no pediste te obliga",
    "por qué un sí pequeño lleva a uno grande",
    "a quién señalar si necesitas ayuda entre mucha gente",
    "por qué obedecemos la bata y no al experto",
    "por qué lo que se está acabando parece mejor",
  ],

  principito: [
    "por qué los mayores necesitan cifras para creer algo",
    "qué le pasa a los seis adultos de los planetas",
    "por qué una rosa entre cinco mil sigue siendo única",
    "el método del zorro para crear un lazo, paso a paso",
    "cómo termina de verdad, que casi nadie recuerda",
  ],

  meditaciones: [
    "cómo separar lo que está en tu mano de lo que no",
    "por qué casi todo se encoge si lo describes sin adornos",
    "por qué morir joven y morir viejo cuestan lo mismo",
    "qué decirse al levantarse antes de tratar con gente",
    "por qué un obstáculo es material de trabajo",
  ],

  cosmos: [
    "cómo se midió la Tierra con dos palos y una sombra",
    "por qué la ciencia griega se paró mil quinientos años",
    "dónde cae la historia humana en el calendario cósmico",
    "en qué estrella se fabricó el calcio de tus huesos",
    "qué le pasó a Venus y por qué nos importa",
  ],

  "1984": [
    "qué es el doblepensar y por qué no es hipocresía",
    "por qué el Partido quita palabras del diccionario",
    "por qué persigue el amor y no solo la política",
    "por qué la tortura busca creencia y no información",
    "qué cambia el apéndice, que está escrito en pasado",
  ],

  flow: [
    "por qué tu atención es un presupuesto y se gasta mal",
    "dónde está la franja exacta en la que aparece el flujo",
    "por qué se fluye más trabajando que en el sofá",
    "en qué se diferencian el placer y el disfrute",
    "por qué el domingo por la mañana se está peor",
  ],

  "busca-sentido": [
    "las tres fases por las que pasaba un prisionero",
    "por qué murió tanta gente la semana después de Navidad",
    "qué es lo único que no te pueden quitar",
    "las tres vías por las que aparece un sentido",
    "cómo se cura un insomnio pidiendo no dormir",
  ],

  mindset: [
    "en qué se diferencian la mentalidad fija y la de crecimiento",
    "por qué elogiar la inteligencia de un niño le perjudica",
    "qué le pasa a tu atención cuando fallas",
    "por qué Enron se hundió por fichar a los más brillantes",
    "cómo se reconoce la voz de la mentalidad fija",
  ],

  "poder-ahora": [
    "por qué el que oye el pensamiento no es el pensamiento",
    "por qué una bronca absurda deja una satisfacción rara",
    "por qué nadie ha sufrido nunca por el momento presente",
    "las tres únicas salidas ante algo que no te gusta",
    "por qué esperar que otro te complete rompe la relación",
  ],

  "monje-ferrari": [
    "cómo se cuida la mente como se cuida un jardín",
    "qué es el pensamiento opuesto y cómo se usa",
    "qué es el kaizen aplicado a un día normal",
    "por qué estar ocupado no es ser productivo",
    "por qué el Ferrari nunca fue el problema",
  ],

  "sutil-arte": [
    "por qué querer ser positivo te recuerda que no lo eres",
    "por qué la pregunta buena es qué dolor aguantas",
    "en qué se diferencian la culpa y la responsabilidad",
    "por qué creerse especial impide mejorar en nada",
    "por qué tener todas las opciones abiertas empobrece",
  ],

  "cuatro-acuerdos": [
    "por qué una frase de tres segundos dura veinte años",
    "por qué los elogios tampoco son sobre ti",
    "de dónde salen casi todas las peleas de pareja",
    "por qué tu mejor esfuerzo cambia cada día",
    "por qué perdonar es un asunto de interés propio",
  ],

  ikigai: [
    "qué significa ikigai de verdad en japonés",
    "por qué el diagrama de los cuatro círculos no es japonés",
    "qué es el hara hachi bu y por qué funciona",
    "qué es un moai y por qué dura toda la vida",
    "qué dicen los estudios sobre tener un propósito",
  ],

  "pensar-rapido": [
    "en qué se diferencian los dos sistemas con que piensas",
    "por qué una historia coherente parece más probable",
    "cómo un número dicho al azar te cambia el precio",
    "por qué perder cien duele más que ganar cien",
    "por qué de algo solo recuerdas el pico y el final",
  ],

  "inteligencia-emocional": [
    "por qué reaccionas antes de saber a qué reaccionas",
    "qué es un secuestro emocional y cómo se corta",
    "las cinco capacidades y por qué van en ese orden",
    "qué predijo aguantar sin comerse una golosina a los cuatro años",
    "los cuatro modos de discutir que rompen una pareja",
  ],

  "mente-millonaria": [
    "por qué el dinero que llega de golpe no se queda",
    "las tres vías por las que heredaste tu idea del dinero",
    "la diferencia entre jugar a ganar y a no perder",
    "el reparto en seis frascos, con sus porcentajes",
    "por qué cobrar por horas te pone un techo calculable",
  ],

  "piensa-hazte-rico": [
    "por qué un deseo sin cifra ni fecha no vale",
    "los seis pasos para convertir una idea en un plan",
    "por qué Ford no se molestaba en saber datos generales",
    "qué es una mente maestra y para qué sirve",
    "cómo distinguir una derrota temporal de un fracaso",
  ],

  "amigos-influir": [
    "por qué la crítica solo consigue que el otro se defienda",
    "en qué se diferencian el aprecio y la adulación",
    "por qué en el anzuelo va gusano y no fresas",
    "cómo admitir un error antes de que te lo digan",
    "por qué cambiar «pero» por «y» cambia una bronca entera",
  ],

  "padre-rico": [
    "la diferencia entre un activo y un pasivo, en una línea",
    "por qué la casa donde vives no es una inversión",
    "por qué cobrar más solo agranda la rueda",
    "qué significa pagarse a uno mismo primero",
    "los cinco miedos que frenan a quien no invierte",
  ],

  "psicologia-dinero": [
    "por qué cada uno decide con la vida que le tocó",
    "cómo separar lo que fue mérito de lo que fue suerte",
    "por qué Buffett ganó casi todo después de los cincuenta",
    "por qué casi todo se juega en un puñado de días",
    "en qué se diferencian ser rico y tener riqueza",
  ],

  "poder-habitos": [
    "las tres piezas de las que está hecho cualquier hábito",
    "por qué un hábito no se borra y solo se sustituye",
    "por qué un solo hábito arrastra a todos los demás",
    "cómo se entrena el autocontrol sin gastarlo",
    "cómo unos grandes almacenes detectan un embarazo",
  ],

  "siete-habitos": [
    "por qué eliges siempre la respuesta, aunque no lo parezca",
    "cómo distinguir tu círculo de preocupación del de influencia",
    "por qué lo urgente se come siempre lo importante",
    "qué es la cuenta bancaria emocional y cómo se ingresa",
    "por qué escuchamos para contestar y no para entender",
  ],

  sapiens: [
    "por qué hubo seis especies humanas y solo queda una",
    "cómo una ficción compartida permite cooperar entre desconocidos",
    "por qué la agricultura empeoró la vida de casi todos",
    "qué sostiene el valor del dinero cuando nadie lo respalda",
    "por qué más poder no ha traído más felicidad",
  ],

  "habitos-atomicos": [
    "por qué los resultados llegan mucho después que los hábitos",
    "por qué el sistema importa más que la meta",
    "cómo un hábito cambia quién crees que eres",
    "cómo apilar un hábito nuevo sobre uno que ya tienes",
    "la regla de los dos minutos para no aplazar",
  ],

  "club-5-manana": [
    "cómo repartir la primera hora del día en tres bloques de veinte minutos",
    "por qué madrugar se decide la noche anterior y no por la mañana",
    "cuánto tarda de verdad en instalarse un hábito, y en qué semana se abandona",
    "qué son la regla del 90/90/1 y el ritmo de 60 y 10",
    "por qué el descanso es parte del rendimiento y no su premio",
  ],

  "trabajo-profundo": [
    "por qué la atención no vuelve entera después de cada interrupción",
    "las cuatro maneras de meter concentración en una vida normal",
    "cómo montar un ritual que quite decisiones en vez de gastar voluntad",
    "por qué conviene descansar de la distracción y no de la concentración",
    "cómo elegir qué aplicaciones se quedan y cuáles sobran",
  ],

  "armas-germenes": [
    "por qué unos pueblos llegaron a otros y no al revés",
    "cuántos animales grandes se han domesticado en toda la historia",
    "qué tiene que ver la forma de un continente con su agricultura",
    "por qué la viruela mató más que todos los conquistadores juntos",
    "de dónde salieron la escritura, el Estado y los ejércitos",
  ],

  "diario-ana-frank": [
    "cómo se vivía en un escondite de cincuenta metros y ocho personas",
    "por qué Ana estaba reescribiendo su diario para publicarlo",
    "qué pasó la mañana del 4 de agosto de 1944",
    "qué le quitó su padre al libro antes de publicarlo",
    "por qué leerla como un símbolo de esperanza la deja en nada",
  ],

  "homo-deus": [
    "por qué el hambre, la peste y la guerra han dejado de ser destinos",
    "qué persigue la humanidad ahora que los ha resuelto",
    "por qué la felicidad tiene un techo bioquímico",
    "cómo los algoritmos acaban conociéndote mejor que tu pareja",
    "en qué se diferencian la inteligencia y la conciencia",
  ],
};
