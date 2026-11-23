import type { JSX } from 'react';
import { CurveArrow, Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "het statiegeld": the deposit (money back for an empty bottle or can) — an empty green bottle and an
  // empty can on the left, a big gold coin on the right, a blue arrow curving from the bottle to the coin.
  // On the intro card the coin comes out of the bottle and along the arrow to its place: once.
  'w.statiegeld': () => (
    <g strokeLinejoin="round">
      <Ground cx={40} cy={104} rx={30} ry={4} />
      {/* The empty can */}
      <Shade color={PAL.skyShade} opacity={1} at={[60, 84, 6, 22]}>
        <rect x="42" y="66" width="18" height="38" rx="3" fill={PAL.sky} />
      </Shade>
      <ellipse cx="51" cy="66" rx="9" ry="3" fill={PAL.mist} />
      <path d="M46 78H55" stroke={PAL.white} strokeWidth="2.4" strokeLinecap="round" opacity=".7" />
      {/* The empty bottle: glass, see-through green */}
      <Shade color={PAL.greenShade} opacity={0.9} at={[40, 80, 7, 30]}>
        <path d="M22 46H30V54Q38 58 38 66V100Q38 104 34 104H18Q14 104 14 100V66Q14 58 22 54Z" fill={PAL.green} />
      </Shade>
      <rect x="21" y="40" width="10" height="7" rx="2" fill={PAL.greenShade} />
      <path d="M19 66V96" stroke={PAL.lime} strokeWidth="3.4" strokeLinecap="round" opacity=".7" />
      {/* The way of the money back */}
      <CurveArrow from={[30, 30]} to={[66, 26]} bend={14} color={PAL.sky} width={7} head={12} />
      {/* The coin */}
      <Move kind="from" dx={-56} dy={10} once>
        <circle cx="88" cy="68" r="22" fill={PAL.yellowShade} />
        <circle cx="86" cy="64" r="22" fill={PAL.yellow} />
        <circle cx="86" cy="64" r="14" fill="none" stroke={PAL.yellowShade} strokeWidth="2.6" />
        <Shine d="M70 58Q72 48 82 45" color={PAL.yellowShine} width={3.4} opacity={0.9} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
