import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** A block in the slanted view: front rectangle (x, y, w, h), its top and right faces `d` deep. */
const block = (x: number, y: number, w: number, h: number, d: number, front: string, top: string, side: string) => {
  const ox = r1(d * DX);
  const oy = r1(d * DY);
  return (
    <g>
      <path d={`M${x} ${y}L${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + ox)} ${r1(y + oy)}Z`} fill={top} />
      <path d={`M${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + w + ox)} ${r1(y + h + oy)}L${x + w} ${y + h}Z`} fill={side} />
      <rect x={x} y={y} width={w} height={h} fill={front} />
    </g>
  );
};

/** A heating pipe running left to right at height y: the white tube, its grey underside, the open end on the left. */
const pipe = (x0: number, x1: number, y: number) => (
  <g>
    <rect x={x0} y={y - 5.5} width={x1 - x0} height="11" rx="5.5" fill={PAL.paper} />
    <rect x={x0} y={y} width={x1 - x0} height="5.5" rx="2.7" fill={PAL.mist} />
    <ellipse cx={x0 + 2.5} cy={y} rx="3" ry="5.5" fill={PAL.steel} />
    <ellipse cx={x0 + 2.5} cy={y} rx="1.5" ry="3" fill={PAL.slate} />
  </g>
);

/** A small wheel resting on a pipe (its centre at cx, cy). */
const wheel = (cx: number, cy: number, dark: boolean) => (
  <g key={`${cx}-${cy}`}>
    <circle cx={cx} cy={cy} r="7" fill={dark ? PAL.slateDark : PAL.slate} />
    <circle cx={cx} cy={cy} r="2.6" fill={PAL.mist} />
  </g>
);

export default {
  // "de buisrailkar": the pipe-rail trolley — a low yellow trolley with a scissor lift and a guard rail
  // on its platform, its small wheels riding on two parallel white heating pipes on the floor.
  'w.buisrailkar': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={4} />
      {/* The back pipe and the back wheels on it */}
      {pipe(18, 110, 86)}
      {wheel(39, 74.5, true)}
      {wheel(85, 74.5, true)}
      {/* The chassis */}
      {block(24, 72, 60, 10, 13, PAL.slate, PAL.steel, PAL.slateDark)}
      {/* The scissor lift: two crossed steel arms. It unfolds and the platform rises (Move) */}
      <Move kind="sag" grow={0.3}>
      <path d="M34 70L74 50M34 50L74 70" stroke={PAL.steel} strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="54" cy="60" r="3" fill={PAL.slate} />
      </Move>
      <Move kind="slow" dy={14}>
      {/* The guard rail on the platform */}
      <path d="M30 44V20H86V44M58 44V20" fill="none" stroke={PAL.yellowShade} strokeWidth="4.5" strokeLinecap="round" />
      <path d="M30 32H86" stroke={PAL.yellowShade} strokeWidth="3.5" strokeLinecap="round" />
      {/* The yellow platform */}
      {block(24, 44, 64, 6, 12, PAL.yellow, PAL.yellowLight, PAL.yellowShade)}
      <Shine d="M28 46H50" color={PAL.yellowShine} width={2.4} opacity={0.9} />
      </Move>
      {/* The front pipe and the front wheels on it */}
      {pipe(10, 102, 96)}
      {wheel(32, 83.5, false)}
      {wheel(78, 83.5, false)}
      <Shine d="M16 92.4H44" width={2.2} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
