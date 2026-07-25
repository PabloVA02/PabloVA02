import { useState, type ReactElement } from "react";
import { motion } from "framer-motion";
import { GlyphBack } from "./glyphs";
import { spring, springSoft, springTight } from "./motion";

/* ==========================================================================
   Ajustes.

   Una lista larga en la que hay que ENCONTRAR algo, no leerla. Por eso va
   agrupada y no seguida: el ojo salta de rótulo en rótulo y solo entra en el
   grupo que le interesa. Siete grupos cortos se recorren más rápido que
   veinte filas iguales.

   El escalonado de entrada se aplica por GRUPO y no por fila: si entraran las
   veinticuatro filas una a una, la última tardaría casi dos segundos y la
   pantalla se sentiría lenta. Los grupos entran a 55 ms y dentro de cada uno
   las filas van juntas.

   No hay ninguna opción inventada para rellenar. Cada una corresponde a algo
   que la app hace de verdad: los temas existen, el objetivo diario se mide,
   el recordatorio se pide en la introducción y la racha se enseña en el
   perfil.
   ========================================================================== */

const PASO_GRUPO = 0.055;

type Fila = {
  nombre: string;
  Icono: () => ReactElement;
  /** Lo que hay ahora mismo, a la derecha. Un ajuste sin valor no informa. */
  valor?: string;
  /** Un interruptor en vez de una flecha. */
  conmutador?: boolean;
};

type Grupo = { rotulo: string; filas: Fila[] };

export function Ajustes({
  nombre,
  onVolver,
}: {
  nombre: string;
  onVolver: () => void;
}) {
  const [marketing, setMarketing] = useState(false);
  const [sonido, setSonido] = useState(true);
  const [copiado, setCopiado] = useState(false);

  const grupos: Grupo[] = [
    {
      rotulo: "Suscripción",
      filas: [{ nombre: "Gestionar suscripción", Icono: IcoCohete, valor: "Prueba, 7 días" }],
    },
    {
      rotulo: "Sobre ti",
      filas: [
        { nombre: "Nombre", Icono: IcoTarjeta, valor: nombre },
        { nombre: "Identidad de género", Icono: IcoGenero, valor: "Sin decir" },
        { nombre: "Edad", Icono: IcoEdad, valor: "Sin decir" },
        { nombre: "Idioma del contenido", Icono: IcoGlobo, valor: "Español" },
        { nombre: "Nivel de lectura", Icono: IcoBirrete, valor: "Sin definir" },
      ],
    },
    {
      rotulo: "A tu medida",
      filas: [
        { nombre: "Temas que sigues", Icono: IcoEtiquetas, valor: "5" },
        { nombre: "Temas silenciados", Icono: IcoSilencio, valor: "Ninguno" },
        { nombre: "Objetivo diario", Icono: IcoDiana, valor: "5 min" },
        { nombre: "Recordatorio", Icono: IcoCampana, valor: "20:30" },
        { nombre: "Apariencia", Icono: IcoLuna, valor: "Automática" },
        { nombre: "Tamaño del texto", Icono: IcoTexto, valor: "Normal" },
        { nombre: "Sonido al pasar tarjeta", Icono: IcoAltavoz, conmutador: true },
      ],
    },
    {
      rotulo: "Tu progreso",
      filas: [
        { nombre: "Racha y estadísticas", Icono: IcoLlama, valor: "3 días" },
        { nombre: "Descargar para leer sin conexión", Icono: IcoDescarga },
        { nombre: "Sincronizar entre dispositivos", Icono: IcoNube, valor: "Desactivado" },
      ],
    },
    {
      rotulo: "Échanos una mano",
      filas: [
        { nombre: "Invitar amigos", Icono: IcoAmigos, valor: "7 días gratis" },
        { nombre: "Compartir la app", Icono: IcoCompartir },
        { nombre: "Valorar en la tienda", Icono: IcoEstrella },
        { nombre: "Proponer un tema", Icono: IcoBombilla },
      ],
    },
    {
      rotulo: "Ayuda",
      filas: [
        { nombre: "Preguntas frecuentes", Icono: IcoInterrogante },
        { nombre: "Reportar un error en un dato", Icono: IcoBandera },
      ],
    },
    {
      rotulo: "Otros",
      filas: [
        { nombre: "Política de privacidad", Icono: IcoEscudo },
        { nombre: "Términos y condiciones", Icono: IcoDocumento },
        { nombre: "Analítica y marketing", Icono: IcoGrafico, conmutador: true },
      ],
    },
  ];

  return (
    <motion.div
      className="ajustes"
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0, transition: spring }}
      exit={{ opacity: 0, x: 22, transition: { duration: 0.18 } }}
    >
      <header className="ajustes-cabecera">
        <button className="icon-btn" onClick={onVolver} aria-label="Volver">
          <GlyphBack />
        </button>
        <h1>Ajustes</h1>
        {/* Hueco simétrico: el título queda centrado de verdad, no a ojo */}
        <span className="ajustes-hueco" aria-hidden />
      </header>

      <div className="ajustes-scroll">
        {grupos.map((g, i) => (
          <motion.section
            key={g.rotulo}
            className="ajustes-grupo"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.06 + i * PASO_GRUPO }}
          >
            <h2>{g.rotulo}</h2>
            <div className="ajustes-tarjeta">
              {g.filas.map((f) => (
                <button
                  key={f.nombre}
                  className="ajustes-fila"
                  onClick={() => {
                    if (f.nombre.startsWith("Analítica")) setMarketing((v) => !v);
                    if (f.nombre.startsWith("Sonido")) setSonido((v) => !v);
                  }}
                >
                  <span className="ajustes-icono">
                    <f.Icono />
                  </span>
                  <span className="ajustes-nombre">{f.nombre}</span>

                  {f.conmutador ? (
                    <span
                      className="interruptor interruptor-mini"
                      data-on={f.nombre.startsWith("Analítica") ? marketing : sonido}
                    >
                      <motion.span className="interruptor-pomo" layout transition={springTight} />
                    </span>
                  ) : (
                    <>
                      {f.valor && <span className="ajustes-valor">{f.valor}</span>}
                      <span className="ajustes-flecha" aria-hidden>
                        ›
                      </span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </motion.section>
        ))}

        <motion.button
          className="ajustes-version"
          onClick={() => {
            setCopiado(true);
            window.setTimeout(() => setCopiado(false), 1800);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: 0.06 + grupos.length * PASO_GRUPO }}
        >
          <span>
            Curva · versión 0.9.0 (prototipo)
            <br />
            ID: 3093ED…7-54584B7E8389
          </span>
          <span className="ajustes-copiar">{copiado ? "Copiado" : "Copiar"}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   Los iconos.

   Todos con el mismo trazo de 1.7 sobre una caja de 22, para que la columna
   de la izquierda quede ópticamente alineada. Un icono relleno entre trazos
   pesa el doble y rompe la lista.
   -------------------------------------------------------------------------- */

const t = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const caja = (hijos: ReactElement) => (
  <svg width="21" height="21" viewBox="0 0 22 22" aria-hidden>
    {hijos}
  </svg>
);

const IcoCohete = () =>
  caja(
    <>
      <path d="M11 2.6c2.7 2.6 3.7 6 3 9.4H8c-.7-3.4.3-6.8 3-9.4Z" {...t} />
      <circle cx="11" cy="8" r="1.9" {...t} />
      <path d="M8 12 5.4 15.4 8 14.8M14 12l2.6 3.4-2.6-.6M9.4 15.6 11 19.4l1.6-3.8" {...t} />
    </>,
  );

const IcoTarjeta = () =>
  caja(
    <>
      <rect x="2.8" y="5" width="16.4" height="12" rx="2.4" {...t} />
      <path d="M6.4 9.2h4M6.4 12.4h7.2" {...t} />
    </>,
  );

/** Los dos símbolos enlazados, sin jerarquía entre ellos. */
const IcoGenero = () =>
  caja(
    <>
      <circle cx="8.4" cy="13.4" r="4.4" {...t} />
      <circle cx="14.2" cy="8" r="4.4" {...t} />
      <path d="M17.4 4.8 L20 2.2 M20 2.2 h-3.2 M20 2.2 v3.2" {...t} />
      <path d="M8.4 17.8 v2.4 M6.8 19 h3.2" {...t} />
    </>,
  );

/** Tres siluetas de distinta altura: la edad como tramo, no como cifra. */
const IcoEdad = () =>
  caja(
    <>
      <circle cx="5.6" cy="7.4" r="2" {...t} />
      <path d="M5.6 10 v5.4 M3.6 19 v-3.6 h4 V19" {...t} />
      <circle cx="12.4" cy="5.6" r="2.2" {...t} />
      <path d="M12.4 8.4 v7 M10.2 19 v-3.6 h4.4 V19" {...t} />
      <circle cx="18.4" cy="8.6" r="1.8" {...t} />
      <path d="M18.4 11 v4.4 M16.8 19 v-3.6 h3.2 V19" {...t} />
    </>,
  );

/** Dos personas, una detrás de otra: invitar es traer a alguien. */
const IcoAmigos = () =>
  caja(
    <>
      <circle cx="9" cy="7.6" r="3.4" {...t} />
      <path d="M3.4 18.4 c0-3.4 2.6-5.4 5.6-5.4 s5.6 2 5.6 5.4" {...t} />
      <path d="M15.4 5.2 a3.2 3.2 0 0 1 0 5.6 M16.4 13.4 c2.4.5 4 2.4 4 5" {...t} />
    </>,
  );

const IcoGlobo = () =>
  caja(
    <>
      <circle cx="11" cy="11" r="8.2" {...t} />
      <path d="M2.8 11h16.4M11 2.8c2.2 2.4 3.3 5.2 3.3 8.2s-1.1 5.8-3.3 8.2c-2.2-2.4-3.3-5.2-3.3-8.2s1.1-5.8 3.3-8.2Z" {...t} />
    </>,
  );

const IcoBirrete = () =>
  caja(
    <>
      <path d="M11 4.4 19.4 8.4 11 12.4 2.6 8.4Z" {...t} />
      <path d="M5.8 10.2v4.2c0 1.5 10.4 1.5 10.4 0v-4.2M19.4 8.4v4.6" {...t} />
    </>,
  );

const IcoEtiquetas = () =>
  caja(
    <>
      <path d="M3.2 10.4V4.6a1.4 1.4 0 0 1 1.4-1.4h5.8l8 8-7.2 7.2-8-8Z" {...t} />
      <circle cx="7" cy="7" r="1.4" {...t} />
    </>,
  );

const IcoSilencio = () =>
  caja(
    <>
      <path d="M4 8.4h3l4-3.2v11.6l-4-3.2H4Z" {...t} />
      <path d="M14.2 8.6l4 4.8M18.2 8.6l-4 4.8" {...t} />
    </>,
  );

const IcoDiana = () =>
  caja(
    <>
      <circle cx="11" cy="11" r="8" {...t} />
      <circle cx="11" cy="11" r="4.4" {...t} />
      <circle cx="11" cy="11" r="1" fill="currentColor" stroke="none" />
    </>,
  );

const IcoCampana = () =>
  caja(
    <>
      <path d="M11 3.6a5.4 5.4 0 0 1 5.4 5.4v3.6l1.6 2.2H4l1.6-2.2V9A5.4 5.4 0 0 1 11 3.6Z" {...t} />
      <path d="M9 14.8a2 2 0 0 0 4 0" {...t} />
    </>,
  );

const IcoLuna = () =>
  caja(<path d="M17.4 13.2A7.2 7.2 0 0 1 8.8 4.6a7.4 7.4 0 1 0 8.6 8.6Z" {...t} />);

const IcoTexto = () =>
  caja(
    <>
      <path d="M4 6.4V4.6h14v1.8M11 4.6v13M8.4 17.6h5.2" {...t} />
    </>,
  );

const IcoAltavoz = () =>
  caja(
    <>
      <path d="M4 8.4h3l4-3.2v11.6l-4-3.2H4Z" {...t} />
      <path d="M14 8.4a3.6 3.6 0 0 1 0 5.2M16.4 6.2a7 7 0 0 1 0 9.6" {...t} />
    </>,
  );

const IcoLlama = () =>
  caja(
    <path
      d="M11 2.8c.6 3 3.2 4 4.6 6.6a5.8 5.8 0 1 1-10.4 3.6c0-2.4 1.6-3.6 2.4-5 .6 1 1.4 1.4 2 1.2-.6-2.4.4-4.6 1.4-6.4Z"
      {...t}
    />,
  );

const IcoDescarga = () =>
  caja(<path d="M11 3.8v9.4M7.4 10l3.6 3.6L14.6 10M4 17.4h14" {...t} />);

const IcoNube = () =>
  caja(
    <path
      d="M6.6 16.2a3.8 3.8 0 0 1 .6-7.6 5 5 0 0 1 9.4 1.6 3.4 3.4 0 0 1-.6 6Z"
      {...t}
    />,
  );

const IcoCompartir = () =>
  caja(
    <path d="M11 14V3.6M7.6 6.8 11 3.4l3.4 3.4M4.6 12.4v4.4a1.4 1.4 0 0 0 1.4 1.4h10a1.4 1.4 0 0 0 1.4-1.4v-4.4" {...t} />,
  );

const IcoEstrella = () =>
  caja(
    <path
      d="m11 3.4 2.4 5 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4L3.2 9.2l5.4-.8Z"
      {...t}
    />,
  );

const IcoBombilla = () =>
  caja(
    <>
      <path d="M11 3.2a5.2 5.2 0 0 0-3 9.4v1.8h6v-1.8a5.2 5.2 0 0 0-3-9.4Z" {...t} />
      <path d="M9 17h4" {...t} />
    </>,
  );

const IcoInterrogante = () =>
  caja(
    <>
      <circle cx="11" cy="11" r="8.2" {...t} />
      <path d="M8.8 8.6a2.3 2.3 0 1 1 3.1 2.2c-.6.3-.9.8-.9 1.5v.4" {...t} />
      <circle cx="11" cy="15.4" r=".95" fill="currentColor" stroke="none" />
    </>,
  );

const IcoBandera = () =>
  caja(<path d="M5.6 18.4V4M5.6 4.8h9.8l-2 4 2 4H5.6" {...t} />);

const IcoEscudo = () =>
  caja(
    <>
      <path d="M11 3 17.6 5.4v5c0 4-2.8 6.6-6.6 8-3.8-1.4-6.6-4-6.6-8v-5Z" {...t} />
      <path d="M8.4 10.8 10.4 12.8 14 9.2" {...t} />
    </>,
  );

const IcoDocumento = () =>
  caja(
    <>
      <path d="M5.4 3.6h7.2l4 4v10.8H5.4Z" {...t} />
      <path d="M12.4 3.6v4.2h4.2M8 12h6M8 15h4" {...t} />
    </>,
  );

const IcoGrafico = () =>
  caja(<path d="M4 18h14M6.8 18v-5M11 18V7.4M15.2 18v-7.4" {...t} />);
