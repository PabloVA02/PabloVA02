import { CATASTROFES } from "./historias/catastrofes";
import { CRIMEN } from "./historias/crimen";

/* ==========================================================================
   Shorts: historias sueltas de dos minutos.

   La diferencia con un capítulo de Books no es solo la longitud. Un capítulo
   explica un tema; un short cuenta UNA cosa y la suelta.

   FORMA FIJA. Todos los shorts tienen exactamente las mismas páginas:

       portada  →  página 1  →  página 2  →  página 3

   Cuatro pantallas, cuatro deslizamientos contando el primero, unas 420
   palabras: dos minutos de lectura. No es una limitación, es lo que hace que
   la sección se pueda recorrer sin pensar — sabes lo que te vas a encontrar
   antes de abrir, y eso es justo lo que permite abrir muchos.

   Cada página lleva un rótulo corto, su bloque de texto y, como mucho, UN
   golpe visual: una cifra grande o una frase suelta. Uno por página y siempre
   en el mismo sitio; si cada página inventara su maquetación, leer diez
   seguidas cansaría.

   FOTOGRAFÍAS
   Reales, de Wikimedia Commons, en dominio público o con licencia Creative
   Commons. Se piden por `Special:FilePath`, que es la dirección estable de
   Commons: no depende del hash interno del fichero, así que no se rompe
   cuando Commons reorganiza su almacenamiento. Cada foto guarda autoría y
   licencia porque las CC-BY lo exigen, y esa línea se pinta en pantalla.

   Una historia sin foto NO es una historia rota: `encargo` describe la imagen
   que le toca, y hasta que llegue se dibuja su cartel —generado a partir del
   id, distinto para cada historia—. El diseño no depende de la red ni de que
   el archivo esté ya resuelto.
   ========================================================================== */

export type Foto = {
  /** Nombre exacto del fichero en Commons, tal cual, con espacios. */
  archivo: string;
  autor: string;
  licencia: string;
  /** Qué parte no se puede perder al recortar (CSS object-position). */
  foco?: string;
  /** Descripción para quien no ve la imagen. */
  alt: string;
};

export function urlFoto(foto: Foto, ancho = 1400) {
  const nombre = encodeURIComponent(foto.archivo.replace(/ /g, "_"));
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${nombre}?width=${ancho}`;
}

/** El golpe visual de una página. Como mucho uno, y nunca dos seguidos. */
export type Destacado =
  /** Una cifra que se sostiene sola. Sube desde cero si es un número. */
  | { tipo: "cifra"; cifra: string; unidad: string }
  /** La frase que hace girar la historia. */
  | { tipo: "frase"; frase: string };

export type Pagina = {
  /** Rótulo corto, dos o tres palabras: le da al ojo dónde agarrarse. */
  rotulo: string;
  /** El bloque. Unas 110-130 palabras; admite <strong> y <em>. */
  texto: string;
  destacado?: Destacado;
};

export type Short = {
  id: string;
  titulo: string;
  /** La frase que se lee en el muro, debajo del título. */
  gancho: string;
  categoria: string;
  /** Color de acento: tiñe el fondo de lectura, el cartel y el progreso. */
  color: string;
  /** La portada, cuando ya hay foto real. Si no, manda `encargo`. */
  foto?: Foto;
  /** Qué imagen le toca a esta historia. Es el pie y es el encargo. */
  encargo: string;
  /** Texto de la portada, debajo de la foto. Unas 60 palabras. */
  entrada: string;
  /** Siempre tres. La forma es la misma en todas las historias. */
  paginas: [Pagina, Pagina, Pagina];
};

/** Minutos de lectura previstos. Iguales en todos, porque la forma es fija. */
export const MINUTOS = 2;

/**
 * El orden del muro. Se van sumando ficheros por temas, y dentro de cada uno
 * las historias están puestas a mano: la primera de cada tema es la que mejor
 * engancha, no la más antigua.
 */
/**
 * Los temas se alternan a propósito: dos catástrofes seguidas cansan, y lo que
 * mantiene a alguien deslizando es no saber qué viene. Se intercalan.
 */
function intercala(...grupos: Short[][]): Short[] {
  const salida: Short[] = [];
  const largo = Math.max(...grupos.map((g) => g.length));
  for (let i = 0; i < largo; i++) {
    for (const g of grupos) if (g[i]) salida.push(g[i]);
  }
  return salida;
}

export const SHORTS: Short[] = intercala(CATASTROFES, CRIMEN);
