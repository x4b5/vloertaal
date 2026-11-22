import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** The three wires of the bundle (back to front): their centre line y, colour and shade. */
const WIRES: [number, string, string][] = [
  [56, PAL.leaf, PAL.leafShade],
  [66, PAL.blue, PAL.blueShade],
  [76, PAL.red, PAL.redShade],
];
const wire = (y: number) => `M16 ${y}Q60 ${y - 4} 104 ${y}`;

export default {
  // "de tie-wrap": the cable tie — a black cable tie pulled tight round a bundle of three wires (green, blue, red) with
  // copper ends; its square head sits on top and the ridged tail sticks up to the top right.
  'w.tiewrap': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={102} rx={46} ry={4} />
      {/* The wires: each a thick tube with its shaded underside, cut ends showing copper */}
      {WIRES.map(([y, c, s]) => (
        <g key={y}>
          <path d={wire(y + 1.6)} fill="none" stroke={s} strokeWidth="11" strokeLinecap="round" />
          <path d={wire(y)} fill="none" stroke={c} strokeWidth="9" strokeLinecap="round" />
          <circle cx="104" cy={y + 0.6} r="3" fill={PAL.clayLight} />
          <circle cx="16" cy={y + 0.6} r="3" fill={PAL.clayLight} />
        </g>
      ))}
      <Shine d="M30 53.4Q46 51 58 50.8" width={2.6} opacity={0.6} />
      {/* The tail: the ridged strip running up to the top right from the head */}
      <path d="M66 42L98 16" stroke={PAL.slateDark} strokeWidth="9" strokeLinecap="round" />
      <path d="M72.4 38.6l-3.4 -4.2M78.4 33.8l-3.4 -4.2M84.4 28.9l-3.4 -4.2M90.4 24l-3.4 -4.2M96.4 19.2l-3.4 -4.2" stroke={PAL.steel} strokeWidth="1.5" strokeLinecap="round" />
      {/* The band round the bundle: the front part, bulging a little */}
      <path d="M56 45Q51 64 55.6 82" fill="none" stroke={PAL.slateDark} strokeWidth="8" strokeLinecap="round" />
      <path d="M54.4 50Q51 64 54.4 77" fill="none" stroke={PAL.steel} strokeWidth="1.6" strokeLinecap="round" opacity=".8" />
      {/* The square head on top: its front, its lit top, its slot */}
      <rect x="49" y="36" width="17" height="13" rx="2.4" fill={PAL.slateDark} />
      <polygon points="49,37 53,32 70,32 66,37" fill={PAL.slate} />
      <polygon points="66,37 70,32 70,44 66,49" fill={PAL.slateDark} />
      <rect x="53" y="40" width="9" height="4" rx="1.4" fill={PAL.slate} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
