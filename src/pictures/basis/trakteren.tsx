import type { JSX } from 'react';
import { Move, PAL, SKIN, Sparkle } from '../kit';
import { Bust } from '../bust';

/** A cupcake: paper case, pink icing, a cherry. (x, y) is the bottom middle. */
function Cupcake({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <path d={`M${x - 8} ${y - 12}H${x + 8}L${x + 6} ${y}H${x - 6}Z`} fill={PAL.sky} />
      <path d={`M${x - 3} ${y - 12}V${y}M${x + 2} ${y - 12}V${y}`} stroke={PAL.skyShade} strokeWidth="1.3" />
      <path d={`M${x - 10} ${y - 12}Q${x - 10} ${y - 24} ${x} ${y - 24}Q${x + 10} ${y - 24} ${x + 10} ${y - 12}Z`} fill={PAL.redLight} />
      <circle cx={x} cy={y - 26} r="3.4" fill={PAL.red} />
    </g>
  );
}

export default {
  // "trakteren": to treat (bring something nice for everyone) — Bram, smiling, holds out a tray with four
  // cupcakes to his colleagues, with sparkles. On the intro card he brings the tray forward (once).
  'w.trakteren': () => (
    <g>
      <Bust who="bram" x={60} y={92} scale={0.6} expr="joy" squint />
      <Move kind="from" dy={20} once>
        {/* Tray with its rim */}
        <rect x="12" y="96" width="96" height="10" rx="4" fill={PAL.steel} />
        <rect x="12" y="94" width="96" height="7" rx="3.5" fill={PAL.mist} />
        {[26, 48, 70, 92].map((x) => <Cupcake key={x} x={x} y={96} />)}
        {/* Hands under the tray's ends */}
        <ellipse cx="14" cy="104" rx="7" ry="5" fill={SKIN.bram[0]} />
        <ellipse cx="106" cy="104" rx="7" ry="5" fill={SKIN.bram[0]} />
      </Move>
      <Sparkle x={16} y={34} r={7} />
      <Sparkle x={104} y={30} r={6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
