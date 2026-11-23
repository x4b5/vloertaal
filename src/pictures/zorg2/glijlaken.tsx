import type { JSX } from 'react';
import { Arrow, Ground, Hand, Move, PAL, SKIN, Shine } from '../kit';

export default {
  // "het glijlaken": the slide sheet — a care bed from the side with a pillow; on the mattress lies the shiny
  // sky-blue slide sheet (a smooth double layer), the carer's hand holds its end; an arrow shows it slides
  // towards the head end.
  // On the intro card the sheet and the hand slide along the mattress to the head end (three rounds).
  'w.glijlaken': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={106} rx={52} ry={4} />
      {/* The bed */}
      <rect x="8" y="38" width="8" height="52" rx="3.5" fill={PAL.wood} />
      <rect x="10" y="80" width="100" height="9" rx="3" fill={PAL.slate} />
      <rect x="22" y="88" width="6" height="12" rx="2" fill={PAL.steel} />
      <rect x="92" y="88" width="6" height="12" rx="2" fill={PAL.steel} />
      <circle cx="25" cy="101" r="4.6" fill={PAL.slateDark} />
      <circle cx="95" cy="101" r="4.6" fill={PAL.slateDark} />
      <rect x="14" y="66" width="96" height="16" rx="5" fill={PAL.mist} />
      <rect x="14" y="66" width="96" height="6" rx="3" fill={PAL.paper} />
      {/* The pillow */}
      <rect x="18" y="54" width="28" height="14" rx="7" fill={PAL.paperShade} />
      <rect x="18" y="54" width="26" height="11" rx="5.5" fill={PAL.white} />
      {/* The slide sheet and the hand */}
      <Move kind="from" dx={22}>
        <rect x="40" y="58" width="58" height="12" rx="6" fill={PAL.skyShade} />
        <rect x="40" y="56" width="58" height="10" rx="5" fill={PAL.sky} />
        <Shine d="M46 59H82" color={PAL.ice} width={2.6} opacity={0.95} />
        <Hand pose="hold" x={110} y={64} rotate={-90} scale={0.55} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      </Move>
      <Arrow from={[92, 36]} to={[44, 36]} color={PAL.sky} width={7} head={12} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
