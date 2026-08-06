/* Busca una fotografía en Wikimedia Commons y devuelve la ficha lista para
   pegar en un short, con el autor y la licencia sacados de Commons y no de la
   memoria de nadie.

   Uso:
     node scripts/foto.mjs tema "escalator"               → por dónde empezar
     node scripts/foto.mjs buscar "faro de eddystone"     → hasta 12 candidatas
     node scripts/foto.mjs ficha "File:Nombre.jpg"        → el objeto Foto
     node scripts/foto.mjs ver "File:Nombre.jpg" out.jpg  → se la descarga

   Y para elegir sin bajarlas de una en una, la hoja de contacto:
     node scripts/contacto.mjs hoja.png "File:Una.jpg" "File:Otra.jpg" …

   Hace falta que el entorno tenga abiertos commons.wikimedia.org y
   upload.wikimedia.org (Acceso a la red → Personalizado). */

const API = "https://commons.wikimedia.org/w/api.php";
const UA = { "User-Agent": "Curva/1.0 (proyecto educativo; contacto: pabloverdalo@gmail.com)" };

const limpia = (t) => String(t ?? "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

/* Se pide con curl y no con fetch a propósito: el fetch de Node no mira las
   variables de proxy del entorno, y aquí todo el tráfico sale por un proxy.
   Con fetch la petición se va por donde no debe y vuelve un 403. */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
const ejecuta = promisify(execFile);

async function trae(url, binario = false) {
  const args = ["-sS", "-L", "--max-time", "40", "-H", `User-Agent: ${UA["User-Agent"]}`, url];
  const { stdout } = await ejecuta("curl", binario ? [...args, "--output", "-"] : args,
    { maxBuffer: 64 * 1024 * 1024, encoding: binario ? "buffer" : "utf8" });
  return stdout;
}

async function pide(params) {
  const u = new URL(API);
  for (const [k, v] of Object.entries({ format: "json", ...params })) u.searchParams.set(k, v);
  return JSON.parse(await trae(u.toString()));
}

async function buscar(texto, cuantas = 12) {
  const d = await pide({
    action: "query", generator: "search", gsrsearch: `filetype:bitmap ${texto}`,
    gsrnamespace: 6, gsrlimit: cuantas, prop: "imageinfo",
    iiprop: "url|size|extmetadata", iiurlwidth: 400,
  });
  const paginas = Object.values(d.query?.pages ?? {});
  if (!paginas.length) return console.log("nada");
  /* Ordenadas por tamaño: en una banda de 390 de ancho a doble densidad hacen
     falta 1200 de ancho para que no se vea blanda. */
  paginas.sort((a, b) => (b.imageinfo?.[0]?.width ?? 0) - (a.imageinfo?.[0]?.width ?? 0));
  for (const p of paginas) {
    const i = p.imageinfo?.[0]; if (!i) continue;
    const e = i.extmetadata ?? {};
    const lic = limpia(e.LicenseShortName?.value);
    const suficiente = i.width >= 1200 ? "✓" : "·";
    console.log(`${suficiente} ${String(i.width).padStart(5)}x${String(i.height).padEnd(5)} ${lic.padEnd(22)} ${p.title}`);
  }
  console.log("\n✓ = ancho de sobra para la banda. Luego: node scripts/foto.mjs ficha \"File:…\"");
}

async function ficha(titulo) {
  const d = await pide({ action: "query", titles: titulo, prop: "imageinfo",
                         iiprop: "url|size|extmetadata|mediatype" });
  const p = Object.values(d.query?.pages ?? {})[0];
  if (!p || p.missing !== undefined) return console.log("no existe ese fichero");
  const i = p.imageinfo[0], e = i.extmetadata ?? {};
  const autor = limpia(e.Artist?.value) || limpia(e.Credit?.value) || "(sin autor en la ficha)";
  const lic = limpia(e.LicenseShortName?.value) || "(sin licencia en la ficha)";
  const fecha = limpia(e.DateTimeOriginal?.value).split("date QS")[0];
  const nombre = p.title.replace(/^File:/, "");
  /* La descripción es lo que dice QUÉ es el objeto, y el pie que se publica va
     de eso. Sin ella se acaba escribiendo el año de la fotografía como si
     fuera el año de la cosa fotografiada. */
  const desc = limpia(e.ImageDescription?.value);

  console.log(`\n${p.title}\n  ${i.width}x${i.height}   ${lic}\n  autor: ${autor}\n  fecha: ${fecha || "(sin fecha)"}\n  ficha: https://commons.wikimedia.org/wiki/${encodeURIComponent(p.title)}`);
  if (desc) console.log(`  dice: ${desc.slice(0, 400)}`);
  console.log("");
  if (i.width < 1200) console.log("  AVISO: menos de 1200 de ancho. En la banda se verá blanda.\n");

  console.log(`    foto: {
      archivo: ${JSON.stringify(nombre)},
      autor: "…de qué es la imagen, de qué año y de dónde salió…",
      licencia: ${JSON.stringify(lic)},
      fuente: "https://commons.wikimedia.org/wiki/${encodeURIComponent(p.title)}",
      foco: "50% 50%",
      alt: "…qué se ve, para quien no la ve…",
    },`);
  console.log(`\n  Y el pie que se publica es \`autor\`, así que NO es una firma:
  dice QUÉ es lo que se está viendo, de qué año y de dónde salió.
  Ejemplo: "Óleo de Jean-Léon Gérôme, 1867. Walters Art Museum, Baltimore."\n`);
}

async function ver(titulo, salida = "foto.jpg") {
  const nombre = titulo.replace(/^File:/, "");
  const u = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(nombre)}?width=1000`;
  const { writeFileSync } = await import("node:fs");
  const datos = await trae(u, true);
  /* Si el fichero no existe, Commons devuelve una página de error con estado
     200 y sin ella acabábamos guardando HTML con nombre de foto. */
  if (datos.slice(0, 15).toString("latin1").includes("<")) 
    throw new Error("eso no es una imagen: el fichero no existe en Commons");
  writeFileSync(salida, datos);
  console.log("guardada en", salida, "— ábrela y MÍRALA antes de meterla.");
}

/* Lo que hay dentro de una categoría de Commons. Buscar por texto libre falla
   mucho —el buscador solo mira el nombre del fichero y la descripción—, y en
   cambio las categorías las mantienen a mano y agrupan por lo que SE VE. */
/* Qué categorías existen con ese nombre. Sirve para no adivinar. */
async function categorias(texto) {
  const d = await pide({ action: "query", list: "search", srsearch: texto,
                         srnamespace: 14, srlimit: 15 });
  for (const r of d.query?.search ?? []) console.log("  " + r.title);
}

async function categoria(nombre, cuantas = 20) {
  const d = await pide({ action: "query", generator: "categorymembers",
    gcmtitle: nombre.startsWith("Category:") ? nombre : `Category:${nombre}`,
    gcmtype: "file", gcmlimit: "60", prop: "imageinfo", iiprop: "url|size|extmetadata" });
  const paginas = Object.values(d.query?.pages ?? {});
  if (!paginas.length) return console.log("categoría vacía o inexistente");
  paginas.sort((a, b) => (b.imageinfo?.[0]?.width ?? 0) - (a.imageinfo?.[0]?.width ?? 0));
  for (const p of paginas.slice(0, cuantas)) {
    const i = p.imageinfo?.[0]; if (!i) continue;
    const lic = limpia(i.extmetadata?.LicenseShortName?.value);
    console.log(`${i.width >= 1200 ? "✓" : "·"} ${String(i.width).padStart(5)}x${String(i.height).padEnd(5)} ${lic.padEnd(22)} ${p.title}`);
  }
}

/* Un tema entero de una vez: las categorías que existen con ese nombre, lo
   mejor de las dos primeras, y además la búsqueda de texto libre.

   Es lo que se acaba haciendo a mano en tres llamadas —`categorias`, luego
   `categoria` de la que parezca, luego `buscar` por si acaso—, y con 755
   shorts por delante esas tres llamadas por imagen son media sesión. Las
   categorías van primero porque las mantiene gente a mano y agrupan por lo
   que SE VE; la búsqueda por texto solo mira el nombre del fichero. */
async function tema(texto) {
  const d = await pide({ action: "query", list: "search", srsearch: texto,
                         srnamespace: 14, srlimit: 6 });
  const cats = (d.query?.search ?? []).map((r) => r.title);
  if (cats.length) console.log("categorías:  " + cats.join("   ·   "));
  for (const c of cats.slice(0, 2)) {
    console.log(`\n── ${c}`);
    await categoria(c, 6);
  }
  console.log("\n── por el nombre del fichero");
  await buscar(texto, 6);
}

const [orden, ...resto] = process.argv.slice(2);
const acciones = { buscar: () => buscar(resto.join(" ")),
                   todo: () => buscar(resto.join(" "), false), ficha: () => ficha(resto[0]),
                   ver: () => ver(resto[0], resto[1]), categoria: () => categoria(resto.join(" ")),
                   categorias: () => categorias(resto.join(" ")),
                   tema: () => tema(resto.join(" ")) };
if (!acciones[orden]) {
  console.log("uso: node scripts/foto.mjs tema «asunto» | buscar «texto» | categoria «nombre» | ficha «File:…» | ver «File:…» [salida.jpg]");
  process.exit(1);
}
await acciones[orden]();
