/* ==========================================================================
   SEIS MANERAS DE MONTAR LA PORTADA DE UN SHORT

       node scripts/portadas.mjs <carpeta-de-salida> <mirador.html>

   Misma técnica que `scripts/disenos.mjs`: se compila el mirador y a cada
   variante se le pega ENCIMA su hoja de estilos, así que lo que se ve es la
   app de verdad con un delta de CSS. Aquí solo se fotografía la PORTADA.

   Pablo, el 27 por la noche: «ponme de diferentes formas la portada con esa
   imagen, para ver cómo queda; me gustaría que en algunos de los diseños se
   vea la imagen completa». De las seis, cuatro la enseñan entera.

   LA TRAMPA DE ENSEÑAR UNA FOTO ENTERA. `object-fit: contain` la mete dentro
   del marco sin recortarla, y a cambio deja franjas vacías: una imagen
   cuadrada en una pantalla de móvil ocupa la mitad de alto. Así que cada
   variante tiene que decidir QUÉ PONE en lo que sobra —fondo de la página, la
   propia foto ampliada y desenfocada, o el texto— y ahí es donde se
   diferencian de verdad. La hoja de estilos se pega al final del <body>,
   nunca en el <head>: la de la app va en el body y con la misma
   especificidad gana la última.
   ========================================================================== */
import { chromium } from "playwright";

const OUT = process.argv[2];
const URL = "file://" + process.argv[3];

/* La foto entera, sin recortar. El velo del cartel deja de tener sentido
   —debajo de la foto ya no hay foto, hay página— así que se apaga. */
const COMPLETA = `
  .muro-foto[data-portada="true"] .foto-img { object-fit: contain; }
  .muro-hoja[data-forma="portada"] { background: none; }
  .muro-foto[data-portada="true"] .muro-credito { background: none; }
  /* Y el fondo de carga, transparente. Es el gris que la caja de la foto pinta
     mientras la imagen viaja —para que nunca se vea blanco—, y con la foto
     recortada nunca asoma porque la tapa entera. Con la foto ENTERA sí asoma:
     sale una banda gris clara en lo que deja libre, que es lo primero que se
     ve en tres de estas seis maquetas. Transparente, ese hueco lo llena lo que
     haya detrás: el fondo de la página, o el halo desenfocado. */
  .muro-foto[data-portada="true"] .foto-fondo { background: transparent; }`;

const DISENOS = [
  {
    id: "1-sangre",
    nombre: "1 · A SANGRE — la de ahora. La foto llena la pantalla y se recorta por los lados",
    css: "",
  },
  {
    id: "2-arriba",
    nombre: "2 · ENTERA ARRIBA — la foto completa pegada al techo, el texto debajo",
    css: `${COMPLETA}
      .muro-foto[data-portada="true"] { inset: 0 0 auto; height: 62%; }
      .muro-foto[data-portada="true"] .foto-img { object-position: 50% 0; }
      .muro-hoja[data-forma="portada"] { padding-top: 6cqw; }
      .muro-foto[data-portada="true"] .muro-credito {
        top: auto; bottom: 0; padding: 8cqw 5.8cqw 0;
        color: color-mix(in srgb, var(--ink) 46%, transparent);
        text-shadow: none;
      }`,
  },
  {
    id: "3-halo",
    nombre: "3 · ENTERA CON HALO — la foto completa, y detrás ella misma ampliada y desenfocada",
    css: `${COMPLETA}
      /* El hueco que deja la foto entera lo llena la propia foto, reventada de
         tamaño y desenfocada hasta que no se lee: aporta color, no dibujo, y
         ese color sale de la imagen, así que nunca desentona. */
      .muro-foto[data-portada="true"]::before {
        content: "";
        position: absolute; inset: -12%;
        background: var(--halo) center / cover no-repeat;
        filter: blur(42px) saturate(0.7) brightness(0.42);
        z-index: 0;
      }
      .muro-foto[data-portada="true"] .foto-caja { z-index: 1; }
      .muro-hoja[data-forma="portada"] {
        background: linear-gradient(to top,
          var(--paper) 0%,
          color-mix(in srgb, var(--paper) 88%, transparent) 46%,
          transparent 100%);
      }`,
  },
  {
    id: "4-tarjeta",
    nombre: "4 · TARJETA — la foto entera enmarcada, con aire alrededor",
    css: `${COMPLETA}
      .muro-foto[data-portada="true"] {
        inset: auto 0 auto 0; top: 13cqw; height: 56%;
        margin: 0 5.8cqw; border-radius: 4.5cqw; overflow: hidden;
      }
      .muro-foto[data-portada="true"] .foto-fondo { background: #0b0b0e; }
      .muro-hoja[data-forma="portada"] { padding-top: 6cqw; }
      .muro-foto[data-portada="true"] .muro-credito {
        top: auto; bottom: 0; padding: 9cqw 4.4cqw 3cqw;
        background: linear-gradient(to top, rgba(6,6,8,.85), transparent);
      }`,
  },
  {
    id: "5-montado",
    nombre: "5 · ENTERA CON EL TÍTULO MONTADO — el titular se apoya sobre el filo de la foto",
    css: `${COMPLETA}
      .muro-foto[data-portada="true"] { inset: 0 0 auto; height: 68%; }
      .muro-foto[data-portada="true"] .foto-img { object-position: 50% 12%; }
      .muro-hoja[data-forma="portada"] {
        padding-top: 0;
        background: linear-gradient(to top,
          var(--paper) 0%, var(--paper) 62%,
          color-mix(in srgb, var(--paper) 82%, transparent) 82%,
          transparent 100%);
      }
      .muro-foto[data-portada="true"] .muro-credito {
        top: 0; bottom: auto; padding: 12.5cqw 5.8cqw 6cqw;
        background: linear-gradient(to bottom, rgba(6,6,8,.5), transparent);
      }`,
  },
  {
    id: "6-alta",
    nombre: "6 · A SANGRE ALTA — recortada como la 1, pero con el disco subido para dejar cielo",
    css: `
      .muro-foto[data-portada="true"] .foto-img { object-position: 50% 22%; }
      .muro-hoja[data-forma="portada"] {
        padding-top: 42cqw;
        background: linear-gradient(to top,
          var(--paper) 0%,
          color-mix(in srgb, var(--paper) 97%, transparent) 34%,
          color-mix(in srgb, var(--paper) 62%, transparent) 66%,
          transparent 100%);
      }`,
  },
];

const nav = await chromium.launch({
  executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
for (const d of DISENOS) {
  const p = await nav.newPage({ viewport: { width: 430, height: 860 }, deviceScaleFactor: 2 });
  await p.goto(URL, { waitUntil: "load" });
  await p.waitForTimeout(2600);
  /* El halo necesita la dirección de la imagen, y en el mirador es un data:
     enorme metido en el `src`. Se lee del propio <img> y se pasa por variable. */
  await p.evaluate(() => {
    const caja = document.querySelector('.muro-foto[data-portada="true"]');
    const img = caja?.querySelector(".foto-img");
    if (caja && img) caja.style.setProperty("--halo", `url("${img.getAttribute("src")}")`);
  });
  if (d.css)
    await p.evaluate((css) => {
      const e = document.createElement("style");
      e.textContent = css;
      document.body.appendChild(e);
    }, d.css);
  await p.waitForTimeout(700);
  await p.locator(".shell").first().screenshot({ path: `${OUT}/${d.id}.png` });
  console.log(d.nombre);
  await p.close();
}
await nav.close();
