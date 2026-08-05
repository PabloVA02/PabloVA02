import type { Short } from "../shorts";

/* ==========================================================================
   Los notarios.

   Un oficio de ochocientos años que existe porque la memoria humana no
   sirve como prueba. El tema se estropea si se convierte en crítica del
   gremio o en manual jurídico.

   La regla del tema: todo sale del MISMO PROBLEMA, que es cómo demostrar
   años después lo que dos personas acordaron un martes. Cada short
   presenta ese problema antes de contar la solución, y las diferencias
   entre países se cuentan sin decir cuál es mejor.
   ========================================================================== */

export const NOTARIOS: Short[] = [
  {
    id: "el-que-daba-fe",
    titulo: "Los testigos se mueren",
    gancho: "Antes del documento escrito, un contrato valía lo que recordaran los testigos. Y los testigos se mueren.",
    categoria: "Historia",
    color: "var(--slate)",
    encargo: "Libro de protocolo notarial cosido y numerado, abierto sobre una mesa de madera.",
    entrada:
      "Bolonia y toda Europa, siglo XII. Hasta entonces, un acuerdo importante se cerraba delante de testigos y valía lo que ellos recordaran. El problema es evidente: los testigos se mueren, se mudan, se equivocan o se compran. En las ciudades italianas aparece entonces un oficio nuevo, el de una persona que escribe lo acordado y cuyo escrito tiene valor por sí mismo ante un juez.",
    paginas: [
      {
        rotulo: "Dar fe",
        texto:
          "Lo que distingue a un notario de cualquier otra persona que escriba un contrato es la fe pública. Significa que lo que él certifica se da por cierto sin necesidad de probarlo otra vez. Si un notario escribe que dos personas firmaron delante de él un martes, eso no se discute. Quien quiera negarlo tiene que abrir un procedimiento contra el propio notario, cosa muy poco frecuente. Ese poder es enorme, y por eso el cargo lleva desde el principio unas condiciones muy estrictas. El notario no puede tener interés en el asunto, no elige a sus clientes y responde con su patrimonio.",
        destacado: { tipo: "frase", frase: "Lo que un notario certifica se da por cierto sin probarlo." },
      },
      {
        rotulo: "El protocolo",
        texto:
          "El otro invento del oficio es el libro donde se guardan todos los documentos por orden. Se llama protocolo y no se puede arrancar ninguna hoja, porque va cosido y numerado. El original nunca sale de allí, y lo que se lleva el cliente es una copia autorizada. Si esa copia se pierde o se quema, el original sigue en el libro y se puede pedir otra. Cuando un notario se jubila, sus protocolos pasan a otro y después a un archivo público. Por eso hay escrituras del siglo XV que todavía se pueden consultar y siguen teniendo efecto legal.",
        destacado: { tipo: "cifra", cifra: "800", unidad: "años lleva existiendo el oficio" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron dos maneras muy distintas de resolver el mismo problema en el mundo. En los países de tradición latina el notario redacta el documento y responde de su contenido. En los de tradición anglosajona solo certifica la firma, y del contenido responden los abogados de cada parte. Comprar una casa cuesta bastante menos en notaría en el segundo sistema y bastante más en abogados. Quedó también la discusión sobre si el oficio sobrevivirá a la firma digital y al registro automático. De momento aguanta, porque una firma digital certifica quién firmó y no si entendía lo que firmaba.",
      },
    ],
  },
  {
    id: "el-testamento",
    titulo: "Un testamento dictado a cinco vecinos",
    gancho: "El más seguro se firma ante notario. El más raro se dicta de palabra a cinco vecinos en peligro de muerte.",
    categoria: "Justicia",
    color: "var(--clay)",
    encargo: "Sobre lacrado con un testamento manuscrito dentro de un cajón antiguo.",
    entrada:
      "España, con el código civil vigente desde 1889. La ley reconoce varias formas de hacer testamento, y no todas necesitan un notario delante. La más común se firma en una notaría, se guarda en el protocolo y queda anotada en un registro central. Las demás existen para situaciones raras, y una de ellas es tan antigua que parece sacada de otro siglo.",
    paginas: [
      {
        rotulo: "Escrito a mano",
        texto:
          "La forma más sencilla es el testamento escrito de puño y letra por el propio interesado. Tiene que estar entero a mano, con fecha completa y firmado, y no vale ni una línea a máquina. El motivo de esa exigencia es la letra, porque un perito puede comprobar si la escribió esa persona. Es gratis y tiene un problema serio, ya que nadie sabe que existe si el autor no lo dice. Muchos aparecen dentro de un libro o de un cajón años después del entierro, cuando ya no sirven. Antes de tener efecto hay que llevarlo a un juez para que lo declare válido.",
        destacado: { tipo: "frase", frase: "Entero a mano: ni una sola línea escrita a máquina." },
      },
      {
        rotulo: "En peligro",
        texto:
          "La forma más llamativa que reconoce la ley es el testamento en peligro inminente de muerte. Se hace de palabra delante de cinco testigos y no hace falta ningún papel ni ningún notario. Existe para accidentes, para naufragios y para situaciones donde no hay tiempo de nada más. Tiene fecha de caducidad muy corta, porque queda sin efecto si la persona sobrevive dos meses. La lógica es sencilla, ya que si sobrevive tiene tiempo de sobra para hacerlo bien. Hay también uno para tiempos de epidemia, con menos testigos, que se usó bastante durante la peste.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "testigos hacen falta para el testamento de urgencia" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un registro central donde se anota que existe un testamento, aunque no lo que dice. Cualquiera puede pedir un certificado con el nombre de un fallecido y saber si testó y ante quién. Quedó también un dato que sorprende, porque en España más de la mitad de la gente muere sin testamento. En esos casos la ley reparte por su cuenta, siguiendo un orden fijo que no siempre gusta. Y quedó una idea que recorre el oficio entero, porque un testamento sirve justo cuando su autor ya no puede explicarlo.",
      },
    ],
  },
  {
    id: "la-firma-y-el-sello",
    titulo: "La firma es una prueba mala",
    gancho: "Cambia cada vez que se hace, se imita con práctica y no dice nada del papel que hay encima. Y sigue en pie.",
    categoria: "Justicia",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Firma manuscrita ampliada con lupa, con el trazo y la presión bien visibles.",
    entrada:
      "Todo el mundo, con la firma como prueba legal asentada desde el siglo XVI. Firmar un papel parece la manera obvia de comprometerse, y como prueba tiene defectos gordos. Una firma nunca sale igual dos veces, un imitador entrenado la reproduce y nada impide cambiar el papel de encima. Aun así sigue siendo el gesto con el que se cierran casi todos los contratos del planeta.",
    paginas: [
      {
        rotulo: "El perito",
        texto:
          "Un perito calígrafo no compara el dibujo de la firma, porque eso es lo fácil de copiar. Lo que analiza es el gesto, que es un movimiento automático aprendido y repetido miles de veces. Mira la presión sobre el papel, la velocidad del trazo y por dónde se levanta el bolígrafo. Quien imita una firma va despacio y con cuidado, así que el trazo sale tembloroso y sin soltura. Bajo el microscopio se ven paradas y correcciones que en una firma auténtica no aparecen nunca. Una firma demasiado parecida a otra es sospechosa, porque nadie firma dos veces exactamente igual.",
        destacado: { tipo: "frase", frase: "Dos firmas idénticas son sospechosas: nadie firma igual." },
      },
      {
        rotulo: "Firmar el papel",
        texto:
          "El otro problema de la firma es que solo prueba el trozo de papel donde está. Nada impide cambiar las hojas anteriores de un contrato si la firma va únicamente al final. De ahí viene la costumbre de rubricar todas las páginas y de coser el documento con hilo. El sello notarial de tinta pasa a caballo entre dos hojas por el mismo motivo exacto. La firma digital resuelve ese problema de raíz, porque va ligada matemáticamente al contenido entero. Si se cambia una coma del documento, la firma deja de validar y el programa avisa.",
        destacado: { tipo: "cifra", cifra: "0", unidad: "firmas idénticas hace una misma persona" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una prueba imperfecta que aguanta porque tiene una virtud que ninguna otra reúne. Es gratis, no necesita ningún aparato y todo el mundo entiende lo que significa firmar. Quedó también la costumbre de firmar delante de alguien, que es lo que hace un notario. Con un testigo cualificado delante, el problema de la imitación desaparece por completo. Y quedó un detalle que casi nadie sabe, porque en España una firma no tiene que ser legible. Puede ser un garabato, una cruz o una huella, siempre que sea el gesto habitual de esa persona.",
      },
    ],
  },
];
