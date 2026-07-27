import type { Short } from "../shorts";

/* ==========================================================================
   Cuerpo.

   El tema con el lector más cautivo: todo el mundo tiene uno y nadie sabe
   cómo funciona. Y el tema donde más basura circula, porque cualquier cifra
   sobre el cuerpo humano se repite mil veces antes de que alguien la mire.

   La regla del tema: si la cifra famosa es falsa, la historia es esa. No se
   corrige de pasada en la última línea — se cuenta de dónde salió el número,
   quién lo dijo, por qué se creyó tanto tiempo y qué se sabe ahora. Un mito
   bien desmontado engancha más que el mito, porque el lector se lleva dos
   cosas: el dato bueno y la sensación de haber estado dentro de la cocina.

   Nada de consejos. Esto no es salud, es asombro: cómo está hecho lo que
   llevas puesto. En cuanto una historia empieza a recomendar algo, se va al
   fichero de salud y aquí no vuelve.
   ========================================================================== */

export const CUERPO: Short[] = [
  {
    id: "bacterias-diez-a-uno",
    titulo: "Diez bacterias por célula: el dato que no era",
    gancho: "La cifra más repetida de la microbiología salió de una estimación de 1972.",
    categoria: "Cuerpo",
    color: "var(--sage)",
    encargo: "Colonias bacterianas en una placa de Petri, luz rasante, fondo oscuro.",
    entrada:
      "Durante cuarenta años se repitió en libros de texto, charlas y titulares: en tu cuerpo hay diez bacterias por cada célula humana, así que eres más ellas que tú. Es una idea preciosa y da para varias frases lapidarias. El problema apareció cuando en 2016 tres investigadores se sentaron a rehacer la cuenta y fueron a buscar de dónde había salido la original.",
    paginas: [
      {
        rotulo: "El origen",
        texto:
          "El rastro llevaba a un artículo de 1972 del microbiólogo Thomas Luckey, que estimó unas 10<sup>14</sup> bacterias en un adulto. La estimación era razonable para su época y estaba hecha con los datos que había, pero era eso: una estimación de orden de magnitud, con supuestos gruesos sobre el volumen del tubo digestivo y la densidad bacteriana. Nadie la revisó. Se citó, y luego se citó la cita, y a los pocos años ya circulaba sin fuente, con la seguridad que dan los números redondos. La proporción diez a uno se convirtió en un hecho por repetición, que es la forma más silenciosa de convertirse en un hecho.",
        destacado: {
          tipo: "frase",
          frase: "Nadie mintió. Simplemente nadie volvió a mirar durante cuarenta años.",
        },
      },
      {
        rotulo: "La cuenta nueva",
        texto:
          "En 2016, Ron Sender, Shai Fuchs y Ron Milo publicaron una revisión que hacía las dos cuentas por separado y con datos modernos. Por el lado bacteriano, casi todo el peso está en el colon, y midieron su contenido real en vez de suponerlo. Por el lado humano, la mayoría de las células del cuerpo no son las grandes que uno imagina: son glóbulos rojos, pequeñísimos y numerosísimos. Salieron unos <strong>38 billones</strong> de bacterias frente a unos 30 billones de células humanas. La proporción no es diez a uno: es aproximadamente uno a uno, y basta ir al baño para inclinar la balanza un rato.",
        destacado: { tipo: "cifra", cifra: "1:1", unidad: "y no 10:1, según la revisión de 2016" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Que la proporción se desinfle no rebaja lo importante. Esas bacterias siguen aportando un repertorio de genes muchísimo mayor que el humano, fabrican vitaminas que nosotros no sabemos fabricar y digieren fibra que sin ellas pasaría de largo. Lo que se ha caído es el eslogan, no la biología. Y queda una lección aparte, que es la mejor parte del asunto: una cifra puede vivir cuarenta años en los libros sin que nadie la compruebe, no por conspiración, sino porque comprobar lo que ya todos dan por bueno no da prestigio a nadie.",
      },
    ],
  },

  {
    id: "huesos-se-rehacen",
    titulo: "Tu esqueleto no es el que tenías hace diez años",
    gancho: "El hueso se derriba y se levanta todos los días, y tú no notas la obra.",
    categoria: "Cuerpo",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un fémur humano seccionado a lo largo, con el hueso esponjoso visible.",
    entrada:
      "Un hueso parece lo más quieto que hay en el cuerpo: duro, seco, terminado. Es exactamente lo contrario. Dentro de cada hueso trabaja una cuadrilla permanente que abre túneles, retira material y lo repone, en un ciclo que no se detiene desde antes de nacer. El esqueleto entero se sustituye cada década aproximadamente, sin que la forma cambie ni un milímetro.",
    paginas: [
      {
        rotulo: "La cuadrilla",
        texto:
          "Hay dos oficios. Los osteoclastos son células grandes, con varios núcleos, que se pegan a la superficie del hueso, la sellan como una ventosa y vierten ácido y enzimas debajo: disuelven el mineral y se comen la matriz, dejando un cráter. Detrás llegan los osteoblastos y rellenan el cráter con colágeno, que después se mineraliza. La obra tarda unos meses en cada punto y hay miles de puntos abiertos a la vez. Algunos osteoblastos quedan atrapados en el material que ellos mismos fabricaron y se convierten en osteocitos: se quedan dentro, conectados por prolongaciones finísimas, detectando dónde el hueso está sufriendo y avisando de dónde toca reforzar.",
        destacado: {
          tipo: "frase",
          frase: "El hueso no se conserva: se rehace, y la forma es lo único que sobrevive.",
        },
      },
      {
        rotulo: "Por qué se molestan",
        texto:
          "Porque un material que no se repara acumula grietas hasta que revienta, y porque el hueso es además el almacén de calcio del cuerpo: cuando la sangre necesita calcio, se saca de ahí. Ese doble oficio explica lo que le pasa al esqueleto de un astronauta. Sin peso encima, los osteocitos dejan de detectar carga, la reposición se relaja y la demolición sigue: en la Estación Espacial se pierde en torno a un <strong>1 %</strong> de masa ósea al mes en las zonas que soportan el cuerpo, y por eso allí arriba se hacen dos horas y media de ejercicio diarias, sujetos con arneses a una cinta.",
        destacado: { tipo: "cifra", cifra: "1 %", unidad: "de masa ósea al mes sin gravedad" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "La obra también explica por qué un hueso roto suelda y una muela picada no: el diente tiene esmalte, que es el tejido más duro del cuerpo y no tiene células vivas dentro, así que lo que se rompe ahí no se rehace nunca. Y explica la letra pequeña de la cifra famosa: lo de «cada diez años» es un promedio. El hueso esponjoso del interior de las vértebras se renueva mucho más deprisa que la capa compacta de la tibia, así que a los cuarenta llevas partes recién estrenadas y partes que vienen de lejos.",
      },
    ],
  },

  {
    id: "olfato-atajo",
    titulo: "El olfato es el único sentido sin aduana",
    gancho: "Todo lo que ves y oyes pasa un control antes de llegar. Un olor, no.",
    categoria: "Cuerpo",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un primer plano lateral de una nariz humana, luz dura, casi abstracto.",
    entrada:
      "Un olor cualquiera —cloro de piscina, gasolina, la colonia de alguien— puede devolverte a un sitio concreto con una nitidez que ninguna foto consigue. No es una impresión romántica: es una consecuencia del cableado. El olfato entra en el cerebro por una puerta distinta a la de los demás sentidos, y esa puerta da directamente al barrio de la memoria.",
    paginas: [
      {
        rotulo: "La aduana",
        texto:
          "La vista, el oído, el gusto y el tacto tienen una escala obligatoria: el tálamo, una estructura central que recibe la señal, la filtra y decide qué sube a la corteza. Es el control de aduanas del cerebro y hace un trabajo enorme, porque impide que la conciencia se ahogue en información. El olfato se lo salta. Las neuronas del epitelio olfativo mandan sus fibras directamente al bulbo olfativo, y desde ahí la señal llega en muy pocos relevos a la amígdala y a la corteza entorrinal, la puerta del hipocampo. Es decir: a la emoción y a la memoria antes que al pensamiento.",
        destacado: {
          tipo: "frase",
          frase: "Un olor llega a la emoción antes de que sepas qué estás oliendo.",
        },
      },
      {
        rotulo: "La cifra que cambió",
        texto:
          "Durante casi un siglo se repitió que el ser humano distingue unos diez mil olores. La cifra venía de un modelo teórico de los años veinte, no de un experimento. En 2014, un equipo de la Universidad Rockefeller hizo la prueba de verdad, mezclando moléculas odorantes en combinaciones y midiendo cuántas sabían separar los voluntarios; extrapolando, salió una estimación de más de un <strong>billón</strong> de mezclas distinguibles. El número recibió críticas metodológicas serias y no conviene tomarlo al pie de la letra, pero incluso los críticos aceptan lo esencial: diez mil se quedaba corto por mucho.",
        destacado: { tipo: "cifra", cifra: "10.000", unidad: "olores: la cifra nunca se midió" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Las neuronas olfativas son además una rareza anatómica: están expuestas al aire de fuera y se sustituyen cada pocas semanas, algo que casi ninguna otra neurona hace. Eso las convierte en una vía de entrada, y también en un aviso. La pérdida de olfato aparece años antes de los primeros síntomas en varias enfermedades neurodegenerativas, y en 2020 se hizo famosa por otro motivo. Un sentido que solemos poner el último en la lista resultó ser el más pegado a lo que somos: cuando desaparece, la gente no dice que come peor. Dice que el mundo se ha vuelto plano.",
      },
    ],
  },
];
