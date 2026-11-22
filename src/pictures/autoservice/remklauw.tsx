import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine, r1 } from '../kit';

/** The disc: centre and radii (it stands up, seen a little from the left), its thickness to the right. */
const CX = 50;
const CY = 64;
const RX = 34;
const RY = 40;
const T = 6;
/** A point at radius fraction f and angle a (degrees, 0 = right, clockwise) on the disc's face. */
const on = (f: number, a: number): [number, number] => {
  const t = (a * Math.PI) / 180;
  return [r1(CX + RX * f * Math.cos(t)), r1(CY + RY * f * Math.sin(t))];
};
/** A band round the disc from angle a0 to a1, between radius fractions f0 and f1, as a path. */
const band = (f0: number, f1: number, a0: number, a1: number) => {
  const n = 12;
  const out: string[] = [];
  for (let i = 0; i <= n; i++) out.push(on(f1, a0 + ((a1 - a0) * i) / n).join(' '));
  for (let i = n; i >= 0; i--) out.push(on(f0, a0 + ((a1 - a0) * i) / n).join(' '));
  return `M${out.join('L')}Z`;
};

export default {
  // "de remklauw": the brake caliper — a big red caliper clamped over the top-right edge of a steel brake
  // disc (seen in 3/4 view), with its two steel mounting bolts and the bleed nipple on top.
  'w.remklauw': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={105} rx={38} ry={4.5} />
      {/* The disc: rim, face, hub */}
      <ellipse cx={CX + T} cy={CY - 1} rx={RX} ry={RY} fill={PAL.slate} />
      <rect x={CX} y={CY - RY - 1} width={T} height={RY * 2 + 1} fill={PAL.slate} />
      <ellipse cx={CX} cy={CY} rx={RX} ry={RY} fill={PAL.mist} />
      <ellipse cx={CX} cy={CY} rx={RX * 0.5} ry={RY * 0.5} fill={PAL.slate} />
      <ellipse cx={CX - 2} cy={CY + 0.5} rx={RX * 0.43} ry={RY * 0.43} fill={PAL.steel} />
      <ellipse cx={CX - 2} cy={CY + 0.5} rx={4} ry={4.8} fill={PAL.slateDark} />
      <Shine d={`M${on(0.86, 150).join(' ')}Q${on(0.88, 175).join(' ')} ${on(0.86, 200).join(' ')}`} width={3.2} opacity={0.9} />
      {/* The caliper's back half, behind the disc's rim */}
      <path d={band(0.6, 1.2, -95, 5)} transform={`translate(${T + 3} -2)`} fill={PAL.redShade} stroke={PAL.redShade} strokeWidth="6" />
      {/* The caliper's front: a thick red block over the edge */}
      <Shade color={PAL.redShade} opacity={1} at={[on(1.2, -10)[0] + 4, on(1, -10)[1] + 14, 12, 30]}>
        <path d={band(0.58, 1.18, -98, 0)} fill={PAL.red} stroke={PAL.red} strokeWidth="6" />
      </Shade>
      {/* The two mounting bolts and the bleed nipple */}
      {[-84, -14].map((a) => {
        const [x, y] = on(0.88, a);
        return (
          <g key={a}>
            <circle cx={x} cy={y} r={4.8} fill={PAL.redShade} />
            <circle cx={x} cy={y} r={3.2} fill={PAL.mist} />
          </g>
        );
      })}
      {(() => {
        const [x, y] = on(1.2, -50);
        return <path d={`M${x} ${y}L${r1(x + 4)} ${r1(y - 6)}`} stroke={PAL.steel} strokeWidth="4.5" strokeLinecap="round" />;
      })()}
      <Shine d={`M${on(0.98, -92).join(' ')}Q${on(1.02, -72).join(' ')} ${on(1, -55).join(' ')}`} width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
