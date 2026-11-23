import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de usb-stick": the USB stick — one big blue USB stick, slanted: the plastic body with a ring for a
  // key cord at the back and a little light, and the steel plug in front with its two square holes.
  'w.usbstick': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <g transform="rotate(-35 60 60)">
        {/* The steel plug */}
        <rect x="82" y="46" width="26" height="28" rx="2" fill={PAL.steel} transform="translate(0 3)" />
        <rect x="82" y="46" width="26" height="28" rx="2" fill={PAL.mist} />
        <rect x="90" y="52" width="7" height="6" rx="1" fill={PAL.slate} />
        <rect x="90" y="62" width="7" height="6" rx="1" fill={PAL.slate} />
        {/* The body */}
        <rect x="14" y="40" width="72" height="40" rx="9" fill={PAL.blueShade} transform="translate(0 4)" />
        <Shade color={PAL.blueShade} opacity={1} at={[60, 84, 60, 10]}>
          <rect x="14" y="40" width="72" height="40" rx="9" fill={PAL.blue} />
        </Shade>
        {/* The ring hole and the light */}
        <circle cx="26" cy="60" r="5.4" fill={PAL.white} />
        <circle cx="26" cy="60" r="5.4" fill="none" stroke={PAL.blueShade} strokeWidth="2" />
        <rect x="44" y="52" width="30" height="16" rx="4" fill={PAL.blueLight} />
        <circle cx="78" cy="60" r="2.4" fill={PAL.leaf} />
        <Shine d="M22 46H64" width={3.4} opacity={0.6} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
