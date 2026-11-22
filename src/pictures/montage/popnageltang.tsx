import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** The tool is drawn lying along x (handles left, nose right) and turned to rise to the top right. */
const TURN = 'translate(60 60) rotate(-30) scale(0.86) translate(-70 -68)';

export default {
  // "de popnageltang": the hand rivet gun — two long handles with orange grips at the bottom left, the steel head with
  // its nose piece at the top right, and a blind rivet (flange and sleeve) sitting in the nose.
  'w.popnageltang': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={42} ry={4} />
      <g transform={TURN}>
        {/* The lower (moving) handle: steel by the pivot, then its grip, in shade */}
        <Move kind="turn" turn={-28} at={[70, 65]}>
          <path d="M70 66L40 78" stroke={PAL.steel} strokeWidth="8" strokeLinecap="round" />
          <path d="M46 76L6 86" stroke={PAL.orangeShade} strokeWidth="13" strokeLinecap="round" />
        </Move>
        {/* The upper (fixed) handle: straight on from the head */}
        <path d="M70 56L40 56" stroke={PAL.steel} strokeWidth="9" strokeLinecap="round" />
        <path d="M46 56L4 60" stroke={PAL.orange} strokeWidth="14" strokeLinecap="round" />
        <Shine d="M40 52.4L12 55" width={3} opacity={0.6} />
        {/* The head: a chunky steel body */}
        <Shade color={PAL.steel} opacity={1} at={[96, 74, 30, 10]}>
          <rect x="60" y="46" width="38" height="26" rx="6" fill={PAL.mist} />
        </Shade>
        {/* The pivot of the moving handle */}
        <circle cx="70" cy="65" r="5" fill={PAL.slate} />
        <circle cx="70" cy="65" r="2" fill={PAL.steel} />
        {/* The nose piece: a dark cone and its tip */}
        <path d="M97 49L110 54V62L97 67Z" fill={PAL.slate} />
        <rect x="108" y="53" width="5" height="10" rx="1.6" fill={PAL.slateDark} />
        <Shine d="M66 50.4H90" width={2.6} opacity={0.85} />
        {/* The rivet in the nose: its round flange and the sleeve sticking out */}
        <rect x="113" y="47" width="6" height="22" rx="2.6" fill={PAL.paper} />
        <rect x="117" y="47" width="2" height="22" rx="1" fill={PAL.paperShade} />
        <rect x="119" y="52.5" width="14" height="11" rx="2" fill={PAL.mist} />
        <rect x="119" y="59.5" width="14" height="4" rx="1.6" fill={PAL.steel} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
