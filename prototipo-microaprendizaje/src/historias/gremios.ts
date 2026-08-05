import type { Short } from "../shorts";

/* ==========================================================================
   Los gremios.

   Las asociaciones de artesanos que organizaron el trabajo urbano europeo
   durante seis siglos. El tema aburre si se cuenta con vocabulario de
   historia económica: corporación, ordenanza, monopolio.

   La regla del tema: se cuenta desde el APRENDIZ. Qué tenía que hacer para
   subir, qué le estaba prohibido, quién decidía si valía. Un gremio es un
   sistema para controlar quién puede ganarse la vida con un oficio, y eso se
   entiende siguiendo a una persona por dentro.
   ========================================================================== */

export const GREMIOS: Short[] = [
  {
    id: "de-donde-viene-obra-maestra",
    titulo: "De dónde viene la obra maestra",
    gancho: "Era la pieza que un artesano presentaba para que le dejaran abrir taller propio. Si no gustaba, seguía de empleado.",
    categoria: "Gremios",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una cerradura antigua muy trabajada, con la llave apoyada al lado sobre un paño.",
    entrada:
      "Europa, siglos XIII a XVIII. Para ejercer un oficio en una ciudad hay que pertenecer a su gremio, la asociación que agrupa a todos los que lo practican. Se entra de niño como aprendiz, se pasa años de oficial trabajando para otro, y solo se llega a maestro superando una prueba: fabricar una pieza que demuestre que se domina el oficio entero.",
    paginas: [
      {
        rotulo: "La pieza",
        texto:
          "La prueba estaba regulada al detalle y variaba según el oficio. A un cerrajero podían pedirle una cerradura con varios mecanismos; a un ebanista, un mueble con ensambles complicados; a un panadero, una cantidad de pan de una calidad determinada en un tiempo dado. La pieza se hacía muchas veces bajo vigilancia, en un taller ajeno y con material propio, y la juzgaba un tribunal de maestros del gremio. Esa pieza se llamaba, literalmente, obra de maestría, y de ahí viene que hoy llamemos obra maestra a lo mejor que ha hecho alguien.",
        destacado: { tipo: "frase", frase: "La obra maestra era, literalmente, el examen para ser maestro." },
      },
      {
        rotulo: "El filtro",
        texto:
          "El examen medía la habilidad, pero también servía para otra cosa menos noble: controlar cuánta gente entraba. Los maestros no tenían ningún interés en que abrieran talleres nuevos que les hicieran competencia. Así que en muchas ciudades la prueba se fue endureciendo, se cobraron tasas altísimas por presentarse y se dio ventaja a los hijos de maestro, que a veces quedaban directamente exentos. El resultado es que muchos oficiales pasaban la vida trabajando para otro, con el mismo oficio y peor sueldo, sin llegar a tener taller propio. En algunos gremios tampoco podían casarse: eso estaba reservado a los maestros.",
        destacado: { tipo: "cifra", cifra: "7", unidad: "años solía durar el aprendizaje" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Los gremios se suprimieron entre finales del siglo XVIII y el XIX, acusados precisamente de eso: de cerrar el paso a los que querían trabajar y de frenar cualquier novedad que amenazara al taller establecido. Quedó la expresión, que usamos a diario sin saber que describe un examen. Quedaron los nombres de calles enteras dedicadas a un oficio, porque cada gremio agrupaba a los suyos en la misma zona. Y quedó la idea del título profesional y del colegio que lo expide, que siguen haciendo exactamente lo mismo: decidir quién puede ejercer un oficio y quién no.",
      },
    ],
  },
  {
    id: "los-anos-de-camino",
    titulo: "Tres años fuera sin volver",
    gancho: "El oficial salía de su ciudad con la ropa puesta y no podía acercarse a su casa hasta cumplir el plazo.",
    categoria: "Gremios",
    color: "var(--slate)",
    encargo: "Un joven con chaqueta negra de botones y un hatillo al hombro, de espaldas en una carretera.",
    entrada:
      "Alemania y Centroeuropa, desde el siglo XV. Cuando un aprendiz termina su formación y pasa a oficial, muchos gremios le exigen algo más antes de dejarle optar a maestro: irse. Tiene que recorrer otras ciudades trabajando en talleres distintos durante un plazo que suele ser de tres años y un día, sin acercarse a menos de una distancia fijada de su pueblo.",
    paginas: [
      {
        rotulo: "Por qué",
        texto:
          "La razón era técnica antes que iniciática. En una época sin manuales ni escuelas de oficio, la única forma de que las técnicas circularan era que circulara la gente que las conocía. Un carpintero que trabajaba tres años en cuatro ciudades distintas volvía sabiendo maneras de resolver problemas que en su taller de origen no se le habrían ocurrido. El gremio se aseguraba así de que sus maestros no fueran solo hábiles, sino que estuvieran al día, y de paso repartía mano de obra joven por los talleres que la necesitaban.",
        destacado: { tipo: "frase", frase: "Sin escuelas ni manuales, las técnicas viajaban con la gente." },
      },
      {
        rotulo: "Las reglas",
        texto:
          "El viaje tenía un reglamento estricto que todavía se conserva. Se sale sin dinero y se vuelve sin dinero, ganando por el camino lo justo para vivir. No se puede usar teléfono ni coche propio: se viaja a pie o pidiendo transporte. Se lleva un uniforme reconocible, con chaqueta de pana negra, sombrero de ala ancha y un pendiente, además de un cuaderno donde cada maestro sella el trabajo hecho y firma cuánto tiempo se ha estado. Y hay una prohibición que lo resume todo: no acercarse a menos de cincuenta kilómetros de casa hasta que se cumpla el plazo.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "años y un día dura el viaje" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La costumbre no se ha extinguido. Unos cientos de jóvenes carpinteros, canteros y techadores la hacen cada año en Alemania y en los países vecinos, con su uniforme y su cuaderno de sellos. Se los ve por la carretera pidiendo transporte. Las empresas los contratan sin problema porque el uniforme certifica su formación. Y ha vuelto por otra puerta en toda Europa. Los programas de intercambio de estudiantes y las prácticas en el extranjero persiguen lo mismo que aquellos tres años y un día. La idea no ha cambiado: que quien aprende un oficio vea cómo se hace en otro sitio.",
      },
    ],
  },
  {
    id: "el-gremio-contra-el-invento",
    titulo: "Prohibieron la máquina que ahorraba",
    gancho: "Un telar nuevo hacía el trabajo de varios tejedores. La ciudad lo prohibió y ordenó estrangular a su inventor.",
    categoria: "Gremios",
    color: "var(--plum)",
    encargo: "Un telar de madera antiguo con los hilos tensados, en un taller en penumbra.",
    entrada:
      "Danzig, en la costa del Báltico, hacia 1586. Un artesano presenta un telar capaz de tejer varias cintas a la vez, con lo que un solo operario produce lo que antes producían cuatro o cinco. El consejo de la ciudad, presionado por el gremio de tejedores, decide que aquel aparato dejará sin pan a demasiada gente. La crónica cuenta que mandó ahogar en secreto al inventor.",
    paginas: [
      {
        rotulo: "La historia",
        texto:
          "El episodio lo recogió un economista inglés dos siglos después, y los historiadores discuten si ocurrió exactamente así o si se exageró al contarlo. Lo que está documentado sin discusión es lo demás: varias ciudades europeas prohibieron por ordenanza ese tipo de telar durante décadas, y otras lo permitieron solo con licencia y con límite de máquinas por taller. No era una revuelta de trabajadores rompiendo aparatos por su cuenta, sino política municipal aprobada por escrito, a petición del gremio afectado y con la firma de las autoridades. Prohibir la máquina era, en aquellas ciudades, una decisión perfectamente legal y bastante habitual.",
        destacado: { tipo: "frase", frase: "No fue una revuelta: fue una ordenanza aprobada por escrito." },
      },
      {
        rotulo: "La lógica",
        texto:
          "Detrás había un razonamiento que no era absurdo en su contexto. Un gremio garantizaba a sus miembros un ingreso estable a cambio de controlar precios, calidad y número de talleres, y ese equilibrio se rompe si un solo hombre puede hacer el trabajo de cinco. En una ciudad sin subsidios ni forma de recolocar a nadie, cuatro tejedores sin trabajo eran cuatro familias en la calle. El cálculo fallaba en el largo plazo: las ciudades que prohibieron las máquinas acabaron perdiendo la industria frente a las que las dejaron entrar.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "tejedores hacía el trabajo un solo telar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el ejemplo, que se cita en cada debate sobre tecnología y empleo desde entonces. Y quedó una diferencia útil: aquellos gremios acertaban en el diagnóstico y fallaban en la solución. Tenían razón en que la máquina destruía sus puestos de trabajo, y se equivocaban al pensar que prohibirla los salvaría, porque el telar se fabricó igual en la ciudad de al lado. Los sistemas que funcionaron después no fueron los que prohibieron aparatos, sino los que se ocuparon de la gente a la que aquellos aparatos dejaban sin oficio.",
      },
    ],
  },
];
