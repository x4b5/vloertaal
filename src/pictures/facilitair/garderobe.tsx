import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A coat on a hanger hanging from the rail at (x, 26): hook, shoulders, sleeves, body. */
const coat = (x: number, base: string, shade: string, key: string) => (
  <g key={key}>
    <path d={`M${x} 26V22A3 3 0 0 1 ${x + 4} 20`} fill="none" stroke={PAL.slate} strokeWidth="2.2" strokeLinecap="round" />
    <path d={`M${x - 11} 36L${x} 29L${x + 11} 36`} fill="none" stroke={PAL.cardDark} strokeWidth="3" strokeLinecap="round" />
    {/* Sleeves */}
    <path d={`M${x - 12} 36L${x - 16} 80`} stroke={shade} strokeWidth="9" strokeLinecap="round" />
    <path d={`M${x + 12} 36L${x + 16} 80`} stroke={shade} strokeWidth="9" strokeLinecap="round" />
    {/* Body */}
    <path d={`M${x - 12} 32Q${x} 28 ${x + 12} 32L${x + 14} 90H${x - 14}Z`} fill={base} />
    <path d={`M${x + 4} 32Q${x + 9} 30 ${x + 12} 32L${x + 14} 90H${x + 6}Z`} fill={shade} />
    {/* Collar and the line down the front */}
    <path d={`M${x - 6} 30L${x} 42L${x + 6} 30`} fill="none" stroke={shade} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d={`M${x} 42V88`} stroke={shade} strokeWidth="1.6" strokeLinecap="round" />
  </g>
);

export default {
  // "de garderobe": the cloakroom — a steel coat rail on wheels with three coats on hangers (red, navy,
  // green) and one empty hanger.
  'w.garderobe': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={50} ry={4} />
      {/* The rail: two posts, the top bar, the feet and wheels */}
      <path d="M14 20V100M106 20V100" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <path d="M12 22H108" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      <path d="M8 100H22M98 100H112" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      <circle cx="10" cy="104" r="3.4" fill={PAL.slateDark} />
      <circle cx="20" cy="104" r="3.4" fill={PAL.slateDark} />
      <circle cx="100" cy="104" r="3.4" fill={PAL.slateDark} />
      <circle cx="110" cy="104" r="3.4" fill={PAL.slateDark} />
      {coat(34, PAL.red, PAL.redShade, 'r')}
      {coat(60, PAL.navy, PAL.navyShade, 'n')}
      {coat(86, PAL.green, PAL.greenShade, 'g')}
      <Shine d="M26 40Q27 36 30 34" width={2.6} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
