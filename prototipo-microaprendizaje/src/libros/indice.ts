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
import { ROBA_ARTISTA, GUERRA_ARTE, MODOS_VER, CARTAS_THEO, LEONARDO } from "./arte";
import { ANA_FRANK, ARMAS_GERMENES, INFINITO_JUNCO, MANDELA, MALALA } from "./historia";
import { GEN_EGOISTA, FEYNMAN, VIDA_ARBOLES, CASI_TODO, MUNDO_DEMONIOS } from "./ciencia";
import { CUERPO_CUENTA, DIGESTION, NACIDOS_CORRER, DILEMA_OMNIVORO, ALIENTO_AIRE } from "./salud";
import { CIEN_ANOS, QUIJOTE, MUNDO_FELIZ, METAMORFOSIS, FRANKENSTEIN, GRAN_GATSBY, MATAR_RUISENOR, HOBBIT } from "./literatura";
import { PRINCIPE, BREVEDAD_VIDA, ZARATUSTRA, SISIFO } from "./filosofia";
import { FREAKONOMICS, CISNE_NEGRO, FACTFULNESS, STEVE_JOBS } from "./economia";
import { PENSAR_RAPIDO, SIETE_HABITOS, FLOW, EDUCADA } from "./psicologia";
import { CRIMEN_CASTIGO, EXTRANJERO, DORIAN_GRAY } from "./literatura";
import { ARTE_GUERRA } from "./filosofia";
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
};

export function comprobar() {
  const marcados = CATALOGO.filter((f) => f.estado === "escrito").map((f) => f.id);
  const existentes = Object.keys(RESUMENES);
  return {
    marcadosSinFichero: marcados.filter((id) => !existentes.includes(id)),
    ficheroSinMarcar: existentes.filter((id) => !marcados.includes(id)),
  };
}
