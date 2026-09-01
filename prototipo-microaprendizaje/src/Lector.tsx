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

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlyphBack, GlyphClose, GlyphPausa, GlyphPlay } from "./glyphs";
import { spring } from "./motion";
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

export function Lector({
  paginas,
  onCerrar,
  onTerminar,
  audioAlEntrar = false,
}: {
  paginas: PaginaLibro[];
  onCerrar: () => void;
  onTerminar: () => void;
  /** Se entra por «Escuchar» y no por «Leer»: empieza sonando. */
  audioAlEntrar?: boolean;
}) {
  const [i, setI] = useState(0);
  /* El texto del libro llega de un trozo aparte y puede tardar un instante.
     Sin esta guarda, `paginas[i]` es undefined y la pantalla revienta. */
  const hay = paginas.length > 0;
  const n = Math.min(i, Math.max(0, paginas.length - 1));
  const ultima = hay && n === paginas.length - 1;

  /* Cada página empieza arriba. Sin esto se entra en la siguiente por la
     mitad, que es lo que hace que un lector paginado se sienta roto. */
  function ir(n: number) {
    setI(n);
    document.querySelector(".lee-scroll")?.scrollTo({ top: 0 });
  }

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
    >
      {/* Solo el aspa. El título del libro estaba aquí arriba en pequeño y lo
          quitó Pablo el 1 de septiembre. Tiene razón: quien abre el lector
          acaba de pulsar en ese libro y sabe perfectamente cuál es, así que
          repetírselo en gris encima de cada página es ruido en la única
          pantalla donde no debe haber ninguno.

          Con él se va el `lee-hueco` de 34 puntos que había a la derecha: ese
          hueco no era un margen, existía solo para compensar el aspa y que el
          título quedara centrado de verdad. Sin título no compensa nada. */}
      <header className="lee-barra">
        <button className="icon-btn" onClick={onCerrar} aria-label="Cerrar">
          <GlyphClose />
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
