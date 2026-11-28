import type { JSX } from 'react';
import { Move, PAL, Shade, Shine, Sparkle } from '../kit';

/** A big molar: a crown with two cusps on top and two roots, seen from the front (as "het gaatje"). */
const TOOTH =
  'M26 36Q26 14 43 15Q52 16 60 22Q68 16 77 15Q94 14 94 36Q94 54 87 66L81 98Q79 105 72 102L66 80Q60 75 54 80L48 102Q41 105 39 98L33 66Q26 54 26 36Z';

export default {
  // "de vulling": the filling (the dentist closes the hole in a tooth) — the same big molar as "het
  // gaatje", but the hole in its top is closed by a light grey patch with a shine (no hole), and a
  // sparkle. On the intro card the hole is still open, the patch comes down into it and closes it,
  // then the sparkle appears (once: the hole is filled).
  'w.vulling': () => (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d={TOOTH} fill={PAL.mist} transform="translate(2.5 3)" />
      <Shade color={PAL.paperShade} opacity={1} at={[100, 56, 20, 56]}>
        <path d={TOOTH} fill={PAL.paper} />
      </Shade>
      {/* The hole, under the patch: seen only before the patch is in */}
      <path d="M53 26Q54 20 61 20Q69 20 70 27Q70 35 61.5 35Q53 35 53 26Z" fill={PAL.brown} />
      <Shine d="M34 44Q33 28 42 22" width={4} opacity={0.9} />
      <Move kind="from" dy={-30} once>
        {/* The filling: a light grey patch, a little bigger than the hole, shaded on the right */}
        <path d="M50 26Q51 17.5 61.5 17.5Q73 17.5 73.5 27Q73 38 61.5 38Q50 38 50 26Z" fill={PAL.steel} />
        <path d="M50 25Q51 17 61.5 17Q72 17 72.5 25.5Q72 35.5 61.5 35.5Q50 35.5 50 25Z" fill={PAL.mist} />
        <path d="M55 24Q56.5 21 61 20.6" fill="none" stroke={PAL.white} strokeWidth="2.6" opacity=".9" />
      </Move>
      <Move kind="show">
        <Sparkle x={96} y={18} r={9} />
        <Sparkle x={20} y={70} r={6} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
