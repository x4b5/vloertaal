import type { JSX } from 'react';
import { Ground, Hand, PAL, SKIN, Shade } from '../kit';
import { Bust } from '../bust';

export default {
  // "de huismeester": the housing manager (the person who looks after the house) — Bram in front of
  // the workers' house with a wrench in his raised hand: he keeps the house in order and fixes things.
  'w.huismeester': () => (
    <g strokeLinejoin="round">
      <Ground cx={84} cy={105} rx={26} ry={4} />
      {/* The house behind him */}
      <rect x="92" y="26" width="7" height="16" rx="1.6" fill={PAL.slate} />
      <Shade color={PAL.paperShade} opacity={1} at={[112, 80, 8, 40]}>
        <rect x="62" y="56" width="46" height="48" rx="2" fill={PAL.paper} />
      </Shade>
      <path d="M56 58L85 30L114 58Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="5" />
      <path d="M85 30L114 58H85Z" fill={PAL.clayShade} stroke={PAL.clayShade} strokeWidth="5" />
      <rect x="90" y="80" width="12" height="24" rx="2" fill={PAL.wood} />
      <rect x="92" y="64" width="11" height="10" rx="1.6" fill={PAL.sky} />
      {/* Bram */}
      <Bust who="bram" x={46} y={122} scale={0.68} expr="pleased" bold />
      {/* The wrench in his raised hand */}
      <g transform="rotate(20 22 40)">
        <rect x="18" y="20" width="8" height="48" rx="3" fill={PAL.steel} />
        <path d="M12 14A10 10 0 0 1 32 14L28 22H16Z" fill={PAL.steel} />
        <path d="M18 8H26V16H18Z" fill={PAL.paper} />
      </g>
      <Hand pose="hold" x={22} y={84} rotate={10} scale={0.58} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
