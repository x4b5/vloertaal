import type { JSX } from 'react';
import { Move, PAL, Tick } from '../kit';

/** A closed door in a frame, seen straight on, its left edge at x. */
const door = (x: number) => (
  <g key={x}>
    <rect x={x} y="40" width="28" height="56" rx="2" fill={PAL.mist} />
    <rect x={x + 3} y="43" width="22" height="53" rx="1.5" fill={PAL.card} />
    <rect x={x + 19} y="43" width="6" height="53" fill={PAL.cardShade} />
    <circle cx={x + 18} cy="72" r="2.4" fill={PAL.slate} />
  </g>
);

export default {
  // "de ronde": the round (a walk past every room) — three closed doors in a row, a blue route line
  // walks along under them and turns back at the end, and each door has a green tick above it: all checked.
  // Once: the route grows from the left past the three doors, then the ticks appear.
  'w.ronde': () => (
    <g strokeLinejoin="round">
      <rect x="6" y="96" width="108" height="4" rx="2" fill={PAL.mist} />
      {door(10)}
      {door(46)}
      {door(82)}
      {/* The route along the doors and back */}
      <Move kind="grow" grow={0.1} once>
        <path d="M10 106H98Q110 106 110 96" fill="none" stroke={PAL.sky} strokeWidth="5" strokeLinecap="round" strokeDasharray="7 6" />
      </Move>
      <Move kind="show">
        <Tick x={24} y={26} r={11} color={PAL.ok} shade={PAL.okShade} />
        <Tick x={60} y={26} r={11} color={PAL.ok} shade={PAL.okShade} />
        <Tick x={96} y={26} r={11} color={PAL.ok} shade={PAL.okShade} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
