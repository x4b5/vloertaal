import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de reachtruck": the reach truck (a forklift for very high racks; its forks reach forward) — a blue
  // reach truck seen from the side: Bram sits sideways in the cab under its guard, two support legs run
  // forward along the floor, and high up on the tall steel mast the forks are pushed forward under a
  // pallet with a box. On the intro card the forks with the pallet reach forward from the mast (once: a
  // load is put away).
  'w.reachtruck': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={58} cy={105} rx={52} ry={4} />
      {/* The support legs with their small wheels */}
      <rect x="50" y="96" width="52" height="5" rx="2" fill={PAL.slate} />
      <circle cx="96" cy="102" r="3.4" fill={PAL.slateDark} />
      {/* The mast */}
      <rect x="54" y="12" width="9" height="86" rx="1.6" fill={PAL.steel} />
      <rect x="60" y="12" width="3" height="86" fill={PAL.slate} opacity=".5" />
      {/* The forks and pallet, reaching forward */}
      <Move kind="from" dx={-22} once>
        <path d="M62 28H72V46" fill="none" stroke={PAL.slate} strokeWidth="3" />
        <rect x="70" y="18" width="5" height="30" rx="1.4" fill={PAL.slateDark} />
        <rect x="70" y="44" width="38" height="4" rx="1.4" fill={PAL.slateDark} />
        <rect x="74" y="38" width="36" height="6" rx="1" fill={PAL.wood} />
        <rect x="74" y="36" width="36" height="3" rx="1" fill={PAL.card} />
        <Shade color={PAL.cardShade} opacity={1} at={[110, 26, 6, 12]}>
          <rect x="78" y="16" width="28" height="20" rx="1.6" fill={PAL.card} />
        </Shade>
        <rect x="88" y="16" width="7" height="8" fill="#f6dcae" />
      </Move>
      {/* The cab guard */}
      <path d="M14 64V42H52" fill="none" stroke={PAL.slate} strokeWidth="3.6" />
      {/* Bram, sitting sideways */}
      <rect x="26" y="58" width="18" height="18" rx="6" fill={PAL.orange} />
      <g transform="translate(35 60) scale(0.32) translate(-60 -96)">
        <CastHead who="bram" expr="pleased" gaze={[0, 0]} bold />
      </g>
      {/* The body of the truck */}
      <Shade color={PAL.blueShade} opacity={1} at={[60, 90, 8, 16]}>
        <path d="M10 100V76Q10 70 16 70H54V100Z" fill={PAL.blue} />
      </Shade>
      <rect x="10" y="70" width="44" height="5" rx="2" fill={PAL.blueLight} opacity=".6" />
      <circle cx="22" cy="101" r="5" fill={PAL.slateDark} />
      <circle cx="22" cy="101" r="2" fill={PAL.steel} />
      <Shine d="M15 80V92" width={2.6} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
