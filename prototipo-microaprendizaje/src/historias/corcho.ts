import type { Short } from "../shorts";

/* ==========================================================================
   El corcho.

   La corteza de un árbol que se puede arrancar sin matarlo, hecha de
   celdas de aire. El tema se estropea si se cuenta como cultura del vino.

   La regla del tema: todo sale de la MISMA ESTRUCTURA DE CELDAS CERRADAS
   CON AIRE DENTRO, y esa estructura hay que explicarla antes de usarla.
   De ahí salen las tres cosas que hace: proteger del fuego, comprimirse
   sin ensancharse y aislar.
   ========================================================================== */

export const CORCHO: Short[] = [
  {
    id: "la-corteza-que-se-quita",
    titulo: "El árbol al que se desnuda",
    gancho: "Se le arranca la corteza entera cada nueve años y no le pasa nada. Ningún otro árbol aguanta eso.",
    categoria: "Plantas",
    color: "var(--ochre)",
    encargo: "Alcornoque recién descorchado, con el tronco desnudo de un naranja intenso.",
    entrada:
      "Cuenca mediterránea, con la explotación organizada desde el siglo XVIII. El alcornoque es una encina con una particularidad rarísima: fabrica dos cortezas, una interior que lo mantiene vivo y otra exterior de corcho que puede perder sin morirse. Esa corteza exterior se le quita a hachazos cada nueve años, y el árbol la vuelve a formar. Un alcornoque puede repetir esa operación quince veces a lo largo de dos siglos.",
    paginas: [
      {
        rotulo: "Dos cortezas",
        texto:
          "En cualquier árbol hay una capa fina justo bajo la corteza que es la que fabrica madera y transporta savia. Si se daña esa capa el árbol se muere, y por eso arrancar la corteza mata a casi cualquier especie. El alcornoque tiene además otra capa generadora más hacia fuera, dedicada solo a producir corcho. El corcho es tejido muerto lleno de celdas de aire, y su función natural es proteger del fuego y de la sequía. Un alcornoque sobrevive a un incendio que arrasa todo lo demás porque va envuelto en su propio aislante. Quitarle esa capa no le hace daño mientras no se toque la de dentro, y ahí está todo el oficio.",
        destacado: { tipo: "frase", frase: "El corcho es tejido muerto lleno de celdas de aire." },
      },
      {
        rotulo: "El descorche",
        texto:
          "La saca se hace en verano, cuando el árbol está cargado de savia y la corteza se despega mejor. El trabajador da unos golpes de hacha midiendo la profundidad por el sonido, y luego hace palanca con el mango. La plancha sale entera, curvada, y debajo queda el tronco de un naranja fuerte que se oscurece con los días. Es un oficio que no ha podido mecanizarse, porque ninguna máquina distingue por el ruido dónde acaba una capa. Los descorchadores están entre los peones agrícolas mejor pagados de España por ese motivo. En el tronco se pinta con brocha el último dígito del año, para saber cuándo toca volver.",
        destacado: { tipo: "cifra", cifra: "9", unidad: "años tarda en volver a formarse la corteza" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un bosque que solo existe porque da dinero, con más de dos millones de hectáreas en el Mediterráneo occidental. Es uno de los pocos casos en los que explotar un ecosistema lo conserva, ya que sin negocio se talaría para pasto. En esas dehesas viven especies muy amenazadas, entre ellas el lince ibérico y el águila imperial. Quedó también una amenaza económica, porque cuando el vino empezó a taparse con rosca cayó la demanda de corcho. Menos demanda significa menos saca, y menos saca significa alcornocales abandonados que acaban ardiendo.",
      },
    ],
  },
  {
    id: "por-que-el-tapon-sella",
    titulo: "Se aplasta sin ensancharse",
    gancho: "Casi todo lo que se aprieta por un lado se ensancha por otro. El corcho no, y por eso entra en el cuello de la botella.",
    categoria: "Objetos",
    color: "var(--clay)",
    encargo: "Tapón de corcho a medio entrar en el cuello de una botella, visto muy de cerca.",
    entrada:
      "Francia, finales del siglo XVII. Las botellas de vidrio empiezan a fabricarse en serie y hace falta algo que las tape bien, porque el trapo con cera no aguanta la presión ni el transporte. El corcho se impone en pocas décadas por una propiedad física que no tiene casi ningún otro material. Cuando lo aprietas por los lados, no se ensancha por arriba ni por abajo.",
    paginas: [
      {
        rotulo: "Apretar sin crecer",
        texto:
          "Si aprietas una goma de borrar por dos lados, la goma se abomba por los otros dos. Eso le pasa a casi todos los materiales y tiene un nombre técnico, porque el volumen tiende a conservarse. El corcho está hecho de millones de celdas con aire dentro, como un panal muy pequeño y cerrado. Al comprimirlo, las paredes de esas celdas se doblan hacia dentro y el aire se comprime con ellas. El tapón se estrecha sin alargarse, así que se puede meter en un cuello más fino que él mismo. Una vez dentro, el aire de las celdas empuja hacia fuera durante décadas y mantiene el sellado.",
        destacado: { tipo: "frase", frase: "Se estrecha sin alargarse: por eso entra en el cuello." },
      },
      {
        rotulo: "El defecto",
        texto:
          "El tapón natural tiene un fallo que ha costado fortunas al sector y que aparece en un porcentaje pequeño de botellas. El vino sale con olor a cartón mojado y a sótano, y el defecto no tiene arreglo ninguno. La causa es una molécula que producen ciertos hongos cuando encuentran cloro en la madera del corcho. Ese cloro llegaba muchas veces del propio lavado con lejía que se hacía para desinfectar los tapones. La nariz humana detecta esa molécula en cantidades ridículas, del orden de unas pocas partes por billón. Cambiar el lavado y analizar cada lote ha reducido mucho el problema, aunque no lo ha eliminado del todo.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "de cada cien botellas puede salir con ese olor" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una competencia que el corcho estuvo a punto de perder, porque el tapón de rosca y el sintético no dan ese defecto. El sector reaccionó con controles y con el argumento del bosque, que es real y pesa en la decisión. Quedó también una distinción práctica, porque el vino que se guarda años necesita el poco aire que deja pasar el corcho. El vino que se bebe joven no lo necesita, y ahí la rosca funciona igual de bien y cuesta menos. Y quedó un gesto que casi nadie sabe explicar: el camarero que te enseña el tapón está enseñándote que no huele mal.",
      },
    ],
  },
  {
    id: "el-corcho-que-no-es-tapon",
    titulo: "Del sobrante salen suelos y cohetes",
    gancho: "Solo una parte de la corteza sirve para tapones. El resto se tritura y acaba en sitios donde nadie lo busca.",
    categoria: "Objetos",
    color: "var(--slate)",
    curioso: true,
    encargo: "Bloque de corcho aglomerado cortado, con los granos y las juntas bien visibles.",
    entrada:
      "Portugal y España, con la industria del aglomerado montada desde 1891. De cada plancha de corcho arrancada a un alcornoque, solo una parte tiene el grosor y la calidad que exige un tapón. El resto se trituraba y se tiraba hasta que un fabricante estadounidense descubrió por accidente que, calentado y prensado, el granulado se pega solo. Ese hallazgo convirtió el desecho en la mitad del negocio.",
    paginas: [
      {
        rotulo: "Se pega solo",
        texto:
          "El corcho contiene una resina natural que se ablanda al calentarlo por encima de los trescientos grados. Si se mete el granulado en un molde y se le aplica calor y presión, esa resina une los granos entre sí. No hace falta añadir ningún pegamento, cosa rarísima en un material aglomerado y muy útil hoy. El bloque que sale conserva las celdas de aire, así que sigue siendo ligero y sigue aislando. Aísla del calor, del ruido y de la vibración a la vez, que es una combinación poco común. Y no arde bien, porque las celdas cerradas frenan el paso de la llama por dentro.",
        destacado: { tipo: "frase", frase: "Se pega con su propia resina, sin añadir pegamento." },
      },
      {
        rotulo: "Dónde acaba",
        texto:
          "El aglomerado está en muchos sitios donde nadie lo mira, empezando por los suelos y los techos aislantes. Va en las juntas de los motores, en las suelas de las zapatillas y en el interior de los cascos. También en los tableros de anuncios, en las tablas de surf y en los mangos de las cañas. El uso más llamativo está en los cohetes, donde una capa de corcho protege el depósito del calor del despegue. Al quemarse muy despacio va formando una costra que aísla lo que hay debajo, y eso es justo lo que se busca. Las agencias espaciales llevan usándolo desde los años sesenta y no han encontrado nada mejor y tan barato.",
        destacado: { tipo: "cifra", cifra: "1891", unidad: "el año del corcho aglomerado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un material que se aprovecha entero, porque hasta el polvo del serrado se quema para mover las calderas de la fábrica. Quedó también un país que domina el negocio, ya que Portugal produce alrededor de la mitad del corcho de todo el mundo. Quedó una industria que depende del clima, porque el alcornoque necesita veranos secos y no soporta el frío ni el exceso de lluvia. Y quedó el círculo completo de este tema, porque un árbol que se protege del fuego con su corteza acaba protegiendo del fuego a un cohete.",
      },
    ],
  },
];
