import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Arrow, Ground, Move, PAL } from '../kit';

export default {
  // "de werkhoogte": the working height — the carer (Henk, in a sky-blue tunic) stands straight next to a care
  // bed; the mattress is at the height of his hips (a dashed line); a double arrow under the bed: it goes up
  // and down.
  // On the intro card the bed goes up from low to his hip height. Once and slowly (it is set once).
  'w.werkhoogte': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={64} cy={105} rx={52} ry={4} />
      {/* The carer, standing straight */}
      <path d="M22 68L20 102M30 68L32 102" stroke={PAL.navy} strokeWidth="8" />
      <ellipse cx="19" cy="103" rx="5.6" ry="3" fill={PAL.slateDark} />
      <ellipse cx="34" cy="103" rx="5.6" ry="3" fill={PAL.slateDark} />
      <rect x="14" y="34" width="24" height="38" rx="8" fill={PAL.sky} />
      <rect x="30" y="34" width="8" height="38" rx="4" fill={PAL.skyShade} />
      <g transform="translate(26 36) scale(0.4) translate(-60 -96)">
        <CastHead who="henk" expr="pleased" />
      </g>
      {/* The bed's base and lift */}
      <rect x="48" y="94" width="62" height="6" rx="3" fill={PAL.steel} />
      <circle cx="54" cy="101" r="4.4" fill={PAL.slateDark} />
      <circle cx="104" cy="101" r="4.4" fill={PAL.slateDark} />
      <rect x="74" y="74" width="10" height="22" fill={PAL.slate} />
      <Arrow from={[96, 80]} to={[96, 92]} color={PAL.orange} width={4} head={6} />
      <Arrow from={[96, 86]} to={[96, 74]} color={PAL.orange} width={4} head={6} />
      {/* The bed top: frame and mattress, at hip height */}
      <Move kind="from" dy={24} once>
        <rect x="46" y="70" width="66" height="8" rx="3" fill={PAL.slate} />
        <rect x="46" y="60" width="66" height="12" rx="4" fill={PAL.mist} />
        <rect x="46" y="60" width="66" height="5" rx="2.5" fill={PAL.paper} />
        <rect x="108" y="48" width="6" height="30" rx="2.5" fill={PAL.wood} />
      </Move>
      {/* Hip height: a dashed line from his hips to the mattress */}
      <path d="M40 64H106" stroke={PAL.orange} strokeWidth="2.6" strokeDasharray="4 5" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
