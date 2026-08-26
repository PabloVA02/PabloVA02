import type { ReactElement } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Llama } from "./Racha";
import { MetaDiaria } from "./Meta";
import { Crecimiento, type Semana } from "./Crecimiento";
import { Cuenta } from "./Cuenta";
import { Suscripcion, type EstadoPago } from "./Suscripcion";
import { GlyphClose, GlyphGuardar, GlyphHeart, GlyphTick } from "./glyphs";
import { spring, springPop, springSoft } from "./motion";

/* ==========================================================================
   El perfil.

   Aquí no hay contenido nuevo que leer: hay estado. Y el estado se ordena por
   lo que la gente viene a mirar, que no es lo mismo que lo que la app quiere
   enseñar. Primero la racha, que es lo único que se pierde si dejas de
   entrar. Después las cifras. Los ajustes, al final.

   EL ORDEN DE AGOSTO, con las capturas que trajo Pablo delante. Los cuatro
   bloques de datos van seguidos y en escalas que se agrandan, que es como se
   lee una vida de lector: la racha cuenta DÍAS, la meta cuenta el DÍA DE HOY
   en minutos, el crecimiento cuenta SEMANAS y los temas cuentan TODO lo
   leído. Después vienen las cosas que se hacen —anti-scroll, invitar, prueba
   de nivel— y al final lo que se configura.

   Lo que se ha copiado de la referencia es la anatomía: tarjetas oscuras
   apiladas en una columna, título de bloque fuera de la tarjeta, cifras de
   colores en fila. Lo que NO: su bloque de misión diaria, que Pablo descartó
   —y hace bien: la meta de hoy ya cuenta el día, y dos contadores del mismo
   día compitiendo es lo que hace que la gente deje de mirar los dos—, sus
   botones azules a toda anchura, sus emojis por icono, y su crecimiento
   semanal de tres números sin comparación ninguna. Ver `Crecimiento.tsx`.

   Cada bloque entra escalonado con muelle, y el retraso se acumula recorriendo
   la pantalla de arriba abajo, así que el orden de entrada es el orden de
   lectura.
   ========================================================================== */

const PASO = 0.055;

/** Retrasos encadenados: cada bloque sabe cuántos van antes que él. */
function orden(i: number) {
  return 0.08 + i * PASO;
}

/**
 * La semana de la racha: siete columnas colocadas de forma que HOY sea el
 * último día cumplido. Así los días hechos quedan a la izquierda y los que
 * faltan a la derecha, que es como se lee una racha —lo conseguido detrás,
 * lo que queda por delante— sin necesidad de explicarlo.
 */
function semana(racha: number) {
  const dias = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() - Math.max(racha - 1, 0));

  for (let i = 0; i < 7; i++) {
    dias.push({
      etiqueta: cursor
        .toLocaleDateString("es-ES", { weekday: "short" })
        .slice(0, 2)
        .replace(/^./, (c) => c.toUpperCase()),
      hecho: i < racha,
      clave: cursor.toISOString().slice(0, 10),
    });
    cursor.setDate(cursor.getDate() + 1);
  }
  return dias;
}

type Props = {
  racha: number;
  /** Sin esto no hay tarjeta de pase. Ver arriba. */
  suscrito: boolean;
  /** Y con esto la tarjeta sabe a quién le habla. Ver `Suscripcion.tsx`. */
  estadoPago?: EstadoPago;
  /** A dónde lleva el botón del aviso de suscripción: a la caja. */
  onSuscribirse?: () => void;
  /** La racha más larga que ha tenido. Ver la tarjeta de racha. */
  record: number;
  /** Seis semanas, de la más vieja a la de ahora. Ver `Crecimiento.tsx`. */
  historial: Semana[];
  /** Lo leído por categoría, de más a menos. Ver la tarjeta de temas. */
  temas: { nombre: string; n: number; color: string }[];
  /** Minutos leídos hoy, su meta y el total de siempre. */
  minutosHoy: number;
  meta: number;
  minutosTotales: number;
  onMeta: (m: number) => void;
  onCerrar: () => void;
  onAjustes: () => void;
  onAntiScroll: () => void;
};

export function Perfil({
  racha,
  suscrito,
  estadoPago,
  onSuscribirse,
  record,
  historial,
  temas,
  minutosHoy,
  meta,
  minutosTotales,
  onMeta,
  onCerrar,
  onAjustes,
  onAntiScroll,
}: Props) {
  const reducido = !!useReducedMotion();
  const dias = semana(racha);

  return (
    <motion.div
      className="perfil"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: spring }}
      exit={{ opacity: 0, y: 18, transition: { duration: 0.2 } }}
    >
      {/* La cabecera lleva título. Iba con dos botones y un hueco enorme en
          medio, y un hueco en medio de una barra no es aire: es una barra a
          la que le falta algo. */}
      <div className="perfil-head">
        <button className="icon-btn" onClick={onCerrar} aria-label="Cerrar perfil">
          <GlyphClose />
        </button>
        <h2 className="perfil-head-titulo">Tu progreso</h2>
        <button className="icon-btn" onClick={onAjustes} aria-label="Ajustes">
          <GlyphRueda />
        </button>
      </div>

      <div className="perfil-scroll">
        {/* EL ORDEN DE ESTAS DOS, y no es indiferente. Iba primero la cuenta y
            debajo el aviso de suscripción, porque registrarse es gratis y
            hacerse de pago cuesta dinero: parecía de buena educación poner
            delante lo que no cuesta. Pablo lo dio la vuelta y tiene razón por
            un motivo que no es de educación sino de para qué existe la
            pantalla. El perfil es donde alguien mira lo que lleva hecho, y
            justo ahí es donde una oferta encuentra a la persona más dispuesta
            a pagarla: acaba de ver su racha, sus semanas y sus temas. La
            cuenta puede esperar dos dedos más abajo; no se pierde, y quien la
            necesita la encuentra. */}
        {!suscrito && <Suscripcion estado={estadoPago} onSuscribirse={onSuscribirse} />}

        {/* Y aquí estaba el saludo: un círculo con una inicial y la palabra
            «Hola», que es lo que sale cuando nadie ha dicho todavía cómo se
            llama. Un avatar inventado y un saludo a nadie. En su sitio va la
            cuenta, que es la pieza que la referencia de Pablo tiene tres
            bloques más abajo. Ver `Cuenta.tsx`. */}
        <Cuenta />

        {/* La racha: lo primero que se mira y lo único que se pierde */}
        <motion.section
          className="perfil-racha"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(2) }}
        >
          <div className="perfil-racha-llama">
            <Llama tamano={62} reducido={reducido} />
            <motion.span
              className="perfil-racha-numero"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ ...springPop, delay: orden(2) + 0.14 }}
            >
              {racha}
            </motion.span>
          </div>

          <div className="perfil-racha-datos">
            {/* El récord al lado del título, y no como cuarta cifra suelta en
                otra tarjeta: solo significa algo pegado al número de hoy. Es
                lo que convierte una racha corta en una meta —«llegaste a 12,
                vas por 3»— en vez de en un reproche. */}
            <div className="perfil-racha-alto">
              <h2>Tu racha</h2>
              <span className="perfil-record">
                Récord <strong>{record}</strong>
              </span>
            </div>
            <div className="perfil-dias">
              {dias.map((d, k) => (
                <div key={d.clave} className="perfil-dia">
                  <span className="perfil-dia-nombre" data-hecho={d.hecho}>
                    {d.etiqueta}
                  </span>
                  <motion.span
                    className="perfil-dia-bola"
                    data-hecho={d.hecho}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ ...springPop, delay: orden(2) + 0.2 + k * 0.045 }}
                  >
                    {d.hecho && <GlyphTick />}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* La meta del día, pegada a la racha: las dos cuentan el hoy, una en
            días y otra en minutos, así que se leen juntas y con la misma forma
            de tarjeta. Antes iba arriba del todo y partía la pantalla en dos. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(3) }}
        >
          <MetaDiaria
            minutos={minutosHoy}
            meta={meta}
            total={minutosTotales}
            reducido={reducido}
            onMeta={onMeta}
          />
        </motion.div>

        {/* Crecimiento semanal: la única parte de la pantalla que contesta
            «¿voy a más o a menos?». Va detrás de la meta porque agranda la
            escala —la meta cuenta hoy, esto cuenta seis semanas— y delante de
            todo lo que se toca, porque es dato y no acción. Ver
            `Crecimiento.tsx`, que lleva las decisiones del dibujo. */}
        <motion.section
          className="perfil-bloque"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(4) }}
        >
          <h2 className="perfil-titulo-bloque">Crecimiento semanal</h2>
          <Crecimiento semanas={historial} reducido={reducido} />
        </motion.section>

        {/* Tus temas: lo leído repartido por categoría, en una sola barra.
            Existe por un motivo que no es de vanidad: es lo que explica las
            recomendaciones. La referencia pone aquí un «gestiona las
            recomendaciones» con tres objetivos escritos por el usuario en el
            alta y nada más; enseñar lo que de verdad ha leído dice mucho más,
            y además se puede discutir —«leo demasiada historia»— que es
            justo lo que hace que alguien toque «Ajustar». */}
        <motion.section
          className="perfil-bloque"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(5) }}
        >
          <h2 className="perfil-titulo-bloque">Tus temas</h2>
          <Temas temas={temas} retraso={orden(5)} reducido={reducido} />
        </motion.section>

        {/* Invitar: va aquí y no en ajustes porque no es una preferencia, es
            algo que se hace. En una lista de ajustes se lee como un trámite;
            aquí, al lado de la racha, se lee como una propuesta.

            La forma sale de la captura del 26 a las 19:26, medida encima: el
            titular arriba a la izquierda a 21 del filo, el dibujo de 70 × 70
            a su derecha y a la misma altura, el párrafo debajo del titular en
            tres renglones y el botón azul a toda anchura entre sangrados de
            16. El dibujo pasa de colgar de la esquina a alinearse con el
            texto, que es lo que hace que el bloque se lea como una sola cosa.

            El lema es distinto del suyo a propósito. La suya dice «Creciendo
            juntos / comparte con tus amigos un pase de invitado gratuito de 7
            días»; la nuestra dice lo mismo en nuestras palabras y con la
            objeción contestada por delante, que en un regalo siempre es la
            misma: qué me va a costar. */}
        <motion.section
          className="perfil-invitar"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springSoft, delay: orden(6) }}
        >
          <div className="perfil-invitar-alto">
            <div className="perfil-invitar-texto">
              <h2>No leas solo</h2>
              <p>Regala siete días de todo a quien tú quieras. Sin tarjeta y sin compromiso.</p>
            </div>
            <Entradas reducido={reducido} />
          </div>
          <motion.button className="perfil-invitar-boton" whileTap={{ scale: 0.98 }}>
            Invitar amigos
          </motion.button>
        </motion.section>

        {/* Anti-scroll: la única tarjeta que promete QUITARTE algo en vez de
            darte algo. Por eso va con su propio color y fuera de la rejilla */}
        <motion.button
          className="perfil-anti"
          onClick={onAntiScroll}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springSoft, delay: orden(6) }}
        >
          <span className="perfil-anti-marca">
            <motion.svg
              viewBox="0 0 44 44"
              width="34"
              height="34"
              aria-hidden
              animate={reducido ? {} : { rotate: [-6, 6, -6] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <circle cx="22" cy="22" r="20" fill="var(--clay)" />
              <path
                d="M15 25v-8a2.2 2.2 0 0 1 4.4 0v-3a2.2 2.2 0 0 1 4.4 0v2a2.2 2.2 0 0 1 4.4 0v3a2.2 2.2 0 0 1 3.6 1.5v5c0 4.2-2.9 7-7.9 7s-8.9-2.8-8.9-7Z"
                fill="var(--paper)"
              />
            </motion.svg>
          </span>
          <div className="perfil-anti-texto">
            <p className="perfil-anti-titulo">Modo anti-scroll</p>
            <p className="perfil-anti-pie">Bloquea las apps que te distraen mientras aprendes</p>
          </div>
          <span className="perfil-fila-flecha">›</span>
        </motion.button>

        {/* Aquí iba una fila de tres cifras —leídas, favoritas, guardadas— y
            se ha quitado. Las tres estaban clavadas a cero porque ninguna se
            llegó a enchufar nunca, y encima las tres ya tenían su sitio: lo
            leído está en el subtítulo del nombre y en la barra de temas, y a
            favoritas y guardadas se entra por «Mi contenido», que es una lista
            de verdad y no un número. Tres ceros seguidos justo debajo de una
            gráfica que sí dice algo hacían parecer rota la pantalla entera. */}

        {/* Nivel: la fila que invita a hacer algo, no solo a mirar */}
        <motion.button
          className="perfil-fila"
          whileTap={{ scale: 0.985 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(8) }}
        >
          <span className="perfil-fila-ilu">
            <IluBirrete reducido={reducido} />
          </span>
          <div className="perfil-fila-texto">
            <p className="perfil-fila-titulo">Haz una prueba de nivel</p>
            <p className="perfil-fila-pie">Cinco minutos para saber por dónde empezar</p>
          </div>
          <span className="perfil-fila-flecha">›</span>
        </motion.button>

        <Rejilla
          titulo="Personaliza la app"
          retraso={orden(9)}
          reducido={reducido}
          casillas={[
            { nombre: "Temas que sigues", Ilu: IluTemas },
            { nombre: "Objetivo diario", Ilu: IluObjetivo },
            { nombre: "Recordatorios", Ilu: IluCampana },
            { nombre: "Tamaño del texto", Ilu: IluTexto },
            { nombre: "Apariencia", Ilu: IluApariencia },
            { nombre: "Sin conexión", Ilu: IluDescarga },
          ]}
        />

        <motion.section
          className="perfil-bloque"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(11) }}
        >
          <h2 className="perfil-titulo-bloque">Mi contenido</h2>
          <div className="perfil-contenido">
            {[
              { nombre: "Favoritas", Icono: () => <GlyphHeart on={false} /> },
              { nombre: "Guardadas", Icono: GlyphGuardar },
              { nombre: "Historial", Icono: GlyphReloj },
              { nombre: "Mis apuntes", Icono: GlyphNota },
            ].map((c, k) => (
              <motion.button
                key={c.nombre}
                className="perfil-contenido-casilla"
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springSoft, delay: orden(11) + 0.05 + k * 0.05 }}
              >
                {c.nombre}
                <span className="perfil-contenido-icono">
                  <c.Icono />
                </span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Ayuda. La referencia le dedica un titular y un botón azul de
            pared a pared, y con eso lo convierte en lo más llamativo de media
            pantalla: un contacto de soporte no debería pesar más que la
            racha. Aquí es una fila más, igual que la prueba de nivel. Está
            cuando hace falta y no grita cuando no. */}
        <motion.button
          className="perfil-fila"
          whileTap={{ scale: 0.985 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(12) }}
        >
          <span className="perfil-fila-ilu">
            <IluAyuda reducido={reducido} />
          </span>
          <div className="perfil-fila-texto">
            <p className="perfil-fila-titulo">¿Necesitas ayuda?</p>
            <p className="perfil-fila-pie">Escríbenos y te contesta una persona</p>
          </div>
          <span className="perfil-fila-flecha">›</span>
        </motion.button>

        <motion.p
          className="perfil-version"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: orden(13) }}
        >
          Prototipo · compilado el {__SELLO__}
        </motion.p>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   TUS TEMAS

   Una sola barra partida en tramos y su lista debajo. No es una tarta: una
   tarta de cinco trozos obliga a comparar ángulos, que es lo que peor hace el
   ojo, y encima ocupa un cuadrado en una pantalla que es una columna. Una
   barra de una sola línea compara longitudes —lo que mejor hace el ojo— y
   cabe en catorce puntos de alto.

   La barra entra creciendo desde la izquierda, de una pieza y no tramo a
   tramo: son partes de un mismo total, así que tienen que llegar juntas.
   -------------------------------------------------------------------------- */

function Temas({
  temas,
  retraso,
  reducido,
}: {
  temas: { nombre: string; n: number; color: string }[];
  retraso: number;
  reducido: boolean;
}) {
  const total = temas.reduce((t, x) => t + x.n, 0) || 1;
  const porcentaje = (n: number) => Math.round((n / total) * 100);

  return (
    <div className="temas">
      <motion.div
        className="temas-barra"
        initial={reducido ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={reducido ? { duration: 0.01 } : { duration: 0.9, delay: retraso + 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {temas.map((t) => (
          <span
            key={t.nombre}
            className="temas-tramo"
            style={{ width: `${(t.n / total) * 100}%`, background: t.color }}
          />
        ))}
      </motion.div>

      <ul className="temas-lista">
        {temas.map((t, k) => (
          <motion.li
            key={t.nombre}
            initial={reducido ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={reducido ? { duration: 0.01 } : { ...springSoft, delay: retraso + 0.22 + k * 0.05 }}
          >
            <i style={{ background: t.color }} aria-hidden />
            <span className="temas-nombre">{t.nombre}</span>
            {/* El porcentaje delante del recuento: es lo que se compara con
                el tramo de la barra que tiene justo encima. El número crudo
                va detrás y en gris, para quien quiera el dato exacto. */}
            <span className="temas-pct">{porcentaje(t.n)} %</span>
            <span className="temas-n">{t.n}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button className="temas-ajustar" whileTap={{ scale: 0.97 }}>
        Ajustar mis temas
      </motion.button>
    </div>
  );
}

/* --------------------------------------------------------------------------
   La rejilla de ajustes
   -------------------------------------------------------------------------- */

type Casilla = { nombre: string; Ilu: (p: { reducido: boolean }) => ReactElement };

function Rejilla({
  titulo,
  casillas,
  retraso,
  reducido,
}: {
  titulo: string;
  casillas: Casilla[];
  retraso: number;
  reducido: boolean;
}) {
  return (
    <motion.section
      className="perfil-bloque"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springSoft, delay: retraso }}
    >
      <h2 className="perfil-titulo-bloque">{titulo}</h2>
      <div className="perfil-rejilla">
        {casillas.map((c, k) => (
          <motion.button
            key={c.nombre}
            className="perfil-casilla"
            whileTap={{ scale: 0.965 }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...springPop, delay: retraso + 0.06 + k * 0.05 }}
          >
            <span className="perfil-casilla-ilu">
              <c.Ilu reducido={reducido} />
            </span>
            <span className="perfil-casilla-nombre">{c.nombre}</span>
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}

/* --------------------------------------------------------------------------
   Las miniaturas.

   Cada una es una escena diminuta, no un pictograma: tiene un fondo de color,
   una pieza al frente y un detalle que se mueve solo. A 96 px hace falta muy
   poco para que se lea como un dibujo en vez de como un icono.
   -------------------------------------------------------------------------- */

const flota = (reducido: boolean, amplitud = 2.4, duracion = 4.3, desfase = 0) =>
  reducido
    ? {}
    : {
        animate: { y: [0, -amplitud, 0] },
        transition: { duration: duracion, repeat: Infinity, ease: "easeInOut" as const, delay: desfase },
      };

function IluTemas({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 72 60" aria-hidden>
      <rect x="8" y="10" width="38" height="42" rx="6" fill="var(--plum)" opacity="0.5" transform="rotate(-8 27 31)" />
      <motion.g {...flota(reducido, 2.6, 4.1)}>
        <rect x="20" y="8" width="38" height="42" rx="6" fill="var(--paper)" />
        <circle cx="39" cy="24" r="8" fill="var(--ochre)" />
        <rect x="27" y="37" width="24" height="3.4" rx="1.7" fill="var(--ink)" opacity="0.24" />
        <rect x="27" y="43" width="15" height="3.4" rx="1.7" fill="var(--ink)" opacity="0.16" />
      </motion.g>
      <motion.circle
        cx="55" cy="45" r="8" fill="var(--sage)"
        {...flota(reducido, 2, 3.3, 0.5)}
      />
      <path d="M51.6 45 L54 47.4 L58.4 42.6" fill="none" stroke="var(--paper)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IluObjetivo({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 72 60" aria-hidden>
      <circle cx="36" cy="30" r="22" fill="var(--clay)" opacity="0.24" />
      <circle cx="36" cy="30" r="14" fill="var(--clay)" opacity="0.4" />
      <circle cx="36" cy="30" r="6.5" fill="var(--clay)" />
      {/* La aguja se clava: el objetivo se cumple */}
      <motion.g
        initial={reducido ? false : { x: 16, y: -16, rotate: 16 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.5 }}
      >
        <path d="M36 30 L57 12" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M52 10 L58 11 L57 17 Z" fill="var(--ochre)" />
      </motion.g>
    </svg>
  );
}

function IluCampana({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 72 60" aria-hidden>
      <circle cx="36" cy="31" r="21" fill="var(--ochre)" opacity="0.26" />
      <motion.g
        style={{ originX: "36px", originY: "13px" }}
        animate={reducido ? {} : { rotate: [0, -11, 9, -5, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 3.1, ease: "easeOut" }}
      >
        <path
          d="M36 13 A11 11 0 0 1 47 24 V33 L50 38 H22 L25 33 V24 A11 11 0 0 1 36 13 Z"
          fill="var(--ochre)"
        />
        <path d="M31.5 38 A4.5 4.5 0 0 0 40.5 38" fill="var(--ink)" opacity="0.6" />
        <circle cx="36" cy="12" r="2.6" fill="var(--ink)" opacity="0.6" />
      </motion.g>
    </svg>
  );
}

function IluTexto({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 72 60" aria-hidden>
      <rect x="14" y="9" width="44" height="42" rx="7" fill="var(--slate)" opacity="0.28" />
      <text x="24" y="40" fontSize="26" fontWeight="750" fill="var(--slate)" fontFamily="inherit">A</text>
      <motion.text
        x="41" y="40" fontSize="15" fontWeight="750" fill="var(--slate)" fontFamily="inherit"
        animate={reducido ? {} : { fontSize: [15, 21, 15] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        A
      </motion.text>
    </svg>
  );
}

function IluApariencia({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 72 60" aria-hidden>
      <circle cx="36" cy="30" r="19" fill="var(--ochre)" />
      {/* La luna barre el disco: claro y oscuro en una sola figura */}
      <motion.circle
        cx="48" cy="24" r="17" fill="var(--night)"
        animate={reducido ? {} : { cx: [48, 44, 48], cy: [24, 21, 24] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="36" cy="30" r="19" fill="none" stroke="var(--ochre)" strokeWidth="2.4" opacity="0.5" />
    </svg>
  );
}

function IluDescarga({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 72 60" aria-hidden>
      <rect x="16" y="34" width="40" height="16" rx="6" fill="var(--sage)" opacity="0.34" />
      <motion.g
        animate={reducido ? {} : { y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M36 10 V30" stroke="var(--sage)" strokeWidth="4" strokeLinecap="round" />
        <path d="M28 24 L36 32 L44 24" fill="none" stroke="var(--sage)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
      <rect x="26" y="42" width="20" height="3" rx="1.5" fill="var(--sage)" />
    </svg>
  );
}


/** Un bocadillo con una interrogación, y un segundo bocadillo pequeño detrás
 *  que sube y baja: la respuesta que viene de camino. Sin el segundo el dibujo
 *  dice «pregunta»; con él dice «conversación», que es lo que se ofrece. */
function IluAyuda({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 48 40" aria-hidden>
      <motion.g
        animate={reducido ? {} : { y: [0, -2.6, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <rect x="24" y="4" width="20" height="15" rx="6" fill="var(--slate)" opacity="0.55" />
      </motion.g>
      <motion.g {...flota(reducido, 2.1, 4.2)}>
        <path
          d="M10 8 H34 A6 6 0 0 1 40 14 V24 A6 6 0 0 1 34 30 H20 L13 36 V30 H10 A6 6 0 0 1 4 24 V14 A6 6 0 0 1 10 8 Z"
          fill="var(--slate)"
        />
        <path
          d="M18.6 16.4 A4 4 0 0 1 26.4 17.6 C26.4 20.4 22.4 20.6 22.4 23"
          fill="none"
          stroke="var(--paper)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx="22.4" cy="26.4" r="1.7" fill="var(--paper)" />
      </motion.g>
    </svg>
  );
}

function IluBirrete({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 48 40" aria-hidden>
      <motion.g {...flota(reducido, 2, 3.9)}>
        <path d="M24 9 L42 17 L24 25 L6 17 Z" fill="var(--sage)" />
        <path d="M13 20 V28 C13 31 34 31 34 28 V20" fill="none" stroke="var(--sage)" strokeWidth="3" strokeLinecap="round" />
        <path d="M42 17 V27" stroke="var(--sage)" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="42" cy="29" r="2.6" fill="var(--ochre)" />
      </motion.g>
    </svg>
  );
}

/* --- Iconos sueltos --- */

const trazoFino = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * La rueda se construye repitiendo un diente cada 45°, en vez de escribir un
 * contorno a mano. A 18 px un contorno dibujado a ojo se convierte en un
 * borrón; ocho dientes idénticos y colocados por trigonometría, no.
 */
function GlyphRueda() {
  const dientes = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      {dientes.map((i) => (
        <rect
          key={i}
          x="10.7"
          y="1.6"
          width="2.6"
          height="4.6"
          rx="1.1"
          fill="currentColor"
          transform={`rotate(${i * 45} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}


function GlyphReloj() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <circle cx="8.5" cy="8.5" r="6.4" {...trazoFino} />
      <path d="M8.5 4.9 V8.7 L11 10.4" {...trazoFino} />
    </svg>
  );
}

function GlyphNota() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path d="M3.4 3.6 H10 L13.6 7.2 V13.4 H3.4 Z" {...trazoFino} />
      <path d="M9.8 3.6 V7.4 H13.6" {...trazoFino} />
    </svg>
  );
}

/**
 * Dos entradas troqueladas, una detrás de otra. Se balancean a ritmos
 * distintos y con orígenes distintos: si giraran a la vez parecerían una sola
 * pieza de cartón, y lo que tiene que leerse es que son DOS —la tuya y la de
 * quien invites—.
 */
function Entradas({ reducido }: { reducido: boolean }) {
  return (
    <span className="perfil-invitar-arte" aria-hidden>
      <svg viewBox="0 0 96 78">
        <motion.g
          style={{ originX: "40px", originY: "48px" }}
          animate={reducido ? {} : { rotate: [-16, -11, -16], y: [0, -2.4, 0] }}
          transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="8" y="26" width="56" height="36" rx="7" fill="var(--plum)" />
          <circle cx="36" cy="26" r="5" fill="var(--night)" />
          <circle cx="36" cy="62" r="5" fill="var(--night)" />
        </motion.g>
        <motion.g
          style={{ originX: "58px", originY: "42px" }}
          animate={reducido ? {} : { rotate: [11, 16, 11], y: [0, -3.4, 0] }}
          transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="30" y="16" width="58" height="38" rx="7" fill="var(--ochre)" />
          <circle cx="59" cy="16" r="5" fill="var(--night)" />
          <circle cx="59" cy="54" r="5" fill="var(--night)" />
          <path
            d="M59 27.4 61.6 32.6 67.4 33.4 63.2 37.4 64.2 43.2 59 40.4 53.8 43.2 54.8 37.4 50.6 33.4 56.4 32.6Z"
            fill="var(--night)"
            opacity="0.72"
          />
        </motion.g>
      </svg>
    </span>
  );
}
