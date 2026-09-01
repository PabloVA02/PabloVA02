/* Los 683 shorts en UN SOLO fichero de texto, para leerlo o editarlo fuera.
   Mismo orden que el documento: por categoría, por pregunta, y dentro por el
   orden de lectura. La pregunta sale de la tabla SERIE de catalogo.mjs. */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
const RAIZ = "referencia/textos-de-pablo/shorts";
const f = readFileSync("scripts/catalogo.mjs", "utf8");
const b = f.slice(f.indexOf("const SERIE = {"), f.indexOf("\n};", f.indexOf("const SERIE = {")));
const PREGUNTA = {};
for (const m of b.matchAll(/^\s+"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/gm)) PREGUNTA[m[1]] = m[2].replace(/\\"/g, '"');

const series = [];
for (const n of readdirSync(RAIZ).sort()) {
  const dir = join(RAIZ, n);
  if (!statSync(dir).isDirectory()) continue;
  const paginas = [];
  for (const x of readdirSync(dir).filter((y) => y.endsWith(".md")).sort()) {
    const t = readFileSync(join(dir, x), "utf8");
    const m = t.match(/^---\n([\s\S]*?)\n---\n?/);
    const c = {};
    if (m) for (const l of m[1].split("\n")) { const k = l.match(/^([a-z_]+):\s*"?(.*?)"?\s*$/); if (k) c[k[1]] = k[2]; }
    paginas.push({ ...c, texto: (m ? t.slice(m[0].length) : t).replace(/^#\s.*\n/, "").trim() });
  }
  if (!paginas.length) continue;
  paginas.sort((a, z) => (Number(a.orden) || 0) - (Number(z.orden) || 0));
  series.push({ carpeta: n, pregunta: PREGUNTA[n] ?? (n === "sueltos" ? "Sueltos, sin serie" : paginas[0].titulo), categoria: paginas[0].categoria || "Sin categoría", paginas });
}
const cats = [...new Set(series.map((s) => s.categoria))].sort((a, z) => a.localeCompare(z, "es"));
const total = series.reduce((a, s) => a + s.paginas.length, 0);

const L = [];
L.push("LOS SHORTS DE CURVA");
L.push("===================");
L.push("");
L.push(`${series.length} series · ${total} páginas · ${cats.length} categorías.`);
L.push("Ordenado por categoría y por la pregunta de cada serie. Dentro de cada");
L.push("serie, las páginas van en el orden en que se leen.");
L.push("");
L.push("Las marcas del texto son las de Pablo: > ⚡ el remate de cada sección,");
L.push("> 💡 el «¿Sabías que…?», > ❞ una cita y > 🖼️ un encargo de imagen, que en");
L.push("la app no se pinta nunca.");
L.push("");
for (const cat of cats) {
  const suyas = series.filter((s) => s.categoria === cat).sort((a, z) => a.pregunta.localeCompare(z.pregunta, "es"));
  L.push("", "", `# ${cat.toUpperCase()}`, `${suyas.length} series · ${suyas.reduce((a, s) => a + s.paginas.length, 0)} páginas`);
  for (const s of suyas) {
    L.push("", "", `## ${s.pregunta}`, `${s.paginas.length} ${s.paginas.length === 1 ? "página" : "páginas"} · ${s.carpeta}`);
    s.paginas.forEach((p, i) => {
      L.push("", `### ${i + 1}/${s.paginas.length} · ${p.titulo}`);
      if (p.frase_portada) L.push(`_${p.frase_portada}_`);
      L.push("", p.texto);
    });
  }
}
console.log(L.join("\n"));
