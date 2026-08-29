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
import { existsSync, readdirSync, statSync } from "node:fs";
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
  "como-cicatrizan-las-heridas": "var(--clay)",
  "como-funciona-la-gravedad": "var(--plum)",
  "cuanto-le-queda-al-sol": "var(--ochre)",
  "por-que-bostezamos": "var(--clay)",
  "por-que-crecen-las-unas-despues-de-morir": "var(--ochre)",
  "por-que-crujen-los-nudillos": "var(--plum)",
  "por-que-duele-el-frio-en-un-diente": "var(--slate)",
  "por-que-duelen-las-agujetas": "var(--clay)",
  "por-que-el-cafe-te-despierta": "var(--teal)",
  "por-que-el-cielo-es-azul": "var(--sage)",
  "por-que-el-mar-es-salado": "var(--ochre)",
  "por-que-el-tiempo-pasa-mas-rapido": "var(--plum)",
  "por-que-la-gente-mayor-huele-distinto": "var(--slate)",
  "por-que-la-miel-nunca-caduca": "var(--clay)",
  "por-que-las-cebras-tienen-rayas": "var(--teal)",
  "por-que-las-hojas-cambian-de-color": "var(--sage)",
  "por-que-lloras-al-cortar-cebolla": "var(--ochre)",
  "por-que-llueve": "var(--slate)",
  "por-que-los-espejos-invierten": "var(--plum)",
  "por-que-los-flamencos-son-rosas": "var(--slate)",
  "por-que-no-puedes-hacerte-cosquillas": "var(--plum)",
  "por-que-no-recuerdas-tus-primeros-anos": "var(--clay)",
  "por-que-nos-sonrojamos": "var(--teal)",
  "por-que-pica-el-picante": "var(--clay)",
  "por-que-resbala-el-hielo": "var(--sage)",
  "por-que-se-corta-la-leche": "var(--sage)",
  "por-que-se-te-duerme-una-pierna": "var(--ochre)",
  "por-que-te-mareas-en-el-coche": "var(--teal)",
  "por-que-tenemos-estaciones": "var(--sage)",
  "por-que-tenemos-hipo": "var(--plum)",
  "por-que-tenemos-piel-de-gallina": "var(--slate)",
  "por-que-tiritamos": "var(--slate)",
  "por-que-tu-voz-grabada-suena-rara": "var(--clay)",
  "por-que-vuelan-los-aviones": "var(--teal)",
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
const rutas = [];
for (const d of readdirSync(TEXTOS).sort()) {
  const p = join(TEXTOS, d);
  if (!statSync(p).isDirectory()) continue;
  for (const f of readdirSync(p).sort()) if (f.endsWith(".md")) rutas.push(join(p, f));
}

/** El título que se pinta: el de la serie si la hay, y si no el suyo. */
function tituloDe(t) {
  return SERIE[t.cabecera.serie] ?? t.titulo;
}

const dentro = [];
const fuera = [];
for (const ruta of rutas) {
  const t = leeTema(ruta);
  if (!existsSync(join(PORTADAS, `${t.id}.avif`))) { fuera.push(t); continue; }
  dentro.push(t);
}

const L = [];
L.push('import type { Short } from "../shorts";');
L.push("/* Las portadas, empotradas: el artefacto que abre Pablo bloquea cualquier");
L.push("   imagen de fuera, así que la que él ve tiene que viajar dentro. Las de");
L.push("   Commons no llevan `import`: se piden por red y `movil.mjs` las empotra. */");
for (const t of dentro) if (!FOTOS[t.id]?.commons) L.push(`import p_${t.id.replace(/-/g, "_")} from "../../portadas/${t.id}.avif";`);
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

console.error(`\n${dentro.length} shorts dentro · ${fuera.length} esperando portada:`);
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
