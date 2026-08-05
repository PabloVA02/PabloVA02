import type { Short } from "../shorts";

/* ==========================================================================
   Espejos.

   El riesgo del tema es la metáfora: el reflejo, la identidad, la
   vanidad. Literatura barata que no explica ningún objeto.

   La regla del tema: un espejo se cuenta por LO QUE CUESTA FABRICARLO y
   por lo que la gente hace delante de él. Un oficio que iba de casa en
   casa puliendo bronce. Un animal al que se le pinta una marca en la
   frente. Un texto que se lee al revés en el reflejo. Todo comprobable
   y todo con una explicación física sencilla.

   Y si la explicación popular está mal, se rehace con un experimento
   que el lector pueda repetir en su cuarto de baño.
   ========================================================================== */

export const ESPEJOS: Short[] = [
  {
    id: "espejo-de-metal",
    titulo: "El espejo era metal pulido",
    gancho: "Bronce o plata bruñidos a mano, una imagen oscura y deformada, y un precio de joya.",
    categoria: "Espejos",
    color: "var(--slate)",
    encargo: "Un disco de bronce antiguo con mango, apoyado sobre tela oscura.",
    entrada:
      "Anatolia, hacia el año 6000 antes de Cristo. Aparecen los espejos más antiguos que se conservan: discos de obsidiana, una piedra volcánica negra y vidriosa, pulidos hasta sacarles brillo. Devuelven una imagen oscura y algo deformada, pero es la primera vez que alguien puede verse la cara con cierta nitidez sin agacharse sobre el agua.",
    paginas: [
      {
        rotulo: "El bronce",
        texto:
          "Durante los milenios siguientes el espejo fue de metal: bronce, cobre o plata, batidos hasta formar un disco fino y después pulidos a mano con arena cada vez más fina y con pasta abrasiva. El resultado tenía dos problemas serios. El primero, que el metal se empaña y se oxida, así que había que volver a pulirlo cada pocos meses, y existía el oficio de pulidor de espejos, que iba de casa en casa. El segundo, que el metal absorbe buena parte de la luz: la imagen sale más oscura y más amarilla que la realidad.",
        destacado: { tipo: "frase", frase: "Había un oficio que iba de casa en casa puliendo espejos." },
      },
      {
        rotulo: "El azogue",
        texto:
          "El salto llegó al aplicar una capa metálica sobre un cristal, primero con una lámina de estaño amalgamada con mercurio, un procedimiento lento, carísimo y muy tóxico para quien lo hacía: los obreros que trabajaban el azogue sufrían temblores, pérdida de dientes y trastornos nerviosos graves. En 1835, un químico alemán encontró la manera de depositar una capa finísima de plata sobre el vidrio con una reacción química sencilla, sin mercurio y en unos minutos. El precio se hundió en pocos años y el espejo entró en casas donde nunca había estado.",
        destacado: { tipo: "cifra", cifra: "1835", unidad: "el año que abarató el espejo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Que todo el mundo pudiera verse la cara con detalle y a diario es un cambio más grande de lo que parece, y varios historiadores lo relacionan con el auge del retrato, de la moda y hasta de cierta idea moderna de individuo. Los espejos actuales llevan una capa de aluminio depositada al vacío, protegida por detrás con pintura, y cuestan lo que un plato. Los de obsidiana de hace ocho mil años se siguen exponiendo en los museos, y todavía se distingue en ellos una cara si uno se acerca lo suficiente.",
      },
    ],
  },

  {
    id: "test-del-espejo",
    titulo: "Casi ningún animal se reconoce",
    gancho: "Se les pinta una marca en la frente mientras duermen y se mira si se la tocan al verse.",
    categoria: "Espejos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un chimpancé mirándose muy de cerca en un espejo grande.",
    entrada:
      "Estados Unidos, 1970. Un psicólogo diseña una prueba muy sencilla para saber si un animal se reconoce a sí mismo. Le deja un espejo grande durante unos días, después le pinta una marca de color en la frente mientras está sedado y observa qué hace al volver a verse reflejado. Casi todas las especies fallan la prueba.",
    paginas: [
      {
        rotulo: "La marca",
        texto:
          "La lógica es limpia: si el animal se toca la marca de su propia cara al verla en el reflejo, es que entiende que ese de ahí es él. Si intenta tocar la marca del espejo, atacar al reflejo o buscar detrás del cristal, entonces está viendo a otro. La mayoría reacciona como ante un desconocido: los pájaros picotean el cristal, los perros ladran y después se aburren, y los gatos se acercan a mirar por detrás. Los chimpancés, en cambio, se tocaron la marca y empezaron a usar el espejo para mirarse los dientes.",
        destacado: { tipo: "frase", frase: "Si se toca la marca de su cara, entiende que ese es él." },
      },
      {
        rotulo: "La lista corta",
        texto:
          "La lista de especies que pasan la prueba es sorprendentemente breve y no coincide con la de las más listas: chimpancés, orangutanes, algunos gorilas, delfines, orcas, elefantes asiáticos, urracas y, en trabajos recientes, ciertos peces limpiadores, lo que ha reabierto la discusión sobre qué mide exactamente el test. Los niños humanos lo pasan hacia los dieciocho o veinticuatro meses, no antes. Y hay culturas donde los adultos reaccionan de forma distinta ante un espejo desconocido, lo que sugiere que en la respuesta también hay una parte aprendida y no solo una capacidad innata que se tiene o no se tiene.",
        destacado: { tipo: "cifra", cifra: "18", unidad: "meses tarda un niño en pasarlo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La prueba tiene críticas serias: castiga a los animales que se guían por el olfato o por el oído más que por la vista, y a los que consideran una amenaza mirar fijamente a otro de su especie. Un perro no reconoce su imagen, pero sí distingue perfectamente su propio olor del de otro perro en una prueba equivalente hecha con orina. Así que el espejo mide una cosa concreta y no la conciencia entera. Aun así, sigue siendo el experimento más citado sobre lo que un animal sabe de sí mismo.",
      },
    ],
  },

  {
    id: "espejo-no-invierte",
    titulo: "El espejo no cambia los lados",
    gancho: "Invierte el delante y el detrás. Lo demás lo pones tú al darte la vuelta mentalmente.",
    categoria: "Espejos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un texto escrito al revés reflejado en un cristal, legible en el reflejo.",
    entrada:
      "Cualquier cuarto de baño, cualquier mañana del siglo XXI. Uno levanta la mano derecha y el reflejo parece levantar la izquierda. La explicación que se da normalmente es que el espejo invierte los lados, y no es cierto: si lo hiciera, también pondría los pies arriba. Lo que invierte es otro eje, y el resto lo hace el cerebro.",
    paginas: [
      {
        rotulo: "El eje",
        texto:
          "Un espejo cambia de signo una sola dirección: la perpendicular al cristal, es decir, lo que estaba delante pasa a estar detrás. La izquierda sigue a la izquierda y la derecha a la derecha, exactamente donde estaban. Se comprueba fácil: si uno se tumba de lado delante de un espejo, la imagen no se pone de pie ni gira, sigue tumbada igual que uno. Y si señala hacia el norte, el reflejo sigue señalando al norte. Lo único que se ha dado la vuelta es la profundidad, y no se nota porque una cara es bastante plana.",
        destacado: { tipo: "frase", frase: "Si te tumbas de lado, el reflejo no se pone de pie." },
      },
      {
        rotulo: "El giro mental",
        texto:
          "Entonces, ¿por qué parece que cambia? Porque al compararnos con el reflejo lo tratamos como si fuera otra persona que se ha dado la vuelta para mirarnos de frente, y una persona que gira ciento ochenta grados sí intercambia su izquierda y su derecha. Ese giro lo hacemos nosotros con la imaginación, no el espejo. La prueba está en lo que pasa con un texto escrito: en el reflejo se lee al revés porque el papel es plano y no lo giramos mentalmente, y por eso las ambulancias llevan el rótulo del revés en el capó.",
        destacado: { tipo: "cifra", cifra: "180", unidad: "grados que giras tú, no el reflejo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El asunto ha ocupado a bastante gente seria, desde filósofos antiguos hasta físicos del siglo XX, y sigue apareciendo en los libros de divulgación porque es un caso raro: no hay ningún misterio físico, todo el enredo está en cómo describimos lo que vemos. El espejo hace algo muy simple y nosotros lo contamos mal. Y tiene una consecuencia práctica: quien se ha visto siempre en el espejo tiene interiorizada una cara que no es la suya sino su versión invertida, y por eso mucha gente no se reconoce en las fotografías.",
      },
    ],
  },
];
