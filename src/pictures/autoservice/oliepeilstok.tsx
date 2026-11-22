import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The dipstick lies along a line falling to the bottom right: from under the handle to the tip. */
const A: [number, number] = [32, 30];
const B: [number, number] = [100, 90];
const LEN = Math.hypot(B[0] - A[0], B[1] - A[1]);
const UX = (B[0] - A[0]) / LEN;
const UY = (B[1] - A[1]) / LEN;
/** A point t along the stick, s across it (to the lower left). */
const at = (t: number, s = 0): string => `${r1(A[0] + UX * t - UY * s)} ${r1(A[1] + UY * t + UX * s)}`;
/** The min and max marks on the flat tip, and the oil film between them. */
const MIN = LEN - 7;
const MAX = LEN - 30;

export default {
  // "de oliepeilstok": the dipstick — a long thin steel dipstick lying slanted, a yellow ring handle with a
  // dark stopper at the top left; the flat tip at the bottom right has two dark min-max notches with a
  // golden oil film between them, and a drop of oil falls from it.
  'w.oliepeilstok': () => (
    <g strokeLinecap="round">
      <Ground cx={66} cy={105} rx={40} ry={3.6} />
      {/* The thin rod, then the wider flat tip */}
      <path d={`M${at(4)}L${at(LEN - 34)}`} stroke={PAL.steel} strokeWidth="5" />
      <path d={`M${at(LEN - 36)}L${at(LEN)}`} stroke={PAL.mist} strokeWidth="10" />
      <path d={`M${at(LEN - 36, 2.6)}L${at(LEN, 2.6)}`} stroke={PAL.steel} strokeWidth="3.6" />
      {/* The golden oil film between the marks, and the two marks */}
      <path d={`M${at(MAX)}L${at(MIN + 2)}`} stroke={PAL.yellowShade} strokeWidth="11" />
      <path d={`M${at(MAX - 0.5, -6)}L${at(MAX - 0.5, 6)}`} stroke={PAL.slateDark} strokeWidth="3" />
      <path d={`M${at(MIN, -6)}L${at(MIN, 6)}`} stroke={PAL.slateDark} strokeWidth="3" />
      <Shine d={`M${at(MAX + 4, -3)}L${at(MAX + 12, -3)}`} color={PAL.yellowShine} width={2} opacity={0.9} />
      {/* The drop falling from the tip */}
      <path d="M103 91Q108 97 108 99.5A5 5 0 0 1 98 99.5Q98 97 103 91Z" fill={PAL.yellowShade} />
      {/* The dark rubber stopper and the yellow ring handle */}
      <path d={`M${at(3)}L${at(13)}`} stroke={PAL.slateDark} strokeWidth="11" />
      <circle cx="24" cy="23" r="12" fill="none" stroke={PAL.yellow} strokeWidth="8" />
      <path d="M34.4 17A12 12 0 0 1 30 33.4" fill="none" stroke={PAL.yellowShade} strokeWidth="8" strokeLinecap="butt" />
      <Shine d="M15 19Q17 14 22 12.5" color={PAL.yellowShine} width={2.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
