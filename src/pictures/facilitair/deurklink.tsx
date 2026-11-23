import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

export default {
  // "de deurklink": the door handle — a piece of a wooden door with a tall steel back plate, a keyhole
  // under it, and a chunky steel lever handle sticking out to the right.
  // Three rounds: the handle is pressed down and springs back up.
  'w.deurklink': () => (
    <g strokeLinejoin="round">
      {/* The door: front and its right edge */}
      <path d="M92 12L100 8V106L92 110Z" fill={PAL.cardShade} />
      <rect x="10" y="12" width="82" height="98" rx="3" fill={PAL.card} />
      <rect x="18" y="20" width="66" height="82" rx="3" fill="none" stroke={PAL.cardShade} strokeWidth="2" />
      {/* The back plate and the keyhole */}
      <rect x="24" y="28" width="20" height="68" rx="8" fill={PAL.steel} />
      <rect x="37" y="28" width="7" height="68" rx="3.5" fill={PAL.slate} opacity=".55" />
      <circle cx="34" cy="80" r="3.6" fill={PAL.slateDark} />
      <path d="M34 80V88" stroke={PAL.slateDark} strokeWidth="3.6" strokeLinecap="round" />
      {/* The lever, pressed down and back on the intro card */}
      <Move kind="turn" turn={30} at={[34, 46]}>
        <circle cx="34" cy="46" r="9" fill={PAL.mist} />
        <path d="M34 46H96" stroke={PAL.steel} strokeWidth="12" strokeLinecap="round" />
        <path d="M38 43H94" stroke={PAL.mist} strokeWidth="5" strokeLinecap="round" />
        <circle cx="34" cy="46" r="5" fill={PAL.paper} />
      </Move>
      <Shine d="M28 34V62" width={2.6} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
