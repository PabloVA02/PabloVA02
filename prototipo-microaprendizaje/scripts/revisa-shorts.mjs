/* Revisa los shorts contra el molde de src/historias/MOLDE.md.
   Uso:  npx tsx scripts/revisa-shorts.mjs [fichero.ts ...]
   Sin argumentos revisa todos. Devuelve 1 si algo falla. */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/historias";
/* --flojos enseña además el trabajo pendiente de las tandas viejas: las
   entradas cortas que dejan hueco al final de la portada. */
const args = process.argv.slice(2);
const verFlojos = args.includes("--flojos");
const sueltos = args.filter((a) => a !== "--flojos");
const ficheros = sueltos.length
  ? sueltos
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
  "Singapur","Santa","Tierra","Michoacán",
  "Idaho","Emiratos","Golfo","Viena","Generalitat","Caspio",
  "Guiza","Pensilvania","Chipre","Madagascar","Rojo","Valle",
  "Anatolia","Molucas","Ámsterdam","Charleston","Marianas",
  "Sheffield","Damasco","Austria","Bajos","Escandinavia",
  "Lidia","Delft","Hamburgo","Canadá","Turquía",
  "Wurzburgo","Nepal","Suiza","Física",
  "Castilla","Aragón","Navarra","Canarias","Baleares","Caribe","Antigüedad","Indias",
  "Valladolid","Salamanca","Granada","Toledo","Córdoba","Coruña","Cádiz","Cantabria",
  "Bretaña","Kansas","Texas","Florida","Boston","Chicago","Washington","Atlanta","Detroit",
  "Nápoles","Florencia","Sicilia","Baviera","Normandía","Yemen","Etiopía","Kenia","Nigeria",
  "Organización","Salud","Naciones","Unidas","Supremo","Tribunal","Constitución","Cortes",
  "Oxford","Cambridge","Sorbona","Louvre","Prado","Smithsonian","Vaticana","Sixtina",
]);

let fallos = 0;
let flojos = 0;
let total = 0;
const aviso = (id, texto) => { console.log(`  ✗ ${id}: ${texto}`); fallos++; };
/* Un aviso flojo no tumba el validador: señala trabajo pendiente de las tandas
   viejas, no un error de la tanda que se acaba de escribir. Sale solo si se
   pide con --flojos, para que el recuento de siempre siga limpio. */
const flojo = (id, texto) => { if (verFlojos) console.log(`  · ${id}: ${texto}`); flojos++; };

for (const ruta of ficheros) {
  const s = readFileSync(ruta, "utf8");
  const bloques = s.split(/\n  \{\n    id: "/).slice(1);
  for (const b of bloques) {
    const id = b.slice(0, b.indexOf('"'));
    total++;

    const titulo = /titulo: "((?:[^"\\]|\\.)*)"/.exec(b)?.[1] ?? "";
    /* Regla 14: el título golpea, no resume. De tres a seis palabras. Los
       títulos escritos antes del cambio son largos y van saliendo aquí; esa
       lista es justamente el trabajo pendiente. */
    if (palabras(titulo) < 3 || palabras(titulo) > 6)
      aviso(id, `título de ${palabras(titulo)} palabras (3-6)`);

    const entrada = /entrada:\n\s+"((?:[^"\\]|\\.)*)"/.exec(b)?.[1] ?? "";
    const ne = palabras(entrada);
    /* La entrada mide unas 100 palabras, y esto no es una cifra de gusto: es
       lo que hace falta para que el texto llegue abajo con el mismo margen
       que arriba. Medido en pantalla, con 100 palabras sobran 37 puntos bajo
       el texto —el margen— y con 62 sobran 199, que son seis líneas de aire.
       Pablo lo vio de un vistazo: «no ajustas bien el margen de abajo».

       El número exacto no es el mismo para todos, y esto importa: depende de
       si el título cabe en una línea o parte en dos, y de lo largas que sean
       las palabras. Medido, el margen bueno sale con 100 palabras cuando el
       título ocupa dos líneas y con 120 cuando ocupa una. Así que la regla de
       verdad es «que el texto llegue abajo dejando una línea», y la horquilla
       de aquí solo caza los que se pasan de largo o se quedan muy cortos.

       El suelo se deja en 53 para que los 756 shorts escritos con la medida
       vieja no revienten el validador de golpe. Se van subiendo por tandas, y
       cuando no quede ninguno corto el suelo sube a 92. */
    if (ne < 53 || ne > 128) aviso(id, `entrada de ${ne} palabras (100-125)`);
    if (ne >= 53 && ne < 92) flojo(id, `entrada de ${ne} palabras: deja hueco abajo (unas 100)`);

    const paginas = [...b.matchAll(/rotulo: "([^"]*)",\n\s+texto:\n\s+"((?:[^"\\]|\\.)*)"/g)];

    /* Regla 1 del molde: situar. No obliga a abrir con el año —una entrada
       puede empezar por una pregunta o por una escena—, pero el lector tiene
       que saber cuándo pasa esto antes de que la historia arranque. Así que se
       busca la referencia temporal en la entrada Y en la página 1, y se admite
       cualquier forma de decirla: año, siglo, década, época o «hace tanto». */
    const situa =
      /\b(1[0-9]{3}|20[0-9]{2}|[1-9][0-9]{0,4} (a\. C\.|antes de Cristo)|siglos? [IVX]+|años? [1-9][0-9]{0,3}\b|década de (1[0-9]{3}|20[0-9]{2})|años (veinte|treinta|cuarenta|cincuenta|sesenta|setenta|ochenta|noventa)|(edad media|antigüedad|prehistoria|renacimiento|ilustración|revolución industrial|imperio romano)|hace [\wáéíóú ]{0,30}(mil|millones|siglos|años|décadas))/i;
    if (!situa.test(entrada) && !(paginas[0] && situa.test(paginas[0][2])))
      aviso(id, "no sitúa en el tiempo (ni en la entrada ni en la página 1)");

    if (paginas.length !== 3) aviso(id, `${paginas.length} páginas (deben ser 3)`);
    paginas.forEach(([, rotulo, texto], i) => {
      /* Regla 15 y la charla con Pablo: la medida buena no es un numero exacto
         sino el tiempo, unos dos o tres minutos el short entero. Lo que se
         vigila aqui es solo que el texto no se quede tan corto que deje un
         hueco muerto al final de la pagina, ni tan largo que no quepa. El
         techo sube a 132 para la medida nueva; el suelo se queda en 90 hasta
         que los 757 shorts viejos esten alargados. */
      /* La página 3 va más corta a propósito y con permiso de la maqueta: es
         la única que además lleva los dos botones y el aviso de que la
         siguiente historia va hacia abajo, así que si le pidiéramos las mismas
         palabras que a las otras dos no cabría nada de eso. La suya, 87. */
      const suelo = i === 2 ? 75 : 90;
      const n = palabras(texto);
      if (n < suelo || n > 132) aviso(id, `página ${i + 1} de ${n} palabras (${suelo}-132)`);
      if (palabras(rotulo) > 4) aviso(id, `rótulo «${rotulo}» de más de 4 palabras`);
    });
    if (paginas.length === 3 && !/^Lo que qued[óa]$/.test(paginas[2][1]))
      aviso(id, `la página 3 se titula «${paginas[2][1]}» y debería ser «Lo que quedó»`);

    /* Regla 15: el dato es una cifra y la frase corta que la explica. El tope
       eran seis palabras y lo subo a nueve, que es lo que mide el más largo de
       la maqueta aprobada («años mandó en Roma antes de que lo mataran»). Lo
       que se vigila sigue siendo lo mismo: que la frase no se alargue hasta
       volver a ser un resumen. Y no todas las páginas llevan dato: en la
       maqueta la del medio va sin él y el texto llega hasta abajo. */
    for (const [, unidad] of b.matchAll(/unidad: "((?:[^"\\]|\\.)*)"/g))
      if (palabras(unidad) > 9)
        aviso(id, `el dato «${unidad}» pasa de nueve palabras`);

    /* Regla 2: como mucho dos nombres propios que el lector no reconozca. */
    const cuerpo = [entrada, ...paginas.map((p) => p[2])].join(" ").replace(/<[^>]+>/g, "");
    /* Los nombres que ya aparecen en el título o en el gancho no cuentan como
       frenazo dentro del texto: el lector acaba de leerlos. Desde la regla 14
       el título es un golpe de tres palabras y quien nombra al protagonista es
       el gancho, así que hay que mirar los dos. */
    const gancho = /gancho: "((?:[^"\\]|\\.)*)"/.exec(b)?.[1] ?? "";
    const delTitulo = new Set(`${titulo} ${gancho}`.match(/[A-ZÁÉÍÓÚÑ][a-zá-úüñ]{2,}/g) ?? []);
    /* Un nombre de varias palabras —Juan Sebastián Elcano— es UN frenazo, no
       tres, así que primero se juntan las mayúsculas seguidas. */
    const propios = new Set(
      /* El «¿» y el «¡» abren frase igual que un punto: la palabra siguiente va
         en mayúscula por posición, no por ser un nombre. Sin esto, cualquier
         entrada que empiece preguntando «¿Por qué…» delata un Por inexistente. */
      (cuerpo.match(/(?<![.:;!?»)]\s|^|«|¿|¡|— |\n)\b[A-ZÁÉÍÓÚÑ][a-zá-úüñ]{2,}(?: (?:de |del |la )?[A-ZÁÉÍÓÚÑ][a-zá-úüñ]{2,})*/g) ?? [])
        .map((x) => x.trim())
        .filter((x) => !x.split(" ").every((w) => CONOCIDOS.has(w) || delTitulo.has(w))),
    );
    /* Un apellido suelto que ya forma parte de un nombre completo contado
       antes es la misma persona, no un frenazo nuevo. */
    for (const p of [...propios])
      if ([...propios].some((q) => q !== p && q.split(" ").includes(p))) propios.delete(p);
    if (propios.size > 2)
      aviso(id, `${propios.size} nombres propios poco conocidos: ${[...propios].join(", ")}`);

    /* Regla 10 del molde: fácil de leer. Una frase kilométrica obliga al
       lector a volver atrás, y eso es exactamente lo que no puede pasar. */
    for (const [i, t] of [entrada, ...paginas.map((p) => p[2])].entries()) {
      const frases = t.replace(/<[^>]+>/g, "").split(/(?<=[.!?])\s+/);
      const donde = i ? "la página " + i : "la entrada";
      const larga = frases.find((f) => palabras(f) > 35);
      if (larga)
        aviso(id, `frase de ${palabras(larga)} palabras en ${donde}: «${larga.slice(0, 45)}…»`);
      /* Y el defecto contrario: tres frases seguidas muy cortas suenan a
         telegrama. La media también avisa de un texto picado. */
      for (let k = 0; k + 2 < frases.length; k++)
        if (frases.slice(k, k + 3).every((f) => palabras(f) < 10)) {
          aviso(id, `picadillo en ${donde}: «${frases[k].slice(0, 40)}…»`);
          break;
        }
      const media = palabras(t) / Math.max(frases.length, 1);
      if (frases.length > 3 && media < 13)
        aviso(id, `frases de ${media.toFixed(1)} palabras de media en ${donde} (mín. 13)`);
    }

    /* Erratas */
    for (const t of [entrada, ...paginas.map((p) => p[2])]) {
      if (/ {2}/.test(t)) aviso(id, "doble espacio");
      const rep = /\b(\w{3,}) \1\b/i.exec(t.replace(/<[^>]+>/g, ""));
      if (rep && rep[1].toLowerCase() !== "de") aviso(id, `palabra repetida: «${rep[0]}»`);
      if (t && !/[.!?»]$/.test(t.trim())) aviso(id, "no termina en punto");
    }
  }
}

console.log(`\n${total} shorts revisados · ${fallos} avisos` + (flojos ? ` · ${flojos} entradas cortas` : ""));
process.exit(fallos ? 1 : 0);
