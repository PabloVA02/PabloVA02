import type { Short } from "../shorts";

/* ==========================================================================
   Los cubiertos.

   Comer con hierros en la mano es una costumbre reciente y estuvo mal vista.
   El tema se estropea si se cuenta como historia de la etiqueta: lo bueno es
   el rechazo, que fue real y duró siglos.

   La regla del tema: se cuenta QUIÉN SE OPUSO Y POR QUÉ. Cada cubierto entró
   en la mesa contra la costumbre anterior, y el argumento en contra siempre
   decía algo del mundo de entonces: la religión, la clase social, el miedo a
   las armas. Y se dice siempre de qué material estaban hechos.
   ========================================================================== */

export const CUBIERTOS: Short[] = [
  {
    id: "el-tenedor-mal-visto",
    titulo: "El tenedor se consideró un capricho indecente",
    gancho: "Una princesa lo llevó a Venecia en el siglo XI y los clérigos dijeron que era despreciar los dedos que Dios dio.",
    categoria: "Cubiertos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un tenedor antiguo de dos púas de plata sobre un mantel de lino.",
    entrada:
      "Venecia, siglo XI. Una princesa bizantina se casa con el hijo del gobernante de la ciudad y trae de su tierra una costumbre desconocida. Come con un pequeño instrumento de dos púas de oro, en lugar de usar las manos. La reacción de la sociedad veneciana no es de curiosidad, sino de escándalo, y los cronistas de la época lo dejaron por escrito.",
    paginas: [
      {
        rotulo: "El escándalo",
        texto:
          "Un religioso de la época escribió que aquella mujer despreciaba los dedos que Dios le había dado y que semejante vanidad merecía castigo. Cuando ella murió joven de una enfermedad, varios cronistas lo presentaron como castigo divino por su soberbia. Detrás de la burla había algo más que religión. Comer con las manos era lo normal en toda Europa, incluso en las mesas nobles, y hacerlo bien tenía sus reglas: solo tres dedos, la mano derecha, sin mancharse las mangas. Usar un aparato para no tocar la comida parecía un remilgo de extranjera.",
        destacado: { tipo: "frase", frase: "Comer con las manos también tenía reglas: tres dedos y sin mancharse." },
      },
      {
        rotulo: "Cinco siglos",
        texto:
          "El tenedor tardó unos quinientos años en imponerse, y lo hizo desde Italia hacia el norte, primero entre los ricos. Ayudaron dos cosas prácticas. La pasta, difícil de comer con los dedos, y la moda de los cuellos almidonados enormes, que impedían agachar la cabeza hacia el plato y obligaban a llevarse la comida a la boca desde lejos. En Francia se hizo habitual en la corte del siglo XVII, y en Inglaterra todavía en el XVIII había quien lo consideraba afeminado. Los primeros tenían dos púas rectas, que pinchaban pero no recogían nada.",
        destacado: { tipo: "cifra", cifra: "500", unidad: "años tardó en imponerse" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la forma actual, con cuatro púas ligeramente curvadas, que se fijó en Alemania en el siglo XVIII y resolvió el problema de que la comida se cayera. Quedaron también las diferencias de uso que separan países enteros. En Europa se sujeta con la izquierda durante toda la comida. En Estados Unidos se corta, se deja el cuchillo y se pasa el tenedor a la derecha. Y quedó la prueba de que ninguna costumbre de mesa es natural: la que hoy nos parece de buena educación fue durante siglos una excentricidad reprobable.",
      },
    ],
  },
  {
    id: "el-cuchillo-de-punta-redonda",
    titulo: "A los cuchillos de mesa les quitaron la punta",
    gancho: "Todo el mundo llevaba el suyo afilado a la mesa. Un ministro francés decidió que aquello se acababa.",
    categoria: "Cubiertos",
    color: "var(--slate)",
    encargo: "Un cuchillo de mesa antiguo con la punta redondeada, junto a un plato blanco.",
    entrada:
      "Francia, 1669. Hasta ese momento, un invitado llega a una comida con su propio cuchillo colgado del cinturón, afilado y con la punta aguda, porque los cuchillos de mesa no los pone la casa. Se usa para cortar, para pinchar la carne y para llevársela a la boca. Ese año, el ministro principal del rey prohíbe por decreto los cuchillos puntiagudos en la mesa.",
    paginas: [
      {
        rotulo: "El decreto",
        texto:
          "La razón oficial fue reducir la violencia. Las peleas de sobremesa acababan a veces en heridas, y el cuchillo que servía para comer era exactamente el mismo que servía para pelear. El decreto ordenó redondear la punta de los cuchillos de mesa y prohibió llevar los puntiagudos a una comida, tanto en las casas como en las posadas. Con el tiempo, la medida se cruzó con otra cosa: si ya no hace falta pinchar la carne con el cuchillo, porque para eso está el tenedor, la punta no sirve para nada.",
        destacado: { tipo: "frase", frase: "El cuchillo de comer era el mismo con el que se peleaba." },
      },
      {
        rotulo: "La cubertería",
        texto:
          "Aquel decreto empujó otro cambio con más consecuencias: que los cubiertos los ponga el anfitrión. Cuando una casa tiene que ofrecer cuchillos redondeados a sus invitados, tiene que comprarlos por juegos, y de ahí nacen las cuberterías completas, con piezas iguales para cada comensal, guardadas en su caja. La cubertería se convirtió en un objeto de estatus que se regalaba en las bodas, se heredaba de padres a hijos y se sacaba solo en las ocasiones importantes. Es la razón de que hoy nadie se lleve los cubiertos de su casa cuando lo invitan a cenar.",
        destacado: { tipo: "cifra", cifra: "1669", unidad: "el año del decreto de la punta redonda" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el cuchillo de mesa que todos tenemos en el cajón, redondeado y bastante inútil para cualquier cosa que no sea untar mantequilla o cortar algo blando. Quedaron reglas de mesa que vienen de aquella desconfianza antigua, como no señalar a nadie con el cuchillo ni pasarlo nunca con la punta hacia la otra persona. Y quedó una diferencia curiosa con las cocinas profesionales. Allí el cuchillo es una herramienta y no un cubierto: sigue siendo puntiagudo, afilado y propiedad personal del cocinero, que se lo lleva de un trabajo a otro.",
      },
    ],
  },
  {
    id: "la-cuchara-mas-antigua",
    titulo: "La cuchara es mucho más antigua que las otras",
    gancho: "Existe desde la prehistoria porque hay una cosa que no se puede comer de otra manera: la sopa.",
    categoria: "Cubiertos",
    color: "var(--clay)",
    encargo: "Una cuchara de madera muy gastada dentro de un cuenco de barro.",
    entrada:
      "Todo el mundo, desde hace miles de años. Mientras el tenedor tardó siglos en aceptarse y el cuchillo se domesticó por decreto, la cuchara aparece en yacimientos de casi todas las culturas y nunca escandalizó a nadie. La razón es puramente práctica y no tiene que ver con los modales: los líquidos calientes no se pueden comer con los dedos.",
    paginas: [
      {
        rotulo: "De concha a madera",
        texto:
          "Las primeras cucharas fueron cosas encontradas, no fabricadas: conchas grandes, trozos de cáscara, huesos vaciados. De hecho, la palabra inglesa para cuchara viene de una raíz que significaba astilla o trozo de madera. Después vino la talla en madera, en asta y en hueso, y por último el metal, que durante mucho tiempo estuvo reservado a las casas ricas. En la mayoría de los hogares europeos, hasta el siglo XIX, cada persona tenía su cuchara de madera, se la guardaba y a veces la llevaba encima cuando iba de viaje.",
        destacado: { tipo: "frase", frase: "Las primeras no se fabricaban: se encontraban." },
      },
      {
        rotulo: "La forma",
        texto:
          "La forma tampoco es casual y cambió con lo que se comía. Las cucharas medievales tenían la pala casi redonda y el mango corto, porque se usaban con caldos espesos y se llevaban a la boca de frente. Cuando en el siglo XVIII se puso de moda tomar sopas claras en tazas hondas, la pala se hizo ovalada y el mango largo, que es la forma que sigue teniendo. La cuchara de café apareció con el café, y la de postre con la costumbre de servir un plato dulce al final, que también es reciente.",
        destacado: { tipo: "cifra", cifra: "XVIII", unidad: "el siglo en que la pala se hizo ovalada" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el único cubierto que casi todo el mundo del planeta usa, en todas las culturas y con todas las cocinas, incluidas las que comen con palillos o con la mano. Quedó también en el idioma: nacer con una cuchara de plata en la boca significa nacer rico precisamente porque durante siglos la cuchara de la gente corriente era de madera. Y quedó la costumbre de regalar una cuchara de plata en los bautizos. Era el primer objeto de valor que recibía un niño y, en muchas familias, casi el único que tendría.",
      },
    ],
  },
];
