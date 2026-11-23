import type { JSX } from 'react';
import { Clock, Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de lunchpauze": the lunch break — an open green lunch box with a sandwich and a red apple in it,
  // its lid up behind it, and a clock at twelve o'clock above. ("de pauze" is the mug of coffee.)
  'w.lunchpauze': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={58} cy={104} rx={46} ry={4} />
      {/* The lid, open behind */}
      <path d="M18 70L26 40H94L102 70Z" fill={PAL.greenShade} />
      <path d="M24 66L30 44H90L96 66Z" fill={PAL.green} opacity=".5" />
      {/* The box: back rim, inside, front */}
      <path d="M14 70H106V76H14Z" fill={PAL.greenShade} />
      <rect x="18" y="66" width="84" height="12" rx="3" fill={PAL.paperShade} />
      {/* The sandwich, from the side: bread, cheese, tomato, lettuce, bread */}
      <rect x="22" y="66" width="46" height="10" rx="4" fill={PAL.cardShade} />
      <path d="M22 66H68V62H22Z" fill={PAL.yellow} />
      <path d="M24 62H66V57H24Z" fill={PAL.red} />
      <path d="M20 58Q24 52 28 58Q32 52 36 58Q40 52 44 58Q48 52 52 58Q56 52 60 58Q64 52 70 58Z" fill={PAL.leaf} />
      <path d="M22 54Q22 38 45 38Q68 38 68 54Q68 56 66 56H24Q22 56 22 54Z" fill={PAL.card} />
      <path d="M58 41Q68 45 68 54Q68 56 66 56H60Q62 48 58 41Z" fill={PAL.cardShade} />
      <Shine d="M30 47Q34 42 42 41" color={PAL.white} width={2.8} opacity={0.55} />
      {/* The apple */}
      <Shade color={PAL.redShade} opacity={1} at={[98, 70, 8, 16]}>
        <circle cx="84" cy="66" r="12" fill={PAL.red} />
      </Shade>
      <path d="M84 55Q85 50 88 48" fill="none" stroke={PAL.brown} strokeWidth="2.4" />
      <path d="M86 52Q92 48 96 52Q90 56 86 52Z" fill={PAL.leaf} />
      <Shine d="M77 62Q78 58 81 57" width={2.6} opacity={0.6} />
      {/* The front of the box */}
      <Shade color={PAL.greenShade} opacity={1} at={[110, 90, 12, 20]}>
        <path d="M14 74H106L102 100Q101 104 97 104H23Q19 104 18 100Z" fill={PAL.green} />
      </Shade>
      <rect x="50" y="78" width="20" height="6" rx="3" fill={PAL.greenShade} />
      <Shine d="M22 82L24 96" width={3} opacity={0.4} />
      {/* The clock at twelve */}
      <Clock cx={88} cy={24} r={15} hour={12} minute={0} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
