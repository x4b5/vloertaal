import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine, r1 } from '../kit';

/** The disc stands up and is seen a little from the left: a tall ellipse, its rim (thickness) to the right. */
const CX = 54;
const CY = 58;
const RX = 34;
const RY = 44;
/** How far the back face lies to the right (the disc's thickness in the slanted view). */
const T = 7;
/** A point on the disc's face at radius fraction f and angle a (degrees, 0 = right, clockwise). */
const on = (f: number, a: number): [number, number] => {
  const t = (a * Math.PI) / 180;
  return [r1(CX + RX * f * Math.cos(t)), r1(CY + RY * f * Math.sin(t))];
};

export default {
  // "de remschijf": the brake disc — a big steel disc standing up in 3/4 view, its thick rim on the right,
  // a shiny friction ring with cross-drilled holes, and the raised dark hub (the hat) with five bolt holes and the centre hole.
  'w.remschijf': () => (
    <g>
      <Ground cx={60} cy={104} rx={36} ry={4.5} />
      {/* The rim: the back face and the band between, in the dark shade */}
      <ellipse cx={CX + T} cy={CY - 1} rx={RX} ry={RY} fill={PAL.slate} />
      <rect x={CX} y={CY - RY - 1} width={T} height={RY * 2 + 1} fill={PAL.slate} />
      {/* The face: the friction ring, polished */}
      <Shade color={PAL.steel} opacity={1} at={[CX + 30, CY + 6, 18, 50]}>
        <ellipse cx={CX} cy={CY} rx={RX} ry={RY} fill={PAL.mist} />
      </Shade>
      {/* The cross-drilled holes in the ring */}
      {[15, 51, 87, 123, 159, 195, 231, 267, 303, 339].map((a) => {
        const [x, y] = on(0.74, a);
        return <ellipse key={a} cx={x} cy={y} rx={2.1} ry={2.6} fill={PAL.steel} />;
      })}
      {/* The hat: a dark step down to the hub, then the raised hub face */}
      <ellipse cx={CX} cy={CY} rx={RX * 0.52} ry={RY * 0.52} fill={PAL.slate} />
      <ellipse cx={CX - 2.5} cy={CY + 0.5} rx={RX * 0.45} ry={RY * 0.45} fill={PAL.steel} />
      {/* Five bolt holes and the centre hole */}
      {[-90, -18, 54, 126, 198].map((a) => {
        const t = (a * Math.PI) / 180;
        return <ellipse key={a} cx={r1(CX - 2.5 + 9 * Math.cos(t))} cy={r1(CY + 0.5 + 11.4 * Math.sin(t))} rx={2.3} ry={2.8} fill={PAL.slateDark} />;
      })}
      <ellipse cx={CX - 2.5} cy={CY + 0.5} rx={4.2} ry={5.2} fill={PAL.slateDark} />
      <Shine d={`M${on(0.88, 200).join(' ')}Q${on(0.9, 225).join(' ')} ${on(0.88, 250).join(' ')}`} width={3.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
