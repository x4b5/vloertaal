import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de grasmaaier": the lawnmower — a red push mower from the side: a low deck on four wheels, the dark
  // motor on top, the grass box at the back and the long handle up to the grip.
  // On the intro card it is pushed forward a stretch (three rounds: the machine at work).
  'w.grasmaaier': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={46} ry={4} />
      <Move kind="from" dx={-24}>
        {/* The handle and its grip */}
        <path d="M40 72L22 26" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
        <path d="M25 34L19 18" stroke={PAL.slateDark} strokeWidth="9" strokeLinecap="round" />
        {/* The grass box at the back */}
        <path d="M12 60Q12 56 16 56H38V90H16Q12 90 12 86Z" fill={PAL.slate} />
        <path d="M17 64H33M17 72H33M17 80H33" stroke={PAL.steel} strokeWidth="2" strokeLinecap="round" />
        <rect x="34" y="56" width="5" height="34" fill={PAL.slateDark} />
        {/* The motor on top */}
        <path d="M50 70V60Q50 52 58 52H72Q80 52 80 60V70Z" fill={PAL.slate} />
        <rect x="56" y="46" width="14" height="8" rx="3" fill={PAL.steel} />
        <rect x="64" y="52" width="16" height="18" rx="6" fill={PAL.slateDark} opacity=".5" />
        {/* The red deck */}
        <Shade color={PAL.redShade} opacity={1} at={[106, 84, 18, 24]}>
          <path d="M36 92V80Q36 68 48 68H90Q104 68 106 82V92Z" fill={PAL.red} />
        </Shade>
        <Shine d="M44 74Q46 72 52 72H74" width={3} opacity={0.6} />
        {/* The wheels */}
        <circle cx="46" cy="94" r="10" fill={PAL.slateDark} />
        <circle cx="46" cy="94" r="4" fill={PAL.steel} />
        <circle cx="94" cy="96" r="8" fill={PAL.slateDark} />
        <circle cx="94" cy="96" r="3.4" fill={PAL.steel} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
