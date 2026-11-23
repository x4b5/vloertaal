import type { JSX, ReactNode } from 'react';
import { Cross, PAL, Shade, Tick } from '../kit';

/** One rule on the board: an icon in a round frame at (x, y), two text lines, and a tick or a cross. */
const row = (y: number, icon: ReactNode, ok: boolean) => (
  <g key={y}>
    <circle cx="30" cy={y} r="10" fill={PAL.white} />
    {icon}
    <path d={`M46 ${y - 3}H74M46 ${y + 4}H66`} stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
    {ok ? <Tick x={90} y={y} r={8} /> : <Cross x={90} y={y} r={8} />}
  </g>
);

export default {
  // "de bedrijfsregels": the company rules (the rules of the hirer) — a notice board on the company's
  // wall, its header with the factory's sawtooth roof; three rules: a hard hat (yes), a phone (no),
  // a clock (be on time: yes).
  'w.bedrijfsregels': () => (
    <g strokeLinejoin="round">
      {/* The board */}
      <rect x="14" y="14" width="92" height="92" rx="7" fill={PAL.slateDark} transform="translate(0 3)" />
      <Shade color={PAL.paperShade} opacity={1} at={[108, 70, 12, 50]}>
        <rect x="14" y="14" width="92" height="92" rx="7" fill={PAL.paper} />
      </Shade>
      <path d="M14 21A7 7 0 0 1 21 14H99A7 7 0 0 1 106 21V36H14Z" fill={PAL.orange} />
      {/* The factory in the header */}
      <path d="M44 32V24L52 19V24L60 19V24L68 19V24L76 19V32Z" fill={PAL.white} />
      <rect x="72" y="15" width="4" height="8" rx="1" fill={PAL.white} />
      {row(50, (
        <g>
          <path d="M22 54Q22 42 30 42Q38 42 38 54Z" fill={PAL.yellow} />
          <rect x="20" y="52" width="20" height="4" rx="2" fill={PAL.yellowShade} />
        </g>
      ), true)}
      {row(72, (
        <g>
          <rect x="25" y="62" width="11" height="19" rx="2.4" fill={PAL.slate} />
          <rect x="27" y="65" width="7" height="12" rx="1" fill={PAL.ice} />
        </g>
      ), false)}
      {row(94, (
        <g>
          <circle cx="30" cy="94" r="8" fill={PAL.sky} />
          <circle cx="30" cy="94" r="5.6" fill={PAL.white} />
          <path d="M30 94V90M30 94H33" stroke={PAL.ink} strokeWidth="1.8" strokeLinecap="round" />
        </g>
      ), true)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
