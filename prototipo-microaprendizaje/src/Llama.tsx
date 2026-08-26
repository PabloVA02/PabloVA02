import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web/build/player/lottie_light";
import datos from "./fuego-noto.json";

/* ==========================================================================
   LA LLAMA

   No está dibujada aquí: es la animación de fuego de Google, la del emoji 🔥
   de Noto Animated Emoji, hecha por sus animadores y no por nosotros.

   POR QUÉ. Aquí hubo dos llamas nuestras. La primera interpolaba el camino
   entre tres siluetas y Pablo la devolvió: «la animación queda muy de IA». La
   segunda le añadió un filtro de `feTurbulence` para que el borde hirviera, y
   también: «me refiero a si hay por ahí alguna animación hecha, tiene que
   haber, que sea más profesional». Y la tenía. Hay cosas que no se sacan
   afinando parámetros: en ésta las lenguas se DESPRENDEN y salen volando, el
   núcleo sube y vuelve a asentarse, y la punta se dobla antes de romperse.
   Eso lo hace un animador con curvas a mano, fotograma a fotograma.

   Y hay una casualidad que la hace la elección obvia: la paleta y la silueta
   de Noto son casi las nuestras —rojo arriba, naranja en el cuerpo, crema en
   el corazón y base redonda—. Lo que Pablo dijo que le encantaba se queda
   como estaba; lo único que cambia es lo que dijo que no le gustaba.

   LA LICENCIA. Noto Animated Emoji va con CC BY 4.0: se puede usar en un
   producto comercial y hay que citar la autoría. Está en
   `CREDITOS-IMAGENES.md` y en la pantalla de ajustes, con el resto de los
   créditos. Si algún día se quita la atribución, hay que quitar también el
   fichero: no es opcional.

     fuego-noto.json   fonts.gstatic.com/s/e/notoemoji/latest/1f525/lottie.json
                       65 fotogramas a 60/s, 29 kB, sin dependencias de fuera

   EL PESO. `lottie_light` son 168 kB sin comprimir, que en el simulador
   —que lo empotra todo en un HTML con tope de 16 MB— es lo que hay que
   vigilar. Es la versión sin expresiones a propósito: la completa son 250 y
   esta animación no usa ninguna.

   A 0,85 de velocidad. A la suya, un bucle de 1,08 s repitiéndose en una
   ficha que está siempre a la vista se lee como un GIF; un pelo más lenta,
   como fuego.
   ========================================================================== */

export function Llama({ tamano = 108, reducido }: { tamano?: number; reducido: boolean }) {
  const caja = useRef<HTMLDivElement>(null);
  const anim = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!caja.current) return;
    const a = lottie.loadAnimation({
      container: caja.current,
      renderer: "svg",
      loop: true,
      /* Con `reducido` se carga igual pero no corre: el fuego quieto sigue
         diciendo lo que tiene que decir, y quitarlo dejaría un hueco. */
      autoplay: !reducido,
      animationData: datos as unknown as Record<string, unknown>,
    });
    a.setSpeed(0.85);
    if (reducido) a.goToAndStop(18, true);
    anim.current = a;
    return () => {
      a.destroy();
      anim.current = null;
    };
  }, [reducido]);

  return (
    <div
      ref={caja}
      className="llama"
      style={{ width: tamano, height: tamano }}
      aria-hidden
    />
  );
}
