import type { Short } from "../shorts";

/* ==========================================================================
   Vidrio.

   Un material que está en todas partes y que nadie mira: ventanas,
   pantallas, botellas, gafas. El riesgo del tema es la lección de química,
   con sílice, temperaturas de fusión y estructuras moleculares.

   La regla del tema: el vidrio se cuenta por LO QUE CUESTA HACERLO PLANO
   Y TRANSPARENTE. Durante siglos fue un artículo de lujo vigilado como un
   secreto de Estado, y cada avance consistió en quitarse de encima un
   trabajo manual carísimo. Cuando se abarató, cambió la casa entera.

   Y si el tema arrastra un bulo repetido en clase, se desmonta con
   pruebas que el lector pueda comprobar por su cuenta.
   ========================================================================== */

export const VIDRIO: Short[] = [
  {
    id: "vidrieros-murano",
    titulo: "Los vidrieros eran presos",
    gancho: "Venecia les dio espada y privilegios de noble. Marcharse del país se castigaba con la muerte.",
    categoria: "Vidrio",
    color: "var(--plum)",
    encargo: "Un horno de vidrio antiguo con la boca al rojo y unas cañas de soplar apoyadas.",
    fotos: [
      {
        archivo: "Canale San Giovanni (Murano).jpg",
        autor: "La isla de Murano, en la laguna de Venecia, vista desde el agua.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Canale_San_Giovanni_(Murano).jpg",
        foco: "50% 50%",
        alt: "Una hilera de casas de ladrillo rojizo al borde del agua, con un campanario de piedra inclinado detrás.",
      },
      {
        archivo: "(Bemberg Foundation) - 18th Century Venetian 'Mirror' Gilded wood and glass.jpg",
        autor: "Espejo veneciano del siglo XVIII, de madera dorada y cristal. Fundación Bemberg, Toulouse. Fotografía de Didier Descouens.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:(Bemberg_Foundation)_-_18th_Century_Venetian_'Mirror'_Gilded_wood_and_glass.jpg",
        foco: "50% 35%",
        alt: "Un espejo alto con marco de madera tallada y dorada, rematado por volutas y hojas.",
      },
      {
        archivo: "Galerie des Glaces (23934705229).jpg",
        autor: "La galería de los Espejos de Versalles, levantada con espejos franceses después de que Francia se llevara a los maestros venecianos. Fotografía de Jorge Láscar.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Galerie_des_Glaces_(23934705229).jpg",
        foco: "50% 45%",
        alt: "Una galería larguísima con arcos de espejos a un lado, ventanales al otro y arañas de cristal colgando.",
      },
      {
        archivo: "Corning Museum of Glass - 20220312 - 03 - Hot Glass Show.jpg",
        autor: "Una bola de vidrio fundido recalentándose en el horno, a más de mil grados. Museo del Vidrio de Corning. Fotografía de Andre Carrotflower.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Corning_Museum_of_Glass_-_20220312_-_03_-_Hot_Glass_Show.jpg",
        foco: "50% 45%",
        alt: "La boca encendida de un horno de vidrio con una caña metida dentro y una masa incandescente en la punta.",
      },
    ],
    entrada:
      "Venecia, 1291. La ciudad ordena trasladar todos los hornos de vidrio a una isla de la laguna, a kilómetro y medio escaso del centro. La excusa oficial es el riesgo de incendio, que es razonable de verdad en una ciudad apretada y llena de casas de madera, y nadie discute la medida. La consecuencia real, en cambio, va mucho más allá: los mejores vidrieros de Europa quedan concentrados en un sitio pequeño, rodeado de agua y fácil de vigilar, del que a partir de entonces no pueden salir, ni con permiso ni sin él, durante el resto de su vida.",
    paginas: [
      {
        rotulo: "El privilegio",
        texto:
          "El trato tenía dos caras. Los maestros vidrieros disfrutaban de ventajas que no tenía casi nadie de su condición: podían llevar espada, se libraban de algunos impuestos y sus hijas podían casarse con nobles, algo impensable para un artesano. A cambio, no podían abandonar la República. Sus técnicas —el vidrio transparente como el agua, conseguido con cenizas de plantas y manganeso, o los espejos planos recubiertos con una lámina de estaño y mercurio— eran un secreto de Estado que valía una fortuna: un espejo veneciano grande costaba más que un cuadro de un pintor famoso.",
        destacado: { tipo: "frase", frase: "Podían llevar espada, y no podían salir del país." },
      },
      {
        rotulo: "La fuga",
        texto:
          "En el siglo XVII, el ministro de finanzas del rey de Francia decidió que era absurdo seguir pagando aquellas cantidades y organizó un fichaje encubierto: agentes metidos en la isla, promesas de dinero y de casa, y una fuga por etapas. Consiguió sacar a una veintena de maestros y montar con ellos una manufactura real cerca de París, la misma que acabaría fabricando el salón de espejos de un palacio célebre. Venecia respondió con amenazas a las familias que quedaban y, según las crónicas del momento, con envenenamientos: dos de los fugados murieron de repente.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "maestros fugados a Francia" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Los hornos siguen encendidos en la misma isla setecientos años después, aunque el negocio es hoy sobre todo turístico y compite con imitaciones baratas que se venden como si fueran de allí; hay incluso una marca registrada para distinguir las piezas auténticas. Del monopolio no queda nada: el espejo pasó de ser un objeto de palacio a colgar en el cuarto de baño de cualquier casa. Y la isla que se creó para tener vigilados a unos artesanos acabó dando nombre, ella sola, a una manera de soplar el vidrio que se reconoce en todo el mundo.",
      },
    ],
  },

  {
    id: "vidrio-flotado",
    titulo: "Vidrio sobre estaño",
    gancho: "Antes había que pulirlo días enteros por las dos caras y tirar medio material por el camino.",
    categoria: "Vidrio",
    color: "var(--slate)",
    encargo: "Una cinta continua de vidrio incandescente saliendo de un horno industrial.",
    fotos: [
      {
        archivo: "Folklore Furnace.jpg",
        autor: "Vidriero sacando del horno una masa de vidrio al rojo en la punta de la caña.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AFolklore%20Furnace.jpg",
        foco: "55% 58%",
        alt: "Hombre de perfil ante la boca encendida de un horno, sosteniendo una barra con vidrio incandescente en el extremo.",
      },
      {
        archivo: "Taean Friendship Glass Factory - 03.jpg",
        autor: "Nave de una fábrica de vidrio, con la línea de producción en marcha.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ATaean%20Friendship%20Glass%20Factory%20-%2003.jpg",
        foco: "50% 50%",
        alt: "Interior de una fábrica de vidrio, con maquinaria alineada, cintas y operarios trabajando.",
      },
      {
        archivo: "Glass-making Electric Furnace 1.jpg",
        autor: "Horno eléctrico de vidrio abierto durante una demostración pública.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AGlass-making%20Electric%20Furnace%201.jpg",
        foco: "50% 50%",
        alt: "Boca de un horno de vidrio con el interior naranja incandescente y herramientas apoyadas al lado.",
      },
      {
        archivo: "Clouds in a tall glass facade (Unsplash).jpg",
        autor: "Nubes reflejadas en la fachada acristalada de un edificio de Londres.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AClouds%20in%20a%20tall%20glass%20facade%20(Unsplash).jpg",
        foco: "50% 50%",
        alt: "Pared entera de cristal de un rascacielos, con el cielo y las nubes reflejados sin deformarse.",
      },
    ],
    entrada:
      "Inglaterra, 1952. Fabricar una luna de cristal plano y sin deformaciones es carísimo, y lo es por una razón puramente mecánica: se cuela el vidrio fundido sobre una mesa, se deja enfriar y después hay que desbastarlo y pulirlo por las dos caras durante días, con abrasivos y con máquinas grandes, desperdiciando por el camino una parte enorme del material que ya se había pagado. Todo el mundo en el oficio da por hecho que ese es el precio de tener un cristal decente. Un ingeniero de una fábrica de vidrio propone entonces algo que suena a disparate.",
    paginas: [
      {
        rotulo: "La idea",
        texto:
          "Su propuesta consistía en dejar de pelearse con la superficie y aprovechar la física: verter el vidrio fundido sobre un baño de estaño derretido, un metal que funde a temperatura baja y pesa más que el vidrio. El vidrio flota encima, se extiende solo hasta formar una lámina de espesor uniforme, y las dos caras salen perfectamente lisas: la de arriba porque la aplana la gravedad, la de abajo porque copia la superficie del metal líquido, que es un espejo. No hay que pulir nada. La cinta sale por el otro extremo, se enfría despacio y se corta.",
        destacado: { tipo: "frase", frase: "Las dos caras salen lisas sin pulir ninguna de las dos." },
      },
      {
        rotulo: "Los siete años",
        texto:
          "Entre la idea y la primera lámina vendible pasaron siete años y una cantidad de dinero que estuvo a punto de hundir a la empresa. El problema estaba en los detalles: el estaño se oxida en contacto con el aire y mancha el vidrio, así que hubo que encerrar todo el baño en una atmósfera sin oxígeno, y la temperatura tenía que controlarse a lo largo de cincuenta metros de horno. Durante catorce meses seguidos la fábrica produjo vidrio inservible que iba directo a la chatarra. La primera tirada aceptable salió en 1959, y desde ahí resultó más barato que cualquier otro método.",
        destacado: { tipo: "cifra", cifra: "14", unidad: "meses seguidos tirando la producción" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Prácticamente todo el vidrio plano que existe hoy en el mundo se fabrica así: las ventanas, los escaparates, los parabrisas, las pantallas de los móviles y las mamparas de la ducha. Las plantas funcionan sin parar, de día y de noche, durante diez o quince años seguidos, porque apagar el horno y volver a encenderlo cuesta meses de trabajo y una fortuna. La empresa cobró licencias a todos los fabricantes del planeta durante décadas y ganó con eso mucho más que vendiendo vidrio. El invento consistió, en el fondo, en dejar de tocar el material.",
      },
    ],
  },

  {
    id: "vidrio-no-fluye",
    titulo: "El vidrio no se derrite",
    gancho: "Se enseña que es más grueso abajo porque fluye despacio. Es falso, y la razón real es mejor.",
    categoria: "Vidrio",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un vitral gótico a contraluz con los plomos marcando las piezas de color.",
    entrada:
      "Es una explicación que se repite en clase desde hace décadas: los vitrales de las catedrales góticas, de hace seiscientos u ochocientos años, son más gruesos por abajo porque el vidrio sería un líquido lentísimo que se ha ido escurriendo con los siglos. La observación es cierta. La explicación no tiene nada que ver.",
    paginas: [
      {
        rotulo: "El cálculo",
        texto:
          "Si el vidrio fluyera de esa manera se podría estimar cuánto tardaría, y el resultado deja poco margen a la duda: para que una lámina se deformara de forma visible a temperatura ambiente harían falta plazos que superan con mucho la edad del universo. Además hay pruebas al alcance de cualquiera que entre en un museo. Se conservan vasijas y copas de vidrio romano, de hace dos mil años, con paredes finísimas y perfectamente regulares. Y hay lentes de telescopio talladas hace tres siglos que siguen enfocando igual, algo imposible si su superficie hubiera cambiado una micra.",
        destacado: { tipo: "cifra", cifra: "2.000", unidad: "años de vidrio romano sin deformarse" },
      },
      {
        rotulo: "El soplado",
        texto:
          "La razón verdadera está en cómo se fabricaban aquellas láminas. Se soplaba una burbuja grande de vidrio, se abría por un lado y se hacía girar a toda velocidad hasta que la fuerza la extendía en un disco plano, igual que quien estira una masa de pizza en el aire. Un disco así no sale nunca de grosor uniforme: queda más fino en el borde y más grueso hacia el centro. De ahí se cortaban las piezas, y el vidriero que iba a montarlas en plomo colocaba, lógicamente, el lado pesado abajo, porque una pieza aguanta mejor apoyada sobre su parte gruesa.",
        destacado: { tipo: "frase", frase: "Se giraba la burbuja hasta abrirla como una masa de pizza." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se han encontrado además vitrales antiguos montados al revés, con el lado grueso arriba, y a esos no les ha ocurrido absolutamente nada en ocho siglos. La idea de que el vidrio es un líquido viene de otro sitio: en física tiene una estructura desordenada, parecida a la de un líquido, en lugar de la red ordenada de un cristal, y de esa descripción técnica salió el malentendido. Es un sólido con todas las letras. Lo que sí ocurre, y explica la confusión, es que no tiene un punto de fusión limpio: se ablanda poco a poco en vez de derretirse de golpe.",
      },
    ],
  },
];
