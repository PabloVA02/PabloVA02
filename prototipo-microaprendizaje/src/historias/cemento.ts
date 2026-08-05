import type { Short } from "../shorts";

/* ==========================================================================
   Cemento y hormigón.

   El material del que está hecho casi todo lo que pisamos y que nadie
   mira nunca. El riesgo del tema es la ficha técnica: resistencias,
   dosificaciones, tipos de árido.

   La regla del tema: el hormigón se cuenta por LO QUE SE ROMPE Y LO QUE
   AGUANTA. Un muelle romano intacto a los dos mil años frente a uno
   moderno que necesita obras a los cincuenta. Una maceta que se parte.
   Un grano de arena demasiado redondo. Aquí las historias son siempre de
   materiales fallando, y de alguien mirando por qué.

   Y las cantidades se comparan con algo: el agua, una montaña, un año.
   ========================================================================== */

export const CEMENTO: Short[] = [
  {
    id: "hormigon-romano",
    titulo: "El hormigón romano se repara solo",
    gancho: "Dos mil años bajo el mar y los muelles siguen enteros. Los nuestros piden obras a los cincuenta.",
    categoria: "Cemento",
    color: "var(--ochre)",
    encargo: "Un muelle de piedra antiguo medio sumergido en agua clara.",
    entrada:
      "Bahía de Nápoles, siglo I. Los ingenieros romanos construyen puertos, malecones y depósitos con una mezcla que fragua debajo del agua y que aguanta el oleaje sin desmoronarse. Veinte siglos después, esas estructuras siguen en pie, mientras que un muelle moderno de hormigón armado necesita reparaciones importantes al cabo de unos cincuenta años.",
    paginas: [
      {
        rotulo: "La ceniza",
        texto:
          "La receta la dejaron escrita: cal viva, agua de mar y una ceniza volcánica de una zona concreta de la bahía, mezcladas con trozos de roca. Lo que hace especial a esa ceniza es que reacciona químicamente con la cal en presencia de agua y forma cristales que van creciendo dentro de la masa durante años. Además, las mezclas se hacían con cal viva en caliente y no apagada previamente, y eso deja repartidos por el material unos grumos blancos que durante décadas se tomaron por un defecto de fabricación o por una mezcla hecha con descuido.",
        destacado: { tipo: "frase", frase: "Los grumos blancos se tomaban por un defecto de fabricación." },
      },
      {
        rotulo: "La grieta",
        texto:
          "Un trabajo publicado en 2023 les encontró sentido. Cuando aparece una grieta y entra agua, esa agua encuentra los grumos de cal, los disuelve y vuelve a cristalizar el material dentro de la fisura, sellándola desde dentro. En los ensayos, unas muestras hechas con la receta antigua y agrietadas a propósito se cerraron por completo en un par de semanas, mientras que las de hormigón moderno seguían abiertas y perdiendo agua. Es decir, el material se cura solo, y con agua de mar todavía mejor, porque aporta minerales que refuerzan la reacción.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "semanas y la grieta se cierra" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel hormigón tenía un inconveniente serio que explica por qué se abandonó: es mucho menos resistente a la tracción y fragua despacio, así que no sirve para las estructuras finas y armadas con acero que se usan hoy. La receta se perdió al caer el imperio y no se recuperó hasta el siglo XIX, ya con una fórmula distinta. Ahora se intenta incorporar el truco de la cal viva a las mezclas modernas para alargarles la vida, porque un edificio que se repara solo ahorra una cantidad enorme de cemento nuevo y de emisiones.",
      },
    ],
  },

  {
    id: "hormigon-de-macetas",
    titulo: "El hormigón armado, cosa de jardinero",
    gancho: "Se le rompían las macetas grandes, así que probó a meterles una malla de alambre dentro.",
    categoria: "Cemento",
    color: "var(--slate)",
    encargo: "Una tinaja grande de cemento con un naranjo plantado dentro.",
    entrada:
      "Francia, 1867. Un jardinero que cultiva naranjos en tinajas tiene un problema práctico: los recipientes de barro se agrietan con las heladas y con las raíces, y los de cemento puro resultan frágiles y se parten al moverlos de sitio. Prueba a colocar una malla de alambre dentro del molde antes de verter la mezcla, y patenta el resultado ese mismo año.",
    paginas: [
      {
        rotulo: "Los dos materiales",
        texto:
          "El invento funciona porque los dos materiales se compensan justo donde el otro falla. El cemento aguanta estupendamente que lo aplasten y fatal que lo estiren; el acero, exactamente al revés. Metiendo barras o mallas de acero en la zona que va a trabajar a tracción, se consigue una pieza que resiste las dos cosas a la vez. Hay además una coincidencia afortunada sin la cual nada de esto funcionaría: los dos materiales se dilatan con el calor prácticamente en la misma proporción, así que no se despegan al cambiar la temperatura.",
        destacado: { tipo: "frase", frase: "Se dilatan igual con el calor, y por eso no se despegan." },
      },
      {
        rotulo: "Del tiesto al puente",
        texto:
          "El jardinero fue ampliando la patente a depósitos, tuberías, traviesas de ferrocarril, vigas y puentes, sin ser ingeniero y sin saber calcular una estructura. De eso se encargaron otros: en las décadas siguientes se desarrollaron las fórmulas para decidir dónde colocar el acero y en qué cantidad, que es lo que convirtió el invento en una técnica seria. Hacia 1900 ya se levantaban edificios enteros con ese sistema, y la construcción cambió de raíz, porque de pronto se podía hacer casi cualquier forma con un molde de madera y unas barras dentro.",
        destacado: { tipo: "cifra", cifra: "1867", unidad: "la patente salida de una maceta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El hormigón es hoy el material más fabricado del planeta después del agua: se producen del orden de treinta mil millones de toneladas al año, y su fabricación es responsable de una parte notable de las emisiones mundiales, porque para hacer cemento hay que calentar caliza a mil cuatrocientos grados y en el proceso se libera dióxido de carbono por partida doble. Se busca desde hace años una alternativa que no lo haga. Mientras tanto, casi todo lo que hay a nuestro alrededor viene de una maceta que se le partía a un jardinero.",
      },
    ],
  },

  {
    id: "arena-que-falta",
    titulo: "La arena del desierto no sirve",
    gancho: "Hay países rodeados de dunas que importan arena en barco. Los granos están demasiado redondos.",
    categoria: "Cemento",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una duna de arena fina y ondulada con rascacielos borrosos al fondo.",
    entrada:
      "Emiratos y otros países del Golfo, siglo XXI. Se levantan rascacielos en mitad de un desierto de arena y una parte del material se trae en barco desde Australia y desde otros continentes. Suena absurdo y no lo es: la arena que el viento ha pulido durante milenios no sirve para hacer hormigón. La que vale está en los ríos y en el fondo del mar.",
    paginas: [
      {
        rotulo: "El grano redondo",
        texto:
          "La razón está en la forma del grano. La arena del desierto la ha movido el viento durante miles de años, y ese roce constante redondea y pule cada partícula hasta dejarla casi esférica, de modo que los granos no se agarran entre sí y ruedan unos sobre otros como si fueran bolas. La arena de río, en cambio, ha viajado mucho menos y conserva las aristas, así que encaja y traba, y el cemento la sujeta. Para que un hormigón resista hace falta que los granos se enganchen; si no, la mezcla pierde resistencia.",
        destacado: { tipo: "frase", frase: "El viento pule los granos hasta dejarlos como bolas." },
      },
      {
        rotulo: "El negocio",
        texto:
          "El resultado es que la arena se ha convertido en el segundo recurso natural más extraído del mundo, por detrás del agua, con unos cincuenta mil millones de toneladas al año. Se saca de lechos de río, de canteras y con dragas del fondo marino, y en varios países existe un mercado negro organizado, con extracción ilegal, islas pequeñas que han desaparecido y episodios de violencia documentados. Vaciar el lecho de un río, además, hunde el cauce, deja al descubierto los cimientos de los puentes y facilita que el mar entre tierra adentro.",
        destacado: { tipo: "cifra", cifra: "50.000", unidad: "millones de toneladas al año" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se están probando sustitutos: escombro de derribo machacado, escoria de altos hornos, ceniza de centrales térmicas y arena de desierto tratada para darle aristas artificialmente, aunque ninguno cubre todavía más que una fracción de lo que se consume. Es uno de los pocos problemas ambientales grandes que casi nadie conoce, porque cuesta creer que un material que parece infinito pueda escasear. Y sin embargo ahí está la escena, que se ve desde cualquier avión que aterrice allí: torres de cristal en mitad de un mar de arena, construidas con arena traída desde el otro extremo del planeta.",
      },
    ],
  },
];
