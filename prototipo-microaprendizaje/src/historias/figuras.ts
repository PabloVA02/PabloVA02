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
    titulo: "Por qué mataron a César",
    gancho: "A Julio César lo apuñalaron veintitrés veces sesenta senadores a la vez. El médico que examinó el cuerpo escribió que solo una fue mortal.",
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
      pdPorEdad: 1844,
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
    /* Una imagen por página, y el pie de cada una dice QUÉ es lo que se ve:
       qué clase de objeto, de qué año, de dónde salió y quién lo hizo. */
    fotos: [
      /* El hueco 0 es LA PORTADA: es la misma imagen de `foto`, repetida aquí
         para que el orden de la lista sea el orden de las pantallas. */
      {
        /* Empotrada, como la de la lista y por lo mismo: la portada del
           primer short es lo primero que ve alguien que abre la app, y no
           puede depender de que una petición a otro dominio llegue a tiempo.
           Es un recorte del cuadro de Camuccini, de 1806, así que la licencia
           la justifica su edad igual que si viniera de Commons. */
        local: cesarFoto,
        autor: "Óleo de Vincenzo Camuccini, 1806. Museo di Capodimonte, Nápoles.",
        licencia: "Dominio público",
        pdPorEdad: 1844,
        foco: "50% 50%",
        alt: "El asesinato de Julio César pintado por Camuccini.",
      },
      {
        /* La moneda es del año 44 antes de Cristo, pero la fotografía es de
           2013 y de un señor con nombre. Su licencia obliga a nombrarlo, así
           que va en el pie. */
        archivo:
          "06 Julius Caesar, Aemilia Denarius. Caesar CAESAR DICT PERPETVO, Fasces Caduceus axe globe hands L.AEMILIVS BVCA. Winckless collection.jpg",
        autor:
          "Denario de plata acuñado en Roma el año 44 a. C. La leyenda dice CAESAR DICT PERPETVO: César, dictador perpetuo. Fotografía de Andrew McCabe.",
        licencia: "CC BY 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:06_Julius_Caesar,_Aemilia_Denarius._Caesar_CAESAR_DICT_PERPETVO,_Fasces_Caduceus_axe_globe_hands_L.AEMILIVS_BVCA._Winckless_collection.jpg",
        foco: "50% 50%",
        alt: "Las dos caras de un denario romano: el retrato de César de perfil y, al otro lado, un hacha, un caduceo y dos manos entrelazadas.",
      },
      {
        archivo: "Jean-Léon Gérôme - The Death of Caesar - Walters 37884.jpg",
        autor: "Óleo de Jean-Léon Gérôme, 1867. Walters Art Museum, Baltimore.",
        licencia: "Dominio público",
        pdPorEdad: 1904,
        fuente: "https://commons.wikimedia.org/wiki/File:Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_The_Death_of_Caesar_-_Walters_37884.jpg",
        foco: "50% 62%",
        alt: "La muerte de César: el cuerpo en el suelo y los conspiradores saliendo con los puñales en alto.",
      },
      {
        /* La estatua es del siglo I; la fotografía, de 2023. Una escultura
           tiene volumen y la foto elige punto de vista y luz, así que el
           fotógrafo tiene derechos propios y hay que nombrarlo.

           El original mide 2813x4500, o sea que es larguísimo de alto y en una
           banda del 28 % solo cabe una franja. El foco va arriba, al pecho y a
           la cara, que es donde está el emperador. */
        archivo: "Augustus of Prima Porta (inv. 2290).jpg",
        autor:
          "Augusto de Prima Porta, estatua de mármol del siglo I hallada cerca de Roma. Museos Vaticanos. Fotografía de Joel Bellviure.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Augustus_of_Prima_Porta_(inv._2290).jpg",
        foco: "50% 24%",
        alt: "El Augusto de Prima Porta: el emperador con el brazo levantado, el peto labrado y la toga recogida en la cintura.",
      },
    ],
    /* Texto literal de la maqueta que aprobó Pablo. Si algo de aquí no
       coincide con ella, manda ella. */
    entrada:
      "Roma, año 44 antes de Cristo. Julio César es el hombre más poderoso del mundo conocido: ha conquistado la Galia, la actual Francia, ha ganado una guerra civil contra sus propios compatriotas y gobierna de hecho todo el Mediterráneo. Aquella mañana de marzo entra a una reunión del Senado sin guardaespaldas, porque hace poco despidió a su escolta para demostrar que se fiaba. Sus amigos le insistieron en que la recuperara y él contestó que prefería morir una vez a vivir esperándolo. Dentro le esperan unos sesenta hombres con un puñal escondido bajo la ropa, y casi ninguno de ellos es soldado. Son senadores, la gente con la que lleva años gobernando.",
    paginas: [
      {
        rotulo: "El casi rey",
        texto:
          "Roma llevaba casi quinientos años sin rey y estaba orgullosísima de ello. El poder se repartía entre varios cargos que duraban un año, precisamente para que nadie mandase demasiado tiempo seguido. César rompió esa regla por todos lados. Se hizo nombrar dictador de por vida, puso su cara en las monedas y presidía el Senado sentado en una silla dorada. La cara en la moneda era un honor reservado hasta entonces a los dioses y a los muertos. Y el Senado le fue votando honores cada vez más raros, hasta ponerle una estatua junto a las de los antiguos reyes. Nunca llegó a coronarse rey, pero para muchos senadores la diferencia había dejado de existir.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "años mandó en Roma antes de que lo mataran" },
      },
      {
        /* Esta es la página que en la maqueta va sin dato: el texto llega
           hasta abajo y no hace falta nada más. */
        rotulo: "La emboscada",
        texto:
          "Podían haberlo matado de noche, en la calle y sin testigos, y no lo hicieron. Lo mataron dentro de una reunión del Senado y delante de todo el mundo, porque querían que aquello pareciera una sentencia y no un asesinato. Acordaron además que apuñalara cada uno de ellos, para que ninguno pudiera denunciar a los demás sin condenarse a sí mismo. Un senador se le acercó con una petición y le agarró la toga: esa era la señal. César intentó defenderse con lo único que llevaba encima, un punzón de escribir. Entre los que lo rodeaban estaba Bruto, al que él había perdonado en la guerra civil, y al reconocerlo dejó de resistirse y se cubrió la cara con la toga.",
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No los siguió nadie. Los asesinos salieron a la calle con las manos manchadas gritando que Roma volvía a ser libre, y la ciudad se quedó mirando desde los portales. En dos años los cabecillas habían muerto, casi todos matándose ellos mismos tras perder la guerra que provocaron. Diecisiete años después, el sobrino nieto de César gobernaba Roma como primer emperador. Habían matado a un hombre para no tener un rey, y lo que consiguieron fue un imperio.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "palabras salieron de su nombre: káiser y zar" },
      },
    ],
  },

  {
    id: "cleopatra",
    titulo: "Cleopatra y la Luna",
    gancho: "Cleopatra vivió más cerca en el tiempo de la llegada del hombre a la Luna que de las pirámides que tenía al lado de casa.",
    categoria: "Figuras",
    color: "var(--plum)",
    encargo: "Un busto o un relieve de Cleopatra, mejor de perfil, muy iluminado por un lado.",
    fotos: [
      {
        archivo: "Cleopatra VII, 40-30 BCE; Altes Museum, Berlin (1) (28399854659).jpg",
        autor: "Busto de mármol de Cleopatra VII, tallado entre los años 40 y 30 antes de Cristo. Altes Museum, Berlín. Fotografía de Richard Mortel.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cleopatra_VII,_40-30_BCE;_Altes_Museum,_Berlin_(1)_(28399854659).jpg",
        foco: "40% 42%",
        alt: "Busto de mármol de Cleopatra VII conservado en el Altes Museum de Berlín.",
      },
      {
        archivo: "Giza, Sphynx and funerary temple of Khafre, 19th century pictures, 1865-1870, photo 3 of 9 - Archivio fotografico Museo Egizio, Turin INV02 008.jpg",
        autor: "La Esfinge de Guiza medio enterrada en la arena, fotografiada entre 1865 y 1870. Museo Egizio, Turín.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Giza,_Sphynx_and_funerary_temple_of_Khafre,_19th_century_pictures,_1865-1870,_photo_3_of_9_-_Archivio_fotografico_Museo_Egizio,_Turin_INV02_008.jpg",
        foco: "50% 50%",
        alt: "La Esfinge sepultada hasta el cuello en la arena, con la pirámide de Keops al fondo, en una foto antigua en sepia.",
      },
      {
        archivo: "The Giza Pyramids.jpg",
        autor: "Las pirámides de Guiza, ya viejísimas cuando Cleopatra nació. Fotografía de Morhaf Kamal Aljanee.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:The_Giza_Pyramids.jpg",
        foco: "50% 50%",
        alt: "Tres pirámides escalonadas por la erosión, recortadas sobre el desierto y un cielo claro.",
      },
      {
        archivo: "AS11-40-5877 - Apollo 11 - Apollo 11 Mission image - Astronaut bootprint on the lunar surface - NARA - 16685058.jpg",
        autor: "La huella de una bota en el polvo de la Luna, fotografiada durante la misión Apolo 11 en julio de 1969. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:AS11-40-5877_-_Apollo_11_-_Apollo_11_Mission_image_-_Astronaut_bootprint_on_the_lunar_surface_-_NARA_-_16685058.jpg",
        foco: "50% 50%",
        alt: "La marca nítida de una suela con dibujo de tacos, impresa en un polvo gris muy fino.",
      },
    ],
    entrada:
      "Egipto, siglo I antes de Cristo. Cleopatra VII no era egipcia: era griega, de familia macedonia, la última de una dinastía que llevaba casi trescientos años gobernando el país desde Alejandría sin molestarse siquiera en aprender la lengua de la gente a la que gobernaba. Ella fue la primera de toda esa familia que sí la aprendió, y no por cariño ni por curiosidad. La usó exactamente como se usa una herramienta de trabajo, junto a otras ocho lenguas que hablaba, para negociar ella misma, cara a cara y sin intérpretes de por medio que pudieran traicionarla.",
    paginas: [
      {
        rotulo: "La cuenta",
        texto:
          "La gran pirámide se terminó hacia el año 2560 antes de Cristo y Cleopatra murió en el año 30. Entre las dos fechas hay dos mil quinientos treinta años. Entre Cleopatra y el primer hombre que pisó la Luna hay mil novecientos noventa y nueve. Es decir, ella vivió más cerca de la llegada a la Luna que de la pirámide que tenía al lado de casa. Cuando subió al trono, esa pirámide llevaba en pie más tiempo del que nos separa hoy de ella. Ya era una parada de turistas, con grafitis en griego rascados en las piedras por visitantes de su época.",
        destacado: { tipo: "cifra", cifra: "2.530", unidad: "años entre la pirámide y ella" },
      },
      {
        rotulo: "El saco de ropa",
        texto:
          "La alfombra enrollada de las películas no aparece en ninguna fuente antigua. Un biógrafo griego que escribió un siglo después habla de un saco de ropa de cama. Un hombre de confianza suyo la metió dentro, se lo cargó al hombro y la coló en el palacio, delante de César. Cleopatra tenía veintiún años y su hermano acababa de echarla del trono. Nueve meses después nació un niño al que puso el nombre del propio César. Y sobre su belleza, aquel biógrafo es explícito: dice que no era de las que dejan sin habla. Lo irresistible era el trato, la conversación y una voz que manejaba como un instrumento.",
        destacado: {
          tipo: "frase",
          frase: "«Su hermosura no era incomparable». Lo irresistible era hablar con ella.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En el año 31 antes de Cristo, Roma la derrotó junto a su aliado en una gran batalla naval. El vencedor entró en Egipto al año siguiente y ella se mató antes de acabar exhibida en un desfile en Roma. Lo de la serpiente venenosa es dudoso desde el principio, y el propio biógrafo griego ya lo decía. Escribió que nadie sabía cómo entró el veneno y que en el cuerpo no aparecieron marcas claras. Con su muerte, Egipto pasó a ser una provincia romana más, gobernada desde fuera. No terminó un reinado: terminaron tres mil años de faraones, y la última fue una mujer que hablaba griego en casa.",
      },
    ],
  },

  {
    id: "alejandro",
    titulo: "El cadáver robado",
    gancho: "Alejandro Magno levantó el mayor imperio conocido en trece años sin perder una batalla. Murió a los treinta y dos y le robaron el cadáver.",
    categoria: "Figuras",
    color: "var(--ochre)",
    foto: {
      archivo:
        "The Alexander Mosaic depicting the Battle of Issus between Alexander the Great & Darius III of Persia, from the House of the Faun in Pompeii, Naples Archaeological Museum (15045481312).jpg",
      autor:
        "Mosaico de la Casa del Fauno de Pompeya, copia de una pintura griega perdida. Museo Arqueológico de Nápoles. Fotografía de Carole Raddato.",
      licencia: "CC BY-SA 2.0",
      fuente:
        "https://commons.wikimedia.org/wiki/File:The_Alexander_Mosaic_depicting_the_Battle_of_Issus_between_Alexander_the_Great_%26_Darius_III_of_Persia,_from_the_House_of_the_Faun_in_Pompeii,_Naples_Archaeological_Museum_(15045481312).jpg",
      foco: "50% 38%",
      alt: "El mosaico de Pompeya: Alejandro carga por la izquierda y Darío huye en su carro por la derecha.",
    },
    encargo: "El detalle de la cara de Alejandro en el mosaico de Issos, con el ojo muy abierto.",
    fotos: [
      {
        archivo: "Detail of the Alexander Mosaic depicting the Battle of Issus between Alexander the Great & Darius III of Persia, from the House of the Faun in Pompeii, Naples Archaeological Museum (14859382057).jpg",
        autor: "Detalle del mosaico de Alejandro, de la Casa del Fauno de Pompeya. Museo Arqueológico de Nápoles.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADetail%20of%20the%20Alexander%20Mosaic%20depicting%20the%20Battle%20of%20Issus%20between%20Alexander%20the%20Great%20%26%20Darius%20III%20of%20Persia%2C%20from%20the%20House%20of%20the%20Faun%20in%20Pompeii%2C%20Naples%20Archaeological%20Museum%20(14859382057).jpg",
        foco: "40% 45%",
        alt: "Mosaico romano de una batalla, con caballos encabritados, lanzas cruzadas y guerreros de gesto tenso.",
      },
      {
        archivo: "Detail of the Alexander Mosaic depicting the Battle of Issus between Alexander the Great & Darius III of Persia, from the House of the Faun in Pompeii, Naples Archaeological Museum (14859255718).jpg",
        autor: "Otro detalle del mismo mosaico, con el bosque de lanzas del ejército persa.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADetail%20of%20the%20Alexander%20Mosaic%20depicting%20the%20Battle%20of%20Issus%20between%20Alexander%20the%20Great%20%26%20Darius%20III%20of%20Persia%2C%20from%20the%20House%20of%20the%20Faun%20in%20Pompeii%2C%20Naples%20Archaeological%20Museum%20(14859255718).jpg",
        foco: "50% 45%",
        alt: "Detalle de mosaico con rostros de soldados y una selva de lanzas levantadas al fondo.",
      },
      {
        archivo: "Egypt’s Mediterranean Coast (154431).jpg",
        autor: "La costa mediterránea de Egipto, con Alejandría, fotografiada desde la Estación Espacial en 2023. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3AEgypt%E2%80%99s%20Mediterranean%20Coast%20(154431).jpg",
        foco: "50% 50%",
        alt: "Vista desde la órbita de una costa desértica con una ciudad extendida junto al mar y un lago detrás.",
      },
      {
        archivo: "The Alexander Mosaic depicting the Battle of Issus between Alexander the Great & Darius III of Persia, from the House of the Faun in Pompeii, Naples Archaeological Museum (15045954695).jpg",
        autor: "El mosaico de Alejandro completo, con la batalla de Issos de lado a lado.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AThe%20Alexander%20Mosaic%20depicting%20the%20Battle%20of%20Issus%20between%20Alexander%20the%20Great%20%26%20Darius%20III%20of%20Persia%2C%20from%20the%20House%20of%20the%20Faun%20in%20Pompeii%2C%20Naples%20Archaeological%20Museum%20(15045954695).jpg",
        foco: "50% 50%",
        alt: "Mosaico ancho de una batalla antigua, con los dos ejércitos y los carros enfrentados.",
      },
    ],
    entrada:
      "Siglo IV antes de Cristo. En trece años, un rey macedonio que empezó con veinte convirtió un reino de montaña en el mayor imperio conocido hasta entonces, desde Grecia hasta la India. Fundó por el camino unas setenta ciudades y a casi todas ellas, con una falta de imaginación notable, les puso su propio nombre. A los treinta y dos años estaba muerto en Babilonia, sin heredero claro y sin haber vuelto nunca a casa, y sus generales se repartieron el mundo conocido entre ellos antes incluso de haberlo enterrado.",
    paginas: [
      {
        rotulo: "El nudo",
        texto:
          "En una ciudad de la actual Turquía había un carro atado con un nudo imposible de deshacer. Un oráculo decía que quien lo desatara reinaría en Asia, y llevaba generaciones venciendo a todo el que lo intentaba. Alejandro lo miró un rato y lo partió de un tajo con la espada. Otra versión, la de su propio ingeniero, dice que sacó la clavija del yugo y el nudo se soltó solo. Lo importante no es cómo lo hizo, sino lo que hizo después, que fue asegurarse de que la historia se contara en todas partes. No resolvió el acertijo: cambió las reglas del acertijo y convirtió el gesto en propaganda.",
        destacado: { tipo: "cifra", cifra: "0", unidad: "batallas perdidas en 13 años" },
      },
      {
        rotulo: "El cadáver robado",
        texto:
          "Murió en Babilonia en junio del año 323 antes de Cristo, después de diez días de fiebre. Cuando le preguntaron quién heredaba, dejó dicho, o eso se contó, que el más fuerte. El cortejo fúnebre salió hacia su tierra con un carro de oro tirado por sesenta y cuatro mulas. A mitad de camino, uno de sus generales lo interceptó y se llevó el cuerpo a Egipto. En aquel mundo, tener el cadáver del rey era tener el derecho a heredar lo suyo. Estuvo expuesto en Alejandría durante siglos y lo visitaron los emperadores romanos, hasta que la tumba se perdió y no ha vuelto a aparecer.",
        destacado: {
          tipo: "frase",
          frase: "Se robaron el cadáver porque el cadáver era el título de propiedad.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El imperio duró menos que él, porque a los pocos años de morir estaba partido en tres. Sus generales se mataron entre ellos durante cuarenta años por los pedazos. Lo que no se deshizo fue lo otro, y es lo que de verdad quedó. El griego se convirtió en la lengua común desde Egipto hasta la frontera de la India y aguantó mil años. En Afganistán y en Pakistán aparecieron budas esculpidos con pliegues de túnica griega, y Alejandría acabó teniendo la mayor biblioteca del mundo antiguo. Y el Nuevo Testamento se escribió en griego corriente, el de los mercados, porque era el idioma en el que se entendía medio mundo.",
      },
    ],
  },

  {
    id: "gengis",
    titulo: "Los nietos de Gengis Kan",
    gancho: "Un estudio de ADN encontró la firma genética de Gengis Kan en dieciséis millones de hombres vivos hoy.",
    categoria: "Figuras",
    color: "var(--slate)",
    foto: {
      archivo: "YuanEmperorAlbumGenghisPortrait.jpg",
      autor: "Álbum imperial Yuan, Museo del Palacio Nacional",
      licencia: "Dominio público",
      pdPorEdad: 1400,
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
          "En 2003 un equipo internacional analizó el cromosoma Y de más de dos mil hombres de Asia. Ese cromosoma pasa de padre a hijo casi sin cambios, así que sirve para seguir una línea masculina. Encontraron la misma firma genética en el ocho por ciento de los varones del antiguo imperio mongol. Son unos dieciséis millones de personas vivas, y una línea así no se extiende sola. Hace falta poder, y el rastro apunta al siglo XII y a una familia con acceso ilimitado a mujeres. No hay confirmación directa, porque sin la tumba no hay ADN con el que comparar.",
        destacado: { tipo: "cifra", cifra: "16", unidad: "millones de hombres" },
      },
      {
        rotulo: "La tumba",
        texto:
          "Murió en 1227 y quiso desaparecer, y lo consiguió mejor que nadie. Lo enterraron en secreto en algún punto del norte de la estepa, probablemente cerca de una montaña sagrada. Las crónicas cuentan que mataron a los que llevaban el féretro, y después a los que los habían matado. Cuentan también que hicieron pasar mil caballos por encima para borrar la tierra removida. Ochocientos años después sigue sin aparecer, y se ha buscado con satélites y con miles de voluntarios peinando imágenes por internet. Hay además una objeción de fondo en el país, porque mucha gente considera que buscarla es profanarla.",
        destacado: {
          tipo: "frase",
          frase: "Ocho siglos buscando la tumba de quien hizo todo lo posible por no tener una.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Debajo de la matanza, con ciudades enteras borradas y muertos por millones, había un Estado que funcionaba mejor que los de al lado. Los mongoles no tenían escritura y él mandó adaptarles un alfabeto de otro pueblo vecino. Ascendió a generales por mérito y no por cuna, que era insólito en el siglo XIII. Eximió de impuestos a los religiosos de cualquier credo, fuera cual fuera. Y montó un correo de postas con relevos de caballos cada cuarenta kilómetros, que permitía cruzar el imperio en semanas. Por eso un mercader veneciano pudo plantarse en China y volver para contarlo.",
      },
    ],
  },

  {
    id: "napoleon",
    titulo: "Napoleón no era bajito",
    gancho: "Napoleón medía por encima de la media de su época. La leyenda del bajito nace de dos pies que no medían lo mismo.",
    categoria: "Figuras",
    color: "var(--sage)",
    foto: {
      archivo:
        "Jacques-Louis David - The Emperor Napoleon in His Study at the Tuileries - Google Art Project.jpg",
      autor: "Jacques-Louis David",
      licencia: "Dominio público",
      pdPorEdad: 1825,
      foco: "50% 26%",
      alt: "Retrato de Napoleón en su despacho de las Tullerías, pintado por Jacques-Louis David.",
    },
    encargo: "El retrato de David en el despacho, o el sombrero bicornio solo, sobre fondo liso.",
    entrada:
      "Francia, comienzos del siglo XIX. En el acta de su autopsia consta que medía cinco pies y dos pulgadas. Leído con pulgadas inglesas sale un hombre de 1,57, y de ahí viene el chiste que lleva dos siglos rodando. Pero la medida se tomó en pies franceses, que eran más largos que los ingleses. Bien convertida da entre 1,68 y 1,70, por encima de la media de su tiempo.",
    paginas: [
      {
        rotulo: "El apodo",
        texto:
          "El pie de rey francés medía 32,5 centímetros y el inglés medía 30,5. Dos centímetros de diferencia por pie bastan para inventar un complejo nacional. A eso se le sumaron tres cosas más, y ninguna de las tres tiene que ver con su estatura real. Sus soldados le llamaban el cabito, que era un apodo cariñoso y no una descripción. Iba siempre rodeado por los granaderos de su guardia personal, elegidos precisamente por ser altísimos. Y en Londres un caricaturista se pasó años dibujándolo como un enano rabioso con un sombrero enorme, y la caricatura le ganó al dato.",
        destacado: { tipo: "cifra", cifra: "1,68 m", unidad: "sobre la media de su época" },
      },
      {
        rotulo: "Lo que sí midió",
        texto:
          "Mientras tanto hizo algo que sí ha durado: el código civil francés de 1804. Un código civil es el libro de leyes que regula la vida corriente: la propiedad, la herencia, el matrimonio. Son dos mil doscientos ochenta y un artículos escritos en cuatro años, con él presidiendo la mitad de las sesiones. Fijó la igualdad ante la ley, la propiedad privada, el matrimonio civil y el fin de los privilegios feudales. Y de paso dejó a las mujeres sometidas legalmente al marido, un retroceso que costó siglo y medio deshacer. Es la base del derecho civil de medio mundo, y él lo sabía: dijo que sus batallas se olvidarían y el código no.",
        destacado: {
          tipo: "frase",
          frase: "«Waterloo borrará el recuerdo de mis victorias. Mi Código Civil vivirá.»",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Lo desterraron a una isla del Atlántico sur, a mil novecientos kilómetros de la costa africana más próxima. La eligieron precisamente porque escapar de allí no era cuestión de audacia, sino de geografía. Aguantó seis años y murió a los cincuenta y uno, y la autopsia dijo cáncer de estómago. La teoría del envenenamiento con arsénico salió de unos análisis de su pelo hechos mucho después. Se explica mejor por el papel pintado verde de su habitación, cuyo pigmento llevaba arsénico y soltaba vapores con la humedad. En 1840 Francia se lo llevó de vuelta a París, donde sigue.",
      },
    ],
  },

  {
    id: "juana",
    titulo: "El juicio de Juana de Arco",
    gancho: "De Juana de Arco sabemos lo que dijo palabra por palabra, porque el tribunal que la quemó lo anotó todo para hundirla.",
    categoria: "Figuras",
    color: "var(--plum)",
    foto: {
      archivo: "Joan of Arc miniature graded.jpg",
      autor: "Miniatura del siglo XV, Archivos Nacionales de Francia",
      licencia: "Dominio público",
      pdPorEdad: 1500,
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
          "Orleans llevaba siete meses sitiada cuando ella llegó, el 29 de abril de 1429. El 8 de mayo los ingleses levantaban el cerco. No mandaba el ejército, porque no tenía instrucción militar y los capitanes de verdad estaban allí. Pero hizo dos cosas que ellos no podían hacer. Convenció a una tropa derrotada de que iba a ganar y forzó los ataques que los mandos preferían aplazar. En uno de ellos recibió un flechazo en el hombro y se retiró a que se lo curaran. Volvió a la línea esa misma tarde con el estandarte, que era lo único que llevaba en la mano.",
        destacado: { tipo: "cifra", cifra: "9", unidad: "días para romper el asedio" },
      },
      {
        rotulo: "El juicio",
        texto:
          "En 1431 la juzga un tribunal eclesiástico presidido por un obispo francés al servicio de los ingleses. Setenta cargos reducidos a doce, sin abogado, una chica de diecinueve años analfabeta frente a decenas de doctores en teología, y notarios apuntándolo todo. Le tendieron una trampa clásica: «¿Estás en gracia de Dios?». Si decía que sí, era presunción, herejía; si decía que no, se condenaba con su propia boca. Contestó que si no lo estaba, que Dios la pusiera en ella, y que si lo estaba, que Dios la mantuviera. Un asesor declaró después que los que la interrogaban se quedaron sin saber qué decir.",
        destacado: {
          tipo: "frase",
          frase: "«Si no lo estoy, que Dios me ponga en ella.»",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La condenaron por vestir ropa de hombre y la quemaron el 30 de mayo de 1431 en la plaza del mercado. Quemaron el cuerpo tres veces y echaron las cenizas al Sena para que no quedaran reliquias. En 1456, un proceso de nulidad revisó el caso y la absolvió; en 1920 la Iglesia la hizo santa. Y el expediente que la mató es hoy la fuente principal de su vida. Son cientos de páginas de interrogatorio, con sus respuestas anotadas por escribanos hostiles a ella. Es uno de los testimonios más detallados que existen de una persona corriente del siglo XV.",
      },
    ],
  },
];
