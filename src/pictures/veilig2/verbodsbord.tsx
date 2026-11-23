import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het verbodsbord": the prohibition sign — a round sign as in ISO 7010 (P002, no smoking): a thick
  // red ring, white inside, a black cigarette with its smoke, and the red diagonal bar from the top left
  // to the bottom right over it. No text.
  'w.verbodsbord': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The depth edge and the red ring */}
      <circle cx="60" cy="63" r="48" fill={PAL.redShade} />
      <circle cx="60" cy="59" r="48" fill={PAL.red} />
      {/* The white field, a light shade on its right */}
      <circle cx="60" cy="59" r="36" fill={PAL.white} />
      <path d="M86 34A36 36 0 0 1 60 95A40 40 0 0 0 86 34Z" fill={PAL.paperShade} />
      {/* The cigarette and its smoke */}
      <rect x="26" y="62" width="58" height="11" rx="2" fill={PAL.ink} />
      <rect x="86" y="62" width="6" height="11" rx="1.5" fill={PAL.ink} />
      <path d="M86 56C80 50 92 46 86 38M93 56C87 50 99 46 93 38" fill="none" stroke={PAL.ink} strokeWidth="3.6" />
      {/* The red bar, top left to bottom right */}
      <path d="M35 34L85 84" stroke={PAL.red} strokeWidth="10" strokeLinecap="butt" />
      <Shine d="M22 44Q30 22 52 14" width={4} opacity={0.55} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
