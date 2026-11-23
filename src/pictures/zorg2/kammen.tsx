import type { JSX } from 'react';
import { Bust } from '../bust';
import { Hand, Move, PAL, SKIN } from '../kit';

export default {
  // "kammen": to comb — the carer's hand pulls an orange comb through Henk's (the client's) grey hair,
  // its teeth in his hair, the handle out to the right.
  // On the intro card the comb goes through his hair from the left (three rounds).
  'w.kammen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Bust who="henk" x={56} y={160} scale={1.05} expr="pleased" bold />
      <Move kind="from" dx={-24}>
        <g transform="translate(0 9)">
        {/* The comb: teeth down into the hair, a long handle */}
        <path d="M30 40H76" stroke={PAL.orangeShade} strokeWidth="9" />
        <path d="M30 39H76" stroke={PAL.orange} strokeWidth="7" />
        <path d="M33 44V54M38 44V55M43 44V55M48 44V55M53 44V55M58 44V55M63 44V55M68 44V55M73 44V54" stroke={PAL.orange} strokeWidth="2.8" />
        <path d="M76 40H96" stroke={PAL.orangeShade} strokeWidth="7" />
        <path d="M76 39H96" stroke={PAL.orange} strokeWidth="5" />
        <Hand pose="hold" x={110} y={42} rotate={-90} scale={0.6} skin={SKIN.amina} sleeve={[PAL.sky, PAL.skyShade]} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
