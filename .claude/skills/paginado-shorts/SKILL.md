---
name: paginado-shorts
description: Las reglas de cómo se pagina una pantalla de texto en Curva — alto exacto, sin scroll, cortes solo entre párrafos, y qué hacer cuando un párrafo no cabe. Se lee ANTES de tocar la maqueta de un short, el reparto en pantallas o cualquier medida de texto de `src/Shorts.tsx` y `src/styles.css`.
---

# Cómo se pagina una pantalla de texto

Las puso Pablo el 28 de agosto de 2026, después de cinco vueltas sobre lo
mismo. **No se negocian y no se olvidan.** Si algo de aquí choca con lo que
parezca razonable, manda esto.

## Las ocho reglas

1. **NO SE CALCULA CUÁNTO CABE: SE AVERIGUA PROBANDO.** No se mide el alto
   disponible, no se divide por el renglón, no se resta nada. Se monta la
   pantalla vacía —el contenedor con su tamaño real ya en pantalla—, se va
   metiendo contenido, y después de cada añadido se le pregunta a la caja si se
   ha salido: **`scrollHeight > clientHeight`**. En cuanto desborda, se quita lo
   último; esa pantalla está llena y empieza la siguiente. **Cero aritmética**:
   así da igual lo que valgan la barra, el área segura o los rellenos, y ningún
   número mágico puede restarse dos veces. La pantalla va a `100dvh`, nunca
   `100vh`.
2. **`overflow: hidden` en la página. El scroll vertical NO existe dentro de un
   tema.** El gesto vertical cambia de short y el horizontal pasa de página.
   Si aparece una barra de scroll, la maqueta está rota. **Y también en la hoja
   gemela de medir**: es lo que hace que `scrollHeight` diga la verdad. Con
   `overflow: visible` la caja crece con el texto, no desborda nunca, y la
   regla 1 deja de funcionar.
3. **El reparto se calcula EN TIEMPO DE EJECUCIÓN**, no en un guion que escribe
   páginas fijas. Se renderizan los párrafos en un contenedor oculto con el
   mismo ancho y la misma tipografía, se acumulan alturas, y se corta cuando el
   siguiente no quepa.
4. **Llenado voraz: se meten bloques mientras quepan.** Solo se cierra la
   página cuando el siguiente no entra. El margen cuenta **entre** bloques, no
   debajo del último.
5. **Si el siguiente no cabe entero, se parte POR RENGLÓN COMPLETO.** Nunca a
   mitad de palabra: se prueban solo las posiciones donde hay un espacio, y se
   coge la última que sigue cabiendo —por bisección, que da lo mismo que ir de
   una en una y tarda ocho pruebas en vez de doscientas—. Es preferible partir
   un párrafo a dejar la página medio vacía. Las listas se parten entre puntos,
   y si no cabe ni el primero, por dentro de ese punto; la continuación se pinta
   sin la bolita, igual que el rayo partido se pinta sin el icono.
6. **Un título no se separa de su primer párrafo** y **el ⚡ no se queda suelto
   sin nada delante**, **pero ninguna de las dos se paga a cualquier precio**:
   si arreglarlo deja más de un cuarto de pantalla en blanco, no se arregla.
   Ojo con la del rayo: «suelto sin nada delante» es quedarse SOLO, no abrir
   pantalla. Escrita como «el ⚡ no abre página nunca» costaba entre cien y
   ciento setenta puntos de hueco cada vez que saltaba, porque devolvía el
   párrafo de delante entero. Se aplica solo cuando detrás del rayo ya no queda
   nada.
7. **Se recalcula al cambiar la orientación o el tamaño de letra del sistema.**
8. **Si un bloque no cabe ni él solo y tampoco se puede partir**, se avisa por
   consola con el nombre del tema para que Pablo lo arregle en el texto.

## El doble descuento, que es el error clásico

Pasó el 28 de agosto y costó tres rondas: la barra de pestañas va con
`position: absolute; bottom: 0`, así que **su alto ya cubre el área segura del
móvil**. La hoja de texto reservaba `64 + env(safe-area-inset-bottom)`: en un
iPhone son treinta y cuatro puntos restados dos veces, y por eso Pablo veía
«un tercio de pantalla vacío» donde en el navegador de pruebas —área segura a
cero— solo se veía un hueco pequeño.

**El alto de la barra se declara UNA sola vez**, en `--barra`, y de ahí lo leen
la barra y el relleno de la hoja. Si alguna vez vuelve a aparecer un `env()`
sumado al lado de `var(--barra)`, es este mismo error otra vez.

Y el otro que costó una medición: dos reglas con la misma especificidad, una
detrás de otra, `padding-bottom` en las dos. Ganaba la de abajo y el número
puesto arriba no hacía nada.

## El pie de la última pantalla también ocupa, y CUÁL es la última se decide sobre la marcha

La última lleva «Guardar / Compartir / Siguiente short», que le quita 89 puntos:
679 de texto en las demás, 590 en ella. La hoja de medir lleva una **copia
inerte del pie**, y el reparto la enseña justo antes de empezar la pantalla que
va a ser la última, de modo que la caja —que es `flex: 1`— encoge sola y esa
pantalla se llena con el hueco que de verdad va a tener.

**Cuál es la última se decide pantalla a pantalla, no de antemano**: lo es si
todo lo que queda cabría en ella SIN el pie, porque entonces al llenarla se
acaba el texto y los botones tienen que ir dentro. Se pregunta pintando lo que
queda en la caja vacía y mirando si desborda.

Decidirlo de antemano —contar las pantallas en una pasada y decirle a la
siguiente cuál era la última— **no converge**, y deja la última con scroll: con
el pie puesto, a la pantalla n le sobra texto y salen n+1; con n+1, la n vuelve
a caber entera y salen n otra vez.

**Y esto tiene un precio que no se puede quitar.** Cuando lo que queda mide
entre 590 y 679 —un 13 % de los casos, tres temas de diez— hay que partirlo: la
penúltima se llena a 590 y se ve a 679, así que se queda con 89 puntos de hueco.
No hay manera de evitarlo mientras los botones vayan dentro del flujo de la
última pantalla; la única salida sería sacarlos de ahí.

## El listón, y cómo se comprueba

> «En cualquier página que NO sea la última de su sección, el espacio vacío por
> debajo de la última línea debe ser menor que la altura de una línea. Si cabe
> otra línea entera, la página está mal.»

    npx vite build && npx vite preview --port 4173 &
    node scripts/llenado.mjs

Dice cuántos puntos sobran en cada pantalla y sale con código 1 si en alguna
cabía otra línea. La última de cada tema no cuenta: ahí ya no quedan bloques.

**Un renglón más no cabe por 27 puntos: cabe por 54.** Entre un párrafo y el
siguiente hay un renglón entero de aire —27, que es lo que hay en las capturas
y no se toca—, así que meter una línea de un bloque nuevo pide los 27 del aire
más los 27 de la línea. Un hueco de 31 o de 48 no es una línea desaprovechada:
es que la siguiente no cabe. `llenado.mjs` cuenta las dos cosas por separado
para no mentir en ninguna dirección.

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

## Dos trampas de medida que costaron una ronda cada una

**`clientHeight - scrollHeight` NO es el hueco que queda.** `scrollHeight`
nunca baja de `clientHeight`, así que esa resta da cero siempre que el texto
quepa. El diario decía «sobran 0» en todas las pantallas y el tope del 25 % de
las reglas de borde no saltaba nunca. El hueco de verdad va desde donde acaba
el último hijo hasta el suelo de la caja:

    caja.getBoundingClientRect().top + caja.clientTop + caja.clientHeight
      - ultimoHijo.getBoundingClientRect().bottom

**El margen de abajo del último bloque tiene que valer cero de verdad.** La
regla `… .short-cuerpo > :last-child { margin-bottom: 0 }` se la comían dos
selectores más específicos —la caja del rayo, que lleva una clase de más, y los
puntos de una lista—, así que el rayo se quedaba con sus 27 puntos de margen
aunque fuera lo último. Esos 27 salían de la cuenta: «no cabía un rayo de 108
en los 77 que quedaban» cuando un renglón mide 27. Se ve en el diario poniendo
una sola palabra dentro del bloque y mirando si la caja se pasa.

## Y lo que se paginaba antes

Hubo un `scripts/reparte.mjs` que repartía el texto en páginas fijas midiendo
en un navegador y las escribía en `curiosidades.ts`. Funcionaba y está mal por
la regla 3: no sabe nada del móvil de quien lee. Si vuelve a aparecer algo así,
es que alguien se saltó esta hoja.
