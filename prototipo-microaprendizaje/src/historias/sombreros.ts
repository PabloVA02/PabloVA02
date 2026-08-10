import type { Short } from "../shorts";

/* ==========================================================================
   Los sombreros.

   Durante siglos nadie salía a la calle con la cabeza descubierta, y en
   sesenta años eso desapareció casi por completo. El tema se hunde si se
   convierte en historia de la moda: formas, alas, temporadas.

   La regla del tema: el sombrero se cuenta como OBJETO INDUSTRIAL Y SOCIAL.
   De qué está hecho y qué le hacía a quien lo fabricaba, para qué servía
   antes de ser adorno, y por qué se dejó de llevar. Nada de estilo: oficio,
   material y costumbre.
   ========================================================================== */

export const SOMBREROS: Short[] = [
  {
    id: "el-sombrerero-loco",
    titulo: "El mercurio del fieltro",
    gancho: "Temblor de manos, dientes perdidos y carácter irritable. No era una expresión: era una intoxicación laboral.",
    categoria: "Sombreros",
    color: "var(--plum)",
    encargo: "Un taller con moldes de madera para sombreros y vapor saliendo de una cuba.",
    fotos: [
      {
        archivo: "Top hat - Hardy Brothers (1).jpg",
        autor: "Una chistera de felpa de seda sobre fieltro. Fotografía de Toxophilus.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Top_hat_-_Hardy_Brothers_(1).jpg",
        foco: "50% 55%",
        alt: "Un sombrero de copa negro y brillante, con cinta y ala curvada, apoyado sobre una tabla de madera clara.",
      },
      {
        archivo: "Hat, top (AM 1965.13-3).jpg",
        autor: "Sombrero de copa de la década de 1880, fabricado por Cooper Box & Co. Auckland War Memorial Museum.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Hat,_top_(AM_1965.13-3).jpg",
        foco: "50% 50%",
        alt: "Una chistera antigua de copa alta y fieltro negro, algo desgastada por el uso.",
      },
      {
        archivo: "Collapsible top hat IMGP9692.jpg",
        autor: "Una chistera plegable, del tipo que se llevaba doblada bajo el brazo. Fotografía de Nikodem Nijaki.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Collapsible_top_hat_IMGP9692.jpg",
        foco: "50% 50%",
        alt: "Un sombrero de copa con muelles interiores que permiten aplastarlo, medio abierto sobre fondo neutro.",
      },
      {
        archivo: "Robert Howlett (Isambard Kingdom Brunel Standing Before the Launching Chains of the Great Eastern), The Metropolitan Museum of Art - restoration1.jpg",
        autor: "El ingeniero Isambard Kingdom Brunel ante las cadenas de botadura del Great Eastern, fotografiado por Robert Howlett en 1857. Metropolitan Museum, Nueva York.",
        licencia: "Dominio público",
        pdPorEdad: 1858,
        fuente: "https://commons.wikimedia.org/wiki/File:Robert_Howlett_(Isambard_Kingdom_Brunel_Standing_Before_the_Launching_Chains_of_the_Great_Eastern),_The_Metropolitan_Museum_of_Art_-_restoration1.jpg",
        foco: "50% 40%",
        alt: "Un hombre con chistera alta y traje embarrado, de pie con las manos en los bolsillos delante de unas cadenas gigantescas.",
      },
    ],
    entrada:
      "Francia e Inglaterra, siglos XVIII y XIX. El fieltro de los buenos sombreros se hace con pelo de conejo o de liebre, que por sí solo no se apelmaza bien y da un material flojo. Los talleres descubrieron que, tratando el pelo con una disolución de nitrato de mercurio, cada pelo se riza microscópicamente y se enreda con los de al lado con muchísima más facilidad. El resultado es un fieltro más denso, más rápido de hacer y bastante más barato. Al procedimiento se le llamó, sin la menor ironía, el secreto.",
    paginas: [
      {
        rotulo: "El vapor del taller",
        texto:
          "El trabajo se hacía en salas cerradas y calientes, cepillando el pelo con la disolución y después metiéndolo en cubas de agua hirviendo para apelmazarlo. De ahí salía un vapor cargado de mercurio que los operarios respiraban durante toda la jornada, y el metal se acumula en el cuerpo sin que haya forma de expulsarlo. Los primeros síntomas eran un temblor fino de las manos que impedía trabajos delicados, encías dañadas y pérdida de dientes. Después venían la irritabilidad extrema, la timidez enfermiza, la desconfianza y, en los casos avanzados, problemas de memoria y alucinaciones.",
        destacado: { tipo: "frase", frase: "El temblor empezaba en las manos y acababa en el carácter." },
      },
      {
        rotulo: "El nombre",
        texto:
          "El cuadro era tan reconocible que los médicos del siglo XIX lo describieron como una enfermedad propia del oficio y le pusieron nombre, y en el habla corriente se hizo un dicho: estar loco como un sombrerero. El personaje del sombrerero chiflado de un cuento inglés de 1865 recoge esa idea popular, aunque el autor nunca escribió que estuviera envenenado. Lo llamativo es lo que tardó en corregirse: se conocía la causa desde mediados de siglo y el mercurio siguió usándose en los talleres durante casi cien años más, porque la alternativa era más cara y menos eficaz.",
        destacado: { tipo: "cifra", cifra: "100", unidad: "años se siguió usando sabiendo la causa" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En Estados Unidos se prohibió en 1941, y no por razones de salud: hacía falta mercurio para la industria de guerra y las empresas aceptaron cambiar el proceso por otro con peróxido. Los estudios posteriores encontraron rastros del metal en los antiguos operarios décadas después de dejar el oficio. Quedó la expresión, que se sigue usando sin saber que describe una intoxicación real, y quedó un ejemplo de manual sobre enfermedades del trabajo: el daño estaba descrito, publicado y con nombre propio mucho antes de que nadie cambiara nada en el taller.",
      },
    ],
  },

  {
    id: "el-bombin-era-un-casco",
    titulo: "El bombín se encargó como casco de trabajo",
    gancho: "Lo pidió un terrateniente para sus guardas, que se descalabraban con las ramas bajas. Se probó pisándolo.",
    categoria: "Sombreros",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un sombrero bombín negro y duro sobre una mesa de madera, de perfil.",
    entrada:
      "Londres, 1849. Un aristócrata inglés entra en una sombrerería con un encargo poco habitual: quiere un sombrero para los guardas que vigilan a caballo sus tierras. Los que llevan, de copa alta y blandos, se enganchan con las ramas bajas y se caen constantemente, y algunos guardas han terminado en el suelo. Pide una pieza baja, redonda y sobre todo dura.",
    paginas: [
      {
        rotulo: "La prueba del pisotón",
        texto:
          "Dos sombrereros hermanos fabricaron el prototipo con fieltro endurecido con goma laca, una resina que al secarse deja el ala rígida como una cáscara. La prueba de aceptación es la parte buena de la historia y está documentada: el cliente colocó el sombrero en el suelo de la tienda, se subió encima y saltó dos veces con todo su peso. El sombrero aguantó sin deformarse. Pagó doce chelines y encargó una partida entera para sus hombres. La copa baja y redondeada hacía además que las ramas resbalaran por encima en lugar de engancharse.",
        destacado: { tipo: "frase", frase: "Se subió encima y saltó dos veces: el sombrero aguantó." },
      },
      {
        rotulo: "A la ciudad",
        texto:
          "Lo que empezó como equipo de trabajo rural saltó a la ciudad por una razón práctica: era más cómodo que la chistera, no se caía al agacharse ni al subir a un carruaje y aguantaba la lluvia. Los oficinistas lo adoptaron en masa, y a lo largo del siglo se convirtió en el sombrero del empleado urbano de todo el mundo, mientras la copa alta quedaba para las ocasiones solemnes. Al otro lado del Atlántico se llevó también en el oeste americano, mucho más que el sombrero de ala ancha que enseñan las películas.",
        destacado: { tipo: "cifra", cifra: "1849", unidad: "el año del encargo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una prenda que en cien años recorrió toda la escala social, de los guardas de una finca a los banqueros de la capital, y que después se convirtió en símbolo de dos cosas opuestas: la seriedad del funcionario británico y el disfraz del cómico del cine mudo. Se dejó de llevar a partir de los años sesenta con todos los demás sombreros. Y quedó su origen, que casi nadie recuerda al verlo: no era un adorno de caballero, era un casco, y su primera prueba de calidad consistió en que un hombre se subiera encima a saltar.",
      },
    ],
  },

  {
    id: "por-que-nadie-lleva-sombrero",
    titulo: "En veinte años dejamos todos de llevar sombrero",
    gancho: "Salir a la calle con la cabeza descubierta era impensable, y de pronto lo impensable fue lo contrario.",
    categoria: "Sombreros",
    color: "var(--slate)",
    encargo: "Una calle de los años cincuenta llena de gente, todos con sombrero.",
    entrada:
      "Occidente, 1960. Cualquier fotografía de una calle concurrida tomada antes de esa fecha muestra a casi todos los hombres con la cabeza cubierta, y a casi todas las mujeres también. Veinte años después, la misma calle aparece llena de cabezas descubiertas. Es uno de los cambios de costumbre más rápidos y más completos del siglo, y no hay una sola causa que lo explique.",
    paginas: [
      {
        rotulo: "El coche",
        texto:
          "La explicación más citada es el automóvil. Cuando la gente se desplazaba a pie, en tranvía o a caballo, pasaba mucho rato a la intemperie y el sombrero cumplía una función real contra el sol, la lluvia y el frío. Al generalizarse el coche, el trayecto pasó a ser de puerta a puerta, y además los techos bajos de los modelos de posguerra obligaban a quitárselo para entrar y dejarlo en el asiento de al lado, donde se aplastaba. Un objeto que hay que quitarse y ponerse veinte veces al día y que además se estropea deja de compensar.",
        destacado: { tipo: "frase", frase: "Un objeto que estorba veinte veces al día deja de compensar." },
      },
      {
        rotulo: "Menos formalidad",
        texto:
          "Hay otras causas que empujaron a la vez. El sombrero era el marcador social más visible que existía: la forma, el material y hasta el ángulo decían de un vistazo a qué clase pertenecía quien lo llevaba, y una generación entera decidió que eso ya no le interesaba. Se acabó también la costumbre de saludar descubriéndose, que era la mitad de su razón de ser. Y cambió el peinado: los cortes de los años sesenta se lucían y un sombrero los destroza. Suele culparse al presidente americano que tomó posesión en 1961 sin llevarlo, pero sí lo llevaba, y la caída había empezado antes.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "años tardó en desaparecer la costumbre" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron los sombrereros como oficio residual y de lujo, y quedó una prenda que solo sobrevive por función pura: gorras de trabajo, cascos, gorros de invierno, sombreros de campo. Volvió también por una vía inesperada, la del sol, cuando los dermatólogos empezaron a recomendarlo. Y quedó una lección sobre lo rápido que se derrumba una costumbre que parecía inamovible: durante siglos, salir a la calle con la cabeza descubierta se consideró impropio de una persona decente, y hoy la rareza es exactamente la contraria, sin que nadie recuerde haber decidido nada.",
      },
    ],
  },
];
