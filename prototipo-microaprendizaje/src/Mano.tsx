import { motion } from "framer-motion";

/* ==========================================================================
   La mano del modo anti-scroll.

   Es el icono que mandó Pablo el 26 de agosto, redibujado en vectores en vez
   de pegar el PNG: sale igual a cualquier tamaño y pesa dos kilobytes.

   Está montada como está montado el fichero original, y por eso se dibuja dos
   veces: primero todas las piezas en oro con un filete gordo alrededor
   (relleno y trazo del mismo color, así el trazo ENGORDA la silueta seis
   unidades por lado), y encima las mismas piezas en rojo sin filete. El oro
   que se ve es lo que asoma por fuera del rojo: el contorno de la mano, y
   —donde dos piezas rojas quedan separadas— las rayas que separan los dedos
   y la del hueco del pulgar. Dibujarlo así ahorra trazar a mano esas rayas
   interiores, que es justo donde se nota un dibujo hecho a ojo.

   Las medidas están normalizadas a 200 × 200 desde el PNG (1254 × 1254), y
   salen de escanearlo fila a fila separando fondo, oro y rojo:

     dedos      cuatro cápsulas; la del corazón vertical y las otras tres
                abiertas en abanico (el índice cae hacia dentro, el anular y
                el meñique hacia el centro)
     rayas      las de los dedos mueren a media palma —y 88, y 89, y 101—,
                y el hueco del pulgar baja hasta y 115
     colores    rojo (250, 91, 74) y oro (248, 187, 49)

   Vive en su propio fichero porque la usan dos pantallas: la fila del perfil
   y la escena del anti-scroll, donde es el sello de «alto» que cae sobre el
   móvil.
   ========================================================================== */

const ROJO = "#fa5b4a";
const ORO = "#f8bb31";

const DEDOS = [
  { x1: 59.5, y1: 38.5, x2: 73, y2: 96, w: 27 },
  { x1: 101, y1: 24, x2: 101, y2: 96, w: 28 },
  { x1: 142, y1: 40.8, x2: 130, y2: 96, w: 26 },
  { x1: 173.5, y1: 72, x2: 163, y2: 93, w: 23 },
];

const PULGAR =
  "M27 93 C41 96 51 103 57 113 C62 122 62 132 56 140 C50 148 44 150 41 146 " +
  "C37 140 34 137 31 132 C24 124 16 118 14 108 C12 100 18 93 27 93 Z";

const PALMA =
  "M63 114 C70 98 78 89 90 86 C104 83 120 88 134 95 C148 102 160 99 176 97 " +
  "C171 103 168 105 166 112 C164 121 162 128 161 137 C160 147 158 157 154 166 " +
  "C150 175 143 183 133 187 C124 191 112 191 102 191 C92 191 80 190 71 186 " +
  "C61 182 53 174 48 165 C43 156 40 146 38 136 C44 128 54 121 63 114 Z";

function capa(color: string, crece: number) {
  return (
    <g fill={color} stroke={color} strokeWidth={crece} strokeLinejoin="round">
      {DEDOS.map((d, i) => (
        <line
          key={i}
          x1={d.x1}
          y1={d.y1}
          x2={d.x2}
          y2={d.y2}
          stroke={color}
          strokeWidth={d.w + crece}
          strokeLinecap="round"
        />
      ))}
      <path d={PULGAR} />
      <path d={PALMA} />
    </g>
  );
}

/** Las dos capas sueltas, para meterlas dentro de otro `svg` ya animado. */
export function ManoPiezas() {
  return (
    <>
      {capa(ORO, 12)}
      {capa(ROJO, 0)}
    </>
  );
}

/** La mano con su vaivén de «para». `reducido` la deja quieta. */
export function Mano({
  tamano = 36,
  reducido,
}: {
  tamano?: number;
  reducido: boolean;
}) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={tamano}
      height={tamano}
      aria-hidden
      style={{ originY: 0.85 }}
      animate={reducido ? {} : { rotate: [-7, 7, -7] }}
      transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <ManoPiezas />
    </motion.svg>
  );
}
