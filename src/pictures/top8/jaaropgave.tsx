import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de jaaropgave": the annual statement (a paper from your employer with your pay of the whole year) —
  // one tall sheet: at the top a plain company mark (a blue square with a white roof shape, no real
  // logo) and the address lines; then twelve short rows, one per month, each with its amount bar; and
  // at the bottom, under a double line, the one total of the year in a yellow box. No text or digits.
  'w.jaaropgave': () => {
    const rows = Array.from({ length: 12 }, (_, i) => 40 + i * 4.6);
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <rect x="24" y="10" width="72" height="98" rx="4" fill={PAL.paperShade} transform="translate(3 4)" />
        <rect x="24" y="10" width="72" height="98" rx="4" fill={PAL.white} />
        {/* The company mark and address */}
        <rect x="31" y="16" width="15" height="15" rx="3" fill={PAL.blue} />
        <path d="M34 27L38.5 21L43 27Z" fill={PAL.white} />
        <path d="M52 19H74M52 25H66" stroke={PAL.line} strokeWidth="2.4" />
        <path d="M30 35H90" stroke={PAL.mist} strokeWidth="1.6" />
        {/* Twelve months: a label and an amount */}
        <path d={rows.map((y) => `M32 ${y}H${y % 9.2 < 4.6 ? 48 : 44}M66 ${y}H88`).join('')} stroke={PAL.line} strokeWidth="2" />
        {/* The total of the year */}
        <path d="M30 95H90M30 98.4H90" stroke={PAL.slate} strokeWidth="1.6" />
        <path d="M32 103H50" stroke={PAL.slate} strokeWidth="2.6" />
        <rect x="62" y="100" width="28" height="7" rx="2" fill={PAL.yellow} />
        <path d="M66 103.5H86" stroke={PAL.slate} strokeWidth="2.6" />
        <Shine d="M28 20Q28 14 33 13.5" width={2.4} opacity={0.5} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
