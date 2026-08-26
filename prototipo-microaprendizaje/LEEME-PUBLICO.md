# Curva

Una app de lectura para el móvil: **resúmenes de libros escritos a mano** y
**historias cortas ilustradas**. Prototipo funcional en React y TypeScript, sin
servidor y sin dependencias de tiempo de ejecución más allá del navegador.

|  |  |
|---|---|
| Resúmenes escritos a mano | **378** de 419 del catálogo |
| Palabras de texto propio | **~886.000** |
| Historias cortas | **761** |
| Cubiertas dibujadas a mano | **277** |
| Fotografías con licencia comprobada | **2.274** |
| Líneas de código | **~196.000** |

## Por qué existe

Las apps de resúmenes cuentan lo que dice un libro. Ninguna dice **dónde
falla**. Curva parte de esa diferencia: cada resumen termina señalando la
grieta del argumento y qué pasó después de publicarse —el experimento que no se
pudo replicar, la cifra que se corrigió, el editor que publicó lo que el autor
había mandado quemar—. Eso es lo que separa un resumen de una contraportada, y
está escrito como una norma, no como una intención: `REDACCION.md`.

## La parte interesante: control de calidad sobre el texto

El contenido no es un montón de ficheros de texto: es una estructura de datos
que se valida como se valida el código. Cinco comprobadores se pasan sobre los
resúmenes antes de darlos por buenos.

| Comprobador | Qué impide |
|---|---|
| `medir-paginas.mjs` | Páginas fuera de 260–320 palabras, o un libro con un número de páginas que no corresponde a sus argumentos |
| `concreto.mjs` | Párrafos sin un solo dato verificable: sin nombre propio, sin fecha, sin cifra |
| `revisa-puntos.mjs` | Los cinco puntos de «Aprenderás» convertidos en preguntas de examen —una fecha dentro de un punto es siempre eso— |
| `revisa-estructura.mjs` | Un resumen sin entrada, sin conclusión, o con dos ideas en la misma página |
| `choque.mjs` | Frases repetidas entre libros distintos, que es lo que delata el texto escrito en piloto automático |

Los minutos que anuncia cada ficha **no los escribe nadie**: se cuentan de las
palabras del resumen a la velocidad de la voz. Una cifra a mano en una pantalla
de ventas es una cifra que algún día miente.

## Arquitectura

```
catalogo.ts        el registro: 419 libros con su categoría, su año y su estado
   │
   ├── paginas.ts      el texto, por bloques tipados
   │                   rotulo · texto · idea · lista · cita
   ├── subtitulos.ts   ├── aprenderas.ts   ├── puntos.ts   └── cubiertas.ts
   │
puente.ts          arma el objeto que consume la interfaz, y calcula
   │               lo que no debe estar escrito a mano: minutos, páginas
   │
Lector.tsx         una página por pantalla, con su caja del rayo
```

Un bloque mal formado no compila. Un libro sin páginas escritas no aparece en
la estantería: una portada bonita que al tocarla no lleva a ningún sitio es
peor que un hueco.

## El empaquetado a un solo fichero

`scripts/movil.mjs` compone la app entera —código, texto, cubiertas y
fotografías— en **un `.html` autónomo de 15 MB** que se abre sin instalar nada.
Las imágenes se reescriben a WebP al vuelo y se meten dentro del propio
fichero, con un presupuesto de bytes que decide cuántas caben.

## Imágenes y licencias

Las 2.274 fotografías llevan su procedencia y su licencia comprobadas una a
una en `CREDITOS-IMAGENES.md`, generado desde los metadatos por
`scripts/creditos.mjs`. Treinta licencias distintas, todas de uso libre.

Las 277 cubiertas de libro están dibujadas a mano para este proyecto.

## Cómo se ejecuta

```bash
npm install
npm run dev                                    # desarrollo
npx vite build --config vite.uno.config.mjs    # y luego scripts/movil.mjs
```

## Estado

Prototipo en desarrollo. La interfaz está completa —introducción, estantería,
ficha, lector, racha, perfil, muro de historias— y el catálogo se sigue
escribiendo.
