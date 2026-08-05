/* Sirve las fotos de Commons al navegador de pruebas.

   Chromium no llega a Commons desde aquí: el proxy le corta la conexión, aun
   pasándoselo con `proxy:`. curl sí llega. Así que se interceptan las
   peticiones a Commons, se bajan con curl y se le entregan ya descargadas.

   Se guardan en una carpeta para no volver a bajarlas en cada pasada.

   Uso:  import { sirveFotos } from "./fotos-al-vuelo.mjs";
         await sirveFotos(page);
*/
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const ejecuta = promisify(execFile);
const UA = "Curva/1.0 (proyecto educativo; contacto: pabloverdalo@gmail.com)";

export async function sirveFotos(page, cache = "/tmp/curva-fotos") {
  if (!existsSync(cache)) mkdirSync(cache, { recursive: true });
  let servidas = 0, fallidas = 0;

  await page.route("**://*.wikimedia.org/**", async (ruta) => {
    const url = ruta.request().url();
    const fichero = join(cache, createHash("sha1").update(url).digest("hex"));
    try {
      let datos;
      if (existsSync(fichero)) datos = readFileSync(fichero);
      else {
        const { stdout } = await ejecuta("curl",
          ["-sS", "-L", "--max-time", "60", "-H", `User-Agent: ${UA}`, url],
          { maxBuffer: 64 * 1024 * 1024, encoding: "buffer" });
        datos = stdout;
        writeFileSync(fichero, datos);
      }
      servidas++;
      await ruta.fulfill({ status: 200, contentType: "image/jpeg", body: datos });
    } catch (e) {
      fallidas++;
      console.log("  no se pudo traer:", url.slice(0, 90), "-", e.message.slice(0, 60));
      await ruta.abort();
    }
  });

  return () => ({ servidas, fallidas });
}
