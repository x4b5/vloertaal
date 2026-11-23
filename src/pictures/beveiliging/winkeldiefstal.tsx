import type { JSX } from 'react';
import { ExclaimMark, Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de winkeldiefstal": the shoplifting — a shop (red-and-white awning over a window with full shelves)
  // and a person in a grey hood hurrying out of it to the right with goods under the arm, without paying;
  // a red exclamation mark above.
  'w.winkeldiefstal': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={52} ry={4} />
      {/* The shop: wall, window with shelves, door */}
      <rect x="10" y="30" width="56" height="74" rx="3" fill={PAL.paper} />
      <rect x="54" y="30" width="12" height="74" fill={PAL.paperShade} />
      <rect x="15" y="42" width="34" height="34" rx="3" fill={PAL.ice} />
      <path d="M17 54H47M17 66H47" stroke={PAL.white} strokeWidth="2.4" />
      <rect x="18" y="46" width="6" height="8" rx="1.4" fill={PAL.red} />
      <rect x="26" y="47" width="6" height="7" rx="1.4" fill={PAL.yellow} />
      <rect x="34" y="46" width="6" height="8" rx="1.4" fill={PAL.green} />
      <rect x="20" y="58" width="6" height="8" rx="1.4" fill={PAL.blue} />
      <rect x="30" y="59" width="6" height="7" rx="1.4" fill={PAL.red} />
      <rect x="40" y="58" width="6" height="8" rx="1.4" fill={PAL.yellow} />
      <rect x="16" y="82" width="32" height="22" fill={PAL.slate} />
      <rect x="18" y="84" width="13" height="20" fill={PAL.ice} opacity=".75" />
      <rect x="33" y="84" width="13" height="20" fill={PAL.ice} opacity=".75" />
      {/* The striped awning */}
      <path d="M6 22H70L66 36H10Z" fill={PAL.red} />
      <path d="M14 22H22L21 36H13ZM30 22H38L37.5 36H30ZM46 22H54L54.5 36H47ZM62 22H70L67 36H63Z" fill={PAL.white} />
      <path d="M10 36H66" stroke={PAL.redShade} strokeWidth="3" strokeLinecap="round" />
      {/* The thief hurrying away, goods under the arm */}
      <path d="M84 74L74 100M88 74L100 98" stroke={PAL.slateDark} strokeWidth="8.5" strokeLinecap="round" />
      <ellipse cx="72" cy="101" rx="6" ry="3.2" fill={PAL.ink} />
      <ellipse cx="103" cy="99" rx="6" ry="3.2" fill={PAL.ink} />
      <Shade color={PAL.slate} opacity={0.5} at={[102, 60, 8, 24]}>
        <path d="M76 52Q76 42 86 42Q96 42 98 52L96 78H78Z" fill={PAL.steel} />
      </Shade>
      <circle cx="90" cy="34" r="10" fill={PAL.steel} />
      <circle cx="94" cy="35" r="6.4" fill="#f0b791" />
      <path d="M94 31A6 6 0 0 1 100 37" fill="none" stroke={PAL.slate} strokeWidth="2" />
      {/* The goods: a box and a bottle under the arm */}
      <rect x="90" y="52" width="16" height="14" rx="2" fill={PAL.yellow} />
      <rect x="99" y="52" width="7" height="14" rx="2" fill={PAL.yellowShade} />
      <rect x="84" y="44" width="7" height="20" rx="3" fill={PAL.blue} />
      <path d="M84 56L98 62" stroke={PAL.slate} strokeWidth="7" strokeLinecap="round" />
      <Shine d="M80 50Q82 46 86 45" width={2.6} opacity={0.5} />
      <ExclaimMark x={100} y={20} size={24} color={PAL.red} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
