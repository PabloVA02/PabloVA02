---
titulo: "Un modelo de lenguaje solo hace una cosa: adivinar lo que viene después"
categoria: "Tecnología"
serie: "como-funciona-la-inteligencia-artificial"
orden: 2
portada: ""
credito_portada: ""
frase_portada: "No hay una segunda tarea escondida detrás"
---

# Un modelo de lenguaje solo hace una cosa: adivinar lo que viene después


## El entrenamiento consiste en continuar frases

Lo que hace un modelo de lenguaje al ser entrenado se puede describir sin ninguna metáfora: aprende a adivinar cómo sigue una secuencia.

El ejemplo canónico es tan tonto que resulta esclarecedor. Dada la secuencia «me gusta comer», ¿qué es más probable que venga a continuación, la palabra «pan» o la palabra «piedras»? El sistema hace esa apuesta, comprueba cuál era la palabra real y corrige sus pesos. Millones y millones de veces.

Antes de eso hay un paso previo que conviene conocer, porque explica por qué estos sistemas cuentan mal las letras de una palabra. El texto tiene que convertirse en números: el vocabulario se trocea en piezas llamadas **tokens** y a cada pieza se le asigna un índice numérico. Un token no siempre es una palabra; puede ser un fragmento de palabra. El modelo no ve letras ni palabras, ve una fila de números.

Súmalo y queda la descripción entera del funcionamiento. Un modelo de lenguaje es un sistema que, dada una fila de números, calcula cuál es el número más probable a continuación, lo añade a la fila y repite la operación.

> ⚡ No hay una segunda función escondida debajo. Escribir un poema, resumir un informe y contestar una pregunta son, dentro del sistema, exactamente la misma operación repetida: cuál es el trozo siguiente más probable.


## Lo que cambió en 2017 fue la forma de mirar la frase entera

El mecanismo de adivinar la palabra siguiente es antiguo. Lo que lo volvió capaz de todo lo que hoy vemos fue un cambio de arquitectura con fecha concreta.

En la conferencia NeurIPS de 2017, un grupo de investigadores de Google presentó el artículo *Attention Is All You Need*, que introdujo la arquitectura llamada **transformador**. Los modelos de lenguaje actuales se basan en ella.

Su aportación es un mecanismo de atención que permite procesar las relaciones entre todos los elementos de una secuencia a la vez, sin importar lo lejos que estén unos de otros. Antes, un sistema que leía una frase palabra por palabra iba perdiendo por el camino lo que había leído al principio; con atención, la última palabra de un párrafo puede relacionarse directamente con la primera sin haber pasado por todas las intermedias.

Sobre esa arquitectura se apiló lo demás, que fue sobre todo tamaño. Los modelos más grandes tienen hoy más de 100.000 millones de parámetros, que es tanto como decir más de cien mil millones de esos pesos que se corrigen durante el entrenamiento.

> ⚡ El salto de los últimos años no vino de enseñarle a la máquina a razonar. Vino de dejarla mirar toda la frase de golpe en lugar de palabra por palabra, y de multiplicar el tamaño hasta un punto que antes no era posible.
