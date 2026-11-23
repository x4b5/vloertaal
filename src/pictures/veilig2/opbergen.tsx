import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

/** A diamond (a square on its point) centred on (cx, cy), half its diagonal r. */
const diamond = (cx: number, cy: number, r: number) => `M${cx} ${cy - r}L${cx + r} ${cy}L${cx} ${cy + r}L${cx - r} ${cy}Z`;

export default {
  // "opbergen": to put away — a yellow cabinet for hazardous products, its door open to the left with a
  // red lock on its edge; a hand puts a red product can with a small hazard diamond on the shelf, next to
  // a can that is already there.
  // Once and slowly: the hand puts the can in (it happens once).
  'w.opbergen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={66} cy={106} rx={38} ry={4} />
      {/* The cabinet: the dark inside, the shelf */}
      <rect x="44" y="14" width="62" height="92" rx="4" fill={PAL.yellowShade} />
      <rect x="50" y="20" width="50" height="80" rx="2" fill={PAL.slate} />
      <rect x="96" y="20" width="4" height="80" fill={PAL.slateDark} />
      <rect x="50" y="58" width="50" height="5" fill={PAL.yellowShade} />
      {/* The can already on the lower shelf */}
      <rect x="78" y="76" width="16" height="24" rx="3" fill={PAL.sky} />
      <rect x="88" y="76" width="6" height="24" rx="2" fill={PAL.skyShade} />
      {/* The open door, seen almost edge-on, with its lock */}
      <Shade color={PAL.yellowShade} opacity={1} at={[48, 60, 6, 60]}>
        <path d="M44 14L26 20V100L44 106Z" fill={PAL.yellow} />
      </Shade>
      <rect x="32" y="52" width="7" height="14" rx="2" fill={PAL.red} />
      <circle cx="35.5" cy="57" r="1.8" fill={PAL.redShade} />
      <Shine d="M30 26V44" color={PAL.yellowShine} width={3} opacity={0.9} />
      {/* The hand puts the red can on the top shelf */}
      <Move kind="from" dx={-30} dy={-8} once>
        <rect x="58" y="30" width="24" height="28" rx="3" fill={PAL.red} />
        <rect x="74" y="30" width="8" height="28" rx="2" fill={PAL.redShade} />
        <rect x="64" y="25" width="10" height="6" rx="1.5" fill={PAL.slateDark} />
        <path d={diamond(68, 44, 7)} fill={PAL.white} stroke={PAL.white} strokeWidth="1.4" />
        <path d={diamond(68, 44, 4.4)} fill={PAL.ink} />
        <Hand pose="hold" x={40} y={46} rotate={90} scale={0.62} skin={SKIN.henk} sleeve={['#2d5a92', PAL.navyShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
