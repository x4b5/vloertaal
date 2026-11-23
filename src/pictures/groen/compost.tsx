import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de compost": the compost — a wooden slatted bin, heaped full of dark crumbly compost, with an old
  // leaf, an apple core and a bit of eggshell on top.
  'w.compost': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={4.5} />
      {/* The heap of compost, above the bin */}
      <path d="M14 56Q22 34 46 32Q60 24 76 30Q100 32 108 48L92 60H14Z" fill={PAL.brown} />
      <path d="M76 30Q100 32 108 48L92 60H80Q88 44 76 30Z" fill="#4f2d17" />
      {[[30, 46], [44, 40], [58, 34], [52, 50], [70, 44], [38, 54], [84, 42]].map(([x, y]) => (
        <circle key={`${x}`} cx={x} cy={y} r="2.4" fill={PAL.cardDark} />
      ))}
      {/* An old leaf, an apple core and a bit of eggshell */}
      <path d="M26 46Q30 34 42 36Q38 46 26 46Z" fill={PAL.yellowShade} />
      <path d="M62 30Q66 26 70 30V38Q66 42 62 38Z" fill={PAL.redLight} />
      <path d="M66 24V28" stroke={PAL.brown} strokeWidth="2" strokeLinecap="round" />
      <path d="M82 40L88 36L92 40L90 44H84Z" fill={PAL.paper} />
      {/* The bin: slats in front (compost between them), the side on the right */}
      <path d="M92 60L108 48V90L92 104Z" fill="#4f2d17" />
      <path d="M92 64L108 52V58L92 70ZM92 78L108 66V72L92 84ZM92 92L108 80V86L92 98Z" fill={PAL.cardDark} />
      <rect x="14" y="58" width="78" height="46" rx="2" fill={PAL.brown} />
      {[58, 73, 88].map((y) => (
        <g key={y}>
          <rect x="12" y={y} width="82" height="11" rx="2" fill={PAL.wood} />
          <path d={`M15 ${y + 2.6}H90`} stroke={PAL.card} strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
      <rect x="12" y="56" width="7" height="48" rx="2" fill={PAL.cardDark} />
      <rect x="87" y="56" width="7" height="48" rx="2" fill={PAL.cardDark} />
      <Shine d="M22 42Q26 36 34 34" width={2.6} opacity={0.35} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
