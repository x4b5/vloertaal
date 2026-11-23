import type { JSX } from 'react';
import { Hand, PAL, SKIN } from '../kit';
import { Bust } from '../bust';

/** A red zigzag of throbbing pain, from (x, y), pointing out to the side `dir` (-1 left, 1 right). */
const throb = (x: number, y: number, dir: number) => (
  <path
    d={`M${x} ${y - 12}L${x + dir * 8} ${y - 6}L${x + dir * 2} ${y}L${x + dir * 10} ${y + 6}L${x + dir * 4} ${y + 12}`}
    fill="none"
    stroke={PAL.red}
    strokeWidth="3.6"
    strokeLinecap="round"
  />
);

export default {
  // "de hoofdpijn": the headache — Amina with her eyes squeezed shut presses both hands to her temples;
  // red zigzags of throbbing pain stand out on both sides of her head.
  'w.hoofdpijn': () => (
    <g strokeLinejoin="round">
      <Bust who="amina" x={60} y={126} scale={0.82} emotion="pain" bold />
      <Hand pose="open" x={36} y={90} rotate={14} scale={0.46} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      <Hand pose="open" x={84} y={90} rotate={-14} scale={0.46} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} mirror />
      {throb(20, 46, -1)}
      {throb(100, 46, 1)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
