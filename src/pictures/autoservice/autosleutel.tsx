import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

/** The fob's dark side: one step under PAL.slateDark. */
const FOB_DARK = '#1b232a';

export default {
  // "de autosleutel": the car key — a black key fob with three buttons and its steel key blade, on a
  // steel ring with a small paper key tag.
  'w.autosleutel': () => (
    <g strokeLinejoin="round" transform="translate(-10 -6) scale(1.15)">
      {/* The paper tag with its grey depth edge and a string to the ring */}
      <path d="M30 78L38 79" stroke={PAL.line} strokeWidth="1.6" strokeLinecap="round" />
      <g transform="translate(0 -8) rotate(-18 24 92)">
        <path d="M12 82H33L38 92L33 102H12Z" fill={PAL.paperShade} transform="translate(0 3)" />
        <path d="M12 82H33L38 92L33 102H12Z" fill={PAL.paper} />
        <circle cx="32" cy="92" r="2" fill={PAL.line} />
        <path d="M16 89H26M16 95H24" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* The key ring */}
      <circle cx="44" cy="82" r="9" stroke={PAL.steel} strokeWidth="3.6" fill="none" />
      <g transform="translate(60 58) rotate(35)">
        {/* The key blade with its notches */}
        <path d="M-4.5 -20V-44Q-4.5 -48 0 -48H4.5V-42L1.5 -39L4.5 -36V-31L1.5 -28L4.5 -25V-20Z" fill={PAL.mist} />
        <path d="M0 -44V-22" stroke={PAL.steel} strokeWidth="1.6" strokeLinecap="round" />
        {/* The fob: its dark side and the black body */}
        <Shade color={FOB_DARK} opacity={1} at={[16, 0, 8, 30]}>
          <rect x="-15" y="-24" width="30" height="50" rx="13" fill={PAL.slateDark} />
        </Shade>
        <Shine d="M-11 -10V6" width={3} opacity={0.35} />
        {/* Three buttons: lock, unlock, the red alarm */}
        <circle cx="0" cy="-10" r="5" fill={PAL.slate} />
        <circle cx="0" cy="3" r="5" fill={PAL.slate} />
        <circle cx="0" cy="15" r="3.6" fill={PAL.red} />
        {/* The loop for the ring */}
        <rect x="-5" y="24" width="10" height="6" rx="2.5" fill={PAL.slate} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
