import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de cabine": the cab (where the driver sits) — the cab of the bin lorry, big and from the side (facing
  // left): through its large window the driver's seat and the steering wheel, a step and a grab handle by the
  // door, the mirror, the front wheel; the green body starts behind it (cut off).
  'w.cabine': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={56} cy={105} rx={50} ry={4} />
      {/* The body behind (cut off) */}
      <rect x="96" y="22" width="24" height="72" rx="3" fill={PAL.green} />
      <rect x="96" y="70" width="24" height="6" fill={PAL.yellow} />
      {/* The orange beacon on the roof */}
      <path d="M50 16H64V20H50Z" fill={PAL.orangeShade} />
      <path d="M49 17A8 8 0 0 1 65 17Z" fill={PAL.orange} />
      {/* The cab */}
      <Shade color={PAL.mist} opacity={1} at={[104, 66, 12, 50]}>
        <path d="M8 92V48Q8 20 34 20H88Q94 20 94 26V92Z" fill={PAL.paper} />
      </Shade>
      <rect x="8" y="70" width="86" height="22" fill={PAL.mist} />
      {/* The window, with the seat and the wheel inside */}
      <path d="M16 50Q17 28 36 28H86V58H16Z" fill={PAL.ice} />
      <path d="M62 34Q62 30 66 30H74Q78 30 78 34V58H62Z" fill={PAL.slate} />
      <rect x="58" y="50" width="26" height="8" rx="3" fill={PAL.slateDark} />
      <path d="M34 56L42 40" stroke={PAL.slateDark} strokeWidth="4" />
      <ellipse cx="42" cy="40" rx="4" ry="10" fill="none" stroke={PAL.ink} strokeWidth="4" transform="rotate(20 42 40)" />
      <Shine d="M22 46Q24 36 32 33" width={3} opacity={0.7} />
      {/* The door line, the handle and the step */}
      <path d="M54 62V88" stroke={PAL.steel} strokeWidth="1.8" />
      <rect x="58" y="64" width="10" height="4" rx="2" fill={PAL.steel} />
      <rect x="58" y="92" width="30" height="5" rx="2" fill={PAL.slate} />
      {/* The mirror at the front */}
      <path d="M12 36H6" stroke={PAL.slateDark} strokeWidth="3" />
      <rect x="2" y="30" width="7" height="18" rx="2" fill={PAL.slateDark} />
      <rect x="4" y="82" width="12" height="10" rx="2" fill={PAL.slateDark} />
      <rect x="9" y="72" width="6" height="6" rx="2" fill={PAL.yellow} />
      <circle cx="30" cy="94" r="10" fill={PAL.ink} />
      <circle cx="30" cy="94" r="4.2" fill={PAL.steel} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
