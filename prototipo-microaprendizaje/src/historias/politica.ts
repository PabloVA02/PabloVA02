import type { Short } from "../shorts";

/* ==========================================================================
   Política.

   El tema donde más fácil es acabar dando la turra o tomando partido. Ni una
   cosa ni la otra: aquí no se opina sobre quién tenía razón, se cuenta lo que
   pasó y quién apretó el botón.

   La regla del tema: siempre hay una PERSONA CONCRETA en un momento concreto.
   Un portavoz que no se ha leído el papel que va a leer en voz alta. Un
   vigilante nocturno que ve cinta adhesiva en un pestillo. Una diputada sola
   defendiendo algo contra su propio partido. Los sistemas no hacen nada; la
   gente sí, y por eso se puede contar como una historia.

   Cuando un asunto sigue vivo en la discusión pública, se dice que sigue
   vivo, y punto. Ni se zanja ni se insinúa.
   ========================================================================== */

export const POLITICA: Short[] = [
  {
    id: "muro-berlin",
    titulo: "El Muro cayó por leer mal",
    gancho: "Un portavoz leyó un papel que no había leído antes y le preguntaron desde cuándo valía.",
    categoria: "Política",
    color: "var(--slate)",
    encargo: "Un muro de hormigón pintado con gente encima al anochecer, focos de fondo.",
    fotos: [
      {
        archivo: "BrandenburgerTorDezember1989.jpg",
        autor:
          "La Puerta de Brandeburgo en diciembre de 1989, con gente encaramada al muro por los dos lados. Fotografía de F. Lee Corkran.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:BrandenburgerTorDezember1989.jpg",
        foco: "50% 50%",
        alt: "Una multitud a los pies del muro pintado de grafitis, con la Puerta de Brandeburgo detrás.",
      },
      {
        archivo: "Lascar Short section of the Berlin Wall - Potsdamer Platz (4472165454).jpg",
        autor: "Un trozo del muro conservado en la Potsdamer Platz de Berlín. Fotografía de Jorge Láscar.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lascar_Short_section_of_the_Berlin_Wall_-_Potsdamer_Platz_(4472165454).jpg",
        foco: "50% 50%",
        alt: "Varios paneles de hormigón del muro, cubiertos de pegatinas y pintadas, en medio de una plaza.",
      },
      {
        archivo: "Brandenburg Gate 2017 002.jpg",
        autor: "La Puerta de Brandeburgo hoy, sin muro delante. Fotografía de Mike Peel.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Brandenburg_Gate_2017_002.jpg",
        foco: "50% 45%",
        alt: "La Puerta de Brandeburgo iluminada, con la cuadriga de bronce encima y gente paseando por delante.",
      },
      {
        archivo: "Lascar Brandenburg Gate (4471389757).jpg",
        autor: "La cuadriga de la Puerta de Brandeburgo de cerca. Fotografía de Jorge Láscar.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lascar_Brandenburg_Gate_(4471389757).jpg",
        foco: "50% 45%",
        alt: "El carro tirado por cuatro caballos que corona la Puerta de Brandeburgo, recortado contra el cielo.",
      },
    ],
    entrada:
      "Berlín, 9 de noviembre de 1989. Alemania lleva veintiocho años partida en dos por un muro de hormigón que separa la mitad comunista de la occidental dentro de la misma ciudad. Aquella tarde, un portavoz del gobierno del Este sale a dar una rueda de prensa rutinaria con unos folios en la mano que no ha terminado de leer. En ellos hay un cambio en las normas de viaje que el gobierno pensaba aplicar poco a poco y con orden. Lo que pasa en los treinta segundos siguientes no lo había planeado nadie, y menos él. Un periodista le pregunta algo que no viene en los folios, él busca la respuesta entre los papeles, no la encuentra y contesta lo primero que le parece razonable.",
    paginas: [
      {
        rotulo: "El papel",
        texto:
          "El gobierno llevaba semanas asfixiado por manifestaciones y había preparado una relajación de los permisos de viaje, pensada para entrar en vigor al día siguiente y con trámites de por medio en cada comisaría. El portavoz recibió la nota poco antes de entrar, no había asistido a la reunión donde se explicó y la leyó en voz alta sin ningún contexto. Un periodista italiano levantó la mano y preguntó desde cuándo valía aquello. Él rebuscó entre los folios, no encontró ninguna fecha y contestó lo que le pareció más lógico: que, según entendía, de inmediato.",
        destacado: { tipo: "frase", frase: "«¿Desde cuándo?» «Según entiendo… de inmediato.»" },
      },
      {
        rotulo: "La avalancha",
        texto:
          "La televisión del Oeste abrió el informativo de la noche diciendo que las fronteras estaban abiertas, y aquello lo vieron también los del Este, porque la señal cruzaba el muro sin pedir permiso a nadie. La gente empezó a acercarse a los pasos de control, primero unos pocos y en media hora por miles. Los guardias no tenían ninguna orden nueva, llamaron a sus mandos y no consiguieron una respuesta clara. En uno de los pasos se juntaron veinte mil personas empujando contra una barrera pensada para detener coches, y el oficial al mando, sin instrucciones y sin ganas de disparar, mandó levantarla.",
        destacado: { tipo: "cifra", cifra: "20.000", unidad: "personas ante una sola barrera" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella noche cruzaron decenas de miles de personas y no murió nadie, algo poco probable en una frontera donde habían matado al menos a un centenar en veintiocho años. La gente empezó a picar el hormigón con martillos y cinceles, llevándose trozos a casa, y en unas semanas el muro estaba agujereado de punta a punta. Alemania se reunificó once meses más tarde. El portavoz que dio la noticia sin querer vivió el resto de su vida con la sensación incómoda de haber cambiado la historia por no haberse leído un folio a tiempo.",
      },
    ],
  },

  {
    id: "watergate",
    titulo: "Una cinta adhesiva",
    gancho: "Un vigilante de veinticuatro años vio un pestillo tapado, lo destapó, y a la vuelta estaba tapado otra vez.",
    categoria: "Política",
    color: "var(--clay)",
    encargo: "Un pasillo de oficinas vacío de noche, con una puerta entreabierta al fondo.",
    fotos: [
      {
        archivo: "2013 Watergate complex 01.JPG",
        autor: "El complejo Watergate, junto al Potomac en Washington, 2013. Fotografía de Farragutful.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2013_Watergate_complex_01.JPG",
        foco: "50% 40%",
        alt: "Los edificios curvos y escalonados del complejo Watergate vistos desde la avenida, entre árboles.",
      },
      {
        archivo: "2013 Watergate complex 02.JPG",
        autor: "Otra vista del mismo complejo, con las oficinas donde entraron aquella noche. Fotografía de Farragutful, 2013.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2013_Watergate_complex_02.JPG",
        foco: "50% 45%",
        alt: "Fachada de balcones ondulados de un edificio de oficinas y apartamentos de los años sesenta.",
      },
      {
        archivo: "Studer B67 reel-to-reel audio tape recorder, ca. 1978 (cropped and edited, larger 10 inch tapes).jpg",
        autor: "Magnetófono de bobina abierta de finales de los setenta. Fotografía de Robert Taylor.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Studer_B67_reel-to-reel_audio_tape_recorder,_ca._1978_(cropped_and_edited,_larger_10_inch_tapes).jpg",
        foco: "50% 50%",
        alt: "Un magnetófono de dos bobinas grandes con la cinta pasando por los cabezales.",
      },
      {
        archivo: "White House 05.jpg",
        autor: "La Casa Blanca vista desde el norte, 2007. Fotografía de Ad Meskens.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:White_House_05.jpg",
        foco: "50% 50%",
        alt: "La fachada norte de la Casa Blanca con su pórtico de columnas, al atardecer.",
      },
    ],
    entrada:
      "Washington, madrugada del 17 de junio de 1972. Un vigilante de veinticuatro años hace su ronda por un complejo de oficinas junto al río y ve algo raro en un sótano: alguien ha pegado cinta adhesiva sobre el pestillo de una puerta para que no llegue a cerrar del todo. Piensa que la habrá dejado un operario, la quita y sigue su ronda tranquilamente. Cuando vuelve a pasar por allí un rato después, la cinta está otra vez puesta. Eso significa que quien la puso sigue dentro del edificio, y es lo único que hace falta para que empiece todo.",
    paginas: [
      {
        rotulo: "La llamada",
        texto:
          "Llamó a la policía. Dentro había cinco hombres con guantes de goma, cámaras fotográficas y equipos para pinchar teléfonos, colándose en la sede del partido rival al que gobernaba el país. Parecía un robo de poca monta y así lo trató la prensa durante meses, con notas breves en páginas interiores. Pero uno de los detenidos llevaba en la agenda el teléfono de un despacho de la Casa Blanca, y dos periodistas jóvenes de un periódico de la ciudad tiraron de ese hilo durante dos años, sostenidos por una fuente anónima del propio gobierno que se citaba con ellos en un aparcamiento.",
        destacado: { tipo: "frase", frase: "Uno de los ladrones llevaba en la agenda un teléfono de la Casa Blanca." },
      },
      {
        rotulo: "Las cintas",
        texto:
          "Lo que hundió al presidente no fue el robo, sino taparlo. Se descubrió de casualidad, durante una comparecencia, que existía un sistema que grababa automáticamente todas las conversaciones del despacho oval, instalado por él mismo para escribir sus memorias. El Tribunal Supremo le obligó a entregar las cintas. En una de ellas, grabada seis días después del robo, se le oía ordenar que se frenara la investigación. Faltaban además dieciocho minutos y medio en otra grabación, borrados, y su secretaria explicó ante las cámaras que había sido un descuido suyo al pisar un pedal mientras cogía el teléfono.",
        destacado: { tipo: "cifra", cifra: "18,5", unidad: "minutos borrados de una cinta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Dimitió el 9 de agosto de 1974, el único presidente estadounidense que lo ha hecho, un mes antes de que el Congreso votara destituirlo. Su sucesor lo indultó al poco tiempo y nunca llegó a sentarse ante un tribunal. La fuente anónima que guio a los periodistas guardó el secreto treinta y un años: era el número dos del servicio federal de investigación, y lo confesó en 2005, con noventa y un años y ya enfermo. Desde entonces, a cada escándalo político del mundo se le pega la terminación del nombre de aquel edificio.",
      },
    ],
  },

  {
    id: "voto-mujeres-espana",
    titulo: "Ganó y perdió",
    gancho: "Las dos únicas mujeres del Congreso discutieron entre ellas. Ganó la que lo defendía, y perdió el escaño.",
    categoria: "Política",
    color: "var(--plum)",
    encargo: "Un hemiciclo antiguo casi vacío, con una figura de pie en la tribuna.",
    entrada:
      "Madrid, 1 de octubre de 1931. España acaba de proclamar la República y está escribiendo una constitución nueva. En el Congreso hay cuatrocientos setenta diputados y solo dos son mujeres, elegidas gracias a un vacío legal: podían ser votadas, pero no votar. Aquella tarde se debate si las españolas tendrán derecho al voto, y las dos diputadas opinan lo contrario.",
    paginas: [
      {
        rotulo: "El debate",
        texto:
          "La que estaba a favor era abogada y se había hecho a sí misma: entró a trabajar de costurera a los trece años y terminó la carrera de Derecho a los treinta y seis. La que estaba en contra era médica, y su argumento no era que las mujeres valieran menos, sino que en aquel momento estaban demasiado influidas por la Iglesia y votarían contra la República; pedía esperar unos años a que hubiera escuelas para todas. Se enfrentaron en el mismo salón, una detrás de otra, delante de un hemiciclo que en su inmensa mayoría prefería aplazarlo y no decirlo en voz alta.",
        destacado: { tipo: "frase", frase: "Las dos únicas mujeres del Congreso defendieron cosas contrarias." },
      },
      {
        rotulo: "La votación",
        texto:
          "El discurso de la primera fue largo y se apoyó en un argumento difícil de rebatir: que un derecho no se concede cuando conviene, porque entonces deja de ser un derecho y pasa a ser un favor, y que resultaba absurdo que ella pudiera sentarse allí mientras las mujeres que la habían llevado no podían votarla. Ganó por ciento sesenta y un votos contra ciento veintiuno, con un número llamativo de ausencias que nadie justificó. Su propio partido votó en contra. En las elecciones siguientes perdió el escaño y no volvió a ser diputada nunca más.",
        destacado: { tipo: "cifra", cifra: "161", unidad: "votos a favor, 121 en contra" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las españolas votaron por primera vez en noviembre de 1933, dos años después. Ganó la derecha, y durante décadas se repitió que la culpa había sido de ellas, aunque los estudios posteriores no encuentran manera de sostenerlo: el vuelco se explica sobre todo por la división de la izquierda y por la abstención. Ella murió en el exilio, en Suiza, en 1972, sin haber podido volver a España y sin que nadie le devolviera el cargo. Hoy hay una calle con su nombre en casi todas las ciudades españolas, y su discurso de aquella tarde se sigue leyendo en voz alta cada aniversario.",
      },
    ],
  },
];
