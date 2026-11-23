import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

/** A small sealed food pack on the belt, its front left corner at (x, y). */
const pack = (x: number, y: number) => (
  <g>
    <path d={`M${x} ${y}L${x + 5} ${y - 5}H${x + 22}L${x + 17} ${y}Z`} fill={PAL.paper} />
    <path d={`M${x + 17} ${y}L${x + 22} ${y - 5}V${y + 7}L${x + 17} ${y + 12}Z`} fill={PAL.cardShade} />
    <rect x={x} y={y} width="17" height="12" rx="1.5" fill={PAL.card} />
    <rect x={x + 3.5} y={y + 3} width="10" height="5" rx="1" fill={PAL.white} />
  </g>
);

export default {
  // "het controlepunt": the check point (a step where you must check something) — a production belt with
  // packs riding along it; over the middle pack stands a big sky-blue map pin with a white tick in it:
  // here, at this point on the line, you check.
  // On the intro card: the packs ride along the belt to the right, three rounds (the belt runs).
  'w.controlepunt': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={4} />
      {/* The belt and its legs */}
      <path d="M18 92V102M102 92V102" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      <rect x="8" y="82" width="104" height="10" rx="5" fill={PAL.slateDark} />
      <rect x="11" y="82" width="98" height="3.5" rx="1.75" fill={PAL.steel} />
      <Move kind="from" dx={-24}>
        {pack(12, 70)}
        {pack(50, 70)}
        {pack(88, 70)}
      </Move>
      {/* The spot on the belt and the pin over it */}
      <ellipse cx="60" cy="66" rx="16" ry="3.5" fill={PAL.sky} opacity=".35" />
      <path d="M60 64Q42 44 42 30A18 18 0 0 1 78 30Q78 44 60 64Z" fill={PAL.skyShade} transform="translate(2 2)" />
      <path d="M60 64Q42 44 42 30A18 18 0 0 1 78 30Q78 44 60 64Z" fill={PAL.sky} />
      <circle cx="60" cy="30" r="11" fill={PAL.white} />
      <path d="M54.5 30.5L58.5 34.5L66 26" fill="none" stroke={PAL.ok} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      <Shine d="M46 26Q48 18 55 15" width={2.6} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
