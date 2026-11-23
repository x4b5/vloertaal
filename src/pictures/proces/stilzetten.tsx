import type { JSX } from 'react';
import { Hand, Ground, Move, PAL, SKIN, Shine, r1 } from '../kit';

/** Where a pointing hand's wrist goes so that its fingertip lands on (tx, ty). */
const wrist = (tx: number, ty: number, rot: number, s: number): [number, number] => {
  const a = (rot * Math.PI) / 180;
  const [fx, fy] = [-8 * s, -48 * s];
  return [r1(tx - (fx * Math.cos(a) - fy * Math.sin(a))), r1(ty - (fx * Math.sin(a) + fy * Math.cos(a)))];
};

export default {
  // "stilzetten": to shut down (the right way) — a grey machine panel with a big dark stop button (a white
  // square on it), not the red emergency stop; a hand comes from above and presses it with one finger. Next
  // to it a small green lamp that is still on. On the intro card the finger comes down to the button (once).
  'w.stilzetten': () => {
    const [wx, wy] = wrist(56, 72, 160, 0.82);
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={60} cy={105} rx={44} ry={3.5} />
        {/* The panel: depth edge, front */}
        <path d="M98 46L106 40V98L98 104Z" fill={PAL.slate} />
        <path d="M18 46L26 40H106L98 46Z" fill={PAL.mist} />
        <rect x="18" y="46" width="80" height="58" rx="4" fill={PAL.steel} />
        <Shine d="M23 52V98" width={2.6} opacity={0.5} />
        {/* The dark stop button with its white square */}
        <circle cx="56" cy="76" r="20" fill={PAL.mist} />
        <circle cx="56" cy="78" r="15" fill={PAL.slateDark} />
        <circle cx="56" cy="75.5" r="15" fill={PAL.slate} />
        <rect x="48.5" y="68" width="15" height="15" rx="2" fill={PAL.white} />
        {/* A small lamp */}
        <circle cx="86" cy="58" r="6" fill={PAL.slateDark} />
        <circle cx="86" cy="58" r="4" fill={PAL.leaf} />
        {/* The hand, from above */}
        <Move kind="from" dy={-24} once>
          <Hand pose="point" x={wx} y={wy} rotate={160} scale={0.82} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
