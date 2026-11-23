import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de toiletborstel": the toilet brush — a white round holder on the floor, the brush lifted half out
  // of it and leaning: a long blue handle and the round grey bristle head just above the rim.
  'w.toiletborstel': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={105} rx={26} ry={4} />
      {/* The back of the holder's opening */}
      <ellipse cx="56" cy="62" rx="22" ry="6" fill={PAL.slate} />
      {/* The brush: handle and bristle head */}
      <g transform="rotate(18 56 70)">
        <rect x="52" y="8" width="8" height="54" rx="4" fill={PAL.sky} />
        <rect x="56.5" y="8" width="3.5" height="54" rx="1.75" fill={PAL.skyShade} />
        <circle cx="56" cy="11" r="5" fill={PAL.skyShade} />
        <rect x="40" y="52" width="32" height="24" rx="11" fill={PAL.slate} />
        <path d="M40 58H72M40 64H72M40 70H72" stroke={PAL.slateDark} strokeWidth="1.6" />
        <path d="M38 56V72M74 56V72" stroke={PAL.slate} strokeWidth="2.4" strokeLinecap="round" />
      </g>
      {/* The holder's front */}
      <Shade color={PAL.paperShade} opacity={1} at={[78, 86, 10, 26]}>
        <path d="M34 62Q34 68 56 68Q78 68 78 62L74 100Q74 105 56 105Q38 105 38 100Z" fill={PAL.paper} />
      </Shade>
      <path d="M34 62A22 6 0 0 0 78 62" fill="none" stroke={PAL.mist} strokeWidth="3" />
      <rect x="38" y="90" width="36" height="5" fill={PAL.sky} opacity=".8" />
      <Shine d="M42 74V86" width={3.2} color={PAL.white} opacity={1} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
