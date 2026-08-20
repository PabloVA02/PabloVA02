import type { Resumen } from "./tipos";

/* ==========================================================================
   Psicología.

   A partir de aquí los resúmenes se agrupan por categoría en vez de un
   fichero por libro. Con cinco libros daba igual; con ciento veinte, un
   directorio de ciento veinte ficheros es peor de recorrer que ocho de
   quince. El catálogo sigue siendo la única fuente de verdad sobre qué hay.
   ========================================================================== */

export const INFLUENCIA: Resumen = {
  id: "influencia",
  titulo: "Influencia",
  autor: "Robert Cialdini",
  ano: 1984,
  gancho: "Se pasó tres años infiltrado como vendedor de coches, teleoperador y captador de donativos, tomando notas de lo que le hacían.",
  porQue:
    "Es el catálogo más completo de los seis resortes que hacen decir que sí, escrito por alguien que quería aprender a defenderse de ellos.",
  partes: [
    {
      titulo: "Salida: un profesor que compraba todo lo que le vendían",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Robert Cialdini empieza el libro confesando algo poco habitual en un catedrático. Dice que toda su vida ha sido un primo: compraba suscripciones que no quería, donaba a organizaciones de las que no había oído hablar y salía de los concesionarios con coches que no había ido a buscar.",
        },
        {
          forma: "texto",
          texto:
            "Esa confesión no es un recurso literario. Cialdini ha contado en entrevistas que de crío ya le vendían de todo, que su casa se llenó de enciclopedias y suscripciones, y que decidió estudiar psicología social en parte para entender qué le pasaba a él. Aquella casa estaba llena de cosas inútiles.",
        },
        {
          forma: "texto",
          texto:
            "Ese arranque explica también el tono de todo el libro. No hay superioridad en ninguna página: el autor se pone siempre del lado del que cae, cuenta sus propias meteduras de pata y describe las tácticas como quien avisa, no como quien las vende. Nadie queda por encima en estas páginas.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar qué tipo de libro es. No es un tratado académico ni un manual de ventas: es un ensayo divulgativo escrito por un investigador, con ejemplos de calle, estudios citados por encima y una organización pensada para que se recuerde sin apuntar nada. Leerlo como manual de ventas lo estropea.",
        },
        {
          forma: "texto",
          texto:
            "Como era profesor de psicología social, decidió estudiarlo. La pregunta era muy concreta: qué hacen exactamente los vendedores, los captadores de fondos y los publicistas para que alguien acabe diciendo que sí a algo que no quería hacer diez minutos antes. La pregunta tardó tres años en contestarse.",
        },
        {
          forma: "clave",
          rotulo: "Su método",
          frase: "Tres años contestando anuncios de trabajo y aprendiendo el oficio desde dentro, sin decir a qué se dedicaba.",
        },
        {
          forma: "texto",
          texto:
            "Se formó como vendedor de coches, trabajó captando donativos por teléfono y pasó por agencias de publicidad, con un cuaderno donde apuntaba cada táctica que veía funcionar. Ese trabajo de campo es lo que distingue el libro de cualquier manual de laboratorio. Nadie en aquellas oficinas sabía quién era.",
        },
        {
          forma: "texto",
          texto:
            "La parte del concesionario es la que más material le dio. Aprendió el guion completo de la venta de un coche, incluido el momento en que el vendedor se levanta a consultar con un jefe que a veces no existe, y describe cada paso con nombre técnico.",
        },
        {
          forma: "texto",
          texto:
            "De aquel trabajo de campo salió una observación que él subraya. Los profesionales no habían leído psicología, pero sabían perfectamente qué funcionaba, porque llevaban años haciendo un experimento diario con cientos de clientes y quedándose solo con lo que daba resultado. El oficio iba por delante de la ciencia.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale su manera de elegir qué principios entraban en la lista. Buscaba resortes que aparecieran a la vez en los manuales internos de varios oficios distintos y que además tuvieran experimentos publicados, y solo seis cumplían las dos condiciones. Los descartados no aparecen en el libro.",
        },
        {
          forma: "texto",
          texto:
            "El otro pie del libro sí es de laboratorio. Cialdini llevaba años haciendo experimentos en la universidad, y en cada capítulo alterna lo que vio en la calle con estudios publicados, de modo que cada táctica viene con una explicación medida. Ninguna táctica entra sin las dos patas.",
        },
        {
          forma: "arte",
          texto:
            "La imagen con la que abre es una pava. Las pavas cuidan a sus crías porque reaccionan a un piído concreto, y si a un turón disecado, que es su peor enemigo, se le mete una grabación con ese sonido, la pava lo acoge debajo del ala sin dudarlo.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El experimento del turón se hizo con grabadoras metidas dentro del animal disecado. Con el sonido puesto, la pava lo cobijaba; en cuanto se apagaba, lo atacaba a picotazos, y al volver a encenderlo lo acogía otra vez sin ningún periodo de duda. Aquello se publicó en los años sesenta.",
        },
        {
          forma: "texto",
          texto:
            "Cialdini usa esa escena para introducir un vocabulario que recorre el libro. Habla de secuencias que se ponen en marcha con una señal, como una cinta que se rebobina y se dispara sola, y de que casi todo el mundo tiene bastantes más de las que cree.",
        },
        {
          forma: "texto",
          texto:
            "Ese vocabulario tiene una virtud y un riesgo. La virtud es que hace visible algo que no se nota mientras ocurre; el riesgo es tratar a las personas como máquinas que se activan con un botón, cosa que el propio libro matiza varias veces. Ninguna persona reacciona igual que una pava.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el modelo de todo el libro. Sostiene que las personas también tenemos secuencias automáticas que se disparan con una señal, que casi siempre acertamos usándolas, y que un profesional puede imitar la señal para que la secuencia salte cuando no debería. La señal falsificada es toda la trampa.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 1984 y no fue un éxito inmediato. Empezó en el mundo académico, se fue extendiendo por las escuelas de negocios y con los años acabó vendiendo varios millones de ejemplares en más de cuarenta idiomas, con una edición ampliada en 2021.",
        },
        {
          forma: "texto",
          texto:
            "Las cifras de ventas conviene mirarlas con calma. Se habla de varios millones de ejemplares, un número que da la editorial sumando ediciones y traducciones a lo largo de cuatro décadas, y que incluye la versión revisada que salió en 2021 con material nuevo. Ninguna editorial desglosa nunca esos totales.",
        },
        {
          forma: "texto",
          texto:
            "Aquella edición de 2021 añadió capítulos y cambió ejemplos. Incorporó el séptimo principio, sustituyó buena parte de los casos comerciales por otros de internet y de redes sociales, y matizó varios estudios que habían quedado en duda desde la primera edición. Conviene buscar esa versión y no otra.",
        },
        {
          forma: "texto",
          texto:
            "El séptimo principio, la unidad, es el más difícil de resumir. Dice que decimos que sí con mucha más facilidad a quien sentimos que es de los nuestros, no porque se nos parezca, sino porque lo contamos dentro del mismo grupo que nosotros. Pertenecer pesa más que parecerse.",
        },
        {
          forma: "texto",
          texto:
            "Su estructura es la de un catálogo y por eso se recuerda. Seis principios, un capítulo para cada uno, con el mismo esquema: qué es, un experimento que lo demuestra, cómo lo usan los profesionales y un apartado final sobre cómo defenderse. Se puede leer un capítulo suelto.",
        },
        {
          forma: "texto",
          texto:
            "En 2016 añadió un séptimo principio en otro libro.",
        },
        {
          forma: "clave",
          rotulo: "Los seis originales",
          frase: "Reciprocidad, compromiso, prueba social, simpatía, autoridad y escasez.",
        },
        {
          forma: "texto",
          texto:
            "El séptimo, añadido treinta años después, es la unidad.",
        },
      ],
    },
    {
      titulo: "Primera parada: deber, coherencia y mirar al de al lado",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El primer principio es el más antiguo de todos. La regla de devolver un favor aparece en todas las sociedades conocidas, y funciona tan bien que aceptar algo gratis deja una incomodidad que la mayoría prefiere quitarse de encima cuanto antes. Devolver algo cuanto antes quita esa sensación.",
        },
        {
          forma: "texto",
          texto:
            "Los antropólogos que cita lo consideran una de las bases de la vida social. Sin la obligación de devolver no habría sido posible el intercambio, ni la división del trabajo, ni dar algo a alguien confiando en que devolvería el favor bastante tiempo después. Ninguna sociedad conocida prescinde de esa regla.",
        },
        {
          forma: "texto",
          texto:
            "Hay un experimento posterior que lo aprieta todavía más. En restaurantes, dejar un caramelo con la cuenta sube la propina; dejar dos la sube bastante más; y dejar uno, empezar a irse y volverse para dejar otro la dispara, porque parece una decisión personal. La segunda vuelta es la que dispara todo.",
        },
        {
          forma: "texto",
          texto:
            "Ese estudio de los caramelos se ha convertido en un clásico de los cursos de hostelería. Las subidas medidas van de un porcentaje pequeño a otro bastante mayor, y el tamaño exacto varía entre repeticiones, pero la dirección del efecto se mantiene. Conviene desconfiar de las cifras redondas aquí.",
        },
        {
          forma: "texto",
          texto:
            "El experimento que lo demuestra es de 1971 y es sencillísimo. Un desconocido salía un momento y volvía con dos refrescos, uno para él y otro para el sujeto; después les pedía a todos que le compraran papeletas de una rifa, y los que habían recibido refresco compraron el doble.",
        },
        {
          forma: "clave",
          rotulo: "El detalle que importa",
          frase: "El refresco no lo habían pedido, y aun así generaba la obligación de devolverlo.",
        },
        {
          forma: "texto",
          texto:
            "De ese principio sale una táctica con nombre propio. Consiste en pedir primero algo enorme que sabes que van a rechazar y retirarse después a lo que de verdad querías, porque la retirada se lee como una concesión que hay que corresponder. El nombre técnico es portazo en la cara.",
        },
        {
          forma: "texto",
          texto:
            "La versión doméstica de esa táctica la usan los niños sin que nadie se la enseñe. Piden primero irse toda la noche, aceptan la negativa con cara de resignación y consiguen a continuación quedarse hasta las dos, que era exactamente lo que querían desde el principio.",
        },
        {
          forma: "texto",
          texto:
            "El experimento de los menores y el zoo lo hizo el propio Cialdini con dos colegas. Es de 1975, se repitió en varias formas y sigue siendo uno de los pocos de su libro que ha aguantado bien los intentos posteriores de repetición. Su firma aparece la primera en aquel artículo.",
        },
        {
          forma: "texto",
          texto:
            "Los números conviene decirlos con cuidado de todos modos. Fueron unas decenas de estudiantes por condición, en un campus concreto y en 1975, y el paso de uno de cada seis a uno de cada dos es exacto en ese estudio y no una ley general.",
        },
        {
          forma: "texto",
          texto:
            "El estudio que la mide es de los mejores del libro. A unos estudiantes les pidieron acompañar a un grupo de menores infractores al zoo un día, y aceptó uno de cada seis; a otros les pidieron antes dos años de trabajo voluntario, y tras negarse aceptó la mitad.",
        },
        {
          forma: "texto",
          texto:
            "El segundo principio es la necesidad de parecer coherentes. Una vez que alguien ha dicho algo en voz alta, lo ha escrito o ha dado un primer paso pequeño, se comporta después como si aquello le obligara, sobre todo si nadie le forzó a decirlo.",
        },
        {
          forma: "texto",
          texto:
            "El detalle que más importa es que el compromiso sea voluntario. Los estudios muestran que si alguien firma algo bajo presión o a cambio de mucho dinero, el efecto desaparece: solo obliga lo que uno cree haber elegido por su cuenta. Firmar por dinero no compromete a nadie.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale su explicación para los campos de prisioneros chinos en Corea. En vez de torturar, pedían a los presos estadounidenses escribir frases pequeñas y aparentemente inofensivas, y a partir de ahí muchos se fueron ajustando a lo que ellos mismos habían firmado. Aquello ocurrió a principios de los cincuenta.",
        },
        {
          forma: "texto",
          texto:
            "Los 7 hábitos de la gente altamente efectiva, de Covey, que está en este catálogo, usa la misma palanca en positivo. Covey pide escribir un enunciado personal de principios precisamente porque lo escrito obliga, que es el mecanismo que Cialdini describe como arma. La misma palanca sirve para las dos cosas.",
        },
        {
          forma: "texto",
          texto:
            "El experimento clásico es de un barrio de California en 1966. Pidieron a unos vecinos poner en el jardín un cartel enorme y feo de conducir con cuidado, y aceptó menos de uno de cada cinco; entre los que dos semanas antes habían puesto una pegatina pequeña, aceptaron tres de cada cuatro.",
        },
        {
          forma: "texto",
          texto:
            "El tercer principio es mirar lo que hacen los demás. Cuando no sabemos qué hacer, y sobre todo cuando la situación es ambigua, la manera más rápida de decidir es fijarse en la gente de alrededor y suponer que ellos sí saben. Casi siempre esa suposición resulta acertada.",
        },
        {
          forma: "texto",
          texto:
            "Ese atajo funciona bien casi siempre y por eso lo usamos. Si veinte personas corren hacia una salida, correr con ellas es lo sensato; el problema aparece cuando la conducta de los demás no está informada y todos se están copiando entre sí. Nadie está mirando el problema directamente.",
        },
        {
          forma: "texto",
          texto:
            "La situación en que peor funciona es la emergencia con muchos testigos. Cada uno mira a los demás para decidir si aquello es grave, todos ven caras tranquilas porque los demás están haciendo lo mismo, y el resultado es una calma colectiva que nadie siente por dentro.",
        },
        {
          forma: "texto",
          texto:
            "Esa explicación tiene además una consecuencia práctica que salva vidas. Si el problema es que nadie sabe si hay una emergencia, basta con que una sola persona la nombre en voz alta para que la duda colectiva se rompa y el resto reaccione. Señalar con el dedo funciona mejor que gritar.",
        },
        {
          forma: "texto",
          texto:
            "De ahí salen las risas enlatadas, las colas puestas a propósito a la entrada de un local, los camareros que dejan billetes en el bote de propinas antes de abrir y la coletilla de que un producto es el más vendido de su categoría. Ninguna de esas señales es espontánea.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí sale también el efecto contrario en una emergencia.",
        },
        {
          forma: "clave",
          rotulo: "La regla práctica",
          frase: "Si te pasa algo entre mucha gente, señala a una persona concreta y pídele ayuda a ella.",
        },
        {
          forma: "texto",
          texto:
            "Mientras nadie se mueva, cada uno lee la quietud del otro como que no pasa nada.",
        },
      ],
    },
    {
      titulo: "Segunda parada: caer bien, mandar y escasear",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El cuarto principio es el más obvio y el peor defendido. Decimos que sí con mucha más facilidad a quien nos cae bien, y lo que hace que alguien caiga bien está bastante estudiado: el aspecto, el parecido, los cumplidos y el simple hecho de vernos a menudo.",
        },
        {
          forma: "texto",
          texto:
            "El peso del aspecto físico está mejor documentado de lo que gustaría. Hay estudios sobre juicios, sobre entrevistas de trabajo y sobre elecciones donde el atractivo de una persona predice el resultado, y donde quienes deciden niegan que haya influido en nada. Ningún jurado admitiría eso en voz alta.",
        },
        {
          forma: "texto",
          texto:
            "El parecido funciona con detalles ridículamente pequeños. Compartir el nombre de pila, la ciudad de nacimiento o incluso una marca de ropa aumenta de forma medible la disposición a decir que sí, y los vendedores formados lo buscan a propósito en los primeros minutos. Preguntar de dónde eres no es casual.",
        },
        {
          forma: "texto",
          texto:
            "Los cumplidos funcionan incluso cuando se sabe que son falsos. Hay estudios en los que los participantes recibían halagos claramente interesados de alguien que quería algo de ellos, y la simpatía hacia esa persona subía igual, aunque supieran perfectamente lo que estaba pasando. Saberlo no protege prácticamente de nada.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo comercial que usa son las reuniones de venta en casas particulares. La empresa no vende a desconocidos: vende a través de una amiga que invita a otras amigas, de modo que rechazar el producto se parece bastante a rechazar a la anfitriona. La anfitriona se lleva una comisión discreta.",
        },
        {
          forma: "texto",
          texto:
            "Cuenta también el caso de un vendedor de coches que entró en los récords. Mandaba cada mes miles de tarjetas a sus clientes y posibles clientes, todas con el mismo mensaje impreso: que le caían bien. Nadie se lo creía del todo y funcionaba igual.",
        },
        {
          forma: "clave",
          rotulo: "Su aviso sobre este",
          frase: "El problema no es que te caiga bien alguien: es que te caiga bien demasiado deprisa y sin motivo.",
        },
        {
          forma: "texto",
          texto:
            "El quinto principio es la autoridad, y aquí se apoya en el experimento más famoso de la psicología. Personas corrientes administraban lo que creían descargas eléctricas peligrosas a un desconocido porque un hombre con bata se lo pedía con calma y sin amenazar. Aquel hombre no tenía ningún poder real.",
        },
        {
          forma: "texto",
          texto:
            "Aquel experimento se hizo a principios de los años sesenta en una universidad de Estados Unidos. Cerca de dos tercios de los participantes llegaron hasta el final de la escala de descargas, y ninguno de los psiquiatras consultados antes había previsto un resultado ni parecido.",
        },
        {
          forma: "texto",
          texto:
            "Cialdini le da una lectura ligeramente distinta a la habitual. No lo lee como una demostración de que cualquiera puede ser cruel, sino como una demostración de que obedecer a la autoridad es un atajo tan automático que sigue funcionando cuando la orden es absurda.",
        },
        {
          forma: "texto",
          texto:
            "Un pequeño empujón, de Thaler y Sunstein, que anda por este catálogo, aprovecha esa misma obediencia sin llamarla así. Colocar la opción recomendada como la que viene marcada por defecto funciona porque la mayoría no discute lo que parece venir de arriba. La casilla marcada decide por mucha gente.",
        },
        {
          forma: "texto",
          texto:
            "El detalle que más le interesa no es la bata sino los símbolos. Comprueba que basta un título, un uniforme o un coche caro para que la gente obedezca, y que los tres funcionan igual cuando el que los lleva no tiene ninguna autoridad real.",
        },
        {
          forma: "texto",
          texto:
            "El caso clínico que cuenta es el que mejor se recuerda. Un médico escribió en una orden que unas gotas iban en el oído derecho, abreviando la palabra, y la enfermera acabó administrándolas por vía rectal sin que ni ella ni el paciente pusieran ninguna objeción.",
        },
        {
          forma: "texto",
          texto:
            "El sexto principio es la escasez, y es el que mejor ha aguantado. Lo que es difícil de conseguir nos parece mejor, y lo que estamos a punto de perder pesa más que lo que podríamos ganar, aunque se trate exactamente de la misma cosa.",
        },
        {
          forma: "texto",
          texto:
            "El mecanismo psicológico que hay detrás tiene nombre desde los años sesenta. Se llama reactancia: cuando alguien percibe que una opción se le está cerrando, la desea más justamente porque le están quitando la libertad de elegirla, y no por lo que valga. Perder una opción duele más que ganarla.",
        },
        {
          forma: "texto",
          texto:
            "Ese mismo mecanismo explica una escena doméstica muy conocida. Un juguete que llevaba meses tirado en un rincón se vuelve urgentísimo en cuanto otro niño lo coge, y no porque el juguete haya cambiado, sino porque ha dejado de estar disponible. Bastan diez segundos para que ocurra.",
        },
        {
          forma: "texto",
          texto:
            "Los fabricantes de juguetes tienen además una versión estacional de eso. Anuncian mucho un juguete antes de las fiestas y mandan pocas unidades a las tiendas, de modo que los padres prometen uno que no encuentran y acaban comprando dos cosas en vez de una.",
        },
        {
          forma: "texto",
          texto:
            "El experimento aquí es un tarro de galletas. A unos participantes les dieron a probar galletas de un tarro con diez y a otros de un tarro con dos, con las mismas galletas, y los del tarro casi vacío las valoraron mejor y dijeron que pagarían más por ellas.",
        },
        {
          forma: "texto",
          texto:
            "Aquel estudio tenía además una tercera condición muy reveladora. A un grupo le pusieron delante el tarro lleno y se lo cambiaron por el casi vacío mientras miraban, y esas galletas, que habían escaseado de golpe, fueron las mejor valoradas de todo el experimento. Cambiar el tarro delante de ellos bastaba.",
        },
        {
          forma: "texto",
          texto:
            "Y hubo una cuarta condición todavía más incómoda. Cuando les dijeron que las galletas escaseaban porque otros participantes se las habían llevado, la valoración subió aún más que cuando la escasez se explicaba por un error de la organización. La competencia por algo pesa más que la simple falta de existencias.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale el detalle que usan los anuncios de viajes y de entradas. No basta con decir que quedan pocas plazas: hay que decir que se están acabando porque otros las están comprando ahora mismo, y por eso aparecen esos avisos en las pantallas.",
        },
        {
          forma: "texto",
          texto:
            "Y las mejor valoradas fueron las que empezaron siendo abundantes y escasearon.",
        },
        {
          forma: "clave",
          rotulo: "La defensa que propone",
          frase: "Preguntarse si quieres la cosa o si solo quieres tenerla antes de que se acabe.",
        },
        {
          forma: "texto",
          texto:
            "Las dos respuestas se sienten igual por dentro, y esa es toda la dificultad.",
        },
      ],
    },
    {
      titulo: "Tercera parada: lo que no ha aguantado el tiempo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El problema mayor del libro no es suyo, es de su disciplina. Casi todos los estudios en los que se apoya son de los años sesenta y setenta, con pocos participantes, un solo experimento y ninguna repetición posterior, que era el estándar de la época.",
        },
        {
          forma: "texto",
          texto:
            "Esa manera de trabajar tenía un incentivo perverso. Las revistas publicaban resultados llamativos y no publicaban las repeticiones, así que un experimento pequeño con un efecto grande entraba en los manuales y nadie volvía a comprobarlo durante treinta años. Publicar una repetición fallida no daba prestigio a nadie en aquellos años.",
        },
        {
          forma: "texto",
          texto:
            "El propio Cialdini se ha pronunciado sobre eso más de una vez. Ha reconocido públicamente que algunos hallazgos de su campo no se sostienen, ha retirado ejemplos de ediciones posteriores y ha pedido que la disciplina cambie sus costumbres de publicación. Pocos autores de éxito hacen algo así.",
        },
        {
          forma: "texto",
          texto:
            "Esa reacción es lo que separa este libro de otros de su género. Muchos autores de éxito defienden sus ejemplos hasta el final; aquí el autor ha aceptado las correcciones, ha cambiado el texto y ha dicho por escrito qué partes habían quedado tocadas. Rectificar por escrito cuesta ventas y prestigio.",
        },
        {
          forma: "texto",
          texto:
            "A partir de 2011 esa manera de trabajar entró en crisis. Los intentos sistemáticos de repetir experimentos clásicos de psicología social encontraron que muchos daban efectos mucho menores o directamente ninguno, y varias piezas citadas en este libro están en esa lista. Aquella crisis cambió la disciplina entera.",
        },
        {
          forma: "texto",
          texto:
            "El caso más llamativo es una historia que casi todo el mundo conoce mal. Cialdini cuenta el asesinato de una mujer en Nueva York en 1964 ante decenas de vecinos que supuestamente no hicieron nada, y esa versión venía de un artículo de periódico que resultó ser falso en lo esencial.",
        },
        {
          forma: "texto",
          texto:
            "Aquel artículo lo publicó un diario de Nueva York dos semanas después del crimen. Hablaba de treinta y ocho testigos que vieron el ataque desde sus ventanas y no movieron un dedo, y aquella cifra pasó a los libros de texto de medio mundo. Nunca se comprobó la cifra en su momento.",
        },
        {
          forma: "texto",
          texto:
            "La reconstrucción posterior la hicieron periodistas e investigadores décadas después. Revisaron los expedientes del juicio y las llamadas registradas, y encontraron que muchos vecinos oyeron algo sin ver nada, que varios avisaron y que la versión famosa se había simplificado enormemente. El expediente completo salió a la luz tardísimo.",
        },
        {
          forma: "texto",
          texto:
            "El propio diario que publicó aquello acabó reconociéndolo. Décadas después revisó su versión y admitió que el número de testigos y su pasividad se habían exagerado, aunque para entonces la historia llevaba media vida circulando por los manuales de psicología. Rectificar medio siglo después no borra nada.",
        },
        {
          forma: "clave",
          rotulo: "Lo que se sabe hoy de aquel caso",
          frase: "Hubo menos testigos, varios llamaron a la policía y una vecina bajó a la calle a acompañarla.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir que el efecto sí existe aunque el ejemplo fuera malo. Las decenas de experimentos que se hicieron después sobre grupos y ayuda encontraron el fenómeno una y otra vez, así que lo que falla es la anécdota que lo ilustra, no el principio.",
        },
        {
          forma: "texto",
          texto:
            "Otra parte discutida es la del contagio de los suicidios. El libro cita una investigación según la cual los suicidios muy difundidos por la prensa van seguidos de una subida de muertes accidentales, y ese trabajo lleva décadas discutiéndose sin que se haya cerrado la cuestión.",
        },
        {
          forma: "texto",
          texto:
            "Ese trabajo es de los años setenta y se apoya en series estadísticas. Otros investigadores han intentado repetirlo con datos distintos y han obtenido resultados que no siempre coinciden, aunque las recomendaciones actuales sobre cómo informar de un suicidio sí van en esa línea. La discusión sigue abierta entre especialistas.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar qué se acepta hoy y qué no. Que la manera de informar sobre un suicidio influye en los siguientes está bastante aceptado y ha dado lugar a guías para periodistas; los números concretos de aquel trabajo antiguo son otra cosa. Las guías para periodistas existen desde entonces.",
        },
        {
          forma: "texto",
          texto:
            "Esa distinción vale para casi todo el libro. Los seis principios como tales están razonablemente asentados; lo que se ha ido cayendo son estudios concretos, cifras exactas y anécdotas, que es donde se apoya buena parte del atractivo de la lectura. Los ejemplos son lo primero que caduca.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una crítica de fondo que el libro no responde. Los seis principios describen muy bien lo que ocurre, pero no explican por qué esos seis y no otros, ni cómo se combinan cuando aparecen a la vez, que es lo que pasa en casi cualquier situación real.",
        },
        {
          forma: "texto",
          texto:
            "Los ejemplos comerciales han envejecido de otra manera. Las enciclopedias a domicilio, las reuniones de tuppers y los captadores en los aeropuertos pertenecen a un mundo que ya no existe, y hay que traducirlos mentalmente a la venta por internet mientras se lee. Las tácticas siguen; los escenarios han cambiado.",
        },
        {
          forma: "texto",
          texto:
            "Hay un caso del libro que se resolvió solo con el tiempo. Los captadores que regalaban una flor en los aeropuertos dejaron de funcionar cuando la gente aprendió a reconocer la maniobra, y el propio Cialdini lo cuenta como ejemplo de que estas tácticas se desgastan.",
        },
        {
          forma: "texto",
          texto:
            "Ese desgaste es una de las ideas más útiles del libro y se cita poco. Una táctica de influencia funciona mientras la señal parece auténtica, y en cuanto se hace demasiado visible deja de servir y puede volverse en contra de quien la usa. Ninguna de estas herramientas dura para siempre.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está la razón por la que sigue leyéndose cuarenta años después. Los ejemplos caducan y las cifras se discuten, pero la lista de seis sigue describiendo lo que pasa en cualquier negociación, en cualquier tienda y en cualquier pantalla. Los seis nombres siguen sirviendo de brújula.",
        },
        {
          forma: "texto",
          texto:
            "Precisar lo que el libro no afirma es importante en este caso. No dice que la gente sea tonta ni que estos atajos sean un defecto: dice que funcionan bien casi siempre, que sin ellos no se podría decidir nada, y que el problema aparece cuando alguien los imita a propósito.",
        },
        {
          forma: "texto",
          texto:
            "Tampoco dice que sean los únicos seis.",
        },
        {
          forma: "clave",
          rotulo: "Su criterio para la lista",
          frase: "Eligió los que aparecían una y otra vez en el trabajo de campo y tenían respaldo experimental.",
        },
        {
          forma: "texto",
          texto:
            "El séptimo lo añadió cuando encontró bastantes pruebas para él.",
        },
      ],
    },
    {
      titulo: "Destino: un manual de defensa, no de ataque",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La lectura más extendida del libro es exactamente la contraria de la que quería su autor. Se vende en las mesas de negocios como un manual para convencer, y está escrito por alguien que quería dejar de ser el que caía en todo lo que le ponían delante.",
        },
        {
          forma: "texto",
          texto:
            "El subtítulo original decía a las claras de qué iba. Hablaba de psicología de la persuasión, no de técnicas de venta, y el prólogo avisa desde la primera página de que el destinatario es la posible víctima y no el profesional. Aquella advertencia se sigue pasando por alto.",
        },
        {
          forma: "texto",
          texto:
            "Pensar rápido, pensar despacio, de Kahneman, que anda por este catálogo, explica el mismo fenómeno desde la otra punta. Kahneman describe los atajos mentales desde el laboratorio y sin hablar de vendedores; Cialdini los persigue en la calle y les pone nombre comercial. Uno mira al vendedor y otro al cliente.",
        },
        {
          forma: "texto",
          texto:
            "Los dos libros se leen muy bien seguidos y en ese orden. Cialdini enseña a reconocer las situaciones concretas donde te van a pillar; Kahneman explica por qué la cabeza funciona así y por qué saberlo no basta para dejar de caer. Saberlo ayuda menos de lo que parece.",
        },
        {
          forma: "texto",
          texto:
            "Esa intención está en la estructura de cada capítulo. Después de explicar cómo funciona un principio y quién lo explota, siempre hay un apartado que se titula cómo decir no, con una manera concreta de detectar la trampa y salirse de ella. Ese apartado cierra cada uno de los capítulos.",
        },
        {
          forma: "texto",
          texto:
            "Esos apartados finales son la parte que menos se cita. Ocupan unas pocas páginas de cada capítulo, están escritos en segunda persona y contienen instrucciones concretas para el momento en que uno nota que le están aplicando algo y no sabe cómo salir. Ocupan mucho menos espacio que las tácticas.",
        },
        {
          forma: "texto",
          texto:
            "La estructura del libro se puede aprovechar leyéndolo al revés. Quien tenga poco tiempo puede ir directo a esos apartados de cada capítulo, y con eso se lleva la lista de señales de alarma sin necesidad de los experimentos que las justifican. Perderse los estudios tiene su precio, eso sí.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar que esa lectura rápida se pierde lo mejor. Los experimentos son la parte que convence de verdad, porque leer un consejo de defensa sin haber visto antes el efecto medido no cambia el comportamiento de casi nadie. Un consejo sin la prueba detrás se olvida a los dos días.",
        },
        {
          forma: "clave",
          rotulo: "Su regla general de defensa",
          frase: "No luchar contra el impulso: reconocerlo, y a partir de ahí considerar el trato roto.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que da para la reciprocidad es tajante. Si alguien te hace un favor no pedido para colocarte algo después, la manera de salir no es rechazar el favor por educación, sino aceptarlo y recordar que aquello no era un regalo sino una herramienta.",
        },
        {
          forma: "texto",
          texto:
            "La clave de esa defensa es no equivocarse de enemigo. Rechazar todos los favores por si acaso convierte a cualquiera en una persona desagradable e incapaz de recibir nada, y la regla que propone Cialdini es mucho más fina que eso. Distinguir cuál es cuál lleva algo de práctica.",
        },
        {
          forma: "texto",
          texto:
            "Su distinción es entre un favor y una maniobra. Un favor genuino merece ser devuelto y así funciona la vida social; una maniobra es un favor colocado a propósito para cobrarlo después, y en cuanto se identifica como tal deja de obligar a nada. El regalo de verdad no lleva factura detrás.",
        },
        {
          forma: "texto",
          texto:
            "El poder de los hábitos, de Duhigg, que también está en este catálogo, describe la misma automatización desde dentro. Duhigg explica cómo se instalan las secuencias en el propio cerebro; Cialdini explica cómo alguien de fuera puede accionar las que ya están puestas. Los dos hablan de secuencias automáticas.",
        },
        {
          forma: "texto",
          texto:
            "Para el compromiso propone escuchar al estómago y al corazón. Sostiene que el cuerpo avisa antes que la cabeza cuando estamos a punto de mantener una decisión solo por no contradecirnos, y que basta preguntarse si volveríamos a elegir lo mismo sabiendo lo que sabemos.",
        },
        {
          forma: "texto",
          texto:
            "Para la escasez propone separar dos cosas que se confunden. Una es querer un objeto por lo que hace o por lo que se disfruta con él; otra es quererlo porque se está acabando, y esa segunda no mejora en nada cuando ya lo tienes en casa.",
        },
        {
          forma: "texto",
          texto:
            "Con los años ese asunto se convirtió en su tema principal. Cialdini empezó a hablar de influencia ética, montó una consultora y sostiene que las empresas que usan estos resortes con datos falsos acaban pagándolo, porque el efecto dura una venta y la desconfianza dura años.",
        },
        {
          forma: "texto",
          texto:
            "A los que usan estas técnicas con información falsa los llama contrabandistas. Sostiene que no son solo un problema moral sino un problema económico, porque gastan un recurso común, la confianza, del que después dependen todos los demás vendedores honestos. La palabra se le ocurrió bastante después.",
        },
        {
          forma: "texto",
          texto:
            "Esa idea de la confianza como recurso común es lo más actual del libro. Explica por qué un sector entero se hunde cuando unos pocos abusan, y por qué las reseñas falsas o los descuentos inventados acaban perjudicando también a quien vende de verdad. Nadie repara ese daño en una temporada.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí termina el viaje que empezó con un profesor incapaz de decir que no. Se metió tres años en oficinas de venta para averiguar qué le hacían, salió con seis nombres y un método, y acabó escribiendo el manual de defensa que buscaba para sí mismo.",
        },
        {
          forma: "texto",
          texto:
            "Cómo ganar amigos e influir sobre las personas, de Carnegie, que anda por este catálogo, hace lo mismo medio siglo antes y sin ninguna prueba. Carnegie recomienda sonreír y usar el nombre del otro; Cialdini explica por qué eso funciona y cuándo se convierte en manipulación.",
        },
        {
          forma: "texto",
          texto:
            "Un pequeño empujón, de Thaler y Sunstein, que también está en este catálogo, lleva estos mismos resortes al diseño de políticas públicas. Allí el objetivo no es vender nada, sino colocar las opciones de manera que la gente acabe eligiendo lo que le conviene. La intención es lo único que cambia.",
        },
        {
          forma: "texto",
          texto:
            "Los dos libros usan la misma maquinaria con intenciones distintas.",
        },
        {
          forma: "clave",
          rotulo: "La frase que resume el libro",
          frase: "Los atajos son buenos. El problema es quien los falsifica.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí termina el recorrido que empezó con un profesor comprando lo que no quería.",
        },
      ],
    },
  ],
};

export const MINDSET: Resumen = {
  id: "mindset",
  titulo: "Mindset",
  autor: "Carol Dweck",
  ano: 2006,
  gancho: "Decirle a un niño que es listo le enseña a evitar los problemas difíciles. Está medido con ciento veintiocho niños de diez años.",
  porQue:
    "Es la idea de psicología educativa que más colegios ha cambiado, y también la que peor ha resistido las mediciones a gran escala.",
  partes: [
    {
      titulo: "Ciento veintiocho niños y una frase",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1998, en un colegio de Estados Unidos, ciento veintiocho niños de unos diez años resolvieron una tanda de acertijos fáciles. Todos lo hicieron bien, y a todos se les dijo que habían acertado, con una frase distinta según el grupo. El resto del experimento vino después.",
        },
        {
          forma: "texto",
          texto:
            "El material eran matrices de figuras, un tipo de acertijo visual que se usa en los test de razonamiento. La primera tanda estaba elegida para que todos acertaran, de modo que el elogio llegara igual a todos los niños. Nadie recibió un elogio falso, y eso descarta la explicación más obvia.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle importa porque descarta una explicación alternativa. Nadie fue elogiado por un resultado falso ni por algo que no había hecho, y sin embargo la frase cambió lo que ocurrió después. Una sola frase, dicha una sola vez, cambió el comportamiento de un grupo entero.",
        },
        {
          forma: "texto",
          texto:
            "Aquellos resultados no salieron de un solo experimento. El artículo de 1998 recogía seis estudios seguidos con distintos grupos de niños, y el patrón se repetía en todos ellos con variaciones. Repetir el patrón en seis estudios seguidos es bastante más de lo que se suele exigir.",
        },
        {
          forma: "clave",
          rotulo: "Las dos frases",
          frase: "A la mitad se le dijo que debía de ser muy lista. A la otra mitad, que debía de haber trabajado mucho. Esa fue toda la diferencia entre los dos grupos.",
        },
        {
          forma: "texto",
          texto:
            "Después se les ofreció elegir la siguiente prueba. Podían hacer una tanda difícil, con la que aprenderían cosas nuevas, o una fácil parecida a la anterior, y ahí las dos frases empezaron a producir efectos distintos. La elección se hacía en privado y sin que nadie los estuviera mirando.",
        },
        {
          forma: "texto",
          texto:
            "El diseño tiene una virtud que conviene subrayar. Los niños se repartieron al azar entre los dos grupos, de modo que la única diferencia entre ellos era la frase que habían oído un minuto antes. Sin ese reparto al azar, el estudio no diría absolutamente nada sobre causas.",
        },
        {
          forma: "texto",
          texto:
            "Ese tipo de diseño es lo que permite hablar de causa y no de correlación. Es también lo que hace que el experimento siga citándose casi treinta años después en manuales de psicología educativa. Un experimento sencillo bien hecho aguanta mejor el tiempo que una teoría grande.",
        },
        {
          forma: "texto",
          texto:
            "Conviene añadir que el propio experimento se ha replicado con resultados desiguales. Algunos equipos han encontrado el efecto y otros no, y la discusión sobre su tamaño real sigue abierta. Ningún hallazgo de psicología social se sostiene hoy con un solo experimento por muy citado que esté.",
        },
        {
          forma: "texto",
          texto:
            "La mayoría de los niños elogiados por su inteligencia eligió la tanda fácil. La mayoría de los elogiados por su esfuerzo eligió la difícil, y esa elección es el hallazgo que sostiene el libro entero. Ninguno de los dos grupos sabía que estaba tomando una decisión tan importante.",
        },
        {
          forma: "texto",
          texto:
            "Después vino una tanda muy difícil en la que casi todos fallaron. Los elogiados por listos se derrumbaron, dijeron que ya no les divertía y quisieron dejarlo; los otros siguieron probando y varios pidieron llevarse los problemas a casa. La misma dificultad produjo dos reacciones opuestas en niños de la misma clase.",
        },
        {
          forma: "texto",
          texto:
            "Ese derrumbe se midió además de varias maneras a la vez. Se les preguntó cuánto les gustaba la tarea, si querían llevársela a casa y a qué atribuían el fallo, y los tres indicadores fueron en la misma dirección. Coincidir en tres indicadores distintos hace bastante más creíble un resultado como ese.",
        },
        {
          forma: "texto",
          texto:
            "Los niños del grupo del esfuerzo atribuían el fallo a no haber trabajado bastante. Los del grupo de la inteligencia lo atribuían a no ser listos, que es una explicación que no deja nada que hacer. Una explicación abre la puerta al trabajo y la otra la cierra.",
        },
        {
          forma: "texto",
          texto:
            "Esa diferencia de atribución es el corazón de toda su obra anterior. Dweck llevaba desde los años setenta estudiando por qué unos niños se rinden y otros no ante exactamente el mismo fracaso. Aquella pregunta la traía arrastrando desde sus primeros trabajos sobre la indefensión aprendida.",
        },
        {
          forma: "arte",
          texto:
            "El final del experimento es lo que más impresiona. Se les puso otra vez una tanda fácil, igual que la primera, y los elogiados por su inteligencia lo hicieron peor que al principio, mientras que los del esfuerzo mejoraron. Un elogio bienintencionado acabó empeorando el rendimiento en una tarea exactamente idéntica.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Hay un detalle más que se cita en todas partes. Al pedirles que escribieran sus resultados en una hoja para otro colegio, alrededor de cuatro de cada diez niños del grupo elogiado por listos exageraron su puntuación. La etiqueta de listo tenía ya suficiente valor como para mentir por ella.",
        },
        {
          forma: "texto",
          texto:
            "Ese dato de las mentiras se cita muchísimo y conviene precisarlo. Se les pidió escribir su puntuación en una hoja anónima para niños de otro colegio, y la exageración se midió comparando con lo que habían hecho. Conviene contarlo siempre con ese detalle y no como una cifra suelta cualquiera.",
        },
        {
          forma: "texto",
          texto:
            "Ese resultado es el que más se ha discutido después. Es un dato llamativo, salido de una muestra pequeña, y conviene citarlo como lo que es: un hallazgo de un experimento concreto y no una ley general. Un experimento no es una ley, por muy citado que llegue a estar.",
        },
        {
          forma: "texto",
          texto:
            "Esa advertencia vale para casi todos los experimentos de esa época. Las muestras eran de decenas de participantes, la potencia estadística era baja y nadie preinscribía las hipótesis antes de recoger datos. La psicología de entonces trabajaba con muestras que hoy no pasarían ninguna revisión.",
        },
        {
          forma: "texto",
          texto:
            "El estudio lo firmaron Claudia Mueller y Carol Dweck, y salió en una revista de psicología social. La autora llevaba entonces más de veinte años investigando por qué unos niños se hunden ante la dificultad y otros se crecen. Aquella pregunta le venía de mucho antes de plantear este experimento concreto.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir el tamaño real de aquello antes de seguir. Fueron unos ciento veintiocho niños en total, repartidos en varios experimentos, y de ahí salió una idea que después se aplicó a millones de alumnos. Entre el laboratorio y una política educativa hay bastante más distancia de lo esperable.",
        },
        {
          forma: "texto",
          texto:
            "El libro llegó ocho años después, en 2006.",
        },
        {
          forma: "texto",
          texto:
            "Se llamó Mindset y vendió millones de ejemplares.",
        },
        {
          forma: "texto",
          texto:
            "La charla que dio en 2014 lleva decenas de millones de visitas.",
        },
      ],
    },
    {
      titulo: "Dos maneras de explicarse un suspenso",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La idea central del libro cabe en una pregunta. Cuando algo te sale mal, ¿piensas que no vales para eso, o piensas que todavía no sabes hacerlo?, y de esas dos respuestas salen dos maneras distintas de vivir. Las dos respuestas parecen un simple matiz y acaban organizando una vida entera.",
        },
        {
          forma: "texto",
          texto:
            "Esa pregunta parece retórica y en el laboratorio se mide. Se les plantean a los participantes frases del tipo tu inteligencia es algo que no puedes cambiar mucho, y se les pide decir cuánto están de acuerdo. Esas escalas se llaman implícitas y llevan ya décadas usándose en investigación.",
        },
        {
          forma: "texto",
          texto:
            "Esas escalas tienen un problema conocido que conviene mencionar. Cualquiera nota qué respuesta queda mejor, y en cuanto la idea se hizo famosa medir mentalidades con preguntas se volvió bastante menos fiable. Cualquiera que haya oído hablar del asunto contesta lo que sabe que conviene.",
        },
        {
          forma: "texto",
          texto:
            "Eso complica bastante las investigaciones posteriores sobre el asunto. Si la variable principal se mide con un cuestionario que todo el mundo sabe contestar, los resultados dejan de ser una medida limpia. Un cuestionario transparente acaba midiendo sobre todo lo que el participante quiere aparentar.",
        },
        {
          forma: "clave",
          rotulo: "Los dos nombres",
          frase: "Mentalidad fija: la capacidad es una cantidad que te tocó y no cambia. Mentalidad de crecimiento: la capacidad es algo que se desarrolla trabajando.",
        },
        {
          forma: "texto",
          texto:
            "La consecuencia práctica no está en el ánimo sino en las decisiones. Quien cree que la capacidad es fija evita las situaciones donde podría quedar mal, porque cada fallo se convierte en un dictamen sobre lo que es. El miedo a quedar mal decide más cosas de las que parece.",
        },
        {
          forma: "texto",
          texto:
            "Ese mecanismo explica algo que se ve en cualquier clase. Los alumnos que más miedo tienen a parecer torpes son a menudo los que llevan años oyendo que son los listos de la casa. La etiqueta que más protege es también la que más pesa al fallar.",
        },
        {
          forma: "texto",
          texto:
            "Dweck cuenta que ese patrón aparece antes de lo que parece. En experimentos con niños de cuatro y cinco años ya se distinguen los que quieren repetir un puzle que dominan y los que piden uno más difícil. A esa edad todavía no hay notas ni comparaciones formales de ningún tipo.",
        },
        {
          forma: "texto",
          texto:
            "Ese hallazgo temprano es de los más sólidos que dejó su laboratorio. Antes de saber leer, los niños ya se comportan de forma distinta ante un puzle que no les sale a la primera. Cuanto antes aparece un patrón, más difícil resulta explicarlo solo por la escuela.",
        },
        {
          forma: "texto",
          texto:
            "Quien cree que se desarrolla busca justamente esas situaciones. No porque sea más valiente, sino porque un fallo no le dice nada definitivo sobre sí mismo: le dice qué le falta por aprender, que es información útil. Ese cálculo cambia por completo qué tareas resultan atractivas y cuáles no.",
        },
        {
          forma: "texto",
          texto:
            "Dweck lo aplica primero al colegio, que es su terreno de investigación. Describe alumnos brillantes que se hunden al llegar a un curso más difícil, y alumnos medianos que acaban adelantándolos porque el bache no les parece una sentencia. El adelantamiento suele ocurrir justo cuando el temario empieza a exigir método.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo escolar que más usa es el paso al instituto. Alumnos que sacaban sobresalientes sin esfuerzo se encuentran con asignaturas que exigen método, y algunos concluyen que se les ha acabado el talento. Ese cambio de exigencia pilla desprevenidos sobre todo a los que iban sobrados.",
        },
        {
          forma: "texto",
          texto:
            "Ese momento es el que la teoría explica mejor. La inteligencia no ha cambiado de un verano a otro; lo que ha cambiado es que por primera vez hace falta un método, y nadie se lo había enseñado. Nadie enseña a estudiar y todo el mundo supone que ya se sabe.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la recomendación más útil del libro para cualquier familia. Enseñar cómo se estudia, no repetir que se estudie, porque el consejo de esforzarse más no contiene ninguna información. Decirle a alguien que se esfuerce más no le dice absolutamente nada sobre qué hacer.",
        },
        {
          forma: "texto",
          texto:
            "El elogio es la palanca que más le interesa y la más contraintuitiva. Decirle a un niño que es listo suena bien y le enseña que el valor está en el resultado, de modo que a partir de ahí protegerá la etiqueta. Proteger una etiqueta consume energía.",
        },
        {
          forma: "arte",
          texto:
            "La alternativa que propone no es dejar de elogiar. Es elogiar el proceso concreto: la estrategia que usó, la persistencia, la decisión de pedir ayuda, y hacerlo señalando lo que hizo y no lo que es. Elogiar lo que alguien hizo es más difícil que elogiar lo que es.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Hay una palabra que resume todo el libro y que ella convirtió en bandera. Es todavía: no sé hacerlo todavía, no me sale todavía, y esa palabra cambia una sentencia cerrada en una descripción de un momento. En inglés es una sola palabra y ella la usa como bandera.",
        },
        {
          forma: "texto",
          texto:
            "Esa palabra dio lugar a una práctica concreta en algunos colegios. En vez de poner un suspenso se ponía todavía, y aunque suena a truco de cartel la idea era obligar al alumno a mirar qué le faltaba. Aquella calificación existió de verdad en varios institutos públicos de Estados Unidos.",
        },
        {
          forma: "texto",
          texto:
            "Ese cambio de palabra tiene un límite obvio que conviene decir. Sustituir el suspenso por un todavía no enseña matemáticas, y sin un plan concreto detrás la palabra se queda en decoración. Cambiar el vocabulario sale barato y cambiar la enseñanza cuesta bastante más trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el punto donde la idea se convirtió en un póster. Poner la palabra en la pared cuesta nada y cambiar cómo se corrige un examen cuesta trabajo, y muchos centros hicieron solo lo primero. El cartel se colgó en muchísimos sitios y el resto casi nunca.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar lo que el libro no dice, porque es lo que más se malinterpreta. No dice que cualquiera pueda llegar a cualquier sitio, y Dweck escribe expresamente que no todo el mundo va a ser Einstein. Confundir esa idea con el todo es posible cuesta bastante caro después.",
        },
        {
          forma: "texto",
          texto:
            "Tampoco dice que el esfuerzo baste por sí solo.",
        },
        {
          forma: "texto",
          texto:
            "Insiste en cambiar de estrategia cuando algo no funciona.",
        },
        {
          forma: "texto",
          texto:
            "Esa parte es la que casi nadie recuerda del libro.",
        },
      ],
    },
    {
      titulo: "El libro que salió del laboratorio",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El libro se publicó en 2006 y su ambición es enorme. Toma un hallazgo de psicología del desarrollo y lo aplica al deporte, a la empresa, a la escuela, a la crianza y a las relaciones de pareja, capítulo por capítulo. Cada ámbito recibe su propio capítulo.",
        },
        {
          forma: "texto",
          texto:
            "Esa amplitud es lo que lo convirtió en superventas y también su punto débil. Un libro que explica el colegio, la empresa y el matrimonio con la misma idea corre el riesgo de no explicar bien ninguno de los tres. La idea se estira hasta romperse.",
        },
        {
          forma: "texto",
          texto:
            "Los capítulos escolares son claramente los mejores del libro. Es su terreno, los ejemplos vienen de investigaciones propias y las recomendaciones son concretas, mientras que los demás se apoyan en biografías ajenas. Ahí escribe desde su laboratorio y no desde biografías leídas en otros libros.",
        },
        {
          forma: "texto",
          texto:
            "Ahí sí hay indicaciones que un profesor puede aplicar el lunes. Cómo dar una nota, cómo comentar un examen, qué decir cuando alguien se atasca y cómo presentar una tarea difícil sin asustar. Son las páginas que un docente subraya y vuelve a leer al año siguiente.",
        },
        {
          forma: "texto",
          texto:
            "En el capítulo del deporte los ejemplos son un tenista y un jugador de baloncesto. John McEnroe aparece como caso de mentalidad fija, con talento enorme y ninguna tolerancia al error, y Michael Jordan como lo contrario. Los dos ejemplos son cómodos porque el final ya lo conocemos todos.",
        },
        {
          forma: "clave",
          rotulo: "El dato de Jordan",
          frase: "No entró en el equipo titular de su instituto y se pasó los veranos entrenando de más. La historia es real y él la ha contado muchas veces.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo empresarial es el más discutible de todos. Contrapone directivos que se creían genios con otros que construyeron equipos, y usa a Enron como ejemplo de una cultura obsesionada con contratar talento en vez de desarrollarlo. Ningún directivo entra en el laboratorio y ninguno responde a un cuestionario.",
        },
        {
          forma: "texto",
          texto:
            "El contraste que usa entre dos directivos es el más citado del capítulo. Por un lado los que necesitaban ser el más listo de la sala, y por otro los que se dedicaron a que la empresa funcionara sin ellos. Ninguno de los dos fue entrevistado.",
        },
        {
          forma: "texto",
          texto:
            "El retrato de esos ejecutivos viene de libros de gestión anteriores y no de entrevistas suyas. Dweck lee esas biografías con su marco puesto y encuentra en ellas justo lo que su teoría predecía. Leer una biografía con una teoría puesta encima da siempre el mismo resultado.",
        },
        {
          forma: "texto",
          texto:
            "Ese método se puede aplicar a cualquier persona famosa con el mismo resultado. Cualquiera tiene episodios de rigidez y episodios de aprendizaje, y elegir unos u otros depende de la tesis que se quiera ilustrar. Una teoría que explica cualquier caso acaba por no explicar ninguno en particular.",
        },
        {
          forma: "texto",
          texto:
            "Ese argumento sobre Enron no es originalmente suyo. Viene de un artículo de Malcolm Gladwell de 2002, que Dweck cita, donde se sostenía que la empresa había convertido el culto al talento innato en su modo de funcionar. Aquel artículo se titulaba el mito del talento y tuvo bastante repercusión.",
        },
        {
          forma: "texto",
          texto:
            "Ahí está el problema de método de esta parte del libro. Las biografías se eligen después de conocer el final, y siempre se puede encontrar en un triunfador rasgos de crecimiento y en un fracasado rasgos de rigidez. Los ejemplos ilustran una idea, y nunca llegan a ponerla a prueba.",
        },
        {
          forma: "texto",
          texto:
            "Ese problema tiene nombre en metodología y es fácil de comprobar. Se llama selección por el resultado, y consiste en explicar por qué algo salió bien buscando las causas después de saber que salió bien. Es el mismo error que denuncian casi todos los manuales de metodología básica.",
        },
        {
          forma: "texto",
          texto:
            "Ese sesgo no significa que la conclusión sea falsa. Significa que ese material no la demuestra, y que había que ir a buscar la prueba a otra parte, que es exactamente lo que ocurrió una década después. Ilustrar una idea y demostrarla son dos operaciones completamente distintas entre sí.",
        },
        {
          forma: "texto",
          texto:
            "Esa espera es lo normal en ciencias sociales y no un defecto del libro. Probar bien una idea educativa exige muestras enormes, permisos, años y dinero, y esa prueba llegó cuando la idea ya se había vendido. El libro ya estaba en miles de colegios cuando llegaron los resultados.",
        },
        {
          forma: "arte",
          texto:
            "Conviene decirlo sin rodeos: esos capítulos no son investigación. Son ilustraciones escogidas de una idea que sí venía de experimentos, y mezclarlos en el mismo libro hace que todo parezca igual de comprobado. El lector no distingue qué parte viene del laboratorio y cuál de una biografía.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "El libro tuvo además un efecto sobre las escuelas difícil de exagerar. Distritos enteros de Estados Unidos y del Reino Unido compraron programas de mentalidad de crecimiento, con carteles, formación de profesores y materiales. Pocas ideas de psicología han llegado a tantas aulas en tan poco tiempo.",
        },
        {
          forma: "texto",
          texto:
            "Las cifras de esa expansión son difíciles de dar con precisión. Hubo programas en miles de centros, financiación pública en varios países y materiales vendidos por empresas creadas expresamente para eso. Nadie llevó nunca una contabilidad central de cuántos centros llegaron a comprar aquellos materiales.",
        },
        {
          forma: "texto",
          texto:
            "Ese éxito comercial creó además un incentivo incómodo. Cuanto más se vendía el programa, más caro salía reconocer que sus efectos medidos eran pequeños, y eso vale para casi cualquier idea educativa de moda. Rectificar cuesta bastante más cuando ya hay muchas facturas emitidas de por medio.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir que Dweck no vendía esos programas directamente. Su trabajo dio origen a organizaciones y materiales que sí se comercializaron, y ese entorno económico existía alrededor de la teoría. La distancia entre una investigadora y el mercado que crece a su alrededor suele ser grande.",
        },
        {
          forma: "texto",
          texto:
            "En muchos sitios se convirtió en algo bastante distinto de lo que decía el libro. Carteles con la palabra todavía en las paredes, elogios al esfuerzo repartidos sin mirar el resultado y ninguna revisión de cómo se enseñaba. Lo que llegó al aula fue casi siempre la versión más barata.",
        },
        {
          forma: "texto",
          texto:
            "Dweck vio esa deriva y la denunció por escrito.",
        },
        {
          forma: "texto",
          texto:
            "Le puso un nombre: mentalidad falsa de crecimiento.",
        },
        {
          forma: "texto",
          texto:
            "Antes de eso, sin embargo, llegaron los datos.",
        },
      ],
    },
    {
      titulo: "Lo que pasó cuando se midió a lo grande",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 2018 se publicó un metaanálisis que cambió la conversación entera. Victoria Sisk y sus colegas reunieron cientos de estudios sobre mentalidad y rendimiento académico, con más de trescientos mil participantes en total. Trescientos mil participantes es una escala que ningún estudio suelto llega nunca a alcanzar.",
        },
        {
          forma: "texto",
          texto:
            "Un metaanálisis no es un estudio más, y conviene explicar por qué. Reúne los resultados de muchos trabajos previos y los pondera, de modo que corrige en parte la tendencia a publicar solo lo que sale bien. Es la herramienta que se usa justamente cuando hay demasiados estudios sueltos.",
        },
        {
          forma: "texto",
          texto:
            "Aun así, un metaanálisis arrastra los problemas de los estudios que reúne. Si muchos de ellos eran pequeños y se publicaron por salir bien, el resultado conjunto sigue estando inflado por ese filtro. Basura entra, basura sale, dicen los propios estadísticos al explicar ese límite conocido.",
        },
        {
          forma: "texto",
          texto:
            "Los autores de aquel metaanálisis lo dijeron con claridad. Encontraron señales de sesgo de publicación, es decir, indicios de que los estudios con resultados nulos se habían quedado en los cajones. Ese sesgo se detecta mirando cómo se distribuyen los tamaños de efecto que sí se publicaron.",
        },
        {
          forma: "clave",
          rotulo: "Lo que encontraron",
          frase: "Una correlación muy débil entre la mentalidad y las notas, y un efecto medio de las intervenciones cercano a cero. No nulo, pero mucho menor de lo prometido.",
        },
        {
          forma: "texto",
          texto:
            "El mismo trabajo encontró un matiz que conviene no perder. Los efectos aparecían sobre todo en estudiantes en riesgo académico o de familias con pocos recursos, y prácticamente se desvanecían en el resto. Un efecto que aparece solo en algunos grupos sigue siendo un efecto real.",
        },
        {
          forma: "texto",
          texto:
            "Ese matiz es en realidad una buena noticia para la teoría. Si el efecto aparece donde hay más margen de mejora y no donde ya se rinde bien, eso encaja con lo que la teoría predice. Quien ya rinde bien tiene poco que ganar con un cambio de creencia.",
        },
        {
          forma: "texto",
          texto:
            "Esa lectura la defiende el propio equipo de Yeager. Sostienen que nadie prometió efectos grandes en todos los alumnos, y que una intervención de dos sesiones no puede competir con años de escolarización. Nadie puede pedirle a dos sesiones lo que no consiguen años enteros de escuela.",
        },
        {
          forma: "texto",
          texto:
            "Ese argumento es razonable y a la vez incómodo. Si dos sesiones no pueden hacer mucho, tampoco se podían prometer transformaciones escolares con carteles y una charla de formación. Las promesas grandes las hicieron sobre todo quienes vendían los programas, y no tanto los investigadores.",
        },
        {
          forma: "texto",
          texto:
            "Al año siguiente llegó el estudio más limpio que se ha hecho sobre esto. Un equipo dirigido por David Yeager preinscribió sus hipótesis, trabajó con una muestra nacional de unos doce mil alumnos y publicó los resultados en Nature. Preinscribir las hipótesis impide después contar solamente aquella parte que salió bien.",
        },
        {
          forma: "texto",
          texto:
            "El resultado es real, es pequeño y merece darse con precisión. Una intervención de dos sesiones por internet mejoró las notas de los alumnos con peor rendimiento en torno a una décima de punto sobre diez. Es un efecto pequeño y a la vez estadísticamente sólido, que son cosas distintas.",
        },
        {
          forma: "texto",
          texto:
            "Conviene traducir esa décima de punto a algo comprensible. Es la diferencia entre un cinco coma cuatro y un cinco coma cinco de nota media, en alumnos que estaban en la mitad baja de su curso. Nadie cambia de vida por una décima, y nadie la desprecia tampoco.",
        },
        {
          forma: "texto",
          texto:
            "Puesto así parece poco, y hay dos maneras de mirarlo. Una décima de nota por dos sesiones en internet es barato, y una décima de nota no arregla ningún problema educativo serio. Las dos cosas son verdad al mismo tiempo y conviene decir las dos.",
        },
        {
          forma: "texto",
          texto:
            "El coste es justamente lo que mantiene viva la propuesta. Una intervención que se hace por internet en dos ratos y cuesta casi nada solo necesita un efecto pequeño para salir a cuenta. En política educativa el precio por alumno decide casi tanto como el efecto.",
        },
        {
          forma: "texto",
          texto:
            "Ese estudio añadió además una condición que casi nunca se cita. El efecto solo aparecía en centros donde el ambiente entre compañeros apoyaba buscar retos, y desaparecía donde esforzarse estaba mal visto. El ambiente del centro puede anular por completo cualquier intervención individual bien diseñada.",
        },
        {
          forma: "arte",
          texto:
            "En el Reino Unido, varios ensayos grandes financiados por una fundación educativa no encontraron efectos significativos. Eso no significa que la idea sea falsa: significa que trasladarla a un aula real es mucho más difícil de lo que parecía. Los resultados nulos también se publican allí, y eso ya es una diferencia.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "Aquellos ensayos británicos tenían un tamaño considerable. Participaron decenas de escuelas y miles de alumnos, se asignaron al azar y midieron resultados en lengua y matemáticas al terminar el curso. Un ensayo de ese tamaño cuesta muchísimo dinero, y por eso se hacen tan pocos.",
        },
        {
          forma: "texto",
          texto:
            "Los autores de esos ensayos apuntaron a un motivo probable. Formar a un profesor en un taller de un día no cambia cómo enseña, y la intervención llegaba al aula muy diluida. La formación de un día es lo primero que se recorta en cualquier presupuesto.",
        },
        {
          forma: "texto",
          texto:
            "Ese problema no es exclusivo de esta idea ni de este país. La distancia entre un experimento bien controlado y un aula real con treinta alumnos se come casi cualquier efecto que se haya medido. Lo mismo ha pasado con casi todas las modas pedagógicas de las últimas décadas.",
        },
        {
          forma: "texto",
          texto:
            "Conviene entender qué se puede concluir de todo esto sin exagerar. La distinción entre las dos mentalidades describe algo que existe, y convertirla en un programa que mejore las notas de todos no ha funcionado. Describir bien un fenómeno y saber intervenir sobre él son cosas muy distintas.",
        },
        {
          forma: "texto",
          texto:
            "Ahí este libro discute con Pensar rápido, pensar despacio, que está en el catálogo. Los dos son superventas de psicología cuyos apartados más famosos han sido revisados a la baja por la crisis de replicación de la disciplina. Los dos siguen vendiéndose hoy exactamente igual que antes de aquellas revisiones.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia está en cómo respondió cada autor.",
        },
        {
          forma: "texto",
          texto:
            "Kahneman escribió que su capítulo cuarto no se sostenía.",
        },
        {
          forma: "texto",
          texto:
            "Dweck defendió la teoría y culpó a cómo se aplicaba.",
        },
      ],
    },
    {
      titulo: "La mentalidad falsa de crecimiento",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 2015 Dweck publicó un artículo con un título que lo dice todo. Reconocía que la mentalidad de crecimiento se había malinterpretado en las escuelas y que ella misma había visto una versión falsa por todas partes. Rectificar en público mientras el libro sigue vendiéndose bien tiene bastante mérito.",
        },
        {
          forma: "texto",
          texto:
            "Ese artículo salió en una revista del sector educativo estadounidense. Estaba escrito en primera persona, sin tecnicismos, y se dirigía directamente a los profesores que estaban aplicando la idea en clase. Escribir para profesores y no para colegas es una decisión que dice bastante de ella.",
        },
        {
          forma: "texto",
          texto:
            "Ese gesto es poco frecuente en el género y merece señalarse. Casi ningún autor de superventas vuelve a escribir para decir que su idea se está usando mal, sobre todo mientras sigue vendiendo. Casi siempre resulta más cómodo culpar al lector que revisar el propio libro.",
        },
        {
          forma: "texto",
          texto:
            "Hay una diferencia con el caso de Kahneman que conviene marcar. Él escribió que un capítulo suyo no se sostenía, y ella escribió que la teoría estaba bien y que se estaba aplicando mal. Las dos respuestas son legítimas y no dejan al lector en el mismo sitio.",
        },
        {
          forma: "clave",
          rotulo: "En qué consiste esa versión falsa",
          frase: "Elogiar el esfuerzo pase lo que pase, repetir que cualquiera puede con todo y decir que se tiene mentalidad de crecimiento porque uno es una persona abierta y flexible.",
        },
        {
          forma: "texto",
          texto:
            "El elogio del esfuerzo sin resultado es el error que más le preocupa. Si un alumno se esfuerza con una estrategia que no funciona y se le felicita igual, se le está enseñando a repetir algo que no lleva a ninguna parte. Esforzarse mal también es esforzarse.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que pone es de una precisión incómoda. Un alumno que repite el mismo método para estudiar y sigue suspendiendo no necesita ánimos, necesita que alguien le enseñe otra forma de estudiar. El ánimo sin método es exactamente lo que ella acabó llamando versión falsa.",
        },
        {
          forma: "texto",
          texto:
            "Ese ejemplo desmonta la caricatura más extendida de su teoría. La mentalidad de crecimiento no consiste en insistir, consiste en cambiar de camino cuando el camino elegido no lleva a ningún sitio. Insistir con la misma estrategia es justamente lo contrario de lo que propone.",
        },
        {
          forma: "texto",
          texto:
            "Esa versión corregida es bastante más difícil de vender. No cabe en un cartel, exige formación docente y se parece mucho a enseñar bien, que es lo que ya costaba antes de todo esto. Una idea que no cabe en un cartel tiene bastante poco futuro comercial.",
        },
        {
          forma: "texto",
          texto:
            "Su formulación corregida incluye tres cosas y no una. Esfuerzo, cambio de estrategia cuando la primera falla, y pedir ayuda a tiempo, y las tres juntas son lo que ella llama proceso. Las tres juntas se parecen bastante a lo que siempre se llamó estudiar bien.",
        },
        {
          forma: "texto",
          texto:
            "Reconoció también que nadie tiene una sola mentalidad. Todos somos una mezcla, y cada uno tiene disparadores concretos, como una crítica pública o el éxito de un compañero, que le devuelven a la mentalidad fija. Nadie vive instalado en una de las dos, y esa precisión cambia todo.",
        },
        {
          forma: "texto",
          texto:
            "La idea de los disparadores es de lo más útil del artículo. Reconocer en qué situaciones concretas uno se pone rígido es mucho más práctico que decidir que uno tiene mentalidad de crecimiento. Es también lo único de su teoría que se puede practicar esta semana.",
        },
        {
          forma: "texto",
          texto:
            "Ella misma cuenta cuáles son los suyos en ese artículo. Menciona la comparación con colegas y las críticas a su trabajo, y describe cómo nota que se pone a la defensiva antes de poder pensar. Reconocerse en el ejemplo cuesta más cuando el ejemplo lo pone la autora.",
        },
        {
          forma: "texto",
          texto:
            "Ese pasaje es lo mejor que ha escrito sobre el asunto. Una investigadora describiendo sus propias reacciones defensivas vale más, como enseñanza, que veinte páginas explicando la diferencia entre dos mentalidades. Una teoría se entiende mucho mejor cuando alguien la aplica contra sí mismo delante de todos.",
        },
        {
          forma: "texto",
          texto:
            "Conviene reconocerle esa corrección, porque no era obligatoria. Su libro se vendía por millones y podía haber seguido vendiéndose sin matizar nada, y publicar que la idea se estaba aplicando mal tiene mérito. Muy pocos autores de este género han llegado a hacer algo remotamente parecido.",
        },
        {
          forma: "arte",
          texto:
            "Lo que no hizo fue revisar las promesas del libro a la luz de los datos nuevos. Las ediciones posteriores mantienen el tono, y la explicación que ofrece de los estudios fallidos es que se aplicó mal la teoría. Corregir la aplicación y corregir la promesa no son la misma cosa.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Con Inteligencia emocional, también en el catálogo, la trayectoria es casi idéntica. Un hallazgo académico razonable, un libro para el gran público, una industria de cursos encima y unos efectos medidos bastante menores. Las dos ideas nacieron en un laboratorio y acabaron en un catálogo de cursos.",
        },
        {
          forma: "texto",
          texto:
            "Esa comparación no descalifica a ninguno de los dos libros. Señala un patrón: una idea con base experimental modesta se convierte en producto, y el producto promete bastante más de lo que el laboratorio medía. El problema casi nunca está en el hallazgo, está en lo que se promete.",
        },
        {
          forma: "texto",
          texto:
            "Ese recorrido se repite tanto que casi se puede predecir. Un hallazgo con efecto pequeño, un libro que lo agranda, una industria que lo vende y una revisión posterior que lo devuelve a su tamaño. Conviene reconocer el patrón antes de comprar el siguiente libro del mismo estilo.",
        },
        {
          forma: "texto",
          texto:
            "Con Fluir, que también está, la conversación es distinta y más amable. Csikszentmihalyi describía la tarea óptima como la que está un poco por encima de tu nivel, que es lo que un alumno solo elige si cree que puede mejorar. Los dos hablan del mismo alumno.",
        },
        {
          forma: "texto",
          texto:
            "Saber todo esto no obliga a tirar el libro, y conviene terminar por ahí. La distinción que describe existe, se reconoce en uno mismo al leerla, y ese reconocimiento es lo que ningún metaanálisis ha desmentido. Reconocerse en una descripción no es lo mismo que mejorar por ello.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda del libro es una distinción útil.",
        },
        {
          forma: "texto",
          texto:
            "Lo que no queda es la promesa de transformar una escuela.",
        },
        {
          forma: "texto",
          texto:
            "Y la palabra todavía sigue siendo mejor que un suspenso.",
        },
      ],
    },
  ],
};

export const FLOW: Resumen = {
  id: "flow",
  titulo: "Fluir",
  autor: "Mihály Csíkszentmihályi",
  ano: 1990,
  gancho: "Preguntó a miles de personas ocho veces al día qué estaban haciendo y cómo se sentían. Descubrió que no somos felices descansando.",
  porQue:
    "Explica esos ratos en los que desaparece el tiempo, y conviene saber qué midió de verdad y qué no dice sobre la felicidad.",
  partes: [
    {
      titulo: "El niño del campo de internamiento",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El autor nació en 1934 en una ciudad del Adriático que hoy pertenece a Croacia y entonces era italiana. Su padre era diplomático húngaro, la familia vivía bien, y de aquella vida no quedó nada al terminar la Segunda Guerra Mundial. De aquella vida no quedó nada.",
        },
        {
          forma: "texto",
          texto:
            "Su apellido es de los más difíciles de pronunciar de la psicología moderna. Él mismo bromeaba con ello en conferencias y proponía una regla nemotécnica para americanos, y en las citas académicas aparece a menudo abreviado solo con la inicial. En las citas aparece abreviado con la inicial.",
        },
        {
          forma: "texto",
          texto:
            "El padre había sido cónsul en Venecia y llegó después a embajador en Italia. Esa carrera explica que la familia estuviera fuera del país cuando cambió el régimen, y también que se quedaran sin nada de golpe cuando él decidió no volver. Se quedaron sin país de un día para otro.",
        },
        {
          forma: "texto",
          texto:
            "Su formación temprana fue por tanto italiana y no húngara. Escribió toda su obra en inglés, su tercer idioma, y esa distancia con la lengua se nota en una prosa clara y sin adornos que ayuda bastante a que el libro se lea bien. Escribió toda su obra en su tercer idioma.",
        },
        {
          forma: "texto",
          texto:
            "La guerra se llevó a dos de sus hermanos y toda la posición familiar. Uno murió en el asedio de Budapest y otro acabó en un campo de trabajo en Siberia, y el propio Mihály pasó parte de su infancia internado en un campo en Italia.",
        },
        {
          forma: "texto",
          texto:
            "El asedio de Budapest duró casi dos meses entre 1944 y 1945 y fue de los peores de la guerra. La ciudad quedó destrozada, murieron decenas de miles de civiles, y cualquier familia húngara de aquella generación tiene una historia parecida que contar. Casi cualquier familia húngara tiene esa historia.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta que le quedó",
          frase: "Por qué unos adultos que lo habían perdido todo se hundían y otros conservaban la dignidad y hasta el buen humor.",
        },
        {
          forma: "texto",
          texto:
            "Esa pregunta le pareció más interesante que cualquier explicación por el dinero. Había visto a gente arruinada mantenerse entera y a gente acomodada derrumbarse, de modo que la diferencia tenía que estar en algo que ocurría dentro de cada uno. La diferencia no estaba en el dinero.",
        },
        {
          forma: "texto",
          texto:
            "Su padre dimitió del servicio diplomático en 1948, cuando los comunistas tomaron el poder en Hungría. Se quedaron en Roma sin sueldo y sin país al que volver, y abrieron un restaurante pequeño en el que trabajó toda la familia. Abrieron un restaurante y trabajaron todos en él.",
        },
        {
          forma: "texto",
          texto:
            "Aquel restaurante funcionó y sostuvo a la familia durante años. El detalle importa porque es el primer ejemplo de la tesis del libro: unas personas que lo habían perdido todo montaron una tarea con reglas y objetivos y se agarraron a ella. Una tarea con reglas los mantuvo enteros.",
        },
        {
          forma: "texto",
          texto:
            "El momento que lo empujó hacia la psicología fue una tarde de aburrimiento en Suiza. Con dieciséis años entró a una conferencia gratuita sobre platillos volantes, más que nada por meterse en algún sitio caliente, y el conferenciante resultó ser Carl Jung. El conferenciante resultó ser Carl Jung.",
        },
        {
          forma: "texto",
          texto:
            "Él contaba esa anécdota como ejemplo de lo poco planificadas que son las vocaciones. Buscaba refugio y calefacción, salió de allí con una carrera decidida, y solía usarla para desconfiar de las trayectorias que se cuentan como si hubieran sido un plan. Buscaba calefacción y salió con una carrera.",
        },
        {
          forma: "texto",
          texto:
            "Jung no hablaba de naves espaciales sino de la cabeza de quien las ve. Sostenía que aquellas visiones eran una proyección de la angustia de una Europa recién salida de la guerra, y aquella idea le pareció al chico mucho más interesante que cualquier platillo.",
        },
        {
          forma: "texto",
          texto:
            "Al buscar libros de psicología para seguir por su cuenta, se llevó una decepción. Descubrió que aquella disciplina no se enseñaba en Europa como él esperaba, y esa fue una de las razones por las que acabó cruzando el Atlántico años después. Aquella disciplina no se enseñaba entonces en Europa.",
        },
        {
          forma: "arte",
          texto:
            "Emigró a Estados Unidos a los veintidós años, según su propio relato con poco más de un dólar en el bolsillo. Trabajó de noche, estudió de día y acabó doctorándose en la Universidad de Chicago, donde años después dirigiría el departamento de psicología. Llegó con poco más de un dólar.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Aquellos primeros años los pasó trabajando de recepcionista de hotel por las noches. Estudiaba en el mostrador entre llamada y llamada, y contaba que aquel horario le enseñó más sobre concentración en condiciones malas que cualquier asignatura posterior. Estudiaba en el mostrador del hotel entre llamada y llamada, y aprendió allí a concentrarse.",
        },
        {
          forma: "texto",
          texto:
            "Su tesis inicial no era sobre la felicidad sino sobre pintores trabajando. Los observaba durante horas y le llamaba la atención una cosa concreta: se olvidaban de comer y de dormir mientras pintaban, y perdían todo el interés por el cuadro en cuanto lo terminaban.",
        },
        {
          forma: "texto",
          texto:
            "Aquella observación la hizo en una escuela de arte de Chicago a finales de los sesenta. Filmaba a los estudiantes mientras trabajaban, medía cuánto tardaban en decidir el tema y comparaba después qué obras acababan siendo mejor valoradas por los profesores. Los filmaba mientras decidían qué pintar.",
        },
        {
          forma: "texto",
          texto:
            "El resultado de aquel trabajo tiene interés por sí solo. Los estudiantes que más tardaban en decidir qué pintar, los que descubrían el problema en vez de resolverlo deprisa, eran los que años después seguían siendo artistas en activo. Los que tardaban más en decidir seguían pintando años después.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle es el que abre toda la investigación posterior. Si la recompensa fuera el cuadro terminado, el interés no se apagaría al acabarlo; lo que aquellos pintores buscaban tenía que estar dentro del proceso y no en su resultado. Lo que buscaban estaba dentro del proceso.",
        },
        {
          forma: "texto",
          texto:
            "El siguiente paso lógico era buscar esa misma experiencia fuera del arte. Empezó entrevistando a escaladores y a jugadores de ajedrez, gente que dedica muchísimo esfuerzo a actividades sin recompensa económica, y encontró descripciones prácticamente idénticas. Escaladores y ajedrecistas describían exactamente lo mismo con palabras muy distintas y sin conocerse.",
        },
        {
          forma: "texto",
          texto:
            "El libro se publicó en 1990, después de veinticinco años de investigación acumulada.",
        },
        {
          forma: "texto",
          texto:
            "Ha vendido millones de ejemplares y se ha traducido a más de veinte idiomas.",
        },
        {
          forma: "texto",
          texto:
            "Su autor murió en octubre de 2021, con ochenta y siete años.",
        },
      ],
    },
    {
      titulo: "El busca que sonaba ocho veces al día",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El problema de estudiar la experiencia es que la gente recuerda fatal cómo se sintió. Si preguntas a alguien al final de la semana, contesta con una media inventada y con lo que cree que debería haber sentido, no con lo que sintió. El recuerdo no se parece a lo vivido.",
        },
        {
          forma: "texto",
          texto:
            "Ese problema tiene nombre en psicología y está bien documentado. Al recordar una experiencia pesan sobre todo el momento más intenso y el final, de modo que el resumen que hacemos de un día entero no se parece mucho a la suma de sus horas.",
        },
        {
          forma: "texto",
          texto:
            "Ese desajuste entre vivir y recordar es un asunto grande de la psicología moderna. Hay quien sostiene que decidimos qué hacer con la vida usando el recuerdo y no la experiencia, y que por eso elegimos vacaciones fotografiables antes que tardes buenas. Elegimos vacaciones fotografiables antes que tardes buenas.",
        },
        {
          forma: "clave",
          rotulo: "La solución técnica",
          frase: "Darle a cada persona un busca y un cuadernillo. El aparato pita a horas aleatorias y hay que anotar en ese mismo instante qué estás haciendo y cómo te encuentras.",
        },
        {
          forma: "texto",
          texto:
            "Aquellos aparatos eran los buscapersonas que llevaban entonces médicos y ejecutivos. Hoy el mismo método se hace con una aplicación en el móvil, se aplica en decenas de países y se ha convertido en una herramienta estándar de la investigación sobre bienestar. Hoy el mismo método va en el móvil.",
        },
        {
          forma: "texto",
          texto:
            "El método se llama muestreo de experiencia y lo desarrolló su equipo en los años setenta. Sonaba unas ocho veces al día durante una semana, y en cada aviso el participante rellenaba una página con preguntas fijas antes de seguir con su vida. Ocho avisos al día durante una semana.",
        },
        {
          forma: "texto",
          texto:
            "El diseño tiene un coste evidente que conviene mencionar. Interrumpir a alguien ocho veces al día durante una semana es molesto, mucha gente abandona a mitad, y quien aguanta hasta el final probablemente no representa del todo a la población general. Molesta bastante y mucha gente abandona.",
        },
        {
          forma: "texto",
          texto:
            "Las preguntas eran deliberadamente concretas y siempre las mismas. Qué estás haciendo, dónde estás, con quién, en qué piensas, y después una serie de escalas sobre concentración, ánimo, dificultad de la tarea y ganas de estar haciendo otra cosa. Siempre las mismas y en el momento exacto.",
        },
        {
          forma: "texto",
          texto:
            "Las dos escalas decisivas son las de dificultad y capacidad percibidas. Cruzándolas se puede colocar cada momento del día en un mapa, y de ese cruce salen todas las zonas del modelo, incluida la franja donde aparece el estado que da nombre al libro. De ese cruce sale el mapa entero.",
        },
        {
          forma: "texto",
          texto:
            "Ese diseño resuelve dos problemas de golpe y por eso se sigue usando. Captura el momento en vez del recuerdo, y al preguntar a horas aleatorias evita que la muestra se llene solo de los ratos que la gente considera dignos de contar. Captura el momento en vez del recuerdo.",
        },
        {
          forma: "texto",
          texto:
            "El método permitió además comparar por primera vez a personas muy distintas con la misma vara. Un adolescente en clase y un ejecutivo en una reunión rellenaban exactamente el mismo cuadernillo, y eso hizo comparables experiencias que antes no se podían medir juntas. La misma vara para un adolescente y un ejecutivo.",
        },
        {
          forma: "texto",
          texto:
            "Cuando se publicó el libro, la base de datos superaba las cien mil respuestas individuales. Se habían recogido en varios países, con adolescentes, obreros de fábrica, ejecutivos, jubilados y amas de casa, y esa variedad es lo que hace fuerte el material. Cien mil respuestas de varios países.",
        },
        {
          forma: "texto",
          texto:
            "El equipo italiano de Massimini y Carli aportó buena parte de los datos europeos. Trabajaron con pastores de los Alpes, con monjas y con obreros, y encontraron el mismo patrón en contextos que no se parecían en nada al de una ciudad estadounidense. Pastores, monjas y obreros dieron el mismo patrón.",
        },
        {
          forma: "arte",
          texto:
            "El nombre del estado no lo puso el investigador sino los entrevistados. Varios describieron aquellos ratos con la misma imagen sin haberse puesto de acuerdo: decían que era como dejarse llevar por una corriente, como si la cosa fluyera sola. La metáfora del agua la pusieron ellos.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Esa coincidencia de metáfora en gente muy distinta es un dato en sí misma. Un bailarín, un cirujano y un ajedrecista sin ninguna relación entre ellos eligieron la misma imagen del agua para describir lo mismo, y eso apunta a una experiencia común. Gente sin ninguna relación eligió la misma imagen.",
        },
        {
          forma: "texto",
          texto:
            "Las entrevistas de aquellos años cubrían oficios muy distintos a propósito. Escaladores, cirujanos, ajedrecistas, bailarinas, pastores de los Alpes y trabajadores de cadena de montaje describían la misma experiencia con vocabularios completamente distintos. Escaladores, cirujanos, bailarinas y obreros de cadena describían lo mismo con vocabularios que no se parecían en nada.",
        },
        {
          forma: "texto",
          texto:
            "El caso de los cirujanos es el que más aparece en el libro. Describen operaciones de seis horas que se les pasan volando, dicen no oír la música del quirófano y cuentan que se dan cuenta del cansancio y del hambre solo al quitarse los guantes.",
        },
        {
          forma: "texto",
          texto:
            "Varios de ellos contaban además que odiaban las guardias sin operaciones. Preferían un quirófano difícil a una tarde tranquila de papeleo, y alguno reconocía que le costaba encontrar fuera del hospital cualquier cosa que le absorbiera de esa manera. Preferían un quirófano difícil a una tarde de papeleo tranquila.",
        },
        {
          forma: "texto",
          texto:
            "El caso que más repite el libro es el de un obrero de una fábrica de montaje. Su trabajo consistía en una operación de cuarenta y tres segundos que repetía cientos de veces al día, y que él había convertido en una competición contra sí mismo.",
        },
        {
          forma: "texto",
          texto:
            "Ese hombre llevaba más de veinte años en la misma línea de montaje. Había rechazado ascensos a capataz porque no quería dejar la máquina, y en su tiempo libre había montado en el jardín de casa un sistema de riego con luces que él mismo diseñó.",
        },
        {
          forma: "texto",
          texto:
            "Había estudiado cada movimiento como un atleta estudia su técnica. Bajó el tiempo de la operación a menos de treinta segundos, llevaba la cuenta de sus récords, y describía aquella tarea repetitiva en los mismos términos que un escalador describe una pared. De cuarenta y tres segundos a menos de treinta.",
        },
        {
          forma: "texto",
          texto:
            "Sus compañeros hacían exactamente el mismo trabajo y lo odiaban.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia no estaba en la cadena sino en lo que él había montado encima.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el argumento entero del libro en un solo ejemplo.",
        },
      ],
    },
    {
      titulo: "El canal entre el aburrimiento y la angustia",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El estado que describe el libro tiene una lista de rasgos que aparecen juntos. La atención se estrecha hasta ocupar solo la tarea, desaparece la conciencia de uno mismo, el tiempo se deforma y la actividad parece merecer la pena por sí sola. Todos esos rasgos aparecen siempre juntos.",
        },
        {
          forma: "texto",
          texto:
            "La deformación del tiempo va en las dos direcciones y eso sorprende. Para un músico o un cirujano, las horas pasan como minutos; para un bailarín o un corredor, un instante puede alargarse y sentirse con un detalle que en otro momento sería imposible. Unas horas vuelan y un instante se alarga.",
        },
        {
          forma: "clave",
          rotulo: "Las tres condiciones",
          frase: "Un objetivo claro, información inmediata de cómo lo estás haciendo, y una dificultad que esté justo al límite de tu capacidad.",
        },
        {
          forma: "texto",
          texto:
            "La primera condición explica por qué los juegos producen tanto ese estado. Un juego es, por definición, una actividad con objetivos artificialmente claros y reglas explícitas, y esa claridad es justamente lo que la vida corriente casi nunca ofrece. Un juego trae de fábrica lo que la vida corriente casi nunca ofrece.",
        },
        {
          forma: "texto",
          texto:
            "La tercera condición es la que explica el diagrama más famoso del libro. Si la tarea supera claramente tu nivel aparece la angustia, y si tu nivel supera a la tarea aparece el aburrimiento, de modo que fluir vive en una franja estrecha entre las dos.",
        },
        {
          forma: "texto",
          texto:
            "Ese equilibrio tiene una consecuencia que casi nadie deduce. Como la capacidad crece con la práctica, el reto que te hacía fluir el año pasado te aburre este año, y mantener el estado obliga a subir la dificultad continuamente y para siempre. Hay que subir la dificultad continuamente.",
        },
        {
          forma: "texto",
          texto:
            "El autor presenta esa escalada como algo bueno y ahí conviene poner una objeción. Una vida entera subiendo la dificultad para no aburrirse se parece bastante a la insatisfacción permanente, y el libro no se detiene demasiado en ese problema. El libro no se detiene en ese problema.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar que ese diagrama ha cambiado varias veces desde 1975. La primera versión tenía tres zonas, la de los años ochenta añadió la apatía, y hay modelos posteriores con ocho estados que incluyen el control, la relajación y la preocupación. El dibujo que circula no es el original.",
        },
        {
          forma: "texto",
          texto:
            "El modelo de ocho estados lo desarrolló sobre todo el equipo italiano. Divide el plano en porciones según si la dificultad y la capacidad están por encima o por debajo de la media de esa persona, y es bastante más útil que el dibujo de tres zonas.",
        },
        {
          forma: "texto",
          texto:
            "Esa evolución es a la vez una virtud y un problema del modelo. Se fue ajustando a los datos, que es lo que debe hacer una teoría, y también significa que el dibujo que circula por internet no es el original de ninguna de sus versiones.",
        },
        {
          forma: "texto",
          texto:
            "Hay un matiz técnico importante en los modelos posteriores. Lo que se compara no es la dificultad objetiva de la tarea sino la percibida, y no contra tu capacidad absoluta sino contra tu propia media, de modo que todo el mapa es relativo a cada persona.",
        },
        {
          forma: "texto",
          texto:
            "La condición de la información inmediata explica muchas cosas de la vida diaria. Un escalador sabe en cada instante si el movimiento va bien, un cirujano ve lo que ocurre en el campo operatorio, y un profesor o un padre no sabrán en años si lo están haciendo bien.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale un consejo práctico que el libro repite en varios capítulos. Cuando una actividad no trae información inmediata de fábrica, hay que inventársela: fijar una medida propia, apuntar los resultados y comprobar cada poco si uno mejora. Si la actividad no da señales, invéntatelas con una medida propia y apúntala.",
        },
        {
          forma: "arte",
          texto:
            "El detalle más contraintuitivo del libro es que durante el estado no se es feliz. La conciencia de uno mismo desaparece, y con ella la posibilidad de notar que uno lo está pasando bien: la satisfacción llega después, al recordar el rato. La satisfacción llega después, al recordarlo.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "En los datos del busca eso se ve con claridad y sorprende al leerlo. En los momentos de máxima absorción, la puntuación de felicidad no es especialmente alta; sube justo después, cuando la persona vuelve a acordarse de sí misma y valora lo que acaba de hacer.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle desmonta la lectura habitual de este libro. No dice que fluir sea un estado de placer continuo, sino que es un estado de esfuerzo absorbente, y que el placer aparece cuando termina y uno se da cuenta de lo que ha hecho. Es esfuerzo absorbente, no placer continuo.",
        },
        {
          forma: "texto",
          texto:
            "La palabra que usa para las actividades que producen ese estado viene del griego. Las llama autotélicas, es decir que tienen su fin en sí mismas, y son aquellas que uno haría igual aunque no le pagaran ni le viera nadie. Las harías igual aunque no te pagaran.",
        },
        {
          forma: "texto",
          texto:
            "Ese concepto conecta con una discusión clásica sobre la motivación. Pagar por algo que se hacía por gusto puede reducir las ganas de hacerlo, un efecto medido desde los años setenta, y el libro lo usa para explicar por qué la afición convertida en oficio a veces se estropea.",
        },
        {
          forma: "texto",
          texto:
            "El libro sostiene que también hay personas más propensas que otras a entrar en ese estado. Describe una personalidad autotélica, capaz de encontrar retos en situaciones que a otros les parecen vacías, y dedica varias páginas a de dónde puede salir eso. Hay quien encuentra retos donde otros ven vacío.",
        },
        {
          forma: "texto",
          texto:
            "Los ejemplos que da de esa capacidad son los más duros del libro. Habla de presos políticos y de supervivientes de campos que convirtieron una celda en un problema que resolver, memorizando textos o jugando partidas mentales para no derrumbarse. Presos que convirtieron una celda en un problema.",
        },
        {
          forma: "texto",
          texto:
            "Su respuesta apunta a cinco condiciones en la familia de origen. Claridad en lo que se espera, interés real en lo que el niño está haciendo ahora, posibilidad de elegir, confianza suficiente para implicarse y retos cada vez un poco mayores. Claridad, interés, elección, confianza y retos crecientes.",
        },
        {
          forma: "texto",
          texto:
            "Esa parte es la más floja del libro en cuanto a datos.",
        },
        {
          forma: "texto",
          texto:
            "Son entrevistas y observación, no un seguimiento largo de familias.",
        },
        {
          forma: "texto",
          texto:
            "El propio autor la presenta como hipótesis y así conviene leerla.",
        },
      ],
    },
    {
      titulo: "La paradoja del trabajo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El hallazgo más incómodo de toda la investigación apareció al separar los avisos por contexto. Cuando el busca sonaba en el trabajo, la gente describía muchísimas más veces el estado de absorción que cuando sonaba en su tiempo libre. En el trabajo se fluye mucho más que en el ocio.",
        },
        {
          forma: "texto",
          texto:
            "Ese resultado va en contra de lo que casi todo el mundo contestaría en una encuesta. Si se pregunta en abstracto cuándo se siente uno mejor, la respuesta suele ser el fin de semana, y los avisos recogidos en el momento dicen otra cosa bastante distinta.",
        },
        {
          forma: "texto",
          texto:
            "Esa distancia entre lo que decimos y lo que registramos es el corazón del método. Sin el busca sonando a horas aleatorias, este hallazgo sencillamente no existiría, porque nadie contesta que su mejor rato de la semana fue un martes en la oficina. Nadie contesta que su mejor rato fue un martes.",
        },
        {
          forma: "clave",
          rotulo: "Las dos cifras",
          frase: "Algo más de la mitad de las respuestas de trabajo describían ese estado, frente a menos de una quinta parte de las de ocio.",
        },
        {
          forma: "texto",
          texto:
            "Conviene entender qué significan exactamente esas cifras antes de repetirlas. No dicen que la gente sea feliz trabajando: dicen que en el trabajo aparecen más a menudo las condiciones de reto y capacidad altos que definen el estado en este modelo. Fluir en el trabajo no es ser feliz en él.",
        },
        {
          forma: "texto",
          texto:
            "La segunda mitad del hallazgo es la que lo convierte en paradoja. En esos mismos avisos de trabajo, la gente decía con frecuencia que preferiría estar haciendo otra cosa, mientras que en el ocio decía lo contrario aunque no estuviera disfrutando. Preferían estar en otro sitio, aun fluyendo.",
        },
        {
          forma: "texto",
          texto:
            "La explicación más razonable no es psicológica sino cultural. Hemos aprendido que el trabajo es una obligación y el ocio una recompensa, y esa etiqueta pesa tanto que contestamos según ella incluso cuando la experiencia real dice lo contrario. El trabajo es obligación y el ocio recompensa.",
        },
        {
          forma: "texto",
          texto:
            "Ese estudio lo firmaron Csíkszentmihályi y Judith LeFevre en 1989. Analizaron los avisos de un grupo de trabajadores estadounidenses de varios sectores, y las cifras se han repetido después en otros países con resultados parecidos. Analizaron los avisos de trabajadores de varios sectores, y las cifras se han repetido después fuera.",
        },
        {
          forma: "texto",
          texto:
            "La muestra de aquel estudio era de poco más de cien personas adultas con empleo. Es una cifra modesta, aunque cada persona aportaba decenas de avisos, y conviene tenerla presente antes de convertir esos porcentajes en una ley universal. Poco más de cien personas, con decenas de avisos cada una.",
        },
        {
          forma: "texto",
          texto:
            "La explicación que propone el libro tiene que ver con las tres condiciones. Un puesto de trabajo suele traer de fábrica objetivos claros, información sobre si lo haces bien y una dificultad ajustada, y el tiempo libre casi nunca trae nada de eso. El puesto de trabajo trae las tres condiciones puestas.",
        },
        {
          forma: "texto",
          texto:
            "El estado más frecuente durante el ocio, según esos datos, no es el disfrute. Es la apatía: poca dificultad, poca capacidad exigida, poca atención y poco ánimo, que es exactamente lo que se siente hojeando el teléfono sin buscar nada. Apatía: poca exigencia y poco ánimo.",
        },
        {
          forma: "texto",
          texto:
            "El libro es de 1990 y aquel diagnóstico se hizo mirando la televisión. Treinta y cinco años después el aparato ha cambiado de tamaño y va en el bolsillo, y la descripción del estado de apatía encaja todavía mejor que entonces. Ahora el aparato va en el bolsillo.",
        },
        {
          forma: "arte",
          texto:
            "La televisión sale muy mal parada en toda la serie de estudios. Es de las actividades donde se registran menos concentración y peor ánimo, y aun así es a la que más horas se dedica, lo que el libro atribuye a que exige muy poca energía para empezar.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Esa asimetría entre coste inicial y satisfacción explica bastantes decisiones diarias. Tocar un instrumento da más satisfacción que ver una serie y cuesta muchísimo más arrancar, y a las once de la noche gana siempre lo que no exige ningún esfuerzo de entrada. A las once de la noche gana lo fácil.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar el alcance de esas comparaciones antes de sacar conclusiones. Que la gente fluya más en el trabajo no significa que el trabajo sea bueno ni que el ocio sobre: significa que el ocio pasivo está mal diseñado para producir ese estado. El ocio pasivo está mal diseñado, sin más.",
        },
        {
          forma: "texto",
          texto:
            "La conclusión práctica del libro es que el ocio hay que construirlo. Las aficiones que producen absorción tienen reglas, exigen aprender algo y dan una respuesta inmediata, y todas ellas requieren un empujón inicial que la televisión no requiere. El ocio bueno hay que construirlo a mano.",
        },
        {
          forma: "texto",
          texto:
            "El consejo concreto que se puede sacar cabe en una frase. Elige una actividad con reglas, mide algo en ella, sube la dificultad cuando deje de costarte, y protege un rato sin interrupciones, porque cada aviso del móvil deshace el estado por completo. Cada aviso del móvil deshace el estado.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale una idea que el libro repite y que resume bien su propuesta. Si una parte de tu vida no te absorbe, probablemente no le falta interés sino estructura, y ponerle reglas y una manera de medir suele cambiar la experiencia entera. Lo que falta no es interés sino estructura.",
        },
        {
          forma: "texto",
          texto:
            "El libro dedica también un capítulo entero al cuerpo y otro al pensamiento. Nadar, bailar, escalar o hacer el amor pueden producir el estado igual que resolver un problema matemático, escribir o llevar una conversación de verdad con alguien. Del cuerpo al pensamiento, el mecanismo es el mismo.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo sobre el cuerpo insiste en que no hace falta ningún talento especial. Andar puede convertirse en una actividad absorbente si uno se fija metas, elige rutas y presta atención al terreno, y lo mismo vale para comer o para escuchar música. Sirve hasta para andar o para comer.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo favorito de conversación viene de un texto chino de hace más de dos mil años. Un cocinero explica al príncipe que su cuchillo lleva diecinueve años sin afilarse porque no corta el hueso, sino que encuentra el hueco que ya estaba entre las articulaciones.",
        },
        {
          forma: "texto",
          texto:
            "El libro cita ese pasaje como la descripción más antigua que conoce del estado.",
        },
        {
          forma: "texto",
          texto:
            "El cocinero dice que no trabaja con los ojos sino con el espíritu.",
        },
        {
          forma: "texto",
          texto:
            "Y que cuando llega a una parte difícil, va más despacio y disfruta más.",
        },
      ],
    },
    {
      titulo: "Lo que fluir no arregla",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El aviso más importante del libro es también el que menos se cita. Fluir no es moralmente bueno: un ladrón forzando una cerradura, un jugador delante de una máquina o un soldado en combate pueden estar exactamente en ese estado. Un ladrón o un jugador también fluyen.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo de las máquinas tragaperras es el más incómodo de todos. Están diseñadas exactamente con las tres condiciones del modelo, objetivo claro, información inmediata y dificultad ajustada, y producen un estado de absorción que arruina a la gente. Cumplen las tres condiciones y arruinan a la gente.",
        },
        {
          forma: "texto",
          texto:
            "Ese ejemplo obliga a completar la teoría con algo que no está en ella. Hace falta un criterio externo para decidir qué merece la pena absorber una vida, y ese criterio no sale de los datos del busca ni de ninguna medida de experiencia. El criterio no sale de los datos.",
        },
        {
          forma: "texto",
          texto:
            "El propio autor dedica páginas a esa parte incómoda y no la esconde. Señala que el estado es adictivo precisamente porque es tan satisfactorio, y que alguien puede organizar una vida entera alrededor de una actividad que le absorbe y le destruye. Es adictivo justamente por ser tan satisfactorio.",
        },
        {
          forma: "texto",
          texto:
            "También avisa de un riesgo más doméstico y bastante frecuente. Quien encuentra ese estado solo en el trabajo tiende a pasar allí cada vez más horas, no por ambición sino porque en casa no hay nada que le absorba de la misma manera. Se queda en la oficina quien no encuentra nada en casa.",
        },
        {
          forma: "clave",
          rotulo: "Lo que el libro no dice",
          frase: "No dice que fluir mucho equivalga a una vida buena. Dice que es una experiencia óptima, y que qué hacer con ella es otra pregunta.",
        },
        {
          forma: "texto",
          texto:
            "El reproche metodológico más serio tiene que ver con cómo se mide. El estado se define por lo que la gente dice sentir, y el cuestionario pregunta justo por esos componentes, de modo que la definición y la medida se apoyan una en la otra.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una discusión abierta sobre si el estado es uno o son varios. Algunos investigadores sostienen que la absorción, el disfrute y la sensación de control pueden aparecer por separado, y que juntarlos en una sola etiqueta pierde información útil. Quizá no sea un estado sino varios.",
        },
        {
          forma: "texto",
          texto:
            "Eso no invalida los datos pero limita lo que se puede concluir de ellos. Un patrón que aparece en cien mil respuestas de muchos países es un hallazgo real; lo que resulta difícil es demostrar que ese estado causa algo y no solo acompaña a otra cosa.",
        },
        {
          forma: "texto",
          texto:
            "Conviene situar este libro en su contexto académico posterior. Fue uno de los cimientos de la llamada psicología positiva, que a partir de 2011 se llevó por delante buena parte de sus resultados al comprobar que muchos no se reproducían. Fue un cimiento de la psicología positiva.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una confusión muy extendida con otra teoría de la misma época. Mucha gente asocia fluir con la práctica deliberada y con la cifra de las diez mil horas, y las dos cosas vienen de otro investigador y describen algo distinto. La práctica deliberada es de otro investigador.",
        },
        {
          forma: "texto",
          texto:
            "La cifra de las diez mil horas, además, no la escribió aquel investigador. Salió de un libro de divulgación de 2008 que redondeó una media de su estudio sobre violinistas, y el propio autor del estudio pasó años corrigiendo esa lectura sin éxito. Ericsson pasó años corrigiendo esa lectura.",
        },
        {
          forma: "arte",
          texto:
            "Aquel investigador, Anders Ericsson, insistía en que la práctica deliberada no es agradable. Consiste en trabajar justo en lo que se te da mal, con corrección constante y máxima incomodidad, y él decía expresamente que eso no es el estado que describe este libro. Mejorar duele; fluir, no.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La diferencia entre las dos ideas es útil y se olvida constantemente. Fluir ocurre cuando el reto iguala tu capacidad; mejorar de verdad ocurre cuando el reto la supera un poco y te obliga a fallar, que es incómodo y no fluye nada. Mejorar exige fallar, y fallar no fluye.",
        },
        {
          forma: "texto",
          texto:
            "El destino comercial del libro tampoco es el que su autor buscaba. La idea acabó convertida en una técnica de productividad para oficinas y en una herramienta de diseño de videojuegos, donde el llamado canal de dificultad sirve para que nadie suelte el mando. Acabó siendo una técnica de retención.",
        },
        {
          forma: "texto",
          texto:
            "En el diseño de videojuegos esa idea se enseña como una curva de dificultad. La partida sube el reto justo cuando el jugador mejora, para mantenerlo dentro del canal, y las estadísticas de retención de la industria se apoyan en ese mecanismo. La curva sube justo cuando el jugador mejora.",
        },
        {
          forma: "texto",
          texto:
            "Ese uso es exactamente lo contrario de lo que el libro propone. Csíkszentmihályi hablaba de organizar una vida entera alrededor de experiencias que merezcan la pena, y la industria del entretenimiento usa el mismo mecanismo para retener la atención el máximo de horas. Una vida entera frente a unas horas de pantalla.",
        },
        {
          forma: "texto",
          texto:
            "En este catálogo, el libro con el que más conversa es Ikigai. Aquel superventas japonés cita a Csíkszentmihályi de forma explícita y monta buena parte de su propuesta sobre estas ideas, con bastantes menos datos detrás. Aquel superventas cita a Csíkszentmihályi de forma explícita y monta su propuesta sobre estas ideas.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia entre los dos está en el respaldo de cada afirmación. Aquí hay cien mil avisos de busca y estudios publicados con revisión; allí hay un puñado de entrevistas en un pueblo de Okinawa y una lectura muy libre de esta misma teoría. Cien mil avisos frente a un puñado de entrevistas.",
        },
        {
          forma: "texto",
          texto:
            "También encaja bien con La guerra del arte, que está en el catálogo. Pressfield describe la resistencia que hay que vencer para sentarse a trabajar, y este libro describe lo que ocurre cuando se vence: son las dos mitades del mismo problema. Son las dos mitades del mismo problema.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia de método entre los dos también es instructiva. Pressfield escribe desde su experiencia y con vocabulario casi religioso, y Csíkszentmihályi llega a conclusiones parecidas con cuestionarios, escalas y estudios publicados con revisión. Uno escribe desde su experiencia y con vocabulario casi religioso; el otro, con escalas y estudios revisados.",
        },
        {
          forma: "texto",
          texto:
            "Treinta y cinco años después, el hallazgo del busca sigue en pie.",
        },
        {
          forma: "texto",
          texto:
            "Nos aburrimos descansando y nos concentramos trabajando.",
        },
        {
          forma: "texto",
          texto:
            "Lo difícil es diseñar el tiempo libre como se diseña un puesto de trabajo.",
        },
      ],
    },
  ],
};

export const EDUCADA: Resumen = {
  id: "educada",
  titulo: "Una educación",
  autor: "Tara Westover",
  ano: 2018,
  gancho: "Pisó un aula por primera vez a los diecisiete años. Diez años después era doctora por Cambridge.",
  porQue:
    "Plantea la pregunta más difícil, qué haces cuando educarte te separa de tu familia, y es honesto sobre lo poco fiable que es su propia memoria.",
  partes: [
    {
      titulo: "La montaña sin partida de nacimiento",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Tara Westover nació en 1986 en una granja del sur de Idaho, al pie de una montaña que su familia llamaba el Pico de Buck. Era la séptima y última hija, y durante nueve años no existió para el Estado porque nadie inscribió su nacimiento.",
        },
        {
          forma: "texto",
          texto:
            "Ni siquiera la fecha de nacimiento está clara en el libro. Cuando por fin tramitaron los papeles, su madre y su abuela no coincidían en el día, hubo que elegir uno, y ella creció sabiendo que su cumpleaños era una decisión administrativa. Su cumpleaños fue una decisión administrativa.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle vale como resumen de toda la primera parte del libro. Cuando no hay registros, no hay una versión oficial de nada, y todo lo que se sabe de una infancia depende de quién lo cuente y de cuánto le convenga recordarlo así. Sin registros no hay versión oficial de nada.",
        },
        {
          forma: "texto",
          texto:
            "La casa estaba a las afueras de un pueblo pequeño llamado Clifton. Es una zona agrícola del sur de Idaho, cerca de la frontera con Utah, con pocos cientos de habitantes y con una montaña que domina el paisaje desde cualquier ventana. Unos cientos de habitantes y una montaña enorme.",
        },
        {
          forma: "texto",
          texto:
            "La falta de papeles no era un descuido sino una postura. Su padre creía que el gobierno federal perseguía a las familias creyentes, y no quería que ninguno de sus hijos apareciera en un registro, una escuela o un historial médico. No era descuido: era una decisión política.",
        },
        {
          forma: "texto",
          texto:
            "Esa desconfianza tenía además referencias concretas y muy vivas en la zona. A principios de los noventa, un asedio federal a una familia aislada de Idaho terminó con varios muertos, y el padre contaba aquel suceso en la cena como un aviso de lo que les esperaba.",
        },
        {
          forma: "clave",
          rotulo: "Lo que no tuvo de niña",
          frase: "Ni partida de nacimiento, ni colegio, ni vacunas, ni médico, ni un solo día dentro de un aula hasta los diecisiete años.",
        },
        {
          forma: "texto",
          texto:
            "La preparación para el fin del mundo ocupaba buena parte del calendario familiar. Guardaban melocotón en conserva, gasolina, munición y agua, y hacia 1999 el padre estaba convencido de que el cambio de siglo iba a tumbar la civilización entera. Conservas, gasolina, munición y agua guardada.",
        },
        {
          forma: "texto",
          texto:
            "El libro describe además una mochila preparada para cada hijo. Contenía comida, agua y lo imprescindible para huir al monte, se revisaba periódicamente, y estaba junto a la puerta por si llegaba el momento de escapar de las autoridades. Una mochila junto a la puerta, revisada cada poco.",
        },
        {
          forma: "texto",
          texto:
            "La familia era mormona y a la vez muy distinta de sus vecinos mormones. El padre esperaba el fin del mundo, guardaba combustible, armas y melocotón en conserva, y sostenía que las autoridades de la propia iglesia se habían ablandado. Sostenía que la propia iglesia se había ablandado.",
        },
        {
          forma: "texto",
          texto:
            "Cuando llegó el año 2000 y no pasó absolutamente nada, hubo un silencio incómodo en casa. El libro cuenta esa mañana con humor seco: la nevera seguía funcionando, la radio hablaba de fuegos artificiales, y nadie mencionó el asunto nunca más. Nadie volvió a mencionar el asunto jamás.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar esto porque el libro se lee muchas veces como un retrato de una religión. La Iglesia mormona no enseña nada de lo que hacía aquella familia, y las propias memorias señalan que los vecinos creyentes llevaban a sus hijos al colegio con normalidad.",
        },
        {
          forma: "texto",
          texto:
            "La propia autora ha insistido en eso en entrevistas posteriores. Dice que su libro trata de una familia concreta y no de una comunidad, y que le incomoda que se use como munición contra los millones de personas que comparten esa fe sin nada de aquello.",
        },
        {
          forma: "texto",
          texto:
            "La educación en casa consistía sobre todo en no ir a clase. Había libros del Antiguo Testamento, discursos de líderes religiosos y algún manual suelto, y la mayor parte del día se trabajaba en el desguace o se preparaban conservas. Se trabajaba en el desguace o se hacían conservas.",
        },
        {
          forma: "texto",
          texto:
            "Conviene distinguir aquello de lo que se llama educación en casa en otros sitios. Hay familias que enseñan en casa con temario, exámenes y horarios, y lo que describe este libro es sencillamente la ausencia de cualquier enseñanza organizada. Aquí no hubo temario, ni exámenes, ni horarios: sencillamente no hubo enseñanza organizada de ningún tipo.",
        },
        {
          forma: "arte",
          texto:
            "El padre tenía un desguace de chatarra en la finca y allí trabajaban los hijos desde pequeños. Cortaban metal, cargaban depósitos y separaban cobre sin gafas, sin guantes y sin ninguna medida de seguridad, porque él consideraba que el miedo era falta de fe. Para él, el miedo era falta de fe.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El detalle que más aparece de aquel trabajo es la máquina de cortar chatarra. La llamaban la cizalla, mordía planchas de metal con una fuerza enorme, y el padre les pedía que metieran las piezas a mano mientras la máquina seguía funcionando. Había que meter las planchas con la máquina en marcha.",
        },
        {
          forma: "texto",
          texto:
            "La madre trabajaba de comadrona sin licencia y como herbolaria. Atendía partos en casas de la zona, preparaba tinturas, y con el tiempo montó un negocio de aceites esenciales que acabó siendo bastante grande y sostuvo económicamente a toda la familia. Atendía partos sin licencia y preparaba tinturas.",
        },
        {
          forma: "texto",
          texto:
            "Ese negocio es uno de los datos que más sorprende al final del libro. La familia que vivía preparándose para el colapso acabó dirigiendo una empresa próspera de productos naturales, con empleados, almacén y clientes en todo el país. Los que esperaban el colapso acabaron dirigiendo una empresa próspera con empleados y clientes.",
        },
        {
          forma: "texto",
          texto:
            "En aquella casa no se llamaba al médico bajo ninguna circunstancia. Los huesos rotos, las quemaduras y las conmociones se trataban con hierbas, con imposición de manos y con una preparación de la madre que aparece una y otra vez en el libro. Huesos, quemaduras y golpes, todo curado en casa.",
        },
        {
          forma: "texto",
          texto:
            "La madre justificaba esas curaciones con una mezcla de fe y de método propio. Decía consultar la respuesta correcta a través de las sensaciones de sus dedos, una técnica que aprendió de otras herbolarias, y la familia la aceptaba como diagnóstico. La familia lo aceptaba como diagnóstico válido.",
        },
        {
          forma: "texto",
          texto:
            "Tres de los siete hermanos acabaron con un doctorado.",
        },
        {
          forma: "texto",
          texto:
            "Los otros cuatro no llegaron a terminar la enseñanza obligatoria.",
        },
        {
          forma: "texto",
          texto:
            "Todos crecieron en la misma casa y con los mismos padres.",
        },
      ],
    },
    {
      titulo: "El chatarrero y la comadrona",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El libro está lleno de accidentes contados con una frialdad que asusta más que los gritos. Uno de los hermanos se cayó de una plataforma elevada sobre hormigón y hierros, quedó con la cabeza abierta, y lo llevaron a casa en vez de a un hospital.",
        },
        {
          forma: "texto",
          texto:
            "Aquel hermano quedó con secuelas que el libro relaciona después con su carácter. Cambió tras el golpe, tuvo problemas de control y de memoria, y la propia autora se pregunta en voz alta cuánto de lo que vino después empezó aquella tarde. Ella se pregunta cuánto empezó aquella tarde.",
        },
        {
          forma: "texto",
          texto:
            "Ella misma advierte de que esa explicación es cómoda y quizá falsa. Reconoce que atribuir la violencia a un golpe en la cabeza sirve para no culpar a nadie, y deja la pregunta abierta en vez de resolverla en su favor. Deja la pregunta abierta en vez de resolverla.",
        },
        {
          forma: "texto",
          texto:
            "El padre sufrió el peor de todos cuando le explotó un depósito de combustible. Perdió buena parte de la cara y de las manos, estuvo semanas al borde de la muerte en el salón de su casa, y la familia lo curó con la preparación de la madre.",
        },
        {
          forma: "texto",
          texto:
            "Aquel hombre sobrevivió y ese hecho reforzó todo el sistema de creencias. Para la familia no fue una casualidad médica sino una prueba de que tenían razón, y a partir de ahí resultó todavía más difícil discutir con ellos sobre hospitales. Para ellos fue una prueba de que tenían razón.",
        },
        {
          forma: "clave",
          rotulo: "La regla de la casa",
          frase: "Los hospitales eran parte del sistema que había que evitar. Curarse en casa no era una preferencia: era una prueba de fe.",
        },
        {
          forma: "texto",
          texto:
            "Esa regla explica también una escena tardía que resulta demoledora. Cuando ella, ya adulta, acude a un médico por primera vez, la reacción de la familia no es alivio sino decepción, como si hubiera desertado de algo importante. Ir al médico se leyó como una deserción.",
        },
        {
          forma: "texto",
          texto:
            "Hubo además dos accidentes de coche con la familia entera dentro. En los dos el padre había decidido conducir de noche y con hielo para ahorrar una parada, y en los dos hubo heridos que tampoco vieron a ningún médico. Ninguno de los heridos vio nunca a un médico.",
        },
        {
          forma: "texto",
          texto:
            "Después del segundo accidente, la madre quedó con secuelas neurológicas evidentes. Tenía migrañas constantes, no soportaba la luz y tardó años en volver a ser la de antes, y todo eso se trató en casa con hierbas y con reposo a oscuras. Migrañas y luz insoportable durante años.",
        },
        {
          forma: "texto",
          texto:
            "Esa acumulación de desastres es uno de los puntos que más se le ha discutido al libro. Son muchísimas desgracias en una sola familia, y algunos lectores y varios parientes han cuestionado que ocurrieran todas exactamente como se cuentan. Varios parientes han discutido que ocurriera todo exactamente así.",
        },
        {
          forma: "texto",
          texto:
            "En su descargo hay que decir que un desguace sin protección es un sitio muy peligroso. Las estadísticas de accidentes laborales en el sector del metal son altas incluso con normas de seguridad, y aquella familia no aplicaba ninguna. Un desguace sin protección es un sitio peligrosísimo, incluso cuando se aplican las normas de seguridad.",
        },
        {
          forma: "texto",
          texto:
            "Tampoco había seguro de ningún tipo, ni laboral ni médico ni de vehículos. Cualquiera de aquellos accidentes habría arruinado a la familia si hubieran acudido a un hospital, y esa aritmética también forma parte de por qué no acudían. Un hospital los habría arruinado, y esa aritmética también forma parte de la explicación.",
        },
        {
          forma: "texto",
          texto:
            "La parte más dura del libro no son los accidentes sino un hermano. En las memorias se le llama Shawn, es un nombre falso, y su violencia contra ella ocupa buena parte del relato desde que Tara tiene unos quince años. El nombre del hermano es falso en el libro.",
        },
        {
          forma: "texto",
          texto:
            "El uso de nombres falsos es una decisión que ella explica al principio. Cambió el de varios hermanos y el de algunas personas del pueblo, y esa elección protege a terceros y a la vez hace más difícil comprobar nada desde fuera. Protege a terceros y dificulta comprobar nada.",
        },
        {
          forma: "arte",
          texto:
            "Las escenas están contadas con detalle y sin adjetivos. La agarra por el pelo, le retuerce la muñeca hasta el suelo, le mete la cabeza en el váter, y todo eso mientras la llama con palabras que el libro reproduce sin suavizar. El libro reproduce esas palabras sin suavizarlas.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Lo que convierte esas páginas en algo más que un relato de malos tratos es la reacción del resto. Los padres lo veían, lo minimizaban y explicaban después que ella exageraba, y esa negación acabó siendo más determinante que los propios golpes. La negación pesó más que los propios golpes.",
        },
        {
          forma: "texto",
          texto:
            "Una hermana suya llegó a confirmarle que le había pasado lo mismo. Las dos acordaron hablar con los padres juntas, y cuando llegó el momento la hermana se retiró y ella se quedó sola sosteniendo la acusación delante de toda la familia. Se quedó sola sosteniendo la acusación.",
        },
        {
          forma: "texto",
          texto:
            "El libro incluye una nota del autor donde explica cómo está construido. Dice que ha cambiado nombres, que reconstruye escenas de memoria y que ha consultado a sus hermanos, y que donde los recuerdos no coinciden lo hace constar. Nombres cambiados, escenas reconstruidas y discrepancias señaladas una por una.",
        },
        {
          forma: "texto",
          texto:
            "Ese aviso importa porque el libro trata precisamente de eso. La duda sobre la propia memoria no es una nota al margen sino el asunto central: si tu familia insiste durante años en que no viste lo que viste, acabas dudando tú antes que ellos.",
        },
        {
          forma: "texto",
          texto:
            "Ella empezó a llevar un diario justamente por esa razón. Escribía lo que pasaba el mismo día para tener una versión anterior a las discusiones, y buena parte del libro está construida sobre aquellos cuadernos y no solo sobre el recuerdo. El libro se apoya en aquellos cuadernos.",
        },
        {
          forma: "texto",
          texto:
            "Esas discrepancias aparecen a pie de página a lo largo de todo el volumen. Hay notas que dicen que un hermano recuerda otra fecha, otro lugar o que aquello lo dijo otra persona, y esa costumbre es bastante rara en unas memorias comerciales. Eso es rarísimo en unas memorias comerciales.",
        },
        {
          forma: "texto",
          texto:
            "El resultado es un libro que discute consigo mismo mientras avanza.",
        },
        {
          forma: "texto",
          texto:
            "No pide que le creas: enseña dónde no está segura.",
        },
        {
          forma: "texto",
          texto:
            "Ese es, probablemente, su mayor mérito literario.",
        },
      ],
    },
    {
      titulo: "El examen que se estudió sola",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La puerta la abrió un hermano mayor que se marchó antes que ella. Tyler se fue a la universidad contra la voluntad del padre, volvió de visita y le explicó que existía un examen de acceso que se podía preparar por libre. Un hermano se fue antes y volvió a contárselo.",
        },
        {
          forma: "texto",
          texto:
            "Tyler es el personaje más luminoso del libro y también el más discreto. Escuchaba música clásica en el coche cuando en aquella casa eso resultaba sospechoso, estudió ingeniería y acabó doctorándose, y su marcha abrió una puerta que nadie había usado. Su marcha abrió una puerta que nadie usaba.",
        },
        {
          forma: "clave",
          rotulo: "El examen",
          frase: "Se llama ACT y lo hacen millones de adolescentes estadounidenses. Ella lo preparó sola, sin haber visto nunca un aula ni un profesor.",
        },
        {
          forma: "texto",
          texto:
            "Aquella universidad admitía entonces a alumnos sin expediente escolar si la nota del examen era buena. Ese detalle administrativo es lo que hace posible la historia entera: sin esa puerta, no había ninguna forma legal de entrar sin papeles. Sin esa puerta administrativa no había ninguna forma legal de entrar sin papeles.",
        },
        {
          forma: "texto",
          texto:
            "El problema no era el temario sino que le faltaban los cimientos. No sabía qué era una fracción negativa, no había visto trigonometría, y tuvo que aprender álgebra entera con un libro de texto de segunda mano encima de una mesa de cocina. Le faltaban los cimientos, no el temario.",
        },
        {
          forma: "texto",
          texto:
            "El hermano que ya estudiaba le mandó por correo los manuales que necesitaba. Ella los trabajaba de noche, después de la jornada en el desguace, y su padre lo consideraba una pérdida de tiempo y una traición doméstica a partes iguales. Estudiaba de noche, después del desguace.",
        },
        {
          forma: "texto",
          texto:
            "La postura del padre sobre los estudios de las hijas era todavía más estricta. Sostenía que una mujer con carrera acaba fuera de su sitio, y a ella le repetía que su porvenir estaba en casarse joven y trabajar en el negocio familiar. Le repetía que su porvenir era casarse joven.",
        },
        {
          forma: "texto",
          texto:
            "Suspendió el primer intento y volvió a presentarse meses después. En la segunda ocasión sacó una nota suficiente para entrar en la Universidad Brigham Young, que es una universidad privada mormona de Utah con miles de alumnos. En el segundo intento sacó nota suficiente para entrar en una universidad privada de Utah.",
        },
        {
          forma: "texto",
          texto:
            "El detalle que ella subraya de aquel examen no es la nota sino el formato. Nunca había hecho una prueba con opciones múltiples, no sabía que se podía saltar una pregunta y volver, y esa mecánica le costó tanto como el contenido. La mecánica del examen le costó tanto como el contenido.",
        },
        {
          forma: "texto",
          texto:
            "Aquel examen incluye además una sección de ciencias que la dejó perpleja. Preguntaba por gráficas y por experimentos, y ella no había visto nunca un laboratorio ni sabía qué se supone que hace un científico durante su jornada. Nunca había visto un laboratorio ni sabía qué hace exactamente un científico durante su jornada.",
        },
        {
          forma: "texto",
          texto:
            "Llegó allí a los diecisiete años sin saber nada de cómo funciona una clase. No sabía que había que leer los capítulos antes de ir, no sabía qué era un examen parcial, y creía que si el profesor mandaba leer algo era una sugerencia amable.",
        },
        {
          forma: "texto",
          texto:
            "Sus compañeras de piso tampoco entendían nada de lo que veían. Le llamaba la atención que tiraran la comida caducada y que se ducharan a diario, y a ellas les extrañaba que no lavara los platos ni cerrara nunca la puerta con llave. Ninguna de las dos partes entendía a la otra.",
        },
        {
          forma: "texto",
          texto:
            "Las primeras notas fueron malas y estuvo a punto de dejarlo. Lo que la salvó fue una conversación en la que un compañero le explicó, con paciencia, que el libro de texto se lee y que las preguntas del examen salen de ahí. Un compañero le explicó que el libro se lee.",
        },
        {
          forma: "texto",
          texto:
            "A partir de ese momento su rendimiento cambia de forma llamativa. Descubre que se le da bien estudiar, que la memoria entrenada leyendo las mismas páginas religiosas durante años sirve para otra cosa, y acaba el curso con notas altas. Acabó aquel curso con notas altas.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle es de los más interesantes del libro y suele pasarse por alto. Los años de lectura repetida de unos pocos textos le habían dado una capacidad de concentración y de memoria que sus compañeros, con mejor formación, no tenían. Leer siempre lo mismo le había entrenado la memoria.",
        },
        {
          forma: "arte",
          texto:
            "Su cuerpo tampoco estaba preparado para aquella vida. Nunca había ido al dentista, no sabía que hay que lavarse las manos al salir del baño, y pasó su primer año con un dolor de muelas continuo porque no se le ocurría que existiera solución. Pasó un año entero con dolor de muelas.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La lista de cosas que tuvo que aprender fuera del temario es larguísima. Cómo se pide cita con un médico, para qué sirve un seguro, qué se hace cuando alguien te invita a cenar y cómo se rellena un impreso oficial sin ayuda de nadie.",
        },
        {
          forma: "texto",
          texto:
            "El dinero era el otro problema y estuvo cerca de tumbarla. Trabajaba limpiando casas y de cajera, no pedía ayudas porque su padre las consideraba dinero robado del Estado, y hubo un curso en que no podía pagar el alquiler ni la matrícula. No pedía ayudas porque su padre las despreciaba.",
        },
        {
          forma: "texto",
          texto:
            "Hubo un invierno en que vivió con la calefacción apagada y comiendo lo mínimo. El libro cuenta que se planteó seriamente volver a la montaña, y que lo que la retuvo no fue una convicción noble sino la vergüenza de reconocer el fracaso. La retuvo la vergüenza, no una convicción.",
        },
        {
          forma: "texto",
          texto:
            "El giro llegó cuando una persona de la universidad le explicó que existían becas. Solicitó una ayuda federal para estudiantes sin recursos, la concedieron, y ese cheque fue la primera vez que aceptó dinero del gobierno del que su padre desconfiaba. Aceptó por fin dinero del gobierno que su padre odiaba.",
        },
        {
          forma: "texto",
          texto:
            "Quien se lo explicó fue un obispo de la iglesia local, y ese detalle importa. La misma institución religiosa que su padre consideraba tibia fue la que la empujó a pedir ayuda al Estado, y el libro señala esa ironía sin subrayarla demasiado. El libro señala esa ironía sin subrayarla.",
        },
        {
          forma: "texto",
          texto:
            "El libro cuenta ese momento como una frontera moral y no como un trámite.",
        },
        {
          forma: "texto",
          texto:
            "Aceptar aquel dinero significaba admitir que su padre podía estar equivocado.",
        },
        {
          forma: "texto",
          texto:
            "Y eso costaba mucho más que estudiar álgebra sola en una cocina.",
        },
      ],
    },
    {
      titulo: "La palabra que no conocía",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La escena más citada del libro dura media página y ocurre en una clase de historia del arte. La profesora proyecta un cuadro, aparece una palabra que Tara no ha oído nunca, y ella levanta la mano y pregunta qué significa Holocausto. Levantó la mano y preguntó qué era el Holocausto.",
        },
        {
          forma: "texto",
          texto:
            "Ella describe lo que pasó después de aquella clase con mucha precisión. Buscó la palabra, leyó durante horas, y lo que la dejó sin aire no fue el número de muertos sino la certeza de que había vivido diecisiete años sin saberlo. Diecisiete años sin haber oído esa palabra.",
        },
        {
          forma: "texto",
          texto:
            "Hay una segunda escena parecida en una clase sobre derechos civiles. Descubre entonces el significado real de una palabra que su hermano le había gritado durante años como si fuera un apodo cariñoso, y ese hallazgo la deja peor que el anterior. Su hermano se lo había gritado durante años.",
        },
        {
          forma: "texto",
          texto:
            "El silencio del aula es lo que más le duele en aquel momento. Los compañeros la miran creyendo que hace un chiste de mal gusto, la profesora contesta con sequedad, y ella sale de clase sin entender qué acaba de pasar. Salió de clase sin entender qué había pasado.",
        },
        {
          forma: "texto",
          texto:
            "Ese episodio se ha convertido en el resumen del libro para mucha gente. Conviene decir que ocupa media página de más de cuatrocientas, y que reducir estas memorias a esa anécdota deja fuera casi todo lo que las hace interesantes. Media página de más de cuatrocientas.",
        },
        {
          forma: "clave",
          rotulo: "Lo que faltaba",
          frase: "No era una palabra suelta. No sabía quién era Napoleón, no había oído hablar del movimiento por los derechos civiles y no sabía que Europa había tenido dos guerras mundiales.",
        },
        {
          forma: "texto",
          texto:
            "Ese vacío es el que da sentido al título del libro en inglés. La palabra que eligió no significa tener estudios sino haber sido formada, y el libro entero trata de la diferencia entre acumular datos y cambiar la manera de pensar. No es tener estudios: es haber sido formada.",
        },
        {
          forma: "texto",
          texto:
            "El final del libro define esa palabra de una manera que sorprende. Dice que podría llamarse transformación, traición o metamorfosis, y que lo que ganó no fue un título sino la capacidad de tener una versión propia de su propia historia. Ganó una versión propia de su propia historia.",
        },
        {
          forma: "texto",
          texto:
            "A partir de aquel curso su carrera académica se acelera de forma casi absurda. Se especializa en historia, un profesor la anima a solicitar un programa en el extranjero, y acaba consiguiendo una beca competitiva para estudiar en Cambridge. Acabó consiguiendo una beca competitiva para Cambridge.",
        },
        {
          forma: "texto",
          texto:
            "El primer viaje a Inglaterra lo cuenta con una mezcla de asombro y de pánico. Nunca había salido de Estados Unidos, no sabía cómo funcionaba un aeropuerto internacional, y llegó a una universidad de ochocientos años con una maleta prestada. Llegó a una universidad de ochocientos años.",
        },
        {
          forma: "texto",
          texto:
            "Durante aquel primer curso escribía a casa contando lo que veía. Sus padres respondían advirtiéndole de que aquel sitio la estaba cambiando, y el libro señala que en eso tenían toda la razón y que ese era exactamente el problema. Tenían razón, y ese era justamente el problema.",
        },
        {
          forma: "texto",
          texto:
            "La beca se llama Gates Cambridge y la financia una fundación privada muy conocida. Es una de las ayudas más difíciles de conseguir del mundo anglosajón, y se la dieron a una alumna que cinco años antes no había pisado un colegio. Cinco años antes no había pisado un colegio.",
        },
        {
          forma: "texto",
          texto:
            "El contraste entre las dos vidas es lo que da fuerza a esa parte del libro. La misma persona que aprendía a leer con discursos religiosos en una cocina de Idaho acabó discutiendo historiografía en seminarios de Cambridge con veintipocos años. De una cocina de Idaho a un seminario de Cambridge.",
        },
        {
          forma: "arte",
          texto:
            "Hay una escena en Cambridge que resume el libro mejor que cualquier resumen. Un profesor la ve caminar por el tejado de una capilla sin miedo, con viento fuerte, mientras el resto se agarra, y le dice que esa firmeza es lo mismo que la trae hasta allí.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Aquella firmeza venía de trabajar años en tejados y en estructuras de metal. Lo que sus compañeros leyeron como valentía intelectual era en realidad un hábito físico aprendido en el desguace, y esa confusión le hizo bastante bien. Lo que leyeron como valentía intelectual era en realidad un hábito físico aprendido en el desguace.",
        },
        {
          forma: "texto",
          texto:
            "Ese profesor le explica después algo que ella tarda años en aceptar. Le dice que no está allí por caridad ni por exotismo, y que el oro sigue siendo oro aunque venga cubierto de barro y aunque nadie de su casa sepa reconocerlo. El oro sigue siendo oro aunque venga con barro.",
        },
        {
          forma: "texto",
          texto:
            "El síndrome que describe en esos capítulos tiene nombre y es muy común. Es la sensación de ser un impostor a punto de ser descubierto, y en su caso venía reforzada por una familia que le repetía que aquel sitio no era el suyo. Su familia le repetía que aquel sitio no era suyo.",
        },
        {
          forma: "texto",
          texto:
            "Terminó un máster en Cambridge, pasó una temporada investigando en Harvard y se doctoró en historia en 2014. Su tesis trataba sobre el mormonismo y las ideas sobre la familia en el pensamiento del siglo diecinueve. Su tesis trataba del mormonismo y de las ideas sobre la familia en el pensamiento del siglo diecinueve.",
        },
        {
          forma: "texto",
          texto:
            "Fue precisamente en Harvard donde ocurrió la ruptura definitiva con sus padres. Ellos viajaron hasta allí para intentar recuperarla, se instalaron unos días, y aquella visita terminó con la oferta de la bendición y con ella diciendo que no. Sus padres viajaron hasta allí para recuperarla.",
        },
        {
          forma: "texto",
          texto:
            "Elegir ese tema no fue una casualidad académica. Dedicó su doctorado a estudiar con herramientas de historiadora exactamente el mundo del que venía, y ese distanciamiento profesional es parte de cómo consiguió escribir después sobre su propia familia. Estudió con herramientas de historiadora el mundo del que venía, y eso le permitió después escribirlo.",
        },
        {
          forma: "texto",
          texto:
            "El oficio de historiadora también explica la estructura del libro. Trabaja con fuentes, contrasta versiones, señala dónde falta documentación y admite lo que no puede probar, que es exactamente lo que casi ninguna memoria hace. Trabaja con fuentes, contrasta versiones y admite lo que no puede probar, cosa rarísima en unas memorias.",
        },
        {
          forma: "texto",
          texto:
            "Diez años separan la primera clase de la defensa de la tesis.",
        },
        {
          forma: "texto",
          texto:
            "Empezó sin saber qué era un examen parcial.",
        },
        {
          forma: "texto",
          texto:
            "Terminó siendo doctora en historia por una de las universidades más antiguas del mundo.",
        },
      ],
    },
    {
      titulo: "Lo que costó la educación",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La segunda mitad del libro no trata de estudiar sino de la ruptura. Cuando Tara habla con sus padres de la violencia de su hermano, ellos eligen creerle a él, y a partir de ese momento la discusión deja de ser sobre lo que pasó.",
        },
        {
          forma: "texto",
          texto:
            "Los años que siguen son los peores del libro en cuanto a salud mental. Describe insomnio, pesadillas, gritos por la noche que despertaban a los vecinos y meses en que no pudo escribir una línea de su tesis doctoral. Meses sin poder escribir una línea de la tesis.",
        },
        {
          forma: "texto",
          texto:
            "La respuesta de los padres tiene una forma que el libro describe con precisión. No la acusan de mentir sino de estar poseída por el mal, y el padre le ofrece una bendición para expulsar de ella lo que la ha vuelto así. La acusaron de estar poseída, no de mentir.",
        },
        {
          forma: "texto",
          texto:
            "Esa manera de responder es la más difícil de rebatir que existe. Si el desacuerdo se explica por una posesión, cualquier argumento que ella dé confirma el diagnóstico, y no queda ninguna conversación posible sobre los hechos. Cualquier argumento que ella diera confirmaba el diagnóstico, y no quedaba conversación posible.",
        },
        {
          forma: "clave",
          rotulo: "La condición para volver",
          frase: "Aceptar aquella bendición y retirar lo que había dicho. Ella dijo que no, y esa negativa le costó a la mayor parte de su familia.",
        },
        {
          forma: "texto",
          texto:
            "El desenlace real está en la última página y es de una tristeza seca. Está distanciada de sus padres y de cuatro de sus seis hermanos, no ha vuelto a la montaña, y describe esa pérdida sin convertirla en una lección edificante. No convierte esa pérdida en una lección.",
        },
        {
          forma: "texto",
          texto:
            "El libro se niega expresamente a llamar a eso una liberación. Ella dice que perder a una familia no se compensa con un título, que sigue queriendo a sus padres, y que preferiría no haber tenido que elegir entre las dos cosas. Preferiría no haber tenido que elegir.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir con claridad que la familia niega buena parte del relato. Los padres publicaron un comunicado desmintiendo episodios concretos, y el hermano al que el libro llama Shawn ha negado siempre haberla maltratado. Los padres publicaron un comunicado desmintiendo episodios concretos, y el hermano ha negado siempre haberla maltratado.",
        },
        {
          forma: "texto",
          texto:
            "Tres de sus hermanos, en cambio, se han puesto de su lado en público. Son precisamente los tres que salieron de la montaña y estudiaron, y esa coincidencia se puede leer como confirmación o como sesgo, según a quién se pregunte. Son los tres que salieron y estudiaron.",
        },
        {
          forma: "texto",
          texto:
            "Esa disputa no se puede resolver desde fuera y conviene no fingir que sí. No hay informes médicos porque nunca fueron al médico, no hay expedientes escolares porque no hubo escuela, y esa ausencia de papeles era justamente el proyecto del padre. Esa ausencia de papeles era el proyecto del padre.",
        },
        {
          forma: "arte",
          texto:
            "El género de las memorias arrastra además un problema de credibilidad reciente. En 2006 se destapó que un superventas sobre adicciones estaba en buena parte inventado, hubo devoluciones y disculpas televisadas, y desde entonces cualquier infancia extrema se lee con una ceja levantada. Desde entonces cualquier infancia extrema se lee con una ceja levantada.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Aquel escándalo cambió las normas del sector editorial anglosajón. Desde entonces las memorias pasan por procesos de comprobación mucho más serios, y este libro se publicó en una editorial grande que hizo ese trabajo antes de sacarlo. Desde entonces las memorias pasan por procesos de comprobación bastante más serios.",
        },
        {
          forma: "texto",
          texto:
            "Frente a eso, este libro juega bastante limpio y conviene reconocerlo. Avisa de que trabaja con memoria, señala sus propias dudas a pie de página y evita las escenas redondas que caracterizan a las memorias fabricadas. Avisa de que trabaja con memoria y señala sus propias dudas a pie de página.",
        },
        {
          forma: "texto",
          texto:
            "Como texto tiene también defectos literarios que se notan al final. El último tercio se repite, las mismas conversaciones vuelven varias veces, y las páginas de Cambridge son bastante menos vivas que las de la chatarrería. Las páginas de Cambridge son bastante menos vivas que las de la chatarrería.",
        },
        {
          forma: "texto",
          texto:
            "Esa repetición tiene una explicación que no la arregla del todo. La propia experiencia era circular, con reconciliaciones y rupturas encadenadas durante años, y reproducir esa circularidad en el papel cansa al lector aunque sea fiel a los hechos. La experiencia real también era circular.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar lo que el libro no dice, porque se le atribuye mucho. No es un ataque a la religión mormona, no propone denunciar a ninguna familia, y no sostiene que estudiar arregle nada: sostiene que cambia a quien estudia, y que eso tiene un precio.",
        },
        {
          forma: "texto",
          texto:
            "En la mayoría de los estados de aquel país esa situación es sencillamente ilegal. La educación en casa está permitida con requisitos, y lo que hizo aquella familia funcionó porque nadie fue a comprobarlo en veinte años. Aquello funcionó porque nadie fue a comprobarlo en veinte años enteros.",
        },
        {
          forma: "texto",
          texto:
            "En este catálogo conversa de frente con Yo soy Malala. Las dos son chicas jóvenes cuya educación se convirtió en un conflicto, y la diferencia entre las dos historias es la que más enseña de las dos juntas. Dos chicas cuya educación se volvió un conflicto.",
        },
        {
          forma: "texto",
          texto:
            "También encaja con Fluir, que está en esta misma categoría. Csíkszentmihályi describía a personas capaces de convertir cualquier situación en un problema que resolver, y una adolescente aprendiendo trigonometría sola en una cocina es exactamente eso. Una adolescente aprendiendo trigonometría sola en una cocina es exactamente ese caso.",
        },
        {
          forma: "texto",
          texto:
            "Malala tuvo a su padre empujándola hacia la escuela contra un enemigo exterior. Tara tuvo el conflicto dentro de casa, con quienes la querían, y por eso su libro no puede terminar con una victoria ni con un discurso en Naciones Unidas. Su libro no puede terminar con una victoria.",
        },
        {
          forma: "texto",
          texto:
            "Esa diferencia también explica por qué los dos libros se leen distinto. Uno funciona como causa pública que se puede apoyar desde fuera, y el otro deja al lector sin nada que hacer salvo entender un poco mejor una familia concreta. Uno es una causa pública; el otro, una familia.",
        },
        {
          forma: "texto",
          texto:
            "El libro se publicó en 2018 y ha vendido varios millones de ejemplares.",
        },
        {
          forma: "texto",
          texto:
            "Estuvo más de dos años seguidos en las listas de más vendidos.",
        },
        {
          forma: "texto",
          texto:
            "Ella sigue sin hablarse con sus padres.",
        },
      ],
    },
  ],
};

export const NUDGE: Resumen = {
  id: "nudge",
  titulo: "Un pequeño empujón",
  autor: "Thaler y Sunstein",
  ano: 2008,
  gancho: "Retiró el cuenco de anacardos antes de cenar y sus invitados le dieron las gracias. Un economista no debería alegrarse de tener menos opciones.",
  porQue:
    "Cambió cómo diseñan políticas media docena de gobiernos, le dio un Nobel a su autor, y quince años después la mitad de sus pruebas están en discusión.",
  partes: [
    {
      titulo: "El cuenco de anacardos",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Una casa en Rochester, años setenta. Un profesor de economía ha invitado a cenar a unos colegas. Antes de sentarse a la mesa, saca un cuenco grande de anacardos. La gente empieza a comer y sigue comiendo, y va a llegar a la cena sin hambre.",
        },
        {
          forma: "texto",
          texto:
            "El anfitrión, Richard Thaler, coge el cuenco y lo lleva a la cocina. Cuando vuelve, sus invitados —todos economistas— le dan las gracias. Y entonces se dan cuenta, todos a la vez, de que acaban de agradecer que les quitaran una opción.",
        },
        {
          forma: "clave",
          rotulo: "Por qué eso es un problema",
          frase: "En la teoría económica estándar, tener más alternativas nunca puede empeorarte: si no querías los anacardos, no los comes. Que la gente agradezca perder una opción significa que el modelo está mal.",
        },
        {
          forma: "texto",
          texto:
            "De esa cena sale la carrera entera de Thaler. Se pasó treinta años recopilando situaciones en las que las personas hacen sistemáticamente lo contrario de lo que la teoría predice, y en 2017 le dieron el Nobel de Economía por haberlas convertido en una disciplina.",
        },
        {
          forma: "texto",
          texto:
            "El libro lo firma con Cass Sunstein, catedrático de Derecho en Harvard, que después dirigiría la oficina de regulación de la Casa Blanca con Obama. Uno pone la psicología económica y el otro la maquinaria legal. Es la combinación que explica que esto acabara en gobiernos.",
        },
        {
          forma: "texto",
          texto:
            "El punto de partida es la distinción entre dos criaturas. Están los econs, que son los seres que pueblan los modelos: calculan bien, tienen preferencias estables, no se dejan influir por cómo se les presenta una opción y siempre eligen lo que les conviene.",
        },
        {
          forma: "arte",
          texto:
            "Y están los humanos, que comen anacardos antes de cenar, no cambian de tarifa aunque salga más barato, no abren la carta del banco, se apuntan al gimnasio en enero y firman lo que sea si viene marcado por defecto. La economía llevaba un siglo legislando para los primeros.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Los autores toman de Kahneman la idea de dos sistemas de pensamiento. Ellos los llaman automático y reflexivo. El automático es rápido, intuitivo y no cuesta esfuerzo; el reflexivo es lento, deliberado y perezoso. Casi todas las decisiones del día las toma el primero.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí sale la lista de sesgos que el libro repasa. El anclaje: cualquier número que se te ponga delante contamina tu estimación posterior, aunque sea irrelevante. La disponibilidad: juzgas la probabilidad de algo por lo fácil que te resulta recordar un caso.",
        },
        {
          forma: "texto",
          texto:
            "El optimismo poco realista: alrededor del noventa por ciento de los conductores se considera mejor que la media. La aversión a la pérdida: perder cien euros duele aproximadamente el doble de lo que alegra ganarlos, y eso deforma toda decisión con riesgo.",
        },
        {
          forma: "clave",
          rotulo: "El sesgo que da nombre al libro",
          frase: "El statu quo. La gente se queda donde está por defecto, no porque lo prefiera, sino porque cambiar exige una decisión y decidir cuesta.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que usan es de los que se recuerdan: durante años, los planes de pensiones de empresa venían con una asignación por defecto, y los empleados podían cambiarla. Décadas después, la mayoría seguía exactamente en la opción que le habían puesto el primer día.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí nace el concepto central del libro, que es el que de verdad importa: la arquitectura de las decisiones. Alguien tiene que decidir en qué orden aparecen las opciones, cuál viene marcada, cómo se redacta el formulario. Esa persona es un arquitecto de decisiones.",
        },
        {
          forma: "texto",
          texto:
            "Y la afirmación que hace que todo lo demás se siga: no existe una presentación neutra. Un menú tiene que tener un orden. Un formulario tiene que tener una casilla por defecto o ninguna, y las dos cosas son decisiones. La neutralidad no está disponible.",
        },
        {
          forma: "arte",
          texto:
            "Ese es el mejor argumento del libro y el más difícil de rebatir. Quien se opone a los empujones suele proponer que se deje a la gente elegir libremente, sin darse cuenta de que el marco en el que elige ya lo ha diseñado alguien, y casi siempre sin pensarlo.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la etiqueta que los autores se ponen y que ha generado más discusión que ninguna otra cosa: paternalismo libertario. Paternalismo porque se orienta hacia lo que se considera mejor. Libertario porque no se prohíbe nada y salirse cuesta poco o nada.",
        },
        {
          forma: "texto",
          texto:
            "La definición técnica de empujón es estricta y conviene retenerla: cualquier cambio en la arquitectura de las decisiones que altere el comportamiento de forma predecible, sin prohibir ninguna opción y sin cambiar significativamente los incentivos económicos.",
        },
        {
          forma: "texto",
          texto:
            "Eso deja fuera muchas cosas que la gente llama empujón. Una multa no lo es, porque cambia los incentivos. Una prohibición no lo es. Un impuesto tampoco. Colocar la fruta a la altura de los ojos sí, porque las patatas fritas siguen ahí y siguen costando lo mismo.",
        },
        {
          forma: "texto",
          texto:
            "Los autores ponen además un límite ético que repiten varias veces: el principio de publicidad. Nunca se debe diseñar un empujón que no se pueda defender en público delante de los que lo van a recibir. Si hay que ocultarlo, no es un empujón: es una manipulación.",
        },
        {
          forma: "texto",
          texto:
            "Y para explicar todo esto, el libro recurre a un ejemplo que ha acabado siendo más famoso que el propio libro y que está grabado en la porcelana de un aeropuerto holandés.",
        },
      ],
    },

    {
      titulo: "La mosca del urinario",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Aeropuerto de Schiphol, Ámsterdam. Alguien del equipo de limpieza propone grabar una pequeña mosca negra en la porcelana de los urinarios masculinos, cerca del desagüe. No hay cartel, no hay instrucción, no hay multa. Solo un dibujo de un insecto.",
        },
        {
          forma: "texto",
          texto:
            "Los hombres apuntan a la mosca. Según las cifras que cita el libro, las salpicaduras fuera del urinario cayeron alrededor de un ochenta por ciento y los costes de limpieza bajaron sensiblemente. Nadie prohibió nada y nadie supo que estaba siendo dirigido.",
        },
        {
          forma: "clave",
          rotulo: "Por qué funciona",
          frase: "No apela a la conciencia, a la norma ni al bolsillo. Le da al sistema automático una diana, que es lo único que necesitaba para hacer bien una tarea que a nadie le importa.",
        },
        {
          forma: "texto",
          texto:
            "El segundo ejemplo del libro es un comedor escolar. Una directora de servicios de alimentación, a la que llaman Carolyn, descubre que reordenando la comida en la barra puede subir o bajar el consumo de casi cualquier plato en torno a un veinticinco por ciento.",
        },
        {
          forma: "texto",
          texto:
            "No cambia el menú, no sube precios, no quita nada. Solo mueve la fruta a la altura de los ojos y las patatas al final de la fila. Y entonces le llega la pregunta que estructura el capítulo: ¿qué es lo correcto que debería hacer con ese poder?",
        },
        {
          forma: "texto",
          texto:
            "Los autores enumeran sus opciones. Colocar la comida para maximizar la salud. Colocarla al azar. Colocarla como quisieran los niños si pensaran con calma. Colocarla para maximizar beneficios. Lo único que no puede hacer es no colocarla de ninguna manera.",
        },
        {
          forma: "arte",
          texto:
            "Ese es el argumento del cuchillo. Una vez que se entiende que la disposición influye, la inacción deja de ser neutral y pasa a ser una decisión más, tomada sin criterio. El libro no pide que se empuje: señala que ya se está empujando, casi siempre sin querer.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale un catálogo de herramientas que el libro ordena, y la primera y más potente de todas es la opción por defecto. Lo que viene marcado se queda marcado. Es el instrumento más barato, más eficaz y también el más discutible que existe.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es esperar el error. Diseñar sabiendo que la gente se va a equivocar: la tarjeta del cajero que hay que retirar antes de que salga el dinero, el tapón del depósito de gasolina atado al coche, el enchufe que solo entra de una manera.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es la retroalimentación. La gente no aprende de decisiones cuyo resultado no ve, y muchas decisiones importantes son así: nadie percibe el gasto de electricidad mientras lo gasta. Poner un contador visible cambia el consumo sin cambiar la tarifa.",
        },
        {
          forma: "clave",
          rotulo: "La cuarta herramienta",
          frase: "La norma social. Decirle a alguien lo que hace la mayoría de la gente parecida a él es uno de los mensajes más eficaces que existen, y también uno de los que más fácil sale al revés.",
        },
        {
          forma: "texto",
          texto:
            "El libro cuenta el experimento que lo demuestra en las dos direcciones. Se informó a hogares de cuánta electricidad consumían comparados con sus vecinos. Los que gastaban mucho bajaron. Y los que gastaban poco subieron, porque descubrieron que tenían margen.",
        },
        {
          forma: "texto",
          texto:
            "La solución que encontraron es de una simpleza casi cómica: añadir una carita sonriente al mensaje de los que consumían poco. Con eso, el efecto rebote desapareció. Un emoticono impreso en una factura sostuvo un ahorro de energía a escala de miles de hogares.",
        },
        {
          forma: "texto",
          texto:
            "También está el efecto contrario, el que los autores llaman contraproducente. Las campañas que dicen que mucha gente hace algo mal —evade impuestos, tira basura, no vota— comunican sin querer que eso es lo normal, y normalizan exactamente lo que querían combatir.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que dan es de un parque nacional americano con un cartel que avisaba de que muchos visitantes se llevaban madera petrificada. Al cambiarlo por un mensaje que señalaba a los pocos que lo hacían como una excepción, los robos bajaron notablemente.",
        },
        {
          forma: "arte",
          texto:
            "De ahí sale la regla práctica más aprovechable del libro: si quieres que la gente haga algo, cuéntale que la mayoría ya lo hace, siempre que sea verdad. Y si es falso, no lo digas, porque decir que casi nadie lo hace es garantizar que siga sin hacerlo.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El libro añade una herramienta más, pensada para decisiones complejas: la simplificación de la información. Sostiene que la mayoría de la letra pequeña no informa a nadie, y propone obligar a que los datos clave se publiquen en formatos comparables y legibles por máquinas.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo son las tarifas de móvil y de tarjetas de crédito. Nadie compara veinte contratos de treinta páginas. Todo el mundo compararía si existiera un fichero estándar que un comparador pudiera leer. Eso no prohíbe nada y cambia la competencia entera de un sector.",
        },
        {
          forma: "texto",
          texto:
            "Con el catálogo montado, la segunda mitad del libro lo aplica a tres terrenos concretos: el ahorro para la jubilación, la sanidad y el medio ambiente. Y el primero es donde el efecto medido es más grande y menos discutido de todos.",
        },
        {
          forma: "texto",
          texto:
            "Porque hay un problema con el ahorro que ningún incentivo resuelve: la gente sabe perfectamente que debería ahorrar más, quiere ahorrar más, y no lo hace. No es un problema de información ni de convicción. Es un problema de que hoy siempre gana a mañana.",
        },
      ],
    },

    {
      titulo: "Ahorra más mañana",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Estados Unidos, finales de los noventa. Thaler y el economista Shlomo Benartzi diseñan un programa para una empresa mediana cuyos empleados ahorraban poco. La idea es tan sencilla que cuesta creer que funcione: pedirles que se comprometan a ahorrar más, pero en el futuro.",
        },
        {
          forma: "texto",
          texto:
            "El acuerdo consiste en que cada vez que el trabajador reciba una subida de sueldo, una parte de ese incremento irá automáticamente al plan de pensiones. No baja su nómina actual ni un céntimo. Simplemente decide hoy cómo repartir un dinero que aún no tiene.",
        },
        {
          forma: "clave",
          rotulo: "Ahorra más mañana",
          frase: "Explota tres sesgos a la vez y a favor: es fácil comprometerse con el futuro, no se percibe como pérdida porque la nómina nunca baja, y hay que dar un paso activo para salirse.",
        },
        {
          forma: "texto",
          texto:
            "Los resultados que reporta el libro son de los más citados de la economía del comportamiento: entre los empleados que se apuntaron, la tasa de ahorro se multiplicó a lo largo de varios aumentos de sueldo, y la mayoría siguió en el programa años después.",
        },
        {
          forma: "texto",
          texto:
            "El otro caso es todavía más simple y ha tenido más impacto legislativo. En los planes de pensiones de empresa americanos, cambiar la inscripción de voluntaria a automática —con derecho a salirse en cualquier momento— dispara la participación de en torno a la mitad a más del noventa por ciento.",
        },
        {
          forma: "texto",
          texto:
            "Ni un euro de incentivo. Nadie obligado. La misma decisión y las mismas opciones, con la casilla marcada del otro lado. Ese dato es el más sólido del libro y el que llevó a que la ley americana de pensiones de 2006 fomentara explícitamente la inscripción automática.",
        },
        {
          forma: "arte",
          texto:
            "Es también el mejor argumento contra quien diga que los empujones son irrelevantes. Un cambio en la casilla por defecto de un formulario movió el comportamiento de ahorro de millones de personas más que décadas de campañas de educación financiera.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El caso de la donación de órganos es el más famoso y también el peor entendido. Los datos que citan son espectaculares: países con consentimiento presunto rondan tasas de consentimiento del noventa y muchos por ciento; países con consentimiento expreso se quedan en cifras de un dígito o poco más.",
        },
        {
          forma: "texto",
          texto:
            "Alemania y Austria son el ejemplo de manual: dos países vecinos, culturalmente próximos, con tasas separadas por decenas de puntos. La única diferencia relevante es qué pasa si no rellenas el formulario.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, la parte que casi nadie cita: Thaler y Sunstein no defienden el consentimiento presunto. Lo consideran demasiado agresivo, porque presume la voluntad de alguien que quizá nunca se enteró. Lo que proponen es otra cosa, la elección obligatoria.",
        },
        {
          forma: "clave",
          rotulo: "Elección obligatoria",
          frase: "Al renovar el carné de conducir hay que marcar sí o no, sin defecto y sin poder saltarse la pregunta. Se preserva la decisión y se elimina la inercia. Illinois lo aplicó con tasas muy altas.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un matiz importantísimo que el libro sí menciona y que la divulgación posterior perdió: las tasas de consentimiento no son tasas de donación efectiva. España lleva décadas siendo líder mundial en trasplantes y no es por la ley, que es de consentimiento presunto como en muchos sitios.",
        },
        {
          forma: "texto",
          texto:
            "Es por un sistema de coordinadores de trasplante en cada hospital, formación específica, logística y conversación con las familias. La ley por sí sola no mueve la aguja. El empujón funcionó en el papel y lo que salva vidas es la infraestructura detrás.",
        },
        {
          forma: "texto",
          texto:
            "En sanidad, el libro analiza el programa americano de medicamentos para mayores, que ofrecía decenas de planes distintos con coberturas difíciles de comparar. Concluye que dar cuarenta opciones a un jubilado de ochenta años no es libertad de elección: es abandono con buena prensa.",
        },
        {
          forma: "texto",
          texto:
            "Su propuesta es la de siempre: no reducir las opciones, sino poner un defecto razonable y publicar los datos en formato comparable para que aparezcan comparadores. Es un patrón que se repite en todo el libro y que ha sido su exportación más duradera.",
        },
        {
          forma: "arte",
          texto:
            "Los autores también dedican espacio a lo que llaman empujones malos, y el término que se ha popularizado después es sludge: fricción deliberada para que no hagas algo. Suscribirse en dos clics y darse de baja con una llamada telefónica en horario de oficina.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Ese concepto ha resultado más útil que muchos empujones positivos, porque describe una práctica masiva y perfectamente medible: todo el diseño de las suscripciones, las cookies, los seguros y los reembolsos está lleno de fricción puesta a propósito.",
        },
        {
          forma: "texto",
          texto:
            "Thaler ha insistido mucho en esto en los últimos años, hasta el punto de decir que combatir el sludge probablemente rinda más que diseñar empujones nuevos, porque quitar obstáculos no plantea ninguno de los problemas éticos que plantea dirigir.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 2008, justo cuando estallaba la crisis financiera, y su recorrido posterior fue vertiginoso. En dos años, dos gobiernos importantes habían montado equipos oficiales para aplicar estas ideas a la administración pública.",
        },
        {
          forma: "texto",
          texto:
            "Uno de ellos empezó siendo siete personas en un despacho pequeño de Downing Street, con un plazo de dos años para justificar su existencia o cerrar. Se le conoció enseguida por un apodo que sus fundadores nunca eligieron.",
        },
      ],
    },

    {
      titulo: "La unidad de empujones",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Londres, 2010. El gobierno británico crea un equipo llamado Behavioural Insights Team, con siete personas, dentro de la oficina del primer ministro. La prensa lo bautiza inmediatamente como la unidad de empujones, y el nombre se queda para siempre.",
        },
        {
          forma: "texto",
          texto:
            "Se le pone una condición dura: en dos años tiene que demostrar un ahorro de al menos diez veces su coste o se disuelve. Y una regla de método que es lo que de verdad lo hizo distinto: todo se prueba con experimentos controlados y aleatorizados antes de generalizarlo.",
        },
        {
          forma: "clave",
          rotulo: "Cartas de Hacienda",
          frase: "Añadir una frase a las cartas de reclamación —que la gran mayoría de los contribuyentes de su zona ya había pagado a tiempo— aumentó de forma medible los pagos. Coste del cambio: cero.",
        },
        {
          forma: "texto",
          texto:
            "Ese experimento es el que se cita siempre porque tiene las tres propiedades que buscaba el equipo: efecto claro, coste nulo y verificable con un ensayo real de decenas de miles de cartas divididas al azar en grupos con distintos textos.",
        },
        {
          forma: "texto",
          texto:
            "Hicieron muchos más. Cambiar el formulario de un programa de empleo para que el desempleado escribiera lo que iba a hacer la semana siguiente en lugar de lo que había hecho la anterior. Mandar mensajes de texto recordando multas antes de que fueran a ejecución.",
        },
        {
          forma: "texto",
          texto:
            "La unidad sobrevivió, se convirtió en una empresa semipública en 2014 y hoy trabaja en decenas de países. Estados Unidos creó su propio equipo en 2015, y organismos como la OCDE y el Banco Mundial montaron los suyos. En una década pasó de idea de libro a práctica administrativa.",
        },
        {
          forma: "arte",
          texto:
            "Su aportación más valiosa quizá no sea ningún empujón concreto sino el método: obligar a la administración pública a probar sus propias políticas con grupos de control, en vez de aprobarlas porque suenan razonables. Eso vale igual aunque el empujón no funcione.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Thaler ganó el Nobel en 2017. En la rueda de prensa le preguntaron qué iba a hacer con el dinero del premio y contestó que intentaría gastarlo de la forma más irracional posible. Es la mejor broma que ha hecho un premiado, y también un resumen de su obra.",
        },
        {
          forma: "texto",
          texto:
            "Firma sus libros con una fórmula fija: empujar para bien. Y ha declarado varias veces que su mayor preocupación es que las mismas técnicas se usen en la dirección contraria, que es exactamente lo que ha ocurrido en la economía digital.",
        },
        {
          forma: "texto",
          texto:
            "Porque el sector que mejor ha aprendido esta literatura no es el público: es el de las aplicaciones. Cuentas atrás falsas, casillas premarcadas, botones de cancelar en gris claro, avisos de que quedan dos habitaciones. Todo eso son empujones ejecutados con precisión industrial.",
        },
        {
          forma: "clave",
          rotulo: "La objeción de la manipulación",
          frase: "Si un empujón funciona porque no te das cuenta, ¿en qué sentido has elegido? Los autores contestan con el principio de publicidad, y esa respuesta convence solo a medias.",
        },
        {
          forma: "texto",
          texto:
            "La crítica más elaborada vino de filósofos y de juristas: que el paternalismo libertario asume que existe una versión mejor informada de ti a la que el arquitecto tiene acceso, y que en la práctica ese arquitecto es un funcionario o una empresa con intereses propios.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una objeción política que ha ganado fuerza con los años: los empujones son baratos, y por eso resultan tentadores como sustituto de políticas caras. Es más cómodo empujar a la gente a ahorrar que subir los salarios o mejorar las pensiones públicas.",
        },
        {
          forma: "texto",
          texto:
            "Los propios autores han aceptado parte de esa crítica. Sunstein ha escrito que los empujones no son un sustituto de la regulación cuando hay un daño claro, y que nadie debería proponer una campaña de concienciación frente a un vertido tóxico.",
        },
        {
          forma: "texto",
          texto:
            "Y hay otra limitación técnica que se ha hecho evidente con el tiempo: los efectos suelen ser pequeños. Un empujón bueno mueve unos pocos puntos porcentuales. Eso es enorme cuando se aplica a millones de cartas y es irrelevante para un problema que requiere un cambio de escala.",
        },
        {
          forma: "arte",
          texto:
            "El propio Thaler ha dicho que si tuviera que quedarse con un consejo sería el más aburrido de todos: si quieres que la gente haga algo, hazlo fácil. No inspirador, no persuasivo. Fácil. Quitar un paso de un formulario rinde más que la mejor campaña.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Ese consejo, además, ha resistido todo lo que vino después. Porque a partir de 2015 la economía del comportamiento entró en una crisis que ha afectado a buena parte de sus resultados publicados, y que obliga a releer este libro con una lista de excepciones en la mano.",
        },
        {
          forma: "texto",
          texto:
            "La crisis empezó en psicología social, con un proyecto que intentó repetir cien experimentos famosos y consiguió reproducir menos de la mitad. Y de ahí se extendió a los campos vecinos, entre ellos varios de los que sostienen los capítulos de este libro.",
        },
        {
          forma: "texto",
          texto:
            "Hay que decirlo con precisión, porque la reacción fácil es tirarlo todo y es tan equivocada como creérselo todo. Algunos resultados han aguantado perfectamente. Otros se han desinflado. Y en un par de casos ocurrió algo mucho peor que un experimento que no se repite.",
        },
        {
          forma: "texto",
          texto:
            "En 2021, unos investigadores independientes se sentaron a revisar los datos brutos de un estudio muy famoso sobre honestidad, publicado en 2012, y encontraron algo que no se puede explicar con estadística ni con azar.",
        },
      ],
    },

    {
      titulo: "La crisis de replicación",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Agosto de 2021. Un blog de investigadores especializados en detectar fraude publica un análisis de los datos de un estudio de 2012 sobre honestidad. El experimento decía que firmar una declaración al principio de un formulario, en lugar de al final, reducía las mentiras.",
        },
        {
          forma: "texto",
          texto:
            "Los datos venían de una aseguradora real y de miles de clientes declarando su kilometraje. Al examinarlos, los analistas encontraron señales inequívocas de fabricación: una distribución imposible, kilómetros generados con una función aleatoria y duplicados con dos tipografías distintas.",
        },
        {
          forma: "clave",
          rotulo: "La ironía",
          frase: "El estudio más famoso sobre cómo conseguir que la gente sea honesta contenía datos inventados. Se retractó en 2021 y sigue sin saberse quién los fabricó.",
        },
        {
          forma: "texto",
          texto:
            "Dos de los coautores del artículo, ambos figuras de primera línea de la economía del comportamiento, quedaron bajo sospecha en investigaciones separadas por otros trabajos. Uno de ellos fue apartado por su universidad tras una investigación interna sobre varios estudios.",
        },
        {
          forma: "texto",
          texto:
            "Conviene aclarar que Thaler y Sunstein no están implicados en nada de eso. Pero el episodio golpeó la credibilidad del campo entero, porque durante quince años los libros de divulgación —este incluido— habían presentado ese tipo de resultados como hechos establecidos.",
        },
        {
          forma: "texto",
          texto:
            "La segunda parte de la crisis es más técnica y más importante. En 2022 se publicó un metaanálisis que reunía cientos de estudios de empujones y concluía que el efecto medio era pequeño pero real y aprovechable. Fue muy citado como la confirmación definitiva.",
        },
        {
          forma: "arte",
          texto:
            "Meses después, otro equipo reanalizó exactamente los mismos datos aplicando correcciones por sesgo de publicación —el hecho de que los estudios con resultado nulo casi nunca se publican— y encontró que el efecto agregado se volvía indistinguible de cero.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Eso no significa que los empujones no funcionen nunca. Significa que la literatura publicada está contaminada, que hay muchos experimentos fallidos que nunca vieron la luz, y que no se puede saber el tamaño real del efecto medio a partir de lo que hay publicado.",
        },
        {
          forma: "texto",
          texto:
            "Los que sí han aguantado son, casualmente, los menos ingeniosos. La inscripción automática en planes de pensiones tiene efectos enormes y replicados en muchos países. Los recordatorios por mensaje funcionan. Quitar pasos de un trámite funciona. Los defectos funcionan.",
        },
        {
          forma: "texto",
          texto:
            "Los que se han desinflado son los brillantes: los que dependen de un mensaje inteligente, de un encuadre sutil o de activar una emoción concreta. Justo los que quedan mejor en una charla y peor en una réplica independiente con muestra grande.",
        },
        {
          forma: "clave",
          rotulo: "La regla que queda",
          frase: "Cambiar la estructura funciona. Cambiar el mensaje funciona mucho menos de lo que se dijo. Lo primero es aburrido y sólido; lo segundo es vistoso y frágil.",
        },
        {
          forma: "texto",
          texto:
            "Los autores publicaron en 2021 una edición revisada, subtitulada la edición final, en la que recogen parte de estas críticas, retiran algún ejemplo, matizan otros y añaden capítulos sobre el sludge y sobre el cambio climático. No es un mea culpa, pero es un ajuste sincero.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla el libro más allá de la replicación. La primera cosa es de estilo: la segunda mitad está muy centrada en instituciones estadounidenses —planes de pensiones, seguros médicos, hipotecas— y para un lector europeo buena parte de esos capítulos son opacos.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es que confía demasiado en el arquitecto. El libro asume implícitamente un diseñador bienintencionado, y dedica poquísimas páginas a lo que ocurre cuando el que diseña la arquitectura de decisiones es alguien que gana dinero con que tú te equivoques.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es la que más ha pesado políticamente: al presentar los problemas como fallos de decisión individual, se corre el riesgo de convertir cuestiones estructurales en cuestiones de diseño de formularios. Que la gente no ahorre puede ser un sesgo o puede ser el sueldo.",
        },
        {
          forma: "arte",
          texto:
            "Y una cuarta, de fondo: la propia idea de empujar hacia lo que la gente elegiría si pensara mejor supone que existe una preferencia verdadera detrás de la equivocada. En muchos casos eso es cuestionable, y el libro lo despacha en un par de párrafos.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad. Primero: un empujón no es cualquier técnica para influir. Si prohíbe, si multa o si cambia el precio, no es un empujón. Casi todo lo que se llama nudge en los medios queda fuera de la definición de los autores.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: el libro no defiende el consentimiento presunto para la donación de órganos. Defiende la elección obligatoria, que es lo contrario de un defecto. Es probablemente el malentendido más repetido de todos y aparece en la mitad de los artículos que lo citan.",
        },
        {
          forma: "texto",
          texto:
            "Y tercero, el que más pena da: la mosca del urinario no es el hallazgo del libro, es su anécdota. Lo importante son las casillas por defecto en los planes de pensiones, que han movido miles de millones y que no salen en ninguna charla porque no tienen gracia.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda en pie es la idea del principio, y es la que no depende de ningún experimento. Alguien tiene que decidir en qué orden aparecen las cosas. Eso no se puede evitar. La única elección real es si se decide pensando o se decide sin pensar.",
        },
      ],
    },
  ],
};

export const ARTE_DE_AMAR: Resumen = {
  id: "arte-de-amar",
  titulo: "El arte de amar",
  autor: "Erich Fromm",
  ano: 1956,
  gancho: "Ciento treinta páginas escritas en unos meses que han vendido más de veinticinco millones de ejemplares, y de las que su autor llegó a decir que se sentía casi avergonzado.",
  porQue:
    "Porque su tesis —que amar es una capacidad que se aprende y no una suerte que ocurre— sigue siendo la más útil que se ha escrito sobre el asunto, y porque el capítulo sobre madres y padres envejeció fatal.",
  partes: [
    {
      titulo: "La chica que quiso ser enterrada con su padre",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Fráncfort, hacia 1912. Un niño de doce años, hijo único de una familia judía practicante, conoce a una amiga de la casa: una pintora de veinticinco años, guapa y con talento, que vive con su padre viudo y que él encuentra fascinante y algo incomprensible.",
        },
        {
          forma: "texto",
          texto:
            "El padre de la joven muere de repente. Pocos días después, ella se quita la vida y deja escrito que quiere que la entierren junto a él. El niño oye la noticia en su casa y no consigue entenderla de ninguna manera.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta que se le quedó",
          frase: "Cómo es posible que alguien joven, con talento y con la vida entera por delante, prefiera morir antes que seguir sin su padre. Contó muchas veces que aquella pregunta, hecha a los doce años, es el origen de todo lo que escribió después.",
        },
        {
          forma: "texto",
          texto:
            "El niño era Erich Fromm, nacido en Fráncfort en 1900. Describió a su padre como un comerciante de vino ansioso y de humor cambiante, y a su madre como una mujer con tendencia a la melancolía, y dijo que se crio en una casa profundamente rara.",
        },
        {
          forma: "texto",
          texto:
            "La segunda cosa que lo marcó fue la guerra. Tenía catorce años cuando empezó la Primera Guerra Mundial y vio cómo profesores y adultos razonables se volvían fanáticos de un día para otro, convencidos de que los ingleses eran monstruos.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale su otra pregunta permanente, la que ocupa la mitad de su obra: cómo es posible que millones de personas normales adopten a la vez una locura colectiva, y qué es lo que en una sociedad las empuja a ello.",
        },
        {
          forma: "arte",
          texto:
            "Esas dos preguntas —por qué alguien se destruye por amor y por qué una sociedad entera enloquece— son las dos mitades de su trabajo. Estudió sociología en Heidelberg, se doctoró a los veintidós años y después se formó como psicoanalista, buscando respuesta a las dos a la vez.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "En los años treinta trabajó en el Instituto de Investigación Social de Fráncfort, la llamada Escuela de Fráncfort, junto a Adorno, Horkheimer y Marcuse, un grupo que intentaba combinar el análisis marxista de la sociedad con el psicoanálisis de Freud.",
        },
        {
          forma: "texto",
          texto:
            "En 1934, siendo judío y estando el nazismo en el poder, se marchó a Estados Unidos, donde vivió el resto de su vida académica, primero en Nueva York y después en México, donde fundó una escuela de psicoanálisis.",
        },
        {
          forma: "texto",
          texto:
            "Su ruptura con sus antiguos compañeros fue dura. Fromm rechazó dos piezas centrales de Freud: la teoría de la libido, que explica la conducta por la energía sexual, y la pulsión de muerte. Para él, lo decisivo no era la biología sino las condiciones sociales.",
        },
        {
          forma: "clave",
          rotulo: "Su desacuerdo con Freud",
          frase: "Freud pensaba que la sociedad reprime instintos que existirían igual sin ella. Fromm sostenía que la sociedad no reprime a un individuo dado: lo fabrica. Que el carácter de una persona se forma con lo que su época necesita que sea, y que ahí está la clave.",
        },
        {
          forma: "texto",
          texto:
            "Los freudianos ortodoxos lo llamaron revisionista, que en aquel contexto era un insulto, y Marcuse le dedicó páginas muy duras acusándolo de haber convertido el psicoanálisis en una moral de adaptación y de conformismo.",
        },
        {
          forma: "texto",
          texto:
            "Su primer libro importante, El miedo a la libertad, de 1941, es el que sigue teniendo más prestigio académico. Sostiene que la libertad moderna liberó al individuo de las ataduras antiguas y lo dejó a la intemperie, y que mucha gente prefiere entregarla a cambio de seguridad.",
        },
        {
          forma: "texto",
          texto:
            "Escrito en 1941, sobre por qué millones de alemanes se entregaron voluntariamente a un régimen que los mandaba a morir, es un libro que se sigue citando cada vez que un movimiento autoritario crece en algún sitio.",
        },
        {
          forma: "arte",
          texto:
            "El arte de amar es de quince años después y es un libro completamente distinto: corto, sin aparato académico, sin notas, escrito en un tono directo y pensado para cualquier lector. Fromm lo consideraba menor y es el único suyo que casi todo el mundo conoce.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Ha vendido más de veinticinco millones de ejemplares, está traducido a más de cincuenta idiomas y lleva desde 1956 sin dejar de reeditarse en ningún país. Es, con diferencia, el libro sobre el amor más vendido del siglo veinte.",
        },
        {
          forma: "texto",
          texto:
            "Su éxito tiene una explicación de contexto que conviene tener presente. Salió en la América de los años cincuenta, en pleno auge del matrimonio temprano, los suburbios y la familia de anuncio, y fue de los primeros libros que le dijo a ese público que aquello podía estar vacío por dentro.",
        },
        {
          forma: "texto",
          texto:
            "Y lo dijo sin la jerga del psicoanálisis, que hasta entonces era el único vocabulario disponible para hablar de estas cosas. Fromm escribió sobre la vida sentimental de la gente corriente en un lenguaje que la gente corriente podía leer, y eso en 1956 casi no lo hacía nadie.",
        },
        {
          forma: "texto",
          texto:
            "En España llegó bastante después, con la editorial Paidós, y se convirtió en uno de esos libros que circulan de mano en mano entre estudiantes universitarios durante décadas. Es probable que esté en la estantería de alguien de tu familia sin que nadie recuerde quién lo compró.",
        },
        {
          forma: "texto",
          texto:
            "Y empieza con una advertencia al lector en la primera página, que es también la mejor manera de saber si este libro es para uno o no lo es.",
        },
        {
          forma: "texto",
          texto:
            "Dice que quien espere instrucciones fáciles para ser amado va a quedar decepcionado.",
        },
        {
          forma: "texto",
          texto:
            "Que amar es un arte, como la música o la medicina.",
        },
        {
          forma: "texto",
          texto:
            "Y que un arte exige teoría, práctica diaria y que sea lo más importante de tu vida.",
        },
      ],
    },

    {
      titulo: "El problema no es encontrar a alguien",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su diagnóstico de partida es que casi todo el mundo se plantea el amor de una manera equivocada, y lo formula en tres errores concretos que se pueden reconocer en cualquier conversación de sobremesa sobre relaciones.",
        },
        {
          forma: "texto",
          texto:
            "El primero es pensar que el problema es ser amado y no amar. La gente se pregunta cómo resultar más atractiva, cómo caer mejor, cómo conseguir que alguien se enamore. Casi nadie se pregunta si tiene la capacidad de querer a otro.",
        },
        {
          forma: "texto",
          texto:
            "El segundo es pensar que el problema es de objeto y no de facultad. Es decir: creer que amar es fácil y que lo difícil es encontrar a la persona adecuada. Con esa premisa, cuando algo va mal la conclusión siempre es que no era la persona.",
        },
        {
          forma: "clave",
          rotulo: "El tercer error",
          frase: "Confundir la experiencia inicial de enamorarse con el estado permanente de amar. Fromm distingue el momento en que dos desconocidos derriban de golpe la pared que los separa —que es intenso y milagroso— del trabajo largo de sostener eso, que no se parece en nada.",
        },
        {
          forma: "texto",
          texto:
            "Su observación sobre eso es dura: cuanto más solos estaban los dos antes, más milagroso les parece ese momento, y más probable es que confundan la intensidad del alivio con la profundidad del vínculo.",
        },
        {
          forma: "texto",
          texto:
            "A partir de ahí introduce su análisis social, que es la parte más marcada por su época y a la vez la que más gente reconoce. Sostiene que en una sociedad de mercado, la gente aplica al amor la lógica del mercado sin darse cuenta.",
        },
        {
          forma: "arte",
          texto:
            "Su formulación es que dos personas se enamoran cuando sienten que han encontrado el mejor objeto disponible en el mercado teniendo en cuenta el valor de cambio de cada una. Se busca una ganga: alguien un poco por encima de lo que uno cree merecer.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Escrito en 1956, con las relaciones organizadas por barrio, clase y presentaciones familiares. Con aplicaciones que muestran perfiles ordenados, con filtros de altura, ingresos y edad, esa frase describe el mecanismo con una literalidad que Fromm no podía imaginar.",
        },
        {
          forma: "texto",
          texto:
            "Su segundo diagnóstico social es el del matrimonio como equipo bien avenido. Describe parejas que funcionan como una sociedad con reparto de tareas, cordialidad permanente y ausencia de conflicto, y sostiene que eso suele ser el nombre elegante de dos soledades ordenadas.",
        },
        {
          forma: "texto",
          texto:
            "Y hace una observación sobre el trato justo que sigue siendo incómoda: que la idea de dar lo mismo que se recibe, aplicada al amor, es una regla comercial, y que quien lleva la cuenta de lo que aporta cada uno está haciendo contabilidad, no queriendo.",
        },
        {
          forma: "clave",
          rotulo: "El fondo del libro",
          frase: "Para Fromm, el problema humano fundamental es la separación. Somos conscientes de estar separados de los demás y de la naturaleza, sabemos que vamos a morir, y esa conciencia produce una angustia de la que hay que hacer algo. El amor es su única solución completa.",
        },
        {
          forma: "texto",
          texto:
            "Antes de llegar ahí repasa las salidas que él considera fallidas, y ese repaso es de lo mejor del libro porque describe cosas que cualquiera ha hecho alguna vez para no estar solo consigo mismo.",
        },
        {
          forma: "texto",
          texto:
            "La primera son los estados de trance: el alcohol, las drogas, el sexo compulsivo, las experiencias de descontrol colectivo. Funcionan porque disuelven la conciencia de estar separado, y fallan porque duran poco, hay que repetirlos y dejan a la persona peor que antes.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la conformidad con el grupo: vestirse igual, opinar igual, querer lo mismo que todo el mundo. Elimina la angustia de estar solo al precio de eliminar a la persona, y Fromm sostiene que es la salida mayoritaria en las sociedades modernas.",
        },
        {
          forma: "arte",
          texto:
            "La tercera es el trabajo creativo, que sí une a alguien con el mundo mientras dura, y que no une con otra persona. El carpintero está unido a su madera y el escritor a su texto, y los dos siguen igual de solos frente a otro ser humano.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "La única salida completa, dice, es la unión con otra persona conservándose uno mismo. Y esa condición, la de no disolverse, es lo que separa el amor de la dependencia y lo que hace que sea difícil.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la fórmula más citada del libro: que en el amor maduro dos seres se convierten en uno y siguen siendo dos. Suena a frase de felicitación y en el contexto significa algo bastante exigente.",
        },
        {
          forma: "texto",
          texto:
            "Significa que si la relación exige que alguien deje de tener opiniones, amigos o proyectos propios, eso no es una versión intensa del amor.",
        },
        {
          forma: "texto",
          texto:
            "Fromm describe dos maneras concretas de fallar en esa condición, y las dos tienen nombre en el libro. La primera es la sumisión: la persona que resuelve su angustia de estar sola convirtiéndose en parte de otra, adoptando sus opiniones, sus horarios y sus amistades.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la dominación: la persona que resuelve la misma angustia absorbiendo a otra, decidiendo por ella y necesitando que dependa. Y su observación es que las dos se necesitan mutuamente, que se buscan con precisión y que desde fuera parecen una pareja muy unida.",
        },
        {
          forma: "texto",
          texto:
            "Lo importante de ese análisis es que las dos posiciones son la misma cosa: dos maneras de no soportar la propia soledad. Ninguno de los dos está queriendo al otro; los dos están usando al otro para no tener que estar consigo mismos.",
        },
        {
          forma: "texto",
          texto:
            "Es una de las formas de fusión que él considera fracasos, y les dedica un capítulo entero.",
        },
        {
          forma: "texto",
          texto:
            "Y con el diagnóstico hecho, pasa a decir de qué está compuesto exactamente lo que él llama amor.",
        },
        {
          forma: "texto",
          texto:
            "Son cuatro cosas, y ninguna es un sentimiento.",
        },
      ],
    },

    {
      titulo: "Cuidado, responsabilidad, respeto, conocimiento",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El primer elemento es el cuidado, y Fromm lo define con un ejemplo doméstico: si una mujer dice que adora las flores y uno ve que se le mueren todas por no regarlas, no le creemos. El amor es una preocupación activa por la vida de lo que se ama.",
        },
        {
          forma: "texto",
          texto:
            "El criterio es sencillo y sirve para juzgar cualquier relación: no se mide por lo que alguien siente ni por lo que dice, sino por lo que hace con su tiempo y su atención cuando eso le cuesta algo.",
        },
        {
          forma: "texto",
          texto:
            "El segundo es la responsabilidad, y aquí hace una distinción que importa mucho. No la entiende como una obligación impuesta desde fuera, sino como la capacidad de responder: estar disponible cuando el otro necesita algo, sin que haya que pedírselo por escrito.",
        },
        {
          forma: "clave",
          rotulo: "El tercero, el que corrige a los otros dos",
          frase: "El respeto, que viene del latín respicere, mirar. Es la capacidad de ver a la otra persona tal como es y no como me conviene que sea. Sin respeto, dice, el cuidado y la responsabilidad degeneran en control, y el que controla siempre dice que lo hace por amor.",
        },
        {
          forma: "texto",
          texto:
            "Esa frase es de 1956 y describe con precisión lo que hoy se llamaría control en la pareja: una persona que vigila, decide y limita, y que tiene la convicción sincera de estar cuidando. Fromm identifica el mecanismo sin nombrarlo así.",
        },
        {
          forma: "texto",
          texto:
            "El cuarto elemento es el conocimiento, y no se refiere a saber datos del otro. Se refiere a conocerlo desde dentro, a entender por qué hace lo que hace, y sobre todo a saber ver la tristeza o el miedo que hay debajo de un enfado.",
        },
        {
          forma: "arte",
          texto:
            "Los cuatro se sostienen entre sí y ninguno funciona solo. Cuidar sin conocer produce ayuda que no sirve. Respetar sin cuidar es indiferencia educada. Y conocer sin responsabilidad es lo que hace un buen observador, que puede describir a alguien perfectamente y no mover un dedo por él.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Con esos cuatro elementos analiza después los distintos tipos de amor, y ahí es donde el libro se vuelve desigual: algunas partes siguen siendo excelentes y otras están claramente escritas en 1956 y se nota en cada línea.",
        },
        {
          forma: "texto",
          texto:
            "El amor fraternal es para él la base de todos los demás: el sentido de responsabilidad hacia cualquier ser humano por el hecho de serlo. Y sostiene que solo se aprende de verdad queriendo a quien no sirve para nada, porque querer al útil es una transacción.",
        },
        {
          forma: "texto",
          texto:
            "El amor materno lo describe como el único incondicional: no hay que ganárselo, no depende de portarse bien, y su tarea más difícil es exactamente la contraria de la que parece, porque consiste en soltar.",
        },
        {
          forma: "clave",
          rotulo: "Su idea sobre la maternidad",
          frase: "Que el amor de una madre es el único cuyo objetivo declarado es volverse innecesario. Una madre que lo consigue tiene un hijo que se va, y una que no lo consigue tiene un hijo que se queda. Y la segunda opción no es más amorosa que la primera.",
        },
        {
          forma: "texto",
          texto:
            "El amor paterno lo describe como lo opuesto: condicional, ligado al mérito, al esfuerzo y a los logros, y con la ventaja de que se puede conquistar y la desventaja de que se puede perder.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí hay que parar, porque esta es la parte del libro que peor ha envejecido. Fromm no describe dos funciones que cualquier adulto puede ejercer: las atribuye a la madre y al padre, y las liga a la naturaleza de cada uno.",
        },
        {
          forma: "arte",
          texto:
            "Habla de la madre como la tierra, la leche y la miel, y del padre como la ley, el pensamiento y la disciplina. Está tomando el reparto de roles de la clase media alemana y americana de su época y presentándolo como una estructura humana permanente.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Eso hoy es insostenible. Hay padres que ejercen lo que él llama amor materno y madres que ejercen lo que llama paterno, y hay familias con dos madres, con un padre solo o con abuelos criando, y ninguna de ellas encaja en el esquema.",
        },
        {
          forma: "texto",
          texto:
            "Lo salvable de ese capítulo es la distinción entre dos tipos de amor —el que no hay que ganarse y el que se conquista— y la idea de que un adulto necesita haber recibido los dos y acabar dándose los dos a sí mismo.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un segundo punto del libro que hoy es directamente erróneo y conviene decirlo sin rodeos: sus comentarios sobre la homosexualidad, que trata según la ortodoxia psicoanalítica de su época, como una unión que no alcanza la polaridad.",
        },
        {
          forma: "texto",
          texto:
            "Es falso, era la posición dominante en la psiquiatría de 1956 y dejó de serlo oficialmente en 1973. No invalida el resto del libro y sí obliga a leer esas páginas concretas como lo que son: un prejuicio de época puesto por escrito.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo que sí ha aguantado entero es el del amor a uno mismo, y es probablemente el más útil de todo el libro.",
        },
        {
          forma: "texto",
          texto:
            "Porque desmonta una idea que sigue circulando: que quererse a uno mismo y ser egoísta son la misma cosa en distinto grado.",
        },
        {
          forma: "texto",
          texto:
            "Fromm sostiene que son exactamente lo contrario.",
        },
      ],
    },

    {
      titulo: "El egoísta no se quiere nada",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su argumento parte de una observación lógica: si el amor es una actitud hacia los seres humanos, y yo soy un ser humano, entonces excluirme a mí mismo de esa actitud es una contradicción. No hay ninguna razón para que la única persona a la que no puedo querer sea yo.",
        },
        {
          forma: "texto",
          texto:
            "La confusión, dice, viene de la moral cristiana y protestante, que enseñó durante siglos que amarse a uno mismo es pecado y que la virtud consiste en negarse. De ahí sale la idea de que cuanto menos se quiera uno, más querrá a los demás.",
        },
        {
          forma: "clave",
          rotulo: "Su tesis",
          frase: "El egoísta no se quiere demasiado: no se quiere nada. Precisamente porque no encuentra en sí mismo nada que valga la pena, tiene que estar acaparando todo el rato, buscando fuera lo que no tiene dentro. La avidez es el síntoma de un vacío, no de un exceso.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo clínico es la madre que se sacrifica por todos, que no descansa nunca y que repite que ella no cuenta. Fromm sostiene que esos hijos suelen crecer angustiados, y que reciben un mensaje incómodo: que la vida es una carga y el amor una deuda.",
        },
        {
          forma: "texto",
          texto:
            "Es una observación dura y probablemente la más citada de este capítulo: alguien que no soporta su propia vida no puede enseñar a nadie a disfrutar de la suya, por mucho que se sacrifique. La generosidad sin autoestima transmite culpa.",
        },
        {
          forma: "texto",
          texto:
            "Con eso cierra la parte teórica, y el último capítulo del libro es el que promete el título: la práctica. Cómo se aprende esto. Y empieza con una advertencia honesta que a mucha gente le sienta mal.",
        },
        {
          forma: "arte",
          texto:
            "Dice que la práctica de un arte no se puede enseñar en un libro, igual que no se aprende a tocar el piano leyendo sobre pianos, y que lo único que él puede hacer es describir las condiciones. El resto no está en estas páginas.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Las condiciones que enumera son cuatro, y las mismas que harían falta, dice, para aprender cualquier oficio difícil. La primera es la disciplina: hacerlo todos los días, no cuando apetezca, y no como una imposición sino como algo que uno ha decidido que importa.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la concentración, y aquí hace un diagnóstico de su época que hoy resulta casi profético: sostiene que la gente moderna es incapaz de estar haciendo una sola cosa, que come mientras lee, oye la radio mientras habla y fuma mientras trabaja.",
        },
        {
          forma: "texto",
          texto:
            "Y da un ejercicio concreto, el único del libro entero: sentarse relajado, sin hacer nada, sin leer y sin música, y aguantar veinte minutos así, notando la respiración. Dice que casi nadie es capaz al principio y que ese es exactamente el problema.",
        },
        {
          forma: "clave",
          rotulo: "Por qué eso tiene que ver con el amor",
          frase: "Porque quien no soporta estar veinte minutos consigo mismo no puede estar solo, y quien no puede estar solo busca a otra persona para no estarlo. Y eso, dice Fromm, no es amar: es usar a alguien como remedio contra la propia compañía.",
        },
        {
          forma: "texto",
          texto:
            "La aplicación práctica de la concentración a la relación es escuchar. Fromm sostiene que casi nadie escucha de verdad: se oye mientras se prepara la respuesta, se interrumpe, se aconseja sin que nadie lo haya pedido y se lleva la conversación al terreno propio.",
        },
        {
          forma: "texto",
          texto:
            "La tercera condición es la paciencia. Su comparación es que alguien que quiera resultados rápidos no aprenderá nunca un arte, y que la impaciencia moderna viene de una organización del tiempo en la que todo lo que va despacio parece una pérdida.",
        },
        {
          forma: "arte",
          texto:
            "Y la cuarta es que sea una preocupación suprema: que amar ocupe en la vida de alguien el sitio que ocupa el trabajo, y no el rato que sobra al final del día. Sin eso, dice, se puede hacer bastante bien todo lo anterior y no llegar a ninguna parte.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Añade dos requisitos más que son los que menos se citan. El primero es superar el narcisismo, que él define como la incapacidad de percibir como real lo que ocurre fuera de uno mismo. Y propone un criterio para medirlo: la objetividad.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo es doméstico y funciona: una madre convencida de que su hijo no tiene ningún problema y otra convencida de que su hijo es un desastre son igual de narcisistas, porque las dos están viendo lo que necesitan ver y no lo que hay.",
        },
        {
          forma: "texto",
          texto:
            "El segundo requisito es la fe, y aclara enseguida que no habla de religión. Habla de fe racional: la convicción, basada en la observación, de que una persona es de determinada manera y de que va a seguir siéndolo aunque hoy se haya comportado mal.",
        },
        {
          forma: "texto",
          texto:
            "Sin esa confianza, dice, no se puede querer a nadie durante mucho tiempo, porque cualquier mal día se convierte en una revisión completa de la relación y nadie aguanta que lo evalúen entero cada semana.",
        },
        {
          forma: "texto",
          texto:
            "Y añade que tener fe en alguien exige coraje, porque significa aceptar el riesgo de equivocarse y de que a uno le hagan daño.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el libro entero, en ciento treinta páginas y sin una sola cita bibliográfica.",
        },
        {
          forma: "texto",
          texto:
            "Y con veinticinco millones de ejemplares vendidos, que es lo que hay que explicar al final.",
        },
      ],
    },

    {
      titulo: "El libro que le dio vergüenza",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Fromm se refirió a este libro en varias ocasiones con una mezcla de orgullo y de incomodidad. Dijo que le producía cierta vergüenza que su obra más leída fuese la más sencilla, escrita deprisa y sin el aparato de sus libros académicos.",
        },
        {
          forma: "texto",
          texto:
            "También le molestaba cómo se leía. Sostenía que la gente lo compraba buscando una receta para arreglar su vida sentimental, saltándose la parte central del libro, que es una crítica bastante dura a la sociedad en la que ese lector vive.",
        },
        {
          forma: "clave",
          rotulo: "Lo que el libro dice de verdad",
          frase: "Que en una sociedad organizada alrededor del intercambio y del consumo, el amor en el sentido que él describe es casi imposible, y que quien lo consiga lo hará contra la corriente. No es un libro optimista, aunque se venda en la sección de autoayuda.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla. Lo primero y más importante: no tiene ninguna base empírica. No hay un estudio, ni un dato, ni un caso clínico desarrollado. Son afirmaciones de un hombre inteligente que ha pensado mucho, y nada más que eso.",
        },
        {
          forma: "texto",
          texto:
            "Eso importa porque desde 1956 se ha investigado muchísimo sobre relaciones: teoría del apego, estudios longitudinales de parejas a lo largo de décadas, trabajos sobre qué predice una ruptura. Nada de eso existía, y el libro se lee a veces como si lo sustituyera.",
        },
        {
          forma: "texto",
          texto:
            "Curiosamente, buena parte de lo que se ha encontrado después va en su dirección: la calidad de la relación depende más de conductas concretas y sostenidas que de la intensidad inicial. Es lo que él decía sin poder demostrarlo.",
        },
        {
          forma: "arte",
          texto:
            "El segundo fallo es el capítulo sobre madres y padres, que congela como naturaleza humana el reparto de papeles de una familia burguesa europea de los años cincuenta, y que hoy no describe a la mayoría de las familias de ningún país.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El tercero, ya dicho: sus afirmaciones sobre la homosexualidad son falsas y responden a la psiquiatría de su tiempo. Conviene saberlo antes de abrir el libro, para no llevarse la sorpresa a mitad de un capítulo por lo demás razonable.",
        },
        {
          forma: "texto",
          texto:
            "El cuarto es que no hay poder en ninguna página. No aparecen la violencia en la pareja, ni el dinero, ni quién hace las tareas de la casa, ni la dependencia económica de quien no puede irse. Todo ocurre entre dos personas igualmente libres, y eso casi nunca es cierto.",
        },
        {
          forma: "clave",
          rotulo: "El quinto, el más señalado por sus críticos",
          frase: "El capítulo de la práctica es cortísimo y vago comparado con el diagnóstico. Después de cien páginas explicando por qué casi nadie sabe amar, dedica quince a decir cómo se aprende, y buena parte de ellas a avisar de que eso no se puede enseñar en un libro.",
        },
        {
          forma: "texto",
          texto:
            "Es honesto y también es una salida. Marcuse le reprochó justamente eso: que su obra terminaba en una exhortación moral a mejorar personalmente, sin decir nada sobre cómo se cambian las condiciones sociales que él mismo señalaba como causa.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un sexto reproche de estilo: escribe en un tono profético, con frases rotundas y sin condicionales, que hace difícil discutirle nada. O se está de acuerdo con la frase o no, pero no hay por dónde entrar a debatirla.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree y no es verdad. Lo primero: que es un manual para encontrar pareja. Es lo contrario. Su tesis central es que el problema no es encontrar a la persona adecuada, y quien lo lea buscando eso se va a irritar en el primer capítulo.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: que amarse a uno mismo es una versión suave del egoísmo. Fromm sostiene que son opuestos, y que el egoísta se comporta así porque no encuentra nada en sí mismo, no porque se sobre.",
        },
        {
          forma: "arte",
          texto:
            "Tercero: que Fromm era freudiano. Rechazó la teoría de la libido y la pulsión de muerte, puso las condiciones sociales en el centro, y los freudianos ortodoxos lo trataron de revisionista durante décadas. Estaba más cerca de Marx que de Freud en lo esencial.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Cuarto: que es un libro fácil. Es corto, que no es lo mismo. Cien de sus ciento treinta páginas son análisis social y antropológico, y la parte que la gente compra ocupa la última quinta parte.",
        },
        {
          forma: "texto",
          texto:
            "Y quinto: que va del enamoramiento. Va exactamente de lo otro: de qué hay que hacer cuando eso se pasa, que es a los pocos meses y sin excepciones.",
        },
        {
          forma: "texto",
          texto:
            "Fromm murió en Suiza en 1980, cinco días antes de cumplir ochenta años, después de tres infartos y de haber escrito veinte libros más que casi nadie ha leído.",
        },
        {
          forma: "texto",
          texto:
            "El balance justo es este: un ensayo sin pruebas, escrito con prisa, con dos capítulos que hoy hay que leer con la fecha delante, y con una tesis central que sigue siendo la más útil que se ha formulado sobre el asunto.",
        },
        {
          forma: "texto",
          texto:
            "Que amar no es algo que te ocurre si tienes suerte.",
        },
        {
          forma: "texto",
          texto:
            "Es una capacidad que se tiene o no se tiene, que se puede entrenar, y que se entrena aprendiendo a estar solo, a escuchar y a mirar a alguien tal como es.",
        },
        {
          forma: "texto",
          texto:
            "Y que si eso no se aprende, cambiar de persona no arregla absolutamente nada.",
        },
      ],
    },
  ],
};

export const LENGUAJES_AMOR: Resumen = {
  id: "lenguajes-amor",
  titulo: "Los cinco lenguajes del amor",
  autor: "Gary Chapman",
  ano: 1992,
  gancho: "Un pastor baptista de Carolina del Norte releyó veinte años de notas de sus sesiones de pareja, agrupó las quejas en cinco categorías y escribió el libro sobre relaciones más vendido del mundo.",
  porQue:
    "Porque veinte millones de personas organizan su vida de pareja con este esquema, y porque su afirmación central —que hay que emparejar los lenguajes— es la única comprobable y no ha salido bien de las comprobaciones.",
  partes: [
    {
      titulo: "Las notas de un pastor de Winston-Salem",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Winston-Salem, Carolina del Norte, finales de los años ochenta. Un pastor baptista que lleva dos décadas atendiendo a parejas de su congregación se sienta a revisar las carpetas con las notas de esas sesiones, que ocupan varios archivadores de su despacho.",
        },
        {
          forma: "texto",
          texto:
            "Lo que busca no es un caso concreto: busca un patrón. Y lo que le llama la atención es que las quejas, después de veinte años y de cientos de parejas distintas, se repiten con muy pocas variaciones y en muy pocas formas.",
        },
        {
          forma: "clave",
          rotulo: "Lo que se repetía",
          frase: "Ella dice que él nunca le dice nada bonito. Él dice que ella no valora todo lo que hace en casa. Ella dice que nunca pasan tiempo juntos de verdad. Él dice que ella lo rechaza físicamente. Y casi ninguno se entiende con el otro.",
        },
        {
          forma: "texto",
          texto:
            "Al agrupar las quejas por tipo le salieron cinco montones, y esa clasificación es todo el libro. La hipótesis que construyó encima es que cada persona tiene una manera principal de sentirse querida, y que lo que a uno le llega puede no llegarle al otro.",
        },
        {
          forma: "texto",
          texto:
            "El pastor se llamaba Gary Chapman, había nacido en 1938, tenía formación en antropología y un doctorado en educación de adultos por un seminario teológico baptista, y llevaba desde los años setenta atendiendo matrimonios de su iglesia sin cobrar por ello.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decirlo pronto porque cambia cómo se lee el libro: no es psicólogo, no es terapeuta con licencia clínica y no ha hecho investigación. Es un pastor con muchísima experiencia práctica escuchando a parejas en dificultades.",
        },
        {
          forma: "arte",
          texto:
            "El libro salió en 1992 en una editorial evangélica pequeña vinculada a un instituto bíblico de Chicago, sin apenas promoción. Tardó casi una década en despegar, empujado por el boca a boca y por las redes de iglesias, hasta convertirse en un fenómeno mundial.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Ha vendido más de veinte millones de ejemplares, está traducido a más de cincuenta idiomas y ha generado versiones para niños, adolescentes, solteros, militares, familias monoparentales, el lugar de trabajo y hasta un libro entero sobre cómo pedir perdón.",
        },
        {
          forma: "texto",
          texto:
            "Su origen religioso está declarado y en las ediciones originales es bastante visible, con citas bíblicas y con un marco de compromiso matrimonial explícito. Las ediciones más recientes lo han ido dejando en segundo plano para ampliar el público.",
        },
        {
          forma: "texto",
          texto:
            "Eso importa por una razón concreta que veremos al final: hay consejos en el libro que solo tienen sentido dentro de una idea del matrimonio como compromiso indisoluble, y que aplicados fuera de ese marco pueden ser malos consejos.",
        },
        {
          forma: "clave",
          rotulo: "Su observación de partida",
          frase: "Que en la mayoría de las parejas que atendía no había maldad ni desinterés. Había dos personas esforzándose de verdad, cada una a su manera, y ninguna de las dos recibía nada de lo que necesitaba. El problema no era la falta de amor: era la traducción.",
        },
        {
          forma: "texto",
          texto:
            "Esa idea es la que ha hecho que el libro funcione durante treinta años, porque le da a mucha gente una explicación que no acusa a nadie. No es que tu pareja no te quiera; es que te lo está diciendo en un idioma que tú no hablas.",
        },
        {
          forma: "texto",
          texto:
            "Y viene con una promesa muy concreta: que si aprendes el idioma del otro y lo usas deliberadamente, aunque no te salga natural, la relación cambia. Que es una habilidad y no una cuestión de compatibilidad.",
        },
        {
          forma: "texto",
          texto:
            "El libro está escrito en un formato reconocible: capítulos cortos, cada uno con un caso de consulta, con nombres y diálogos, y con una moraleja al final. No hay una sola referencia, ni un estudio, ni una cifra en todo el volumen.",
        },
        {
          forma: "arte",
          texto:
            "Es importante saberlo antes de empezar. Los casos son reales según el autor y están contados de memoria y desde su punto de vista, y en todos ellos el consejo funciona. No aparece ninguna pareja a la que este método no le sirviera.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Antes de enumerar los cinco lenguajes, dedica un capítulo a explicar por qué hace falta un método, y ese capítulo es de lo mejor del libro porque describe algo que casi todo el mundo ha vivido.",
        },
        {
          forma: "texto",
          texto:
            "Su descripción de esa fase inicial es bastante precisa: la sensación de que el otro es perfecto, la incapacidad de ver sus defectos, la certeza de que esto va a durar así siempre y la convicción de que a los demás les pasa lo mismo pero con menos intensidad.",
        },
        {
          forma: "texto",
          texto:
            "Y su descripción de lo que viene después también: el momento en que las mismas costumbres que parecían encantadoras empiezan a irritar, en que aparecen las primeras discusiones repetidas, y en que uno de los dos se pregunta en voz baja si se ha equivocado.",
        },
        {
          forma: "texto",
          texto:
            "Chapman sostiene que ese descubrimiento produce dos reacciones típicas y las dos son malas. La primera es concluir que el otro ha cambiado o que ha estado fingiendo. La segunda es concluir que uno mismo se ha equivocado de persona y que en algún sitio está la correcta.",
        },
        {
          forma: "texto",
          texto:
            "Su tercera opción, que es la del libro, es aceptar que aquella fase era temporal por diseño y que lo que viene después no es un fracaso sino otra cosa: una relación que hay que construir deliberadamente porque ya no se construye sola.",
        },
        {
          forma: "texto",
          texto:
            "El momento en que se acaba el enamoramiento.",
        },
        {
          forma: "texto",
          texto:
            "Chapman lo sitúa entre los dieciocho meses y los dos años, que es aproximadamente lo que dicen también los estudios sobre la fase inicial de las relaciones.",
        },
        {
          forma: "texto",
          texto:
            "Y sostiene que ese momento no es el fin de nada.",
        },
        {
          forma: "texto",
          texto:
            "Es cuando empieza el trabajo, porque hasta entonces no hacía falta ninguna técnica.",
        },
      ],
    },

    {
      titulo: "El depósito vacío",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La imagen central del libro es la de un depósito emocional que cada persona lleva dentro. Cuando está lleno, uno se siente querido y se comporta con generosidad. Cuando está vacío, se vuelve susceptible, reprocha cosas antiguas y busca pelea por asuntos menores.",
        },
        {
          forma: "texto",
          texto:
            "La metáfora es sencilla y le sirve a Chapman para explicar algo que en consulta veía todo el rato: que las discusiones de pareja casi nunca van de lo que aparentemente van, y que discutir sobre el reparto de tareas puede ser en realidad otra conversación.",
        },
        {
          forma: "clave",
          rotulo: "El mecanismo del malentendido",
          frase: "Cada uno expresa el cariño en su propio lenguaje, que es el que a él le llena el depósito. Si el mío es hacer cosas y el tuyo es que te hablen, yo puedo pasarme diez años arreglando la casa mientras tú te sientes cada vez más sola. Y los dos tendremos razón.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el diagnóstico que hace que el libro se recomiende de boca en boca, porque describe una situación muy común: dos personas agotadas de intentarlo, cada una convencida de que la otra no pone de su parte, y las dos poniendo mucho.",
        },
        {
          forma: "texto",
          texto:
            "Chapman sostiene además que el lenguaje propio suele venir de la infancia, de cómo se expresaba el cariño en la casa donde uno se crio, y que por eso resulta tan evidente y tan difícil de ver como una preferencia particular y no como la manera normal de querer.",
        },
        {
          forma: "texto",
          texto:
            "Su segunda observación es que la queja repetida es el mejor indicador. Lo que una persona reprocha con más frecuencia señala exactamente su lenguaje: quien dice que nunca la ayudan lo dice porque para ella la ayuda es lo que significa cariño.",
        },
        {
          forma: "arte",
          texto:
            "Da tres preguntas para identificar el propio: qué pides con más frecuencia, de qué te quejas más, y qué haces tú espontáneamente por la otra persona. La tercera es la más reveladora, porque casi todo el mundo da lo que le gustaría recibir.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Y añade un matiz que se pierde en las versiones populares del esquema: dentro de cada lenguaje hay dialectos. A una persona cuyo lenguaje es el tiempo puede no servirle cualquier tiempo: puede necesitar conversación sin pantallas y no le vale ver una serie juntos.",
        },
        {
          forma: "texto",
          texto:
            "Eso convierte el método en algo bastante más laborioso de lo que parece en los resúmenes de internet. No basta con saber que tu pareja funciona con actos de servicio: hay que averiguar qué actos concretos significan algo para ella y cuáles le dan igual.",
        },
        {
          forma: "texto",
          texto:
            "La otra pieza del mecanismo es la que más resistencia genera en los lectores, y Chapman la defiende sin rodeos: hay que hablar el idioma del otro aunque no salga natural y aunque no apetezca, porque eso es precisamente lo que lo convierte en un regalo.",
        },
        {
          forma: "clave",
          rotulo: "Su argumento",
          frase: "Que hacer algo que te sale solo no cuesta nada y por tanto comunica poco. Que el gesto significativo es el que exige esfuerzo y atención, y que esperar a sentir ganas antes de actuar es exactamente lo que mantiene a las parejas estancadas durante años.",
        },
        {
          forma: "texto",
          texto:
            "Eso encaja con lo que se sabe de la conducta: actuar suele preceder al sentimiento más de lo que la gente cree, y en terapia de pareja se usan intervenciones conductuales similares con resultados razonables.",
        },
        {
          forma: "texto",
          texto:
            "Y encaja también con la crítica más seria que se le hace, que veremos al final: la idea de comportarse con cariño sin sentirlo, aplicada sin ninguna advertencia, puede sostener relaciones que deberían terminarse.",
        },
        {
          forma: "texto",
          texto:
            "Con la teoría montada, el libro dedica un capítulo a cada uno de los cinco, con casos, ejemplos concretos y listas de cosas que se pueden hacer esta semana.",
        },
        {
          forma: "texto",
          texto:
            "Esa parte práctica es la que ha hecho el éxito.",
        },
        {
          forma: "texto",
          texto:
            "Y también la que ha hecho que el esquema circule por todas partes recortado en cinco palabras.",
        },
        {
          forma: "texto",
          texto:
            "Antes de entrar en ellos conviene fijarse en un detalle del método que se pierde siempre: Chapman insiste en que el lenguaje de cada uno hay que preguntarlo, no deducirlo. Que casi todo el mundo se equivoca al adivinar el de su pareja, incluso después de años.",
        },
        {
          forma: "texto",
          texto:
            "La razón que da es que uno interpreta al otro desde su propio idioma. Alguien para quien el cariño son palabras dará por hecho que a su pareja también le hacen falta palabras, y no se le ocurrirá que lo que necesita es que le hagan la compra.",
        },
        {
          forma: "texto",
          texto:
            "Por eso el ejercicio que propone es una conversación explícita y no un test: sentarse los dos y contarse tres momentos concretos en que cada uno se sintió especialmente querido, y buscar qué tienen en común esos tres momentos.",
        },
        {
          forma: "texto",
          texto:
            "Ese ejercicio es probablemente lo mejor del libro entero y no depende de que la teoría sea correcta. Obliga a las dos personas a hablar de algo específico y comprobable, en lugar de discutir sobre si el otro se esfuerza o no.",
        },
        {
          forma: "texto",
          texto:
            "Y tiene un efecto secundario que Chapman menciona de pasada: mucha gente descubre haciéndolo que no recuerda ningún momento reciente. Ese hallazgo, por sí solo, suele ser más informativo que cualquier clasificación posterior.",
        },
        {
          forma: "texto",
          texto:
            "El libro añade una advertencia sensata sobre los plazos: dice que hay que sostener el cambio varias semanas antes de esperar nada, porque quien lleva años con el depósito vacío no se lo va a creer con dos gestos, y que ese periodo de desconfianza es normal.",
        },
      ],
    },

    {
      titulo: "Los cinco",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El primero son las palabras de afirmación: decir en voz alta lo que se aprecia del otro. No cumplidos automáticos, sino reconocimientos concretos de algo que ha hecho, de cómo ha manejado una situación difícil o de una cualidad suya que uno admira de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Chapman insiste en dos cosas sobre este: que la crítica hace un daño desproporcionado a quien funciona así, y que las palabras cuentan también cuando se dicen delante de otros, porque el reconocimiento en público pesa más que en privado.",
        },
        {
          forma: "texto",
          texto:
            "El segundo es el tiempo de calidad, y el adjetivo es la clave: no se trata de estar en la misma habitación, sino de atención sin repartir. Una conversación de veinte minutos mirándose vale más que una tarde entera juntos con el móvil en la mano.",
        },
        {
          forma: "clave",
          rotulo: "Su distinción más útil",
          frase: "Entre estar presente y estar disponible. Mucha gente pasa horas al lado de su pareja sin haber tenido ni un momento de atención mutua, y para quien funciona con este lenguaje esas horas no cuentan absolutamente nada.",
        },
        {
          forma: "texto",
          texto:
            "El tercero son los regalos, que es el más criticado y el que peor se entiende. No va de dinero ni de objetos caros: va del gesto de haber pensado en alguien cuando no estaba delante, y el objeto es solo la prueba física de ese pensamiento.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que da es el de una piedra recogida en un paseo, o una revista comprada porque sabías que le interesaba el tema. Aun así, es la categoría más discutida del esquema, y hay investigadores que sostienen que no es un lenguaje sino una variante de las otras cuatro.",
        },
        {
          forma: "arte",
          texto:
            "El cuarto son los actos de servicio: hacer cosas que le quitan trabajo o preocupación al otro. Cambiar una bombilla, ocuparse de un trámite pesado, tener la cena hecha cuando llega tarde. Para quien funciona así, esto es literalmente lo que significa la palabra cariño.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Y es el lenguaje que más conflictos genera en la práctica, porque se confunde con el reparto de tareas. Un acto de servicio que se da por supuesto deja de comunicar nada, y cuando una persona hace siempre las mismas cosas, dejan de leerse como un regalo.",
        },
        {
          forma: "texto",
          texto:
            "El quinto es el contacto físico, que Chapman se cuida de separar del sexo. Incluye la mano en la espalda al pasar, el abrazo al llegar, el pie que toca el otro pie debajo de la mesa: contacto de baja intensidad y alta frecuencia.",
        },
        {
          forma: "texto",
          texto:
            "Para quien funciona así, la ausencia de ese contacto se experimenta como rechazo aunque todo lo demás vaya bien, y eso explica discusiones que desde fuera parecen desproporcionadas por algo tan pequeño como que el otro se aparte al sentarse en el sofá.",
        },
        {
          forma: "clave",
          rotulo: "Cómo se supone que se usa",
          frase: "Cada uno identifica el suyo, se lo dice al otro con ejemplos concretos, y ambos se comprometen a practicar el del otro deliberadamente durante unas semanas. Chapman propone empezar con una cosa al día y sin esperar reciprocidad inmediata.",
        },
        {
          forma: "texto",
          texto:
            "Hay un test de treinta preguntas para identificar el propio, que circula por internet y que se ha convertido en la puerta de entrada al libro para la mayoría de la gente. Conviene saber que ese test no está validado como instrumento psicométrico.",
        },
        {
          forma: "texto",
          texto:
            "Es decir: no ha pasado los procedimientos habituales para comprobar que mide lo que dice medir, ni que dé el mismo resultado si se repite unas semanas después, que es precisamente uno de los problemas que ha encontrado la investigación.",
        },
        {
          forma: "texto",
          texto:
            "Porque desde 1992 sí se ha investigado el asunto.",
        },
        {
          forma: "texto",
          texto:
            "No mucho, y lo suficiente para poner a prueba la única afirmación del libro que se puede comprobar.",
        },
        {
          forma: "texto",
          texto:
            "Que es la de emparejar los lenguajes.",
        },
        {
          forma: "texto",
          texto:
            "Merece la pena detenerse antes en un problema práctico que el propio libro señala y que cualquiera reconocerá: el lenguaje de una persona puede ser exactamente aquel que a la otra le resulta más difícil de dar, y eso no es mala suerte, es bastante frecuente.",
        },
        {
          forma: "texto",
          texto:
            "Alguien criado en una casa donde nadie se tocaba tendrá dificultades reales con el contacto físico, y alguien que creció con reproches puede tener un bloqueo con las palabras de afirmación porque nunca oyó ninguna dirigida a él.",
        },
        {
          forma: "texto",
          texto:
            "La respuesta de Chapman a eso es que se aprende igual que se aprende un idioma extranjero: torpemente al principio, con esfuerzo consciente durante meses y con la garantía de que va a sonar artificial hasta que deje de sonarlo.",
        },
        {
          forma: "texto",
          texto:
            "Y da un consejo que resulta útil y que contradice un poco al resto del libro: que quien recibe un intento torpe lo agradezca aunque no sea exactamente lo que necesitaba, porque castigar los primeros intentos garantiza que no haya segundos.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un problema de dosis que el esquema no resuelve. Dos personas pueden compartir lenguaje y necesitar cantidades muy distintas: a una le basta con una conversación larga a la semana y otra necesita una todos los días, y eso genera exactamente el mismo conflicto.",
        },
        {
          forma: "texto",
          texto:
            "Ese punto ciego es importante y apunta ya hacia lo que ha encontrado la investigación posterior, que es que el problema rara vez es de idioma y muy a menudo es de cantidad.",
        },
      ],
    },

    {
      titulo: "Lo que dicen los estudios",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El libro contiene varias afirmaciones y solo una de ellas se puede someter a prueba con claridad: que las parejas cuyos lenguajes coinciden, o que aprenden a hablar el del otro, están más satisfechas que las que no. Todo el método depende de eso.",
        },
        {
          forma: "texto",
          texto:
            "Los primeros trabajos, de mediados de los dos mil, intentaron comprobar si las cinco categorías aparecen realmente cuando se analizan estadísticamente las respuestas de mucha gente. Los resultados fueron mixtos: en algunos estudios salen cinco factores y en otros salen menos o agrupados de otra manera.",
        },
        {
          forma: "clave",
          rotulo: "El estudio más claro sobre el emparejamiento",
          frase: "Un trabajo publicado en 2022 en la revista PLOS ONE con parejas reales encontró que la coincidencia de lenguajes entre los dos miembros no predecía la calidad de la relación. Lo que sí la predecía era usar el propio lenguaje y expresar cariño con frecuencia.",
        },
        {
          forma: "texto",
          texto:
            "Ese resultado es incómodo para el libro porque invierte su consejo. Chapman dice que hay que abandonar el idioma propio y hablar el del otro; los datos sugieren que lo que funciona es expresar cariño mucho, de la manera que a uno le salga.",
        },
        {
          forma: "texto",
          texto:
            "Otros estudios apuntan en la misma dirección: la variable que mejor predice la satisfacción no es el ajuste entre lenguajes sino la cantidad total de conductas de afecto, la reciprocidad percibida y la capacidad de responder a lo que el otro pide en el momento.",
        },
        {
          forma: "texto",
          texto:
            "En 2024, un grupo de investigadoras publicó en una revista de psicología una revisión de toda la evidencia disponible sobre el esquema, y su conclusión fue bastante contundente en las tres afirmaciones centrales del libro.",
        },
        {
          forma: "arte",
          texto:
            "La primera: que cada persona tiene un lenguaje principal. Los datos no lo sostienen. La gente valora los cinco, las puntuaciones están más repartidas de lo que el esquema supone, y el lenguaje que alguien declara cambia según el momento y la situación.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La segunda: que los cinco cubren el terreno. No lo cubren. Faltan cosas que aparecen sistemáticamente en la investigación sobre relaciones, como el apoyo en momentos difíciles, la lealtad, la capacidad de reparar después de una discusión o el interés genuino por lo que le pasa al otro.",
        },
        {
          forma: "texto",
          texto:
            "Y la tercera: que emparejar lenguajes mejora la relación. Es la que menos apoyo tiene de las tres, y es la que sostiene el método entero.",
        },
        {
          forma: "texto",
          texto:
            "Esa revisión propuso además cambiar la metáfora, y la alternativa es mejor que la crítica. En lugar de un idioma que hay que aprender, proponen pensarlo como una dieta equilibrada: todo el mundo necesita algo de los cinco, y el problema es la carencia, no el idioma.",
        },
        {
          forma: "clave",
          rotulo: "Por qué esa metáfora funciona mejor",
          frase: "Porque explica algo que el esquema original no explica: que una relación con muchas palabras bonitas y cero contacto físico falla, y una con mucho contacto y ninguna conversación también. No hay un nutriente principal que compense la ausencia del resto.",
        },
        {
          forma: "texto",
          texto:
            "Y porque quita el determinismo. Decir que uno es de actos de servicio funciona como una etiqueta que se lleva puesta, y la investigación sugiere que esas preferencias son más flexibles y más dependientes del contexto de lo que el libro admite.",
        },
        {
          forma: "texto",
          texto:
            "Nada de esto significa que el libro no sirva para nada, y conviene decirlo con la misma claridad, porque hay un efecto real que ninguna de esas críticas discute.",
        },
        {
          forma: "texto",
          texto:
            "Que da a dos personas un vocabulario para hablar de algo de lo que no sabían hablar.",
        },
        {
          forma: "texto",
          texto:
            "Y eso, en una pareja atascada, puede valer más que la exactitud del esquema.",
        },
        {
          forma: "texto",
          texto:
            "Conviene además situar bien el alcance de esas críticas, porque tampoco son un desmentido total. Los estudios que han fallado son los de la hipótesis del emparejamiento; lo que sí se sostiene es que las conductas concretas que Chapman describe importan y que la gente las echa de menos.",
        },
        {
          forma: "texto",
          texto:
            "Es decir: las cinco cosas que enumera son cinco cosas reales que la gente valora en una relación. Lo que no está demostrado es que funcionen como idiomas mutuamente excluyentes ni que haya que acertar con uno.",
        },
        {
          forma: "texto",
          texto:
            "La cantidad de investigación disponible tampoco es enorme, y ese es un matiz que hay que hacer en las dos direcciones. Son unos pocos estudios, con muestras medianas, y no una literatura tan sólida como la que existe sobre otros aspectos de las relaciones de pareja.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí tiene una base amplia es lo que predice que una pareja dure, y ahí el nombre de referencia es el trabajo de John Gottman, que grabó a cientos de parejas discutiendo en un laboratorio durante décadas y midió qué las diferenciaba.",
        },
        {
          forma: "texto",
          texto:
            "Lo que encontró no tiene que ver con lenguajes: tiene que ver con cómo se discute. La presencia de desprecio, de crítica al carácter y no a la conducta, de actitud defensiva y de retirada durante el conflicto es lo que mejor predice una ruptura.",
        },
        {
          forma: "texto",
          texto:
            "Y en el lado positivo, una proporción alta de interacciones agradables frente a las desagradables en la vida cotidiana, más la costumbre de responder a los pequeños intentos de contacto del otro. Eso último se parece bastante a lo que Chapman intuía sin poder medirlo.",
        },
      ],
    },

    {
      titulo: "La dieta equilibrada",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Lo que casi todos los críticos del libro reconocen es que abrió una conversación que mucha gente no sabía tener. Antes de este esquema, la manera habitual de plantear el problema era decir que el otro no se esfuerza, que es una acusación y no una pregunta.",
        },
        {
          forma: "texto",
          texto:
            "Con el vocabulario de los lenguajes, la misma conversación se puede plantear sin culpar a nadie: no es que no te esfuerces, es que necesito otra cosa distinta de la que me das. Esa reformulación es lo que de verdad ha ayudado a millones de parejas.",
        },
        {
          forma: "clave",
          rotulo: "Su función real",
          frase: "No es un modelo válido de cómo funciona el afecto. Es una herramienta de conversación, y como tal es excelente: obliga a las dos personas a decir en voz alta y con ejemplos concretos qué necesitan, que es algo que casi nadie hace nunca.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla, empezando por lo que ya está dicho: no tiene ninguna base empírica de origen, sus tres afirmaciones centrales no se sostienen bien cuando se comprueban, y el test que todo el mundo hace no está validado.",
        },
        {
          forma: "texto",
          texto:
            "El segundo fallo es de encuadre. Está escrito para un matrimonio heterosexual con reparto de papeles bastante tradicional, y buena parte de los ejemplos tienen a una mujer que se queja de que no la ayudan en casa y a un hombre que no entiende por qué.",
        },
        {
          forma: "texto",
          texto:
            "Ese ejemplo se repite tanto que acaba revelando algo que el libro no analiza: si el reparto de tareas domésticas es profundamente desigual, llamarlo un problema de lenguajes es convertir una injusticia en un malentendido de comunicación.",
        },
        {
          forma: "arte",
          texto:
            "Ese es el reproche de fondo más serio. El esquema despolitiza los conflictos. Todo lo que en una pareja tiene que ver con poder, con dinero, con carga mental o con quién renuncia a qué, en este libro se traduce a un problema de traducción entre dos idiomas.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El tercer fallo es el más grave y tiene que ver con el marco religioso del que nace. El libro parte de que el matrimonio es un compromiso que hay que sostener, y aconseja actuar con cariño aunque no se sienta, esperando que el sentimiento vuelva.",
        },
        {
          forma: "texto",
          texto:
            "En una pareja sana y atascada, ese consejo es bueno. En una relación con desprecio sostenido, control o maltrato, es exactamente el consejo equivocado, y le dice a la persona que está peor que la solución es esforzarse más.",
        },
        {
          forma: "texto",
          texto:
            "El libro no dedica prácticamente nada a distinguir esas dos situaciones, ni a explicar cuándo una relación no tiene arreglo, ni menciona el maltrato salvo de pasada. En un superventas de veinte millones de ejemplares sobre parejas, esa omisión pesa.",
        },
        {
          forma: "clave",
          rotulo: "Lo que la gente cree y no es verdad",
          frase: "Que el esquema está basado en investigación. No lo está: nace de las notas de consulta de un pastor y se publicó sin un solo estudio detrás. La investigación llegó veinte años después y en buena parte lo contradice.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: que cada persona tiene un lenguaje principal y estable. Los datos disponibles sugieren que la gente valora los cinco, que las diferencias entre ellos son menores de lo que el esquema supone y que la preferencia declarada cambia con el tiempo y la situación.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: que emparejar lenguajes con la pareja mejora la relación. Es la afirmación central y la que peor ha salido de las comprobaciones. Lo que sí predice satisfacción es expresar afecto con frecuencia y responder a lo que el otro pide.",
        },
        {
          forma: "texto",
          texto:
            "Cuarto: que Chapman es psicólogo. Es pastor baptista, con formación en antropología y un doctorado en educación de adultos, y con muchísima experiencia práctica atendiendo parejas, que no es lo mismo pero tampoco es poco.",
        },
        {
          forma: "arte",
          texto:
            "Y quinto: que el test de internet dice algo sobre uno. No está validado, se contesta según el estado de ánimo del día, y su resultado cambia si se repite. Sirve para empezar una conversación y no para etiquetarse.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Puesto todo junto, el balance honesto es este: un modelo probablemente falso y una herramienta bastante buena, que son dos cosas que pueden convivir y que en los libros de este tipo conviven más de lo que parece.",
        },
        {
          forma: "texto",
          texto:
            "La versión corregida por la investigación posterior es más sencilla y más difícil de vender, y cabe en tres líneas.",
        },
        {
          forma: "texto",
          texto:
            "Hay cinco maneras principales de demostrar afecto y todo el mundo necesita algo de las cinco, no una.",
        },
        {
          forma: "texto",
          texto:
            "Lo que predice que una relación vaya bien no es acertar el idioma, sino la frecuencia con que se expresa el cariño y la disposición a hacer caso cuando el otro pide algo concreto.",
        },
        {
          forma: "texto",
          texto:
            "Y preguntar directamente qué necesita la otra persona funciona mejor que cualquier test de treinta preguntas.",
        },
        {
          forma: "texto",
          texto:
            "Quien quiera seguir por ahí tiene sitios mejores. Sobre lo que predice que una pareja funcione, los libros de Gottman están construidos sobre décadas de observación en laboratorio y tienen datos en cada capítulo, que es exactamente lo que a este le falta.",
        },
        {
          forma: "texto",
          texto:
            "Y sobre por qué a alguien le cuesta pedir o recibir determinadas cosas, la literatura sobre estilos de apego explica bastante mejor los bloqueos que este libro atribuye simplemente a tener otro idioma.",
        },
        {
          forma: "texto",
          texto:
            "Aun así, ninguno de esos dos ha conseguido lo que consiguió este: que veinte millones de personas que no habrían abierto un libro de psicología se sentaran con su pareja a hablar de qué necesitan, con ejemplos concretos y sin acusarse de nada.",
        },
        {
          forma: "texto",
          texto:
            "Un pastor de Carolina del Norte releyendo sus carpetas de notas hizo eso, y eso no lo ha hecho ningún estudio.",
        },
      ],
    },
  ],
};

export const COSAS_BUENAS: Resumen = {
  id: "cosas-buenas",
  titulo: "Cómo hacer que te pasen cosas buenas",
  autor: "Marian Rojas Estapé",
  ano: 2018,
  gancho: "Es probablemente el libro de divulgación más vendido en España en lo que va de siglo, y repite en cada capítulo una frase que es falsa tal y como está escrita.",
  porQue:
    "Porque su capítulo sobre el estrés crónico está bien y es útil, y porque su neurociencia de cuatro hormonas es una versión de manual popular que conviene saber leer con distancia.",
  partes: [
    {
      titulo: "La hija del psiquiatra",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Madrid, consulta de un instituto privado de psiquiatría. Una médica de treinta y pocos años atiende a pacientes con ansiedad, con insomnio y con episodios depresivos, y comprueba una y otra vez que casi ninguno sabe qué le está pasando a su cuerpo mientras le pasa.",
        },
        {
          forma: "texto",
          texto:
            "La gente llega describiendo síntomas físicos —taquicardias, mareos, problemas digestivos, contracturas— convencida de que tiene una enfermedad que no aparece en ninguna prueba. Nadie les ha explicado nunca qué hace el cuerpo cuando lleva dos años en alerta permanente.",
        },
        {
          forma: "clave",
          rotulo: "El hueco que detecta",
          frase: "Que hay una distancia enorme entre lo que se sabe en medicina sobre el estrés y lo que sabe la población, y que llenar ese hueco con un lenguaje que se entienda podría ahorrarle a mucha gente años de consultas y de miedo.",
        },
        {
          forma: "texto",
          texto:
            "La médica es Marian Rojas Estapé, nacida en Madrid en 1983, psiquiatra formada en la Universidad de Navarra, e hija de Enrique Rojas, uno de los psiquiatras más conocidos de España y autor a su vez de varios superventas divulgativos.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle familiar importa para entender el libro: creció en una casa donde la psiquiatría se contaba en la mesa y donde divulgar formaba parte del oficio. Trabaja en el instituto que fundó su padre y ha seguido su misma trayectoria pública.",
        },
        {
          forma: "texto",
          texto:
            "El libro se publicó en 2018 en Espasa y su recorrido comercial fue enorme: más de un millón de ejemplares en español, decenas de reediciones, traducciones a varios idiomas y una presencia constante en televisión, radio y pódcast durante años.",
        },
        {
          forma: "arte",
          texto:
            "En España lo ha leído gente que no había leído nunca un libro de psicología, y ese es su primer mérito objetivo: metió en las casas un vocabulario —cortisol, dopamina, estrés crónico— que hasta entonces se quedaba en las consultas.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Su promesa, dicha en el título, es ambiciosa y algo tramposa: no explica cómo hacer que ocurran cosas buenas, sino cómo estar en condiciones de reconocerlas y aprovecharlas cuando ocurren. La diferencia se explica dentro y no en la portada.",
        },
        {
          forma: "texto",
          texto:
            "La estructura del libro es sencilla. Primero explica qué le pasa al cuerpo cuando está en alerta, después describe cuatro sustancias del sistema nervioso, y finalmente propone maneras de intervenir sobre el propio estado a partir de esa descripción.",
        },
        {
          forma: "texto",
          texto:
            "Está escrito en un tono cercano, con muchos casos de consulta contados con nombres cambiados, con listas de consejos y con un lenguaje deliberadamente sencillo. No tiene referencias bibliográficas en la edición original y sus afirmaciones se presentan con autoridad médica.",
        },
        {
          forma: "clave",
          rotulo: "Lo que hay que tener en cuenta al leerlo",
          frase: "Que lo escribe una psiquiatra en ejercicio y no una investigadora, que está divulgando y no citando, y que en divulgación las simplificaciones son inevitables. El problema no es que simplifique, sino que algunas simplificaciones concretas dicen cosas que no son ciertas.",
        },
        {
          forma: "texto",
          texto:
            "Y conviene decir algo más antes de entrar: su mensaje central sobre pedir ayuda profesional es bueno y bastante valiente en el contexto español, donde la psiquiatría sigue arrastrando un estigma considerable y donde mucha gente aguanta años sin consultar a nadie.",
        },
        {
          forma: "texto",
          texto:
            "El libro insiste en que la depresión y la ansiedad son enfermedades, en que la medicación cuando está indicada no es una debilidad, y en que ir a terapia es tan razonable como ir al traumatólogo con una rodilla rota.",
        },
        {
          forma: "texto",
          texto:
            "Eso, dicho desde una posición de autoridad médica y llegando a un millón de casas, es un efecto de salud pública que ningún reparo posterior anula. Conviene tenerlo presente mientras se leen las críticas que vienen a continuación.",
        },
        {
          forma: "arte",
          texto:
            "El libro empieza donde empieza todo lo suyo: en la descripción de qué ocurre en un cuerpo cuando percibe una amenaza. Y usa el ejemplo clásico de los manuales de fisiología, que es el de encontrarse un animal peligroso.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Hay además un dato del contexto español que explica parte de su éxito y que el libro no menciona: España tiene uno de los consumos de ansiolíticos más altos del mundo, y a la vez una de las peores proporciones de psicólogos en la sanidad pública de Europa occidental.",
        },
        {
          forma: "texto",
          texto:
            "Es decir, un país donde el malestar psíquico se trata masivamente con pastillas recetadas en atención primaria, con listas de espera de meses para terapia y con muy poca información pública sobre qué está pasando dentro de uno cuando aparecen los síntomas.",
        },
        {
          forma: "texto",
          texto:
            "En ese hueco es donde aterriza este libro, y por eso funcionó como funcionó. No compitió con la sanidad pública: ocupó un espacio que la sanidad pública tenía vacío, con un lenguaje que se entendía y por doce euros en cualquier librería.",
        },
        {
          forma: "texto",
          texto:
            "Eso no lo convierte en un libro mejor de lo que es y explica por qué las críticas de los profesionales nunca han hecho mella en sus ventas. La alternativa que ofrecían esos profesionales, para la mayoría de la gente, era una lista de espera.",
        },
        {
          forma: "texto",
          texto:
            "Un oso, en la versión que ella cuenta.",
        },
        {
          forma: "texto",
          texto:
            "El problema es lo que ocurre cuando el oso no está.",
        },
        {
          forma: "texto",
          texto:
            "Y el cuerpo se comporta exactamente igual que si estuviera.",
        },
      ],
    },

    {
      titulo: "El oso que no está",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La descripción fisiológica que hace el libro es correcta y es la parte más útil de todo el volumen. Ante una amenaza, el organismo activa en milisegundos una cadena que empieza en el cerebro y termina en las glándulas suprarrenales, encima de los riñones.",
        },
        {
          forma: "texto",
          texto:
            "Se libera adrenalina, que produce el efecto inmediato: sube la frecuencia cardíaca, se dilatan las pupilas, la sangre se redirige a los músculos grandes, se corta la digestión y la atención se estrecha sobre la fuente del peligro.",
        },
        {
          forma: "texto",
          texto:
            "Y se libera cortisol, que es la hormona del segundo tiempo: moviliza glucosa para tener energía disponible, mantiene la presión arterial y frena procesos que en una emergencia no son prioritarios, como la reparación de tejidos o parte de la respuesta inmunitaria.",
        },
        {
          forma: "clave",
          rotulo: "Para qué sirve todo eso",
          frase: "Para sobrevivir a una amenaza que dura minutos. El sistema está diseñado para dispararse, resolver la situación y apagarse. Todo lo que hace tiene sentido si la amenaza es un depredador, y prácticamente ninguno si es una reunión que hay dentro de tres semanas.",
        },
        {
          forma: "texto",
          texto:
            "El problema que describe el libro es real y está bien documentado: cuando ese sistema no se apaga y se mantiene activado durante meses, las mismas respuestas que salvan la vida a corto plazo hacen daño a largo plazo.",
        },
        {
          forma: "texto",
          texto:
            "Los efectos del estrés sostenido que la investigación ha documentado incluyen alteraciones del sueño, peor respuesta inmunitaria ante infecciones, problemas digestivos, tensión muscular crónica, dificultades de concentración y de memoria, y un empeoramiento de casi cualquier enfermedad previa.",
        },
        {
          forma: "arte",
          texto:
            "También hay evidencia de asociación entre estrés crónico y riesgo cardiovascular, aunque los mecanismos exactos se discuten y buena parte de esa asociación pasa por conductas intermedias: quien está muy estresado duerme peor, se mueve menos, come peor y bebe más.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Hasta aquí, lo que dice el libro es razonable y explicar esto a un público amplio tiene un valor claro. El paciente que llega a urgencias convencido de estar sufriendo un infarto y al que le dicen que es ansiedad merece que alguien le explique por qué su pecho hacía eso.",
        },
        {
          forma: "texto",
          texto:
            "El problema aparece con la frase que el libro repite en cada capítulo y que se ha convertido en su eslogan: que el cerebro no distingue entre lo real y lo imaginado.",
        },
        {
          forma: "texto",
          texto:
            "Esa afirmación, tal y como está escrita, es falsa. El cerebro distingue perfectamente entre percibir algo y recordarlo o imaginarlo, y esa distinción es una de sus funciones básicas. Cuando falla, tiene nombre clínico y se llama alucinación.",
        },
        {
          forma: "clave",
          rotulo: "Lo que sí es cierto",
          frase: "Que imaginar una amenaza puede disparar una respuesta fisiológica parecida a la de una amenaza real. Anticipar una discusión sube el pulso de verdad. Pero eso no significa que el cerebro se confunda: significa que el sistema de alarma también responde a representaciones.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia entre las dos formulaciones parece un matiz y no lo es. La primera sugiere que uno puede reprogramarse imaginando cosas buenas, que es la lectura que hace mucha gente. La segunda dice algo más modesto: que preocuparse tiene un coste corporal real.",
        },
        {
          forma: "texto",
          texto:
            "El segundo problema del capítulo es el tratamiento del cortisol como villano. Se le llama la hormona del estrés y se sugiere que conviene tenerla baja, cuando el cortisol es imprescindible y su ausencia produce una enfermedad grave.",
        },
        {
          forma: "arte",
          texto:
            "El cortisol tiene un ritmo diario: sube por la mañana para despertarnos y baja por la noche. Regula el metabolismo, la inflamación y la presión arterial. Lo problemático no es su existencia sino la pérdida de ese ritmo y la exposición sostenida.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El matiz importa porque de la versión simplificada salen productos y consejos para bajar el cortisol que no tienen ningún sentido, y una cierta idea de que estar activado es siempre malo, cuando activarse ante un examen o una entrevista es exactamente lo que hay que hacer.",
        },
        {
          forma: "texto",
          texto:
            "La parte práctica del capítulo, en cambio, es sensata y coincide con lo que recomendaría cualquier profesional: dormir, moverse, respirar despacio, reducir la cafeína, poner límites a lo que uno acepta y aprender a distinguir lo que depende de uno de lo que no.",
        },
        {
          forma: "texto",
          texto:
            "Con el estrés explicado, el libro pasa al otro lado del sistema: no a lo que nos pone en alerta, sino a lo que nos produce placer.",
        },
        {
          forma: "texto",
          texto:
            "Antes de eso conviene rescatar la mejor observación clínica del capítulo, que no tiene nada de neuroquímica: que muchísima gente sostiene un nivel de alerta alto durante años sin darse cuenta, porque se ha acostumbrado y ha olvidado cómo era estar tranquila.",
        },
        {
          forma: "texto",
          texto:
            "El síntoma que ella describe como más revelador es lo que ocurre en vacaciones: gente que cae enferma el primer día de descanso, con gripe, migraña o dolor de espalda, después de haber aguantado meses sin ponerse mala ni un día.",
        },
        {
          forma: "texto",
          texto:
            "Ese fenómeno tiene nombre en la literatura y se ha estudiado con datos de bajas laborales y de encuestas de salud. La explicación más aceptada tiene que ver con la caída brusca del nivel de activación y con lo que eso hace a la respuesta inmunitaria.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una observación práctica que se deriva de eso y que el libro formula bien: si uno solo se entera de que estaba agotado cuando para, entonces la señal de agotamiento no sirve como aviso, y hay que fijarse en otras cosas.",
        },
        {
          forma: "texto",
          texto:
            "Las que propone son concretas y comprobables: cuánto se tarda en dormirse, si uno se despierta de madrugada dándole vueltas a algo, si aguanta media hora sin mirar el móvil y si recuerda la última vez que se rio de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí aparece la palabra que en los últimos diez años se ha convertido en la más usada y peor usada de la divulgación psicológica.",
        },
      ],
    },

    {
      titulo: "El circuito de la recompensa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La dopamina es un neurotransmisor que participa en el circuito de recompensa del cerebro, y también en el control del movimiento, en la regulación de la prolactina y en varios procesos cognitivos. Lo primero es lo único que aparece en la divulgación.",
        },
        {
          forma: "texto",
          texto:
            "El libro la presenta como la sustancia del placer y de la motivación, y explica con ella el mecanismo de las adicciones y el efecto de las pantallas. La descripción general es reconocible y la simplificación tiene un problema que conviene señalar.",
        },
        {
          forma: "clave",
          rotulo: "Lo que la investigación ha ido corrigiendo",
          frase: "Que la dopamina no es la molécula del placer sino la de querer. Se libera sobre todo en la anticipación, no en el disfrute. Es lo que hace desear algo, no lo que hace que ese algo guste, y esa distinción está bastante bien establecida.",
        },
        {
          forma: "texto",
          texto:
            "Eso explica mejor que la versión simplificada lo que le pasa a alguien enganchado a una aplicación: no es que disfrute cada vez que la abre, es que siente la necesidad de abrirla. El querer y el gustar se separan, y eso es exactamente una adicción.",
        },
        {
          forma: "texto",
          texto:
            "El libro describe bien un mecanismo concreto que sí está documentado: la recompensa variable. Un sistema que a veces da algo interesante y a veces no engancha mucho más que uno que siempre da lo mismo, porque la incertidumbre mantiene la anticipación activa.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el principio de las máquinas tragaperras y también el de cualquier red social con actualización por deslizamiento: no se sabe qué va a aparecer, y esa ignorancia es lo que mantiene el dedo moviéndose durante cuarenta minutos.",
        },
        {
          forma: "arte",
          texto:
            "Su recomendación de fondo —recuperar la capacidad de esperar, tolerar el aburrimiento, retrasar recompensas pequeñas— es razonable y coincide con lo que proponen investigadores serios de la atención, aunque el marco de la dopamina con el que se justifica sea más flojo que la recomendación.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Donde el capítulo se pasa de frenada es en la idea de que se puede quedar el sistema quemado por exceso de estímulo y que hay que hacer una desintoxicación. La expresión ayuno de dopamina se ha popularizado y no describe ningún proceso fisiológico real.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí ocurre y está descrito es una regulación a la baja de receptores ante estimulación repetida, que es un fenómeno mucho más específico y que no se corrige pasando un fin de semana sin móvil, por útil que sea pasar un fin de semana sin móvil.",
        },
        {
          forma: "texto",
          texto:
            "El libro dedica también atención al consumo de pornografía y a su efecto sobre el deseo y las relaciones, un asunto sobre el que hay literatura creciente y bastante discutida, y donde su tratamiento es más categórico de lo que la evidencia permite.",
        },
        {
          forma: "clave",
          rotulo: "El problema del esquema de las cuatro hormonas",
          frase: "El libro organiza el bienestar en torno a cortisol, dopamina, oxitocina y serotonina, asignando una emoción a cada una. Es un esquema pedagógico cómodo y no es así como funciona el cerebro: cada una de esas sustancias participa en decenas de procesos distintos.",
        },
        {
          forma: "texto",
          texto:
            "La serotonina es el ejemplo más claro. Durante décadas se dijo que la depresión era un déficit de serotonina, y esa explicación se ha ido abandonando: una revisión amplia publicada en 2022 concluyó que no hay pruebas consistentes que la sostengan.",
        },
        {
          forma: "texto",
          texto:
            "Eso no significa que los antidepresivos que actúan sobre la serotonina no funcionen: hay evidencia de que en depresión moderada y grave son eficaces. Significa que no funcionan corrigiendo un déficit, y que la explicación popular del desequilibrio químico está superada.",
        },
        {
          forma: "arte",
          texto:
            "El libro repite esa explicación popular, que es la que estaba en los manuales de divulgación cuando él se escribió, y que conviene leer sabiendo que la propia psiquiatría se ha desmarcado de ella en los últimos años.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Nada de esto convierte el libro en un libro malo. Lo convierte en un libro de divulgación de 2018 escrito con el vocabulario de la divulgación de 2018, con las virtudes y los límites de ese género.",
        },
        {
          forma: "texto",
          texto:
            "La tercera parte, en cambio, es la mejor y la que menos depende de la neuroquímica, porque habla de personas.",
        },
        {
          forma: "texto",
          texto:
            "Antes de cerrar este capítulo merece la pena señalar una asimetría curiosa del libro: la parte que peor sostiene científicamente es la que más se ha citado, y la que mejor sostiene —la psicológica, la de las relaciones y la infancia— es la que menos se comenta.",
        },
        {
          forma: "texto",
          texto:
            "Eso pasa con casi toda la divulgación que usa el cerebro como aval. Decir que algo activa la dopamina suena más serio que decir que a la gente le cuesta esperar, aunque la segunda afirmación esté mejor establecida que la primera.",
        },
        {
          forma: "texto",
          texto:
            "Es un fenómeno con nombre en la investigación sobre comunicación científica: añadir una explicación neurocientífica irrelevante a un texto psicológico hace que los lectores lo juzguen más convincente, aunque la explicación no aporte nada al argumento.",
        },
        {
          forma: "texto",
          texto:
            "Sabiendo eso, la manera sensata de leer este libro es al revés de como se lee: saltarse los nombres de las moléculas y quedarse con las descripciones de conducta, que es donde la autora tiene veinte años de consulta detrás.",
        },
        {
          forma: "texto",
          texto:
            "Y de por qué unas nos dejan mejor de lo que nos encontraron y otras nos dejan agotados.",
        },
      ],
    },

    {
      titulo: "Personas vitamina",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La expresión que ha hecho fortuna es la de personas vitamina: aquellas cuya compañía deja a uno con más energía de la que tenía antes de verlas. El libro la contrapone a las que producen el efecto inverso, a las que llama tóxicas.",
        },
        {
          forma: "texto",
          texto:
            "La descripción es reconocible y por eso ha calado tanto. Casi cualquiera puede hacer la lista: personas con las que se sale del café con ganas de hacer cosas, y personas después de las cuales hay que echarse una siesta.",
        },
        {
          forma: "clave",
          rotulo: "El reparo con la palabra tóxica",
          frase: "No es un concepto clínico ni tiene definición operativa. Etiqueta a la persona entera en lugar de describir una conducta concreta, y una vez puesta la etiqueta no queda nada que hablar, porque las personas tóxicas no se conversan, se eliminan.",
        },
        {
          forma: "texto",
          texto:
            "Esa lógica funciona bien para relaciones que efectivamente hay que cortar y funciona fatal para casi todo lo demás. La mayoría de los conflictos son entre dos personas normales que hacen cosas concretas que molestan, y eso se habla, no se diagnostica.",
        },
        {
          forma: "texto",
          texto:
            "El libro también reconoce el matiz —dice que a veces el tóxico es uno mismo— y aun así el término, sacado del libro y suelto en las redes, se ha convertido en una manera cómoda de no revisar la propia parte en ningún conflicto.",
        },
        {
          forma: "texto",
          texto:
            "La parte de oxitocina que sostiene ese capítulo repite el esquema simplificado: la llama la hormona del amor y del vínculo, cuando participa también en el parto, en la lactancia, en la respuesta al estrés y en conductas que no tienen nada de amables.",
        },
        {
          forma: "arte",
          texto:
            "Hay investigación que asocia la oxitocina con el favoritismo hacia el propio grupo y con más hostilidad hacia los de fuera, lo que hace que llamarla hormona del amor sea, en el mejor de los casos, una descripción muy parcial.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El contenido psicológico del capítulo, en cambio, es sólido y es lo mejor del libro. La idea de que las reacciones desproporcionadas de un adulto suelen apuntar a algo antiguo está bien establecida y es el material con el que trabaja cualquier terapia.",
        },
        {
          forma: "texto",
          texto:
            "Su formulación práctica es útil: cuando una situación produce una reacción claramente mayor de lo que merece, conviene preguntarse a qué se parece eso, en lugar de discutir sobre el asunto concreto que la ha disparado.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo sobre el perdón es también de los mejores, y lo plantea sin misticismo: perdonar no es decir que lo que pasó estuvo bien ni implica reconciliarse con nadie. Es dejar de gastar recursos en un rencor que solo consume a quien lo sostiene.",
        },
        {
          forma: "clave",
          rotulo: "La distinción que hace bien",
          frase: "Entre perdonar y reconciliarse. Se puede perdonar a alguien y no volver a verlo nunca, y eso es a menudo lo más sano. Confundir las dos cosas es lo que hace que mucha gente se niegue a perdonar, porque cree que perdonar la obliga a volver.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un tercer bloque práctico sobre la atención que resiste bien: la observación de que casi nadie está donde está, que la mente pasa buena parte del día en el futuro anticipando y en el pasado rumiando, y que eso tiene un coste medible en bienestar.",
        },
        {
          forma: "texto",
          texto:
            "Ese punto tiene respaldo empírico razonable. Un trabajo bastante citado con miles de participantes muestreados a lo largo del día encontró que la gente estaba pensando en algo distinto de lo que hacía casi la mitad del tiempo, y que en esos momentos se sentía peor.",
        },
        {
          forma: "arte",
          texto:
            "Lo interesante de ese estudio es la dirección: no era que se distrajeran porque estaban mal, sino que estar distraído precedía a estar peor, incluso cuando lo que se hacía era aburrido. Distraerse de una tarea desagradable tampoco mejoraba el ánimo.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Sobre eso el libro construye su parte final de recomendaciones, que son las de siempre y no por repetidas son malas: agradecer por escrito, dormir, moverse, cuidar los vínculos, poner límites, buscar sentido en lo que se hace y pedir ayuda cuando hace falta.",
        },
        {
          forma: "texto",
          texto:
            "Queda un último asunto, que es el más delicado del libro y el que más discusión ha generado entre profesionales.",
        },
        {
          forma: "texto",
          texto:
            "Antes conviene añadir una parte del capítulo que se pasa por alto y que es de las más útiles: su descripción de los límites. Sostiene que mucha gente confunde ser buena persona con no saber decir que no, y que eso produce un agotamiento silencioso y crónico.",
        },
        {
          forma: "texto",
          texto:
            "Su observación de consulta es que quien nunca dice que no no acaba siendo más querido: acaba siendo el que siempre está disponible, y en algún momento estalla por algo pequeño y desproporcionado que sorprende a todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "Y da un criterio práctico para distinguir cuándo un vínculo compensa: no si la persona nos cae bien, sino cómo estamos las horas siguientes a haberla visto. Es un criterio conductual, comprobable y bastante más fiable que cualquier etiqueta.",
        },
        {
          forma: "texto",
          texto:
            "Esa parte, la de los vínculos, coincide con lo que sí está muy bien establecido en investigación: el estudio longitudinal de Harvard, que lleva más de ochenta años siguiendo a las mismas familias, encontró que la calidad de las relaciones es el mejor predictor de salud y bienestar a largo plazo.",
        },
        {
          forma: "texto",
          texto:
            "Mejor que el colesterol, mejor que los ingresos y mejor que la fama profesional. Es de los pocos hallazgos de la psicología de las últimas décadas que se sostienen con datos de ochenta años, y encaja bien con lo que el libro propone en esta parte.",
        },
        {
          forma: "texto",
          texto:
            "El que tiene que ver con el optimismo y con lo que se le puede pedir a la actitud de una persona.",
        },
      ],
    },

    {
      titulo: "La psiquiatra que dice que vayas al psiquiatra",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El libro sostiene que el optimismo es en parte entrenable, y eso tiene respaldo: la manera en que alguien interpreta lo que le pasa se puede modificar, y ese es el fundamento de la terapia cognitiva, que es de los tratamientos psicológicos mejor evaluados que existen.",
        },
        {
          forma: "texto",
          texto:
            "El problema no es esa afirmación sino su vecindad. En un libro titulado cómo hacer que te pasen cosas buenas, escrito por una médica, la insistencia en la actitud puede leerse como una promesa de que la actitud influye en lo que a uno le ocurre.",
        },
        {
          forma: "clave",
          rotulo: "Por qué eso es delicado",
          frase: "Porque a este libro llegan personas con cáncer, con enfermedades crónicas y con duelos. Sugerirles que su estado emocional influye en su enfermedad les añade una responsabilidad que no les corresponde, y la evidencia de que la actitud modifique el curso de un cáncer es muy débil.",
        },
        {
          forma: "texto",
          texto:
            "La autora no afirma eso de forma explícita y en algún pasaje lo matiza, y el conjunto empuja en esa dirección. Es el riesgo característico de este género y merece decirse en un resumen honesto, porque el lector que peor lo está pasando es el más expuesto.",
        },
        {
          forma: "texto",
          texto:
            "El segundo reparo general es la ausencia de referencias en la edición original. Un libro que afirma continuamente qué hace el cerebro, escrito con autoridad médica y leído por un millón de personas, debería permitir comprobar de dónde sale cada afirmación.",
        },
        {
          forma: "texto",
          texto:
            "El tercero es de proporción entre lo individual y lo demás. El libro habla de estrés crónico sin apenas mencionar las causas que producen la mayor parte del estrés crónico de la población: la precariedad, las jornadas, los cuidados y el precio de la vivienda.",
        },
        {
          forma: "arte",
          texto:
            "Eso deja al lector con herramientas para gestionar un problema cuya causa está fuera de su alcance, que es útil y es insuficiente. Respirar mejor no arregla dos trabajos, y presentar la respiración como la solución traslada al individuo un problema que no es suyo.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Ahora, lo que hay que ponerle a favor, que es más de lo que suelen reconocer sus críticos. El primero ya está dicho y es el más importante: normalizó ir al psiquiatra y al psicólogo en un país donde eso seguía siendo motivo de vergüenza.",
        },
        {
          forma: "texto",
          texto:
            "El segundo es que explicó la fisiología del estrés a gente que llevaba años yendo a urgencias con síntomas que nadie le había sabido nombrar, y esa explicación por sí sola reduce el miedo, que es una parte importante del propio síntoma.",
        },
        {
          forma: "texto",
          texto:
            "El tercero es que no promete milagros ni vende un método propio. Las recomendaciones que da son las que daría cualquier profesional razonable, y no hay detrás un curso, un suplemento ni un programa de pago.",
        },
        {
          forma: "clave",
          rotulo: "Lo que la gente cree y no es verdad",
          frase: "Lo primero, la frase que el libro repite más: el cerebro sí distingue entre lo real y lo imaginado. Lo que ocurre es que también reacciona a lo imaginado, que es una cosa bastante distinta y bastante menos espectacular.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: el cortisol no es una hormona mala que haya que mantener baja. Es imprescindible, sigue un ritmo diario y su ausencia produce una enfermedad grave. Lo perjudicial es la activación sostenida, no la sustancia.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: no hay cuatro hormonas de la felicidad con una emoción cada una. Es un esquema pedagógico útil para explicar y falso como descripción, porque cada una de esas moléculas participa en decenas de funciones distintas y a menudo contradictorias.",
        },
        {
          forma: "texto",
          texto:
            "Cuarto: la depresión no es un déficit de serotonina. Esa explicación se abandonó, una revisión amplia de 2022 no encontró pruebas consistentes que la sostuvieran, y los antidepresivos funcionan en depresión moderada y grave por mecanismos que no son ese.",
        },
        {
          forma: "arte",
          texto:
            "Y quinto: la dopamina no es la molécula del placer, es la del deseo. Se dispara anticipando y no disfrutando, y esa distinción explica mucho mejor por qué alguien puede pasarse dos horas en una aplicación que no le está gustando nada.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El balance justo: un libro de divulgación con neurociencia simplificada hasta el error en varios puntos, sin referencias, con una tendencia a poner en el individuo la solución de problemas que no lo son.",
        },
        {
          forma: "texto",
          texto:
            "Y que ha explicado a un millón de personas qué le pasa a su cuerpo cuando lleva dos años en alerta, y les ha dicho que pedir ayuda es lo razonable.",
        },
        {
          forma: "texto",
          texto:
            "Lo segundo pesa bastante más de lo que su reputación en los círculos profesionales sugiere.",
        },
        {
          forma: "texto",
          texto:
            "Quien quiera seguir por ahí con material más sólido tiene por dónde. Sobre el estrés, el libro de Robert Sapolsky sobre por qué las cebras no tienen úlcera explica lo mismo con treinta años de investigación propia detrás y con las referencias puestas.",
        },
        {
          forma: "texto",
          texto:
            "Sobre atención y pantallas, hay trabajo académico reciente bastante más matizado que la versión de la dopamina, incluida investigación que discute cuánto daño hacen realmente las redes sociales y que encuentra efectos más pequeños de lo que suele decirse.",
        },
        {
          forma: "texto",
          texto:
            "Y para lo que este libro hace bien —explicarle a alguien que no sabe nada qué le está pasando en el cuerpo y convencerlo de que pida ayuda— no hay tantos sustitutos en español, y esa es la razón honesta de su éxito.",
        },
        {
          forma: "texto",
          texto:
            "La manera de leerlo, entonces, es como lo que es: no un libro de neurociencia, sino un libro de una psiquiatra que ha visto a mucha gente asustada y ha escrito lo que le dice a esa gente en la consulta.",
        },
      ],
    },
  ],
};

export const INTRO_PSICOANALISIS: Resumen = {
  id: "intro-psicoanalisis",
  titulo: "Introducción al psicoanálisis",
  autor: "Sigmund Freud",
  ano: 1917,
  gancho:
    "Veintiocho clases en las que un médico vienés intenta convencer a una sala llena de escépticos de que no somos dueños de nuestra propia cabeza.",
  porQue:
    "Es Freud explicándose a sí mismo para gente que no sabe nada, y por eso es la puerta de entrada. También es el sitio donde se ve mejor qué se sostiene de todo aquello y qué no.",
  partes: [
    {
      titulo: "El anfiteatro de la Universidad de Viena",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Viena, un sábado por la noche del invierno de 1915. En un aula de la universidad hay médicos, estudiantes, algunas mujeres —cosa poco habitual entonces— y curiosos que han venido a ver al hombre del que se habla. En la tarima, un señor de cincuenta y nueve años con barba blanca y un puro.",
        },
        {
          forma: "texto",
          texto:
            "Empieza avisando de tres cosas incómodas. Que no va a poder demostrarles nada, porque el material de su ciencia son conversaciones privadas que nadie puede presenciar. Que casi todo lo que va a decir les va a repugnar. Y que aun así les pide que le escuchen hasta el final.",
        },
        {
          forma: "clave",
          rotulo: "Qué es este libro exactamente",
          frase: "La transcripción de veintiocho clases que Freud dio en la Universidad de Viena durante dos cursos de invierno, entre 1915 y 1917, para un público que no era de especialistas. Por eso es el libro suyo que se entiende sin haber leído ningún otro.",
        },
        {
          forma: "texto",
          texto:
            "Están divididas en tres partes de tamaños muy distintos. Cuatro clases sobre los actos fallidos, once sobre los sueños y trece sobre las neurosis. Ese orden no es casual: va de lo que le pasa a cualquiera a lo que le pasa a un enfermo, y de lo trivial a lo grave.",
        },
        {
          forma: "texto",
          texto:
            "Quien hablaba se llamaba Sigmund Freud, había nacido en 1856 en un pueblo de Moravia y se había criado en Viena desde los cuatro años. Se licenció en Medicina en 1881 y su formación era de neurólogo, no de psiquiatra: había empezado estudiando las células nerviosas.",
        },
        {
          forma: "texto",
          texto:
            "Su primera fama fue mala. En 1884 publicó un trabajo entusiasta sobre la cocaína como remedio para varias dolencias y como sustituto de la morfina, y un amigo suyo al que se la recomendó acabó gravemente adicto y murió pocos años después.",
        },
        {
          forma: "arte",
          texto:
            "En 1885 pasó unos meses en París, en el hospital de la Salpêtrière, viendo trabajar a Charcot con mujeres diagnosticadas de histeria. Charcot las hipnotizaba delante del público y les hacía aparecer y desaparecer parálisis, y aquello le dejó una idea fija en la cabeza.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "La idea era esta: si un síntoma físico se puede producir y quitar con palabras, entonces ese síntoma no viene de una lesión del nervio, viene de otro sitio. Y ese otro sitio tenía que ser algo que ocurre en la mente sin que la persona lo sepa.",
        },
        {
          forma: "texto",
          texto:
            "De vuelta en Viena empezó a trabajar con un colega mayor que él, Josef Breuer, que le había contado un caso extraordinario: una paciente joven cuyos síntomas desaparecían uno a uno cuando conseguía recordar y contar la escena en la que habían aparecido por primera vez.",
        },
        {
          forma: "texto",
          texto:
            "Aquella paciente, a la que llamaron Anna O., fue quien puso el nombre al método. Lo llamó la cura por la palabra, y también deshollinar la chimenea. Se llamaba en realidad Bertha Pappenheim y volveremos a ella, porque su historia no acabó como suele contarse.",
        },
        {
          forma: "texto",
          texto:
            "Freud abandonó pronto la hipnosis por dos motivos: no todo el mundo era hipnotizable y él era bastante malo hipnotizando. La sustituyó por algo más raro: pedirle al paciente que se tumbara y dijera todo lo que se le pasara por la cabeza, sin filtrar ni ordenar nada.",
        },
        {
          forma: "texto",
          texto:
            "Eso es la asociación libre y es el instrumento central de todo el edificio. La regla es que hay que decirlo aunque parezca absurdo, vergonzoso, irrelevante o desagradable, y sobre todo cuando parezca irrelevante, porque ahí es donde él sospecha que está lo importante.",
        },
        {
          forma: "texto",
          texto:
            "En 1900 publicó La interpretación de los sueños, que hoy se considera su obra mayor y que entonces vendió unos trescientos cincuenta ejemplares en seis años. Tardó una década larga en tener discípulos, revista propia y congresos internacionales.",
        },
        {
          forma: "texto",
          texto:
            "Conviene desmontar aquí una leyenda: la del genio solitario rechazado por todos. Para 1910 el psicoanálisis era un movimiento internacional organizado, con asociación, publicaciones y filiales en varios países, y Freud fue propuesto para el Nobel más de una vez.",
        },
        {
          forma: "texto",
          texto:
            "Su tesis central, la que estas veintiocho clases quieren hacer tragar, se puede decir en una frase: que la mayor parte de lo que ocurre en nuestra mente no es consciente, y que lo inconsciente no es un desván de trastos olvidados sino algo activo que empuja.",
        },
        {
          forma: "texto",
          texto:
            "Tampoco inventó él la idea del inconsciente. Estaba ya en Schopenhauer, en Nietzsche y en toda una tradición alemana del siglo diecinueve. Lo que hizo Freud fue convertirla en un instrumento clínico: en algo que se explora, se interpreta y supuestamente se cura.",
        },
        {
          forma: "arte",
          texto:
            "En la clase dieciocho lo sitúa en una serie con dos golpes anteriores al orgullo humano. Copérnico nos sacó del centro del universo. Darwin nos sacó del centro de la creación. Y el psicoanálisis, dice, viene a demostrar que el yo no es dueño ni de su propia casa.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "El problema de partida es cómo demostrar algo así. No se puede enseñar un inconsciente en un microscopio ni medirlo con un aparato, y Freud lo sabe, así que hace algo estratégicamente muy inteligente en la primera clase.",
        },
        {
          forma: "texto",
          texto:
            "En vez de empezar por los enfermos, empieza por el público. Elige un fenómeno que le ha pasado a todo el que está en la sala, que no tiene nada de patológico y que todo el mundo considera insignificante, y se pasa cuatro clases enteras analizándolo.",
        },
        {
          forma: "texto",
          texto:
            "Su cálculo es que si consigue que acepten su explicación de algo tan pequeño, habrán aceptado sin darse cuenta el principio entero: que hay intenciones nuestras que actúan sin que las conozcamos y que se abren paso cuando bajamos la guardia.",
        },
        {
          forma: "texto",
          texto:
            "El fenómeno que elige es lo que en español llamamos actos fallidos.",
        },
        {
          forma: "texto",
          texto:
            "Equivocarse de palabra, olvidar un nombre, perder una llave.",
        },
      ],
    },

    {
      titulo: "Los actos fallidos",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El ejemplo con el que abre es real y es de la política austriaca. El presidente de la cámara de diputados inaugura una sesión y, en vez de declararla abierta, declara solemnemente que queda cerrada. Se corrige, todo el mundo se ríe y la sesión continúa.",
        },
        {
          forma: "texto",
          texto:
            "La explicación corriente es que se ha trabucado, que estaba cansado o que las dos palabras se parecen. Freud pregunta entonces por qué se equivocó precisamente en esa palabra y precisamente en ese sentido, y no al revés, y por qué justo ese día.",
        },
        {
          forma: "clave",
          rotulo: "Su tesis sobre las equivocaciones",
          frase: "Que no son fallos del mecanismo sino actos con sentido propio. El presidente no esperaba nada bueno de aquella sesión y quería que terminase antes de empezar; esa intención existía y encontró la rendija para salir. Un acto fallido es un compromiso entre dos intenciones.",
        },
        {
          forma: "texto",
          texto:
            "Sobre eso construye la mecánica que va a usar en todo el libro. Hay una intención consciente —abrir la sesión— y otra que la persona no reconoce ni reconocería —acabar con esto cuanto antes—. La segunda no puede salir de frente y sale de lado.",
        },
        {
          forma: "texto",
          texto:
            "Los olvidos los explica igual. No olvidamos al azar: olvidamos preferentemente el nombre de alguien que nos cae mal, la cita que no queríamos tener, el encargo que nos fastidiaba. Y recordamos con una precisión sospechosa lo que sí nos apetecía.",
        },
        {
          forma: "texto",
          texto:
            "Y trae ejemplos que cualquiera reconoce. La llave de casa que se pierde precisamente el día en que uno tenía que volver a un sitio al que no quería volver. El objeto que se rompe justo cuando su dueño ha dejado de quererlo. El nombre del acreedor que no aparece.",
        },
        {
          forma: "arte",
          texto:
            "Hay una categoría que le interesa especialmente: los actos sintomáticos, esos gestos pequeños que se hacen sin darles importancia. Manosear un anillo, hacer bolitas con el pan, ordenar los objetos de la mesa mientras se habla de algo delicado. Para él, todos hablan.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "La prueba que ofrece es siempre la misma y es también la debilidad del método. Le pregunta a la persona qué se le ocurre a propósito de la palabra equivocada, y de esas ocurrencias sale la explicación. Es decir: no hay prueba independiente del testimonio interpretado.",
        },
        {
          forma: "texto",
          texto:
            "Freud es consciente y dedica una clase entera a defenderse de esa objeción. Su argumento es que la interpretación se confirma cuando el paciente la reconoce, y que a menudo la reconoce con vergüenza o con risa, que es la señal de que ha dado en algo.",
        },
        {
          forma: "texto",
          texto:
            "El problema es que si la aceptación confirma la interpretación y el rechazo se explica como resistencia, no hay ningún resultado posible que la desmienta. Esa objeción se la haría Karl Popper cuarenta años después y sigue siendo la más citada contra el psicoanálisis.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir que el filósofo Adolf Grünbaum, que dedicó su vida a esto, sostenía que Popper se equivocaba: que muchas afirmaciones de Freud sí son comprobables, y que el problema es que se han comprobado y no han salido bien. Es una crítica peor para Freud, no mejor.",
        },
        {
          forma: "texto",
          texto:
            "En cuanto a los lapsus concretos, la psicolingüística los ha estudiado en serio desde los años setenta y tiene explicaciones de otro tipo: cómo se organiza la selección de palabras en el cerebro, qué sonidos compiten y cómo se cuelan los que están activados.",
        },
        {
          forma: "texto",
          texto:
            "Un experimento clásico consiguió provocar lapsus en laboratorio manipulando lo que los participantes acababan de leer, y las palabras que salían no tenían ningún contenido reprimido detrás: simplemente estaban activadas. Eso explica la mayoría de las equivocaciones.",
        },
        {
          forma: "texto",
          texto:
            "Lo cual no cierra el asunto del todo. Hay experimentos que sugieren que la ansiedad y las preocupaciones sí aumentan la probabilidad de que se cuele precisamente el tema que preocupa, que es una versión mucho más pequeña y más comprobable de lo que decía Freud.",
        },
        {
          forma: "texto",
          texto:
            "El resumen honrado sería: la idea de que todo lapsus esconde un deseo reprimido no se sostiene, y la idea de que a veces se cuela lo que uno tiene en la cabeza y no dice, sí. Freud generalizó muchísimo a partir de un fenómeno real y bastante más modesto.",
        },
        {
          forma: "texto",
          texto:
            "Aun así, las cuatro clases funcionan como él quería. Al terminarlas, un lector que empezó escéptico ya ha aceptado que hay procesos mentales que no controla, y eso es todo lo que Freud necesitaba antes de pasar a lo siguiente.",
        },
        {
          forma: "texto",
          texto:
            "Porque lo siguiente ocupa once clases, más de un tercio del libro, y es la parte de la que él estaba más orgulloso.",
        },
        {
          forma: "texto",
          texto:
            "Aquí conviene apuntar un detalle de vocabulario que evita malentendidos. Cuando Freud habla de sexualidad no habla solo de genitalidad: incluye todo el campo del placer corporal y del apego, desde la lactancia hasta el enamoramiento adulto.",
        },
        {
          forma: "texto",
          texto:
            "Esa ampliación del término es lo que produjo el escándalo de su época y también la caricatura de que en el psicoanálisis todo es sexo. Él usaba una palabra estrecha para un concepto ancho, y pagó el precio de esa elección durante un siglo.",
        },
        {
          forma: "texto",
          texto:
            "También conviene saber qué no hay en este libro. No aparecen el ello, el yo y el superyó, que es el esquema por el que se le conoce popularmente. Eso llegó seis años después, en 1923, y a estas clases se le añadió en un volumen posterior.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí hay, y en abundancia, es material onírico.",
        },
        {
          forma: "texto",
          texto:
            "Sueños suyos, de sus pacientes y de gente que se los mandaba por carta.",
        },
      ],
    },

    {
      titulo: "El taller de los sueños",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Freud empieza esta parte defendiendo que un sueño no es basura mental producida por un cerebro medio dormido, que era la explicación médica de su época. Sostiene que es un producto psíquico completo, con sentido, y que se puede traducir.",
        },
        {
          forma: "texto",
          texto:
            "Para eso introduce la distinción de la que depende todo lo demás. El contenido manifiesto es lo que uno recuerda al despertarse: la escena absurda, los personajes cambiados, el sitio que es dos sitios a la vez. El contenido latente es lo que ese material significa.",
        },
        {
          forma: "clave",
          rotulo: "Su tesis sobre para qué sirve un sueño",
          frase: "Todo sueño es la realización de un deseo. En los niños se ve directamente: el que se quedó sin fresas sueña que se las come. En los adultos el deseo está disfrazado, porque es un deseo que no se admite ni dormido, y el disfraz es precisamente lo que hay que descifrar.",
        },
        {
          forma: "texto",
          texto:
            "El mecanismo que produce el disfraz lo llama el trabajo del sueño, y describe cuatro operaciones. La primera es la condensación: una sola figura del sueño reúne rasgos de tres personas distintas, y por eso los sueños son tan cortos comparados con lo que dan de sí al interpretarlos.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es el desplazamiento, que es la más útil de las cuatro. Lo importante del sueño aparece como un detalle secundario, y lo que ocupa el centro de la escena es irrelevante. El afecto se ha mudado de sitio para despistar a quien vigila.",
        },
        {
          forma: "arte",
          texto:
            "La tercera es la figurabilidad: una idea abstracta tiene que convertirse en imagen, porque el sueño no puede decir sino solo mostrar. Y la cuarta es la elaboración secundaria, que es el retoque que hace la mente al despertar para que aquello parezca una historia con pies y cabeza.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El capítulo de los símbolos es el que más ha hecho por su fama y el que él mismo trata con más cautela. Reconoce que hay símbolos que se repiten entre personas y culturas —cajas, cuartos, escaleras, armas— y advierte de que interpretar solo por símbolos es un atajo peligroso.",
        },
        {
          forma: "texto",
          texto:
            "Insiste en que lo que manda son las ocurrencias del soñante y no el diccionario. Un mismo objeto significa cosas distintas para dos personas distintas, y quien interpreta sueños con un manual de símbolos, dice, está haciendo adivinación y no psicoanálisis.",
        },
        {
          forma: "texto",
          texto:
            "Esa advertencia se perdió por completo en cuanto el psicoanálisis se hizo popular. Los libros de interpretación de sueños que se venden hoy en cualquier quiosco son exactamente lo que Freud desaconsejaba, y llevan su nombre en la contraportada.",
        },
        {
          forma: "texto",
          texto:
            "Dedica también una clase entera a los sueños de angustia y a las pesadillas, que son el problema más obvio de su teoría: si todo sueño realiza un deseo, cómo se explica que uno sueñe que se le muere un hijo o que le persiguen.",
        },
        {
          forma: "texto",
          texto:
            "Su respuesta es que el deseo está ahí pero pertenece a una parte de la persona que la otra parte rechaza, y que la angustia es la reacción de la censura al ver aparecer aquello. Es una explicación que salva la teoría y que resulta bastante difícil de comprobar.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, lo que ha pasado con todo esto desde 1917. En 1953 se descubrió el sueño REM, la fase en la que se sueña más, y con ella un hecho incómodo: soñamos en episodios regulares cada noventa minutos, tengamos o no deseos reprimidos que tramitar.",
        },
        {
          forma: "texto",
          texto:
            "En 1977, dos investigadores de Harvard propusieron el modelo de activación y síntesis: el tronco cerebral dispara señales aleatorias durante el sueño REM, la corteza recibe ese ruido e intenta montar una historia con él, y de ahí sale el disparate característico.",
        },
        {
          forma: "texto",
          texto:
            "Ese modelo invierte a Freud del todo. Para él, lo raro del sueño es un disfraz deliberado que oculta un sentido; para el modelo neurofisiológico, lo raro del sueño es que no hay nada que ocultar y el cerebro está haciendo lo que puede con material desordenado.",
        },
        {
          forma: "texto",
          texto:
            "El asunto no está cerrado. El neuropsicólogo Mark Solms mostró en los años noventa, estudiando a pacientes con lesiones, que se puede perder el sueño REM y seguir soñando, y que dejar de soñar se asocia a daños en circuitos de motivación y de deseo.",
        },
        {
          forma: "texto",
          texto:
            "Eso devuelve al deseo un papel en el asunto y ha dado lugar a un campo entero, el de la neuropsicoanálisis, que no goza de consenso. Lo que sí puede decirse es que la afirmación fuerte de Freud —todo sueño realiza un deseo disfrazado— no tiene apoyo empírico.",
        },
        {
          forma: "texto",
          texto:
            "Y lo que sí ha aguantado es más modesto: que el contenido de los sueños tiene que ver con lo que preocupa a la persona en la vigilia, cosa que los estudios de contenido onírico confirman de sobra, y que ya no necesita ninguna teoría de la censura para explicarse.",
        },
        {
          forma: "texto",
          texto:
            "Queda una cosa del método que sigue siendo valiosa aunque la teoría no lo sea. La idea de escuchar el relato de alguien buscando lo que se repite, lo que se evita y lo que aparece de lado, es una técnica de escucha que ha sobrevivido a todas sus refutaciones.",
        },
        {
          forma: "texto",
          texto:
            "Con las once clases de los sueños termina la parte del libro que Freud consideraba demostrativa. La tercera parte es la clínica, y es donde estaba lo que a él de verdad le importaba.",
        },
        {
          forma: "texto",
          texto:
            "Trece clases sobre las neurosis, escritas por alguien que llevaba veinticinco años recibiendo pacientes.",
        },
        {
          forma: "texto",
          texto:
            "En un piso de la calle Berggasse.",
        },
      ],
    },

    {
      titulo: "El diván de Berggasse 19",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La consulta estaba en el número 19 de la Berggasse, en el entresuelo de un edificio corriente de Viena, y Freud atendió allí desde 1891 hasta 1938. Era un despacho abarrotado de estatuillas egipcias y griegas, con alfombras persas cubriendo el diván.",
        },
        {
          forma: "texto",
          texto:
            "El montaje era el que todo el mundo conoce: el paciente tumbado y él sentado detrás, fuera de su vista. La razón que daba era práctica y bastante desarmante: que no soportaba que le miraran a la cara ocho horas al día, todos los días.",
        },
        {
          forma: "texto",
          texto:
            "La otra razón sí era técnica. Sin la cara del analista delante, el paciente no puede ir corrigiendo lo que dice según la reacción que ve, y las ocurrencias salen menos vigiladas. Cuatro o cinco sesiones por semana, durante años.",
        },
        {
          forma: "clave",
          rotulo: "Su explicación de qué es un síntoma",
          frase: "Un compromiso. El deseo reprimido no desaparece: sigue empujando y encuentra una salida deformada. La parálisis, la fobia o el ritual obsesivo son a la vez la satisfacción del deseo y su castigo, y por eso el enfermo se aferra a ellos aunque le arruinen la vida.",
        },
        {
          forma: "texto",
          texto:
            "El motor de todo el sistema es la represión, que él describe como un empujar activo y continuo, no como un olvido. Mantener algo fuera de la conciencia cuesta energía, y esa energía gastada es lo que explica el cansancio y el empobrecimiento de la vida de un neurótico.",
        },
        {
          forma: "texto",
          texto:
            "Su teoría del desarrollo es la que más ruido ha hecho: que la sexualidad no empieza en la pubertad sino en la primera infancia, y que atraviesa fases —oral, anal, fálica— en las que el placer se localiza en zonas distintas del cuerpo.",
        },
        {
          forma: "texto",
          texto:
            "Que un bebé que mama obtiene placer de ello, o que un niño de dos años se interese por sus heces, es una observación que hoy no escandaliza a nadie. En 1917 era una obscenidad, y las clases donde lo explica están escritas con la prudencia de quien sabe que va a haber portazos.",
        },
        {
          forma: "arte",
          texto:
            "Sobre eso monta el complejo de Edipo: la idea de que el niño desea en exclusiva a la madre y vive al padre como rival, y que la salida de ese conflicto organiza la personalidad adulta. Le puso el nombre de una tragedia griega y es lo primero que se cita de él.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Su versión femenina es la parte más floja de todo el edificio y prácticamente nadie la defiende hoy. Freud reconoció por escrito que no entendía la sexualidad femenina y llegó a llamarla un continente oscuro, y la envidia del pene fue abandonada incluso dentro del psicoanálisis.",
        },
        {
          forma: "texto",
          texto:
            "Los dos conceptos clínicos que sí han sobrevivido son la resistencia y la transferencia, y merecen explicarse porque cualquiera que haya ido a terapia los ha visto funcionar aunque no los llame así.",
        },
        {
          forma: "texto",
          texto:
            "La resistencia es que el paciente, que ha pagado y ha venido voluntariamente, se dedica sin darse cuenta a impedir el trabajo: llega tarde, se queda en blanco justo en el punto delicado, cambia de tema, se enfada con el terapeuta o decide de golpe que ya está curado.",
        },
        {
          forma: "texto",
          texto:
            "La transferencia es que el paciente empieza a sentir hacia el analista cosas que no vienen de él: se enamora, le odia, le teme, espera de él lo que esperaba de su padre. Freud lo descubrió como un estorbo y acabó convirtiéndolo en el instrumento principal del tratamiento.",
        },
        {
          forma: "texto",
          texto:
            "Su razonamiento es bueno: si el paciente repite dentro de la consulta el patrón que arruina sus relaciones fuera, entonces ese patrón está ahí, en directo, para trabajarlo, en vez de tener que fiarse de lo que él cuenta sobre su vida.",
        },
        {
          forma: "texto",
          texto:
            "Ahora las pruebas, que es donde el asunto se cae. Todo el edificio se apoya en un puñado de casos descritos por el propio terapeuta, sin grupo de comparación, sin verificación independiente y sin seguimiento publicado. Son unos pocos historiales, y no todos acabaron bien.",
        },
        {
          forma: "texto",
          texto:
            "Anna O., el caso fundacional, no se curó. Bertha Pappenheim estuvo ingresada varias veces en los años siguientes al tratamiento con Breuer, cosa que no aparece en la versión publicada. Después rehízo su vida y llegó a ser una figura enorme del trabajo social alemán.",
        },
        {
          forma: "texto",
          texto:
            "El llamado Hombre de los Lobos, Serguéi Pankéiev, vivió hasta los noventa y dos años y pasó por tratamiento psicoanalítico casi toda su vida. En unas entrevistas de su vejez dijo que aquello no le había servido de nada y que la supuesta curación era una catástrofe.",
        },
        {
          forma: "texto",
          texto:
            "Y el caso Dora, el de una chica de diecisiete años a la que perseguía un amigo de la familia, se lee hoy con verdadera incomodidad. Freud le impuso una interpretación que ella rechazaba, y la paciente cortó el tratamiento y se fue, cosa que él tomó como una venganza.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un episodio central y muy discutido. En 1896 Freud sostuvo que la histeria venía de abusos sexuales reales sufridos en la infancia. Al año siguiente abandonó esa idea y la sustituyó por la de la fantasía infantil, y sobre por qué lo hizo se lleva discutiendo un siglo.",
        },
        {
          forma: "texto",
          texto:
            "En 1984, el investigador Jeffrey Masson sostuvo que fue una claudicación ante la presión social y que sirvió para tapar abusos reales durante décadas. Su tesis conspirativa no la comparten la mayoría de los historiadores, y el cambio sigue siendo el punto más delicado de su biografía.",
        },
        {
          forma: "texto",
          texto:
            "Las clases terminan en 1917, con la guerra en marcha y con Freud convencido de que estaba fundando una ciencia.",
        },
        {
          forma: "texto",
          texto:
            "Le quedaban veintidós años, un cáncer y una huida.",
        },
      ],
    },

    {
      titulo: "La casa de Maresfield Gardens",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1923, a los sesenta y siete años, le encontraron un tumor en el paladar. Fumaba unos veinte cigarros al día desde hacía décadas y nunca lo dejó del todo. Le operaron treinta y tres veces en dieciséis años y le pusieron una prótesis enorme que él llamaba el monstruo.",
        },
        {
          forma: "texto",
          texto:
            "Con aquella prótesis hablaba mal y comía peor. Las Nuevas lecciones de introducción al psicoanálisis, que escribió en 1933 como continuación de estas, nunca se pronunciaron: no podía dar una clase, y las publicó manteniendo la forma de lección por fidelidad al original.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle importa para quien busque el libro. Las lecciones de 1917 son las que se dieron de verdad y las que hay que leer primero; las de 1933 son un añadido escrito, con el esquema del ello, el yo y el superyó, y con un tono bastante más pesimista.",
        },
        {
          forma: "texto",
          texto:
            "En mayo de 1933, sus libros ardieron en la plaza de la Ópera de Berlín junto a los de Marx, Zweig y Einstein. Freud comentó que había progreso, porque en la Edad Media le habrían quemado a él y ahora se conformaban con quemar sus libros.",
        },
        {
          forma: "clave",
          rotulo: "Marzo de 1938",
          frase: "Alemania se anexionó Austria. La Gestapo registró el piso de la Berggasse y se llevó dinero; a su hija Anna la retuvieron un día entero para interrogarla. Freud tenía ochenta y un años, estaba enfermo y se había negado durante años a marcharse de Viena.",
        },
        {
          forma: "texto",
          texto:
            "Salió en junio, después de que se pagara el impuesto de fuga que el régimen cobraba a los judíos que emigraban y de que intervinieran su antigua paciente la princesa María Bonaparte y el embajador estadounidense. Cuatro de sus hermanas se quedaron y murieron en los campos.",
        },
        {
          forma: "arte",
          texto:
            "Se instaló en Londres, en el número 20 de Maresfield Gardens, en Hampstead. Le montaron el despacho igual que lo tenía en Viena, con las mismas estatuillas colocadas en el mismo orden sobre la mesa y el mismo diván con las mismas alfombras encima.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Murió allí el 23 de septiembre de 1939, tres semanas después de que empezara la guerra. El dolor se había vuelto insoportable, y su médico le administró morfina suficiente para no despertar, siguiendo un acuerdo que los dos habían pactado años antes.",
        },
        {
          forma: "texto",
          texto:
            "Aquella casa es hoy un museo y el diván sigue en su sitio. Se puede ir a verlo, y es una de las pocas ocasiones en que el mueble más famoso de una disciplina entera sigue existiendo y se puede mirar de cerca.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, el balance, que es lo que un lector de hoy necesita. Lo primero: la eficacia. El psicoanálisis clásico, cuatro o cinco sesiones semanales durante años, no tiene detrás ensayos clínicos que lo respalden, y no aparece en ninguna guía de tratamiento seria.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí tiene apoyo es la terapia psicodinámica, que salió de aquí pero es otra cosa: una sesión por semana, meses en vez de años, y objetivos acotados. Varios metaanálisis le encuentran efectos comparables a los de la terapia cognitivo-conductual en algunos trastornos.",
        },
        {
          forma: "texto",
          texto:
            "Lo segundo: la teoría de los sueños no se sostiene en su versión fuerte, la de los actos fallidos tampoco, y la represión como mecanismo específico para expulsar traumas de la memoria está muy discutida, sobre todo después del desastre de los recuerdos recuperados.",
        },
        {
          forma: "texto",
          texto:
            "Aquello ocurrió en los años ochenta y noventa: cientos de personas recuperaron en terapia recuerdos de abusos que resultaron ser falsos, con familias rotas y juicios de por medio. La investigación posterior demostró que se pueden implantar recuerdos con relativa facilidad.",
        },
        {
          forma: "texto",
          texto:
            "Lo tercero, y en su favor: la idea de que buena parte de lo que hacemos se decide fuera de la conciencia está hoy sobradamente demostrada. El inconsciente del que hablan los laboratorios no es el suyo —no está lleno de deseos prohibidos—, pero existe y decide mucho.",
        },
        {
          forma: "texto",
          texto:
            "También ha aguantado, por otra vía, que las relaciones tempranas moldean las adultas. Eso lo estudió la teoría del apego con métodos observacionales y datos, y llega a una conclusión parecida por un camino que Freud no habría reconocido como suyo.",
        },
        {
          forma: "texto",
          texto:
            "Y ha aguantado la transferencia como fenómeno clínico, que cualquier terapeuta de cualquier escuela reconoce, y el vocabulario entero de los mecanismos de defensa: negación, proyección, racionalización, sublimación. Eso lo usa hasta quien no cree ni una palabra del resto.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree y no es verdad, uno: que para Freud todo es sexo. Su concepto de sexualidad abarca el placer corporal y el vínculo desde la lactancia, y a partir de 1920 le añadió una pulsión de muerte que no tiene nada que ver con el asunto.",
        },
        {
          forma: "texto",
          texto:
            "Dos: que el ello, el yo y el superyó están en este libro. No están: son de 1923. Quien abra estas lecciones buscando ese esquema no lo va a encontrar por ninguna parte.",
        },
        {
          forma: "texto",
          texto:
            "Tres: que dijo que a veces un puro es solo un puro. No hay ninguna fuente de esa frase en su obra ni en los testimonios de quienes le trataron. Es una invención posterior, y bastante irónica, porque los puros acabaron matándolo.",
        },
        {
          forma: "texto",
          texto:
            "Y cuatro: que el psicoanálisis está muerto. Ha desaparecido casi por completo de las facultades de psicología y de las guías clínicas, y sigue vivo en la cultura: la mitad de las palabras con las que hablamos de nosotros mismos salieron de este señor.",
        },
        {
          forma: "texto",
          texto:
            "Leerlo hoy sirve para eso: para ver de dónde viene el vocabulario con el que pensamos, y para comprobar cuánto de él se sostiene y cuánto no.",
        },
      ],
    },
  ],
};

export const ERROR_DESCARTES: Resumen = {
  id: "error-descartes",
  titulo: "El error de Descartes",
  autor: "Antonio Damasio",
  ano: 1994,
  gancho:
    "Una barra de hierro le atravesó la cabeza a un obrero en 1848. Sobrevivió, conservó la inteligencia entera, y dejó de ser capaz de decidir nada.",
  porQue:
    "Es el libro que demostró que sin emociones no se razona peor: no se razona. Y lo demostró con pacientes reales a los que todos los tests daban por sanos mientras se les hundía la vida.",
  partes: [
    {
      titulo: "Cavendish, Vermont, 13 de septiembre de 1848",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Una cuadrilla del ferrocarril está abriendo paso a través de la roca en Vermont. El capataz tiene veinticinco años, se llama Phineas Gage, y su trabajo consiste en meter pólvora en un agujero perforado en la piedra, cubrirla con arena y apisonarla con una barra de hierro.",
        },
        {
          forma: "texto",
          texto:
            "La barra mide algo más de un metro, pesa seis kilos y tiene un extremo afilado. Aquella tarde, algo se distrae —según los testimonios, alguien le habla—, y golpea la pólvora antes de que le hayan echado la arena encima. Salta una chispa.",
        },
        {
          forma: "clave",
          rotulo: "Lo que pasó en ese segundo",
          frase: "La explosión disparó la barra como un proyectil. Le entró por debajo del pómulo izquierdo, le atravesó el cráneo de abajo arriba, le salió por la parte alta de la frente y cayó a veinticinco metros, manchada de sangre y de sustancia cerebral.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí empieza lo extraordinario. Gage cayó al suelo, tuvo unas convulsiones, y a los pocos minutos estaba hablando. Se subió por su propio pie a un carro, se sentó erguido durante el trayecto de un kilómetro, y esperó al médico sentado en el porche de la posada.",
        },
        {
          forma: "texto",
          texto:
            "Cuando llegó el doctor John Harlow, Gage le saludó y le dijo, según el propio médico anotó, que allí tenía trabajo suficiente. Estaba consciente, orientado, hablaba con normalidad y explicaba lo ocurrido. Le faltaba una parte del cerebro.",
        },
        {
          forma: "arte",
          texto:
            "Sobrevivió a la infección, perdió el ojo izquierdo y a los dos meses estaba dado de alta. Andaba, hablaba, recordaba, contaba, reconocía a todo el mundo y no tenía ninguna parálisis. Desde el punto de vista neurológico de 1848, se había curado del todo.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Y sin embargo la compañía del ferrocarril, que lo tenía por el capataz más eficaz de la plantilla, no volvió a contratarlo. Su médico escribió años después la frase que ha hecho famoso el caso: que el equilibrio entre sus facultades intelectuales y sus tendencias animales se había roto.",
        },
        {
          forma: "texto",
          texto:
            "Harlow lo describió como caprichoso, irrespetuoso, dado a soltar obscenidades que antes no decía, impaciente ante cualquier consejo que contrariara sus deseos, incapaz de mantener un plan y de llevarlo a cabo. Y remató diciendo que sus amigos decían que ya no era Gage.",
        },
        {
          forma: "texto",
          texto:
            "Ese caso es la escena inicial del libro y la razón por la que se ha leído tanto. Un hombre con la inteligencia intacta, la memoria intacta y el lenguaje intacto, incapaz de organizar su vida por una lesión en una parte concreta del cerebro.",
        },
        {
          forma: "texto",
          texto:
            "Quien lo cuenta es Antonio Damasio, neurólogo portugués nacido en Lisboa en 1944, que se formó allí y se trasladó a Estados Unidos en 1975. En la Universidad de Iowa montó con su mujer, Hanna Damasio, uno de los mejores programas del mundo de estudio de lesiones cerebrales.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle del método importa. Estudiar lesiones consiste en aprovechar la desgracia: cuando alguien pierde una parte del cerebro por un accidente, un tumor o un ictus, se puede observar qué deja de funcionar y deducir para qué servía esa zona.",
        },
        {
          forma: "texto",
          texto:
            "Es la fuente más antigua del conocimiento sobre el cerebro y sigue siendo de las mejores, porque enseña qué es necesario para una función y no solo qué se enciende cuando la función ocurre, que es lo que dan las imágenes cerebrales modernas.",
        },
        {
          forma: "arte",
          texto:
            "Y hay un dato precioso sobre Gage: su cráneo se conserva. Su médico consiguió que la familia lo exhumara en 1866 y lo donara, y hoy está expuesto junto a la barra de hierro en un museo anatómico de la Universidad de Harvard.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "En 1994, el mismo año en que salió este libro, Hanna Damasio y su equipo publicaron en una revista científica una reconstrucción del accidente hecha a partir de mediciones del cráneo real y de técnicas de imagen, para averiguar qué zonas había destruido la barra exactamente.",
        },
        {
          forma: "texto",
          texto:
            "Su conclusión fue que el daño afectó a la corteza prefrontal ventromedial de los dos hemisferios, y que respetó las áreas del lenguaje y del movimiento. Es decir: destruyó justamente lo que hace falta para decidir y dejó intacto lo que se mide en un examen.",
        },
        {
          forma: "texto",
          texto:
            "Aquí hay que hacer una corrección importante y que el propio libro no hace, porque es la parte más discutible de su primer capítulo. La historia de Gage que se cuenta desde hace siglo y medio está bastante inflada.",
        },
        {
          forma: "texto",
          texto:
            "El historiador Malcolm Macmillan revisó todas las fuentes originales y encontró que la imagen del borracho violento e incapaz que va de pueblo en pueblo es un añadido de generaciones de manuales, y que los testimonios de la época dicen bastante menos que eso.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí está documentado es que Gage trabajó después varios años en Chile como conductor de diligencias en la ruta de Valparaíso a Santiago, un oficio que exige levantarse a la misma hora, manejar seis caballos, cobrar billetes y tratar con pasajeros.",
        },
        {
          forma: "texto",
          texto:
            "Eso no encaja con un hombre incapaz de mantener un plan. Macmillan sostiene que hubo una recuperación considerable con los años, probablemente ayudada por la rutina de un trabajo estructurado, y que el caso enseña tanto sobre la plasticidad como sobre el daño.",
        },
        {
          forma: "texto",
          texto:
            "Damasio se apoya en la versión más dramática porque es la que le sirve, y eso es un punto flojo del libro que conviene tener presente. La buena noticia es que su argumento no depende de Gage.",
        },
        {
          forma: "texto",
          texto:
            "Depende de un paciente suyo, al que examinó él mismo durante años.",
        },
        {
          forma: "texto",
          texto:
            "Un contable de treinta y tantos años, casado y con hijos, al que llama Elliot.",
        },
        {
          forma: "texto",
          texto:
            "Y cuyo caso es más inquietante que el de la barra de hierro.",
        },
        {
          forma: "texto",
          texto:
            "Entre otras cosas porque le pasó en un quirófano.",
        },
      ],
    },

    {
      titulo: "El paciente Elliot",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Elliot era un profesional de éxito. Trabajaba en una empresa, tenía responsabilidades, un matrimonio estable, hijos, y era el tipo de persona a la que los demás ponían de ejemplo. Empezó a tener dolores de cabeza y le encontraron un tumor benigno en la zona frontal.",
        },
        {
          forma: "texto",
          texto:
            "Lo operaron y salió bien: le quitaron el tumor entero. En el proceso hubo que extirpar también tejido frontal dañado de los dos lados, en la parte de abajo y de en medio de los lóbulos frontales, que es exactamente la zona que le destrozó la barra a Gage.",
        },
        {
          forma: "clave",
          rotulo: "Lo que pasó después",
          frase: "Elliot se recuperó físicamente y perdió la vida entera en pocos años. Le echaron del trabajo por no terminar nada. Se metió en un negocio con un socio que cualquiera habría visto que era un estafador y perdió sus ahorros. Se divorció, se volvió a casar mal, y se volvió a divorciar.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí está lo que convierte el caso en un problema científico de primer orden. Cuando Damasio le pasó la batería completa de pruebas neuropsicológicas, Elliot salió normal en todas. En algunas, por encima de la media.",
        },
        {
          forma: "texto",
          texto:
            "Cociente intelectual en el rango alto. Memoria a corto y largo plazo intacta. Lenguaje perfecto. Atención, cálculo, percepción y capacidad de aprender cosas nuevas, todo normal. Conocimientos sobre el mundo, sobre normas sociales y sobre moral, intactos.",
        },
        {
          forma: "arte",
          texto:
            "Le pasaron incluso pruebas de dilemas morales y de resolución de problemas sociales, de las que consisten en presentar una situación complicada y pedir soluciones. Elliot generaba montones de opciones sensatas, las ordenaba y explicaba las consecuencias de cada una.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Y al terminar una de esas sesiones le dijo a Damasio una frase que es el corazón del libro: que después de todo aquello, él seguiría sin saber qué hacer. Sabía razonar perfectamente sobre qué convenía y no era capaz de elegir.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo cotidiano que da Damasio es más revelador que cualquier test. Elliot tenía que clasificar documentos en el trabajo. Podía ordenarlos por fecha, por tamaño, por tema o por relevancia, y se pasaba la tarde entera comparando criterios sin decidirse.",
        },
        {
          forma: "texto",
          texto:
            "Leía cada documento con atención y correctamente, se enfrascaba, y perdía de vista que la tarea era ordenarlos, no estudiarlos. No era falta de inteligencia ni de conocimiento: era que ninguna de las opciones le parecía mejor que las otras.",
        },
        {
          forma: "texto",
          texto:
            "Lo mismo le pasaba con las cosas grandes. Elegir un restaurante para cenar podía llevarle una hora comparando menús, horarios y aparcamiento. Elegir en qué invertir sus ahorros lo resolvía dejándose convencer por la última persona que le hablaba.",
        },
        {
          forma: "texto",
          texto:
            "El otro rasgo que Damasio observó, y que resultó ser la clave, es que Elliot contaba su propia desgracia sin ninguna emoción. Describía la ruina, los divorcios y el despido con el mismo tono con el que habría leído el periódico, y era consciente de ello.",
        },
        {
          forma: "texto",
          texto:
            "Le dijo que aquellos temas, que antes le habrían removido, ahora no le provocaban nada. Sabía que debería sentirse mal y no lo sentía. Y no estaba deprimido: un deprimido siente demasiado y de manera equivocada; Elliot sencillamente no sentía.",
        },
        {
          forma: "arte",
          texto:
            "Damasio lo comprobó con imágenes: le enseñó fotografías de catástrofes, de heridos graves, de edificios en llamas, de gente muerta, mientras medía sus reacciones corporales. Elliot describía correctamente lo que veía y su cuerpo no reaccionaba en absoluto.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Y volvió a decírselo él mismo, que es lo que hace el caso tan valioso: que antes de la operación aquellas imágenes le habrían producido algo, y que sabía que ahora debían producírselo, y que no lo hacían.",
        },
        {
          forma: "texto",
          texto:
            "Hay un detalle administrativo que Damasio subraya y que es de las cosas más útiles del libro para cualquiera. Elliot pidió una pensión por incapacidad y se la denegaron, porque todos los informes decían que estaba perfectamente.",
        },
        {
          forma: "texto",
          texto:
            "Los tests que usa la medicina para decidir si alguien puede trabajar miden inteligencia, memoria y lenguaje. No miden la capacidad de elegir, de sostener un plan ni de detectar que quien tienes delante te está engañando, y esas son las que Elliot había perdido.",
        },
        {
          forma: "texto",
          texto:
            "Así que quedaba como un caso de vagancia o de mala cabeza. La familia lo veía así, sus jefes lo habían visto así, y el sistema lo confirmaba con papeles. Damasio escribe que ese fue el motivo por el que se puso a investigar el asunto en serio.",
        },
        {
          forma: "texto",
          texto:
            "Y Elliot no era único. Damasio y su equipo reunieron un grupo pequeño de pacientes con lesiones en esa misma zona por causas distintas —tumores, ictus, accidentes— y todos tenían el mismo perfil: perfectos en los tests, arruinados en la vida.",
        },
        {
          forma: "texto",
          texto:
            "Ese grupo permitía por fin hacer ciencia en vez de coleccionar anécdotas, y la pregunta era cómo demostrar en un laboratorio algo que solo se veía en la biografía de la gente. Hacía falta una prueba que reprodujera el problema en una hora.",
        },
        {
          forma: "texto",
          texto:
            "Es decir: una tarea en la que hubiera que decidir con información incompleta, con premios y castigos, sin poder calcular la respuesta correcta, y en la que el acierto dependiera de aprender de la experiencia.",
        },
        {
          forma: "texto",
          texto:
            "La diseñó un colaborador suyo, Antoine Bechara, y hoy se usa en laboratorios de todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "Consiste en cuatro montones de cartas encima de una mesa.",
        },
        {
          forma: "texto",
          texto:
            "Dos dan dinero rápido y arruinan a quien insiste.",
        },
        {
          forma: "texto",
          texto:
            "Y el sujeto no lo sabe.",
        },
      ],
    },

    {
      titulo: "La apuesta de las cartas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La prueba funciona así. El participante se sienta ante cuatro mazos y recibe dinero de juguete. Tiene que ir levantando cartas del mazo que quiera, una a una, cien veces. Cada carta le da una ganancia y algunas, además, le imponen una pérdida.",
        },
        {
          forma: "texto",
          texto:
            "No se le dice cuántas cartas va a levantar, ni cómo están hechos los mazos, ni cuánto dura. Solo se le dice que gane todo el dinero que pueda. Y los mazos están trucados de una manera que él tiene que descubrir jugando.",
        },
        {
          forma: "clave",
          rotulo: "Cómo están trucados",
          frase: "Dos mazos dan premios grandes y, de vez en cuando, castigos enormes: a la larga arruinan. Los otros dos dan premios pequeños y castigos pequeños: a la larga hacen ganar. La única manera de averiguarlo es ir probando y notar que unos escuecen más que otros.",
        },
        {
          forma: "texto",
          texto:
            "Lo que hace una persona sin lesiones es previsible y ordenado. Al principio prueba de todo, atraída por los premios grandes de los mazos malos. Hacia la mitad de la partida empieza a evitarlos, y al final juega casi exclusivamente en los buenos.",
        },
        {
          forma: "texto",
          texto:
            "Los pacientes con lesión en la corteza prefrontal ventromedial hacen otra cosa. Siguen volviendo a los mazos malos hasta el final de la partida, atraídos por los premios grandes, y se arruinan una y otra vez sin corregir el rumbo.",
        },
        {
          forma: "arte",
          texto:
            "Y aquí llega el detalle que convirtió esta prueba en famosa. Si al terminar se les pregunta, esos pacientes son capaces de explicar perfectamente cuáles son los mazos malos y por qué. Lo saben. Lo dicen. Y aun así han seguido cogiendo cartas de ahí.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Es exactamente lo que le pasaba a Elliot con su vida: saber cuál es la opción correcta y no ser capaz de que ese conocimiento gobierne la conducta. Por primera vez, ese problema se podía reproducir en un laboratorio en cuarenta minutos.",
        },
        {
          forma: "texto",
          texto:
            "El segundo experimento es el que dio la vuelta al mundo, y consistió en añadir una medida corporal. Mientras los participantes jugaban, se les midió la conductancia de la piel, que aumenta con la sudoración de las manos y es un indicador clásico de activación emocional.",
        },
        {
          forma: "texto",
          texto:
            "Lo que encontraron en las personas sanas fue esto: alrededor de la carta número diez, y antes de tocar un mazo malo, la mano empezaba a sudar ligeramente. Una reacción anticipatoria, pequeña, que aparecía justo cuando la mano se acercaba a los montones peligrosos.",
        },
        {
          forma: "texto",
          texto:
            "Y aparecía mucho antes de que el jugador pudiera decir por qué. Preguntados en ese momento, la mayoría contestaba que no tenía ni idea de cómo funcionaban los mazos. Alrededor de la carta cincuenta empezaban a tener una corazonada, y bastante después la explicación completa.",
        },
        {
          forma: "texto",
          texto:
            "Los pacientes con la lesión no producían nunca esa reacción anticipatoria. Su cuerpo no avisaba. Y aunque más tarde llegaran a saber conscientemente cuáles eran los mazos malos, seguían jugando en ellos.",
        },
        {
          forma: "texto",
          texto:
            "El titular que salió de ahí, y que se ha repetido durante treinta años, es que el cuerpo sabe antes que la cabeza, y que sin ese aviso corporal el conocimiento consciente no basta para dirigir la conducta.",
        },
        {
          forma: "arte",
          texto:
            "Hay que decir aquí, y es de las cosas más importantes de este resumen, que ese titular ha recibido un golpe serio. En 2004, dos investigadores repitieron el experimento cambiando la manera de preguntar a los participantes, y el resultado se movió bastante.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El estudio original preguntaba de forma vaga, algo así como qué está pasando en el juego. Ellos hicieron preguntas concretas y separadas: qué mazo es mejor, cuánto de seguro estás, y en qué mazo pondrías dinero. Y preguntaron después de cada bloque de cartas.",
        },
        {
          forma: "texto",
          texto:
            "Con ese método, los participantes sanos resultaron tener mucho más conocimiento explícito, y mucho antes, de lo que el estudio original había detectado. Es decir: sí sabían, y lo que fallaba era la manera de preguntárselo.",
        },
        {
          forma: "texto",
          texto:
            "Eso no anula el hallazgo de los pacientes, que siguen fallando la prueba de forma clara. Sí debilita mucho la parte más vendida de la historia, que es la del cuerpo que sabe antes y por otra vía que la conciencia.",
        },
        {
          forma: "texto",
          texto:
            "Dos años después, una revisión crítica bastante exhaustiva de toda la literatura sobre la hipótesis concluyó que la evidencia estaba lejos de ser concluyente, y que varios de los resultados clave se habían replicado de forma irregular.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el estado actual y conviene tenerlo claro antes de citar el libro: los pacientes con esa lesión deciden mal y eso está sólidamente demostrado; el mecanismo concreto que Damasio propone para explicarlo sigue siendo una hipótesis discutida.",
        },
        {
          forma: "texto",
          texto:
            "También conviene señalar el tamaño de las muestras. Los estudios originales trabajaron con grupos de entre seis y una docena de pacientes, porque las lesiones bilaterales limpias en esa zona concreta son rarísimas, y con eso no se hace estadística potente.",
        },
        {
          forma: "texto",
          texto:
            "Es una limitación honesta e inevitable: no se puede encargar más pacientes. Y significa que las conclusiones de este libro tienen la fuerza de una descripción clínica muy buena, no la de un ensayo con miles de personas.",
        },
        {
          forma: "texto",
          texto:
            "Con esos datos en la mano, Damasio propone la teoría que da sentido a todo y que es su aportación propia.",
        },
        {
          forma: "texto",
          texto:
            "La llama hipótesis del marcador somático.",
        },
        {
          forma: "texto",
          texto:
            "Somático significa del cuerpo.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está la palabra que discute con Descartes.",
        },
      ],
    },

    {
      titulo: "El marcador somático",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La teoría dice lo siguiente. Cada vez que vivimos una situación con un desenlace bueno o malo, el cerebro guarda dos cosas: los hechos, y el estado corporal que acompañó a esos hechos. El nudo en el estómago, el pulso acelerado, la sensación de alivio.",
        },
        {
          forma: "texto",
          texto:
            "Cuando después nos enfrentamos a una situación parecida, el cerebro reactiva ese estado corporal —o una simulación suya— antes de que hayamos razonado nada. Y esa señal marca la opción: la hace desagradable o atractiva antes de que la pensemos.",
        },
        {
          forma: "clave",
          rotulo: "Para qué sirve eso",
          frase: "Para reducir el número de opciones a considerar. Ante una decisión, las posibilidades son casi infinitas; el marcador elimina de un plumazo las que llevan la etiqueta de mala experiencia, y deja unas pocas sobre las que sí se puede razonar con calma.",
        },
        {
          forma: "texto",
          texto:
            "Damasio insiste en que esa señal no decide por nosotros: acota el campo. El razonamiento sigue siendo necesario y sigue haciendo su trabajo, pero lo hace sobre un conjunto ya filtrado. Sin ese filtro, hay que evaluarlo todo, y eso no cabe en una vida.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la explicación de Elliot ordenando documentos toda la tarde. No es que no supiera clasificar: es que sin marcadores ninguna opción llevaba etiqueta, así que las cuatro pesaban lo mismo y no había forma de terminar la comparación.",
        },
        {
          forma: "arte",
          texto:
            "La corteza prefrontal ventromedial, que es lo que Gage y Elliot tenían destruido, es según esta teoría el sitio donde se guarda el enlace: la asociación entre un tipo de situación y el estado corporal que produjo la última vez. Sin ella, el archivo existe y no se puede consultar.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Damasio distingue además entre dos vías. Una es la del cuerpo real: el corazón se acelera de verdad, las manos sudan de verdad, y el cerebro lee esa información. Otra es lo que llama el bucle como si, en la que el cerebro simula el estado corporal sin producirlo.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es más rápida y más barata, y es la que explica que podamos evaluar mil opciones al día sin sufrir mil sobresaltos físicos. Es también la parte más difícil de comprobar experimentalmente y una de las que más se le han discutido.",
        },
        {
          forma: "texto",
          texto:
            "Con esa teoría montada, el libro se gira hacia el filósofo del título y explica en qué consiste su error, que no es lo que sugiere la portada. Damasio no dice que Descartes fuera tonto ni que estuviera equivocado en todo.",
        },
        {
          forma: "texto",
          texto:
            "El error, en su lectura, es uno concreto: la separación tajante entre una mente pensante sin extensión y un cuerpo que es una máquina. Esa división convierte al cuerpo en un vehículo del que la mente se sirve, y no en parte del mecanismo de pensar.",
        },
        {
          forma: "texto",
          texto:
            "De esa división salió una idea que ha organizado la cultura occidental: que la razón funciona mejor cuanto más limpia esté de emoción, y que las pasiones son un ruido que estorba al juicio. Es la imagen del juez frío, del científico impasible, del directivo sin sentimentalismos.",
        },
        {
          forma: "texto",
          texto:
            "Y lo que Elliot demuestra es que esa imagen describe a un enfermo. Un ser humano con la razón intacta y las emociones desconectadas no decide mejor que los demás: no decide en absoluto, o decide catastróficamente, y además no se da cuenta.",
        },
        {
          forma: "arte",
          texto:
            "Damasio es cuidadoso con el matiz y merece la pena recogerlo, porque es lo primero que se pierde al resumirlo. No dice que la emoción sea mejor que la razón. Dice que es un componente necesario de la razón, y que un exceso de emoción también destroza las decisiones.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Lo dice explícitamente: un ataque de pánico o una furia también anulan el juicio, y hay pacientes que deciden fatal por lo contrario que Elliot. Lo que sostiene es que existe un rango y que el cero no es el óptimo, que es lo que la tradición daba por supuesto.",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir también que su lectura de Descartes es floja como historia de la filosofía, y se lo han reprochado. Descartes escribió un tratado entero sobre las pasiones del alma y no sostenía que las emociones fueran irrelevantes ni prescindibles.",
        },
        {
          forma: "texto",
          texto:
            "Damasio ataca una versión simplificada del cartesianismo —la que se ha filtrado a la cultura general— más que al Descartes real. Es un blanco legítimo porque esa versión existe y manda mucho, y el título del libro no es del todo justo con su destinatario.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una ironía que el propio Damasio no señala: la objeción más certera al dualismo cartesiano no es esta, sino la que le hizo la princesa Isabel de Bohemia en 1643, preguntándole cómo puede un alma sin extensión mover un cuerpo que la tiene.",
        },
        {
          forma: "texto",
          texto:
            "Aquella pregunta lleva casi cuatro siglos sin respuesta y este libro tampoco la contesta. Lo que hace es enseñar, con pacientes concretos, qué le pasa a una persona real cuando ese enlace entre cuerpo y decisión se rompe de verdad en el quirófano.",
        },
        {
          forma: "texto",
          texto:
            "Las consecuencias prácticas que saca son considerables. Si el razonamiento depende del estado corporal, entonces las condiciones físicas —dolor crónico, insomnio, hambre, enfermedad— no son un contexto de la decisión: son parte del aparato con el que se decide.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí una crítica suya a la medicina que sigue vigente: separar la salud del cuerpo de la de la mente, con especialistas distintos, hospitales distintos y presupuestos distintos, es organizar la sanidad según un error filosófico del siglo diecisiete.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 1994 y se convirtió en un éxito mundial, con traducciones a más de treinta idiomas y una influencia enorme fuera de la neurología.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí es donde empezaron los problemas.",
        },
        {
          forma: "texto",
          texto:
            "Porque una idea matizada, al salir del laboratorio, pierde los matices.",
        },
        {
          forma: "texto",
          texto:
            "Y esta acabó vendiéndose como el permiso científico para fiarse de las corazonadas.",
        },
      ],
    },

    {
      titulo: "El cráneo del museo de Harvard",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En una vitrina del museo anatómico de la facultad de Medicina de Harvard hay un cráneo con un boquete enorme en la parte alta y una barra de hierro de un metro apoyada al lado. Es de las piezas más visitadas y lleva allí desde 1868.",
        },
        {
          forma: "texto",
          texto:
            "Ese cráneo ha servido para todo. Durante siglo y medio se ha usado para defender la frenología, para negarla, para sostener que la personalidad está localizada en un punto, para decir lo contrario, y para ilustrar prácticamente cualquier teoría sobre el cerebro y la conducta.",
        },
        {
          forma: "clave",
          rotulo: "Y esa es la primera advertencia",
          frase: "Que un caso único aguanta cualquier interpretación. La historia de Gage se ha contado de cinco maneras distintas según lo que hiciera falta demostrar en cada época, y la versión de este libro es una de ellas: la que más subraya el deterioro y menos la recuperación.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, el balance del libro, ordenado. Lo que aguanta sólidamente: que existe un grupo de pacientes con lesiones en la corteza prefrontal ventromedial que conservan inteligencia, memoria y lenguaje y pierden la capacidad de decidir bien en su vida.",
        },
        {
          forma: "texto",
          texto:
            "Eso está descrito con detalle clínico, replicado en varios laboratorios y es incuestionable. Y su consecuencia práctica es importante: hay discapacidades reales que ninguna prueba de las que se usan para conceder una pensión es capaz de detectar.",
        },
        {
          forma: "arte",
          texto:
            "Aguanta también la prueba de las cartas como instrumento clínico. Sigue usándose en todo el mundo para evaluar la toma de decisiones en adicciones, en daño cerebral y en varios trastornos, y discrimina bien entre pacientes y personas sanas.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Y aguanta la tesis general de que emoción y razón no son dos sistemas separados que compiten, sino partes del mismo aparato. Eso hoy es consenso en neurociencia y en 1994 no lo era en absoluto, y este libro tuvo bastante que ver en el cambio.",
        },
        {
          forma: "texto",
          texto:
            "Lo que no aguanta igual de bien: la hipótesis del marcador somático como mecanismo concreto. La revisión crítica de 2006 concluyó que la evidencia dista de ser concluyente, y varios resultados clave se han replicado de manera desigual.",
        },
        {
          forma: "texto",
          texto:
            "Y el resultado estrella —el cuerpo que sabe antes que la conciencia— quedó tocado en 2004, cuando al preguntar mejor a los participantes resultó que sabían bastante más y bastante antes de lo que el estudio original detectaba.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un problema de fondo con la teoría: en su formulación general es casi imposible de refutar. Que los estados corporales influyan en las decisiones es casi seguramente cierto y no dice gran cosa; lo interesante y difícil es especificar cuándo, cuánto y por qué vía.",
        },
        {
          forma: "texto",
          texto:
            "A eso se añade el tamaño de las muestras, que es pequeño por necesidad, y la dependencia de casos únicos como el de Gage, cuya historia real se parece bastante menos a la versión del libro de lo que este da a entender.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree y no es verdad, uno: que Gage se convirtió en un borracho violento incapaz de trabajar. Estuvo años conduciendo diligencias en Chile, un oficio exigente, y la investigación histórica apunta a una recuperación considerable con el tiempo.",
        },
        {
          forma: "arte",
          texto:
            "Dos, y es el más importante: que este libro demuestra que hay que fiarse de las corazonadas y desconfiar del análisis. No dice eso en ninguna página. Dice que la emoción es una parte del mecanismo de razonar, y que su exceso también arruina las decisiones.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "La lectura de autoayuda —hazle caso a tu instinto, el cuerpo sabe— es exactamente la simplificación que el propio autor ha combatido en entrevistas durante treinta años, y es la que ha hecho vender el libro en aeropuertos.",
        },
        {
          forma: "texto",
          texto:
            "Tres: que Descartes queda refutado. Damasio discute una versión popular del dualismo, no al Descartes histórico, que escribió un tratado sobre las pasiones y no despreciaba las emociones. El título es eficaz y no es del todo justo.",
        },
        {
          forma: "texto",
          texto:
            "Cuatro: que el marcador somático es ciencia establecida. Es una hipótesis influyente y discutida, con treinta años de literatura a favor y en contra, y lo honrado es presentarla así y no como un hecho comprobado.",
        },
        {
          forma: "texto",
          texto:
            "Y cinco: que la lesión de Elliot afectó a su personalidad en el sentido de volverlo mala persona. No hubo nada de eso. Siguió siendo educado, correcto y agradable, y esa es justamente la razón por la que nadie de su entorno entendía qué le pasaba.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda para un lector normal es una idea que se puede usar el lunes por la mañana. Que la sensación física que acompaña a una opción no es un ruido que haya que apartar para pensar mejor: es información que el cuerpo ha guardado y que conviene leer.",
        },
        {
          forma: "texto",
          texto:
            "Y su reverso, que Damasio también dice y que se cita mucho menos: que esa señal viene de la experiencia pasada, y que por tanto es tan buena como haya sido esa experiencia. Si uno ha aprendido en un entorno malo, sus marcadores le van a engañar sistemáticamente.",
        },
        {
          forma: "texto",
          texto:
            "Damasio siguió publicando durante treinta años y desarrollando el asunto en varios libros más, y hoy dirige un instituto en la Universidad del Sur de California dedicado precisamente a esto.",
        },
        {
          forma: "texto",
          texto:
            "Phineas Gage murió en San Francisco en 1860, a los treinta y seis años, doce después del accidente, tras una serie de crisis epilépticas.",
        },
        {
          forma: "texto",
          texto:
            "Lo enterraron con la barra de hierro, que le habían devuelto y que llevaba encima a todas partes.",
        },
        {
          forma: "texto",
          texto:
            "Ocho años después, su médico convenció a la familia de que lo desenterraran para la ciencia.",
        },
        {
          forma: "texto",
          texto:
            "Los dos siguen juntos en la misma vitrina.",
        },
      ],
    },
  ],
};

export const MARTE_VENUS: Resumen = {
  id: "marte-venus",
  titulo: "Los hombres son de Marte, las mujeres son de Venus",
  autor: "John Gray",
  ano: 1992,
  gancho:
    "Cincuenta millones de ejemplares vendidos sobre una teoría que la investigación no sostiene. Y aun así, mucha gente dice que le salvó la relación.",
  porQue:
    "Porque la pregunta buena no es si acierta, sino por qué funciona un libro que se equivoca. Contestarla enseña más sobre parejas que el propio libro, y de paso deja lo que sí está medido, que existe y casi nadie conoce.",
  partes: [
    {
      titulo: "Un seminario en California",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "A finales de los ochenta, en salas de hotel de California, un hombre de unos cuarenta años daba seminarios de fin de semana para parejas. Empezaba pidiendo a los hombres que se sentaran a un lado y a las mujeres al otro, y les hacía escribir sus quejas sobre el otro bando.",
        },
        {
          forma: "texto",
          texto:
            "Las listas siempre salían parecidas. Ellas escribían que no las escuchaba, que no se acordaba de nada y que quería arreglarlo todo en vez de entenderlas. Ellos escribían que nunca estaba contenta, que le sacaba faltas y que le decía cómo tenía que hacer las cosas.",
        },
        {
          forma: "texto",
          texto:
            "El hombre que dirigía aquello se llamaba John Gray, y en 1992 convirtió esos seminarios en un libro con un título que se ha convertido en parte del idioma. Ha vendido en torno a cincuenta millones de ejemplares y es uno de los libros de no ficción más vendidos de la historia.",
        },
        {
          forma: "texto",
          texto:
            "Su biografía conviene conocerla, dicha sin sarcasmo y sin adornos. Nació en Texas en 1951, pasó nueve años como asistente célibe del gurú Maharishi Mahesh Yogi, y después obtuvo un doctorado por Columbia Pacific University, un centro por correspondencia sin acreditación oficial.",
        },
        {
          forma: "texto",
          texto:
            "Aquella universidad fue cerrada por orden de un tribunal de California en 2001, por otorgar títulos que no cumplían los requisitos legales del estado. Eso no convierte en falso nada de lo que escribe, y sí explica por qué no hay investigación propia detrás de ninguna de sus afirmaciones.",
        },
        {
          forma: "texto",
          texto:
            "La metáfora del libro es esta. Hace mucho tiempo, los marcianos observaron Venus con sus telescopios y sintieron algo desconocido; construyeron naves, viajaron y se enamoraron. Después vinieron juntos a la Tierra y, al llegar, la atmósfera les provocó amnesia.",
        },
        {
          forma: "texto",
          texto:
            "Olvidaron que venían de planetas distintos. Y desde entonces cada uno da por hecho que el otro funciona con sus mismas reglas, se comporta como si así fuera, y se siente traicionado cuando el otro no responde como responderían los suyos.",
        },
        {
          forma: "clave",
          rotulo: "La tesis en una frase",
          frase: "La mayor parte de los conflictos de pareja no vienen de falta de amor ni de mala intención, sino de una traducción defectuosa: cada uno interpreta la conducta del otro con su propio diccionario, y con ese diccionario todo lo que hace el otro significa algo distinto de lo que quiso decir.",
        },
        {
          forma: "texto",
          texto:
            "Formulada así, la tesis no tiene nada de escandaloso y probablemente sea cierta. El problema empieza en la explicación de por qué existen esos dos diccionarios, porque Gray sostiene que son innatos, propios de cada sexo y básicamente iguales en todas las personas.",
        },
        {
          forma: "texto",
          texto:
            "Y esa afirmación sí es comprobable, se ha comprobado muchas veces, y no se sostiene. Esa es la parte que hay que desmontar, y conviene hacerlo despacio, porque el libro está montado de manera que cada anécdota parece confirmarlo.",
        },
        {
          forma: "arte",
          texto:
            "Pero antes hay que ser justos con él, y por un motivo concreto: millones de personas dicen que este libro les ayudó de verdad. Descartar eso como pura sugestión es un error de análisis, porque hay razones identificables de por qué ayuda.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Su éxito además no fue casual en el tiempo. Salió en 1992, cuando el divorcio se había normalizado en el mundo occidental, cuando muchas parejas estaban renegociando quién hacía qué en casa, y cuando el género se había convertido en un tema de conversación pública constante.",
        },
        {
          forma: "texto",
          texto:
            "Ofrecía a la vez dos cosas que la gente necesitaba: una explicación de por qué su pareja le desesperaba, y una que no acusaba a nadie de ser mala persona. Es decir, daba permiso para seguir queriendo a alguien a quien no se entiende.",
        },
        {
          forma: "texto",
          texto:
            "Ese es exactamente el hueco que ocupa, y explica también su límite. El libro habla solo de parejas heterosexuales estables, sin hijos en primer plano, de clase media y de cultura estadounidense, y todo lo que dice está pensado desde ahí, aunque lo presente como universal.",
        },
        {
          forma: "texto",
          texto:
            "En esta biblioteca hay dos libros del mismo estante que conviene tener al lado. Los cinco lenguajes del amor, de Chapman, que hace algo muy parecido con otro sistema, y El arte de amar, de Fromm, que discute la premisa entera al sostener que amar es una capacidad que se aprende.",
        },
        {
          forma: "texto",
          texto:
            "Fromm, de hecho, diría que este libro comete el error básico del género: tratar el amor como un problema de encontrar la técnica correcta con el objeto correcto, en vez de como una capacidad que hay que desarrollar en uno mismo, con disciplina y durante años.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un dato editorial que explica bastante. Marte y Venus no es un libro sino una franquicia: hay más de una docena de títulos derivados, seminarios, terapeutas certificados y hasta una obra de teatro que lleva veinte años en cartel en varios países.",
        },
        {
          forma: "texto",
          texto:
            "Eso importa porque la estructura del libro está pensada para eso. Cada capítulo se cierra con una idea que se puede repetir en una frase, y esa facilidad para resumirse es la razón de que las expresiones del libro se hayan colado en el idioma de gente que nunca lo ha leído.",
        },
        {
          forma: "texto",
          texto:
            "Vamos a hacer tres cosas, en este orden.",
        },
        {
          forma: "texto",
          texto:
            "Vamos a hacer tres cosas, en este orden.",
        },
        {
          forma: "texto",
          texto:
            "Primero, contar lo que el libro dice de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Después, ver qué dicen los datos sobre eso.",
        },
      ],
    },

    {
      titulo: "La cueva, la ola y la goma elástica",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El concepto más famoso del libro es la cueva. Gray sostiene que cuando un hombre tiene un problema o está estresado, su reacción por defecto es retirarse: callarse, ponerse a hacer algo con las manos, encender la televisión o mirar el móvil sin decir nada.",
        },
        {
          forma: "texto",
          texto:
            "Y sostiene que ella suele interpretar esa retirada de la peor manera posible: como desamor, como castigo o como rechazo. Entonces se acerca a preguntar qué le pasa, él se retira más, ella insiste más, y se ha puesto en marcha el círculo que va a durar toda la noche.",
        },
        {
          forma: "texto",
          texto:
            "Su instrucción es contraintuitiva y probablemente sea el consejo más útil del libro: no seguirle dentro de la cueva. Dejarle salir por sí mismo, hacer otra cosa mientras tanto, y no tratar la retirada como un mensaje sobre la relación.",
        },
        {
          forma: "texto",
          texto:
            "La imagen complementaria es la goma elástica. Dice que los hombres se alejan y vuelven en ciclos, y que cuanto más se alejan con más fuerza vuelven, siempre que no se les tire de la goma. Tirar es perseguir, preguntar y exigir explicaciones, y eso rompe el ciclo.",
        },
        {
          forma: "texto",
          texto:
            "Para ellas propone otra imagen, la ola. Su tesis es que la autoestima femenina sube y baja en ciclos que no dependen de lo que él haga, que cuando la ola baja salen a la superficie sentimientos viejos, y que el hombre no debe tomárselo como un informe sobre su desempeño.",
        },
        {
          forma: "clave",
          rotulo: "El malentendido central",
          frase: "Cuando ella cuenta un problema, no está pidiendo una solución: está pidiendo que la escuchen mientras lo ordena en voz alta. Cuando él ofrece la solución, cree estar ayudando y ella entiende que le está diciendo que su malestar es una tontería fácil de arreglar.",
        },
        {
          forma: "texto",
          texto:
            "A ese personaje lo llama el señor Arréglalo, y le pone al lado su equivalente femenino, que llama el comité de mejora del hogar. Ella ofrece consejos no pedidos sobre cómo debería hacer él las cosas, cree estar cuidándole, y él entiende que le están diciendo que no vale.",
        },
        {
          forma: "texto",
          texto:
            "La simetría de esos dos personajes es lo mejor del libro. Los dos creen estar dando amor, los dos están usando su propio idioma, y los dos producen en el otro exactamente el efecto contrario al que buscaban. Eso, en un matrimonio, puede durar veinte años.",
        },
        {
          forma: "texto",
          texto:
            "Otra idea suya es el marcador de puntos. Sostiene que ellas apuntan un punto por cada gesto, sea grande o pequeño: una flor vale lo mismo que un viaje. Y que ellos creen que un gesto grande vale por muchos pequeños, y por eso hacen uno al año y esperan crédito durante meses.",
        },
        {
          forma: "texto",
          texto:
            "De ahí saca una recomendación práctica que es la más aplicable de todo el libro y que además está bien fundada: muchos gestos pequeños y frecuentes valen más que uno grande y raro. Eso sí lo confirma la investigación sobre parejas, aunque por otras razones distintas de las suyas.",
        },
        {
          forma: "texto",
          texto:
            "El libro incluye también un método concreto, la carta de amor, para las discusiones. Consiste en escribir por escrito y en este orden lo que uno siente: primero el enfado, luego la tristeza, luego el miedo, luego el arrepentimiento y por último el amor y lo que se pide.",
        },
        {
          forma: "arte",
          texto:
            "Ese ejercicio funciona, y funciona por un motivo que Gray no explica bien: obliga a pasar de la queja general a una petición concreta, y obliga a nombrar la emoción que hay debajo del enfado, que casi siempre es miedo o tristeza.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Añade dos listas de seis necesidades para cada sexo. Ellas necesitarían cariño, comprensión, respeto, devoción, validación y seguridad; ellos, confianza, aceptación, aprecio, admiración, aprobación y ánimo. Cada necesidad de una lista, dice, se corresponde con una de la otra.",
        },
        {
          forma: "texto",
          texto:
            "Esas listas no vienen de ningún estudio y suenan a horóscopo, y aun así tienen un efecto útil: dan vocabulario. Mucha gente sabe que está insatisfecha y no sabe decir de qué, y una lista de doce palabras concretas es mejor punto de partida que la frase de que algo no va bien.",
        },
        {
          forma: "texto",
          texto:
            "Antes de pasar a la crítica conviene dejar clara una cosa. La observación de fondo —que uno se retira y el otro persigue, y que cada movimiento empeora el del otro— no se la inventó Gray y es correcta. Está descrita en la investigación desde los años setenta.",
        },
        {
          forma: "texto",
          texto:
            "Tiene incluso nombre técnico: patrón de demanda y retirada, y es uno de los hallazgos más sólidos que existen sobre conflicto de pareja. Aparece en estudios de países muy distintos y predice insatisfacción y ruptura de manera bastante fiable.",
        },
        {
          forma: "texto",
          texto:
            "Ese patrón se describe así: uno de los dos plantea un tema, pide un cambio y sube la intensidad para conseguir respuesta; el otro se cierra, cambia de tema o se va. Cuanto más insiste el primero, más se cierra el segundo, y cuanto más se cierra, más insiste el primero.",
        },
        {
          forma: "texto",
          texto:
            "Lo que lo hace tan destructivo es que cada uno experimenta su propia conducta como una reacción razonable a la del otro, y las dos lo son. Nadie está actuando de mala fe, y el resultado es un mecanismo que se alimenta a sí mismo y que ninguno de los dos puede parar solo.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una asimetría fisiológica documentada que da algo de razón a Gray, aunque no la que él cree. En el laboratorio, durante una discusión, los hombres tienden a alcanzar antes un estado de activación intensa y tardan más en recuperar el pulso normal.",
        },
        {
          forma: "texto",
          texto:
            "A eso se le llama inundación, y explica por qué a alguien le puede resultar imposible seguir hablando: no está fingiendo indiferencia, está con ciento veinte pulsaciones intentando no decir algo irreparable. Ahí la retirada es defensa, y la instrucción de dejarle salir solo tiene sentido.",
        },
        {
          forma: "texto",
          texto:
            "La versión que sí funciona de ese consejo, y que Gray no da, es concreta: quien se retira debe decir que necesita parar y cuándo va a volver, y volver de verdad. Retirarse sin fecha es un abandono; retirarse veinte minutos y volver es una pausa.",
        },
        {
          forma: "texto",
          texto:
            "Es decir: Gray describe un fenómeno real.",
        },
        {
          forma: "texto",
          texto:
            "Es decir: Gray describe un fenómeno real.",
        },
        {
          forma: "texto",
          texto:
            "Lo que falla es su explicación de por qué ocurre.",
        },
        {
          forma: "texto",
          texto:
            "Y esa explicación se puede comprobar.",
        },
      ],
    },

    {
      titulo: "Lo que dicen los datos sobre las diferencias",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 2005, la psicóloga Janet Hyde publicó un trabajo que revisaba cuarenta y seis metaanálisis anteriores sobre diferencias psicológicas entre sexos, es decir, un resumen de resúmenes que cubría miles de estudios y cientos de miles de participantes.",
        },
        {
          forma: "texto",
          texto:
            "Su conclusión, que se conoce como la hipótesis de la similitud de género, es que en la gran mayoría de las variables medidas —comunicación, capacidad matemática, liderazgo, autoestima, empatía medida por rendimiento— las diferencias entre sexos son pequeñas o nulas.",
        },
        {
          forma: "texto",
          texto:
            "Hay excepciones y conviene decirlas para no caer en el error contrario: algunas capacidades motoras como la velocidad de lanzamiento, la frecuencia de masturbación y las actitudes hacia el sexo ocasional sí muestran diferencias grandes y consistentes.",
        },
        {
          forma: "texto",
          texto:
            "Lo que no muestra diferencias grandes es precisamente todo lo que el libro necesita: cómo se comunica la gente, cuánto habla, cuánto empatiza y cómo gestiona los conflictos. Ahí la variación entre dos personas del mismo sexo es mucho mayor que la variación entre sexos.",
        },
        {
          forma: "clave",
          rotulo: "El dato del que todo el mundo se acuerda",
          frase: "La afirmación de que los hombres dicen unas siete mil palabras al día y las mujeres veinte mil circula por todas partes. Es falsa. En 2007 se publicó en Science un estudio con casi cuatrocientas personas que llevaron grabadoras encendidas durante días: unas dieciséis mil en los dos casos, sin diferencia significativa.",
        },
        {
          forma: "texto",
          texto:
            "Ese dato de las veinte mil palabras nunca tuvo una fuente. Se ha rastreado hasta folletos de terapia de pareja de los años noventa que se citaban entre sí, y varios autores conocidos lo repitieron en libros superventas hasta que se convirtió en algo que todo el mundo sabe.",
        },
        {
          forma: "texto",
          texto:
            "El otro argumento habitual es neurológico: que el cuerpo calloso, el haz de fibras que une los dos hemisferios, es mayor en las mujeres, y que de ahí vendría su supuesta manera más conectada de pensar. Conviene mirar de dónde sale esa afirmación.",
        },
        {
          forma: "texto",
          texto:
            "Sale de un estudio de 1982 hecho con catorce cerebros. Catorce. Cuando se hizo un metaanálisis en 1997 con varias decenas de estudios posteriores y se corrigió por el tamaño total del cerebro, la diferencia desapareció. Es uno de los datos zombis más resistentes de la divulgación.",
        },
        {
          forma: "texto",
          texto:
            "Con la empatía pasa algo todavía más interesante y que conviene entender bien. Cuando se pregunta a la gente cuánto empatiza, las mujeres puntúan bastante más alto. Cuando se les pone una prueba de rendimiento real, identificando emociones ajenas, la diferencia se encoge muchísimo.",
        },
        {
          forma: "texto",
          texto:
            "Ese contraste entre lo que la gente dice de sí misma y lo que hace es la firma de una expectativa social, no de una capacidad distinta. Y hay experimentos que lo confirman: si se paga por acertar, la diferencia entre hombres y mujeres se reduce todavía más.",
        },
        {
          forma: "texto",
          texto:
            "Ahora viene el hallazgo que remata la discusión, y es elegante. Si el patrón de que él se retira y ella insiste fuera cosa de la naturaleza masculina y femenina, debería mantenerse igual sea cual sea el asunto de la discusión. Y no se mantiene.",
        },
        {
          forma: "arte",
          texto:
            "Cuando el cambio lo pide ella, ella demanda y él se retira, como dice el libro. Cuando el cambio lo pide él, se invierte: él demanda y ella se retira. El patrón no sigue al sexo, sigue a quién quiere que las cosas cambien.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Eso lo estableció un trabajo experimental de principios de los noventa y se ha replicado después. Y es demoledor para Marte y Venus, porque conserva intacta la observación de Gray y sustituye su explicación por otra que además dice qué hacer.",
        },
        {
          forma: "texto",
          texto:
            "Porque si el que se retira es simplemente el que está cómodo con las cosas como están, entonces la retirada no es un rasgo de carácter que haya que respetar: es una posición en una negociación, y quien la ocupa tiene el poder de que no cambie nada sin hacer nada.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está el problema político del libro, que es real aunque suene grandilocuente. Si las diferencias son de planeta, no se negocian; se acatan. Y quien sale ganando de que no se negocien es siempre el que está satisfecho con el reparto actual.",
        },
        {
          forma: "texto",
          texto:
            "Es exactamente el argumento contra el que escribió Simone de Beauvoir en El segundo sexo, que está en esta biblioteca: que llamar naturaleza a una costumbre es la manera más eficaz de dejarla fuera de discusión, porque contra la naturaleza no se puede protestar.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar hasta dónde llega esta crítica, para no pasarse de frenada. No dice que no existan diferencias entre sexos ni que la biología no cuente: dice que en las capacidades de las que habla este libro las diferencias medidas son pequeñas y las semejanzas enormes.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una manera precisa de expresarlo que ayuda a pensar. En casi todas estas variables, las dos distribuciones se solapan en más de un ochenta por ciento: si eliges a un hombre y a una mujer al azar, la probabilidad de que él puntúe más alto apenas se separa del cincuenta por ciento.",
        },
        {
          forma: "texto",
          texto:
            "Eso significa que el sexo de alguien te dice muy poco sobre cómo se comunica, y que conocerle a él te lo dice casi todo. Que es exactamente lo contrario de lo que propone un libro cuyo consejo central es deducir a la persona a partir de su planeta.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un efecto que la investigación ha medido y que agrava el problema: cuando a alguien se le recuerda un estereotipo sobre su grupo antes de una tarea, su rendimiento y su conducta se desplazan hacia ese estereotipo. Los manuales de diferencias no solo describen: también empujan.",
        },
        {
          forma: "texto",
          texto:
            "Con todo esto, el libro parecería liquidado.",
        },
        {
          forma: "texto",
          texto:
            "Con todo esto, el libro parecería liquidado.",
        },
        {
          forma: "texto",
          texto:
            "Y queda la pregunta que de verdad importa.",
        },
        {
          forma: "texto",
          texto:
            "Por qué le ha servido a tanta gente.",
        },
      ],
    },

    {
      titulo: "Por qué funciona un libro que se equivoca",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Descartar el testimonio de millones de lectores diciendo que están sugestionados es cómodo y es mal análisis. Si un libro con una teoría falsa produce mejoras reales, entonces la mejora viene de otra parte, y localizar esa otra parte es lo interesante.",
        },
        {
          forma: "texto",
          texto:
            "El primer mecanismo es el más potente y se llama reatribución. En una pareja en conflicto, cada uno explica la conducta del otro por su carácter o por su falta de amor: no me escucha porque le doy igual, me critica porque no me valora, se calla porque me castiga.",
        },
        {
          forma: "texto",
          texto:
            "Esas explicaciones son las más dañinas que existen, porque no dejan salida: si el otro es así, no hay nada que hacer. Lo que hace Marte y Venus es sustituirlas por una explicación que no acusa a nadie: no se calla para castigarte, es que está en su cueva.",
        },
        {
          forma: "clave",
          rotulo: "La misma conducta, otra historia",
          frase: "Está en su cueva y no me quiere describen exactamente lo mismo desde fuera. Pero la primera permite esperar sin resentimiento y la segunda obliga a exigir explicaciones. Cambiar la historia que uno se cuenta cambia lo que hace después, y eso sí cambia la relación.",
        },
        {
          forma: "texto",
          texto:
            "El segundo mecanismo es la concreción. La mayoría de las quejas de pareja se formulan en abstracto: no me haces caso, siempre estás igual, ya no eres el de antes. Contra eso no se puede hacer nada, porque no describe ninguna conducta que se pueda cambiar el martes.",
        },
        {
          forma: "texto",
          texto:
            "El libro, con sus listas y sus ejercicios, obliga a bajar al detalle: quiero que me preguntes cómo me ha ido antes de contarme tu día; quiero que no me des consejos hasta que te los pida. Eso ya son peticiones, y una petición se puede aceptar, negociar o rechazar.",
        },
        {
          forma: "texto",
          texto:
            "El tercero es el permiso. Muchos lectores cuentan que lo que les dio el libro fue autorización para pedir algo que llevaban años sin pedir por parecerles exigente o ridículo. Al presentarlo como una necesidad natural de su sexo, deja de dar vergüenza pedirlo.",
        },
        {
          forma: "texto",
          texto:
            "El cuarto es el más simple y el que explica que casi todos los libros de pareja funcionen a corto plazo: dos personas que adoptan el mismo marco, sea cual sea, tienen por fin un idioma común para hablar de lo que les pasa. Y hablar de eso con calma ya es la mitad del trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Es el mismo efecto que produce cualquier terapia de pareja mediocre, y es la razón de que los estudios comparativos encuentren beneficios parecidos en enfoques teóricamente incompatibles. Lo que cura no siempre es la teoría: a veces es el hecho de sentarse a usarla.",
        },
        {
          forma: "texto",
          texto:
            "Dicho todo eso, hay que contar el precio, porque lo tiene y no es pequeño. El esencialismo es un arma de doble filo: el mismo argumento que sirve para tener paciencia con el otro sirve para no cambiar nunca, y en la práctica se usa muchísimo más para lo segundo.",
        },
        {
          forma: "arte",
          texto:
            "Si retirarse es lo que hacen los hombres, entonces retirarse deja de ser algo que este hombre concreto hace y se puede discutir. Se convierte en un rasgo de especie, y pedirle que salga de la cueva pasa a ser como pedirle que mida diez centímetros más.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Hay una versión peor de ese uso y hay que nombrarla. La lógica de que no puede evitarlo funciona igual de bien para justificar el silencio prolongado como castigo, la falta de cualquier trabajo doméstico o la negativa a hablar de un problema durante años.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una parte que en 1992 pasaba desapercibida y hoy salta a la vista: el libro no contempla ninguna pareja que no sea un hombre y una mujer, y todo su aparato explicativo se desmonta solo en cuanto se aplica a dos personas del mismo sexo.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí hay un dato que resulta letal para la teoría. Las parejas del mismo sexo muestran el mismo patrón de demanda y retirada, con la misma frecuencia, y con la misma correlación con la insatisfacción. Si fuera cosa de Marte y Venus, eso no debería ocurrir.",
        },
        {
          forma: "texto",
          texto:
            "De hecho la investigación sobre parejas del mismo sexo encuentra algo aún más interesante: discuten por los mismos temas, en las mismas proporciones, y con niveles de satisfacción parecidos. Lo que cambia es que reparten las tareas de forma más igualitaria, porque no hay guion previo.",
        },
        {
          forma: "texto",
          texto:
            "Ese es probablemente el mejor argumento contra el libro y no aparece en ninguna reseña de 1992: cuando desaparece la asignación automática de papeles por sexo, los conflictos siguen existiendo y hay que negociarlos uno a uno. Que es lo que Gray dice que no hace falta hacer.",
        },
        {
          forma: "texto",
          texto:
            "Otra objeción práctica es de dosis. El libro promete que entender las diferencias basta, y la investigación sobre intervenciones en pareja dice lo contrario: la comprensión sin cambio de conducta no aguanta, y los efectos de cualquier programa se disipan si no se practica.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una última cosa que el libro no menciona nunca y que un lector debe tener presente. Hay situaciones en las que el problema de una pareja no es de traducción: hay control económico, aislamiento, amenazas o violencia, y ningún ejercicio de comunicación es la respuesta a eso.",
        },
        {
          forma: "texto",
          texto:
            "Un marco que explica cualquier conducta como una diferencia natural es especialmente malo justo ahí, porque proporciona una explicación tranquilizadora para señales que no había que tranquilizar. Conviene saber dónde termina el alcance de un libro de autoayuda.",
        },
        {
          forma: "texto",
          texto:
            "La conclusión razonable no es tirar el libro ni recomendarlo sin avisos. Es quedarse con los ejercicios y cambiar la explicación: hay dos personas con estilos distintos de manejar el conflicto, y esos estilos se aprendieron y se pueden cambiar.",
        },
        {
          forma: "texto",
          texto:
            "La conclusión razonable no es tirar el libro ni recomendarlo sin avisos. Es quedarse con los ejercicios y cambiar la explicación: hay dos personas con estilos distintos de manejar el conflicto, y esos estilos se aprendieron y se pueden cambiar.",
        },
        {
          forma: "texto",
          texto:
            "Esa versión sirve para cualquier pareja, no le da a nadie una coartada biológica, y además coincide con lo que sí se ha medido en laboratorio durante cuarenta años.",
        },
        {
          forma: "texto",
          texto:
            "Porque esa investigación existe.",
        },
        {
          forma: "texto",
          texto:
            "Y se hizo en un apartamento con cámaras.",
        },
      ],
    },

    {
      titulo: "El apartamento con cámaras de Seattle",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En la Universidad de Washington, en Seattle, un psicólogo llamado John Gottman montó a partir de los años ochenta un laboratorio que en la prensa se conoció como el laboratorio del amor. Era un apartamento de verdad, con cocina, sofá y ventanas al lago.",
        },
        {
          forma: "texto",
          texto:
            "Las parejas pasaban allí un fin de semana viviendo normalmente, con cámaras grabando y con sensores midiéndoles el pulso, la conductancia de la piel y la agitación motora. Después, un equipo codificaba cada segundo de conversación con un sistema de decenas de categorías.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia con Gray no es de opinión: es que aquí hay medidas, sujetos seguidos durante años y un procedimiento que otros pueden repetir. Lo que salió de allí es lo mejor que tenemos sobre por qué unas parejas duran y otras no.",
        },
        {
          forma: "texto",
          texto:
            "El hallazgo más conocido son los cuatro comportamientos que mejor predicen la ruptura, a los que puso el nombre bíblico de los cuatro jinetes. Son la crítica, el desprecio, la actitud defensiva y lo que llamó amurallarse, que es dejar de responder por completo.",
        },
        {
          forma: "texto",
          texto:
            "La distinción entre queja y crítica es la más útil de las cuatro. Quejarse es hablar de una conducta concreta: me molesta que no hayas avisado de que llegabas tarde. Criticar es hablar del carácter: eres un desconsiderado, siempre igual, nunca piensas en nadie.",
        },
        {
          forma: "clave",
          rotulo: "El peor de los cuatro",
          frase: "El desprecio: los ojos en blanco, el sarcasmo, el tono de superioridad, el humor a costa del otro. Es el mejor predictor individual de divorcio de todos los que se han medido, y se asocia además con más enfermedades infecciosas en quien lo recibe.",
        },
        {
          forma: "texto",
          texto:
            "El segundo hallazgo es una proporción. En las parejas estables, durante una discusión, la relación entre interacciones positivas y negativas ronda cinco a uno. En las que acaban rompiendo, se acerca a uno a uno. No hace falta discutir menos: hace falta más de lo otro.",
        },
        {
          forma: "texto",
          texto:
            "Y lo positivo no significa cumplidos. Cuenta un gesto de asentir, tocar el brazo al pasar, una broma que rompe la tensión o simplemente ceder en una frase. Gottman lo llama intento de reparación, y sostiene que reconocerlo y aceptarlo es la habilidad decisiva.",
        },
        {
          forma: "texto",
          texto:
            "El tercer hallazgo es el que más ha cambiado la manera de ver esto, y no tiene que ver con las discusiones sino con los días normales. Lo llama ofertas de conexión: los pequeños intentos de captar la atención del otro, decenas de veces al día.",
        },
        {
          forma: "texto",
          texto:
            "Alguien mira por la ventana y dice que hay un pájaro raro en el árbol. Eso es una oferta. Frente a ella caben tres respuestas: girarse hacia el otro y contestar, ignorarla, o responder con fastidio. La proporción entre esas tres cosas es lo que construye una relación.",
        },
        {
          forma: "texto",
          texto:
            "En un seguimiento de parejas recién casadas a seis años, las que seguían juntas habían respondido girándose hacia el otro en torno al ochenta y seis por ciento de las ofertas registradas en el laboratorio. Las que se habían divorciado, alrededor de un tercio.",
        },
        {
          forma: "arte",
          texto:
            "Ese dato reordena la idea entera de lo que es una relación. Lo que la sostiene no son las conversaciones importantes ni los viajes: son cientos de microdecisiones diarias de levantar la vista cuando el otro dice algo sin importancia.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "El cuarto hallazgo es el más consolador y el menos conocido. Al analizar los temas de conflicto, encontró que alrededor de dos tercios de los desacuerdos de cualquier pareja son perpetuos: no tienen solución y van a seguir ahí dentro de veinte años.",
        },
        {
          forma: "texto",
          texto:
            "Son las diferencias de orden, de puntualidad, de cuánta familia política se aguanta, de cuánto sexo, de cuánto se sale. Y su conclusión es que las parejas felices no los resuelven: aprenden a hablar de ellos con humor y sin desprecio, y a convivir con el desacuerdo.",
        },
        {
          forma: "texto",
          texto:
            "Ahora toca la parte honrada, porque este trabajo también tiene sus problemas. La cifra que se repite en todas partes es que Gottman predice el divorcio con más de un noventa por ciento de acierto, y esa cifra hay que mirarla con lupa.",
        },
        {
          forma: "texto",
          texto:
            "Un análisis metodológico de 2001 firmado por Richard Heyman y Amy Slep mostró que en varios de aquellos estudios el modelo se ajustaba a los mismos datos que después decía predecir. Eso no es predecir: es describir hacia atrás y llamarlo pronóstico.",
        },
        {
          forma: "texto",
          texto:
            "Gottman ha respondido a esa crítica y ha matizado las cifras, y conviene tenerlo presente al leer sus libros de divulgación, que son bastante más rotundos que sus artículos. Lo observado —los jinetes, la proporción, las ofertas— aguanta; lo de la bola de cristal, no.",
        },
        {
          forma: "texto",
          texto:
            "Hay una segunda limitación que también hay que decir: la mayor parte de aquellas muestras eran de parejas estadounidenses, blancas, de clase media y casadas, y las réplicas en otros países y contextos son bastante más escasas de lo que la fama del laboratorio hace pensar.",
        },
        {
          forma: "texto",
          texto:
            "Y una tercera: observar muy bien lo que distingue a las parejas que duran no implica saber cómo convertir a una pareja del segundo grupo en una del primero. La investigación sobre terapia derivada de todo esto es mucho más delgada que la investigación descriptiva.",
        },
        {
          forma: "texto",
          texto:
            "Dicho eso, hay un consejo suyo que resiste todas las objeciones porque no depende de ninguna teoría: los primeros tres minutos de una discusión predicen bastante bien cómo va a terminar, y empezar con un reproche personal condena la conversación entera antes de que empiece.",
        },
        {
          forma: "texto",
          texto:
            "A eso lo llama arranque suave, y consiste en decir cómo te sientes tú, sobre qué situación concreta, y qué pides. Tres piezas, en ese orden, sin la palabra siempre y sin la palabra nunca. Es el ejercicio con mejor relación entre lo poco que cuesta y lo mucho que cambia.",
        },
        {
          forma: "texto",
          texto:
            "Con todo eso encima de la mesa, la comparación se resuelve sola. Marte y Venus acierta al describir un baile y se equivoca al explicarlo, y su explicación es justamente la que le quita a la gente la posibilidad de cambiar el baile.",
        },
        {
          forma: "texto",
          texto:
            "Lo de Seattle describe lo mismo sin planetas.",
        },
        {
          forma: "texto",
          texto:
            "Y su conclusión práctica cabe en una línea.",
        },
        {
          forma: "texto",
          texto:
            "Levanta la vista cuando el otro te habla del pájaro.",
        },
      ],
    },
  ],
};

export const SENTIRSE_BIEN: Resumen = {
  id: "sentirse-bien",
  titulo: "Sentirse bien",
  autor: "David D. Burns",
  ano: 1980,
  gancho:
    "Es el único libro de autoayuda que se ha probado en ensayos clínicos como si fuera un medicamento. Y salió bien. Lo raro es que su autor acabó publicando datos contra la teoría que lo sostiene.",
  porQue:
    "Porque es el manual que puso la terapia cognitiva en manos de cualquiera, con un lápiz y una hoja de tres columnas. Y porque su historia enseña algo que casi ningún libro cuenta: que un ejercicio puede funcionar aunque la explicación de por qué funciona sea falsa.",
  partes: [
    {
      titulo: "El residente que quería darle la razón a Freud",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "A principios de los sesenta, en el hospital de la Universidad de Pensilvania, un psiquiatra de formación psicoanalítica llamado Aaron Beck se pasaba las mañanas recogiendo los sueños de sus pacientes deprimidos. No buscaba refutar nada. Buscaba pruebas de que Freud tenía razón.",
        },
        {
          forma: "texto",
          texto:
            "La teoría que quería confirmar era la de la agresión vuelta hacia dentro: el deprimido estaría castigándose a sí mismo con una hostilidad que no se atreve a dirigir a otro. Si eso fuera cierto, los sueños tendrían que estar llenos de rabia, de violencia, de venganza reprimida.",
        },
        {
          forma: "texto",
          texto:
            "Beck publicó los resultados con Ward en 1961 y no había tal cosa. Los sueños de los pacientes deprimidos iban de pérdidas, de exclusión, de fracaso y de abandono. Eran tristes, no furiosos. Y se parecían muchísimo a lo que aquellos mismos pacientes contaban despiertos.",
        },
        {
          forma: "arte",
          texto:
            "Vino después un experimento aún más incómodo para la teoría. Si el deprimido necesita sufrir, el éxito debería empeorarlo. Beck y sus colaboradores les dieron una tarea y les dijeron que la habían hecho bien: en vez de hundirse, subieron sus expectativas y mejoraron en la siguiente.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La conclusión que sacó de ahí es la que cambia el siglo. El deprimido no se está castigando: se está creyendo algo. Tiene una idea muy concreta y muy negativa sobre sí mismo, sobre el mundo y sobre lo que le espera, y esa idea se puede escuchar, escribir y comprobar.",
        },
        {
          forma: "texto",
          texto:
            "El precio profesional fue alto. Beck ha contado que su solicitud para formar parte del instituto psicoanalítico fue rechazada, y que le llegaron a decir que su empeño en hacer investigación era en sí mismo una señal de resistencia. Trabajó bastantes años al margen del gremio.",
        },
        {
          forma: "texto",
          texto:
            "En los setenta llegó a su servicio un residente joven que venía de la investigación biológica y que escribía muy bien: David Burns. Beck tenía la teoría, el método y los primeros ensayos. Lo que no tenía era a nadie capaz de contarlo fuera de una revista científica.",
        },
        {
          forma: "clave",
          rotulo: "La idea entera",
          frase: "No te hunde lo que te pasa: te hunde lo que te dices sobre lo que te pasa. Y eso, a diferencia de lo que te pasa, cabe en un papel.",
        },
        {
          forma: "texto",
          texto:
            "La idea no era nueva y Beck lo sabía. En la primera página citaba a Epicteto: a los hombres no los perturban las cosas, sino las opiniones que tienen sobre las cosas. Está en el «Enquiridión», que también anda por esta biblioteca, escrito hacia el año ciento veinticinco.",
        },
        {
          forma: "texto",
          texto:
            "Conviene ver dónde se separan, porque no dicen lo mismo. Epicteto propone cambiar el juicio porque el resto no depende de ti, y eso es una forma de aceptación. Beck propone cambiar el juicio porque el juicio suele ser sencillamente falso, y eso es una forma de comprobación.",
        },
        {
          forma: "texto",
          texto:
            "Tampoco era el primero del siglo. Albert Ellis llevaba desde 1955 haciendo algo muy parecido con su terapia racional emotiva, y le puso a la tiranía de los «debería» el nombre impagable de «musturbación». Burns lo reconoce en el libro, cosa que casi ningún resumen posterior repite.",
        },
        {
          forma: "arte",
          texto:
            "En 1980 Burns publicó «Feeling Good» en edición de bolsillo, en la mesa de novedades del supermercado y no en el catálogo de una editorial universitaria. Esa decisión, que parece de marketing, es la que convierte un procedimiento clínico en algo que alguien puede hacer solo en su cocina.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Se han vendido más de cuatro millones de ejemplares. Y cuando John Norcross encuestó a psicólogos estadounidenses sobre qué libros de autoayuda recomendaban a sus pacientes, en 1994 y otra vez en 2003, este quedó el primero de la lista las dos veces.",
        },
        {
          forma: "texto",
          texto:
            "Lo verdaderamente radical en 1980 no era la teoría, sino el destinatario. El libro le dice al lector que puede hacer esto por su cuenta, con un bolígrafo, sin tumbarse en ningún diván durante seis años y sin esperar a que una pastilla le arregle la química del cerebro.",
        },
        {
          forma: "texto",
          texto:
            "Empieza además con un cuestionario y con una instrucción que suena a laboratorio: puntúate hoy y vuelve a puntuarte cada semana. Antes de proponer ninguna técnica, el libro instala la costumbre de medir, que es lo que permite saber si algo está sirviendo o no.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una cosa que el libro no es, por mucho que se le atribuya: no es pensamiento positivo. Burns lo repite con impaciencia a lo largo de trescientas páginas. El objetivo no es pensar bonito, es pensar exacto. Son cosas distintas y a menudo incompatibles.",
        },
        {
          forma: "texto",
          texto:
            "Esa distinción es la primera que pierde el lector apresurado. La tercera columna de la hoja no pide una frase más amable: pide una frase más verdadera. A veces la frase verdadera es peor que la que traías, y el método exige escribirla igual.",
        },
        {
          forma: "texto",
          texto:
            "El armazón del libro es sencillo: primero la teoría, después el catálogo de errores de pensamiento, después los ejercicios, y a partir de ahí capítulos temáticos sobre la ira, la culpa, la necesidad de aprobación, la dependencia del amor, el trabajo como medida del valor y la postergación.",
        },
        {
          forma: "texto",
          texto:
            "Y una parte final sobre fármacos que ya en 1980 era contracorriente. Burns escribía que las teorías biológicas de la depresión estaban lejos de estar demostradas. En las ediciones posteriores y en sus libros recientes lo dice bastante más claro y bastante más alto.",
        },
        {
          forma: "texto",
          texto:
            "El contraste con «Introducción al psicoanálisis», que también está aquí, no es solo teórico: es económico. El método de Freud necesita años y un intérprete cualificado. El de Beck necesita doce semanas y un formulario. Eso explica por qué uno se quedó en las consultas y el otro llegó a la sanidad pública.",
        },
        {
          forma: "texto",
          texto:
            "Ayudó también que 1980 fuera el año del DSM-III, el manual que redefinió la depresión como una lista de síntomas contables en lugar de como un conflicto interno que había que interpretar. El libro y el manual empujaban en la misma dirección sin haberse puesto de acuerdo.",
        },
        {
          forma: "texto",
          texto:
            "Burns no fue el teórico de nada de esto.",
        },
        {
          forma: "texto",
          texto:
            "Fue el que lo escribió para que se entendiera sin haber estudiado.",
        },
        {
          forma: "texto",
          texto:
            "De las dos tareas, resultó ser la difícil.",
        },
      ],
    },
    {
      titulo: "Las diez trampas del cuaderno",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Imagina que das una charla de veinte minutos. Al terminar, dieciocho personas se acercan a felicitarte y una comenta, de pasada, que se le hizo un poco larga. Esa noche, tumbado en la cama, la única frase que suena en tu cabeza es la última.",
        },
        {
          forma: "texto",
          texto:
            "Burns sostiene que eso no es mala suerte ni carácter: es una operación reconocible, que tiene nombre y que se repite. En el capítulo tres enumera diez. Esa lista es probablemente la página más fotocopiada de la historia de la autoayuda.",
        },
        {
          forma: "texto",
          texto:
            "La primera es el pensamiento de todo o nada. Solo hay dos casillas, perfecto y desastre, y como perfecto casi nunca ocurre, todo cae en la segunda. Es la que convierte una galleta de más en «ya he roto la dieta, para qué seguir».",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la generalización excesiva, que se detecta por dos palabras: siempre y nunca. Un no de una persona concreta un martes concreto se transforma, sin que nadie lo autorice, en una ley general sobre cómo te va a ir el resto de tu vida.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es el filtro mental, que es lo de la charla. De veinte datos disponibles la cabeza selecciona uno, lo pone en primer plano y apaga los otros diecinueve. No es que mienta: es que ha decidido de antemano qué parte de la verdad va a mirar.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta va un paso más allá y es más activa: descalificar lo positivo. Aquí los otros diecinueve datos no se ignoran, se desactivan uno a uno. «Lo dijeron por educación.» «Salió bien de milagro.» «Cualquiera lo habría hecho.» Es un trabajo, y agota.",
        },
        {
          forma: "arte",
          texto:
            "La quinta son las conclusiones precipitadas, y viene en dos sabores. Leer la mente: dar por hecho que sabes lo que el otro piensa de ti sin haberlo preguntado. Y adivinar el futuro: dar por hecho cómo va a salir algo y decidir en consecuencia que no merece la pena intentarlo.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "La sexta la bautizó con una imagen que se recuerda sola: el truco de los prismáticos. Los errores propios se miran por el lado que agranda y los logros propios por el lado que empequeñece, y con los ajenos se hace exactamente lo contrario.",
        },
        {
          forma: "texto",
          texto:
            "La séptima es el razonamiento emocional: me siento inútil, luego soy inútil. Se toma un estado de ánimo como si fuera un informe sobre la realidad. Es la trampa más difícil de ver desde dentro, porque la emoción llega con una convicción que ningún argumento tiene.",
        },
        {
          forma: "texto",
          texto:
            "La octava son los «debería», la herencia de Ellis. Apuntados hacia dentro producen culpa; apuntados hacia fuera, indignación permanente contra un mundo que se empeña en no funcionar como debería. Es la misma frase con el sujeto cambiado y dos emociones distintas.",
        },
        {
          forma: "texto",
          texto:
            "La novena es etiquetar, y es la más barata de detectar porque cambia una palabra. «He fallado» describe algo que ocurrió el jueves. «Soy un fracasado» describe a una persona entera y para siempre. Un verbo se ha convertido en un sustantivo y ya no hay nada que hacer.",
        },
        {
          forma: "texto",
          texto:
            "La décima es la personalización: hacerse responsable de algo que no controlabas. La madre que recibe las notas de su hijo y concluye que ha fracasado como madre no ha razonado mal por falta de datos, sino porque se ha puesto de causa única de un asunto con veinte causas.",
        },
        {
          forma: "clave",
          rotulo: "Lo que tienen en común",
          frase: "Casi todas hacen la misma operación: convertir un dato en una sentencia. El trabajo consiste en devolver la sentencia a dato.",
        },
        {
          forma: "texto",
          texto:
            "Aquí conviene decir dónde flojea. Esa lista no salió de ningún experimento: salió de la consulta, de años oyendo a pacientes y agrupando lo que decían. Y las categorías se solapan bastante. Etiquetar es generalizar aplicado a una persona; el filtro mental y descalificar lo positivo son primos.",
        },
        {
          forma: "texto",
          texto:
            "Burns responde a eso con honradez: dice que da igual cuál elijas, que lo importante es ponerle nombre a lo que estás haciendo. Pero eso también significa que el número diez es arbitrario. De hecho circulan versiones de la misma lista con doce distorsiones y con quince.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una confusión que este resumen quiere deshacer, porque está por todas partes. Esta lista no es la de «Pensar rápido, pensar despacio», aunque se parezcan. Los sesgos de Kahneman se midieron en laboratorio con gente sana y con números; las distorsiones de Burns se observaron en consulta con palabras.",
        },
        {
          forma: "texto",
          texto:
            "Lo interesante de comparar las dos listas es otra cosa. Los sesgos de Kahneman los tenemos todos y no son síntoma de nada. Así que estas diez trampas tampoco son un pensamiento averiado que la gente sana evita: son el pensamiento de cualquiera, apuntado a uno mismo y repetido mucho.",
        },
        {
          forma: "texto",
          texto:
            "Otra cosa que el libro no dice, por mucho que se le atribuya: no dice que las emociones sean irracionales ni que haya que ignorarlas. Dice que la emoción se deduce fielmente del pensamiento, y que por tanto es una información fiable sobre lo que estás pensando, no sobre el mundo.",
        },
        {
          forma: "texto",
          texto:
            "«El error de Descartes», que también está en esta biblioteca, le complica bastante la vida a ese punto. Los pacientes de Damasio con la corteza ventromedial dañada conservaban la lógica intacta y arruinaban su vida igualmente, porque la emoción forma parte del juicio en vez de estorbarlo.",
        },
        {
          forma: "texto",
          texto:
            "De modo que «no razones desde la emoción» es una buena regla clínica para alguien deprimido y una mala teoría general de la mente. El problema es que Burns la escribe como si fuera lo segundo, y ahí es donde el libro se pasa de frenada.",
        },
        {
          forma: "texto",
          texto:
            "Queda un tercer punto flojo, y es el más serio. Todo el aparato da por hecho que el pensamiento negativo es falso. A veces es verdad. A veces el trabajo es malo de verdad, la relación se acabó de verdad y el diagnóstico es el que es.",
        },
        {
          forma: "texto",
          texto:
            "Burns lo contempla y su respuesta es razonable: incluso ante un problema real hay una frase más exacta que la que estás usando. Pero le dedica tres páginas a eso y ciento cincuenta a las distorsiones, y el lector sale con la proporción cambiada.",
        },
        {
          forma: "texto",
          texto:
            "El lector aprende a llevarle la contraria a su cabeza.",
        },
        {
          forma: "texto",
          texto:
            "Aprender a saber cuándo su cabeza tiene razón viene en otro libro.",
        },
      ],
    },
    {
      titulo: "Tres columnas y un lápiz",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El corazón del libro es una hoja de papel dividida en tres columnas. No hay aplicación, ni audio, ni nada que comprar. Es una libreta abierta en la mesa de la cocina un martes por la noche, que es más o menos donde ocurre la salud mental real.",
        },
        {
          forma: "texto",
          texto:
            "En la primera columna se escribe el pensamiento automático tal cual sonó, con sus palabras exactas y sin suavizarlo, y al lado un porcentaje: cuánto te lo crees ahora mismo, de cero a cien. Ese número es la mitad del ejercicio y casi nadie lo pone.",
        },
        {
          forma: "texto",
          texto:
            "En la segunda se nombra la trampa: filtro mental, etiqueta, adivinar el futuro. En la tercera se escribe una respuesta racional, y al terminar se vuelve a puntuar la creencia en el pensamiento original. Si no ha bajado, la respuesta no valía y hay que buscar otra.",
        },
        {
          forma: "arte",
          texto:
            "La pregunta obvia es por qué escribirlo y no pensarlo. La respuesta es que la misma frase suena distinta fuera de la cabeza. «Soy un desastre» sobrevive perfectamente dentro; en un papel, con «he llegado tarde dos veces este mes» al lado, se ve el tamaño real de lo que se está afirmando.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Hay una regla que Burns repite y que separa a quien lo hace bien de quien lo abandona: la respuesta racional tiene que ser algo que te creas al menos a medias. Una frase de manual que no te crees no rebaja nada, y encima confirma que esto no funciona.",
        },
        {
          forma: "texto",
          texto:
            "Para los «debería» propone otro formato de dos columnas, en el que a un lado va la ventaja de mantener esa exigencia y al otro lo que cuesta. Es un ejercicio ingrato, porque casi siempre resulta que la exigencia tiene una ventaja real y por eso lleva veinte años ahí.",
        },
        {
          forma: "texto",
          texto:
            "Para leer la mente propone algo tan simple que da vergüenza: la encuesta. En vez de discutir durante semanas sobre lo que tu cuñado piensa de ti, preguntárselo. La objeción evidente es que la gente miente por educación, y el libro contesta que aun así miente menos que tu imaginación.",
        },
        {
          forma: "texto",
          texto:
            "Y luego está la técnica más útil de todo el libro, la flecha vertical. Coges el pensamiento y preguntas: si eso fuera verdad, ¿qué significaría? A la respuesta, la misma pregunta. Y otra vez. Cuatro o cinco pisos hacia abajo se llega a algo que no habías visto nunca escrito.",
        },
        {
          forma: "clave",
          rotulo: "La flecha vertical",
          frase: "Debajo de cada pensamiento hay una condición con la forma «valgo si…». La mayoría de la gente ha vivido cuarenta años obedeciendo una frase que jamás ha leído entera.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo sobre postergación trae la hoja antiprocrastinación, que es una apuesta con uno mismo. Antes de empezar una tarea, apuntas del cero al cien lo difícil que crees que va a ser y lo satisfactoria que crees que va a resultar. Al terminar, apuntas lo que ha sido de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Al cabo de dos semanas el patrón salta a la vista: sobrevaloramos la dificultad y subestimamos la satisfacción, sistemáticamente y por mucho. No es una moraleja, es un registro con fechas, y por eso convence de un modo que ningún consejo consigue.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la frase que más se le cita: la motivación no viene antes de la acción, viene después. Esperar a tener ganas para empezar es esperar a que el efecto llegue antes que la causa. Empiezas mal y con desgana, y las ganas aparecen en el minuto diez.",
        },
        {
          forma: "texto",
          texto:
            "Hay una última herramienta que parece menor y no lo es: el programa de actividades, una rejilla por horas donde apuntas lo que haces y le pones dos notas de cero a cinco, una de dominio y otra de placer. Viene directamente del manual clínico de Beck.",
        },
        {
          forma: "texto",
          texto:
            "Conviene retenerla, porque es la pieza menos cognitiva del libro entero y en el último capítulo va a resultar ser la que más trabajo estaba haciendo. Ahí no se discute con ningún pensamiento: solo se planifica el jueves y se anota qué tal fue.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo sobre la ira aplica lo mismo a los «debería» dirigidos al prójimo, y tiene una observación buena: casi todo enfado empieza con una expectativa que nadie firmó. El otro no ha incumplido un acuerdo, ha incumplido una regla tuya que no conocía.",
        },
        {
          forma: "texto",
          texto:
            "En el de la culpa distingue entre el remordimiento, que es proporcionado y va sobre un acto concreto, y la culpa, que es desproporcionada y va sobre la persona entera. Es exactamente la distinción que treinta años después se hizo famosa con otros nombres: culpa y vergüenza.",
        },
        {
          forma: "texto",
          texto:
            "Los capítulos sobre la adicción a la aprobación, la adicción al amor y la ecuación entre valer y producir son, para mi gusto, lo mejor del libro. Ahí no está discutiendo con pensamientos sueltos: está desmontando tres contratos silenciosos que muchísima gente firmó de niña.",
        },
        {
          forma: "texto",
          texto:
            "Para eso incluye una versión de la escala de actitudes disfuncionales que Weissman y Beck construyeron en 1978, con la que uno puede localizar cuáles de esas condiciones silenciosas lleva puestas. Es la parte del libro que más se salta el lector y la que más le habría servido.",
        },
        {
          forma: "texto",
          texto:
            "Lo que ha envejecido mal son los ejemplos. Amas de casa, ejecutivos con secretaria, un mundo sin móviles y sin comparación permanente con la vida ajena. Lo que en 2026 alimenta la rumiación no aparece en ninguna página, y no es un detalle menor.",
        },
        {
          forma: "texto",
          texto:
            "Y ha envejecido peor el capítulo de fármacos de la edición de 1980, que habla de tricíclicos e inhibidores de la monoaminooxidasa, con la lista de quesos y vinos prohibidos. La revisión de 1999 añadió los inhibidores de la recaptación de serotonina; el capítulo original es ya un documento histórico.",
        },
        {
          forma: "texto",
          texto:
            "Lo que no ha envejecido es el formato. Una hoja que rellenas tú, con tu letra, sobre algo que te pasó a ti esta semana. Cuarenta y seis años después, esa hoja sigue imprimiéndose en las consultas de medio mundo prácticamente igual que en el libro.",
        },
        {
          forma: "texto",
          texto:
            "Queda una verdad incómoda que el libro no dice y conviene decir aquí: rellenar una hoja de estas cuesta entre veinte y cuarenta minutos de concentración, y la falta de concentración y de energía es justamente uno de los síntomas de lo que se pretende tratar.",
        },
        {
          forma: "texto",
          texto:
            "Por eso el ejercicio más importante es el más pequeño.",
        },
        {
          forma: "texto",
          texto:
            "El que consigues hacer un martes malo a las once de la noche.",
        },
      ],
    },
    {
      titulo: "Lo que dijeron los ensayos",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1977, cuarenta y un pacientes ambulatorios con depresión entraron en un estudio en Pensilvania. La mitad recibió terapia cognitiva durante doce semanas; la otra mitad, imipramina, que era el antidepresivo estándar de la época. Lo firmaban Rush, Beck, Kovacs y Hollon.",
        },
        {
          forma: "texto",
          texto:
            "Ganó la terapia: más mejoría y menos abandonos. Era la primera vez que una terapia de conversación superaba a un fármaco en un ensayo aleatorizado de depresión, y ese solo artículo explica por qué la terapia cognitiva existe hoy como institución y no como rareza.",
        },
        {
          forma: "texto",
          texto:
            "Ahora el detalle que casi nunca se cuenta. En aquel ensayo la medicación se fue retirando durante las dos últimas semanas, justo antes de la medición final. Comparar una terapia que sigue administrándose con un fármaco al que se le está quitando la dosis inclina el resultado antes de empezar.",
        },
        {
          forma: "arte",
          texto:
            "En 1989 llegó la prueba de verdad: el gran ensayo del Instituto Nacional de Salud Mental, doscientos cincuenta pacientes en tres centros y cuatro ramas, terapia cognitiva, terapia interpersonal, imipramina con seguimiento clínico y placebo con el mismo seguimiento.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El resultado fue un jarro de agua fría. En las depresiones leves las cuatro ramas se parecían bastante, placebo incluido. Y en las graves, el fármaco y la terapia interpersonal iban por delante, mientras que la terapia cognitiva no se distinguía con claridad del placebo.",
        },
        {
          forma: "texto",
          texto:
            "La defensa que dieron entonces era plausible y el tiempo le ha dado parte de razón: los resultados de la rama cognitiva variaban muchísimo de un centro a otro, lo que sugiere que en algunos sitios los terapeutas todavía no sabían aplicar bien un método que tenía diez años.",
        },
        {
          forma: "texto",
          texto:
            "La revancha llegó en 2005. DeRubeis y su equipo cogieron doscientos cuarenta pacientes con depresión de moderada a grave, terapeutas experimentados, y compararon terapia cognitiva con paroxetina durante dieciséis semanas. Empataron. Eso zanjó la discusión sobre si servía para los casos serios.",
        },
        {
          forma: "texto",
          texto:
            "Y en el seguimiento posterior apareció el dato que sigue siendo el mejor argumento a favor. A los pacientes se les retiró el tratamiento: los que habían tomado el fármaco recayeron bastante más que los que habían hecho terapia. Lo aprendido se queda; la dosis, no.",
        },
        {
          forma: "clave",
          rotulo: "Dónde está la ventaja",
          frase: "La terapia cognitiva no cura a más gente que la pastilla. Cura a gente que sigue bien un año después de haber dejado el tratamiento, que no es lo mismo.",
        },
        {
          forma: "texto",
          texto:
            "Todo eso vale para la terapia con terapeuta. Y ahora viene lo raro de este libro en concreto, que es la razón por la que merece un resumen y no una nota al pie: alguien se tomó la molestia de probar el libro. El objeto físico, sin terapeuta.",
        },
        {
          forma: "texto",
          texto:
            "Forrest Scogin y sus colaboradores, en la Universidad de Alabama, montaron ensayos aleatorizados en los que el tratamiento consistía literalmente en entregar un ejemplar de este libro, poner un plazo de cuatro semanas y hacer alguna llamada breve de seguimiento. El grupo de control esperaba.",
        },
        {
          forma: "texto",
          texto:
            "Funcionó. Las puntuaciones de depresión bajaron de forma significativa frente a los que esperaban, y en un seguimiento posterior a tres años buena parte de la mejoría seguía ahí. Existen resultados parecidos con personas mayores y con adolescentes.",
        },
        {
          forma: "texto",
          texto:
            "Eso convierte a «Sentirse bien» en uno de los poquísimos libros de autoayuda que se han evaluado como se evalúa un tratamiento, en vez de venderse como si lo fuera. En la estantería de al lado, en la misma librería, la inmensa mayoría de los títulos tiene cero ensayos.",
        },
        {
          forma: "texto",
          texto:
            "Ahora las letras pequeñas, que son importantes. Aquellas muestras eran gente que se apuntó respondiendo a un anuncio, con depresión de leve a moderada, y se excluyó a los casos graves y a quien tuviera ideación suicida. Los grupos eran pequeños. No se puede extrapolar a cualquiera.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una diferencia de fondo entre el libro del ensayo y el libro de la mesilla. En el ensayo hay un plazo, un cuestionario que rellenar y alguien que llama por teléfono. La autoayuda guiada y la no guiada dan resultados muy distintos, y esa es de las cosas más constantes del campo.",
        },
        {
          forma: "texto",
          texto:
            "Y ahora la mala noticia, que no es de este libro sino de todo el campo. Johnsen y Friborg revisaron en 2015 setenta estudios publicados entre 1977 y 2014, y encontraron que el efecto de la terapia cognitiva sobre la depresión ha ido menguando de forma sostenida hasta quedar en aproximadamente la mitad.",
        },
        {
          forma: "texto",
          texto:
            "Las explicaciones posibles no son halagüeñas para nadie. Los primeros ensayos los dirigían los que habían inventado el método y creían en él, que es un sesgo con nombre propio. Los grupos de control de entonces eran más flojos. Y los pacientes estaban más seleccionados.",
        },
        {
          forma: "texto",
          texto:
            "A eso se suma el sesgo de publicación. Cuijpers y su equipo estimaron cuántos ensayos con resultados malos nunca llegaron a publicarse, corrigieron las cifras en consecuencia, y el efecto de la psicoterapia sobre la depresión cae alrededor de un tercio respecto a lo que dicen las revisiones sin corregir.",
        },
        {
          forma: "texto",
          texto:
            "Nada de esto significa que no sirva. Corregido a la baja, sigue sirviendo, y sigue siendo de lo mejor que hay. Significa otra cosa más incómoda: que el número que tienes en la cabeza sobre cuánto funciona es más grande que el número real.",
        },
        {
          forma: "texto",
          texto:
            "Es el mismo patrón que se ha comido media psicología de los últimos quince años, y que en esta biblioteca aparece en «Pensar rápido, pensar despacio»: el propio Kahneman acabó reconociendo por escrito que el capítulo sobre efectos de sugestión no se sostenía como él lo había contado.",
        },
        {
          forma: "texto",
          texto:
            "Falta un frente más, y en este Burns lleva razón desde hace cuarenta años. La historia del desequilibrio químico —que la depresión es falta de serotonina— nunca llegó a establecerse; una revisión general de 2022 no encontró pruebas consistentes de esa asociación, y ha recibido réplicas serias, pero la versión simple que se le contaba al paciente no tenía respaldo.",
        },
        {
          forma: "texto",
          texto:
            "Importa aquí por un motivo práctico. Si a alguien le dicen que su problema es puramente químico, rellenar una hoja de tres columnas le parecerá una tontería. Si le dicen que es puramente lo que se dice a sí mismo, le parecerá lo único que hay. Las dos versiones se pasan.",
        },
        {
          forma: "texto",
          texto:
            "El libro se sometió a la prueba que casi ningún libro pasa.",
        },
        {
          forma: "texto",
          texto:
            "Y la pasó más justo de lo que su portada sugiere.",
        },
      ],
    },
    {
      titulo: "Lo que queda cuando se cae la teoría",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1996, en Seattle, un psicólogo llamado Neil Jacobson decidió hacer con la terapia cognitiva lo que se hace con un motor que funciona pero no se sabe por qué: desmontarlo pieza a pieza y ver cuál de ellas era la que empujaba.",
        },
        {
          forma: "texto",
          texto:
            "Reclutó a unos ciento cincuenta pacientes con depresión y los repartió en tres grupos. Al primero solo le dio activación conductual: programar actividades, salir de casa, recuperar cosas que antes hacía. Nada de discutir pensamientos, nada de hojas de tres columnas.",
        },
        {
          forma: "texto",
          texto:
            "Al segundo, eso mismo más el trabajo con los pensamientos automáticos. Al tercero, el paquete completo de terapia cognitiva, incluyendo las creencias profundas. Tres dosis crecientes de lo que este libro considera el ingrediente activo.",
        },
        {
          forma: "arte",
          texto:
            "No hubo diferencia. Los tres grupos mejoraron igual, y en el seguimiento a dos años seguían igual. Las tres columnas no añadían nada medible por encima de conseguir que la gente volviera a hacer cosas.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Para el libro eso es un problema serio, y conviene ver por qué. El argumento entero de «Sentirse bien» es que el pensamiento causa el estado de ánimo y que por tanto hay que corregir el pensamiento. Si quitas esa parte y el resultado no cambia, algo falla en la explicación.",
        },
        {
          forma: "texto",
          texto:
            "Hay un segundo problema, y es de calendario. Ilardi y Craighead señalaron en 1994 que la mayor parte de la mejoría en los ensayos de terapia cognitiva ocurre en las primeras cuatro semanas, cuando el terapeuta todavía está explicando el método y aún no ha desplegado las técnicas cognitivas.",
        },
        {
          forma: "texto",
          texto:
            "Tang y DeRubeis documentaron después las llamadas ganancias súbitas: en muchos pacientes una parte enorme de toda la mejoría se concentra en el intervalo entre dos sesiones concretas. Ellos lo leen como un cambio cognitivo repentino; otros leen los mismos datos como expectativa y regresión a la media.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí llega el detalle por el que este resumen existe. El autor del libro puso a prueba su propia teoría, con sus propios pacientes, y le salió que no. Y lo publicó.",
        },
        {
          forma: "texto",
          texto:
            "En 2001, Burns y Spangler analizaron datos de más de quinientos pacientes con modelos de ecuaciones estructurales para comprobar si los cambios en las actitudes disfuncionales causaban los cambios en la depresión, que es exactamente lo que el libro da por supuesto. El modelo causal no se sostuvo.",
        },
        {
          forma: "clave",
          rotulo: "El giro",
          frase: "El autor del manual más vendido de terapia cognitiva publicó datos contra la parte cognitiva de su propia teoría. Y siguió recomendando los mismos ejercicios.",
        },
        {
          forma: "texto",
          texto:
            "Siguió recomendándolos porque el año anterior, en el estudio hermano, sí había encontrado algo que aguantaba: los deberes. Los pacientes que rellenaban las hojas entre sesión y sesión mejoraban mucho más, y el análisis apuntaba a que era el trabajo el que producía la mejoría y no la mejoría la que producía el trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Es un sitio raro y honrado donde acabar: los ejercicios funcionan, y la explicación de por qué funcionan probablemente es falsa. Un libro entero construido sobre una teoría que su propio autor no consiguió confirmar, con unas hojas que sí resisten cada vez que se miden.",
        },
        {
          forma: "texto",
          texto:
            "Hay una lectura razonable de todo esto. Puede que lo que hacen las tres columnas no sea corregir una creencia, sino instalar una cita diaria con la propia atención, dejar un registro escrito que se puede releer y dar un motivo concreto para hacer algo al día siguiente.",
        },
        {
          forma: "texto",
          texto:
            "Dicho así se parece muchísimo a «Hábitos atómicos», que anda por aquí: medir, hacerlo visible, repetir un gesto pequeño en un momento fijo. Ese mecanismo describe la hoja de Burns mejor que la teoría cognitiva que la acompaña, y no necesita ninguna neurociencia.",
        },
        {
          forma: "texto",
          texto:
            "Y se parece también, otra vez, al «Enquiridión». Epicteto no tenía teoría de la mente ni ensayos aleatorizados, y la práctica de examinar por escrito los propios juicios lleva dos mil años sobreviviendo a todas las explicaciones que se le han puesto encima. Eso ya dice cuál de las dos piezas era la duradera.",
        },
        {
          forma: "texto",
          texto:
            "También hay que decir adónde no llega. «El cuerpo lleva la cuenta», que está en la categoría de Salud, sostiene que en el trauma la respuesta vive en el cuerpo y en zonas que no hablan, y que discutir con el pensamiento no toca eso. Es la objeción de fondo más seria que tiene el método.",
        },
        {
          forma: "texto",
          texto:
            "Y hay situaciones que sencillamente no son distorsiones: no llegar a fin de mes, una enfermedad, una relación que hace daño, la soledad de verdad. Ahí una hoja para buscar la frase exacta es la herramienta equivocada, y el libro no protege bien contra ese malentendido.",
        },
        {
          forma: "texto",
          texto:
            "El propio Burns se movió con los años. En sus libros recientes el centro ya no es la lógica del pensamiento sino la resistencia al cambio y lo que uno gana quedándose como está, que es curiosamente adonde apuntaban los estudios de desmontaje que dejaron su teoría original a la intemperie.",
        },
        {
          forma: "texto",
          texto:
            "Si alguien quiere quedarse con lo que aguanta, es poca cosa y es concreto. El cuestionario, una vez por semana, con la fecha. El programa de actividades cuando llevas días sin hacer nada. La flecha vertical una vez en la vida, hasta el fondo. Y las tres columnas cuando una frase se repite.",
        },
        {
          forma: "texto",
          texto:
            "Con una advertencia que el libro debería llevar en la portada. Para una depresión moderada, adelante. Para una depresión grave o si aparece la idea de hacerse daño, un libro no es un tratamiento, y los ensayos que salieron bien excluyeron precisamente a esas personas de la muestra.",
        },
        {
          forma: "texto",
          texto:
            "Lo que de verdad cambió en 1980 no fue una teoría de la depresión. Fue el sitio donde estaba la herramienta: dejó de estar solo en la consulta de alguien con acreditación y pasó a estar en una libreta, en una mesa de cocina, al alcance de quien la necesitara esa noche.",
        },
        {
          forma: "texto",
          texto:
            "La teoría de aquel libro está discutida.",
        },
        {
          forma: "texto",
          texto:
            "Su hoja de tres columnas sigue imprimiéndose.",
        },
        {
          forma: "texto",
          texto:
            "De un libro casi nunca sobrevive lo que su autor creía haber demostrado.",
        },
      ],
    },
  ],
};

export const CEREBRO_DEL_NINO: Resumen = {
  id: "cerebro-del-nino",
  titulo: "El cerebro del niño",
  autor: "Siegel y Payne Bryson",
  ano: 2011,
  gancho:
    "Doce estrategias para criar, todas envueltas en neurociencia. Los consejos son buenos y llevan décadas funcionando. La neurociencia, en cambio, está ahí sobre todo para que te los creas.",
  porQue:
    "Porque es el manual de crianza más vendido de los últimos quince años y merece que alguien separe lo que está probado de lo que está decorado. Y porque hay un experimento de 1975, que el libro apenas menciona, que demuestra su tesis mejor que todas sus resonancias juntas.",
  partes: [
    {
      titulo: "Una rabieta en el asiento de atrás",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La escena con la que empieza cualquier conversación sobre este libro es siempre la misma y todo el mundo la ha vivido. Un niño de cuatro años en el asiento de atrás del coche, gritando por algo que hace diez minutos parecía menor, y un adulto delante que ya no sabe si hablar, callar o parar el coche.",
        },
        {
          forma: "texto",
          texto:
            "Lo que el adulto suele hacer es razonar. Explica que el helado se ha caído porque lo estaba sujetando mal, que mañana se compra otro, que no pasa nada, que llorar no lo arregla. Y comprueba, una vez más, que cada frase razonable sube el volumen en lugar de bajarlo.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una segunda cosa que hace y que es peor: interpreta el grito como un desafío. Piensa que el niño está poniéndolo a prueba, que sabe perfectamente lo que hace y que si cede ahora ya no habrá vuelta atrás. A partir de esa interpretación, cualquier respuesta que dé será una respuesta a un enemigo.",
        },
        {
          forma: "texto",
          texto:
            "El libro se abre justo ahí y su respuesta es sencilla: estás dirigiéndote a una parte del cerebro que en ese momento no está operativa. No es que el niño no quiera escucharte: es que la maquinaria con la que se escucha está apagada, y lo primero es volver a encenderla.",
        },
        {
          forma: "arte",
          texto:
            "Lo escribieron dos personas con credenciales de verdad. Daniel Siegel es psiquiatra y profesor clínico en la facultad de medicina de la Universidad de California, y Tina Payne Bryson es doctora en trabajo social y trabaja con familias en una consulta pediátrica.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Salió en 2011, se ha traducido a decenas de idiomas y ha vendido más de un millón de ejemplares. En español lleva años siendo el libro que regalan los pediatras, los orientadores escolares y las cuñadas, y ha formado buena parte del vocabulario que usan hoy los padres jóvenes.",
        },
        {
          forma: "texto",
          texto:
            "Expresiones como se le ha inundado el cerebro, está en modo supervivencia o hay que conectar antes de corregir salen de aquí o de su estela. Que un libro consiga instalar vocabulario nuevo en millones de casas es un logro considerable, con independencia de si el vocabulario es exacto.",
        },
        {
          forma: "texto",
          texto:
            "Su promesa está en el subtítulo: doce estrategias para cultivar la mente en desarrollo de tu hijo. Cada una tiene su nombre pegadizo, su explicación cerebral y sus ejemplos, y al final de cada capítulo hay una viñeta ilustrada para enseñársela directamente al niño.",
        },
        {
          forma: "clave",
          rotulo: "La idea que lo sostiene",
          frase: "Un niño en plena rabieta no está eligiendo portarse mal. Está inundado, y hay que ocuparse primero de la inundación y después del comportamiento.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí conviene deshacer de entrada el malentendido más extendido, porque circula mucho y no es lo que el libro dice. No dice que haya que dejar de poner límites. Dice que el límite se pone después de la conexión, y que un límite puesto en mitad del grito no entra en ninguna parte.",
        },
        {
          forma: "texto",
          texto:
            "Los autores lo repiten y lo desarrollaron en un libro posterior dedicado entero a la disciplina. La versión de internet de este método, la que sugiere que corregir es dañino, no está en estas páginas: está en cómo se resumió el libro por el camino.",
        },
        {
          forma: "texto",
          texto:
            "El concepto que organiza todo es el de integración, y tiene una imagen buena detrás. Imagina un río con dos orillas: en una está el caos, en la otra la rigidez, y el bienestar es la corriente del medio. Estar bien no es estar tranquilo: es poder navegar entre las dos orillas.",
        },
        {
          forma: "texto",
          texto:
            "Un niño que se desborda por cualquier cosa ha encallado en la orilla del caos. Un niño que necesita que todo sea exactamente igual cada día, que no soporta un cambio de planes, ha encallado en la de la rigidez. Las dos son problemas y la mayoría de los padres solo reconoce la primera.",
        },
        {
          forma: "texto",
          texto:
            "La misma imagen sirve para el adulto que está leyendo, y ahí es donde el libro se pone interesante. Un padre que grita está en el caos; un padre que necesita que la cena sea a las ocho y media exactas y que un imprevisto le arruina la tarde está en la otra orilla, y suele considerarse el responsable de los dos.",
        },
        {
          forma: "texto",
          texto:
            "Esa observación es de las mejores del libro. El niño obediente, ordenado y que no da guerra suele considerarse un niño sin problemas, y en el marco de Siegel puede estar tan lejos del río como el que grita. Simplemente es un tipo de dificultad que a los adultos les resulta cómoda.",
        },
        {
          forma: "arte",
          texto:
            "Las doce estrategias se agrupan en cuatro parejas de integración: entre el hemisferio izquierdo y el derecho, entre el cerebro de arriba y el de abajo, entre el pasado y el presente, y entre las partes de uno mismo y los demás. Cada pareja tiene sus técnicas concretas.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "Antes de entrar en ellas, hay que decir algo que atraviesa este resumen entero y que conviene tener presente desde el principio. Casi todos los consejos de este libro son buenos, y casi ninguno es nuevo. Llevan décadas en la literatura sobre crianza, mucho antes de que existieran las resonancias.",
        },
        {
          forma: "texto",
          texto:
            "Lo que este libro añade no es el consejo: es la explicación cerebral que lo acompaña. Y esa explicación hace dos cosas a la vez, una buena y una discutible. La buena es que le da al padre una imagen mental que puede usar en caliente. La discutible es que le da una autoridad que no le corresponde.",
        },
        {
          forma: "texto",
          texto:
            "La parte buena no hay que despacharla deprisa, porque es real. Un padre que piensa se le ha levantado la tapa actúa distinto que uno que piensa me está tomando el pelo, y esa diferencia de encuadre cambia la conducta del adulto en el segundo siguiente, que es donde se decide todo.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el asunto del capítulo cuarto de esta ficha, y hay un estudio de 2008 que lo mide exactamente. De momento vamos con las estrategias, empezando por la primera pareja, que es la que peor ha envejecido de las cuatro y es la que abre el libro.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir antes que este resumen no va a ser condescendiente con nadie que haya usado este libro. Es honrado, está escrito por gente con formación, y quien lo aplicó probablemente lo hizo mejor de lo que lo habría hecho sin él. La crítica va sobre las pruebas, no sobre los lectores.",
        },
        {
          forma: "texto",
          texto:
            "Un niño gritando en el asiento de atrás.",
        },
        {
          forma: "texto",
          texto:
            "Un adulto delante razonando cada vez más despacio.",
        },
        {
          forma: "texto",
          texto:
            "Y ninguna de las dos cosas llegando a la otra.",
        },
      ],
    },
    {
      titulo: "El río entre el caos y la rigidez",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La primera pareja es la del hemisferio izquierdo y el derecho, y el libro la presenta así: el izquierdo es lógico, lineal, verbal y ordenado; el derecho es emocional, global, no verbal y corporal. Un niño pequeño, dicen, vive casi enteramente en el derecho.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale su primera estrategia y probablemente la más útil de las doce: conecta y redirige. Primero se responde al hemisferio derecho —con el tono, con el cuerpo, con la cara, sin argumentos— y solo cuando el niño ya está enganchado se pasa al izquierdo, a la explicación y al límite.",
        },
        {
          forma: "texto",
          texto:
            "En la práctica significa esto: agacharse a su altura, tono bajo, contacto físico si lo acepta, y una frase que reconozca lo que pasa antes de corregir nada. Y después, no antes, la parte de que no se pega y de que mañana no habrá helado. En ese orden y no en el contrario.",
        },
        {
          forma: "texto",
          texto:
            "El detalle de agacharse parece cosmético y no lo es. Un adulto de pie frente a un niño de metro y poco es una figura que ocupa todo el campo visual y que está mirando hacia abajo. Ponerse a su altura cambia la escena antes de que se haya dicho una sola palabra.",
        },
        {
          forma: "arte",
          texto:
            "Ahora hay que decir que la base neurológica de todo eso es floja. La división entre un hemisferio emocional y otro racional no es lo que muestra la investigación sobre lateralización, y es probablemente el mito más resistente de la divulgación cerebral de los últimos cuarenta años.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí existe es lateralización de funciones concretas: el lenguaje se procesa más en el izquierdo en la mayoría de las personas, y hay asimetrías reales en el procesamiento de caras o de la prosodia. Lo que no existe es la persona de hemisferio derecho ni el niño que vive en él.",
        },
        {
          forma: "texto",
          texto:
            "En 2013 un equipo analizó las conexiones cerebrales de más de mil personas buscando exactamente eso, individuos con un hemisferio dominante, y no encontró ninguno. La emoción, en particular, se procesa en redes repartidas por los dos lados y no vive en una mitad.",
        },
        {
          forma: "texto",
          texto:
            "El origen del mito tiene su gracia y explica su resistencia: viene de los estudios con pacientes a los que se les había seccionado el cuerpo calloso para tratar una epilepsia grave, en los años sesenta. En un cerebro sano, con las dos mitades comunicadas millones de veces por segundo, aquello no aplica.",
        },
        {
          forma: "clave",
          rotulo: "Lo que hay que separar",
          frase: "El consejo de conectar antes de corregir es excelente y está bien apoyado. La historia de los dos hemisferios que lo justifica es un mito. Se pueden tener las dos cosas claras a la vez.",
        },
        {
          forma: "texto",
          texto:
            "Esto ya salió en esta biblioteca, y merece señalarse porque enseña algo sobre el género entero: «El elemento», de Ken Robinson, comete exactamente el mismo error con el mismo mito. Dos libros superventas de dos campos distintos apoyados en la misma anatomía inventada.",
        },
        {
          forma: "texto",
          texto:
            "La segunda pareja es mucho más sólida y es la que da la imagen más útil del libro: el cerebro de abajo y el de arriba. Abajo estarían las estructuras antiguas que se ocupan de respirar, de reaccionar y de defenderse; arriba, la corteza, que planifica, se pone en el lugar del otro y aguanta la frustración.",
        },
        {
          forma: "texto",
          texto:
            "Esa división también es una simplificación grande, pero es una simplificación honrada: sí hay estructuras subcorticales que responden mucho más rápido que la corteza, y sí es cierto que la corteza prefrontal es la última en madurar. Aquí el mapa es tosco pero apunta al sitio correcto.",
        },
        {
          forma: "texto",
          texto:
            "Siegel tiene además un truco para explicarlo que se ha hecho famoso y que funciona de verdad: el modelo de la mano. Cierra el puño con el pulgar por dentro. El pulgar escondido es el cerebro emocional, los dedos que lo cubren son la corteza. Y ahora abre los dedos de golpe.",
        },
        {
          forma: "texto",
          texto:
            "Eso, dice, es lo que pasa en una rabieta: se levanta la tapa. Y es un gesto que un niño de seis años entiende inmediatamente y puede usar él mismo para decir cómo se siente. Sea buena o mala anatomía, es un vocabulario compartido, y eso es lo que faltaba en la mayoría de las casas.",
        },
        {
          forma: "texto",
          texto:
            "Y sirve en las dos direcciones, que es lo mejor que tiene. Un niño puede enseñarle el puño abierto a su padre y decirle que se le ha levantado la tapa a él, y en esa frase hay más comunicación que en media hora de discusión. Pocas herramientas de crianza funcionan hacia arriba.",
        },
        {
          forma: "arte",
          texto:
            "De esa pareja salen tres estrategias buenas. Implicar en vez de enfurecer: hacerle preguntas que obliguen a pensar en lugar de dar órdenes. Ejercitar el cerebro de arriba dándole decisiones pequeñas. Y moverlo: cambiar el estado del cuerpo cuando la conversación ya no avanza.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Esa última tiene más respaldo del que parece. Que el ejercicio físico cambie el estado emocional a corto plazo está bien establecido en adultos, y en el caso de un niño desbordado la ventaja práctica es evidente: salir al portal a dar diez saltos hace algo que ninguna frase consigue en ese momento.",
        },
        {
          forma: "texto",
          texto:
            "La tercera pareja es la de la memoria, y aquí el libro dice algo importante que la mayoría de los padres desconoce: que un niño puede tener un recuerdo que le afecta sin ser capaz de recuperarlo ni de contarlo, y que ese recuerdo influye en cómo reacciona sin que nadie lo relacione.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale su técnica del mando a distancia: ayudar al niño a contar lo que pasó como si fuera una película que se puede pausar, rebobinar o adelantar cuando la parte difícil se pone insoportable. Es una técnica de exposición gradual con nombre infantil, y es la más terapéutica del libro.",
        },
        {
          forma: "texto",
          texto:
            "Ahí conviene una advertencia que el libro sí da y que se pierde en los resúmenes: eso es una técnica clínica en versión doméstica, y para un suceso grave —un accidente, una muerte, un abuso— no es tarea de un padre con un libro. Sirve para el susto del perro, no para lo otro.",
        },
        {
          forma: "texto",
          texto:
            "Y su recomendación asociada es casi banal y probablemente la más eficaz de las doce: contar. Repasar el día en voz alta al acostarse, poner en orden lo que pasó, nombrar lo bueno y lo malo. Convertir un montón de sensaciones sueltas en una historia con principio y final.",
        },
        {
          forma: "texto",
          texto:
            "Dos orillas y una corriente en medio.",
        },
        {
          forma: "texto",
          texto:
            "El caos se ve enseguida y da mucha guerra.",
        },
        {
          forma: "texto",
          texto:
            "La rigidez no molesta a nadie, y por eso casi nunca se trata.",
        },
      ],
    },
    {
      titulo: "Ponle nombre para domarlo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "De las doce estrategias hay una que tiene detrás pruebas de verdad, y es la que da título a este capítulo. La formulan con una rima en inglés que se ha hecho célebre y que en español queda igual de bien: ponle nombre para domarlo.",
        },
        {
          forma: "texto",
          texto:
            "Consiste en algo tan poco espectacular como decir en voz alta lo que está pasando. Estás muy enfadado porque se ha caído el helado. Te has asustado cuando el perro ha ladrado. No es consolar, no es minimizar y no es explicar: es poner una etiqueta precisa sobre una cosa que no la tenía.",
        },
        {
          forma: "texto",
          texto:
            "Y tiene un requisito que casi todo el mundo incumple: la frase no puede llevar un pero detrás. Estás enfadado, pero no era para tanto, anula la etiqueta y la convierte en un preámbulo de la corrección. La técnica pide terminar la frase y callarse, que es lo más difícil de todo.",
        },
        {
          forma: "texto",
          texto:
            "El estudio que se cita es de 2007 y lo firmó un equipo de Matthew Lieberman en la Universidad de California. Metieron a adultos en un escáner y les enseñaron caras con expresiones de miedo o de ira, que activan de forma fiable una estructura llamada amígdala.",
        },
        {
          forma: "arte",
          texto:
            "A un grupo le pidieron que eligiera una etiqueta verbal para la emoción de la cara. Al hacerlo, la actividad de la amígdala bajaba y subía la de una zona de la corteza prefrontal. Poner la emoción en palabras no la describía solamente: cambiaba lo que estaba haciendo el cerebro.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Es un hallazgo bonito y bien replicado, y es de lo poco en este libro donde la neurociencia no es decoración. Ahora, las tres precisiones que el libro no hace y que cambian bastante lo que uno debe esperar de la técnica.",
        },
        {
          forma: "texto",
          texto:
            "La primera: aquellos estudios se hicieron con adultos, mirando fotografías, en un escáner. Extrapolarlo a un niño de cuatro años tirado en el suelo de un supermercado es un salto grande, y el libro lo da sin señalarlo. No significa que no funcione; significa que no está demostrado ahí.",
        },
        {
          forma: "clave",
          rotulo: "El detalle raro",
          frase: "Etiquetar la emoción reduce la respuesta corporal y sin embargo la persona no suele notar que se siente mejor. Funciona por debajo de la conciencia, y por eso casi nadie confía en ello.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el segundo matiz y es fascinante. Trabajos posteriores del propio equipo señalaron que la regulación por etiquetado es implícita: cuando se pregunta a la gente qué estrategia cree que le ayudará, esta la sitúa entre las peores, y aun así es de las que más efecto tienen medido.",
        },
        {
          forma: "texto",
          texto:
            "Eso explica por qué a los padres les cuesta tanto usarla. Decirle a un niño que está enfadado, cuando el niño está evidentemente enfadado, se siente como no hacer nada. La intuición dice que hay que arreglar la causa, y la evidencia dice que nombrarla ya hace parte del trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Hay una hipótesis razonable de por qué funciona y no requiere ninguna resonancia. Una emoción sin nombre es una masa difusa que ocupa todo; con nombre pasa a ser una cosa concreta, con bordes, que le ha ocurrido a alguien por un motivo. Y a una cosa con bordes se le puede dar la vuelta.",
        },
        {
          forma: "texto",
          texto:
            "El tercer matiz es de tamaño: los efectos medidos son moderados. Nombrar una emoción no apaga una rabieta como se apaga un interruptor, y el libro, con sus ejemplos donde el niño se calma en tres frases, deja una expectativa que la vida real no cumple casi nunca.",
        },
        {
          forma: "texto",
          texto:
            "Conviene además situar la técnica donde le corresponde, porque no la inventaron aquí. Es prácticamente lo mismo que el entrenamiento emocional que John Gottman llevaba proponiendo desde los años noventa a partir de sus estudios con familias, y que a su vez viene de la terapia infantil de mucho antes.",
        },
        {
          forma: "texto",
          texto:
            "Y tiene un pariente cercano en esta biblioteca: «Sentirse bien», de David Burns, donde la primera tarea es escribir el pensamiento con sus palabras exactas antes de hacer nada con él. Los dos libros dicen lo mismo desde extremos de la vida distintos: primero se nombra, después se discute.",
        },
        {
          forma: "arte",
          texto:
            "También hay que decir lo que hace bien el libro con esto, que es traducirlo a frases que un padre puede usar. La evidencia de laboratorio no sirve de nada a las nueve de la noche; una frase concreta que decir, sí. Ese trabajo de traducción es real y no lo hace casi nadie.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "La cuarta pareja del libro, la de la mente y los demás, es la más blanda y la que más se parece a otros libros de autoayuda. Incluye observar las emociones como nubes que pasan, revisar por dentro lo que uno siente y piensa, y ejercitar la atención a la propia mente.",
        },
        {
          forma: "texto",
          texto:
            "Siegel lleva décadas defendiendo la atención plena y aquí la mete en versión infantil. La evidencia sobre programas de atención plena en niños existe pero es modesta, con efectos pequeños y estudios de calidad desigual, y no da para lo que el capítulo promete.",
        },
        {
          forma: "texto",
          texto:
            "Conviene además notar un problema práctico que ningún libro del género reconoce: las técnicas que piden al niño observar su propia mente exigen precisamente la capacidad que se le supone poco desarrollada. Con un niño de cuatro años, la mayoría de esos ejercicios son papel mojado.",
        },
        {
          forma: "texto",
          texto:
            "La estrategia final del libro sí es buena y es de las más citadas: conectar a través del conflicto. Consiste en enseñar que discutir con alguien a quien quieres no rompe la relación, y que la parte importante no es evitar la discusión sino lo que pasa después de ella.",
        },
        {
          forma: "texto",
          texto:
            "Ahí sí hay literatura sólida detrás, de familias observadas durante años: lo que predice cómo le va a un niño no es que en casa no se discuta, sino que las discusiones se reparen delante de él. Que vea el enfado y vea también cómo se arregla, en el mismo día si es posible.",
        },
        {
          forma: "texto",
          texto:
            "Eso libera de una carga bastante pesada a mucha gente. Los padres que se esfuerzan en no discutir nunca delante de los hijos están protegiéndolos de la mitad menos importante y ocultándoles la que de verdad hace falta aprender, que es cómo se vuelve después de haberse enfadado.",
        },
        {
          forma: "texto",
          texto:
            "Nombrar lo que pasa parece no hacer nada.",
        },
        {
          forma: "texto",
          texto:
            "Es de lo poco de este libro que se ha medido en un escáner.",
        },
        {
          forma: "texto",
          texto:
            "Y aun así es la técnica que menos confianza inspira a quien la usa.",
        },
      ],
    },
    {
      titulo: "El encanto de una resonancia magnética",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Toca ahora la parte incómoda, y es la razón principal por la que este resumen existe. Hay que hacer una pregunta sencilla sobre el libro entero: si borráramos de él todas las menciones al cerebro, ¿cambiaría alguno de los doce consejos? La respuesta es que ninguno.",
        },
        {
          forma: "texto",
          texto:
            "Conecta antes de corregir. Nombra la emoción. Deja que se mueva. Ayúdale a contar lo que le pasó. Discute y repara. Dale decisiones pequeñas. Todo eso se puede formular, defender y aplicar sin decir una sola vez la palabra amígdala, y funcionaría exactamente igual.",
        },
        {
          forma: "texto",
          texto:
            "De hecho ya se formulaba así. Esos consejos vienen de la investigación sobre apego iniciada en los años cincuenta, de la terapia de juego, del entrenamiento conductual a padres de los setenta y del trabajo de Gottman con familias en los noventa. Todo eso es anterior a las imágenes cerebrales.",
        },
        {
          forma: "texto",
          texto:
            "Los autores no lo ocultan, hay que decirlo: citan a esos autores y reconocen la tradición. Lo que hacen es reempaquetarla, y el envase nuevo es lo que ha vendido el millón de ejemplares. El mérito divulgativo es real y no se lo quita nadie; el mérito científico es de otros.",
        },
        {
          forma: "arte",
          texto:
            "Entonces, ¿qué hace ahí la neurociencia? Hace una cosa muy concreta y muy medida: convence. Y no es una sospecha, es un efecto documentado con nombre propio en la literatura de psicología, y el estudio que lo estableció es de 2008.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Un equipo dirigido por Deena Weisberg cogió explicaciones psicológicas, unas buenas y otras claramente malas, y les añadió a algunas una frase de neurociencia irrelevante, del tipo «esto ocurre porque se activa el lóbulo frontal». Después pidió a distintos grupos que valoraran las explicaciones.",
        },
        {
          forma: "texto",
          texto:
            "El resultado es el que da nombre al artículo: el atractivo seductor de las explicaciones neurocientíficas. Los no expertos valoraban mucho mejor las explicaciones malas cuando llevaban la coletilla cerebral pegada, aunque esa coletilla no aportara absolutamente nada al razonamiento.",
        },
        {
          forma: "clave",
          rotulo: "Por qué funciona esa coletilla",
          frase: "Una explicación psicológica parece una opinión. La misma explicación con una zona del cerebro parece un hecho. Lo único que ha cambiado es la sensación de estar oyendo algo comprobado.",
        },
        {
          forma: "texto",
          texto:
            "Hay que ser justo con el matiz: un metaanálisis posterior encontró que ese efecto es real pero más pequeño de lo que sugería el estudio original, y que depende bastante de cómo se pregunte. No es una fuerza avasalladora, es un empujón. Pero es un empujón que existe y que se puede usar.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un dato del estudio original que redondea el asunto: el efecto desaparecía en los expertos en neurociencia. Solo funcionaba con quien no podía juzgar si la frase cerebral venía a cuento, que es exactamente el público al que va dirigido un manual de crianza.",
        },
        {
          forma: "texto",
          texto:
            "Y este libro lo usa en todas sus páginas. No por mala fe: Siegel cree sinceramente en su marco, lleva décadas construyendo un campo que llama neurobiología interpersonal y ha escrito manuales técnicos sobre ello. Pero el efecto sobre el lector es el mismo, lo pretenda o no.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí está la segunda parte de la crítica, que es más práctica. Este libro no ha sido evaluado en ensayos. No hay estudios que hayan cogido a un grupo de familias, les hayan dado estas doce estrategias y hayan comparado los resultados con un grupo de control. No existen.",
        },
        {
          forma: "texto",
          texto:
            "Y sí existen para otros programas de crianza, mucho menos poéticos y mucho menos vendidos. Hay al menos tres con decenas de ensayos aleatorizados detrás y con efectos medidos sobre problemas de conducta reales. Ninguno de ellos habla de hemisferios ni tiene un modelo de la mano.",
        },
        {
          forma: "texto",
          texto:
            "Esos programas se parecen bastante entre sí y son deliberadamente aburridos: entrenar a los padres en dar atención positiva a lo que va bien, dar instrucciones claras y de una en una, y aplicar consecuencias inmediatas y previsibles. Nada de eso da para una portada bonita.",
        },
        {
          forma: "texto",
          texto:
            "Eso no significa que las estrategias de este libro no funcionen. Muchas coinciden con lo que hacen esos programas, y sus fundamentos de apego están bien establecidos. Significa que la seguridad con la que están escritas es mayor que la seguridad con la que se puede afirmar que funcionan.",
        },
        {
          forma: "texto",
          texto:
            "Hay una tercera cosa que decir y es de honradez elemental hacia el lector padre: el libro es tremendamente optimista con los tiempos. En sus ejemplos, la técnica funciona a la primera y el niño se calma en un párrafo. En la vida real la mayoría de las rabietas se pasan solas, tarden lo que tarden.",
        },
        {
          forma: "arte",
          texto:
            "Ese optimismo tiene un coste que conviene nombrar: si aplicas la técnica y no funciona, la conclusión que queda flotando es que la has hecho mal. Un manual que solo enseña casos de éxito acaba produciendo culpa en quien no los reproduce, que es justo lo contrario de lo que pretendía.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Y hay una cuarta, sobre una cifra concreta que este libro ayudó a difundir y que hoy está por todas partes: que el cerebro no termina de desarrollarse hasta los veinticinco años. Esa cifra se repite en artículos, en charlas y en debates sobre responsabilidad penal, y merece una precisión.",
        },
        {
          forma: "texto",
          texto:
            "Lo que hay detrás es real: los estudios de resonancia longitudinales que empezó Jay Giedd en los años noventa, siguiendo a los mismos chicos durante años, mostraron cambios en la corteza prefrontal que continúan más allá de la adolescencia. Eso está bien establecido.",
        },
        {
          forma: "texto",
          texto:
            "Lo que no hay es un umbral. Nadie midió que a los veinticinco pasara nada en particular: lo que se ve es un cambio que se va haciendo más lento sin acabar nunca del todo, porque el cerebro sigue cambiando a los cuarenta y a los sesenta. El veinticinco es un redondeo, no un dato.",
        },
        {
          forma: "texto",
          texto:
            "Y la cifra tiene consecuencias fuera de la crianza, que es lo que la hace grave. Se usa en discusiones sobre a qué edad se es responsable de los propios actos, sobre publicidad y sobre contratos. Que un número inventado por redondeo circule por ahí como si fuera una medición debería preocupar.",
        },
        {
          forma: "texto",
          texto:
            "Doce estrategias buenas.",
        },
        {
          forma: "texto",
          texto:
            "Cero ensayos que las hayan comprobado juntas.",
        },
        {
          forma: "texto",
          texto:
            "Y una capa de neurociencia que no las mejora, pero hace que te las creas.",
        },
      ],
    },
    {
      titulo: "La cara que deja de responder",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Boston, mediados de los años setenta. Un psicólogo del desarrollo llamado Edward Tronick monta un experimento sencillísimo con madres y bebés de unos seis meses. Los sienta uno frente a otro y los deja jugar unos minutos con normalidad, mientras una cámara graba.",
        },
        {
          forma: "texto",
          texto:
            "El bebé señala cosas, la madre las mira y responde, el bebé emite sonidos y ella los devuelve, se sonríen, se turnan. Es una conversación completa hecha sin palabras, con un ritmo de ida y vuelta que ninguno de los dos ha aprendido en ningún sitio.",
        },
        {
          forma: "texto",
          texto:
            "Entonces le piden a la madre que se gire un momento y que al volverse ponga la cara completamente inexpresiva. Sin sonreír, sin fruncir el ceño, sin apartar la mirada. Simplemente neutra. Y que la mantenga así durante dos minutos pase lo que pase.",
        },
        {
          forma: "arte",
          texto:
            "Lo que ocurre en esos dos minutos es de lo más impresionante que ha grabado la psicología. El bebé sonríe para recuperarla. Señala. Chilla. Se retuerce en la silla. Levanta los brazos. Y cuando nada funciona, se derrumba: aparta la cara, se arquea y llora con un desconsuelo total.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Se llama el experimento de la cara inexpresiva y es de los resultados más replicados de la psicología del desarrollo. Se ha repetido durante cincuenta años, en muchos países, y sale igual. Un bebé de medio año, que no habla, no tolera dos minutos de una cara que no le devuelve nada.",
        },
        {
          forma: "texto",
          texto:
            "Fíjate en lo que hace especial a este resultado dentro de la psicología de los últimos años: no depende de un cuestionario, no depende de estudiantes universitarios y no ha sufrido la crisis de replicación. Se ve en un vídeo, lo reconoce cualquiera y sale igual en todas partes.",
        },
        {
          forma: "clave",
          rotulo: "Lo que demuestra",
          frase: "Un niño no necesita que le expliquen las cosas: necesita que alguien le responda. Y detecta la ausencia de respuesta muchísimo antes de tener palabras para nombrarla.",
        },
        {
          forma: "texto",
          texto:
            "Ese experimento es, en la práctica, la mejor prueba de la tesis de este libro, y el libro apenas lo aprovecha. Prefiere hablar de hemisferios y de la corteza prefrontal, que son mucho más impresionantes y muchísimo menos concluyentes que dos minutos de vídeo con un bebé.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una segunda parte del experimento que casi nunca se cuenta y que es la más importante. Cuando la madre vuelve a responder, el bebé se recupera. Rápido. Los dos vuelven a sincronizarse en menos de un minuto y el juego continúa como si nada.",
        },
        {
          forma: "texto",
          texto:
            "Tronick sacó de ahí una conclusión que debería ser el resumen de cualquier libro de crianza: lo importante no es no fallar nunca, sino reparar. En la interacción normal entre un adulto y un bebé, la sincronía se rompe constantemente y se recompone constantemente.",
        },
        {
          forma: "texto",
          texto:
            "Conviene marcar la diferencia con lo que enseña el experimento en su versión dura. Dos minutos de cara inexpresiva no le hacen daño a nadie; lo que hace daño es que esa cara sea la habitual. Una cosa es un desajuste puntual y otra un adulto que lleva meses sin estar disponible.",
        },
        {
          forma: "texto",
          texto:
            "Sus propios datos sugerían que en las interacciones corrientes madre e hijo están desacompasados buena parte del tiempo, y que lo característico de las relaciones que van bien no es la ausencia de desajuste, sino la frecuencia con que se arregla. La reparación es la habilidad, no la perfección.",
        },
        {
          forma: "texto",
          texto:
            "Eso es exactamente lo que necesita oír el padre agotado que compra este libro, y es lo que el libro no le dice con suficiente claridad. Si alguien va a quedarse con una sola frase de esta ficha, que sea esta: no hace falta acertar, hace falta volver.",
        },
        {
          forma: "texto",
          texto:
            "Con eso en la mano, el balance del libro se puede hacer sin injusticia. Es un manual honesto, escrito por profesionales serios, cuyos consejos son razonables y en su mayoría coinciden con lo que recomendaría cualquier terapeuta infantil competente.",
        },
        {
          forma: "texto",
          texto:
            "Y a la vez es un libro que se apoya en una autoridad prestada. Su primera pareja de conceptos descansa en un mito, sus efectos están inflados por ejemplos que siempre salen bien, y su capa neurocientífica está ahí para persuadir y no para demostrar.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una consecuencia de eso que va más allá de este título. Un lector que aprende a creerse un consejo porque viene con una zona del cerebro pegada queda entrenado para creerse el siguiente, que puede ser mucho peor. La costumbre se instala aunque este libro concreto acierte.",
        },
        {
          forma: "arte",
          texto:
            "La manera práctica de usarlo, entonces, es esta: quédate con las frases y tira la anatomía. El modelo de la mano vale como vocabulario compartido con un niño aunque sea mala neurología, igual que decir que el corazón se rompe sirve para hablar de una ruptura sin creerse la cardiología.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Si alguien quiere un plan concreto sacado de aquí, cabe en cuatro líneas. Conecta antes de corregir, y corrige después. Pon nombre a lo que pasa aunque parezca que no sirve. Cuenta el día con él en voz alta antes de dormir. Y discute delante de él, siempre que arregles la discusión delante de él.",
        },
        {
          forma: "texto",
          texto:
            "Y una advertencia que el libro no da y que hace falta. Si un niño tiene dificultades serias y sostenidas —de conducta, de sueño, de relación con otros niños—, un libro de crianza no es la herramienta. Hay programas evaluados y profesionales para eso, y esperar demasiado retrasa lo que sí ayuda.",
        },
        {
          forma: "texto",
          texto:
            "Y otra en dirección contraria, porque también hace falta: la mayoría de los niños no tienen nada. Buena parte de lo que un manual describe como señales de alarma es sencillamente cómo son los niños de tres años, y leer demasiados libros de estos produce padres que vigilan en vez de acompañar.",
        },
        {
          forma: "texto",
          texto:
            "El experimento de Tronick sigue en internet y dura tres minutos. Verlo hace por un padre más que cualquier capítulo de este libro, porque no explica nada: enseña una cara que deja de responder, y lo que le pasa a alguien pequeño cuando eso ocurre.",
        },
        {
          forma: "texto",
          texto:
            "Dos minutos de cara inexpresiva.",
        },
        {
          forma: "texto",
          texto:
            "Un bebé probándolo todo para recuperarte.",
        },
        {
          forma: "texto",
          texto:
            "Y la buena noticia: vuelve en cuanto tú vuelves.",
        },
      ],
    },
  ],
};

export const MANERAS_AMAR: Resumen = {
  id: "maneras-de-amar",
  titulo: "Maneras de amar",
  autor: "Levine y Heller",
  ano: 2010,
  gancho:
    "Las cifras que hoy repite medio internet —la mitad de la gente es segura, un cuarto evitativa, un quinto ansiosa— salen de un cuestionario que dos psicólogos publicaron en un periódico de Denver en 1985 y que los lectores contestaron por correo.",
  porQue:
    "Porque explica por qué la pareja que te vuelve loco te parece más intensa que la que te trata bien, y porque su vocabulario se ha convertido en un horóscopo de tres casillas que el propio libro no defiende.",
  partes: [
    {
      titulo: "Un cuestionario en un periódico de Denver",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1985, dos psicólogos de la Universidad de Denver, Cindy Hazan y Phillip Shaver, convencieron al Rocky Mountain News para que publicara un test sobre el amor. Eran tres párrafos y había que elegir cuál describía mejor cómo se sentía uno en sus relaciones, recortarlo y mandarlo por correo.",
        },
        {
          forma: "texto",
          texto:
            "Llegaron cientos de sobres. El reparto de las respuestas fue de algo más de la mitad para el primer párrafo, alrededor de un cuarto para el segundo y algo menos de un quinto para el tercero. Esas tres cifras, con pequeñas variaciones, son las que hoy repite todo el mundo como si fueran un censo.",
        },
        {
          forma: "clave",
          rotulo: "De dónde salen los porcentajes",
          frase: "El cincuenta, el veinticinco y el veinte por ciento del apego adulto vienen de un test recortable en un diario local de Colorado, contestado por quienes se molestaron en pegar un sello.",
        },
        {
          forma: "texto",
          texto:
            "Aquello no era una ocurrencia suelta: estaban trasladando a los adultos una teoría construida treinta años antes con niños pequeños. Y esa teoría había nacido peleada con casi todo lo que en su época se decía sobre por qué un bebé quiere a su madre.",
        },
        {
          forma: "arte",
          texto:
            "John Bowlby era un psiquiatra británico que en los años cuarenta estudió a delincuentes juveniles y encontró en muchos de ellos separaciones tempranas y prolongadas de la madre. Después redactó para la Organización Mundial de la Salud un informe sobre los niños sin hogar de la posguerra europea.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Aquel informe de 1951 tuvo una vida política que él no buscaba. Se usó durante años como argumento para que las madres no trabajaran fuera de casa, y eso no es lo que dice el texto: Bowlby habla de una figura de cuidado estable, no dice que tenga que ser la madre biológica ni que tenga que estar las veinticuatro horas.",
        },
        {
          forma: "texto",
          texto:
            "Su tesis chocaba de frente con la ortodoxia. Tanto el psicoanálisis como el conductismo sostenían que el niño quiere a la madre porque le da de comer: el vínculo sería un subproducto del alimento. Bowlby dijo que no, que el vínculo es un sistema propio, tan primario como el hambre.",
        },
        {
          forma: "texto",
          texto:
            "La demostración más brutal no la hizo él. Harry Harlow crió crías de mono con dos madres artificiales: una de alambre que daba leche y otra de felpa que no daba nada. Las crías comían en la de alambre lo justo y pasaban el resto del día agarradas a la de trapo, y a ella corrían cuando se asustaban.",
        },
        {
          forma: "texto",
          texto:
            "Conviene añadir la parte que casi nunca se cuenta de aquel experimento, porque corrige la moraleja fácil. Los monos criados con la madre de felpa tampoco salieron bien: de adultos eran incapaces de relacionarse con otros monos. El contacto solo no bastaba; hacía falta algo que respondiera.",
        },
        {
          forma: "texto",
          texto:
            "La pieza que faltaba la puso Mary Ainsworth, que había trabajado con Bowlby y que en Baltimore montó un procedimiento de laboratorio para ver el sistema funcionando. Se llama la situación extraña y son ocho episodios de tres minutos con una madre, un bebé de un año, un desconocido y una sala con juguetes.",
        },
        {
          forma: "texto",
          texto:
            "La idea no se le ocurrió en el laboratorio. Antes había pasado un año en Uganda observando a veintiséis familias en sus casas, sin cronómetro y sin sala de espejos, y fue allí donde vio que los bebés usaban a la madre como punto de partida para explorar. El experimento vino después, a confirmarlo.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí está el detalle que la versión popular se salta casi siempre: lo que clasifica al niño no es cuánto llora cuando la madre se va, sino qué hace cuando vuelve. Hay bebés que lloran muchísimo y son seguros, y bebés que no lloran nada y no lo son.",
        },
        {
          forma: "arte",
          texto:
            "El seguro se acerca, se deja consolar y en un minuto vuelve a los juguetes. El evitativo sigue jugando como si no hubiera pasado nada, sin mirarla, aunque su ritmo cardíaco diga otra cosa. Y el ambivalente se le echa encima y a la vez la golpea, y tarda muchísimo en calmarse.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Años después, otras dos investigadoras añadieron una cuarta clasificación para los niños que no encajaban en ninguna: los que al reencontrarse con la madre hacían cosas contradictorias, acercarse andando hacia atrás, quedarse paralizados a medio camino. Esa categoría está asociada a las historias familiares más duras.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el material que Hazan y Shaver trasladaron a los adultos con su test del periódico: la idea de que la pareja funciona como funcionaba la madre, es decir, como la base desde la que uno se atreve a salir al mundo y el sitio al que vuelve cuando se asusta.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí hay que precisar cómo se hizo, porque explica muchas cosas. Los tres párrafos del periódico no salieron de observar a adultos: eran las tres categorías de los bebés de Ainsworth traducidas a prosa adulta. No descubrieron que hubiera tres tipos de amante; dieron por buenos los tres del laboratorio y escribieron un párrafo para cada uno.",
        },
        {
          forma: "texto",
          texto:
            "Veinticinco años después llegó este libro, que no aporta investigación nueva y no lo disimula: Amir Levine es psiquiatra y Rachel Heller psicóloga, y lo que hicieron fue traducir treinta años de literatura académica a un lenguaje que se pueda usar un martes por la noche.",
        },
        {
          forma: "texto",
          texto:
            "Salió en 2010 y vendió despacio. Su explosión llegó casi una década más tarde, cuando sus tres palabras —seguro, ansioso, evitativo— se convirtieron en vocabulario corriente de internet, y con ellas el libro se transformó en algo que él nunca dijo que fuera.",
        },
        {
          forma: "texto",
          texto:
            "Conviene saber qué promete exactamente, porque es más modesto de lo que parece. No promete curar a nadie ni explicar la personalidad entera. Promete una cosa concreta: entender qué hace tu sistema de alarma cuando la persona que te importa se aleja, y qué hace el de la persona que tienes delante.",
        },
        {
          forma: "texto",
          texto:
            "También conviene saber para quién está escrito, porque no lo dice. Los ejemplos son casi todos de parejas heterosexuales en fase de conquista, en Nueva York y con treinta y pocos años; la literatura que resume estaba hecha con ese mismo material, y el libro no avisa de esa limitación en ningún momento.",
        },
        {
          forma: "texto",
          texto:
            "Y viene con una advertencia que la versión de redes sociales ha borrado entera. Los propios autores escriben que estas categorías describen tendencias, que no son diagnósticos, que cambian a lo largo de la vida y que dependen en parte de con quién estés. Nada de eso sobrevivió al viaje.",
        },
        {
          forma: "texto",
          texto:
            "Tres párrafos recortables en un periódico de Colorado.",
        },
        {
          forma: "texto",
          texto:
            "Cientos de sobres con sello contestando cuál se parecía más a uno.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale el vocabulario con el que hoy se explica media vida amorosa.",
        },
      ],
    },
    {
      titulo: "Qué hace cada uno cuando tiene miedo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La mejor decisión del libro es describir los estilos por lo que la gente hace y no por lo que siente. Nadie se reconoce en un adjetivo, pero todo el mundo se reconoce en una conducta concreta a las once de la noche con el móvil en la mano.",
        },
        {
          forma: "texto",
          texto:
            "El ansioso vive con el sistema encendido. Su atención está permanentemente puesta en el estado del vínculo: cuánto ha tardado en contestar, con qué tono, si ha dicho lo mismo que la semana pasada. Puede estar bien, pero le cuesta una cantidad de energía que el otro no llega a imaginar.",
        },
        {
          forma: "texto",
          texto:
            "El término técnico es hiperactivación, y describe algo más preciso que estar nervioso: el sistema no solo se enciende, es que no se apaga hasta tener una señal clara de que el vínculo está a salvo. Mientras tanto, todo lo demás —el trabajo, los amigos, dormir— funciona en segundo plano y a media potencia.",
        },
        {
          forma: "texto",
          texto:
            "Cuando detecta amenaza aparecen lo que el libro llama conductas de protesta, y la lista es dolorosamente reconocible: llamar muchas veces seguidas, contar las horas antes de responder para igualar el marcador, dejar de hablar a ver si el otro lo nota, amenazar con irse sin ninguna intención de irse.",
        },
        {
          forma: "clave",
          rotulo: "Qué son las conductas de protesta",
          frase: "Todas dicen lo mismo con distinta cara: vuelve a acercarte. Y todas consiguen exactamente lo contrario, porque la persona que las recibe no oye una petición, oye un reproche.",
        },
        {
          forma: "texto",
          texto:
            "La lista sigue y conviene tenerla entera, porque el valor del libro está en el reconocimiento. Salir de la habitación a ver si el otro va detrás, mencionar a alguien que se interesó por ti, llevar la cuenta de quién escribe primero, decir que da igual con un tono que deja clarísimo que no da igual.",
        },
        {
          forma: "texto",
          texto:
            "El evitativo tiene el mismo sistema, pero lo que hace es apagarlo. El libro lo llama estrategias de desactivación y también son conductas, no estados de ánimo: poner distancia justo después de un momento de intimidad, fijarse en un defecto pequeño y agrandarlo, no decir te quiero cuando se lo dicen.",
        },
        {
          forma: "texto",
          texto:
            "Hay más y son igual de concretas: evitar el plural cuando se habla del futuro, no hacer planes a más de dos semanas vista, guardar zonas de la vida donde el otro no entra, y sentir un agobio físico difícil de explicar cuando la conversación se pone íntima justo en el momento en que iba bien.",
        },
        {
          forma: "arte",
          texto:
            "Hay una que el libro describe muy bien y que casi nadie ve venir: el ex fantasma. Una relación anterior idealizada que se saca a relucir en el momento en que la actual se pone seria, y que funciona como una vara de medir imposible de alcanzar precisamente porque ya no existe.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "También cuenta el patrón de acercarse y retirarse: el evitativo se compromete un poco, se agobia, se aleja, y cuando el otro por fin se cansa y se aparta, vuelve a acercarse. No es crueldad calculada; es un termostato que se dispara con la cercanía y se apaga con la distancia.",
        },
        {
          forma: "arte",
          texto:
            "Y hay un hallazgo de laboratorio que cambia por completo cómo se lee todo esto. Cuando a personas con estilo evitativo se les pregunta por separaciones dolorosas mientras se mide su sudoración, el cuerpo se activa con claridad al mismo tiempo que ellos declaran, con sinceridad, que aquello no les afectó.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Esa disociación es la clave del estilo y desmonta la lectura fácil. El evitativo no siente menos: siente lo mismo y ha aprendido a no enterarse. Lo que está apagado no es la alarma, es el altavoz, y eso lo convierte en algo mucho más triste que la caricatura del que pasa de todo.",
        },
        {
          forma: "texto",
          texto:
            "Y el seguro, que es el que menos aparece en los resúmenes de internet porque no da conflicto, hace cosas muy poco espectaculares: dice lo que necesita en cuanto lo necesita, pregunta en vez de suponer, no castiga con silencio y responde cuando le buscan, incluso enfadado.",
        },
        {
          forma: "texto",
          texto:
            "El libro insiste en un punto que se pierde: el seguro no es alguien sin miedos ni con una infancia perfecta. Es alguien cuyo sistema, cuando salta la alarma, propone acercarse y hablar en vez de perseguir o desaparecer. Es una estrategia, no un carácter admirable.",
        },
        {
          forma: "texto",
          texto:
            "Y tiene un efecto sobre el otro que el libro documenta bien: la pareja segura estabiliza. Alguien ansioso con una pareja que responde deja de protestar en unos meses, sencillamente porque la alarma deja de tener motivos. El estilo no es solo tuyo, se negocia entre dos y a veces se cura solo.",
        },
        {
          forma: "texto",
          texto:
            "Esa es la idea central y merece decirse despacio: los tres estilos no miden cuánto quiere uno, miden qué hace su alarma cuando detecta que el otro se aleja. El mismo incendio con tres sistemas de aviso distintos, y dos de ellos avisan de una manera que empeora el incendio.",
        },
        {
          forma: "arte",
          texto:
            "Falta la cuarta casilla, que el libro menciona de pasada: el que combina las dos cosas, quiere cercanía y le aterra, y se acerca y se aparta con la misma persona en la misma semana. Es la menos frecuente, la peor de llevar y la que este libro despacha en dos páginas y media.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Y ahora la primera corrección seria, que es sobre las casillas. Cuando se ha estudiado si estos tipos existen de verdad, es decir, si la gente se agrupa en montones separados o se reparte por un continuo, los análisis dicen lo segundo con bastante claridad.",
        },
        {
          forma: "texto",
          texto:
            "Los cuestionarios que se usan en investigación no dan tres cajas: dan dos puntuaciones continuas, una de ansiedad por el vínculo y otra de evitación de la intimidad. Cada persona es un punto en ese plano, y la mayoría de los puntos están en el medio, no en las esquinas.",
        },
        {
          forma: "texto",
          texto:
            "El seguro, en ese mapa, no es un tipo de persona: es la esquina en la que las dos puntuaciones son bajas. Y como casi todo el mundo está en la zona media, dos personas separadas por un par de puntos en un test de treinta preguntas acaban recibiendo etiquetas contrarias.",
        },
        {
          forma: "texto",
          texto:
            "Las tres etiquetas son los cuatro cuadrantes de ese plano puestos con nombre. Sirven para hablar, igual que sirve decir alto o bajo, y dejan de servir en cuanto alguien se las toma como grupos sanguíneos y decide que es evitativo del mismo modo que es del grupo cero.",
        },
        {
          forma: "texto",
          texto:
            "No hay tres tipos de persona.",
        },
        {
          forma: "texto",
          texto:
            "Hay dos ejes y una nube de puntos apretada en el centro.",
        },
        {
          forma: "texto",
          texto:
            "Las casillas son un modo de hablar, y este libro las vende como un resultado.",
        },
      ],
    },
    {
      titulo: "La trampa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El capítulo más útil del libro explica por qué una combinación concreta, la del ansioso con el evitativo, aparece muchísimo más de lo que debería si la gente se emparejara al azar. Y la explicación no tiene nada de romántica: es aritmética del mercado.",
        },
        {
          forma: "texto",
          texto:
            "Los seguros se emparejan pronto y duran, así que pasan poco tiempo disponibles. Los evitativos entran y salen de relaciones cortas, así que están disponibles casi siempre. El resultado es que cuanto más tiempo lleva alguien buscando, mayor es la proporción de evitativos entre los que se va cruzando.",
        },
        {
          forma: "clave",
          rotulo: "El sesgo del mercado",
          frase: "No es que haya más evitativos en el mundo: es que están más rato en circulación. Quien lleva años saliendo con gente no ve una muestra de la población, ve una muestra de los que vuelven.",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir que este argumento, siendo el más citado del libro, no viene con datos detrás. Es un razonamiento razonable sobre cómo se acumula la gente disponible, no un recuento de nadie, y el libro lo presenta con la misma seguridad con la que presenta los experimentos. No es lo mismo.",
        },
        {
          forma: "texto",
          texto:
            "A eso se suma que las dos piezas encajan como una llave en una cerradura. El ansioso necesita señales constantes y el evitativo las escatima; el evitativo necesita distancia y el ansioso se la quita persiguiéndole. Cada uno confirma con su conducta el peor pronóstico del otro.",
        },
        {
          forma: "arte",
          texto:
            "El ciclo es siempre el mismo y se puede dibujar. Él se aleja un poco, ella lo nota y se activa, ella persigue, él se agobia y se aleja más, ella protesta, él se cierra del todo. Cambien los pronombres como quieran: el patrón funciona igual en cualquier combinación.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "Y encaja también por el lado que menos se mira. Para el evitativo esa pareja es cómoda: recibe cercanía constante sin tener que pedirla nunca, que es justo lo que no sabe hacer, y además tiene siempre a mano un motivo para retirarse. Los dos obtienen algo, y por eso la cosa dura años.",
        },
        {
          forma: "texto",
          texto:
            "Lo que mantiene la cosa viva es lo más interesante y lo peor. Las señales de cariño llegan de manera intermitente e impredecible, y ese es justamente el esquema de recompensa que más engancha, el mismo que hace que una máquina tragaperras sea más adictiva que un cajero automático.",
        },
        {
          forma: "texto",
          texto:
            "Eso está medido desde hace setenta años en el laboratorio: una paloma a la que se premia cada vez que picotea deja de picotear en cuanto se acaba el premio, y otra a la que se premia de vez en cuando y sin patrón sigue picoteando muchísimo más tiempo. Lo imprevisible fija la conducta.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí sale la observación más valiosa de todo el libro. El sistema ansioso interpreta su propia activación como enamoramiento: el nudo en el estómago, la comprobación del móvil, la euforia cuando por fin contesta. Todo eso se siente como amor y es, técnicamente, una alarma sonando.",
        },
        {
          forma: "texto",
          texto:
            "La consecuencia práctica es muy incómoda. Alguien acostumbrado a esa intensidad conoce a una persona segura, que responde cuando escribe y dice claramente lo que quiere, y siente que le falta chispa. No le falta chispa: le falta amenaza, y la amenaza era lo que él estaba llamando chispa.",
        },
        {
          forma: "texto",
          texto:
            "El consejo que sacan de ahí es de los pocos accionables del libro: si alguien te trata bien y te aburre, dale unas cuantas citas más antes de decidir. La calma se confunde con la indiferencia mientras el sistema esté acostumbrado a funcionar con sobresaltos, y ese acostumbramiento tarda semanas en irse.",
        },
        {
          forma: "arte",
          texto:
            "Es exactamente lo que describe «El cuerpo lleva la cuenta» en otro registro: un sistema de alarma calibrado en una casa concreta sigue disparándose años después en habitaciones donde no hay ningún peligro, y quien lo tiene no vive eso como un error de calibración, sino como información sobre el presente.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Aquí hay que decir dónde falla el libro, porque falla claramente. La deriva de estos capítulos es tratar al evitativo como un peligro del que hay que apartarse, con listas de señales de alerta y consejos para detectarlo en la segunda cita. Eso ya no es descripción, es un juicio moral con bata.",
        },
        {
          forma: "texto",
          texto:
            "Y es un consejo que no se sostiene ni en sus propios números. Si la mitad de la población no es segura y la recomendación es descartar a media población, el resultado no es encontrar mejor pareja: es un mercado donde todo el mundo descarta a todo el mundo por un test de treinta preguntas.",
        },
        {
          forma: "texto",
          texto:
            "Y es injusto por su propia teoría. Si la evitación se aprende en una casa donde pedir cosas no funcionaba o salía caro, entonces es una adaptación razonable a un entorno concreto, igual que la ansiedad lo es a otro. Un libro no puede explicar el origen y a la vez repartir culpas.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un problema de método que los autores no mencionan: casi todo lo que sabemos del evitativo viene contado por su pareja o medido con cuestionarios que el evitativo contesta minimizando, porque minimizar es precisamente lo que hace su estrategia. La foto está tomada desde un solo lado.",
        },
        {
          forma: "arte",
          texto:
            "Y existe una alternativa práctica que el libro casi no menciona. Hay una terapia de pareja construida sobre esta misma teoría cuyo trabajo consiste en desmontar el ciclo entre los dos, sin repartir etiquetas de defectuoso, y que es de las intervenciones de pareja con mejores resultados medidos en ensayos.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Dicho eso, este marco tiene una virtud enorme frente a un vecino de esta misma categoría. «Los hombres son de Marte, las mujeres son de Venus» explicaba estos mismos ciclos por el sexo de cada uno: la cueva del hombre, la necesidad de hablar de la mujer, y a otra cosa.",
        },
        {
          forma: "texto",
          texto:
            "Para el lado ansioso, el complemento está en «Sentirse bien», de Burns, que trabaja exactamente esos pensamientos de las once de la noche. La hoja de tres columnas —lo que pienso, qué error tiene, qué diría alguien de fuera— sirve para casi todas las frases que preceden a una conducta de protesta.",
        },
        {
          forma: "texto",
          texto:
            "Levine y Heller ofrecen la alternativa que hacía falta: la cueva no es masculina, es una estrategia de desactivación, y la practican mujeres a diario con la misma eficacia. Cambiar una explicación por sexo por una explicación por historia de vínculo es un progreso real, y hay que apuntárselo.",
        },
        {
          forma: "texto",
          texto:
            "La alarma sonando no es la prueba de que te importa.",
        },
        {
          forma: "texto",
          texto:
            "Es la prueba de que tu sistema cree que te van a dejar.",
        },
        {
          forma: "texto",
          texto:
            "Confundir las dos cosas cuesta años, y a veces cuesta la vida entera.",
        },
      ],
    },
    {
      titulo: "Lo que este libro no puede demostrar",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Hay un problema de fondo que el libro no cuenta y que cambia bastante cómo hay que leerlo: existen dos maneras muy distintas de medir el apego adulto, se llevan fatal entre ellas, y este libro usa solo la barata.",
        },
        {
          forma: "texto",
          texto:
            "La primera es la entrevista de apego adulto, que dura una hora larga, la administra alguien entrenado y se transcribe entera. Pregunta por la infancia, por las separaciones, por los enfados, y pide ejemplos concretos de cada adjetivo que el entrevistado use sobre sus padres.",
        },
        {
          forma: "texto",
          texto:
            "Y no es un instrumento cualquiera. Codificar una sola entrevista lleva horas, exige una formación específica de semanas y por eso apenas se usa fuera de la investigación. Ese detalle explica bastante bien por qué el mundo entero acabó midiendo el apego con un test de revista.",
        },
        {
          forma: "arte",
          texto:
            "Y lo que se puntúa no es lo que pasó. Se puntúa la coherencia del relato: si los ejemplos sostienen los adjetivos, si el hilo se rompe al llegar a lo difícil, si la persona se contradice sin darse cuenta. Alguien con una infancia terrible bien contada se clasifica como seguro.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Eso tiene un nombre precioso en la literatura: seguridad ganada. Gente que llegó a la adultez con todo en contra y que, por terapia, por una pareja o por una relación importante con otro adulto, acabó pudiendo contar su historia entera sin romperse. La categoría sola ya desmonta el fatalismo.",
        },
        {
          forma: "arte",
          texto:
            "Con esa entrevista se hizo el hallazgo más impresionante de todo este campo, y es justo darlo. Se entrevistó a mujeres embarazadas, antes de que existiera el bebé, y su clasificación predijo bastante bien cómo se comportaría ese niño en la situación extraña un año después de nacer.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Ese resultado no dice que el apego se herede. Dice que la manera en que un adulto tiene organizada su propia historia influye en cómo va a responder a un bebé que llora, y ni siquiera eso explica el vínculo entero: la parte que la sensibilidad de los padres deja sin explicar sigue siendo un hueco abierto.",
        },
        {
          forma: "texto",
          texto:
            "La segunda manera de medir es la de este libro y la de casi todo internet: un cuestionario que uno se contesta a sí mismo en cinco minutos. Es barato, es rápido, permite estudios con miles de personas y tiene un inconveniente evidente: pregunta por lo que uno cree que hace.",
        },
        {
          forma: "texto",
          texto:
            "Y con el estilo evitativo ese inconveniente se vuelve casi cómico. Le estamos pidiendo que se autoevalúe en una estrategia cuyo rasgo definitorio es minimizar el malestar, con un método que consiste en preguntarle cuánto malestar tiene. Los datos de sudoración ya nos dijeron lo que ocurre ahí.",
        },
        {
          forma: "clave",
          rotulo: "El dato incómodo",
          frase: "Cuando se ha comparado a las mismas personas con los dos métodos, la coincidencia entre la entrevista y el cuestionario ha resultado ser prácticamente nula. Miden cosas distintas y las dos se llaman apego.",
        },
        {
          forma: "texto",
          texto:
            "Nada de eso invalida el cuestionario para lo que este libro quiere: describir cómo se comporta alguien en una relación de pareja hoy. Sí invalida el salto que el libro insinúa constantemente, que es ir de tu resultado en el test a tu infancia y a lo que te pasó con tu madre.",
        },
        {
          forma: "texto",
          texto:
            "El segundo problema es la estabilidad. El libro dice, correctamente, que los estilos pueden cambiar, y luego escribe trescientas páginas como si no cambiaran nunca. Los seguimientos largos encuentran que una parte importante de la gente cambia de clasificación con los años.",
        },
        {
          forma: "texto",
          texto:
            "La contradicción es incómoda y es suya, no de sus críticos. Si el estilo cambia con la relación, entonces descartar a alguien en la segunda cita por su etiqueta es descartar una foto de hoy tratándola como un pronóstico; y si no cambia, sobra la mitad del libro, que va justamente de cómo cambiarlo.",
        },
        {
          forma: "texto",
          texto:
            "Y hay algo más: el estilo no es del todo tuyo, es en parte de la relación. La misma persona puede funcionar como segura con un amigo de veinte años, como ansiosa con una pareja concreta y como evitativa con su padre. La casilla describe una danza, no una propiedad del bailarín.",
        },
        {
          forma: "texto",
          texto:
            "El tercer problema son los porcentajes, que ya sabemos de dónde vienen. Cuando la situación extraña se aplicó fuera de Estados Unidos, los repartos cambiaron muchísimo: en muestras alemanas salieron muchísimos más evitativos y en otras culturas muchos más ambivalentes.",
        },
        {
          forma: "arte",
          texto:
            "La discusión sobre qué significa eso lleva cuarenta años abierta. Puede que la crianza sea distinta, puede que un procedimiento diseñado en Baltimore mida cosas distintas en una casa donde a un niño de un año no se le deja nunca solo con un desconocido. Ninguna de las dos lecturas está cerrada.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El cuarto problema es el que más se repite en internet: la línea recta desde el bebé hasta el matrimonio. Los estudios que siguen a las mismas personas desde el año de vida hasta los treinta encuentran relación, pero mucho más floja de lo que sugiere cualquier resumen de este libro.",
        },
        {
          forma: "texto",
          texto:
            "Y hay que dejar dicho lo que sí aguanta, porque después de tanta objeción parecería que no queda nada. Las dos dimensiones, medidas como se miden, predicen de verdad cosas comprobables: satisfacción en la pareja, probabilidad de ruptura, si alguien pide ayuda cuando lo pasa mal. Los efectos son modestos y se repiten.",
        },
        {
          forma: "texto",
          texto:
            "Y conviene ponerlo junto a los otros dos libros de esta biblioteca que también reparten a la gente en casillas amorosas. «Los cinco lenguajes del amor» propone cinco maneras de expresar cariño; «Marte y Venus» propone dos, una por sexo; este propone tres, una por alarma.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia entre ellos, y no es pequeña, está en lo que hay debajo. Detrás de este hay sesenta años de observación de bebés, entrevistas codificadas y estudios que siguen a la gente durante décadas; detrás de los otros dos hay sobre todo la experiencia clínica de sus autores.",
        },
        {
          forma: "texto",
          texto:
            "Ninguna de las tres tipologías tiene detrás la clase de evidencia que sus portadas sugieren, y las tres son útiles por la misma razón: dan vocabulario para nombrar algo que antes se discutía a gritos. Como vocabulario valen mucho; como diagnóstico no valen ninguno de los tres.",
        },
        {
          forma: "texto",
          texto:
            "El libro promete ciencia del apego adulto.",
        },
        {
          forma: "texto",
          texto:
            "Y entrega la mitad barata de esa ciencia, sin decir que hay otra mitad.",
        },
        {
          forma: "texto",
          texto:
            "Que además apenas se pone de acuerdo con la que él usa.",
        },
      ],
    },
    {
      titulo: "Depender bien",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El destino del libro es una idea que va contra todo el sentido común de la autoayuda, y es la que justifica leerlo entero. Se llama la paradoja de la dependencia y dice que cuanto mejor puede uno apoyarse en alguien, más lejos se atreve a ir por su cuenta.",
        },
        {
          forma: "texto",
          texto:
            "La intuición contraria es la que domina el estante: primero quiérete a ti mismo, no dependas de nadie, sé completo antes de estar con alguien. Este libro sostiene que eso está exactamente del revés y que la autonomía no es lo contrario del apoyo, sino su consecuencia.",
        },
        {
          forma: "clave",
          rotulo: "La paradoja de la dependencia",
          frase: "Depender bien de alguien no te vuelve dependiente: te vuelve valiente. Quien sabe que tiene dónde volver es precisamente el que se atreve a irse lejos.",
        },
        {
          forma: "arte",
          texto:
            "La prueba original está en el laboratorio de Ainsworth y es de una elegancia enorme. Los bebés seguros no eran los que se quedaban pegados a la madre: eran los que más se alejaban a explorar la sala, precisamente porque sabían dónde estaba. La cercanía no reduce la exploración, la financia.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "En adultos se ha estudiado con parejas reales y sale lo mismo. Las personas que declaran poder apoyarse más en su pareja son también las que se lanzan a más proyectos propios, aguantan mejor las tareas difíciles y persiguen sus objetivos con más independencia, no con menos.",
        },
        {
          forma: "texto",
          texto:
            "El diseño de esos estudios ayuda a creérselo, porque no se quedan en lo que la gente dice. Se graba a la pareja mientras uno de los dos se enfrenta a una tarea difícil y se mira qué hace el otro; luego se sigue a esa persona meses después, y quien tuvo un compañero que respondió acaba funcionando más por su cuenta.",
        },
        {
          forma: "texto",
          texto:
            "Hay un experimento que lo enseña de una manera casi física. A mujeres casadas metidas en un escáner se les anunciaba que podían recibir una descarga eléctrica; cuando les daban la mano a su marido, la respuesta cerebral a la amenaza bajaba, y bajaba más cuanto mejor iba el matrimonio.",
        },
        {
          forma: "texto",
          texto:
            "Conviene saber su tamaño antes de repetirlo por ahí: eran dieciséis mujeres. El efecto se ha vuelto a encontrar después en muestras mayores y con variaciones, pero el estudio famoso, el que aparece en todas partes, es pequeño, y este libro lo cuenta sin decir cuánta gente había dentro.",
        },
        {
          forma: "texto",
          texto:
            "Y hay otro más pequeño y más bonito: gente al pie de una cuesta estimando cuánto sube. Los que estaban acompañados por un amigo la veían menos empinada que los que estaban solos, y el efecto era mayor cuanto más larga era la amistad. El apoyo no cambia la cuesta, cambia la cuesta que uno ve.",
        },
        {
          forma: "arte",
          texto:
            "Es la misma idea que sostiene «El cerebro del niño», de Siegel, desde el otro lado del vínculo: el adulto que responde no está malcriando, está prestando su sistema nervioso hasta que el pequeño tenga el suyo. Aquí se dice que entre adultos eso sigue funcionando y que no hay edad para dejar de necesitarlo.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la parte práctica del libro, que es la mejor y ocupa poco. La llaman comunicación efectiva y consiste en algo que parece trivial y que casi nadie hace: decir lo que uno necesita, pronto, en positivo y sin adornos, en vez de insinuarlo y esperar que el otro lo adivine.",
        },
        {
          forma: "texto",
          texto:
            "Y dan tres preguntas para juzgar a alguien que valen más que cualquier test: cuando estás mal, ¿te deja peor o mejor de lo que estabas? Cuando pides algo directamente, ¿responde o se molesta? Y cuando te va bien en algo tuyo, ¿se alegra de verdad o encuentra la manera de restarle importancia?",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que dan es claro. No es lo mismo decir que te da igual y esperar tres días a que llame, que decir que te gustaría saber cuándo os vais a ver y que si no lo sabes te quedas incómodo. La primera versión protege el orgullo y no informa; la segunda expone y funciona.",
        },
        {
          forma: "texto",
          texto:
            "Con una advertencia que el libro pasa deprisa: esto solo funciona si enfrente hay alguien dispuesto. Con una persona que castiga la claridad, el consejo se le da la vuelta a quien lo sigue y se convierte en la sospecha de que lo dijo mal, cuando el problema era que lo dijo a quien no debía.",
        },
        {
          forma: "texto",
          texto:
            "Y viene con un beneficio secundario que ellos subrayan mucho: decir las cosas pronto y claras es también el filtro más rápido que existe. La respuesta del otro a esa frase da más información en diez segundos que tres meses de interpretar mensajes y contar horas de retraso.",
        },
        {
          forma: "texto",
          texto:
            "Eso les lleva a la única pelea abierta que tiene el libro, y es con todo el género de consejos amorosos que recomienda hacerse el interesante: no contestes hasta mañana, muéstrate ocupado, que no note que te importa. El libro sostiene que esa estrategia es contraproducente y explica por qué.",
        },
        {
          forma: "texto",
          texto:
            "El motivo es que selecciona justo al revés. A un evitativo el juego le encanta, porque mantiene la distancia sin tener que pedirla; a un seguro le parece simplemente falta de interés y se va sin dar un portazo. Jugar filtra a quien te convendría y retiene a quien te va a hacer sufrir.",
        },
        {
          forma: "texto",
          texto:
            "Para quien se reconozca en el lado ansioso, la conclusión de la investigación es menos individualista de lo que suena la autoayuda: el camino más rápido hacia la seguridad no es trabajarse a uno mismo en soledad, es una relación en la que las cosas vayan bien durante el tiempo suficiente.",
        },
        {
          forma: "texto",
          texto:
            "Y para quien se reconozca en el evitativo, que es el que menos ayuda recibe en estas páginas, lo que hay es esto: aprender a notar la estrategia mientras está ocurriendo. El defecto pequeño que de pronto crece, las ganas de irse justo después de una noche buena, la frase que corta la conversación.",
        },
        {
          forma: "arte",
          texto:
            "Frente al riesgo de convertir todo esto en un horóscopo conviene tener a mano a Fromm, que en «El arte de amar» sostiene que amar es una capacidad que se practica y no una lotería que se gana. Decir soy evitativo y quedarse ahí es usar un diagnóstico como coartada.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Porque esa es la deformación que ha sufrido el libro en internet, y merece decirse con todas las letras: las etiquetas se usan hoy para explicar por qué uno no puede cambiar, cuando el propio libro las presenta como el mapa de por dónde empezar a hacerlo.",
        },
        {
          forma: "texto",
          texto:
            "Y por eso el destino de este viaje no es descubrir en qué casilla estás.",
        },
        {
          forma: "texto",
          texto:
            "Es decir en voz alta lo que necesitas y mirar qué hace el otro.",
        },
        {
          forma: "texto",
          texto:
            "Esa respuesta, y no tu etiqueta, es el dato que decide cómo va a ir.",
        },
      ],
    },
  ],
};
