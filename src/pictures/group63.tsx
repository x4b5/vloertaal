import type { JSX } from 'react';
import { Arrow, Ground, Hand, PAL, SKIN, Shade, Shine, type Pt } from './kit';

/**
 * Word pictures, group 63 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Lesson "Fixing things" (u.ruwbouw): fixing, tightening and gluing, and the hand tools for it, drawn
 * like the tools the owner approved (group53, group58 to group61): solid things get a slanted view
 * with a light top, a darker side and a ground shadow; a tool that is a bare bar keeps it flat.
 *
 *  - to fix (bevestigen): a hand presses a wooden board flat on a red brick wall; both screws are in
 *    the board, and short lines at one say it has just gone in (no drill: that is "boren").
 *  - to tighten (vastzetten): a hand from the left turns a nut down on its bolt in a lying orange
 *    steel plate, and a sky-blue arrow goes over it clockwise (no spanner: that is "de moersleutel").
 *  - to glue (lijmen): a hand squeezes a white glue bottle with an orange nozzle and a wood-coloured
 *    band; a straight line of white glue runs along the top of a wooden block to the nozzle.
 *  - the Allen key (de inbussleutel): one big L of six-sided bar, the long arm about twice the short
 *    one, a purple coating with the bare steel ends showing, a six-sided face at each end.
 *  - the Phillips screwdriver (de kruisschroevendraaier): a yellow screwdriver with a pointed tip in
 *    a screw with a cross (+) in a plank.
 *  - the flat screwdriver (de platte schroevendraaier): a red screwdriver with a long thin shaft and
 *    a straight, flat tip, sitting in a screw with one straight slot in the same plank.
 *
 * The six stand side by side in a picture choice, so each has its own main shape and colour: a red
 * wall with a hand on a board, an orange plate with a fist and a round arrow, a white bottle in a
 * hand over wood, a purple L, and two screwdrivers with their own handle colour, tip and screw head
 * (a point in a cross, a flat tip in one slot). The three verbs each have a hand doing the action.
 */

/** The darker facet of bare steel (the owner's approved pincers, group53). */
const STEEL_DARK = '#5d6a75';

/** Light end grain and top of the wood. */
const WOOD_LIGHT = '#f0c48a';

const r1 = (n: number) => Math.round(n * 10) / 10;
const pts = (p: Pt[]) => p.map(([x, y]) => `${r1(x)} ${r1(y)}`).join(' ');

/** A line with round ends: a bar, a bead of glue. */
const line = (d: string, stroke: string, w: number, opacity?: number) => (
  <path d={d} fill="none" stroke={stroke} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" opacity={opacity} />
);

/** Degrees to a unit vector. */
const dir = (deg: number): Pt => [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180)];

/**
 * A block in the slanted view: the front face (x, y, w, h), its top going back `d` units to the top
 * right, and its right side.
 */
function Slab({ x, y, w, h, d, front, top, side }: { x: number; y: number; w: number; h: number; d: number; front: string; top: string; side: string }) {
  const dx = d * 0.7;
  const dy = -d * 0.55;
  return (
    <g strokeLinejoin="round">
      <polygon points={pts([[x + w, y], [x + w + dx, y + dy], [x + w + dx, y + h + dy], [x + w, y + h]])} fill={side} stroke={side} strokeWidth="1.2" />
      <polygon points={pts([[x, y], [x + w, y], [x + w + dx, y + dy], [x + dx, y + dy]])} fill={top} stroke={top} strokeWidth="1.2" />
      <rect x={x} y={y} width={w} height={h} fill={front} />
    </g>
  );
}

/** A wooden block in the slanted view. */
const Wood = (p: { x: number; y: number; w: number; h: number; d: number }) => (
  <Slab {...p} front={PAL.card} top={WOOD_LIGHT} side={PAL.cardShade} />
);

/* ------------------------------------------------------------------------------------------
 * Screwdrivers
 * ---------------------------------------------------------------------------------------- */

/** Handle colours of a screwdriver: [base, shade, light]. */
type Grip = [string, string, string];

/**
 * A screwdriver with its tip at `tip`, its handle going up to the right at `ang` degrees: a sharp
 * point, or a flat tip as wide as the shaft and cut off straight; the steel shaft, a dark collar and
 * a chunky handle with its shade side and two grooves.
 */
function Screwdriver({ tip, ang, flat, grip }: { tip: Pt; ang: number; flat: boolean; grip: Grip }) {
  const [base, shade, light] = grip;
  const shaft = flat ? 30 : 24;
  const h0 = shaft + 7;
  return (
    <g transform={`translate(${tip[0]} ${tip[1]}) rotate(${ang})`}>
      {flat ? (
        <>
          {/* A long thin shaft ending in a straight flat tip, its last bit ground a little thinner */}
          <rect x="8" y="-3" width={shaft} height="6" fill={PAL.steel} />
          <rect x="8" y="0.6" width={shaft} height="2.4" fill={STEEL_DARK} />
          <path d="M9 -3L0.6 -2.4V2.4L9 3Z" fill={PAL.steel} stroke={PAL.steel} strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M9 0.6L0.6 0.3V2.4L9 3Z" fill={STEEL_DARK} />
        </>
      ) : (
        <>
          <rect x="10" y="-3.4" width={shaft} height="6.8" fill={PAL.steel} />
          <rect x="10" y="0.8" width={shaft} height="2.6" fill={STEEL_DARK} />
          {/* A sharp point, its ridge darker */}
          <path d="M13 -3.4L5 -2.8L-3 0L5 2.8L13 3.4Z" fill={PAL.steel} stroke={PAL.steel} strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M13 0.6L5 0.4L-3 0L5 2.8L13 3.4Z" fill={STEEL_DARK} />
        </>
      )}
      <rect x={h0 - 7} y="-6" width="7" height="12" rx="2" fill={PAL.slate} />
      <Shade color={shade} opacity={1} at={[h0 + 16, 14, 30, 9]}>
        <rect x={h0 - 2} y="-9.5" width="30" height="19" rx="8" fill={base} />
      </Shade>
      {line(`M${h0 + 5} -3.5H${h0 + 22}M${h0 + 5} 2.5H${h0 + 22}`, shade, 2)}
      <Shine d={`M${h0 + 3} -6.5H${h0 + 21}`} color={light} width={2.6} opacity={0.8} />
    </g>
  );
}

/**
 * A plank in the slanted view with one screw head in its top, and a screwdriver in it: the screw's
 * mark is a cross or one slot, and the screwdriver's tip sits in the middle of it.
 */
function ScrewScene({ flat, grip }: { flat: boolean; grip: Grip }) {
  const c: Pt = [52, 78.5];
  return (
    <g>
      <Ground cx={60} cy={100} rx={46} ry={4} />
      <Wood x={12} y={86} w={70} h={12} d={28} />
      {/* The screw head lying in the plank's top: a depth edge, a light face */}
      <ellipse cx={c[0]} cy={c[1] + 2.2} rx="17" ry="7" fill={PAL.steel} />
      <ellipse cx={c[0]} cy={c[1]} rx="17" ry="7" fill={PAL.mist} />
      {flat
        ? line(`M${c[0] - 11} ${c[1]}H${c[0] + 11}`, PAL.slate, 4.6)
        : line(`M${c[0] - 11} ${c[1]}H${c[0] + 11}M${c[0]} ${c[1] - 4.6}V${c[1] + 4.6}`, PAL.slate, 4.2)}
      <Screwdriver tip={flat ? [c[0] + 1, c[1] - 1] : [c[0] + 2, c[1] - 8]} ang={flat ? -62 : -60} flat={flat} grip={grip} />
    </g>
  );
}

/* ------------------------------------------------------------------------------------------
 * Hands and the nut (vastzetten, lijmen)
 * ---------------------------------------------------------------------------------------- */

/**
 * Where a holding hand's wrist goes (kit `Hand pose="hold"`, rotated `ang` degrees, scale `s`) so
 * that the thing it holds runs through `p` at `ang` degrees: 20 units "below" its fingers.
 */
const holdWrist = (p: Pt, ang: number, s: number): Pt => {
  const [c, sn] = dir(ang);
  return [p[0] - 20 * s * sn, p[1] + 20 * s * c];
};

/**
 * The transform that lays a flat thing drawn round (0, 0) on the slanted ground plane at (cx, cy):
 * its x runs to the right, its y goes back (up and to the right), like the tops of `Slab`.
 */
const flatAt = (cx: number, cy: number) => `matrix(1 0 0.7 -0.55 ${cx} ${cy})`;

/** A nut's six corners in the ground plane, radius 13: two flat sides face the spanner's jaws. */
const NUT = pts(Array.from({ length: 6 }, (_, i) => dir(i * 60).map((v) => v * 13) as Pt));

/**
 * A nut lying on the plate at `c`, from `from` to `to` units above it: its sides (stacked copies),
 * and with `top` its light top face.
 */
function Nut({ c, from, to, top = false }: { c: Pt; from: number; to: number; top?: boolean }) {
  const steps = Array.from({ length: Math.ceil((from - to) / 1.2) + 1 }, (_, i) => Math.max(to, from - i * 1.2));
  return (
    <g>
      {steps.map((k) => (
        <g key={k} transform={flatAt(c[0], c[1] - k)}>
          <polygon points={NUT} fill={STEEL_DARK} />
        </g>
      ))}
      {top && (
        <g transform={flatAt(c[0], c[1] - to)}>
          <polygon points={NUT} fill={PAL.steel} />
        </g>
      )}
    </g>
  );
}

/** An open-end spanner in the ground plane, its jaws round a nut at (0, 0), its handle turned `rot` degrees. */
const Spanner = ({ rot, color }: { rot: number; color: string }) => (
  <g transform={`rotate(${rot})`} fill={color}>
    <path d="M-20 11.3A23 23 0 1 0 -20 -11.3L14 -11.3L14 11.3Z" />
    <rect x="16" y="-6.5" width="50" height="13" rx="6.5" />
  </g>
);

/** A sky-blue arrow along the points `p`, its head at the last one. */
function PathArrow({ p }: { p: Pt[] }) {
  const end = p[p.length - 1];
  const prev = p[p.length - 2];
  const len = Math.hypot(end[0] - prev[0], end[1] - prev[1]) || 1;
  const u: Pt = [(end[0] - prev[0]) / len, (end[1] - prev[1]) / len];
  const n: Pt = [-u[1], u[0]];
  const tip: Pt = [end[0] + u[0] * 12, end[1] + u[1] * 12];
  return (
    <g>
      <path d={`M${p.map((q) => pts([q])).join('L')}`} fill="none" stroke={PAL.sky} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points={pts([tip, [end[0] + n[0] * 9, end[1] + n[1] * 9], [end[0] - n[0] * 9, end[1] - n[1] * 9]])} fill={PAL.sky} stroke={PAL.sky} strokeWidth="3" strokeLinejoin="round" />
    </g>
  );
}

/* ------------------------------------------------------------------------------------------
 * The Allen key: a six-sided bar bent into an L
 * ---------------------------------------------------------------------------------------- */

/** The L's corner, the end of the long arm (x), the end of the short arm (y) and the bar's width. */
const KEY = { c: [18, 42] as Pt, long: 98, short: 94, w: 22 };

/**
 * The L as a six-sided bar seen from the front, from `a` units after the short arm's end to `b`
 * units before the long arm's end: a light facet on top (on the left for the down arm), the flat
 * middle face and a dark facet below (on the right), a quarter, a half and a quarter wide.
 */
function KeyBar({ a, b, colors: [base, shade, light] }: { a: number; b: number; colors: [string, string, string] }) {
  const { c: [x, y], long, short, w } = KEY;
  const band = (o: number, bw: number, color: string) => {
    const r = w / 2 + 3 + o;
    return <path d={`M${x - o} ${short - a}V${y - o + r}Q${x - o} ${y - o} ${x - o + r} ${y - o}H${long - b}`} stroke={color} strokeWidth={bw} />;
  };
  return (
    <g fill="none">
      {band(0, w / 2 + 0.6, base)}
      {band((3 * w) / 8, w / 4 + 0.3, light)}
      {band((-3 * w) / 8, w / 4 + 0.3, shade)}
    </g>
  );
}

export default {
  // "bevestigen": to fix, attach firmly to a wall — a board on a plain brick wall, one screw in, the
  // other screw going in, a sky-blue arrow pushing it into the wall.
  'w.bevestigen': () => {
    const hole: Pt = [67, 52];
    const out: Pt = [-0.786, 0.618];
    const across: Pt = [-out[1], out[0]];
    const at = (k: number, side = 0): Pt => [hole[0] + out[0] * k + across[0] * side, hole[1] + out[1] * k + across[1] * side];
    const head = at(25);
    return (
      <g>
        <Ground cx={52} cy={105} rx={44} ry={4} />
        {/* The wall: big bricks, a light top, a dark side */}
        <Slab x={10} y={22} w={72} h={83} d={18} front={PAL.clay} top={PAL.clayLight} side={PAL.clayShade} />
        <path d="M10 43H82M10 64H82M10 85H82M46 22V43M28 43V64M64 43V64M46 64V85M28 85V105M64 85V105" stroke={PAL.clayShade} strokeWidth="2" opacity=".55" />
        {/* The board on the wall, with its depth edge */}
        <rect x="21" y="38" width="58" height="28" rx="3" fill={PAL.cardDark} />
        <rect x="18" y="35" width="58" height="28" rx="3" fill={PAL.card} />
        <Shine d="M23 40H40" color={WOOD_LIGHT} width={3} opacity={1} />
        {/* The first screw, all the way in */}
        <circle cx="28" cy="49" r="7" fill={PAL.steel} />
        <circle cx="27.4" cy="48.4" r="5.4" fill={PAL.mist} />
        {line('M23.6 48.4H31.2M27.4 44.6V52.2', PAL.slate, 2)}
        {/* The second screw, half in: its hole, its thread and its head towards us */}
        <ellipse cx={hole[0]} cy={hole[1]} rx="4.5" ry="4" fill={PAL.brown} />
        {line(`M${pts([hole])}L${pts([head])}`, PAL.steel, 7)}
        {line([6, 11, 16, 21].map((k) => `M${pts([at(k, -3.4)])}L${pts([at(k - 2, 3.4)])}`).join(''), STEEL_DARK, 1.6)}
        <circle cx={head[0]} cy={head[1]} r="9" fill={PAL.steel} />
        <circle cx={head[0] - 0.7} cy={head[1] - 0.7} r="7.2" fill={PAL.mist} />
        {line(`M${head[0] - 5.5} ${head[1] - 0.7}H${head[0] + 4}M${head[0] - 0.7} ${head[1] - 5.5}V${head[1] + 4}`, PAL.slate, 2.4)}
        {/* The arrow: into the wall */}
        <Arrow from={at(30, -15)} to={at(4, -15)} width={7} head={11} />
      </g>
    );
  },

  // "vastzetten": to tighten — a spanner round the nut of a bolt in a blue steel plate, and a
  // sky-blue arrow going round the nut clockwise.
  'w.vastzetten': () => {
    const c: Pt = [50, 72];
    const h = 11;
    const lift = 22;
    const R = 32;
    const arrow = Array.from({ length: 12 }, (_, i): Pt => {
      const t = ((165 - i * 13) * Math.PI) / 180;
      return [c[0] + R * Math.cos(t) + 0.7 * R * Math.sin(t), c[1] - h - lift - 0.55 * R * Math.sin(t)];
    });
    const rot = -20;
    return (
      <g>
        <Ground cx={58} cy={104} rx={50} ry={4} />
        {/* The steel plate, lying, seen at a slant */}
        <Slab x={8} y={84} w={74} h={12} d={46} front={PAL.blueShade} top={PAL.blue} side={PAL.navy} />
        {/* The nut's lower half, the spanner round it, the nut's upper half and its top, the bolt's end */}
        <Nut c={c} from={h} to={h / 2} />
        <g transform={flatAt(c[0], c[1] - h / 2 + 3)}>
          <Spanner rot={rot} color={PAL.steel} />
        </g>
        <g transform={flatAt(c[0], c[1] - h / 2)}>
          <Spanner rot={rot} color={PAL.mist} />
        </g>
        <Nut c={c} from={h / 2} to={0} top />
        <rect x={c[0] - 6} y={c[1] - h - 9} width="12" height="9" fill={PAL.mist} />
        <rect x={c[0] + 1.5} y={c[1] - h - 9} width="4.5" height="9" fill={PAL.steel} />
        <g transform={flatAt(c[0], c[1] - h - 9)}>
          <circle r="6" fill={PAL.paper} />
        </g>
        {/* The arrow round the nut: turning clockwise */}
        <PathArrow p={arrow} />
      </g>
    );
  },

  // "lijmen": to glue — a hand holds a fat white glue bottle by its end, nozzle down; a thick line
  // of white glue runs along the top of a darker wooden block to the nozzle.
  'w.lijmen': () => {
    const tip: Pt = [58, 70];
    const ang = -58;
    const s = 0.62;
    const [ux, uy] = dir(ang);
    const grip: Pt = [tip[0] + ux * 60, tip[1] + uy * 60];
    const wrist = holdWrist(grip, ang, s);
    return (
      <g>
        <Ground cx={54} cy={104} rx={46} ry={4} />
        <Slab x={10} y={80} w={64} h={22} d={34} front={PAL.cardShade} top={PAL.card} side={PAL.cardDark} />
        {/* The line of glue along the block's top, ending at the nozzle */}
        {line(`M20 73.4H${tip[0] - 2}`, PAL.mist, 9)}
        {line(`M20 71.6H${tip[0] - 2}`, PAL.white, 7)}
        {/* The bottle, nozzle down: an orange nozzle and cap, a fat white body with a blue label */}
        <g transform={`translate(${tip[0]} ${tip[1]}) rotate(${ang})`}>
          <path d="M0 -2L13 -5.5V5.5L0 2Z" fill={PAL.orange} stroke={PAL.orange} strokeWidth="1.6" strokeLinejoin="round" />
          <rect x="11" y="-9.5" width="9" height="19" rx="2.5" fill={PAL.orangeShade} />
          <Shade color={PAL.mist} opacity={1} at={[45, 18, 34, 10]}>
            <path d="M18 -8Q20 -16 30 -16H66Q70 -16 70 -12V12Q70 16 66 16H30Q20 16 18 8Z" fill={PAL.paper} />
          </Shade>
          <rect x="31" y="-16.5" width="16" height="33" fill={PAL.blue} />
        </g>
        <Hand pose="hold" x={wrist[0]} y={wrist[1]} rotate={ang} scale={s} skin={SKIN.henk} sleeve={[PAL.green, PAL.greenShade]} />
      </g>
    );
  },

  // "de inbussleutel": the Allen key — one big L of six-sided bar, the long arm longer than the
  // short one, in three facets, a purple coating with the bare steel ends, a six-sided end face.
  'w.inbussleutel': () => {
    const { c, long, w } = KEY;
    const y = c[1];
    const hex = (k: number, f: number) => pts([[long, y - f], [long + k, y - f / 2], [long + k, y + f / 2], [long, y + f], [long - k, y + f / 2], [long - k, y - f / 2]]);
    return (
      <g>
        <Ground cx={60} cy={104} rx={42} ry={4} />
        <KeyBar a={0} b={0} colors={[PAL.steel, STEEL_DARK, PAL.paper]} />
        <KeyBar a={14} b={16} colors={[PAL.purple, PAL.purpleShade, PAL.purpleLight]} />
        <polygon points={hex(w * 0.3, w / 2)} fill={PAL.mist} stroke={PAL.mist} strokeWidth="1" strokeLinejoin="round" />
        <polygon points={hex(w * 0.16, w / 4)} fill={PAL.line} />
      </g>
    );
  },

  // "de kruisschroevendraaier": the Phillips screwdriver — a yellow one with a pointed tip, in a
  // screw with a cross in a plank.
  'w.kruisschroevendraaier': () => <ScrewScene flat={false} grip={[PAL.yellow, PAL.yellowShade, PAL.yellowShine]} />,

  // "de platte schroevendraaier": the flat screwdriver — a red one with a long thin shaft and a
  // straight flat tip, in a screw with one slot in a plank.
  'w.platteschroevendraaier': () => <ScrewScene flat grip={[PAL.red, PAL.redShade, PAL.redLight]} />,
} as Record<string, () => JSX.Element>;
