import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

/** A knee-high stocking from the side: the top band at the top, the heel on the left, the toe on the right. */
const SOCK = 'M34 16H74C76 40 74 60 70 76C70 82 72 86 80 88L100 92Q108 94 107 101Q106 106 98 106H52Q42 106 42 96L44 80C38 62 30 40 34 16Z';

export default {
  // "de steunkous": the support stocking — a long white knee-high stocking from the side, with a wide
  // ribbed sky-blue band at the top and grey rings that show how tightly it holds the leg.
  'w.steunkous': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <path d={SOCK} fill={PAL.mist} transform="translate(2 3)" />
      <Shade color={PAL.paperShade} opacity={1} at={[88, 60, 18, 60]}>
        <path d={SOCK} fill={PAL.white} />
      </Shade>
      {/* Grey compression rings */}
      <path d="M36 40Q54 44 74 40M38 56Q55 60 73 56M42 72Q56 75 70 72" fill="none" stroke={PAL.mist} strokeWidth="2.4" />
      {/* Heel and toe in a light grey */}
      <path d="M44 88Q44 104 54 104H60Q50 100 50 88Z" fill={PAL.paperShade} />
      <path d="M96 92Q106 94 105 101Q104 104 98 104H94Q100 98 96 92Z" fill={PAL.paperShade} />
      {/* The ribbed top band */}
      <rect x="31" y="10" width="46" height="16" rx="4" fill={PAL.skyShade} />
      <rect x="31" y="10" width="46" height="13" rx="4" fill={PAL.sky} />
      <path d="M38 13V21M45 13V21M52 13V21M59 13V21M66 13V21M71 13V21" stroke={PAL.skyShade} strokeWidth="1.6" />
      <Shine d="M40 32Q38 52 44 68" width={3.4} opacity={0.9} color={PAL.ice} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
