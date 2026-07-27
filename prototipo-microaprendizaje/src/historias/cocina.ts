import type { Short } from "../shorts";

/* ==========================================================================
   Cocina.

   Comida. El tema que todo el mundo lee porque todo el mundo ha desayunado.
   Y el que mejor sirve para el truco central del muro: coger algo que está
   en la nevera del lector y demostrarle que no sabía lo que era.

   La regla del tema: la historia tiene que empezar en un objeto que se puede
   señalar. No «la fermentación en Asia oriental», sino el bote de kétchup.
   No «la domesticación de las umbelíferas», sino la zanahoria naranja de la
   bolsa. Desde ahí se puede ir todo lo lejos que haga falta, porque el lector
   ya tiene un pie dentro.

   Y ojo con las historias de origen: la comida es el territorio favorito de
   las leyendas nacionales. Cuando la versión bonita no está documentada, se
   dice, y se cuenta quién sale ganando con que se repita.
   ========================================================================== */

export const COCINA: Short[] = [
  {
    id: "ketchup-pescado",
    titulo: "El kétchup empezó siendo salsa de pescado",
    gancho: "Sin tomate, sin azúcar y sin nada rojo. Durante siglos.",
    categoria: "Cocina",
    color: "var(--clay)",
    encargo: "Un bote de cristal de kétchup a contraluz, sin marca visible.",
    entrada:
      "El bote que hay en cualquier cocina es tomate, vinagre, azúcar y sal. La palabra que lleva escrita, en cambio, viene de muy lejos y no tenía nada que ver con el tomate: nombraba un líquido oscuro, salado y fermentado que se hacía con pescado y que se usaba exactamente igual que hoy usamos el kétchup, para dar sabor a lo que no lo tiene.",
    paginas: [
      {
        rotulo: "El líquido oscuro",
        texto:
          "El origen más aceptado está en las salsas fermentadas del sudeste de China y del delta del Mekong. En el dialecto hokkien de Fujian aparece <em>kê-tsiap</em>, que designaba la salmuera de pescado fermentado; los comerciantes ingleses y holandeses la encontraron en los puertos del sudeste asiático en el siglo XVII y se la llevaron a casa. En Inglaterra la palabra pasó a nombrar cualquier salsa oscura de bote. Las recetas inglesas del XVIII llaman <em>catchup</em> a preparaciones de setas, nueces verdes, ostras o anchoas: todas líquidas, todas saladas, todas marrones. Ninguna llevaba tomate.",
        destacado: {
          tipo: "frase",
          frase: "Durante dos siglos, «kétchup» significó salsa marrón de bote.",
        },
      },
      {
        rotulo: "La entrada del tomate",
        texto:
          "La primera receta conocida de kétchup de tomate se publica en Estados Unidos en <strong>1812</strong>, obra del científico James Mease, y todavía no se parece al bote actual: era aguada y se estropeaba rápido, así que se cargaba de conservantes, entre ellos benzoato de sodio, que a finales del XIX estaba en el centro de una pelea pública sobre aditivos. La solución llegó por otro lado. Henry J. Heinz decidió hacia 1876 subir la proporción de tomate maduro, el vinagre y el azúcar hasta que la propia salsa se conservase sola. Ese cambio fijó el sabor: el kétchup moderno es dulce y ácido porque necesitaba durar.",
        destacado: { tipo: "cifra", cifra: "1812", unidad: "la primera receta con tomate" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "El resultado es una de las poquísimas salsas que activan a la vez los cinco sabores básicos: dulce del azúcar, ácido del vinagre, salado de la sal, amargo del tomate y clavo, y umami de los glutamatos del tomate concentrado. Por eso funciona con casi todo y por eso a los niños les gusta antes que ninguna otra cosa. Y la pariente que no cambió sigue ahí: la salsa de pescado del sudeste asiático, el <em>nuoc mam</em> vietnamita o el <em>nam pla</em> tailandés, se hace hoy prácticamente igual que aquel <em>kê-tsiap</em>. Son la misma idea; una se puso roja y la otra no.",
      },
    ],
  },

  {
    id: "zanahoria-naranja",
    titulo: "La zanahoria naranja es un invento reciente",
    gancho: "Antes eran moradas, blancas y amarillas. Lo de los holandeses es discutible.",
    categoria: "Cocina",
    color: "var(--ochre)",
    encargo: "Zanahorias de varios colores —morada, blanca, amarilla, naranja— sobre madera.",
    entrada:
      "La historia se cuenta con mucha seguridad: los agricultores holandeses del siglo XVII seleccionaron zanahorias naranjas en honor a Guillermo de Orange, y por eso todas las zanahorias del mundo son hoy de ese color. La parte de que antes no eran naranjas es rigurosamente cierta. La parte del homenaje patriótico es donde la documentación se pone escurridiza.",
    paginas: [
      {
        rotulo: "El color original",
        texto:
          "La zanahoria se domesticó en la región de Persia y Asia Central, y las primeras variedades cultivadas de las que hay descripción, hacia el siglo X, eran moradas y amarillas. Las moradas deben el color a las antocianinas, los mismos pigmentos de la col lombarda, y sueltan tinte al cocerlas, cosa que no hacía ninguna gracia en la olla. También había blancas, muy próximas a la zanahoria silvestre que crece de forma espontánea en media Europa. En los herbarios y en la pintura europea anterior al siglo XVII, las zanahorias que aparecen son de esos colores: la naranja es la recién llegada.",
        destacado: {
          tipo: "frase",
          frase: "En los cuadros antiguos las zanahorias son moradas. No es licencia del pintor.",
        },
      },
      {
        rotulo: "La versión holandesa",
        texto:
          "Que los horticultores neerlandeses del siglo XVII fijaron y mejoraron las variedades naranjas está bien documentado: de ahí salen los tipos que están detrás de casi todas las zanahorias comerciales de hoy. Lo que no aparece en ningún documento de la época es que lo hicieran como homenaje a la Casa de Orange. La historia patriótica se rastrea en textos muy posteriores, y los historiadores agrícolas la tratan como etimología popular aplicada a una hortaliza. La explicación aburrida encaja mejor: la naranja era más dulce, menos fibrosa y no teñía el caldo, y eso basta para que gane un mercado.",
        destacado: { tipo: "cifra", cifra: "s. XVII", unidad: "cuando se fija la variedad naranja" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "El pigmento que ganó, el betacaroteno, resultó ser un buen negocio biológico: el cuerpo lo convierte en vitamina A, necesaria para la visión en penumbra. De ahí nació otra leyenda, esta con autor conocido. Durante la Segunda Guerra Mundial, el Ministerio del Aire británico difundió que sus pilotos nocturnos acertaban tanto por comer zanahorias; era una tapadera para no descubrir el radar de a bordo. Comer zanahorias no mejora la vista de quien ya está bien nutrido. La leyenda, en cambio, sigue funcionando ochenta años después, que es más de lo que dura casi cualquier campaña.",
      },
    ],
  },

  {
    id: "miel-no-caduca",
    titulo: "La miel es el único alimento que no caduca",
    gancho: "Se han abierto tarros de tres mil años y seguían siendo miel.",
    categoria: "Cocina",
    color: "var(--sage)",
    curioso: true,
    encargo: "Miel cayendo en hilo sobre un tarro, a contraluz, ámbar muy saturado.",
    entrada:
      "En las excavaciones de tumbas egipcias han aparecido vasijas con miel de más de tres mil años que no estaba estropeada: cristalizada, densa, pero miel. No es un milagro ni tiene que ver con el embalsamamiento. Es química, y son tres mecanismos actuando a la vez, cada uno de los cuales bastaría casi por sí solo para dejar sin trabajo a las bacterias.",
    paginas: [
      {
        rotulo: "Tres cerrojos",
        texto:
          "El primero es el agua, o su ausencia: la miel tiene alrededor de un <strong>17 %</strong> y está tan cargada de azúcar que lo poco que hay está secuestrado por las moléculas de glucosa y fructosa. Un microbio que caiga ahí pierde su propia agua por ósmosis y se deshidrata. El segundo es la acidez: el pH ronda 3,9, más ácido que el café. El tercero lo ponen las abejas: al procesar el néctar le añaden una enzima, la glucosa oxidasa, que en cuanto aparece humedad genera peróxido de hidrógeno, es decir, agua oxigenada, en cantidades pequeñas y sostenidas.",
        destacado: { tipo: "cifra", cifra: "17 %", unidad: "de agua, y ni esa está disponible" },
      },
      {
        rotulo: "La letra pequeña",
        texto:
          "Los cerrojos se abren si entra agua. Una miel mal cerrada en un sitio húmedo absorbe humedad del aire, la concentración de azúcar baja en la superficie y ahí ya puede fermentar: así se hace la hidromiel, que es exactamente miel aguada y fermentada a propósito. Y hay una excepción que no es de conservación sino de seguridad: la miel puede contener esporas de <em>Clostridium botulinum</em>, inofensivas para un adulto pero peligrosas para un bebé de menos de un año, cuyo intestino todavía no tiene la flora que las mantiene a raya. Es la única advertencia real que lleva un tarro de miel.",
        destacado: {
          tipo: "frase",
          frase: "No se estropea porque no deja entrar agua. Dale agua y se estropea.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Que cristalice no es que se ponga mala: es que la glucosa se separa de la disolución, y basta calentar el tarro al baño maría para devolverla. Aquella capacidad de no pudrirse se aprovechó mucho antes de entenderse. En Egipto y en Mesopotamia la miel se usaba sobre heridas, y hay papiros médicos que la incluyen en decenas de fórmulas; hoy existen apósitos de miel médica esterilizada, aprobados y en uso hospitalario, para heridas que no cierran. Un remedio de hace cuatro mil años que volvió por la puerta grande después de que se supiera por qué funcionaba.",
      },
    ],
  },
];
