import type { JSX } from 'react';
import { Clock, Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de opstapplaats": the pick-up point (where the agency's bus picks you up) — a sign on a pole with a
  // white minibus on it and a small clock under it (the time of the pick-up), a yellow waiting box
  // painted on the pavement, and a worker's bag put down there, ready to go.
  'w.opstapplaats': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={104} rx={48} ry={4} />
      {/* The waiting box on the pavement */}
      <path d="M22 96H104L110 106H16Z" fill={PAL.mist} />
      <path d="M30 98H98L102 104H26Z" fill="none" stroke={PAL.yellow} strokeWidth="2.6" />
      {/* The pole */}
      <rect x="35" y="30" width="6" height="74" rx="2" fill={PAL.steel} />
      <rect x="38" y="30" width="3" height="74" rx="1.5" fill={PAL.slate} opacity=".5" />
      {/* The sign with the minibus */}
      <rect x="14" y="12" width="48" height="40" rx="6" fill={PAL.skyShade} transform="translate(0 3)" />
      <rect x="14" y="12" width="48" height="40" rx="6" fill={PAL.sky} />
      <path d="M21 42V26Q21 22 25 22H46Q49 22 51 25L56 33Q57 34 57 37V42Z" fill={PAL.white} />
      <rect x="25" y="25" width="7" height="6" rx="1.2" fill={PAL.sky} />
      <rect x="34" y="25" width="7" height="6" rx="1.2" fill={PAL.sky} />
      <path d="M44 25H47L51 31H44Z" fill={PAL.sky} />
      <circle cx="28" cy="43" r="4.2" fill={PAL.slateDark} />
      <circle cx="50" cy="43" r="4.2" fill={PAL.slateDark} />
      <Shine d="M18 20Q19 16 23 15" width={2.4} opacity={0.5} />
      {/* The clock of the pick-up time */}
      <Clock cx={38} cy={68} r={12} hour={7} minute={0} />
      {/* The bag */}
      <Shade color={PAL.navyShade} opacity={1} at={[96, 88, 8, 16]}>
        <rect x="66" y="74" width="32" height="26" rx="6" fill={PAL.navy} />
      </Shade>
      <path d="M74 75V69Q74 64 79 64H85Q90 64 90 69V75" fill="none" stroke={PAL.slate} strokeWidth="4" />
      <rect x="66" y="82" width="32" height="4" fill={PAL.navyShade} />
      <Shine d="M70 80V92" width={2.6} opacity={0.35} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
