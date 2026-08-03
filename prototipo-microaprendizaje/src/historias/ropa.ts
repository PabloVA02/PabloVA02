import type { Short } from "../shorts";

/* ==========================================================================
   Ropa.

   Lo que llevamos puesto todos los días y de lo que nadie se pregunta nada.
   El riesgo del tema es la historia de la moda con nombres de diseñador y
   temporadas, que interesa a quien ya sabe y expulsa a todos los demás.

   La regla del tema: se coge una PIEZA CONCRETA que el lector tiene encima
   ahora mismo —un botón, un remache, un tacón— y se cuenta de dónde salió y
   por qué sigue ahí cuando ya no sirve para nada. Cuanto más cotidiano es el
   objeto, mejor funciona: nadie espera que un ojal tenga historia.

   Y cuando el origen es discutido —el lado de los botones—, se cuenta que se
   discute y se dan las versiones. Nunca se elige una y se da por buena.
   ========================================================================== */

export const ROPA: Short[] = [
  {
    id: "boton-ojal",
    titulo: "El botón es más viejo que el ojal",
    gancho: "Durante treinta siglos fue un adorno cosido a la tela. A nadie se le ocurrió abrir un agujero enfrente.",
    categoria: "Ropa",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un puñado de botones antiguos de nácar y hueso sobre un paño oscuro.",
    entrada:
      "Los botones más antiguos que se conocen aparecieron en el valle del Indo, en el actual Pakistán, hace unos cinco mil años, y estaban tallados en concha. No servían para abrochar nada: eran adorno, se cosían encima de la tela y ahí se quedaban. La idea de hacerle un agujero al tejido para meterlos por él tardó tres mil años en aparecer.",
    paginas: [
      {
        rotulo: "El ojal",
        texto:
          "Llegó a Europa hacia el siglo XIII, probablemente traído de Oriente Próximo por los ejércitos que volvían de las cruzadas, y cambió la ropa entera de arriba abajo. Hasta entonces las prendas eran túnicas holgadas que se metían por la cabeza y se ceñían con un cinturón, sencillamente porque no había manera de cerrarlas bien por delante. Con el ojal se pudo cortar la tela ajustada al cuerpo y cerrarla después, y de ahí sale toda la sastrería moderna: la chaqueta, la camisa y el chaleco existen porque alguien se atrevió a agujerear un tejido caro y a rematar el corte a mano.",
        destacado: { tipo: "frase", frase: "Antes del ojal, la ropa se metía por la cabeza y se ataba." },
      },
      {
        rotulo: "El lado",
        texto:
          "De ahí viene también la costumbre que todavía dura: en la ropa de hombre los botones van cosidos a la derecha y en la de mujer a la izquierda, exactamente al revés. Las explicaciones que circulan son todas del siglo XIX y ninguna está demostrada con documentos. La más repetida sostiene que las mujeres acomodadas se vestían con ayuda de una doncella, y que para quien está enfrente resulta más cómodo abrochar del otro lado. Otra dice que un hombre necesitaba la derecha libre para desenvainar. Lo único seguro es que la costumbre se fijó y que ninguna industria ha querido tocarla.",
        destacado: { tipo: "frase", frase: "Nadie sabe por qué los de ellas van al otro lado. Siguen yendo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El botón llegó a ser un objeto de lujo desmedido: los había de oro, de marfil y con miniaturas pintadas dentro protegidas por un cristal, y un traje de gala del siglo XVIII podía llevar más de cien, la mayoría puramente decorativos y sin ojal enfrente. Los tres que hay hoy en el puño de una chaqueta no abrochan nada desde hace más de un siglo y se siguen cosiendo uno por uno; se cuenta que Napoleón mandó ponerlos para que sus soldados dejaran de limpiarse la nariz con la manga, aunque no hay ni un solo documento que lo respalde.",
      },
    ],
  },

  {
    id: "vaqueros-mineros",
    titulo: "Los vaqueros se inventaron para no romper bolsillos",
    gancho: "Un sastre puso remaches de cobre en las esquinas. No tenía dinero para patentarlo y buscó socio.",
    categoria: "Ropa",
    color: "var(--slate)",
    encargo: "Un pantalón de tela azul gastado, con remaches de cobre brillando en los bolsillos.",
    entrada:
      "Nevada, Estados Unidos, 1873. Un sastre de origen letón recibe el encargo de una mujer que quiere un pantalón de trabajo para su marido, leñador, porque rompe los bolsillos cada dos por tres al meter las herramientas. Se le ocurre reforzar las esquinas con remaches de cobre, como los de las mantas de caballo. Funciona tan bien que teme que se lo copien.",
    paginas: [
      {
        rotulo: "La patente",
        texto:
          "No tenía los sesenta y ocho dólares que costaba registrar una patente, así que escribió a su proveedor de tela, un comerciante alemán instalado en San Francisco que le vendía el algodón y que se había hecho rico surtiendo de ropa y lonas a los buscadores de oro. Le propuso pagar el trámite a medias y repartirse el invento por la mitad. El otro aceptó, la patente se concedió en mayo de 1873 a nombre de los dos y empezaron a fabricar pantalones de tela azul con remaches en las esquinas de los bolsillos y en la base de la bragueta.",
        destacado: { tipo: "cifra", cifra: "68", unidad: "dólares que no tenía para patentarlo" },
      },
      {
        rotulo: "El azul",
        texto:
          "El color viene del tinte de aquella tela, un algodón grueso importado de Francia que se teñía con añil porque era barato y porque disimulaba bien la suciedad de una jornada de mina. El añil tiñe solo la superficie de la fibra y no llega al interior, y por eso el pantalón se destiñe por los pliegues, las rodillas y los bolsillos hasta dibujar el cuerpo de quien lo lleva; lo que hoy se vende como desgaste de diseño era la prueba de haber trabajado con él. Al principio ni siquiera llevaban trabillas para el cinturón, sino botones para tirantes.",
        destacado: { tipo: "frase", frase: "El desgaste que hoy se paga era la prueba de haber trabajado." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Fueron ropa de minero, de granjero y de obrero durante setenta años, hasta que en los años cincuenta el cine los puso encima de actores jóvenes y rebeldes y varios institutos estadounidenses llegaron a prohibirlos en clase por considerarlos una provocación. A partir de ahí ya no hubo marcha atrás. Hoy se fabrican más de mil millones de pares al año y hacen falta unos siete mil litros de agua para cada uno, entre el cultivo del algodón y los lavados de fábrica que imitan el desgaste. Los remaches siguen ahí, en un pantalón que ya no rompe nadie.",
      },
    ],
  },

  {
    id: "tacon-jinetes",
    titulo: "El tacón lo inventaron los hombres para montar",
    gancho: "Servía para que el pie no se saliera del estribo. Acabó en las alfombras rojas seiscientos años después.",
    categoria: "Ropa",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un zapato de tacón antiguo, de cuero y madera, sobre un suelo de baldosa.",
    entrada:
      "Persia, el actual Irán, siglo X. La caballería de aquel ejército necesita que el pie del jinete no se escape del estribo cuando se pone de pie sobre la montura para disparar el arco, así que las botas llevan un taco de madera clavado bajo el talón. No es un adorno ni una moda: es una pieza de equitación. Y así, tal cual, entra en Europa seiscientos años más tarde.",
    paginas: [
      {
        rotulo: "La corte",
        texto:
          "Llegó a finales del siglo XVI con las embajadas persas, y la aristocracia europea lo adoptó de inmediato por lo que significaba más que por cómo se veía: llevar tacón indicaba que uno montaba a caballo, es decir, que era militar y noble, y de paso volvía imposible trabajar el campo con esos zapatos puestos. El rey de Francia se hizo unos con la suela y el tacón pintados de rojo, un tinte carísimo, y prohibió por decreto que los usara así nadie que no fuera de su corte. Medía metro sesenta y tres y llegó a calzar tacones de diez centímetros.",
        destacado: { tipo: "frase", frase: "El tacón decía que montabas a caballo. Y que no trabajabas el campo." },
      },
      {
        rotulo: "El cambio de dueño",
        texto:
          "Las mujeres empezaron a llevarlo hacia 1630, dentro de una moda que consistía justamente en apropiarse de prendas masculinas: se cortaron el pelo, se pusieron sombreros de hombre y se calzaron tacones. La consecuencia fue que el calzado se separó en dos ramas: el de ellos se hizo cada vez más ancho y bajo, y el de ellas más fino y más alto. Cuando llegó la Revolución francesa, el tacón desapareció del armario masculino de un día para otro porque olía a aristocracia, y se quedó solo en el femenino, ya sin ninguna relación con montar.",
        destacado: { tipo: "cifra", cifra: "1630", unidad: "el año en que cambió de dueño" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El tacón de aguja tal y como se conoce hoy no existió hasta los años cincuenta, cuando se pudo meter dentro una varilla de acero que aguantara el peso sin partirse; con madera sola no daba de sí y se astillaba. Uno de diez centímetros multiplica varias veces la presión sobre la punta del pie y desplaza el peso hacia delante, lo que obliga a la espalda a compensar arqueándose. Y sigue habiendo empresas, festivales y alfombras rojas donde se exige llevarlo, mil años después de dejar de servir para lo único que servía.",
      },
    ],
  },
];
