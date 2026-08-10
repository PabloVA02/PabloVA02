import type { Short } from "../shorts";

/* ==========================================================================
   La almohada.

   Un objeto que casi nadie elige con criterio y del que casi nadie sabe
   para qué sirve exactamente. El tema se estropea si se convierte en
   consejos de descanso.

   La regla del tema: la almohada NO ESTÁ PARA LA COMODIDAD, sino para
   rellenar el hueco entre la cabeza y el apoyo, y eso se explica antes de
   nada. Los tres shorts aplican esa idea a la historia, a la higiene y al
   cojín de viaje.
   ========================================================================== */

export const ALMOHADA: Short[] = [
  {
    id: "la-almohada-de-madera",
    titulo: "Almohadas de madera",
    gancho: "De madera, de piedra o de cerámica. No eran una tortura: cumplían un trabajo que la blanda no hace.",
    categoria: "Objetos",
    color: "var(--ochre)",
    encargo: "Reposacabezas egipcio de madera con la curva para el cuello, sobre fondo neutro.",
    /* La de madera, la blanda de ahora, la de porcelana que protegía el peinado
       y la cama con seis almohadas que no hacen falta. */
    fotos: [
      {
        archivo: "Headrest MET DP300243.jpg",
        autor:
          "Reposacabezas egipcio de madera, con su pie y la media luna donde se apoyaba la nuca. Museo Metropolitano de Arte, Nueva York.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Headrest_MET_DP300243.jpg",
        foco: "50% 38%",
        alt: "Una pieza de madera clara con forma de seta: un pie estrecho y arriba una media luna cóncava donde se apoyaba la nuca.",
      },
      {
        archivo: "Hotel Pillow and Bedding (39935420303).jpg",
        autor:
          "Una almohada blanda de hoy. Lo que decide si sirve no es lo mullida que sea, sino si rellena el hueco que queda entre la oreja y el hombro. Fotografía de Tony Webster, 2019.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Hotel_Pillow_and_Bedding_(39935420303).jpg",
        foco: "50% 45%",
        alt: "Primer plano de dos almohadas blancas mullidas sobre una cama hecha, con la sábana doblada por delante.",
      },
      {
        archivo: "Jin Porcelain Pillow 34.jpg",
        autor:
          "Almohada de porcelana china de la dinastía Jin, entre los siglos XII y XIII. Dura, alta y fresca: levantaba la cabeza del suelo y no deshacía el peinado. Fotografía de Gary Todd.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Jin_Porcelain_Pillow_34.jpg",
        foco: "50% 50%",
        alt: "Un bloque de cerámica esmaltada en color crema, con forma de cojín octogonal y un dibujo pintado en la cara de arriba.",
      },
      {
        archivo: "44 Made bed with richly decorated pillows and ornate bedspread.jpg",
        autor:
          "Una cama hecha con seis almohadas, casi todas decorativas. Fotografía de Marek Ślusarczyk, 2010.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:44_Made_bed_with_richly_decorated_pillows_and_ornate_bedspread.jpg",
        foco: "50% 55%",
        alt: "Una cama de hotel hecha, con varias almohadas y cojines apilados contra el cabecero y una colcha estampada.",
      },
    ],
    entrada:
      "Egipto y China, desde hace unos cinco mil años. Las almohadas más antiguas que se conservan son bloques de madera, de piedra o de cerámica esmaltada, con una curva para el cuello. Parecen instrumentos de castigo y no lo eran. Servían para levantar la cabeza del suelo, para que no se acercaran los bichos y, sobre todo, para no estropear el peinado. Un peinado de aquellos costaba horas de trabajo y se llevaba puesto días enteros, así que dormir sin aplastarlo compensaba la incomodidad. Y esa almohada dura hacía además una cosa que la blanda no hace, que es la razón por la que en algunos países se sigue usando.",
    paginas: [
      {
        rotulo: "Sostener el cuello",
        texto:
          "La función real de una almohada no es la comodidad, sino mantener la columna alineada. Tumbado de lado, entre la cabeza y el colchón queda un hueco del ancho del hombro. Sin nada que rellene ese hueco, el cuello se dobla de lado durante horas y por la mañana duele. Una almohada dura y alta hace ese trabajo igual de bien que una blanda y gruesa. Lo que decide no es la firmeza, sino la altura, y la altura correcta depende del hombro de cada uno. Quien duerme boca arriba necesita muchísima menos, y quien duerme boca abajo casi ninguna.",
        destacado: { tipo: "frase", frase: "Lo que decide no es la firmeza: es la altura." },
      },
      {
        rotulo: "Bichos y peinados",
        texto:
          "Las otras dos razones de aquellas almohadas duras eran muy prácticas y hoy han desaparecido. Dormir en el suelo o en un jergón bajo significaba compartir la cama con insectos y con roedores. Levantar la cabeza unos centímetros era una defensa modesta y bastante mejor que nada. La segunda razón era el pelo, porque en muchas culturas el peinado se montaba con cera y duraba semanas. Una almohada con hueco permitía apoyar el cuello sin tocar el peinado ni deshacerlo. Ese tipo de almohada se sigue usando hoy en varios países del este de Asia.",
        destacado: { tipo: "cifra", cifra: "5000", unidad: "años tienen las almohadas más antiguas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un objeto que casi nadie elige con criterio y que se compra por tacto en la propia tienda. Quedó también una recomendación médica muy sencilla que se repite en cualquier consulta de traumatología. La almohada tiene que rellenar el hueco entre la oreja y el hombro, ni más ni menos. Una demasiado alta dobla el cuello hacia un lado y una demasiado baja lo dobla hacia el otro. Y quedó el gesto de ahuecarla cada noche, heredado de cuando el relleno se apelmazaba de verdad todos los días. Con la espuma de hoy ya no hace falta.",
      },
    ],
  },
  {
    id: "lo-que-vive-en-la-almohada",
    titulo: "Tu almohada pesa el doble",
    gancho: "Lo que engorda no es el relleno. Son las células de piel, el sudor y los ácaros que viven de todo eso.",
    categoria: "Cuerpo",
    color: "var(--slate)",
    curioso: true,
    encargo: "Ácaro del polvo visto al microscopio electrónico sobre una fibra de tejido.",
    fotos: [
      {
        archivo: "House dust mite (Dermatophagoides pteronyssinus).jpg",
        autor: "Ácaro del polvo doméstico (Dermatophagoides pteronyssinus) sobre fibras de tejido, al microscopio. Fotografía de Gilles San Martin, 2010.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:House_dust_mite_(Dermatophagoides_pteronyssinus).jpg",
        foco: "50% 50%",
        alt: "Un ácaro translúcido y nacarado, de patas cortas y pelos largos, caminando sobre unas fibras oscuras de tela.",
      },
      {
        archivo: "House dust mites (5247996458).jpg",
        autor: "Varios ácaros del polvo entre fibras y restos de piel. Fotografía de Gilles San Martin, 2010. Miden tres décimas de milímetro.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:House_dust_mites_(5247996458).jpg",
        foco: "50% 50%",
        alt: "Un grupo de ácaros blanquecinos repartidos entre fibras enredadas y partículas de polvo.",
      },
      {
        archivo: "Porto Clothes Line.JPG",
        autor: "Ropa tendida en una fachada de Oporto, 2025. Fotografía de TeWeBs.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Porto_Clothes_Line.JPG",
        foco: "50% 50%",
        alt: "Sábanas y ropa colgadas de un tendedero al aire libre, movidas por el viento.",
      },
      {
        archivo: "DZ6 0461 Cozy neatly made hotel room with a king bed soft pillows bedside lamps and calming neutral decor.jpg",
        autor: "Cama hecha con almohadas y ropa blanca en una habitación de hotel, 2025. Fotografía de PattayaPatrol.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:DZ6_0461_Cozy_neatly_made_hotel_room_with_a_king_bed_soft_pillows_bedside_lamps_and_calming_neutral_decor.jpg",
        foco: "50% 50%",
        alt: "Una cama bien hecha con sábanas blancas y varias almohadas mullidas, con dos lámparas encendidas a los lados.",
      },
    ],
    entrada:
      "Cualquier dormitorio del mundo, con los estudios sobre ácaros publicados desde 1964. Una persona suelta cada noche una cantidad notable de piel muerta y cerca de medio litro de sudor, y una buena parte de todo eso acaba dentro de la almohada, que además pasa la noche caliente y húmeda por el aliento y por la cabeza apoyada encima. Ese ambiente templado, oscuro y con comida de sobra es exactamente el que necesitan unos animales microscópicos que se llaman ácaros del polvo y que llevan viviendo con nosotros desde que dormimos bajo techo.",
    paginas: [
      {
        rotulo: "El ácaro",
        texto:
          "Un ácaro del polvo es un bicho de un cuarto de milímetro emparentado con las arañas. No pica, no muerde y no transmite ninguna enfermedad, así que no es peligroso por sí mismo. Come piel muerta, que es justo lo que sobra en una cama, y no necesita beber agua. La saca del aire, y por eso solo puede vivir donde la humedad pasa de la mitad. El problema no es el animal, sino sus excrementos, que contienen proteínas muy alergénicas. Esas proteínas se quedan flotando al mover la almohada y se respiran durante toda la noche.",
        destacado: { tipo: "frase", frase: "El problema no es el bicho: son sus excrementos." },
      },
      {
        rotulo: "Qué funciona",
        texto:
          "Contra los ácaros hay muchas recomendaciones y solo unas pocas tienen respaldo en los estudios. La que mejor funciona es lavar la ropa de cama a sesenta grados, porque a esa temperatura mueren. A treinta grados no mueren, aunque el lavado sí arrastra buena parte de los excrementos. La segunda es bajar la humedad de la habitación ventilando, porque por debajo de cierto punto no sobreviven. Por eso hay muchísimos menos ácaros en una casa de montaña seca que en una costera. La tercera es la funda antiácaros, una tela de trama tan cerrada que no deja pasar nada.",
        destacado: { tipo: "cifra", cifra: "60", unidad: "grados de lavado hacen falta para matarlos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una recomendación que casi nadie sigue, porque una almohada debería cambiarse cada dos o tres años como mucho. La prueba casera es doblarla por la mitad, y si no vuelve sola es que ya no sostiene. Quedó también un dato que circula muy exagerado, porque se leen cifras de millones de ácaros por almohada. Las mediciones reales dan bastante menos, y aun así suficiente para molestar de verdad a quien tenga alergia. Y quedó una idea tranquilizadora, porque quien no es alérgico convive con ellos toda la vida sin enterarse.",
      },
    ],
  },
  {
    id: "el-cojin-de-viaje",
    titulo: "El cojín de viaje",
    gancho: "La abertura debería ir delante, sujetando la barbilla. Puesto como todo el mundo lo pone, no impide lo que falla.",
    categoria: "Objetos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Cojín de viaje en forma de herradura colocado con la abertura hacia atrás.",
    entrada:
      "Aviones y trenes de todo el mundo, con el cojín en forma de herradura vendido en masa desde 1929. Dormir sentado tiene un problema muy concreto que casi nadie identifica bien. Cuando el cuello se relaja, la cabeza cae hacia delante, porque pesa unos cinco kilos y no hay nada que la sostenga. El cojín se coloca casi siempre de manera que no impide justamente eso.",
    paginas: [
      {
        rotulo: "La cabeza cae",
        texto:
          "Una cabeza adulta pesa entre cuatro y cinco kilos, que es como llevar una bola de bolos encima. De pie o sentado con la espalda recta, ese peso cae sobre la columna y no cuesta nada. En cuanto la cabeza se inclina hacia delante, los músculos de la nuca tienen que tirar de ella. Al dormirse, esos músculos se sueltan, la cabeza cae de golpe y uno se despierta con un tirón. El respaldo del asiento ya impide que la cabeza caiga hacia atrás, porque está ahí detrás. El único movimiento que hay que bloquear es el de delante, y ahí no hay nada.",
        destacado: { tipo: "frase", frase: "El respaldo ya sujeta por detrás; lo que falta es delante." },
      },
      {
        rotulo: "Girar el cojín",
        texto:
          "Puesto con la abertura hacia delante, el cojín solo rellena el hueco entre la nuca y el respaldo. Ese hueco ya estaba resuelto, así que el cojín está trabajando donde no hacía falta. Girándolo, la parte gruesa queda delante y sostiene la barbilla y la mandíbula por debajo. Con eso la cabeza no puede caer hacia delante y el cuello se queda casi recto. La abertura queda detrás, donde el respaldo hace su trabajo, y sobra sitio para la coleta. Los fisioterapeutas lo repiten desde hace años y el dibujo de la caja sigue enseñándolo al revés.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "kilos pesa una cabeza adulta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un objeto que se vende por millones en cualquier aeropuerto del mundo y que casi nadie usa bien. Quedaron también unos cuantos diseños nuevos que atacan el problema por el sitio correcto de una vez. Hay cojines con una barbilla de apoyo, collarines blandos y modelos que se anclan al reposacabezas. Y quedó un ejemplo bonito de algo que pasa mucho con los objetos cotidianos de toda la vida. La forma sugiere una manera de usarlo, todo el mundo la copia de todo el mundo, y nadie comprueba si funciona.",
      },
    ],
  },
];
