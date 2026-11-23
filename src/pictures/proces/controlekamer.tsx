import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A monitor: dark frame with a depth edge on the right, a dark screen; `children` is drawn on the screen. */
const monitor = (x: number, y: number, w: number, h: number, children: JSX.Element) => (
  <g>
    <rect x={x + 2.5} y={y + 1.5} width={w} height={h} rx="4" fill={PAL.slateDark} />
    <rect x={x} y={y} width={w} height={h} rx="4" fill={PAL.slate} />
    <rect x={x + 3.5} y={y + 3.5} width={w - 7} height={h - 7} rx="2" fill={PAL.slateDark} />
    {children}
  </g>
);

export default {
  // "de controlekamer": the control room — a wall of three screens (a line graph, two tanks joined by a pipe,
  // bars) over a long desk with a keyboard; one operator in a blue shirt sits in a dark chair with his back
  // to us, watching them.
  'w.controlekamer': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={105} rx={50} ry={4} />
      {/* The screens: left (a graph), right (bars), middle (the plant: two tanks and a pipe) */}
      {monitor(8, 18, 36, 30, (
        <path d="M15 40L22 34L28 37L35 27L39 30" fill="none" stroke={PAL.leaf} strokeWidth="2.6" />
      ))}
      {monitor(76, 18, 36, 30, (
        <g>
          <rect x="83" y="32" width="5" height="11" rx="1" fill={PAL.ice} />
          <rect x="91" y="27" width="5" height="16" rx="1" fill={PAL.orangeLight} />
          <rect x="99" y="35" width="5" height="8" rx="1" fill={PAL.leaf} />
        </g>
      ))}
      {monitor(38, 8, 44, 40, (
        <g>
          <path d="M51 26H69" stroke={PAL.sky} strokeWidth="3" />
          <rect x="44" y="14" width="11" height="22" rx="3" fill={PAL.ice} />
          <rect x="44" y="25" width="11" height="11" rx="2" fill={PAL.sky} />
          <rect x="65" y="17" width="11" height="19" rx="3" fill={PAL.ice} />
          <rect x="65" y="28" width="11" height="8" rx="2" fill={PAL.sky} />
          <circle cx="60" cy="26" r="2.6" fill={PAL.leaf} />
        </g>
      ))}
      {/* The long desk: top, front edge, legs */}
      <path d="M6 66L12 58H114L108 66Z" fill={PAL.card} />
      <rect x="6" y="66" width="102" height="7" rx="1.5" fill={PAL.cardShade} />
      <path d="M108 66L114 58V65L108 73Z" fill={PAL.cardDark} />
      <rect x="12" y="73" width="5" height="31" fill={PAL.steel} />
      <rect x="99" y="73" width="5" height="31" fill={PAL.slate} />
      <Shine d="M16 61H40" color={PAL.white} width={2.4} opacity={0.5} />
      {/* A keyboard on the desk */}
      <path d="M24 64L27 60H44L41 64Z" fill={PAL.mist} />
      {/* The chair: pole and foot */}
      <rect x="57.5" y="92" width="5" height="9" fill={PAL.slateDark} />
      <path d="M44 103H76" stroke={PAL.slateDark} strokeWidth="4" />
      {/* The operator from behind: shoulders, back of the head */}
      <path d="M40 92Q40 70 52 66H68Q80 70 80 92Z" fill={PAL.blue} />
      <path d="M70 67Q80 70 80 92H72Z" fill={PAL.blueShade} />
      <rect x="55" y="58" width="10" height="10" rx="3" fill="#d9946c" />
      <circle cx="49" cy="54" r="3.4" fill="#f0b791" />
      <circle cx="71" cy="54" r="3.4" fill="#d9946c" />
      <circle cx="60" cy="50" r="11.5" fill={PAL.brown} />
      <path d="M66 41Q72 46 71 55Q68 60 62 61Z" fill="#000" opacity=".18" />
      {/* The chair back in front of him */}
      <rect x="45" y="78" width="30" height="17" rx="6" fill={PAL.slate} />
      <rect x="64" y="78" width="11" height="17" rx="5" fill={PAL.slateDark} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
