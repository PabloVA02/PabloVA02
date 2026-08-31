---
titulo: "La inteligencia artificial se inventa cosas porque nadie le pidió que dijera la verdad"
categoria: "Tecnología"
serie: "como-funciona-la-inteligencia-artificial"
orden: 3
portada: ""
credito_portada: ""
frase_portada: "El fallo está en el objetivo, no en el entrenamiento"
---

# La inteligencia artificial se inventa cosas porque nadie le pidió que dijera la verdad


## Una alucinación es una respuesta que suena perfecta y es falsa

El fenómeno tiene nombre técnico. Se llama **alucinación**, y describe la generación de textos o respuestas que parecen sintácticamente correctas, fluidas y naturales, pero que son incorrectas, disparatadas o infieles a la fuente que se les dio.

Fíjate en cómo está construida esa definición, porque la explicación entera está dentro. Lo que falla no es la forma. La forma es impecable: la frase está bien hecha, el tono es el adecuado, la cita tiene el aspecto exacto de una cita real. Lo único que falla es que el contenido no se corresponde con el mundo.

Y eso ocurre por una razón que no es un fallo de fabricación, sino una consecuencia directa del objetivo con el que se entrenó el sistema. A un modelo de lenguaje se le pidió que produjera la continuación más probable, no la continuación verdadera. Son dos cosas distintas, y para un sistema entrenado así son literalmente indistinguibles: una fecha inventada que encaja bien en la frase tiene exactamente la misma pinta que la fecha correcta.

> ⚡ Una alucinación no es un error del sistema. Es el sistema funcionando exactamente como se le pidió, en un caso en el que lo más probable y lo cierto no coinciden.


## El modelo no consulta nada mientras responde

Aquí ayuda separar dos momentos que se confunden todo el rato: entrenar y usar.

El entrenamiento es cuando se ajustan los pesos, y es lo caro y lo lento. Cuando termina, esos números quedan fijos. A partir de ahí, cada vez que alguien le hace una pregunta al modelo, lo que ocurre no es una búsqueda: es el mismo cálculo de siempre, aplicado a la fila de números de la pregunta, con los pesos que ya tenía.

De ahí sale la limitación de fondo. El sistema no tiene ningún sitio donde ir a comprobar si lo que va a decir es cierto, porque no hay ningún sitio: no guardó los textos, guardó pesos. Y tampoco tiene forma de distinguir por dentro entre «esto lo vi muchas veces durante el entrenamiento» y «esto encaja bien aquí», porque las dos cosas llegan al mismo sitio, que es un número de probabilidad.

Por eso el remedio que se ha impuesto en la práctica no consiste en hacer el modelo más listo, sino en darle acceso a documentos y buscadores mientras responde. No se le arregla la memoria: se le pone una fuente al lado y se le pide que la mire.

> ⚡ El problema no es que el modelo mienta, porque mentir requiere saber la verdad y ocultarla. El problema es que un sistema entrenado para completar frases no tiene, por dentro, ninguna representación de lo que es cierto.
