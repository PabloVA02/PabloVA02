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
