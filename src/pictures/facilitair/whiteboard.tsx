import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

export default {
  // "het whiteboard": the whiteboard — a white board in a grey frame on a stand with wheels, a blue line
  // drawn on it in marker and a blue marker at the end of the line; a tray with a red marker and the eraser.
  // On the intro card the marker draws the line (three rounds: you write on it again and again).
  'w.whiteboard': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={46} ry={4} />
      {/* The stand */}
      <path d="M22 76L16 100M98 76L104 100" stroke={PAL.steel} strokeWidth="4.5" strokeLinecap="round" />
      <path d="M8 100H28M92 100H112" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      <circle cx="10" cy="104" r="3" fill={PAL.slateDark} />
      <circle cx="26" cy="104" r="3" fill={PAL.slateDark} />
      <circle cx="94" cy="104" r="3" fill={PAL.slateDark} />
      <circle cx="110" cy="104" r="3" fill={PAL.slateDark} />
      {/* The board: frame, then the white face */}
      <rect x="8" y="12" width="104" height="68" rx="4" fill={PAL.steel} />
      <rect x="12" y="16" width="96" height="60" rx="2" fill={PAL.white} />
      <path d="M90 16H108V76H70Z" fill={PAL.paper} />
      <Shine d="M18 22H40" color={PAL.paperShade} width={3} opacity={1} />
      {/* The tray with a red marker and the eraser */}
      <rect x="20" y="80" width="80" height="5" rx="2" fill={PAL.slate} />
      <rect x="30" y="76" width="16" height="4.5" rx="2" fill={PAL.red} />
      <rect x="72" y="74" width="18" height="7" rx="2" fill={PAL.slateDark} />
      <rect x="72" y="74" width="18" height="3" rx="1.5" fill={PAL.yellow} />
      {/* The line drawn in blue */}
      <Move kind="grow" grow={0.1}>
        <path d="M22 64L40 44L54 56L74 30" fill="none" stroke={PAL.blue} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </Move>
      {/* The marker at the end of the line */}
      <Move kind="from" dx={-48} dy={30}>
        <g transform="rotate(35 74 30)">
          <path d="M71.5 36L74 30L76.5 36Z" fill={PAL.blue} />
          <rect x="70" y="36" width="8" height="10" fill={PAL.white} />
          <rect x="70" y="44" width="8" height="20" rx="2" fill={PAL.blue} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
