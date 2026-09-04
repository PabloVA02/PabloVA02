import { useDeferredValue, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FichaLibro, LIBROS, Portada, minutosDeLibro, porId, tiempo, type Libro,
} from "./Biblioteca";
import { GENEROS, LIBROS_POR_GENERO } from "./libros/generos";
import { TENDENCIAS } from "./libros/tendencias";
import { SUBTITULOS } from "./libros/subtitulos";
import { PORTADAS_LIBRO } from "./libros/portadas";
import { PAGINAS } from "./libros/paginas";
import { EMOTICONOS_GENERO } from "./emoticonos-generos";
import { GlyphClose, GlyphLupa } from "./glyphs";
import { pantalla, spring, springSoft } from "./motion";

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

   EL ORDEN: primero los géneros, después las tendencias. Estuvo al revés un
   rato y Pablo lo cambió, y tiene su lógica: la parrilla de géneros es alta
   —tres filas— y las tendencias son una tira que se desplaza a lo ancho. Con
   la tira arriba, los géneros quedaban por debajo del filo y había que
   desplazar para descubrir que existían; así se ve todo el mapa de la
   pantalla sin moverse, y la tira de tendencias asoma justo debajo invitando
   a seguir bajando.

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
  const [todos, setTodos] = useState(false);
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

  /* La estantería entera, y en un orden que dice mucho: primero los que tienen
     el resumen ESCRITO A MANO con el molde de `REDACCION.md`, después los que
     tienen cubierta dibujada por Pablo, y al final el resto. Lo pidió el 20 de
     agosto: «coloca los libros redactados los primeros para que vea cómo están
     escritos». Mientras queden libros con el texto automático viejo, esta
     primera fila es la que enseña por dónde va la biblioteca de verdad. */
  const catalogo = useMemo(
    () =>
      [...LIBROS].sort((a, b) => {
        const rango = (id: string) =>
          PAGINAS[id] ? 0 : PORTADAS_LIBRO[id]?.local ? 1 : 2;
        return rango(a.id) - rango(b.id);
      }),
    [],
  );

  const buscando = consulta.length >= 2;
  const abierto = GENEROS.find((g) => g.id === genero);

  return (
    <motion.section
      className="explorar"
      initial={pantalla.initial}
      animate={pantalla.animate}
      exit={pantalla.exit}
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
              if (e.target.value) {
                setGenero(null);
                setTodos(false);
              }
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
          ) : todos ? (
            <motion.div
              key="todos"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={springSoft}
            >
              <div className="genero-cabecera">
                <button
                  className="genero-volver"
                  type="button"
                  onClick={() => setTodos(false)}
                  aria-label="Volver a explorar"
                >
                  <GlyphClose />
                </button>
                <div>
                  <h2>Todos los libros</h2>
                  <p className="bloque-sub">
                    {catalogo.length} en la estantería · los redactados a mano, primero
                  </p>
                </div>
              </div>
              <div className="parrilla">
                {catalogo.map((l, i) => (
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
              <Generos onElegir={setGenero} />
              <Tendencias onAbrir={onAbrir} />
              {/* La estantería entera. Va al final y no arriba: quien entra a
                  explorar quiere que le propongan algo, y ver los doscientos
                  de golpe es lo que se hace cuando lo demás no ha servido. */}
              <motion.button
                className="ver-todos"
                type="button"
                onClick={() => setTodos(true)}
                whileTap={{ scale: 0.98 }}
              >
                <span>
                  <strong>Todos los libros</strong>
                  <span className="ver-todos-sub">Los {catalogo.length} de la estantería, en una parrilla</span>
                </span>
                <span className="ver-todos-flecha" aria-hidden>
                  →
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

/* --------------------------------------------------------------------------
   Tendencias: DEL 1 AL 10, con el número grande.

   Pablo, el 4 de septiembre: «en tendencias enumera, como te dije, poniendo
   los números en grande; hazlo bonito y que esté bien puesto y cuadrado. Solo
   pones del 1 al 10. En tendencias solo pones Tendencias y ya, con el mismo
   tamaño y la misma letra que la de libro diario gratis».

   Las tres cosas y por qué:

   DIEZ Y NO VEINTE. Una lista numerada dice cuántos son por el último número
   que enseña, y a la vez es una promesa: el diez tiene que ser mejor que el
   once. Con veintiuno escritos, del undécimo en adelante el orden ya no lo
   sostenía nada. Los otros once siguen en `tendencias.ts` y vuelven subiendo
   ese diez.

   EL NÚMERO, GRANDE Y DEBAJO. Estuvo a 21 puntos con una raya al lado, y antes
   a 250 al modo de Netflix, que se comía la sección entera. Ahora va a 44,
   solo, alineado con el canto izquierdo de la cubierta y de la promesa: el
   número, la cubierta y el texto arrancan los tres en la misma vertical, que
   es lo que hace que la tira se lea cuadrada.

   Y NO VA ENCIMA DE LA CUBIERTA. Ahí taparía el nombre del autor, que es lo
   que ponen todas las cubiertas justo en esa esquina.

   EL RÓTULO, A SECAS. Se fue el «Los que prometen algo, y lo cumplen»: la
   promesa de cada libro está escrita debajo de su cubierta, así que el
   subtítulo lo decía dos veces.
   -------------------------------------------------------------------------- */

/** Cuántas caben en la lista. Diez, y el número se enseña. */
const CUANTAS_TENDENCIAS = 10;

function Tendencias({ onAbrir }: { onAbrir: (l: Libro) => void }) {
  const libros = useMemo(
    () =>
      TENDENCIAS.map((t) => ({ t, libro: porId(t.id) }))
        .filter((x): x is { t: (typeof TENDENCIAS)[number]; libro: Libro } => !!x.libro)
        .slice(0, CUANTAS_TENDENCIAS),
    [],
  );
  if (!libros.length) return null;

  return (
    <section className="bloque tendencias">
      <div className="bloque-cabecera">
        <h2>Tendencias</h2>
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
              <Portada libro={libro} tamano={148} />
            </div>
            {/* EL PIE: el puesto grande a la izquierda y, a su lado, de quién
                es y lo que se tarda. En una fila y no en tres renglones: sin la
                promesa en medio, apilarlos dejaba la cifra sola en una línea
                entera y la tarjeta se alargaba para no decir nada.

                El número es `aria-hidden` porque el orden ya lo dice la lista a
                quien la escucha, y oír «uno» antes de cada título sobra. */}
            <div className="tend-pie">
              <span className="tend-numero" aria-hidden>{i + 1}</span>
              <span className="tend-quien">
                <span className="tend-autor">{libro.autor}</span>
                <span className="tend-min">{tiempo(minutosDeLibro(libro))}</span>
              </span>
            </div>
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

/* El número en letra, que es como se escribe dentro de una frase. Llega hasta
   treinta porque de ahí no van a pasar los géneros; si algún día pasan, cae a
   la cifra, que es feo pero verdad, y nunca a un número equivocado. */
const LETRAS = [
  "Cero", "Una", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho",
  "Nueve", "Diez", "Once", "Doce", "Trece", "Catorce", "Quince", "Dieciséis",
  "Diecisiete", "Dieciocho", "Diecinueve", "Veinte", "Veintiuna", "Veintidós",
  "Veintitrés", "Veinticuatro", "Veinticinco", "Veintiséis", "Veintisiete",
  "Veintiocho", "Veintinueve", "Treinta",
];
const enLetra = (n: number) => LETRAS[n] ?? String(n);

function Generos({ onElegir }: { onElegir: (id: string) => void }) {
  return (
    <section className="bloque generos">
      <div className="bloque-cabecera">
        <div>
          <h2>Qué te apetece</h2>
          {/* LA CUENTA SE CUENTA. Decía «Catorce maneras de entrar» y hay
              diecisiete: el número estaba escrito a mano y se quedó viejo al
              añadir géneros, sin que nadie se enterara. Es un número pequeño y
              da igual para usar la app, pero es una afirmación falsa en
              pantalla, y de esas no hay ninguna a propósito. */}
          <p className="bloque-sub">{enLetra(GENEROS.length)} maneras de entrar</p>
        </div>
      </div>
      <div className="genero-parrilla">
        {GENEROS.map((g, i) => {
          /* Todos los géneros llevan emoticono suyo desde el 4 de septiembre:
             seis que mandó para esto y cuatro prestados de las metas. Aquí
             había un respaldo con glifos dibujados por mí para los que no
             tenían, y se fue con los géneros que no tenían. */
          const suyo = EMOTICONOS_GENERO[g.id];
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
                {suyo ? <img src={suyo} width={21} height={21} alt="" /> : null}
              </span>
              <span className="genero-nombre">{g.nombre}</span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
