import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "het vaste contract": the permanent contract (a contract without an end date) — a signed contract
  // with a big green badge on it: the infinity sign (it goes on, no end).
  'w.vastecontract': () => (
    <g strokeLinejoin="round">
      <g transform="rotate(-4 50 58)">
        <rect x="16" y="14" width="66" height="90" rx="5" fill={PAL.mist} />
        <Shade color={PAL.paperShade} opacity={1} at={[86, 60, 12, 92]}>
          <rect x="16" y="10" width="66" height="90" rx="5" fill={PAL.paper} />
        </Shade>
        <path d="M26 22H56" stroke={PAL.navy} strokeWidth="4.6" strokeLinecap="round" />
        <path d="M26 33H72M26 41H66M26 49H72M26 57H60" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
        <path d="M28 86c3 -10 6 -12 7 -6s-4 9 1 6 5 -9 8 -6 2 7 6 3 4 -5 7 -2" fill="none" stroke={PAL.navy} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M26 91H60" stroke={PAL.steel} strokeWidth="2.4" strokeLinecap="round" />
      </g>
      {/* The badge with the infinity sign */}
      <circle cx="82" cy="78" r="24" fill={PAL.okShade} transform="translate(0 3)" />
      <circle cx="82" cy="78" r="24" fill={PAL.ok} />
      <path d="M68 78C68 70 76 70 82 78C88 86 96 86 96 78C96 70 88 70 82 78C76 86 68 86 68 78Z" fill="none" stroke={PAL.white} strokeWidth="4.6" strokeLinejoin="round" />
      <Shine d="M64 70A19 19 0 0 1 74 59" width={3} opacity={0.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
