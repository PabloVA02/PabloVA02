import type { Short } from "../shorts";

/* ==========================================================================
   Higiene.

   Lavarse, la basura y lo que pasa cuando una ciudad no sabe dónde meter lo
   que produce. Es el tema con menos glamour del catálogo y uno de los que
   más ha cambiado la esperanza de vida, bastante más que casi cualquier
   medicamento.

   La regla del tema: se cuenta EL OLOR Y LA CIFRA. Cuánta gente vivía sobre
   sus propios desechos, qué se hacía con ellos, cuántos morían por eso y qué
   obra concreta lo arregló. Sin morbo y sin detalles desagradables gratuitos:
   con lo justo para que se entienda por qué aquello no podía seguir.

   Y siempre se acaba en lo que costó, porque el saneamiento es la obra
   pública más cara y la menos lucida que existe.
   ========================================================================== */

export const HIGIENE: Short[] = [
  {
    id: "gran-hedor",
    titulo: "El hedor trajo las cloacas",
    gancho: "El cólera mataba a miles y nadie se movió. Bastó un verano de peste en el Parlamento.",
    categoria: "Higiene",
    color: "var(--sage)",
    encargo: "Un túnel de ladrillo en arco, con agua oscura corriendo por el fondo.",
    fotos: [
      {
        archivo: "The construction of the great sewage tunnels, near old Ford, Wellcome V0020257.jpg",
        autor: "Los grandes colectores de Londres en obras, cerca de Old Ford. Grabado publicado hacia 1860. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:The_construction_of_the_great_sewage_tunnels,_near_old_Ford,_Wellcome_V0020257.jpg",
        foco: "50% 32%",
        alt: "Grabado de dos bóvedas de ladrillo a medio cerrar en una zanja, con decenas de obreros trabajando encima y dentro.",
      },
      {
        archivo: "Flushing the Sewers.jpg",
        autor: "«Limpiando las alcantarillas», grabado de London Labour and the London Poor, de Henry Mayhew, 1851.",
        licencia: "Dominio público",
        pdPorEdad: 1887,
        fuente: "https://commons.wikimedia.org/wiki/File:Flushing_the_Sewers.jpg",
        foco: "45% 42%",
        alt: "Tres hombres con farol y sombrero de ala dentro de una galería abovedada, empujando el agua con una compuerta.",
      },
      {
        archivo: "London MMB »031 Waterloo Millennium Pier, Palace of Westminster and Thames Embankment.jpg",
        autor: "El palacio de Westminster desde el otro lado del Támesis. Fotografía de mattbuck.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:London_MMB_%C2%BB031_Waterloo_Millennium_Pier,_Palace_of_Westminster_and_Thames_Embankment.jpg",
        foco: "45% 48%",
        alt: "El Parlamento y su torre del reloj iluminados de noche, reflejados en el agua oscura del río.",
      },
      {
        archivo: "Abbey Mills Pumping Station (51551458944).jpg",
        autor: "La estación de bombeo de Abbey Mills, terminada en 1868. Fotografía de Simon, Londres.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Abbey_Mills_Pumping_Station_(51551458944).jpg",
        foco: "45% 42%",
        alt: "Un edificio de ladrillo amarillo y rojo con arcos, torretas y una linterna central, más parecido a una iglesia que a una fábrica.",
      },
    ],
    entrada:
      "Londres, verano de 1858. La ciudad tiene dos millones y medio de habitantes, más que ninguna otra del mundo en ese momento, y un solo sitio donde acaba todo lo que sale de sus casas: el río que la atraviesa por el centro. No hay depuración de ninguna clase ni nada que se le parezca; simplemente se echa al agua y se confía en que la marea lo saque. Aquel julio hace un calor excepcional, el caudal baja hasta dejar los bajíos al aire y el río se convierte en una masa marrón que fermenta al sol. Y el Parlamento está justo en la orilla, con las ventanas al agua.",
    paginas: [
      {
        rotulo: "El río",
        texto:
          "Durante décadas la situación había ido a peor por una mejora: el retrete con cisterna, que se popularizó a partir de 1850, multiplicó por diez el agua que llegaba a los pozos negros de cada casa, y esos pozos rebosaban a las alcantarillas de lluvia, que desaguaban directamente al río. Aquel verano el olor era tan intenso que en el Parlamento colgaron cortinas empapadas en cloruro de cal en las ventanas para poder trabajar, y aun así hubo sesiones que se levantaron. Se llegó a plantear trasladar la sede fuera de la ciudad.",
        destacado: { tipo: "frase", frase: "Colgaron cortinas empapadas en cal para poder seguir la sesión." },
      },
      {
        rotulo: "Dieciocho días",
        texto:
          "El cólera había matado a decenas de miles de londinenses en tres epidemias anteriores sin que se aprobara ninguna obra, porque costaba demasiado y porque se creía que la enfermedad venía del aire viciado y no del agua. La ley que autorizó el alcantarillado, en cambio, se tramitó en dieciocho días, con un presupuesto enorme y sin apenas discusión, en cuanto los diputados no pudieron abrir las ventanas. Un ingeniero de la ciudad llevaba años con los planos completos guardados en un cajón, presentados y rechazados varias veces por caros, esperando a que alguien se los volviera a pedir.",
        destacado: { tipo: "cifra", cifra: "18", unidad: "días tardó la ley en aprobarse" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se construyeron dos mil kilómetros de galerías de ladrillo y estaciones de bombeo, con la obra terminada en 1875. El ingeniero calculó el diámetro necesario para la población de entonces y después lo dobló, por si acaso, decisión que hizo que el sistema aguantara siglo y medio y que se estudia todavía en las escuelas de ingeniería. El cólera desapareció de la ciudad. Y desapareció por una razón que él no sabía: creía estar quitando el mal olor, y lo que estaba haciendo era separar la bebida de los desechos.",
      },
    ],
  },

  {
    id: "jabon-historia",
    titulo: "El jabón era para la lana",
    gancho: "Servía para limpiar lana y para curar heridas. Frotarse el cuerpo con él es una costumbre reciente.",
    categoria: "Higiene",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una pastilla de jabón artesanal cortada a cuchillo sobre una tabla húmeda.",
    fotos: [
      {
        archivo: "Pile of Handmade White Soap Bars at a Market.jpg",
        autor: "Pastillas de jabón artesanal apiladas en un puesto de mercado.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Pile_of_Handmade_White_Soap_Bars_at_a_Market.jpg",
        foco: "50% 70%",
        alt: "Montón de pastillas redondas de jabón blanco hecho a mano, amontonadas unas sobre otras.",
      },
      {
        archivo: "Savons d'Alep traditionnels.jpg",
        autor: "Jabones de Alepo tradicionales, hechos con aceite de oliva y de laurel.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Savons_d%27Alep_traditionnels.jpg",
        foco: "50% 50%",
        alt: "Bloques cuadrados de jabón de color arena apilados en filas, con el sello marcado encima.",
      },
      {
        archivo: "Spinning and weaving at the Ohio State Fair - DPLA - 0048aafc0571218ae75ab0a9f02a8044.jpg",
        autor: "Hilando lana recién esquilada en la feria del estado de Ohio, 1981. Fotografía de David E. Lucas.",
        licencia: "Public domain",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Spinning_and_weaving_at_the_Ohio_State_Fair_-_DPLA_-_0048aafc0571218ae75ab0a9f02a8044.jpg",
        foco: "50% 50%",
        alt: "Varias personas trabajando alrededor de un montón de lana recién esquilada, con ruecas y telares.",
      },
      {
        archivo: "Pile of Handmade White Soap Bars at a Market 02.jpg",
        autor: "El mismo puesto de jabón artesanal, visto desde otro ángulo.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Pile_of_Handmade_White_Soap_Bars_at_a_Market_02.jpg",
        foco: "50% 70%",
        alt: "Pastillas de jabón blanco apiladas en un puesto, con el mercado desenfocado al fondo.",
      },
    ],
    entrada:
      "Mesopotamia, hace unos cuatro mil quinientos años. En unas tablillas de arcilla aparece la receta más antigua que se conoce de algo parecido al jabón: grasa animal hervida con ceniza de madera, en proporciones anotadas con cuidado. Lo llamativo no es la receta, sino para qué servía. No se usaba para lavarse la piel: servía para desengrasar la lana antes de teñirla y para limpiar heridas. Que aquella pasta áspera pudiera frotarse contra el propio cuerpo, y que eso fuera además una buena idea y no un castigo, tardó milenios en ocurrírsele a nadie.",
    paginas: [
      {
        rotulo: "La química",
        texto:
          "El truco es una reacción sencilla y bastante sorprendente. La ceniza de madera mojada suelta una sustancia muy alcalina que, al hervirse con grasa, parte sus moléculas y produce otras con dos extremos distintos: uno que se lleva bien con el agua y otro que se lleva bien con la grasa. Eso es exactamente lo que hace falta para arrancar la suciedad grasienta de una superficie y que el agua se la lleve por el desagüe. Sin jabón, el agua sola resbala por encima de la grasa sin llegar a engancharla, que es lo que pasa cuando uno se enjuaga las manos después de freír algo.",
        destacado: { tipo: "frase", frase: "Un extremo de la molécula agarra la grasa; el otro, el agua." },
      },
      {
        rotulo: "Frotarse",
        texto:
          "Los romanos, que eran muy limpios, no lo usaban para bañarse: se untaban aceite, se lo raspaban con una espátula curva de metal y se metían en el agua caliente. El jabón les parecía cosa de bárbaros del norte, que sí lo empleaban, aunque para teñirse el pelo de rojizo. Solo con la peste negra y las epidemias posteriores empieza a asociarse limpieza con salud, y la fabricación se convierte en un oficio con gremio propio en varias ciudades del Mediterráneo, donde se sustituye la grasa animal por aceite de oliva.",
        destacado: { tipo: "cifra", cifra: "4.500", unidad: "años tiene la receta más antigua" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Que lavarse las manos evite enfermedades no se demostró hasta mediados del siglo XIX, y aun así costó décadas que se aceptara. Hoy se considera la medida sanitaria más barata y más eficaz que existe: se calcula que hacerlo bien reduce a la mitad las diarreas infantiles, que siguen matando a cientos de miles de niños al año en países sin agua corriente. Aquella mezcla de grasa animal y ceniza de madera, anotada en una tablilla para desengrasar lana antes de teñirla, ha acabado salvando bastantes más vidas que la mayoría de los medicamentos que se han inventado desde entonces.",
      },
    ],
  },

  {
    id: "papel-higienico",
    titulo: "El papel llevaba astillas",
    gancho: "China lo usaba en el siglo VI. En Occidente se vendió como remedio médico y con garantía de suavidad.",
    categoria: "Higiene",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un rollo de papel a medio gastar sobre un soporte metálico, luz de baño.",
    entrada:
      "China, siglo VI. Un funcionario deja escrito, con bastante reproche, que hay quien usa para el aseo papel donde vienen citas de los clásicos, cosa que a él le parece una falta de respeto imperdonable hacia los sabios antiguos. Esa queja escrita de pasada es la primera mención conocida al papel higiénico en toda la historia, y el invento va a tardar todavía mil trescientos años en llegar a Europa. Antes de eso, cada cultura resolvió el mismo asunto con lo que tenía más a mano. Y algunas de aquellas soluciones eran peores que el problema, sobre todo las compartidas.",
    paginas: [
      {
        rotulo: "Antes del rollo",
        texto:
          "En Roma se usaba una esponja marina atada a un palo que se enjuagaba en un canalito de agua corriente y se compartía entre todos los usuarios de la letrina pública, que eran bancos corridos con agujeros y sin ninguna separación. En Grecia se empleaban trozos de cerámica rota, y en el norte de Europa musgo, hojas o paja. Y en el siglo XIX, en el campo estadounidense, lo habitual era arrancar hojas del catálogo de una gran tienda por correo, que llegaba gratis a cada granja y traía cientos de páginas finas; algunos venían ya con un agujero en la esquina para colgarlos de un clavo.",
        destacado: { tipo: "frase", frase: "En Roma la esponja del palo se compartía entre todos." },
      },
      {
        rotulo: "El producto",
        texto:
          "El primer papel fabricado para eso se vendió en Estados Unidos en 1857, en paquetes de hojas sueltas, y se anunció como producto medicinal contra las hemorroides, porque nombrar la función real habría sido impensable en una tienda. El rollo perforado llegó en 1890. Y durante décadas hubo un problema industrial que hoy suena increíble: la pasta de madera dejaba astillas diminutas en el papel, así que las marcas competían anunciando que el suyo era el primero garantizado sin astillas. Ese reclamo se usó hasta bien entrados los años treinta.",
        destacado: { tipo: "cifra", cifra: "1857", unidad: "el año del primer paquete vendido" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hoy se gastan unos cuarenta y dos mil millones de rollos al año en el mundo, con un consumo repartidísimo: buena parte del planeta sigue usando agua, que gasta muchísima menos madera. Y ese objeto tan poco lucido tiene la costumbre de aparecer en cuanto hay miedo: se agotó en Estados Unidos en 1973 porque un presentador de televisión bromeó con que iba a faltar, y volvió a agotarse en medio mundo en 2020. En los dos casos no faltaba papel en ninguna fábrica: faltó porque todo el mundo compró a la vez el de un mes. Aquella broma provocó una escasez real de meses y el presentador acabó pidiendo perdón en directo.",
      },
    ],
  },
];
