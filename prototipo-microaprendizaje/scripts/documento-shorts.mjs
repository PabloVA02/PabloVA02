/* ==========================================================================
   TODOS LOS SHORTS EN UN SOLO DOCUMENTO

       node scripts/documento-shorts.mjs > /tmp/shorts.html

   Pablo, el 1 de septiembre: «todos los textos que tenemos de los shorts
   pásamelos en un documento, absolutamente todos, escritos y eso con sus
   preguntas».

   «Con sus preguntas» es la clave de cómo se ordena: el título de una serie es
   la pregunta —«Por qué llueve»—, y las páginas de dentro son sus respuestas
   en orden. Esa pregunta NO está en los ficheros: vive en la tabla SERIE de
   scripts/catalogo.mjs, que es de donde la saca la app, así que se lee de ahí
   y no se inventa a partir del nombre de la carpeta.

   Del cuerpo se respetan las cuatro marcas que Pablo escribe a mano, y cada
   una lleva el color que ya tiene en la app:

     > ⚡  el remate de la sección      clay
     > 💡  el «¿Sabías que…?»           teal
     > ❞   una cita, con su firma en `> —`   plum
     > 🖼️  un encargo de imagen         slate

   El encargo de imagen NO SE PINTA NUNCA en la app —así está dicho en
   CLAUDE.md— pero aquí sí sale, porque esto es el cuaderno de trabajo y él
   pidió absolutamente todo. Va marcado como lo que es.
   ========================================================================== */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const RAIZ = "referencia/textos-de-pablo/shorts";

/* ---- las preguntas, de la misma tabla que usa la app -------------------- */
const fuente = readFileSync("scripts/catalogo.mjs", "utf8");
const bloque = fuente.slice(fuente.indexOf("const SERIE = {"), fuente.indexOf("\n};", fuente.indexOf("const SERIE = {")));
const PREGUNTA = {};
for (const m of bloque.matchAll(/^\s+"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/gm)) PREGUNTA[m[1]] = m[2].replace(/\\"/g, '"');

/* ---- el texto ----------------------------------------------------------- */
const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
/* Solo lo que Pablo usa de verdad: negrita, cursiva y nada más. No hay
   enlaces ni tablas ni código en ninguno de los 686 ficheros. */
const linea = (t) => esc(t)
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");

function cabecera(texto) {
  const m = texto.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return [{}, texto];
  const campos = {};
  for (const l of m[1].split("\n")) {
    const c = l.match(/^([a-z_]+):\s*"?(.*?)"?\s*$/);
    if (c) campos[c[1]] = c[2];
  }
  return [campos, texto.slice(m[0].length)];
}

const MARCAS = { "⚡": ["rayo", "Remate"], "💡": ["dato", "¿Sabías que…?"], "❞": ["cita", "Cita"], "🖼️": ["encargo", "Encargo de imagen · no se pinta"] };

function cuerpo(md) {
  const salida = [];
  let parrafo = [], lista = [];
  const cierraParrafo = () => { if (parrafo.length) { salida.push(`<p>${linea(parrafo.join(" "))}</p>`); parrafo = []; } };
  const cierraLista = () => { if (lista.length) { salida.push(`<ul>${lista.map((x) => `<li>${linea(x)}</li>`).join("")}</ul>`); lista = []; } };
  const cierra = () => { cierraParrafo(); cierraLista(); };

  for (const l of md.split("\n")) {
    const t = l.trim();
    if (!t) { cierra(); continue; }
    if (t.startsWith("# ")) continue;                       /* el H1 ya es el título */
    if (t.startsWith("## ")) { cierra(); salida.push(`<h4>${linea(t.slice(3))}</h4>`); continue; }
    if (t.startsWith("- ")) { cierraParrafo(); lista.push(t.slice(2)); continue; }
    if (t.startsWith(">")) {
      cierra();
      const dentro = t.replace(/^>\s?/, "");
      /* La firma de una cita va en su propia línea y se pega a la anterior. */
      if (dentro.startsWith("—")) {
        const ult = salida.length - 1;
        if (ult >= 0 && salida[ult].includes("marca-cita")) {
          salida[ult] = salida[ult].replace("</blockquote>", `<cite>${linea(dentro)}</cite></blockquote>`);
          continue;
        }
      }
      const icono = Object.keys(MARCAS).find((k) => dentro.startsWith(k));
      if (icono) {
        const [clase, etiqueta] = MARCAS[icono];
        salida.push(`<blockquote class="marca marca-${clase}"><span class="marca-que">${icono} ${esc(etiqueta)}</span>${
          linea(dentro.slice(icono.length).trim()).replace(/^<strong>IMAGEN[^<]*<\/strong>\s*/, (s) => s)}</blockquote>`);
      } else salida.push(`<blockquote class="marca">${linea(dentro)}</blockquote>`);
      continue;
    }
    cierraLista();
    parrafo.push(t);
  }
  cierra();
  return salida.join("\n");
}

/* ---- se recoge todo ----------------------------------------------------- */
const series = [];
for (const nombre of readdirSync(RAIZ).sort()) {
  const dir = join(RAIZ, nombre);
  if (!statSync(dir).isDirectory()) continue;
  const paginas = [];
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".md")).sort()) {
    const [c, md] = cabecera(readFileSync(join(dir, f), "utf8"));
    paginas.push({ ...c, archivo: f, html: cuerpo(md), palabras: md.split(/\s+/).filter(Boolean).length });
  }
  if (!paginas.length) continue;
  paginas.sort((a, b) => (Number(a.orden) || 0) - (Number(b.orden) || 0));
  series.push({
    carpeta: nombre,
    /* «Sueltos» no es una serie: es la carpeta donde cae un short sin serie. */
    pregunta: PREGUNTA[nombre] ?? (nombre === "sueltos" ? "Sueltos, sin serie" : paginas[0].titulo),
    categoria: paginas[0].categoria || "Sin categoría",
    paginas,
    palabras: paginas.reduce((a, p) => a + p.palabras, 0),
  });
}

const categorias = [...new Set(series.map((s) => s.categoria))].sort((a, b) => a.localeCompare(b, "es"));
const totalPaginas = series.reduce((a, s) => a + s.paginas.length, 0);
const totalPalabras = series.reduce((a, s) => a + s.palabras, 0);
const num = (n) => n.toLocaleString("es-ES");

const bloques = categorias.map((cat) => {
  const suyas = series.filter((s) => s.categoria === cat).sort((a, b) => a.pregunta.localeCompare(b.pregunta, "es"));
  return `<section class="cat" id="cat-${cat.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-zA-Z]+/g, "-").toLowerCase()}">
  <h2 class="cat-nombre">${esc(cat)}<span class="cat-cuenta">${suyas.length} ${suyas.length === 1 ? "serie" : "series"} · ${num(suyas.reduce((a, s) => a + s.paginas.length, 0))} páginas</span></h2>
  ${suyas.map((s) => `<details class="serie" data-busca="${esc((s.pregunta + " " + s.paginas.map((p) => p.titulo + " " + p.html.replace(/<[^>]+>/g, " ")).join(" ")).toLowerCase().slice(0, 6000))}">
    <summary><h3>${esc(s.pregunta)}</h3><span class="serie-cuenta">${s.paginas.length} ${s.paginas.length === 1 ? "página" : "páginas"} · ${num(s.palabras)} palabras</span></summary>
    <div class="serie-cuerpo">
      ${s.paginas.map((p, i) => `<article class="pagina">
        <header class="pagina-cab"><span class="pagina-n">${i + 1}<span class="pagina-de">/${s.paginas.length}</span></span>
        <h4 class="pagina-titulo">${esc(p.titulo)}</h4></header>
        ${p.frase_portada ? `<p class="frase">${esc(p.frase_portada)}</p>` : ""}
        <div class="pagina-texto">${p.html}</div>
      </article>`).join("\n")}
    </div>
  </details>`).join("\n")}
</section>`;
}).join("\n");

console.log(`<title>Los shorts de Curva</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,600;7..72,700&display=swap">
<style>
:root{
  --paper:#f2ece1; --paper-deep:#e7ddcc; --hoja:#faf6ee;
  --tinta:#2a2018; --tinta-suave:#6d6053; --linea:#d9cdb8;
  --clay:#a8563a; --teal:#3a6a61; --plum:#6a5468; --slate:#4f636e; --ochre:#a87c34;
  --lectura:"Literata",Georgia,"Times New Roman",serif;
  --sans:"Avenir Next",Avenir,"Segoe UI",system-ui,-apple-system,sans-serif;
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
  --paper:#1b1720; --paper-deep:#241f2b; --hoja:#221d2a;
  --tinta:#efe6da; --tinta-suave:#a596a8; --linea:#3b3345;
  --clay:#d98a68; --teal:#74b0a5; --plum:#c0a3bc; --slate:#85a0ae; --ochre:#dcb372;
}}
:root[data-theme="dark"]{
  --paper:#1b1720; --paper-deep:#241f2b; --hoja:#221d2a;
  --tinta:#efe6da; --tinta-suave:#a596a8; --linea:#3b3345;
  --clay:#d98a68; --teal:#74b0a5; --plum:#c0a3bc; --slate:#85a0ae; --ochre:#dcb372;
}
*{box-sizing:border-box}
body{background:var(--paper);color:var(--tinta);font-family:var(--lectura);line-height:1.6;margin:0}
.envoltura{max-width:46rem;margin:0 auto;padding:0 1.15rem 5rem}

/* ---- la cabecera: lo que es y cuánto hay ---- */
.portada{padding:3rem 0 1.75rem;border-bottom:2px solid var(--tinta)}
.portada h1{font-size:clamp(2rem,7vw,3rem);line-height:1.08;margin:0 0 .5rem;font-weight:700;letter-spacing:-.02em;text-wrap:balance}
.portada p{margin:0;color:var(--tinta-suave);max-width:34rem}
.cifras{display:flex;flex-wrap:wrap;gap:0 2rem;margin:1.5rem 0 0;padding:0;list-style:none;font-family:var(--sans)}
.cifras div{display:flex;flex-direction:column}
.cifras b{font-size:1.5rem;font-weight:600;font-variant-numeric:tabular-nums;line-height:1.2}
.cifras span{font-size:.7rem;text-transform:uppercase;letter-spacing:.09em;color:var(--tinta-suave)}

/* ---- la barra de buscar, pegada arriba ---- */
.barra{position:sticky;top:0;z-index:5;background:var(--paper);border-bottom:1px solid var(--linea);
  padding:.6rem 0;display:flex;gap:.6rem;align-items:center;font-family:var(--sans)}
.barra input{flex:1;min-width:0;font:inherit;font-size:.95rem;padding:.5rem .75rem;color:var(--tinta);
  background:var(--hoja);border:1px solid var(--linea);border-radius:.35rem}
.barra input::placeholder{color:var(--tinta-suave)}
.barra input:focus-visible{outline:2px solid var(--clay);outline-offset:1px}
.barra button{font:inherit;font-size:.8rem;padding:.5rem .7rem;color:var(--tinta-suave);cursor:pointer;
  background:none;border:1px solid var(--linea);border-radius:.35rem;white-space:nowrap}
.barra button:hover{color:var(--tinta);border-color:var(--tinta-suave)}
.barra button:focus-visible{outline:2px solid var(--clay);outline-offset:1px}
#cuenta{font-size:.78rem;color:var(--tinta-suave);font-variant-numeric:tabular-nums;white-space:nowrap}

/* ---- las categorías y las series ---- */
.cat{margin:2.75rem 0 0;content-visibility:auto;contain-intrinsic-size:auto 900px}
.cat-nombre{font-family:var(--sans);font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;
  color:var(--clay);margin:0 0 .9rem;display:flex;flex-wrap:wrap;gap:.6rem;align-items:baseline}
.cat-cuenta{color:var(--tinta-suave);font-weight:400;letter-spacing:.04em;text-transform:none;font-size:.78rem}
.serie{border-top:1px solid var(--linea)}
.serie:last-child{border-bottom:1px solid var(--linea)}
.serie>summary{cursor:pointer;padding:.85rem 0;display:flex;flex-wrap:wrap;gap:.15rem 1rem;align-items:baseline;list-style:none}
.serie>summary::-webkit-details-marker{display:none}
.serie>summary::before{content:"+";font-family:var(--sans);color:var(--tinta-suave);width:1rem;flex:none}
.serie[open]>summary::before{content:"–"}
.serie>summary:focus-visible{outline:2px solid var(--clay);outline-offset:2px}
.serie h3{font-size:1.12rem;font-weight:600;margin:0;flex:1 1 14rem;line-height:1.3;text-wrap:balance}
.serie-cuenta{font-family:var(--sans);font-size:.75rem;color:var(--tinta-suave);font-variant-numeric:tabular-nums}
.serie-cuerpo{padding:.25rem 0 1.5rem 1rem;display:flex;flex-direction:column;gap:2.25rem}

/* ---- una página ---- */
.pagina-cab{display:flex;gap:.7rem;align-items:baseline;margin:0 0 .35rem}
.pagina-n{font-family:var(--sans);font-size:.95rem;font-weight:600;color:var(--clay);font-variant-numeric:tabular-nums;flex:none}
.pagina-de{color:var(--tinta-suave);font-weight:400;font-size:.8rem}
.pagina-titulo{font-size:1.22rem;line-height:1.28;margin:0;font-weight:700;text-wrap:balance}
.frase{font-family:var(--sans);font-size:.76rem;text-transform:uppercase;letter-spacing:.09em;
  color:var(--tinta-suave);margin:0 0 .9rem 1.65rem}
.pagina-texto{margin-left:1.65rem}
.pagina-texto h4{font-size:1rem;font-weight:700;margin:1.6rem 0 .55rem;line-height:1.35;text-wrap:balance}
.pagina-texto p{margin:0 0 .9rem}
.pagina-texto ul{margin:0 0 .9rem;padding-left:1.15rem}
.pagina-texto li{margin:0 0 .35rem}

/* ---- las cuatro marcas de Pablo, con su color de la app ---- */
.marca{margin:1.1rem 0;padding:.15rem 0 .15rem .9rem;border-left:3px solid var(--tinta-suave);color:var(--tinta)}
.marca-que{display:block;font-family:var(--sans);font-size:.66rem;text-transform:uppercase;letter-spacing:.1em;
  color:var(--tinta-suave);margin-bottom:.25rem}
.marca-rayo{border-left-color:var(--clay)}
.marca-rayo .marca-que{color:var(--clay)}
.marca-dato{border-left-color:var(--teal)}
.marca-dato .marca-que{color:var(--teal)}
.marca-cita{border-left-color:var(--plum);font-style:italic}
.marca-cita .marca-que{color:var(--plum);font-style:normal}
.marca-cita cite{display:block;font-style:normal;font-family:var(--sans);font-size:.8rem;
  color:var(--tinta-suave);margin-top:.4rem}
.marca-encargo{border-left-style:dashed;border-left-color:var(--slate);color:var(--tinta-suave);font-size:.9rem}
.marca-encargo .marca-que{color:var(--slate)}

.vacio{padding:3rem 0;color:var(--tinta-suave);font-family:var(--sans);text-align:center}
.pie{margin:4rem 0 0;padding-top:1.25rem;border-top:1px solid var(--linea);
  font-family:var(--sans);font-size:.78rem;color:var(--tinta-suave)}
[hidden]{display:none!important}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style>

<div class="envoltura">
<header class="portada">
  <h1>Los shorts de Curva</h1>
  <p>Todo lo escrito hasta el 1 de septiembre de 2026, ordenado por su pregunta. Dentro de cada serie las páginas van en el orden en que se leen.</p>
  <div class="cifras">
    <div><b>${num(series.length)}</b><span>series</span></div>
    <div><b>${num(totalPaginas)}</b><span>páginas</span></div>
    <div><b>${num(totalPalabras)}</b><span>palabras</span></div>
    <div><b>${num(categorias.length)}</b><span>categorías</span></div>
  </div>
</header>

<div class="barra">
  <input id="q" type="search" placeholder="Buscar en las ${num(totalPaginas)} páginas…" aria-label="Buscar">
  <button id="todo" type="button">Abrir todo</button>
  <span id="cuenta">${num(series.length)} series</span>
</div>

<main id="lista">
${bloques}
<p class="vacio" id="nada" hidden>Nada con esa palabra.</p>
</main>

<footer class="pie">
  Curva · ${num(totalPaginas)} páginas en ${num(series.length)} series.
  Las marcas del texto son las de Pablo: <b style="color:var(--clay)">⚡</b> el remate de cada sección,
  <b style="color:var(--teal)">💡</b> el «¿Sabías que…?», <b style="color:var(--plum)">❞</b> una cita
  y <b style="color:var(--slate)">🖼️</b> un encargo de imagen, que en la app no se pinta.
</footer>
</div>

<script>
const q = document.getElementById("q");
const cuenta = document.getElementById("cuenta");
const nada = document.getElementById("nada");
const series = [...document.querySelectorAll(".serie")];
const cats = [...document.querySelectorAll(".cat")];
const total = series.length;
let abierto = false;

/* Se busca sobre el texto ya en minúsculas que lleva cada serie en un atributo:
   recorrer el DOM de 686 páginas en cada tecla se nota en un móvil. */
function filtra() {
  const t = q.value.trim().toLowerCase();
  let vistas = 0;
  for (const s of series) {
    const vale = !t || s.dataset.busca.includes(t);
    s.hidden = !vale;
    if (vale) vistas++;
    /* Al buscar se abre lo que encaja; al borrar vuelve a como estaba. */
    if (t) s.open = vale; else s.open = abierto;
  }
  for (const c of cats) c.hidden = ![...c.querySelectorAll(".serie")].some((s) => !s.hidden);
  nada.hidden = vistas > 0;
  cuenta.textContent = t ? vistas + (vistas === 1 ? " serie" : " series") : total + " series";
}
q.addEventListener("input", filtra);

document.getElementById("todo").addEventListener("click", (e) => {
  abierto = !abierto;
  for (const s of series) if (!s.hidden) s.open = abierto;
  e.target.textContent = abierto ? "Cerrar todo" : "Abrir todo";
});
</script>`);
