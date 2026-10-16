import type { JSX, ReactNode } from 'react';
import { Bust, Ground, Hand, PAL, SKIN, Shade, Shine } from './kit';

/**
 * Word pictures, group 15 (keyed by word id): "In the shop" and "Time, money and measures"
 * (docs/entree-aanvulling.md, part 5). See docs/tekenstijl.md and ./kit.tsx.
 */

const r1 = (n: number) => Math.round(n * 10) / 10;

/** A point on a circle, `turns` clockwise from 12 o'clock. */
const at = (cx: number, cy: number, r: number, turns: number): [number, number] => {
  const a = turns * 2 * Math.PI - Math.PI / 2;
  return [r1(cx + Math.cos(a) * r), r1(cy + Math.sin(a) * r)];
};

/**
 * A clock that shows a stretch of time: the part of the face from 12 o'clock to the minute hand
 * is filled (a quarter, a half, the whole face), with a curved arrow round the rim the same way.
 * So "het kwartier", "een half uur" and "het uur" read as amounts of time, not as clock times.
 */
function TimeSpan({ part }: { part: number }) {
  const cx = 60;
  const cy = 62;
  const r = 34;
  const face = r * 0.8;
  const [ex, ey] = at(cx, cy, face, part);
  const sector = part >= 1
    ? <circle cx={cx} cy={cy} r={face} fill={PAL.yellow} />
    : <path d={`M${cx} ${cy}V${r1(cy - face)}A${face} ${face} 0 ${part > 0.5 ? 1 : 0} 1 ${ex} ${ey}Z`} fill={PAL.yellow} />;
  // The arrow round the rim: from just after 12 to the end of the stretch (a full hour stops short of 12).
  const ar = r + 9;
  const end = part >= 1 ? 0.93 : part;
  const [sx, sy] = at(cx, cy, ar, 0.02);
  const [tx, ty] = at(cx, cy, ar, end - 0.035);
  const [hx, hy] = at(cx, cy, ar, end);
  const tang = end * 2 * Math.PI; // direction of travel (clockwise), relative to "right"
  const ux = Math.cos(tang);
  const uy = Math.sin(tang);
  const head = 7;
  const tip: [number, number] = [r1(hx + ux * head * 0.6), r1(hy + uy * head * 0.6)];
  const back: [number, number] = [hx - ux * head * 0.8, hy - uy * head * 0.8];
  const l: [number, number] = [r1(back[0] - uy * head), r1(back[1] + ux * head)];
  const rr: [number, number] = [r1(back[0] + uy * head), r1(back[1] - ux * head)];
  const ticks = [0, 0.25, 0.5, 0.75].map((t) => {
    const [x0, y0] = at(cx, cy, face * 0.78, t);
    const [x1, y1] = at(cx, cy, face * 0.94, t);
    return `M${x0} ${y0}L${x1} ${y1}`;
  });
  const [mx, my] = at(cx, cy, face * 0.86, part >= 1 ? 0 : part);
  return (
    <g>
      <path d={`M${sx} ${sy}A${ar} ${ar} 0 ${end > 0.5 ? 1 : 0} 1 ${tx} ${ty}`} fill="none" stroke={PAL.orange} strokeWidth="5" strokeLinecap="round" />
      <polygon points={`${tip.join(' ')} ${l.join(' ')} ${rr.join(' ')}`} fill={PAL.orange} stroke={PAL.orange} strokeWidth="2.5" strokeLinejoin="round" />
      <Shade color={PAL.skyShade} opacity={1} at={[cx + r * 1.25, cy, r * 0.6, r * 1.4]}>
        <circle cx={cx} cy={cy} r={r} fill={PAL.sky} />
      </Shade>
      <circle cx={cx} cy={cy} r={face} fill={PAL.white} />
      {sector}
      <path d={ticks.join('')} stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      <path d={`M${cx} ${cy}L${mx} ${my}`} stroke={PAL.ink} strokeWidth="3.4" strokeLinecap="round" />
      <path d={`M${cx} ${cy}V${r1(cy - face * 0.86)}`} stroke={PAL.ink} strokeWidth="3.4" strokeLinecap="round" opacity={part >= 1 ? 1 : 0.35} />
      <circle cx={cx} cy={cy} r="3.4" fill={PAL.red} />
      <Shine d={`M${r1(cx - r * 0.74)} ${r1(cy - r * 0.3)}A${r * 0.8} ${r * 0.8} 0 0 1 ${r1(cx - r * 0.3)} ${r1(cy - r * 0.74)}`} width={3} opacity={0.5} />
    </g>
  );
}

/** A shelf board with its price strip, products standing on it (front at y). */
function Board({ x, y, w, children }: { x: number; y: number; w: number; children?: ReactNode }) {
  return (
    <g>
      {children}
      <rect x={x} y={y} width={w} height="7" rx="1.5" fill={PAL.paperShade} />
      <rect x={x} y={y} width={w} height="4.5" rx="1.5" fill={PAL.white} />
      <rect x={x + w * 0.2} y={y + 1} width="7" height="5" rx="1" fill={PAL.yellow} />
      <rect x={x + w * 0.66} y={y + 1} width="7" height="5" rx="1" fill={PAL.yellow} />
    </g>
  );
}

/** A tin can standing with its bottom at y. */
function Can({ x, y, w = 11, h = 15, color, shade }: { x: number; y: number; w?: number; h?: number; color: string; shade: string }) {
  return (
    <g>
      <rect x={x} y={y - h} width={w} height={h} rx="2" fill={color} />
      <rect x={x + w * 0.62} y={y - h} width={w * 0.38} height={h} rx="1.5" fill={shade} />
      <rect x={x} y={y - h * 0.68} width={w} height={h * 0.34} fill={PAL.white} opacity=".85" />
      <rect x={x - 0.5} y={y - h - 1} width={w + 1} height="2.4" rx="1" fill={PAL.mist} />
    </g>
  );
}

/** A cereal-style box standing with its bottom at y. */
function Pack({ x, y, w = 13, h = 19, color, shade }: { x: number; y: number; w?: number; h?: number; color: string; shade: string }) {
  return (
    <g>
      <rect x={x} y={y - h} width={w} height={h} rx="1.5" fill={color} />
      <rect x={x + w * 0.66} y={y - h} width={w * 0.34} height={h} rx="1" fill={shade} />
      <circle cx={x + w * 0.38} cy={y - h * 0.58} r={w * 0.22} fill={PAL.yellowLight} />
    </g>
  );
}

/** A bottle standing with its bottom at y. */
function Bottle({ x, y, color, shade }: { x: number; y: number; color: string; shade: string }) {
  return (
    <g>
      <path d={`M${x + 3} ${y - 22}h4v4q4 2 4 7v11h-12v-11q0 -5 4 -7z`} fill={color} />
      <path d={`M${x + 7} ${y - 18}q4 2 4 7v11h-4z`} fill={shade} />
      <rect x={x + 2.5} y={y - 25} width="5" height="4" rx="1" fill={PAL.red} />
    </g>
  );
}

/** The shop shelf: a grey gondola with three boards of products and price strips. */
function ShopShelf({ x, y, w, h, full = true }: { x: number; y: number; w: number; h: number; full?: boolean }) {
  const b1 = y + h * 0.3;
  const b2 = y + h * 0.62;
  const b3 = y + h * 0.94;
  const step = (w - 8) / 4;
  const row = (by: number, kind: number, n = 4) => Array.from({ length: n }, (_, i) => {
    const px = x + 5 + i * step;
    const k = (kind + i) % 3;
    return k === 0
      ? <Can key={i} x={px} y={by} color={PAL.red} shade={PAL.redShade} />
      : k === 1
        ? <Pack key={i} x={px} y={by} color={PAL.blue} shade={PAL.blueShade} />
        : <Bottle key={i} x={px} y={by} color={PAL.green} shade={PAL.greenShade} />;
  });
  return (
    <g>
      {/* Back panel and uprights */}
      <rect x={x} y={y - 6} width={w} height={h + 8} rx="3" fill={PAL.mist} />
      <rect x={x + w - 10} y={y - 6} width="10" height={h + 8} rx="3" fill={PAL.line} opacity=".55" />
      <rect x={x - 3} y={y - 8} width="5" height={h + 12} rx="2" fill={PAL.slate} />
      <rect x={x + w - 2} y={y - 8} width="5" height={h + 12} rx="2" fill={PAL.slateDark} />
      <Board x={x} y={b1} w={w}>{row(b1, 0)}</Board>
      <Board x={x} y={b2} w={w}>{row(b2, 1, full ? 4 : 2)}</Board>
      <Board x={x} y={b3} w={w}>{row(b3, 2)}</Board>
    </g>
  );
}

export default {
  // "het uur": the hour — a clock with its whole face filled and an arrow all the way round.
  'w.uur': () => <TimeSpan part={1} />,

  // "het kwartier": a quarter of an hour — a quarter of the face filled (12 to 3).
  'w.kwartier': () => <TimeSpan part={0.25} />,

  // "een half uur": half an hour — half of the face filled (12 to 6).
  'w.halfuur': () => <TimeSpan part={0.5} />,

  // "de kilo": a cast-iron weight with a handle, "1 kg" on its front.
  'w.kilo': () => (
    <g>
      <Ground cx={60} cy={104} rx={40} ry={5} />
      <path d="M45 40Q45 22 60 22Q75 22 75 40" fill="none" stroke={PAL.slateDark} strokeWidth="8" strokeLinecap="round" />
      <path d="M46 40Q46 25 60 25Q74 25 74 40" fill="none" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" opacity=".6" />
      <Shade color={PAL.slateDark} opacity={1} at={[104, 72, 18, 40]}>
        <path d="M34 40H86L100 100Q100 104 96 104H24Q20 104 20 100Z" fill={PAL.slate} />
      </Shade>
      <rect x="32" y="36" width="56" height="8" rx="3" fill={PAL.slateDark} />
      {/* "1 kg" as strokes */}
      <g fill="none" stroke={PAL.white} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M36 66L42 61V90" />
        <path d="M56 58V90M70 70L57 80L71 90" />
        <path d="M89 80A6.5 7 0 1 1 89 79.9M89 73V93Q89 99 83 99Q79 99 77 96" />
      </g>
      <Shine d="M30 52L26 76" width={3.5} opacity={0.35} />
    </g>
  ),

  // "het schap": the shelf in a shop — a shop gondola with tins, boxes and bottles, price strips.
  'w.schap': () => (
    <g>
      <Ground cx={60} cy={108} rx={46} ry={4} />
      <ShopShelf x={16} y={18} w={88} h={88} />
    </g>
  ),

  // "vakken vullen": to stock the shelves — Jada puts a tin on a half-empty shop shelf.
  'w.vakkenvullen': () => (
    <g>
      <Ground cx={78} cy={108} rx={32} ry={4} />
      <ShopShelf x={58} y={16} w={50} h={90} full={false} />
      <Bust who="jada" x={36} y={128} scale={0.6} expr="pleased" />
      {/* The tin held up to the gap on the middle board */}
      <Hand pose="hold" x={70} y={92} rotate={8} scale={0.62} skin={SKIN.jada} sleeve={[PAL.green, PAL.greenShade]} />
      <Can x={63} y={80} w={14} h={19} color={PAL.red} shade={PAL.redShade} />
    </g>
  ),

  // "de kassa": the checkout, the till — a cash register with a screen (euro) and an open
  // drawer with notes and coins, on the counter.
  'w.kassa': () => (
    <g>
      <rect x="10" y="94" width="100" height="14" rx="3" fill={PAL.cardDark} />
      <rect x="10" y="92" width="100" height="8" rx="3" fill={PAL.wood} />
      {/* Customer screen on its pole */}
      <rect x="57" y="22" width="6" height="22" fill={PAL.slateDark} />
      <rect x="40" y="10" width="40" height="20" rx="4" fill={PAL.slateDark} />
      <rect x="44" y="14" width="32" height="12" rx="2" fill={PAL.lime} />
      <path d="M53 20h14" stroke={PAL.greenShade} strokeWidth="3" strokeLinecap="round" />
      {/* Body with keys */}
      <Shade color={PAL.slateDark} opacity={1} at={[100, 62, 12, 30]}>
        <path d="M24 44H96L102 78H18Z" fill={PAL.slate} />
      </Shade>
      {[0, 1, 2].map((rI) => [0, 1, 2, 3, 4].map((c) => (
        <rect key={`${rI}${c}`} x={31 + c * 12 - rI * 1.5} y={50 + rI * 8.5} width="9" height="5.5" rx="1.6" fill={rI === 2 && c === 4 ? PAL.leaf : PAL.mist} />
      )))}
      {/* Drawer, pulled out */}
      <rect x="16" y="78" width="88" height="14" rx="2" fill={PAL.slateDark} />
      <rect x="22" y="80" width="76" height="10" rx="1.5" fill={PAL.steel} />
      <rect x="25" y="81" width="15" height="8" rx="1" fill={PAL.green} />
      <rect x="43" y="81" width="15" height="8" rx="1" fill={PAL.sky} />
      <circle cx="68" cy="85" r="3.6" fill={PAL.yellow} />
      <circle cx="78" cy="85" r="3.6" fill={PAL.yellow} />
      <circle cx="88" cy="85" r="3.6" fill={PAL.clayLight} />
      <Shine d="M28 48L25 66" width={3} opacity={0.35} />
    </g>
  ),

  // "het wisselgeld": the change — coins dropped into an open hand, an arrow from above (given back).
  'w.wisselgeld': () => (
    <g>
      <Hand pose="open" x={58} y={112} rotate={0} scale={1.25} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      {/* Coins on the palm */}
      {[[50, 76], [64, 74], [57, 66]].map(([cx, cy], i) => (
        <g key={i}>
          <ellipse cx={cx} cy={cy + 2} rx="10" ry="5" fill={PAL.yellowShade} />
          <ellipse cx={cx} cy={cy} rx="10" ry="5" fill={PAL.yellow} />
          <ellipse cx={cx} cy={cy} rx="5.5" ry="2.6" fill="none" stroke={PAL.yellowShade} strokeWidth="1.6" />
        </g>
      ))}
      {/* Falling coins */}
      <g transform="rotate(-20 88 30)">
        <ellipse cx="88" cy="32" rx="8" ry="8" fill={PAL.yellowShade} />
        <ellipse cx="87" cy="30" rx="8" ry="8" fill={PAL.yellow} />
        <circle cx="87" cy="30" r="4.2" fill="none" stroke={PAL.yellowShade} strokeWidth="1.6" />
      </g>
      <g transform="rotate(15 70 18)">
        <ellipse cx="70" cy="20" rx="6.5" ry="6.5" fill={PAL.yellowShade} />
        <ellipse cx="69" cy="18" rx="6.5" ry="6.5" fill={PAL.yellow} />
      </g>
      <path d="M96 46Q94 56 86 60M80 40Q78 50 72 54" fill="none" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),

  // "de euro": the euro — a big euro sign on a navy coin face with the ring of yellow stars.
  'w.euro': () => (
    <g>
      <circle cx="60" cy="63" r="46" fill={PAL.navyShade} />
      <Shade color={PAL.navyShade} opacity={1} at={[112, 60, 22, 60]}>
        <circle cx="60" cy="60" r="46" fill={PAL.navy} />
      </Shade>
      {Array.from({ length: 12 }, (_, k) => {
        const [sx, sy] = at(60, 60, 37, k / 12);
        return <path key={k} d={`M${sx} ${r1(sy - 3.6)}L${r1(sx + 1.1)} ${r1(sy - 1.1)}L${r1(sx + 3.6)} ${r1(sy - 1.1)}L${r1(sx + 1.6)} ${r1(sy + 0.6)}L${r1(sx + 2.3)} ${r1(sy + 3.2)}L${sx} ${r1(sy + 1.7)}L${r1(sx - 2.3)} ${r1(sy + 3.2)}L${r1(sx - 1.6)} ${r1(sy + 0.6)}L${r1(sx - 3.6)} ${r1(sy - 1.1)}L${r1(sx - 1.1)} ${r1(sy - 1.1)}Z`} fill={PAL.yellow} />;
      })}
      {/* The euro sign */}
      <path d="M75 44A20 20 0 1 0 75 76" fill="none" stroke={PAL.white} strokeWidth="8" strokeLinecap="round" />
      <path d="M36 55H62M36 66H60" stroke={PAL.white} strokeWidth="6" strokeLinecap="round" />
      <Shine d="M24 46A40 40 0 0 1 44 22" width={3.5} opacity={0.35} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
