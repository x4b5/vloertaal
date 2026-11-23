import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "overdag slapen": to sleep in the daytime (after a night shift) — Jada asleep in bed under a blue
  // blanket, a purple sleep mask over her eyes; above her the window with its dark curtains closed, the
  // bright sun shining outside, next to it.
  'w.overdagslapen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={58} cy={105} rx={50} ry={3.5} />
      {/* The sun outside, behind the window */}
      <circle cx="98" cy="22" r="11" fill={PAL.yellow} />
      <path d="M98 5V8.5M98 35.5V39M114 22H110.5M86 10L88.5 12.5M110 10L107.5 12.5M110 34L107.5 31.5" stroke={PAL.yellow} strokeWidth="3.2" />
      {/* The window frame and the closed dark curtains */}
      <rect x="40" y="14" width="46" height="42" rx="3" fill={PAL.mist} />
      <path d="M40 14H63V56H42Q46 35 40 14Z" fill={PAL.navy} />
      <path d="M63 14H86Q81 35 84 56H63Z" fill={PAL.navyShade} />
      <path d="M52 18V52M74 18V52" stroke={PAL.navyShade} strokeWidth="2" opacity=".8" />
      <rect x="36" y="11" width="54" height="5" rx="2.5" fill={PAL.slate} />
      {/* The bed: head board, mattress, pillow */}
      <rect x="10" y="58" width="8" height="46" rx="3" fill={PAL.wood} />
      <rect x="12" y="84" width="96" height="14" rx="3" fill={PAL.cardDark} />
      <rect x="102" y="88" width="6" height="16" rx="2" fill={PAL.cardDark} />
      <rect x="14" y="98" width="6" height="6" rx="2" fill={PAL.cardDark} />
      <rect x="14" y="76" width="92" height="10" rx="4" fill={PAL.paper} />
      <rect x="16" y="62" width="30" height="18" rx="7" fill={PAL.white} />
      <rect x="16" y="74" width="30" height="6" rx="3" fill={PAL.paperShade} />
      {/* Jada asleep, her head on the pillow, with the sleep mask */}
      <g transform="translate(50 73) rotate(-78) scale(0.58) translate(-60 -96)">
        <CastHead who="jada" expr="neutral" gaze={[0, 0]} bold />
        <rect x="36" y="49" width="48" height="15" rx="6.5" fill={PAL.purple} />
        <path d="M42 54H78" stroke={PAL.purpleLight} strokeWidth="3" />
      </g>
      {/* The blanket over her */}
      <path d="M44 68Q60 62 104 66Q108 66 108 72V86Q108 90 104 90H48Q42 90 42 84Z" fill={PAL.sky} />
      <path d="M96 66Q108 66 108 72V86Q108 90 104 90H96Z" fill={PAL.skyShade} />
      <path d="M44 68Q50 68 52 72V90H48Q42 90 42 84Z" fill={PAL.ice} />
      <Shine d="M58 70Q74 66 88 68" width={3} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
