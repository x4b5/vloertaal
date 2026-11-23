import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de spoelkeuken": the dish room (where the washing-up is done) — a steel washing-up counter: on the left a
  // deep sink with the tall pre-rinse tap and its coiled hose, on the right the hood dishwasher with a rack of
  // plates going in, steam rising from it.
  // On the intro card the steam rises from the machine (three rounds: steam goes on).
  'w.spoelkeuken': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={54} ry={4} />
      {/* The pre-rinse tap: the pipe, the arm, the coiled hose */}
      <path d="M18 70V18H36" fill="none" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
      <path d="M36 18V26L32 29L40 32L32 35L40 38L32 41L40 44L36 47V52" fill="none" stroke={PAL.mist} strokeWidth="3" strokeLinecap="round" />
      <rect x="32" y="50" width="8" height="12" rx="2.5" fill={PAL.slate} />
      {/* The counter with the sink */}
      <path d="M6 70L12 64H62V70Z" fill={PAL.mist} />
      <path d="M6 70H62V104H6Z" fill={PAL.steel} />
      <path d="M14 68L17 65H50L48 68Z" fill={PAL.slateDark} />
      <Shine d="M10 76V96" width={2.4} opacity={0.6} />
      {/* The steam */}
      <Move kind="from" dy={24}>
        <path d="M70 18Q64 12 70 6M86 18Q80 12 86 6M102 18Q96 12 102 6" fill="none" stroke={PAL.mist} strokeWidth="3.6" strokeLinecap="round" />
      </Move>
      {/* The hood dishwasher */}
      <Shade color={PAL.steel} opacity={0.8} at={[110, 60, 8, 50]}>
        <rect x="60" y="22" width="52" height="40" rx="4" fill={PAL.mist} />
      </Shade>
      <rect x="62" y="28" width="48" height="5" rx="2.5" fill={PAL.steel} />
      <rect x="60" y="60" width="52" height="44" rx="2" fill={PAL.steel} />
      <rect x="64" y="66" width="44" height="34" rx="2" fill={PAL.slateDark} />
      {/* The rack of plates inside */}
      {[70, 79, 88, 97].map((x) => <ellipse key={x} cx={x} cy={80} rx="3.4" ry="11" fill={PAL.white} />)}
      <path d="M66 90H106" stroke={PAL.sky} strokeWidth="4" strokeLinecap="round" />
      <Shine d="M65 26H86" width={2.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
