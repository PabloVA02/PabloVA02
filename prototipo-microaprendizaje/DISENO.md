# La pantalla de lectura

Esto es el diseño aprobado de la pantalla donde se lee un short. Está cerrado.
Si algo del código no coincide con lo que dice aquí, manda esto.

El origen es la maqueta que aprobó Pablo, y está guardada en el repositorio:
`referencia/maqueta-aprobada/maqueta-cesar.html`. Su `<style>` se copió regla
a regla al final de `src/styles.css`, bajo el rótulo «EL MODELO BEIGE, CALCADO
DE LA MAQUETA APROBADA».

Estuvo solo publicada como artefacto —`bef12080-…`— y ese enlace ya no existe:
el 27 de agosto Pablo dejó publicados únicamente el simulador de la app y el
mirador de shorts. Antes de borrarlo se trajo el fichero aquí, porque era la
única de las veintitrés páginas publicadas con algo que no estuviera ya en el
repositorio. El porqué, en el `README.md` de esa carpeta.

## Por qué las medidas van en cqw y no en puntos

En la maqueta, la pantalla del móvil es el contenedor y todo se mide contra su
ancho. Por eso `.muro-pagina` declara `container-type: inline-size` y las
medidas van en `cqw`: así 4,55cqw vale aquí exactamente lo que vale allí, en
cualquier ancho de móvil.

Traducirlo a puntos fue el error que costó cuatro rondas. Se redondeaba cada
valor —4,55cqw a 17,5 puntos, 5,8cqw a 22— y a la tercera suma ya no cuadraba
nada. **No se vuelve a traducir.**

## Las medidas

| qué | cuánto | en un móvil de 390 |
|---|---|---|
| banda de imagen | 28 % del alto | 230 pt |
| margen del cuerpo | 6,4cqw arriba y abajo, 5,8cqw a los lados | 25 y 22,6 |
| barra de páginas | de 5cqw a 5cqw, 0,42cqw de grueso | 19,5 y 1,6 |
| pie de foto | 2,75cqw, cursiva, opacidad 0,7 | 10,7 |
| título | 4,4cqw, palo seco, 700, versalitas a 0,13em | 17,2 |
| texto de lectura | 4,55cqw, con remates, interlínea 1,52 | 17,7 |
| capitular | 13,5cqw, solo en la portada | 52,7 |
| cifra del dato | 7,6cqw / su frase 3,4cqw | 29,6 / 13,3 |
| botones y «Seguir» | 3,05cqw | 11,9 |

El fondo es `#222222` en las cuatro pantallas, sin excepción y sin grano: es
`--fondo`, el mismo de la estantería, del perfil y de los ajustes. Fue beige
`#f2ece1` mientras la maqueta era de papel; Pablo pidió un único fondo para
toda la app y el beige se fue. La letra va en crema `#f2ece1` —los titulares y
lo destacado— y el cuerpo en `#c4bcb0`, que es el gris cálido de la maqueta
dado la vuelta. Los cinco acentos van levantados dentro del muro, que si no la
capitular y el «Seguir» se apagan sobre el gris.

## Lo que NO se hace

Cada una de estas cosas estaba en la app y hubo que quitarla porque la maqueta
no la tiene. No se vuelven a meter.

- **A la foto no se le toca nada.** Ni filtro de saturación o contraste, ni
  zoom lento de reposo, ni relleno desenfocado por debajo, ni tinte por encima,
  ni escalar la banda al pasar de página, ni moverla en contra del dedo. Va
  recortada a su caja y centrada donde diga su `foco`, y ya. Es una petición
  literal de Pablo: «no cambies el efecto de la foto, debe ser tal cual te la
  paso». Lo hace la prop `plana` de `<Fotografia>`.
- **No se equilibran los saltos de línea.** Nada de `text-wrap: balance` en el
  título ni `pretty` en el texto: partían en otro sitio que la maqueta.
- **No hay rótulo de página, ni índice, ni etiqueta de minutos, ni insignia, ni
  marca flotando sobre la foto, ni contador.** Todo eso venía del modelo oscuro
  y en la maqueta no está.
- **Un solo tamaño de lectura.** La entrada de la portada y el texto de las
  tres páginas miden lo mismo. No se toca ni para que quepa más.

## El título, en una línea. Siempre

Pablo, sin excepción: «todos los títulos deben ocupar una línea, nunca más de
una». Contarle las palabras no lo garantiza, porque lo que decide si cabe no
es cuántas palabras tiene sino cuánto mide pintado, y eso cambia con el móvil
y con la letra que tenga instalada. Medidos los 757 títulos con la tipografía
del título: **solo 31 caben en una línea en todas las pantallas**.

Así que va garantizado en dos sitios:

- `white-space: nowrap` en el CSS, para que no parta nunca.
- `useUnaLinea` en `Shorts.tsx` mide el título ya pintado y, si se sale, lo
  encoge lo justo para entrar. El suelo está en el 78 %.

El título corto sigue siendo el objetivo —encogido se nota—, y el validador lo
persigue: avisa por encima de 24 letras. El renglón más estrecho que
soportamos, el de un móvil de 320, da 283 puntos, o sea **21 letras**.

## La barra de arriba

Un tramo por **página**, o sea tres, no cuatro. En la portada está entera
vacía porque aún no se ha leído nada. Del color del tema.

## El pie de cada pantalla

- **Portada:** solo «Seguir →».
- **Páginas de en medio:** nada.
- **Última:** los botones de Guardar y Compartir, y debajo «Siguiente short ↓»,
  porque la siguiente historia se pide hacia abajo y a los lados se pasan las
  páginas de esta.

## Los gestos

- Tocar la **derecha** avanza; el **tercio izquierdo** vuelve. El tercio es
  estrecho a propósito: se avanza mil veces por cada vez que se vuelve.
- Desde la portada las dos mitades avanzan, porque no hay nada detrás.
- Arrastrar de lado hace lo mismo. Hacia abajo desde la última, siguiente
  historia.

## El texto

Justificado, con partición de palabras (`hyphens: auto`, mínimo seis letras y
nunca menos de tres a un lado) y la última línea a la izquierda. Sin justificar
sobraban 24 puntos de media en el margen derecho. La partición la hace el
navegador con el diccionario del `lang="es"` del documento.

## Que quepa en cualquier móvil

- Por debajo de 520 de ancho, la app ocupa **la pantalla entera**, mida lo que
  mida. El tope de 430 × 932 solo existe para que en un ordenador no se estire
  de lado a lado de un monitor. Con el tope puesto en todas partes, un iPhone
  16 Pro Max y un Pixel 9 Pro XL dejaban hueco por el borde y asomaba el fondo.
- Por debajo de 700 de alto, la banda de imagen baja del 28 % al 18 %: en un
  iPhone SE la entrada no cabía. Lo que cede es la imagen, nunca el tamaño de
  lectura ni los márgenes.

Comprobado en once tamaños, de un Android de 320 × 640 a un Pixel 9 Pro XL.

## Sólo se montan cinco historias

`VECINAS = 2` en `Shorts.tsx`. Cada historia tiene una ranura que no se
desmonta nunca —así el desplazamiento conserva su altura y el observador que
dice cuál está delante se monta una sola vez— y dentro solo hay historia si
está a dos o menos de la que se lee. Antes se montaban las 757 a la vez y
raspaba. Con esto, 61 fotogramas por segundo.
