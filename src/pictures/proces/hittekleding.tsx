import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de hittekleding": the heat-protective clothing — a worker in a silver (aluminised) heat suit: a hood
  // over the head and shoulders with a gold face shield, silver gloves and boots; at the left, the orange
  // glow of a furnace opening that he stands near, with heat waves over it. No face to see, no text.
  'w.hittekleding': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={66} cy={104} rx={44} ry={4} />
      {/* The glow of the furnace opening, left */}
      <path d="M4 104V60Q4 50 14 50H30Q36 50 36 60V104Z" fill={PAL.slate} />
      <path d="M8 104V74Q8 62 20 62Q32 62 32 74V104Z" fill={PAL.orange} />
      <path d="M13 104V82Q13 72 20 72Q27 72 27 82V104Z" fill={PAL.yellow} />
      <path d="M18 104V92Q18 88 20 88Q22 88 22 92V104Z" fill={PAL.yellowShine} />
      <path d="M14 44q-3 -3 0 -6t0 -6M24 42q-3 -3 0 -6t0 -6" fill="none" stroke={PAL.orange} strokeWidth="3" />
      {/* Legs and boots */}
      <path d="M62 80L60 100M76 80L78 100" stroke={PAL.mist} strokeWidth="11" />
      <path d="M62 80L60 100" stroke={PAL.paper} strokeWidth="4" opacity=".7" />
      <path d="M76 80L78 100" stroke={PAL.steel} strokeWidth="11" />
      <rect x="51" y="96" width="15" height="8" rx="3" fill={PAL.steel} />
      <rect x="73" y="96" width="15" height="8" rx="3" fill={PAL.line} />
      {/* The arms, the left reaching towards the glow, silver gloves */}
      <path d="M54 52L44 70" stroke={PAL.mist} strokeWidth="10" />
      <rect x="37" y="66" width="12" height="13" rx="4" fill={PAL.steel} />
      <path d="M86 52L90 76" stroke={PAL.steel} strokeWidth="10" />
      <rect x="84" y="72" width="12" height="13" rx="4" fill={PAL.line} />
      {/* The coat */}
      <Shade color={PAL.steel} opacity={1} at={[92, 66, 9, 30]}>
        <path d="M50 54Q50 44 60 42H80Q90 44 90 54V86H50Z" fill={PAL.mist} />
      </Shade>
      <path d="M70 46V86" stroke={PAL.steel} strokeWidth="2" />
      <path d="M50 70H90" stroke={PAL.paper} strokeWidth="3" opacity=".8" />
      <Shine d="M55 52V66" width={3} opacity={0.9} />
      {/* The hood with its gold face shield */}
      <Shade color={PAL.steel} opacity={1} at={[90, 30, 8, 22]}>
        <path d="M52 48Q50 14 70 14Q90 14 88 48Q80 52 70 52Q60 52 52 48Z" fill={PAL.mist} />
      </Shade>
      <rect x="57" y="22" width="26" height="18" rx="7" fill={PAL.yellowShade} />
      <rect x="57" y="22" width="22" height="16" rx="7" fill={PAL.yellow} />
      <Shine d="M61 27Q63 25 67 25" color={PAL.yellowShine} width={2.6} opacity={0.9} />
      <Shine d="M55 28Q56 18 64 16" width={2.6} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
