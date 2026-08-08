import type { Short } from "../shorts";

/* ==========================================================================
   Cine.

   Aquí no se hacen críticas ni se resumen argumentos: la trama de una
   película no es una historia, es un spoiler largo.

   La regla del tema: se cuenta el TALLER. Cuántos planos hicieron falta, qué
   se usó en lugar de lo que parece, qué archivo se saqueó, quién discutió
   con quién sobre quién había dirigido qué. El cine es el arte que más se
   fabrica y menos se enseña fabricado, y ahí está todo lo interesante.

   Y se cuenta lo que se repite mal. Que el cine mudo era mudo, que la sangre
   era pintura, que aquel plano fue improvisado. Casi siempre hay una versión
   documentada más rara que la leyenda del rodaje.
   ========================================================================== */

export const CINE: Short[] = [
  {
    id: "grito-wilhelm",
    titulo: "El mismo grito setenta años",
    gancho: "Está en Star Wars, en Indiana Jones y en cuatrocientas películas más.",
    categoria: "Cine",
    color: "var(--clay)",
    encargo: "Una bobina de cinta magnética de sonido abierta sobre una mesa de montaje.",
    fotos: [
      {
        archivo: "Sun Studio's Ampex Reel to Reel.jpg",
        autor: "Un magnetófono Ampex de bobina abierta, del tipo con el que se guardaban y montaban los efectos de sonido. Fotografía de H. Michael Miley.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sun_Studio%27s_Ampex_Reel_to_Reel.jpg",
        foco: "50% 45%",
        alt: "Dos bobinas de cinta magnética montadas en un aparato metálico, con un medidor de aguja entre ellas.",
      },
      {
        archivo: "Beatles microphones, EMI RM-1B & HB-1E, Abbey Road Studios, 80th Anniversary, March 9, 2012.jpg",
        autor: "Micrófonos de cinta de los años treinta, de los usados en las sesiones de doblaje. Estudios Abbey Road. Fotografía de MrJamesAckerley.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Beatles_microphones,_EMI_RM-1B_%26_HB-1E,_Abbey_Road_Studios,_80th_Anniversary,_March_9,_2012.jpg",
        foco: "50% 45%",
        alt: "Dos micrófonos antiguos de rejilla metálica colgados de sus soportes sobre un fondo oscuro.",
      },
      {
        archivo: "Film cans downstairs in The Electric cinema, Birmingham, England, UK, on 25 September 2022 (01).jpg",
        autor: "Estanterías de latas de película en los sótanos de un cine de Birmingham. Fotografía de MatthewHoobin.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Film_cans_downstairs_in_The_Electric_cinema,_Birmingham,_England,_UK,_on_25_September_2022_(01).jpg",
        foco: "50% 45%",
        alt: "Filas de latas redondas de metal apiladas de canto en estantes, cada una con su etiqueta escrita a mano.",
      },
      {
        archivo: "Kino Atlas Interier J.jpg",
        autor: "La sala pequeña del cine Atlas de Praga, vacía. Fotografía de Mojmir Churavy.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Kino_Atlas_Interier_J.jpg",
        foco: "50% 55%",
        alt: "Filas de butacas rojas mirando hacia una pantalla blanca iluminada en una sala vacía.",
      },
    ],
    entrada:
      "Hay un alarido concreto —corto, agudo, con un quiebro al final— que suena cada vez que alguien cae de un tejado, recibe un flechazo o sale despedido por una explosión. No se parece al mismo grito: es literalmente el mismo, el mismo archivo de sonido copiado una y otra vez, grabado en una tarde de 1951 por un actor que cobró su jornal y nunca supo en qué iba a convertirse aquello. Está en Star Wars, en Indiana Jones, en dibujos animados y en anuncios, y una vez que se aprende a reconocerlo ya no hay manera de dejar de oírlo. En el oficio se le llama el grito Wilhelm.",
    paginas: [
      {
        rotulo: "El origen",
        texto:
          "Se grabó para <em>Tambores lejanos</em>, un wéstern de 1951 en el que un soldado es arrastrado bajo el agua por un caimán. La sesión de doblaje registró seis variantes; la que triunfó fue la número cinco. Dos años después, la misma pista se usó en <em>La carga del río Feather</em> para un personaje llamado soldado Wilhelm, y ese es el nombre que se le quedó dentro de la biblioteca de efectos de Warner. Quién puso la voz nunca se ha confirmado del todo: la atribución más citada apunta al actor y cantante Sheb Wooley, cuyos allegados lo dieron por bueno años después.",
        destacado: {
          tipo: "frase",
          frase: "Lleva el nombre de un personaje que no es el que grita.",
        },
      },
      {
        rotulo: "El rescate",
        texto:
          "En los años setenta, un joven diseñador de sonido llamado Ben Burtt rebuscaba en los archivos de efectos de los grandes estudios y encontró una bobina etiquetada como «hombre devorado por un caimán». Le hizo gracia y decidió colarla en todo lo que hiciera. La metió en <em>La guerra de las galaxias</em> en 1977 —un soldado imperial cae por un hueco— y luego en Indiana Jones, y a partir de ahí se convirtió en un guiño entre profesionales del gremio. Hoy se cuentan más de <strong>400</strong> películas con el grito dentro, y sigue apareciendo en estrenos cada año.",
        destacado: { tipo: "cifra", cifra: "400+", unidad: "películas con el mismo archivo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El chiste tiene fecha de caducidad y lo saben quienes lo usan: cuanto más se reconoce, menos sirve, porque un efecto que saca al espectador de la película es un efecto roto. Varios diseñadores de sonido han dicho públicamente que lo han retirado de su repertorio por eso mismo. Y hay una consecuencia más amplia: buena parte de lo que suena en una sala no se grabó para esa película. Los truenos, los cristales, los pasos y los pájaros vienen de bibliotecas compartidas, y hay ruidos concretos que llevan medio siglo repitiéndose sin que nadie los note.",
      },
    ],
  },

  {
    id: "psicosis-ducha",
    titulo: "Cuarenta y cinco segundos, una semana",
    gancho: "El cuchillo no toca la piel en ningún fotograma. La sangre era sirope.",
    categoria: "Cine",
    color: "var(--slate)",
    encargo: "Una alcachofa de ducha antigua vista desde abajo, agua cayendo, blanco y negro.",
    entrada:
      "Dura menos de un minuto y es probablemente la secuencia más analizada del cine. Hitchcock la rodó durante una semana entera en 1960, con unas setenta y ocho posiciones de cámara distintas para un montaje final de unos cincuenta cortes. Todo ese trabajo sirve para que el espectador crea haber visto algo que la película nunca enseña.",
    paginas: [
      {
        rotulo: "Lo que no se ve",
        texto:
          "En ningún fotograma el cuchillo entra en el cuerpo. Lo que hay son fragmentos: una mano, un grito, un hombro, el filo bajando, un pie, el agua. El cerebro rellena el resto y lo rellena peor —o sea, mejor— de lo que lo habría hecho cualquier efecto. Como la película es en blanco y negro, la sangre del desagüe es sirope de chocolate, que en escala de grises tiene una densidad y un brillo que la pintura roja no da. El ruido de las puñaladas se consiguió acuchillando un melón, después de probar con varias frutas hasta dar con el tono exacto.",
        destacado: { tipo: "cifra", cifra: "78", unidad: "posiciones de cámara para 45 segundos" },
      },
      {
        rotulo: "La discusión",
        texto:
          "El diseñador gráfico Saul Bass, que hizo los títulos de crédito y dibujó el guion visual de la secuencia plano a plano, sostuvo años después que la había dirigido él. El equipo lo negó en bloque: la actriz Janet Leigh y el ayudante de dirección afirmaron siempre que Hitchcock estuvo allí dirigiendo cada toma, y que lo de Bass fueron los dibujos. La disputa no se ha cerrado nunca del todo y es un buen recordatorio de cómo funciona el cine: lo que se ve en pantalla lo firma una persona y lo han hecho ochenta, y a veces ni ellas se ponen de acuerdo sobre quién hizo qué.",
        destacado: {
          tipo: "frase",
          frase: "Cincuenta cortes para que veas algo que nunca aparece.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La película cambió además cómo se va al cine. Hitchcock compró todos los ejemplares que pudo de la novela para que nadie conociera el final, prohibió la entrada a la sala una vez empezada la sesión —hasta entonces se entraba a mitad de película sin problema— y montó una campaña entera alrededor de no contar el desenlace. Aquello inauguró la idea moderna del pase con hora fija y del final que no se destripa. La escena, mientras tanto, se sigue proyectando en escuelas de montaje como el ejemplo de que el corte es el efecto especial más barato que existe.",
      },
    ],
  },

  {
    id: "cine-mudo",
    titulo: "El cine mudo nunca fue mudo",
    gancho: "Siempre sonó música en la sala, y esos movimientos acelerados son un error nuestro.",
    categoria: "Cine",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un proyector de manivela de los años veinte, la bobina superior a medio girar.",
    entrada:
      "La imagen mental del cine antiguo tiene dos rasgos: no se oía nada y todo el mundo se movía a trompicones, como muñecos con prisa. Las dos cosas son falsas, y ninguna tiene que ver con cómo se veían aquellas películas cuando se estrenaron. La primera es un problema de nombre; la segunda, un fallo técnico que cometemos nosotros.",
    paginas: [
      {
        rotulo: "El ruido",
        texto:
          "Una proyección de los años veinte era cualquier cosa menos silenciosa. En las salas pequeñas había un pianista; en las grandes, un órgano capaz de imitar truenos, cascos de caballo y sirenas; en los estrenos importantes, una orquesta completa. Los estudios repartían partituras y hojas de indicaciones con la música que tocaba en cada escena. Lo que faltaba no era el sonido, era el sonido SINCRONIZADO con la imagen, y llamar «mudo» a todo aquello es una etiqueta que se inventó después, cuando llegó el sonoro y hubo que distinguir una cosa de la otra.",
        destacado: {
          tipo: "frase",
          frase: "No era cine mudo. Era cine sin sonido grabado, que no es lo mismo.",
        },
      },
      {
        rotulo: "La velocidad",
        texto:
          "Las cámaras se accionaban a manivela y rodaban a unos <strong>16 a 18</strong> fotogramas por segundo, según el operador y según lo que pidiera la escena. Los proyectores de la sala se ajustaban a esa misma velocidad. Cuando el cine sonoro fijó el estándar en 24 fotogramas por segundo, todo el catálogo anterior empezó a proyectarse y luego a copiarse a esa velocidad, un tercio más rápido de lo debido. De ahí vienen los andares cómicos de Chaplin y las persecuciones a trompicones: no son un estilo de la época, son una copia mal pasada.",
        destacado: { tipo: "cifra", cifra: "16-18", unidad: "fotogramas por segundo, no 24" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Las restauraciones modernas corrigen las dos cosas: se ajusta la velocidad a la que se rodó cada película y se recupera o se recompone la música que la acompañaba. Vistas así, aquellas actuaciones dejan de parecer exageradas y se vuelven sorprendentemente contenidas. Del catálogo, en cambio, queda poco: se estima que se ha perdido en torno a las tres cuartas partes de todo el cine anterior a 1930, porque el soporte de nitrato se descompone, arde con facilidad y durante décadas se reciclaba para recuperar la plata de la emulsión.",
      },
    ],
  },
  {
    id: "chaplin-concurso",
    titulo: "Chaplin perdió imitándose a sí mismo",
    gancho: "Se presentó de incógnito a un certamen de dobles suyos en San Francisco y no pasó de la ronda inicial.",
    categoria: "Cine",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un bombín, un bastón y unos zapatos grandes sobre un fondo claro, en blanco y negro.",
    entrada:
      "Estados Unidos, años veinte. Un cómico británico afincado en el cine mudo se ha convertido en la cara más reconocible del planeta: bombín, bigote recortado, bastón y unos zapatos enormes. Es tan popular que en las ciudades se organizan concursos para ver quién lo imita mejor, con premio en metálico. Y en uno de ellos se presenta él, sin decir quién es.",
    paginas: [
      {
        rotulo: "El concurso",
        texto:
          "La historia la contó él mismo en varias entrevistas y la recogió la prensa de la época, aunque los detalles bailan según quién la cuente: unas versiones lo sitúan en un teatro de San Francisco y otras en Suiza, ya mayor. La coincidencia está en lo importante. Se apuntó como uno más, hizo su propio andar de pies hacia fuera delante de un jurado que buscaba parecidos, y quedó fuera en las primeras rondas. En una de las versiones llegó a ser tercero; en otra, ni eso.",
        destacado: { tipo: "frase", frase: "El jurado buscaba a alguien que se pareciera a él. Y él no se parecía bastante." },
      },
      {
        rotulo: "Por qué perdió",
        texto:
          "La explicación tiene su lógica y dice bastante de cómo funcionan las imitaciones. Los concursantes no copiaban a la persona, copiaban el personaje tal y como se veía en pantalla, exagerando el bigote, el vaivén del bastón y la manera de andar hasta convertirlo en una caricatura reconocible desde el fondo de la sala. Él, en cambio, hacía el gesto de verdad, más contenido, con el ritmo de quien lo ha inventado. Al lado de las caricaturas, el original parecía una imitación floja.",
        destacado: { tipo: "frase", frase: "Los demás copiaban el personaje. Él hacía el gesto de verdad." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel personaje le duró veinticinco años y lo retiró en 1936, justo cuando el cine hablado se había impuesto del todo; su primera película con diálogo llegó en 1940 y fue una parodia de Hitler, con quien compartía bigote y año de nacimiento, separados por cuatro días. Murió en Suiza la Nochebuena de 1977 y dos meses después unos ladrones robaron su ataúd para pedir rescate; lo encontraron enterrado en un maizal a veinte kilómetros. Está enterrado de nuevo bajo dos metros de hormigón.",
      },
    ],
  },

  {
    id: "king-kong-maqueta",
    titulo: "King Kong medía un palmo",
    gancho: "El gorila que aterrorizó a Nueva York era un muñeco de metal y goma que se movía a mano, fotograma a fotograma.",
    categoria: "Cine",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una maqueta de rascacielos de los años treinta con un muñeco articulado encima.",
    entrada:
      "Hollywood, 1933. Se estrena una película sobre un gorila gigante traído de una isla perdida que acaba subido a un rascacielos de Nueva York con una mujer en la mano. El público sale convencido de haber visto un animal enorme. Lo que había delante de la cámara era un armazón de metal de cuarenta y cinco centímetros forrado de goma y pelo de conejo.",
    paginas: [
      {
        rotulo: "Un dedo por foto",
        texto:
          "La técnica consistía en fotografiar el muñeco, moverlo un poco, fotografiarlo otra vez y repetir: veinticuatro fotos para cada segundo de película. Un animador tardaba una jornada entera en sacar adelante unos pocos segundos, y durante el rodaje el pelo del muñeco se aplastaba con los dedos, de modo que en la película acabada el pelaje del gorila hierve y tiembla continuamente. No fue un fallo que se ocultara ni que se pudiera arreglar: al público le pareció que el animal respiraba de puro nervio, y el efecto se quedó como marca de la casa. Los planos más largos del gorila costaron semanas de trabajo para durar menos de un minuto en pantalla.",
        destacado: { tipo: "cifra", cifra: "24", unidad: "fotos por cada segundo de película" },
      },
      {
        rotulo: "Las manos grandes",
        texto:
          "Para los planos cercanos se construyeron piezas sueltas a tamaño real. Una mano de casi dos metros y medio, con estructura de acero y muelles, en la que la actriz se sentaba sujeta por unos cinturones mientras dos operarios la levantaban con una grúa; se cayó de ella más de una vez. Se construyó también una cabeza de casi dos metros con tres hombres metidos dentro accionando palancas para mover las cejas, los labios y los párpados, y un pie enorme para los planos en que aplastaba a alguien. El rascacielos por el que trepa era una maqueta de escayola de siete metros colocada en un tejado.",
        destacado: { tipo: "frase", frase: "Dentro de la cabeza del gorila había tres hombres con palancas." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La película salvó al estudio, que estaba al borde de la quiebra en plena crisis económica, y se reestrenó cuatro veces en veinte años. De los muñecos originales no se conserva ninguno entero: la goma se descompone con el tiempo y los armazones se desmontaron para reutilizar las piezas en otros rodajes. De los muñecos solo queda un esqueleto metálico incompleto, sin piel ni pelo, en manos de un coleccionista privado que lo compró en una subasta. El animal más grande de la historia del cine cabía de sobra dentro de una caja de zapatos, y así estuvo guardado décadas.",
      },
    ],
  },

  {
    id: "llegada-sonido",
    titulo: "El sonido despidió a media industria",
    gancho: "Los estudios se resistieron cuatro años. Cuando cedieron, se arruinaron carreras enteras en un semestre.",
    categoria: "Cine",
    color: "var(--plum)",
    encargo: "Un micrófono de estudio de los años treinta colgado sobre un plató vacío.",
    entrada:
      "Hollywood, 1927. El cine lleva treinta años siendo mudo y funciona: hay orquestas en las salas, actores famosos en todo el mundo sin que nadie sepa cómo suena su voz, y películas que se exportan cambiando solo los carteles de texto. Aquel año se estrena una película con unos minutos de diálogo sincronizado, y en cuatro años no queda nada del sistema anterior.",
    paginas: [
      {
        rotulo: "La cámara enjaulada",
        texto:
          "Grabar sonido obligó a cambiarlo todo dentro del plató. Los micrófonos de la época recogían cualquier ruido, así que había que esconderlos en un jarrón o entre las flores y los actores tenían que hablar hacia ellos sin moverse. La cámara, que hacía un zumbido continuo, se metía en una cabina insonorizada del tamaño de un armario, con el operador dentro pasando calor; en algunos rodajes hubo desmayos. El resultado fueron películas mucho más quietas que las mudas, con los actores plantados alrededor de una mesa o de un teléfono, hablando hacia un florero. Los primeros años del cine sonoro se ven, comparados con lo anterior, sorprendentemente rígidos y teatrales.",
        destacado: { tipo: "frase", frase: "La cámara se encerró en una cabina, con el operador dentro." },
      },
      {
        rotulo: "Las voces",
        texto:
          "Y llegó la criba. Actores adorados durante una década resultaron tener voces agudas, acentos extranjeros marcados o problemas para memorizar diálogo largo, algo que en el mudo no importaba nada porque el texto se improvisaba. Varias estrellas desaparecieron de las carteleras en menos de un año. Los músicos de las salas —unos veintidós mil solo en Estados Unidos— se quedaron sin trabajo de golpe, y los rótulos de texto, que para exportar una película solo había que cambiar de idioma e intercalar, dejaron de servir de golpe. Hubo que inventar el doblaje y los subtítulos, y durante un par de años algunos estudios llegaron a rodar la misma película dos y tres veces con repartos distintos para cada país.",
        destacado: { tipo: "cifra", cifra: "22.000", unidad: "músicos de sala se quedaron sin trabajo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El doblaje se inventó ahí, y en España se volvió obligatorio en 1941 por una orden que exigía proyectar todas las películas extranjeras habladas en español, con la censura de por medio; de aquella orden viene que hoy sea el país europeo donde menos se ve cine en versión original. De las películas mudas, en cambio, se ha perdido cerca del setenta y cinco por ciento de todo lo que se rodó: nadie las guardó, porque el negocio dejó de existir en unos meses y el material era caro de almacenar. Muchas se quemaron a propósito para recuperar la plata de la emulsión.",
      },
    ],
  },
];
