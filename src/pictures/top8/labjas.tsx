import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de labjas": the lab coat — a white lab coat on a hanger: a high collar, its front closed with a row
  // of buttons, two low pockets, and in the breast pocket a pair of safety glasses (big ice-blue lenses
  // on a dark frame) hooked over the edge, with a pen.
  'w.labjas': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The hanger */}
      <path d="M60 20V13Q60 7 66 7" fill="none" stroke={PAL.steel} strokeWidth="3.4" />
      <path d="M34 26L60 18L86 26" fill="none" stroke={PAL.steel} strokeWidth="4" />
      {/* The sleeves */}
      <path d="M30 28L20 40L18 100H31L36 54Z" fill={PAL.paperShade} />
      <path d="M90 28L100 40L102 100H89L84 54Z" fill={PAL.mist} />
      {/* The body of the coat */}
      <Shade color={PAL.paperShade} opacity={1} at={[96, 66, 16, 50]}>
        <path d="M30 28L46 22H74L90 28L88 108H32Z" fill={PAL.white} />
      </Shade>
      {/* The high collar */}
      <path d="M46 22L60 40L74 22L68 19H52Z" fill={PAL.mist} />
      <path d="M46 22L60 40L54 44L42 28Z" fill={PAL.paperShade} />
      <path d="M74 22L60 40L66 44L78 28Z" fill={PAL.mist} />
      <path d="M60 40V108" stroke={PAL.mist} strokeWidth="2" />
      <g fill={PAL.line}>
        <circle cx="56" cy="52" r="2.2" />
        <circle cx="56" cy="68" r="2.2" />
        <circle cx="56" cy="84" r="2.2" />
      </g>
      {/* The low pockets */}
      <rect x="36" y="80" width="16" height="13" rx="2" fill={PAL.paperShade} />
      <rect x="68" y="80" width="16" height="13" rx="2" fill={PAL.mist} />
      {/* The safety glasses in the breast pocket, and a pen */}
      <rect x="77" y="36" width="3" height="12" rx="1.2" fill={PAL.blue} />
      <rect x="62" y="35" width="13" height="11" rx="4.4" fill={PAL.slate} />
      <rect x="75" y="35" width="13" height="11" rx="4.4" fill={PAL.slate} />
      <rect x="64" y="37" width="9" height="7" rx="3" fill={PAL.ice} />
      <rect x="77" y="37" width="9" height="7" rx="3" fill={PAL.ice} />
      <rect x="64" y="45" width="22" height="11" rx="2" fill={PAL.mist} />
      <Shine d="M36 36Q35 50 36 66" width={3.4} opacity={0.9} color={PAL.paper} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
