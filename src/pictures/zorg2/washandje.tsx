import type { JSX } from 'react';
import { PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "het washandje": the washcloth (a small cloth like a glove) — a blue terry washcloth mitt worn over a
  // carer's hand (only the wrist and sleeve show under its white cuff band), a few soap bubbles at its top.
  'w.washandje': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The carer's sleeve and wrist, under the mitt */}
      <rect x="45" y="94" width="30" height="28" rx="3" fill={PAL.purple} />
      <rect x="44" y="92" width="32" height="8" rx="2" fill={PAL.purpleShade} />
      <rect x="49" y="82" width="22" height="13" fill={SKIN.amina[0]} />
      <rect x="64" y="82" width="7" height="13" fill={SKIN.amina[1]} />
      {/* The mitt: a depth edge, then the cloth with its right side in shade */}
      <rect x="30" y="22" width="60" height="68" rx="16" fill={PAL.skyShade} transform="translate(0 3)" />
      <Shade color={PAL.skyShade} opacity={1} at={[98, 56, 14, 46]}>
        <rect x="30" y="22" width="60" height="68" rx="16" fill={PAL.sky} />
      </Shade>
      {/* Terry loops */}
      <path d="M40 40H48M56 40H64M72 40H78M44 50H52M60 50H68M40 60H48M56 60H64M72 60H78M44 70H52M60 70H68" stroke={PAL.ice} strokeWidth="2.2" opacity=".55" />
      {/* The white cuff band at the opening */}
      <path d="M30 74H90V80Q90 92 78 92H42Q30 92 30 80Z" fill={PAL.white} />
      <path d="M76 74H90V80Q90 92 78 92H76Z" fill={PAL.paperShade} />
      <path d="M32 81H88" stroke={PAL.ice} strokeWidth="3" />
      {/* The hanging loop on the top right */}
      <path d="M80 26Q86 12 96 18Q100 24 88 30" fill="none" stroke={PAL.white} strokeWidth="3.4" />
      <path d="M80 26Q86 12 96 18Q100 24 88 30" fill="none" stroke={PAL.paperShade} strokeWidth="1.4" opacity=".8" />
      <Shine d="M38 52Q37 34 48 29" width={3.6} opacity={0.6} />
      {/* Soap bubbles */}
      {[[26, 30, 6], [18, 42, 4.4], [32, 16, 4], [22, 22, 3]].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={PAL.white} stroke={PAL.ice} strokeWidth="1.8" />
      ))}
    </g>
  ),
} as Record<string, () => JSX.Element>;
