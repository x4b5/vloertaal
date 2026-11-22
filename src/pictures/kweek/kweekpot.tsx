import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de kweekpot": the growing pot — a terracotta-coloured plastic plant pot with a rim, seen from a
  // little above, full of dark soil with a young green plant of four leaves growing out of it.
  'w.kweekpot': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={30} ry={4} />
      {/* The body of the pot, tapering down */}
      <Shade color={PAL.clayShade} opacity={1} at={[90, 84, 16, 30]}>
        <path d="M34 66H86L80 100Q80 104 76 104H44Q40 104 40 100Z" fill={PAL.clay} />
      </Shade>
      {/* The rim */}
      <Shade color={PAL.clayShade} opacity={1} at={[94, 62, 14, 12]}>
        <path d="M28 56H92V66Q92 70 88 70H32Q28 70 28 66Z" fill={PAL.clayLight} />
      </Shade>
      {/* The top: the inside rim and the soil */}
      <ellipse cx="60" cy="56" rx="32" ry="8" fill={PAL.clayShade} />
      <ellipse cx="60" cy="57" rx="28" ry="6" fill={PAL.brown} />
      <Shine d="M38 76L42 96" width={3.4} opacity={0.5} />
      {/* The young plant */}
      <path d="M60 58V30" stroke={PAL.green} strokeWidth="4" strokeLinecap="round" />
      <path d="M60 50Q44 54 34 44Q46 36 60 50Z" fill={PAL.leaf} />
      <path d="M60 46Q76 50 86 40Q74 32 60 46Z" fill={PAL.leafShade} />
      <path d="M60 34Q48 34 42 22Q56 20 60 34Z" fill={PAL.leaf} />
      <path d="M60 32Q72 30 78 18Q64 16 60 32Z" fill={PAL.leafShade} />
      <path d="M60 50Q50 49 40 45M60 46Q70 45 80 41" fill="none" stroke={PAL.green} strokeWidth="1.4" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
