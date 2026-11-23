import type { JSX } from 'react';
import { Move, PAL, Shade } from '../kit';

/** One blade of grass rooted at (x, y): h tall, its tip leaning `lean` units sideways, w wide at the root. */
const blade = (x: number, y: number, h: number, lean: number, w = 7) =>
  `M${x - w / 2} ${y}Q${x - w / 4 + lean * 0.2} ${y - h * 0.6} ${x + lean} ${y - h}Q${x + w / 4 + lean * 0.45} ${y - h * 0.55} ${x + w / 2} ${y}Z`;

/** The tall grass still to be mown (right) and the short stubble left behind (left). [x, h, lean] */
const TALL: [number, number, number][] = [[80, 44, -4], [87, 52, 3], [94, 46, -2], [101, 54, 4], [108, 44, 2], [84, 34, 5], [98, 36, -5], [106, 30, 3]];
const SHORT = [14, 21, 28, 35, 42, 49, 56, 63, 70];

export default {
  // "maaien": to mow — a lawn: tall grass on the right, a short mown strip on the left, and a small
  // red mower in between with the cut grass flying out behind it.
  // On the intro card the mower drives through the grass to the tall part (three rounds: work you
  // do again and again).
  'w.maaien': () => (
    <g strokeLinejoin="round">
      {/* The lawn: a green band, darker where the tall grass stands */}
      <rect x="8" y="94" width="104" height="12" rx="4" fill={PAL.leafShade} />
      <rect x="8" y="94" width="104" height="5" rx="2.5" fill={PAL.leaf} />
      {SHORT.map((x) => <path key={x} d={blade(x, 96, 8, 1, 6)} fill={PAL.leaf} />)}
      {TALL.slice(0, 5).map(([x, h, l]) => <path key={x} d={blade(x, 98, h, l)} fill={PAL.green} />)}
      {TALL.slice(5).map(([x, h, l]) => <path key={x} d={blade(x, 99, h, l)} fill={PAL.leaf} />)}
      <Move kind="from" dx={-30}>
        {/* The cut grass flying out at the back */}
        <g fill={PAL.leaf}>
          <rect x="16" y="66" width="8" height="4" rx="2" transform="rotate(-30 20 68)" />
          <rect x="10" y="78" width="8" height="4" rx="2" transform="rotate(20 14 80)" />
          <rect x="22" y="56" width="7" height="4" rx="2" transform="rotate(50 25 58)" />
        </g>
        {/* The handle and its grip */}
        <path d="M38 76L26 36" stroke={PAL.slate} strokeWidth="4.5" strokeLinecap="round" />
        <path d="M28 43L23 28" stroke={PAL.slateDark} strokeWidth="8" strokeLinecap="round" />
        {/* The motor and the red deck */}
        <path d="M44 76V68Q44 62 50 62H62Q68 62 68 68V76Z" fill={PAL.slate} />
        <Shade color={PAL.redShade} opacity={1} at={[90, 88, 14, 20]}>
          <path d="M30 96V86Q30 76 40 76H76Q88 76 90 88V96Z" fill={PAL.red} />
        </Shade>
        <circle cx="38" cy="97" r="7.5" fill={PAL.slateDark} />
        <circle cx="38" cy="97" r="3" fill={PAL.steel} />
        <circle cx="80" cy="98" r="6.5" fill={PAL.slateDark} />
        <circle cx="80" cy="98" r="2.6" fill={PAL.steel} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
