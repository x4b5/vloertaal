import type { JSX } from 'react';
import { CurveArrow, Ground, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "overstappen": to change (to another train or bus) — on the left a yellow train, on the right a red
  // bus, both seen from the front; a traveller with a bag walks from the train to the bus, a curved
  // sky-blue arrow over her goes from the one to the other. On the intro card she walks over from the
  // train to the bus (once: she changes).
  'w.overstappen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={52} ry={4} />
      {/* The train (left) */}
      <Shade color={PAL.yellowShade} opacity={1} at={[48, 66, 8, 40]}>
        <path d="M8 98V48Q8 34 22 34H32Q46 34 46 48V98Z" fill={PAL.yellow} />
      </Shade>
      <path d="M12 60V50Q12 40 22 40H32Q42 40 42 50V60Z" fill={PAL.slateDark} />
      <rect x="8" y="68" width="38" height="6" fill={PAL.blue} />
      <circle cx="15" cy="84" r="3.6" fill={PAL.white} />
      <circle cx="39" cy="84" r="3.6" fill={PAL.white} />
      <rect x="12" y="98" width="30" height="6" rx="2" fill={PAL.slate} />
      <Shine d="M13 46Q15 39 21 38" width={2.6} opacity={0.5} />
      {/* The bus (right) */}
      <Shade color={PAL.redShade} opacity={1} at={[114, 66, 8, 40]}>
        <rect x="74" y="30" width="38" height="68" rx="7" fill={PAL.red} />
      </Shade>
      <rect x="78" y="38" width="30" height="24" rx="3" fill={PAL.slateDark} />
      <rect x="80" y="32" width="26" height="4" rx="2" fill={PAL.yellowLight} />
      <circle cx="81" cy="84" r="3.6" fill={PAL.white} />
      <circle cx="105" cy="84" r="3.6" fill={PAL.white} />
      <rect x="86" y="80" width="14" height="6" rx="2" fill={PAL.redShade} />
      <rect x="76" y="96" width="9" height="8" rx="2" fill={PAL.slateDark} />
      <rect x="101" y="96" width="9" height="8" rx="2" fill={PAL.slateDark} />
      {/* The arrow from the train to the bus */}
      <CurveArrow from={[30, 26]} to={[92, 24]} bend={-14} color={PAL.sky} width={6} head={11} />
      {/* The traveller, walking to the right */}
      <Move kind="slow" dx={-24} once>
        <g>
          <path d="M57 86L52 102M63 86L68 102" stroke={PAL.navy} strokeWidth="6" />
          <ellipse cx="51" cy="103" rx="4.4" ry="2.6" fill={PAL.slateDark} />
          <ellipse cx="70" cy="103" rx="4.4" ry="2.6" fill={PAL.slateDark} />
          <path d="M53 88V70Q53 62 60 62Q67 62 67 70V88Z" fill={PAL.green} />
          <rect x="64" y="74" width="11" height="12" rx="3" fill={PAL.orange} />
          <path d="M66 76L64 68" stroke={PAL.greenShade} strokeWidth="4" />
          <circle cx="60" cy="54" r="7" fill={SKIN.jada[0]} />
          <path d="M53 54Q52.6 46 60 46Q67.4 46 67 54Q63 49 53 54Z" fill={PAL.brown} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
