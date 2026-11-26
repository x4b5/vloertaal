import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Ground, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de orderpicker": the order picker (the worker who collects the orders; also the small truck you stand
  // on to pick up high) — Jada stands in the yellow cage of an order-picker truck that has lifted her up
  // its steel mast to a high shelf of a blue rack; she reaches out with her hand scanner to a box there.
  // On the intro card the cage with Jada goes up the mast (once: she is lifted to the shelf).
  'w.orderpicker': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={58} cy={105} rx={52} ry={4} />
      {/* The rack on the right */}
      <path d="M78 10V104M110 10V104" stroke={PAL.blue} strokeWidth="4" />
      <path d="M76 36H112M76 70H112" stroke={PAL.orange} strokeWidth="4" />
      <rect x="82" y="20" width="24" height="15" rx="1.6" fill={PAL.card} />
      <rect x="94" y="20" width="12" height="15" rx="1.6" fill={PAL.cardShade} />
      <rect x="84" y="54" width="20" height="15" rx="1.6" fill={PAL.card} />
      <rect x="82" y="88" width="24" height="15" rx="1.6" fill={PAL.card} />
      {/* The truck's base and the mast */}
      <rect x="20" y="10" width="8" height="84" rx="1.6" fill={PAL.steel} />
      <rect x="25" y="10" width="3" height="84" fill={PAL.slate} opacity=".5" />
      <Shade color={PAL.yellowShade} opacity={1} at={[70, 98, 10, 12]}>
        <path d="M10 104V90Q10 86 14 86H62Q68 86 68 92V104Z" fill={PAL.yellow} />
      </Shade>
      <circle cx="20" cy="104" r="4" fill={PAL.slateDark} />
      <circle cx="58" cy="104" r="4" fill={PAL.slateDark} />
      {/* The cage with Jada, lifted up */}
      <Move kind="from" dy={40} once>
        <g transform="translate(0 10)">
        <path d="M44 40L50 58" stroke="#ffc929" strokeWidth="6.5" />
        <path d="M37 44L37 58M47 44L47 58" stroke={PAL.navy} strokeWidth="7" />
        <Shade color={PAL.yellowShade} opacity={1} at={[52, 30, 5, 16]}>
          <rect x="31" y="16" width="20" height="30" rx="7" fill="#ffc929" />
        </Shade>
        <g transform="translate(41 17) scale(0.34) translate(-60 -96)">
          <CastHead who="jada" expr="pleased" gaze={[1, -0.4]} bold />
        </g>
        {/* Her arm out with the hand scanner */}
        <path d="M48 24L64 26" stroke={SKIN.jada[0]} strokeWidth="5.5" />
        <rect x="62" y="20" width="14" height="9" rx="2.6" fill={PAL.slate} />
        <rect x="64" y="28" width="5" height="7" rx="1.6" fill={PAL.slateDark} />
        <rect x="72" y="22" width="3" height="5" rx="1" fill={PAL.red} />
        {/* The cage: floor and railing */}
        <rect x="26" y="56" width="34" height="6" rx="1.6" fill={PAL.yellowShade} />
        <path d="M28 56V40H58V56" fill="none" stroke={PAL.yellow} strokeWidth="3.2" />
        <path d="M28 48H58" stroke={PAL.yellow} strokeWidth="3.2" />
        <Shine d="M30 58H44" width={2} opacity={0.6} color={PAL.yellowShine} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
