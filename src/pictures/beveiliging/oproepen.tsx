import type { JSX } from 'react';
import { Hand, Motion, Move, PAL, SKIN, Shade } from '../kit';
import { Bust } from '../bust';

export default {
  // "oproepen": to call (on the radio) — Henk, the guard, holds his black two-way radio up to his mouth
  // and speaks into it (his mouth open); blue sound lines go out from its antenna.
  // Three rounds: the sound lines come from the radio as he calls.
  'w.oproepen': () => (
    <g strokeLinejoin="round">
      <Bust who="henk" x={50} y={118} scale={0.74} expr="neutral" talk bold />
      {/* The radio at his mouth */}
      <rect x="69" y="26" width="7" height="22" rx="3.5" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={1} at={[89, 72, 5, 30]}>
        <rect x="65" y="42" width="24" height="46" rx="6" fill={PAL.slate} />
      </Shade>
      <rect x="70" y="48" width="14" height="8" rx="2" fill={PAL.ice} />
      <path d="M71 64H83M71 70H83M71 76H83" stroke={PAL.slateDark} strokeWidth="2.6" strokeLinecap="round" />
      <Hand pose="hold" x={81} y={110} rotate={-6} scale={0.62} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} mirror />
      {/* The call goes out */}
      <Move kind="show">
        <Motion x={75} y={28} dir={-30} spread={70} n={3} len={10} gap={9} color={PAL.sky} width={4} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
