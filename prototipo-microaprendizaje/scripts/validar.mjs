/* ==========================================================================
   Control de calidad de las historias.

       node scripts/validar.mjs

   Con veinte historias, la forma se sostiene sola porque las has escrito de
   una sentada. Con quinientas, no: entran por lotes, las escriben personas
   distintas y en semanas distintas, y lo primero que se desmadra es la
   longitud. Una historia de 700 palabras entre otras de 420 no se nota al
   escribirla, se nota al leer diez seguidas —de repente una se hace larga— y
   para entonces ya hay cincuenta iguales.

   Esto mide lo medible y calla lo demás. No juzga si una historia es buena;
   comprueba que cabe en la forma: cuatro pantallas, dos minutos, un título
   con sujeto delante, un golpe por página como mucho y la ficha de la foto
   completa, que es lo que exige la licencia.

   Sale 1 si hay errores, así que sirve tal cual de gancho en CI.
   ========================================================================== */

import { rolldown } from "rolldown";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

/* --- Los límites. Están aquí arriba para poder discutirlos en un sitio --- */

const LIMITES = {
  titulo: { max: 58 },
  gancho: { min: 40, max: 130 },
  /* El máximo se quedó en 85 cuando `MOLDE.md` subió la entrada a 95-110
     palabras: la portada enseña la entrada ENTERA, y con la medida vieja
     pesaba la mitad que las otras tres pantallas. Con 85 fallaban las 761
     historias, o sea que la regla no medía nada. El mínimo sí se deja en 40 a
     propósito, como dice el molde, para no marcar de golpe las que aún no se
     han pasado a la medida nueva. */
  entrada: { min: 40, max: 110 },
  /* EL RÓTULO YA NO TIENE MEDIDA, y por dos motivos a la vez. Uno: no se
     pinta desde el 27 de agosto —«estamos siempre limitados al texto que
     poner»—, así que no ocupa renglón y no puede pasarse de largo. Dos: desde
     el 28 lo escribe Pablo, y en su formato el título de cada tarjeta es una
     afirmación completa —«El final no llegará por fuego, sino por asfixia»—,
     no una etiqueta de dos palabras. Medirlo con la regla vieja marcaba las
     diecisiete páginas suyas y no señalaba nada. */
  /* LA MEDIDA DE UNA PÁGINA es lo que cabe en la pantalla, y eso lo mide
     `scripts/_mide.mjs` en el móvil de verdad; esto solo pone los extremos.
     Sin banda de imagen —las historias de `soloPortada`— caben unas 190
     palabras, o 165 si la pantalla lleva rayo. El suelo baja de 75 a 45: hay
     pantallas legítimamente cortas, como el «¿Sabías que…?» del Sol, que es
     un aparte y se sostiene solo. */
  pagina: { min: 45, max: 195 },
  /* Y LA HISTORIA ENTERA YA NO TIENE TOPE. Eran 300-480 palabras, o sea los
     dos minutos de cuando los shorts los escribía yo con tres páginas fijas.
     El primer texto que mandó Pablo trae mil ciento cincuenta y seis, y su
     nota es terminante: «si no cabe, se parte, nunca se recorta el texto». Un
     tope aquí solo podría cumplirse recortándoselo. Lo que queda es el suelo,
     que sigue diciendo algo: por debajo de 300 no es una historia. */
  historia: { min: 300 },
  /* LOS NUEVE COLORES DE UN SHORT, y ya no se reparten para variar.

     Eran seis y se elegían como los de las categorías de la estantería:
     cualquiera vale mientras el de al lado sea otro. Pablo lo cambió el 3 de
     septiembre: «si hablas de Ferrari, que es lo más relevante, pues tienes
     que pintar la frase de Ferrari en rojo, y eso hazlo con el resto de
     shorts». O sea que el color lo elige LO QUE CUENTA EL SHORT.

     Con seis no llegaba: no había ningún rojo —y Ferrari, la sangre, la lava y
     el tomate lo piden—, ni un naranja de fuego, ni un azul que fuera azul.
     Entran `--rojo`, `--fuego` y `--azul`, que ya existían o casi, y quedan
     nueve. Cuál va con qué está en `REDACCION.md`, apartado 4 quater.

     Y dos shorts seguidos pueden repetir color: eso antes era un fallo y ahora
     es lo correcto. Si molesta, lo que hay que cambiar es el orden del muro,
     no el color. */
  colores: ["var(--clay)", "var(--ochre)", "var(--sage)", "var(--plum)", "var(--slate)",
            "var(--teal)", "var(--rojo)", "var(--fuego)", "var(--azul)"],
};

/** Lectura media en español, palabras por minuto, para el cálculo de tiempo. */
const PPM = 210;

const palabras = (t) =>
  t
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

/* --- Cargar las historias sin montar la app entera --- */

const carpeta = await mkdtemp(join(tmpdir(), "shorts-"));
const salida = join(carpeta, "shorts.mjs");
/* Dos historias traen su fotografía como fichero propio —`import venusFoto from
   "../fotos/venus-dia.jpg"`—. Eso lo resuelve Vite con su cargador de recursos,
   y rolldown a secas no: intenta leer el JPEG como si fuera código y se planta
   con «stream did not contain valid UTF-8», que deja el validador entero sin
   poder ejecutarse. Aquí solo se leen los textos, así que la imagen se sustituye
   por su ruta y en paz. */
const comoRuta = {
  name: "imagenes-como-ruta",
  resolveId(fuente) {
    return /\.(jpe?g|png|webp|avif|gif|svg)$/i.test(fuente) ? `\0img:${fuente}` : null;
  },
  load(id) {
    return id.startsWith("\0img:") ? `export default ${JSON.stringify(id.slice(5))};` : null;
  },
};
const bundle = await rolldown({ input: "src/shorts.ts", logLevel: "silent", plugins: [comoRuta] });
await bundle.write({ file: salida, format: "esm" });
const { SHORTS } = await import(pathToFileURL(salida).href);
await rm(carpeta, { recursive: true, force: true });

/* --- Revisión --- */

const errores = [];
const avisos = [];
const vistos = new Map();

for (const s of SHORTS) {
  const err = (m) => errores.push(`${s.id}: ${m}`);
  const avi = (m) => avisos.push(`${s.id}: ${m}`);

  if (vistos.has(s.id)) err("el id está repetido");
  vistos.set(s.id, true);
  if (!/^[a-z0-9-]+$/.test(s.id)) err(`el id «${s.id}» debe ir en minúsculas y sin espacios`);

  // El título: sujeto delante y corto. Sin sujeto reconocible, en el pase no
  // hay nada que frene el dedo; largo, se come tres líneas de portada.
  if (s.titulo.length > LIMITES.titulo.max)
    err(`título de ${s.titulo.length} caracteres (máximo ${LIMITES.titulo.max})`);
  if (!/[:,]/.test(s.titulo) && palabras(s.titulo) > 5)
    avi("el título no nombra un sujeto delante («Sujeto: promesa»)");

  /* PORTADA SOLA. Desde el 28 de agosto un short puede estar a medias a
     propósito —foto y título elegidos, el texto lo escribe Pablo— y eso se
     dice con `paginas: []`. A esas no se les puede pedir gancho, entrada ni
     páginas: no es que estén mal escritas, es que todavía no están escritas. */
  const soloPortada = s.bloques.length === 0;

  if (!soloPortada) {
    /* El gancho y la entrada solo se miden SI ESTÁN. Dejaron de ser
       obligatorios el 28 de agosto: la portada no los pinta —lleva la
       fotografía y el título y nada más— y los textos que manda Pablo no
       traen ni uno ni otra, porque su primera tarjeta hace de entrada. Lo que
       no vale es escribirlos mal, y eso sí se sigue midiendo. */
    const g = (s.gancho ?? "").length;
    if (g && (g < LIMITES.gancho.min || g > LIMITES.gancho.max))
      err(`gancho de ${g} caracteres (entre ${LIMITES.gancho.min} y ${LIMITES.gancho.max})`);

    const e = palabras(s.entrada ?? "");
    if (e && (e < LIMITES.entrada.min || e > LIMITES.entrada.max))
      err(`entrada de ${e} palabras (entre ${LIMITES.entrada.min} y ${LIMITES.entrada.max})`);

    /* AQUÍ YA NO SE CUENTAN PÁGINAS, y es a propósito. Las páginas las cuenta
       la app al repartir y dependen del móvil: un tema que en un teléfono
       ocupa nueve pantallas ocupa siete en uno grande, y las dos cosas están
       bien. Ver `.claude/skills/paginado-shorts/SKILL.md`, regla 3.
       
       Lo que sí se puede pedir es que la historia tenga cuerpo: menos de seis
       bloques no es un tema, y más de sesenta probablemente son dos. */
    if (s.bloques.length < 6) err(`tiene ${s.bloques.length} bloques (mínimo 6)`);
    if (s.bloques.length > 60)
      avi(`${s.bloques.length} bloques: ¿no serán dos temas en vez de uno?`);
  }

  if (!LIMITES.colores.includes(s.color)) err(`color «${s.color}» fuera de la paleta`);
  if (!s.categoria) err("sin categoría");

  // La foto es opcional; su ficha, no. Sin autor y licencia no se puede
  // publicar una CC-BY, y sin alt la historia no se puede escuchar.
  if (s.foto) {
    /* De dónde sale la imagen se dice de una de dos maneras, y las dos valen:
       `archivo` es un fichero de Commons y `local` es una imagen nuestra
       importada como recurso. Pedir siempre `archivo` marcaba como rotas las
       dos que van por `local` —Venus y el César de Camuccini—, que están
       perfectas. Lo que no admite alternativa es la ficha: sin autor ni
       licencia no se puede publicar una CC-BY, y sin alt no se puede escuchar. */
    if (!s.foto.archivo && !s.foto.local) err("la foto no dice de dónde sale: ni archivo ni local");
    for (const campo of ["autor", "licencia", "alt"])
      if (!s.foto[campo]) err(`la foto no trae ${campo}`);
  } else if (!s.encargo) {
    err("sin foto y sin encargo: no hay nada que pintar de portada");
  }

  let golpes = 0;
  let rotulos = 0;
  s.bloques.forEach((b, i) => {
    const n = i + 1;
    if (b.b === "rotulo") {
      rotulos++;
      if (!b.texto.trim()) err(`el bloque ${n} es un subtítulo vacío`);
      /* Un subtítulo tiene que llevar algo detrás: la regla 5 del paginado
         dice que no se separa de su primer párrafo, y para eso hace falta que
         exista. */
      if (!s.bloques[i + 1] || s.bloques[i + 1].b === "rotulo")
        err(`el subtítulo ${n} no tiene párrafo detrás`);
    }
    if (b.b === "rayo") {
      golpes++;
      /* Y el rayo no abre pantalla —regla 5—, así que necesita algo delante. */
      if (i === 0) err("la historia empieza por un rayo, y el rayo cierra, no abre");
      /* Los que manda Pablo van de 21 a 30 palabras y están escritos para
         sostenerse sueltos. Por encima de 34 deja de ser una frase que se
         pueda compartir. */
      if (palabras(b.texto) > 34) avi(`el rayo ${n} es demasiado largo para leerse de golpe`);
    }
    if (b.b === "parrafo" && !b.texto.trim()) err(`el bloque ${n} es un párrafo vacío`);
    if (b.b === "lista" && !b.puntos.length) err(`el bloque ${n} es una lista vacía`);
  });
  if (!soloPortada && !rotulos) avi("la historia no tiene ni un subtítulo");

  if (golpes === 0 && !soloPortada)
    avi("ninguna página tiene golpe: cifra o frase, al menos uno");

  if (!soloPortada) {
    const total = palabras(s.entrada ?? "") +
      s.bloques.reduce((n, b) => n + palabras(b.b === "lista" ? b.puntos.join(" ") : b.texto), 0);
    if (total < LIMITES.historia.min)
      err(`${total} palabras en total (mínimo ${LIMITES.historia.min})`);
  }
}

/* --- Duplicados entre historias: con 500 es cuestión de tiempo --- */

const porTitulo = new Map();
for (const s of SHORTS) {
  const clave = s.titulo.toLowerCase();
  if (porTitulo.has(clave)) errores.push(`${s.id}: repite el título de ${porTitulo.get(clave)}`);
  porTitulo.set(clave, s.id);
}

/* --- Resumen --- */

const totales = SHORTS.filter((s) => s.bloques.length).map(
  (s) => palabras(s.entrada ?? "") +
    s.bloques.reduce((n, b) => n + palabras(b.b === "lista" ? b.puntos.join(" ") : b.texto), 0),
);
/* Con el muro vacío no hay media que sacar, y dividir entre cero imprime
   «NaN palabras de media · NaN min», que parece una avería del validador
   justo el día que el cajón está esperando texto a propósito. */
const media = totales.length
  ? Math.round(totales.reduce((a, b) => a + b, 0) / totales.length)
  : 0;
const temas = new Map();
for (const s of SHORTS) temas.set(s.categoria, (temas.get(s.categoria) ?? 0) + 1);

console.log(
  totales.length
    ? `\n${SHORTS.length} historias · ${media} palabras de media · ${(media / PPM).toFixed(1)} min de lectura`
    : "\nNinguna historia escrita todavía: el muro espera el texto de Pablo.",
);
console.log([...temas].map(([t, n]) => `  ${t}: ${n}`).join("\n"));
/* Cuenta las que tienen alguna imagen, no solo las que la tienen en `foto`.
   Las historias se escriben con `fotos: [...]` —una por pantalla— desde hace
   meses, y este contador seguía mirando el campo viejo: decía «0 de 1» de un
   short ilustrado con cuatro fotografías. */
const conFoto = SHORTS.filter((s) => s.foto || s.fotos?.some(Boolean)).length;
const conLasCuatro = SHORTS.filter((s) => s.fotos?.filter(Boolean).length >= 4).length;
console.log(`  con fotografía: ${conFoto}/${SHORTS.length} · con las cuatro: ${conLasCuatro}`);

if (avisos.length) console.log(`\nAvisos (${avisos.length})\n` + avisos.map((a) => `  · ${a}`).join("\n"));
if (errores.length) console.log(`\nErrores (${errores.length})\n` + errores.map((e) => `  ✗ ${e}`).join("\n"));
else console.log("\nSin errores.");

process.exit(errores.length ? 1 : 0);
