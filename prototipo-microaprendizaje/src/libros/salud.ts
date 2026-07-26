import type { Resumen } from "./tipos";

export const CUERPO_CUENTA: Resumen = {
  id: "cuerpo-cuenta",
  titulo: "El cuerpo lleva la cuenta",
  autor: "Bessel van der Kolk",
  ano: 2014,
  gancho: "El trauma no se guarda como un recuerdo. Se guarda en el cuerpo, y por eso no se cura hablando.",
  porQue:
    "Lleva más de una década en las listas de más vendidos porque explica por qué gente que sabe perfectamente lo que le pasó sigue reaccionando como si volviera a pasar.",
  partes: [
    {
      titulo: "Los veteranos",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1978 Bessel van der Kolk empezó a trabajar en un hospital de veteranos de Vietnam. Sus pacientes le describían escenas que no encajaban con ningún manual: hombres que se tiraban al suelo al oír un petardo, que no soportaban que su mujer les tocara la espalda, que se sentían muertos por dentro y solo se notaban vivos conduciendo a doscientos.",
        },
        {
          forma: "arte",
          texto:
            "Todos sabían exactamente lo que les había ocurrido. Podían contarlo con detalle. Y contarlo no servía de nada: al terminar la sesión salían igual o peor. Van der Kolk pasó cuarenta años intentando entender por qué, y el libro es esa respuesta.",
          arte: "noche",
        },
        {
          forma: "clave",
          rotulo: "El hallazgo",
          frase: "El trauma no se archiva como una historia con principio y final. Se archiva como sensaciones sueltas sin fecha.",
        },
        {
          forma: "texto",
          texto:
            "Los estudios de neuroimagen que dirigió lo mostraron con claridad. Al revivir el episodio, se encendía la zona de la alarma y se apagaba la del lenguaje — la misma región que se lesiona en algunos ictus y deja a la persona sin palabras. De ahí que el trauma se describa tan mal: literalmente, mientras se revive, el cerebro no tiene el habla disponible.",
        },
      ],
    },

    {
      titulo: "Un reloj que no avanza",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su explicación central es que el cuerpo se queda atascado en la respuesta de emergencia. Ante un peligro, el organismo se prepara para luchar o huir; si ninguna de las dos cosas es posible —un niño no puede huir de su casa, un soldado no puede huir del convoy— el sistema se bloquea con el motor en marcha.",
        },
        {
          forma: "clave",
          rotulo: "Por qué el tiempo no cura",
          frase: "El cuerpo sigue actuando como si el peligro continuara. No es que recuerde el pasado: es que no ha registrado que terminó.",
        },
        {
          forma: "texto",
          texto:
            "De ahí síntomas que parecen inconexos y no lo son: hipervigilancia, sobresaltos, insomnio, problemas digestivos, dolores crónicos sin causa detectable, dificultad para concentrarse y la sensación de estar mirándose desde fuera. Todo eso es un sistema de alarma que no se ha apagado.",
        },
        {
          forma: "arte",
          texto:
            "Van der Kolk señala además algo que cambió su forma de tratar: mucha gente traumatizada no siente su propio cuerpo. No sabe si tiene hambre, si está cansada, dónde nota la tensión. Es una anestesia que empezó siendo protección — dejar de sentir cuando sentir era insoportable— y que después impide vivir.",
          arte: "memoria",
        },
      ],
    },

    {
      titulo: "Lo que sí funciona",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su conclusión práctica es la que hizo el libro famoso: si el trauma vive en el cuerpo, el tratamiento tiene que pasar por el cuerpo. Hablar ayuda, pero no basta, y en algunos casos repetir el relato una y otra vez reactiva la herida sin cerrarla.",
        },
        {
          forma: "texto",
          texto:
            "Repasa lo que ha visto funcionar en sus pacientes: terapias que trabajan con la atención corporal, yoga adaptado —donde lo importante no es la postura sino volver a notar el cuerpo sin miedo—, respiración lenta, teatro, artes marciales, coros. Cosas donde uno se mueve con otros y recupera la sensación de tener control.",
        },
        {
          forma: "clave",
          rotulo: "El otro pilar",
          frase: "La seguridad viene de otras personas. Nadie se recupera del trauma en soledad.",
        },
        {
          forma: "texto",
          texto:
            "Lo dice con una precisión que importa: no vale cualquier compañía. Hace falta al menos una persona ante la cual puedas dejar de estar en guardia, y eso es justamente lo que el trauma dificulta, porque enseña a desconfiar. Por eso, dice, la primera parte del tratamiento suele ser la más lenta.",
        },
        {
          forma: "texto",
          texto:
            "Dedica bastante espacio al <em>EMDR</em>, una terapia que combina el recuerdo con movimientos oculares dirigidos y que a él mismo le pareció inverosímil hasta que vio los resultados. Hoy tiene respaldo en ensayos clínicos y está en las guías de tratamiento, aunque sigue sin haber acuerdo sobre por qué funciona.",
        },
      ],
    },

    {
      titulo: "Lo que hay que matizar",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "El libro se convirtió en un fenómeno cultural y ahí empezaron los problemas. Su frase título se usa hoy para explicar cualquier dolor de espalda o cualquier malestar, y esa lectura no está en el libro: van der Kolk habla de trauma clínico, no de que todo síntoma físico esconda una herida emocional.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Hay críticas técnicas serias. Algunos de los estudios que cita son pequeños o antiguos, su defensa del yoga y del neurofeedback se apoya en evidencia más flaca de lo que sugiere el tono, y varios investigadores le reprochan presentar como establecido lo que aún se discute.",
        },
        {
          forma: "texto",
          texto:
            "Y un aviso práctico: es un libro duro. Contiene descripciones detalladas de abusos y violencia. A mucha gente le ha servido para poner nombre a lo que le pasa; a otra le ha removido cosas sin tener a nadie al lado. No sustituye a un tratamiento.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Si tu cuerpo reacciona a algo que tu cabeza sabe que ya pasó, no estás fallando. Estás con la alarma encendida.",
        },
        {
          forma: "texto",
          texto:
            "Antes de cerrar conviene rescatar el capítulo sobre la infancia, que es el corazón del libro. Van der Kolk trabajó con niños maltratados y descubrió que casi ninguno encajaba en los diagnósticos disponibles: se les etiquetaba de hiperactivos, oposicionistas o bipolares, y se les medicaba. Su equipo propuso una categoría nueva —trauma del desarrollo— que la asociación psiquiátrica estadounidense rechazó. Su argumento sigue en pie: a un niño que creció en peligro constante no se le está tratando la enfermedad, se le está tratando la adaptación que le mantuvo vivo.",
        },
      ],
    },
  ],
};

export const DIGESTION: Resumen = {
  id: "digestion-cuestion",
  titulo: "La digestión es la cuestión",
  autor: "Giulia Enders",
  ano: 2014,
  gancho: "Una estudiante de medicina de veinticinco años escribió un libro sobre el intestino y vendió millones.",
  porQue:
    "Convierte el órgano del que nadie quiere hablar en el más interesante del cuerpo, con humor y sin una sola palabra técnica sin explicar.",
  partes: [
    {
      titulo: "Una charla que salió bien",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Giulia Enders era estudiante de medicina en Fráncfort cuando se presentó a un concurso de divulgación científica en el que hay que explicar tu investigación en diez minutos ante un público general. Eligió el intestino. Ganó, el vídeo circuló y una editorial la llamó.",
        },
        {
          forma: "arte",
          texto:
            "El libro, ilustrado por su hermana con dibujos deliberadamente simpáticos, arrasó en Alemania y después en el resto del mundo. Su mérito es de tono: consigue hablar de digestión, gases y heces durante trescientas páginas sin resultar ni asqueroso ni infantil.",
          arte: "aprendizaje",
        },
        {
          forma: "clave",
          rotulo: "El punto de partida",
          frase: "Tres cuartas partes de tu sistema inmunitario están en el intestino. No es una tubería: es un órgano central.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento es que tratamos al intestino como un tema vergonzoso y por eso ignoramos lo que nos está diciendo. La gente aguanta años con molestias sin consultarlas, mientras que iría al médico al primer pinchazo en el pecho.",
        },
      ],
    },

    {
      titulo: "Cómo funciona de verdad",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Empieza por lo básico y lo hace bien. El aparato digestivo es un tubo de varios metros cuya superficie interior, con todos sus pliegues y vellosidades, ocuparía decenas de metros cuadrados. Es, con diferencia, la mayor superficie de contacto de tu cuerpo con el mundo exterior — mucho más que la piel.",
        },
        {
          forma: "texto",
          texto:
            "Explica por qué vomitamos, por qué se producen los gases y qué significan sus distintos olores, y dedica un capítulo entero a la postura al ir al baño: el ángulo del recto está diseñado para hacer de freno, y sentarse en un inodoro moderno no lo desactiva del todo. Elevar los pies con un taburete sí.",
        },
        {
          forma: "clave",
          rotulo: "El detalle que todo el mundo recuerda",
          frase: "Los cierres del sistema son dos: uno lo controlas tú y el otro no. El de dentro decide antes que tú.",
        },
        {
          forma: "texto",
          texto:
            "Enders explica que aguantar sistemáticamente por vergüenza —en el trabajo, en un baño ajeno— reeduca a la baja ese sistema y es una causa frecuente de estreñimiento crónico. Es de esas cosas que nadie cuenta y que resuelven años de molestias.",
        },
        {
          forma: "arte",
          texto:
            "También aclara intolerancias y alergias con una distinción útil: la intolerancia es un problema de enzimas que faltan y su gravedad depende de la cantidad; la alergia es el sistema inmunitario atacando, y ahí no hay dosis pequeña que valga.",
          arte: "explorar",
        },
      ],
    },

    {
      titulo: "El segundo cerebro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La parte más llamativa del libro es la que trata el sistema nervioso propio del intestino: una red de cientos de millones de neuronas que funciona con bastante autonomía y que está conectada al cerebro por el nervio vago. Lo asombroso es la dirección del tráfico — la mayor parte de la información sube del intestino al cerebro, no al revés.",
        },
        {
          forma: "clave",
          rotulo: "La consecuencia",
          frase: "Tu intestino le está contando cosas a tu cerebro todo el rato. Mucho más de lo que el cerebro le cuenta a él.",
        },
        {
          forma: "texto",
          texto:
            "Enders repasa los experimentos con ratones libres de microbios, que se comportaban de forma más temeraria y respondían distinto al estrés, y los que trasplantaban microbiota de un animal ansioso a otro tranquilo. También menciona que buena parte de la serotonina del cuerpo se produce en el intestino, aunque advierte de que esa no es la misma que actúa en el cerebro.",
        },
        {
          forma: "texto",
          texto:
            "Sobre la microbiota da datos concretos: pesa entre uno y dos kilos, contiene miles de especies distintas, y la de cada persona es tan particular que podría servir para identificarla. Los primeros años de vida y el tipo de parto influyen en cómo se forma.",
        },
      ],
    },

    {
      titulo: "Qué hacer y qué no creerse",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Sus consejos prácticos son pocos y razonables: comer fibra variada —que es lo que alimenta a las bacterias buenas—, no abusar de antibióticos, masticar, y no tomarse los probióticos comerciales como una solución mágica, porque la mayoría no colonizan nada y desaparecen a los días.",
        },
        {
          forma: "arte",
          texto:
            "Aquí conviene poner la advertencia grande. La investigación sobre microbiota es reciente y se ha adelantado muchísimo a lo que se puede afirmar. Enders es más prudente que el mercado que vino después, pero el libro contribuyó a una ola de productos y dietas que prometen mucho más de lo que hay demostrado.",
          arte: "noche",
        },
        {
          forma: "clave",
          rotulo: "Lo que sí está claro",
          frase: "Que existe una conversación entre intestino y cerebro. Lo que se dicen exactamente, todavía no lo sabemos.",
        },
        {
          forma: "texto",
          texto:
            "Enders dedica un tramo estupendo a explicar por qué el estrés sienta mal a la barriga, y la respuesta es de contabilidad energética. Ante una amenaza, el cuerpo recorta el presupuesto de todo lo que no sea urgente, y digerir es carísimo: se reduce el riego intestinal, se altera el movimiento del tubo y se produce menos moco protector. Mantenido en el tiempo, eso explica buena parte de las molestias que la gente arrastra durante años sin que ninguna prueba encuentre nada. El intestino no está roto: está esperando a que se acabe una emergencia que no acaba nunca.",
        },
        {
          forma: "texto",
          texto:
            "Léelo por lo que hace mejor que nadie: entender cómo funciona tu propio cuerpo por dentro, con humor y en un fin de semana. Como manual de dietas o de suplementos, mejor no usarlo.",
        },
      ],
    },
  ],
};

export const NACIDOS_CORRER: Resumen = {
  id: "nacidos-correr",
  titulo: "Nacidos para correr",
  autor: "Christopher McDougall",
  ano: 2009,
  gancho: "Fue al médico porque le dolía el pie corriendo. Acabó en un cañón de México con una tribu que corre cien kilómetros por diversión.",
  porQue:
    "Provocó una revolución mundial en la forma de correr y de fabricar zapatillas a partir de una sola pregunta: ¿por qué me duele?",
  partes: [
    {
      titulo: "La pregunta del pie",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Christopher McDougall era un periodista grande y pesado que corría de vez en cuando y siempre acababa lesionado. Fue al médico con un dolor en el pie y le dijeron lo de siempre: que su cuerpo no estaba hecho para correr, que dejara de hacerlo y se comprara una bicicleta. Le pareció una respuesta insuficiente y decidió preguntar en otro sitio.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta que abre el libro",
          frase: "Si correr nos rompe, ¿por qué el ochenta por ciento de los corredores se lesiona cada año haciendo lo que la especie lleva haciendo dos millones de años?",
        },
        {
          forma: "arte",
          texto:
            "Buscando respuestas encontró referencias sueltas a un pueblo del norte de México, en la sierra Tarahumara: los rarámuri. Corren distancias enormes por barrancos, con sandalias hechas de neumático viejo, hasta edades muy avanzadas, y apenas se lesionan. Decidió ir a buscarlos.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "El libro es el relato de ese viaje, y funciona como una novela de aventuras: para llegar hasta ellos necesita a un americano medio desaparecido que vive en la sierra y al que llaman Caballo Blanco. La historia culmina en una carrera improvisada de ochenta kilómetros entre corredores de élite estadounidenses y rarámuris, dentro del cañón.",
        },
      ],
    },

    {
      titulo: "La zapatilla",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La parte que hizo ruido es su acusación contra la industria del calzado deportivo. Su argumento: la zapatilla moderna con amortiguación gruesa se inventó a principios de los setenta, y desde entonces las lesiones de corredor no han bajado. En algunos estudios, los que usan calzado más caro se lesionan igual o más.",
        },
        {
          forma: "clave",
          rotulo: "La explicación que propone",
          frase: "Un talón muy acolchado te deja aterrizar de talón sin que duela. Y aterrizar de talón es lo que manda el impacto arriba, a la rodilla y la cadera.",
        },
        {
          forma: "texto",
          texto:
            "Descalzo, nadie corre así: el dolor te obliga a apoyar la parte media o delantera del pie, con la zancada más corta y las rodillas algo flexionadas, y todo el pie actúa como muelle. La amortiguación, dice McDougall, no protege — silencia la señal que te haría corregir.",
        },
        {
          forma: "arte",
          texto:
            "Se apoya también en la hipótesis de la resistencia por persistencia: los humanos somos malísimos en velocidad punta y extraordinarios en distancia con calor. Sudamos por toda la piel, no jadeamos para enfriarnos, tenemos tendón de Aquiles y glúteos enormes. Hay pueblos cazadores que perseguían antílopes a pie durante horas hasta que el animal caía por sobrecalentamiento.",
          arte: "explorar",
        },
      ],
    },

    {
      titulo: "Lo que provocó",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El impacto comercial fue inmediato y enorme. Las ventas de calzado minimalista se dispararon, aparecieron zapatillas con dedos separados y todas las marcas grandes sacaron su línea «natural». Miles de personas se pusieron a correr descalzas de un día para otro.",
        },
        {
          forma: "texto",
          texto:
            "Y muchas se lesionaron. Pasar de veinte años con amortiguación a correr descalzo sin transición sobrecarga unos pies y unos gemelos que no están preparados: hubo una oleada de fracturas por estrés en los metatarsianos. Una gran marca acabó pagando una indemnización millonaria por prometer beneficios musculares que no pudo demostrar.",
        },
        {
          forma: "clave",
          rotulo: "El matiz que el libro no da",
          frase: "El problema no era la zapatilla. Era cambiar de técnica de golpe y sin adaptación.",
        },
        {
          forma: "texto",
          texto:
            "La investigación posterior ha dejado el asunto en tablas: no hay pruebas sólidas de que el calzado minimalista prevenga lesiones, ni de que la amortiguación las cause. Lo que sí parece importar es el volumen —cuánto aumentas cada semana—, la cadencia y la fuerza previa. Es una conclusión mucho menos épica.",
        },
      ],
    },

    {
      titulo: "Lo que queda",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "Como periodismo, el libro es extraordinario: engancha desde la primera página y tiene personajes que parecen inventados. Como ciencia, hay que leerlo con distancia — McDougall selecciona los estudios que le convienen, presenta hipótesis discutidas como hechos y romantiza a los rarámuri, cuya realidad incluye pobreza severa, y cuyas carreras tradicionales van acompañadas de apuestas y alcohol.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "También conviene saber el final que el libro no cuenta: la carrera del cañón se convirtió en una ultramaratón anual, y Caballo Blanco —Micah True— murió en 2012 corriendo solo por el monte, a los cincuenta y ocho años.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí ha quedado, y no es poco: la idea de que la técnica de carrera importa y se puede entrenar, la atención a la cadencia, y el hecho de que millones de personas se plantearan por primera vez cómo apoyan el pie. Antes de 2009 eso no lo discutía nadie fuera de la élite.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Correr no rompe el cuerpo. Lo rompe correr mucho más de golpe, sin haberle enseñado antes a hacerlo.",
        },
        {
          forma: "texto",
          texto:
            "Queda una idea del libro que ha aguantado mejor que todo lo demás, y no tiene que ver con el calzado. McDougall observa que los rarámuri corren sonriendo, en grupo y sin cronómetro, y que para ellos correr no es entrenamiento ni sacrificio: es una fiesta que dura horas. Su tesis es que el ser humano evolucionó para hacerlo así, y que convertirlo en una tarea medida —ritmos, marcas, culpa por no cumplir— es lo que hace que la mayoría lo abandone a los tres meses. Corre despacio, acompañado y sin mirar el reloj, dice, y no tendrás que obligarte.",
        },
      ],
    },
  ],
};

export const DILEMA_OMNIVORO: Resumen = {
  id: "dilema-omnivoro",
  titulo: "El dilema del omnívoro",
  autor: "Michael Pollan",
  ano: 2006,
  gancho: "Siguió cuatro comidas hasta su origen. Una de ellas venía casi entera de una sola planta: el maíz.",
  porQue:
    "Es el libro que cambió la conversación pública sobre comida, y su consejo final cabe en siete palabras.",
  partes: [
    {
      titulo: "La pregunta del omnívoro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un koala no tiene ninguna duda sobre qué cenar. Nosotros sí: podemos comer casi cualquier cosa, y por eso tenemos que decidir. Pollan llama a eso el dilema del omnívoro, y sostiene que en las últimas décadas hemos perdido lo único que nos ayudaba a resolverlo — una cultura alimentaria heredada que decía qué es comida y qué no.",
        },
        {
          forma: "clave",
          rotulo: "El síntoma",
          frase: "Somos el único país donde una nación entera cambia de dieta cada pocos años según lo que diga el titular de turno.",
        },
        {
          forma: "arte",
          texto:
            "Su método es de periodista, y es lo que hace el libro. Elige cuatro comidas y las persigue hacia atrás hasta el suelo del que salieron: un menú de comida rápida, una cena de supermercado ecológico, una comida de una granja pequeña y una que él mismo caza y recolecta.",
          arte: "mapa",
        },
      ],
    },

    {
      titulo: "Todo es maíz",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Al rastrear el menú de comida rápida se encuentra con algo que no esperaba. La carne del hamburguesa viene de una vaca alimentada con maíz. El refresco es jarabe de maíz. El pollo, maíz. Las patatas se fríen en aceite de maíz. Los espesantes, los emulgentes y el colorante son derivados del maíz.",
        },
        {
          forma: "clave",
          rotulo: "El análisis",
          frase: "Un análisis isotópico de un estadounidense medio delata que buena parte del carbono de su cuerpo procede del maíz.",
        },
        {
          forma: "texto",
          texto:
            "Explica cómo se llegó ahí: subvenciones que premian producir la máxima cantidad posible, una montaña de grano barato que hay que colocar en algún sitio, y una industria que aprendió a convertirlo en cualquier cosa. El maíz no se impuso porque fuera lo mejor, sino porque era lo más barato de sobreproducir.",
        },
        {
          forma: "texto",
          texto:
            "La consecuencia en las granjas industriales es dura de leer. La vaca es un animal diseñado para digerir hierba; alimentarla con grano le acidifica el estómago y la enferma, lo que obliga a administrarle antibióticos de forma rutinaria. El sistema funciona solo mientras la medicación lo sostenga.",
        },
      ],
    },

    {
      titulo: "Lo ecológico industrial",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La segunda comida es la que más incomodó a sus lectores. Pollan sigue la etiqueta de un supermercado ecológico de gama alta y descubre que buena parte de ese sector se ha industrializado igual: monocultivos gigantes, gallinas «camperas» con una puerta al exterior que casi ninguna usa, y lechugas que recorren miles de kilómetros refrigeradas.",
        },
        {
          forma: "clave",
          rotulo: "Su conclusión",
          frase: "Lo ecológico industrial es mejor que lo convencional, pero muchísimo menos de lo que promete la etiqueta.",
        },
        {
          forma: "texto",
          texto:
            "Su reproche no es al sello, que sí garantiza cosas reales sobre pesticidas y antibióticos, sino al relato que lo envuelve: fotos de granjas familiares y vacas en el prado impresas en envases de productos que salen de explotaciones tan grandes como cualquier otra.",
        },
        {
          forma: "arte",
          texto:
            "Frente a eso pasa una semana en una granja pequeña de Virginia donde las vacas pastan, y detrás van las gallinas —tres días después, el tiempo exacto para que las larvas hayan crecido en el estiércol— picoteando y fertilizando. Nadie compra fertilizante ni antibióticos. Es el capítulo más luminoso del libro.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El propio granjero le señala el problema: ese modelo no vende a distancia, exige más gente trabajando y sale más caro. No es escalable a un país entero con los precios actuales, y Pollan no esconde esa objeción.",
        },
      ],
    },

    {
      titulo: "Siete palabras",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La cuarta comida se la prepara él: caza un jabalí, recoge setas con un experto y hace pan con levadura silvestre. El capítulo es en parte una broma sobre sí mismo —es un intelectual urbano bastante inútil en el monte— y en parte un argumento serio sobre lo que se pierde cuando no sabes de dónde viene nada de lo que comes.",
        },
        {
          forma: "clave",
          rotulo: "La regla que le hizo famoso",
          frase: "Come comida. No demasiada. Sobre todo plantas.",
        },
        {
          forma: "texto",
          texto:
            "Pollan añade una crítica que se ha vuelto más relevante con los años: lo que llama el nutricionismo, la costumbre de juzgar la comida por sus componentes aislados en vez de por lo que es. Primero el enemigo fue la grasa, y la industria llenó los lineales de productos desnatados cargados de azúcar. Después el azúcar, y llegaron los edulcorantes. Cada vez que la ciencia señala una molécula, aparece un producto que la elimina y que resulta estar más procesado que el original. Su conclusión: si un alimento necesita una etiqueta que explique por qué es sano, sospecha.",
        },
        {
          forma: "texto",
          texto:
            "Con «comida» quiere decir algo concreto: lo que tu bisabuela habría reconocido como tal. Si tiene más de cinco ingredientes, o alguno que no sabrías pronunciar, o si se anuncia por lo saludable que es, probablemente sea un producto y no un alimento. Los alimentos de verdad no llevan campaña publicitaria.",
        },
        {
          forma: "arte",
          texto:
            "Sus críticas son justas y conviene tenerlas: el libro es muy estadounidense —las subvenciones al maíz no son el problema europeo—, su ideal de granja pequeña es económicamente inviable a gran escala, y sus consejos son bastante más fáciles de seguir con dinero y tiempo que sin ellos.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Aun así, cambió la conversación. Buena parte de lo que hoy se da por sabido sobre etiquetas, ultraprocesados y comida local empezó a discutirse a gran escala a partir de este libro.",
        },
      ],
    },
  ],
};

export const ALIENTO_AIRE: Resumen = {
  id: "aliento-aire",
  titulo: "Cuando el aliento se vuelve aire",
  autor: "Paul Kalanithi",
  ano: 2016,
  gancho: "Neurocirujano de treinta y seis años, a un año de terminar diez de formación. Le diagnosticaron cáncer de pulmón terminal.",
  porQue:
    "Es el libro sobre morir escrito por alguien que se había pasado la vida decidiendo, del otro lado de la mesa, cuánto le quedaba a otros.",
  partes: [
    {
      titulo: "El escáner",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Paul Kalanithi llevaba diez años formándose como neurocirujano en Stanford. Le quedaban meses para terminar y ya tenía ofertas de trabajo. Llevaba tiempo perdiendo peso y con dolor de espalda, y lo había achacado al agotamiento. Un día miró su propio escáner y vio lo que había visto cientos de veces en las pantallas de sus pacientes.",
        },
        {
          forma: "clave",
          rotulo: "El giro",
          frase: "Pasó de ser el médico que da la noticia a ser el paciente que la recibe, en la misma planta del mismo hospital.",
        },
        {
          forma: "arte",
          texto:
            "Cáncer de pulmón en estadio IV, con treinta y seis años y sin haber fumado nunca. El libro lo escribió durante los veintidós meses siguientes, entre tratamientos, y lo dejó sin terminar. Su mujer Lucy, también médica, escribió el epílogo.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Antes de medicina había estudiado literatura inglesa y filosofía. Cuenta que llegó a la neurocirugía buscando una respuesta a la misma pregunta que buscaba en los libros: qué hace que una vida tenga sentido. Le pareció que el sitio donde eso se decide de verdad era un quirófano donde se opera un cerebro.",
        },
      ],
    },

    {
      titulo: "El otro lado de la mesa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La primera mitad del libro es su formación, y es lo que hace que la segunda duela. Kalanithi describe cómo se aprende a dar malas noticias, cómo se decide cuándo operar y cuándo no, y cómo un cirujano acaba manejando la estadística como escudo.",
        },
        {
          forma: "texto",
          texto:
            "Cuenta una conversación con un paciente al que tenía que explicar que un tumor le cambiaría la personalidad, y cómo aprendió que lo importante no era la cifra de supervivencia sino averiguar qué era lo que esa persona no estaba dispuesta a perder. Para uno era hablar; para otro, seguir tocando el piano.",
        },
        {
          forma: "clave",
          rotulo: "Lo que descubre siendo paciente",
          frase: "Preguntó a su oncóloga cuánto le quedaba. Ella se negó a darle un número, y él tardó en entender por qué.",
        },
        {
          forma: "arte",
          texto:
            "Su explicación es la mejor página del libro. Con un año, aprovechas el tiempo con tu familia. Con diez, escribes, investigas, vuelves al quirófano. La cifra no es información médica: es lo que decide en qué gastas lo que queda. Y como nadie la sabe de verdad, dar una es quitarle al paciente la posibilidad de vivir en la incertidumbre real.",
          arte: "memoria",
        },
      ],
    },

    {
      titulo: "Volver a operar",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Con el primer tratamiento respondió bien y decidió volver al quirófano. Terminó su residencia. Operaba con dolor, agotado, sabiendo que era temporal, y describe esa vuelta sin ninguna épica: no fue heroísmo, fue que necesitaba seguir siendo quien era mientras pudiera.",
        },
        {
          forma: "texto",
          texto:
            "La decisión más difícil llegó después. Él y Lucy se plantearon si tener un hijo sabiendo que él no llegaría a verlo crecer. Se lo preguntaron a ella misma de la forma más cruda posible: ¿no hará eso que despedirse sea más duro? Y ella respondió que sí, y que precisamente por eso valía la pena.",
        },
        {
          forma: "clave",
          rotulo: "Su hija",
          frase: "Cady nació ocho meses antes de que él muriera. Kalanithi dijo que fue el mejor tiempo de su vida.",
        },
        {
          forma: "texto",
          texto:
            "El libro termina con un mensaje escrito para ella, para que lo lea de mayor. Le dice que en los años en que un hombre valora su vida y calcula lo que ha conseguido, ella le llenó de una alegría que él no conocía y que no le hacía pedir nada más. Es una página muy corta y es la razón por la que este libro se recomienda tanto.",
        },
      ],
    },

    {
      titulo: "El epílogo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Kalanithi murió en marzo de 2015, con treinta y siete años, sin terminar el libro. Estaba escribiéndolo hasta pocos días antes, con guantes porque el tratamiento le había agrietado las yemas de los dedos.",
        },
        {
          forma: "arte",
          texto:
            "Lucy escribió las últimas veinte páginas, y muchos lectores dicen que son lo mejor del conjunto. Cuenta cómo fueron sus últimas horas, la decisión de no entrar en cuidados intensivos, y cómo la familia le acompañó. No es un final consolador ni pretende serlo.",
          arte: "noche",
        },
        {
          forma: "clave",
          rotulo: "Lo que no hace",
          frase: "No dice que la enfermedad le enseñara nada. No busca un sentido a lo ocurrido. Solo lo cuenta bien.",
        },
        {
          forma: "texto",
          texto:
            "Hay un momento del libro que se cita mucho en las facultades de medicina. Kalanithi describe la tentación del médico de refugiarse en los datos —el porcentaje, el protocolo, la siguiente prueba— porque hablar de cifras es infinitamente más fácil que sentarse al lado de alguien y no tener nada que ofrecerle. Escribe que el trabajo del médico no es aplazar la muerte ni devolver la vida de antes, sino acompañar a una persona y a su familia mientras entienden lo que les está pasando. Y admite que él tardó años en aprenderlo, y que lo terminó de entender desde la cama.",
        },
        {
          forma: "texto",
          texto:
            "Hay que avisar de lo evidente: es un libro que hace llorar y no es lectura ligera. También se le puede reprochar cierto tono solemne en la primera parte, y que la mirada sea la de alguien con una posición privilegiada — un médico de Stanford tratado en su propio hospital no atraviesa lo que atraviesa la mayoría.",
        },
        {
          forma: "texto",
          texto:
            "Con eso dicho, es de los pocos libros que consiguen que un lector sano se plantee la pregunta que el título esquiva: qué es lo que no estarías dispuesto a perder, y si estás organizando tu vida en torno a eso o en torno a otra cosa.",
        },
      ],
    },
  ],
};

export const ZONAS_AZULES: Resumen = {
  id: "zonas-azules",
  titulo: "El secreto de las zonas azules",
  autor: "Dan Buettner",
  ano: 2008,
  gancho: "Cinco sitios del mundo donde la gente llega a los cien años. Y una pregunta incómoda que llegó quince años después: ¿y si muchos no los tuvieran?",
  porQue:
    "Es el libro que metió el ikigai y la dieta mediterránea en medio mundo, y también el mejor caso práctico de cómo se convierte una correlación en un negocio.",
  partes: [
    {
      titulo: "El círculo azul en el mapa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Año 2000, un despacho de la Universidad de Sassari, en Cerdeña. Dos investigadores están dibujando círculos con un rotulador azul sobre un mapa de la isla. Cada círculo marca un pueblo donde hay muchos más hombres centenarios de los que debería haber.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaban Gianni Pes, médico sardo, y Michel Poulain, demógrafo belga. Llevaban meses cruzando registros civiles y partidas de nacimiento de toda la isla, pueblo por pueblo. Los círculos se iban concentrando en una zona montañosa del interior: la provincia de Nuoro y Ogliastra.",
        },
        {
          forma: "texto",
          texto:
            "El dato que les llamó la atención no era la cantidad, era el sexo. En el mundo entero, por cada hombre que llega a los cien años hay cuatro o cinco mujeres. En aquellos pueblos la proporción era casi de uno a uno, y eso no pasa en ningún otro sitio conocido.",
        },
        {
          forma: "clave",
          rotulo: "De dónde sale el nombre",
          frase: "«Zona azul» no es un concepto científico ni una categoría médica. Es el color del rotulador con el que Pes y Poulain marcaron aquellos pueblos en un mapa de papel.",
        },
        {
          forma: "texto",
          texto:
            "Publicaron el hallazgo en 2004 en una revista de gerontología experimental. Habría sido un artículo técnico más de no ser porque lo leyó un americano que buscaba exactamente eso: un escritor y explorador de National Geographic llamado Dan Buettner.",
        },
        {
          forma: "texto",
          texto:
            "Buettner no era médico ni demógrafo. Era ciclista de fondo y periodista de aventuras: tenía récords Guinness por atravesar África y América en bicicleta y se había especializado en montar expediciones que además contaran una historia. Vio en aquellos círculos azules una expedición perfecta.",
        },
        {
          forma: "texto",
          texto:
            "Propuso a National Geographic una idea sencilla de vender: buscar en el planeta todos los sitios donde la gente vive más y mejor, ir a vivir con ellos, y averiguar qué tienen en común. La revista lo publicó en 2005 con el título «Los secretos de una vida larga».",
        },
        {
          forma: "arte",
          texto:
            "Aquel reportaje fue uno de los más leídos en la historia de la revista, y de ahí salió el libro de 2008. La palabra zona azul dejó de ser una anotación en un artículo técnico y se convirtió en una marca registrada, con documentales, dietas y ciudades enteras suscritas al programa.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "El método de Buettner fue el de un reportero, no el de un laboratorio. Fichó a demógrafos para validar los sitios, y luego se fue a vivir a cada uno con un traductor, comió lo que comían, siguió a los viejos a sus huertos y les hizo preguntas durante semanas.",
        },
        {
          forma: "texto",
          texto:
            "Al final se quedó con cinco lugares. Ogliastra, en Cerdeña. Okinawa, en el sur de Japón. La península de Nicoya, en Costa Rica. La isla de Icaria, en Grecia. Y, la más rara de todas, Loma Linda, una ciudad de California a una hora de Los Ángeles.",
        },
        {
          forma: "texto",
          texto:
            "Los cuatro primeros son sitios remotos, pobres hasta hace poco y con poca inmigración. El quinto está en el país con más obesidad del mundo, al lado de una autopista, y es una comunidad religiosa: los adventistas del séptimo día.",
        },
        {
          forma: "texto",
          texto:
            "Ese contraste es el mejor argumento del libro, y Buettner lo sabe. Si los adventistas de California viven diez años más que sus vecinos comiendo lo mismo que se puede comprar en cualquier supermercado americano, entonces no es cuestión de aire puro ni de genética mediterránea.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta del libro",
          frase: "No es «¿por qué unos genes duran más?». Es «¿qué hacen todos los días personas de cinco culturas que no se conocen entre sí y que llegan a los cien?».",
        },
        {
          forma: "texto",
          texto:
            "De ese cruce salió la lista que ha dado la vuelta al mundo, y que Buettner llamó los nueve factores. Conviene decir desde ya lo que son y lo que no son: son coincidencias observadas en cinco poblaciones, no un tratamiento probado en un ensayo clínico.",
        },
        {
          forma: "texto",
          texto:
            "Uno: moverse de forma natural. Ninguno de los centenarios que conoció iba al gimnasio ni corría maratones. Todos tenían vidas donde el movimiento estaba obligado: huertos, escaleras, cuestas, animales, cocinar sin máquinas y caminar porque no había otra manera de llegar.",
        },
        {
          forma: "texto",
          texto:
            "Dos: tener un motivo para levantarse. En Okinawa lo llaman ikigai y en Nicoya, plan de vida. Buettner señala que en ninguno de esos idiomas existe la palabra jubilación en el sentido de dejar de hacer cosas, y que ninguno de aquellos viejos se había retirado de nada.",
        },
        {
          forma: "arte",
          texto:
            "Tres: bajar revoluciones. Todos tenían un ritual diario contra el estrés: la siesta en Icaria, la oración de los adventistas, el rato de recuerdo de los okinawenses ante sus antepasados. No es relajarse por gusto: es un hueco fijo, a la misma hora, todos los días.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Cuatro: la regla del ochenta por ciento. En Okinawa hay una frase que se dice antes de comer, hara hachi bu, que significa comer hasta estar lleno al ochenta por ciento. Como la señal de saciedad tarda unos veinte minutos en llegar, parar antes cambia mucho la cuenta del día.",
        },
        {
          forma: "texto",
          texto:
            "Cinco: mayoría vegetal. Ninguna de las cinco zonas era vegetariana, pero en todas la carne era cosa de fiesta, unas cinco veces al mes. La base eran legumbres: habas y garbanzos en el Mediterráneo, soja en Japón, frijol negro y maíz en Costa Rica.",
        },
        {
          forma: "texto",
          texto:
            "Y los cuatro restantes son sociales, no dietéticos. Vino con moderación, pertenecer a una comunidad de fe, poner a la familia primero y —el que a Buettner le parece el más potente de todos— rodearse de la gente adecuada.",
        },
      ],
    },

    {
      titulo: "Los pastores de Cerdeña",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Villagrande Strisaili, Cerdeña, mil habitantes, colgado en una ladera. Buettner conoce allí a Tonino Tola, un pastor de setenta y cinco años que se levanta a las cinco, ordeña, sube y baja la montaña y a media mañana ya ha andado más que un oficinista en una semana.",
        },
        {
          forma: "texto",
          texto:
            "Los pastores sardos de aquella zona recorrían a pie entre seis y ocho kilómetros diarios, casi todos en pendiente. No era ejercicio: era el trabajo. Buettner insiste en ese matiz porque cambia el consejo entero. Nadie de aquellos pueblos decidía nunca hacer deporte.",
        },
        {
          forma: "texto",
          texto:
            "El paisaje ayuda a entenderlo. Son pueblos donde la calle principal tiene un desnivel que en cualquier ciudad justificaría un ascensor. Ir a por el pan, ir a misa o ir a ver a un primo implica subir. Se envejece con las piernas fuertes porque no hay alternativa.",
        },
        {
          forma: "clave",
          rotulo: "El detalle del vino",
          frase: "En Ogliastra beben cannonau, una uva con más antioxidantes que casi cualquier otra. Uno o dos vasos al día, siempre con comida y siempre con gente. Nunca solos y nunca de golpe.",
        },
        {
          forma: "texto",
          texto:
            "La comida sarda de aquellos pueblos es más sobria de lo que la palabra mediterránea sugiere: pan de cebada, habas, garbanzos, tomate, queso de oveja de animales que pastan hierba, y carne los domingos y las fiestas. La leche de oveja aparece en casi todas las comidas.",
        },
        {
          forma: "texto",
          texto:
            "Pero lo que a Buettner le impresiona no es la dieta, es la posición social del viejo. En Villagrande el abuelo de cien años no está en una residencia: está sentado en la puerta con un bastón, controlando la calle, y todos los que pasan le saludan por su nombre.",
        },
        {
          forma: "arte",
          texto:
            "Cuenta una escena que resume el capítulo: un centenario al que le preguntan cuál es su secreto y contesta que trabajar, y que la familia. Y añade que si dejara de servir para algo, se moriría. La utilidad, en aquellos pueblos, es un tratamiento médico.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Aporta un dato que sostiene esa idea desde fuera: en las culturas donde los mayores viven con sus hijos y cuidan de los nietos, los índices de mortalidad de los abuelos son menores, y también, curiosamente, los de mortalidad infantil de los nietos. Se cuidan en las dos direcciones.",
        },
        {
          forma: "texto",
          texto:
            "También está lo que casi nadie cuenta de Cerdeña: aquellos pueblos fueron muy pobres hasta hace cincuenta años y muy aislados. El aislamiento genético es real, y Pes y Poulain lo tuvieron siempre en cuenta como una de las explicaciones posibles.",
        },
        {
          forma: "texto",
          texto:
            "De hecho la anomalía sarda no es vivir mucho: es que vivan mucho los hombres. Y esa proporción de uno a uno es el punto donde los propios investigadores dijeron desde el principio que hacía falta buscar una causa que no fuera solo el estilo de vida.",
        },
        {
          forma: "texto",
          texto:
            "Buettner recoge esa cautela y luego, en la práctica del libro, la deja de lado. Es una de las cosas que se le reprochan: menciona la genética en un párrafo y dedica el resto a los hábitos, porque los hábitos son lo que un lector americano puede copiar.",
        },
        {
          forma: "texto",
          texto:
            "El siguiente destino es Icaria, una isla griega de ocho mil habitantes a doce horas de barco de Atenas. Buettner llega allí en 2009 y la incorpora al mapa después del libro original; en las ediciones posteriores ya es la quinta zona de pleno derecho.",
        },
        {
          forma: "texto",
          texto:
            "Icaria tiene una fama que ellos mismos cultivan: la isla donde se olvidan de morirse. Los datos que manejaba el equipo hablaban de una probabilidad de llegar a los noventa muy superior a la media europea, y de tasas muy bajas de demencia.",
        },
        {
          forma: "arte",
          texto:
            "Lo que más llama la atención de Icaria es la relación con el reloj. Nadie llega a la hora. Las cenas empiezan a las once y acaban de madrugada. La siesta es diaria y casi obligatoria. Buettner cuenta que le costó semanas conseguir que alguien apareciera cuando había quedado.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "La dieta icariota es la mediterránea de manual, pero con dos cosas propias: comen enormes cantidades de verdura silvestre recogida en el monte, con más antioxidantes que la de invernadero, y beben infusiones de hierbas locales que funcionan además como diuréticos suaves.",
        },
        {
          forma: "texto",
          texto:
            "También hay ayuno, aunque el libro no lo llame así. Los icariotas son cristianos ortodoxos practicantes, y el calendario ortodoxo tiene entre ciento cincuenta y doscientos días de ayuno al año. Comer menos, muchos días, sin llamarlo dieta y sin decidirlo cada mañana.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una historia que se ha contado mil veces: la de Stamatis Moraitis, un icariota emigrado a Estados Unidos al que en 1976 le diagnosticaron cáncer de pulmón terminal y le dieron nueve meses. Volvió a su isla a morir cerca de sus padres.",
        },
        {
          forma: "texto",
          texto:
            "Plantó viñas, empezó a beber vino con sus amigos, se pasaba las tardes en el jardín y no volvió a pisar un hospital. Vivió más de treinta años más. Cuando por fin volvió a Estados Unidos a preguntar qué había pasado, sus médicos ya habían muerto todos.",
        },
        {
          forma: "texto",
          texto:
            "La historia es cierta y también es exactamente el tipo de anécdota que un epidemiólogo señalaría con un círculo rojo: un caso único, sin historial verificado y con un diagnóstico de 1976 que hoy podría discutirse. Buettner la cuenta entera y no la matiza.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el vaivén constante del libro: observaciones sólidas mezcladas con historias irresistibles que no prueban nada. Y la siguiente parada, Okinawa, es donde esa mezcla se ve mejor, porque ahí hay tanto la idea más útil como el problema más gordo.",
        },
      ],
    },

    {
      titulo: "El moai de Okinawa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Okinawa es una isla subtropical al sur de Japón, a mil quinientos kilómetros de Tokio, con un pasado propio: fue un reino independiente hasta el siglo XIX. Durante décadas fue el sitio del planeta con más centenarios por habitante y con menos infartos, cáncer de mama y demencia.",
        },
        {
          forma: "texto",
          texto:
            "Buettner conoce allí a mujeres de más de cien años que siguen cultivando el huerto de casa, cocinando y recibiendo visitas. Una de ellas, Ushi Okushima, se hizo famosa por el reportaje: pasaba de los cien y seguía yendo a ver a sus amigas todos los días.",
        },
        {
          forma: "texto",
          texto:
            "Y de esas visitas sale la idea más valiosa del libro entero, que además es la más fácil de copiar en cualquier sitio: el moai. En Okinawa, a los niños se les mete de pequeños en un grupo de unos cinco amigos, y ese grupo se compromete de por vida.",
        },
        {
          forma: "clave",
          rotulo: "Moai",
          frase: "Cinco personas que se ven casi todas las semanas durante ochenta años. Se prestan dinero, se cuidan en la enfermedad y se acompañan en la vejez. No es una amistad: es una estructura.",
        },
        {
          forma: "texto",
          texto:
            "El moai empezó siendo una institución económica: los campesinos ponían dinero en común para financiar cosechas o emergencias. Con el tiempo se convirtió en lo que Buettner encuentra en 2005, que es una red de seguridad emocional con ochenta años de historia compartida.",
        },
        {
          forma: "texto",
          texto:
            "Ushi Okushima llevaba en el suyo desde los cinco años. Cuando Buettner lo conoció, se seguían reuniendo. Es el ejemplo perfecto del noveno factor de la lista: rodearse de la gente adecuada, porque los hábitos, buenos y malos, se contagian con una eficacia enorme.",
        },
        {
          forma: "arte",
          texto:
            "Ahí el libro se apoya en investigación sólida de verdad. El estudio de Framingham demostró que la obesidad, el tabaco y hasta la sensación de felicidad se propagan por las redes de amigos, y que la influencia de un amigo pesa más que la de un vecino o un familiar lejano.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La conclusión práctica de Buettner es más honesta que la mayoría de consejos de salud: es mucho más fácil cambiar de amigos que cambiar de fuerza de voluntad. Si los tres con los que más tiempo pasas fuman y cenan mal, tú vas a fumar y cenar mal.",
        },
        {
          forma: "texto",
          texto:
            "La dieta okinawense tradicional era casi vegetariana por pobreza: boniato morado como alimento principal —llegó a ser el sesenta por ciento de las calorías—, soja en forma de tofu y miso, verdura amarga local, algas, muy poco arroz y prácticamente nada de carne.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está el hara hachi bu, que Buettner considera la práctica dietética más potente que encontró. No es contar calorías. Es una frase que se dice antes de comer y que recuerda pararse antes de estar lleno. Un recordatorio cultural, gratis, repetido tres veces al día.",
        },
        {
          forma: "texto",
          texto:
            "Ahora bien, aquí hay que decir lo que el libro cuenta de pasada y merece un capítulo: esa Okinawa ya no existe. La dieta tradicional se hundió después de la guerra, cuando la isla quedó llena de bases militares americanas y de la comida que venía con ellas.",
        },
        {
          forma: "texto",
          texto:
            "Los datos son claros y son japoneses. Okinawa pasó de ser la prefectura más longeva del país a caer puestos década tras década. Hoy tiene de los peores índices de obesidad de Japón entre los menores de cincuenta años, y su esperanza de vida masculina ha bajado por debajo de la media nacional.",
        },
        {
          forma: "arte",
          texto:
            "Es decir: la zona azul de Okinawa es una foto de una generación concreta, la que se crió comiendo boniato en los años treinta y sobrevivió a una de las batallas más sangrientas de la Segunda Guerra Mundial. Sus nietos comen otra cosa y viven menos que ellos.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Eso obliga a leer el libro de otra manera. No describe un lugar mágico: describe unos hábitos que existieron en un lugar durante un tiempo y que se perdieron en dos generaciones en cuanto llegó otra forma de comer. Es una advertencia además de una receta.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta zona, Nicoya, en Costa Rica, aporta la pieza que faltaba. Es una península seca del Pacífico donde los peones ganaderos, gente pobre, tenían tasas de mortalidad en la mediana edad notablemente más bajas que las de los costarricenses de la capital.",
        },
        {
          forma: "texto",
          texto:
            "La dieta era maíz nixtamalizado, frijol negro y calabaza: las tres hermanas de la agricultura mesoamericana, que juntas dan una proteína completa. El maíz cocido con cal libera niacina y calcio, y su agua es muy dura, lo que se ha propuesto como factor añadido.",
        },
        {
          forma: "texto",
          texto:
            "Y está la expresión que Buettner se llevó de allí: plan de vida. Preguntaba a los viejos por su secreto y le contestaban con un motivo concreto, no con un consejo. Cuidar de un nieto, atender el ganado, mantener la casa. Un sitio donde hacer falta cada mañana.",
        },
        {
          forma: "texto",
          texto:
            "La quinta zona rompe el patrón y por eso es la más interesante: Loma Linda, California, veinticuatro mil habitantes, la mayor concentración de adventistas del séptimo día del mundo. Nada de aislamiento, nada de montaña, nada de pobreza ancestral.",
        },
        {
          forma: "texto",
          texto:
            "Los adventistas no fuman, no beben, guardan el sábado entero sin trabajar, muchos son vegetarianos y comen frutos secos varias veces por semana. El Adventist Health Study, con decenas de miles de participantes, es de los estudios de cohorte más serios que existen sobre dieta.",
        },
        {
          forma: "texto",
          texto:
            "Sus resultados son los más sólidos del libro precisamente porque no dependen de partidas de nacimiento antiguas: los adventistas viven entre siete y diez años más que la media estadounidense, con datos modernos y verificables. Es la zona azul menos exótica y la mejor documentada.",
        },
      ],
    },

    {
      titulo: "El plan de vida",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La segunda mitad del libro cambia de género. Deja de ser un reportaje de viajes y se convierte en un manual: qué hacer con todo esto en una casa de Badajoz, de Bogotá o de Ohio, donde no hay pastores ni moais ni templos adventistas.",
        },
        {
          forma: "texto",
          texto:
            "Y la primera propuesta es la más contraintuitiva de todas: no intentes cambiar tu fuerza de voluntad, cambia tu entorno. Buettner sostiene que los centenarios que conoció no tenían más disciplina que nadie; tenían sitios donde lo sano era el camino de menor resistencia.",
        },
        {
          forma: "clave",
          rotulo: "La tesis práctica",
          frase: "Ninguna de las cinco zonas hacía nada a propósito. No había dietas, ni gimnasios, ni propósitos de año nuevo. El entorno decidía por ellos, y por eso funcionaba durante ochenta años seguidos.",
        },
        {
          forma: "texto",
          texto:
            "De ahí salen recomendaciones muy físicas y muy poco espirituales. Quitar la tele del salón principal. Tener un huerto o al menos plantas que obliguen a agacharse. Poner los dulces en un armario alto y la fruta en la mesa. Usar platos más pequeños, que reducen la ración sin esfuerzo.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el movimiento, su consejo es el que más choca con la industria del fitness: no hace falta ir al gimnasio. Hace falta que la vida diaria tenga fricción. Aparcar lejos, subir escaleras, cocinar de verdad, ir andando a los recados, tener algo vivo que cuidar.",
        },
        {
          forma: "texto",
          texto:
            "Buettner cita un dato que ilustra bien la diferencia: un okinawense mayor se levanta y se sienta del suelo decenas de veces al día porque come y descansa en el tatami. Eso es una sentadilla con peso corporal repetida sin que nadie la llame ejercicio.",
        },
        {
          forma: "arte",
          texto:
            "Y hay una idea que aparece de fondo y que es la más útil del libro: la longevidad de aquellas comunidades no era el resultado de un esfuerzo, sino de una acumulación de decisiones que ya venían tomadas. La disciplina se agota; la arquitectura de una vida, no.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Sobre la comida, sus reglas son sencillas hasta el aburrimiento y coinciden con casi todo lo que sabe la nutrición seria. Legumbres todos los días. Frutos secos un puñado. Carne pocas veces al mes. Nada de refrescos azucarados. Y la mayor parte de las calorías, de plantas.",
        },
        {
          forma: "texto",
          texto:
            "Añade dos hábitos de horario: hacer la comida más fuerte al principio del día y la más ligera al final, y no comer después de cenar. En todas las zonas azules la última comida era temprana, pequeña y con gente, nunca solo y nunca delante de una pantalla.",
        },
        {
          forma: "texto",
          texto:
            "La parte social ocupa más páginas que la dietética y es donde el libro se juega su valor. Buettner insiste en que si tuviera que elegir un solo factor, elegiría la comunidad, y que las tasas de soledad de los países ricos son un problema de salud pública comparable al tabaco.",
        },
        {
          forma: "texto",
          texto:
            "Sobre la fe, es cuidadoso y honesto. Dice que no importa la religión: los adventistas son protestantes, los icariotas ortodoxos, los okinawenses animistas, los sardos católicos. Lo que comparten es asistir a algo con otras personas varias veces al mes, durante toda la vida.",
        },
        {
          forma: "texto",
          texto:
            "Y desmonta un tópico con datos propios: en ninguna de las zonas la gente vivía sola. Los mayores estaban con la familia o muy cerca, y eso tenía un efecto medible en los dos sentidos, porque el que cuida también recibe una razón diaria para levantarse.",
        },
        {
          forma: "clave",
          rotulo: "Ikigai, sin mística",
          frase: "En Okinawa y en Nicoya, cuando preguntaba por el sentido de la vida, la gente no filosofaba: nombraba una tarea concreta de esa misma mañana. Un nieto, unas vacas, un huerto.",
        },
        {
          forma: "texto",
          texto:
            "Buettner señala que en las lenguas de aquellos sitios no existe una palabra para jubilarse en el sentido occidental, y aporta un dato que ha circulado mucho: en los estudios que manejaba, dejar de tener un propósito claro se asociaba a un aumento notable del riesgo de mortalidad.",
        },
        {
          forma: "texto",
          texto:
            "Después del libro montó un programa llamado Blue Zones Project que aplica todo esto a ciudades enteras de Estados Unidos: rediseñar aceras, cambiar los menús escolares, poner huertos, negociar con supermercados. Ha trabajado con decenas de municipios.",
        },
        {
          forma: "texto",
          texto:
            "Los resultados publicados por el propio proyecto hablan de bajadas en tasas de tabaquismo y obesidad en ciudades como Albert Lea, en Minnesota, o Beach Cities, en California. Son datos de la propia empresa, y esa es exactamente la primera cautela que hay que tener con ellos.",
        },
        {
          forma: "arte",
          texto:
            "Porque a estas alturas conviene decirlo claro: zonas azules dejó de ser una investigación y pasó a ser una marca. Hay libros de cocina, una serie de Netflix de 2023, certificaciones para restaurantes, para empresas y para barrios enteros, y una compañía detrás que factura por ello.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Eso no invalida nada por sí solo. Pero cambia el nivel de escrutinio que merece, porque a partir de cierto punto ya no hay solo una hipótesis que defender: hay un negocio que depende de que la hipótesis siga siendo cierta.",
        },
        {
          forma: "texto",
          texto:
            "Y en 2024 llegó la objeción que puso todo el edificio en cuestión. No venía de un nutricionista ni de un rival comercial, sino de un demógrafo que se dedica a algo muy poco glamuroso: comprobar si la gente que dice tener cien años los tiene de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Se llama Saul Newman y llevaba años estudiando una anomalía estadística curiosísima. Su conclusión, publicada y premiada, es lo bastante grave como para merecer el último capítulo entero de cualquier resumen honesto de este libro.",
        },
      ],
    },

    {
      titulo: "Los papeles",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Saul Newman, demógrafo del University College de Londres, se hizo una pregunta simple: si vivir mucho depende de dieta, ejercicio y comunidad, las regiones con más centenarios deberían tener también buena salud general. Fue a mirar si era así.",
        },
        {
          forma: "texto",
          texto:
            "Encontró lo contrario. En Estados Unidos, los condados con más centenarios registrados tendían a ser los más pobres, con peor esperanza de vida media, más criminalidad y menos acceso a sanidad. Justo al revés de lo que la teoría predice.",
        },
        {
          forma: "clave",
          rotulo: "La correlación incómoda",
          frase: "El mejor predictor de que una zona tenga muchos centenarios no era la dieta ni el ejercicio: era que los registros de nacimiento fueran malos o inexistentes.",
        },
        {
          forma: "texto",
          texto:
            "El dato que lo hizo célebre: en Estados Unidos, cuando un estado empezaba a expedir partidas de nacimiento fiables, el número de supercentenarios registrados en él caía de golpe entre un ochenta y un cien por cien. No se morían antes: dejaban de aparecer.",
        },
        {
          forma: "texto",
          texto:
            "Aplicó el mismo análisis a las zonas azules y los resultados fueron duros. Okinawa perdió sus registros civiles en la batalla de 1945, cuando los bombardeos destruyeron los archivos de la isla. Muchas edades se reconstruyeron después de memoria y por declaración de los propios interesados.",
        },
        {
          forma: "texto",
          texto:
            "En Grecia el problema era otro y estaba documentado por el propio Estado. Una auditoría del sistema de pensiones encontró que un porcentaje altísimo de los centenarios que cobraban pensión llevaban años muertos, y que alguien seguía cobrando por ellos.",
        },
        {
          forma: "texto",
          texto:
            "El mecanismo es de una banalidad deprimente: en zonas pobres, con burocracia débil y pensiones que sostienen a una familia entera, no declarar una muerte es dinero. Y donde el registro es malo, exagerar la edad hacia arriba no cuesta nada y a veces da acceso a una ayuda.",
        },
        {
          forma: "arte",
          texto:
            "Newman recibió por este trabajo el Ig Nobel de demografía de 2024, un premio que se da a investigaciones que primero hacen reír y luego hacen pensar. Es una broma con un fondo serio: su hallazgo no es gracioso, y de momento nadie lo ha refutado bien.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Conviene ser justo con lo que dice y con lo que no dice. Newman no afirma que la dieta mediterránea sea mala, ni que el ejercicio no sirva, ni que la comunidad no importe. Afirma que los recuentos de centenarios en los que se apoya la teoría no son fiables.",
        },
        {
          forma: "texto",
          texto:
            "Buettner ha respondido públicamente. Sostiene que sus zonas fueron validadas por demógrafos, que en Cerdeña Pes y Poulain verificaron partidas parroquiales una por una, y que los datos de Loma Linda proceden de un estudio de cohorte moderno y no dependen de archivos antiguos.",
        },
        {
          forma: "texto",
          texto:
            "Esa última defensa es la buena, y merece subrayarse: la zona azul más sólida es la que menos se parece a una zona azul. Los adventistas de California están documentados con historiales médicos actuales, y su ventaja de siete a diez años nadie la ha discutido en serio.",
        },
        {
          forma: "texto",
          texto:
            "Así que la conclusión razonable no es tirar el libro. Es separar dos cosas que venían pegadas. Por un lado, el recuento de centenarios, que está en cuestión. Por otro, los hábitos, que coinciden con lo que dicen los grandes estudios de cohorte desde hace treinta años.",
        },
        {
          forma: "texto",
          texto:
            "Y ahora, dónde falla el libro más allá de esa polémica, que falla en varias cosas. La primera es de método: es un reportaje, no un estudio. Buettner elige los sitios, va, observa y saca patrones. Eso genera hipótesis buenísimas y no prueba ninguna.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es que ignora casi por completo la variable más aburrida y probablemente más importante: no fumar, no beber en exceso, no tener accidentes y tener agua limpia. En todas las zonas azules esas cuatro cosas se cumplían, y explican una parte enorme del resultado.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es el vino de las cinco, que es el consejo peor sostenido de la lista. La evidencia reciente sobre alcohol ha ido en la dirección contraria, y hoy la mayoría de organismos de salud pública no defienden ninguna cantidad como beneficiosa.",
        },
        {
          forma: "arte",
          texto:
            "Y la cuarta es de fondo: el libro vende como elección personal lo que en aquellos sitios era una condición impuesta. Aquella gente andaba porque no había coche y comía legumbres porque no había carne. Convertir la pobreza rural en un estilo de vida premium tiene algo de trampa.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad: que zona azul sea un término científico. No lo es. Es una marca registrada nacida de un rotulador, y hoy es propiedad de una empresa que licencia certificaciones a restaurantes y ayuntamientos.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: mucha gente cree que la clave es la dieta. El propio Buettner dice lo contrario en el libro: si tuviera que quedarse con un factor, se quedaría con la gente. Y esa parte es la que casi nunca sale en los resúmenes ni en las portadas.",
        },
        {
          forma: "texto",
          texto:
            "Y el tercero: se lee como si aquellos sitios siguieran igual. No siguen. Okinawa ha perdido su ventaja, Cerdeña se ha despoblado, Icaria vive del turismo y Nicoya ha cambiado de dieta. Las cinco zonas azules están desapareciendo mientras se venden libros sobre ellas.",
        },
        {
          forma: "texto",
          texto:
            "Con todo eso descontado, queda algo que sigue siendo útil y que no depende de ninguna partida de nacimiento: come plantas, muévete sin llamarlo ejercicio, duerme, ten a alguien a quien le importe si no apareces, y ten un motivo concreto para levantarte mañana.",
        },
      ],
    },
  ],
};

export const OUTLIVE: Resumen = {
  id: "outlive",
  titulo: "Outlive: el arte de vivir más y mejor",
  autor: "Peter Attia",
  ano: 2023,
  gancho: "Un cirujano que odiaba la medicina preventiva calcula cuántos años de vida sana pierde el que espera a tener síntomas. Le salen veinte.",
  porQue:
    "Es el libro de longevidad con la mejor argumentación y también el que más honradamente admite dónde no hay pruebas. Y el consejo principal no es la dieta.",
  partes: [
    {
      titulo: "El paciente que llega tarde",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un hospital universitario, guardia de noche. Entra un hombre de sesenta y dos años con un infarto. Le abren la arteria, le ponen un stent y a los tres días se va a casa con cinco medicamentos. El equipo lo considera un éxito. Y lo es, según el manual con el que trabajan.",
        },
        {
          forma: "texto",
          texto:
            "Peter Attia se pasó años haciendo eso. Se formó como cirujano en Johns Hopkins, operó cáncer en el Instituto Nacional del Cáncer y después trabajó en McKinsey analizando riesgo. Y en algún momento se hizo la pregunta que le cambió el oficio.",
        },
        {
          forma: "texto",
          texto:
            "La pregunta es: ¿cuándo empezó de verdad ese infarto? No esa noche. La placa que reventó llevaba veinte o treinta años formándose, en silencio, mientras aquel hombre pasaba revisiones anuales que salían normales. Todo el sistema estaba diseñado para esperar al episodio.",
        },
        {
          forma: "clave",
          rotulo: "Medicina 2.0 y Medicina 3.0",
          frase: "La 2.0 espera a que aparezca la enfermedad y entonces actúa, muy bien. La 3.0 asume que el proceso lleva décadas en marcha y actúa antes de que exista un diagnóstico.",
        },
        {
          forma: "texto",
          texto:
            "Attia no desprecia la medicina moderna: la separa en dos fases. La 1.0 era Hipócrates y dos mil años sin resultados. La 2.0 llega con el método científico, los antibióticos y la cirugía, y es un triunfo: en un siglo la esperanza de vida pasa de cuarenta y pico años a casi ochenta.",
        },
        {
          forma: "texto",
          texto:
            "El problema es que ese triunfo fue contra las enfermedades rápidas. Una infección mata en días y un antibiótico la cura en días. Las que matan hoy son lentas: tardan décadas en instalarse, no dan síntomas hasta el final y para entonces el daño ya no se deshace.",
        },
        {
          forma: "arte",
          texto:
            "La imagen que usa es de aviación, que es un tema que le obsesiona: en aviación se investiga cada incidente menor para evitar el accidente. En medicina se espera al accidente y entonces se despliegan los mejores medios del mundo. La diferencia no es de calidad, es de momento.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la distinción que ordena el libro entero: años de vida y años de vida sana. La medicina ha alargado mucho lo primero y bastante menos lo segundo, así que hemos ganado sobre todo décadas finales de dependencia, medicación y hospital.",
        },
        {
          forma: "texto",
          texto:
            "Attia pone cifras a esa brecha. En los países ricos la diferencia entre lo que se vive y lo que se vive con salud ronda la década. Diez años de media en los que una persona sigue viva y ya no puede hacer lo que quiere hacer.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí introduce el concepto que más se ha citado del libro: la década marginal. Los últimos diez años de vida. La pregunta no es cuántos años vas a vivir, sino cómo van a ser esos diez, y esa es una pregunta que se responde treinta años antes.",
        },
        {
          forma: "texto",
          texto:
            "Porque la capacidad física funciona como una cuenta que solo baja. A partir de los treinta y tantos se pierde masa muscular y capacidad aeróbica cada década, y ese descenso es más o menos inevitable. Lo que sí se elige es desde qué altura se empieza a bajar.",
        },
        {
          forma: "clave",
          rotulo: "La cuenta que solo baja",
          frase: "Si a los cuarenta estás en la media, a los ochenta estarás por debajo del umbral de autonomía. No porque envejezcas peor, sino porque partías de demasiado abajo.",
        },
        {
          forma: "texto",
          texto:
            "Esa idea cambia el objetivo del entrenamiento. No se entrena para estar bien ahora: se entrena para tener margen dentro de cuarenta años. Attia lo llama entrenar para la década marginal, y es lo que le lleva a proponer el ejercicio que estructura la segunda mitad del libro.",
        },
        {
          forma: "texto",
          texto:
            "Antes de eso deja claro con qué está peleando. Sostiene que casi todo lo que hoy nos mata cabe en cuatro grupos de enfermedades, que comparten factores de riesgo y que llevan décadas gestándose antes del diagnóstico. Los llama los cuatro jinetes.",
        },
        {
          forma: "texto",
          texto:
            "Y avisa desde el principio de una cosa que conviene tener presente todo el libro: gran parte de lo que propone no procede de ensayos clínicos con asignación aleatoria, porque hacer un ensayo de cuarenta años sobre longevidad es prácticamente imposible.",
        },
        {
          forma: "arte",
          texto:
            "Su honestidad en ese punto es de las mejores cosas del libro. Dedica un capítulo entero a explicar por qué los estudios de nutrición son tan malos, por qué la epidemiología confunde correlación con causa y por qué él tiene que razonar con probabilidades y no con certezas.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Pone un ejemplo demoledor: durante años la terapia hormonal sustitutiva se retiró masivamente por un estudio de 2002 cuyos resultados, releídos por edades, decían algo mucho más matizado. Millones de mujeres cambiaron de tratamiento por una lectura apresurada de un titular.",
        },
        {
          forma: "texto",
          texto:
            "Y añade el problema de fondo de todo el campo: casi ningún estudio observacional puede separar el efecto de un alimento del efecto de ser la clase de persona que come ese alimento. Quien desayuna avena también suele fumar menos, dormir más y tener seguro médico.",
        },
        {
          forma: "texto",
          texto:
            "Con ese aviso puesto, el libro se convierte en una toma de decisiones bajo incertidumbre: qué palancas tienen la mejor relación entre evidencia y beneficio esperado, y en qué orden merece la pena tocarlas. La respuesta a esa pregunta es lo que hace útil el libro.",
        },
        {
          forma: "texto",
          texto:
            "Y la respuesta corta, que él adelanta y que casi nadie espera de un médico de longevidad, es que la palanca más potente que existe no es un suplemento, ni un ayuno, ni un fármaco. Es la capacidad aeróbica y la fuerza. Todo lo demás va detrás.",
        },
      ],
    },

    {
      titulo: "Los cuatro jinetes",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Attia sostiene que si se descuenta la muerte accidental, casi todo lo que nos mata en el mundo rico entra en cuatro categorías: enfermedad cardiovascular, cáncer, enfermedad neurodegenerativa y disfunción metabólica. Las llama los cuatro jinetes y las trata una por una.",
        },
        {
          forma: "texto",
          texto:
            "El primero es el más previsible y el peor tratado. La enfermedad cardiovascular mata más que ninguna otra cosa, se sabe cómo empieza, se puede medir con décadas de antelación y aun así se sigue diagnosticando en urgencias.",
        },
        {
          forma: "texto",
          texto:
            "Su crítica técnica es concreta: el análisis estándar mide el colesterol LDL en miligramos, es decir, cuánto colesterol transportan las partículas. Y lo que daña la arteria no es la carga, es el número de partículas que chocan contra la pared y se cuelan.",
        },
        {
          forma: "clave",
          rotulo: "ApoB",
          frase: "Cada partícula aterogénica lleva exactamente una molécula de apolipoproteína B. Medir la ApoB es contar partículas. Cuesta unos pocos euros y casi ningún análisis rutinario la incluye.",
        },
        {
          forma: "texto",
          texto:
            "Y añade un segundo marcador que casi nadie mide: la lipoproteína (a). Es de origen genético, la tiene elevada aproximadamente una de cada cinco personas, multiplica el riesgo cardiovascular y no responde a la dieta. Se mide una sola vez en la vida y ya se sabe.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento es difícil de rebatir: hay un factor de riesgo importante, hereditario, que afecta a un veinte por ciento de la población, que se detecta con un análisis barato y que la mayoría de la gente nunca se ha hecho porque no está en el protocolo estándar.",
        },
        {
          forma: "arte",
          texto:
            "El segundo jinete es el cáncer, y aquí Attia es más humilde. Reconoce que la biología del cáncer sigue siendo mala noticia: los tratamientos han mejorado poco en tumores sólidos avanzados y la mayor parte de la ganancia de supervivencia viene de detectarlo antes.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Por eso su apuesta es el cribado agresivo, y aquí es donde se separa de la medicina convencional y donde más se le discute. Defiende colonoscopias antes de la edad recomendada y pruebas de imagen que el sistema no cubre porque generan falsos positivos y sobrediagnóstico.",
        },
        {
          forma: "texto",
          texto:
            "Él contesta que el sobrediagnóstico es un problema poblacional y que a un individuo concreto le compensa asumir algún susto a cambio de encontrar un tumor operable. Es un argumento legítimo y también es un argumento que solo funciona si puedes pagar las pruebas.",
        },
        {
          forma: "texto",
          texto:
            "El tercer jinete es la neurodegeneración: alzhéimer, párkinson, demencia vascular. Aquí aporta un dato que sorprende a todo el mundo: los cambios cerebrales del alzhéimer empiezan quince o veinte años antes de que aparezca el primer olvido significativo.",
        },
        {
          forma: "texto",
          texto:
            "Y menciona el factor genético con nombre y apellidos: el gen APOE tiene una variante, la e4, que aumenta bastante el riesgo. Attia la lleva. Ese detalle personal, que cuenta sin dramatismo, explica por qué el libro insiste tanto en el sueño y en el ejercicio.",
        },
        {
          forma: "texto",
          texto:
            "Porque lo que se sabe de prevención cognitiva no es un fármaco: es ejercicio, sueño, control de la tensión y de la glucosa, audición corregida y actividad social. Nada de eso es un descubrimiento; lo llamativo es cuánta gente lo sabe y cuánta poca lo aplica a los cuarenta.",
        },
        {
          forma: "clave",
          rotulo: "El cuarto jinete",
          frase: "La disfunción metabólica no mata directamente: multiplica a los otros tres. Resistencia a la insulina, hígado graso y síndrome metabólico son el suelo sobre el que crecen los demás.",
        },
        {
          forma: "texto",
          texto:
            "Attia insiste en que el problema no empieza cuando el médico dice diabetes tipo 2. Empieza mucho antes, con la insulina en ayunas subiendo durante años mientras la glucosa se mantiene normal porque el páncreas compensa. Cuando la glucosa sube, la avería lleva una década.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí propone medir insulina en ayunas y no solo glucosa, hacerse una curva con insulina y no solo con azúcar, y vigilar el perímetro de cintura por encima del peso, porque la grasa visceral —la que envuelve los órganos— es la que se asocia al daño metabólico.",
        },
        {
          forma: "texto",
          texto:
            "El hígado graso no alcohólico es el ejemplo que más le preocupa: afecta a una parte enorme de la población adulta, es reversible en fases tempranas, no da síntomas y casi nadie se entera hasta que aparece por casualidad en una ecografía por otro motivo.",
        },
        {
          forma: "arte",
          texto:
            "La conclusión de los cuatro capítulos es la misma cuatro veces: los procesos empiezan décadas antes del diagnóstico, se pueden medir antes con pruebas que ya existen, y el sistema no las hace de rutina porque está diseñado para tratar enfermos, no para vigilar sanos.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir la objeción de frente, porque es seria: vigilar sanos también tiene costes. Genera ansiedad, cascadas de pruebas y tratamientos innecesarios. El equilibrio entre prevenir e intervenir de más es un debate real y Attia lo despacha más rápido de lo que merece.",
        },
        {
          forma: "texto",
          texto:
            "Con el mapa de amenazas trazado, la pregunta pasa a ser qué hacer. Y Attia estructura las herramientas en cinco: ejercicio, nutrición, sueño, salud emocional y fármacos. Dedica al ejercicio más páginas que a las otras cuatro juntas, y no es un descuido de reparto.",
        },
        {
          forma: "texto",
          texto:
            "Es su tesis. Sostiene que si solo pudiera darle una recomendación a un paciente, y tuviera que elegir entre cambiarle la dieta, darle un fármaco o ponerlo a entrenar, elegiría lo tercero sin dudar, porque no hay ninguna intervención con un efecto comparable.",
        },
      ],
    },

    {
      titulo: "VO2 máx",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El dato que sostiene medio libro procede de un estudio de 2018 con más de ciento veinte mil personas seguidas durante años, en el que se midió la capacidad cardiorrespiratoria en cinta y se cruzó con la mortalidad posterior por cualquier causa.",
        },
        {
          forma: "texto",
          texto:
            "El resultado es de los más contundentes que existen en medicina preventiva. Pasar del cuartil más bajo de forma física al siguiente se asocia a una reducción del riesgo de morir de en torno a la mitad. No de morir de corazón: de morir de cualquier cosa.",
        },
        {
          forma: "clave",
          rotulo: "La comparación que hace",
          frase: "Attia calcula que estar en el cuartil bajo de capacidad aeróbica supone un riesgo comparable al de fumar. Y estar en el diez por ciento superior se asocia a reducciones que ningún fármaco alcanza.",
        },
        {
          forma: "texto",
          texto:
            "El VO2 máximo mide cuánto oxígeno puede usar el cuerpo por minuto en el esfuerzo máximo. Es, en la práctica, el techo de todo lo que se puede hacer: cuanto más alto, más lejos queda el punto en que subir unas escaleras deja de ser posible.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está la conexión con la década marginal. Un VO2 máximo alto a los cincuenta significa que el descenso natural de las décadas siguientes tarda mucho más en cruzar el umbral por debajo del cual una persona ya no puede vivir sola.",
        },
        {
          forma: "texto",
          texto:
            "Su plan de entrenamiento tiene dos piezas y una proporción. La mayor parte del trabajo aeróbico, alrededor del ochenta por ciento, se hace en lo que se llama zona 2: intensidad baja, sostenida, en la que se puede hablar aunque cueste, entre tres y cuatro horas a la semana.",
        },
        {
          forma: "arte",
          texto:
            "La zona 2 no es un invento suyo: es como entrenan los ciclistas profesionales la mayor parte del tiempo. Lo que hace es mejorar la capacidad de la mitocondria para usar grasa como combustible, y esa eficiencia metabólica se relaciona directamente con el cuarto jinete.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "La otra pieza es el veinte por ciento restante: series duras, cerca del máximo, de tres a cuatro minutos, repetidas con descansos. Eso es lo que sube el techo. Attia recomienda una sesión semanal, y avisa de que es la parte que casi todo el mundo se salta.",
        },
        {
          forma: "texto",
          texto:
            "La tercera pata es la fuerza, y aquí el argumento cambia de terreno. La masa muscular y la fuerza de agarre están entre los mejores predictores de mortalidad y de independencia en la vejez, y la pérdida de músculo con la edad tiene nombre propio: sarcopenia.",
        },
        {
          forma: "texto",
          texto:
            "El dato que usa para convencer es de traumatología, no de gimnasio: una fractura de cadera en una persona mayor se asocia a una mortalidad muy alta en el año siguiente. Y las caídas dependen de fuerza, equilibrio y masa muscular, las tres entrenables a cualquier edad.",
        },
        {
          forma: "texto",
          texto:
            "Prioriza dos capacidades por encima de las demás. La fuerza de agarre, porque correlaciona con la fuerza global y es fácil de medir. Y la capacidad de tirar y de cargar peso, que es lo que se usa para levantarse, subir escaleras y no caerse.",
        },
        {
          forma: "clave",
          rotulo: "La cuarta pata",
          frase: "Estabilidad. Attia le dedica un capítulo entero porque él mismo se destrozó la espalda entrenando mal, y sostiene que no sirve de nada un motor potente si el chasis se rompe a los sesenta.",
        },
        {
          forma: "texto",
          texto:
            "Esa parte es la menos glamurosa y la que más se salta el lector. Va de respiración, de posición de la caja torácica, de pie y de cadera, y de ejercicios lentos que no dan ninguna satisfacción inmediata. Es también donde él admite haber cometido sus peores errores.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo de nutrición es, por decisión suya, el más corto y el más prudente. Empieza diciendo que la nutrición está tan mal estudiada que casi todo lo que se afirma con seguridad debería decirse con dudas, y que él ha cambiado de opinión varias veces en diez años.",
        },
        {
          forma: "texto",
          texto:
            "Su marco es minimalista: solo hay tres formas de intervenir. Restringir calorías, restringir tipos de alimento o restringir el tiempo en que se come. Todas las dietas del mundo son combinaciones de esas tres, y la mejor es la que cada persona pueda sostener años.",
        },
        {
          forma: "texto",
          texto:
            "Da dos recomendaciones firmes y poco discutidas. Proteína suficiente, bastante más de lo que marcan las recomendaciones oficiales, sobre todo a partir de los cincuenta. Y suficiente comida de verdad: la mayoría de la gente no come demasiado, come demasiado poco de lo que sacia.",
        },
        {
          forma: "arte",
          texto:
            "Y matiza el ayuno intermitente, que él mismo practicó durante años y del que se ha desdicho en parte. Su objeción es concreta: comer en ventanas muy estrechas suele hacer que se pierda músculo junto con la grasa, y para alguien mayor esa pérdida es exactamente lo que no interesa.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Sobre sueño es tajante y no aporta nada original: siete horas y media u ocho, con horarios estables, sin alcohol cerca de la cama y con oscuridad y temperatura bajas. Menciona que dormir mal deteriora la tolerancia a la glucosa en pocos días y en gente sana.",
        },
        {
          forma: "texto",
          texto:
            "Sobre fármacos es donde más se le puede discutir. Habla de rapamicina, un inmunosupresor que alarga la vida en ratones y que él toma él mismo fuera de indicación, y reconoce que no hay ningún ensayo de longevidad en humanos y que puede estar equivocándose.",
        },
        {
          forma: "texto",
          texto:
            "Con todo el arsenal en la mesa, queda la pregunta de para qué. Y ahí Attia propone el ejercicio mental que más ha calado del libro, que consiste en escribir una lista de diez cosas concretas que uno quiere seguir pudiendo hacer con ochenta años.",
        },
      ],
    },
    {
      titulo: "El decatlón del centenario",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El ejercicio es este: coger un papel y escribir diez tareas físicas concretas que quieras poder hacer en tu última década. No metas objetivos: mete acciones. Levantarte del suelo sin manos. Subir tres pisos con la compra. Coger a un nieto de veinte kilos del suelo.",
        },
        {
          forma: "texto",
          texto:
            "Attia lo llama el decatlón del centenario y lo usa con sus pacientes como punto de partida. La gracia es que convierte una aspiración vaga —envejecer bien— en una lista de requisitos medibles, y a partir de ahí el entrenamiento se diseña hacia atrás.",
        },
        {
          forma: "clave",
          rotulo: "Entrenar hacia atrás",
          frase: "Si a los ochenta quieres levantar a un nieto de veinte kilos, y a esa edad tendrás bastante menos fuerza que hoy, la cuenta te dice qué tienes que poder levantar ahora. Y suele ser mucho más de lo que la gente imagina.",
        },
        {
          forma: "texto",
          texto:
            "Los ejemplos que pone son deliberadamente domésticos. Levantarse del suelo apoyando una sola mano. Subir cuatro pisos en menos de un minuto sin agarrarse. Cargar diez kilos en cada mano durante un minuto. Abrir un bote. Bajar de un coche sin ayuda.",
        },
        {
          forma: "texto",
          texto:
            "Ninguna de esas cosas parece un objetivo deportivo, y esa es la idea. Son exactamente las tareas cuyo fallo marca el paso de vivir solo a no poder. La autonomía no se pierde de golpe: se pierde tarea a tarea, y cada una tiene un umbral de fuerza detrás.",
        },
        {
          forma: "arte",
          texto:
            "El test más simple que menciona es el de levantarse del suelo sentado y volver a sentarse usando el menor número de apoyos posible. Se ha estudiado en adultos mayores y la puntuación se asocia de forma clara con la mortalidad en los años siguientes.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "A partir de esa lista, el programa se ordena solo. Si hay que subir escaleras deprisa, hace falta capacidad aeróbica. Si hay que cargar peso, hace falta fuerza de agarre y de tirón. Si hay que levantarse del suelo, hace falta movilidad de cadera y de tobillo.",
        },
        {
          forma: "texto",
          texto:
            "Y aparece el argumento que hace que este marco funcione mejor que cualquier plan genérico: el entrenamiento deja de ser una obligación abstracta y pasa a ser el mantenimiento de una lista de cosas que uno ya ha decidido que quiere conservar.",
        },
        {
          forma: "texto",
          texto:
            "Attia insiste en que el margen hay que construirlo pronto, porque la pendiente es implacable. Se pierde entre un tres y un ocho por ciento de masa muscular por década a partir de los treinta, y ese porcentaje se acelera después de los sesenta si no se hace nada.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un dato que usa mucho y que asusta: tras diez días de reposo en cama, un adulto mayor puede perder una cantidad enorme de masa muscular de las piernas. Una hospitalización de dos semanas a los setenta y cinco puede costar años de autonomía.",
        },
        {
          forma: "texto",
          texto:
            "De ahí su insistencia en la reserva. No se entrena para lo que hace falta hoy: se entrena para tener de sobra cuando llegue el ingreso, la caída o la operación. El margen es lo único que separa una convalecencia de una pérdida definitiva de independencia.",
        },
        {
          forma: "clave",
          rotulo: "La estabilidad, otra vez",
          frase: "El decatlón no se cumple si uno se lesiona a los cincuenta y cinco. Por eso Attia pone la estabilidad por delante de la fuerza: sin chasis no hay motor que valga.",
        },
        {
          forma: "texto",
          texto:
            "Y añade el elemento que casi nadie asocia con la longevidad: la caída. Es la causa principal de pérdida de independencia en mayores, y depende de tres cosas entrenables —fuerza en las piernas, equilibrio y capacidad de reacción— más una no entrenable, que es la vista.",
        },
        {
          forma: "texto",
          texto:
            "Attia dedica también páginas al entrenamiento del pie y del tobillo, que es lo más aburrido del libro y probablemente de lo más útil. La mayoría de la gente lleva cincuenta años con los pies dentro de zapatos rígidos y ha perdido movilidad que no sabe que ha perdido.",
        },
        {
          forma: "texto",
          texto:
            "El programa completo que propone son entre cinco y siete horas semanales entre todo: zona 2, series duras, fuerza y estabilidad. Es mucho, y él lo reconoce. Y sostiene que es la mejor inversión de tiempo disponible, porque no hay ningún fármaco con ese efecto.",
        },
        {
          forma: "arte",
          texto:
            "Su argumento de coste de oportunidad es el que mejor convence: cinco horas semanales son el tres por ciento de las horas que uno está despierto. Y lo que compran, según los datos de capacidad aeróbica, es una diferencia de riesgo de mortalidad de las mayores que se han medido.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Para el que no pueda hacer eso, da una jerarquía y es honesto con ella: si solo hay tiempo para una cosa, caminar rápido todos los días. Si hay para dos, añadir fuerza dos veces por semana. Lo demás es optimización sobre una base que la mayoría no tiene puesta.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un aviso que repite: nada de esto sirve si uno lo hace tres meses. Todo el marco depende de décadas de continuidad, así que el criterio para elegir un plan no es cuál es óptimo, sino cuál se va a seguir haciendo dentro de veinte años.",
        },
        {
          forma: "texto",
          texto:
            "Con el plan físico cerrado, quedaría un manual de longevidad completo y competente. Y entonces el libro hace un giro que no anuncia en la portada y que su propio autor considera el más importante de los cinco.",
        },
        {
          forma: "texto",
          texto:
            "Attia escribe que estuvo a punto de no incluir ese último capítulo, porque implicaba contar cosas suyas que no quería contar. Y que si tuviera que quedarse con uno solo de todo el libro, sería ese, no el del VO2 máximo.",
        },
      ],
    },

    {
      titulo: "El paciente difícil",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El último capítulo empieza con una escena doméstica pequeña. Attia pierde los nervios por algo mínimo y ve la cara de su hija. No es un diagnóstico ni un análisis: es la expresión de una niña mirando a su padre. Escribe que fue la señal más clara que recibió nunca.",
        },
        {
          forma: "texto",
          texto:
            "Hasta ese momento tenía todos los marcadores en orden. Entrenaba varias horas al día, dormía lo que tocaba, se hacía todas las pruebas que recomienda en el libro y su ApoB era ejemplar. Y era, según cuenta él mismo, una persona con la que costaba vivir.",
        },
        {
          forma: "texto",
          texto:
            "Describe una rabia constante, una exigencia brutal consigo mismo y con los demás, y una incapacidad para estar presente. Cuenta que llegó a tener pensamientos de estrellarse conduciendo, y que su matrimonio estuvo cerca de romperse.",
        },
        {
          forma: "clave",
          rotulo: "Lo que faltaba",
          frase: "«¿De qué sirve vivir hasta los cien años si los últimos veinte no hay nadie que quiera pasarlos contigo?» Attia lo plantea como un fallo de diseño de todo su propio programa.",
        },
        {
          forma: "texto",
          texto:
            "Acabó ingresando en un programa terapéutico intensivo, en régimen residencial, y volviendo después a otro. Lo cuenta sin heroísmo y con bastante vergüenza, y esa es la parte del libro que más lectores mencionan cuando hablan de él.",
        },
        {
          forma: "texto",
          texto:
            "En terapia salió lo que sospechaba y no había mirado: maltrato en la infancia, del que no había hablado nunca, y una estructura mental construida encima. La disciplina extrema, la competitividad y la obsesión por el rendimiento eran, en su lectura, el mismo mecanismo de defensa.",
        },
        {
          forma: "arte",
          texto:
            "Y ahí conecta con el resto del libro de una forma que no es retórica. La conducta que le hacía ser buen atleta y buen médico era la misma que le hacía insoportable en casa. No había dos personas: había una estrategia que servía en un sitio y destruía en el otro.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Attia aporta el argumento clínico para no tratar esto como un añadido blando. La depresión, el aislamiento y la soledad son factores de riesgo medibles de mortalidad, comparables a factores físicos clásicos, y actúan tanto directamente como a través de la conducta.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una consecuencia práctica: nadie entrena cinco horas semanales durante treinta años si vive mal. La salud emocional no es un objetivo paralelo al físico; es la condición que hace posible sostener todo lo demás en el tiempo.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla el libro, que falla en cosas importantes. La primera es de acceso. Attia dirige una consulta privada de altísimo coste, y buena parte del programa de pruebas que describe —imagen de cuerpo completo, paneles avanzados, seguimiento continuo— es inalcanzable para la mayoría.",
        },
        {
          forma: "texto",
          texto:
            "Él responde que las intervenciones que más importan son gratis, y es verdad: andar, levantar peso, dormir y no fumar no cuestan dinero. Pero el libro dedica muchas páginas a un nivel de monitorización que solo existe si alguien lo paga.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la fuerza de la evidencia. Attia razona mucho desde mecanismos biológicos y desde estudios observacionales, y avisa de ello, pero el lector medio no distingue entre lo que está probado en ensayos —el ejercicio, la tensión, el tabaco— y lo que es una apuesta razonada.",
        },
        {
          forma: "clave",
          rotulo: "La apuesta más discutible",
          frase: "La rapamicina alarga la vida en ratones. No hay ningún ensayo de longevidad en humanos. Attia la toma y lo dice. Eso es transparencia, no es evidencia.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es de tamaño: son más de cuatrocientas páginas y algunas secciones técnicas se hacen muy densas. El propio libro señala qué capítulos puede saltarse quien no quiera entrar en bioquímica, y ese aviso dice bastante sobre su estructura.",
        },
        {
          forma: "texto",
          texto:
            "Y la cuarta: el capítulo de nutrición se queda corto para lo que promete el resto. Es prudente y honesto, pero después de veinte páginas explicando por qué casi ningún estudio nutricional vale, deja al lector con menos indicaciones prácticas de las que esperaba.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad: que este es un libro de dieta. No lo es. La dieta ocupa un capítulo, es el más cauteloso de todos, y su recomendación central es comer suficiente proteína y sostener el hábito, no seguir ningún protocolo concreto.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: que la medicina 3.0 sea una tecnología nueva. No lo es. Es un cambio de momento y de actitud: medir antes, actuar antes y aceptar tratar a alguien que todavía no está enfermo. Las herramientas ya existen casi todas.",
        },
        {
          forma: "arte",
          texto:
            "Y el tercero, el que más le importa a él: mucha gente resume el libro como come bien y haz ejercicio. La aportación real es otra: la palanca dominante es la capacidad aeróbica y la fuerza, medidas y entrenadas con un objetivo a cuarenta años vista.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda es un manual exigente escrito por alguien que se aplicó su propio programa hasta llevarlo al absurdo, se estrelló por el lado que no estaba midiendo, y decidió contarlo en el último capítulo en vez de dejarlo fuera.",
        },
        {
          forma: "texto",
          texto:
            "Y esa es la frase con la que se queda uno. Attia escribe que pasó una década optimizando cada variable de su salud sin haber contestado a la pregunta previa: para qué quería todos esos años, y con quién pensaba pasarlos.",
        },
      ],
    },
  ],
};

export const COME_COMIDA_REAL: Resumen = {
  id: "come-comida-real",
  titulo: "Come comida real",
  autor: "Carlos Ríos",
  ano: 2019,
  gancho: "Siete de cada diez productos de un supermercado español no son comida en sentido estricto. Son formulaciones industriales diseñadas para que no puedas parar.",
  porQue:
    "Porque detrás del eslogan hay un ensayo clínico de 2019 que es de los pocos experimentos serios que existen en nutrición, y sus resultados son difíciles de discutir.",
  partes: [
    {
      titulo: "El setenta por ciento del supermercado",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un supermercado español cualquiera, pasillo central. A un lado, cereales de desayuno con un dibujo de un tigre y un sello que dice que aportan vitaminas. Al otro, galletas integrales con avena. Al fondo, yogures desnatados de sabores y zumos sin azúcares añadidos.",
        },
        {
          forma: "texto",
          texto:
            "Todos esos productos llevan reclamos de salud en el envase. Y todos, según la clasificación que usa este libro, pertenecen a la misma categoría: no son alimentos, son formulaciones industriales hechas con derivados baratos de unos pocos cultivos.",
        },
        {
          forma: "clave",
          rotulo: "El reparto de un súper",
          frase: "Alrededor del setenta por ciento de las referencias de un supermercado grande son ultraprocesados. La comida de verdad está en el perímetro: fruta, verdura, pescadería, carnicería, legumbre.",
        },
        {
          forma: "texto",
          texto:
            "El autor es Carlos Ríos, dietista-nutricionista onubense nacido en 1991. Empezó publicando en redes sociales en 2016 fotos de etiquetas de supermercado y en dos años había montado un movimiento con millones de seguidores al que llamó realfooding.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 2019 y su propuesta cabe en tres categorías. Comida real: alimentos sin procesar o mínimamente procesados. Buenos procesados: alimentos procesados que siguen siendo saludables. Y ultraprocesados, que son el objetivo del libro entero.",
        },
        {
          forma: "texto",
          texto:
            "La primera aclaración es la que más falta hace, porque el mensaje se ha simplificado hasta deformarse: procesado no significa malo. El aceite de oliva virgen extra está procesado. El queso está procesado. Las legumbres de bote, el pan de verdad y las conservas están procesados.",
        },
        {
          forma: "arte",
          texto:
            "La cocina es procesar. Cortar, cocer, fermentar y conservar son procesos, y llevamos haciéndolos diez mil años. La distinción no está entre natural y procesado, sino entre procesado y ultraprocesado, y esa segunda palabra tiene una definición técnica precisa.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Un ultraprocesado no es un alimento al que se le han hecho cosas. Es un producto fabricado a partir de sustancias extraídas de alimentos —almidones, azúcares, aceites refinados, proteínas aisladas— y recombinadas con aditivos que no se usan en ninguna cocina doméstica.",
        },
        {
          forma: "texto",
          texto:
            "La prueba de la cocina es la más práctica que da el libro. Si en la lista de ingredientes aparecen cosas que uno no tendría nunca en su despensa —jarabe de glucosa y fructosa, aceite de palma refinado, proteína de suero, estabilizantes, aromas—, es un ultraprocesado.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí está el punto de partida técnico del libro, que no es de Ríos: es de un equipo de la Universidad de São Paulo dirigido por el epidemiólogo Carlos Monteiro, que en 2009 propuso una clasificación de los alimentos según su grado de procesamiento industrial.",
        },
        {
          forma: "clave",
          rotulo: "La clasificación NOVA",
          frase: "Cuatro grupos, ordenados por procesamiento y no por nutrientes. Fue la primera vez que alguien propuso clasificar la comida por cómo se ha hecho en lugar de por lo que contiene.",
        },
        {
          forma: "texto",
          texto:
            "Ese cambio de criterio es más importante de lo que parece. La nutrición del siglo XX se organizó alrededor de nutrientes: calorías, grasas, azúcares, proteínas. Se legislaba y se etiquetaba por nutrientes, y toda la industria aprendió a optimizar esa tabla.",
        },
        {
          forma: "texto",
          texto:
            "El resultado fueron cuarenta años de productos formulados para cumplir la tabla nutricional sin dejar de ser lo que eran. Bajos en grasa con azúcar añadido. Bajos en azúcar con edulcorantes. Enriquecidos con fibra y vitaminas sintéticas. Todos con sello de saludable.",
        },
        {
          forma: "texto",
          texto:
            "La hipótesis de Monteiro y la de este libro es que ese enfoque era erróneo de raíz: que el problema no está en los nutrientes que un producto contiene, sino en lo que le han hecho al alimento para llegar hasta él. La matriz importa tanto como el contenido.",
        },
        {
          forma: "arte",
          texto:
            "El ejemplo que aclara la idea: una manzana entera, una compota de manzana y un zumo de manzana tienen azúcares muy parecidos en la etiqueta. Y el cuerpo responde de forma muy distinta a los tres, porque en la fruta entera el azúcar viene dentro de una estructura de fibra.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Esa estructura ralentiza la absorción, obliga a masticar, ocupa espacio en el estómago y activa señales de saciedad. Al triturarla y colarla, todo eso desaparece. La tabla nutricional apenas cambia, y el efecto sobre el apetito y sobre la glucemia cambia por completo.",
        },
        {
          forma: "texto",
          texto:
            "El libro se apoya además en cifras de consumo que en España son llamativas. Estudios sobre dieta infantil española han encontrado que una parte muy alta de las calorías de los niños procede de productos ultraprocesados, y que el desayuno es la comida peor resuelta.",
        },
        {
          forma: "texto",
          texto:
            "Y aporta el contraste histórico: en dos generaciones, la dieta española ha pasado de legumbre, pescado, verdura y aceite de oliva a un patrón donde el desayuno es cereal azucarado, la merienda es bollería y la cena a menudo es precocinado.",
        },
        {
          forma: "texto",
          texto:
            "Todo eso es correlación y podría explicarse por muchas cosas: más sedentarismo, más renta, menos tiempo, porciones mayores. Para separar el efecto del procesamiento hacía falta un experimento controlado, y durante años nadie lo había hecho.",
        },
        {
          forma: "texto",
          texto:
            "Ese experimento se publicó en 2019, el mismo año que este libro, y lo dirigió un investigador de los Institutos Nacionales de Salud de Estados Unidos que hasta entonces había sido bastante escéptico con esta hipótesis.",
        },
      ],
    },

    {
      titulo: "Dos semanas encerrados",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Bethesda, Maryland, 2018. Veinte adultos sanos ingresan en una unidad metabólica de investigación y viven allí dentro durante cuatro semanas. No pueden salir. Todo lo que comen se pesa antes y después. El investigador principal se llama Kevin Hall.",
        },
        {
          forma: "texto",
          texto:
            "El diseño es cruzado: cada participante pasa dos semanas con una dieta de ultraprocesados y dos semanas con una dieta sin procesar, en orden aleatorio. Y aquí está lo importante, porque es lo que hace válido el experimento.",
        },
        {
          forma: "clave",
          rotulo: "Las dietas estaban igualadas",
          frase: "Mismas calorías ofrecidas, misma proporción de azúcar, grasa, sal, fibra y macronutrientes. La única diferencia era el grado de procesamiento de los alimentos que las componían.",
        },
        {
          forma: "texto",
          texto:
            "Y una condición más: podían comer todo lo que quisieran. Se les servía el doble de lo necesario y se pesaba lo que dejaban. Nadie les dijo que comieran menos ni les habló de dietas. Se limitaron a medir cuánto comía cada uno con cada tipo de comida.",
        },
        {
          forma: "texto",
          texto:
            "El resultado fue claro. Con la dieta de ultraprocesados, los participantes comieron alrededor de quinientas calorías más al día que con la otra. No un poco más: unas quinientas, todos los días, sin pedirlo y sin darse cuenta.",
        },
        {
          forma: "texto",
          texto:
            "Y el peso siguió a las calorías. En dos semanas de ultraprocesados ganaron cerca de un kilo de media. En dos semanas de comida sin procesar perdieron aproximadamente el mismo kilo. Las mismas personas, con dietas igualadas en nutrientes, en un mes.",
        },
        {
          forma: "arte",
          texto:
            "Ese estudio es la mejor prueba que existe de la tesis del libro, y su valor está en el diseño: es un ensayo controlado, no una encuesta. La gente no recordaba lo que había comido: se lo pesaron. Y no se comparó a personas distintas: cada una fue su propio control.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "También midieron la velocidad de ingesta y encontraron una pista del mecanismo: comían más deprisa con los ultraprocesados. Son productos blandos, poco fibrosos y de alta densidad energética, así que entran más calorías por minuto y da tiempo a meter muchas antes de que llegue la saciedad.",
        },
        {
          forma: "texto",
          texto:
            "Conviene señalar las limitaciones, porque el libro no lo hace bien: veinte personas es una muestra pequeña, cuatro semanas es poco tiempo, y los participantes estaban encerrados en un entorno artificial. Es un experimento excelente y es un solo experimento.",
        },
        {
          forma: "texto",
          texto:
            "Junto a eso hay una base de estudios observacionales muy amplia. Cohortes europeas de decenas de miles de personas han encontrado asociaciones entre el consumo de ultraprocesados y más riesgo cardiovascular, más cáncer y mayor mortalidad general.",
        },
        {
          forma: "clave",
          rotulo: "La cautela obligatoria",
          frase: "Los estudios observacionales no prueban causa. Quien come muchos ultraprocesados suele fumar más, moverse menos y tener menos renta, y esas variables se ajustan con modelos, no se eliminan.",
        },
        {
          forma: "texto",
          texto:
            "Por eso el ensayo de Hall importa tanto: es el único que aísla la variable. Y por eso conviene no exagerarlo tampoco: demostró un efecto sobre la ingesta espontánea y el peso a corto plazo, no sobre el cáncer ni sobre la mortalidad.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el mecanismo, el libro propone varias explicaciones y todas son razonables aunque ninguna esté cerrada. La primera es la palatabilidad diseñada: estos productos se formulan en laboratorio buscando la combinación de azúcar, grasa y sal que maximiza el deseo de seguir comiendo.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la densidad energética. Un plato de lentejas y una bolsa de patatas pueden tener calorías parecidas y ocupar volúmenes completamente distintos en el estómago. La saciedad depende mucho del volumen y del tiempo de masticación, no solo de la energía.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es la velocidad. La señal de saciedad tarda unos veinte minutos en llegar al cerebro. Un producto que se puede ingerir en tres minutos permite meter una cantidad enorme de calorías antes de que el sistema de aviso se entere de que ha empezado la comida.",
        },
        {
          forma: "arte",
          texto:
            "Y la cuarta, más especulativa: el efecto sobre la microbiota y sobre los emulgentes. Hay estudios en animales que sugieren que algunos aditivos alteran la barrera intestinal. En humanos la evidencia es todavía preliminar y el libro la presenta con más seguridad de la que tiene.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Lo que Ríos deduce de todo esto es una consecuencia práctica que sí es sólida: contar calorías es una estrategia mala porque ignora el apetito. Si un tipo de comida te hace comer quinientas calorías más sin querer, el problema no se arregla con fuerza de voluntad.",
        },
        {
          forma: "texto",
          texto:
            "Su alternativa es cambiar la composición de lo que hay en casa, no la cantidad. Si la despensa está llena de comida que sacia, se come menos sin proponérselo. Es el mismo principio que la arquitectura de decisiones, aplicado a la nevera.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí sale la parte más útil del libro para el día a día, que consiste en aprender a leer una etiqueta. Ríos insiste en que la tabla nutricional, que es donde todo el mundo mira, es la parte menos informativa del envase.",
        },
        {
          forma: "texto",
          texto:
            "Lo que hay que leer está debajo, en letra más pequeña, y en un orden que muy poca gente sabe interpretar.",
        },
      ],
    },

    {
      titulo: "La lista de ingredientes",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La primera regla es de orden: los ingredientes aparecen por peso, de mayor a menor. Si el azúcar está en segundo lugar, ese producto es mayoritariamente harina y azúcar, diga lo que diga el frontal del envase sobre la avena o el cacao.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es de longitud. Ríos propone una heurística sencilla: si hay más de cinco ingredientes y varios no se reconocen, sospechar. No es una regla infalible —una conserva de legumbre puede llevar pocos y un buen pan integral llevar varios—, pero acierta la mayoría de las veces.",
        },
        {
          forma: "clave",
          rotulo: "El truco del azúcar",
          frase: "Al ir por peso, conviene repartirlo. Si un producto lleva jarabe de glucosa, dextrosa, melaza y azúcar moreno, cada uno pesa menos y ninguno sale el primero. Sumados, son la mitad del producto.",
        },
        {
          forma: "texto",
          texto:
            "El libro incluye una lista larga de nombres del azúcar, y es de las páginas más útiles: jarabe de maíz, jarabe de glucosa y fructosa, dextrosa, maltodextrina, sacarosa, azúcar invertido, concentrado de zumo de fruta, melaza, miel de caña, sirope de agave.",
        },
        {
          forma: "texto",
          texto:
            "Después está el capítulo de los reclamos, que es el más divertido y el más práctico. Ríos repasa uno por uno los mensajes del frontal y explica qué significan legalmente, que suele ser mucho menos de lo que el comprador entiende.",
        },
        {
          forma: "texto",
          texto:
            "Sin azúcares añadidos no significa sin azúcar: un zumo no lleva añadido y tiene tanto como un refresco. Light significa un treinta por ciento menos que el producto de referencia, que puede seguir siendo malísimo. Integral, en muchos productos, se cumple con un porcentaje mínimo de harina integral.",
        },
        {
          forma: "arte",
          texto:
            "Y el reclamo estrella: enriquecido con vitaminas y minerales. Añadir vitaminas sintéticas a un producto de harina refinada y azúcar no lo convierte en saludable; permite poner un sello en la caja. Es la operación que Ríos llama, con razón, maquillaje nutricional.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El libro dedica atención especial a tres categorías por su peso en la dieta española. La primera, el desayuno: cereales, galletas, bollería, cacao soluble y zumos. Sostiene que es la comida donde más ultraprocesado se concentra y la que más fácil es de arreglar.",
        },
        {
          forma: "texto",
          texto:
            "La segunda, los productos infantiles: yogures de sabores, batidos, natillas, snacks con dibujos. Señala algo objetivo y bastante incómodo: los productos dirigidos a niños suelen tener peor perfil nutricional que sus equivalentes para adultos, y llevan más publicidad.",
        },
        {
          forma: "texto",
          texto:
            "Y la tercera, los embutidos y las carnes procesadas. Aquí se apoya en la clasificación de la Organización Mundial de la Salud de 2015, que situó la carne procesada en el grupo de agentes con evidencia suficiente de carcinogenicidad para el cáncer colorrectal.",
        },
        {
          forma: "clave",
          rotulo: "Un matiz que casi nadie hace",
          frase: "Esa clasificación mide la solidez de la evidencia, no la magnitud del riesgo. Que el tabaco esté en el mismo grupo no significa que un chorizo equivalga a un cigarrillo, y el libro no lo aclara del todo.",
        },
        {
          forma: "texto",
          texto:
            "La parte constructiva son las listas de sustitución, y son buenas porque son concretas. En vez de cereales, avena en copos. En vez de zumo, fruta entera. En vez de yogur de sabores, yogur natural con fruta. En vez de embutido, conservas de pescado o huevo.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una defensa explícita de productos que la nutrición popular ha demonizado sin motivo: los huevos, los frutos secos, el aceite de oliva, el aguacate, las conservas de pescado, la legumbre de bote y las verduras congeladas, que conservan prácticamente todo su valor.",
        },
        {
          forma: "texto",
          texto:
            "Ese último punto es importante y suele perderse: comer bien no exige comprar en mercados ni cocinar desde cero cada día. La legumbre en conserva, el pescado en lata y la verdura congelada son procesados perfectamente saludables y resuelven una comida en diez minutos.",
        },
        {
          forma: "texto",
          texto:
            "El libro incluye también planificación semanal, listas de la compra y recetas sencillas. Es la sección más floja y la más prescindible, y probablemente esté ahí por exigencias del formato más que por necesidad del argumento.",
        },
        {
          forma: "arte",
          texto:
            "Su mejor consejo operativo es de compra y no de cocina: hacer la mayor parte de la compra en el perímetro del supermercado y bajar poco a los pasillos centrales. Es una regla física, se cumple sin pensar y filtra la mayoría de lo que el libro quiere evitar.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Ríos plantea además el objetivo en términos de proporción y no de pureza: recomienda que en torno al ochenta o noventa por ciento de lo que se come sea comida real o buen procesado, y deja el resto libre. No propone eliminar nada de forma absoluta.",
        },
        {
          forma: "texto",
          texto:
            "Ese matiz es el que más se pierde en la divulgación del movimiento, y es justamente el que evita que la propuesta se convierta en una obsesión. El libro lo dice; las redes sociales que salieron de él, mucho menos.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí es donde empiezan los problemas serios de todo esto, que no están tanto en la tesis como en lo que ha pasado alrededor de ella, en el vocabulario que ha instalado y en quién puede permitirse seguirla.",
        },
      ],
    },

    {
      titulo: "Lo que cuesta cocinar",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La objeción más importante al libro no es científica: es económica y de tiempo. Comer comida real exige comprar más a menudo, porque se estropea; cocinar casi todos los días; y disponer de una cocina, de tiempo y de la energía para usarla al salir del trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Una familia con dos empleos, turnos partidos y niños pequeños no tiene ese margen. Y los ultraprocesados no triunfan solo por sabor: triunfan porque son baratos, duran meses, no requieren preparación y resuelven una cena a las nueve y media de la noche.",
        },
        {
          forma: "clave",
          rotulo: "El punto ciego",
          frase: "El libro presenta como decisión individual algo que en buena medida es estructural: precios relativos, jornadas laborales, publicidad y qué se vende en el barrio donde vives.",
        },
        {
          forma: "texto",
          texto:
            "Los datos apoyan esa objeción. En casi todos los países ricos, el consumo de ultraprocesados es mayor en los hogares con menos renta y menos nivel educativo. Decirle a esa población que elija mejor, sin cambiar nada de su entorno, tiene un rendimiento limitado.",
        },
        {
          forma: "texto",
          texto:
            "Ríos sí menciona el problema y propone medidas regulatorias —impuestos a las bebidas azucaradas, límites a la publicidad infantil, etiquetado frontal—, pero le dedica unas páginas en un libro que va sobre todo de lo que puede hacer el lector en su cocina.",
        },
        {
          forma: "texto",
          texto:
            "La segunda objeción es de definición. La clasificación NOVA es útil y también es difícil de aplicar de forma consistente. Investigadores que la usan discrepan sobre en qué grupo colocar el pan de molde integral, el yogur de sabores o una bebida vegetal.",
        },
        {
          forma: "arte",
          texto:
            "Y esa ambigüedad tiene consecuencias: si dos equipos clasifican distinto, los estudios que asocian ultraprocesados con enfermedad están midiendo cosas ligeramente diferentes. Es una crítica metodológica seria y sigue abierta en la literatura científica.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La tercera es de tono, y viene de dentro de la propia profesión. Varios dietistas han señalado que el vocabulario de comida real frente a comida basura moraliza el acto de comer, y que llamar a algo comida falsa invita a sentir culpa por haberla comido.",
        },
        {
          forma: "texto",
          texto:
            "La preocupación concreta es la ortorexia: la obsesión por comer de forma pura, que no está reconocida como diagnóstico formal pero que los profesionales de trastornos alimentarios ven cada vez más. Un marco de alimentos buenos y malos puede alimentarla.",
        },
        {
          forma: "texto",
          texto:
            "Ríos ha respondido a esto que él propone una proporción y no una pureza, y es cierto que el libro lo dice. También es cierto que el eslogan que ha calado en redes no es una proporción: es una división del mundo en comida y no comida.",
        },
        {
          forma: "clave",
          rotulo: "El conflicto de interés",
          frase: "Del movimiento salieron una marca de productos, una aplicación de pago y una plataforma de contenidos. Quien recomienda evitar productos industriales acabó vendiendo productos.",
        },
        {
          forma: "texto",
          texto:
            "Eso no invalida la tesis, que se sostiene o no por sus datos. Sí obliga a leer con la misma desconfianza que el libro pide aplicar a la industria alimentaria, y a fijarse en que las recomendaciones y el catálogo comercial coinciden bastante.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta objeción es de nivel de evidencia. Ríos es divulgador y comunicador, no investigador, y en varios tramos presenta con seguridad hipótesis que están en fase preliminar, sobre todo en lo relativo a aditivos, emulgentes y microbiota.",
        },
        {
          forma: "texto",
          texto:
            "Y la quinta es de contenido: el libro repite mucho. La idea central se enuncia en el primer capítulo y las doscientas páginas siguientes la ilustran con ejemplos. Es un libro de doscientas páginas construido sobre un artículo de veinte.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por lo más extendido: el libro no dice que lo procesado sea malo. Dice lo contrario en el segundo capítulo. El aceite, el queso, el yogur natural, la conserva y el pan de verdad están procesados y son buenos.",
        },
        {
          forma: "arte",
          texto:
            "Segundo malentendido: no es una dieta. No hay calorías que contar, no hay pesos, no hay menús obligatorios y no hay días de descanso. Es un criterio de compra, y quien lo lea buscando un plan de adelgazamiento no va a encontrar ninguno.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Tercero: la clasificación NOVA no es de Ríos. Es de un equipo brasileño dirigido por Carlos Monteiro y se publicó en 2009. Este libro la divulgó en España con muchísimo éxito, y esa es su aportación real, que no es pequeña pero es de comunicación.",
        },
        {
          forma: "texto",
          texto:
            "Y cuarto: los ultraprocesados no engordan por las calorías que tienen, sino por las que hacen comer. Esa es la conclusión del ensayo de Hall y es lo contrario del mensaje que la industria lleva décadas repitiendo, que es que todo cabe en una dieta equilibrada.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda es un libro con una tesis sólida, un respaldo experimental razonable, un tono que a veces se pasa de moralista, un punto ciego de clase importante y un consejo práctico que casi nadie discute: cuanto más se parezca lo que comes a un alimento, mejor.",
        },
        {
          forma: "texto",
          texto:
            "Y una regla final que resume el libro entero sin necesidad de leerlo: lo que tu bisabuela no habría reconocido como comida probablemente no lo sea. Es una simplificación, se le pueden buscar excepciones, y para hacer la compra de esta tarde funciona bastante bien.",
        },
      ],
    },

    {
      titulo: "La cocina de un martes",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un martes cualquiera, nueve de la noche, alguien que ha salido de trabajar a las ocho abre la nevera. La pregunta no es qué es más sano en abstracto: es qué se puede poner en la mesa en quince minutos con lo que hay dentro.",
        },
        {
          forma: "texto",
          texto:
            "Ahí es donde se gana o se pierde todo, y el libro lo sabe. Su parte final va de logística, y es más aprovechable que la teoría porque parte de una premisa realista: nadie va a cocinar desde cero todas las noches, y el sistema tiene que funcionar igual.",
        },
        {
          forma: "clave",
          rotulo: "La regla de la despensa",
          frase: "Lo que decide lo que cenas no es tu voluntad a las nueve de la noche: es lo que compraste el sábado. La decisión importante se toma en el supermercado, no en la cocina.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale una lista de fondo de armario que resuelve casi cualquier improvisación: legumbre cocida en bote, conservas de pescado, huevos, verdura congelada, tomate triturado, arroz y pasta, frutos secos, aceite de oliva virgen extra y fruta.",
        },
        {
          forma: "texto",
          texto:
            "Con eso se montan cenas en diez minutos que no requieren ninguna habilidad: garbanzos salteados con espinacas congeladas y un huevo. Sardinas con tomate y pan. Arroz con verdura y atún. Ninguna es una receta: son combinaciones de cuatro ingredientes.",
        },
        {
          forma: "texto",
          texto:
            "El libro insiste en desmontar la idea de que comer bien exige recetas elaboradas. La mayoría de las comidas saludables del mundo son tres o cuatro ingredientes cocinados de forma simple, y la complicación culinaria es una barrera inventada.",
        },
        {
          forma: "arte",
          texto:
            "Y hace una observación buena sobre el tiempo: cocinar una legumbre no lleva tiempo de persona, lleva tiempo de olla. Se pone y se va uno. La confusión entre tiempo de cocción y tiempo de trabajo hace que mucha gente descarte platos que casi no dan faena.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "También defiende el batch cooking sin llamarlo así: cocinar una vez por semana una base de legumbre, un cereal y verdura asada, y montar los platos durante la semana. Es una recomendación con décadas de uso doméstico y sigue siendo la más eficaz.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el precio, Ríos aporta un argumento que conviene matizar. Sostiene que comer real no es más caro, y comparando por kilo tiene razón: la legumbre seca, el huevo, la verdura de temporada y las conservas están entre lo más barato del supermercado.",
        },
        {
          forma: "texto",
          texto:
            "Lo que no computa es lo demás: el tiempo, el equipamiento, el conocimiento culinario, la capacidad de comprar dos veces por semana y de tirar lo que se estropea. Comparado por euros el argumento aguanta; comparado por coste total de una vida real, mucho menos.",
        },
        {
          forma: "clave",
          rotulo: "La comparación justa",
          frase: "Un plato de lentejas es más barato que una pizza congelada. Y la pizza no exige planificar, ni comprar fresco, ni fregar, ni saber cocinar, ni llegar a casa con energía.",
        },
        {
          forma: "texto",
          texto:
            "Otra parte útil es la de las salidas y la vida social, donde el libro baja el listón deliberadamente. Recomienda no convertir cada comida fuera en un problema, elegir lo mejor disponible sin agonizar, y no compensar después con restricción.",
        },
        {
          forma: "texto",
          texto:
            "Ese consejo choca con la imagen que el movimiento acabó proyectando, y es de lo más sensato del libro. Un patrón alimentario se define por lo que se hace la mayoría de los días, no por lo que se hace en una boda o en una cena con amigos.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una idea que se agradece: no propone contar nada. Ni calorías, ni macros, ni raciones. La única cuenta que pide es de proporción aproximada, y esa es probablemente la razón de que a mucha gente le haya resultado sostenible durante años.",
        },
        {
          forma: "texto",
          texto:
            "El libro se cierra con el argumento político, que es breve y es el que más ha crecido desde 2019. Sostiene que la responsabilidad individual es insuficiente si el entorno está diseñado en contra, y pide etiquetado frontal claro y límites a la publicidad dirigida a menores.",
        },
        {
          forma: "arte",
          texto:
            "Desde entonces varios países han implantado sellos frontales de advertencia —Chile fue el primero, en 2016— y las evaluaciones han encontrado cambios reales en la compra. Es la línea de trabajo con más respaldo y la que menos espacio ocupa en este libro.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El balance honesto es este. La tesis central —que el grado de procesamiento importa por sí mismo, más allá de los nutrientes— tiene detrás una clasificación académica seria, una cohorte amplia de estudios observacionales y un ensayo controlado que apunta en la misma dirección.",
        },
        {
          forma: "texto",
          texto:
            "El libro que la divulga es repetitivo, moraliza más de lo necesario, tiene un punto ciego de clase importante y viene con un conflicto comercial que conviene tener presente. Y aun así ha cambiado la compra semanal de mucha gente, que es más de lo que consigue casi nadie.",
        },
        {
          forma: "texto",
          texto:
            "Su mérito real no es científico: es de traducción. Convirtió una clasificación epidemiológica brasileña, publicada en revistas técnicas, en una pregunta que cualquiera puede hacerse delante de una estantería. ¿Esto es un alimento o es un producto?",
        },
        {
          forma: "texto",
          texto:
            "Y esa pregunta, hecha veinte veces mientras se llena un carro, cambia más una dieta que cualquier plan semanal. No requiere aprender nada, no requiere pesar nada y se puede empezar a aplicar el sábado que viene sin haber leído el libro entero.",
        },
      ],
    },
  ],
};
