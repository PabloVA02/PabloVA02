# Cómo se lee una página de texto, medida sobre las capturas de Pablo

Tres de las que mandó el 28 de agosto de 2026, después de tres vueltas
diciendo lo mismo: *«que hagas el texto del mismo tamaño que las capturas,
siempre de ese tamaño, todo igual, que lo calques al 100 %»*, y luego *«con el
espacio en los párrafos y todo, hazlo exactamente igual al 100 %»*.

**Estas sustituyen a las que había aquí antes.** Y no porque fueran malas: el
lector de Headway tiene su propio mando de tamaño de letra, así que dos tandas
suyas de días distintos no miden lo mismo. Las de referencia son las últimas.

## Las medidas, sacadas en píxeles y no a ojo

Las capturas son de 750 de ancho, o sea un móvil de 375 al doble de densidad.
Todo lo de abajo está en puntos de CSS.

| | medido | en el código |
|---|---|---|
| cuerpo | mancha de 20 px a doble densidad → **20** | `.lee-parrafo` y las páginas de texto del short |
| interlínea | 54 px entre renglones → **27** | igual |
| entre párrafos | 108 px de un párrafo al siguiente, o sea 54 de renglón y 54 de aire → **27 de margen**, un renglón entero | igual |
| subtítulo | mancha de 24 px y renglón de 64 → **24 / 32**, en negrita | `.lee-rotulo` |
| margen lateral | mancha desde x = 33 → **16** | `.lee-scroll` y `.muro-hoja[data-sinfoto]` |
| alineación | en bandera, nunca justificado | `text-align: left` |
| guiones | ninguno: no parte palabras | `hyphens: none` |

**Cómo se sacó el cuerpo de 20**, que es lo que se resistía: la mancha de una
línea —lo que ocupa de alto una fila de letras sin palos ni colas— se puede
medir en una captura. En las suyas son 20 píxeles. Se pintó la misma pantalla
nuestra a 19, a 20 y a 21 y se midió igual: salió 19, 20 y 21. O sea que su
cuerpo es 20 y el nuestro era 19. Ese 5 % es lo que él veía y lo que yo no
encontraba mirando números de CSS, porque el 19 estaba bien medido… sobre una
captura vieja.

La herramienta está en `scripts/aire.mjs` y en el guion de medida que usa; para
repetirlo con una tanda nueva, se mide una captura suya y una nuestra con el
mismo procedimiento y se comparan las tres cifras: mancha, renglón y párrafo.

## Lo que NO se copia

El subtítulo de algunas de sus capturas va sobre un recuadro morado de
rotulador. El nuestro no: es blanco y en negrita, sin fondo.

Su rayo es amarillo; el nuestro es el azul de la app, #2f9bff, que es el de
`.lee-idea` en el lector de resúmenes.
