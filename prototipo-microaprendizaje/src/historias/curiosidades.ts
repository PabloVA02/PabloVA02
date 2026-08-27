import type { Short } from "../shorts";

/* ==========================================================================
   Curiosidades. VACÍO A PROPÓSITO, ESPERANDO EL TEXTO DE PABLO.

   El 27 de agosto por la noche cambiamos de manera de trabajar, y esto no es
   un borrado: es el hueco donde va lo siguiente.

   Pablo: «vamos a hacer una cosa mejor: primero te preparo yo el texto y te
   lo paso; por lo tanto quita las imágenes y, en base al texto, ponemos las
   imágenes».

   POR QUÉ ES MEJOR, Y NO SOLO DISTINTO. Hasta ahora yo escribía y luego
   buscaba fotografías que ilustraran lo escrito, y ese orden tiene un vicio
   escondido: cuando una foto buena no aparece, la tentación es torcer el
   texto hacia la foto que sí existe. Con el texto cerrado antes de abrir
   Commons, el texto manda y la fotografía obedece. Es el mismo orden que ya
   pedía `MOLDE.md` para las pantallas —«primero se cuenta la historia lo
   mejor posible, y después se ajusta»— llevado un paso más atrás.

   QUÉ HAY QUE HACER CUANDO LLEGUE EL TEXTO DE PABLO

   1. Se lee entero y se corta en pantallas por donde deje algo colgando. El
      número de páginas es un resultado, no una decisión previa.
   2. Se pasa por `MOLDE.md`: la respuesta primero, frases de quince a
      veinticinco palabras, ninguna de más de treinta y cinco, los términos
      explicados en la frase en que aparecen, tres cifras por pantalla como
      mucho. Si algo choca con lo que escribió Pablo, MANDA LO QUE ESCRIBIÓ
      PABLO: se le dice y se le pregunta, no se le corrige por la espalda.
   3. Una fotografía por pantalla, buscada YA con el texto delante, y cada
      una tiene que enseñar algo que su párrafo no puede. Hoja de contacto
      antes de elegir: `scripts/foto.mjs buscar` y `scripts/contacto.mjs`.
   4. Ficha con autor y licencia comprobados, nunca de memoria:
      `node scripts/foto.mjs ficha "File:…"`.

   LO QUE HABÍA AQUÍ, POR SI HACE FALTA RESCATARLO. Cuatro shorts escritos y
   reescritos durante el día —«¿Cuánto le queda al sol?», «Por qué llueve»,
   «Por qué vuelan los aviones» y «Por qué el mar es salado»—, con sus quince
   fotografías de Commons ya fichadas. Están enteros en el commit `931c152`, y
   sus fotografías siguen siendo buenas aunque el texto cambie:

       git show 931c152:prototipo-microaprendizaje/src/historias/curiosidades.ts

   La maqueta no se ha tocado y sigue lista: banda de imagen elástica, sin
   rótulos, la letra a una sola medida. En cuanto haya texto, se ve.
   ========================================================================== */

/* UNA SOLA HISTORIA, Y ES UNA MUESTRA. Está aquí para poder mirar la portada
   nueva —fotografía a sangre y el título encima, sin nada más—, que es lo que
   Pablo pidió el 27 por la noche: «pon la imagen y el título solo, de momento,
   y las demás páginas con el texto». Sin una historia dentro no hay portada
   que juzgar.

   Sale del commit 931c152 tal cual, texto y fotografías. En cuanto llegue el
   texto de Pablo, esta se sustituye: el suyo manda. */
export const CURIOSIDADES: Short[] = [
  {
    id: "al-sol-le-queda-media-vida",
    titulo: "¿Cuánto le queda al sol?",
    gancho:
      "No se apagará como una bombilla: se hinchará hasta tragarse la órbita de la Tierra.",
    categoria: "Ciencia",
    color: "var(--ochre)",
    encargo: "El disco solar entero en ultravioleta, con la corona erizada de arcos.",
    fotos: [
      {
        archivo: "Solar Orbiter’s widest high-res view of the Sun ESA508430.jpg",
        autor:
          "La corona solar en ultravioleta: doscientas tomas de la sonda Solar Orbiter cosidas en una, 9 de marzo de 2025. Agencia Espacial Europea.",
        licencia: "CC BY-SA 3.0 igo",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Solar_Orbiter%E2%80%99s_widest_high-res_view_of_the_Sun_ESA508430.jpg",
        foco: "50% 50%",
        alt: "El disco del Sol en amarillo cálido, con la corona erizada de arcos brillantes alrededor del ecuador y una franja oscura cerca del polo sur.",
      },
      /* Las tres de dentro las puse yo y son provisionales hasta que Pablo
         mande las suyas. Las tres pasan el examen de la foto: cada una enseña
         justo lo que cuenta su página. */
      {
        archivo: "NSF’s Inouye Solar Telescope First Light (NSO-DKIST-firstlight-full).jpg",
        autor:
          "Cada celda de gas hirviendo del Sol mide como un país. Telescopio Solar Inouye, 2020. NSO/NSF/AURA.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:NSF%E2%80%99s_Inouye_Solar_Telescope_First_Light_(NSO-DKIST-firstlight-full).jpg",
        foco: "50% 50%",
        alt: "La superficie del Sol vista muy de cerca: celdas doradas apretadas como panales, separadas por surcos oscuros.",
      },
      {
        archivo: "The Blue Marble, AS17-148-22727.jpg",
        autor:
          "La Tierra entera iluminada, fotografiada por la tripulación del Apolo 17 camino de la Luna el 7 de diciembre de 1972. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:The_Blue_Marble,_AS17-148-22727.jpg",
        foco: "50% 50%",
        alt: "La Tierra sobre el negro del espacio, con África y la Antártida a la vista bajo remolinos de nubes blancas.",
      },
      {
        archivo: "NGC7293 (2004).jpg",
        autor:
          "La nebulosa de la Hélice: lo que dejó al morir una estrella como el Sol. Hubble, 2004. NASA y ESA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:NGC7293_(2004).jpg",
        foco: "50% 50%",
        alt: "Un anillo enorme de gas azul y anaranjado sobre el fondo negro del espacio, con un punto blanco diminuto en el centro.",
      },
    ],
    entrada:
      "Al Sol le queda más o menos la mitad: lleva ardiendo cuatro mil seiscientos millones de años y tiene cuerda para otros cinco mil. En una vida humana, cuarenta y tantos. Lo sabemos desde 1938, cuando el físico Hans Bethe explicó de qué vive. Pero lo inquietante no es cuándo se apagará, sino cuándo dejará de servirnos.",
    paginas: [
      {
        rotulo: "Un fuego que engorda",
        texto:
          "Para saber cuánto le queda hay que saber qué quema, y no es fuego. En el centro del Sol la presión es tan bestia que los núcleos de hidrógeno se aplastan unos contra otros hasta fundirse en helio. Cada fusión suelta un golpe de energía que tarda cien mil años en abrirse camino hasta la superficie. Lo que importa es la ceniza: el helio pesa más que el hidrógeno, se va acumulando en el centro y lo aprieta todavía más, así que el horno quema cada vez más fuerte. El Sol de hoy alumbra un tercio más que el que vio nacer a la Tierra. Y sigue subiendo. Ese engorde tan lento parece inofensivo, pero es una cuenta atrás.",
      },
      {
        rotulo: "Nos toca antes",
        texto:
          "Y la cuenta atrás no acaba donde uno pensaría. Al Sol le quedan cinco mil millones de años, pero a nosotros nos queda la quinta parte. Dentro de unos mil millones, ese brillo de más bastará para que los océanos empiecen a evaporarse en serio. Y aquí viene la parte fea: el vapor de agua atrapa calor. Cuanta más agua suba al cielo, más se calentará todo, y cuanto más se caliente, más agua subirá. La Tierra no va a arder. Se va a secar, girando tan tranquila alrededor de un sol que desde fuera seguirá pareciendo amable. De todo el tiempo que este planeta tenía para la vida, cuatro quintas partes ya han pasado.",
      },
      {
        rotulo: "El último acto",
        texto:
          "Lo que viene después ya no es problema nuestro: es un espectáculo. Cuando el núcleo agote el hidrógeno, el Sol hará algo que suena contradictorio: el centro se encogerá y las capas de fuera se hincharán muchísimo. Se convertirá en una gigante roja que se tragará a Mercurio y a Venus. Con la Tierra la cosa está tan justa que puede acabar de las dos maneras. Al final soltará sus capas al espacio y quedará el corazón desnudo, una brasa del tamaño de nuestro planeta que se irá enfriando durante billones de años. Para entonces hará muchísimo que aquí abajo no queda nadie a quien alumbrar.",
      },
    ],
  },
];
