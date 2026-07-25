import { motion } from "framer-motion";

/* ==========================================================================
   El pase de invitado.

   Es una tarjeta física, y todo lo que hace va en esa dirección: tiene
   troqueles en los costados como un billete, se inclina en el espacio y le
   pasa un brillo por encima como a una tarjeta plastificada.

   Tres capas de movimiento, montadas una dentro de otra para que no se
   pisen —que es el error clásico: poner dos `animate` en el mismo nodo y que
   el segundo silencie al primero—:

     1. ENTRADA   la tarjeta llega inclinada hacia atrás y se endereza con
                  muelle. Una sola vez.
     2. REPOSO    balanceo lento en dos ejes, con periodos distintos (9,3 s y
                  7,1 s) para que nunca coincidan y el bucle no se note.
     3. BRILLO    un barrido diagonal cada pocos segundos. Es lo que hace que
                  parezca plastificada y no impresa.
   ========================================================================== */

const muelleTarjeta = { type: "spring" as const, stiffness: 150, damping: 15, mass: 1.1 };

export function PaseInvitado({ reducido, dias = 7 }: { reducido: boolean; dias?: number }) {
  return (
    <div className="pase-escena">
      {/* 1. ENTRADA */}
      <motion.div
        className="pase-entrada"
        initial={{ opacity: 0, y: 46, rotateX: -26, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        transition={reducido ? { duration: 0.01 } : { ...muelleTarjeta, delay: 0.24 }}
      >
        {/* 2. REPOSO — dos ejes, dos periodos primos entre sí */}
        <motion.div
          className="pase"
          animate={reducido ? {} : { rotateY: [-4.5, 4.5, -4.5], rotateX: [2.2, -2.2, 2.2] }}
          transition={{
            rotateY: { duration: 9.3, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 7.1, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="pase-troquel pase-troquel-izq" aria-hidden />
          <span className="pase-troquel pase-troquel-der" aria-hidden />

          <div className="pase-cabecera">
            <span className="pase-marca" aria-hidden>
              <svg viewBox="0 0 24 24" width="17" height="17">
                <path
                  d="M13.4 2 L4.6 13.2 A0.7 0.7 0 0 0 5.1 14.3 H10 L9 21.6 A0.5 0.5 0 0 0 9.9 22 L19.4 10.4 A0.7 0.7 0 0 0 18.9 9.3 H13.9 L14.9 2.4 A0.5 0.5 0 0 0 13.4 2 Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="pase-gratis">Gratis</span>
          </div>

          <div className="pase-cuerpo">
            <p className="pase-dias">{dias} días</p>
            <p className="pase-nombre">de invitado</p>
          </div>

          {/* Línea troquelada: separa el talón, como un billete de verdad */}
          <span className="pase-puntos" aria-hidden />
          <p className="pase-pie">Acceso completo · sin tarjeta</p>

          {/* 3. BRILLO */}
          {!reducido && (
            <motion.span
              className="pase-brillo"
              aria-hidden
              initial={{ x: "-130%" }}
              animate={{ x: "130%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3.4,
                ease: "easeInOut",
                delay: 1.1,
              }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* La sombra vive fuera de la tarjeta y respira a su propio ritmo: si
          fuera un `box-shadow` de la tarjeta, se inclinaría con ella y
          delataría que todo es plano */}
      <motion.span
        className="pase-sombra"
        aria-hidden
        initial={{ opacity: 0, scaleX: 0.7 }}
        animate={
          reducido
            ? { opacity: 0.5, scaleX: 1 }
            : { opacity: [0.42, 0.28, 0.42], scaleX: [1, 0.93, 1] }
        }
        transition={
          reducido
            ? { duration: 0.01 }
            : {
                opacity: { duration: 9.3, repeat: Infinity, ease: "easeInOut" },
                scaleX: { duration: 9.3, repeat: Infinity, ease: "easeInOut" },
              }
        }
      />
    </div>
  );
}
