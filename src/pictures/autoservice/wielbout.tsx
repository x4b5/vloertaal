import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The chrome: lit top face and end face, the front face, the shaded under face. */
const CH = { light: PAL.paper, front: PAL.mist, low: PAL.steel };

/**
 * A wheel bolt lying on its side, along the x axis: its hex head at x = 0 (its end face turned to the
 * left, towards us), the conical seat and the threaded shank pointing right, centred on y = 0.
 * `s` is the hex side (the head is 2s high); the shank is `len` long. Placed with a transform.
 */
const bolt = (s: number, len: number, key: string) => {
  const hx = s * 1.05;
  const w = s * 0.42;
  const cone = s * 0.6;
  const cr = s * 0.8;
  const sh = s * 0.5;
  const x2 = hx + cone;
  const tip = x2 + len;
  const threads: JSX.Element[] = [];
  for (let x = x2 + s * 0.55; x < tip - s * 0.25; x += s * 0.32) {
    threads.push(<path key={x} d={`M${r1(x + s * 0.12)} ${r1(-sh + 0.6)}L${r1(x - s * 0.12)} ${r1(sh - 0.6)}`} stroke={PAL.slate} strokeOpacity={0.45} strokeWidth={Math.max(1.4, s * 0.12)} strokeLinecap="round" />);
  }
  return (
    <g key={key} strokeLinejoin="round">
      {/* The threaded shank, rounded at the tip, its underside in shade */}
      <rect x={hx} y={-sh} width={tip - hx} height={sh * 2} rx={sh * 0.7} fill={CH.front} />
      <path d={`M${hx} ${r1(sh * 0.2)}H${r1(tip - sh * 0.3)}Q${r1(tip)} ${r1(sh * 0.2)} ${r1(tip - sh * 0.5)} ${r1(sh)}H${hx}Z`} fill={CH.low} />
      {threads}
      {/* The conical seat under the head */}
      <path d={`M${hx} ${r1(-cr)}L${r1(x2)} ${r1(-sh)}V${r1(sh)}L${hx} ${r1(cr)}Z`} fill={CH.front} />
      <path d={`M${hx} ${r1(cr * 0.25)}L${r1(x2)} ${r1(sh * 0.2)}V${r1(sh)}L${hx} ${r1(cr)}Z`} fill={CH.low} />
      {/* The hex head: its top, front and under faces, then the end face */}
      <path d={`M0 ${-s}H${r1(hx)}L${r1(hx + w)} ${-s / 2}H${r1(w)}Z`} fill={CH.light} />
      <rect x={w} y={-s / 2} width={hx} height={s} fill={CH.front} />
      <path d={`M${r1(w)} ${s / 2}H${r1(hx + w)}L${r1(hx)} ${s}H0Z`} fill={CH.low} />
      <path d={`M0 ${-s}L${r1(-w)} ${-s / 2}V${s / 2}L0 ${s}L${r1(w)} ${s / 2}V${-s / 2}Z`} fill={CH.light} />
      <path d={`M${r1(-w)} ${s / 2}L0 ${s}L${r1(w)} ${s / 2}Z`} fill={CH.front} />
    </g>
  );
};

export default {
  // "de wielbout": the wheel bolt — one big chrome wheel bolt lying in front (hex head with its end face
  // turned to us, the conical seat, a short threaded shank), two smaller ones lying behind it.
  'w.wielbout': () => (
    <g>
      <Ground cx={60} cy={101} rx={48} ry={5} />
      <g transform="translate(24 30) rotate(-10)">{bolt(10.5, 30, 'a')}</g>
      <g transform="translate(60 38) rotate(-10)">{bolt(10.5, 30, 'b')}</g>
      <g transform="translate(22 78) rotate(-10)">{bolt(20, 44, 'c')}</g>
      <Shine d="M18 63L25 58" width={3.4} opacity={0.9} color={PAL.white} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
