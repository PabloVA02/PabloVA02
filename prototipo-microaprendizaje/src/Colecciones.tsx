import { motion } from "framer-motion";
import { COLECCIONES, ordenar, type Coleccion } from "./colecciones";
import { FichaLibro, LIBROS, Portada, tiempo, type Libro } from "./Biblioteca";
import { GlyphClose } from "./glyphs";
import { spring, springSoft } from "./motion";

/* ==========================================================================
   COLECCIONES

   La tira va debajo de «Recomendados», que es donde la ponen las dos apps de
   las capturas. Lo demás no es como en ninguna de las dos, y por qué está
   escrito en `colecciones.ts`: son fijas y hechas a mano, y lo único que se
   personaliza es el orden.

   EL AZULEJO ES EL DE HEADWAY Y NO EL DE BLINKIST, a propósito.

   Blinkist enseña una cubierta con dos hojas asomando por detrás y debajo
   cuatro renglones de datos: título, marca, descripción y «Colección · 7
   elementos». Son seis cosas para decidir si te interesa, y la mitad son
   siempre iguales —«Blinkist» sale en todas—.

   Headway lo mete todo dentro de un cuadrado de color: el título grande, la
   promesa debajo, y un dibujo. Se lee de un vistazo y a un metro de distancia.
   Es mejor, y encima cabe más en la tira.

   Lo que cambiamos de Headway es el dibujo. El suyo es una ilustración de
   archivo por colección —un dedo de espuma, un cerdito, una diana— que no
   dice nada de lo que hay dentro. En su sitio van LAS CUBIERTAS DE VERDAD de
   los tres primeros libros, en abanico. Cuesta lo mismo, es honesto y además
   contesta la pregunta que se hace cualquiera antes de tocar: ¿qué hay aquí?
   ========================================================================== */

/* El índice por id se construye la PRIMERA VEZ QUE SE PIDE, no al cargar el
   módulo, y eso no es pereza: `Biblioteca` importa de aquí y aquí se importa
   de `Biblioteca`, así que uno de los dos se evalúa mientras el otro está a
   medias. Con el mapa en el cuerpo del módulo, `LIBROS` todavía no existe
   cuando se lee y la app arranca con un ReferenceError en blanco. */
let indice: Map<string, Libro> | null = null;

export function librosDe(c: Coleccion): Libro[] {
  indice ??= new Map(LIBROS.map((l) => [l.id, l]));
  return c.libros.map((id) => indice!.get(id)).filter((l): l is Libro => !!l);
}

export function coleccionPorId(id: string): Coleccion | undefined {
  return COLECCIONES.find((c) => c.id === id);
}

/* --------------------------------------------------------------------------
   La tira
   -------------------------------------------------------------------------- */

export function TiraColecciones({
  intereses = [],
  onAbrir,
}: {
  intereses?: string[];
  onAbrir: (c: Coleccion) => void;
}) {
  const lista = ordenar(intereses);

  return (
    <section className="bloque">
      <div className="bloque-cabecera">
        <div>
          <h2>Colecciones</h2>
          {/* No dice «creadas para ti». Ver `colecciones.ts`: son las mismas
              para todo el mundo y lo que cambia es por dónde empiezan. */}
          <p className="bloque-sub">
            {intereses.length
              ? "Empezando por lo que elegiste"
              : "Elegidas a mano, de cinco o seis libros"}
          </p>
        </div>
      </div>

      <div className="carrusel">
        {lista.map((c, i) => (
          <Azulejo key={c.id} coleccion={c} i={i} onAbrir={() => onAbrir(c)} />
        ))}
      </div>
    </section>
  );
}

function Azulejo({
  coleccion,
  i,
  onAbrir,
}: {
  coleccion: Coleccion;
  i: number;
  onAbrir: () => void;
}) {
  const libros = librosDe(coleccion);

  return (
    <motion.button
      className="colec"
      style={{ background: coleccion.tono }}
      onClick={onAbrir}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: 0.06 + Math.min(i, 5) * 0.05 }}
    >
      <span className="colec-titulo">{coleccion.titulo}</span>
      <span className="colec-promesa">{coleccion.promesa}</span>

      {/* Las tres primeras cubiertas, en abanico y hacia la derecha. Se
          dibujan al revés y se les da la vuelta con `row-reverse` para que la
          primera quede ENCIMA de las otras dos sin tocar el orden del apilado
          a mano. */}
      <span className="colec-pila" aria-hidden>
        {libros.slice(0, 3).reverse().map((l) => (
          <span className="colec-pila-una" key={l.id}>
            <Portada libro={l} tamano={52} />
          </span>
        ))}
      </span>

      <span className="colec-cuenta">{libros.length} libros</span>
    </motion.button>
  );
}

/* --------------------------------------------------------------------------
   La pantalla de dentro

   El azulejo de la tira, agrandado y de cabecera; debajo el párrafo que
   explica QUÉ LOS JUNTA —que es lo que hace que sea una colección y no una
   búsqueda—, y luego los libros en parrilla.

   Blinkist y Headway abren una lista pelada. El párrafo es lo nuestro: si la
   colección no puede explicarse en cuatro líneas, es que no era una
   colección.
   -------------------------------------------------------------------------- */

export function PantallaColeccion({
  coleccion,
  onCerrar,
  onAbrir,
  guardados,
  onGuardar,
}: {
  coleccion: Coleccion;
  onCerrar: () => void;
  onAbrir: (l: Libro) => void;
  guardados?: ReadonlySet<string>;
  onGuardar?: (l: Libro) => void;
}) {
  const libros = librosDe(coleccion);
  const minutos = libros.reduce((t, l) => t + (l.minutos ?? 0), 0);

  return (
    <motion.div
      className="colecp"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0, transition: spring }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
    >
      <div className="colecp-scroll">
        <motion.header
          className="colecp-cabecera"
          style={{ background: coleccion.tono }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={springSoft}
        >
          <button className="icon-btn colecp-cerrar" onClick={onCerrar} aria-label="Cerrar">
            <GlyphClose />
          </button>
          <h1 className="colecp-titulo">{coleccion.titulo}</h1>
          <p className="colecp-promesa">{coleccion.promesa}</p>
          <p className="colecp-datos">
            {libros.length} libros · {tiempo(minutos)}
          </p>
        </motion.header>

        <motion.p
          className="colecp-razon"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.1 }}
        >
          {coleccion.razon}
        </motion.p>

        <div className="parrilla colecp-parrilla">
          {libros.map((l, i) => (
            <FichaLibro
              key={l.id}
              libro={l}
              i={i}
              onAbrir={() => onAbrir(l)}
              guardado={guardados?.has(l.id)}
              onGuardar={onGuardar && (() => onGuardar(l))}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
