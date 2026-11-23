import type { JSX } from 'react';
import { Box, Ground, PAL, Shine } from '../kit';

export default {
  // "de stilstand": the standstill — a production line (a conveyor belt on legs) with three boxes standing
  // still on it, no motion lines; above it a big blue pause sign (two white bars in a round badge).
  'w.stilstand': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={105} rx={50} ry={3.5} />
      {/* The pause sign */}
      <circle cx="60" cy="33" r="22" fill={PAL.skyShade} />
      <circle cx="60" cy="30" r="22" fill={PAL.sky} />
      <rect x="49" y="19" width="8" height="22" rx="2.5" fill={PAL.white} />
      <rect x="63" y="19" width="8" height="22" rx="2.5" fill={PAL.white} />
      <Shine d="M43 22A18 18 0 0 1 52 13" width={3} opacity={0.5} />
      {/* The conveyor: legs, belt, end rolls */}
      <path d="M22 92V104M98 92V104M60 92V104" stroke={PAL.steel} strokeWidth="5" />
      <path d="M22 98H98" stroke={PAL.steel} strokeWidth="3" />
      <rect x="10" y="80" width="100" height="13" rx="6.5" fill={PAL.slateDark} />
      <circle cx="16.5" cy="86.5" r="4.2" fill={PAL.steel} />
      <circle cx="103.5" cy="86.5" r="4.2" fill={PAL.steel} />
      <path d="M28 86.5H38M52 86.5H62M76 86.5H86" stroke={PAL.slate} strokeWidth="2.4" />
      {/* Three boxes, standing still */}
      <Box x={16} y={64} w={20} h={16} depth={6} />
      <Box x={47} y={64} w={20} h={16} depth={6} />
      <Box x={78} y={64} w={20} h={16} depth={6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
