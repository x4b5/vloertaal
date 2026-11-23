import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de plattegrond": the floor plan (a map of the building) — a sheet of paper with the plan of a floor
  // on it: thick dark walls, four rooms round a corridor with gaps for the doors, and a red pin in one room.
  'w.plattegrond': () => (
    <g strokeLinejoin="round">
      {/* The sheet with its depth edge */}
      <rect x="10" y="16" width="100" height="88" rx="4" fill={PAL.paperShade} transform="translate(0 4)" />
      <rect x="10" y="16" width="100" height="88" rx="4" fill={PAL.paper} />
      {/* The rooms' floors */}
      <rect x="20" y="26" width="34" height="28" fill="#e3f5ff" />
      <rect x="66" y="26" width="34" height="28" fill="#fff3b0" />
      <rect x="20" y="68" width="34" height="26" fill="#e3f5ff" />
      <rect x="66" y="68" width="34" height="26" fill="#e3f5ff" />
      {/* The walls, with gaps for the doors */}
      <path
        d="M20 26H100V94H20Z M20 54H30M44 54H54V26 M66 26V54H76M90 54H100 M20 68H30M44 68H54V94 M66 94V68H76M90 68H100"
        fill="none"
        stroke={PAL.slate}
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      {/* The pin: you are here */}
      <path d="M83 48C83 48 74 39 74 33A9 9 0 0 1 92 33C92 39 83 48 83 48Z" fill={PAL.red} />
      <circle cx="83" cy="33" r="3.4" fill={PAL.white} />
      <Shine d="M14 22V40" width={2.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
