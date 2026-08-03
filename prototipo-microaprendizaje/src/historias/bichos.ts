import type { Short } from "../shorts";

/* ==========================================================================
   Bichos.

   Animales. Tema con truco: el reino animal está lleno de récords y los
   récords aburren en cuanto van seguidos. El más rápido, el más grande, el
   que vive más. A la tercera historia el lector ya no siente nada.

   La regla del tema: la historia no va del animal, va de UNA DECISIÓN DE
   INGENIERÍA que ese animal tomó y nosotros no. Tres corazones porque su
   sangre transporta oxígeno peor que la nuestra. El rosa que no es suyo,
   sino de lo que come. Cada bicho es un problema resuelto de otra manera, y
   contar el problema antes que la solución es lo que engancha.

   Y nada de antropomorfismo barato. Los pulpos no son «alienígenas» ni las
   medusas «inmortales»: son cosas medidas por gente con nombre y fecha.
   ========================================================================== */

export const BICHOS: Short[] = [
  {
    id: "pulpo-corazones",
    titulo: "El pulpo tiene tres corazones y sangre azul",
    gancho: "Y el corazón principal se le para cada vez que nada.",
    categoria: "Bichos",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un pulpo común sobre fondo oscuro, los brazos extendidos, piel texturada.",
    entrada:
      "Ningún animal es raro porque sí. Los antepasados del pulpo llevaban concha y la soltaron a cambio de poder colarse por cualquier grieta: un bicho que pasa por donde le pase el pico es un bicho difícil de cenar. Fue un buen trato. Pero quedarse blando en un mar lleno de dientes obliga a rehacerlo todo, y esa factura se sigue pagando.",
    paginas: [
      {
        rotulo: "El azul",
        texto:
          "La primera cuota fue la sangre. La nuestra mueve el oxígeno con hierro, y el hierro la vuelve roja; la del pulpo lo mueve con cobre, y el cobre la vuelve azul. La hemocianina rinde bastante menos por litro que nuestra hemoglobina, aunque se defiende bien en agua fría y pobre, que es donde vive medio linaje de cefalópodos. Cuando el reparto flojea caben dos remedios: mejorar el reparto o poner más bombas. El pulpo puso más bombas. Dos branquiales empujan la sangre hacia las branquias; una tercera, la sistémica, la manda al resto del cuerpo.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "corazones, y nueve cerebros" },
      },
      {
        rotulo: "Por qué camina",
        texto:
          "Y esa tercera trae una avería de fábrica que le ordena la vida entera: cuando el pulpo nada a chorro, expulsando agua por el sifón, el corazón sistémico deja de latir. Nadar le corta el suministro. De ahí que prefiera caminar por el fondo con los brazos aunque tenga prisa, y se reserve el chorro para las huidas. Tampoco esos brazos esperan órdenes: dos tercios de sus neuronas no están en la cabeza, sino repartidas en ocho ganglios, uno por brazo, que resuelven solos cómo agarrar algo. El cerebro pide un resultado. El método lo decide el brazo.",
        destacado: {
          tipo: "frase",
          frase: "Nadar le para el corazón. Literalmente, no como metáfora.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Y todo ese ingenio —nueve centros de decisión, tres bombas, una piel que cambia de color sin ver— dura un suspiro. La mayoría de las especies vive uno o dos años y muere al reproducirse: la hembra deja de comer mientras vigila los huevos y se apaga cuando eclosionan. Nada de lo que un pulpo aprende llega a la generación siguiente, porque no llega a conocerla. Es la inteligencia más solitaria del planeta, levantada desde cero en cada individuo, sin escuela, sin relato y sin herencia. Nuestro último antepasado común vivió hace 600 millones de años y era un gusano plano.",
      },
    ],
  },

  {
    id: "flamencos-grises",
    titulo: "Los flamencos nacen grises y se tiñen comiendo",
    gancho: "El rosa no es suyo: lo alquilan a unos crustáceos y lo devuelven al criar.",
    categoria: "Bichos",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un flamenco adulto y un pollo gris juntos en la orilla, agua quieta.",
    entrada:
      "Un flamenco recién nacido es una bola gris blancuzca sin nada del color que hace famosa a la especie. Tardará años en ponerse rosa, y no lo hará por crecer: lo hará por comer. El pigmento no lo fabrica su cuerpo, lo saca entero de la dieta, y eso convierte el color en un dato público sobre lo bien que se está alimentando.",
    paginas: [
      {
        rotulo: "De dónde sale",
        texto:
          "El flamenco filtra agua con el pico del revés, boca abajo, reteniendo microalgas y crustáceos diminutos como la <em>Artemia</em>. Esos organismos están cargados de carotenoides, los mismos pigmentos que hacen naranja a la zanahoria. El hígado del ave los transforma y los deposita en las plumas, la piel y las patas. Sin esa dieta el animal se queda blanco: los primeros flamencos de zoológico palidecían hasta que se entendió por qué, y hoy su comida lleva carotenoides añadidos. El color, además, funciona como anuncio: un flamenco intenso es un flamenco que come bien, y las parejas lo notan.",
        destacado: {
          tipo: "frase",
          frase: "El color no dice qué animal es. Dice cómo le está yendo.",
        },
      },
      {
        rotulo: "La leche roja",
        texto:
          "Los dos progenitores alimentan al pollo con una secreción del buche, una especie de leche que no tiene nada que ver con la de un mamífero salvo en la función. Es de un rojo intenso, cargadísima de los mismos carotenoides, y produce un efecto visible: mientras crían, los adultos se van apagando, pierden el rosa y se quedan casi blancos. Cuando el pollo se independiza, recuperan el color en unos meses. Es de las pocas veces que se puede ver, a simple vista y desde lejos, cuánto le cuesta a un animal criar a otro.",
        destacado: { tipo: "cifra", cifra: "2-3", unidad: "años tarda en ponerse rosa del todo" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Las patas y el pico también cambian con la dieta, y la rodilla que todo el mundo ve doblada hacia atrás no es una rodilla: es el tobillo. La rodilla verdadera está mucho más arriba, escondida entre las plumas, y se dobla como la nuestra. Lo de dormir a la pata coja tiene explicación medida: en estudios con flamencos se ha comprobado que la postura es mecánicamente estable, sostenida por la propia articulación y sin apenas esfuerzo muscular. Se sostienen sobre una pata mejor dormidos que despiertos, y cuesta más trabajo muscular bajar la otra que dejarla arriba.",
      },
    ],
  },

  {
    id: "medusa-inmortal",
    titulo: "La medusa que vuelve a ser cría",
    gancho: "Un estudiante la olvidó en un acuario y descubrió que rebobinaba.",
    categoria: "Bichos",
    color: "var(--plum)",
    encargo: "Una medusa diminuta y transparente sobre negro, iluminada de lado.",
    entrada:
      "En los años ochenta, un estudiante alemán llamado Christian Sommer recogía hidrozoos en Rapallo, en la costa italiana, y guardó unos ejemplares diminutos en un recipiente. Al volver a mirarlos no encontró medusas muertas: encontró pólipos, la forma juvenil, pegados al fondo. Los animales no se habían reproducido. Se habían dado la vuelta.",
    paginas: [
      {
        rotulo: "Rebobinar",
        texto:
          "El ciclo normal de una medusa va en un sentido: larva, pólipo pegado a una roca y medusa nadadora que se reproduce y muere. <em>Turritopsis dohrnii</em>, de unos cuatro milímetros, puede recorrerlo al revés. Cuando la hieren, la matan de hambre o le cambian bruscamente la temperatura, sus células hacen algo llamado transdiferenciación: una célula ya especializada —de músculo, por ejemplo— cambia de oficio y se convierte en otra cosa. El animal se contrae, cae al fondo y se reconstruye como pólipo. De ese pólipo brotan medusas nuevas, genéticamente idénticas al ejemplar que estaba a punto de morir.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "milímetros mide la medusa entera" },
      },
      {
        rotulo: "La letra pequeña",
        texto:
          "Lo de «inmortal» es de los titulares, no de los papeles. La vuelta atrás solo ocurre bajo estrés y no siempre funciona: muchas mueren en el intento. Y aunque funcione, la medusa sigue estando en el mar, donde se la comen, la infectan y la arrastran las corrientes; en el laboratorio hace falta cuidarla mucho para verla repetir el ciclo. Lo correcto es decir que no tiene una muerte programada por envejecimiento, no que no se muera. Es una diferencia enorme, y es justo la que se pierde cada vez que se cuenta.",
        destacado: {
          tipo: "frase",
          frase: "No es que no muera. Es que no le toca morir por dentro.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El fenómeno se describió formalmente en 1992 y se confirmó en 1996 por un equipo italiano encabezado por Stefano Piraino. Desde entonces la especie se ha extendido por medio mundo pegada a los cascos de los barcos, algo que resulta bastante irónico para un animal que se hizo famoso por escapar del tiempo. La investigación que más interesa hoy no busca copiarle el truco, sino entender qué genes permiten que una célula adulta cambie de oficio: exactamente el mismo problema que hay detrás de la medicina regenerativa. Un bicho de cuatro milímetros haciendo desde hace millones de años lo que aquí cuesta un laboratorio.",
      },
    ],
  },
  {
    id: "cuervos-caras",
    titulo: "Los cuervos reconocen caras y avisan a los demás",
    gancho: "Unos científicos se pusieron una máscara para capturarlos. Cinco años después los seguían insultando por la calle.",
    categoria: "Bichos",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un cuervo negro de perfil sobre una rama pelada, con el ojo muy nítido.",
    entrada:
      "Estados Unidos, 2006. Un grupo de biólogos de una universidad de Seattle necesita capturar cuervos del campus para anillarlos, y sospecha que los animales aprenden a reconocer a quien los atrapa. Para comprobarlo se les ocurre un método sencillo: hacer las capturas siempre con la misma máscara de goma puesta, y después pasear por allí con ella y sin ella.",
    paginas: [
      {
        rotulo: "La máscara",
        texto:
          "Anillaron a siete cuervos llevando una máscara concreta, la cara de un hombre cualquiera. A partir de ese día, quien se paseara con esa máscara recibía una bronca: los pájaros graznaban con un sonido de alarma específico, se acercaban en picado y varios se sumaban desde los árboles de alrededor. Con otra máscara distinta no pasaba nada. El detalle importante es que daba exactamente igual quién fuera la persona que llevaba la máscara puesta: podía ser un estudiante recién llegado que no había tocado un cuervo en su vida, y lo perseguían igual desde que ponía un pie en el campus. Lo que reconocían era la cara, no al hombre.",
        destacado: { tipo: "frase", frase: "Con una máscara le graznaban. Con otra, ni lo miraban." },
      },
      {
        rotulo: "El boca a boca",
        texto:
          "Con los años, el número de cuervos que reaccionaba creció en vez de menguar, hasta el cuarenta y siete por ciento de los del campus: muchos más de los siete capturados, y muchos ni siquiera nacidos aquel día. La conclusión es que se lo enseñaban unos a otros, y que los jóvenes aprendían de los adultos a quién había que gritar sin haber tenido nunca un mal encuentro. El experimento siguió activo diecisiete años, con salidas periódicas a pasearse por el campus con la máscara puesta y una libreta, y la última bronca documentada fue en 2023.",
        destacado: { tipo: "cifra", cifra: "17", unidad: "años duró el rencor de los cuervos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Los estudios de imagen cerebral hechos después mostraron que ver la máscara peligrosa les activa zonas asociadas al miedo y a la memoria, parecidas a las nuestras. Estos animales también fabrican herramientas, doblando un alambre en forma de gancho para sacar comida de un tubo, y guardan objetos brillantes. Y hay quien deja comida en la ventana durante meses para ganárselos y acaba recibiendo pequeños regalos dejados en el mismo sitio: un tornillo, una cuenta de collar, un trozo de cristal pulido, un pendiente suelto. El caso mejor documentado es el de una niña de Seattle que llegó a reunir una colección entera. El rencor y la gratitud viajan por el mismo camino.",
      },
    ],
  },

  {
    id: "hormigas-agricultoras",
    titulo: "Hay hormigas que cultivan hongos desde antes que nosotros",
    gancho: "No comen hoja: la usan de abono. Inventaron la agricultura cincuenta y nueve millones de años antes que nosotros.",
    categoria: "Bichos",
    color: "var(--forest)",
    curioso: true,
    encargo: "Una fila de hormigas cargando trozos de hoja verde por el suelo del bosque.",
    entrada:
      "En los bosques de América hay filas de hormigas que cargan trozos de hoja recortados como banderines, diez veces su propio peso, y los meten bajo tierra. Todo el mundo da por hecho que se los comen; no pueden, porque no digieren la celulosa. Los usan de abono para un cultivo que atienden desde hace sesenta millones de años.",
    paginas: [
      {
        rotulo: "La granja",
        texto:
          "Dentro del hormiguero, que puede tener el volumen de una furgoneta y bajar seis metros, mastican las hojas hasta hacer una pasta y la extienden en cámaras donde crece un hongo concreto, que es lo único que comen. Ese hongo no existe en libertad: depende por completo de ellas y ellas de él, hasta el punto de que una reina fundadora se lleva un trocito en la boca al abandonar su nido para empezar otro. Las obreras más pequeñas se dedican solo a desherbar, retirando esporas de hongos que no son el suyo.",
        destacado: { tipo: "frase", frase: "Una reina que se marcha se lleva un trozo del cultivo en la boca." },
      },
      {
        rotulo: "El herbicida",
        texto:
          "El sistema tiene además su propio control de plagas. Un hongo parásito ataca los cultivos y las hormigas lo combaten con una bacteria que llevan encima del cuerpo, en unas cavidades de la coraza pensadas para alojarla, y que produce un compuesto que lo frena. Es decir: fabrican su antibiótico sobre la piel. Los investigadores dieron con ese mecanismo buscando compuestos nuevos para medicina humana, en una época en que las bacterias empezaban a resistirse a todo lo conocido. Varios de los antibióticos aislados desde entonces salieron de mirar muy de cerca la coraza de un insecto que cultiva su propia comida y sabe protegerla.",
        destacado: { tipo: "cifra", cifra: "60", unidad: "millones de años cultivando" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Un hormiguero maduro puede tener ocho millones de individuos y cortar en una noche todas las hojas de un árbol grande, lo que las convierte en la peor plaga agrícola de varios países. También son, por biomasa, uno de los mayores herbívoros del continente, aunque no coman ni una hoja. Y llevan haciendo esto desde mucho antes de que existieran los primates, los perros o los caballos. Cuando nuestra especie inventó la agricultura en el Creciente Fértil, hace unos doce mil años, y lo celebramos como el gran salto de la humanidad, ellas llevaban con la suya cincuenta y nueve millones de años largos y ya la habían perfeccionado.",
      },
    ],
  },

  {
    id: "ballenas-canto",
    titulo: "Las ballenas cambian de canción todas a la vez",
    gancho: "Todos los machos de un océano cantan lo mismo. Cuando aparece una versión nueva, se extiende en dos años.",
    categoria: "Bichos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una ballena jorobada suspendida en agua azul profunda, vista desde abajo.",
    entrada:
      "Océano Pacífico, 1967. Un biólogo estadounidense consigue grabaciones militares submarinas y descubre que unos sonidos largos y repetitivos que salen en las cintas no son ruido de máquinas: son ballenas jorobadas cantando. Los machos emiten secuencias de hasta veinte minutos que repiten durante horas, y el sonido viaja bajo el agua cientos de kilómetros.",
    paginas: [
      {
        rotulo: "La misma canción",
        texto:
          "Al comparar grabaciones apareció lo desconcertante: todos los machos de una misma zona del océano cantan exactamente la misma canción, y su estructura es mucho más ordenada de lo que parece. Cada canción se compone de unidades que forman frases, las frases se agrupan en temas y los temas se suceden siempre en el mismo orden, como las estrofas de una copla. Un macho puede repetirla sin pausa durante veinticuatro horas. Y todos los de una misma población cantan la versión vigente casi nota por nota, hasta el punto de que un investigador puede identificar el océano por la melodía, igual que se identifica un acento.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "minutos puede durar una canción" },
      },
      {
        rotulo: "La moda",
        texto:
          "Lo asombroso es que esa canción cambia. Cada pocos años aparece una variación —a veces traída por un grupo que viene de otra zona— y se impone: todos los machos la adoptan y abandonan la anterior, sin volver a ella nunca. Se documentó una versión que salió del este de Australia y cruzó el Pacífico hacia el oeste, población por población, tardando unos dos años en recorrer seis mil kilómetros y sustituyendo por completo a la que había en cada sitio por el que pasaba. Es la única moda cultural conocida a esa escala fuera de nosotros.",
        destacado: { tipo: "frase", frase: "Una canción cruzó el Pacífico en dos años y borró a las demás." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No se sabe para qué cantan. Las explicaciones más manejadas son atraer a las hembras o marcar territorio frente a otros machos, y ninguna encaja del todo con las observaciones. Aquellas grabaciones de los años sesenta se publicaron en un disco que vendió más de cien mil copias y que se considera clave en la campaña que llevó a prohibir la caza comercial en 1986. Aquellas grabaciones se publicaron en un disco que vendió más de cien mil copias y que se considera decisivo en la campaña que llevó a prohibir la caza comercial en 1986. Una copia viaja hoy fuera del sistema solar, en el disco de oro de las Voyager.",
      },
    ],
  },
];
