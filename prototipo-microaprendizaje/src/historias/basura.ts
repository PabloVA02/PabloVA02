import type { Short } from "../shorts";

/* ==========================================================================
   Basura.

   El riesgo del tema es la campaña institucional: separa, recicla, cuida
   el planeta. Nadie aprende nada que no supiera.

   La regla del tema: la basura se cuenta como MERCANCÍA. Durante siglos
   todo lo que se tiraba tenía comprador —trapos, huesos, ceniza, grasa—,
   y el problema moderno empieza cuando deja de tenerlo. Así que en cada
   short hay que decir quién pagaba por aquello y por qué dejó de pagar.

   Y el símbolo, el cubo o la gabarra se cuentan como objetos concretos,
   con su fecha y su dueño, no como metáforas de nada.
   ========================================================================== */

export const BASURA: Short[] = [
  {
    id: "gabarra-de-basura",
    titulo: "La barcaza que nadie quería",
    gancho: "Salió con tres mil toneladas y ningún puerto la quiso. Recorrió diez mil kilómetros y volvió llena.",
    categoria: "Basura",
    color: "var(--slate)",
    encargo: "Una gabarra baja cargada de bolsas de basura navegando en mar abierto.",
    entrada:
      "Estados Unidos, marzo de 1987. Una gabarra cargada con más de tres mil toneladas de basura doméstica sale de un puerto cercano a Nueva York rumbo al sur. La idea es descargarla en una granja donde convertirla en abono y en gas, un negocio nuevo del que un empresario espera sacar mucho dinero. El plan se tuerce a los pocos días de zarpar.",
    paginas: [
      {
        rotulo: "El viaje",
        texto:
          "Alguien filtró que en la carga podía haber residuos hospitalarios, y a partir de ahí no la quiso nadie. La rechazaron seis estados y tres países: la esperaron con la policía, con la marina y con órdenes judiciales, y en un puerto del Caribe se le prohibió incluso acercarse a la costa. La gabarra estuvo cincuenta y cinco días navegando en círculos por el golfo antes de darse la vuelta. La prensa la seguía a diario, la televisión hacía chistes cada noche y la basura, cociéndose al sol de mayo, empezó a oler a kilómetros de distancia.",
        destacado: { tipo: "cifra", cifra: "10.000", unidad: "kilómetros sin poder descargar" },
      },
      {
        rotulo: "La vuelta",
        texto:
          "Volvió a casa en agosto, cinco meses después de zarpar, y todavía tardó dos meses más en poder descargar, porque el propio estado del que había salido pleiteó para no aceptarla de vuelta. Al final la basura se quemó en un incinerador de la ciudad y las cenizas acabaron enterradas en el mismo condado donde había empezado todo. Los análisis posteriores no encontraron ningún residuo hospitalario: era basura doméstica corriente, papel, plástico y restos de comida, exactamente lo que decía el manifiesto de carga desde el primer día. El rumor que la dejó sin puerto durante cinco meses era falso.",
        destacado: { tipo: "frase", frase: "No llevaba nada raro: papel, plástico y restos de comida." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel viaje ridículo hizo por el reciclaje más que cualquier campaña pagada. En los meses siguientes decenas de ciudades aprobaron programas de recogida separada, la palabra reciclar entró en las conversaciones normales y las encuestas registraron un vuelco en cómo se percibía el problema: la gente entendió de golpe que la basura no desaparece cuando se cierra la tapa del cubo. Los expertos discuten todavía si hubo una crisis real de vertederos o solo un cambio de normas. Lo que nadie discute es el efecto de ver una montaña flotante sin destino.",
      },
    ],
  },

  {
    id: "simbolo-reciclaje",
    titulo: "El símbolo lo dibujó un estudiante",
    gancho: "Ganó un concurso en 1970, cobró una beca pequeña y el dibujo acabó sin dueño.",
    categoria: "Basura",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Tres flechas dobladas formando un triángulo, impresas en cartón corrugado.",
    entrada:
      "Estados Unidos, 1970. Una empresa papelera convoca un concurso de diseño entre estudiantes para encontrar un símbolo que identifique el papel reciclado. Se acaba de celebrar el primer día de la Tierra y la palabra reciclaje empieza a sonar en todas partes. Gana un estudiante de arquitectura de veintitrés años que dibuja tres flechas dobladas formando un triángulo.",
    paginas: [
      {
        rotulo: "La cinta",
        texto:
          "Contó que se le ocurrió en una tarde, pensando en una cinta de Möbius, esa tira de papel a la que se le da media vuelta antes de pegar los dos extremos y que queda con una sola cara: se puede recorrer entera con el dedo sin levantarlo y sin cambiar de lado en ningún momento. Le pareció la imagen exacta de un material que vuelve a empezar. Dibujó tres flechas anchas, una por cada paso del proceso —recogida, fabricación y compra—, plegadas como una tira de papel doblada, y lo entregó dibujado a lápiz.",
        destacado: { tipo: "frase", frase: "Una tira con una sola cara: se recorre sin cambiar de lado." },
      },
      {
        rotulo: "Sin dueño",
        texto:
          "La empresa intentó registrarlo como marca propia y hubo quejas inmediatas de otras compañías y de grupos ecologistas. Terminó renunciando y dejándolo en el dominio público, de modo que cualquiera puede usarlo sin pedir permiso ni pagar un céntimo. Su autor cobró el premio del concurso, unos dos mil dólares en forma de beca, y nunca ganó nada más con él; ha dicho en entrevistas que le parece bien, porque un símbolo que hubiera que licenciar no se habría extendido jamás. Hoy está impreso en miles de millones de envases por todo el mundo.",
        destacado: { tipo: "cifra", cifra: "2.000", unidad: "dólares de premio, y nada más" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El problema es lo que ha acabado significando. Sobre un envase, el triángulo no garantiza que la pieza se recicle ni que esté hecha con material reciclado: en los plásticos se usa con un número dentro que solo indica de qué tipo de plástico se trata, y varios de esos tipos no se reciclan casi en ninguna parte. La propia industria del plástico impulsó ese etiquetado en los años ochenta, y hay demandas y estudios que lo señalan como una fuente enorme de confusión. Un dibujo hecho en una tarde acabó siendo el símbolo más malinterpretado del planeta.",
      },
    ],
  },
  {
    id: "traperos",
    titulo: "La basura era un negocio",
    gancho: "Antes de los cubos había miles de personas viviendo de recoger trapos, huesos y ceniza.",
    categoria: "Basura",
    color: "var(--clay)",
    encargo: "Un carro de mano cargado de trapos y sacos en una calle empedrada del XIX.",
    entrada:
      "París y Londres, siglo XIX. En las dos ciudades trabajan decenas de miles de personas dedicadas a rebuscar entre los desperdicios. No es una metáfora de la pobreza: es un oficio con jerarquías, rutas asignadas, horarios y precios establecidos, y con una razón económica muy concreta detrás de cada material que se recoge. Nada de lo que se tiraba carecía de comprador.",
    paginas: [
      {
        rotulo: "Cada cosa vale",
        texto:
          "Los trapos de lino y de algodón eran lo más cotizado, porque el papel se fabricaba con ellos y no con madera: hubo escasez de trapos en toda Europa y algunos países llegaron a prohibir su exportación. Los huesos servían para hacer cola, botones y negro de humo. La ceniza de las chimeneas se vendía a los ladrilleros para mezclarla con el barro. La grasa iba a las jabonerías y los restos de comida a las porquerizas de las afueras. Había incluso quien recogía excrementos de perro, que se usaban en las tenerías para ablandar las pieles.",
        destacado: { tipo: "frase", frase: "El papel se hacía con trapos, no con madera." },
      },
      {
        rotulo: "El cubo",
        texto:
          "El oficio empezó a morir cuando las ciudades organizaron la recogida municipal. En París, un prefecto obligó en 1884 a que cada casa sacara sus desechos en un recipiente cerrado, con tres cajones para separar materiales, y aquello acabó con el rebusco libre por la calle; los traperos protestaron y se manifestaron, porque les quitaba la materia prima de la que vivían. El recipiente se quedó con el apellido de aquel prefecto, y hoy en francés un cubo de basura se llama así. Al mismo tiempo el papel pasó a fabricarse con pasta de madera y los trapos dejaron de valer nada.",
        destacado: { tipo: "cifra", cifra: "1884", unidad: "el año del cubo obligatorio en París" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Durante un siglo la basura pasó de ser materia prima a ser un problema que se entierra o se quema, y solo en las últimas décadas se ha intentado volver atrás con la recogida separada, que en el fondo hace lo mismo que aquellos traperos pero antes de sacarla de casa. En muchas ciudades del mundo sigue habiendo cientos de miles de personas viviendo de rebuscar en vertederos, a veces organizadas en cooperativas reconocidas oficialmente por el ayuntamiento. El oficio no llegó a desaparecer: cambió de sitio, y en algunos lugares volvió a ser lo que era.",
      },
    ],
  },
];
