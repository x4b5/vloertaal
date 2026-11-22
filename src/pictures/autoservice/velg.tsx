import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The face of the rim is a circle of radius R squashed to SX across: the rim turned a little to the right. */
const CX = 50;
const CY = 58;
const R = 44;
const SX = 0.74;
/** How far the barrel (the back of the rim) reaches to the right. */
const D = 16;

/** A point on the face at angle a (degrees, 0 = right, clockwise) and radius r. */
const P = (a: number, r: number): [number, number] => {
  const t = (a * Math.PI) / 180;
  return [r1(CX + Math.cos(t) * r * SX), r1(CY + Math.sin(t) * r)];
};

/** One spoke: a tapering wedge from the hub to the inner lip, a little wider at the lip. */
const spoke = (a: number) => {
  const pts = [P(a - 7, 13), P(a - 9, 34), P(a + 9, 34), P(a + 7, 13)];
  return `M${pts.map((p) => p.join(' ')).join('L')}Z`;
};
const ANG = [-90, -18, 54, 126, 198];

export default {
  // "de velg": the wheel rim — a shiny silver alloy rim without a tyre, turned in 3/4 view: the barrel
  // behind, the outer lip, five spokes on the dark inside, the hub with five bolt holes and a centre cap.
  'w.velg': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={104} rx={42} ry={4.5} />
      {/* The barrel: the back flange, the narrower well between the flanges */}
      <ellipse cx={CX + D} cy={CY} rx={R * SX} ry={R} fill={PAL.steel} />
      <ellipse cx={CX + D - 3} cy={CY} rx={R * SX} ry={R} fill={PAL.line} />
      <rect x={CX} y={CY - R + 6} width={D - 3} height={(R - 6) * 2} fill={PAL.steel} />
      <ellipse cx={CX + D - 6} cy={CY} rx={(R - 6) * SX} ry={R - 6} fill={PAL.steel} />
      {/* The front lip (outer ring) */}
      <ellipse cx={CX} cy={CY} rx={R * SX} ry={R} fill={PAL.mist} />
      <path d={`M${P(-60, R).join(' ')}A${R * SX} ${R} 0 0 1 ${P(80, R).join(' ')}L${P(80, R - 6).join(' ')}A${(R - 6) * SX} ${R - 6} 0 0 0 ${P(-60, R - 6).join(' ')}Z`} fill={PAL.line} />
      {/* The dark inside of the barrel, seen between the spokes */}
      <ellipse cx={CX} cy={CY} rx={(R - 7) * SX} ry={R - 7} fill={PAL.slate} />
      <ellipse cx={CX + 4} cy={CY} rx={(R - 10) * SX} ry={R - 10} fill={PAL.slateDark} />
      {/* The spokes */}
      {ANG.map((a) => (
        <path key={a} d={spoke(a)} fill={a > -40 && a < 110 ? PAL.steel : PAL.mist} />
      ))}
      {/* The hub with the bolt holes and the cap */}
      <ellipse cx={CX} cy={CY} rx={16 * SX} ry={16} fill={PAL.mist} />
      <ellipse cx={CX + 1.5} cy={CY + 1} rx={14 * SX} ry={14} fill={PAL.line} opacity=".55" />
      {ANG.map((a) => {
        const [x, y] = P(a + 36, 10.5);
        return <ellipse key={a} cx={x} cy={y} rx={2.6 * SX} ry={2.6} fill={PAL.slateDark} />;
      })}
      <ellipse cx={CX} cy={CY} rx={5.5 * SX} ry={5.5} fill={PAL.steel} />
      <Shine d={`M${P(200, R - 3).join(' ')}A${(R - 3) * SX} ${R - 3} 0 0 1 ${P(250, R - 3).join(' ')}`} width={3.6} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
