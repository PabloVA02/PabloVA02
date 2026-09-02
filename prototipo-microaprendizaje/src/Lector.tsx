/* ==========================================================================
   El lector por páginas.

   Calcado de la grabación que pasó Pablo. Lo que define la pantalla es que
   NO hay adornos: texto en serifa sobre negro, del ancho de la pantalla menos
   dieciséis puntos a cada lado, y abajo una fila con la flecha, la cuenta y
   la otra flecha. Nada más. Todo lo que no sea leer se ha quitado.

   Las medidas salen del vídeo, a 750 × 1624, o sea la pantalla a doble
   densidad: el cuerpo va a 19 con 27 de interlínea —54 píxeles de la
   grabación—, el margen es de 16,5 y la caja del rayo sangra el texto hasta
   los 60.

   En la última página, en vez de la flecha, va la pregunta y el botón de
   terminar, que es lo que cierra el resumen.
   ========================================================================== */

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlyphAuriculares, GlyphBack, GlyphLeer, GlyphPausa, GlyphPlay } from "./glyphs";
import { spring, springSoft } from "./motion";
import { alCargarVoces, calla, hayVocesInstaladas, hayVoz, lee, mejorVoz } from "./voz";
import type { Bloque, PaginaLibro } from "./libros/paginas";

function Rayo() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor" />
    </svg>
  );
}

function Comillas() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      <path
        d="M9.5 5.5c-3 1.6-4.8 4.2-4.8 7.4 0 3 1.8 5.1 4.2 5.1 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.3-3.1-3.3-.3 0-.6 0-.9.1.3-1.7 1.5-3.2 3.3-4.2l-2.2-1.7zm9.6 0c-3 1.6-4.8 4.2-4.8 7.4 0 3 1.8 5.1 4.2 5.1 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.3-3.1-3.3-.3 0-.6 0-.9.1.3-1.7 1.5-3.2 3.3-4.2l-2.2-1.7z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Los textos del resumen traen cursivas y algún salto: son treinta y cuatro
   etiquetas en toda la biblioteca, todas nuestras y todas de la misma
   familia —`em`, `strong`, `br`—. Pintadas como texto plano se leían con los
   corchetes a la vista. Se pintan como marcado, que es lo que son. */
function Marca({ html, className }: { html: string; className: string }) {
  return <p className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

/* Lo que la voz tiene que decir de cada bloque, y en el orden en que se lee.
   Las etiquetas se quitan —`em` y `strong` son para el ojo—, la entradilla de
   una lista se une a su texto con dos puntos, que es como se lee en alto, y la
   cita lleva el nombre del autor detrás para que se entienda de quién es. */
export function textoDe(b: Bloque): string {
  const limpio = (t: string) => t.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  switch (b.b) {
    case "rotulo":
      return limpio(b.texto);
    case "texto":
    case "idea":
      return limpio(b.texto);
    case "lista":
      return b.puntos.map((p) => `${p.fuerte}: ${limpio(p.texto)}`).join(" ");
    case "cita":
      return `${limpio(b.frase)} ${b.autor}.`;
    case "prueba":
      return `Prueba esto. ${b.puntos.map(limpio).join(" ")}`;
  }
}

function PintaBloque({ b }: { b: Bloque }) {
  switch (b.b) {
    case "rotulo":
      return <h2 className="lee-rotulo">{b.texto}</h2>;
    case "texto":
      return <Marca className="lee-parrafo" html={b.texto} />;
    case "lista":
      return (
        <ul className="lee-lista">
          {b.puntos.map((p) => (
            <li key={p.fuerte}>
              <b>{p.fuerte}:</b> {p.texto}
            </li>
          ))}
        </ul>
      );
    case "idea":
      return (
        <div className="lee-idea">
          <span className="lee-rayo" aria-hidden>
            <Rayo />
          </span>
          <p dangerouslySetInnerHTML={{ __html: b.texto }} />
        </div>
      );
    case "cita":
      return (
        <figure className="lee-cita">
          <span className="lee-comillas" aria-hidden>
            <Comillas />
          </span>
          <div>
            <blockquote>{b.frase}</blockquote>
            <figcaption>{b.autor}</figcaption>
          </div>
        </figure>
      );
    case "prueba":
      return (
        <div className="lee-prueba">
          <h3>Prueba esto</h3>
          <ul>
            {b.puntos.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      );
  }
}

/* El galón de cerrar. En la referencia el lector no se cierra con un aspa
   —eso es «descartar»— sino con un galón hacia abajo, que es «bajar esto y
   volver». Es un dibujo de tres trazos, así que va aquí y no en glyphs.tsx,
   que es para los que se usan en más de una pantalla. */
function GalonAbajo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path
        d="M6 9.5 12 15.5 18 9.5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---- Cómo se lee: el fondo y el tamaño -----------------------------------
   Los dos ajustes de la captura que pasó Pablo el 1 de septiembre. Viven en
   el disco del navegador y no en las preferencias generales de la app a
   propósito: son de ESTA pantalla. Quien pone el lector en claro no está
   pidiendo que la estantería se vuelva blanca.

   El tamaño se guarda como un factor y se enseña como un porcentaje, con el
   100 % en el cuerpo de 20 que Pablo midió sobre sus capturas —«que lo calques
   al 100 %»—. O sea que el 100 % de este mando no es «lo normal»: es
   exactamente lo que él pidió, y lo demás se mueve alrededor. */
type Tono = "oscuro" | "claro";
const MIN = 0.8, MAX = 1.5, PASO = 0.1;

function guardado(clave: string, porDefecto: string) {
  try {
    const v = localStorage.getItem(clave);
    return v === null ? porDefecto : v;
  } catch {
    return porDefecto;
  }
}

function guarda(clave: string, valor: string | number) {
  try {
    localStorage.setItem(clave, String(valor));
  } catch {
    /* Modo privado o disco lleno: se pierde entre sesiones y nada más. */
  }
}

export function Lector({
  paginas,
  onCerrar,
  onTerminar,
  audioAlEntrar = false,
  inicio = 0,
  inicioEn = 0,
  onPagina,
}: {
  paginas: PaginaLibro[];
  onCerrar: () => void;
  onTerminar: () => void;
  /** Se entra por «Escuchar» y no por «Leer»: empieza sonando. */
  audioAlEntrar?: boolean;
  /** Por qué página se dejó la última vez. Lo lleva `App`. */
  inicio?: number;
  /** Y por dónde iba dentro de ella, en tanto por uno de lo que se desplaza. */
  inicioEn?: number;
  /** Se avisa al cambiar de página o de sitio dentro de ella. */
  onPagina?: (n: number, en: number) => void;
}) {
  /* SE ABRE POR DONDE SE DEJÓ.
   *
   * Pablo, el 2 de septiembre: «cuando empiezo a leer un libro y acabo de una
   * parte, una vez lo vuelvo a retomar el libro debe abrirse exactamente por
   * donde se dejó la última vez».
   *
   * `inicio` se recorta contra las páginas que hay de verdad: el texto de un
   * libro se puede reescribir y quedarse más corto, y una página guardada que
   * ya no existe dejaría el lector en blanco. */
  const [i, setI] = useState(() => Math.max(0, Math.min(inicio, paginas.length - 1)));
  /** El panel de abajo, el que abre la «Aa». */
  const [ajustes, setAjustes] = useState(false);
  const [fondo, setFondo] = useState<Tono>(() =>
    guardado("curva.lector.fondo", "oscuro") === "claro" ? "claro" : "oscuro",
  );
  const [escala, setEscala] = useState(() => Number(guardado("curva.lector.escala", "1")) || 1);

  function ponFondo(cual: Tono) {
    setFondo(cual);
    guarda("curva.lector.fondo", cual);
  }

  function ponEscala(v: number) {
    /* Redondeado al paso: sumar 0,1 en coma flotante da 1,0999999999999999 y
       el porcentaje saldría en 110,00000000000001. */
    const n = Math.min(MAX, Math.max(MIN, Math.round(v * 10) / 10));
    setEscala(n);
    guarda("curva.lector.escala", n);
  }
  /* El texto del libro llega de un trozo aparte y puede tardar un instante.
     Sin esta guarda, `paginas[i]` es undefined y la pantalla revienta. */
  const hay = paginas.length > 0;
  const n = Math.min(i, Math.max(0, paginas.length - 1));
  const ultima = hay && n === paginas.length - 1;

  /* Cada página empieza arriba. Sin esto se entra en la siguiente por la
     mitad, que es lo que hace que un lector paginado se sienta roto. */
  function ir(n: number) {
    setI(n);
    /* Página nueva: se empieza arriba, así que el sitio dentro de ella es
       cero. Sin esto se apuntaría el desplazamiento de la anterior. */
    onPagina?.(n, 0);
    puesto.current = true;
    document.querySelector(".lee-scroll")?.scrollTo({ top: 0 });
  }

  /* ---- POR DÓNDE VA DENTRO DE LA PÁGINA ----------------------------------
   *
   * Pablo, el 2 de septiembre: «no es que te deje en la misma página, es que
   * te deje exactamente en la pantalla donde lo dejaste; no tiene por qué ser
   * siempre al inicio de cada página, puede ser que lo dejase más tarde».
   *
   * Y es verdad: una página de resumen es más alta que la pantalla y se lee
   * desplazando. Dejarlo por la página redondea a lo bruto.
   *
   * Se guarda EN TANTO POR UNO de lo que se puede desplazar, no en puntos.
   * Los puntos no sobreviven a nada: cambia el tamaño de letra con la «Aa»,
   * se gira el teléfono o se abre en otro móvil y esos 800 puntos caen en
   * otro párrafo. La proporción aguanta las tres cosas.
   *
   * Y se apunta al PARAR de desplazar, no en cada píxel: un dedo bajando
   * dispara este suceso decenas de veces por segundo y escribir en el disco
   * del navegador a ese ritmo se nota en un móvil. */
  const quieto = useRef(0);
  useEffect(() => {
    const caja = document.querySelector<HTMLElement>(".lee-scroll");
    if (!caja) return;
    const alParar = () => {
      window.clearTimeout(quieto.current);
      quieto.current = window.setTimeout(() => {
        const corre = caja.scrollHeight - caja.clientHeight;
        onPagina?.(n, corre > 8 ? Math.min(1, caja.scrollTop / corre) : 0);
      }, 220);
    };
    caja.addEventListener("scroll", alParar, { passive: true });
    return () => {
      caja.removeEventListener("scroll", alParar);
      window.clearTimeout(quieto.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n, hay]);

  /* Y al volver, se baja hasta donde estaba. No basta con hacerlo una vez: la
     altura de la página no es la definitiva hasta que la letra está puesta y
     el navegador ha maquetado, así que se intenta en tres fotogramas
     seguidos y se deja de intentar en cuanto alguien toca la pantalla. */
  const puesto = useRef(false);
  useEffect(() => {
    if (puesto.current || !hay || !inicioEn) return;
    const caja = document.querySelector<HTMLElement>(".lee-scroll");
    if (!caja) return;
    let vueltas = 0;
    let vivo = true;
    const baja = () => {
      if (!vivo || puesto.current) return;
      const corre = caja.scrollHeight - caja.clientHeight;
      if (corre > 8) {
        caja.scrollTop = inicioEn * corre;
        puesto.current = true;
        return;
      }
      if (vueltas++ < 3) requestAnimationFrame(baja);
    };
    requestAnimationFrame(baja);
    return () => { vivo = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hay, n]);

  /* El texto llega de un trozo aparte y puede tardar un instante: al montar,
     `paginas` está vacío y el recorte de arriba deja el arranque en cero. En
     cuanto llega, se coloca donde tocaba. Solo una vez, y solo si no se ha
     pasado ya de página a mano. */
  const colocado = useRef(false);
  useEffect(() => {
    if (colocado.current || !paginas.length) return;
    colocado.current = true;
    const donde = Math.max(0, Math.min(inicio, paginas.length - 1));
    if (donde !== i) setI(donde);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginas.length]);

  /* ---- El audiolibro ----------------------------------------------------
     Suena la voz del propio teléfono; el porqué y las tres decisiones que
     hacen que no parezca un teleprónter están en `voz.ts`. Aquí solo hay tres
     cosas: quién manda (`sonando`), por qué bloque va la voz (para señalarlo
     mientras se lee) y el salto de página, que es lo que lo convierte en un
     audiolibro y no en un botón de leer en alto. */
  const [sonando, setSonando] = useState(audioAlEntrar);
  const [bloqueVivo, setBloqueVivo] = useState(-1);
  /* Dónde tiene que ponerse el raíl verde y cuánto tarda en llenarse: alto y
     distancia al principio de la página, medidos del bloque que suena. */
  const [rail, setRail] = useState<{ y: number; alto: number; seg: number } | null>(null);
  const [voz, setVoz] = useState<string | null>(() => mejorVoz()?.name ?? null);
  const [puedeHablar, setPuedeHablar] = useState(hayVocesInstaladas);

  /* Chrome devuelve la lista de voces vacía en el primer pintado y la llena
     un instante después. Sin esto, el pie diría siempre «voz del sistema» y
     el botón se quedaría apagado en un aparato que sí sabe hablar. */
  useEffect(
    () =>
      alCargarVoces(() => {
        setVoz(mejorVoz()?.name ?? null);
        setPuedeHablar(hayVocesInstaladas());
      }),
    [],
  );

  /* El raíl se mide del DOM y no se calcula: la altura de un párrafo depende
     de dónde parta la línea, y eso solo lo sabe el navegador. Se mide después
     de pintar, y por eso va en un efecto y no en el propio pintado.

     Y de paso se lleva el bloque a la vista, que es la otra mitad de seguir
     el texto: si la voz va por un párrafo que se quedó abajo, el raíl no
     sirve de nada. Solo se desplaza cuando el bloque NO se ve entero, para no
     pelearse con quien esté leyendo por su cuenta más adelante. */
  useEffect(() => {
    if (bloqueVivo < 0) {
      setRail(null);
      return;
    }
    const pagina = document.querySelector<HTMLElement>(".lee-pagina");
    const bloque = pagina?.querySelectorAll<HTMLElement>(".lee-bloque")[bloqueVivo];
    if (!pagina || !bloque) return;
    setRail((antes) => ({
      y: bloque.offsetTop,
      alto: bloque.offsetHeight,
      seg: antes?.seg ?? 0,
    }));
    const caja = bloque.getBoundingClientRect();
    const scroll = document.querySelector<HTMLElement>(".lee-scroll");
    const marco = scroll?.getBoundingClientRect();
    if (marco && (caja.top < marco.top + 8 || caja.bottom > marco.bottom - 8)) {
      bloque.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [bloqueVivo, n]);

  useEffect(() => {
    if (!sonando || !hay || !puedeHablar) return;
    const bloques = paginas[n].bloques.map(textoDe).filter(Boolean);
    const empezo = Date.now();
    const corta = lee(bloques, {
      alBloque: (k, seg) => {
        setBloqueVivo(k);
        setRail((antes) => (antes ? { ...antes, seg } : { y: 0, alto: 0, seg }));
      },
      alFin: () => {
        setBloqueVivo(-1);
        /* Una página son doscientas sesenta palabras: leerlas en alto no baja
           de un minuto. Si «termina» en menos de tres segundos es que no ha
           sonado —voz rota, sin permiso, sin altavoz— y lo que toca es parar
           y decirlo, no seguir pasando páginas en silencio. */
        if (Date.now() - empezo < 3000) {
          setPuedeHablar(false);
          setSonando(false);
          return;
        }
        /* Al acabar la página se pasa sola a la siguiente y sigue leyendo.
           En la última se para, que es donde está el botón de terminar. */
        if (n < paginas.length - 1) ir(n + 1);
        else setSonando(false);
      },
    });
    return corta;
    /* `paginas` y `hay` no van en la lista a propósito: el resumen no cambia
       mientras se lee, y meterlo reiniciaba la lectura en cada pintado. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sonando, n, puedeHablar]);

  /* Sin voz que lo lea no se puede estar «escuchando». Pasa al entrar por el
     botón de escuchar en un aparato sin voces: el pie decía «Sin voz» y el
     botón enseñaba la pausa. */
  useEffect(() => {
    if (!puedeHablar) setSonando(false);
  }, [puedeHablar]);

  /* Salir de la pantalla con la voz hablando la dejaría sonando sobre la
     estantería, que es de las cosas más desagradables que puede hacer una app. */
  useEffect(() => calla, []);

  return (
    <motion.div
      className="lector"
      data-fondo={fondo}
      /* La escala viaja como propiedad propia de CSS; el tipo de `style` de
         framer no las conoce, y de ahí el rodeo. */
      style={{ "--lee-escala": escala } as CSSProperties}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
    >
      {/* LA BARRA, calcada de la captura que pasó Pablo el 1 de septiembre:
          galón para cerrar, el par Leer / Escuchar en medio y la «Aa» a la
          derecha.

          Sin el icono de las tres rayas que sale en su captura, y lo pidió él
          expresamente: «lo de las tres rayas no lo pongas». En la referencia
          abre el índice de secciones, y aquí no hay índice que abrir porque el
          resumen se pasa página a página con las flechas del pie.

          Y el título del libro, que estaba aquí, se quitó esa misma tarde:
          quien abre el lector acaba de pulsar en ese libro.

          El par no es un adorno: es EL MANDO de la voz. «Escuchar» arranca la
          lectura en alto y «Leer» la para, así que lo que se ve marcado es el
          estado de verdad del audiolibro, no un modo aparte que haya que
          mantener a mano. Por eso «Escuchar» se apaga en un aparato sin voces
          en vez de mentir. */}
      <header className="lee-barra">
        <button className="lee-icono" onClick={onCerrar} aria-label="Cerrar">
          <GalonAbajo />
        </button>

        <div className="lee-modo" role="group" aria-label="Leer o escuchar">
          <button
            className="lee-modo-op"
            data-on={!sonando}
            onClick={() => setSonando(false)}
            aria-pressed={!sonando}
          >
            <GlyphLeer tamano={16} />
            Leer
          </button>
          <button
            className="lee-modo-op"
            data-on={sonando}
            onClick={() => setSonando(true)}
            disabled={!puedeHablar}
            aria-pressed={sonando}
          >
            <GlyphAuriculares tamano={16} />
            Escuchar
          </button>
        </div>

        <button
          className="lee-icono lee-aa"
          data-on={ajustes}
          onClick={() => setAjustes((a) => !a)}
          aria-expanded={ajustes}
          aria-label="Color de fondo y tamaño del texto"
        >
          <span aria-hidden>Aa</span>
        </button>
      </header>

      <div className="lee-scroll">
        {/* La página no se anima al entrar, y es a propósito. La referencia
            cambia de página en seco; además, una entrada desde opacidad cero
            deja la página en blanco si la animación no llega a arrancar, que
            es un modo de fallo caro para lo poco que aporta. */}
        {hay ? (
          <article key={n} className="lee-pagina">
            {/* El raíl verde. Va DENTRO de la página, así que se desplaza con
                el texto y no hay que recolocarlo al hacer scroll. La barra de
                dentro se llena en el tiempo que se tarda en decir el bloque,
                que lo dice `segundosDe()`; en cuanto salta al siguiente, se
                vacía de golpe —transición cero— y vuelve a empezar. */}
            {rail && (
              <span
                className="lee-hilo"
                style={{ top: rail.y, height: rail.alto }}
                aria-hidden
              >
                <span
                  className="lee-hilo-lleno"
                  style={{ ["--dur" as string]: `${rail.seg}s` }}
                  key={`${n}-${bloqueVivo}`}
                />
              </span>
            )}
            {paginas[n].bloques.map((b, k) => (
              <div key={k} className="lee-bloque" data-vivo={sonando && k === bloqueVivo}>
                <PintaBloque b={b} />
              </div>
            ))}
          </article>
        ) : (
          <p className="lee-parrafo lee-esperando">Abriendo el resumen…</p>
        )}

        {/* El pie va DENTRO del desplazamiento y no fijo abajo: en la
            referencia se llega a él leyendo, no está siempre encima del
            texto comiéndose dos líneas. */}
        {!hay ? null : ultima ? (
          <div className="lee-final">
            <span>¿Leíste hasta el final?</span>
            <button className="lee-terminar" onClick={onTerminar}>
              Finalizar resumen
            </button>
          </div>
        ) : (
          <nav className="lee-paso">
            <button
              className="lee-flecha"
              onClick={() => ir(n - 1)}
              disabled={n === 0}
              aria-label="Página anterior"
            >
              <GlyphBack />
            </button>
            <span className="lee-cuenta">
              {n + 1} de {paginas.length}
            </span>
            <button
              className="lee-flecha lee-flecha-der"
              onClick={() => ir(n + 1)}
              aria-label="Página siguiente"
            >
              <GlyphBack />
            </button>
          </nav>
        )}
      </div>

      {/* EL PANEL DE LA «Aa», calcado de la segunda captura: a la izquierda el
          color de fondo, a la derecha el tamaño con su porcentaje.

          Sube desde abajo y se apoya encima del reproductor, que es donde sale
          en la referencia. No tapa la barra de arriba a propósito: el par
          Leer / Escuchar tiene que seguir a la vista mientras se toca el
          tamaño, porque lo que se está ajustando es cómo se lee.

          Los dos redondeles NO son claro y oscuro del tema de la app: son el
          papel de esta pantalla. Quien pone el lector en claro no está pidiendo
          que la estantería se vuelva blanca. */}
      <AnimatePresence>
        {ajustes && (
          <motion.div
            className="lee-ajustes"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={springSoft}
          >
            <div className="lee-ajuste">
              <span className="lee-ajuste-que">Color de fondo</span>
              <div className="lee-ajuste-mando">
                <span className="lee-fondo-a" aria-hidden>
                  A
                </span>
                {(["oscuro", "claro"] as const).map((cual) => (
                  <button
                    key={cual}
                    className="lee-fondo"
                    data-tono={cual}
                    data-on={fondo === cual}
                    onClick={() => ponFondo(cual)}
                    aria-label={cual === "oscuro" ? "Fondo oscuro" : "Fondo claro"}
                    aria-pressed={fondo === cual}
                  />
                ))}
              </div>
            </div>

            <div className="lee-ajuste">
              <span className="lee-ajuste-que">
                Tamaño del texto · {Math.round(escala * 100)}%
              </span>
              <div className="lee-ajuste-mando lee-ajuste-mando-der">
                <button
                  className="lee-talla"
                  onClick={() => ponEscala(escala - PASO)}
                  disabled={escala <= MIN}
                  aria-label="Letra más pequeña"
                >
                  −
                </button>
                <button
                  className="lee-talla"
                  onClick={() => ponEscala(escala + PASO)}
                  disabled={escala >= MAX}
                  aria-label="Letra más grande"
                >
                  +
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* El reproductor va fijo abajo, como el de la referencia: mientras se
          lee con los ojos se queda quieto, y mientras se escucha es lo único
          que hace falta tener a mano. Solo aparece si el aparato sabe hablar:
          en un visor sin síntesis de voz, un botón muerto es peor que nada. */}
      {hay && hayVoz() && (
        <div className="lee-audio" data-sonando={sonando}>
          <button
            className="lee-audio-boton"
            onClick={() => setSonando((s) => !s)}
            disabled={!puedeHablar}
            aria-label={sonando ? "Pausar la lectura en voz alta" : "Escuchar el resumen"}
          >
            {sonando ? <GlyphPausa /> : <GlyphPlay />}
          </button>
          <span className="lee-audio-texto">
            <span className="lee-audio-que">
              {!puedeHablar ? "Sin voz instalada" : sonando ? "Escuchando" : "Escuchar el resumen"}
            </span>
            <span className="lee-audio-voz">
              {!puedeHablar
                ? "Este aparato no trae ninguna voz en español"
                : sonando
                  ? `Página ${n + 1} de ${paginas.length}`
                  : (voz ?? "la voz del teléfono")}
            </span>
          </span>
        </div>
      )}
    </motion.div>
  );
}
