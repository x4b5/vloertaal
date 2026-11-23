import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** A small sealed food pack on the belt, its front left corner at (x, y). */
const pack = (x: number, y: number) => (
  <g>
    <path d={`M${x} ${y}L${x + 6} ${y - 6}H${x + 24}L${x + 18} ${y}Z`} fill={PAL.paper} />
    <path d={`M${x + 18} ${y}L${x + 24} ${y - 6}V${y + 6}L${x + 18} ${y + 12}Z`} fill={PAL.cardShade} />
    <rect x={x} y={y} width="18" height="12" rx="1.5" fill={PAL.card} />
    <rect x={x + 4} y={y + 3} width="10" height="5" rx="1" fill={PAL.white} />
  </g>
);

export default {
  // "de metaaldetector": the metal detector — a steel arch over the production belt, a dark tunnel
  // inside with ice-blue detection waves, a control box with a green lamp on top; a food pack has just
  // come out on the right, the next one waits on the left.
  // On the intro card the pack rides through the arch (three rounds: the machine at work).
  'w.metaaldetector': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={48} ry={4} />
      {/* The belt's legs */}
      <path d="M18 88V102M102 88V102" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      {/* The tunnel: depth side and the dark inside */}
      <path d="M80 34L88 26V82L80 90Z" fill={PAL.steel} />
      <path d="M40 34L48 26H88L80 34Z" fill={PAL.paper} />
      <rect x="47" y="46" width="26" height="32" fill={PAL.slateDark} />
      <path d="M54 54Q60 50 66 54M52 62Q60 57 68 62" fill="none" stroke={PAL.ice} strokeWidth="2.4" strokeLinecap="round" opacity=".9" />
      {/* The belt */}
      <rect x="10" y="78" width="100" height="10" rx="5" fill={PAL.slateDark} />
      <rect x="13" y="78" width="94" height="3.5" rx="1.75" fill={PAL.steel} />
      {/* The waiting pack and the pack riding through */}
      {pack(14, 66)}
      <Move kind="from" dx={-56}>{pack(86, 66)}</Move>
      {/* The front of the arch: two posts and the top beam */}
      <Shade color={PAL.steel} opacity={1} at={[84, 60, 8, 40]}>
        <path d="M40 34H80V90H73V46H47V90H40Z" fill={PAL.mist} />
      </Shade>
      <Shine d="M43 40V84" width={2.6} opacity={0.8} />
      {/* The control box and its lamp */}
      <rect x="50" y="14" width="20" height="14" rx="2.5" fill={PAL.blue} />
      <rect x="66" y="14" width="4" height="14" rx="1.5" fill={PAL.blueShade} />
      <circle cx="57" cy="21" r="3.6" fill={PAL.leaf} />
      <rect x="57" y="27" width="6" height="8" fill={PAL.steel} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
