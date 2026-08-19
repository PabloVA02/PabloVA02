/* ==========================================================================
   La voz que lee el resumen en alto.

   Pablo preguntó por el audiolibro y por «la mejor voz posible para este tipo
   de cosas». Hay dos maneras de hacerlo y esta es la primera; la otra está
   explicada al final, porque depende de una decisión suya.

   ── LO QUE HACE ESTO ─────────────────────────────────────────────────────

   Usa la voz que YA VIENE EN EL TELÉFONO, por `speechSynthesis`, que es la
   síntesis de voz del sistema operativo. No pesa nada, funciona sin conexión
   —que es la condición del simulador— y en un iPhone con la voz mejorada de
   español suena bastante bien: no es un actor, pero tampoco el robot de hace
   diez años.

   ── LAS TRES DECISIONES QUE HACEN QUE SUENE TRANQUILA ────────────────────

   1. SE ELIGE LA MEJOR VOZ, no la primera. `getVoices()` devuelve de cinco a
      cuarenta voces según el aparato, y la que sale por defecto suele ser la
      peor. Se puntúa: las «premium», «enhanced» o «neural» son las que Apple
      y Google descargan aparte y suenan claramente mejor; el castellano de
      España va delante porque es la lengua del texto; y a igualdad de todo,
      la voz local antes que la de servidor, que se corta sin conexión.

   2. VA MÁS DESPACIO. `rate: 0.92`. La velocidad normal de estas voces está
      pensada para leer un aviso de dos líneas, y sobre un texto largo suena
      atropellada. Un nueve por ciento menos es la diferencia entre que te lo
      lean y que te lo cuenten.

   3. SE PARTE EN FRASES. Cada frase es una locución aparte, por dos razones:
      una es que Safari en iOS corta las locuciones largas por la mitad y
      Chrome las abandona a los quince segundos; la otra es que entre locución
      y locución hay una pausa natural, y esa pausa es justo lo que hace que
      no parezca un teleprónter.

   ── LO QUE NO HACE ───────────────────────────────────────────────────────

   No es un audiolibro grabado. Para eso hay que generar el audio con un
   sintetizador de estudio —ElevenLabs, o el modelo de voz de OpenAI, que
   admiten instrucciones de tono— y meter los ficheros en la app. Suena
   incomparablemente mejor y tiene dos costes: una clave de API de Pablo, y
   sitio. Un resumen leído son unos quince minutos, o sea entre tres y cuatro
   megas en MP3 mono, y en el fichero que se publica quedan libres seiscientos
   kilobytes. Cabría sacrificando fotografías de los shorts, o publicando el
   audio en otro sitio; las dos cosas son decisión suya.
   ========================================================================== */

/** ¿Sabe hablar este navegador? En un servidor y en un visor capado, no. */
export function hayVoz(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/* Que exista `speechSynthesis` NO significa que se oiga nada. Un Chromium sin
   entorno de escritorio tiene la API y cero voces instaladas, y entonces cada
   locución termina en el mismo milisegundo en que empieza: probándolo aquí, el
   libro entero «se leyó» en dos segundos y las ocho páginas pasaron solas y en
   silencio. Eso es peor que no tener botón. Se comprueba que haya alguna voz
   antes de dejar arrancar, y el lector vigila además que la primera página no
   dure menos de lo humanamente posible. */
export function hayVocesInstaladas(): boolean {
  return hayVoz() && speechSynthesis.getVoices().length > 0;
}

const MEJORADA = /premium|enhanced|neural|siri/i;
/* Las que suenan bien de fábrica, por si el aparato no tiene ninguna
   mejorada: Mónica y Marisol en iOS, Elvira y Álvaro en Windows, la de
   Google en Android. */
const CONOCIDAS = /m[oó]nica|marisol|elvira|[aá]lvaro|paulina|jorge|luc[ií]a|google espa/i;

export function mejorVoz(): SpeechSynthesisVoice | null {
  if (!hayVoz()) return null;
  const castellanas = speechSynthesis.getVoices().filter((v) => v.lang?.toLowerCase().startsWith("es"));
  if (!castellanas.length) return null;
  const nota = (v: SpeechSynthesisVoice) =>
    (MEJORADA.test(v.name) ? 8 : 0) +
    (v.lang.toLowerCase() === "es-es" ? 4 : 0) +
    (CONOCIDAS.test(v.name) ? 2 : 0) +
    (v.localService ? 1 : 0);
  return [...castellanas].sort((a, b) => nota(b) - nota(a))[0] ?? null;
}

/* Las voces llegan tarde en Chrome: `getVoices()` devuelve una lista vacía en
   el primer pintado y se llena en un evento. Quien quiera enseñar el nombre de
   la voz tiene que enterarse de eso. */
export function alCargarVoces(cb: () => void): () => void {
  if (!hayVoz()) return () => {};
  speechSynthesis.addEventListener("voiceschanged", cb);
  return () => speechSynthesis.removeEventListener("voiceschanged", cb);
}

/* Safari no deja hablar si la primera locución no sale de un toque del dedo.
   Esto se llama DENTRO del `onClick` de «Escuchar» y deja la síntesis abierta
   para el resto de la sesión; la locución es una cadena vacía y no se oye. */
export function desbloquea(): void {
  if (!hayVoz()) return;
  try {
    speechSynthesis.speak(new SpeechSynthesisUtterance(""));
  } catch {
    /* Si no se puede, el botón de reproducir del pie lo arregla con un toque. */
  }
}

export function calla(): void {
  if (!hayVoz()) return;
  try {
    speechSynthesis.cancel();
  } catch {
    /* nada que hacer */
  }
}

/* Trozos de como mucho 180 caracteres, cortando por el final de una frase y,
   si no hay, por una coma. Un corte a mitad de oración se oye: la voz baja el
   tono como si hubiera terminado. */
function enFrases(texto: string): string[] {
  const frases = texto.replace(/\s+/g, " ").trim().match(/[^.!?…]+[.!?…]*/g) ?? [];
  const trozos: string[] = [];
  for (const f of frases) {
    const frase = f.trim();
    if (!frase) continue;
    if (frase.length <= 180) {
      trozos.push(frase);
      continue;
    }
    let resto = frase;
    while (resto.length > 180) {
      const corte = resto.lastIndexOf(",", 180);
      const donde = corte > 60 ? corte + 1 : resto.lastIndexOf(" ", 180);
      trozos.push(resto.slice(0, donde).trim());
      resto = resto.slice(donde).trim();
    }
    if (resto) trozos.push(resto);
  }
  return trozos;
}

/* Cuánto se tarda en decir un texto, en segundos. Es una estimación y no hace
   falta que sea mejor: la usa el raíl verde para saber a qué velocidad
   rellenarse, y se reinicia en cada bloque, así que un error del diez por
   ciento no se acumula ni se ve.

   El número sale de medir: estas voces sueltan unos catorce caracteres por
   segundo a velocidad normal, y aquí van al 0,92. Se suma un tercio de segundo
   por frase, que es lo que dura la pausa entre locuciones. */
export function segundosDe(texto: string): number {
  const frases = enFrases(texto).length || 1;
  return texto.length / (14 * 0.92) + frases * 0.33;
}

/**
 * Lee una lista de bloques, uno detrás de otro, y va avisando de por cuál va
 * —y de cuánto va a durar— para que la pantalla pueda seguirlo. Devuelve una
 * función para cortar.
 */
export function lee(
  bloques: string[],
  { alBloque, alFin }: { alBloque?: (i: number, segundos: number) => void; alFin?: () => void },
): () => void {
  if (!hayVoz()) {
    alFin?.();
    return () => {};
  }

  let vivo = true;
  const voz = mejorVoz();
  calla();

  const di = (texto: string) =>
    new Promise<void>((listo) => {
      const u = new SpeechSynthesisUtterance(texto);
      if (voz) u.voice = voz;
      u.lang = voz?.lang ?? "es-ES";
      u.rate = 0.92;
      u.pitch = 1;
      /* `onerror` también resuelve: una locución que falla —porque el sistema
         se quedó sin voz o porque el usuario cambió de app— no puede dejar
         colgada la cadena entera. */
      u.onend = () => listo();
      u.onerror = () => listo();
      speechSynthesis.speak(u);
    });

  void (async () => {
    for (const [i, bloque] of bloques.entries()) {
      if (!vivo) return;
      alBloque?.(i, segundosDe(bloque));
      for (const frase of enFrases(bloque)) {
        if (!vivo) return;
        await di(frase);
      }
    }
    if (vivo) alFin?.();
  })();

  return () => {
    vivo = false;
    calla();
  };
}
