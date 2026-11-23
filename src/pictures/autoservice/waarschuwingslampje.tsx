import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

/** The dashboard's black face: one step under PAL.slateDark. */
const DASH = '#1b232a';

/** The engine silhouette of the warning light, centred on (0, 0), about 46 wide and 38 high. */
const engine = (fill: string) => (
  <g fill={fill}>
    <rect x="-14" y="-10" width="27" height="23" rx="2.5" />
    <rect x="-5" y="-15" width="10" height="6" />
    <rect x="-11" y="-20" width="22" height="6" rx="2" />
    <rect x="12" y="-1" width="7" height="5" />
    <rect x="18" y="-9" width="5" height="21" rx="2" />
    <rect x="-20" y="0" width="7" height="5" />
    <rect x="-25" y="-7" width="5" height="19" rx="2" />
    <path d="M-14 13H9L5 18H-10Z" />
  </g>
);

export default {
  // "het waarschuwingslampje": the warning light — a black car dashboard with a speedometer arc and
  // its red needle, and one big orange engine light glowing beside it.
  // On the intro card: the orange engine light switches on (one fade, no blinking).
  // Once and slowly (a light goes on: it happens once).
  'w.waarschuwingslampje': () => (
    <g strokeLinejoin="round">
      {/* The dashboard: its depth edge, then the dark panel */}
      <rect x="10" y="26" width="100" height="72" rx="14" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={1} at={[112, 60, 12, 40]}>
        <rect x="10" y="22" width="100" height="72" rx="14" fill={PAL.slate} />
      </Shade>
      <Shine d="M18 40Q20 30 30 28" width={3} opacity={0.35} />
      <rect x="16" y="28" width="88" height="60" rx="10" fill={DASH} />
      {/* The speedometer: an arc of ticks and the red needle */}
      <path d="M22 72A16 16 0 1 1 54 72" stroke={PAL.mist} strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path d="M38 52V57M26 60L29.5 62.5M50 60L46.5 62.5" stroke={PAL.mist} strokeWidth="2" strokeLinecap="round" />
      <path d="M38 72L47 61" stroke={PAL.red} strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="38" cy="72" r="3.6" fill={PAL.mist} />
      {/* The engine light: its glow, then the lit orange engine */}
      <Move kind="show" once>
        <circle cx="78" cy="58" r="25" fill={PAL.orange} opacity=".16" />
        <g transform="translate(78 59) scale(0.9)">{engine(PAL.orangeLight)}</g>
        <path d="M-8 -3H6M-8 4H6" transform="translate(78 59) scale(0.9)" stroke={DASH} strokeWidth="2.4" strokeLinecap="round" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
