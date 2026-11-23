import type { JSX } from 'react';
import { PAL, Shine } from '../kit';
import { Bust } from '../bust';

/** A chevron (one step of a process), its left edge at x, from y 60 to 90, w wide. */
const chevron = (x: number, w: number, fill: string, shade: string, first = false) => {
  const d = first
    ? `M${x} 60H${x + w}L${x + w + 11} 75L${x + w} 90H${x}Z`
    : `M${x} 60H${x + w}L${x + w + 11} 75L${x + w} 90H${x}L${x + 11} 75Z`;
  return (
    <g>
      <path d={d} fill={shade} stroke={shade} strokeWidth="3" strokeLinejoin="round" transform="translate(0 4)" />
      <path d={d} fill={fill} stroke={fill} strokeWidth="3" strokeLinejoin="round" />
    </g>
  );
};

export default {
  // "de fase": the phase (a step in your agency contract: A, B or C) — three arrow-shaped steps in a
  // row: the first done (blue), the second where Bram is now (orange, with Bram above it), the third
  // still to come (grey); one, two and three dots under them for the order.
  'w.fase': () => (
    <g>
      <Bust who="bram" x={60} y={62} scale={0.5} expr="pleased" bold />
      {chevron(8, 24, PAL.blue, PAL.blueShade, true)}
      {chevron(44, 22, PAL.orange, PAL.orangeShade)}
      {chevron(78, 18, PAL.mist, PAL.steel)}
      <Shine d="M14 66H28" width={2.6} opacity={0.5} />
      <Shine d="M56 66H64" width={2.6} opacity={0.6} />
      {/* One, two, three dots */}
      <g fill={PAL.line}>
        <circle cx="22" cy="104" r="3.2" />
        <circle cx="56" cy="104" r="3.2" />
        <circle cx="64" cy="104" r="3.2" />
        <circle cx="86" cy="104" r="3.2" />
        <circle cx="94" cy="104" r="3.2" />
        <circle cx="102" cy="104" r="3.2" />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
