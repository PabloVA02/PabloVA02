import type { Short } from "../shorts";

/* ==========================================================================
   La lavadora.

   El electrodoméstico que más horas de trabajo ha ahorrado en la historia y
   del que nadie habla, porque el trabajo que ahorró no se pagaba y no salía
   en ninguna estadística.

   La regla del tema: se cuentan HORAS Y KILOS. Cuánta agua había que subir,
   cuánto pesaba la ropa mojada, cuántas horas se iban en un día de colada.
   Nada de nostalgia del lavadero ni de estampas costumbristas: la colada era
   trabajo pesado, y se cuenta como lo que era.
   ========================================================================== */

export const LAVADORA: Short[] = [
  {
    id: "el-dia-de-la-colada",
    titulo: "El peor día de la semana",
    gancho: "Doscientos litros de agua acarreados a mano, hervidos y tirados. Y eso, todos los lunes.",
    categoria: "Lavadora",
    color: "var(--slate)",
    encargo: "Una tina de zinc con ropa y una tabla de restregar apoyada dentro.",
    fotos: [
      {
        archivo:
          "A woman doing laundry at a sink with a washboard - DPLA - 15aa1922feffe3b0747ff2f07dbb13ef.jpg",
        autor: "Una mujer lavando a mano sobre la tabla de restregar, en los años treinta. Fotografía de John Sanromá.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:A_woman_doing_laundry_at_a_sink_with_a_washboard_-_DPLA_-_15aa1922feffe3b0747ff2f07dbb13ef.jpg",
        foco: "50% 50%",
        alt: "Una mujer inclinada sobre una pila, restregando ropa contra una tabla de madera acanalada.",
      },
      {
        archivo: "Women washing laundry in a river, NINO F Scholten Jourdain Mer Morte 1 090.tiff",
        autor: "Lavando en el río, que es como se hizo la colada durante milenios. Fotografía de Frank Scholten.",
        licencia: "Dominio público",
        pdPorEdad: 1942,
        fuente: "https://commons.wikimedia.org/wiki/File:Women_washing_laundry_in_a_river,_NINO_F_Scholten_Jourdain_Mer_Morte_1_090.tiff",
        foco: "50% 50%",
        alt: "Varias mujeres agachadas en la orilla de un río, frotando ropa contra las piedras.",
      },
      {
        archivo: "Guam women washing laundry in stream, June 1945.tif",
        autor: "Colada en un arroyo, Guam, 1945. Archivos Nacionales de Estados Unidos.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Guam_women_washing_laundry_in_stream,_June_1945.tif",
        foco: "50% 50%",
        alt: "Mujeres lavando ropa metidas hasta las rodillas en un arroyo, entre la vegetación.",
      },
      {
        archivo: "A woman doing laundry at a sink with a washboard - DPLA - 2579d506de283563dca22c303a9b5e69.jpg",
        autor: "La misma colada, un momento después. Fotografía de John Sanromá.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:A_woman_doing_laundry_at_a_sink_with_a_washboard_-_DPLA_-_2579d506de283563dca22c303a9b5e69.jpg",
        foco: "50% 50%",
        alt: "La misma escena de la pila y la tabla de restregar, con la ropa a remojo.",
      },
    ],
    entrada:
      "Europa y América, 1900. En una casa sin agua corriente, lavar la ropa de una familia ocupa un día completo de trabajo físico duro, de sol a sol, y por eso tiene día fijo en la semana y nombre propio: el día de la colada. Los manuales domésticos de la época lo describen paso a paso con una frialdad que asusta: acarrear el agua cubo a cubo, calentarla, hervir la ropa blanca, restregarla contra una tabla, aclararla tres veces, escurrirla a mano y tenderla. Y al día siguiente, con la ropa aún húmeda colgada por toda la casa, tocaba planchar.",
    paginas: [
      {
        rotulo: "El agua",
        texto:
          "Lo primero era el agua, y era lo peor. Una colada familiar pedía unos doscientos litros, que había que subir del pozo o de la fuente en cubos de diez, uno detrás de otro, y calentar en una caldera sobre el fuego. Un cubo lleno pesa diez kilos, así que la jornada empezaba con veinte viajes cargando peso, y terminaba con otros tantos para vaciar la tina. En las ciudades con agua corriente el trabajo se aligeraba, pero seguía habiendo que llenar, hervir y vaciar a mano, con el agua sucia saliendo por un cubo.",
        destacado: { tipo: "cifra", cifra: "200", unidad: "litros de agua pedía una colada" },
      },
      {
        rotulo: "Restregar y escurrir",
        texto:
          "La ropa se frotaba contra una tabla ondulada de madera o de metal, prenda por prenda, con jabón duro y a veces con sosa, que corta la grasa y también la piel: las manos agrietadas eran la marca del oficio. Las piezas grandes se hervían en la caldera y se removían con un palo. Después venía escurrir, que con una sábana mojada de algodón es un trabajo de fuerza pura, porque puede pesar cinco o seis kilos empapada. Se retorcía entre dos personas, cada una girando en sentido contrario, y se tendía con las manos ya sin fuerza.",
        destacado: { tipo: "frase", frase: "Una sábana empapada pesa seis kilos y hay que retorcerla." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el rastro en el idioma y en los edificios: el lunes de colada, los lavaderos públicos con sus pilas de piedra inclinadas, los tendederos entre patios y el oficio de lavandera, que fue durante siglos uno de los pocos trabajos remunerados accesibles a una mujer sin instrucción y uno de los peor pagados. Quedó también un cálculo que se hizo después y que sigue impresionando: a comienzos del siglo XX una familia dedicaba a lavar la ropa entre once y doce horas por semana, casi todas ellas de trabajo de fuerza. Hoy son menos de dos, y ninguna de ellas se pasa cargando cubos.",
      },
    ],
  },

  {
    id: "la-primera-electrica",
    titulo: "Arrancaba dedos",
    gancho: "El motor iba a la vista y el escurridor de rodillos no tenía freno: si te pillaba la mano, seguía girando.",
    categoria: "Lavadora",
    color: "var(--clay)",
    encargo: "Una lavadora antigua de tambor de madera con dos rodillos de goma encima.",
    fotos: [
      {
        archivo: "MieleKraftmaschineH1a.jpg",
        autor: "Lavadora Miele de bombo de madera con motor eléctrico acoplado, uno de los primeros modelos. Fotografía de Christoph Rieder, 2022.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:MieleKraftmaschineH1a.jpg",
        foco: "50% 45%",
        alt: "Un bombo de duelas de madera con dos grandes engranajes de hierro fundido al aire y un motor eléctrico unido por una correa.",
      },
      {
        archivo: "MieleKraftmaschineH3a.jpg",
        autor: "Detalle del mecanismo: piñones, correa y motor, todo a la intemperie. Fotografía de Christoph Rieder, 2022.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:MieleKraftmaschineH3a.jpg",
        foco: "50% 50%",
        alt: "Primer plano de los engranajes dentados y la correa de transmisión de una lavadora antigua, sin ninguna carcasa.",
      },
      {
        archivo: "MieleKraftmaschineH6a.jpg",
        autor: "La misma máquina vista por el otro costado, con el bombo y el bastidor de fundición. Fotografía de Christoph Rieder, 2022.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:MieleKraftmaschineH6a.jpg",
        foco: "50% 50%",
        alt: "Vista lateral del bombo de madera montado sobre patas de hierro, con la polea del motor debajo.",
      },
      {
        archivo: "Feldbach-Nostalgiewelt Posch-washing machines-04ASD.jpg",
        autor: "Colección de lavadoras antiguas en el museo Nostalgiewelt de Feldbach, Austria, 2020. Fotografía de Asurnipal.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Feldbach-Nostalgiewelt_Posch-washing_machines-04ASD.jpg",
        foco: "50% 50%",
        alt: "Varias lavadoras de distintas épocas alineadas en una sala de museo.",
      },
    ],
    entrada:
      "Estados Unidos, 1908. Sale a la venta la primera lavadora eléctrica fabricada en serie: un bombo de madera montado sobre un bastidor de hierro y movido por un motor eléctrico acoplado con una correa. La idea es sencilla y la ejecución, temeraria. El motor va colgado debajo sin carcasa ninguna, la correa gira al aire a la altura de las piernas y todo el conjunto se moja sin parar con agua jabonosa, que es exactamente lo que hace falta para que la electricidad busque camino por donde no debe y lo encuentre.",
    paginas: [
      {
        rotulo: "El motor al aire",
        texto:
          "Aquellos primeros aparatos electrocutaban con cierta regularidad y provocaron incendios, porque nadie había pensado todavía en aislar un motor que trabaja rodeado de agua. Las revistas técnicas de la época publican advertencias que hoy suenan a broma: no tocar el aparato con los pies descalzos sobre suelo mojado. Pero el peligro más frecuente no era la electricidad, sino la pieza que iba encima: un par de rodillos de goma accionados por una manivela o por el mismo motor, entre los que se pasaba la ropa para escurrirla y que sustituían al retorcido a mano.",
        destacado: { tipo: "frase", frase: "Un motor sin carcasa girando encima de agua jabonosa." },
      },
      {
        rotulo: "Los rodillos",
        texto:
          "El escurridor de rodillos apretaba con fuerza y no distinguía entre una sábana y un brazo. Si una mano entraba con la tela, los rodillos seguían tirando y el brazo entero pasaba entre ellos, con quemaduras por rozadura, fracturas y aplastamientos. Los hospitales americanos llegaron a tener un nombre para ese tipo de lesión, y afectaba sobre todo a niños que ayudaban en casa. La solución tardó decenios: un pestillo que separa los rodillos de golpe al empujarlo, primero opcional y obligatorio después. Hoy cualquier aparato doméstico se para al abrir la tapa por descendencia directa de aquello.",
        destacado: { tipo: "cifra", cifra: "1908", unidad: "el año de la primera eléctrica en serie" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el electrodoméstico y quedó, sobre todo, la idea de que una máquina doméstica tiene que ser segura para alguien que no sabe cómo funciona y que la usa cansado, con prisa y con niños alrededor. Esa idea no existía en 1908: se vendía el aparato y el cuidado corría por cuenta del usuario. El escurridor de rodillos desapareció en los años cincuenta, cuando el mismo tambor aprendió a girar muy deprisa para expulsar el agua por la fuerza del giro. Aquella máquina que arrancaba dedos ahorraba, aun así, media jornada de trabajo por colada.",
      },
    ],
  },

  {
    id: "horas-que-devolvio",
    titulo: "Más que internet",
    gancho: "No por la ropa limpia, sino por las horas que devolvió a quien lavaba, que casi siempre era una mujer.",
    categoria: "Lavadora",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una lavadora blanca moderna con la puerta abierta en una cocina vacía.",
    entrada:
      "En 2010, un economista coreano que estudia el desarrollo industrial lanzó una provocación en una conferencia muy vista, de esas que corren solas: sostuvo delante del público que la lavadora ha cambiado el mundo mucho más que internet. Suena a titular buscado y no lo es del todo. El argumento no va de tecnología ni de nostalgia, sino de aritmética del tiempo, y se apoya en una serie de encuestas sobre uso del tiempo que empezaron a hacerse en los años veinte y que se repiten desde entonces. Y los números que sacó de esas encuestas son bastante difíciles de rebatir.",
    paginas: [
      {
        rotulo: "La cuenta",
        texto:
          "Las cifras son contundentes. Lavar la ropa de una familia ocupaba a comienzos del siglo XX entre once y doce horas semanales; en los años sesenta, con lavadora en casa, bajó a unas dos; hoy, contando cargar, tender y doblar, ronda la hora y media. Son diez horas por semana devueltas, casi quinientas al año, más de un mes entero de jornadas de ocho horas. Y no eran horas cualesquiera: eran horas de trabajo físico pesado que recaían casi siempre sobre la misma persona de la casa, y que no aparecían en ninguna contabilidad nacional.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "horas semanales devueltas por casa" },
      },
      {
        rotulo: "El matiz",
        texto:
          "La tesis tiene una réplica seria que conviene contar, porque es de las que enseñan a leer datos. El tiempo total dedicado a las tareas del hogar no bajó tanto como cabría esperar, porque al hacerse más fácil lavar subieron los estándares: se cambia de ropa mucho más a menudo, se lavan las sábanas cada semana en lugar de cada mes y se considera sucio lo que antes se consideraba usado. Parte del tiempo ahorrado se lo comió una exigencia de limpieza mayor. Aun así, el trabajo pesado desapareció, y eso es lo que no vuelve.",
        destacado: { tipo: "frase", frase: "Al ser más fácil lavar, subió lo que consideramos sucio." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un argumento que sigue usándose en los debates sobre desarrollo: cuando se discute qué tecnología llevar antes a un sitio pobre, hay quien defiende que el agua corriente y una máquina de lavar valen más que una conexión, porque devuelven horas a personas que hoy las gastan acarreando cubos. Buena parte del planeta sigue lavando a mano. Y quedó una comparación que descoloca a cualquiera: aquel día entero de lunes con doscientos litros de agua y las manos agrietadas cabe hoy en apretar un botón e irse a otra cosa.",
      },
    ],
  },
];
