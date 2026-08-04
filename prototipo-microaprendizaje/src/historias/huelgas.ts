import type { Short } from "../shorts";

/* ==========================================================================
   Las huelgas.

   Dejar de trabajar a la vez para negociar. El tema se estropea si se cuenta
   como épica sindical o como estampa de conflicto: lo interesante es el
   mecanismo, que es de una lógica fría.

   La regla del tema: se cuenta QUIÉN PIERDE MÁS DINERO CADA DÍA. Una huelga
   es una competición de aguante, y todo —la caja de resistencia, los
   esquiroles, los servicios mínimos— sale de ahí. Con fechas y con cifras.
   ========================================================================== */

export const HUELGAS: Short[] = [
  {
    id: "la-huelga-mas-antigua",
    titulo: "La primera huelga conocida fue en el año 1152",
    gancho: "Los obreros que construían las tumbas de los faraones se sentaron porque llevaban dieciocho días sin cobrar.",
    categoria: "Huelgas",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un trozo de piedra caliza con signos escritos en tinta negra.",
    entrada:
      "Egipto, año 1152 antes de Cristo. En un poblado junto al valle donde se excavan las tumbas reales viven los obreros especializados que las construyen y decoran. Cobran en especie: grano, aceite, pescado y cerveza, repartidos cada mes por la administración del faraón. Ese año el reparto empieza a llegar tarde, y un día deciden dejar de trabajar y sentarse.",
    paginas: [
      {
        rotulo: "El registro",
        texto:
          "Lo sabemos porque un escriba lo anotó en trozos de piedra caliza, que era el papel de usar y tirar de la época. Ahí está anotado el retraso en los repartos y el día exacto en que los hombres cruzan los muros del recinto y se sientan junto a un templo. También sus palabras: que tienen hambre, que llevan dieciocho días sin cobrar y que no piensan moverse. También aparece la reacción de los funcionarios, que negocian, prometen y consiguen que vuelvan al trabajo un par de veces antes de pagar de verdad.",
        destacado: { tipo: "frase", frase: "Un escriba lo anotó todo en trozos de piedra caliza." },
      },
      {
        rotulo: "El poder que tenían",
        texto:
          "Aquellos hombres no eran esclavos, sino artesanos con un oficio muy especializado y difícil de sustituir. Sabían tallar, pintar y trabajar en galerías estrechas, y de ellos dependía que la tumba del faraón estuviera lista a tiempo, un asunto religioso de máxima importancia. Esa combinación de trabajo cualificado y plazo que no admite retraso es exactamente la que da fuerza a una huelga hoy, en un aeropuerto o en una fábrica de coches. La protesta se repitió varias veces en los años siguientes y casi siempre terminó igual, con la administración buscando grano de donde fuera para pagarles.",
        destacado: { tipo: "cifra", cifra: "18", unidad: "días sin cobrar antes de pararlo todo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un poblado excavado casi entero, con sus casas, sus cartas privadas y sus listas de reparto, que es una de las mejores fuentes que existen sobre la vida corriente en el Egipto antiguo. Quedó también la demostración de que el mecanismo es viejísimo y no lo inventó la industria: parar todos a la vez es la única forma de negociar que tiene quien no manda. Lo único que cambió en el siglo XIX fue que se organizó, se le puso nombre y se convirtió en un derecho reconocido por escrito.",
      },
    ],
  },
  {
    id: "la-caja-de-resistencia",
    titulo: "Una huelga se gana con la caja",
    gancho: "Aguanta quien puede comer más semanas sin sueldo. Por eso los sindicatos guardaban dinero antes de parar.",
    categoria: "Huelgas",
    color: "var(--slate)",
    encargo: "Una caja metálica con cerradura y un libro de cuentas encima.",
    entrada:
      "Europa, siglo XIX. Cuando los obreros de una fábrica dejan de trabajar, dejan también de cobrar, mientras el dueño solo deja de ganar. Esa asimetría decide casi todos los conflictos: una familia sin ahorros aguanta días, y una empresa con existencias en el almacén, semanas. Los primeros sindicatos entendieron que el problema era ese y montaron una respuesta contable.",
    paginas: [
      {
        rotulo: "El fondo",
        texto:
          "La solución fue la caja de resistencia: una cuota que cada afiliado paga todos los meses, trabaje o no, y que se guarda para repartirla cuando haya huelga. Con ese dinero se pagaba una cantidad diaria a las familias, se cubrían medicinas y a veces se ayudaba a los despedidos. Los sindicatos ingleses del siglo XIX llevaban libros de cuentas rigurosos y publicaban balances, porque su credibilidad dependía de que la gente creyera que ese dinero existía. Sin caja llena, convocar una huelga larga era condenarla de antemano, porque la gente volvía al trabajo en cuanto se acababa la comida en casa.",
        destacado: { tipo: "frase", frase: "Sin dinero guardado, una huelga larga está perdida de antemano." },
      },
      {
        rotulo: "El otro lado",
        texto:
          "Las empresas desarrollaron sus propias herramientas para ganar la competición de aguante. Contrataban a trabajadores de fuera para sustituir a los que paraban y se aseguraban entre ellas para repartirse las pérdidas. En algunos países consiguieron además el cierre patronal, que consiste en echar el candado y dejar sin sueldo también a quien no secundaba la huelga. También estaban las tiendas de la propia empresa, donde los obreros compraban a crédito durante todo el año. Al llegar la huelga, esa deuda pendiente se convertía en una forma de presión muy eficaz.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "cuota mensual sostenía toda la caja" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el mismo esquema, aunque con otros nombres y con leyes que regulan lo que antes se resolvía a la brava. Las cajas de resistencia siguen existiendo en casi todos los sindicatos, y sigue siendo verdad que la duración de una huelga depende sobre todo de cuánto aguante económico tenga cada lado. Por eso los conflictos modernos se libran a menudo por otras vías. Paros cortos en fechas señaladas, huelgas de celo o campañas de imagen hacen daño a la empresa sin obligar al trabajador a pasar meses sin cobrar.",
      },
    ],
  },
  {
    id: "los-servicios-minimos",
    titulo: "Hay huelgas que no pueden pararlo todo",
    gancho: "Un hospital o un tren no pueden cerrar del todo, así que alguien tiene que decidir qué sigue funcionando.",
    categoria: "Huelgas",
    color: "var(--plum)",
    encargo: "Un andén de estación medio vacío con un cartel de información y pocos viajeros.",
    entrada:
      "España y el resto de Europa, desde mediados del siglo XX. El derecho de huelga se reconoce en las constituciones, pero choca con un problema evidente. Si paran a la vez todos los médicos de un hospital o todos los maquinistas de una red de trenes, el perjuicio no lo sufre solo la empresa, sino gente ajena al conflicto.",
    paginas: [
      {
        rotulo: "El equilibrio",
        texto:
          "De ahí salen los servicios mínimos: una parte del trabajo que debe seguir haciéndose durante la huelga, fijada por la autoridad correspondiente. La idea es proteger a terceros sin vaciar de contenido el derecho a parar. El equilibrio es difícil y se discute cada vez, porque unos mínimos demasiado altos convierten la huelga en un gesto simbólico y unos demasiado bajos dejan sin atención a quien la necesita. En España, los tribunales han anulado muchas veces los porcentajes fijados por el gobierno de turno, en un sentido y en el otro.",
        destacado: { tipo: "frase", frase: "Mínimos altos vacían la huelga; mínimos bajos dejan a gente tirada." },
      },
      {
        rotulo: "Otras formas",
        texto:
          "Cuando parar del todo es imposible, aparecen fórmulas ingeniosas. La huelga de celo consiste en cumplir el reglamento al pie de la letra, con todas sus comprobaciones y todos sus papeles. En muchos oficios eso paraliza el servicio sin dejar de trabajar ni un minuto. Ha habido huelgas de brazos caídos, en las que la plantilla ocupa su puesto sin producir nada. Y huelgas de billetes: conductores de autobús que hacen su ruta normal pero no cobran a nadie. El usuario no sufre y la empresa pierde la recaudación del día.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "día sin recaudar y el servicio intacto" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una tensión que ninguna ley resuelve del todo y que reaparece en cada convocatoria de transporte o de sanidad. Quedó también un cambio de fondo. En las economías donde casi todo el mundo trabaja en servicios, parar ya no significa dejar de fabricar cosas, sino dejar de atender a personas. Eso hace que la opinión pública pese mucho más que antes. Por eso hoy una huelga se prepara con un plan de comunicación tanto como con una caja de resistencia, y el momento de convocarla se elige mirando el calendario del país.",
      },
    ],
  },
];
