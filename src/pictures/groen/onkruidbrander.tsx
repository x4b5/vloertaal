import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de onkruidbrander": the weed burner (it kills weeds with heat) — a long steel wand with a grip and
  // a lever at the top, a bell-shaped burner at the bottom blowing an orange flame onto a weed, and a
  // black hose from the grip to a red gas bottle.
  // Three rounds on the intro card: the wand sweeps the flame over the ground to the weed (a tool at work).
  'w.onkruidbrander': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={50} ry={4.5} />
      {/* The gas bottle */}
      <Shade color={PAL.redShade} opacity={1} at={[104, 86, 8, 24]}>
        <path d="M84 104V76Q84 66 96 66Q108 66 108 76V104Z" fill={PAL.red} />
      </Shade>
      <rect x="92" y="58" width="8" height="9" rx="2" fill={PAL.slate} />
      <Shine d="M88 78V96" width={3} opacity={0.5} />
      {/* The hose from the bottle to the grip */}
      <path d="M96 58Q98 40 84 30" fill="none" stroke={PAL.slateDark} strokeWidth="3.4" strokeLinecap="round" />
      {/* A weed on the ground */}
      <path d="M22 100V90M22 96Q14 92 14 86M22 96Q30 92 30 86" fill="none" stroke={PAL.leafShade} strokeWidth="3" strokeLinecap="round" />
      <Move kind="turn" turn={25} at={[82, 30]}>
        {/* The flame out of the bell, down onto the weed */}
        <path d="M30 80Q14 88 20 102Q26 96 34 100Q36 92 44 90Q38 84 30 80Z" fill={PAL.orange} />
        <path d="M32 84Q24 90 26 98Q30 94 34 95Q36 90 40 89Q36 86 32 84Z" fill={PAL.yellow} />
        {/* The wand */}
        <path d="M82 30L42 78" stroke={PAL.steel} strokeWidth="4.4" strokeLinecap="round" />
        {/* The bell of the burner */}
        <path d="M44 70L54 78L44 92L30 82Z" fill={PAL.slate} />
        <path d="M44 70L54 78L48 86L40 78Z" fill={PAL.slateDark} />
        {/* The grip and the lever */}
        <rect x="74" y="16" width="12" height="24" rx="4" fill={PAL.slateDark} transform="rotate(40 80 28)" />
        <rect x="88" y="24" width="4" height="13" rx="2" fill={PAL.yellow} transform="rotate(40 90 30)" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
