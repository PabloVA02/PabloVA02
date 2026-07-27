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
    titulo: "Las acacias avisan y los kudús se envenenan",
    gancho: "Murieron tres mil antílopes en granjas sudafricanas y las culpables eran las hojas.",
    categoria: "Plantas",
    color: "var(--sage)",
    encargo: "Una acacia de copa plana recortada contra un cielo de sabana al atardecer.",
    entrada:
      "Años ochenta, granjas de caza del norte de Sudáfrica. Miles de kudús —un antílope grande— empiezan a morir sin causa aparente dentro de cercados donde tienen comida de sobra. Las jirafas, en cambio, sueltas y en la misma zona, están bien. El zoólogo Wouter van Hoven fue a mirar qué comían unos y otras, y encontró una respuesta que estaba en las hojas.",
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
    titulo: "Todos los plátanos que comes son el mismo plátano",
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
    titulo: "Un bosque entero que es un solo árbol",
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
