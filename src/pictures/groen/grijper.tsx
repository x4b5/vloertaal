import type { JSX } from 'react';
import { Ground, Move, PAL } from '../kit';

export default {
  // "de grijper": the litter picker (a stick that grabs rubbish) — a long aluminium stick with a pistol grip
  // and a yellow trigger at the top, and at the bottom two black jaws closed round a crushed red can.
  // Three rounds on the intro card: the two jaws close on the can (a tool at work).
  'w.grijper': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={40} cy={104} rx={30} ry={4} />
      {/* The crushed can on the ground */}
      <g transform="rotate(-10 32 94)">
        <path d="M20 86H30L33 90L36 86H44V102H36L33 98L30 102H20Z" fill={PAL.red} />
        <path d="M20 97H44V102H20Z" fill={PAL.redShade} />
        <rect x="17" y="86" width="4" height="16" rx="1.6" fill={PAL.mist} />
      </g>
      {/* The long stick */}
      <path d="M94 20L40 80" stroke={PAL.steel} strokeWidth="6" />
      <path d="M92 20L40 78" stroke={PAL.mist} strokeWidth="2" />
      {/* The grip at the top, with its trigger */}
      <path d="M90 16L104 30L110 50" fill="none" stroke={PAL.slateDark} strokeWidth="9" />
      <path d="M92 32L98 42" stroke={PAL.yellow} strokeWidth="5" />
      <path d="M86 14L98 26" stroke={PAL.slate} strokeWidth="10" />
      {/* The two jaws: they close round the can */}
      <Move kind="turn" turn={-28} at={[40, 80]}>
        <path d="M40 80Q26 82 22 92" fill="none" stroke={PAL.slateDark} strokeWidth="7.5" />
      </Move>
      <Move kind="turn" turn={28} at={[40, 80]}>
        <path d="M40 80Q44 92 40 100" fill="none" stroke={PAL.slateDark} strokeWidth="7.5" />
      </Move>
      <circle cx="40" cy="80" r="5" fill={PAL.slate} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
