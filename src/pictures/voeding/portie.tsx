import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de portie": the portion — one white plate with one person's helping on it: one piece of meat, a
  // scoop of mash and a small heap of green beans.
  'w.portie': () => (
    <g strokeLinejoin="round">
      {/* The plate: its depth edge, the rim and the well */}
      <ellipse cx="60" cy="78" rx="52" ry="24" fill={PAL.mist} />
      <ellipse cx="60" cy="74" rx="52" ry="24" fill={PAL.paper} />
      <ellipse cx="60" cy="75" rx="38" ry="16" fill={PAL.paperShade} />
      <ellipse cx="60" cy="73" rx="37" ry="15" fill={PAL.white} />
      {/* The mash */}
      <ellipse cx="38" cy="70" rx="13" ry="9" fill={PAL.yellowShade} />
      <ellipse cx="37" cy="66" rx="12" ry="9" fill={PAL.yellowLight} />
      {/* The green beans */}
      <path d="M42 82L58 76M46 86L62 80M50 88L64 84" stroke={PAL.green} strokeWidth="4.5" strokeLinecap="round" />
      {/* The meat: cooked brown with grill lines */}
      <path d="M58 70Q60 60 74 60Q90 60 92 70Q92 80 78 82Q60 82 58 70Z" fill={PAL.cardDark} />
      <path d="M58 70Q60 60 74 60Q90 60 92 70Q86 66 74 66Q62 66 58 70Z" fill={PAL.wood} />
      <path d="M68 64L64 76M78 64L74 78M88 66L84 78" stroke={PAL.brown} strokeWidth="2" strokeLinecap="round" />
      <Shine d="M16 66Q20 58 32 54" width={3} opacity={0.9} color={PAL.white} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
