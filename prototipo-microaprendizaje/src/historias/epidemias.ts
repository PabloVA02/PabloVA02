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
    titulo: "Un mapa con rayitas paró una epidemia",
    gancho: "Nadie sabía qué era el cólera. Un médico dibujó dónde vivía cada muerto y quitó el asa de una bomba.",
    categoria: "Epidemias",
    color: "var(--slate)",
    encargo: "Una bomba de agua de hierro fundido en una calle empedrada, sin gente alrededor.",
    entrada:
      "Londres, agosto de 1854. En un barrio del centro mueren quinientas personas en diez días por un brote de cólera, una enfermedad que en aquel momento nadie sabe cómo se contagia. La explicación oficial es que la causa está en el aire viciado que sale de la basura y las cloacas. Un médico del barrio, de cuarenta y un años, no se lo cree y decide comprobarlo a pie.",
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
    titulo: "La viruela es la única enfermedad erradicada",
    gancho: "Mató a más gente que cualquier otra. La campaña final consistió en perseguir a los enfermos uno a uno.",
    categoria: "Epidemias",
    color: "var(--forest)",
    encargo: "Una nevera portátil de campaña con viales, sobre tierra seca y polvorienta.",
    entrada:
      "Somalia, octubre de 1977. Un cocinero de hospital de veintitrés años acompaña en coche a dos enfermos hasta un centro de aislamiento y se contagia. Su caso será el último de viruela adquirida de forma natural en la historia del planeta, después de una enfermedad que se calcula que mató a trescientos millones de personas solo en el siglo XX.",
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
    titulo: "La peste negra vació un tercio de Europa",
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
