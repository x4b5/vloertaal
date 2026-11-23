import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de afvalpas": the waste pass (residents show it at the gate) — a green plastic card, held at a slant: a
  // white wheelie-bin badge on the left, grey lines for the name and address (no text) and a gold chip.
  'w.afvalpas': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <g transform="translate(0 6) rotate(-10 60 54)">
        <rect x="12" y="26" width="96" height="60" rx="8" fill={PAL.greenShade} transform="translate(0 4)" />
        <rect x="12" y="26" width="96" height="60" rx="8" fill={PAL.green} />
        <rect x="12" y="68" width="96" height="10" fill={PAL.greenShade} opacity=".5" />
        {/* The bin badge */}
        <circle cx="34" cy="48" r="14" fill={PAL.white} />
        <path d="M27 42H41L39 58H29Z" fill={PAL.green} />
        <rect x="25" y="38" width="18" height="4" rx="1.6" fill={PAL.greenShade} />
        <circle cx="39" cy="58" r="2.4" fill={PAL.ink} />
        {/* The lines and the chip */}
        <path d="M56 40H96M56 50H86" stroke={PAL.lime} strokeWidth="3.4" />
        <rect x="80" y="56" width="18" height="14" rx="3" fill={PAL.yellow} />
        <path d="M86 56V70M80 63H98" stroke={PAL.yellowShade} strokeWidth="1.4" />
        <Shine d="M20 34H44" width={3} opacity={0.6} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
