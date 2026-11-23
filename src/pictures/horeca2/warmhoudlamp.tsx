import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

export default {
  // "de warmhoudlamp": the heat lamp (it keeps the plates warm) — a dark lamp hanging on its cord over a steel
  // counter, its bulb glowing orange; a warm orange glow and wavy heat lines go down onto a full plate.
  // On the intro card the lamp goes on: the glow and the heat lines fade in, once.
  'w.warmhoudlamp': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={50} ry={4} />
      {/* The cord and the lamp shade */}
      <path d="M60 4V18" stroke={PAL.slateDark} strokeWidth="3" strokeLinecap="round" />
      <path d="M52 16H68L86 40H34Z" fill={PAL.slate} />
      <path d="M68 16L86 40H72Z" fill={PAL.slateDark} />
      <Shine d="M50 22L42 34" width={2.6} opacity={0.4} />
      <ellipse cx="60" cy="40" rx="20" ry="5" fill={PAL.redShade} />
      <Move kind="show" once>
        {/* The glow */}
        <path d="M40 40H80L102 84H18Z" fill={PAL.orange} opacity=".18" />
        <ellipse cx="60" cy="40" rx="18" ry="4.4" fill={PAL.orangeLight} />
        <path d="M40 52Q44 56 40 60Q36 64 40 68M60 52Q64 56 60 60Q56 64 60 68M80 52Q84 56 80 60Q76 64 80 68" fill="none" stroke={PAL.orange} strokeWidth="3.4" strokeLinecap="round" />
      </Move>
      {/* The counter */}
      <path d="M8 90L18 82H112L102 90Z" fill={PAL.mist} />
      <rect x="8" y="90" width="94" height="10" fill={PAL.steel} />
      <path d="M102 90L112 82V92L102 100Z" fill={PAL.slate} />
      {/* The plate of food */}
      <ellipse cx="60" cy="85" rx="26" ry="8" fill={PAL.paperShade} />
      <ellipse cx="60" cy="83" rx="26" ry="8" fill={PAL.white} />
      <ellipse cx="54" cy="80" rx="9" ry="4.4" fill={PAL.wood} />
      <circle cx="66" cy="80" r="3.4" fill={PAL.yellow} />
      <circle cx="71" cy="82" r="3" fill={PAL.yellowShade} />
      <path d="M50 85L60 83" stroke={PAL.leaf} strokeWidth="3.2" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
