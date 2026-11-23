import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

/** The tines of the fan: from the neck (56, 74) out to the ends along the bottom: [x, y]. */
const ENDS: [number, number][] = [[16, 92], [22, 98], [30, 102], [40, 104], [50, 104], [60, 102], [68, 98]];

export default {
  // "de hark": the rake — a fan rake for leaves and clippings: a long wooden handle down from the top
  // right, a wide fan of steel tines at the bottom with a cross bar, a little heap of cut grass and
  // leaves next to it.
  // On the intro card the rake pulls along the ground to the heap (three rounds: the tool at work).
  'w.hark': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The heap the rake has pulled together */}
      <path d="M72 104Q76 88 90 86Q104 88 108 104Z" fill={PAL.leafShade} />
      <path d="M80 92L88 96M94 90L100 96M86 100L96 98" stroke={PAL.card} strokeWidth="3" />
      <ellipse cx="66" cy="105" rx="46" ry="3.4" fill="#000" opacity=".14" />
      <Move kind="from" dx={-24}>
        {/* The handle */}
        <path d="M58 72L98 12" stroke={PAL.wood} strokeWidth="6" />
        <path d="M74 50L94 20" stroke={PAL.card} strokeWidth="2" opacity=".8" />
        {/* The tines and the cross bar */}
        <path d={ENDS.map(([x, y]) => `M56 74Q${(56 + x) / 2} ${(74 + y) / 2 - 4} ${x} ${y}`).join('')} fill="none" stroke={PAL.steel} strokeWidth="3" />
        <path d={ENDS.map(([x, y]) => `M${x} ${y}l-2 3`).join('')} stroke={PAL.slate} strokeWidth="3" />
        <path d="M30 88Q44 96 62 88" fill="none" stroke={PAL.slate} strokeWidth="3.4" />
        <rect x="52" y="68" width="10" height="10" rx="3" fill={PAL.slate} />
        <Shine d="M66 58L78 40" width={2.6} opacity={0.5} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
