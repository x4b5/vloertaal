import type { JSX } from 'react';
import { Box, Ground, PAL } from '../kit';

/** A hand hole cut in a box face: a dark rounded slot. */
const hole = (x: number, y: number) => <rect x={x} y={y} width="16" height="6" rx="3" fill={PAL.cardDark} />;

export default {
  // "de verhuisdoos": the moving box — two taped cardboard moving boxes stacked, a big one below and a
  // smaller one on top, each with a hand hole cut in the front and a white label on the big one.
  'w.verhuisdoos': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={46} ry={5} />
      <Box x={14} y={60} w={66} h={44} depth={20} label />
      {hole(24, 68)}
      <Box x={24} y={30} w={48} h={30} depth={16} />
      {hole(30, 37)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
