import type { Short } from "../shorts";

/* ==========================================================================
   Justicia.

   Leyes, juicios, cárceles y crímenes. El tema más goloso y el más fácil de
   ensuciar, porque el morbo tira mucho. Aquí no se recrea ningún crimen ni
   se dan detalles de una víctima: lo que interesa es el PROCEDIMIENTO, que
   es donde está lo asombroso.

   La regla del tema: se cuenta el momento en que la ley HIZO ALGO QUE HOY
   PARECE IMPOSIBLE. Juzgar a un cerdo con abogado de oficio. Aceptar por
   primera vez una huella dactilar como prueba. Cerrar una cárcel porque
   costaba demasiado mantenerla. La ley es una construcción, y se nota
   cuando se la ve funcionando con reglas que ya no son las nuestras.

   Nada de casos abiertos ni de personas vivas identificables.
   ========================================================================== */

export const JUSTICIA: Short[] = [
  {
    id: "juicios-animales",
    titulo: "Juicios a animales con abogado",
    gancho: "Cerdos ahorcados, ratas citadas por edicto y un abogado de oficio pagado por el tribunal.",
    categoria: "Justicia",
    color: "var(--forest)",
    curioso: true,
    encargo: "Una sala de tribunal medieval vacía, con banco de madera y suelo de losa.",
    entrada:
      "Francia, 1457. Una cerda y sus seis lechones comparecen ante un tribunal acusados de haber matado a un niño en un pueblo de Borgoña. Hay juez, hay fiscal y hay un abogado defensor nombrado y pagado por el propio tribunal. No es una farsa ni una broma de carnaval: es un procedimiento ordinario, y hay más de doscientos casos documentados en Europa.",
    paginas: [
      {
        rotulo: "El procedimiento",
        texto:
          "Los animales domésticos se juzgaban de uno en uno y con todas las garantías formales de la época: se les encerraba en la misma cárcel que a las personas, se pagaba su manutención con fondos públicos y se les asignaba defensa. En aquel caso, el abogado consiguió que los seis lechones quedaran absueltos alegando su corta edad y la falta de pruebas de que hubieran participado, y que la responsabilidad recayera solo en la madre. La cerda fue ahorcada en la plaza, vestida con ropa de persona, delante de los vecinos convocados.",
        destacado: { tipo: "frase", frase: "Los lechones salieron absueltos por su corta edad." },
      },
      {
        rotulo: "Las plagas",
        texto:
          "Con los animales que no se podían detener —ratas, gorgojos, orugas, langostas— el asunto pasaba a los tribunales de la Iglesia, y ahí el procedimiento se volvía aún más peculiar. Se les citaba mediante un edicto leído en voz alta en el campo afectado, se les concedía un plazo para comparecer y, al no presentarse, se nombraba abogado. Uno de esos abogados, en el siglo XVI, ganó un aplazamiento alegando que sus defendidas no podían acudir a la citación sin exponerse a los gatos del vecindario, y que el tribunal debía garantizarles primero un camino seguro. Se lo concedieron. La sentencia final solía ser una excomunión.",
        destacado: { tipo: "cifra", cifra: "200", unidad: "casos documentados en Europa" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La costumbre se apagó en el siglo XVIII, cuando cambió la idea de fondo: se dejó de considerar que un animal pudiera tener intención y culpa, y el daño pasó a ser responsabilidad de su dueño, que es como funciona hoy. Los historiadores discuten para qué servía aquello en realidad; la explicación más aceptada es que restauraba públicamente un orden roto, igual que un juicio humano. El último proceso conocido en Europa se celebró en 1906 en Suiza: en el banquillo, junto a dos hombres acusados de un robo con muerte, había un perro, y fue el único de los tres condenado a la pena máxima. A los hombres les cayó cadena perpetua.",
      },
    ],
  },

  {
    id: "alcatraz-fuga",
    titulo: "Tres se fugaron y no aparecieron",
    gancho: "Cavaron con cucharas, dejaron cabezas de papel maché en las camas y salieron en una balsa de impermeables.",
    categoria: "Justicia",
    color: "var(--slate)",
    encargo: "Una isla pequeña con un edificio blanco entre niebla, vista desde el agua.",
    entrada:
      "Bahía de San Francisco, junio de 1962. Alcatraz es una prisión federal en una isla rodeada de corrientes frías y fuertes, y la administración presume de que en veintinueve años nadie se ha escapado con vida. La noche del 11 de junio, tres presos condenados por robo a mano armada desaparecen de sus celdas. No se les ha vuelto a ver desde entonces.",
    paginas: [
      {
        rotulo: "Las cucharas",
        texto:
          "Llevaban seis meses trabajando. Habían ensanchado los conductos de ventilación del fondo de sus celdas rascando el hormigón, que estaba deteriorado por el salitre, con cucharas soldadas a mangos y un taladro improvisado con el motor de una aspiradora; el ruido lo tapaban con el acordeón de uno de ellos durante la hora de música. Detrás dejaban rejillas falsas hechas de cartón pintado. En el hueco del pasillo de servicio al que salían por las noches montaron un taller entero, tres pisos por encima del suelo, donde ningún guardia subía jamás porque no había nada que vigilar. Allí guardaban las herramientas y el material, tapado con sábanas.",
        destacado: { tipo: "frase", frase: "El ruido de rascar el muro lo tapaban con un acordeón." },
      },
      {
        rotulo: "Las cabezas",
        texto:
          "Aquella noche dejaron en las almohadas cabezas de papel maché hechas con jabón, papel higiénico y pelo recogido de la barbería de la prisión, con los ojos pintados, para que el guardia de ronda viera bultos durmiendo. Subieron al tejado, bajaron por una tubería, saltaron dos vallas y se echaron al agua con una balsa fabricada cosiendo más de cincuenta impermeables robados y sellando las costuras con vapor de las tuberías de la lavandería. Llevaban además chalecos hinchables hechos con el mismo material y un fuelle de acordeón para inflarlos, y remos de madera contrachapada sacados de la carpintería del penal. Todo el equipo estaba escondido en el tejado desde hacía semanas.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "impermeables cosidos para la balsa" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La búsqueda duró semanas y solo apareció material: un remo, restos de la balsa y una bolsa impermeable con direcciones y fotos de familiares. Ningún cuerpo. El FBI cerró el caso en 1979 concluyendo que probablemente se ahogaron, pero un estudio de las corrientes hecho en 2014 encontró que, si salieron entre las once y las doce de la noche, la marea pudo llevarlos a tierra. La prisión cerró un año después de la fuga, en 1963, no por eso sino porque mantenerla costaba tres veces más que cualquier otra.",
      },
    ],
  },

  {
    id: "primera-huella",
    titulo: "La primera condena por una huella",
    gancho: "Un policía guardaba fichas con huellas por su cuenta. Un pulgar ensangrentado en un marco resolvió el caso.",
    categoria: "Justicia",
    color: "var(--clay)",
    encargo: "Una ficha policial antigua con una huella dactilar entintada y anotaciones a mano.",
    entrada:
      "Provincia de Buenos Aires, junio de 1892. En una casa de campo aparecen muertos dos niños y su madre malherida. Ella acusa a un vecino, que niega todo y aguanta días de interrogatorios muy duros sin confesar. La policía local no tiene forma de decidir quién miente. En la comisaría central de La Plata trabaja un funcionario de origen croata con una idea rara.",
    paginas: [
      {
        rotulo: "Las fichas",
        texto:
          "Aquel hombre llevaba unos años recogiendo por su cuenta las huellas de los diez dedos de los detenidos y clasificándolas en cuatro grandes grupos según el dibujo, porque estaba convencido de que no se repetían nunca y de que servían para identificar mejor que las medidas del cuerpo, que era el método oficial entonces. Sus superiores lo toleraban como una manía inofensiva y ningún tribunal del mundo había aceptado jamás una huella como prueba de nada. Ese archivo casero era, sin que nadie le diera valor, el primer fichero dactilar de la historia.",
        destacado: { tipo: "frase", frase: "Ningún tribunal del mundo había aceptado una huella como prueba." },
      },
      {
        rotulo: "El marco",
        texto:
          "Un ayudante enviado a inspeccionar la casa encontró una mancha parda en el marco de una puerta y, en vez de limpiarla, serró el trozo de madera entero y lo llevó a la comisaría. Era la huella de un pulgar derecho impresa en sangre. Al compararla con las fichas tomadas a los sospechosos, coincidía punto por punto con la de la madre. Se la enseñaron y confesó: había matado a sus dos hijos y se había herido ella misma en el cuello para culpar al vecino, del que quería librarse.",
        destacado: { tipo: "cifra", cifra: "1892", unidad: "el año de la primera condena así" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El vecino, que había estado a punto de ser condenado, quedó libre. Argentina adoptó el sistema para todo el país en 1896, la primera nación del mundo en hacerlo, y desde allí se extendió a las policías de Europa y de América. Su autor publicó el método en un libro que se tradujo a varios idiomas y murió en 1925 en La Plata, con una escuela de policía a su nombre. El trozo de marco serrado, con la huella todavía visible, se conserva en un museo policial de la ciudad.",
      },
    ],
  },
];
