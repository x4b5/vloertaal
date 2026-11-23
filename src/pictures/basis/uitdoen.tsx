import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "uitdoen": to switch off (the light, a machine) — a finger presses the light switch, and the
  // ceiling lamp above is off: a grey bulb. On the intro card the finger comes to the switch, then
  // the lit yellow bulb goes grey (one fade, once).
  'w.uitdoen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The ceiling lamp: cord, shade, bulb */}
      <path d="M34 4V20" stroke={PAL.slate} strokeWidth="3" />
      <circle cx="34" cy="44" r="12" fill={PAL.yellow} />
      <Move kind="show" once>
        <circle cx="34" cy="44" r="12" fill={PAL.mist} />
        <path d="M30 40Q32 37 35 37" stroke={PAL.white} strokeWidth="2.4" fill="none" opacity=".8" />
      </Move>
      <Shade color={PAL.slateDark} opacity={1} at={[56, 30, 10, 20]}>
        <path d="M18 38Q18 20 34 19Q50 20 50 38Z" fill={PAL.slate} />
      </Shade>
      {/* The switch plate on the wall */}
      <rect x="56" y="30" width="48" height="52" rx="7" fill={PAL.paperShade} transform="translate(0 4)" />
      <Shade color={PAL.paperShade} opacity={1} at={[108, 56, 8, 30]}>
        <rect x="56" y="30" width="48" height="52" rx="7" fill={PAL.white} />
      </Shade>
      <rect x="68" y="42" width="24" height="28" rx="3" fill={PAL.mist} />
      <path d="M69 57H91V68Q91 69 90 69H70Q69 69 69 68Z" fill={PAL.line} />
      <Shine d="M61 36H74" width={2.6} opacity={0.6} />
      {/* The finger pressing the switch down */}
      <Move kind="from" dx={-22} dy={22}>
        <Hand pose="point" x={90} y={110} rotate={-8} scale={0.74} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
