import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de papierbak": the paper bin (for old paper) — a tall blue bin seen from the front left, its lid with a
  // wide slot, white sheets of old paper sticking up out of the slot.
  'w.papierbak': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={36} ry={4.5} />
      {/* The right side */}
      <path d="M80 40L96 26V92L80 105Z" fill={PAL.blueShade} />
      {/* The sheets in the slot (behind the lid's front edge) */}
      <path d="M40 34L44 10L70 14L66 36Z" fill={PAL.paperShade} />
      <path d="M46 34L54 12L78 22L70 38Z" fill={PAL.white} />
      <path d="M56 20L72 26M54 26L68 31" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      <path d="M34 34L30 18L50 16L52 34Z" fill={PAL.paper} />
      <path d="M34 22L46 21" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      {/* The lid with its slot */}
      <path d="M22 44H82V40L98 26V30L82 46H22Z" fill={PAL.blueShade} />
      <path d="M22 40L36 28H52L38 40Z" fill={PAL.blueLight} />
      <path d="M62 40L76 28H96L82 40Z" fill={PAL.blueLight} />
      <path d="M38 40L52 28H76L62 40Z" fill={PAL.navy} />
      {/* The front */}
      <rect x="24" y="44" width="56" height="61" rx="3" fill={PAL.blue} />
      <rect x="36" y="60" width="32" height="26" rx="3" fill={PAL.blueShade} />
      <path d="M42 68H62M42 76H56" stroke={PAL.blueLight} strokeWidth="2.6" strokeLinecap="round" />
      <Shine d="M29 50V96" width={3.2} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
