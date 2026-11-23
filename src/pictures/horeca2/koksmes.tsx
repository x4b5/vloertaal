import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "het koksmes": the chef's knife (a big kitchen knife) — one big knife lying on a slant: a tall, wide steel
  // blade with a curved belly to the point, a steel bolster and a black handle with three rivets (bigger and
  // wider than "het mes", whose handle is blue).
  'w.koksmes': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={100} rx={48} ry={5} />
      <g transform="translate(60 62) scale(1.1) rotate(-24) translate(-60 -62)">
        {/* The handle */}
        <rect x="6" y="56" width="38" height="15" rx="6" fill={PAL.ink} />
        <rect x="6" y="64" width="38" height="7" rx="3.5" fill={PAL.slateDark} />
        {[14, 24, 34].map((x) => <circle key={x} cx={x} cy={62} r="2" fill={PAL.mist} />)}
        {/* The bolster */}
        <rect x="42" y="50" width="8" height="26" rx="2.5" fill={PAL.steel} />
        {/* The blade: a straight spine, a curved belly up to the point */}
        <path d="M49 44L98 50Q108 54 114 62Q100 76 64 76H49Z" fill={PAL.mist} />
        {/* The ground edge (the underside, a step darker) */}
        <path d="M49 70H66Q98 70 114 62Q100 76 64 76H49Z" fill={PAL.steel} />
        <Shine d="M54 49L94 54" width={2.8} opacity={0.9} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
