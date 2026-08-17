import type { Foto } from "../shorts";

/* ==========================================================================
   Las portadas de los libros.

   La cubierta que edita la editorial no se puede usar: es una obra con
   derechos propia, del diseñador, y de los ciento noventa y cuatro resúmenes
   ciento veintidós son de 1971 en adelante. Lo que sí se puede —y es lo que
   llevan haciendo las colecciones serias desde siempre— es poner ENCIMA del
   libro una obra que ya existe y que es libre: un cuadro, un grabado, una
   fotografía. Penguin Classics lleva medio siglo haciendo justamente eso.

   Así que aquí no hay dibujos inventados: hay obra real de Wikimedia Commons,
   elegida libro a libro para que tenga que ver con lo que se cuenta dentro.
   Moby Dick lleva una ballena de la época; Frankenstein, un paisaje romántico
   de tormenta; El origen de las especies, los pinzones de Darwin.

   LAS REGLAS SON LAS DE `FOTOS.md`, sin excepción:
     · sale de Commons, con la licencia copiada tal cual de la ficha
     · `fuente` es la página del fichero y lleva al mismo fichero
     · nada de collages, ni carteles con letra, ni marcos de museo

   Y una más, propia de aquí: la portada se ve a 148 puntos en la parrilla. Lo
   que a ese tamaño no se reconozca de un vistazo no sirve, por bonito que sea
   en grande. Se prefieren obras con una figura grande y un fondo tranquilo.

   `foco` es dónde mira el recuadro cuadrado. Casi siempre hay que subirlo:
   en un retrato o en un paisaje, el 50 % vertical suele caer en la nada.

   Un libro sin entrada aquí sale con su emblema de categoría, que es el
   diseño previsto mientras no tiene obra. No es un fallo.
   ========================================================================== */

export const PORTADAS_LIBRO: Record<string, Foto> = {
  "moby-dick": {
    archivo: "William Heysman Overend (British-American, 1851-1898) Harpooning the Whale.jpg",
    autor: "Óleo de William Heysman Overend, hacia 1868.",
    licencia: "Public domain",
    pdPorEdad: 1898,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AWilliam%20Heysman%20Overend%20(British-American%2C%201851-1898)%20Harpooning%20the%20Whale.jpg",
    foco: "58% 52%",
    alt: "Balleneros en un bote arponeando a un cachalote enorme en mar picado, con el barco al fondo.",
  },

  frankenstein: {
    archivo: "Das Eismeer (Caspar David Friedrich)-WUS03283.jpg",
    autor: "«El mar de hielo», óleo de Caspar David Friedrich, 1823-1824.",
    licencia: "Public domain",
    pdPorEdad: 1840,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ADas%20Eismeer%20(Caspar%20David%20Friedrich)-WUS03283.jpg",
    foco: "50% 45%",
    alt: "Placas de hielo levantadas unas sobre otras con la popa de un barco aplastada entre ellas.",
  },

  dracula: {
    archivo: "Bran-Castle-Transylvania-0101.jpg",
    autor: "El castillo de Bran, en los Cárpatos, Transilvania.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ABran-Castle-Transylvania-0101.jpg",
    foco: "50% 58%",
    alt: "Castillo de torres puntiagudas sobre una roca, rodeado de bosque y montañas con niebla.",
  },

  quijote: {
    archivo: "Don Quijote Illustration by Gustave Dore VII.jpg",
    autor: "Grabado de Gustave Doré y Héliodore Pisan para el Quijote, 1863.",
    licencia: "Public domain",
    pdPorEdad: 1883,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ADon%20Quijote%20Illustration%20by%20Gustave%20Dore%20VII.jpg",
    foco: "50% 38%",
    alt: "Don Quijote levantado por el aspa de un molino, con Sancho corriendo hacia él.",
  },

  "van-gogh-cartas": {
    archivo: "Van Gogh - Starry Night - Google Art Project.jpg",
    autor: "«La noche estrellada», óleo de Vincent van Gogh, 1889.",
    licencia: "Public domain",
    pdPorEdad: 1890,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AVan%20Gogh%20-%20Starry%20Night%20-%20Google%20Art%20Project.jpg",
    foco: "50% 45%",
    alt: "Cielo nocturno en remolinos azules sobre un pueblo, con un ciprés oscuro en primer plano.",
  },

  odisea: {
    archivo: "Draper-Ulysses and Sirens.jpg",
    autor: "«Ulises y las sirenas», óleo de Herbert James Draper, 1909.",
    licencia: "Public domain",
    pdPorEdad: 1920,
    fuente: "https://commons.wikimedia.org/wiki/File%3ADraper-Ulysses%20and%20Sirens.jpg",
    foco: "34% 30%",
    alt: "Ulises atado al mástil mientras los remeros bogan y las sirenas trepan por la borda.",
  },

  metamorfosis: {
    archivo: "Prague Old Town 2021 10.jpg",
    autor: "La plaza de la Ciudad Vieja de Praga de noche, con la iglesia de Týn.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3APrague%20Old%20Town%202021%2010.jpg",
    foco: "68% 42%",
    alt: "Las torres góticas de la iglesia de Týn iluminadas sobre una plaza oscura de Praga.",
  },

  principito: {
    archivo: "February -conservationlands15 Social Media Takeover- Top 15 Places on National Conservation Lands for Night Sky Viewing (16358792937).jpg",
    autor: "La Vía Láctea sobre las copas de los pinos. Bureau of Land Management.",
    licencia: "Public domain",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AFebruary%20-conservationlands15%20Social%20Media%20Takeover-%20Top%2015%20Places%20on%20National%20Conservation%20Lands%20for%20Night%20Sky%20Viewing%20(16358792937).jpg",
    foco: "50% 40%",
    alt: "Cielo nocturno cuajado de estrellas con la Vía Láctea y las siluetas de unos pinos abajo.",
  },

  "los-miserables": {
    archivo: "Eugène Delacroix - Le 28 Juillet. La Liberté guidant le peuple.jpg",
    autor: "«La Libertad guiando al pueblo», óleo de Eugène Delacroix, 1830. Museo del Louvre, París.",
    licencia: "Public domain",
    pdPorEdad: 1863,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AEug%C3%A8ne%20Delacroix%20-%20Le%2028%20Juillet.%20La%20Libert%C3%A9%20guidant%20le%20peuple.jpg",
    foco: "52% 28%",
    alt: "Una mujer con la bandera avanza sobre una barricada de adoquines seguida por hombres armados.",
  },

  "guerra-y-paz": {
    archivo: "Nachtkwartier te Molodetschno, 3-4 december 1812; episode uit de terugtocht van keizer Napoleon uit Rusland Rijksmuseum SK-A-1043.jpeg",
    autor: "Vivaque en la retirada de Napoleón de Rusia, diciembre de 1812. Óleo de Johannes Hari. Rijksmuseum, Ámsterdam.",
    licencia: "Public domain",
    pdPorEdad: 1849,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ANachtkwartier%20te%20Molodetschno%2C%203-4%20december%201812%3B%20episode%20uit%20de%20terugtocht%20van%20keizer%20Napoleon%20uit%20Rusland%20Rijksmuseum%20SK-A-1043.jpeg",
    foco: "64% 58%",
    alt: "Soldados calentándose en una hoguera sobre la nieve, con la columna en retirada al fondo.",
  },

  montecristo: {
    archivo: "Château d'If en Méditerranée (Ifremer 00542-65405 - 10791).jpg",
    autor: "El castillo de If, frente a Marsella, donde encierran a Edmundo Dantés.",
    licencia: "CC BY 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ACh%C3%A2teau%20d'If%20en%20M%C3%A9diterran%C3%A9e%20(Ifremer%2000542-65405%20-%2010791).jpg",
    foco: "50% 55%",
    alt: "Fortaleza de piedra clara sobre una isla rocosa, rodeada de mar abierto.",
  },

  "nombre-rosa": {
    archivo: "Austria - Admont Abbey Library - 1326.jpg",
    autor: "Biblioteca de la abadía de Admont, Austria.",
    licencia: "CC BY-SA 3.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AAustria%20-%20Admont%20Abbey%20Library%20-%201326.jpg",
    foco: "50% 48%",
    alt: "Sala de biblioteca monástica con frescos en la bóveda y anaqueles blancos y dorados.",
  },

  zaratustra: {
    archivo: "Switzerland-02296 - No Clouds....ya (23005297135).jpg",
    autor: "El Cervino al amanecer, Alpes suizos.",
    licencia: "CC BY-SA 2.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ASwitzerland-02296%20-%20No%20Clouds....ya%20(23005297135).jpg",
    foco: "58% 40%",
    alt: "Pico nevado y afilado recortado contra un cielo azul, con la ladera en sombra debajo.",
  },

  "cuentos-poe": {
    archivo: "Raven portrait (89395).jpg",
    autor: "Cuervo común (Corvus corax).",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ARaven%20portrait%20(89395).jpg",
    foco: "50% 35%",
    alt: "Cuervo negro de plumaje brillante mirando de frente, con el fondo verde desenfocado.",
  },

  "ana-karenina": {
    archivo: "Kramskoy Portrait of a Woman.jpg",
    autor: "«Retrato de una desconocida», óleo de Iván Kramskói, 1883. Galería Tretiakov, Moscú.",
    licencia: "Public domain",
    pdPorEdad: 1887,
    fuente: "https://commons.wikimedia.org/wiki/File%3AKramskoy%20Portrait%20of%20a%20Woman.jpg",
    foco: "55% 32%",
    alt: "Mujer con abrigo de pieles y sombrero en un coche de caballos, con San Petersburgo nevado detrás.",
  },

  "gran-gatsby": {
    archivo: "Chrysler Building 1 (4684845155).jpg",
    autor: "La corona art déco del edificio Chrysler, Nueva York, terminado en 1930.",
    licencia: "CC BY 2.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AChrysler%20Building%201%20(4684845155).jpg",
    foco: "50% 30%",
    alt: "Remate de acero del edificio Chrysler, con sus arcos escalonados contra un cielo azul intenso.",
  },

  principe: {
    archivo: "Portrait of Niccolò Machiavelli (1469–1527), by Follower of Santi di Tito.jpg",
    autor: "Retrato de Nicolás Maquiavelo, seguidor de Santi di Tito, siglo XVI.",
    licencia: "Public domain",
    pdPorEdad: 1603,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3APortrait%20of%20Niccol%C3%B2%20Machiavelli%20(1469%E2%80%931527)%2C%20by%20Follower%20of%20Santi%20di%20Tito.jpg",
    foco: "50% 30%",
    alt: "Maquiavelo de medio cuerpo, con jubón negro y mangas rojas, mirando de lado con media sonrisa.",
  },

  meditaciones: {
    archivo: "Marcus Aurelius Capitoline Hill September 2015-1.jpg",
    autor: "Estatua ecuestre de Marco Aurelio, siglo II. Plaza del Capitolio, Roma.",
    licencia: "Public domain",
    foco: "52% 40%",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AMarcus%20Aurelius%20Capitoline%20Hill%20September%202015-1.jpg",
    alt: "Estatua de bronce del emperador a caballo con el brazo extendido, sobre su pedestal de mármol.",
  },

  "mientras-escribo": {
    archivo: "Vintage typewriter (Unsplash).jpg",
    autor: "Máquina de escribir con una hoja puesta. Fotografía de Florian Klauer, 2014.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AVintage%20typewriter%20(Unsplash).jpg",
    foco: "50% 55%",
    alt: "Una máquina de escribir negra vista desde arriba, con un folio en blanco en el rodillo.",
  },

  "sobre-fotografia": {
    archivo: "Vintage camera 1 (Unsplash).jpg",
    autor: "Cámara de fotos antigua sobre una mesa de madera. Fotografía de Pacto Visual, 2016.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AVintage%20camera%201%20(Unsplash).jpg",
    foco: "55% 50%",
    alt: "Una cámara de telémetro de cromo y cuero, con el objetivo hacia delante, en penumbra.",
  },

  "cartas-joven-poeta": {
    archivo: "Seashore on a winter's day (Unsplash).jpg",
    autor: "Orilla helada en un día de invierno. Fotografía de Jon Flobrant, 2015.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ASeashore%20on%20a%20winter's%20day%20(Unsplash).jpg",
    foco: "50% 50%",
    alt: "Un mar liso al atardecer, con nieve en la orilla y un pájaro volando bajo.",
  },

  "modos-ver": {
    archivo: "Vintage camera (Unsplash).jpg",
    autor: "Cámara de cine de bobinas sobre un estante. Fotografía de Ethan Robertson, 2016.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AVintage%20camera%20(Unsplash).jpg",
    foco: "60% 45%",
    alt: "Una cámara de cine antigua con su objetivo enfocando, con luces desenfocadas detrás.",
  },

  "por-que-dormimos": {
    archivo: "Moon on an inky cludy sky (Unsplash).jpg",
    autor: "La luna llena entre nubes, de noche. Fotografía de Gabriel Santiago, 2014.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AMoon%20on%20an%20inky%20cludy%20sky%20(Unsplash).jpg",
    foco: "50% 50%",
    alt: "La luna pequeña y blanca en un cielo azul oscurísimo con nubes deshechas.",
  },

  "roba-artista": {
    archivo: "Splattered paint on wall (Unsplash).jpg",
    autor: "Pared de un taller manchada por años de pintura. Fotografía de Patrick Tomasso, 2017.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ASplattered%20paint%20on%20wall%20(Unsplash).jpg",
    foco: "50% 45%",
    alt: "Una pared cubierta de salpicaduras y chorretones de pintura de muchos colores.",
  },

  invencible: {
    archivo: "Rock Climbing in Winter (Unsplash).jpg",
    autor: "Escaladores en una pared de granito con nieve. Fotografía de Mathieu Daix, 2015.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ARock%20Climbing%20in%20Winter%20(Unsplash).jpg",
    foco: "45% 50%",
    alt: "Agujas de granito con neveros, y escaladores diminutos pegados a la pared.",
  },

  anticancer: {
    archivo: "Blue stream with a waterfall (Unsplash).jpg",
    autor: "Cascada y arroyo en un bosque de helechos. Fotografía de Steve Bittinger, 2016.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ABlue%20stream%20with%20a%20waterfall%20(Unsplash).jpg",
    foco: "50% 45%",
    alt: "Una cascada cayendo en un bosque cerrado de helechos arbóreos, con el agua corriendo entre piedras.",
  },

  "sutil-arte": {
    archivo: "Contrasting Landscapes (Unsplash).jpg",
    autor: "Dunas de arena delante de una pradera verde. Fotografía de Benny Jackson, 2016.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AContrasting%20Landscapes%20(Unsplash).jpg",
    foco: "50% 55%",
    alt: "Una cordillera de dunas de arena sobre una franja de hierba, bajo un cielo nublado.",
  },

  "deja-de-ser-tu": {
    archivo: "Long Exposure (Unsplash).jpg",
    autor: "Estelas de faros en una carretera de noche, en larga exposición. Fotografía de Namra Desai, 2016.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ALong%20Exposure%20(Unsplash).jpg",
    foco: "50% 55%",
    alt: "Rayas rojas y blancas de luz cruzando la oscuridad de una carretera.",
  },

  "aliento-aire": {
    archivo: "Brooklyn Bridge Sunrise Fog (Unsplash).jpg",
    autor: "El puente de Brooklyn entre la niebla del amanecer. Fotografía de Emanuel Hahn, 2017.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ABrooklyn%20Bridge%20Sunrise%20Fog%20(Unsplash).jpg",
    foco: "45% 50%",
    alt: "Un puente y unos rascacielos casi borrados por la niebla, sobre el agua quieta.",
  },

  "vivir-plenitud": {
    archivo: "POP House Meditaiton Center Thailand, Khlong Luang , Thailand (Unsplash).jpg",
    autor: "Meditación sentada junto a un estanque, en Khlong Luang (Tailandia). Fotografía de 2017.",
    licencia: "CC0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3APOP%20House%20Meditaiton%20Center%20Thailand%2C%20Khlong%20Luang%20%2C%20Thailand%20(Unsplash).jpg",
    foco: "55% 50%",
    alt: "Una persona sentada de perfil sobre una tarima de madera, con el verde del bosque detrás.",
  },

  "come-comida-real": {
    archivo: "Fresh Veggies (Unsplash).jpg",
    autor: "Zanahorias y puerros en un puesto de mercado. Fotografía de Peter Wendt, 2016.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AFresh%20Veggies%20(Unsplash).jpg",
    foco: "62% 55%",
    alt: "Montones de zanahorias naranjas y puerros recién lavados en cajas de madera.",
  },

  "busca-sentido": {
    archivo: "LIGHTHOUSE between Milkyway (Unsplash).jpg",
    autor: "Un faro encendido bajo la Vía Láctea. Fotografía de Robert Wiedemann, 2016.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ALIGHTHOUSE%20between%20Milkyway%20(Unsplash).jpg",
    foco: "35% 50%",
    alt: "Un faro en la orilla lanzando su haz de luz hacia un cielo violeta lleno de estrellas.",
  },

  "elegancia-erizo": {
    archivo: "Classic literature bookcase (Unsplash).jpg",
    autor: "Estanterías con libros de literatura clásica. Fotografía de Dakota Corbin, 2017.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AClassic%20literature%20bookcase%20(Unsplash).jpg",
    foco: "50% 45%",
    alt: "Baldas de madera llenas de libros de lomos gastados, de todos los colores.",
  },

  "sentirse-bien": {
    archivo: "Clouds mirrored in a mountain lake (Unsplash).jpg",
    autor: "Nubes reflejadas en un lago de montaña. Fotografía de Ales Krivec, 2015.",
    licencia: "CC0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AClouds%20mirrored%20in%20a%20mountain%20lake%20(Unsplash).jpg",
    foco: "50% 50%",
    alt: "Un lago liso entre montañas que devuelve el reflejo de las nubes blancas.",
  },

  "etica-amador": {
    archivo: "Van Dyck, Sir Anthony - Sunset Landscape with a Shepherd and his Flock - Google Art Project.jpg",
    autor: "Paisaje al atardecer con un pastor y su rebaño, óleo atribuido a Anton van Dyck, hacia 1620.",
    licencia: "Public domain",
    pdPorEdad: 1641,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AVan%20Dyck%2C%20Sir%20Anthony%20-%20Sunset%20Landscape%20with%20a%20Shepherd%20and%20his%20Flock%20-%20Google%20Art%20Project.jpg",
    foco: "35% 50%",
    alt: "Un pastor tumbado con su rebaño en un claro, con árboles y montes al fondo.",
  },

  "steve-jobs": {
    archivo: "Trinamic TMC2209 stepper motor controller board.jpg",
    autor: "Detalle de una placa de circuito impreso con su chip. Fotografía de Phiarc, 2023.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ATrinamic%20TMC2209%20stepper%20motor%20controller%20board.jpg",
    foco: "45% 45%",
    alt: "Un chip negro rodeado de componentes diminutos sobre una placa con pistas de cobre.",
  },

  "musica-primos": {
    archivo: "Violin strings in close-up (Unsplash).jpg",
    autor: "Cuerdas y efe de un violín vistas de cerca. Fotografía de Providence Doucet, 2016.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AViolin%20strings%20in%20close-up%20(Unsplash).jpg",
    foco: "62% 50%",
    alt: "La madera barnizada de un violín con su abertura en efe y las cuerdas tensadas.",
  },

  "armas-germenes": {
    archivo: "Petra, Jordan -The Treasury.JPG",
    autor: "El Tesoro de Petra, excavado en la roca hacia el siglo I. Fotografía de 2015.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3APetra%2C%20Jordan%20-The%20Treasury.JPG",
    foco: "50% 45%",
    alt: "Una fachada con columnas tallada en un acantilado de arenisca rojiza.",
  },

  "sobre-tirania": {
    archivo: "The Great wall - by Hao Wei.jpg",
    autor: "La Gran Muralla china serpenteando por las montañas al amanecer. Fotografía de Hao Wei, 2005.",
    licencia: "CC BY 2.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AThe%20Great%20wall%20-%20by%20Hao%20Wei.jpg",
    foco: "45% 50%",
    alt: "La muralla de piedra subiendo y bajando por las crestas hasta perderse de vista.",
  },

  "emperador-males": {
    archivo: "Taj Mahal reflection 1.jpg",
    autor: "El Taj Mahal reflejado en el estanque de sus jardines, en Agra. Fotografía de 2024.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ATaj%20Mahal%20reflection%201.jpg",
    foco: "50% 40%",
    alt: "El mausoleo blanco de mármol al fondo de un canal de agua que lo refleja.",
  },

  "siete-lecciones-fisica": {
    archivo: "Eagletail Mountains Wilderness - Milky Way.jpg",
    autor: "La Vía Láctea sobre las montañas Eagletail, en Arizona. Fotografía de Jim Vajda, 2020.",
    licencia: "CC BY 2.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AEagletail%20Mountains%20Wilderness%20-%20Milky%20Way.jpg",
    foco: "50% 40%",
    alt: "La banda de la Vía Láctea cruzando el cielo sobre unas rocas del desierto.",
  },

  "zonas-azules": {
    archivo: "Coral Reef Under the Ocean.jpg",
    autor: "Arrecife visto desde arriba, con el agua turquesa. Fotografía de 2025.",
    licencia: "CC BY-SA 3.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ACoral%20Reef%20Under%20the%20Ocean.jpg",
    foco: "50% 55%",
    alt: "Manchas oscuras de coral bajo un agua turquesa muy clara.",
  },

  "cuchara-menguante": {
    archivo: "Amethyst crystals with hematite inclusions 5.jpg",
    autor: "Cristales de amatista con inclusiones de hematites. Fotografía de James St. John, 2024.",
    licencia: "CC BY 2.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AAmethyst%20crystals%20with%20hematite%20inclusions%205.jpg",
    foco: "45% 50%",
    alt: "Puntas de cuarzo violeta teñidas de rojo, apretadas unas contra otras.",
  },

  "pulgar-panda": {
    archivo: "Giant panda eating bamboo.jpg",
    autor: "Un panda gigante comiendo bambú. Fotografía de Kevin Dooley, 2009.",
    licencia: "CC BY 2.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AGiant%20panda%20eating%20bamboo.jpg",
    foco: "50% 38%",
    alt: "Un panda sentado sujetando una caña de bambú con la pata delantera.",
  },

  "revoluciones-cientificas": {
    archivo: "Antikythera mechanism clockface, 1st-2nd century BC, Greece (model).jpg",
    autor: "Reconstrucción del mecanismo de Anticitera, calculadora astronómica griega del siglo II a. C.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AAntikythera%20mechanism%20clockface%2C%201st-2nd%20century%20BC%2C%20Greece%20(model).jpg",
    foco: "50% 45%",
    alt: "Una esfera de bronce con círculos graduados y agujas, dentro de una caja de madera.",
  },

  "historia-arte": {
    archivo: "Johannes Vermeer - Girl with a Pearl Earring - 670 - Mauritshuis.jpg",
    autor: "La joven de la perla, óleo de Johannes Vermeer, hacia 1665. Mauritshuis, La Haya.",
    licencia: "Public domain",
    pdPorEdad: 1675,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AJohannes%20Vermeer%20-%20Girl%20with%20a%20Pearl%20Earring%20-%20670%20-%20Mauritshuis.jpg",
    foco: "50% 32%",
    alt: "Una joven con turbante azul mira por encima del hombro; le brilla una perla en la oreja.",
  },

  nudge: {
    archivo: "Domino -- 2021 -- 6759.jpg",
    autor: "Fichas de dominó sobre una mesa. Fotografía de Dietmar Rabich, 2021.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ADomino%20--%202021%20--%206759.jpg",
    foco: "50% 50%",
    alt: "Fichas de dominó blancas repartidas sobre una mesa clara.",
  },

  "pensar-rapido": {
    archivo: "Twisting path in an autumn forest (Unsplash).jpg",
    autor: "Un sendero que serpentea por un bosque en otoño. Fotografía de Josephine Wentholt, 2015.",
    licencia: "CC0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ATwisting%20path%20in%20an%20autumn%20forest%20(Unsplash).jpg",
    foco: "50% 55%",
    alt: "Un camino estrecho que da un giro entre pinos altos y helechos secos.",
  },

  "siete-habitos": {
    archivo: "Autumn leaves in Linn Park, Glasgow.jpg",
    autor: "Sendero cubierto de hojas en el parque de Linn, en Glasgow. Fotografía de 2019.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AAutumn%20leaves%20in%20Linn%20Park%2C%20Glasgow.jpg",
    foco: "40% 50%",
    alt: "Dos personas caminando por un sendero de hojas caídas entre hayas doradas.",
  },

  "orden-del-tiempo": {
    archivo: "Aurora Borealis activity on top of the Kirkjufell mountain in September 2018.jpg",
    autor: "Aurora boreal sobre el monte Kirkjufell, en Islandia. Fotografía de 2018.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AAurora%20Borealis%20activity%20on%20top%20of%20the%20Kirkjufell%20mountain%20in%20September%202018.jpg",
    foco: "58% 45%",
    alt: "Una montaña puntiaguda y unas cascadas bajo un cielo cruzado por auroras verdes.",
  },

  "magia-crear": {
    archivo: "Hot air balloon at sunrise over Cappadocia, Turkey.JPG",
    autor: "Un globo sobre Capadocia al amanecer. Fotografía de 2015.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AHot%20air%20balloon%20at%20sunrise%20over%20Cappadocia%2C%20Turkey.JPG",
    foco: "48% 45%",
    alt: "La silueta de un globo aerostático flotando sobre las lomas, con el sol saliendo detrás.",
  },

  "vidas-vasari": {
    archivo: "Venice, Canal Grande, gondolas across Pta. d. Dogana.jpg",
    autor: "Góndolas amarradas en el Gran Canal de Venecia. Fotografía de Armin Kleiner, 2019.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AVenice%2C%20Canal%20Grande%2C%20gondolas%20across%20Pta.%20d.%20Dogana.jpg",
    foco: "42% 45%",
    alt: "Góndolas negras amarradas delante de los palacios del Gran Canal.",
  },

  "el-elemento": {
    archivo: "Fingers on the piano keys (Unsplash).jpg",
    autor: "Manos sobre el teclado de un piano. Fotografía de Gabriel Barletta, 2014.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AFingers%20on%20the%20piano%20keys%20(Unsplash).jpg",
    foco: "40% 50%",
    alt: "Dos manos tocando el piano, con las teclas en primer plano y el fondo desenfocado.",
  },

  "semana-4-horas": {
    archivo: "Amboy (California, USA), Hist. Route 66 -- 2012 -- 1.jpg",
    autor: "La Ruta 66 a la altura de Amboy, en California. Fotografía de Dietmar Rabich, 2012.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AAmboy%20(California%2C%20USA)%2C%20Hist.%20Route%2066%20--%202012%20--%201.jpg",
    foco: "45% 55%",
    alt: "Una carretera recta en el desierto con el escudo de la Ruta 66 pintado en el asfalto.",
  },

  enquiridion: {
    archivo: "Bust of Germanicus, front - Getty Museum (2021.66).jpg",
    autor: "Busto romano en mármol de Germánico, siglo I. J. Paul Getty Museum, Los Ángeles.",
    licencia: "CC0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ABust%20of%20Germanicus%2C%20front%20-%20Getty%20Museum%20(2021.66).jpg",
    foco: "50% 30%",
    alt: "Busto de mármol blanco de un hombre joven de rizos cortos, mirando de frente.",
  },

  "monje-ferrari": {
    archivo: "Rousanou Monastery 02.jpg",
    autor: "El monasterio de Rusano, en Meteora (Grecia), sobre su peña. Fotografía de Patryk Morawiec, 2018.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ARousanou%20Monastery%2002.jpg",
    foco: "40% 40%",
    alt: "Un monasterio de piedra con tejados rojos encaramado en una roca, entre árboles.",
  },

  ikigai: {
    archivo: "Arashiyama Bamboo Grove (Unsplash).jpg",
    autor: "El bosque de bambú de Arashiyama, en Kioto. Fotografía de Erol Ahmed, 2016.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AArashiyama%20Bamboo%20Grove%20(Unsplash).jpg",
    foco: "45% 50%",
    alt: "Cañas de bambú altas y verdes, muy juntas, con la luz colándose entre ellas.",
  },

  "poder-habitos": {
    archivo: "Fushimi Inari-taisha senbon-torii, August 2019.jpg",
    autor: "El túnel de pórticos torii de Fushimi Inari, en Kioto. Fotografía de Jason Zhang, 2019.",
    licencia: "CC BY-SA 3.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AFushimi%20Inari-taisha%20senbon-torii%2C%20August%202019.jpg",
    foco: "50% 50%",
    alt: "Un pasillo de pórticos naranjas repetidos uno tras otro, curvándose cuesta arriba.",
  },

  "cuatro-acuerdos": {
    archivo: "Teotihuacan, the Pyramid of the Sun 2019-10-04.jpg",
    autor: "La pirámide del Sol de Teotihuacán, en México. Fotografía de Alexey Komarov, 2019.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ATeotihuacan%2C%20the%20Pyramid%20of%20the%20Sun%202019-10-04.jpg",
    foco: "65% 45%",
    alt: "La pirámide escalonada asomando por encima de los árboles y la hierba alta.",
  },

  "mundo-sofia": {
    archivo: "Geirangerfjord .jpg",
    autor: "El fiordo de Geiranger, en Noruega. Fotografía de Andreas Trepte, 2010.",
    licencia: "CC BY-SA 2.5",
    fuente: "https://commons.wikimedia.org/wiki/File%3AGeirangerfjord%20.jpg",
    foco: "50% 55%",
    alt: "Un fiordo estrecho entre montañas verdes, con un barco diminuto en el agua.",
  },

  "mas-alla-bien-mal": {
    archivo: "Silsersee from above Sils-Segl Maria.jpg",
    autor: "El lago de Sils, en la Engadina suiza, donde Nietzsche pasaba los veranos. Fotografía de 2017.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ASilsersee%20from%20above%20Sils-Segl%20Maria.jpg",
    foco: "50% 62%",
    alt: "Un alerce solitario en la ladera y, abajo, un lago azul entre montañas.",
  },

  "arte-sin-hombres": {
    archivo: "Berthe Morisot, Young Girl with an Apron, 1891, NGA 131028.jpg",
    autor: "Muchacha con delantal, óleo de Berthe Morisot, 1891. National Gallery of Art, Washington.",
    licencia: "CC0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ABerthe%20Morisot%2C%20Young%20Girl%20with%20an%20Apron%2C%201891%2C%20NGA%20131028.jpg",
    foco: "50% 35%",
    alt: "Retrato de una niña con delantal blanco sentada, pintado a pinceladas sueltas.",
  },

  "existencialismo-humanismo": {
    archivo: "Van Gogh - Terrace of a Café at Night (Place du Forum) 1888.jpg",
    autor: "Terraza de café por la noche, óleo de Vincent van Gogh, 1888. Museo Kröller-Müller, Otterlo.",
    licencia: "Public domain",
    pdPorEdad: 1890,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AVan%20Gogh%20-%20Terrace%20of%20a%20Caf%C3%A9%20at%20Night%20(Place%20du%20Forum)%201888.jpg",
    foco: "45% 45%",
    alt: "La terraza amarilla de un café iluminada de noche, bajo un cielo azul lleno de estrellas.",
  },

  tao: {
    archivo: "1 yangshuo mountain retreat 2011.jpg",
    autor: "Montañas kársticas reflejadas en el río, en Yangshuo, China. Fotografía de chensiyuan.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3A1%20yangshuo%20mountain%20retreat%202011.jpg",
    foco: "50% 40%",
    alt: "Picos verdes en punta reflejados en un río quieto, entre cañas y bambú.",
  },

  "deep-work": {
    archivo: "Getaway (Unsplash).jpg",
    autor: "Cabaña de troncos entre pinos nevados. Fotografía de Wesley Tingey, 2016.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AGetaway%20(Unsplash).jpg",
    foco: "50% 50%",
    alt: "Una cabaña de madera con el tejado nevado, rodeada de abetos.",
  },

  respira: {
    archivo: "Dülmen, Kirchspiel, Börnste, Felder und Bäume -- 2017 -- 3160-6.jpg",
    autor: "Amanecer con niebla sobre los campos de Dülmen. Fotografía de Dietmar Rabich, 2017.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AD%C3%BClmen%2C%20Kirchspiel%2C%20B%C3%B6rnste%2C%20Felder%20und%20B%C3%A4ume%20--%202017%20--%203160-6.jpg",
    foco: "50% 55%",
    alt: "Un árbol solo entre la niebla baja, con el cielo del amanecer encendido en naranja.",
  },

  educada: {
    archivo: "Lake Creek in snow, Oregon - Flickr - Bonnie Moreland (free images).jpg",
    autor: "Un arroyo helado entre pinos nevados, en Oregón. Fotografía de Bonnie Moreland, 2023.",
    licencia: "Public domain",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ALake%20Creek%20in%20snow%2C%20Oregon%20-%20Flickr%20-%20Bonnie%20Moreland%20(free%20images).jpg",
    foco: "55% 50%",
    alt: "Un arroyo oscuro serpenteando entre árboles cargados de nieve.",
  },

  "arte-de-amar": {
    archivo: "P S Krøyer 1899 - Sommeraften ved Skagens strand. Kunstneren og hans hustru.jpg",
    autor: "Tarde de verano en la playa de Skagen, óleo de Peder Severin Krøyer, 1899.",
    licencia: "Public domain",
    pdPorEdad: 1909,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AP%20S%20Kr%C3%B8yer%201899%20-%20Sommeraften%20ved%20Skagens%20strand.%20Kunstneren%20og%20hans%20hustru.jpg",
    foco: "55% 50%",
    alt: "Una pareja vestida de claro pasea por la orilla al anochecer, con la luna sobre el mar.",
  },

  flow: {
    archivo: "Surfer under a wave (Unsplash).jpg",
    autor: "Un surfista dentro del tubo de una ola. Fotografía de Jeremy Bishop, 2016.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ASurfer%20under%20a%20wave%20(Unsplash).jpg",
    foco: "35% 50%",
    alt: "Un surfista deslizándose por dentro del tubo verde de una ola que se cierra sobre él.",
  },

  "dilema-omnivoro": {
    archivo: "Ears of wheat at dusk (Unsplash).jpg",
    autor: "Espigas a contraluz al anochecer. Fotografía de Cezanne Ali, 2015.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AEars%20of%20wheat%20at%20dusk%20(Unsplash).jpg",
    foco: "55% 50%",
    alt: "Espigas doradas recortadas contra la última luz de la tarde.",
  },

  "intro-psicoanalisis": {
    archivo: "La Bohémienne endormie.jpg",
    autor: "La gitana dormida, óleo de Henri Rousseau, 1897. MoMA, Nueva York.",
    licencia: "Public domain",
    pdPorEdad: 1910,
    fuente: "https://commons.wikimedia.org/wiki/File%3ALa%20Boh%C3%A9mienne%20endormie.jpg",
    foco: "45% 50%",
    alt: "Una mujer dormida en el desierto bajo la luna, con un león oliéndola al lado.",
  },

  "doctrina-shock": {
    archivo:
      "冨嶽三十六景 神奈川沖浪裏-Under the Wave off Kanagawa (Kanagawa oki nami ura), also known as The Great Wave, from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141063.jpg",
    autor: "La gran ola de Kanagawa, estampa de Katsushika Hokusai, hacia 1830. Metropolitan Museum of Art, Nueva York.",
    licencia: "CC0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3A%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E6%B2%96%E6%B5%AA%E8%A3%8F-Under%20the%20Wave%20off%20Kanagawa%20(Kanagawa%20oki%20nami%20ura)%2C%20also%20known%20as%20The%20Great%20Wave%2C%20from%20the%20series%20Thirty-six%20Views%20of%20Mount%20Fuji%20(Fugaku%20sanj%C5%ABrokkei)%20MET%20DP141063.jpg",
    foco: "38% 50%",
    alt: "Una ola enorme con la cresta en garras a punto de caer sobre unas barcas.",
  },

  "poder-ahora": {
    archivo: "Llyn Padarn sunrise.jpg",
    autor: "Amanecer en el lago Padarn, en Gales. Fotografía de Richard Outram, 2009.",
    licencia: "CC BY 2.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ALlyn%20Padarn%20sunrise.jpg",
    foco: "50% 50%",
    alt: "Un lago en calma reflejando las nubes rosadas del amanecer, entre árboles oscuros.",
  },

  factfulness: {
    archivo: "The Blue Marble 4463x4163.jpg",
    autor: "La Tierra vista desde el Apolo 17, el 7 de diciembre de 1972. NASA.",
    licencia: "Public domain",
    fuente: "https://commons.wikimedia.org/wiki/File%3AThe%20Blue%20Marble%204463x4163.jpg",
    foco: "50% 50%",
    alt: "La Tierra entera, azul y blanca, sobre el negro del espacio.",
  },

  antifragil: {
    archivo: "Yaquina Head lighthouse, winter storm, Oregon (25807306508).jpg",
    autor: "El faro de Yaquina Head durante un temporal de invierno, en Oregón. Fotografía de Bonnie Moreland, 2018.",
    licencia: "Public domain",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AYaquina%20Head%20lighthouse%2C%20winter%20storm%2C%20Oregon%20(25807306508).jpg",
    foco: "62% 45%",
    alt: "Olas rompiendo en hileras de espuma delante de un faro sobre el acantilado.",
  },

  "por-que-fracasan": {
    archivo: "City Lights of Asia and Middle East 2016.png",
    autor: "Las luces de las ciudades de Asia vistas de noche desde satélite. NASA Earth Observatory, 2016.",
    licencia: "Public domain",
    fuente: "https://commons.wikimedia.org/wiki/File%3ACity%20Lights%20of%20Asia%20and%20Middle%20East%202016.png",
    foco: "50% 50%",
    alt: "El globo terráqueo de noche: unas regiones cubiertas de luces doradas y otras a oscuras.",
  },

  "cisne-negro": {
    archivo: "2025-11-02 Black swan in Parque Dom Carlos I.jpg",
    autor: "Cisne negro en un estanque del Parque Dom Carlos I, en Portugal. Fotografía de 2025.",
    licencia: "CC BY 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3A2025-11-02%20Black%20swan%20in%20Parque%20Dom%20Carlos%20I.jpg",
    foco: "45% 40%",
    alt: "Un cisne negro de pico rojo nadando entre juncos, sobre agua verde.",
  },

  "hombre-rico-babilonia": {
    archivo:
      "Ishtar Gate, Babylon, ca. 575 BCE, built by Nebuchadnezzar II; Pergamon Museum, Berlin (5) (40208356302).jpg",
    autor: "La puerta de Ishtar de Babilonia, hacia 575 a. C. Museo de Pérgamo, Berlín.",
    licencia: "CC BY 2.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AIshtar%20Gate%2C%20Babylon%2C%20ca.%20575%20BCE%2C%20built%20by%20Nebuchadnezzar%20II%3B%20Pergamon%20Museum%2C%20Berlin%20(5)%20(40208356302).jpg",
    foco: "25% 45%",
    alt: "Muro de ladrillos vidriados azules con toros dorados en relieve, uno encima de otro.",
  },

  mindset: {
    archivo: "Alpenglow Over the Pulag Grasslands.jpg",
    autor: "Fila de excursionistas subiendo por los pastizales del monte Pulag, en Filipinas. Fotografía de 2026.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AAlpenglow%20Over%20the%20Pulag%20Grasslands.jpg",
    foco: "50% 55%",
    alt: "Una hilera de gente subiendo por un sendero abierto entre hierba dorada, hacia la cima.",
  },

  mandela: {
    archivo: "Clouds in the drakensberge 01.jpg",
    autor: "Nubes subiendo por las montañas Drakensberg, en Sudáfrica. Fotografía de Thomas Fuhrmann, 2023.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AClouds%20in%20the%20drakensberge%2001.jpg",
    foco: "50% 50%",
    alt: "Una ladera verde con nubes bajas desbordándose por la cresta, bajo cielo azul.",
  },

  "error-descartes": {
    archivo: "Corte cerebro pez cebra visto con microscopio confocal.jpg",
    autor: "Corte de un cerebro de pez cebra visto al microscopio confocal. Imagen de Brandon Segura y Priscilla Vieto, 2024.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ACorte%20cerebro%20pez%20cebra%20visto%20con%20microscopio%20confocal.jpg",
    foco: "50% 50%",
    alt: "Un cerebro diminuto teñido de turquesa y naranja, simétrico, sobre fondo negro.",
  },

  postguerra: {
    archivo: "20140205-Brandenburger-Tor-night.jpg",
    autor: "La Puerta de Brandeburgo de Berlín iluminada de noche. Fotografía de Sebaso, 2014.",
    licencia: "CC BY-SA 3.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3A20140205-Brandenburger-Tor-night.jpg",
    foco: "50% 45%",
    alt: "Las columnas de la Puerta de Brandeburgo encendidas en dorado sobre un cielo negro.",
  },

  malala: {
    archivo: "Hunza Valley view from Duikar with apple blossoms.jpg",
    autor: "El valle de Hunza, en el norte de Pakistán, con los manzanos en flor. Fotografía de 2017.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AHunza%20Valley%20view%20from%20Duikar%20with%20apple%20blossoms.jpg",
    foco: "50% 45%",
    alt: "Terrazas de cultivo con manzanos florecidos y montañas nevadas al fondo.",
  },

  "canones-agosto": {
    archivo: "Dülmen, Brachliegendes Feld mit Wildblumen -- 2021 -- 9764.jpg",
    autor: "Amapolas en un campo en barbecho. Fotografía de Dietmar Rabich, 2021.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AD%C3%BClmen%2C%20Brachliegendes%20Feld%20mit%20Wildblumen%20--%202021%20--%209764.jpg",
    foco: "50% 50%",
    alt: "Amapolas rojas abiertas al sol, con el fondo desenfocado en verde.",
  },

  sapiens: {
    archivo: "Reproduction cave of Altamira 01.jpg",
    autor: "Bisontes del techo de Altamira, pintados hace unos 15.000 años. Fotografía de la reproducción del museo.",
    licencia: "CC BY 2.5",
    fuente: "https://commons.wikimedia.org/wiki/File%3AReproduction%20cave%20of%20Altamira%2001.jpg",
    foco: "50% 45%",
    alt: "Bisontes pintados en ocre y negro sobre la roca abombada de una cueva.",
  },

  "si-esto-hombre": {
    archivo: "Krabyskogbjørkefelt.jpg",
    autor: "Bosque de abedules en invierno, en Noruega. Fotografía de Øyvind Holmstad, 2025.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AKrabyskogbj%C3%B8rkefelt.jpg",
    foco: "50% 50%",
    alt: "Troncos blancos de abedul repetidos hasta el fondo, en un bosque nevado.",
  },

  "homo-sovieticus": {
    archivo: "Moscow metro Park Pobedy station (12239412166).jpg",
    autor: "Estación de Park Pobedy, en el metro de Moscú. Fotografía de Artem Svetlov, 2014.",
    licencia: "CC BY 2.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AMoscow%20metro%20Park%20Pobedy%20station%20(12239412166).jpg",
    foco: "45% 50%",
    alt: "Andén de metro con pilares de mármol naranja y un tren entrando al fondo.",
  },

  "infinito-junco": {
    archivo: "Cyperus papyrus kz07.jpg",
    autor: "Papiro (Cyperus papyrus), la planta con la que se hicieron los primeros libros. Fotografía de Krzysztof Ziarnek, 2022.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ACyperus%20papyrus%20kz07.jpg",
    foco: "50% 45%",
    alt: "Tallos de papiro con sus penachos verdes abiertos como pequeños fuegos.",
  },

  "origen-especies": {
    archivo: "Santa Cruz giant tortoise 03.jpg",
    autor: "Tortuga gigante de la isla Santa Cruz, en Galápagos. Fotografía de Bernard Gagnon, 2014.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3ASanta%20Cruz%20giant%20tortoise%2003.jpg",
    foco: "55% 55%",
    alt: "Una tortuga gigante caminando por la hierba con el cuello estirado.",
  },

  "acto-creativo": {
    archivo: "La Sagrada Familia - interior 5 - Barcelona - panoramio.jpg",
    autor: "Bóveda y columnas de la Sagrada Familia, en Barcelona. Fotografía de 2013.",
    licencia: "CC BY-SA 3.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ALa%20Sagrada%20Familia%20-%20interior%205%20-%20Barcelona%20-%20panoramio.jpg",
    foco: "50% 45%",
    alt: "Columnas que se ramifican como árboles hacia una bóveda azul llena de luces.",
  },

  "diario-ana-frank": {
    archivo: "Amsterdam Canal Houses (Unsplash).jpg",
    autor: "Casas junto a un canal de Ámsterdam. Fotografía de Kaci Baum, 2017.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AAmsterdam%20Canal%20Houses%20(Unsplash).jpg",
    foco: "45% 40%",
    alt: "Fila de casas estrechas de ladrillo con hastiales escalonados al borde de un canal.",
  },

  cosmos: {
    archivo: "Messier83 - Heic1403a.jpg",
    autor: "La galaxia espiral Messier 83, fotografiada por el telescopio Hubble en 2014.",
    licencia: "Public domain",
    fuente: "https://commons.wikimedia.org/wiki/File%3AMessier83%20-%20Heic1403a.jpg",
    foco: "50% 50%",
    alt: "Una galaxia espiral vista de frente, con el núcleo dorado y los brazos rosados de estrellas nuevas.",
  },

  "sexta-extincion": {
    archivo: "Iceberg and glacier in the Lemaire Channel, Antarctica (6054764966).jpg",
    autor: "Iceberg y glaciar en el canal Lemaire, en la Antártida. Fotografía de Liam Quinn, 2011.",
    licencia: "CC BY-SA 2.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AIceberg%20and%20glacier%20in%20the%20Lemaire%20Channel%2C%20Antarctica%20(6054764966).jpg",
    foco: "50% 55%",
    alt: "Un iceberg de hielo azulado flotando delante de un glaciar y montañas nevadas.",
  },

  "mundo-ayer": {
    archivo: "Staatsoper Wien DSC 5273w.jpg",
    autor: "La Ópera Estatal de Viena. Fotografía de Peter Haas, 2014.",
    licencia: "CC BY-SA 3.0 at",
    fuente: "https://commons.wikimedia.org/wiki/File%3AStaatsoper%20Wien%20DSC%205273w.jpg",
    foco: "50% 45%",
    alt: "La fachada de la Ópera de Viena, con sus arcos y estatuas de bronce, bajo un cielo azul.",
  },

  "pilares-tierra": {
    archivo: "Chartres Cathedral South Aisle View into Nave 2007 08 31.jpg",
    autor: "Bóvedas de la catedral de Chartres. Fotografía de Andreas F. Borchert, 2007.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AChartres%20Cathedral%20South%20Aisle%20View%20into%20Nave%202007%2008%2031.jpg",
    foco: "40% 50%",
    alt: "Los nervios de una bóveda gótica arrancando de un pilar, con vidrieras de colores al lado.",
  },

  spqr: {
    archivo: "Colosseum in Rome, Italy - April 2007.jpg",
    autor: "El Coliseo de Roma iluminado al anochecer. Fotografía de David Iliff, 2007.",
    licencia: "CC BY-SA 2.5",
    fuente: "https://commons.wikimedia.org/wiki/File%3AColosseum%20in%20Rome%2C%20Italy%20-%20April%202007.jpg",
    foco: "45% 50%",
    alt: "El anfiteatro romano encendido por dentro, con el cielo azul oscuro detrás.",
  },

  "historia-espana": {
    archivo: "Granada - Alhambra - Palacios nazaríes - Patio de los Leones - 5.jpg",
    autor: "Columnas del Patio de los Leones, en la Alhambra de Granada. Fotografía de Benjamin Smith, 2024.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AGranada%20-%20Alhambra%20-%20Palacios%20nazar%C3%ADes%20-%20Patio%20de%20los%20Leones%20-%205.jpg",
    foco: "50% 50%",
    alt: "Columnas blancas de mármol con capiteles labrados y yeserías nazaríes encima.",
  },

  "universo-mano": {
    archivo: "039 Northern lights over Mývatn (Iceland) Photo by Giles Laurent.jpg",
    autor: "Auroras boreales sobre el lago Mývatn, en Islandia. Fotografía de Giles Laurent, 2022.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3A039%20Northern%20lights%20over%20M%C3%BDvatn%20(Iceland)%20Photo%20by%20Giles%20Laurent.jpg",
    foco: "55% 40%",
    alt: "Cortinas verdes de aurora boreal sobre un lago helado, bajo un cielo estrellado.",
  },

  leonardo: {
    archivo: "Dama z gronostajem.jpg",
    autor: "La dama del armiño, óleo de Leonardo da Vinci, hacia 1490. Museo Nacional de Cracovia.",
    licencia: "Public domain",
    pdPorEdad: 1519,
    fuente: "https://commons.wikimedia.org/wiki/File%3ADama%20z%20gronostajem.jpg",
    foco: "50% 35%",
    alt: "Una joven de perfil sostiene un armiño blanco entre los brazos, sobre fondo negro.",
  },

  "espiritual-arte": {
    archivo: "Vassily Kandinsky, 1936 - Composition 9.jpg",
    autor: "Composición IX, óleo de Vasili Kandinski, 1936. Centro Pompidou, París.",
    licencia: "Public domain",
    pdPorEdad: 1944,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AVassily%20Kandinsky%2C%201936%20-%20Composition%209.jpg",
    foco: "55% 50%",
    alt: "Bandas diagonales de amarillo, azul y granate cruzadas por formas negras y blancas.",
  },

  "brevedad-vida": {
    archivo: "Palmyra, Syria - 2.jpg",
    autor: "Las ruinas de Palmira, en Siria, al atardecer. Fotografía de James Gordon, 2008.",
    licencia: "CC BY 2.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3APalmyra%2C%20Syria%20-%202.jpg",
    foco: "45% 58%",
    alt: "Una ciudad antigua en ruinas encendida por la luz naranja del atardecer.",
  },

  "etica-nicomaco": {
    archivo: "Aristotle with a Bust of Homer MET DP319026.jpg",
    autor: "Aristóteles ante un busto de Homero, óleo de Rembrandt, 1653. Metropolitan Museum of Art, Nueva York.",
    licencia: "CC0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AAristotle%20with%20a%20Bust%20of%20Homer%20MET%20DP319026.jpg",
    foco: "52% 48%",
    alt: "Un hombre de barba con sombrero y cadena de oro apoya la mano en un busto de piedra.",
  },

  "arte-guerra": {
    archivo: "Xian 12.JPG",
    autor: "Los guerreros de terracota de Xi'an, en las fosas del mausoleo. Fotografía de ReeveJ, 2012.",
    licencia: "CC BY-SA 3.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AXian%2012.JPG",
    foco: "50% 50%",
    alt: "Filas de guerreros de terracota alineados en las trincheras de la excavación.",
  },

  "republica-platon": {
    archivo: "The School of Athens by Raffaello Sanzio da Urbino.jpg",
    autor: "La escuela de Atenas, fresco de Rafael, 1509-1511. Estancias del Vaticano.",
    licencia: "Public domain",
    pdPorEdad: 1520,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AThe%20School%20of%20Athens%20by%20Raffaello%20Sanzio%20da%20Urbino.jpg",
    foco: "50% 55%",
    alt: "Filósofos reunidos bajo bóvedas de piedra; en el centro, dos ancianos bajan una escalinata.",
  },

  "apologia-socrates": {
    archivo: "David - The Death of Socrates.jpg",
    autor: "La muerte de Sócrates, óleo de Jacques-Louis David, 1787. Metropolitan Museum of Art, Nueva York.",
    licencia: "Public domain",
    pdPorEdad: 1825,
    fuente: "https://commons.wikimedia.org/wiki/File%3ADavid%20-%20The%20Death%20of%20Socrates.jpg",
    foco: "52% 50%",
    alt: "Sócrates sentado en el lecho alarga la mano hacia la copa mientras sus discípulos se lamentan.",
  },

  "pedro-paramo": {
    archivo: "Iglesia de Guadalupe en Real de Catorce -024 5 6.jpg",
    autor: "Camino a la iglesia de Guadalupe, en Real de Catorce, San Luis Potosí. Fotografía de Jaime Flores, 2012.",
    licencia: "CC BY-SA 3.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AIglesia%20de%20Guadalupe%20en%20Real%20de%20Catorce%20-024%205%206.jpg",
    foco: "50% 50%",
    alt: "Un camino empedrado entre muros de piedra que sube hacia la torre de una iglesia, en blanco y negro.",
  },

  "guardian-centeno": {
    archivo: "Central Park Mall during Stella Snowstorm (Unsplash).jpg",
    autor: "El paseo de los olmos de Central Park bajo la nevada. Fotografía de Emanuel Hahn, 2017.",
    licencia: "CC0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ACentral%20Park%20Mall%20during%20Stella%20Snowstorm%20(Unsplash).jpg",
    foco: "50% 45%",
    alt: "Un paseo de árboles pelados cubierto de nieve, con dos figuras pequeñas al fondo.",
  },

  "sombra-viento": {
    archivo: "Mafra's Convent - Palace - Bibliothéque -Overview- (50177262438).jpg",
    autor: "Biblioteca del palacio-convento de Mafra, Portugal. Fotografía de Pedro Ribeiro Simões, 2020.",
    licencia: "CC BY 2.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AMafra's%20Convent%20-%20Palace%20-%20Biblioth%C3%A9que%20-Overview-%20(50177262438).jpg",
    foco: "50% 55%",
    alt: "Una sala de biblioteca larguísima, con bóveda blanca y estanterías de madera hasta el fondo.",
  },

  alquimista: {
    archivo: "Where? follow me- (Unsplash).jpg",
    autor: "Una figura sola cruzando las dunas. Fotografía de Rubén Bagüés, 2017.",
    licencia: "CC0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AWhere%3F%20follow%20me-%20(Unsplash).jpg",
    foco: "45% 60%",
    alt: "Un hombre vestido de blanco camina por una duna anaranjada dejando un rastro de huellas.",
  },

  hobbit: {
    archivo: "Morning, Cotswolds, Gloucestershire - Flickr - Kumweni.jpg",
    autor: "Mañana de octubre en los Cotswolds, Gloucestershire. Fotografía de Kumweni, 2015.",
    licencia: "CC BY 2.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AMorning%2C%20Cotswolds%2C%20Gloucestershire%20-%20Flickr%20-%20Kumweni.jpg",
    foco: "50% 55%",
    alt: "Colinas verdes con setos y árboles de otoño, ovejas pastando y niebla al fondo.",
  },

  "dorian-gray": {
    archivo: "Narcissus-Caravaggio (1594-96).jpg",
    autor: "Narciso, óleo de Caravaggio, hacia 1599. Galleria Nazionale d'Arte Antica, Roma.",
    licencia: "Public domain",
    pdPorEdad: 1610,
    fuente: "https://commons.wikimedia.org/wiki/File%3ANarcissus-Caravaggio%20(1594-96).jpg",
    foco: "50% 30%",
    alt: "Un joven inclinado sobre el agua mira su propio reflejo, en la oscuridad.",
  },

  "viejo-mar": {
    archivo: "Winslow Homer - The Gulf Stream - Metropolitan Museum of Art.jpg",
    autor: "La corriente del Golfo, óleo de Winslow Homer, 1899. Metropolitan Museum of Art, Nueva York.",
    licencia: "Public domain",
    pdPorEdad: 1910,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AWinslow%20Homer%20-%20The%20Gulf%20Stream%20-%20Metropolitan%20Museum%20of%20Art.jpg",
    foco: "45% 52%",
    alt: "Un hombre solo en una barca desarbolada, rodeado de tiburones, sobre un mar azul revuelto.",
  },

  mujercitas: {
    archivo: "Julaftonen av Carl Larsson 1904.jpg",
    autor: "Nochebuena, acuarela de Carl Larsson, 1904.",
    licencia: "Public domain",
    pdPorEdad: 1919,
    fuente: "https://commons.wikimedia.org/wiki/File%3AJulaftonen%20av%20Carl%20Larsson%201904.jpg",
    foco: "28% 45%",
    alt: "Una casa en Nochebuena: la mesa puesta con velas y platos y las hijas entrando con la comida.",
  },

  "matar-ruisenor": {
    archivo:
      "2025-09-13 16 31 58 Live Oak draped with Spanish moss near the north shore of Elm Lake within Brazos Bend State Park in Fort Bend County, Texas.jpg",
    autor: "Roble americano cubierto de barba de viejo en Brazos Bend, Texas. Fotografía de 2025.",
    licencia: "CC BY-SA 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3A2025-09-13%2016%2031%2058%20Live%20Oak%20draped%20with%20Spanish%20moss%20near%20the%20north%20shore%20of%20Elm%20Lake%20within%20Brazos%20Bend%20State%20Park%20in%20Fort%20Bend%20County%2C%20Texas.jpg",
    foco: "50% 45%",
    alt: "Un roble enorme del que cuelgan barbas de musgo gris, contra un cielo azul.",
  },

  "1984": {
    archivo: "Moscow State University 6.JPG",
    autor: "Torre central de la Universidad Estatal de Moscú. Fotografía de Fred Schaerli, 2013.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AMoscow%20State%20University%206.JPG",
    foco: "50% 40%",
    alt: "La aguja escalonada de un rascacielos estalinista recortada contra un cielo azul limpio.",
  },

  "cien-anos": {
    archivo: "Henri Rousseau, The Equatorial Jungle, 1909, NGA 46688.jpg",
    autor: "La selva ecuatorial, óleo de Henri Rousseau, 1909. National Gallery of Art, Washington.",
    licencia: "CC0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AHenri%20Rousseau%2C%20The%20Equatorial%20Jungle%2C%201909%2C%20NGA%2046688.jpg",
    foco: "50% 45%",
    alt: "Una selva pintada hoja a hoja, con flores rosas y dos animales escondidos entre la maleza.",
  },

  "madame-bovary": {
    archivo: "Carl Holsøe - Interiør med læsende kvinde ved vinduet.png",
    autor: "Interior con mujer leyendo junto a la ventana, óleo de Carl Holsøe.",
    licencia: "Public domain",
    pdPorEdad: 1935,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3ACarl%20Hols%C3%B8e%20-%20Interi%C3%B8r%20med%20l%C3%A6sende%20kvinde%20ved%20vinduet.png",
    foco: "62% 45%",
    alt: "Una mujer sentada de espaldas lee junto a una ventana encalada, en un salón de paredes rojas.",
  },

  "orgullo-prejuicio": {
    archivo: "Chatsworth House 2014 12 08 3 Chatsworth (83) edit.jpg",
    autor: "Fachada de Chatsworth House, en Derbyshire. Fotografía de Julie Clarke, 2014.",
    licencia: "CC BY 2.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AChatsworth%20House%202014%2012%2008%203%20Chatsworth%20(83)%20edit.jpg",
    foco: "52% 45%",
    alt: "Una gran casa de campo inglesa de piedra dorada al sol, con el césped delante y un seto de hayas al lado.",
  },

  "rebelion-granja": {
    archivo:
      "Gerhard Munthe - Pigs in Moonlight - NG.M.01304 - National Museum of Art, Architecture and Design.jpg",
    autor: "Cerdos a la luz de la luna, óleo de Gerhard Munthe, 1880.",
    licencia: "Public domain",
    pdPorEdad: 1929,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AGerhard%20Munthe%20-%20Pigs%20in%20Moonlight%20-%20NG.M.01304%20-%20National%20Museum%20of%20Art%2C%20Architecture%20and%20Design.jpg",
    foco: "62% 55%",
    alt: "Dos cerdos hozando junto a un granero rojo, bajo una loma oscura.",
  },

  "mundo-feliz": {
    archivo: "Chrysler Building At Night.jpg",
    autor: "La corona del edificio Chrysler de Nueva York de noche. Fotografía de Russ Allison Loar, 2011.",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File%3AChrysler%20Building%20At%20Night.jpg",
    foco: "50% 42%",
    alt: "La aguja de acero del edificio Chrysler iluminada en la noche, entre las luces de la ciudad.",
  },

  fahrenheit: {
    archivo: "Close-up of a Fire.jpg",
    autor: "Llamas de una hoguera de leña, fotografía de Thomas Kirchel, 2020.",
    licencia: "CC BY 4.0",
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AClose-up%20of%20a%20Fire.jpg",
    foco: "50% 55%",
    alt: "Llamas anaranjadas subiendo entre troncos al rojo, sobre un fondo negro.",
  },

  "crimen-castigo": {
    archivo: "Vasily Perov - Портрет Ф.М.Достоевского - Google Art Project.jpg",
    autor: "Retrato de Dostoievski, óleo de Vasili Perov, 1872. Galería Tretiakov, Moscú.",
    licencia: "Public domain",
    pdPorEdad: 1882,
    fuente:
      "https://commons.wikimedia.org/wiki/File%3AVasily%20Perov%20-%20%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%20%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20-%20Google%20Art%20Project.jpg",
    foco: "52% 32%",
    alt: "Dostoievski sentado de perfil, con las manos cruzadas, sobre un fondo oscuro.",
  },
};
