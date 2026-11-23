import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

export default {
  // "ontdooien": to thaw, to defrost — the same piece of meat, now on a plate: only a thin, rounded bit of
  // ice is left on it, drops of water run off and a puddle of water lies on the plate, two small bits of ice melt beside it.
  // On the intro card the ice sinks down to its thin bit as it melts, and the drops fall. Once (it melts
  // once).
  'w.ontdooien': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={4} />
      {/* The plate and the puddle */}
      <ellipse cx="60" cy="96" rx="48" ry="10" fill={PAL.paperShade} />
      <ellipse cx="60" cy="94" rx="48" ry="9" fill={PAL.white} />
      <path d="M22 94Q30 86 60 87Q92 86 100 94Q90 100 60 100Q30 100 22 94Z" fill={PAL.ice} />
      {/* The meat */}
      <path d="M28 82Q30 62 50 60Q70 58 84 66Q94 74 88 86Q80 94 56 94Q30 94 28 82Z" fill={PAL.clay} />
      <path d="M42 70Q56 66 68 72Q74 78 68 84" fill="none" stroke={PAL.paper} strokeWidth="3" strokeLinecap="round" opacity=".85" />
      <Shine d="M34 76Q36 68 44 65" width={3} opacity={0.4} />
      {/* What is left of the ice, melting down */}
      <Move kind="sag" grow={2.2} once>
        <path d="M34 66Q38 52 60 52Q80 52 86 66Q72 60 60 60Q46 60 34 66Z" fill={PAL.ice} opacity=".85" />
      </Move>
      {/* Drops running off */}
      <Move kind="drop" dy={-20} once>
        <g fill={PAL.sky}>
          <path d="M26 58Q26 64 30 68A5 5 0 1 1 22 68Q26 64 26 58Z" />
          <path d="M94 52Q94 58 98 62A5 5 0 1 1 90 62Q94 58 94 52Z" />
          <path d="M60 30Q60 36 64 40A5 5 0 1 1 56 40Q60 36 60 30Z" />
        </g>
      </Move>
      {/* Two small bits of ice melting on the plate */}
      <path d="M90 86L92 78H102L104 86Q97 90 90 86Z" fill={PAL.ice} />
      <path d="M92 80H101" stroke={PAL.white} strokeWidth="2" strokeLinecap="round" />
      <path d="M14 90L16 84H24L26 90Q20 93 14 90Z" fill={PAL.ice} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
