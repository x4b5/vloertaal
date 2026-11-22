import { useId, type JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view (as group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
/** The dark side of the blue machine base: one step under PAL.blueShade. */
const BLUE_DEEP = '#0e5690';
/** The far side of a gear: one step under PAL.steel. */
const STEEL_DARK = '#5d6a75';

/** The machine base, a thin slab: front bottom left corner, width, depth, height. */
const BASE = { x: 10, y: 104, w: 84, d: 22, h: 8 };
/** The guard, a box bolted down on the base: front bottom left corner, width, depth, height, frame width. */
const GUARD = { x: 22, y: 94, w: 60, d: 14, h: 58, rim: 6 };
/** The bolt tabs at the guard's foot: how far they stick out, and their height. */
const TAB = { out: 11, h: 9 };

type P = [number, number];
const quad = (...p: P[]) => `M${p.map(([a, b]) => `${r1(a)} ${r1(b)}`).join('L')}Z`;
const seg = (a: P, b: P) => `M${r1(a[0])} ${r1(a[1])}L${r1(b[0])} ${r1(b[1])}`;

/** A gear seen straight on: `n` sharp teeth round a disc of radius r, the points out at R. */
const gear = (cx: number, cy: number, r: number, R: number, n: number, turn = 0) => {
  const step = (2 * Math.PI) / n;
  const pt = (a: number, rad: number) => `${r1(cx + Math.cos(a) * rad)} ${r1(cy + Math.sin(a) * rad)}`;
  return (
    Array.from({ length: n }, (_, i) => {
      const a = turn + i * step;
      return `${i ? 'L' : 'M'}${pt(a - step * 0.3, r)}L${pt(a - step * 0.08, R)}L${pt(a + step * 0.08, R)}L${pt(a + step * 0.3, r)}`;
    }).join('') + 'Z'
  );
};

/** A big bolt head on a tab, 7 units across, with a light glint. */
const bolt = (cx: number, cy: number) => (
  <g key={`${cx}-${cy}`}>
    <circle cx={cx} cy={cy} r="3.5" fill={PAL.slate} />
    <circle cx={cx - 1} cy={cy - 1} r="1.3" fill={PAL.mist} />
  </g>
);

export default {
  // "de afscherming": the machine guard — a big yellow box cover bolted down on a thin blue machine
  // base, a big steel gear with sharp teeth inside it, seen only through the thick bars of its front.
  // On the intro card the gear turns behind the bars: the moving part the guard keeps you from.
  'w.afscherming': () => {
    const id = `as-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    const B = BASE;
    const bx = B.d * DX;
    const by = B.d * DY;
    const bTop = B.y - B.h;
    const { x, y, w, d, h, rim } = GUARD;
    const ox = d * DX;
    const oy = d * DY;
    const top = y - h;
    // The window in the front, and its thick bars: 3 openings across, 2 down.
    const wx = x + rim;
    const wy = top + rim;
    const ww = w - 2 * rim;
    const wh = h - 2 * rim;
    const bars = [
      seg([wx + ww / 3, wy], [wx + ww / 3, wy + wh]),
      seg([wx + (2 * ww) / 3, wy], [wx + (2 * ww) / 3, wy + wh]),
      seg([wx, wy + wh * 0.55], [wx + ww, wy + wh * 0.55]),
    ].join('');
    const gx = wx + ww / 2;
    const gy = wy + wh * 0.42;
    return (
      <g strokeLinejoin="round">
        <Ground cx={58} cy={104} rx={50} ry={4.5} />
        {/* The thin machine base: light top, front, dark right side */}
        <path d={quad([B.x, bTop], [B.x + B.w, bTop], [B.x + B.w + bx, bTop + by], [B.x + bx, bTop + by])} fill={PAL.blue} />
        <rect x={B.x} y={bTop} width={B.w} height={B.h} fill={PAL.blueShade} />
        <path d={quad([B.x + B.w, B.y], [B.x + B.w, bTop], [B.x + B.w + bx, bTop + by], [B.x + B.w + bx, B.y + by])} fill={BLUE_DEEP} />
        {/* The guard: light top, shaded right side, yellow front */}
        <path d={quad([x, top], [x + w, top], [x + w + ox, top + oy], [x + ox, top + oy])} fill={PAL.yellowLight} />
        <path d={quad([x + w, y], [x + w, top], [x + w + ox, top + oy], [x + w + ox, y + oy])} fill={PAL.yellowShade} />
        <rect x={x} y={top} width={w} height={h} rx="2" fill={PAL.yellow} />
        {/* Inside, through the bars: the gear */}
        <clipPath id={id}>
          <rect x={wx} y={wy} width={ww} height={wh} rx="1.5" />
        </clipPath>
        <rect x={wx} y={wy} width={ww} height={wh} rx="1.5" fill={PAL.slateDark} />
        <g clipPath={`url(#${id})`}>
          <Move kind="turn" turn={-90} at={[gx + 2.4, gy - 1.6]}>
            <path d={gear(gx + 2.4, gy - 1.6, 16, 23, 10, 0.16)} fill={STEEL_DARK} />
          </Move>
          <Move kind="turn" turn={-90} at={[gx, gy]}>
            <path d={gear(gx, gy, 16, 23, 10, 0.16)} fill={PAL.mist} />
          </Move>
          <circle cx={gx} cy={gy} r="6" fill={PAL.slate} />
        </g>
        <path d={bars} stroke={PAL.yellow} strokeWidth="5" strokeLinecap="square" clipPath={`url(#${id})`} />
        {/* The bolt tabs at the foot, each held down by a big bolt */}
        {[x - TAB.out, x + w].map((tx) => (
          <g key={tx}>
            <rect x={tx} y={y - TAB.h + 2} width={TAB.out} height={TAB.h} rx="2" fill={PAL.yellowShade} />
            <rect x={tx} y={y - TAB.h} width={TAB.out} height={TAB.h} rx="2" fill={PAL.yellow} />
          </g>
        ))}
        {[bolt(x - TAB.out / 2, y - TAB.h / 2), bolt(x + w + TAB.out / 2, y - TAB.h / 2)]}
        <Shine d={`M${x + 4} ${top + 2.6}H${x + 26}`} color={PAL.yellowShine} width={2.4} opacity={0.9} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
