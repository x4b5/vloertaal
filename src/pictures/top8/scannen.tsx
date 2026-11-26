import type { JSX } from 'react';
import { Box, Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "scannen": to scan — a hand holds a pistol-grip scanner up to a cardboard box; its red beam lies as
  // a line across the barcode on the box's label, and a small green tick next to the label says it
  // worked. On the intro card the scanner comes up to the box, then the beam and the tick appear (two
  // rounds: one item after the other).
  'w.scannen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The box with its barcode label */}
      <Box x={50} y={44} w={54} h={50} depth={10} tape={false} />
      <rect x="56" y="54" width="42" height="26" rx="2.4" fill={PAL.white} />
      <path d="M61 59V75M64.5 59V75M69 59V75M72 59V75M77 59V75M81 59V75M84 59V75M89 59V75M93 59V75" stroke={PAL.ink} strokeWidth="2.2" />
      <Move kind="show">
        <path d="M34 82L56 64V72Z" fill={PAL.red} opacity=".25" />
        <path d="M56 67H98" stroke={PAL.red} strokeWidth="2.8" />
        <circle cx="100" cy="40" r="9" fill={PAL.okShade} />
        <circle cx="100" cy="38.6" r="9" fill={PAL.ok} />
        <path d="M95.6 38.6L98.8 41.8L104.6 35.6" fill="none" stroke={PAL.white} strokeWidth="2.8" />
      </Move>
      {/* The hand with the scanner */}
      <Move kind="from" dx={-20} dy={18}>
        <g transform="rotate(-22 34 82)">
          <rect x="22" y="84" width="11" height="22" rx="4" fill={PAL.slateDark} />
          <Shade color={PAL.yellowShade} opacity={1} at={[40, 90, 14, 8]}>
            <rect x="14" y="72" width="34" height="14" rx="5" fill={PAL.yellow} />
          </Shade>
          <rect x="44" y="72" width="7" height="14" rx="2.4" fill={PAL.slate} />
          <rect x="49" y="75" width="3" height="8" rx="1.2" fill={PAL.red} />
          <Shine d="M19 76H34" width={2.4} opacity={0.7} color={PAL.yellowShine} />
        </g>
        <Hand pose="fist" x={26} y={112} rotate={-22} scale={0.5} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
