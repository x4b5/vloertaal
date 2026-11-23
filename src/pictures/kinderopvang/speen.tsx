import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de speen": the dummy, the pacifier — one dummy seen a little from the side: the soft light-brown
  // teat at the back, the round sky blue shield with its two air holes, and the yellow ring to hold it
  // by at the front.
  'w.speen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The teat, sticking out behind the shield */}
      <path d="M70 46Q82 26 96 28Q106 32 100 46Q92 58 76 58Z" fill="#f6dcae" />
      <path d="M100 46Q92 58 76 58L80 50Q92 48 102 38Z" fill={PAL.card} opacity=".7" />
      {/* The depth edge and the shield */}
      <ellipse cx="56" cy="66" rx="36" ry="30" fill={PAL.skyShade} transform="rotate(-18 56 66)" />
      <Shade color={PAL.skyShade} opacity={1} at={[90, 70, 14, 34]}>
        <ellipse cx="52" cy="62" rx="36" ry="30" fill={PAL.sky} transform="rotate(-18 52 62)" />
      </Shade>
      <ellipse cx="30" cy="52" rx="5" ry="6" fill={PAL.skyShade} />
      <ellipse cx="74" cy="76" rx="5" ry="6" fill={PAL.skyShade} />
      {/* The button and the ring */}
      <circle cx="52" cy="62" r="11" fill={PAL.ice} />
      <path d="M52 66Q32 70 32 88Q34 104 52 102Q70 100 70 84Q68 70 52 66Z" fill="none" stroke={PAL.yellowShade} strokeWidth="9" />
      <path d="M52 64Q30 68 30 86Q32 102 50 100Q68 98 68 82Q66 68 52 64Z" fill="none" stroke={PAL.yellow} strokeWidth="7" />
      <Shine d="M26 44Q32 34 42 32" width={4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
