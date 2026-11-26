import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A sharp glass shard (a polygon), ice-blue with its darker side and a white glint. */
const shard = (pts: string, dark: string, glint: string) => (
  <g>
    <path d={pts} fill={PAL.ice} />
    <path d={dark} fill={PAL.sky} opacity=".55" />
    <path d={glint} stroke={PAL.white} strokeWidth="2" strokeLinecap="round" opacity=".95" />
  </g>
);

export default {
  // "de scherf": the shard (a sharp piece of broken glass or tile) — on the floor a tile broken in two
  // with a jagged break, and three sharp, pointed pieces of glass with white glints; next to them on the
  // right a red dustpan and a brush with a yellow handle, to sweep them up (never with your hands).
  'w.scherf': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={102} rx={52} ry={5} />
      {/* The broken tile: two halves lying flat, a jagged gap between them */}
      <path d="M8 98L18 78H40L36 84L41 88L35 93L38 98Z" fill={PAL.clay} />
      <path d="M8 98H38L37 102H8Z" fill={PAL.clayShade} />
      <path d="M46 98L42 93L48 88L43 84L47 78H68L60 98Z" fill={PAL.clay} />
      <path d="M46 98H60L59 102H46Z" fill={PAL.clayShade} />
      <path d="M22 82H34" stroke={PAL.clayLight} strokeWidth="2.4" />
      {/* The glass shards */}
      {shard('M14 70L30 38L36 72Z', 'M30 38L36 72L28 71Z', 'M20 64L28 46')}
      {shard('M40 72L54 44L60 70Z', 'M54 44L60 70L54 71Z', 'M45 66L52 52')}
      {/* The brush, lying above the pan */}
      <path d="M76 46L104 36" stroke={PAL.yellowShade} strokeWidth="6" />
      <path d="M64 58L92 48L96 58L68 68Z" fill={PAL.yellow} />
      <path d="M68 68L96 58L98 64L70 74Z" fill={PAL.slate} />
      <path d="M74 72L76 70M80 70L82 68M86 68L88 66M92 66L94 64" stroke={PAL.slateDark} strokeWidth="1.6" />
      {/* The dustpan: its back wall, its floor and lip, its handle */}
      <path d="M98 82L112 64" stroke={PAL.redShade} strokeWidth="6" />
      <path d="M70 82H104L106 88H68Z" fill={PAL.redShade} />
      <path d="M68 88H106L114 102H62Z" fill={PAL.red} />
      <path d="M62 102H114V104H62Z" fill={PAL.redShade} />
      <Shine d="M72 92H92" width={2.4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
