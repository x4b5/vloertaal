import type { JSX } from 'react';
import { Hand, Ground, Move, PAL, SKIN, Shade, Shine, r1 } from '../kit';

/** Where a pointing hand's wrist goes so that its fingertip lands on (tx, ty). */
const wrist = (tx: number, ty: number, rot: number, s: number): [number, number] => {
  const a = (rot * Math.PI) / 180;
  const [fx, fy] = [-8 * s, -48 * s];
  return [r1(tx - (fx * Math.cos(a) - fy * Math.sin(a))), r1(ty - (fx * Math.sin(a) + fy * Math.cos(a)))];
};

export default {
  // "opstarten": to start up — a steel control box with a big green start button (a white "play" triangle);
  // a hand in a blue sleeve presses it with one finger; on the machine roll at the top right, curved motion
  // lines show it starting to turn. On the intro card the finger comes to the button, then the motion lines
  // appear (once: the line is started).
  'w.opstarten': () => {
    const [wx, wy] = wrist(52, 76, -36, 0.82);
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={46} cy={105} rx={40} ry={3.5} />
        {/* The machine roll on its stand, top right */}
        <rect x="86" y="40" width="6" height="22" fill={PAL.steel} />
        <Shade color={PAL.slateDark} opacity={0.6} at={[106, 30, 8, 20]}>
          <circle cx="89" cy="30" r="16" fill={PAL.slate} />
        </Shade>
        <path d="M89 30L89 16" stroke={PAL.steel} strokeWidth="3" />
        <circle cx="89" cy="30" r="5" fill={PAL.mist} />
        <Move kind="show" once>
          <path d="M68 26A21 21 0 0 1 84 9.5M110 34A21 21 0 0 1 94 50.5" fill="none" stroke={PAL.leaf} strokeWidth="4.4" />
          <path d="M84 9.5l-7 -1.5M84 9.5l-3 6.5M94 50.5l7 1.5M94 50.5l3 -6.5" stroke={PAL.leaf} strokeWidth="4.4" />
        </Move>
        {/* The control box: side, front */}
        <path d="M74 50L82 44V98L74 104Z" fill={PAL.slate} />
        <rect x="12" y="50" width="62" height="54" rx="4" fill={PAL.steel} />
        <Shine d="M17 56V96" width={2.6} opacity={0.5} />
        {/* The green start button in its dark collar */}
        <circle cx="44" cy="68" r="17" fill={PAL.slateDark} />
        <circle cx="44" cy="69.5" r="13" fill={PAL.greenShade} />
        <circle cx="44" cy="67" r="13" fill={PAL.green} />
        <path d="M39.5 60.5L51 67L39.5 73.5Z" fill={PAL.white} stroke={PAL.white} strokeWidth="2.5" />
        <path d="M26 94H62" stroke={PAL.mist} strokeWidth="3" />
        {/* The hand pressing it */}
        <Move kind="from" dx={20} dy={24} once>
          <Hand pose="point" x={wx} y={wy} rotate={-36} scale={0.82} skin={SKIN.amina} sleeve={[PAL.blue, PAL.blueShade]} />
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
