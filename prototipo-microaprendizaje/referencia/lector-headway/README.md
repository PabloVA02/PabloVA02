# Cómo se lee una página de texto, según las capturas de Pablo

Tres de las cincuenta y nueve que mandó el 28 de agosto de 2026 con este
encargo: *«el tamaño del texto y de todo eso te he dicho que sea igual que
como hacemos nosotros en los libros; mira, te paso ejemplos de imágenes,
tienes que hacerlo exactamente así»*.

Se guardan tres y no las cincuenta y nueve porque las tres enseñan lo mismo y
esto es una referencia, no un archivo.

## Qué se saca de ellas

| | lo que se ve | dónde está en el código |
|---|---|---|
| párrafo | serifa, 19 sobre 27, blanco roto | `.lee-parrafo` y las páginas de texto del short |
| alineación | **en bandera**, nunca justificado | `text-align: left` |
| guiones | **ninguno**: no parte palabras | `hyphens: none` |
| subtítulo | serifa, más grande, en negrita | `.lee-rotulo` |
| rayo | icono a la izquierda, sangrado, sin recuadro | `.lee-idea` |
| el texto | **llega hasta el borde de abajo** y sigue en la pantalla siguiente | `scripts/reparte.mjs` |

## Lo que NO se copia

El subtítulo de sus capturas va sobre un recuadro morado de rotulador. El
nuestro no: Pablo dijo «como los que ponemos en LOS LIBROS», y los nuestros
son blancos y en negrita, sin fondo.

Su rayo es amarillo; el nuestro es el azul de la app, #2f9bff, que es el de
`.lee-idea` en el lector de resúmenes.
