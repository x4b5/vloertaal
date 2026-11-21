import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** A block in the slanted view: front rectangle (x, y, w, h), its top and right faces `d` deep. */
const block = (x: number, y: number, w: number, h: number, d: number, front: string, top: string, side: string) => {
  const ox = r1(d * DX);
  const oy = r1(d * DY);
  return (
    <g>
      <path d={`M${x} ${y}L${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + ox)} ${r1(y + oy)}Z`} fill={top} />
      <path d={`M${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + w + ox)} ${r1(y + h + oy)}L${x + w} ${y + h}Z`} fill={side} />
      <rect x={x} y={y} width={w} height={h} fill={front} />
    </g>
  );
};

/** The disc: its centre, its radii seen from a little above, and its thickness. */
const CX = 60;
const CY = 66;
const RX = 44;
const RY = 15;
const T = 7;

/** A point on an ellipse round the disc at angle a (degrees, 0 = right, 90 = front). */
const on = (rx: number, ry: number, a: number): [number, number] => {
  const t = (a * Math.PI) / 180;
  return [r1(CX + rx * Math.cos(t)), r1(CY + ry * Math.sin(t))];
};

/** The turning arrow: along the front of the disc's rim, from the left round to the right, with its head. */
const ARX = 52;
const ARY = 22;
const A0 = 162;
const A1 = 28;
const HEAD = (() => {
  const [tx, ty] = on(ARX, ARY, A1 - 14);
  const t = ((A1 - 14) * Math.PI) / 180;
  const ux = Math.sin(t);
  const uy = -Math.cos(t) * (ARY / ARX);
  const len = Math.hypot(ux, uy);
  const [vx, vy] = [ux / len, uy / len];
  const bx = tx - vx * 12;
  const by = ty - vy * 12;
  return `M${tx} ${ty}L${r1(bx - vy * 9)} ${r1(by + vx * 9)}L${r1(bx + vy * 9)} ${r1(by - vx * 9)}Z`;
})();

export default {
  // "de draaitafel": the turntable — a round steel disc on a short dark pedestal with a blue part on it,
  // and a sky-blue curved arrow round the front of the disc: the table turns, the worker stays put.
  'w.draaitafel': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={36} ry={4} />
      {/* The pedestal and its foot */}
      <ellipse cx={CX} cy="100" rx="28" ry="7" fill={PAL.slateDark} />
      <rect x={CX - 28} y="94" width="56" height="6" fill={PAL.slateDark} />
      <ellipse cx={CX} cy="94" rx="28" ry="7" fill={PAL.slate} />
      <rect x={CX - 11} y={CY + 6} width="22" height="24" fill={PAL.slate} />
      <rect x={CX + 3} y={CY + 6} width="8" height="24" fill={PAL.slateDark} />
      {/* The disc: its rim, then its top */}
      <Shade color={PAL.slate} opacity={1} at={[CX + 40, CY + 8, 24, 20]}>
        <path d={`M${CX - RX} ${CY}V${CY + T}A${RX} ${RY} 0 0 0 ${CX + RX} ${CY + T}V${CY}Z`} fill={PAL.steel} />
      </Shade>
      <ellipse cx={CX} cy={CY} rx={RX} ry={RY} fill={PAL.mist} />
      <ellipse cx={CX} cy={CY} rx={RX - 7} ry={RY - 4} fill="none" stroke={PAL.paperShade} strokeWidth="1.6" />
      <Shine d={`M${CX - 30} ${CY - 6}Q${CX - 18} ${CY - 12} ${CX - 4} ${CY - 13}`} width={3} opacity={0.8} />
      {/* The part on the table */}
      {block(42, 44, 30, 22, 14, PAL.blue, PAL.blueLight, PAL.blueShade)}
      <circle cx="57" cy="55" r="5.5" fill={PAL.navyShade} />
      {/* The turning arrow round the front */}
      <path
        d={`M${on(ARX, ARY, A0).join(' ')}A${ARX} ${ARY} 0 0 0 ${on(ARX, ARY, A1).join(' ')}`}
        fill="none"
        stroke={PAL.sky}
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      <path d={HEAD} fill={PAL.sky} stroke={PAL.sky} strokeWidth="3.5" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
