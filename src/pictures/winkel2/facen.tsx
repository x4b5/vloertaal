import type { JSX } from 'react';
import { Arrow, Hand, Move, PAL, SKIN, Shine } from '../kit';

/** A juice carton standing with its bottom at (x, 96): right side, front, gable top, big label. */
const carton = (x: number) => (
  <g>
    <path d={`M${x + 22} 50L${x + 29} 44V90L${x + 22} 96Z`} fill={PAL.paperShade} />
    <rect x={x} y="50" width="22" height="46" rx="1.5" fill={PAL.white} />
    <path d={`M${x} 50L${x + 4} 38H${x + 18}L${x + 22} 50Z`} fill={PAL.mist} />
    <path d={`M${x + 4} 38L${x + 11} 33H${x + 25}L${x + 18} 38Z`} fill={PAL.paperShade} />
    <rect x={x} y="58" width="22" height="28" fill={PAL.orange} />
    <circle cx={x + 11} cy="72" r="6.5" fill={PAL.yellow} />
    <path d={`M${x + 22} 58L${x + 29} 52V80L${x + 22} 86Z`} fill={PAL.orangeShade} />
  </g>
);

export default {
  // "facen": to face up (to pull the products to the front, label forward) — a deep shelf with three
  // juice cartons in a neat row at its front edge, the orange labels to the front; a hand from the right
  // has just pulled the last one forward, a blue arrow points from the back to the front. On the intro
  // card that carton comes forward from the back of the shelf with the hand: three rounds (you do it
  // along the whole shelf).
  'w.facen': () => (
    <g strokeLinejoin="round">
      {/* The shelf: back wall, the deep shelf top seen from above, its front edge */}
      <rect x="32" y="12" width="80" height="58" rx="2" fill={PAL.paperShade} />
      <path d="M6 98L32 66H112V98Z" fill={PAL.mist} />
      <rect x="4" y="96" width="110" height="10" rx="2" fill={PAL.slate} />
      <rect x="4" y="96" width="110" height="3" rx="1.5" fill={PAL.steel} />
      {carton(8)}
      {carton(38)}
      <Arrow from={[106, 18]} to={[92, 38]} color={PAL.sky} width={6} head={11} />
      <Move kind="from" dx={20} dy={-26}>
        {carton(68)}
        <Hand pose="hold" x={116} y={78} rotate={-90} scale={0.72} skin={SKIN.jada} sleeve={[PAL.yellow, PAL.yellowShade]} />
      </Move>
      <Shine d="M10 101H40" width={2.2} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
