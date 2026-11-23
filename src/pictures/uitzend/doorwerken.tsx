import type { JSX } from 'react';
import { Arrow, Box, Move, PAL, Shade } from '../kit';
import { Bust } from '../bust';

export default {
  // "doorwerken": to keep working (at the same place) — Bram at work with a box, in front of the same
  // factory; above, a green arrow goes on past the dashed line where his time could have ended. On
  // the intro card the green arrow grows on past the line, once.
  'w.doorwerken': () => (
    <g strokeLinejoin="round">
      {/* The factory behind him */}
      <rect x="96" y="40" width="7" height="18" rx="1.6" fill={PAL.slate} />
      <Shade color={PAL.blueShade} opacity={1} at={[112, 86, 8, 40]}>
        <path d="M58 106V62L74 52V62L90 52V62L106 52V106Z" fill={PAL.blue} stroke={PAL.blue} strokeWidth="2" />
      </Shade>
      <rect x="84" y="80" width="16" height="26" rx="1.6" fill={PAL.slateDark} />
      <rect x="64" y="70" width="10" height="8" rx="1.6" fill={PAL.ice} />
      {/* Bram with a box */}
      <Bust who="bram" x={44} y={120} scale={0.6} expr="pleased" bold />
      <Box x={22} y={88} w={30} h={22} depth={8} />
      {/* The dashed end line and the arrow going on past it */}
      <path d="M62 10V40" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" strokeDasharray="5 6" />
      <Move kind="grow" grow={0.4} once>
        <Arrow from={[14, 25]} to={[108, 25]} color={PAL.ok} width={9} head={14} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
