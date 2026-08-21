/**
 * Escribe un libro entero de una vez: páginas, ficha, retirada del texto
 * viejo, meta regenerada y medición.
 *
 *   node scripts/libro-entero.mjs <carpeta> <id>
 *
 * Espera dos ficheros en la carpeta: `<id>.json` con las páginas y
 * `f-<id>.json` con la ficha. Es exactamente la secuencia del apartado
 * 2 quater de REDACCION.md, en el orden que importa, para que escribir
 * ciento treinta libros no sean seiscientos comandos.
 *
 * Si el libro no tenía texto autogenerado —porque nunca lo tuvo o porque ya
 * se retiró—, ese paso se salta sin quejarse.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const [carpeta, id] = process.argv.slice(2);
if (!carpeta || !id) {
  console.error("uso: node scripts/libro-entero.mjs <carpeta> <id>");
  process.exit(1);
}

const borrador = join(carpeta, `${id}.json`);
const ficha = join(carpeta, `f-${id}.json`);
for (const f of [borrador, ficha]) {
  if (!existsSync(f)) {
    console.error(`falta ${f}`);
    process.exit(1);
  }
}

const raiz = new URL("..", import.meta.url).pathname;
const corre = (cmd, args, tolera = false) => {
  try {
    const salida = execFileSync(cmd, args, { cwd: raiz, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    process.stdout.write(salida);
  } catch (e) {
    process.stdout.write(e.stdout || "");
    if (!tolera) {
      process.stderr.write(e.stderr || "");
      process.exit(1);
    }
  }
};

corre("node", ["scripts/mete-libro.mjs", borrador]);
corre("node", ["scripts/ficha-libro.mjs", ficha]);
corre("node", ["scripts/retira-viejo.mjs", id], true);
corre("npx", ["tsx", "scripts/generar-meta.mjs"]);
const constante = JSON.parse(execFileSync("cat", [borrador], { encoding: "utf8" })).const;
corre("node", ["scripts/medir-paginas.mjs", constante, "--detalle"]);
