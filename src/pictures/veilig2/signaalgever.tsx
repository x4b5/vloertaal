import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN } from '../kit';
import { Bust } from '../bust';

/** A crane hook on its block, hanging from a cable at x from the top. */
const hook = (x: number, y: number) => (
  <g>
    <path d={`M${x} 6V${y}`} stroke={PAL.slate} strokeWidth="2.4" />
    <rect x={x - 7} y={y} width="14" height="12" rx="3" fill={PAL.yellow} />
    <rect x={x + 1} y={y} width="6" height="12" rx="2" fill={PAL.yellowShade} />
    <path d={`M${x} ${y + 12}V${y + 16}A7 7 0 0 1 ${x - 14} ${y + 16}`} fill="none" stroke={PAL.steel} strokeWidth="4.5" strokeLinecap="round" />
  </g>
);

export default {
  // "de signaalgever": the banksman — Bram in his orange hi-vis vest, his right arm straight up with the
  // palm open (the hand signal to the crane driver), and the crane's hook hanging at the top right.
  // His arm goes up into the signal (three rounds: he keeps signalling).
  'w.signaalgever': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {hook(94, 20)}
      <Bust who="bram" x={52} y={124} scale={0.8} expr="neutral" />
      <Move kind="turn" turn={-60} at={[30, 96]}>
        <Hand pose="open" x={28} y={62} rotate={0} scale={0.7} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
        <rect x="18.2" y="64" width="19.6" height="34" rx="2" fill={PAL.blue} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
