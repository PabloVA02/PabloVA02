/* ==========================================================================
   DE LOS `.md` DE PABLO AL CATÁLOGO DE SHORTS

       node scripts/catalogo.mjs > src/historias/curiosidades.ts

   Lee TODOS los `.md` de `referencia/textos-de-pablo/shorts/` —que es
   como los manda él desde el 28 de agosto, en carpetas por serie y con
   cabecera— y escribe el fichero que compila la app.

   SOLO ENTRAN LOS QUE TIENEN PORTADA, y es una regla suya: «quita el resto de
   shorts que tienen la portada genérica, elimínalos». El cartel de color
   generado servía de marcador mientras se buscaba la foto, y dejó de valer en
   cuanto la mayoría tuvo la suya: uno con cartel al lado de once con
   fotografía no parece que falte una imagen, parece que la app está rota.

   Los que se quedan fuera NO se pierden: su `.md` sigue en referencia con el
   nombre de portada que él les puso. Llega esa imagen, se pasa por
   `scripts/portadas.mjs` y el short entra solo en la siguiente pasada de aquí.
   Este guion imprime al final, por la salida de error, cuántos faltan y qué
   imagen espera cada uno.

   EL IDENTIFICADOR DEL TEMA ES EL DE `portada` SIN EXTENSIÓN. Es la regla de
   las portadas del `CLAUDE.md` leída al revés: si él dice cómo se llama la
   imagen, así se llama el tema.
   ========================================================================== */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { leeTema } from "./temas.mjs";

const AQUI = fileURLToPath(new URL("..", import.meta.url));
const TEXTOS = join(AQUI, "referencia", "textos-de-pablo", "shorts");
const PORTADAS = join(AQUI, "portadas");

/* Lo único que no viene en su cabecera: el color del cartel —que se sigue
   usando en las listas y en el cargando— y el pie de la fotografía cuando no
   lo trae `credito_portada`. El color va por serie para que una serie se
   reconozca de un vistazo en el muro. */
const COLOR = {
  "como-andan-las-moscas-por-el-techo": "var(--ochre)",
  "como-funciona-el-cine": "var(--clay)",
  "como-funciona-un-ascensor": "var(--teal)",
  "como-funciona-un-paracaidas": "var(--plum)",
  "como-funciona-una-bateria": "var(--slate)",
  "como-sabemos-de-que-estan-hechas-las-estrellas": "var(--sage)",
  "como-se-invento-la-escritura": "var(--ochre)",
  "como-se-sostiene-un-satelite": "var(--clay)",
  "como-vivian-los-piratas-de-verdad": "var(--teal)",
  "de-donde-salio-el-agua-de-la-tierra": "var(--plum)",
  "de-donde-salio-la-luna": "var(--slate)",
  "decides-tu-o-ya-estaba-decidido": "var(--sage)",
  "el-dia-que-cayo-constantinopla": "var(--ochre)",
  "eres-la-misma-persona-que-hace-diez-anos": "var(--clay)",
  "existe-el-infinito": "var(--teal)",
  "internet-va-por-el-fondo-del-mar": "var(--plum)",
  "italia-estuvo-dos-siglos-sin-tomate": "var(--slate)",
  "la-burbuja-de-los-tulipanes": "var(--sage)",
  "la-caverna-de-platon": "var(--ochre)",
  "la-historia-de-lego": "var(--clay)",
  "la-historia-de-nintendo": "var(--teal)",
  "la-historia-de-zara": "var(--plum)",
  "la-pasta-no-vino-de-china": "var(--slate)",
  "la-patata-que-cambio-europa": "var(--sage)",
  "los-chips-se-hacen-con-arena": "var(--ochre)",
  "por-que-crece-tan-rapido-el-bambu": "var(--clay)",
  "por-que-envejecemos": "var(--teal)",
  "por-que-hay-gente-que-no-digiere-la-leche": "var(--plum)",
  "por-que-hay-grupos-sanguineos": "var(--slate)",
  "por-que-hay-zurdos": "var(--sage)",
  "por-que-islandia-tiene-tantos-volcanes": "var(--ochre)",
  "por-que-los-precios-acaban-en-99": "var(--clay)",
  "por-que-mataron-a-socrates": "var(--teal)",
  "por-que-olvidas-los-suenos": "var(--plum)",
  "por-que-se-hunde-venecia": "var(--slate)",
  "por-que-sube-la-inflacion": "var(--sage)",
  "puede-pensar-una-maquina": "var(--ochre)",
  "que-es-la-conciencia": "var(--clay)",
  "que-funcion-tiene-la-fiebre": "var(--teal)",
  "que-funcion-tienen-los-suenos": "var(--plum)",
  "que-hay-en-el-centro-de-la-tierra": "var(--slate)",
  "que-paso-con-la-biblioteca-de-alejandria": "var(--sage)",
  "quien-fue-alejandro-magno": "var(--ochre)",
  "quien-fue-gengis-kan": "var(--clay)",
  "quien-fue-marie-curie": "var(--teal)",
  "quien-fue-van-gogh": "var(--plum)",
  "ves-el-mismo-rojo-que-yo": "var(--slate)",
  "vivimos-dentro-de-una-simulacion": "var(--sage)",
  "como-calienta-un-microondas": "var(--ochre)",
  "como-cancelan-el-ruido-unos-auriculares": "var(--plum)",
  "como-cicatrizan-las-heridas": "var(--clay)",
  "como-de-bien-ve-un-aguila": "var(--ochre)",
  "como-enfria-una-nevera": "var(--slate)",
  "como-era-de-verdad-un-gladiador-romano": "var(--ochre)",
  "como-erupciona-un-volcan": "var(--plum)",
  "como-funciona-el-wifi": "var(--clay)",
  "como-funciona-la-bolsa-de-valores": "var(--teal)",
  "como-funciona-la-gravedad": "var(--plum)",
  "como-funciona-la-inteligencia-artificial": "var(--sage)",
  "como-funciona-un-coche": "var(--ochre)",
  "como-funciona-un-hormiguero": "var(--slate)",
  "como-funciona-un-iman": "var(--plum)",
  "como-funciona-un-reloj-mecanico": "var(--slate)",
  "como-funciona-un-tren-de-alta-velocidad": "var(--clay)",
  "como-funciona-una-camara-de-fotos": "var(--teal)",
  "como-funciona-una-cerilla": "var(--clay)",
  "como-funciona-una-cerradura": "var(--plum)",
  "como-funciona-una-pantalla-tactil": "var(--slate)",
  "como-genera-electricidad-un-molino-de-viento": "var(--clay)",
  "como-genera-electricidad-una-placa-solar": "var(--teal)",
  "como-reconoce-un-pinguino-a-su-cria": "var(--sage)",
  "como-se-aguanta-en-pie-un-rascacielos": "var(--sage)",
  "como-se-construyeron-las-piramides": "var(--slate)",
  "como-se-construyo-el-canal-de-panama": "var(--ochre)",
  "como-se-descifraron-los-jeroglificos": "var(--clay)",
  "como-se-descubrio-la-penicilina": "var(--teal)",
  "como-se-forma-un-arcoiris": "var(--ochre)",
  "como-se-forma-un-cometa": "var(--teal)",
  "como-se-forma-un-tornado": "var(--ochre)",
  "como-se-forma-un-tsunami": "var(--plum)",
  "como-se-forma-una-cueva": "var(--slate)",
  "como-se-forman-las-olas": "var(--clay)",
  "como-se-hace-el-jamon-iberico": "var(--teal)",
  "como-se-hace-el-vino": "var(--plum)",
  "como-se-hace-la-cerveza": "var(--slate)",
  "como-se-hizo-el-primer-pan": "var(--clay)",
  "como-un-simple-papel-tiene-valor": "var(--plum)",
  "como-vuelan-los-cohetes": "var(--plum)",
  "como-vuelan-los-helicopteros": "var(--slate)",
  "como-vuelan-los-pajaros": "var(--sage)",
  "cual-es-el-animal-mas-venenoso-del-mundo": "var(--teal)",
  "cual-es-el-idioma-mas-antiguo-que-se-sigue-hablando": "var(--sage)",
  "cual-es-el-rio-mas-largo-del-mundo": "var(--clay)",
  "cual-es-el-ser-vivo-mas-grande-del-planeta": "var(--slate)",
  "cual-fue-el-primer-videojuego": "var(--ochre)",
  "cuantas-estrellas-hay-en-el-universo": "var(--clay)",
  "cuanto-aguanta-un-cactus-sin-agua": "var(--teal)",
  "cuanto-duro-de-verdad-el-imperio-romano": "var(--plum)",
  "cuanto-le-queda-al-sol": "var(--ochre)",
  "cuanto-tiempo-le-queda-a-la-luna": "var(--teal)",
  "de-donde-sale-el-alcohol": "var(--slate)",
  "de-donde-sale-el-azucar": "var(--clay)",
  "de-donde-sale-el-oro": "var(--sage)",
  "de-donde-viene-el-chocolate": "var(--teal)",
  "de-donde-viene-el-viento": "var(--sage)",
  "de-que-esta-hecho-un-hueso": "var(--ochre)",
  "de-que-vive-el-amazonas": "var(--ochre)",
  "el-animal-mas-grande-del-mundo": "var(--sage)",
  "el-auge-economico-de-china": "var(--ochre)",
  "el-camino-de-santiago": "var(--plum)",
  "fuimos-la-unica-especie-humana": "var(--ochre)",
  "hasta-que-altura-puede-crecer-un-arbol": "var(--ochre)",
  "la-historia-de-bugatti": "var(--plum)",
  "la-historia-de-ferrari": "var(--slate)",
  "la-historia-de-la-alhambra": "var(--clay)",
  "la-historia-de-lamborghini": "var(--clay)",
  "la-historia-de-porsche": "var(--teal)",
  "la-historia-del-titanic": "var(--clay)",
  "la-sagrada-familia": "var(--teal)",
  "llegaron-los-vikingos-a-america-antes-que-colon": "var(--sage)",
  "los-samurais": "var(--ochre)",
  "miguel-de-cervantes": "var(--teal)",
  "para-que-dormimos": "var(--sage)",
  "para-que-sirven-las-huellas-dactilares": "var(--plum)",
  "por-que-bostezamos": "var(--clay)",
  "por-que-brillan-las-luciernagas": "var(--plum)",
  "por-que-cambia-de-color-un-camaleon": "var(--ochre)",
  "por-que-cayo-el-imperio-romano": "var(--ochre)",
  "por-que-crecen-las-unas-despues-de-morir": "var(--ochre)",
  "por-que-crujen-los-nudillos": "var(--plum)",
  "por-que-duele-el-frio-en-un-diente": "var(--slate)",
  "por-que-duele-la-cabeza-al-comer-helado": "var(--plum)",
  "por-que-duele-la-resaca": "var(--slate)",
  "por-que-duelen-las-agujetas": "var(--clay)",
  "por-que-el-aceite-de-oliva-es-tan-saludable": "var(--plum)",
  "por-que-el-agua-caliente-se-congela-antes": "var(--teal)",
  "por-que-el-cafe-te-despierta": "var(--teal)",
  "por-que-el-cielo-es-azul": "var(--sage)",
  "por-que-el-cielo-es-negro-de-noche": "var(--slate)",
  "por-que-el-everest-no-es-la-mas-alta": "var(--teal)",
  "por-que-el-hielo-de-los-glaciares-es-azul": "var(--clay)",
  "por-que-el-mar-brilla-de-noche": "var(--teal)",
  "por-que-el-mar-es-azul": "var(--sage)",
  "por-que-el-mar-es-salado": "var(--ochre)",
  "por-que-el-mar-muerto-se-esta-secando": "var(--plum)",
  "por-que-el-platano-no-tiene-semillas": "var(--slate)",
  "por-que-el-sahara-fue-verde": "var(--clay)",
  "por-que-el-teclado-esta-en-qwerty": "var(--clay)",
  "por-que-el-tiempo-pasa-mas-rapido": "var(--plum)",
  "por-que-estornudamos": "var(--slate)",
  "por-que-flota-un-barco-de-acero": "var(--clay)",
  "por-que-hay-auroras-boreales": "var(--ochre)",
  "por-que-hay-personas-con-ojos-azules": "var(--clay)",
  "por-que-hay-personas-con-ojos-marrones": "var(--teal)",
  "por-que-hay-personas-con-ojos-verdes": "var(--sage)",
  "por-que-hay-personas-rubias": "var(--ochre)",
  "por-que-hay-terremotos": "var(--clay)",
  "por-que-la-estatua-de-la-libertad-es-verde": "var(--plum)",
  "por-que-la-gente-mayor-huele-distinto": "var(--slate)",
  "por-que-la-luna-nos-ensena-siempre-la-misma-cara": "var(--plum)",
  "por-que-la-luna-se-ve-enorme-en-el-horizonte": "var(--slate)",
  "por-que-la-miel-nunca-caduca": "var(--clay)",
  "por-que-la-zanahoria-es-naranja": "var(--teal)",
  "por-que-las-abejas-hacen-celdas-hexagonales": "var(--teal)",
  "por-que-las-cebras-tienen-rayas": "var(--teal)",
  "por-que-las-estatuas-griegas-son-blancas": "var(--slate)",
  "por-que-las-hojas-cambian-de-color": "var(--sage)",
  "por-que-las-pelotas-de-golf-tienen-hoyuelos": "var(--ochre)",
  "por-que-lloras-al-cortar-cebolla": "var(--ochre)",
  "por-que-llueve": "var(--slate)",
  "por-que-los-buhos-giran-tanto-la-cabeza": "var(--teal)",
  "por-que-los-colibries-pueden-quedarse-parados-en-el-aire": "var(--sage)",
  "por-que-los-desiertos-estan-donde-estan": "var(--clay)",
  "por-que-los-espejos-invierten": "var(--plum)",
  "por-que-los-flamencos-son-rosas": "var(--slate)",
  "por-que-los-girasoles-siguen-al-sol": "var(--ochre)",
  "por-que-los-mapas-mienten-sobre-el-tamano-de-los-paises": "var(--sage)",
  "por-que-los-pelirrojos-necesitan-mas-anestesia": "var(--sage)",
  "por-que-marte-es-rojo": "var(--clay)",
  "por-que-no-hay-dos-copos-de-nieve-iguales": "var(--plum)",
  "por-que-no-hemos-vuelto-a-la-luna": "var(--teal)",
  "por-que-no-puedes-hacerte-cosquillas": "var(--plum)",
  "por-que-no-recuerdas-el-momento-en-que-te-dormiste": "var(--teal)",
  "por-que-no-recuerdas-tus-primeros-anos": "var(--clay)",
  "por-que-nos-salen-canas": "var(--teal)",
  "por-que-nos-sonrojamos": "var(--teal)",
  "por-que-pica-el-picante": "var(--clay)",
  "por-que-pica-la-picadura-de-mosquito": "var(--ochre)",
  "por-que-recuerdas-mal-cosas-que-juras-haber-vivido": "var(--plum)",
  "por-que-resbala-el-hielo": "var(--sage)",
  "por-que-ronronean-los-gatos": "var(--plum)",
  "por-que-saturno-tiene-anillos": "var(--sage)",
  "por-que-se-abandono-machu-picchu": "var(--ochre)",
  "por-que-se-corta-la-leche": "var(--sage)",
  "por-que-se-pone-duro-el-pan": "var(--slate)",
  "por-que-se-te-duerme-una-pierna": "var(--ochre)",
  "por-que-se-te-queda-una-cancion-pegada": "var(--sage)",
  "por-que-se-ven-azules-las-venas": "var(--clay)",
  "por-que-son-caros-los-diamantes": "var(--plum)",
  "por-que-son-tan-bonitas-las-mariposas": "var(--slate)",
  "por-que-sube-la-marea": "var(--sage)",
  "por-que-te-da-flato-al-correr": "var(--ochre)",
  "por-que-te-mareas-en-el-coche": "var(--teal)",
  "por-que-te-pones-moreno": "var(--sage)",
  "por-que-tenemos-estaciones": "var(--sage)",
  "por-que-tenemos-hipo": "var(--plum)",
  "por-que-tenemos-piel-de-gallina": "var(--slate)",
  "por-que-tiritamos": "var(--slate)",
  "por-que-tu-voz-grabada-suena-rara": "var(--clay)",
  "por-que-un-pulpo-se-camufla-si-es-daltonico": "var(--teal)",
  "por-que-un-rayo-hace-zigzag": "var(--sage)",
  "por-que-unos-paises-son-ricos-y-otros-pobres": "var(--plum)",
  "por-que-vuelan-los-aviones": "var(--teal)",
  "que-es-el-salar-de-uyuni": "var(--slate)",
  "que-es-exactamente-el-fuego": "var(--ochre)",
  "que-es-realmente-el-queso": "var(--plum)",
  "que-es-realmente-un-hongo": "var(--slate)",
  "que-es-realmente-una-perla": "var(--clay)",
  "que-es-un-agujero-de-gusano": "var(--teal)",
  "que-es-un-agujero-negro": "var(--sage)",
  "que-es-un-laser": "var(--plum)",
  "que-es-una-estrella-fugaz": "var(--ochre)",
  "que-es-una-galaxia": "var(--sage)",
  "que-fue-antes-el-huevo-o-la-gallina": "var(--slate)",
  "que-fue-el-ejercito-de-terracota": "var(--plum)",
  "que-fue-la-ruta-de-la-seda": "var(--slate)",
  "que-fue-realmente-la-peste-negra": "var(--clay)",
  "que-hay-debajo-de-la-antartida": "var(--slate)",
  "que-hay-en-el-fondo-de-la-fosa-de-las-marianas": "var(--teal)",
  "que-paises-tienen-bomba-atomica": "var(--ochre)",
  "que-paso-realmente-en-pompeya": "var(--sage)",
  "quien-construyo-stonehenge-y-para-que": "var(--ochre)",
  "quien-fue-cleopatra": "var(--clay)",
  "quien-fue-isaac-newton": "var(--teal)",
  "quien-fue-la-persona-mas-rica-del-mundo": "var(--sage)",
  "quien-fue-leonardo-da-vinci": "var(--clay)",
  "quien-fue-nikola-tesla": "var(--ochre)",
  "quien-invento-el-futbol": "var(--plum)",
  "quien-invento-el-submarino": "var(--teal)",
  "steve-jobs": "var(--clay)",
  "sueltos": "var(--sage)",
};
/* EL TÍTULO DEL SHORT ES EL DE SU SERIE, y esto lo pidió Pablo el 28 de
   agosto: «cambia a los títulos que estaban antes: cuánto le queda al Sol,
   cómo llueve, por qué se corta la leche, todos los títulos de antes».

   Sus `.md` traen en la cabecera el titular de CADA PARTE —«La costra no está
   curando nada», «El picante no es un sabor»—, que es una afirmación
   discutible y está muy bien escrita, pero es el titular de un capítulo, no el
   nombre del tema. Puesto en la portada y en el muro, la lista de shorts
   dejaba de poder leerse de un vistazo: doce afirmaciones largas seguidas, y
   ninguna diciendo de qué va. `MOLDE.md` ya lo tenía escrito desde antes —«el
   título pregunta o nombra la cosa, tres a seis palabras»—; lo que faltaba era
   aplicarlo a los textos nuevos.

   Los títulos son literalmente los de antes: salen del catálogo anterior a
   `ed7a454`, que es lo que él quiere recuperar. La clave es la carpeta, que ya
   venía nombrada así en su propio envío.

   El titular de cada parte NO se pierde: sigue en su `.md`, sale escrito aquí
   como comentario de cada short, y es el que valdrá el día que las partes 2, 3
   y 4 tengan portada y haya que distinguirlas. */
const SERIE = {
  /* Tomo 9, del 1 de septiembre. Misma regla que los demás: el título de
     la serie es la pregunta, no el titular de su primera página. */
  "como-andan-las-moscas-por-el-techo": "Cómo andan las moscas por el techo",
  "como-funciona-el-cine": "Cómo funciona el cine",
  "como-funciona-un-ascensor": "Cómo funciona un ascensor",
  "como-funciona-un-paracaidas": "Cómo funciona un paracaídas",
  "como-funciona-una-bateria": "Cómo funciona una batería",
  "como-sabemos-de-que-estan-hechas-las-estrellas": "Cómo sabemos de qué están hechas las estrellas",
  "como-se-invento-la-escritura": "Cómo se inventó la escritura",
  "como-se-sostiene-un-satelite": "Cómo se sostiene un satélite",
  "como-vivian-los-piratas-de-verdad": "Cómo vivían los piratas de verdad",
  "de-donde-salio-el-agua-de-la-tierra": "De dónde salió el agua de la Tierra",
  "de-donde-salio-la-luna": "De dónde salió la Luna",
  "decides-tu-o-ya-estaba-decidido": "Decides tú o ya estaba decidido",
  "el-dia-que-cayo-constantinopla": "El día que cayó Constantinopla",
  "eres-la-misma-persona-que-hace-diez-anos": "Eres la misma persona que hace diez años",
  "existe-el-infinito": "Existe el infinito",
  "internet-va-por-el-fondo-del-mar": "Internet va por el fondo del mar",
  "italia-estuvo-dos-siglos-sin-tomate": "Italia estuvo dos siglos sin tomate",
  "la-burbuja-de-los-tulipanes": "La burbuja de los tulipanes",
  "la-caverna-de-platon": "La caverna de Platón",
  "la-historia-de-lego": "La historia de Lego",
  "la-historia-de-nintendo": "La historia de Nintendo",
  "la-historia-de-zara": "La historia de Zara",
  "la-pasta-no-vino-de-china": "La pasta no vino de China",
  "la-patata-que-cambio-europa": "La patata que cambió Europa",
  "los-chips-se-hacen-con-arena": "Los chips se hacen con arena",
  "por-que-crece-tan-rapido-el-bambu": "Por qué crece tan rápido el bambú",
  "por-que-envejecemos": "Por qué envejecemos",
  "por-que-hay-gente-que-no-digiere-la-leche": "Por qué hay gente que no digiere la leche",
  "por-que-hay-grupos-sanguineos": "Por qué hay grupos sanguíneos",
  "por-que-hay-zurdos": "Por qué hay zurdos",
  "por-que-islandia-tiene-tantos-volcanes": "Por qué Islandia tiene tantos volcanes",
  "por-que-los-precios-acaban-en-99": "Por qué los precios acaban en 99",
  "por-que-mataron-a-socrates": "Por qué mataron a Sócrates",
  "por-que-olvidas-los-suenos": "Por qué olvidas los sueños",
  "por-que-se-hunde-venecia": "Por qué se hunde Venecia",
  "por-que-sube-la-inflacion": "Por qué sube la inflación",
  "puede-pensar-una-maquina": "Puede pensar una máquina",
  "que-es-la-conciencia": "Qué es la conciencia",
  "que-funcion-tiene-la-fiebre": "Qué función tiene la fiebre",
  "que-funcion-tienen-los-suenos": "Qué función tienen los sueños",
  "que-hay-en-el-centro-de-la-tierra": "Qué hay en el centro de la Tierra",
  "que-paso-con-la-biblioteca-de-alejandria": "Qué pasó con la Biblioteca de Alejandría",
  "quien-fue-alejandro-magno": "Quién fue Alejandro Magno",
  "quien-fue-gengis-kan": "Quién fue Gengis Kan",
  "quien-fue-marie-curie": "Quién fue Marie Curie",
  "quien-fue-van-gogh": "Quién fue Van Gogh",
  "ves-el-mismo-rojo-que-yo": "Ves el mismo rojo que yo",
  "vivimos-dentro-de-una-simulacion": "Vivimos dentro de una simulación",
  "cuanto-le-queda-al-sol": "Cuánto de vida le queda al Sol",
  "como-funciona-la-gravedad": "Cómo funciona la gravedad",
  "como-cicatrizan-las-heridas": "Cómo cicatrizan las heridas",
  "por-que-llueve": "Por qué llueve",
  "por-que-bostezamos": "Por qué bostezamos",
  "por-que-vuelan-los-aviones": "Por qué vuelan los aviones",
  "por-que-tiritamos": "Por qué tiritamos",
  "por-que-pica-el-picante": "Por qué pica el picante",
  "por-que-te-mareas-en-el-coche": "Por qué te mareas en el coche",
  "por-que-tenemos-estaciones": "Por qué tenemos estaciones",
  "por-que-se-corta-la-leche": "Por qué se corta la leche",
  /* Serie nueva del 28 de agosto: no estaba en el catálogo viejo, así que el
     título se escribe con la misma regla que los otros once. */
  "por-que-no-puedes-hacerte-cosquillas": "Por qué no puedes hacerte cosquillas",
  /* Las veintidós del 29 de agosto. El título sale del nombre de la carpeta,
     que se lo puso él: es la pregunta tal cual, y es lo que pide `MOLDE.md`. */
  "por-que-resbala-el-hielo": "Por qué resbala el hielo",
  "por-que-las-cebras-tienen-rayas": "Por qué las cebras tienen rayas",
  "por-que-no-recuerdas-tus-primeros-anos": "Por qué no recuerdas tus primeros años",
  "por-que-la-miel-nunca-caduca": "Por qué la miel nunca caduca",
  "por-que-los-flamencos-son-rosas": "Por qué los flamencos son rosas",
  "por-que-lloras-al-cortar-cebolla": "Por qué lloras al cortar cebolla",
  "por-que-el-cafe-te-despierta": "Por qué el café te despierta",
  "por-que-se-te-duerme-una-pierna": "Por qué se te duerme una pierna",
  "por-que-tenemos-piel-de-gallina": "Por qué tenemos piel de gallina",
  "por-que-tu-voz-grabada-suena-rara": "Por qué tu voz grabada suena rara",
  "por-que-el-cielo-es-azul": "Por qué el cielo es azul",
  "por-que-el-mar-es-salado": "Por qué el mar es salado",
  "por-que-las-hojas-cambian-de-color": "Por qué las hojas cambian de color",
  "por-que-nos-sonrojamos": "Por qué nos sonrojamos",
  "por-que-tenemos-hipo": "Por qué tenemos hipo",
  "por-que-duele-el-frio-en-un-diente": "Por qué duele el frío en un diente",
  "por-que-la-gente-mayor-huele-distinto": "Por qué la gente mayor huele distinto",
  "por-que-el-tiempo-pasa-mas-rapido": "Por qué el tiempo pasa más rápido",
  "por-que-duelen-las-agujetas": "Por qué duelen las agujetas",
  "por-que-crujen-los-nudillos": "Por qué crujen los nudillos",
  "por-que-los-espejos-invierten": "Por qué los espejos invierten",
  "por-que-crecen-las-unas-despues-de-morir": "Por qué crecen las uñas después de morir",
  /* Las once del segundo envío del 29, con la misma regla: la pregunta de la
     carpeta, tal cual la escribió él. */
  "por-que-se-pone-duro-el-pan": "Por qué se pone duro el pan",
  "por-que-se-ven-azules-las-venas": "Por qué se ven azules las venas",
  "por-que-te-pones-moreno": "Por qué te pones moreno",
  "por-que-pica-la-picadura-de-mosquito": "Por qué pica la picadura de mosquito",
  "por-que-el-everest-no-es-la-mas-alta": "Por qué el Everest no es la más alta",
  "por-que-los-pelirrojos-necesitan-mas-anestesia": "Por qué los pelirrojos necesitan más anestesia",
  "por-que-duele-la-resaca": "Por qué duele la resaca",
  "para-que-sirven-las-huellas-dactilares": "Para qué sirven las huellas dactilares",
  "por-que-ronronean-los-gatos": "Por qué ronronean los gatos",
  "por-que-duele-la-cabeza-al-comer-helado": "Por qué duele la cabeza al comer helado",
  "por-que-el-agua-caliente-se-congela-antes": "Por qué el agua caliente se congela antes",
  /* Las veinticinco de la noche del 29: cielo, espacio y bichos. */
  "como-se-forma-un-arcoiris": "Cómo se forma un arcoíris",
  "como-vuelan-los-cohetes": "Cómo vuelan los cohetes",
  "cual-es-el-ser-vivo-mas-grande-del-planeta": "Cuál es el ser vivo más grande",
  "cuantas-estrellas-hay-en-el-universo": "Cuántas estrellas hay en el universo",
  "cuanto-tiempo-le-queda-a-la-luna": "Cuánto tiempo le queda a la Luna",
  "el-animal-mas-grande-del-mundo": "El animal más grande del mundo",
  "hasta-que-altura-puede-crecer-un-arbol": "Hasta qué altura crece un árbol",
  "por-que-brillan-las-luciernagas": "Por qué brillan las luciérnagas",
  "por-que-el-cielo-es-negro-de-noche": "Por qué el cielo es negro de noche",
  "por-que-el-hielo-de-los-glaciares-es-azul": "Por qué el hielo de los glaciares es azul",
  "por-que-el-mar-brilla-de-noche": "Por qué el mar brilla de noche",
  "por-que-el-mar-es-azul": "Por qué el mar es azul",
  "por-que-hay-auroras-boreales": "Por qué hay auroras boreales",
  "por-que-la-luna-nos-ensena-siempre-la-misma-cara": "Por qué la Luna enseña siempre la misma cara",
  "por-que-la-luna-se-ve-enorme-en-el-horizonte": "Por qué la Luna se ve enorme en el horizonte",
  "por-que-las-abejas-hacen-celdas-hexagonales": "Por qué las abejas hacen celdas hexagonales",
  "por-que-los-buhos-giran-tanto-la-cabeza": "Por qué los búhos giran tanto la cabeza",
  "por-que-los-colibries-pueden-quedarse-parados-en-el-aire": "Por qué los colibríes se quedan parados en el aire",
  "por-que-los-girasoles-siguen-al-sol": "Por qué los girasoles siguen al Sol",
  "por-que-no-hay-dos-copos-de-nieve-iguales": "Por qué no hay dos copos de nieve iguales",
  "por-que-son-tan-bonitas-las-mariposas": "Por qué son tan bonitas las mariposas",
  "por-que-un-pulpo-se-camufla-si-es-daltonico": "Por qué un pulpo se camufla si es daltónico",
  "por-que-un-rayo-hace-zigzag": "Por qué un rayo hace zigzag",
  "que-es-una-galaxia": "Qué es una galaxia",
  "que-paises-tienen-bomba-atomica": "Qué países tienen bomba atómica",
  /* Las siete del 29 por la noche: bebida, desierto, sueño y flato. */
  "como-se-hace-el-vino": "Cómo se hace el vino",
  "como-se-hace-la-cerveza": "Cómo se hace la cerveza",
  "de-donde-sale-el-alcohol": "De dónde sale el alcohol",
  "por-que-los-desiertos-estan-donde-estan": "Por qué los desiertos están donde están",
  "por-que-no-recuerdas-el-momento-en-que-te-dormiste": "Por qué no recuerdas cuándo te dormiste",
  "por-que-se-te-queda-una-cancion-pegada": "Por qué se te queda una canción pegada",
  "por-que-te-da-flato-al-correr": "Por qué te da flato al correr",
  /* Las treinta y dos del 30 de agosto: ciencia, historia y retratos. */
  "como-erupciona-un-volcan": "Cómo erupciona un volcán",
  "como-funciona-un-hormiguero": "Cómo funciona un hormiguero",
  "como-funciona-una-cerilla": "Cómo funciona una cerilla",
  "como-se-descubrio-la-penicilina": "Cómo se descubrió la penicilina",
  "como-se-forma-un-cometa": "Cómo se forma un cometa",
  "de-donde-sale-el-oro": "De dónde sale el oro",
  "de-que-vive-el-amazonas": "De qué vive el Amazonas",
  "por-que-el-aceite-de-oliva-es-tan-saludable": "Por qué el aceite de oliva es tan sano",
  "por-que-el-sahara-fue-verde": "Por qué el Sáhara fue verde",
  "por-que-hay-personas-con-ojos-azules": "Por qué hay personas con ojos azules",
  "por-que-hay-personas-con-ojos-marrones": "Por qué hay personas con ojos marrones",
  "por-que-hay-personas-con-ojos-verdes": "Por qué hay personas con ojos verdes",
  "por-que-hay-personas-rubias": "Por qué hay personas rubias",
  "por-que-la-estatua-de-la-libertad-es-verde": "Por qué la Estatua de la Libertad es verde",
  "por-que-las-estatuas-griegas-son-blancas": "Por qué las estatuas griegas son blancas",
  "por-que-marte-es-rojo": "Por qué Marte es rojo",
  "por-que-no-hemos-vuelto-a-la-luna": "Por qué no hemos vuelto a la Luna",
  "por-que-saturno-tiene-anillos": "Por qué Saturno tiene anillos",
  "por-que-se-abandono-machu-picchu": "Por qué se abandonó Machu Picchu",
  "por-que-son-caros-los-diamantes": "Por qué son caros los diamantes",
  "que-es-el-salar-de-uyuni": "Qué es el salar de Uyuni",
  "que-es-realmente-una-perla": "Qué es realmente una perla",
  "que-es-un-agujero-de-gusano": "Qué es un agujero de gusano",
  "que-es-un-agujero-negro": "Qué es un agujero negro",
  "que-es-una-estrella-fugaz": "Qué es una estrella fugaz",
  "que-fue-el-ejercito-de-terracota": "Qué fue el ejército de terracota",
  "que-hay-debajo-de-la-antartida": "Qué hay debajo de la Antártida",
  "quien-fue-cleopatra": "Quién fue Cleopatra",
  "quien-fue-isaac-newton": "Quién fue Isaac Newton",
  "quien-fue-la-persona-mas-rica-del-mundo": "Quién fue la persona más rica",
  "quien-fue-nikola-tesla": "Quién fue Nikola Tesla",
  "quien-invento-el-futbol": "Quién inventó el fútbol",
  /* Las veintiocho del 30 por la tarde: cómo funcionan las cosas, coches y dinero. */
  "como-calienta-un-microondas": "Cómo calienta un microondas",
  "como-cancelan-el-ruido-unos-auriculares": "Cómo cancelan el ruido unos auriculares",
  "como-enfria-una-nevera": "Cómo enfría una nevera",
  "como-funciona-el-wifi": "Cómo funciona el wifi",
  "como-funciona-la-bolsa-de-valores": "Cómo funciona la bolsa de valores",
  "como-funciona-la-inteligencia-artificial": "Cómo funciona la inteligencia artificial",
  "como-funciona-un-coche": "Cómo funciona un coche",
  "como-funciona-una-cerradura": "Cómo funciona una cerradura",
  "como-funciona-una-pantalla-tactil": "Cómo funciona una pantalla táctil",
  "como-genera-electricidad-un-molino-de-viento": "Cómo genera electricidad un molino",
  "como-genera-electricidad-una-placa-solar": "Cómo genera electricidad una placa solar",
  "como-se-aguanta-en-pie-un-rascacielos": "Cómo se aguanta en pie un rascacielos",
  "como-se-construyo-el-canal-de-panama": "Cómo se construyó el canal de Panamá",
  "como-un-simple-papel-tiene-valor": "Cómo un simple papel tiene valor",
  "como-vuelan-los-helicopteros": "Cómo vuelan los helicópteros",
  "cual-es-el-rio-mas-largo-del-mundo": "Cuál es el río más largo del mundo",
  "cuanto-aguanta-un-cactus-sin-agua": "Cuánto aguanta un cactus sin agua",
  "el-auge-economico-de-china": "El auge económico de China",
  "la-historia-de-bugatti": "La historia de Bugatti",
  "la-historia-de-ferrari": "La historia de Ferrari",
  "la-historia-de-lamborghini": "La historia de Lamborghini",
  "la-historia-de-porsche": "La historia de Porsche",
  "miguel-de-cervantes": "Miguel de Cervantes",
  "para-que-dormimos": "Para qué dormimos",
  "por-que-las-pelotas-de-golf-tienen-hoyuelos": "Por qué las pelotas de golf tienen hoyuelos",
  "por-que-unos-paises-son-ricos-y-otros-pobres": "Por qué unos países son ricos y otros pobres",
  "que-es-realmente-un-hongo": "Qué es realmente un hongo",
  "steve-jobs": "Steve Jobs",
  /* Las veintinueve del 31 de agosto: naturaleza, inventos e historia. */
  "como-de-bien-ve-un-aguila": "Cómo de bien ve un águila",
  "como-funciona-un-iman": "Cómo funciona un imán",
  "como-funciona-un-reloj-mecanico": "Cómo funciona un reloj mecánico",
  "como-funciona-un-tren-de-alta-velocidad": "Cómo funciona un tren de alta velocidad",
  "como-funciona-una-camara-de-fotos": "Cómo funciona una cámara de fotos",
  "como-reconoce-un-pinguino-a-su-cria": "Cómo reconoce un pingüino a su cría",
  "como-se-forma-un-tornado": "Cómo se forma un tornado",
  "como-se-forma-un-tsunami": "Cómo se forma un tsunami",
  "como-se-forma-una-cueva": "Cómo se forma una cueva",
  "como-se-forman-las-olas": "Cómo se forman las olas",
  "como-se-hace-el-jamon-iberico": "Cómo se hace el jamón ibérico",
  "como-vuelan-los-pajaros": "Cómo vuelan los pájaros",
  "de-que-esta-hecho-un-hueso": "De qué está hecho un hueso",
  "el-camino-de-santiago": "El Camino de Santiago",
  "la-historia-de-la-alhambra": "La historia de la Alhambra",
  "la-historia-del-titanic": "La historia del Titanic",
  "la-sagrada-familia": "La Sagrada Familia",
  "los-samurais": "Los samuráis",
  "por-que-cambia-de-color-un-camaleon": "Por qué cambia de color un camaleón",
  "por-que-estornudamos": "Por qué estornudamos",
  "por-que-flota-un-barco-de-acero": "Por qué flota un barco de acero",
  "por-que-hay-terremotos": "Por qué hay terremotos",
  "por-que-nos-salen-canas": "Por qué nos salen canas",
  "por-que-sube-la-marea": "Por qué sube la marea",
  "que-es-exactamente-el-fuego": "Qué es exactamente el fuego",
  "que-es-un-laser": "Qué es un láser",
  "que-fue-antes-el-huevo-o-la-gallina": "Qué fue antes, el huevo o la gallina",
  "quien-fue-leonardo-da-vinci": "Quién fue Leonardo da Vinci",
  "quien-invento-el-submarino": "Quién inventó el submarino",
  "fuimos-la-unica-especie-humana": "Fuimos la única especie humana",
  /* Las veinticinco de historia y comida del 29 por la madrugada. */
  "como-era-de-verdad-un-gladiador-romano": "Cómo era de verdad un gladiador romano",
  "como-se-construyeron-las-piramides": "Cómo se construyeron las pirámides",
  "como-se-descifraron-los-jeroglificos": "Cómo se descifraron los jeroglíficos",
  "como-se-hizo-el-primer-pan": "Cómo se hizo el primer pan",
  "cual-es-el-animal-mas-venenoso-del-mundo": "Cuál es el animal más venenoso",
  "cual-es-el-idioma-mas-antiguo-que-se-sigue-hablando": "Cuál es el idioma más antiguo",
  "cual-fue-el-primer-videojuego": "Cuál fue el primer videojuego",
  "cuanto-duro-de-verdad-el-imperio-romano": "Cuánto duró de verdad el Imperio romano",
  "de-donde-sale-el-azucar": "De dónde sale el azúcar",
  "de-donde-viene-el-chocolate": "De dónde viene el chocolate",
  "de-donde-viene-el-viento": "De dónde viene el viento",
  "llegaron-los-vikingos-a-america-antes-que-colon": "Llegaron los vikingos antes que Colón",
  "por-que-cayo-el-imperio-romano": "Por qué cayó el Imperio romano",
  "por-que-el-mar-muerto-se-esta-secando": "Por qué el mar Muerto se está secando",
  "por-que-el-platano-no-tiene-semillas": "Por qué el plátano no tiene semillas",
  "por-que-el-teclado-esta-en-qwerty": "Por qué el teclado está en QWERTY",
  "por-que-la-zanahoria-es-naranja": "Por qué la zanahoria es naranja",
  "por-que-los-mapas-mienten-sobre-el-tamano-de-los-paises": "Por qué los mapas mienten sobre el tamaño",
  "por-que-recuerdas-mal-cosas-que-juras-haber-vivido": "Por qué recuerdas mal cosas que juras haber vivido",
  "que-es-realmente-el-queso": "Qué es realmente el queso",
  "que-fue-la-ruta-de-la-seda": "Qué fue la Ruta de la Seda",
  "que-fue-realmente-la-peste-negra": "Qué fue realmente la peste negra",
  "que-hay-en-el-fondo-de-la-fosa-de-las-marianas": "Qué hay en el fondo de las Marianas",
  "que-paso-realmente-en-pompeya": "Qué pasó realmente en Pompeya",
  "quien-construyo-stonehenge-y-para-que": "Quién construyó Stonehenge y para qué",
};

/* El pie y el texto alternativo de cada fotografía. Van aquí y no en la
   cabecera de Pablo porque son de la imagen, no del texto: cambian cuando se
   cambia la foto y no cuando se reescribe el short. */
const FOTOS = {
  "al-sol-le-quedan-cinco-mil-millones": {
    commons: "Solar Orbiter’s widest high-res view of the Sun ESA508430.jpg",
    autor: "La corona solar en ultravioleta: doscientas tomas de la sonda Solar Orbiter cosidas en una, 9 de marzo de 2025. Agencia Espacial Europea.",
    licencia: "CC BY-SA 3.0 igo",
    fuente: "https://commons.wikimedia.org/wiki/File:Solar_Orbiter%E2%80%99s_widest_high-res_view_of_the_Sun_ESA508430.jpg",
    foco: "50% 50%",
    alt: "El disco del Sol en amarillo cálido, con la corona erizada de arcos brillantes alrededor del ecuador.",
  },
  "el-bostezo-no-tiene-que-ver-con-el-oxigeno": { autor: "Fotografía de Jenny Downing.", licencia: "CC BY-SA 2.0", fuente: "https://commons.wikimedia.org/wiki/File:Tabby_cat-yawning-01.jpg", alt: "Un gato atigrado bostezando con la boca muy abierta, visto de perfil." },
  "por-que-vuelan-los-aviones-es-falso": { autor: "Fotografía de Łukasz Golowanow.", licencia: "Attribution", fuente: "https://commons.wikimedia.org/wiki/File:Patrouille_de_France_Radom_3_1.JPG", alt: "Ocho reactores de la Patrouille de France en formación cerrada, dejando estelas de humo." },
  "te-ensenaron-mal-como-se-forma-una-nube": { autor: "Fotografía de Sara Mazin, en Pexels.", licencia: "Pexels License", fuente: "https://www.pexels.com/photo/19860993/", alt: "Gotas de lluvia cubriendo un cristal, con un taxi amarillo desenfocado detrás." },
  "tiritar-desperdiciar-energia": { autor: "Fotografía de Anzhela Svyrydiuk, en Pexels.", licencia: "Pexels License", fuente: "https://www.pexels.com/photo/29023988/", alt: "Hojas cubiertas de escarcha blanca en primer plano, con la hierba helada difuminada detrás." },
  "el-picante-no-es-un-sabor": { autor: "Fotografía de MacShamim, en Pexels.", licencia: "Pexels License", fuente: "https://www.pexels.com/photo/31464525/", alt: "Cientos de chiles rojos alargados extendidos para secarse, llenando la imagen entera." },
  "el-conductor-no-se-marea-nunca": { autor: "Fotografía de Elif, en Pexels.", licencia: "Pexels License", fuente: "https://www.pexels.com/photo/17729653/", alt: "Un coche blanco antiguo detenido en una carretera recta que cruza una llanura seca, en tonos sepia." },
  "en-invierno-estamos-mas-cerca-del-sol": { autor: "Fotografía de Canan Cetin, en Pexels.", licencia: "Pexels License", fuente: "https://www.pexels.com/photo/29343620/", alt: "Una rama de hojas amarillas de otoño contra el cielo, con las copas verdes de los pinos al fondo." },
  "la-costra-no-esta-curando-nada": { autor: "Fotografía de MART PRODUCTION, en Pexels.", licencia: "Pexels License", fuente: "https://www.pexels.com/photo/7699367/", alt: "Un puño cerrado visto de cerca, con las costras oscuras de dos heridas recientes en los nudillos." },
  /* Sin crédito: su procedencia tampoco está confirmada, y «imagen del
     proyecto» era una suposición mía, no un dato suyo. */
  "la-gravedad-no-es-una-fuerza": { autor: "", licencia: "Pendiente de confirmar con Pablo", alt: "Decenas de líneas finas en rojo, magenta y violeta sobre negro, girando en espiral hacia un punto oscuro." },
  "la-leche-cortada-es-queso-a-medio-empezar": { autor: "Fotografía de Ly, en Pexels.", licencia: "Pexels License", fuente: "https://www.pexels.com/photo/8183877/", alt: "Una jarra de cristal llena de leche sobre una tabla de madera, con luz suave de ventana." },
};

const parte = (t, sangria) => {
  const ancho = 96 - sangria.length;
  const trozos = [];
  let linea = "";
  for (const pal of t.split(" ")) {
    if (linea && (linea + " " + pal).length > ancho) { trozos.push(linea); linea = pal; }
    else linea = linea ? linea + " " + pal : pal;
  }
  if (linea) trozos.push(linea);
  return trozos;
};
const cadena = (t, sangria) => {
  const trozos = parte(t, sangria);
  if (trozos.length === 1) return JSON.stringify(trozos[0]);
  return trozos.map((l, i) => `${i ? sangria : ""}${JSON.stringify(l + (i < trozos.length - 1 ? " " : ""))}`).join(" +\n");
};

/* Todos los `.md`, en el orden de las carpetas y por `orden` dentro de cada
   serie, que es el que él les dio.

   SOLO LOS DE DENTRO DE UNA CARPETA. Los `.md` sueltos en la raíz NO son
   shorts: son sus documentos —`FORMATO.md`, `COLA.md`, `FUENTES-IMAGENES.md`—
   y lo dice él mismo en el formato: «nunca sueltos en la raíz; cada tema tiene
   su propia subcarpeta con el nombre de su serie». Estuvo un rato filtrando
   por nombre —`!== "FORMATO.md"`— y el 29 de agosto llegaron dos documentos
   más y se colaron los dos: el guion pedía una portada para «Cola de temas».
   Filtrar por la regla y no por la lista de nombres se arregla una vez. */
/* EL ORDEN ES EL DE INCORPORACIÓN, no el alfabético.
 *
 * Pablo, el 1 de septiembre: «ponme los shorts en orden de incorporación».
 *
 * Por orden de carpeta, «Cómo funciona el cine» —de la última tanda— salía
 * entre los primeros del muro, y las doce series con las que empezó todo
 * quedaban repartidas por en medio. El muro no contaba nada.
 *
 * Cuándo entró cada serie no está en sus ficheros: `orden` en la cabecera es
 * qué página va primero DENTRO de una serie, que es otra cosa. Lo sabe el
 * repositorio, y está volcado en assets/orden-shorts.json —lo escribe
 * scripts/orden-incorporacion.mjs a partir del primer commit que añadió cada
 * fichero—. Se lee de ahí y no se le pregunta a git en cada compilación:
 * serían seiscientas invocaciones.
 *
 * Una serie que no esté en la lista va al final: si falta es porque acaba de
 * llegar y todavía no se ha vuelto a generar el fichero, y ahí es donde le
 * toca estar. */
const ORDEN = existsSync(join(AQUI, "assets", "orden-shorts.json"))
  ? JSON.parse(readFileSync(join(AQUI, "assets", "orden-shorts.json"), "utf8")).orden
  : {};

const carpetas = readdirSync(TEXTOS)
  .filter((d) => statSync(join(TEXTOS, d)).isDirectory())
  .sort((a, b) => (ORDEN[a]?.n ?? 1e9) - (ORDEN[b]?.n ?? 1e9) || a.localeCompare(b, "es"));

const rutas = [];
for (const d of carpetas) {
  const p = join(TEXTOS, d);
  /* Dentro de la serie manda `orden` de la cabecera, y el nombre del fichero
     ya lo lleva delante —01-, 02-…—, así que ordenar por nombre lo respeta. */
  for (const f of readdirSync(p).sort()) if (f.endsWith(".md")) rutas.push(join(p, f));
}

/** El título que se pinta: el de la serie si la hay, y si no el suyo. */
function tituloDe(t) {
  return SERIE[t.cabecera.serie] ?? t.titulo;
}

/* EL ESCAPARATE, que no es lo mismo que la app.
 *
 * `movil.html` es UN SOLO fichero HTML con las portadas empotradas dentro y un
 * tope de publicación de 16 MB. A partir de unas sesenta portadas no cabe, y
 * apretar más la calidad estropea justo lo que Pablo va a mirar. Él lo dejó
 * resuelto: «si no caben borras las que teníamos ya, que esas ya he comprobado
 * que están bien».
 *
 * Así que con `--vitrina` se genera un catálogo recortado, SOLO para compilar
 * el simulador, con los shorts de `assets/vitrina.json` fuera. La app de verdad
 * y el repositorio los siguen teniendo todos: lo que se recorta es la vitrina,
 * no el producto.
 *
 * La lista se escribe A MANO y es lo correcto: aquí los temas salen por orden
 * alfabético de carpeta, así que no hay forma de calcular «los N más viejos»
 * sin inventarse una antigüedad que el dato no tiene.
 */
const vitrina = process.argv.includes("--vitrina");
const fueraDeVitrina = new Set(
  vitrina
    ? JSON.parse(readFileSync(join(AQUI, "assets", "vitrina.json"), "utf8")).fuera
    : [],
);

const dentro = [];
const fuera = [];
for (const ruta of rutas) {
  const t = leeTema(ruta);
  /* La copia de servir es la que se importa, así que es la que decide si un
     short puede entrar. Si falta, es que hay que pasar `portadas-servir.mjs`. */
  if (!existsSync(join(PORTADAS, "servir", `${t.id}.avif`))) { fuera.push(t); continue; }
  if (fueraDeVitrina.has(t.id)) continue;
  dentro.push(t);
}

const L = [];
L.push('import type { Short } from "../shorts";');
L.push("/* Las portadas, empotradas: el artefacto que abre Pablo bloquea cualquier");
L.push("   imagen de fuera, así que la que él ve tiene que viajar dentro. Las de");
L.push("   Commons no llevan `import`: se piden por red y `movil.mjs` las empotra.");
L.push("");
L.push("   SE IMPORTA LA COPIA DE `portadas/servir/`, NO LA MAESTRA. La maestra es");
L.push("   de 2160 × 3840 y pesa un mega: guardarla así es lo que pidió Pablo y");
L.push("   sigue en pie, pero servírsela al teléfono era pedirle que se bajara");
L.push("   nueve veces más píxeles de los que caben en su pantalla. Lo dijo él con");
L.push("   la app instalada: «tarda un montón en cargar las imágenes y va un poco");
L.push("   lageado». La copia de servir va a 1290, el ancho del iPhone más grande");
L.push("   que existe. Ver `scripts/portadas-servir.mjs`. */");
for (const t of dentro) if (!FOTOS[t.id]?.commons) L.push(`import p_${t.id.replace(/-/g, "_")} from "../../portadas/servir/${t.id}.avif";`);
L.push("");
L.push("/* ==========================================================================");
L.push("   CURIOSIDADES — LO ESCRIBE `scripts/catalogo.mjs`, NO SE EDITA A MANO");
L.push("");
L.push("   Sale de los `.md` de Pablo, que están en");
L.push("   `referencia/textos-de-pablo/shorts/` con su cabecera. Para");
L.push("   rehacerlo:");
L.push("");
L.push("       node scripts/catalogo.mjs > src/historias/curiosidades.ts");
L.push("");
L.push("   NO HAY PÁGINAS AQUÍ: la historia viene en bloques seguidos y quien la");
L.push("   reparte en pantallas es la app, midiendo el móvil de quien lee. Es la");
L.push("   regla 3 de `.claude/skills/paginado-shorts/SKILL.md`.");
L.push("");
L.push(`   Hoy entran ${dentro.length} de ${dentro.length + fuera.length}: solo los que tienen portada.`);
L.push("   ========================================================================== */");
L.push("");
L.push("export const CURIOSIDADES: Short[] = [");
for (const t of dentro) {
  const c = t.cabecera;
  const f = FOTOS[t.id] ?? {};
  L.push("  {");
  L.push(`    id: ${JSON.stringify(t.id)},`);
  L.push(`    titulo: ${JSON.stringify(tituloDe(t))},`);
  L.push(`    categoria: ${JSON.stringify(c.categoria ?? "Ciencia")},`);
  L.push(`    color: ${JSON.stringify(COLOR[c.serie] ?? "var(--ochre)")},`);
  if (c.serie) L.push(`    /* Serie «${c.serie}», número ${c.orden}. Se entiende suelto. */`);
  if (tituloDe(t) !== t.titulo) L.push(`    /* Su titular, el que trae el .md: «${t.titulo}» */`);
  L.push(`    encargo: ${JSON.stringify(f.alt ?? t.titulo)},`);
  L.push("    fotos: [");
  L.push("      {");
  L.push(f.commons ? `        archivo: ${JSON.stringify(f.commons)},` : `        local: p_${t.id.replace(/-/g, "_")},`);
  /* SIN CRÉDITO INVENTADO. Aquí ponía «Imagen del proyecto.» cuando no había
     nada, y eso no es un relleno: es decir que la fotografía es nuestra. De
     las catorce del 29 de agosto no lo es ninguna. Vacío, y la banda no pinta
     línea; quien avisa de que falta es `portadas.mjs` y la fila del CSV. */
  const credito = c.credito_portada || f.autor || "";
  L.push(credito
    ? `        autor:\n          ${cadena(credito, "          ")},`
    : `        autor: "",`);
  L.push(`        licencia: ${JSON.stringify(f.licencia ?? "Pexels License")},`);
  if (f.fuente) L.push(`        fuente:\n          ${JSON.stringify(f.fuente)},`);
  if (f.foco) L.push(`        foco: ${JSON.stringify(f.foco)},`);
  L.push(`        alt:\n          ${cadena(f.alt ?? t.titulo, "          ")},`);
  L.push("      },");
  L.push("    ],");
  L.push("    soloPortada: true,");
  L.push("    textoDePablo: true,");
  for (const e of t.encargos) L.push(`    /* Imagen que pide su texto para DENTRO, todavía sin hacer:\n       ${e.replace(/\*/g, "").slice(0, 240)} */`);
  L.push("    bloques: [");
  for (const b of t.bloques) {
    L.push("      {");
    L.push(`        b: ${JSON.stringify(b.b)},`);
    if (b.b === "lista") {
      L.push("        puntos: [");
      for (const q of b.puntos) L.push(`          ${cadena(q, "            ")},`);
      L.push("        ],");
    } else {
      L.push(`        texto:\n          ${cadena(b.texto, "          ")},`);
      if (b.autor) L.push(`        autor: ${JSON.stringify(b.autor)},`);
    }
    L.push("      },");
  }
  L.push("    ],");
  L.push("  },");
}
L.push("];");
console.log(L.join("\n"));

console.error(
  `\n${dentro.length} shorts dentro · ${fuera.length} esperando portada` +
    (vitrina ? ` · ${fueraDeVitrina.size} fuera del escaparate a propósito` : "") + ":",
);
for (const t of fuera) console.error(`   ${t.id}.avif      ${t.titulo.slice(0, 52)}`);

/* Y EL AVISO DE LOS TÍTULOS REPETIDOS. Hoy no hay ninguno porque de cada serie
   solo tiene portada la primera parte, pero en cuanto entre una segunda habrá
   dos shorts llamados «Por qué llueve» en el mismo muro y no se distinguirán.
   No se arregla solo, hay que decidirlo con Pablo, así que esto lo canta. */
const porTitulo = new Map();
for (const t of dentro) {
  const k = tituloDe(t);
  porTitulo.set(k, [...(porTitulo.get(k) ?? []), t.id]);
}
const repes = [...porTitulo].filter(([, ids]) => ids.length > 1);
if (repes.length) {
  console.error(`\n✗ ${repes.length} títulos repetidos en el muro:`);
  for (const [k, ids] of repes) console.error(`   «${k}»  ->  ${ids.join(", ")}`);
}
