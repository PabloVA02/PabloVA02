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

   ── EL PLAN HACE FALTA: CREATOR ──────────────────────────────────────────

   Comprobado contra la API con la cuenta de Pablo, y conviene no volver a
   averiguarlo:

     · Las 21 voces que trae una cuenta nueva son TODAS de acento inglés. En
       castellano no hay ninguna.
     · Las 400 voces en español de ElevenLabs están todas en la biblioteca
       —categorías `professional` y `high_quality`, ni una `premade`—, y una
       cuenta Free NO PUEDE USAR VOCES DE BIBLIOTECA DESDE LA API: «Free users
       cannot use library voices via the API».
     · El campo `free_users_allowed` de la biblioteca engaña: quiere decir
       gratis DESDE SU WEB, no desde la API. Hay 24 castellanas con esa marca
       y ninguna funciona aquí.
     · El tope de Free son 10.000 caracteres y Sapiens son 13.230.

   O sea que hace falta Creator para las dos cosas: la voz y la cuota. El
   formato de 32 kbps, en cambio, sí lo sirve en Free.

   ── LAS CANDIDATAS, YA ELEGIDAS ──────────────────────────────────────────

   De las 400, estas cinco son peninsulares y de perfil audioguía. En cuanto
   haya plan, se audicionan con `audicion` y se elige:

     1npscUJu0UbVeHp4b0zt  Juan Gabriel · calmado · educativo
     Ypjv4S8CWJLMvXfBMUtN  Víctor Corrales · calmado · narrativo
     Kg0OQpD0yK15N6xy83Yo  Sofía Lavanda · suave · narrativo
     py37pY8QUQdhW5a7JwPG  Susana · documental
     Yqxik8v3XlyYOTWnDIVu  Roque · documentales y narración

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

import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from "node:fs";
import { execFileSync } from "node:child_process";
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

/* ── POR QUÉ CURL Y NO `fetch` ──────────────────────────────────────────────
   La salida a la red de este entorno pasa por un proxy que anuncia
   `HTTPS_PROXY`. `curl` lo respeta solo con tenerlo en el entorno; el `fetch`
   de Node 22 lo ignora y sale por su cuenta, y entonces se topa con la
   política de egreso y recibe «403 Host not in allowlist» aunque el dominio
   esté permitido. Medido en la misma máquina y en el mismo segundo: curl 200,
   fetch 403.

   Y la clave va por la CONFIGURACIÓN DE CURL leída de la entrada estándar, no
   como argumento: lo que se pasa en la línea de órdenes lo puede leer
   cualquiera que mire la lista de procesos. */
function curl(config) {
  /* Sin `encoding`: así devuelve un Buffer, que es lo que hace falta para el
     audio. Poniéndolo a "buffer" —que es lo que dice la documentación que es
     el valor por defecto— Node 22 responde ERR_UNKNOWN_ENCODING. */
  return execFileSync("curl", ["-sS", "--max-time", "180", "-K", "-"], {
    input: config,
    maxBuffer: 64 * 1024 * 1024,
  });
}

function pide(ruta) {
  const salida = curl(`url = "${API}${ruta}"\nheader = "xi-api-key: ${CLAVE}"\n`);
  return JSON.parse(salida.toString("utf8"));
}

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

function habla(voiceId, texto) {
  const cuerpo = `/tmp/xi-cuerpo-${process.pid}.json`;
  const destino = `/tmp/xi-salida-${process.pid}.mp3`;
  writeFileSync(cuerpo, JSON.stringify({ text: texto, model_id: MODELO, voice_settings: AJUSTES }));
  try {
    curl(
      `url = "${API}/v1/text-to-speech/${voiceId}?output_format=${FORMATO}"\n` +
        `header = "xi-api-key: ${CLAVE}"\n` +
        `header = "content-type: application/json"\n` +
        `data = @${cuerpo}\n` +
        `output = "${destino}"\n`,
    );
    const mp3 = readFileSync(destino);
    /* Un error de la API vuelve como JSON con cara de mp3: si empieza por una
       llave, es que no hay audio ninguno. */
    if (mp3[0] === 0x7b) throw new Error(`ElevenLabs: ${mp3.toString("utf8").slice(0, 300)}`);
    return mp3;
  } finally {
    for (const f of [cuerpo, destino]) {
      try {
        unlinkSync(f);
      } catch {
        /* daba igual */
      }
    }
  }
}

const orden = process.argv[2];

if (orden === "voces") {
  const { voices } = pide("/v1/voices");
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
    const mp3 = habla(id, texto);
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
    const mp3 = habla(voz, b.texto);
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
