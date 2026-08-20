import { useDeferredValue, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FichaLibro, LIBROS, Portada, minutosDeLibro, porId, tiempo, type Libro,
} from "./Biblioteca";
import { GENEROS, LIBROS_POR_GENERO } from "./libros/generos";
import { TENDENCIAS } from "./libros/tendencias";
import { SUBTITULOS } from "./libros/subtitulos";
import { GLIFOS_GENERO } from "./glifos-generos";
import { GlyphClose, GlyphLupa } from "./glyphs";
import { spring, springSoft } from "./motion";

/* ==========================================================================
   Explorar: el buscador, las tendencias y los géneros.

   Sale de las capturas que pasa Pablo el 20 de agosto —«Explorar» de Headway
   y «Búsqueda» de Blinkist—, y de lo que pidió: parecido pero mejor, con
   géneros que le interesen a la gente y un apartado de tendencias con «los
   libros más prometedores en cuanto al mensaje que mandan».

   LO QUE SE COPIA DE LA REFERENCIA

   El esqueleto, que en las dos apps es el mismo y funciona: rótulo grande,
   caja de búsqueda debajo, y una parrilla de géneros que se desplaza a lo
   ancho en varias filas. Esa parrilla es el hallazgo: enseña doce o catorce
   cajones en el alto de tres, y como se desplaza a lo ancho no compite con el
   desplazamiento vertical de la pantalla.

   LO QUE NO SE COPIA

   · Las dos meten su oferta de pago aquí: Headway pone «Oferta especial»
     justo debajo de los géneros y Blinkist un carrusel de novedades. En una
     pantalla a la que se entra a buscar algo, lo primero que hay debajo tiene
     que ser algo que buscar.
   · Los iconos de Headway son emojis de colores, tres tonos cada uno. A
     tamaño de pastilla se leen como manchas. Aquí van de trazo, heredando el
     color del texto, para que la pastilla activa los tiña enteros.
   · Blinkist ordena por «Más reciente». Aquí no hay novedades que anunciar:
     hay doscientos libros que ya están, así que lo que va delante es lo que
     alguien querría empezar hoy.

   LO QUE SE AÑADE: LAS TENDENCIAS

   Es lo que pidió Pablo y no está en ninguna de las dos. Un carrusel de
   cubiertas grandes con LA PROMESA debajo —lo que te llevas, en una línea y
   en segunda persona— y su número de orden. Las promesas se escriben en
   `libros/tendencias.ts`, con sus reglas.

   Va antes que los géneros a propósito: un género es un cajón y hay que
   saber lo que se busca; una promesa se lee y se entra.

   TRES ESTADOS Y UNA SOLA PANTALLA

   Buscando, dentro de un género, o el índice. No son tres pantallas porque
   volver del género al índice tiene que costar un toque y no una transición:
   se cambia el cuerpo y la cabecera se queda.
   ========================================================================== */

/** Quita tildes y mayúsculas: buscar «filosofia» tiene que encontrar «Filosofía». */
const llano = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/* El índice de búsqueda se calcula una vez: son doscientos libros y se teclea
   letra a letra. Rehacerlo en cada pulsación se nota en un móvil. */
const INDICE = LIBROS.map((l) => ({
  libro: l,
  texto: llano(
    [
      l.titulo,
      l.autor,
      SUBTITULOS[l.id] ?? "",
      l.categoria ?? "",
      GENEROS.filter((g) => LIBROS_POR_GENERO[g.id].includes(l.id)).map((g) => g.nombre).join(" "),
    ].join(" "),
  ),
}));

export function Explorar({
  onAbrir,
  guardados,
  onGuardar,
}: {
  onAbrir: (l: Libro) => void;
  guardados?: ReadonlySet<string>;
  onGuardar?: (l: Libro) => void;
}) {
  const [busca, setBusca] = useState("");
  const [genero, setGenero] = useState<string | null>(null);
  const caja = useRef<HTMLInputElement>(null);

  /* `useDeferredValue` deja que la letra aparezca en la caja antes de que se
     recalcule la lista. Con doscientos libros y una parrilla, teclear deprisa
     se sentía pegajoso. */
  const consulta = useDeferredValue(busca.trim());

  const resultados = useMemo(() => {
    const q = llano(consulta);
    if (q.length < 2) return [];
    const partes = q.split(/\s+/);
    return INDICE.filter((e) => partes.every((p) => e.texto.includes(p)))
      .map((e) => e.libro)
      .slice(0, 60);
  }, [consulta]);

  const delGenero = useMemo(() => {
    if (!genero) return [];
    return LIBROS_POR_GENERO[genero].map(porId).filter((l): l is Libro => !!l);
  }, [genero]);

  const buscando = consulta.length >= 2;
  const abierto = GENEROS.find((g) => g.id === genero);

  return (
    <motion.section
      className="pantalla explorar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={springSoft}
    >
      <header className="explorar-cabecera">
        <h1>Explorar</h1>
        <div className="explorar-caja">
          <span className="explorar-lupa" aria-hidden>
            <GlyphLupa tamano={20} />
          </span>
          <input
            ref={caja}
            type="search"
            value={busca}
            onChange={(e) => {
              setBusca(e.target.value);
              if (e.target.value) setGenero(null);
            }}
            placeholder="Título, autor o tema"
            aria-label="Buscar entre los libros"
            /* `search` en iOS pinta su propia equis, y encima de la nuestra
               quedaban dos. Se apaga en el CSS. */
            enterKeyHint="search"
          />
          {busca && (
            <button
              className="explorar-limpiar"
              type="button"
              aria-label="Borrar la búsqueda"
              onClick={() => {
                setBusca("");
                caja.current?.focus();
              }}
            >
              <GlyphClose />
            </button>
          )}
        </div>
      </header>

      <div className="explorar-cuerpo">
        <AnimatePresence mode="wait">
          {buscando ? (
            <motion.div
              key="resultados"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={springSoft}
            >
              <p className="explorar-cuenta">
                {resultados.length === 0
                  ? "Nada con eso"
                  : `${resultados.length} ${resultados.length === 1 ? "libro" : "libros"}`}
              </p>
              {resultados.length === 0 ? (
                <p className="explorar-nada">
                  Prueba con el autor, o con una palabra del tema: «hábitos», «dinero»,
                  «Roma».
                </p>
              ) : (
                <div className="parrilla">
                  {resultados.map((l, i) => (
                    <FichaLibro
                      key={l.id}
                      libro={l}
                      i={Math.min(i, 9)}
                      onAbrir={() => onAbrir(l)}
                      guardado={guardados?.has(l.id)}
                      onGuardar={onGuardar && (() => onGuardar(l))}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ) : abierto ? (
            <motion.div
              key={`g-${abierto.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={springSoft}
            >
              <div className="genero-cabecera">
                <button
                  className="genero-volver"
                  type="button"
                  onClick={() => setGenero(null)}
                  aria-label="Volver a los géneros"
                >
                  <GlyphClose />
                </button>
                <div>
                  <h2>{abierto.nombre}</h2>
                  <p className="bloque-sub">
                    {delGenero.length} {delGenero.length === 1 ? "libro" : "libros"} ·{" "}
                    {abierto.sub.toLowerCase()}
                  </p>
                </div>
              </div>
              <div className="parrilla">
                {delGenero.map((l, i) => (
                  <FichaLibro
                    key={l.id}
                    libro={l}
                    i={Math.min(i, 9)}
                    onAbrir={() => onAbrir(l)}
                    guardado={guardados?.has(l.id)}
                    onGuardar={onGuardar && (() => onGuardar(l))}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="indice"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={springSoft}
            >
              <Tendencias onAbrir={onAbrir} />
              <Generos onElegir={setGenero} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

/* --------------------------------------------------------------------------
   Tendencias.

   La cubierta grande y debajo la promesa. El número de orden va ENCIMA de la
   cubierta, en la esquina de abajo a la izquierda y medio salido: puesto
   dentro se comía el dibujo, y puesto debajo competía con la promesa por la
   misma línea de lectura.
   -------------------------------------------------------------------------- */

function Tendencias({ onAbrir }: { onAbrir: (l: Libro) => void }) {
  const libros = useMemo(
    () =>
      TENDENCIAS.map((t) => ({ t, libro: porId(t.id) })).filter(
        (x): x is { t: (typeof TENDENCIAS)[number]; libro: Libro } => !!x.libro,
      ),
    [],
  );
  if (!libros.length) return null;

  return (
    <section className="bloque tendencias">
      <div className="bloque-cabecera">
        <div>
          <h2>Tendencias</h2>
          <p className="bloque-sub">Los que prometen algo, y lo cumplen</p>
        </div>
      </div>
      <div className="carrusel tend-tira">
        {libros.map(({ t, libro }, i) => (
          <motion.button
            key={t.id}
            className="tend"
            onClick={() => onAbrir(libro)}
            whileTap={{ scale: 0.965 }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.05 + Math.min(i, 6) * 0.045 }}
          >
            <div className="tend-arte">
              <Portada libro={libro} tamano={172} />
              <span className="tend-numero" aria-hidden>
                {i + 1}
              </span>
            </div>
            <p className="tend-promesa">{t.promesa}</p>
            <p className="tend-pie">
              {libro.autor} · {tiempo(minutosDeLibro(libro))}
            </p>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   Los géneros.

   Tres filas que se desplazan a lo ancho, que es lo que hacen las dos
   referencias. Se monta con `grid-auto-flow: column`: se le dice cuántas
   filas y el navegador reparte, así que añadir un género en `generos.ts` no
   obliga a tocar nada aquí.
   -------------------------------------------------------------------------- */

function Generos({ onElegir }: { onElegir: (id: string) => void }) {
  return (
    <section className="bloque generos">
      <div className="bloque-cabecera">
        <div>
          <h2>Qué te apetece</h2>
          <p className="bloque-sub">Catorce maneras de entrar</p>
        </div>
      </div>
      <div className="genero-parrilla">
        {GENEROS.map((g, i) => {
          const Icono = GLIFOS_GENERO[g.icono];
          return (
            <motion.button
              key={g.id}
              className="genero-pastilla"
              onClick={() => onElegir(g.id)}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 0.04 + Math.min(i, 9) * 0.03 }}
            >
              <span className="genero-icono" aria-hidden>
                {Icono ? <Icono tamano={21} /> : null}
              </span>
              <span className="genero-nombre">{g.nombre}</span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
