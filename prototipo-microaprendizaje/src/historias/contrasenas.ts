import type { Short } from "../shorts";

/* ==========================================================================
   Las contraseñas.

   Demostrar que uno es quien dice ser diciendo algo que solo él sabe. El
   tema se estropea si se convierte en consejos de seguridad informática: hay
   que contarlo como un problema viejísimo con soluciones nuevas.

   La regla del tema: se explica SIEMPRE QUÉ SE GUARDA en el otro lado, que
   es lo que casi nadie sabe y lo que decide todo. Y se cuenta el fallo
   humano, porque las contraseñas fallan por cómo somos y no por matemáticas.
   ========================================================================== */

export const CONTRASENAS: Short[] = [
  {
    id: "la-primera-contrasena",
    titulo: "La primera contraseña de ordenador se robó enseguida",
    gancho: "Un investigador quería más horas de máquina, imprimió el fichero de claves y se hizo pasar por los demás.",
    categoria: "Contraseñas",
    color: "var(--slate)",
    encargo: "Un listado de papel continuo con líneas impresas en tinta azulada.",
    entrada:
      "Massachusetts, 1962. Un instituto tecnológico americano tiene un ordenador enorme que comparten decenas de investigadores por turnos. Para separar el trabajo de cada uno se instala un sistema de cuentas con contraseña, el primero de la historia. Al poco tiempo, uno de los usuarios se queda sin sus horas asignadas y decide buscarse la vida.",
    paginas: [
      {
        rotulo: "El fichero",
        texto:
          "Aquel sistema guardaba todas las contraseñas juntas en un fichero de texto, escritas tal cual, sin ninguna protección. El investigador simplemente pidió a la máquina que le imprimiera ese fichero, algo que el sistema permitía sin más, y se quedó con la lista completa. A partir de ahí fue entrando con la cuenta de otros compañeros para conseguir el tiempo de cálculo que le faltaba. Décadas después lo contó él mismo en una conferencia, sin demasiado remordimiento, y el episodio se cita hoy como el primer robo de contraseñas conocido de la historia.",
        destacado: { tipo: "frase", frase: "Pidió que le imprimieran el fichero de claves, y se lo dieron." },
      },
      {
        rotulo: "Guardar el resumen",
        texto:
          "De aquel fallo salió la solución que se sigue usando. Un sistema bien hecho no guarda tu contraseña, sino el resultado de pasarla por una función que la convierte en una cadena de letras y números sin sentido, imposible de deshacer. Cuando escribes tu clave, el sistema aplica la misma función y compara los resultados, así que puede reconocerte sin saber lo que has escrito. Si alguien roba esa lista, se lleva un montón de cadenas inútiles en lugar de contraseñas, y tendría que probar millones de combinaciones para sacar cada una.",
        destacado: { tipo: "cifra", cifra: "1962", unidad: "el año del primer robo conocido" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una regla que permite juzgar a cualquier empresa. Si al pulsar en el enlace de contraseña olvidada te envían por correo tu clave original, es que la tienen guardada tal cual y no están haciendo bien las cosas. Lo correcto es que te manden un enlace para poner una nueva, porque ni ellos deberían poder leer la antigua. Quedó también el problema de fondo, que sigue siendo el mismo desde 1962. El punto débil casi nunca es el algoritmo que cifra, sino cómo se guarda la lista y quién puede acceder a ella.",
      },
    ],
  },
  {
    id: "las-reglas-que-no-servian",
    titulo: "Las reglas de contraseñas complicadas eran un error",
    gancho: "Su propio autor pidió perdón. Obligar a poner símbolos y cambiarla cada mes hizo las claves más previsibles.",
    categoria: "Contraseñas",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un papel adhesivo amarillo pegado en el borde de una pantalla.",
    entrada:
      "Estados Unidos, 2003. Un organismo oficial de normalización publica una guía sobre contraseñas que se convierte en la referencia mundial. Recomienda mezclar mayúsculas, números y símbolos, y cambiar la clave cada pocos meses. Durante quince años, casi todas las empresas del mundo copiaron esas reglas, y en 2017 el propio autor declaró públicamente que se había equivocado.",
    paginas: [
      {
        rotulo: "Lo que hacemos",
        texto:
          "El problema de aquellas reglas es que no contaban con el comportamiento humano, que es bastante previsible. Obligado a meter un símbolo y un número, casi todo el mundo hace lo mismo: pone una mayúscula al principio, un uno al final y cambia la letra a por una arroba. Y obligado a cambiarla cada mes, añade al final un número que va subiendo de uno en uno. Los atacantes conocen perfectamente esos patrones y los prueban antes que nada, así que una clave complicada de recordar para una persona puede resultar facilísima de adivinar para una máquina.",
        destacado: { tipo: "frase", frase: "Difícil de recordar no significa difícil de adivinar." },
      },
      {
        rotulo: "Lo que sí funciona",
        texto:
          "La recomendación actual va justo en la dirección contraria, y además es mucho más simple de cumplir para cualquiera. Lo que de verdad importa es la longitud. Por eso se aconsejan frases formadas por cuatro o cinco palabras corrientes sin relación entre sí, que resultan mucho más fáciles de recordar y mucho más costosas de romper probando combinaciones. Se recomienda además no obligar a cambiarla cada mes sin motivo. Conviene comprobar la clave elegida contra las listas de contraseñas ya filtradas que circulan por internet y, sobre todo, añadir un segundo factor.",
        destacado: { tipo: "cifra", cifra: "2017", unidad: "el año en que se corrigió la norma" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron millones de sistemas funcionando todavía con las reglas antiguas, porque cambiar una política de seguridad ya implantada en una empresa cuesta años y bastantes discusiones. Quedó también el papel amarillo pegado al borde de la pantalla con la clave apuntada, que es exactamente lo que provocan las normas imposibles de cumplir. Y quedó una lección que vale para cualquier norma de seguridad, desde el cinturón hasta el casco. Si una regla es tan incómoda que la gente busca cómo saltársela, el resultado final puede ser peor que no haber puesto ninguna.",
      },
    ],
  },
  {
    id: "el-segundo-factor",
    titulo: "La contraseña sola ya no basta para nada",
    gancho: "Si alguien la roba, entra. Por eso ahora se pide además algo que tienes encima, como el móvil.",
    categoria: "Contraseñas",
    color: "var(--plum)",
    encargo: "Un teléfono móvil mostrando un código de seis cifras sobre una mesa.",
    entrada:
      "Servicios de internet de todo el mundo, con la verificación en dos pasos generalizada desde 2011. La idea de fondo es antigua y viene de la seguridad física: una contraseña es algo que sabes, y lo que sabes se puede copiar sin que te enteres. Por eso conviene combinarla con algo de otra naturaleza, que el atacante tendría que robar físicamente.",
    paginas: [
      {
        rotulo: "Tres familias",
        texto:
          "Los sistemas de identificación se agrupan en tres tipos, y la seguridad seria combina al menos dos. Está lo que sabes, como una contraseña o un número secreto. Está lo que tienes, como un móvil, una tarjeta o una llave física con chip. Y está lo que eres, es decir, la huella, la cara o el iris. Cada familia falla de una manera distinta. Lo que sabes se copia sin que te enteres, lo que tienes se pierde o te lo roban, y lo que eres no se puede cambiar el día que se filtra.",
        destacado: { tipo: "frase", frase: "Lo que eres no se puede cambiar cuando alguien lo copia." },
      },
      {
        rotulo: "El código que caduca",
        texto:
          "El método más extendido genera un número de seis cifras que cambia cada treinta segundos. Funciona porque el servicio y tu aplicación comparten un secreto inicial y ambos calculan el mismo código a partir de la hora actual, sin necesidad de comunicarse. Por eso el sistema funciona aunque el móvil no tenga cobertura, y por eso el código caduca a los pocos segundos de aparecer. Recibirlo por mensaje de texto es peor, porque existen ataques para clonar una línea de móvil, aunque sigue siendo mucho mejor que no tener nada.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "segundos dura cada código" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una transición que va deprisa hacia sistemas sin contraseña, en los que el móvil o una llave física guardan una clave criptográfica y el servicio solo comprueba que la tienes. Con eso desaparece el fraude más común de todos, que consiste en engañar a alguien para que escriba su clave en una web falsa. Sencillamente, ya no hay ninguna clave que escribir. Y quedó el consejo que resume todo lo anterior en una frase: la contraseña más segura de todas es la que no existe y, por tanto, no se puede robar por teléfono.",
      },
    ],
  },
];
