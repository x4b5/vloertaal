import type { JSX } from 'react';
import { Bust } from '../bust';
import { PAL, Shade, Sparkle } from '../kit';

export default {
  // "de ouderavond": the parents' evening (at school) — a mother (Amina) and the teacher (Henk) sit
  // across a school table with the child's drawing (a house and a sun) between them; a moon and a
  // star above: it is in the evening.
  'w.ouderavond': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The evening: a crescent moon and a star */}
      <path d="M66 10A13 13 0 1 0 74 34A10 10 0 1 1 66 10Z" fill={PAL.yellow} />
      <Sparkle x={84} y={14} r={5} color={PAL.yellowLight} />
      <Bust who="amina" x={28} y={104} scale={0.6} expr="pleased" bold />
      <Bust who="henk" x={92} y={104} scale={0.6} expr="pleased" talk flip bold />
      {/* The table */}
      <rect x="6" y="92" width="108" height="14" rx="3" fill={PAL.card} />
      <rect x="6" y="100" width="108" height="6" rx="2" fill={PAL.cardShade} />
      {/* The child's drawing on the table */}
      <g transform="rotate(-4 60 82) translate(0 6)">
        <rect x="40" y="66" width="40" height="30" rx="2" fill={PAL.paperShade} transform="translate(0 2.5)" />
        <Shade color={PAL.paperShade} opacity={1} at={[84, 82, 6, 20]}>
          <rect x="40" y="66" width="40" height="30" rx="2" fill={PAL.white} />
        </Shade>
        <circle cx="70" cy="74" r="4.4" fill={PAL.yellow} />
        <path d="M46 92V82L54 75L62 82V92Z" fill={PAL.red} />
        <rect x="52" y="85" width="4" height="7" fill={PAL.white} />
        <path d="M44 93H76" stroke={PAL.leaf} strokeWidth="2.4" />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
