import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** The bars of the code: [x, width] in the label's own units. */
const BARS: [number, number][] = [
  [0, 3], [5, 1.6], [8.5, 1.6], [12, 4], [18, 1.6], [21.5, 3], [26.5, 1.6], [30, 1.6], [33.5, 4],
  [39.5, 1.6], [43, 3], [48, 1.6], [51.5, 4], [57.5, 1.6], [61, 3],
];

export default {
  // "de streepjescode": the barcode — a big white label with thick and thin black bars and a short row
  // of grey number lines under them, stuck on the front of a blue product pack. No scanner and no red
  // laser line, so it is not "de scanner"; the bars are the subject. A thing: it stays still.
  'w.streepjescode': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={40} ry={4} />
      {/* The pack: top, right side, front */}
      <path d="M22 26L34 16H100L88 26Z" fill={PAL.blueLight} />
      <path d="M88 26L100 16V94L88 104Z" fill={PAL.blueShade} />
      <rect x="22" y="26" width="66" height="78" rx="2" fill={PAL.blue} />
      <Shine d="M27 32V54" width={3} opacity={0.5} />
      {/* The label with the code */}
      <Shade color={PAL.paperShade} opacity={1} at={[98, 70, 10, 30]}>
        <rect x="16" y="44" width="76" height="52" rx="4" fill={PAL.white} />
      </Shade>
      <g transform="translate(22 50)">
        {BARS.map(([x, w]) => (
          <rect key={x} x={x} y="0" width={w} height="32" fill={PAL.ink} />
        ))}
      </g>
      <path d="M24 90H40M46 90H62M68 90H82" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
