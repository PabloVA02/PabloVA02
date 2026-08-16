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
