import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de omdoos": the outer box (the big box around the small packs) — a big open cardboard box seen from
  // the front and a little from above, full of small white-and-red packs standing in rows; its flaps open.
  'w.omdoos': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={104} rx={46} ry={4} />
      {/* The back flap and the side flap, up */}
      <path d="M40 46L100 46L96 28L36 28Z" fill={PAL.cardShade} />
      <path d="M100 46L112 38V18L100 26Z" fill={PAL.card} />
      {/* The inside of the box */}
      <path d="M18 58L40 46H100L84 58Z" fill={PAL.cardDark} />
      {/* The small packs inside, in rows (back row first) */}
      {[44, 58, 72, 86].map((x) => (
        <g key={`b${x}`}>
          <rect x={x} y={36} width="12" height="14" rx="1.5" fill={PAL.white} />
          <rect x={x} y={36} width="12" height="5" rx="1.5" fill={PAL.red} />
        </g>
      ))}
      {[28, 42, 56, 70].map((x) => (
        <g key={`f${x}`}>
          <rect x={x} y={44} width="13" height="15" rx="1.5" fill={PAL.white} />
          <rect x={x} y={44} width="13" height="5" rx="1.5" fill={PAL.red} />
          <rect x={x + 9} y={44} width="4" height="15" rx="1.5" fill={PAL.paperShade} />
        </g>
      ))}
      {/* The side and the front of the box */}
      <path d="M84 58L100 46V92L84 104Z" fill={PAL.cardShade} />
      <rect x="18" y="58" width="66" height="46" rx="2" fill={PAL.card} />
      {/* The front flap, folded down */}
      <path d="M18 58H84L80 66H22Z" fill="#f0c48a" />
      <Shine d="M24 72V96" width={3} opacity={0.5} color="#f6d3a2" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
