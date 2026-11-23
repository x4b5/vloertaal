import type { JSX } from 'react';
import { Ground, PAL } from '../kit';

export default {
  // "de begrafenis": the funeral — a round wreath of dark green leaves with white flowers, a purple ribbon hanging
  // from its bottom, on a low wooden stand, and a lit white candle beside it. Calm, nothing dark.
  'w.begrafenis': () => {
    const leaves = Array.from({ length: 18 }, (_, i) => (i * 360) / 18);
    return (
      <g>
        <Ground cx={60} cy={104} rx={46} ry={4} />
        {/* Stand */}
        <path d="M38 102L44 78M70 78L78 102" stroke={PAL.wood} strokeWidth="4.4" strokeLinecap="round" />
        {/* The ring of leaves */}
        <circle cx="54" cy="52" r="30" fill="none" stroke={PAL.greenShade} strokeWidth="16" />
        {leaves.map((a) => (
          <ellipse key={a} cx="54" cy="22" rx="5" ry="9" fill={a % 40 ? PAL.green : PAL.greenShade} transform={`rotate(${a} 54 52) rotate(35 54 22)`} />
        ))}
        {/* White flowers */}
        {[0, 72, 144, 216, 288].map((a) => (
          <g key={a} transform={`rotate(${a} 54 52)`}>
            <circle cx="54" cy="22" r="6.4" fill={PAL.white} />
            <circle cx="54" cy="22" r="2.4" fill={PAL.yellow} />
          </g>
        ))}
        {/* Ribbon: a bow at the bottom with two tails */}
        <path d="M50 80L42 104L48 100L52 104L56 82Z" fill={PAL.purpleShade} />
        <path d="M58 80L60 104L64 100L68 104L62 80Z" fill={PAL.purple} />
        <circle cx="55" cy="80" r="6" fill={PAL.purple} />
        {/* Candle */}
        <rect x="94" y="74" width="12" height="30" rx="2" fill={PAL.paperShade} />
        <rect x="94" y="74" width="8" height="30" rx="2" fill={PAL.white} />
        <path d="M100 74V69" stroke={PAL.ink} strokeWidth="1.4" />
        <path d="M100 56Q106 64 100 70Q94 64 100 56Z" fill={PAL.yellow} />
        <path d="M100 62Q102 66 100 69Q98 66 100 62Z" fill={PAL.yellowShine} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
