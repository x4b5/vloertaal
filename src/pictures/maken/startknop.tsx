import { useId, type JSX } from 'react';
import { PAL, Shade, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The housing: front bottom left corner, width, depth, height. */
const HX = 13;
const HY = 102;
const HW = 72;
const HD = 36;
const HH = 32;

/** How flat a round part looks lying on the top: its height over its width. */
const FLAT = 0.42;

/** A darker step of fleece green for the shaded side of the cap (as in group55). */
const GREEN_DEEP = '#256b31';
/** The shaded side of the steel housing: one step under PAL.steel (as in group53). */
const STEEL_DARK = '#5d6a75';

type P = [number, number];
/** A point on the housing: u along the front, v into the card, z up. */
const iso = (u: number, v: number, z = 0): P => [r1(HX + u + v * DX), r1(HY - z + v * DY)];
const quad = (...p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

/** The outline of an upright cylinder (side and top) standing at (cx, cy), radius r, height h. */
const can = (cx: number, cy: number, r: number, h: number) => {
  const ry = r1(r * FLAT);
  return `M${r1(cx - r)} ${cy - h}V${cy}A${r} ${ry} 0 0 0 ${r1(cx + r)} ${cy}V${cy - h}A${r} ${ry} 0 0 0 ${r1(cx - r)} ${cy - h}Z`;
};

/** An upright cylinder: its side (shaded on the right), then its lit top. */
const cylinder = (id: string, cx: number, cy: number, r: number, h: number, top: string, side: string, deep: string) => (
  <g>
    <clipPath id={id}>
      <path d={can(cx, cy, r, h)} />
    </clipPath>
    <path d={can(cx, cy, r, h)} fill={side} />
    <ellipse cx={r1(cx + r * 1.05)} cy={cy} rx={r1(r * 0.55)} ry={r1(h + r)} fill={deep} clipPath={`url(#${id})`} />
    <ellipse cx={cx} cy={cy - h} rx={r} ry={r1(r * FLAT)} fill={top} />
  </g>
);

/** A low dome over the top rim of a cap: rim at (cx, t), radius r, rising d above it. */
const dome = (cx: number, t: number, r: number, d: number) =>
  `M${r1(cx - r)} ${t}A${r} ${d} 0 0 1 ${r1(cx + r)} ${t}A${r} ${r1(r * FLAT)} 0 0 1 ${r1(cx - r)} ${t}Z`;

export default {
  // "de startknop": the start button — the green sibling of the emergency stop: one big green push
  // button, a low cap with a domed top in a dark collar, alone on a steel button box.
  'w.startknop': () => {
    const id = `sk-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    const [cx, cy] = iso(HW / 2, HD / 2, HH);
    const R = 29;
    const COLLAR = 5;
    const CAP = 8;
    const DOME = 18;
    const top = cy - COLLAR - CAP;
    return (
      <g strokeLinejoin="round">
        {/* Shadow on the ground, under the housing's footprint */}
        <path d={quad(iso(-3, -2, -2), iso(HW + 4, -2, -2), iso(HW + 4, HD + 2, -2), iso(-3, HD + 2, -2))} fill="#000" opacity="0.14" />
        {/* The button box: right side, front, top */}
        <path d={quad(iso(HW, 0), iso(HW, HD), iso(HW, HD, HH), iso(HW, 0, HH))} fill={STEEL_DARK} />
        <path d={quad(iso(0, 0), iso(HW, 0), iso(HW, 0, HH), iso(0, 0, HH))} fill={PAL.steel} />
        <path d={quad(iso(0, 0, HH), iso(HW, 0, HH), iso(HW, HD, HH), iso(0, HD, HH))} fill={PAL.mist} />
        <path d={`M${iso(5, 0, HH - 4.5).join(' ')}L${iso(40, 0, HH - 4.5).join(' ')}`} stroke={PAL.white} strokeWidth="2.4" strokeLinecap="round" opacity="0.6" />
        {/* The collar: a dark ring the button stands in */}
        {cylinder(`${id}-c`, cx, cy, R + 5, COLLAR, PAL.slate, PAL.slateDark, '#1b232a')}
        {/* The button: a low green cap with a domed top, its right side in shade */}
        {cylinder(`${id}-b`, cx, cy - COLLAR, R, CAP, PAL.green, PAL.greenShade, GREEN_DEEP)}
        <Shade color={PAL.greenShade} opacity={1} at={[cx + R + 2, top - 6, 14, 22]}>
          <path d={dome(cx, top, R, DOME)} fill={PAL.green} />
        </Shade>
        <Shine d={`M${r1(cx - R + 7)} ${r1(top - 4)}Q${r1(cx - R + 12)} ${r1(top - 13)} ${r1(cx - 6)} ${r1(top - 16)}`} color={PAL.lime} width={3.5} opacity={0.85} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
