import type { JSX, ReactNode } from 'react';
import { Cross, PAL, Shade, Tick } from '../kit';

/** One rule on the board: an icon in a round frame, two text lines, and a tick or a cross. */
const row = (y: number, icon: ReactNode, ok: boolean) => (
  <g key={y}>
    <circle cx="34" cy={y} r="9.6" fill={PAL.white} />
    {icon}
    <path d={`M49 ${y - 3}H72M49 ${y + 4}H66`} stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
    {ok ? <Tick x={88} y={y} r={7.6} /> : <Cross x={88} y={y} r={7.6} />}
  </g>
);

export default {
  // "de huisregels": the house rules (the rules of the house where you live) — a house-shaped board with
  // a clay roof and three rules: quiet at night (the moon: yes), take out the rubbish (the bin: yes),
  // no smoking inside (the cigarette: no).
  'w.huisregels': () => (
    <g strokeLinejoin="round">
      {/* The board in the shape of a house */}
      <rect x="20" y="44" width="80" height="62" rx="4" fill={PAL.paperShade} transform="translate(0 3)" />
      <Shade color={PAL.paperShade} opacity={1} at={[104, 76, 10, 40]}>
        <rect x="20" y="40" width="80" height="66" rx="4" fill={PAL.paper} />
      </Shade>
      <path d="M12 44L60 12L108 44Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="6" />
      <path d="M60 12L108 44H60Z" fill={PAL.clayShade} stroke={PAL.clayShade} strokeWidth="6" />
      <rect x="53" y="26" width="14" height="12" rx="2" fill={PAL.ice} />
      {row(54, (
        <path d="M37 47A8 8 0 1 0 41 59A6.4 6.4 0 1 1 37 47Z" fill={PAL.navy} />
      ), true)}
      {row(74, (
        <g>
          <rect x="28" y="70" width="12" height="11" rx="2" fill={PAL.green} />
          <rect x="27" y="67" width="14" height="3.6" rx="1.6" fill={PAL.greenShade} />
        </g>
      ), true)}
      {row(94, (
        <g>
          <rect x="26" y="92" width="16" height="4.4" rx="1.4" fill={PAL.white} stroke={PAL.line} strokeWidth="1" />
          <rect x="38" y="92" width="4" height="4.4" rx="1" fill={PAL.orange} />
          <path d="M40 89Q42 86 40 84" fill="none" stroke={PAL.line} strokeWidth="1.4" strokeLinecap="round" />
        </g>
      ), false)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
