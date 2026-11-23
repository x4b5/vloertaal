import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de AED": the AED (a machine that helps a heart that stopped) — a yellow AED case with a dark front
  // panel: a big red heart with a white lightning bolt through it, and a green start button; its two white
  // pads lie in front of it on their dark wires.
  'w.aed': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={48} ry={4} />
      {/* The case */}
      <Shade color={PAL.yellowShade} opacity={1} at={[96, 56, 10, 44]}>
        <rect x="24" y="12" width="72" height="76" rx="12" fill={PAL.yellow} />
      </Shade>
      <Shine d="M30 22V44" color={PAL.yellowShine} width={3.4} opacity={0.8} />
      <rect x="32" y="20" width="56" height="58" rx="7" fill={PAL.slate} />
      {/* The heart with the bolt */}
      <path d="M60 66Q40 54 40 40Q40 30 50 30Q56 30 60 36Q64 30 70 30Q80 30 80 40Q80 54 60 66Z" fill={PAL.red} />
      <path d="M62 34L52 49H60L56 62L68 45H60Z" fill={PAL.white} />
      <circle cx="80" cy="72" r="3.6" fill={PAL.leaf} />
      {/* The wires and the pads */}
      <path d="M40 88Q38 96 28 96M80 88Q82 96 92 96" fill="none" stroke={PAL.slateDark} strokeWidth="2.6" />
      <rect x="10" y="90" width="22" height="16" rx="4" fill={PAL.paper} />
      <rect x="10" y="102" width="22" height="4" rx="2" fill={PAL.paperShade} />
      <rect x="88" y="90" width="22" height="16" rx="4" fill={PAL.paper} />
      <rect x="88" y="102" width="22" height="4" rx="2" fill={PAL.paperShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
