import type { JSX } from 'react';
import { Hand, Motion, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de intercom": the intercom — a steel panel on the wall by the door: a round camera on top, a
  // speaker grille in the middle and a big call button; a finger presses the button and the speaker
  // sounds (the lines).
  // On the intro card the finger comes to the button, then the sound lines appear. Once and slowly
  // (someone rings at the door once).
  'w.intercom': () => (
    <g strokeLinejoin="round">
      {/* The panel, its depth edge, its shaded right side */}
      <rect x="30" y="12" width="46" height="96" rx="8" fill={PAL.slate} transform="translate(3 3)" />
      <Shade color={PAL.steel} opacity={1} at={[80, 60, 10, 60]}>
        <rect x="30" y="12" width="46" height="96" rx="8" fill={PAL.mist} />
      </Shade>
      <Shine d="M36 22V46" width={3} opacity={0.8} />
      {/* The camera */}
      <circle cx="53" cy="27" r="8" fill={PAL.slateDark} />
      <circle cx="53" cy="27" r="4" fill={PAL.sky} />
      <circle cx="51.6" cy="25.6" r="1.4" fill={PAL.white} />
      {/* The speaker grille */}
      <rect x="39" y="42" width="28" height="26" rx="5" fill={PAL.slate} />
      <path d="M45 49H61M45 55H61M45 61H61" stroke={PAL.slateDark} strokeWidth="2.6" strokeLinecap="round" />
      {/* The call button */}
      <circle cx="53" cy="88" r="11" fill={PAL.slate} />
      <circle cx="53" cy="87" r="8.5" fill={PAL.sky} />
      <path d="M48 84Q50 81 53 80.5" stroke={PAL.ice} strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* The sound from the speaker */}
      <Move kind="show">
        <Motion x={70} y={55} dir={-20} spread={60} n={3} len={11} gap={8} color={PAL.sky} width={4} />
      </Move>
      {/* The finger on the button */}
      <Move kind="from" dx={26} dy={8} once>
        <Hand pose="point" x={89} y={109} rotate={-48} scale={0.8} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
