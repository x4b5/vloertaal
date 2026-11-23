import type { JSX } from 'react';
import { PAL, SKIN, Shade } from '../kit';
import { Bust } from '../bust';

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
  // "de oppas": the babysitter — in the evening at the child's home: Amina sits on the sofa next to the
  // toddler and reads it a picture book; the moon is in the window.
  'w.oppas': () => (
    <g strokeLinejoin="round">
      {/* The window with the moon */}
      <rect x="78" y="10" width="32" height="30" rx="3" fill={PAL.navy} />
      <path d="M94 10V40M78 25H110" stroke={PAL.mist} strokeWidth="2.6" />
      <path d="M86 14A7 7 0 1 0 93 23A5.4 5.4 0 1 1 86 14Z" fill={PAL.yellow} />
      {/* The back of the sofa */}
      <rect x="8" y="58" width="104" height="40" rx="10" fill={PAL.purple} />
      {/* Amina */}
      <Bust who="amina" x={40} y={106} scale={0.66} expr="pleased" bold />
      {/* The toddler next to her */}
      <rect x="70" y="80" width="26" height="24" rx="10" fill={PAL.sky} />
      <ChildHead x={83} y={68} r={14} skin={SKIN.henk} hair={PAL.yellowShade} />
      {/* The open picture book between them */}
      <path d="M44 84L62 80V100L44 104Z" fill={PAL.white} />
      <path d="M62 80L80 84V104L62 100Z" fill={PAL.paperShade} />
      <circle cx="53" cy="90" r="4" fill={PAL.red} />
      <path d="M66 96L71 88L76 97Z" fill={PAL.green} />
      <path d="M44 104L62 100L80 104V107L62 103L44 107Z" fill={PAL.red} />
      <circle cx="45" cy="100" r="4.2" fill={SKIN.amina[0]} />
      {/* The seat of the sofa and its arms */}
      <rect x="8" y="98" width="104" height="10" rx="4" fill={PAL.purpleShade} />
      <rect x="4" y="74" width="12" height="34" rx="5" fill={PAL.purpleLight} />
      <rect x="104" y="74" width="12" height="34" rx="5" fill={PAL.purpleShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
