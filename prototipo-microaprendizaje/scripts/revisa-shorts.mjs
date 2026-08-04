/* Revisa los shorts contra el molde de src/historias/MOLDE.md.
   Uso:  npx tsx scripts/revisa-shorts.mjs [fichero.ts ...]
   Sin argumentos revisa todos. Devuelve 1 si algo falla. */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/historias";
const ficheros = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync(DIR).filter((f) => f.endsWith(".ts")).map((f) => join(DIR, f));

const palabras = (t) => (t.replace(/<[^>]+>/g, "").match(/\S+/g) ?? []).length;

/* Los nombres que el lector reconoce sin haber estudiado nada no cuentan como
   frenazo. La lista es corta a propósito: si hay que añadir uno cada semana,
   es que se están colando nombres de más. */
const CONOCIDOS = new Set([
  "España","Roma","Europa","América","Asia","África","Francia","Alemania","Italia",
  "Inglaterra","Portugal","Rusia","China","Japón","Egipto","Grecia","Londres","París",
  "Berlín","Moscú","Madrid","Barcelona","Nueva","York","Estados","Unidos","Tierra",
  "Luna","Sol","Marte","Venus","Saturno","Júpiter","Mercurio","Dios","Jesús","Cristo",
  "Biblia","Navidad","Senado","Mediterráneo","Atlántico","Pacífico","Internet",
  "Segunda","Primera","Guerra","Mundial","Civil","Antiguo","Nuevo","Testamento",
  "Evangelio","Papá","Noel","Estado","Gran","Nobel","Occidente","Oriente","Norte","Sur",
  "Reyes","Magos","Iglesia","Antártida","Everest","Titanic","Sáhara","Amazonas","Himalaya",
  "Universidad","Congreso","Gobierno","Corte","Real","Academia","Cruz","Roja","Olímpicos",
  "Juegos","Renacimiento","Edad","Media","Revolución","Francesa","Industrial","República",
  "Bélgica","Holanda","Suiza","Austria","Polonia","Suecia","Noruega","Dinamarca","Finlandia",
  "Grecia","Turquía","Irán","Irak","Israel","India","Corea","Vietnam","Australia","Canadá",
  "México","Brasil","Argentina","Chile","Perú","Colombia","Cuba","Marruecos","Argelia",
  "Ucrania","Hungría","Chequia","Rumanía","Bulgaria","Serbia","Croacia","Bosnia","Kosovo",
  "Filipinas","Indonesia","Tailandia","Pakistán","Afganistán","Siria","Líbano","Jordania",
  "Cataluña","Galicia","Andalucía","Valencia","Sevilla","Bilbao","Zaragoza","Málaga",
  "Vasco","País","Varsovia","Viena","Praga","Lisboa","Roma","Milán","Nápoles","Venecia",
  "Hollywood","Broadway","Silicon","Valley","Wall","Street","Alcatraz","Vaticano",
  "Persia","Mesopotamia","Babilonia","Judea","Galilea","Belén","Jerusalén","Alejandría",
  "Génesis","Adán","Eva","Noé","Moisés","Mateo","Marcos","Lucas","Juan","Pedro","Pablo",
  "Franco","Hitler","Stalin","Napoleón","Colón","Cervantes","Picasso","Einstein","Darwin",
  "Newton","Galileo","Shakespeare","Mozart","Beethoven","Leonardo","Miguel","Ángel",
  "Nilo","Danubio","Támesis","Sena","Ebro","Rin","Ganges","Cleopatra","Ptolomeo",
  "Ciencias","Dunkerque","Liberia","Birmania","Somalia","Sicilia","Mesina","Groenlandia",
  "Islandia","Escocia","Gales","Irlanda","Baviera","Prusia","Nevada","Jersey","Seattle",
  "Melchor","Gaspar","Baltasar","Sagan","Armstrong","Elcano","Magallanes","Laika",
  "Frankenstein","Copenhague","Michoacán",
  "Manhattan","Brooklyn","Haití","Jamaica","Alabama","Montecarlo","Mónaco",
  "Terranova","Halloween","Escandinavia","Virginia",
  "Mancha","Ginebra","Aral","Sudáfrica","Cabo","Indiana","Murano",
  "Malí","Tombuctú","Ecuador","Alpes","Ártico","Nepal","Tíbet",
  "Crimea","Siberia","Andes","Amazonas","Congreso",
  "Möbius","Vía","Láctea","Oriente","Próximo",
  "Castilla","Aragón","Navarra","Canarias","Baleares","Caribe","Antigüedad","Indias",
  "Valladolid","Salamanca","Granada","Toledo","Córdoba","Coruña","Cádiz","Cantabria",
  "Bretaña","Kansas","Texas","Florida","Boston","Chicago","Washington","Atlanta","Detroit",
  "Nápoles","Florencia","Sicilia","Baviera","Normandía","Yemen","Etiopía","Kenia","Nigeria",
  "Organización","Salud","Naciones","Unidas","Supremo","Tribunal","Constitución","Cortes",
  "Oxford","Cambridge","Sorbona","Louvre","Prado","Smithsonian","Vaticana","Sixtina",
]);

let fallos = 0;
let total = 0;
const aviso = (id, texto) => { console.log(`  ✗ ${id}: ${texto}`); fallos++; };

for (const ruta of ficheros) {
  const s = readFileSync(ruta, "utf8");
  const bloques = s.split(/\n  \{\n    id: "/).slice(1);
  for (const b of bloques) {
    const id = b.slice(0, b.indexOf('"'));
    total++;

    const titulo = /titulo: "((?:[^"\\]|\\.)*)"/.exec(b)?.[1] ?? "";
    if (palabras(titulo) > 9) aviso(id, `título de ${palabras(titulo)} palabras (máx. 8-9)`);

    const entrada = /entrada:\n\s+"((?:[^"\\]|\\.)*)"/.exec(b)?.[1] ?? "";
    const ne = palabras(entrada);
    if (ne < 53 || ne > 72) aviso(id, `entrada de ${ne} palabras (53-72)`);
    /* Regla 1 del molde: situar. Una entrada que no trae ni año ni siglo ni una
       referencia temporal deja al lector sin suelo. */
    if (!/\b(1[0-9]{3}|20[0-9]{2}|[1-9][0-9]{0,2} (a\. C\.|antes de Cristo)|siglo [IVX]+|hace [\wáéíóú ]{0,30}(mil|millones|siglos|años))/i.test(entrada))
      aviso(id, "la entrada no sitúa en el tiempo");

    const paginas = [...b.matchAll(/rotulo: "([^"]*)",\n\s+texto:\n\s+"((?:[^"\\]|\\.)*)"/g)];
    if (paginas.length !== 3) aviso(id, `${paginas.length} páginas (deben ser 3)`);
    paginas.forEach(([, rotulo, texto], i) => {
      const n = palabras(texto);
      if (n < 90 || n > 116) aviso(id, `página ${i + 1} de ${n} palabras (90-116)`);
      if (palabras(rotulo) > 4) aviso(id, `rótulo «${rotulo}» de más de 4 palabras`);
    });
    if (paginas.length === 3 && !/^Lo que qued[óa]$/.test(paginas[2][1]))
      aviso(id, `la página 3 se titula «${paginas[2][1]}» y debería ser «Lo que quedó»`);

    /* Regla 6: el destacado solo va en las páginas 1 y 2. */
    const trozoP3 = b.slice(b.lastIndexOf('rotulo: "Lo que qued'));
    if (/destacado:/.test(trozoP3)) aviso(id, "la página 3 lleva destacado");

    /* Regla 2: como mucho dos nombres propios que el lector no reconozca. */
    const cuerpo = [entrada, ...paginas.map((p) => p[2])].join(" ").replace(/<[^>]+>/g, "");
    const delTitulo = new Set(titulo.match(/[A-ZÁÉÍÓÚÑ][a-zá-úüñ]{2,}/g) ?? []);
    /* Un nombre de varias palabras —Juan Sebastián Elcano— es UN frenazo, no
       tres, así que primero se juntan las mayúsculas seguidas. */
    const propios = new Set(
      (cuerpo.match(/(?<![.:;!?»)]\s|^|«|— |\n)\b[A-ZÁÉÍÓÚÑ][a-zá-úüñ]{2,}(?: (?:de |del |la )?[A-ZÁÉÍÓÚÑ][a-zá-úüñ]{2,})*/g) ?? [])
        .map((x) => x.trim())
        .filter((x) => !x.split(" ").every((w) => CONOCIDOS.has(w) || delTitulo.has(w))),
    );
    /* Un apellido suelto que ya forma parte de un nombre completo contado
       antes es la misma persona, no un frenazo nuevo. */
    for (const p of [...propios])
      if ([...propios].some((q) => q !== p && q.split(" ").includes(p))) propios.delete(p);
    if (propios.size > 2)
      aviso(id, `${propios.size} nombres propios poco conocidos: ${[...propios].join(", ")}`);

    /* Erratas */
    for (const t of [entrada, ...paginas.map((p) => p[2])]) {
      if (/ {2}/.test(t)) aviso(id, "doble espacio");
      const rep = /\b(\w{3,}) \1\b/i.exec(t.replace(/<[^>]+>/g, ""));
      if (rep && rep[1].toLowerCase() !== "de") aviso(id, `palabra repetida: «${rep[0]}»`);
      if (t && !/[.!?»]$/.test(t.trim())) aviso(id, "no termina en punto");
    }
  }
}

console.log(`\n${total} shorts revisados · ${fallos} avisos`);
process.exit(fallos ? 1 : 0);
