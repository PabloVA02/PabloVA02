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
let titulosLargos = 0;
let fotosDudosas = 0;
let total = 0;
const aviso = (id, texto) => { console.log(`  ✗ ${id}: ${texto}`); fallos++; };
/* Un aviso flojo no tumba el validador: señala trabajo pendiente de las tandas
   viejas, no un error de la tanda que se acaba de escribir. Sale solo si se
   pide con --flojos, para que el recuento de siempre siga limpio. */
const flojo = (id, texto, cual) => { if (verFlojos) console.log(`  · ${id}: ${texto}`);
  if (cual === "titulo") titulosLargos++;
  else if (cual === "foto") fotosDudosas++;
  else flojos++; };

for (const ruta of ficheros) {
  const s = readFileSync(ruta, "utf8");
  const bloques = s.split(/\n  \{\n    id: "/).slice(1);
  for (const b of bloques) {
    const id = b.slice(0, b.indexOf('"'));
    total++;

    const titulo = /titulo: "((?:[^"\\]|\\.)*)"/.exec(b)?.[1] ?? "";
    /* Regla 14: el título golpea, no resume. Y regla nueva de Pablo, sin
       excepción: «todos los títulos deben ocupar una línea, nunca más de
       una». Lo que decide si cabe no es cuántas palabras tiene sino cuánto
       mide pintado, así que aquí se cuenta por letras y no por palabras.

       Medido en el navegador con la letra del título: 13,6 puntos por letra.
       El renglón más estrecho que soportamos es el de un móvil de 320, que da
       283 puntos. Como la app encoge el título hasta el 78 % antes de rendirse,
       el tope real son 283 / 0,78 = 363 puntos, o sea 27 letras. Por debajo de
       ahí entra en una línea en cualquier móvil, y lo que se encoge son cuatro
       o cinco puntos porcentuales, que no se ven.

       No se baja más el tope a propósito. Un título de 21 letras cabe de sobra
       pero se queda en insinuación —«bajarse a rascar»— y Pablo pidió lo
       contrario: que se sepa de qué va el short leyendo solo el título. Para
       eso hacen falta letras. */
    if (palabras(titulo) < 2 || palabras(titulo) > 6)
      aviso(id, `título de ${palabras(titulo)} palabras (2-6)`);
    if (titulo.length > 27)
      flojo(id, `título de ${titulo.length} letras: no cabe en una línea (tope 27)`, "titulo");

    const entrada = /entrada:\n\s+"((?:[^"\\]|\\.)*)"/.exec(b)?.[1] ?? "";
    const ne = palabras(entrada);
    /* La entrada mide unas 56 palabras, y esto no es una cifra de gusto: es lo
       que cabe en la portada de hoy. Medía 100 hasta el 27 de agosto y era
       cierto entonces, con una banda de imagen del 28 % y sin el gancho
       pintado. La portada de ahora lleva tres cosas donde llevaba dos —el
       titular, el gancho y el párrafo— y la fotografía ocupa el 42 %: medido
       en un móvil de 430 × 860, al párrafo le quedan seis líneas y media.

       Con 100 palabras el texto se salía de la caja y se pintaba ENCIMA del
       «Seguir». Con 56 llega abajo dejando el margen justo y `--ajuste` se
       queda en 1, que es la señal de que la letra no ha tenido que encoger.
       Ver el bloque «EL SHORT, AJUSTADO» de `src/styles.css`.

       La horquilla es 48-66. Por debajo de 48 la portada deja hueco; por
       encima de 66 la letra empieza a encoger, y entonces esa historia se lee
       más pequeña que la de al lado. */
    if (ne < 44 || ne > 72) aviso(id, `entrada de ${ne} palabras (48-66)`);
    if (ne >= 44 && ne < 48) flojo(id, `entrada de ${ne} palabras: deja hueco abajo (unas 56)`);

    /* Y los pies de foto, que también tienen medida. Van SOBRE la imagen desde
       el 27 de agosto, apoyados en el degradado con el que la banda se
       disuelve en la página, y ese degradado da para dos renglones. Un pie de
       tres se sube por encima de la mitad de la banda y se queda flotando en
       mitad de la fotografía; en la última página, que solo tiene el 22 %, la
       tapa casi entera. Medidos los dos renglones en una pantalla de 430, son
       120 caracteres. */
    for (const [i, pie] of [...b.matchAll(/autor:\n?\s+"((?:[^"\\]|\\.)*)"/g)].entries())
      if (pie[1].length > 140)
        flojo(id, `pie de foto ${i + 1} de ${pie[1].length} letras: tres renglones (tope 140)`);

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

    /* La horquilla la decide el tema. Menos de dos no es un short y más de
       cinco ya no se lee de una sentada. */
    if (paginas.length < 2 || paginas.length > 5)
      aviso(id, `${paginas.length} páginas (deben ser entre 2 y 5)`);
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
    /* EL RÓTULO DE LA ÚLTIMA PÁGINA YA NO TIENE QUE SER «Lo que quedó».
     *
     * Era obligatorio, y con los 761 shorts viejos tenía sentido: contaban un
     * acontecimiento —una batalla, un invento, un naufragio— y la última
     * página era literalmente lo que quedó después. En «¿Cuánto le queda al
     * sol?» sigue siendo el rótulo bueno, porque lo que queda es una enana
     * blanca.
     *
     * En una explicación no. «Por qué llueve» no deja nada detrás: termina en
     * el último eslabón del mecanismo, y llamar a esa página «Lo que quedó»
     * sería mentirle al lector sobre lo que va a encontrar. Pablo lo dijo el
     * 27 de agosto —«no tiene por qué ser cien por cien igual que en los
     * libros, lo adaptas»— y esto es de lo que hay que adaptar.
     *
     * Lo que sí se comprueba es que la última página CIERRE, y eso no lo puede
     * ver un guion: lo mira la regla 5 del molde a mano. Aquí solo queda el
     * aviso leve, para que un rótulo perezoso —«Final», «Conclusión»— cante. */
    const ultima = paginas[paginas.length - 1];
    if (paginas.length >= 2 && /^(final|conclusi[óo]n|el final|resumen)$/i.test(ultima[1]))
      flojo(id, `la última página se titula «${ultima[1]}»: eso no es un rótulo, es una etiqueta`);

    /* Regla 15: el dato es una cifra y la frase corta que la explica. El tope
       eran seis palabras y lo subo a nueve, que es lo que mide el más largo de
       la maqueta aprobada («años mandó en Roma antes de que lo mataran»). Lo
       que se vigila sigue siendo lo mismo: que la frase no se alargue hasta
       volver a ser un resumen. Y no todas las páginas llevan dato: en la
       maqueta la del medio va sin él y el texto llega hasta abajo. */
    for (const [, unidad] of b.matchAll(/unidad: "((?:[^"\\]|\\.)*)"/g))
      if (palabras(unidad) > 9)
        aviso(id, `el dato «${unidad}» pasa de nueve palabras`);

    /* LAS LICENCIAS DE LAS FOTOS.

       El pie de foto dice quién hizo la imagen y con qué licencia, y eso se
       publica: es una afirmación de hecho, no un adorno. Una licencia puesta
       a ojo es una licencia inventada aunque acierte.

       Solo hay dos maneras de justificarla:
         · `pdPorEdad`, para una obra PLANA —cuadro, grabado, miniatura,
           sello— cuyo autor lleva más de setenta años muerto. La foto de una
           obra plana no crea derechos nuevos, así que se justifica sola.
         · `fuente`, la ficha de donde sale la licencia.

       Lo que no vale es dar por hecho que la foto de una estatua o de una
       moneda es libre porque el objeto sea antiguo: el objeto lo será, la
       fotografía tiene su propio autor. */
    for (const m of b.matchAll(/licencia: "([^"]*)"/g)) {
      const lic = m[1];
      const tramo = b.slice(Math.max(0, m.index - 400), m.index + 400);
      if (lic === "Sin verificar") { flojo(id, "foto con licencia sin verificar", "foto"); continue; }
      if (!/pdPorEdad:|fuente:/.test(tramo))
        flojo(id, `foto con licencia «${lic}» sin ficha ni año de dominio público`, "foto");
    }

    /* Regla 2: como mucho dos nombres propios que el lector no reconozca. */
    const cuerpo = [entrada, ...paginas.map((p) => p[2])].join(" ").replace(/<[^>]+>/g, "");
    /* Los nombres que ya aparecen en el título o en el gancho no cuentan como
       frenazo dentro del texto: el lector acaba de leerlos. Desde la regla 14
       el título es un golpe de tres palabras y quien nombra al protagonista es
       el gancho, así que hay que mirar los dos. */
    const gancho = /gancho: "((?:[^"\\]|\\.)*)"/.exec(b)?.[1] ?? "";
    /* Y de paso, su medida. El gancho tiene que caber en DOS líneas: va
       debajo del titular y en negrita, y a tres se come justo lo que necesita
       el párrafo de la portada. Medidas las dos líneas en una pantalla de
       430, son 90 caracteres. */
    if (gancho.length > 90)
      flojo(id, `gancho de ${gancho.length} letras: se va a tres líneas (tope 90)`);
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

console.log(`\n${total} shorts revisados · ${fallos} avisos`
  + (flojos ? ` · ${flojos} ${flojos === 1 ? "aviso leve" : "avisos leves"}` : "")
  + (titulosLargos ? ` · ${titulosLargos} títulos que no caben en una línea` : "")
  + (fotosDudosas ? ` · ${fotosDudosas} fotos con la licencia sin justificar` : ""));
process.exit(fallos ? 1 : 0);
