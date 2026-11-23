import type { JSX } from 'react';
import { Calendar, Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de vrije dag": the day off — a calendar page with a green header and one day ringed in green, and
  // in front of it a soft purple sofa with a cushion: that day you stay at home and rest.
  'w.vrijedag': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Calendar x={12} y={16} w={66} h={66} mark={1} header={PAL.green} headerShade={PAL.greenShade} />
      <Ground cx={74} cy={104} rx={38} ry={4} />
      {/* The sofa: back, seat, arms, feet */}
      <rect x="48" y="98" width="5" height="6" rx="1.5" fill={PAL.brown} />
      <rect x="99" y="98" width="5" height="6" rx="1.5" fill={PAL.brown} />
      <Shade color={PAL.purpleShade} opacity={1} at={[110, 80, 10, 30]}>
        <rect x="46" y="58" width="60" height="30" rx="9" fill={PAL.purple} />
      </Shade>
      <rect x="50" y="80" width="52" height="14" rx="5" fill={PAL.purpleLight} />
      <Shade color={PAL.purpleShade} opacity={1} at={[52, 90, 4, 14]}>
        <rect x="40" y="72" width="14" height="28" rx="6" fill={PAL.purple} />
      </Shade>
      <Shade color={PAL.purpleShade} opacity={1} at={[112, 90, 5, 14]}>
        <rect x="98" y="72" width="14" height="28" rx="6" fill={PAL.purple} />
      </Shade>
      {/* The cushion */}
      <rect x="56" y="62" width="20" height="20" rx="7" fill={PAL.yellow} transform="rotate(-12 66 72)" />
      <rect x="69" y="63" width="7" height="18" rx="3.5" fill={PAL.yellowShade} transform="rotate(-12 66 72)" />
      <Shine d="M50 63H70" width={3} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
