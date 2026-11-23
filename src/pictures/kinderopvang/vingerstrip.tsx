import type { JSX } from 'react';
import { Hand, PAL, SKIN, Shade, Shine, Tick } from '../kit';

export default {
  // "de vingerstrip": the finger guard — a door stands open; over the gap at its hinge side runs a long
  // blue rubber strip from top to bottom, so small fingers cannot get in. A child's hand rests on the
  // strip, safe; a green tick.
  'w.vingerstrip': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The wall and the door frame */}
      <rect x="10" y="10" width="30" height="98" rx="2" fill={PAL.mist} />
      <rect x="30" y="10" width="10" height="98" fill={PAL.steel} />
      {/* The open door, seen at an angle */}
      <Shade color={PAL.cardShade} opacity={1} at={[96, 60, 12, 60]}>
        <path d="M48 12L94 22V100L48 108Z" fill={PAL.card} />
      </Shade>
      <rect x="82" y="56" width="6" height="16" rx="3" fill={PAL.slate} />
      {/* The finger strip over the gap, top to bottom */}
      <path d="M36 10Q44 10 48 12V108Q44 110 36 108Z" fill={PAL.sky} />
      <path d="M43 10.5Q46 11 48 12V108Q46 109 43 109Z" fill={PAL.skyShade} />
      <Shine d="M39 16V44" width={2.4} opacity={0.7} />
      {/* The child's hand on the strip */}
      <Hand pose="open" x={46} y={96} rotate={-10} scale={0.42} skin={SKIN.jada} />
      <Tick x={92} y={18} r={13} color={PAL.green} shade={PAL.greenShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
