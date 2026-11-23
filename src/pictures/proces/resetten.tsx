import type { JSX } from 'react';
import { Hand, Ground, Move, PAL, SKIN, Shine, r1 } from '../kit';

/** Where a pointing hand's wrist goes so that its fingertip lands on (tx, ty). */
const wrist = (tx: number, ty: number, rot: number, s: number): [number, number] => {
  const a = (rot * Math.PI) / 180;
  const [fx, fy] = [-8 * s, -48 * s];
  return [r1(tx - (fx * Math.cos(a) - fy * Math.sin(a))), r1(ty - (fx * Math.sin(a) + fy * Math.cos(a)))];
};

export default {
  // "resetten": to reset (clear a fault) — a panel with two lamps at the top, the red one dark (the fault is
  // gone) and the green one lit, and a big blue reset button with a white circular arrow; a finger presses
  // it. On the intro card the finger comes to the button, then the green lamp goes on (once).
  'w.resetten': () => {
    const [wx, wy] = wrist(50, 76, -30, 0.8);
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={56} cy={105} rx={44} ry={3.5} />
        {/* The panel */}
        <path d="M88 20L96 14V98L88 104Z" fill={PAL.slate} />
        <rect x="14" y="20" width="74" height="84" rx="5" fill={PAL.mist} />
        <Shine d="M19 26V96" width={2.6} opacity={0.8} />
        {/* The two lamps: red dark, green lit */}
        <circle cx="36" cy="38" r="11" fill={PAL.slate} />
        <circle cx="36" cy="38" r="7.5" fill={PAL.redShade} opacity=".45" />
        <circle cx="66" cy="38" r="11" fill={PAL.slate} />
        <Move kind="show" once>
          <circle cx="66" cy="38" r="7.5" fill={PAL.leaf} />
          <circle cx="63.5" cy="35.5" r="2.4" fill={PAL.lime} />
        </Move>
        {/* The blue reset button with its circular arrow */}
        <circle cx="50" cy="76" r="18" fill={PAL.slateDark} />
        <circle cx="50" cy="78" r="14" fill={PAL.blueShade} />
        <circle cx="50" cy="75.5" r="14" fill={PAL.blue} />
        <path d="M57.5 71A8.5 8.5 0 1 0 58 79" fill="none" stroke={PAL.white} strokeWidth="3.4" />
        <path d="M53.5 69.5L59 69L59.5 63.5" fill="none" stroke={PAL.white} strokeWidth="3.4" />
        {/* The finger pressing it */}
        <Move kind="from" dx={22} dy={20}>
          <Hand pose="point" x={wx} y={wy} rotate={-30} scale={0.8} skin={SKIN.jada} sleeve={[PAL.orange, PAL.orangeShade]} />
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
