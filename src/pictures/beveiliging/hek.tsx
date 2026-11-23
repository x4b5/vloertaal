import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** The bars of one gate leaf, from x0, n bars 8 apart, with spear points on top. */
const bars = (x0: number, n: number) =>
  Array.from({ length: n }, (_, i) => {
    const x = x0 + i * 8;
    return (
      <g key={x}>
        <rect x={x} y="34" width="4.4" height="64" rx="1" fill={PAL.slate} />
        <path d={`M${x - 1} 35L${x + 2.2} 27L${x + 5.4} 35Z`} fill={PAL.slate} />
      </g>
    );
  });

export default {
  // "het hek": the fence, the gate — a dark steel gate of upright bars with spear points, two leaves
  // between two square posts, with two crossbars and a yellow padlock where the leaves meet.
  'w.hek': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={102} rx={50} ry={4} />
      {/* The leaves: bars and crossbars */}
      {bars(22, 5)}
      {bars(64, 5)}
      <rect x="20" y="42" width="80" height="6" rx="2" fill={PAL.slateDark} />
      <rect x="20" y="84" width="80" height="6" rx="2" fill={PAL.slateDark} />
      {/* The posts */}
      <rect x="9" y="22" width="14" height="80" rx="2" fill={PAL.slate} />
      <rect x="18" y="22" width="5" height="80" fill={PAL.slateDark} />
      <rect x="7" y="17" width="18" height="7" rx="2.5" fill={PAL.slateDark} />
      <rect x="97" y="22" width="14" height="80" rx="2" fill={PAL.slate} />
      <rect x="106" y="22" width="5" height="80" fill={PAL.slateDark} />
      <rect x="95" y="17" width="18" height="7" rx="2.5" fill={PAL.slateDark} />
      <Shine d="M12 30V70" width={2.4} opacity={0.4} />
      {/* The padlock where the leaves meet */}
      <path d="M55 64V58Q55 52 60.5 52Q66 52 66 58V64" fill="none" stroke={PAL.steel} strokeWidth="3.4" />
      <rect x="52" y="62" width="17" height="14" rx="3" fill={PAL.yellow} />
      <rect x="62" y="62" width="7" height="14" rx="3" fill={PAL.yellowShade} />
      <circle cx="59" cy="68" r="2" fill={PAL.slateDark} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
