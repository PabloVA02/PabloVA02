/* ==========================================================================
   LAS PORTADAS: PROCESADO Y SUBIDA

       node scripts/portadas.mjs                    procesa todo `originales/`
       node scripts/portadas.mjs gravedad leche     solo esos
       node scripts/portadas.mjs --sube             procesa y sube a R2

   Las reglas las puso Pablo el 28 de agosto y están escritas en el `CLAUDE.md`
   del proyecto, apartado «Portadas: calidad y almacenamiento». Este guion es
   quien las cumple; si alguna vez discrepan, manda el `CLAUDE.md`.

   QUÉ HACE, POR ORDEN

     1. Lee cada imagen de `originales/`. El nombre del archivo, sin extensión,
        ES el identificador del tema: `como-funciona-la-gravedad.png` es la
        portada de `como-funciona-la-gravedad.md`. No hay tabla intermedia
        porque no hace falta y porque una tabla se desincroniza.
     2. La recorta a 9:16 y la lleva a 1440 × 2560, que es la pantalla del
        móvil más exigente que hay. El recorte va por `attention`, que es el
        que busca la zona con más detalle en vez de dar por hecho que el
        motivo está en el centro.
     3. Escribe `portadas/<id>.avif` a calidad 65 y `portadas/<id>.webp` a 85.
        AVIF es el principal; WebP existe para lo que no admita AVIF.
     4. Actualiza `assets/portadas.csv`, que es lo que prueba que cada imagen
        se obtuvo legalmente. Sin fila en ese fichero, una portada NO entra.
     5. Con `--sube`, las manda a Cloudflare R2 y deja la URL pública en el CSV.

   SIN LÍMITE DE PESO, Y ES A PROPÓSITO. Pablo: «prioriza la imagen sobre el
   peso; lo normal serán 300-500 kB y está bien». Así que aquí no hay ningún
   recorte de calidad para bajar de una cifra: si una imagen sale de 600 kB,
   sale de 600 kB.

   LO QUE SÍ SE VIGILA es el ancho del original. Si una imagen no llega a
   1440 px de ancho después del recorte, se avisa por consola y se marca en el
   CSV: estirarla se ve, y es mejor cambiar de imagen que subir esa. El guion
   NO la rechaza —a veces no hay otra—, pero no deja que pase en silencio.

   LOS ORIGINALES NO SE BORRAN NUNCA. `originales/` está en el `.gitignore`, así
   que no viaja al repositorio, pero se queda en disco: el día que cambie el
   formato de salida o la resolución de los móviles, se vuelve a procesar desde
   ahí y no hay que volver a buscar las imágenes.
   ========================================================================== */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { basename, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const AQUI = fileURLToPath(new URL("..", import.meta.url));
const ORIGINALES = join(AQUI, "originales");
const SALIDA = join(AQUI, "portadas");
const CSV = join(AQUI, "assets", "portadas.csv");

/* Las tres medidas de la regla, juntas y en un solo sitio. */
const ANCHO = 1440;
const ALTO = 2560; // 9:16 exacto
const AVIF = 65;
const WEBP = 85;

const COLUMNAS = [
  "archivo", "tema", "fuente", "url_original", "licencia", "autor",
  "descargada", "procesada", "ancho_original", "alto_original",
  "avif_kb", "webp_kb", "url_publica", "aviso",
];

/* ---- el CSV: se lee entero, se actualiza por filas y se vuelve a escribir --
   Es un CSV a mano y no una dependencia porque son catorce columnas sin comas
   raras: los únicos campos con comas posibles son el autor y la licencia, y
   esos se entrecomillan. */
const escapa = (v) => {
  const t = String(v ?? "");
  return /[",\n]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
};
const partirLinea = (l) => {
  const campos = [];
  let actual = "";
  let comillas = false;
  for (let i = 0; i < l.length; i++) {
    const c = l[i];
    if (comillas) {
      if (c === '"' && l[i + 1] === '"') { actual += '"'; i++; }
      else if (c === '"') comillas = false;
      else actual += c;
    } else if (c === '"') comillas = true;
    else if (c === ",") { campos.push(actual); actual = ""; }
    else actual += c;
  }
  campos.push(actual);
  return campos;
};
function leeCsv() {
  if (!existsSync(CSV)) return new Map();
  const lineas = readFileSync(CSV, "utf8").trim().split("\n");
  const cab = partirLinea(lineas[0]);
  const filas = new Map();
  for (const l of lineas.slice(1)) {
    if (!l.trim()) continue;
    const v = partirLinea(l);
    const fila = Object.fromEntries(cab.map((c, i) => [c, v[i] ?? ""]));
    filas.set(fila.tema, fila);
  }
  return filas;
}
function escribeCsv(filas) {
  const orden = [...filas.values()].sort((a, b) => a.tema.localeCompare(b.tema, "es"));
  const cuerpo = orden.map((f) => COLUMNAS.map((c) => escapa(f[c])).join(","));
  writeFileSync(CSV, [COLUMNAS.join(","), ...cuerpo].join("\n") + "\n", "utf8");
}

/* ---- el procesado ------------------------------------------------------- */
async function procesa(ruta, tema) {
  const original = sharp(ruta, { failOn: "none" });
  const meta = await original.metadata();

  /* El ancho útil del original DESPUÉS de recortar a 9:16. Si es más apaisado
     que 9:16, lo que limita es su alto; si es más estrecho, su ancho. Es esa
     cifra, y no `meta.width`, la que dice si la portada va a salir estirada. */
  const util = meta.width / meta.height > ANCHO / ALTO
    ? Math.round((meta.height * ANCHO) / ALTO)
    : meta.width;

  mkdirSync(SALIDA, { recursive: true });
  const base = sharp(ruta, { failOn: "none" }).resize(ANCHO, ALTO, {
    fit: "cover",
    /* `attention` y no `centre`: busca la zona de más detalle. En una portada
       vertical sacada de una imagen apaisada, el centro geométrico suele ser
       cielo o pared. */
    position: sharp.strategy.attention,
    withoutEnlargement: false,
  });
  const avif = join(SALIDA, `${tema}.avif`);
  const webp = join(SALIDA, `${tema}.webp`);
  await base.clone().avif({ quality: AVIF, effort: 6 }).toFile(avif);
  await base.clone().webp({ quality: WEBP }).toFile(webp);

  return {
    ancho_original: meta.width,
    alto_original: meta.height,
    util,
    avif_kb: Math.round(statSync(avif).size / 1024),
    webp_kb: Math.round(statSync(webp).size / 1024),
    corta: util < ANCHO,
  };
}

/* ---- la subida a R2 ------------------------------------------------------
   Hace falta que estén puestas estas cuatro variables de entorno. No se
   inventan valores por defecto a propósito: subir a un sitio equivocado es
   peor que no subir. */
async function sube(tema) {
  const { R2_CUENTA, R2_BUCKET, R2_CLAVE, R2_SECRETO, R2_PUBLICA } = process.env;
  const faltan = ["R2_CUENTA", "R2_BUCKET", "R2_CLAVE", "R2_SECRETO", "R2_PUBLICA"]
    .filter((k) => !process.env[k]);
  if (faltan.length) throw new Error(`faltan variables de entorno: ${faltan.join(", ")}`);
  const { S3Client, PutObjectCommand } = await import("@aws-sdk/client-s3");
  const cli = new S3Client({
    region: "auto",
    endpoint: `https://${R2_CUENTA}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: R2_CLAVE, secretAccessKey: R2_SECRETO },
  });
  for (const [ext, tipo] of [["avif", "image/avif"], ["webp", "image/webp"]]) {
    await cli.send(new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: `portadas/${tema}.${ext}`,
      Body: readFileSync(join(SALIDA, `${tema}.${ext}`)),
      ContentType: tipo,
      /* Un año de caché: el nombre es el del tema, así que si cambia la imagen
         hay que cambiarle el nombre o purgar. */
      CacheControl: "public, max-age=31536000, immutable",
    }));
  }
  return `${R2_PUBLICA.replace(/\/$/, "")}/portadas/${tema}.avif`;
}

/* ---- el mando ----------------------------------------------------------- */
const args = process.argv.slice(2);
const subir = args.includes("--sube");
const filtros = args.filter((a) => !a.startsWith("--"));

if (!existsSync(ORIGINALES)) {
  console.error(`no existe ${ORIGINALES}. Ahí van los archivos sin procesar, y no se borran nunca.`);
  process.exit(1);
}
const fuentes = readdirSync(ORIGINALES)
  .filter((f) => /\.(png|jpe?g|webp|avif|tiff?|heic)$/i.test(f))
  .filter((f) => !filtros.length || filtros.some((q) => f.includes(q)));

if (!fuentes.length) {
  console.log("no hay nada que procesar en originales/");
  process.exit(0);
}

const filas = leeCsv();
const hechas = [];
const cortas = [];
const sinFicha = [];
for (const f of fuentes) {
  const tema = basename(f, extname(f));
  const r = await procesa(join(ORIGINALES, f), tema);
  const fila = filas.get(tema) ?? { tema, archivo: `${tema}.avif` };
  Object.assign(fila, {
    archivo: `${tema}.avif`,
    procesada: new Date().toISOString().slice(0, 10),
    ancho_original: r.ancho_original,
    alto_original: r.alto_original,
    avif_kb: r.avif_kb,
    webp_kb: r.webp_kb,
    aviso: r.corta ? `original de solo ${r.util} px útiles de ancho` : "",
  });
  if (subir) fila.url_publica = await sube(tema);
  filas.set(tema, fila);
  hechas.push({ tema, ...r });
  if (r.corta) cortas.push({ tema, util: r.util });
  /* La procedencia NO la puede rellenar el guion: la pone quien elige la
     imagen. Sin ella la fila existe pero la portada no está probada. */
  if (!fila.fuente || !fila.licencia) sinFicha.push(tema);
  console.log(
    `${tema.padEnd(34)} ${String(r.avif_kb).padStart(4)} kB avif · ` +
      `${String(r.webp_kb).padStart(4)} kB webp · original ${r.ancho_original}×${r.alto_original}` +
      (r.corta ? `  ← se queda en ${r.util} px de ancho` : ""),
  );
}
escribeCsv(filas);

const medio = Math.round(hechas.reduce((t, h) => t + h.avif_kb, 0) / hechas.length);
console.log(`\n${hechas.length} portadas · ${medio} kB de media en AVIF · assets/portadas.csv al día`);
if (cortas.length)
  console.log(
    `AVISO — ${cortas.length} por debajo de ${ANCHO} px de ancho, el original no daba para más:\n` +
      cortas.map((c) => `   ${c.tema}: ${c.util} px`).join("\n"),
  );
else console.log(`Ninguna por debajo de ${ANCHO} px de ancho.`);
if (sinFicha.length)
  console.log(
    `SIN PROCEDENCIA — hay que rellenar fuente y licencia en assets/portadas.csv:\n   ` +
      sinFicha.join("\n   "),
  );
if (!subir) console.log("No se ha subido nada. Con --sube y las variables R2_* puestas, van a Cloudflare R2.");
