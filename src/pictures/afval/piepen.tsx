import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "piepen": to beep — the back of the bin lorry, close up: the dark hopper with a black beeper box under it
  // and its white reversing light; orange sound waves go out of the beeper to the right.
  // On the intro card the sound waves come again and again (three rounds: it keeps beeping).
  'w.piepen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={36} cy={104} rx={32} ry={4} />
      {/* The body and the hopper */}
      <Shade color={PAL.greenShade} opacity={1} at={[36, 60, 6, 40]}>
        <path d="M6 88V34Q6 24 16 24H32V88Z" fill={PAL.green} />
      </Shade>
      <rect x="6" y="66" width="26" height="6" fill={PAL.yellow} />
      <Shine d="M12 38Q12 30 20 30" width={3.4} opacity={0.5} />
      <path d="M32 26L50 32L56 88H32Z" fill={PAL.slate} />
      <path d="M50 32L56 88H51Z" fill={PAL.slateDark} />
      <rect x="6" y="86" width="52" height="7" rx="2" fill={PAL.slateDark} />
      <circle cx="20" cy="95" r="9" fill={PAL.ink} />
      <circle cx="20" cy="95" r="3.6" fill={PAL.steel} />
      <rect x="44" y="58" width="9" height="9" rx="2" fill={PAL.white} />
      {/* The beeper: a black box with a round grille */}
      <rect x="46" y="70" width="20" height="16" rx="3" fill={PAL.ink} />
      <circle cx="56" cy="78" r="5" fill={PAL.slate} />
      <path d="M53 78H59M56 75V81" stroke={PAL.ink} strokeWidth="1.4" />
      {/* The sound waves */}
      <Move kind="show">
        <path d="M74 68Q80 78 74 88" fill="none" stroke={PAL.orange} strokeWidth="5" />
        <path d="M84 60Q94 78 84 96" fill="none" stroke={PAL.orange} strokeWidth="5" />
        <path d="M94 52Q108 78 94 104" fill="none" stroke={PAL.orange} strokeWidth="5" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
