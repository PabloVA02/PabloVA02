/* ==========================================================================
   PROBAR MAQUETAS DE SHORT SIN TOCAR LA APP

       node scripts/disenos.mjs <carpeta-de-salida> <pagina-del-mirador.html>

   Saca las cuatro pantallas de la historia que haya delante, una vez por cada
   maqueta de la lista de abajo, y deja los PNG en la carpeta. Con eso se monta
   una hoja de contacto y se comparan de un vistazo.

   POR QUÉ ASÍ Y NO CON MAQUETAS DIBUJADAS APARTE. Las maquetas sueltas mienten:
   se dibujan con el texto que le viene bien al que las dibuja, y luego el short
   de verdad tiene ciento trece palabras y no entra. Aquí se compila el mirador
   —la app— y a cada variante se le pega ENCIMA su hoja de estilos. Lo que se
   ve es la aplicación con un delta de CSS, y ese delta es exactamente lo que
   habría que añadir a `styles.css` si Pablo elige esa maqueta.

   De regalo, el guion mide `--ajuste` en cada pantalla, que es lo que dice si
   el texto ha tenido que encoger para caber. Una maqueta que sale con 0,86 en
   tres de las cuatro no es cuestión de gusto: no le cabe el texto.

   DOS TRAMPAS QUE COSTARON UN RATO, por si hay que añadir maquetas nuevas:

   · La hoja de estilos hay que pegarla al FINAL DEL BODY, no en el <head>. La
     de la app va dentro del <body> —así la escribe `movil.mjs`—, o sea
     después, y con la misma especificidad gana la última.
   · Y los selectores, enteros. La hoja base declara `.muro-hoja,
     .muro-hoja[data-forma="portada"], .muro-hoja[data-forma="pagina"]`, o sea
     dos clases de peso; una regla de una sola clase pierde aunque vaya
     después, y la variante se queda a medias sin avisar.
   ========================================================================== */

/* Seis maneras de repartir foto y texto en un short, todas sobre la app de
   verdad: se compila el mirador y a cada variante se le pega ENCIMA su hoja de
   estilos. Lo que se ve es la app con un delta de CSS —no una maqueta dibujada
   aparte—, y ese delta es lo que habría que añadir a `styles.css` si Pablo
   elige esa. */
import { chromium } from "playwright";

const OUT = process.argv[2];
const URL = "file://" + process.argv[3];

/* Un pie de foto sobre una fotografía CUALQUIERA. El degradado del muro tira
   del color de la página, que es casi negro, y eso vale mientras la foto esté
   debajo del texto. Suelto sobre una imagen clara —los gránulos del Sol son
   oro puro— no se lee. Aquí el degradado es negro propio, no el de la página,
   y así funciona con las cuatro. */
const PIE_SOBRE_FOTO = `
  .muro-credito {
    top: 0; bottom: auto;
    /* 13cqw de relleno arriba y no 4: en un móvil de verdad los primeros
       cuarenta y tantos puntos de pantalla son de la muesca y la hora, y ahí
       el pie no se lee —se comprobó en el simulador, que dibuja la muesca—.
       Por debajo va además la barra de tramos, que es de la historia. */
    padding: 13cqw 5.8cqw 10cqw;
    color: color-mix(in srgb, #f2ece1 76%, transparent);
    background: linear-gradient(to bottom,
      rgba(6,6,8,.86) 0%, rgba(6,6,8,.55) 46%, transparent 100%);
  }`;

/* La foto llena la pantalla y la hoja se apoya abajo.
   La portada pierde el párrafo de entrada: con la imagen a pantalla completa,
   el titular y el gancho son el cartel, y meter sesenta palabras más obliga a
   subir el velo hasta media pantalla y taparla. Es la decisión que va con esta
   maqueta, no un recorte para que quepa. */
/* La foto llena la pantalla y la hoja se apoya abajo.
   La portada pierde el párrafo de entrada: con la imagen a pantalla completa,
   el titular y el gancho son el cartel, y meter sesenta palabras más obliga a
   subir el velo hasta media pantalla y taparla. Es la decisión que va con esta
   maqueta, no un recorte para que quepa.

   Los selectores se escriben ENTEROS y uno a uno. La hoja base los declara
   como `.muro-hoja, .muro-hoja[data-forma="portada"], .muro-hoja[data-forma=
   "pagina"]`, o sea con dos clases de peso, y una regla de una sola clase
   pierde contra eso aunque vaya después: con `.muro-hoja` a secas las páginas
   de dentro se quedaban sin el `position: absolute` y el texto se pintaba
   encima de la fotografía. */
const A_SANGRE = (soloPortada) => {
  const hojas = soloPortada
    ? ['.muro-hoja[data-forma="portada"]']
    : ['.muro-hoja', '.muro-hoja[data-forma="portada"]', '.muro-hoja[data-forma="pagina"]'];
  const fotos = soloPortada
    ? ['.muro-foto[data-portada="true"]']
    : ['.muro-foto', '.muro-foto[data-portada="true"]', '.muro-foto[data-ultima="true"]'];
  return `
  ${fotos.join(", ")} { position: absolute; inset: 0; height: auto; }
  ${hojas.join(", ")} {
    position: absolute; left: 0; right: 0; bottom: 0; top: auto; flex: none;
    padding-top: 26cqw;
    background: linear-gradient(to top,
      var(--paper) 0%,
      color-mix(in srgb, var(--paper) 97%, transparent) 38%,
      color-mix(in srgb, var(--paper) 74%, transparent) 66%,
      transparent 100%);
  }
  ${hojas.map((h) => h + " .muro-hoja-cuerpo").join(", ")} {
    flex: none; overflow: visible;
  }
  .muro-hoja[data-forma="portada"] .muro-entrada { display: none; }
  ${PIE_SOBRE_FOTO}`;
};

const DISENOS = [
  {
    id: "1-banda",
    nombre: "1 · BANDA ARRIBA  ·  lo que hay ahora",
    css: "",
  },
  {
    id: "2-sangre",
    nombre: "2 · A SANGRE  ·  la foto llena la pantalla",
    css: A_SANGRE(false),
  },
  {
    id: "3-mixto",
    nombre: "3 · MIXTO  ·  portada de cartel, páginas de lectura",
    css: A_SANGRE(true),
  },
  {
    id: "4-alterna",
    nombre: "4 · ALTERNA  ·  la foto sube y baja",
    css: `
      .muro-pagina[data-paso="1"] .muro-gesto,
      .muro-pagina[data-paso="3"] .muro-gesto { flex-direction: column-reverse; }
      /* Con la columna del revés, el relleno de arriba de la hoja pasa a estar
         entre el texto y la foto, y el rótulo se queda pegado a la barra de
         tramos. Hay que devolverle el aire por arriba y quitarle el hueco de
         la barra de pestañas, que ahora lo tapa la foto. */
      .muro-pagina[data-paso="1"] .muro-hoja,
      .muro-pagina[data-paso="3"] .muro-hoja { padding: 13cqw 5.8cqw 5cqw; }
      .muro-pagina[data-paso="1"] .muro-foto,
      .muro-pagina[data-paso="3"] .muro-foto { margin-bottom: 64px; }
      .muro-pagina[data-paso="1"] ${PIE_SOBRE_FOTO}
      .muro-pagina[data-paso="3"] ${PIE_SOBRE_FOTO}`,
  },
  {
    id: "5-alreves",
    nombre: "5 · AL REVÉS  ·  el texto arriba, la foto cerrando",
    css: `
      .muro-gesto { flex-direction: column-reverse; }
      .muro-hoja, .muro-hoja[data-forma="portada"], .muro-hoja[data-forma="pagina"] {
        padding: 13cqw 5.8cqw 5cqw;
      }
      .muro-foto { margin-bottom: 64px; }
      ${PIE_SOBRE_FOTO}`,
  },
  {
    id: "6-tarjeta",
    nombre: "6 · TARJETA  ·  la foto con aire alrededor",
    css: `
      .muro-foto, .muro-foto[data-portada="true"], .muro-foto[data-ultima="true"] {
        margin: 6.5cqw 5.8cqw 0;
        border-radius: 4.5cqw;
        overflow: hidden;
      }
      .muro-foto { height: 33%; }
      .muro-foto[data-portada="true"] { height: 39%; }
      .muro-foto[data-ultima="true"] { height: 20%; }
      .muro-credito {
        background: linear-gradient(to top,
          rgba(6,6,8,.92) 0%, rgba(6,6,8,.58) 48%, transparent 100%);
        color: color-mix(in srgb, #f2ece1 76%, transparent);
        padding: 9cqw 4.4cqw 3cqw;
      }
      .muro-hoja, .muro-hoja[data-forma="portada"], .muro-hoja[data-forma="pagina"] {
        padding-top: 4.5cqw;
      }`,
  },
];

const nav = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});

for (const d of DISENOS) {
  const p = await nav.newPage({ viewport: { width: 430, height: 860 }, deviceScaleFactor: 2 });
  await p.goto(URL, { waitUntil: "load" });
  await p.waitForTimeout(2200);
  /* Al FINAL DEL BODY, no en el <head>.
     `addStyleTag` mete la hoja en el <head>, y la hoja de la app va dentro del
     <body> —así la escribe `movil.mjs`—, o sea DESPUÉS. Con la misma
     especificidad gana la última, así que la mitad de las variantes se
     quedaban sin aplicar y salían medio rotas: la portada a sangre enseñaba el
     titular pegado arriba porque el `position: absolute` no llegaba a entrar. */
  if (d.css)
    await p.evaluate((css) => {
      const e = document.createElement("style");
      e.textContent = css;
      document.body.appendChild(e);
    }, d.css);
  const ajustes = [];
  for (let i = 0; i < 4; i++) {
    /* `data-paso` no existe en la app: se pone desde aquí para poder maquetar
       por pantalla sin tocar el código mientras esto sea una prueba. */
    await p.evaluate((n) => {
      document.querySelectorAll(".muro-pagina").forEach((e) => e.setAttribute("data-paso", n));
    }, i);
    await p.waitForTimeout(500);
    ajustes.push(
      await p.evaluate(() => {
        const e = document.querySelector(".muro-hoja-cuerpo");
        return getComputedStyle(e).getPropertyValue("--ajuste").trim() || "1";
      }),
    );
    await p.locator(".shell").first().screenshot({ path: `${OUT}/${d.id}-${i}.png` });
    if (i < 3) {
      await p.keyboard.press("ArrowRight");
      await p.waitForTimeout(800);
    }
  }
  console.log(`${d.id.padEnd(11)} ajuste: ${ajustes.join("  ")}`);
  await p.close();
}
await nav.close();
