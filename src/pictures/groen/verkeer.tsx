import type { JSX } from 'react';
import { Motion, Move, PAL, Shine } from '../kit';

/** A car from the side, facing right, its front bumper at x + 52: body, cabin windows and two wheels. */
const car = (x: number, y: number, body: string, shade: string) => (
  <g>
    <path d={`M${x} ${y + 18}V${y + 10}Q${x} ${y + 6} ${x + 6} ${y + 6}H${x + 12}L${x + 20} ${y - 4}H${x + 36}L${x + 44} ${y + 6}H${x + 48}Q${x + 54} ${y + 6} ${x + 54} ${y + 12}V${y + 18}Z`} fill={body} />
    <rect x={x} y={y + 14} width="54" height="5" rx="2" fill={shade} />
    <path d={`M${x + 15} ${y + 6}L${x + 21} ${y - 1}H${x + 27}V${y + 6}ZM${x + 30} ${y + 6}V${y - 1}H${x + 35}L${x + 41} ${y + 6}Z`} fill={PAL.ice} />
    <rect x={x + 49} y={y + 9} width="5" height="4" rx="1.4" fill={PAL.yellowLight} />
    {[x + 13, x + 42].map((cx) => (
      <g key={cx}>
        <circle cx={cx} cy={y + 19} r="7" fill={PAL.ink} />
        <circle cx={cx} cy={y + 19} r="2.8" fill={PAL.steel} />
      </g>
    ))}
  </g>
);

export default {
  // "het verkeer": the traffic — a stretch of road with a dashed middle line: a red car drives right in
  // the near lane, a blue van drives left in the far lane, speed lines behind both.
  // Three rounds on the intro card: the car and the van drive past each other (traffic keeps flowing).
  'w.verkeer': () => (
    <g strokeLinejoin="round">
      {/* The road */}
      <rect x="6" y="56" width="108" height="52" rx="4" fill={PAL.slate} />
      <path d="M6 56H114V60H6Z" fill={PAL.steel} />
      <path d="M12 82H26M40 82H54M68 82H82M96 82H108" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" />
      {/* The van in the far lane, driving left */}
      <Move kind="from" dx={26}>
        <g>
          <path d="M60 76V54Q60 48 66 48H104Q108 48 108 52V76Z" fill={PAL.blue} />
          <path d="M60 60L66 50H74V60Z" fill={PAL.ice} />
          <rect x="60" y="70" width="48" height="6" rx="2" fill={PAL.blueShade} />
          <rect x="76" y="52" width="28" height="12" rx="2" fill={PAL.blueLight} opacity=".5" />
          <rect x="58" y="64" width="4" height="4" rx="1.4" fill={PAL.yellowLight} />
          {[70, 98].map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy={77} r="6.4" fill={PAL.ink} />
              <circle cx={cx} cy={77} r="2.6" fill={PAL.steel} />
            </g>
          ))}
          <Motion x={110} y={62} dir={0} spread={40} n={3} len={6} gap={2} color={PAL.mist} width={2.6} />
        </g>
      </Move>
      {/* The car in the near lane, driving right */}
      <Move kind="from" dx={-26}>
        <g>
          {car(30, 80, PAL.red, PAL.redShade)}
          <Shine d="M36 88H46" width={2.4} opacity={0.6} />
          <Motion x={28} y={90} dir={180} spread={40} n={3} len={8} gap={2} color={PAL.mist} width={2.6} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
