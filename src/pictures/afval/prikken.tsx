import type { JSX } from 'react';
import { Hand, Motion, Move, PAL, Shade, Shine } from '../kit';

/** A yellow work glove for the Hand: [base, shade]. */
const GLOVE: [string, string] = [PAL.yellow, PAL.yellowShade];

export default {
  // "prikken": to prick — a hand in a yellow work glove reaches in from the left to a black rubbish bag; a
  // needle sticks out of the bag and its point goes into the fingertip, with a red mark and short red lines.
  // On the intro card the hand comes to the needle, then the mark: once (an accident happens once).
  'w.prikken': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The rubbish bag */}
      <path d="M78 70Q72 58 80 54Q86 60 86 68Z" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={1} at={[112, 92, 12, 30]}>
        <path d="M56 106Q50 84 66 74Q80 66 96 70Q112 76 112 92Q112 106 106 106Z" fill={PAL.slate} />
      </Shade>
      <path d="M70 92Q78 88 84 96" fill="none" stroke={PAL.slateDark} strokeWidth="2.2" />
      <Shine d="M62 92Q64 82 72 78" width={3.4} opacity={0.35} />
      <ellipse cx="82" cy="107" rx="30" ry="3.5" fill="#000" opacity=".14" />
      {/* The needle, sticking out of the bag */}
      <path d="M90 78L74 50" stroke={PAL.steel} strokeWidth="2.8" />
      <rect x="88" y="74" width="8" height="14" rx="2" fill={PAL.orange} transform="rotate(-30 92 80)" />
      {/* The gloved hand, pointing finger to the needle */}
      <Move kind="from" dx={-24} once>
        <Hand pose="point" x={22} y={58} rotate={90} scale={1.05} skin={GLOVE} sleeve={[PAL.navy, PAL.navyShade]} />
      </Move>
      {/* The prick */}
      <Move kind="show">
        <circle cx="73" cy="48" r="3.6" fill={PAL.red} />
        <Motion x={74} y={46} dir={-70} spread={70} n={3} len={8} gap={8} color={PAL.red} width={3.2} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
