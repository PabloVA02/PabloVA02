# Portadas guardadas, todavía sin tema

Fotografías que ha mandado Pablo y que **no pueden entrar aún**, casi todas
porque el short que ilustran no está escrito: siguen en su `COLA.md` con la
casilla sin marcar. En cuanto llegue el `.md`, su cabecera dice cómo se llama la
imagen y entran solas.

Están aquí y no en `originales/` a secas por una razón concreta:
`scripts/portadas.mjs` recorre `originales/` y **toma el nombre del archivo,
sin extensión, como identificador del tema**. Sueltas ahí arriba se
convertirían en `portadas/Everest.avif` y `Everest` pasaría a ser el nombre de
un short. Una subcarpeta no la mira —solo acepta ficheros con extensión de
imagen en la raíz—, así que aquí esperan sin estorbar, igual que `retirados/`.

**Los nombres son los suyos, tal cual.** No se han traducido ni normalizado:
son la única pista de a qué tema va cada una, y una pista que se reescribe deja
de ser una pista.

## LAS CINCO PEQUEÑAS, QUE ES LO QUE HAY QUE MIRAR

Pablo, el 29 de agosto por la tarde: «que se vean lo mejor que se puede, la
máxima resolución que te pase, pues esa, o la máxima que permitan los mejores
móviles del mundo y los que vendrán; que se vea a una calidad espléndida».

El listón de «espléndida» son **1644 px de ancho**, que es lo que tiene el
Xperia 1, el móvil más fino que se vende. **Estas cinco no llegan ni de lejos:**

| archivo | píxeles | 9:16 deja | le faltan |
|---|---|---|---|
| `CRUJIRSENUDILLOS.avif` | 900 × 601 | **338** | 1.306 px |
| `Gato.avif` | 900 × 1125 | **633** | 1.011 px |
| `HuellaDactilar.avif` | 900 × 1350 | **759** | 885 px |
| `Pelirrojo.avif` | 900 × 1350 | **759** | 885 px |
| `Resaca.avif` | 900 × 1350 | **759** | 885 px |

Las cinco vienen ya en AVIF y las cinco miden 900 px de ancho justos. Eso no es
casualidad: es la marca de una imagen **guardada de una vista previa** —de la
página de resultados, del visor de un banco de fotos— y no descargada del
original. La foto grande existe; lo que se guardó fue la pequeña.

Puestas de portada habría que estirarlas entre dos y cuatro veces, y eso se ve
en un móvil bueno: los bordes se emborronan y las líneas finas se hacen
escalones. Es exactamente lo contrario de lo que él pide, así que **no entran
hasta que llegue la versión grande**.

**La de los nudillos es la urgente**, porque su short SÍ está escrito
—`por-que-crujen-los-nudillos`, dos partes— y es lo único que le falta para
salir en la app. Las otras cuatro no corren prisa: sus temas todavía no
existen.

Las seis que venían con ellas y sí daban la talla —pan, moreno, mosquito,
Everest, helado y agua caliente— ya están puestas: llegaron sus textos esa misma
tarde y salieron de aquí.

## Cómo se meten cuando lleguen los textos

1. Llega el `.md` con su cabecera, que trae `portada: "<id>.avif"`.
2. Se renombra la fotografía a ese `<id>` y se **mueve** a `originales/`.
3. `node scripts/portadas.mjs <id>` la recorta a 1440 × 2560 y escribe el AVIF
   y el WebP.
4. Se rellena su fila en `assets/portadas.csv` —sin fila, la portada no entra—.
5. `node scripts/catalogo.mjs > src/historias/curiosidades.ts` y el short entra
   solo.

## Lo que falta y no me puedo inventar

**La procedencia de cada una.** El CSV lleva fuente, URL original, licencia y
fecha de descarga porque es la prueba de que la imagen se obtuvo legalmente, y
eso lo sabe Pablo, no el programa. Su propio `FUENTES-IMAGENES.md` dice dónde
busca —Unsplash, Pixabay, Pexels, museos— pero no cuál salió de dónde. Hasta
que lo diga, sus filas van con la licencia en `PENDIENTE`.
