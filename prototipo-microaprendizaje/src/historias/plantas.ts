import type { Short } from "../shorts";

/* ==========================================================================
   Plantas.

   El tema donde más fácil es caer en lo cursi. Los árboles no se hablan, no
   se cuidan entre ellos y no tienen madres: eso son metáforas de divulgación
   que se han ido tomando al pie de la letra hasta convertirse en dato.

   La regla del tema: se cuenta el experimento y se cuenta la discusión. Qué
   se midió exactamente, quién lo midió y qué dicen los que no están de
   acuerdo. Buena parte de lo que circula sobre comunicación entre plantas
   está en revisión ahora mismo, y contar esa revisión es más interesante que
   repetir el eslogan.

   Y se mira la comida. Casi todo lo que hay en una frutería es el resultado
   de una selección humana brutal, y esa historia tiene fechas y consecuencias.
   ========================================================================== */

export const PLANTAS: Short[] = [
  {
    id: "arboles-se-avisan",
    titulo: "Las acacias se avisan",
    gancho: "Murieron tres mil antílopes en granjas sudafricanas y las culpables eran las hojas.",
    categoria: "Plantas",
    color: "var(--sage)",
    encargo: "Una acacia de copa plana recortada contra un cielo de sabana al atardecer.",
    fotos: [
      {
        archivo: "WO124 Umbrella Thorn Acacia Tree - DPLA - fe73ffcc3b695806850aae36a566f331.jpg",
        autor: "Una acacia de copa plana, la llamada espino paraguas, sola en la sabana africana.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:WO124_Umbrella_Thorn_Acacia_Tree_-_DPLA_-_fe73ffcc3b695806850aae36a566f331.jpg",
        foco: "50% 50%",
        alt: "Un árbol solitario con la copa completamente plana y las ramas retorcidas, sobre una llanura de hierba seca.",
      },
      {
        archivo: "Acacia mellifera on a farm in Namibia.jpg",
        autor: "Una acacia mellifera en una finca del centro de Namibia. Fotografía de Tim Brunauer para la GIZ.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Acacia_mellifera_on_a_farm_in_Namibia.jpg",
        foco: "50% 50%",
        alt: "Un arbusto espinoso de ramas bajas y muy abiertas en un terreno arenoso y despejado.",
      },
      {
        archivo: "Masai Giraffe (giraffa camelopardalis tippelskirchi).jpg",
        autor: "Una jirafa masái ramoneando. Fotografía de Gregory Moine.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Masai_Giraffe_(giraffa_camelopardalis_tippelskirchi).jpg",
        foco: "50% 45%",
        alt: "Una jirafa estirando el cuello hacia las ramas altas de un árbol, con la sabana detrás.",
      },
      {
        archivo: "Vachellia drepanolobium.jpg",
        autor: "La acacia silbadora, Vachellia drepanolobium, de las sabanas de África oriental. Fotografía de Jozef020.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Vachellia_drepanolobium.jpg",
        foco: "50% 45%",
        alt: "Un árbol pequeño de espinas blancas y largas con unas bolas huecas en la base de cada par.",
      },
    ],
    entrada:
      "Años ochenta, granjas de caza del norte de Sudáfrica. Miles de kudús, un antílope grande de cuernos en espiral, empiezan a morir sin causa aparente dentro de cercados donde tienen comida de sobra y ni un depredador cerca. Las jirafas, en cambio, que andan sueltas por la misma zona y comen de los mismos árboles, están perfectamente. El zoólogo Wouter van Hoven fue a mirar despacio qué comían unos y otras, y cómo lo comían, y encontró que la respuesta entera estaba en las hojas.",
    paginas: [
      {
        rotulo: "El taninos",
        texto:
          "Las acacias se defienden de los herbívoros cargando sus hojas de taninos, unas sustancias que se pegan a las proteínas y las vuelven indigeribles. Van Hoven midió que, en cuanto un animal empieza a ramonear, el árbol dispara la concentración en cuestión de minutos, y que los ejemplares vecinos —a los que nadie había tocado— también la subían. La señal viajaba por el aire: los árboles mordidos liberan etileno, un gas volátil, y los de alrededor lo detectan y se preparan. En un cercado, un kudú no puede irse a otra parte, así que sigue comiendo hoja envenenada hasta morir.",
        destacado: { tipo: "cifra", cifra: "minutos", unidad: "tarda el árbol vecino en reaccionar" },
      },
      {
        rotulo: "La letra pequeña",
        texto:
          "Aquí conviene frenar, porque de casos como este ha salido toda una mitología. Que una planta emita un compuesto volátil y otra lo detecte y reaccione está bien documentado en varias especies. Lo que no está establecido es el paso siguiente, el del bosque como red solidaria donde los árboles viejos alimentan a los pequeños a través de los hongos del suelo. Esa idea, popularizada a partir de un artículo de 1997, ha sido revisada críticamente en los últimos años: una revisión publicada en <strong>2023</strong> concluyó que las pruebas de campo son mucho más flojas de lo que sugiere la divulgación.",
        destacado: {
          tipo: "frase",
          frase: "Emitir un gas no es hablar. Y detectarlo no es ayudar.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las jirafas, mientras tanto, tienen resuelto el problema desde hace mucho: comen contra el viento, se mueven cada pocos minutos y saltan varios árboles antes de volver a parar, exactamente el comportamiento que hace falta para adelantarse al aviso. Lo interesante del caso no es que los árboles se comuniquen, sino algo más incómodo: un cercado que parece generoso —comida abundante, sin depredadores— puede acabar matando a un animal precisamente por impedirle la conducta que su propio alimento le obliga a tener: moverse, cambiar de árbol cada pocos bocados y no volver al mismo sitio.",
      },
    ],
  },

  {
    id: "platano-clon",
    titulo: "Todos los plátanos son el mismo",
    gancho: "Genéticamente idénticos, sin semillas, y ya perdimos una variedad entera así.",
    categoria: "Plantas",
    color: "var(--ochre)",
    encargo: "Un racimo de plátanos verdes colgando en una plantación, hojas al fondo.",
    entrada:
      "Un plátano de supermercado no tiene semillas, y sin semillas no hay reproducción sexual. Cada planta nueva sale de un brote de otra planta, así que todos los plátanos de una variedad son literalmente clones: el mismo individuo repetido millones de veces. Eso los hace cómodos, predecibles y uniformes. También los hace extraordinariamente frágiles.",
    paginas: [
      {
        rotulo: "El antecesor",
        texto:
          "Hasta mediados del siglo XX, el plátano de exportación no era el de ahora: era la variedad Gros Michel, que según quienes la probaron era más dulce y aguantaba mejor el transporte. Un hongo del suelo, <em>Fusarium oxysporum</em>, empezó a arrasar las plantaciones de Centroamérica. Contra un cultivo de clones idénticos, un patógeno que vence a uno los vence a todos, y no hay variación genética donde refugiarse. El hongo permanece años en la tierra, así que ni siquiera sirve replantar. Hacia <strong>1960</strong>, la Gros Michel había desaparecido del comercio internacional.",
        destacado: { tipo: "cifra", cifra: "1960", unidad: "se dejó de exportar la variedad anterior" },
      },
      {
        rotulo: "El relevo",
        texto:
          "La industria se salvó cambiando de clon: la Cavendish, resistente a aquella cepa, menos sabrosa y más delicada al golpe, obligó a rehacer cajas, barcos y almacenes enteros. Es la que se come hoy en casi todo el mundo. El problema es que se repitió exactamente la misma jugada, plantar millones de ejemplares idénticos, y desde los años noventa avanza una cepa nueva del mismo hongo, llamada raza tropical 4, contra la que la Cavendish no está protegida. Se detectó en Asia, saltó después a África y a Oriente Medio, y ya se ha confirmado en Sudamérica.",
        destacado: {
          tipo: "frase",
          frase: "La solución de 1960 fue repetir el error con otro clon.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Existen cientos de variedades de plátano en el mundo, muchas con semillas duras y sabores muy distintos, y en buena parte de África y Asia el plátano de cocina es un alimento básico que se cultiva de forma mucho más diversa. Lo que está en riesgo no es la especie: es el modelo de un solo clon global metido en un contenedor. Y hay una consecuencia que se nota en el bolsillo: el plátano es de las frutas más baratas del supermercado precisamente porque esa uniformidad industrial abarata todo, desde la recogida hasta el embalaje.",
      },
    ],
  },

  {
    id: "pando-arbol",
    titulo: "Un bosque que es un árbol",
    gancho: "Cuarenta y siete mil troncos en Utah comparten raíz y son el mismo individuo.",
    categoria: "Plantas",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un bosque de álamos temblones de troncos blancos, hojas amarillas, luz de otoño.",
    entrada:
      "En el centro de Utah hay un bosque de álamo temblón de unas cuarenta y tres hectáreas. Visto desde fuera son decenas de miles de árboles blancos idénticos. Bajo tierra son todos el mismo organismo: un único sistema de raíces que va sacando troncos nuevos. Se llama Pando, «me extiendo» en latín, y es de los seres vivos más pesados que se conocen.",
    paginas: [
      {
        rotulo: "Un solo individuo",
        texto:
          "El álamo temblón se reproduce sobre todo por raíz: cada tronco que se ve es un brote de la misma planta, genéticamente idéntico a los demás. Las pruebas de ADN confirmaron que los cerca de <strong>47.000</strong> troncos de Pando comparten genotipo, y todos son masculinos. La masa total estimada ronda las seis mil toneladas. Se nota a simple vista en otoño: mientras los álamos de alrededor amarillean cada uno a su ritmo, la mancha de Pando cambia de color a la vez, como un solo organismo, porque eso es exactamente lo que es.",
        destacado: { tipo: "cifra", cifra: "47.000", unidad: "troncos, un único ser vivo" },
      },
      {
        rotulo: "La edad",
        texto:
          "Su antigüedad es objeto de discusión seria y conviene no repetir la cifra grande sin avisar. Cada tronco vive unas décadas, así que contar anillos no sirve; hay que estimar la edad del sistema de raíces, y ahí las propuestas van desde unos pocos miles de años hasta cifras muy superiores, con supuestos difíciles de comprobar. Lo que sí está claro es que el conjunto es antiguo y que lleva mucho tiempo en el mismo sitio, y también que últimamente le va mal: hay pocos brotes jóvenes y el bosque no se está renovando.",
        destacado: {
          tipo: "frase",
          frase: "Los troncos duran décadas. La raíz lleva ahí desde antes de todo.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "La causa del declive está bastante identificada: ciervos y wapitíes se comen los brotes nuevos antes de que puedan hacerse árbol, y esos herbívoros abundan porque en la zona apenas quedan depredadores grandes. Donde se han instalado vallados de protección, los brotes salen adelante. Es un recordatorio poco romántico de cómo funciona un ecosistema: el organismo más pesado del bosque puede estar muriéndose despacio no por una plaga, ni por el clima, ni por la mano directa de nadie, sino sencillamente porque en esa ladera concreta hace décadas que falta un lobo.",
      },
    ],
  },
];
