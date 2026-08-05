import type { Short } from "../shorts";

/* ==========================================================================
   Los virus informáticos.

   Programas que se copian solos y que casi nadie sabe cómo funcionan por
   dentro. El tema se estropea si se convierte en lista de amenazas o en
   consejos de seguridad.

   La regla del tema: cada short cuenta UN INCIDENTE CONCRETO CON FECHA y
   explica el mecanismo paso a paso antes de sacar la moraleja. El daño se
   atribuye siempre a algo verificable, no a la maldad genérica de nadie.
   ========================================================================== */

export const VIRUS_INFORMATICOS: Short[] = [
  {
    id: "el-primer-gusano",
    titulo: "El primer virus de internet",
    gancho: "Un estudiante quería medir cuántos ordenadores había conectados. Un error de cálculo colapsó la red entera.",
    categoria: "Tecnología",
    color: "var(--slate)",
    encargo: "Terminal de ordenador de 1988 con líneas de texto verde sobre fondo negro.",
    entrada:
      "Estados Unidos, noviembre de 1988. Internet es todavía una red de universidades y centros militares con unos sesenta mil ordenadores conectados. No hay contraseñas serias ni programas que vigilen nada, porque a nadie se le ha ocurrido que el ataque pueda venir de dentro. Los administradores se conocen entre ellos y se llaman por teléfono cuando falla algo. Un estudiante de posgrado suelta un programa que se copia solo de máquina en máquina para contar cuántas hay. El programa lleva un error de cálculo en una sola decisión, y en pocas horas deja inservible una décima parte de la red. Nunca había pasado nada parecido.",
    paginas: [
      {
        rotulo: "Copiarse solo",
        texto:
          "Un gusano informático es un programa que se copia a otros ordenadores por su cuenta, sin que nadie lo abra. Se diferencia de un virus en eso, porque un virus necesita que alguien ejecute un fichero infectado. Aquel programa entraba aprovechando tres fallos conocidos de los sistemas de la época, ninguno de ellos secreto. Uno era un servicio de correo mal configurado y otro era una lista de contraseñas fáciles de adivinar. El programa no borraba nada ni robaba nada, y su autor había previsto que pasara desapercibido. Para evitar copias repetidas, preguntaba a cada máquina si ya estaba infectada antes de instalarse.",
        destacado: { tipo: "frase", frase: "Un virus necesita que alguien abra algo; un gusano no." },
      },
      {
        rotulo: "El error",
        texto:
          "El autor pensó que alguien podría defenderse contestando siempre que sí a esa pregunta. Para evitarlo, decidió que una de cada siete veces el programa se instalara igualmente. Esa proporción resultó ser altísima, porque cada máquina recibía cientos de intentos de copia por minuto. Los ordenadores acabaron ejecutando decenas de copias del mismo programa a la vez y se pararon. No se estropeó nada físicamente, y simplemente no quedaba capacidad para hacer ningún trabajo útil. Varias universidades se desconectaron de la red durante días para poder limpiar sus máquinas con calma.",
        destacado: { tipo: "cifra", cifra: "6000", unidad: "ordenadores quedaron inservibles" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la primera condena de la historia por un delito informático de ese tipo en Estados Unidos. El autor recibió tres años de libertad condicional, una multa y muchas horas de trabajo comunitario. Quedó también el primer equipo de respuesta a emergencias informáticas, creado a las pocas semanas del incidente. Hoy hay uno de esos equipos en casi todos los países y en casi todas las empresas grandes. Y quedó una lección que se repite en cada incidente grande desde entonces, porque el daño no vino de la maldad. Vino de un cálculo mal hecho en un programa que su autor creía inofensivo.",
      },
    ],
  },
  {
    id: "el-virus-que-pedia-rescate",
    titulo: "El rescate llegó por correo",
    gancho: "Veinte mil disquetes repartidos por correo postal en 1989, con un programa que escondía el disco y pedía dinero.",
    categoria: "Tecnología",
    color: "var(--clay)",
    encargo: "Disquete de cinco pulgadas y cuarto con una etiqueta escrita a máquina.",
    entrada:
      "Reino Unido, diciembre de 1989. Se celebra una conferencia mundial sobre una enfermedad y a los asistentes les llega por correo postal un disquete que promete un cuestionario de riesgo. Veinte mil personas lo reciben en noventa países. Al ejecutarlo noventa veces, el programa esconde los ficheros del disco y pide ciento ochenta y nueve dólares a un apartado de correos de Panamá.",
    paginas: [
      {
        rotulo: "El engaño",
        texto:
          "Aquel programa no cifraba de verdad el contenido de los ficheros, aunque lo pareciera desde fuera. Lo que hacía era revolver los nombres y marcar los ficheros como ocultos, dejando el disco irreconocible. La clave para deshacerlo estaba dentro del propio programa, así que un experto podía recuperarlo todo. Un investigador publicó una herramienta gratuita a las pocas semanas y el chantaje se quedó en nada. El daño de verdad lo hizo el pánico, porque mucha gente formateó el disco antes de preguntar. Varios centros de investigación perdieron años de datos que no tenían copiados en ninguna parte.",
        destacado: { tipo: "frase", frase: "No cifraba nada: escondía los ficheros y daba miedo." },
      },
      {
        rotulo: "Cifrar de verdad",
        texto:
          "El chantaje informático moderno funciona con un cifrado que sí es imposible de deshacer sin la clave. El programa genera una clave nueva para cada víctima y se la manda al atacante antes de cifrar. Después borra la copia local, de modo que en el ordenador ya no queda nada con lo que recuperar. Los algoritmos que usan son los mismos que protegen una transferencia bancaria, y funcionan igual de bien. Lo que cambió el negocio no fue el cifrado, sino la aparición de un dinero difícil de rastrear. Con un apartado de correos en Panamá cobrar era casi imposible, y hoy se cobra en minutos.",
        destacado: { tipo: "cifra", cifra: "1989", unidad: "el año del primer programa de rescate" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un modelo de delito que mueve miles de millones y que ataca sobre todo a hospitales y ayuntamientos. Son objetivos elegidos porque no pueden permitirse estar parados y suelen tener sistemas antiguos. Quedó también la única defensa que funciona de verdad, que no es un antivirus sino una copia de seguridad. Una copia guardada fuera de la red convierte un secuestro en una molestia de medio día. Y quedó un consejo que repiten todas las policías del mundo, porque pagar no garantiza nada. Una parte de quienes pagan no recupera los datos y todos quedan marcados como clientes dispuestos.",
      },
    ],
  },
  {
    id: "por-que-se-llaman-virus",
    titulo: "Se llaman virus con razón",
    gancho: "No es una metáfora perezosa. Un virus informático hace exactamente lo mismo que uno biológico, paso por paso.",
    categoria: "Ciencia",
    color: "var(--plum)",
    curioso: true,
    encargo: "Ilustración de un virus biológico junto a una línea de código, en el mismo encuadre.",
    entrada:
      "Estados Unidos, 1983. Un estudiante de doctorado demuestra en una clase de seguridad que un programa puede insertarse dentro de otros programas y propagarse solo. Su director de tesis le sugiere un nombre para aquello, tomado de la biología. La comparación no era decorativa, porque los dos hacen los mismos cuatro pasos y ninguno de los dos está vivo del todo.",
    paginas: [
      {
        rotulo: "Los cuatro pasos",
        texto:
          "Un virus biológico no se reproduce por su cuenta, porque no tiene con qué hacerlo. Es un trozo de instrucciones dentro de una cápsula, y necesita meterse en una célula ajena. Una vez dentro, engaña a la maquinaria de la célula para que fabrique copias de él en vez de trabajar. Un virus informático hace lo mismo, porque tampoco puede ejecutarse solo y necesita un programa que lo lleve. Se inserta en el código de otro fichero, y cuando alguien abre ese fichero se ejecuta él primero. Después busca más ficheros donde meterse y devuelve el control al programa original para no levantar sospechas.",
        destacado: { tipo: "frase", frase: "Ninguno de los dos puede reproducirse por su cuenta." },
      },
      {
        rotulo: "Vacunas y firmas",
        texto:
          "El parecido sigue en la defensa, porque un antivirus funciona como el sistema inmunitario de un cuerpo. Guarda una lista de trozos de código característicos de cada amenaza conocida, que llaman firmas. Cuando encuentra uno de esos trozos en un fichero, lo bloquea igual que un anticuerpo reconoce un intruso. El problema es el mismo en los dos casos, porque solo reconoce lo que ya ha visto antes. Los programas maliciosos responden mutando su propio código en cada copia, igual que muta un virus de gripe. Por eso los antivirus modernos vigilan el comportamiento y ya no solo comparan el código con su lista.",
        destacado: { tipo: "cifra", cifra: "1983", unidad: "el año en que se les puso ese nombre" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una palabra que se ha extendido a muchas otras cosas que se propagan copiándose. Se habla de contenidos virales, de contagio y de inmunidad de rebaño en asuntos que no tienen nada de biológico. Quedó también una discusión antigua que sigue sin cerrarse del todo entre biólogos. Un virus no come, no crece y no se reproduce solo, así que hay quien no lo considera un ser vivo. Y quedó lo que aquel estudiante demostró en clase, que era lo más incómodo de todo. No existe ningún programa capaz de decidir con certeza si otro programa es un virus.",
      },
    ],
  },
];
