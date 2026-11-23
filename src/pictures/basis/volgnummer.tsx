import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shine } from '../kit';

export default {
  // "het volgnummer": the queue number — a red ticket machine with a clock face (your wait) and a paper ticket coming out
  // under it, a hand ready to take it; the ticket shows one bold grey bar for the number (no digits). On the intro card the
  // ticket slides out of the machine (once).
  'w.volgnummer': () => (
    <g>
      {/* The ticket, coming out under the machine's bottom edge */}
      <Move kind="from" dy={-26} once>
        <path d="M38 56H70V102L66 99L62 102L58 99L54 102L50 99L46 102L42 99L38 102Z" fill={PAL.paperShade} transform="translate(2 1)" />
        <path d="M38 56H70V102L66 99L62 102L58 99L54 102L50 99L46 102L42 99L38 102Z" fill={PAL.white} />
        <rect x="44" y="76" width="20" height="12" rx="3" fill={PAL.slate} />
        <path d="M44 94H64" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      </Move>
      {/* The machine */}
      <rect x="20" y="10" width="68" height="62" rx="12" fill={PAL.redShade} transform="translate(3 3)" />
      <rect x="20" y="10" width="68" height="62" rx="12" fill={PAL.red} />
      <circle cx="54" cy="36" r="14" fill={PAL.redShade} />
      <circle cx="54" cy="36" r="9" fill={PAL.white} />
      <path d="M54 31V36L58 39" stroke={PAL.red} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <rect x="34" y="66" width="40" height="5" rx="2.5" fill={PAL.slateDark} />
      <Shine d="M26 28Q26 16 36 15" opacity={0.5} />
      {/* A hand ready to take it */}
      <Hand pose="hold" x={88} y={112} rotate={-30} scale={0.8} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
