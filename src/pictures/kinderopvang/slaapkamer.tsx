import type { JSX } from 'react';
import { PAL, Sparkle } from '../kit';

export default {
  // "de slaapkamer": the bedroom — looking in through an open door into the quiet, dark sleeping room
  // of the day care: the moon and two stars in the window, and two small cots side by side in the
  // half-dark. The door stands open against the wall on the left.
  'w.slaapkamer': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The wall round the door */}
      <rect x="8" y="8" width="104" height="100" rx="3" fill={PAL.mist} />
      <rect x="8" y="100" width="104" height="8" fill={PAL.paperShade} />
      {/* The dark room behind the door frame */}
      <rect x="30" y="14" width="74" height="92" fill={PAL.navy} />
      <path d="M30 86H104V106H30Z" fill={PAL.navyShade} />
      {/* The window with the moon and the stars */}
      <rect x="58" y="24" width="34" height="28" rx="2" fill={PAL.navyShade} />
      <path d="M76 30A8 8 0 1 0 84 42A6 6 0 1 1 76 30Z" fill={PAL.yellow} />
      <Sparkle x={65} y={32} r={3.6} color={PAL.yellowLight} />
      <Sparkle x={86} y={28} r={2.6} color={PAL.yellowLight} />
      {/* Two cots */}
      {[36, 72].map((x) => (
        <g key={x}>
          <rect x={x} y="70" width="28" height="20" rx="2" fill={PAL.navyShade} />
          <path d={`M${x + 5} 72V88M${x + 10} 72V88M${x + 15} 72V88M${x + 20} 72V88M${x + 25} 72V88`} stroke={PAL.blueShade} strokeWidth="2" opacity=".8" />
          <rect x={x - 2} y="68" width="32" height="4" rx="2" fill={PAL.blueShade} />
          <rect x={x - 2} y="66" width="4" height="28" rx="2" fill={PAL.blueShade} />
          <rect x={x + 26} y="66" width="4" height="28" rx="2" fill={PAL.blueShade} />
        </g>
      ))}
      {/* The door frame and the open door */}
      <path d="M30 14V106M104 14V106M28 12H106" stroke={PAL.cardShade} strokeWidth="5" />
      <path d="M14 18L30 14V106L14 102Z" fill={PAL.card} />
      <circle cx="19" cy="62" r="2.6" fill={PAL.cardDark} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
