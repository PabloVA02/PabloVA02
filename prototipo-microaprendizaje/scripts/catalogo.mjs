/* ==========================================================================
   DE LOS `.md` DE PABLO AL CATÁLOGO DE SHORTS

       node scripts/catalogo.mjs > src/historias/curiosidades.ts

   Lee TODOS los `.md` de `referencia/textos-de-pablo/shorts-28ago/` —que es
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
const TEXTOS = join(AQUI, "referencia", "textos-de-pablo", "shorts-28ago");
const PORTADAS = join(AQUI, "portadas");

/* Lo único que no viene en su cabecera: el color del cartel —que se sigue
   usando en las listas y en el cargando— y el pie de la fotografía cuando no
   lo trae `credito_portada`. El color va por serie para que una serie se
   reconozca de un vistazo en el muro. */
const COLOR = {
  "cuanto-le-queda-al-sol": "var(--ochre)",
  "como-funciona-la-gravedad": "var(--plum)",
  "por-que-llueve": "var(--slate)",
  "por-que-bostezamos": "var(--clay)",
  "por-que-vuelan-los-aviones": "var(--teal)",
  "por-que-tiritamos": "var(--slate)",
  "por-que-pica-el-picante": "var(--clay)",
  "por-que-te-mareas-en-el-coche": "var(--teal)",
  "por-que-tenemos-estaciones": "var(--sage)",
  "como-cicatrizan-las-heridas": "var(--clay)",
  "por-que-se-corta-la-leche": "var(--sage)",
  "por-que-no-puedes-hacerte-cosquillas": "var(--plum)",
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
  "la-gravedad-no-es-una-fuerza": { autor: "Imagen del proyecto.", licencia: "Pendiente de confirmar con Pablo", alt: "Decenas de líneas finas en rojo, magenta y violeta sobre negro, girando en espiral hacia un punto oscuro." },
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
   serie, que es el que él les dio. */
const rutas = [];
for (const d of readdirSync(TEXTOS).sort()) {
  const p = join(TEXTOS, d);
  if (statSync(p).isDirectory()) for (const f of readdirSync(p).sort()) { if (f.endsWith(".md")) rutas.push(join(p, f)); }
  else if (f_es_md(d)) rutas.push(p);
}
function f_es_md(n) { return n.endsWith(".md") && n !== "FORMATO.md"; }

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
L.push("   `referencia/textos-de-pablo/shorts-28ago/` con su cabecera. Para");
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
  L.push(`    titulo: ${JSON.stringify(t.titulo)},`);
  L.push(`    categoria: ${JSON.stringify(c.categoria ?? "Ciencia")},`);
  L.push(`    color: ${JSON.stringify(COLOR[c.serie] ?? "var(--ochre)")},`);
  if (c.serie) L.push(`    /* Serie «${c.serie}», número ${c.orden}. Se entiende suelto. */`);
  L.push(`    encargo: ${JSON.stringify(f.alt ?? t.titulo)},`);
  L.push("    fotos: [");
  L.push("      {");
  L.push(f.commons ? `        archivo: ${JSON.stringify(f.commons)},` : `        local: p_${t.id.replace(/-/g, "_")},`);
  L.push(`        autor:\n          ${cadena(c.credito_portada || f.autor || "Imagen del proyecto.", "          ")},`);
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
