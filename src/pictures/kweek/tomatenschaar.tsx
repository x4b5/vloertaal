import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** A ripe tomato centred on (x, y), with its calyx and a highlight. */
function Tomato({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g>
      <Shade color={PAL.redShade} opacity={1} at={[x + r * 0.9, y + r * 0.4, r * 0.6, r * 1.2]}>
        <circle cx={x} cy={y} r={r} fill={PAL.red} />
      </Shade>
      <path d={`M${x - r * 0.5} ${y - r * 0.82}L${x} ${y - r * 0.5}L${x + r * 0.5} ${y - r * 0.82}`} fill="none" stroke={PAL.greenShade} strokeWidth={r * 0.26} strokeLinecap="round" />
      <path d={`M${x - r * 0.55} ${y - r * 0.05}Q${x - r * 0.5} ${y - r * 0.48} ${x - r * 0.15} ${y - r * 0.55}`} fill="none" stroke={PAL.white} strokeWidth={r * 0.2} strokeLinecap="round" opacity=".55" />
    </g>
  );
}

/** The snips are drawn lying along x (handles left, blades right) and turned to rise to the top right. */
const TURN = 'translate(52 66) rotate(-40) scale(1.12) translate(-60 -60)';

export default {
  // "de tomatenschaar": the harvest scissors — small snips with orange handles at the bottom left
  // and short pointed steel blades at the top right, closing on the green stalk of a truss of
  // three red tomatoes that hangs on the right.
  'w.tomatenschaar': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={40} ry={4} />
      {/* The truss: the stalk coming down from the top, branching to three tomatoes */}
      <path d="M80 10V56" stroke={PAL.green} strokeWidth="6" strokeLinecap="round" />
      <path d="M80 54Q72 58 70 66M80 54Q90 58 94 68M80 56V80" fill="none" stroke={PAL.greenShade} strokeWidth="3.6" strokeLinecap="round" />
      <Tomato x={68} y={74} r={11} />
      <Tomato x={96} y={76} r={11} />
      <Tomato x={82} y={92} r={11} />
      <g transform={TURN}>
        {/* The back blade and the back handle */}
        <path d="M30 76L58 64" stroke={PAL.orangeShade} strokeWidth="12" strokeLinecap="round" />
        <path d="M58 58L100 64L110 68L98 70L60 66Z" fill={PAL.steel} />
        {/* The spring between the handles */}
        <path d="M44 66Q38 60 44 54" fill="none" stroke={PAL.mist} strokeWidth="2.6" strokeLinecap="round" />
        {/* The front blade, pointed, over the stalk */}
        <Shade color={PAL.steel} opacity={1} at={[94, 60, 24, 6]}>
          <path d="M54 56Q58 48 70 48L110 50L98 58L58 64Z" fill={PAL.mist} />
        </Shade>
        <Shine d="M66 51.4L92 51.6" width={2.4} opacity={0.9} />
        {/* The front handle */}
        <path d="M30 44L58 56" stroke={PAL.orange} strokeWidth="12" strokeLinecap="round" />
        <Shine d="M32 41L50 49" width={2.6} opacity={0.6} />
        {/* The pivot */}
        <circle cx="60" cy="60" r="5.6" fill={PAL.slate} />
        <circle cx="60" cy="60" r="2.2" fill={PAL.steel} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
