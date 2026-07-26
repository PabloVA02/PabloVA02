import { useCallback, useEffect, useState } from "react";

/* ==========================================================================
   Las preferencias del usuario.

   Un solo objeto plano, un solo sitio donde se guarda y un solo sitio donde
   se aplican los efectos. Tener la lectura, la escritura y el efecto
   repartidos por seis componentes es lo que convierte unos ajustes en algo
   que "casi" funciona.

   Se persiste en localStorage porque un ajuste que se olvida al recargar no
   es un ajuste: es una animación. Y se aplica sobre `document.documentElement`
   porque el tema y la escala de texto tienen que alcanzar a toda la app, no
   solo al árbol de React que hay debajo del proveedor.
   ========================================================================== */

export type Apariencia = "auto" | "claro" | "oscuro";
export type Escala = "pequeno" | "normal" | "grande" | "enorme";

export type Preferencias = {
  nombre: string;
  genero: string;
  edad: string;
  idioma: string;
  nivel: string;
  seguidos: string[];
  silenciados: string[];
  objetivo: number;
  recordatorio: string;
  recordatorioActivo: boolean;
  apariencia: Apariencia;
  escala: Escala;
  sonido: boolean;
  sinConexion: boolean;
  sincronizar: boolean;
  marketing: boolean;
  valorado: number;
};

export const POR_DEFECTO: Preferencias = {
  nombre: "Hola",
  genero: "Sin decir",
  edad: "Sin decir",
  idioma: "Español",
  nivel: "Sin definir",
  seguidos: [],
  silenciados: [],
  objetivo: 5,
  recordatorio: "20:30",
  recordatorioActivo: true,
  apariencia: "auto",
  escala: "normal",
  sonido: true,
  sinConexion: false,
  sincronizar: false,
  marketing: false,
  valorado: 0,
};

const CLAVE = "curva.preferencias.v1";

/* Multiplicador que se aplica al cuerpo de texto de las tarjetas.

   El tope está medido, no elegido a ojo: con la tarjeta más larga del
   catálogo, un factor de 1,26 desborda el alto disponible y el aviso de
   «desliza para avanzar» se cruza con las últimas líneas. A 1,2 entra, y la
   tarjeta sigue pudiendo desplazarse por si algún capítulo futuro se pasa. */
export const FACTOR: Record<Escala, number> = {
  pequeno: 0.92,
  normal: 1,
  grande: 1.1,
  enorme: 1.2,
};

export const NOMBRE_ESCALA: Record<Escala, string> = {
  pequeno: "Pequeño",
  normal: "Normal",
  grande: "Grande",
  enorme: "Enorme",
};

export const NOMBRE_APARIENCIA: Record<Apariencia, string> = {
  auto: "Automática",
  claro: "Claro",
  oscuro: "Oscuro",
};

function leer(): Preferencias {
  if (typeof window === "undefined") return POR_DEFECTO;
  try {
    const crudo = window.localStorage.getItem(CLAVE);
    if (!crudo) return POR_DEFECTO;
    /* Se fusiona con los valores por defecto en vez de confiar en lo guardado:
       una versión anterior puede no tener campos que hoy existen, y un
       `undefined` suelto rompe el componente que lo lee. */
    return { ...POR_DEFECTO, ...(JSON.parse(crudo) as Partial<Preferencias>) };
  } catch {
    return POR_DEFECTO;
  }
}

function escribir(p: Preferencias) {
  try {
    window.localStorage.setItem(CLAVE, JSON.stringify(p));
  } catch {
    /* Modo privado o cuota llena. Se pierde la persistencia y la app sigue. */
  }
}

/* El tema efectivo cuando la preferencia es «auto»: lo decide el sistema, y
   hay que escucharlo, porque el móvil cambia solo al anochecer. */
function temaDelSistema(): "claro" | "oscuro" {
  if (typeof window === "undefined" || !window.matchMedia) return "claro";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro";
}

/** Lo que devuelve el hook. La app lo crea una vez y lo pasa hacia abajo. */
export type Almacen = ReturnType<typeof usePreferencias>;

export function usePreferencias() {
  const [prefs, setPrefs] = useState<Preferencias>(leer);
  const [sistema, setSistema] = useState<"claro" | "oscuro">(temaDelSistema);

  // Un solo escuchador para el tema del sistema, montado una vez.
  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const on = () => setSistema(mq.matches ? "oscuro" : "claro");
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const tema = prefs.apariencia === "auto" ? sistema : prefs.apariencia;

  // Efectos globales: van al elemento raíz para que alcancen a toda la app.
  useEffect(() => {
    const raiz = document.documentElement;
    raiz.dataset.tema = tema;
    raiz.style.setProperty("--texto-escala", String(FACTOR[prefs.escala]));
  }, [tema, prefs.escala]);

  useEffect(() => escribir(prefs), [prefs]);

  /** Cambia una clave sin tocar el resto. */
  const set = useCallback(<K extends keyof Preferencias>(clave: K, valor: Preferencias[K]) => {
    setPrefs((p) => ({ ...p, [clave]: valor }));
  }, []);

  /** Añade o quita de una lista, que es el gesto de los chips de temas. */
  const alternar = useCallback((clave: "seguidos" | "silenciados", valor: string) => {
    setPrefs((p) => {
      const lista = p[clave];
      const dentro = lista.includes(valor);
      const siguiente = dentro ? lista.filter((x) => x !== valor) : [...lista, valor];
      /* Un tema no puede estar seguido y silenciado a la vez: al meterlo en
         una lista se saca de la otra. Sin esto, la biblioteca recibe órdenes
         contradictorias y gana la que se evalúe antes, que es un error que
         solo aparece en producción. */
      const opuesta = clave === "seguidos" ? "silenciados" : "seguidos";
      return {
        ...p,
        [clave]: siguiente,
        [opuesta]: dentro ? p[opuesta] : p[opuesta].filter((x) => x !== valor),
      };
    });
  }, []);

  const reiniciar = useCallback(() => setPrefs(POR_DEFECTO), []);

  return { prefs, set, alternar, reiniciar, tema };
}
