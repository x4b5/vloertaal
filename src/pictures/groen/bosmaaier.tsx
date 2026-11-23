import type { JSX } from 'react';
import { Move, PAL, Shade } from '../kit';

/** One blade of grass rooted at (x, y): h tall, its tip leaning `lean` units sideways, w wide at the root. */
const blade = (x: number, y: number, h: number, lean: number, w = 7) =>
  `M${x - w / 2} ${y}Q${x - w / 4 + lean * 0.2} ${y - h * 0.6} ${x + lean} ${y - h}Q${x + w / 4 + lean * 0.45} ${y - h * 0.55} ${x + w / 2} ${y}Z`;

export default {
  // "de bosmaaier": the brush cutter — a long straight shaft from an orange motor (top right) down to a
  // round cutting disc under an orange guard (bottom left), a wide handlebar across the middle; tufts of
  // tall grass round the disc.
  // On the intro card the whole tool sweeps across the grass from the left (three rounds: the tool at work).
  'w.bosmaaier': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The grass at the disc */}
      <path d="M8 100H64" stroke={PAL.leafShade} strokeWidth="6" />
      {[[12, 24, -3], [20, 30, 3], [46, 28, 4], [54, 22, -3]].map(([x, h, l]) => (
        <path key={x} d={blade(x, 101, h, l)} fill={PAL.green} />
      ))}
      <Move kind="turn" turn={-28} at={[96, 26]}>
        {/* The shaft */}
        <path d="M92 30L32 88" stroke={PAL.steel} strokeWidth="7" />
        <path d="M90 29L56 62" stroke={PAL.mist} strokeWidth="2" opacity=".8" />
        {/* The handlebar across the shaft, with its two black grips */}
        <path d="M46 44Q64 66 84 54" fill="none" stroke={PAL.slate} strokeWidth="4.5" />
        <path d="M42 38L48 46M82 55L90 50" stroke={PAL.slateDark} strokeWidth="8" />
        {/* The guard over the disc, the gear head and the disc */}
        <ellipse cx="30" cy="94" rx="18" ry="6" fill={PAL.slate} />
        <ellipse cx="30" cy="93" rx="16" ry="4.5" fill={PAL.mist} />
        <path d="M28 93L46 89M28 93L12 97M28 93L20 88M28 93L38 98" stroke={PAL.steel} strokeWidth="2.4" />
        <path d="M14 90Q14 76 32 76Q44 76 48 86Z" fill={PAL.orange} />
        <path d="M38 77Q46 79 48 86L40 86Z" fill={PAL.orangeShade} />
        <rect x="26" y="82" width="10" height="10" rx="3" fill={PAL.slateDark} />
        {/* The motor at the top */}
        <g transform="rotate(-44 98 24)">
          <Shade color={PAL.orangeShade} opacity={1} at={[112, 26, 8, 14]}>
            <rect x="84" y="13" width="28" height="22" rx="7" fill={PAL.orange} />
          </Shade>
          <rect x="80" y="17" width="7" height="14" rx="2.5" fill={PAL.slateDark} />
          <rect x="94" y="9" width="10" height="6" rx="2" fill={PAL.slate} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
