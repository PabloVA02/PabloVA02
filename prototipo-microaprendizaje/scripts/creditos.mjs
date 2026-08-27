import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";
const ficheros = [];
(function anda(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) anda(p);
    else if (p.endsWith(".ts") || p.endsWith(".tsx")) ficheros.push(p);
  }
})("src");
const vistos = new Map();
const re = /archivo:\s*"((?:[^"\\]|\\.)*)"[\s\S]{0,400}?autor:\s*"((?:[^"\\]|\\.)*)"[\s\S]{0,400}?licencia:\s*"([^"]*)"/g;
for (const f of ficheros) {
  const s = readFileSync(f, "utf8");
  for (const m of s.matchAll(re)) {
    const archivo = m[1].replace(/\\"/g, '"');
    if (!vistos.has(archivo)) vistos.set(archivo, { autor: m[2].replace(/\\"/g, '"'), lic: m[3] });
  }
}
const porLic = {};
for (const [a, { autor, lic }] of vistos) (porLic[lic] ??= []).push({ a, autor });
const claves = Object.keys(porLic).sort((x, y) => porLic[y].length - porLic[x].length);
let s = `# Créditos de las imágenes

Curva usa **${vistos.size} imágenes de Wikimedia Commons**, más las cubiertas de
libro dibujadas para el proyecto, que no están aquí porque son obra propia.

Cada imagen se pide a Commons en el momento de mostrarla: la aplicación no las
almacena ni las redistribuye. Aun así, las licencias Creative Commons obligan a
citar autor y licencia, y este fichero es esa cita. Cada entrada lleva el nombre
exacto del archivo en Commons, que es su identificador: se encuentra en
\`https://commons.wikimedia.org/wiki/File:<nombre>\`.

Los datos salen del propio código —cada imagen guarda su autor, su licencia y su
enlace— y este fichero se regenera con \`node scripts/creditos.mjs\`.

## Lo que no es una imagen de Commons

**El dado de la cabecera** es el emoji de dado en tres dimensiones de **Fluent
Emoji**, de Microsoft (\`dado-3d.ts\`), con **licencia MIT**: permite el uso
comercial y obliga a conservar el aviso de copyright, que es esta línea.

    https://github.com/microsoft/fluentui-emoji

**La llama de la racha** es la animación del emoji de fuego de **Noto Animated
Emoji**, de Google (\`fuego-noto.json\`, del emoji U+1F525). Va bajo **CC BY
4.0**, que permite el uso comercial y obliga a citar la autoría: esta línea es
esa cita, y va también en la pantalla de ajustes de la aplicación. Si algún día
se quitara la atribución habría que quitar también el fichero.

    https://googlefonts.github.io/noto-emoji-animation/

## Resumen por licencia

| licencia | imágenes |
|---|---|
`;
for (const k of claves) s += `| ${k} | ${porLic[k].length} |\n`;
s += `\nLos textos completos de las licencias están en <https://creativecommons.org/licenses/>.\n`;
for (const k of claves) {
  s += `\n## ${k} — ${porLic[k].length} imágenes\n\n`;
  for (const { a, autor } of porLic[k].sort((x, y) => x.a.localeCompare(y.a)))
    s += `- **${a}** — ${autor}\n`;
}
writeFileSync("CREDITOS-IMAGENES.md", s);
console.log(`${vistos.size} imágenes · ${claves.length} licencias distintas · ${(s.length/1024).toFixed(0)} kB`);
