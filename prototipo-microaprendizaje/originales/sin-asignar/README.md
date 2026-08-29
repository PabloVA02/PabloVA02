# Portadas guardadas, todavía sin tema

Catorce fotografías que mandó Pablo el 29 de agosto por la mañana, en
`Archivo_44.zip`, con este recado: **«guarda estas portadas, ahora te paso el
texto y las metemos y el título»**.

Están aquí y no en `originales/` a secas por una razón concreta:
`scripts/portadas.mjs` recorre `originales/` y **toma el nombre del archivo,
sin extensión, como identificador del tema**. Sueltas ahí arriba se
convertirían en `portadas/Cebolla.avif` y `Cebolla` pasaría a ser el nombre de
un short. Una subcarpeta no la mira —solo acepta ficheros con extensión de
imagen—, así que aquí esperan sin estorbar, igual que `retirados/`.

**Los nombres son los suyos, tal cual.** No se han traducido ni normalizado:
son la única pista de a qué tema va cada una, y una pista que se reescribe deja
de ser una pista.

## Cómo se meten cuando lleguen los textos

1. Llega el `.md` con su cabecera, que trae `portada: "<id>.avif"`.
2. Se renombra la fotografía a ese `<id>` y se **mueve** a `originales/`.
3. `node scripts/portadas.mjs <id>` la recorta a 1440 × 2560 y escribe el AVIF
   y el WebP.
4. Se rellena su fila en `assets/portadas.csv` —sin fila, la portada no entra—.
5. `node scripts/catalogo.mjs > src/historias/curiosidades.ts` y el short entra
   solo.

## Lo medido, que es lo que hay que mirar antes de darlas por buenas

El ancho útil es lo que queda **después** de recortar a 9:16, que es el recorte
de la regla: `min(ancho, alto × 9/16)`. Por debajo de 1440 la imagen hay que
estirarla y se nota en un móvil bueno.

| archivo | píxeles | 9:16 deja | MB |
|---|---|---|---|
| `Cebolla.jpg` | 2592 × 4608 | 2592 | 1,4 |
| `Cebra.jpg` | 5344 × 9504 | 5344 | 6,6 |
| `Cielo.jpg` | 3000 × 4000 | 2250 | 0,8 |
| `Flamenco.jpg` | 2466 × 3611 | 2031 | 0,7 |
| `FrioEnLosDientes.jpg` | 2250 × 4000 | 2250 | 1,0 |
| `Hielo.jpg` | 3328 × 5916 | 3328 | 1,7 |
| `Mar.jpg` | 1993 × 3000 | 1688 | 0,9 |
| `Miel.jpg` | 2610 × 3480 | 1958 | 0,3 |
| `NoTenemosRecuerdos3años.jpg` | 3648 × 5472 | 3078 | 2,7 |
| **`PielDeGallina.jpg`** | 1668 × 2500 | **1406** | 0,5 |
| `Porque las hojas se pone asi en otoño.jpg` | 3375 × 5999 | 3374 | 3,3 |
| `Porque nos escuchamos mal en los audios.jpg` | 4480 × 6720 | 3780 | 3,3 |
| `PoruqeSeNoduermelapierna.jpg` | 3900 × 5184 | 2916 | 1,4 |
| `Ronrojarse.jpg` | 3686 × 5529 | 3110 | 3,7 |

**`PielDeGallina.jpg` se queda en 1406, treinta y cuatro píxeles por debajo de
los 1440.** Es poquísimo y probablemente no se vea, pero está dicho, que es lo
que pidió Pablo: «dime si alguna quedó por debajo de 1440 px de ancho porque el
original no daba para más». Si tiene la misma foto un poco más grande, mejor
esa; si no, entra igual.

## Lo que falta y no me puedo inventar

**La procedencia de cada una.** El CSV lleva fuente, URL original, licencia y
fecha de descarga porque es la prueba de que la imagen se obtuvo legalmente, y
eso lo sabe Pablo, no el programa. Hasta que lo diga, sus filas irán con la
licencia en `PENDIENTE`, como la de la gravedad.
