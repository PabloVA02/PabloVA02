# La letra de leer

Aquí viven los dos ficheros de fuente de los que sale `src/fuentes.css`, que es
lo que carga la app. `fuentes.css` NO se edita a mano: lo escribe
`scripts/fuente-lectura.py`, que recorta estos dos al español y los mete dentro
del CSS en base64.

    pip install fonttools brotli
    python3 scripts/fuente-lectura.py

## De dónde salen

**Vollkorn**, de Google Fonts, licencia SIL Open Font License 1.1. Los dos
ficheros `vollkorn-latin-*.woff2` son el subconjunto latino de la variable, tal
como los sirve `fonts.gstatic.com`. Para volver a bajarlos:

    curl -A "Mozilla/5.0 … Chrome/120.0 Safari/537.36" \
      "https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400..700;1,400..700&display=block"

y de esa hoja se cogen las dos `url()` del bloque `/* latin */` —la redonda y la
cursiva—. **El agente de usuario importa**: sin uno de navegador moderno, Google
devuelve `ttf` en vez de `woff2`.

Los `*-curva.woff2` son los recortados, y los escribe el guion. Están aquí solo
para poder comparar tamaños; lo que usa la app es el base64 de `fuentes.css`.

## Por qué Vollkorn y no Literata

Pablo pidió Literata el 28 de agosto, «y si da problemas, Source Serif 4,
Newsreader o Vollkorn». Literata da uno, y es justo el de su tercer punto: **no
tiene cifras de estilo antiguo**. Lo que sirve Google no trae la característica
`onum`, y sus diez cifras suben a 714 sobre una altura de mayúscula de 700, o
sea todas de caja alta y ninguna baja de la línea base. Source Serif 4 y
Newsreader, igual.

Vollkorn es la única de las cuatro que las trae, y encima **de serie**: cinco de
sus diez cifras bajan de la línea, y lo que lleva como característica opcional
es `lnum`, para volver a las de caja alta. Así que `font-variant-numeric:
oldstyle-nums` sale solo, con no encender `lnum`.

De propina pesa la mitad: 43 kB por cara recortada, contra los 81 de Literata.
