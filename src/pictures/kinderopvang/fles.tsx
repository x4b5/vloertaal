import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

const TINT = '#e3f5ff';

export default {
  // "de fles": the bottle (for a baby) — a baby bottle standing upright: a clear body two-thirds full
  // of white milk with measuring marks on its side, a sky blue screw ring, and a soft light-brown teat
  // on top.
  'w.fles': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={26} ry={4} />
      {/* The teat */}
      <path d="M52 34Q52 26 56 20Q56 12 60 12Q64 12 64 20Q68 26 68 34Z" fill="#f6dcae" />
      <path d="M62 14Q64 16 64 20Q68 26 68 34H62Z" fill={PAL.card} opacity=".7" />
      {/* The ring */}
      <rect x="40" y="32" width="40" height="14" rx="4" fill={PAL.sky} />
      <rect x="68" y="32" width="12" height="14" rx="4" fill={PAL.skyShade} />
      <path d="M46 36V42M52 36V42M58 36V42" stroke={PAL.skyShade} strokeWidth="1.6" />
      {/* The clear body and the milk in it */}
      <path d="M42 46H78V96Q78 104 70 104H50Q42 104 42 96Z" fill={TINT} />
      <path d="M42 62H78V96Q78 104 70 104H50Q42 104 42 96Z" fill={PAL.white} />
      <path d="M70 62H78V96Q78 104 70 104Z" fill={PAL.paperShade} />
      <path d="M42 62H78" stroke={PAL.paperShade} strokeWidth="2" />
      {/* The measuring marks */}
      <path d="M68 54H76M70 70H76M68 80H76M70 90H76" stroke={PAL.line} strokeWidth="1.8" />
      <Shine d="M47 50V94" width={3.4} opacity={0.9} color={PAL.white} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
