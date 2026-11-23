import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shine } from '../kit';

export default {
  // "rapporteren": to report (write down what you saw) — the carer's hand writes with a pen on a report
  // sheet: at the top an eye (what you saw), then lines of writing; the pen is on the last line.
  // On the intro card the pen writes along the last line (three rounds).
  'w.rapporteren': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <g transform="rotate(-6 54 60)">
        {/* The sheet with a depth edge */}
        <rect x="16" y="14" width="68" height="92" rx="5" fill={PAL.paperShade} transform="translate(3 3)" />
        <rect x="16" y="14" width="68" height="92" rx="5" fill={PAL.white} />
        {/* The eye: what you saw */}
        <circle cx="34" cy="32" r="11" fill={PAL.sky} />
        <path d="M25 32Q34 23 43 32Q34 41 25 32Z" fill={PAL.white} />
        <circle cx="34" cy="32" r="3.6" fill={PAL.ink} />
        <path d="M52 28H74M52 36H68" stroke={PAL.line} strokeWidth="2.8" />
        <path d="M26 54H74M26 64H72M26 74H74M26 84H48" stroke={PAL.line} strokeWidth="2.8" />
        <Shine d="M20 96V50" color={PAL.ice} width={2.4} opacity={0.8} />
      </g>
      {/* The hand with the pen, at the end of the last line */}
      <Move kind="fast" dx={-22}>
        <path d="M52 84L76 56" stroke={PAL.navy} strokeWidth="5" />
        <path d="M52 84L49 87.6" stroke={PAL.ink} strokeWidth="2.6" />
        <Hand pose="hold" x={92} y={84} rotate={-40} scale={0.62} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
