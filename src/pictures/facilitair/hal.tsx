import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "de hal": the hall — the big room just inside the entrance, seen from inside: a wide tiled floor
  // going back, the tall glass front doors in the back wall with daylight behind them, a pillar on each
  // side and a big round lamp hanging from the ceiling.
  'w.hal': () => (
    <g strokeLinejoin="round">
      {/* The back wall */}
      <rect x="18" y="20" width="84" height="52" fill={PAL.paper} />
      {/* The floor: tiles going back */}
      <path d="M4 108L18 72H102L116 108Z" fill={PAL.mist} />
      <path d="M11 90H109M15 80H105" stroke={PAL.paper} strokeWidth="1.8" />
      <path d="M46 72L38 108M74 72L82 108M60 72V108M32 72L16 108M88 72L104 108" stroke={PAL.paper} strokeWidth="1.8" />
      {/* The glass front doors with daylight behind */}
      <rect x="40" y="34" width="40" height="38" rx="2" fill={PAL.slate} />
      <rect x="43" y="37" width="16" height="35" fill={PAL.ice} />
      <rect x="61" y="37" width="16" height="35" fill={PAL.ice} />
      <path d="M46 40L54 40L46 54Z" fill={PAL.white} opacity=".6" />
      <path d="M57 50V58M63 50V58" stroke={PAL.slate} strokeWidth="2.4" strokeLinecap="round" />
      {/* The mat in front of the doors */}
      <path d="M34 80L38 72H82L86 80Z" fill={PAL.slate} />
      {/* A tall plant in a pot by the doors */}
      <path d="M28 74Q22 60 26 46M30 74Q32 58 38 50M29 74Q26 64 20 58" fill="none" stroke={PAL.green} strokeWidth="6" strokeLinecap="round" />
      <path d="M23 74H35L33 86H25Z" fill={PAL.clay} />
      {/* The pillars */}
      <rect x="8" y="10" width="14" height="98" fill={PAL.paperShade} />
      <rect x="17" y="10" width="5" height="98" fill={PAL.mist} />
      <rect x="98" y="10" width="14" height="98" fill={PAL.paperShade} />
      <rect x="107" y="10" width="5" height="98" fill={PAL.mist} />
      <Shine d="M12 16V60" width={2.6} opacity={0.8} />
      {/* The ceiling and the big lamp */}
      <rect x="8" y="10" width="104" height="10" fill={PAL.mist} />
      <path d="M60 20V22" stroke={PAL.slate} strokeWidth="2" />
      <path d="M48 28A12 6 0 0 1 72 28Z" fill={PAL.yellow} />
      <ellipse cx="60" cy="28" rx="12" ry="2.2" fill={PAL.yellowShine} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
