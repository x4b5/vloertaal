import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

/** A small contract sheet, its top left at (x, y). */
const sheet = (x: number, y: number) => (
  <g key={x}>
    <rect x={x} y={y + 3} width="28" height="34" rx="3" fill={PAL.mist} />
    <Shade color={PAL.paperShade} opacity={1} at={[x + 30, y + 17, 6, 26]}>
      <rect x={x} y={y} width="28" height="34" rx="3" fill={PAL.paper} />
    </Shade>
    <path d={`M${x + 5} ${y + 8}H${x + 20}M${x + 5} ${y + 14}H${x + 23}M${x + 5} ${y + 20}H${x + 17}`} stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
    <path d={`M${x + 5} ${y + 28}c2 -5 3 -6 4 -3s-1 4 1 2 3 -4 4 -2 2 3 4 0`} fill="none" stroke={PAL.navy} strokeWidth="1.6" strokeLinecap="round" />
  </g>
);

export default {
  // "de onderbreking": the break (a time without work between two contracts) — a row of weeks with two
  // blue contract bars and an empty gap between them; above the gap an orange pause sign, above each
  // bar its contract.
  'w.onderbreking': () => (
    <g strokeLinejoin="round">
      {sheet(12, 14)}
      {sheet(80, 14)}
      {/* The row of weeks */}
      {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={10 + i * 17} y="86" width="14" height="14" rx="2.4" fill={PAL.mist} />)}
      {/* The two contracts, with the gap between them */}
      <rect x="10" y="66" width="31" height="13" rx="4" fill={PAL.blueShade} transform="translate(0 2.4)" />
      <rect x="10" y="66" width="31" height="13" rx="4" fill={PAL.blue} />
      <rect x="78" y="66" width="31" height="13" rx="4" fill={PAL.blueShade} transform="translate(0 2.4)" />
      <rect x="78" y="66" width="31" height="13" rx="4" fill={PAL.blue} />
      <path d="M47 72.5H72" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" strokeDasharray="3 5" />
      {/* The pause sign over the gap */}
      <circle cx="60" cy="40" r="17" fill={PAL.orangeShade} transform="translate(0 2.6)" />
      <circle cx="60" cy="40" r="17" fill={PAL.orange} />
      <rect x="52" y="31" width="6" height="18" rx="2" fill={PAL.white} />
      <rect x="62" y="31" width="6" height="18" rx="2" fill={PAL.white} />
      <Shine d="M47 36A13 13 0 0 1 54 27" width={2.6} opacity={0.45} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
