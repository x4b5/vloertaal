import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The spanner lies along a line rising to the top right. */
const ANGLE = -38;
/** Where the spanner's local origin (the centre of the small, open head) sits on the card. */
const OX = 25;
const OY = 88;

type P = [number, number];
const COS = Math.cos((ANGLE * Math.PI) / 180);
const SIN = Math.sin((ANGLE * Math.PI) / 180);
/** A point of the spanner: x along it (to the big head), y across it (down), z its thickness (into the card). */
const at = (x: number, y: number, z = 0): P => [r1(OX + x * COS - y * SIN + z * DX), r1(OY + x * SIN + y * COS + z * DY)];
const path = (p: P[]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

/** Chrome: the front face, the top (lit) faces and the right (shade) faces. */
const CHROME = { front: PAL.steel, top: PAL.mist, side: PAL.slate };
/** The nut: light zinc, lighter than the spanner, so the two stay apart on both cards. */
const NUT = { front: PAL.mist, top: PAL.paper, side: PAL.line };

/** The side faces of an outline (clockwise in x/y) from z0 to z1: only those that face the viewer. */
const sides = (pts: [number, number][], z0: number, z1: number, top: string, side: string, key: string) =>
  pts.map((p, i) => {
    const q = pts[(i + 1) % pts.length];
    const [ax, ay] = at(p[0], p[1], z0);
    const [bx, by] = at(q[0], q[1], z0);
    const len = Math.hypot(bx - ax, by - ay) || 1;
    const nx = (by - ay) / len;
    const ny = -(bx - ax) / len;
    if (nx * DX + ny * DY <= 0.02) return null;
    const fill = -ny > nx ? top : side;
    return <path key={`${key}${i}`} d={path([at(p[0], p[1], z0), at(q[0], q[1], z0), at(q[0], q[1], z1), at(p[0], p[1], z1)])} fill={fill} stroke={fill} strokeWidth=".6" strokeLinejoin="round" />;
  });
const face = (pts: [number, number][], z: number, fill: string) => (
  <path d={path(pts.map(([x, y]) => at(x, y, z)))} fill={fill} stroke={fill} strokeWidth=".6" strokeLinejoin="round" />
);

/**
 * An open-end head: a disc of radius r round (cx, 0) with a jaw slot s wide, open towards `dir`
 * degrees (0 = along the spanner, outwards to the right), its rounded bottom `b` from the centre.
 */
const head = (cx: number, r: number, s: number, b: number, dir: number): [number, number][] => {
  const c = Math.cos((dir * Math.PI) / 180);
  const sn = Math.sin((dir * Math.PI) / 180);
  const put = ([x, y]: [number, number]): [number, number] => [cx + x * c - y * sn, x * sn + y * c];
  const a = Math.asin(s / 2 / r);
  const xc = Math.sqrt(r * r - (s * s) / 4);
  const out: [number, number][] = [];
  const N = 22;
  for (let i = 0; i <= N; i++) {
    const t = a + ((2 * Math.PI - 2 * a) * i) / N;
    out.push([r * Math.cos(t), r * Math.sin(t)]);
  }
  out.push([xc, -s / 2]);
  for (let i = 0; i <= 8; i++) {
    const t = -Math.PI / 2 - (Math.PI * i) / 8;
    out.push([b + (s / 2) * Math.cos(t), (s / 2) * Math.sin(t)]);
  }
  out.push([xc, s / 2]);
  return out.map(put);
};

/** Head centres, sizes and jaws: a small one (bottom left, open) and a big one (top right, on the nut). */
const L = 72;
const T = 6;
const SMALL = head(0, 13, 11, -1.5, 195);
const BIG = head(L, 17, 15, 1.5, 15);
/** The bar between them: narrow at the small end, wider at the big end. */
const BAR: [number, number][] = [[2, -6], [L - 4, -7.6], [L - 4, 7.6], [2, 6]];

/** The hex nut in the big jaw: flats against the jaw sides, its centre a little in from the slot bottom. */
const NUT_R = 15 / Math.sqrt(3);
const NUT_DIR = 15;
/** How far the nut stands out in front of the spanner. */
const NUT_UP = 4;
const NUT_C: [number, number] = [L + Math.cos((NUT_DIR * Math.PI) / 180) * 8.5, Math.sin((NUT_DIR * Math.PI) / 180) * 8.5];
const NUT_PTS: [number, number][] = Array.from({ length: 6 }, (_, i) => {
  const t = ((NUT_DIR + 30 + i * 60) * Math.PI) / 180;
  return [NUT_C[0] + NUT_R * Math.cos(t), NUT_C[1] + NUT_R * Math.sin(t)];
});

export default {
  // "de steeksleutel": the open-end spanner — a long chrome spanner rising to the top right, an open U-jaw at
  // the bottom-left end and the bigger jaw at the top right round a light hex nut (proud of the jaw) with the bolt end in it.
  'w.steeksleutel': () => {
    const [nx, ny] = at(NUT_C[0], NUT_C[1], -NUT_UP);
    return (
      <g>
        <Ground cx={62} cy={104} rx={46} ry={4.5} />
        {/* The nut's depth faces behind the jaw */}
        {sides(NUT_PTS, 0, T + 1, NUT.top, NUT.side, 'n')}
        {/* The spanner: depth faces, then the front */}
        {sides(BAR, 0, T, CHROME.top, CHROME.side, 'b')}
        {sides(SMALL, 0, T, CHROME.top, CHROME.side, 's')}
        {sides(BIG, 0, T, CHROME.top, CHROME.side, 'g')}
        {face(BAR, 0, CHROME.front)}
        {face(SMALL, 0, CHROME.front)}
        {face(BIG, 0, CHROME.front)}
        {/* The sunken middle of the bar */}
        <path d={`M${at(17, 0).join(' ')}L${at(L - 22, 0).join(' ')}`} stroke={PAL.line} strokeWidth="5" strokeLinecap="round" />
        <Shine d={`M${at(15, -4.4).join(' ')}L${at(L - 24, -5.4).join(' ')}`} width={2.4} opacity={0.85} />
        {/* The nut stands proud of the jaw: its front depth faces and front, the bolt end in its hole */}
        {sides(NUT_PTS, -NUT_UP, 0, NUT.top, NUT.side, 'f')}
        {face(NUT_PTS, -NUT_UP, NUT.front)}
        <circle cx={nx} cy={ny} r={4.6} fill={PAL.slate} />
        <circle cx={nx} cy={ny} r={2.8} fill={PAL.steel} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
