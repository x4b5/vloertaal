import type { JSX } from 'react';
import { Box, Ground, PAL, Shine } from '../kit';

export default {
  // "de postkamer": the post room — a closed wooden door with a blue sign on it showing a white envelope
  // (the room for the post), two parcels stacked beside it on the floor.
  'w.postkamer': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={52} ry={4} />
      {/* The door frame and the door */}
      <rect x="14" y="10" width="60" height="96" rx="2" fill={PAL.mist} />
      <rect x="20" y="16" width="48" height="90" fill={PAL.card} />
      <rect x="56" y="16" width="12" height="90" fill={PAL.cardShade} />
      <Shine d="M25 22V48" width={3} opacity={0.5} />
      {/* The handle */}
      <rect x="57" y="62" width="10" height="5" rx="2.4" fill={PAL.slate} />
      <circle cx="59" cy="64.5" r="3.6" fill={PAL.steel} />
      {/* The sign: a white envelope on blue */}
      <rect x="26" y="26" width="36" height="28" rx="4" fill={PAL.skyShade} transform="translate(2 2.5)" />
      <rect x="26" y="26" width="36" height="28" rx="4" fill={PAL.sky} />
      <rect x="32" y="32" width="24" height="16" rx="2" fill={PAL.white} />
      <path d="M33 33L44 42L55 33" fill="none" stroke={PAL.paperShade} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* The parcels */}
      <Box x={78} y={80} w={24} h={24} depth={8} label />
      <Box x={82} y={58} w={18} h={22} depth={6} tape />
    </g>
  ),
} as Record<string, () => JSX.Element>;
