import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shine } from '../kit';

const SK = SKIN.jada;
const drop = (x: number, y: number, r = 3.4) =>
  `M${x} ${y - r * 1.8}Q${x + r * 1.2} ${y} ${x + r} ${y + r * 0.7}A${r} ${r} 0 0 1 ${x - r} ${y + r * 0.7}Q${x - r * 1.2} ${y} ${x} ${y - r * 1.8}Z`;

export default {
  // "koelen": to cool (with cold water) — a tap at the top left runs a cold stream onto the back of a hand with a
  // red burn mark; the water splashes off. On the intro card the water keeps running (three rounds).
  'w.koelen': () => (
    <g>
      {/* The tap: wall plate, pipe and spout bending down */}
      <rect x="8" y="14" width="10" height="24" rx="3" fill={PAL.steel} />
      <path d="M16 22H40Q48 22 48 30V34" stroke={PAL.steel} strokeWidth="11" fill="none" strokeLinecap="round" />
      <path d="M16 20H40Q46 20 46 26" stroke={PAL.mist} strokeWidth="4" fill="none" strokeLinecap="round" />
      <rect x="40" y="33" width="14" height="6" rx="2" fill={PAL.slate} />
      <rect x="26" y="9" width="12" height="6" rx="2.4" fill={PAL.sky} />
      <path d="M32 15V20" stroke={PAL.steel} strokeWidth="3" />
      {/* The hand, back up, under the stream */}
      <Hand pose="open" x={78} y={96} rotate={-62} scale={1.05} skin={SK} sleeve={[PAL.green, PAL.greenShade]} />
      {/* The burn on the back of the hand */}
      <ellipse cx="54" cy="70" rx="9" ry="6.4" fill={PAL.red} opacity=".9" transform="rotate(-24 54 70)" />
      {/* The stream (still) */}
      <path d="M44 40V64M50 40V66M56 40V64" stroke={PAL.ice} strokeWidth="5" strokeLinecap="round" opacity=".85" />
      <path d="M47 40V66" stroke={PAL.sky} strokeWidth="3" strokeLinecap="round" opacity=".6" />
      {/* Running water drops */}
      <Move kind="from" dy={-22}>
        <path d={drop(46, 52)} fill={PAL.sky} />
        <path d={drop(54, 58, 3)} fill={PAL.sky} />
      </Move>
      {/* Splashes off the hand */}
      <path d={drop(30, 74, 3)} fill={PAL.sky} />
      <path d={drop(68, 74, 3)} fill={PAL.sky} />
      <Shine d="M40 44V58" color={PAL.white} width={2} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
