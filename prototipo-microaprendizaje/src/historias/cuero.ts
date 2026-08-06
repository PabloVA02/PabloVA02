import type { Short } from "../shorts";

/* ==========================================================================
   El cuero.

   Piel de animal convertida en material que dura décadas, mediante un
   proceso químico que la gente da por sabido y no conoce. El tema se
   estropea si se cuenta como moda o como debate moral.

   La regla del tema: se explica QUÉ LE PASA A LA PIEL para dejar de
   pudrirse, que es el corazón del asunto, y qué cuesta cada método en agua,
   en tiempo y en salud. Con cifras de meses y de litros, y diciendo siempre
   quién trabaja en las curtidurías, que nunca ha sido gente acomodada.
   ========================================================================== */

export const CUERO: Short[] = [
  {
    id: "por-que-no-se-pudre",
    titulo: "Por qué se curte el cuero",
    gancho: "Una piel sin tratar se descompone en días. El curtido cambia su química para que las bacterias no puedan con ella.",
    categoria: "Cuero",
    color: "var(--ochre)",
    encargo: "Pieles colgadas de un tendedero de madera en un patio con tinas.",
    /* De arriba abajo del short: el patio entero, la parte sucia, de dónde
       salen los taninos y en qué acaba la piel. */
    fotos: [
      {
        archivo: "Fez Chouara Tannery (54239949701).jpg",
        autor:
          "La curtiduría de Chouara, en Fez, con las pieles secándose en las terrazas y las tinas abajo. Fotografía de Jorge Franganillo, 2024.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Fez_Chouara_Tannery_(54239949701).jpg",
        foco: "50% 45%",
        alt: "Vista desde arriba de un patio de curtiduría lleno de tinas redondas, con pieles claras colgadas de barandillas y palos en las terrazas de alrededor.",
      },
      {
        archivo: "Traditional handicraft, leather industry.jpg",
        autor:
          "Un curtidor sacando una piel encalada de la tina, en Marruecos. Fotografía de Amine Boussiar, 2024.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Traditional_handicraft,_leather_industry.jpg",
        foco: "50% 50%",
        alt: "Un hombre con delantal, metido hasta la cintura en una tina de piedra, tirando de una piel blanquecina y empapada.",
      },
      {
        archivo: "Peeling hemlock bark for tanning.jpg",
        autor:
          "Pelando y apilando corteza de abeto para la curtiduría de Prattsville, Nueva York, que hacia 1840 era la mayor del mundo. Grabado de hacia 1850.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Peeling_hemlock_bark_for_tanning.jpg",
        foco: "50% 55%",
        alt: "Grabado de un bosque talado donde varios hombres arrancan la corteza de los troncos caídos y la amontonan.",
      },
      {
        archivo: "Leather Craftsman (46403248732).jpg",
        autor:
          "Un guarnicionero cosiendo a máquina en su taller. Fotografía de Dennis Sylvester Hurd, 2018.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Leather_Craftsman_(46403248732).jpg",
        foco: "55% 50%",
        alt: "Un hombre de perfil ante una máquina de coser antigua, con una pieza de cuero en la mano y la pared verde detrás.",
      },
    ],
    entrada:
      "Todas las culturas, desde hace al menos ocho mil años. Una piel recién quitada a un animal es materia orgánica llena de agua y de proteína, así que empieza a descomponerse en cuestión de horas y en pocos días queda inservible. Curtirla consiste en modificar químicamente esa proteína para que las bacterias y los hongos ya no puedan alimentarse de ella. No es secarla, ni limpiarla, ni taparla: es cambiarla por dentro de manera irreversible. Hecho eso, la misma piel que se pudría en una semana aguanta siglos, y en los museos hay zapatos y correas de hace tres mil años en mejor estado que la madera que los acompañaba.",
    paginas: [
      {
        rotulo: "El proceso",
        texto:
          "Antes de curtir hay que limpiar, y esa parte es la más desagradable de todas. La piel se remoja, se le quitan la carne y la grasa a cuchillo, y se sumerge en cal para aflojar el pelo, que después se raspa. En algunas tradiciones se usaban además baños de excrementos de perro o de aves, cuyas enzimas ablandan la piel y la dejan flexible. Todo eso explica por qué las curtidurías estaban siempre a las afueras de las ciudades, aguas abajo del río y a favor del viento. El olor de una curtiduría en pleno trabajo se nota a varias calles de distancia y no hay manera de disimularlo.",
        destacado: { tipo: "frase", frase: "Antes de curtir hay que quitar carne, grasa y pelo." },
      },
      {
        rotulo: "Corteza o cromo",
        texto:
          "El método tradicional usa taninos, unas sustancias que están en la corteza de roble y en otras plantas y que se unen a las fibras de la piel volviéndolas insensibles a la putrefacción. Es lento: la piel pasa meses moviéndose de tina en tina, con concentraciones cada vez mayores, y el resultado es un cuero firme y de color castaño que envejece bien. Desde 1858 existe otro método mucho más rápido, con sales de cromo, que deja el cuero listo en un día y blando desde el principio. Ese cambio abarató tanto el calzado que en pocas décadas se impuso en casi todas las fábricas del mundo.",
        destacado: { tipo: "cifra", cifra: "12", unidad: "meses puede durar el curtido vegetal" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron los dos métodos conviviendo, con el de cromo produciendo la inmensa mayoría del cuero del mundo por su rapidez y su precio. Quedó también su problema, porque los residuos con cromo son peligrosos si no se tratan y han contaminado ríos enteros en zonas donde no hay control. Y quedó una regla para distinguirlos que conoce cualquier zapatero. El cuero curtido con plantas huele a bosque, se marca con la uña y coge color con el uso, mientras que el de cromo se queda igual desde el primer día hasta el último.",
      },
    ],
  },
  {
    id: "el-barrio-de-los-curtidores",
    titulo: "Los curtidores vivían fuera",
    gancho: "Su oficio apestaba tanto que las leyes municipales lo expulsaban al otro lado del río, junto a los mataderos.",
    categoria: "Cuero",
    color: "var(--slate)",
    encargo: "Un patio con decenas de tinas redondas de piedra llenas de líquido oscuro.",
    entrada:
      "Ciudades europeas y del norte de África, siglos XII a XIX. Las ordenanzas municipales de la época regulan con detalle dónde puede instalarse cada oficio, y los curtidores aparecen siempre en el mismo sitio: fuera de las murallas, aguas abajo y a favor del viento. No es una cuestión de prestigio social, sino de olor, de agua sucia y de riesgo de enfermedad.",
    paginas: [
      {
        rotulo: "El agua",
        texto:
          "Una curtiduría consume cantidades enormes de agua y la devuelve cargada de pelo, cal, grasa y restos orgánicos. Por eso tenían que estar junto a un río, y por eso las ciudades las obligaban a situarse por debajo del punto donde se recogía el agua de beber. Aun así, los pleitos entre curtidores y vecinos llenan los archivos municipales de media Europa durante siglos, y en varias ciudades hubo que trasladar el barrio entero cuando la ciudad creció y acabó rodeándolo. El traslado costaba una fortuna y los gremios de curtidores lo peleaban durante décadas antes de aceptarlo.",
        destacado: { tipo: "frase", frase: "Siempre aguas abajo del sitio donde se cogía el agua de beber." },
      },
      {
        rotulo: "El oficio",
        texto:
          "El trabajo era duro y estaba mal pagado, y en muchas sociedades quedó asociado a grupos concretos que lo heredaban de padres a hijos. En la India, el curtido se asignó tradicionalmente a las castas más bajas, y esa asignación sigue teniendo consecuencias hoy en el acceso a la vivienda y a otros trabajos. Las condiciones tampoco han mejorado en todas partes. Varios informes recientes documentan trabajo infantil y falta de protección en curtidurías de países donde se fabrica buena parte del cuero barato que se vende en el mundo, sin guantes ni mascarillas.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "litros de agua puede llevarse una piel" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron barrios enteros con nombre de curtidores en ciudades de media Europa, hoy convertidos en zonas de bares sin que casi nadie sepa por qué se llaman así. Quedaron también algunas curtidurías tradicionales funcionando a la vista, con sus tinas redondas de piedra, que se han convertido en atracción turística y en fuente de fotografías. Los visitantes se asoman desde las terrazas de los edificios de alrededor, y en algunas les dan una ramita de hierbabuena para soportar el olor. Y quedó el criterio urbanístico original, que sigue vigente con otro nombre: las actividades que ensucian se colocan lejos y donde el viento no las traiga.",
      },
    ],
  },
  {
    id: "el-cuero-que-no-es-cuero",
    titulo: "El cuero falso es plástico",
    gancho: "Se llama de muchas maneras, pero la mayoría son telas recubiertas de plástico. Y algunas alternativas nuevas también.",
    categoria: "Cuero",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un trozo de material sintético color cuero cortado, con la tela a la vista.",
    entrada:
      "Industria textil mundial, con los primeros sustitutos plásticos comercializados desde los años cincuenta del siglo XX. Bajo nombres comerciales muy variados se venden materiales que imitan el cuero, y conviene saber de qué están hechos. La mayoría consisten en una tela de fondo, normalmente de poliéster, recubierta con una capa de plástico a la que se le graba un dibujo de poros.",
    paginas: [
      {
        rotulo: "Los dos plásticos",
        texto:
          "Los dos recubrimientos habituales son bastante distintos entre sí. El más barato usa un plástico que necesita aditivos para volverse flexible, se agrieta con los años y libera esas sustancias, y es el que se descascarilla en los sofás viejos. El otro, más caro, resulta más resistente y más agradable al tacto, y es el que se usa en calzado y tapicería de calidad. Ninguno de los dos es biodegradable, así que su ventaja ambiental frente al cuero animal depende mucho de cuántos años aguante la prenda antes de acabar en la basura.",
        destacado: { tipo: "frase", frase: "El de los sofás que se descascarillan es el barato." },
      },
      {
        rotulo: "Los vegetales",
        texto:
          "En los últimos años han aparecido materiales fabricados con hoja de piña, con corcho, con cáscara de manzana o con micelio de hongo, que es la parte filamentosa que crece bajo tierra. Son prometedores, pero tienen un problema común. Para aguantar el uso, casi todos llevan una capa de plástico encima o una base sintética debajo, de modo que la proporción de material vegetal acaba siendo menor de lo que sugiere el nombre. Las normas de etiquetado europeas empiezan a exigir que se indique en la etiqueta qué porcentaje del material es realmente vegetal.",
        destacado: { tipo: "cifra", cifra: "1950", unidad: "la década de los primeros sustitutos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una comparación más complicada de lo que parece. El cuero animal es un subproducto de la industria cárnica, dura décadas y es biodegradable si se curtió con plantas, pero su curtido consume agua y productos químicos. El sintético evita el uso de animales y contamina menos en la fabricación, aunque dura bastante menos y termina en un vertedero como plástico que tardará siglos en deshacerse. La conclusión que dan los análisis de ciclo de vida es siempre la misma: lo que más pesa no es el material, sino cuántos años se use el objeto.",
      },
    ],
  },
];
