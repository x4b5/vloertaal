import type { JSX } from 'react';
import { PAL } from '../kit';

export default {
  // "het rapport": the report (what happened, written down) — a few sheets stapled at the top left: a
  // dark blue heading bar, a small photo of the place, grey lines of writing, and a signature at the
  // bottom; a blue pen lies across the bottom right corner.
  'w.rapport': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The sheets under it */}
      <rect x="26" y="16" width="70" height="90" rx="4" fill={PAL.mist} transform="rotate(5 61 61)" />
      {/* The top sheet, its depth edge */}
      <rect x="20" y="12" width="70" height="92" rx="4" fill={PAL.paperShade} transform="translate(3 3)" />
      <rect x="20" y="12" width="70" height="92" rx="4" fill={PAL.white} />
      <path d="M24 18L32 26" stroke={PAL.steel} strokeWidth="3" />
      {/* The heading bar */}
      <rect x="36" y="22" width="44" height="8" rx="3" fill={PAL.navy} />
      {/* The photo */}
      <rect x="28" y="38" width="24" height="20" rx="2" fill={PAL.ice} />
      <path d="M28 58L37 47L44 54L48 50L52 54V58Z" fill={PAL.sky} />
      {/* The lines of writing */}
      <path d="M58 40H82M58 47H80M58 54H76M28 66H82M28 73H80M28 80H72" stroke={PAL.line} strokeWidth="3.2" />
      {/* The signature */}
      <path d="M30 94Q34 86 38 94Q42 100 46 90Q48 86 52 94" fill="none" stroke={PAL.blue} strokeWidth="2.4" />
      {/* The pen */}
      <g transform="rotate(-40 86 92)">
        <rect x="64" y="88" width="44" height="8" rx="4" fill={PAL.blue} />
        <rect x="64" y="92" width="44" height="4" rx="2" fill={PAL.blueShade} />
        <path d="M108 88L116 92L108 96Z" fill={PAL.paperShade} />
        <rect x="76" y="86" width="16" height="3" rx="1.5" fill={PAL.slate} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
