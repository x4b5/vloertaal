import type { JSX } from 'react';
import { PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "het schriftje": the little notebook that goes between home and the group — an open notebook with
  // a red cover: lines on the left page, a small photo of the child and lines on the right page, and a
  // pen lying on it.
  'w.schriftje': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The cover behind the pages (depth) */}
      <path d="M8 34L60 28L112 34V100L60 106L8 100Z" fill={PAL.red} />
      <path d="M60 28L112 34V100L60 106Z" fill={PAL.redShade} />
      {/* The two pages */}
      <path d="M12 32L60 26V100L12 96Z" fill={PAL.white} />
      <path d="M60 26L108 32V96L60 100Z" fill={PAL.paperShade} />
      <path d="M60 26V100" stroke={PAL.mist} strokeWidth="2" />
      {/* Lines on the left page */}
      <path d="M20 44L52 41M20 56L52 53M20 68L52 65M20 80L44 78" stroke={PAL.line} strokeWidth="2.4" />
      {/* The photo of the child and lines on the right page */}
      <rect x="68" y="36" width="26" height="24" rx="2" fill={PAL.white} />
      <rect x="71" y="39" width="20" height="18" rx="1.5" fill={PAL.ice} />
      <circle cx="81" cy="47" r="7.4" fill={PAL.brown} />
      <Shade color={SKIN.bram[1]} opacity={1} at={[88, 50, 3, 8]}>
        <circle cx="81" cy="49" r="6" fill={SKIN.bram[0]} />
      </Shade>
      <path d="M75 46Q81 40 87 46Q83 44 75 46Z" fill={PAL.brown} />
      <rect x="74" y="54" width="14" height="3" rx="1.5" fill={PAL.red} />
      <path d="M68 70L100 73M68 82L94 84" stroke={PAL.line} strokeWidth="2.4" />
      {/* The pen */}
      <g transform="rotate(-32 70 92)">
        <rect x="38" y="88" width="52" height="8" rx="4" fill={PAL.sky} />
        <rect x="78" y="88" width="12" height="8" rx="3" fill={PAL.skyShade} />
        <path d="M38 88L28 92L38 96Z" fill={PAL.card} />
        <path d="M31 90.8L28 92L31 93.2Z" fill={PAL.ink} />
      </g>
      <Shine d="M18 36L30 34.6" width={3} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
