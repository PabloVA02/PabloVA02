/* ==========================================================================
   Iconografía y portada. Todo dibujado a mano en SVG: ninguna librería de
   iconos, ninguna imagen externa. Trazo de 1.8 y esquinas redondeadas para
   que peguen con las formas planas de la escena.
   ========================================================================== */

const trazo = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GlyphBack() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M11 4 L6 9 L11 14" {...trazo} />
    </svg>
  );
}

export function GlyphClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M4.5 4.5 L13.5 13.5 M13.5 4.5 L4.5 13.5" {...trazo} />
    </svg>
  );
}

export function GlyphFlag() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path d="M4.5 15 V3 M4.5 3.6 H12.6 L10.9 6.9 L12.6 10.2 H4.5" {...trazo} />
    </svg>
  );
}

export function GlyphShare() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path d="M8.5 11.4 V2.6 M5.3 5.6 L8.5 2.4 L11.7 5.6 M3.4 9.6 V13.4 A1.2 1.2 0 0 0 4.6 14.6 H12.4 A1.2 1.2 0 0 0 13.6 13.4 V9.6" {...trazo} />
    </svg>
  );
}

export function GlyphHeart({ on }: { on: boolean }) {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path
        d="M8.5 14.2 L3.6 9.3 A3.1 3.1 0 0 1 8.5 5.4 A3.1 3.1 0 0 1 13.4 9.3 Z"
        {...trazo}
        fill={on ? "currentColor" : "none"}
      />
    </svg>
  );
}

export function GlyphTick() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
      <path
        d="M2.8 5.7 L4.6 7.5 L8.2 3.6"
        fill="none"
        stroke="var(--paper)"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlyphAsk() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" aria-hidden>
      <path d="M6.6 9.5 H12.4 M10 7.1 L12.4 9.5 L10 11.9" {...trazo} stroke="var(--paper)" strokeWidth="2" />
    </svg>
  );
}

/**
 * Portada del libro: la misma idea de la lección resumida en una marca
 * geométrica — una pieza entera arriba, la caída, y lo que queda abajo.
 */
export function CoverArt() {
  return (
    <svg viewBox="0 0 156 208" width="156" height="208" aria-hidden>
      <rect width="156" height="208" fill="var(--ink)" />
      <circle cx="112" cy="46" r="44" fill="var(--plum)" opacity="0.5" />
      {/* Columnas: el pórtico */}
      {[26, 48, 70, 92, 114].map((x) => (
        <rect key={x} x={x} y="86" width="11" height="62" rx="2" fill="var(--paper)" opacity="0.85" />
      ))}
      <path d="M 16 86 L 78 54 L 140 86 Z" fill="var(--ochre)" />
      <rect x="18" y="148" width="120" height="7" rx="3" fill="var(--paper)" opacity="0.85" />
      {/* Rollo */}
      <g transform="translate(112 168)">
        <rect x="-26" y="-8" width="52" height="16" rx="8" fill="var(--clay)" />
        <circle cx="-26" cy="0" r="8" fill="var(--skin)" />
        <circle cx="26" cy="0" r="8" fill="var(--skin)" />
      </g>
      <rect x="18" y="166" width="58" height="5" rx="2.5" fill="var(--paper)" opacity="0.8" />
      <rect x="18" y="177" width="34" height="5" rx="2.5" fill="var(--paper)" opacity="0.4" />
    </svg>
  );
}

/* El marcador, hueco o macizo. Relleno es «ya está en tu biblioteca»: el
   trazo solo se lee como un botón, y la silueta llena como un estado. */
export function GlyphGuardar({ relleno = false }: { relleno?: boolean } = {}) {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path
        d="M4.6 3.2 H12.4 V14.2 L8.5 11 L4.6 14.2 Z"
        {...trazo}
        fill={relleno ? "currentColor" : "none"}
      />
    </svg>
  );
}

export function GlyphDescargar() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path d="M8.5 3 V11 M5.4 8 L8.5 11.2 L11.6 8 M3.6 13.6 H13.4" {...trazo} />
    </svg>
  );
}

/* Los tres puntos del menú de una cubierta en la biblioteca. Macizos y no de
   trazo: a diecisiete puntos un aro de 1,8 se cierra y quedan tres manchas. */
export function GlyphTresPuntos() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <g fill="currentColor">
        <circle cx="3" cy="8.5" r="1.5" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <circle cx="14" cy="8.5" r="1.5" />
      </g>
    </svg>
  );
}

/* Quitar de la biblioteca: el marcador tachado. La raya va del mismo grosor
   que el trazo para que no parezca un error de dibujo. */
export function GlyphQuitar() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path d="M4.6 3.2 H12.4 V14.2 L8.5 11 L4.6 14.2 Z M3 14.4 L14 3.4" {...trazo} />
    </svg>
  );
}

export function GlyphAdelante() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M7 4 L12 9 L7 14" {...trazo} />
    </svg>
  );
}

/**
 * El rayo de Shorts. Relleno, no de trazo: es la marca de la sección y tiene
 * que aguantar a 20 px en la barra y a 60 px en la cabecera del muro. Un
 * trazo fino se deshace al reducirlo; una silueta maciza, no.
 */
export function GlyphRayo({ tamano = 20 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M13.4 2 L4.6 13.2 A0.7 0.7 0 0 0 5.1 14.3 H10 L9 21.6 A0.5 0.5 0 0 0 9.9 22 L19.4 10.4 A0.7 0.7 0 0 0 18.9 9.3 H13.9 L14.9 2.4 A0.5 0.5 0 0 0 13.4 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Libros: un libro ABIERTO, las dos hojas macizas y el lomo de por medio.
 *
 * Antes eran tres lomos de canto —dos rectos y uno inclinado, a modo de
 * estantería—. A 22 puntos, que es como se ve en la barra, tres rectángulos
 * verticales de cuatro de ancho no se leen como libros: se leen como tres
 * barras, y con la opacidad escalonada parecían además un gráfico. El libro
 * abierto tiene silueta propia —la uve del lomo y las dos hojas que se abren
 * hacia fuera— y esa silueta se reconoce a cualquier tamaño.
 *
 * Va relleno y no de trazo, por lo mismo que el rayo de Shorts: un trazo fino
 * se deshace al reducirlo. Y todo en curvas, sin arcos ni rotaciones, con la
 * hoja derecha espejo exacto de la izquierda sobre x = 12; la derecha lleva un
 * punto menos de opacidad, que es lo que da el pliegue sin dibujarlo.
 */
export function GlyphLibros({ tamano = 20 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M11.2 6.6 C9.3 5 6.7 4.1 3.9 3.9 C2.8 3.8 2 4.6 2 5.6 V16 C2 16.9 2.7 17.6 3.6 17.6 C6.4 17.8 8.9 18.7 10.7 20.1 C10.9 20.2 11.2 20.1 11.2 19.8 Z"
        fill="currentColor"
      />
      <path
        d="M12.8 6.6 C14.7 5 17.3 4.1 20.1 3.9 C21.2 3.8 22 4.6 22 5.6 V16 C22 16.9 21.3 17.6 20.4 17.6 C17.6 17.8 15.1 18.7 13.3 20.1 C13.1 20.2 12.8 20.1 12.8 19.8 Z"
        fill="currentColor"
        opacity="0.78"
      />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Los seis de la ficha del libro

   Tres para la fila de datos —puntos clave, minutos y páginas—, el visto de
   la lista de «Aprenderás» y los dos de los botones del pie. Van de trazo y
   no macizos, al revés que los de la barra: ahí compiten con una etiqueta a
   20 px y aquí acompañan a un texto, así que lo que se pide es que no pesen
   más que él.
   -------------------------------------------------------------------------- */

/** Puntos clave: tres renglones con su punto delante, como un índice. */
export function GlyphPuntos({ tamano = 15 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 16 16" aria-hidden>
      <g {...trazo} strokeWidth="1.6">
        <path d="M6 4 H14 M6 8 H14 M6 12 H11.5" />
      </g>
      <g fill="currentColor">
        <circle cx="2.6" cy="4" r="1.15" />
        <circle cx="2.6" cy="8" r="1.15" />
        <circle cx="2.6" cy="12" r="1.15" />
      </g>
    </svg>
  );
}

/** Minutos: la esfera y las dos agujas, a menos cuarto de las tres. */
export function GlyphReloj({ tamano = 15 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 16 16" aria-hidden>
      <g {...trazo} strokeWidth="1.6">
        <circle cx="8" cy="8" r="6.2" />
        <path d="M8 4.4 V8.2 L10.7 9.8" />
      </g>
    </svg>
  );
}

/** Páginas: dos hojas, la de atrás asomando. */
export function GlyphPaginas({ tamano = 15 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 16 16" aria-hidden>
      <g {...trazo} strokeWidth="1.6">
        <rect x="1.5" y="1.9" width="9" height="11.4" rx="1.6" />
        <path d="M12.9 4.2 A1.6 1.6 0 0 1 14.5 5.8 V12.4 A1.7 1.7 0 0 1 12.8 14.1 H5.6" />
      </g>
    </svg>
  );
}

/** El visto de la lista. Solo el trazo: el círculo lo pone el CSS. */
export function GlyphVisto({ tamano = 13 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 14 14" aria-hidden>
      <path
        d="M3 7.4 L5.7 10 L11 4.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Escuchar: la diadema y las dos copas, macizas para que se lean en el botón. */
export function GlyphAuriculares({ tamano = 19 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 20 20" aria-hidden>
      <path
        d="M3.4 12.4 V10.6 A6.6 6.6 0 0 1 16.6 10.6 V12.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <rect x="1.9" y="11.4" width="4" height="6.2" rx="2" fill="currentColor" />
      <rect x="14.1" y="11.4" width="4" height="6.2" rx="2" fill="currentColor" />
    </svg>
  );
}

/** Leer: cuatro renglones de texto, el último corto. */
export function GlyphLeer({ tamano = 19 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 20 20" aria-hidden>
      <g fill="currentColor">
        <rect x="2.4" y="3.6" width="15.2" height="2" rx="1" />
        <rect x="2.4" y="8" width="15.2" height="2" rx="1" />
        <rect x="2.4" y="12.4" width="11" height="2" rx="1" />
        <rect x="2.4" y="16" width="6.6" height="2" rx="1" />
      </g>
    </svg>
  );
}

/* Los dos del reproductor. Macizos y sin hueco dentro: van sobre un disco
   claro y a 16 px, y un triángulo de trazo a ese tamaño se deshace. */
export function GlyphPlay({ tamano = 17 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 18 18" aria-hidden>
      <path d="M4.6 2.6 A0.9 0.9 0 0 1 6 1.85 L14.6 8.25 A0.9 0.9 0 0 1 14.6 9.75 L6 16.15 A0.9 0.9 0 0 1 4.6 15.4 Z" fill="currentColor" />
    </svg>
  );
}

export function GlyphPausa({ tamano = 17 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 18 18" aria-hidden>
      <rect x="3.6" y="2.4" width="4" height="13.2" rx="1.4" fill="currentColor" />
      <rect x="10.4" y="2.4" width="4" height="13.2" rx="1.4" fill="currentColor" />
    </svg>
  );
}

/** Perfil: cabeza y hombros, macizo, para que aguante a 20 px como el rayo. */
export function GlyphPerfil({ tamano = 20 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="8.4" r="4.3" fill="currentColor" />
      <path
        d="M4.2 20.4 C4.2 16.1 7.6 13.6 12 13.6 C16.4 13.6 19.8 16.1 19.8 20.4 Z"
        fill="currentColor"
        opacity="0.78"
      />
    </svg>
  );
}

/* El marcador de la pestaña de Biblioteca. Es el mismo dibujo que el botón de
   guardar de las cubiertas, y a propósito: lo que hay en esa pantalla es
   justo lo que se ha guardado con aquel botón. */
export function GlyphBiblioteca({ tamano = 22 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M6.2 3.6 H17.8 V20.6 L12 16.4 L6.2 20.6 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* El regalo: caja con lazo, de trazo. Macizo se leía como un icono de sistema
   y lo que tiene que parecer es un paquete sin abrir. */
export function GlyphRegalo({ tamano = 21 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 24 24" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round">
        <rect x="3.2" y="9.4" width="17.6" height="11.4" rx="1.4" />
        <rect x="2.2" y="5.6" width="19.6" height="3.8" rx="1.2" />
        <path d="M12 5.6 V20.8" />
        <path d="M12 5.6 C12 5.6 10.9 2.2 8.6 2.2 C6.9 2.2 6.4 4.9 8.2 5.6 Z" />
        <path d="M12 5.6 C12 5.6 13.1 2.2 15.4 2.2 C17.1 2.2 17.6 4.9 15.8 5.6 Z" />
      </g>
    </svg>
  );
}

/* La lupa de la biblioteca. Trazo, para que case con el marcador. */
export function GlyphLupa({ tamano = 22 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 24 24" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="10.6" cy="10.6" r="6.8" />
        <path d="M15.6 15.6 L20.6 20.6" />
      </g>
    </svg>
  );
}

/* La llama de la racha, para tamaño pequeño.
   
   La de `Racha.tsx` está dibujada para 108 puntos: lleva un contorno de nueve
   de grosor que a 22 se come la figura entera y la deja en un borrón. Esta es
   otra pieza, no la misma encogida: sin contorno, con dos cuerpos —el fuego
   de fuera y el núcleo— y un degradado en cada uno, que es lo que hace que a
   este tamaño se lea como fuego y no como una gota naranja.

   Los tonos van del amarillo de abajo al rojo de la punta, que es como arde
   de verdad: lo más caliente está pegado a la base. */
export function GlyphLlama({ tamano = 22 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id="fuego-fuera" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#FFB13D" />
          <stop offset="0.55" stopColor="#FF7A18" />
          <stop offset="1" stopColor="#F0410E" />
        </linearGradient>
        <linearGradient id="fuego-nucleo" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#FFF6C2" />
          <stop offset="1" stopColor="#FFC93C" />
        </linearGradient>
      </defs>
      <path
        d="M12.4 1.8c3.3 4.3 6.7 6.8 6.7 11.3a7.1 7.1 0 0 1-14.2 0c0-3.1 1.9-4.8 3.1-7.3.4 2.1 1.3 3 1.9 3.5C9.6 7 10.4 4.2 12.4 1.8z"
        fill="url(#fuego-fuera)"
      />
      <path
        d="M12.7 11.4c1.7 2.3 3 3.4 3 5.3a3.5 3.5 0 0 1-7 0c0-1.7 1.2-2.4 1.9-3.8.2 1.2.7 1.7 1 2-.2-1.3.3-2.5 1.1-3.5z"
        fill="url(#fuego-nucleo)"
      />
    </svg>
  );
}

/* El perfil de la cabecera: cabeza y hombros dentro de un aro, de trazo, para
   que case con la lupa y con el marcador. */
/* EL PERFIL: la cabeza y los hombros, y nada más.

   Pablo, el 4 de septiembre: «el perfil cámbialo, el símbolo, pon otra cosa
   más minimalista y bonita».

   Tenía un aro alrededor, y el aro sobraba por dos razones. La de dibujo: la
   persona ya vive dentro de la pastilla de la cabecera, que es redonda por su
   lado, así que el aro era un segundo círculo dentro del primero y a
   veintitrés puntos los dos trazos se juntaban. Y la de sentido: el aro es lo
   que se pone cuando el icono lleva DENTRO una foto tuya, y aquí no hay foto.

   Lo que queda son dos trazos, la cabeza y los hombros. Se probaron dos: un
   arco de circunferencia limpio y ÉSTE, que es el que eligió Pablo —«perfil
   persona sola»—. La diferencia es que aquí los hombros no son media
   circunferencia sino una curva que se levanta en los extremos, o sea la forma
   que tiene un torso de verdad; y la cabeza es tres décimas mayor, que a
   veintitrés puntos es lo que hace que se lea como una persona y no como una
   seta.
   ========================================================================== */
export function GlyphAvatar({ tamano = 24 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 24 24" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="8.3" r="3.7" />
        <path d="M4.9 20.2c.9-4 3.7-6.2 7.1-6.2s6.2 2.2 7.1 6.2" />
      </g>
    </svg>
  );
}

export function GlyphCandado() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" aria-hidden>
      <rect x="4.2" y="8.4" width="10.6" height="7.6" rx="2" {...trazo} strokeWidth="1.9" />
      <path d="M6.6 8.4 V6.4 A2.9 2.9 0 0 1 12.4 6.4 V8.4" {...trazo} strokeWidth="1.9" />
    </svg>
  );
}

/* El cofre del camino. La tapa es un arco elíptico y no medio círculo: a este
   tamaño el medio círculo se lee como una burbuja, no como una tapa. */
export function GlyphCofre({ tamano = 26 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 24 24" aria-hidden>
      <path d="M3.6 10.6 V18.6 A1.6 1.6 0 0 0 5.2 20.2 H18.8 A1.6 1.6 0 0 0 20.4 18.6 V10.6" {...trazo} />
      <path d="M3.6 10.6 A 8.6 6.4 0 0 1 20.4 10.6" {...trazo} />
      <path d="M3.6 10.6 H20.4" {...trazo} />
      <path d="M10.4 10.6 H13.6 V13.8 H10.4 Z" {...trazo} />
    </svg>
  );
}

/** La copa de la meta: solo aparece cuando el libro está entero. */
export function GlyphTrofeo({ tamano = 26 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 24 24" aria-hidden>
      <path d="M7.5 4 H16.5 V8.6 A4.5 4.5 0 0 1 7.5 8.6 Z" {...trazo} />
      <path d="M7.5 5.2 H5.2 A2.3 2.3 0 0 0 7.7 7.9" {...trazo} />
      <path d="M16.5 5.2 H18.8 A2.3 2.3 0 0 1 16.3 7.9" {...trazo} />
      <path d="M12 13.1 V16.2" {...trazo} />
      <path d="M9 16.2 H15 L16.1 19.8 H7.9 Z" {...trazo} />
    </svg>
  );
}

/**
 * ¿Sabías que…?: una bombilla, maciza y sin rayos alrededor.
 *
 * Va rellena por lo mismo que el rayo de Shorts y el libro de Libros: a
 * veintidós puntos un trazo fino se deshace. Y sin los rayitos que suelen
 * dibujarse alrededor de una bombilla encendida, que a este tamaño se
 * convierten en suciedad y además la confunden con el rayo de la pestaña de
 * al lado. La silueta sola —el globo y la rosca de tres escalones— se
 * reconoce sin ayuda.
 */
export function GlyphBombilla({ tamano = 20 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 24 24" aria-hidden>
      {/* El globo: un círculo que se estrecha abajo hasta la rosca. */}
      <path
        d="M12 2 A7 7 0 0 0 7.6 14.4 C8.6 15.3 9.1 16.2 9.2 17.2 H14.8 C14.9 16.2 15.4 15.3 16.4 14.4 A7 7 0 0 0 12 2 Z"
        fill="currentColor"
      />
      {/* La rosca. Tres escalones y el último más estrecho, que es lo que la
          hace leerse como bombilla y no como seta. */}
      <rect x="9.2" y="18.4" width="5.6" height="1.7" rx="0.85" fill="currentColor" />
      <path
        d="M9.9 21.3 H14.1 A2.1 2.1 0 0 1 12 23 A2.1 2.1 0 0 1 9.9 21.3 Z"
        fill="currentColor"
      />
    </svg>
  );
}
