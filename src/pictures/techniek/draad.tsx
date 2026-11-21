import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** Copper: a lighter and a darker step of terracotta (no new hue). */
const COPPER = PAL.clayLight;
const COPPER_DARK = PAL.clay;

export default {
  // "de draad": the electric wire — a loose coil of blue wire, one end coming out in front and stripped, the bright copper core showing
  'w.draad': () => (
    <g>
      <Ground cx={58} cy={104} rx={42} ry={4.5} />
      {/* The coil: loose loops one behind the other, the back ones in shade */}
      <g fill="none" strokeWidth="6.5">
        <ellipse cx="48" cy="58" rx="34" ry="28" stroke={PAL.blueShade} transform="rotate(-8 48 58)" />
        <ellipse cx="53" cy="61" rx="33" ry="27" stroke={PAL.blue} transform="rotate(4 53 61)" />
        <ellipse cx="57" cy="64" rx="32" ry="26" stroke={PAL.blueShade} transform="rotate(-4 57 64)" />
        <ellipse cx="61" cy="66" rx="31" ry="26" stroke={PAL.blue} transform="rotate(8 61 66)" />
      </g>
      <Shine d="M22 50Q28 36 44 31" opacity={0.6} width={3} />
      {/* The free end: out of the coil to the front right, then the stripped copper core */}
      <path d="M78 88Q86 97 94 96" fill="none" stroke={PAL.blue} strokeWidth="6.5" strokeLinecap="round" />
      <rect x="92" y="92.8" width="4" height="6.4" rx="1.4" fill={PAL.blueShade} transform="rotate(-6 94 96)" />
      <path d="M96 95.6L108 94.4" stroke={COPPER} strokeWidth="4.2" strokeLinecap="round" />
      <path d="M97 97.2L107.6 96.2" stroke={COPPER_DARK} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M98 94.4L104 93.8" stroke={PAL.yellowShine} strokeWidth="1.3" strokeLinecap="round" opacity=".9" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
