import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de werktelefoon": the work phone — a smartphone in a sturdy orange work case with thick corners, standing up;
  // on its screen a brown briefcase (work) and below it a row of app tiles.
  'w.werktelefoon': () => (
    <g>
      <Ground cx={62} cy={106} rx={30} ry={4} />
      {/* Orange case with bumpers */}
      <rect x="32" y="10" width="56" height="96" rx="12" fill={PAL.orangeShade} transform="translate(3 2)" />
      <rect x="32" y="10" width="56" height="96" rx="12" fill={PAL.orange} />
      {[[32, 10], [76, 10], [32, 94], [76, 94]].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x - 1} y={y - 1} width="14" height="14" rx="6" fill={PAL.orangeShade} />
      ))}
      {/* Phone and screen */}
      <rect x="37" y="16" width="46" height="84" rx="7" fill={PAL.slateDark} />
      <rect x="40" y="22" width="40" height="70" rx="3" fill="#e3f5ff" />
      {/* Briefcase on the screen */}
      <rect x="51" y="32" width="18" height="6" rx="2.4" fill="none" stroke={PAL.brown} strokeWidth="3" />
      <rect x="44" y="36" width="32" height="24" rx="4" fill={PAL.cardDark} />
      <rect x="44" y="36" width="32" height="9" rx="4" fill={PAL.card} />
      <rect x="57" y="43" width="6" height="5" rx="1.4" fill={PAL.yellow} />
      {/* App tiles */}
      {[46, 57, 68].map((x, i) => (
        <rect key={x} x={x} y="70" width="8" height="8" rx="2" fill={[PAL.sky, PAL.green, PAL.red][i]} />
      ))}
      <rect x="54" y="95" width="12" height="2.6" rx="1.3" fill={PAL.steel} />
      <Shine d="M36 26Q36 18 42 15" opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
