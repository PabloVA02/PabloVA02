/* ==========================================================================
   El subtítulo de cada libro: la frase corta que va en su cubierta.

   Pablo lo pidió con un ejemplo: «tienes que poner el título, por ejemplo
   Homo Sapiens, y su frase corta de una breve historia de la humanidad». Es
   lo que se lee debajo del título en la portada de verdad, y es lo que
   coloca el libro en un segundo: «Sapiens» no dice nada, «Sapiens · Una
   breve historia de la humanidad» lo dice todo.

   POR QUÉ NO SALE DE LO QUE YA HABÍA. El campo `subtitulo` de un libro es su
   `gancho` —la frase que decide si alguien entra—, y eso es otra cosa: son
   dos líneas de texto escritas por nosotros, no el subtítulo de la edición.

   LA REGLA, y es la única: aquí va el subtítulo REAL de la edición en
   español, el que está impreso en la cubierta. Un libro cuyo subtítulo no se
   sepa con seguridad NO SE INVENTA: se queda fuera y la ficha no pinta la
   línea, que es exactamente lo que pasa con los libros que no llevan
   subtítulo ninguno —«1984», «Meditaciones», «El príncipe»— y no pasa nada.

   La lista se va llenando. Hoy cubre los que se ven primero en la estantería
   y los que tienen resumen escrito de los que se está seguro.
   ========================================================================== */

export const SUBTITULOS: Record<string, string> = {
  nudge: "Impulso: cómo mejorar las decisiones sobre salud, dinero y felicidad",
  educada: "Una memoria",
  "guerra-arte": "Rompe las barreras y vence tus batallas creativas interiores",
  "acto-creativo": "Una forma de ser",
  "mientras-escribo": "Memorias de un oficio",
  "ser-mortal": "La medicina y lo que importa al final",
  "digestion-cuestion": "Descubre los secretos del órgano más infravalorado del cuerpo humano",
  antifragil: "Las cosas que se benefician del desorden",
  factfulness: "Diez razones por las que estamos equivocados sobre el mundo",
  respira: "La nueva ciencia de un arte olvidado",
  "inversor-inteligente": "Un libro de asesoramiento práctico",
  "bernarda-alba": "Drama de mujeres en los pueblos de España",
  malala: "La historia de la niña que defendió el derecho a la educación y fue tiroteada por los talibanes",
  "cuerpo-cuenta": "Cerebro, mente y cuerpo en la superación del trauma",
  "cerebro-buda": "La neurociencia de la felicidad, el amor y la sabiduría",
  "rebelion-granja": "Un cuento de hadas",
  "semana-4-horas": "No hace falta trabajar más",
  hobbit: "Historia de una ida y de una vuelta",
  principe: "El tratado que separó la política de la moral",
  "arte-guerra": "El tratado militar más antiguo que se sigue leyendo",
  "cien-anos": "La historia de la familia Buendía en Macondo",
  "cisne-negro": "El impacto de lo altamente improbable",
  "por-que-dormimos": "La nueva ciencia del sueño",
  influencia: "La psicología de la persuasión",
  principito: "Una fábula sobre la amistad, la pérdida y lo esencial",
  meditaciones: "Los cuadernos privados de un emperador romano",
  cosmos: "Un viaje por el universo, la ciencia y nuestro lugar en él",
  "1984": "Una novela sobre el poder y la verdad",
  flow: "Una psicología de la felicidad",
  "busca-sentido":
    "El testimonio de un psiquiatra en los campos de concentración",
  mindset: "La actitud del éxito",
  "diario-ana-frank": "La casa de atrás",
  "trabajo-profundo": "Reglas para el éxito concentrado en un mundo disperso",
  "poder-ahora": "Un camino hacia la realización espiritual",
  "sutil-arte": "Un enfoque disruptivo para vivir una buena vida",
  "pensar-rapido": "Cómo tomamos decisiones y por qué nos equivocamos",
  "inteligencia-emocional":
    "Por qué puede importar más que el cociente intelectual",
  "mente-millonaria": "Domina el juego interior de la riqueza",
  "piensa-hazte-rico": "El libro que fundó la literatura del éxito",
  "amigos-influir": "El libro más famoso sobre relaciones humanas",
  "padre-rico": "Qué les enseñan los ricos a sus hijos acerca del dinero",
  "psicologia-dinero":
    "Cómo piensan los ricos: 18 claves imperecederas sobre riqueza y felicidad",
  "poder-habitos": "Por qué hacemos lo que hacemos en la vida y en la empresa",
  "siete-habitos": "La revolución ética en la vida cotidiana y en la empresa",
  freakonomics:
    "Un economista políticamente incorrecto explora el lado oculto de lo que nos afecta",

  /* Historia */
  sapiens: "Una breve historia de la humanidad",
  "homo-deus": "Breve historia del mañana",
  "armas-germenes":
    "Breve historia de la humanidad en los últimos trece mil años",
  "infinito-junco": "La invención de los libros en el mundo antiguo",
  "mundo-ayer": "Memorias de un europeo",
  spqr: "Una historia de la antigua Roma",
  mandela: "La autobiografía de Nelson Mandela",
  "chico-pijama": "Una fábula",
  "eichmann-jerusalen": "Un estudio sobre la banalidad del mal",
  postguerra: "Una historia de Europa desde 1945",
  "sobre-tirania": "Veinte lecciones que aprender del siglo XX",

  /* Filosofía */
  zaratustra: "Un libro para todos y para nadie",
  sisifo: "Ensayo sobre el absurdo",
  "cuatro-acuerdos": "Un libro de sabiduría tolteca",
  ikigai: "Los secretos de Japón para una vida larga y feliz",
  "monje-ferrari": "Una fábula espiritual",
  "mundo-sofia": "Novela sobre la historia de la filosofía",

  /* Ciencia */
  "breve-historia-tiempo": "Del Big Bang a los agujeros negros",
  "mundo-demonios": "La ciencia como una luz en la oscuridad",
  "vida-arboles": "Descubre su mundo oculto",
  "gen-historia": "Una historia personal",
  feynman: "Aventuras de un curioso personaje",

  "origen-especies": "Por medio de la selección natural",

  /* Psicología */
  "habitos-atomicos": "Cambios pequeños, resultados extraordinarios",
  "club-5-manana": "Controla tus mañanas, impulsa tu vida",
};

/* Los que NO llevan subtítulo en su edición. Declararlo aquí es lo que
   distingue «este libro no tiene» de «se me olvidó escribirlo»: la ficha no
   pinta la línea, y el validador los da por completos en vez de avisar cada
   vez. Inventarles una frase estaría prohibido por la regla de arriba. */
export const SIN_SUBTITULO: string[] = ["quijote", "matar-ruisenor", "orgullo-prejuicio", "alquimista", "sombra-viento", "steve-jobs", "gen-egoista", "odisea", "republica-platon", "mundo-feliz", "fahrenheit", "crimen-castigo", "metamorfosis", "gran-gatsby", "senor-moscas", "frankenstein", "dorian-gray", "dracula", "moby-dick", "montecristo", "viejo-mar", "nombre-rosa", "pedro-paramo", "guardian-centeno", "si-esto-hombre", "los-miserables", "casi-todo", "extranjero", "ana-karenina", "madame-bovary", "historia-arte", "ficciones", "rayuela", "casa-espiritus", "hombre-rico-babilonia", "aliento-aire", "modos-ver", "cartas-joven-poeta", "guerra-y-paz", "origenes-totalitarismo", "capital-siglo-xxi", "homenaje-cataluna", "pilares-tierra", "historia-espana", "arte-de-amar", "siete-lecciones-fisica", "doble-helice", "astrofisica-prisa", "revoluciones-cientificas", "orden-del-tiempo"];
