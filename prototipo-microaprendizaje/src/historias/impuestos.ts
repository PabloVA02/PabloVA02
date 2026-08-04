import type { Short } from "../shorts";

/* ==========================================================================
   Impuestos.

   El tema tiene un peligro evidente: aburre. Nadie quiere leer sobre tipos
   impositivos ni sobre bases imponibles, así que aquí no se cuenta cuánto se
   pagaba, sino QUÉ CAMBIÓ LA GENTE PARA NO PAGAR. Un impuesto bien contado
   es un experimento de conducta a escala de un país entero: se grava una
   cosa y la gente deja de tenerla, la esconde o la disfraza.

   La regla del tema: cada short enseña la reacción física al impuesto —una
   ventana tapiada, una barba afeitada, una tinaja en la esquina—, porque lo
   que se ve es lo que se recuerda. Y siempre se dice cuánto duró: casi todos
   los impuestos raros duran mucho más de lo que parece razonable.
   ========================================================================== */

export const IMPUESTOS: Short[] = [
  {
    id: "impuesto-de-las-ventanas",
    titulo: "El impuesto que hizo tapiar las ventanas",
    gancho: "Se cobraba por hueco en la fachada, así que media Inglaterra emparedó los suyos con ladrillo.",
    categoria: "Impuestos",
    color: "var(--slate)",
    encargo: "Una fachada de ladrillo con dos ventanas tapiadas y el marco todavía marcado en la pared.",
    entrada:
      "Inglaterra, 1696. La corona necesita dinero y no se atreve a preguntar cuánto gana cada uno, porque husmear en los ingresos de un hombre se considera entonces una intromisión intolerable. Así que grava algo que puede contarse desde la calle sin entrar en ninguna casa: las ventanas. Cada vivienda paga una cantidad fija y, a partir de cierto número de huecos, un suplemento por cada uno.",
    paginas: [
      {
        rotulo: "La cuenta desde fuera",
        texto:
          "El inspector no llamaba a la puerta. Se plantaba en la acera, contaba los huecos de la fachada, anotaba la cifra en su libreta y seguía calle abajo. Era un impuesto baratísimo de administrar y muy difícil de discutir, porque el número de ventanas está a la vista de cualquiera. La respuesta de los propietarios fue inmediata y todavía puede verse hoy en muchas fachadas británicas: tapiar. Se rellenaban los huecos con ladrillo, a veces pintando encima un marco falso para que la casa no quedara ciega del todo, y las viviendas nuevas se proyectaban ya con menos aberturas de las que pedía el sentido común.",
        destacado: { tipo: "frase", frase: "Contaba los huecos desde la acera y no llamaba a la puerta." },
      },
      {
        rotulo: "Aire y luz",
        texto:
          "El problema apareció donde vivía la gente que no elegía su casa. Los caseros de los barrios pobres tapiaron ventanas en bloques enteros de alquiler, y los médicos empezaron a escribir informes contra un tributo que dejaba a familias enteras durmiendo en habitaciones sin ventilación ni luz directa. Lo llamaron un impuesto sobre la salud. La campaña tardó decenios en ganar, pero ganó: el gravamen se derogó en 1851, ciento cincuenta y cinco años después de nacer, y se sustituyó por otro sobre el valor de la vivienda entera, que ya no dependía de contar agujeros en la pared.",
        destacado: { tipo: "cifra", cifra: "155", unidad: "años estuvo vigente el impuesto" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron las paredes. Cualquiera que pasee hoy por una ciudad británica antigua verá casas del siglo XVIII con rectángulos de ladrillo distinto en mitad de la fachada, perfectamente alineados con las ventanas de al lado: son los huecos que se cerraron para no pagar. Algunos se abrieron de nuevo después de 1851 y otros siguen ciegos por pura pereza. También se cuenta que de aquel impuesto viene la expresión inglesa que llama a un abuso robo a plena luz del día, aunque los diccionarios no lo confirman. Lo que sí es seguro es lo otro: un impuesto pensado para no molestar a nadie acabó cambiando la cara de un país.",
      },
    ],
  },

  {
    id: "impuesto-sobre-la-orina",
    titulo: "Roma cobraba un impuesto por la orina recogida",
    gancho: "Se recogía en tinajas en las esquinas y valía dinero. De ahí viene lo de que el dinero no huele.",
    categoria: "Impuestos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una tinaja de barro grande en la esquina de una calle empedrada antigua.",
    entrada:
      "Roma, año 70. Un emperador acaba de llegar al poder con las arcas vacías después de una guerra civil y busca ingresos donde nadie ha mirado. Encuentra uno insólito: la orina que se recoge en las tinajas colocadas en las esquinas de la ciudad no es basura, sino materia prima industrial que se vende, y todo lo que se vende puede gravarse.",
    paginas: [
      {
        rotulo: "El líquido industrial",
        texto:
          "La explicación está en la química. La orina, al reposar unos días, libera amoniaco, la misma sustancia que llevan hoy muchos productos de limpieza, y el amoniaco desengrasa la lana y fija los tintes. Los talleres que lavaban y preparaban paños dependían de ella, y también las curtidurías. Por eso había recipientes de barro en las esquinas: quien pasaba orinaba allí, el trabajador del taller pasaba a recogerlos con un carro y el taller pagaba por el contenido. En una ciudad de casi un millón de habitantes aquello era un caudal constante, gratuito y perfectamente medible, y el emperador se dio cuenta.",
        destacado: { tipo: "frase", frase: "El amoniaco desengrasa la lana, y por eso la orina se compraba." },
      },
      {
        rotulo: "El dinero no huele",
        texto:
          "Su hijo le afeó el asunto en público: le pareció indigno del cargo cobrar por semejante cosa. El emperador, cuenta un historiador de la época, le puso delante de la nariz una moneda de la primera recaudación y le preguntó si le molestaba el olor. El hijo dijo que no. Entonces le contestó que aquello venía justamente de allí. La frase se resumió después en tres palabras latinas —el dinero no huele— y se convirtió en el argumento universal de quien cobra por algo desagradable. Aquel emperador también acabó las obras del anfiteatro más famoso del mundo, y las pagó con impuestos como este.",
        destacado: { tipo: "cifra", cifra: "70", unidad: "el año en que se implantó el tributo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la frase, que se sigue diciendo dos mil años después sin saber de dónde viene. Y quedó el nombre: en francés los urinarios públicos de hierro que se instalaron por las ciudades en el siglo XIX se llamaron con el nombre de aquel emperador, y en italiano se le puso a un orinal infantil. Pocas veces un gobernante ha tenido una posteridad tan concreta. El sistema de recogida, por su parte, siguió funcionando en Europa hasta el siglo XIX, cuando la industria química aprendió a fabricar amoniaco sin necesidad de esperar a que nadie pasara por la esquina.",
      },
    ],
  },

  {
    id: "impuesto-sobre-la-barba",
    titulo: "Rusia cobró por llevar barba y daba recibo",
    gancho: "Una ficha de metal colgada al cuello demostraba que la barba estaba pagada.",
    categoria: "Impuestos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una ficha redonda de metal gastado con una barba grabada, sobre paño oscuro.",
    entrada:
      "Rusia, 1698. El zar vuelve de un viaje de más de un año por los talleres y astilleros de Europa occidental, convencido de que su país tiene que parecerse a lo que ha visto. En la recepción de bienvenida hace algo que nadie esperaba: pide unas tijeras y corta él mismo las barbas de los nobles que han ido a saludarlo.",
    paginas: [
      {
        rotulo: "Las tijeras del zar",
        texto:
          "El gesto no era una excentricidad de sobremesa. La barba larga tenía en la Rusia de entonces un valor religioso: se entendía que el hombre había sido hecho a imagen de Dios y que afeitarse era estropear esa imagen, y algunos clérigos enseñaban que un hombre sin barba no podía entrar en el cielo. Cortarla por sorpresa en una fiesta era, por tanto, una declaración política brutal. Al año siguiente el zar convirtió el gesto en norma general: el que quisiera conservar la barba podía hacerlo, pero pagando. Los nobles y los comerciantes ricos pagaban una fortuna al año; los campesinos, una moneda pequeña cada vez que entraban en una ciudad.",
        destacado: { tipo: "frase", frase: "Se podía llevar barba, pero había que pagarla todos los años." },
      },
      {
        rotulo: "La ficha al cuello",
        texto:
          "Como el cobro había que poder comprobarlo en la calle, se acuñó un recibo metálico. Era una ficha de cobre o de plata, del tamaño de una moneda grande, con una barba y un bigote grabados en una cara y el año en la otra, y había que llevarla encima y enseñarla a quien la pidiera. Algunas incluían una inscripción que resumía la doctrina oficial con una sequedad admirable: la barba es una carga superflua. Quien no la enseñaba era afeitado allí mismo por el funcionario, sin discusión y en plena calle, con una navaja que llevaba a propósito para eso.",
        destacado: { tipo: "cifra", cifra: "1698", unidad: "el año del corte de barbas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El impuesto duró setenta y cuatro años, hasta 1772, y funcionó: la clase alta rusa se afeitó y siguió afeitada, mientras el campo conservó la barba durante generaciones, de modo que el pelo de la cara acabó marcando la frontera entre los dos países que convivían dentro del mismo. Las fichas se conservan hoy en los museos y son piezas de coleccionista muy buscadas. Y hay algo que sigue vigente: fue uno de los primeros impuestos de la historia diseñado no para recaudar, sino para que la gente dejara de hacer algo. Hoy los llamamos impuestos sobre el tabaco o sobre el azúcar, y funcionan exactamente igual.",
      },
    ],
  },
];
