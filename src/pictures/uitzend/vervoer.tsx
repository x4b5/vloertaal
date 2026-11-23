import type { JSX } from 'react';
import { Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "het vervoer": the transport (the bus or van to work) — a white minibus with an orange stripe, the
  // workers' heads in its windows, on the road to the factory (small, on the right). On the intro card
  // the minibus drives in from the left and stops (once, slowly).
  'w.vervoer': () => (
    <g strokeLinejoin="round">
      {/* The road */}
      <rect x="6" y="96" width="108" height="12" rx="4" fill={PAL.slate} />
      <path d="M14 102H26M38 102H50M62 102H74" stroke={PAL.paperShade} strokeWidth="2.4" strokeLinecap="round" />
      {/* The factory at the end of the road */}
      <rect x="102" y="40" width="5" height="14" rx="1.2" fill={PAL.slate} />
      <path d="M82 96V58L91 52V58L100 52V58L110 52V96Z" fill={PAL.blue} stroke={PAL.blue} strokeWidth="1.6" />
      <rect x="92" y="80" width="10" height="16" rx="1.4" fill={PAL.slateDark} />
      <Move kind="slow" dx={-40} once>
        <g transform="translate(4 13) scale(0.85)">
        {/* The minibus */}
        <Shade color={PAL.paperShade} opacity={1} at={[44, 102, 60, 18]}>
          <path d="M8 92V48Q8 40 16 40H60Q66 40 69 45L80 66Q86 68 86 76V92Z" fill={PAL.white} />
        </Shade>
        <rect x="8" y="74" width="78" height="6" fill={PAL.orange} />
        {/* Windows with the workers */}
        <rect x="14" y="46" width="18" height="18" rx="3" fill={PAL.ice} />
        <rect x="36" y="46" width="18" height="18" rx="3" fill={PAL.ice} />
        <path d="M58 46H63L74 64H58Z" fill={PAL.ice} />
        <circle cx="23" cy="57" r="5.4" fill={SKIN.amina[0]} />
        <path d="M17.6 56Q17.6 50 23 50Q28.4 50 28.4 56Q24 53.4 17.6 56Z" fill={PAL.purple} />
        <circle cx="45" cy="57" r="5.4" fill={SKIN.bram[0]} />
        <path d="M39.6 56Q40 50 45 50Q50 50 50.4 56Z" fill={PAL.yellow} />
        <circle cx="64" cy="58" r="4.6" fill={SKIN.henk[0]} />
        <rect x="80" y="70" width="6" height="5" rx="1.6" fill={PAL.yellowLight} />
        <Shine d="M12 52Q12 45 17 44" width={2.4} opacity={0.6} />
        {/* Wheels */}
        <circle cx="26" cy="92" r="9.6" fill={PAL.slateDark} />
        <circle cx="26" cy="92" r="4" fill={PAL.steel} />
        <circle cx="68" cy="92" r="9.6" fill={PAL.slateDark} />
        <circle cx="68" cy="92" r="4" fill={PAL.steel} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
