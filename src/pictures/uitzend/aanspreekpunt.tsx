import type { JSX } from 'react';
import { Bubble, Hand, PAL, QuestionMark, SKIN } from '../kit';
import { Bust } from '../bust';

export default {
  // "het aanspreekpunt": the contact person (the person you go to with questions) — Henk, friendly, with
  // a badge on a lanyard; a question in a bubble comes to him, and a hand points at him: go to him.
  'w.aanspreekpunt': () => (
    <g strokeLinejoin="round">
      <Bust who="henk" x={72} y={118} scale={0.66} expr="pleased" bold />
      {/* The lanyard and the badge */}
      <path d="M62 82L68 100M82 82L76 100" stroke={PAL.orange} strokeWidth="2.6" strokeLinecap="round" />
      <rect x="63" y="98" width="18" height="15" rx="2" fill={PAL.paperShade} transform="translate(0 1.6)" />
      <rect x="63" y="98" width="18" height="15" rx="2" fill={PAL.white} />
      <rect x="63" y="98" width="18" height="4.4" rx="2" fill={PAL.orange} />
      <circle cx="68.6" cy="107.4" r="3" fill={PAL.navy} />
      <path d="M73.4 106H78M73.4 109.4H77" stroke={PAL.line} strokeWidth="1.4" strokeLinecap="round" />
      {/* The question */}
      <Bubble x={8} y={10} w={36} h={30} tail="right">
        <QuestionMark x={26} y={25} size={22} color={PAL.sky} />
      </Bubble>
      {/* The hand pointing at him */}
      <Hand pose="point" x={22} y={106} rotate={62} scale={0.68} skin={SKIN.jada} sleeve={[PAL.yellow, PAL.yellowShade]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
