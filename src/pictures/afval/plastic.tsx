import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het plastic": the plastic — an empty plastic drinks bottle in a light blue tint with a blue screw cap and
  // ribbed sides, next to an empty white yoghurt pot with a purple band and its foil lid half off.
  'w.plastic': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={46} ry={4.5} />
      {/* The yoghurt pot, on the left */}
      <Shade color={PAL.paperShade} opacity={1} at={[54, 86, 8, 24]}>
        <path d="M14 64H52L48 102Q48 104 46 104H20Q18 104 18 102Z" fill={PAL.paper} />
      </Shade>
      <rect x="15" y="74" width="36" height="12" fill={PAL.purpleLight} />
      <rect x="42" y="74" width="9" height="12" fill={PAL.purple} />
      <path d="M12 64H54L52 58H14Z" fill={PAL.mist} />
      <path d="M12 58Q24 46 44 50L54 58Z" fill={PAL.steel} />
      {/* The bottle */}
      <rect x="66" y="10" width="20" height="10" rx="3" fill={PAL.blue} />
      <rect x="78" y="10" width="8" height="10" rx="2" fill={PAL.blueShade} />
      <Shade color={PAL.blueLight} opacity={0.8} at={[100, 70, 10, 50]}>
        <path d="M68 20H84V28Q96 36 96 50V100Q96 104 92 104H60Q56 104 56 100V50Q56 36 68 28Z" fill={PAL.ice} />
      </Shade>
      <path d="M58 58H94M58 82H94" stroke={PAL.blueLight} strokeWidth="2.2" />
      <rect x="56" y="62" width="40" height="16" fill={PAL.sky} />
      <rect x="86" y="62" width="10" height="16" fill={PAL.skyShade} />
      <Shine d="M62 50Q62 40 70 34" width={3.4} opacity={0.8} />
      <Shine d="M62 86V96" width={3.4} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
