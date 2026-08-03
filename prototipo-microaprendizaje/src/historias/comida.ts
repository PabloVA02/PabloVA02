import type { Short } from "../shorts";

/* ==========================================================================
   Comida.

   Cocina cuenta trucos y cosas de la cocina; Comida cuenta de dónde salió lo
   que hay en el plato y qué le hizo al mundo. Un alimento que cruza un océano
   cambia poblaciones enteras, y eso es historia, no gastronomía.

   La regla del tema: se sigue UN ALIMENTO por el mundo y se cuenta a quién le
   cambió la vida. La patata alimentando a Irlanda y matándola. El café
   llenando de locales una ciudad y asustando a un rey. La pizza subiendo de
   comida de pobre a patrimonio de la humanidad.

   Nada de nutrición ni de consejos. Aquí no se dice a nadie lo que tiene que
   comer.
   ========================================================================== */

export const COMIDA: Short[] = [
  {
    id: "patata-europa",
    titulo: "A la patata hubo que convencer a Europa",
    gancho: "La tomaban por comida de cerdos y por causa de la lepra. Hubo que robarla para que se comiera.",
    categoria: "Comida",
    color: "var(--forest)",
    encargo: "Unas patatas con tierra encima sobre un saco de arpillera, luz de ventana.",
    entrada:
      "Europa, siglo XVIII. Hace doscientos años que llegó de América un tubérculo que crece bajo tierra, aguanta el frío y da más calorías por hectárea que cualquier cereal conocido. Y no se lo come nadie. Los campesinos lo consideran alimento de cerdos, corre la sospecha de que provoca lepra y varios países han llegado a prohibir su cultivo por decreto.",
    paginas: [
      {
        rotulo: "El truco del huerto",
        texto:
          "Un boticario francés que había sobrevivido a la guerra comiéndolas en una cárcel alemana se propuso cambiar aquello, y entendió que el problema no era agrícola sino de prestigio: a nadie le apetece comer lo que come el ganado. Convenció al rey para que le cediera un terreno malo a las afueras de París, lo plantó entero de patatas y pidió una guardia armada que lo vigilara durante el día, con orden expresa de retirarse al caer la noche. Los vecinos dedujeron que allí crecía algo valiosísimo y empezaron a robarlas de madrugada, que era exactamente el plan.",
        destacado: { tipo: "frase", frase: "Puso guardias de día y los retiraba de noche. Se las robaban." },
      },
      {
        rotulo: "La cara mala",
        texto:
          "El invento salió demasiado bien en algunos sitios. En Irlanda, la patata alimentaba a una población que se había triplicado en un siglo, y casi todo el campo dependía de una sola variedad, plantada además a partir de trozos del mismo tubérculo, es decir, clones genéticamente idénticos entre sí. En 1845 llegó un hongo que la pudría en el suelo y ninguna planta resistió, porque todas eran la misma planta. Murió un millón de personas y otro millón emigró en barco: la isla perdió una cuarta parte de sus habitantes en cinco años y todavía no ha recuperado la población de entonces.",
        destacado: { tipo: "cifra", cifra: "1/4", unidad: "de Irlanda desapareció en cinco años" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hoy es el cuarto cultivo del mundo, por detrás del arroz, el trigo y el maíz, y se come en casi todos los países del planeta. En los Andes, de donde salió, siguen cultivándose más de cuatro mil variedades distintas, de colores que en un supermercado europeo parecerían pintados a mano: moradas, negras, rojas por dentro. Y en un almacén excavado dentro de una montaña del Ártico se guardan copias de todas ellas, congeladas, por si vuelve a pasar lo de Irlanda. Aquella comida de cerdos alimenta hoy a mil millones de personas.",
      },
    ],
  },

  {
    id: "cafe-prohibido",
    titulo: "El café se prohibió por ser políticamente peligroso",
    gancho: "En sus locales cualquiera podía sentarse a discutir por un penique. A un rey le pareció demasiado.",
    categoria: "Comida",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una taza de café humeante sobre una mesa de madera con periódicos viejos.",
    entrada:
      "Londres, 1675. Hace veinte años que abrió el primer local donde se sirve una bebida negra y amarga traída de Oriente, y ya hay más de tres mil repartidos por la ciudad. No son tabernas: no se sirve alcohol, se leen los periódicos en voz alta y se discute de todo. Aquel año, el rey firma un decreto para cerrarlos todos.",
    paginas: [
      {
        rotulo: "Un penique",
        texto:
          "Se las conocía como las universidades de un penique, porque por el precio de una taza cualquiera podía entrar, sentarse en la mesa común y meterse en la conversación sin que importara su apellido; en una sociedad donde todo dependía de la cuna, aquello resultaba casi subversivo. De aquellas mesas salieron cosas muy concretas: en un local del puerto se organizó la primera gran compañía de seguros marítimos del mundo, y en otros se cerraban compraventas de acciones que acabarían convirtiéndose en la bolsa de la ciudad. El rey los cerró porque allí se hablaba mal del gobierno.",
        destacado: { tipo: "frase", frase: "Las llamaban «universidades de un penique»." },
      },
      {
        rotulo: "Once días",
        texto:
          "El decreto duró once días. Hubo tal protesta —comerciantes, banqueros y hasta miembros de la propia corte iban a diario— que la corona lo retiró con una excusa vaga sobre la buena voluntad del monarca hacia sus súbditos. Prohibiciones parecidas se intentaron en otros sitios y con más dureza: en el imperio otomano se llegó a castigar con la muerte a los reincidentes, y en varias ciudades alemanas se persiguió el café para proteger el negocio de la cerveza, que pagaba impuestos al príncipe. Ninguna de esas prohibiciones aguantó más de unos pocos años.",
        destacado: { tipo: "cifra", cifra: "11", unidad: "días duró la prohibición" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El grano salió de Etiopía, pasó a Yemen, donde se empezó a tostar hacia el siglo XV, y de allí a todo el mundo escondido en el equipaje de peregrinos y de contrabandistas. Hoy se toman más de dos mil millones de tazas al día. La cafeína es la sustancia que altera el ánimo más consumida del planeta y funciona por bloqueo: no da energía, sino que tapa la señal química con la que el cerebro avisa de que está cansado. La deuda se paga después, por la tarde, cuando llega toda junta.",
      },
    ],
  },

  {
    id: "pizza-margarita",
    titulo: "La margarita se llama así por una reina",
    gancho: "La pizza era comida de pobres. Una visita real de 1889 le dio permiso para subir de clase.",
    categoria: "Comida",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una pizza recién sacada del horno de leña, con el borde quemado a manchas.",
    entrada:
      "Nápoles, junio de 1889. La reina de Italia visita la ciudad y se aloja en un palacio con vistas al mar. La pizza es entonces comida de pobres: se vende doblada por la calle, se come de pie y en la corte no se prueba. La reina, harta de menús franceses después de semanas de viaje, pide probar aquello de lo que habla todo el mundo.",
    paginas: [
      {
        rotulo: "Las tres pizzas",
        texto:
          "Llamaron al pizzero más conocido de la ciudad, que llevaba veinte años en el oficio y subió al palacio con su mujer y con la masa hecha de casa. Preparó tres: una con manteca de cerdo, queso y albahaca; otra con anchoas y ajo; y una tercera con tomate, mozzarella y albahaca, que llevaba juntos los tres colores de la bandera italiana, recién estrenada como símbolo de un país que solo tenía veintiocho años de vida. Las horneó allí mismo, en la cocina del palacio, y la reina dijo que la tercera era la que más le gustaba de las tres.",
        destacado: { tipo: "frase", frase: "Los tres colores de una bandera que solo tenía veintiocho años." },
      },
      {
        rotulo: "La carta",
        texto:
          "Días después llegó a la pizzería una carta con el sello de la casa real, firmada por el jefe de servicio de mesa, agradeciendo el trabajo y confirmando que las pizzas habían sido del agrado de su majestad. El pizzero la enmarcó, la colgó en la pared del local y bautizó aquella receta con el nombre de la reina. El documento sigue expuesto en el mismo sitio, en un negocio que continúa abierto y en manos de la misma familia. Algunos historiadores italianos han discutido su autenticidad y el asunto todavía no está cerrado del todo.",
        destacado: { tipo: "cifra", cifra: "1889", unidad: "el año de la carta enmarcada" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La combinación existía antes de aquella visita —hay recetas anteriores con tomate y queso—, así que lo que aportó la historia no fue el plato sino el permiso: desde entonces, comer pizza dejó de ser cosa exclusiva de pobres. En 2017, el oficio de pizzero napolitano entró en la lista de patrimonio cultural de la humanidad. Y la receta está protegida hoy por un reglamento que fija el diámetro máximo, el grosor del borde y hasta el tipo de harina. La comida que se vendía doblada por la calle acabó con normativa propia.",
      },
    ],
  },
];
