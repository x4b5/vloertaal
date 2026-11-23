import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Bubble, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, QuestionMark } from '../kit';

export default {
  // "bewusteloos": unconscious (the person does not wake up) — Bram lies on his back on the floor, eyes
  // closed, an arm limp on the floor; a helper's hand comes down and shakes his shoulder (short lines) and
  // asks "hello?" (a speech bubble with a question mark), but he does not react.
  'w.bewusteloos': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={104} rx={52} ry={4} />
      {/* The legs, lying flat, a shoe fallen sideways */}
      <rect x="82" y="88" width="26" height="13" rx="6" fill={PAL.slate} />
      <rect x="82" y="96" width="26" height="5" rx="2.5" fill={PAL.slateDark} />
      <rect x="104" y="86" width="10" height="16" rx="5" fill={PAL.slateDark} transform="rotate(35 109 94)" />
      {/* The body in its orange vest */}
      <Shade color={PAL.orangeShade} opacity={1} at={[62, 108, 50, 10]}>
        <rect x="38" y="78" width="52" height="24" rx="11" fill={PAL.orange} />
      </Shade>
      <Shine d="M50 82H62" width={3} opacity={0.45} />
      {/* A limp arm on the floor */}
      <path d="M56 100L90 102" stroke={PAL.blue} strokeWidth="7" strokeLinecap="round" />
      <circle cx="94" cy="102" r="4.4" fill={SKIN.bram[0]} />
      {/* The head, eyes closed */}
      <g transform="translate(44 90) rotate(-90) scale(.56) translate(-60 -96)">
        <CastHead who="bram" emotion="rest" gaze={[0, 0]} />
      </g>
      {/* The helper's hand shakes his shoulder */}
      <Hand pose="open" x={58} y={46} rotate={180} scale={0.66} skin={SKIN.amina} sleeve={[PAL.navy, PAL.navyShade]} />
      <Motion x={60} y={66} dir={0} spread={40} n={2} len={7} gap={14} color={PAL.line} width={3} />
      <Motion x={60} y={66} dir={180} spread={40} n={2} len={7} gap={14} color={PAL.line} width={3} />
      {/* "Hello? Can you hear me?" No answer */}
      <Bubble x={76} y={14} w={34} h={30} tail="left">
        <QuestionMark x={93} y={29} size={24} color={PAL.sky} />
      </Bubble>
    </g>
  ),
} as Record<string, () => JSX.Element>;
