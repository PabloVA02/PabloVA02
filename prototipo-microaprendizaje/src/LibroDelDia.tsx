import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { spring, springPop } from "./motion";
import { GlyphAuriculares, GlyphGuardar, GlyphLeer, GlyphReloj, GlyphVisto } from "./glyphs";
import { LIBROS_RESUMEN as LIBROS } from "./libros/puente";
import type { Libro } from "./Biblioteca";
import { PAGINAS } from "./libros/paginas";
import { PORTADAS_LIBRO } from "./libros/portadas";
import { PortadaLibro } from "./PortadaLibro";
import { urlFoto } from "./shorts";
import { minutosDeLibro } from "./Biblioteca";

/* ==========================================================================
   EL LIBRO DE HOY

   Sale de la captura que mandó Pablo el 21 de agosto: la tarjeta que Headway
   pone en su inicio con la cubierta, el autor, los dos botones y el aviso de
   «Guardado en la biblioteca». Pidió «algo parecido pero mejorado y algo
   distinto», así que esto conserva la anatomía —cubierta, título, autor,
   guardar, leer y escuchar— y cambia cuatro cosas a propósito:

   1. EL FONDO ES EL SUYO. La primera versión se hizo en papel crema, para que
      fuera lo más claro de la pantalla, y Pablo la devolvió el 21 de agosto:
      «no me gusta el fondo que agregaste, haz el mismo fondo que Headway,
      prácticamente igual». Así que es lo que es: tarjeta oscura con el halo
      de color subiendo desde detrás de la cubierta, cubierta centrada, el
      botón de guardar montado sobre su filo y los dos botones abajo.

   2. EL COLOR ES EL DEL LIBRO, NO EL DE LA MARCA. Es lo único del aspecto que
      no se copia. Ellos tiñen el halo con la cubierta y ponen su botón azul
      en todos los libros; aquí el halo y el botón salen del color de la
      categoría, así que la tarjeta cambia de temperatura cada día.

   3. DICE CUÁNTO DURA, LEYENDO Y OYENDO. Los dos números salen de contar las
      palabras del resumen —200 por minuto leyendo, 140 diciéndolo— y no de
      una estimación escrita a mano. Headway no da ninguno de los dos en esta
      tarjeta y es la primera pregunta que hace cualquiera.

   4. TIENE CUENTA ATRÁS. Si el libro es de hoy, hay que decir cuánto queda de
      hoy. Es la única urgencia honesta que se puede poner en una pantalla:
      no hay plazas limitadas ni ofertas que expiran, hay medianoche.

   El aviso de guardado también cambia: el suyo se queda puesto hasta que lo
   cierras y tapa el título; este entra, se lee y se va solo a los 2,4 s.

   Y SOLO SE VE ESTANDO SUSCRITO, que es como lo tienen ellos y como lo pidió
   Pablo. A quien está probando la app no se le enseña el libro que le tocaría
   cada día: se le enseña la oferta.
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
  suscrito = true,
  guardado,
  onGuardar,
  onLeer,
  onEscuchar,
}: {
  /** Sin suscripción no hay libro del día. Ver la cabecera. */
  suscrito?: boolean;
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

  if (!libro || !suscrito) return null;

  const minLeer = libro.minutos;
  const minOir = minutosDeLibro(libro);

  return (
    <motion.section
      className="hoy"
      style={{ ["--acento" as string]: libro.color }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: 0.08 }}
      aria-label="El libro de hoy"
    >
      {/* EL FONDO ES LA CUBIERTA, DESENFOCADA. Medido sobre la captura de
          Pablo y no supuesto: muestreando la tarjeta de Headway por su borde
          izquierdo, el color va de un tostado (95, 81, 77) arriba a un morado
          (45, 33, 68) abajo, que es exactamente el orden de colores de la
          cubierta que enseña —crema arriba, figuras azules abajo—. O sea que
          no es un degradado de marca: es la portada ampliada y borrosa.

          Aquí se hace igual, y además con la técnica que la app ya usa en los
          shorts para el fondo de una fotografía vertical: ver `.foto-panorama`
          en `styles.css`. */}
      {libro.portada && (
        <img className="hoy-fondo" src={urlFoto(libro.portada, 220)} alt="" aria-hidden />
      )}
      <span className="hoy-velo" aria-hidden />

      <header className="hoy-ceja">
        <span className="hoy-rotulo">El libro de hoy</span>
        <span className="hoy-reloj">
          <GlyphReloj />
          {queda}
        </span>
      </header>

      {/* Centrado y en columna, como el suyo: la cubierta manda y todo lo
          demás va debajo. Nuestros dibujos llevan el título dentro, así que
          aquí tampoco hace falta repetirlo en texto —igual que en el suyo—;
          va en el `aria-label` para quien no ve la imagen. */}
      <div className="hoy-cuerpo">
        <button
          className="hoy-portada"
          type="button"
          onClick={() => onLeer(libro)}
          aria-label={`Abrir ${libro.titulo}, de ${libro.autor}`}
        >
          <span className="hoy-marco">
            <PortadaLibro
              id={libro.id}
              titulo={libro.titulo}
              autor={libro.autor}
              categoria={libro.categoria}
              color={libro.color}
              foto={libro.portada}
              tamano={150}
            />
          </span>

          {/* Montado sobre el filo de abajo de la cubierta, como el suyo. */}
          {onGuardar && (
            <motion.span
              className="hoy-guardar"
              role="button"
              tabIndex={0}
              data-on={guardado ? "true" : "false"}
              whileTap={{ scale: 0.94 }}
              onClick={(e) => {
                e.stopPropagation();
                onGuardar(libro);
                if (!guardado) setAviso(true);
              }}
              aria-label={guardado ? "Quitar de tu biblioteca" : "Guardar en tu biblioteca"}
            >
              {guardado ? <GlyphVisto /> : <GlyphGuardar />}
              {guardado ? "Guardado" : "Guardar"}
            </motion.span>
          )}
        </button>

        <p className="hoy-autor">{libro.autor}</p>
        {/* Dos datos y no tres: la suya pone dos temas separados por un
            punto y cabe en una línea. Con la categoría delante se iba a dos,
            y una línea partida en medio de «15 min oyendo» estropea el
            centrado de toda la tarjeta. */}
        <p className="hoy-medida">
          <span>{minLeer} min leyendo</span>
          <span className="hoy-punto" aria-hidden>·</span>
          <span>{minOir} min oyendo</span>
        </p>
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
