import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de prikthermometer": the probe thermometer (you stick it into the food) — a hand-held digital
  // thermometer: a white body with a sky-blue screen showing a red level bar and a green button on top,
  // and a long, thin, pointed steel probe that sticks out of it down to the left.
  'w.prikthermometer': () => (
    <g strokeLinejoin="round">
      {/* The long steel probe with its sharp point */}
      <path d="M68 56L16 104" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <path d="M68 54L20 98" stroke={PAL.mist} strokeWidth="2" strokeLinecap="round" />
      <path d="M22 98L12 108L18 100Z" fill={PAL.steel} />
      <g transform="rotate(-42 80 44)">
        {/* The collar where the probe goes in */}
        <rect x="68" y="66" width="24" height="10" rx="3" fill={PAL.slate} />
        {/* The body */}
        <Shade color={PAL.paperShade} opacity={1} at={[100, 40, 8, 40]}>
          <rect x="62" y="10" width="36" height="60" rx="10" fill={PAL.paper} />
        </Shade>
        {/* The screen with a red level bar, and the button */}
        <rect x="68" y="18" width="24" height="24" rx="3" fill={PAL.slateDark} />
        <rect x="71" y="21" width="18" height="18" rx="2" fill={PAL.ice} />
        <rect x="74" y="32" width="12" height="4" rx="1.5" fill={PAL.red} />
        <rect x="74" y="25" width="7" height="4" rx="1.5" fill={PAL.red} opacity=".45" />
        <circle cx="80" cy="54" r="5.5" fill={PAL.leaf} />
        <Shine d="M66 22V56" width={2.6} opacity={0.9} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
