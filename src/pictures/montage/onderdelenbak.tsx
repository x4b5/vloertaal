import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The bin: front bottom left corner, width, depth, the height at the back and of the low front wall. */
const OX = 16;
const OY = 100;
const W = 64;
const D = 34;
const BACK = 50;
const FRONT = 26;

type P = [number, number];
const iso = (u: number, v: number, z = 0): P => [r1(OX + u + v * DX), r1(OY - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

/** A bolt lying in the heap: from a to b (screen), hex head at a. */
const bolt = (a: P, b: P, k: string) => (
  <g key={k}>
    <path d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`} stroke={PAL.steel} strokeWidth="4.4" strokeLinecap="round" />
    <path d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`} stroke={PAL.mist} strokeWidth="1.6" strokeLinecap="round" strokeDasharray="1.4 2" />
    <circle cx={a[0]} cy={a[1]} r="4.4" fill={PAL.slate} />
    <circle cx={a[0] - 0.8} cy={a[1] - 0.8} r="2" fill={PAL.steel} />
  </g>
);
/** A nut: a light ring. */
const nut = (x: number, y: number, k: string) => (
  <g key={k}>
    <circle cx={x} cy={y} r="4.6" fill={PAL.mist} />
    <circle cx={x} cy={y} r="1.9" fill={PAL.slate} />
  </g>
);

export default {
  // "de onderdelenbak": the parts bin — a blue plastic stacking bin, high at the back and with the low open front
  // (a grip lip and a label slot), full of small grey parts: bolts and nuts heaped up in the opening.
  'w.onderdelenbak': () => (
    <g strokeLinejoin="round">
      <Ground cx={64} cy={102} rx={46} ry={4.5} />
      {/* The right side wall, outside: rising from the low front to the high back */}
      <path d={quad(iso(W, 0), iso(W, D), iso(W, D, BACK), iso(W, 0, FRONT))} fill={PAL.blueShade} />
      {/* The inside: back wall (dark) and the inner face of the left wall */}
      <path d={quad(iso(0, 0, FRONT), iso(0, D, BACK), iso(W, D, BACK), iso(W, 0, FRONT))} fill={PAL.navy} />
      <path d={quad(iso(0, 0, FRONT), iso(0, D, BACK), iso(0, D, 6), iso(0, 0, 6))} fill={PAL.blueShade} />
      {/* The top edges of the walls (lit) */}
      <path d={`M${iso(0, 0, FRONT).join(' ')}L${iso(0, D, BACK).join(' ')}L${iso(W, D, BACK).join(' ')}L${iso(W, 0, FRONT).join(' ')}`} stroke={PAL.blueLight} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* The heap of parts in the opening */}
      <path d={`M${iso(2, 2, FRONT - 2).join(' ')}Q${iso(12, 14, FRONT + 18).join(' ')} ${iso(32, 16, FRONT + 16).join(' ')}Q${iso(54, 16, FRONT + 18).join(' ')} ${iso(W - 2, 2, FRONT - 2).join(' ')}Z`} fill={PAL.steel} />
      {bolt(iso(10, 8, FRONT + 6), iso(26, 8, FRONT + 14), 'b1')}
      {bolt(iso(54, 10, FRONT + 10), iso(36, 6, FRONT + 6), 'b2')}
      {bolt(iso(30, 18, FRONT + 14), iso(44, 20, FRONT + 20), 'b3')}
      {nut(...iso(20, 4, FRONT + 2), 'n1')}
      {nut(...iso(44, 4, FRONT + 4), 'n2')}
      {nut(...iso(54, 22, FRONT + 18), 'n3')}
      {/* The low front wall with its lip, the label slot */}
      <path d={quad(iso(0, 0), iso(W, 0), iso(W, 0, FRONT), iso(0, 0, FRONT))} fill={PAL.blue} />
      <path d={quad(iso(-2, -3, FRONT - 1), iso(W + 2, -3, FRONT - 1), iso(W + 2, 0, FRONT + 1), iso(-2, 0, FRONT + 1))} fill={PAL.blueLight} />
      <rect x={iso(14, 0)[0]} y={iso(0, 0, FRONT - 7)[1]} width="36" height="13" rx="2" fill={PAL.blueShade} />
      <rect x={iso(16, 0)[0]} y={iso(0, 0, FRONT - 9)[1]} width="32" height="9" rx="1.5" fill={PAL.paper} />
      <path d={`M${iso(20, 0)[0]} ${iso(0, 0, FRONT - 13.5)[1]}H${iso(38, 0)[0]}`} stroke={PAL.line} strokeWidth="1.8" strokeLinecap="round" />
      <Shine d={`M${iso(3, 0, 5)[0]} ${iso(0, 0, 5)[1]}V${iso(0, 0, FRONT - 8)[1]}`} width={2.8} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
