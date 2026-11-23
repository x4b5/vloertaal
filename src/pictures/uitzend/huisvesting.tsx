import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de huisvesting": the housing (a place to live, arranged by the agency) — a house with a clay roof
  // and, through its big window, two beds ready to sleep in; by the door a small orange tag of the
  // agency that arranged it.
  'w.huisvesting': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={50} ry={4} />
      {/* Chimney, wall and roof */}
      <rect x="80" y="18" width="10" height="22" rx="2" fill={PAL.slate} />
      <Shade color={PAL.paperShade} opacity={1} at={[108, 78, 14, 40]}>
        <rect x="18" y="50" width="84" height="54" rx="3" fill={PAL.paper} />
      </Shade>
      <path d="M8 54L60 14L112 54Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="6" />
      <path d="M60 14L112 54H60Z" fill={PAL.clayShade} stroke={PAL.clayShade} strokeWidth="6" />
      <Shine d="M20 46L50 23" width={3} opacity={0.4} />
      {/* The window with two beds */}
      <rect x="22" y="57" width="52" height="40" rx="3" fill={PAL.slate} />
      <rect x="25" y="60" width="46" height="34" rx="2" fill={PAL.ice} />
      {[27, 49].map((x) => (
        <g key={x}>
          <rect x={x} y="74" width="20" height="13" rx="2.4" fill={PAL.blue} />
          <rect x={x + 1} y="70" width="8" height="6" rx="2" fill={PAL.white} />
          <rect x={x} y="65" width="3.4" height="27" rx="1.4" fill={PAL.wood} />
          <rect x={x} y="86" width="20" height="3.4" rx="1.4" fill={PAL.wood} />
        </g>
      ))}
      {/* The door */}
      <rect x="80" y="66" width="16" height="38" rx="2" fill={PAL.wood} />
      <circle cx="92" cy="86" r="1.8" fill={PAL.yellow} />
      {/* The agency's tag */}
      <rect x="82" y="56" width="12" height="7" rx="2" fill={PAL.orange} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
