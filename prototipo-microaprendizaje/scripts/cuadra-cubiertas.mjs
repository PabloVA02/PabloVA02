/* Rellena las esquinas transparentes con el color opaco más cercano de su
   propia fila. Las cubiertas de la tanda del 5 de septiembre venían con las
   esquinas ya redondeadas y transparencia real; la app redondea sola, y un
   redondeo encima de otro deja ocho cubiertas más redondas que las otras 330.
   Aquí se devuelve el rectángulo y el redondeo lo pone el CSS, igual para
   todas. El original con su alfa se guarda intacto en cubiertas-originales/. */
import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import { join } from "node:path";
const [ORIGEN, DESTINO] = process.argv.slice(2);
mkdirSync(DESTINO, { recursive: true });
for (const f of readdirSync(ORIGEN).filter((x) => x.endsWith(".png")).sort()) {
  const { data, info } = await sharp(join(ORIGEN, f)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: ch } = info;
  let tocados = 0;
  for (let y = 0; y < h; y++) {
    const fila = y * w;
    /* Por la izquierda: el primer opaco de la fila manda hacia atrás. */
    let x = 0;
    while (x < w && data[(fila + x) * ch + 3] < 255) x++;
    if (x === w) continue;               // fila entera transparente: nada que copiar
    for (let k = 0; k < x; k++) {
      for (let c = 0; c < 3; c++) data[(fila + k) * ch + c] = data[(fila + x) * ch + c];
      data[(fila + k) * ch + 3] = 255; tocados++;
    }
    let z = w - 1;
    while (z >= 0 && data[(fila + z) * ch + 3] < 255) z--;
    for (let k = z + 1; k < w; k++) {
      for (let c = 0; c < 3; c++) data[(fila + k) * ch + c] = data[(fila + z) * ch + c];
      data[(fila + k) * ch + 3] = 255; tocados++;
    }
  }
  await sharp(data, { raw: { width: w, height: h, channels: ch } }).png().toFile(join(DESTINO, f));
  console.log(`  ${f.padEnd(24)} ${tocados} píxeles de esquina rellenados`);
}
