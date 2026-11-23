import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

/** The hook's bowl: its centre and radius (the middle of the steel), and the steel's thickness. */
const CX = 56;
const CY = 74;
const R = 20;
const W = 14;
/** The hook: down the shank on the right, round the bowl, up to the tip on the left. */
const HOOK = `M${CX + R} 50V${CY}A${R} ${R} 0 0 1 ${CX - R} ${CY}V64`;

export default {
  // "de hijshaak": the lifting hook — a big steel crane hook with its yellow safety latch across the
  // opening, hanging from a swivel block at the end of a dark chain.
  // On the intro card: the safety latch snaps shut across the opening, once and slowly (a latch closes: it happens once).
  'w.hijshaak': () => (
    <g strokeLinejoin="round">
      {/* The chain from the top */}
      <rect x={CX + R - 4.5} y="8" width="9" height="14" rx="4.5" fill="none" stroke={PAL.slate} strokeWidth="3" />
      <rect x={CX + R - 1.8} y="18" width="3.6" height="14" rx="1.8" fill={PAL.slateDark} />
      {/* The swivel block the hook hangs from */}
      <rect x={CX + R - 11} y="30" width="22" height="14" rx="3" fill={PAL.slate} />
      <rect x={CX + R + 3} y="30" width="8" height="14" rx="3" fill={PAL.slateDark} />
      <rect x={CX + R - 6} y="43" width="12" height="8" rx="2" fill={PAL.steel} />
      {/* The hook: the shade side first, the lit steel over it a little to the top left */}
      <path d={HOOK} fill="none" stroke={PAL.steel} strokeWidth={W} strokeLinecap="round" />
      <path
        d={`M${CX + R - 1.5} 52V${CY}A${R + 1.5} ${R + 1.5} 0 0 1 ${CX - R - 1.5} ${CY}V66`}
        fill="none"
        stroke={PAL.mist}
        strokeWidth={W - 6}
        strokeLinecap="round"
        transform="translate(-1.6 -1.6)"
      />
      <Shine d={`M${CX + R - 4.5} 54V70`} width={2.6} opacity={0.9} />
      {/* The yellow safety latch across the opening, from the shank to the tip */}
      <Move kind="tip" turn={-40} at={[CX + R - 6, 56]} once>
        <path d={`M${CX + R - 7} 56L${CX - R + 2} 63`} stroke={PAL.yellowShade} strokeWidth="6" strokeLinecap="round" />
        <path d={`M${CX + R - 7} 54.6L${CX - R + 2} 61.6`} stroke={PAL.yellow} strokeWidth="3.6" strokeLinecap="round" />
      </Move>
      <circle cx={CX + R - 6} cy="56" r="3.6" fill={PAL.slate} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
