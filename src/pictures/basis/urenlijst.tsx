import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

export default {
  // "de urenlijst": the list of hours (where you write the hours you worked) — a clipboard with a sheet
  // ruled as a table: each row a small clock and a blue bar (the hours of that day), the last row being
  // filled in by a blue pen. ("het urenbriefje" is a loose slip with a big clock.) On the intro card the
  // pen writes along the last row (three rounds: you fill it in, row by row).
  'w.urenlijst': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The clipboard */}
      <rect x="16" y="16" width="78" height="92" rx="6" fill={PAL.cardDark} transform="translate(3 3)" />
      <rect x="16" y="16" width="78" height="92" rx="6" fill={PAL.card} />
      {/* The sheet */}
      <rect x="22" y="24" width="66" height="78" rx="2" fill={PAL.white} />
      <path d="M40 30V98" stroke={PAL.paperShade} strokeWidth="1.6" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <circle cx="31" cy={36 + i * 14} r="4.4" fill={PAL.white} stroke={PAL.line} strokeWidth="1.6" />
          <path d={`M31 ${33.6 + i * 14}V${36 + i * 14}H33`} stroke={PAL.line} strokeWidth="1.3" fill="none" />
          {i < 4 && <rect x="45" y={33 + i * 14} width={[34, 30, 36, 22][i]} height="6" rx="3" fill={PAL.blue} />}
          <path d={`M24 ${43 + i * 14}H86`} stroke={PAL.paperShade} strokeWidth="1.4" />
        </g>
      ))}
      <rect x="45" y="89" width="28" height="6" rx="3" fill={PAL.blueLight} />
      {/* The clip */}
      <rect x="40" y="10" width="30" height="12" rx="4" fill={PAL.steel} />
      <rect x="47" y="14" width="16" height="4" rx="2" fill={PAL.slate} />
      <Shine d="M20 26V60" color={PAL.white} width={2.6} opacity={0.5} />
      {/* The pen, at the end of the last row */}
      <Move kind="from" dx={-24}>
        <g transform="rotate(35 74 92)">
          <rect x="70" y="56" width="9" height="34" rx="3" fill={PAL.blue} />
          <rect x="75" y="56" width="4" height="34" rx="2" fill={PAL.blueShade} />
          <rect x="70" y="56" width="9" height="7" rx="2.5" fill={PAL.navy} />
          <path d="M70 89L74.5 98L79 89Z" fill={PAL.paperShade} />
          <path d="M73.4 95.8L74.5 98L75.6 95.8Z" fill={PAL.ink} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
