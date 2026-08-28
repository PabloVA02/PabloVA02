---
name: paginado-shorts
description: Las reglas de cómo se pagina una pantalla de texto en Curva — alto exacto, sin scroll, cortes solo entre párrafos, y qué hacer cuando un párrafo no cabe. Se lee ANTES de tocar la maqueta de un short, el reparto en pantallas o cualquier medida de texto de `src/Shorts.tsx` y `src/styles.css`.
---

# Cómo se pagina una pantalla de texto

Las puso Pablo el 28 de agosto de 2026, después de cinco vueltas sobre lo
mismo. **No se negocian y no se olvidan.** Si algo de aquí choca con lo que
parezca razonable, manda esto.

## Las ocho reglas

1. **Cada página ocupa exactamente el alto visible**: `100dvh` menos la barra
   de pestañas menos `env(safe-area-inset-bottom)`. **Nunca `100vh`** —en un
   móvil `vh` cuenta la barra de direcciones que a veces no está, y la última
   línea se va debajo del borde—.
2. **`overflow: hidden` en la página. El scroll vertical NO existe dentro de un
   tema.** El gesto vertical cambia de short y el horizontal pasa de página.
   Si aparece una barra de scroll, la maqueta está rota.
3. **El reparto se calcula EN TIEMPO DE EJECUCIÓN**, no en un guion que escribe
   páginas fijas. Se renderizan los párrafos en un contenedor oculto con el
   mismo ancho y la misma tipografía, se acumulan alturas, y se corta cuando el
   siguiente no quepa.
4. **Llenado voraz: se meten bloques mientras quepan.** Solo se cierra la
   página cuando el siguiente no entra. El margen cuenta **entre** bloques, no
   debajo del último.
5. **Si el siguiente no cabe entero, se parte POR RENGLÓN COMPLETO.** Nunca a
   mitad de palabra. Es preferible partir un párrafo a dejar la página medio
   vacía. Las listas se parten entre puntos.
6. **Un título no se separa de su primer párrafo** y **el ⚡ no empieza
   página** —es la conclusión de lo que se acaba de leer—, **pero esa regla no
   se paga a cualquier precio**: si arreglarlo deja la página por debajo del
   80 %, no se arregla.
7. **Se recalcula al cambiar la orientación o el tamaño de letra del sistema.**
8. **Si un bloque no cabe ni él solo y tampoco se puede partir**, se avisa por
   consola con el nombre del tema para que Pablo lo arregle en el texto.

## El listón, y cómo se comprueba

> «Una página bien paginada debe quedar prácticamente llena. Si al terminar ves
> páginas con más de un 20 % de hueco sobrante y todavía quedaban bloques por
> colocar, la lógica sigue mal.»

    npx vite build && python3 -m http.server 4173 --directory dist &
    node scripts/llenado.mjs

Dice el porcentaje de llenado de cada pantalla y sale con código 1 si alguna se
queda corta. La última de cada tema no cuenta: ahí ya no quedan bloques.

Y si hace falta ver POR QUÉ una se queda corta, el reparto lleva su propio
diario: `window.__PAGDEBUG = true` en la consola y dice, pantalla por pantalla,
cuánto se llenó y qué bloque fue el que no cupo.

## Antes de tocar la lógica, MIDE

Pablo lo dejó escrito y tenía razón las tres veces:

> «Primero, diagnostica. Añade logs que impriman la altura disponible
> calculada, la altura medida de cada párrafo y el acumulado en cada
> iteración. Enséñame esos números antes de dar nada por bueno. Si las alturas
> medidas son mucho mayores que las reales, el problema está en la medición.»

Las dos causas que hay que descartar antes de tocar el algoritmo:

- **La fuente.** Se mide solo con `document.fonts.ready` cumplido. Medir con
  la de respaldo del sistema y pintar con la serifa da alturas de otro texto.
- **El contenedor de medición.** Tiene que tener EXACTAMENTE el mismo ancho de
  contenido, `font-family`, `font-size`, `line-height`, `letter-spacing` y
  margen entre párrafos. Unos píxeles de diferencia y el texto envuelve
  distinto. Por eso se mide en una **hoja gemela** con la misma clase y los
  mismos rellenos, no en una caja aparte.

La primera vez que se midió salió esto, y sirvió para descartar las dos:

    DISPONIBLE 675,3 · ancho de la caja 343 · ancho de la real 343
    fuentes loaded · 20px/27px "Iowan Old Style" en las dos
    alturas: 64, 216, 189, 135, 162… todas múltiplos de 27, el renglón

O sea que la medición estaba bien y el fallo era de lógica: los bloques eran
indivisibles y una pantalla se quedaba en 523 de 675 porque el párrafo que
venía pedía 162 y quedaban 152. Fallaba por diez píxeles.

## Las medidas del texto no se inventan: se miden

Están en `referencia/lector-headway/README.md`, sacadas en píxeles de las
capturas de Pablo. Hoy: cuerpo 20, interlínea 27, un renglón entero (27) de
blanco entre párrafos, subtítulo 24/32 en negrita, margen lateral 16.

**Cuando diga que el tamaño no es igual, no se discute mirando el CSS: se mide
la imagen.** La mancha de una línea —lo que ocupa de alto una fila de letras
sin palos ni colas— se ve en una captura, y comparándola con la nuestra a 19,
20 y 21 sale el número exacto. Así se encontró que su cuerpo era 20 y el
nuestro 19, después de tres discusiones.

## Y lo que se paginaba antes

Hubo un `scripts/reparte.mjs` que repartía el texto en páginas fijas midiendo
en un navegador y las escribía en `curiosidades.ts`. Funcionaba y está mal por
la regla 3: no sabe nada del móvil de quien lee. Si vuelve a aparecer algo así,
es que alguien se saltó esta hoja.
