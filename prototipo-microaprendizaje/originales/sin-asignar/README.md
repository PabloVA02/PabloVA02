# Fotografías guardadas, todavía sin tema

Todas las que ha mandado Pablo y **no pueden entrar aún**. Ninguna se pierde:
esta carpeta va al repositorio como el resto de `originales/`.

Están aquí y no en `originales/` a secas por una razón concreta:
`scripts/portadas.mjs` recorre `originales/` y **toma el nombre del archivo,
sin extensión, como identificador del tema**. Sueltas ahí arriba se
convertirían en `portadas/Galaxia.avif` y `Galaxia` pasaría a ser el nombre de
un short. Una subcarpeta no la mira, así que aquí esperan sin estorbar.

**Los nombres son los suyos, tal cual.** No se traducen ni se normalizan: son
la única pista de a qué tema va cada una, y una pista reescrita deja de serlo.

## El listón, que ahora es más alto

Pablo, el 29 de agosto por la tarde: «que se vean lo mejor que se puede, la
máxima resolución que te pase, pues esa, o la máxima que permitan los mejores
móviles del mundo y los que vendrán; que se vea a una calidad espléndida. **Si
hay alguna que no es de esa calidad me lo dices y no la pones.**»

- **Techo: 2160 px de ancho** (2160 × 3840, el vertical de 4K).
- **Suelo: 1644 px**, el ancho del Xperia 1, el móvil más fino que se vende.
- Y entre medias, lo que dé el original: **nunca se estira**.

La columna que manda es «9:16 da»: el ancho que queda **después** de recortar
al formato vertical de la portada. Una foto apaisada tiene mucho ancho y da una
portada pequeña.

## ESTAS NO LLEGAN AL SUELO, Y POR ESO NO ESTÁN PUESTAS

| archivo | píxeles | 9:16 da | le faltan | para qué era |
|---|---|---|---|---|
| `CRUJIRSENUDILLOS.avif` | 900 × 601 | **338** | 1.306 | Por qué crujen los nudillos |
| `BombaAtómica.jpg` | 960 × 1147 | **645** | 999 | — |
| `HuellaDactilar.avif` | 900 × 1350 | **759** | 885 | Para qué sirven las huellas |
| `Pelirrojo.avif` | 900 × 1350 | **759** | 885 | Los pelirrojos y la anestesia |
| `Resaca.avif` | 900 × 1350 | **759** | 885 | Por qué duele la resaca |
| `VenasAzules.jpg` | 2648 × 2358 | **1326** | 318 | Por qué se ven azules las venas |
| `CopoDeNieve.jpg` | 1944 × 2592 | **1458** | 186 | — |

Los cinco primeros son casos de libro: **900 px de ancho justos y ya en AVIF**,
que es la marca de una imagen guardada de una vista previa —la página de
resultados, el visor de un banco de fotos— en vez de descargada del original.
La foto grande existe; lo que se guardó fue la chica.

`VenasAzules.jpg` es distinto: es grande (2648 × 2358) pero **casi cuadrada**, y
al recortarla a 9:16 se queda en 1326. No es que la imagen sea mala, es que no
tiene forma de portada. Con una versión vertical de lo mismo valdría.

**Las cuatro con tema apuntado bloquean un short que ya está escrito.** Son lo
único que les falta para salir en la app.

## Las que sí dan la talla y solo esperan su texto

**Cielo y espacio**, de la tanda de las 18:00:

| archivo | píxeles | 9:16 da | sale a |
|---|---|---|---|
| `AuroraBoreal.jpg` | 5000 × 7500 | 4219 | 2160 |
| `MarAzulPorque.jpg` | 4000 × 6000 | 3375 | 2160 |
| `Glaciar.jpg` | 3903 × 5742 | 3230 | 2160 |
| `LunaHorizonte.jpg` | 3822 × 5733 | 3225 | 2160 |
| `Estrellas.jpg` | 3648 × 5472 | 3078 | 2160 |
| `CuantoLeQuedaalaluna.jpg` | 3032 × 5391 | 3032 | 2160 |
| `Arcoiris.jpg` | 3264 × 4928 | 2772 | 2160 |
| `Rayo.jpg` | 2459 × 3281 | 1846 | 1846 |
| `Galaxia.jpg` | 2003 × 3000 | 1688 | 1688 |
| `Cohete.jpg` | 1888 × 2956 | 1663 | 1663 |

**Bichos y plantas**, de la de las 18:37. **Las nueve pasan el suelo**, siete
llegan al techo y ninguna hay que descartarla:

| archivo | píxeles | 9:16 da | sale a |
|---|---|---|---|
| `Luciernagas.jpg` | 3996 × 5858 | 3295 | 2160 |
| `Arbol.jpg` | 4000 × 6000 | 3375 | 2160 |
| `Pulpo.jpg` | 3456 × 5184 | 2916 | 2160 |
| `ariel_hernandez-butterfly-10303163.jpg` | 3888 × 5184 | 2916 | 2160 |
| `Girsasol.jpg` | 3024 × 4032 | 2268 | 2160 |
| `BallenaAzul.jpg` | 3000 × 4000 | 2250 | 2160 |
| `AbejaHexagonal.jpg` | 2918 × 3891 | 2189 | 2160 |
| `Buho.jpg` | 2280 × 3420 | 1924 | 1924 |
| `Colibri.jpg` | 2484 × 3312 | 1863 | 1863 |

Cinco pasan el suelo pero sin llegar al techo: 1663, 1688, 1846, 1863 y 1924.
No hay nada que arreglar —se ven bien en el mejor móvil que existe— pero si
aparece una versión mayor de esas mismas, mejor esa.

## Cómo se meten cuando lleguen los textos

1. Llega el `.md` con su cabecera, que trae `portada: "<id>.avif"`.
2. Se renombra la fotografía a ese `<id>` y se **mueve** a `originales/`.
3. `node scripts/portadas.mjs <id>` la recorta y la guarda a lo que dé, hasta
   2160.
4. Se rellena su fila en `assets/portadas.csv` —sin fila, la portada no entra—.
5. `node scripts/catalogo.mjs > src/historias/curiosidades.ts` y el short entra
   solo.

## Y una que ya no está aquí

`Gato.avif`, de 900 px, se ha ido a `originales/retirados/` como
`Gato-900px.avif`: llegó una versión buena —2955 × 3694— y esa sí sirve para
«Por qué ronronean los gatos». **Retirada no es borrada**: en `retirados/` el
guion no la vuelve a procesar y el archivo sigue ahí.

## Lo que falta y no me puedo inventar

**La procedencia de cada una.** El CSV lleva fuente, URL original, licencia y
fecha de descarga porque es la prueba de que la imagen se obtuvo legalmente, y
eso lo sabe Pablo. Su `FUENTES-IMAGENES.md` dice dónde busca —Unsplash,
Pixabay, Pexels, museos— pero no cuál salió de dónde.
