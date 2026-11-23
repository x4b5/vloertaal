import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shine } from '../kit';

/** A light bulb hanging screw-up, the middle of its globe at (x, y). */
const bulb = (x: number, y: number, glass: string, shade: string, thread: string) => (
  <g>
    <rect x={x - 7} y={y - 30} width="14" height="13" rx="2.5" fill={thread} />
    <path d={`M${x - 7} ${y - 26}H${x + 7}M${x - 7} ${y - 21.5}H${x + 7}`} stroke={PAL.slate} strokeWidth="1.6" opacity=".5" />
    <path d={`M${x - 8} ${y - 18}H${x + 8}L${x + 12} ${y - 10}A16 16 0 1 1 ${x - 12} ${y - 10}Z`} fill={glass} />
    <path d={`M${x + 12} ${y - 10}A16 16 0 0 1 ${x - 4} ${y + 15.4}A18 18 0 0 0 ${x + 12} ${y - 10}Z`} fill={shade} />
  </g>
);

export default {
  // "vervangen": to replace (to put a new one in) — a lamp socket hangs from the ceiling; a hand screws a
  // new, glowing yellow bulb into it, the old grey bulb with its broken wire lies to the left.
  // Once: first the old bulb comes out of the socket, then the hand brings the new one up into it.
  'w.vervangen': () => (
    <g strokeLinejoin="round">
      {/* The cord and the socket */}
      <path d="M68 4V14" stroke={PAL.slate} strokeWidth="3" />
      <rect x="58" y="12" width="20" height="16" rx="4" fill={PAL.slate} />
      <rect x="72" y="12" width="6" height="16" rx="2.5" fill={PAL.slateDark} />
      {/* The old bulb: out of the socket, down to the left */}
      <Move kind="from" dx={44} dy={-30} once>
        <g transform="rotate(-24 26 78)">
          {bulb(26, 78, PAL.mist, PAL.steel, PAL.line)}
          <path d="M22 66L25 73L28 69L31 76" fill="none" stroke={PAL.slate} strokeWidth="2" strokeLinecap="round" />
        </g>
      </Move>
      {/* The new bulb, held from below, comes up into the socket */}
      <Move kind="then" dy={30}>
        {bulb(68, 58, PAL.yellow, PAL.yellowShade, PAL.steel)}
        <Shine d="M58 50Q57 58 61 64" color={PAL.yellowShine} width={3.4} opacity={0.9} />
        <Hand pose="open" x={70} y={112} scale={0.8} skin={SKIN.amina} sleeve={['#2f8f3e', '#23722f']} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
