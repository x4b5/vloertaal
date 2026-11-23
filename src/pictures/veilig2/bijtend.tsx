import type { JSX } from 'react';
import { Hand, PAL, Shine } from '../kit';

/** A diamond (a square on its point) centred on (cx, cy), half its diagonal r. */
const diamond = (cx: number, cy: number, r: number) => `M${cx} ${cy - r}L${cx + r} ${cy}L${cx} ${cy + r}L${cx - r} ${cy}Z`;

/** A falling drop, its point at (x, y). */
const drop = (x: number, y: number) => `M${x} ${y}Q${x + 2.8} ${y + 4} ${x + 2.8} ${y + 5.8}A2.8 2.8 0 0 1 ${x - 2.8} ${y + 5.8}Q${x - 2.8} ${y + 4} ${x} ${y}Z`;

/** A test tube tipped to pour: its open end at (x, y), turned `a` degrees. */
const tube = (x: number, y: number, a: number) => (
  <g transform={`translate(${x} ${y}) rotate(${a})`}>
    <path d="M0 -3.6H22A3.6 3.6 0 0 1 22 3.6H0Z" fill={PAL.ink} />
    <rect x="-2" y="-5" width="3" height="10" rx="1.2" fill={PAL.ink} />
  </g>
);

export default {
  // "bijtend": corrosive — one big GHS hazard pictogram (GHS05): a red-bordered diamond on white, with two
  // black test tubes pouring at the top, drops falling from them onto a metal bar (left) and a hand
  // (right), each with a bite eaten out of it where the drops land. No text.
  'w.bijtend': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The depth edge, the red rim and the white field */}
      <path d={diamond(60, 62, 48)} fill={PAL.redShade} stroke={PAL.redShade} strokeWidth="8" />
      <path d={diamond(60, 58, 48)} fill={PAL.red} stroke={PAL.red} strokeWidth="8" />
      <path d={diamond(60, 58, 37)} fill={PAL.white} stroke={PAL.white} strokeWidth="4" />
      <path d="M60 95L97 58L80 58L60 78Z" fill={PAL.paperShade} opacity=".7" />
      {/* The tubes, both pouring down to the left */}
      {tube(42, 40, -35)}
      {tube(70, 40, -35)}
      {/* Two drops under each */}
      <g fill={PAL.ink}>
        <path d={drop(41, 45)} />
        <path d={drop(41, 54)} />
        <path d={drop(69, 45)} />
        <path d={drop(69, 54)} />
        {/* The metal bar */}
        <rect x="28" y="66" width="26" height="10" rx="1" />
      </g>
      {/* The hand, fingers to the left */}
      <Hand pose="open" x={92} y={70} rotate={-90} scale={0.5} skin={[PAL.ink, PAL.ink]} />
      {/* The bites */}
      <circle cx="41" cy="66" r="3.6" fill={PAL.white} />
      <circle cx="69" cy="64" r="3.6" fill={PAL.white} />
      {/* The base line */}
      <rect x="36" y="84" width="48" height="5" rx="2" fill={PAL.ink} />
      <Shine d="M24 50L52 22" width={3.6} opacity={0.55} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
