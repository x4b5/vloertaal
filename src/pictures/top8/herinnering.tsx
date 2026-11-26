import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

/** Grey text lines on paper, from (x, y) down, `gap` apart, each as long as given. */
const lines = (x: number, y: number, lens: number[], gap = 8) =>
  lens.map((l, i) => `M${x} ${y + i * gap}H${x + l}`).join('');

export default {
  // "de herinnering": the reminder (a letter: you have not paid yet) — an open letter with a big
  // yellow bell on its top corner (a friendly "don't forget"), and under it, sticking out on the left,
  // the bill it is about: a slip with a zigzag bottom and its total bar. No text: grey lines only.
  'w.herinnering': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The bill under the letter */}
      <g transform="rotate(-10 40 64)">
        <path d="M14 26H52V96L47.2 92L42.4 96L37.6 92L32.8 96L28 92L23.2 96L18.4 92L14 96Z" fill={PAL.paperShade} transform="translate(2 4)" />
        <path d="M14 26H52V96L47.2 92L42.4 96L37.6 92L32.8 96L28 92L23.2 96L18.4 92L14 96Z" fill={PAL.white} />
        <path d={lines(19, 36, [20, 14, 22, 16, 18])} stroke={PAL.line} strokeWidth="2.4" />
        <rect x="19" y="78" width="26" height="6" rx="2" fill={PAL.slate} />
      </g>
      {/* The letter */}
      <g transform="rotate(5 66 62)">
        <rect x="38" y="22" width="60" height="80" rx="4" fill={PAL.paperShade} transform="translate(3 4)" />
        <rect x="38" y="22" width="60" height="80" rx="4" fill={PAL.white} />
        <path d={lines(46, 52, [42, 38, 42, 30, 40, 24])} stroke={PAL.line} strokeWidth="2.6" />
        <path d="M46 38H66" stroke={PAL.slate} strokeWidth="3.4" />
      </g>
      {/* The bell on the letter's corner */}
      <g transform="translate(88 34) rotate(14) scale(1.35)">
        <circle cx="0" cy="-15" r="3.6" fill={PAL.yellowShade} />
        <circle cx="0" cy="13" r="5" fill={PAL.yellowShade} />
        <Shade color={PAL.yellowShade} opacity={1} at={[16, 0, 8, 20]}>
          <path d="M-15 9Q-12 5 -12 -1Q-12 -13 0 -14Q12 -13 12 -1Q12 5 15 9Q16 11 13 11H-13Q-16 11 -15 9Z" fill={PAL.yellow} />
        </Shade>
        <Shine d="M-7 -3Q-7 -9 -2 -10" color={PAL.yellowShine} width={3} opacity={0.9} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
