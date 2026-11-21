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
const HUB: [number, number] = [84, 34];
const SPOKES = [-35, 85, 205].map((a) => {
  const t = (a * Math.PI) / 180;
  return [r1(HUB[0] + 19 * Math.cos(t)), r1(HUB[1] + 19 * Math.sin(t))] as [number, number];
});

export default {
  // "de kolomboormachine": the pillar drill — a green drill press standing on a dark base: a tall
  // steel column, a dark table on it, the head with the motor on top, the chuck and drill bit
  // pointing down at the table and the three-spoke feed handle with red balls on its right side.
  'w.kolomboormachine': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={40} ry={4} />
      {/* The base */}
      {block(24, 94, 56, 8, 16, PAL.slate, PAL.steel, PAL.slateDark)}
      {/* The column */}
      <rect x="61" y="30" width="11" height="58" fill={PAL.mist} />
      <rect x="67.5" y="30" width="4.5" height="58" fill={PAL.steel} />
      {/* The table on the column, with its collar */}
      <rect x="59" y="74" width="15" height="8" rx="2" fill={PAL.slate} />
      {block(28, 72, 40, 5, 14, PAL.slate, PAL.line, PAL.slateDark)}
      {/* The motor on top of the head, then the head */}
      <rect x="54" y="11" width="18" height="10" fill={PAL.slate} />
      <rect x="65" y="11" width="7" height="10" fill={PAL.slateDark} />
      <ellipse cx="63" cy="11" rx="9" ry="3" fill={PAL.steel} />
      {block(28, 24, 48, 20, 12, PAL.green, PAL.leaf, PAL.greenShade)}
      <Shine d="M33 30H52" color={PAL.lime} width={3} opacity={0.75} />
      {/* The quill, the chuck and the bit pointing down at the table */}
      <rect x="45" y="44" width="10" height="6" fill={PAL.steel} />
      <path d="M43.5 50H56.5L54 58H46Z" fill={PAL.slate} />
      <path d="M48.4 58H51.6V64.5L50 67.5L48.4 64.5Z" fill={PAL.slateDark} />
      {/* The feed handle */}
      {SPOKES.map(([x, y], i) => (
        <path key={`s${i}`} d={`M${HUB[0]} ${HUB[1]}L${x} ${y}`} stroke={PAL.slate} strokeWidth="3.2" strokeLinecap="round" />
      ))}
      {SPOKES.map(([x, y], i) => (
        <circle key={`b${i}`} cx={x} cy={y} r="4.5" fill={PAL.red} />
      ))}
      <circle cx={HUB[0]} cy={HUB[1]} r="5" fill={PAL.steel} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
