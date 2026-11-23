import type { JSX } from 'react';
import { PAL, Sparkle } from '../kit';

const heart = (x: number, y: number, r: number) =>
  `M${x} ${y + r}C${x - r * 1.6} ${y - r * 0.1} ${x - r * 1.1} ${y - r * 1.4} ${x} ${y - r * 0.55}C${x + r * 1.1} ${y - r * 1.4} ${x + r * 1.6} ${y - r * 0.1} ${x} ${y + r}Z`;

/** A gold ring seen a little from the side: a thick band (a stroked ellipse) with a lit top edge. */
function Ring({ cx, cy, rot }: { cx: number; cy: number; rot: number }) {
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <ellipse cx={cx} cy={cy + 2} rx="24" ry="20" fill="none" stroke={PAL.yellowShade} strokeWidth="9" />
      <ellipse cx={cx} cy={cy} rx="24" ry="20" fill="none" stroke={PAL.yellow} strokeWidth="8" />
      <path d={`M${cx - 20} ${cy - 10}Q${cx - 12} ${cy - 19} ${cx} ${cy - 19.5}`} stroke={PAL.yellowShine} strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  );
}

export default {
  // "de bruiloft": the wedding — two gold wedding rings linked together, a red heart above them and sparkles.
  'w.bruiloft': () => (
    <g>
      <ellipse cx="60" cy="102" rx="40" ry="4" fill="#000" opacity=".1" />
      <Ring cx={44} cy={72} rot={-14} />
      <Ring cx={76} cy={74} rot={14} />
      {/* The left ring passes in front of the right one at the bottom */}
      <path d="M58 88Q62 92 64 90" stroke={PAL.yellow} strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d={heart(60, 30, 13)} fill={PAL.red} />
      <path d="M50 24Q52 20 56 21" stroke={PAL.white} strokeWidth="2.6" fill="none" strokeLinecap="round" opacity=".6" />
      <Sparkle x={22} y={34} r={7} />
      <Sparkle x={100} y={36} r={6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
