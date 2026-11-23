import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

/** A knee-high stocking from the side: the top band at the top, the heel on the left, the toe on the right. */
const SOCK = 'M40 18H72C74 40 72 60 66 78C66 86 72 88 82 90L100 94Q108 96 106 102Q104 106 96 106H56Q46 106 46 96L48 80C38 62 34 40 40 18Z';
const BEIGE = '#f0c48a';

export default {
  // "de steunkous": the support stocking — a long beige knee-high stocking from the side (heel on the left,
  // toe on the right), with a wide ribbed band at the top and darker rings that show how tight it is.
  'w.steunkous': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <path d={SOCK} fill={PAL.cardShade} transform="translate(2 3)" />
      <Shade color={PAL.card} opacity={1} at={[84, 60, 16, 60]}>
        <path d={SOCK} fill={BEIGE} />
      </Shade>
      {/* Rings: it presses the leg tightly */}
      <path d="M40 38Q56 42 72 38M42 54Q56 58 70 54M46 70Q56 73 67 70" fill="none" stroke={PAL.cardShade} strokeWidth="2.4" />
      {/* Heel and toe, a darker knit */}
      <path d="M48 88Q46 104 58 104H64Q54 100 54 88Z" fill={PAL.cardShade} />
      <path d="M96 94Q106 96 104 102Q102 104 96 104H92Q98 98 96 94Z" fill={PAL.cardShade} />
      {/* The ribbed top band */}
      <rect x="37" y="10" width="38" height="16" rx="4" fill={PAL.cardDark} />
      <rect x="37" y="10" width="38" height="13" rx="4" fill={PAL.cardShade} />
      <path d="M43 13V21M49 13V21M55 13V21M61 13V21M67 13V21" stroke={PAL.cardDark} strokeWidth="1.6" />
      <Shine d="M44 32Q42 52 48 68" width={3.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
