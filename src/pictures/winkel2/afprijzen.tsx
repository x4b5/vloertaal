import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "afprijzen": to mark down (to give a lower price) — a meat tray under film with its white price
  // label (grey lines), and over the label a hand presses a round red sticker with a big white arrow
  // pointing down (a lower price, no digits). Not the green % tag of "de korting": the act of stickering.
  // On the intro card the hand brings the sticker down onto the pack: three rounds (pack after pack).
  'w.afprijzen': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={48} ry={4} />
      {/* The tray: rim, film, the meat under it */}
      <path d="M8 74L18 100H98L108 74Z" fill={PAL.paperShade} />
      <Shade color={PAL.paperShade} opacity={1} at={[112, 86, 14, 20]}>
        <path d="M8 74L18 100H98L108 74Z" fill={PAL.paper} />
      </Shade>
      <ellipse cx="58" cy="74" rx="50" ry="8" fill={PAL.mist} />
      <path d="M22 74Q30 62 50 64Q66 60 82 66Q94 68 94 74Q80 80 58 80Q34 80 22 74Z" fill={PAL.clay} />
      <path d="M36 70Q48 66 60 69" fill="none" stroke={PAL.clayLight} strokeWidth="3" strokeLinecap="round" />
      {/* The old price label */}
      <rect x="16" y="80" width="38" height="16" rx="2" fill={PAL.white} />
      <path d="M20 85H44M20 90H36" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      {/* The red sticker with the down arrow, and the hand that puts it on */}
      <Move kind="from" dy={-30}>
        <circle cx="64" cy="64" r="18" fill={PAL.redShade} />
        <circle cx="64" cy="61" r="18" fill={PAL.red} />
        <path d="M64 50V70M56 63L64 71L72 63" fill="none" stroke={PAL.white} strokeWidth="5" strokeLinecap="round" />
        <Shine d="M51 55Q54 47 61 45" width={2.6} opacity={0.5} />
        <Hand pose="point" x={98} y={40} rotate={-125} scale={0.74} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
