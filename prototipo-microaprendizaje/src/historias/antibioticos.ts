import type { Short } from "../shorts";

/* ==========================================================================
   Los antibióticos.

   La penicilina ya se contó en medicina.ts, así que aquí no se repite el
   moho de la placa. Estos tres van por lo que vino después: de dónde salen
   los demás, quién avisó del final y en qué se gastan de verdad.

   La regla del tema: siempre se dice DE DÓNDE SALE la molécula —del suelo,
   de un hongo, de una bacteria que pelea con otra— porque casi nadie sabe
   que los antibióticos son armas que los microbios usan entre ellos y que
   nosotros les hemos copiado. Y se dan cifras de consumo, no de milagros.
   ========================================================================== */

export const ANTIBIOTICOS: Short[] = [
  {
    id: "un-punado-de-tierra",
    titulo: "El remedio contra la tuberculosis salió del suelo",
    gancho: "Un equipo cribó más de diez mil muestras de tierra buscando microbios que se mataran entre ellos.",
    categoria: "Antibióticos",
    color: "var(--plum)",
    encargo: "Un puñado de tierra oscura sobre una placa de laboratorio de cristal.",
    entrada:
      "Nueva Jersey, 1943. Un laboratorio universitario de ciencias del suelo lleva veinte años estudiando los microbios de la tierra de labranza, un asunto agrícola sin ningún prestigio médico. Su director tiene una intuición sencilla: en un gramo de tierra viven miles de millones de microorganismos peleando por comida, así que allí abajo tiene que haber armas químicas de sobra.",
    paginas: [
      {
        rotulo: "Cribar el barro",
        texto:
          "El método era paciencia industrializada. Se recogían muestras de tierra de campos, establos y jardines, se sembraban en placas y se buscaba el detalle revelador: un halo transparente alrededor de una colonia, señal de que ese microbio está soltando algo que impide crecer a los de al lado. Cada halo se aislaba, se cultivaba y se probaba contra bacterias causantes de enfermedades. La mayoría de los candidatos resultaban inútiles o tóxicos para las personas. El equipo revisó más de diez mil muestras a lo largo de años, con un becario nuevo repitiendo el mismo procedimiento cada temporada.",
        destacado: { tipo: "cifra", cifra: "10.000", unidad: "muestras de tierra revisadas" },
      },
      {
        rotulo: "El halo bueno",
        texto:
          "En octubre de 1943 dos muestras dieron el mismo resultado prometedor: una venía de un campo cercano y la otra, de la garganta de una gallina enferma. El microbio que crecía en ellas producía una sustancia que mataba, por primera vez, a la bacteria de la tuberculosis, una enfermedad que entonces se llevaba a una de cada siete personas en Europa y para la que solo existían el reposo y el aire de montaña. Los primeros enfermos tratados en 1944 mejoraron en semanas. El descubrimiento valió un premio Nobel en 1952 y una demanda judicial del joven que lo había aislado en el laboratorio.",
        destacado: { tipo: "frase", frase: "Una de las dos muestras venía de la garganta de una gallina." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el método, que fue el que dio casi todos los antibióticos que se usan hoy: durante los veinte años siguientes las farmacéuticas mandaron a sus empleados a recoger tierra de vacaciones, de expediciones y de aeropuertos de medio mundo, y de ahí salieron familias enteras de medicamentos. Quedó también la palabra antibiótico, que acuñó aquel director para nombrar lo que buscaba. Y quedó la idea de fondo, que sigue siendo la correcta: no inventamos estas sustancias, se las copiamos a unos microbios que llevan cientos de millones de años usándolas para pelear entre ellos bajo nuestros pies.",
      },
    ],
  },

  {
    id: "el-aviso-de-1945",
    titulo: "El descubridor avisó del problema al recoger el premio",
    gancho: "En 1945 explicó en público cómo se crean bacterias resistentes. Describió exactamente lo que hacemos hoy.",
    categoria: "Antibióticos",
    color: "var(--slate)",
    encargo: "Una placa de laboratorio con colonias creciendo alrededor de un disco de papel.",
    entrada:
      "Estocolmo, diciembre de 1945. El médico escocés que había descubierto la penicilina diecisiete años antes recoge el premio Nobel y pronuncia el discurso de rigor. En lugar de celebrar, dedica el final a una advertencia concreta, con un ejemplo inventado y detallado, sobre cómo el propio medicamento dejará de funcionar si se usa mal. Tardó menos de una década en cumplirse.",
    paginas: [
      {
        rotulo: "La dosis pequeña",
        texto:
          "El mecanismo que explicó es fácil de entender. Cuando un antibiótico llega a una población de bacterias, las mata casi todas, pero siempre hay unas pocas que por azar aguantan un poco más. Si el tratamiento es completo y suficientemente fuerte, esas pocas también caen. Si es corto o flojo, sobreviven, se quedan solas con toda la comida disponible y se multiplican: en unas horas hay millones de copias de las que aguantaban. No es que la bacteria aprenda, es que hemos seleccionado a las que ya resistían, exactamente igual que un ganadero selecciona a los mejores animales para criar.",
        destacado: { tipo: "frase", frase: "No aprenden a resistir: sobreviven las que ya resistían." },
      },
      {
        rotulo: "El hombre del ejemplo",
        texto:
          "Su ejemplo era un hombre que se compra el medicamento sin receta, toma la dosis justa para dejar de encontrarse mal, deja el frasco a medias y semanas después contagia a otra persona con bacterias ya endurecidas. Puso una frase que ha quedado: quien lo use mal es moralmente responsable de la muerte del que reciba después esa infección. En 1945 hablaba de un futuro hipotético. Las primeras bacterias resistentes a la penicilina aparecieron en los hospitales al final de aquella misma década, y en los años sesenta ya eran mayoría en algunos servicios.",
        destacado: { tipo: "cifra", cifra: "1945", unidad: "el año del aviso, en el discurso Nobel" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una carrera que llevamos perdiendo desde entonces por un motivo económico incómodo: un antibiótico nuevo cuesta una fortuna en desarrollar y, si funciona, lo correcto es guardarlo sin usar para cuando fallen los demás, de modo que apenas vende. Muchas farmacéuticas han abandonado esa línea. Las estimaciones actuales atribuyen a las infecciones resistentes más de un millón de muertes al año en el mundo. Aquel discurso de 1945 no era una profecía oscura ni una intuición: era una descripción técnica de lo que iba a pasar, hecha por quien mejor lo sabía, y se publicó entera.",
      },
    ],
  },

  {
    id: "antibioticos-en-el-pienso",
    titulo: "La mayoría de los antibióticos van a animales",
    gancho: "Se descubrió por casualidad en 1950 que engordaban a los animales, y desde entonces van en el pienso.",
    categoria: "Antibióticos",
    color: "var(--ochre)",
    encargo: "Un comedero metálico largo lleno de pienso en una nave ganadera.",
    entrada:
      "Estados Unidos, 1950. Un laboratorio que investiga vitaminas prueba a añadir a la comida de unos pollos los restos de una fermentación de antibiótico, esperando algún efecto nutritivo. Los pollos que la comen crecen bastante más deprisa que los demás con la misma cantidad de pienso. El hallazgo se publica, y en pocos años la ganadería del mundo entero incorpora antibióticos a la alimentación diaria.",
    paginas: [
      {
        rotulo: "Engordar sin saber",
        texto:
          "Por qué funcionaba no se supo con claridad durante décadas, y sigue discutiéndose: probablemente frenaba infecciones leves permanentes en animales hacinados y alteraba la flora del intestino de forma que aprovechaban mejor la comida. El efecto era pequeño por animal —unos puntos porcentuales de peso— pero enorme por explotación, y sobre todo permitía criar más animales juntos en menos espacio sin que las enfermedades arrasaran. Las dosis eran bajas y continuas, es decir, exactamente el escenario que fabrica bacterias resistentes según el mecanismo descrito cinco años antes. Nadie hizo esa cuenta entonces: el pienso medicado se vendía como un avance de la nutrición animal y se pagaba solo con el peso de más.",
        destacado: { tipo: "frase", frase: "Dosis bajas y continuas: el escenario perfecto para la resistencia." },
      },
      {
        rotulo: "El reparto",
        texto:
          "Las cifras del reparto sorprenden a casi todo el mundo. En los países donde se mide bien, alrededor de dos tercios de todos los antibióticos que se venden van destinados a animales, no a personas, y en algunos años y países la proporción ha llegado a ser mayor. Buena parte de lo que se administra acaba en el suelo y en el agua a través del estiércol, donde vuelve a encontrarse con los microbios de los que salió. La Unión Europea prohibió su uso como engorde en 2006, y solo pueden emplearse para tratar animales enfermos con receta veterinaria.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "de cada 3 antibióticos van a animales" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron dos décadas de discusión sobre si la resistencia de las bacterias de la granja llega o no a las personas, y hoy hay pruebas genéticas de que a veces llega, siguiendo el mismo gen de una explotación a un hospital. Quedó también un dato que ordena el asunto: el consumo mundial de antibióticos en ganadería sigue creciendo, empujado por el aumento del consumo de carne. Y quedó la ironía de la historia: aquellas sustancias salieron del suelo, donde los microbios llevaban millones de años usándolas, y las hemos devuelto al suelo en cantidades industriales.",
      },
    ],
  },
];
