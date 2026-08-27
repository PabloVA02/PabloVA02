import type { Short } from "../shorts";

/* ==========================================================================
   Curiosidades.

   Los temas que pidió Pablo, con los títulos que él quiere: tajantes y
   dichos como los diría cualquiera. «Por qué llueve», y no «Por qué llueve
   de verdad». La pregunta directa gana a la frase ingeniosa, porque el
   lector ya sabe si le interesa antes de terminar de leerla.

   CÓMO SE ESCRIBEN, desde el 27 de agosto por la noche: la historia entera y
   seguida primero, como se contaría en voz alta, y después se corta en
   pantallas por donde el texto deje algo colgando. El número de páginas es lo
   que salga, no una decisión previa. La maqueta lo permite porque la banda de
   imagen es elástica: la fotografía se queda con lo que el texto no usa, así
   que una página corta no deja hueco, deja foto. Las reglas, en `MOLDE.md`;
   la banda, en el bloque «LA BANDA DE IMAGEN: ELÁSTICA» de `styles.css`.

   Y LA REGLA DE ORO DE ESTA CARPETA, que costó una bronca merecida. La
   primera versión de «Por qué llueve» abría con un físico de 1880 y su
   campana de cristal, y Pablo la tumbó entera: «el usuario solo quiere saber
   por qué llueve y le explicas cosas raras, lo cuentas muy raro». Tenía
   razón: el título hace una pregunta y la entrada tiene que CONTESTARLA, en
   dos o tres frases que entendería cualquiera. Las sorpresas vienen después,
   colgadas de esa respuesta; el científico entra cuando su historia empuja,
   nunca como puerta. La regla está en `MOLDE.md`, «La respuesta primero».

   Y DESDE ESA MISMA NOCHE, SIN RÓTULOS. Pablo los quitó de la pantalla:
   «estamos siempre limitados al texto que poner». Ocupaban un renglón y
   obligaban a que cada página fuese un apartado titulable, o sea a trocear la
   explicación cuando lo que se busca es leerla de corrido. El campo `rotulo`
   se sigue escribiendo como esqueleto del que redacta, pero no se pinta: lo
   que antes hacía el título lo hace ahora LA PRIMERA FRASE de cada página,
   que nombra de qué va y engancha con la anterior.

   Lo demás, como siempre: la frase que cierra recoge la que abre, cada
   página acaba dejando una puerta que la siguiente cruza, los términos se
   explican en la frase en que aparecen y las cifras se racionan.
   ========================================================================== */

export const CURIOSIDADES: Short[] = [
  {
    id: "al-sol-le-queda-media-vida",
    titulo: "¿Cuánto le queda al sol?",
    gancho:
      "No se apagará como una bombilla: se hinchará hasta tragarse la órbita de la Tierra.",
    categoria: "Ciencia",
    color: "var(--ochre)",
    encargo: "El disco solar entero en ultravioleta, con la corona erizada de arcos.",
    fotos: [
      {
        archivo: "Solar Orbiter’s widest high-res view of the Sun ESA508430.jpg",
        autor:
          "La corona solar en ultravioleta: doscientas tomas de la sonda Solar Orbiter cosidas en una, 9 de marzo de 2025. Agencia Espacial Europea.",
        licencia: "CC BY-SA 3.0 igo",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Solar_Orbiter%E2%80%99s_widest_high-res_view_of_the_Sun_ESA508430.jpg",
        foco: "50% 50%",
        alt: "El disco del Sol en amarillo cálido, con la corona erizada de arcos brillantes alrededor del ecuador y una franja oscura cerca del polo sur.",
      },
      /* Las tres de dentro las puse yo y son provisionales hasta que Pablo
         mande las suyas. Las tres pasan el examen de la foto: cada una enseña
         justo lo que cuenta su página. */
      {
        archivo: "NSF’s Inouye Solar Telescope First Light (NSO-DKIST-firstlight-full).jpg",
        autor:
          "Cada celda de gas hirviendo del Sol mide como un país. Telescopio Solar Inouye, 2020. NSO/NSF/AURA.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:NSF%E2%80%99s_Inouye_Solar_Telescope_First_Light_(NSO-DKIST-firstlight-full).jpg",
        foco: "50% 50%",
        alt: "La superficie del Sol vista muy de cerca: celdas doradas apretadas como panales, separadas por surcos oscuros.",
      },
      {
        archivo: "The Blue Marble, AS17-148-22727.jpg",
        autor:
          "La Tierra entera iluminada, fotografiada por la tripulación del Apolo 17 camino de la Luna el 7 de diciembre de 1972. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:The_Blue_Marble,_AS17-148-22727.jpg",
        foco: "50% 50%",
        alt: "La Tierra sobre el negro del espacio, con África y la Antártida a la vista bajo remolinos de nubes blancas.",
      },
      {
        archivo: "NGC7293 (2004).jpg",
        autor:
          "La nebulosa de la Hélice: lo que dejó al morir una estrella como el Sol. Hubble, 2004. NASA y ESA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:NGC7293_(2004).jpg",
        foco: "50% 50%",
        alt: "Un anillo enorme de gas azul y anaranjado sobre el fondo negro del espacio, con un punto blanco diminuto en el centro.",
      },
    ],
    entrada:
      "Al Sol le queda más o menos la mitad: lleva ardiendo cuatro mil seiscientos millones de años y tiene cuerda para otros cinco mil. En una vida humana, cuarenta y tantos. Lo sabemos desde 1938, cuando el físico Hans Bethe explicó de qué vive. Pero lo inquietante no es cuándo se apagará, sino cuándo dejará de servirnos.",
    paginas: [
      {
        rotulo: "Un fuego que engorda",
        texto:
          "Para saber cuánto le queda hay que saber qué quema, y no es fuego. En el centro del Sol la presión es tan bestia que los núcleos de hidrógeno se aplastan unos contra otros hasta fundirse en helio. Cada fusión suelta un golpe de energía que tarda cien mil años en abrirse camino hasta la superficie. Lo que importa es la ceniza: el helio pesa más que el hidrógeno, se va acumulando en el centro y lo aprieta todavía más, así que el horno quema cada vez más fuerte. El Sol de hoy alumbra un tercio más que el que vio nacer a la Tierra. Y sigue subiendo. Ese engorde tan lento parece inofensivo, pero es una cuenta atrás.",
      },
      {
        rotulo: "Nos toca antes",
        texto:
          "Y la cuenta atrás no acaba donde uno pensaría. Al Sol le quedan cinco mil millones de años, pero a nosotros nos queda la quinta parte. Dentro de unos mil millones, ese brillo de más bastará para que los océanos empiecen a evaporarse en serio. Y aquí viene la parte fea: el vapor de agua atrapa calor. Cuanta más agua suba al cielo, más se calentará todo, y cuanto más se caliente, más agua subirá. La Tierra no va a arder. Se va a secar, girando tan tranquila alrededor de un sol que desde fuera seguirá pareciendo amable. De todo el tiempo que este planeta tenía para la vida, cuatro quintas partes ya han pasado.",
      },
      {
        rotulo: "El último acto",
        texto:
          "Lo que viene después ya no es problema nuestro: es un espectáculo. Cuando el núcleo agote el hidrógeno, el Sol hará algo que suena contradictorio: el centro se encogerá y las capas de fuera se hincharán muchísimo. Se convertirá en una gigante roja que se tragará a Mercurio y a Venus. Con la Tierra la cosa está tan justa que puede acabar de las dos maneras. Al final soltará sus capas al espacio y quedará el corazón desnudo, una brasa del tamaño de nuestro planeta que se irá enfriando durante billones de años. Para entonces hará muchísimo que aquí abajo no queda nadie a quien alumbrar.",
      },
    ],
  },

  {
    id: "por-que-llueve",
    titulo: "Por qué llueve",
    gancho:
      "Dentro de cada gota de lluvia hay una mota de polvo. Sin ella no llovería nunca.",
    categoria: "Ciencia",
    color: "var(--slate)",
    encargo: "Una nube de tormenta descargando, con las cortinas de lluvia colgando debajo.",
    fotos: [
      {
        archivo: "Cumulonimbus cloud over the Sundarbans, West Bengal, India 01.jpg",
        autor:
          "Nube de tormenta sobre los Sundarbans, India. Las cortinas que cuelgan son lluvia que se evapora antes de llegar. Kingshuk Mondal, 2025.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Cumulonimbus_cloud_over_the_Sundarbans,_West_Bengal,_India_01.jpg",
        foco: "50% 40%",
        alt: "Una nube de tormenta enorme sobre un río ancho, con franjas grises de lluvia colgando de su base.",
      },
      {
        archivo: "Wave breaking into spray on rocky Robben Island shore.jpg",
        autor:
          "Una ola reventando contra las rocas de Robben Island, en Sudáfrica. Cada gota que salta deja sal en el aire. Daniel Case, 2018.",
        licencia: "CC BY-SA 3.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Wave_breaking_into_spray_on_rocky_Robben_Island_shore.jpg",
        foco: "50% 45%",
        alt: "Una ola blanca estallando contra rocas oscuras y levantando una nube de espuma y salpicaduras.",
      },
      {
        archivo: "Cute summer cloud over Tuntorp, Brastad.jpg",
        autor:
          "Un cúmulo de verano sobre Tuntorp, en la costa oeste de Suecia. Dentro hay medio millón de kilos de agua. W. Carter, 2026.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Cute_summer_cloud_over_Tuntorp,_Brastad.jpg",
        foco: "50% 58%",
        alt: "Una sola nube blanca y redonda flotando en un cielo azul intenso, con hilos de cirros por encima.",
      },
      {
        archivo: "Snowflake macro photography 1.jpg",
        autor:
          "Un copo de nieve de cuatro milímetros, fotografiado con lente de aumento en Moscú. Alexey Kljatov, 2014.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Snowflake_macro_photography_1.jpg",
        foco: "50% 50%",
        alt: "Un copo de nieve visto muy de cerca, con sus seis brazos ramificados y simétricos, sobre fondo azul.",
      },
    ],
    entrada:
      "El agua que te moja estaba hace unos días en el mar. El sol la calienta, una parte sube convertida en vapor, arriba hace frío y el vapor vuelve a ser gotas: eso es una nube. Cuando las gotas pesan demasiado, caen. Esa es la historia entera, y cada paso esconde una sorpresa.",
    paginas: [
      {
        rotulo: "El viaje hacia arriba",
        texto:
          "La primera sorpresa está en el aire, y es que no puede estar limpio. El vapor que sube del mar es un gas invisible, y para volver a ser agua necesita algo sólido a lo que agarrarse: por su cuenta no sabe formar una gota. Lo que le ofrece el cielo son motas diminutas que flotan por todas partes: polvo del desierto, polen, ceniza de incendios lejanos y sal que el mar suelta al romper cada ola. Sobre cada mota se forma una gotita, y millones de gotitas juntas son una nube. En 1880 el físico escocés John Aitken enfrió aire filtrado en una campana de cristal y no consiguió sacarle ni niebla: sin polvo no hay nubes.",
      },
      {
        rotulo: "Una nube pesa mucho",
        texto:
          "Ya tenemos la nube, y ahora hay que explicar por qué no se nos cae encima. Una nube blanca de las de buen tiempo lleva dentro medio millón de kilos de agua, más o menos lo que pesa un avión de pasajeros lleno, y ahí sigue, flotando tan tranquila. El truco es que ese peso está repartido en gotitas cincuenta veces más finas que la punta de un bolígrafo. Algo tan pequeño cae tan despacio que el aire que sube desde el suelo lo sostiene sin despeinarse. Para llover tienen que engordar, y engordan a lo bruto: chocan unas con otras, se funden, y la que más crece empieza a caer más rápido y va barriendo a las de abajo.",
      },
      {
        rotulo: "Empieza nevando",
        texto:
          "A la mayoría de las nubes les falta todavía un empujón, y viene del frío. Arriba hace tanto que el agua sigue líquida por debajo de cero, esperando una excusa para helarse. La excusa es un cristal de hielo: en cuanto aparece uno, el vapor de alrededor se le pega, crece deprisa, pesa y se despeña. Por el camino atraviesa aire templado y se derrite, así que lo que golpea tu paraguas es casi siempre un copo de nieve que no llegó entero. Después el agua corre al río, el río al mar, y el sol vuelve a levantarla. Por eso llueve: porque el agua nunca termina el viaje.",
      },
    ],
  },

  {
    id: "por-que-vuelan-los-aviones",
    titulo: "Por qué vuelan los aviones",
    gancho:
      "La explicación del colegio está mal, y lo demuestran los que vuelan boca abajo.",
    categoria: "Ciencia",
    color: "var(--clay)",
    encargo: "El ala de un avión de línea desde la ventanilla, sobre un mar de nubes.",
    fotos: [
      {
        archivo: "A wing tip of an airplane (40118125441).jpg",
        autor:
          "El ala de un avión vista desde la ventanilla, sobre un banco de nubes al atardecer. Departamento de Agricultura de EE. UU., 2018.",
        licencia: "Public domain",
        fuente:
          "https://commons.wikimedia.org/wiki/File:A_wing_tip_of_an_airplane_(40118125441).jpg",
        foco: "50% 50%",
        alt: "El ala blanca de un avión saliendo de la ventanilla, con nubes altas iluminadas por el sol bajo.",
      },
      {
        archivo: "Airplane vortex.jpg",
        autor:
          "El aire que deja atrás un ala, teñido con humo de colores para poder verlo. Ensayo de la NASA en Wallops Island, 1990.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Airplane_vortex.jpg",
        foco: "45% 55%",
        alt: "Una avioneta cruzando una cortina de humo rojo y azul, que se enrosca detrás de su ala en un remolino enorme.",
      },
      {
        archivo:
          "The Red Arrows roll upside down in tight formation during display training MOD 45147906.jpg",
        autor:
          "La patrulla acrobática de la Real Fuerza Aérea británica, volando boca abajo en formación cerrada. Cabo Andy Benson, 2008.",
        licencia: "OGL v1.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:The_Red_Arrows_roll_upside_down_in_tight_formation_during_display_training_MOD_45147906.jpg",
        foco: "45% 50%",
        alt: "Siete aviones rojos volando invertidos muy juntos sobre un cielo azul, dejando estelas blancas.",
      },
      {
        archivo: "N910DU taking off at Tampa International Airport.jpg",
        autor:
          "Un Boeing 737 levantando el morro para despegar en Tampa: cuanto más inclinada va el ala, más aire desvía. Andrew Heneen, 2023.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:N910DU_taking_off_at_Tampa_International_Airport.jpg",
        foco: "55% 45%",
        alt: "Un avión de pasajeros con el morro levantado justo al despegar, con el tren de aterrizaje todavía en el suelo.",
      },
    ],
    entrada:
      "Un avión vuela porque su ala empuja aire hacia abajo, y el aire, al ser empujado, lo empuja a él hacia arriba. Eso es todo. En el colegio seguramente te contaron otra cosa: que el ala es más curva por arriba y que el aire de ese lado corre más deprisa. Esa explicación tan repetida tiene un problema. No es la que hace volar a los aviones.",
    paginas: [
      {
        rotulo: "Lo que lo sostiene",
        texto:
          "La ley la escribió Newton en 1687 y no ha envejecido nada: si empujas una masa de aire hacia abajo, esa masa te empuja a ti hacia arriba con la misma fuerza. Un ala viaja siempre un poco inclinada respecto al viento que le llega, y esa inclinación es la que desvía el aire hacia el suelo. La curva de arriba ayuda a que el aire se quede pegado en vez de despegarse, y para eso está. Las cifras marean: un avión de línea en pleno vuelo lanza hacia abajo cientos de toneladas de aire cada segundo. Todo ese aire empujado es lo que lo sostiene.",
      },
      {
        rotulo: "La forma no manda",
        texto:
          "Si la joroba fuera la causa, un avión no podría volar boca abajo. Y vuela. Los aviones acrobáticos llevan alas simétricas, planas por los dos lados, y se pasan la exhibición entera dando vueltas sin caerse. Les basta con inclinar el ala hacia el otro lado para que siga empujando el aire hacia el suelo. Un ala completamente plana también vuela: lo hace peor y gasta más combustible, pero vuela. La curva no es el motivo por el que un avión se sostiene, es un detalle que le ahorra esfuerzo. Lo único que un ala no perdona es pasarse de inclinación.",
      },
      {
        rotulo: "Cuando deja de agarrar",
        texto:
          "Porque cuanto más se inclina el ala, más aire desvía y más sostiene, hasta que de golpe deja de hacerlo. Pasados unos quince grados, el aire ya no consigue seguir la curva: se despega en remolinos y el ala pierde casi toda su fuerza de una vez. Eso es entrar en pérdida, y no tiene que ver con ir despacio: puede pasar a toda velocidad. Por eso lo primero que enseña un instructor es lo que menos apetece con el suelo acercándose: bajar el morro para que el ala vuelva a encontrar aire. Volar es convencer al aire de que baje.",
      },
    ],
  },

  {
    id: "por-que-el-mar-es-salado",
    titulo: "Por qué el mar es salado",
    gancho:
      "La sal viene de la tierra, no del mar. Y el mar no se está volviendo más salado.",
    categoria: "Ciencia",
    color: "var(--sage)",
    encargo: "Una costa abierta al océano, con el oleaje rompiendo contra la roca.",
    fotos: [
      {
        archivo:
          "Princetown (AU), Port Campbell National Park, Twelve Apostles -- 2019 -- 0969.jpg",
        autor:
          "Los Doce Apóstoles, en la costa sur de Australia. La caliza de esos farallones es roca hecha de conchas. Dietmar Rabich, 2019.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Princetown_(AU),_Port_Campbell_National_Park,_Twelve_Apostles_--_2019_--_0969.jpg",
        foco: "50% 52%",
        alt: "Farallones de piedra caliza saliendo del mar junto a un acantilado, con el oleaje rompiendo alrededor.",
      },
      {
        archivo: "Yukon Delta.jpg",
        autor:
          "El delta del Yukón desde el satélite, soltando en el mar de Bering todo lo que el río ha arrancado por el camino. ESA, 2017.",
        licencia: "CC BY-SA 3.0 igo",
        fuente: "https://commons.wikimedia.org/wiki/File:Yukon_Delta.jpg",
        foco: "45% 45%",
        alt: "Un delta visto desde el espacio: canales verdes que se ramifican y una gran mancha rosada de sedimento entrando en un mar turquesa.",
      },
      {
        archivo: "Tunisia-3916 - Salt Crystals (7849884490).jpg",
        autor:
          "Costra de sal en el Chott el Yerid, en el Sáhara: el agua se evapora y deja atrás lo que llevaba disuelto. Dennis G. Jarvis, 2012.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Tunisia-3916_-_Salt_Crystals_(7849884490).jpg",
        foco: "50% 50%",
        alt: "Cristales de sal blancos y rosados formando una costra rugosa sobre el barro de un salar.",
      },
    ],
    entrada:
      "El mar es salado porque lleva miles de millones de años cobrando un peaje: cada río del mundo le trae un poco de sal robada a las rocas. El agua que se evapora se marcha sin ella; la sal entra y no sale. O eso parecía: en 1715 el astrónomo Edmond Halley quiso usar esa cuenta como reloj de la Tierra, y el mar le enseñó su otra mitad.",
    paginas: [
      {
        rotulo: "De dónde sale",
        texto:
          "El peaje funciona así. La lluvia es ligeramente ácida, porque arrastra dióxido de carbono del aire, y al caer sobre la roca la va deshaciendo grano a grano. Los ríos recogen lo que la piedra suelta y lo arrastran cuesta abajo, tan diluido que el agua nos sigue sabiendo dulce. El mar es el final del trayecto y no tiene desagüe: el sol se lleva el agua evaporada y deja la sal donde estaba. Un año detrás de otro, desde antes de que existieran los peces. Halley pensó lo que pensaría cualquiera: si la sal solo entra, contarla es fechar el mar. La cuenta, cuando por fin se hizo, salió ridículamente corta.",
      },
      {
        rotulo: "Y no sube",
        texto:
          "El error no estaba en los números, estaba en el mar: también pierde sal, solo que sin hacer ruido. Una parte se va en la espuma que el viento arranca de las olas. Otra queda enterrada cuando un brazo de mar se seca y deja una costra blanca. Y otra vuelve a la roca por las grietas del fondo. Entradas y salidas llevan empatadas cientos de millones de años, así que el mar de los dinosaurios sabía más o menos como el de tus vacaciones. Por eso no sirve de reloj: el mar no se está volviendo más salado. Cobra su peaje y lo gasta.",
      },
    ],
  },
];
