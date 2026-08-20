import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { spring, springPop } from "./motion";
import { GlyphAuriculares, GlyphGuardar, GlyphLeer, GlyphReloj, GlyphVisto } from "./glyphs";
import { LIBROS_RESUMEN as LIBROS } from "./libros/puente";
import type { Libro } from "./Biblioteca";
import { PAGINAS } from "./libros/paginas";
import { PORTADAS_LIBRO } from "./libros/portadas";
import { APRENDERAS } from "./libros/aprenderas";
import { PortadaLibro } from "./PortadaLibro";
import { minutosDeLibro } from "./Biblioteca";

/* ==========================================================================
   EL LIBRO DE HOY

   Sale de la captura que mandó Pablo el 21 de agosto: la tarjeta que Headway
   pone en su inicio con la cubierta, el autor, los dos botones y el aviso de
   «Guardado en la biblioteca». Pidió «algo parecido pero mejorado y algo
   distinto», así que esto conserva la anatomía —cubierta, título, autor,
   guardar, leer y escuchar— y cambia cuatro cosas a propósito:

   1. VA EN PAPEL, NO EN OSCURO. La suya es una tarjeta oscura sobre fondo
      oscuro y se disuelve en la pantalla. Esta es de papel sobre el gris de
      la estantería, así que es lo más claro que hay a la vista y se va sola
      el ojo. Y de paso anuncia lo que va a pasar al tocarla: la lectura
      también es en crema.

   2. EL COLOR ES EL DEL LIBRO, NO EL DE LA MARCA. Ellos tiñen el halo con la
      cubierta y ponen el botón azul de Headway en todos. Aquí el halo, la
      ceja y el botón salen del color de la categoría del libro, así que la
      tarjeta cambia de temperatura cada día.

   3. DICE CUÁNTO DURA, LEYENDO Y OYENDO. Los dos números salen de contar las
      palabras del resumen —200 por minuto leyendo, 140 diciéndolo— y no de
      una estimación escrita a mano. Headway no da ninguno de los dos en esta
      tarjeta y es la primera pregunta que hace cualquiera.

   4. TIENE CUENTA ATRÁS. Si el libro es de hoy, hay que decir cuánto queda de
      hoy. Es la única urgencia honesta que se puede poner en una pantalla:
      no hay plazas limitadas ni ofertas que expiran, hay medianoche.

   El aviso de guardado también cambia: el suyo se queda puesto hasta que lo
   cierras y tapa el título; este entra, se lee y se va solo a los 2,4 s.
   ========================================================================== */

/** Los que pueden salir: escritos a mano y con cubierta dibujada.
 *
 *  No es una preferencia estética. El libro de hoy es lo primero que se ve al
 *  abrir la app, así que no puede tocarle uno con la cubierta de relleno ni
 *  uno cuyo texto sea el autogenerado viejo: sería enseñar lo peor en el
 *  sitio donde más se mira. Mientras queden libros por reescribir, esta lista
 *  es la que hay. */
const ELEGIBLES = LIBROS.filter((l) => PAGINAS[l.id] && PORTADAS_LIBRO[l.id]?.local);

/** El día del año, en local. Es lo que hace que el libro cambie a medianoche
 *  y que sea el mismo para todo el que abra la app ese día. */
function diaDelAno(d: Date): number {
  const inicio = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d.getTime() - inicio.getTime()) / 86400000);
}

/** El libro de hoy. Determinista: mismo día, mismo libro, sin guardar nada.
 *
 *  El salto de 7 en 7 evita lo que pasaba con el resto simple: dos días
 *  seguidos caían en libros contiguos del catálogo, o sea de la misma
 *  categoría, y la tarjeta parecía atascada en Historia toda la semana. Con
 *  un paso primo respecto al total, la vuelta entera pasa por todos sin
 *  repetir y saltando de tema cada día. */
export function libroDeHoy(hoy = new Date()): Libro | undefined {
  if (!ELEGIBLES.length) return undefined;
  return ELEGIBLES[(diaDelAno(hoy) * 7) % ELEGIBLES.length];
}

/** Corta en el último espacio que quepa, para no partir una palabra. */
function recorta(texto: string, tope: number): string {
  if (texto.length <= tope) return texto;
  const trozo = texto.slice(0, tope);
  const corte = trozo.lastIndexOf(" ");
  return `${(corte > tope * 0.6 ? trozo.slice(0, corte) : trozo).replace(/[,;:.\s]+$/, "")}…`;
}

/** Lo que queda de hoy, escrito como se dice. */
function quedaDeHoy(ahora: Date): string {
  const medianoche = new Date(ahora);
  medianoche.setHours(24, 0, 0, 0);
  const minutos = Math.max(0, Math.round((medianoche.getTime() - ahora.getTime()) / 60000));
  const h = Math.floor(minutos / 60);
  if (h >= 1) return `${h} h ${minutos % 60} min`;
  return `${minutos} min`;
}

export function LibroDelDia({
  guardado,
  onGuardar,
  onLeer,
  onEscuchar,
}: {
  guardado?: boolean;
  onGuardar?: (libro: Libro) => void;
  onLeer: (libro: Libro) => void;
  onEscuchar?: (libro: Libro) => void;
}) {
  const libro = useMemo(() => libroDeHoy(), []);
  const [queda, setQueda] = useState(() => quedaDeHoy(new Date()));
  const [aviso, setAviso] = useState(false);

  /* Cada veinte segundos. El rótulo se mide en minutos, así que refrescar más
     a menudo no cambia nada de lo que se ve y refrescar menos deja el número
     mintiendo casi un minuto entero. */
  useEffect(() => {
    const t = setInterval(() => setQueda(quedaDeHoy(new Date())), 20000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!aviso) return;
    const t = setTimeout(() => setAviso(false), 2400);
    return () => clearTimeout(t);
  }, [aviso]);

  if (!libro) return null;

  const minLeer = libro.minutos;
  const minOir = minutosDeLibro(libro);
  /* El «de qué trata» mide cuarenta palabras y en la tarjeta caben tres
     líneas, o sea unos ciento diez caracteres. Cortarlo con CSS deja la
     elipsis en mitad de una palabra —«perdió s…»—, así que se corta antes, en
     el último espacio que quepa. */
  const gancho = recorta(APRENDERAS[libro.id] ?? libro.gancho ?? "", 112);

  return (
    <motion.section
      className="hoy"
      style={{ ["--acento" as string]: libro.color }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: 0.08 }}
      aria-label="El libro de hoy"
    >
      {/* El halo. Es una mancha del color del libro sobre el papel, no un
          degradado de tarjeta: nace detrás de la cubierta, que es de donde
          vendría la luz si esto fuera un objeto. Respira en veintitrés
          segundos, tan despacio que no se ve moverse pero evita que la
          tarjeta parezca impresa. */}
      <motion.span
        className="hoy-halo"
        aria-hidden
        animate={{ opacity: [0.62, 0.82, 0.62], scale: [1, 1.06, 1] }}
        transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
      />

      <header className="hoy-ceja">
        <span className="hoy-rotulo">El libro de hoy</span>
        <span className="hoy-derecha">
          <span className="hoy-reloj">
            <GlyphReloj />
            {queda}
          </span>
          {/* Guardar va aquí y no encima de la cubierta, como en la
              referencia: allí el botón tapa el tercio de abajo del dibujo,
              que es justo donde estos libros llevan el nombre del autor. Y
              tampoco sobre el título, que fue el primer sitio donde se probó
              y le comía la última palabra a los títulos largos. */}
          {onGuardar && (
            <motion.button
              className="hoy-guardar"
              type="button"
              data-on={guardado ? "true" : "false"}
              whileTap={{ scale: 0.86 }}
              onClick={() => {
                onGuardar(libro);
                if (!guardado) setAviso(true);
              }}
              aria-label={guardado ? "Quitar de tu biblioteca" : "Guardar en tu biblioteca"}
            >
              {guardado ? <GlyphVisto /> : <GlyphGuardar />}
            </motion.button>
          )}
        </span>
      </header>

      <div className="hoy-cuerpo">
        <button
          className="hoy-portada"
          type="button"
          onClick={() => onLeer(libro)}
          aria-label={`Abrir ${libro.titulo}`}
        >
          {/* La caja la pone el que llama, como en el resto de la app: la
              pieza solo se mide contra `--u`. Aquí es 2:3 —104 × 156—, que es
              la proporción de los dibujos de Pablo, y no el cuadrado de la
              casilla de la estantería. */}
          <span className="hoy-marco">
          <PortadaLibro
            id={libro.id}
            titulo={libro.titulo}
            autor={libro.autor}
            categoria={libro.categoria}
            color={libro.color}
            foto={libro.portada}
            tamano={104}
          />
          </span>
        </button>

        <div className="hoy-texto">
          <h2 className="hoy-titulo">{libro.titulo}</h2>
          <p className="hoy-autor">{libro.autor}</p>
          <p className="hoy-gancho">{gancho}</p>
          <p className="hoy-medida">
            <span>{minLeer} min leyendo</span>
            <span className="hoy-punto" aria-hidden>·</span>
            <span>{minOir} min oyendo</span>
          </p>
        </div>

      </div>

      <div className="hoy-botones">
        <motion.button className="hoy-leer" type="button" whileTap={{ scale: 0.97 }} onClick={() => onLeer(libro)}>
          <GlyphLeer />
          Leer
        </motion.button>
        {onEscuchar && (
          <motion.button
            className="hoy-escuchar"
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={() => onEscuchar(libro)}
          >
            <GlyphAuriculares />
            Escuchar
          </motion.button>
        )}
      </div>

      {/* El aviso entra desde arriba, dentro de la tarjeta, y se va solo. */}
      <AnimatePresence>
        {aviso && (
          <motion.p
            className="hoy-aviso"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0, transition: springPop }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
          >
            <GlyphVisto />
            Guardado en tu biblioteca
          </motion.p>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
