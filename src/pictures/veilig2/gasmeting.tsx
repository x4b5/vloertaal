import type { JSX } from 'react';
import { Hand, Motion, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de gasmeting": the gas test — a hand holds a small yellow gas detector (a screen with green bars, a
  // round sensor grille) down at an open manhole in the floor, seen from above: a steel ring, dark inside.
  // The hand lowers the detector to the opening, then the green light and its lines (three rounds: a test).
  'w.gasmeting': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The manhole in the floor */}
      <ellipse cx="56" cy="92" rx="46" ry="16" fill={PAL.steel} />
      <ellipse cx="56" cy="91" rx="36" ry="11" fill={PAL.slateDark} />
      <ellipse cx="56" cy="93" rx="30" ry="8" fill="#141a1f" />
      <Move kind="from" dy={-22}>
        {/* The detector */}
        <rect x="42" y="18" width="34" height="56" rx="7" fill={PAL.slate} transform="translate(2 2)" />
        <Shade color={PAL.yellowShade} opacity={1} at={[80, 46, 8, 30]}>
          <rect x="42" y="18" width="34" height="56" rx="7" fill={PAL.yellow} />
        </Shade>
        <rect x="47" y="24" width="24" height="18" rx="2" fill={PAL.slateDark} />
        <path d="M51 37V33M56 37V30M61 37V31M66 37V34" stroke={PAL.leaf} strokeWidth="3" />
        <circle cx="59" cy="60" r="8" fill={PAL.slate} />
        <path d="M55 57H63M54 60H64M55 63H63" stroke={PAL.slateDark} strokeWidth="1.4" />
        <Shine d="M46 46V68" color={PAL.yellowShine} width={3} opacity={0.9} />
        <Hand pose="hold" x={92} y={76} rotate={-20} scale={0.7} skin={SKIN.henk} sleeve={['#2d5a92', PAL.navyShade]} />
      </Move>
      <Move kind="show">
        <circle cx="72" cy="22" r="4" fill={PAL.leaf} />
        <Motion x={74} y={20} dir={-45} spread={70} n={3} len={6} gap={9} color={PAL.leaf} width={2.8} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
