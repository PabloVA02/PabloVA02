import { ARTE } from "./historias/arte";
import { AVIACION } from "./historias/aviacion";
import { BICHOS } from "./historias/bichos";
import { CATASTROFES } from "./historias/catastrofes";
import { CINE } from "./historias/cine";
import { CIUDADES } from "./historias/ciudades";
import { COCINA } from "./historias/cocina";
import { COSMOS } from "./historias/cosmos";
import { CRIMEN } from "./historias/crimen";
import { CUERPO } from "./historias/cuerpo";
import { DEPORTE } from "./historias/deporte";
import { DINERO } from "./historias/dinero";
import { ESPIONAJE } from "./historias/espionaje";
import { FIGURAS } from "./historias/figuras";
import { HIELO } from "./historias/hielo";
import { INVENTOS } from "./historias/inventos";
import { JUEGOS } from "./historias/juegos";
import { LENGUAS } from "./historias/lenguas";
import { MAPAS } from "./historias/mapas";
import { MAR } from "./historias/mar";
import { MATEMATICAS } from "./historias/matematicas";
import { MEDICINA } from "./historias/medicina";
import { MUSICA } from "./historias/musica";
import { OBJETOS } from "./historias/objetos";
import { PALABRAS } from "./historias/palabras";
import { PLANTAS } from "./historias/plantas";
import { SUENO } from "./historias/sueno";
import { TECNOLOGIA } from "./historias/tecnologia";

/* ==========================================================================
   Shorts: historias sueltas de dos minutos.

   La diferencia con un capítulo de Books no es solo la longitud. Un capítulo
   explica un tema; un short cuenta UNA cosa y la suelta.

   FORMA FIJA. Todos los shorts tienen exactamente las mismas páginas:

       portada  →  página 1  →  página 2  →  página 3

   Cuatro pantallas, cuatro deslizamientos contando el primero, entre 320 y
   420 palabras: dos minutos de lectura. No es una limitación, es lo que hace que
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

type FotoComun = {
  autor: string;
  licencia: string;
  /** Qué parte no se puede perder al recortar (CSS object-position). */
  foco?: string;
  /** Descripción para quien no ve la imagen. */
  alt: string;
};

/**
 * Una fotografía viene de uno de dos sitios, y nunca de los dos:
 *
 *   `archivo`  el nombre del fichero en Wikimedia Commons. Se pide por red.
 *   `local`    una imagen propia, empaquetada CON la aplicación.
 *
 * La local siempre gana, y por un motivo que no es de gusto: sin red no hay
 * Commons. En un visor con la política de seguridad cerrada, en un avión o en
 * el metro, una portada que depende de un servidor externo no existe. La que
 * viaja dentro del paquete se ve siempre.
 *
 * El tipo es una unión y no un objeto con dos campos opcionales para que no se
 * pueda escribir una ficha con los dos ni con ninguno.
 */
export type Foto =
  | (FotoComun & { archivo: string; local?: never })
  | (FotoComun & { local: string; archivo?: never });

export function urlFoto(foto: Foto, ancho = 1400) {
  // Una imagen propia ya viene resuelta por el empaquetador: o es una ruta con
  // su huella o es la imagen entera incrustada. No hay nada que construir. Se
  // pregunta por `archivo` y no por `local` porque `archivo` es el campo
  // obligatorio de su variante, y es el único que discrimina la unión.
  if (foto.archivo === undefined) return foto.local;
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
  /** El bloque. Entre 90 y 115 palabras, que es lo que mide el muro entero;
      admite <strong> y <em>. */
  texto: string;
  destacado?: Destacado;
};

export type Short = {
  id: string;
  /**
   * SUJETO + PROMESA, y el sujeto delante.
   *
   *     Julio César: 23 puñaladas y solo una mortal
   *     Titanic: treinta y siete segundos
   *
   * Un título puramente misterioso —«Treinta y siete segundos»— es más bonito
   * y funciona peor: en un pase donde se decide en un segundo si sigues o
   * subes, el nombre conocido es lo que frena el dedo. Primero se reconoce el
   * tema, después se promete algo concreto que no sabes de él. Ocho palabras
   * como mucho: en dos líneas de portada no cabe más.
   */
  titulo: string;
  /** La frase que remata el título en la portada. Una sola, en voz alta. */
  gancho: string;
  categoria: string;
  /**
   * Marca las que son UN DATO y no una historia.
   *
   * La diferencia no es de tamaño, es de forma: una historia tiene fechas,
   * gente y un giro —alguien hizo algo y salió de otra manera—; un dato
   * curioso es una sola cosa cierta que se sostiene sola y que las tres
   * páginas se dedican a rodear. Las dos enganchan, pero no se leen igual, y
   * decirlo en la portada evita la decepción de entrar buscando una cosa y
   * encontrarse la otra.
   */
  curioso?: true;
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

export const SHORTS: Short[] = intercala(
  FIGURAS,
  COSMOS,
  CATASTROFES,
  BICHOS,
  ARTE,
  AVIACION,
  CUERPO,
  MAPAS,
  MUSICA,
  CINE,
  CRIMEN,
  PALABRAS,
  MAR,
  CIUDADES,
  SUENO,
  DEPORTE,
  INVENTOS,
  OBJETOS,
  PLANTAS,
  LENGUAS,
  TECNOLOGIA,
  COCINA,
  MATEMATICAS,
  HIELO,
  MEDICINA,
  ESPIONAJE,
  JUEGOS,
  DINERO,
);
