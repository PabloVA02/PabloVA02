import { CURIOSIDADES } from "./historias/curiosidades";

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
  /**
   * La ficha de donde sale la licencia. Sin esto, `licencia` es una creencia,
   * no un dato, y la diferencia importa porque el pie de foto se publica.
   *
   * Hay un caso en el que se puede omitir: una obra plana —un cuadro, un
   * grabado, una miniatura, un sello— cuyo autor lleva más de setenta años
   * muerto. Ahí es de dominio público por edad, y la fotografía de una obra
   * plana no crea derechos nuevos. Se pone `pdPorEdad` con el año de muerte
   * del autor y queda justificado solo.
   *
   * Lo que NO vale es dar por hecho que la foto de una estatua o de una
   * moneda es de dominio público porque el objeto sea antiguo. El objeto lo
   * será; la fotografía, que es de un cuerpo con volumen y con luz elegida,
   * tiene su propio autor y su propia licencia.
   */
  fuente?: string;
  /** Año de muerte del autor de una obra plana, cuando es de dominio público por edad. */
  pdPorEdad?: number;
  /** Qué parte no se puede perder al recortar (CSS object-position). */
  foco?: string;
  /** Descripción para quien no ve la imagen. */
  alt: string;
  /**
   * LA PORTADA ALOJADA, cuando la hay: su URL pública en Cloudflare R2.
   *
   * Es la regla de almacenamiento que puso Pablo el 28 de agosto —está entera
   * en el `CLAUDE.md`—: las portadas no viajan dentro de la app, se bajan
   * cuando hacen falta, y en los datos del tema se guarda la URL, no una ruta.
   * Las escribe `scripts/portadas.mjs --sube` y quedan también en
   * `assets/portadas.csv`.
   *
   * Convive con las otras dos procedencias y pierde contra las dos: manda la
   * copia empotrada si la hay —el simulador que abre Pablo es un solo HTML con
   * la política de seguridad cerrada, y ahí una imagen de R2 no carga, la
   * bloquea el navegador sin decir nada—, y si no, la que venga en el paquete.
   * R2 es para la app de verdad. Ver `urlFoto`.
   */
  alojada?: string;
  /**
   * Solo para fotografías de un cuerpo redondo —un planeta, una luna—: dónde
   * cae el disco dentro de la imagen, en porcentaje.
   *
   * Con eso puesto, la portada añade una DERIVA DE NUBES: una copia de la
   * propia fotografía cruzando el disco muy despacio, en luz suave y
   * desenfocada, recortada por una máscara que se apaga antes de llegar al
   * borde. Girar la foto entera no vale —una esfera fotografiada, rotada, se
   * lee como una pegatina dando vueltas— y esto, en cambio, hace lo que hace
   * un planeta de verdad: la superficie se queda quieta y las nubes pasan por
   * delante. En Venus es literal: la atmósfera da la vuelta en cuatro días y
   * el suelo tarda doscientos cuarenta y tres.
   */
  esfera?: { cx: string; cy: string; rx: string; ry: string };
  /**
   * Para originales muy apaisados —un cuadro de museo, un mosaico, una vista
   * aérea— dentro de un marco de móvil.
   *
   * El recorte normal se come el cuadro: en un marco de 430×860 una imagen de
   * 2048×1161 entra por un ojo de cerradura del 28 % de su ancho, así que de
   * un asesinato con sesenta senadores se ven tres togas. La alternativa es
   * enseñarlo entero y colocarlo arriba, con una copia desenfocada llenando el
   * resto para que no queden franjas negras. Es lo mismo que se hizo a mano
   * con la foto de Venus, pero sin tocar el archivo: vale para cualquier
   * imagen ancha que llegue después.
   *
   * `alto` es a qué altura del marco se apoya la banda. No es un `foco`: aquí
   * no se pierde nada al recortar, así que lo único que queda por decidir es
   * dónde descansa la imagen, y para eso `object-position` no sirve —mide
   * sobre el hueco sobrante, no sobre el marco—.
   */
  panoramica?: { alto: string };
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
  // Y si la portada está alojada en R2, esa es la buena: es lo que dice la
  // regla de almacenamiento. Va DESPUÉS de la empotrada —que se mira justo
  // abajo— porque en un visor sin salida a la red R2 no existe.
  // Un visor que no deja salir a la red —el simulador de móvil que se publica
  // como artefacto tiene esa política— deja las fotos empotradas en esta
  // tabla antes de arrancar la app. Si el fichero está ahí, se usa; si no, se
  // pide a Commons como siempre. `scripts/movil.mjs` es quien la rellena.
  const empotrada = (globalThis as Record<string, any>).__FOTOS?.[foto.archivo];
  if (empotrada) return empotrada as string;
  if (foto.alojada) return foto.alojada;
  const nombre = encodeURIComponent(foto.archivo.replace(/ /g, "_"));
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${nombre}?width=${ancho}`;
}

/** El golpe visual de una página. Como mucho uno, y nunca dos seguidos. */
export type Destacado =
  /** Una cifra que se sostiene sola. Sube desde cero si es un número. */
  | { tipo: "cifra"; cifra: string; unidad: string }
  /** La frase que hace girar la historia. */
  | { tipo: "frase"; frase: string };

/**
 * UN BLOQUE DE TEXTO, y de estos se hace una historia.
 *
 * La historia NO viene repartida en páginas. Viene en una tirada de bloques
 * seguidos y la app la reparte al pintar, midiendo el móvil de quien lee: es
 * la regla 3 de `.claude/skills/paginado-shorts/SKILL.md`, y la puso Pablo el
 * 28 de agosto —«divide el contenido en páginas midiendo en tiempo de
 * ejecución… corta cuando el siguiente párrafo no quepa»—.
 *
 * Antes había un guion que abría un navegador, medía y escribía las páginas
 * aquí dentro. Funcionaba y estaba mal: unas páginas calculadas en un móvil de
 * 375 no valen en uno de 430, ni cuando alguien sube el tamaño de letra del
 * sistema, ni al girar el teléfono.
 *
 * Son las cuatro piezas del lector de resúmenes, ni una más:
 */
export type Bloque =
  /** El subtítulo de una sección. Nunca se queda solo al final de una página. */
  | { b: "rotulo"; texto: string }
  /** Un párrafo. Admite `<strong>` y `<em>`. */
  | { b: "parrafo"; texto: string }
  /** Una lista de viñetas. Se parte entre puntos, nunca dentro de uno. */
  | { b: "lista"; puntos: string[]; sigue?: true }
  /**
   * Una cita textual: las palabras de otro, con su firma.
   *
   * No es un rayo. El rayo es la conclusión de la pantalla, escrita por
   * nosotros y en nuestra voz; la cita es de quien la dijo, va entrecomillada
   * y lleva `autor` debajo. Llegaron el 28 de agosto con el «no invento
   * hipótesis» de Newton.
   *
   * `sigue` marca la mitad de abajo de una cita partida entre dos pantallas:
   * se pinta sin la comilla de apertura, que ya salió en la anterior.
   */
  | { b: "cita"; texto: string; autor?: string; sigue?: true }
  /**
   * Un dato curioso al margen, de los que empiezan por «¿Sabías que…?».
   *
   * NO es un rayo, y Pablo lo dejó escrito en su `FORMATO.md`: «no es un
   * insight». El rayo es la conclusión de la sección y va en su caja con el
   * icono; esto es una nota lateral que se lee de pasada. Así que se queda en
   * el hilo del texto, con las mismas medidas que un párrafo, y lo único que
   * lo distingue es que su «¿Sabías que…?» va en el color del tema.
   *
   * Se parte entre pantallas como cualquier párrafo.
   */
  | { b: "dato"; texto: string; sigue?: true }
  /** La caja del rayo: la conclusión de la sección. Nunca abre página.
   *  `sigue` marca la CONTINUACIÓN de un rayo que no cabía entero y se partió
   *  entre dos pantallas: pinta la caja sin el icono, porque el rayo ya salió
   *  en la pantalla anterior y repetirlo se leería como dos destacados. */
  | { b: "rayo"; texto: string; sigue?: true };

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
  /**
   * La frase que remata el título. Una sola, en voz alta.
   *
   * Desde el 27 de agosto la portada NO la pinta —lleva la fotografía y el
   * título y nada más—, así que una historia a la que todavía no le ha
   * llegado el texto no tiene gancho que poner. De ahí que sea opcional: es
   * preferible que falte a que esté puesta una frase de relleno que luego
   * nadie se acuerde de cambiar.
   */
  gancho?: string;
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
  /**
   * Una imagen por pantalla, en orden: portada, página 1, página 2, página 3.
   *
   * Decisión de Pablo, y con razón: si la portada lleva foto y detrás vienen
   * tres pantallas de texto, la segunda es donde la gente se sale. Cuatro
   * imágenes tiran del lector hacia delante.
   *
   * Se ordenan de lejos a cerca —la escena entera, un plano medio, un detalle
   * y otra vez abierto para cerrar— para que se noten distintas sin parecer
   * puestas al azar.
   *
   * Lo que falte cae en `foto`, así que una historia con una sola imagen sigue
   * funcionando: se queda la misma las cuatro pantallas, como hasta ahora.
   */
  fotos?: (Foto | undefined)[];
  /**
   * La fotografía es SOLO de la portada: las páginas van sin banda de imagen,
   * con el texto ocupando la pantalla entera.
   *
   * Pablo, el 28 de agosto, al mandar el texto de los dos primeros temas:
   * «elimina las imágenes de esos temas menos las de la portada y pones el
   * texto solo». No basta con dejar `fotos` con una: `fotoDe()` reparte la de
   * la portada a las pantallas que no tienen la suya —se hizo a propósito,
   * porque repetir la buena era mejor que enseñar el cartel generado—, así
   * que una historia con una sola foto la enseñaría en las diez pantallas.
   * Esto dice lo contrario y lo dice explícitamente.
   *
   * Y no es solo quitar: sin banda de imagen la hoja se queda con la pantalla
   * entera, que es de donde sale el sitio para los textos largos. La banda se
   * comía entre el 26 y el 36 % del alto.
   */
  soloPortada?: true;
  /**
   * El texto de esta historia lo ha escrito Pablo.
   *
   * Sirve para una cosa concreta: `scripts/revisa-shorts.mjs` no la mide. Ese
   * guion comprueba el MOLDE, que es cómo escribo YO —la entrada de 48 a 66
   * palabras, situar en el tiempo, la longitud de cada pantalla, el
   * vocabulario—, y aplicárselo a un texto suyo es corregirle por la espalda,
   * que es justo lo que `MOLDE.md` prohíbe. Sus textos van con su propia
   * norma, que viene escrita en el LEEME de cada zip.
   *
   * Lo que SÍ se les comprueba es todo lo que no es redacción: que la ficha
   * de la foto tenga autor y licencia, que el color esté en la paleta, que el
   * título quepa en una línea y que ninguna pantalla se salga. De eso se
   * encargan `validar.mjs`, `coteja-fotos.mjs` y `scripts/aire.mjs`.
   */
  textoDePablo?: true;
  /** Qué imagen le toca a esta historia. Es el pie y es el encargo. */
  encargo: string;
  /** Texto de la portada, debajo de la foto. Unas 60 palabras.
      Opcional por lo mismo que `gancho`: tampoco se pinta ya en la portada. */
  entrada?: string;
  /** Siempre tres. La forma es la misma en todas las historias. */
  /* Entre dos y cinco. Eran tres clavadas, y obligaba a estirar los temas
     que se agotan en dos y a comprimir los que piden cuatro: la horquilla la
     decide el tema, no la plantilla. El tope existe para que un short siga
     siendo un short. */
  /**
   * EL TEXTO ENTERO, EN BLOQUES SEGUIDOS. Vacío = la portada sola, esperando.
   *
   * No hay número de páginas escrito en ninguna parte: las cuenta la app al
   * repartir, y depende del móvil. Un tema que en un teléfono ocupa nueve
   * pantallas ocupa siete en uno grande, y las dos cosas están bien.
   */
  bloques: Bloque[];
};

/** El texto plano de un bloque, para contar palabras y para leerlo en alto. */
export function textoDeBloque(b: Bloque): string {
  if (b.b === "lista") return b.puntos.join(" ");
  if (b.b === "cita") return b.autor ? `${b.texto} — ${b.autor}` : b.texto;
  return b.texto;
}

/**
 * Minutos de lectura de UNA historia.
 *
 * Era una constante, `MINUTOS = 2`, y decía la verdad mientras todos los
 * shorts tenían tres páginas. Desde el 27 de agosto las páginas son las que
 * pida el tema —dos, tres o cuatro—, así que un número fijo pasa a ser mentira
 * justo para el caso en que más importa: el short corto, que es el que hay que
 * poder anunciar como corto.
 *
 * 200 palabras por minuto es la velocidad de lectura silenciosa de un adulto
 * en castellano y en un móvil. Se redondea hacia arriba y nunca baja de uno.
 *
 * Ahora mismo NO SE PINTA EN NINGUNA PARTE, y es a propósito: la barra de
 * tramos de arriba ya dice lo larga que es la historia —dos rayas o tres— sin
 * gastar una línea de la portada, que va justa. Esto está aquí para cuando
 * haga falta en una lista o en un buscador, y para que el día que se pinte
 * diga la verdad.
 */
export function minutosDe(short: Short): number {
  const cuenta = (t: string) => t.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
  const palabras =
    cuenta(short.entrada ?? "") +
    cuenta(short.gancho ?? "") +
    short.bloques.reduce((t, b) => t + cuenta(textoDeBloque(b)), 0);
  return Math.max(1, Math.round(palabras / 200));
}

/* EL MURO, DE MOMENTO, ES UNA SOLA HISTORIA.

   Aquí había un `intercala()` con doscientos treinta y seis temas dentro, que
   repartía las historias una de cada tema por vuelta para que no salieran dos
   catástrofes seguidas. Con un tema no hay nada que repartir, así que se ha
   ido con ellos: el día que haya dos ficheros se vuelve a escribir en cuatro
   líneas, y mientras tanto no está aquí prometiendo un orden que no existe.

   El 27 de agosto se borraron los 761 shorts viejos para empezar por
   curiosidades y preguntas cotidianas. Ver `historias/curiosidades.ts`. */
const MURO: Short[] = [...CURIOSIDADES];

/* Para grabar el vídeo del anuncio hace falta poder decidir qué historias van
   delante y en qué orden, porque en un anuncio de treinta segundos no cabe el
   muro entero y las que enganchan no son las que quedan primeras.

   Es el mismo mecanismo que `__FOTOS` y `__PANTALLA`: la página deja dicho lo
   que quiere ANTES de que arranque la app. Sin la variable no cambia nada,
   así que la app normal no se entera de que esto existe. Los identificadores
   que no correspondan a ninguna historia se ignoran, y detrás de las elegidas
   va el muro entero, para que se pueda seguir deslizando. */
const ORDEN: unknown = (globalThis as Record<string, unknown>).__ORDEN;

export const SHORTS: Short[] = (() => {
  if (!Array.isArray(ORDEN) || !ORDEN.length) return MURO;
  const porId = new Map(MURO.map((s) => [s.id, s]));
  const elegidas = (ORDEN as string[]).map((id) => porId.get(id)).filter((s): s is Short => !!s);
  if (!elegidas.length) return MURO;
  const puestas = new Set(elegidas.map((s) => s.id));
  return [...elegidas, ...MURO.filter((s) => !puestas.has(s.id))];
})();
