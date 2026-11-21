import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** A block in the slanted view: front rectangle (x, y, w, h), its top and right faces `d` deep. */
const block = (x: number, y: number, w: number, h: number, d: number, front: string, top: string, side: string, rx = 0) => {
  const ox = r1(d * DX);
  const oy = r1(d * DY);
  return (
    <g>
      <path d={`M${x} ${y}L${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + ox)} ${r1(y + oy)}Z`} fill={top} />
      <path d={`M${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + w + ox)} ${r1(y + h + oy)}L${x + w} ${y + h}Z`} fill={side} />
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={front} />
    </g>
  );
};

/** The feed handle: three spokes with red balls round the hub on the head's right side. */
const HUB: [number, number] = [88, 38];
const SPOKES = [-35, 85, 205].map((a) => {
  const t = (a * Math.PI) / 180;
  return [r1(HUB[0] + 21 * Math.cos(t)), r1(HUB[1] + 21 * Math.sin(t))] as [number, number];
});

export default {
  // "de kolomboormachine": the pillar drill — a green drill press standing on a dark base: a tall
  // steel column, a dark table on it, the head with the motor on top, the chuck and drill bit
  // pointing down at the table and the three-spoke feed handle with red balls on its right side.
  'w.kolomboormachine': () => (
    <g strokeLinejoin="round">
      <Ground cx={56} cy={105} rx={44} ry={4} />
      {/* The base */}
      {block(18, 94, 66, 10, 16, PAL.slate, PAL.steel, PAL.slateDark)}
      {/* The column */}
      <rect x="60" y="34" width="13" height="54" fill={PAL.mist} />
      <rect x="67.5" y="34" width="5.5" height="54" fill={PAL.steel} />
      {/* The table on the column, with its collar */}
      <rect x="58" y="74" width="17" height="10" rx="2" fill={PAL.slate} />
      {block(24, 72, 46, 6, 14, PAL.slate, PAL.line, PAL.slateDark)}
      {/* The motor on top of the head, then the head */}
      <rect x="52" y="14" width="20" height="9" fill={PAL.slate} />
      <rect x="64" y="14" width="8" height="9" fill={PAL.slateDark} />
      <ellipse cx="62" cy="14" rx="10" ry="2.6" fill={PAL.steel} />
      {block(18, 26, 60, 24, 12, PAL.green, PAL.leaf, PAL.greenShade)}
      <Shine d="M24 32H48" color={PAL.lime} width={3.4} opacity={0.75} />
      {/* The quill, the chuck and the bit pointing down at the table */}
      <rect x="41" y="50" width="12" height="6" fill={PAL.steel} />
      <path d="M39.5 56H54.5L51.5 63H42.5Z" fill={PAL.slate} />
      <path d="M45.4 63H48.6V67.5L47 70.5L45.4 67.5Z" fill={PAL.slateDark} />
      {/* The feed handle */}
      {SPOKES.map(([x, y], i) => (
        <path key={`s${i}`} d={`M${HUB[0]} ${HUB[1]}L${x} ${y}`} stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
      ))}
      {SPOKES.map(([x, y], i) => (
        <circle key={`b${i}`} cx={x} cy={y} r="5.5" fill={PAL.red} />
      ))}
      <circle cx={HUB[0]} cy={HUB[1]} r="6" fill={PAL.steel} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
