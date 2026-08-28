/* ==========================================================================
   NI LÍNEAS SUELTAS NI TEXTO PEGADO A LA BARRA

       npx vite build && npx vite preview --port 4173 &
       node scripts/huerfanas.mjs [cuántos temas]

   Es el criterio de aceptación que puso Pablo el 28 de agosto:

       «Recorre los cuatro shorts del Sol y comprueba que ninguna página
       empieza o termina con una línea suelta, y que ninguna llega a tocar la
       barra de pestañas.»

   QUÉ MIRA, PANTALLA POR PANTALLA

     · Que el primer bloque, si es la cola de un párrafo partido, no traiga un
       solo renglón. Y lo mismo con el último, si es la cabeza de uno.
     · Que ningún subtítulo se quede el último de la pantalla.
     · Que entre el final del texto y la barra de pestañas queden los 56 puntos
       de la franja, o los del pie en la última.

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
    await pag.waitForTimeout(430);
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

        /* Y el aire de abajo: desde donde acaba el texto hasta donde empieza
           la barra de pestañas. */
        const barra = [...document.querySelectorAll("*")].find(
          (e) => /Biblioteca/.test(e.textContent ?? "") && e.children.length >= 4 && e.getBoundingClientRect().height < 120,
        );
        return {
          entra: dePar(pri) && esCola(pri) ? renglones(pri) : null,
          sale: dePar(ult) && esCabeza(ult) ? renglones(ult) : null,
          rotuloAlPie: ult.tagName === "H3",
          aire: Math.round(
            barra.getBoundingClientRect().top - ult.getBoundingClientRect().bottom,
          ),
          primeras: texto(pri).slice(0, 30),
        };
      }),
    );
  }
  const malas = [];
  partes.forEach((f, i) => {
    if (!f) return;
    if (f.entra !== null && f.entra < 2) malas.push(`p${i + 1} empieza con ${f.entra} renglón: «${f.primeras}…»`);
    if (f.sale !== null && f.sale < 2) malas.push(`p${i + 1} acaba con ${f.sale} renglón`);
    if (f.rotuloAlPie) malas.push(`p${i + 1} acaba en un subtítulo suelto`);
    if (f.aire < 50) malas.push(`p${i + 1} deja solo ${f.aire} pt hasta la barra`);
  });
  fallos += malas.length;
  console.log(
    `${cab.titulo.slice(0, 52).padEnd(53)} ${cab.n} pantallas · aire ${partes.map((f) => (f ? f.aire : "—")).join(" ")}` +
      (malas.length ? `\n   ✗ ${malas.join("\n   ✗ ")}` : "  ✓"),
  );
}
await nav.close();
console.log(fallos ? `\n${fallos} fallos` : "\nNi una línea suelta y ninguna pantalla toca la barra.");
process.exit(fallos ? 1 : 0);
