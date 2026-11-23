import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A dark step of the soil brown, for the side of the sod. */
const SOIL_DARK = '#4f2c17';

/** One blade of grass rooted at (x, y): h tall, its tip leaning `lean` units sideways, w wide at the root. */
const blade = (x: number, y: number, h: number, lean: number, w: number) =>
  `M${x - w / 2} ${y}Q${x - w / 4 + lean * 0.2} ${y - h * 0.6} ${x + lean} ${y - h}Q${x + w / 4 + lean * 0.45} ${y - h * 0.55} ${x + w / 2} ${y}Z`;

/** The rows of blades: back (dark), middle, front (light). [x, h, lean] */
const BACK: [number, number, number][] = [[28, 46, -6], [42, 56, 4], [56, 50, -3], [70, 58, 6], [84, 48, 2], [98, 42, 8]];
const MID: [number, number, number][] = [[22, 40, -8], [35, 50, -2], [49, 60, 3], [63, 52, -5], [77, 54, 5], [91, 44, 7]];
const FRONT: [number, number, number][] = [[18, 26, -9], [30, 34, -4], [44, 30, 3], [58, 38, -2], [72, 32, 5], [86, 28, 8]];

export default {
  // "het gras": the grass — a square of turf seen a little from above: a brown slab of soil with a
  // thick tuft of green blades on it, dark at the back and light at the front.
  'w.gras': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={104} rx={46} ry={4} />
      {/* The sod: front and right side of the soil, then its green top */}
      <path d="M96 84L108 75V91L96 100Z" fill={SOIL_DARK} />
      <rect x="14" y="84" width="82" height="16" rx="2" fill={PAL.brown} />
      <path d="M14 84L26 75H108L96 84Z" fill={PAL.leafShade} />
      <path d="M20 92H30M46 94H58M74 91H86" stroke={SOIL_DARK} strokeWidth="2" strokeLinecap="round" />
      {BACK.map(([x, h, l]) => <path key={`b${x}`} d={blade(x, 80, h, l, 10)} fill={PAL.greenShade} />)}
      {MID.map(([x, h, l]) => <path key={`m${x}`} d={blade(x, 82, h, l, 10)} fill={PAL.green} />)}
      {FRONT.map(([x, h, l]) => <path key={`f${x}`} d={blade(x, 86, h, l, 10)} fill={PAL.leaf} />)}
      <Shine d="M47 30Q48 44 47 58" color={PAL.lime} width={2.6} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
