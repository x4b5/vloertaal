import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

/** A small dark fly stuck on the card at (x, y), turned by `a` degrees. */
const fly = (x: number, y: number, a: number) => (
  <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${a})`}>
    <ellipse cx="-3.2" cy="-2.6" rx="3.6" ry="2.2" fill={PAL.white} opacity=".75" transform="rotate(-30 -3.2 -2.6)" />
    <ellipse cx="3.2" cy="-2.6" rx="3.6" ry="2.2" fill={PAL.white} opacity=".75" transform="rotate(30 3.2 -2.6)" />
    <ellipse cx="0" cy="0.6" rx="2.4" ry="4.6" fill={PAL.slateDark} />
    <circle cx="0" cy="-4.4" r="2" fill={PAL.slateDark} />
  </g>
);

export default {
  // "de vangplaat": the sticky trap — a bright yellow sticky card with a faint grid, hanging from a
  // hook and a string between two plants, with small dark flies stuck on it.
  'w.vangplaat': () => (
    <g strokeLinejoin="round">
      {/* The plants left and right, behind the card */}
      <path d="M16 108V40M104 108V34" stroke={PAL.greenShade} strokeWidth="3" strokeLinecap="round" />
      <path d="M16 70C6 66 6 56 10 52C16 56 18 62 16 70ZM16 50C24 44 28 38 26 32C18 34 14 42 16 50ZM16 92C26 90 30 82 28 76C20 78 16 84 16 92Z" fill={PAL.green} />
      <path d="M104 64C114 60 114 50 110 46C104 50 102 56 104 64ZM104 44C96 38 92 32 94 26C102 28 106 36 104 44ZM104 90C94 88 90 80 92 74C100 76 104 82 104 90Z" fill={PAL.green} />
      {/* The hook and the string */}
      <path d="M60 10V16" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
      <path d="M60 16C66 16 66 23 60 23" fill="none" stroke={PAL.steel} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M60 23L48 33M60 23L72 33" stroke={PAL.line} strokeWidth="1.8" strokeLinecap="round" />
      {/* The card: its depth edge, then the yellow face */}
      <rect x="31" y="34" width="62" height="70" rx="4" fill={PAL.yellowShade} />
      <Shade color={PAL.yellowShade} opacity={0.55} at={[92, 70, 10, 40]}>
        <rect x="28" y="31" width="62" height="70" rx="4" fill={PAL.yellow} />
      </Shade>
      {/* The two holes for the string */}
      <circle cx="48" cy="35" r="2" fill={PAL.yellowShade} />
      <circle cx="70" cy="35" r="2" fill={PAL.yellowShade} />
      {/* The faint printed grid */}
      <path d="M43 40V96M59 40V96M75 40V96M33 54H85M33 70H85M33 86H85" stroke={PAL.yellowShade} strokeWidth="1.2" opacity=".55" />
      {/* The stuck flies */}
      {fly(40, 48, -20)}
      <Move kind="from" dx={34} dy={-24}>{fly(68, 50, 25)}</Move>
      {fly(52, 64, 10)}
      <Move kind="from" dx={30} dy={14}>{fly(78, 74, -35)}</Move>
      <Move kind="from" dx={-30} dy={10}>{fly(42, 82, 40)}</Move>
      {fly(64, 90, -10)}
      <Shine d="M33 50Q33 39 40 37" color={PAL.yellowShine} width={3.4} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
