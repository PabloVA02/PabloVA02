import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Aprendizaje, AprendizajeVB, Descubrir, DescubrirVB, Estanteria, EstanteriaVB,
  LuzLuna, LuzLunaVB, MapaAventura, MapaAventuraVB, Memoria, MemoriaVB,
  PensarArte, PensarArteVB,
} from "./undraw";
import { Llama } from "./Racha";
import { enterVariants, spring, springPop, springSoft } from "./motion";
import { GlyphBack, GlyphClose, GlyphDescargar, GlyphGuardar, GlyphShare } from "./glyphs";

/* ==========================================================================
   La biblioteca: inicio y ficha de libro.

   Fondo oscuro, a diferencia de la lectura, que va en crema. No es un
   capricho: navegar y leer son dos modos distintos, y separarlos por
   temperatura ayuda a saber en cuál estás. Las portadas, que son lo único
   con color saturado, destacan sobre el oscuro y quedan apagadas sobre el
   claro — así que el oscuro también es la decisión correcta para una
   pantalla que es, sobre todo, una parrilla de portadas.
   ========================================================================== */

type Ilustracion = ComponentType<{ banda: "fondo" | "medio" | "frente" }>;

export type Libro = {
  id: string;
  titulo: string;
  autor: string;
  gancho: string;
  categoria: string;
  color: string;
  Arte: Ilustracion;
  vb: string;
  /** 0 a 1. Si es mayor que 0, el libro aparece en «Retomar». */
  progreso: number;
  aprender?: string[];
  coleccion?: string;
  /** Solo el capítulo de Alejandría es jugable en este prototipo. */
  jugable?: boolean;
};

export const LIBROS: Libro[] = [
  {
    id: "alejandria",
    titulo: "La Biblioteca de Alejandría",
    autor: "Historia del conocimiento",
    gancho: "Qué intentaba reunir Alejandría, cómo lo conseguía y por qué lo del gran incendio es, en buena parte, un mito.",
    categoria: "Historia",
    color: "var(--clay)",
    Arte: Estanteria,
    vb: EstanteriaVB,
    progreso: 0,
    coleccion: "Grandes pérdidas de la humanidad",
    aprender: [
      "Qué intentaba hacer exactamente Alejandría con los libros del mundo.",
      "Cómo conseguían los rollos: el método era más agresivo de lo que parece.",
      "Por qué la idea del gran incendio es, en buena parte, un mito.",
      "Qué determina de verdad que un texto sobreviva veinte siglos.",
    ],
    jugable: true,
  },
  {
    id: "sofocles",
    titulo: "Lo que perdimos de Grecia",
    autor: "Literatura clásica",
    gancho: "De la mayoría de los trágicos griegos solo conservamos títulos. Esta es la historia de ese vacío.",
    categoria: "Literatura",
    color: "var(--plum)",
    Arte: PensarArte,
    vb: PensarArteVB,
    progreso: 0.42,
  },
  {
    id: "memoria",
    titulo: "Cómo recuerda el cerebro",
    autor: "Ciencia cognitiva",
    gancho: "Por qué olvidas casi la mitad de lo que aprendes en la primera hora, y qué se puede hacer al respecto.",
    categoria: "Ciencia",
    color: "var(--sage)",
    Arte: Memoria,
    vb: MemoriaVB,
    progreso: 0.68,
  },
  {
    id: "mapas",
    titulo: "Los mapas que inventaron el mundo",
    autor: "Historia de la cartografía",
    gancho: "Durante siglos, el mapa no describía el mundo: lo decidía.",
    categoria: "Historia",
    color: "var(--slate)",
    Arte: MapaAventura,
    vb: MapaAventuraVB,
    progreso: 0,
  },
  {
    id: "noche",
    titulo: "Historia de la noche",
    autor: "Vida cotidiana",
    gancho: "Antes de la luz eléctrica, la humanidad dormía en dos turnos. Y nadie lo recuerda.",
    categoria: "Historia",
    color: "var(--ochre)",
    Arte: LuzLuna,
    vb: LuzLunaVB,
    progreso: 0,
  },
  {
    id: "escuela",
    titulo: "Cómo aprendimos a aprender",
    autor: "Historia de la educación",
    gancho: "La escuela tal y como la conoces tiene menos de dos siglos. Antes se aprendía de otra manera.",
    categoria: "Educación",
    color: "var(--plum-light)",
    Arte: Aprendizaje,
    vb: AprendizajeVB,
    progreso: 0,
  },
  {
    id: "descubrir",
    titulo: "El azar en los grandes hallazgos",
    autor: "Historia de la ciencia",
    gancho: "La penicilina, el horno microondas, el pósit. Lo que se encontró buscando otra cosa.",
    categoria: "Ciencia",
    color: "var(--sage)",
    Arte: Descubrir,
    vb: DescubrirVB,
    progreso: 0,
  },
];

/* -------------------------------------------------------------------------
   Portada
   ------------------------------------------------------------------------- */

export function Portada({ libro, tamano = 140 }: { libro: Libro; tamano?: number }) {
  return (
    <div className="portada" style={{ width: tamano, height: tamano, background: libro.color }}>
      <svg viewBox={libro.vb} aria-hidden>
        <g opacity="0.95">
          <libro.Arte banda="fondo" />
          <libro.Arte banda="medio" />
          <libro.Arte banda="frente" />
        </g>
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------
   Inicio
   ------------------------------------------------------------------------- */

function saludo() {
  const h = new Date().getHours();
  if (h < 6) return "Buenas noches";
  if (h < 13) return "Buenos días";
  if (h < 21) return "Buenas tardes";
  return "Buenas noches";
}

function FichaLibro({ libro, onAbrir, i }: { libro: Libro; onAbrir: () => void; i: number }) {
  return (
    <motion.button
      className="ficha"
      onClick={onAbrir}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: 0.06 + i * 0.05 }}
    >
      <div className="ficha-arte">
        <Portada libro={libro} tamano={148} />
        {libro.progreso > 0 && (
          <div className="ficha-barra">
            <motion.div
              className="ficha-relleno"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: libro.progreso }}
              transition={{ ...springSoft, delay: 0.3 + i * 0.05 }}
            />
          </div>
        )}
      </div>
      <p className="ficha-titulo">{libro.titulo}</p>
      <p className="ficha-autor">{libro.autor}</p>
      <span className="chip-cat" style={{ borderColor: libro.color, color: libro.color }}>
        {libro.categoria}
      </span>
    </motion.button>
  );
}

export function Inicio({
  racha,
  onAbrir,
}: {
  racha: number;
  onAbrir: (libro: Libro) => void;
}) {
  const enCurso = LIBROS.filter((l) => l.progreso > 0);
  const recomendados = LIBROS.filter((l) => l.progreso === 0);
  const destacado = LIBROS[0];

  return (
    <motion.div
      className="inicio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
    >
      <div className="inicio-scroll">
        <header className="inicio-cabecera">
          <motion.h1 custom={0} variants={enterVariants} initial="hidden" animate="shown">
            {saludo()}
          </motion.h1>
          <motion.div
            className="pastilla-racha"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springPop, delay: 0.16 }}
          >
            <Llama tamano={22} reducido={false} />
            <span>{racha}</span>
          </motion.div>
        </header>

        {/* Continuar: el libro que tienes a medias, siempre a un toque */}
        <motion.button
          className="tarjeta-seguir"
          onClick={() => onAbrir(destacado)}
          whileTap={{ scale: 0.985 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
        >
          <Portada libro={destacado} tamano={62} />
          <div className="seguir-texto">
            <p className="seguir-titulo">{destacado.titulo}</p>
            <p className="seguir-sub">{destacado.autor}</p>
            <div className="seguir-barra">
              <motion.div
                className="seguir-relleno"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0.15 }}
                transition={{ ...springSoft, delay: 0.4 }}
              />
            </div>
          </div>
          <span className="seguir-flecha">
            <GlyphBack />
          </span>
        </motion.button>

        <section className="bloque">
          <h2>Recomendados para ti</h2>
          <p className="bloque-sub">Creemos que estos te van a gustar</p>
          <div className="carrusel">
            {recomendados.map((l, i) => (
              <FichaLibro key={l.id} libro={l} i={i} onAbrir={() => onAbrir(l)} />
            ))}
          </div>
        </section>

        <section className="bloque">
          <h2>Retomar</h2>
          <p className="bloque-sub">Sigue donde lo dejaste</p>
          <div className="carrusel">
            {enCurso.map((l, i) => (
              <FichaLibro key={l.id} libro={l} i={i} onAbrir={() => onAbrir(l)} />
            ))}
          </div>
        </section>
      </div>

      <nav className="barra-tabs">
        {[
          { icono: "⌂", texto: "Inicio", activo: true },
          { icono: "⌕", texto: "Explorar", activo: false },
          { icono: "○", texto: "Yo", activo: false },
        ].map((t) => (
          <button key={t.texto} className="tab" data-activo={t.activo} type="button">
            <span className="tab-icono">{t.icono}</span>
            <span>{t.texto}</span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------
   Ficha del libro
   ------------------------------------------------------------------------- */

export function DetalleLibro({
  libro,
  onCerrar,
  onEmpezar,
  onAbrir,
}: {
  libro: Libro;
  onCerrar: () => void;
  onEmpezar: () => void;
  onAbrir: (libro: Libro) => void;
}) {
  const parecidos = LIBROS.filter((l) => l.id !== libro.id).slice(0, 4);

  return (
    <motion.div
      className="detalle"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0, transition: springSoft }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
    >
      <div className="detalle-scroll">
        <button className="icon-btn detalle-cerrar" onClick={onCerrar} aria-label="Cerrar">
          <GlyphClose />
        </button>

        <div className="detalle-arco" style={{ background: libro.color }} />

        <motion.div
          className="detalle-portada"
          initial={{ opacity: 0, y: 18, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: 0.08 }}
        >
          <Portada libro={libro} tamano={150} />
        </motion.div>

        <motion.div
          className="detalle-acciones"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.18 }}
        >
          {[
            { g: <GlyphGuardar />, l: "Guardar" },
            { g: <GlyphDescargar />, l: "Descargar" },
            { g: <GlyphShare />, l: "Compartir" },
          ].map((a) => (
            <motion.button key={a.l} className="accion-redonda" whileTap={{ scale: 0.88 }} aria-label={a.l}>
              {a.g}
            </motion.button>
          ))}
        </motion.div>

        {[
          <span key="c" className="chip-cat chip-relleno" style={{ background: libro.color }}>
            {libro.categoria}
          </span>,
          <h1 key="t" className="detalle-titulo">{libro.titulo}</h1>,
          <p key="a" className="detalle-autor">{libro.autor}</p>,
        ].map((n, i) => (
          <motion.div
            key={n.key}
            className="detalle-centrado"
            custom={i + 3}
            variants={enterVariants}
            initial="hidden"
            animate="shown"
          >
            {n}
          </motion.div>
        ))}

        <motion.section custom={6} variants={enterVariants} initial="hidden" animate="shown">
          <h2 className="detalle-seccion">Lo que vas a aprender</h2>
          {libro.aprender ? (
            <ul className="detalle-lista">
              {libro.aprender.map((linea, i) => (
                <li key={linea}>
                  <span className="lista-punto" style={{ background: libro.color }}>
                    {i + 1}
                  </span>
                  {linea}
                </li>
              ))}
            </ul>
          ) : (
            <p className="detalle-parrafo">{libro.gancho}</p>
          )}
        </motion.section>

        {libro.coleccion && (
          <motion.section custom={7} variants={enterVariants} initial="hidden" animate="shown">
            <h2 className="detalle-seccion">Aparece en</h2>
            <div className="detalle-coleccion">
              <Portada libro={libro} tamano={52} />
              <span>{libro.coleccion}</span>
            </div>
          </motion.section>
        )}

        <motion.section custom={8} variants={enterVariants} initial="hidden" animate="shown">
          <h2 className="detalle-seccion">También te puede gustar</h2>
          <div className="carrusel">
            {parecidos.map((l, i) => (
              <FichaLibro key={l.id} libro={l} i={i} onAbrir={() => onAbrir(l)} />
            ))}
          </div>
        </motion.section>
      </div>

      <div className="detalle-pie">
        <motion.button
          className="primary-btn"
          onClick={onEmpezar}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.3 }}
        >
          {libro.jugable ? "Empezar capítulo 1" : "Continuar"}
        </motion.button>
      </div>
    </motion.div>
  );
}
