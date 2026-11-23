import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

/** A leaf from its stalk at (x, y), `len` long, pointing `deg` degrees (0 = right), with its midrib. */
const leaf = (x: number, y: number, len: number, deg: number, c: string, rib: string) => (
  <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${deg})`}>
    <path d={`M0 0Q${len * 0.45} ${-len * 0.38} ${len} 0Q${len * 0.45} ${len * 0.38} 0 0Z`} fill={c} />
    <path d={`M2 0H${len * 0.8}`} stroke={rib} strokeWidth="1.4" />
  </g>
);

export default {
  // "de bladblazer": the leaf blower — an orange motor body with a dark handle on top, a long dark blow
  // tube down to the left, and autumn leaves flying out of its end with lines of air.
  // On the intro card the leaves are blown out of the tube (three rounds: the machine at work).
  'w.bladblazer': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <ellipse cx="60" cy="105" rx="48" ry="3.4" fill="#000" opacity=".14" />
      {/* The blow tube */}
      <path d="M72 58L40 82" stroke={PAL.slate} strokeWidth="12" />
      <path d="M44 79L36 85" stroke={PAL.slateDark} strokeWidth="13" strokeLinecap="butt" />
      {/* The orange motor body, the handle on top and the dark air intake */}
      <path d="M70 34Q72 18 88 18Q102 18 102 32" fill="none" stroke={PAL.slateDark} strokeWidth="7" />
      <Shade color={PAL.orangeShade} opacity={1} at={[110, 52, 12, 26]}>
        <rect x="62" y="30" width="46" height="38" rx="12" fill={PAL.orange} />
      </Shade>
      <circle cx="90" cy="50" r="9" fill={PAL.slate} />
      <path d="M85 50H95M90 45V55" stroke={PAL.slateDark} strokeWidth="2.4" />
      <Shine d="M68 40Q70 35 76 35" width={3.4} opacity={0.6} />
      {/* The air and the leaves blown out of the tube */}
      <path d="M26 86L14 94M30 94L20 102" stroke={PAL.ice} strokeWidth="3.4" />
      <Move kind="from" dx={22} dy={-14}>
        {leaf(16, 74, 16, -150, PAL.orange, PAL.orangeShade)}
        {leaf(22, 98, 15, 150, PAL.yellow, PAL.yellowShade)}
        {leaf(30, 62, 14, -120, PAL.clay, PAL.clayShade)}
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
