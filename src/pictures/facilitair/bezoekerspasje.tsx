import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het bezoekerspasje": the visitor pass — a white card on an orange lanyard, an orange band across its
  // top, a grey person shape (no photo) and two grey lines for the name, the clip at the top.
  'w.bezoekerspasje': () => (
    <g strokeLinejoin="round">
      {/* The lanyard: two straps coming down to the clip */}
      <path d="M30 8L54 40M90 8L66 40" stroke={PAL.orangeShade} strokeWidth="7" strokeLinecap="round" />
      <path d="M30 8L54 40" stroke={PAL.orange} strokeWidth="7" strokeLinecap="round" />
      <g transform="rotate(-4 60 74)">
        {/* The card: its depth edge, then the face */}
        <rect x="28" y="46" width="64" height="62" rx="7" fill={PAL.paperShade} transform="translate(3 4)" />
        <rect x="28" y="46" width="64" height="62" rx="7" fill={PAL.white} />
        <path d="M28 53Q28 46 35 46H85Q92 46 92 53V62H28Z" fill={PAL.orange} />
        <path d="M76 46H85Q92 46 92 53V62H76Z" fill={PAL.orangeShade} />
        {/* The person shape */}
        <rect x="34" y="68" width="24" height="32" rx="4" fill={PAL.paperShade} />
        <circle cx="46" cy="79" r="6" fill={PAL.line} />
        <path d="M37 98Q37 87 46 87Q55 87 55 98Z" fill={PAL.line} />
        {/* The name lines */}
        <path d="M64 74H84M64 84H80M64 94H82" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
        {/* The slot and the clip */}
        <rect x="52" y="36" width="16" height="13" rx="3" fill={PAL.steel} />
        <rect x="56" y="40" width="8" height="4" rx="2" fill={PAL.slate} />
        <Shine d="M33 52Q34 49 38 49" width={2.6} opacity={0.7} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
