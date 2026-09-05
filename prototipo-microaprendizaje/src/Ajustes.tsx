import { useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlyphBack } from "./glyphs";
import { spring, springSoft } from "./motion";
import { Chips, Conmutador, Hoja, Opciones, Segmentado } from "./Hoja";
import { type Apariencia, type Escala, type Almacen } from "./preferencias";
import { IDIOMAS, NOMBRE_IDIOMA, traduce, type Clave, type Idioma } from "./idiomas";
import { CATEGORIAS_CON_LIBROS } from "./libros/puente";

/* ==========================================================================
   AJUSTES — rehechos enteros el 5 de septiembre

   Pablo mandó dos capturas, la de Headway y la de Wiser, y dijo: «elimina todo
   lo que tenemos y haz una combinación de diseños entre estas dos, poniendo
   también los elementos que para nosotros son necesarios».

   QUÉ TENÍA CADA UNA Y QUÉ SE COGE

   Headway, sobre negro: filas de texto pelado, sin iconos, sin flechas y sin
   tarjetas, muy aireadas. Un filete separa dos bloques. Abajo, un botón azul
   de ancho completo y la versión debajo.

   Wiser, sobre gris claro: tarjetas blancas redondeadas por grupos, cada fila
   con su chevrón a la derecha y su valor —el correo del soporte, el id—
   alineado antes del chevrón. Los grupos separados por aire, no por filetes.

   LA COMBINACIÓN, y por qué esa y no otra:

     · EL FONDO OSCURO ES DE HEADWAY, porque es el de nuestra app.
     · LA ESTRUCTURA ES DE WISER: tarjetas por grupo, chevrón y valor a la
       derecha. Es la que aguanta veinte filas; la lista pelada de Headway se
       lee bien con diez y se vuelve un muro con veinte.
     · LA TIPOGRAFÍA ES DE HEADWAY: sin iconos. Los nuestros eran veinticuatro
       dibujos de dieciséis puntos y ninguna de las dos referencias tiene ni
       uno. Un icono por fila en una lista de ajustes no ayuda a encontrar
       nada: se buscan por la palabra, no por el dibujo.
     · EL BOTÓN AZUL Y LA VERSIÓN, de Headway. Es el único color de la
       pantalla, y es el mismo #0099ff de toda la app.

   LO QUE SE FUE, que es la mitad. Estaba en veinticuatro filas repartidas en
   siete grupos: identidad de género, edad, cómo nos conociste, nivel de
   lectura, temas silenciados, sincronizar entre dispositivos, descargar sin
   conexión, valorar en la tienda, proponer un tema, preguntas frecuentes,
   reportar un error, analítica… Ninguna de las dos referencias tiene nada de
   eso, y casi todas eran preguntas que la app hace y luego no usa para nada.
   El fichero entero está en el historial de git, con sus veinticuatro iconos.

   LO QUE SE QUEDA PORQUE ES NUESTRO Y HACE FALTA: apariencia y tamaño del
   texto —los dos cambian la app de verdad—, los temas que sigues, el objetivo
   diario, y los créditos de las imágenes, que no es un capricho legal: es la
   prueba de que cada fotografía se obtuvo como se debía.
   ========================================================================== */

const PASO_GRUPO = 0.055;

/** Los ocho acentos de la biblioteca, para pintar los chips de temas. */
const COLOR_TEMA: Record<string, string> = {
  Historia: "var(--clay)",
  Filosofía: "var(--plum-light)",
  Ciencia: "var(--slate)",
  Arte: "var(--clay-light, #d9895f)",
  Literatura: "var(--plum)",
  Psicología: "var(--sage-light, #9aab88)",
  Economía: "var(--ochre)",
  Salud: "var(--sage)",
};

const VERSION = "1.0";

type Panel =
  | "idiomaApp" | "idiomaContenido" | "notificaciones" | "objetivo"
  | "apariencia" | "escala" | "seguidos"
  | "suscripcion" | "restaurar" | "regalar"
  | "privacidad" | "terminos" | "creditos"
  | "cerrar" | "borrar" | "soporte";

type Fila = {
  id: Panel;
  /** La clave del diccionario. El rótulo se traduce al pintarlo. */
  clave: Clave;
  /** Lo que hay ahora mismo, a la derecha del chevrón. Como en Wiser. */
  valor?: string;
  /** Debajo del nombre, en gris pequeño. Es el correo bajo «Cerrar sesión»
   *  de Headway, que es de las pocas cosas que aquella pantalla hace mejor:
   *  dice de qué cuenta vas a salir antes de que la cierres. */
  pie?: string;
  /** Rojo, para lo que no tiene vuelta atrás. */
  peligro?: boolean;
};

type Grupo = { clave: Clave; filas: Fila[] };

export function Ajustes({
  prefs: almacen,
  suscrito = true,
  onCancelar,
  onObjetivo,
  onVolver,
}: {
  /* `nombre`, `racha` y `onNombre` siguen en la firma porque `App.tsx` los
     pasa, y no se usan: las filas de nombre y de racha se fueron con el
     rediseño. Se dejan aceptados y sin leer para no tocar la llamada. */
  nombre?: string;
  racha?: number;
  suscrito?: boolean;
  onCancelar?: () => void;
  /* El almacén lo crea la app y no esta pantalla. Es lo que hace que el tema,
     la escala y el idioma sigan aplicados al salir de aquí: si el hook viviera
     dentro de Ajustes, sus efectos se desmontarían con la pantalla. */
  prefs: Almacen;
  onNombre?: (v: string) => void;
  onObjetivo?: (v: number) => void;
  onVolver: () => void;
}) {
  const { prefs, set, alternar } = almacen;
  const [panel, setPanel] = useState<Panel | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);

  /** Traduce con el idioma que hay puesto ahora mismo. Al cambiarlo, React
   *  vuelve a pintar y la pantalla entera está en el idioma nuevo: eso es lo
   *  que Pablo pidió con «que se cambie automáticamente en la app». */
  const t = (clave: Clave) => traduce(prefs.idiomaApp, clave);

  /** Un mensaje breve que se cae solo. Confirmar sin robar la pantalla. */
  const avisar = (m: string) => {
    setAviso(m);
    window.setTimeout(() => setAviso(null), 2200);
  };

  const temas = useMemo(() => CATEGORIAS_CON_LIBROS.map(String), []);

  /* Los nombres de apariencia y de tamaño salen del diccionario y no de
     `NOMBRE_APARIENCIA` / `NOMBRE_ESCALA`, que son constantes en español. Con
     la app en inglés, «Appearance — Automática» está a medio traducir, y una
     fila a medio traducir se ve peor que una sin traducir. */
  const NOMBRE_AP: Record<Apariencia, Clave> = {
    auto: "val.auto",
    claro: "val.claro",
    oscuro: "val.oscuro",
  };
  const NOMBRE_ES: Record<Escala, Clave> = {
    pequeno: "val.pequeno",
    normal: "val.normal",
    grande: "val.grande",
    enorme: "val.enorme",
  };

  const grupos: Grupo[] = [
    {
      clave: "aj.g.app",
      filas: [
        /* PRIMERA FILA DE TODA LA PANTALLA, y es donde la puso Headway. Quien
           no entiende la app no puede buscar «idioma» en la mitad de abajo:
           tiene que verlo antes de leer nada. */
        { id: "idiomaApp", clave: "aj.idiomaApp", valor: NOMBRE_IDIOMA[prefs.idiomaApp] },
        { id: "idiomaContenido", clave: "aj.idiomaContenido", valor: prefs.idioma },
        {
          id: "notificaciones",
          clave: "aj.notificaciones",
          valor: prefs.recordatorioActivo ? prefs.recordatorio : t("val.ninguno"),
        },
        { id: "objetivo", clave: "aj.objetivo", valor: `${prefs.objetivo} ${t("val.min")}` },
      ],
    },
    {
      clave: "aj.g.lectura",
      filas: [
        { id: "apariencia", clave: "aj.apariencia", valor: t(NOMBRE_AP[prefs.apariencia]) },
        { id: "escala", clave: "aj.texto", valor: t(NOMBRE_ES[prefs.escala]) },
        {
          id: "seguidos",
          clave: "aj.seguidos",
          valor: prefs.seguidos.length ? String(prefs.seguidos.length) : t("val.ninguno"),
        },
      ],
    },
    {
      clave: "aj.g.suscripcion",
      filas: [
        { id: "suscripcion", clave: "aj.gestionar" },
        { id: "restaurar", clave: "aj.restaurar" },
        { id: "regalar", clave: "aj.regalar" },
      ],
    },
    {
      clave: "aj.g.legal",
      filas: [
        { id: "privacidad", clave: "aj.privacidad" },
        { id: "terminos", clave: "aj.terminos" },
        { id: "creditos", clave: "aj.creditos" },
      ],
    },
    {
      clave: "aj.g.cuenta",
      filas: [
        { id: "cerrar", clave: "aj.cerrar", pie: "pabloverdalo@gmail.com" },
        { id: "borrar", clave: "aj.borrar", peligro: true },
      ],
    },
  ];

  const cierra = () => setPanel(null);

  return (
    <motion.div
      className="ajustes"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 18, transition: { duration: 0.18 } }}
      transition={spring}
    >
      {/* La cabecera de las dos referencias: flecha a la izquierda y el título
          al lado. En Wiser va centrado y en Headway pegado a la flecha; se
          coge el de Headway, que es el de nuestras otras pantallas. */}
      <div className="aj-cabecera">
        <button className="aj-volver" onClick={onVolver} aria-label={t("aj.volver")}>
          <GlyphBack />
        </button>
        <h1>{t("aj.titulo")}</h1>
      </div>

      <div className="aj-scroll">
        {grupos.map((g, i) => (
          <motion.section
            key={g.clave}
            className="aj-grupo"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.05 + i * PASO_GRUPO }}
          >
            <h2 className="aj-rotulo">{t(g.clave)}</h2>
            <div className="aj-tarjeta">
              {g.filas.map((f) => (
                <button
                  key={f.id}
                  className="aj-fila"
                  data-peligro={f.peligro ? "si" : undefined}
                  onClick={() => setPanel(f.id)}
                >
                  <span className="aj-fila-texto">
                    <span className="aj-fila-nombre">{t(f.clave)}</span>
                    {f.pie && <span className="aj-fila-pie">{f.pie}</span>}
                  </span>
                  {f.valor && <span className="aj-fila-valor">{f.valor}</span>}
                  <Chevron />
                </button>
              ))}
            </div>
          </motion.section>
        ))}

        {/* El botón azul de Headway, de ancho completo y al final de todo. */}
        <motion.button
          className="aj-soporte"
          onClick={() => setPanel("soporte")}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.05 + grupos.length * PASO_GRUPO }}
        >
          {t("aj.soporte")}
        </motion.button>

        <p className="aj-version">
          {t("aj.version")} {VERSION}
        </p>
      </div>

      {/* --------------------------------------------------------------------
          LA PESTAÑA DEL IDIOMA, que es lo que pidió expresamente.

          Se abre desde abajo como todas las demás y el cambio es INMEDIATO:
          al tocar un idioma se guarda y la pantalla que hay detrás ya está
          traducida cuando la hoja termina de bajar. No hay «Guardar», no hay
          que reiniciar y no se pierde nada por el camino.
          -------------------------------------------------------------------- */}
      <Hoja
        abierta={panel === "idiomaApp"}
        titulo={t("idioma.titulo")}
        pie={t("idioma.pie")}
        onCerrar={cierra}
      >
        <Opciones<Idioma>
          valor={prefs.idiomaApp}
          opciones={IDIOMAS.map((i) => ({
            id: i.id,
            nombre: i.nombre,
            /* El nombre en español debajo del nombre propio: quien ya está en
               español reconoce «Alemán» más rápido que «Deutsch», y quien
               busca el suyo lo ve arriba escrito como él lo escribe. */
            pie: i.id === "es" ? undefined : i.en_espanol,
          }))}
          onElegir={(v) => set("idiomaApp", v)}
        />
      </Hoja>

      {/* Y la otra, la del contenido, que NO es la misma y por eso está
          separada: aquí solo hay español porque los 400 resúmenes y las 225
          historias están escritos en español, a mano, uno a uno. */}
      <Hoja
        abierta={panel === "idiomaContenido"}
        titulo={t("idioma.contenido.titulo")}
        pie={t("idioma.contenido.pie")}
        onCerrar={cierra}
      >
        <Opciones
          valor={prefs.idioma}
          opciones={IDIOMAS.map((i) => ({
            id: i.nombre,
            nombre: i.nombre,
            pie: i.id === "es" ? t("idioma.disponible") : t("idioma.proximamente"),
          }))}
          onElegir={(v) => v === "Español" && set("idioma", v)}
        />
      </Hoja>

      <Hoja
        abierta={panel === "notificaciones"}
        titulo={t("aj.notificaciones")}
        pie="Un aviso al día, a la hora que elijas."
        onCerrar={cierra}
      >
        <Conmutador
          nombre="Recordarme leer"
          on={prefs.recordatorioActivo}
          onCambiar={(v) => set("recordatorioActivo", v)}
        />
        {prefs.recordatorioActivo && (
          <Opciones
            valor={prefs.recordatorio}
            opciones={["07:30", "13:00", "18:00", "20:30", "22:00"].map((h) => ({
              id: h,
              nombre: h,
            }))}
            onElegir={(v) => set("recordatorio", v)}
          />
        )}
      </Hoja>

      <Hoja
        abierta={panel === "objetivo"}
        titulo={t("aj.objetivo")}
        pie="Cuántos minutos quieres leer al día."
        onCerrar={cierra}
      >
        <Segmentado
          id="objetivo"
          valor={prefs.objetivo}
          opciones={[3, 5, 10, 15, 20].map((n) => ({ id: n, nombre: `${n} ${t("val.min")}` }))}
          onElegir={(v) => {
            set("objetivo", v);
            onObjetivo?.(v);
          }}
        />
      </Hoja>

      <Hoja
        abierta={panel === "apariencia"}
        titulo={t("aj.apariencia")}
        onCerrar={cierra}
      >
        <Opciones<Apariencia>
          valor={prefs.apariencia}
          opciones={[
            { id: "auto", nombre: t("val.auto") },
            { id: "claro", nombre: t("val.claro") },
            { id: "oscuro", nombre: t("val.oscuro") },
          ]}
          onElegir={(v) => set("apariencia", v)}
        />
      </Hoja>

      <Hoja abierta={panel === "escala"} titulo={t("aj.texto")} onCerrar={cierra}>
        <Segmentado<Escala>
          id="escala"
          valor={prefs.escala}
          opciones={(["pequeno", "normal", "grande", "enorme"] as Escala[]).map((e) => ({
            id: e,
            nombre: t(NOMBRE_ES[e]),
          }))}
          onElegir={(v) => set("escala", v)}
        />
      </Hoja>

      <Hoja
        abierta={panel === "seguidos"}
        titulo={t("aj.seguidos")}
        pie="Los que elijas salen antes en «Para ti»."
        onCerrar={cierra}
      >
        <Chips
          activos={prefs.seguidos}
          opciones={temas}
          color={(x) => COLOR_TEMA[x] ?? "var(--sage)"}
          onAlternar={(x) => alternar("seguidos", x)}
        />
      </Hoja>

      <Hoja
        abierta={panel === "suscripcion"}
        titulo={t("aj.gestionar")}
        pie={suscrito ? "Curva completo, un año." : "Ahora mismo no tienes suscripción."}
        onCerrar={cierra}
      >
        {suscrito ? (
          <button
            className="hoja-boton-peligro"
            onClick={() => {
              cierra();
              onCancelar?.();
            }}
          >
            Cancelar la suscripción
          </button>
        ) : (
          <p className="hoja-nota">
            Se contrata desde el regalo del inicio, y se cobra en la tienda.
          </p>
        )}
      </Hoja>

      <Panelito
        abierto={panel === "restaurar"}
        titulo={t("aj.restaurar")}
        onCerrar={cierra}
      >
        Si ya has pagado en otro móvil, aquí se recupera. Se le pregunta a la
        tienda con tu cuenta; no hace falta escribir nada.
        <button className="hoja-boton" onClick={() => { cierra(); avisar("No hay compras que restaurar"); }}>
          Buscar mis compras
        </button>
      </Panelito>

      <Panelito abierto={panel === "regalar"} titulo={t("aj.regalar")} onCerrar={cierra}>
        Un año de Curva para quien tú digas. Llega por correo con la fecha que
        elijas.
        <button className="hoja-boton" onClick={() => { cierra(); avisar("Todavía no está montado"); }}>
          Elegir a quién
        </button>
      </Panelito>

      <Panelito abierto={panel === "privacidad"} titulo={t("aj.privacidad")} onCerrar={cierra}>
        Curva guarda en tu móvil lo que lees, lo que guardas y tus ajustes.
        Nada de eso sale del teléfono, y no hay anuncios ni rastreadores de
        terceros.
      </Panelito>

      <Panelito abierto={panel === "terminos"} titulo={t("aj.terminos")} onCerrar={cierra}>
        Los resúmenes son obra nuestra y se pueden leer, no revender. Los
        libros resumidos son de sus autores y editoriales, y ni ellos ni sus
        editoriales tienen nada que ver con esta aplicación.
      </Panelito>

      <Panelito abierto={panel === "creditos"} titulo={t("aj.creditos")} onCerrar={cierra}>
        Las fotografías vienen de Wikimedia Commons y de Pexels, cada una con
        su autor y su licencia anotados. Las cubiertas de los libros están
        dibujadas para Curva y no son las de las editoriales.
      </Panelito>

      <Hoja
        abierta={panel === "cerrar"}
        titulo={t("aj.cerrar")}
        pie="pabloverdalo@gmail.com"
        onCerrar={cierra}
      >
        <p className="hoja-nota">
          Lo que llevas leído se queda en este móvil aunque cierres la sesión.
        </p>
        <button className="hoja-boton" onClick={() => { cierra(); avisar("Sesión cerrada"); }}>
          {t("aj.cerrar")}
        </button>
      </Hoja>

      <Hoja
        abierta={panel === "borrar"}
        titulo={t("aj.borrar")}
        pie="Esto no se puede deshacer."
        onCerrar={cierra}
      >
        <p className="hoja-nota">
          Se borran tu cuenta, lo que llevas leído y lo que tienes guardado. La
          suscripción se cancela por separado en la tienda.
        </p>
        <button className="hoja-boton-peligro" onClick={() => { cierra(); avisar("Aquí iría el borrado de verdad"); }}>
          {t("aj.borrar")}
        </button>
      </Hoja>

      <Panelito abierto={panel === "soporte"} titulo={t("aj.soporte")} onCerrar={cierra}>
        Escríbenos y contestamos. Cuéntanos qué móvil tienes y qué estabas
        haciendo: con eso se arregla casi todo a la primera.
        <button className="hoja-boton" onClick={() => { cierra(); avisar("hola@curva.app"); }}>
          hola@curva.app
        </button>
      </Panelito>

      <AnimatePresence>
        {aviso && (
          <motion.p
            className="ajustes-aviso"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={springSoft}
          >
            {aviso}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/** El chevrón de Wiser. Va en todas las filas, también en las que no llevan
 *  valor: una lista donde unas filas tienen flecha y otras no parece una lista
 *  a medio hacer, y el chevrón no promete un valor, promete que se abre algo. */
function Chevron() {
  return (
    <svg className="aj-chevron" width="8" height="14" viewBox="0 0 8 14" aria-hidden>
      <path
        d="M1 1l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Una hoja de solo leer: un párrafo y, si acaso, un botón. Se saca aparte
 *  porque siete de las dieciséis son exactamente eso y repetir el `Hoja` con
 *  su `<p>` siete veces es lo que hace ilegible un fichero de pantalla. */
function Panelito({
  abierto,
  titulo,
  onCerrar,
  children,
}: {
  abierto: boolean;
  titulo: string;
  onCerrar: () => void;
  children: ReactNode;
}) {
  return (
    <Hoja abierta={abierto} titulo={titulo} onCerrar={onCerrar}>
      <p className="hoja-nota">{children}</p>
    </Hoja>
  );
}
