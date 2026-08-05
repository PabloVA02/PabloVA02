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

## Cómo se busca una

```
node scripts/foto.mjs buscar "eddystone lighthouse"
node scripts/foto.mjs ficha "File:Eddystone Lighthouse RMG BHC1796.tiff"
node scripts/foto.mjs ver   "File:Eddystone Lighthouse RMG BHC1796.tiff" /tmp/x.jpg
```

- `buscar` da hasta doce candidatas ordenadas por tamaño, con su licencia. Las
  marcadas con ✓ tienen ancho de sobra.
- `ficha` saca el autor, la fecha y la licencia **de Commons**, y escupe el
  objeto listo para pegar.
- `ver` se la descarga. **Hay que mirarla siempre antes de meterla.** El
  buscador acierta con el nombre y falla con el contenido más de lo que
  parece: sale el edificio equivocado, o un plano técnico donde se pedía una
  fotografía, o una reproducción con el marco incluido.

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

**3. Mil doscientos de ancho como mínimo.** La banda ocupa el ancho entero de
la pantalla a doble densidad. Por debajo de eso se ve blanda.

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
