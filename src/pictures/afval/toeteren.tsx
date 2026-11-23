import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shine } from '../kit';

export default {
  // "toeteren": to sound the horn — the driver's view of the steering wheel of the wheel loader: a
  // hand presses flat on the round horn pad in the middle, and loud sound waves come out to the right.
  // On the intro card the hand comes to the pad and presses, then the sound waves appear (three rounds:
  // a short toot, again and again).
  'w.toeteren': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The wheel: the rim, three spokes and the horn pad */}
      <ellipse cx="54" cy="62" rx="42" ry="38" fill="none" stroke={PAL.slateDark} strokeWidth="10" />
      <path d="M16 56Q24 26 54 24" fill="none" stroke={PAL.slate} strokeWidth="3" opacity=".9" />
      <path d="M14 64H40M68 64H94M54 76V98" stroke={PAL.slateDark} strokeWidth="9" />
      <circle cx="54" cy="64" r="18" fill={PAL.slate} />
      <circle cx="54" cy="64" r="13" fill={PAL.yellow} />
      <path d="M47 58Q50 54 55 54" fill="none" stroke={PAL.yellowShine} strokeWidth="2.6" />
      {/* The hand pressing the pad */}
      <Move kind="fast" dy={24}>
        <Hand pose="open" x={56} y={104} scale={0.78} skin={SKIN.amina} sleeve={[PAL.orange, PAL.orangeShade]} />
      </Move>
      {/* The sound */}
      <Move kind="show">
        <g fill="none" stroke={PAL.sky} strokeWidth="5">
          <path d="M98 36Q106 46 100 56" />
          <path d="M104 24Q118 44 106 64" />
        </g>
        <Shine d="M92 44Q95 46 94 50" color={PAL.sky} width={4} opacity={1} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
