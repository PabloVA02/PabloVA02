import type { Short } from "../shorts";

/* ==========================================================================
   Medicina.

   Tema delicado y por eso con una línea roja: aquí no se aconseja nada. No se
   dice qué tomar, qué evitar ni qué hacer si te duele algo. Esto es historia
   de la ciencia y curiosidad, no consulta.

   La regla del tema: contar cómo se supo. La medicina es el mejor escaparate
   que existe de cómo cambia una idea: alguien mide algo, el gremio se niega a
   creerlo, pasan treinta años y acaba en el primer capítulo del manual. Ese
   recorrido —la resistencia incluida— es la historia.

   Y cuando el protagonista tuvo razón y aun así acabó mal, se cuenta entero.
   La versión heroica en la que la verdad se impone sola no describe casi
   ningún caso real.
   ========================================================================== */

export const MEDICINA: Short[] = [
  {
    id: "estetoscopio-verguenza",
    titulo: "El estetoscopio se inventó por pudor",
    gancho: "Un médico no quiso pegar la oreja al pecho de una paciente y enrolló un papel.",
    categoria: "Medicina",
    color: "var(--clay)",
    encargo: "Un estetoscopio de madera del siglo XIX, cilíndrico, sobre paño oscuro.",
    entrada:
      "París, 1816. René Laennec tiene que auscultar a una mujer joven en el hospital Necker. El método de entonces era la aplicación inmediata: apoyar la oreja directamente sobre el pecho del paciente. Con una mujer joven y en aquella época, aquello le pareció impracticable. Cogió unas hojas de papel, las enrolló en un cilindro apretado y apoyó un extremo en el pecho.",
    paginas: [
      {
        rotulo: "La sorpresa",
        texto:
          "Lo que Laennec esperaba era una solución de compromiso: oír algo, aunque fuera peor. Lo que oyó fue mucho más claro que con la oreja. El cilindro concentraba el sonido en vez de dispersarlo, y de pronto se distinguían cosas que hasta entonces se confundían. Pasó los tres años siguientes construyendo versiones en madera torneada, probando longitudes y grosores, y sobre todo haciendo algo más importante que el aparato: catalogar los sonidos. Inventó el vocabulario que todavía se usa —estertores, soplos, roce— y los emparejó con lo que después aparecía en la autopsia.",
        destacado: {
          tipo: "frase",
          frase: "Buscaba una manera de oír menos incómoda y oyó mucho mejor.",
        },
      },
      {
        rotulo: "El emparejamiento",
        texto:
          "Ese emparejamiento es lo que convierte el invento en medicina y no en curiosidad. Laennec escuchaba a un enfermo, anotaba con detalle qué oía, y si el paciente moría comprobaba en el cuerpo qué lesión correspondía a aquel ruido. Publicó el resultado en <strong>1819</strong>, en un tratado de casi novecientas páginas que se vendía con un estetoscopio incluido en la caja. Por primera vez un médico podía decir algo fiable sobre el interior de una persona viva sin abrirla. El diagnóstico dejó de depender solo de lo que el paciente contaba.",
        destacado: { tipo: "cifra", cifra: "1819", unidad: "el tratado se vendía con el aparato" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Laennec murió en 1826, a los cuarenta y cinco años, de tuberculosis: la misma enfermedad cuyos sonidos había aprendido a reconocer mejor que nadie. Se cuenta que fue su sobrino quien lo auscultó y le dio el diagnóstico, usando un estetoscopio. El aparato lleva dos siglos colgado del cuello de los médicos y sigue siendo el símbolo de la profesión, aunque hoy se discuta cuánto aporta frente a una ecografía portátil. Lo que no ha cambiado es el vocabulario: los ruidos que anotó aquel hombre en su cuaderno siguen llamándose como él los llamó.",
      },
    ],
  },

  {
    id: "semmelweis-manos",
    titulo: "Lavarse las manos era una idea insultante",
    gancho: "Bajó la mortalidad de dieciocho al dos por ciento y lo echaron del hospital.",
    categoria: "Medicina",
    color: "var(--slate)",
    encargo: "Una palangana de porcelana con agua turbia en una sala de hospital antigua.",
    entrada:
      "Hospital General de Viena, 1847. La maternidad tiene dos pabellones. En uno atienden los médicos y los estudiantes; en el otro, las comadronas. Las mujeres que llegan de parto suplican que las lleven al segundo, y algunas prefieren dar a luz en la calle. Tienen motivos: en el pabellón de los médicos se muere aproximadamente una de cada seis.",
    paginas: [
      {
        rotulo: "La pista",
        texto:
          "Ignaz Semmelweis, un médico húngaro de veintiocho años, se obsesionó con la diferencia entre los dos pabellones y fue descartando explicaciones una a una: el clima, el hacinamiento, la postura del parto, hasta el paso del sacerdote con la campanilla. La respuesta llegó por una desgracia. Un colega suyo, Jakob Kolletschka, se cortó con un bisturí durante una autopsia y murió con exactamente los mismos síntomas que las parturientas. Semmelweis ató cabos: los médicos venían de diseccionar cadáveres y pasaban directamente a atender partos, sin lavarse. Las comadronas no pisaban la sala de autopsias.",
        destacado: {
          tipo: "frase",
          frase: "La pista no la dio una paciente. La dio un médico muerto por un corte.",
        },
      },
      {
        rotulo: "El número",
        texto:
          "En mayo de 1847 impuso el lavado de manos con una solución de cal clorada antes de entrar en la sala de partos. La mortalidad del pabellón cayó desde cifras que en algunos meses rozaban el <strong>18 %</strong> hasta alrededor del 2 %, y en algún mes hasta cero. El dato era demoledor y no sirvió de nada. Semmelweis no sabía explicar POR QUÉ funcionaba —faltaban veinte años para la teoría microbiana de Pasteur— y su hipótesis implicaba algo intolerable: que eran los propios médicos, con sus manos, quienes estaban matando a las pacientes.",
        destacado: { tipo: "cifra", cifra: "18 % → 2 %", unidad: "mortalidad tras el lavado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No le renovaron el puesto. Se marchó a Budapest, repitió el resultado allí y fue radicalizándose: escribió cartas abiertas llamando asesinos a los obstetras europeos, lo que terminó de cerrarle todas las puertas. En 1865 lo internaron en un manicomio, donde murió a las dos semanas, a los cuarenta y siete años, por una infección de una herida que le hicieron los guardias. Se le dio la razón cuando Pasteur y Lister explicaron el mecanismo. Hoy el fenómeno de rechazar un dato porque contradice lo que uno cree tiene nombre propio en psicología: reflejo Semmelweis.",
      },
    ],
  },

  {
    id: "placebo-abierto",
    titulo: "El placebo funciona aunque te digan que lo es",
    gancho: "Les dieron pastillas de azúcar avisando de que eran azúcar. Mejoraron igual.",
    categoria: "Medicina",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un frasco de pastillas blancas con la etiqueta claramente escrita, luz limpia.",
    entrada:
      "La explicación de manual dice que un placebo funciona porque el paciente cree estar tomando un medicamento. Si eso fuera todo, avisarle debería desactivarlo por completo. En 2010, un equipo del Harvard Medical School decidió comprobarlo de la manera más directa posible: dando pastillas de azúcar con el bote etiquetado como pastillas de azúcar.",
    paginas: [
      {
        rotulo: "El ensayo",
        texto:
          "Ted Kaptchuk y su equipo reclutaron a ochenta pacientes con síndrome de intestino irritable. A la mitad no les dieron nada; a la otra mitad, un frasco donde ponía «placebo», y una explicación previa sin trampa: esto son pastillas inertes, no llevan principio activo, pero en algunos estudios el cuerpo responde a este tipo de ritual. Los pacientes sabían perfectamente lo que estaban tomando. Al final del ensayo, el grupo del placebo declarado había mejorado de forma clara respecto al que no tomó nada, con una diferencia parecida a la de algunos fármacos usados para ese trastorno.",
        destacado: { tipo: "cifra", cifra: "80", unidad: "pacientes, y el bote decía «placebo»" },
      },
      {
        rotulo: "Los límites",
        texto:
          "El resultado se ha repetido después en dolor lumbar crónico, en fatiga de pacientes oncológicos y en rinitis alérgica, con efectos moderados pero consistentes. Y aquí llega la parte que casi nunca se cuenta: el placebo actúa sobre lo que el paciente siente e informa —dolor, náusea, cansancio, ánimo—, no sobre lo que se mide con una máquina. No encoge un tumor, no baja el colesterol, no cierra una fractura. Un ensayo con asmáticos lo enseñó de manera brutal: los pacientes decían encontrarse igual de bien con placebo que con broncodilatador, mientras la prueba de función pulmonar solo mejoraba con el fármaco.",
        destacado: {
          tipo: "frase",
          frase: "Cambia cómo te sientes. No cambia lo que mide el aparato.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "La hipótesis que mejor encaja es que buena parte del efecto no está en creer, sino en el ritual: la consulta, la atención recibida, el gesto de tomarse algo a una hora fija. El cerebro lleva toda la vida aprendiendo que ese guion precede al alivio, y responde a la señal aunque el bote esté vacío de fármaco. La consecuencia práctica no es recetar azúcar, sino algo menos llamativo y más incómodo de organizar: cómo se explica un tratamiento y cuánto tiempo se dedica a explicarlo forma parte del tratamiento, y eso sí se puede medir.",
      },
    ],
  },
];
