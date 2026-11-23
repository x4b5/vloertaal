import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de beker": the cup (with a handle) — a toddler's plastic drinking cup: a round orange cup with
  // one big handle on the side and a sky blue lid with a short drinking spout.
  'w.beker': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={56} cy={104} rx={36} ry={4.5} />
      {/* The handle */}
      <path d="M78 52Q102 52 100 72Q98 88 78 88" fill="none" stroke={PAL.orangeShade} strokeWidth="9" />
      {/* The cup, shaded on the right */}
      <Shade color={PAL.orangeShade} opacity={1} at={[84, 76, 10, 34]}>
        <path d="M24 44H86L80 96Q79 104 70 104H40Q31 104 30 96Z" fill={PAL.orange} />
      </Shade>
      {/* The lid and its spout */}
      <path d="M42 36Q44 20 52 18H62Q68 20 68 36Z" fill={PAL.skyShade} />
      <path d="M44 36Q46 22 53 20H60Q63 22 63 36Z" fill={PAL.sky} />
      <rect x="20" y="34" width="70" height="12" rx="5" fill={PAL.sky} />
      <rect x="76" y="34" width="14" height="12" rx="5" fill={PAL.skyShade} />
      <Shine d="M34 54L37 92" width={4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
