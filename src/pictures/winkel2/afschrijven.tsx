import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shine } from '../kit';

export default {
  // "afschrijven": to write off (to register a product as lost) — a clipboard list of products (a small
  // product block and grey lines per row, the first two with a green tick); in the last row a broken red
  // jar, and a red line struck through that row by the pen in a hand. On the intro card the red line is
  // drawn through the row: once (one product written off).
  'w.afschrijven': () => (
    <g strokeLinejoin="round">
      {/* The clipboard */}
      <rect x="18" y="16" width="70" height="92" rx="6" fill={PAL.cardDark} />
      <rect x="16" y="13" width="70" height="92" rx="6" fill={PAL.wood} />
      <rect x="22" y="22" width="58" height="78" rx="2" fill={PAL.paperShade} />
      <rect x="22" y="20" width="58" height="78" rx="2" fill={PAL.white} />
      <rect x="38" y="8" width="26" height="12" rx="3" fill={PAL.steel} />
      <rect x="44" y="10" width="14" height="4" rx="2" fill={PAL.slate} />
      {/* Rows: product, lines, tick */}
      {[32, 52].map((y) => (
        <g key={y}>
          <rect x="27" y={y - 5} width="10" height="12" rx="1.6" fill={PAL.blue} />
          <path d={`M42 ${y}H62M42 ${y + 5}H56`} stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
          <path d={`M66 ${y + 1}L69 ${y + 4}L75 ${y - 3}`} fill="none" stroke={PAL.ok} strokeWidth="2.6" strokeLinecap="round" />
        </g>
      ))}
      {/* The written-off row: a cracked jar */}
      <rect x="27" y="70" width="11" height="14" rx="2" fill={PAL.red} />
      <path d="M31 70L34 76L31 80" fill="none" stroke={PAL.white} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M42 75H62M42 80H56" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
      <Move kind="grow" grow={0.1} once>
        <path d="M24 77H78" stroke={PAL.red} strokeWidth="4" strokeLinecap="round" />
      </Move>
      <Shine d="M20 24V44" width={2.6} opacity={0.4} />
      {/* The hand with the pen at the end of the line */}
      <g>
        <path d="M78 77L92 60" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
        <path d="M78 77L81 73" stroke={PAL.ink} strokeWidth="3" strokeLinecap="round" />
        <Hand pose="fist" x={102} y={84} rotate={-30} scale={0.6} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
