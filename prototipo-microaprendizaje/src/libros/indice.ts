import { MEDITACIONES } from "./meditaciones";
import { SAPIENS } from "./sapiens";
import { MIL_NOVECIENTOS_OCHENTA_Y_CUATRO } from "./1984";
import { HABITOS_ATOMICOS } from "./habitos-atomicos";
import { PSICOLOGIA_DINERO } from "./psicologia-dinero";
import { INFLUENCIA, MINDSET, INTELIGENCIA_EMOCIONAL, AMIGOS_INFLUIR } from "./psicologia";
import { PADRE_RICO, BABILONIA, SEMANA_4_HORAS, PIENSA_HAZTE_RICO } from "./economia";
import { BUSCA_SENTIDO, IKIGAI, CUATRO_ACUERDOS, SUTIL_ARTE } from "./filosofia";
import { COSMOS, POR_QUE_DORMIMOS, BREVE_HISTORIA_TIEMPO, RESPIRA } from "./ciencia-salud";
import { PRINCIPITO, ALQUIMISTA, REBELION_GRANJA, FAHRENHEIT } from "./literatura";
import { ROBA_ARTISTA, GUERRA_ARTE, MODOS_VER, CARTAS_THEO, LEONARDO, CARTAS_JOVEN_POETA, HISTORIA_ARTE, ARTE_SIN_HOMBRES, ACTO_CREATIVO, CAMINO_ARTISTA, DIARIOS_FRIDA, VIDA_DALI, MIENTRAS_ESCRIBO, SOBRE_FOTOGRAFIA, HEROE_MIL_CARAS, VIDAS_VASARI, REPRODUCTIBILIDAD, PAJARO_A_PAJARO, ESPIRITUAL_ARTE } from "./arte";
import { ANA_FRANK, ARMAS_GERMENES, INFINITO_JUNCO, MANDELA, MALALA, HOMO_DEUS, MUNDO_AYER, SPQR, PILARES_TIERRA, CANONES_AGOSTO, CHICO_PIJAMA, TATUADOR, HISTORIA_ESPANA, SI_ESTO_HOMBRE, ORIGENES_TOTALITARISMO, HOMENAJE_CATALUNA, GUERRA_CIVIL_THOMAS, EICHMANN_JERUSALEN, POSTGUERRA, IMPERIOFOBIA } from "./historia";
import { GEN_EGOISTA, FEYNMAN, VIDA_ARBOLES, CASI_TODO, MUNDO_DEMONIOS, EL_GEN, EINSTEIN, ASTROFISICA_PRISA, ULTIMOS_DINOSAURIOS, UNIVERSO_CASCARA, MUSICA_PRIMOS, UNIVERSO_MANO, ORIGEN_ESPECIES, HENRIETTA_LACKS, DOBLE_HELICE, REVOLUCIONES_CIENTIFICAS, EMPERADOR_MALES, SEXTA_EXTINCION, PULGAR_PANDA } from "./ciencia";
import { CUERPO_CUENTA, DIGESTION, NACIDOS_CORRER, DILEMA_OMNIVORO, ALIENTO_AIRE, ZONAS_AZULES, OUTLIVE, COME_COMIDA_REAL, INVICTO, MILAGRO_MANANA, SER_MORTAL, CODIGO_OBESIDAD, DIETA_COJEA, VIVIR_PLENITUD, ANTICANCER, CEREBRO_DE_PAN, MILAGRO_METABOLICO } from "./salud";
import { CIEN_ANOS, QUIJOTE, MUNDO_FELIZ, METAMORFOSIS, FRANKENSTEIN, GRAN_GATSBY, MATAR_RUISENOR, HOBBIT } from "./literatura";
import { PRINCIPE, BREVEDAD_VIDA, ZARATUSTRA, SISIFO } from "./filosofia";
import { FREAKONOMICS, CISNE_NEGRO, FACTFULNESS, STEVE_JOBS, INVERSOR_INTELIGENTE, CERO_A_UNO, ANTIFRAGIL, LEAN_STARTUP, MENTE_MILLONARIA, CAPITAL_XXI, POR_QUE_FRACASAN, RIQUEZA_NACIONES, REPENSAR_POBREZA, PASEO_ALEATORIO, DOCTRINA_SHOCK, SUPERPRONOSTICADORES } from "./economia";
import { PENSAR_RAPIDO, SIETE_HABITOS, FLOW, EDUCADA, NUDGE, DEEP_WORK, PODER_AHORA, PODER_HABITOS, ARTE_DE_AMAR, LENGUAJES_AMOR, COSAS_BUENAS, INTRO_PSICOANALISIS, ERROR_DESCARTES, MARTE_VENUS, SENTIRSE_BIEN } from "./psicologia";
import { CRIMEN_CASTIGO, EXTRANJERO, DORIAN_GRAY, SENOR_MOSCAS, DRACULA, VIEJO_MAR, ODISEA, SOMBRA_VIENTO, NOMBRE_ROSA, FICCIONES, CASA_ESPIRITUS, CUENTOS_POE, MUJERCITAS, ELEGANCIA_ERIZO } from "./literatura";
import { ARTE_GUERRA, ETICA_AMADOR, TAO_TE_CHING, ENQUIRIDION, MONJE_FERRARI, MUNDO_SOFIA, APOLOGIA_SOCRATES, SEGUNDO_SEXO, DISCURSO_METODO, ETICA_NICOMACO, REPUBLICA_PLATON, ENSAYOS_MONTAIGNE } from "./filosofia";
import { ORGULLO_PREJUICIO, GUARDIAN_CENTENO, PEDRO_PARAMO, MOBY_DICK, MADAME_BOVARY, MONTECRISTO, BERNARDA_ALBA, ANA_KARENINA } from "./literatura";
import { CATALOGO } from "./catalogo";
import type { Resumen } from "./tipos";

/* ==========================================================================
   El índice de resúmenes escritos.

   `comprobar()` es la red de seguridad del catálogo: cruza lo que dice el
   registro con lo que existe de verdad. Si un libro figura como «escrito» y
   no hay fichero, o al revés, aquí se ve. Sin esto, el catálogo se convierte
   en una lista de buenas intenciones a las dos semanas.
   ========================================================================== */

export const RESUMENES: Record<string, Resumen> = {
  meditaciones: MEDITACIONES,
  sapiens: SAPIENS,
  "1984": MIL_NOVECIENTOS_OCHENTA_Y_CUATRO,
  "habitos-atomicos": HABITOS_ATOMICOS,
  "psicologia-dinero": PSICOLOGIA_DINERO,

  /* Psicología */
  influencia: INFLUENCIA,
  mindset: MINDSET,
  "inteligencia-emocional": INTELIGENCIA_EMOCIONAL,
  "amigos-influir": AMIGOS_INFLUIR,

  /* Economía */
  "padre-rico": PADRE_RICO,
  "hombre-rico-babilonia": BABILONIA,
  "semana-4-horas": SEMANA_4_HORAS,
  "piensa-hazte-rico": PIENSA_HAZTE_RICO,

  /* Filosofía */
  "busca-sentido": BUSCA_SENTIDO,
  ikigai: IKIGAI,
  "cuatro-acuerdos": CUATRO_ACUERDOS,
  "sutil-arte": SUTIL_ARTE,

  /* Ciencia y salud */
  cosmos: COSMOS,
  "por-que-dormimos": POR_QUE_DORMIMOS,
  "breve-historia-tiempo": BREVE_HISTORIA_TIEMPO,
  respira: RESPIRA,

  /* Literatura */
  principito: PRINCIPITO,
  alquimista: ALQUIMISTA,
  "rebelion-granja": REBELION_GRANJA,
  fahrenheit: FAHRENHEIT,

  /* Arte */
  "roba-artista": ROBA_ARTISTA,
  "guerra-arte": GUERRA_ARTE,
  "modos-ver": MODOS_VER,
  "van-gogh-cartas": CARTAS_THEO,
  leonardo: LEONARDO,

  /* Historia */
  "diario-ana-frank": ANA_FRANK,
  "armas-germenes": ARMAS_GERMENES,
  "infinito-junco": INFINITO_JUNCO,
  mandela: MANDELA,
  malala: MALALA,

  /* Ciencia */
  "gen-egoista": GEN_EGOISTA,
  feynman: FEYNMAN,
  "vida-arboles": VIDA_ARBOLES,
  "casi-todo": CASI_TODO,
  "mundo-demonios": MUNDO_DEMONIOS,

  /* Salud */
  "cuerpo-cuenta": CUERPO_CUENTA,
  "digestion-cuestion": DIGESTION,
  "nacidos-correr": NACIDOS_CORRER,
  "dilema-omnivoro": DILEMA_OMNIVORO,
  "aliento-aire": ALIENTO_AIRE,

  /* Literatura — clásicos */
  "cien-anos": CIEN_ANOS,
  quijote: QUIJOTE,
  "mundo-feliz": MUNDO_FELIZ,
  metamorfosis: METAMORFOSIS,
  frankenstein: FRANKENSTEIN,
  "gran-gatsby": GRAN_GATSBY,
  "matar-ruisenor": MATAR_RUISENOR,
  hobbit: HOBBIT,

  /* Filosofía */
  principe: PRINCIPE,
  "brevedad-vida": BREVEDAD_VIDA,
  zaratustra: ZARATUSTRA,
  sisifo: SISIFO,

  /* Economía */
  freakonomics: FREAKONOMICS,
  "cisne-negro": CISNE_NEGRO,
  factfulness: FACTFULNESS,
  "steve-jobs": STEVE_JOBS,

  /* Psicología */
  "pensar-rapido": PENSAR_RAPIDO,
  "siete-habitos": SIETE_HABITOS,
  flow: FLOW,
  educada: EDUCADA,

  /* Capítulos largos */
  "crimen-castigo": CRIMEN_CASTIGO,
  extranjero: EXTRANJERO,
  "dorian-gray": DORIAN_GRAY,
  "arte-guerra": ARTE_GUERRA,
  "senor-moscas": SENOR_MOSCAS,
  "homo-deus": HOMO_DEUS,
  dracula: DRACULA,
  "viejo-mar": VIEJO_MAR,
  odisea: ODISEA,
  "sombra-viento": SOMBRA_VIENTO,
  "nombre-rosa": NOMBRE_ROSA,
  "orgullo-prejuicio": ORGULLO_PREJUICIO,
  "cartas-joven-poeta": CARTAS_JOVEN_POETA,
  "mundo-ayer": MUNDO_AYER,
  "historia-arte": HISTORIA_ARTE,
  "zonas-azules": ZONAS_AZULES,
  "gen-historia": EL_GEN,
  "arte-sin-hombres": ARTE_SIN_HOMBRES,
  spqr: SPQR,
  outlive: OUTLIVE,
  einstein: EINSTEIN,
  "acto-creativo": ACTO_CREATIVO,
  nudge: NUDGE,
  "inversor-inteligente": INVERSOR_INTELIGENTE,
  "pilares-tierra": PILARES_TIERRA,
  "astrofisica-prisa": ASTROFISICA_PRISA,
  "camino-artista": CAMINO_ARTISTA,
  "come-comida-real": COME_COMIDA_REAL,
  "etica-amador": ETICA_AMADOR,
  "cero-a-uno": CERO_A_UNO,
  "canones-agosto": CANONES_AGOSTO,
  "mapa-mundos": ULTIMOS_DINOSAURIOS,
  "deep-work": DEEP_WORK,
  "guardian-centeno": GUARDIAN_CENTENO,
  "diarios-frida": DIARIOS_FRIDA,
  invencible: INVICTO,
  tao: TAO_TE_CHING,
  antifragil: ANTIFRAGIL,
  "chico-pijama": CHICO_PIJAMA,
  "pedro-paramo": PEDRO_PARAMO,
  "moby-dick": MOBY_DICK,
  "madame-bovary": MADAME_BOVARY,
  "montecristo": MONTECRISTO,
  "bernarda-alba": BERNARDA_ALBA,
  "ana-karenina": ANA_KARENINA,
  "universo-cascara": UNIVERSO_CASCARA,
  "poder-ahora": PODER_AHORA,
  "vida-dali": VIDA_DALI,
  "milagro-manana": MILAGRO_MANANA,
  "musica-primos": MUSICA_PRIMOS,
  "tatuador": TATUADOR,
  "enquiridion": ENQUIRIDION,
  "lean-startup": LEAN_STARTUP,
  "universo-mano": UNIVERSO_MANO,
  "historia-espana": HISTORIA_ESPANA,
  "monje-ferrari": MONJE_FERRARI,
  "mente-millonaria": MENTE_MILLONARIA,
  "ficciones": FICCIONES,
  "casa-espiritus": CASA_ESPIRITUS,
  "cuentos-poe": CUENTOS_POE,
  "mujercitas": MUJERCITAS,
  "elegancia-erizo": ELEGANCIA_ERIZO,
  "mientras-escribo": MIENTRAS_ESCRIBO,
  "poder-habitos": PODER_HABITOS,
  "ser-mortal": SER_MORTAL,
  "sobre-fotografia": SOBRE_FOTOGRAFIA,
  "arte-de-amar": ARTE_DE_AMAR,
  "codigo-obesidad": CODIGO_OBESIDAD,
  "heroe-mil-caras": HEROE_MIL_CARAS,
  "vidas-vasari": VIDAS_VASARI,
  "reproductibilidad": REPRODUCTIBILIDAD,
  "pajaro-a-pajaro": PAJARO_A_PAJARO,
  "espiritual-arte": ESPIRITUAL_ARTE,
  "dieta-cojea": DIETA_COJEA,
  "vivir-plenitud": VIVIR_PLENITUD,
  "anticancer": ANTICANCER,
  "cerebro-de-pan": CEREBRO_DE_PAN,
  "milagro-metabolico": MILAGRO_METABOLICO,
  "lenguajes-amor": LENGUAJES_AMOR,
  "cosas-buenas": COSAS_BUENAS,
  "intro-psicoanalisis": INTRO_PSICOANALISIS,
  "error-descartes": ERROR_DESCARTES,
  "marte-venus": MARTE_VENUS,
  "sentirse-bien": SENTIRSE_BIEN,
  "si-esto-hombre": SI_ESTO_HOMBRE,
  "mundo-sofia": MUNDO_SOFIA,
  "apologia-socrates": APOLOGIA_SOCRATES,
  "segundo-sexo": SEGUNDO_SEXO,
  "discurso-metodo": DISCURSO_METODO,
  "etica-nicomaco": ETICA_NICOMACO,
  "republica-platon": REPUBLICA_PLATON,
  "ensayos-montaigne": ENSAYOS_MONTAIGNE,
  "origen-especies": ORIGEN_ESPECIES,
  "henrietta-lacks": HENRIETTA_LACKS,
  "doble-helice": DOBLE_HELICE,
  "revoluciones-cientificas": REVOLUCIONES_CIENTIFICAS,
  "emperador-males": EMPERADOR_MALES,
  "sexta-extincion": SEXTA_EXTINCION,
  "pulgar-panda": PULGAR_PANDA,
  "capital-siglo-xxi": CAPITAL_XXI,
  "por-que-fracasan": POR_QUE_FRACASAN,
  "riqueza-naciones": RIQUEZA_NACIONES,
  "repensar-pobreza": REPENSAR_POBREZA,
  "paseo-aleatorio": PASEO_ALEATORIO,
  "doctrina-shock": DOCTRINA_SHOCK,
  "superpronosticadores": SUPERPRONOSTICADORES,
  "origenes-totalitarismo": ORIGENES_TOTALITARISMO,
  "homenaje-cataluna": HOMENAJE_CATALUNA,
  "guerra-civil-thomas": GUERRA_CIVIL_THOMAS,
  "eichmann-jerusalen": EICHMANN_JERUSALEN,
  "postguerra": POSTGUERRA,
  "imperiofobia": IMPERIOFOBIA,
};

export function comprobar() {
  const marcados = CATALOGO.filter((f) => f.estado === "escrito").map((f) => f.id);
  const existentes = Object.keys(RESUMENES);
  return {
    marcadosSinFichero: marcados.filter((id) => !existentes.includes(id)),
    ficheroSinMarcar: existentes.filter((id) => !marcados.includes(id)),
  };
}
