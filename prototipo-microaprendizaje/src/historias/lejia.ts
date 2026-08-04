import type { Short } from "../shorts";

/* ==========================================================================
   La lejía.

   Un líquido de un euro que ha salvado más vidas que casi ningún fármaco
   y que manda gente a urgencias todos los años. El tema se estropea si se
   convierte en consejos de limpieza.

   La regla del tema: la lejía SIEMPRE HACE LO MISMO, que es romper
   moléculas por oxidación sin distinguir de quién son. Eso se explica
   antes que nada, y de ahí salen las tres caras: desinfecta, decolora y
   envenena.
   ========================================================================== */

export const LEJIA: Short[] = [
  {
    id: "el-agua-que-mata-microbios",
    titulo: "La lejía salvó más vidas que casi ningún medicamento",
    gancho: "Clorar el agua de las ciudades fue la medida sanitaria más barata y más eficaz que se ha tomado nunca.",
    categoria: "Medicina",
    color: "var(--slate)",
    encargo: "Depósito de agua potable de principios del siglo XX con las válvulas de dosificación.",
    entrada:
      "Estados Unidos, 1908. Las ciudades industriales llevan décadas sufriendo brotes de fiebre tifoidea y de cólera, dos enfermedades que se cogen bebiendo agua contaminada con heces. Un médico convence a la empresa que abastece a una ciudad de medio millón de habitantes para que le eche cloro al agua. Es la primera vez que se hace a esa escala, y funciona en semanas.",
    paginas: [
      {
        rotulo: "Cómo mata",
        texto:
          "La lejía es una disolución de hipoclorito, una sustancia que suelta cloro reactivo en cuanto toca el agua. Ese cloro ataca las proteínas y las membranas de cualquier célula que encuentra, y las rompe. No es un veneno selectivo, sino una oxidación brutal, y por eso ninguna bacteria se hace resistente a ella. Esa es su gran ventaja frente a los antibióticos, contra los que los microbios llevan décadas aprendiendo. También es su gran defecto, porque el mismo mecanismo daña la piel, los pulmones y cualquier tejido vivo. En el agua potable se usa en dosis minúsculas, suficientes para el microbio e inofensivas para nosotros.",
        destacado: { tipo: "frase", frase: "Ninguna bacteria se hace resistente a una oxidación." },
      },
      {
        rotulo: "El efecto",
        texto:
          "El resultado de aquella primera cloración fue tan grande que cuesta creerlo leído en frío. Las muertes por fiebre tifoidea en las ciudades que clorearon el agua cayeron más de un noventa por ciento. La mortalidad infantil bajó también, porque muchas diarreas mortales de los bebés venían del mismo sitio. Todo eso costó céntimos por habitante y año, sin construir hospitales ni formar a nadie. Los historiadores de la salud pública suelen situar la cloración por delante de casi cualquier medicamento. Sigue siendo hoy la razón principal de que abrir un grifo en una ciudad sea seguro.",
        destacado: { tipo: "cifra", cifra: "90", unidad: "% cayeron las muertes por tifoidea" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una medida invisible, porque nadie agradece nunca un brote de cólera que no ha llegado a ocurrir. Quedaron también los problemas del método, ya que el cloro reacciona con la materia orgánica del agua. De esa reacción salen compuestos que en cantidades altas se relacionan con algunos cánceres, y por eso se controlan. El equilibrio consiste en poner el cloro justo, y todas las redes de agua miden ese nivel a diario. Y quedó el sabor, que a mucha gente le desagrada y que es la prueba de que el sistema funciona.",
      },
    ],
  },
  {
    id: "no-mezcles-lejia",
    titulo: "Mezclar lejía con amoniaco fabrica un gas de guerra",
    gancho: "No es una exageración de la etiqueta. La reacción produce en un cubo el mismo tipo de compuesto que se usó en 1915.",
    categoria: "Ciencia",
    color: "var(--clay)",
    encargo: "Dos botes de limpieza distintos junto a un cubo, en un baño pequeño sin ventana.",
    entrada:
      "Cualquier cocina del mundo. Todos los botes de lejía llevan un aviso impreso que casi nadie lee y que dice que no se mezcle con otros productos. El aviso no es burocracia: la lejía reacciona con varias cosas corrientes y produce gases que mandan gente al hospital todos los años. El primer gas de guerra de la historia, usado en 1915, era pariente cercano de uno de ellos.",
    paginas: [
      {
        rotulo: "Con amoniaco",
        texto:
          "El amoniaco está en muchos limpiacristales y en algunos limpiadores de suelos, y también en la orina. Al juntarlo con lejía se forman unos compuestos llamados cloraminas, que se escapan al aire en segundos. Esos gases atacan las mucosas de los ojos, de la nariz y sobre todo del pulmón. En un baño pequeño y sin ventana la concentración sube muy deprisa y puede dejar secuelas. El caso más frecuente en urgencias es el de alguien limpiando un váter con dos productos seguidos. Ni siquiera hace falta mezclarlos en el cubo, porque basta que coincidan sobre la misma superficie.",
        destacado: { tipo: "frase", frase: "Basta que coincidan sobre la misma superficie." },
      },
      {
        rotulo: "Con ácido",
        texto:
          "La otra mezcla peligrosa es la de lejía con cualquier producto ácido, y ahí la lista es larga. Entran los antical, los desatascadores, muchos limpiadores de baño y también el vinagre de la cocina. El ácido libera el cloro que la lejía tenía atrapado, y ese cloro sale en forma de gas verdoso. Es exactamente el gas que se usó como arma en la Primera Guerra Mundial, en 1915. Pesa más que el aire, así que se queda abajo y no se va abriendo una ventana alta. La regla que dan los servicios de emergencias cabe en una frase: la lejía se usa sola y con agua.",
        destacado: { tipo: "cifra", cifra: "1915", unidad: "el año del cloro como arma de guerra" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un producto barato, muy eficaz y responsable a la vez de varios miles de intoxicaciones domésticas al año. Quedaron los envases opacos, porque la luz descompone el hipoclorito y la lejía pierde fuerza en meses. Un bote abierto desde hace un año limpia bastante menos de lo que dice la etiqueta. Quedó también un malentendido muy repetido, porque la lejía desinfecta pero no quita la suciedad de una superficie. El cloro se gasta atacando la mugre antes de llegar al microbio. Hay que limpiar primero con jabón y desinfectar después, porque hacerlo al revés no sirve casi de nada.",
      },
    ],
  },
  {
    id: "la-lejia-y-la-ropa-blanca",
    titulo: "La lejía no blanquea: rompe el color",
    gancho: "No añade blanco. Destruye las moléculas que dan color a la mancha, y por eso destruye también el del tejido.",
    categoria: "Historia",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Lienzos blancos extendidos sobre la hierba de un prado para blanquearse al sol.",
    entrada:
      "Francia, 1785. Un químico descubre que el cloro disuelto en una solución alcalina decolora la tela en minutos, cuando hasta entonces blanquear un lienzo exigía dejarlo semanas al sol en un prado. Ese descubrimiento libera miles de hectáreas de campo y acelera la industria textil de la Revolución industrial. Lo que hace la lejía no es añadir blanco, sino destruir el color que había.",
    paginas: [
      {
        rotulo: "Romper el color",
        texto:
          "Un objeto tiene color porque sus moléculas absorben unos colores de la luz y devuelven el resto. Esa capacidad depende de unas zonas concretas de la molécula donde los electrones están sueltos. El cloro rompe justo esos enlaces, y la molécula deja de absorber luz y se vuelve invisible. La mancha no se va a ninguna parte: sigue ahí y ha dejado de tener color. Por eso la lejía no limpia, y por eso una camisa blanqueada con ella sigue estando sucia. Y por eso ataca igual al tinte del tejido, que también es una molécula con color.",
        destacado: { tipo: "frase", frase: "La mancha no se va: deja de tener color." },
      },
      {
        rotulo: "El prado",
        texto:
          "Antes de 1785, blanquear tela era un proceso larguísimo que ocupaba superficies enormes de terreno. El lienzo se mojaba, se extendía sobre la hierba y se dejaba semanas expuesto al sol. La luz ultravioleta hacía lo mismo que hace el cloro, solo que muchísimo más despacio. Un lienzo podía pasar seis meses en el prado, y había que vigilarlo día y noche contra los ladrones. Robar tela de un blanqueadero se castigaba en Inglaterra con la pena de muerte. Con la lejía, aquel medio año pasó a ser una tarde, y las fábricas textiles dejaron de depender del clima.",
        destacado: { tipo: "cifra", cifra: "6", unidad: "meses tardaba un lienzo en blanquearse al sol" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un producto de uso doméstico que empezó siendo un invento industrial de primer orden. Quedaron libres los prados de blanquear, que en varias ciudades europeas eran de las mayores extensiones de suelo. Muchos parques urbanos de hoy ocupan exactamente esos terrenos y conservan el nombre antiguo. Quedó también el sustituto moderno, porque la ropa de color se blanquea hoy con oxígeno en vez de cloro. Y quedó una idea que vale para todo lo que hace la lejía, porque siempre repite el mismo gesto: romper moléculas sin mirar de quién son.",
      },
    ],
  },
];
