/* ==========================================================================
   Control de calidad de las historias.

       node scripts/validar.mjs

   Con veinte historias, la forma se sostiene sola porque las has escrito de
   una sentada. Con quinientas, no: entran por lotes, las escriben personas
   distintas y en semanas distintas, y lo primero que se desmadra es la
   longitud. Una historia de 700 palabras entre otras de 420 no se nota al
   escribirla, se nota al leer diez seguidas —de repente una se hace larga— y
   para entonces ya hay cincuenta iguales.

   Esto mide lo medible y calla lo demás. No juzga si una historia es buena;
   comprueba que cabe en la forma: cuatro pantallas, dos minutos, un título
   con sujeto delante, un golpe por página como mucho y la ficha de la foto
   completa, que es lo que exige la licencia.

   Sale 1 si hay errores, así que sirve tal cual de gancho en CI.
   ========================================================================== */

import { rolldown } from "rolldown";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

/* --- Los límites. Están aquí arriba para poder discutirlos en un sitio --- */

const LIMITES = {
  titulo: { max: 58 },
  gancho: { min: 40, max: 130 },
  entrada: { min: 40, max: 85 },
  rotulo: { max: 5 },
  pagina: { min: 75, max: 145 },
  historia: { min: 300, max: 480 },
  /** Los cinco acentos del sistema visual. No hay más colores. */
  colores: ["var(--clay)", "var(--ochre)", "var(--sage)", "var(--plum)", "var(--slate)"],
};

/** Lectura media en español, palabras por minuto, para el cálculo de tiempo. */
const PPM = 210;

const palabras = (t) =>
  t
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

/* --- Cargar las historias sin montar la app entera --- */

const carpeta = await mkdtemp(join(tmpdir(), "shorts-"));
const salida = join(carpeta, "shorts.mjs");
const bundle = await rolldown({ input: "src/shorts.ts", logLevel: "silent" });
await bundle.write({ file: salida, format: "esm" });
const { SHORTS } = await import(pathToFileURL(salida).href);
await rm(carpeta, { recursive: true, force: true });

/* --- Revisión --- */

const errores = [];
const avisos = [];
const vistos = new Map();

for (const s of SHORTS) {
  const err = (m) => errores.push(`${s.id}: ${m}`);
  const avi = (m) => avisos.push(`${s.id}: ${m}`);

  if (vistos.has(s.id)) err("el id está repetido");
  vistos.set(s.id, true);
  if (!/^[a-z0-9-]+$/.test(s.id)) err(`el id «${s.id}» debe ir en minúsculas y sin espacios`);

  // El título: sujeto delante y corto. Sin sujeto reconocible, en el pase no
  // hay nada que frene el dedo; largo, se come tres líneas de portada.
  if (s.titulo.length > LIMITES.titulo.max)
    err(`título de ${s.titulo.length} caracteres (máximo ${LIMITES.titulo.max})`);
  if (!/[:,]/.test(s.titulo) && palabras(s.titulo) > 5)
    avi("el título no nombra un sujeto delante («Sujeto: promesa»)");

  const g = s.gancho.length;
  if (g < LIMITES.gancho.min || g > LIMITES.gancho.max)
    err(`gancho de ${g} caracteres (entre ${LIMITES.gancho.min} y ${LIMITES.gancho.max})`);

  const e = palabras(s.entrada);
  if (e < LIMITES.entrada.min || e > LIMITES.entrada.max)
    err(`entrada de ${e} palabras (entre ${LIMITES.entrada.min} y ${LIMITES.entrada.max})`);

  if (s.paginas.length !== 3) err(`tiene ${s.paginas.length} páginas y son siempre 3`);
  if (!LIMITES.colores.includes(s.color)) err(`color «${s.color}» fuera de la paleta`);
  if (!s.categoria) err("sin categoría");

  // La foto es opcional; su ficha, no. Sin autor y licencia no se puede
  // publicar una CC-BY, y sin alt la historia no se puede escuchar.
  if (s.foto) {
    for (const campo of ["archivo", "autor", "licencia", "alt"])
      if (!s.foto[campo]) err(`la foto no trae ${campo}`);
  } else if (!s.encargo) {
    err("sin foto y sin encargo: no hay nada que pintar de portada");
  }

  let golpes = 0;
  s.paginas.forEach((p, i) => {
    const n = i + 1;
    if (palabras(p.rotulo) > LIMITES.rotulo.max)
      avi(`el rótulo de la página ${n} tiene más de ${LIMITES.rotulo.max} palabras`);

    const w = palabras(p.texto);
    if (w < LIMITES.pagina.min || w > LIMITES.pagina.max)
      err(`página ${n}: ${w} palabras (entre ${LIMITES.pagina.min} y ${LIMITES.pagina.max})`);

    if (p.destacado) {
      golpes++;
      if (p.destacado.tipo === "cifra" && !p.destacado.unidad)
        err(`página ${n}: la cifra no lleva unidad`);
      if (p.destacado.tipo === "frase" && palabras(p.destacado.frase) > 16)
        avi(`página ${n}: la frase destacada es demasiado larga para leerse de golpe`);
    }
  });

  if (golpes === 0) avi("ninguna página tiene golpe: cifra o frase, al menos uno");

  const total = palabras(s.entrada) + s.paginas.reduce((n, p) => n + palabras(p.texto), 0);
  if (total < LIMITES.historia.min || total > LIMITES.historia.max)
    err(`${total} palabras en total (entre ${LIMITES.historia.min} y ${LIMITES.historia.max})`);
}

/* --- Duplicados entre historias: con 500 es cuestión de tiempo --- */

const porTitulo = new Map();
for (const s of SHORTS) {
  const clave = s.titulo.toLowerCase();
  if (porTitulo.has(clave)) errores.push(`${s.id}: repite el título de ${porTitulo.get(clave)}`);
  porTitulo.set(clave, s.id);
}

/* --- Resumen --- */

const totales = SHORTS.map(
  (s) => palabras(s.entrada) + s.paginas.reduce((n, p) => n + palabras(p.texto), 0),
);
const media = Math.round(totales.reduce((a, b) => a + b, 0) / totales.length);
const temas = new Map();
for (const s of SHORTS) temas.set(s.categoria, (temas.get(s.categoria) ?? 0) + 1);

console.log(`\n${SHORTS.length} historias · ${media} palabras de media · ${(media / PPM).toFixed(1)} min de lectura`);
console.log([...temas].map(([t, n]) => `  ${t}: ${n}`).join("\n"));
console.log(`  con fotografía: ${SHORTS.filter((s) => s.foto).length}/${SHORTS.length}`);

if (avisos.length) console.log(`\nAvisos (${avisos.length})\n` + avisos.map((a) => `  · ${a}`).join("\n"));
if (errores.length) console.log(`\nErrores (${errores.length})\n` + errores.map((e) => `  ✗ ${e}`).join("\n"));
else console.log("\nSin errores.");

process.exit(errores.length ? 1 : 0);
