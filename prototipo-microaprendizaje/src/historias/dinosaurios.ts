import type { Short } from "../shorts";

/* ==========================================================================
   Dinosaurios.

   El tema que todo el mundo cree conocer desde los seis años y sobre el que
   casi todo lo que se sabe está desactualizado. El riesgo es doble: la lista
   de nombres largos en latín y la película, que fijó una imagen que la
   paleontología abandonó hace décadas.

   La regla del tema: se cuenta CONTRA LO QUE EL LECTOR YA CREE. Tenían
   plumas. El meteorito no mató por el golpe. El Brontosaurio dejó de existir
   ochenta años y volvió. Siempre hay un fósil concreto, un yacimiento y una
   fecha; nada de reconstrucciones generales.

   Los nombres científicos se usan solo cuando son el asunto, y en cuanto
   aparece uno se traduce: Brontosaurio, «lagarto trueno».
   ========================================================================== */

export const DINOSAURIOS: Short[] = [
  {
    id: "dinosaurios-plumas",
    titulo: "Casi todos tenían plumas",
    gancho: "Un yacimiento chino conserva la piel. Lo que apareció alrededor de los huesos no eran escamas.",
    categoria: "Dinosaurios",
    color: "var(--forest)",
    curioso: true,
    encargo: "Una losa de pizarra gris con el esqueleto de un animal pequeño marcado y una aureola de filamentos.",
    entrada:
      "China, 1996. Un granjero encuentra en unas pizarras del noreste del país el fósil de un animal del tamaño de un pavo, con dientes, cola larga y garras, y con algo que nadie esperaba: una franja oscura de filamentos rodeando todo el cuerpo. Tiene ciento veinticinco millones de años y desmonta de golpe el dibujo que llevábamos un siglo haciendo.",
    paginas: [
      {
        rotulo: "El yacimiento",
        texto:
          "Aquellas pizarras conservan lo que casi ningún otro sitio del mundo: tejidos blandos. Hace ciento veinticinco millones de años era una zona de lagos rodeada de volcanes, y las cenizas finísimas de cada erupción sepultaban a los animales en cuestión de horas, sin oxígeno y sin que ningún carroñero llegara a tocarlos; lo que ha quedado son fósiles con la piel, las vísceras y hasta el contenido del estómago marcados en la roca. Desde entonces han aparecido allí más de treinta especies emplumadas, desde simples filamentos parecidos a pelo hasta plumas completas con su eje y sus barbas.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "especies con plumas en un solo yacimiento" },
      },
      {
        rotulo: "Para qué servían",
        texto:
          "Las primeras plumas no servían para volar, y eso está bastante claro, porque aparecen en animales que no podían despegar de ninguna manera: eran filamentos huecos y cortos, repartidos por el lomo y la cola. Las dos explicaciones que se manejan son el aislamiento térmico y la exhibición, es decir, abrigo y adorno; el vuelo llegó mucho después y aprovechando una estructura que ya estaba ahí. Analizando al microscopio los gránulos de pigmento conservados en algunos fósiles se ha llegado a reconstruir el color: de uno pequeño se sabe que tenía la cola a franjas naranjas y blancas.",
        destacado: { tipo: "frase", frase: "Se ha reconstruido el color: cola a franjas naranjas y blancas." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hoy no se dice que las aves desciendan de los dinosaurios: se dice que son dinosaurios, el único grupo que sobrevivió a la extinción. Un gorrión está más emparentado con un tiranosaurio que un tiranosaurio con un diplodoco. Y del propio tiranosaurio se han encontrado parientes cercanos con plumas, de modo que la imagen del lagarto gigante y escamoso de las películas es probablemente tan inexacta como dibujar un león pelado. El cine no lo ha corregido por un motivo comprensible: un depredador de ocho metros cubierto de plumón asusta bastante menos.",
      },
    ],
  },

  {
    id: "meteorito-yucatan",
    titulo: "Cayó en el peor sitio posible",
    gancho: "Lo que decidió la extinción no fue el tamaño de la roca, sino lo que había justo debajo.",
    categoria: "Dinosaurios",
    color: "var(--clay)",
    encargo: "Un cielo rojo oscuro sobre un mar en calma, con una estela luminosa cruzándolo.",
    entrada:
      "Península de Yucatán, en el actual México, hace sesenta y seis millones de años. Una roca de unos diez kilómetros de diámetro entra en la atmósfera a veinte kilómetros por segundo y golpea un mar poco profundo, dejando un cráter de ciento ochenta kilómetros de ancho. Y lo que decidió la extinción no fue la piedra: fue el terreno que había debajo.",
    paginas: [
      {
        rotulo: "El suelo",
        texto:
          "El punto de impacto era un fondo marino cargado de rocas con azufre, unas capas de yeso que en la mayor parte del planeta apenas existen. Al vaporizarse soltaron cientos de miles de millones de toneladas de compuestos de azufre a la atmósfera alta, donde formaron un velo de partículas capaz de reflejar la luz del sol durante años seguidos. Los modelos calculan una caída de varios grados en la temperatura global y una oscuridad suficiente para frenar la fotosíntesis. Si la roca hubiera llegado unos minutos antes o después, con la Tierra girada, habría caído en océano profundo.",
        destacado: { tipo: "frase", frase: "Unos minutos antes o después, habría caído en océano profundo." },
      },
      {
        rotulo: "Las primeras horas",
        texto:
          "Lo inmediato fue mucho más rápido y más brutal. La onda de calor incendió la vegetación en un radio enorme, un terremoto de magnitud diez sacudió el continente entero y una ola de varios cientos de metros barrió las costas del golfo. El material expulsado subió al espacio, volvió a caer al rojo repartido por todo el planeta y calentó el cielo lo bastante como para asar cualquier cosa que estuviera al descubierto. En un yacimiento de Dakota del Norte se han encontrado peces con esquirlas de vidrio del impacto metidas en las branquias: murieron aquel mismo día.",
        destacado: { tipo: "cifra", cifra: "180", unidad: "kilómetros de ancho tiene el cráter" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Desapareció alrededor del setenta y cinco por ciento de las especies, incluidos todos los dinosaurios que no eran aves y los grandes reptiles marinos. Sobrevivieron los animales pequeños, los que comían semillas o carroña y los que podían meterse bajo tierra; entre ellos, unos mamíferos del tamaño de una musaraña que llevaban cien millones de años sin destacar en nada. El cráter estuvo perdido hasta 1978, cuando lo encontraron por casualidad unos geólogos que buscaban petróleo y que tardaron una década larga en entender qué tenían delante: está enterrado bajo un kilómetro de sedimento y medio metido en el mar, y solo se ve en los mapas magnéticos como un anillo perfecto.",
      },
    ],
  },

  {
    id: "brontosaurio",
    titulo: "El Brontosaurio dejó de existir",
    gancho: "Se montó con la cabeza de otro animal y en 1903 le quitaron hasta el nombre. Volvió en 2015.",
    categoria: "Dinosaurios",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un esqueleto de saurio de cuello largo montado en la sala de un museo antiguo.",
    entrada:
      "Estados Unidos, finales del siglo XIX. Dos paleontólogos rivales se odian tanto que se dedican a competir por publicar primero, y entre los dos describen más de ciento treinta especies nuevas en treinta años, muchas a la carrera y con los huesos todavía medio limpios. Uno de ellos bautiza en 1879 un saurio enorme al que llama Brontosaurio, «lagarto trueno».",
    paginas: [
      {
        rotulo: "La cabeza ajena",
        texto:
          "El esqueleto que montó estaba incompleto y le faltaba justo el cráneo, que es lo más frágil y lo primero que se pierde. Como había que exponerlo de todas formas, se le colocó encima la cabeza de otro animal parecido encontrado a varios kilómetros de allí, más achatada y con dientes en forma de cuchara, y así se enseñó en los museos durante décadas enteras. El error se arrastró hasta los años setenta, cuando dos investigadores demostraron que aquel cráneo era de otro género y que la cabeza correcta era alargada, con dientes finos como lápices.",
        destacado: { tipo: "frase", frase: "Le pusieron la cabeza de otro animal porque había que exponerlo." },
      },
      {
        rotulo: "El nombre borrado",
        texto:
          "Peor fue lo del nombre. En 1903, otro paleontólogo revisó los huesos con calma y concluyó que aquel Brontosaurio no era un género distinto, sino un ejemplar de otro que el mismo autor había descrito dos años antes y bautizado como Apatosaurio. La norma internacional que rige estos nombres es tajante y no admite gustos: cuando dos designan lo mismo, gana el más antiguo. Así que el Brontosaurio dejó oficialmente de existir en 1903, aunque los museos tardaron ochenta años en cambiar los carteles y el público no llegó a enterarse nunca del todo.",
        destacado: { tipo: "cifra", cifra: "112", unidad: "años estuvo oficialmente borrado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En 2015, un estudio que comparó cerca de cuatrocientas características anatómicas de decenas de esqueletos concluyó que las diferencias entre los dos animales eran mayores de lo que se había creído y que el Brontosaurio merecía recuperar su género propio. No todos los especialistas lo aceptan y la discusión sigue abierta a día de hoy. Pero durante ciento doce años, el dinosaurio más famoso de los libros infantiles y de los estuches de lápices fue oficialmente un animal que no existía, expuesto además en los museos con la cabeza de otro puesta encima. Es difícil encontrar un caso donde la ciencia se corrija dos veces sobre lo mismo.",
      },
    ],
  },
];
