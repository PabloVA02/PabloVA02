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
  sapiens: () => import("./sapiens").then((m) => m.SAPIENS),

  /* Psicología */

  /* Economía */
  "hombre-rico-babilonia": () => import("./economia").then((m) => m.BABILONIA),

  /* Filosofía */

  /* Ciencia y salud */
  respira: () => import("./ciencia-salud").then((m) => m.RESPIRA),

  /* Literatura */

  /* Arte */
  "roba-artista": () => import("./arte").then((m) => m.ROBA_ARTISTA),
  "guerra-arte": () => import("./arte").then((m) => m.GUERRA_ARTE),
  "modos-ver": () => import("./arte").then((m) => m.MODOS_VER),
  "van-gogh-cartas": () => import("./arte").then((m) => m.CARTAS_THEO),
  leonardo: () => import("./arte").then((m) => m.LEONARDO),

  /* Historia */
  "diario-ana-frank": () => import("./historia").then((m) => m.ANA_FRANK),
  "armas-germenes": () => import("./historia").then((m) => m.ARMAS_GERMENES),
  mandela: () => import("./historia").then((m) => m.MANDELA),
  malala: () => import("./historia").then((m) => m.MALALA),

  /* Ciencia */
  feynman: () => import("./ciencia").then((m) => m.FEYNMAN),
  "vida-arboles": () => import("./ciencia").then((m) => m.VIDA_ARBOLES),
  "casi-todo": () => import("./ciencia").then((m) => m.CASI_TODO),
  "mundo-demonios": () => import("./ciencia").then((m) => m.MUNDO_DEMONIOS),

  /* Salud */
  "cuerpo-cuenta": () => import("./salud").then((m) => m.CUERPO_CUENTA),
  "digestion-cuestion": () => import("./salud").then((m) => m.DIGESTION),
  "nacidos-correr": () => import("./salud").then((m) => m.NACIDOS_CORRER),
  "dilema-omnivoro": () => import("./salud").then((m) => m.DILEMA_OMNIVORO),
  "aliento-aire": () => import("./salud").then((m) => m.ALIENTO_AIRE),

  /* Literatura — clásicos */
  metamorfosis: () => import("./literatura").then((m) => m.METAMORFOSIS),
  frankenstein: () => import("./literatura").then((m) => m.FRANKENSTEIN),
  "gran-gatsby": () => import("./literatura").then((m) => m.GRAN_GATSBY),

  /* Filosofía */
  "brevedad-vida": () => import("./filosofia").then((m) => m.BREVEDAD_VIDA),
  zaratustra: () => import("./filosofia").then((m) => m.ZARATUSTRA),
  sisifo: () => import("./filosofia").then((m) => m.SISIFO),

  /* Economía */
  freakonomics: () => import("./economia").then((m) => m.FREAKONOMICS),
  factfulness: () => import("./economia").then((m) => m.FACTFULNESS),

  /* Psicología */
  educada: () => import("./psicologia").then((m) => m.EDUCADA),

  /* Capítulos largos */
  "crimen-castigo": () => import("./literatura").then((m) => m.CRIMEN_CASTIGO),
  extranjero: () => import("./literatura").then((m) => m.EXTRANJERO),
  "dorian-gray": () => import("./literatura").then((m) => m.DORIAN_GRAY),
  "senor-moscas": () => import("./literatura").then((m) => m.SENOR_MOSCAS),
  "homo-deus": () => import("./historia").then((m) => m.HOMO_DEUS),
  dracula: () => import("./literatura").then((m) => m.DRACULA),
  "viejo-mar": () => import("./literatura").then((m) => m.VIEJO_MAR),
  "nombre-rosa": () => import("./literatura").then((m) => m.NOMBRE_ROSA),
  "cartas-joven-poeta": () => import("./arte").then((m) => m.CARTAS_JOVEN_POETA),
  "historia-arte": () => import("./arte").then((m) => m.HISTORIA_ARTE),
  "zonas-azules": () => import("./salud").then((m) => m.ZONAS_AZULES),
  "gen-historia": () => import("./ciencia").then((m) => m.EL_GEN),
  "arte-sin-hombres": () => import("./arte").then((m) => m.ARTE_SIN_HOMBRES),
  outlive: () => import("./salud").then((m) => m.OUTLIVE),
  einstein: () => import("./ciencia").then((m) => m.EINSTEIN),
  "acto-creativo": () => import("./arte").then((m) => m.ACTO_CREATIVO),
  nudge: () => import("./psicologia").then((m) => m.NUDGE),
  "inversor-inteligente": () => import("./economia").then((m) => m.INVERSOR_INTELIGENTE),
  "pilares-tierra": () => import("./historia").then((m) => m.PILARES_TIERRA),
  "astrofisica-prisa": () => import("./ciencia").then((m) => m.ASTROFISICA_PRISA),
  "camino-artista": () => import("./arte").then((m) => m.CAMINO_ARTISTA),
  "come-comida-real": () => import("./salud").then((m) => m.COME_COMIDA_REAL),
  "etica-amador": () => import("./filosofia").then((m) => m.ETICA_AMADOR),
  "cero-a-uno": () => import("./economia").then((m) => m.CERO_A_UNO),
  "canones-agosto": () => import("./historia").then((m) => m.CANONES_AGOSTO),
  "ultimos-dinosaurios": () => import("./ciencia").then((m) => m.ULTIMOS_DINOSAURIOS),
  "guardian-centeno": () => import("./literatura").then((m) => m.GUARDIAN_CENTENO),
  "diarios-frida": () => import("./arte").then((m) => m.DIARIOS_FRIDA),
  invencible: () => import("./salud").then((m) => m.INVICTO),
  tao: () => import("./filosofia").then((m) => m.TAO_TE_CHING),
  antifragil: () => import("./economia").then((m) => m.ANTIFRAGIL),
  "chico-pijama": () => import("./historia").then((m) => m.CHICO_PIJAMA),
  "pedro-paramo": () => import("./literatura").then((m) => m.PEDRO_PARAMO),
  "moby-dick": () => import("./literatura").then((m) => m.MOBY_DICK),
  "madame-bovary": () => import("./literatura").then((m) => m.MADAME_BOVARY),
  montecristo: () => import("./literatura").then((m) => m.MONTECRISTO),
  "bernarda-alba": () => import("./literatura").then((m) => m.BERNARDA_ALBA),
  "ana-karenina": () => import("./literatura").then((m) => m.ANA_KARENINA),
  rayuela: () => import("./literatura").then((m) => m.RAYUELA),
  "el-tunel": () => import("./literatura").then((m) => m.EL_TUNEL),
  "renglones-torcidos": () => import("./literatura").then((m) => m.RENGLONES_TORCIDOS),
  "los-miserables": () => import("./literatura").then((m) => m.LOS_MISERABLES),
  "guerra-y-paz": () => import("./literatura").then((m) => m.GUERRA_Y_PAZ),
  "universo-cascara": () => import("./ciencia").then((m) => m.UNIVERSO_CASCARA),
  "vida-dali": () => import("./arte").then((m) => m.VIDA_DALI),
  "milagro-manana": () => import("./salud").then((m) => m.MILAGRO_MANANA),
  "musica-primos": () => import("./ciencia").then((m) => m.MUSICA_PRIMOS),
  tatuador: () => import("./historia").then((m) => m.TATUADOR),
  enquiridion: () => import("./filosofia").then((m) => m.ENQUIRIDION),
  "lean-startup": () => import("./economia").then((m) => m.LEAN_STARTUP),
  "universo-mano": () => import("./ciencia").then((m) => m.UNIVERSO_MANO),
  "siete-lecciones-fisica": () => import("./ciencia").then((m) => m.SIETE_LECCIONES_FISICA),
  "orden-del-tiempo": () => import("./ciencia").then((m) => m.ORDEN_DEL_TIEMPO),
  "cuchara-menguante": () => import("./ciencia").then((m) => m.CUCHARA_MENGUANTE),
  "historia-espana": () => import("./historia").then((m) => m.HISTORIA_ESPANA),
  ficciones: () => import("./literatura").then((m) => m.FICCIONES),
  "casa-espiritus": () => import("./literatura").then((m) => m.CASA_ESPIRITUS),
  "cuentos-poe": () => import("./literatura").then((m) => m.CUENTOS_POE),
  mujercitas: () => import("./literatura").then((m) => m.MUJERCITAS),
  "elegancia-erizo": () => import("./literatura").then((m) => m.ELEGANCIA_ERIZO),
  "mientras-escribo": () => import("./arte").then((m) => m.MIENTRAS_ESCRIBO),
  "ser-mortal": () => import("./salud").then((m) => m.SER_MORTAL),
  "sobre-fotografia": () => import("./arte").then((m) => m.SOBRE_FOTOGRAFIA),
  "arte-de-amar": () => import("./psicologia").then((m) => m.ARTE_DE_AMAR),
  "codigo-obesidad": () => import("./salud").then((m) => m.CODIGO_OBESIDAD),
  "heroe-mil-caras": () => import("./arte").then((m) => m.HEROE_MIL_CARAS),
  "vidas-vasari": () => import("./arte").then((m) => m.VIDAS_VASARI),
  reproductibilidad: () => import("./arte").then((m) => m.REPRODUCTIBILIDAD),
  "pajaro-a-pajaro": () => import("./arte").then((m) => m.PAJARO_A_PAJARO),
  "espiritual-arte": () => import("./arte").then((m) => m.ESPIRITUAL_ARTE),
  "el-elemento": () => import("./arte").then((m) => m.EL_ELEMENTO),
  "magia-crear": () => import("./arte").then((m) => m.MAGIA_CREAR),
  "dieta-cojea": () => import("./salud").then((m) => m.DIETA_COJEA),
  "vivir-plenitud": () => import("./salud").then((m) => m.VIVIR_PLENITUD),
  anticancer: () => import("./salud").then((m) => m.ANTICANCER),
  "cerebro-de-pan": () => import("./salud").then((m) => m.CEREBRO_DE_PAN),
  "milagro-metabolico": () => import("./salud").then((m) => m.MILAGRO_METABOLICO),
  "poder-metabolismo": () => import("./salud").then((m) => m.PODER_METABOLISMO),
  "deja-de-ser-tu": () => import("./salud").then((m) => m.DEJA_DE_SER_TU),
  "lenguajes-amor": () => import("./psicologia").then((m) => m.LENGUAJES_AMOR),
  "cosas-buenas": () => import("./psicologia").then((m) => m.COSAS_BUENAS),
  "intro-psicoanalisis": () => import("./psicologia").then((m) => m.INTRO_PSICOANALISIS),
  "error-descartes": () => import("./psicologia").then((m) => m.ERROR_DESCARTES),
  "marte-venus": () => import("./psicologia").then((m) => m.MARTE_VENUS),
  "sentirse-bien": () => import("./psicologia").then((m) => m.SENTIRSE_BIEN),
  "cerebro-del-nino": () => import("./psicologia").then((m) => m.CEREBRO_DEL_NINO),
  "maneras-de-amar": () => import("./psicologia").then((m) => m.MANERAS_AMAR),
  "si-esto-hombre": () => import("./historia").then((m) => m.SI_ESTO_HOMBRE),
  "mundo-sofia": () => import("./filosofia").then((m) => m.MUNDO_SOFIA),
  "apologia-socrates": () => import("./filosofia").then((m) => m.APOLOGIA_SOCRATES),
  "segundo-sexo": () => import("./filosofia").then((m) => m.SEGUNDO_SEXO),
  "existencialismo-humanismo": () => import("./filosofia").then((m) => m.EXISTENCIALISMO_HUMANISMO),
  "mas-alla-bien-mal": () => import("./filosofia").then((m) => m.MAS_ALLA_BIEN_MAL),
  "contrato-social": () => import("./filosofia").then((m) => m.CONTRATO_SOCIAL),
  "discurso-metodo": () => import("./filosofia").then((m) => m.DISCURSO_METODO),
  "etica-nicomaco": () => import("./filosofia").then((m) => m.ETICA_NICOMACO),
  "ensayos-montaigne": () => import("./filosofia").then((m) => m.ENSAYOS_MONTAIGNE),
  "origen-especies": () => import("./ciencia").then((m) => m.ORIGEN_ESPECIES),
  "henrietta-lacks": () => import("./ciencia").then((m) => m.HENRIETTA_LACKS),
  "doble-helice": () => import("./ciencia").then((m) => m.DOBLE_HELICE),
  "revoluciones-cientificas": () => import("./ciencia").then((m) => m.REVOLUCIONES_CIENTIFICAS),
  "emperador-males": () => import("./ciencia").then((m) => m.EMPERADOR_MALES),
  "sexta-extincion": () => import("./ciencia").then((m) => m.SEXTA_EXTINCION),
  "pulgar-panda": () => import("./ciencia").then((m) => m.PULGAR_PANDA),
  "capital-siglo-xxi": () => import("./economia").then((m) => m.CAPITAL_XXI),
  "por-que-fracasan": () => import("./economia").then((m) => m.POR_QUE_FRACASAN),
  "riqueza-naciones": () => import("./economia").then((m) => m.RIQUEZA_NACIONES),
  "repensar-pobreza": () => import("./economia").then((m) => m.REPENSAR_POBREZA),
  "paseo-aleatorio": () => import("./economia").then((m) => m.PASEO_ALEATORIO),
  "bogle-sentido-comun": () => import("./economia").then((m) => m.BOGLE_SENTIDO_COMUN),
  "millonario-al-lado": () => import("./economia").then((m) => m.MILLONARIO_AL_LADO),
  "dinero-domina-juego": () => import("./economia").then((m) => m.DINERO_DOMINA_JUEGO),
  "doctrina-shock": () => import("./economia").then((m) => m.DOCTRINA_SHOCK),
  superpronosticadores: () => import("./economia").then((m) => m.SUPERPRONOSTICADORES),
  "origenes-totalitarismo": () => import("./historia").then((m) => m.ORIGENES_TOTALITARISMO),
  "sobre-tirania": () => import("./historia").then((m) => m.SOBRE_TIRANIA),
  "homo-sovieticus": () => import("./historia").then((m) => m.HOMO_SOVIETICUS),
  "homenaje-cataluna": () => import("./historia").then((m) => m.HOMENAJE_CATALUNA),
  "guerra-civil-thomas": () => import("./historia").then((m) => m.GUERRA_CIVIL_THOMAS),
  "eichmann-jerusalen": () => import("./historia").then((m) => m.EICHMANN_JERUSALEN),
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
