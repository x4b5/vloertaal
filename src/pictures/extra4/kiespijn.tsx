import type { JSX } from 'react';
import { Bust } from '../bust';
import { Hand, PAL, SKIN, Shade } from '../kit';

/** A small molar (as in "het gaatje"), drawn at a third of its size. */
const TOOTH =
  'M26 36Q26 14 43 15Q52 16 60 22Q68 16 77 15Q94 14 94 36Q94 54 87 66L81 98Q79 105 72 102L66 80Q60 75 54 80L48 102Q41 105 39 98L33 66Q26 54 26 36Z';

export default {
  // "de kiespijn": the toothache — Henk, eyes squeezed shut, leans his swollen, reddened cheek into his
  // hand; short red throb marks by his jaw and a small tooth beside them say where it hurts. Calm, no
  // injury, nothing sore drawn.
  'w.kiespijn': () => (
    <g strokeLinecap="round" strokeLinejoin="round">
      <Bust who="henk" x={48} y={132} scale={0.84} emotion="pain" tilt={6} bold />
      {/* The swollen cheek: a round bulge over the face's edge, a little red */}
      <ellipse cx="64" cy="81" rx="9.5" ry="10.5" fill={SKIN.henk[0]} />
      <ellipse cx="63" cy="82" rx="6.4" ry="7" fill={PAL.blush} opacity=".55" />
      {/* His hand laid against it */}
      <Hand pose="open" x={80} y={118} rotate={-12} scale={0.7} skin={SKIN.henk} sleeve={['#2d5a92', PAL.navyShade]} />
      {/* Throb marks by the jaw */}
      <path d="M90 70L99 66M92 80L102 80M90 90L99 94" stroke={PAL.red} strokeWidth="3.6" />
      {/* A small tooth: where it hurts */}
      <g transform="translate(80 12) scale(0.3)">
        <path d={TOOTH} fill={PAL.mist} transform="translate(4 5)" />
        <Shade color={PAL.paperShade} opacity={1} at={[100, 56, 20, 56]}>
          <path d={TOOTH} fill={PAL.paper} />
        </Shade>
      </g>
      <path d="M78 18L74 15M77 28L72 29M108 18L112 15M109 28L114 29" stroke={PAL.red} strokeWidth="3" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
