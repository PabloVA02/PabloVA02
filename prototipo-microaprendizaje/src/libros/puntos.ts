/* ==========================================================================
   «Aprenderás»: lo que uno se lleva de cada libro.

   Es la tarjeta de los vistos de la ficha, calcada de Headway. Allí cada
   punto es UNA COSA QUE SABRÁS HACER O ENTENDER cuando termines, escrita en
   una línea y empezando por el verbo o por el qué:

       cómo detectar y promover a los mejores trabajadores
       formas de lograr el ajuste producto-mercado
       qué se necesita para mejorar el compromiso del equipo

   No son los capítulos, ni el índice, ni frases sueltas del libro. Son la
   promesa, y por eso van escritos a mano.

   LAS REGLAS

   1. UNA LÍNEA. Diez palabras como mucho. Si pide dos renglones en un móvil,
      sobra la mitad.

   1 bis. EN MINÚSCULA, como en la referencia: «por qué el cerebro humano
      vence a la inteligencia artificial», no «Por qué...». Detrás del visto no
      empieza una frase, se continúa la del rótulo: aprenderás… esto.

   2. QUE SE ENTIENDA SIN HABER LEÍDO EL LIBRO. «La habitación 101» no dice
      nada a quien no ha leído 1984; «por qué la tortura busca creencia y no
      información» sí.

   3. CONCRETO. Una idea que se pueda contar en una cena, no una categoría.
      Nada de «las claves del éxito» ni «los fundamentos de la felicidad».

   4. CINCO POR LIBRO. Es lo que cabe en la tarjeta sin desplazar la pantalla.

   5. SIN VENDER. Ni «descubre», ni «el secreto de», ni «imprescindible».

   Un libro sin entrada aquí cae en los títulos de sus capítulos, que son
   cortos y concretos pero hablan del recorrido y no de lo que te llevas. Se
   nota la diferencia, y por eso esta lista se va llenando.
   ========================================================================== */

export const PUNTOS: Record<string, string[]> = {
  influencia: [
    "por qué un favor pequeño que no pediste te obliga",
    "por qué un sí pequeño lleva a uno grande",
    "a quién señalar si necesitas ayuda entre mucha gente",
    "por qué obedecemos la bata y no al experto",
    "por qué lo que se está acabando parece mejor",
  ],

  principito: [
    "por qué los mayores necesitan cifras para creer algo",
    "qué le pasa a los seis adultos de los planetas",
    "por qué una rosa entre cinco mil sigue siendo única",
    "el método del zorro para crear un lazo, paso a paso",
    "cómo termina de verdad, que casi nadie recuerda",
  ],

  meditaciones: [
    "cómo separar lo que está en tu mano de lo que no",
    "por qué casi todo se encoge si lo describes sin adornos",
    "por qué morir joven y morir viejo cuestan lo mismo",
    "qué decirse al levantarse antes de tratar con gente",
    "por qué un obstáculo es material de trabajo",
  ],

  cosmos: [
    "cómo se midió la Tierra con dos palos y una sombra",
    "por qué la ciencia griega se paró mil quinientos años",
    "dónde cae la historia humana en el calendario cósmico",
    "en qué estrella se fabricó el calcio de tus huesos",
    "qué le pasó a Venus y por qué nos importa",
  ],

  "1984": [
    "qué es el doblepensar y por qué no es hipocresía",
    "por qué el Partido quita palabras del diccionario",
    "por qué persigue el amor y no solo la política",
    "por qué la tortura busca creencia y no información",
    "qué cambia el apéndice, que está escrito en pasado",
  ],

  flow: [
    "por qué tu atención es un presupuesto y se gasta mal",
    "dónde está la franja exacta en la que aparece el flujo",
    "por qué se fluye más trabajando que en el sofá",
    "en qué se diferencian el placer y el disfrute",
    "por qué el domingo por la mañana se está peor",
  ],

  "busca-sentido": [
    "las tres fases por las que pasaba un prisionero",
    "por qué murió tanta gente la semana después de Navidad",
    "qué es lo único que no te pueden quitar",
    "las tres vías por las que aparece un sentido",
    "cómo se cura un insomnio pidiendo no dormir",
  ],

  mindset: [
    "en qué se diferencian la mentalidad fija y la de crecimiento",
    "por qué elogiar la inteligencia de un niño le perjudica",
    "qué le pasa a tu atención cuando fallas",
    "por qué Enron se hundió por fichar a los más brillantes",
    "cómo se reconoce la voz de la mentalidad fija",
  ],

  "poder-ahora": [
    "por qué el que oye el pensamiento no es el pensamiento",
    "por qué una bronca absurda deja una satisfacción rara",
    "por qué nadie ha sufrido nunca por el momento presente",
    "las tres únicas salidas ante algo que no te gusta",
    "por qué esperar que otro te complete rompe la relación",
  ],

  "monje-ferrari": [
    "cómo se cuida la mente como se cuida un jardín",
    "qué es el pensamiento opuesto y cómo se usa",
    "qué es el kaizen aplicado a un día normal",
    "por qué estar ocupado no es ser productivo",
    "por qué el Ferrari nunca fue el problema",
  ],

  "sutil-arte": [
    "por qué querer ser positivo te recuerda que no lo eres",
    "por qué la pregunta buena es qué dolor aguantas",
    "en qué se diferencian la culpa y la responsabilidad",
    "por qué creerse especial impide mejorar en nada",
    "por qué tener todas las opciones abiertas empobrece",
  ],

  "cuatro-acuerdos": [
    "por qué una frase de tres segundos dura veinte años",
    "por qué los elogios tampoco son sobre ti",
    "de dónde salen casi todas las peleas de pareja",
    "por qué tu mejor esfuerzo cambia cada día",
    "por qué perdonar es un asunto de interés propio",
  ],

  ikigai: [
    "qué significa ikigai de verdad en japonés",
    "por qué el diagrama de los cuatro círculos no es japonés",
    "qué es el hara hachi bu y por qué funciona",
    "qué es un moai y por qué dura toda la vida",
    "qué dicen los estudios sobre tener un propósito",
  ],

  "pensar-rapido": [
    "en qué se diferencian los dos sistemas con que piensas",
    "por qué una historia coherente parece más probable",
    "cómo un número dicho al azar te cambia el precio",
    "por qué perder cien duele más que ganar cien",
    "por qué de algo solo recuerdas el pico y el final",
  ],

  "inteligencia-emocional": [
    "por qué reaccionas antes de saber a qué reaccionas",
    "qué es un secuestro emocional y cómo se corta",
    "las cinco capacidades y por qué van en ese orden",
    "qué predijo aguantar sin comerse una golosina a los cuatro años",
    "los cuatro modos de discutir que rompen una pareja",
  ],

  "mente-millonaria": [
    "por qué el dinero que llega de golpe no se queda",
    "las tres vías por las que heredaste tu idea del dinero",
    "la diferencia entre jugar a ganar y a no perder",
    "el reparto en seis frascos, con sus porcentajes",
    "por qué cobrar por horas te pone un techo calculable",
  ],

  "piensa-hazte-rico": [
    "por qué un deseo sin cifra ni fecha no vale",
    "los seis pasos para convertir una idea en un plan",
    "por qué Ford no se molestaba en saber datos generales",
    "qué es una mente maestra y para qué sirve",
    "cómo distinguir una derrota temporal de un fracaso",
  ],

  "amigos-influir": [
    "por qué la crítica solo consigue que el otro se defienda",
    "en qué se diferencian el aprecio y la adulación",
    "por qué en el anzuelo va gusano y no fresas",
    "cómo admitir un error antes de que te lo digan",
    "por qué cambiar «pero» por «y» cambia una bronca entera",
  ],

  "padre-rico": [
    "la diferencia entre un activo y un pasivo, en una línea",
    "por qué la casa donde vives no es una inversión",
    "por qué cobrar más solo agranda la rueda",
    "qué significa pagarse a uno mismo primero",
    "los cinco miedos que frenan a quien no invierte",
  ],

  "psicologia-dinero": [
    "por qué cada uno decide con la vida que le tocó",
    "cómo separar lo que fue mérito de lo que fue suerte",
    "por qué Buffett ganó casi todo después de los cincuenta",
    "por qué casi todo se juega en un puñado de días",
    "en qué se diferencian ser rico y tener riqueza",
  ],

  "poder-habitos": [
    "las tres piezas de las que está hecho cualquier hábito",
    "por qué un hábito no se borra y solo se sustituye",
    "por qué un solo hábito arrastra a todos los demás",
    "cómo se entrena el autocontrol sin gastarlo",
    "cómo unos grandes almacenes detectan un embarazo",
  ],

  "siete-habitos": [
    "por qué eliges siempre la respuesta, aunque no lo parezca",
    "cómo distinguir tu círculo de preocupación del de influencia",
    "por qué lo urgente se come siempre lo importante",
    "qué es la cuenta bancaria emocional y cómo se ingresa",
    "por qué escuchamos para contestar y no para entender",
  ],

  sapiens: [
    "por qué hubo seis especies humanas y solo queda una",
    "cómo una ficción compartida permite cooperar entre desconocidos",
    "por qué la agricultura empeoró la vida de casi todos",
    "qué sostiene el valor del dinero cuando nadie lo respalda",
    "por qué más poder no ha traído más felicidad",
  ],

  "habitos-atomicos": [
    "por qué los resultados llegan mucho después que los hábitos",
    "por qué el sistema importa más que la meta",
    "cómo un hábito cambia quién crees que eres",
    "cómo apilar un hábito nuevo sobre uno que ya tienes",
    "la regla de los dos minutos para no aplazar",
  ],

  "club-5-manana": [
    "cómo repartir la primera hora del día en tres bloques de veinte minutos",
    "por qué madrugar se decide la noche anterior y no por la mañana",
    "cuánto tarda de verdad en instalarse un hábito, y en qué semana se abandona",
    "qué son la regla del 90/90/1 y el ritmo de 60 y 10",
    "por qué el descanso es parte del rendimiento y no su premio",
  ],

  "trabajo-profundo": [
    "por qué la atención no vuelve entera después de cada interrupción",
    "las cuatro maneras de meter concentración en una vida normal",
    "cómo montar un ritual que quite decisiones en vez de gastar voluntad",
    "por qué conviene descansar de la distracción y no de la concentración",
    "cómo elegir qué aplicaciones se quedan y cuáles sobran",
  ],

  "armas-germenes": [
    "por qué unos pueblos llegaron a otros y no al revés",
    "cuántos animales grandes se han domesticado en toda la historia",
    "qué tiene que ver la forma de un continente con su agricultura",
    "por qué la viruela mató más que todos los conquistadores juntos",
    "de dónde salieron la escritura, el Estado y los ejércitos",
  ],

  "diario-ana-frank": [
    "cómo se vivía en un escondite de cincuenta metros y ocho personas",
    "por qué Ana estaba reescribiendo su diario para publicarlo",
    "qué pasó la mañana del 4 de agosto de 1944",
    "qué le quitó su padre al libro antes de publicarlo",
    "por qué leerla como un símbolo de esperanza la deja en nada",
  ],

  "homo-deus": [
    "por qué el hambre, la peste y la guerra han dejado de ser destinos",
    "qué persigue la humanidad ahora que los ha resuelto",
    "por qué la felicidad tiene un techo bioquímico",
    "cómo los algoritmos acaban conociéndote mejor que tu pareja",
    "en qué se diferencian la inteligencia y la conciencia",
  ],
};
