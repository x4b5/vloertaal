import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "wegen": to weigh — a piece of meat on the steel pan of a blue dial scale; the red needle on the
  // white dial has swung round to show how much it weighs.
  // On the intro card the needle swings up from zero (three rounds: work you do again and again).
  'w.wegen': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={42} ry={4} />
      {/* The scale's body */}
      <Shade color={PAL.blueShade} opacity={1} at={[100, 84, 14, 30]}>
        <path d="M26 58H94L100 98Q100 104 94 104H26Q20 104 20 98Z" fill={PAL.blue} />
      </Shade>
      <rect x="54" y="48" width="12" height="12" fill={PAL.steel} />
      {/* The dial */}
      <circle cx="60" cy="80" r="19" fill={PAL.blueShade} />
      <circle cx="60" cy="79" r="17" fill={PAL.white} />
      <path d="M45 86L48 84M45 72L48 74M60 65V68M75 72L72 74M75 86L72 84" stroke={PAL.slate} strokeWidth="2" strokeLinecap="round" />
      <Move kind="turn" turn={-100} at={[60, 79]}>
        <path d="M60 79L72 70" stroke={PAL.red} strokeWidth="3.4" strokeLinecap="round" />
      </Move>
      <circle cx="60" cy="79" r="3" fill={PAL.slateDark} />
      {/* The pan */}
      <ellipse cx="60" cy="48" rx="42" ry="8" fill={PAL.steel} />
      <ellipse cx="60" cy="46" rx="42" ry="7" fill={PAL.mist} />
      {/* The meat on it */}
      <Shade color={PAL.redShade} opacity={1} at={[86, 40, 10, 14]}>
        <path d="M32 44Q30 30 46 26Q62 22 78 28Q90 34 86 44Z" fill={PAL.red} />
      </Shade>
      <path d="M36 34Q44 28 56 27" fill="none" stroke={PAL.redLight} strokeWidth="4" strokeLinecap="round" />
      <Shine d="M24 64V84" width={3} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
