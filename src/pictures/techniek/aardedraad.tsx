import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** The bent wire, ending (insulation) where the copper starts, heading right into the terminal. */
const WIRE = 'M16 98C20 70 58 56 62 36C65 20 40 14 30 30C20 46 38 64 72 62';
/** The yellow-green stripes along the wire. */
const STRIPE = '7 7';

export default {
  // "de aardedraad": the earth wire — a loop of thick wire with green-and-yellow bands, its stripped
  // copper end clamped under the screw of a small earth terminal.
  'w.aardedraad': () => (
    <g>
      <Ground cx={60} cy={104} rx={46} ry={4} />
      {/* The terminal: top, right side, front */}
      <path d="M78 48L84 42H106L100 48Z" fill={PAL.paperShade} />
      <path d="M100 48L106 42V68L100 74Z" fill={PAL.steel} />
      <rect x="78" y="48" width="22" height="26" rx="2" fill={PAL.mist} />
      {/* The wire: a shade line, the yellow, the green bands, a highlight */}
      <path d={WIRE} stroke={PAL.greenShade} strokeWidth="11" strokeLinecap="round" fill="none" transform="translate(1 1.6)" />
      <path d={WIRE} stroke={PAL.yellow} strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d={WIRE} stroke={PAL.green} strokeWidth="10" strokeDasharray={STRIPE} fill="none" />
      {/* The copper end, going into the terminal */}
      <path d="M72 62H86" stroke={PAL.clay} strokeWidth="5" strokeLinecap="round" />
      <path d="M72 61H84" stroke={PAL.clayLight} strokeWidth="1.6" strokeLinecap="round" />
      {/* The clamping screw */}
      <circle cx="89" cy="60" r="7" fill={PAL.steel} />
      <path d="M85 64L93 56" stroke={PAL.slate} strokeWidth="2.4" strokeLinecap="round" />
      <Shine d="M27 26Q34 16 46 18" width={2.6} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
