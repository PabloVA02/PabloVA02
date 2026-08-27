import { useMemo, useState, type ReactElement, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlyphBack } from "./glyphs";
import { spring, springSoft, springTight } from "./motion";
import { Chips, Conmutador, Hoja, Opciones, Segmentado } from "./Hoja";
import {
  NOMBRE_APARIENCIA,
  NOMBRE_ESCALA,
  type Apariencia,
  type Escala,
  type Almacen,
} from "./preferencias";
import { CATEGORIAS_CON_LIBROS } from "./libros/puente";

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

   Cada fila abre una hoja con el control de verdad, y el valor que se ve a la
   derecha sale del mismo sitio donde se guarda. Ninguna opción está pintada:
   el tema cambia el color de la app, la escala cambia el cuerpo del texto de
   las tarjetas, y los temas seguidos y silenciados se guardan en el
   dispositivo y sobreviven a la recarga.
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

type Panel =
  | "suscripcion" | "nombre" | "genero" | "edad" | "origen" | "idioma" | "nivel"
  | "seguidos" | "silenciados" | "objetivo" | "recordatorio" | "apariencia" | "escala"
  | "racha" | "descargar" | "sincronizar"
  | "compartir" | "valorar" | "proponer"
  | "faq" | "reportar" | "privacidad" | "terminos" | "creditos";

type Fila = {
  id?: Panel;
  nombre: string;
  Icono: () => ReactElement;
  /** Lo que hay ahora mismo, a la derecha. Un ajuste sin valor no informa. */
  valor?: string;
  /** Un interruptor en la propia fila: solo para lo que es sí o no. */
  conmutador?: { on: boolean; onCambiar: (v: boolean) => void };
};

type Grupo = { rotulo: string; filas: Fila[] };

export function Ajustes({
  nombre,
  racha = 3,
  prefs: almacen,
  suscrito = true,
  onCancelar,
  onNombre,
  onObjetivo,
  onVolver,
}: {
  nombre: string;
  racha?: number;
  /** Si está pagando ahora mismo. Manda en la hoja de la suscripción. */
  suscrito?: boolean;
  /** Cancela de verdad. Ver la hoja de «Gestionar suscripción». */
  onCancelar?: () => void;
  /* El almacén lo crea la app y no esta pantalla. Es lo que hace que el tema
     y la escala de texto sigan aplicados al salir de aquí: si el hook viviera
     dentro de Ajustes, sus efectos se desmontarían con la pantalla y la app
     volvería al tema claro en cuanto pulsaras «Volver». */
  prefs: Almacen;
  /** El nombre vive en la app: aquí se edita y allí se muestra. */
  onNombre?: (v: string) => void;
  onObjetivo?: (v: number) => void;
  onVolver: () => void;
}) {
  const { prefs, set, alternar, reiniciar } = almacen;
  const [panel, setPanel] = useState<Panel | null>(null);
  const [copiado, setCopiado] = useState(false);
  const [aviso, setAviso] = useState<string | null>(null);

  /** Un mensaje breve que se cae solo. Confirmar sin robar la pantalla. */
  const avisar = (t: string) => {
    setAviso(t);
    window.setTimeout(() => setAviso(null), 2200);
  };

  const temas = useMemo(() => CATEGORIAS_CON_LIBROS.map(String), []);
  const visible = nombre || prefs.nombre;

  const grupos: Grupo[] = [
    {
      rotulo: "Suscripción",
      filas: [
        {
          id: "suscripcion",
          nombre: "Gestionar suscripción",
          Icono: IcoCohete,
          valor: suscrito ? "Prueba, 7 días" : "Sin suscripción",
        },
      ],
    },
    {
      rotulo: "Sobre ti",
      filas: [
        { id: "nombre", nombre: "Nombre", Icono: IcoTarjeta, valor: visible },
        { id: "genero", nombre: "Identidad de género", Icono: IcoGenero, valor: prefs.genero },
        { id: "edad", nombre: "Edad", Icono: IcoEdad, valor: prefs.edad },
        { id: "origen", nombre: "Cómo nos conociste", Icono: IcoGlobo, valor: prefs.origen },
        { id: "idioma", nombre: "Idioma del contenido", Icono: IcoGlobo, valor: prefs.idioma },
        { id: "nivel", nombre: "Nivel de lectura", Icono: IcoBirrete, valor: prefs.nivel },
      ],
    },
    {
      rotulo: "A tu medida",
      filas: [
        {
          id: "seguidos",
          nombre: "Temas que sigues",
          Icono: IcoEtiquetas,
          valor: prefs.seguidos.length ? String(prefs.seguidos.length) : "Todos",
        },
        {
          id: "silenciados",
          nombre: "Temas silenciados",
          Icono: IcoSilencio,
          valor: prefs.silenciados.length ? String(prefs.silenciados.length) : "Ninguno",
        },
        { id: "objetivo", nombre: "Objetivo diario", Icono: IcoDiana, valor: `${prefs.objetivo} min` },
        {
          id: "recordatorio",
          nombre: "Recordatorio",
          Icono: IcoCampana,
          valor: prefs.recordatorioActivo ? prefs.recordatorio : "Desactivado",
        },
        {
          id: "apariencia",
          nombre: "Apariencia",
          Icono: IcoLuna,
          valor: NOMBRE_APARIENCIA[prefs.apariencia],
        },
        { id: "escala", nombre: "Tamaño del texto", Icono: IcoTexto, valor: NOMBRE_ESCALA[prefs.escala] },
        {
          nombre: "Sonido al pasar tarjeta",
          Icono: IcoAltavoz,
          conmutador: { on: prefs.sonido, onCambiar: (v) => set("sonido", v) },
        },
      ],
    },
    {
      rotulo: "Tu progreso",
      filas: [
        { id: "racha", nombre: "Racha y estadísticas", Icono: IcoLlama, valor: `${racha} días` },
        {
          id: "descargar",
          nombre: "Descargar para leer sin conexión",
          Icono: IcoDescarga,
          valor: prefs.sinConexion ? "Listo" : undefined,
        },
        {
          id: "sincronizar",
          nombre: "Sincronizar entre dispositivos",
          Icono: IcoNube,
          valor: prefs.sincronizar ? "Activado" : "Desactivado",
        },
      ],
    },
    {
      rotulo: "Échanos una mano",
      filas: [
        { id: "compartir", nombre: "Compartir la app", Icono: IcoCompartir },
        {
          id: "valorar",
          nombre: "Valorar en la tienda",
          Icono: IcoEstrella,
          valor: prefs.valorado ? "★".repeat(prefs.valorado) : undefined,
        },
        { id: "proponer", nombre: "Proponer un tema", Icono: IcoBombilla },
      ],
    },
    {
      rotulo: "Ayuda",
      filas: [
        { id: "faq", nombre: "Preguntas frecuentes", Icono: IcoInterrogante },
        { id: "reportar", nombre: "Reportar un error en un dato", Icono: IcoBandera },
      ],
    },
    {
      rotulo: "Otros",
      filas: [
        { id: "privacidad", nombre: "Política de privacidad", Icono: IcoEscudo },
        { id: "terminos", nombre: "Términos y condiciones", Icono: IcoDocumento },
        /* Los créditos NO son decoración legal opcional. Las fotografías de
           Commons y la llama de la racha van con licencias Creative Commons
           que obligan a citar la autoría, y ésta es la cita que viaja dentro
           del producto. Si se quita esta fila hay que quitar también las
           imágenes y la animación. */
        { id: "creditos", nombre: "Créditos e imágenes", Icono: IcoDocumento },
        {
          nombre: "Analítica y marketing",
          Icono: IcoGrafico,
          conmutador: { on: prefs.marketing, onCambiar: (v) => set("marketing", v) },
        },
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
                    if (f.conmutador) f.conmutador.onCambiar(!f.conmutador.on);
                    else if (f.id) setPanel(f.id);
                  }}
                >
                  <span className="ajustes-icono">
                    <f.Icono />
                  </span>
                  <span className="ajustes-nombre">{f.nombre}</span>

                  {f.conmutador ? (
                    <span className="interruptor interruptor-mini" data-on={f.conmutador.on}>
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
            navigator.clipboard?.writeText("3093ED9C-4B1A-4F27-54584B7E8389").catch(() => {});
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

      {/* --- Las hojas. Una por fila, con el control real dentro. --- */}

      <Hoja abierta={panel === "suscripcion"} titulo="Tu suscripción" onCerrar={() => setPanel(null)}>
        <Suscripcion suscrito={suscrito} onAviso={avisar} onCancelar={onCancelar} />
      </Hoja>

      <Hoja
        abierta={panel === "nombre"}
        titulo="Tu nombre"
        pie="Es como te saluda la app al abrirla."
        onCerrar={() => setPanel(null)}
      >
        <CampoTexto
          valor={visible}
          marcador="Tu nombre"
          maximo={24}
          onGuardar={(v) => {
            set("nombre", v);
            onNombre?.(v);
            setPanel(null);
          }}
        />
      </Hoja>

      <Hoja abierta={panel === "genero"} titulo="Identidad de género" onCerrar={() => setPanel(null)}>
        <Opciones
          valor={prefs.genero}
          opciones={["Mujer", "Hombre", "No binario", "Otro", "Sin decir"].map((n) => ({ id: n, nombre: n }))}
          onElegir={(v) => set("genero", v)}
        />
        <p className="hoja-nota">Solo se usa para el saludo. No afecta a lo que se te recomienda.</p>
      </Hoja>

      <Hoja abierta={panel === "edad"} titulo="Edad" onCerrar={() => setPanel(null)}>
        <Opciones
          valor={prefs.edad}
          opciones={["Menos de 18", "18-24", "25-34", "35-49", "50 o más", "Sin decir"].map((n) => ({
            id: n,
            nombre: n,
          }))}
          onElegir={(v) => set("edad", v)}
        />
      </Hoja>

      <Hoja abierta={panel === "origen"} titulo="Cómo nos conociste" onCerrar={() => setPanel(null)}>
        <Opciones
          valor={prefs.origen}
          opciones={[
            "Un amigo o un familiar",
            "Instagram o Facebook",
            "TikTok",
            "YouTube",
            "Un anuncio",
            "Buscando en internet o en la tienda",
            "Prensa, pódcast o boletín",
            "Sin decir",
          ].map((n) => ({ id: n, nombre: n }))}
          onElegir={(v) => set("origen", v)}
        />
        <p className="hoja-nota">
          Se pregunta una vez al empezar. Es lo único que nos dice qué canales
          funcionan de verdad, porque las tiendas de aplicaciones ya no lo cuentan.
        </p>
      </Hoja>

      <Hoja
        abierta={panel === "idioma"}
        titulo="Idioma del contenido"
        pie="Los resúmenes están escritos en español."
        onCerrar={() => setPanel(null)}
      >
        <Opciones
          valor={prefs.idioma}
          opciones={[
            { id: "Español", nombre: "Español", pie: "173 libros disponibles" },
            { id: "English", nombre: "English", pie: "Próximamente" },
            { id: "Português", nombre: "Português", pie: "Próximamente" },
          ]}
          onElegir={(v) => {
            if (v === "Español") set("idioma", v);
            else avisar("Ese idioma todavía no está disponible");
          }}
        />
      </Hoja>

      <Hoja
        abierta={panel === "nivel"}
        titulo="Nivel de lectura"
        pie="Ajusta cuánto contexto se da por sabido."
        onCerrar={() => setPanel(null)}
      >
        <Opciones
          valor={prefs.nivel}
          opciones={[
            { id: "Divulgativo", nombre: "Divulgativo", pie: "Se explica todo desde cero" },
            { id: "Medio", nombre: "Medio", pie: "Se dan por sabidos los nombres conocidos" },
            { id: "Exigente", nombre: "Exigente", pie: "Menos contexto y más discusión" },
            { id: "Sin definir", nombre: "Sin definir", pie: "Igual para todos los libros" },
          ]}
          onElegir={(v) => set("nivel", v)}
        />
      </Hoja>

      <Hoja
        abierta={panel === "seguidos"}
        titulo="Temas que sigues"
        pie="Suben en la estantería. Si no eliges ninguno, aparecen todos por igual."
        onCerrar={() => setPanel(null)}
      >
        <Chips
          activos={prefs.seguidos}
          opciones={temas}
          color={(id) => COLOR_TEMA[id] ?? "var(--ink)"}
          onAlternar={(id) => alternar("seguidos", id)}
        />
        {prefs.seguidos.length > 0 && (
          <button className="hoja-secundario" onClick={() => set("seguidos", [])}>
            Quitar todos
          </button>
        )}
      </Hoja>

      <Hoja
        abierta={panel === "silenciados"}
        titulo="Temas silenciados"
        pie="Dejan de aparecer en las recomendaciones. Siguen buscándose a mano."
        onCerrar={() => setPanel(null)}
      >
        <Chips
          activos={prefs.silenciados}
          opciones={temas}
          color={() => "var(--ink-soft)"}
          onAlternar={(id) => alternar("silenciados", id)}
        />
        {prefs.silenciados.length > 0 && (
          <button className="hoja-secundario" onClick={() => set("silenciados", [])}>
            Quitar todos
          </button>
        )}
      </Hoja>

      <Hoja
        abierta={panel === "objetivo"}
        titulo="Objetivo diario"
        pie="Cuánto quieres leer al día. Se puede cambiar cuando quieras."
        onCerrar={() => setPanel(null)}
      >
        <Segmentado
          id="objetivo"
          valor={prefs.objetivo}
          opciones={[3, 5, 10, 15, 20].map((n) => ({ id: n, nombre: `${n}` }))}
          onElegir={(v) => {
            set("objetivo", v);
            onObjetivo?.(v);
          }}
        />
        <p className="hoja-nota">
          {prefs.objetivo <= 3
            ? "Un capítulo corto. Sirve para no romper la racha en un día malo."
            : prefs.objetivo <= 5
              ? "Un capítulo entero. Es el ritmo para el que están medidos los libros."
              : prefs.objetivo <= 10
                ? "Dos capítulos. Un libro entero cada dos semanas y media."
                : "Sesión larga. Cuidado: los objetivos altos son los que se abandonan antes."}
        </p>
      </Hoja>

      <Hoja
        abierta={panel === "recordatorio"}
        titulo="Recordatorio"
        pie="Un aviso al día, a la hora que elijas."
        onCerrar={() => setPanel(null)}
      >
        <Conmutador
          nombre="Avisarme cada día"
          on={prefs.recordatorioActivo}
          onCambiar={(v) => set("recordatorioActivo", v)}
        />
        <AnimatePresence initial={false}>
          {prefs.recordatorioActivo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={springTight}
              style={{ overflow: "hidden" }}
            >
              <div className="hoja-horas">
                {["08:00", "13:30", "18:00", "20:30", "22:00"].map((h) => (
                  <motion.button
                    key={h}
                    className="hoja-hora"
                    data-on={prefs.recordatorio === h}
                    onClick={() => set("recordatorio", h)}
                    whileTap={{ scale: 0.94 }}
                    transition={springTight}
                  >
                    {h}
                  </motion.button>
                ))}
              </div>
              <p className="hoja-nota">
                La hora que mejor funciona es la que ya tiene un hueco muerto: el trayecto, la cola
                del café, los minutos antes de dormir.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </Hoja>

      <Hoja
        abierta={panel === "apariencia"}
        titulo="Apariencia"
        pie="Cambia las pantallas de lectura. La biblioteca y el perfil ya son oscuros de por sí."
        onCerrar={() => setPanel(null)}
      >
        <Opciones<Apariencia>
          valor={prefs.apariencia}
          opciones={[
            { id: "auto", nombre: "Automática", pie: "Sigue al sistema" },
            { id: "claro", nombre: "Claro", pie: "Papel hueso y tinta cálida" },
            { id: "oscuro", nombre: "Oscuro", pie: "Para leer de noche" },
          ]}
          onElegir={(v) => set("apariencia", v)}
        />
      </Hoja>

      <Hoja
        abierta={panel === "escala"}
        titulo="Tamaño del texto"
        pie="Afecta al cuerpo de las tarjetas, que es donde se lee de verdad."
        onCerrar={() => setPanel(null)}
      >
        <Segmentado<Escala>
          id="escala"
          valor={prefs.escala}
          opciones={(["pequeno", "normal", "grande", "enorme"] as Escala[]).map((e) => ({
            id: e,
            nombre: NOMBRE_ESCALA[e],
          }))}
          onElegir={(v) => set("escala", v)}
        />
        {/* Muestra real: el mismo estilo que una tarjeta de lectura. */}
        <div className="hoja-muestra">
          <p>
            Un panda gigante come unos veinte kilos de bambú al día. Para hacerlo agarra el tallo
            con una mano y le arranca las hojas de un tirón limpio.
          </p>
        </div>
      </Hoja>

      <Hoja abierta={panel === "racha"} titulo="Racha y estadísticas" onCerrar={() => setPanel(null)}>
        <Estadisticas racha={racha} objetivo={prefs.objetivo} />
      </Hoja>

      <Hoja
        abierta={panel === "descargar"}
        titulo="Leer sin conexión"
        pie="Guarda los resúmenes en el dispositivo."
        onCerrar={() => setPanel(null)}
      >
        <Descarga listo={prefs.sinConexion} onListo={() => set("sinConexion", true)} />
      </Hoja>

      <Hoja
        abierta={panel === "sincronizar"}
        titulo="Sincronizar"
        pie="Tu progreso, tus notas y tus temas en todos tus dispositivos."
        onCerrar={() => setPanel(null)}
      >
        <Conmutador
          nombre="Sincronización en la nube"
          pie={prefs.sincronizar ? "Última copia hace unos segundos" : "Todo se guarda solo aquí"}
          on={prefs.sincronizar}
          onCambiar={(v) => set("sincronizar", v)}
        />
        <p className="hoja-nota">
          Sin sincronizar, desinstalar la app borra la racha y los libros empezados. Es la causa
          número uno de perder el progreso.
        </p>
      </Hoja>

      <Hoja abierta={panel === "compartir"} titulo="Compartir la app" onCerrar={() => setPanel(null)}>
        <Compartir onAviso={avisar} />
      </Hoja>

      <Hoja
        abierta={panel === "valorar"}
        titulo="Valorar en la tienda"
        pie="Toca las estrellas."
        onCerrar={() => setPanel(null)}
      >
        <Estrellas valor={prefs.valorado} onElegir={(v) => set("valorado", v)} />
        <AnimatePresence>
          {prefs.valorado > 0 && (
            <motion.p
              className="hoja-nota"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springTight}
            >
              {prefs.valorado >= 4
                ? "Gracias. En una tienda de verdad, esto abriría la ficha para publicarlo."
                : "Gracias por decirlo. Cuéntanos qué falla en «Proponer un tema» y lo miramos."}
            </motion.p>
          )}
        </AnimatePresence>
      </Hoja>

      <Hoja
        abierta={panel === "proponer"}
        titulo="Proponer un tema"
        pie="¿Qué libro echas en falta?"
        onCerrar={() => setPanel(null)}
      >
        <CampoTexto
          valor=""
          marcador="Título y autor"
          maximo={90}
          etiqueta="Enviar propuesta"
          multilinea
          onGuardar={() => {
            setPanel(null);
            avisar("Propuesta enviada. Gracias.");
          }}
        />
      </Hoja>

      <Hoja abierta={panel === "faq"} titulo="Preguntas frecuentes" onCerrar={() => setPanel(null)}>
        <Acordeon
          items={[
            {
              p: "¿De dónde salen los resúmenes?",
              r: "Los escribe el equipo leyendo el libro entero y contrastando los datos con la bibliografía especializada. Cada resumen dice también dónde falla el libro, que es la parte que no suele contarse.",
            },
            {
              p: "¿Cuánto dura un capítulo?",
              r: "Unos cinco minutos, medidos a 200 palabras por minuto. Los minutos de cada parada se ven en el mapa del libro antes de empezar.",
            },
            {
              p: "¿Sustituye a leer el libro?",
              r: "No, y no lo pretende. Sirve para decidir cuáles merecen las quince horas y para no llegar en blanco a una conversación sobre los que no vas a leer.",
            },
            {
              p: "¿Qué pasa si pierdo la racha?",
              r: "Nada irreversible. La racha es un recordatorio, no una nota. Se puede empezar otra el mismo día.",
            },
          ]}
        />
      </Hoja>

      <Hoja
        abierta={panel === "reportar"}
        titulo="Reportar un error"
        pie="Si un dato está mal, queremos saberlo."
        onCerrar={() => setPanel(null)}
      >
        <CampoTexto
          valor=""
          marcador="Libro, capítulo y qué está mal"
          maximo={200}
          etiqueta="Enviar aviso"
          multilinea
          onGuardar={() => {
            setPanel(null);
            avisar("Aviso enviado. Lo revisamos.");
          }}
        />
      </Hoja>

      {/* CRÉDITOS. No es una hoja de relleno: las fotografías de Commons y la
          llama de la racha van con licencias Creative Commons que obligan a
          citar la autoría, y ésta es la cita que viaja dentro del producto.
          La lista completa, imagen a imagen, está en `CREDITOS-IMAGENES.md`,
          que se regenera con `scripts/creditos.mjs`. */}
      <Hoja abierta={panel === "creditos"} titulo="Créditos e imágenes" onCerrar={() => setPanel(null)}>
        <Legal
          parrafos={[
            "Las fotografías de las historias son 2274 imágenes de Wikimedia Commons. Cada una se pide a Commons en el momento de mostrarla: la aplicación no las almacena ni las redistribuye. Su autor y su licencia van guardados junto a cada imagen.",
            "La llama de la racha y el dado de la cabecera son animaciones de Noto Animated Emoji, de Google —los emojis de fuego y de dado—, bajo licencia Creative Commons Reconocimiento 4.0 (CC BY 4.0). googlefonts.github.io/noto-emoji-animation",
            "Las cubiertas de los libros están dibujadas para Curva y no proceden de ninguna colección externa.",
            "La lista completa, imagen a imagen y con su licencia, está publicada en el repositorio del proyecto.",
          ]}
        />
      </Hoja>

      <Hoja abierta={panel === "privacidad"} titulo="Política de privacidad" onCerrar={() => setPanel(null)}>
        <Legal
          parrafos={[
            "Este prototipo guarda tus preferencias únicamente en el almacenamiento local de este navegador. No se envía nada a ningún servidor.",
            "Eso incluye tu nombre, los temas que sigues, el objetivo diario, la apariencia y el tamaño del texto.",
            "Si borras los datos del navegador o usas otro dispositivo, todo vuelve a los valores iniciales.",
          ]}
        />
        <button
          className="hoja-secundario hoja-peligro"
          onClick={() => {
            reiniciar();
            avisar("Preferencias restablecidas");
          }}
        >
          Borrar mis datos y restablecer
        </button>
      </Hoja>

      <Hoja abierta={panel === "terminos"} titulo="Términos y condiciones" onCerrar={() => setPanel(null)}>
        <Legal
          parrafos={[
            "Curva es un prototipo de portafolio, sin ánimo comercial y sin pasarela de pago real.",
            "Los resúmenes son obra original: cuentan y discuten las ideas de cada libro con palabras propias, y no reproducen su texto.",
            "Los títulos, autores y editoriales mencionados pertenecen a sus respectivos titulares.",
          ]}
        />
      </Hoja>

      {/* Aviso breve, sobre todo lo demás y sin bloquear nada. */}
      <AnimatePresence>
        {aviso && (
          <motion.p
            className="ajustes-aviso"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={springTight}
          >
            {aviso}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   Los contenidos de las hojas que necesitan más que una lista.
   -------------------------------------------------------------------------- */

function CampoTexto({
  valor,
  marcador,
  maximo,
  etiqueta = "Guardar",
  multilinea,
  onGuardar,
}: {
  valor: string;
  marcador: string;
  maximo: number;
  etiqueta?: string;
  multilinea?: boolean;
  onGuardar: (v: string) => void;
}) {
  const [texto, setTexto] = useState(valor);
  const limpio = texto.trim();

  return (
    <div className="hoja-campo">
      {multilinea ? (
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value.slice(0, maximo))}
          placeholder={marcador}
          rows={4}
          autoFocus
        />
      ) : (
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value.slice(0, maximo))}
          placeholder={marcador}
          autoFocus
        />
      )}
      <div className="hoja-campo-pie">
        <span>
          {texto.length}/{maximo}
        </span>
        <button className="hoja-principal" disabled={!limpio} onClick={() => onGuardar(limpio)}>
          {etiqueta}
        </button>
      </div>
    </div>
  );
}

/* La hoja del plan. El botón de cancelar enseñaba un aviso y no hacía nada;
   ahora cancela de verdad, que es lo que hace que el aviso del perfil se pueda
   ver en sus dos versiones sin tocar el código.

   La lista decía «Los 173 resúmenes», que era el catálogo de hace medio año.
   No se ha actualizado el número: se ha quitado. Aquí y en el aviso del perfil
   se vende lo mismo y con las mismas palabras —libros, no resúmenes—, y una
   cifra escrita a mano en una pantalla de ventas es una cifra que algún día
   miente. */
function Suscripcion({
  suscrito,
  onAviso,
  onCancelar,
}: {
  suscrito: boolean;
  onAviso: (t: string) => void;
  onCancelar?: () => void;
}) {
  return (
    <>
      <div className="hoja-plan" data-activa={suscrito}>
        <span className="hoja-plan-sello">{suscrito ? "Activa" : "Cancelada"}</span>
        <p className="hoja-plan-titulo">{suscrito ? "Prueba gratuita" : "Sin suscripción"}</p>
        <p className="hoja-plan-pie">
          {suscrito
            ? "Quedan 7 días. Después, 4,99 € al mes."
            : "Un libro al día, y el resto bajo llave."}
        </p>
        <div className="hoja-plan-barra">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: suscrito ? 0.3 : 0 }}
            transition={{ ...springSoft, delay: 0.1 }}
          />
        </div>
      </div>
      <div className="hoja-lista">
        {[
          ["Libros ilimitados", "Sin esperar a mañana"],
          ["Curiosidades cada día", "Las 761, ilustradas"],
          ["Leer sin conexión", "Descarga completa"],
          ["Sin anuncios", "Nunca los hubo"],
        ].map(([n, p]) => (
          <div key={n} className="hoja-opcion" data-activa={suscrito ? "true" : "false"}>
            <span className="hoja-opcion-texto">
              <span className="hoja-opcion-nombre">{n}</span>
              <span className="hoja-opcion-pie">{p}</span>
            </span>
          </div>
        ))}
      </div>
      {suscrito && (
        <button
          className="hoja-secundario"
          onClick={() => {
            if (onCancelar) onCancelar();
            else onAviso("En el prototipo no hay cobro real");
          }}
        >
          Cancelar suscripción
        </button>
      )}
    </>
  );
}

function Estadisticas({ racha, objetivo }: { racha: number; objetivo: number }) {
  /* Siete columnas con una altura fija por día: el patrón importa más que el
     valor exacto, así que no hay eje ni números encima de las barras. */
  const semana = [4, 6, 0, 5, 8, 3, 5];
  const dias = ["L", "M", "X", "J", "V", "S", "D"];
  const alto = Math.max(...semana, objetivo);

  return (
    <>
      <div className="hoja-cifras">
        {[
          [String(racha), "días seguidos"],
          ["31", "capítulos"],
          ["2,7 h", "en total"],
        ].map(([n, p], i) => (
          <motion.div
            key={p}
            className="hoja-cifra"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTight, delay: 0.05 + i * 0.06 }}
          >
            <strong>{n}</strong>
            <span>{p}</span>
          </motion.div>
        ))}
      </div>

      <div className="hoja-semana">
        {semana.map((v, i) => (
          <div key={dias[i]} className="hoja-columna">
            <div className="hoja-barra-hueco">
              <motion.span
                className="hoja-barra"
                data-cumplido={v >= objetivo}
                initial={{ height: 0 }}
                animate={{ height: `${Math.max((v / alto) * 100, 4)}%` }}
                transition={{ ...springSoft, delay: 0.1 + i * 0.05 }}
              />
            </div>
            <span className="hoja-dia">{dias[i]}</span>
          </div>
        ))}
      </div>
      <p className="hoja-nota">
        Las barras de color marcan los días en que llegaste a tus {objetivo} minutos. El miércoles no
        leíste, y la racha aguantó igual: lo que cuenta es la tendencia, no la perfección.
      </p>
    </>
  );
}

function Descarga({ listo, onListo }: { listo: boolean; onListo: () => void }) {
  const [pct, setPct] = useState(listo ? 100 : 0);
  const [bajando, setBajando] = useState(false);

  const empezar = () => {
    if (bajando || pct >= 100) return;
    setBajando(true);
    /* Se simula por tramos irregulares: una barra que avanza a velocidad
       constante se lee como falsa, porque ninguna descarga real lo hace. */
    const tic = window.setInterval(() => {
      setPct((p) => {
        const siguiente = p + 4 + Math.random() * 11;
        if (siguiente >= 100) {
          window.clearInterval(tic);
          setBajando(false);
          onListo();
          return 100;
        }
        return siguiente;
      });
    }, 220);
  };

  return (
    <>
      <div className="hoja-descarga">
        <div className="hoja-descarga-barra">
          <motion.span
            animate={{ scaleX: pct / 100 }}
            transition={springTight}
            data-fin={pct >= 100}
          />
        </div>
        <p className="hoja-descarga-cifra">
          {pct >= 100 ? "173 de 173 · 48 MB" : `${Math.round((pct / 100) * 173)} de 173`}
        </p>
      </div>
      <button className="hoja-principal hoja-ancho" onClick={empezar} disabled={bajando || pct >= 100}>
        {pct >= 100 ? "Descargado" : bajando ? "Descargando…" : "Descargar todo"}
      </button>
      <p className="hoja-nota">
        Ocupa unos 48 MB. Los resúmenes son texto: lo que pesa son las ilustraciones.
      </p>
    </>
  );
}

function Compartir({ onAviso }: { onAviso: (t: string) => void }) {
  const enlace = "https://curva.app/i/3093ed";
  const nativo = typeof navigator !== "undefined" && "share" in navigator;

  return (
    <>
      <div className="hoja-enlace">
        <span>{enlace}</span>
        <button
          onClick={() => {
            navigator.clipboard?.writeText(enlace).catch(() => {});
            onAviso("Enlace copiado");
          }}
        >
          Copiar
        </button>
      </div>
      <button
        className="hoja-principal hoja-ancho"
        onClick={() => {
          if (nativo) {
            navigator
              .share({ title: "Curva", text: "Un libro en cinco minutos al día.", url: enlace })
              .catch(() => {});
          } else {
            navigator.clipboard?.writeText(enlace).catch(() => {});
            onAviso("Enlace copiado");
          }
        }}
      >
        {nativo ? "Compartir…" : "Copiar enlace"}
      </button>
      <p className="hoja-nota">
        Quien entre por tu enlace empieza con dos semanas de prueba en vez de una.
      </p>
    </>
  );
}

function Estrellas({ valor, onElegir }: { valor: number; onElegir: (v: number) => void }) {
  const [encima, setEncima] = useState(0);
  const activo = encima || valor;

  return (
    <div className="hoja-estrellas" onMouseLeave={() => setEncima(0)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <motion.button
          key={n}
          aria-label={`${n} estrellas`}
          onClick={() => onElegir(n)}
          onMouseEnter={() => setEncima(n)}
          whileTap={{ scale: 0.85 }}
          animate={{ scale: n <= activo ? 1 : 0.92 }}
          transition={springTight}
          data-on={n <= activo}
        >
          <svg width="34" height="34" viewBox="0 0 22 22" aria-hidden>
            <path
              d="m11 3.4 2.4 5 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4L3.2 9.2l5.4-.8Z"
              fill={n <= activo ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      ))}
    </div>
  );
}

function Acordeon({ items }: { items: { p: string; r: string }[] }) {
  const [abierto, setAbierto] = useState<number | null>(0);

  return (
    <div className="hoja-acordeon">
      {items.map((it, i) => (
        <div key={it.p} className="hoja-faq" data-abierto={abierto === i}>
          <button onClick={() => setAbierto(abierto === i ? null : i)}>
            <span>{it.p}</span>
            <motion.span
              className="hoja-faq-signo"
              animate={{ rotate: abierto === i ? 45 : 0 }}
              transition={springTight}
              aria-hidden
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {abierto === i && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={springTight}
              >
                {it.r}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function Legal({ parrafos }: { parrafos: string[] }): ReactNode {
  return (
    <div className="hoja-legal">
      {parrafos.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
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
