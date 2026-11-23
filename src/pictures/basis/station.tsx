import type { JSX } from 'react';
import { Clock, Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het station": the station — a brick station building: a tall middle hall with a big clock in its
  // gable and a wide arched entrance, a lower wing on each side, and on the left wing a blue sign with
  // a white train front (the station sign).
  'w.station': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={52} ry={4} />
      {/* The wings */}
      <rect x="10" y="58" width="32" height="46" rx="2" fill={PAL.clayLight} />
      <Shade color={PAL.clayShade} opacity={1} at={[112, 80, 16, 30]}>
        <rect x="78" y="58" width="32" height="46" rx="2" fill={PAL.clay} />
      </Shade>
      <rect x="8" y="54" width="36" height="6" rx="2" fill={PAL.slate} />
      <rect x="76" y="54" width="36" height="6" rx="2" fill={PAL.slate} />
      <path d="M17 86V74Q17 68 23 68Q29 68 29 74V86Z" fill={PAL.ice} />
      <path d="M90 86V74Q90 68 96 68Q102 68 102 74V86Z" fill={PAL.ice} />
      {/* The middle hall */}
      <Shade color={PAL.clayShade} opacity={1} at={[90, 60, 12, 50]}>
        <path d="M36 104V40L60 18L84 40V104Z" fill={PAL.clay} />
      </Shade>
      <path d="M32 42L60 16L88 42" fill="none" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      <Clock cx={60} cy={44} r={11} hour={8} minute={0} rim={PAL.slate} rimShade={PAL.slateDark} />
      {/* The arched entrance with its doors */}
      <path d="M44 104V76Q44 62 60 62Q76 62 76 76V104Z" fill={PAL.slateDark} />
      <path d="M47 76Q47 65 60 65Q73 65 73 76Z" fill={PAL.ice} />
      <path d="M60 78V104" stroke={PAL.slate} strokeWidth="2.4" />
      <Shine d="M40 46V70" width={3} opacity={0.45} />
      {/* The station sign: a blue square with a white train front */}
      <rect x="13" y="27" width="26" height="26" rx="5" fill={PAL.skyShade} transform="translate(0 2.5)" />
      <rect x="13" y="27" width="26" height="26" rx="5" fill={PAL.sky} />
      <path d="M19 46V36Q19 32 23 32H29Q33 32 33 36V46Z" fill={PAL.white} />
      <rect x="21" y="35" width="10" height="5" rx="1.4" fill={PAL.sky} />
      <circle cx="22.5" cy="43" r="1.6" fill={PAL.sky} />
      <circle cx="29.5" cy="43" r="1.6" fill={PAL.sky} />
      <path d="M21 46L19 50M31 46L33 50" stroke={PAL.white} strokeWidth="2" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
