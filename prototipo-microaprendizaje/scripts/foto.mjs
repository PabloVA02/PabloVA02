/* Busca una fotografía en Wikimedia Commons y devuelve la ficha lista para
   pegar en un short, con el autor y la licencia sacados de Commons y no de la
   memoria de nadie.

   Uso:
     node scripts/foto.mjs buscar "faro de eddystone"     → hasta 12 candidatas
     node scripts/foto.mjs ficha "File:Nombre.jpg"        → el objeto Foto
     node scripts/foto.mjs ver "File:Nombre.jpg" out.jpg  → se la descarga

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

async function buscar(texto) {
  const d = await pide({
    action: "query", generator: "search", gsrsearch: `filetype:bitmap ${texto}`,
    gsrnamespace: 6, gsrlimit: 12, prop: "imageinfo",
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

  console.log(`\n${p.title}\n  ${i.width}x${i.height}   ${lic}\n  autor: ${autor}\n  fecha: ${fecha || "(sin fecha)"}\n  ficha: https://commons.wikimedia.org/wiki/${encodeURIComponent(p.title)}\n`);
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
  writeFileSync(salida, await trae(u, true));
  console.log("guardada en", salida, "— ábrela y MÍRALA antes de meterla.");
}

const [orden, ...resto] = process.argv.slice(2);
const acciones = { buscar: () => buscar(resto.join(" ")), ficha: () => ficha(resto[0]), ver: () => ver(resto[0], resto[1]) };
if (!acciones[orden]) {
  console.log("uso: node scripts/foto.mjs buscar «texto» | ficha «File:…» | ver «File:…» [salida.jpg]");
  process.exit(1);
}
await acciones[orden]();
