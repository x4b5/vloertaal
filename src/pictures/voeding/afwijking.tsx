import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A tin standing at bottom middle (x, y): steel lid, a label band in `label`, a darker right side. */
const tin = (x: number, y: number, label: string, labelShade: string) => (
  <g>
    <rect x={x - 11} y={y - 36} width="22" height="36" rx="3" fill={PAL.mist} />
    <rect x={x - 11} y={y - 28} width="22" height="20" fill={label} />
    <rect x={x + 4} y={y - 28} width="7" height="20" fill={labelShade} />
    <rect x={x + 4} y={y - 36} width="7" height="8" fill={PAL.steel} />
    <rect x={x + 4} y={y - 8} width="7" height="8" rx="2" fill={PAL.steel} />
    <ellipse cx={x} cy={y - 36} rx="11" ry="3.5" fill={PAL.paper} />
  </g>
);

export default {
  // "de afwijking": the deviation (something is not as it should be) — a row of four tins on a belt;
  // three are the same (green label, standing straight), the third one is not: dented, leaning and with
  // a red label, and a red exclamation mark above it.
  'w.afwijking': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={4} />
      <rect x="8" y="92" width="104" height="10" rx="5" fill={PAL.slateDark} />
      <rect x="11" y="92" width="98" height="3.5" rx="1.75" fill={PAL.steel} />
      {tin(22, 92, PAL.green, PAL.greenShade)}
      {tin(46, 92, PAL.green, PAL.greenShade)}
      {/* The odd one: leaning, dented, red */}
      <g transform="rotate(14 78 92)">
        {tin(72, 92, PAL.red, PAL.redShade)}
        <path d="M61 70Q66 74 61 78" fill={PAL.white} stroke={PAL.paperShade} strokeWidth="2" />
      </g>
      {tin(98, 92, PAL.green, PAL.greenShade)}
      <Shine d="M14 60V80" width={2.4} opacity={0.8} />
      {/* The warning */}
      <path d="M71 12H81L79 36H73Z" fill={PAL.red} />
      <circle cx="76" cy="43" r="4.2" fill={PAL.red} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
