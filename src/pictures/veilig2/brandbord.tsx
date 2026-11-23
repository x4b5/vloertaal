import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het brandbord": the fire equipment sign — a red square as in ISO 7010 (F001, fire extinguisher): a
  // white fire extinguisher with its valve, handle and hose. No text.
  'w.brandbord': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The depth edge and the red plate */}
      <rect x="14" y="12" width="92" height="92" rx="6" fill={PAL.redShade} transform="translate(0 4)" />
      <rect x="14" y="12" width="92" height="92" rx="6" fill={PAL.red} />
      {/* The extinguisher in white */}
      <g fill={PAL.white} stroke={PAL.white}>
        <rect x="50" y="40" width="26" height="54" rx="10" strokeWidth="1" />
        <rect x="56" y="30" width="14" height="12" rx="2" strokeWidth="1" />
      </g>
      <path d="M58 32L82 24M62 36L80 36" stroke={PAL.white} strokeWidth="5" />
      <path d="M58 34Q40 34 40 52V74" fill="none" stroke={PAL.white} strokeWidth="5" />
      <rect x="36" y="72" width="8" height="12" rx="2" fill={PAL.white} />
      <path d="M71 48V86" stroke={PAL.paperShade} strokeWidth="5" />
      <Shine d="M22 26Q24 18 34 18" width={3.4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
