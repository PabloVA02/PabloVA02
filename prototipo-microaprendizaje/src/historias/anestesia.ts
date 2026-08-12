import type { Short } from "../shorts";

/* ==========================================================================
   La anestesia.

   El invento que separó la cirugía de la tortura, y del que ya se contó aquí
   la mañana del éter de 1846. Estos tres shorts van por otro lado: lo que
   pasó ANTES y lo que sigue sin saberse.

   La regla del tema: no se recrea el dolor. Contar operaciones sin anestesia
   con detalle es fácil y es barato, y además espanta al lector. Se cuenta el
   RETRASO —cuántos años estuvo la solución delante de la gente sin que nadie
   la usara— y se traduce siempre la química al lenguaje de la sensación:
   qué nota el que lo prueba, y cuándo deja de notarlo.
   ========================================================================== */

export const ANESTESIA: Short[] = [
  {
    id: "gas-de-la-risa-de-feria",
    titulo: "De la feria al quirófano",
    gancho: "Se vendía en fiestas y espectáculos de feria mientras en los quirófanos se seguía operando en carne viva.",
    categoria: "Anestesia",
    color: "var(--plum)",
    encargo: "Una bolsa de tela hinchada con una boquilla de madera, sobre una mesa de salón antiguo.",
    fotos: [
      {
        archivo: "Nitrous oxide cylinder, Europe, 1840-1868 Wellcome L0058164.jpg",
        autor: "Recipiente de óxido nitroso europeo, entre 1840 y 1868. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Nitrous_oxide_cylinder,_Europe,_1840-1868_Wellcome_L0058164.jpg",
        foco: "55% 50%",
        alt: "Un cilindro barrigudo de latón lacado en negro, con aros metálicos y una llave de paso de bronce.",
      },
      {
        archivo: "Ramsay Grove Museum of Victorian Life Interior Drawing Room 2.jpg",
        autor: "Un salón victoriano reconstruido, con la repisa de la chimenea cargada de adornos. Fotografía de Zairon, 2022.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ramsay_Grove_Museum_of_Victorian_Life_Interior_Drawing_Room_2.jpg",
        foco: "50% 45%",
        alt: "Una habitación de papel pintado verde con chimenea negra, jarrones de porcelana, una piel de tigre y un piano.",
      },
      {
        archivo: "Copy of the Squire-type ether inhaler first used in 1846 Wellcome L0057829.jpg",
        autor: "Copia del inhalador de éter tipo Squire, el primero que se usó en un quirófano en 1846. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Copy_of_the_Squire-type_ether_inhaler_first_used_in_1846_Wellcome_L0057829.jpg",
        foco: "50% 45%",
        alt: "Un recipiente de vidrio en forma de campana con una esponja dentro y un tubo de goma que sale hacia una boquilla.",
      },
      {
        archivo: "Two nitrous oxide cylinders, England, 1915-1940 Wellcome L0058165.jpg",
        autor: "Dos bombonas de óxido nitroso inglesas, entre 1915 y 1940. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Two_nitrous_oxide_cylinders,_England,_1915-1940_Wellcome_L0058165.jpg",
        foco: "50% 45%",
        alt: "Dos botellas negras de gas tumbadas sobre un fondo espejado, con las llaves de latón unidas por un puente.",
      },
    ],
    entrada:
      "Inglaterra, 1799. Un joven químico de veinte años que investiga gases en un instituto médico de Bristol hace lo que se hacía entonces: probarlos en sí mismo. Le toca el turno a uno recién descubierto, el óxido nitroso, y respira tanto y tan a menudo que llega a preocupar a sus colegas. Anota con detalle lo que siente: euforia, risa incontrolable y una curiosa insensibilidad. Escribe además que en pleno efecto se le pasó un dolor de muelas que llevaba días molestándole, y sugiere por escrito que quizá el gas sirva para operar sin dolor. Nadie le hace caso durante cuarenta y cinco años.",
    paginas: [
      {
        rotulo: "La bolsa del salón",
        texto:
          "Lo que sí prendió fue la fiesta. El gas se preparaba con facilidad calentando una sal, se guardaba en bolsas de tela encerada con una boquilla de madera y se pasaba de mano en mano en veladas de gente acomodada, donde poetas y estudiantes lo respiraban y luego escribían lo que habían sentido. De ahí saltó a la feria: un espectáculo habitual en las ciudades americanas consistía en subir voluntarios al escenario, darles a respirar de la bolsa y dejar que el público se riera de sus tropiezos. Se cobraba entrada. Se le llamaba, sin más, el gas hilarante.",
        destacado: { tipo: "frase", frase: "Se cobraba entrada por ver a la gente reírse del gas." },
      },
      {
        rotulo: "La espinilla",
        texto:
          "En diciembre de 1844, en una de esas funciones, un dentista del público vio a un voluntario bajo los efectos del gas golpearse la espinilla contra un banco con una fuerza que dejó la pierna ensangrentada, y comprobó después que el hombre no había sentido absolutamente nada. Al día siguiente pidió que le quitaran a él mismo una muela mientras respiraba el gas, y no notó dolor. Organizó una demostración pública en un hospital de prestigio y le salió mal: retiró la bolsa demasiado pronto, el paciente se quejó y la sala lo abucheó. El éter se llevó la gloria dos años después.",
        destacado: { tipo: "cifra", cifra: "45", unidad: "años tardó el gas en llegar al quirófano" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El gas volvió por su propio peso. Es rápido, se va enseguida y no exige que el paciente pierda del todo la conciencia, así que sigue usándose hoy en las consultas dentales, en los partos y en urgencias infantiles, mezclado con oxígeno en proporciones exactas y con la boquilla en la mano del propio paciente. La historia se cuenta en las facultades por lo que enseña sobre el retraso: la solución estuvo escrita, publicada y respirada por miles de personas durante cuarenta y cinco años antes de que a alguien se le ocurriera llevarla al sitio donde hacía falta. Lo que faltaba no era el gas, era la idea.",
      },
    ],
  },

  {
    id: "anestesia-de-una-hoja",
    titulo: "Anestesia de hoja de coca",
    gancho: "Se probó en la lengua: si adormece la lengua, adormecerá el ojo. Y funcionó.",
    categoria: "Anestesia",
    color: "var(--ochre)",
    encargo: "Un frasco de cristal pequeño con polvo blanco y un cuentagotas al lado.",
    fotos: [
      {
        archivo: "Iris of human male.jpg",
        autor: "Iris humano fotografiado con objetivo macro. Fotografía de Osmo Lundell.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Iris_of_human_male.jpg",
        foco: "50% 50%",
        alt: "Primerísimo plano de un iris humano azulado, con las fibras y la pupila negra en el centro.",
      },
      {
        archivo: "Planta de la Coca (Erythroxylum coca).jpg",
        autor: "Planta de coca (Erythroxylum coca) en el jardín botánico del centro Takiwasi, Perú, 2007.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Planta_de_la_Coca_(Erythroxylum_coca).jpg",
        foco: "50% 45%",
        alt: "Rama de arbusto de coca con hojas ovaladas de un verde intenso.",
      },
      {
        archivo: "Blue evening view at old town of Heidelberg and Neckar river.jpg",
        autor: "Heidelberg al anochecer, la ciudad donde se presentó el hallazgo en el congreso de oftalmología de 1884.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Blue_evening_view_at_old_town_of_Heidelberg_and_Neckar_river.jpg",
        foco: "50% 55%",
        alt: "Ciudad antigua junto a un río a la hora azul, con el puente iluminado y el castillo en la ladera.",
      },
      {
        archivo: "Iris Macro, Eye close-up (11622304153).jpg",
        autor: "Ojo humano en primer plano. Fotografía de Matt Ming.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Iris_Macro,_Eye_close-up_(11622304153).jpg",
        foco: "50% 50%",
        alt: "Ojo humano muy de cerca, con las pestañas enfocadas y el iris marrón detallado.",
      },
    ],
    entrada:
      "Viena, 1884. Operar un ojo es hasta entonces un problema casi irresoluble: dormir al paciente entero le hace vomitar al despertar y los movimientos involuntarios arruinan el trabajo, pero mantenerlo despierto significa que note el bisturí en la córnea. No hay término medio, y por eso muchas operaciones sencillas sencillamente no se hacen. Un médico joven del servicio de oftalmología busca otra cosa: algo que quite la sensibilidad de una sola parte del cuerpo, la que se va a tocar, sin apagar al paciente, sin tumbarlo durante horas y sin que se le revuelva el estómago después.",
    paginas: [
      {
        rotulo: "Probar en la lengua",
        texto:
          "La pista venía de las hojas de coca, que se mascaban en los Andes desde hacía siglos y de las que se había aislado el principio activo veinticinco años antes. Varios médicos habían notado de pasada que aquel polvo dejaba la lengua insensible, y lo anotaron como una curiosidad sin consecuencias. El oftalmólogo hizo la conexión que faltaba: si adormece la lengua, tiene que adormecer también la córnea. Preparó una disolución, la echó gota a gota en el ojo de una rana, tocó la superficie con la punta de una aguja y el animal no reaccionó. Después lo probó en su propio ojo.",
        destacado: { tipo: "frase", frase: "Si adormece la lengua, tiene que adormecer el ojo." },
      },
      {
        rotulo: "Congreso y resaca",
        texto:
          "Lo presentó en un congreso de oftalmología en septiembre de aquel mismo año y la noticia dio la vuelta al mundo en semanas. En pocos meses se operaban cataratas con el paciente despierto y tranquilo, y la técnica saltó a la odontología y a la cirugía menor. La resaca llegó después: aquella sustancia crea una dependencia brutal, cosa que entonces no se entendía, y varios médicos que la promovieron acabaron destrozados por ella. La búsqueda de un sustituto sin ese efecto ocupó veinte años y terminó en 1905 con un compuesto de laboratorio que ya no venía de ninguna planta.",
        destacado: { tipo: "cifra", cifra: "1884", unidad: "el año de la primera anestesia local" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó toda la anestesia local moderna, que es la que casi todo el mundo ha probado alguna vez: el pinchazo en la encía antes de un empaste, la crema antes de una punción, la epidural de un parto. Todas descienden de aquella disolución, aunque las moléculas de hoy sean sintéticas, más seguras y sin efecto sobre la cabeza. Y quedó el detalle que resume la historia: la clave llevaba veinticinco años escrita en los cuadernos de varios investigadores que habían notado la lengua dormida y lo habían apuntado como una anécdota sin importancia.",
      },
    ],
  },

  {
    id: "no-se-sabe-como-funciona",
    titulo: "Nadie sabe cómo funciona",
    gancho: "Se usa millones de veces al año y el mecanismo exacto sigue siendo materia de discusión.",
    categoria: "Anestesia",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una pantalla de monitor con una línea de onda irregular en verde sobre fondo oscuro.",
    entrada:
      "En cualquier hospital del mundo, hoy. Un anestesista apaga la conciencia de una persona, la mantiene apagada durante horas y la vuelve a encender con una precisión notable. Lo hace millones de veces al año con una seguridad altísima. Y sin embargo, si se le pregunta qué ocurre exactamente en el cerebro para que eso pase, la respuesta honesta sigue siendo que no se sabe del todo.",
    paginas: [
      {
        rotulo: "Grasa y proteína",
        texto:
          "La primera explicación, de 1900, era desconcertante por lo simple: se observó que la potencia de un anestésico se corresponde casi exactamente con lo bien que se disuelve en grasa, sea cual sea su composición química. Como las membranas de las neuronas son grasas, se dedujo que el gas se metía en ellas y las alteraba. La idea aguantó setenta años. Hoy se piensa más bien que estas sustancias actúan sobre proteínas concretas de la superficie de las neuronas, unas compuertas que dejan pasar partículas cargadas, pero la lista de proteínas implicadas es larga y no explica todo lo que se observa.",
        destacado: { tipo: "frase", frase: "Cuanto mejor se disuelve en grasa, mejor duerme." },
      },
      {
        rotulo: "Medir el sueño",
        texto:
          "Como no hay una medida directa de la conciencia, la dosis se ajusta observando: tensión, ritmo del corazón, movimientos, y en muchos quirófanos un aparato que analiza la actividad eléctrica del cerebro y la resume en un número entre cero y cien. No es infalible. Un estudio británico enorme publicado en 2014, que revisó tres millones de operaciones, encontró un caso de despertar con recuerdo por cada veinte mil aproximadamente, casi siempre breve y en los momentos de dormir o despertar al paciente. Es poco, y sigue siendo uno de los grandes objetos de estudio de la especialidad.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "de cada 20.000 recuerda algo de la operación" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Que algo funcione sin entenderse del todo no es raro en medicina, y la anestesia es el ejemplo más grande y más tranquilizador: su seguridad se ha construido a base de medir, vigilar y estandarizar, no de resolver el misterio de fondo. La muerte atribuible solo a la anestesia ha pasado de uno por cada mil quinientos pacientes en los años cuarenta a menos de uno por cada cien mil hoy. Mientras tanto, la pregunta sigue abierta, y no es una pregunta menor: quien consiga explicar cómo se apaga la conciencia habrá explicado también, de paso, en qué consiste tenerla.",
      },
    ],
  },
];
