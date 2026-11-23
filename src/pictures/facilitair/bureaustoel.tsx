import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de bureaustoel": the office chair — a navy office chair: a tall padded back, a padded seat with two
  // armrests, the steel gas lift and the five-star base on little black wheels.
  'w.bureaustoel': () => (
    <g strokeLinejoin="round">
      <ellipse cx="60" cy="106" rx="40" ry="4.5" fill="#000" opacity=".14" />
      {/* The five-star base and the wheels */}
      <path d="M60 92L24 98M60 92L96 98M60 92L42 104M60 92L80 104M60 92L66 88" stroke={PAL.slate} strokeWidth="5.5" strokeLinecap="round" />
      {[[22, 100], [98, 100], [41, 106], [81, 106]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4.4" fill={PAL.slateDark} />
      ))}
      {/* The gas lift */}
      <rect x="56" y="70" width="8" height="24" rx="2" fill={PAL.steel} />
      <rect x="60" y="70" width="4" height="24" rx="2" fill={PAL.slate} />
      {/* The back and its post */}
      <rect x="56" y="56" width="8" height="16" fill={PAL.slate} />
      <rect x="34" y="8" width="52" height="52" rx="14" fill={PAL.navy} />
      <path d="M76 9Q86 12 86 22V46Q86 58 74 60Q80 52 80 40V22Q80 14 76 9Z" fill={PAL.navyShade} />
      <Shine d="M42 18Q40 28 41 42" width={3.4} opacity={0.4} />
      {/* The armrests */}
      <path d="M26 66V56H40" fill="none" stroke={PAL.slate} strokeWidth="5.5" strokeLinecap="round" />
      <path d="M94 66V56H80" fill="none" stroke={PAL.slateDark} strokeWidth="5.5" strokeLinecap="round" />
      {/* The seat */}
      <path d="M22 66Q22 60 30 60H90Q98 60 98 66V70Q98 76 90 76H30Q22 76 22 70Z" fill={PAL.navy} />
      <path d="M22 70H98Q98 76 90 76H30Q22 76 22 70Z" fill={PAL.navyShade} />
      <Shine d="M30 64H62" width={3} opacity={0.45} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
