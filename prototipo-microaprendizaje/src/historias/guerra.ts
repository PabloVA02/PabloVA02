import type { Short } from "../shorts";

/* ==========================================================================
   Guerra.

   El tema con el que hay que tener más cuidado, porque se puede caer en dos
   sitios: en el catálogo de material bélico —calibres, tonelaje, modelos de
   avión— y en la moraleja de sobremesa.

   La regla del tema: se cuenta desde la DECISIÓN DE UNA PERSONA. Un hombre
   solo delante de un panel que dice que han lanzado misiles. Un piloto que
   ve una ciudad entera desde arriba. Los ejércitos no deciden nada; deciden
   personas con nombre, con sueño y con miedo, y por eso se puede contar.

   Y nunca se adorna una cifra de muertos. Se pone y se deja quieta.
   ========================================================================== */

export const GUERRA: Short[] = [
  {
    id: "hiroshima",
    titulo: "La bomba de Hiroshima cabía en un avión",
    gancho: "Pesaba cuatro toneladas y borró una ciudad. El piloto durmió bien el resto de su vida; el copiloto no.",
    categoria: "Guerra",
    color: "var(--clay)",
    encargo: "Una columna de humo altísima vista desde muy lejos, en blanco y negro.",
    entrada:
      "Japón, 6 de agosto de 1945. La Segunda Guerra Mundial lleva seis años y en Europa ya ha terminado, pero Japón sigue luchando. Estados Unidos ha construido en secreto un arma nueva, de una potencia que nadie ha visto: en lugar de quemar un explosivo, parte átomos. Aquella mañana, un bombardero despega con una sola bomba dentro y con la orden de soltarla sobre una ciudad de trescientos cincuenta mil habitantes.",
    paginas: [
      {
        rotulo: "El objetivo",
        texto:
          "Hiroshima se eligió por motivos fríos. Era una ciudad grande, con cuartel y puerto, y hasta entonces apenas había sufrido bombardeos: eso permitiría medir con precisión el daño de la bomba, sin confundirlo con destrozos anteriores. Aquella mañana sonó la alarma antiaérea al detectar el avión, y luego se levantó, porque solo eran tres aparatos y con tan pocos nunca bombardeaban. Mucha gente salió del refugio y volvió a la calle. A las ocho y cuarto, un objeto de cuatro toneladas cayó durante cuarenta y tres segundos y estalló a seiscientos metros del suelo.",
        destacado: { tipo: "frase", frase: "Levantaron la alarma porque solo eran tres aviones. La gente salió del refugio." },
      },
      {
        rotulo: "Los tres segundos",
        texto:
          "Lo que ocurrió abajo pasó en tres tiempos. Primero un destello y un calor de varios miles de grados que, en el centro, dejó sombras de personas marcadas en la piedra. Después la onda de presión, que tumbó los edificios en un radio de dos kilómetros. Y por último el fuego, que se juntó en una sola tormenta y ardió durante horas. Murieron unas <strong>70.000 personas</strong> aquel día y otras tantas en los meses siguientes por quemaduras y por radiación, una enfermedad que en agosto de 1945 ni siquiera tenía nombre para los médicos japoneses.",
        destacado: { tipo: "cifra", cifra: "70.000", unidad: "personas murieron el primer día" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Tres días después cayó otra bomba sobre Nagasaki y Japón se rindió. El piloto que la lanzó defendió hasta su muerte, a los noventa y dos años, que había hecho lo correcto y que dormía perfectamente. El copiloto escribió en su diario, aquel mismo día: «Dios mío, ¿qué hemos hecho?». En el centro de Hiroshima quedó en pie un edificio con la cúpula reventada, justo debajo del estallido: aguantó porque la onda le llegó de arriba y no de lado. La ciudad discutió durante veinte años si derribarlo y decidió que no. Es lo único que sigue igual que aquella mañana.",
      },
    ],
  },

  {
    id: "petrov",
    titulo: "Un hombre solo decidió que no había guerra nuclear",
    gancho: "El panel decía que venían cinco misiles. Su trabajo era avisar. Pensó que el ordenador se equivocaba.",
    categoria: "Guerra",
    color: "var(--slate)",
    encargo: "Una sala de control en penumbra, llena de pantallas verdes de los años ochenta.",
    entrada:
      "Cerca de Moscú, madrugada del 26 de septiembre de 1983. La Unión Soviética y Estados Unidos llevan cuarenta años apuntándose con miles de bombas atómicas, y esas semanas son de las peores: los soviéticos acaban de derribar un avión de pasajeros surcoreano y han muerto doscientas sesenta y nueve personas. En un búnker, un teniente coronel de cuarenta y cuatro años vigila los satélites que detectan lanzamientos enemigos.",
    paginas: [
      {
        rotulo: "La alarma",
        texto:
          "A las doce y cuarto de la noche saltó la sirena y una pantalla se puso en rojo con una palabra: lanzamiento. El sistema decía que Estados Unidos había disparado un misil contra la Unión Soviética. Minutos después, cuatro más. El procedimiento era claro y no admitía interpretación: aquel hombre debía llamar a sus superiores, y sus superiores tendrían menos de media hora para decidir si respondían con todo el arsenal antes de que cayera el primer misil. Nadie le pedía a él que juzgase si la información era buena. Le pedían que la transmitiera y se apartara.",
        destacado: { tipo: "frase", frase: "Su trabajo no era decidir si era verdad. Era llamar." },
      },
      {
        rotulo: "Por qué no llamó",
        texto:
          "No llamó, y sus motivos fueron de sentido común. Si Estados Unidos atacaba de verdad, razonó, no mandaría cinco misiles: mandaría cientos, para que no quedara nada capaz de responder. Además, el sistema de satélites era nuevo y él sabía que los radares de tierra, más lentos pero más fiables, no confirmaban nada. Así que informó de avería y se quedó sentado esperando, con el teléfono en la mano, durante los veintitrés minutos que tardaría un misil en llegar. No cayó ninguno. Se había equivocado el ordenador: había confundido el reflejo del sol en las nubes altas con el fogonazo de un lanzamiento.",
        destacado: { tipo: "cifra", cifra: "23", unidad: "minutos esperó a ver si caía algo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No lo condecoraron. Al principio le felicitaron y después le reprocharon no haber rellenado bien el diario de guardia, porque premiarle habría obligado a admitir que un sistema recién estrenado fallaba. Le trasladaron a un puesto menor y se retiró poco después. El caso permaneció en secreto hasta 1998, cuando lo contó un general ya jubilado. Murió en 2017, en un piso pequeño a las afueras de Moscú, y la noticia tardó cuatro meses en salir de Rusia. Decía que él no había hecho nada especial: que simplemente estaba de turno.",
      },
    ],
  },

  {
    id: "tregua-1914",
    titulo: "La Navidad en que dos ejércitos dejaron de disparar",
    gancho: "Salieron de las trincheras, se dieron la mano y jugaron al fútbol. Los mandos se aseguraron de que no se repitiera.",
    categoria: "Guerra",
    color: "var(--forest)",
    curioso: true,
    encargo: "Un campo helado entre dos líneas de alambrada, con figuras pequeñas en el centro.",
    entrada:
      "Bélgica y norte de Francia, diciembre de 1914. La Primera Guerra Mundial lleva cinco meses y ya no avanza nadie: los dos bandos se han enterrado en zanjas paralelas separadas a veces por cincuenta metros de barro. Todos creían que sería una guerra corta y ya se ve que no. Es la primera Navidad, hiela el agua de las cantimploras y los soldados llevan semanas oyendo toser al enemigo.",
    paginas: [
      {
        rotulo: "Las luces",
        texto:
          "Empezó por el sonido. La noche del 24, los soldados británicos oyeron cantar en alemán al otro lado y vieron aparecer lucecitas sobre el borde de las trincheras: eran velas y arbolitos que las familias alemanas habían mandado por correo. Alguien contestó cantando en inglés. Al amanecer, un hombre desarmado se subió al parapeto y caminó despacio hacia el centro, y no le disparó nadie. Detrás salieron más. En algunos tramos del frente se juntaron cientos de soldados en la tierra de nadie, un sitio donde doce horas antes asomar la cabeza era morirse.",
        destacado: { tipo: "frase", frase: "Doce horas antes, asomar la cabeza en ese mismo sitio era morirse." },
      },
      {
        rotulo: "Qué hicieron",
        texto:
          "Lo primero que hicieron fue lo más urgente: recoger a sus muertos, que llevaban semanas tirados entre las alambradas, y enterrarlos juntos. Después se intercambiaron lo que tenían. Tabaco por chocolate, botones por gorras, conservas por licor. Se enseñaron fotos de las familias, se cortaron el pelo unos a otros y hubo partidos de fútbol improvisados con latas y con pelotas de trapo; de uno de ellos se conserva el resultado, tres a dos para los alemanes. La tregua no fue general ni ordenada: se dio en muchos puntos a la vez, sin que nadie la hubiera acordado.",
        destacado: { tipo: "frase", frase: "Lo primero que hicieron juntos fue enterrar a sus muertos." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Duró horas en unos sitios y varios días en otros, y en algún tramo hubo que avisar a gritos antes de reanudar el fuego. Los mandos de los dos bandos se llevaron un susto serio: un ejército que confraterniza deja de ser un ejército. Se ordenaron rotaciones de tropas para que ninguna unidad pasara demasiado tiempo frente a la misma, se prohibió expresamente cualquier contacto y se amenazó con consejo de guerra. En las tres Navidades siguientes, con la guerra ya endurecida y con dos millones de muertos por medio, no volvió a repetirse.",
      },
    ],
  },
];
