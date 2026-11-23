import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het allergeen": the allergen (food that makes some people very ill) — a food package with its label
  // (grey lines); one line of the label is ringed in red, and a big yellow warning triangle with an
  // exclamation mark stands in front: this food has something in it that makes some people ill.
  'w.allergeen': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={46} ry={4} />
      {/* The package */}
      <path d="M22 26L32 18H82L72 26Z" fill={PAL.cardShade} />
      <path d="M72 26L82 18V96L72 104Z" fill={PAL.cardDark} />
      <Shade color={PAL.cardShade} opacity={0.5} at={[78, 64, 6, 40]}>
        <rect x="22" y="26" width="50" height="78" rx="2" fill={PAL.card} />
      </Shade>
      {/* The label */}
      <rect x="28" y="34" width="38" height="44" rx="3" fill={PAL.white} />
      <path d="M33 42H61M33 50H55M33 58H61M33 66H50" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="29" y="53" width="36" height="10" rx="5" fill="none" stroke={PAL.red} strokeWidth="2.6" />
      <Shine d="M26 30H40" width={2.6} opacity={0.5} />
      {/* The warning triangle */}
      <path d="M82 46L108 92H56Z" fill={PAL.yellowShade} transform="translate(0 3)" strokeWidth="8" stroke={PAL.yellowShade} />
      <path d="M82 46L108 92H56Z" fill={PAL.yellow} strokeWidth="8" stroke={PAL.yellow} />
      <path d="M82 60V76" stroke={PAL.ink} strokeWidth="5.4" strokeLinecap="round" />
      <circle cx="82" cy="85" r="3.2" fill={PAL.ink} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
