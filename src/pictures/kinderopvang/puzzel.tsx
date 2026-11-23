import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shine } from '../kit';

/** A heart around (x, y), about 22 wide. */
const heart = (x: number, y: number) =>
  `M${x} ${y + 10}C${x - 4} ${y + 6} ${x - 11} ${y + 2} ${x - 11} ${y - 4}C${x - 11} ${y - 8} ${x - 8} ${y - 11} ${x - 5} ${y - 11}C${x - 2.6} ${y - 11} ${x - 0.8} ${y - 9.4} ${x} ${y - 7.6}C${x + 0.8} ${y - 9.4} ${x + 2.6} ${y - 11} ${x + 5} ${y - 11}C${x + 8} ${y - 11} ${x + 11} ${y - 8} ${x + 11} ${y - 4}C${x + 11} ${y + 2} ${x + 4} ${y + 6} ${x} ${y + 10}Z`;

export default {
  // "de puzzel": the puzzle — a wooden toddler puzzle: a board with four shapes in their holes (a red
  // circle, a yellow triangle, a blue square, a green heart), each with a little knob; a hand puts the
  // green heart in by its knob.
  // On the intro card the heart comes down into its hole, once (the last piece goes in).
  'w.puzzel': () => (
    <g strokeLinejoin="round">
      {/* The board: depth edge, then the face */}
      <rect x="12" y="34" width="96" height="74" rx="8" fill={PAL.cardDark} />
      <rect x="12" y="30" width="96" height="74" rx="8" fill={PAL.card} />
      <Shine d="M18 38H40" width={3} opacity={0.55} />
      {/* The holes */}
      <circle cx="36" cy="52" r="13" fill={PAL.cardShade} />
      <path d="M84 39L98 63H70Z" fill={PAL.cardShade} />
      <rect x="23" y="72" width="26" height="24" rx="3" fill={PAL.cardShade} />
      <path d={heart(84, 85)} fill={PAL.cardShade} />
      {/* The pieces in their holes, each with a knob */}
      <circle cx="36" cy="51" r="12" fill={PAL.red} />
      <circle cx="36" cy="51" r="3.6" fill={PAL.redShade} />
      <path d="M84 39.5L97 62H71Z" fill={PAL.yellow} />
      <circle cx="84" cy="54" r="3.4" fill={PAL.yellowShade} />
      <rect x="24" y="71" width="24" height="23" rx="3" fill={PAL.sky} />
      <circle cx="36" cy="82.5" r="3.6" fill={PAL.skyShade} />
      {/* The green heart in the hand, going into its hole */}
      <Move kind="from" dy={-26} dx={6} once>
        <path d={heart(84, 83)} fill={PAL.green} />
        <circle cx="84" cy="79" r="3.6" fill={PAL.greenShade} />
        <Hand pose="fist" x={96} y={46} rotate={200} scale={0.62} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
