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
        móvil más exigente que hay. Por defecto el recorte va por `attention`,
        que busca la zona con más detalle en vez de dar por hecho que el motivo
        está en el centro. Acierta casi siempre y falla cuando el motivo es
        pequeño y está descentrado: en la foto del coche eligió el cielo y dejó
        el coche partido por el borde. Para esos casos está
        `assets/recortes.json`, donde se le dice a mano dónde mirar.
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
const RECORTES = join(AQUI, "assets", "recortes.json");

/* LAS MEDIDAS, Y POR QUÉ SON ESTAS.

   Pablo, el 29 de agosto por la tarde: «que se vean lo mejor que se puede, la
   máxima resolución que te pase, pues esa, o la máxima que permitan los
   mejores móviles del mundo y los que vendrán; que se vea a una calidad
   espléndida. Si hay alguna que no es de esa calidad me lo dices y la
   eliminamos».

   Son dos instrucciones y hacen falta dos números:

   · EL TECHO, 2160 de ancho. Es el vertical de 4K —2160 × 3840— y no es un
     número inventado para quedar bien: el móvil más fino que se vende hoy, el
     Xperia 1, tiene 1644 de ancho, y el iPhone Pro Max 1320. Con 2160 hay
     margen de sobra para los que vengan y no se guarda una barbaridad que
     nadie va a ver. Por encima de eso no se sube aunque el original dé más.

   · EL SUELO, 1644 de ancho. Es exactamente lo que necesita ese Xperia para
     enseñar la portada píxel a píxel. Por debajo, en ese móvil, la imagen se
     estira y se nota. Es la cifra que decide si una portada es «espléndida» o
     hay que pedirle otra: el guion la canta al terminar y no la disimula.

   Y ENTRE MEDIAS, LO QUE DÉ EL ORIGINAL, sin estirarlo nunca. Es la primera
   mitad de su frase —«la máxima resolución que te pase, pues esa»—: si una
   foto solo da 1800 de ancho útil, la portada sale a 1800 y no a 2160.
   Agrandar no añade detalle, añade peso y emborrona los bordes. */
const TECHO = 2160;
const ESPLENDIDO = 1644;
/* La proporción, que no cambia: 9:16. */
const ANCHO = 9;
const ALTO = 16;
/* CALIDAD, SUBIDA EL 29 DE AGOSTO. Pablo: «ya siempre sabes que las portadas
   deben ir a la máxima calidad que permite un móvil, que se vea lo mejor
   posible a la mejor calidad posible». El 65 del `CLAUDE.md` era su número de
   la primera tanda, cuando todavía se pensaba en el peso; con «sin límite
   estricto de peso» escrito al lado, 65 se quedaba corto sin motivo. A 80 la
   media pasa de 262 a unos 400 kB, que sigue dentro de lo que él llamó normal,
   y los degradados grandes —el cielo, la miel, el hielo— dejan de bandearse. */
const AVIF = 80;
const WEBP = 90;

const COLUMNAS = [
  "archivo", "tema", "fuente", "url_original", "licencia", "autor",
  "descargada", "procesada", "ancho_original", "alto_original",
  "avif_kb", "webp_kb", "url_publica", "aviso", "notas",
];

/* `aviso` lo escribe el guion en cada pasada y `notas` NO SE TOCA NUNCA: es
   donde va lo que sabe la persona y no el programa —que una licencia está sin
   confirmar, que la URL no se ha podido abrir, que la imagen es un reemplazo—.
   Estuvieron en la misma columna media hora y la segunda pasada del guion se
   llevó por delante lo escrito a mano. */

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

/* ---- el encuadre a mano ---------------------------------------------------
   `assets/recortes.json` es opcional y solo lleva los temas donde el recorte
   automático no acierta. Dos formas por tema:

     "por-que-te-mareas-en-el-coche": { "x": 0.22, "y": 0.7 }
     "por-que-se-corta-la-leche":     { "x": 0.55, "y": 0.5, "zoom": 1.35 }

   `x` e `y` son dónde está el motivo, en tanto por uno sobre la imagen
   entera, y ahí se centra la ventana 9:16. `zoom` acerca: 1,35 coge una
   ventana un 35 % más pequeña, o sea que se ve más grande. Sin `zoom` se coge
   la ventana más grande que cabe, que es lo que conserva más resolución. */
const encuadres = existsSync(RECORTES) ? JSON.parse(readFileSync(RECORTES, "utf8")) : {};

/** La ventana 9:16 que hay que sacar de la imagen, centrada en el foco y sin
 *  salirse de los bordes. */
function ventana(meta, foco) {
  const zoom = Math.max(1, foco.zoom ?? 1);
  /* La ventana 9:16 más grande que cabe en el original, dividida por el zoom.
     Se calcula sobre el ORIGINAL y no sobre la medida de salida: así el
     recorte es el mismo se guarde a 1800 o a 2160, y lo único que cambia
     después es a cuánto se reduce. */
  const width = Math.max(1, Math.floor(capacidad(meta) / zoom));
  const height = Math.min(meta.height, Math.round((width * ALTO) / ANCHO));
  const centra = (medida, total, donde) =>
    Math.min(Math.max(Math.round(total * donde - medida / 2), 0), total - medida);
  return {
    width,
    height,
    left: centra(width, meta.width, foco.x ?? 0.5),
    top: centra(height, meta.height, foco.y ?? 0.5),
  };
}

/* ---- el procesado ------------------------------------------------------- */

/** El ancho útil de un original DESPUÉS de recortarlo a 9:16.
 *
 *  Si la foto es más apaisada que 9:16 lo que limita es su alto; si es más
 *  estrecha, su ancho. Es esta cifra, y no `meta.width`, la que dice cuánta
 *  portada hay de verdad ahí dentro: una panorámica de 6000 × 2000 tiene mucho
 *  ancho y da una portada de 1125.
 */
function capacidad(meta) {
  return meta.width / meta.height > ANCHO / ALTO
    ? Math.round((meta.height * ANCHO) / ALTO)
    : meta.width;
}

async function procesa(ruta, tema) {
  const original = sharp(ruta, { failOn: "none" });
  const meta = await original.metadata();
  const foco = encuadres[tema];
  const zoom = Math.max(1, foco?.zoom ?? 1);

  /* CUÁNTO DA ESTA FOTO, y el zoom se descuenta: acercarse recorta, y lo que
     se recorta ya no está para la salida. */
  const util = Math.floor(capacidad(meta) / zoom);

  /* Y CUÁNTO SE GUARDA: lo que dé, sin pasar del techo y sin estirar nunca. */
  const ancho = Math.min(TECHO, util);
  const alto = Math.round((ancho * ALTO) / ANCHO);

  mkdirSync(SALIDA, { recursive: true });
  const base = foco
    ? sharp(ruta, { failOn: "none" }).extract(ventana(meta, foco)).resize(ancho, alto)
    : sharp(ruta, { failOn: "none" }).resize(ancho, alto, {
        fit: "cover",
        /* `attention` y no `centre`: busca la zona de más detalle. En una
           portada vertical sacada de una imagen apaisada, el centro
           geométrico suele ser cielo o pared. */
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
    ancho,
    alto,
    avif_kb: Math.round(statSync(avif).size / 1024),
    webp_kb: Math.round(statSync(webp).size / 1024),
    corta: ancho < ESPLENDIDO,
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
    aviso: r.corta
      ? `sale a ${r.ancho} px de ancho, por debajo de los ${ESPLENDIDO} del móvil más fino`
      : "",
  });
  if (subir) fila.url_publica = await sube(tema);
  filas.set(tema, fila);
  hechas.push({ tema, ...r });
  if (r.corta) cortas.push({ tema, ancho: r.ancho });
  /* La procedencia NO la puede rellenar el guion: la pone quien elige la
     imagen. Sin ella la fila existe pero la portada no está probada. */
  if (!fila.fuente || !fila.licencia) sinFicha.push(tema);
  console.log(
    `${tema.padEnd(38)} ${String(r.ancho).padStart(4)}×${String(r.alto).padEnd(4)} · ` +
      `${String(r.avif_kb).padStart(5)} kB avif · ${String(r.webp_kb).padStart(5)} kB webp · ` +
      `original ${r.ancho_original}×${r.alto_original}` +
      (encuadres[tema] ? " · encuadre a mano" : "") +
      (r.corta ? `  ← POR DEBAJO DE ${ESPLENDIDO}` : r.ancho < TECHO ? " · da lo que da" : ""),
  );
}
escribeCsv(filas);

const medio = Math.round(hechas.reduce((t, h) => t + h.avif_kb, 0) / hechas.length);
console.log(`\n${hechas.length} portadas · ${medio} kB de media en AVIF · assets/portadas.csv al día`);
const aTecho = hechas.filter((h) => h.ancho >= TECHO).length;
console.log(`${aTecho} llegan al techo de ${TECHO} · ${hechas.length - aTecho - cortas.length} dan menos pero pasan del suelo`);
if (cortas.length)
  console.log(
    `\nESTAS NO SON ESPLÉNDIDAS — ${cortas.length} por debajo de ${ESPLENDIDO} px, que es lo que\n` +
      `pide el móvil más fino que se vende. El original no da para más, así que o se\n` +
      `cambia la fotografía o se quita el short:\n` +
      cortas.map((c) => `   ${c.tema.padEnd(38)} ${c.ancho} px  (le faltan ${ESPLENDIDO - c.ancho})`).join("\n"),
  );
else console.log(`Ninguna por debajo de ${ESPLENDIDO} px: todas espléndidas.`);
if (sinFicha.length)
  console.log(
    `SIN PROCEDENCIA — hay que rellenar fuente y licencia en assets/portadas.csv:\n   ` +
      sinFicha.join("\n   "),
  );
if (!subir) console.log("No se ha subido nada. Con --sube y las variables R2_* puestas, van a Cloudflare R2.");
