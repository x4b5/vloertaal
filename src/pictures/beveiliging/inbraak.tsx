import type { JSX } from 'react';
import { ExclaimMark, Move, PAL, Shine } from '../kit';

export default {
  // "de inbraak": the break-in (someone gets in to steal) — a window with its pane smashed (a hole with
  // white cracks round it), a red crowbar wedged in under the sash to force it, and a red alarm badge
  // with an exclamation mark.
  // Once: the crowbar levers the window open (it turns up from below).
  'w.inbraak': () => (
    <g strokeLinejoin="round">
      {/* The window frame, its depth edge */}
      <rect x="14" y="20" width="72" height="80" rx="4" fill={PAL.steel} transform="translate(3 3)" />
      <rect x="14" y="20" width="72" height="80" rx="4" fill={PAL.paper} />
      {/* The panes */}
      <rect x="21" y="27" width="58" height="30" rx="2" fill={PAL.ice} />
      <rect x="21" y="63" width="58" height="30" rx="2" fill={PAL.ice} />
      <path d="M62 27H79V36Z" fill={PAL.white} opacity=".5" />
      {/* The hole in the lower pane, its cracks */}
      <path d="M40 70L48 66L54 72L50 80L42 82L37 76Z" fill={PAL.slateDark} />
      <path d="M48 66L52 63M54 72L66 68M50 80L56 89M42 82L36 89M37 76L24 74M44 68L38 64M54 72L70 78M48 66L60 64" stroke={PAL.white} strokeWidth="1.8" strokeLinecap="round" />
      <Shine d="M25 31H44" width={2.6} opacity={0.8} />
      {/* The crowbar under the sash */}
      <Move kind="turn" turn={30} at={[80, 61]} once>
        <path d="M80 61L108 102" stroke={PAL.red} strokeWidth="7" strokeLinecap="round" />
        <path d="M80 61L84 56L76 56" fill="none" stroke={PAL.red} strokeWidth="6" strokeLinecap="round" />
        <path d="M86 70L104 96" stroke={PAL.redShade} strokeWidth="2.2" strokeLinecap="round" />
      </Move>
      {/* The alarm badge */}
      <circle cx="94" cy="26" r="15" fill={PAL.redShade} />
      <circle cx="94" cy="24" r="15" fill={PAL.red} />
      <ExclaimMark x={94} y={24} size={22} color={PAL.white} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
