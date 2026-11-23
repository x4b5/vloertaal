import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de straatnaam": the street name — a blue street sign with a white rim on a grey pole at the
  // corner of the pavement; the name is drawn as white word blocks (no letters).
  'w.straatnaam': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={22} ry={3.5} />
      {/* The pole */}
      <rect x="55" y="54" width="10" height="51" rx="3" fill={PAL.steel} />
      <rect x="61" y="54" width="4" height="51" rx="2" fill={PAL.slate} opacity=".55" />
      {/* The sign: depth edge, face, white rim, the name as word blocks */}
      <rect x="10" y="26" width="100" height="38" rx="7" fill={PAL.blueShade} transform="translate(0 4)" />
      <rect x="10" y="26" width="100" height="38" rx="7" fill={PAL.blue} />
      <rect x="15" y="31" width="90" height="28" rx="4.5" fill="none" stroke={PAL.white} strokeWidth="2.6" />
      <path d="M26 45H58M66 45H94" stroke={PAL.white} strokeWidth="7" strokeLinecap="round" />
      <Shine d="M14 38Q14 30 22 30" width={2.6} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
