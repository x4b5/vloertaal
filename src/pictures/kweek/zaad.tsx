import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** A seed: a fat tan oval with a dark shade side, at (x, y), turned `a` degrees. */
const seed = (x: number, y: number, a: number) => (
  <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${a})`}>
    <ellipse cx="0" cy="0" rx="4.6" ry="3" fill={PAL.card} />
    <path d="M0.6 2.8A4.6 3 0 0 0 4.6 0" fill="none" stroke={PAL.cardDark} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M-2.6 -1.2Q-1 -2.2 1 -2" fill="none" stroke="#f0c48a" strokeWidth="1.2" strokeLinecap="round" />
  </g>
);

export default {
  // "het zaad": the seeds — a paper seed packet with a green sprout on it, tipped over, a stream of big
  // tan seeds pouring out of its torn top onto a dark heap of soil.
  'w.zaad': () => (
    <g strokeLinejoin="round">
      <Ground cx={72} cy={103} rx={38} ry={4} />
      {/* The heap of soil */}
      <Shade color="#4a2a15" opacity={1} at={[106, 100, 26, 22]}>
        <path d="M38 102Q44 82 64 78Q84 74 98 86Q106 94 108 102Z" fill={PAL.brown} />
      </Shade>
      {/* The seed packet, tipped over: its torn top points down to the right */}
      <g transform="translate(40 46) rotate(118)">
        {/* depth edge */}
        <rect x="-19" y="-24" width="40" height="52" rx="3" fill={PAL.paperShade} />
        <path d="M-21 -26H19V24Q19 27 16 27H-18Q-21 27 -21 24Z" fill={PAL.paper} />
        {/* the torn, open top */}
        <path d="M-21 -26L-17 -30L-13 -26L-9 -30L-5 -26L-1 -30L3 -26L7 -30L11 -26L15 -30L19 -26Z" fill={PAL.paper} />
        <ellipse cx="-1" cy="-26" rx="16" ry="3" fill={PAL.slate} />
        {/* the picture of a sprout on the packet */}
        <rect x="-15" y="-16" width="28" height="34" rx="3" fill={PAL.lime} />
        <path d="M-1 14V-2" stroke={PAL.green} strokeWidth="3" strokeLinecap="round" />
        <path d="M-1 0Q-12 -2 -12 -11Q-2 -10 -1 0Z" fill={PAL.green} />
        <path d="M-1 -2Q10 -4 10 -13Q0 -12 -1 -2Z" fill={PAL.leaf} />
        <path d="M-8 15H6" stroke={PAL.brown} strokeWidth="3.4" strokeLinecap="round" />
      </g>
      <Shine d="M30 26Q38 22 48 22" width={3} opacity={0.9} />
      {/* The seeds pouring out and lying on the heap */}
      {[
        seed(66, 62, 20), seed(71, 70, -30), seed(64, 72, 60), seed(74, 78, 10),
        seed(58, 82, -20), seed(68, 84, 40), seed(80, 85, -10), seed(88, 92, 30),
        seed(50, 92, 15), seed(76, 94, -40), seed(62, 95, 0), seed(96, 98, -15),
      ]}
    </g>
  ),
} as Record<string, () => JSX.Element>;
