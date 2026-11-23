import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

export default {
  // "het bedhek": the bed rail — a care bed from the side, a pillow and a green blanket; along its side the
  // wooden rail is up: two long bars on posts, so the client cannot fall out of bed.
  // On the intro card the rail comes up. Once (it is put up once).
  'w.bedhek': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={106} rx={52} ry={4} />
      {/* Bed: head board, frame, legs */}
      <rect x="8" y="34" width="8" height="58" rx="3.5" fill={PAL.slate} />
      <rect x="104" y="50" width="8" height="42" rx="3.5" fill={PAL.slate} />
      <rect x="10" y="82" width="100" height="9" rx="3" fill={PAL.slate} />
      <rect x="22" y="90" width="6" height="10" rx="2" fill={PAL.steel} />
      <rect x="92" y="90" width="6" height="10" rx="2" fill={PAL.steel} />
      <circle cx="25" cy="101" r="4.4" fill={PAL.slateDark} />
      <circle cx="95" cy="101" r="4.4" fill={PAL.slateDark} />
      {/* Mattress, pillow, blanket */}
      <rect x="16" y="68" width="88" height="15" rx="5" fill={PAL.mist} />
      <rect x="18" y="56" width="26" height="14" rx="7" fill={PAL.white} />
      <rect x="44" y="60" width="60" height="12" rx="5" fill={PAL.green} />
      {/* The rail */}
      <Move kind="from" dy={22} once>
        <path d="M26 46H94M26 60H94" stroke={PAL.cardShade} strokeWidth="7" />
        <path d="M26 45H94M26 59H94" stroke={PAL.card} strokeWidth="5" />
        <path d="M30 44V84M60 44V84M90 44V84" stroke={PAL.cardDark} strokeWidth="5" />
        <Shine d="M30 44H70" color={PAL.white} width={1.8} opacity={0.7} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
