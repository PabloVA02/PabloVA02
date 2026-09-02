/* ==========================================================================
   EL BUSCADOR DE SHORTS

       node scripts/buscador.mjs > docs/buscador.html

   Pablo, el 2 de septiembre: «ponme un buscador de shorts para buscarlo, solo
   eso, para ver los textos y tal».

   Es una página sola, sin servidor y sin red: los 683 textos van dentro, en un
   JSON, y el buscador filtra en el navegador. Se abre desde el móvil, desde el
   ordenador o desde un fichero suelto, y funciona igual sin cobertura.

   NO ES UN ARTEFACTO NUEVO, y es a propósito. Pablo el 27 de agosto: «queda
   estos dos artefactos solo, los demás no sirven para nada». Así que esto vive
   en GitHub Pages, al lado de la app, y se le manda además el fichero por el
   chat. Los dos artefactos siguen siendo dos.

   QUÉ SE BUSCA. El título de la página, la pregunta de la serie y el texto
   entero. Sin acentos y sin mayúsculas, porque nadie escribe «por qué» con
   tilde en una caja de búsqueda. Una página que tiene la palabra en el título
   sale antes que una que la tiene enterrada en un párrafo.

   LAS MARCAS son las suyas y llevan el color que ya tienen en la app:

     > ⚡  el remate de la sección              clay
     > 💡  el «¿Sabías que…?»                   teal
     > ❞   una cita, con su firma en `> —`      plum
     > 🖼️  un encargo de imagen                 slate

   OJO CON LAS BARRAS. Todo el <script> de abajo viaja dentro de una plantilla
   de JavaScript, así que una barra invertida hay que escribirla DOBLE o se la
   come la plantilla. Pasó el 2 de septiembre con `\\s+`: quedó `/s+/` y el
   buscador borraba todas las eses de los avances —«ubir per ona» por «subir
   personas»—. No dio ningún error, solo texto mutilado, y solo se vio mirando
   una captura.

   El encargo de imagen NO SE PINTA NUNCA en la app —está en CLAUDE.md— pero
   aquí sí sale y marcado como lo que es, porque esto es el cuaderno de
   trabajo: sirve para ver de un vistazo qué páginas siguen esperando foto.
   ========================================================================== */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const RAIZ = "referencia/textos-de-pablo/shorts";
const SERVIR = "portadas/servir";

/* ---- las preguntas, de la misma tabla que usa la app -------------------- */
const fuente = readFileSync("scripts/catalogo.mjs", "utf8");
const bloque = fuente.slice(fuente.indexOf("const SERIE = {"), fuente.indexOf("\n};", fuente.indexOf("const SERIE = {")));
const PREGUNTA = {};
for (const m of bloque.matchAll(/^\s+"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/gm)) PREGUNTA[m[1]] = m[2].replace(/\\"/g, '"');

/* ---- cuándo entró cada serie ------------------------------------------- */
const ORDEN = existsSync("assets/orden-shorts.json")
  ? JSON.parse(readFileSync("assets/orden-shorts.json", "utf8")).orden : {};

/* ---- el texto ----------------------------------------------------------- */
const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
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

const MARCAS = { "⚡": ["rayo", "Remate"], "💡": ["dato", "¿Sabías que…?"], "❞": ["cita", "Cita"], "🖼️": ["encargo", "Encargo de imagen · no se pinta en la app"] };

function cuerpo(md) {
  const salida = [];
  let parrafo = [], lista = [];
  const cierraParrafo = () => { if (parrafo.length) { salida.push(`<p>${linea(parrafo.join(" "))}</p>`); parrafo = []; } };
  const cierraLista = () => { if (lista.length) { salida.push(`<ul>${lista.map((x) => `<li>${linea(x)}</li>`).join("")}</ul>`); lista = []; } };
  const cierra = () => { cierraParrafo(); cierraLista(); };

  for (const l of md.split("\n")) {
    const t = l.trim();
    if (!t) { cierra(); continue; }
    if (t.startsWith("# ")) continue;
    if (t.startsWith("## ")) { cierra(); salida.push(`<h3>${linea(t.slice(3))}</h3>`); continue; }
    if (t.startsWith("- ") || t.startsWith("• ")) { cierraParrafo(); lista.push(t.slice(2)); continue; }
    if (t.startsWith(">")) {
      cierra();
      const dentro = t.replace(/^>\s?/, "");
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
        /* El rótulo va en un ATRIBUTO y lo pinta el CSS, no en un nodo de texto.
           Si va como texto se cuela en el buscador: buscar «cita» encontraba
           todas las citas del corpus, y los avances empezaban por «Remate». */
        salida.push(`<blockquote class="marca marca-${clase}"><span class="marca-que" data-que="${esc(etiqueta)}"></span>${linea(dentro.slice(icono.length).trim())}</blockquote>`);
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
    const bruto = readFileSync(join(dir, f), "utf8");
    const [c, md] = cabecera(bruto);
    const id = (c.portada || "").replace(/\.[a-z0-9]+$/i, "") || f.replace(/\.md$/, "");
    paginas.push({
      f, t: c.titulo || (md.match(/^# (.+)$/m)?.[1] ?? f),
      fr: c.frase_portada || "",
      /* Solo va el HTML. El texto plano para buscar se saca de él al cargar la
         página, quitándole las etiquetas: guardar las dos versiones duplicaba
         el fichero —4,3 MB contra 2,2— y el navegador lo hace en un suspiro. */
      h: cuerpo(md),
      p: existsSync(join(SERVIR, id + ".avif")) ? 1 : 0,
      n: Number(c.orden) || 0,
    });
  }
  if (!paginas.length) continue;
  paginas.sort((a, b) => a.n - b.n || a.f.localeCompare(b.f));
  const [c0] = cabecera(readFileSync(join(dir, paginas[0].f), "utf8"));
  series.push({
    c: nombre,
    q: PREGUNTA[nombre] ?? (nombre === "sueltos" ? "Sueltos, sin serie" : paginas[0].t),
    cat: c0.categoria || "Sin categoría",
    e: ORDEN[nombre]?.entro ?? "",
    ps: paginas,
  });
}

const totalP = series.reduce((a, s) => a + s.ps.length, 0);
const sinFoto = series.reduce((a, s) => a + s.ps.filter((p) => !p.p).length, 0);
const cats = [...new Set(series.map((s) => s.cat))].sort((a, b) => a.localeCompare(b, "es"));
const num = (n) => n.toLocaleString("es-ES");
const hoy = new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

process.stdout.write(`<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Buscador de shorts · Curva</title>
<meta name="theme-color" content="#f2ece1">
<style>
:root{
  --paper:#f2ece1; --paper-deep:#e9e1d3; --paper-edge:#dbcfba;
  --ink:#2e2822; --ink-soft:#6b6154; --ink-faint:#928678;
  --clay:#c2704f; --teal:#4a8279; --plum:#7a6377; --slate:#5f7480; --ochre:#cfa059;
  --marca:#f7f2e8; --realce:#f0d9a8;
  --serif:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,"Times New Roman",serif;
  --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --arriba:env(safe-area-inset-top,0px);
  color-scheme:light;
}
@media (prefers-color-scheme:dark){ :root:not([data-theme="light"]){
  --paper:#1c1916; --paper-deep:#252119; --paper-edge:#3a332b;
  --ink:#ece3d5; --ink-soft:#a99d8d; --ink-faint:#7d7264;
  --clay:#dd8b66; --teal:#6faa9d; --plum:#a98ca4; --slate:#8aa3b0; --ochre:#e0b678;
  --marca:#221e1a; --realce:#5a4a2a;
  color-scheme:dark;
}}
[data-theme="dark"]{
  --paper:#1c1916; --paper-deep:#252119; --paper-edge:#3a332b;
  --ink:#ece3d5; --ink-soft:#a99d8d; --ink-faint:#7d7264;
  --clay:#dd8b66; --teal:#6faa9d; --plum:#a98ca4; --slate:#8aa3b0; --ochre:#e0b678;
  --marca:#221e1a; --realce:#5a4a2a;
  color-scheme:dark;
}

*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);
     font-size:17px;line-height:1.55;-webkit-font-smoothing:antialiased}

/* ---------- la barra de arriba ---------- */
.barra{position:sticky;top:0;z-index:10;background:var(--paper);
       padding:calc(10px + var(--arriba)) 16px 10px;border-bottom:1px solid var(--paper-edge)}
.barra-fila{display:flex;gap:10px;align-items:center;max-width:46rem;margin:0 auto}
.caja{position:relative;flex:1}
.caja svg{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:17px;height:17px;
          fill:none;stroke:var(--ink-faint);stroke-width:2;pointer-events:none}
#q{width:100%;padding:11px 38px 11px 38px;font:inherit;font-size:16px;color:var(--ink);
   background:var(--paper-deep);border:1px solid var(--paper-edge);border-radius:11px;
   appearance:none;outline:none}
#q:focus{border-color:var(--clay);box-shadow:0 0 0 3px color-mix(in srgb,var(--clay) 20%,transparent)}
#q::placeholder{color:var(--ink-faint)}
#q::-webkit-search-cancel-button,#q::-webkit-search-decoration{-webkit-appearance:none;display:none}
#limpia{position:absolute;right:6px;top:50%;transform:translateY(-50%);width:28px;height:28px;
        border:0;background:none;color:var(--ink-faint);font-size:20px;line-height:1;cursor:pointer;
        border-radius:50%}
#limpia:hover{color:var(--ink);background:var(--paper-edge)}
#limpia[hidden]{display:none}
.cuenta{max-width:46rem;margin:8px auto 0;font-size:13px;color:var(--ink-faint);
        letter-spacing:.02em;display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.pipa{color:var(--paper-edge)}
button.filtro{border:1px solid var(--paper-edge);background:none;color:var(--ink-soft);
              font:inherit;font-size:12px;padding:3px 9px;border-radius:999px;cursor:pointer}
button.filtro[aria-pressed="true"]{background:var(--clay);border-color:var(--clay);color:#fff}

/* ---------- el cuerpo ---------- */
main{max-width:46rem;margin:0 auto;padding:18px 16px 80px}

.cat{margin:0 0 26px}
.cat > h2{font-family:var(--sans);font-size:12px;font-weight:700;letter-spacing:.13em;
          text-transform:uppercase;color:var(--ink-faint);margin:0 0 8px;padding:0 2px}
.serie{border-top:1px solid var(--paper-edge)}
.serie summary{display:flex;gap:10px;align-items:baseline;padding:11px 2px;cursor:pointer;
               list-style:none;color:var(--ink)}
.serie summary::-webkit-details-marker{display:none}
.serie summary::after{content:"";margin-left:auto;flex:none;width:7px;height:7px;
  border-right:1.6px solid var(--ink-faint);border-bottom:1.6px solid var(--ink-faint);
  transform:rotate(45deg) translateY(-2px);transition:transform .15s}
.serie[open] summary::after{transform:rotate(225deg) translateY(-2px)}
.serie summary h3{font-family:var(--serif);font-size:18px;font-weight:600;margin:0;line-height:1.3}
.serie-n{font-size:12px;color:var(--ink-faint);flex:none;font-variant-numeric:tabular-nums}
.serie-cuerpo{padding:0 0 14px}

/* ---------- una página ---------- */
.pag{border-top:1px dotted var(--paper-edge);padding:14px 0 2px}
.pag:first-child{border-top:0}
.pag-cab{display:flex;gap:9px;align-items:baseline}
.pag-n{font-size:11px;font-weight:700;color:var(--clay);flex:none;
       font-variant-numeric:tabular-nums;padding-top:3px}
.pag-t{font-family:var(--serif);font-size:19px;font-weight:600;margin:0;line-height:1.28}
.pag-meta{font-size:11px;color:var(--ink-faint);margin:4px 0 0 0;
          display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.ruta{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10.5px;
      color:var(--ink-faint);word-break:break-all}
.sinfoto{color:var(--ochre);font-weight:600}
.texto{font-family:var(--serif);font-size:17.5px;line-height:1.62;margin-top:10px}
.texto h3{font-family:var(--sans);font-size:13px;font-weight:700;letter-spacing:.01em;
          color:var(--ink-soft);margin:20px 0 6px;line-height:1.4}
.texto p{margin:0 0 12px}
.texto ul{margin:0 0 12px;padding-left:20px}
.texto strong{font-weight:700}

.marca{margin:14px 0;padding:11px 14px;border-left:3px solid var(--clay);
       background:var(--marca);border-radius:0 8px 8px 0;font-size:16.5px}
.marca-que{display:block;font-family:var(--sans);font-size:10px;font-weight:700;
           letter-spacing:.12em;text-transform:uppercase;color:var(--clay);margin-bottom:4px}
.marca-que::before{content:attr(data-que)}
.marca-dato{border-left-color:var(--teal)} .marca-dato .marca-que{color:var(--teal)}
.marca-cita{border-left-color:var(--plum);font-style:italic} .marca-cita .marca-que{color:var(--plum);font-style:normal}
.marca-encargo{border-left-color:var(--slate);font-size:14px;color:var(--ink-soft)}
.marca-encargo .marca-que{color:var(--slate)}
.marca cite{display:block;margin-top:6px;font-style:normal;font-size:14px;color:var(--ink-soft)}

mark{background:var(--realce);color:inherit;border-radius:2px;padding:0 1px}

/* ---------- resultados ---------- */
.res{border-top:1px solid var(--paper-edge);padding:13px 2px;cursor:pointer}
.res:hover{background:var(--paper-deep)}
.res-serie{font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--clay);
           font-weight:700;margin-bottom:3px}
.res-t{font-family:var(--serif);font-size:18px;font-weight:600;line-height:1.3;margin:0}
.res-x{font-size:14px;color:var(--ink-soft);margin:5px 0 0;line-height:1.5}
.res.abierta{cursor:default;background:none}
.res.abierta:hover{background:none}

.nada{text-align:center;color:var(--ink-faint);padding:50px 20px;font-family:var(--serif);font-size:18px}
.pie{max-width:46rem;margin:0 auto;padding:26px 16px 40px;font-size:12px;color:var(--ink-faint);
     border-top:1px solid var(--paper-edge);line-height:1.6}
</style>
</head>
<body>

<header class="barra">
  <div class="barra-fila">
    <div class="caja">
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5 21 21"/></svg>
      <input id="q" type="search" autocomplete="off" autocapitalize="off" spellcheck="false"
             placeholder="Busca un short: ascensor, Curie, volcán…">
      <button id="limpia" hidden aria-label="Limpiar">×</button>
    </div>
  </div>
  <div class="cuenta">
    <span id="marcador">${num(series.length)} series · ${num(totalP)} páginas</span>
    <span class="pipa">|</span>
    <button class="filtro" id="fsinfoto" aria-pressed="false">Sin foto (${num(sinFoto)})</button>
  </div>
</header>

<main id="main"></main>
<footer class="pie">
  Todos los textos de los shorts de Curva, tal y como están escritos hoy.
  Generado el ${hoy}. Busca en el título, en la pregunta de la serie y en el texto entero;
  los acentos dan igual.
</footer>

<script id="datos" type="application/json">${JSON.stringify({ series, cats }).replace(/</g, "\\u003c")}</script>
<script>
const D = JSON.parse(document.getElementById("datos").textContent);
const main = document.getElementById("main");
const q = document.getElementById("q");
const limpia = document.getElementById("limpia");
const marcador = document.getElementById("marcador");
const fsinfoto = document.getElementById("fsinfoto");

/* Sin acentos y en minúscula: nadie escribe «por qué» con tilde en un buscador. */
const pela = (s) => s.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").toLowerCase();
const esc = (s) => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

/* Cada página, aplanada una sola vez al cargar. */
const desnuda = (h) => h.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/\\s+/g, " ").trim();
const PAGS = [];
for (const s of D.series) s.ps.forEach((p, i) => {
  p.x = desnuda(p.h);
  PAGS.push({ s, p, i, kt: pela(p.t), kq: pela(s.q), kx: pela(p.x + " " + s.c) });
});

let soloSinFoto = false;

function trozo(texto, aguja) {
  const k = pela(texto);
  const j = k.indexOf(aguja);
  if (j < 0) return esc(texto.slice(0, 160)) + "…";
  let desde = Math.max(0, j - 60);
  /* Hacia atrás hasta el espacio anterior: cortar a mitad de palabra —«…ara los
     sacos» por «para los sacos»— parece un fallo de datos y no lo es. */
  if (desde > 0) { const e = texto.lastIndexOf(" ", desde); desde = e < 0 ? 0 : e + 1; }
  let hasta = j + aguja.length + 110;
  const f = texto.indexOf(" ", hasta); if (f > 0 && f - hasta < 20) hasta = f;
  const corte = texto.slice(desde, hasta);
  const rel = j - desde;
  return (desde ? "…" : "") + esc(corte.slice(0, rel)) + "<mark>" +
         esc(corte.slice(rel, rel + aguja.length)) + "</mark>" + esc(corte.slice(rel + aguja.length)) +
         (hasta < texto.length ? "…" : "");
}

const realza = (t, a) => {
  if (!a) return esc(t);
  const j = pela(t).indexOf(a);
  if (j < 0) return esc(t);
  return esc(t.slice(0, j)) + "<mark>" + esc(t.slice(j, j + a.length)) + "</mark>" + esc(t.slice(j + a.length));
};

const meta = (s, p) => '<p class="pag-meta"><span class="ruta">' + esc(s.c + "/" + p.f) + "</span>" +
  (s.e ? '<span class="pipa">|</span><span>entró el ' + esc(s.e) + "</span>" : "") +
  (p.p ? "" : '<span class="pipa">|</span><span class="sinfoto">sin foto</span>') + "</p>";

/* ---- el índice, cuando la caja está vacía ---- */
function pintaIndice() {
  const trozos = [];
  for (const cat of D.cats) {
    const suyas = D.series.filter((s) => s.cat === cat && (!soloSinFoto || s.ps.some((p) => !p.p)))
                          .sort((a, b) => a.q.localeCompare(b.q, "es"));
    if (!suyas.length) continue;
    trozos.push('<section class="cat"><h2>' + esc(cat) + "</h2>" + suyas.map((s) =>
      '<details class="serie"><summary><h3>' + esc(s.q) + '</h3><span class="serie-n">' +
      s.ps.length + "</span></summary><div class=\\"serie-cuerpo\\">" +
      s.ps.map((p, i) => pintaPagina(s, p, i, "")).join("") + "</div></details>").join("") + "</section>");
  }
  main.innerHTML = trozos.join("") || '<p class="nada">No queda ninguna serie con ese filtro.</p>';
  const vis = D.series.filter((s) => !soloSinFoto || s.ps.some((p) => !p.p));
  marcador.textContent = vis.length + " series · " +
    vis.reduce((a, s) => a + s.ps.filter((p) => !soloSinFoto || !p.p).length, 0) + " páginas";
}

function pintaPagina(s, p, i, aguja) {
  return '<article class="pag"><header class="pag-cab"><span class="pag-n">' + (i + 1) + "/" + s.ps.length +
    '</span><h3 class="pag-t">' + realza(p.t, aguja) + "</h3></header>" + meta(s, p) +
    '<div class="texto">' + p.h + "</div></article>";
}

/* ---- los resultados ---- */
function busca(texto) {
  const a = pela(texto.trim());
  if (!a) { pintaIndice(); return; }
  const halla = PAGS.filter((r) => (!soloSinFoto || !r.p.p) &&
    (r.kt.includes(a) || r.kq.includes(a) || r.kx.includes(a)));
  /* El que la lleva en el título va delante; después la serie; después el texto. */
  halla.sort((x, y) => peso(x, a) - peso(y, a) || x.s.q.localeCompare(y.s.q, "es") || x.i - y.i);
  marcador.textContent = halla.length + (halla.length === 1 ? " página" : " páginas") + " con «" + texto.trim() + "»";
  if (!halla.length) {
    main.innerHTML = '<p class="nada">Nada con «' + esc(texto.trim()) + "».</p>";
    return;
  }
  main.innerHTML = halla.slice(0, 120).map((r) =>
    '<article class="res" data-c="' + esc(r.s.c) + '" data-f="' + esc(r.p.f) + '">' +
    '<p class="res-serie">' + realza(r.s.q, a) + "</p>" +
    '<h3 class="res-t">' + realza(r.p.t, a) + "</h3>" +
    '<p class="res-x">' + trozo(r.p.x.replace(/\\s+/g, " ").trim(), a) + "</p></article>").join("") +
    (halla.length > 120 ? '<p class="nada">…y ' + (halla.length - 120) + " más. Afina la búsqueda.</p>" : "");
}

const peso = (r, a) => r.kt.includes(a) ? 0 : r.kq.includes(a) ? 1 : 2;

/* Al tocar un resultado se abre ahí mismo, sin cambiar de pantalla. */
main.addEventListener("click", (ev) => {
  const res = ev.target.closest(".res");
  if (!res || res.classList.contains("abierta")) return;
  const s = D.series.find((x) => x.c === res.dataset.c);
  const i = s.ps.findIndex((x) => x.f === res.dataset.f);
  res.classList.add("abierta");
  res.innerHTML = '<p class="res-serie">' + esc(s.q) + "</p>" + pintaPagina(s, s.ps[i], i, "");
});

let t;
q.addEventListener("input", () => {
  limpia.hidden = !q.value;
  clearTimeout(t);
  t = setTimeout(() => { busca(q.value); window.scrollTo(0, 0); }, 90);
});
limpia.addEventListener("click", () => { q.value = ""; limpia.hidden = true; busca(""); q.focus(); });
fsinfoto.addEventListener("click", () => {
  soloSinFoto = !soloSinFoto;
  fsinfoto.setAttribute("aria-pressed", String(soloSinFoto));
  busca(q.value);
});
addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== q) { e.preventDefault(); q.focus(); q.select(); }
  if (e.key === "Escape" && document.activeElement === q) { q.value = ""; limpia.hidden = true; busca(""); }
});

pintaIndice();
</script>
</body>
</html>
`);
