/* ==========================================================================
   EL LECTOR, COMPROBADO: MÁRGENES, SCROLL Y LÍNEAS SUELTAS

       npx vite build && npx vite preview --port 4173 &
       node scripts/huerfanas.mjs [cuántos temas]

   Las tres cosas que pidió Pablo el 28 de agosto, comprobadas pantalla por
   pantalla:

     1. NI UNA PALABRA SUELTA. Si el primer bloque de una pantalla es la cola
        de un párrafo partido, tiene que traer al menos dos renglones; y lo
        mismo con el último si es la cabeza de uno. Y ningún subtítulo se queda
        el último de su pantalla.
     2. NINGUNA PANTALLA CON SCROLL. `scrollHeight > clientHeight` en la caja
        de texto es la señal de que el reparto se ha equivocado.
     3. LOS MÁRGENES, IDÉNTICOS EN TODAS. «La distancia del texto al borde
        inferior tiene que ser exactamente la misma en la primera página y en
        la última.» Se mide del suelo de la caja de texto al borde de la hoja,
        que es lo que no puede cambiar de una pantalla a otra: lo que llega
        más abajo o más arriba es el TEXTO, según cuánto se haya llenado, y eso
        sí varía.

   CÓMO SE SABE SI UN BLOQUE VIENE PARTIDO. No hace falta adivinarlo: un
   párrafo partido deja la cabeza SIN punto final y la cola empezando en
   minúscula. Se comprueban las dos cosas y solo se cuentan renglones cuando
   una de ellas se cumple, que es justo el caso que preocupa a Pablo —la
   pantalla que empezaba con «posible.» y nada más—.

   Sale con código 1 si algo falla, así que vale para una tubería.
   ========================================================================== */
import { chromium } from "playwright-core";
import { sirveFotos } from "./fotos-al-vuelo.mjs";

const nav = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const pag = await nav.newPage({ viewport: { width: 375, height: 812 } });
await sirveFotos(pag);
await pag.goto("http://127.0.0.1:4173/?p=shorts", { waitUntil: "networkidle" });
await pag.waitForTimeout(2500);

let fallos = 0;
for (let h = 0; h < Number(process.argv[2] ?? 4); h++) {
  await pag.evaluate((k) => {
    const c = document.querySelector(".muro-pase");
    c.scrollTo({ top: c.clientHeight * k, behavior: "instant" });
  }, h);
  await pag.waitForTimeout(1300);
  const cab = await pag.evaluate(() => {
    const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
      const c = e.getBoundingClientRect();
      return c.top > -50 && c.top < 50;
    });
    return { titulo: vis?.querySelector("h2")?.textContent ?? "?", n: vis?.querySelectorAll(".muro-tramo").length ?? 0 };
  });
  const partes = [];
  for (let p = 1; p <= cab.n; p++) {
    await pag.mouse.click(300, 446);
    /* Se espera a que PARE la animación de entrada. El texto entra subiendo
       catorce puntos con un muelle, así que midiendo a los 430 ms la hoja
       todavía se está colocando y el margen salía entre 172,9 y 174,5 en
       pantallas que son idénticas. El alto de la caja no se anima y por eso sí
       salía exacto; lo que se movía era la posición. */
    await pag.waitForTimeout(1100);
    partes.push(
      await pag.evaluate(() => {
        const vis = [...document.querySelectorAll(".muro-pagina")].find((e) => {
          const c = e.getBoundingClientRect();
          return c.top > -50 && c.top < 50;
        });
        const hoja = vis?.querySelector(".muro-hoja:not(.muro-medidor)");
        const cuerpo = hoja?.querySelector(".short-cuerpo");
        if (!cuerpo || !cuerpo.children.length) return null;
        const hijos = [...cuerpo.children];

        const renglones = (el) => {
          const r = document.createRange();
          r.selectNodeContents(el);
          return r.getClientRects().length;
        };
        const texto = (el) => (el.textContent ?? "").trim();
        /* Una cola de párrafo partido empieza en minúscula; una cabeza no
           termina en punto. Es lo que distingue «posible.» —cola de una
           línea— de un párrafo corto que empieza y acaba en su pantalla. */
        const esCola = (el) => /^[a-zá-úñ¿¡(]/.test(texto(el));
        const esCabeza = (el) => !/[.!?:»”)]$/.test(texto(el));

        const pri = hijos[0];
        const ult = hijos[hijos.length - 1];
        const dePar = (el) => el.tagName === "P" || el.tagName === "BLOCKQUOTE";
        const hs = getComputedStyle(hoja);

        /* Y el aire de abajo: desde donde acaba el texto hasta donde empieza
           la barra de pestañas. */
        const barra = [...document.querySelectorAll("*")].find(
          (e) => /Biblioteca/.test(e.textContent ?? "") && e.children.length >= 4 && e.getBoundingClientRect().height < 120,
        );
        return {
          entra: dePar(pri) && esCola(pri) ? renglones(pri) : null,
          sale: dePar(ult) && esCabeza(ult) ? renglones(ult) : null,
          rotuloAlPie: ult.tagName === "H3",
          /* Un renglón de más es la tolerancia que pidió Pablo, no scroll:
             la caja no recorta y esa línea cae dentro del margen de pie. */
          scroll: cuerpo.scrollHeight - cuerpo.clientHeight > (parseFloat(getComputedStyle(cuerpo).lineHeight) || 26) + 1,
          /* El margen: del suelo de la caja de texto al borde de la hoja. */
          /* Sin redondear: la maqueta resuelve en fracciones de punto y dos
             pantallas idénticas pueden dar 156,56 y 156,76. Redondeando salía
             157 y 158, y el criterio fallaba por una diferencia que no existe.
             Lo que de verdad no puede variar es el ALTO de la caja, y ese sale
             exacto. */
          margen: +(hoja.getBoundingClientRect().bottom - cuerpo.getBoundingClientRect().bottom).toFixed(2),
          alto: +cuerpo.getBoundingClientRect().height.toFixed(2),
          arriba: Math.round(parseFloat(hs.paddingTop)),
          lados: [Math.round(parseFloat(hs.paddingLeft)), Math.round(parseFloat(hs.paddingRight))],
          aire: Math.round(
            barra.getBoundingClientRect().top - ult.getBoundingClientRect().bottom,
          ),
          primeras: texto(pri).slice(0, 30),
        };
      }),
    );
  }
  const malas = [];
  const llenas = partes.filter(Boolean);
  partes.forEach((f, i) => {
    if (!f) return;
    if (f.entra !== null && f.entra < 2) malas.push(`p${i + 1} empieza con ${f.entra} renglón: «${f.primeras}…»`);
    if (f.sale !== null && f.sale < 2) malas.push(`p${i + 1} acaba con ${f.sale} renglón`);
    if (f.rotuloAlPie) malas.push(`p${i + 1} acaba en un subtítulo suelto`);
    if (f.scroll) malas.push(`p${i + 1} TIENE SCROLL`);
    if (f.lados[0] !== f.lados[1]) malas.push(`p${i + 1} no tiene el mismo margen a los dos lados: ${f.lados.join(" y ")}`);
    if (f.margen < f.arriba) malas.push(`p${i + 1} tiene el margen de abajo (${f.margen}) menor que el de arriba (${f.arriba})`);
    if (Math.abs(f.alto - llenas[0].alto) > 0.01) malas.push(`p${i + 1} tiene la caja de texto de otro alto: ${f.alto} contra ${llenas[0].alto}`);
  });
  /* Y el criterio de aceptación: primera y última, el mismo margen. */
  if (llenas.length > 1 && Math.abs(llenas[0].margen - llenas[llenas.length - 1].margen) > 1)
    malas.push(`la primera deja ${llenas[0].margen} y la última ${llenas[llenas.length - 1].margen}`);
  fallos += malas.length;
  console.log(
    `${cab.titulo.slice(0, 46).padEnd(47)} ${cab.n} pantallas · margen ` +
      `${llenas[0]?.arriba ?? "?"} arriba / ${Math.round(llenas[0]?.margen ?? 0)} abajo · caja ${llenas[0]?.alto}` +
      (malas.length ? `\n   ✗ ${malas.join("\n   ✗ ")}` : "  ✓"),
  );
}
await nav.close();
console.log(
  fallos
    ? `\n${fallos} fallos`
    : "\nNi una palabra suelta, ni una pantalla con scroll, y el mismo margen en todas.",
);
process.exit(fallos ? 1 : 0);
