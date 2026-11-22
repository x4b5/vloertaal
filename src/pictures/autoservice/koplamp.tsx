import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de koplamp": the headlight — the front half of a blue car, side on and facing right, with a big bright
  // headlight on its nose shining a fan of yellow light beams forward.
  'w.koplamp': () => (
    <g strokeLinejoin="round">
      <Ground cx={48} cy={104} rx={40} ry={4.5} />
      {/* The light: a pale fan and three bold beams */}
      <path d="M72 60L112 42V94L72 72Z" fill={PAL.yellowShine} opacity=".9" />
      <path d="M84 58L108 50M86 66H110M84 74L108 82" stroke={PAL.yellow} strokeWidth="4.5" strokeLinecap="round" />
      {/* The body: roof, windscreen, bonnet, nose */}
      <Shade color={PAL.blueShade} opacity={1} at={[60, 98, 70, 14]}>
        <path d="M10 34H20Q24 34 27 37L44 52L66 55Q76 57 78 63V88Q78 96 70 96H10Z" fill={PAL.blue} />
      </Shade>
      {/* The windscreen and the side window */}
      <path d="M14 40H20L33 52H14Z" fill={PAL.ice} />
      {/* The bumper and the grille */}
      <rect x="44" y="82" width="36" height="9" rx="4" fill={PAL.slate} />
      {/* The wheel in its arch */}
      <path d="M26 96A16 16 0 0 1 58 96Z" fill={PAL.slateDark} />
      <circle cx="42" cy="96" r="12" fill={PAL.slate} />
      <circle cx="42" cy="96" r="5.5" fill={PAL.mist} />
      {/* The headlight: a big lit lamp on the nose */}
      <path d="M56 60Q66 57 76 61Q81 64 79 70Q72 74 62 72Q55 70 56 60Z" fill={PAL.yellowShine} />
      <path d="M64 61Q71 60 76 63Q78 66 76 68Q70 70 65 68Z" fill={PAL.white} />
      <Shine d="M14 34H19" width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
