import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de brandmeldcentrale": the fire alarm panel (it shows where the alarm is) — a red steel cabinet on
  // the wall with a lit display at the top, a small map of the building in which one room glows red (the
  // alarm is there), and a row of round buttons below.
  'w.brandmeldcentrale': () => (
    <g strokeLinejoin="round">
      {/* The cabinet, its depth edge */}
      <rect x="12" y="14" width="92" height="92" rx="7" fill={PAL.redShade} transform="translate(3 3)" />
      <Shade color={PAL.redShade} opacity={1} at={[106, 60, 8, 50]}>
        <rect x="12" y="14" width="92" height="92" rx="7" fill={PAL.red} />
      </Shade>
      <Shine d="M18 22V44" width={3} opacity={0.5} />
      {/* The display */}
      <rect x="22" y="22" width="72" height="16" rx="3" fill={PAL.slateDark} />
      <path d="M28 30H58" stroke={PAL.ice} strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="84" cy="30" r="3.6" fill={PAL.red} />
      {/* The map of the building: one room in alarm */}
      <rect x="22" y="44" width="72" height="38" rx="3" fill={PAL.white} />
      <rect x="26" y="48" width="20" height="14" fill={PAL.mist} />
      <rect x="49" y="48" width="18" height="14" fill={PAL.mist} />
      <rect x="70" y="48" width="20" height="30" fill={PAL.red} />
      <rect x="26" y="65" width="41" height="13" fill={PAL.mist} />
      <path d="M80 56Q84 60 83 64Q82 67 80 67Q76 66 77 62Q78 64 80 63Q81 60 80 56Z" fill={PAL.white} />
      {/* The buttons */}
      {[30, 46, 62, 78].map((x, i) => (
        <g key={x}>
          <circle cx={x + 4} cy="94" r="5.4" fill={PAL.redShade} />
          <circle cx={x + 4} cy="93" r="5" fill={i === 0 ? PAL.leaf : i === 3 ? PAL.yellow : PAL.paper} />
        </g>
      ))}
    </g>
  ),
} as Record<string, () => JSX.Element>;
