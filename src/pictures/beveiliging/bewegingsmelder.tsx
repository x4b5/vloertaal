import type { JSX } from 'react';
import { Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de bewegingsmelder": the motion sensor (it sees when something moves) — a white sensor high on the
  // wall at the top left, with its faceted round lens and a red light; blue waves fan out from it down to
  // a person who walks past at the bottom right.
  // Twice (two steps): the person walks in, then the sensor's waves and its red light come on.
  'w.bewegingsmelder': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <rect x="10" y="10" width="6" height="96" rx="2" fill={PAL.mist} />
      {/* The sensor */}
      <Shade color={PAL.steel} opacity={1} at={[44, 30, 10, 22]}>
        <path d="M16 14H36Q44 14 44 22V36Q44 44 36 44H16Z" fill={PAL.mist} />
      </Shade>
      <circle cx="34" cy="38" r="10" fill={PAL.paper} />
      <path d="M26 36L34 30L42 36L38 46H30Z" fill={PAL.paperShade} />
      <path d="M34 30V46M26 36L42 36" stroke={PAL.steel} strokeWidth="1.4" />
      <Shine d="M20 18H32" width={2.4} opacity={0.9} />
      <circle cx="22" cy="40" r="2.6" fill={PAL.slate} />
      {/* The waves and the red light: it sees the person */}
      <Move kind="show">
        <circle cx="22" cy="40" r="2.6" fill={PAL.red} />
        <path d="M46 52Q54 48 52 40M54 62Q68 54 64 38M62 72Q82 60 76 36" fill="none" stroke={PAL.sky} strokeWidth="4" />
      </Move>
      {/* The person walking past */}
      <Move kind="from" dx={-30}>
        <path d="M84 84L77 104M88 84L96 104" stroke={PAL.navy} strokeWidth="8" />
        <ellipse cx="76" cy="105" rx="5.5" ry="3" fill={PAL.slateDark} />
        <ellipse cx="99" cy="105" rx="5.5" ry="3" fill={PAL.slateDark} />
        <Shade color={PAL.purpleShade} opacity={1} at={[97, 70, 5, 20]}>
          <rect x="76" y="56" width="20" height="32" rx="8" fill={PAL.purple} />
        </Shade>
        <path d="M80 62L74 80M92 62L100 78" stroke={PAL.purpleShade} strokeWidth="6" />
        <circle cx="86" cy="46" r="9" fill={SKIN.bram[0]} />
        <circle cx="89" cy="47.4" r="5.4" fill={SKIN.bram[1]} opacity=".45" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;

