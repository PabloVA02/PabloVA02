/**
 * Qué libros le faltan por dibujar a Pablo, por orden de importancia.
 *
 *   node scripts/faltan-cubiertas.mjs           los tres grupos
 *   node scripts/faltan-cubiertas.mjs --csv     para pegar en una lista
 *
 * El orden no es caprichoso, es el de lo que se ve:
 *
 *   1. Los ESCRITOS A MANO. Son los resúmenes buenos, los que aguantan que
 *      alguien entre a leerlos, y por eso son los que más se van a abrir.
 *   2. Los de TENDENCIAS. Van los veinte juntos y con la cubierta grande en
 *      la primera pantalla de explorar: ahí una cubierta floja se ve enseguida.
 *   3. Los CONOCIDOS del resto del catálogo, por categoría.
 *
 * Un libro sin cubierta dibujada no se queda en blanco: cae en su portada
 * tipográfica —el título gritado sobre color plano— o en un cuadro de
 * Commons. Se ve bien; simplemente no se ve tan bien.
 */
import { readFileSync } from "node:fs";

const lee = (f) => readFileSync(new URL(`../src/libros/${f}`, import.meta.url), "utf8");

const FICHAS = new Map(
  [...lee("catalogo.ts").matchAll(
    /\{ id: "([\w-]+)", titulo: "([^"]+)", autor: "([^"]+)", ano: (-?\d+), categoria: "([^"]+)"/g,
  )].map((m) => [m[1], { id: m[1], titulo: m[2], autor: m[3], ano: Number(m[4]), categoria: m[5] }]),
);

const DIBUJADAS = new Set([...lee("cubiertas.ts").matchAll(/^ {2}"([\w-]+)": \{$/gm)].map((m) => m[1]));

const pag = lee("paginas.ts");
const A_MANO = [...pag.slice(pag.indexOf("export const PAGINAS: Record"))
  .matchAll(/^ {2}"?([\w-]+)"?: [A-Z_0-9]+,$/gm)].map((m) => m[1]);

const TENDENCIAS = [...lee("tendencias.ts").matchAll(/\{ id: "([\w-]+)", promesa:/g)].map((m) => m[1]);

/* Los que la gente reconoce de oído. Escritos a mano porque «conocido» no es
   un dato que esté en ninguna parte del repositorio. */
const CONOCIDOS = [
  "1984", "principito", "quijote", "cien-anos", "sombra-viento", "hobbit",
  "orgullo-prejuicio", "matar-ruisenor", "gran-gatsby", "rebelion-granja",
  "alquimista", "crimen-castigo", "moby-dick", "montecristo", "fahrenheit",
  "metamorfosis", "cosmos", "breve-historia-tiempo", "origen-especies",
  "gen-egoista", "casi-todo", "siete-lecciones-fisica", "einstein",
  "meditaciones", "principe", "zaratustra", "sisifo", "arte-guerra",
  "mundo-sofia", "por-que-dormimos", "outlive", "zonas-azules", "cuerpo-cuenta",
  "ser-mortal", "influencia", "semana-4-horas", "cero-a-uno", "steve-jobs",
  "cisne-negro", "factfulness", "inversor-inteligente", "postguerra",
  "canones-agosto", "si-esto-hombre", "malala", "mandela", "historia-arte",
  "leonardo", "modos-ver",
];

const csv = process.argv.includes("--csv");
const puestos = new Set();

function grupo(titulo, ids) {
  const filas = ids
    .filter((id) => FICHAS.has(id) && !DIBUJADAS.has(id) && !puestos.has(id))
    .map((id) => (puestos.add(id), FICHAS.get(id)));
  if (!filas.length) return 0;
  if (!csv) console.log(`\n${titulo} — ${filas.length}\n`);
  for (const f of filas) {
    const ano = f.ano < 0 ? `${-f.ano} a.C.` : f.ano;
    if (csv) console.log(`${f.titulo};${f.autor};${ano};${f.id}.png`);
    else console.log(`  ${f.titulo}\n    ${f.autor} · ${ano} · ${f.categoria} · ${f.id}.png`);
  }
  return filas.length;
}

let total = 0;
total += grupo("1. ESCRITOS A MANO — los resúmenes buenos", A_MANO);
total += grupo("2. TENDENCIAS — se ven grandes en Explorar", TENDENCIAS);
total += grupo("3. CONOCIDOS — el resto del catálogo", CONOCIDOS);

if (!csv) {
  console.log(`\n${DIBUJADAS.size} dibujadas · ${total} en esta lista · ${FICHAS.size} en el catálogo`);
  console.log("\nEn PNG, 1024 × 1536 (2:3 exacto), y el fichero con el nombre de arriba.");
}
