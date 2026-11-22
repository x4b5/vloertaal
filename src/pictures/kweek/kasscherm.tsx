import type { JSX } from 'react';
import { Move, PAL } from '../kit';

/** The glass of the roof. */
const GLASS = PAL.ice;

/** The pleats of the screen, folded up at one side. */
const PLEATS = [73, 79, 85];

export default {
  // "het kasscherm": the greenhouse screen — under a two-peaked glass greenhouse roof a white cloth
  // screen is drawn half across (the rest folded up at the side); the sun's rays stop on the screen
  // and only reach the floor where it is open.
  'w.kasscherm': () => (
    <g strokeLinejoin="round">
      {/* The sun and its rays: stopped by the screen on the left, through to the floor on the right */}
      <circle cx="20" cy="18" r="10" fill={PAL.yellow} />
      <path d="M32 26L40 56M48 26L52 56M88 30L94 98M100 30L104 98" stroke={PAL.yellow} strokeWidth="3.4" strokeLinecap="round" opacity=".9" />
      {/* The glass roof: two peaks */}
      <path d="M12 52L36 30L60 52L84 30L108 52Z" fill={GLASS} opacity=".75" />
      <path d="M12 52L36 30L60 52L84 30L108 52" fill="none" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
      {/* The posts */}
      <path d="M14 52V102M60 52V102M106 52V102" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
      <path d="M10 102H110" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      {/* The screen: a white cloth drawn from the left, its shaded underside. It runs out from the
          folded pack to the left post (Move: a grow, flipped about x 41 so it grows from its right edge) */}
      <g transform="matrix(-1 0 0 1 82 0)">
      <Move kind="grow" grow={0.06}>
      <g transform="matrix(-1 0 0 1 82 0)">
      <path d="M14 57H70L68 68H12Z" fill={PAL.paperShade} />
      <path d="M14 57H70L69 63H13Z" fill={PAL.white} />
      </g>
      </Move>
      </g>
      {/* The folded-up part on the right */}
      {PLEATS.map((x) => (
        <rect key={x} x={x - 3} y="53" width="6" height="18" rx="2.8" fill={PAL.paperShade} />
      ))}
      {PLEATS.map((x) => (
        <rect key={`l${x}`} x={x - 3} y="53" width="3.4" height="18" rx="1.7" fill={PAL.white} />
      ))}
      {/* The shade under the screen */}
      <path d="M16 102L16 70H66L66 102Z" fill={PAL.slate} opacity=".12" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
