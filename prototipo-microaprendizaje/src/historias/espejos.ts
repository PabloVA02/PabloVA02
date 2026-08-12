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
    fotos: [
      {
        archivo: "Ancient Egyptian bronze mirror, Egypt, 800-100 BCE Wellcome L0065470.jpg",
        autor: "Espejo egipcio de bronce pulido, de entre los años 800 y 100 antes de Cristo. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ancient_Egyptian_bronze_mirror,_Egypt,_800-100_BCE_Wellcome_L0065470.jpg",
        foco: "50% 45%",
        alt: "Un disco ovalado de metal dorado y muy pulido, con una espiga larga por mango, sobre fondo gris.",
      },
      {
        archivo: "Etruscan mirror, engraved Dioskouroi, bronze, 300 BC, Prague, NM-H10 5943, 151177.jpg",
        autor: "Espejo etrusco de bronce con los Dioscuros grabados en el reverso, hacia el año 300 antes de Cristo. Museo Nacional de Praga. Fotografía de Zde.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Etruscan_mirror,_engraved_Dioskouroi,_bronze,_300_BC,_Prague,_NM-H10_5943,_151177.jpg",
        foco: "50% 40%",
        alt: "Un disco de bronce verdoso con dos figuras armadas grabadas a línea fina en la cara de atrás.",
      },
      {
        archivo: "Silver mirror on a bronze stand, Roman, 200 BCE-200 CE Wellcome L0057607.jpg",
        autor: "Espejo romano de plata sobre un pie de bronce con la figura de un joven de pie sobre una tortuga. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Silver_mirror_on_a_bronze_stand,_Roman,_200_BCE-200_CE_Wellcome_L0057607.jpg",
        foco: "50% 40%",
        alt: "Un espejo redondo montado sobre una peana labrada, con la superficie mate y oscurecida por el tiempo.",
      },
      {
        archivo: "CMOC Treasures of Ancient China exhibit - bronze mirror.jpg",
        autor: "Espejo chino de bronce del periodo de los Reinos Combatientes, con el reverso decorado y un asa para colgarlo.",
        licencia: "CC BY-SA 2.5",
        fuente: "https://commons.wikimedia.org/wiki/File:CMOC_Treasures_of_Ancient_China_exhibit_-_bronze_mirror.jpg",
        foco: "50% 50%",
        alt: "Un disco de bronce oscuro decorado con motivos geométricos repetidos alrededor de un botón central.",
      },
    ],
    entrada:
      "Anatolia, hacia el año 6000 antes de Cristo. Aparecen los espejos más antiguos que se conservan, y no son de cristal ni se parecen a lo que hoy llamamos espejo: son discos de obsidiana, una piedra volcánica negra y vidriosa, pulidos a mano durante días hasta sacarles brillo. Devuelven una imagen oscura, verdosa y algo deformada, bastante peor que la de cualquier escaparate de hoy. Aun así es la primera vez en la historia que un ser humano puede mirarse la cara con cierta nitidez, cuando quiera y donde quiera, sin tener que agacharse sobre un charco de agua quieta.",
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
    titulo: "Casi ninguno se reconoce",
    gancho: "Se les pinta una marca en la frente mientras duermen y se mira si se la tocan al verse.",
    categoria: "Espejos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un chimpancé mirándose muy de cerca en un espejo grande.",
    fotos: [
      {
        archivo: "077 Alpha male chimpanzee checking his arm at Kibale forest National Park Photo by Giles Laurent.jpg",
        autor: "Chimpancé macho mirándose el brazo en el parque nacional de Kibale, en Uganda.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3A077%20Alpha%20male%20chimpanzee%20checking%20his%20arm%20at%20Kibale%20forest%20National%20Park%20Photo%20by%20Giles%20Laurent.jpg",
        foco: "50% 45%",
        alt: "Chimpancé sentado en el suelo del bosque, con un brazo extendido y la mirada puesta en su propia mano.",
      },
      {
        archivo: "013 Alpha male chimpanzee at Kibale forest National Park Photo by Giles Laurent.jpg",
        autor: "Otro retrato del mismo macho dominante en el bosque de Kibale.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3A013%20Alpha%20male%20chimpanzee%20at%20Kibale%20forest%20National%20Park%20Photo%20by%20Giles%20Laurent.jpg",
        foco: "50% 45%",
        alt: "Chimpancé adulto entre la vegetación, con la cara girada hacia un lado y la luz filtrándose entre las hojas.",
      },
      {
        archivo: "Urraca (Pica pica), Almuradiel, Ciudad Real, España, 2021-12-19, DD 19.jpg",
        autor: "Urraca común (Pica pica) en Almuradiel, Ciudad Real: una de las pocas especies que pasa la prueba.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AUrraca%20(Pica%20pica)%2C%20Almuradiel%2C%20Ciudad%20Real%2C%20Espa%C3%B1a%2C%202021-12-19%2C%20DD%2019.jpg",
        foco: "50% 50%",
        alt: "Urraca blanca y negra con reflejos azulados, posada y mirando de lado.",
      },
      {
        archivo: "Elephant in Sauvti (close up) - Botswana - panoramio.jpg",
        autor: "Elefante africano fotografiado de cerca en Savuti, Botsuana.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AElephant%20in%20Sauvti%20(close%20up)%20-%20Botswana%20-%20panoramio.jpg",
        foco: "50% 50%",
        alt: "Cabeza de elefante muy de cerca, con la trompa levantada y las orejas extendidas.",
      },
    ],
    entrada:
      "Estados Unidos, 1970. Un psicólogo diseña una prueba muy sencilla, casi de andar por casa, para saber si un animal se reconoce a sí mismo o no. Le deja un espejo grande en el recinto durante unos días, para que se acostumbre a él y deje de considerarlo una novedad; después, mientras el animal está sedado, le pinta una marca de color en la frente o en la oreja, en un sitio que no puede verse sin espejo; y por último observa qué hace cuando despierta y vuelve a mirarse. Casi todas las especies que se han probado fallan.",
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
    titulo: "El espejo no cambia lados",
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
