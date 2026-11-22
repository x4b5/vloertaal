import type { JSX } from 'react';
import { PAL, Shine, r1 } from '../kit';

/** Rubber: the tops of the tread blocks, the shaded tyre shoulder, the deep grooves. */
const RUB = { top: '#56656f', body: PAL.slate, side: PAL.slateDark, groove: '#1b232a' };

/**
 * The tread seen face on, running up and down and curving away from us at both ends: a point of it
 * at u (-1 left edge .. 1 right edge) and v (-1 top .. 1 bottom).
 */
const TH = 1.15;
const at = (u: number, v: number): [number, number] => {
  const y = 59 + (46 * Math.sin(v * TH)) / Math.sin(TH);
  const squeeze = 0.86 + 0.14 * Math.cos(v * TH);
  return [r1(60 + u * 36 * squeeze), r1(y)];
};
/** A line over the tread from (u0, v0) to (u1, v1), sampled so it follows the curve. */
const line = (u0: number, v0: number, u1: number, v1: number) => {
  const n = 8;
  return `M${Array.from({ length: n + 1 }, (_, i) => at(u0 + ((u1 - u0) * i) / n, v0 + ((v1 - v0) * i) / n).join(' ')).join('L')}`;
};
/** A closed area of the tread between u0..u1 and v0..v1. */
const area = (u0: number, u1: number, v0: number, v1: number) => {
  const n = 16;
  const right = Array.from({ length: n + 1 }, (_, i) => at(u1, v0 + ((v1 - v0) * i) / n).join(' '));
  const left = Array.from({ length: n + 1 }, (_, i) => at(u0, v1 - ((v1 - v0) * i) / n).join(' '));
  return `M${right.join('L')}L${left.join('L')}Z`;
};
/** The chevrons: lateral grooves rising from the centre rib to the shoulders. */
const CHEV = [-1.05, -0.75, -0.45, -0.15, 0.15, 0.45, 0.75, 1.05];

export default {
  // "het bandenprofiel": the tyre tread — a close-up of a tyre's running surface, face on and curving away
  // at the top and bottom: deep dark grooves cutting chunky V-shaped tread blocks, shoulders at both
  // sides, and a yellow tread depth gauge with its steel pin down in a groove.
  'w.bandenprofiel': () => (
    <g strokeLinejoin="round">
      {/* The shoulders (the tyre's sides), the right one in shade */}
      <path d={area(-1.16, 0, -1, 1)} fill={RUB.body} />
      <path d={area(0, 1.16, -1, 1)} fill={RUB.side} />
      {/* The running surface: the block tops */}
      <path d={area(-1, 1, -1, 1)} fill={RUB.top} />
      {/* The two straight grooves round the tyre */}
      <path d={line(-0.36, -1, -0.36, 1) + line(0.36, -1, 0.36, 1)} stroke={RUB.groove} strokeWidth="6" fill="none" />
      {/* The V-shaped lateral grooves */}
      {CHEV.map((v) => (
        <path key={v} d={line(-0.36, v, -1, v - 0.2) + line(0.36, v, 1, v - 0.2) + line(-0.36, v + 0.12, 0, v - 0.02) + line(0.36, v + 0.12, 0, v - 0.02)} stroke={RUB.groove} strokeWidth="4.2" strokeLinecap="round" fill="none" />
      ))}
      <Shine d={line(-0.72, -0.62, -0.72, -0.02)} color={PAL.mist} width={2.6} opacity={0.5} />
      {/* The tread depth gauge: a yellow pen body, a steel collar and its pin down in the right groove */}
      <g transform="translate(73 70) rotate(-35)">
        <rect x="-2" y="-1.6" width="9" height="3.2" rx="1.4" fill={PAL.mist} />
        <rect x="6" y="-5" width="9" height="10" rx="2" fill={PAL.steel} />
        <rect x="14" y="-6.5" width="30" height="13" rx="5" fill={PAL.yellow} />
        <rect x="14" y="1.5" width="30" height="5" rx="2.5" fill={PAL.yellowShade} />
        <path d="M18 -3.2H38" stroke={PAL.yellowShine} strokeWidth="2.4" strokeLinecap="round" opacity=".85" />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
