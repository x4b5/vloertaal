import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het reddingsbord": the safe condition sign — a green rectangle as in ISO 7010 (E001, emergency exit):
  // a white running figure going into a white door frame on the right, and a white arrow pointing that way
  // on the left. No text.
  'w.reddingsbord': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The depth edge and the green plate */}
      <rect x="10" y="30" width="100" height="64" rx="5" fill={PAL.okShade} transform="translate(0 4)" />
      <rect x="10" y="30" width="100" height="64" rx="5" fill={PAL.ok} />
      {/* The door frame, the figure goes in at it */}
      <path d="M82 86V38H102V86" fill="none" stroke={PAL.white} strokeWidth="4.5" />
      {/* The running figure */}
      <g stroke={PAL.white} fill="none">
        <path d="M64 50L58 68" strokeWidth="8" />
        <path d="M62 54L72 58L78 52M62 54L52 56L48 64" strokeWidth="5" />
        <path d="M58 68L68 74L68 84M58 68L52 78L44 78" strokeWidth="5.5" />
      </g>
      <circle cx="69" cy="42" r="5.5" fill={PAL.white} />
      {/* The arrow */}
      <path d="M16 62H34" stroke={PAL.white} strokeWidth="7" />
      <path d="M30 52L42 62L30 72Z" fill={PAL.white} stroke={PAL.white} strokeWidth="2" />
      <Shine d="M16 38H44" width={3} opacity={0.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
