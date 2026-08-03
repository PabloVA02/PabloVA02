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
];
