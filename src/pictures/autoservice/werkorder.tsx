import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** One row of the job card: a box with a green tick and a grey line. */
const row = (y: number, w: number) => (
  <g key={y}>
    <rect x="34" y={y - 4.5} width="9" height="9" rx="2" fill={PAL.paperShade} />
    <path d={`M35.5 ${y}L38 ${y + 2.6}L42.5 ${y - 3}`} stroke={PAL.green} strokeWidth="2.6" strokeLinecap="round" fill="none" />
    <path d={`M48 ${y}H${48 + w}`} stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
  </g>
);

export default {
  // "de werkorder": the job card — a brown clipboard with a steel clip holding a sheet: a blue car at
  // the top, three ticked rows and a signature scribble at the bottom.
  'w.werkorder': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={36} ry={4} />
      <g transform="rotate(4 60 60)">
        {/* The board: its depth edge, then the face */}
        <rect x="26" y="16" width="72" height="88" rx="7" fill={PAL.cardDark} />
        <Shade color={PAL.cardShade} opacity={1} at={[98, 60, 8, 50]}>
          <rect x="22" y="14" width="72" height="88" rx="7" fill={PAL.card} />
        </Shade>
        {/* The sheet with its grey depth edge */}
        <rect x="30" y="25" width="58" height="72" rx="3" fill={PAL.paperShade} />
        <rect x="28" y="23" width="58" height="72" rx="3" fill={PAL.paper} />
        {/* The car at the top */}
        <rect x="40" y="38" width="34" height="10" rx="4" fill={PAL.blue} />
        <path d="M47 38L52 30H63L68 38Z" fill={PAL.blue} />
        <path d="M53 37L55.5 32.5H61.5L64 37Z" fill={PAL.ice} />
        <circle cx="48" cy="48" r="4.4" fill={PAL.slate} />
        <circle cx="66" cy="48" r="4.4" fill={PAL.slate} />
        {/* Three ticked rows */}
        {row(59, 30)}
        {row(70, 24)}
        {row(81, 28)}
        {/* The signature */}
        <path d="M50 90Q54 84 56 89T62 88Q65 85 67 89T76 87" stroke={PAL.navy} strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* The clip */}
        <rect x="44" y="9" width="28" height="16" rx="4" fill={PAL.steel} />
        <rect x="44" y="9" width="28" height="8" rx="4" fill={PAL.mist} />
        <rect x="53" y="12" width="10" height="4" rx="2" fill={PAL.slate} />
        <Shine d="M26 30V52" color={PAL.white} width={3} opacity={0.45} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
