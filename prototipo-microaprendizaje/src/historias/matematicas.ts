import type { Short } from "../shorts";

/* ==========================================================================
   Matemáticas.

   El tema que más lectores pierde en la primera línea, así que la primera
   línea no puede llevar ni un símbolo. Ninguna fórmula en toda la historia:
   si algo no se puede contar con palabras y con un ejemplo, no entra.

   La regla del tema: se cuenta la PELEA, no el resultado. Alguien defendió
   que un número no era un número, alguien se negó a aceptar una demostración,
   una ciudad prohibió por ley unas cifras. Las matemáticas son la disciplina
   con más consenso del mundo y por eso sus discusiones históricas son las más
   feroces que existen.

   Y se avisa cuando la anécdota famosa es tardía. Muchas leyendas de la
   matemática griega se escribieron ochocientos años después de los hechos.
   ========================================================================== */

export const MATEMATICAS: Short[] = [
  {
    id: "cumpleanos-23",
    titulo: "Veintitrés personas y un cumpleaños",
    gancho: "En una clase pequeña, apostar a que dos cumplen el mismo día es apostar a favor.",
    categoria: "Matemáticas",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un calendario de pared con varios días marcados a bolígrafo.",
    entrada:
      "Un año tiene 365 días, así que la intuición dice que para que dos personas compartan cumpleaños hace falta una multitud. La cuenta dice otra cosa: con 23 personas en una habitación, la probabilidad de que al menos dos coincidan supera el 50 %. No es un truco ni una trampa estadística. Es que la pregunta que uno cree estar haciéndose no es la que hace.",
    paginas: [
      {
        rotulo: "El engaño",
        texto:
          "La intuición falla porque cada uno se pone a sí mismo en el centro y piensa: ¿cuántos de estos cumplen el mismo día que yo? Esa pregunta sí necesita mucha gente, porque son 22 comparaciones. Pero lo que se pregunta es si coinciden dos CUALESQUIERA, y ahí no hay 22 parejas: hay 253, porque cada persona se compara con todas las demás. El número de parejas crece con el cuadrado del grupo, mucho más deprisa que el grupo. Con 23 personas, la probabilidad de que ninguna pareja coincida cae por debajo de la mitad, y por tanto la de que alguna coincida la supera.",
        destacado: { tipo: "cifra", cifra: "253", unidad: "parejas posibles entre 23 personas" },
      },
      {
        rotulo: "La curva",
        texto:
          "A partir de ahí sube deprisa. Con 30 personas, la probabilidad ronda el 70 %; con 50, el 97 %; con <strong>70</strong>, pasa del 99,9 %. Y no hace falta llegar a 366 para tener certeza absoluta salvo en el sentido estricto. Los datos reales, además, empujan a favor: los nacimientos no se reparten uniformemente por el calendario —hay meses con más y días con menos, como el 25 de diciembre o el 29 de febrero—, y cualquier desviación de la uniformidad aumenta las coincidencias, nunca las reduce, así que la cuenta teórica se queda corta antes que larga.",
        destacado: {
          tipo: "frase",
          frase: "No preguntas cuántos cumplen contigo. Preguntas cuántas parejas hay.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "El mismo error de intuición tiene consecuencias que no son de fiesta. En criptografía se llama ataque de cumpleaños: para encontrar dos documentos distintos con la misma huella digital no hace falta probar todas las huellas posibles, sino aproximadamente su raíz cuadrada, lo que reduce el trabajo de forma brutal. Por eso las funciones resumen que se usan hoy manejan longitudes tan grandes: no protegen contra alguien que busque un documento concreto, sino contra alguien que se conforme con encontrar dos que choquen entre sí, que es muchísimo más fácil.",
      },
    ],
  },

  {
    id: "cero-numero",
    titulo: "Contar la nada parecía un disparate",
    gancho: "Servía como hueco en una cifra, pero contar «nada» parecía un disparate.",
    categoria: "Matemáticas",
    color: "var(--ochre)",
    encargo: "Un manuscrito antiguo con numerales indios escritos a tinta.",
    entrada:
      "Hay dos ceros distintos y confundirlos estropea toda la historia. Uno es un hueco: la marca que distingue 105 de 15, y que varias civilizaciones inventaron pronto porque sin ella las cuentas no cuadran. El otro es un número de pleno derecho, con el que se puede sumar, restar y operar. Ese segundo tardó muchísimo más y tuvo una resistencia feroz.",
    paginas: [
      {
        rotulo: "El hueco",
        texto:
          "Los babilonios usaban desde hace unos dos mil setecientos años un par de cuñas inclinadas para señalar una posición vacía en mitad de un número. Los mayas tenían un símbolo propio para el vacío en su calendario. Pero en ambos casos era un signo de puntuación aritmético, no una cantidad: a nadie se le ocurría restar cinco menos cinco y quedarse con el resultado en la mano. Los griegos, que dominaban la geometría como nadie, no lo necesitaban, porque para ellos un número era una longitud o un área, y una longitud de nada sencillamente no es una longitud.",
        destacado: {
          tipo: "frase",
          frase: "Marcar el hueco es fácil. Aceptar que la nada es una cantidad, no.",
        },
      },
      {
        rotulo: "Brahmagupta",
        texto:
          "El salto está fechado. En el año <strong>628</strong>, el matemático indio Brahmagupta escribió un tratado donde el cero aparece por primera vez tratado como un número cualquiera, con reglas explícitas: un número menos sí mismo da cero, cero más un número da el número, y así con todas las operaciones. Se equivocó en una, la división: dijo que cero dividido entre cero da cero, cosa que no funciona. Pero el paso conceptual estaba dado, y con él llegaban también los números negativos, que Brahmagupta explicaba en términos de deudas y fortunas.",
        destacado: { tipo: "cifra", cifra: "628", unidad: "el año del primer tratado con reglas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En Europa entró con retraso. Fibonacci lo divulgó en 1202 tras aprenderlo de comerciantes árabes en el norte de África, y aun así hubo resistencia práctica: en 1299, Florencia prohibió a sus mercaderes usar cifras arábigas en los libros de cuentas, con un argumento razonable para la época —un cero se altera con un trazo de pluma y un romano no—. Los números romanos aguantaron dos siglos más en la contabilidad. Hoy, el cero es lo que permite que exista la informática entera, que no sabe hacer otra cosa que distinguir entre algo y nada.",
      },
    ],
  },

  {
    id: "raiz-de-dos",
    titulo: "El número que rompió una secta",
    gancho: "Los pitagóricos creían que todo era una fracción. La diagonal del cuadrado no lo es.",
    categoria: "Matemáticas",
    color: "var(--clay)",
    encargo: "Un cuadrado dibujado a tiza con su diagonal marcada, sobre pizarra oscura.",
    entrada:
      "La escuela de Pitágoras no era solo un grupo de matemáticos: era una hermandad con reglas de vida y una creencia central. Todo en el universo, sostenían, se puede expresar como una relación entre números enteros. La música lo confirmaba: las cuerdas suenan bien juntas en proporciones sencillas. Y entonces alguien miró la diagonal de un cuadrado.",
    paginas: [
      {
        rotulo: "La diagonal",
        texto:
          "Tómese un cuadrado de lado uno. Por el propio teorema de Pitágoras, su diagonal mide la raíz de dos. La pregunta era qué fracción de números enteros da ese valor, y la respuesta resultó ser que ninguna. La demostración es corta y demoledora: si esa fracción existiera y estuviera simplificada al máximo, se puede probar en cuatro pasos que numerador y denominador tendrían que ser los dos pares, y eso contradice que estuviera simplificada. No hay escapatoria. El número existe, se puede dibujar con una regla, y no es la razón entre dos enteros.",
        destacado: {
          tipo: "frase",
          frase: "Se puede dibujar con una regla y no se puede escribir como fracción.",
        },
      },
      {
        rotulo: "El ahogado",
        texto:
          "El hallazgo se atribuye a Hipaso de Metaponto, y la leyenda dice que sus compañeros lo tiraron al mar por revelarlo. Conviene la letra pequeña: esa historia aparece en autores como Jámblico, que escribió unos <strong>800</strong> años después de los hechos, y las versiones se contradicen entre sí —en unas lo ahogan los dioses, en otras la secta, en otras muere en un naufragio como castigo—. Lo que sí está documentado es lo importante: la crisis intelectual fue real y obligó a la matemática griega a apoyarse en la geometría, donde una longitud incómoda al menos se puede dibujar.",
        destacado: { tipo: "cifra", cifra: "800", unidad: "años después se escribió la leyenda" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "A los números que no son fracción se les llama irracionales, y el nombre conserva el susto: <em>irracional</em> significaba «sin razón», sin proporción, no «descabellado». Resultó además que no son la excepción sino la norma: hay infinitamente más irracionales que fracciones, tantos más que si se elige un punto al azar en una recta, la probabilidad de que caiga en una fracción es cero. La creencia pitagórica no era solo falsa: era falsa de la manera más completa posible, porque casi todos los números que existen en el universo la incumplen sin excepción.",
      },
    ],
  },
];
