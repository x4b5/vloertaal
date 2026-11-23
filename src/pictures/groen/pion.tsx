import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de pion": the traffic cone — an orange cone with two white reflective bands, on a square dark base.
  'w.pion': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={44} ry={4.5} />
      {/* The square base, seen a little from above */}
      <path d="M16 94L30 82H104L90 94Z" fill={PAL.slate} />
      <path d="M90 94L104 82V88L90 100Z" fill={PAL.slateDark} />
      <rect x="16" y="94" width="74" height="6" rx="1.6" fill={PAL.slateDark} />
      {/* The cone */}
      <Shade color={PAL.orangeShade} opacity={1} at={[84, 60, 14, 50]}>
        <path d="M54 14Q60 10 66 14L84 90H36Z" fill={PAL.orange} />
      </Shade>
      {/* The two white bands (each a slice of the cone) */}
      <Shade color={PAL.paperShade} opacity={1} at={[84, 60, 14, 50]}>
        <path d="M49.7 34H70.3L73.7 48H46.3Z" fill={PAL.white} />
        <path d="M43.5 60H76.5L80 75H40Z" fill={PAL.white} />
      </Shade>
      <Shine d="M54 20L46 52" color={PAL.orangeLight} width={3.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
