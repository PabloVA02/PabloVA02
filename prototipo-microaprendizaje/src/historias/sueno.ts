import type { Short } from "../shorts";

/* ==========================================================================
   Sueño.

   Tema con línea roja igual que Medicina: aquí no se aconseja dormir mejor,
   ni se dan horas recomendadas, ni se habla de higiene del sueño. Eso es otra
   sección y otro tono.

   La regla del tema: se cuenta lo que el cerebro hace mientras no miramos, y
   se cuenta con experimentos concretos. Un chaval de diecisiete años sin
   dormir once días con dos científicos tomando notas. Un laboratorio midiendo
   si respirar oxígeno puro cambia algo. La rareza del sueño es que le pasa a
   todo el mundo todas las noches y casi nadie ha visto la suya.

   Y donde la explicación de manual es falsa —el bostezo, por ejemplo— se
   cuenta el experimento que la tumbó y se admite lo que sigue sin saberse.
   ========================================================================== */

export const SUENO: Short[] = [
  {
    id: "randy-gardner",
    titulo: "Once días sin dormir",
    gancho: "Tenía diecisiete años y era un trabajo para la feria de ciencias del instituto.",
    categoria: "Sueño",
    color: "var(--plum)",
    encargo: "Un despertador analógico marcando una hora de madrugada, luz muy tenue.",
    fotos: [
      {
        archivo: "Old alarm clock on the bookshelf - 50233824038.jpg",
        autor: "Un despertador de cuerda con campanas, sobre una estantería de libros. Fotografía de Nenad Stojkovic.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Old_alarm_clock_on_the_bookshelf_-_50233824038.jpg",
        foco: "50% 50%",
        alt: "Un despertador antiguo de metal con dos campanas y esfera blanca, apoyado en una balda de madera.",
      },
      {
        archivo: "Full moon over Gullmarn fjord at Holma Marina 1.jpg",
        autor: "Luna llena entre las nubes sobre el fiordo de Gullmarn, en Suecia. Fotografía de W. carter.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Full_moon_over_Gullmarn_fjord_at_Holma_Marina_1.jpg",
        foco: "50% 45%",
        alt: "La luna llena atravesando un banco de nubes sobre un agua oscura y quieta.",
      },
      {
        archivo: "Early fix of Comet C 2023 A3 (Tsuchinshan–ATLAS).jpg",
        autor: "El cielo de antes del amanecer del 27 de septiembre de 2024, con el cometa Tsuchinshan-ATLAS asomando. Fotografía de Astrobond.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Early_fix_of_Comet_C_2023_A3_(Tsuchinshan%E2%80%93ATLAS).jpg",
        foco: "50% 50%",
        alt: "Un cielo azul oscuro que empieza a clarear por abajo, con una raya de luz difusa cerca del horizonte.",
      },
      {
        archivo: "Andaman Islands, Full moon night, Forest by the sea at night.jpg",
        autor: "Noche de luna llena en la costa del mar de Andamán. Fotografía de Vyacheslav Argenberg.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Andaman_Islands,_Full_moon_night,_Forest_by_the_sea_at_night.jpg",
        foco: "50% 50%",
        alt: "Palmeras y arena iluminadas de azul por la luz de la luna, con el mar liso al fondo.",
      },
    ],
    entrada:
      "San Diego, diciembre de 1963. Randy Gardner, estudiante de bachillerato de diecisiete años, decide batir el récord de tiempo sin dormir y presentarlo como proyecto para la feria de ciencias de su instituto. Empieza un martes por la mañana, con dos amigos que se turnan para vigilarlo y para impedir que se le cierren los ojos. A los pocos días la historia sale en la prensa local y luego en la nacional, y una tarde aparece por su casa un investigador del sueño de la Universidad de Stanford dispuesto a quedarse hasta el final.",
    paginas: [
      {
        rotulo: "La cuenta atrás",
        texto:
          "William Dement, que llegaría a ser uno de los grandes especialistas del campo, se instaló allí con un colega de la Marina para documentarlo y, sobre todo, para vigilar que el chico no se hiciera daño. El deterioro siguió un orden bastante claro. Al segundo día le costaba enfocar la vista y reconocer objetos por el tacto. Al cuarto se irritaba con facilidad, tenía lagunas de memoria y creyó por un rato ser un jugador de fútbol americano famoso. Hacia el séptimo aparecieron temblores, dificultades para hablar seguido y alucinaciones leves.",
        destacado: { tipo: "cifra", cifra: "264", unidad: "horas seguidas despierto" },
      },
      {
        rotulo: "El final",
        texto:
          "Paró a las <strong>264 horas</strong>, once días. Antes de irse a dormir dio una rueda de prensa y respondió con coherencia a todas las preguntas, cosa que sorprendió a los presentes. Después durmió catorce horas y cuarenta minutos, se levantó por su propio pie y volvió al instituto. En los días siguientes recuperó una parte de lo perdido, no todo: el cuerpo no devuelve hora por hora, sino que prioriza las fases de sueño profundo y REM y renuncia al resto. Dement no encontró secuelas medibles en los seguimientos inmediatos.",
        destacado: {
          tipo: "frase",
          frase: "No se recuperan las horas perdidas. Se recuperan las fases.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El récord se ha superado varias veces sobre el papel, con marcas de más de cuatrocientas horas, pero ninguna está tan bien documentada como aquella. Guinness dejó de reconocer esta categoría hace décadas por considerarla peligrosa, igual que hizo con otras marcas de resistencia. Y hay un epílogo que Gardner contó ya de mayor: llevaba años padeciendo un insomnio severo y sospechaba que aquellos once días le habían pasado factura. No hay manera de demostrarlo en un solo caso, pero es la clase de detalle que no aparece en la versión heroica del experimento.",
      },
    ],
  },

  {
    id: "paralisis-sueno",
    titulo: "Despertarte sin poder moverte tiene explicación",
    gancho: "El cerebro te desconecta los músculos cada noche. A veces tarda en reconectarlos.",
    categoria: "Sueño",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un dormitorio a oscuras visto desde la cama, sombras alargadas en el techo.",
    entrada:
      "Le pasa aproximadamente a una de cada trece personas al menos una vez en la vida: despertar y encontrarse despierto por dentro y paralizado por fuera, sin poder mover un dedo ni hablar, con frecuencia notando un peso sobre el pecho y la certeza de que hay alguien en la habitación. No es un sueño ni un trastorno grave. Es un fallo de coordinación.",
    paginas: [
      {
        rotulo: "El interruptor",
        texto:
          "Durante la fase REM, cuando ocurren los sueños más vívidos, el tronco del encéfalo apaga activamente las motoneuronas que mandan sobre los músculos voluntarios. Es una medida de seguridad elemental: sin ella, cualquiera representaría físicamente lo que está soñando, con las consecuencias previsibles. Solo quedan funcionando el diafragma y los músculos de los ojos, que es por lo que la fase se llama de movimiento ocular rápido. Normalmente, esa desconexión termina antes de que la conciencia vuelva. En la parálisis del sueño el orden se invierte: la mente despierta primero y el cuerpo sigue apagado unos segundos o unos minutos.",
        destacado: { tipo: "cifra", cifra: "1 de 13", unidad: "personas lo vive alguna vez" },
      },
      {
        rotulo: "El visitante",
        texto:
          "La parte que asusta no es la parálisis, son las alucinaciones. Como el cerebro sigue parcialmente en modo de sueño, monta imágenes sobre la habitación real, y llamativamente la escena se repite entre culturas que no tienen contacto: una presencia en el cuarto, un peso sobre el tórax, a veces la sensación de flotar. Esa coincidencia tiene siglos de folclore encima. En muchas tradiciones europeas la figura era un demonio que se sentaba sobre el durmiente, y de ahí salen palabras que aún se usan: <em>pesadilla</em> lleva dentro la idea de algo que pesa.",
        destacado: {
          tipo: "frase",
          frase: "Gente que no se conoce de nada describe al mismo visitante.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Aparece con más frecuencia al dormir boca arriba, tras noches irregulares y en épocas de estrés, y es más común entre estudiantes que en la población general, probablemente por lo mismo. Al revés también existe: cuando la desconexión falla del todo y el cuerpo sí ejecuta lo que se sueña, se llama trastorno de conducta del sueño REM, y ahí la gente golpea, corre o salta de la cama. La parálisis, con todo lo desagradable que resulta, es el mismo mecanismo funcionando exactamente como debe y limitándose a llegar unos segundos tarde a su cita.",
      },
    ],
  },

  {
    id: "bostezo-oxigeno",
    titulo: "Bostezar no sirve para coger oxígeno",
    gancho: "Lo probaron haciendo respirar oxígeno puro a los voluntarios. Bostezaban igual.",
    categoria: "Sueño",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un león bostezando de perfil, boca abierta, fondo desenfocado.",
    entrada:
      "La explicación que se aprende de pequeño es que se bosteza porque falta oxígeno en la sangre y el cuerpo pide una bocanada grande. Suena razonable, encaja con la sensación y es falsa. Se comprobó en los años ochenta con un experimento directo, y desde entonces nadie ha logrado devolverle la razón a la versión del oxígeno.",
    paginas: [
      {
        rotulo: "La prueba",
        texto:
          "El psicólogo Robert Provine hizo lo evidente: si el bostezo corrige una falta de oxígeno, cambiar el aire que respira alguien tiene que cambiar cuánto bosteza. Puso a sus voluntarios a respirar mezclas con más oxígeno del normal y también con más dióxido de carbono, y midió. Ni una cosa ni la otra alteraron el número de bostezos, aunque el dióxido de carbono sí aumentó, como era de esperar, el ritmo de la respiración. Bostezar y respirar resultaron ser dos cosas distintas que ocurren por la boca y que no se gobiernan igual.",
        destacado: {
          tipo: "frase",
          frase: "Más oxígeno, los mismos bostezos. Ahí se cayó la explicación.",
        },
      },
      {
        rotulo: "Lo que se maneja",
        texto:
          "La hipótesis con más apoyo hoy es la térmica: el bostezo, con esa inspiración profunda y el estiramiento de la mandíbula, movería sangre y aire de manera que ayudaría a enfriar ligeramente el cerebro. Encaja con que se bostece más al despertar y antes de dormir, que son los momentos en que la temperatura cerebral cambia, y con experimentos en los que aplicar frío en la frente reduce los bostezos. No está cerrado ni mucho menos. Y hay un dato que descoloca cualquier teoría sencilla: se bosteza dentro del útero, desde alrededor de la undécima semana.",
        destacado: { tipo: "cifra", cifra: "11", unidad: "semanas de gestación y ya se bosteza" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Lo más raro sigue siendo el contagio. Alrededor de la mitad de los adultos bosteza al ver bostezar a otro, e incluso al leer sobre bostezos, cosa que probablemente esté ocurriendo ahora mismo. El contagio aparece en chimpancés y en perros —que bostezan más con humanos conocidos que con desconocidos— y en las personas es más intenso cuanto más cercano es el otro. Eso apunta a algo social más que fisiológico: una señal involuntaria que sincroniza al grupo, quizá para coordinar los momentos de alerta y los de descanso sin que nadie tenga que decir nada.",
      },
    ],
  },
];
