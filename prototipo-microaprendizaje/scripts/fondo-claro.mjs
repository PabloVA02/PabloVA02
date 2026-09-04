/* ==========================================================================
   LA PANTALLA DE LIBROS EN LOS TRES FONDOS, PARA DECIDIR

       node scripts/fondo-claro.mjs      -> scratchpad/fondos.png

   Antes hay que construir y servir:
       npx vite build && python3 -m http.server 4173 --directory dist &

   Pablo, el 4 de septiembre: «¿a ver cómo quedaría con fondo blanco en la
   sección de libros? ¿me lo recomiendas, o mejor en negro como lo tenemos?».

   ES UNA VISTA PREVIA Y SOLO ESO. El claro se pinta metiendo una hoja de
   estilo por encima que mapea los colores del oscuro, no rehaciendo la paleta.
   Sirve para elegir; si se eligiera, habría que hacerlo de verdad en los
   testigos de `:root`.
   ========================================================================== */
import { chromium } from "playwright-core";
import sharp from "sharp";
const S = "/tmp/claude-0/-home-user-PabloVA02/73d17f4d-3a55-5bf2-b66d-69e35076349c/scratchpad";

const claro = (fondo, tinta, suave, sup, tarjeta, borde) => `
  .inicio { background: ${fondo} !important; }
  .inicio, .inicio h1, .inicio h2, .gestiona-titulo, .gestiona-sub,
  .bloque-accion, .gestiona-boton { color: ${tinta} !important; }
  .ficha-autor, .bloque-sub, .filtro, .tend-min { color: ${suave} !important; }
  .filtro, .bloque-accion { background: ${sup} !important; border-color: ${borde} !important; }
  .filtro[data-activo="true"] { background: ${tinta} !important; color: ${fondo} !important; }
  .gestiona { background: ${tarjeta} !important; border-color: ${borde} !important; }
  .gestiona-boton { background: ${sup} !important; }
  .pastilla-curso { background: ${tarjeta} !important; border-color: ${borde} !important; }
  .pastilla-curso, .curso-titulo { color: ${tinta} !important; }
  .curso-ceja, .curso-cuenta { color: ${suave} !important; }
  .cabecera-tira, .inicio-cabecera { border-color: ${borde} !important; }
  .pestanas { background: ${fondo} !important; border-top-color: ${borde} !important;
              box-shadow: 0 -12px 28px rgba(0,0,0,0.08) !important; }
  .pestana { color: ${suave} !important; }
  .pestana[aria-selected="true"], .pestana[data-activa="true"] { color: ${tinta} !important; }
  .pestana-pastilla { background: ${sup} !important; }
`;

const CASOS = [
  { id: "negro", rotulo: "Como está ahora — negro #151515", css: "" },
  { id: "blanco", rotulo: "Blanco puro #ffffff", css: claro("#ffffff", "#17171a", "#6f6f74", "rgba(0,0,0,0.05)", "#f3f3f5", "rgba(0,0,0,0.10)") },
  { id: "crema", rotulo: "El crema de leer #f2ece1", css: claro("#f2ece1", "#2e2822", "#7d7367", "rgba(46,40,34,0.06)", "#e7ddcc", "rgba(46,40,34,0.12)") },
];

const nav = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const p = await nav.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
await p.goto("http://localhost:4173/?p=inicio", { waitUntil: "networkidle" });
await p.waitForTimeout(2600);
await p.addStyleTag({ content: ".regalo-velo,.regalo-aviso,.oferta,.valoracion{display:none!important}" });

const tomas = [];
for (const c of CASOS) {
  await p.evaluate((css) => {
    let e = document.getElementById("prueba-fondo");
    if (!e) { e = document.createElement("style"); e.id = "prueba-fondo"; document.head.append(e); }
    e.textContent = css;
  }, c.css);
  await p.evaluate(() => document.querySelector(".inicio-scroll").scrollTo({ top: 0, behavior: "instant" }));
  await p.waitForTimeout(420);
  tomas.push({ c, buf: await p.screenshot() });
}

const W = 750, H = 1624, PIE = 62;
await sharp({ create: { width: W * tomas.length, height: H + PIE, channels: 3, background: "#0c0c0c" } })
  .composite([
    ...tomas.map((t, i) => ({ input: t.buf, left: i * W, top: PIE })),
    ...tomas.map((t, i) => ({
      input: Buffer.from(`<svg width="${W}" height="${PIE}" xmlns="http://www.w3.org/2000/svg">
        <text x="24" y="42" font-family="Helvetica,Arial" font-size="30" font-weight="700" fill="#f2ece1">${t.c.rotulo}</text></svg>`),
      left: i * W, top: 0,
    })),
  ])
  .png().toFile(`${S}/fondos.png`);
console.log("hecho");
await nav.close();
