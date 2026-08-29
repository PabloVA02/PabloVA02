# Dónde buscar imágenes que se puedan usar en la app

Uso comercial permitido en todas las de esta lista. Las condiciones concretas
están al final, y conviene leerlas una vez.

## Fotografía general

| sitio | qué tiene | licencia |
|---|---|---|
| unsplash.com | Fotografía de autor, la mejor calidad media del grupo | Licencia Unsplash |
| pixabay.com | Fotos, ilustraciones y vectores | Licencia Pixabay |
| stocksnap.io | Fotos, catálogo pequeño pero limpio | CC0 |
| burst.shopify.com | Fotos, muy orientado a producto y objetos | Licencia propia |
| kaboompics.com | Interiores, texturas, bodegones | Licencia propia |
| lifeofpix.com | Paisaje y urbano, muy atmosférico | Dominio público |
| gratisography.com | Rarezas y humor visual | Licencia propia |
| openverse.org | Buscador que rastrea muchos repositorios a la vez | Filtra por licencia |

## Ciencia, espacio y naturaleza

| sitio | qué tiene | licencia |
|---|---|---|
| images.nasa.gov | Espacio, Tierra desde órbita, misiones | Dominio público |
| eso.org/public/images | Telescopios del sur, cielo profundo | CC BY (pide crédito) |
| esahubble.org y esawebb.org | Hubble y Webb | CC BY (pide crédito) |
| oceanservice.noaa.gov y photolib.noaa.gov | Mar, atmósfera, meteorología | Dominio público |
| usgs.gov | Geología, volcanes, ríos, mapas | Dominio público |
| phil.cdc.gov | Microbiología, salud pública | Mayoría dominio público |
| biodiversitylibrary.org | Láminas de historia natural escaneadas | Mayoría dominio público |

## Museos y archivos

Aquí está lo bueno para las aperturas históricas: papiros, instrumentos,
grabados antiguos, láminas anatómicas.

| sitio | qué tiene | licencia |
|---|---|---|
| si.edu/openaccess | Smithsonian, millones de piezas | CC0 |
| metmuseum.org (Open Access) | Met de Nueva York | CC0 |
| clevelandart.org | Cleveland Museum of Art | CC0 |
| rijksmuseum.nl | Pintura y grabado holandés | Dominio público |
| artic.edu | Art Institute of Chicago | CC0 en buena parte |
| getty.edu (Open Content) | Getty | Dominio público |
| parismuseescollections.paris.fr | Museos de París | CC0 en buena parte |
| digitalcollections.nypl.org | Biblioteca Pública de Nueva York | Dominio público |
| loc.gov | Biblioteca del Congreso, fotografía histórica | Variable, mirar ficha |
| wellcomecollection.org | Medicina e historia de la ciencia | CC0 y CC BY |
| europeana.eu | Agregador de archivos europeos | Filtra por licencia |
| publicdomainreview.org | Rarezas seleccionadas a mano | Dominio público |

## Lo que hay que tener en cuenta

**Dominio público y CC0** son lo más seguro que existe: puedes usarlas,
modificarlas y no debes nada a nadie.

**CC BY** también vale para uso comercial, pero **obliga a poner el crédito**.
Para eso está el campo `credito_portada` de la cabecera del short. Si no lo
pones, estás incumpliendo la licencia.

**Unsplash, Pixabay y Pexels** tienen licencia propia, no Creative Commons.
Permiten uso comercial sin atribución, y prohíben una cosa: revender la imagen
como producto en sí. Meterla como portada dentro de una app que tú has
construido no es eso, así que estás cubierto. Vender un póster con esa foto, sí
lo sería.

**«No known copyright restrictions»** no es lo mismo que dominio público. Lo usan
la Biblioteca del Congreso y Flickr Commons para decir que ellos no conocen
restricciones, no que no las haya. Hay que mirar cada ficha.

**Caras.** Ninguna licencia de imagen te da derechos sobre la persona
fotografiada. Una foto libre con una cara reconocible no se puede usar de forma
que parezca que esa persona respalda el producto o que ilustra algo que le
atribuye una condición. Para las portadas de esta app, mejor evitar rostros
identificables.

**Nunca Google Imágenes.** Es un buscador, no una licencia.

**Registro obligatorio.** Cada imagen que entre en la app se anota en
`assets/portadas.csv` con nombre de archivo, sitio de origen, URL exacta,
licencia y fecha de descarga. Es la única prueba de que la adquisición fue
legal, y el día que alguien pregunte no se puede reconstruir de memoria.

---

# Qué tamaño tienen que tener las portadas

## Al descargar: lo más grande que haya

Del banco de imágenes se baja siempre **la versión original**, la más grande
disponible. No se decide ahí la calidad final: se guarda el máximo y se recorta y
comprime después. Reducir una imagen no cuesta nada; ampliarla la estropea sin
remedio, y el día que quieras cambiar de tamaño querrás tener el original.

Esos originales van a `originales/`, fuera del repositorio de código y con copia
de seguridad aparte. Es lo único del proyecto que no se puede volver a generar.

## Lo que se publica en la app

| uso | tamaño | formato | peso objetivo |
|---|---|---|---|
| Portada a pantalla completa | **1440 × 2560** (9:16) | AVIF, con WebP de reserva | 150–250 KB |
| Miniatura del feed o de listas | **480 × 854** | AVIF / WebP | 30–50 KB |

**1440 píxeles de ancho es el mínimo para que se vea perfecta en cualquier
móvil.** Es el ancho físico de las pantallas más densas que hay (los Galaxy
Ultra), y por encima de eso ningún teléfono actual puede mostrar más detalle:
solo estarías gastando datos y memoria a cambio de nada.

## El peso del archivo no es lo que puede tirar la app

Esta es la parte que casi nadie tiene en cuenta y la que de verdad hace fallar
una aplicación con muchas imágenes.

Un AVIF de 200 KB **no ocupa 200 KB en memoria**. Ocupa lo que ocupe una vez
descomprimido, y eso se calcula así: ancho × alto × 4 bytes. Para una portada de
1440 × 2560 son unos **14 MB de RAM por imagen**. Diez portadas cargadas a la vez
son 140 MB, y ahí es donde el sistema empieza a matar la aplicación.

De modo que la regla es esta:

- **Nunca decodificar una imagen más grande de lo que se va a mostrar.** Si en el
  feed la portada ocupa una tarjeta pequeña, se carga la miniatura, no la de
  1440. Las librerías de imágenes lo hacen si les indicas el tamaño de destino.
- **Limitar la caché en memoria** a un número concreto de imágenes o a una
  fracción del montón disponible, y dejar que el resto viva en la caché de disco.
- Una sola portada a pantalla completa cargada de golpe no es problema. Veinte
  cargadas «por si acaso» sí lo son.

## Y la cuenta de las mil portadas

Mil portadas a 200 KB son unos 200 MB, más las miniaturas. Eso no se empaqueta
dentro de la aplicación: se sirve desde un almacenamiento externo y se descarga
según hace falta, guardando en caché de disco lo ya visto. En la app solo van las
imágenes de la primera pantalla, para que arranque con algo mientras carga.
