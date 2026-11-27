import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de voetganger": the pedestrian (a person on foot) — Bram in his orange hi-vis vest walks on a green
  // walkway painted on the warehouse floor, between yellow lines; in the grey lane behind it a yellow
  // forklift drives past, kept apart from him by the line.
  'w.voetganger': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The floor: the grey lane at the back, the green walkway in front */}
      <path d="M4 62H116V84H4Z" fill={PAL.mist} />
      <path d="M4 84H116V108H4Z" fill={PAL.green} />
      <path d="M4 84H116M4 107H116" stroke={PAL.yellow} strokeWidth="3" />
      {/* The forklift in the lane */}
      <g transform="translate(8 26) scale(0.62)">
        <rect x="10" y="20" width="6" height="66" rx="1.6" fill={PAL.steel} />
        <rect x="2" y="78" width="22" height="5" rx="1.6" fill={PAL.slate} />
        <path d="M30 60V26H56V60" fill="none" stroke={PAL.slate} strokeWidth="4" />
        <Shade color={PAL.yellowShade} opacity={1} at={[80, 80, 10, 20]}>
          <path d="M18 88V66Q18 60 24 60H68Q74 60 74 66V88Z" fill={PAL.yellow} />
        </Shade>
        <rect x="56" y="48" width="18" height="14" rx="3" fill={PAL.slateDark} />
        <circle cx="30" cy="90" r="8" fill={PAL.slateDark} />
        <circle cx="64" cy="90" r="8" fill={PAL.slateDark} />
        <circle cx="30" cy="90" r="3" fill={PAL.steel} />
        <circle cx="64" cy="90" r="3" fill={PAL.steel} />
      </g>
      <Ground cx={78} cy={101} rx={20} ry={3} />
      {/* Bram, walking on the walkway */}
      <path d="M74 70L66 98M82 70L90 98" stroke={PAL.navy} strokeWidth="8" />
      <ellipse cx="64" cy="100" rx="6" ry="3" fill={PAL.slateDark} />
      <ellipse cx="92" cy="100" rx="6" ry="3" fill={PAL.slateDark} />
      <path d="M70 46L62 64M86 46L94 64" stroke={PAL.blue} strokeWidth="6.5" />
      <Shade color={PAL.orangeShade} opacity={1} at={[92, 56, 6, 22]}>
        <rect x="66" y="36" width="24" height="38" rx="8.5" fill={PAL.orange} />
      </Shade>
      <path d="M66 60H90" stroke="#eef5f7" strokeWidth="3.2" />
      <g transform="translate(78 38) scale(0.4) translate(-60 -96)">
        <CastHead who="bram" expr="pleased" gaze={[0, 0]} bold />
      </g>
      <Shine d="M8 90H30" width={2.4} opacity={0.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
