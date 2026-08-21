import { CATALOGO } from "./catalogo";
import { PAGINAS } from "./paginas";
import type { Resumen } from "./tipos";

/* ==========================================================================
   El índice de resúmenes escritos.

   Aquí no hay texto: hay doscientas maneras de ir a buscarlo. Cada entrada
   es una función que importa su fichero cuando de verdad hace falta, y no
   antes. Antes esto eran doscientos `import` estáticos, lo que significaba
   que abrir la app —para leer un libro— descargaba los doscientos: seis
   megas de golpe para ver cinco mil palabras.

   Lo que la biblioteca necesita para pintar la estantería (títulos, autores,
   minutos por capítulo) no vive aquí sino en `meta.ts`, que se genera con
   `scripts/generar-meta.mjs` y pesa unas décimas de lo que pesa un solo
   fichero de categoría. El texto entero solo se descarga al abrir un libro.

   `comprobar()` sigue siendo la red de seguridad del catálogo: cruza lo que
   dice el registro con lo que existe de verdad. Ahora compara identificadores
   en vez de resúmenes cargados, así que no descarga nada para hacerlo.
   ========================================================================== */

type Cargador = () => Promise<Resumen>;

const CARGADORES: Record<string, Cargador> = {

  /* Psicología */

  /* Economía */

  /* Filosofía */

  /* Ciencia y salud */

  /* Literatura */

  /* Arte */
  "van-gogh-cartas": () => import("./arte").then((m) => m.CARTAS_THEO),

  /* Historia */

  /* Ciencia */

  /* Salud */

  /* Literatura — clásicos */

  /* Filosofía */

  /* Economía */

  /* Psicología */

  /* Capítulos largos */
  "arte-sin-hombres": () => import("./arte").then((m) => m.ARTE_SIN_HOMBRES),
  "etica-amador": () => import("./filosofia").then((m) => m.ETICA_AMADOR),
  "canones-agosto": () => import("./historia").then((m) => m.CANONES_AGOSTO),
  "renglones-torcidos": () => import("./literatura").then((m) => m.RENGLONES_TORCIDOS),
  tatuador: () => import("./historia").then((m) => m.TATUADOR),
  "cuentos-poe": () => import("./literatura").then((m) => m.CUENTOS_POE),
  mujercitas: () => import("./literatura").then((m) => m.MUJERCITAS),
  "heroe-mil-caras": () => import("./arte").then((m) => m.HEROE_MIL_CARAS),
  "vidas-vasari": () => import("./arte").then((m) => m.VIDAS_VASARI),
  reproductibilidad: () => import("./arte").then((m) => m.REPRODUCTIBILIDAD),
  "espiritual-arte": () => import("./arte").then((m) => m.ESPIRITUAL_ARTE),
  "el-elemento": () => import("./arte").then((m) => m.EL_ELEMENTO),
  "existencialismo-humanismo": () => import("./filosofia").then((m) => m.EXISTENCIALISMO_HUMANISMO),
  "mas-alla-bien-mal": () => import("./filosofia").then((m) => m.MAS_ALLA_BIEN_MAL),
  "contrato-social": () => import("./filosofia").then((m) => m.CONTRATO_SOCIAL),
  "etica-nicomaco": () => import("./filosofia").then((m) => m.ETICA_NICOMACO),
  "ensayos-montaigne": () => import("./filosofia").then((m) => m.ENSAYOS_MONTAIGNE),
  "homo-sovieticus": () => import("./historia").then((m) => m.HOMO_SOVIETICUS),
  "guerra-civil-thomas": () => import("./historia").then((m) => m.GUERRA_CIVIL_THOMAS),
  postguerra: () => import("./historia").then((m) => m.POSTGUERRA),
  imperiofobia: () => import("./historia").then((m) => m.IMPERIOFOBIA),
  "auschwitz-rees": () => import("./historia").then((m) => m.AUSCHWITZ_REES),
};

/** Los identificadores con resumen escrito. No carga ningún texto. */
export const IDS: string[] = Object.keys(CARGADORES);

/** Lo ya descargado en esta sesión, para no volver a pedirlo. */
const cache = new Map<string, Resumen>();

/** El resumen si ya está en memoria; si no, undefined y sin ir a buscarlo. */
export function resumenCargado(id: string): Resumen | undefined {
  return cache.get(id);
}

/** Descarga el resumen de un libro —o lo devuelve de la cache— y lo guarda. */
export async function cargarResumen(id: string): Promise<Resumen | undefined> {
  const guardado = cache.get(id);
  if (guardado) return guardado;
  const cargador = CARGADORES[id];
  if (!cargador) return undefined;
  const resumen = await cargador();
  cache.set(id, resumen);
  return resumen;
}

/* Para los scripts de mantenimiento, que sí necesitan los doscientos a la vez:
   medir, contar tarjetas y buscar erratas se hace sobre el texto entero. En la
   app esto no se llama nunca. */
export async function cargarTodos(): Promise<Record<string, Resumen>> {
  const entradas = await Promise.all(
    IDS.map(async (id) => [id, await cargarResumen(id)] as const),
  );
  return Object.fromEntries(entradas) as Record<string, Resumen>;
}

/* Un libro «escrito» puede estarlo de dos maneras: con tarjetas, que es el
   formato viejo y vive en `libros/<id>.ts`, o con las ocho páginas a mano de
   `paginas.ts`, que es el molde de `REDACCION.md` y no lleva tarjetas. Las dos
   cuentan; si no, los libros nuevos saldrían aquí como si faltara su texto. */
export function comprobar() {
  const marcados = CATALOGO.filter((f) => f.estado === "escrito").map((f) => f.id);
  const conTexto = new Set([...IDS, ...Object.keys(PAGINAS)]);
  return {
    marcadosSinFichero: marcados.filter((id) => !conTexto.has(id)),
    ficheroSinMarcar: [...conTexto].filter((id) => !marcados.includes(id)),
  };
}
