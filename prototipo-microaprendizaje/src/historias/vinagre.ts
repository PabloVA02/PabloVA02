import type { Short } from "../shorts";

/* ==========================================================================
   El vinagre.

   Vino estropeado que resultó ser un conservante, un limpiador y un mito.
   El tema se estropea si se convierte en lista de remedios caseros.

   La regla del tema: todo sale de UNA SOLA REACCIÓN, unas bacterias que
   se comen el alcohol y sueltan ácido, y esa reacción se explica antes de
   nada. Las creencias populares se comprueban una a una, diciendo qué
   parte era cierta y cuál no.
   ========================================================================== */

export const VINAGRE: Short[] = [
  {
    id: "el-vino-que-sale-mal",
    titulo: "El vinagre es vino estropeado a propósito",
    gancho: "Unas bacterias se comen el alcohol y sueltan ácido. El truco está en dejarlas trabajar en vez de impedirlo.",
    categoria: "Comida",
    color: "var(--clay)",
    encargo: "Barrica de vinagre con la película blanquecina de la madre flotando en la superficie.",
    entrada:
      "Todo el Mediterráneo, desde hace por lo menos cinco mil años. El vinagre no se inventó: apareció solo, cada vez que un recipiente de vino se quedaba destapado más de la cuenta. Unas bacterias del aire se posan en el líquido, se comen el alcohol y lo convierten en ácido. La palabra lo dice sin disimulo, porque vinagre significa literalmente vino agrio.",
    paginas: [
      {
        rotulo: "Comerse el alcohol",
        texto:
          "Las bacterias que hacen vinagre necesitan tres cosas y las tres son fáciles de conseguir. Necesitan alcohol para comer, oxígeno para respirar y una temperatura templada para trabajar. El oxígeno es la clave, porque una botella cerrada no deja entrar aire y el vino aguanta. En cuanto se abre y se deja fuera, esas bacterias empiezan a convertir el alcohol en ácido acético. Forman en la superficie una película fina y gelatinosa que los antiguos llamaban la madre del vinagre. Esa capa no es suciedad, sino la propia colonia de bacterias flotando para llegar al aire.",
        destacado: { tipo: "frase", frase: "La madre del vinagre no es suciedad: son las bacterias." },
      },
      {
        rotulo: "A propósito",
        texto:
          "Fabricar vinagre en serio consiste en darles a esas bacterias todo el aire posible. El método tradicional deja el líquido en barricas medio vacías durante meses, con un agujero arriba. Es lento y da un vinagre muy bueno, porque en ese tiempo aparecen también otros sabores. El método industrial mete aire a presión en un depósito lleno de líquido, con burbujas finas. Así el proceso pasa de meses a un par de días, y el resultado es más plano. La diferencia de precio entre uno y otro está justamente ahí, en el tiempo que ha tardado.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "% de ácido lleva un vinagre de mesa" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un producto que sirve para conservar, para limpiar y para condimentar con el mismo bote. Conserva porque casi ningún microbio aguanta un medio tan ácido, igual que casi ninguno aguanta la sal. De ahí vienen los encurtidos, que son verduras metidas en vinagre y capaces de durar años. Quedó también un uso que casi nadie asocia con la cocina, porque el vinagre disuelve la cal. Un ácido suave ataca el carbonato del agua dura y por eso limpia grifos y planchas. Lo que no hace es desinfectar de verdad, y ahí la creencia popular se pasa de largo.",
      },
    ],
  },
  {
    id: "el-vinagre-no-desinfecta",
    titulo: "El vinagre limpia bien y desinfecta mal",
    gancho: "Contra la cal es imbatible. Contra las bacterias tarda horas y no llega donde llega la lejía.",
    categoria: "Ciencia",
    color: "var(--slate)",
    curioso: true,
    encargo: "Grifo con costra blanca de cal metido en una bolsa con vinagre atada alrededor.",
    entrada:
      "Cocinas de todo el mundo, con los ensayos de laboratorio publicados desde 1997. El vinagre tiene fama de desinfectante natural y esa fama es solo parcialmente cierta. Los estudios que lo han medido encuentran que mata algunos microbios, tarda mucho más de lo que la gente cree y falla contra otros. Como quitagrasas y antical, en cambio, funciona de maravilla.",
    paginas: [
      {
        rotulo: "Qué mata",
        texto:
          "Un desinfectante se juzga por dos cosas: contra qué microbios funciona y cuánto tarda en hacerlo. El vinagre de mesa lleva alrededor de un cinco por ciento de ácido acético y el resto es agua. Con esa concentración mata algunas bacterias comunes si se deja actuar bastante rato. El problema es que en una cocina nadie deja el vinagre puesto media hora sobre una tabla. Contra las esporas y contra bastantes virus no hace prácticamente nada a esa concentración. La lejía diluida actúa en menos de un minuto y llega a todo, y esa es la diferencia.",
        destacado: { tipo: "frase", frase: "Nadie deja el vinagre media hora sobre la tabla." },
      },
      {
        rotulo: "Para qué sí",
        texto:
          "Donde el vinagre gana con claridad es contra la cal, que es un problema de química pura. La cal del agua dura es carbonato, y cualquier ácido lo disuelve soltando burbujas de gas. Por eso funciona en un grifo con costra blanca, en una plancha o en una cafetera. También corta la grasa moderadamente y deja los cristales sin las marcas que dejan otros productos. Tiene un límite importante, porque ese mismo ácido ataca el mármol, el granito y las juntas. Una encimera de piedra natural limpiada con vinagre a diario acaba perdiendo el brillo.",
        destacado: { tipo: "cifra", cifra: "1997", unidad: "el año de los primeros ensayos serios" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un reparto de tareas que los propios laboratorios recomiendan y que es bastante sencillo. El jabón quita la suciedad, el vinagre quita la cal y la lejía mata los microbios. Cada uno hace bien su parte y ninguno hace bien la de los otros dos. Quedó también una advertencia que los servicios de emergencias repiten todos los años sin descanso. Mezclar vinagre con lejía suelta cloro en forma de gas, y eso manda gente al hospital. Son dos productos que funcionan bien por separado y muy mal juntos en el mismo cubo.",
      },
    ],
  },
  {
    id: "el-vinagre-de-los-ladrones",
    titulo: "Un vinagre de hierbas protegía de la peste",
    gancho: "Cuatro ladrones robaban a los apestados sin contagiarse. La receta que confesaron se vendió durante siglos.",
    categoria: "Creencias",
    color: "var(--plum)",
    curioso: true,
    encargo: "Frasco antiguo de farmacia con hierbas maceradas en vinagre y etiqueta manuscrita.",
    entrada:
      "Francia, siglo XVII, durante uno de los últimos brotes graves de peste en Europa. La leyenda cuenta que cuatro hombres detenidos por robar en las casas de los enfermos negociaron su condena a cambio de contar su secreto. Decían frotarse con un vinagre macerado con hierbas que les protegía del contagio. La fórmula se siguió vendiendo en las boticas durante más de dos siglos.",
    paginas: [
      {
        rotulo: "La receta",
        texto:
          "Las versiones de la receta que se conservan coinciden bastante entre sí y no llevan nada raro. Vinagre de vino macerado durante días con ajenjo, romero, salvia, menta, lavanda y ajo. Se frotaban las manos, la cara y las sienes, y a veces empapaban un pañuelo para taparse. La creencia de la época era que la peste viajaba por el aire corrompido y por los malos olores. Contra eso se combatía con olores fuertes, y de ahí vienen también las máscaras con pico. Aquellos picos se rellenaban de hierbas aromáticas por exactamente la misma razón.",
        destacado: { tipo: "frase", frase: "Se creía que la peste viajaba en el olor del aire." },
      },
      {
        rotulo: "Por qué servía",
        texto:
          "La peste no se contagia por el olor, sino por la picadura de una pulga que viaja en las ratas. Eso convierte la explicación de la época en falsa y deja la receta en un sitio curioso. Varias de esas plantas contienen sustancias que repelen a los insectos de manera comprobada. La lavanda, la menta y el ajenjo se usan hoy en repelentes y en productos contra las polillas. Frotarse el cuerpo con esa mezcla podía ahuyentar a las pulgas sin que nadie supiera por qué. Es un caso raro de remedio que quizá funcionaba por un motivo distinto del que se creía.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "ladrones dieron nombre a la fórmula" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una fórmula que se vendió en farmacias europeas hasta bien entrado el siglo XX. Quedó también un nombre comercial que hoy usan varias marcas de aceites esenciales y de limpiadores. La historia de los cuatro ladrones no está probada y aparece por primera vez mucho después. Puede ser perfectamente un invento comercial para vender mejor un preparado bastante corriente. Y quedó una lección que sirve para cualquier remedio antiguo que parezca funcionar de verdad. Antes de decidir si sirve, conviene comprobar si sirve por el motivo que dice su etiqueta.",
      },
    ],
  },
];
