import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view (as in group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

type P = [number, number];
const pts = (p: P[]) => p.map(([a, b]) => `${r1(a)},${r1(b)}`).join(' ');

/** The gun is drawn in its own frame (nozzle along -x) and turned so that it blows down to the left. */
const T: P = [87, 39];
const ANGLE = -35;
const rad = (ANGLE * Math.PI) / 180;
/** A point of the gun's own frame in the picture. */
const W = (u: number, v: number): P => [
  T[0] + u * Math.cos(rad) - v * Math.sin(rad),
  T[1] + u * Math.sin(rad) + v * Math.cos(rad),
];

/** The nozzle tip and the end of the grip (where the hose comes in), in the gun's frame. */
const NOZ = -54;
const TIP = W(NOZ, 0);
const GRIP: [P, P] = [[6, 5], [-8, 33]];
const GRIP_END = W(-9, 40);

/** The flat steel plate the dust is blown off: front x PX..PX+PW, top edge PY, bottom PB, depth PD. */
const PX = 10;
const PW = 56;
const PY = 95;
const PB = 101;
const PD = 14;
const ptop = (x: number, d: number): P => [x + d * DX, PY + d * DY];

/** The coiled hose: loops hanging from the grip down to the floor (back halves, front halves). */
const COILS = 4;
const STEP = 5;
const coil = () => {
  const [x0, y0] = [GRIP_END[0], GRIP_END[1] + 1];
  const rx = 7.5;
  const ry = 2.8;
  const loop = (i: number) => [x0 + i * 0.8, y0 + i * STEP + ry] as P;
  const back = Array.from({ length: COILS }, (_, i) => {
    const [cx, cy] = loop(i);
    return `M${r1(cx - rx)} ${r1(cy)}A${rx} ${ry} 0 0 1 ${r1(cx + rx)} ${r1(cy)}`;
  }).join('');
  const front = Array.from({ length: COILS }, (_, i) => {
    const [cx, cy] = loop(i);
    return `M${r1(cx + rx)} ${r1(cy)}A${rx} ${ry} 0 0 1 ${r1(cx - rx + 0.8)} ${r1(cy + STEP)}`;
  }).join('');
  return { back, front };
};

/** The air: three lines fanning out from the nozzle tip towards the plate. */
const air = () => {
  const d: P = [-Math.cos(rad), -Math.sin(rad)];
  const n: P = [-d[1], d[0]];
  return [-1, 0, 1].map((k) => {
    const s: P = [TIP[0] + d[0] * 4 + n[0] * k * 2.5, TIP[1] + d[1] * 4 + n[1] * k * 2.5];
    const e: P = [s[0] + d[0] * 15 + n[0] * k * 2.5, s[1] + d[1] * 15 + n[1] * k * 2.5];
    return `M${r1(s[0])} ${r1(s[1])}L${r1(e[0])} ${r1(e[1])}`;
  }).join('');
};

export default {
  // "het persluchtpistool": the air blow gun — an orange blow gun with a dark trigger lever and a long
  // thin steel nozzle, a green coiled hose hanging from its grip; blue air lines go from the nozzle
  // down to a flat steel plate and blow a tan puff of dust and chips off its left end.
  'w.persluchtpistool': () => {
    const c = coil();
    const g = (a: P, b: P) => `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;
    return (
      <g strokeLinejoin="round">
        <Ground cx={60} cy={104} rx={48} ry={4} />
        {/* The flat steel plate: its shaded right side, the light top, the front */}
        <polygon points={pts([[PX + PW, PB], [PX + PW, PY], ptop(PX + PW, PD), [PX + PW + PD * DX, PB + PD * DY]])} fill={PAL.steel} />
        <polygon points={pts([[PX, PY], [PX + PW, PY], ptop(PX + PW, PD), ptop(PX, PD)])} fill={PAL.mist} />
        <rect x={PX} y={PY} width={PW} height={PB - PY} fill={PAL.line} />
        {/* The back halves of the hose loops */}
        <path d={c.back} fill="none" stroke={PAL.greenShade} strokeWidth="3.6" strokeLinecap="round" />
        {/* The gun in its own frame */}
        <g transform={`translate(${T[0]} ${T[1]}) rotate(${ANGLE})`}>
          {/* The grip, its far side in shade, and the steel inlet at its end */}
          <path d={g(GRIP[0], GRIP[1])} stroke={PAL.orangeShade} strokeWidth="15" strokeLinecap="round" transform="translate(2 1)" />
          <path d={g(GRIP[0], GRIP[1])} stroke={PAL.orange} strokeWidth="13" strokeLinecap="round" />
          <rect x="-14" y="37" width="10" height="7" rx="2" fill={PAL.steel} transform="rotate(27 -9 40)" />
          {/* The trigger lever in front of the grip, hinged under the nose */}
          <path d="M-8 6Q-11 16 -19 25" fill="none" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
          {/* The body: a slim rounded head, its underside in shade */}
          <rect x="-12" y="-6" width="32" height="13.5" rx="6.5" fill={PAL.orangeShade} />
          <rect x="-12" y="-7" width="31" height="12" rx="6" fill={PAL.orange} />
          {/* The long thin nozzle, its dark tip, and the collar */}
          <rect x={NOZ} y="-2.3" width={-NOZ - 10} height="4.6" rx="2.3" fill={PAL.steel} />
          <rect x={NOZ + 2} y="-2.3" width={-NOZ - 14} height="1.7" rx=".8" fill={PAL.mist} />
          <rect x={NOZ} y="-2.3" width="5" height="4.6" rx="2" fill={PAL.slate} />
          <rect x="-20" y="-5" width="9" height="10" rx="2" fill={PAL.slate} />
          <Shine d="M-5 -3.5H13" color={PAL.white} width={2.6} opacity={0.55} />
        </g>
        {/* The front halves of the hose loops */}
        <path d={c.front} fill="none" stroke={PAL.green} strokeWidth="3.6" strokeLinecap="round" />
        {/* The air going from the nozzle to the plate */}
        <Move kind="fast" dx={8} dy={-6}>
          <path d={air()} stroke={PAL.sky} strokeWidth="2.6" strokeLinecap="round" />
        </Move>
        {/* (The dust starts on the plate and is blown up off its end.) */}
        <Move kind="from" dx={14} dy={12}>
        {/* The puff of dust lifting off the plate's left end, and chips flying off */}
        <circle cx="25" cy="81" r="7" fill={PAL.cardShade} />
        <circle cx="15" cy="83" r="6" fill={PAL.card} />
        <circle cx="17" cy="72" r="6.5" fill={PAL.card} />
        <circle cx="27" cy="71" r="4.5" fill={PAL.card} />
        <rect x="11" y="54" width="5" height="5" rx="1" fill={PAL.cardDark} transform="rotate(25 13.5 56.5)" />
        <rect x="24" y="53" width="4.5" height="4.5" rx="1" fill={PAL.cardDark} transform="rotate(-20 26 55)" />
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
