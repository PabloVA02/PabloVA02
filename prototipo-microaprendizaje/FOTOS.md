# Las fotografías

Cada short tiene cuatro pantallas y cada una lleva su imagen: la portada y las
tres páginas. La imagen no decora — enseña de lo que se está hablando.

## De dónde salen

De **Wikimedia Commons**, que la app pide por nombre de fichero:

```ts
foto: { archivo: "Nombre del fichero.jpg", … }
```

`urlFoto()` construye la dirección sola. **No hay que descargar nada ni meter
la imagen en el repositorio**; la pide el navegador de quien lee.

El entorno tiene abiertos `commons.wikimedia.org` y `upload.wikimedia.org`. Si
algún día vuelve el 403, es que se cerró el acceso a la red del entorno
(claude.ai/code → el botón con el nombre del entorno → engranaje → **Acceso a
la red** → Personalizado).

## SI LAS BUSCAS TÚ, PABLO: mándame el ENLACE, no la foto

Lo preguntó el 27 de agosto: «las fotos de los shorts te las voy a ir pasando
yo, ¿en qué sitio las busco para que haya espacio suficiente?». La respuesta
corta es que **no hay problema de espacio si mandas el enlace**, y sí lo hay si
mandas el fichero. El motivo está en `shorts.ts`, en `urlFoto()`:

- Una foto de Commons **no va dentro de la app**. Lo que se guarda es su
  nombre, y el móvil se la pide a Commons según va bajando por el muro. Las
  2.139 que ya hay puestas pesan CERO en el paquete.
- Una foto que llega como fichero hay que incrustarla, como las cubiertas
  dibujadas, y entonces sí pesa. Y el simulador tiene el tope de 16 MB.

Así que lo que hay que mandar es **la dirección de la página de Commons**, del
tipo `https://commons.wikimedia.org/wiki/File:Loquesea.jpg`, y de qué short es.
Lo demás lo hace `foto.mjs ficha`: saca autor, fecha, licencia y descripción de
la propia ficha de Commons, que es lo que hace falta para el pie y para los
créditos.

### Y si el «Copy» no se pega, da igual: valen cuatro formas

Pablo, el 27 de agosto: «le doy a copy, me sale copiado al portapapeles, pero
ahora no me deja pegarlo en el chat». Pasa en el móvil y no tiene arreglo por
nuestra parte, así que el arreglo es que dé igual lo que llegue. `foto.mjs
ficha` admite las cuatro:

    File:Nombre.jpg                                   el nombre de Commons
    Nombre.jpg                                        sin el «File:»
    https://commons.wikimedia.org/wiki/File:Nom.jpg   la dirección de la página
    https://…/Special:FilePath/Nombre.jpg?width=…     la de la imagen

**La más cómoda en el móvil es la dirección**: compartir → copiar enlace, o la
barra del navegador. Y tiene una ventaja escondida: de una dirección el nombre
sale DESCODIFICADO, lo que arregla solo el problema del apóstrofo. En «Solar
Orbiter’s…» el apóstrofo es tipográfico (’) y no el del teclado ('), así que
escrito a mano no lo encuentra; en la URL viene como `%E2%80%99` y sale bien.

Y si no llega nada de eso, **con decir de qué es basta**: si el nombre no está
tal cual, `ficha` lo busca por texto antes de rendirse. «La del Sol del Solar
Orbiter» lo encuentra.

### Dónde están las buenas

Las dos categorías de calidad de Commons, que son las que mira `buscar`:

    Imágenes destacadas   commons.wikimedia.org/wiki/Commons:Featured_pictures
    Imágenes de calidad   commons.wikimedia.org/wiki/Commons:Quality_images

Las dos están **ordenadas por tema** y las mantiene gente a mano exigiendo
nitidez, luz y composición. Las destacadas son unos pocos miles y son lo mejor
que hay; las de calidad son muchísimas más.

Lo que hay que mirar en la página de la foto, antes de mandarla:

1. **El tamaño**, que sale debajo de la imagen. Mínimo 1600 de ancho y dos
   megapíxeles. Menos de eso se ve borroso en un móvil moderno.
2. **Que se entienda de un vistazo.** La banda ocupa el ancho de la pantalla y
   se ve un segundo y medio: un plano general con veinte cosas dentro no dice
   nada. Fuera documentos, tablas, planos y grises apagados.
3. **Que sea bonita.** Es la regla de Pablo y manda sobre las demás.

### Y si la foto es de otro sitio

Unsplash y Pexels dejan usarlas en una app, pero traen dos problemas y
conviene saberlos antes:

- **Pesan**, porque hay que incrustarlas: no hay servidor al que pedírselas.
- **No tienen ficha.** Nuestro pie dice QUÉ se está viendo —«Óleo de
  Jean-Léon Gérôme, 1867. Walters Art Museum»—, y eso sale de los datos de
  Commons. Una foto de banco de imágenes no trae ni año, ni obra, ni sitio, así
  que el pie se queda en nada o hay que inventárselo, que es lo que no se hace.

O sea: Commons primero. Si aparece una en otro sitio que valga muchísimo la
pena, se mete, pero sabiendo lo que cuesta.

## Buscar solo entre las buenas

`buscar` **solo mira dentro de los sellos de calidad de Commons** —«Quality
images» y «Featured pictures»—, que son categorías que se reparten a mano
exigiendo nitidez, luz y composición. La diferencia es enorme: en vez de la
foto correcta y fea, sale la que además se puede mirar.

Si no sale nada con sello, `todo` busca en todo Commons. Pero entonces hay que
mirar la imagen con más cuidado todavía.

## Cómo se busca una

```
node scripts/foto.mjs tema   "eddystone lighthouse"
node scripts/foto.mjs ficha  "File:Eddystone Lighthouse RMG BHC1796.tiff"
node scripts/contacto.mjs hoja.png "File:Una.jpg" "File:Otra.jpg" …
```

- `tema` es por donde se empieza: da las categorías que existen con ese
  nombre, lo mejor de las dos primeras y además la búsqueda por texto. Las
  categorías las mantiene gente a mano y agrupan por lo que SE VE; el buscador
  de texto solo mira el nombre del fichero, y por eso «morris worm» devuelve
  una historia de los pájaros británicos del reverendo Morris.
- `buscar` y `categoria` son las dos mitades de `tema`, por si hace falta una
  sola. Las candidatas marcadas con ✓ tienen ancho de sobra.
- `ficha` saca el autor, la fecha, la licencia y la descripción **de Commons**,
  y escupe el objeto listo para pegar. La descripción importa tanto como la
  licencia: sin ella se acaba publicando el año de la fotografía como si fuera
  el de la cosa fotografiada.
- `ver` se descarga una sola.

## Mirarlas es la mitad del trabajo

**Hay que mirar cada una antes de meterla**, sin excepción. El buscador acierta
con el nombre y falla con el contenido más de lo que parece: sale el edificio
equivocado, o un plano técnico donde se pedía una fotografía, o el faro de un
tren japonés donde se pedía el de un coche. Y las fichas de Commons también se
equivocan: el boletín de mortalidad del short del seguro está guardado como «de
la ciudad de Londres» y la hoja, leída, dice Dublín.

`contacto.mjs` es para eso. Baja seis u ocho candidatas y las pone en **una
sola imagen**, cada una entera y debajo recortada como se vería en la banda, lo
que además sirve para elegir el `foco` sin ir a ciegas. Con `--grande` van una
por fila y al doble de alto, que hace falta para los detalles pequeños.

Y al final, con la app construida y servida en el 4173:

```
node scripts/mirar.mjs 11 12 13 14
```

saca **las cuatro pantallas de cada short seguidas**, con las fotos traídas de
Commons de verdad, y dice cuánto aire queda debajo del texto. Es la única
comprobación que enseña las dos cosas a la vez: si la imagen es la que toca y
si el texto llega al margen sin tapar el «Seguir».

## Antes que nada: que sea bonita y que se entienda

Es la petición de Pablo y manda sobre todo lo demás.

1. **Bonita.** La foto es lo primero que ve quien abre la app. Una imagen
   correcta pero fea hunde el short entero.
2. **Que se entienda de un vistazo qué es.** Aquí caen dos clases de imagen
   que parecen buenas en la hoja de contacto y no lo son en la banda: los
   **carteles y las láminas** —un grabado gris, un plano técnico, una placa
   escaneada— y los **objetos ampliadísimos**, donde se ve una textura y no se
   sabe de qué. La banda es un 28 % del alto, así que una imagen muy apaisada
   se recorta a un trozo: la placa de matrícula española mide 2844 × 509 y en
   la banda solo caben dos caracteres.
3. **La de la portada, la más bonita de las cuatro.** Se elige primero.
4. Que hable exactamente de lo que cuenta la página es **deseable, no
   obligatorio**. Antes que una foto fea que ilustra el párrafo, va una bonita
   que ilustra el tema. En el short de las matrículas las cuatro son coches de
   La Habana, y funciona mejor que cuatro placas.

`contacto.mjs` enseña la banda recortada debajo de cada candidata justo para
poder juzgar el punto 2 sin construir la app.

## Las tres reglas que no se saltan

**1. La licencia se lee, no se supone.** El pie se publica: es una afirmación
de hecho. Solo hay dos maneras de justificarla en el código:

- `pdPorEdad: 1844` — para una obra **plana** (cuadro, grabado, miniatura,
  sello) cuyo autor lleva más de setenta años muerto. La fotografía de una
  obra plana no crea derechos nuevos, así que se justifica sola.
- `fuente: "https://commons.wikimedia.org/wiki/File:…"` — la ficha de donde
  sale la licencia.

Lo que **no** vale es dar por hecho que la foto de una estatua o de una moneda
es libre porque el objeto sea antiguo. El objeto lo será; la fotografía tiene
volumen, luz elegida y autor propio. Ese error ya se cometió con el denario de
César y con el Augusto de Prima Porta.

Si la licencia es una CC BY o CC BY-SA, **hay que nombrar al autor de verdad**.
«Wikimedia Commons» no es un autor: es el sitio donde está alojada.

`node scripts/revisa-shorts.mjs` cuenta aparte las fotos sin justificar.

**2. El pie dice qué se está viendo, no quién lo hizo.** No es una firma. Dice
qué clase de objeto es, de qué año y de dónde salió:

> Óleo de Jean-Léon Gérôme, 1867. Walters Art Museum, Baltimore.
> Denario de plata acuñado en Roma el año 44 a. C. La leyenda dice CAESAR DICT
> PERPETVO: César, dictador perpetuo.

**3. Mil seiscientos de ancho y dos megapíxeles como mínimo.** La banda ocupa
el ancho entero de la pantalla, y los móviles de hoy pintan a tres veces la
densidad: 430 × 3 son 1290 puntos solo de ancho, y eso sin contar que `foco`
recorta. Con 1200 justos ya se ve blanda.

**4. Y sobre todo: que sea bonita y que se entienda de un vistazo.** Es la
regla que manda sobre las demás, y es de Pablo: «que sean bonitas, porque hay
imágenes que no se aprecia bien qué son».

La banda mide 28 % del alto de un móvil. Ahí no cabe un documento, ni una
tabla, ni un plano lleno de letra pequeña, ni una escena con quince cosas: se
ve una franja borrosa y el lector no sabe qué está mirando. Lo que funciona es
**una cosa grande, bien iluminada y con color**.

Se descarta, aunque el tema encaje:

- documentos, tablas, boletines y páginas de libro;
- diagramas y planos con rótulos que no se pueden leer a ese tamaño;
- blanco y negro apagado, sin contraste, donde no se distingue la forma;
- fotos con quince elementos y ninguno protagonista;
- cualquier cosa con marca de agua.

Mejor una foto preciosa que se entiende y que solo roza el tema, que una
exacta que parece una mancha. Si al mirar la franja de arriba hay que pensar
qué es, no vale.

**Y la de la portada es la más bonita de las cuatro.** No la más exacta: la
más bonita. Es la que decide si alguien entra en el short o pasa de largo, así
que de las candidatas que se hayan bajado, la mejor va delante y las otras se
reparten por las páginas. Si solo hay una imagen buena de un tema, va en la
portada.

## Qué imagen va en cada pantalla

Cuatro imágenes **distintas entre sí**, una por pantalla, y cada una habla de
su página. En el short de César: el cuadro del asesinato en la portada, el
denario con su cara en la página del casi rey, la muerte de Gérôme en la de la
emboscada y el Augusto de Prima Porta en la del imperio que vino después.

`foco` decide qué parte no se pierde al recortar, en `object-position`. Hay que
mirarlo: la banda es un 28 % del alto, así que de un cuadro apaisado se ve una
franja. Si lo importante está arriba, `foco: "50% 20%"`.

**A la foto no se le toca nada más.** Ni filtros, ni zoom, ni tinte. Está en
`DISENO.md` y es una petición literal de Pablo.
