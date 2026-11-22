import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

/** The shaded side of the grey switch box: one step under PAL.steel (as in maken/startknop). */
const STEEL_DARK = '#5d6a75';

export default {
  // "het hangslot": the lockout padlock — a big red padlock with a tall steel shackle, hanging from the
  // lock-off tab of a grey switch box at the top.
  'w.hangslot': () => (
    <g>
      {/* The switch box: right side, front, and the tab with its hole */}
      <path d="M90 12L96 8V24L90 28Z" fill={STEEL_DARK} />
      <path d="M30 12L36 8H96L90 12Z" fill={PAL.paperShade} />
      <rect x="30" y="12" width="60" height="16" rx="2" fill={PAL.mist} />
      <path d="M52 27H68V40A8 8 0 0 1 52 40Z" fill={PAL.steel} />
      <circle cx="60" cy="38" r="4.6" fill={PAL.slateDark} />
      {/* The shackle: through the hole, down into the body */}
      <Move kind="from" dy={-9}>
        <path d="M46 66V46A14 14 0 0 1 74 46V66" stroke={PAL.steel} strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M48.8 60V46A11 11 0 0 1 56 35.8" stroke={PAL.mist} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      </Move>
      {/* The tab over the top of the shackle */}
      <path d="M52 27H68V33.6A8 4.6 0 0 0 52 33.6Z" fill={PAL.steel} />
      {/* The red body */}
      <Shade color={PAL.redShade} opacity={1} at={[90, 82, 14, 30]}>
        <rect x="34" y="56" width="52" height="50" rx="8" fill={PAL.red} />
      </Shade>
      <rect x="34" y="56" width="52" height="7" rx="3.5" fill={PAL.redShade} opacity="0.5" />
      {/* The keyhole */}
      <circle cx="60" cy="80" r="5" fill={PAL.slateDark} />
      <path d="M60 80V92" stroke={PAL.slateDark} strokeWidth="4.4" strokeLinecap="round" />
      <Shine d="M40 70V94" width={3.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
