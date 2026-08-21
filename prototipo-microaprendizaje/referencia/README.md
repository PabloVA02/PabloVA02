# Las capturas de referencia

**Aquí están las pruebas. Las reglas están en `REDACCION.md`, y mandan ellas.**

Pablo mandó estas capturas entre el 19 y el 21 de agosto de 2026, y al mandar
las últimas dijo por qué se guardan:

> «Te paso algunos ejemplos más. Cuando se te acabe la ventana de contexto
> debes ver todos estos ejemplos para seguir haciéndolos así, con este tipo de
> redacción, que nunca se te olvide.»

Y antes:

> «No te lo paso para que lo copies, es para que aprendas la forma de redacción
> gramatical, la forma de contarlo.»

Las capturas llegan a una carpeta de subidas que dura lo que dura la sesión.
Esto es la copia que no se pierde. **Antes de escribir un libro, se miran**, o
al menos se mira la de *La Odisea*, que es la mejor de todas.

Están reescritas a WebP de 520 de ancho con `scripts/mete-referencia.mjs`: se
leen enteras y ocupan cuarenta veces menos que el PNG original. Van numeradas
en el orden de lectura del resumen.

## Qué hay y qué enseña cada una

| carpeta | qué es | qué salió de ahí |
|---|---|---|
| `odisea/` | *La Odisea*, 8 páginas | **La mejor.** El registro narrativo entero: titulares cortos de imagen, la caja del rayo hablándole al lector, la etimología, el dato asombroso, la frase corta de remate. Apartado 3 bis |
| `cerebro-de-buda/` | *El cerebro de Buda*, 10 páginas | La analogía doméstica del dardo, el «¿sabías que…?», la cita con autor. Y los cuatro vicios que no se copian: «la investigación demuestra que…», los consejos vagos, el titular de dos frases con «debes», la caja del rayo que es una obviedad |
| `1984/` | *1984*, 7 páginas | La gramática, mirada de cerca: nueve reglas de frase, tiempo verbal y párrafo. Y el aviso: en siete páginas no aparece ni Winston ni la habitación 101 |
| `coraje-de-no-gustar/` | *El coraje de no gustar*, 7 páginas | **La peor.** De aquí sale la prueba del título tapado y el aviso contra el «nosotros» de autoayuda. No nombra a Adler ni una vez |
| `republica/` | *La República*, 8 páginas | Confirma el registro de ensayo, la lista numerada con negrita y la etimología (*eudaimōn*) |
| `realidad-virtual/` | un libro sobre simulación y realidad virtual | La entrada que anuncia el recorrido enumerando las cinco perspectivas, en el registro bueno |
| `messi-ronaldo/` | *Messi y Ronaldo* | Lo concreto antes que el adjetivo: veintitrés goles en 2007, sesenta y uno en 2014-15, el nombre del entrenador de técnica |
| `cortisol/` | *Cortisol*, sobre el estrés y la grasa abdominal | **El libro de una sola molécula.** Titular «Todo se reduce al cortisol», una enzima convertida en villano con nombre —«HSD, el saboteador oculto»— y de conclusión: come bien, duerme y haz ejercicio. Apartado 4 bis, la prueba del sustituto |
| `buena-energia/` | un libro sobre mitocondrias y «buena energía», 7 páginas | **El mismo resumen con otra molécula**, y por eso vale: puestos al lado demuestran que la página no es del libro, es del género. Abre con el cuestionario del horóscopo —«¿te sientes cansado?, ¿te cuesta ganar peso?»— y las toxinas salen sin dosis ni nombre |
| `sapiens-headway/` | *Sapiens*, 8 páginas | **La comparación directa**: es el único libro del que tenemos su versión y la nuestra, que es Extenso de 16 páginas. Su «nosotros» empieza siendo el de la especie y acaba siendo el de las hipotecas. Apartado 4 ter |
| `antiguas-civilizaciones/` | *Antiguas civilizaciones*, sobre mayas, aztecas e incas | **Cómo NO se resume historia.** Fechas y nombres propios excelentes —2600 a. C., Monte Albán, las chinampas del lago Texcoco, la Triple Alianza— dentro de una crónica sin una sola afirmación discutible. De aquí sale la trampa de la crónica, apartado 4 bis |
| `futuro-mente/` | *El futuro de nuestra mente*, de Michio Kaku, 8 páginas | **La más útil de las malas.** De aquí sale la regla del marcador: es un libro de predicciones de 2014 resumido sin decir la fecha y sin comprobar ni una. Y dos vicios nuevos: la cita de adorno mal atribuida y el «según los científicos» sin nombre. Apartado 4 bis, caso quinto |
| `joyas-vocabulario/` | *Vocabulario picante* | **No es un resumen de un libro**: es un formato propio de Headway —«Joyas»— que mezcla varios títulos sobre un tema. Ficha de 6 puntos clave, 8 minutos y 3 conocimientos |
| `tarjeta-libro-del-dia/` | la tarjeta del inicio | El modelo de `src/LibroDelDia.tsx`, con lo que se copió y lo que se cambió |

## Cómo se guarda una tanda nueva

    node scripts/mete-referencia.mjs <carpeta-descomprimida> <slug> "Título"

Y después se añade su fila a la tabla de arriba, con **qué enseña**. Una
captura guardada y no mirada no sirve de nada.
