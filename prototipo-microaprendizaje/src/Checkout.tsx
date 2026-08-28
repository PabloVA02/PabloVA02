import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlyphBack, GlyphCandado, GlyphTick } from "./glyphs";
import { spring, springPop, springSoft } from "./motion";
import { DESCUENTO_VUELTA } from "./Suscripcion";

/* ==========================================================================
   El alta y el pago.

   Aquí es donde se cae la gente, así que aquí es donde hay que ser tacaño con
   cada toque. Lo que hay montado, y por qué:

   UNA SOLA PÁGINA. Nada de pasos con «siguiente». Los bloques se abren uno
   detrás de otro en la misma pantalla y los ya resueltos se pliegan en una
   línea con su visto. Se ve todo el trámite de un vistazo, que es lo que evita
   la sensación de pozo sin fondo.

   LA CARTERA, ARRIBA DEL TODO. Apple Pay o Google Pay resuelven cuenta y pago
   en un toque, sin teclado: el correo lo da la cartera. Es el camino que se
   quiere que coja la mayoría, así que va primero y es el más grande. El correo
   y la tarjeta son el plan B, no el camino principal.

   SIN CONTRASEÑA. Correo y código de seis dígitos. Una contraseña obliga a
   inventarla, recordarla y recuperarla; un código llega solo y el teclado del
   móvil lo rellena desde la notificación (`autocomplete="one-time-code"`).

   EL DEDO MANDA. Todo lo que se pulsa mide 48 px o más y vive en la mitad de
   abajo; el botón de cerrar, que es lo único que no queremos que se pulse sin
   querer, arriba y pequeño.

   VALIDAR AL SALIR DEL CAMPO, NO AL TECLEAR. Nadie escribe bien un número de
   tarjeta a medias: enseñar el error en la tercera cifra es regañar por algo
   que todavía no ha pasado. El error aparece al abandonar el campo y
   desaparece en cuanto se vuelve a escribir.

   AVANCE AUTOMÁTICO. Cuando un campo se llena, el foco salta al siguiente:
   dieciséis cifras, un mes, un año y un CVC son cuatro saltos que el usuario
   no tiene que dar.

   Y LAS FECHAS, DICHAS. Cuándo se avisa y cuándo se cobra, con día y mes
   calculados desde hoy. El miedo en una prueba gratuita no es el precio, es
   no saber qué día te van a cobrar.
   ========================================================================== */

const PRECIO_ANUAL = 23.99;
const DIAS_PRUEBA = 7;
const AVISO_ANTES = 2;

/* El precio de la vuelta sale del descuento que anuncia la tarjeta del perfil,
   no de un número escrito aquí otra vez. Ver `DESCUENTO_VUELTA` en
   `Suscripcion.tsx`: si un día pasa a ser el 30 %, cambia en los dos sitios a
   la vez o no cambia en ninguno. Se redondea a céntimo. */
const PRECIO_VUELTA = Math.round(PRECIO_ANUAL * (1 - DESCUENTO_VUELTA / 100) * 100) / 100;

const euros = (n: number) => n.toFixed(2).replace(".", ",") + " €";

function enDias(dias: number) {
  const d = new Date();
  d.setDate(d.getDate() + dias);
  return d;
}

const fechaLarga = (d: Date) =>
  d.toLocaleDateString("es-ES", { day: "numeric", month: "long" });

/* --------------------------------------------------------------------------
   Reglas de tarjeta. Son las de verdad, no un `length === 16`.
   -------------------------------------------------------------------------- */

const digitos = (s: string) => s.replace(/\D/g, "");

type Marca = { id: "visa" | "mastercard" | "amex" | "otra"; largo: number; cvc: number; nombre: string };

function marcaDe(numero: string): Marca {
  const n = digitos(numero);
  if (/^3[47]/.test(n)) return { id: "amex", largo: 15, cvc: 4, nombre: "Amex" };
  if (/^4/.test(n)) return { id: "visa", largo: 16, cvc: 3, nombre: "Visa" };
  if (/^(5[1-5]|2[2-7])/.test(n)) return { id: "mastercard", largo: 16, cvc: 3, nombre: "Mastercard" };
  return { id: "otra", largo: 16, cvc: 3, nombre: "" };
}

/** Agrupa como lo hace la tarjeta física: 4-6-5 en Amex, 4-4-4-4 en el resto. */
function agrupa(numero: string) {
  const n = digitos(numero);
  const grupos = marcaDe(n).id === "amex" ? [4, 6, 5] : [4, 4, 4, 4];
  const partes: string[] = [];
  let i = 0;
  for (const g of grupos) {
    if (i >= n.length) break;
    partes.push(n.slice(i, i + g));
    i += g;
  }
  return partes.join(" ");
}

/**
 * Luhn. Es la comprobación que hace que un número mal tecleado se detecte aquí
 * y no treinta segundos después, cuando conteste el banco.
 */
function luhn(numero: string) {
  const n = digitos(numero);
  let suma = 0;
  let doble = false;
  for (let i = n.length - 1; i >= 0; i--) {
    let d = Number(n[i]);
    if (doble) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    suma += d;
    doble = !doble;
  }
  return n.length > 0 && suma % 10 === 0;
}

function caducidadValida(texto: string) {
  const n = digitos(texto);
  if (n.length !== 4) return false;
  const mes = Number(n.slice(0, 2));
  const ano = 2000 + Number(n.slice(2));
  if (mes < 1 || mes > 12) return false;
  // Válida hasta el último día de su mes.
  return new Date(ano, mes, 0, 23, 59, 59) >= new Date();
}

const correoValido = (c: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.trim());

/* --------------------------------------------------------------------------
   La pantalla
   -------------------------------------------------------------------------- */

type Fase = "correo" | "codigo" | "pago" | "listo";

export function Checkout({
  reducido,
  onVolver,
  onListo,
  vuelta = false,
}: {
  reducido: boolean;
  onVolver: () => void;
  /** Con qué correo se ha quedado la cuenta, para saludar luego. */
  onListo: (correo: string) => void;
  /**
   * Si viene del aviso de suscripción caducada, con su descuento.
   *
   * NO ES UN ADORNO: la tarjeta del perfil le promete un tanto por ciento, y
   * una caja que después le enseñara «7 días gratis · 23,99 €/año» estaría
   * desmintiéndola en la pantalla siguiente. Y los días gratis tampoco: la
   * prueba es para quien no conoce esto, y este ya ha pagado un año entero.
   * Así que con `vuelta` el bloque del plan cambia de las tres líneas de la
   * prueba al precio de hoy, con el de siempre tachado al lado.
   */
  vuelta?: boolean;
}) {
  const [fase, setFase] = useState<Fase>("correo");
  const [correo, setCorreo] = useState("");
  const [errorCorreo, setErrorCorreo] = useState("");
  const [codigo, setCodigo] = useState<string[]>(Array(6).fill(""));
  const [numero, setNumero] = useState("");
  const [caducidad, setCaducidad] = useState("");
  const [cvc, setCvc] = useState("");
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [enviando, setEnviando] = useState(false);
  const [cartera, setCartera] = useState<"apple" | "google" | null>(null);

  const refCaducidad = useRef<HTMLInputElement>(null);
  const refCvc = useRef<HTMLInputElement>(null);
  const refsCodigo = useRef<(HTMLInputElement | null)[]>([]);

  const marca = marcaDe(numero);
  const cobro = enDias(DIAS_PRUEBA);
  const aviso = enDias(DIAS_PRUEBA - AVISO_ANTES);
  /* La vuelta no tiene prueba, así que su fecha no es la del cobro: es la de
     la renovación, dentro de un año. */
  const renueva = enDias(365);

  const tarjetaLista =
    luhn(numero) &&
    digitos(numero).length === marca.largo &&
    caducidadValida(caducidad) &&
    cvc.length === marca.cvc;

  /* --- Cuenta --- */

  function mandarCodigo() {
    if (!correoValido(correo)) {
      setErrorCorreo("Ese correo no parece completo. Revísalo.");
      return;
    }
    setErrorCorreo("");
    setFase("codigo");
  }

  function escribirCodigo(i: number, valor: string) {
    const limpio = digitos(valor);
    if (!limpio) {
      const copia = [...codigo];
      copia[i] = "";
      return setCodigo(copia);
    }
    // Pegar el código entero desde el correo tiene que funcionar: se reparte.
    const copia = [...codigo];
    for (let k = 0; k < limpio.length && i + k < 6; k++) copia[i + k] = limpio[k];
    setCodigo(copia);
    const siguiente = Math.min(i + limpio.length, 5);
    refsCodigo.current[siguiente]?.focus();
  }

  // En cuanto están las seis cifras se da por bueno: pedir además un botón
  // «verificar» es un toque de más para algo que ya se sabe que está completo.
  useEffect(() => {
    if (fase !== "codigo") return;
    if (codigo.every((c) => c !== "")) {
      const id = window.setTimeout(() => setFase("pago"), 420);
      return () => window.clearTimeout(id);
    }
  }, [codigo, fase]);

  /* --- Tarjeta --- */

  function alEscribirNumero(v: string) {
    const n = digitos(v).slice(0, marcaDe(v).largo);
    setNumero(agrupa(n));
    setErrores((e) => ({ ...e, numero: "" }));
    if (n.length === marcaDe(n).largo) refCaducidad.current?.focus();
  }

  function alEscribirCaducidad(v: string) {
    const n = digitos(v).slice(0, 4);
    setCaducidad(n.length > 2 ? `${n.slice(0, 2)}/${n.slice(2)}` : n);
    setErrores((e) => ({ ...e, caducidad: "" }));
    if (n.length === 4) refCvc.current?.focus();
  }

  /* --- Cierre --- */

  function pagar(via: "apple" | "google" | "tarjeta") {
    if (via !== "tarjeta") setCartera(via);
    setEnviando(true);
    window.setTimeout(() => {
      setEnviando(false);
      setFase("listo");
      // El cierre tiene que durar lo que dura su animación más un respiro:
      // si se va antes, el visto se ve a medio dibujar y parece un fallo.
      window.setTimeout(() => onListo(correo || "hola@curva.app"), reducido ? 400 : 2300);
    }, reducido ? 200 : 900);
  }

  const puedePagar = fase === "pago" && tarjetaLista && !enviando;

  return (
    <motion.div
      className="checkout"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: spring }}
      exit={{ opacity: 0, y: 16, transition: { duration: 0.18 } }}
    >
      <header className="checkout-cabecera">
        <button className="icon-btn" onClick={onVolver} aria-label="Volver">
          <GlyphBack />
        </button>
        <span className="checkout-seguro">
          <GlyphCandado />
          Pago cifrado
        </span>
      </header>

      <div className="checkout-cuerpo">
        {/* 1. Qué se contrata y CUÁNDO se cobra. Lo primero, sin scroll. */}
        <motion.section
          className="plan"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.06 }}
        >
          <div className="plan-fila">
            <span className="plan-nombre">Curva completo</span>
            <span className="plan-gratis">
              {vuelta ? `−${DESCUENTO_VUELTA} %` : `${DIAS_PRUEBA} días gratis`}
            </span>
          </div>
          {vuelta ? (
            <>
              {/* El precio de hoy, con el de siempre tachado al lado: es la
                  manera de que el descuento se vea en euros y no solo en tanto
                  por ciento, que es lo que prometía la tarjeta del perfil. */}
              <p className="plan-precio">
                Hoy pagas <strong>{euros(PRECIO_VUELTA)}</strong>{" "}
                <s className="plan-antes">{euros(PRECIO_ANUAL)}</s> · un año completo
              </p>
              <ul className="plan-fechas">
                <li>
                  <span className="plan-punto" data-hoy />
                  Vuelves ahora mismo, con tu racha y lo que llevabas leído
                </li>
                <li>
                  <span className="plan-punto" />
                  El descuento es del primer año; después, {euros(PRECIO_ANUAL)}
                </li>
                <li>
                  <span className="plan-punto" />
                  El {fechaLarga(renueva)} se renueva, salvo que canceles antes
                </li>
              </ul>
            </>
          ) : (
            <>
              <p className="plan-precio">
                Hoy pagas <strong>0 €</strong> · después {euros(PRECIO_ANUAL)}/año
              </p>
              <ul className="plan-fechas">
                <li>
                  <span className="plan-punto" data-hoy />
                  Hoy empieza tu semana completa
                </li>
                <li>
                  <span className="plan-punto" />
                  El {fechaLarga(aviso)} te avisamos de que quedan {AVISO_ANTES} días
                </li>
                <li>
                  <span className="plan-punto" />
                  El {fechaLarga(cobro)} se cobra {euros(PRECIO_ANUAL)}, salvo que canceles
                </li>
              </ul>
            </>
          )}
        </motion.section>

        {/* 2. La cartera: un toque y no hay que escribir nada */}
        <motion.section
          className="cartera"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.14 }}
        >
          <motion.button
            className="btn-cartera"
            data-marca="apple"
            onClick={() => pagar("apple")}
            whileTap={{ scale: 0.98 }}
            disabled={enviando}
          >
            <LogoManzana />
            Pay
          </motion.button>
          <motion.button
            className="btn-cartera"
            data-marca="google"
            onClick={() => pagar("google")}
            whileTap={{ scale: 0.98 }}
            disabled={enviando}
          >
            <LogoG />
            Pay
          </motion.button>
          <p className="cartera-nota">Un toque. La cuenta se crea con el correo de tu cartera.</p>
        </motion.section>

        <motion.div
          className="checkout-o"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducido ? 0 : 0.2 }}
        >
          <span>o con tu correo</span>
        </motion.div>

        {/* 3. La cuenta, sin contraseña */}
        <section className="bloque" data-hecho={fase === "pago" || fase === "listo"}>
          <AnimatePresence mode="wait">
            {fase === "correo" && (
              <motion.div
                key="correo"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                transition={springSoft}
              >
                <label className="campo">
                  <span className="campo-rotulo">Tu correo</span>
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                    enterKeyHint="go"
                    placeholder="tu@correo.com"
                    value={correo}
                    onChange={(e) => {
                      setCorreo(e.target.value);
                      setErrorCorreo("");
                    }}
                    onKeyDown={(e) => e.key === "Enter" && mandarCodigo()}
                    data-mal={!!errorCorreo}
                  />
                </label>
                {errorCorreo && (
                  <motion.p
                    className="campo-error"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errorCorreo}
                  </motion.p>
                )}
                <motion.button
                  className="btn-secundario"
                  onClick={mandarCodigo}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviarme el código
                </motion.button>
              </motion.div>
            )}

            {fase === "codigo" && (
              <motion.div
                key="codigo"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                transition={springSoft}
              >
                <p className="codigo-texto">
                  Hemos mandado seis cifras a <strong>{correo}</strong>
                </p>
                <div className="codigo-casillas">
                  {codigo.map((c, i) => (
                    <input
                      key={i}
                      ref={(el) => {
                        refsCodigo.current[i] = el;
                      }}
                      className="codigo-casilla"
                      type="text"
                      inputMode="numeric"
                      // Lo que hace que iOS lo rellene solo desde la notificación
                      autoComplete={i === 0 ? "one-time-code" : "off"}
                      maxLength={6}
                      value={c}
                      autoFocus={i === 0}
                      onChange={(e) => escribirCodigo(i, e.target.value)}
                      onKeyDown={(e) => {
                        // Borrar en una casilla vacía retrocede: es lo que espera
                        // el dedo cuando se ha equivocado en la anterior.
                        if (e.key === "Backspace" && !codigo[i] && i > 0) {
                          refsCodigo.current[i - 1]?.focus();
                        }
                      }}
                      data-lleno={!!c}
                    />
                  ))}
                </div>
                <div className="codigo-pie">
                  <button className="enlace" onClick={() => setFase("correo")}>
                    Cambiar correo
                  </button>
                  <Reenviar />
                </div>
              </motion.div>
            )}

            {(fase === "pago" || fase === "listo") && (
              <motion.div
                key="hecho"
                className="bloque-hecho"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={springPop}
              >
                <span className="visto">
                  <GlyphTick />
                </span>
                <span className="bloque-hecho-texto">{correo}</span>
                <button className="enlace" onClick={() => setFase("correo")}>
                  Cambiar
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* 4. La tarjeta. Solo cuando hay cuenta: antes no hay dónde cobrar */}
        <AnimatePresence>
          {(fase === "pago" || fase === "listo") && (
            <motion.section
              className="bloque tarjeta"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={reducido ? { duration: 0.01 } : springSoft}
            >
              <label className="campo">
                <span className="campo-rotulo">Número de tarjeta</span>
                <div className="campo-caja">
                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    placeholder="1234 1234 1234 1234"
                    value={numero}
                    onChange={(e) => alEscribirNumero(e.target.value)}
                    onBlur={(ev) => {
                      const v = ev.target.value;
                      setErrores((e) => ({
                        ...e,
                        numero: v && !luhn(v) ? "Ese número no cuadra. Revísalo." : "",
                      }));
                    }}
                    data-mal={!!errores.numero}
                  />
                  <AnimatePresence>
                    {marca.nombre && (
                      <motion.span
                        className="campo-marca"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={springPop}
                      >
                        {marca.nombre}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </label>
              {errores.numero && <p className="campo-error">{errores.numero}</p>}

              <div className="campo-fila">
                <label className="campo">
                  <span className="campo-rotulo">Caduca</span>
                  <input
                    ref={refCaducidad}
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    placeholder="MM/AA"
                    value={caducidad}
                    onChange={(e) => alEscribirCaducidad(e.target.value)}
                    onBlur={(ev) => {
                      const v = ev.target.value;
                      setErrores((e) => ({
                        ...e,
                        caducidad: v && !caducidadValida(v) ? "Esa fecha ya ha pasado" : "",
                      }));
                    }}
                    data-mal={!!errores.caducidad}
                  />
                </label>
                <label className="campo">
                  <span className="campo-rotulo">CVC</span>
                  <input
                    ref={refCvc}
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder={marca.cvc === 4 ? "1234" : "123"}
                    value={cvc}
                    onChange={(e) => setCvc(digitos(e.target.value).slice(0, marca.cvc))}
                  />
                </label>
              </div>
              {errores.caducidad && <p className="campo-error">{errores.caducidad}</p>}
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      {/* 5. El pie fijo: la acción vive donde llega el pulgar */}
      <div className="checkout-pie">
        <motion.button
          className="primary-btn checkout-cta"
          onClick={() => pagar("tarjeta")}
          disabled={!puedePagar}
          whileTap={puedePagar ? { scale: 0.98 } : {}}
          transition={springPop}
        >
          {enviando
            ? <Puntos />
            : vuelta
              ? `Volver por ${euros(PRECIO_VUELTA)}`
              : `Empezar los ${DIAS_PRUEBA} días gratis`}
        </motion.button>
        {/* Y la nota de debajo dice lo que pasa HOY, que en la vuelta es lo
            contrario que en la prueba: aquí sí se cobra, y esconderlo detrás
            de un «hoy no se te cobra nada» heredado de la otra mitad sería la
            clase de letra pequeña que esta pantalla existe para no tener. */}
        <p className="checkout-nota">
          {vuelta
            ? "Se cobra hoy · Cancela cuando quieras"
            : "Hoy no se te cobra nada · Cancela cuando quieras"}
        </p>
      </div>

      <AnimatePresence>
        {fase === "listo" && <Hecho cartera={cartera} reducido={reducido} vuelta={vuelta} />}
      </AnimatePresence>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   Piezas sueltas
   -------------------------------------------------------------------------- */

/** El reenvío con cuenta atrás: sin ella, la gente lo pulsa cinco veces. */
function Reenviar() {
  const [quedan, setQuedan] = useState(30);

  useEffect(() => {
    if (quedan <= 0) return;
    const id = window.setTimeout(() => setQuedan((q) => q - 1), 1000);
    return () => window.clearTimeout(id);
  }, [quedan]);

  if (quedan > 0) return <span className="codigo-espera">Reenviar en {quedan} s</span>;
  return (
    <button className="enlace" onClick={() => setQuedan(30)}>
      Reenviar código
    </button>
  );
}

/** Tres puntos mientras habla el banco. Nunca un botón que no responde. */
function Puntos() {
  return (
    <span className="puntos" aria-label="Procesando">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
        />
      ))}
    </span>
  );
}

/**
 * El cierre. El visto se DIBUJA, no aparece: un trazo que se completa se lee
 * como «hecho», y un icono que hace pop se lee como «mira, un icono».
 */
function Hecho({ cartera, reducido, vuelta }: {
  cartera: "apple" | "google" | null;
  reducido: boolean;
  vuelta: boolean;
}) {
  return (
    <motion.div
      className="hecho"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="hecho-rueda"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.05 }}
      >
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden>
          <motion.circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            stroke="var(--sage)"
            strokeWidth="4"
            initial={{ pathLength: reducido ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={reducido ? { duration: 0.01 } : { duration: 0.5, ease: "easeOut" }}
            style={{ rotate: -90, originX: "40px", originY: "40px" }}
          />
          <motion.path
            d="M25 41 L36 52 L56 30"
            fill="none"
            stroke="var(--sage)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: reducido ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={reducido ? { duration: 0.01 } : { duration: 0.34, delay: 0.32, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
      <motion.p
        className="hecho-texto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducido ? { duration: 0.01 } : { ...springSoft, delay: 0.5 }}
      >
        {vuelta ? "Ya está. Vuelves a tenerlo todo" : `Ya está. Tienes ${DIAS_PRUEBA} días`}
        {cartera ? " y no has escrito ni una tecla" : ""}.
      </motion.p>
    </motion.div>
  );
}

/* Logos de las carteras, dibujados a mano y en monocromo: son un indicio de
   dónde pulsar, no una marca que haya que reproducir con exactitud. */

function LogoManzana() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden fill="currentColor">
      <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.2 1.2-2.5 1.2-2.5s-2.4-.9-2.4-3.6z" />
      <path d="M14.3 5.9c.6-.8 1-1.9.9-3-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.6-1.3z" />
    </svg>
  );
}

function LogoG() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden fill="currentColor">
      <path d="M21.4 12.2c0-.7-.1-1.3-.2-1.9H12v3.7h5.3a4.5 4.5 0 0 1-2 3v2.4h3.2c1.9-1.7 2.9-4.3 2.9-7.2z" />
      <path d="M12 22c2.7 0 4.9-.9 6.5-2.4l-3.2-2.4c-.9.6-2 1-3.3 1-2.5 0-4.7-1.7-5.4-4H3.3v2.5A10 10 0 0 0 12 22z" />
      <path d="M6.6 14.2a6 6 0 0 1 0-3.8V7.9H3.3a10 10 0 0 0 0 9l3.3-2.6z" />
      <path d="M12 5.8c1.4 0 2.7.5 3.7 1.5l2.8-2.8A10 10 0 0 0 3.3 7.9l3.3 2.6c.7-2.4 2.9-4.1 5.4-4.1z" />
    </svg>
  );
}
