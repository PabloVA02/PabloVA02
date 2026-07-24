import type { ComponentType } from "react";
import { motion, type MotionValue } from "framer-motion";
import type { Arte, Card } from "./lesson";
import {
  Aprendizaje, AprendizajeVB, Escritor, EscritorVB, Estanteria, EstanteriaVB,
  Explorar, ExplorarVB, HaciaNoche, HaciaNocheVB, Lectora, LectoraVB,
  MapaAventura, MapaAventuraVB, Memoria, MemoriaVB, Museo, MuseoVB,
} from "./undraw";
import { GraficoDatos } from "./Graficos";
import { idle, springSoft } from "./motion";

/* ==========================================================================
   La escena.

   Solo aparece cuando la tarjeta la pide. Antes había una línea de tiempo
   permanente debajo de todas las tarjetas y era un error: en las de solo
   texto no explicaba nada y robaba el sitio que necesitaba la lectura. Ahora
   la cronología es un gráfico más, a página completa, y sale donde importa.

   Las ilustraciones vienen de unDraw (MIT), recoloreadas a la paleta y
   partidas en tres bandas de profundidad, cada una a su velocidad frente al
   gesto y con su propio bucle de reposo.
   ========================================================================== */

type Banda = "fondo" | "medio" | "frente";
type Pieza = { Comp: ComponentType<{ banda: Banda }>; vb: string; escala: number };

const ARTE: Record<Arte, Pieza> = {
  estanteria: { Comp: Estanteria, vb: EstanteriaVB, escala: 0.94 },
  lectora: { Comp: Lectora, vb: LectoraVB, escala: 0.96 },
  escritor: { Comp: Escritor, vb: EscritorVB, escala: 0.92 },
  museo: { Comp: Museo, vb: MuseoVB, escala: 0.88 },
  aprendizaje: { Comp: Aprendizaje, vb: AprendizajeVB, escala: 0.96 },
  explorar: { Comp: Explorar, vb: ExplorarVB, escala: 0.9 },
  mapa: { Comp: MapaAventura, vb: MapaAventuraVB, escala: 0.92 },
  memoria: { Comp: Memoria, vb: MemoriaVB, escala: 0.94 },
  noche: { Comp: HaciaNoche, vb: HaciaNocheVB, escala: 0.92 },
};

/** Reposo por banda: amplitudes cortas y duraciones primas entre sí. */
const RESPIRA: Record<Banda, [number, number, number]> = {
  fondo: [3, 13.7, 0],
  medio: [4.5, 9.1, 0.6],
  frente: [6, 7.3, 1.2],
};

type Props = {
  carta: Card;
  capas: Record<"fondo" | "medio" | "frente" | "detalle", MotionValue<number>>;
  reducido: boolean;
};

export function Scene({ carta, capas, reducido }: Props) {
  const reposo = (b: Banda) => (reducido ? {} : idle(...RESPIRA[b]));

  if (carta.forma === "grafico") {
    return (
      <div className="scene-stack">
        <GraficoDatos tipo={carta.grafico} x={capas.detalle} />
      </div>
    );
  }

  if (carta.forma !== "arte") return null;

  const pieza = ARTE[carta.arte];

  return (
    <div className="scene-stack">
      <motion.svg
        viewBox={pieza.vb}
        role="img"
        aria-label="Ilustración del capítulo"
        initial={{ opacity: 0, scale: pieza.escala * 0.95 }}
        animate={{ opacity: 1, scale: pieza.escala }}
        transition={springSoft}
        style={{ pointerEvents: "none" }}
      >
        {(["fondo", "medio", "frente"] as const).map((banda, orden) => (
          <motion.g key={banda} style={{ x: capas[banda] }}>
            {/* Entrada escalonada: fondo primero, primer plano al final */}
            <motion.g
              initial={{ opacity: 0, y: 20 + orden * 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: orden * 0.07 }}
            >
              <motion.g {...reposo(banda)}>
                <pieza.Comp banda={banda} />
              </motion.g>
            </motion.g>
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
}
