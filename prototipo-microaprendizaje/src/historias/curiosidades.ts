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

  /* LAS TRES SIGUIENTES SON PORTADA Y NADA MÁS, Y ESO ES LO QUE SE PIDIÓ.

     Pablo, el 28: «ponme la portada así pero de ahora en varios temas: por
     qué los aviones vuelan, por qué llueve, por qué bostezamos. No pongas el
     texto, que eso te lo paso yo ahora; solo quiero ver la portada. Ten en
     cuenta que la portada debe ser bonita, de buena calidad y que se ajuste
     bien a los límites de imagen que tenemos, para que no salga muy cortada y
     quede fea».

     Así que `paginas` va vacía a propósito. No falta nada: falta su texto, y
     lo escribe él.

     CÓMO SE HAN ELEGIDO LAS TRES FOTOGRAFÍAS, que es la parte que pidió.
     El marco de la portada es la pantalla entera —375x812, o sea 0,46 de
     proporción—, que es una vertical muy estrecha. Una foto apaisada normal,
     de 3:2, pierde ahí el setenta por ciento de su ancho, y eso no se ve
     mirando la foto: se ve después, ya recortada y fea. De modo que ninguna
     de estas se ha juzgado entera. Se han bajado las candidatas y se han
     mirado YA RECORTADAS al marco de verdad, con `scripts/recorte.mjs`, que
     se ha escrito para esto. Sobre las quince que se probaron, mandan tres
     cosas: que el asunto caiga dentro de la columna central, que quede sitio
     arriba para el título sin taparle nada, y que del original queden más de
     mil píxeles de ancho después del recorte, para que en una pantalla de
     tres veces la densidad siga sin verse blanda. */
  {
    id: "por-que-vuelan-los-aviones",
    titulo: "Por qué vuelan los aviones",
    categoria: "Ciencia",
    color: "var(--slate)",
    encargo: "El ala desde la ventanilla, entera y limpia, sobre el azul de crucero.",
    fotos: [
      {
        /* De las cinco candidatas de avión era la única con las dos cosas: el
           ala entrando en diagonal por abajo, que deja todo el cielo libre
           para el título, y 4160x3120, o sea 1441 píxeles de ancho después de
           recortar. El 747 visto desde tierra era más espectacular y se quedó
           fuera por eso: 2200 de ancho no dan más que 693 recortados. */
        archivo: "Airplane wing sky and clouds.jpg",
        autor: "El ala de un avión de línea en vuelo de crucero, agosto de 2016. Fotografía de Tobias1984.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Airplane_wing_sky_and_clouds.jpg",
        foco: "50% 50%",
        alt: "El ala gris de un avión cruzando en diagonal la parte baja de la imagen, con el azul intenso del cielo arriba y un manto de nubes blancas al fondo.",
      },
    ],
    paginas: [],
  },
  {
    id: "por-que-llueve",
    titulo: "Por qué llueve",
    categoria: "Ciencia",
    color: "var(--teal)",
    encargo: "Las gotas en el cristal, con la ciudad desenfocada detrás.",
    fotos: [
      {
        /* Las nubes de tormenta se probaron primero y todas fallaban igual:
           recortadas a una vertical estrecha se quedan en una franja de cielo
           gris sin nada dentro. Esta tiene el asunto repartido por toda la
           altura —gotas arriba, gotas abajo— así que el recorte no le quita
           nada, y además es literalmente el tema: agua que se ha condensado
           sobre una superficie fría. Mumbai, la llegada del monzón. */
        archivo: "Rain Droplets.jpg",
        autor: "Gotas de lluvia en una ventana durante la llegada del monzón a Bombay, junio de 2016. Fotografía de Tony5875.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Rain_Droplets.jpg",
        foco: "50% 50%",
        alt: "Un cristal cubierto de gotas de lluvia de todos los tamaños, con los edificios de una ciudad desenfocados al otro lado.",
      },
    ],
    paginas: [],
  },
  {
    id: "por-que-bostezamos",
    titulo: "Por qué bostezamos",
    categoria: "Cuerpo humano",
    color: "var(--ochre)",
    encargo: "Un bostezo entero, de perfil, ocupando la pantalla.",
    fotos: [
      {
        /* Un gato y no una persona a propósito: el bostezo lo hacen todos los
           vertebrados, hasta los peces, y esa es media respuesta a la
           pregunta del título. Puesta ya la foto en el marco, es además la
           que mejor cae: el original es vertical (2136x3216), el perfil se
           queda entero en la columna central y arriba sobra cielo para el
           título. La otra finalista era el autorretrato bostezando de Joseph
           Ducreux, de 1783, que es dominio público y precioso; se quedó fuera
           porque un óleo al lado de la fotografía del Sol cambia el tono de
           la sección. */
        archivo: "Tabby cat-yawning-01.jpg",
        autor: "Un gato atigrado bostezando, abril de 2008. Fotografía de Hisashi.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Tabby_cat-yawning-01.jpg",
        foco: "50% 40%",
        alt: "Un gato atigrado de perfil con la boca abierta de par en par en mitad de un bostezo, los colmillos y la lengua a la vista y el fondo desenfocado.",
      },
    ],
    paginas: [],
  },
];
