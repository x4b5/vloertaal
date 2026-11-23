import type { JSX } from 'react';
import { Ground, Motion, Move, PAL, Shine, r1 } from '../kit';

/** The dial: the centre of its half-round face and the radius of its coloured scale. */
const CX = 60;
const CY = 60;
const R = 25;
const p = (deg: number, r: number) => `${r1(CX + Math.cos((deg * Math.PI) / 180) * r)} ${r1(CY + Math.sin((deg * Math.PI) / 180) * r)}`;
const arc = (a: number, b: number, color: string) => (
  <path d={`M${p(a, R)}A${R} ${R} 0 0 1 ${p(b, R)}`} fill="none" stroke={color} strokeWidth="7" strokeLinecap="butt" />
);

export default {
  // "de snelheid": the speed — a half-round speed dial on a dark machine panel, its scale green, yellow and
  // red, the needle far to the right (fast); under it a conveyor belt with three tiles racing along, motion
  // lines behind them. On the intro card the needle swings to the right and the tiles run in from the left
  // (three rounds: the line is running).
  'w.snelheid': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={105} rx={50} ry={3.5} />
      {/* The machine panel with its depth edge */}
      <path d="M22 22L28 17H102L96 22Z" fill={PAL.steel} />
      <path d="M96 22L102 17V65L96 70Z" fill={PAL.slateDark} />
      <rect x="22" y="22" width="74" height="48" rx="6" fill={PAL.slate} />
      <Shine d="M28 28H58" width={2.6} opacity={0.4} />
      {/* The half-round dial: a white face, the scale, the needle */}
      <path d={`M${CX - 32} ${CY}A32 32 0 0 1 ${CX + 32} ${CY}Z`} fill={PAL.white} />
      {arc(180, 240, PAL.leaf)}
      {arc(240, 300, PAL.yellow)}
      {arc(300, 360, PAL.red)}
      <Move kind="turn" turn={-110} at={[CX, CY]}>
        <path d={`M${CX} ${CY}L${p(-22, 27)}`} stroke={PAL.ink} strokeWidth="4" />
      </Move>
      <circle cx={CX} cy={CY} r="4.5" fill={PAL.ink} />
      {/* The conveyor belt: legs, belt, end rolls */}
      <path d="M20 94V104M100 94V104" stroke={PAL.steel} strokeWidth="5" />
      <rect x="10" y="84" width="100" height="12" rx="6" fill={PAL.slateDark} />
      <circle cx="16" cy="90" r="4" fill={PAL.steel} />
      <circle cx="104" cy="90" r="4" fill={PAL.steel} />
      {/* The tiles, running fast to the right */}
      <Move kind="fast" dx={-26}>
        <Motion x={34} y={80} dir={180} spread={36} n={3} len={8} gap={2} color={PAL.line} />
        <rect x="38" y="76" width="16" height="8" rx="1.5" fill={PAL.clay} />
        <rect x="60" y="76" width="16" height="8" rx="1.5" fill={PAL.clay} />
        <rect x="82" y="76" width="16" height="8" rx="1.5" fill={PAL.clay} />
        <path d="M40 77.5H52M62 77.5H74M84 77.5H96" stroke={PAL.clayLight} strokeWidth="1.6" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
