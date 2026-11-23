import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het restafval": the general waste (what cannot be sorted) — a dark grey bin with its lid open, a black bin
  // bag folded over its rim, and mixed rubbish poking out of it: a broken mug, a worn shoe and a crumpled tissue.
  'w.restafval': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={38} ry={4.5} />
      {/* The lid, open, behind */}
      <path d="M30 40L40 12H96L86 40Z" fill={PAL.slateDark} />
      <path d="M42 18H88" stroke={PAL.slate} strokeWidth="2.4" />
      {/* The rubbish poking out */}
      <path d="M38 48Q36 30 50 28Q60 30 58 48Z" fill={PAL.paper} />
      <path d="M44 36Q50 34 52 40" fill="none" stroke={PAL.paperShade} strokeWidth="2" />
      <path d="M62 48V30L72 26L76 32V48Z" fill={PAL.white} />
      <path d="M70 26L76 32H70Z" fill={PAL.paperShade} />
      <path d="M76 34Q84 34 82 42Q80 46 76 44" fill="none" stroke={PAL.white} strokeWidth="3" />
      <rect x="62" y="34" width="14" height="4" fill={PAL.red} />
      <path d="M72 48Q74 38 84 38Q92 36 96 42Q98 48 92 48Z" fill={PAL.brown} />
      {/* The bin */}
      <Shade color={PAL.slateDark} opacity={1} at={[96, 76, 12, 40]}>
        <path d="M28 46H92L86 100Q86 104 82 104H38Q34 104 34 100Z" fill={PAL.steel} />
      </Shade>
      <path d="M44 60V94M60 60V94M76 60V94" stroke={PAL.slate} strokeWidth="2" opacity=".5" />
      {/* The black bag folded over the rim */}
      <path d="M26 44H94L92 54Q84 58 78 54Q70 60 62 54Q54 60 46 54Q38 58 30 54Z" fill={PAL.ink} />
      <Shine d="M38 64V90" width={3.4} opacity={0.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
