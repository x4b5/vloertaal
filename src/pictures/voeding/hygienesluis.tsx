import type { JSX } from 'react';
import { Arrow, PAL, Shade, Shine } from '../kit';

export default {
  // "de hygiënesluis": the hygiene lock (the room where you get clean before you go in) — a small white
  // tiled room: on the left a wash basin with a tap and a soap dispenser, in the middle a turnstile bar,
  // on the right the green door to the production hall; a blue arrow on the floor leads past the basin,
  // through the turnstile, to the door.
  'w.hygienesluis': () => (
    <g strokeLinejoin="round">
      {/* The tiled walls and the floor */}
      <rect x="8" y="14" width="104" height="84" rx="4" fill={PAL.paper} />
      <path d="M8 34H112M8 54H112M8 74H112M28 14V98M48 14V98M68 14V98M88 14V98" stroke={PAL.paperShade} strokeWidth="1.6" />
      <rect x="8" y="94" width="104" height="14" rx="3" fill={PAL.mist} />
      {/* The wash basin, tap and dispenser */}
      <rect x="16" y="26" width="12" height="18" rx="3" fill={PAL.white} />
      <rect x="22" y="26" width="6" height="18" rx="3" fill={PAL.paperShade} />
      <rect x="19" y="44" width="4" height="5" rx="1.4" fill={PAL.steel} />
      <rect x="21" y="38" width="5" height="4" rx="1.2" fill={PAL.sky} />
      <path d="M30 52V46Q30 42 34 42H38" fill="none" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M14 56H44L40 68H18Z" fill={PAL.paperShade} />
      <path d="M14 56H44L42 62H16Z" fill={PAL.white} />
      <rect x="26" y="68" width="6" height="26" rx="2" fill={PAL.mist} />
      {/* The turnstile */}
      <rect x="54" y="58" width="8" height="38" rx="3" fill={PAL.steel} />
      <rect x="52" y="54" width="12" height="8" rx="3" fill={PAL.slate} />
      <path d="M62 64H76" stroke={PAL.steel} strokeWidth="4.4" strokeLinecap="round" />
      {/* The door to the hall */}
      <Shade color={PAL.greenShade} opacity={1} at={[110, 60, 8, 50]}>
        <rect x="78" y="22" width="28" height="74" rx="3" fill={PAL.green} />
      </Shade>
      <circle cx="92" cy="40" r="7" fill={PAL.ice} />
      <rect x="80" y="60" width="4" height="12" rx="2" fill={PAL.slateDark} />
      <Shine d="M10 20H24" width={2.6} opacity={0.8} />
      {/* The way through */}
      <Arrow from={[18, 102]} to={[100, 102]} color={PAL.sky} width={7} head={12} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
