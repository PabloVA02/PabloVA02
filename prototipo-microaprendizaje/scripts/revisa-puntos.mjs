/**
 * Marca los «Aprenderás» que fallan la prueba del contexto.
 *
 *   node scripts/revisa-puntos.mjs            todos
 *   node scripts/revisa-puntos.mjs sapiens    uno
 *
 * POR QUÉ EXISTE
 *
 * Pablo devolvió los 223 el 22 de agosto con un ejemplo que lo resume:
 * «qué pasó la mañana del 4 de agosto», en el Diario de Ana Frank. «Eso no
 * es aprender algo». Y no lo es: es una pregunta de examen que solo entiende
 * quien ya ha leído el libro.
 *
 * La regla entera está en la cabecera de `libros/puntos.ts`. Aquí solo va lo
 * que una máquina puede detectar sin equivocarse, que es bastante:
 *
 *   · fechas y años, que son el caso puro del episodio sin contexto
 *   · «qué pasó», «qué le pasó», «cómo acabó», «qué dijo»: la pregunta de
 *     examen, que promete un dato y no un conocimiento
 *   · más de catorce palabras, o empezar en mayúscula
 *   · las fórmulas de venta y las consignas
 *
 * Lo que NO puede detectar —si un nombre propio se entiende sin haber leído
 * el libro— se mira a ojo, con la prueba de la cabecera: léelo sin saber
 * nada del libro y pregúntate si se entiende y si vale la pena saberlo.
 */
import { readFileSync } from "node:fs";

const TOPE = 14;

/* Los meses van con la fecha, así que una línea con mes y número es un
   episodio contado por su día. «de mayo de 1989» es el caso exacto. */
const MESES =
  "enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre";

const AVISOS = [
  [/\b(1[0-9]{3}|20[0-2][0-9])\b/, "lleva un año: cuenta un episodio, no lo que enseña"],
  [new RegExp(`\\b(${MESES})\\b`, "i"), "lleva un mes: es una fecha, no un conocimiento"],
  /* Solo el PASADO. «qué le pasa a un rumiante que come grano» describe un
     mecanismo y vale; «qué pasó en Anfield» cuenta un episodio y no. */
  [/^(qué|que) (le )?pasó\b/i, "«qué pasó» cuenta un episodio; di qué se aprende de él"],
  [/^cómo acab(ó|a)\b/i, "«cómo acabó» cuenta el desenlace; di qué enseña ese desenlace"],
  [/^(qué|quién) (dijo|declaró|contestó|respondió)\b/i, "promete una anécdota, no un conocimiento"],
  [/^qué hizo\b/i, "promete el argumento; di qué se aprende de lo que hizo"],
  /* «descubre» en imperativo es venta; «qué se descubre al…» no lo es. */
  [/^(descubre|domina|inspírate|aprovecha|conoce|saca provecho)\b/i, "empieza con un imperativo de folleto"],
  [/\b(el secreto de|imprescindible|las claves del|los fundamentos de)\b/i, "suena a venta"],
  [/^[A-ZÁÉÍÓÚÑ]/, "empieza en mayúscula, y van en minúscula"],
];

const src = readFileSync(new URL("../src/libros/puntos.ts", import.meta.url), "utf8");
const cuerpo = src.slice(src.indexOf("export const PUNTOS"));

/* El fichero es TypeScript y son datos puros: se recorta cada entrada con una
   expresión regular en vez de montar un compilador. */
const libros = [...cuerpo.matchAll(/^ {2}"?([\w-]+)"?: \[([\s\S]*?)^ {2}\],$/gm)].map((m) => [
  m[1],
  [...m[2].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((p) => p[1].replace(/\\"/g, '"')),
]);

const pedidos = process.argv.slice(2).filter((a) => !a.startsWith("--"));
let malos = 0;
let mirados = 0;

for (const [id, puntos] of libros) {
  if (pedidos.length && !pedidos.includes(id)) continue;
  mirados++;
  const fallos = [];
  for (const p of puntos) {
    const n = p.trim().split(/\s+/).length;
    if (n > TOPE) fallos.push([p, `tiene ${n} palabras y el tope son ${TOPE}`]);
    for (const [patron, motivo] of AVISOS) if (patron.test(p)) fallos.push([p, motivo]);
  }
  if (puntos.length !== 5) fallos.push([`(${puntos.length} puntos)`, "tienen que ser cinco"]);
  if (!fallos.length) continue;
  malos++;
  console.log(`\n${id}`);
  for (const [p, motivo] of fallos) console.log(`   «${p}»\n      ${motivo}`);
}

console.log(
  `\n${mirados} libros mirados · ${malos} con algo que revisar · ` +
    `${mirados - malos} limpios`,
);
