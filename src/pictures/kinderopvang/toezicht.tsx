import type { JSX } from 'react';
import { Ground, PAL, SKIN, Shade } from '../kit';
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
  // "het toezicht": the supervision — Amina, the worker, stands at the back and keeps her eyes on two
  // toddlers playing in front of her (a ball, a block); a light blue field of view goes from her eyes
  // over both children.
  'w.toezicht': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={74} cy={106} rx={38} ry={3.5} />
      {/* Her field of view */}
      <path d="M40 40L112 74V106H52Z" fill={PAL.ice} opacity=".45" />
      <Bust who="amina" x={30} y={112} scale={0.72} expr="pleased" bold />
      {/* The first toddler, with a ball */}
      <rect x="58" y="86" width="22" height="20" rx="8" fill={PAL.orange} />
      <ChildHead x={69} y={76} r={11} skin={SKIN.bram} hair={PAL.cardDark} />
      <circle cx="54" cy="99" r="7" fill={PAL.red} />
      <path d="M48 97Q54 101 60 96" fill="none" stroke={PAL.white} strokeWidth="2" />
      {/* The second toddler, with a block */}
      <rect x="86" y="86" width="22" height="20" rx="8" fill={PAL.green} />
      <ChildHead x={97} y={76} r={11} skin={SKIN.jada} hair="#2e201a" />
      <rect x="84" y="94" width="11" height="11" rx="2" fill={PAL.yellow} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
