import type { Short } from "../shorts";

/* ==========================================================================
   Espacio.

   Cosmos cuenta lo que hay ahí fuera; Espacio cuenta lo que hicimos nosotros
   para ir. Son dos temas distintos y conviene no mezclarlos: uno va de
   planetas y el otro va de gente metida en una lata.

   La regla del tema: la aventura espacial se cuenta desde el CUERPO. Cuántas
   horas cabían en el tanque de oxígeno, qué se oía por la radio, quién estaba
   sudando en la sala de control. Las cifras de la NASA impresionan una vez;
   un hombre con el pulso a ciento cincuenta impresiona siempre.
   ========================================================================== */

export const ESPACIO: Short[] = [
  {
    id: "luna-combustible",
    titulo: "Cómo se alunizó a ciegas",
    gancho: "El ordenador de a bordo se colapsó, el sitio previsto era un pedregal y quedaba gasolina para medio minuto.",
    categoria: "Espacio",
    color: "var(--slate)",
    encargo: "Un módulo lunar posado sobre el polvo gris, con la sombra larga y el negro absoluto detrás.",
    /* Una imagen por pantalla y cada una habla de su página: la bajada, la
       sala de control durante la alarma, el suelo que había que esquivar y lo
       que se dejó allí. Todas de la NASA, que publica sus fotos sin derechos. */
    fotos: [
      {
        archivo: "Astronaut Edwin Aldrin descends the Lunar Module ladder, AS11-40-5868 (21037483754).jpg",
        autor:
          "Aldrin bajando la escalerilla del módulo lunar, 20 de julio de 1969. Fotografía de Neil Armstrong. NASA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Astronaut_Edwin_Aldrin_descends_the_Lunar_Module_ladder,_AS11-40-5868_(21037483754).jpg",
        foco: "62% 55%",
        alt: "Un astronauta baja de espaldas por la escalerilla del módulo lunar, forrado de láminas doradas, sobre el polvo gris.",
      },
      {
        archivo:
          "View of Mission Control Center (MCC) - Lunar Surface - Apollo XI - Extravehicular Activity (EVA) - MSC (S69-39817).jpg",
        autor:
          "La sala de control de Houston durante la misión, 20 de julio de 1969. NASA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:View_of_Mission_Control_Center_(MCC)_-_Lunar_Surface_-_Apollo_XI_-_Extravehicular_Activity_(EVA)_-_MSC_(S69-39817).jpg",
        foco: "50% 40%",
        alt: "La sala de control de Houston a oscuras, con las pantallas encendidas y la imagen en blanco y negro de la Luna proyectada al fondo.",
      },
      {
        archivo: "AS11-40-5890 (21473295409).jpg",
        autor:
          "El suelo del Mar de la Tranquilidad fotografiado desde el punto de aterrizaje, 20 de julio de 1969. NASA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:AS11-40-5890_(21473295409).jpg",
        foco: "50% 60%",
        alt: "La superficie de la Luna sembrada de piedras hasta el horizonte, con el cielo completamente negro encima.",
      },
      {
        archivo: "Deployed experiments and Lunar Module, AS11-40-5950.jpg",
        autor:
          "Los instrumentos dejados en la Luna, con el módulo al fondo. El panel plano de la derecha es el espejo con el que todavía se mide la distancia. NASA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Deployed_experiments_and_Lunar_Module,_AS11-40-5950.jpg",
        foco: "50% 45%",
        alt: "Instrumentos científicos posados en el polvo lunar, con huellas de botas alrededor y el módulo lunar y la bandera al fondo.",
      },
    ],
    entrada:
      "Mar de la Tranquilidad, en la Luna, el 20 de julio de 1969. Dos hombres bajan hacia la superficie dentro de una nave del tamaño de un coche pequeño, con paredes de aluminio tan finas que se abollarían con un dedo. No hay manera de haber ensayado esto en la Tierra: la Luna no tiene aire, así que allí no sirven ni las alas ni los paracaídas y hay que frenar solo con el motor. Abajo les espera un terreno que nadie ha visto de cerca: las mejores fotos que existen lo enseñan desde tan lejos que una roca de dos metros no aparece. Y arriba, en la sala de control, la edad media de los ingenieros que vigilan el descenso es de veintiséis años.",
    paginas: [
      {
        rotulo: "La alarma",
        texto:
          "A siete minutos del suelo empezó a sonar una alarma que nadie esperaba: el ordenador de a bordo, que tenía menos memoria que una tarjeta de felicitación musical de hoy, se estaba saturando de tareas. Un ingeniero de veintiséis años tuvo veinte segundos para decidir si aquello obligaba a abortar. Dijo que siguieran, porque reconoció el fallo: el ordenador no se había roto, estaba descartando lo menos importante para no atascarse. Lo habían programado para eso. La alarma sonó cuatro veces más durante el descenso y cinco veces les dijeron que continuaran.",
        destacado: { tipo: "frase", frase: "El ordenador no se había roto: estaba tirando por la borda lo que no era urgente." },
      },
      {
        rotulo: "El pedregal",
        texto:
          "Superada la alarma, apareció el problema de verdad. Por la ventanilla, el punto exacto donde iban a posarse resultó ser un cráter rodeado de rocas del tamaño de un coche. Aterrizar ahí significaba volcar. Armstrong tomó los mandos a mano, pasó de largo y voló en horizontal buscando un sitio liso, mientras el combustible bajaba y desde el control alguien cantaba en voz alta los segundos que quedaban. Se posaron sobre una llanura de polvo con reserva para <strong>25 segundos</strong> más de vuelo. El motor levantó una nube gris que no llegaba a asentarse, porque allí no hay aire que la frene. En los ensayos, ningún piloto había apurado tanto.",
        destacado: { tipo: "cifra", cifra: "25", unidad: "segundos de combustible sobraron" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Lo primero que hicieron al tocar suelo no fue celebrarlo: fue preparar el despegue de emergencia, por si el terreno cedía. Estuvieron dos horas y media fuera, recogieron veintiún kilos de piedras y dejaron una placa, una bandera y las bolsas de basura, que siguen ahí. También dejaron un espejo con el que, cincuenta años después, se sigue midiendo con láser la distancia exacta a la Luna. Y el presidente de Estados Unidos tenía escrito y guardado, en un cajón de la Casa Blanca, un discurso para el caso de que no consiguieran despegar y hubiera que dejarlos allí. No hizo falta leerlo nunca.",
      },
    ],
  },

  {
    id: "laika",
    titulo: "La perra que no volvía",
    gancho: "La subieron sabiendo que no había manera de bajarla. Tardaron cuarenta y cinco años en contar cómo murió.",
    categoria: "Espacio",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una perra pequeña de morro blanco, mirada tranquila, en blanco y negro de los años cincuenta.",
    fotos: [
      {
        archivo: "Лайка (собака-космонавт)1.jpg",
        autor: "Laika en el arnés de la cápsula, fotografiada antes del lanzamiento de noviembre de 1957.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:%D0%9B%D0%B0%D0%B9%D0%BA%D0%B0_(%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82)1.jpg",
        foco: "50% 38%",
        alt: "Una perra pequeña de morro blanco y orejas oscuras, sujeta con correas dentro de un habitáculo metálico.",
      },
      {
        archivo: "Модель собаки Лайки.jpg",
        autor: "Reproducción de Laika expuesta en un museo. Fotografía de Florist.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:%D0%9C%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C_%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B8_%D0%9B%D0%B0%D0%B9%D0%BA%D0%B8.jpg",
        foco: "50% 45%",
        alt: "Una figura de perro de tamaño natural dentro de un contenedor cilíndrico con ventanilla.",
      },
      {
        archivo: "USSR Sputnik I, 1957, 1st Man-made Satellite (Replica) (10437199454).jpg",
        autor: "Réplica del Sputnik 1, el satélite lanzado un mes antes. Fotografía de Gary Todd.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:USSR_Sputnik_I,_1957,_1st_Man-made_Satellite_(Replica)_(10437199454).jpg",
        foco: "50% 50%",
        alt: "Una esfera metálica pulida con cuatro antenas largas y finas saliendo hacia atrás.",
      },
      {
        archivo: "Sputnik1MoFS.JPG",
        autor: "Otra réplica del Sputnik 1, en el Museum of Flight de Seattle. Fotografía de Ciar.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sputnik1MoFS.JPG",
        foco: "50% 50%",
        alt: "La bola brillante del satélite colgada del techo, con sus antenas abiertas en abanico.",
      },
    ],
    entrada:
      "Moscú, otoño de 1957. La Unión Soviética acaba de meter en órbita el primer satélite de la historia y quiere rematar la jugada antes de que acabe el año, coincidiendo con el aniversario de la revolución. El plazo que da el gobierno para lanzar un ser vivo al espacio es de cuatro semanas justas. En un mes no da tiempo material a diseñar nada que sepa volver a la Tierra, ni a probarlo, así que los ingenieros hacen lo único que pueden hacer: diseñan solamente la ida.",
    paginas: [
      {
        rotulo: "La calle",
        texto:
          "A la candidata la recogieron en la calle. Los ingenieros buscaban perras callejeras y pequeñas, porque suponían que un animal acostumbrado al hambre y al frío aguantaría mejor el encierro que uno de casa. Se llamó Kudriavka, «Rizadita», y después Laika, que en ruso significa simplemente «ladradora». Pesaba seis kilos. Durante el entrenamiento la fueron metiendo en jaulas cada vez más pequeñas, hasta que aguantó veinte días en un espacio donde no podía darse la vuelta. Uno de los científicos se la llevó a su casa a jugar con sus hijos los días previos, porque, escribió, quería hacer algo bueno por ella.",
        destacado: { tipo: "frase", frase: "«Quería hacer algo bueno por ella», escribió uno de los científicos." },
      },
      {
        rotulo: "El calor",
        texto:
          "Despegó el 3 de noviembre. Durante décadas la versión oficial dijo que había vivido varios días y muerto sin dolor al acabarse el oxígeno. La verdad se contó en <strong>2002</strong>: una pieza no se separó como debía, el aislamiento térmico se soltó y la temperatura dentro de la cápsula subió sin control. Laika murió de calor y de estrés entre cinco y siete horas después del despegue, cuando la nave llevaba apenas cuatro vueltas a la Tierra. Los sensores registraron su pulso disparado durante el lanzamiento y luego una caída lenta.",
        destacado: { tipo: "cifra", cifra: "45", unidad: "años se tardó en contar la verdad" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La cápsula dio quinientas setenta vueltas a la Tierra con el cuerpo dentro y se desintegró al reentrar en abril de 1958. El médico que la preparó, ya muy mayor, declaró en 1998 que aquello no había servido para justificar la muerte de un animal y que se arrepentía. En 2008 Moscú le levantó un monumento pequeño a las afueras, en el centro militar donde la entrenaron: un cohete que se abre en la punta y del que asoma un perro. La verja está siempre llena de flores y de correas viejas.",
      },
    ],
  },

  {
    id: "disco-voyager",
    titulo: "Un disco ahí fuera",
    gancho: "Lleva música, un beso, una tormenta y las instrucciones para ponerlo. Nadie sabe si alguien lo escuchará.",
    categoria: "Espacio",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un disco dorado grabado con símbolos, girando sobre negro absoluto.",
    entrada:
      "En 1977 la NASA lanzó dos sondas gemelas para fotografiar los planetas exteriores. Iban a pasar de largo y perderse para siempre en el espacio, y a alguien se le ocurrió que, ya que se iban, podían llevar algo encima. Un equipo dirigido por el astrónomo Carl Sagan tuvo seis semanas para decidir qué cabía en un disco que quizá no escuche nadie nunca.",
    paginas: [
      {
        rotulo: "Qué metieron",
        texto:
          "El disco es de cobre bañado en oro y lleva ciento quince imágenes codificadas: un feto, una autopista, una mujer comiendo, la estructura del ADN. Lleva saludos hablados en cincuenta y cinco idiomas, del acadio, muerto hace cuatro mil años, a un «hola» en chino wu. Lleva sonidos de la Tierra —una tormenta, una ballena, un beso, el llanto de un bebé— y noventa minutos de música: Bach, un canto pigmeo, una gaita azerbaiyana y un blues de Chuck Berry. También lleva las ondas cerebrales de una mujer enamorada, grabadas durante una hora mientras pensaba en lo que quería.",
        destacado: { tipo: "cifra", cifra: "55", unidad: "idiomas dicen hola en el disco" },
      },
      {
        rotulo: "Cómo se lee",
        texto:
          "En la tapa hay un dibujo con instrucciones para cualquiera que lo encuentre y no tenga ni idea de qué es. Explica a qué velocidad hay que girarlo, usando como unidad de tiempo la vibración de un átomo de hidrógeno, que es la misma en todo el universo. Y hay un mapa: catorce líneas que salen de un punto e indican la posición del Sol respecto a catorce estrellas concretas, cada una con su ritmo de parpadeo apuntado al lado. Es una dirección postal escrita para alguien de quien no sabemos nada, ni siquiera si tiene ojos.",
        destacado: { tipo: "frase", frase: "Es una dirección postal escrita para alguien que quizá no tenga ojos." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las dos sondas siguen funcionando y son los objetos humanos más lejanos que existen: la señal de la primera tarda más de veintidós horas en llegarnos. Se les acabará la energía a mediados de esta década y entonces seguirán viajando calladas. La primera estrella a la que se acercarán está a cuarenta mil años de camino. El disco, protegido del vacío, puede durar mil millones de años sin borrarse. Es, con diferencia, lo más duradero que ha hecho nuestra especie, y va escrito en un idioma que no hemos comprobado que exista.",
      },
    ],
  },
];
