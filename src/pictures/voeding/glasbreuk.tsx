import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A glass shard: a light-blue triangle with a darker sky edge on its lower side. */
const shard = (p: string, q: string) => (
  <g>
    <path d={q} fill={PAL.sky} />
    <path d={p} fill={PAL.ice} />
  </g>
);

export default {
  // "de glasbreuk": the glass breakage (glass that broke) — a jar of red jam broken off with a jagged
  // top, ice-blue glass with its dark sky side on the right, its yellow lid fallen beside it and sharp
  // shards lying around on the floor; a red exclamation mark above warns.
  'w.glasbreuk': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={48} ry={4} />
      {/* The broken jar: lit glass on the left, sky shade on the right, a jagged top */}
      <path d="M34 62L41 48L48 60L55 42L63 56L70 46L80 60V96Q80 104 72 104H42Q34 104 34 96Z" fill={PAL.ice} />
      {/* The jam inside */}
      <path d="M38 74H76V96Q76 100 72 100H42Q38 100 38 96Z" fill={PAL.red} />
      <path d="M66 74H76V96Q76 100 72 100H66Z" fill={PAL.redShade} />
      <path d="M68 52L70 46L80 60V96Q80 104 72 104H68Q72 100 72 92V60Z" fill={PAL.sky} />
      <path d="M38 64L41 58L47 66L54 56L60 64" fill="none" stroke={PAL.white} strokeWidth="2" strokeLinecap="round" opacity=".8" />
      <Shine d="M41 78V94" width={3.5} opacity={0.8} />
      {/* The lid, fallen off */}
      <path d="M86 104L88 92H106L108 104Z" fill={PAL.yellow} />
      <path d="M100 92H106L108 104H102Z" fill={PAL.yellowShade} />
      {/* The shards on the floor */}
      {shard('M12 104L22 90L26 103Z', 'M22 90L26 103L28 103Z')}
      {shard('M22 86L30 78L29 89Z', 'M30 78L29 89L32 88Z')}
      {shard('M86 86L94 76L98 84Z', 'M94 76L98 84L100 83Z')}
      {/* A warning */}
      <path d="M57 10H65L63 30H59Z" fill={PAL.red} />
      <circle cx="61" cy="36" r="3.6" fill={PAL.red} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
