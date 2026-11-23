import type { JSX } from 'react';
import { Calendar, PAL, Shade, Shine } from '../kit';

/** A gold coin seen a little from above, centre (x, y). */
const coin = (x: number, y: number, r: number) => (
  <g>
    <ellipse cx={x} cy={y + 3} rx={r} ry={r * 0.5} fill={PAL.yellowShade} />
    <rect x={x - r} y={y} width={r * 2} height="3" fill={PAL.yellowShade} />
    <ellipse cx={x} cy={y} rx={r} ry={r * 0.5} fill={PAL.yellow} />
    <ellipse cx={x} cy={y} rx={r * 0.62} ry={r * 0.3} fill="none" stroke={PAL.yellowShade} strokeWidth="1.6" />
  </g>
);

export default {
  // "de betaaldag": the payday — a big calendar page with one day ringed in green, and on it a
  // stack of gold coins and a banknote: the day the pay comes in.
  'w.betaaldag': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Calendar x={10} y={16} w={82} h={84} mark={6} header={PAL.ok} headerShade={PAL.okShade} />
      {/* The banknote behind the coins */}
      <g transform="rotate(-10 92 82)">
        <rect x="70" y="70" width="40" height="24" rx="3" fill={PAL.green} />
        <Shade color={PAL.greenShade} opacity={1} at={[112, 82, 10, 16]}>
          <rect x="70" y="70" width="40" height="24" rx="3" fill={PAL.green} />
        </Shade>
        <circle cx="90" cy="82" r="6.4" fill={PAL.lime} />
      </g>
      {/* The coin stack */}
      <ellipse cx="88" cy="108" rx="18" ry="4" fill="#000" opacity=".14" />
      {coin(88, 102, 15)}
      {coin(88, 96, 15)}
      {coin(88, 90, 15)}
      {coin(88, 84, 15)}
      <Shine d="M78 82Q82 80 87 80" color={PAL.yellowShine} width={2.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
