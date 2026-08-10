import type { Short } from "../shorts";

/* ==========================================================================
   Epidemias.

   Enfermedades que se mueven. El riesgo del tema es doble: el catálogo de
   síntomas, que da asco y no enseña nada, y la cifra de muertos repetida
   hasta perder el sentido.

   La regla del tema: se cuenta CÓMO SE AVERIGUÓ. Un médico que dibuja un
   mapa con rayitas y descubre de dónde sale el agua. Un rastreador que
   persigue al último enfermo del planeta por un desierto. La epidemia en sí
   es el decorado; lo que engancha es el trabajo detectivesco de alguien que
   no tenía ni microscopio.

   La cifra de muertos se dice una vez, sin adjetivos, y no se vuelve a ella.
   ========================================================================== */

export const EPIDEMIAS: Short[] = [
  {
    id: "bomba-broad-street",
    titulo: "Un mapa paró el cólera",
    gancho: "Nadie sabía qué era el cólera. Un médico dibujó dónde vivía cada muerto y quitó el asa de una bomba.",
    categoria: "Epidemias",
    color: "var(--slate)",
    encargo: "Una bomba de agua de hierro fundido en una calle empedrada, sin gente alrededor.",
    /* El mapa entero en la portada, el detalle del foco en la página del
       mapa, la calle de hoy donde estaba la bomba, y el bicho que Snow nunca
       llegó a ver. */
    fotos: [
      {
        archivo: "Snow-cholera-map-1.jpg",
        autor:
          "El mapa que dibujó John Snow en 1854: cada rayita negra es un muerto y los círculos marcan las bombas de agua del barrio.",
        licencia: "Dominio público",
        pdPorEdad: 1858,
        fuente: "https://commons.wikimedia.org/wiki/File:Snow-cholera-map-1.jpg",
        foco: "52% 48%",
        alt: "Un plano del Soho londinense trazado a mano, con montones de rayitas negras amontonadas alrededor de un punto.",
      },
      {
        archivo: "Map showing deaths from Cholera in Broad Street... Wellcome L0063431.jpg",
        autor:
          "Detalle del mismo mapa alrededor de la bomba de Broad Street, donde las rayitas se apelotonan. Colección Wellcome, Londres.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Map_showing_deaths_from_Cholera_in_Broad_Street..._Wellcome_L0063431.jpg",
        foco: "50% 45%",
        alt: "Detalle del mapa del cólera, con las marcas de las muertes concentradas en unas pocas manzanas.",
      },
      {
        archivo: "John Snow, Soho, W1 (3696013128).jpg",
        autor:
          "La esquina del Soho donde estaba la bomba de Broad Street. El pub de la planta baja lleva el nombre de Snow. Fotografía de Ewan Munro.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:John_Snow,_Soho,_W1_(3696013128).jpg",
        foco: "50% 55%",
        alt: "Un edificio de ladrillo en una esquina de Londres con un pub en los bajos y el rótulo John Snow.",
      },
      {
        archivo: "Vibrio cholerae growth on TCBS agar of Rice water stool culture of Cholera patient.jpg",
        autor:
          "Cultivo de la bacteria del cólera, la que Snow nunca llegó a ver: murió cinco años antes de que se identificara. Fotografía de Ajay Kumar Chaurasiya.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Vibrio_cholerae_growth_on_TCBS_agar_of_Rice_water_stool_culture_of_Cholera_patient.jpg",
        foco: "50% 50%",
        alt: "Una placa de laboratorio con el medio de cultivo verde y colonias amarillas de bacterias.",
      },
    ],
    entrada:
      "Londres, agosto de 1854. En un barrio del centro mueren quinientas personas en diez días por un brote de cólera, una enfermedad que en aquel momento nadie sabe cómo se contagia. La explicación oficial es que la causa está en el aire viciado que sale de la basura y las cloacas. Un médico del barrio, de cuarenta y un años, no se lo cree. Piensa que la enfermedad entra por la boca y no por la nariz, y que si tiene razón los muertos no estarán repartidos sino agrupados alrededor de algo que la gente bebe. Así que sale a comprobarlo a pie, preguntando en cada portal quién ha muerto y de dónde sacaba el agua. Lo que hizo con esas respuestas no fue un descubrimiento de laboratorio: fue un dibujo.",
    paginas: [
      {
        rotulo: "El mapa",
        texto:
          "Consiguió las actas de defunción y se pasó semanas llamando a las puertas de cada casa donde había muerto alguien, preguntando de dónde sacaban el agua. Después dibujó un plano del barrio y marcó cada fallecimiento con una rayita negra sobre la calle correspondiente, apiladas unas encima de otras como un gráfico de barras tumbado. Al mirarlo, el dibujo se explicaba solo: las rayitas se amontonaban alrededor de una bomba de agua concreta y se iban aclarando a medida que uno se alejaba, sin ninguna relación con la basura ni con el olor.",
        destacado: { tipo: "cifra", cifra: "500", unidad: "muertos en diez días en un barrio" },
      },
      {
        rotulo: "Las excepciones",
        texto:
          "Lo que remató el argumento fueron los casos raros, que persiguió uno por uno. En una fábrica de cerveza pegada a la bomba no había muerto nadie: los obreros tenían derecho a una ración diaria de cerveza y bebían de un pozo propio. Una viuda que vivía lejos había muerto, y su sobrina también; resultó que le gustaba tanto el sabor de aquella agua que mandaba a un chico a llenarle una botella cada día. Con eso delante, convenció a la junta de la parroquia de que quitara el asa de la bomba para que no se pudiera usar.",
        destacado: { tipo: "frase", frase: "En la fábrica de cerveza no murió nadie: bebían de otro pozo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El brote ya estaba remitiendo cuando quitaron el asa, así que su efecto real fue menor de lo que cuenta la leyenda; lo importante fue el método. Se descubrió después que un pozo negro reventado a menos de un metro de la bomba estaba filtrando los pañales de un bebé enfermo. Aun así, las autoridades rechazaron sus conclusiones y volvieron a poner el asa. Aquel plano de rayitas se estudia hoy como el nacimiento de la epidemiología moderna, y en esa esquina hay una réplica de la bomba, sin asa.",
      },
    ],
  },

  {
    id: "ultima-viruela",
    titulo: "La única borrada del mundo",
    gancho: "Mató a más gente que cualquier otra. La campaña final consistió en perseguir a los enfermos uno a uno.",
    categoria: "Epidemias",
    color: "var(--forest)",
    encargo: "Una nevera portátil de campaña con viales, sobre tierra seca y polvorienta.",
    fotos: [
      {
        archivo: "Smallpox vaccine.jpg",
        autor: "Vial de vacuna liofilizada contra la viruela y la aguja bifurcada con la que se administraba. Fotografía de James Gathany para los CDC, 2002.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Smallpox_vaccine.jpg",
        foco: "50% 50%",
        alt: "Un frasco pequeño de vacuna junto a una aguja fina rematada en dos puntas, sobre un fondo azul.",
      },
      {
        archivo: "US Navy 030305-N-3235P-513 A Hospital Corpsman dips a bifurcated vaccinating needle into an open vial of Small Pox Vaccine.jpg",
        autor: "Un sanitario moja la aguja bifurcada en el vial: entre las dos puntas queda retenida una gota exacta. Fotografía de la Armada de Estados Unidos, 2003.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:US_Navy_030305-N-3235P-513_A_Hospital_Corpsman_dips_a_bifurcated_vaccinating_needle_into_an_open_vial_of_Small_Pox_Vaccine.jpg",
        foco: "50% 50%",
        alt: "Unas manos enguantadas introduciendo una aguja de dos puntas en un frasco abierto de vacuna.",
      },
      {
        archivo: "Smallpox vaccine injection.jpg",
        autor: "Demostración de la técnica de los quince pinchazos con aguja bifurcada. Fotografía de James Gathany para los CDC, 2002.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Smallpox_vaccine_injection.jpg",
        foco: "50% 50%",
        alt: "Una mano sujetando la aguja bifurcada contra la piel de un brazo para clavarla varias veces seguidas.",
      },
      {
        archivo: "Directors of Global Smallpox Eradication Program.jpg",
        autor: "Tres directores sucesivos del programa mundial de erradicación leyendo la noticia de que la viruela había sido eliminada, 1980. Fotografía de los CDC.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Directors_of_Global_Smallpox_Eradication_Program.jpg",
        foco: "50% 45%",
        alt: "Tres hombres de traje inclinados sobre un papel, leyendo juntos la misma hoja.",
      },
    ],
    entrada:
      "Somalia, octubre de 1977. Un cocinero de hospital de veintitrés años acompaña en coche a dos enfermos hasta un centro de aislamiento y se contagia por el camino. Su caso será el último de viruela adquirida de forma natural en la historia del planeta. Detrás quedaba una enfermedad que se calcula que mató a trescientos millones de personas solo en el siglo XX, y delante quedaba lo más difícil: demostrar que no quedaba ninguna más. Para eso hubo que recorrer aldea por aldea preguntando a la gente si había visto a alguien con fiebre y granos.",
    paginas: [
      {
        rotulo: "El cerco",
        texto:
          "La campaña mundial arrancó en 1967 con una idea que parecía insuficiente: en vez de intentar vacunar a toda la población, cosa imposible en países sin carreteras ni registros, se trataba de encontrar cada brote y vacunar solo el anillo de gente alrededor, hasta ahogar la cadena de contagios. Se ofrecían recompensas por avisar de un enfermo, se repartían tarjetas con fotos de la erupción para que cualquiera pudiera reconocerla, y equipos con neveras portátiles a la espalda recorrían aldeas y campamentos preguntando casa por casa si alguien había tenido fiebre y granos en las últimas semanas.",
        destacado: { tipo: "frase", frase: "No se vacunó a todo el mundo: se vacunó el anillo de cada enfermo." },
      },
      {
        rotulo: "Los últimos",
        texto:
          "El instrumento clave fue una aguja bifurcada, un alambre con dos puntas que retiene entre ellas una gota exacta de vacuna y se clava quince veces seguidas en la piel del brazo; costaba céntimos, no requería formación y permitía usar una cuarta parte del producto. Con eso se rastreó África y Asia durante diez años. El cocinero somalí se recuperó en unas semanas y murió en 2013 de otra cosa. Después de él solo hubo un caso más, en 1978, por un escape en un laboratorio de Inglaterra: murió una fotógrafa médica que trabajaba en el piso de arriba.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "años duró el rastreo final" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La erradicación se declaró oficialmente en mayo de 1980, y sigue siendo la única de una enfermedad humana. El virus no desapareció del todo: quedan muestras congeladas en dos laboratorios oficiales, uno en Estados Unidos y otro en Rusia, y desde hace cuarenta años se discute si destruirlas o conservarlas por si hiciera falta estudiarlas. La discusión se aplaza en cada reunión internacional. Mientras tanto, aquella campaña se ha convertido en el manual de cómo se acorrala una enfermedad sin necesidad de llegar a todo el mundo, y el mismo método del anillo se ha usado después contra el ébola. La aguja de dos puntas se sigue fabricando igual que en 1965.",
      },
    ],
  },

  {
    id: "peste-negra",
    titulo: "Vació un tercio de Europa",
    gancho: "Llegó en barcos con las tripulaciones ya muertas. En cuatro años cambió los sueldos de un continente.",
    categoria: "Epidemias",
    color: "var(--clay)",
    encargo: "Un puerto medieval con barcos amarrados y las calles vacías bajo un cielo plomizo.",
    entrada:
      "Sicilia, octubre de 1347. Doce galeras procedentes del mar Negro atracan en el puerto de Mesina con la mayoría de la tripulación muerta a bordo y el resto agonizando, cubiertos de bultos negros en el cuello y las ingles. Las autoridades mandan que se marchen, pero ya es tarde. En cuatro años la enfermedad recorre Europa entera de sur a norte.",
    paginas: [
      {
        rotulo: "El bicho",
        texto:
          "La causa era una bacteria que viven en las pulgas de las ratas y que se transmite al picar, aunque cuando llega a los pulmones pasa de persona a persona al toser, y entonces mata en dos o tres días. Nada de eso se supo hasta 1894. En aquel momento se manejaban tres explicaciones: un castigo divino, una conjunción de planetas y el aire corrompido, y de ahí salieron las máscaras de pico rellenas de hierbas aromáticas, que además protegían la cara por casualidad. La cuarentena nace ahí: cuarenta días de aislamiento obligatorio para los barcos que llegaban.",
        destacado: { tipo: "cifra", cifra: "40", unidad: "días de aislamiento: de ahí «cuarentena»" },
      },
      {
        rotulo: "Después del vacío",
        texto:
          "Murió entre un tercio y la mitad de la población europea en cuatro años, unos veinticinco millones de personas, y eso descolocó por completo la economía. De pronto sobraba tierra y faltaba gente para trabajarla, así que los jornaleros que quedaron empezaron a exigir el doble y a marcharse a otro señorío si no se lo daban. Varios reinos aprobaron leyes que prohibían subir los salarios por encima de los de antes de la peste y castigaban con multas o con la marca de un hierro al jornalero que cambiara de amo. Ninguna funcionó: no hay manera de obligar a trabajar barato a alguien que tiene diez ofertas y puede irse andando.",
        destacado: { tipo: "frase", frase: "Sobraba tierra y faltaban brazos. Los sueldos se dispararon." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel desequilibrio erosionó la servidumbre en buena parte de Europa occidental y está en el origen de una clase de campesinos con dinero y de la primera oleada de máquinas para ahorrar mano de obra. La bacteria no se ha ido: sigue existiendo en roedores de varios continentes y cada año se declaran algunos cientos de casos, que se curan con antibióticos si se cogen a tiempo. Lo que se acabó del todo fue el mundo que la enfermedad encontró al bajar de aquellas doce galeras: un continente de siervos atados a la tierra de un señor, que en dos generaciones dejó de poder sostenerse por pura falta de gente.",
      },
    ],
  },
];
