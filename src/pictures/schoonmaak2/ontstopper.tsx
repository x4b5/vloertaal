import type { JSX } from 'react';
import { Motion, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de ontstopper": the plunger — a red rubber cup on a long wooden handle, pressed down on a drain in
  // the floor, with a little water round it.
  // Three rounds: the plunger pumps down onto the drain (its use).
  'w.ontstopper': () => (
    <g strokeLinejoin="round">
      {/* The floor drain and a little water */}
      <ellipse cx="60" cy="100" rx="40" ry="7" fill={PAL.ice} opacity=".8" />
      <ellipse cx="60" cy="99" rx="26" ry="5" fill={PAL.slate} />
      <Move kind="from" dy={-24}>
        {/* The handle */}
        <rect x="55" y="12" width="10" height="64" rx="4" fill={PAL.wood} />
        <rect x="61" y="12" width="4" height="64" rx="2" fill={PAL.cardDark} />
        <rect x="54" y="10" width="12" height="7" rx="3.5" fill={PAL.cardDark} />
        <Shine d="M58 22V60" width={2.2} opacity={0.5} />
        {/* The rubber cup, squashed wide on the drain */}
        <Shade color={PAL.redShade} opacity={1} at={[92, 90, 18, 20]}>
          <path d="M28 98Q28 72 60 68Q92 72 92 98Z" fill={PAL.red} />
        </Shade>
        <ellipse cx="60" cy="98" rx="32" ry="5" fill={PAL.redShade} />
        <Shine d="M36 88Q38 78 48 74" width={3.4} opacity={0.55} />
      </Move>
      <Motion x={20} y={70} dir={-150} spread={50} n={2} len={8} />
      <Motion x={100} y={70} dir={-30} spread={50} n={2} len={8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
