import type { JSX } from 'react';
import { Arrow, Move, PAL, Tick } from '../kit';

export default {
  // "de toegang": the access (you may go in) — an open doorway with the light room behind it, the door
  // swung inward; a big green arrow goes in through it, and a green tick badge hangs above the door:
  // you may go in.
  // Once: the arrow goes in through the doorway, then the tick appears.
  'w.toegang': () => (
    <g strokeLinejoin="round">
      <rect x="8" y="100" width="104" height="5" rx="2.5" fill={PAL.mist} />
      {/* The doorway and the light room */}
      <rect x="40" y="32" width="54" height="70" rx="3" fill={PAL.steel} />
      <rect x="45" y="37" width="44" height="65" fill={PAL.yellowShine} />
      <path d="M45 88H89V102H45Z" fill={PAL.yellowLight} opacity=".6" />
      {/* The door, swung inward against the wall */}
      <path d="M89 37L80 42V96L89 102Z" fill={PAL.card} />
      <path d="M89 37L86 39V100L89 102Z" fill={PAL.cardShade} />
      {/* The way in */}
      <Move kind="from" dx={-28} once>
        <Arrow from={[12, 76]} to={[74, 76]} color={PAL.ok} width={11} head={18} />
      </Move>
      <Move kind="show">
        <Tick x={67} y={20} r={13} color={PAL.ok} shade={PAL.okShade} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
