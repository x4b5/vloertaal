import type { JSX } from 'react';
import { Ground, PAL, SKIN, Shade, Shine, Tick } from '../kit';

/** A toddler's head in the cast's flat style (as in group24), centred on (x, y), radius `r`. */
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
      <path d="M-4.2 7Q0 11.4 4.2 7" fill="none" stroke={PAL.mouth} strokeWidth="1.8" strokeLinecap="round" />
    </g>
  );
}

export default {
  // "zindelijk": potty-trained — a happy toddler in a long yellow T-shirt sits on the big toilet, on a
  // sky blue child's seat, its feet on a green step; a green tick: it can use the toilet by itself.
  'w.zindelijk': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={56} cy={104} rx={40} ry={4} />
      {/* The toilet: cistern and bowl */}
      <rect x="28" y="22" width="56" height="34" rx="5" fill={PAL.paper} />
      <rect x="72" y="22" width="12" height="34" rx="5" fill={PAL.paperShade} />
      <rect x="50" y="17" width="12" height="6" rx="2" fill={PAL.mist} />
      <Shade color={PAL.paperShade} opacity={1} at={[90, 80, 14, 30]}>
        <path d="M22 62Q22 56 28 56H84Q90 56 90 62Q90 80 76 88L74 100H38L36 88Q22 80 22 62Z" fill={PAL.paper} />
      </Shade>
      {/* The child's seat on the rim */}
      <ellipse cx="56" cy="60" rx="30" ry="6" fill={PAL.sky} />
      {/* The child: legs, the long shirt, arms, head */}
      <path d="M48 70V90M64 70V90" stroke={SKIN.jada[0]} strokeWidth="8" />
      <path d="M44 92H52M60 92H68" stroke={PAL.red} strokeWidth="6" />
      <Shade color={PAL.yellowShade} opacity={1} at={[74, 56, 6, 20]}>
        <path d="M42 46Q42 38 50 38H62Q70 38 70 46V72Q56 76 42 72Z" fill={PAL.yellow} />
      </Shade>
      <path d="M42 46L36 62M70 46L76 62" stroke={PAL.yellow} strokeWidth="7" />
      <circle cx="36" cy="64" r="4" fill={SKIN.jada[0]} />
      <circle cx="76" cy="64" r="4" fill={SKIN.jada[1]} />
      <ChildHead x={56} y={26} r={13} skin={SKIN.jada} hair={PAL.ink} />
      {/* The step */}
      <rect x="32" y="94" width="48" height="10" rx="3" fill={PAL.green} />
      <rect x="70" y="94" width="10" height="10" rx="3" fill={PAL.greenShade} />
      <Shine d="M27 64Q28 74 34 80" width={3} opacity={0.8} />
      <Tick x={98} y={30} r={13} color={PAL.ok} shade={PAL.okShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
