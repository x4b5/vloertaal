import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de knuffel": the cuddly toy — a soft toy rabbit sitting up: a round grey-lilac body, two long
  // floppy ears with pink insides, black button eyes, a pink nose and a red bow round its neck.
  // (A rabbit, not the teddy bear of "de kinderopvang".)
  'w.knuffel': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={36} ry={4.5} />
      {/* The ears */}
      <path d="M44 44Q30 30 34 12Q42 6 48 16Q54 30 54 42Z" fill={PAL.purpleLight} />
      <path d="M44 38Q36 28 39 16Q43 13 46 19Q50 30 50 38Z" fill={PAL.redLight} />
      <path d="M66 42Q66 26 76 14Q84 10 88 18Q88 32 76 46Z" fill={PAL.purple} opacity=".7" />
      <path d="M70 38Q72 26 78 19Q82 18 83 22Q82 32 75 40Z" fill={PAL.redLight} />
      {/* The feet and the body */}
      <ellipse cx="42" cy="100" rx="12" ry="7" fill={PAL.purpleLight} />
      <ellipse cx="78" cy="100" rx="12" ry="7" fill={PAL.purpleLight} />
      <Shade color={PAL.purple} opacity={0.55} at={[92, 82, 12, 26]}>
        <ellipse cx="60" cy="82" rx="26" ry="22" fill={PAL.purpleLight} />
      </Shade>
      <ellipse cx="60" cy="86" rx="13" ry="12" fill={PAL.paper} />
      {/* The arms */}
      <ellipse cx="36" cy="80" rx="7" ry="12" fill={PAL.purpleLight} transform="rotate(24 36 80)" />
      <ellipse cx="84" cy="80" rx="7" ry="12" fill={PAL.purple} opacity=".75" transform="rotate(-24 84 80)" />
      {/* The head */}
      <Shade color={PAL.purple} opacity={0.55} at={[82, 52, 9, 22]}>
        <ellipse cx="60" cy="50" rx="22" ry="19" fill={PAL.purpleLight} />
      </Shade>
      <ellipse cx="60" cy="56" rx="10" ry="7" fill={PAL.paper} />
      <circle cx="51" cy="46" r="3.2" fill={PAL.ink} />
      <circle cx="69" cy="46" r="3.2" fill={PAL.ink} />
      <path d="M57 53H63L60 56.6Z" fill={PAL.blush} stroke={PAL.blush} strokeWidth="1.6" />
      <path d="M60 57V59.4M56.6 60.4Q60 62.4 63.4 60.4" fill="none" stroke={PAL.ink} strokeWidth="1.4" />
      {/* The bow */}
      <path d="M60 68L48 62V74ZM60 68L72 62V74Z" fill={PAL.red} />
      <circle cx="60" cy="68" r="3.6" fill={PAL.redShade} />
      <Shine d="M44 40Q46 34 52 32" width={3} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
