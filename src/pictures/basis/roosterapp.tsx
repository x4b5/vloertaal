import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de rooster-app": the roster app (your shifts on your phone) — a phone, on its screen a blue
  // header, a row of seven days with today ringed, and the shifts as cards under it: two day shifts
  // (a yellow sun) and a night shift (a moon), each with its coloured bar. ("de app" is a screen of
  // app icons.)
  'w.roosterapp': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <g transform="rotate(-8 60 60)">
        {/* The phone */}
        <rect x="31" y="10" width="58" height="100" rx="10" fill={PAL.slateDark} transform="translate(3 3)" />
        <Shade color={PAL.slateDark} opacity={1} at={[94, 60, 8, 60]}>
          <rect x="31" y="10" width="58" height="100" rx="10" fill={PAL.slate} />
        </Shade>
        <rect x="36" y="18" width="48" height="84" rx="4" fill={PAL.white} />
        {/* The header */}
        <path d="M36 22Q36 18 40 18H80Q84 18 84 22V30H36Z" fill={PAL.sky} />
        {/* The seven days, today ringed */}
        {Array.from({ length: 7 }, (_, d) => (
          <circle key={d} cx={41.5 + d * 6.2} cy="37" r={d === 2 ? 3.2 : 2.2} fill={d === 2 ? PAL.orange : PAL.mist} />
        ))}
        {/* The shifts */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="39" y={44 + i * 19} width="42" height="15" rx="3" fill={PAL.paper} />
            <rect x="39" y={44 + i * 19} width="4" height="15" rx="2" fill={[PAL.orange, PAL.orange, PAL.navy][i]} />
            <rect x="60" y={49 + i * 19} width="17" height="5" rx="2.5" fill={[PAL.orangeLight, PAL.orangeLight, PAL.blueLight][i]} />
          </g>
        ))}
        <circle cx="51" cy="51.5" r="5" fill={PAL.yellow} />
        <circle cx="51" cy="70.5" r="5" fill={PAL.yellow} />
        <path d="M53 84A6 6 0 1 0 53 95A4.6 4.6 0 1 1 53 84Z" fill={PAL.navy} />
        <rect x="52" y="13" width="16" height="2.6" rx="1.3" fill={PAL.slateDark} />
        <Shine d="M33 24V44" width={2.6} opacity={0.4} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
