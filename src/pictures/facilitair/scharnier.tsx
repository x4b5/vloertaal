import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

/** A countersunk screw head with its slot. */
const screw = (x: number, y: number) => (
  <g key={`${x}-${y}`}>
    <circle cx={x} cy={y} r="5" fill={PAL.slate} />
    <path d={`M${x - 3} ${y + 2}L${x + 3} ${y - 2}`} stroke={PAL.slateDark} strokeWidth="1.8" strokeLinecap="round" />
  </g>
);

export default {
  // "het scharnier": the hinge — a big steel butt hinge standing up: two leaves with three screws each,
  // joined by the round knuckle in the middle with its pin cap on top.
  // Three rounds: the right leaf swings open round the knuckle.
  'w.scharnier': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={44} ry={4} />
      {/* The left leaf */}
      <rect x="14" y="20" width="42" height="80" rx="3" fill={PAL.steel} />
      <rect x="14" y="20" width="42" height="6" rx="3" fill={PAL.mist} />
      {[30, 60, 88].map((y) => screw(33, y + 2))}
      {/* The right leaf swings open */}
      <Move kind="grow" grow={0.3}>
        <rect x="64" y="20" width="42" height="80" rx="3" fill={PAL.mist} />
        <rect x="98" y="20" width="8" height="80" rx="3" fill={PAL.steel} />
        {[30, 60, 88].map((y) => screw(84, y + 2))}
      </Move>
      {/* The knuckle and its pin */}
      <rect x="52" y="14" width="16" height="90" rx="6" fill={PAL.mist} />
      <rect x="61" y="14" width="7" height="90" rx="3.5" fill={PAL.steel} />
      <path d="M52 44H68M52 74H68" stroke={PAL.slate} strokeWidth="2" />
      <rect x="54" y="8" width="12" height="7" rx="3" fill={PAL.slate} />
      <Shine d="M56 20V40" width={2.6} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
