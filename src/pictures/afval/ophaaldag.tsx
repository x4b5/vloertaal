import type { JSX } from 'react';
import { Calendar, Ground, PAL, Shade } from '../kit';

export default {
  // "de ophaaldag": the collection day — a wall calendar with one day ringed in green, and in front of it a
  // small green wheelie bin put out at the kerb for that day.
  'w.ophaaldag': () => (
    <g strokeLinejoin="round">
      <Calendar x={12} y={18} w={74} h={72} mark={6} header={PAL.green} headerShade={PAL.greenShade} />
      {/* The bin in front, to the right */}
      <Ground cx={90} cy={106} rx={20} ry={3.5} />
      <path d="M100 66L108 63L106 102L98 104Z" fill={PAL.greenShade} />
      <circle cx="102" cy="101" r="5" fill={PAL.ink} />
      <Shade color={PAL.greenShade} opacity={0.5} at={[104, 86, 6, 24]}>
        <path d="M76 66H100L98 102Q98 104 96 104H82Q80 104 80 102Z" fill={PAL.green} />
      </Shade>
      <path d="M83 76H96M83 84H96" stroke={PAL.greenShade} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M73 60L102 57L110 56L109 60L100 64H74Z" fill="#256b31" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
