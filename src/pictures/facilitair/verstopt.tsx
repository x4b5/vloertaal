import type { JSX } from 'react';
import { Cross, PAL } from '../kit';

export default {
  // "verstopt": blocked (nothing goes through) — a big grey pipe cut open along its length: blue water
  // stands in the left half up to a brown clog in the middle, the right half is empty; a red cross over the clog.
  'w.verstopt': () => (
    <g strokeLinejoin="round">
      {/* The pipe wall (behind) and its opening */}
      <rect x="6" y="46" width="108" height="56" rx="8" fill={PAL.steel} />
      <rect x="10" y="54" width="100" height="40" rx="5" fill={PAL.slateDark} />
      {/* The water standing on the left */}
      <rect x="10" y="54" width="50" height="40" rx="5" fill={PAL.sky} />
      <path d="M16 62H46" stroke={PAL.ice} strokeWidth="3" strokeLinecap="round" />
      {/* The clog */}
      <path d="M53 53Q62 48 69 54Q78 60 73 74Q78 88 69 93Q60 98 53 93Q46 86 50 74Q45 60 53 53Z" fill={PAL.brown} />
      <path d="M57 60Q64 63 62 71M59 80Q66 80 66 86" fill="none" stroke="#8a5530" strokeWidth="2.2" strokeLinecap="round" />
      {/* The pipe's lit top rim and shaded bottom rim */}
      <rect x="6" y="44" width="108" height="7" rx="3.5" fill={PAL.mist} />
      <rect x="6" y="97" width="108" height="7" rx="3.5" fill={PAL.slate} />
      {/* Nothing goes through */}
      <Cross x={86} y={26} r={17} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
