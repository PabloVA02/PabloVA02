/* ==========================================================================
   EL ORIGINAL AL LADO DE LA PORTADA QUE SALIÓ

       SALIDA=/tmp/cmp.png node scripts/compara-portada.mjs tema1 tema2 …

   Los dos enteros y a la misma altura, con sus medidas debajo. Es la manera de
   contestar a «esta se ve muy de cerca» sin discutir: se ve lo que había y lo
   que quedó.

   Existe porque el 30 de agosto Pablo cantó tres encuadres malos —el flato, la
   cerveza y la máscara de la peste— y con los números del guion no se veía
   nada raro: las tres salían a 2160×3840 y por encima del suelo de calidad. El
   fallo estaba en DÓNDE caía la ventana, y eso no lo dice ninguna cifra.
   ========================================================================== */
import sharp from "sharp";
const A = 380, B = Math.round(A * 16 / 9);
const tejas = [];
for (const tema of process.argv.slice(2)) {
  for (const [ruta, etiqueta] of [[`originales/${tema}.jpg`, "original"], [`portadas/${tema}.avif`, "portada"]]) {
    const img = sharp(ruta);
    const m = await img.metadata();
    const dentro = await img.resize(A, B, { fit: "contain", background: "#222" }).png().toBuffer();
    const pie = await sharp({ create: { width: A, height: 30, channels: 3, background: "#111" } })
      .composite([{ input: Buffer.from(`<svg width="${A}" height="30"><text x="6" y="20" font-family="DejaVu Sans" font-size="13" fill="#ddd">${etiqueta} ${m.width}×${m.height} · ${tema.slice(0, 28)}</text></svg>`), top: 0, left: 0 }])
      .png().toBuffer();
    tejas.push(await sharp({ create: { width: A, height: B + 30, channels: 3, background: "#111" } })
      .composite([{ input: dentro, top: 0, left: 0 }, { input: pie, top: B, left: 0 }]).png().toBuffer());
  }
}
const m = await sharp(tejas[0]).metadata();
await sharp({ create: { width: m.width * tejas.length, height: m.height, channels: 3, background: "#111" } })
  .composite(tejas.map((b, i) => ({ input: b, left: i * m.width, top: 0 })))
  .png().toFile(process.env.SALIDA);
console.log("listo");
