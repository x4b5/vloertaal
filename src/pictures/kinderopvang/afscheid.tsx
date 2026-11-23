import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Ground, Move, PAL, SKIN, Shade } from '../kit';

/** A child's head in the cast's flat style (as in group24), centred on (x, y), radius `r`. */
function ChildHead({ x, y, r = 12, skin = SKIN.bram, hair = PAL.brown }: { x: number; y: number; r?: number; skin?: [string, string]; hair?: string }) {
  const k = r / 12;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`}>
      <circle cx="0" cy="-1.5" r="13.2" fill={hair} />
      <circle cx="-12" cy="2" r="3.2" fill={skin[0]} />
      <circle cx="12" cy="2" r="3.2" fill={skin[1]} />
      <Shade color={skin[1]} opacity={1} at={[13, 4, 6, 16]}>
        <ellipse cx="0" cy="2" rx="11.6" ry="11.2" fill={skin[0]} />
      </Shade>
      <path d="M-12.4 -1Q-12 -13 0 -13.6Q12 -13 12.4 -1Q8 -6.5 1 -7Q-4 -4 -12.4 -1Z" fill={hair} />
      <ellipse cx="-4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
      <ellipse cx="4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
      <path d="M-3.6 7Q0 11 3.6 7" fill={PAL.mouth} stroke={PAL.mouth} strokeWidth="1.4" strokeLinecap="round" />
    </g>
  );
}

export default {
  // "het afscheid": the goodbye — at the open door of the group, the parent (Henk) goes and waves; the
  // toddler in the room waves back with its hand up high.
  // On the intro card both hands wave (waving: three rounds).
  'w.afscheid': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={105} rx={50} ry={4} />
      {/* The door frame, the opening and the open door */}
      <rect x="10" y="14" width="46" height="91" rx="3" fill={PAL.mist} />
      <rect x="15" y="19" width="36" height="86" fill="#e3f5ff" />
      <path d="M51 19L64 24V100L51 105Z" fill={PAL.card} />
      <path d="M60 22.5L64 24V100L60 101.6Z" fill={PAL.cardShade} />
      {/* The parent (Henk) in the doorway, waving */}
      <rect x="20" y="64" width="26" height="41" rx="9" fill={PAL.navy} />
      <rect x="38" y="64" width="8" height="41" rx="4" fill={PAL.navyShade} />
      <Move kind="turn" turn={-30} at={[24, 70]}>
        <path d="M24 70L18 50" stroke={PAL.navy} strokeWidth="7" />
        <circle cx="17" cy="46" r="5" fill={SKIN.henk[0]} />
      </Move>
      <g transform="translate(33 66) scale(0.42) translate(-60 -96)">
        <CastHead who="henk" expr="pleased" gaze={[0, 0]} />
      </g>
      {/* The toddler, waving back */}
      <path d="M82 92V103M92 92V103" stroke={PAL.slate} strokeWidth="6.5" />
      <ellipse cx="81" cy="104" rx="4.6" ry="2.6" fill={PAL.slateDark} />
      <ellipse cx="94" cy="104" rx="4.6" ry="2.6" fill={PAL.slateDark} />
      <Shade color={PAL.purpleShade} opacity={1} at={[100, 84, 6, 16]}>
        <rect x="76" y="68" width="22" height="28" rx="9" fill={PAL.purple} />
      </Shade>
      <path d="M95 74L100 88" stroke={PAL.purple} strokeWidth="6" />
      <Move kind="turn" turn={30} at={[79, 74]}>
        <path d="M79 74L72 56" stroke={PAL.purple} strokeWidth="6" />
        <circle cx="71" cy="52" r="4.6" fill={SKIN.amina[0]} />
      </Move>
      <ChildHead x={87} y={54} r={13} skin={SKIN.amina} hair="#2e201a" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
