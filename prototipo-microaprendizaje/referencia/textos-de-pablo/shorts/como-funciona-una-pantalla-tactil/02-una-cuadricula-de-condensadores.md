---
titulo: "La pantalla del móvil es una cuadrícula de condensadores"
categoria: "Tecnología"
serie: "como-funciona-una-pantalla-tactil"
orden: 2
portada: ""
credito_portada: ""
frase_portada: "Y detectar dos dedos a la vez fue el problema difícil"
---

# La pantalla del móvil es una cuadrícula de condensadores


## Hay un condensador en cada cruce de fila y columna

Detectar que hay un dedo es la parte fácil. Saber dónde está exige una estructura, y esa estructura es una rejilla.

El conductor transparente de la pantalla no es una lámina continua, sino que está dividido en filas y columnas, y en **cada cruce de una fila con una columna hay un condensador**. Una matriz modesta de 12 por 16, por ejemplo, tendría 192 condensadores independientes.

El funcionamiento es un barrido. Se aplica una tensión a las filas o a las columnas. Cuando acercas un dedo, el campo eléctrico local cambia y la capacidad de ese cruce concreto disminuye. Midiendo el cambio de capacidad en cada punto de la rejilla, y comprobando la tensión en el otro eje, el sistema determina con precisión en qué cruce está ocurriendo.

Así que la pantalla no ve un dedo. Ve una lista de doscientas o de varios miles de mediciones eléctricas, casi todas iguales entre sí, y unas pocas que han bajado de valor. La posición del dedo es el resultado de un cálculo sobre esos números, no una observación.

> ⚡ Lo que la pantalla detecta no es un contacto en un punto, sino una anomalía en una tabla de números. Tu dedo es, para el aparato, un conjunto de casillas que marcan menos de lo que deberían.


## Detectar dos dedos a la vez obligó a usar el método peor

Hay dos formas de montar esa rejilla, y la comparación entre ellas explica por qué el gesto de pellizcar para hacer zoom tardó tanto en llegar.

La primera se llama **autocapacidad**. Usa la misma cuadrícula, pero las filas y las columnas trabajan por separado: cada fila mide por su cuenta la carga que le añade un dedo, y cada columna hace lo mismo. Es un método sencillo y produce una señal bastante más fuerte que el otro.

Tiene un fallo que lo arruina. Con un solo dedo funciona: se ilumina una fila y una columna, y el cruce es la posición. Pero pon dos dedos y tendrás dos filas y dos columnas activadas, y esa combinación admite cuatro cruces posibles. Dos son reales y dos no existen, y el sistema no tiene forma de saber cuáles. Ese error tiene nombre propio, y es un fantasma: se llama **ghosting**, y consiste en detectar toques en sitios donde no hay nadie.

La solución es la **capacidad mutua**, que es la que mide cada cruce por separado en lugar de medir filas y columnas enteras. Da una señal más débil y obliga a leer muchísimos más valores, pero permite seguir con precisión varios dedos, varios lápices o una palma apoyada, todos a la vez.

> ⚡ La pantalla multitáctil no llegó cuando alguien tuvo la idea de usar dos dedos. Llegó cuando se pudo permitir el método que mide cruce por cruce, que era el que peor señal daba y el que más cuentas exigía.
