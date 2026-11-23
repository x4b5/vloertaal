import type { JSX } from 'react';
import { Box, Ground, PAL } from '../kit';

export default {
  // "het karton": the cardboard — an empty open cardboard box with its flaps up, and in front of it a pile of
  // flattened brown boxes (not the white newspapers of "het papier").
  'w.karton': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={50} ry={4.5} />
      <Box x={44} y={36} w={44} h={36} depth={14} open />
      {/* The flattened boxes, lying in a pile */}
      <path d="M12 86L24 76H100L110 86Z" fill={PAL.cardDark} />
      <rect x="12" y="86" width="98" height="18" rx="2" fill={PAL.cardShade} />
      <path d="M14 92H108M14 98H108" stroke={PAL.cardDark} strokeWidth="1.6" />
      <path d="M10 82L22 72H98L108 82Z" fill={PAL.card} />
      <path d="M8 84L20 74H96L106 84Z" fill="#f0c48a" />
      <path d="M56 74L52 84" stroke={PAL.cardShade} strokeWidth="2" />
      <path d="M22 80H44" stroke="#f6dcae" strokeWidth="2" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
