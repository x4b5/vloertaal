import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "schriftelijk": in writing (on paper or in an email) — a sheet with written lines and a pen
  // writing the last line, and next to it a sealed envelope (the email): both in writing, not spoken.
  'w.schriftelijk': () => (
    <g strokeLinejoin="round">
      {/* The sheet */}
      <g transform="rotate(-5 40 58)">
        <rect x="12" y="16" width="56" height="84" rx="5" fill={PAL.mist} />
        <Shade color={PAL.paperShade} opacity={1} at={[72, 56, 10, 84]}>
          <rect x="12" y="12" width="56" height="84" rx="5" fill={PAL.paper} />
        </Shade>
        <path d="M20 26H58M20 35H54M20 44H58M20 53H50M20 62H56" stroke={PAL.navy} strokeWidth="2.8" strokeLinecap="round" opacity=".75" />
        <path d="M20 71H38" stroke={PAL.navy} strokeWidth="2.8" strokeLinecap="round" opacity=".75" />
      </g>
      {/* The pen, writing */}
      <g transform="translate(42 70) rotate(-50)">
        <path d="M0 0L9 -4V4Z" fill={PAL.card} />
        <path d="M0 0L3.4 -1.5V1.5Z" fill={PAL.ink} />
        <rect x="8" y="-4.5" width="34" height="9" rx="3" fill={PAL.blue} />
        <rect x="8" y="0.5" width="34" height="4" rx="2" fill={PAL.blueShade} />
        <rect x="34" y="-5" width="10" height="10" rx="3" fill={PAL.slate} />
      </g>
      {/* The envelope */}
      <g transform="rotate(6 86 82)">
        <rect x="62" y="66" width="48" height="34" rx="4" fill={PAL.skyShade} transform="translate(0 3)" />
        <rect x="62" y="66" width="48" height="34" rx="4" fill={PAL.sky} />
        <path d="M63 68L86 86L109 68" fill="none" stroke={PAL.ice} strokeWidth="3.4" strokeLinecap="round" />
        <Shine d="M66 94V80" width={2.4} opacity={0.4} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
