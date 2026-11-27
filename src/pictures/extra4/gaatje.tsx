import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

/** A big molar: a crown with two cusps on top and two roots, seen from the front. */
const TOOTH =
  'M26 36Q26 14 43 15Q52 16 60 22Q68 16 77 15Q94 14 94 36Q94 54 87 66L81 98Q79 105 72 102L66 80Q60 75 54 80L48 102Q41 105 39 98L33 66Q26 54 26 36Z';

export default {
  // "het gaatje": the cavity (a small hole in a tooth) — one big clean molar with a small dark hole in
  // the top, between its two cusps (a dark hole, no patch: unlike "de vulling"). Friendly, no pain marks.
  'w.gaatje': () => (
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* A grey depth edge so the white tooth shows on a white card */}
      <path d={TOOTH} fill={PAL.mist} transform="translate(2.5 3)" />
      <Shade color={PAL.paperShade} opacity={1} at={[100, 56, 20, 56]}>
        <path d={TOOTH} fill={PAL.paper} />
      </Shade>
      {/* The hole: dark, with a darker inside and a light lip on its lower edge */}
      <path d="M53 26Q54 20 61 20Q69 20 70 27Q70 35 61.5 35Q53 35 53 26Z" fill={PAL.brown} />
      <path d="M56 26Q57 22.5 61.5 22.5Q66.5 22.5 67 27Q66 31 61.5 31Q56.5 31 56 26Z" fill={PAL.ink} />
      <Shine d="M34 44Q33 28 42 22" width={4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
