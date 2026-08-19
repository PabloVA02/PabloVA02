/* ==========================================================================
   El audiolibro de verdad: ElevenLabs.

   Pablo quiere «una voz de audioguía, en castellano, bonita y relajadora».
   Esto genera el audio de un resumen entero, un fichero por bloque, y lo deja
   en `src/audio/<id>/` para que el lector lo reproduzca en vez de usar la voz
   del teléfono.

   ── POR QUÉ NO LO EJECUTA CLAUDE ─────────────────────────────────────────

   El contenedor donde corre Claude en la web tiene la salida a la red cerrada
   por política del entorno: `api.elevenlabs.io:443` responde «403 to CONNECT»
   antes de llegar a ElevenLabs. Se puede arreglar de dos maneras:

     a) abriendo ese dominio en la configuración de red del entorno
        (claude.ai/code → el entorno → política de red), y entonces esto se
        ejecuta desde aquí;
     b) ejecutándolo Pablo en su Mac, que es lo que hace falta hoy.

   ── USO ──────────────────────────────────────────────────────────────────

       export ELEVENLABS_API_KEY=sk_...

       node scripts/voz-elevenlabs.mjs voces
           Lista las voces en castellano con sus etiquetas, para elegir.

       node scripts/voz-elevenlabs.mjs audicion <id1> <id2> <id3>
           Lee el mismo párrafo con cada una y deja los mp3 en /tmp/audicion.
           Se oyen, se elige, y se pasa al siguiente paso. Cuesta unos 400
           caracteres por voz.

       node scripts/voz-elevenlabs.mjs genera <voice_id> [id-del-libro]
           Genera el resumen entero, un mp3 por bloque, en src/audio/<libro>/
           con su `indice.json`. Sapiens son 12.900 caracteres.

   ── LA VOZ Y LOS AJUSTES ─────────────────────────────────────────────────

   Modelo `eleven_multilingual_v2`, que es el que mejor lleva el español.

   Los ajustes son la mitad del resultado y van pensados para una audioguía:

     stability 0.6        alta es calmada; baja suena expresiva y actuada
     similarity 0.8       evita que se le vaya el timbre entre párrafos
     style 0.05           el estilo alto es lo que la vuelve teatral
     speed 0.94           lo mismo que se hace con la voz del sistema

   ── EL TAMAÑO MANDA ──────────────────────────────────────────────────────

   El simulador que se publica tiene un tope de 16 MB y la app con los libros
   dentro ya ocupa 11,3. Un resumen leído son unos dieciséis minutos:

     mp3_22050_32   ~3,8 MB   →  5,1 MB al meterlo en la página en base64
     mp3_44100_128  ~15 MB    →  imposible

   O sea que hay que pedir 32 kbps, y ese formato solo lo sirve ElevenLabs a
   partir del plan Creator. Con 5,1 MB de audio dentro, el simulador se queda
   SIN las fotografías de los shorts: no caben las dos cosas. Es la decisión
   que hay que tomar antes de generar los doscientos.
   ========================================================================== */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const RAIZ = new URL("..", import.meta.url).pathname;
const CLAVE = process.env.ELEVENLABS_API_KEY;
const API = "https://api.elevenlabs.io";
const MODELO = "eleven_multilingual_v2";
const FORMATO = process.env.XI_FORMATO ?? "mp3_22050_32";
const AJUSTES = {
  stability: 0.6,
  similarity_boost: 0.8,
  style: 0.05,
  use_speaker_boost: true,
  speed: 0.94,
};

if (!CLAVE) {
  console.error("Falta la clave. export ELEVENLABS_API_KEY=sk_...");
  process.exit(1);
}

const cabeceras = { "xi-api-key": CLAVE };

/* -- Los bloques del libro ------------------------------------------------
   Se leen del propio `paginas.ts`. El literal de TypeScript es JavaScript
   válido —claves sin comillas y comas de más incluidas—, así que se evalúa
   tal cual en vez de escribir un analizador que se quedaría viejo al primer
   bloque nuevo. Es nuestro propio fichero, no entra nada de fuera. */
function bloquesDe(id) {
  const nombre = id.toUpperCase().replace(/-/g, "_");
  const fuente = readFileSync(join(RAIZ, "src", "libros", "paginas.ts"), "utf8");
  const marca = `const ${nombre}: PaginaLibro[] = [`;
  const i = fuente.indexOf(marca);
  if (i < 0) throw new Error(`No hay páginas escritas a mano para «${id}» en paginas.ts`);
  const desde = i + marca.length - 1;
  let nivel = 0;
  let fin = desde;
  for (let k = desde; k < fuente.length; k++) {
    if (fuente[k] === "[") nivel++;
    else if (fuente[k] === "]") {
      nivel--;
      if (nivel === 0) {
        fin = k + 1;
        break;
      }
    }
  }
  const paginas = eval(`(${fuente.slice(desde, fin)})`);
  return paginas.flatMap((p, pagina) =>
    p.bloques.map((b, bloque) => ({ pagina, bloque, texto: textoDe(b) })).filter((x) => x.texto),
  );
}

/* Lo mismo que hace `textoDe()` en el lector: lo que la voz tiene que decir.
   Si un día cambia allí, cambia aquí. */
function textoDe(b) {
  const limpio = (t) => String(t).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  if (b.b === "rotulo" || b.b === "texto" || b.b === "idea") return limpio(b.texto);
  if (b.b === "lista") return b.puntos.map((p) => `${p.fuerte}: ${limpio(p.texto)}`).join(" ");
  if (b.b === "cita") return `${limpio(b.frase)} ${b.autor}.`;
  if (b.b === "prueba") return `Prueba esto. ${b.puntos.map(limpio).join(" ")}`;
  return "";
}

async function habla(voiceId, texto) {
  const r = await fetch(`${API}/v1/text-to-speech/${voiceId}?output_format=${FORMATO}`, {
    method: "POST",
    headers: { ...cabeceras, "content-type": "application/json" },
    body: JSON.stringify({ text: texto, model_id: MODELO, voice_settings: AJUSTES }),
  });
  if (!r.ok) {
    const detalle = await r.text();
    throw new Error(`ElevenLabs ${r.status}: ${detalle.slice(0, 300)}`);
  }
  return Buffer.from(await r.arrayBuffer());
}

const orden = process.argv[2];

if (orden === "voces") {
  const r = await fetch(`${API}/v1/voices`, { headers: cabeceras });
  const { voices } = await r.json();
  const castellanas = voices.filter((v) => {
    const t = JSON.stringify(v.labels ?? {}) + (v.description ?? "") + (v.name ?? "");
    return /spanish|castilian|espa/i.test(t) || v.fine_tuning?.language === "es";
  });
  const lista = castellanas.length ? castellanas : voices;
  console.log(`${lista.length} voces (de ${voices.length} en la cuenta)\n`);
  for (const v of lista) {
    const l = v.labels ?? {};
    console.log(`${v.voice_id}  ${v.name}`);
    console.log(`   ${[l.accent, l.age, l.gender, l.use_case, l.descriptive].filter(Boolean).join(" · ")}`);
  }
  console.log("\nBusca acento «castilian» o «peninsular», y de uso «narrative» o «informative».");
  console.log("Luego:  node scripts/voz-elevenlabs.mjs audicion <id> <id> <id>");
} else if (orden === "audicion") {
  const ids = process.argv.slice(3);
  if (!ids.length) throw new Error("uso: audicion <voice_id> [voice_id...]");
  /* El mismo párrafo para todas: el primero de Sapiens, que es el que se va a
     oír de verdad. Comparar con frases distintas no compara nada. */
  const texto = bloquesDe("sapiens")[1].texto;
  mkdirSync("/tmp/audicion", { recursive: true });
  for (const id of ids) {
    const mp3 = await habla(id, texto);
    const donde = `/tmp/audicion/${id}.mp3`;
    writeFileSync(donde, mp3);
    console.log(`${donde}  ${(mp3.length / 1024).toFixed(0)} kB`);
  }
  console.log("\nÓyelas y quédate con la más grave y la más lenta.");
} else if (orden === "genera") {
  const voz = process.argv[3];
  const libro = process.argv[4] ?? "sapiens";
  if (!voz) throw new Error("uso: genera <voice_id> [id-del-libro]");

  const bloques = bloquesDe(libro);
  const total = bloques.reduce((a, b) => a + b.texto.length, 0);
  console.log(`${libro}: ${bloques.length} bloques · ${total.toLocaleString("es")} caracteres`);

  const carpeta = join(RAIZ, "src", "audio", libro);
  if (!existsSync(carpeta)) mkdirSync(carpeta, { recursive: true });

  const indice = [];
  let bytes = 0;
  for (const [i, b] of bloques.entries()) {
    const nombre = `${String(b.pagina).padStart(2, "0")}-${String(b.bloque).padStart(2, "0")}.mp3`;
    const mp3 = await habla(voz, b.texto);
    writeFileSync(join(carpeta, nombre), mp3);
    bytes += mp3.length;
    indice.push({ pagina: b.pagina, bloque: b.bloque, fichero: nombre });
    process.stdout.write(`\r  ${i + 1}/${bloques.length}  ${(bytes / 1e6).toFixed(1)} MB`);
    /* Un respiro entre peticiones: la cuenta tiene un tope de peticiones a la
       vez y en serie no se roza nunca, pero el tope de ráfaga sí. */
    await new Promise((r) => setTimeout(r, 250));
  }
  writeFileSync(join(carpeta, "indice.json"), JSON.stringify({ voz, modelo: MODELO, formato: FORMATO, bloques: indice }, null, 2));
  console.log(`\nHecho: ${carpeta} · ${(bytes / 1e6).toFixed(1)} MB`);
  console.log("Ahora Claude lo mete en el lector y lo publica.");
} else {
  console.log("Órdenes: voces · audicion <id...> · genera <voice_id> [libro]");
}
