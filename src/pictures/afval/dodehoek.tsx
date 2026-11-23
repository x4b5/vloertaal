import type { JSX } from 'react';
import { Ground, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de dode hoek": the blind spot — the cab of a bin lorry from the side (facing left). Right next to it, low,
  // a red zone on the ground where a small person stands; the driver's line of sight (dashed) goes from his
  // window over the person's head, and a red cross on it: he cannot see them there.
  'w.dodehoek': () => {
    const [s, sh] = SKIN.amina;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={52} cy={105} rx={46} ry={4} />
        {/* The red zone on the ground */}
        <path d="M54 104L114 96V108L54 110Z" fill={PAL.red} opacity=".3" />
        <path d="M58 60L114 92V104L58 104Z" fill={PAL.red} opacity=".18" />
        {/* The body behind the cab (cut off) */}
        <rect x="50" y="26" width="16" height="64" rx="3" fill={PAL.green} />
        <rect x="8" y="86" width="58" height="8" rx="2" fill={PAL.slate} />
        {/* The cab */}
        <Shade color={PAL.mist} opacity={1} at={[64, 72, 8, 40]}>
          <path d="M8 90V44Q8 26 26 24H48Q54 24 54 30V90Z" fill={PAL.paper} />
        </Shade>
        <rect x="8" y="68" width="46" height="22" fill={PAL.mist} />
        <path d="M14 46Q15 32 28 32H48V52H14Z" fill={PAL.ice} />
        {/* The driver's head in the window */}
        <circle cx="38" cy="42" r="7" fill={SKIN.henk[0]} />
        <path d="M31 40A7 7 0 0 1 45 39L44 37Q38 32 32 37Z" fill={PAL.line} />
        {/* The mirror */}
        <path d="M54 34H60" stroke={PAL.slateDark} strokeWidth="3" />
        <rect x="58" y="28" width="6" height="16" rx="2" fill={PAL.slateDark} />
        <rect x="4" y="82" width="10" height="9" rx="2" fill={PAL.slateDark} />
        <circle cx="26" cy="95" r="9" fill={PAL.ink} />
        <circle cx="26" cy="95" r="3.6" fill={PAL.steel} />
        <Shine d="M14 66V52" width={3} opacity={0.6} />
        {/* The driver's line of sight, over the person's head */}
        <path d="M46 42L104 58" stroke={PAL.slate} strokeWidth="3" strokeDasharray="1 7" />
        {/* The person in the blind spot, small and low */}
        <path d="M90 84L90 102" stroke={PAL.navy} strokeWidth="9" />
        <path d="M90 72V86" stroke={PAL.purple} strokeWidth="13" />
        <circle cx="90" cy="64" r="7" fill={s} />
        <circle cx="92.5" cy="65" r="4.2" fill={sh} opacity=".45" />
        {/* The red cross: not seen */}
        <circle cx="104" cy="36" r="11" fill={PAL.redShade} transform="translate(0 1.4)" />
        <circle cx="104" cy="36" r="11" fill={PAL.red} />
        <path d="M100 32L108 40M108 32L100 40" stroke={PAL.white} strokeWidth="3" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
