import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN } from '../kit';

const TINT = '#e3f5ff';

/** "Writing" in a rounded, joined script: a wavy line from (x, y), `w` long (no letters). */
const script = (x: number, y: number, w: number) => {
  const n = Math.max(2, Math.round(w / 7));
  const step = w / n;
  let d = `M${x} ${y}`;
  for (let i = 0; i < n; i++) d += `q${(step / 2).toFixed(1)} ${i % 2 ? 4.5 : -4.5} ${step.toFixed(1)} 0`;
  return d;
};

export default {
  // "invullen": to fill in (a form) — a form with three tinted fields (a label line over each); the
  // first field is written in, and a hand with a blue pen writes in the second one (lines only).
  // On the intro card the hand writes along the second field from left to right (three rounds: writing).
  'w.invullen': () => (
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* The form: a depth edge, the sheet, a navy title bar */}
      <rect x="12" y="16" width="74" height="92" rx="4" fill={PAL.paperShade} />
      <rect x="12" y="12" width="74" height="92" rx="4" fill={PAL.white} />
      <rect x="20" y="20" width="32" height="7" rx="2.5" fill={PAL.navy} />
      {[34, 56, 78].map((y, i) => (
        <g key={y}>
          <path d={`M20 ${y}H${i === 1 ? 38 : 44}`} stroke={PAL.line} strokeWidth="2.6" />
          <rect x="20" y={y + 4} width="58" height="13" rx="2.5" fill={TINT} />
          <rect x="20" y={y + 15} width="58" height="2" rx="1" fill={PAL.ice} />
        </g>
      ))}
      {/* Field one is filled in */}
      <path d={script(24, 45, 42)} fill="none" stroke={PAL.blueShade} strokeWidth="2.6" />
      {/* Field two is being filled in */}
      <Move kind="grow" grow={0.1}>
        <path d={script(24, 67, 28)} fill="none" stroke={PAL.blueShade} strokeWidth="2.6" />
      </Move>
      <Move kind="from" dx={-26}>
        {/* The hand holding the pen, its tip on the end of the written line */}
        <Hand pose="hold" x={90} y={100} rotate={-45} scale={0.74} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} />
        <g transform="translate(53 67) rotate(38.8)">
          <path d="M0 0L9 -4V4Z" fill={PAL.mist} />
          <path d="M0 0L3 -1.4V1.4Z" fill={PAL.ink} />
          <rect x="9" y="-4.2" width="44" height="8.4" rx="2" fill={PAL.blue} />
          <rect x="9" y="0.8" width="44" height="3.4" rx="1.4" fill={PAL.blueShade} />
          <rect x="50" y="-4.6" width="9" height="9.2" rx="2.4" fill={PAL.slate} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
